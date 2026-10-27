[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## UpdatePayoutDestinationRequest

The request body for: Update payout destination metadata.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `metadata` | Optional | Map of (string or null) or null | Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Map values: minLength: `1`. |

