About
=====

fnEnumColumn is a dataTables plugin that displays row numbers 
(or calculated values) in any column. 

Usage
-----

```js
    
    // First, initialize your dataTable
    var dTable = $('#table').dataTable(...bla-bla-bla...);

    // Display row numbers in the first column
    dTable.fnEnumColumn();
    
    // Display enumeration in the second column
    dTable.fnEnumColumn({columnNumber: 2});
    
    // Customize enumeration value
    dTable.fnEnumColumn({format: 'Row %d.'});
    
    // Format also may be specified as a callback function. In this case 
    // you can return any value based on your cell data or row number:
    dTable.fnEnumColumn({
        columnNumber: 5,
        format: function(rowNum, aData) { 
            return aData.price * aData.quantity;
        }
    });
```

You can see the demo in examples.html.


Plugin options
--------------

`columnNumber`
*Optional. Default: `1`.*
Number of a column that will contain rows enumeration.

`format`
*Optional. Default: `null`.*
A string that specifies row number format. Specify row number using %d 
within format string.
**or**
A callback function that returns value for enumeration cell. Row number 
and row data are passed to the function.