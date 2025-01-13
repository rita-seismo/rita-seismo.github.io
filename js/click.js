function modal(
    openModalSelector,
    modalWrapperSelector,
    modalContentSelector,
    closeModal = false
) {
    // Select elements
    const openModalBtn = document.querySelector(openModalSelector);
    const modalWrapperElement = document.querySelector(modalWrapperSelector);
    const modalContentElement = document.querySelector(modalContentSelector);

    // Add classes to style modal elements
    openModalBtn.classList.add('cls-1a');
    modalWrapperElement.classList.add('modal-wrapper');
    modalContentElement.classList.add('modal-content');

    // Open modal on click
    openModalBtn.addEventListener("click", () => {
        modalWrapperElement.style.display = "flex"; // Flexbox for centering

        // Reset scroll position of image container (if it exists)
        const imageContainer = modalWrapperElement.querySelector(".image-container");
        if (imageContainer) {
            imageContainer.scrollLeft = 0; // Reset scroll position to the start
        }
    });

    // Add close button dynamically if closeModal is true, but only once
    if (closeModal) {
        // Check if the close button already exists
        if (!modalContentElement.querySelector(".close-modal")) {
            const closeModalBtn = document.createElement("span");
            closeModalBtn.classList.add("close-modal");
            closeModalBtn.innerHTML = "&times;";
            modalContentElement.appendChild(closeModalBtn);

            // Add the event listener for closing the modal
            closeModalBtn.addEventListener("click", () => {
                modalWrapperElement.style.display = "none";
            });
        }
    }

    // Close modal when clicking outside the content
    modalWrapperElement.addEventListener("click", (event) => {
        if (event.target === modalWrapperElement) {
            modalWrapperElement.style.display = "none";
        }
    });
}
