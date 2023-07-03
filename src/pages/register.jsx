import { Link } from "react-router-dom";
import FormRegister from "../components/fragments/FormRegister";
import AuthLayout from "../components/layouts/AuthLayout";

const RegisterPage = () => {
    return (
        <>
            <AuthLayout title="Register">
                <FormRegister />
                <p className="mt-5 text-center text-sm">
                    Already have an account?{" "}
                    <Link to="/login" className="font-bold text-blue-600">
                        Login
                    </Link>
                </p>
            </AuthLayout>
        </>
    );
};

export default RegisterPage;
