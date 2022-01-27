# 05_04-use-actions-core-in-javascript-actions
Use these files to test a JavaScript action that uses the @actions/core pacakge for:
- Reading action inputs
- Printing an info log
- Creating notice, warning, and error annotations

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
    - a `Notice` annotation
    - a `Warning` annotation
    - an `Error` annotation
    - logs with an info statement reading "testing testing 1 2 3"
    - logs for each of the annotations

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
    - a `Notice` annotation
    - a `Warning` annotation
    - an `Error` annotation
    - logs with an info statement reading "testing testing 1 2 3"
    - logs for each of the annotations

