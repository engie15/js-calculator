//Create required general var 's for calculator
//(e.g. var entries; var total; var temp)
var entries = [];
var total = 0;
var temp  = '';
("button").on('click', function () {
    var val = (this).text();
    if (!isNaN(val) || val === '.') {
        temp += val;
        ("#answer").val(temp.substring(0,10));
    } else if (val === 'AC') {
        entries = [];
        temp = '';
        total = 0;
        ("#answer").val('')
    } else if (val === 'CE'){
        temp = '';
        ("#answer").val('')
    } else if (val === 'X') {
        entries.push(temp);
        entries.push('*');
        temp = '';
    } else if (val === '/') {
        entries.push(temp);
        entries.push('/');
        temp = '';
    } else if (val === '=') {
        entries.push(temp);

        var nt = Number(entries[0]);
        for (var i = 1; i < entries.length; i++) {
            var nextNum = Number(entries[i+1])
            var symbol = entries[i];

        if (symbol === '+') { nt += nextNum; }
        else if (symbol === '-') { nt -= nexNum; }
        else if (symbol === '*') { nt *= nextNum; }
        else if (symbol === '/') { nt /= nextNum; }

        i++;
        }
    if (nt < 0) {
        nt = Math.abs(nt) + '-';
    }
    ("#answer").val(nt);
    entries = [];
    temp = '';
    } else {
        entries.push(temp);
        entries.push(val);
        temp = '';
    }
});

//Numbers add to temp

//Symbol other than equals, add temp to entries
//Add symbol and clear temp (AC Button)

//Change divide symbol
//Change multiply symbol

//Clear last entry (CE Button)

//Equals symbol to perform calculation

//Push number