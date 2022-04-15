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
    mytable_r1_direct += "<TH> Total </TH>";
    mytable_r1_direct += "<TH> Table Qualifier </TH>";
    mytable_r1_direct += "<TH> Screenshot </TH>";
    for (let i = 0; i < 4; i++) {
        Splayer_key = pkey();
        if (i == 1) {
            mytable_r1_direct += " <td rowspan = \"4\">qualifier name</td>";
            mytable_r1_direct += " <td rowspan = \"4\">\
            <img src = \"r1t" + (table + 1) + "g1.png\">\
            <img src = \"r1t" + (table + 1) + "g2.png\"></td>";
        }
        mytable_r1_direct += "<tr>" +
            "<td>" + "pfp" + "</td>" +
            "<td>" + players[Splayer_key].name + "</td>" +
            " <td>" + players[Splayer_key].Score_round1game1 + "</td>" +
            " <td>" + players[Splayer_key].Score_round1game2 + "</td>" +
            " <td>" + (players[Splayer_key].Score_round1game1 + players[Splayer_key].Score_round1game2) + "</td>";
    }
    mytable_r1_direct += " </tr>";
}

mytable_r1_direct += "</table>";
document.getElementById("round1").innerHTML = mytable_r1_direct;