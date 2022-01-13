# 01-03-scheduled-triggers
Use these files to test a scheduled trigger.

1. Create a new repo.
2. Upload the file `nightly-build.yml` into the `.github/workflows` directory in the new repo.
3. Once the file is commited, the workflow should be triggered by a `push` event.
4. Confirm the workflow completes and creates an artifact.
5. Modify the schedule in the workflow to run more frequently than once per day to see the results of the schedule.
6. Review the results of the workflow triggered by a schedule and compare it to a workflow triggered by a push.
