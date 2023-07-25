import { Link } from "react-router-dom";

const AuthLayout = (props) => {
    const { title, children, type } = props;
    return (
        <>
            <div className="flex justify-center bg-white h-screen items-center">
                <div className="w-full max-w-xs">
                    <h1 className="text-3xl font-bold mb-2 text-blue-600">
                        {title}
                    </h1>
                    <p className="font-medium text-slate-500 mb-8">
                        Welcome, Please enter your details
                    </p>
                    {children}
                    <p className="mt-5 text-center text-sm">
                        {type == "login"
                            ? "Don't have an account? "
                            : "Already have an account? "}

                        {type == "login" && (
                            <Link
                                to="/register"
                                className="font-bold text-blue-600"
                            >
                                Register
                            </Link>
                        )}

                        {type == "register" && (
                            <Link
                                to="/login"
                                className="font-bold text-blue-600"
                            >
                                Login
                            </Link>
                        )}
                    </p>
                </div>
            </div>
        </>
    );
};

export default AuthLayout;
