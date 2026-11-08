[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## WebhookEvent

An event prepared for delivery to webhook endpoints.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_request_log_id` | Optional | string | ID of the API request log associated with the event. Omitted when none is associated. Example: `"rlog_01KEZF7C008XJCH6BHA224X46F"`. |
| `api_version` | Required | string | API version of the event data. Stored data follows the same versioning rules as webhook deliveries. Format: `date`. Example: `"2026-08-02"`. |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `data` | Optional | object | The delivered envelope's data, including its payload-version-specific shape. Omitted from list responses and from detail responses when the caller lacks read access to the attributed resource or the payload has expired after 14 days. |
| `event_source` | Optional | string | Envelope discriminator identifying merchant events, partner app lifecycle events, or events forwarded from installed merchants. Values: `"merchant"`, `"partner_app"`, `"installed_merchants"`. |
| `event_type` | Required | string | Type of event Flint recorded, using the current event type name. Values: [275 declared values](CreateWebhookTestEventRequest.md#createwebhooktesteventrequest-event_type-values). |
| `merchant_id` | Optional | string | ID of the merchant this resource belongs to. Example: `"mer_01KEZF7C00KPYH1DDFPCCX3B6E"`. |
| `mode` | Optional | string | Environment used for this resource or request. Values: `"test"`, `"live"`. |
| `partner_app_id` | Optional | string | ID of the partner app that owns this partner event. Omitted for merchant events. Example: `"papp_01KEZF7C00Y8VMXYZ1GNPP3WHV"`. |
| `payload_version` | Optional | integer | Envelope payload version. Present only while the stored payload is retained. Values: `1`, `2`. |
| `request` | Optional | object or null | Originating request. `null` when the event is synthetic or no originating request ID is recorded. The idempotency key is included only on an authorized detail read while the payload is retained. Omitted for partner events. `request`: [field definitions](../models/WebhookEvent.md#webhookeventrequest). |
| `resource_id` | Optional | string | ID of the resource affected by the event. Omitted when no resource ID is attributed. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. |
| `resource_type` | Optional | string | Public resource type affected by the event. Omitted when no public resource type is attributed. Example: `"order"`. Values: [146 declared values](APIRequestLog.md#apirequestlog-resource_type-values). |
| `sandbox_id` | Optional | string | Public sandbox ID for this event. Present exactly when mode is test; omitted in live mode. Example: `"test_01KEZF7C00JC77HTMTB2XHNPE0"`. |
| `source` | Optional | [WebhookEventSource](../models/WebhookEventSource.md#webhookeventsource) | Partner envelope source. Present only for partner events while the stored payload is retained. The merchant and partner app install the event concerns. Environment fields are present for installed-merchant events. |
| `test` | Required | boolean | Whether this is a synthetic event created to test an endpoint; independent of live or test mode. |
| `webhook_event_id` | Required | string | Unique identifier for this webhook event, prefixed `whev_`. Example: `"whev_01KEZF7C00362MS3HV970TRZGS"`. |

### WebhookEvent.request

Originating request. `null` when the event is synthetic or no originating request ID is recorded. The idempotency key is included only on an authorized detail read while the payload is retained. Omitted for partner events.

Field definitions: [shared fields](BalanceTransactionCreatedMerchantEvent.md#balancetransactioncreatedmerchanteventrequest).

