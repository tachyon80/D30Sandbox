//Settlements & Inhabitation page 18
let habType = ["single dwelling","thorp","hamlet","village","town, small","town, large","city, small","city, large","castle/keep/stronghold","temple","ruins","special"];
function rollDesol() {
    rollD = rollDie(1,30);
    let answer;
    if (rollD < 7) {
        answer = "abandoned/forgotten tower";
    } else if (rollD < 12) {
        answer = "abandoned/forgotten castle/fortress";
    } else if (rollD < 14) {
        answer = "abandoned/forgotten temple";
    } else if (rollD < 16) {
        answer = "abandoned/forgotten town";
    } else if (rollD < 18) {
        answer = "abandoned/forgotten city";
    } else if (rollD < 19) {
        answer = "sunken city (partially submerged in ground)";
    } else if (rollD < 20) {
        answer = "lost city (below ground)";
    } else if (rollD < 23) {
        answer = "shrine";
        if (rollDie(1,3) < 3) {
            answer += " (inactive)";
        }
    } else if (rollD < 30) {
        answer = "hermit";
    } else {
        answer = "monastery";
    }
    return answer;
}
let speclOp = $("#spclOpt");
$("#settRoll").click(function () {
    speclOp.addClass("hideIt");
    let habRslt = parseInt($("input[name=densPck]:checked").val());
    let roll1 = rollDie(1,3);
    let roll2 = rollDie(1,30);
    let result = "uninhabited";
    let pop = 0; //population
    //decide habitation type
    if (roll1 < 2) { //might be inhabited
        if (habRslt === 0) { //desolate
            if (roll2 < 23) {
                //uninhabited
            } else if (roll2 < 25) {
                result = "single dwelling";
            } else if (roll2 < 26) {
                result = "thorp";
            } else if (roll2 < 27) {
                result = "hamlet";
            } else if (roll2 < 30) {
                result = "ruins";
            } else {
                result = "special";
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
                    result += " &mdash; ";
                    switch (habRslt) {
                        case 0: //desolate
                            result += rollDesol();
                            break;
                        case 1: //unsettled
                            if (roll3 < 2) {
                                result += "hermit";
                            } else if (roll3 < 7) {
                                result += "trading outpost";
                            } else if (roll3 < 13) {
                                result += "military outpost";
                            } else if (roll3 < 16) {
                                result += "military camp";
                            } else if (roll3 < 18) {
                                result += "work camp";
                            } else if (roll3 < 20) {
                                result += "prison";
                            } else if (roll3 < 23) {
                                result += "hermitage";
                            } else if (roll3 < 26) {
                                result += "nomad camp";
                            } else if (roll3 < 30) {
                                result += "monastery";
                            } else {
                                result += rollDesol();
                            }
                            break;
                        case 2: //frontier
                            if (roll3 < 4) {
                                result += "manor";
                            } else if (roll3 < 12) {
                                result += "trading outpost";
                            } else if (roll3 < 17) {
                                result += "military outpost";
                            } else if (roll3 < 19) {
                                result += "military camp";
                            } else if (roll3 < 21) {
                                result += "work camp";
                            } else if (roll3 < 22) {
                                result += "abbey";
                            } else if (roll3 < 23) {
                                result += "priory";
                            } else if (roll3 < 24) {
                                result += "nunnery";
                            } else if (roll3 < 27) {
                                result += "hermitage";
                            } else {
                                result += "nomad camp";
                            }
                            break;
                        case 3: //scattered
                            if (roll3 < 5) {
                                result += "manor";
                            } else if (roll3 < 8) {
                                result += "farmstead";
                            } else if (roll3 < 11) {
                                result += "migrant camp";
                            } else if (roll3 < 14) {
                                result += "mill";
                            } else if (roll3 < 16) {
                                result += "military structure";
                            } else if (roll3 < 17) {
                                result += "abbey";
                            } else if (roll3 < 18) {
                                result += "priory";
                            } else if (roll3 < 19) {
                                result += "nunnery";
                            } else if (roll3 < 21) {
                                result += "bath house";
                            } else {
                                result += "inn";
                            }
                            break;
                        case 4: //dense
                            if (roll3 < 5) {
                                result += "manor";
                            } else if (roll3 < 8) {
                                result += "peasant long house";
                            } else if (roll3 < 11) {
                                result += "orphanage";
                            } else if (roll3 < 14) {
                                result += "traders’ village";
                            } else if (roll3 < 16) {
                                result += "mill";
                            } else if (roll3 < 19) {
                                result += "military barracks";
                            } else if (roll3 < 22) {
                                result += "church";
                            } else if (roll3 < 25) {
                                result += "chapterhouse";
                            } else if (roll3 < 28) {
                                result += "bath house";
                            } else {
                                result += "alehouse/tavern/inn";
                            }
                    }
                    speclOp.removeClass("hideIt");
            }
        }
    }
    document.getElementById("typeRslt").innerHTML = result;
});