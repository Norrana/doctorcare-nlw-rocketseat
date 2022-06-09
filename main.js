window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()

  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2

  //1 PASSO:verificar se a seção passou da linha
  // quais dados vou precisar? Topo da secao e a altura:
  const sectionTop = section.offsetTop
  const sectionHeight = section.offsetHeight
  const sectionTopReachOrPassedTargetline = targetLine >= sectionTop

  //informacoes:
  console.log('O topo da secao chegou ou ultapassou da linha?', 
  sectionTopReachOrPassedTargetline)

  //2 PASSO:verificar se a base esta abaixo da linha
  //quais dados vou precisas?
  const sectionEndsAt = sectionTop + sectionHeight
  const sectionEndPassedTargetline = sectionEndsAt <= targetLine

  console.log('O fundo da secao passou da linha?', 
  sectionEndPassedTargetline)

  //limites da secao:
  const sectionBoundaries = 
  sectionTopReachOrPassedTargetline && !sectionEndPassedTargetline

  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')
  if (sectionBoundaries) { 
    menuElement.classList.add('active')
  }
}

function showNavOnScroll () {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
    } else {
    navigation.classList.remove('scroll')
    }
}

function showBackToTopButtonOnScroll () {
  if (scrollY > 550) {
    backToTopButton.classList.add('show')
    } else {
      backToTopButton.classList.remove('show')
    }
}

function openMenu () {
document.body.classList.add('menu-expanded')
}

function closeMenu () {
document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
}).reveal(`
#home, 
#home img, 
#home .stats, 
#services,
#services header,
#services .card,
#about,
#about header,
#about .content`)

