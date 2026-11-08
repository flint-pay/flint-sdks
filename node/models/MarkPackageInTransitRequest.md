[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## MarkPackageInTransitRequest







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_notification_behavior` | Optional | string | Whether to send or suppress the buyer notification for this action. Values: `"send"`, `"suppress"`. |
| `expected_delivery_at` | Optional | string or null | When the carrier or merchant expects this package to arrive. Past dates are allowed. Send null to clear it; omit to leave it unchanged on updates and transitions. Format: `date-time`. minLength: `1`. Example: `"2026-08-02T16:00:00Z"`. |
| `expected_version` | Optional | integer | Resource version the caller last read. Format: `uint64`. minimum: `1`. |
| `occurred_at` | Optional | string | When the carrier scan or package action occurred, as an RFC 3339 timestamp. Format: `date-time`. minLength: `1`. Example: `"2026-08-02T16:00:00Z"`. |
| `reason_message` | Optional | string | Your note explaining this transition. minLength: `1`. maxLength: `500`. |

### MarkPackageInTransitRequest variant 1

anyOf MarkPackageInTransitRequest: Declared schema MarkPackageInTransitRequest. Records the package action mark_in_transit..

No additional constraints.

### MarkPackageInTransitRequest variant 2

anyOf MarkPackageOutForDeliveryRequest: Declared schema MarkPackageOutForDeliveryRequest. Records the package action mark_out_for_delivery..

No additional constraints.

