var completeDate = new Date(),
    currentMonth = completeDate.getMonth() + 1,
    currentYear = completeDate.getFullYear(),
    currentDate = completeDate.getDate(),
    inputBtn = $('#calc-input-btn'),
    inputField = $('#calc-input');

completeDate + 10;

console.log(currentDate);

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
        $('.max-usage').text('Inkl. heute dürftest du max. ' + maxUsage.toFixed(2) + 'GB von ' + data + 'GB verbraucht haben.');
        $('.progress-bar').css('width', dividedPerc).text(dividedPerc);
    }
}

var telekom = "http://pass.telekom.de";

// $.ajax({
//     url:    telekom,
//     // type:   'POST',
//     type:   'GET',
//     data:   $(this).serialize(),
//     success: function(response){
//         // $(selectOutput).html(response);
//         // $form.find("input").val("");
//         // console.log(response);
//         console.log(response);
//     }
// });

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
