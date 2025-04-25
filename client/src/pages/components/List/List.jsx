import React from "react";
import "./List.scss";
import Card from "../../components/Card/Card";
const List = () => {
    const data = [
        {
            id: 1,
            img: "https://images.unsplash.com/photo-1601758123927-4f3a2b8c5d1e",
            img2: "https://images.unsplash.com/photo-1601758123927-4f3a2b8c5d1e",
            title: "Product 1",
            isNew: true,
            oldPrice: 20,
            price: 10,
        },
        {
            id: 2,
            img: "https://images.unsplash.com/photo-1601758123927-4f3a2b8c5d1e",
            img2: "https://images.unsplash.com/photo-1601758123927-4f3a2b8c5d1e",
            title: "Product 2",
            isNew: true,
            oldPrice: 20,
            price: 10,
        },
        {
            id: 3,
            img: "https://images.unsplash.com/photo-1601758123927-4f3a2b8c5d1e",
            img2: "https://images.unsplash.com/photo-1601758123927-4f3a2b8c5d1e",
            title: "Product 3",
            isNew: true,
            oldPrice: 20,
            price: 10,
        },
        {
            id: 4,
            img: "https://images.unsplash.com/photo-1601758123927-4f3a2b8c5d1e",
            img2: "https://images.unsplash.com/photo-1601758123927-4f3a2b8c5d1e",
            title: "Product 4",
            isNew: true,
            oldPrice: 20,
            price: 10,
        },
        {
            id: 5,
            img: "https://images.unsplash.com/photo-1601758123927-4f3a2b8c5d1e",
            img2: "https://images.unsplash.com/photo-1601758123927-4f3a2b8c5d1e",
            title: "Product 5",
            isNew: true,
            oldPrice: 20,
            price: 10,
        },
        {
            id: 6,
            img: "https://images.unsplash.com/photo-1601758123927-4f3a2b8c5d1e",
            img2: "https://images.unsplash.com/photo-1601758123927-4f3a2b8c5d1e",
            title: "Product 6",
            isNew: true,
            oldPrice: 20,
            price: 10,
        },
    ];
    return (
        <div className="list">
            {data?.map((item) => {
                <Card item={item} key={item.id} />;
            })}
        </div>
    );
};

export default List;
