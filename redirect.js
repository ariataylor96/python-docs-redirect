const path_parts = window.location.pathname.split('/');
path_parts[1] = '3';

window.location.replace(window.location.origin + path_parts.join('/'));
