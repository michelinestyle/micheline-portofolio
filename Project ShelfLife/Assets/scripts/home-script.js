document.addEventListener("DOMContentLoaded", () => {
    const readButton = document.querySelectorAll(".read");
    const viewButton = document.querySelectorAll(".view");

    readButton.forEach(button => {
        button.addEventListener("click", () => {
            alert("Book added to reading list!")
        })
    })

    viewButton.forEach(button => {
        button.addEventListener("click", () => {
            const check = button.getAttribute("data-category");
            if(check === "readable") {
                return
            } else {
                alert("Book can not be accessed yet")
            }
        });
    });
})