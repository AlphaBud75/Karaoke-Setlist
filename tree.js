// player_keys = Array.from(players.keys());

// let tree_structure_key_counter = 0;

// function pkey() { //return_player_name_byOrder
//     tree_structure_key_counter += 1;
//     return player_keys[tree_structure_key_counter - 1];
// }

// function pkey2pname(key) { //return_player_name_byOrder
//     return players.get(key);
// }



var mytable_r1_direct = "<table>";

for (let i = 0; i < 9; i++) {
    mytable_r1_direct += "<TH>Profil Pic</TH>";
    mytable_r1_direct += "<TH>Table " + i + "</TH>";
    mytable_r1_direct += "<TH>Round1 Game1 Score </TH>";
    mytable_r1_direct += "<TH>Round1 Game2 Score </TH>";
    mytable_r1_direct += "<TH> Total </TH>";
    mytable_r1_direct += "<TH> Table Qualifier </TH>";
    mytable_r1_direct += "<TH> Screenshot </TH>";
    for (let i = 0; i < 4; i++) {
        // Splayer_key = pkey();
        if (i == 1) {
            mytable_r1_direct += " <td rowspan = \"4\">qualifier name</td>";
            mytable_r1_direct += " <td rowspan = \"4\">screenshot</td>";
        }
        mytable_r1_direct += "<tr>" +
            "<td>" + "pfp" + "</td>" +
            "<td>" + players["js"].name + "</td>" +
            " <td>" + players["js"].Score_round1game1 + "</td>" +
            " <td>" + players["js"].Score_round1game2 + "</td>" +
            " <td>" + (players["js"].Score_round1game1 + players["js"].Score_round1game2) + "</td>";
    }
    mytable_r1_direct += " </tr>";
}

mytable_r1_direct += "</table>";
document.getElementById("round1").innerHTML = mytable_r1_direct;