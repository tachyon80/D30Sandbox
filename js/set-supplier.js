//settlement suppliers page 34
let thorpArray = [["3/","3/",1,"3/","3/","3/",1,"3/","3/","3/","3/",2,1,"3/","3/","2/","3/",1,"3/"],["3/","2/",2,"2/","2/","2/",2,"2/","3/","2/","2/",5,2,"3/","3/",1,"2/",3,"2/"],["2/",1,3,1,1,1,5,1,"2/",1,1,10,3,"3/","3/",3,1,10,1]];
let hamArray = [["2/","2/",5,"2/","2/","2/",5,"2/","2/","2/","2/",10,3,"3/","3/",5,3,15,1],[1,1,7,1,1,1,10,1,1,1,1,15,6,"2/","2/",10,6,20,2],[3,3,9,2,2,2,15,2,2,2,2,25,9,1,1,15,9,25,3]];
let villArray = [["10/",4,9,3,3,5,21,5,"10/",3,3,"5*",10,3,3,21,10,"5*",5],["6/",5,11,6,6,10,27,10,"6/",6,6,"15*",15,6,6,27,15,"15*",10],[1,6,13,9,9,15,"3*",15,1,9,9,"25*",25,9,9,"3*",25,"25*",15]];
let sTownArray = [["10/",7,15,9,9,27,"5*","3*","10/",10,10,"2-3","5*",10,10,"5*","5*","2-3","3*"],["6/",8,18,12,12,28,"10*","8*","6/",15,15,"2-3","15*",15,15,"10*","15*","2-3","8*"],[1,9,21,15,15,29,"15*","13*",1,20,20,"2-4","25*",20,20,"15*","25*","2-4","13*"]];
let lTownArray = [[10,15,24,20,20,"15*","20*","21*",10,20,20,"2-4","2-3",20,20,"20*","1-2","2-4","21*"],[15,20,27,25,25,"1-2","27*","25*",25,25,25,"3-5","2-3",25,25,"27*","1-2","3-5","25*"],["1*","10*","5*","10*","10*","1-3","1-2","28*","10*","10*","10*","4-5","2-4","10*","10*","1-2","1-3","4-5","28*"]];
let sCityArray = [["5*","20*","15*","15*","15*","1-3","1-3","29*","15*","1-2","1-2","3-5","2-4","15*","15*","1-3","2-3","3-5","2-3"],["10*","1-3","25*","20*","20*","2-3","2-4","2-3","25*","1-2","1-2","4-6","3-5","25*","25*","2-4","2-5","4-6","2-4"],["15*","2-3","2-3","25*","25*","3-5","3-5","2-3","2-3","2-3","2-3","4-6","4-5","2-3","2-3","3-5","3-5","4-6","3-5"]];
let lCityArray = [["1-2","3-4","2-3","1-2","1-2","3-6","3-5","2-3","2-3","2-3","2-3","5-6","3-5","2-3","2-3","3-5","3-5","5-6","3-6"],["1-3","3-5","2-5","1-3","3-5","4-6","3-6","3-4","2-5","3-4","3-4","6-8","4-6","2-5","2-5","3-6","4-6","6-8","4-6"],["2-3","3-6","3-6","2-5","4-6","4-7","7-10","4-6","3-6","4-6","4-6","8-10","4-6","3-6","3-6","7-10","4-6","8-10","4-7"]];
let shopArray = ["alchemist","armor smith","boatwright (if near water)","fletcher","healing","horses","inn","leathercraft","magic supplies","magic items","potions","provisions","resale items","scribe","sage","smith (general)","tailor","tools","weapons"];
function process(set) {
    let rslt = "";
    for (let i=0;i<set.length;i++) {
        if (typeof set[i] === 'string') {
            if (set[i].includes("/")) { //get the fractions
                if (rollDie(1,parseInt(set[i]) * 30) < 2) {
                    rslt += shopArray[i] + "<br>";
                }
            } else if (set[i].includes("*")) { //get the parenthesis
                rslt += shopArray[i];
                if (rollDie(1,30) <= parseInt(set[i])) {
                    rslt += " (2)" + "<br>";
                } else {
                    rslt += "<br>";
                }
            } else { //get the brackets
                rslt += shopArray[i];
                let num1 = parseInt(set[i].slice(0,1));
                let num2 = parseInt(set[i].slice(set[i].indexOf("-") + 1));
                let cnt = rollDie(num1,num2);
                if (cnt > 1) {
                    rslt += " (" + cnt + ")<br>";
                } else {
                    rslt += "<br>";
                }
            }
        } else {
            if (rollDie(1,30) <= set[i]) {
                rslt += shopArray[i] + "<br>";
            }
        }
    }
    document.getElementById("shops").innerHTML = rslt;
}
$("#suppRoll").click(function () {
    let town = parseInt($("input[name=pickType]:checked").val());
    let popul = setSize(town);
    let sml = 1; //small, medium, large - 1 is medium
    document.getElementById("populat").innerHTML = popul;
    switch (town) {
        case 1:
            if (popul < 16) {
                sml = 0;
            } else if (popul > 25) {
                sml = 2;
            }
            process(thorpArray[sml]);
            break;
        case 2:
            if (popul < 41) {
                sml = 0;
            } else if (popul > 50) {
                sml = 2;
            }
            process(hamArray[sml]);
            break;
        case 3:
            if (popul < 80) {
                sml = 0;
            } else if (popul > 120) {
                sml = 2;
            }
            process(villArray[sml]);
            break;
        case 4:
            if (popul < 820) {
                sml = 0;
            } else if (popul > 1340) {
                sml = 2;
            }
            process(sTownArray[sml]);
            break;
        case 5:
            if (popul < 3100) {
                sml = 0;
            } else if (popul > 4000) {
                sml = 2;
            }
            process(lTownArray[sml]);
            break;
        case 6:
            if (popul < 7200) {
                sml = 0;
            } else if (popul > 9000) {
                sml = 2;
            }
            process(sCityArray[sml]);
            break;
        case 7:
            if (popul < 14400) {
                sml = 0;
            } else if (popul > 18000) {
                sml = 2;
            }
            process(lCityArray[sml]);
    }
});