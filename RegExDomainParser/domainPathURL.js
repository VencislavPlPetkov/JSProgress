var str = `http://google.com/alabala
    https://abv.bg/alabala1
        http://google.com/alabala2
            https://abv.com/alabala3
                https://google.com/alabala4
                    http://abv.com/alabala5`;
                        // abv.com/alabala3
                        // google.com/alabala4`;




    var reg = /\bhttps:\/\/((?:abv|google)[.]com)\/(\w+)\b/mg;
    str2 = str.match(reg);
    for (let i = 0, len = str2.length; i < len; i++) {
    var res = reg.exec(str2);
    console.log(res[1].replace(".com","") + ' - ' + res[2]);
	}