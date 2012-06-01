describe("fnEnumColumn", function() {

    it('adds a function to dataTable API', function () {
        dTable.fnEnumColumn();
        expect(typeof dTable.fnEnumColumn).toBe('function');
    });


    it('adds enumeration to the first column by default', function() {
        dTable.fnEnumColumn();
        var cell = $table.find('tbody tr:nth-child(2) td:nth-child(1)');

        expect(cell.text()).toBe('2');
    });


    it('adds enumeration to any other column', function () {
        dTable.fnEnumColumn({columnNumber: 3});

        var cell = $table.find('tbody tr:nth-child(4) td:nth-child(3)');

        expect(cell.text()).toBe('4');
    });


    it('renders numbers according to format passed as string (format: "ID: %d.")', function () {
        dTable.fnEnumColumn({format: "ID: %d."});

        var cell = $table.find('tbody tr:nth-child(2) td:nth-child(1)');

        expect(cell.text()).toBe('ID: 2.');
    });


    it('renders numbers using a function passed as format parameter (format: function(){...})', function () {
        dTable.fnEnumColumn({
            format: function(rowNum, rowData) {
                return 'Row ' + rowNum;
            }
        });

        var cell = $table.find('tbody tr:nth-child(2) td:nth-child(1)');

        expect(cell.text()).toBe('Row 2');
    });

});