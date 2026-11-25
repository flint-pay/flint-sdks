[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ShopArchivedInstalledMerchantsEvent

The `shop.archived` webhook payload for the `installed_merchants` event source.

Fields shared by partner webhook payloads.



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. Example: `"2026-08-02"`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `data` | Required | object | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/ShopArchivedInstalledMerchantsEvent.md#shoparchivedinstalledmerchantseventdata). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"installed_merchants"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"shop.archived"`. |
| `partner_app_id` | Required | string | ID of the partner app that owns the receiving endpoint. Example: `"papp_01KEZF7C00Y8VMXYZ1GNPP3WHV"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | [WebhookEventSource](../models/WebhookEventSource.md#webhookeventsource) and object | The merchant and partner app install this event concerns, with environment details for installed-merchant events. The merchant and partner app install the event concerns. Environment fields are present for installed-merchant events. `source`: [field definitions](../models/BalanceTransactionCreatedInstalledMerchantsEvent.md#balancetransactioncreatedinstalledmerchantseventsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. Example: `"whev_01KEZF7C00362MS3HV970TRZGS"`. |

### ShopArchivedInstalledMerchantsEvent.data

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `actor` | Optional | [ReturnActor](../models/ReturnActor.md#returnactor) | Who caused this event, captured when the change commits. Omitted when the event predates actor attribution or attribution is unavailable. Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID. |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. `object`: [field definitions](../models/ShopArchivedInstalledMerchantsEvent.md#shoparchivedinstalledmerchantseventdataobject). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/ShopArchivedInstalledMerchantsEvent.md#shoparchivedinstalledmerchantseventdataprevious_attributes). |

### ShopArchivedInstalledMerchantsEvent.data.object

The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.

Field definitions: [shared fields](Shop.md#shop).

### ShopArchivedInstalledMerchantsEvent.data.object.buyer_fields

Field definitions: [Shop.buyer_fields](../models/Shop.md#shopbuyer_fields).

### ShopArchivedInstalledMerchantsEvent.data.object.custom_text

Field definitions: [Shop.custom_text](../models/Shop.md#shopcustom_text).

### ShopArchivedInstalledMerchantsEvent.data.object.legal

Field definitions: [Shop.legal](../models/Shop.md#shoplegal).

### ShopArchivedInstalledMerchantsEvent.data.object.metadata

Field definitions: [CancelOrderEditResult.order.metadata](../models/CancelOrderEditResult.md#cancelordereditresultordermetadata).

### ShopArchivedInstalledMerchantsEvent.data.object.payments

Field definitions: [Shop.payments](../models/Shop.md#shoppayments).

### ShopArchivedInstalledMerchantsEvent.data.object.promotion_config

Field definitions: [Shop.promotion_config](../models/Shop.md#shoppromotion_config).

### ShopArchivedInstalledMerchantsEvent.data.object.redirects

Field definitions: [Shop.redirects](../models/Shop.md#shopredirects).

### ShopArchivedInstalledMerchantsEvent.data.object.tax

Field definitions: [Shop.tax](../models/Shop.md#shoptax).

### ShopArchivedInstalledMerchantsEvent.data.object.tip

Field definitions: [Shop.tip](../models/Shop.md#shoptip).

### ShopArchivedInstalledMerchantsEvent.data.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_fields` | Optional | [CheckoutBuyerFieldsPreviousAttributes](../models/CheckoutBuyerFieldsPreviousAttributes.md#checkoutbuyerfieldspreviousattributes) or null | Buyer information requested at checkout. Omitted when the shop has no override. |
| `checkout_session_expires_in_seconds` | Optional | integer or null | Checkout lifetime in seconds. Null when checkout settings apply. `checkout_session_expires_in_seconds`: [declared alternatives](../models/ShopArchivedInstalledMerchantsEvent.md#shoparchivedinstalledmerchantseventdataprevious_attributescheckout_session_expires_in_seconds). |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at). |
| `currency` | Optional | string or null | Listing currency. Null when the shop is empty. Uses ISO 4217 currency codes. `currency`: [declared alternatives](../models/ShopArchivedInstalledMerchantsEvent.md#shoparchivedinstalledmerchantseventdataprevious_attributescurrency). |
| `custom_text` | Optional | [CheckoutCustomTextConfigPreviousAttributes](../models/CheckoutCustomTextConfigPreviousAttributes.md#checkoutcustomtextconfigpreviousattributes) or null | Merchant text shown in checkout. Omitted when the shop has no override. |
| `delivery_method_ids` | Optional | Array of string or null | An empty array follows checkout settings. `delivery_method_ids`: [declared alternatives](../models/ShopArchivedInstalledMerchantsEvent.md#shoparchivedinstalledmerchantseventdataprevious_attributesdelivery_method_ids). |
| `description` | Optional | string or null | Shop description. Null when unset. `description`: [declared alternatives](../models/ShopArchivedInstalledMerchantsEvent.md#shoparchivedinstalledmerchantseventdataprevious_attributesdescription). |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. Null when unset. `external_reference_id`: [declared alternatives](../models/ShopArchivedInstalledMerchantsEvent.md#shoparchivedinstalledmerchantseventdataprevious_attributesexternal_reference_id). |
| `handle` | Optional | string or null | Readable address. Null when a handle has not been assigned. `handle`: [declared alternatives](../models/ShopArchivedInstalledMerchantsEvent.md#shoparchivedinstalledmerchantseventdataprevious_attributeshandle). |
| `image` | Optional | [ImageAttachmentPreviousAttributes](../models/ImageAttachmentPreviousAttributes.md#imageattachmentpreviousattributes) or null | Cover image. Null when unset. |
| `inactive_message` | Optional | string or null | Inactive message. Null when unset. `inactive_message`: [declared alternatives](../models/ShopArchivedInstalledMerchantsEvent.md#shoparchivedinstalledmerchantseventdataprevious_attributesinactive_message). |
| `inventory_routing_source` | Optional | [InventoryRoutingSourcePreviousAttributes](../models/InventoryRoutingSourcePreviousAttributes.md#inventoryroutingsourcepreviousattributes) or null | Explicit inventory routing. Null when checkout settings apply. |
| `legal` | Optional | [CheckoutLegalConfigPreviousAttributes](../models/CheckoutLegalConfigPreviousAttributes.md#checkoutlegalconfigpreviousattributes) or null | Legal policies shown to buyers. Omitted when the shop has no override. |
| `listing_count` | Optional | integer or null | The number of listings on the shop, including unavailable entries. `listing_count`: [declared alternatives](../models/ShopArchivedInstalledMerchantsEvent.md#shoparchivedinstalledmerchantseventdataprevious_attributeslisting_count). |
| `merchant_id` | Optional | string or null | ID of the merchant this resource belongs to. `merchant_id`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributesmerchant_id). |
| `metadata` | Optional | [MetadataMap](../models/MetadataMap.md#metadatamap) or null | Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules. `metadata`: [declared alternatives](../models/CheckoutSessionClosedInstalledMerchantsEvent.md#checkoutsessionclosedinstalledmerchantseventdataprevious_attributesmetadata). |
| `name` | Optional | string or null | The title buyers see on the shop. `name`: [declared alternatives](../models/ShopArchivedInstalledMerchantsEvent.md#shoparchivedinstalledmerchantseventdataprevious_attributesname). |
| `payments` | Optional | [CheckoutPaymentConfigPreviousAttributes](../models/CheckoutPaymentConfigPreviousAttributes.md#checkoutpaymentconfigpreviousattributes) or null | Payment options for the shop. Omitted when the shop has no override. |
| `promotion_config` | Optional | [CheckoutPromotionConfigPreviousAttributes](../models/CheckoutPromotionConfigPreviousAttributes.md#checkoutpromotionconfigpreviousattributes) or null | Promotion settings for shop checkouts. Omitted when the shop has no override. |
| `redirects` | Optional | [CheckoutRedirectsPreviousAttributes](../models/CheckoutRedirectsPreviousAttributes.md#checkoutredirectspreviousattributes) or null | Redirects configured for checkouts started from the shop. |
| `shop_id` | Optional | string or null | Shop ID. `shop_id`: [declared alternatives](../models/ShopArchivedInstalledMerchantsEvent.md#shoparchivedinstalledmerchantseventdataprevious_attributesshop_id). |
| `status` | Optional | string or null | Availability or retirement status. Values: `"active"`, `"inactive"`, `"archived"`. `status`: [declared alternatives](../models/ShopArchivedInstalledMerchantsEvent.md#shoparchivedinstalledmerchantseventdataprevious_attributesstatus). |
| `tax` | Optional | [SubscriptionTaxPreviousAttributes](../models/SubscriptionTaxPreviousAttributes.md#subscriptiontaxpreviousattributes) or null | Tax settings for shop checkouts. Omitted when the shop has no override. `tax`: [declared alternatives](../models/ShopArchivedInstalledMerchantsEvent.md#shoparchivedinstalledmerchantseventdataprevious_attributestax). |
| `tip` | Optional | [CheckoutTipConfigPreviousAttributes](../models/CheckoutTipConfigPreviousAttributes.md#checkouttipconfigpreviousattributes) or null | Tipping options for the shop. Omitted when the shop has no override. |
| `updated_at` | Optional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at). |
| `url` | Optional | string or null | The hosted shop address. Live shops use the merchant's healthy custom checkout hostname when available. `url`: [declared alternatives](../models/ShopArchivedInstalledMerchantsEvent.md#shoparchivedinstalledmerchantseventdataprevious_attributesurl). |
| `version` | Optional | integer or null | Persisted version of this resource's owned state. Expanded resources and external observations can change independently. `version`: [declared alternatives](../models/BuyerExpandedPaymentIntentSummaryPreviousAttributes.md#buyerexpandedpaymentintentsummarypreviousattributesversion). |

### ShopArchivedInstalledMerchantsEvent.data.previous_attributes.checkout_session_expires_in_seconds

### ShopArchivedInstalledMerchantsEvent.data.previous_attributes.checkout_session_expires_in_seconds variant 1

anyOf variant 1: Checkout lifetime in seconds. Null when checkout settings apply..

- Value shape: integer. Checkout lifetime in seconds. Null when checkout settings apply. Checkout lifetime in seconds. Null when checkout settings apply. Format: `int64`. 

### ShopArchivedInstalledMerchantsEvent.data.previous_attributes.checkout_session_expires_in_seconds variant 2

anyOf variant 2.

- Value shape: null. Checkout lifetime in seconds. Null when checkout settings apply. 

### ShopArchivedInstalledMerchantsEvent.data.previous_attributes.created_at

Declared alternatives: [ApiKeyRevokedEvent.data.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at).

### ShopArchivedInstalledMerchantsEvent.data.previous_attributes.currency

### ShopArchivedInstalledMerchantsEvent.data.previous_attributes.currency variant 1

anyOf variant 1: Listing currency. Null when the shop is empty. Uses ISO 4217 currency codes..

- Value shape: string. Listing currency. Null when the shop is empty. Uses ISO 4217 currency codes. Listing currency. Null when the shop is empty. Uses ISO 4217 currency codes. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. Example: `"USD"`. 

### ShopArchivedInstalledMerchantsEvent.data.previous_attributes.currency variant 2

anyOf variant 2.

- Value shape: null. Listing currency. Null when the shop is empty. Uses ISO 4217 currency codes. 

### ShopArchivedInstalledMerchantsEvent.data.previous_attributes.delivery_method_ids

### ShopArchivedInstalledMerchantsEvent.data.previous_attributes.delivery_method_ids variant 1

anyOf variant 1: An empty array follows checkout settings..

- Value shape: Array of string. An empty array follows checkout settings. Items: Example: `"dmet_01KEZF7C00YSG3X2D1TZJ36TM0"`. 

### ShopArchivedInstalledMerchantsEvent.data.previous_attributes.delivery_method_ids variant 2

anyOf variant 2.

- Value shape: null. An empty array follows checkout settings. 

### ShopArchivedInstalledMerchantsEvent.data.previous_attributes.description

### ShopArchivedInstalledMerchantsEvent.data.previous_attributes.description variant 1

anyOf variant 1: Shop description. Null when unset..

- Value shape: string. Shop description. Null when unset. 

### ShopArchivedInstalledMerchantsEvent.data.previous_attributes.description variant 2

anyOf variant 2.

- Value shape: null. Shop description. Null when unset. 

### ShopArchivedInstalledMerchantsEvent.data.previous_attributes.external_reference_id

### ShopArchivedInstalledMerchantsEvent.data.previous_attributes.external_reference_id variant 1

anyOf variant 1: Caller-owned identifier for this resource in an external system. Null when unset..

- Value shape: string. Caller-owned identifier for this resource in an external system. Null when unset. Caller-owned identifier for this resource in an external system. Null when unset. minLength: `1`. maxLength: `255`. Example: `"warehouse-1842"`. 

### ShopArchivedInstalledMerchantsEvent.data.previous_attributes.external_reference_id variant 2

anyOf variant 2.

- Value shape: null. Caller-owned identifier for this resource in an external system. Null when unset. 

### ShopArchivedInstalledMerchantsEvent.data.previous_attributes.handle

### ShopArchivedInstalledMerchantsEvent.data.previous_attributes.handle variant 1

anyOf variant 1: Readable address. Null when a handle has not been assigned..

- Value shape: string. Readable address. Null when a handle has not been assigned. 

### ShopArchivedInstalledMerchantsEvent.data.previous_attributes.handle variant 2

anyOf variant 2.

- Value shape: null. Readable address. Null when a handle has not been assigned. 

### ShopArchivedInstalledMerchantsEvent.data.previous_attributes.inactive_message

### ShopArchivedInstalledMerchantsEvent.data.previous_attributes.inactive_message variant 1

anyOf variant 1: Inactive message. Null when unset..

- Value shape: string. Inactive message. Null when unset. 

### ShopArchivedInstalledMerchantsEvent.data.previous_attributes.inactive_message variant 2

anyOf variant 2.

- Value shape: null. Inactive message. Null when unset. 

### ShopArchivedInstalledMerchantsEvent.data.previous_attributes.listing_count

### ShopArchivedInstalledMerchantsEvent.data.previous_attributes.listing_count variant 1

anyOf variant 1: The number of listings on the shop, including unavailable entries..

- Value shape: integer. The number of listings on the shop, including unavailable entries. The number of listings on the shop, including unavailable entries. Format: `int32`. 

### ShopArchivedInstalledMerchantsEvent.data.previous_attributes.listing_count variant 2

anyOf variant 2.

- Value shape: null. The number of listings on the shop, including unavailable entries. 

### ShopArchivedInstalledMerchantsEvent.data.previous_attributes.merchant_id

Declared alternatives: [ApiKeyRevokedEvent.data.previous_attributes.merchant_id](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributesmerchant_id).

### ShopArchivedInstalledMerchantsEvent.data.previous_attributes.metadata

Declared alternatives: [CheckoutSessionClosedInstalledMerchantsEvent.data.previous_attributes.metadata](../models/CheckoutSessionClosedInstalledMerchantsEvent.md#checkoutsessionclosedinstalledmerchantseventdataprevious_attributesmetadata).

### ShopArchivedInstalledMerchantsEvent.data.previous_attributes.name

### ShopArchivedInstalledMerchantsEvent.data.previous_attributes.name variant 1

anyOf variant 1: The title buyers see on the shop..

- Value shape: string. The title buyers see on the shop. 

### ShopArchivedInstalledMerchantsEvent.data.previous_attributes.name variant 2

anyOf variant 2.

- Value shape: null. The title buyers see on the shop. 

### ShopArchivedInstalledMerchantsEvent.data.previous_attributes.shop_id

### ShopArchivedInstalledMerchantsEvent.data.previous_attributes.shop_id variant 1

anyOf variant 1: Shop ID..

- Value shape: string. Shop ID. Shop ID. pattern: `^shop_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"shop_01KEZF7C005VQBPV4FZHDZPAHE"`. 

### ShopArchivedInstalledMerchantsEvent.data.previous_attributes.shop_id variant 2

anyOf variant 2.

- Value shape: null. Shop ID. 

### ShopArchivedInstalledMerchantsEvent.data.previous_attributes.status

### ShopArchivedInstalledMerchantsEvent.data.previous_attributes.status variant 1

anyOf variant 1: Availability or retirement status..

- Value shape: string. Availability or retirement status. Values: `"active"`, `"inactive"`, `"archived"`.

### ShopArchivedInstalledMerchantsEvent.data.previous_attributes.status variant 2

anyOf variant 2.

- Value shape: null. Availability or retirement status. 

### ShopArchivedInstalledMerchantsEvent.data.previous_attributes.tax

Tax settings for shop checkouts. Omitted when the shop has no override.

Field definitions: [shared fields](PaymentLinkUpdatedInstalledMerchantsEvent.md#paymentlinkupdatedinstalledmerchantseventdataprevious_attributestax).

### ShopArchivedInstalledMerchantsEvent.data.previous_attributes.tax variant 1

anyOf CheckoutTaxConfigPreviousAttributes.

- Optional: `calculation`, `enabled`.

### ShopArchivedInstalledMerchantsEvent.data.previous_attributes.tax variant 2

anyOf variant 2.

- Undeclared: `calculation`, `enabled`.
- Value shape: null. Tax settings for shop checkouts. Omitted when the shop has no override. 

### ShopArchivedInstalledMerchantsEvent.data.previous_attributes.tax variant 1.calculation

Declared alternatives: [PaymentLinkUpdatedInstalledMerchantsEvent.data.previous_attributes.tax variant 1.calculation](../models/PaymentLinkUpdatedInstalledMerchantsEvent.md#paymentlinkupdatedinstalledmerchantseventdataprevious_attributestax-variant-1calculation).

### ShopArchivedInstalledMerchantsEvent.data.previous_attributes.tax variant 1.enabled

Declared alternatives: [PaymentLinkUpdatedInstalledMerchantsEvent.data.previous_attributes.tax variant 1.enabled](../models/PaymentLinkUpdatedInstalledMerchantsEvent.md#paymentlinkupdatedinstalledmerchantseventdataprevious_attributestax-variant-1enabled).

### ShopArchivedInstalledMerchantsEvent.data.previous_attributes.updated_at

Declared alternatives: [ApiKeyRevokedEvent.data.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at).

### ShopArchivedInstalledMerchantsEvent.data.previous_attributes.url

### ShopArchivedInstalledMerchantsEvent.data.previous_attributes.url variant 1

anyOf variant 1: The hosted shop address. Live shops use the merchant's healthy custom checkout hostname when available..

- Value shape: string. The hosted shop address. Live shops use the merchant's healthy custom checkout hostname when available. 

### ShopArchivedInstalledMerchantsEvent.data.previous_attributes.url variant 2

anyOf variant 2.

- Value shape: null. The hosted shop address. Live shops use the merchant's healthy custom checkout hostname when available. 

### ShopArchivedInstalledMerchantsEvent.data.previous_attributes.version

Declared alternatives: [BuyerExpandedPaymentIntentSummaryPreviousAttributes.version](../models/BuyerExpandedPaymentIntentSummaryPreviousAttributes.md#buyerexpandedpaymentintentsummarypreviousattributesversion).

### ShopArchivedInstalledMerchantsEvent.source

Field definitions: [BalanceTransactionCreatedInstalledMerchantsEvent.source](../models/BalanceTransactionCreatedInstalledMerchantsEvent.md#balancetransactioncreatedinstalledmerchantseventsource).

