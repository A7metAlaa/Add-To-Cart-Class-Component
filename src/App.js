import './App.css';
import { Component, Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BsCheckSquare, BsFillMoonFill, BsZoomOut } from 'react-icons/bs';
import { MdLightMode } from 'react-icons/md';
import { MdDarkMode } from 'react-icons/md';
import { Badge } from 'react-bootstrap';
import { isCompositeComponent } from 'react-dom/test-utils';

class App extends Component{
  state = {
    data: [
      { id: 0, name: "Chipsy", count: 1, price: 8  },
      { id: 1, name: "Pepsi", count: 1, price: 5 },
      { id: 2, name: "Molto", count: 1, price: 3 },
      { id: 3, name: "Kranchy", count: 1, price: 10 },
      { id: 4, name: "Cigarates", count: 1, price: 30 },
    ],
    bg: true,
    products: [
      { id: 0, name: "Chipsy", count: 1, price: 8   },
      { id: 1, name: "Pepsi", count: 1, price: 5 },
      { id: 2, name: "Molto", count: 1, price: 3 },
      { id: 3, name: "Kranchy", count: 1, price: 10 },
      { id: 4, name: "Cigarates", count: 1, price: 30 },
    ],
  };


  Increment=(obj)=>{ 
    let data = this.state.data
    data.map((e)=>{ /* console.log(e) //shyl kol ll products kol l objects y3nii*/
      if(obj.id === e.id){/*   console.log(e.id) //shyl ll id lwa7do ll hwa bt3 BMW  */
          if(e.count >= 0) {
            e.count ++
           
          }


      }
      return e
 });
  this.setState({ data })
}

 

  Decrement=(obj)=>{
    let data = this.state.data
    data.map((e)=>{ /* console.log(e) //shyl kol ll products kol l objects y3nii*/
      if(obj.id === e.id){/*   console.log(e.id) //shyl ll id lwa7do ll hwa bt3 BMW  */
          if(e.count > 0) {
            e.count --
          }


      }
      return e
 });
  this.setState({ data })

  }




  del = (del) => {
    // console.log(del)
    let data = this.state.data

      data = data.filter((e)=>{
        if(del.id !== e.id){
           //console.log(del.id)
      //  console.log(e.id) ==> 2 , 3, 4 , 5 6, 7, 8*/
           return e;
        }
      })

    this.setState({ data })
  }


  emptyData=()=>{
    let data = this.state.data

    data.length = 0
    
    this.setState([])
  }

  OriginalData=()=>{
    let data =
      [
        { id: 0, name: "Chipsy", count: 1, price: 8   },
        { id: 1, name: "Pepsi", count: 1, price: 5 },
        { id: 2, name: "Molto", count: 1, price: 3 },
        { id: 3, name: "Kranchy", count: 1, price: 10 },
        { id: 4, name: "Cigarates", count: 1, price: 30 },
     ]
  
    this.setState({data})
    }

  Reset=()=>{
    let data = this.state.data;
    const newData = this.state.data.map((z)=>{
       z.count = 1;
       return z
    })   
    this.setState({data})
    }
ChangeBg=(e)=>{
  let bg = !this.state.bg
  
  this.setState({bg})
 
 
}
 

AddToCart=(newproduct)=>  { 
  let data = this.state.data 
  let check = this.state.data.some((d)=>d.name === newproduct.name)
if(check){
  const newData = this.state.data.map((e)=>{ 
     if(e.id === newproduct.id){
      e.count++ //Try ++ or =+1 // Don`t use +1 becuase maybe cause error
    } 
    return e 
  });
  this.setState(newData)
 
}else{
 this.setState({
  data:[newproduct , ...data] //NewProduct includes Button Selected , ...data includes the remaining data remaing after select 
 })

}

}

 

  render(){
    return(
      <>
     
      <Navbar bg="secondary" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#" className="fw-bold fs-1 text-light">Navbar</Navbar.Brand>
          
         
        {this.state.products.map((product)=>(
          <div className='d-flex justify-content-center align-items-center ' key={product.id}>
            <Button
            variant="success"
            className="me-3" 
              size="sm"
          onClick={(e)=>this.AddToCart(product)}>
         {product.name}
        </Button>
       </div>
       ))}
        <Navbar.Toggle aria-controls="navbarScroll" />
     
        <Navbar.Collapse id="navbarScroll" className="justify-content-end">
      
            <AiOutlineShoppingCart size={30} className='me-0 '/> <Badge bg="success" className={this.state.data.length === 0 ? 'text-danger' : 'text-light'}> {this.state.data.length}</Badge>
        </Navbar.Collapse>
      </Container>
    </Navbar>
 
 <div className={this.state.bg ? 'bg-white text-cetner bg-black vh-100' : ' bg-black text-center text-light bg-black vh-100'}>
  <h1 className='fw-bold fs-1 text-center'> Shopping Cart </h1>

        <div className='d-flex  justify-content-evenly mt-5 '>
            <Button variant={this.state.bg ? "dark" : "light"} onClick={this.Reset}> Reset</Button>
            <Button variant="danger" className='ms-2' onClick={this.emptyData}> Empty </Button>
            <Button variant="primary" className='ms-2' onClick={this.OriginalData}> Original</Button>
            <Button variant={this.state.bg ? "dark" : "light"} className='ms-2' onClick={this.ChangeBg}> 
                {this.state.bg ?<MdDarkMode /> : <MdLightMode />}
            </Button>
        </div>
 
      
          {this.state.data.map((product)=>(
         
            <div className='Col-lg-1 d-flex   justify-content-evenly  mt-5 bg-secondary' key={product.id} >
          
                      <h3>{product.name}</h3>
                      <h3>{product.price}</h3>
                      <h3>{product.count}</h3>
                      <Button variant="success" onClick={(e)=>this.Increment(product)}> + </Button>
                      <Button variant="warning" onClick={(e)=>this.Decrement(product)}> - </Button>
                      <Button variant="danger" onClick={(e)=>this.del(product)}> Del </Button>
                      <h3>  Total:{product.price * product.count} $</h3>
         
            </div>

          ))}
                         

            <h1 className='text-center mt-5 fw-bold fs-1 text-primary' > 
            {this.state.data == 0 ? 'Empty' : `Total Price ${this.state.data.map((e)=>e.price * e.count).reduce((x,y)=>x+y)} `}           
           
              
 
            </h1> 
 
          </div>
          </>
     

    )
  }
}

export default App;
