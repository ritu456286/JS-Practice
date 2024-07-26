function makeColor(r,g,b){ //makecolor is factory function which create object and return it
    const color = {};
    color.r = r;
    color.g = g;
    color.b = b;

    color.rgb = function(){
        const {r, g, b} = this;
        return `${r}, ${g}, ${b}`;
    }

    return color; //the created object is finally returned
}

const myColor = makeColor(35, 255, 255);
;