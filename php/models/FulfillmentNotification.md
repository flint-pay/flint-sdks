[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## FulfillmentNotification

A message sent about an order's fulfillment.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `channel` | Required | string | Values: `"email"`. |
| `created_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. maxLength: `255`. |
| `failed_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `fulfillment_event_id` | Optional | string |  |
| `fulfillment_id` | Required | string |  |
| `fulfillment_notification_id` | Required | string |  |
| `metadata` | Optional | Map of string |  |
| `notification_type` | Required | string | Values: [14 declared values](FulfillmentNotificationInput.md#fulfillmentnotificationinput-notification_type-values). |
| `order` | Optional | [ExpandedOrderSummary](../models/ExpandedOrderSummary.md#expandedordersummary) or null |  |
| `order_id` | Required | string |  |
| `package_id` | Optional | string |  |
| `recipient_customer_id` | Optional | string |  |
| `recipient_email` | Optional | string |  |
| `sent_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `shipment_id` | Optional | string |  |
| `status` | Required | string | Values: `"pending"`, `"sent"`, `"failed"`, `"suppressed"`. |
| `suppression_reason` | Optional | string | Values: [6 declared values](#fulfillmentnotification-suppression_reason-values). |
| `trigger_type` | Required | string | Values: `"fulfillment_status_updated"`, `"fulfillment_event_created"`. |
| `updated_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |

#### FulfillmentNotification suppression_reason values

- `"source_suppressed"`
- `"default_suppressed"`
- `"recipient_missing"`
- `"template_not_configured"`
- `"merchant_managed_email"`
- `"recipient_unsubscribed"`

