[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CustomerUpdatedInstalledMerchantsEventData

The resource snapshot recorded for this event and rendered at the delivery API version.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | [CustomerUpdatedInstalledMerchantsEventDataObject](../models/CustomerUpdatedInstalledMerchantsEventDataObject.md#customerupdatedinstalledmerchantseventdataobject) | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. |
| `previous_attributes` | Optional | [CustomerUpdatedInstalledMerchantsEventDataPreviousAttributes](../models/CustomerUpdatedInstalledMerchantsEventDataPreviousAttributes.md#customerupdatedinstalledmerchantseventdatapreviousattributes) | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/CustomerUpdatedInstalledMerchantsEventData.md#customerupdatedinstalledmerchantseventdataprevious_attributes). |

### CustomerUpdatedInstalledMerchantsEventData.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Field definitions: [shared fields](CustomerUpdatedMerchantEventData.md#customerupdatedmerchanteventdataprevious_attributes).

### CustomerUpdatedInstalledMerchantsEventData.previous_attributes.created_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### CustomerUpdatedInstalledMerchantsEventData.previous_attributes.customer_id

Declared alternatives: [CustomerUpdatedMerchantEventDataPreviousAttributes.customer_id](../models/CustomerUpdatedMerchantEventDataPreviousAttributes.md#customerupdatedmerchanteventdatapreviousattributescustomer_id).

### CustomerUpdatedInstalledMerchantsEventData.previous_attributes.default_invoice_payment_term_id

Declared alternatives: [CustomerUpdatedMerchantEventDataPreviousAttributes.default_invoice_payment_term_id](../models/CustomerUpdatedMerchantEventDataPreviousAttributes.md#customerupdatedmerchanteventdatapreviousattributesdefault_invoice_payment_term_id).

### CustomerUpdatedInstalledMerchantsEventData.previous_attributes.default_payment_method_id

Declared alternatives: [CustomerUpdatedMerchantEventDataPreviousAttributes.default_payment_method_id](../models/CustomerUpdatedMerchantEventDataPreviousAttributes.md#customerupdatedmerchanteventdatapreviousattributesdefault_payment_method_id).

### CustomerUpdatedInstalledMerchantsEventData.previous_attributes.email

Declared alternatives: [CustomerUpdatedMerchantEventDataPreviousAttributes.email](../models/CustomerUpdatedMerchantEventDataPreviousAttributes.md#customerupdatedmerchanteventdatapreviousattributesemail).

### CustomerUpdatedInstalledMerchantsEventData.previous_attributes.external_reference_id

Declared alternatives: [CustomerUpdatedMerchantEventDataPreviousAttributes.external_reference_id](../models/CustomerUpdatedMerchantEventDataPreviousAttributes.md#customerupdatedmerchanteventdatapreviousattributesexternal_reference_id).

### CustomerUpdatedInstalledMerchantsEventData.previous_attributes.internal_note

Declared alternatives: [CustomerUpdatedMerchantEventDataPreviousAttributes.internal_note](../models/CustomerUpdatedMerchantEventDataPreviousAttributes.md#customerupdatedmerchanteventdatapreviousattributesinternal_note).

### CustomerUpdatedInstalledMerchantsEventData.previous_attributes.is_merchant_verified

Declared alternatives: [CustomerUpdatedMerchantEventDataPreviousAttributes.is_merchant_verified](../models/CustomerUpdatedMerchantEventDataPreviousAttributes.md#customerupdatedmerchanteventdatapreviousattributesis_merchant_verified).

### CustomerUpdatedInstalledMerchantsEventData.previous_attributes.merchant_id

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.merchant_id](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributesmerchant_id).

### CustomerUpdatedInstalledMerchantsEventData.previous_attributes.metadata

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.metadata](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesmetadata).

### CustomerUpdatedInstalledMerchantsEventData.previous_attributes.name

Declared alternatives: [CustomerUpdatedMerchantEventDataPreviousAttributes.name](../models/CustomerUpdatedMerchantEventDataPreviousAttributes.md#customerupdatedmerchanteventdatapreviousattributesname).

### CustomerUpdatedInstalledMerchantsEventData.previous_attributes.phone

Declared alternatives: [CustomerUpdatedMerchantEventDataPreviousAttributes.phone](../models/CustomerUpdatedMerchantEventDataPreviousAttributes.md#customerupdatedmerchanteventdatapreviousattributesphone).

### CustomerUpdatedInstalledMerchantsEventData.previous_attributes.price_list_id

Declared alternatives: [CustomerUpdatedMerchantEventDataPreviousAttributes.price_list_id](../models/CustomerUpdatedMerchantEventDataPreviousAttributes.md#customerupdatedmerchanteventdatapreviousattributesprice_list_id).

### CustomerUpdatedInstalledMerchantsEventData.previous_attributes.segment

Declared alternatives: [CustomerUpdatedMerchantEventDataPreviousAttributes.segment](../models/CustomerUpdatedMerchantEventDataPreviousAttributes.md#customerupdatedmerchanteventdatapreviousattributessegment).

### CustomerUpdatedInstalledMerchantsEventData.previous_attributes.status

Declared alternatives: [CustomerUpdatedMerchantEventDataPreviousAttributes.status](../models/CustomerUpdatedMerchantEventDataPreviousAttributes.md#customerupdatedmerchanteventdatapreviousattributesstatus).

### CustomerUpdatedInstalledMerchantsEventData.previous_attributes.tax_exempt

Declared alternatives: [CustomerUpdatedMerchantEventDataPreviousAttributes.tax_exempt](../models/CustomerUpdatedMerchantEventDataPreviousAttributes.md#customerupdatedmerchanteventdatapreviousattributestax_exempt).

### CustomerUpdatedInstalledMerchantsEventData.previous_attributes.test_clock_id

Declared alternatives: [CustomerUpdatedMerchantEventDataPreviousAttributes.test_clock_id](../models/CustomerUpdatedMerchantEventDataPreviousAttributes.md#customerupdatedmerchanteventdatapreviousattributestest_clock_id).

### CustomerUpdatedInstalledMerchantsEventData.previous_attributes.updated_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### CustomerUpdatedInstalledMerchantsEventData.previous_attributes.version

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.version](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributesversion).

