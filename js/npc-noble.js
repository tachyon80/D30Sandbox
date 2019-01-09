//will produce 4 different results: noble, household officer, teacher, castleJob
function noble() { //creates nobleman or noblewoman
    let titleArray = ["grand duke","grand duchess","viceroy","vicereine","archduke","archduchess","duke","duchess","prince","princess","count/earl","countess","viscount","viscountress","baron","baroness","baronet","baronetess","knight","dame","patrician","matrician","thegn","thegn, female","aristocrat","aristocrat, female","esquire","esquire, wife of","gentleman","lady"];
    let relatArray = ["brother/sister","uncle/aunt","nephew/niece","first cousin","second cousin","third cousin","first cousin, once removed","second cousin, once removed","third cousin, once removed","adopted sibling"];
    let relatString;
    document.getElementById("nobTitle").innerHTML = titleArray[rollDie(0,29)];
    switch (rollDie(1,3)) {
        case 1:
            relatString = "direct relation - " + relatArray[rollDie(0,9)];
            break;
        case 2:
            relatString = "spouse of (in-law) - " + relatArray[rollDie(0,9)];
            break;
        default:
            relatString = "family friend";
    }
    document.getElementById("nobRelat").innerHTML = relatString;
}
function house() { //creates household officer of noble
    let officArray = ["administration - steward - estate administration","administration - constable - warden/governor","administration - marshal - horses, grooms, pages","administration - master-at-arms - arms & discipline","administration - chamberlain - chambers","administration - wardrobe - clothing & domestic items","administration - bailiff - peasant laborers","administration - clerk - accounts","administration - reeve - work supervisor","administration - chancellor - secretary to noble","food and drink - kitchen steward - food & drink staff","food and drink - pantler - pantry","food and drink - butler - drink/buttery","food and drink - confectioner - confectionery","food and drink - cook - food preparation","food and drink - cellerer - cellar/wine","food and drink - poulterer - poultry","food and drink - spicer - spices/spicery","food and drink - larderer - larder","food and drink - scalder - animal carcasses & utensils","food and drink - saucery - sauces & cooking assistance","other/miscellaneous - scullion - wash (dishes/kitchen)","other/miscellaneous - chandler - wax/candles","other/miscellaneous - ewer - water & drinking vessels","other/miscellaneous - laundry - wash/store clothes","other/miscellaneous - napery - wash/store linens","other/miscellaneous - veneur - hunting animals","religious/clergy - chaplain - chapel & daily services","religious/clergy - confessor - spiritual needs/confessions","religious/clergy - almoner - collects & dispenses to poor"];
    document.getElementById("nobHouse").innerHTML = officArray[rollDie(0,29)];
}
function teacher() { //creates teacher of noble
    let teachArray = ["etiquette","courtly love","clothing/dress","music","dance","aesthetics","reading/writing","calligraphy","illumination","languages","speaking","cultures","geography","theology","philosophy","law","history","heraldry","strategy","astronomy","archery","swordsmanship","horsemanship","hunting","hawking","dog trainer (hounds) (doesn't train people)","hawk trainer (doesn't train people)","horse trainer (doesn't train people)","elephant trainer (doesn't train people)","fantastic/other animal trainer (e.g., bear, hippogriff, etc.)"];
    document.getElementById("nobTeach").innerHTML = teachArray[rollDie(0,29)];
}
function castle() { //creates castle worker
    let castArray = ["barber","blacksmith","bowyer","candlemaker","carpenter","chambermaid","clothier","cook","driver","dyer","fletcher","gardener","glazier","hayward","herbalist","herald","houseboy","messenger","minstrel","nursemaid","painter","page","physician","porter","potter","scribe","shoemaker","spinster","valet","weaver"];
    document.getElementById("nobCast").innerHTML = castArray[rollDie(0,29)];
}
$("#nobRoll").click(function () {
    noble();
});
$("#housRoll").click(function () {
    house();
});
$("#teachRoll").click(function () {
    teacher();
});
$("#castRoll").click(function () {
    castle();
});