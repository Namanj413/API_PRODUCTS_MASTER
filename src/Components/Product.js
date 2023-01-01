import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';


function Product() {
    const[products, setProduct] = useState([]);
    useEffect(() =>{
      getProducts();
    }, []);
    const getProducts =  () => {
      fetch(`https://fakestoreapi.com/products?limit=10`).then(
        (result) => {
          result.json().then((resp) => {
            setProduct(resp);
          })
        }
      )
    }
  // Generate cards for all the products added..
  return (
<>
    <div style={{
      height:"190vh",
        width:"auto",
        backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        marginTop:"-15%",
        marginBottom:'0%',
        //  backgroundImage: `url(${productbg})` 
      }}> 
     

      <br/>

      <div id='container' style={{marginTop:"20%", marginLeft:"3%"}}>
        <Row>
          {products.length > 0 ? products.map((product) => (
               <Card style={{ width:'18rem', margin:'15px' }}>
               <br/>
               <Card.Img style={{height:'16rem'}} variant="top" src={product.image} />
               <Card.Body>
               <Card.Title>
                    {product.title} 
                  </Card.Title>
                  <Card.Text>
                    <span>Category - </span>
                    {product.category}
                  </Card.Text>
                  <Card.Text>
                    <span>Price -</span>
                    {product.price}
                  </Card.Text>
                  <Card.Text>
                    <span>Rating - </span>
                    {product.rating.rate}&#9733;
                  </Card.Text>
                  <Card.Text>
                    <span>Count - </span>
                    {product.rating.count}
                  </Card.Text>
               </Card.Body>
             </Card>
            )):
            <h5 style={{margin:'20px'}}>Loading... &#160;  <span>!!</span></h5>
          }
        </Row>
        </div>
        </div>
        </>
  )}

export default Product;
