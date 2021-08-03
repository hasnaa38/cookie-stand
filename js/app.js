'use strict';

//Prerequisites:
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let distribution = [0.5, 0.75, 1.0, 0.6, 0.8, 1.0, 0.7, 0.4, 0.6, 0.9, 0.7, 0.5, 0.3, 0.4, 0.6];
function randomNumber(min, max) {
  return(Math.floor(Math.random() * (max - min + 1) + min));
}

//...(General rendering)...
let salesProjections = document.getElementById('salesProjections');
let tableElement = document.createElement('table');
tableElement.setAttribute('id','table1');
salesProjections.appendChild(tableElement);


//...(Rendering the first table -- the first row)...
function firstRow (tableEl) {
  let trElement = document.createElement('tr');
  tableEl.appendChild(trElement);
  let header1El = document.createElement('th');
  header1El.textContent = 'Location';
  trElement.appendChild(header1El);
  for (let m = 0; m < hours.length; m++) {
    let headerEl = document.createElement('th');
    headerEl.textContent = hours[m];
    trElement.appendChild(headerEl);
  }
  if(tableEl === tableElement) {
    let header2El = document.createElement('th');
    header2El.textContent = 'Total/day';
    trElement.appendChild(header2El);
  }
}

firstRow(tableElement);

// Object constructor function:
function SalesConstructor (shopLocation, minNumOfCustomers, maxNumOfCustomers, avgNumOfCookies) {
  this.shopLocation = shopLocation;
  this.minNumOfCustomers = minNumOfCustomers; //per hour
  this.maxNumOfCustomers = maxNumOfCustomers; //per hour
  this.avgNumOfCookies = avgNumOfCookies; //per customer
  this.noOfCustomers =[]; //per hour
  this.noOfCookies = [];
  this.totalNumOfCookies = 0;
  this.noOfTossers = [];
}

SalesConstructor.prototype.salesData = function() {
  for(let i=0; i<hours.length; i++) {
    this.noOfCustomers.push(Math.ceil(randomNumber(this.minNumOfCustomers, this.maxNumOfCustomers) * distribution[i]));
    let randomGen = Math.ceil(this.noOfCustomers[i] * this.avgNumOfCookies);
    this.noOfCookies.push(randomGen);
    this.totalNumOfCookies += randomGen;
  }
  return this.noOfCustomers, this.noOfCookies, this.totalNumOfCookies; };

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

//**Stretch goal** if number of customers<=40: 2 tossers(default), any 20 extra customers need a new tosser, the max number of customers ever is 65
SalesConstructor.prototype.staffManagement = function() {
  for(let m=0; m<hours.length; m++) {
    if (this.noOfCustomers[m]<=40) {
      this.noOfTossers.push(2);
    }
    else if (this.noOfCustomers[m]>40 && this.noOfCustomers<=60) {
      this.noOfTossers.push(3);
    }
    else {
      this.noOfTossers.push(4);
    }
  }
  console.log(this.noOfCustomers);
  console.log(this.noOfTossers);
  return this.noOfTossers;
};

//...(Rendering the second table -- the first row)...
let pForTable2El = document.createElement('p');
pForTable2El.textContent = 'Below, you will find the staff management table for each of our store locations.';
salesProjections.appendChild(pForTable2El);
let table2Element = document.createElement('table');
salesProjections.appendChild(table2Element);
table2Element.setAttribute('id','table2');
firstRow(table2Element);

SalesConstructor.prototype.staffManagementRendering = function () {
  let trElement = document.createElement('tr');
  table2Element.appendChild(trElement);
  let locationDataEl = document.createElement('td');
  locationDataEl.textContent = this.shopLocation;
  trElement.appendChild(locationDataEl);
  for (let j=0; j<this.noOfCookies.length; j++) {
    let staffManage = document.createElement('td');
    staffManage.textContent = `${this.noOfCustomers[j]} customers, ${this.noOfTossers[j]} tossers`;
    trElement.appendChild(staffManage);
  }
  //trElement.header2El.remove();
};

//Creating objects:
let seattleSales = new SalesConstructor('Seattle', 23, 65, 6.3);
let tokyoSales = new SalesConstructor('Tokyo', 3, 24, 1.2);
let dubaiSales = new SalesConstructor('Dubai', 11, 38, 3.7);
let parisSales = new SalesConstructor('Paris', 20, 38, 2.3);
let limaSales = new SalesConstructor('Lima', 2, 16, 4.6);

console.log(seattleSales);

//Calling the functions:

let storeLocation = [seattleSales, tokyoSales, dubaiSales, parisSales, limaSales];
for (let i = 0; i < storeLocation.length; i++) {
  storeLocation[i].salesData();
  storeLocation[i].render();
  storeLocation[i].staffManagement();
  storeLocation[i].staffManagementRendering();
}

//...(Rendering the last table row)...

function totalPerHour () {
  let trElement = document.createElement('tr');
  tableElement.appendChild(trElement);
  let footer1El = document.createElement('th');
  footer1El.textContent = 'Total/hr';
  trElement.appendChild(footer1El);
  let hourlyTotal = []; 
  let inter = 0;
  for (let m = 0; m < hours.length; m++) {
    for (let i = 0; i < storeLocation.length; i++) {
      inter += storeLocation[i].noOfCookies[m];
    }
    hourlyTotal[m] = inter;
    inter = 0;
    let footer2El = document.createElement('th');
    footer2El.textContent = hourlyTotal[m];
    trElement.appendChild(footer2El);
  }
}
totalPerHour();

//For the

//I need hours, no of customers per hour
//If no of customers<40 ==> 2 cookie tossers
//If 40<customers<60: 3 and more 4 (since max is 65)
