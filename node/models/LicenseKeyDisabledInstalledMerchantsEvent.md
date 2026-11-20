[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## LicenseKeyDisabledInstalledMerchantsEvent

The `license_key.disabled` webhook payload for the `installed_merchants` event source.

Fields shared by partner webhook payloads.



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. Example: `"2026-08-02"`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `data` | Required | object | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/LicenseKeyDisabledInstalledMerchantsEvent.md#licensekeydisabledinstalledmerchantseventdata). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"installed_merchants"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"license_key.disabled"`. |
| `partner_app_id` | Required | string | ID of the partner app that owns the receiving endpoint. Example: `"papp_01KEZF7C00Y8VMXYZ1GNPP3WHV"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | [WebhookEventSource](../models/WebhookEventSource.md#webhookeventsource) and object | The merchant and partner app install this event concerns, with environment details for installed-merchant events. The merchant and partner app install the event concerns. Environment fields are present for installed-merchant events. `source`: [field definitions](../models/BalanceTransactionCreatedInstalledMerchantsEvent.md#balancetransactioncreatedinstalledmerchantseventsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. Example: `"whev_01KEZF7C00362MS3HV970TRZGS"`. |

### LicenseKeyDisabledInstalledMerchantsEvent.data

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `actor` | Optional | [ReturnActor](../models/ReturnActor.md#returnactor) | Who caused this event, captured when the change commits. Omitted when the event predates actor attribution or attribution is unavailable. Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID. |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. `object`: [field definitions](../models/LicenseKeyCreatedInstalledMerchantsEvent.md#licensekeycreatedinstalledmerchantseventdataobject). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/LicenseKeyDisabledInstalledMerchantsEvent.md#licensekeydisabledinstalledmerchantseventdataprevious_attributes). |

### LicenseKeyDisabledInstalledMerchantsEvent.data.object

Field definitions: [LicenseKeyCreatedInstalledMerchantsEvent.data.object](../models/LicenseKeyCreatedInstalledMerchantsEvent.md#licensekeycreatedinstalledmerchantseventdataobject).

### LicenseKeyDisabledInstalledMerchantsEvent.data.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `activation_limit` | Optional | integer or null | Maximum active installations. Null when activations are unlimited. `activation_limit`: [declared alternatives](../models/LicenseKeyDisabledInstalledMerchantsEvent.md#licensekeydisabledinstalledmerchantseventdataprevious_attributesactivation_limit). |
| `active_activation_count` | Optional | integer or null | Number of currently active installations. `active_activation_count`: [declared alternatives](../models/LicenseKeyDisabledInstalledMerchantsEvent.md#licensekeydisabledinstalledmerchantseventdataprevious_attributesactive_activation_count). |
| `created_at` | Optional | string or null | When the license key was issued. `created_at`: [declared alternatives](../models/LicenseKeyDisabledInstalledMerchantsEvent.md#licensekeydisabledinstalledmerchantseventdataprevious_attributescreated_at). |
| `customer` | Optional | [ExpandedCustomerSummaryPreviousAttributes](../models/ExpandedCustomerSummaryPreviousAttributes.md#expandedcustomersummarypreviousattributes) or null | Customer summary when requested with expand=customer. Null when the key has no customer. Omitted when no customer expansion is requested. |
| `customer_id` | Optional | string or null | The current customer of the owning order or subscription. Null when the order has no linked customer. `customer_id`: [declared alternatives](../models/LicenseKeyDisabledInstalledMerchantsEvent.md#licensekeydisabledinstalledmerchantseventdataprevious_attributescustomer_id). |
| `expires_at` | Optional | string or null | When the key expires. Null when no expiry is set. `expires_at`: [declared alternatives](../models/LicenseKeyDisabledInstalledMerchantsEvent.md#licensekeydisabledinstalledmerchantseventdataprevious_attributesexpires_at). |
| `key_last4` | Optional | string or null | Last four characters of the assigned key. Null when the key is awaiting assignment. `key_last4`: [declared alternatives](../models/LicenseKeyDisabledInstalledMerchantsEvent.md#licensekeydisabledinstalledmerchantseventdataprevious_attributeskey_last4). |
| `license_key_id` | Optional | string or null | Unique license key ID with the lk_ prefix. `license_key_id`: [declared alternatives](../models/LicenseKeyDisabledInstalledMerchantsEvent.md#licensekeydisabledinstalledmerchantseventdataprevious_attributeslicense_key_id). |
| `license_key_pool_id` | Optional | string or null | The source pool ID. Null when the key is generated. `license_key_pool_id`: [declared alternatives](../models/LicenseKeyDisabledInstalledMerchantsEvent.md#licensekeydisabledinstalledmerchantseventdataprevious_attributeslicense_key_pool_id). |
| `metadata` | Optional | [MetadataMap](../models/MetadataMap.md#metadatamap) or null | Merchant-defined key-value pairs. `metadata`: [declared alternatives](../models/LicenseKeyDisabledInstalledMerchantsEvent.md#licensekeydisabledinstalledmerchantseventdataprevious_attributesmetadata). |
| `order` | Optional | [ExpandedOrderSummaryPreviousAttributes](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributes) or null | Order summary when requested with expand=order. Null when the key has no order. Omitted when no order expansion is requested. |
| `order_id` | Optional | string or null | The owning order or the order that started the subscription. Null when a subscription has no starting order. `order_id`: [declared alternatives](../models/LicenseKeyDisabledInstalledMerchantsEvent.md#licensekeydisabledinstalledmerchantseventdataprevious_attributesorder_id). |
| `order_line_item_id` | Optional | string or null | The owning order line. Null when the key belongs to a subscription line. `order_line_item_id`: [declared alternatives](../models/LicenseKeyDisabledInstalledMerchantsEvent.md#licensekeydisabledinstalledmerchantseventdataprevious_attributesorder_line_item_id). |
| `product_id` | Optional | string or null | The product ID. `product_id`: [declared alternatives](../models/LicenseKeyDisabledInstalledMerchantsEvent.md#licensekeydisabledinstalledmerchantseventdataprevious_attributesproduct_id). |
| `restrictions` | Optional | Array of [LicenseKeyRestrictionPreviousAttributes](../models/LicenseKeyRestrictionPreviousAttributes.md#licensekeyrestrictionpreviousattributes) or null | Restrictions currently in force. `restrictions`: [declared alternatives](../models/LicenseKeyDisabledInstalledMerchantsEvent.md#licensekeydisabledinstalledmerchantseventdataprevious_attributesrestrictions). |
| `source` | Optional | string or null | How the key was supplied. Values: `"generated"`, `"pool"`. `source`: [declared alternatives](../models/LicenseKeyDisabledInstalledMerchantsEvent.md#licensekeydisabledinstalledmerchantseventdataprevious_attributessource). |
| `status` | Optional | string or null | Whether the key is usable. Expiry takes effect at expires_at. Values: `"pending"`, `"active"`, `"disabled"`, `"expired"`. `status`: [declared alternatives](../models/LicenseKeyDisabledInstalledMerchantsEvent.md#licensekeydisabledinstalledmerchantseventdataprevious_attributesstatus). |
| `subscription_id` | Optional | string or null | The owning subscription. Null when the key belongs to an order line. `subscription_id`: [declared alternatives](../models/LicenseKeyDisabledInstalledMerchantsEvent.md#licensekeydisabledinstalledmerchantseventdataprevious_attributessubscription_id). |
| `subscription_line_item_id` | Optional | string or null | The owning subscription line. Null when the key belongs to an order line. `subscription_line_item_id`: [declared alternatives](../models/LicenseKeyDisabledInstalledMerchantsEvent.md#licensekeydisabledinstalledmerchantseventdataprevious_attributessubscription_line_item_id). |
| `supported_actions` | Optional | Array of string or null | Lifecycle actions currently available for this key. Items values: `"disable"`, `"reinstate"`. `supported_actions`: [declared alternatives](../models/LicenseKeyDisabledInstalledMerchantsEvent.md#licensekeydisabledinstalledmerchantseventdataprevious_attributessupported_actions). |
| `unit_ordinal` | Optional | integer or null | The unit of the owning line, starting at 1. `unit_ordinal`: [declared alternatives](../models/LicenseKeyDisabledInstalledMerchantsEvent.md#licensekeydisabledinstalledmerchantseventdataprevious_attributesunit_ordinal). |
| `updated_at` | Optional | string or null | When the license key version last changed. `updated_at`: [declared alternatives](../models/LicenseKeyDisabledInstalledMerchantsEvent.md#licensekeydisabledinstalledmerchantseventdataprevious_attributesupdated_at). |
| `variant_id` | Optional | string or null | The product variant ID. `variant_id`: [declared alternatives](../models/LicenseKeyDisabledInstalledMerchantsEvent.md#licensekeydisabledinstalledmerchantseventdataprevious_attributesvariant_id). |
| `version` | Optional | integer or null | Persisted version of this resource's owned state. Expanded resources and external observations can change independently. `version`: [declared alternatives](../models/BuyerExpandedPaymentIntentSummaryPreviousAttributes.md#buyerexpandedpaymentintentsummarypreviousattributesversion). |

### LicenseKeyDisabledInstalledMerchantsEvent.data.previous_attributes.activation_limit

### LicenseKeyDisabledInstalledMerchantsEvent.data.previous_attributes.activation_limit variant 1

anyOf variant 1: Maximum active installations. Null when activations are unlimited..

- Value shape: integer. Maximum active installations. Null when activations are unlimited. Maximum active installations. Null when activations are unlimited. Format: `int32`. 

### LicenseKeyDisabledInstalledMerchantsEvent.data.previous_attributes.activation_limit variant 2

anyOf variant 2.

- Value shape: null. Maximum active installations. Null when activations are unlimited. 

### LicenseKeyDisabledInstalledMerchantsEvent.data.previous_attributes.active_activation_count

### LicenseKeyDisabledInstalledMerchantsEvent.data.previous_attributes.active_activation_count variant 1

anyOf variant 1: Number of currently active installations..

- Value shape: integer. Number of currently active installations. Number of currently active installations. Format: `int32`. 

### LicenseKeyDisabledInstalledMerchantsEvent.data.previous_attributes.active_activation_count variant 2

anyOf variant 2.

- Value shape: null. Number of currently active installations. 

### LicenseKeyDisabledInstalledMerchantsEvent.data.previous_attributes.created_at

### LicenseKeyDisabledInstalledMerchantsEvent.data.previous_attributes.created_at variant 1

anyOf variant 1: When the license key was issued..

- Value shape: string. When the license key was issued. When the license key was issued. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### LicenseKeyDisabledInstalledMerchantsEvent.data.previous_attributes.created_at variant 2

anyOf variant 2.

- Value shape: null. When the license key was issued. 

### LicenseKeyDisabledInstalledMerchantsEvent.data.previous_attributes.customer_id

### LicenseKeyDisabledInstalledMerchantsEvent.data.previous_attributes.customer_id variant 1

anyOf variant 1: The current customer of the owning order or subscription. Null when the order has no linked customer..

- Value shape: string. The current customer of the owning order or subscription. Null when the order has no linked customer. The current customer of the owning order or subscription. Null when the order has no linked customer. Example: `"cus_01KEZF7C006X9JK6NZNA2SM9XD"`. 

### LicenseKeyDisabledInstalledMerchantsEvent.data.previous_attributes.customer_id variant 2

anyOf variant 2.

- Value shape: null. The current customer of the owning order or subscription. Null when the order has no linked customer. 

### LicenseKeyDisabledInstalledMerchantsEvent.data.previous_attributes.expires_at

### LicenseKeyDisabledInstalledMerchantsEvent.data.previous_attributes.expires_at variant 1

anyOf variant 1: When the key expires. Null when no expiry is set..

- Value shape: string. When the key expires. Null when no expiry is set. When the key expires. Null when no expiry is set. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### LicenseKeyDisabledInstalledMerchantsEvent.data.previous_attributes.expires_at variant 2

anyOf variant 2.

- Value shape: null. When the key expires. Null when no expiry is set. 

### LicenseKeyDisabledInstalledMerchantsEvent.data.previous_attributes.key_last4

### LicenseKeyDisabledInstalledMerchantsEvent.data.previous_attributes.key_last4 variant 1

anyOf variant 1: Last four characters of the assigned key. Null when the key is awaiting assignment..

- Value shape: string. Last four characters of the assigned key. Null when the key is awaiting assignment. 

### LicenseKeyDisabledInstalledMerchantsEvent.data.previous_attributes.key_last4 variant 2

anyOf variant 2.

- Value shape: null. Last four characters of the assigned key. Null when the key is awaiting assignment. 

### LicenseKeyDisabledInstalledMerchantsEvent.data.previous_attributes.license_key_id

### LicenseKeyDisabledInstalledMerchantsEvent.data.previous_attributes.license_key_id variant 1

anyOf variant 1: Unique license key ID with the lk_ prefix..

- Value shape: string. Unique license key ID with the lk_ prefix. Unique license key ID with the lk_ prefix. Example: `"lk_01KEZF7C000QD7VJ83G43V0NSN"`. 

### LicenseKeyDisabledInstalledMerchantsEvent.data.previous_attributes.license_key_id variant 2

anyOf variant 2.

- Value shape: null. Unique license key ID with the lk_ prefix. 

### LicenseKeyDisabledInstalledMerchantsEvent.data.previous_attributes.license_key_pool_id

### LicenseKeyDisabledInstalledMerchantsEvent.data.previous_attributes.license_key_pool_id variant 1

anyOf variant 1: The source pool ID. Null when the key is generated..

- Value shape: string. The source pool ID. Null when the key is generated. The source pool ID. Null when the key is generated. Example: `"lkp_01KEZF7C00AQV1X2DPWG2NXS7H"`. 

### LicenseKeyDisabledInstalledMerchantsEvent.data.previous_attributes.license_key_pool_id variant 2

anyOf variant 2.

- Value shape: null. The source pool ID. Null when the key is generated. 

### LicenseKeyDisabledInstalledMerchantsEvent.data.previous_attributes.metadata

### LicenseKeyDisabledInstalledMerchantsEvent.data.previous_attributes.metadata variant 1

anyOf MetadataMapPreviousAttributes.

- Value shape: Map of string. Merchant-defined key-value pairs. Map values: maxLength: `4096`. 

### LicenseKeyDisabledInstalledMerchantsEvent.data.previous_attributes.metadata variant 2

anyOf variant 2.

- Value shape: null. Merchant-defined key-value pairs. 

### LicenseKeyDisabledInstalledMerchantsEvent.data.previous_attributes.order_id

### LicenseKeyDisabledInstalledMerchantsEvent.data.previous_attributes.order_id variant 1

anyOf variant 1: The owning order or the order that started the subscription. Null when a subscription has no starting order..

- Value shape: string. The owning order or the order that started the subscription. Null when a subscription has no starting order. The owning order or the order that started the subscription. Null when a subscription has no starting order. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. 

### LicenseKeyDisabledInstalledMerchantsEvent.data.previous_attributes.order_id variant 2

anyOf variant 2.

- Value shape: null. The owning order or the order that started the subscription. Null when a subscription has no starting order. 

### LicenseKeyDisabledInstalledMerchantsEvent.data.previous_attributes.order_line_item_id

### LicenseKeyDisabledInstalledMerchantsEvent.data.previous_attributes.order_line_item_id variant 1

anyOf variant 1: The owning order line. Null when the key belongs to a subscription line..

- Value shape: string. The owning order line. Null when the key belongs to a subscription line. The owning order line. Null when the key belongs to a subscription line. Example: `"li_01KEZF7C008YPRCK7VDKTGWR31"`. 

### LicenseKeyDisabledInstalledMerchantsEvent.data.previous_attributes.order_line_item_id variant 2

anyOf variant 2.

- Value shape: null. The owning order line. Null when the key belongs to a subscription line. 

### LicenseKeyDisabledInstalledMerchantsEvent.data.previous_attributes.product_id

### LicenseKeyDisabledInstalledMerchantsEvent.data.previous_attributes.product_id variant 1

anyOf variant 1: The product ID..

- Value shape: string. The product ID. The product ID. Example: `"prod_01KEZF7C00BVSHCNWVH528HB66"`. 

### LicenseKeyDisabledInstalledMerchantsEvent.data.previous_attributes.product_id variant 2

anyOf variant 2.

- Value shape: null. The product ID. 

### LicenseKeyDisabledInstalledMerchantsEvent.data.previous_attributes.restrictions

### LicenseKeyDisabledInstalledMerchantsEvent.data.previous_attributes.restrictions variant 1

anyOf variant 1: Restrictions currently in force..

- Value shape: Array of [LicenseKeyRestrictionPreviousAttributes](../models/LicenseKeyRestrictionPreviousAttributes.md#licensekeyrestrictionpreviousattributes). Restrictions currently in force. 

### LicenseKeyDisabledInstalledMerchantsEvent.data.previous_attributes.restrictions variant 2

anyOf variant 2.

- Value shape: null. Restrictions currently in force. 

### LicenseKeyDisabledInstalledMerchantsEvent.data.previous_attributes.source

### LicenseKeyDisabledInstalledMerchantsEvent.data.previous_attributes.source variant 1

anyOf variant 1: How the key was supplied..

- Value shape: string. How the key was supplied. Values: `"generated"`, `"pool"`.

### LicenseKeyDisabledInstalledMerchantsEvent.data.previous_attributes.source variant 2

anyOf variant 2.

- Value shape: null. How the key was supplied. 

### LicenseKeyDisabledInstalledMerchantsEvent.data.previous_attributes.status

### LicenseKeyDisabledInstalledMerchantsEvent.data.previous_attributes.status variant 1

anyOf variant 1: Whether the key is usable. Expiry takes effect at expires_at..

- Value shape: string. Whether the key is usable. Expiry takes effect at expires_at. Values: `"pending"`, `"active"`, `"disabled"`, `"expired"`.

### LicenseKeyDisabledInstalledMerchantsEvent.data.previous_attributes.status variant 2

anyOf variant 2.

- Value shape: null. Whether the key is usable. Expiry takes effect at expires_at. 

### LicenseKeyDisabledInstalledMerchantsEvent.data.previous_attributes.subscription_id

### LicenseKeyDisabledInstalledMerchantsEvent.data.previous_attributes.subscription_id variant 1

anyOf variant 1: The owning subscription. Null when the key belongs to an order line..

- Value shape: string. The owning subscription. Null when the key belongs to an order line. The owning subscription. Null when the key belongs to an order line. Example: `"sub_01KEZF7C00BVRE8YDBXQB74BBM"`. 

### LicenseKeyDisabledInstalledMerchantsEvent.data.previous_attributes.subscription_id variant 2

anyOf variant 2.

- Value shape: null. The owning subscription. Null when the key belongs to an order line. 

### LicenseKeyDisabledInstalledMerchantsEvent.data.previous_attributes.subscription_line_item_id

### LicenseKeyDisabledInstalledMerchantsEvent.data.previous_attributes.subscription_line_item_id variant 1

anyOf variant 1: The owning subscription line. Null when the key belongs to an order line..

- Value shape: string. The owning subscription line. Null when the key belongs to an order line. The owning subscription line. Null when the key belongs to an order line. Example: `"sli_01KEZF7C00PPWVJ2N321V84ASA"`. 

### LicenseKeyDisabledInstalledMerchantsEvent.data.previous_attributes.subscription_line_item_id variant 2

anyOf variant 2.

- Value shape: null. The owning subscription line. Null when the key belongs to an order line. 

### LicenseKeyDisabledInstalledMerchantsEvent.data.previous_attributes.supported_actions

### LicenseKeyDisabledInstalledMerchantsEvent.data.previous_attributes.supported_actions variant 1

anyOf variant 1: Lifecycle actions currently available for this key..

- Value shape: Array of string. Lifecycle actions currently available for this key. Items values: `"disable"`, `"reinstate"`.

### LicenseKeyDisabledInstalledMerchantsEvent.data.previous_attributes.supported_actions variant 2

anyOf variant 2.

- Value shape: null. Lifecycle actions currently available for this key. 

### LicenseKeyDisabledInstalledMerchantsEvent.data.previous_attributes.unit_ordinal

### LicenseKeyDisabledInstalledMerchantsEvent.data.previous_attributes.unit_ordinal variant 1

anyOf variant 1: The unit of the owning line, starting at 1..

- Value shape: integer. The unit of the owning line, starting at 1. The unit of the owning line, starting at 1. Format: `int32`. 

### LicenseKeyDisabledInstalledMerchantsEvent.data.previous_attributes.unit_ordinal variant 2

anyOf variant 2.

- Value shape: null. The unit of the owning line, starting at 1. 

### LicenseKeyDisabledInstalledMerchantsEvent.data.previous_attributes.updated_at

### LicenseKeyDisabledInstalledMerchantsEvent.data.previous_attributes.updated_at variant 1

anyOf variant 1: When the license key version last changed..

- Value shape: string. When the license key version last changed. When the license key version last changed. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### LicenseKeyDisabledInstalledMerchantsEvent.data.previous_attributes.updated_at variant 2

anyOf variant 2.

- Value shape: null. When the license key version last changed. 

### LicenseKeyDisabledInstalledMerchantsEvent.data.previous_attributes.variant_id

### LicenseKeyDisabledInstalledMerchantsEvent.data.previous_attributes.variant_id variant 1

anyOf variant 1: The product variant ID..

- Value shape: string. The product variant ID. The product variant ID. Example: `"var_01KEZF7C004GSH2KT8CNYVMHGX"`. 

### LicenseKeyDisabledInstalledMerchantsEvent.data.previous_attributes.variant_id variant 2

anyOf variant 2.

- Value shape: null. The product variant ID. 

### LicenseKeyDisabledInstalledMerchantsEvent.data.previous_attributes.version

Declared alternatives: [BuyerExpandedPaymentIntentSummaryPreviousAttributes.version](../models/BuyerExpandedPaymentIntentSummaryPreviousAttributes.md#buyerexpandedpaymentintentsummarypreviousattributesversion).

### LicenseKeyDisabledInstalledMerchantsEvent.source

Field definitions: [BalanceTransactionCreatedInstalledMerchantsEvent.source](../models/BalanceTransactionCreatedInstalledMerchantsEvent.md#balancetransactioncreatedinstalledmerchantseventsource).

