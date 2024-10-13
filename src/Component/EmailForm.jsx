import React, { useState } from 'react'

const EmailForm = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

  return (
    <form onSubmit = {handleSubmit} className="emailForm">
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
    </form>
    
  )
}

export default EmailForm