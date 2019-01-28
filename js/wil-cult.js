//cult generator page 21
let cultType = ["alliance","brethren","brotherhood","church","coalition","circle","clan","company","confederacy","conference","consortium","court","crew","federation","fellowship","fraternity","house","knights","league","order","partnership","ring","sect","society","sodality","table","temple","union","unity","way"];
let theme = ["the apocalypse","the aurora","the body","the cataclysm","the convenant","darkness","desolation","despair","destruction","the eclipse","the elect","the infinite","the key","liberation","(the) night","the oracle","power","the secret","shadows","the shroud","the skull","smoke","the spirit","the star","the sun","the universe","the void","winter","the word","per CSS3"];
let worship = ["beholder","demon, succubus","demon, type I","demon, type II","demon, type III","demon, type IV","demon, type V","demon, type VI","djinni","dragon, black","dragon, blue","dragon, green","dragon, red","dragon, white","efreeti","elf, female, magic-user","elf, male, magic-user","human, female, cleric","human, female, magic-user","human, female, unclassed","human, male, cleric","human, male, magic-user","human, male, thief","human, male, unclassed","lamia","lich (cleric)","lich (magic-user)","mind flayer","naga, spirit","rakshasa"];
let goal = ["anarchy","control, children (all)","control, government (all)","control, religion (all)","control, wealth (all)","control, magic (all)","conversion, everyone","corruption, everyone","create massive evil army","death, all clerics","death, all monarchs","death, all nobles","debauchery/hedonism","deliverance of 'destroyer'","destruction, churches","destruction, libraries/books","destruction, living beings","destruction, magic items","destruction, relgious artifacts","experimentation (unabated)","genocide (e.g., elves)","hoard, magic items","hoard, money (gold)","isolation (from others)","mayhem (general)","servitude of others (to cult)","spread hate & fear","terrorism","torture","vandalism"];
let practic = ["amputate pinky finger upon joining","body/face painting","cannibalism","dead members 'live' (stay) with living members","dead members are dissected and fed to animal(s)","each member spends 1 day per month in hole in ground","eating of dirt","exposing of genitalia","carrying of bugs in pockets or pouches","do not clean themselves... ever","murder","must always carry lit candle","never cut their hair","nudism","pyromania","self-flagellation","shave all hair from body","sleep in coffins","sleep on bed of nails","sleep on bed of rocks","sleep suspended from a hook","speak in gibberish","speak in rhymes","spread disease (usually carried in vials)","stand still in strange places for days on end","strange diet (e.g., all worms)","talking to trees","talk only to strangers, never with other members","tattoo of arcane symbol","zoosadism (inflicting pain on animals)"];
$("#cultRoll").click(function () {
    let roll1 = rollDie(0,29); //for table CSS1
    let roll2 = rollDie(0,29); //for table CSS2
    let roll3 = rollDie(0,29); //for table CSS3
    let roll4 = rollDie(0,29); //for table CSS4
    let roll5 = rollDie(0,29); //for table CSS5
    let namType = "";
    let namTheme = "";
    if (roll1 === 2) {
        if (rollDie(1,30) < 2) {
            namType = "sisterhood";
        } else {
            namType = "brotherhood";
        }
    } else {
        namType = cultType[roll1];
    }
    if (roll2 === 29) {
        namTheme = worship[roll3];
    } else {
        namTheme = theme[roll2];
    }
    document.getElementById("typeRslt").innerHTML = "The " + namType + " of " + namTheme;
    document.getElementById("worshRslt").innerHTML = worship[roll3];
    document.getElementById("goalRslt").innerHTML = goal[roll4];
    document.getElementById("pracRslt").innerHTML = practic[roll5];
});