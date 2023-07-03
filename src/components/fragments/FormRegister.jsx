import Button from "../elements/button/Button";
import InputForm from "../elements/input/InputForm";

const FormRegister = () => {
    return (
        <>
            <form action="">
                <InputForm
                    label="Full Name"
                    name="fullName"
                    type="text"
                    placeholder="Jhon Doe"
                />
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
                <InputForm
                    label="Confirm Password"
                    name="password"
                    type="confirmPassword"
                    placeholder="******"
                />

                <Button
                    text="Register"
                    variant="bg-blue-600 w-full text-white"
                />
            </form>
        </>
    );
};

export default FormRegister;
