[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CustomerUpdatedMerchantEvent

The `customer.updated` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. |
| `data` | Required | [CustomerUpdatedMerchantEventData](../models/CustomerUpdatedMerchantEventData.md#customerupdatedmerchanteventdata) | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/CustomerUpdatedMerchantEvent.md#customerupdatedmerchanteventdata-fields-1). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"merchant"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"customer.updated"`. |
| `merchant_id` | Required | string | ID of the merchant this resource belongs to. |
| `mode` | Required | string | Environment used for this resource or request. Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [CustomerUpdatedMerchantEventRequest](../models/CustomerUpdatedMerchantEventRequest.md#customerupdatedmerchanteventrequest) or null | The originating request. `null` when the event has no originating request ID. |
| `sandbox_id` | Optional | string | Public sandbox ID for this event. Present exactly when mode is test; omitted in live mode. |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. |

### CustomerUpdatedMerchantEvent.data fields 1

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. `object`: [field definitions](../models/CustomerCreatedMerchantEvent.md#customercreatedmerchanteventdata-fields-1object). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/CustomerUpdatedMerchantEvent.md#customerupdatedmerchanteventdata-fields-1previous_attributes). |

### CustomerUpdatedMerchantEvent.data fields 1.object

Field definitions: [CustomerCreatedMerchantEvent.data fields 1.object](../models/CustomerCreatedMerchantEvent.md#customercreatedmerchanteventdata-fields-1object).

### CustomerUpdatedMerchantEvent.data fields 1.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Field definitions: [shared fields](CustomerUpdatedMerchantEventDataPreviousAttributes.md#customerupdatedmerchanteventdatapreviousattributes).

### CustomerUpdatedMerchantEvent.data fields 1.previous_attributes.billing_address

Declared alternatives: [CustomerUpdatedMerchantEventDataPreviousAttributes.billing_address](../models/CustomerUpdatedMerchantEventDataPreviousAttributes.md#customerupdatedmerchanteventdatapreviousattributesbilling_address).

### CustomerUpdatedMerchantEvent.data fields 1.previous_attributes.created_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### CustomerUpdatedMerchantEvent.data fields 1.previous_attributes.customer_id

Declared alternatives: [ExpandedCustomerSummaryPreviousAttributes.customer_id](../models/ExpandedCustomerSummaryPreviousAttributes.md#expandedcustomersummarypreviousattributescustomer_id).

### CustomerUpdatedMerchantEvent.data fields 1.previous_attributes.default_invoice_payment_term_id

Declared alternatives: [CustomerUpdatedMerchantEventDataPreviousAttributes.default_invoice_payment_term_id](../models/CustomerUpdatedMerchantEventDataPreviousAttributes.md#customerupdatedmerchanteventdatapreviousattributesdefault_invoice_payment_term_id).

### CustomerUpdatedMerchantEvent.data fields 1.previous_attributes.default_payment_method

Declared alternatives: [CustomerUpdatedMerchantEventDataPreviousAttributes.default_payment_method](../models/CustomerUpdatedMerchantEventDataPreviousAttributes.md#customerupdatedmerchanteventdatapreviousattributesdefault_payment_method).

### CustomerUpdatedMerchantEvent.data fields 1.previous_attributes.default_payment_method_id

Declared alternatives: [CustomerUpdatedMerchantEventDataPreviousAttributes.default_payment_method_id](../models/CustomerUpdatedMerchantEventDataPreviousAttributes.md#customerupdatedmerchanteventdatapreviousattributesdefault_payment_method_id).

### CustomerUpdatedMerchantEvent.data fields 1.previous_attributes.email

Declared alternatives: [ExpandedCustomerSummaryPreviousAttributes.email](../models/ExpandedCustomerSummaryPreviousAttributes.md#expandedcustomersummarypreviousattributesemail).

### CustomerUpdatedMerchantEvent.data fields 1.previous_attributes.external_reference_id

Declared alternatives: [CustomerUpdatedMerchantEventDataPreviousAttributes.external_reference_id](../models/CustomerUpdatedMerchantEventDataPreviousAttributes.md#customerupdatedmerchanteventdatapreviousattributesexternal_reference_id).

### CustomerUpdatedMerchantEvent.data fields 1.previous_attributes.internal_note

Declared alternatives: [CustomerUpdatedMerchantEventDataPreviousAttributes.internal_note](../models/CustomerUpdatedMerchantEventDataPreviousAttributes.md#customerupdatedmerchanteventdatapreviousattributesinternal_note).

### CustomerUpdatedMerchantEvent.data fields 1.previous_attributes.is_merchant_verified

Declared alternatives: [CustomerUpdatedMerchantEventDataPreviousAttributes.is_merchant_verified](../models/CustomerUpdatedMerchantEventDataPreviousAttributes.md#customerupdatedmerchanteventdatapreviousattributesis_merchant_verified).

### CustomerUpdatedMerchantEvent.data fields 1.previous_attributes.merchant_id

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.merchant_id](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributesmerchant_id).

### CustomerUpdatedMerchantEvent.data fields 1.previous_attributes.metadata

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.metadata](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesmetadata).

### CustomerUpdatedMerchantEvent.data fields 1.previous_attributes.name

Declared alternatives: [ExpandedCustomerSummaryPreviousAttributes.name](../models/ExpandedCustomerSummaryPreviousAttributes.md#expandedcustomersummarypreviousattributesname).

### CustomerUpdatedMerchantEvent.data fields 1.previous_attributes.phone

Declared alternatives: [ExpandedCustomerSummaryPreviousAttributes.phone](../models/ExpandedCustomerSummaryPreviousAttributes.md#expandedcustomersummarypreviousattributesphone).

### CustomerUpdatedMerchantEvent.data fields 1.previous_attributes.price_list_id

Declared alternatives: [CustomerUpdatedMerchantEventDataPreviousAttributes.price_list_id](../models/CustomerUpdatedMerchantEventDataPreviousAttributes.md#customerupdatedmerchanteventdatapreviousattributesprice_list_id).

### CustomerUpdatedMerchantEvent.data fields 1.previous_attributes.receivables

Declared alternatives: [CustomerUpdatedMerchantEventDataPreviousAttributes.receivables](../models/CustomerUpdatedMerchantEventDataPreviousAttributes.md#customerupdatedmerchanteventdatapreviousattributesreceivables).

### CustomerUpdatedMerchantEvent.data fields 1.previous_attributes.segment

Declared alternatives: [CustomerUpdatedMerchantEventDataPreviousAttributes.segment](../models/CustomerUpdatedMerchantEventDataPreviousAttributes.md#customerupdatedmerchanteventdatapreviousattributessegment).

### CustomerUpdatedMerchantEvent.data fields 1.previous_attributes.shipping_address

Declared alternatives: [CustomerUpdatedMerchantEventDataPreviousAttributes.shipping_address](../models/CustomerUpdatedMerchantEventDataPreviousAttributes.md#customerupdatedmerchanteventdatapreviousattributesshipping_address).

### CustomerUpdatedMerchantEvent.data fields 1.previous_attributes.status

Declared alternatives: [ExpandedCustomerSummaryPreviousAttributes.status](../models/ExpandedCustomerSummaryPreviousAttributes.md#expandedcustomersummarypreviousattributesstatus).

### CustomerUpdatedMerchantEvent.data fields 1.previous_attributes.tax_exempt

Declared alternatives: [CustomerUpdatedMerchantEventDataPreviousAttributes.tax_exempt](../models/CustomerUpdatedMerchantEventDataPreviousAttributes.md#customerupdatedmerchanteventdatapreviousattributestax_exempt).

### CustomerUpdatedMerchantEvent.data fields 1.previous_attributes.test_clock_id

Declared alternatives: [CustomerUpdatedMerchantEventDataPreviousAttributes.test_clock_id](../models/CustomerUpdatedMerchantEventDataPreviousAttributes.md#customerupdatedmerchanteventdatapreviousattributestest_clock_id).

### CustomerUpdatedMerchantEvent.data fields 1.previous_attributes.updated_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### CustomerUpdatedMerchantEvent.data fields 1.previous_attributes.version

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.version](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributesversion).

