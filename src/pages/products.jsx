import { Fragment, useState } from "react";
import CardProduct from "../components/fragments/CardProduct";
import Button from "../components/elements/button/Button";

const products = [
    {
        id: 1,
        name: "Mechanical Keyboard",
        price: 1000000,
        image: "/img/mecha-keyboard.jpg",
        description:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi dolor eveniet, quasi eaque molestiae deserunt velit itaque similique maiores corporis!",
    },
    {
        id: 2,
        name: "Membrane Keyboard",
        price: 300000,
        image: "/img/mecha-keyboard.jpg",
        description:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    },
    {
        id: 3,
        name: "Office Keyboard",
        price: 200000,
        image: "/img/mecha-keyboard.jpg",
        description:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi dolor eveniet, quasi eaque molestiae.",
    },
];

const email = localStorage.getItem("email");

const ProductsPage = () => {
    const [cart, setCart] = useState([
        {
            id: 1,
            qty: 1,
        },
    ]);

    const handleAddToCart = (id) => {
        if (cart.find((item) => item.id === id)) {
            setCart(
                cart.map((item) =>
                    item.id === id ? { ...item, qty: item.qty + 1 } : item
                )
            );
        } else {
            setCart([...cart, { id, qty: 1 }]);
        }
    };

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
                <div className="w-4/6 flex flex-wrap">
                    {products.map((product) => (
                        <CardProduct key={product.id}>
                            <CardProduct.Header image={product.image} />
                            <CardProduct.Body name={product.name}>
                                {product.description}
                            </CardProduct.Body>
                            <CardProduct.Footer
                                price={product.price}
                                id={product.id}
                                addToCart={handleAddToCart}
                            />
                        </CardProduct>
                    ))}
                </div>
                <div className="w-2/6">
                    <h1 className="text-3xl font-bold text-blue-600 ml-5 mb-2">
                        Cart
                    </h1>
                    <table className="text-left table-auto border-separate border-spacing-x-5">
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((item) => {
                                const product = products.find(
                                    (product) => product.id === item.id
                                );
                                return (
                                    <tr key={item.id}>
                                        <td>{product.name}</td>
                                        <td>
                                            Rp.{" "}
                                            {product.price.toLocaleString(
                                                "id-ID",
                                                {
                                                    styles: "curency",
                                                    currency: "IDR",
                                                }
                                            )}
                                        </td>
                                        <td>{item.qty}</td>
                                        <td>
                                            Rp.{" "}
                                            {(
                                                item.qty * product.price
                                            ).toLocaleString("id-ID", {
                                                styles: "curency",
                                                currency: "IDR",
                                            })}
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </Fragment>
    );
};

export default ProductsPage;
