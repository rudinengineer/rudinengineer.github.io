const btnYes = document.querySelector('.btn-yes')
const btnNo = document.querySelector('.btn-no')
const btnHide = document.querySelector('.btn-hidden')

btnYes.addEventListener('click', function() {
  btnNo.style = 'top:inherite;left:inherite;'
  btnHide.setAttribute('hidden', 'hidden')
  const params = new URLSearchParams(window.location.href.substring(window.location.href.indexOf('?')))
  alert(params)
  alert(params.get('phone'))
  window.location.href = "https://api.whatsapp.com/send?phone=" + params.get('phone') + "&text=aku terima"
})

function randint(min, max) {
  const rand = min - 0.5 + Math.random() * (max - min + 1)
  return Math.round(rand)
}

btnNo.addEventListener('click', function() {
  const random = randint(150, 500)
  btnNo.style = 'position:absolute;top:'+random+'px;left:'+randint(100,250)+'px;'
  btnHide.removeAttribute('hidden')
})
