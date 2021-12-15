var data = {key: '5aed441b2678b3ea3ba634027fbecc85', q: 'https://riftdocs.netlify.app'}

fetch('https://api.linkpreview.net', {
  method: 'POST',
  mode: 'cors',
  body: JSON.stringify(data),
}).then(res => {
  if (res.status != 200) {
    console.log(res.status)
    throw new Error('something went wrong');
  }
  return res.json()
}).then(response => {
  console.log(response)
}).catch(error => {
  console.log(error)
})
