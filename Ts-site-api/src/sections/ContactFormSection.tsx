import React, { useState } from 'react'

interface ValueType {
    name: string;
    email: string;
    comment: string;
}
type ErrorType = Partial<ValueType>

const ContactFormSection = () => {
    const [contactForm, setContactForm] = useState<ValueType>({name: '', email: '', comment: ''})
    const [formErrors, setFormErrors] = useState<ErrorType>({})
    const [submitted, setSubmitted] = useState(false)
    const [errorText, setErrorText] = useState("")
    const sendToApi = (json:string) => {
        fetch ('https://win22-webapi.azurewebsites.net/api/contactform',{
            method: 'POST',
            headers: {
                    'Content-Type': 'application/json'
                },
                    body: json
                })
                .then((res) => {
            if(res.status === 200) return res.text()
            else return "Something went wrong sending data to the api"
        })
        .then((text) => {
            setErrorText(text)
            setSubmitted(true)
        })  
    }
    const validate = (values:ValueType) => {
        const errors:ErrorType = {}
        const regex_email = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/


        if(!values.name)
            errors.name = "You must enter a name"
        if(!values.email)
            errors.email = "You must enter an email"
        else if(!regex_email.test(values.email))
            errors.email = "You must enter a valid email address (ex.name@domain.com)"

        if(!values.comment)
            errors.comment = "You must enter a comment"
        else if(values.comment.length < 5)
            errors.comment = "You must express yourself a bit more"




        return errors;
    }

    const handleChange = (e:React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => {
        const {id, value} = e.target
        setContactForm({...contactForm, [id]: value})
    }


    const handleSubmit = (e:React.FormEvent) => {
        e.preventDefault();      
        let errorObjoct = validate(contactForm);      
        if (!(Object.keys(errorObjoct).length === 0)) {       
            setFormErrors(errorObjoct);     
        } else {       
            let name = contactForm.name;       
            let email = contactForm.email;       
            let comments = contactForm.comment;       
            const json = JSON.stringify({ name, email, comments });              
            sendToApi(json);     
        }
    }


  return (
    <section className="contact-form">
        <div className="container">
            {
                submitted ?
                (<div className="rely d-flex justify-content-center align-items-center">
                    <div>{errorText}</div>
                </div>)
                :
                (
                    <>
                        <h2>Come in Contact with Us</h2>
                        <form onSubmit={handleSubmit} noValidate>
                            <div>
                                <input id="name" type="text" placeholder="Your Name" value={contactForm.name} onChange={handleChange} />
                                <div className="errorMessage">{formErrors.name}</div>
                            </div>
                            <div>
                                <input id="email" type="email" placeholder="Your Mail" value={contactForm.email} onChange={handleChange} />
                                <div className="errorMessage">{formErrors.email}</div>
                            </div>
                            <div className="textarea">
                                <textarea id="comment" placeholder="Comments" value={contactForm.comment} onChange={handleChange} ></textarea>
                                <div className="errorMessage">{formErrors.comment}</div>
                            </div>
                            <div>
                                <button type="submit" className="btn-theme">Post Comments
                                    <span className="corner-left"></span>
                                    <span className="corner-right"></span>
                                </button>
                            </div>
                        </form>
                    </>
                )
            }

        </div>
    </section>
  )
}

export default ContactFormSection