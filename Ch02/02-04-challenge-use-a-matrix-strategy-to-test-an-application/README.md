# 02-04 Challenge: Use a matrix strategy to test an application
You’re working with a data team that’s developing a python application that will analyze survey results.  They have an existing GitHub Actions workflow but they want to make sure their application runs on Linux, mac, and windows and is compatible with recent versions of Python.

Your challenge is to create a workflow with the following attributes:
- Test the application on Ubuntu, macOS, and Windows
- Test the application using Python versions 3.7, 3.8, 3.9, and 3.10
- Add an additional test for Python version 3.6 running on Ubuntu
- If the platform is Windows, skip any tests for Python version 3.10

Use the following steps to get started:
1. Create a new repo.
1. Add the files from this directory to the root of the new repo.
1. Move the `python-workflow.yml` file into the `.github/workflows` directory in the new repo.
1. Check the *Actions* tab.  The workflow has a push trigger so it should have run after the workflow file was commited.  The workflow alos has a dispatch trigger that you can use to run the workflow without modifying any files.
1. Add a matrix strategy below the lines that read:
    ```
    #----------------------------------------------#
    # Add your matrix strategy configuration here  #
    #----------------------------------------------#
    ```
1. Add matrix keys for `platform` and `version`.
1. Update the `runs-on` configuration to use the matrix context for `platform`.
1. Update the `python-version` in the `Set up Python` step to use the matrix context for `version`.
1. Add an `include` conifiguration for the matrix to include a job using Ubuntu for the `platform` and Python 3.10 for the `version`.
1. Add an `exclude` configuration for the matrix to remove any jobs using Python 3.6 on the Windows platform.
