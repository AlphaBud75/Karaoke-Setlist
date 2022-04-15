player_keys = Object.keys(players);

let key_idx = 0;

function pkey() { //return_player_name_byOrder
    key_idx += 1;
    return player_keys[key_idx - 1];
}

var mytable_r1_direct = "<table>";

for (let table = 0; table < 9; table++) {
    mytable_r1_direct += "<TH>Profil Pic</TH>";
    mytable_r1_direct += "<TH>Table " + (table + 1) + "</TH>";
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
    key_idx -= 4;

    for (let i = 0; i < 4; i++) {
        let Splayer_key = pkey();
        let game1_2sum = (players[Splayer_key].Score_round1game1 + players[Splayer_key].Score_round1game2);

        if (i == 1) {

            if (qualifier_name_key == "") {
                mytable_r1_direct += " <td rowspan = \"4\">" + "Awaiting Result" + "</td>";
                mytable_r1_direct += " <td rowspan = \"4\">" + "Awaiting Result" + "</td>";
            } else {
                mytable_r1_direct += " <td rowspan = \"4\">" + players[qualifier_name_key].name + "</td>";

                mytable_r1_direct += " <td rowspan = \"4\">\
                <img class=\"screenshot\" src = \"screenshots/r1t" + (table + 1) + "g1.png\"><br>\
                <img class=\"screenshot\"  src = \"screenshots/r1t" + (table + 1) + "g2.png\"></td>";
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
document.getElementById("round1").innerHTML = mytable_r1_direct;


let avatars = "";
for (let key in players) {
    avatars += "?avatar " + (players[key].name) + "\n";
}
// console.log(avatars)