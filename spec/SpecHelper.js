
// Global variable which always points to created datatable api.
var $table = null;
var dTable = null;

function initDataTable(options) {
    $table = $('<table class="styled" id="tbl"></table>');
    $table.appendTo($('.tbl_container'));

    dTable = $('#tbl').dataTable({
        "aaData": aDataSet,
        "aoColumns": [
            { "sTitle": "#" },
            { "sTitle": "Engine" },
            { "sTitle": "Browser" },
            { "sTitle": "Platform" },
            { "sTitle": "Version", "sClass": "center" },
            {
                "sTitle": "Grade",
                "sClass": "center"
            }
        ]
    });
}


function removeDataTable() {
    $('.tbl_container').html('');
    dTable = $table = null;
}

// ---------------------------------------------

beforeEach(function () {
    initDataTable();
});


afterEach(function () {
    removeDataTable();
});
