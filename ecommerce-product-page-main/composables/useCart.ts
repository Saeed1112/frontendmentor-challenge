import {computed, useState} from "#imports";
import {Order, Product} from "~/type/interfaces";

export const useCart = () => {


    const cart = useState<{ orders: Order[] }>('cart', () => ({
        orders: []
    }))


    function addOrder(newProduct: Product, qty: number) {
        const index = cart.value.orders.findIndex(({product}) => product.id === newProduct.id)
        if (index >= 0)
            cart.value.orders[index] = {product: newProduct, qty}
        else
            cart.value.orders.push({
                product: newProduct, qty
            })
    }

    function deleteOrder(productId: string | number) {
        const index = cart.value.orders.findIndex(({product}) => product.id === productId)
        if (index < 0) return;
        cart.value.orders.splice(index, 1)
    }

    const totalOrders = computed(() => cart.value.orders.length && cart.value.orders.reduce((previousValue, currentValue) => {
        previousValue.qty += currentValue.qty;
        return {...previousValue}
    }).qty)

    return {cart, deleteOrder, addOrder, totalOrders}


}
