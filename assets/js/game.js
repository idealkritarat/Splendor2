let number_of_player;

do {
    number_of_player = parseInt(prompt("Please select the number of players (1-4):"), 10);

    if (isNaN(number_of_player) || number_of_player < 1 || number_of_player > 4) {
        alert("Invalid input! Please enter a number between 1 and 4.");
        number_of_player = null;
    }
} while (!number_of_player);

let player_turn = -1;

function update_turn(){
    update_players()
    player_turn = (player_turn+1)%number_of_player;
    update_players()
}