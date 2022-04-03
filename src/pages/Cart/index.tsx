import React from "react";

import {
    MdDelete,
    MdAddCircleOutline,
    MdRemoveCircleOutline,
} from "react-icons/md";

import { useCart } from "../../hooks/useCart";
import { formatPrice } from "../../util/format";
import { Container, ProductTable, Total } from "./styles";

interface Product {
    id: number;
    name: string;
    price: number;
    priceTx: number;
    imageUrl: string;
    amount: number;
}

const Cart = (): JSX.Element => {
    const { cart, removeProduct, updateProductAmount } = useCart();

    const cartFormatted = cart.map((product) => {
        return {
            ...product,
            price: formatPrice(product.price),
        };
    });

    const total = cart.reduce((sumTotal, product) => {
        sumTotal += product.price * product.amount;

        return sumTotal;
    }, 0);

    function handleProductIncrement(product: Product) {
        updateProductAmount({
            productId: product.id,
            amount: product.amount + 1,
        });
    }

    function handleProductDecrement(product: Product) {
        updateProductAmount({
            productId: product.id,
            amount: product.amount - 1,
        });
    }

    function handleRemoveProduct(productId: number) {
        removeProduct(productId);
    }

    return (
        <Container>
            <ProductTable>
                <thead>
                    <tr>
                        <th aria-label="product imageUrl" />
                        <th>Produto</th>
                        <th>QTD</th>
                        <th>SubTotal</th>
                        <th aria-label="delete icon" />
                    </tr>
                </thead>
                <tbody>
                    {cartFormatted.map((product) => {
                        const originalProductData = cart.filter(
                            (item) => item.id === product.id
                        );
                        const { price } = originalProductData[0];

                        return (
                            <tr data-testid="product" key={product.id}>
                                <td>
                                    <img
                                        src={product.imageUrl}
                                        alt={product.name}
                                    />
                                </td>
                                <td>
                                    <strong>{product.name}</strong>
                                    <span>{product.priceTx}</span>
                                    <span>{product.price}</span>
                                </td>
                                <td>
                                    <div>
                                        <button
                                            type="button"
                                            data-testid="decrement-product"
                                            disabled={product.amount <= 1}
                                            onClick={() =>
                                                handleProductDecrement({
                                                    ...product,
                                                    price,
                                                })
                                            }
                                        >
                                            <MdRemoveCircleOutline size={20} />
                                        </button>
                                        <input
                                            type="text"
                                            data-testid="product-amount"
                                            readOnly
                                            value={product.amount}
                                        />
                                        <button
                                            type="button"
                                            data-testid="increment-product"
                                            onClick={() =>
                                                handleProductIncrement({
                                                    ...product,
                                                    price,
                                                })
                                            }
                                        >
                                            <MdAddCircleOutline size={20} />
                                        </button>
                                    </div>
                                </td>
                                <td>
                                    <strong>{product.price}</strong>
                                </td>
                                <td>
                                    <button
                                        type="button"
                                        data-testid="remove-product"
                                        onClick={() =>
                                            handleRemoveProduct(product.id)
                                        }
                                    >
                                        <MdDelete size={20} />
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </ProductTable>

            <footer>
                <Total>
                    <span>TOTAL</span>
                    <strong>{formatPrice(total)}</strong>
                </Total>
            </footer>
            <footer>
                <div>
                    {total >= 10 && (
                        <div id="btn-green">
                            "Parabéns, sua compra tem frete grátis !"
                        </div>
                    )}
                    <button type="submit">Finalizar pedido</button>
                </div>
            </footer>
        </Container>
    );
};

export default Cart;
