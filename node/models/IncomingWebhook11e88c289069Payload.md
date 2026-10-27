[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## IncomingWebhook11e88c289069Payload

The `custom_domain.archived` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | object | `data`: [field definitions](../models/IncomingWebhook11e88c289069Payload.md#incomingwebhook11e88c289069payloaddata). |
| `event_type` | Required | string | Values: `"custom_domain.archived"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | object or null | `request`: [field definitions](../models/IncomingWebhook019a504a3353Payload.md#incomingwebhook019a504a3353payload-variant-1request). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### IncomingWebhook11e88c289069Payload.data

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [CustomDomain](../models/CustomDomain.md#customdomain) | A merchant hostname for hosted checkout or customer account pages. `object`: [field definitions](../models/IncomingWebhook11e88c289069Payload.md#incomingwebhook11e88c289069payloaddataobject). |

### IncomingWebhook11e88c289069Payload.data.object

A merchant hostname for hosted checkout or customer account pages.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `active_payment_attempt_count` | Required | integer string or null | Payment attempts in progress on this checkout hostname; null for customer account domains. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `created_at` | Required | string | When this domain resource was created, in RFC3339 format. Format: `date-time`. |
| `custom_domain_id` | Required | string | Flint custom domain ID. |
| `dns_records` | Required | Array of [CustomDomainDNSRecord](../models/CustomDomainDNSRecord.md#customdomaindnsrecord) | DNS records to add for setup or verification. For an archived hostname, records that can be deleted. |
| `hostname` | Required | string | Configured hostname, normalized to lowercase without a trailing dot. |
| `last_checked_at` | Required | string or null | When the domain was last checked, in RFC3339 format; null when no check time is available. Format: `date-time`. |
| `payment_method_domain_id` | Required | string or null | Payment method domain associated with this hostname, or null when none is reported. |
| `redirect_expires_at` | Required | string or null | End of the redirect window for an archived hostname. After archive, dns_records lists records you can delete. Format: `date-time`. |
| `status` | Required | string | Current setup and availability state of the hostname. Archived domains retain their resource identity. Values: `"provisioning"`, `"active"`, `"attention_required"`, `"inactive"`, `"archived"`. |
| `status_reason` | Required | string or null | Machine-readable detail for the current status, or null when no reason is reported. Values: [10 declared values](CustomDomain.md#customdomain-status_reason-values). |
| `type` | Required | string | Whether the hostname serves checkout pages or the customer account Flint hosts. Values: `"checkout"`, `"customer_account"`. |
| `updated_at` | Required | string | When this domain resource was last updated, in RFC3339 format. Format: `date-time`. |

### IncomingWebhook11e88c289069Payload.request

Field definitions: [IncomingWebhook019a504a3353Payload variant 1.request](../models/IncomingWebhook019a504a3353Payload.md#incomingwebhook019a504a3353payload-variant-1request).

