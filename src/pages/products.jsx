import CardProduct from "../components/fragments/CardProduct";

const ProductsPage = () => {
    return (
        <div className="flex justify-center py-5">
            <CardProduct>
                <CardProduct.Header image="/public/img/mecha-keyboard.jpg" />
                <CardProduct.Body title="Mecha Keyboard">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Excepturi dolor eveniet, quasi eaque molestiae deserunt
                    velit itaque similique maiores corporis!
                </CardProduct.Body>
                <CardProduct.Footer price="Rp.700.000" />
            </CardProduct>
        </div>
    );
};

export default ProductsPage;
