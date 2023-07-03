import { Link } from "react-router-dom";
import FormLogin from "../components/fragments/FormLogin";
import AuthLayout from "../components/layouts/AuthLayout";

const LoginPage = () => {
    return (
        <>
            <AuthLayout title="Login">
                <FormLogin />
                <p className="mt-5 text-center text-sm">
                    Don't have an account?{" "}
                    <Link to="/register" className="font-bold text-blue-600">
                        Register
                    </Link>
                </p>
            </AuthLayout>
        </>
    );
};

export default LoginPage;
