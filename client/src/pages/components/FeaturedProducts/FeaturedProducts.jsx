import React from "react";
import "./FeaturedProducts.scss";
import Card from "../Card/Card";
const FeaturedProducts = ({ type }) => {
    const data = [
        {
            id: 1,
            img: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
            img2: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
            title: "Mens Casual Premium Slim Fit T-Shirts",
            isNew: true,
            oldPrice: 19,
            price: 12,
        },
        {
            id: 2,
            img: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
            img2: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
            title: "Mens Cotton Jacket",
            isNew: false,
            oldPrice: 55,
            price: 39,
        },
        {
            id: 3,
            img: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
            img2: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
            title: "Mens Casual Slim Fit",
            isNew: true,
            oldPrice: 25,
            price: 20,
        },
        {
            id: 4,
            img: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
            img2: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
            title: "John Hardy Women's Legends Naga",
            isNew: false,
            oldPrice: 120,
            price: 99,
        },
        {
            id: 5,
            img: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UL879_.jpg",
            img2: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
            title: "Solid Gold Petite Micropave",
            isNew: true,
            oldPrice: 200,
            price: 150,
        },
    ];

    return (
        <div className="featuredProducts">
            <div className="top">
                <h1>{type} product</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Molestiae cumque facilis libero impedit similique voluptates
                    ad qui omnis fuga eligendi earum quasi nostrum distinctio,
                    veniam eveniet tenetur deleniti est id!
                </p>
            </div>
            <div className="bottom">
                {data.map((item) => (
                    <Card item={item} key={item.id} />
                ))}
            </div>
        </div>
    );
};

export default FeaturedProducts;
