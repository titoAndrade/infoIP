

const OPTIONS = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'cdd0576328mshca2da8f3bb10054p1f6065jsn33ed47b38006',
    'X-RapidAPI-Host': 'ip-geolocation-and-threat-detection.p.rapidapi.com'
  }
};

const fetchIpInfo = ip => {
  return fetch(`https://ip-geolocation-and-threat-detection.p.rapidapi.com/${ip}`, OPTIONS)
    .then(res => res.json())
    .catch(err=> console.error(err))
}

const $form = document.querySelector('#form')
const $input = document.querySelector('#input')
const $submit = document.querySelector('#submit')
const $results = document.querySelector('#results')
const $res = document.querySelector('#res').hidden = true

$form.addEventListener('submit', async (event) => {
  event.preventDefault()
  const {value} = $input
  if (!value) return

  $submit.setAttribute('disabled', '')
  const ipInfo = await fetchIpInfo(value)

  if(ipInfo) {
    $results.innerHTML = JSON.stringify(ipInfo, null, 2)
  }

$res = document.querySelector('#res').hidden = false
$submit.removeAttribute('disabled', '')



})

