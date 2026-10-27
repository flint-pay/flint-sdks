[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PartnerWebhookEnvelopeInput

Fields shared by partner webhook payloads.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | object | `data`: [field definitions](../models/MerchantWebhookEnvelopeInput.md#merchantwebhookenvelopeinputdata). |
| `event_type` | Required | string | Values: [245 declared values](CreateWebhookTestEventRequestInput.md#createwebhooktesteventrequestinput-event_type-values). |
| `partner_app_id` | Required | string |  |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | Alternative shapes (see declared variants) | `source`: [declared alternatives](../models/PartnerWebhookEnvelopeInput.md#partnerwebhookenvelopeinputsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### PartnerWebhookEnvelopeInput.data

Field definitions: [MerchantWebhookEnvelopeInput.data](../models/MerchantWebhookEnvelopeInput.md#merchantwebhookenvelopeinputdata).

### PartnerWebhookEnvelopeInput.source

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `merchant_id` | Required | string |  |
| `partner_app_install_id` | Required | string |  |
| `type` | Required | string |  |
| `environment_grant_id` | Conditional | string |  |
| `mode` | Conditional | string | Values: `"test"`, `"live"`. |
| `sandbox_id` | Conditional | string |  |

### PartnerWebhookEnvelopeInput.source variant 1: `type` = `"partner_app"`

oneOf variant 1.

- Undeclared: `environment_grant_id`, `mode`, `sandbox_id`.
- Constraints for `type`: Values: `"partner_app"`.

### PartnerWebhookEnvelopeInput.source variant 2: `type` = `"installed_merchants"`

oneOf variant 2.

- Required: `environment_grant_id`, `mode`.
- Optional: `sandbox_id`.
- Constraints for `type`: Values: `"installed_merchants"`.

