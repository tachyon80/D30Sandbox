//Methods of Torture and Execution page 33
let methodArray = ["brank","brazen bull","breaking wheel","burning at the stake","cat’s paw","chair","coffin","copper boot","crocodile shears","crocodile tube","exposure","flagellation","flaying","foot torture","garrotte","head crusher","heretic's fork","iron maiden","judas cradle","knee splitter","lead sprinkler","pendulum","picquet","pillory","rack","rats","saw","street sweeper's daughter","thumbscrews","water"];
let descArray = ["metal cage-like mask; victim's head is caged and the brank is chained for public display","hollow bronze bull w/ 'door'; condemned locked inside and fire lit below; 'roasting' inhabitants; screams inside sound like mad ox","large wooden-wheel with spokes; victim's limbs tied to spokes, wheel revolved slowly, victim hit through spokes with iron hammer","if fire is large enough, death occurs first by asphyxia rather than heat damage from flames; small fires prolong death","victim tied up (usually to plank/board), metal claws used to scrape skin","chair with straps and spikes covering back, arm-rests, seat, leg-rests and foot-rests","cage-like coffin; very painful to larger/overweight characters; usually accompanied by public display","victim's feet placed inside copper boot &mdash; ","scissor-like clamp with crocodile-like head/teeth; usually used to mutilate fingers; exclusive punishment for regicide (killing monarch)","tube just big enough for victim's entrance, with crocodile-like spikes on interior; usually heated by fire; face and feet exposed for additional torture methods","stocks/ropes in town","cat o' tails","victim 'skinned' alive","toe wedging","victim tied to instrument (seat-like device), neck forced inside iron collar, neck slowly crushed","chin placed over bottom bar, head placed under upper cap, screw turned pressing bar against cap","two forks set against each other, one up to chin, one down to chest; makes speech and neck movement nearly impossible","coffin with spikes on every interior wall","victim seated on a triangular-shaped seat and slowly impaled","vice with opposing metal spikes; used to render knees permanently useless; often used on other body parts (elbows, arms, lower legs)","appears as holy water sprinkler; molten metals poured into butt of handle, then 'rain' over victim from other end","vertical wooden frame; victim's wrists tied behind back, handle turned, roped slowly elevated, shoulders dislocated","stake placed on ground, victim's thumb (or hand) tied above head; to relieve pressure of near dislocation, victim places weight on spike; used extensively by military","wooden/metal framework on post with holes for securing head and hands; often used as post for flagellation","victim placed tied to rack, ropes tied to limbs, then handles turned to pull limbs; limbs torn apart, dislocate with loud crack","victim constrained and tied to ground (or horizontal surface); rat placed on stomach, covered by heated metal container; rat seeks way out","victim tied up in inverted position (blood diverted to brain, loss of blood slowed); victim slowly cut in half","metal clamp placed around victim's crouched body; tightened or loosened to fit severity of crime; may last for weeks or months","victim's fingers placed inside instrument, slowly crushed; often used in combination with other torture methods","stuff"];
$("#tortureRoll").click(function () {
    let roll = rollDie(0,29);
    let roll2 = rollDie(1,3);
    let descrip = descArray[roll];
    if (roll === 7) {
        if (roll2 < 2) {
            descrip += "boiling water poured in";
        } else if (roll2 > 2) {
            descrip += "boot beaten";
        } else {
            descrip += "molten metal poured in";
        }
    } else if (roll === 10) {
        if (roll2 < 2) {
            descrip = "buried up to neck";
        } else if (roll2 > 2) {
            descrip = "stocks/ropes in unprotected area";
        }
    } else if (roll === 11) {
        if (roll2 < 2) {
            descrip = "cane/rod";
        } else if (roll2 > 2) {
            descrip = "single-tail whip";
        }
    } else if (roll === 13) {
        if (roll2 < 2) {
            descrip = "denailing";
        } else if (roll2 > 2) {
            descrip = "roasting";
        }
    } else if (roll === 29) {
        let roll3 = rollDie(1,5);
        switch (roll3) {
            case 1:
                descrip = "dunking";
                break;
            case 2:
                descrip = "drops of water";
                break;
            case 3:
                descrip = "cauldron";
                break;
            case 4:
                descrip = "freezing with water";
                break;
            case 5:
                descrip = "force drinking";
        }
    }
    document.getElementById("methodRslt").innerHTML = methodArray[roll];
    document.getElementById("descripRslt").innerHTML = descrip;
});