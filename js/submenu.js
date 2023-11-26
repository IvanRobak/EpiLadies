const services = document.getElementById('services');

const openServices = () => {
  document.getElementById('submenu').style.display = 'block';
};

const hideServices = () => {
  document.getElementById('submenu').style.display = 'none';
};
services.addEventListener('mouseover', openServices);

services.addEventListener('mouseout', hideServices);
