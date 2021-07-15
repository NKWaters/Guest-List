var names_of_people = [];

function submitnames() {
    var GuestName = document.getElementById("nameinput").value;
    names_of_people.push( GuestName);

    console.log(GuestName);

    console.log(names_of_people);
    var length_of_name = names_of_people.length;
    console.log(length_of_name);
    document.getElementById("name1").innerHTML=names_of_people.toString();
}

function sortedlist() {
    names_of_people.sort();
    var i = names_of_people.join("<br>");
    console.log(names_of_people);
    document.getElementById("name3").innerHTML=i.toString();
}

function show() {
    var i = names_of_people.join("<br>");
    console.log(names_of_people);
    document.getElementById("name2").innerHTML=i.toString();
    document.getElementById("sorted").style.display="block";
} 

function search() {
    var s = document.getElementById("searchinput").value;
    var found = 0;
    var j;
    for(j=0; j<names_of_people.length; j++) {
        if(s==names_of_people[j]) {
            found=found+1;
        }
    }
    document.getElementById("name4").innerHTML="Name Found "+found+" Time/s";
    console.log("Found Name "+found+" Time/s");
}