# 05_03-develop-a-javascript-action
Use these files to test a JavaScript action.

1. Create a new repo.
1. Select `Node` when prompted to add a `.gitignore` file or upload the ignore file in the next step.
1. Add the files from this directory to the root of the new repo.  If you didn't add a .gitignore already, you can use the one included in directory but note that it may be hidden.
1. Edit the file `dist_index.js` and rename it to `dist/index.js`.  Essentially, you are replacing the `_` in the name with a `/`.  That will rename the file to `index.js` and also move it into a directory named `dist`.
1. **NOTE:** The previous step is key for the workflow to complete successfully.
1. Optionally, edit the file `package.json` and replace all occurences of `YOUR_GITHUB_USER_NAME` with your GitHub user name.
1. Edit the file `hello-universe.yml` and complete the following steps:
    - Replace all occurences of `YOUR_GITHUB_USER_NAME` with your GitHub user name.
    - Replace all occurences of `YOUR_GITHUB_REPO_NAME` with the name of the repo
    - Rename the file to move it into the `.github/workflows` directory.
    - Commit the changes.
1. Once the file is commited, the workflow should be triggered by a `push` event.
1. Confirm the workflow runs as expected and includes output for a step named `Initialize containers`.
