# 02-03-run-a-job-with-a-matrix-strategy
Use these files to demonstrate running a job with a matrix strategy.

1. Create a new repo.
1. Add the files from this directory to the root of the new repo.
1. Move the `nodejs-matrix.yml` file into the `.github/workflows` directory in the new repo.
1. On the **Actions** tab, use the dispatch trigger to run the workflow.
1. Wait until the workflow completes.
1. Review the output of the workflow to see the combination of jobs.
1. Review the output of a few jobs to see how the matrix configurations for platform and node version were applied.
1. Also, review the output of the test step to see the differences for each platform.
