const elements = {
    "Work": {
        current: document.getElementById('current-work'),
        previous: document.getElementById('prev-work')
    },
    "Play": {
        current: document.getElementById('current-play'),
        previous: document.getElementById('prev-play')
    },
    "Study": {
        current: document.getElementById('current-study'),
        previous: document.getElementById('prev-study')
    },
    "Exercise": {
        current: document.getElementById('current-exercise'),
        previous: document.getElementById('prev-exercise')
    },
    "Social": {
        current: document.getElementById('current-social'),
        previous: document.getElementById('prev-social')
    },
    "Self Care": {
        current: document.getElementById('current-selfcare'),
        previous: document.getElementById('prev-selfcare')
    }
} 

const dailyBtn = document.getElementById('daily')
const weeklyBtn = document.getElementById('weekly')
const monthlyBtn = document.getElementById('monthly')

let openedTimeframe

let infoData

function assignVar(data) {
    infoData = data
    assignStats('daily')
    toggleButton(dailyBtn)
}

fetch("data.json")
    .then(response => response.json())
    .then(data => assignVar(data))

function assignStats(timeframe) {
    if(infoData !== null || infoData.Length !== 0) {
        for (const [title, element] of Object.entries(elements)) { //* sets the element values of each cards in the screen by using one by one based on the timeframe inputted
            let activityData = infoData.find(data => data.title === title)

            const displayHour = (n) => {
                if (n <= 1){
                   return `${n}hr`
                } else {
                    return `${n}hrs`
                }
            }
            element.current.textContent = displayHour(activityData.timeframes[timeframe].current)
            
            element.previous.textContent = `Last week - ${displayHour(activityData.timeframes[timeframe].previous)}`
        }
    }
}

dailyBtn.addEventListener('click', () => {
    assignStats('daily')
    toggleButton(dailyBtn)
})
weeklyBtn.addEventListener('click', () => {
    assignStats('weekly')
    toggleButton(weeklyBtn)
})
monthlyBtn.addEventListener('click', () => {
    assignStats('monthly')
    toggleButton(monthlyBtn)
})

function toggleButton(element) {
    var opened = document?.getElementById(openedTimeframe)
    if(opened)
    opened.style.color = 'hsl(235, 45%, 61%)'

    element.style.color = 'white'
    openedTimeframe = element.id

}