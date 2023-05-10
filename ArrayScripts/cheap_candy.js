let products = [
    {product: "Gummy Worms", price: 5.79},
    {product: "Plain M&Ms", price: 2.89},
    {product: "Peanut M&Ms", price: 2.89},
    {product: "Swedish Fish", price: 3.79},
   ];

   function candyless(limit){
   for (let i= 0; i< products.length; i ++){
     price = products[i].price
    if (price < limit )
    console.log(products[i].product)

   };
   };

candyless(4.00)

products_l = products.length;

   function includesword(id){
    for (let i = 0; i< products_l; i ++){
        candies = products[i].product
        let index = products.indexOf(" ")
        let new_word = products.slice(index + 1);
        if ( new_word == id){
            console.log("We have M&Ms")
        }
    }
   }



