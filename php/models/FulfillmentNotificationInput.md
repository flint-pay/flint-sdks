[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## FulfillmentNotificationInput

A message sent about an order's fulfillment.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `channel` | Required | string | Values: `"email"`. |
| `created_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. maxLength: `255`. |
| `failed_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `fulfillment_event_id` | Optional | string |  |
| `fulfillment_id` | Required | string |  |
| `fulfillment_notification_id` | Required | string |  |
| `metadata` | Optional | [MetadataMapInput](../models/MetadataMapInput.md#metadatamapinput) | Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. |
| `notification_type` | Required | string | Values: [14 declared values](#fulfillmentnotificationinput-notification_type-values). |
| `order` | Optional | [ExpandedOrderSummaryInput](../models/ExpandedOrderSummaryInput.md#expandedordersummaryinput) or null |  |
| `order_id` | Required | string |  |
| `package_id` | Optional | string |  |
| `recipient_customer_id` | Optional | string |  |
| `recipient_email` | Optional | string |  |
| `sent_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `shipment_id` | Optional | string |  |
| `status` | Required | string | Values: `"pending"`, `"sent"`, `"failed"`, `"suppressed"`. |
| `suppression_reason` | Optional | string | Values: [6 declared values](#fulfillmentnotificationinput-suppression_reason-values). |
| `trigger_type` | Required | string | Values: `"fulfillment_status_updated"`, `"fulfillment_event_created"`. |
| `updated_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |

#### FulfillmentNotificationInput notification_type values

- `"fulfillment_ready"`
- `"fulfillment_dispatched"`
- `"fulfillment_completed"`
- `"fulfillment_canceled"`
- `"fulfillment_failed"`
- `"fulfillment_no_show"`
- `"fulfillment_shipped"`
- `"fulfillment_delivered"`
- `"shipment_shipped"`
- `"shipment_out_for_delivery"`
- `"shipment_delivered"`
- `"shipment_delivery_attempted"`
- `"shipment_exception"`
- `"shipment_returned"`

#### FulfillmentNotificationInput suppression_reason values

- `"source_suppressed"`
- `"default_suppressed"`
- `"recipient_missing"`
- `"template_not_configured"`
- `"merchant_managed_email"`
- `"recipient_unsubscribed"`

