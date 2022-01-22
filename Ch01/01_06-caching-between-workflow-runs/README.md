# 01_06-caching-between-workflow-runs
Use these files to demonstrate caching between workflow runs.

1. Create a new repo.
1. Add the files from this directory to the root of the new repo.
1. Move the follwing files into the `.github/workflows` directory in the new repo:
    ```
    build-hugo-no-cache.yml
    build-hugo-with-cache.yml
    ```
1. On the **Actions** tab, use the dispatch trigger to run each workflow.
1. Wait until the workflows complete.  Make a note of the time it took the worflows to run.
1. Re-run each workflow using the dispatch trigger.
1. Compare the new runtime of each workflow. The runtime for the cached workflow should be reduced in comparision to its previous run.
