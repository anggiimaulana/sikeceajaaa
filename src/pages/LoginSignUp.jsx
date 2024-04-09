import {useState} from 'react'
import {Container} from 'react-bootstrap'
import {Link, useNavigate} from 'react-router-dom'
import Validation from '../components/DaftarValidation'
import axios from 'axios'

const loginSignUp = () => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: ''
    })

    const navigate = useNavigate()

    const [errors, setErrors] = useState({})

    const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name]: event.target.value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const err = (Validation(values))
        setErrors(err)
        if(err.name === "" && err.email === "" && err.password === "") {
            axios.post('http://localhost:8080/akun', values)
            .then(res => {
                navigate('/login')
            })
            .catch(err => console.log(err))
        }
    }

  return (
    <div className='loginsignup min-vh-100'>
        <div className="loginsignup-container">
            <Container>
            <h1>Daftar Akun</h1>
            <form action="" onSubmit={handleSubmit}>
                <div className="loginsignup-fields">

                    {errors.name && <span className='text-danger'> {errors.name} </span>}
                    <input type="text" placeholder='Nama Lengkap' name='name'
                    onChange={handleInput}/>

                    {errors.email && <span className='text-danger'> {errors.email} </span>}
                    <input type="email" placeholder='Email Address' name='email'
                    onChange={handleInput}/>

                    {errors.password && <span className='text-danger'> {errors.password} </span>}
                    <input type="password" placeholder='Password' name='password'
                    onChange={handleInput}/>
                    
                </div>
                <div className="loginsignup-agree">
                    <input type="checkbox" name='' id=''/>
                    <p>Saya setuju dengan ketentuan penggunaan & kebijakan privasi.</p>
                </div>
                <button type='submit' className='btn w-100'>Daftar</button>
                <p className="loginsignup-login">Sudah punya akun? <Link to="/login" className='fw-bold'>Login!</Link></p>
            </form>
            </Container>
        </div>
    </div>
  )
}

export default loginSignUp