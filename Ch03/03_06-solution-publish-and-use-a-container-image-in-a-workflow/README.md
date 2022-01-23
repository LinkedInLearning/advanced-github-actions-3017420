# 03_06-solution-develop-a-workflow-to-publish-a-package
Use these files to solve the challenge "Publish and use a container image in a workflow".

1. Create a new, public repo.
1. Add the files from this directory to the root of the new repo.
1. Create a workflow from the console by selecting the **Actions** tab.
1. Locate the worklow named "Publish Docker Container by GitHub Actions". _If this does not show up as an option, type "Publish Docker Container" into the search bar to locate it._
1. Click **Configure**.
1. In the workflow editor, add a `workflow_dispatch` trigger.
1. Add a job named `test`.
1. Configure the job to use `needs: build` so that it runs after the build job.
1. Add a step that runs the docker image using the following command:
    ```
    run: docker run ${{ env.REGISTRY }}/${{ env.IMAGE_NAME }}:main | grep container && echo "TEST PASSED"
    ```
1. Click **Start commit**, **Commit new file**.
1. Go to the **Actions** tab to confirm the workflow has been triggered.
1. Wait until the workflows complete.
1. Go to the **Code** tab to confirm the container image has been published.
1. Go back to the **Actions** tab and view the output of the job.  Confirm that the test job ran after the build job.  Confirm that the test passed.
