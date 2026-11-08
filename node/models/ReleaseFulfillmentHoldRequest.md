[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReleaseFulfillmentHoldRequest

Releases a merchant hold and restores the previous fulfillment status. An active payment hold must lift first. Schedules and progress timestamps are preserved and no buyer notification is sent.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expected_version` | Optional | integer | Resource version the caller last read. Format: `uint64`. minimum: `1`. |
| `occurred_at` | Optional | string | When the action occurred, as an RFC 3339 timestamp. On complete, also records completion evidence. Format: `date-time`. minLength: `1`. Example: `"2026-08-02T16:00:00Z"`. |
| `reason_message` | Optional | string | Your note explaining this transition. minLength: `1`. maxLength: `500`. |

