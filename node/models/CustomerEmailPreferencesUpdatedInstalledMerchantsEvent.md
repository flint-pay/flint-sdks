[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CustomerEmailPreferencesUpdatedInstalledMerchantsEvent

The `customer_email_preferences.updated` webhook payload for the `installed_merchants` event source.

Fields shared by partner webhook payloads.



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. Example: `"2026-08-02"`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `data` | Required | object | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/CustomerEmailPreferencesUpdatedInstalledMerchantsEvent.md#customeremailpreferencesupdatedinstalledmerchantseventdata). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"installed_merchants"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"customer_email_preferences.updated"`. |
| `partner_app_id` | Required | string | ID of the partner app that owns the receiving endpoint. Example: `"papp_01KEZF7C00Y8VMXYZ1GNPP3WHV"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | [WebhookEventSource](../models/WebhookEventSource.md#webhookeventsource) and object | The merchant and partner app install this event concerns, with environment details for installed-merchant events. The merchant and partner app install the event concerns. Environment fields are present for installed-merchant events. `source`: [field definitions](../models/BalanceTransactionCreatedInstalledMerchantsEvent.md#balancetransactioncreatedinstalledmerchantseventsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. Example: `"whev_01KEZF7C00362MS3HV970TRZGS"`. |

### CustomerEmailPreferencesUpdatedInstalledMerchantsEvent.data

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. `object`: [field definitions](../models/CustomerEmailPreferencesUpdatedInstalledMerchantsEvent.md#customeremailpreferencesupdatedinstalledmerchantseventdataobject). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/CustomerEmailPreferencesUpdatedInstalledMerchantsEvent.md#customeremailpreferencesupdatedinstalledmerchantseventdataprevious_attributes). |

### CustomerEmailPreferencesUpdatedInstalledMerchantsEvent.data.object

The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.

Field definitions: [shared fields](CustomerEmailPreferences.md#customeremailpreferences).

### CustomerEmailPreferencesUpdatedInstalledMerchantsEvent.data.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `checkout_reminders` | Optional | boolean or null | A reminder after leaving checkout without paying. `true` unless the buyer turned it off. Flint stops sending this email when it is `false`; if you send this kind of email yourself, do not send it either. `checkout_reminders`: [declared alternatives](../models/CustomerEmailPreferencesUpdatedInstalledMerchantsEvent.md#customeremailpreferencesupdatedinstalledmerchantseventdataprevious_attributescheckout_reminders). |
| `customer_id` | Optional | string or null or null | ID of the customer whose current email address these preferences belong to. `null` when the address has no current customer. `customer_id`: [declared alternatives](../models/CustomerEmailPreferencesUpdatedInstalledMerchantsEvent.md#customeremailpreferencesupdatedinstalledmerchantseventdataprevious_attributescustomer_id). |
| `email` | Optional | string or null | The customer's current email address. The preferences belong to this address, so they also apply to guest checkouts and other customers with the same address, and they change when the customer's email changes. On address lookup, the address as sent, trimmed. `email`: [declared alternatives](../models/CustomerEmailPreferencesUpdatedInstalledMerchantsEvent.md#customeremailpreferencesupdatedinstalledmerchantseventdataprevious_attributesemail). |
| `shipping_updates` | Optional | boolean or null | Emails about shipments and deliveries. `true` unless the buyer turned them off. Flint stops sending this email when it is `false`; if you send this kind of email yourself, do not send it either. `shipping_updates`: [declared alternatives](../models/CustomerEmailPreferencesUpdatedInstalledMerchantsEvent.md#customeremailpreferencesupdatedinstalledmerchantseventdataprevious_attributesshipping_updates). |
| `version` | Optional | integer or null or null | The customer's preference version. Advances when either category changes for this address or the customer's email address changes. `null` when the address has no current customer. `version`: [declared alternatives](../models/CustomerEmailPreferencesUpdatedInstalledMerchantsEvent.md#customeremailpreferencesupdatedinstalledmerchantseventdataprevious_attributesversion). |

### CustomerEmailPreferencesUpdatedInstalledMerchantsEvent.data.previous_attributes.checkout_reminders

### CustomerEmailPreferencesUpdatedInstalledMerchantsEvent.data.previous_attributes.checkout_reminders variant 1

anyOf variant 1: A reminder after leaving checkout without paying. `true` unless the buyer turned it off. Flint stops sending this email when it is `false`; if you send this kind of email yourself, do not send it either..

- Value shape: boolean. A reminder after leaving checkout without paying. `true` unless the buyer turned it off. Flint stops sending this email when it is `false`; if you send this kind of email yourself, do not send it either. 

### CustomerEmailPreferencesUpdatedInstalledMerchantsEvent.data.previous_attributes.checkout_reminders variant 2

anyOf variant 2.

- Value shape: null. A reminder after leaving checkout without paying. `true` unless the buyer turned it off. Flint stops sending this email when it is `false`; if you send this kind of email yourself, do not send it either. 

### CustomerEmailPreferencesUpdatedInstalledMerchantsEvent.data.previous_attributes.customer_id

### CustomerEmailPreferencesUpdatedInstalledMerchantsEvent.data.previous_attributes.customer_id variant 1

anyOf variant 1: ID of the customer whose current email address these preferences belong to. `null` when the address has no current customer..

- Value shape: (string or null). ID of the customer whose current email address these preferences belong to. `null` when the address has no current customer. ID of the customer whose current email address these preferences belong to. `null` when the address has no current customer. Example: `"cus_01KEZF7C006X9JK6NZNA2SM9XD"`. 

### CustomerEmailPreferencesUpdatedInstalledMerchantsEvent.data.previous_attributes.customer_id variant 2

anyOf variant 2.

- Value shape: null. ID of the customer whose current email address these preferences belong to. `null` when the address has no current customer. 

### CustomerEmailPreferencesUpdatedInstalledMerchantsEvent.data.previous_attributes.email

### CustomerEmailPreferencesUpdatedInstalledMerchantsEvent.data.previous_attributes.email variant 1

anyOf variant 1: The customer's current email address. The preferences belong to this address, so they also apply to guest checkouts and other customers with the same address, and they change when the customer's email changes. On address lookup, the address as sent, trimmed..

- Value shape: string. The customer's current email address. The preferences belong to this address, so they also apply to guest checkouts and other customers with the same address, and they change when the customer's email changes. On address lookup, the address as sent, trimmed. 

### CustomerEmailPreferencesUpdatedInstalledMerchantsEvent.data.previous_attributes.email variant 2

anyOf variant 2.

- Value shape: null. The customer's current email address. The preferences belong to this address, so they also apply to guest checkouts and other customers with the same address, and they change when the customer's email changes. On address lookup, the address as sent, trimmed. 

### CustomerEmailPreferencesUpdatedInstalledMerchantsEvent.data.previous_attributes.shipping_updates

### CustomerEmailPreferencesUpdatedInstalledMerchantsEvent.data.previous_attributes.shipping_updates variant 1

anyOf variant 1: Emails about shipments and deliveries. `true` unless the buyer turned them off. Flint stops sending this email when it is `false`; if you send this kind of email yourself, do not send it either..

- Value shape: boolean. Emails about shipments and deliveries. `true` unless the buyer turned them off. Flint stops sending this email when it is `false`; if you send this kind of email yourself, do not send it either. 

### CustomerEmailPreferencesUpdatedInstalledMerchantsEvent.data.previous_attributes.shipping_updates variant 2

anyOf variant 2.

- Value shape: null. Emails about shipments and deliveries. `true` unless the buyer turned them off. Flint stops sending this email when it is `false`; if you send this kind of email yourself, do not send it either. 

### CustomerEmailPreferencesUpdatedInstalledMerchantsEvent.data.previous_attributes.version

### CustomerEmailPreferencesUpdatedInstalledMerchantsEvent.data.previous_attributes.version variant 1

anyOf variant 1: The customer's preference version. Advances when either category changes for this address or the customer's email address changes. `null` when the address has no current customer..

- Value shape: (integer or null). The customer's preference version. Advances when either category changes for this address or the customer's email address changes. `null` when the address has no current customer. The customer's preference version. Advances when either category changes for this address or the customer's email address changes. `null` when the address has no current customer. Format: `uint64`. minimum: `1`. 

### CustomerEmailPreferencesUpdatedInstalledMerchantsEvent.data.previous_attributes.version variant 2

anyOf variant 2.

- Value shape: null. The customer's preference version. Advances when either category changes for this address or the customer's email address changes. `null` when the address has no current customer. 

### CustomerEmailPreferencesUpdatedInstalledMerchantsEvent.source

Field definitions: [BalanceTransactionCreatedInstalledMerchantsEvent.source](../models/BalanceTransactionCreatedInstalledMerchantsEvent.md#balancetransactioncreatedinstalledmerchantseventsource).

