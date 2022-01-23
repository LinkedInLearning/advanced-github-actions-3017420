# 04_02-github-hosted-runners-vs-self-hosted-runners

## Self-hosted runners
Please review the following for more information on working with self-hosted runners.

- [The GitHub Actions Runner](https://github.com/actions/runner)
- [About self-hosted runners](https://docs.github.com/en/actions/hosting-your-own-runners/about-self-hosted-runners)

## Security
<p><strong>Warning:</strong> We recommend that you only use self-hosted runners with private repositories. This is because forks of your repository can potentially run dangerous code on your self-hosted runner machine by creating a pull request that executes the code in a workflow.</p>

For more information, please review the following document:
- [Security hardening for GitHub Actions](https://docs.github.com/en/actions/security-guides/security-hardening-for-github-actions#hardening-for-self-hosted-runners)
