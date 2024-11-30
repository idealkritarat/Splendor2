var number_of_player = 2
let player_turn = -1;

function update_turn(){
    update_players()
    player_turn = (player_turn+1)%number_of_player;
    update_players()
}