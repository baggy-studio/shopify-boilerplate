$(document).ready(function() {
  let navigation = {
    openLinks: function($toggle, nestType) {
      let 
        $dropdown = $toggle.siblings('div.nav--' + nestType),
        $arrow = $toggle.find('.js-arrow')
      ;
      $dropdown.toggleClass('hidden')
      $arrow.toggleClass('flip-h')
    },
    openMob: function($hamburger) {
      $hamburger.toggleClass('is-active')
      $('.navMenu--mobile').toggleClass('hidden')
    },
    init: function() {
      let 
        $toggle = $('a.js-dropdown-link'),
        $hamburger = $('.hamburger')
      ;
  
      $toggle.on('click', function(event) {
        let nestType = $toggle.attr('data-nest')
        event.preventDefault()
        navigation.openLinks($toggle, nestType)
      })
  
      $hamburger.on('click', function(event) {
        event.preventDefault()
        navigation.openMob($hamburger)
      })
    }
  }

  navigation.init()
})