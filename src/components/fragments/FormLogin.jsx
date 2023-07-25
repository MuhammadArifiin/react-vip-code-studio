import Button from "../elements/button/Button";
import InputForm from "../elements/input/InputForm";

const FormLogin = () => {
    const handleLogin = (event) => {
        event.preventDefault();
        localStorage.setItem("email", event.target.email.value);
        localStorage.setItem("password", event.target.password.value);
        window.location.href = "/products";
    };
    return (
        <>
            <form onSubmit={handleLogin}>
                <InputForm
                    label="Email"
                    name="email"
                    type="text"
                    placeholder="example@mail.com"
                />
                <InputForm
                    label="Password"
                    name="password"
                    type="password"
                    placeholder="******"
                />

                <Button
                    text="Login"
                    className="bg-blue-600 w-full text-white"
                    type="submit"
                ></Button>
            </form>
        </>
    );
};

export default FormLogin;
