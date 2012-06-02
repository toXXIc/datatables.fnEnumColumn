/*
 * Inputs:      object:oSettings - dataTables settings object - automatically given
 *              oOptions - additional options to customize plugin behavior
 *
 * Usage:       $('#example').dataTable().fnEnumColumn(options);
 * Author:      Basil Gren
 * License:     GPL v2 or BSD 3 point style
 * Version:     1.0.0 (03-Jun-2012)
 */
(function($) {


$.fn.dataTableExt.oApi.fnEnumColumn = function (oSettings, oOptions){

    var defaults = {
        columnNumber: 1,
        format: null
    };

    var options = $.extend(true, {}, defaults, oOptions);


    oSettings.oApi._fnCallbackReg(oSettings, 'aoRowCallback',
        function (nRow, aData, iDisplayIndex, iDisplayIndexFull) {
            var rowNum = oSettings._iDisplayStart + iDisplayIndex + 1;
            var $row = $(nRow).find('td:nth-child(' + options.columnNumber + ')');

            var value;
            if (options.format)
            {
                if (typeof options.format === "string")
                    value = options.format.replace('%d', rowNum);
                else if (typeof options.format === 'function')
                    value = options.format(rowNum, aData);
                else
                    value = rowNum.toString();
            }
            else
                value = rowNum.toString();

            $row.html(value);

        }, 'enumerate_callback');


    // Redraw the whole table without refiltering and resorting.
    oSettings.oInstance.fnDraw(false);

    return this;
};

})(jQuery);

