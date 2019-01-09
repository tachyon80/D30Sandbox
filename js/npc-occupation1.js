//will have tables 1, 3 and 4. Will call to npc-occupation2.js
function occupationGen() {
    let direct = $("input[name=pickType]:checked").val();
    let raceSexArray = ["dwarf, female","dwarf, male","human, female","human, male","elf, female","elf, male","half-elf, female","half-elf, male","halfling, female","halfling, male"];
    let employArray = ["lives/works nearby","nomadic/seasonal","seeking goods/work","loves what they do","bored with job","hates what they do","been at it a long time","new to career","just one in a long line of different careers","family has done this for generations"];
    let abilityArray = ["thin stock/weak","mediocre stock/average","well-stocked/masterful"];
    let temperArray = ["aspiring","acquisitive","adventurous","ambitious","careful","conniving","covetous","deceitful","destructive","dispassionate","enterprising","generous","greedy","helpful","humanitarian","impetuous","inquisitive","logical","lustful","malicious","obliging","philanthropic","protective","reckless","scheming","shrewd","status-seeker","treacherous","underhanded","vindictive"];
    //determine race & sex
    document.getElementById("occup1").innerHTML = raceSexArray[rollDie(0,9)];
    //determine employ
    document.getElementById("occup2").innerHTML = employArray[rollDie(0,9)];
    //determine offering/ability
    document.getElementById("occup3").innerHTML = abilityArray[rollDie(0,2)];
    //determine occupation
    if (direct === "random") {
        switch (rollDie(1,3)) {
            case 1:
                direct = "merchant";
                break;
            case 2:
                direct = "tradesman";
                break;
            default:
                direct = "misc";
        }
    }
    jobMaker(direct);
    document.getElementById("occupInfo").innerHTML = direct + " -";
    //determine temperament
    document.getElementById("occup4").innerHTML = temperArray[rollDie(0,29)];
}
$("#jobRoll").click(function () {
    occupationGen();
});