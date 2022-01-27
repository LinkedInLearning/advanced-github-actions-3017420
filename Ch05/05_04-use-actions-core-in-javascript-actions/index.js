// require the libraries for actions
const core = require('@actions/core');
const github = require('@actions/github');

// use an async function for the main tasks
async function main() {

    // get the inputs
    const GITHUB_TOKEN = core.getInput('GITHUB_TOKEN');
    const input_1 = core.getInput('input_1');

    core.info("INFO: input_1 = " + input_1);
    core.notice("This is a notice");
    core.warning("This is a warning");
    core.error("This is an error");
}

// call the function
main();
