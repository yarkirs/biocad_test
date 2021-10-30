function takeData(){
  document.querySelector('#table tbody').innerHTML += dataBase.map(n => `
    <tr>
      <td class="table-string string-date" >${n.date}</td>
      <td class="table-string string-bufer">
        ${n.buffer.B1} <br> 
        ${n.buffer.B2} <br>
        ${n.buffer.B3} <br>
        ${n.buffer.B4} <br>
        ${n.buffer.B5}
      </td>
      <td class="table-string string-slope">${n.slope}</td>
      <td class="table-string string-offset">${n.offset}</td>
      <td class="table-string string-user">${n.user}</td>
    </tr>
  `).join('');
  
}

function testNorm () {
  
  let slope = document.getElementsByClassName('string-slope'),
      offer = document.getElementsByClassName('string-offset'),
      checkElement = '<i class="fas fa-check-circle check-good">',
      unCheckElement = '<i class="fas fa-times-circle check-bad"></i>';

    for(let i = 0; i < slope.length; i++){
        slope[i].textContent > 105 || slope[i].textContent < 95 ? 
                        slope[i].innerHTML = slope[i].textContent + unCheckElement :
                        slope[i].innerHTML = slope[i].textContent + checkElement;
   }
    for(let i = 0; i < offer.length; i++){
        Math.abs(offer[i].textContent) > 20 ? 
                        offer[i].innerHTML = offer[i].textContent + `<i class="fas fa-times-circle check-bad"></i>`:
                        offer[i].innerHTML = offer[i].textContent + `<i class="fas fa-check-circle check-good">`;
   }
   
}


// Получить данные из массива и отобразить таблицу
takeData();

// Проверить условия данных slope and offer
testNorm ();