var completeDate = new Date(),
    currentMonth = completeDate.getMonth() + 1,
    currentYear = completeDate.getFullYear(),
    currentDate = completeDate.getDate(),
    inputBtn = document.querySelector('#calc-input-btn'),
    inputField = document.querySelector('#calc-input');

var daysInMonth, maxUsage, data, divided, dividedPerc, dataSelectVal;

function maxDataUse(month, year, data) {
    daysInMonth = new Date(year, month, 0).getDate();
    maxUsage = data / daysInMonth * currentDate;
}

function showDataText () {
    data = parseInt(inputField.value);
    maxDataUse(currentMonth, currentYear, data);
    divided = maxUsage / data * 100;
    dividedPerc = divided.toFixed(2) + '%';
    dataSelectVal = document.querySelector('#data-size').value;
    if (maxUsage && data != '') {
        var progressBar = document.querySelector('.progress-bar');
        document.querySelector('.max-usage').innerHTML = 
        'Inklusive heute dürftest du maximal ' + maxUsage.toFixed(2) + ' ' + dataSelectVal + ' von ' + data + ' ' + dataSelectVal + ' verbraucht haben.';
        progressBar.style.width = dividedPerc;
        progressBar.innerHTML = dividedPerc;
        document.cookie = "userData=" + parseInt(inputField.value); + "; path=/";
    }
}

document.addEventListener('DOMContentLoaded', function() {
    if (document.cookie) {
        inputField.value = document.cookie.split('=')[1];
    }
    inputBtn.addEventListener('click', function () {
        showDataText();
    });
    document.querySelector('body').addEventListener('keyup', function(e) {
        var code = e.which;
        if(code==13) {
            showDataText();
        };
    });
});