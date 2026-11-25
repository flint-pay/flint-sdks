[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ShopArchivedMerchantEventDataPreviousAttributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_fields` | Optional | [CheckoutBuyerFieldsPreviousAttributes](../models/CheckoutBuyerFieldsPreviousAttributes.md#checkoutbuyerfieldspreviousattributes) or null | Buyer information requested at checkout. Omitted when the shop has no override. |
| `checkout_session_expires_in_seconds` | Optional | integer or null | Checkout lifetime in seconds. Null when checkout settings apply. `checkout_session_expires_in_seconds`: [declared alternatives](../models/ShopArchivedMerchantEventDataPreviousAttributes.md#shoparchivedmerchanteventdatapreviousattributescheckout_session_expires_in_seconds). |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `currency` | Optional | string or null | Listing currency. Null when the shop is empty. Uses ISO 4217 currency codes. `currency`: [declared alternatives](../models/ShopArchivedMerchantEventDataPreviousAttributes.md#shoparchivedmerchanteventdatapreviousattributescurrency). |
| `custom_text` | Optional | [CheckoutCustomTextConfigPreviousAttributes](../models/CheckoutCustomTextConfigPreviousAttributes.md#checkoutcustomtextconfigpreviousattributes) or null | Merchant text shown in checkout. Omitted when the shop has no override. |
| `delivery_method_ids` | Optional | Array of string or null | An empty array follows checkout settings. `delivery_method_ids`: [declared alternatives](../models/ShopArchivedMerchantEventDataPreviousAttributes.md#shoparchivedmerchanteventdatapreviousattributesdelivery_method_ids). |
| `description` | Optional | string or null | Shop description. Null when unset. `description`: [declared alternatives](../models/ShopArchivedMerchantEventDataPreviousAttributes.md#shoparchivedmerchanteventdatapreviousattributesdescription). |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. Null when unset. `external_reference_id`: [declared alternatives](../models/ShopArchivedMerchantEventDataPreviousAttributes.md#shoparchivedmerchanteventdatapreviousattributesexternal_reference_id). |
| `handle` | Optional | string or null | Readable address. Null when a handle has not been assigned. `handle`: [declared alternatives](../models/ShopArchivedMerchantEventDataPreviousAttributes.md#shoparchivedmerchanteventdatapreviousattributeshandle). |
| `image` | Optional | [ImageAttachmentPreviousAttributes](../models/ImageAttachmentPreviousAttributes.md#imageattachmentpreviousattributes) or null | Cover image. Null when unset. `image`: [declared alternatives](../models/ShopArchivedMerchantEventDataPreviousAttributes.md#shoparchivedmerchanteventdatapreviousattributesimage). |
| `inactive_message` | Optional | string or null | Inactive message. Null when unset. `inactive_message`: [declared alternatives](../models/ShopArchivedMerchantEventDataPreviousAttributes.md#shoparchivedmerchanteventdatapreviousattributesinactive_message). |
| `inventory_routing_source` | Optional | [InventoryRoutingSourcePreviousAttributes](../models/InventoryRoutingSourcePreviousAttributes.md#inventoryroutingsourcepreviousattributes) or null | Explicit inventory routing. Null when checkout settings apply. `inventory_routing_source`: [declared alternatives](../models/ShopArchivedMerchantEventDataPreviousAttributes.md#shoparchivedmerchanteventdatapreviousattributesinventory_routing_source). |
| `legal` | Optional | [CheckoutLegalConfigPreviousAttributes](../models/CheckoutLegalConfigPreviousAttributes.md#checkoutlegalconfigpreviousattributes) or null | Legal policies shown to buyers. Omitted when the shop has no override. |
| `listing_count` | Optional | integer or null | The number of listings on the shop, including unavailable entries. `listing_count`: [declared alternatives](../models/ShopArchivedMerchantEventDataPreviousAttributes.md#shoparchivedmerchanteventdatapreviousattributeslisting_count). |
| `merchant_id` | Optional | string or null | ID of the merchant this resource belongs to. `merchant_id`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributesmerchant_id). |
| `metadata` | Optional | Map of string or null | Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules. `metadata`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesmetadata). |
| `name` | Optional | string or null | The title buyers see on the shop. `name`: [declared alternatives](../models/ShopArchivedMerchantEventDataPreviousAttributes.md#shoparchivedmerchanteventdatapreviousattributesname). |
| `payments` | Optional | [CheckoutPaymentConfigPreviousAttributes](../models/CheckoutPaymentConfigPreviousAttributes.md#checkoutpaymentconfigpreviousattributes) or null | Payment options for the shop. Omitted when the shop has no override. |
| `promotion_config` | Optional | [CheckoutPromotionConfigPreviousAttributes](../models/CheckoutPromotionConfigPreviousAttributes.md#checkoutpromotionconfigpreviousattributes) or null | Promotion settings for shop checkouts. Omitted when the shop has no override. |
| `redirects` | Optional | [CheckoutRedirectsPreviousAttributes](../models/CheckoutRedirectsPreviousAttributes.md#checkoutredirectspreviousattributes) or null | Redirects configured for checkouts started from the shop. `redirects`: [declared alternatives](../models/ShopArchivedMerchantEventDataPreviousAttributes.md#shoparchivedmerchanteventdatapreviousattributesredirects). |
| `shop_id` | Optional | string or null | Shop ID. `shop_id`: [declared alternatives](../models/ShopArchivedMerchantEventDataPreviousAttributes.md#shoparchivedmerchanteventdatapreviousattributesshop_id). |
| `status` | Optional | string or null | Availability or retirement status. Values: `"active"`, `"inactive"`, `"archived"`. `status`: [declared alternatives](../models/ShopArchivedMerchantEventDataPreviousAttributes.md#shoparchivedmerchanteventdatapreviousattributesstatus). |
| `tax` | Optional | [CheckoutTaxConfigPreviousAttributes](../models/CheckoutTaxConfigPreviousAttributes.md#checkouttaxconfigpreviousattributes) or null | Tax settings for shop checkouts. Omitted when the shop has no override. |
| `tip` | Optional | [CheckoutTipConfigPreviousAttributes](../models/CheckoutTipConfigPreviousAttributes.md#checkouttipconfigpreviousattributes) or null | Tipping options for the shop. Omitted when the shop has no override. |
| `updated_at` | Optional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `url` | Optional | string or null | The hosted shop address. Live shops use the merchant's healthy custom checkout hostname when available. `url`: [declared alternatives](../models/ShopArchivedMerchantEventDataPreviousAttributes.md#shoparchivedmerchanteventdatapreviousattributesurl). |
| `version` | Optional | integer or null | Persisted version of this resource's owned state. Expanded resources and external observations can change independently. `version`: [declared alternatives](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdata-fields-1previous_attributesversion). |

### ShopArchivedMerchantEventDataPreviousAttributes.checkout_session_expires_in_seconds

### ShopArchivedMerchantEventDataPreviousAttributes.checkout_session_expires_in_seconds variant 1

anyOf variant 1: Checkout lifetime in seconds. Null when checkout settings apply..

- Value shape: integer. Checkout lifetime in seconds. Null when checkout settings apply. Checkout lifetime in seconds. Null when checkout settings apply. Format: `int64`. 

### ShopArchivedMerchantEventDataPreviousAttributes.checkout_session_expires_in_seconds variant 2

anyOf variant 2.

- Value shape: null. Checkout lifetime in seconds. Null when checkout settings apply. 

### ShopArchivedMerchantEventDataPreviousAttributes.created_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### ShopArchivedMerchantEventDataPreviousAttributes.currency

### ShopArchivedMerchantEventDataPreviousAttributes.currency variant 1

anyOf variant 1: Listing currency. Null when the shop is empty. Uses ISO 4217 currency codes..

- Value shape: string. Listing currency. Null when the shop is empty. Uses ISO 4217 currency codes. Listing currency. Null when the shop is empty. Uses ISO 4217 currency codes. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. 

### ShopArchivedMerchantEventDataPreviousAttributes.currency variant 2

anyOf variant 2.

- Value shape: null. Listing currency. Null when the shop is empty. Uses ISO 4217 currency codes. 

### ShopArchivedMerchantEventDataPreviousAttributes.delivery_method_ids

### ShopArchivedMerchantEventDataPreviousAttributes.delivery_method_ids variant 1

anyOf variant 1: An empty array follows checkout settings..

- Value shape: Array of string. An empty array follows checkout settings. 

### ShopArchivedMerchantEventDataPreviousAttributes.delivery_method_ids variant 2

anyOf variant 2.

- Value shape: null. An empty array follows checkout settings. 

### ShopArchivedMerchantEventDataPreviousAttributes.description

### ShopArchivedMerchantEventDataPreviousAttributes.description variant 1

anyOf variant 1: Shop description. Null when unset..

- Value shape: string. Shop description. Null when unset. 

### ShopArchivedMerchantEventDataPreviousAttributes.description variant 2

anyOf variant 2.

- Value shape: null. Shop description. Null when unset. 

### ShopArchivedMerchantEventDataPreviousAttributes.external_reference_id

### ShopArchivedMerchantEventDataPreviousAttributes.external_reference_id variant 1

anyOf variant 1: Caller-owned identifier for this resource in an external system. Null when unset..

- Value shape: string. Caller-owned identifier for this resource in an external system. Null when unset. Caller-owned identifier for this resource in an external system. Null when unset. minLength: `1`. maxLength: `255`. 

### ShopArchivedMerchantEventDataPreviousAttributes.external_reference_id variant 2

anyOf variant 2.

- Value shape: null. Caller-owned identifier for this resource in an external system. Null when unset. 

### ShopArchivedMerchantEventDataPreviousAttributes.handle

### ShopArchivedMerchantEventDataPreviousAttributes.handle variant 1

anyOf variant 1: Readable address. Null when a handle has not been assigned..

- Value shape: string. Readable address. Null when a handle has not been assigned. 

### ShopArchivedMerchantEventDataPreviousAttributes.handle variant 2

anyOf variant 2.

- Value shape: null. Readable address. Null when a handle has not been assigned. 

### ShopArchivedMerchantEventDataPreviousAttributes.image

Cover image. Null when unset.

Field definitions: [shared fields](MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.md#merchantreadinessupdatedmerchanteventdatapreviousattributesicon).

### ShopArchivedMerchantEventDataPreviousAttributes.image variant 1

anyOf ImageAttachmentPreviousAttributes.

- Optional: `alt`, `file_id`, `height`, `source_reference`, `url`, `width`.

### ShopArchivedMerchantEventDataPreviousAttributes.image variant 2

anyOf variant 2.

- Undeclared: `alt`, `file_id`, `height`, `source_reference`, `url`, `width`.
- Value shape: null. Cover image. Null when unset. 

### ShopArchivedMerchantEventDataPreviousAttributes.image variant 1.alt

Declared alternatives: [ImageAttachmentPreviousAttributes.alt](../models/ImageAttachmentPreviousAttributes.md#imageattachmentpreviousattributesalt).

### ShopArchivedMerchantEventDataPreviousAttributes.image variant 1.file_id

Declared alternatives: [BundleArchivedMerchantEventDataPreviousAttributes.images variant 1.[] fields 1.file_id](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributesimages-variant-1-fields-1file_id).

### ShopArchivedMerchantEventDataPreviousAttributes.image variant 1.height

Declared alternatives: [ImageAttachmentPreviousAttributes.height](../models/ImageAttachmentPreviousAttributes.md#imageattachmentpreviousattributesheight).

### ShopArchivedMerchantEventDataPreviousAttributes.image variant 1.source_reference

Declared alternatives: [ImageAttachmentPreviousAttributes.source_reference](../models/ImageAttachmentPreviousAttributes.md#imageattachmentpreviousattributessource_reference).

### ShopArchivedMerchantEventDataPreviousAttributes.image variant 1.url

Declared alternatives: [ImageAttachmentPreviousAttributes.url](../models/ImageAttachmentPreviousAttributes.md#imageattachmentpreviousattributesurl).

### ShopArchivedMerchantEventDataPreviousAttributes.image variant 1.width

Declared alternatives: [ImageAttachmentPreviousAttributes.width](../models/ImageAttachmentPreviousAttributes.md#imageattachmentpreviousattributeswidth).

### ShopArchivedMerchantEventDataPreviousAttributes.inactive_message

### ShopArchivedMerchantEventDataPreviousAttributes.inactive_message variant 1

anyOf variant 1: Inactive message. Null when unset..

- Value shape: string. Inactive message. Null when unset. 

### ShopArchivedMerchantEventDataPreviousAttributes.inactive_message variant 2

anyOf variant 2.

- Value shape: null. Inactive message. Null when unset. 

### ShopArchivedMerchantEventDataPreviousAttributes.inventory_routing_source

Explicit inventory routing. Null when checkout settings apply.

Field definitions: [shared fields](InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.md#inventoryreservationactionrequiredmerchanteventdatapreviousattributesinventory_routing_source).

### ShopArchivedMerchantEventDataPreviousAttributes.inventory_routing_source variant 1

anyOf InventoryRoutingSourcePreviousAttributes.

- Optional: `inventory_allocation_policy_id`, `inventory_allocation_policy_revision_id`, `location_id`, `type`.

### ShopArchivedMerchantEventDataPreviousAttributes.inventory_routing_source variant 2

anyOf variant 2.

- Undeclared: `inventory_allocation_policy_id`, `inventory_allocation_policy_revision_id`, `location_id`, `type`.
- Value shape: null. Explicit inventory routing. Null when checkout settings apply. 

### ShopArchivedMerchantEventDataPreviousAttributes.inventory_routing_source variant 1.inventory_allocation_policy_id

Declared alternatives: [InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.inventory_routing_source variant 1.inventory_allocation_policy_id](../models/InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.md#inventoryreservationactionrequiredmerchanteventdatapreviousattributesinventory_routing_source-variant-1inventory_allocation_policy_id).

### ShopArchivedMerchantEventDataPreviousAttributes.inventory_routing_source variant 1.inventory_allocation_policy_revision_id

Declared alternatives: [InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.inventory_routing_source variant 1.inventory_allocation_policy_revision_id](../models/InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.md#inventoryreservationactionrequiredmerchanteventdatapreviousattributesinventory_routing_source-variant-1inventory_allocation_policy_revision_id).

### ShopArchivedMerchantEventDataPreviousAttributes.inventory_routing_source variant 1.location_id

Declared alternatives: [InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.inventory_routing_source variant 1.location_id](../models/InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.md#inventoryreservationactionrequiredmerchanteventdatapreviousattributesinventory_routing_source-variant-1location_id).

### ShopArchivedMerchantEventDataPreviousAttributes.inventory_routing_source variant 1.type

Declared alternatives: [InventoryRoutingSourcePreviousAttributes.type](../models/InventoryRoutingSourcePreviousAttributes.md#inventoryroutingsourcepreviousattributestype).

### ShopArchivedMerchantEventDataPreviousAttributes.listing_count

### ShopArchivedMerchantEventDataPreviousAttributes.listing_count variant 1

anyOf variant 1: The number of listings on the shop, including unavailable entries..

- Value shape: integer. The number of listings on the shop, including unavailable entries. The number of listings on the shop, including unavailable entries. Format: `int32`. 

### ShopArchivedMerchantEventDataPreviousAttributes.listing_count variant 2

anyOf variant 2.

- Value shape: null. The number of listings on the shop, including unavailable entries. 

### ShopArchivedMerchantEventDataPreviousAttributes.merchant_id

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.merchant_id](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributesmerchant_id).

### ShopArchivedMerchantEventDataPreviousAttributes.metadata

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.metadata](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesmetadata).

### ShopArchivedMerchantEventDataPreviousAttributes.name

### ShopArchivedMerchantEventDataPreviousAttributes.name variant 1

anyOf variant 1: The title buyers see on the shop..

- Value shape: string. The title buyers see on the shop. 

### ShopArchivedMerchantEventDataPreviousAttributes.name variant 2

anyOf variant 2.

- Value shape: null. The title buyers see on the shop. 

### ShopArchivedMerchantEventDataPreviousAttributes.redirects

Redirects configured for checkouts started from the shop.

Field definitions: [shared fields](CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesredirects).

### ShopArchivedMerchantEventDataPreviousAttributes.redirects variant 1

anyOf CheckoutRedirectsPreviousAttributes.

- Optional: `cancel_url`, `expired_url`, `success_url`.

### ShopArchivedMerchantEventDataPreviousAttributes.redirects variant 2

anyOf variant 2.

- Undeclared: `cancel_url`, `expired_url`, `success_url`.
- Value shape: null. Redirects configured for checkouts started from the shop. 

### ShopArchivedMerchantEventDataPreviousAttributes.redirects variant 1.cancel_url

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.redirects variant 1.cancel_url](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesredirects-variant-1cancel_url).

### ShopArchivedMerchantEventDataPreviousAttributes.redirects variant 1.expired_url

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.redirects variant 1.expired_url](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesredirects-variant-1expired_url).

### ShopArchivedMerchantEventDataPreviousAttributes.redirects variant 1.success_url

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.redirects variant 1.success_url](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesredirects-variant-1success_url).

### ShopArchivedMerchantEventDataPreviousAttributes.shop_id

### ShopArchivedMerchantEventDataPreviousAttributes.shop_id variant 1

anyOf variant 1: Shop ID..

- Value shape: string. Shop ID. Shop ID. pattern: `^shop_[0-9A-HJKMNP-TV-Z]{26}$`. 

### ShopArchivedMerchantEventDataPreviousAttributes.shop_id variant 2

anyOf variant 2.

- Value shape: null. Shop ID. 

### ShopArchivedMerchantEventDataPreviousAttributes.status

### ShopArchivedMerchantEventDataPreviousAttributes.status variant 1

anyOf variant 1: Availability or retirement status..

- Value shape: string. Availability or retirement status. Values: `"active"`, `"inactive"`, `"archived"`.

### ShopArchivedMerchantEventDataPreviousAttributes.status variant 2

anyOf variant 2.

- Value shape: null. Availability or retirement status. 

### ShopArchivedMerchantEventDataPreviousAttributes.updated_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### ShopArchivedMerchantEventDataPreviousAttributes.url

### ShopArchivedMerchantEventDataPreviousAttributes.url variant 1

anyOf variant 1: The hosted shop address. Live shops use the merchant's healthy custom checkout hostname when available..

- Value shape: string. The hosted shop address. Live shops use the merchant's healthy custom checkout hostname when available. 

### ShopArchivedMerchantEventDataPreviousAttributes.url variant 2

anyOf variant 2.

- Value shape: null. The hosted shop address. Live shops use the merchant's healthy custom checkout hostname when available. 

### ShopArchivedMerchantEventDataPreviousAttributes.version

Declared alternatives: [PaymentSplitCanceledEvent.data fields 1.previous_attributes.version](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdata-fields-1previous_attributesversion).

