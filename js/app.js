'use strict';

//Prerequisites:
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let distribution = [0.5, 0.75, 1.0, 0.6, 0.8, 1.0, 0.7, 0.4, 0.6, 0.9, 0.7, 0.5, 0.3, 0.4, 0.6];
function randomNumber(min, max) {
  return(Math.floor(Math.random() * (max - min + 1) + min));
}

//Creating table elements and generating each table's first row:
let salesProjections = document.getElementById('salesProjections');
let tableElement = document.createElement('table');
tableElement.setAttribute('id','table1');
salesProjections.appendChild(tableElement);
firstRow(tableElement);
let staffManagementTable = document.getElementById('staffManagementTable');
let table2Element = document.createElement('table');
table2Element.setAttribute('id','table2');
staffManagementTable.appendChild(table2Element);
firstRow(table2Element);


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
  return this.noOfTossers;
};

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


//Calling the functions:

let storeLocation = [seattleSales, tokyoSales, dubaiSales, parisSales, limaSales];
let inter2 = 0;
for (let i = 0; i < storeLocation.length; i++) {
  storeLocation[i].salesData();
  storeLocation[i].render();
  storeLocation[i].staffManagement();
  storeLocation[i].staffManagementRendering();
  inter2 += storeLocation[i].totalNumOfCookies;
}

//...(Rendering the first row for each table)...
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

//...(Rendering table 1 - the footer row)...

function totalPerHour () {
  let trElement = document.createElement('tr');
  tableElement.appendChild(trElement);

  let totals = ['Total/hr'];
  let inter = 0;
  for (let i=0; i<hours.length; i++) {
    for (let j=0; j<storeLocation.length; j++) {
      inter += storeLocation[j].noOfCookies[i];
    }
    totals.push(inter);
    inter = 0;
  }

  totals.push(inter2);
  for(let m=0; m<totals.length; m++){
    let footerEl = document.createElement('th');
    footerEl.textContent = totals[m];
    trElement.appendChild(footerEl);
  }
}
totalPerHour();



//Inputs: shopLocation, minNumOfCustomers, maxNumOfCustomers, avgNumOfCookies

