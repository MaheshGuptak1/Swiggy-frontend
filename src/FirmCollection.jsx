import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './FirmCollection.css';

const FirmCollections = () => {
  const [firmData, setFirmData] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState('all');

  const firmDataHandler = async () => {
    try {
      const res = await fetch('https://backend-nodejs-suby.onrender.com/vendor/all-vendors');
      const newFirmData = await res.json();
      setFirmData(newFirmData.vendors);
    } catch (error) {
      alert("firm data not fetched");
      console.error("firm data not fetched", error);
    }
  };

  useEffect(() => {
    firmDataHandler();
  }, []);

  const filterHandler = (region) => {
    setSelectedRegion(region.toLowerCase());
  };

  return (
    <>
      <h3>Restaurants with online food delivery in Hyderabad</h3>
      <div className="filterButtons">
        <button onClick={() => filterHandler('all')}>All</button>
        <button onClick={() => filterHandler('south-indian')}>South-Indian</button>
        <button onClick={() => filterHandler('north-indian')}>North-Indian</button>
        <button onClick={() => filterHandler('chinese')}>Chinese</button>
        <button onClick={() => filterHandler('bakery')}>Bakery</button>
      </div>
      <section className="grid-container">
        {firmData.map((vendor) => 
        {
                    return   vendor.firm.map((t) => {
                        if (selectedRegion === 'all' || t.region.includes(selectedRegion)) {
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
         
                            );
                        }
                        else{
                            return null;
                        }
                    })

        }
        )

        //use either return () or () to render the html css 
        // use {} to render js

        }
      </section>
    </>
  );
};

export default FirmCollections;
