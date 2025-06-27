// Insert your own API KEY in below line.
const API_KEY = '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'
const submitButton = document.querySelector('#submit')
const outPutElement = document.querySelector('#output')
const inputElement = document.querySelector('input')
const historyElement = document.querySelector('.history')
const buttonElement = document.querySelector('button')

function changeInput(value) {
    const inputElement = document.querySelector('input')
    inputElement.value = value
}

async function getmessage() {
    console.log('clicked')
    const options =
    {
        method: 'POST',
        headers:
        {
            'Authorization': `Bearer ${API_KEY}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            {
                model: "gpt-3.5-turbo",
                messages: [{ role: "user", content: "Hello!" }],
                max_tokens: 100
            })
    }
    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', options)
        const data = await response.json()
        console.log(data)
        outPutElement.textContent = data.choices[0].message.content
        if (data.choices[0].message.content && inputElement.value) {
            const pElement = document.createElement('p')
            pElement.textContent = inputElement.value
            pElement.addEventListener('click', () => changeInput(pElement.textContent))
            historyElement.append(pElement)
        }
    }

    catch (error) {
        console.log(error)
    }
}

submitButton.addEventListener('click', getmessage)

function clearInput() {
    inputElement.value = ''
}

buttonElement.addEventListener('click', clearInput)
