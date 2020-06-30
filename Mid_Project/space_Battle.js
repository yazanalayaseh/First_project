class ship{
    constructor(hull, firepower, accuracy){
        this.hull = hull
        this.firepower = firepower
        this.accuracy = accuracy
    }
};

class uss_schwarzenegger{
    constructor(hull, firepower, accuracy){
        this.hull = hull
        this.firepower = firepower
        this.accuracy = accuracy
     }
};


class alienship (
    constructor(hull, firepower, accuracy){
        this.hull = hull
        this.firepower = firepower
        this.accuracy = accuracy    
    }
);

const alienship_hull = Math.round(Math.random()*3)+3;
const alienship_firepower = Math.round(Math.random()*2)+2;
const alienship_accuracy = Math.round(Math.random()+6)/10;

document.getElementById("alien_firepower").innerHTML = alienship_firepower;
document.getElementById("alien_hull").innerHTML = alienship_hull;
document.getElementById("alien_accuracy").innerHTML = alienship_accuracy;
