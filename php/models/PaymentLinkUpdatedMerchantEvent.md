[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentLinkUpdatedMerchantEvent

The `payment_link.updated` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. |
| `data` | Required | [PaymentLinkUpdatedMerchantEventData](../models/PaymentLinkUpdatedMerchantEventData.md#paymentlinkupdatedmerchanteventdata) | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/PaymentLinkUpdatedMerchantEvent.md#paymentlinkupdatedmerchanteventdata-fields-1). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"merchant"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"payment_link.updated"`. |
| `merchant_id` | Required | string | ID of the merchant this resource belongs to. |
| `mode` | Required | string | Environment used for this resource or request. Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [PaymentLinkUpdatedMerchantEventRequest](../models/PaymentLinkUpdatedMerchantEventRequest.md#paymentlinkupdatedmerchanteventrequest) or null | The originating request. `null` when the event has no originating request ID. |
| `sandbox_id` | Optional | string | Public sandbox ID for this event. Present exactly when mode is test; omitted in live mode. |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. |

### PaymentLinkUpdatedMerchantEvent.data fields 1

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. `object`: [field definitions](../models/PaymentLinkCreatedMerchantEvent.md#paymentlinkcreatedmerchanteventdata-fields-1object). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/PaymentLinkUpdatedMerchantEvent.md#paymentlinkupdatedmerchanteventdata-fields-1previous_attributes). |

### PaymentLinkUpdatedMerchantEvent.data fields 1.object

Field definitions: [PaymentLinkCreatedMerchantEvent.data fields 1.object](../models/PaymentLinkCreatedMerchantEvent.md#paymentlinkcreatedmerchanteventdata-fields-1object).

### PaymentLinkUpdatedMerchantEvent.data fields 1.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Field definitions: [shared fields](PaymentLinkUpdatedMerchantEventDataPreviousAttributes.md#paymentlinkupdatedmerchanteventdatapreviousattributes).

### PaymentLinkUpdatedMerchantEvent.data fields 1.previous_attributes.buyer_fields

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.buyer_fields](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesbuyer_fields).

### PaymentLinkUpdatedMerchantEvent.data fields 1.previous_attributes.checkout_session_expires_in_seconds

Declared alternatives: [PaymentLinkUpdatedMerchantEventDataPreviousAttributes.checkout_session_expires_in_seconds](../models/PaymentLinkUpdatedMerchantEventDataPreviousAttributes.md#paymentlinkupdatedmerchanteventdatapreviousattributescheckout_session_expires_in_seconds).

### PaymentLinkUpdatedMerchantEvent.data fields 1.previous_attributes.completed_count

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.payment_link variant 1.completed_count](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributespayment_link-variant-1completed_count).

### PaymentLinkUpdatedMerchantEvent.data fields 1.previous_attributes.created_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### PaymentLinkUpdatedMerchantEvent.data fields 1.previous_attributes.custom_fields

Declared alternatives: [PaymentLinkUpdatedMerchantEventDataPreviousAttributes.custom_fields](../models/PaymentLinkUpdatedMerchantEventDataPreviousAttributes.md#paymentlinkupdatedmerchanteventdatapreviousattributescustom_fields).

### PaymentLinkUpdatedMerchantEvent.data fields 1.previous_attributes.custom_text

Declared alternatives: [PaymentLinkUpdatedMerchantEventDataPreviousAttributes.custom_text](../models/PaymentLinkUpdatedMerchantEventDataPreviousAttributes.md#paymentlinkupdatedmerchanteventdatapreviousattributescustom_text).

### PaymentLinkUpdatedMerchantEvent.data fields 1.previous_attributes.delivery_method_ids

Declared alternatives: [PaymentLinkUpdatedMerchantEventDataPreviousAttributes.delivery_method_ids](../models/PaymentLinkUpdatedMerchantEventDataPreviousAttributes.md#paymentlinkupdatedmerchanteventdatapreviousattributesdelivery_method_ids).

### PaymentLinkUpdatedMerchantEvent.data fields 1.previous_attributes.description

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.payment_link variant 1.description](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributespayment_link-variant-1description).

### PaymentLinkUpdatedMerchantEvent.data fields 1.previous_attributes.donation_suggested_amount_money_options

Declared alternatives: [PaymentLinkUpdatedMerchantEventDataPreviousAttributes.donation_suggested_amount_money_options](../models/PaymentLinkUpdatedMerchantEventDataPreviousAttributes.md#paymentlinkupdatedmerchanteventdatapreviousattributesdonation_suggested_amount_money_options).

### PaymentLinkUpdatedMerchantEvent.data fields 1.previous_attributes.event_config

Declared alternatives: [PaymentLinkUpdatedMerchantEventDataPreviousAttributes.event_config](../models/PaymentLinkUpdatedMerchantEventDataPreviousAttributes.md#paymentlinkupdatedmerchanteventdatapreviousattributesevent_config).

### PaymentLinkUpdatedMerchantEvent.data fields 1.previous_attributes.external_reference_id

Declared alternatives: [TaxCalculationCallbackActivatedEvent.data fields 1.previous_attributes.external_reference_id](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdata-fields-1previous_attributesexternal_reference_id).

### PaymentLinkUpdatedMerchantEvent.data fields 1.previous_attributes.image

Declared alternatives: [PaymentLinkUpdatedMerchantEventDataPreviousAttributes.image](../models/PaymentLinkUpdatedMerchantEventDataPreviousAttributes.md#paymentlinkupdatedmerchanteventdatapreviousattributesimage).

### PaymentLinkUpdatedMerchantEvent.data fields 1.previous_attributes.inactive_message

Declared alternatives: [PaymentLinkUpdatedMerchantEventDataPreviousAttributes.inactive_message](../models/PaymentLinkUpdatedMerchantEventDataPreviousAttributes.md#paymentlinkupdatedmerchanteventdatapreviousattributesinactive_message).

### PaymentLinkUpdatedMerchantEvent.data fields 1.previous_attributes.inventory_routing_source

Declared alternatives: [PaymentLinkUpdatedMerchantEventDataPreviousAttributes.inventory_routing_source](../models/PaymentLinkUpdatedMerchantEventDataPreviousAttributes.md#paymentlinkupdatedmerchanteventdatapreviousattributesinventory_routing_source).

### PaymentLinkUpdatedMerchantEvent.data fields 1.previous_attributes.legal

Declared alternatives: [PaymentLinkUpdatedMerchantEventDataPreviousAttributes.legal](../models/PaymentLinkUpdatedMerchantEventDataPreviousAttributes.md#paymentlinkupdatedmerchanteventdatapreviousattributeslegal).

### PaymentLinkUpdatedMerchantEvent.data fields 1.previous_attributes.line_items

Declared alternatives: [PaymentLinkUpdatedMerchantEventDataPreviousAttributes.line_items](../models/PaymentLinkUpdatedMerchantEventDataPreviousAttributes.md#paymentlinkupdatedmerchanteventdatapreviousattributesline_items).

### PaymentLinkUpdatedMerchantEvent.data fields 1.previous_attributes.max_completions

Declared alternatives: [PaymentLinkUpdatedMerchantEventDataPreviousAttributes.max_completions](../models/PaymentLinkUpdatedMerchantEventDataPreviousAttributes.md#paymentlinkupdatedmerchanteventdatapreviousattributesmax_completions).

### PaymentLinkUpdatedMerchantEvent.data fields 1.previous_attributes.merchant_id

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.merchant_id](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributesmerchant_id).

### PaymentLinkUpdatedMerchantEvent.data fields 1.previous_attributes.metadata

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.metadata](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesmetadata).

### PaymentLinkUpdatedMerchantEvent.data fields 1.previous_attributes.name

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.payment_link variant 1.name](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributespayment_link-variant-1name).

### PaymentLinkUpdatedMerchantEvent.data fields 1.previous_attributes.payment_link_id

Declared alternatives: [PaymentLinkUpdatedMerchantEventDataPreviousAttributes.payment_link_id](../models/PaymentLinkUpdatedMerchantEventDataPreviousAttributes.md#paymentlinkupdatedmerchanteventdatapreviousattributespayment_link_id).

### PaymentLinkUpdatedMerchantEvent.data fields 1.previous_attributes.payment_link_type

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.payment_link variant 1.payment_link_type](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributespayment_link-variant-1payment_link_type).

### PaymentLinkUpdatedMerchantEvent.data fields 1.previous_attributes.payments

Declared alternatives: [PaymentLinkUpdatedMerchantEventDataPreviousAttributes.payments](../models/PaymentLinkUpdatedMerchantEventDataPreviousAttributes.md#paymentlinkupdatedmerchanteventdatapreviousattributespayments).

### PaymentLinkUpdatedMerchantEvent.data fields 1.previous_attributes.promotion_config

Declared alternatives: [PaymentLinkUpdatedMerchantEventDataPreviousAttributes.promotion_config](../models/PaymentLinkUpdatedMerchantEventDataPreviousAttributes.md#paymentlinkupdatedmerchanteventdatapreviousattributespromotion_config).

### PaymentLinkUpdatedMerchantEvent.data fields 1.previous_attributes.redirects

Declared alternatives: [PaymentLinkUpdatedMerchantEventDataPreviousAttributes.redirects](../models/PaymentLinkUpdatedMerchantEventDataPreviousAttributes.md#paymentlinkupdatedmerchanteventdatapreviousattributesredirects).

### PaymentLinkUpdatedMerchantEvent.data fields 1.previous_attributes.sales_end_at

Declared alternatives: [PaymentLinkUpdatedMerchantEventDataPreviousAttributes.sales_end_at](../models/PaymentLinkUpdatedMerchantEventDataPreviousAttributes.md#paymentlinkupdatedmerchanteventdatapreviousattributessales_end_at).

### PaymentLinkUpdatedMerchantEvent.data fields 1.previous_attributes.sales_summary

Declared alternatives: [PaymentLinkUpdatedMerchantEventDataPreviousAttributes.sales_summary](../models/PaymentLinkUpdatedMerchantEventDataPreviousAttributes.md#paymentlinkupdatedmerchanteventdatapreviousattributessales_summary).

### PaymentLinkUpdatedMerchantEvent.data fields 1.previous_attributes.status

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.payment_link variant 1.status](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributespayment_link-variant-1status).

### PaymentLinkUpdatedMerchantEvent.data fields 1.previous_attributes.subscription_plan

Declared alternatives: [PaymentLinkUpdatedMerchantEventDataPreviousAttributes.subscription_plan](../models/PaymentLinkUpdatedMerchantEventDataPreviousAttributes.md#paymentlinkupdatedmerchanteventdatapreviousattributessubscription_plan).

### PaymentLinkUpdatedMerchantEvent.data fields 1.previous_attributes.subscription_plan_id

Declared alternatives: [PaymentLinkUpdatedMerchantEventDataPreviousAttributes.subscription_plan_id](../models/PaymentLinkUpdatedMerchantEventDataPreviousAttributes.md#paymentlinkupdatedmerchanteventdatapreviousattributessubscription_plan_id).

### PaymentLinkUpdatedMerchantEvent.data fields 1.previous_attributes.tax

Declared alternatives: [PaymentLinkUpdatedMerchantEventDataPreviousAttributes.tax](../models/PaymentLinkUpdatedMerchantEventDataPreviousAttributes.md#paymentlinkupdatedmerchanteventdatapreviousattributestax).

### PaymentLinkUpdatedMerchantEvent.data fields 1.previous_attributes.theme

Declared alternatives: [PaymentLinkUpdatedMerchantEventDataPreviousAttributes.theme](../models/PaymentLinkUpdatedMerchantEventDataPreviousAttributes.md#paymentlinkupdatedmerchanteventdatapreviousattributestheme).

### PaymentLinkUpdatedMerchantEvent.data fields 1.previous_attributes.tip

Declared alternatives: [PaymentLinkUpdatedMerchantEventDataPreviousAttributes.tip](../models/PaymentLinkUpdatedMerchantEventDataPreviousAttributes.md#paymentlinkupdatedmerchanteventdatapreviousattributestip).

### PaymentLinkUpdatedMerchantEvent.data fields 1.previous_attributes.total_quantity_sold

Declared alternatives: [BundleComponentPreviousAttributes.quantity](../models/BundleComponentPreviousAttributes.md#bundlecomponentpreviousattributesquantity).

### PaymentLinkUpdatedMerchantEvent.data fields 1.previous_attributes.updated_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### PaymentLinkUpdatedMerchantEvent.data fields 1.previous_attributes.url

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.payment_link variant 1.url](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributespayment_link-variant-1url).

### PaymentLinkUpdatedMerchantEvent.data fields 1.previous_attributes.version

Declared alternatives: [GiftCardUpdatedMerchantEventDataPreviousAttributes.version](../models/GiftCardUpdatedMerchantEventDataPreviousAttributes.md#giftcardupdatedmerchanteventdatapreviousattributesversion).

