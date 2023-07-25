const Button = (props) => {
    const {
        text = "...",
        onClick = () => {},
        className = "bg-black",
        type = "button",
    } = props;
    return (
        <>
            <button
                className={`h-10 px-6 font-semibold rounded-md ${className} text-white`}
                type={type}
                onClick={() => onClick()}
            >
                {text}
            </button>
        </>
    );
};

export default Button;
