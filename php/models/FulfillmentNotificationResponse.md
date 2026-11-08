[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## FulfillmentNotificationResponse

A response containing `FulfillmentNotification` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [FulfillmentNotification](../models/FulfillmentNotification.md#fulfillmentnotification) | Resource, collection, or operation result returned by this request. A message sent about an order's fulfillment. `data`: [field definitions](../models/FulfillmentNotificationResponse.md#fulfillmentnotificationresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### FulfillmentNotificationResponse.data

Resource, collection, or operation result returned by this request. A message sent about an order's fulfillment.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `channel` | Required | string | How Flint sends this notification. - `email`: Sends the notification to recipient_email. Values: `"email"`. |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. maxLength: `255`. Example: `"warehouse-1842"`. |
| `failed_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `fulfillment_event_id` | Optional | string | ID of the fulfillment event that triggered the notification. Example: `"fev_01KEZF7C002XK9D7X3239ERT51"`. |
| `fulfillment_id` | Required | string | ID of the fulfillment the notification is about. Example: `"ful_01KEZF7C00F24WVSTTWR1FQX5T"`. |
| `fulfillment_notification_id` | Required | string | Unique identifier for this fulfillment notification, prefixed `fnt_`. Example: `"fnt_01KEZF7C00QD91RXQH2E7H9K5E"`. |
| `metadata` | Optional | Map of string | Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. `metadata`: [field definitions](../models/OrderResponse.md#orderresponsedatachargesmetadata). |
| `notification_type` | Required | string | The buyer update this notification communicates. - `fulfillment_ready`: The fulfillment is ready for pickup. - `fulfillment_dispatched`: The fulfillment was dispatched. - `fulfillment_completed`: The fulfillment was completed. - `fulfillment_canceled`: The fulfillment was canceled. - `fulfillment_failed`: The fulfillment failed. - `fulfillment_no_show`: A service appointment was missed. - `fulfillment_shipped`: The fulfillment was shipped. - `fulfillment_delivered`: The fulfillment was delivered. - `shipment_shipped`: A shipment was shipped. - `shipment_out_for_delivery`: A shipment is out for delivery. - `shipment_delivered`: A shipment was delivered. - `shipment_delivery_attempted`: A carrier attempted to deliver a shipment. - `shipment_exception`: A shipment has a delivery exception. - `shipment_returned`: A shipment was returned. Values: [14 declared values](FulfillmentNotificationInput.md#fulfillmentnotificationinput-notification_type-values). |
| `order` | Optional | [ExpandedOrderSummary](../models/ExpandedOrderSummary.md#expandedordersummary) or null | Present only when `expand` includes `order`; `null` when expanded and there is no related order. `order`: [declared alternatives](../models/DisputeResponse.md#disputeresponsedataorder). |
| `order_id` | Required | string | ID of the order the notification is about. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. |
| `package_id` | Optional | string | ID of the package the notification is about, when it concerns a package. Example: `"pkg_01KEZF7C00ZZA16BJCEJBWKJ5R"`. |
| `recipient_customer_id` | Optional | string | ID of the customer the notification was sent to. Example: `"cus_01KEZF7C006X9JK6NZNA2SM9XD"`. |
| `recipient_email` | Optional | string | Email address the notification was sent to. |
| `sent_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `shipment_id` | Optional | string | ID of the shipment the notification is about, when it concerns a shipment. Example: `"shp_01KEZF7C00Q2AFXWXHMCDR3F68"`. |
| `status` | Required | string | Whether the notification's email is waiting to send, was sent, failed, or was suppressed. Values: `"pending"`, `"sent"`, `"failed"`, `"suppressed"`. |
| `suppression_reason` | Optional | string | Why Flint chose not to send this notification. - `source_suppressed`: The originating request suppressed buyer messaging. - `default_suppressed`: The configured default suppressed buyer messaging. - `recipient_missing`: No usable recipient was available. - `template_not_configured`: No notification template was configured. - `merchant_managed_email`: The merchant's integration owns this email. - `recipient_unsubscribed`: The recipient opted out of this notification. - `sandbox_daily_limit_reached`: Not sent because the sandbox reached its daily limit of buyer emails to addresses outside your team. Send to a team address, or wait for the next UTC day. Values: [7 declared values](#fulfillmentnotificationresponsedata-suppression_reason-values). |
| `trigger_type` | Required | string | What created this notification. - `fulfillment_status_updated`: Created by a fulfillment status transition. - `fulfillment_event_created`: Created by a fulfillment timeline event. Values: `"fulfillment_status_updated"`, `"fulfillment_event_created"`. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |

#### FulfillmentNotificationResponse.data suppression_reason values

- `"source_suppressed"`
- `"default_suppressed"`
- `"recipient_missing"`
- `"template_not_configured"`
- `"merchant_managed_email"`
- `"recipient_unsubscribed"`
- `"sandbox_daily_limit_reached"`

### FulfillmentNotificationResponse.data.metadata

Field definitions: [OrderResponse.data.charges[].metadata](../models/OrderResponse.md#orderresponsedatachargesmetadata).

### FulfillmentNotificationResponse.data.order

Declared alternatives: [DisputeResponse.data.order](../models/DisputeResponse.md#disputeresponsedataorder).

### FulfillmentNotificationResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

