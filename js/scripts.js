function Phone(brand, model, price, color, display) {
    this.brand = brand;
    this.model = model;
    this.price = price;
    this.color = color;
    this.display = display;
}

Phone.prototype.printInfo = function() {
        console.log("The phone brand is " + this.brand + ", model is " + this.model + ", color is " + this.color + " and the price is " + this.price + ".");
}

Phone.prototype.printdisplay = function() {
        console.log(this.model + " have " + this.display + " inch display.");
}

var iPhone6S = new Phone("Apple", "iPhone6S", 2250, "silver", 4.7);
iPhone6S.printInfo();
iPhone6S.printdisplay();

var galaxyS6 = new Phone("Samsung", "galaxyS6", 2000, "silver", 4.5);
galaxyS6.printInfo();
galaxyS6.printdisplay();

var onePlus = new Phone("One", "onePlus", 1899, "gold", 4.6);
onePlus.printInfo();
onePlus.printdisplay();