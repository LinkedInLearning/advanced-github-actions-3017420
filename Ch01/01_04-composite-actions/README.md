# 01-04-composite-actions-the-workflow
Use these file to test a composite action.

1. Create TWO new repos: one to host the composite action and one to host the workflow that uses the action
1. Upload the file `action.yml` into the root of the compsite action repo.
1. Upload the following files into the root of the workflow repo:
    ```
    main.py
    requirements.txt
    ```
1. Upload the file `composite-action-workflow.yml` into the `.github/workflows` directory of the composite action repo.
4. Once the workflow file is commited, the workflow should be triggered by a `push` event.
5. Confirm the workflow runs as expected and includes output from the composite action.

