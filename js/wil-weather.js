//weather generator pages 12 and 13
function weather(climate,season,month,terrain) {
    /*let temrtr = "650";
let precip = temrtr.slice(-1);
temrtr = temrtr.slice(0, -1);
console.log("temrtr is " + temrtr);
console.log("precip is " + precip);

store 396 values as (temp + 0-5) example: 650 for 65 degrees and 0 of 5
store in multi level array. First level is climate (5). 2nd level is terrain (7 but arctic has 5). 3rd level is month
after accessing a value, process it with the code block above
*/
    let result;
    document.getElementById("weathRslt").innerHTML = result;
}
$("input[name=climatePck]").change(function () {
    let cond1 = $("#cond1");
    let cond2 = $("#cond2");
    if (this.value === "arctic") {
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
$("#weathRoll").click(function () {
    let climate = $("input[name=climatePck]").val();
    let season = $("input[name=seasonPck]").val();
    let month = $("#monthOp").val();
    let terrain = $("input[name=terrainPck]").val();
    weather(climate,season,month,terrain);
});