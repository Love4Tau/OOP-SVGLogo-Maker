//Created class called shape which has a constructor that sets color value

class Shape {
    constructor(color = "") {
        this.color = color;
    }
    setColor(color) {
        this.color = color;
    }
}

//Definining classes that extend Shape

class Triangle extends Shape { 
    render(){
        return `<polygon width="100%" height="100%" points="50,0 100,100 0,100" fill="${this.color}" />`
    }
}

class Circle extends Shape { 
    render(){
        return `<circle width="100%" height="100%" cx="50" cy="50" r="40" fill="${this.color}" />`
    }
}

class Square extends Shape { 
    render(){
        return `<rect x="10" y="10" width="80" height="80" fill="${this.color}" />`
    }
};

module.exports = {Triangle, Circle, Square};