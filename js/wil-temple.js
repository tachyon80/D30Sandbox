//temple generator page 20
let tempType = ["henge","henge, mini","henge, super","tabernacle","mound","mound, platform","stone, primitive","stone/mound","conjuratory","pyramid, mastaba","pyramid, primitive","pyramid, rhomboidal","pyramid, standard","pyramid, ziggurat","mortuary","terraced","rock-cut","pagoda","monopoteros","hypaethral","classical","basilica","tetraconch, domed","tetraconch, flat","triconch, domed","triconch, flat","cruciform","cross-in-square","central plan, domed","central plan, flat"];
let descrip = ["earth bank with inner ditch", "earth bank with inner ditch","earth bank with inner ditch","tent-sanctuary","large earthen mound","stair-stepped, rectangular structure with outward sloping sides","stone-walled, above-ground structure","stone-walled, partially 'buried' structure","square; stone archway walls with stone roof","flat-roofed, rectangular structure with outward sloping sides","trapezoidal platform on artificial mound with sloped causeway","double slope, changes inclination approximately halfway up","square base with sloped sides meeting at apex","terraced step pyramid of successively receding levels","pillared court, elongated shrines, and chapel along single axis","layered terraces fronted by colonnades; usually cut from mountainside","cut into mountain face; main chamber + columned portico","tiered tower","domed circular colonnade, no walls","rectilinear with columns, no roof","naos with columns","rectangular hall with a gable roof and semi-circular apse","domed sanctuary with four equally-sized apses","sanctuary with four equally-sized apses, flat roof","domed sanctuary with four equally-sized apses but with narthex replacing one apse","as flat tetraconch, but with narthex replacing one apse","cross-shaped; long sanctuary with transept 'arms'","quadratic naos divided into nine bays by four columns","simple structure with 1d5+3 sides and domed/vaulted center","simple structure with 1d5+3 sides and flat roof"];
let classic = ["cyclostyle: round/domed (no columns)","peripteral/tholoi: round/domed with single colonnade around perimeter","prostyle/distyle","prostyle/tetrastyle","prostyle/hexastyle","prostyle/octostyle","prostyle/decastyle","prostyle/dodecastyle","amphiprostyle/distyle","amphiprostyle/tetrastyle","amphiprostyle/hexastyle","amphiprostyle/octostyle","amphiprostyle/decastyle","amphiprostyle/dodecastyle","peripteral/hexastyle","peripteral/octostyle","peripteral/decastyle","peripteral/dodecastyle","pseudo-peripteral/hexastyle","pseudo-peripteral/octostyle","pseudo-peripteral/decastyle","pseudo-peripteral/dodecastyle","dipteral/hexastyle","dipteral/octostyle","dipteral/decastyle","dipteral/dodecastyle","pseudo-dipteral/hexastyle","pseudo-dipteral/octostyle","pseudo-dipteral/decastyle","pseudo-dipteral/dodecastyle"];
$("#templRoll").click(function () {
    let roll1 = rollDie(0,29);
    let subRoll = rollDie(1,3);
    let describe = descrip[roll1];
    let sizeDesc = "";
    let ovrview = $("#overview");
    ovrview.addClass("hideIt");
    document.getElementById("typeRslt").innerHTML = tempType[roll1];
    if (roll1 < 3) {
        if (subRoll === 2) {
            describe += " plus timber structures";
        } else if (subRoll === 3) {
            describe += " plus stone structures";
        }
    } else if (roll1 === 17) {
        if (subRoll < 2) {
            describe += " with 4 sides";
        } else if (subRoll > 2) {
            describe += " with 8 sides";
        } else {
            describe += " with 6 sides";
        }
    } else if (roll1 > 27) {
        describe = describe.replace("1d5+3", rollDie(1,5)+3)
    } else if (roll1 === 20) { //classical
        let roll2 = rollDie(0,29);
        describe += " &mdash; " + classic[roll2];
        if (roll2 > 25) {
            //pseudo-dipteral
            describe += ": double colonnades on front & back faces, and single collonade + 'false' (1/2) colonnade along 'side' walls";
        } else if (roll2 > 21) {
            //dipteral
            describe += ": double colonnade around perimeter";
        } else if (roll2 > 17) {
            //pseudo-peripteral
            describe += ": single colonnades at front & back faces with 'false' (1/2) colonnade along 'side' walls";
        } else if (roll2 > 13) {
            //peripteral
            describe += ": single colonnade around perimeter";
        } else if (roll2 > 7) {
            //amphiprostyle
            describe += ": columns along front and back faces";
        } else if (roll2 > 1) {
            //prostyle
            describe += ": columns along front face only";
        }
        //clean out special spans
        document.getElementById("portico").innerHTML = "";
        document.getElementById("restricted").innerHTML = "";
        //number of columns
        if (roll2 > 1) {
            describe += ", ";
            if (roll2 === 2 || roll2 === 8) {
                describe += "2";
            } else if (roll2 === 3 || roll2 === 9) {
                describe += "4";
            } else if (describe.search("hexastyle") !== -1) {
                describe += "6";
            } else if (describe.search("octostyle") !== -1) {
                describe += "8";
            } else if (describe.search("dodecastyle") !== -1) {
                describe += "12";
            } else if (describe.search("decastyle") !== -1) {
                describe += "10";
            }
            describe += " columns on 'end' faces";
            if (rollDie(1,3) < 2) {
                document.getElementById("portico").innerHTML = "This one has a pronaos (inner portico area) before the cella.";
            }
            if (rollDie(1,30) < 2) {
                document.getElementById("restricted").innerHTML = " There is an adyton (restricted area) behind the cella.";
            }
        }
        ovrview.removeClass("hideIt");
    }
    if (roll1 === 2) {
        if (rollDie(1,2) < 2) {
            describe += " &mdash; center is occupied (as opposed to strictly religious in purpose)";
        }
    }
    document.getElementById("descrRslt").innerHTML = describe;
    //handle size
    if (roll1 > 20) {
        let siz = rollDie(1,3);
        if (siz === 1) {
            sizeDesc = "small";
        } else if (siz === 2) {
            sizeDesc = "medium";
        } else {
            sizeDesc = "large";
        }
        sizeDesc += " (actual square feet at DM's discretion)";
    } else {
        switch (roll1) {
            case 0:
                sizeDesc = rollDie(1,30) + 30 + " feet diameter";
                break;
            case 1:
                sizeDesc = rollDie(1,10) + 20 + " feet diameter";
                break;
            case 2:
                sizeDesc = (rollDie(1,30)*10) + 50 + " feet diameter";
                break;
            case 3:
                sizeDesc = rollDie(1,3)*10 + " feet x " + rollDie(1,5)*10 + " feet";
                break;
            case 4:
                sizeDesc = rollDie(1,6) + " rooms";
                break;
            case 5:
                sizeDesc = rollDie(1,2) + 1 + " levels";
                break;
            case 6:
            case 7:
                sizeDesc = rollDie(1,5) + " 'rooms'";
                break;
            case 8:
                sizeDesc = (rollDie(1,5)*5) + 10 + " feet length per side";
                break;
            case 9:
                sizeDesc = rollDie(1,5) + 1 + " levels";
                break;
            case 10:
                sizeDesc = (rollDie(1,30)*2) + 10 + " square feet";
                break;
            case 11:
                sizeDesc = rollDie(1,3)*2 + " levels";
                break;
            case 12:
            case 13:
                sizeDesc = rollDie(1,5) + 2 + " levels";
                break;
            case 14:
                sizeDesc = rollDie(1,5) + 2 + " shrines";
                break;
            case 15:
                sizeDesc = rollDie(1,3) + 1 + " terraces";
                break;
            case 16:
                sizeDesc = (rollDie(1,5) + 1)*2 + " columns";
                break;
            case 17:
                sizeDesc = rollDie(1,10) + 1 + " levels";
                break;
            case 18:
                sizeDesc = rollDie(1,10) + 5 + " columns";
                break;
            case 19:
                sizeDesc = (rollDie(1,3) + 1)*2 + " columns per side";
                break;
            case 20:
                sizeDesc = "20-30 feet length per column";
        }
    }
    document.getElementById("sizeRslt").innerHTML = sizeDesc;
});