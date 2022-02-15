export default class Banana {
  constructor(bananas) {
    this.bananas = bananas;
  }

  bananaPounds() {
    this.bananas = Math.round(this.bananas / 0.2998287);
    return this.bananas;
  }

  bananaKilograms() {
    this.bananas = Math.round(this.bananas / 0.1360);
    return this.bananas;
  }

  bananaInches() {
    this.bananas = Math.round(this.bananas / 8.4999975);
    return this.bananas;
  }

  bananaCentimeters() {
    this.bananas = Math.round(this.bananas / 21.58999365);
    return this.bananas;
  }  
}
