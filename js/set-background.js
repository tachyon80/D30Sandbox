//Settlement Background page 30
let govType = ["anarchy","argentocracy","aristarchy","aristocracy","autocracy","cryptarchy","democracy","demonocracy","ecclesiarchy","ethnocracy","gerontocracy","gynocracy","heroarchy","heterarchy","matriarchy","militocracy","monarchy","oligarchy","patriarchy","pedantocracy","pedocracy","phallocracy","plutocracy","prophetocracy","quangocracy","statocracy","thearchy","theocracy","tritheocracy","xenocracy"];
let govBy = ["none (lawless society)","money (all decisions made by financial prudence)","the best (e.g., through contest)","nobility","individual w/ absolute power (e.g., emperor/dictator)","secret rulership","the people","demons (or representatives of demons)","clerics","a particular race (among mixed races)","eldest citizens (age-based)","women","heroes","foreign ruler","eldest females","military rulers","individual, usually hereditary (e.g., queen/king)","the few (usually co-equal; roll 1d30)","eldest males","strict rule-bound scholars","learned, savants, and scholars","men","the wealthy","a prophet","quasi-autonomous non-governmental organizations","the state alone, without ecclesiastical influence","a god or gods (or through 1 or more representatives)","priests or religious law","three gods (or representatives thereof)","a body of foreigners"];
let reaction = ["accepting of","aggravated by","amused by","annoyed with","anxious around","apathetic toward","bored by","curious about","cynical of","enraged by","enthralled with","envious of","excited by","frustrated with","grumpy around","impressed by","indifferent to","infuriated by","irritated by","melancholy about","peaceful around","pissed off with","predatory of","rejecting of","restless around","sympathetic toward","tired of","uncomfortable around","unimpressed by","weird around"];
let outlook = ["booming","bullish/hopeful","depressed","doomed - 1 in 30 chance each day of collapsing","expanding","inflationary","overheated/growing too fast","recessionary","uncontrolled/fluctuating - prices/taxes could be low, average or exorbitant each day","weak"];
let setIssues = ["beggars/vagrancy","drunkards","corruption","disease","feuding","fire","prostitution","theft (pickpockets)","unrest (general)","waste issues"];
let threats = ["bandits (thieves)","barbarians (horde)","beetles, giant","bugbears","chimera","clerics (evil)","dragon","elves (evil)","ettin","gargoyles","ghouls","giant(s)","gnolls","goblins","harpie(s)","hobgoblins","kobolds","lizard men","mage (hostile)","manticore","ogre(s)","ogre mage","pterodactyl","roc","skeletons","troglodytes","trolls","witch","wolves","zombies"];
$("#setRoll").click(function () {
    let roll1 = rollDie(0,29);
    let oligCnt,govByVal,prices,issueType,theIssue,issueDegree,threat;
    document.getElementById("govTitle").innerHTML = govType[roll1];
    govByVal = govBy[roll1];
    if (roll1 === 17) {
        oligCnt = rollDie(3,30);
        govByVal = govByVal.replace("roll 1d30",rollDie(3,30) + " people");
    }
    document.getElementById("govDes").innerHTML = "&mdash; governed by " + govByVal;
    document.getElementById("reacOut").innerHTML = reaction[rollDie(0,29)];
    //economic background
    document.getElementById("econOutl").innerHTML = outlook[rollDie(0,9)];
    switch (rollDie(1,3)) {
        case 1:
            prices = "low";
            break;
        case 2:
            prices = "average";
            break;
        case 3:
            prices = "exorbitant";
    }
    prices += " (relative to economic outlook)";
    document.getElementById("prices").innerHTML = prices;
    //settlement issues
    issueType = rollDie(0,9);
    theIssue = setIssues[issueType];
    if (issueType === 1 && rollDie(1,3) < 2) {
        theIssue += " and beggars";
    }
    if (issueType === 9 && rollDie(1,3) < 3) {
        theIssue += " and accompanying disease";
    }
    document.getElementById("issueSpot").innerHTML = theIssue;
    issueDegree = rollDie(1,3);
    //nearby threats
    threat = rollDie(0,29);
});