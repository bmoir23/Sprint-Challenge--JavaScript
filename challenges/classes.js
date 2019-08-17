// 1. Copy and paste your prototype in here and refactor into class syntax.
// function CuboidMaker(attribs){
//     this.length = attribs.length,
//     this.width = attribs.width,
//     this.height = attribs.height;


//      this.volume = function(){ return this.length * this.width * this.height;}

//      this.surfaceArea = function(){ return 2 * (this.length * this.width + this.length * this.height +this.width *this.height)};
// };

// const cuboid = new CuboidMaker({
//     length:4,
//     width:5,
//     height: 5,
//   });

// Refactored!
class CuboidMakerRefact{
    constructor(attribs){
        this.length = attribs.length,
        this.width = attribs.width,
        this.height = attribs.height;
}

volume(){return this.length * this.width * this.height};
surfaceArea(){return 2 *(this.length * this.width + this.length * this.height +this.width *this.height)};
}
const cuboidRef = new CuboidMakerRefact({
        length:4,
        width:5,
        height: 5,
      });

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboidRef.volume()); // 100
console.log(cuboidRef.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.