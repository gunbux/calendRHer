// @ts-ignore
console.log('Hi')

// @ts-ignore
const queryBody: { userID: string } = {
  userID: 'A1237895B'
}

// @ts-ignore
const fetchQuery = async () => {
  const response = await fetch('https://calenrher-backend.herokuapp.com' + '/user/query/?', {
    method: 'GET',
    mode: 'cors',
    body: JSON.stringify(queryBody),
  })

  const {data, errors} = await response.json()

  if (response.ok) {
    console.log(data)
    return data
  }

}

fetchQuery().then(r => console.log(r))
