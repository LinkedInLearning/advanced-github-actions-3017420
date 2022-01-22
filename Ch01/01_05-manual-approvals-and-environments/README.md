# 01_05-manual-approvals-and-environments
Use these files to test a manual deployment using environments protection rules.

## Set up the Workflow
1. Create a new repo.
2. Add the files from this directory to the root of the new repo.
3. Move the file `manual-approval.yml` into the `.github/workflows` directory in the new repo.
4. Once the file is commited, the workflow should be triggered by a `push` event.
5. Confirm the workflow runs as expected and includes output for two jobs, **development** and **production**.

## Add a Reviewer and a Manual Approval
1. Modify the repo settings.  Go to: `Settings` -> `Environments` -> `production`.
1. Select the check-box next to `Required reviewers`.
1. Add your username as a reviewer.
1. Click `Save protection rules`.

## Rerun the Workflow
1. Go to the `Actions` tab and select the workflow.
1. Click the `Run workflow` drop-down and then click the `Run workflow` button.
1. Open the workflow run that you just started (you may need to refresh the screen to see it).
1. Note the message requesting a review.
1. Click `Review deployments`
1. Clik the check-box next to `production`, add a comment, and click `Approve and deploy`.
1. Wait for the workflow to complete and review the output.
