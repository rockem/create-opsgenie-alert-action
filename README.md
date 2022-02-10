# Create OpsGenie alert action

This action creates a new OpsGenie alert

## Inputs

#### `api_key`

[**Required**] The api key provided by OpsGenie integration.

#### `alias`

[**Required**] The alias for the alert.

#### `message`

[**Required**] The actual alert message.

#### `priority`

[**Required**] Alert's priority, valid values: P1-P5.

#### `description`

The description for the new alert.

#### `tags`

The tags for the new alert, separated by commas. 

#### `using_eu_url`

Default value is false. Must set to true if required OpsGenie API endpoint is 'https://api.eu.opsgenie.com'.

## Example usage
```
uses: rockem/create-opsgenie-alert-action@v1
with:
    api_key: ${{ secrets.OPSGENIE_API_KEY }}
    alias: timeout-alert-alias
    message: > 
        Activity exceeded timeout: exceeded 60 seconds
    priority: P2
    tags: backend,timeout
``` 
