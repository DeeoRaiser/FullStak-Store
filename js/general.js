

//VARIABLE DONDE ESTAN LOS ARTICULOS
var Articles =
    [{
        id: '1',
        title: 'SONOMA V-NECK T-SHIRT POLAR MELANGE',
        description: 'With its deep V neck and close-fitting design, the short-sleeved Sonoma T-shirt hugs your figure. The comfortable thick cotton makes this an essential casual piece.',
        date: '10/12/2022',
        price: '689',
        currency: 'u$d',
        img: 1
    },
    {
        id: '2',
        title: 'FIZVALLEY T-SHIRT VINTAGE PEANUT',
        description: 'The model measures 172 cm and wears a size S. Short-sleeve crew neck T-shirt, straight cut 100% COTTON',
        date: '10/12/2022',
        price: '395',
        currency: '$',
        img: 2
    },
    {
        id: '3',
        title: 'LOW MAN VEAU BRODERIE MILITAIRE',
        description: "Calf leather upper with suede details. Embroidery on the shield, the brand's emblem. Rubber sole band. Sole height 2.5 cm. Leather and terry cotton lining. True to size.",
        date: '10/12/2022',
        price: '669',
        currency: '$',
        img: 3
    },
    {
        id: '4',
        title: 'PRSX LOW MAN FOXY LAMINE BLANC ARGENT',
        description: 'The idea of "lived-in" as a synonym for craftsmanship can be seen clearly in the PRSX, thanks to unique, patented foxing tape that creates a purposefully imperfect sole. The shield on the side of the shoe features the coat of arms of the City of Paris, where Philippe Model launched its brand.',
        date: '10/12/2022',
        price: '669',
        currency: '$',
        img: 4
    },
    {
        id: '5',
        title: 'BOOTS 45MM SUEDE AMBRE',
        description: "A master of the urban-folk look, Vanessa Bruno is once again offering a pair of boots this season that are sure to add a Bohemian touch to any wardrobe. Featuring a suede upper, these shoes have a 4.5-cm heel that is both comfortable and practical.",
        date: '10/12/2022',
        price: '919',
        currency: '$',
        img: 5
    },
    {
        id: '6',
        title: 'LE SKINNY DE JEANNE DUBLIN',
        description: "A modern wardrobe essential, this classic mid-rise skinny jean features a clean and slim silhouette. In a medium-blue wash. Mid Rise Fit Super Stretch Denim 44% Cotton/42% Lyocell/13% Polyester/1% Elastane Machine Wash 9'' Front Rise/29'' Inseam/10'' Leg Opening",
        date: '10/12/2022',
        price: '419',
        currency: 'u$d',
        img: 6
    },
    {
        id: '7',
        title: 'HIS | HER EAU DE PARFUM',
        description: 'A unisex scent for the every guy and girl, this is the debut fragrance by who is elijah, revealing His | Her wild side. Heady enough to take you dancing through to dawn, His|Her doesn’t take itself too seriously.',
        date: '10/12/2022',
        price: '419',
        currency: 'u$d',
        img: 7
    },
    {
        id: '8',
        title: 'NOR O-N SHORT 7355 SPRUCESTONE',
        description: 'A boxy fit knitwear staple in fluffy alpaca and merino wool yarn, offering an effortless everyday jumper, with style and comfort combined. A wide round neck creates a flattering neckline to this cosy, medium gauge wool knit sweater.',
        date: '10/12/2022',
        price: '249',
        currency: 'u$d',
        img: 8
    },
    {
        id: '9',
        title: 'GARSON VEST GRAPHITE',
        description: "A simplified version of the Freestyle Vest. Take on unpredictable weather conditions with a classic, quilt-through vest that offers enduring warmth where it's needed most. Crafted with a protective, hi-low hem and a leather-trimmed standing collar, it shields against high winds. Wear it on its own or layered under a soft shell for premium comfort A specialised and fully weather proofed duck down vest from the Canadian label. Classic, versatile, light-weight and well-insulated, with 625 fill power white duck down, and a proven textile designed to stay dry in extreme conditions. Heavy duty zips, storm flaps, fleece-lined handwarmer pockets, lifetime guarantee. Made in Canada.",
        date: '10/12/2022',
        price: '799',
        currency: '$',
        img: 9
    },
    {
        id: '10',
        title: 'WAVERLEIGH BLAZER BLACK',
        description: "Made from a premium wool fabrication the Waverleigh Blazer holds its shape and drapes fluidly. This tailored single breasted blazer has a streamlined silhouette that's punctuated with an exaggerated shoulder, a wide notched collar, and side welt pockets.",
        date: '10/12/2022',
        price: '849',
        currency: 'u$d',
        img: 10
    },
    {
        id: '11',
        title: 'SUNGLASSES GG1195SK001 GOLD',
        description: 'Refined classic concept for an everyday look combining comfort and style. Square shape in full metal with acetate end tips that enriches the overall look. Gucci interlocking Logo on both temples.',
        date: '10/12/2022',
        price: '659',
        currency: '$',
        img: 11
    },
    {
        id: '12',
        title: 'SUNGLASSES GG1183S006 GOLD',
        description: 'This concept is cool & easy to wear directly developed from a vintage archive piece. Crafted in lightweight metal this pilot shape present the Gucci lettering logo on temples and comfortable flat end tips.',
        date: '10/12/2022',
        price: '579',
        currency: '$',
        img: 12
    }]

//funcion que verifica si el usuario esta o no logeado
function checkLogin(){
    var user = JSON.parse(localStorage.getItem("loginUser"))||[]

    if(user.length !== 0){
       let userData = {
            name:user.name,
            cartCounter:user.cart.reduce((acum, obj)=>{ //muestro el acumulado de la cantidad de productos en el carrito
                return acum + parseInt(obj.quantity)
            },0),
            wish:user.wish.length,
            role:"admin",
            avatar:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/100px-Default_pfp.svg.png"
        }
        return userData
    }else{
        return false
    }


}


//Funcion para dar formato currency a el precio de los articulos
function formatCurrency(num){
    const options = { style: "currency", currency: "usd", minimumFractionDigits: 2 };
    const numFormat = num.toLocaleString("en-US", options);
    return numFormat
}
