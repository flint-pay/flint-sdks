[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## LicenseKeyDisabledMerchantEventDataPreviousAttributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `activation_limit` | Optional | integer or null | Maximum active installations. Null when activations are unlimited. `activation_limit`: [declared alternatives](../models/LicenseKeyDisabledMerchantEventDataPreviousAttributes.md#licensekeydisabledmerchanteventdatapreviousattributesactivation_limit). |
| `active_activation_count` | Optional | integer or null | Number of currently active installations. `active_activation_count`: [declared alternatives](../models/LicenseKeyDisabledMerchantEventDataPreviousAttributes.md#licensekeydisabledmerchanteventdatapreviousattributesactive_activation_count). |
| `created_at` | Optional | string or null | When the license key was issued. `created_at`: [declared alternatives](../models/LicenseKeyDisabledMerchantEventDataPreviousAttributes.md#licensekeydisabledmerchanteventdatapreviousattributescreated_at). |
| `customer` | Optional | [ExpandedCustomerSummaryPreviousAttributes](../models/ExpandedCustomerSummaryPreviousAttributes.md#expandedcustomersummarypreviousattributes) or null | The linked customer. Present only when `expand` includes `customer`; `null` when expanded and there is no related customer. `customer`: [declared alternatives](../models/LicenseKeyDisabledMerchantEventDataPreviousAttributes.md#licensekeydisabledmerchanteventdatapreviousattributescustomer). |
| `customer_id` | Optional | string or null | The current customer of the owning order or subscription. Null when the order has no linked customer. `customer_id`: [declared alternatives](../models/LicenseKeyDisabledMerchantEventDataPreviousAttributes.md#licensekeydisabledmerchanteventdatapreviousattributescustomer_id). |
| `expires_at` | Optional | string or null | When the key expires. Null when no expiry is set. `expires_at`: [declared alternatives](../models/LicenseKeyDisabledMerchantEventDataPreviousAttributes.md#licensekeydisabledmerchanteventdatapreviousattributesexpires_at). |
| `key_last4` | Optional | string or null | Last four characters of the assigned key. Null when the key is awaiting assignment. `key_last4`: [declared alternatives](../models/LicenseKeyDisabledMerchantEventDataPreviousAttributes.md#licensekeydisabledmerchanteventdatapreviousattributeskey_last4). |
| `license_key_id` | Optional | string or null | Unique license key ID with the lk_ prefix. `license_key_id`: [declared alternatives](../models/LicenseKeyDisabledMerchantEventDataPreviousAttributes.md#licensekeydisabledmerchanteventdatapreviousattributeslicense_key_id). |
| `license_key_pool_id` | Optional | string or null | The source pool ID. Null when the key is generated. `license_key_pool_id`: [declared alternatives](../models/LicenseKeyDisabledMerchantEventDataPreviousAttributes.md#licensekeydisabledmerchanteventdatapreviousattributeslicense_key_pool_id). |
| `metadata` | Optional | Map of string or null | Merchant-defined key-value pairs. `metadata`: [declared alternatives](../models/LicenseKeyDisabledMerchantEventDataPreviousAttributes.md#licensekeydisabledmerchanteventdatapreviousattributesmetadata). |
| `order` | Optional | [ExpandedOrderSummaryPreviousAttributes](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributes) or null | The linked order. Present only when `expand` includes `order`; `null` when expanded and there is no related order. `order`: [declared alternatives](../models/LicenseKeyDisabledMerchantEventDataPreviousAttributes.md#licensekeydisabledmerchanteventdatapreviousattributesorder). |
| `order_id` | Optional | string or null | The owning order or the order that started the subscription. Null when a subscription has no starting order. `order_id`: [declared alternatives](../models/LicenseKeyDisabledMerchantEventDataPreviousAttributes.md#licensekeydisabledmerchanteventdatapreviousattributesorder_id). |
| `order_line_item_id` | Optional | string or null | The owning order line. Null when the key belongs to a subscription line. `order_line_item_id`: [declared alternatives](../models/LicenseKeyDisabledMerchantEventDataPreviousAttributes.md#licensekeydisabledmerchanteventdatapreviousattributesorder_line_item_id). |
| `product_id` | Optional | string or null | The product ID. `product_id`: [declared alternatives](../models/LicenseKeyDisabledMerchantEventDataPreviousAttributes.md#licensekeydisabledmerchanteventdatapreviousattributesproduct_id). |
| `restrictions` | Optional | Array of [LicenseKeyRestrictionPreviousAttributes](../models/LicenseKeyRestrictionPreviousAttributes.md#licensekeyrestrictionpreviousattributes) or null | Restrictions currently in force. `restrictions`: [declared alternatives](../models/LicenseKeyDisabledMerchantEventDataPreviousAttributes.md#licensekeydisabledmerchanteventdatapreviousattributesrestrictions). |
| `source` | Optional | string or null | How the key was supplied. Values: `"generated"`, `"pool"`. `source`: [declared alternatives](../models/LicenseKeyDisabledMerchantEventDataPreviousAttributes.md#licensekeydisabledmerchanteventdatapreviousattributessource). |
| `status` | Optional | string or null | Whether the key is usable. Expiry takes effect at expires_at. Values: `"pending"`, `"active"`, `"disabled"`, `"expired"`. `status`: [declared alternatives](../models/LicenseKeyDisabledMerchantEventDataPreviousAttributes.md#licensekeydisabledmerchanteventdatapreviousattributesstatus). |
| `subscription_id` | Optional | string or null | The owning subscription. Null when the key belongs to an order line. `subscription_id`: [declared alternatives](../models/LicenseKeyDisabledMerchantEventDataPreviousAttributes.md#licensekeydisabledmerchanteventdatapreviousattributessubscription_id). |
| `subscription_line_item_id` | Optional | string or null | The owning subscription line. Null when the key belongs to an order line. `subscription_line_item_id`: [declared alternatives](../models/LicenseKeyDisabledMerchantEventDataPreviousAttributes.md#licensekeydisabledmerchanteventdatapreviousattributessubscription_line_item_id). |
| `supported_actions` | Optional | Array of string or null | Lifecycle actions currently available for this key. Items values: `"disable"`, `"reinstate"`. `supported_actions`: [declared alternatives](../models/LicenseKeyDisabledMerchantEventDataPreviousAttributes.md#licensekeydisabledmerchanteventdatapreviousattributessupported_actions). |
| `unit_ordinal` | Optional | integer or null | The unit of the owning line, starting at 1. `unit_ordinal`: [declared alternatives](../models/LicenseKeyDisabledMerchantEventDataPreviousAttributes.md#licensekeydisabledmerchanteventdatapreviousattributesunit_ordinal). |
| `updated_at` | Optional | string or null | When the license key version last changed. `updated_at`: [declared alternatives](../models/LicenseKeyDisabledMerchantEventDataPreviousAttributes.md#licensekeydisabledmerchanteventdatapreviousattributesupdated_at). |
| `variant_id` | Optional | string or null | The product variant ID. `variant_id`: [declared alternatives](../models/LicenseKeyDisabledMerchantEventDataPreviousAttributes.md#licensekeydisabledmerchanteventdatapreviousattributesvariant_id). |
| `version` | Optional | integer or null | Persisted version of this resource's owned state. Expanded resources and external observations can change independently. `version`: [declared alternatives](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdata-fields-1previous_attributesversion). |

### LicenseKeyDisabledMerchantEventDataPreviousAttributes.activation_limit

### LicenseKeyDisabledMerchantEventDataPreviousAttributes.activation_limit variant 1

anyOf variant 1: Maximum active installations. Null when activations are unlimited..

- Value shape: integer. Maximum active installations. Null when activations are unlimited. Maximum active installations. Null when activations are unlimited. Format: `int32`. 

### LicenseKeyDisabledMerchantEventDataPreviousAttributes.activation_limit variant 2

anyOf variant 2.

- Value shape: null. Maximum active installations. Null when activations are unlimited. 

### LicenseKeyDisabledMerchantEventDataPreviousAttributes.active_activation_count

### LicenseKeyDisabledMerchantEventDataPreviousAttributes.active_activation_count variant 1

anyOf variant 1: Number of currently active installations..

- Value shape: integer. Number of currently active installations. Number of currently active installations. Format: `int32`. 

### LicenseKeyDisabledMerchantEventDataPreviousAttributes.active_activation_count variant 2

anyOf variant 2.

- Value shape: null. Number of currently active installations. 

### LicenseKeyDisabledMerchantEventDataPreviousAttributes.created_at

### LicenseKeyDisabledMerchantEventDataPreviousAttributes.created_at variant 1

anyOf variant 1: When the license key was issued..

- Value shape: string. When the license key was issued. When the license key was issued. Format: `date-time`. 

### LicenseKeyDisabledMerchantEventDataPreviousAttributes.created_at variant 2

anyOf variant 2.

- Value shape: null. When the license key was issued. 

### LicenseKeyDisabledMerchantEventDataPreviousAttributes.customer

The linked customer. Present only when `expand` includes `customer`; `null` when expanded and there is no related customer.

Field definitions: [shared fields](BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributescustomer).

### LicenseKeyDisabledMerchantEventDataPreviousAttributes.customer variant 1

anyOf ExpandedCustomerSummaryPreviousAttributes.

- Optional: `created_at`, `customer_id`, `email`, `name`, `phone`, `status`, `updated_at`.

### LicenseKeyDisabledMerchantEventDataPreviousAttributes.customer variant 2

anyOf variant 2.

- Undeclared: `created_at`, `customer_id`, `email`, `name`, `phone`, `status`, `updated_at`.
- Value shape: null. The linked customer. Present only when `expand` includes `customer`; `null` when expanded and there is no related customer. 

### LicenseKeyDisabledMerchantEventDataPreviousAttributes.customer variant 1.created_at

Declared alternatives: [PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.environment_grants variant 1.[] fields 1.created_at](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at).

### LicenseKeyDisabledMerchantEventDataPreviousAttributes.customer variant 1.customer_id

Declared alternatives: [BuyerRefundPreviousAttributes.customer variant 1.customer_id](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributescustomer-variant-1customer_id).

### LicenseKeyDisabledMerchantEventDataPreviousAttributes.customer variant 1.email

Declared alternatives: [ExpandedCustomerSummaryPreviousAttributes.email](../models/ExpandedCustomerSummaryPreviousAttributes.md#expandedcustomersummarypreviousattributesemail).

### LicenseKeyDisabledMerchantEventDataPreviousAttributes.customer variant 1.name

Declared alternatives: [ExpandedCustomerSummaryPreviousAttributes.name](../models/ExpandedCustomerSummaryPreviousAttributes.md#expandedcustomersummarypreviousattributesname).

### LicenseKeyDisabledMerchantEventDataPreviousAttributes.customer variant 1.phone

Declared alternatives: [ExpandedCustomerSummaryPreviousAttributes.phone](../models/ExpandedCustomerSummaryPreviousAttributes.md#expandedcustomersummarypreviousattributesphone).

### LicenseKeyDisabledMerchantEventDataPreviousAttributes.customer variant 1.status

Declared alternatives: [ExpandedCustomerSummaryPreviousAttributes.status](../models/ExpandedCustomerSummaryPreviousAttributes.md#expandedcustomersummarypreviousattributesstatus).

### LicenseKeyDisabledMerchantEventDataPreviousAttributes.customer variant 1.updated_at

Declared alternatives: [PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.environment_grants variant 1.[] fields 1.created_at](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at).

### LicenseKeyDisabledMerchantEventDataPreviousAttributes.customer_id

### LicenseKeyDisabledMerchantEventDataPreviousAttributes.customer_id variant 1

anyOf variant 1: The current customer of the owning order or subscription. Null when the order has no linked customer..

- Value shape: string. The current customer of the owning order or subscription. Null when the order has no linked customer. 

### LicenseKeyDisabledMerchantEventDataPreviousAttributes.customer_id variant 2

anyOf variant 2.

- Value shape: null. The current customer of the owning order or subscription. Null when the order has no linked customer. 

### LicenseKeyDisabledMerchantEventDataPreviousAttributes.expires_at

### LicenseKeyDisabledMerchantEventDataPreviousAttributes.expires_at variant 1

anyOf variant 1: When the key expires. Null when no expiry is set..

- Value shape: string. When the key expires. Null when no expiry is set. When the key expires. Null when no expiry is set. Format: `date-time`. 

### LicenseKeyDisabledMerchantEventDataPreviousAttributes.expires_at variant 2

anyOf variant 2.

- Value shape: null. When the key expires. Null when no expiry is set. 

### LicenseKeyDisabledMerchantEventDataPreviousAttributes.key_last4

### LicenseKeyDisabledMerchantEventDataPreviousAttributes.key_last4 variant 1

anyOf variant 1: Last four characters of the assigned key. Null when the key is awaiting assignment..

- Value shape: string. Last four characters of the assigned key. Null when the key is awaiting assignment. 

### LicenseKeyDisabledMerchantEventDataPreviousAttributes.key_last4 variant 2

anyOf variant 2.

- Value shape: null. Last four characters of the assigned key. Null when the key is awaiting assignment. 

### LicenseKeyDisabledMerchantEventDataPreviousAttributes.license_key_id

### LicenseKeyDisabledMerchantEventDataPreviousAttributes.license_key_id variant 1

anyOf variant 1: Unique license key ID with the lk_ prefix..

- Value shape: string. Unique license key ID with the lk_ prefix. 

### LicenseKeyDisabledMerchantEventDataPreviousAttributes.license_key_id variant 2

anyOf variant 2.

- Value shape: null. Unique license key ID with the lk_ prefix. 

### LicenseKeyDisabledMerchantEventDataPreviousAttributes.license_key_pool_id

### LicenseKeyDisabledMerchantEventDataPreviousAttributes.license_key_pool_id variant 1

anyOf variant 1: The source pool ID. Null when the key is generated..

- Value shape: string. The source pool ID. Null when the key is generated. 

### LicenseKeyDisabledMerchantEventDataPreviousAttributes.license_key_pool_id variant 2

anyOf variant 2.

- Value shape: null. The source pool ID. Null when the key is generated. 

### LicenseKeyDisabledMerchantEventDataPreviousAttributes.metadata

### LicenseKeyDisabledMerchantEventDataPreviousAttributes.metadata variant 1

anyOf MetadataMapPreviousAttributes.

- Value shape: Map of string. Merchant-defined key-value pairs. Map values: maxLength: `4096`. 

### LicenseKeyDisabledMerchantEventDataPreviousAttributes.metadata variant 2

anyOf variant 2.

- Value shape: null. Merchant-defined key-value pairs. 

### LicenseKeyDisabledMerchantEventDataPreviousAttributes.order

The linked order. Present only when `expand` includes `order`; `null` when expanded and there is no related order.

Field definitions: [shared fields](BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesorder).

### LicenseKeyDisabledMerchantEventDataPreviousAttributes.order variant 1

anyOf ExpandedOrderSummaryPreviousAttributes.

- Optional: `buyer_contact`, `closed_at`, `closed_reason`, `created_at`, `customer_id`, `deferred_promotions`, `fulfillment_status`, `governing_delivery_selection_id`, `order_id`, `order_number`, `paid_at`, `payment_intent_ids`, `payment_status`, `pricing_amounts`, `refund_status`, `settlement_amounts`, `status`, `supported_actions`, `updated_at`.

### LicenseKeyDisabledMerchantEventDataPreviousAttributes.order variant 2

anyOf variant 2.

- Undeclared: `buyer_contact`, `closed_at`, `closed_reason`, `created_at`, `customer_id`, `deferred_promotions`, `fulfillment_status`, `governing_delivery_selection_id`, `order_id`, `order_number`, `paid_at`, `payment_intent_ids`, `payment_status`, `pricing_amounts`, `refund_status`, `settlement_amounts`, `status`, `supported_actions`, `updated_at`.
- Value shape: null. The linked order. Present only when `expand` includes `order`; `null` when expanded and there is no related order. 

### LicenseKeyDisabledMerchantEventDataPreviousAttributes.order variant 1.buyer_contact

Declared alternatives: [ExpandedOrderSummaryPreviousAttributes.buyer_contact](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributesbuyer_contact).

### LicenseKeyDisabledMerchantEventDataPreviousAttributes.order variant 1.closed_at

Declared alternatives: [BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.order variant 1.closed_at](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesorder-variant-1closed_at).

### LicenseKeyDisabledMerchantEventDataPreviousAttributes.order variant 1.closed_reason

Declared alternatives: [ExpandedOrderSummaryPreviousAttributes.closed_reason](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributesclosed_reason).

### LicenseKeyDisabledMerchantEventDataPreviousAttributes.order variant 1.created_at

Declared alternatives: [BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.order variant 1.created_at](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesorder-variant-1created_at).

### LicenseKeyDisabledMerchantEventDataPreviousAttributes.order variant 1.customer_id

Declared alternatives: [BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.order variant 1.customer_id](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesorder-variant-1customer_id).

### LicenseKeyDisabledMerchantEventDataPreviousAttributes.order variant 1.deferred_promotions

Declared alternatives: [ExpandedOrderSummaryPreviousAttributes.deferred_promotions](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributesdeferred_promotions).

### LicenseKeyDisabledMerchantEventDataPreviousAttributes.order variant 1.fulfillment_status

Declared alternatives: [ExpandedOrderSummaryPreviousAttributes.fulfillment_status](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributesfulfillment_status).

### LicenseKeyDisabledMerchantEventDataPreviousAttributes.order variant 1.governing_delivery_selection_id

Declared alternatives: [BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.order variant 1.governing_delivery_selection_id](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesorder-variant-1governing_delivery_selection_id).

### LicenseKeyDisabledMerchantEventDataPreviousAttributes.order variant 1.order_id

Declared alternatives: [BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.order variant 1.order_id](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesorder-variant-1order_id).

### LicenseKeyDisabledMerchantEventDataPreviousAttributes.order variant 1.order_number

Declared alternatives: [ExpandedOrderSummaryPreviousAttributes.order_number](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributesorder_number).

### LicenseKeyDisabledMerchantEventDataPreviousAttributes.order variant 1.paid_at

Declared alternatives: [BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.order variant 1.paid_at](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesorder-variant-1paid_at).

### LicenseKeyDisabledMerchantEventDataPreviousAttributes.order variant 1.payment_intent_ids

Declared alternatives: [BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.order variant 1.payment_intent_ids](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesorder-variant-1payment_intent_ids).

### LicenseKeyDisabledMerchantEventDataPreviousAttributes.order variant 1.payment_status

Declared alternatives: [ExpandedOrderSummaryPreviousAttributes.payment_status](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributespayment_status).

### LicenseKeyDisabledMerchantEventDataPreviousAttributes.order variant 1.refund_status

Declared alternatives: [ExpandedOrderSummaryPreviousAttributes.refund_status](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributesrefund_status).

### LicenseKeyDisabledMerchantEventDataPreviousAttributes.order variant 1.status

Declared alternatives: [ExpandedOrderSummaryPreviousAttributes.status](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributesstatus).

### LicenseKeyDisabledMerchantEventDataPreviousAttributes.order variant 1.supported_actions

Declared alternatives: [ExpandedOrderSummaryPreviousAttributes.supported_actions](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributessupported_actions).

### LicenseKeyDisabledMerchantEventDataPreviousAttributes.order variant 1.updated_at

Declared alternatives: [BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.order variant 1.updated_at](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesorder-variant-1updated_at).

### LicenseKeyDisabledMerchantEventDataPreviousAttributes.order_id

### LicenseKeyDisabledMerchantEventDataPreviousAttributes.order_id variant 1

anyOf variant 1: The owning order or the order that started the subscription. Null when a subscription has no starting order..

- Value shape: string. The owning order or the order that started the subscription. Null when a subscription has no starting order. 

### LicenseKeyDisabledMerchantEventDataPreviousAttributes.order_id variant 2

anyOf variant 2.

- Value shape: null. The owning order or the order that started the subscription. Null when a subscription has no starting order. 

### LicenseKeyDisabledMerchantEventDataPreviousAttributes.order_line_item_id

### LicenseKeyDisabledMerchantEventDataPreviousAttributes.order_line_item_id variant 1

anyOf variant 1: The owning order line. Null when the key belongs to a subscription line..

- Value shape: string. The owning order line. Null when the key belongs to a subscription line. 

### LicenseKeyDisabledMerchantEventDataPreviousAttributes.order_line_item_id variant 2

anyOf variant 2.

- Value shape: null. The owning order line. Null when the key belongs to a subscription line. 

### LicenseKeyDisabledMerchantEventDataPreviousAttributes.product_id

### LicenseKeyDisabledMerchantEventDataPreviousAttributes.product_id variant 1

anyOf variant 1: The product ID..

- Value shape: string. The product ID. 

### LicenseKeyDisabledMerchantEventDataPreviousAttributes.product_id variant 2

anyOf variant 2.

- Value shape: null. The product ID. 

### LicenseKeyDisabledMerchantEventDataPreviousAttributes.restrictions

### LicenseKeyDisabledMerchantEventDataPreviousAttributes.restrictions variant 1

anyOf variant 1: Restrictions currently in force..

- Value shape: Array of [LicenseKeyRestrictionPreviousAttributes](../models/LicenseKeyRestrictionPreviousAttributes.md#licensekeyrestrictionpreviousattributes). Restrictions currently in force. 

### LicenseKeyDisabledMerchantEventDataPreviousAttributes.restrictions variant 2

anyOf variant 2.

- Value shape: null. Restrictions currently in force. 

### LicenseKeyDisabledMerchantEventDataPreviousAttributes.restrictions variant 1.[] fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Optional | string or null | When the restriction took effect. `created_at`: [declared alternatives](../models/LicenseKeyDisabledMerchantEventDataPreviousAttributes.md#licensekeydisabledmerchanteventdatapreviousattributesrestrictions-variant-1-fields-1created_at). |
| `dispute_id` | Optional | string or null | The dispute that restricted the key. `dispute_id`: [declared alternatives](../models/LicenseKeyDisabledMerchantEventDataPreviousAttributes.md#licensekeydisabledmerchanteventdatapreviousattributesrestrictions-variant-1-fields-1dispute_id). |
| `dispute_status` | Optional | string or null | Whether the dispute is open or lost. Values: `"open"`, `"lost"`. `dispute_status`: [declared alternatives](../models/LicenseKeyRestrictionPreviousAttributes.md#licensekeyrestrictionpreviousattributesdispute_status). |
| `reason` | Optional | string or null | Reason for a merchant or subscription restriction. `reason`: [declared alternatives](../models/LicenseKeyRestrictionPreviousAttributes.md#licensekeyrestrictionpreviousattributesreason). |
| `refund_id` | Optional | string or null | The refund that restricted the key. `refund_id`: [declared alternatives](../models/LicenseKeyDisabledMerchantEventDataPreviousAttributes.md#licensekeydisabledmerchanteventdatapreviousattributesrestrictions-variant-1-fields-1refund_id). |
| `subscription_id` | Optional | string or null | The subscription that restricted the key. `subscription_id`: [declared alternatives](../models/LicenseKeyDisabledMerchantEventDataPreviousAttributes.md#licensekeydisabledmerchanteventdatapreviousattributesrestrictions-variant-1-fields-1subscription_id). |
| `type` | Optional | string or null | What caused the restriction. Values: `"merchant"`, `"refund"`, `"dispute"`, `"subscription"`. `type`: [declared alternatives](../models/LicenseKeyRestrictionPreviousAttributes.md#licensekeyrestrictionpreviousattributestype). |

### LicenseKeyDisabledMerchantEventDataPreviousAttributes.restrictions variant 1.[] fields 1.created_at

### LicenseKeyDisabledMerchantEventDataPreviousAttributes.restrictions variant 1.[] fields 1.created_at variant 1

anyOf variant 1: When the restriction took effect..

- Value shape: string. When the restriction took effect. When the restriction took effect. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### LicenseKeyDisabledMerchantEventDataPreviousAttributes.restrictions variant 1.[] fields 1.created_at variant 2

anyOf variant 2.

- Value shape: null. When the restriction took effect. 

### LicenseKeyDisabledMerchantEventDataPreviousAttributes.restrictions variant 1.[] fields 1.dispute_id

### LicenseKeyDisabledMerchantEventDataPreviousAttributes.restrictions variant 1.[] fields 1.dispute_id variant 1

anyOf variant 1: The dispute that restricted the key..

- Value shape: string. The dispute that restricted the key. The dispute that restricted the key. Example: `"du_01KEZF7C00DEJSF1KTXRT4BBQD"`. 

### LicenseKeyDisabledMerchantEventDataPreviousAttributes.restrictions variant 1.[] fields 1.dispute_id variant 2

anyOf variant 2.

- Value shape: null. The dispute that restricted the key. 

### LicenseKeyDisabledMerchantEventDataPreviousAttributes.restrictions variant 1.[] fields 1.dispute_status

Declared alternatives: [LicenseKeyRestrictionPreviousAttributes.dispute_status](../models/LicenseKeyRestrictionPreviousAttributes.md#licensekeyrestrictionpreviousattributesdispute_status).

### LicenseKeyDisabledMerchantEventDataPreviousAttributes.restrictions variant 1.[] fields 1.reason

Declared alternatives: [LicenseKeyRestrictionPreviousAttributes.reason](../models/LicenseKeyRestrictionPreviousAttributes.md#licensekeyrestrictionpreviousattributesreason).

### LicenseKeyDisabledMerchantEventDataPreviousAttributes.restrictions variant 1.[] fields 1.refund_id

### LicenseKeyDisabledMerchantEventDataPreviousAttributes.restrictions variant 1.[] fields 1.refund_id variant 1

anyOf variant 1: The refund that restricted the key..

- Value shape: string. The refund that restricted the key. The refund that restricted the key. Example: `"ref_01KEZF7C003DTD59WKYHEXYQ1K"`. 

### LicenseKeyDisabledMerchantEventDataPreviousAttributes.restrictions variant 1.[] fields 1.refund_id variant 2

anyOf variant 2.

- Value shape: null. The refund that restricted the key. 

### LicenseKeyDisabledMerchantEventDataPreviousAttributes.restrictions variant 1.[] fields 1.subscription_id

### LicenseKeyDisabledMerchantEventDataPreviousAttributes.restrictions variant 1.[] fields 1.subscription_id variant 1

anyOf variant 1: The subscription that restricted the key..

- Value shape: string. The subscription that restricted the key. The subscription that restricted the key. Example: `"sub_01KEZF7C00BVRE8YDBXQB74BBM"`. 

### LicenseKeyDisabledMerchantEventDataPreviousAttributes.restrictions variant 1.[] fields 1.subscription_id variant 2

anyOf variant 2.

- Value shape: null. The subscription that restricted the key. 

### LicenseKeyDisabledMerchantEventDataPreviousAttributes.restrictions variant 1.[] fields 1.type

Declared alternatives: [LicenseKeyRestrictionPreviousAttributes.type](../models/LicenseKeyRestrictionPreviousAttributes.md#licensekeyrestrictionpreviousattributestype).

### LicenseKeyDisabledMerchantEventDataPreviousAttributes.source

### LicenseKeyDisabledMerchantEventDataPreviousAttributes.source variant 1

anyOf variant 1: How the key was supplied..

- Value shape: string. How the key was supplied. Values: `"generated"`, `"pool"`.

### LicenseKeyDisabledMerchantEventDataPreviousAttributes.source variant 2

anyOf variant 2.

- Value shape: null. How the key was supplied. 

### LicenseKeyDisabledMerchantEventDataPreviousAttributes.status

### LicenseKeyDisabledMerchantEventDataPreviousAttributes.status variant 1

anyOf variant 1: Whether the key is usable. Expiry takes effect at expires_at..

- Value shape: string. Whether the key is usable. Expiry takes effect at expires_at. Values: `"pending"`, `"active"`, `"disabled"`, `"expired"`.

### LicenseKeyDisabledMerchantEventDataPreviousAttributes.status variant 2

anyOf variant 2.

- Value shape: null. Whether the key is usable. Expiry takes effect at expires_at. 

### LicenseKeyDisabledMerchantEventDataPreviousAttributes.subscription_id

### LicenseKeyDisabledMerchantEventDataPreviousAttributes.subscription_id variant 1

anyOf variant 1: The owning subscription. Null when the key belongs to an order line..

- Value shape: string. The owning subscription. Null when the key belongs to an order line. 

### LicenseKeyDisabledMerchantEventDataPreviousAttributes.subscription_id variant 2

anyOf variant 2.

- Value shape: null. The owning subscription. Null when the key belongs to an order line. 

### LicenseKeyDisabledMerchantEventDataPreviousAttributes.subscription_line_item_id

### LicenseKeyDisabledMerchantEventDataPreviousAttributes.subscription_line_item_id variant 1

anyOf variant 1: The owning subscription line. Null when the key belongs to an order line..

- Value shape: string. The owning subscription line. Null when the key belongs to an order line. 

### LicenseKeyDisabledMerchantEventDataPreviousAttributes.subscription_line_item_id variant 2

anyOf variant 2.

- Value shape: null. The owning subscription line. Null when the key belongs to an order line. 

### LicenseKeyDisabledMerchantEventDataPreviousAttributes.supported_actions

### LicenseKeyDisabledMerchantEventDataPreviousAttributes.supported_actions variant 1

anyOf variant 1: Lifecycle actions currently available for this key..

- Value shape: Array of string. Lifecycle actions currently available for this key. Items values: `"disable"`, `"reinstate"`.

### LicenseKeyDisabledMerchantEventDataPreviousAttributes.supported_actions variant 2

anyOf variant 2.

- Value shape: null. Lifecycle actions currently available for this key. 

### LicenseKeyDisabledMerchantEventDataPreviousAttributes.unit_ordinal

### LicenseKeyDisabledMerchantEventDataPreviousAttributes.unit_ordinal variant 1

anyOf variant 1: The unit of the owning line, starting at 1..

- Value shape: integer. The unit of the owning line, starting at 1. The unit of the owning line, starting at 1. Format: `int32`. 

### LicenseKeyDisabledMerchantEventDataPreviousAttributes.unit_ordinal variant 2

anyOf variant 2.

- Value shape: null. The unit of the owning line, starting at 1. 

### LicenseKeyDisabledMerchantEventDataPreviousAttributes.updated_at

### LicenseKeyDisabledMerchantEventDataPreviousAttributes.updated_at variant 1

anyOf variant 1: When the license key version last changed..

- Value shape: string. When the license key version last changed. When the license key version last changed. Format: `date-time`. 

### LicenseKeyDisabledMerchantEventDataPreviousAttributes.updated_at variant 2

anyOf variant 2.

- Value shape: null. When the license key version last changed. 

### LicenseKeyDisabledMerchantEventDataPreviousAttributes.variant_id

### LicenseKeyDisabledMerchantEventDataPreviousAttributes.variant_id variant 1

anyOf variant 1: The product variant ID..

- Value shape: string. The product variant ID. 

### LicenseKeyDisabledMerchantEventDataPreviousAttributes.variant_id variant 2

anyOf variant 2.

- Value shape: null. The product variant ID. 

### LicenseKeyDisabledMerchantEventDataPreviousAttributes.version

Declared alternatives: [PaymentSplitCanceledEvent.data fields 1.previous_attributes.version](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdata-fields-1previous_attributesversion).

