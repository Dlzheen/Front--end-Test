import {useEffect, useState } from "react";
import Productslist from "./Productslist";
import {Navbar, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Products = () => {
   const [products, setProducts] = useState(null);
//    const [perfumes, setPerfumes] = useState(null);

const fetchProducts =()=>{
    fetch('https://hs.msalla.com/api/categories').then(res => {
        return res.json().then(data => {
            console.log(data);
            setProducts(data); 
        });
    })
} 

// const fetchPerfumes =()=>{
//     fetch('https://perfume.msalla.com/api/featured').then(res => {
//         return res.json().then(data => {
//             console.log(data);
//             setProducts(data); 
//         });
//     })
// } 


    useEffect(() => {
        fetchProducts();
     },[]);

    const showCategory = (cat) =>{
       
        const newProducs = products.filter(product=> product.slug === cat)
        setProducts(newProducs);      

    } 

    return (
        <div className="products container" >
           <Navbar className="bg-body-tertiary" bg="white" expand="lg">
     
        <Button variant="light" onClick={()=>{
         fetchProducts();
        }}> All products</Button>
        <Button variant="light" onClick={()=>{
           showCategory('alfybat');
        }}> الفيبات</Button>
      
        <Button variant="light"> Hoodie</Button>
        <Button variant="light"> Jacket</Button>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <Button variant="dark">Filter</Button>
          </Navbar.Text>
        </Navbar.Collapse>
    </Navbar>
        {products && <Productslist products={products}/>}  

     </div>
      );
}
 
export default Products;