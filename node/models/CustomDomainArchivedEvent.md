[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CustomDomainArchivedEvent

The `custom_domain.archived` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. Example: `"2026-08-02"`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `data` | Required | object | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/CustomDomainArchivedEvent.md#customdomainarchivedeventdata). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"merchant"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"custom_domain.archived"`. |
| `merchant_id` | Required | string | ID of the merchant this resource belongs to. Example: `"mer_01KEZF7C00KPYH1DDFPCCX3B6E"`. |
| `mode` | Required | string | Environment used for this resource or request. Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | object or null | The originating request. `null` when the event has no originating request ID. `request`: [field definitions](../models/ApiKeyCreatedEvent.md#apikeycreatedeventrequest). |
| `sandbox_id` | Optional | string | Public sandbox ID for this event. Present exactly when mode is test; omitted in live mode. Example: `"test_01KEZF7C00JC77HTMTB2XHNPE0"`. |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. Example: `"whev_01KEZF7C00362MS3HV970TRZGS"`. |

### CustomDomainArchivedEvent.data

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. `object`: [field definitions](../models/CustomDomainArchivedEvent.md#customdomainarchivedeventdataobject). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. |

### CustomDomainArchivedEvent.data.object

The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.

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
| `status_reason` | Required | string or null | Machine-readable detail for the current status. `null` when no reason is reported, including for active and archived domains. Values: [10 declared values](CustomDomain.md#customdomain-status_reason-values). |
| `type` | Required | string | Whether the hostname serves checkout pages or the customer account Flint hosts. Values: `"checkout"`, `"customer_account"`. |
| `updated_at` | Required | string | When this domain resource was last updated, in RFC3339 format. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |

### CustomDomainArchivedEvent.request

Field definitions: [ApiKeyCreatedEvent.request](../models/ApiKeyCreatedEvent.md#apikeycreatedeventrequest).

