// Импортируем то, что надо
import * as Room from 'pixel_combats/room';
import * as Basic from 'pixel_combats/Basic';

// Функция создания команд
export function Create_teams(){
Room.Teams.Add("Blue", "<b><size=13><color=cyan>Синие</a></size></b>", new Basic.Color(0,0,1,0));
Room.Teams.Add("Red", "<b><size=13><color=#DC143C>Красные</a></size></b>", new Basic.Color(1,0,0,0));


};