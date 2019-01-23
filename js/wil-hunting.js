//Foraging & Hunting page 15
let forageData = [[[[30,18],[30,18],[29,20],[27,21]],[[27,21],[27,18],[27,20],[25,21]],[[30,21],[30,18],[30,21],[30,21]],[[30,17],[30,15],[30,18],[30,21]],[[18,12],[21,15],[18,12],[15,12]],[[1,6],[0,0],[1,8],[1,8]],[[29,15],[30,15],[29,15],[27,18]]],[[[27,21],[30,22],[29,22],[24,23]],[[16,21],[24,21],[18,18],[12,18]],[[30,21],[30,21],[30,21],[27,21]],[[27,21],[30,21],[30,20],[24,21]],[[15,15],[15,15],[15,12],[12,12]],[[1,5],[0,0],[1,9],[1,9]],[[27,18],[30,18],[29,18],[24,18]]],[[[22,18],[27,20],[24,15],[20,15]],[[9,18],[12,18],[9,15],[6,18]],[[27,18],[30,18],[27,18],[24,18]],[[18,18],[22,21],[18,15],[15,18]],[[10,18],[12,15],[10,12],[9,12]],[[2,15],[1,9],[2,15],[3,7]],[[20,18],[24,18],[20,15],[15,15]]],[[[9,15],[12,18],[8,15],[6,15]],[[5,15],[6,18],[5,15],[3,15]],[[27,18],[30,15],[24,18],[21,18]],[[9,18],[15,18],[9,15],[6,18]],[[6,12],[9,12],[6,15],[5,12]],[[2,15],[5,15],[2,5],[0,0]],[[10,15],[15,18],[10,15],[7,12]]],[[[3,12],[3,12],[2,15],[2,6]],[[0,0],[2,15],[0,0],[0,0]],null,[[2,15],[3,15],[2,15],[1,15]],null,[[2,5],[3,5],[0,0],[0,0]],[[3,15],[5,15],[3,6],[3,6]]]];
let huntData = [[[15,15,15,15],[12,12,12,12],[15,15,15,15],[15,15,15,15],[15,15,15,15],[2,2,2,2],[15,15,15,15]],[[15,15,15,15],[10,10,10,10],[15,15,15,15],[15,15,15,15],[15,15,15,12],[2,1,2,3],[15,15,15,18]],[[12,12,12,8],[9,9,9,5],[15,15,15,12],[12,15,15,8],[10,15,15,5],[2,1,2,3],[12,15,15,6]],[[3,5,5,1],[2,3,2,1],[3,3,1,1],[3,5,5,1],[3,5,3,1],[3,3,2,1],[4,6,6,2]],[[3,3,2,1],[1,2,1,1],null,[2,3,2,1],null,[1,3,1,1],[1,3,1,1]]];
let medCnt = [2,3,6,8];
let smallCnt = [3,6,8,12];
function hntr2(num) {
    if (num < 4) {
        num = 1;
    } else if (num < 9) {
        num = 2;
    } else if (num < 16) {
        num = 3;
    } else if (num < 23) {
        num = 4;
    } else if (num < 28) {
        num = 5;
    } else {
        num = 6;
    }
    return num;
}
function hntr3(num) {
    if (num < 3) {
        num = 2;
    } else if (num < 6) {
        num = 3;
    } else if (num < 11) {
        num = 4;
    } else if (num < 19) {
        num = 5;
    } else if (num < 24) {
        num = 6;
    } else if (num < 29) {
        num = 7;
    } else {
        num = 8;
    }
    return num;
}
function hntr4(num) {
    if (num < 2) {
        num = 2;
    } else if (num < 4) {
        num = 3;
    } else if (num < 6) {
        num = 4;
    } else if (num < 9) {
        num = 5;
    } else if (num < 13) {
        num = 6;
    } else if (num < 19) {
        num = 7;
    } else if (num < 23) {
        num = 8;
    } else if (num < 26) {
        num = 9;
    } else if (num < 28) {
        num = 10;
    } else if (num < 30) {
        num = 11;
    } else {
        num = 12;
    }
    return num;
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
});
$("#huntRoll").click(function () {
    let climate = parseInt($("input[name=climatePck]:checked").val());
    let season = parseInt($("input[name=seasonPck]:checked").val());
    let terrain = parseInt($("input[name=terrainPck]:checked").val());
    let data = huntData[climate][terrain][season];
    let hntSuc = [];
    let i,success,gameType,gameSize,maxCnt,result;
    let distance = rollDie(1,3) * 10;
    let huntrCnt = parseInt($("#huntOp").val());
    if (huntrCnt > 1) {
        data = data - ((huntrCnt - 1) * 3);
    }
    if ($("#offHours").prop('checked') === true) {
        data -= 3;
    }
    if ($("#isProficient").prop('checked') === true) {
        data += 3;
    }
    for (i=0;i<huntrCnt;i++) {
        if (data >= rollDie(1,30)) {
            success = true;
        }
    }
    if (!success) {
        result = "no game found";
    } else {
        gameType = rollDie(1,10);
        if (gameType > 8) {
            gameSize = "large";
            distance += 50;
            maxCnt = rollDie(2,3);
        } else if (gameType < 5) {
            gameSize = "small";
            distance += 10;
            maxCnt = smallCnt[rollDie(0,3)];
        } else {
            gameSize = "medium";
            distance += 30;
            maxCnt = medCnt[rollDie(0,3)];
        }
        switch (huntrCnt) {
            case 1:
                hntSuc[0] = rollDie(1,3);
                hntSuc[1] = rollDie(1,3);
                break;
            case 2:
                hntSuc[0] = hntr2(rollDie(1,30));
                hntSuc[1] = hntr2(rollDie(1,30));
                break;
            case 3:
                hntSuc[0] = hntr3(rollDie(1,30));
                hntSuc[1] = hntr3(rollDie(1,30));
                break;
            default:
                hntSuc[0] = hntr4(rollDie(1,30));
                hntSuc[1] = hntr4(rollDie(1,30));
        }
        hntSuc.sort(function(a, b){return a-b});
        //compute number of game caught
        if (maxCnt < hntSuc[0]) {
            hntSuc[0] = maxCnt;
        }
        result = hntSuc[0] + " " + gameSize + " game caught (if your missiles can reach " + distance + " yards). " + hntSuc[1] + " missiles fired.";
    }
    document.getElementById("huntRslt").innerHTML = result;
});