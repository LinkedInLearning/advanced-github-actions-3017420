# 03_04-publishing-software-packages
Use these files to demonstrate publishing a software package to the GitHub Package registry.

1. Create a new, public repo.
1. Add the files from this directory to the root of the new repo.
1. Edit the files named `package.json` and `package-lock.json`.
1. Find and replace each occurrence of `YOUR_GITHUB_USER_NAME_HERE` and `YOUR_GITHUB_REPO_NAME_HERE` with your GitHub user name and the name of the active repo.
1. Please confirm that the replacements made above match your username (preceded by the `@` symbol) and your repo name exactly.  Typos or errors in these files may lead to errors in publishing to GitHub Packages.
1. Commit the changes.
1. Create a workflow from the console by selecting the **Actions** tab.
1. Locate the worklow named "Publish Node.js Package to GitHub Packages". _If this does not show up as an option, type "Publish Node.js Package to GitHub Packages" into the search bar to locate it._
1. Click **Configure**.
1. Click **Start commit**, **Commit new file**.
1. Go to the **Code** tab of the repo.
1. Click **Create a new release**.
1. Click **Choose a tag**.  Enter `v1.0.0` and click **Create a new tag: v1.0.0 on publish**.
1. Give the release a title and a description.  Click **Publish release**.
1. Go to the **Actions** tab to confirm the workflow has started.  Wait for the workflow to complete.
1. Go to the **Code** tab and look for the package under the **Packages** section on the right hand side of the screen. Note that it may take a few minutes for the package to appear.  Also, you may need to refresh the screen to see the newly published package.
1. Click the package name. Review the package details.

