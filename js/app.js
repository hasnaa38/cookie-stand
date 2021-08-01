'use strict';

let hourShifter = 0;
let salesProjections = document.getElementById('salesProjections');

//Seattle's object:

const SeattleSales = {
  shopLocation: 'Seattle',
  minNumOfCustomers: 23, //per hour
  maxNumOfCustomers: 65, //per hour
  avgNumOfCookies: 6.3, //Per customer
  noOfCustomers: [], //random generated number of customers per hour - from 06:00 (6am) to 19:00 (7pm)
  noOfCookies: [], //total number of cookies per hour
  totalNumOfCookies: 0,
  hour: [],

  calculationsForSales: function(min, max) {
    for(let i=0; i<14; i++) {
      this.noOfCustomers[i] =Math.floor(Math.random() * (max - min + 1) + min); //to generate a random number of customers per hour
      this.noOfCookies[i] = Math.ceil((this.noOfCustomers[i]) * (this.avgNumOfCookies)); //to find the total number of cookies per hour
      this.totalNumOfCookies+=this.noOfCookies[i];
      if(i<6) {
        hourShifter = i+6;
        this.hour[i] = `${hourShifter} am: `;
      }
      else if (i===6) {
        hourShifter = i+6;
        this.hour[i] = `${hourShifter} pm: `;
      }
      else {
        hourShifter = i-6;
        this.hour[i] = `${hourShifter} pm: `;
      }
    }
    return this.noOfCustomers, this.noOfCookies, this.totalNumOfCookies, this.hour;
  },

  rendering: function() {
    //Creating and adding the article element
    let articleElement = document.createElement('article');
    salesProjections.appendChild(articleElement);
    //Creating and adding the h3 element
    let h3Element = document.createElement('h3');
    h3Element.textContent = this.shopLocation;
    articleElement.appendChild(h3Element);
    //Creating and adding an unordered list element
    let ulElement = document.createElement('ul');
    articleElement.appendChild(ulElement);
    //Creating and adding list items
    for(let j = 0; j<this.noOfCookies.length; j++) {
      let liElement = document.createElement('li');
      liElement.textContent = this.hour[j] + this.noOfCookies[j] + ' cookies';
      ulElement.appendChild(liElement);
    }
    //Creating and adding the total
    let liElement = document.createElement('li');
    liElement.textContent = 'Total: ' + this.totalNumOfCookies + ' cookies';
    ulElement.appendChild(liElement);
  },
};

//Tokyo's object:

const TokyoSales = {
  shopLocation: 'Tokyo',
  minNumOfCustomers: 3, //per hour
  maxNumOfCustomers: 24, //per hour
  avgNumOfCookies: 1.2, //Per customer
  noOfCustomers: [], //random generated number of customers per hour - from 06:00 (6am) to 19:00 (7pm)
  noOfCookies: [], //total number of cookies per hour
  totalNumOfCookies: 0,
  hour: [],

  calculationsForSales: function(min, max) {
    for(let i=0; i<14; i++) {
      this.noOfCustomers[i] =Math.floor(Math.random() * (max - min + 1) + min); //to generate a random number of customers per hour
      this.noOfCookies[i] = Math.ceil((this.noOfCustomers[i]) * (this.avgNumOfCookies)); //to find the total number of cookies per hour
      this.totalNumOfCookies+=this.noOfCookies[i];
      if(i<6) {
        hourShifter = i+6;
        this.hour[i] = `${hourShifter} am: `;
      }
      else if (i===6) {
        hourShifter = i+6;
        this.hour[i] = `${hourShifter} pm: `;
      }
      else {
        hourShifter = i-6;
        this.hour[i] = `${hourShifter} pm: `;
      }
    }
    return this.noOfCustomers, this.noOfCookies, this.totalNumOfCookies, this.hour;
  },

  rendering: function() {
    //Creating and adding the article element
    let articleElement = document.createElement('article');
    salesProjections.appendChild(articleElement);
    //Creating and adding the h3 element
    let h3Element = document.createElement('h3');
    h3Element.textContent = this.shopLocation;
    articleElement.appendChild(h3Element);
    //Creating and adding an unordered list element
    let ulElement = document.createElement('ul');
    articleElement.appendChild(ulElement);
    //Creating and adding list items
    for(let j = 0; j<this.noOfCookies.length; j++) {
      let liElement = document.createElement('li');
      liElement.textContent = this.hour[j] + this.noOfCookies[j] + ' cookies';
      ulElement.appendChild(liElement);
    }
    //Creating and adding the total
    let liElement = document.createElement('li');
    liElement.textContent = 'Total: ' + this.totalNumOfCookies + ' cookies';
    ulElement.appendChild(liElement);
  },
};

