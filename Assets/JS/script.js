$(document).ready(function () {
    function formatHour(hour) {
      return dayjs().hour(hour).format("h A");
    }

    $("#currentDay").text(dayjs().format("dddd, MMMM D"));
});
