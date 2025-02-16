
const ProfaylForm = () => {
  return (
    <div className="mOm">
      <div className="block first">
        <div className="title">Добавить новый профайл</div>
        <div className="menu">
          <form action="/profayl/new/" method="POST" enctype="multipart/form-data">
            <label htmlFor="first_name">Ваше имя:</label>
            <input type="text" name="first_name" id="first_name" /><br />

            <label htmlFor="last_name">Ваша фамилия:</label>
            <input type="text" name="last_name" id="last_name" /><br />

            <label htmlFor="father_name">Ваше отчество:</label>
            <input type="text" name="father_name" id="father_name" /><br />

            <label htmlFor="birthday">Дата рождения:</label>
            <select name="birthday_day" id="birthday" style={{ maxWidth: '10%', marginRight: '5px' }}>
              {Array.from({ length: 31 }, (_, i) => (
                <option key={i + 1} value={(i + 1).toString().padStart(2, '0')}>
                  {(i + 1).toString().padStart(2, '0')}
                </option>
              ))}
            </select>

            <select name="birthday_month" style={{ maxWidth: '18%', marginRight: '5px' }}>
              {[
                'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
                'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
              ].map((month, index) => (
                <option key={index + 1} value={(index + 1).toString().padStart(2, '0')}>
                  {month}
                </option>
              ))}
            </select>

            <select name="birthday_year" style={{ maxWidth: '12%' }}>
              {Array.from({ length: 60 }, (_, i) => 1950 + i).map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>

            <label htmlFor="pasport">Серийный номер паспорта:</label>
            <input type="text" name="pasport" id="pasport" placeholder="AA123456789" /><br />

            <label htmlFor="pasportkim">Паспорт, выданный:</label>
            <input type="text" name="pasportkim" id="pasportkim" /><br />

            <label htmlFor="pasportsana">Дата выдачи паспорта:</label>
            <select name="pasportsana_day" id="pasportsana" style={{ maxWidth: '10%', marginRight: '5px' }}>
              {Array.from({ length: 31 }, (_, i) => (
                <option key={i + 1} value={(i + 1).toString().padStart(2, '0')}>
                  {(i + 1).toString().padStart(2, '0')}
                </option>
              ))}
            </select>

            <select name="pasportsana_month" style={{ maxWidth: '18%', marginRight: '5px' }}>
              {[
                'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
                'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
              ].map((month, index) => (
                <option key={index + 1} value={(index + 1).toString().padStart(2, '0')}>
                  {month}
                </option>
              ))}
            </select>

            <select name="pasportsana_year" style={{ maxWidth: '12%' }}>
              {Array.from({ length: 58 }, (_, i) => 1968 + i).map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>

            <label htmlFor="davlat">Страна вашего проживания:</label>
            <select name="davlat" id="davlat">
              <option value="UZ" selected>Узбекистан</option>
            </select><br />

            <label htmlFor="viloyat">Ваша область проживания:</label>
            <select name="viloyat" id="viloyat">
              {[
                'Андижанская область', 'Бухарская область', 'Ферганская область',
                'Джизакская область', 'Хорезмская область', 'Наманганская область',
                'Навоийская область', 'Кашкадарьинская область', 'Республика Каракалпакстан',
                'Самаркандская область', 'Сырдарьинская область', 'Сурхандарьинская область',
                'Ташкентская область', 'город Ташкент'
              ].map((region, index) => (
                <option key={index} value={region}>
                  {region}
                </option>
              ))}
            </select><br />

            <label htmlFor="tuman">Ваш район проживания:</label>
            <input type="text" name="tuman" id="tuman" /><br />

            <label htmlFor="manzil">Ваше место жительства:</label>
            <input type="text" name="manzil" id="manzil" /><br />

            <label htmlFor="telefon">Ваш номер телефона:</label>
            <input type="text" name="telefon" id="telefon" pattern="+998[1-9]{2}-[0-9]{4}" placeholder="998931234567" /><br />

            <label htmlFor="email">Ваш адрес электронной почты:</label>
            <input type="email" name="email" id="email" /><br />

            <label htmlFor="passport_image_1">Фото с паспортом:</label>
            <img src="//Www.myxvest.ru/image/passport_example/selfi.jpg" alt="" /><br />
            <input type="file" name="passport_image_1" id="passport_image_1" /><br />
            <br />

            <label htmlFor="passport_image_2">Копия основной части паспорта:</label>
            <img src="//Www.myxvest.ru/image/passport_example/asos.jpg" alt="" /><br />
            <input type="file" name="passport_image_2" id="passport_image_2" /><br />
            <br />

            <label htmlFor="passport_image_3">Копия жилой части паспорта:</label>
            <img src="//Www.myxvest.ru/image/passport_example/turar.jpg" width="270" alt="" /><br />
            <input type="file" name="passport_image_3" id="turar" /><br />
            <br />

            <input className="btn btn-default" type="submit" name="create" value="Сохранить" />
            <input type="hidden" name="SID" value="cbbb328644d98a56e2d6eb916532df4f" />
          </form>
        </div>
        <div className="menu">
          <a href="javascript:window.history.go(-2)">« Назад</a>
        </div>
      </div>
      <div className="menu">
        <a href="/">
          <img src="https://www.myxvest.ru/style/wap/style/image/png/up.png" alt="На главную" /> На главную
        </a>
      </div>
    </div>
  );
};

export default ProfaylForm;