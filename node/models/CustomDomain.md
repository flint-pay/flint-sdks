[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CustomDomain

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
| `status_reason` | Required | string or null | Machine-readable detail for the current status, or null when no reason is reported. Values: [10 declared values](#customdomain-status_reason-values). |
| `type` | Required | string | Whether the hostname serves checkout pages or the customer account Flint hosts. Values: `"checkout"`, `"customer_account"`. |
| `updated_at` | Required | string | When this domain resource was last updated, in RFC3339 format. Format: `date-time`. |

#### CustomDomain status_reason values

- `"dns_record_missing"`
- `"dns_record_mismatch"`
- `"ownership_record_missing"`
- `"ownership_record_mismatch"`
- `"caa_record_blocks_certificate"`
- `"proxied_by_another_provider"`
- `"certificate_pending"`
- `"custom_domains_inactive"`
- `"other"`
- `null`

