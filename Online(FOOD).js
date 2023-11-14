// For humburger icon
window.onload = function () {
    const menu_btn = document.querySelector('.icon');
    const mobile_menu = document.querySelector('.ham_bar');
    const opc = document.querySelector('.navbar');
    const bc_up = document.querySelector('.up');
    menu_btn.addEventListener('click', function () {
        menu_btn.classList.toggle('is-active');
        mobile_menu.classList.toggle('is-active');
        opc.classList.toggle('is-active');
        bc_up.classList.toggle('is-active'); 
    });

    document.querySelector('a[href="#about"]').addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector('#about_section').scrollIntoView({ behavior: 'smooth' });
    });
    document.querySelector('a[href="#chefs"]').addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector('#container3').scrollIntoView({ behavior: 'smooth' });
    });
    document.querySelector('a[href="#contact"]').addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector('#container4').scrollIntoView({ behavior: 'smooth' });
    });
}
 