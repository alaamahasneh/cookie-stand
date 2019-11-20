'use strict'
var shops = [];
var container = document.getElementById("salmon");


var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
function Shop(location, min, max, avg) {
    this.name = location;
    this.min = min;
    this.max = max;
    this.avg = avg;
    this.numOfCookies = [];
    this.total = 0;
    shops.push(this);
    this.getCookiesPerHour();
  }
  Shop.prototype.getRandomCustomer = function() {
    return Math.ceil(Math.random() * (this.max - this.min + 1)) + this.min;
  };
  Shop.prototype.getCookiesPerHour = function() {
    for (let i = 0; i < hours.length; i++) {
      this.numOfCookies.push(Math.floor(this.getRandomCustomer() * this.avg));
      this.total += this.numOfCookies[i];
    }
  };
  Shop.prototype.render = function() {
    var tableEl= document.createElement('table');
    container.appendChild(tableEl);
    var trEl = document.createElement("tr");
    tableEl.appendChild(trEl);
    var tdEl = document.createElement("td");
    trEl.appendChild(tdEl);
    tdEl.textContent = this.name;
    for (var i = 0; i < hours.length; i++) {
      var tdEl = document.createElement("td");
      tdEl.textContent = this.numOfCookies[i];
      trEl.appendChild(tdEl);
    }
    var totalTdEl = document.createElement("td");
    trEl.appendChild(totalTdEl);
    totalTdEl.textContent = this.total;
  };
  
  var seattle = new Shop("Seattle", 23, 65, 6.3);
  var tokyo = new Shop("Tokyo", 3, 24, 1.2);
  var dubai = new Shop("Dubai", 11, 38, 3.7);
  var paris = new Shop("Paris", 20, 38, 2.3);
  var lima = new Shop("Lima", 2, 16, 4.6);
  
  function renderHeader() {
    var tableEl= document.createElement('table');
    container.appendChild(tableEl);
    var trEl = document.createElement("tr");
    tableEl.appendChild(trEl);
    var thEl = document.createElement("th");
    trEl.appendChild(thEl);
    thEl.textContent = " ";
    for (let i = 0; i < hours.length; i++) {
      var thEl = document.createElement("th");
      trEl.appendChild(thEl);
      thEl.textContent = hours[i];
    }
    var thEl = document.createElement("th");
    trEl.appendChild(thEl);
    thEl.textContent = "Total";
  }
  function renderFooter() {
    var tableEl= document.createElement('table');
    container.appendChild(tableEl);
    var trEl = document.createElement("tr");
    tableEl.appendChild(trEl);
    var tdEl = document.createElement("td");
    trEl.appendChild(tdEl);
    tdEl.textContent = "Total";
    var megaTotal = 0;
    for (let i = 0; i < hours.length; i++) {
      var sum = 0;
      for (let j = 0; j < shops.length; j++) {
        sum += shops[j].numOfCookies[i];
      }
      megaTotal += sum;
      var tdEl = document.createElement("td");
      trEl.appendChild(tdEl);
      tdEl.textContent = sum;
    }
    var tdEl = document.createElement("td");
    trEl.appendChild(tdEl);
    tdEl.textContent = megaTotal;
  }
  
  renderHeader();
  for (let i = 0; i < shops.length; i++) {
    shops[i].render();
  }
  renderFooter();
  