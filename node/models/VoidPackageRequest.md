[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## VoidPackageRequest







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_notification_behavior` | Optional | string | Values: `"send"`, `"suppress"`. |
| `expected_version` | Optional | integer | Format: `uint64`. minimum: `1`. |
| `occurred_at` | Optional | string | Format: `date-time`. minLength: `1`. Example: `"2026-08-02T16:00:00Z"`. |
| `reason_message` | Optional | string |  |

### VoidPackageRequest variant 1

anyOf AcceptFulfillmentRequest: Declared schema AcceptFulfillmentRequest. Accepts pending fulfillment work so preparation can begin..

- Constraints for `buyer_notification_behavior`: Whether to send or suppress the buyer notification for this action. Values: `"send"`, `"suppress"`.
- Constraints for `expected_version`: Resource version the caller last read.
- Constraints for `occurred_at`: When the action occurred, as an RFC 3339 timestamp. On complete, also records completion evidence.
- Constraints for `reason_message`: Your note explaining this transition. minLength: `1`. maxLength: `500`.

### VoidPackageRequest variant 2

anyOf CancelFulfillmentRequest: Declared schema CancelFulfillmentRequest. Cancels fulfillment work that has not completed..

- Constraints for `buyer_notification_behavior`: Whether to send or suppress the buyer notification for this action. Values: `"send"`, `"suppress"`.
- Constraints for `expected_version`: Resource version the caller last read.
- Constraints for `occurred_at`: When the action occurred, as an RFC 3339 timestamp. On complete, also records completion evidence.
- Constraints for `reason_message`: Your note explaining this transition. minLength: `1`. maxLength: `500`.

### VoidPackageRequest variant 3

anyOf CompleteFulfillmentRequest: Declared schema CompleteFulfillmentRequest. Completes the fulfillment and records its completion time..

- Constraints for `buyer_notification_behavior`: Whether to send or suppress the buyer notification for this action. Values: `"send"`, `"suppress"`.
- Constraints for `expected_version`: Resource version the caller last read.
- Constraints for `occurred_at`: When the action occurred, as an RFC 3339 timestamp. On complete, also records completion evidence.
- Constraints for `reason_message`: Your note explaining this transition. minLength: `1`. maxLength: `500`.

### VoidPackageRequest variant 4

anyOf DispatchFulfillmentRequest: Declared schema DispatchFulfillmentRequest. Records that a shipment or local delivery fulfillment has left for its destination..

- Constraints for `buyer_notification_behavior`: Whether to send or suppress the buyer notification for this action. Values: `"send"`, `"suppress"`.
- Constraints for `expected_version`: Resource version the caller last read.
- Constraints for `occurred_at`: When the action occurred, as an RFC 3339 timestamp. On complete, also records completion evidence.
- Constraints for `reason_message`: Your note explaining this transition. minLength: `1`. maxLength: `500`.

### VoidPackageRequest variant 5

anyOf MarkFulfillmentPackedRequest: Declared schema MarkFulfillmentPackedRequest. Records that the items for a shipment fulfillment have been packed..

- Constraints for `buyer_notification_behavior`: Whether to send or suppress the buyer notification for this action. Values: `"send"`, `"suppress"`.
- Constraints for `expected_version`: Resource version the caller last read.
- Constraints for `occurred_at`: When the action occurred, as an RFC 3339 timestamp. On complete, also records completion evidence.
- Constraints for `reason_message`: Your note explaining this transition. minLength: `1`. maxLength: `500`.

### VoidPackageRequest variant 6

anyOf MarkFulfillmentPickedRequest: Declared schema MarkFulfillmentPickedRequest. Records that the items for a shipment fulfillment have been picked..

- Constraints for `buyer_notification_behavior`: Whether to send or suppress the buyer notification for this action. Values: `"send"`, `"suppress"`.
- Constraints for `expected_version`: Resource version the caller last read.
- Constraints for `occurred_at`: When the action occurred, as an RFC 3339 timestamp. On complete, also records completion evidence.
- Constraints for `reason_message`: Your note explaining this transition. minLength: `1`. maxLength: `500`.

### VoidPackageRequest variant 7

anyOf MarkFulfillmentPreparingRequest: Declared schema MarkFulfillmentPreparingRequest. Records that preparation of a pickup or delivery fulfillment has begun..

- Constraints for `buyer_notification_behavior`: Whether to send or suppress the buyer notification for this action. Values: `"send"`, `"suppress"`.
- Constraints for `expected_version`: Resource version the caller last read.
- Constraints for `occurred_at`: When the action occurred, as an RFC 3339 timestamp. On complete, also records completion evidence.
- Constraints for `reason_message`: Your note explaining this transition. minLength: `1`. maxLength: `500`.

### VoidPackageRequest variant 8

anyOf MarkFulfillmentReadyRequest: Declared schema MarkFulfillmentReadyRequest. Records that a pickup is ready for collection or a delivery is ready for dispatch..

- Constraints for `buyer_notification_behavior`: Whether to send or suppress the buyer notification for this action. Values: `"send"`, `"suppress"`.
- Constraints for `expected_version`: Resource version the caller last read.
- Constraints for `occurred_at`: When the action occurred, as an RFC 3339 timestamp. On complete, also records completion evidence.
- Constraints for `reason_message`: Your note explaining this transition. minLength: `1`. maxLength: `500`.

### VoidPackageRequest variant 9

anyOf MarkPackageDeliveredRequest: Declared schema MarkPackageDeliveredRequest. Records the package action mark_delivered..

- Constraints for `buyer_notification_behavior`: Whether to send or suppress the buyer notification for this action. Values: `"send"`, `"suppress"`.
- Constraints for `expected_version`: Resource version the caller last read.
- Constraints for `occurred_at`: When the carrier scan or package action occurred, as an RFC 3339 timestamp.
- Constraints for `reason_message`: Your note explaining this transition. minLength: `1`. maxLength: `500`.

### VoidPackageRequest variant 10

anyOf MarkPackageDeliveryAttemptedRequest: Declared schema MarkPackageDeliveryAttemptedRequest. Records the package action mark_delivery_attempted..

- Constraints for `buyer_notification_behavior`: Whether to send or suppress the buyer notification for this action. Values: `"send"`, `"suppress"`.
- Constraints for `expected_version`: Resource version the caller last read.
- Constraints for `occurred_at`: When the carrier scan or package action occurred, as an RFC 3339 timestamp.
- Constraints for `reason_message`: Your note explaining this transition. minLength: `1`. maxLength: `500`.

### VoidPackageRequest variant 11

anyOf MarkPackageExceptionRequest: Declared schema MarkPackageExceptionRequest. Records the package action mark_exception..

- Constraints for `buyer_notification_behavior`: Whether to send or suppress the buyer notification for this action. Values: `"send"`, `"suppress"`.
- Constraints for `expected_version`: Resource version the caller last read.
- Constraints for `occurred_at`: When the carrier scan or package action occurred, as an RFC 3339 timestamp.
- Constraints for `reason_message`: Your note explaining this transition. minLength: `1`. maxLength: `500`.

### VoidPackageRequest variant 12

anyOf MarkPackagePackedRequest: Declared schema MarkPackagePackedRequest. Records the package action mark_packed..

- Constraints for `buyer_notification_behavior`: Whether to send or suppress the buyer notification for this action. Values: `"send"`, `"suppress"`.
- Constraints for `expected_version`: Resource version the caller last read.
- Constraints for `occurred_at`: When the carrier scan or package action occurred, as an RFC 3339 timestamp.
- Constraints for `reason_message`: Your note explaining this transition. minLength: `1`. maxLength: `500`.

### VoidPackageRequest variant 13

anyOf MarkPackageReturnedRequest: Declared schema MarkPackageReturnedRequest. Records the package action mark_returned..

- Constraints for `buyer_notification_behavior`: Whether to send or suppress the buyer notification for this action. Values: `"send"`, `"suppress"`.
- Constraints for `expected_version`: Resource version the caller last read.
- Constraints for `occurred_at`: When the carrier scan or package action occurred, as an RFC 3339 timestamp.
- Constraints for `reason_message`: Your note explaining this transition. minLength: `1`. maxLength: `500`.

### VoidPackageRequest variant 14

anyOf StartFulfillmentRequest: Declared schema StartFulfillmentRequest. Starts fulfillment work..

- Constraints for `buyer_notification_behavior`: Whether to send or suppress the buyer notification for this action. Values: `"send"`, `"suppress"`.
- Constraints for `expected_version`: Resource version the caller last read.
- Constraints for `occurred_at`: When the action occurred, as an RFC 3339 timestamp. On complete, also records completion evidence.
- Constraints for `reason_message`: Your note explaining this transition. minLength: `1`. maxLength: `500`.

### VoidPackageRequest variant 15

anyOf variant 15: Declared schema VoidShipmentRequest. The request body for: Void shipment..

- Constraints for `buyer_notification_behavior`: Controls buyer email handling. Omit or use send to send when recipient, template, and deduplication rules allow it. Use suppress when another system owns buyer messaging. Values: `"send"`, `"suppress"`.
- Constraints for `expected_version`: Optional resource version last read by the caller.
- Constraints for `occurred_at`: Void event timestamp.
- Constraints for `reason_message`: Your note explaining this action. minLength: `1`.

