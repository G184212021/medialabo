let searchb = document.querySelector('button#sch');
searchb.addEventListener('click',sendRequest);

let count = 0;

function sendRequest() {

  let e = document.querySelector('input[name="key"]');
  let key = e.value;

  let e2 = document.querySelector('input[name="key2"]');
  let key2 = e2.value;

  let url = 'https://www.nishita-lab.org/web-contents/jsons/nhk/' + key + '-' + key2 + '-j.json';

  count += 1;

  console.log(count);

  axios.get(url)
      .then(showResult)
      .catch(showError)
      .then(finish);

}

//通信成功
function showResult(resp){

  if(count > 1){
    db.remove();
    console.log('remove');
  }

  console.log(count);

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
    }

    thtime.textContent = d.start_time;
    tdtitle.textContent = d.title;

    tr.insertAdjacentElement('beforeend',thtime);

    tr.insertAdjacentElement('afterend',tr1);

    tr1.insertAdjacentElement('beforeend',tdtitle);

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