//off-course determination page 14
function mild(adjust) {
    let theNum = rollDie(1,30);
    let left = false;
    let result;
    theNum -= adjust;
    if (theNum < 1) {
        result = "party stays on course"
    } else {
        if (theNum < 7) {
            result = 6;
        } else if (theNum < 13) {
            result = 12;
        } else if (theNum < 19) {
            result = 18;
        } else if (theNum < 25) {
            result = 24;
        } else {
            result = 30;
        }
        if (theNum % 2 === 0) {
            left = true;
        }
        result += "&#176; off course to the ";
        if (left) {
            result += "left (port) side.";
        } else {
            result += "right (starboard) side.";
        }
    }
    return result;
}
function moderate(adjust) {
    let theNum = rollDie(1,30);
    let left = false;
    let result;
    theNum -= adjust;
    if (theNum < 1) {
        result = "party stays on course"
    } else {
        switch (theNum) {
            case 1:
            case 2:
                result = 6;
                break;
            case 3:
            case 4:
                result = 12;
                break;
            case 5:
            case 6:
                result = 18;
                break;
            case 7:
            case 8:
                result = 24;
                break;
            case 9:
            case 10:
                result = 30;
                break;
            case 11:
            case 12:
                result = 36;
                break;
            case 13:
            case 14:
                result = 42;
                break;
            case 15:
            case 16:
                result = 48;
                break;
            case 17:
            case 18:
                result = 54;
                break;
            case 19:
            case 20:
                result = 60;
                break;
            case 21:
            case 22:
                result = 66;
                break;
            case 23:
            case 24:
                result = 72;
                break;
            case 25:
            case 26:
                result = 78;
                break;
            case 27:
            case 28:
                result = 84;
                break;
            case 29:
            case 30:
                result = 90;
        }
    }
    if (theNum % 2 === 0) {
        left = true;
    }
    result += "&#176; off course to the ";
    if (left) {
        result += "left (port) side.";
    } else {
        result += "right (starboard) side.";
    }
    return result;
}
function heavy(adjust) {
    let theNum = rollDie(1,30);
    let left = false;
    let result;
    if (rollDie(1,2) < 2) {
        left = true;
    }
    theNum -= adjust;
    if (theNum < 1) {
        result = "party stays on course"
    } else {
        result = theNum * 6;
    }
    result += "&#176; off course to the ";
    if (left) {
        result += "left (port) side.";
    } else {
        result += "right (starboard) side.";
    }
    return result;
}
$("#offcourseRoll").click(function () {
    let rslt;
    let direcSense = false;
    let fog = parseInt($("input[name=fogPck]:checked").val());
    let drunk = parseInt($("input[name=drunkPck]:checked").val());
    let stars = parseInt($("input[name=starPck]:checked").val());
    let precip = parseInt($("input[name=rainPck]:checked").val());
    let winds = parseInt($("#windVal").val());
    let adjust = parseInt($("input[name=famPck]:checked").val());
    let gauge = fog + drunk + stars + precip + winds;
    if ($("#directSense").prop('checked') === true) {
        direcSense = true;
    }
    if (gauge > 7) { //Heavy Impairment
        if (direcSense) {
            adjust += 3;
        }
        rslt = heavy(adjust);
    } else if (gauge < 4) { //Mild Impairment
        if (direcSense) {
            adjust += 1;
        }
        rslt = mild(adjust);
    } else { //Moderate Impairment
        if (direcSense) {
            adjust += 2;
        }
        rslt = moderate(adjust);
    }
    document.getElementById("offcourseRslt").innerHTML = rslt;
});