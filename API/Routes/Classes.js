class parkingSpace {
  constructor(spaceID ) {
    this._spaceID = spaceID;
    this._occupied = false;
    this._occupiedDuration= undefined;
    this._isBooked= false;

  }

  get spaceID() {
    return this._spaceID;
  }

  get occupied() {
    return this._occupied;
  }

  get duration() {
    return this._occupiedDuration;
  }
  get booked()
  {
    return this._isBooked;
  }
  // sets space duration in ms
  set duration(value)
  {
    this._occupiedDuration=value;

  }
  set occupied(value)
  {
    this._occupied= value;
  }

  set booked (value)
  {
    if (typeof value === 'boolean')
    {
      this._isBooked=value;
    }
    else return null;

  }



  
  

}

class CarPark{
  constructor(name, blockLocation, maxCapacity, basePrice)
  {
    this._name= name;
    this._blockLocation= blockLocation;
    this._maxCapacity= maxCapacity;
    this._basePrice= basePrice;
    this._spaces= [];
  }

  get name()
  {
    return this._name;
  }
  get blockLocation()
  {
    return this._blockLocation
  }
  get maxCapacity()
  {
    return this._maxCapacity;
  }
  get basePrice()
  {
    return this._basePrice;
  }

  /*
  static createCarPark(name, blockLocation, maxCapacity, basePrice) {
    const fs = require('fs');
    const carPark = new CarPark(name, blockLocation, maxCapacity, basePrice);
    for (let i = 1; i <= maxCapacity; i++)
    {
      let space= new parkingSpace(i);
      carPark._spaces.push(space);
    }
    const json= JSON.stringify(carPark);
    fs.writeFile(carPark.name+".json", json, err => {
      if (err)
      {
        console.log("Error!");
      }
      else
      {
        console.log("Written");
      }
    })
  }
*/

}
module.exports.parkingSpace= parkingSpace;
module.exports.CarPark= CarPark;






