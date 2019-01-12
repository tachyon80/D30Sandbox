//weather generator pages 12 and 13
function nonSevere() {
    let roll1 = rollDie(1,30);
    let rainFactor = roll1;
    let rain, wind;
    let solid = "";
    let hook = 0;
    if (rainFactor < 21) {
        if (rainFactor > 10) {
            rainFactor -= 10;
        }
        rain = rainFactor/10;
    }
    if (roll1 > 25) {
        wind = 8;
    } else if (roll1 > 20) {
        wind = 7;
    } else if (roll1 > 15) {
        wind = 6;
    } else if (roll1 > 10) {
        wind = 5;
    } else if (roll1 > 5) {
        wind = 4;
    } else {
        wind = 3;
    }
    switch (roll1) {
        case 21:
            rain = 1.25;
            break;
        case 22:
            rain = 1.5;
            solid = "light";
            break;
        case 23:
            rain = 1.75;
            solid = "light";
            break;
        case 24:
            rain = 2;
            solid = "light";
            break;
        case 25:
            rain = 2.25;
            solid = "medium";
            break;
        case 26:
            rain = 2.5;
            solid = "medium";
            hook = 1;
            break;
        case 27:
            rain = 2.75;
            solid = "medium";
            hook = 5;
            break;
        case 28:
            rain = 3;
            solid = "heavy";
            hook = 10;
            break;
        case 29:
            rain = 3.25;
            solid = "heavy";
            hook = 15;
            break;
        case 30:
            rain = 3.5;
            solid = "heavy";
            hook = 20;
    }
    return [rain,wind,solid,hook];
}
function severe(roll1) { //function can be called with roll result or not
    if (!roll1) {
        roll1 = rollDie(1,30);
    }
    let rain, wind;
    let solid = "";
    let hook = 0;
    if (roll1 > 24) {
        solid = "heavy";
    } else if (roll1 > 18) {
        solid = "medium";
    } else if (roll1 > 12) {
        solid = "light";
    }
    switch (roll1) {
        case 1:
            rain = 0.5;
            wind = 3;
            break;
        case 2:
            rain = 1;
            wind = 3;
            break;
        case 3:
            rain = 1.5;
            wind = 3;
            break;
        case 4:
            rain = 2;
            wind = 7;
            break;
        case 5:
            rain = 2.5;
            wind = 7;
            break;
        case 6:
            rain = 3;
            wind = 7;
            break;
        case 7:
            rain = 0.5;
            wind = 10;
            break;
        case 8:
            rain = 1;
            wind = 10;
            break;
        case 9:
            rain = 1.5;
            wind = 10;
            break;
        case 10:
            rain = 2;
            wind = 15;
            break;
        case 11:
            rain = 2.5;
            wind = 15;
            break;
        case 12:
            rain = 3;
            wind = 15;
            break;
        case 13:
            rain = 1;
            wind = 20;
            break;
        case 14:
            rain = 1.5;
            wind = 20;
            break;
        case 15:
            rain = 2;
            wind = 20;
            hook = 5;
            break;
        case 16:
            rain = 2.5;
            wind = 21;
            hook = 10;
            break;
        case 17:
            rain = 3;
            wind = 21;
            hook = 15;
            break;
        case 18:
            rain = 3.5;
            wind = 21;
            hook = 20;
            break;
        case 19:
            rain = 1;
            wind = 22;
            break;
        case 20:
            rain = 1.5;
            wind = 22;
            hook = 5;
            break;
        case 21:
            rain = 2;
            wind = 22;
            hook = 10;
            break;
        case 22:
            rain = 2.5;
            wind = 23;
            hook = 15;
            break;
        case 23:
            rain = 3;
            wind = 23;
            hook = 20;
            break;
        case 24:
            rain = 3.5;
            wind = 23;
            hook = 25;
            break;
        case 25:
            rain = 2;
            wind = 24;
            hook = 5;
            break;
        case 26:
            rain = 2.5;
            wind = 24;
            hook = 10;
            break;
        case 27:
            rain = 3;
            wind = 24;
            hook = 15;
            break;
        case 28:
            rain = 3.5;
            wind = 25;
            hook = 20;
            break;
        case 29:
            rain = 4;
            wind = 25;
            hook = 25;
            break;
        case 30:
            rain = 5;
            wind = 25;
            hook = 30;
    }
    return [rain,wind,solid,hook];
}
function tornadoCalc(hook) {
    //calculates tornado and returns hook number if tornado forms
    let isTornado = 0;
    if (hook >= rollDie(1,30)) {
        isTornado = hook;
    }
    return isTornado;
}
function tornadoBldr(tornado) {
    let result;
    switch (tornado) {
        case 5:
        case 1:
            tornado = "minor damage (class 1)";
            break;
        case 10:
            tornado = "moderate damage (class 2)";
            break;
        case 15:
            tornado = "significant damage (class 3)";
            break;
        case 20:
            tornado = "devastation (class 4)";
            break;
        case 25:
            tornado = "considerable devastation (class 5)";
            break;
        case 30:
            tornado = "widespread devastation (class 6)";
    }
    result = "A tornado forms nearby or in the distance and causes " + tornado + ".";
    return result;
}
//stormBldr takes which severity table (n or s), temperature and die roll (if any)
function stormBldr(severity,temp,roll) {
    function snowCalc(temp,rain) {
        let type = "rain";
        let sleet = false;
        if (temp < 30) {
            type = "snow";
            rain = rain * 2;
        } else if (temp === 30) {
            sleet = true;
        }
        return [type,rain,sleet];
    }
    let storm,rainType,sleet="",result;
    if (severity === "n") {
        storm = nonSevere();
    } else {
        storm = severe(roll);
    }
    rainType = snowCalc(temp,storm[0]);
    if (rainType[2]) { //if sleet = true
        if (storm[2]) { //if there's light, medium or heavy sleet
            sleet = " with " + storm[2] + " hail or sleet";
        }
    }
    result = rainType[1] + " inches of " + rainType[0] + sleet + ".<br>";
    result += "Wind speed " + storm[1] + "mph with gusts of " + (storm[1] * 3) + "mph.<br>";
    return [result,storm[3]];
}
function aResult(temp) {
    let result;
    let duration = rollDie(1,10) + 20;
    result = "a storm lasts " + duration + " minutes. ";
    let storm = stormBldr("n",temp);
    result += storm[0];
    let tornado = 0;
    if (storm[1]) {
        tornado = tornadoCalc(storm[1]);
    }
    if (tornado) {
        tornado = tornadoBldr(tornado); //tornado becomes final text string w/ tornado info
        result += tornado;
    }
    return result;
}
function bResult(temp,severity,pause) {
    let i,result;
    let thisCell = [];
    let cellDur = [];
    let stormDur = 0; //duration of storm with no breaks
    let cellBreak = [];
    let tornado = 0;
    let tornado2 = 0;
    for (i=0;i<rollDie(1,6) + 2;i++) {
        cellDur[i] = rollDie(1,10) + 20;
        stormDur += cellDur[i];
        thisCell[i] = stormBldr(severity,temp);
        tornado2 = thisCell[i][1];
        if (tornado2 > tornado) {
            tornado = tornado2;
        }
    }
    let hours = Math.floor(stormDur/60);
    let minutes = stormDur%60;
    if (minutes) {
        minutes = " and " + minutes + " minutes"
    } else {
        minutes = "";
    }
    if (pause) {
        result = "A cluster of storms.<br>";
    } else {
        result = "A storm occurs for " + hours + " hours" + minutes + ".<br>";
    }
    if (pause) {
        for (i=0;i<thisCell.length;i++) {
            cellBreak[i] = Math.floor(rollDie(1,30)/2);
        }
        cellBreak[cellBreak.length-1] = "";
    }
    for (i=0;i<thisCell.length;i++) {
        result += thisCell[i][0] + "For " + cellDur[i] + " minutes.";
        if (pause && cellBreak[i]) {
            result += " Then " + cellBreak[i] + " minutes of calm.";
        }
        result += "<br><br>";
    }
    //report on tornado (or not)
    if (tornado) {
        tornado = tornadoBldr(tornado); //tornado becomes final text string w/ tornado info
        result += tornado;
    }
    return result;
}
function fResult(temp) {
    let i,j,result;
    let thisBlock = [];
    let tornado = 0;
    let tornado2 = 0;
    let duration = (rollDie(1,30) * 10) + 60; //duration of storm
    //get data for phases of storm
    let block1 = stormBldr("s",temp,rollDie(1,10));
    tornado = tornadoCalc(block1[1]);
    let block2 = stormBldr("s",temp,rollDie(1,10)+10);
    tornado2 = tornadoCalc(block2[1]);
    if (tornado2 > tornado) {
        tornado = tornado2;
    }
    for (i=0;i<(duration-30)/10;i++) {
        thisBlock[i] = stormBldr("s",temp,rollDie(1,10)+20);
        tornado2 = tornadoCalc(thisBlock[i][1]);
        if (tornado2 > tornado) {
            tornado = tornado2;
        }
    }
    let lastBlock = stormBldr("s",temp,rollDie(1,10));
    tornado2 = tornadoCalc(lastBlock[1]);
    if (tornado2 > tornado) {
        tornado = tornado2;
    }
    //create text for duration
    let hours = Math.floor(duration/60);
    let minutes = duration%60;
    if (minutes) {
        minutes = " and " + minutes + " minutes"
    } else {
        minutes = "";
    }
    result = "a storm lasts " + hours + " hours" + minutes + ".<br>";
    //create text for phases of storm
    result += "First 10 minutes: " + block1[0] + "<br>";
    result += "Second 10 minutes: " + block2[0] + "<br>";
    //loop for middle of storm
    for (j=0;j<thisBlock.length;j++) {
        result += "Next 10 minutes: " + thisBlock[j][0] + "<br>";
    }
    result += "Final 10 minutes: " + lastBlock[0] + "<br>";
    //report on tornado (or not)
    if (tornado) {
        tornado = tornadoBldr(tornado); //tornado becomes final text string w/ tornado info
        result += tornado;
    }
    return result;
}
function weather(climate,month,terrain) {
    /*
store 396 values as (temp + 0-5) example: 650 for 65 degrees and 0 of 5
store in multi level array. First level is climate (5). 2nd level is terrain (7). 3rd level is month (12)
after accessing a value, process it with the code block above
*/
    //values that correspond to arctic forest and arctic swamp were replaced with null
    weathArray = [[[[600],[651],[700],[751],[802],[851],[951],[1003],[952],[800],[701],[650]],[[651],[653],[702],[753],[804],[854],[901],[953],[952],[903],[804],[704]],[[803],[805],[804],[853],[855],[854],[903],[905],[904],[853],[805],[804]],[[650],[701],[750],[802],[854],[903],[953],[954],[903],[852],[804],[753]],[[650],[702],[751],[803],[854],[904],[953],[954],[903],[852],[803],[753]],[[700],[751],[800],[800],[852],[851],[900],[951],[900],[850],[801],[750]],[[750],[751],[800],[852],[855],[903],[904],[905],[855],[751],[752],[701]]],[[[601],[652],[702],[752],[754],[803],[802],[854],[753],[701],[653],[602]],[[551],[603],[652],[702],[704],[753],[652],[603],[653],[601],[603],[552]],[[753],[704],[754],[753],[805],[854],[853],[855],[804],[803],[754],[754]],[[600],[652],[701],[751],[804],[852],[901],[903],[952],[850],[752],[651]],[[601],[652],[702],[751],[803],[852],[901],[904],[852],[851],[702],[652]],[[600],[651],[750],[750],[801],[850],[900],[900],[850],[800],[751],[700]],[[551],[603],[652],[652],[754],[853],[752],[755],[703],[700],[652],[601]]],[[[251],[303],[402],[502],[604],[703],[752],[804],[703],[551],[403],[302]],[[250],[253],[302],[400],[503],[652],[700],[702],[601],[500],[403],[302]],[[201],[153],[402],[502],[604],[653],[752],[753],[653],[601],[353],[303]],[[150],[202],[401],[502],[604],[653],[752],[754],[653],[501],[403],[302]],[[301],[353],[402],[502],[604],[652],[752],[754],[753],[600],[503],[402]],[[550],[551],[600],[650],[701],[800],[900],[901],[850],[750],[700],[550]],[[302],[404],[453],[501],[553],[652],[650],[652],[601],[502],[404],[353]]],[[[-50],[-51],[101],[150],[402],[501],[551],[552],[402],[300],[152],[101]],[[-50],[-51],[151],[151],[303],[402],[501],[552],[401],[300],[152],[101]],[[50],[52],[151],[301],[403],[502],[551],[553],[402],[301],[202],[151]],[[-50],[-52],[51],[151],[403],[502],[551],[553],[402],[251],[52],[-51]],[[-50],[-52],[51],[201],[403],[502],[551],[552],[402],[251],[102],[02]],[[-50],[-51],[50],[150],[400],[501],[550],[550],[401],[250],[51],[-50]],[[150],[201],[251],[300],[402],[501],[551],[553],[502],[400],[252],[151]]],[[[-150],[-200],[-101],[-50],[52],[151],[200],[200],[151],[50],[00],[-101]],[[-150],[-200],[-101],[-50],[50],[151],[200],[200],[151],[50],[00],[-101]],[null],[[-100],[-151],[-51],[50],[152],[301],[400],[403],[252],[150],[-51],[-151]],[null],[[-100],[-151],[-50],[50],[151],[300],[400],[401],[250],[150],[-51],[-150]],[[-50],[-151],[-50],[50],[150],[301],[400],[402],[251],[150],[01],[-101]]]];
    let result = weathArray[climate][terrain][month].toString();
    let precip = parseInt(result.slice(-1));
    let temp = parseInt(result.slice(0, -1));
    let lowTemp, hiTemp, d3temp = temp, d5temp = temp, stormInfo, readOut;
    let stormRoll1 = rollDie(1,30);
    //determine high and low temps
    switch (climate) {
        case 0: //tropical
            if (month > 2 && month < 9) {
                lowTemp = temp - 10;
                hiTemp = temp + 25;
            } else {
                lowTemp = temp - 20;
                hiTemp = temp + 20;
            }
            break;
        case 1: //subtropical
            if (month > 2 && month < 9) {
                lowTemp = temp - 15;
                hiTemp = temp + 25;
            } else {
                lowTemp = temp - 20;
                hiTemp = temp + 15;
            }
            break;
        case 2: //temperate
            if (month > 2 && month < 9) {
                lowTemp = temp - 15;
                hiTemp = temp + 25;
            } else {
                lowTemp = temp - 25;
                hiTemp = temp + 15;
            }
            break;
        case 3: //subarctic
            if (month > 2 && month < 9) {
                lowTemp = temp - 20;
                hiTemp = temp + 20;
            } else {
                lowTemp = temp - 25;
                hiTemp = temp + 15;
            }
            break;
        case 4: //arctic
            if (month > 2 && month < 9) {
                lowTemp = temp - 20;
                hiTemp = temp + 20;
            } else {
                lowTemp = temp - 30;
                hiTemp = temp + 10;
            }
    }
    //determine tomorrow's temp
    switch (rollDie(1,3)) {
        case 1:
            d3temp = temp - 5;
            break;
        case 3:
            d3temp = temp + 5;
    }
    switch (rollDie(1,5)) {
        case 1:
            d5temp = temp - 10;
            break;
        case 2:
            d5temp = temp - 5;
            break;
        case 4:
            d5temp = temp + 5;
            break;
        case 5:
            d5temp = temp + 10;
    }
    readOut = "Median temp: " + temp + "&#176;F Day's high: " + hiTemp + "&#176;F Day's low: " + lowTemp + "&#176;F";
    readOut += "<br>Tomorrow may be " + d3temp + "&#176;F (d3) or " + d5temp + "&#176;F (d5)";
    //determine storms and precipitation
    switch (precip) {
        case 0:
            stormInfo = "no measurable precipitation today";
            break;
        case 1:
            if (stormRoll1 === 30) {
                stormInfo = aResult(temp);
            } else {
                stormInfo = "no measurable precipitation today";
            }
            break;
        case 2:
            if (stormRoll1 === 30) {
                stormInfo = bResult(temp,"n",false); //D
            } else if (stormRoll1 === 29) {
                stormInfo = bResult(temp,"n",true); //B
            } else if (stormRoll1 > 25) {
                stormInfo = aResult(temp);
            } else {
                stormInfo = "no measurable precipitation today";
            }
            break;
        case 3:
            if (stormRoll1 === 30) {
                stormInfo = fResult(temp);
            } else if (stormRoll1 === 29) {
                stormInfo = bResult(temp,"s",false);
            } else if (stormRoll1 > 24) {
                stormInfo = bResult(temp,"n",false);
            } else if (stormRoll1 === 24) {
                stormInfo = bResult(temp,"s",true);
            } else if (stormRoll1 > 19) {
                stormInfo = bResult(temp,"n",true);
            } else if (stormRoll1 > 15) {
                stormInfo = aResult(temp);
            } else {
                stormInfo = "no measurable precipitation today";
            }
            break;
        case 4:
            if (stormRoll1 > 28) {
                stormInfo = fResult(temp);
            } else if (stormRoll1 > 25) {
                stormInfo = bResult(temp,"s",false);
            } else if (stormRoll1 > 21) {
                stormInfo = bResult(temp,"n",false);
            } else if (stormRoll1 > 18) {
                stormInfo = bResult(temp,"s",true);
            } else if (stormRoll1 > 14) {
                stormInfo = bResult(temp,"n",true);
            } else if (stormRoll1 > 8) {
                stormInfo = aResult(temp);
            } else {
                stormInfo = "no measurable precipitation today";
            }
            break;
        case 5:
            if (stormRoll1 > 27) {
                stormInfo = fResult(temp);
            } else if (stormRoll1 > 23) {
                stormInfo = bResult(temp,"s",false);
            } else if (stormRoll1 > 18) {
                stormInfo = bResult(temp,"n",false);
            } else if (stormRoll1 > 14) {
                stormInfo = bResult(temp,"s",true);
            } else if (stormRoll1 > 9) {
                stormInfo = bResult(temp,"n",true);
            } else if (stormRoll1 > 4) {
                stormInfo = aResult(temp);
            } else {
                stormInfo = "no measurable precipitation today";
            }
    }
    readOut += "<br>Precipitation &amp; storms: " + stormInfo;
    document.getElementById("weathRslt").innerHTML = readOut;
}
$("input[name=climatePck]").change(function () {
    let cond1 = $("#cond1");
    let cond2 = $("#cond2");
    if (this.value === "4") {
        cond1.addClass("hideIt");
        cond2.addClass("hideIt");
        if ($(cond1).find("input").is(":checked") || $(cond2).find("input").is(":checked")) {
            $("input[name=terrainPck]")[0].checked = true;
        }
    } else {
        cond1.removeClass("hideIt");
        cond2.removeClass("hideIt");
    }
});
$("#weathRoll").click(function () {
    let climate = parseInt($("input[name=climatePck]:checked").val());
    let month = parseInt($("#monthOp").val());
    let terrain = parseInt($("input[name=terrainPck]:checked").val());
    weather(climate,month,terrain);
});