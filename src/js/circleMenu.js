(function(window) {
  'use strict';

  window.cssCircleMenu = function(el) {
    var $menu = document.querySelector(el);
    var $menuToggle = $menu ? $menu.querySelector('.js-menu-toggle') : undefined;
    var $menuMask = $menu ? $menu.querySelector('.js-menu-mask') : undefined;

    if (!$menu || !$menuToggle || !$menuMask) {
      throw new Error('Invalid elements, check the structure.');
    } else {
      init();
    }

    return {
      openMenu: openMenu,
      closeMenu: closeMenu
    };

    function init() {
      $menuToggle.addEventListener('click', function(e) {
        e.preventDefault();
        toggleMenu();
      });

      // $menuToggle.addEventListener('mouseout', function(e) {
      //   e.preventDefault();
      //   toggleMenu();
      // });
    }

    function toggleMenu() {
      $menuToggle.classList.contains('is-active')
        ? closeMenu()
        : openMenu();
    }

    function openMenu() {
      $menu.classList.add('is-active');
      $menuToggle.classList.add('is-active');
      $menuMask.classList.add('is-active');
    }

    function closeMenu() {
      $menu.classList.remove('is-active');
      $menuToggle.classList.remove('is-active');
      $menuMask.classList.remove('is-active');
    }
  };
})(window);


$(function() {
  var pull = $('#pull');
  menu = $('nav ul');
  menuHeight  = menu.height();
    $(pull).on('click', function(e) {
      e.preventDefault();
      menu.slideToggle();
    });
    $(window).resize(function(){
        var w = $(window).width();
        
            if(w < 620) {
                $('#idmenu').removeClass('center-menu') 
            }

            if(w > 620) {
                $('#idmenu').addClass('center-menu')
            }

            if(w > 320 && menu.is(':hidden')) {
          menu.removeAttr('style');
        }
    });
});