[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ShopArchivedInstalledMerchantsEventInput

The `shop.archived` webhook payload for the `installed_merchants` event source.

Fields shared by partner webhook payloads.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. Example: `"2026-08-02"`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `data` | Required | object | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/ShopArchivedInstalledMerchantsEventInput.md#shoparchivedinstalledmerchantseventinputdata). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"installed_merchants"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"shop.archived"`. |
| `partner_app_id` | Required | string | ID of the partner app that owns the receiving endpoint. Example: `"papp_01KEZF7C00Y8VMXYZ1GNPP3WHV"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | [PartnerWebhookEnvelopeSourceInput](../models/PartnerWebhookEnvelopeSourceInput.md#partnerwebhookenvelopesourceinput) and object | The merchant and partner app install this event concerns, with environment details for installed-merchant events. The merchant and partner app install the event concerns. Environment fields are present for installed-merchant events. `source`: [field definitions](../models/BalanceTransactionCreatedInstalledMerchantsEventInput.md#balancetransactioncreatedinstalledmerchantseventinputsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. Example: `"whev_01KEZF7C00362MS3HV970TRZGS"`. |

### ShopArchivedInstalledMerchantsEventInput.data

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `actor` | Optional | [ReturnActorInput](../models/ReturnActorInput.md#returnactorinput) | Who caused this event, captured when the change commits. Omitted when the event predates actor attribution or attribution is unavailable. Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID. |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. `object`: [field definitions](../models/ShopArchivedInstalledMerchantsEventInput.md#shoparchivedinstalledmerchantseventinputdataobject). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/ShopArchivedInstalledMerchantsEventInput.md#shoparchivedinstalledmerchantseventinputdataprevious_attributes). |

### ShopArchivedInstalledMerchantsEventInput.data.object

The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.

Field definitions: [shared fields](ShopInput.md#shopinput).

### ShopArchivedInstalledMerchantsEventInput.data.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_fields` | Optional | [CheckoutBuyerFieldsPreviousAttributesInput](../models/CheckoutBuyerFieldsPreviousAttributesInput.md#checkoutbuyerfieldspreviousattributesinput) or null | Buyer information requested at checkout. Omitted when the shop has no override. |
| `checkout_session_expires_in_seconds` | Optional | integer or null | Checkout lifetime in seconds. Null when checkout settings apply. `checkout_session_expires_in_seconds`: [declared alternatives](../models/ShopArchivedInstalledMerchantsEventInput.md#shoparchivedinstalledmerchantseventinputdataprevious_attributescheckout_session_expires_in_seconds). |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at). |
| `currency` | Optional | string or null | Listing currency. Null when the shop is empty. Uses ISO 4217 currency codes. `currency`: [declared alternatives](../models/ShopArchivedInstalledMerchantsEventInput.md#shoparchivedinstalledmerchantseventinputdataprevious_attributescurrency). |
| `custom_text` | Optional | [CheckoutCustomTextConfigPreviousAttributesInput](../models/CheckoutCustomTextConfigPreviousAttributesInput.md#checkoutcustomtextconfigpreviousattributesinput) or null | Merchant text shown in checkout. Omitted when the shop has no override. |
| `delivery_method_ids` | Optional | Array of string or null | An empty array follows checkout settings. `delivery_method_ids`: [declared alternatives](../models/ShopArchivedInstalledMerchantsEventInput.md#shoparchivedinstalledmerchantseventinputdataprevious_attributesdelivery_method_ids). |
| `description` | Optional | string or null | Shop description. Null when unset. `description`: [declared alternatives](../models/ShopArchivedInstalledMerchantsEventInput.md#shoparchivedinstalledmerchantseventinputdataprevious_attributesdescription). |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. Null when unset. `external_reference_id`: [declared alternatives](../models/ShopArchivedInstalledMerchantsEventInput.md#shoparchivedinstalledmerchantseventinputdataprevious_attributesexternal_reference_id). |
| `handle` | Optional | string or null | Readable address. Null when a handle has not been assigned. `handle`: [declared alternatives](../models/ShopArchivedInstalledMerchantsEventInput.md#shoparchivedinstalledmerchantseventinputdataprevious_attributeshandle). |
| `image` | Optional | [ImageAttachmentPreviousAttributesInput](../models/ImageAttachmentPreviousAttributesInput.md#imageattachmentpreviousattributesinput) or null | Cover image. Null when unset. |
| `inactive_message` | Optional | string or null | Inactive message. Null when unset. `inactive_message`: [declared alternatives](../models/ShopArchivedInstalledMerchantsEventInput.md#shoparchivedinstalledmerchantseventinputdataprevious_attributesinactive_message). |
| `inventory_routing_source` | Optional | [InventoryRoutingSourcePreviousAttributesInput](../models/InventoryRoutingSourcePreviousAttributesInput.md#inventoryroutingsourcepreviousattributesinput) or null | Explicit inventory routing. Null when checkout settings apply. |
| `legal` | Optional | [CheckoutLegalConfigPreviousAttributesInput](../models/CheckoutLegalConfigPreviousAttributesInput.md#checkoutlegalconfigpreviousattributesinput) or null | Legal policies shown to buyers. Omitted when the shop has no override. |
| `listing_count` | Optional | integer or null | The number of listings on the shop, including unavailable entries. `listing_count`: [declared alternatives](../models/ShopArchivedInstalledMerchantsEventInput.md#shoparchivedinstalledmerchantseventinputdataprevious_attributeslisting_count). |
| `merchant_id` | Optional | string or null | ID of the merchant this resource belongs to. `merchant_id`: [declared alternatives](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributesmerchant_id). |
| `metadata` | Optional | [MetadataMapPreviousAttributesInput](../models/MetadataMapPreviousAttributesInput.md#metadatamappreviousattributesinput) or null | Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules. |
| `name` | Optional | string or null | The title buyers see on the shop. `name`: [declared alternatives](../models/ShopArchivedInstalledMerchantsEventInput.md#shoparchivedinstalledmerchantseventinputdataprevious_attributesname). |
| `payments` | Optional | [CheckoutPaymentConfigPreviousAttributesInput](../models/CheckoutPaymentConfigPreviousAttributesInput.md#checkoutpaymentconfigpreviousattributesinput) or null | Payment options for the shop. Omitted when the shop has no override. |
| `promotion_config` | Optional | [CheckoutPromotionConfigPreviousAttributesInput](../models/CheckoutPromotionConfigPreviousAttributesInput.md#checkoutpromotionconfigpreviousattributesinput) or null | Promotion settings for shop checkouts. Omitted when the shop has no override. |
| `redirects` | Optional | [CheckoutRedirectsPreviousAttributesInput](../models/CheckoutRedirectsPreviousAttributesInput.md#checkoutredirectspreviousattributesinput) or null | Redirects configured for checkouts started from the shop. |
| `shop_id` | Optional | string or null | Shop ID. `shop_id`: [declared alternatives](../models/ShopArchivedInstalledMerchantsEventInput.md#shoparchivedinstalledmerchantseventinputdataprevious_attributesshop_id). |
| `status` | Optional | string or null | Availability or retirement status. Values: `"active"`, `"inactive"`, `"archived"`. `status`: [declared alternatives](../models/ShopArchivedInstalledMerchantsEventInput.md#shoparchivedinstalledmerchantseventinputdataprevious_attributesstatus). |
| `tax` | Optional | [CheckoutTaxConfigPreviousAttributesInput](../models/CheckoutTaxConfigPreviousAttributesInput.md#checkouttaxconfigpreviousattributesinput) or null | Tax settings for shop checkouts. Omitted when the shop has no override. |
| `tip` | Optional | [CheckoutTipConfigPreviousAttributesInput](../models/CheckoutTipConfigPreviousAttributesInput.md#checkouttipconfigpreviousattributesinput) or null | Tipping options for the shop. Omitted when the shop has no override. |
| `updated_at` | Optional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at). |
| `url` | Optional | string or null | The hosted shop address. Live shops use the merchant's healthy custom checkout hostname when available. `url`: [declared alternatives](../models/ShopArchivedInstalledMerchantsEventInput.md#shoparchivedinstalledmerchantseventinputdataprevious_attributesurl). |
| `version` | Optional | integer or null | Persisted version of this resource's owned state. Expanded resources and external observations can change independently. `version`: [declared alternatives](../models/BuyerExpandedPaymentIntentSummaryPreviousAttributesInput.md#buyerexpandedpaymentintentsummarypreviousattributesinputversion). |

### ShopArchivedInstalledMerchantsEventInput.data.previous_attributes.checkout_session_expires_in_seconds

### ShopArchivedInstalledMerchantsEventInput.data.previous_attributes.checkout_session_expires_in_seconds variant 1

anyOf variant 1: Checkout lifetime in seconds. Null when checkout settings apply..

- Value shape: integer. Checkout lifetime in seconds. Null when checkout settings apply. Checkout lifetime in seconds. Null when checkout settings apply. Format: `int64`. 

### ShopArchivedInstalledMerchantsEventInput.data.previous_attributes.checkout_session_expires_in_seconds variant 2

anyOf variant 2.

- Value shape: null. Checkout lifetime in seconds. Null when checkout settings apply. 

### ShopArchivedInstalledMerchantsEventInput.data.previous_attributes.created_at

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.created_at](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at).

### ShopArchivedInstalledMerchantsEventInput.data.previous_attributes.currency

### ShopArchivedInstalledMerchantsEventInput.data.previous_attributes.currency variant 1

anyOf variant 1: Listing currency. Null when the shop is empty. Uses ISO 4217 currency codes..

- Value shape: string. Listing currency. Null when the shop is empty. Uses ISO 4217 currency codes. Listing currency. Null when the shop is empty. Uses ISO 4217 currency codes. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. Example: `"USD"`. 

### ShopArchivedInstalledMerchantsEventInput.data.previous_attributes.currency variant 2

anyOf variant 2.

- Value shape: null. Listing currency. Null when the shop is empty. Uses ISO 4217 currency codes. 

### ShopArchivedInstalledMerchantsEventInput.data.previous_attributes.delivery_method_ids

### ShopArchivedInstalledMerchantsEventInput.data.previous_attributes.delivery_method_ids variant 1

anyOf variant 1: An empty array follows checkout settings..

- Value shape: Array of string. An empty array follows checkout settings. Items: Example: `"dmet_01KEZF7C00YSG3X2D1TZJ36TM0"`. 

### ShopArchivedInstalledMerchantsEventInput.data.previous_attributes.delivery_method_ids variant 2

anyOf variant 2.

- Value shape: null. An empty array follows checkout settings. 

### ShopArchivedInstalledMerchantsEventInput.data.previous_attributes.description

### ShopArchivedInstalledMerchantsEventInput.data.previous_attributes.description variant 1

anyOf variant 1: Shop description. Null when unset..

- Value shape: string. Shop description. Null when unset. 

### ShopArchivedInstalledMerchantsEventInput.data.previous_attributes.description variant 2

anyOf variant 2.

- Value shape: null. Shop description. Null when unset. 

### ShopArchivedInstalledMerchantsEventInput.data.previous_attributes.external_reference_id

### ShopArchivedInstalledMerchantsEventInput.data.previous_attributes.external_reference_id variant 1

anyOf variant 1: Caller-owned identifier for this resource in an external system. Null when unset..

- Value shape: string. Caller-owned identifier for this resource in an external system. Null when unset. Caller-owned identifier for this resource in an external system. Null when unset. minLength: `1`. maxLength: `255`. Example: `"warehouse-1842"`. 

### ShopArchivedInstalledMerchantsEventInput.data.previous_attributes.external_reference_id variant 2

anyOf variant 2.

- Value shape: null. Caller-owned identifier for this resource in an external system. Null when unset. 

### ShopArchivedInstalledMerchantsEventInput.data.previous_attributes.handle

### ShopArchivedInstalledMerchantsEventInput.data.previous_attributes.handle variant 1

anyOf variant 1: Readable address. Null when a handle has not been assigned..

- Value shape: string. Readable address. Null when a handle has not been assigned. 

### ShopArchivedInstalledMerchantsEventInput.data.previous_attributes.handle variant 2

anyOf variant 2.

- Value shape: null. Readable address. Null when a handle has not been assigned. 

### ShopArchivedInstalledMerchantsEventInput.data.previous_attributes.inactive_message

### ShopArchivedInstalledMerchantsEventInput.data.previous_attributes.inactive_message variant 1

anyOf variant 1: Inactive message. Null when unset..

- Value shape: string. Inactive message. Null when unset. 

### ShopArchivedInstalledMerchantsEventInput.data.previous_attributes.inactive_message variant 2

anyOf variant 2.

- Value shape: null. Inactive message. Null when unset. 

### ShopArchivedInstalledMerchantsEventInput.data.previous_attributes.listing_count

### ShopArchivedInstalledMerchantsEventInput.data.previous_attributes.listing_count variant 1

anyOf variant 1: The number of listings on the shop, including unavailable entries..

- Value shape: integer. The number of listings on the shop, including unavailable entries. The number of listings on the shop, including unavailable entries. Format: `int32`. 

### ShopArchivedInstalledMerchantsEventInput.data.previous_attributes.listing_count variant 2

anyOf variant 2.

- Value shape: null. The number of listings on the shop, including unavailable entries. 

### ShopArchivedInstalledMerchantsEventInput.data.previous_attributes.merchant_id

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.merchant_id](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributesmerchant_id).

### ShopArchivedInstalledMerchantsEventInput.data.previous_attributes.name

### ShopArchivedInstalledMerchantsEventInput.data.previous_attributes.name variant 1

anyOf variant 1: The title buyers see on the shop..

- Value shape: string. The title buyers see on the shop. 

### ShopArchivedInstalledMerchantsEventInput.data.previous_attributes.name variant 2

anyOf variant 2.

- Value shape: null. The title buyers see on the shop. 

### ShopArchivedInstalledMerchantsEventInput.data.previous_attributes.shop_id

### ShopArchivedInstalledMerchantsEventInput.data.previous_attributes.shop_id variant 1

anyOf variant 1: Shop ID..

- Value shape: string. Shop ID. Shop ID. pattern: `^shop_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"shop_01KEZF7C005VQBPV4FZHDZPAHE"`. 

### ShopArchivedInstalledMerchantsEventInput.data.previous_attributes.shop_id variant 2

anyOf variant 2.

- Value shape: null. Shop ID. 

### ShopArchivedInstalledMerchantsEventInput.data.previous_attributes.status

### ShopArchivedInstalledMerchantsEventInput.data.previous_attributes.status variant 1

anyOf variant 1: Availability or retirement status..

- Value shape: string. Availability or retirement status. Values: `"active"`, `"inactive"`, `"archived"`.

### ShopArchivedInstalledMerchantsEventInput.data.previous_attributes.status variant 2

anyOf variant 2.

- Value shape: null. Availability or retirement status. 

### ShopArchivedInstalledMerchantsEventInput.data.previous_attributes.updated_at

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.created_at](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at).

### ShopArchivedInstalledMerchantsEventInput.data.previous_attributes.url

### ShopArchivedInstalledMerchantsEventInput.data.previous_attributes.url variant 1

anyOf variant 1: The hosted shop address. Live shops use the merchant's healthy custom checkout hostname when available..

- Value shape: string. The hosted shop address. Live shops use the merchant's healthy custom checkout hostname when available. 

### ShopArchivedInstalledMerchantsEventInput.data.previous_attributes.url variant 2

anyOf variant 2.

- Value shape: null. The hosted shop address. Live shops use the merchant's healthy custom checkout hostname when available. 

### ShopArchivedInstalledMerchantsEventInput.data.previous_attributes.version

Declared alternatives: [BuyerExpandedPaymentIntentSummaryPreviousAttributesInput.version](../models/BuyerExpandedPaymentIntentSummaryPreviousAttributesInput.md#buyerexpandedpaymentintentsummarypreviousattributesinputversion).

### ShopArchivedInstalledMerchantsEventInput.source

Field definitions: [BalanceTransactionCreatedInstalledMerchantsEventInput.source](../models/BalanceTransactionCreatedInstalledMerchantsEventInput.md#balancetransactioncreatedinstalledmerchantseventinputsource).

