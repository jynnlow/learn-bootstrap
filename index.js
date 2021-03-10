function showName() {
  const engishName = $('#englishName').html();
  const name = $('#name').html();
  //alert('Hello ' + engishName + ' ' + name);
  // String literal 
  alert(`Hello ${engishName} ${name}`);
}

function phoneCall(){
  const phone = $('#phone').html();
  if(confirm('Do you want to call this number?' + phone)){
    $('#phone').html(manipulatePhoneNo(phone));
   //document.getElementById('phone').innerHTML = manipulatePhoneNo(phone);
  }
}

function manipulatePhoneNo(phone) {
  return phone + ' called';
}

function hidePhoto(){
  if(!$('#pic').hasClass('d-none')){
    $('#pic').addClass('d-none');
    $('#hideTxt').html('Show Photo!');
  }else{
    $('#pic').removeClass('d-none');
    $('#hideTxt').html('Hide Photo!') ;
  }
}

function bouncePhoto(){
  if(!$('#pic').hasClass('bounce')){
    $('#pic').addClass('bounce');
    $('#bounceTxt').html('Stop Bounce!');
  }else{
    $('#pic').removeClass('bounce');
    $('#bounceTxt').html('Bounce!');
  } 
}