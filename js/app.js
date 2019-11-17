'use strict'
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
var seattle = {
    location: "seattle",
    min: 23,
    max: 65,
    avg: 6.3,
    amountsOfcookies:[],
    total: 0,
    randomNum: 0 ,
    randomCookies: 0,

    
    
    hoursMethode: function(min, max) {

        for (var i = 0; i < hours.length; i++) {
            this.randomNum = getRandomNumber(min, max);
            this.randomCookies= Math.ceil(getRandomNumber(min,max) * this.avg);
            this.amountsOfcookies.push(this.randomCookies) ;
            this.total = this.total + this.amountsOfcookies[i];
        }
    },

    render: function () {
        var container = document.getElementById("salmon");
        var articleEl = document.createElement('article');
        container.appendChild(articleEl);
        var h2El = document.createElement('h2');
        articleEl.appendChild(h2El);
        h2El.textContent = this.location;
        var ulEl = document.createElement('ul');
        articleEl.appendChild(ulEl);

        for (var a = 0; a < hours.length; a++) {
            var liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent = hours[a] + ": " + this.amountsOfcookies[a] + ' cookies';
        }
        var TotalLi = document.createElement("li");
        ulEl.appendChild(TotalLi);
        TotalLi.textContent = 'total : ' + this.total + ' ~ Cookies';
    }
    
};
seattle.hoursMethode(23,65);
seattle.render();
console.table(seattle);

var Tokyo = {
    location: "Tokyo",
    min: 3,
    max: 24,
    avg: 1.2,
    amountsOfcookies:[],
    total: 0,
    randomNum: 0 ,
    randomCookies: 0,

    
    
    hoursMethode: function(min, max) {

        for (var i = 0; i < hours.length; i++) {
            this.randomNum = getRandomNumber(min, max);
            this.randomCookies= Math.ceil(getRandomNumber(min,max) * this.avg);
            this.amountsOfcookies.push(this.randomCookies) ;
            this.total = this.total + this.amountsOfcookies[i];
        }
    },

    render: function () {
        var container = document.getElementById("salmon");
        var articleEl = document.createElement('article');
        container.appendChild(articleEl);
        var h2El = document.createElement('h2');
        articleEl.appendChild(h2El);
        h2El.textContent = this.location;
        var ulEl = document.createElement('ul');
        articleEl.appendChild(ulEl);

        for (var a = 0; a < hours.length; a++) {
            var liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent = hours[a] + ": " + this.amountsOfcookies[a] + ' cookies';
        }
        var TotalLi = document.createElement("li");
        ulEl.appendChild(TotalLi);
        TotalLi.textContent = 'total : ' + this.total + ' ~ Cookies';
    }
    
};
Tokyo.hoursMethode(3,24);
Tokyo.render();
console.table(Tokyo);

var Dubai = {
    location: "Dubai",
    min: 11,
    max: 38,
    avg: 3.7,
    amountsOfcookies:[],
    total: 0,
    randomNum: 0 ,
    randomCookies: 0,

    
    
    hoursMethode: function(min, max) {

        for (var i = 0; i < hours.length; i++) {
            this.randomNum = getRandomNumber(min, max);
            this.randomCookies= Math.ceil(getRandomNumber(min,max) * this.avg);
            this.amountsOfcookies.push(this.randomCookies) ;
            this.total = this.total + this.amountsOfcookies[i];
        }
    },

    render: function () {
        var container = document.getElementById("salmon");
        var articleEl = document.createElement('article');
        container.appendChild(articleEl);
        var h2El = document.createElement('h2');
        articleEl.appendChild(h2El);
        h2El.textContent = this.location;
        var ulEl = document.createElement('ul');
        articleEl.appendChild(ulEl);

        for (var a = 0; a < hours.length; a++) {
            var liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent = hours[a] + ": " + this.amountsOfcookies[a] + ' cookies';
        }
        var TotalLi = document.createElement("li");
        ulEl.appendChild(TotalLi);
        TotalLi.textContent = 'total : ' + this.total + ' ~ Cookies';
    }
    
};
Dubai.hoursMethode(11,38);
Dubai.render();
console.table(Dubai);

var Paris = {
    location: "Paris",
    min: 20,
    max: 38,
    avg: 2.3,
    amountsOfcookies:[],
    total: 0,
    randomNum: 0 ,
    randomCookies: 0,

    
    
    hoursMethode: function(min, max) {

        for (var i = 0; i < hours.length; i++) {
            this.randomNum = getRandomNumber(min, max);
            this.randomCookies= Math.ceil(getRandomNumber(min,max) * this.avg);
            this.amountsOfcookies.push(this.randomCookies) ;
            this.total = this.total + this.amountsOfcookies[i];
        }
    },

    render: function () {
        var container = document.getElementById("salmon");
        var articleEl = document.createElement('article');
        container.appendChild(articleEl);
        var h2El = document.createElement('h2');
        articleEl.appendChild(h2El);
        h2El.textContent = this.location;
        var ulEl = document.createElement('ul');
        articleEl.appendChild(ulEl);

        for (var a = 0; a < hours.length; a++) {
            var liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent = hours[a] + ": " + this.amountsOfcookies[a] + ' cookies';
        }
        var TotalLi = document.createElement("li");
        ulEl.appendChild(TotalLi);
        TotalLi.textContent = 'total : ' + this.total + ' ~ Cookies';
    }
    
};
Paris.hoursMethode(20,38);
Paris.render();
console.table(Paris);

var lima = {
    location: "lima",
    min: 2,
    max: 16,
    avg: 4.6,
    amountsOfcookies:[],
    total: 0,
    randomNum: 0 ,
    randomCookies: 0,

    
    
    hoursMethode: function(min, max) {

        for (var i = 0; i < hours.length; i++) {
            this.randomNum = getRandomNumber(min, max);
            this.randomCookies= Math.ceil(getRandomNumber(min,max) * this.avg);
            this.amountsOfcookies.push(this.randomCookies) ;
            this.total = this.total + this.amountsOfcookies[i];
        }
    },

    render: function () {
        var container = document.getElementById("salmon");
        var articleEl = document.createElement('article');
        container.appendChild(articleEl);
        var h2El = document.createElement('h2');
        articleEl.appendChild(h2El);
        h2El.textContent = this.location;
        var ulEl = document.createElement('ul');
        articleEl.appendChild(ulEl);

        for (var a = 0; a < hours.length; a++) {
            var liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent = hours[a] + ": " + this.amountsOfcookies[a] + ' cookies';
        }
        var TotalLi = document.createElement("li");
        ulEl.appendChild(TotalLi);
        TotalLi.textContent = 'total : ' + this.total + ' ~ Cookies';
    }
    
};
lima.hoursMethode(2,16);
lima.render();
console.table(lima);