//Dubai's object:

const DubaiSales = {
  shopLocation: 'Dubai',
  minNumOfCustomers: 11, //per hour
  maxNumOfCustomers: 38, //per hour
  avgNumOfCookies: 3.7, //Per customer
  noOfCustomers: [], //random generated number of customers per hour - from 06:00 (6am) to 19:00 (7pm)
  noOfCookies: [], //total number of cookies per hour
  totalNumOfCookies: 0,
  hour: [],

  calculationsForSales: function(min, max) {
    for(let i=0; i<14; i++) {
      this.noOfCustomers[i] =Math.floor(Math.random() * (max - min + 1) + min); //to generate a random number of customers per hour
      this.noOfCookies[i] = Math.ceil((this.noOfCustomers[i]) * (this.avgNumOfCookies)); //to find the total number of cookies per hour
      this.totalNumOfCookies+=this.noOfCookies[i];
      if(i<6) {
        hourShifter = i+6;
        this.hour[i] = `${hourShifter} am: `;
      }
      else if (i===6) {
        hourShifter = i+6;
        this.hour[i] = `${hourShifter} pm: `;
      }
      else {
        hourShifter = i-6;
        this.hour[i] = `${hourShifter} pm: `;
      }
    }
    return this.noOfCustomers, this.noOfCookies, this.totalNumOfCookies, this.hour;
  },

  rendering: function() {
    //Creating and adding the article element
    let articleElement = document.createElement('article');
    salesProjections.appendChild(articleElement);
    //Creating and adding the h3 element
    let h3Element = document.createElement('h3');
    h3Element.textContent = this.shopLocation;
    articleElement.appendChild(h3Element);
    //Creating and adding an unordered list element
    let ulElement = document.createElement('ul');
    articleElement.appendChild(ulElement);
    //Creating and adding list items
    for(let j = 0; j<this.noOfCookies.length; j++) {
      let liElement = document.createElement('li');
      liElement.textContent = this.hour[j] + this.noOfCookies[j] + ' cookies';
      ulElement.appendChild(liElement);
    }
    //Creating and adding the total
    let liElement = document.createElement('li');
    liElement.textContent = 'Total: ' + this.totalNumOfCookies + ' cookies';
    ulElement.appendChild(liElement);
  },
};

//Paris's object:

const ParisSales = {
  shopLocation: 'Paris',
  minNumOfCustomers: 20, //per hour
  maxNumOfCustomers: 38, //per hour
  avgNumOfCookies: 2.3, //Per customer
  noOfCustomers: [], //random generated number of customers per hour - from 06:00 (6am) to 19:00 (7pm)
  noOfCookies: [], //total number of cookies per hour
  totalNumOfCookies: 0,
  hour: [],

  calculationsForSales: function(min, max) {
    for(let i=0; i<14; i++) {
      this.noOfCustomers[i] =Math.floor(Math.random() * (max - min + 1) + min); //to generate a random number of customers per hour
      this.noOfCookies[i] = Math.ceil((this.noOfCustomers[i]) * (this.avgNumOfCookies)); //to find the total number of cookies per hour
      this.totalNumOfCookies+=this.noOfCookies[i];
      if(i<6) {
        hourShifter = i+6;
        this.hour[i] = `${hourShifter} am: `;
      }
      else if (i===6) {
        hourShifter = i+6;
        this.hour[i] = `${hourShifter} pm: `;
      }
      else {
        hourShifter = i-6;
        this.hour[i] = `${hourShifter} pm: `;
      }
    }
    return this.noOfCustomers, this.noOfCookies, this.totalNumOfCookies, this.hour;
  },

  rendering: function() {
    //Creating and adding the article element
    let articleElement = document.createElement('article');
    salesProjections.appendChild(articleElement);
    //Creating and adding the h3 element
    let h3Element = document.createElement('h3');
    h3Element.textContent = this.shopLocation;
    articleElement.appendChild(h3Element);
    //Creating and adding an unordered list element
    let ulElement = document.createElement('ul');
    articleElement.appendChild(ulElement);
    //Creating and adding list items
    for(let j = 0; j<this.noOfCookies.length; j++) {
      let liElement = document.createElement('li');
      liElement.textContent = this.hour[j] + this.noOfCookies[j] + ' cookies';
      ulElement.appendChild(liElement);
    }
    //Creating and adding the total
    let liElement = document.createElement('li');
    liElement.textContent = 'Total: ' + this.totalNumOfCookies + ' cookies';
    ulElement.appendChild(liElement);
  },
};

