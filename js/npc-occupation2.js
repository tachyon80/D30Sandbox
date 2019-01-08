//adv-adventure.js and npc-occupation1.js will call this for results
function jobMaker(personType) { //personType can be "merchant" "tradesman" "misc"
    let merchantList = ["antiquities","armor","art objects","beer","block & tackle","books","building supplies","clothing","feed & seed","food stuffs","furnishings","jewelry","leather goods","livestock, small","obscurities","perfume/soap","personal items","precious gems & metals","rope","rugs/tapestries","spices","tools","torches/lamps","weapons","wine","magic weapons","magic armor","magic items (general)","scrolls","potions"];
    let tradeList = ["accountant","architect","armorer","boatmaker","bootmaker","bowyer","carpenter","carpetmaker","carver","cobbler","cooper","fletcher","glassblower","goldsmith","hatmaker","jeweller","lampmaker","leather craftsman","mason","miner","metal worker","potter","ropemaker","saddlemaker","smith","tailor","tanner","weaver","wheelright","winemaker"];
    let miscList = ["actor","alchemist","animal trainer","assassin","artist","astrologer","author","baker","barber","beggar","butcher","circus performer","cook","dancer","fisherman","fortune teller","interpreter","mercenary","messenger","minstrel","orator","poet","politician","puppeteer","sage","sailor","sculptor","teacher","trapper","undertaker"];
    let randNum = rollDie(0,29);
    let result = "";
    switch (personType) {
        case "merchant":
            result = merchantList[randNum];
            break;
        case "tradesman":
            result = tradeList[randNum];
            break;
        case "misc":
            result = miscList[randNum];
    }
    document.getElementById("occupationInfo").innerHTML = result;
}