// server.js
const express = require('express');
const { Pool } = require('pg');

const app = express();
const port = 5050;

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
  
          .column {
              display: flex;
              flex-direction: column;
              flex-basis: calc(40% - 2rem);
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
              left: 50%;
              top: 190%;
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
          <div class="column left">
              <button id="button" onclick="updateScore('element_on_1_floor_team_1')">Элемент установлен на 1 этаж дома для первой
                  команды</button>
              <br>
              <br>
              <button id="button" onclick="updateScore('element_on_2_floor_team_1')">Элемент установлен на 2 этаж дома для первой
                  команды</button>
              <br>
              <br>
              <button id="button" onclick="updateScore('element_on_3_floor_team_1')">Элемент установлен на 3 этаж дома для первой
                  команды</button>
              <br>
              <br>
              <button id="button" onclick="updateScore('element_on_4_floor_team_1')">Элемент установлен на 4 этаж дома для первой
                  команды</button>
              <br>
              <br>
              <button id="button" onclick="updateScore('house_got_roof_team_1')">Дом/небоскреб получил крышу (НЕ РАБОТАЕТ)</button>
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
          </div>
  
          <div class="column right">
              <button id="button" onclick="updateScore('element_on_1_floor_team_2')">Элемент установлен на 1 этаж дома для второй
                  команды</button>
              <br>
              <br>
              <button id="button" onclick="updateScore('element_on_2_floor_team_2')">Элемент установлен на 2 этаж дома для второй
                  команды</button>
              <br>
              <br>
              <button id="button" onclick="updateScore('element_on_3_floor_team_2')">Элемент установлен на 3 этаж дома для второй
                  команды</button>
              <br>
              <br>
              <button id="button" onclick="updateScore('element_on_4_floor_team_2')">Элемент установлен на 4 этаж дома для второй
                  команды</button>
              <br>
              <br>
  
              <button id="button" onclick="updateScore('house_got_roof_team_2')">Дом/небоскреб получил крышу (НЕ РАБОТАЕТ)</button>
              <br>
              <br>
  
              <button id="button" onclick="updateScore('element_on_skyscraper_team_2')">Элемент установлен на любой из этажей
                  небоскреба
                  для
                  второй команды</button>
              <br>
              <br>
  
              <button id="button" onclick="updateScore('parking_on_warehouse_team_2')">Парковка на складе вторая команда</button>
              <br>
              <br>
  
              <button id="button" onclick="updateScore('parking_anywhere_team_2')">Парковка на любой из улиц вторая команда</button>
              <br>
              <br>
  
  
  
              <!-- ШТРАФЫ-->
  
              <button id="button" onclick="updateScore('moving_2_or_more_obs_team_2')">Движение двух и более элементов
                  одновременно у второй команды</button>
  
              <br>
              <br>
  
              <button id="button" onclick="updateScore('touching_another_robot_team_2')">Касание робота соперника у второй
                  команды</button>
  
              <br>
              <br>
  
              <button id="button" onclick="updateScore('bothering_another_robot_team_2')">Препятствие роботу соперника у второй
                  команды</button>
              <br>
              <br>
  
              <button id="button" onclick="updateScore('throwing_elements_at_another_robot_team_2')">Кидание элементов в робота
                  соперника у второй команды</button>
              <br>
              <br>
  
              <button id="button" onclick="updateScore('robot_out_of_field_team_2')">Проекция робота за полем у второй
                  команды</button>
              <br>
              <br>
  
              <button id="button" onclick="updateScore('moving_streets_team_2')">Движение кварталов у второй команды</button>
              <br>
              <br>
  
              <button id="button" onclick="updateScore('robot_broken_team_2')">Отвалилась деталь у второй команды</button>
              <br>
              <br>
  
              <button id="button" onclick="updateScore('opponents_house_broken_by_team_2')">Поломка дома соперника вторая
                  команда</button>
              <br>
              <br>
  
              <button id="button" onclick="updateScore('skyscraper_broken_by_team_2')">Поломка небоскреба вторая команда</button>
              <br>
              <br>
  
              <button id="button" onclick="updateScore('opponents_robot_broken_team_2')">Поломка робота соперника вторая
                  команда</button>
              <br>
              <br>
  
              <button id="button" onclick="updateScore('opponents_triangle_taken_by_team_2')">Захват конуса соперника вторая
                  команда</button>
          </div>
  
  
          <!-- <button id="button" onclick="updateScore('increase')">Увеличить счёт</button>
          <button id="button" onclick="updateScore('decrease')">Уменьшить счёт</button>
          <br>
          <br> -->
  
  
      </div>
      <div class="container" style="margin-top: -70px;">
          <div class="column">
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


app.get('/update-score', (req, res) => {
  const action = req.query.action;
  // const team = req.query.team;
  let updateValue = 0;
  let team;
  let msg;
  if (action === 'increase') {
    updateValue = 1;
  } else if (action === 'decrease') {
    updateValue = -1;
  }
  //ПЕРВАЯ КОМАНДА
  else if (action === 'element_on_1_floor_team_1') {
    updateValue = 2;
    team = 1;
    msg = 'element_on_1_floor_team_1';
  } else if (action === 'element_on_2_floor_team_1') {
    updateValue = 3;
    team = 1;
    msg = 'element_on_2_floor_team_1';
  } else if (action === 'element_on_3_floor_team_1') {
    updateValue = 4;
    team = 1;
    msg = 'element_on_3_floor_team_1'
  } else if (action === 'element_on_4_floor_team_1') {
    updateValue = 6;
    team = 1;
    msg = 'element_on_4_floor_team_1'
  } else if (action === 'house_got_roof_team_1') {
    updateValue = 0;
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
    updateValue = 0;
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
    msg = 'element_on_skyscraper_floor_1'
  } else if (action === 'element_on_skyscraper_floor_2') {
    updateValue = 7;
    team = 0;
    msg = 'element_on_skyscraper_floor_2'
  } else if (action === 'element_on_skyscraper_floor_3') {
    updateValue = 9;
    team = 0;
    msg = 'element_on_skyscraper_floor_3'
  } else if (action === 'element_on_skyscraper_floor_4') {
    updateValue = 11;
    team = 0;
    msg = 'element_on_skyscraper_floor_4'
  }
  if (team === 1) {
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

});

app.listen(port, '192.168.1.111',() => {
  console.log('listening on 192.168.1.111:5050')
  console.log(`Сервер запущен на ${port}-ом порту `);
});