import React from 'react'
import {Container} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {useState} from 'react'
import Validation from '../components/LoginValidation'

const MasukPage = () => {
    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const [errors, setErrors] = useState({})

    const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setErrors(Validation(values))
    }


  return (
    <div className='login min-vh-100 '>
        <div className="login-container">
            <Container>
            <h1>Login</h1>
            <form action="" onSubmit={handleSubmit}>
                <div className="login-fields">
                    {errors.email && <span className='text-danger'> {errors.email} </span>}
                    <input type="email" placeholder='Email Address' name='email'
                    onChange={handleInput}/>

                    {errors.password && <span className='text-danger'> {errors.password} </span>}
                    <input type="password" placeholder='Password' name='password'
                    onChange={handleInput}/>
                </div>
                <button type='submit' className='btn btn-outline-danger rounded-1 w-100'>Login</button>
                <p className="login-login">Belum punya akun? <Link to="/daftar" className='fw-bold'>Daftar Disini!</Link></p>
            </form>
            </Container>
        </div>
    </div>
  )
}

export default MasukPage