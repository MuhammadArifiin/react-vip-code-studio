const Button = (props) => {
    const { text = "...", variant = "bg-red-400" } = props;
    return (
        <>
            <button
                className={`h-10 px-6 font-semibold rounded-md ${variant} text-black`}
                type="submit"
            >
                {text}
            </button>
        </>
    );
};

export default Button;
