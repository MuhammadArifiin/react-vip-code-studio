import { Fragment } from "react";
import CardProduct from "../components/fragments/CardProduct";
import Button from "../components/elements/button/Button";

const products = [
    {
        id: 1,
        name: "Mechanical Keyboard",
        price: "Rp 700.000",
        image: "/public/img/mecha-keyboard.jpg",
        description:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi dolor eveniet, quasi eaque molestiae deserunt velit itaque similique maiores corporis!",
    },
    {
        id: 2,
        name: "Membrane Keyboard",
        price: "Rp 300.000",
        image: "/public/img/mecha-keyboard.jpg",
        description:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    },
    {
        id: 3,
        name: "Office Keyboard",
        price: "Rp 200.000",
        image: "/public/img/mecha-keyboard.jpg",
        description:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi dolor eveniet, quasi eaque molestiae.",
    },
];

const email = localStorage.getItem("email");

const ProductsPage = () => {
    const handleLogout = () => {
        localStorage.removeItem("email");
        localStorage.removeItem("password");
        window.location.href = "/login";
    };
    return (
        <Fragment>
            <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
                {email}
                <Button
                    className="ml-5 bg-black"
                    onClick={handleLogout}
                    text="Logout"
                ></Button>
            </div>
            <div className="flex justify-center py-5">
                {products.map((product) => (
                    <CardProduct key={product.id}>
                        <CardProduct.Header image={product.image} />
                        <CardProduct.Body name={product.name}>
                            {product.description}
                        </CardProduct.Body>
                        <CardProduct.Footer price={product.price} />
                    </CardProduct>
                ))}
            </div>
        </Fragment>
    );
};

export default ProductsPage;
