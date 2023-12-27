//import "products.json"
//https://fakestoreapi.com/docs

fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>console.log(json))
            .catch(err=> console.log(err))

            
async function GetAllMovies(){
    console.log("Hello");
    const  response = await fetch('https://fakestoreapi.com/products');
    // console.log(Response);
    console.log("Hello");
    const data = await response.json(); //error
    console.log(data);
}
GetAllMovies();