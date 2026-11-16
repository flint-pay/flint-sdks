[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CustomerEmailPreferencesUpdatedMerchantEventDataPreviousAttributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `checkout_reminders` | Optional | boolean or null | A reminder after leaving checkout without paying. `true` unless the buyer turned it off. Flint stops sending this email when it is `false`; if you send this kind of email yourself, do not send it either. `checkout_reminders`: [declared alternatives](../models/CustomerEmailPreferencesUpdatedMerchantEventDataPreviousAttributes.md#customeremailpreferencesupdatedmerchanteventdatapreviousattributescheckout_reminders). |
| `customer_id` | Optional | string or null | ID of the customer whose current email address these preferences belong to. `null` when the address has no current customer. `customer_id`: [declared alternatives](../models/CustomerEmailPreferencesUpdatedMerchantEventDataPreviousAttributes.md#customeremailpreferencesupdatedmerchanteventdatapreviousattributescustomer_id). |
| `email` | Optional | string or null | The customer's current email address. The preferences belong to this address, so they also apply to guest checkouts and other customers with the same address, and they change when the customer's email changes. On address lookup, the address as sent, trimmed. `email`: [declared alternatives](../models/CustomerEmailPreferencesUpdatedMerchantEventDataPreviousAttributes.md#customeremailpreferencesupdatedmerchanteventdatapreviousattributesemail). |
| `shipping_updates` | Optional | boolean or null | Emails about shipments and deliveries. `true` unless the buyer turned them off. Flint stops sending this email when it is `false`; if you send this kind of email yourself, do not send it either. `shipping_updates`: [declared alternatives](../models/CustomerEmailPreferencesUpdatedMerchantEventDataPreviousAttributes.md#customeremailpreferencesupdatedmerchanteventdatapreviousattributesshipping_updates). |
| `version` | Optional | integer or null | The customer's preference version. Advances when either category changes for this address or the customer's email address changes. `null` when the address has no current customer. `version`: [declared alternatives](../models/CustomerEmailPreferencesUpdatedMerchantEventDataPreviousAttributes.md#customeremailpreferencesupdatedmerchanteventdatapreviousattributesversion). |

### CustomerEmailPreferencesUpdatedMerchantEventDataPreviousAttributes.checkout_reminders

### CustomerEmailPreferencesUpdatedMerchantEventDataPreviousAttributes.checkout_reminders variant 1

anyOf variant 1: A reminder after leaving checkout without paying. `true` unless the buyer turned it off. Flint stops sending this email when it is `false`; if you send this kind of email yourself, do not send it either..

- Value shape: boolean. A reminder after leaving checkout without paying. `true` unless the buyer turned it off. Flint stops sending this email when it is `false`; if you send this kind of email yourself, do not send it either. 

### CustomerEmailPreferencesUpdatedMerchantEventDataPreviousAttributes.checkout_reminders variant 2

anyOf variant 2.

- Value shape: null. A reminder after leaving checkout without paying. `true` unless the buyer turned it off. Flint stops sending this email when it is `false`; if you send this kind of email yourself, do not send it either. 

### CustomerEmailPreferencesUpdatedMerchantEventDataPreviousAttributes.customer_id

### CustomerEmailPreferencesUpdatedMerchantEventDataPreviousAttributes.customer_id variant 1

anyOf variant 1: ID of the customer whose current email address these preferences belong to. `null` when the address has no current customer..

- Value shape: string. ID of the customer whose current email address these preferences belong to. `null` when the address has no current customer. 

### CustomerEmailPreferencesUpdatedMerchantEventDataPreviousAttributes.customer_id variant 2

anyOf variant 2.

- Value shape: null. ID of the customer whose current email address these preferences belong to. `null` when the address has no current customer. 

### CustomerEmailPreferencesUpdatedMerchantEventDataPreviousAttributes.email

### CustomerEmailPreferencesUpdatedMerchantEventDataPreviousAttributes.email variant 1

anyOf variant 1: The customer's current email address. The preferences belong to this address, so they also apply to guest checkouts and other customers with the same address, and they change when the customer's email changes. On address lookup, the address as sent, trimmed..

- Value shape: string. The customer's current email address. The preferences belong to this address, so they also apply to guest checkouts and other customers with the same address, and they change when the customer's email changes. On address lookup, the address as sent, trimmed. 

### CustomerEmailPreferencesUpdatedMerchantEventDataPreviousAttributes.email variant 2

anyOf variant 2.

- Value shape: null. The customer's current email address. The preferences belong to this address, so they also apply to guest checkouts and other customers with the same address, and they change when the customer's email changes. On address lookup, the address as sent, trimmed. 

### CustomerEmailPreferencesUpdatedMerchantEventDataPreviousAttributes.shipping_updates

### CustomerEmailPreferencesUpdatedMerchantEventDataPreviousAttributes.shipping_updates variant 1

anyOf variant 1: Emails about shipments and deliveries. `true` unless the buyer turned them off. Flint stops sending this email when it is `false`; if you send this kind of email yourself, do not send it either..

- Value shape: boolean. Emails about shipments and deliveries. `true` unless the buyer turned them off. Flint stops sending this email when it is `false`; if you send this kind of email yourself, do not send it either. 

### CustomerEmailPreferencesUpdatedMerchantEventDataPreviousAttributes.shipping_updates variant 2

anyOf variant 2.

- Value shape: null. Emails about shipments and deliveries. `true` unless the buyer turned them off. Flint stops sending this email when it is `false`; if you send this kind of email yourself, do not send it either. 

### CustomerEmailPreferencesUpdatedMerchantEventDataPreviousAttributes.version

### CustomerEmailPreferencesUpdatedMerchantEventDataPreviousAttributes.version variant 1

anyOf variant 1: The customer's preference version. Advances when either category changes for this address or the customer's email address changes. `null` when the address has no current customer..

- Value shape: integer. The customer's preference version. Advances when either category changes for this address or the customer's email address changes. `null` when the address has no current customer. The customer's preference version. Advances when either category changes for this address or the customer's email address changes. `null` when the address has no current customer. Format: `uint64`. minimum: `1`. 

### CustomerEmailPreferencesUpdatedMerchantEventDataPreviousAttributes.version variant 2

anyOf variant 2.

- Value shape: null. The customer's preference version. Advances when either category changes for this address or the customer's email address changes. `null` when the address has no current customer. 

