[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## FulfillmentEventInput

An action recorded during an order's fulfillment.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_notification_behavior` | Required | string | Controls buyer email handling. Omit or use send to send when recipient, template, and deduplication rules allow it. Use suppress when another system owns buyer messaging. Values: `"send"`, `"suppress"`. |
| `created_at` | Optional | string | Timeline entry creation timestamp. Format: `date-time`. |
| `current_status` | Optional | string | Values: [23 declared values](BuyerFulfillmentEventInput.md#buyerfulfillmenteventinput-current_status-values). |
| `custom_details` | Optional | Map of string |  |
| `event_type` | Required | string | Values: [21 declared values](BuyerFulfillmentEventInput.md#buyerfulfillmenteventinput-event_type-values). |
| `external_event_id` | Optional | string |  |
| `external_status` | Optional | string |  |
| `external_system` | Optional | string |  |
| `fulfillment_event_id` | Required | string |  |
| `fulfillment_id` | Required | string |  |
| `location_description` | Optional | string |  |
| `message` | Optional | string |  |
| `occurred_at` | Optional | string | Provider event timestamp. Format: `date-time`. |
| `order` | Optional | [ExpandedOrderSummaryInput](../models/ExpandedOrderSummaryInput.md#expandedordersummaryinput) or null |  |
| `order_id` | Required | string |  |
| `package_id` | Optional | string |  |
| `previous_status` | Optional | string | Values: [23 declared values](BuyerFulfillmentEventInput.md#buyerfulfillmenteventinput-current_status-values). |
| `quantity_effect` | Optional | string | Values: `"preserve"`, `"fulfill"`, `"release"`. |
| `reason` | Optional | string | Values: [12 declared values](#fulfillmenteventinput-reason-values). |
| `reason_message` | Optional | string | The note supplied when this action was requested. |
| `received_at` | Optional | string | Flint receive timestamp. Format: `date-time`. |
| `shipment_id` | Optional | string |  |
| `subject_type` | Required | string | Values: `"fulfillment"`, `"shipment"`, `"package"`. |

#### FulfillmentEventInput reason values

- `"address_issue"`
- `"customer_no_show"`
- `"customer_request"`
- `"fraud_review"`
- `"inventory_issue"`
- `"location_unavailable"`
- `"other"`
- `"payment_review"`
- `"provider_issue"`
- `"provider_no_show"`
- `"scheduling_error"`
- `"scheduling_issue"`

