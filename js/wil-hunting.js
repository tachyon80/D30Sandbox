//Foraging & Hunting page 15
let forageData = [[[[30,18],[30,18],[29,20],[27,21]],[[27,21],[27,18],[27,20],[25,21]],[[30,21],[30,18],[30,21],[30,21]],[[30,17],[30,15],[30,18],[30,21]],[[18,12],[21,15],[18,12],[15,12]],[[1,6],[0,0],[1,8],[1,8]],[[29,15],[30,15],[29,15],[27,18]]],[[[27,21],[30,22],[29,22],[24,23]],[[16,21],[24,21],[18,18],[12,18]],[[30,21],[30,21],[30,21],[27,21]],[[27,21],[30,21],[30,20],[24,21]],[[15,15],[15,15],[15,12],[12,12]],[[1,5],[0,0],[1,9],[1,9]],[[27,18],[30,18],[29,18],[24,18]]],[[[22,18],[27,20],[24,15],[20,15]],[[9,18],[12,18],[9,15],[6,18]],[[27,18],[30,18],[27,18],[24,18]],[[18,18],[22,21],[18,15],[15,18]],[[10,18],[12,15],[10,12],[9,12]],[[2,15],[1,9],[2,15],[3,7]],[[20,18],[24,18],[20,15],[15,15]]],[[[9,15],[12,18],[8,15],[6,15]],[[5,15],[6,18],[5,15],[3,15]],[[27,18],[30,15],[24,18],[21,18]],[[9,18],[15,18],[9,15],[6,18]],[[6,12],[9,12],[6,15],[5,12]],[[2,15],[5,15],[2,5],[0,0]],[[10,15],[15,18],[10,15],[7,12]]],[[[3,12],[3,12],[2,15],[2,6]],[[0,0],[2,15],[0,0],[0,0]],null,[[2,15],[3,15],[2,15],[1,15]],null,[[2,5],[3,5],[0,0],[0,0]],[[3,15],[5,15],[3,6],[3,6]]]];
let huntData = [[[15,15,15,15],[12,12,12,12],[15,15,15,15],[15,15,15,15],[15,15,15,15],[2,2,2,2],[15,15,15,15]],[[15,15,15,15],[10,10,10,10],[15,15,15,15],[15,15,15,15],[15,15,15,12],[2,1,2,3],[15,15,15,18]],[[12,12,12,8],[9,9,9,5],[15,15,15,12],[12,15,15,8],[10,15,15,5],[2,1,2,3],[12,15,15,6]],[[3,5,5,1],[2,3,2,1],[3,3,1,1],[3,5,5,1],[3,5,3,1],[3,3,2,1],[4,6,6,2]],[[3,3,2,1],[1,2,1,1],null,[2,3,2,1],null,[1,3,1,1],[1,3,1,1]]];
function forage(climate,season,terrain) {
    let data = forageData[climate][terrain][season];
    let result = "found ";
    if (data[0] < rollDie(1,30)) {
        result += "nothing";
    } else {
        if (data[1] < rollDie(1,30)) {
            result += "nothing edible";
        } else {
            result += "food";
        }
    }
    document.getElementById("forageRslt").innerHTML = result;
}
function hunt(climate,season,terrain) {
    let data = huntData[climate][terrain][season];
    let result = "";
    if (data < rollDie(1,30)) {
        result += "no game found";
    }
    document.getElementById("huntRslt").innerHTML = result;
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
$("#forageRoll").click(function () {
    let climate = parseInt($("input[name=climatePck]:checked").val());
    let season = parseInt($("input[name=seasonPck]:checked").val());
    let terrain = parseInt($("input[name=terrainPck]:checked").val());
    forage(climate,season,terrain);
});
$("#huntRoll").click(function () {
    let climate = parseInt($("input[name=climatePck]:checked").val());
    let season = parseInt($("input[name=seasonPck]:checked").val());
    let terrain = parseInt($("input[name=terrainPck]:checked").val());
    hunt(climate,season,terrain);
});