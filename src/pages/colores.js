

document.addEventListener('DOMContentLoaded', () => {
    const title = document.getElementById('animated-title');
    const text = title.innerText;
    title.innerHTML = '';
  
    text.split('').forEach((char, index) => {
      const span = document.createElement('span');
      span.innerText = char;
      span.style.animationDelay = `${index * 1}s`;
      title.appendChild(span);
    });
  });

  