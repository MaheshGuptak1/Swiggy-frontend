import React, { useState } from "react";
import { images } from "./Imageurls";

function Static() {
  const [imagedata, setImagedata] = useState(images);

 return (
  <div className="static">
      {
        imagedata.map(ele=>{
            return (
                <img src="{ele.img_src}" alt={ele.img_src} />
            )
        })
      }
  </div>
 )

}

export default Static;
