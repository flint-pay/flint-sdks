[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentLinkUpdatedMerchantEventDataPreviousAttributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_fields` | Optional | [CheckoutBuyerFields](../models/CheckoutBuyerFields.md#checkoutbuyerfields) or null | What checkout asks the buyer for. Each field you leave out uses your checkout settings. |
| `checkout_session_expires_in_seconds` | Optional | integer or null | Seconds each checkout session the link starts stays open, from 60 to 86,400. Omit it to use your checkout settings, or 24 hours. It doesn't end the link; use sales_end_at for that. `checkout_session_expires_in_seconds`: [declared alternatives](../models/PaymentLinkUpdatedMerchantEventDataPreviousAttributes.md#paymentlinkupdatedmerchanteventdatapreviousattributescheckout_session_expires_in_seconds). |
| `completed_count` | Optional | integer or null | Number of paid checkout sessions started from this link. `completed_count`: [declared alternatives](../models/PaymentLinkUpdatedMerchantEventDataPreviousAttributes.md#paymentlinkupdatedmerchanteventdatapreviousattributescompleted_count). |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `custom_fields` | Optional | Array of [PaymentLinkCustomField](../models/PaymentLinkCustomField.md#paymentlinkcustomfield) or null | Questions buyers answer before paying. Answers are recorded on the order and checkout session in `custom_field_answers`. `custom_fields`: [declared alternatives](../models/PaymentLinkUpdatedMerchantEventDataPreviousAttributes.md#paymentlinkupdatedmerchanteventdatapreviousattributescustom_fields). |
| `custom_text` | Optional | [CheckoutCustomTextConfig](../models/CheckoutCustomTextConfig.md#checkoutcustomtextconfig) or null | Custom text for checkouts started from this link. |
| `delivery_method_ids` | Optional | Array of string or null | Delivery methods the link offers. Empty when the link has none, and then its checkouts offer settings.checkout.default_delivery_method_ids when the order has items to deliver. `delivery_method_ids`: [declared alternatives](../models/PaymentLinkUpdatedMerchantEventDataPreviousAttributes.md#paymentlinkupdatedmerchanteventdatapreviousattributesdelivery_method_ids). |
| `description` | Optional | string or null | Text about what the link sells, returned to buyers when they open it. `description`: [declared alternatives](../models/PaymentLinkUpdatedMerchantEventDataPreviousAttributes.md#paymentlinkupdatedmerchanteventdatapreviousattributesdescription). |
| `donation_max_amount_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) or null | Largest amount a buyer can give on a donation link. |
| `donation_min_amount_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) or null | Smallest amount a buyer can give on a donation link. |
| `donation_suggested_amount_money_options` | Optional | Array of [MoneyValue](../models/MoneyValue.md#moneyvalue) or null | Amounts a donation link offers as one-tap choices. `donation_suggested_amount_money_options`: [declared alternatives](../models/PaymentLinkUpdatedMerchantEventDataPreviousAttributes.md#paymentlinkupdatedmerchanteventdatapreviousattributesdonation_suggested_amount_money_options). |
| `event_config` | Optional | [PaymentLinkEventConfig](../models/PaymentLinkEventConfig.md#paymentlinkeventconfig) or null | Event details for an `event` link: when and where it takes place and how many tickets it sells. |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. `external_reference_id`: [declared alternatives](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdata-fields-1previous_attributesexternal_reference_id). |
| `image` | Optional | [ImageAttachment](../models/ImageAttachment.md#imageattachment) or null | Image shown to buyers with the link. |
| `inactive_message` | Optional | string or null | Message to show the buyer when the link is inactive. `inactive_message`: [declared alternatives](../models/PaymentLinkUpdatedMerchantEventDataPreviousAttributes.md#paymentlinkupdatedmerchanteventdatapreviousattributesinactive_message). |
| `inventory_routing_source` | Optional | [InventoryRoutingSource](../models/InventoryRoutingSource.md#inventoryroutingsource) or null | The inventory location or routing policy that supplies stock for the link's catalog lines. |
| `legal` | Optional | [CheckoutLegalConfig](../models/CheckoutLegalConfig.md#checkoutlegalconfig) or null | The terms and policy links checkouts started from this link show the buyer. |
| `line_items` | Optional | Array of (object and Alternative shapes (see declared variants)) or null | What the link sells. `line_items`: [declared alternatives](../models/PaymentLinkUpdatedMerchantEventDataPreviousAttributes.md#paymentlinkupdatedmerchanteventdatapreviousattributesline_items). |
| `max_completions` | Optional | integer or null | Most payments the link accepts, counted by `completed_count`. Absent means no limit. Once the limit is reached, resolving the link fails with a request error. It can't be set below `completed_count`. `max_completions`: [declared alternatives](../models/PaymentLinkUpdatedMerchantEventDataPreviousAttributes.md#paymentlinkupdatedmerchanteventdatapreviousattributesmax_completions). |
| `merchant_id` | Optional | string or null | ID of the merchant this resource belongs to. `merchant_id`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributesmerchant_id). |
| `metadata` | Optional | Map of string or null | Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules. `metadata`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesmetadata). |
| `name` | Optional | string or null | Name of the payment link. `name`: [declared alternatives](../models/PaymentLinkUpdatedMerchantEventDataPreviousAttributes.md#paymentlinkupdatedmerchanteventdatapreviousattributesname). |
| `payment_link_id` | Optional | string or null | Unique identifier for this payment link, prefixed `pl_`. `payment_link_id`: [declared alternatives](../models/PaymentLinkUpdatedMerchantEventDataPreviousAttributes.md#paymentlinkupdatedmerchanteventdatapreviousattributespayment_link_id). |
| `payment_link_type` | Optional | string or null | What kind of link this is. Values: `"standard"`, `"donation"`, `"event"`. `payment_link_type`: [declared alternatives](../models/PaymentLinkUpdatedMerchantEventDataPreviousAttributes.md#paymentlinkupdatedmerchanteventdatapreviousattributespayment_link_type). |
| `payments` | Optional | [CheckoutPaymentConfig](../models/CheckoutPaymentConfig.md#checkoutpaymentconfig) or null | Payment options for checkouts started from this link. |
| `promotion_config` | Optional | [CheckoutPromotionConfig](../models/CheckoutPromotionConfig.md#checkoutpromotionconfig) or null | Whether automatic promotions apply to checkouts started from this link and whether buyers can enter promotion codes. |
| `redirects` | Optional | [CheckoutRedirects](../models/CheckoutRedirects.md#checkoutredirects) or null | Where checkout sessions started from this payment link send the buyer after payment, cancellation, or expiration. |
| `sales_end_at` | Optional | string or null | RFC3339 timestamp after which the link stops starting checkouts and resolve fails with `ACTION_NOT_ALLOWED` and reason `not_offered`. Unset means sales do not end on their own, except that an event link without sales_end_at stops selling at event_config.event_at. A checkout opened before the end can still start payment for up to 15 minutes after it. `sales_end_at`: [declared alternatives](../models/PaymentLinkUpdatedMerchantEventDataPreviousAttributes.md#paymentlinkupdatedmerchanteventdatapreviousattributessales_end_at). |
| `sales_summary` | Optional | [PaymentLinkSalesSummary](../models/PaymentLinkSalesSummary.md#paymentlinksalessummary) or null | Present only with expand=sales_summary on GET /v1/payment-links or GET /v1/payment-links/{payment_link_id}. Available to merchant callers, including dashboard sessions and API keys with checkouts.payment_links.read. Uses the same paid-order definition as the merchant sales summary. |
| `status` | Optional | string or null | Whether the link can start new checkouts. Values: `"active"`, `"inactive"`. `status`: [declared alternatives](../models/PaymentLinkUpdatedMerchantEventDataPreviousAttributes.md#paymentlinkupdatedmerchanteventdatapreviousattributesstatus). |
| `subscription_plan` | Optional | [ExpandedSubscriptionPlanSummary](../models/ExpandedSubscriptionPlanSummary.md#expandedsubscriptionplansummary) or null or null | Present only when `expand` includes `subscription_plan`; `null` when expanded and there is no related subscription plan. |
| `subscription_plan_id` | Optional | string or null | ID of the subscription plan the link sells. Absent for a link that doesn't sell a subscription. `subscription_plan_id`: [declared alternatives](../models/PaymentLinkUpdatedMerchantEventDataPreviousAttributes.md#paymentlinkupdatedmerchanteventdatapreviousattributessubscription_plan_id). |
| `tax` | Optional | [CheckoutTaxConfig](../models/CheckoutTaxConfig.md#checkouttaxconfig) or null | Tax settings for checkouts started from this link. |
| `theme` | Optional | [ThemeConfig](../models/ThemeConfig.md#themeconfig) or null | The title and colors for checkouts started from this link, over your branding settings. |
| `tip` | Optional | [CheckoutTipConfig](../models/CheckoutTipConfig.md#checkouttipconfig) or null | Tip options for checkouts started from this link. |
| `total_quantity_sold` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `total_quantity_sold`: [declared alternatives](../models/PaymentLinkUpdatedMerchantEventDataPreviousAttributes.md#paymentlinkupdatedmerchanteventdatapreviousattributestotal_quantity_sold). |
| `updated_at` | Optional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `url` | Optional | string or null | URL buyers open to use the link. `url`: [declared alternatives](../models/PaymentLinkUpdatedMerchantEventDataPreviousAttributes.md#paymentlinkupdatedmerchanteventdatapreviousattributesurl). |
| `version` | Optional | integer or null | Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. `version`: [declared alternatives](../models/GiftCardUpdatedMerchantEventDataPreviousAttributes.md#giftcardupdatedmerchanteventdatapreviousattributesversion). |

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.checkout_session_expires_in_seconds

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.checkout_session_expires_in_seconds variant 1

anyOf variant 1: Seconds each checkout session the link starts stays open, from 60 to 86,400. Omit it to use your checkout settings, or 24 hours. It doesn't end the link; use sales_end_at for that..

- Value shape: integer. Seconds each checkout session the link starts stays open, from 60 to 86,400. Omit it to use your checkout settings, or 24 hours. It doesn't end the link; use sales_end_at for that. Seconds each checkout session the link starts stays open, from 60 to 86,400. Omit it to use your checkout settings, or 24 hours. It doesn't end the link; use sales_end_at for that. Format: `int64`. minimum: `60`. maximum: `86400`. 

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.checkout_session_expires_in_seconds variant 2

anyOf variant 2.

- Value shape: null. Seconds each checkout session the link starts stays open, from 60 to 86,400. Omit it to use your checkout settings, or 24 hours. It doesn't end the link; use sales_end_at for that. 

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.completed_count

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.completed_count variant 1

anyOf variant 1: Number of paid checkout sessions started from this link..

- Value shape: integer. Number of paid checkout sessions started from this link. Number of paid checkout sessions started from this link. Format: `int32`. 

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.completed_count variant 2

anyOf variant 2.

- Value shape: null. Number of paid checkout sessions started from this link. 

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.created_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.custom_fields

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.custom_fields variant 1

anyOf variant 1: Questions buyers answer before paying. Answers are recorded on the order and checkout session in `custom_field_answers`..

- Value shape: Array of [PaymentLinkCustomField](../models/PaymentLinkCustomField.md#paymentlinkcustomfield). Questions buyers answer before paying. Answers are recorded on the order and checkout session in `custom_field_answers`. 

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.custom_fields variant 2

anyOf variant 2.

- Value shape: null. Questions buyers answer before paying. Answers are recorded on the order and checkout session in `custom_field_answers`. 

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.custom_fields variant 1.[] fields 1

Field definitions: [PaymentLinkResponse.data.custom_fields[]](../models/PaymentLinkResponse.md#paymentlinkresponsedatacustom_fields).

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.delivery_method_ids

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.delivery_method_ids variant 1

anyOf variant 1: Delivery methods the link offers. Empty when the link has none, and then its checkouts offer settings.checkout.default_delivery_method_ids when the order has items to deliver..

- Value shape: Array of string. Delivery methods the link offers. Empty when the link has none, and then its checkouts offer settings.checkout.default_delivery_method_ids when the order has items to deliver. 

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.delivery_method_ids variant 2

anyOf variant 2.

- Value shape: null. Delivery methods the link offers. Empty when the link has none, and then its checkouts offer settings.checkout.default_delivery_method_ids when the order has items to deliver. 

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.description

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.description variant 1

anyOf variant 1: Text about what the link sells, returned to buyers when they open it..

- Value shape: string. Text about what the link sells, returned to buyers when they open it. 

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.description variant 2

anyOf variant 2.

- Value shape: null. Text about what the link sells, returned to buyers when they open it. 

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.donation_suggested_amount_money_options

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.donation_suggested_amount_money_options variant 1

anyOf variant 1: Amounts a donation link offers as one-tap choices..

- Value shape: Array of [MoneyValue](../models/MoneyValue.md#moneyvalue). Amounts a donation link offers as one-tap choices. 

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.donation_suggested_amount_money_options variant 2

anyOf variant 2.

- Value shape: null. Amounts a donation link offers as one-tap choices. 

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.external_reference_id

Declared alternatives: [TaxCalculationCallbackActivatedEvent.data fields 1.previous_attributes.external_reference_id](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdata-fields-1previous_attributesexternal_reference_id).

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.inactive_message

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.inactive_message variant 1

anyOf variant 1: Message to show the buyer when the link is inactive..

- Value shape: string. Message to show the buyer when the link is inactive. 

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.inactive_message variant 2

anyOf variant 2.

- Value shape: null. Message to show the buyer when the link is inactive. 

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.line_items

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.line_items variant 1

anyOf variant 1: What the link sells..

- Value shape: Array of (object and Alternative shapes (see declared variants)). What the link sells. 

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.line_items variant 2

anyOf variant 2.

- Value shape: null. What the link sells. 

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1

Declared alternatives: [PaymentLinkResponse.data.line_items[]](../models/PaymentLinkResponse.md#paymentlinkresponsedataline_items).

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.max_completions

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.max_completions variant 1

anyOf variant 1: Most payments the link accepts, counted by `completed_count`. Absent means no limit. Once the limit is reached, resolving the link fails with a request error. It can't be set below `completed_count`..

- Value shape: integer. Most payments the link accepts, counted by `completed_count`. Absent means no limit. Once the limit is reached, resolving the link fails with a request error. It can't be set below `completed_count`. Most payments the link accepts, counted by `completed_count`. Absent means no limit. Once the limit is reached, resolving the link fails with a request error. It can't be set below `completed_count`. Format: `int32`. 

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.max_completions variant 2

anyOf variant 2.

- Value shape: null. Most payments the link accepts, counted by `completed_count`. Absent means no limit. Once the limit is reached, resolving the link fails with a request error. It can't be set below `completed_count`. 

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.merchant_id

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.merchant_id](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributesmerchant_id).

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.metadata

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.metadata](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesmetadata).

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.name

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.name variant 1

anyOf variant 1: Name of the payment link..

- Value shape: string. Name of the payment link. 

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.name variant 2

anyOf variant 2.

- Value shape: null. Name of the payment link. 

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.payment_link_id

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.payment_link_id variant 1

anyOf variant 1: Unique identifier for this payment link, prefixed `pl_`..

- Value shape: string. Unique identifier for this payment link, prefixed `pl_`. 

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.payment_link_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this payment link, prefixed `pl_`. 

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.payment_link_type

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.payment_link_type variant 1

anyOf variant 1: What kind of link this is..

- Value shape: string. What kind of link this is. Values: `"standard"`, `"donation"`, `"event"`.

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.payment_link_type variant 2

anyOf variant 2.

- Value shape: null. What kind of link this is. 

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.sales_end_at

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.sales_end_at variant 1

anyOf variant 1: RFC3339 timestamp after which the link stops starting checkouts and resolve fails with `ACTION_NOT_ALLOWED` and reason `not_offered`. Unset means sales do not end on their own, except that an event link without sales_end_at stops selling at event_config.event_at. A checkout opened before the end can still start payment for up to 15 minutes after it..

- Value shape: string. RFC3339 timestamp after which the link stops starting checkouts and resolve fails with `ACTION_NOT_ALLOWED` and reason `not_offered`. Unset means sales do not end on their own, except that an event link without sales_end_at stops selling at event_config.event_at. A checkout opened before the end can still start payment for up to 15 minutes after it. RFC3339 timestamp after which the link stops starting checkouts and resolve fails with `ACTION_NOT_ALLOWED` and reason `not_offered`. Unset means sales do not end on their own, except that an event link without sales_end_at stops selling at event_config.event_at. A checkout opened before the end can still start payment for up to 15 minutes after it. Format: `date-time`. 

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.sales_end_at variant 2

anyOf variant 2.

- Value shape: null. RFC3339 timestamp after which the link stops starting checkouts and resolve fails with `ACTION_NOT_ALLOWED` and reason `not_offered`. Unset means sales do not end on their own, except that an event link without sales_end_at stops selling at event_config.event_at. A checkout opened before the end can still start payment for up to 15 minutes after it. 

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.status

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.status variant 1

anyOf variant 1: Whether the link can start new checkouts..

- Value shape: string. Whether the link can start new checkouts. Values: `"active"`, `"inactive"`.

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.status variant 2

anyOf variant 2.

- Value shape: null. Whether the link can start new checkouts. 

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.subscription_plan_id

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.subscription_plan_id variant 1

anyOf variant 1: ID of the subscription plan the link sells. Absent for a link that doesn't sell a subscription..

- Value shape: string. ID of the subscription plan the link sells. Absent for a link that doesn't sell a subscription. 

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.subscription_plan_id variant 2

anyOf variant 2.

- Value shape: null. ID of the subscription plan the link sells. Absent for a link that doesn't sell a subscription. 

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.total_quantity_sold

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.total_quantity_sold variant 1

anyOf variant 1: Whole-number quantity; fractional quantities are not supported..

- Value shape: integer. Whole-number quantity; fractional quantities are not supported. Whole-number quantity; fractional quantities are not supported. Format: `int32`. 

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.total_quantity_sold variant 2

anyOf variant 2.

- Value shape: null. Whole-number quantity; fractional quantities are not supported. 

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.updated_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.url

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.url variant 1

anyOf variant 1: URL buyers open to use the link..

- Value shape: string. URL buyers open to use the link. 

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.url variant 2

anyOf variant 2.

- Value shape: null. URL buyers open to use the link. 

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.version

Declared alternatives: [GiftCardUpdatedMerchantEventDataPreviousAttributes.version](../models/GiftCardUpdatedMerchantEventDataPreviousAttributes.md#giftcardupdatedmerchanteventdatapreviousattributesversion).

