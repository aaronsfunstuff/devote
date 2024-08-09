document.addEventListener('DOMContentLoaded', () => {
    const typingTexts = document.querySelectorAll('.typing-text');

    typingTexts.forEach(el => {
        const text = el.dataset.text;
        let index = 0;
        const typingInterval = setInterval(() => {
            el.textContent += text[index];
            index++;
            if (index === text.length) {
                clearInterval(typingInterval);
            }
        }, 50);
    });
});

function toggleLike(button) {
    button.classList.toggle('liked');
}

function toggleComments(button) {
    const commentsSection = button.closest('.post').querySelector('.comments-section');
    commentsSection.classList.toggle('visible');
}

function toggleSave(button) {
    button.classList.toggle('saved');
}

function incrementShareCount(button) {
    const shareCountElement = button.closest('.post').querySelector('.share-count');
    const currentCount = parseInt(shareCountElement.textContent);
    shareCountElement.textContent = currentCount + 1;
}
