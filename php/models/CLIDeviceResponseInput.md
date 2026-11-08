[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CLIDeviceResponseInput

The response for: Review CLI session consent; Start CLI browser login.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `device_code` | Required | string | minLength: `1`. maxLength: `4096`. |
| `expires_in` | Required | integer | minimum: `1`. maximum: `1800`. |
| `interval` | Required | integer | minimum: `1`. maximum: `60`. |
| `user_code` | Required | string | minLength: `4`. maxLength: `32`. pattern: `^[!-~]+$`. |
| `verification_uri` | Required | string |  |
| `verification_uri_complete` | Required | string |  |

