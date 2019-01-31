//assorted settlement encounters page 31
let reasonArray = ["exchange (prisoner)","ransom","press into service (slavery)","sacrifice","sell into slavery","alignment","class (character)","class (social)","group association (clan, religion, etc.)","race","doesn't like PC's looks","generally aggressive","PCs in way","reminds attacker of someone","revenge/spite","insanity, permanent","insanity, temporary","magic (e.g, charm)","under influence, alcohol","under influence, other (mushroom, toxin, etc.)","perceived interference w/ attacker's plans","mistaken identity, past wrong","mistaken identity, wanted criminal","perceived slight","perceive PCs as underhanded/having ill intentions","addict","crime of opportunity","owes lender","professional thief","victim of circumstance (needs money)"];
let eventArray = ["games, commoners'","games, hunt","games, tournament (knights)","games, youth","political, census","political, celebration of past leader","political, founders celebration","political, leader’s/ruler’s birth","political, leader’s/ruler’s celebration","political, memorial observance (solemn)","political, veterans’ observance","political, victory celebration (annual)","political, visiting dignitaries","popular, children’s celebration","popular, patrons/fathers (honors)","popular, matrons/mothers (honors)","popular, 'betrothing' day","popular, lords/servants reverse roles","popular, music","religious, calendar (new year, festive)","religious, death (festive)","religious, death (solemn)","religious, fertility","religious, lights (festive)","religious, lights (solemn)","religious, harvest","religious, martyr (solemn or festive)","religious, moon","religious, purification (solemn)","religious, sun"];
let annoyArray = ["beggar","buffoon","drunk","military recruiter","peddler/vendor","politician/petitioner","prostitute","religious petitioner","religious recruiter","street performer"];
let degreeArray = ["agreeable/timid","presumptuous/pushy","obnoxious/unyielding"];
let propArray = ["threaten someone","maim someone","kill someone","hurt someone’s relative (as sign/threat)","kill someone’s relative (as sign/threat)","kidnap someone","destroy a home","destroy a place of business","destroy property","steal property"];
let offerArray = ["honest offer","a hoax (prank)","entrapment (law)"];
let targetArray = ["noble","city official","merchant","clergy","citizen","peasant"];
let attackRslt = document.getElementById("attackRslt");
$("#attackRoll").click(function () {
    let roll = rollDie(0,29);
    let reason = reasonArray[roll];
    if (roll < 5) {
        attackRslt.innerHTML = "capture";
    } else if (roll < 10) {
        attackRslt.innerHTML = "intolerance";
    } else if (roll < 15) {
        attackRslt.innerHTML = "malevolence";
    } else if (roll < 20) {
        attackRslt.innerHTML = "mental impairment";
    } else if (roll < 25) {
        attackRslt.innerHTML = "misunderstanding";
    } else {
        attackRslt.innerHTML = "robbery";
    }
    if (roll === 25) {
        if (rollDie(1,2) < 2) {
            reason = "drug " + reason;
        } else {
            reason = "gambling " + reason;
        }
    }
    document.getElementById("reasonRslt").innerHTML = reason;
});
$("#annoyRoll").click(function () {
    document.getElementById("annoyRslt").innerHTML = annoyArray[rollDie(0,9)];
    document.getElementById("degreeRslt").innerHTML = degreeArray[rollDie(0,2)];
});
$("#crimeRoll").click(function () {
    document.getElementById("crimeRslt").innerHTML = propArray[rollDie(0,9)];
    document.getElementById("offerRslt").innerHTML = offerArray[rollDie(0,2)];
    document.getElementById("targetRslt").innerHTML = targetArray[rollDie(0,5)];
});
$("#eventRoll").click(function () {
    document.getElementById("eventRslt").innerHTML = eventArray[rollDie(0,29)];
});