let products = [
    {product: "Gummy Worms", price: 5.79},
    {product: "Plain M&Ms", price: 2.89},
    {product: "Peanut M&Ms", price: 2.89},
    {product: "Swedish Fish", price: 3.79},
   ];

   products.sort(function(a,b){

    if (b.product < a.product) return -1;
    else if (b.product == a.product) return 0 ;
    else return 1;
   })

   let product_t = products.length
   for (let i = 0; i <product_t; i++){
    console.log(products[i].product);
   };

