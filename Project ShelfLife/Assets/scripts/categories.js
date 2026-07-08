document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".sortBook");
    const books = document.querySelectorAll(".bookContainer");
    let activeCategory = null;
    let text = document.getElementById("header-text")

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const category = button.getAttribute("data-category");
            if (activeCategory === category) {
                activeCategory = null;
                filterBooks(null);
                text.textContent = "Popular Books";
            } else {
                activeCategory = category;
                filterBooks(category);
                text.textContent = category === "fiksi" ? "Fictional Books" : "Non-Fictional Books";
            }
        });
    });

    function filterBooks(category) {
        if (!category) {
            books.forEach(book => book.style.display = "block");
        } else {
            books.forEach(book => {
                if (book.getAttribute("data-category") === category) {
                    book.style.display = "block";
                    console.log('filter done')
                } else {
                    book.style.display = "none";
                }
            });
        }
    }
});