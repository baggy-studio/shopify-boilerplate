let desktopNav = {
  openNav: function($toggle, nestType) {
    let $dropdown = $toggle.siblings('div.nav--' + nestType)
    $dropdown.toggleClass('hidden')
  },
  init: function($toggle) {
    $toggle.on('click', function(event) {
      let nestType = $toggle.attr('data-nest')
      event.preventDefault()
      desktopNav.openNav($toggle, nestType)
    })
  }
}

$(document).ready(function() {
  desktopNav.init($('a.js-dropdown-link'))
})