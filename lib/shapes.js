//Created class called shape which has a constructor that sets color value

class Shape {
    color = "";
    setColor(color) {
        this.color = color;
    }
}

//Definining classes that extend Shape

class Triangle extends Shape { 
    render(){
        return `<polygon width="100%" height="100%" points="150,0 0,200 300,200" fill="${this.color}" />`
    }
}

class Circle extends Shape { 
    render(){
        return `<circle width="100%" height="100%" cx="150" cy="100" r="100" fill="${this.color}" />`
    }
}

class Square extends Shape { 
    render(){
        return `<rect x="0" y="0" width="300" height="200" fill="${this.color}" />`
    }
};

module.exports = {Triangle, Circle, Square};