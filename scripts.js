// scripts.js

// Показ модального вікна опису
function openDescriptionModal() {
  const modal = document.getElementById('descriptionModal');
  if (modal) modal.style.display = 'flex';
}

function closeDescriptionModal() {
  const modal = document.getElementById('descriptionModal');
  if (modal) modal.style.display = 'none';
}

// Показ модального вікна контактів
function openModal() {
    const modal = document.getElementById('contactModal');
    if (modal) modal.style.display = 'flex';
}

function closeModal() {
    const modal = document.getElementById('contactModal');
    if (modal) modal.style.display = 'none';
}

// Віджет телефону (можна додати майбутній функціонал)
function openPhoneWidget() {
    alert("Зателефонуйте нам: +380 123 456 789");
}

// Анімація при скролі
window.addEventListener('scroll', () => {
    document.querySelectorAll('.fade-in').forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
            el.classList.add('visible');
        }
    });
});

// Бургер-меню (можна доопрацювати для адаптивного меню)
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

if (burger && navLinks) {
    burger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        burger.classList.toggle('toggle');
    });
}

// Оновлення активної сторінки в навигації
function updateActiveNav() {
  const current = window.location.pathname.split("/").pop();
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute("href") === current) link.classList.add('active');
  });
}

window.addEventListener("DOMContentLoaded", updateActiveNav);