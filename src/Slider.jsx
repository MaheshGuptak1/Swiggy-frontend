import React, { useEffect, useState } from "react";
import './Slider.css';
function Slider() {
    const [vendorData, setVendorData] = useState([]);

    const moveLeft = () => {
        document.querySelector('.slider').scrollBy(-600, 0);
    };

    const moveRight = () => {
        document.querySelector('.slider').scrollBy(600, 0);
    };

    const vendorHandler = async () => {
        try {
            const res = await fetch('https://backend-nodejs-suby.onrender.com/vendor/all-vendors');
            const data = await res.json();
            setVendorData(data.vendors);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        vendorHandler();
    }, []);

    return (
        <div className="main">
            <i className="fa-solid fa-arrow-left" onClick={moveLeft}></i>
            <center>
                <div className="slider">
                    {vendorData.map((ele, index) => (
                        ele.firm.map((t, idx) => (
                            <div className="image" key={`${index}-${idx}`}>
                                <img src={`https://backend-nodejs-suby.onrender.com/uploads/${t.image}`} alt="image" />
                            </div>
                        ))
                    ))}
                </div>
            </center>
            <i className="fa-solid fa-arrow-right" onClick={moveRight}></i>
        </div>
    );
}

export default Slider;
