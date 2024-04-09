function Validation(values) {

    let error = {}
    const email_pattern = /^[^\s@]+@[^\s@]+z.[^\s@]+$/
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/

    if(values.email === "") {
        error.email = "Email wajib di isi!"
    }
    else if (!email_pattern.test(values.email)) {
        error.email = "Email tidak terdaftar!"
    } else {
        error.email = ""
    }

    if (values.password === "") {
        error.password = "Password wajib diisi!"
    }
    else if (!password_pattern.test(values.password)) {
        error.password = "Password tidak cocok!"
    } else {
        error.password = ""
    }

    return error;
}

export default Validation;