'use strict';

//Prerequisites:
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
function randomNumber(min, max) {
  return(Math.floor(Math.random() * (max - min + 1) + min));
}

//...(General rendering)...
let salesProjections = document.getElementById('salesProjections');
let tableElement = document.createElement('table');
salesProjections.appendChild(tableElement);

//...(Rendering the first table row)...
function firstRow () {
  let trElement = document.createElement('tr');
  tableElement.appendChild(trElement);
  let header1El = document.createElement('th');
  header1El.textContent = 'Location';
  trElement.appendChild(header1El);
  for (let m = 0; m < hours.length; m++) {
    let headerEl = document.createElement('th');
    headerEl.textContent = hours[m];
    trElement.appendChild(headerEl);
  }
  let header2El = document.createElement('th');
  header2El.textContent = 'Total/day';
  trElement.appendChild(header2El);
}

firstRow();

// Object constructor function:
function SalesConstructor (shopLocation, minNumOfCustomers, maxNumOfCustomers, avgNumOfCookies) {
  this.shopLocation = shopLocation;
  this.minNumOfCustomers = minNumOfCustomers; //per hour
  this.maxNumOfCustomers = maxNumOfCustomers; //per hour
  this.avgNumOfCookies = avgNumOfCookies; //per customer
  this.noOfCookies = [];
  this.totalNumOfCookies = 0;
}

SalesConstructor.prototype.salesData = function() {
  for(let i=0; i<hours.length; i++) {
    let randomGen = Math.ceil(randomNumber(this.minNumOfCustomers, this.maxNumOfCustomers) * this.avgNumOfCookies);
    this.noOfCookies.push(randomGen);
    this.totalNumOfCookies += randomGen;
  }
  return this.noOfCookies, this.totalNumOfCookies; };

//...(Rendering object rows)...
SalesConstructor.prototype.render = function() {
  //To create a row for each store
  let trElement = document.createElement('tr');
  tableElement.appendChild(trElement);
  //First cell of each row content: store location
  let locationDataEl = document.createElement('td');
  locationDataEl.textContent = this.shopLocation;
  trElement.appendChild(locationDataEl);
  //Full row contents: no. of cookies per hour
  for (let j=0; j<this.noOfCookies.length; j++) {
    let salesDataEl = document.createElement('td');
    salesDataEl.textContent = this.noOfCookies[j];
    trElement.appendChild(salesDataEl);
  }
  //Final cell of each row content: total no of cookies per day
  let totalDataEl = document.createElement('td');
  totalDataEl.textContent = this.totalNumOfCookies;
  trElement.appendChild(totalDataEl);
};


//Creating objects:
let seattleSales = new SalesConstructor('Seattle', 23, 65, 6.3);
let tokyoSales = new SalesConstructor('Tokyo', 3, 24, 1.2);
let dubaiSales = new SalesConstructor('Dubai', 11, 38, 3.7);
let parisSales = new SalesConstructor('Paris', 20, 38, 2.3);
let limaSales = new SalesConstructor('Lima', 2, 16, 4.6);

//Calling the functions:

let storeLocation = [seattleSales, tokyoSales, dubaiSales, parisSales, limaSales];
for (let i = 0; i < storeLocation.length; i++) {
  storeLocation[i].salesData();
  storeLocation[i].render();
}

//...(Rendering the last table row)...

function totalPerHour () {
  let trElement = document.createElement('tr');
  tableElement.appendChild(trElement);
  let footer1El = document.createElement('th');
  footer1El.textContent = 'Total/hr';
  trElement.appendChild(footer1El);
  let hourlyTotal = []; let inter = 0;
  for (let m = 0; m < hours.length; m++) {
    for (let i = 0; i < storeLocation.length; i++) {
      inter += storeLocation[i].noOfCookies[m];
    }
    hourlyTotal[m] = inter;

    let footer2El = document.createElement('th');
    footer2El.textContent = hourlyTotal[m];
    trElement.appendChild(footer2El);
  }
}
totalPerHour();
