# 04_04-use-a-self-hosted-runner-in-a-workflow
Use these files to run a job on a self-hosted runner.

1. Complete the steps from the previous lesson.  Specifically, create a new, PRIVATE repo and configure a self-hosted runner for that repo.
1. Add the files from this directory to the root of the repo.
1. Move the `self-hosted-runner.yml` file into the `.github/workflows` directory.
1. On the **Actions** tab, use the dispatch trigger to run the workflow.
1. While the workflow is running, open the repository settings by going to **Settings -> Actions -> Runners**.  Confirm that the runner shows up as `Active`.
1. Wait until the workflow completes.
1. Review the output of the workflow, specifically the `Set up job` step.  Confirm that the workflow ran on the self-hosted runner as intended.
