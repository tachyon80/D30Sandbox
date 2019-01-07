//Sage Generator
function sageGen() {
    let expertise = ["physical universe","fauna","humanoids & giantkind","demi-humankind","humankind","flora","supernatural & unusual"];
    let majorField = expertise[4];
    let minorCnt = 1;
    let specialCnt = 2;
    let minors = ["",""];
    let specials; //will be array holding info on specialties in major field of study
    let result1 = rollDie(1,30);
    let result2 = rollDie(1,30);
    let result3 = rollDie(0,6);
    let result4 = rollDie(0,29);
    //5 specialty tables -> human - fauna - flora - supernatural - physical universe
    //(demi-human & humanoid share with human)
    let specialties = [["art & music ","biology & anatomy","demography"," history & genealogy","languages ","legends, lore & myth","law & customs"," philosophy & ethics","sociology & politics","theology & religion"],["amphibians","arachnids","avians","cephalopods & echinoderma","crustaceans & mollusks","icthyoids","insects","mammals","marsupials","reptiles"],["algae & lichen","bacterial flora","bushes & shrubs","flowers","fungi","grasses & grains","herbs","mosses & ferns","trees","weeds"],["astrology & numerology","cryptography","divination","dweomercraft","heraldy, signs & symbols","medicine","metaphysics","planes (inner)","planes (outer)","runes & sigils"],["architecture & engineering","astronomy","chemistry","geography","geology & mineralogy","mathematics","meteorology & climatology","oceanography","physics","topography & cartography"]];
    //create a multi-level array to hold assignment data for specialties (table SG3)
    let specialCodes = [[[0,1,2,3],[0,2,3,6],[0,3,6,9],[1,2,4,5],[1,4,5,6],[2,3,6,8],[3,4,6,8]],[[0,1,2,4],[0,2,3,7],[0,3,7,8],[1,2,4,6],[1,4,5,7],[2,3,6,9],[3,4,6,9]],[[0,1,2,5],[0,2,3,8],[0,3,7,9],[1,2,4,7],[1,4,5,8],[2,3,7,8],[3,4,7,8]],[[0,1,2,6],[0,2,3,9],[0,3,8,9],[1,2,4,8],[1,4,5,9],[2,3,7,9],[3,4,7,9]],[[0,1,2,7],[0,2,4,5],[0,4,5,6],[1,2,4,9],[1,4,6,7],[2,3,8,9],[3,4,8,9]],[[0,1,2,8],[0,2,4,6],[0,4,5,7],[1,2,5,6],[1,4,6,8],[2,4,5,6],[3,5,6,7]],[[0,1,2,9],[0,2,4,7],[0,4,5,8],[1,2,5,7],[1,4,6,9],[2,4,5,7],[3,5,6,8]],[[0,1,3,4],[0,2,4,8],[0,4,5,9],[1,2,5,8],[1,4,7,8],[2,4,5,8],[3,5,6,9]],[[0,1,3,5],[0,2,4,9],[0,4,6,7],[1,2,5,9],[1,4,7,9],[2,4,5,9],[3,5,7,8]],[[0,1,3,6],[0,2,5,6],[0,4,6,8],[1,2,6,7],[1,4,8,9],[2,4,6,7],[3,5,7,9]],[[0,1,3,7],[0,2,5,7],[0,4,6,9],[1,2,6,8],[1,5,6,7],[2,4,6,8],[3,5,8,9]],[[0,1,3,8],[0,2,5,8],[0,4,7,8],[1,2,6,9],[1,5,6,8],[2,4,6,9],[3,6,7,8]],[[0,1,3,9],[0,2,5,9],[0,4,7,9],[1,2,7,8],[1,5,6,9],[2,4,7,8],[3,6,7,9]],[[0,1,4,5],[0,2,6,7],[0,4,8,9],[1,2,7,9],[1,5,7,8],[2,4,7,9],[3,6,8,9]],[[0,1,4,6],[0,2,6,8],[0,5,6,7],[1,2,8,9],[1,5,7,9],[2,4,8,9],[3,7,8,9]],[[0,1,4,7],[0,2,6,9],[0,5,6,8],[1,3,4,5],[1,5,8,9],[2,5,6,7],[4,5,6,7]],[[0,1,4,8],[0,2,7,8],[0,5,6,9],[1,3,4,6],[1,6,7,8],[2,5,6,8],[4,5,6,8]],[[0,1,4,9],[0,2,7,9],[0,5,7,8],[1,3,4,7],[1,6,7,9],[2,5,6,9],[4,5,6,9]],[[0,1,5,6],[0,2,8,9],[0,5,7,9],[1,3,4,8],[1,6,8,9],[2,5,7,8],[4,5,7,8]],[[0,1,5,7],[0,3,4,5],[0,5,8,9],[1,3,4,9],[1,7,8,9],[2,5,7,9],[4,5,7,9]],[[0,1,5,8],[0,3,4,6],[0,6,7,8],[1,3,5,6],[2,3,4,5],[2,5,8,9],[4,5,8,9]],[[0,1,5,9],[0,3,4,7],[0,6,7,9],[1,3,5,7],[2,3,4,6],[2,6,7,8],[4,6,7,8]],[[0,1,6,7],[0,3,4,8],[0,6,8,9],[1,3,5,8],[2,3,4,7],[2,6,7,9],[4,6,7,9]],[[0,1,6,8],[0,3,4,9],[0,7,8,9],[1,3,5,9],[2,3,4,8],[2,6,8,9],[4,6,8,9]],[[0,1,6,9],[0,3,5,6],[1,2,3,4],[1,3,6,7],[2,3,4,9],[2,7,8,9],[4,7,8,9]],[[0,1,7,8],[0,3,5,7],[1,2,3,5],[1,3,6,8],[2,3,5,6],[3,4,5,6],[5,6,7,8]],[[0,1,7,9],[0,3,5,8],[1,2,3,6],[1,3,6,9],[2,3,5,7],[3,4,5,7],[5,6,7,9]],[[0,1,8,9],[0,3,5,9],[1,2,3,7],[1,3,7,8],[2,3,5,8],[3,4,5,8],[5,6,8,9]],[[0,2,3,4],[0,3,6,7],[1,2,3,8],[1,3,7,9],[2,3,5,9],[3,4,5,9],[5,7,8,9]],[[0,2,3,5],[0,3,6,8],[1,2,3,9],[1,3,8,9],[2,3,6,7],[3,4,6,7],[6,7,8,9]]];
    switch (result1) { //assign major field of study
        case 1:
            majorField = expertise[0];
            break;
        case 2:
            majorField = expertise[0];
            minorCnt = 2;
            specialCnt = 3;
            break;
        case 3:
            majorField = expertise[0];
            minorCnt = 2;
            specialCnt = 4;
            break;
        case 4:
            majorField = expertise[1];
            break;
        case 5:
            majorField = expertise[1];
            minorCnt = 2;
            specialCnt = 3;
            break;
        case 6:
            majorField = expertise[1];
            minorCnt = 2;
            specialCnt = 4;
            break;
        case 7:
            majorField = expertise[2];
            break;
        case 8:
            majorField = expertise[2];
            specialCnt = 3;
            break;
        case 9:
            majorField = expertise[2];
            specialCnt = 4;
            break;
        case 10:
            majorField = expertise[3];
            break;
        case 11:
            majorField = expertise[3];
            specialCnt = 3;
            break;
        case 12:
            majorField = expertise[3];
            specialCnt = 4;
            break;
        case 14:
            minorCnt = 2;
            break;
        case 15:
            specialCnt = 3;
            break;
        case 16:
            minorCnt = 2;
            specialCnt = 3;
            break;
        case 17:
            specialCnt = 4;
            break;
        case 18:
            minorCnt = 2;
            specialCnt = 4;
            break;
        case 19:
            majorField = expertise[3];
            minorCnt = 2;
            break;
        case 20:
            majorField = expertise[3];
            minorCnt = 2;
            specialCnt = 3;
            break;
        case 21:
            majorField = expertise[3];
            minorCnt = 2;
            specialCnt = 4;
            break;
        case 22:
            majorField = expertise[2];
            minorCnt = 2;
            break;
        case 23:
            majorField = expertise[2];
            minorCnt = 2;
            specialCnt = 3;
            break;
        case 24:
            majorField = expertise[2];
            minorCnt = 2;
            specialCnt = 4;
            break;
        case 25:
            majorField = expertise[5];
            break;
        case 26:
            majorField = expertise[5];
            minorCnt = 2;
            specialCnt = 3;
            break;
        case 27:
            majorField = expertise[5];
            minorCnt = 2;
            specialCnt = 4;
            break;
        case 28:
            majorField = expertise[6];
            break;
        case 29:
            majorField = expertise[6];
            minorCnt = 2;
            specialCnt = 3;
            break;
        case 30:
            majorField = expertise[6];
            minorCnt = 2;
            specialCnt = 4;
    }
    switch (result2) { //assign minor fields of study
        case 1:
            switch (majorField) {
                case expertise[4]:
                    minors = [expertise[3],expertise[2]];
                    break;
                case expertise[3]:
                    minors = [expertise[4],expertise[2]];
                    break;
                case expertise[2]:
                case expertise[1]:
                case expertise[5]:
                case expertise[0]:
                case expertise[6]:
                    minors = [expertise[4],expertise[3]];
            }
            break;
        case 2:
            switch (majorField) {
                case expertise[4]:
                    minors = [expertise[3],expertise[1]];
                    break;
                case expertise[3]:
                case expertise[2]:
                    minors = [expertise[4],expertise[1]];
                    break;
                case expertise[1]:
                case expertise[5]:
                case expertise[0]:
                case expertise[6]:
                    minors = [expertise[4],expertise[2]];
            }
            break;
        case 3:
            switch (majorField) {
                case expertise[4]:
                    minors = [expertise[3],expertise[5]];
                    break;
                case expertise[3]:
                case expertise[2]:
                case expertise[1]:
                    minors = [expertise[4],expertise[5]];
                    break;
                case expertise[5]:
                case expertise[0]:
                case expertise[6]:
                    minors = [expertise[4],expertise[1]];
            }
            break;
        case 4:
            switch (majorField) {
                case expertise[4]:
                    minors = [expertise[3],expertise[0]];
                    break;
                case expertise[3]:
                case expertise[2]:
                case expertise[1]:
                case expertise[5]:
                    minors = [expertise[4],expertise[0]];
                    break;
                case expertise[0]:
                case expertise[6]:
                    minors = [expertise[4],expertise[5]];
            }
            break;
        case 5:
            switch (majorField) {
                case expertise[4]:
                    minors = [expertise[3],expertise[6]];
                    break;
                case expertise[3]:
                case expertise[2]:
                case expertise[1]:
                case expertise[5]:
                case expertise[0]:
                    minors = [expertise[4],expertise[6]];
                    break;
                case expertise[6]:
                    minors = [expertise[4],expertise[0]];
            }
            break;
        case 6:
            switch (majorField) {
                case expertise[4]:
                case expertise[3]:
                    minors = [expertise[2],expertise[1]];
                    break;
                case expertise[2]:
                    minors = [expertise[3],expertise[1]];
                    break;
                case expertise[1]:
                case expertise[5]:
                case expertise[0]:
                case expertise[6]:
                    minors = [expertise[3],expertise[2]];
            }
            break;
        case 7:
            switch (majorField) {
                case expertise[4]:
                case expertise[3]:
                    minors = [expertise[2],expertise[5]];
                    break;
                case expertise[2]:
                case expertise[1]:
                    minors = [expertise[3],expertise[5]];
                    break;
                case expertise[5]:
                case expertise[0]:
                case expertise[6]:
                    minors = [expertise[3],expertise[1]];
            }
            break;
        case 8:
            switch (majorField) {
                case expertise[4]:
                case expertise[3]:
                    minors = [expertise[2],expertise[0]];
                    break;
                case expertise[2]:
                case expertise[1]:
                case expertise[5]:
                    minors = [expertise[3],expertise[0]];
                    break;
                case expertise[0]:
                case expertise[6]:
                    minors = [expertise[3],expertise[5]];
            }
            break;
        case 9:
            switch (majorField) {
                case expertise[4]:
                case expertise[3]:
                    minors = [expertise[2],expertise[6]];
                    break;
                case expertise[2]:
                case expertise[1]:
                case expertise[5]:
                case expertise[0]:
                    minors = [expertise[3],expertise[6]];
                    break;
                case expertise[6]:
                    minors = [expertise[3],expertise[0]];
            }
            break;
        case 10:
            switch (majorField) {
                case expertise[4]:
                case expertise[3]:
                case expertise[2]:
                    minors = [expertise[1],expertise[5]];
                    break;
                case expertise[1]:
                    minors = [expertise[2],expertise[5]];
                    break;
                case expertise[5]:
                case expertise[0]:
                case expertise[6]:
                    minors = [expertise[2],expertise[1]];
            }
            break;
        case 11:
            switch (majorField) {
                case expertise[4]:
                case expertise[3]:
                case expertise[2]:
                    minors = [expertise[1],expertise[0]];
                    break;
                case expertise[1]:
                case expertise[5]:
                    minors = [expertise[2],expertise[0]];
                    break;
                case expertise[0]:
                case expertise[6]:
                    minors = [expertise[2],expertise[5]];
            }
            break;
        case 12:
            switch (majorField) {
                case expertise[4]:
                case expertise[3]:
                case expertise[2]:
                    minors = [expertise[1],expertise[6]];
                    break;
                case expertise[1]:
                case expertise[5]:
                case expertise[0]:
                    minors = [expertise[2],expertise[6]];
                    break;
                case expertise[6]:
                    minors = [expertise[2],expertise[0]];
            }
            break;
        case 13:
            switch (majorField) {
                case expertise[4]:
                case expertise[3]:
                case expertise[2]:
                case expertise[1]:
                    minors = [expertise[5],expertise[0]];
                    break;
                case expertise[5]:
                    minors = [expertise[1],expertise[0]];
                    break;
                case expertise[0]:
                case expertise[6]:
                    minors = [expertise[1],expertise[5]];
            }
            break;
        case 14:
            switch (majorField) {
                case expertise[4]:
                case expertise[3]:
                case expertise[2]:
                case expertise[1]:
                    minors = [expertise[5],expertise[6]];
                    break;
                case expertise[5]:
                case expertise[0]:
                    minors = [expertise[1],expertise[6]];
                    break;
                case expertise[6]:
                    minors = [expertise[1],expertise[0]];
            }
            break;
        case 15:
            switch (majorField) {
                case expertise[4]:
                case expertise[3]:
                case expertise[2]:
                case expertise[1]:
                case expertise[5]:
                    minors = [expertise[0],expertise[6]];
                    break;
                case expertise[0]:
                    minors = [expertise[5],expertise[6]];
                    break;
                case expertise[6]:
                    minors = [expertise[5],expertise[0]];
            }
            break;
        case 16:
            switch (majorField) {
                case expertise[4]:
                case expertise[3]:
                case expertise[2]:
                case expertise[1]:
                case expertise[5]:
                    minors = [expertise[6],expertise[0]];
                    break;
                case expertise[0]:
                    minors = [expertise[6],expertise[5]];
                    break;
                case expertise[6]:
                    minors = [expertise[0],expertise[5]];
            }
            break;
        case 17:
            switch (majorField) {
                case expertise[4]:
                case expertise[3]:
                case expertise[2]:
                case expertise[1]:
                    minors = [expertise[6],expertise[5]];
                    break;
                case expertise[5]:
                case expertise[0]:
                    minors = [expertise[6],expertise[1]];
                    break;
                case expertise[6]:
                    minors = [expertise[0],expertise[1]];
            }
            break;
        case 18:
            switch (majorField) {
                case expertise[4]:
                case expertise[3]:
                case expertise[2]:
                case expertise[1]:
                    minors = [expertise[0],expertise[5]];
                    break;
                case expertise[5]:
                    minors = [expertise[0],expertise[1]];
                    break;
                case expertise[0]:
                case expertise[6]:
                    minors = [expertise[5],expertise[1]];
            }
            break;
        case 19:
            switch (majorField) {
                case expertise[4]:
                case expertise[3]:
                case expertise[2]:
                    minors = [expertise[6],expertise[1]];
                    break;
                case expertise[1]:
                case expertise[5]:
                case expertise[0]:
                    minors = [expertise[6],expertise[2]];
                    break;
                case expertise[6]:
                    minors = [expertise[0],expertise[2]];
            }
            break;
        case 20:
            switch (majorField) {
                case expertise[4]:
                case expertise[3]:
                case expertise[2]:
                    minors = [expertise[0],expertise[1]];
                    break;
                case expertise[1]:
                case expertise[5]:
                    minors = [expertise[0],expertise[2]];
                    break;
                case expertise[0]:
                case expertise[6]:
                    minors = [expertise[5],expertise[2]];
            }
            break;
        case 21:
            switch (majorField) {
                case expertise[4]:
                case expertise[3]:
                case expertise[2]:
                    minors = [expertise[5],expertise[1]];
                    break;
                case expertise[1]:
                    minors = [expertise[5],expertise[2]];
                    break;
                case expertise[5]:
                case expertise[0]:
                case expertise[6]:
                    minors = [expertise[1],expertise[2]];
            }
            break;
        case 22:
            switch (majorField) {
                case expertise[4]:
                case expertise[3]:
                    minors = [expertise[6],expertise[2]];
                    break;
                case expertise[2]:
                case expertise[1]:
                case expertise[5]:
                case expertise[0]:
                    minors = [expertise[6],expertise[3]];
                    break;
                case expertise[6]:
                    minors = [expertise[0],expertise[3]];
            }
            break;
        case 23:
            switch (majorField) {
                case expertise[4]:
                case expertise[3]:
                    minors = [expertise[0],expertise[2]];
                    break;
                case expertise[2]:
                case expertise[1]:
                case expertise[5]:
                    minors = [expertise[0],expertise[3]];
                    break;
                case expertise[0]:
                case expertise[6]:
                    minors = [expertise[5],expertise[3]];
            }
            break;
        case 24:
            switch (majorField) {
                case expertise[4]:
                case expertise[3]:
                    minors = [expertise[5],expertise[2]];
                    break;
                case expertise[2]:
                case expertise[1]:
                    minors = [expertise[5],expertise[3]];
                    break;
                case expertise[5]:
                case expertise[0]:
                case expertise[6]:
                    minors = [expertise[1],expertise[3]];
            }
            break;
        case 25:
            switch (majorField) {
                case expertise[4]:
                case expertise[3]:
                    minors = [expertise[1],expertise[2]];
                    break;
                case expertise[2]:
                    minors = [expertise[1],expertise[3]];
                    break;
                case expertise[1]:
                case expertise[5]:
                case expertise[0]:
                case expertise[6]:
                    minors = [expertise[2],expertise[3]];
            }
            break;
        case 26:
            switch (majorField) {
                case expertise[4]:
                    minors = [expertise[6],expertise[3]];
                    break;
                case expertise[3]:
                case expertise[2]:
                case expertise[1]:
                case expertise[5]:
                case expertise[0]:
                    minors = [expertise[6],expertise[4]];
                    break;
                case expertise[6]:
                    minors = [expertise[0],expertise[4]];
            }
            break;
        case 27:
            switch (majorField) {
                case expertise[4]:
                    minors = [expertise[0],expertise[3]];
                    break;
                case expertise[3]:
                case expertise[2]:
                case expertise[1]:
                case expertise[5]:
                    minors = [expertise[0],expertise[4]];
                    break;
                case expertise[0]:
                case expertise[6]:
                    minors = [expertise[5],expertise[4]];
            }
            break;
        case 28:
            switch (majorField) {
                case expertise[4]:
                    minors = [expertise[5],expertise[3]];
                    break;
                case expertise[3]:
                case expertise[2]:
                case expertise[1]:
                    minors = [expertise[5],expertise[4]];
                    break;
                case expertise[5]:
                case expertise[0]:
                case expertise[6]:
                    minors = [expertise[1],expertise[4]];
            }
            break;
        case 29:
            switch (majorField) {
                case expertise[4]:
                    minors = [expertise[1],expertise[3]];
                    break;
                case expertise[3]:
                case expertise[2]:
                    minors = [expertise[1],expertise[4]];
                    break;
                case expertise[1]:
                case expertise[5]:
                case expertise[0]:
                case expertise[6]:
                    minors = [expertise[2],expertise[4]];
            }
            break;
        case 30:
            switch (majorField) {
                case expertise[4]:
                    minors = [expertise[2],expertise[3]];
                    break;
                case expertise[3]:
                    minors = [expertise[2],expertise[4]];
                    break;
                case expertise[2]:
                case expertise[1]:
                case expertise[5]:
                case expertise[0]:
                case expertise[6]:
                    minors = [expertise[3],expertise[4]];
            }
    }
    //knock off 2nd minor field if you need to
    if (minorCnt < 2) {
        minors.pop();
    }
    //assign major field specialties
    specials = specialCodes[result4][result3]; //should give an array with 4 numbers
    switch (majorField) {
        case "humanoids & giantkind":
        case "demi-humankind":
        case "humankind":
            specials[0] = specialties[0][specials[0]];
            specials[1] = specialties[0][specials[1]];
            specials[2] = specialties[0][specials[2]];
            specials[3] = specialties[0][specials[3]];
            break;
        case "physical universe":
            specials[0] = specialties[4][specials[0]];
            specials[1] = specialties[4][specials[1]];
            specials[2] = specialties[4][specials[2]];
            specials[3] = specialties[4][specials[3]];
            break;
        case "fauna":
            specials[0] = specialties[1][specials[0]];
            specials[1] = specialties[1][specials[1]];
            specials[2] = specialties[1][specials[2]];
            specials[3] = specialties[1][specials[3]];
            break;
        case "flora":
            specials[0] = specialties[2][specials[0]];
            specials[1] = specialties[2][specials[1]];
            specials[2] = specialties[2][specials[2]];
            specials[3] = specialties[2][specials[3]];
            break;
        case "supernatural & unusual":
            specials[0] = specialties[3][specials[0]];
            specials[1] = specialties[3][specials[1]];
            specials[2] = specialties[3][specials[2]];
            specials[3] = specialties[3][specials[3]];
    }
    //knock off specialties if you need to based on specialCnt
    if (specialCnt === 3) {
        specials.pop();
    } else if (specialCnt < 3) {
        specials.splice(2, 2);
    }
    let result = "Major field of study: " + majorField + ".<br>";
    result += "Specialties: " + specials.join(', ') + ".<br>";
    result += "Minor field(s): " + minors.join(', ') + ".";
    document.getElementById("sageInfo").innerHTML = result;
}
function answerGen() { //this function generates the table with 12 cells for how likely a sage can answer a question
    let stats = [20,23,26,7,15,20,3,9,14,2,10]; //array to hold 11 numbers for answer table
    let i;
    for (i=0;i<11;i++) {
        stats[i] += rollDie(1,3);
        stats[i] += " (" + (stats[i] / .3).toFixed(1).replace(/.0$/, "") + "&percnt;)";
        document.getElementById("val" + i).innerHTML = stats[i];
    }
    $("table:first").removeClass("hideIt");
}
$("#sageRoll").click(function () {
    sageGen();
    answerGen();
});