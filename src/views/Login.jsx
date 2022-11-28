import LoginForm from "../components/Login/LoginForm";

const Login = () => {
    return (
        <div className="login animate__animated animate__fadeIn">
            <h2>Welcome to The Signs! A website for translating English words into American Sign Language (ASL)</h2>
            <LoginForm />
        </div>
    )
}

export default Login;