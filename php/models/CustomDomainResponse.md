[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CustomDomainResponse

A response containing `CustomDomain` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [CustomDomain](../models/CustomDomain.md#customdomain) | Resource, collection, or operation result returned by this request. A merchant hostname for hosted checkout or customer account pages. `data`: [field definitions](../models/CustomDomainResponse.md#customdomainresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### CustomDomainResponse.data

Resource, collection, or operation result returned by this request. A merchant hostname for hosted checkout or customer account pages.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `active_payment_attempt_count` | Required | integer or null | Payment attempts in progress on this checkout hostname. `null` when `type` is `customer_account`. Format: `int64`. |
| `created_at` | Required | string | When this domain resource was created, in RFC3339 format. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `custom_domain_id` | Required | string | Flint custom domain ID. Example: `"cdom_01KEZF7C00483JTTKHZVFQHKS8"`. |
| `dns_records` | Required | Array of [CustomDomainDNSRecord](../models/CustomDomainDNSRecord.md#customdomaindnsrecord) | DNS records to add for setup or verification. For an archived hostname, records that can be deleted. |
| `hostname` | Required | string | Configured hostname, normalized to lowercase without a trailing dot. |
| `last_checked_at` | Required | string or null | When the domain was last checked, in RFC3339 format; `null` when no check time is available. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `payment_method_domain_id` | Required | string or null | Payment method domain associated with this hostname. `null` when none is reported. Example: `"pmdom_01KEZF7C001WQCSRGH9GWR6628"`. |
| `redirect_expires_at` | Required | string or null | End of the redirect window for an archived hostname. After archive, dns_records lists records you can delete. `null` when the hostname isn't archived. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `status` | Required | string | Current setup and availability state of the hostname. Archived domains retain their resource identity. Values: `"provisioning"`, `"active"`, `"attention_required"`, `"inactive"`, `"archived"`. |
| `status_reason` | Required | string or null | Machine-readable detail for the current status. `null` when no reason is reported, including for active and archived domains. Values: [10 declared values](CustomDomainInput.md#customdomaininput-status_reason-values). |
| `type` | Required | string | Whether the hostname serves checkout pages or the customer account Flint hosts. Values: `"checkout"`, `"customer_account"`. |
| `updated_at` | Required | string | When this domain resource was last updated, in RFC3339 format. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |

### CustomDomainResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

