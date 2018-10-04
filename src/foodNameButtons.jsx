import React, { Component } from 'react';
import "./Papa's Pizza.css";	
import Modal from "react-responsive-modal";

const styles = {
	fontFamily: "sans-serif",
	textAlign: "center"
  };

class FoodNameButtons extends Component {
	state = {
		open: false
	}
    
	onOpenModal = () => {
		this.setState({ open: true });
	  };
	
	onCloseModal = () => {
		this.setState({ open: false });
	  };
  
    render(){
		const {open} = this.state;
        return ( 
<React.Fragment>
            <div className="container" >
                <div className="food" >
                    <button onClick={this.onOpenModal}  className="foodItems" id="pizza" >
					Pizza</button>
                    <button  onClick={this.onOpenModal} className="foodItems" id="burger" > 
                    Burger</button>
					<button  onClick={this.onOpenModal} className="foodItems" id="drinks" >
					Drinks</button>
                </div>
            </div>

	
		<Modal className="pop-up-content" open={open} styles={styles} onClose={this.onCloseModal} center>
		<div  >
  		Thank-You For Choosing Pizzas
			<div id="innerline">
  		Italian Pizza
  				<button id="quantity1" className="quantity" onclick="decrementValue(quantNo1)">-</button>			
  				<input type="text" className="quantNo"		id="quantNo1" value="3"/>
  				<button id="quantity2" className="quantity" onclick="incrementValue(quantNo1)">+</button> 
			</div> 
<br/><br/><br/><br/>
	<div id="innerline">
		Cheeze Pizza
  			<button id="quantity1" className="quantity" onclick="decrementValue(quantNo2)">-</button>			
  			<input type="text" 	   className="quantNo"  id="quantNo2" value="3"/>
  			<button id="quantity2" className="quantity" onclick="incrementValue(quantNo2)">+</button> 
	</div> 
	
<br/><br/><br/>
	<div id="innerline">
	Farm-House Pizza
		<button id="quantity1" className="quantity" onclick="decrementValue(quantNo3)">-</button>			
		<input type="text" className="quantNo" id="quantNo3" value="3"/>
		<button id="quantity2" className="quantity" onclick="incrementValue(quantNo3)">+</button> 
	</div>
<br/><br/><br/><br/>
	</div>
	
	</Modal> 
</React.Fragment>

         );
    };
}
 
export default FoodNameButtons;