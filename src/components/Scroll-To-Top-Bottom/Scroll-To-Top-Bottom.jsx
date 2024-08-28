import React, { useRef } from "react";
import useFetch from "../UseFetch-Coctum-Hook/useFetch";
import "./../headerStyle.css";

const ScrollToTopBottom = () => {
    const { data, error, pending } = useFetch(
        "https://dummyjson.com/products",
        {}
    );
    const bottomRef=useRef(null);
    const handleScrollToTop=()=>{
        window.scrollTo({
            top:0,
            left:0,
            behavior:'smooth'
        })
    };
    const handleScrollToBottom=()=>{
        bottomRef.current.scrollIntoView({behavior:'smooth'});
    };
    return (
        <div>
            <h1 className="title">Scroll To Top And Bottom</h1>
            {pending && <p>Loading Data ...</p>}
            {
                !pending && <button type="button" className="block mt-3 mx-auto py-2 px-4 md:max-w-md  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg" onClick={handleScrollToBottom}>

                    Scroll To Bottom
                </button>
            }

            <div className="flex flex-wrap gap-4 p-6 justify-center text-lg font-serif">
                {!pending && data && data.products && data.products.length
                    ? data.products.map((product) => {
                        return (
                            <a
                                key={product.id}
                                href="#"
                                className="bg-gray-100 flex-grow text-black border-l-8 border-green-500 rounded-md px-3 py-2 w-full md:w-5/12 lg:w-3/12"
                            >
                                {product.title}
                                <div className="text-gray-500 font-light text-sm pt-1">
                                    <span>Price: {product.price}$</span>
                                    <span>Rating: {product.rating}</span>
                                </div>
                            </a>
                        );
                    })
                    : null}
            </div>
            {
                !pending && <button ref={bottomRef} type="button" className="block py-2 mx-auto px-4 md:max-w-md  bg-violet-600 hover:bg-violet-700 focus:ring-violet-500 focus:ring-offset-violet-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg mb-3" onClick={handleScrollToTop}>

                    Scroll To Top
                </button>
            }

        </div>
    );
};

export default ScrollToTopBottom;
