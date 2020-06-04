function moneyFormat(arg) {
    arg = arg.toString();
    let str = arg.split('');
    str = str.reverse();
    let total = '';
    let result = '';
    for(let x in str) {
      total = total + str[x];
      if(x == (str.length - 1)) {break;}
      else if((x + 1) % 3 == 0) {
        total = total + '.';
      }
    }
    let temp = total.split('');
    temp = temp.reverse();
    for(let x in temp) {
      result = result + temp[x];
    }
    return result;
  }

  export default moneyFormat;