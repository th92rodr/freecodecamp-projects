function convertToRoman(num) {
    var first_digit = (num / 1) % 10;
    var second_digit = Math.floor((num / 10) % 10);
    var third_digit = Math.floor((num / 100) % 10);

    var list = [];
    list.push(first_digit);
    list.push(second_digit);
    list.push(third_digit);

    // console.log(first_digit);
    // console.log(second_digit);

    for(var i = 0; i < list.length; i++){
        console.log(list[i]);
        var number = list[i];

        if(number > 0 && number < 4) {
            var res;
            if(i == 0) {
                // console.log('I');
                res = 'I';
            } else if (i == 1) {
                // console.log('X');
                res = 'X';
            } else if (i == 2) {
                // console.log('C');
                res = 'C';
            }
            var final_result = '';
            for(var j = 0; j < number; j++) {
                // final_result = final_result.concat(res);
                final_result = final_result + res;
            }
            console.log(final_result);
        }

        /*
        switch(number) {
            case 1:
                if(i == 0) {
                    console.log('I');
                } else if (i == 1) {
                    console.log('X');
                } else if (i == 2) {
                    console.log('C');
                }
                break;
            case 2:
                console.log('II');
                break;
            case 3:
                if(i == 0) {
                    console.log('III'); 
                } else if (i == 1) {
                    console.log('XXX');
                } else if (i == 2) {
                    console.log('CCC');
                }
                break;
            case 4:
                IV
                break;
            case 5:
                V
                break;
            case 6:
                console.log('VI');
                break;
            case 7:
                VII
                break;
            case 8:
                break;
            case 9:
                break;  
        }
        */
    }

    
 
 return num;
}

convertToRoman(123);
