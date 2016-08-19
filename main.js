var completeDate = new Date(),
    currentMonth = completeDate.getMonth() + 1,
    currentYear = completeDate.getFullYear(),
    currentDate = completeDate.getDate(),
    inputBtn = $('#calc-input-btn'),
    inputField = $('#calc-input');

var daysInMonth, maxUsage, data, divided, dividedPerc;

function maxDataUse(month, year, data) {
    daysInMonth = new Date(year, month, 0).getDate();
    maxUsage = data / daysInMonth * currentDate;
}

function showDataText () {
    data = parseInt(inputField.val());
    maxDataUse(currentMonth, currentYear, data);
    divided = maxUsage / data * 100;
    dividedPerc = divided.toFixed(2) + '%';
    if (maxUsage && data != '') {
        $('.max-usage').text('Inklusive heute dürftest du maximal ' + maxUsage.toFixed(2) + 'GB von ' + data + 'GB verbraucht haben.');
        $('.progress-bar').css('width', dividedPerc).text(dividedPerc);
    }
}

$(function () {
    inputBtn.on('click', function () {
        showDataText();
    });
    $('body').keyup( function(e) {
        var code = e.which;
        if(code==13) {
            showDataText();
        };
    });
});
