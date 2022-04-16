var player_keys = Object.keys(players);
var round1_table_winner_keys = new Set();
var round1_score_winner_keys = new Set(player_keys);
var round1_sums = [-999999];

let key_idx = 0;

function pkey() { //return_player_name_byOrder
    key_idx += 1;
    return player_keys[key_idx - 1];
}

var mytable_r1_direct = "<table>";

for (let i_table = 0; i_table < 9; i_table++) {
    mytable_r1_direct += "<TH>Profil Pic</TH>";
    mytable_r1_direct += "<TH>Table " + (i_table + 1) + "</TH>";
    mytable_r1_direct += "<TH>Round1 Game1 Score </TH>";
    mytable_r1_direct += "<TH>Round1 Game2 Score </TH>";
    mytable_r1_direct += "<TH> Sum </TH>";
    mytable_r1_direct += "<TH> dev comment </TH>";
    mytable_r1_direct += "<TH> Table Qualifier </TH>";
    mytable_r1_direct += "<TH> Screenshot </TH>";

    let qualifier_highscore = -999999;
    let qualifier_name_key = "";
    for (let ii = 0; ii < 4; ii++) {
        let Splayer_key0 = pkey();
        let game1_2sum = (players[Splayer_key0].Score_round1game1 + players[Splayer_key0].Score_round1game2);
        if (game1_2sum > qualifier_highscore && game1_2sum != 0) { //didnt think of equal scenarios
            qualifier_highscore = game1_2sum;
            qualifier_name_key = Splayer_key0;
        }
    }
    qualifier_name_key != "" && round1_table_winner_keys.add(qualifier_name_key), round1_score_winner_keys.delete(qualifier_name_key);
    key_idx -= 4;

    for (let i_player = 0; i_player < 4; i_player++) {
        let Splayer_key = pkey();
        let game1_2sum = (players[Splayer_key].Score_round1game1 + players[Splayer_key].Score_round1game2);
        console.log(typeof game1_2sum);
        round1_sums.push(parseFloat(game1_2sum));

        if (i_player == 1) {

            if (qualifier_name_key == "") {
                mytable_r1_direct += " <td rowspan = \"4\">" + "Awaiting Result" + "</td>";
                mytable_r1_direct += " <td rowspan = \"4\">" + "Awaiting Result" + "</td>";
            } else {
                mytable_r1_direct += " <td rowspan = \"4\">" + players[qualifier_name_key].name.substring(1) + "</td>";
                mytable_r1_direct += " <td rowspan = \"4\">\
                <img class=\"screenshot\" src = \"screenshots/r1t" + (i_table + 1) + "g1.png\"><br>\
                <img class=\"screenshot\"  src = \"screenshots/r1t" + (i_table + 1) + "g2.png\"></td>";
            }
        }

        mytable_r1_direct += "<tr>" +
            // "<td>" + "?avatar " + players[Splayer_key].name + "</td>" +
            "<td>\
            <img class=\"avators\"  src = \"avators/" +
            players[Splayer_key].name + ".png\">\
            </td>";
        if (Splayer_key == qualifier_name_key && qualifier_highscore != 0) {
            mytable_r1_direct +=
                "<td><h2>" + players[Splayer_key].name + "</h2></td>" +
                " <td><h2>" + players[Splayer_key].Score_round1game1 + "</h2></td>" +
                " <td><h2>" + players[Splayer_key].Score_round1game2 + "</h2></td>" +
                " <td><h2>" + game1_2sum + "</h2></td>" +
                " <td><h2>" + players[Splayer_key].misc + "</h2></td>";
        } else {
            mytable_r1_direct +=
                "<td>" + players[Splayer_key].name + "</td>" +
                " <td>" + players[Splayer_key].Score_round1game1 + "</td>" +
                " <td>" + players[Splayer_key].Score_round1game2 + "</td>" +
                " <td>" + game1_2sum + "</td>" +
                " <td>" + players[Splayer_key].misc + "</td>";
        }
    }
    mytable_r1_direct += " </tr>";
}
mytable_r1_direct += "</table>";
document.getElementById("round1R").innerHTML = mytable_r1_direct;


if (length(round1_table_winner_keys) < 9) {
    var top_n = length(round1_table_winner_keys) + 7;
} else {
    var top_n = 16;
}
// console.log(round1_sums.sort(function(a, b) { return a > b ? 1 : -1 }).reverse());
round1_sums.sort(function(a, b) { return a > b ? 1 : -1 }).reverse();
// console.log(round1_sums.slice(0, 9));
while (round1_sums[top_n] == round1_sums[top_n + 1]) {
    top_n += 1
}
console.log(round1_sums.slice(0, top_n));
nineth = round1_sums.slice(0, top_n).slice(-1);
console.log(nineth);
// console.log(round1_score_winner_keys);


console.log(round1_table_winner_keys);
for (let k of round1_table_winner_keys) {
    console.log((players[k].Score_round1game1 + players[k].Score_round1game2));
}
var mytable_r1Q_direct = "<table><th colspan = \"9\">Table Winners (9)</th><tr>";
let idx = 1;
for (let rtwk of round1_table_winner_keys) {
    mytable_r1Q_direct += "<Td>";
    mytable_r1Q_direct += "<img class=\"avators\"  src = \"avators/" + players[rtwk].name + ".png\">";
    mytable_r1Q_direct += "<br><b>";
    mytable_r1Q_direct += players[rtwk].name.substring(1);;
    mytable_r1Q_direct += "</b><br>Table " + players[rtwk].round1_table;
    mytable_r1Q_direct += "<br><b>";
    mytable_r1Q_direct += (players[rtwk].Score_round1game1 + players[rtwk].Score_round1game2);
    mytable_r1Q_direct += "</b></Td>";
}
mytable_r1Q_direct += "</tr><th colspan = \"9\">Score Winners (7) (live update)</th><tr><td></td>";
for (let k of round1_score_winner_keys) {
    players[k].Score_round1game1 + players[k].Score_round1game2 < nineth && round1_score_winner_keys.delete(k);
}
console.log(round1_score_winner_keys);
for (let rswk of round1_score_winner_keys) {
    console.log((players[rswk].Score_round1game1 + players[rswk].Score_round1game2));
    mytable_r1Q_direct += "<Td>";
    mytable_r1Q_direct += "<img class=\"avators\"  src = \"avators/" + players[rswk].name + ".png\">";
    mytable_r1Q_direct += "<br><b>";
    mytable_r1Q_direct += players[rswk].name.substring(1);;
    mytable_r1Q_direct += "</b><br>Table " + players[rswk].round1_table;
    mytable_r1Q_direct += "<br><b>";
    mytable_r1Q_direct += (players[rswk].Score_round1game1 + players[rswk].Score_round1game2);
    mytable_r1Q_direct += "</b></Td>";
    idx += 1;
}
mytable_r1Q_direct += "<td></td></tr></table>";
document.getElementById("round2Q").innerHTML = mytable_r1Q_direct;



// // Script that gets you banned in Discord
// let avatars = "";
// for (let key in players) {
//     avatars += "?avatar " + (players[key].name) + "\n";
// }
// // console.log(avatars)