# 04_03-configure-a-self-hosted-runner
Use these steps to configure a self hosted runner.

1. Connect to the system you intend to use as your self-hosted runner.  This can be a virtual machine hosted on a cloud platform or even your local Windows, macOS, or Linux workstation.  In any case, you will need admin level permissions to install the runner application.
1. Create a new, PRIVATE repo.
1. In the repo, select **Settings -> Actions -> Runners**.
1. Click **New self-hosted runner**.
1. Select the operating system in use on your VM or workstation.
1. Follow the steps to download the files needed by the runner application.
1. Follow the steps to configure the runner application.
1. Start the runner for a single session using the `run` command for your operating system.
1. Optionally, start the runner as a service using the `svc` command for your operating system.
1. From the **Settings -> Actions -> Runners** page on your repo, confirm that the runner is connected and idle.
