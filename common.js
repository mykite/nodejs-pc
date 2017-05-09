var agent = require('./agent');
agent.agents;
const agentSize = agent.agents.length;
function getRandomAgent() {
    return agent.agents[getRandomIndex()];
}

function getRandomIndex() {
    return Math.ceil(Math.random() * agentSize);
}
module.exports = {
    getRandomAgent: getRandomAgent
}