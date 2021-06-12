var request = new XMLHttpRequest();
request.open('GET','https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json');
var requestdata = []
request.onload  = () =>{
 requestdata = JSON.parse(request.response);
  var prev = document.createElement('input');
      prev.setAttribute('id','prev');
      prev.setAttribute('type', 'button');
      prev.setAttribute('value', 'prev');
      prev.setAttribute('onClick','prev()');
      document.body.append(prev);
for(var i=1;i<=10;i++){
    var button = document.createElement('input');
      button.setAttribute('id',i);
      button.setAttribute('type', 'button');
      button.setAttribute('value', i);
      button.setAttribute('onClick','show(id)');
      document.body.append(button)
    }
    var next = document.createElement('input');
  next.setAttribute('id','next');
      next.setAttribute('type', 'button');
      next.setAttribute('value', 'next');
      next.setAttribute('onClick','next()');
      document.body.append(next);
  }
 var table = document.createElement('table');
 table.style.width="100%"
var gid = 1;
  function show(id){
      var id  = parseInt(id);
      gid = id;
      table.innerHTML="";
      for(var i=((id-1)*10);i<id*10;i++){
        var tr = document.createElement('tr');
        var td1  = document.createElement('td');
        var td2  = document.createElement('td');
        var td3  = document.createElement('td');
        td1.innerText = requestdata[i].id;
        td2.innerText = requestdata[i].name;
        td3.innerText = requestdata[i].email;

        tr.append(td1);
        tr.append(td2);
        tr.append(td3);
        table.append(tr);
      }
      document.body.append(table)
  }

  function prev(){
  if(gid>1){
    gid --;
      show(gid);
    }
  }

    function next(){
  if(gid<10){
    gid ++;
      show(gid);
    }
  }

request.send();
