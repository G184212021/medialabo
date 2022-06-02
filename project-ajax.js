let searchb = document.querySelector('button#sch');
searchb.addEventListener('click',sendRequest);

function sendRequest() {

  let count = 0;

  if(count > 0){
    db.remove();
  }

  let e = document.querySelector('input[name="key"]');
  let key = e.value;

  let e2 = document.querySelector('input[name="key2"]');
  let key2 = e2.value;

  let url = 'https://www.nishita-lab.org/web-contents/jsons/nhk/' + key + '-' + key2 + '-j.json';

  axios.get(url)
      .then(showResult)
      .catch(showError)
      .then(finish);

  count += 1;

}

//通信成功
function showResult(resp){

  let data = resp.data;

  if(typeof data === 'string') {
    data = JSON.parse(data);
  }

  console.log(data);

  console.log(data.list);

  let table = document.querySelector('table#tb');

  let tdb = document.createElement('table');

  tdb.id = 'db';

  table.insertAdjacentElement('afterend',tdb);

  let trdb = document.createElement('tr');
  let throws = document.createElement('th');

  tdb.insertAdjacentElement('beforeend',trdb);

  throws.textContent = '検索結果';

  trdb.insertAdjacentElement('beforeend',throws)
  throws.setAttribute('rowspan','60');
  throws.classList.add('v-align');
  throws.classList.add('bg-b');

  let datalist;
  if (data.list.g1) {
    datalist = data.list.g1;
  } else {
    datalist = data.list.e1;
  }
  

  for(let d of datalist){

    let tdtitle = document.createElement('td');
    let thtime = document.createElement('th');
    let tr = document.createElement('tr');
    let tr1 = document.createElement('tr');
    let count = 0;

    if(count === 0){
      trdb.insertAdjacentElement('afterend',tr);
      tr.id = 'db';
    }

    thtime.textContent = d.start_time;
    tdtitle.textContent = d.title;

    tr.insertAdjacentElement('beforeend',thtime);

    thtime.id = 'db';

    tr.insertAdjacentElement('afterend',tr1);

    tr1.id = 'db';

    tr1.insertAdjacentElement('beforeend',tdtitle);

    tdtitle.id = 'db';

    tr1.classList.add('tr');

  }
}

//通信失敗
function showError(err){
  console.log(err);
}

//通信終了
function finish(){
  console.log("検索終了");
}