// making pop-ups and its contents
			
				var modal = document.getElementById("pop-up")	
		 		var modal2 = document.getElementById("pop-up1")				
				var modal3 = document.getElementById("pop-up2")
				 
				var pizza = document.getElementById("pizza")
				var burger = document.getElementById("burger")
				var drinks = document.getElementById("drinks")				
				
  				var close = document.getElementById("close")
				  
				pizza.onclick = function() {modal.style.display = 'block'}	
				burger.onclick = function(){modal.style.display = 'block'}	
				drinks.onclick = function(){modal.style.display = 'block'}									
			
// making the close button work

				close.onclick = function() {modal3.style.display = 'none';
											modal2.style.display = 'none';
											modal.style.display = 'none';
											}


// clicking anywhere outside the box to close it

window.onclick = function(event) {
	    		if (event.target == modal || event.target == modal2 || event.target == modal3) {
	    			modal.style.display = 'none';
					modal2.style.display = 'none';
					modal3.style.display = 'none';
	    			}
	    		} 

	// functions behind plus and minus button

	var x=" ";
		function incrementValue(x,i)
{
    var value = parseInt(x.value, 10);
    value++;
    x.value = value;
}

		function decrementValue(x,i)
{
    var value = parseInt(x.value, 10);
    value--;
    x.value = value;
}	    	
	
	
	// object of pizzas which will be shown in the cart

	var pizzacart = [
	{
		name : "Italian Pizza",
		price : 30,
		quantity : +document.getElementById("quantNo1").value
	},
	
	{
		name : "Cheese Pizza",
		price : 40,
		quantity : +document.getElementById("quantNo2").value
	},

	{
		name : "Farm-House Pizza",
		price : 45,
		quantity : +document.getElementById("quantNo3").value
	}
]; 


	// using forEach and if statements filter the results
	// using the below sytax to create a complete html paragraph in javascript

	var bill = 0;
	function generateHTML(){
		var elem= "";
		elem += `<h2>Cart</h2>`;
		pizzacart.forEach(function(v,i) {
			bill = bill + (v.price * v.quantity);
			if(v.quantity > 0)
			{
			elem += `<div class="row">`;
			elem += `<div class = "cartItems">${v.name} &nbsp; X ${v.quantity} &nbsp; =
					 <span class = "delItem" id="delItem" onclick=document.getElementById("cartItems").style.display = 'none'>&times;</span> &nbsp;
					 <span class ="perItem">$${v.quantity * v.price}</span></div>`;
			elem += `</div>`;
			}
		});
		elem += `<div class = "totalBill">Total Bill : $${bill}</div>`
		cart.innerHTML = elem;
	}
	generateHTML();
	
	var deleteFromCart = document.getElementById("delItems");
	
	deleteFromCart.onclick = function(){
		deleteFromCart.style.display = 'none';
		generateHTML();
	}

	var goingBack = document.getElementById("goBack1");
	var goingBackAgain = document.getElementById("goBack2");

	goingBack.onclick = function() { modal2.style.display = 'none'	}
	goingBackAgain.onclick = function() { modal3.style.display = 'none'	}