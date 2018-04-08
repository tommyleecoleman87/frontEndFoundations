let newProduct = {
    price: "10 Dollars",
    product: "Razor",
    productPrice: function() {
        return `This ${this.product} is ${this.price}.`;
    }
};

let wishList = {
    wish1: "Xbox one",
    wish2: "Razor Naga headset",
    wish3: "gaming chair",
    completeList: function() {
        return `For Christmas I would like a ${this.wish1}, ${this.wish2}, and a ${this.wish3}.`;
    }
};