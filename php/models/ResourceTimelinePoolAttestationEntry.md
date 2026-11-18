[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ResourceTimelinePoolAttestationEntry

A recorded confirmation of the seller's authorization to sell an uploaded batch of license keys.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `actor_id` | Required | string | ID of the credential or user that confirmed authorization. |
| `actor_type` | Required | string | Type of credential or user that confirmed authorization. |
| `entry_type` | Required | string | Always license_key_pool_attestation for this kind of entry. Values: `"license_key_pool_attestation"`. |
| `key_quantity` | Required | integer | Number of submitted keys in the batch, including keys already present. As with all key counts, fractional quantities are not supported. Format: `int32`. |
| `occurred_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `request_id` | Required | string | ID of the upload request. Records created before server-minted request IDs keep their original ID. maxLength: `128`. |
| `resource_timeline_entry_id` | Required | string | ID of the seller authorization entry. |
| `statement_version` | Required | string | Version of the authorization statement the caller confirmed. |

