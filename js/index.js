// candy obect constructor (pg. 111)
function Candy(name, imageUrl) {
    this.name = name;
    this.imageUrl = imageUrl;
}

// create 5 or more instances of candy object for the trick-or-treat-bag
const candy1 = new Candy('Reeses Peanut Butter Cups', 'https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fit,w_728,h_728/k%2FEdit%2Fkitchn-products%2Freese-milk-chocolate-peanut-butter-cups');
const candy2 = new Candy('Starburst', 'https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fit,w_728,h_728/k%2FEdit%2Fkitchn-products%2Fstarburst-halloween-fun-size');
const candy3 = new Candy('Twizzlers', 'https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fit,w_728,h_728/k%2FEdit%2Fkitchn-products%2Ftwizzlers-halloween-snack-size-strawberry-twists');
const candy4 = new Candy('Reeses Peanut Butter Cups', 'https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fit,w_728,h_728/k%2FEdit%2Fkitchn-products%2Freese-milk-chocolate-peanut-butter-cups');
const candy5 = new Candy('Twix', 'https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fit,w_728,h_728/k%2FEdit%2Fkitchn-products%2Ftwix-fun-size-caramel-chocolate-cookie-bar-candy');

// add all candies to the trick-or-treat bag array (pgs. 118 - 119)
// NOTE: it would also totally work to just create an array of the image urls and skip the object constructor,
// e.g. [ 'https://candy.com/images/reeses', ' https://candy.com/images/twix', 'https://candy.com/images/starburst' ];
const trickOrTreatBag = [ candy1, candy2, candy3, candy4, candy5 ];

const chooseRandomCandy = () => {
    // uses Math object to find a random index (pg. 135)
    const randomIndex = Math.floor((Math.random() * trickOrTreatBag.length));

    return trickOrTreatBag[randomIndex];
}

// grabCandy function fires when 'Pick Random Candy' button is clicked
const grabCandy = () => {
    // randomly choose a candy from the trick or treat bag
    const chosenCandy = chooseRandomCandy();

    // show picture of the candy that was randomly chosen on the screen
    const candyImage = document.getElementById('chosen-candy');
    candyImage.src = chosenCandy.imageUrl;
    candyImage.alt = chosenCandy.name;
}