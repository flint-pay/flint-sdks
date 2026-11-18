[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ResourceTimelinePoolAttestationEntryInput

A recorded confirmation of the seller's authorization to sell an uploaded batch of license keys.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `actor_id` | Required | string | ID of the credential or user that confirmed authorization. Example: `"usr_01KEZF7C00YC8757ZYP9727JM0"`. |
| `actor_type` | Required | string | Type of credential or user that confirmed authorization. Example: `"user"`. |
| `entry_type` | Required | string | Always license_key_pool_attestation for this kind of entry. Values: `"license_key_pool_attestation"`. |
| `key_quantity` | Required | integer | Number of submitted keys in the batch, including keys already present. As with all key counts, fractional quantities are not supported. Format: `int32`. |
| `occurred_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `request_id` | Required | string | ID of the upload request. Records created before server-minted request IDs keep their original ID. maxLength: `128`. Example: `"req_01KWM6WAHG3N9Q8T2V5XRZ7C4D"`. |
| `resource_timeline_entry_id` | Required | string | ID of the seller authorization entry. Example: `"lkpa_01KEZF7C00GD0ZHTK6ZA4BHC0M"`. |
| `statement_version` | Required | string | Version of the authorization statement the caller confirmed. |

