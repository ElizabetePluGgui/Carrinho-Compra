import { createContext, ReactNode, useContext, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { Product } from "../types";

interface CartProviderProps {
    children: ReactNode;
}

interface UpdateProductAmount {
    productId: number;
    amount: number;
}

interface CartContextData {
    cart: Product[];
    addProduct: (productId: number) => Promise<void>;
    removeProduct: (productId: number) => void;
    updateProductAmount: ({ productId, amount }: UpdateProductAmount) => void;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

export function CartProvider({ children }: CartProviderProps): JSX.Element {
    const [cart, setCart] = useState<Product[]>(() => {
        const storagedCart = localStorage.getItem("@CarrinhoCompras:cart");

        if (storagedCart) {
            return JSON.parse(storagedCart);
        }

        return [];
    });

    const addProduct = async (productId: number) => {
        try {
            const productExistingInCart = cart.find(
                (product) => product.id === productId
            );

            let cartCopy: Product[] = [];

            if (productExistingInCart) {
                const responseStock = await api.get(`/stock/${productId}`);

                const QtdOfProductExistingInCart = productExistingInCart
                    ? productExistingInCart.amount
                    : 0;

                if (QtdOfProductExistingInCart < responseStock.data.amount) {
                    cartCopy = cart.map((item) => {
                        if (item.id === productId) {
                            return {
                                ...item,
                                amount: item.amount + 1,
                            };
                        }

                        return item;
                    });
                } else {
                    toast.error("Adicione outro Bombom!");
                    return;
                }
            } else {
                const response = await api.get(`/products/${productId}`);
                cartCopy = [...cart, { ...response.data, amount: 1 }];
            }

            setCart(cartCopy);
            localStorage.setItem(
                "@CarrinhoCompras:cart",
                JSON.stringify(cartCopy)
            );
        } catch {
            toast.error("Erro ao adicionar produto");
        }
    };

    const removeProduct = (productId: number) => {
        try {
            const product = cart.find((item) => item.id === productId);

            if (product) {
                const newCart = cart.filter((item) => item.id !== product.id);
                localStorage.setItem(
                    "@CarrinhoCompras:cart",
                    JSON.stringify(newCart)
                );
                setCart(newCart);
            } else {
                throw new Error();
            }
        } catch {
            toast.error("Erro ao remover o produto");
        }
    };

    const updateProductAmount = async ({
        productId,
        amount,
    }: UpdateProductAmount) => {
        try {
            if (amount <= 0) return;

            const response = await api.get(`/stock/${productId}`);

            if (amount < response.data.amount) {
                const newCart = cart.map((item) => {
                    if (item.id === productId) {
                        return {
                            ...item,
                            amount,
                        };
                    }

                    return item;
                });

                localStorage.setItem(
                    "@CarrinhoCompras:cart",
                    JSON.stringify(newCart)
                );
                setCart(newCart);
            } else {
                toast.error("Adicione outro Bombom, esse acabou!");
                return;
            }
        } catch {
            toast.error(
                "Erro ao alterar a quantidade do produto! Tente de novo."
            );
        }
    };

    return (
        <CartContext.Provider
            value={{ cart, addProduct, removeProduct, updateProductAmount }}
        >
            {children}
        </CartContext.Provider>
    );
}

export function useCart(): CartContextData {
    const context = useContext(CartContext);

    return context;
}
