import express from 'express';
import helmet from 'helmet';
import {rateLimit} from 'express-rate-limit';
import nodemailer from 'nodemailer';

const app=express();
app.use(helmet()); app.use(express.json({limit:'25kb'}));
app.use('/api/contact',rateLimit({windowMs:15*60*1000,limit:5,standardHeaders:'draft-7',legacyHeaders:false}));
app.post('/api/contact',async(req,res)=>{
  const {name,email,phone,message,car,budget,type,company}=req.body||{};
  if(company)return res.status(200).json({ok:true});
  if(!name||!email||!phone||!message||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))return res.status(400).json({error:'Datos no válidos'});
  try{
    const transport=nodemailer.createTransport({host:process.env.SMTP_HOST,port:Number(process.env.SMTP_PORT||465),secure:process.env.SMTP_SECURE!=='false',auth:{user:process.env.SMTP_USER,pass:process.env.SMTP_PASS}});
    await transport.sendMail({from:process.env.SMTP_FROM,to:process.env.CONTACT_TO,replyTo:email,subject:(type==='presupuesto'?'Nuevo presupuesto: ':'Nueva consulta: ')+name,text:['Nombre: '+name,'Email: '+email,'Teléfono: '+phone,car?'Coche: '+car:'',budget?'Presupuesto: '+budget:'','Mensaje: '+message].filter(Boolean).join('\n')});
    res.json({ok:true});
  }catch(e){console.error('SMTP error:',e.message);res.status(502).json({error:'No se pudo enviar'});}
});
app.listen(process.env.PORT||3001,()=>console.log('Contact API ready'));
