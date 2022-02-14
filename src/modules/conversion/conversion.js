export default class Banana {
  constructor(bananas) {
    this.bananas = bananas;
  }

  bananaPounds() {
    return this.bananas /= 0.2998287;
  }

  bananaKilograms() {
    return this.bananas /= 0.136;
  }

  bananaInches() {
    return this.bananas /= 8.4999975;
  }

  bananaCentimeters() {
    return this.bananas /= 21.58999365;
  }  
}

// banana length = 8.4999975 inches / 21.58999365 centimeters 
// banana weight = 0.2998287 pounds / 0.136 kilograms