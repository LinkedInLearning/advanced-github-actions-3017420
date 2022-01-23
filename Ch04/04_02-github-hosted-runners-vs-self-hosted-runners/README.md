# 04_02-github-hosted-runners-vs-self-hosted-runners

## Self-hosted runners
Please review the following for more information on working with self-hosted runners.

- [The GitHub Actions Runner](https://github.com/actions/runner)
- [About self-hosted runners](https://docs.github.com/en/actions/hosting-your-own-runners/about-self-hosted-runners)

## Security
Security is absolutley important when it comes to self-hosted runners.  Please review the following document.
- [Security hardening for GitHub Actions](https://docs.github.com/en/actions/security-guides/security-hardening-for-github-actions#hardening-for-self-hosted-runners)

<div class="extended-markdown warning border rounded-1 mb-4 p-3 color-border-danger color-bg-danger f5">
<p><strong>Warning:</strong> We recommend that you only use self-hosted runners with private repositories. This is because forks of your repository can potentially run dangerous code on your self-hosted runner machine by creating a pull request that executes the code in a workflow.</p>
<p>For more information, see "<a href="/en/github/automating-your-workflow-with-github-actions/about-self-hosted-runners#self-hosted-runner-security-with-public-repositories">About self-hosted runners</a>."</p>
</div>
