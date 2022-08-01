import React from 'react';
import { Link } from 'react-router-dom';

export default function ShopData({ service }) {
    const { productName, image, _id, price, availableQty } = service;
    return (
        <div className="card card-compact w-full bg-slate-50/60 backdrop-blur-2xl transition-colors duration-500 shadow-xl">
            <figure><img src={image} className="h-52" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {productName}
                    <div className="badge badge-neural">NEW</div>
                </h2>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">{availableQty} left</div>
                    <div className="badge ">{price}$ only</div>
                </div>
                <div className="card-actions justify-end">
                    <Link to={`/services/${_id}`} className="btn btn-primary">Details</Link>
                </div>
            </div>
        </div>
    )
}
