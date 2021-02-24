function showName() {
  const engishName = $('#englishName').html();
  const name = $('#name').html();
  //alert('Hello ' + engishName + ' ' + name);
  // String literal 
  alert(`Hello ${engishName} ${name}`);
}

function phoneCall(){
  const phone = document.getElementById('phone').innerHTML;
  if(confirm('Do you want to call this number?' + phone)){
    $('#phone').html(manipulatePhoneNo(phone));
   //document.getElementById('phone').innerHTML = manipulatePhoneNo(phone);
  }
}

function manipulatePhoneNo(phone) {
  return phone + ' called';
}

function hidePhoto(){
  if(!document.getElementById('pic').classList.contains('hide')){
    document.getElementById('pic').classList.add('hide');
    document.getElementById('hideTxt').innerHTML = 'Show Photo!';
  }else{
    document.getElementById('pic').classList.remove('hide');
    document.getElementById('hideTxt').innerHTML = 'Hide Photo!';
  }
}

function bouncePhoto(){
  if(!document.getElementById('pic').classList.contains('bounce')){
    document.getElementById('pic').classList.add('bounce');
    document.getElementById('bounceTxt').innerHTML = 'Stop Bounce!';
  }else{
    document.getElementById('pic').classList.remove('bounce');
    document.getElementById('bounceTxt').innerHTML = 'Bounce!';
  } 
}