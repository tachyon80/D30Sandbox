//shop and shopkeeper info page 35
let descArray =["austere","bright","charming","cluttered","cramped","dark","decorated","dilapidated","dirty","disarranged","dusty","flashy","fresh","immaculate","luxurious","modest","neat","neglected","organized","ostentatious","plain","ratty","shiny","spacious","sterile","tacky","tidy","unkempt","untidy","well-appointed"];
let attitudArray = ["accommodating","apathetic","considerate","cooperative","disinterested","dispassionate","earnest","enthusiastic","friendly","generous","helpful","hospitable","humble","indifferent","lazy","motivated","obliging","passionate","passive","persistent","poker-faced","polite","pushy","relentless","snobbish","sober","stoic","submissive","overbearing","uncaring"];
let reactArray = [3,0,1,2,-5,-3,2,7,2,1,2,1,0,0,-4,5,2,3,0,6,0,1,3,7,-6,-2,0,8,-4,0];
let barterArray = [[65,80,90,110,130],[60,75,85,105,120],[70,85,95,120,140],[70,85,95,120,140],[70,85,95,120,140],[70,85,95,120,140],[70,85,95,120,145],[60,75,85,105,120],[65,80,90,115,140],[60,75,85,100,120],[70,85,95,120,140],[70,85,95,120,140],[60,75,85,100,120],[70,85,95,120,140],[70,85,95,120,140],[70,85,95,120,140],[70,85,95,120,140],[70,85,95,120,140],[40,55,65,75,140],[60,75,85,105,120],[70,85,95,120,140],[60,75,85,105,120],[70,85,95,120,140],[60,75,85,110,120],[70,85,95,120,140],[70,85,95,120,190],[70,80,90,110,135],[40,45,50,75,100],[70,80,95,120,145],[70,80,95,120,140]];
let priceArray = [75,90,100,125,150];
let depthArray = ["sparse","thin","below average","average","above average","robust"];
let chanceArray = [["10%","1.7%","0.3%"],["1/6","3.3%","1.1%"],["50%","13.3%","1.7%"],["4/6","20%","3.3%"],["80%","2/6","10%"],["96.7%","50%","1/6"]];
let reactArray2 = ["refuses service to PCs; expels them from shop","apathetic toward PCs; will let them shop; unlikely to help; may refuse sale to PCs based on their behavior/attitude; will not barter","generally accommodating; will sell to PCs if item is in stock; will barter","will sell to PCs if item is in stock; if item is not in stock, will point PCs to where they may find unstocked items; will barter for in-stock items only","will sell to PCs if item is in stock, and at discount (decided by DM); if item is not in stock, will try to hunt it down for PCs and attempt delivery it to them (at standard price for item, plus applicable delivery/courier fees); will barter for in-stock items"];
$("#descRoll").click(function () {
    document.getElementById("interior").innerHTML = descArray[rollDie(0,29)];
    let charisma = parseInt($("#charisma").val());
    let price = rollDie(0,4);
    let depth = rollDie(0,5);
    let roll = rollDie(0,29);
    let rollReact = rollDie(1,30) + (charisma * 3) + reactArray[roll];
    let reactRslt = "";
    if (rollReact > 29) {
        reactRslt = reactArray2[4];
    } else if (rollReact > 22) {
        reactRslt = reactArray2[3];
    } else if (rollReact > 8) {
        reactRslt = reactArray2[2];
    } else if (rollReact > 1) {
        reactRslt = reactArray2[1];
    } else {
        reactRslt = reactArray2[0];
    }
    document.getElementById("prices").innerHTML = priceArray[price] + "%";
    document.getElementById("depth").innerHTML = depthArray[depth];
    document.getElementById("chances").innerHTML = "common " + chanceArray[depth][0] + ", uncommon " + chanceArray[depth][1] + ", rare " + chanceArray[depth][2];
    document.getElementById("attitud").innerHTML = attitudArray[roll];
    document.getElementById("barter").innerHTML = barterArray[roll][price] + "%";
    document.getElementById("reaction").innerHTML = reactRslt;
});