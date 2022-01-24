# 04_06-solution-configure-a-self-hosted-runner-with-a-label
Use these steps to solve the challenge:

1. Connect to the system you intend to use as your self-hosted runner.  This can be a virtual machine hosted on a cloud platform or even your local Windows, macOS, or Linux workstation.  In any case, you will need admin level permissions to install the runner application.
1. Create a private repository or use one that you already have in place.
1. Upload the files for this lesson into the repo.
1. Move the file `project-alpha.yml` into the `.github/workflows` directory.
1. In the repo, select **Settings -> Actions -> Runners**.
1. Click **New self-hosted runner**.
1. Select the operating system in use on your VM or workstation.
1. Follow the steps to download the files needed by the runner application.
1. Follow the steps to configure the runner application.
1. While configuring the runner, add the additional label `project-alpha`.
1. Start the runner for a single session using the `run` command for your operating system.
1. Optionally, start the runner as a service using the `svc` command for your operating system.
1. From the **Settings -> Actions -> Runners** page on your repo, confirm that the runner is connected and idle.
1. Go the the **Actions** tab in the repo and select the `Test Project Alpha Runner` workflow.
1. Trigger the workflow using the dispatch trigger.
1. Confirm that the workflow completes and runs on the `project-alpha` runner.
