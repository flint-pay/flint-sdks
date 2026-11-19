[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentLinkUpdatedInstalledMerchantsEvent

The `payment_link.updated` webhook payload for the `installed_merchants` event source.

Fields shared by partner webhook payloads.



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. Example: `"2026-08-02"`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `data` | Required | object | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/PaymentLinkUpdatedInstalledMerchantsEvent.md#paymentlinkupdatedinstalledmerchantseventdata). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"installed_merchants"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"payment_link.updated"`. |
| `partner_app_id` | Required | string | ID of the partner app that owns the receiving endpoint. Example: `"papp_01KEZF7C00Y8VMXYZ1GNPP3WHV"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | [WebhookEventSource](../models/WebhookEventSource.md#webhookeventsource) and object | The merchant and partner app install this event concerns, with environment details for installed-merchant events. The merchant and partner app install the event concerns. Environment fields are present for installed-merchant events. `source`: [field definitions](../models/BalanceTransactionCreatedInstalledMerchantsEvent.md#balancetransactioncreatedinstalledmerchantseventsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. Example: `"whev_01KEZF7C00362MS3HV970TRZGS"`. |

### PaymentLinkUpdatedInstalledMerchantsEvent.data

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. `object`: [field definitions](../models/PaymentLinkCreatedInstalledMerchantsEvent.md#paymentlinkcreatedinstalledmerchantseventdataobject). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/PaymentLinkUpdatedInstalledMerchantsEvent.md#paymentlinkupdatedinstalledmerchantseventdataprevious_attributes). |

### PaymentLinkUpdatedInstalledMerchantsEvent.data.object

Field definitions: [PaymentLinkCreatedInstalledMerchantsEvent.data.object](../models/PaymentLinkCreatedInstalledMerchantsEvent.md#paymentlinkcreatedinstalledmerchantseventdataobject).

### PaymentLinkUpdatedInstalledMerchantsEvent.data.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_fields` | Optional | [CheckoutBuyerFieldsPreviousAttributes](../models/CheckoutBuyerFieldsPreviousAttributes.md#checkoutbuyerfieldspreviousattributes) or null | What checkout asks the buyer for. Each field you leave out uses your checkout settings. |
| `checkout_session_expires_in_seconds` | Optional | integer or null | Seconds each checkout session the link starts stays open, from 60 to 86,400. Omit it to use your checkout settings, or 24 hours. It doesn't end the link; use sales_end_at for that. `checkout_session_expires_in_seconds`: [declared alternatives](../models/PaymentLinkUpdatedInstalledMerchantsEvent.md#paymentlinkupdatedinstalledmerchantseventdataprevious_attributescheckout_session_expires_in_seconds). |
| `completed_count` | Optional | integer or null | Number of paid checkout sessions started from this link. `completed_count`: [declared alternatives](../models/ExpandedPaymentLinkSummaryPreviousAttributes.md#expandedpaymentlinksummarypreviousattributescompleted_count). |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at). |
| `custom_fields` | Optional | Array of [PaymentLinkCustomFieldPreviousAttributes](../models/PaymentLinkCustomFieldPreviousAttributes.md#paymentlinkcustomfieldpreviousattributes) or null | Questions buyers answer before paying. Answers are recorded on the order and checkout session in `custom_field_answers`. `custom_fields`: [declared alternatives](../models/PaymentLinkUpdatedInstalledMerchantsEvent.md#paymentlinkupdatedinstalledmerchantseventdataprevious_attributescustom_fields). |
| `custom_text` | Optional | [CheckoutCustomTextConfigPreviousAttributes](../models/CheckoutCustomTextConfigPreviousAttributes.md#checkoutcustomtextconfigpreviousattributes) or null | Custom text for checkouts started from this link. |
| `delivery_method_ids` | Optional | Array of string or null | Delivery methods the link offers. Empty when the link has none, and then its checkouts offer settings.checkout.default_delivery_method_ids when the order has items to deliver. `delivery_method_ids`: [declared alternatives](../models/PaymentLinkUpdatedInstalledMerchantsEvent.md#paymentlinkupdatedinstalledmerchantseventdataprevious_attributesdelivery_method_ids). |
| `description` | Optional | string or null | Text about what the link sells, returned to buyers when they open it. `description`: [declared alternatives](../models/ExpandedPaymentLinkSummaryPreviousAttributes.md#expandedpaymentlinksummarypreviousattributesdescription). |
| `donation_max_amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Largest amount a buyer can give on a donation link. Must be greater than zero and greater than or equal to donation_min_amount_money. Omit on create for no maximum. `donation_max_amount_money`: [declared alternatives](../models/PaymentLinkUpdatedInstalledMerchantsEvent.md#paymentlinkupdatedinstalledmerchantseventdataprevious_attributesdonation_max_amount_money). |
| `donation_min_amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Smallest amount a buyer can give on a donation link. `donation_min_amount_money`: [declared alternatives](../models/PaymentLinkUpdatedInstalledMerchantsEvent.md#paymentlinkupdatedinstalledmerchantseventdataprevious_attributesdonation_min_amount_money). |
| `donation_suggested_amount_money_options` | Optional | Array of [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Amounts a donation link offers as one-tap choices. Use the same currency for all suggested amounts and both bounds. `donation_suggested_amount_money_options`: [declared alternatives](../models/PaymentLinkUpdatedInstalledMerchantsEvent.md#paymentlinkupdatedinstalledmerchantseventdataprevious_attributesdonation_suggested_amount_money_options). |
| `event_config` | Optional | [PaymentLinkEventConfigPreviousAttributes](../models/PaymentLinkEventConfigPreviousAttributes.md#paymentlinkeventconfigpreviousattributes) or null | Event details for an `event` link: when and where it takes place and how many tickets it sells. |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. `external_reference_id`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventdataprevious_attributesexternal_reference_id). |
| `image` | Optional | [ImageAttachmentPreviousAttributes](../models/ImageAttachmentPreviousAttributes.md#imageattachmentpreviousattributes) or null | Image shown to buyers with the link. |
| `inactive_message` | Optional | string or null | Message to show the buyer when the link is inactive. `inactive_message`: [declared alternatives](../models/PaymentLinkUpdatedInstalledMerchantsEvent.md#paymentlinkupdatedinstalledmerchantseventdataprevious_attributesinactive_message). |
| `inventory_routing_source` | Optional | [InventoryRoutingSourcePreviousAttributes](../models/InventoryRoutingSourcePreviousAttributes.md#inventoryroutingsourcepreviousattributes) or null | The inventory location or routing policy that supplies stock for the link's catalog lines. Absent when using the implicit single-Location fallback, which is evaluated again on use. |
| `legal` | Optional | [CheckoutLegalConfigPreviousAttributes](../models/CheckoutLegalConfigPreviousAttributes.md#checkoutlegalconfigpreviousattributes) or null | The terms and policy links checkouts started from this link show the buyer. |
| `line_items` | Optional | Array of [PaymentLinkLineItemPreviousAttributes](../models/PaymentLinkLineItemPreviousAttributes.md#paymentlinklineitempreviousattributes) or null | What the link sells. `line_items`: [declared alternatives](../models/PaymentLinkUpdatedInstalledMerchantsEvent.md#paymentlinkupdatedinstalledmerchantseventdataprevious_attributesline_items). |
| `max_completions` | Optional | integer or null | Most payments the link accepts, counted by `completed_count`. Absent means no limit. Once the limit is reached, resolving the link fails with a request error. It can't be set below `completed_count`. `max_completions`: [declared alternatives](../models/PaymentLinkUpdatedInstalledMerchantsEvent.md#paymentlinkupdatedinstalledmerchantseventdataprevious_attributesmax_completions). |
| `merchant_id` | Optional | string or null | ID of the merchant this resource belongs to. `merchant_id`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributesmerchant_id). |
| `metadata` | Optional | [MetadataMap](../models/MetadataMap.md#metadatamap) or null | Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules. `metadata`: [declared alternatives](../models/CheckoutSessionClosedInstalledMerchantsEvent.md#checkoutsessionclosedinstalledmerchantseventdataprevious_attributesmetadata). |
| `name` | Optional | string or null | Name of the payment link. `name`: [declared alternatives](../models/ExpandedPaymentLinkSummaryPreviousAttributes.md#expandedpaymentlinksummarypreviousattributesname). |
| `payment_link_id` | Optional | string or null | Unique identifier for this payment link, prefixed `pl_`. `payment_link_id`: [declared alternatives](../models/ExpandedPaymentLinkSummaryPreviousAttributes.md#expandedpaymentlinksummarypreviousattributespayment_link_id). |
| `payment_link_type` | Optional | string or null | What kind of link this is. Values: `"standard"`, `"donation"`, `"event"`. `payment_link_type`: [declared alternatives](../models/ExpandedPaymentLinkSummaryPreviousAttributes.md#expandedpaymentlinksummarypreviousattributespayment_link_type). |
| `payments` | Optional | [CheckoutPaymentConfigPreviousAttributes](../models/CheckoutPaymentConfigPreviousAttributes.md#checkoutpaymentconfigpreviousattributes) or null | Payment options for checkouts started from this link. |
| `promotion_config` | Optional | [CheckoutPromotionConfigPreviousAttributes](../models/CheckoutPromotionConfigPreviousAttributes.md#checkoutpromotionconfigpreviousattributes) or null | Whether automatic promotions apply to checkouts started from this link and whether buyers can enter promotion codes. |
| `redirects` | Optional | [CheckoutRedirectsPreviousAttributes](../models/CheckoutRedirectsPreviousAttributes.md#checkoutredirectspreviousattributes) or null | Where checkout sessions started from this payment link send the buyer after payment, cancellation, or expiration. |
| `sales_end_at` | Optional | string or null | RFC3339 timestamp after which the link stops starting checkouts and resolve fails with `ACTION_NOT_ALLOWED` and reason `not_offered`. Unset means sales do not end on their own, except that an event link without sales_end_at stops selling at event_config.event_at. A checkout opened before the end can still start payment for up to 15 minutes after it. `sales_end_at`: [declared alternatives](../models/PaymentLinkUpdatedInstalledMerchantsEvent.md#paymentlinkupdatedinstalledmerchantseventdataprevious_attributessales_end_at). |
| `sales_start_at` | Optional | string or null | RFC3339 timestamp when buyers can first start a checkout from this link. Stored to nanosecond precision. Before it, resolve fails with ACTION_NOT_ALLOWED and reason sales_not_started. Must be earlier than the link’s sales end, including the event start when no explicit end is set. `sales_start_at`: [declared alternatives](../models/PaymentLinkUpdatedInstalledMerchantsEvent.md#paymentlinkupdatedinstalledmerchantseventdataprevious_attributessales_start_at). |
| `sales_summary` | Optional | [PaymentLinkSalesSummaryPreviousAttributes](../models/PaymentLinkSalesSummaryPreviousAttributes.md#paymentlinksalessummarypreviousattributes) or null | Present only with expand=sales_summary on GET /v1/payment-links or GET /v1/payment-links/{payment_link_id}. Available to merchant callers, including dashboard sessions and API keys with checkouts.payment_links.read. Uses the same paid-order definition as the merchant sales summary. |
| `status` | Optional | string or null | Whether the link can start new checkouts. Values: `"active"`, `"inactive"`. `status`: [declared alternatives](../models/ExpandedPaymentLinkSummaryPreviousAttributes.md#expandedpaymentlinksummarypreviousattributesstatus). |
| `subscription_plan` | Optional | [ExpandedSubscriptionPlanSummaryPreviousAttributes](../models/ExpandedSubscriptionPlanSummaryPreviousAttributes.md#expandedsubscriptionplansummarypreviousattributes) or null | Present only when `expand` includes `subscription_plan`; `null` when expanded and there is no related subscription plan. |
| `subscription_plan_id` | Optional | string or null | ID of the subscription plan the link sells. Absent for a link that doesn't sell a subscription. `subscription_plan_id`: [declared alternatives](../models/ExpandedPaymentLinkSummaryPreviousAttributes.md#expandedpaymentlinksummarypreviousattributessubscription_plan_id). |
| `tax` | Optional | [SubscriptionTaxPreviousAttributes](../models/SubscriptionTaxPreviousAttributes.md#subscriptiontaxpreviousattributes) or null | Tax settings for checkouts started from this link. `tax`: [declared alternatives](../models/PaymentLinkUpdatedInstalledMerchantsEvent.md#paymentlinkupdatedinstalledmerchantseventdataprevious_attributestax). |
| `theme` | Optional | [ThemeConfigPreviousAttributes](../models/ThemeConfigPreviousAttributes.md#themeconfigpreviousattributes) or null | The title and colors for checkouts started from this link, over your branding settings. |
| `tip` | Optional | [CheckoutTipConfigPreviousAttributes](../models/CheckoutTipConfigPreviousAttributes.md#checkouttipconfigpreviousattributes) or null | Tip options for checkouts started from this link. |
| `total_quantity_sold` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `total_quantity_sold`: [declared alternatives](../models/BundleComponentPreviousAttributes.md#bundlecomponentpreviousattributesquantity). |
| `updated_at` | Optional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at). |
| `url` | Optional | string or null | URL buyers open to use the link. `url`: [declared alternatives](../models/ExpandedPaymentLinkSummaryPreviousAttributes.md#expandedpaymentlinksummarypreviousattributesurl). |
| `version` | Optional | integer or null | Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. `version`: [declared alternatives](../models/GiftCardFundingDisputePreviousAttributes.md#giftcardfundingdisputepreviousattributesversion). |

### PaymentLinkUpdatedInstalledMerchantsEvent.data.previous_attributes.checkout_session_expires_in_seconds

### PaymentLinkUpdatedInstalledMerchantsEvent.data.previous_attributes.checkout_session_expires_in_seconds variant 1

anyOf variant 1: Seconds each checkout session the link starts stays open, from 60 to 86,400. Omit it to use your checkout settings, or 24 hours. It doesn't end the link; use sales_end_at for that..

- Value shape: integer. Seconds each checkout session the link starts stays open, from 60 to 86,400. Omit it to use your checkout settings, or 24 hours. It doesn't end the link; use sales_end_at for that. Seconds each checkout session the link starts stays open, from 60 to 86,400. Omit it to use your checkout settings, or 24 hours. It doesn't end the link; use sales_end_at for that. Format: `int64`. minimum: `60`. maximum: `86400`. 

### PaymentLinkUpdatedInstalledMerchantsEvent.data.previous_attributes.checkout_session_expires_in_seconds variant 2

anyOf variant 2.

- Value shape: null. Seconds each checkout session the link starts stays open, from 60 to 86,400. Omit it to use your checkout settings, or 24 hours. It doesn't end the link; use sales_end_at for that. 

### PaymentLinkUpdatedInstalledMerchantsEvent.data.previous_attributes.completed_count

Declared alternatives: [ExpandedPaymentLinkSummaryPreviousAttributes.completed_count](../models/ExpandedPaymentLinkSummaryPreviousAttributes.md#expandedpaymentlinksummarypreviousattributescompleted_count).

### PaymentLinkUpdatedInstalledMerchantsEvent.data.previous_attributes.created_at

Declared alternatives: [ApiKeyRevokedEvent.data.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at).

### PaymentLinkUpdatedInstalledMerchantsEvent.data.previous_attributes.custom_fields

### PaymentLinkUpdatedInstalledMerchantsEvent.data.previous_attributes.custom_fields variant 1

anyOf variant 1: Questions buyers answer before paying. Answers are recorded on the order and checkout session in `custom_field_answers`..

- Value shape: Array of [PaymentLinkCustomFieldPreviousAttributes](../models/PaymentLinkCustomFieldPreviousAttributes.md#paymentlinkcustomfieldpreviousattributes). Questions buyers answer before paying. Answers are recorded on the order and checkout session in `custom_field_answers`. 

### PaymentLinkUpdatedInstalledMerchantsEvent.data.previous_attributes.custom_fields variant 2

anyOf variant 2.

- Value shape: null. Questions buyers answer before paying. Answers are recorded on the order and checkout session in `custom_field_answers`. 

### PaymentLinkUpdatedInstalledMerchantsEvent.data.previous_attributes.delivery_method_ids

### PaymentLinkUpdatedInstalledMerchantsEvent.data.previous_attributes.delivery_method_ids variant 1

anyOf variant 1: Delivery methods the link offers. Empty when the link has none, and then its checkouts offer settings.checkout.default_delivery_method_ids when the order has items to deliver..

- Value shape: Array of string. Delivery methods the link offers. Empty when the link has none, and then its checkouts offer settings.checkout.default_delivery_method_ids when the order has items to deliver. Items: Example: `"dmet_01KEZF7C00YSG3X2D1TZJ36TM0"`. 

### PaymentLinkUpdatedInstalledMerchantsEvent.data.previous_attributes.delivery_method_ids variant 2

anyOf variant 2.

- Value shape: null. Delivery methods the link offers. Empty when the link has none, and then its checkouts offer settings.checkout.default_delivery_method_ids when the order has items to deliver. 

### PaymentLinkUpdatedInstalledMerchantsEvent.data.previous_attributes.description

Declared alternatives: [ExpandedPaymentLinkSummaryPreviousAttributes.description](../models/ExpandedPaymentLinkSummaryPreviousAttributes.md#expandedpaymentlinksummarypreviousattributesdescription).

### PaymentLinkUpdatedInstalledMerchantsEvent.data.previous_attributes.donation_max_amount_money

Largest amount a buyer can give on a donation link. Must be greater than zero and greater than or equal to donation_min_amount_money. Omit on create for no maximum.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### PaymentLinkUpdatedInstalledMerchantsEvent.data.previous_attributes.donation_max_amount_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### PaymentLinkUpdatedInstalledMerchantsEvent.data.previous_attributes.donation_max_amount_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Largest amount a buyer can give on a donation link. Must be greater than zero and greater than or equal to donation_min_amount_money. Omit on create for no maximum. 

### PaymentLinkUpdatedInstalledMerchantsEvent.data.previous_attributes.donation_max_amount_money variant 1.amount

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.amount](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1amount).

### PaymentLinkUpdatedInstalledMerchantsEvent.data.previous_attributes.donation_max_amount_money variant 1.currency

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.currency](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1currency).

### PaymentLinkUpdatedInstalledMerchantsEvent.data.previous_attributes.donation_min_amount_money

Smallest amount a buyer can give on a donation link.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### PaymentLinkUpdatedInstalledMerchantsEvent.data.previous_attributes.donation_min_amount_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### PaymentLinkUpdatedInstalledMerchantsEvent.data.previous_attributes.donation_min_amount_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Smallest amount a buyer can give on a donation link. 

### PaymentLinkUpdatedInstalledMerchantsEvent.data.previous_attributes.donation_min_amount_money variant 1.amount

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.amount](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1amount).

### PaymentLinkUpdatedInstalledMerchantsEvent.data.previous_attributes.donation_min_amount_money variant 1.currency

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.currency](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1currency).

### PaymentLinkUpdatedInstalledMerchantsEvent.data.previous_attributes.donation_suggested_amount_money_options

### PaymentLinkUpdatedInstalledMerchantsEvent.data.previous_attributes.donation_suggested_amount_money_options variant 1

anyOf variant 1: Amounts a donation link offers as one-tap choices. Use the same currency for all suggested amounts and both bounds..

- Value shape: Array of [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes). Amounts a donation link offers as one-tap choices. Use the same currency for all suggested amounts and both bounds. 

### PaymentLinkUpdatedInstalledMerchantsEvent.data.previous_attributes.donation_suggested_amount_money_options variant 2

anyOf variant 2.

- Value shape: null. Amounts a donation link offers as one-tap choices. Use the same currency for all suggested amounts and both bounds. 

### PaymentLinkUpdatedInstalledMerchantsEvent.data.previous_attributes.donation_suggested_amount_money_options variant 1.[] fields 1

Field definitions: [CheckoutTipConfigPreviousAttributes.smart_tip_money_options variant 1.[] fields 1](../models/CheckoutTipConfigPreviousAttributes.md#checkouttipconfigpreviousattributessmart_tip_money_options-variant-1-fields-1).

### PaymentLinkUpdatedInstalledMerchantsEvent.data.previous_attributes.external_reference_id

Declared alternatives: [BundleArchivedInstalledMerchantsEvent.data.previous_attributes.external_reference_id](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventdataprevious_attributesexternal_reference_id).

### PaymentLinkUpdatedInstalledMerchantsEvent.data.previous_attributes.inactive_message

### PaymentLinkUpdatedInstalledMerchantsEvent.data.previous_attributes.inactive_message variant 1

anyOf variant 1: Message to show the buyer when the link is inactive..

- Value shape: string. Message to show the buyer when the link is inactive. 

### PaymentLinkUpdatedInstalledMerchantsEvent.data.previous_attributes.inactive_message variant 2

anyOf variant 2.

- Value shape: null. Message to show the buyer when the link is inactive. 

### PaymentLinkUpdatedInstalledMerchantsEvent.data.previous_attributes.line_items

### PaymentLinkUpdatedInstalledMerchantsEvent.data.previous_attributes.line_items variant 1

anyOf variant 1: What the link sells..

- Value shape: (Array of ([PaymentLinkLineItemPreviousAttributes](../models/PaymentLinkLineItemPreviousAttributes.md#paymentlinklineitempreviousattributes) and ([PaymentLinkLineItemVariantPreviousAttributes](../models/PaymentLinkLineItemVariantPreviousAttributes.md#paymentlinklineitemvariantpreviousattributes) or [PaymentLinkLineItemBundlePreviousAttributes](../models/PaymentLinkLineItemBundlePreviousAttributes.md#paymentlinklineitembundlepreviousattributes) or [PaymentLinkLineItemCustomFixedPreviousAttributes](../models/PaymentLinkLineItemCustomFixedPreviousAttributes.md#paymentlinklineitemcustomfixedpreviousattributes) or [PaymentLinkLineItemCustomVariablePreviousAttributes](../models/PaymentLinkLineItemCustomVariablePreviousAttributes.md#paymentlinklineitemcustomvariablepreviousattributes)))). What the link sells. 

### PaymentLinkUpdatedInstalledMerchantsEvent.data.previous_attributes.line_items variant 2

anyOf variant 2.

- Value shape: null. What the link sells. 

### PaymentLinkUpdatedInstalledMerchantsEvent.data.previous_attributes.max_completions

### PaymentLinkUpdatedInstalledMerchantsEvent.data.previous_attributes.max_completions variant 1

anyOf variant 1: Most payments the link accepts, counted by `completed_count`. Absent means no limit. Once the limit is reached, resolving the link fails with a request error. It can't be set below `completed_count`..

- Value shape: integer. Most payments the link accepts, counted by `completed_count`. Absent means no limit. Once the limit is reached, resolving the link fails with a request error. It can't be set below `completed_count`. Most payments the link accepts, counted by `completed_count`. Absent means no limit. Once the limit is reached, resolving the link fails with a request error. It can't be set below `completed_count`. Format: `int32`. 

### PaymentLinkUpdatedInstalledMerchantsEvent.data.previous_attributes.max_completions variant 2

anyOf variant 2.

- Value shape: null. Most payments the link accepts, counted by `completed_count`. Absent means no limit. Once the limit is reached, resolving the link fails with a request error. It can't be set below `completed_count`. 

### PaymentLinkUpdatedInstalledMerchantsEvent.data.previous_attributes.merchant_id

Declared alternatives: [ApiKeyRevokedEvent.data.previous_attributes.merchant_id](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributesmerchant_id).

### PaymentLinkUpdatedInstalledMerchantsEvent.data.previous_attributes.metadata

Declared alternatives: [CheckoutSessionClosedInstalledMerchantsEvent.data.previous_attributes.metadata](../models/CheckoutSessionClosedInstalledMerchantsEvent.md#checkoutsessionclosedinstalledmerchantseventdataprevious_attributesmetadata).

### PaymentLinkUpdatedInstalledMerchantsEvent.data.previous_attributes.name

Declared alternatives: [ExpandedPaymentLinkSummaryPreviousAttributes.name](../models/ExpandedPaymentLinkSummaryPreviousAttributes.md#expandedpaymentlinksummarypreviousattributesname).

### PaymentLinkUpdatedInstalledMerchantsEvent.data.previous_attributes.payment_link_id

Declared alternatives: [ExpandedPaymentLinkSummaryPreviousAttributes.payment_link_id](../models/ExpandedPaymentLinkSummaryPreviousAttributes.md#expandedpaymentlinksummarypreviousattributespayment_link_id).

### PaymentLinkUpdatedInstalledMerchantsEvent.data.previous_attributes.payment_link_type

Declared alternatives: [ExpandedPaymentLinkSummaryPreviousAttributes.payment_link_type](../models/ExpandedPaymentLinkSummaryPreviousAttributes.md#expandedpaymentlinksummarypreviousattributespayment_link_type).

### PaymentLinkUpdatedInstalledMerchantsEvent.data.previous_attributes.sales_end_at

### PaymentLinkUpdatedInstalledMerchantsEvent.data.previous_attributes.sales_end_at variant 1

anyOf variant 1: RFC3339 timestamp after which the link stops starting checkouts and resolve fails with `ACTION_NOT_ALLOWED` and reason `not_offered`. Unset means sales do not end on their own, except that an event link without sales_end_at stops selling at event_config.event_at. A checkout opened before the end can still start payment for up to 15 minutes after it..

- Value shape: string. RFC3339 timestamp after which the link stops starting checkouts and resolve fails with `ACTION_NOT_ALLOWED` and reason `not_offered`. Unset means sales do not end on their own, except that an event link without sales_end_at stops selling at event_config.event_at. A checkout opened before the end can still start payment for up to 15 minutes after it. RFC3339 timestamp after which the link stops starting checkouts and resolve fails with `ACTION_NOT_ALLOWED` and reason `not_offered`. Unset means sales do not end on their own, except that an event link without sales_end_at stops selling at event_config.event_at. A checkout opened before the end can still start payment for up to 15 minutes after it. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### PaymentLinkUpdatedInstalledMerchantsEvent.data.previous_attributes.sales_end_at variant 2

anyOf variant 2.

- Value shape: null. RFC3339 timestamp after which the link stops starting checkouts and resolve fails with `ACTION_NOT_ALLOWED` and reason `not_offered`. Unset means sales do not end on their own, except that an event link without sales_end_at stops selling at event_config.event_at. A checkout opened before the end can still start payment for up to 15 minutes after it. 

### PaymentLinkUpdatedInstalledMerchantsEvent.data.previous_attributes.sales_start_at

### PaymentLinkUpdatedInstalledMerchantsEvent.data.previous_attributes.sales_start_at variant 1

anyOf variant 1: RFC3339 timestamp when buyers can first start a checkout from this link. Stored to nanosecond precision. Before it, resolve fails with ACTION_NOT_ALLOWED and reason sales_not_started. Must be earlier than the link’s sales end, including the event start when no explicit end is set..

- Value shape: string. RFC3339 timestamp when buyers can first start a checkout from this link. Stored to nanosecond precision. Before it, resolve fails with ACTION_NOT_ALLOWED and reason sales_not_started. Must be earlier than the link’s sales end, including the event start when no explicit end is set. RFC3339 timestamp when buyers can first start a checkout from this link. Stored to nanosecond precision. Before it, resolve fails with ACTION_NOT_ALLOWED and reason sales_not_started. Must be earlier than the link’s sales end, including the event start when no explicit end is set. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### PaymentLinkUpdatedInstalledMerchantsEvent.data.previous_attributes.sales_start_at variant 2

anyOf variant 2.

- Value shape: null. RFC3339 timestamp when buyers can first start a checkout from this link. Stored to nanosecond precision. Before it, resolve fails with ACTION_NOT_ALLOWED and reason sales_not_started. Must be earlier than the link’s sales end, including the event start when no explicit end is set. 

### PaymentLinkUpdatedInstalledMerchantsEvent.data.previous_attributes.status

Declared alternatives: [ExpandedPaymentLinkSummaryPreviousAttributes.status](../models/ExpandedPaymentLinkSummaryPreviousAttributes.md#expandedpaymentlinksummarypreviousattributesstatus).

### PaymentLinkUpdatedInstalledMerchantsEvent.data.previous_attributes.subscription_plan_id

Declared alternatives: [ExpandedPaymentLinkSummaryPreviousAttributes.subscription_plan_id](../models/ExpandedPaymentLinkSummaryPreviousAttributes.md#expandedpaymentlinksummarypreviousattributessubscription_plan_id).

### PaymentLinkUpdatedInstalledMerchantsEvent.data.previous_attributes.tax

Tax settings for checkouts started from this link.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `calculation` | Conditional | [CheckoutTaxCalculationPreviousAttributes](../models/CheckoutTaxCalculationPreviousAttributes.md#checkouttaxcalculationpreviousattributes) or null | How the order Flint creates calculates tax while tax is enabled. Omitted when it follows `tax.default_calculation` from your settings, where a `provided` default means automatic. On a payment link update, send null to follow your settings again. `calculation`: [declared alternatives](../models/PaymentLinkUpdatedInstalledMerchantsEvent.md#paymentlinkupdatedinstalledmerchantseventdataprevious_attributestax-variant-1calculation). |
| `enabled` | Conditional | boolean or null | Whether Flint calculates tax on the order it creates for this checkout. Omit to use tax.default_enabled from your settings. `enabled`: [declared alternatives](../models/PaymentLinkUpdatedInstalledMerchantsEvent.md#paymentlinkupdatedinstalledmerchantseventdataprevious_attributestax-variant-1enabled). |

### PaymentLinkUpdatedInstalledMerchantsEvent.data.previous_attributes.tax variant 1

anyOf CheckoutTaxConfigPreviousAttributes.

- Optional: `calculation`, `enabled`.

### PaymentLinkUpdatedInstalledMerchantsEvent.data.previous_attributes.tax variant 2

anyOf variant 2.

- Undeclared: `calculation`, `enabled`.
- Value shape: null. Tax settings for checkouts started from this link. 

### PaymentLinkUpdatedInstalledMerchantsEvent.data.previous_attributes.tax variant 1.calculation

How the order Flint creates calculates tax while tax is enabled. Omitted when it follows `tax.default_calculation` from your settings, where a `provided` default means automatic. On a payment link update, send null to follow your settings again.

Field definitions: [shared fields](CheckoutSessionTaxPreviousAttributes.md#checkoutsessiontaxpreviousattributescalculation).

### PaymentLinkUpdatedInstalledMerchantsEvent.data.previous_attributes.tax variant 1.calculation variant 1: `components_source` = `"callback"`

anyOf CheckoutTaxCalculationPreviousAttributes.

- Optional: `components_source`, `mode`.

### PaymentLinkUpdatedInstalledMerchantsEvent.data.previous_attributes.tax variant 1.calculation variant 2

anyOf variant 2.

- Undeclared: `components_source`, `mode`.
- Value shape: null. How the order Flint creates calculates tax while tax is enabled. Omitted when it follows `tax.default_calculation` from your settings, where a `provided` default means automatic. On a payment link update, send null to follow your settings again. 

### PaymentLinkUpdatedInstalledMerchantsEvent.data.previous_attributes.tax variant 1.calculation variant 1.components_source

Declared alternatives: [CheckoutSessionTaxPreviousAttributes.calculation variant 1.components_source](../models/CheckoutSessionTaxPreviousAttributes.md#checkoutsessiontaxpreviousattributescalculation-variant-1components_source).

### PaymentLinkUpdatedInstalledMerchantsEvent.data.previous_attributes.tax variant 1.calculation variant 1.mode

Declared alternatives: [CheckoutSessionTaxPreviousAttributes.calculation variant 1.mode](../models/CheckoutSessionTaxPreviousAttributes.md#checkoutsessiontaxpreviousattributescalculation-variant-1mode).

### PaymentLinkUpdatedInstalledMerchantsEvent.data.previous_attributes.tax variant 1.enabled

### PaymentLinkUpdatedInstalledMerchantsEvent.data.previous_attributes.tax variant 1.enabled variant 1

anyOf variant 1: Whether Flint calculates tax on the order it creates for this checkout. Omit to use tax.default_enabled from your settings..

- Value shape: boolean. Whether Flint calculates tax on the order it creates for this checkout. Omit to use tax.default_enabled from your settings. 

### PaymentLinkUpdatedInstalledMerchantsEvent.data.previous_attributes.tax variant 1.enabled variant 2

anyOf variant 2.

- Value shape: null. Whether Flint calculates tax on the order it creates for this checkout. Omit to use tax.default_enabled from your settings. 

### PaymentLinkUpdatedInstalledMerchantsEvent.data.previous_attributes.total_quantity_sold

Declared alternatives: [BundleComponentPreviousAttributes.quantity](../models/BundleComponentPreviousAttributes.md#bundlecomponentpreviousattributesquantity).

### PaymentLinkUpdatedInstalledMerchantsEvent.data.previous_attributes.updated_at

Declared alternatives: [ApiKeyRevokedEvent.data.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at).

### PaymentLinkUpdatedInstalledMerchantsEvent.data.previous_attributes.url

Declared alternatives: [ExpandedPaymentLinkSummaryPreviousAttributes.url](../models/ExpandedPaymentLinkSummaryPreviousAttributes.md#expandedpaymentlinksummarypreviousattributesurl).

### PaymentLinkUpdatedInstalledMerchantsEvent.data.previous_attributes.version

Declared alternatives: [GiftCardFundingDisputePreviousAttributes.version](../models/GiftCardFundingDisputePreviousAttributes.md#giftcardfundingdisputepreviousattributesversion).

### PaymentLinkUpdatedInstalledMerchantsEvent.source

Field definitions: [BalanceTransactionCreatedInstalledMerchantsEvent.source](../models/BalanceTransactionCreatedInstalledMerchantsEvent.md#balancetransactioncreatedinstalledmerchantseventsource).

