
var m = [ 
    [ 9, 0, 0, 0, 0 ],
    [ 0, 2, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 1, 0 ],
    [ 0, 0, 0, 0, 0 ]
];

var answer=0;

for (var row=0; row<m.length; row++)
{
    for (var col=0; col<m[row].length; col++)
    {
    	//console.log(m[row][col]);
    	
        if (row == 0 && col == 0) {
            answer+=m[row][col];
            
        }
        else if ((row)/(col) == 1) 
        {
            answer+=m[row][col];
        }
    }
}


console.log(answer);