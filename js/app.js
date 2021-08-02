'use strict';

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let salesProjections = document.getElementById('salesProjections');

function randomNumber(min, max) {
  return(Math.floor(Math.random() * (max - min + 1) + min));
}

//Seattle's object:

const SeattleSales = {
  shopLocation: 'Seattle',
  minNumOfCustomers: 23, //per hour
  maxNumOfCustomers: 65, //per hour
  avgNumOfCookies: 6.3, //Per customer
  noOfCookies: [], //total number of cookies per hour
  totalNumOfCookies: 0,

  calculationsForSales: function() {
    for(let i=0; i<hours.length; i++) {
      let randomGen = Math.ceil(randomNumber(this.minNumOfCustomers, this.maxNumOfCustomers) * this.avgNumOfCookies);
      this.noOfCookies.push(randomGen);
      this.totalNumOfCookies += randomGen;
    }
    return this.noOfCookies, this.totalNumOfCookies;
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
    for(let j = 0; j<hours.length; j++) {
      let liElement = document.createElement('li');
      liElement.textContent = `${hours[j]}: ${this.noOfCookies[j]} cookies`;
      ulElement.appendChild(liElement);
    }
    //Creating and adding the total
    let liElement = document.createElement('li');
    liElement.textContent = `Total: ${this.totalNumOfCookies} cookies`;
    ulElement.appendChild(liElement);
  },
};

//Tokyo's object:

const TokyoSales = {
  shopLocation: 'Tokyo',
  minNumOfCustomers: 3, //per hour
  maxNumOfCustomers: 24, //per hour
  avgNumOfCookies: 1.2, //Per customer
  noOfCookies: [], //total number of cookies per hour
  totalNumOfCookies: 0,

  calculationsForSales: function() {
    for(let i=0; i<hours.length; i++) {
      let randomGen = Math.ceil(randomNumber(this.minNumOfCustomers, this.maxNumOfCustomers) * this.avgNumOfCookies);
      this.noOfCookies.push(randomGen);
      this.totalNumOfCookies += randomGen;
    }
    return this.noOfCookies, this.totalNumOfCookies;
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
    for(let j = 0; j<hours.length; j++) {
      let liElement = document.createElement('li');
      liElement.textContent = `${hours[j]}: ${this.noOfCookies[j]} cookies`;
      ulElement.appendChild(liElement);
    }
    //Creating and adding the total
    let liElement = document.createElement('li');
    liElement.textContent = `Total: ${this.totalNumOfCookies} cookies`;
    ulElement.appendChild(liElement);
  },
};

//Dubai's object:

const DubaiSales = {
  shopLocation: 'Dubai',
  minNumOfCustomers: 11, //per hour
  maxNumOfCustomers: 38, //per hour
  avgNumOfCookies: 3.7, //Per customer
  noOfCookies: [], //total number of cookies per hour
  totalNumOfCookies: 0,

  calculationsForSales: function() {
    for(let i=0; i<hours.length; i++) {
      let randomGen = Math.ceil(randomNumber(this.minNumOfCustomers, this.maxNumOfCustomers) * this.avgNumOfCookies);
      this.noOfCookies.push(randomGen);
      this.totalNumOfCookies += randomGen;
    }
    return this.noOfCookies, this.totalNumOfCookies;
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
    for(let j = 0; j<hours.length; j++) {
      let liElement = document.createElement('li');
      liElement.textContent = `${hours[j]}: ${this.noOfCookies[j]} cookies`;
      ulElement.appendChild(liElement);
    }
    //Creating and adding the total
    let liElement = document.createElement('li');
    liElement.textContent = `Total: ${this.totalNumOfCookies} cookies`;
    ulElement.appendChild(liElement);
  },
};

//Paris's object:

const ParisSales = {
  shopLocation: 'Paris',
  minNumOfCustomers: 20, //per hour
  maxNumOfCustomers: 38, //per hour
  avgNumOfCookies: 2.3, //Per customer
  noOfCookies: [], //total number of cookies per hour
  totalNumOfCookies: 0,

  calculationsForSales: function() {
    for(let i=0; i<hours.length; i++) {
      let randomGen = Math.ceil(randomNumber(this.minNumOfCustomers, this.maxNumOfCustomers) * this.avgNumOfCookies);
      this.noOfCookies.push(randomGen);
      this.totalNumOfCookies += randomGen;
    }
    return this.noOfCookies, this.totalNumOfCookies;
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
    for(let j = 0; j<hours.length; j++) {
      let liElement = document.createElement('li');
      liElement.textContent = `${hours[j]}: ${this.noOfCookies[j]} cookies`;
      ulElement.appendChild(liElement);
    }
    //Creating and adding the total
    let liElement = document.createElement('li');
    liElement.textContent = `Total: ${this.totalNumOfCookies} cookies`;
    ulElement.appendChild(liElement);
  },
};

//Lima's object:

const LimaSales = {
  shopLocation: 'Lima',
  minNumOfCustomers: 2, //per hour
  maxNumOfCustomers: 16, //per hour
  avgNumOfCookies: 4.6, //Per customer
  noOfCookies: [], //total number of cookies per hour
  totalNumOfCookies: 0,

  calculationsForSales: function() {
    for(let i=0; i<hours.length; i++) {
      let randomGen = Math.ceil(randomNumber(this.minNumOfCustomers, this.maxNumOfCustomers) * this.avgNumOfCookies);
      this.noOfCookies.push(randomGen);
      this.totalNumOfCookies += randomGen;
    }
    return this.noOfCookies, this.totalNumOfCookies;
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
    for(let j = 0; j<hours.length; j++) {
      let liElement = document.createElement('li');
      liElement.textContent = `${hours[j]}: ${this.noOfCookies[j]} cookies`;
      ulElement.appendChild(liElement);
    }
    //Creating and adding the total
    let liElement = document.createElement('li');
    liElement.textContent = `Total: ${this.totalNumOfCookies} cookies`;
    ulElement.appendChild(liElement);
  },
};

//Calling functions for each location:
SeattleSales.calculationsForSales();
SeattleSales.rendering();

TokyoSales.calculationsForSales();
TokyoSales.rendering();

DubaiSales.calculationsForSales();
DubaiSales.rendering();

ParisSales.calculationsForSales();
ParisSales.rendering();

LimaSales.calculationsForSales();
LimaSales.rendering();
