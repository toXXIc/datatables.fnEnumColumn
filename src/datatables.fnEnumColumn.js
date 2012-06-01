/*
 * Inputs:      object:oSettings - dataTables settings object -
                automatically given
 *              oOptions - additional options to customize plugin behavior
 *
 * Usage:       $('#example').dataTable().fnEnumColumn(options);
 * Author:      Basil Gren
 * License:     GPL v2 or BSD 3 point style
 */
(function($){

$.fn.dataTableExt.oApi.fnEnumColumn = function (oSettings, oOptions){

    var defaults = {
        title: '#'
    };

    var options = $.extend(true, {}, defaults, oOptions);

    // Binding function onRowCallback to aoRowCallback are buggy - after each
    // sorting new enum column is added to the table.
    /*
    oSettings.oApi._fnCallbackReg(oSettings, 'aoRowCallback',
            function (nRow, aData, iDisplayIndex, iDisplayIndexFull) {
                $(nRow).prepend($('<td>' + (oSettings._iDisplayStart +
                                            iDisplayIndex + 1) + '</td>'));
            }, 'enumerate_callback');
    */


    function onRowCreated(nRow, aData, iDisplayIndex)
    {
        $(nRow).prepend($('<td>' + (oSettings._iDisplayStart +
                                    iDisplayIndex + 1) + '</td>'));
    }

    // Unfortunately, binding to aoRowCreatedCallback does not work too.
    oSettings.oApi._fnCallbackReg(oSettings, 'aoRowCreatedCallback',
                                  onRowCreated, 'user' );

    var $headerRow = $(oSettings.nTHead).find('tr');
    $headerRow.prepend($('<th>' + options.title + '</th>'));

    return this;
};

})(jQuery);

