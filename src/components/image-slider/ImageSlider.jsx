import React, { useEffect, useState } from "react";
import "./ImageSlider.css";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

const ImageSlider = ({ url, limit, page }) => {
    const URL = `${url}?page=${page}&limit=${limit}`;
    const [images, setImages] = useState([]);
    const [currentImage, setCurrentImage] = useState(0);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handlePrevious = () => {
        setCurrentImage(currentImage <= 0 ? images.length - 1 : currentImage - 1);
    };
    const handleNext = () => {
        setCurrentImage(currentImage >= images.length - 1 ? 0 : currentImage + 1);
    };
    const fetchImages = async (URL) => {
        setLoading(true);
        try {
            const response = await fetch(URL);
            const data = await response.json();
            if (data) {
                setImages(data);
            }
        } catch (error) {
            setError(e.message);
        }finally {setLoading(false)}
    };
    useEffect(() => {
        if (URL !== "") fetchImages(URL);
    }, [URL]);
    if (loading) return <p>Loading Data ...</p>;
    if (error) return <p>{error}</p>;
    return (
        <div className="image-slider">
            <h1 className="font-bold text-xl text-center">image slider</h1>
            <section className="slider">
                <div
                    className="arrow-container"
                    style={{ top: "50%", left: "50%", transform: "translate(-50%,-50%)" }}
                >
                    <BsArrowLeftCircleFill onClick={handlePrevious} className="arrow" />
                    <BsArrowRightCircleFill onClick={handleNext} className="arrow" />
                </div>
                {images.map((img) => {
                    return (
                        <img
                            key={img.id}
                            src={img.download_url}
                            className={currentImage == img.id ? "selected" : "hide"}
                        />
                    );
                })}

                <div
                    className="dots"
                    style={{
                        bottom: "0",
                        left: "50%",
                        transform: "translateX(-50%)",
                    }}
                >
                    {images.map((_, index) => {
                        return (
                            <span
                                key={index}
                                className={`dot ${currentImage == index ? "selected" : null}`}
                                onClick={() => setCurrentImage(index)}
                            ></span>
                        );
                    })}
                </div>
            </section>
        </div>
    );
};

export default ImageSlider;
