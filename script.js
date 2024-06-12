const currentWork = document.getElementById('current-work');
const previousWork = document.getElementById('prev-work');

const currentPlay = document.getElementById('current-play');
const previousPlay = document.getElementById('prev-play');

const currentStudy = document.getElementById('current-study');
const previousStudy = document.getElementById('prev-study');

const currentExercise = document.getElementById('current-exercise');
const previousExercise = document.getElementById('prev-exercise');

const currentSocial = document.getElementById('current-social');
const previousSocial = document.getElementById('prev-social');

const currentSelfCare = document.getElementById('current-selfcare');
const previousSelfCare = document.getElementById('prev-selfcare');

var infoData

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
        var play = infoData.find(data => data.title === "Play");
        var study = infoData.find(data => data.title === "Study");
        var exercise = infoData.find(data => data.title === "Exercise");
        var social = infoData.find(data => data.title === "Social");
        var selfcare = infoData.find(data => data.title === "Self Care");

        currentWork.textContent = `${work.timeframes.weekly.current}hrs`
        previousWork.textContent = `Last week - ${work.timeframes.weekly.previous}hrs`

        currentPlay.textContent = `${play.timeframes.weekly.current}hrs`
        previousPlay.textContent = `Last week - ${play.timeframes.weekly.previous}hrs`

        currentStudy.textContent = `${study.timeframes.weekly.current}hrs`
        previousStudy.textContent = `Last week - ${study.timeframes.weekly.previous}hrs`

        currentExercise.textContent = `${exercise.timeframes.weekly.current}hrs`
        previousExercise.textContent = `Last week - ${exercise.timeframes.weekly.previous}hrs`

        currentSocial.textContent = `${social.timeframes.weekly.current}hrs`
        previousSocial.textContent = `Last week - ${social.timeframes.weekly.previous}hrs`

        currentSelfCare.textContent = `${selfcare.timeframes.weekly.current}hrs`
        previousSelfCare.textContent = `Last week - ${selfcare.timeframes.weekly.previous}hrs`


    }
}

