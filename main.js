// server.js
const express = require('express');
const { Pool } = require('pg');

const app = express();
const port = 5050;
const ipv4adress = '192.168.1.79';

// Подключение к базе данных
const pool = new Pool({
  user: 'postgres',
  host: '193.164.149.85',
  database: 'texnodvizh_db',
  password: 'pswwdpost',
  port: 5432,
});
// app.use(express.static(__dirname + '/public/css'));
app.get('/', (req, res) => {
  // Вывод веб-страницы с кнопками 
  res.send(`
  <html>

  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <!-- <link rel="stylesheet" href="style.css"> -->
      <style>
          * {
              box-sizing: border-box;
          }
  
          body {
              font-family: Arial, sans-serif;
              margin: 0;
              padding: 0;
              background-color: rgb(39,39,39);
          }
  
          .container {
              display: flex;
              justify-content: center;
              margin: 0 auto;
              max-width: 80rem;
              padding: 2rem;
          }
          
          .reset_btn{
              background-color: #ad0000;
              border: none;
              color: white;
              padding: 0.5rem 1rem;
              text-align: center;
              text-decoration: none;
              display: inline-block;
              font-size: 1rem;
              margin: 0.5rem 0;
              cursor: pointer;
          }

          .column {
              display: flex;
              flex-direction: column;
              
              margin: 1rem;
          }
  
          .left {
              align-self: flex-start;
              order: 1;
          }
  
          .right {
              align-self: flex-start;
              order: 1;
          }
  
          .center {
              position: absolute;
              left: 45%;
              top: 0%;
              transform: translate(-50%);
              order: 2;
              /* margin-top: -50px; */
          }
  
          button {
              background-color: #2e5fe6;
              border: none;
              color: white;
              padding: 0.5rem 1rem;
              text-align: center;
              text-decoration: none;
              display: inline-block;
              font-size: 1rem;
              margin: 0.5rem 0;
              cursor: pointer;
              width:100%;
          }
  
          /* @media (max-width: 768px) {
      .container {
          flex-direction: column;
      }
  
      .column {
          flex-basis: 100%;
      }
  } */
      </style>
  </head>
  
  <body>
      <div class="container">
          <div class="column center">
              <h1 style="text-align: center; color: red;">ПАНЕЛЬ УПРАВЛЕНИЯ ОЧКОВ ПЕРВОЙ КОМАНДЫ(ЛЕВОЙ)</h1>
              <button id="button" onclick="updateScore('element_on_street_1_team_1')">Элемент установлен на улице Медиа для первой команды</button>
              <br>
              <br>
              <button id="button" onclick="updateScore('element_on_street_2_team_1')">Элемент установлен на улице Первых для первой команды</button>
              <br>
              <br>
              <button id="button" onclick="updateScore('element_on_street_3_team_1')">Элемент установлен на улице Истории для первой команды</button>
              <br>
              <br>
              <button id="button" onclick="updateScore('house_got_roof_team_1')">Дом/небоскреб получил крышу </button>
              <br>
              <br>
              <button id="button" onclick="updateScore('element_on_skyscraper_team_1')">Элемент установлен на любой из этажей
                  небоскреба
                  для
                  первой команды</button>
              <br>
              <br>
              <button id="button" onclick="updateScore('parking_on_warehouse_team_1')">Парковка на складе первая команда</button>
              <br>
              <br>
              <button id="button" onclick="updateScore('parking_anywhere_team_1')">Парковка на любой из улиц первая команда</button>
              <br>
              <br>
              <h1 style="text-align: center; color: red;">ШТРАФЫ</h1>
              <br>
              <br>
              <button id="button" onclick="updateScore('moving_2_or_more_obs_team_1')">Движение двух и более элементов
                  одновременно у первой команды</button>
              <br>
              <br>
              <button id="button" onclick="updateScore('touching_another_robot_team_1')">Касание робота соперника у первой
                  команды</button>
  
              <br>
              <br>
              <button id="button" onclick="updateScore('bothering_another_robot_team_1')">Препятствие роботу соперника у первой
                  команды</button>
              <br>
              <br>
              <button id="button" onclick="updateScore('throwing_elements_at_another_robot_team_1')">Кидание элементов в робота
                  соперника у первой команды</button>
              <br>
              <br>
              <button id="button" onclick="updateScore('robot_out_of_field_team_1')">Проекция робота за полем у первой
                  команды</button>
              <br>
              <br>
              <button id="button" onclick="updateScore('moving_streets_team_1')">Движение кварталов у первой команды</button>
              <br>
              <br>
              <button id="button" onclick="updateScore('robot_broken_team_1')">Отвалилась деталь у первой команды</button>
              <br>
              <br>
              <button id="button" onclick="updateScore('opponents_house_broken_by_team_1')">Поломка дома соперника первая
                  команда</button>
              <br>
              <br>
              <button id="button" onclick="updateScore('skyscraper_broken_by_team_1')">Поломка небоскреба первая команда</button>
              <br>
              <br>
              <button id="button" onclick="updateScore('opponents_robot_broken_team_1')">Поломка робота соперника первая
                  команда</button>
              <br>
              <br>
              <button id="button" onclick="updateScore('opponents_triangle_taken_by_team_1')">Захват конуса соперника первая
                  команда</button>
              <br>
              <br>
              <button id="button" onclick="updateScore('element_on_skyscraper_floor_1')">Элемент установлен на 1 этаж
                  небоскреба</button>
              <br>
              <br>
              <button id="button" onclick="updateScore('element_on_skyscraper_floor_2')">Элемент установлен на 2 этаж
                  небоскреба</button>
              <br>
              <br>
              <button id="button" onclick="updateScore('element_on_skyscraper_floor_3')">Элемент установлен на 3 этаж
                  небоскреба</button>
              <br>
              <br>
              <button id="button" onclick="updateScore('element_on_skyscraper_floor_4')">Элемент установлен на 4 этаж
                  небоскреба</button>
              <br>
              <br>
              <br>
              <br>
              <button id="button" class="reset_btn" onClick="updateScore('reset')">СБРОС ОЧКОВ</button>
              <br>
              <br>
          </div>
  
         
      <div class="container" style="margin-top: -70px;">
          <div class="column">
              
  
          </div>
      </div>
  </body>
  <script>
    const tbutton = document.querySelectorAll('button');

    tbutton.forEach((button) => {
      button.addEventListener('touchstart', () => {
            button.style.backgroundColor = '#ad0000';
        });

        button.addEventListener('touchend', () => {
            button.style.backgroundColor = '';
        });
    })

        
      function updateScore(action) {
          fetch('/update-score?action=' + action)
              .then(response => response.json())
              .then(data => console.log(data))
              .catch(error => console.error('Ошибка:', error));
      }
  </script>
  
  </html>
  `);
});

