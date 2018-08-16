(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray = planetsString.split("|");

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */

    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

    // var str = planetsString.split("|").join("<br>");
    // console.log(str);

    var str2 = planetsArray.join("<br>");
    console.log(str2);
    document.body.innerHTML = str2; //dodaje to do html i pokazuje na stronie




    //bonus
    var delimeter = "</li><li>";
    var planetList = "<ul><li>" + planetsArray.join(delimeter) + "</li></ul>";
    document.body.innerHTML = planetList;

});






