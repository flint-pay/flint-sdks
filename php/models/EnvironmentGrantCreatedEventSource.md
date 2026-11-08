[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## EnvironmentGrantCreatedEventSource

The merchant and partner app install this event concerns, with environment details for installed-merchant events.

The merchant and partner app install the event concerns. Environment fields are present for installed-merchant events.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `environment_grant_id` | Optional | string | The grant authorizing delivery from this merchant environment. |
| `merchant_id` | Required | string | The merchant the event concerns. |
| `mode` | Optional | string | Whether the installed merchant event came from live mode or a sandbox. Values: `"test"`, `"live"`. |
| `partner_app_install_id` | Required | string | The install connecting the merchant to the partner app. |
| `sandbox_id` | Optional | string | The sandbox the event came from, present only in test mode. |

