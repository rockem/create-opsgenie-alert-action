# Create OpsGenie alert action

[![Tests](https://github.com/rockem/create-opsgenie-alert-action/actions/workflows/test.yml/badge.svg)](https://github.com/rockem/create-opsgenie-alert-action/actions/workflows/test.yml)
[![Compile](https://github.com/rockem/create-opsgenie-alert-action/actions/workflows/compile.yml/badge.svg)](https://github.com/rockem/create-opsgenie-alert-action/actions/workflows/compile.yml)

This GitHub Action allows you to create alerts in [OpsGenie](https://www.atlassian.com/software/opsgenie) as part of your GitHub Actions workflows.

## Usage
```yaml
- name: Create OpsGenie Alert
  uses: rockem/create-opsgenie-alert-action@v1
  with:
    api_key: ${{ secrets.OPSGENIE_API_KEY }}
    message: >
      Activity exceeded timeout: exceeded 60 seconds
    alias: "workflow-failure"
    source: "GitHub Actions"
```

### Inputs

- **\`api_key\`** (Required): Your OpsGenie API key. It is recommended to store this as a secret in your GitHub repository.
- **\`message\`** (Required): The short alert message.
- **\`description\`**: A longer description of the alert.
- **\`alias\`**: A unique identifier for the alert. Can be used for alert de-duplication.
- **\`source\`**: The source of the alert. Defaults to IP address of incoming request.
- **\`tags\`**: Tags of the alert, separated by commas.
- **\`priority\`**: Priority level of the alert. Possible values are P1, P2, P3, P4 and P5. Default value is P3.
- **\`using_eu_url\`**: Set the action to use OpsGenie europe endpoint 'https://api.eu.opsgenie.com'. Defaults to false

## Resources
- Create OpsGenie API key: [Create an API integration](https://support.atlassian.com/opsgenie/docs/create-a-default-api-integration/)
- OpsGenie's [AlertAPI](https://docs.opsgenie.com/docs/alert-api)
- Compile files into a single file: [ncc](https://github.com/vercel/ncc)

## License
This project is licensed under the MIT License. See the LICENSE file for details.

---

Feel free to contribute by opening issues or pull requests. If you have any questions or need assistance, please don't hesitate to reach out.

Happy coding!
