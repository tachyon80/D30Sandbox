//Settlements & Inhabitation page 18
let habType = ["single dwelling","thorp","hamlet","village","town, small","town, large","city, small","city, large","castle/keep/stronghold","temple","ruins","special"];
let specialDens = ["manor","peasant long house","orphanage","traders’ village","mill","military barracks","church","chapterhouse","bath house","alehouse/tavern/inn"];
let specialScatt = ["manor","farmstead","migrant camp","mill","military structure","abbey","priory","nunnery","bath house","inn"];
let specialFront = ["manor","trading outpost","military outpost","military camp","work camp","abbey","priory","nunnery","hermitage","nomad camp"];
let specialUnsett = ["hermit","trading outpost","military outpost","military camp","work camp","prison","hermitage","nomad camp","monastery","re-roll"];
let specialDesol = ["abandoned/forgotten tower","abandoned/forgotten castle/fortress","abandoned/forgotten temple","abandoned/forgotten town","abandoned/forgotten city","sunken city (partially submerged in ground)","lost city (below ground)","shrine","hermit","monastery"];
$("#settRoll").click(function () {
    let habRslt = parseInt($("input[name=densPck]:checked").val());
    let roll1 = rollDie(1,3);
    let roll2 = rollDie(1,30);
    let result = "uninhabited";
    let pop = 0; //population
    //decide habitation type
    if (roll1 < 2) { //might be inhabited
        if (habRslt === 0) { //desolate
            if (roll2 < 24) {
                //uninhabited
            } else if (roll2 < 26) {
                result = "single dwelling";
            } else if (roll2 < 27) {
                result = "thorp";
            } else if (roll2 < 28) {
                result = "hamlet";
            } else {
                result = "ruins";
            }
        } else if (habRslt === 1) { //unsettled
            if (roll2 < 14) {
                //uninhabited
            } else if (roll2 < 20) {
                result = "single dwelling";
            } else if (roll2 < 22) {
                result = "thorp";
            } else if (roll2 < 24) {
                result = "hamlet";
            } else if (roll2 < 26) {
                result = "village";
            } else if (roll2 < 27) {
                result = "town, small";
            } else if (roll2 < 30) {
                result = "ruins";
            } else {
                result = "special";
            }
        } else if (habRslt === 2) { //frontier
            if (roll2 < 11) {
                //uninhabited
            } else if (roll2 < 14) {
                result = "single dwelling";
            } else if (roll2 < 17) {
                result = "thorp";
            } else if (roll2 < 19) {
                result = "hamlet";
            } else if (roll2 < 21) {
                result = "village";
            } else if (roll2 < 23) {
                result = "town, small";
            } else if (roll2 < 24) {
                result = "town, large";
            } else if (roll2 < 25) {
                result = "castle/keep/stronghold";
            } else if (roll2 < 26) {
                result = "temple";
            } else if (roll2 < 30) {
                result = "ruins";
            } else {
                result = "special";
            }
        } else if (habRslt === 3) { //scattered
            if (roll2 < 6) {
                //uninhabited
            } else if (roll2 < 13) {
                result = "single dwelling";
            } else if (roll2 < 16) {
                result = "thorp";
            } else if (roll2 < 19) {
                result = "hamlet";
            } else if (roll2 < 21) {
                result = "village";
            } else if (roll2 < 23) {
                result = "town, small";
            } else if (roll2 < 24) {
                result = "town, large";
            } else if (roll2 < 25) {
                result = "city, small";
            } else if (roll2 < 27) {
                result = "castle/keep/stronghold";
            } else if (roll2 < 29) {
                result = "temple";
            } else if (roll2 < 30) {
                result = "ruins";
            } else {
                result = "special";
            }
        } else { //dense
            if (roll2 < 5) {
                result = "single dwelling";
            } else if (roll2 < 8) {
                result = "thorp";
            } else if (roll2 < 11) {
                result = "hamlet";
            } else if (roll2 < 13) {
                result = "village";
            } else if (roll2 < 15) {
                result = "town, small";
            } else if (roll2 < 16) {
                result = "town, large";
            } else if (roll2 < 17) {
                result = "city, small";
            } else if (roll2 < 20) {
                result = "city, large";
            } else if (roll2 < 25) {
                result = "castle/keep/stronghold";
            } else if (roll2 < 28) {
                result = "temple";
            } else if (roll2 < 30) {
                result = "ruins";
            } else {
                result = "special";
            }
        }
        //set population, link or special
        if (result !== "uninhabited") {
            switch (result) {
                case "single dwelling":
                    result += " &mdash; " + Math.round(rollDie(1,30)/2) + " inhabitants";
                    break;
                case "thorp":
                    result += " &mdash; population " + setSize(1);
                    break;
                case "hamlet":
                    result += " &mdash; population " + setSize(2);
                    break;
                case "village":
                    result += " &mdash; population " + setSize(3);
                    break;
                case "town, small":
                    result += " &mdash; population " + setSize(4);
                    break;
                case "town, large":
                    result += " &mdash; population " + setSize(5);
                    break;
                case "city, small":
                    result += " &mdash; population " + setSize(6);
                    break;
                case "city, large":
                    result += " &mdash; population " + setSize(7);
                    break;
                case "castle/keep/stronghold":
                    result += " &mdash; <a href='castle.html'>generator</a>";
                    break;
                case "temple":
                    result += " &mdash; <a href='temple.html'>generator</a>";
                    break;
                case "ruins":
                    result += " &mdash; <a href='ruins.html'>generator</a>";
                    break;
                case "special":
                    let roll3 = rollDie(1,30);
                    switch (habRslt) {
                        case 0:
                            break;
                        case 1:
                            break;
                        case 2:
                            break;
                        case 3:
                            break;
                        case 4:
                    }
                    result += " &mdash; ";
                    break;
            }
        }
    }
    document.getElementById("typeRslt").innerHTML = result;
});