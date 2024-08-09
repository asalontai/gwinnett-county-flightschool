const handleMainMenu = (router) => {
    router.push("/")
}

const handleStartFlight = (router) => {
    router.push("/startflight")
}

const handleAircraftReport = (router) => {
    router.push("/aircraftreport")
}

const handleSchedule = (router) => {
    router.push("/schedule")
}

const handleMechanicalProblem = (router) => {
    router.push("/mechanicalproblem")
}

export { handleMainMenu, handleStartFlight, handleAircraftReport, handleSchedule, handleMechanicalProblem }