const currentWork = document.getElementById('current-work');
const previousWork = document.getElementById('prev-work');

var infoData
console.log(previousWork)

function assignVar(data) {
    infoData = data
    console.log(infoData)
    assignStats()
}

fetch("data.json")
    .then(response => response.json())
    .then(data => assignVar(data))

function assignStats() {
    if(infoData !== null || infoData.Length !== 0) {
        var work = infoData.find(data => data.title === "Work");
        currentWork.textContent = `${work.timeframes.weekly.current}hrs`
        previousWork.textContent = `Last week - ${work.timeframes.weekly.previous}hrs`
    }
}

