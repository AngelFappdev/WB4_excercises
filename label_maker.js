function printContact(myinfo){
    console.log(myinfo.name)
    console.log(myinfo.address)
    console.log(myinfo.city + ", " + myinfo.state +" " + myinfo.zip)

};

 myinfo ={
    name: "Angel Fraser",
    address: "777 AngelRoad",
    city: "New York",
    state:"NY",
    zip :"11520"
};
printContact(myinfo)


