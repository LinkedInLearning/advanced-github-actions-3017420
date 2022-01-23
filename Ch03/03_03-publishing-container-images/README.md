# 03_03-publishing-container-images
Use these files to demonstrate publishing a container image to the GitHub Package registry.

1. Create a new, public repo.
1. Add the files from this directory to the root of the new repo.
1. Create a workflow from the console by selecting the **Actions** tab.
1. Locate the worklow named "Publish Docker Container by GitHub Actions". _If this does not show up as an option, type "Publish Docker Container" into the search bar to locate it._
1. Click **Configure**.
1. In the workflow editor, remove any `schedule` triggers.
1. Click **Start commit**, **Commit new file**.
1. Go to the **Actions** tab to confirm the workflow has been triggered.
1. Wait until the workflows complete.
1. Go to the **Code** tab to confirm the container image has been published.
1. Go to your profile home page at `https://github.com/YOUR_GITHUB_USER_NAME`.  Select the **Packages** tab.
1. Confirm the container appears as a package.

