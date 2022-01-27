# 05_02-javascript-actions-overview
Use the following tips and references to get set up to develop a JavaScript action.

1. Create a new repository.  Select `Node` for the .gitignore file.
1. Using a terminal program, clone the repo to your local system and `cd` into the directory.
1. Confirm that you have `node` and `npm` installed with the following commands:
    ```
    node --version
    npm --version
    ```
1. Install the NCC tool for compiling node functions and thier dependencies into a single file:
    ```
    npm install --global @vercel/ncc
    ```
1. Intialize your project:
    ```
    npm init --yes
    ```
1. Install the `@actions/core` and `@actions/github` libraries as dependencies:
    ```
    npm install @actions/core
    npm install @actions/github
    ```
1. Edit the `.gitignore` file and remove the line with `dist`.

## Resources    
- [Creating a JavaScript Action](https://docs.github.com/en/actions/creating-actions/creating-a-javascript-action)
