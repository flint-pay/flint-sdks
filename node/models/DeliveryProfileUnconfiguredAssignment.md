[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryProfileUnconfiguredAssignment

Progress of a delivery profile's latest bulk assignment to catalog items that have no delivery profile. It moves from `processing` to `completed`, to `canceled` when it stops early, or to `failed` when Flint can't finish it.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `accepted_at` | Required | string | Time Flint accepted the assignment request. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `bundle_components_remaining` | Required | integer | About how many bundle components the assignment hasn't reached yet, starting from those without a delivery profile when Flint accepted the request. Flint updates it between runs of batches, about every 10 seconds, so it can lag behind, and it is 0 once the assignment is `completed`. Format: `int64`. minimum: `0`. |
| `cancellation_reason` | Optional | string | Why the assignment was canceled. Omitted when `status` isn't `canceled`. Values: `"superseded"`, `"delivery_profile_archived"`. |
| `completed_at` | Optional | string | Time the assignment reached `completed`, `canceled`, or `failed`. Omitted when `status` is `processing`. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `failure_reason` | Optional | string | Why the assignment failed. Omitted when `status` isn't `failed`. Values: `"assignment_failed"`. |
| `product_variants_remaining` | Required | integer | About how many physical product variants the assignment hasn't reached yet, starting from those without a delivery profile when Flint accepted the request. Flint updates it between runs of batches, about every 10 seconds, so it can lag behind, and it is 0 once the assignment is `completed`. Format: `int64`. minimum: `0`. |
| `status` | Required | string | Progress of the assignment. Poll the profile until it is no longer `processing`. Values: `"processing"`, `"completed"`, `"canceled"`, `"failed"`. |