let counter1 = 0;
let counter2 = 0;
let counter3 = 0;
app.get('/update-score', (req, res) => {
  const action = req.query.action;
  // const team = req.query.team;
  let updateValue = 0;
  let team;
  let msg;
  let team1;
  let team2;
  let skyscraper;

  if (action === 'increase') {
    updateValue = 1;
  } else if (action === 'decrease') {
    updateValue = -1;
  }
  //ПЕРВАЯ КОМАНДА
  else if (action === 'element_on_street_1_team_1') {
    updateValue = 2 + counter1;
    // team = 1;
    msg = 'element_on_street_1_team_1';
    counter1 += 1;
    team1 = 1;
    console.log(counter1)
  } else if (action === 'element_on_street_2_team_1') {
    updateValue = 2 + counter2;
    // team = 1;
    msg = 'element_on_street_2_team_1';
    counter2 += 1;
    team1 = 2;
    console.log(counter2)
  } else if (action === 'element_on_street_3_team_1') {
    updateValue = 2 + counter3;
    // team = 1;
    msg = 'element_on_street_3_team_1';
    counter3 += 1;
    team1 = 3;
    console.log(counter3)
  } else if (action === 'element_on_4_floor_team_1') {
    updateValue = 6;
    team = 1;
    msg = 'element_on_4_floor_team_1'
  } else if (action === 'house_got_roof_team_1') {
    updateValue = 6;
    team = 1;
    msg = 'house_got_roof_team_1'
  } else if (action === 'element_on_skyscraper_team_1') {
    updateValue = 5;
    team = 1;
    msg = 'element_on_skyscraper_team_1'
  } else if (action === 'parking_on_warehouse_team_1') {
    updateValue = 3;
    team = 1;
    msg = 'parking_on_warehouse_team_1'
  } else if (action === 'parking_anywhere_team_1') {
    updateValue = 4;
    team = 1;
    msg = 'parking_anywhere_team_1'
  } else if (action === 'moving_2_or_more_obs_team_1') {
    updateValue = -10;
    team = 1;
    msg = 'moving_2_or_more_obs_team_1'
  } else if (action === 'touching_another_robot_team_1') {
    updateValue = -5;
    team = 1;
    msg = 'touching_another_robot_team_1'
  } else if (action === 'bothering_another_robot_team_1') {
    updateValue = -15;
    team = 1;
    msg = 'bothering_another_robot_team_1'
  } else if (action === 'throwing_elements_at_another_robot_team_1') {
    updateValue = -15;
    team = 1;
    msg = 'throwing_elements_at_another_robot_team_1'
  } else if (action === 'robot_out_of_field_team_1') {
    updateValue = -10;
    team = 1;
    msg = 'robot_out_of_field_team_1'
  } else if (action === 'moving_streets_team_1') {
    updateValue = -15;
    team = 1;
    msg = 'moving_streets_team_1'
  } else if (action === 'robot_broken_team_1') {
    updateValue = -10;
    team = 1;
    msg = 'robot_broken_team_1'
  } else if (action === 'opponents_house_broken_by_team_1') {
    updateValue = -15;
    team = 1;
    msg = 'opponents_house_broken_by_team_1'
  } else if (action === 'skyscraper_broken_by_team_1') {
    updateValue = -15;
    team = 1;
    msg = 'skyscraper_broken_by_team_1'
  } else if (action === 'opponents_robot_broken_team_1') {
    updateValue = -15;
    team = 1;
    msg = 'opponents_robot_broken_by_team_1'
  } else if (action === 'opponents_triangle_taken_by_team_1') {
    updateValue = -10;
    team = 1;
    msg = 'opponents_triangle_taken_by_team_1'
  }
  //ВТОРАЯ КОМАНДА
  else if (action === 'element_on_1_floor_team_2') {
    updateValue = 2;
    team = 2;
    msg = 'element_on_1_floor_team_2';
  } else if (action === 'element_on_2_floor_team_2') {
    updateValue = 3;
    team = 2;
    msg = 'element_on_2_floor_team_2';
  } else if (action === 'element_on_3_floor_team_2') {
    updateValue = 4;
    team = 2;
    msg = 'element_on_3_floor_team_2'
  } else if (action === 'element_on_4_floor_team_2') {
    updateValue = 6;
    team = 2;
    msg = 'element_on_4_floor_team_2'
  } else if (action === 'house_got_roof_team_2') {
    updateValue = 6;
    team = 2;
    msg = 'house_got_roof_team_2'
  } else if (action === 'element_on_skyscraper_team_2') {
    updateValue = 5;
    team = 2;
    msg = 'element_on_skyscraper_team_2'
  } else if (action === 'parking_on_warehouse_team_2') {
    updateValue = 3;
    team = 2;
    msg = 'parking_on_warehouse_team_2'
  } else if (action === 'parking_anywhere_team_2') {
    updateValue = 4;
    team = 2;
    msg = 'parking_anywhere_team_2'
  } else if (action === 'moving_2_or_more_obs_team_2') {
    updateValue = -10;
    team = 2;
    msg = 'moving_2_or_more_obs_team_2'
  } else if (action === 'touching_another_robot_team_2') {
    updateValue = -5;
    team = 2;
    msg = 'touching_another_robot_team_2'
  } else if (action === 'bothering_another_robot_team_2') {
    updateValue = -15;
    team = 2;
    msg = 'bothering_another_robot_team_2'
  } else if (action === 'throwing_elements_at_another_robot_team_2') {
    updateValue = -15;
    team = 2;
    msg = 'throwing_elements_at_another_robot_team_2'
  } else if (action === 'robot_out_of_field_team_2') {
    updateValue = -10;
    team = 2;
    msg = 'robot_out_of_field_team_2'
  } else if (action === 'moving_streets_team_2') {
    updateValue = -15;
    team = 2;
    msg = 'moving_streets_team_2'
  } else if (action === 'robot_broken_team_2') {
    updateValue = -10;
    team = 2;
    msg = 'robot_broken_team_2'
  } else if (action === 'opponents_house_broken_by_team_2') {
    updateValue = -15;
    team = 2;
    msg = 'opponents_house_broken_by_team_2'
  } else if (action === 'skyscraper_broken_by_team_2') {
    updateValue = -15;
    team = 2;
    msg = 'skyscraper_broken_by_team_2'
  } else if (action === 'opponents_robot_broken_team_2') {
    updateValue = -15;
    team = 2;
    msg = 'opponents_robot_broken_by_team_2'
  } else if (action === 'opponents_triangle_taken_by_team_2') {
    updateValue = -10;
    team = 2;
    msg = 'opponents_triangle_taken_by_team_2'
  }
  //ОБЩИЙ СЧЕТ
  else if (action === 'element_on_skyscraper_floor_1') {
    updateValue = 5;
    team = 0;
    msg = 'element_on_skyscraper_floor_1';
    skyscraper = 1;
  } else if (action === 'element_on_skyscraper_floor_2') {
    updateValue = 7;
    team = 0;
    skyscraper = 2;
    msg = 'element_on_skyscraper_floor_2'
  } else if (action === 'element_on_skyscraper_floor_3') {
    updateValue = 9;
    team = 0;
    skyscraper = 3;
    msg = 'element_on_skyscraper_floor_3'
  } else if (action === 'element_on_skyscraper_floor_4') {
    updateValue = 11;
    team = 0;
    skyscraper = 4
    msg = 'element_on_skyscraper_floor_4'
  } else if (action === 'reset') {
    team = 3;
    updateValue = 0;
    msg = 'reset completed successfully'
  }
  if (skyscraper === 1) {
    pool.query('UPDATE score SET team_score_street_main = 1, score_team_1 = score_team_1 + $1, score_team_2 = score_team_2 + $1', [updateValue], (error, results) => {
      if (error) {
        res.status(500).json({ success: false, message: 'Ошибка обновления счёта' });
        console.log("success: false, message: Ошибка обновления счёта  ", msg);
      } else {
        res.json({ success: true, message: 'Счёт успешно обновлён' });
        console.log("success: true, message: Счёт успешно обновлён  ", msg);
      }
    });
  } else if (skyscraper === 2) {
    pool.query('UPDATE score SET team_score_street_main = 2, score_team_1 = score_team_1 + $1, score_team_2 = score_team_2 + $1', [updateValue], (error, results) => {
      if (error) {
        res.status(500).json({ success: false, message: 'Ошибка обновления счёта' });
        console.log("success: false, message: Ошибка обновления счёта  ", msg);
      } else {
        res.json({ success: true, message: 'Счёт успешно обновлён' });
        console.log("success: true, message: Счёт успешно обновлён  ", msg);
      }
    });
  } else if (skyscraper === 3) {
    pool.query('UPDATE score SET team_score_street_main = 3, score_team_1 = score_team_1 + $1, score_team_2 = score_team_2 + $1', [updateValue], (error, results) => {
      if (error) {
        res.status(500).json({ success: false, message: 'Ошибка обновления счёта' });
        console.log("success: false, message: Ошибка обновления счёта  ", msg);
      } else {
        res.json({ success: true, message: 'Счёт успешно обновлён' });
        console.log("success: true, message: Счёт успешно обновлён  ", msg);
      }
    });
  } else if (skyscraper === 4) {
    pool.query('UPDATE score SET team_score_street_main = 4, score_team_1 = score_team_1 + $1, score_team_2 = score_team_2 + $1', [updateValue], (error, results) => {
      if (error) {
        res.status(500).json({ success: false, message: 'Ошибка обновления счёта' });
        console.log("success: false, message: Ошибка обновления счёта  ", msg);
      } else {
        res.json({ success: true, message: 'Счёт успешно обновлён' });
        console.log("success: true, message: Счёт успешно обновлён  ", msg);
      }
    });
  } else if (team === 3) {
    pool.query('UPDATE score SET score_team_1 = 0, score_team_2 = 0, team_1_score_street_1 = 0, team_1_score_street_2 = 0, team_1_score_street_3 = 0, team_2_score_street_1 = 0, team_2_score_street_2 = 0, team_2_score_street_3 = 0, team_score_street_main = 0', (error, results) => {
      if (error) {
        res.status(500).json({ success: false, message: 'Ошибка обновления счёта' });
        console.log("success: false, message: Ошибка обновления счёта  ", msg);
      } else {
        res.json({ success: true, message: 'Счёт успешно обновлён' });
        console.log("success: true, message: Счёт успешно обновлён  ", msg);
      }
    });
  } else if (team1 === 1) {
    pool.query('UPDATE score SET score_team_1 = score_team_1 + $1, team_1_score_street_1 = team_1_score_street_1 + 1', [updateValue], (error, results) => {
      if (error) {
        res.status(500).json({ success: false, message: 'Ошибка обновления счёта' });
        console.log("success: false, message: Ошибка обновления счёта  ", msg);
        console.log(counter);
      } else {
        res.json({ success: true, message: 'Счёт успешно обновлён' });
        console.log("success: true, message: Счёт успешно обновлён  ", msg);
      }
    });
  } else if (team1 === 2) {
    pool.query('UPDATE score SET score_team_1 = score_team_1 + $1, team_1_score_street_2 = team_1_score_street_2 + 1', [updateValue], (error, results) => {
      if (error) {
        res.status(500).json({ success: false, message: 'Ошибка обновления счёта' });
        console.log("success: false, message: Ошибка обновления счёта  ", msg);
        console.log(counter2);
      } else {
        res.json({ success: true, message: 'Счёт успешно обновлён' });
        console.log("success: true, message: Счёт успешно обновлён  ", msg);
      }
    });
  } else if (team1 === 3) {
    pool.query('UPDATE score SET score_team_1 = score_team_1 + $1, team_1_score_street_3 = team_1_score_street_3 + 1', [updateValue], (error, results) => {
      if (error) {
        res.status(500).json({ success: false, message: 'Ошибка обновления счёта' });
        console.log("success: false, message: Ошибка обновления счёта  ", msg);
        console.log(counter3);
      } else {
        res.json({ success: true, message: 'Счёт успешно обновлён' });
        console.log("success: true, message: Счёт успешно обновлён  ", msg);
      }
    });
  }
  else if (team === 1) {
    pool.query('UPDATE score SET score_team_1 = score_team_1 + $1', [updateValue], (error, results) => {
      if (error) {
        res.status(500).json({ success: false, message: 'Ошибка обновления счёта' });
        console.log("success: false, message: Ошибка обновления счёта  ", msg);
      } else {
        res.json({ success: true, message: 'Счёт успешно обновлён' });
        console.log("success: true, message: Счёт успешно обновлён  ", msg);
      }
    });
  } else if (team === 2) {
    pool.query('UPDATE score SET score_team_2 = score_team_2 + $1', [updateValue], (error, results) => {
      if (error) {
        res.status(500).json({ success: false, message: 'Ошибка обновления счёта' });
        console.log("success: false, message: Ошибка обновления счёта  ", msg);
      } else {
        res.json({ success: true, message: 'Счёт успешно обновлён' });
        console.log("success: true, message: Счёт успешно обновлён  ", msg);
      }
    });
  } else if (team === 0) {
    pool.query('UPDATE score SET score_team_1 = score_team_1 + $1, score_team_2 = score_team_2 + $1', [updateValue], (error, results) => {
      if (error) {
        res.status(500).json({ success: false, message: 'Ошибка обновления счёта' });
        console.log("success: false, message: Ошибка обновления счёта  ", msg);
      } else {
        res.json({ success: true, message: 'Счёт успешно обновлён' });
        console.log("success: true, message: Счёт успешно обновлён  ", msg);
      }
    });
  }
  // else if (team === 3) {
  //   pool.query('UPDATE score SET score_team_1 = 0, score_team_2 = 0', (error, results) => {
  //     if (error) {
  //       res.status(500).json({ success: false, message: 'Ошибка обновления счёта' });
  //       console.log("success: false, message: Ошибка обновления счёта  ", msg);
  //     } else {
  //       res.json({ success: true, message: 'Счёт успешно обновлён' });
  //       console.log("success: true, message: Счёт успешно обновлён  ", msg);
  //     }
  //   });
  // }

});

app.listen(port, ipv4adress, () => {
  console.log(`Сервер запущен на ${ipv4adress} порт ${port}`);
  console.log(`Сервер запущен на ${port}-ом порту `);
});