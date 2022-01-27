// require the libraries for actions
const core = require('@actions/core');
const github = require('@actions/github');

// use an async function for the main tasks
async function main() {

    // get the GITHUB_TOKEN from input and use it to create an octokit client
    const GITHUB_TOKEN = core.getInput('GITHUB_TOKEN');
    const octokit = github.getOctokit(GITHUB_TOKEN);

    // get the context from the github package
    const { context } = require('@actions/github')

    // log the context
    console.log( JSON.stringify(context.payload, null, "    ") );

    // see if the payload has an action (push events don't have an action)
    if (!context.payload.action) {
        core.warning("This action should only be used with pull requests.");
        return;
    }

    // if this pull request is being opened for the first time,
    // the payload action will be 'opened'. otherwise it will be some
    // other pull_request action. Take a look at the Webhook payload
    // object for a pull request event here:
    // https://docs.github.com/en/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#pull_request
    if (context.payload.action === "opened") {

        // add a comment to the PR
        await octokit.rest.issues.createComment({
            owner: context.repo.owner,
            repo: context.repo.repo,
            issue_number: context.payload.number,
            body: 'Thank you for submitting a pull request! We will try to review this as soon as we can.'
        });

        // add a label to the PR
        await octokit.rest.issues.addLabels({
            owner: context.repo.owner,
            repo: context.repo.repo,
            issue_number: context.payload.number,
            labels: ['acknowledged']
        })
    } else {
        return;
    }
}

// call the function
main();
