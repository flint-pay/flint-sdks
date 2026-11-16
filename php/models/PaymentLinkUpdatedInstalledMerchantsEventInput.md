[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentLinkUpdatedInstalledMerchantsEventInput

The `payment_link.updated` webhook payload for the `installed_merchants` event source.

Fields shared by partner webhook payloads.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. Example: `"2026-08-02"`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `data` | Required | object | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/PaymentLinkUpdatedInstalledMerchantsEventInput.md#paymentlinkupdatedinstalledmerchantseventinputdata). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"installed_merchants"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"payment_link.updated"`. |
| `partner_app_id` | Required | string | ID of the partner app that owns the receiving endpoint. Example: `"papp_01KEZF7C00Y8VMXYZ1GNPP3WHV"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | [PartnerWebhookEnvelopeSourceInput](../models/PartnerWebhookEnvelopeSourceInput.md#partnerwebhookenvelopesourceinput) and object | The merchant and partner app install this event concerns, with environment details for installed-merchant events. The merchant and partner app install the event concerns. Environment fields are present for installed-merchant events. `source`: [field definitions](../models/BalanceTransactionCreatedInstalledMerchantsEventInput.md#balancetransactioncreatedinstalledmerchantseventinputsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. Example: `"whev_01KEZF7C00362MS3HV970TRZGS"`. |

### PaymentLinkUpdatedInstalledMerchantsEventInput.data

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. `object`: [field definitions](../models/PaymentLinkCreatedInstalledMerchantsEventInput.md#paymentlinkcreatedinstalledmerchantseventinputdataobject). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/PaymentLinkUpdatedInstalledMerchantsEventInput.md#paymentlinkupdatedinstalledmerchantseventinputdataprevious_attributes). |

### PaymentLinkUpdatedInstalledMerchantsEventInput.data.object

Field definitions: [PaymentLinkCreatedInstalledMerchantsEventInput.data.object](../models/PaymentLinkCreatedInstalledMerchantsEventInput.md#paymentlinkcreatedinstalledmerchantseventinputdataobject).

### PaymentLinkUpdatedInstalledMerchantsEventInput.data.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_fields` | Optional | [CheckoutBuyerFieldsInput](../models/CheckoutBuyerFieldsInput.md#checkoutbuyerfieldsinput) or null | What checkout asks the buyer for. Each field you leave out uses your checkout settings. |
| `checkout_session_expires_in_seconds` | Optional | integer or null | Seconds each checkout session the link starts stays open, from 60 to 86,400. Omit it to use your checkout settings, or 24 hours. It doesn't end the link; use sales_end_at for that. `checkout_session_expires_in_seconds`: [declared alternatives](../models/PaymentLinkUpdatedInstalledMerchantsEventInput.md#paymentlinkupdatedinstalledmerchantseventinputdataprevious_attributescheckout_session_expires_in_seconds). |
| `completed_count` | Optional | integer or null | Number of paid checkout sessions started from this link. `completed_count`: [declared alternatives](../models/PaymentLinkUpdatedInstalledMerchantsEventInput.md#paymentlinkupdatedinstalledmerchantseventinputdataprevious_attributescompleted_count). |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at). |
| `custom_fields` | Optional | Array of [PaymentLinkCustomFieldInput](../models/PaymentLinkCustomFieldInput.md#paymentlinkcustomfieldinput) or null | Questions buyers answer before paying. Answers are recorded on the order and checkout session in `custom_field_answers`. `custom_fields`: [declared alternatives](../models/PaymentLinkUpdatedInstalledMerchantsEventInput.md#paymentlinkupdatedinstalledmerchantseventinputdataprevious_attributescustom_fields). |
| `custom_text` | Optional | [CheckoutCustomTextConfigInput](../models/CheckoutCustomTextConfigInput.md#checkoutcustomtextconfiginput) or null | Custom text for checkouts started from this link. |
| `delivery_method_ids` | Optional | Array of string or null | Delivery methods the link offers. Empty when the link has none, and then its checkouts offer settings.checkout.default_delivery_method_ids when the order has items to deliver. `delivery_method_ids`: [declared alternatives](../models/PaymentLinkUpdatedInstalledMerchantsEventInput.md#paymentlinkupdatedinstalledmerchantseventinputdataprevious_attributesdelivery_method_ids). |
| `description` | Optional | string or null | Text about what the link sells, returned to buyers when they open it. `description`: [declared alternatives](../models/PaymentLinkUpdatedInstalledMerchantsEventInput.md#paymentlinkupdatedinstalledmerchantseventinputdataprevious_attributesdescription). |
| `donation_max_amount_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) or null | Largest amount a buyer can give on a donation link. |
| `donation_min_amount_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) or null | Smallest amount a buyer can give on a donation link. |
| `donation_suggested_amount_money_options` | Optional | Array of [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) or null | Amounts a donation link offers as one-tap choices. `donation_suggested_amount_money_options`: [declared alternatives](../models/PaymentLinkUpdatedInstalledMerchantsEventInput.md#paymentlinkupdatedinstalledmerchantseventinputdataprevious_attributesdonation_suggested_amount_money_options). |
| `event_config` | Optional | [PaymentLinkEventConfigInput](../models/PaymentLinkEventConfigInput.md#paymentlinkeventconfiginput) or null | Event details for an `event` link: when and where it takes place and how many tickets it sells. |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. `external_reference_id`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEventInput.md#bundlearchivedinstalledmerchantseventinputdataprevious_attributesexternal_reference_id). |
| `image` | Optional | [ImageAttachmentInput](../models/ImageAttachmentInput.md#imageattachmentinput) or null | Image shown to buyers with the link. |
| `inactive_message` | Optional | string or null | Message to show the buyer when the link is inactive. `inactive_message`: [declared alternatives](../models/PaymentLinkUpdatedInstalledMerchantsEventInput.md#paymentlinkupdatedinstalledmerchantseventinputdataprevious_attributesinactive_message). |
| `inventory_routing_source` | Optional | [InventoryRoutingSourceInput](../models/InventoryRoutingSourceInput.md#inventoryroutingsourceinput) or null | The inventory location or routing policy that supplies stock for the link's catalog lines. |
| `legal` | Optional | [CheckoutLegalConfigInput](../models/CheckoutLegalConfigInput.md#checkoutlegalconfiginput) or null | The terms and policy links checkouts started from this link show the buyer. |
| `line_items` | Optional | Array of [PaymentLinkLineItemInput](../models/PaymentLinkLineItemInput.md#paymentlinklineiteminput) or null | What the link sells. `line_items`: [declared alternatives](../models/PaymentLinkUpdatedInstalledMerchantsEventInput.md#paymentlinkupdatedinstalledmerchantseventinputdataprevious_attributesline_items). |
| `max_completions` | Optional | integer or null | Most payments the link accepts, counted by `completed_count`. Absent means no limit. Once the limit is reached, resolving the link fails with a request error. It can't be set below `completed_count`. `max_completions`: [declared alternatives](../models/PaymentLinkUpdatedInstalledMerchantsEventInput.md#paymentlinkupdatedinstalledmerchantseventinputdataprevious_attributesmax_completions). |
| `merchant_id` | Optional | string or null | ID of the merchant this resource belongs to. `merchant_id`: [declared alternatives](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributesmerchant_id). |
| `metadata` | Optional | [MetadataMapInput](../models/MetadataMapInput.md#metadatamapinput) or null | Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules. |
| `name` | Optional | string or null | Name of the payment link. `name`: [declared alternatives](../models/PaymentLinkUpdatedInstalledMerchantsEventInput.md#paymentlinkupdatedinstalledmerchantseventinputdataprevious_attributesname). |
| `payment_link_id` | Optional | string or null | Unique identifier for this payment link, prefixed `pl_`. `payment_link_id`: [declared alternatives](../models/PaymentLinkUpdatedInstalledMerchantsEventInput.md#paymentlinkupdatedinstalledmerchantseventinputdataprevious_attributespayment_link_id). |
| `payment_link_type` | Optional | string or null | What kind of link this is. Values: `"standard"`, `"donation"`, `"event"`. `payment_link_type`: [declared alternatives](../models/PaymentLinkUpdatedInstalledMerchantsEventInput.md#paymentlinkupdatedinstalledmerchantseventinputdataprevious_attributespayment_link_type). |
| `payments` | Optional | [CheckoutPaymentConfigInput](../models/CheckoutPaymentConfigInput.md#checkoutpaymentconfiginput) or null | Payment options for checkouts started from this link. |
| `promotion_config` | Optional | [CheckoutPromotionConfigInput](../models/CheckoutPromotionConfigInput.md#checkoutpromotionconfiginput) or null | Whether automatic promotions apply to checkouts started from this link and whether buyers can enter promotion codes. |
| `redirects` | Optional | [CheckoutRedirectsInput](../models/CheckoutRedirectsInput.md#checkoutredirectsinput) or null | Where checkout sessions started from this payment link send the buyer after payment, cancellation, or expiration. |
| `sales_end_at` | Optional | string or null | RFC3339 timestamp after which the link stops starting checkouts and resolve fails with `ACTION_NOT_ALLOWED` and reason `not_offered`. Unset means sales do not end on their own, except that an event link without sales_end_at stops selling at event_config.event_at. A checkout opened before the end can still start payment for up to 15 minutes after it. `sales_end_at`: [declared alternatives](../models/PaymentLinkUpdatedInstalledMerchantsEventInput.md#paymentlinkupdatedinstalledmerchantseventinputdataprevious_attributessales_end_at). |
| `sales_summary` | Optional | [PaymentLinkSalesSummaryInput](../models/PaymentLinkSalesSummaryInput.md#paymentlinksalessummaryinput) or null | Present only with expand=sales_summary on GET /v1/payment-links or GET /v1/payment-links/{payment_link_id}. Available to merchant callers, including dashboard sessions and API keys with checkouts.payment_links.read. Uses the same paid-order definition as the merchant sales summary. |
| `status` | Optional | string or null | Whether the link can start new checkouts. Values: `"active"`, `"inactive"`. `status`: [declared alternatives](../models/PaymentLinkUpdatedInstalledMerchantsEventInput.md#paymentlinkupdatedinstalledmerchantseventinputdataprevious_attributesstatus). |
| `subscription_plan` | Optional | [ExpandedSubscriptionPlanSummaryInput](../models/ExpandedSubscriptionPlanSummaryInput.md#expandedsubscriptionplansummaryinput) or null or null | Present only when `expand` includes `subscription_plan`; `null` when expanded and there is no related subscription plan. |
| `subscription_plan_id` | Optional | string or null | ID of the subscription plan the link sells. Absent for a link that doesn't sell a subscription. `subscription_plan_id`: [declared alternatives](../models/PaymentLinkUpdatedInstalledMerchantsEventInput.md#paymentlinkupdatedinstalledmerchantseventinputdataprevious_attributessubscription_plan_id). |
| `tax` | Optional | [CheckoutTaxConfigInput](../models/CheckoutTaxConfigInput.md#checkouttaxconfiginput) or null | Tax settings for checkouts started from this link. |
| `theme` | Optional | [ThemeConfigInput](../models/ThemeConfigInput.md#themeconfiginput) or null | The title and colors for checkouts started from this link, over your branding settings. |
| `tip` | Optional | [CheckoutTipConfigInput](../models/CheckoutTipConfigInput.md#checkouttipconfiginput) or null | Tip options for checkouts started from this link. |
| `total_quantity_sold` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `total_quantity_sold`: [declared alternatives](../models/PaymentLinkUpdatedInstalledMerchantsEventInput.md#paymentlinkupdatedinstalledmerchantseventinputdataprevious_attributestotal_quantity_sold). |
| `updated_at` | Optional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at). |
| `url` | Optional | string or null | URL buyers open to use the link. `url`: [declared alternatives](../models/PaymentLinkUpdatedInstalledMerchantsEventInput.md#paymentlinkupdatedinstalledmerchantseventinputdataprevious_attributesurl). |
| `version` | Optional | integer or null | Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. `version`: [declared alternatives](../models/GiftCardLoadUpdatedInstalledMerchantsEventInput.md#giftcardloadupdatedinstalledmerchantseventinputdataprevious_attributesversion). |

### PaymentLinkUpdatedInstalledMerchantsEventInput.data.previous_attributes.checkout_session_expires_in_seconds

### PaymentLinkUpdatedInstalledMerchantsEventInput.data.previous_attributes.checkout_session_expires_in_seconds variant 1

anyOf variant 1: Seconds each checkout session the link starts stays open, from 60 to 86,400. Omit it to use your checkout settings, or 24 hours. It doesn't end the link; use sales_end_at for that..

- Value shape: integer. Seconds each checkout session the link starts stays open, from 60 to 86,400. Omit it to use your checkout settings, or 24 hours. It doesn't end the link; use sales_end_at for that. Seconds each checkout session the link starts stays open, from 60 to 86,400. Omit it to use your checkout settings, or 24 hours. It doesn't end the link; use sales_end_at for that. Format: `int64`. minimum: `60`. maximum: `86400`. 

### PaymentLinkUpdatedInstalledMerchantsEventInput.data.previous_attributes.checkout_session_expires_in_seconds variant 2

anyOf variant 2.

- Value shape: null. Seconds each checkout session the link starts stays open, from 60 to 86,400. Omit it to use your checkout settings, or 24 hours. It doesn't end the link; use sales_end_at for that. 

### PaymentLinkUpdatedInstalledMerchantsEventInput.data.previous_attributes.completed_count

### PaymentLinkUpdatedInstalledMerchantsEventInput.data.previous_attributes.completed_count variant 1

anyOf variant 1: Number of paid checkout sessions started from this link..

- Value shape: integer. Number of paid checkout sessions started from this link. Number of paid checkout sessions started from this link. Format: `int32`. 

### PaymentLinkUpdatedInstalledMerchantsEventInput.data.previous_attributes.completed_count variant 2

anyOf variant 2.

- Value shape: null. Number of paid checkout sessions started from this link. 

### PaymentLinkUpdatedInstalledMerchantsEventInput.data.previous_attributes.created_at

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.created_at](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at).

### PaymentLinkUpdatedInstalledMerchantsEventInput.data.previous_attributes.custom_fields

### PaymentLinkUpdatedInstalledMerchantsEventInput.data.previous_attributes.custom_fields variant 1

anyOf variant 1: Questions buyers answer before paying. Answers are recorded on the order and checkout session in `custom_field_answers`..

- Value shape: Array of [PaymentLinkCustomFieldInput](../models/PaymentLinkCustomFieldInput.md#paymentlinkcustomfieldinput). Questions buyers answer before paying. Answers are recorded on the order and checkout session in `custom_field_answers`. 

### PaymentLinkUpdatedInstalledMerchantsEventInput.data.previous_attributes.custom_fields variant 2

anyOf variant 2.

- Value shape: null. Questions buyers answer before paying. Answers are recorded on the order and checkout session in `custom_field_answers`. 

### PaymentLinkUpdatedInstalledMerchantsEventInput.data.previous_attributes.delivery_method_ids

### PaymentLinkUpdatedInstalledMerchantsEventInput.data.previous_attributes.delivery_method_ids variant 1

anyOf variant 1: Delivery methods the link offers. Empty when the link has none, and then its checkouts offer settings.checkout.default_delivery_method_ids when the order has items to deliver..

- Value shape: Array of string. Delivery methods the link offers. Empty when the link has none, and then its checkouts offer settings.checkout.default_delivery_method_ids when the order has items to deliver. Items: Example: `"dmet_01KEZF7C00YSG3X2D1TZJ36TM0"`. 

### PaymentLinkUpdatedInstalledMerchantsEventInput.data.previous_attributes.delivery_method_ids variant 2

anyOf variant 2.

- Value shape: null. Delivery methods the link offers. Empty when the link has none, and then its checkouts offer settings.checkout.default_delivery_method_ids when the order has items to deliver. 

### PaymentLinkUpdatedInstalledMerchantsEventInput.data.previous_attributes.description

### PaymentLinkUpdatedInstalledMerchantsEventInput.data.previous_attributes.description variant 1

anyOf variant 1: Text about what the link sells, returned to buyers when they open it..

- Value shape: string. Text about what the link sells, returned to buyers when they open it. 

### PaymentLinkUpdatedInstalledMerchantsEventInput.data.previous_attributes.description variant 2

anyOf variant 2.

- Value shape: null. Text about what the link sells, returned to buyers when they open it. 

### PaymentLinkUpdatedInstalledMerchantsEventInput.data.previous_attributes.donation_suggested_amount_money_options

### PaymentLinkUpdatedInstalledMerchantsEventInput.data.previous_attributes.donation_suggested_amount_money_options variant 1

anyOf variant 1: Amounts a donation link offers as one-tap choices..

- Value shape: Array of [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput). Amounts a donation link offers as one-tap choices. 

### PaymentLinkUpdatedInstalledMerchantsEventInput.data.previous_attributes.donation_suggested_amount_money_options variant 2

anyOf variant 2.

- Value shape: null. Amounts a donation link offers as one-tap choices. 

### PaymentLinkUpdatedInstalledMerchantsEventInput.data.previous_attributes.external_reference_id

Declared alternatives: [BundleArchivedInstalledMerchantsEventInput.data.previous_attributes.external_reference_id](../models/BundleArchivedInstalledMerchantsEventInput.md#bundlearchivedinstalledmerchantseventinputdataprevious_attributesexternal_reference_id).

### PaymentLinkUpdatedInstalledMerchantsEventInput.data.previous_attributes.inactive_message

### PaymentLinkUpdatedInstalledMerchantsEventInput.data.previous_attributes.inactive_message variant 1

anyOf variant 1: Message to show the buyer when the link is inactive..

- Value shape: string. Message to show the buyer when the link is inactive. 

### PaymentLinkUpdatedInstalledMerchantsEventInput.data.previous_attributes.inactive_message variant 2

anyOf variant 2.

- Value shape: null. Message to show the buyer when the link is inactive. 

### PaymentLinkUpdatedInstalledMerchantsEventInput.data.previous_attributes.line_items

### PaymentLinkUpdatedInstalledMerchantsEventInput.data.previous_attributes.line_items variant 1

anyOf variant 1: What the link sells..

- Value shape: Array of [PaymentLinkLineItemInput](../models/PaymentLinkLineItemInput.md#paymentlinklineiteminput). What the link sells. 

### PaymentLinkUpdatedInstalledMerchantsEventInput.data.previous_attributes.line_items variant 2

anyOf variant 2.

- Value shape: null. What the link sells. 

### PaymentLinkUpdatedInstalledMerchantsEventInput.data.previous_attributes.max_completions

### PaymentLinkUpdatedInstalledMerchantsEventInput.data.previous_attributes.max_completions variant 1

anyOf variant 1: Most payments the link accepts, counted by `completed_count`. Absent means no limit. Once the limit is reached, resolving the link fails with a request error. It can't be set below `completed_count`..

- Value shape: integer. Most payments the link accepts, counted by `completed_count`. Absent means no limit. Once the limit is reached, resolving the link fails with a request error. It can't be set below `completed_count`. Most payments the link accepts, counted by `completed_count`. Absent means no limit. Once the limit is reached, resolving the link fails with a request error. It can't be set below `completed_count`. Format: `int32`. 

### PaymentLinkUpdatedInstalledMerchantsEventInput.data.previous_attributes.max_completions variant 2

anyOf variant 2.

- Value shape: null. Most payments the link accepts, counted by `completed_count`. Absent means no limit. Once the limit is reached, resolving the link fails with a request error. It can't be set below `completed_count`. 

### PaymentLinkUpdatedInstalledMerchantsEventInput.data.previous_attributes.merchant_id

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.merchant_id](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributesmerchant_id).

### PaymentLinkUpdatedInstalledMerchantsEventInput.data.previous_attributes.name

### PaymentLinkUpdatedInstalledMerchantsEventInput.data.previous_attributes.name variant 1

anyOf variant 1: Name of the payment link..

- Value shape: string. Name of the payment link. 

### PaymentLinkUpdatedInstalledMerchantsEventInput.data.previous_attributes.name variant 2

anyOf variant 2.

- Value shape: null. Name of the payment link. 

### PaymentLinkUpdatedInstalledMerchantsEventInput.data.previous_attributes.payment_link_id

### PaymentLinkUpdatedInstalledMerchantsEventInput.data.previous_attributes.payment_link_id variant 1

anyOf variant 1: Unique identifier for this payment link, prefixed `pl_`..

- Value shape: string. Unique identifier for this payment link, prefixed `pl_`. Unique identifier for this payment link, prefixed `pl_`. Example: `"pl_01KEZF7C007WDMA5P9BPZ8J2AM"`. 

### PaymentLinkUpdatedInstalledMerchantsEventInput.data.previous_attributes.payment_link_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this payment link, prefixed `pl_`. 

### PaymentLinkUpdatedInstalledMerchantsEventInput.data.previous_attributes.payment_link_type

### PaymentLinkUpdatedInstalledMerchantsEventInput.data.previous_attributes.payment_link_type variant 1

anyOf variant 1: What kind of link this is..

- Value shape: string. What kind of link this is. Values: `"standard"`, `"donation"`, `"event"`.

### PaymentLinkUpdatedInstalledMerchantsEventInput.data.previous_attributes.payment_link_type variant 2

anyOf variant 2.

- Value shape: null. What kind of link this is. 

### PaymentLinkUpdatedInstalledMerchantsEventInput.data.previous_attributes.sales_end_at

### PaymentLinkUpdatedInstalledMerchantsEventInput.data.previous_attributes.sales_end_at variant 1

anyOf variant 1: RFC3339 timestamp after which the link stops starting checkouts and resolve fails with `ACTION_NOT_ALLOWED` and reason `not_offered`. Unset means sales do not end on their own, except that an event link without sales_end_at stops selling at event_config.event_at. A checkout opened before the end can still start payment for up to 15 minutes after it..

- Value shape: string. RFC3339 timestamp after which the link stops starting checkouts and resolve fails with `ACTION_NOT_ALLOWED` and reason `not_offered`. Unset means sales do not end on their own, except that an event link without sales_end_at stops selling at event_config.event_at. A checkout opened before the end can still start payment for up to 15 minutes after it. RFC3339 timestamp after which the link stops starting checkouts and resolve fails with `ACTION_NOT_ALLOWED` and reason `not_offered`. Unset means sales do not end on their own, except that an event link without sales_end_at stops selling at event_config.event_at. A checkout opened before the end can still start payment for up to 15 minutes after it. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### PaymentLinkUpdatedInstalledMerchantsEventInput.data.previous_attributes.sales_end_at variant 2

anyOf variant 2.

- Value shape: null. RFC3339 timestamp after which the link stops starting checkouts and resolve fails with `ACTION_NOT_ALLOWED` and reason `not_offered`. Unset means sales do not end on their own, except that an event link without sales_end_at stops selling at event_config.event_at. A checkout opened before the end can still start payment for up to 15 minutes after it. 

### PaymentLinkUpdatedInstalledMerchantsEventInput.data.previous_attributes.status

### PaymentLinkUpdatedInstalledMerchantsEventInput.data.previous_attributes.status variant 1

anyOf variant 1: Whether the link can start new checkouts..

- Value shape: string. Whether the link can start new checkouts. Values: `"active"`, `"inactive"`.

### PaymentLinkUpdatedInstalledMerchantsEventInput.data.previous_attributes.status variant 2

anyOf variant 2.

- Value shape: null. Whether the link can start new checkouts. 

### PaymentLinkUpdatedInstalledMerchantsEventInput.data.previous_attributes.subscription_plan_id

### PaymentLinkUpdatedInstalledMerchantsEventInput.data.previous_attributes.subscription_plan_id variant 1

anyOf variant 1: ID of the subscription plan the link sells. Absent for a link that doesn't sell a subscription..

- Value shape: string. ID of the subscription plan the link sells. Absent for a link that doesn't sell a subscription. ID of the subscription plan the link sells. Absent for a link that doesn't sell a subscription. Example: `"plan_01KEZF7C004CY5ZR33XST2AASV"`. 

### PaymentLinkUpdatedInstalledMerchantsEventInput.data.previous_attributes.subscription_plan_id variant 2

anyOf variant 2.

- Value shape: null. ID of the subscription plan the link sells. Absent for a link that doesn't sell a subscription. 

### PaymentLinkUpdatedInstalledMerchantsEventInput.data.previous_attributes.total_quantity_sold

### PaymentLinkUpdatedInstalledMerchantsEventInput.data.previous_attributes.total_quantity_sold variant 1

anyOf variant 1: Whole-number quantity; fractional quantities are not supported..

- Value shape: integer. Whole-number quantity; fractional quantities are not supported. Whole-number quantity; fractional quantities are not supported. Format: `int32`. 

### PaymentLinkUpdatedInstalledMerchantsEventInput.data.previous_attributes.total_quantity_sold variant 2

anyOf variant 2.

- Value shape: null. Whole-number quantity; fractional quantities are not supported. 

### PaymentLinkUpdatedInstalledMerchantsEventInput.data.previous_attributes.updated_at

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.created_at](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at).

### PaymentLinkUpdatedInstalledMerchantsEventInput.data.previous_attributes.url

### PaymentLinkUpdatedInstalledMerchantsEventInput.data.previous_attributes.url variant 1

anyOf variant 1: URL buyers open to use the link..

- Value shape: string. URL buyers open to use the link. 

### PaymentLinkUpdatedInstalledMerchantsEventInput.data.previous_attributes.url variant 2

anyOf variant 2.

- Value shape: null. URL buyers open to use the link. 

### PaymentLinkUpdatedInstalledMerchantsEventInput.data.previous_attributes.version

Declared alternatives: [GiftCardLoadUpdatedInstalledMerchantsEventInput.data.previous_attributes.version](../models/GiftCardLoadUpdatedInstalledMerchantsEventInput.md#giftcardloadupdatedinstalledmerchantseventinputdataprevious_attributesversion).

### PaymentLinkUpdatedInstalledMerchantsEventInput.source

Field definitions: [BalanceTransactionCreatedInstalledMerchantsEventInput.source](../models/BalanceTransactionCreatedInstalledMerchantsEventInput.md#balancetransactioncreatedinstalledmerchantseventinputsource).

