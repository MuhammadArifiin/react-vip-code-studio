import Button from "../elements/button/Button";
import InputForm from "../elements/input/InputForm";

const FormLogin = () => {
    return (
        <>
            <form action="">
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

                <Button text="Login" variant="bg-blue-600 w-full text-white" />
            </form>
        </>
    );
};

export default FormLogin;
