
const Links = {
     getConfig: 'inconsequentialTextConfig',
     getJobs: {count: 2},
     getQuestions: {question: 'well, this is a sample question, maybe2'},
     updateQuestionsIdentifiers: true
};


function getDataFromServices(data, identifiers) {
    console.log('getting data for: '+identifiers);
    return Links[identifiers];
}

function getConfigs() {
    const hardCodedConfigs = [
        {widgetType: 'myJobs', title:'you got a job', id: 1},
        {widgetType: 'myJobs', title:'you got a job', id: 2},
        {widgetType: 'myJobs', title:'you got a job', id: 3},
        {widgetType: 'myJobs', title:'you got a job', id: 4},
        {widgetType: 'myJobs', title:'you got a job', id: 5},
        {widgetType: 'jobQuestions', title:'asked questions', id: 5}
        ];
    return hardCodedConfigs;
}
// some sort of backend validation on the ID will be necessary
function updateConfig(identifiers, config) {
    console.log('updating config, new config:'+ config);
    return Links[identifiers]
}

export {
    getDataFromServices,
    getConfigs,
    updateConfig
};