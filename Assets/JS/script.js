$(document).ready(function () {
    function formatHour(hour) {
      return dayjs().hour(hour).format("h A");
    }

    $("#currentDay").text(dayjs().format("dddd, MMMM D"));

    if (hour < currentHour) {
        textArea.addClass("past");
    } else if (hour === currentHour) {
        textArea.addClass("present");
    } else {
        textArea.addClass("future");
    }
    saveBtn.on("click", function () {
        const userInput = textArea.val().trim();
        const currentHour = formatHour(hour).replace(/\s+/g, "").toLowerCase(); 

        if (userInput !== "") {
            localStorage.setItem(currentHour, userInput);
          } else {
            localStorage.removeItem(currentHour);
        }
      });
    });
