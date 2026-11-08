[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SkipSubscriptionCycleRequestInput

The request body for: Skip subscription cycle.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expected_version` | Optional | integer | Version last read from the resource returned in `data` (the primary resource for a result object). The write fails with `VERSION_CONFLICT` if it has changed. Requiredness depends on the operation and fields being changed. Format: `uint64`. minimum: `1`. |
| `initiated_by` | Optional | string | Who asked for the skip: buyer, merchant, or integration. Defaults to merchant. Attribution only; this does not apply the store's buyer limits. To enforce them, use a customer session on POST /v1/me/subscriptions/{subscription_id}/skip-cycle. Flint's skip email says the buyer skipped for buyer, and that the store skipped otherwise. Default: `"merchant"`. Values: `"buyer"`, `"merchant"`, `"integration"`. |

