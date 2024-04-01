import React, { useEffect, useState } from 'react'
import ProductList from '../../components/ProductLIst/product-list';
import { Headphones, Phones, TProduct } from '../../utils/products';
export const ShopPage: React.FC = () => {
    return (
        <section>
            <ProductList products={Headphones} category="Наушники" />
            <ProductList products={Phones} category="Смартфоны"/>
        </section>
    );
};