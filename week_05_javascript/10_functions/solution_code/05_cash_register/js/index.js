var total = 0;

$('#entry').submit(enter);

function enter() {
  var entry = $('#newEntry').val();
  var entry = parseFloat(entry);
  currency = currencyFormat(entry);
  
  $('#entries').append('<div>' + currency + '<div>');
  
  total += entry;
  
 $('#total').html (currencyFormat(total));
  
 $('#newEntry').val('');

 return false
}

function currencyFormat(number) {
  var currency = parseFloat(number);
  currency = currency.toFixed(2);
  currency = '$' + currency;
  return currency;
}