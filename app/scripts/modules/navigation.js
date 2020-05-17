// TO DO: Add background on scroll

$(document).ready(function() {
  let navigation = {
    openLinks: function($toggle, nestType) {
      let 
        $dropdown = $toggle.siblings('.js-nav--' + nestType),
        $arrow = $toggle.find('.js-nav--arrow')
      ;
      $dropdown.toggleClass('hidden')
      $arrow.toggleClass('flip-h')
    },
    openMob: function($hamburger) {
      $hamburger.toggleClass('is-active')
      $('.js-nav--mobile').toggleClass('hidden')
    },
    init: function() {
      let 
        $toggle = $('.js-nav--toggle'),
        $hamburger = $('.js-nav--hamburger')
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