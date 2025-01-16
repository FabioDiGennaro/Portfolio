document.addEventListener('DOMContentLoaded', () => {
    const socialBubbles = document.querySelectorAll('.SocialBubble');
    
    socialBubbles.forEach(bubble => {
        bubble.addEventListener('mouseover', () => {
            bubble.style.transform = 'scale(1.4)';
        });
        bubble.addEventListener('mouseout', () => {
            bubble.style.transform = 'scale(1)';
        });
    });
});