var fish = 0;
var fishName = 'null';
var fishWeight = 0;

var myFish = [];

function fishCatch(){
    document.getElementById("fishing").disabled = true;

    var img = document.getElementById("image");
    img.style.display = "block";

    var slot = document.getElementById("aquarium_con");
    slot.style.display = "none";

    
    
    document.getElementById("desc").innerHTML = "You cast your line";
    setTimeout(fishRandomizer, 5000);
}

function fishRandomizer(){
    fish = Math.floor(Math.random()*20);
    fishWeight = Math.round(Math.random()*10)/10;

    if(fish == 1){
        fishName = 'Largemouth Bass';
        document.getElementById("l_Bass").src="../Assets/Fishes/Largemouth Bass.jpg";
        var img = document.getElementById("l_Bass");
        img.style.visibility = "visible";
    }

    if(fish == 2){
        fishName = 'Smallmouth Bass';
        document.getElementById("s_Bass").src="../Assets/Fishes/Smallmouth Bass.jpg";
        var img = document.getElementById("s_Bass");
        img.style.visibility = "visible";
    }

    if(fish == 3){
        fishName = 'Bluegill';
        document.getElementById("B_Gill").src="../Assets/Fishes/Bluegill.jpg";
        var img = document.getElementById("B_Gil");
        img.style.visibility = "visible";
    }

    if(fish == 4){
        fishName = 'Perch';
        document.getElementById("Perch").src="../Assets/Fishes/Perch.jpg";
        var img = document.getElementById("Perch");
        img.style.visibility = "visible";
    }

    if(fish == 5){
        fishName = 'Roach';
        document.getElementById("Roach").src="../Assets/Fishes/Roach.jpg";
        var img = document.getElementById("Roach");
        img.style.visibility = "visible";
    }

    if(fish == 6){
        fishName = 'Channel Catfish';
        document.getElementById("C_Catfish").src="../Assets/Fishes/Channel Catfish.jpg";
        var img = document.getElementById("C_Catfish");
        img.style.visibility = "visible";
    }

    if(fish == 7){
        fishName = 'Crappie';
        document.getElementById("Crappie").src="../Assets/Fishes/Crappie.jpg";
        var img = document.getElementById("Crappie");
        img.style.visibility = "visible";
    }

    if(fish == 8){
        fishName = 'Rainbow Trout';
        document.getElementById("R_Trout").src="../Assets/Fishes/Trout.jpg";
        var img = document.getElementById("R_Trout");
        img.style.visibility = "visible";
    }

    if(fish == 9){
        fishName = 'Sturgeon';
        document.getElementById("Sturgeon").src="../Assets/Fishes/Sturgeon.jpg";
        var img = document.getElementById("Sturgeon");
        img.style.visibility = "visible";
    }

    document.getElementById("desc").innerHTML = "You've caught a " + fishWeight + "lbs "+ fishName;

    if(fish > 9 || fish == 0){
        fishName = 'Null';
        document.getElementById("desc").innerHTML = "Your line snapped!";
    }

    console.log("fish name "+ fishName);
    console.log("fish number "+ fish);

    document.getElementById("fishing").disabled = false;

    // document.getElementById("desc").innerHTML = "You've caught a " + fishWeight + "lbs "+ fishName;
}


function shop(){
    document.getElementById("desc").innerHTML = "The shop feature is not available for now";
}

function aquarium(){
    var img = document.getElementById("image");
    img.style.display = "none";
    
    document.getElementById("desc").innerHTML = "Welcome to your aquarium!";

    var slot = document.getElementById("aquarium_con");
    slot.style.display = "grid";
    slot.style.gridTemplateColumns = "repeat(1, 1fr)";
    // slot.style.gridGap = "5px";

    
}

function save(){
    document.getElementById("desc").innerHTML = "Progress saved";
}
