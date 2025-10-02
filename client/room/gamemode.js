// Импортируем то, что нам надо
import * as Room from 'pixel_combats/room';
import * as Basic from 'pixel_combats/basic';
import * as Library from './library.js';

// Константы
const gm=Room.GameMode.Parameters, props=Room.Properties.GetContext();

// Импортируем команды
Library.Create_team();

// Создаем таблицу лидеров
