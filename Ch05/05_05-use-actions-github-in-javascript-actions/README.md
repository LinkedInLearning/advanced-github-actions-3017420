# 05_05-use-actions-github-in-javascript-actions

## Resources
- [Webhook events and payloads](https://docs.github.com/en/developers/webhooks-and-events/webhooks/webhook-events-and-payloads)
- [Octokit documentation](https://octokit.github.io/rest.js)

## The exercise details
Use these files to test a JavaScript action that uses the @actions/gihtub pacakge.

The action can be triggered on pushes, pull requests, and workflow distpathes.
- If the workflow event is not a pull request, a warning is issued
- If the workflow event is a pull request being opened, the action adds a comment and a label to the pull request
- The action also prints the context that was used to trigger the event

## From the GitHub Console...
1. Create a new repo.
1. Select `Node` when prompted to add a `.gitignore` file or upload the ignore file in the next step.
1. Add the exercise files to the root of the new repo.  Be sure to add the file named `.gitignore`  but note that it may be hidden.
1. Edit the file `dist_index.js` and rename it to `dist/index.js`.  Essentially, you are replacing the `_` in the name with a `/`.  That will rename the file to `index.js` and also move it into a directory named `dist`.
1. **NOTE:** The previous step is key for the workflow to complete successfully.
1. Optionally, edit the file `package.json` and replace all occurences of `YOUR_GITHUB_USER_NAME` with your GitHub user name.
1. Edit the file `hello-universe.yml` and complete the following steps:
    - Replace all occurences of `YOUR_GITHUB_USER_NAME` with your GitHub user name.
    - Replace all occurences of `YOUR_GITHUB_REPO_NAME` with the name of the repo.
    - Rename the file to move it into the `.github/workflows` directory.
    - Commit the changes.
1. **NOTE:** The previous step is key for the workflow to complete successfully.
1. Once the workflow file is commited, the workflow should be triggered by a `push` event.
1. Confirm the `Hello Universe` workflow runs as expected and includes:
    - a `Warning` annotation saying the that action should only be used with pull requests
    - the context for a push event in the workflow log
1. Modify the `README.md` file and commit the change to a new branch.
1. Use the new branch to create a pull request.
1. Modify the `README.md` file again and commit the change to the new branch.
1. Confirm the `Hello Universe` workflow was triggered twice.
1. Go to the `Pull requests` tab and view the contents of your pull requests.
1. Confirm that the comment and a label were added.

## From Your Local System...
1. Create a new repo and clone it to your local system.
1. Add the exercise files to the root of the new repo.  Be sure to add the file named `.gitignore`  but note that it may be hidden.
1. **NOTE:** The `.gitignore` file from the previous step needs to be in place for the following reasons:
    - To allow files in the `dist` directory to be added to the repo
    - To prevent the `node_modules` directory from being added to the repo
1. Edit the file `package.json` and replace all occurences of `YOUR_GITHUB_USER_NAME` with your GitHub user name.
1. Edit the file `hello-universe.yml` and complete the following steps:
    - Replace all occurences of `YOUR_GITHUB_USER_NAME` with your GitHub user name.
    - Replace all occurences of `YOUR_GITHUB_REPO_NAME` with the name of the repo.
1. **NOTE:** The previous step is key for the workflow to complete successfully.
1. In the root of your repo, run the following commands:
    ```
    mkdir -p .github/workflows
    mv hello-universe.yml .github/workflows
    npm install -g @vercel/ncc
    npm init --yes
    npm install @actions/core
    npm install @actions/github
    npm run build
    npm run test
    ```
1. Commit the changes and push them to your repo.
1. Once the commit is pushed, the workflow should be triggered by a `push` event.
1. Confirm the `Hello Universe` workflow runs as expected and includes:
    - a `Warning` annotation saying the that action should only be used with pull requests
    - the context for a push event in the workflow log
1. Modify the `README.md` file and commit the change to a new branch.
1. Use the new branch to create a pull request.
1. Modify the `README.md` file again and commit the change to the new branch.
1. Confirm the `Hello Universe` workflow was triggered twice.
1. Go to the `Pull requests` tab and view the contents of your pull requests.
1. Confirm that the comment and a label were added.

