const services = document.getElementById('services');

services.addEventListener('mouseover', openServices);

services.addEventListener('mouseout', hideServices);

const openServices = () => {
  document.getElementById('submenu').style.display = 'block';
};

const hideServices = () => {
  document.getElementById('submenu').style.display = 'none';
};
