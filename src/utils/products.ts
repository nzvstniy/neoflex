export type TProduct = {
    id: number;
    image: string;
    title: string;
    price: number;
    rate: number;
    quantity: number;
}
export interface CartProps {
    [productCount: string]: TProduct
}

export const Headphones: TProduct[] = [
    {
        id: 1,
        image: "airpods1.png",
        title: 'Apple airpods',
        price: 1111,
        rate: 1.5,
        quantity: 0,
    },
    {
        id: 2,
        image: '/galaxy-bud.png',
        title: 'Galaxy Buds',
        price: 2222,
        rate: 2.3,
        quantity: 0,
    },
    {
        id: 3,
        image: '/mitrue1.png',
        title: 'Mi True Earphones',
        price: 3333,
        rate: 3.1,
        quantity: 0,
    },
    {
        id: 4,
        image: '/sony-ear.png',
        title: 'Sony Earphones',
        price: 4444,
        rate: 4.7,
        quantity: 0,
    },
    {
        id: 5,
        image: '/jbl-ear.png',
        title: 'JBL Earphones',
        price: 5555,
        rate: 5,
        quantity: 0,
    },
    {
        id: 6,
        image: '/honor-earbuds.png',
        title: 'Honor Earbuds',
        price: 6666,
        rate: 2,
        quantity: 0,
    },
]
export const Phones: TProduct[] = [
    {
        id: 7,
        image: '/galaxy a15.png',
        title: 'Samsung Galaxy a15',
        price: 7777,
        rate: 3.3,
        quantity: 0,
    },
    {
        id: 8,
        image: '/iphone.png',
        title: 'Iphone 1',
        price: 8888,
        rate: 4,
        quantity: 0,
    },
    {
        id: 9,
        image: '/mi-phone.png',
        title: 'Xiaomi M123',
        price: 9999,
        rate: 3.6,
        quantity: 0,
    },
]