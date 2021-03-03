module.exports = function toReadable (number) {
  function units (num) {
    switch (num) {
      case '0' : return 'zero';
      break;
      case '1' : return 'one';
      break;
      case '2' : return 'two';
      break;
      case '3' : return 'three';
      break;
      case '4' : return 'four';
      break;
      case '5' : return 'five';
      break;
      case '6' : return 'six';
      break;
      case '7' : return 'seven';
      break;
      case '8' : return 'eight';
      break;
      case '9' : return 'nine';
      break;
    }


  }

  function dozens (num) {
    
      switch (num) {
      case '1' : return 'ten';
      break;
      case '2' : return 'twenty';
      break;
      case '3' : return 'thirty';
      break;
      case '4' : return 'forty';
      break;
      case '5' : return 'fifty';
      break;
      case '6' : return 'sixty';
      break;
      case '7' : return 'seventy';
      break;
      case '8' : return 'eighty';
      break;
      case '9' : return 'ninety';
      break;
    }



    

  }

  function tenTwenty(num) {
      switch (num) {
        case '0' : return 'ten';
        break;
        case '1' : return 'eleven';
        break;
        case '2' : return 'twelve';
        break;
        case '3' : return 'thirteen';
        break;
        case '4' : return 'fourteen';
        break;
        case '5' : return 'fifteen';
        break;
        case '6' : return 'sixteen';
        break;
        case '7' : return 'seventeen';
        break;
        case '8' : return 'eighteen';
        break;
        case '9' : return 'nineteen';
        break;
    }



  }
 var num = String(number);
 var arr = num.split('');
  
  if ( arr.length === 1 ) {
    return units(arr[0]);
  }

  if (arr.length === 2 ) {
    if ( arr[1] === '0') { return dozens(arr[0]); };
    if ( arr[0] === '1') { return tenTwenty(arr[1]); };
    return dozens(arr[0]) + ' ' + units(arr[1]);
  }

  if (arr.length === 3) {
    if (arr[1] === '0' ) {
       if (arr[2] === '0') {
         return units(arr[0]) + ' ' + 'hundred';
       } else {
        return units(arr[0]) + ' ' +'hundred' + ' ' + units(arr[2]);
       }
    }
    if (arr[1] === '1' ) return units(arr[0]) + ' ' + 'hundred'+ ' ' + tenTwenty(arr[2]);
    if (arr[2] === '0' ) return units(arr[0]) + ' ' + 'hundred'+ ' ' + dozens(arr[1]);
  return units(arr[0]) + ' ' + 'hundred'+ ' ' + dozens(arr[1]) + ' ' + units(arr[2]) ;
  }



}
