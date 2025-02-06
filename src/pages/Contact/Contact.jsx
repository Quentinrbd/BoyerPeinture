import './Contact.scss'
import Header from "../../components/Header/HeaderOther"
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import { useForm } from "react-hook-form"

import checkimg from "../../assets/check.svg"
import bucket from "../../assets/paint.png"

export default function Contact() {

    const form = useRef();
    const sendEmail = (formData) => {
  
      emailjs.send("service_lmlu27j", "template_ygs8ptr", formData, "xiQfLtounP9S2oE7h").then(
        (result) => {
          console.log(result.text);
          form.current?.reset();
          setCheck(true)
        },
        (error) => {
          console.log(error.text);
        }
      );
    };

    const [check, setCheck] = useState(false)

    const {handleSubmit, register, formState: {errors}} = useForm()
  return (
    <>
      <Header />


      <div className="formulaire">
      <img src={bucket} alt="" id='bucket' />
        <h1>Contactez-nous</h1>
        
        <form  onSubmit={handleSubmit(sendEmail)} ref={form}>
          <label>Votre nom</label>  
          <input type="text" placeholder='Nom' id="name" name='user_name' {... register("name", {required: true, minLength:2})}/>
          {errors.name && <p className='error'>Nom de plus de deux caractères obligatoire.</p>}
          <label htmlFor="email">Votre email</label> 
          <input type="email"  placeholder='Email'id="email" name='user_email' {...register("email", { pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, required: true })} />
          {errors.email && <p className='error'>Votre email n'est pas valide.</p>}

          <label htmlFor="">Votre message</label> 
          <textarea name="message"  placeholder='Message' id="message" cols="30" rows="10" {... register("message", {required: true, minLength: 10})}/>
          {errors.message && <p className='error'>Message de plus de dix caractères obligatoire.</p>}
          <button className={check ? 'button active' : 'button'} type='submit'>
            <span id='btn-text'>ENVOYER</span>
            <img src={checkimg} alt="" />
          </button>          
        </form>
      </div>

    </>
  )
}   