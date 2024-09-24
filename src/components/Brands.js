
import {useEffect, useState } from "react";
import BrndsList from "./BrandsList";
import { Navbar, Nav, Container,Spinner} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const Brands = () => {
    const [brands, setBrands] = useState(null);
  

 useEffect(() => {
    fetch('https://perfume.msalla.com/api/brands').then(res => {
        return res.json().then(data => {
        
            setBrands(data);
        });
    })
 },[]);


    return (
        <div className="Brands">
          
           {brands && <BrndsList brands={brands}/>}           
        </div>
      );
}
 
export default Brands;