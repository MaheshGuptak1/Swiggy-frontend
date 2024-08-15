import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './Firmitemspage.css';
import Nav from "./Nav";

function Firmitemspage() {
    const {firmid,firmName}= useParams();
    const [Productdata,setProductsdata] = useState([]);



    const ProductdataHandler=async ()=>{
        try{
            const res=await fetch(`https://backend-nodejs-suby.onrender.com/product/${firmid}/products`);
            const data=await res.json();
           
            setProductsdata(data.products);
            console.log(data.products);
        }
        catch(error){
            console.log(error);
        }
    }

    useEffect(()=>{
        ProductdataHandler();
    },[firmid]);



    return ( 
        <>
        
        <Nav></Nav>
       

<div className="products-main">
{

   
            Productdata.map((obj)=>(
                
               <>
               
               
                      <div className="product">
                              <div className="product-data">
                                  <p>{obj.productName}</p>
                                  <p>{obj.price}</p>
                                  <p>{obj.description}</p>
                              </div>
      
                              <div className="product-image">
                                  <img src={`https://backend-nodejs-suby.onrender.com/uploads/${obj.image}`} alt="image" />
                                  <button >ADD</button>
                              </div>
                      </div>
                 
                 
                 </>
              ))

              
        }

</div>

        
        </>
     );
}

export default Firmitemspage;