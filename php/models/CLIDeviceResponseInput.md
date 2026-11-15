[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CLIDeviceResponseInput

The response for: Review CLI session consent; Start CLI browser login.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `device_code` | Required | string | Secret code the CLI sends to the token endpoint with the device_code grant to collect the tokens once the user approves. It stops working after expires_in seconds. minLength: `1`. maxLength: `4096`. |
| `expires_in` | Required | integer | Seconds until device_code and user_code expire. Flint issues 600, which is 10 minutes. minimum: `1`. maximum: `1800`. |
| `interval` | Required | integer | Minimum seconds between the CLI's polls of the token endpoint. Flint issues 5. Polling faster returns slow_down and adds five seconds to the interval. minimum: `1`. maximum: `60`. |
| `user_code` | Required | string | Short code, such as `ABCD-EFGH`, that the user checks against the browser approval page. It stops working after expires_in seconds. minLength: `4`. maxLength: `32`. pattern: `^[!-~]+$`. |
| `verification_uri` | Required | string | The page where the user enters user_code and approves or denies the login. |
| `verification_uri_complete` | Required | string | The verification_uri with user_code already filled in, for opening directly or showing as a QR code. |

