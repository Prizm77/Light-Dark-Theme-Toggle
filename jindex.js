function setTheme() {
  const root = document.documentElement;
  const newTheme = root.classList.contains('dark') ? 'light' : 'dark';
  root.classList.remove('dark', 'light');
  root.classList.add(newTheme);
  document.querySelector('.theme-name').textContent = newTheme;
}

//Set initial theme
document.documentElement.classList.add('light');

document.querySelector('.theme-toggle').addEventListener('click', setTheme);