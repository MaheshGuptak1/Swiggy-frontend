import React, { useState, useEffect } from "react";
import './FirmCollection.css'; // Import your CSS file
import { BrowserRouter, Link } from "react-router-dom";
function FirmCollection() {
    const [Firmdata, setFirmdata] = useState([]);
    const [Region,setRegion] =useState('all');

    const FilterHandler=(name)=>{
        setRegion(name);
        console.log(Region);
    }
    const loadData = async () => {
        try {
            const res = await fetch('https://backend-nodejs-suby.onrender.com/vendor/all-vendors');
            const data = await res.json();
            setFirmdata(data.vendors);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        loadData();
    }, []);


    return(
        <>
       <div className="filter">
                <button onClick={() => FilterHandler('all')}>All</button>
                <button onClick={() => FilterHandler('south-Indian')}>South-Indian</button>
                <button onClick={() => FilterHandler('north-Indian')}>North-Indian</button>
                <button onClick={() => FilterHandler('chinese')}>Chinese</button>
                <button onClick={() => FilterHandler('bakery')}>Bakery</button>
            </div>
        <div className="grid-container">
            {
                Firmdata.map((obj)=>{
                     return obj.firm.map((t)=>{

                        if(Region==='all' || t.region.includes(Region)){
                        return (

                            <Link to={`/firmdata/${t._id}`}>
                       <div className="firm-item">
                             <div className="firm-image">
                                <img src={`https://backend-nodejs-suby.onrender.com/uploads/${t.image}`} alt={t.image}></img>
                            </div>

                            <div className="firm-data">
                                <p>{`${t.firmName}`}</p>
                                <p>{`${t.region}`}</p>
                                <p>{`${t.area}`}</p>
                            </div>
                        </div>
                       </Link>


                        )
                        }
                        else{
                            return null;
                        }
                })
}
            
            )
            }
            
        </div>

        </>
    )
}

export default FirmCollection;
