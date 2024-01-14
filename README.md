# Create OpsGenie alert action

[![Tests](https://github.com/rockem/create-opsgenie-alert-action/actions/workflows/test.yml/badge.svg)](https://github.com/rockem/create-opsgenie-alert-action/actions/workflows/test.yml)
[![Compile](https://github.com/rockem/create-opsgenie-alert-action/actions/workflows/compile.yml/badge.svg)](https://github.com/rockem/create-opsgenie-alert-action/actions/workflows/compile.yml)

This action uses OpsGenie's Alert API to creates a new alert.
Enhance your team's incident management by seamlessly connecting GitHub Actions with OpsGenie alerts, streamlining the process of identifying and addressing potential issues in your software development pipeline.

## Inputs

##### `api_key`

[**Required**] The api key provided by OpsGenie integration.

##### `alias`

The alias for the alert.

##### `message`

[**Required**] The actual alert message.

##### `source`

Alert's source. default is IP address of incoming request.

##### `priority`

Alert's priority, valid values: P1-P5. Default is P3.

##### `description`

The description for the new alert.

##### `tags`

The tags for the new alert, separated by commas.

##### `using_eu_url`

Default value is false. Must set to true if required OpsGenie API endpoint is 'https://api.eu.opsgenie.com'.

## Usage

#### Minimal

```yaml
uses: rockem/create-opsgenie-alert-action@v1
with:
  api_key: ${{ secrets.OPSGENIE_API_KEY }}
  message: >
    Activity exceeded timeout: exceeded 60 seconds
```

#### All parameters

```yaml
uses: rockem/create-opsgenie-alert-action@v1
with:
  api_key: ${{ secrets.OPSGENIE_API_KEY }}
  alias: timeout-alert-alias
  message: >
    Activity exceeded timeout: exceeded 60 seconds
  description: >
    This type of message commonly appears in computing scenarios where
    processes are expected to finish within a specified timeframe
  priority: P2
  source: 127.0.0.1
  tags: backend,timeout
```

## Resources

- OpsGenie's [AlertAPI](https://docs.opsgenie.com/docs/alert-api)
- Compile files into a single file: [ncc](https://github.com/vercel/ncc)
