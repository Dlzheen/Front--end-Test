import Main from "../components/Main";
import Brands from "../components/Brands";
import Products from "../components/Products";
import Featured from "../components/Featured";

const Home = () => {
    return (
        <div >
        <section>
            <Main/>
        </section>
         <section>
         <Brands/>
        </section>
        <section>
         <Products/>
       </section>
       <section>
         <Featured/>
       </section>
     </div>
        );
}
 
export default Home;