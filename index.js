
console.log('test');

let cartProducts = [
    {
        id: 1,
        name: "iphone 12",
        cost: 1500.00,
        quantity: 2
    }
];

console.log(JSON.stringify(cartProducts))

document.cookie = "cart=" + JSON.stringify(cartProducts);

console.log(document.cookie)

let cart = JSON.parse(getCookie('cart'))

console.log(cart)

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  }

let cars = [
    {
        mark: "Toyota",
        model: "CHR",
        description: "nqkvo"
    }
];