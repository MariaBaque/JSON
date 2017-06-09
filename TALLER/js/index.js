
function myFunction() {
    var x = " ";
    var text = '[{ "Name" : "Alfreds Futterkiste", "City" : "Berlin", "Country" : "Germany" }, { "Name" : "Berglunds snabbköp", "City" : "Luleå", "Country" : "Sweden" }, { "Name" : "Centro comercial Moctezuma", "City" : "México D.F.", "Country" : "Mexico" }, { "Name" : "Ernst Handel", "City" : "Graz", "Country" : "Austria" }, { "Name" : "FISSA Fabrica Inter. Salchichas S.A.", "City" : "Madrid", "Country" : "Spain" }, { "Name" : "Galería del gastrónomo", "City" : "Barcelona", "Country" : "Spain" }, { "Name" : "Island Trading", "City" : "Cowes", "Country" : "UK" }, { "Name" : "Königlich Essen", "City" : "Brandenburg", "Country" : "Germany" }, { "Name" : "Laughing Bacchus Wine Cellars", "City" : "Vancouver", "Country" : "Canada" }, { "Name" : "Magazzini Alimentari Riuniti", "City" : "Bergamo", "Country" : "Italy" }, { "Name" : "North/South", "City" : "London", "Country" : "UK" }, { "Name" : "Paris spécialités", "City" : "Paris", "Country" : "France" }, { "Name" : "Rattlesnake Canyon Grocery", "City" : "Albuquerque", "Country" : "USA" }, { "Name" : "Simons bistro", "City" : "København", "Country" : "Denmark" }, { "Name" : "The Big Cheese", "City" : "Portland", "Country" : "USA" }, { "Name" : "Vaffeljernet", "City" : "Århus", "Country" : "Denmark" }, { "Name" : "Wolski Zajazd", "City" : "Warszawa", "Country" : "Poland" }]';
    //obj = JSON.parse(text);
//var parsedJSON = eval('('+response+')');

var obj= JSON.parse(text);
    
function compare(a, b) {
    if (a.City < b.City)
        return 1;
    if (a.City > b.City)
        return -1;
    return 0;
}

obj.sort(compare);    
obj.forEach(function(object) {
  document.getElementById("demo").innerHTML = object.Name + " " + object.City + " " + object.Country;
});
    
    var table = document.getElementById("demoTabla");


    for (i = 0; i < obj.length; i++) {
        var row = table.insertRow(0);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        //x += 
        cell1.innerHTML = obj[i].City;
        cell2.innerHTML = obj[i].Country;
        cell3.innerHTML = obj[i].Name;
        //document.getElementById("demo").innerHTML = obj[i];

        //document.getElementById("demo").innerHTML = obj[i].Name + " ";

    }
//console.log(obj)
}

window.onload = function () { 
    myFunction();
}