//Lima's object:

const LimaSales = {
  shopLocation: 'Lima',
  minNumOfCustomers: 2, //per hour
  maxNumOfCustomers: 16, //per hour
  avgNumOfCookies: 4.6, //Per customer
  noOfCustomers: [], //random generated number of customers per hour - from 06:00 (6am) to 19:00 (7pm)
  noOfCookies: [], //total number of cookies per hour
  totalNumOfCookies: 0,
  hour: [],

  calculationsForSales: function(min, max) {
    for(let i=0; i<14; i++) {
      this.noOfCustomers[i] =Math.floor(Math.random() * (max - min + 1) + min); //to generate a random number of customers per hour
      this.noOfCookies[i] = Math.ceil((this.noOfCustomers[i]) * (this.avgNumOfCookies)); //to find the total number of cookies per hour
      this.totalNumOfCookies+=this.noOfCookies[i];
      if(i<6) {
        hourShifter = i+6;
        this.hour[i] = `${hourShifter} am: `;
      }
      else if (i===6) {
        hourShifter = i+6;
        this.hour[i] = `${hourShifter} pm: `;
      }
      else {
        hourShifter = i-6;
        this.hour[i] = `${hourShifter} pm: `;
      }
    }
    return this.noOfCustomers, this.noOfCookies, this.totalNumOfCookies, this.hour;
  },

  rendering: function() {
    //Creating and adding the article element
    let articleElement = document.createElement('article');
    salesProjections.appendChild(articleElement);
    //Creating and adding the h3 element
    let h3Element = document.createElement('h3');
    h3Element.textContent = this.shopLocation;
    articleElement.appendChild(h3Element);
    //Creating and adding an unordered list element
    let ulElement = document.createElement('ul');
    articleElement.appendChild(ulElement);
    //Creating and adding list items
    for(let j = 0; j<this.noOfCookies.length; j++) {
      let liElement = document.createElement('li');
      liElement.textContent = this.hour[j] + this.noOfCookies[j] + ' cookies';
      ulElement.appendChild(liElement);
    }
    //Creating and adding the total
    let liElement = document.createElement('li');
    liElement.textContent = 'Total: ' + this.totalNumOfCookies + ' cookies';
    ulElement.appendChild(liElement);
  },
};

//Calling functions for each location:
SeattleSales.calculationsForSales(SeattleSales.minNumOfCustomers, SeattleSales.maxNumOfCustomers);
console.log(SeattleSales);
SeattleSales.rendering();

TokyoSales.calculationsForSales(TokyoSales.minNumOfCustomers, TokyoSales.maxNumOfCustomers);
console.log(TokyoSales);
TokyoSales.rendering();

DubaiSales.calculationsForSales(DubaiSales.minNumOfCustomers, DubaiSales.maxNumOfCustomers);
console.log(DubaiSales);
DubaiSales.rendering();

ParisSales.calculationsForSales(ParisSales.minNumOfCustomers, ParisSales.maxNumOfCustomers);
console.log(ParisSales);
ParisSales.rendering();

LimaSales.calculationsForSales(LimaSales.minNumOfCustomers, LimaSales.maxNumOfCustomers);
console.log(LimaSales);
LimaSales.rendering();
