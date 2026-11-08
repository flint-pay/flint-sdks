[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PartnerWebhookEnvelopeSourceInput

The merchant and partner app install the event concerns. Environment fields are present for installed-merchant events.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `environment_grant_id` | Optional | string | The grant authorizing delivery from this merchant environment. Example: `"egrt_01KEZF7C00MQQDDB7YWGXV3MXY"`. |
| `merchant_id` | Required | string | The merchant the event concerns. Example: `"mer_01KEZF7C00KPYH1DDFPCCX3B6E"`. |
| `mode` | Optional | string | Whether the installed merchant event came from live mode or a sandbox. Values: `"test"`, `"live"`. |
| `partner_app_install_id` | Required | string | The install connecting the merchant to the partner app. Example: `"pinst_01KEZF7C003HVKZR3GZAW6AFAZ"`. |
| `sandbox_id` | Optional | string | The sandbox the event came from, present only in test mode. Example: `"test_01KEZF7C00JC77HTMTB2XHNPE0"`. |

