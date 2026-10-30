[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PackageTransitionRequestMarkPacked







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `action` | Required | string | Values: `"mark_packed"`. |
| `buyer_notification_behavior` | Optional | string | Values: `"send"`, `"suppress"`. |
| `expected_version` | Optional | integer | Resource version the caller last read. Format: `uint64`. minimum: `1`. |
| `occurred_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. minLength: `1`. |
| `reason_message` | Optional | string | Your note explaining this transition. minLength: `1`. maxLength: `500`. |

### PackageTransitionRequestMarkPacked variant 1: `action` = `"mark_packed"`

anyOf FulfillmentTransitionRequestMarkPacked: Declared schema FulfillmentTransitionRequestMarkPacked. The `mark_packed` variant of `FulfillmentTransitionRequest`..

No additional constraints.

### PackageTransitionRequestMarkPacked variant 2: `action` = `"mark_packed"`

anyOf PackageTransitionRequestMarkPacked: Declared schema PackageTransitionRequestMarkPacked. The `mark_packed` variant of `PackageTransitionRequest`..

No additional constraints.

