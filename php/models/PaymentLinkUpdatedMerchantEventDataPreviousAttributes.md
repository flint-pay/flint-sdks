[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentLinkUpdatedMerchantEventDataPreviousAttributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_fields` | Optional | [CheckoutBuyerFieldsPreviousAttributes](../models/CheckoutBuyerFieldsPreviousAttributes.md#checkoutbuyerfieldspreviousattributes) or null | What checkout asks the buyer for. Each field you leave out uses your checkout settings. |
| `checkout_session_expires_in_seconds` | Optional | integer or null | Seconds each checkout session the link starts stays open, from 60 to 86,400. Omit it to use your checkout settings, or 24 hours. It doesn't end the link; use sales_end_at for that. `checkout_session_expires_in_seconds`: [declared alternatives](../models/PaymentLinkUpdatedMerchantEventDataPreviousAttributes.md#paymentlinkupdatedmerchanteventdatapreviousattributescheckout_session_expires_in_seconds). |
| `completed_count` | Optional | integer or null | Number of paid checkout sessions started from this link. `completed_count`: [declared alternatives](../models/ExpandedPaymentLinkSummaryPreviousAttributes.md#expandedpaymentlinksummarypreviousattributescompleted_count). |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `custom_fields` | Optional | Array of [PaymentLinkCustomFieldPreviousAttributes](../models/PaymentLinkCustomFieldPreviousAttributes.md#paymentlinkcustomfieldpreviousattributes) or null | Questions buyers answer before paying. Answers are recorded on the order and checkout session in `custom_field_answers`. `custom_fields`: [declared alternatives](../models/PaymentLinkUpdatedMerchantEventDataPreviousAttributes.md#paymentlinkupdatedmerchanteventdatapreviousattributescustom_fields). |
| `custom_text` | Optional | [CheckoutCustomTextConfigPreviousAttributes](../models/CheckoutCustomTextConfigPreviousAttributes.md#checkoutcustomtextconfigpreviousattributes) or null | Custom text for checkouts started from this link. |
| `delivery_method_ids` | Optional | Array of string or null | Delivery methods the link offers. Empty when the link has none, and then its checkouts offer settings.checkout.default_delivery_method_ids when the order has items to deliver. `delivery_method_ids`: [declared alternatives](../models/PaymentLinkUpdatedMerchantEventDataPreviousAttributes.md#paymentlinkupdatedmerchanteventdatapreviousattributesdelivery_method_ids). |
| `description` | Optional | string or null | Text about what the link sells, returned to buyers when they open it. `description`: [declared alternatives](../models/ExpandedPaymentLinkSummaryPreviousAttributes.md#expandedpaymentlinksummarypreviousattributesdescription). |
| `donation_max_amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Largest amount a buyer can give on a donation link. Must be greater than zero and greater than or equal to donation_min_amount_money. Omit on create for no maximum. |
| `donation_min_amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Smallest amount a buyer can give on a donation link. |
| `donation_suggested_amount_money_options` | Optional | Array of [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Amounts a donation link offers as one-tap choices. `donation_suggested_amount_money_options`: [declared alternatives](../models/PaymentLinkUpdatedMerchantEventDataPreviousAttributes.md#paymentlinkupdatedmerchanteventdatapreviousattributesdonation_suggested_amount_money_options). |
| `event_config` | Optional | [PaymentLinkEventConfigPreviousAttributes](../models/PaymentLinkEventConfigPreviousAttributes.md#paymentlinkeventconfigpreviousattributes) or null | Event details for an `event` link: when and where it takes place and how many tickets it sells. `event_config`: [declared alternatives](../models/PaymentLinkUpdatedMerchantEventDataPreviousAttributes.md#paymentlinkupdatedmerchanteventdatapreviousattributesevent_config). |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. `external_reference_id`: [declared alternatives](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdata-fields-1previous_attributesexternal_reference_id). |
| `image` | Optional | [ImageAttachmentPreviousAttributes](../models/ImageAttachmentPreviousAttributes.md#imageattachmentpreviousattributes) or null | Image shown to buyers with the link. `image`: [declared alternatives](../models/PaymentLinkUpdatedMerchantEventDataPreviousAttributes.md#paymentlinkupdatedmerchanteventdatapreviousattributesimage). |
| `inactive_message` | Optional | string or null | Message to show the buyer when the link is inactive. `inactive_message`: [declared alternatives](../models/PaymentLinkUpdatedMerchantEventDataPreviousAttributes.md#paymentlinkupdatedmerchanteventdatapreviousattributesinactive_message). |
| `inventory_routing_source` | Optional | [InventoryRoutingSourcePreviousAttributes](../models/InventoryRoutingSourcePreviousAttributes.md#inventoryroutingsourcepreviousattributes) or null | The inventory location or routing policy that supplies stock for the link's catalog lines. Absent when using the implicit single-Location fallback, which is evaluated again on use. `inventory_routing_source`: [declared alternatives](../models/PaymentLinkUpdatedMerchantEventDataPreviousAttributes.md#paymentlinkupdatedmerchanteventdatapreviousattributesinventory_routing_source). |
| `legal` | Optional | [CheckoutLegalConfigPreviousAttributes](../models/CheckoutLegalConfigPreviousAttributes.md#checkoutlegalconfigpreviousattributes) or null | The terms and policy links checkouts started from this link show the buyer. |
| `line_items` | Optional | Array of (object and Alternative shapes (see declared variants)) or null | What the link sells. `line_items`: [declared alternatives](../models/PaymentLinkUpdatedMerchantEventDataPreviousAttributes.md#paymentlinkupdatedmerchanteventdatapreviousattributesline_items). |
| `max_completions` | Optional | integer or null | Most payments the link accepts, counted by `completed_count`. Absent means no limit. Once the limit is reached, resolving the link fails with a request error. It can't be set below `completed_count`. `max_completions`: [declared alternatives](../models/PaymentLinkUpdatedMerchantEventDataPreviousAttributes.md#paymentlinkupdatedmerchanteventdatapreviousattributesmax_completions). |
| `merchant_id` | Optional | string or null | ID of the merchant this resource belongs to. `merchant_id`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributesmerchant_id). |
| `metadata` | Optional | Map of string or null | Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules. `metadata`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesmetadata). |
| `name` | Optional | string or null | Name of the payment link. `name`: [declared alternatives](../models/ExpandedPaymentLinkSummaryPreviousAttributes.md#expandedpaymentlinksummarypreviousattributesname). |
| `payment_link_id` | Optional | string or null | Unique identifier for this payment link, prefixed `pl_`. `payment_link_id`: [declared alternatives](../models/ExpandedPaymentLinkSummaryPreviousAttributes.md#expandedpaymentlinksummarypreviousattributespayment_link_id). |
| `payment_link_type` | Optional | string or null | What kind of link this is. Values: `"standard"`, `"donation"`, `"event"`. `payment_link_type`: [declared alternatives](../models/ExpandedPaymentLinkSummaryPreviousAttributes.md#expandedpaymentlinksummarypreviousattributespayment_link_type). |
| `payments` | Optional | [CheckoutPaymentConfigPreviousAttributes](../models/CheckoutPaymentConfigPreviousAttributes.md#checkoutpaymentconfigpreviousattributes) or null | Payment options for checkouts started from this link. |
| `promotion_config` | Optional | [CheckoutPromotionConfigPreviousAttributes](../models/CheckoutPromotionConfigPreviousAttributes.md#checkoutpromotionconfigpreviousattributes) or null | Whether automatic promotions apply to checkouts started from this link and whether buyers can enter promotion codes. |
| `redirects` | Optional | [CheckoutRedirectsPreviousAttributes](../models/CheckoutRedirectsPreviousAttributes.md#checkoutredirectspreviousattributes) or null | Where checkout sessions started from this payment link send the buyer after payment, cancellation, or expiration. `redirects`: [declared alternatives](../models/PaymentLinkUpdatedMerchantEventDataPreviousAttributes.md#paymentlinkupdatedmerchanteventdatapreviousattributesredirects). |
| `sales_end_at` | Optional | string or null | RFC3339 timestamp after which the link stops starting checkouts and resolve fails with `ACTION_NOT_ALLOWED` and reason `not_offered`. Unset means sales do not end on their own, except that an event link without sales_end_at stops selling at event_config.event_at. A checkout opened before the end can still start payment for up to 15 minutes after it. `sales_end_at`: [declared alternatives](../models/PaymentLinkUpdatedMerchantEventDataPreviousAttributes.md#paymentlinkupdatedmerchanteventdatapreviousattributessales_end_at). |
| `sales_summary` | Optional | [PaymentLinkSalesSummaryPreviousAttributes](../models/PaymentLinkSalesSummaryPreviousAttributes.md#paymentlinksalessummarypreviousattributes) or null | Present only with expand=sales_summary on GET /v1/payment-links or GET /v1/payment-links/{payment_link_id}. Available to merchant callers, including dashboard sessions and API keys with checkouts.payment_links.read. Uses the same paid-order definition as the merchant sales summary. `sales_summary`: [declared alternatives](../models/PaymentLinkUpdatedMerchantEventDataPreviousAttributes.md#paymentlinkupdatedmerchanteventdatapreviousattributessales_summary). |
| `status` | Optional | string or null | Whether the link can start new checkouts. Values: `"active"`, `"inactive"`. `status`: [declared alternatives](../models/ExpandedPaymentLinkSummaryPreviousAttributes.md#expandedpaymentlinksummarypreviousattributesstatus). |
| `subscription_plan` | Optional | [ExpandedSubscriptionPlanSummaryPreviousAttributes](../models/ExpandedSubscriptionPlanSummaryPreviousAttributes.md#expandedsubscriptionplansummarypreviousattributes) or null | Present only when `expand` includes `subscription_plan`; `null` when expanded and there is no related subscription plan. `subscription_plan`: [declared alternatives](../models/PaymentLinkUpdatedMerchantEventDataPreviousAttributes.md#paymentlinkupdatedmerchanteventdatapreviousattributessubscription_plan). |
| `subscription_plan_id` | Optional | string or null | ID of the subscription plan the link sells. Absent for a link that doesn't sell a subscription. `subscription_plan_id`: [declared alternatives](../models/ExpandedPaymentLinkSummaryPreviousAttributes.md#expandedpaymentlinksummarypreviousattributessubscription_plan_id). |
| `tax` | Optional | [CheckoutTaxConfigPreviousAttributes](../models/CheckoutTaxConfigPreviousAttributes.md#checkouttaxconfigpreviousattributes) or null | Tax settings for checkouts started from this link. |
| `theme` | Optional | [ThemeConfigPreviousAttributes](../models/ThemeConfigPreviousAttributes.md#themeconfigpreviousattributes) or null | The title and colors for checkouts started from this link, over your branding settings. |
| `tip` | Optional | [CheckoutTipConfigPreviousAttributes](../models/CheckoutTipConfigPreviousAttributes.md#checkouttipconfigpreviousattributes) or null | Tip options for checkouts started from this link. |
| `total_quantity_sold` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `total_quantity_sold`: [declared alternatives](../models/BundleComponentPreviousAttributes.md#bundlecomponentpreviousattributesquantity). |
| `updated_at` | Optional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `url` | Optional | string or null | URL buyers open to use the link. `url`: [declared alternatives](../models/ExpandedPaymentLinkSummaryPreviousAttributes.md#expandedpaymentlinksummarypreviousattributesurl). |
| `version` | Optional | integer or null | Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. `version`: [declared alternatives](../models/GiftCardUpdatedMerchantEventDataPreviousAttributes.md#giftcardupdatedmerchanteventdatapreviousattributesversion). |

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.checkout_session_expires_in_seconds

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.checkout_session_expires_in_seconds variant 1

anyOf variant 1: Seconds each checkout session the link starts stays open, from 60 to 86,400. Omit it to use your checkout settings, or 24 hours. It doesn't end the link; use sales_end_at for that..

- Value shape: integer. Seconds each checkout session the link starts stays open, from 60 to 86,400. Omit it to use your checkout settings, or 24 hours. It doesn't end the link; use sales_end_at for that. Seconds each checkout session the link starts stays open, from 60 to 86,400. Omit it to use your checkout settings, or 24 hours. It doesn't end the link; use sales_end_at for that. Format: `int64`. minimum: `60`. maximum: `86400`. 

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.checkout_session_expires_in_seconds variant 2

anyOf variant 2.

- Value shape: null. Seconds each checkout session the link starts stays open, from 60 to 86,400. Omit it to use your checkout settings, or 24 hours. It doesn't end the link; use sales_end_at for that. 

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.completed_count

Declared alternatives: [ExpandedPaymentLinkSummaryPreviousAttributes.completed_count](../models/ExpandedPaymentLinkSummaryPreviousAttributes.md#expandedpaymentlinksummarypreviousattributescompleted_count).

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.created_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.custom_fields

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.custom_fields variant 1

anyOf variant 1: Questions buyers answer before paying. Answers are recorded on the order and checkout session in `custom_field_answers`..

- Value shape: Array of [PaymentLinkCustomFieldPreviousAttributes](../models/PaymentLinkCustomFieldPreviousAttributes.md#paymentlinkcustomfieldpreviousattributes). Questions buyers answer before paying. Answers are recorded on the order and checkout session in `custom_field_answers`. 

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.custom_fields variant 2

anyOf variant 2.

- Value shape: null. Questions buyers answer before paying. Answers are recorded on the order and checkout session in `custom_field_answers`. 

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.custom_fields variant 1.[] fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `custom_field_type` | Optional | string or null | What kind of answer the field collects. Values: `"text"`, `"dropdown"`, `"checkbox"`, `"textarea"`. `custom_field_type`: [declared alternatives](../models/PaymentLinkCustomFieldPreviousAttributes.md#paymentlinkcustomfieldpreviousattributescustom_field_type). |
| `key` | Optional | string or null | Unique custom field key, without leading or trailing whitespace. Each answer records it as `custom_field_answers[].key`. `key`: [declared alternatives](../models/PaymentLinkCustomFieldPreviousAttributes.md#paymentlinkcustomfieldpreviousattributeskey). |
| `label` | Optional | string or null | Question shown to the buyer. `label`: [declared alternatives](../models/PaymentLinkCustomFieldPreviousAttributes.md#paymentlinkcustomfieldpreviousattributeslabel). |
| `max_length` | Optional | integer or null | Maximum answer length for text and textarea fields, counted in Unicode code points. Defaults to 255 for text and 1000 for textarea when omitted. `max_length`: [declared alternatives](../models/PaymentLinkCustomFieldPreviousAttributes.md#paymentlinkcustomfieldpreviousattributesmax_length). |
| `options` | Optional | Array of string or null | Dropdown choices. Dropdown fields require at least one option. Options must not have leading or trailing whitespace. `options`: [declared alternatives](../models/PaymentLinkCustomFieldPreviousAttributes.md#paymentlinkcustomfieldpreviousattributesoptions). |
| `payment_link_custom_field_id` | Optional | string or null | Unique identifier for this payment link custom field, prefixed `plcf_`. `payment_link_custom_field_id`: [declared alternatives](../models/PaymentLinkUpdatedMerchantEventDataPreviousAttributes.md#paymentlinkupdatedmerchanteventdatapreviousattributescustom_fields-variant-1-fields-1payment_link_custom_field_id). |
| `placeholder` | Optional | string or null | Hint text shown inside the empty field. `placeholder`: [declared alternatives](../models/PaymentLinkCustomFieldPreviousAttributes.md#paymentlinkcustomfieldpreviousattributesplaceholder). |
| `position` | Optional | integer or null | Display order among the link's custom fields. Lower numbers come first. `position`: [declared alternatives](../models/PaymentLinkCustomFieldPreviousAttributes.md#paymentlinkcustomfieldpreviousattributesposition). |
| `required` | Optional | boolean or null | Whether the buyer must answer before paying. `required`: [declared alternatives](../models/PaymentLinkCustomFieldPreviousAttributes.md#paymentlinkcustomfieldpreviousattributesrequired). |

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.custom_fields variant 1.[] fields 1.custom_field_type

Declared alternatives: [PaymentLinkCustomFieldPreviousAttributes.custom_field_type](../models/PaymentLinkCustomFieldPreviousAttributes.md#paymentlinkcustomfieldpreviousattributescustom_field_type).

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.custom_fields variant 1.[] fields 1.key

Declared alternatives: [PaymentLinkCustomFieldPreviousAttributes.key](../models/PaymentLinkCustomFieldPreviousAttributes.md#paymentlinkcustomfieldpreviousattributeskey).

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.custom_fields variant 1.[] fields 1.label

Declared alternatives: [PaymentLinkCustomFieldPreviousAttributes.label](../models/PaymentLinkCustomFieldPreviousAttributes.md#paymentlinkcustomfieldpreviousattributeslabel).

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.custom_fields variant 1.[] fields 1.max_length

Declared alternatives: [PaymentLinkCustomFieldPreviousAttributes.max_length](../models/PaymentLinkCustomFieldPreviousAttributes.md#paymentlinkcustomfieldpreviousattributesmax_length).

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.custom_fields variant 1.[] fields 1.options

Declared alternatives: [PaymentLinkCustomFieldPreviousAttributes.options](../models/PaymentLinkCustomFieldPreviousAttributes.md#paymentlinkcustomfieldpreviousattributesoptions).

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.custom_fields variant 1.[] fields 1.payment_link_custom_field_id

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.custom_fields variant 1.[] fields 1.payment_link_custom_field_id variant 1

anyOf variant 1: Unique identifier for this payment link custom field, prefixed `plcf_`..

- Value shape: string. Unique identifier for this payment link custom field, prefixed `plcf_`. Unique identifier for this payment link custom field, prefixed `plcf_`. Example: `"plcf_01KEZF7C00JBQMP98WBXZA3RHS"`. 

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.custom_fields variant 1.[] fields 1.payment_link_custom_field_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this payment link custom field, prefixed `plcf_`. 

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.custom_fields variant 1.[] fields 1.placeholder

Declared alternatives: [PaymentLinkCustomFieldPreviousAttributes.placeholder](../models/PaymentLinkCustomFieldPreviousAttributes.md#paymentlinkcustomfieldpreviousattributesplaceholder).

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.custom_fields variant 1.[] fields 1.position

Declared alternatives: [PaymentLinkCustomFieldPreviousAttributes.position](../models/PaymentLinkCustomFieldPreviousAttributes.md#paymentlinkcustomfieldpreviousattributesposition).

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.custom_fields variant 1.[] fields 1.required

Declared alternatives: [PaymentLinkCustomFieldPreviousAttributes.required](../models/PaymentLinkCustomFieldPreviousAttributes.md#paymentlinkcustomfieldpreviousattributesrequired).

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.delivery_method_ids

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.delivery_method_ids variant 1

anyOf variant 1: Delivery methods the link offers. Empty when the link has none, and then its checkouts offer settings.checkout.default_delivery_method_ids when the order has items to deliver..

- Value shape: Array of string. Delivery methods the link offers. Empty when the link has none, and then its checkouts offer settings.checkout.default_delivery_method_ids when the order has items to deliver. 

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.delivery_method_ids variant 2

anyOf variant 2.

- Value shape: null. Delivery methods the link offers. Empty when the link has none, and then its checkouts offer settings.checkout.default_delivery_method_ids when the order has items to deliver. 

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.description

Declared alternatives: [ExpandedPaymentLinkSummaryPreviousAttributes.description](../models/ExpandedPaymentLinkSummaryPreviousAttributes.md#expandedpaymentlinksummarypreviousattributesdescription).

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.donation_suggested_amount_money_options

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.donation_suggested_amount_money_options variant 1

anyOf variant 1: Amounts a donation link offers as one-tap choices..

- Value shape: Array of [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes). Amounts a donation link offers as one-tap choices. 

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.donation_suggested_amount_money_options variant 2

anyOf variant 2.

- Value shape: null. Amounts a donation link offers as one-tap choices. 

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.event_config

Event details for an `event` link: when and where it takes place and how many tickets it sells.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `collect_attendee_names` | Conditional | boolean or null | Whether resolving the link requires `attendee_names`, one name per ticket. Flint copies the names onto the tickets when the order is paid. Defaults to false. `collect_attendee_names`: [declared alternatives](../models/PaymentLinkEventConfigPreviousAttributes.md#paymentlinkeventconfigpreviousattributescollect_attendee_names). |
| `event_at` | Conditional | string or null | RFC3339 timestamp. `event_at`: [declared alternatives](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at). |
| `max_total_quantity` | Conditional | integer or null | Most tickets the event sells across all orders. `null` when the event has no ticket limit. On update, send null to remove the limit; a value below the tickets already sold or held by payments in progress fails with `LIMIT_EXCEEDED`. Whole-number quantity; fractional quantities are not supported. `max_total_quantity`: [declared alternatives](../models/PaymentLinkEventConfigPreviousAttributes.md#paymentlinkeventconfigpreviousattributesmax_total_quantity). |
| `send_ticket_emails` | Conditional | boolean or null | Whether Flint emails tickets to buyers after they pay. `send_ticket_emails`: [declared alternatives](../models/PaymentLinkEventConfigPreviousAttributes.md#paymentlinkeventconfigpreviousattributessend_ticket_emails). |
| `ticket_prefix` | Conditional | string or null | Prefix for ticket numbers, up to 5 characters. It cannot change after the event has issued tickets. `ticket_prefix`: [declared alternatives](../models/PaymentLinkEventConfigPreviousAttributes.md#paymentlinkeventconfigpreviousattributesticket_prefix). |
| `timezone` | Conditional | string or null | IANA time zone of the event venue, used to show `event_at` as venue time. `timezone`: [declared alternatives](../models/PaymentLinkEventConfigPreviousAttributes.md#paymentlinkeventconfigpreviousattributestimezone). |
| `venue` | Conditional | string or null | Where the event takes place. `venue`: [declared alternatives](../models/PaymentLinkEventConfigPreviousAttributes.md#paymentlinkeventconfigpreviousattributesvenue). |

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.event_config variant 1

anyOf PaymentLinkEventConfigPreviousAttributes.

- Optional: `collect_attendee_names`, `event_at`, `max_total_quantity`, `send_ticket_emails`, `ticket_prefix`, `timezone`, `venue`.

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.event_config variant 2

anyOf variant 2.

- Undeclared: `collect_attendee_names`, `event_at`, `max_total_quantity`, `send_ticket_emails`, `ticket_prefix`, `timezone`, `venue`.
- Value shape: null. Event details for an `event` link: when and where it takes place and how many tickets it sells. 

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.event_config variant 1.collect_attendee_names

Declared alternatives: [PaymentLinkEventConfigPreviousAttributes.collect_attendee_names](../models/PaymentLinkEventConfigPreviousAttributes.md#paymentlinkeventconfigpreviousattributescollect_attendee_names).

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.event_config variant 1.event_at

Declared alternatives: [PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.environment_grants variant 1.[] fields 1.created_at](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at).

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.event_config variant 1.max_total_quantity

Declared alternatives: [PaymentLinkEventConfigPreviousAttributes.max_total_quantity](../models/PaymentLinkEventConfigPreviousAttributes.md#paymentlinkeventconfigpreviousattributesmax_total_quantity).

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.event_config variant 1.send_ticket_emails

Declared alternatives: [PaymentLinkEventConfigPreviousAttributes.send_ticket_emails](../models/PaymentLinkEventConfigPreviousAttributes.md#paymentlinkeventconfigpreviousattributessend_ticket_emails).

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.event_config variant 1.ticket_prefix

Declared alternatives: [PaymentLinkEventConfigPreviousAttributes.ticket_prefix](../models/PaymentLinkEventConfigPreviousAttributes.md#paymentlinkeventconfigpreviousattributesticket_prefix).

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.event_config variant 1.timezone

Declared alternatives: [PaymentLinkEventConfigPreviousAttributes.timezone](../models/PaymentLinkEventConfigPreviousAttributes.md#paymentlinkeventconfigpreviousattributestimezone).

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.event_config variant 1.venue

Declared alternatives: [PaymentLinkEventConfigPreviousAttributes.venue](../models/PaymentLinkEventConfigPreviousAttributes.md#paymentlinkeventconfigpreviousattributesvenue).

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.external_reference_id

Declared alternatives: [TaxCalculationCallbackActivatedEvent.data fields 1.previous_attributes.external_reference_id](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdata-fields-1previous_attributesexternal_reference_id).

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.image

Image shown to buyers with the link.

Field definitions: [shared fields](MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.md#merchantreadinessupdatedmerchanteventdatapreviousattributesicon).

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.image variant 1

anyOf ImageAttachmentPreviousAttributes.

- Optional: `alt`, `file_id`, `height`, `source_reference`, `url`, `width`.

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.image variant 2

anyOf variant 2.

- Undeclared: `alt`, `file_id`, `height`, `source_reference`, `url`, `width`.
- Value shape: null. Image shown to buyers with the link. 

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.image variant 1.alt

Declared alternatives: [ImageAttachmentPreviousAttributes.alt](../models/ImageAttachmentPreviousAttributes.md#imageattachmentpreviousattributesalt).

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.image variant 1.file_id

Declared alternatives: [BundleArchivedMerchantEventDataPreviousAttributes.images variant 1.[] fields 1.file_id](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributesimages-variant-1-fields-1file_id).

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.image variant 1.height

Declared alternatives: [ImageAttachmentPreviousAttributes.height](../models/ImageAttachmentPreviousAttributes.md#imageattachmentpreviousattributesheight).

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.image variant 1.source_reference

Declared alternatives: [ImageAttachmentPreviousAttributes.source_reference](../models/ImageAttachmentPreviousAttributes.md#imageattachmentpreviousattributessource_reference).

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.image variant 1.url

Declared alternatives: [ImageAttachmentPreviousAttributes.url](../models/ImageAttachmentPreviousAttributes.md#imageattachmentpreviousattributesurl).

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.image variant 1.width

Declared alternatives: [ImageAttachmentPreviousAttributes.width](../models/ImageAttachmentPreviousAttributes.md#imageattachmentpreviousattributeswidth).

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.inactive_message

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.inactive_message variant 1

anyOf variant 1: Message to show the buyer when the link is inactive..

- Value shape: string. Message to show the buyer when the link is inactive. 

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.inactive_message variant 2

anyOf variant 2.

- Value shape: null. Message to show the buyer when the link is inactive. 

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.inventory_routing_source

The inventory location or routing policy that supplies stock for the link's catalog lines. Absent when using the implicit single-Location fallback, which is evaluated again on use.

Field definitions: [shared fields](InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.md#inventoryreservationactionrequiredmerchanteventdatapreviousattributesinventory_routing_source).

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.inventory_routing_source variant 1

anyOf InventoryRoutingSourcePreviousAttributes.

- Optional: `inventory_allocation_policy_id`, `inventory_allocation_policy_revision_id`, `location_id`, `type`.

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.inventory_routing_source variant 2

anyOf variant 2.

- Undeclared: `inventory_allocation_policy_id`, `inventory_allocation_policy_revision_id`, `location_id`, `type`.
- Value shape: null. The inventory location or routing policy that supplies stock for the link's catalog lines. Absent when using the implicit single-Location fallback, which is evaluated again on use. 

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.inventory_routing_source variant 1.inventory_allocation_policy_id

Declared alternatives: [InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.inventory_routing_source variant 1.inventory_allocation_policy_id](../models/InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.md#inventoryreservationactionrequiredmerchanteventdatapreviousattributesinventory_routing_source-variant-1inventory_allocation_policy_id).

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.inventory_routing_source variant 1.inventory_allocation_policy_revision_id

Declared alternatives: [InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.inventory_routing_source variant 1.inventory_allocation_policy_revision_id](../models/InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.md#inventoryreservationactionrequiredmerchanteventdatapreviousattributesinventory_routing_source-variant-1inventory_allocation_policy_revision_id).

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.inventory_routing_source variant 1.location_id

Declared alternatives: [InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.inventory_routing_source variant 1.location_id](../models/InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.md#inventoryreservationactionrequiredmerchanteventdatapreviousattributesinventory_routing_source-variant-1location_id).

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.inventory_routing_source variant 1.type

Declared alternatives: [InventoryRoutingSourcePreviousAttributes.type](../models/InventoryRoutingSourcePreviousAttributes.md#inventoryroutingsourcepreviousattributestype).

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.line_items

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.line_items variant 1

anyOf variant 1: What the link sells..

- Value shape: Array of (object and Alternative shapes (see declared variants) and object and Alternative shapes (see declared variants)). What the link sells. 

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.line_items variant 2

anyOf variant 2.

- Value shape: null. What the link sells. 

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `allow_quantity_adjustment` | Optional | boolean or null | Whether the buyer can change the quantity in checkout. `allow_quantity_adjustment`: [declared alternatives](../models/PaymentLinkUpdatedMerchantEventDataPreviousAttributes.md#paymentlinkupdatedmerchanteventdatapreviousattributesline_items-variant-1-fields-1allow_quantity_adjustment). |
| `allow_unit_price_adjustment` | Optional | Varies by condition | Whether the buyer sets the unit price. Only `custom_variable` lines allow it. `allow_unit_price_adjustment`: [declared alternatives](../models/PaymentLinkUpdatedMerchantEventDataPreviousAttributes.md#paymentlinkupdatedmerchanteventdatapreviousattributesline_items-variant-1-fields-1-variant-1allow_unit_price_adjustment), [declared alternatives](../models/PaymentLinkUpdatedMerchantEventDataPreviousAttributes.md#paymentlinkupdatedmerchanteventdatapreviousattributesline_items-variant-1-fields-1-variant-4allow_unit_price_adjustment), [declared alternatives](../models/PaymentLinkUpdatedMerchantEventDataPreviousAttributes.md#paymentlinkupdatedmerchanteventdatapreviousattributesline_items-variant-1-fields-1-variant-5allow_unit_price_adjustment). |
| `bundle_id` | Optional | string or null | ID of the catalog bundle a `bundle` line sells. `bundle_id`: [declared alternatives](../models/PaymentLinkUpdatedMerchantEventDataPreviousAttributes.md#paymentlinkupdatedmerchanteventdatapreviousattributesline_items-variant-1-fields-1bundle_id). |
| `default_variant_id` | Optional | string or null | Variant selected when the page opens and used at resolve when the buyer omits a selection. Must be in variant_ids. Omit it to require a buyer selection. `default_variant_id`: [declared alternatives](../models/PaymentLinkUpdatedMerchantEventDataPreviousAttributes.md#paymentlinkupdatedmerchanteventdatapreviousattributesline_items-variant-1-fields-1default_variant_id). |
| `description` | Optional | string or null | Description of an ad hoc line item. `description`: [declared alternatives](../models/PaymentLinkUpdatedMerchantEventDataPreviousAttributes.md#paymentlinkupdatedmerchanteventdatapreviousattributesline_items-variant-1-fields-1description). |
| `is_catalog_item_unavailable` | Optional | boolean or null | True when the referenced variant or bundle cannot be sold, or no listed variant in variant_ids can be sold in the line currency. Always false on ad hoc line items. `is_catalog_item_unavailable`: [declared alternatives](../models/PaymentLinkUpdatedMerchantEventDataPreviousAttributes.md#paymentlinkupdatedmerchanteventdatapreviousattributesline_items-variant-1-fields-1is_catalog_item_unavailable). |
| `is_sold_out` | Optional | boolean or null | Public event read: true when the tier or event has no capacity left. `is_sold_out`: [declared alternatives](../models/PaymentLinkUpdatedMerchantEventDataPreviousAttributes.md#paymentlinkupdatedmerchanteventdatapreviousattributesline_items-variant-1-fields-1is_sold_out). |
| `key` | Optional | string or null | Keys the resolve override maps. Stable line item key used in checkout overrides. Must not have leading or trailing whitespace. Assigned as line_item_1, line_item_2, and so on when omitted, skipping numbers already used by explicit keys; retained for an existing line item when omitted on update. `key`: [declared alternatives](../models/PaymentLinkUpdatedMerchantEventDataPreviousAttributes.md#paymentlinkupdatedmerchanteventdatapreviousattributesline_items-variant-1-fields-1key). |
| `max_quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `max_quantity`: [declared alternatives](../models/BundleComponentPreviousAttributes.md#bundlecomponentpreviousattributesquantity). |
| `max_total_quantity` | Optional | integer or null | Optional whole-number admission capacity across all orders for an event tier; fractional quantities are not supported. Must be at least 1 and cannot exceed event_config.max_total_quantity when the event is capped. Omit for no tier cap; omitting it in a line_items replacement removes an existing cap. `max_total_quantity`: [declared alternatives](../models/PaymentLinkUpdatedMerchantEventDataPreviousAttributes.md#paymentlinkupdatedmerchanteventdatapreviousattributesline_items-variant-1-fields-1max_total_quantity). |
| `max_unit_price_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Highest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Must be greater than zero and greater than or equal to min_unit_price_money. Omit for no maximum. |
| `min_quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `min_quantity`: [declared alternatives](../models/BundleComponentPreviousAttributes.md#bundlecomponentpreviousattributesquantity). |
| `min_unit_price_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Lowest unit price the buyer can enter when `allow_unit_price_adjustment` is true. |
| `name` | Optional | string or null | Name of an ad hoc line item. Catalog lines take the catalog name. `name`: [declared alternatives](../models/PaymentLinkUpdatedMerchantEventDataPreviousAttributes.md#paymentlinkupdatedmerchanteventdatapreviousattributesline_items-variant-1-fields-1name). |
| `payment_link_line_item_id` | Optional | string or null | Unique identifier for this payment link line item, prefixed `plli_`. `payment_link_line_item_id`: [declared alternatives](../models/PaymentLinkUpdatedMerchantEventDataPreviousAttributes.md#paymentlinkupdatedmerchanteventdatapreviousattributesline_items-variant-1-fields-1payment_link_line_item_id). |
| `product_id` | Optional | string or null | Parent catalog context only. The product that the variants in variant_ids belong to. Present only on buyer choice lines; refused on input. `product_id`: [declared alternatives](../models/PaymentLinkUpdatedMerchantEventDataPreviousAttributes.md#paymentlinkupdatedmerchanteventdatapreviousattributesline_items-variant-1-fields-1product_id). |
| `product_type` | Optional | string or null | Classification configured on a custom line for ACH debit. Null when unclassified or catalog-backed; catalog lines get their product classification when checkout starts. Values: `"physical"`, `"service"`, `"fee"`, `"digital"`, `"gift_card"`, `null`. `product_type`: [declared alternatives](../models/PaymentLinkUpdatedMerchantEventDataPreviousAttributes.md#paymentlinkupdatedmerchanteventdatapreviousattributesline_items-variant-1-fields-1product_type). |
| `quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `quantity`: [declared alternatives](../models/BundleComponentPreviousAttributes.md#bundlecomponentpreviousattributesquantity). |
| `remaining_quantity` | Optional | integer or null | Public event read: whole-number admissions left after sales and payment holds; fractional quantities are not supported. This quantity is bounded by both the tier and event caps. Omitted when neither is capped. `remaining_quantity`: [declared alternatives](../models/PaymentLinkUpdatedMerchantEventDataPreviousAttributes.md#paymentlinkupdatedmerchanteventdatapreviousattributesline_items-variant-1-fields-1remaining_quantity). |
| `resolved_name` | Optional | string or null | Current catalog name of the referenced variant or bundle, or the product name for variant_ids lines. A variant reads as the product name, plus the variant name when the variant is a named option combination. This is the catalog value at read time, not a stored snapshot: checkout resolves it again when a buyer opens the link. Absent on ad-hoc line items and when the catalog object no longer exists. `resolved_name`: [declared alternatives](../models/PaymentLinkUpdatedMerchantEventDataPreviousAttributes.md#paymentlinkupdatedmerchanteventdatapreviousattributesline_items-variant-1-fields-1resolved_name). |
| `resolved_price_range` | Optional | [ProductPriceRangePreviousAttributes](../models/ProductPriceRangePreviousAttributes.md#productpricerangepreviousattributes) or null | Current lowest and highest catalog unit prices among listed variants that can be sold in the line currency. Computed at read time, not stored. Omitted when no listed variant can be sold. |
| `resolved_unit_price_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Current catalog unit price of the referenced variant or bundle. For a fixed variant this is the base price that applies below the first quantity price break. This is the catalog value at read time, not a stored snapshot: checkout resolves the price again when a buyer opens the link, so the amount a buyer pays can differ. Absent on ad-hoc line items, variant_ids lines, and when the catalog object no longer exists. |
| `suggested_unit_price_money_options` | Optional | Array of [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Unit prices offered as one-tap choices when the buyer sets the price. `suggested_unit_price_money_options`: [declared alternatives](../models/PaymentLinkUpdatedMerchantEventDataPreviousAttributes.md#paymentlinkupdatedmerchanteventdatapreviousattributesline_items-variant-1-fields-1suggested_unit_price_money_options). |
| `tax` | Optional | Alternative shapes (see declared variants) | Tax settings for an ad hoc line item. Catalog lines use the catalog's. `tax`: [declared alternatives](../models/PaymentLinkUpdatedMerchantEventDataPreviousAttributes.md#paymentlinkupdatedmerchanteventdatapreviousattributesline_items-variant-1-fields-1tax). |
| `type` | Optional | (string or null) | How the line item is defined. Values: `"variant"`, `"bundle"`, `"custom_fixed"`, `"custom_variable"`. `type`: [declared alternatives](../models/PaymentLinkUpdatedMerchantEventDataPreviousAttributes.md#paymentlinkupdatedmerchanteventdatapreviousattributesline_items-variant-1-fields-1-variant-1type), [declared alternatives](../models/PaymentLinkUpdatedMerchantEventDataPreviousAttributes.md#paymentlinkupdatedmerchanteventdatapreviousattributesline_items-variant-1-fields-1-variant-3type), [declared alternatives](../models/PaymentLinkUpdatedMerchantEventDataPreviousAttributes.md#paymentlinkupdatedmerchanteventdatapreviousattributesline_items-variant-1-fields-1-variant-4type), [declared alternatives](../models/PaymentLinkUpdatedMerchantEventDataPreviousAttributes.md#paymentlinkupdatedmerchanteventdatapreviousattributesline_items-variant-1-fields-1-variant-5type). |
| `unit_price_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Price of one unit of a `custom_fixed` line item. |
| `variant_id` | Optional | string or null | ID of the catalog variant a `variant` line sells. `variant_id`: [declared alternatives](../models/PaymentLinkUpdatedMerchantEventDataPreviousAttributes.md#paymentlinkupdatedmerchanteventdatapreviousattributesline_items-variant-1-fields-1variant_id). |
| `variant_ids` | Optional | Array of string or null | Variant IDs buyers may choose from, in the order offered. Contains 1 to 100 unique, active, sellable variants of one product in one currency. Available only on standard payment links. Mutually exclusive with variant_id, bundle_id, and ad hoc line item fields. `variant_ids`: [declared alternatives](../models/PaymentLinkUpdatedMerchantEventDataPreviousAttributes.md#paymentlinkupdatedmerchanteventdatapreviousattributesline_items-variant-1-fields-1variant_ids). |

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1 variant 1, 2: `type` = `"variant"`

anyOf PaymentLinkLineItemVariantPreviousAttributes; anyOf variant 1; anyOf PaymentLinkLineItemVariantPreviousAttributes; anyOf variant 2.

- Constraints for `allow_unit_price_adjustment`: boolean or null.
- Constraints for `type`: Values: `"variant"`.

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1 variant 3: `type` = `"bundle"`

anyOf PaymentLinkLineItemBundlePreviousAttributes.

- Constraints for `allow_unit_price_adjustment`: boolean or null.
- Constraints for `type`: Values: `"bundle"`.

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1 variant 4: `allow_unit_price_adjustment` = `false`, `type` = `"custom_fixed"`

anyOf PaymentLinkLineItemCustomFixedPreviousAttributes.

- Constraints for `allow_unit_price_adjustment`: (boolean or null). Values: `false`.
- Constraints for `type`: Values: `"custom_fixed"`.

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1 variant 5: `allow_unit_price_adjustment` = `true`, `type` = `"custom_variable"`

anyOf PaymentLinkLineItemCustomVariablePreviousAttributes.

- Constraints for `allow_unit_price_adjustment`: (boolean or null). Values: `true`.
- Constraints for `type`: Values: `"custom_variable"`.

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.allow_quantity_adjustment

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.allow_quantity_adjustment variant 1

anyOf variant 1: Whether the buyer can change the quantity in checkout..

- Value shape: boolean. Whether the buyer can change the quantity in checkout. 

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.allow_quantity_adjustment variant 2

anyOf variant 2.

- Value shape: null. Whether the buyer can change the quantity in checkout. 

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1 variant 1.allow_unit_price_adjustment

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1 variant 1.allow_unit_price_adjustment variant 1

anyOf variant 1: Whether the buyer sets the unit price. Only `custom_variable` lines allow it..

- Value shape: boolean. Whether the buyer sets the unit price. Only `custom_variable` lines allow it. 

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1 variant 1.allow_unit_price_adjustment variant 2

anyOf variant 2.

- Value shape: null. Whether the buyer sets the unit price. Only `custom_variable` lines allow it. 

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.bundle_id

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.bundle_id variant 1

anyOf variant 1: ID of the catalog bundle a `bundle` line sells..

- Value shape: string. ID of the catalog bundle a `bundle` line sells. ID of the catalog bundle a `bundle` line sells. Example: `"bun_01KEZF7C00TQ6S76Z6CVQF5SVN"`. 

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.bundle_id variant 2

anyOf variant 2.

- Value shape: null. ID of the catalog bundle a `bundle` line sells. 

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.default_variant_id

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.default_variant_id variant 1

anyOf variant 1: Variant selected when the page opens and used at resolve when the buyer omits a selection. Must be in variant_ids. Omit it to require a buyer selection..

- Value shape: string. Variant selected when the page opens and used at resolve when the buyer omits a selection. Must be in variant_ids. Omit it to require a buyer selection. Variant selected when the page opens and used at resolve when the buyer omits a selection. Must be in variant_ids. Omit it to require a buyer selection. pattern: `^var_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"var_01KEZF7C004GSH2KT8CNYVMHGX"`. 

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.default_variant_id variant 2

anyOf variant 2.

- Value shape: null. Variant selected when the page opens and used at resolve when the buyer omits a selection. Must be in variant_ids. Omit it to require a buyer selection. 

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.description

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.description variant 1

anyOf variant 1: Description of an ad hoc line item..

- Value shape: string. Description of an ad hoc line item. 

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.description variant 2

anyOf variant 2.

- Value shape: null. Description of an ad hoc line item. 

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.is_catalog_item_unavailable

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.is_catalog_item_unavailable variant 1

anyOf variant 1: True when the referenced variant or bundle cannot be sold, or no listed variant in variant_ids can be sold in the line currency. Always false on ad hoc line items..

- Value shape: boolean. True when the referenced variant or bundle cannot be sold, or no listed variant in variant_ids can be sold in the line currency. Always false on ad hoc line items. 

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.is_catalog_item_unavailable variant 2

anyOf variant 2.

- Value shape: null. True when the referenced variant or bundle cannot be sold, or no listed variant in variant_ids can be sold in the line currency. Always false on ad hoc line items. 

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.is_sold_out

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.is_sold_out variant 1

anyOf variant 1: Public event read: true when the tier or event has no capacity left..

- Value shape: boolean. Public event read: true when the tier or event has no capacity left. 

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.is_sold_out variant 2

anyOf variant 2.

- Value shape: null. Public event read: true when the tier or event has no capacity left. 

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.key

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.key variant 1

anyOf variant 1: Keys the resolve override maps. Stable line item key used in checkout overrides. Must not have leading or trailing whitespace. Assigned as line_item_1, line_item_2, and so on when omitted, skipping numbers already used by explicit keys; retained for an existing line item when omitted on update..

- Value shape: string. Keys the resolve override maps. Stable line item key used in checkout overrides. Must not have leading or trailing whitespace. Assigned as line_item_1, line_item_2, and so on when omitted, skipping numbers already used by explicit keys; retained for an existing line item when omitted on update. 

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.key variant 2

anyOf variant 2.

- Value shape: null. Keys the resolve override maps. Stable line item key used in checkout overrides. Must not have leading or trailing whitespace. Assigned as line_item_1, line_item_2, and so on when omitted, skipping numbers already used by explicit keys; retained for an existing line item when omitted on update. 

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.max_quantity

Declared alternatives: [BundleComponentPreviousAttributes.quantity](../models/BundleComponentPreviousAttributes.md#bundlecomponentpreviousattributesquantity).

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.max_total_quantity

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.max_total_quantity variant 1

anyOf variant 1: Optional whole-number admission capacity across all orders for an event tier; fractional quantities are not supported. Must be at least 1 and cannot exceed event_config.max_total_quantity when the event is capped. Omit for no tier cap; omitting it in a line_items replacement removes an existing cap..

- Value shape: integer. Optional whole-number admission capacity across all orders for an event tier; fractional quantities are not supported. Must be at least 1 and cannot exceed event_config.max_total_quantity when the event is capped. Omit for no tier cap; omitting it in a line_items replacement removes an existing cap. Optional whole-number admission capacity across all orders for an event tier; fractional quantities are not supported. Must be at least 1 and cannot exceed event_config.max_total_quantity when the event is capped. Omit for no tier cap; omitting it in a line_items replacement removes an existing cap. Format: `int32`. minimum: `1`. 

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.max_total_quantity variant 2

anyOf variant 2.

- Value shape: null. Optional whole-number admission capacity across all orders for an event tier; fractional quantities are not supported. Must be at least 1 and cannot exceed event_config.max_total_quantity when the event is capped. Omit for no tier cap; omitting it in a line_items replacement removes an existing cap. 

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.min_quantity

Declared alternatives: [BundleComponentPreviousAttributes.quantity](../models/BundleComponentPreviousAttributes.md#bundlecomponentpreviousattributesquantity).

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.name

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.name variant 1

anyOf variant 1: Name of an ad hoc line item. Catalog lines take the catalog name..

- Value shape: string. Name of an ad hoc line item. Catalog lines take the catalog name. 

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.name variant 2

anyOf variant 2.

- Value shape: null. Name of an ad hoc line item. Catalog lines take the catalog name. 

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.payment_link_line_item_id

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.payment_link_line_item_id variant 1

anyOf variant 1: Unique identifier for this payment link line item, prefixed `plli_`..

- Value shape: string. Unique identifier for this payment link line item, prefixed `plli_`. Unique identifier for this payment link line item, prefixed `plli_`. Example: `"plli_01KEZF7C004V7GVCCNMYYCBAJS"`. 

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.payment_link_line_item_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this payment link line item, prefixed `plli_`. 

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.product_id

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.product_id variant 1

anyOf variant 1: Parent catalog context only. The product that the variants in variant_ids belong to. Present only on buyer choice lines; refused on input..

- Value shape: string. Parent catalog context only. The product that the variants in variant_ids belong to. Present only on buyer choice lines; refused on input. Parent catalog context only. The product that the variants in variant_ids belong to. Present only on buyer choice lines; refused on input. Example: `"prod_01KEZF7C00BVSHCNWVH528HB66"`. 

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.product_id variant 2

anyOf variant 2.

- Value shape: null. Parent catalog context only. The product that the variants in variant_ids belong to. Present only on buyer choice lines; refused on input. 

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.product_type

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.product_type variant 1

anyOf variant 1: Classification configured on a custom line for ACH debit. Null when unclassified or catalog-backed; catalog lines get their product classification when checkout starts..

- Value shape: string. Classification configured on a custom line for ACH debit. Null when unclassified or catalog-backed; catalog lines get their product classification when checkout starts. Values: `"physical"`, `"service"`, `"fee"`, `"digital"`, `"gift_card"`, `null`.

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.product_type variant 2

anyOf variant 2.

- Value shape: null. Classification configured on a custom line for ACH debit. Null when unclassified or catalog-backed; catalog lines get their product classification when checkout starts. 

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.quantity

Declared alternatives: [BundleComponentPreviousAttributes.quantity](../models/BundleComponentPreviousAttributes.md#bundlecomponentpreviousattributesquantity).

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.remaining_quantity

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.remaining_quantity variant 1

anyOf variant 1: Public event read: whole-number admissions left after sales and payment holds; fractional quantities are not supported. This quantity is bounded by both the tier and event caps. Omitted when neither is capped..

- Value shape: integer. Public event read: whole-number admissions left after sales and payment holds; fractional quantities are not supported. This quantity is bounded by both the tier and event caps. Omitted when neither is capped. Public event read: whole-number admissions left after sales and payment holds; fractional quantities are not supported. This quantity is bounded by both the tier and event caps. Omitted when neither is capped. Format: `int32`. 

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.remaining_quantity variant 2

anyOf variant 2.

- Value shape: null. Public event read: whole-number admissions left after sales and payment holds; fractional quantities are not supported. This quantity is bounded by both the tier and event caps. Omitted when neither is capped. 

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.resolved_name

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.resolved_name variant 1

anyOf variant 1: Current catalog name of the referenced variant or bundle, or the product name for variant_ids lines. A variant reads as the product name, plus the variant name when the variant is a named option combination. This is the catalog value at read time, not a stored snapshot: checkout resolves it again when a buyer opens the link. Absent on ad-hoc line items and when the catalog object no longer exists..

- Value shape: string. Current catalog name of the referenced variant or bundle, or the product name for variant_ids lines. A variant reads as the product name, plus the variant name when the variant is a named option combination. This is the catalog value at read time, not a stored snapshot: checkout resolves it again when a buyer opens the link. Absent on ad-hoc line items and when the catalog object no longer exists. 

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.resolved_name variant 2

anyOf variant 2.

- Value shape: null. Current catalog name of the referenced variant or bundle, or the product name for variant_ids lines. A variant reads as the product name, plus the variant name when the variant is a named option combination. This is the catalog value at read time, not a stored snapshot: checkout resolves it again when a buyer opens the link. Absent on ad-hoc line items and when the catalog object no longer exists. 

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.suggested_unit_price_money_options

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.suggested_unit_price_money_options variant 1

anyOf variant 1: Unit prices offered as one-tap choices when the buyer sets the price..

- Value shape: Array of [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes). Unit prices offered as one-tap choices when the buyer sets the price. 

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.suggested_unit_price_money_options variant 2

anyOf variant 2.

- Value shape: null. Unit prices offered as one-tap choices when the buyer sets the price. 

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.tax

Tax settings for an ad hoc line item. Catalog lines use the catalog's.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `line_item_tax_category` | Conditional | string or null | Flint line-item tax category. A bundle line takes the stored category shared by all component variants when added; all must also share taxability. Unset uses the merchant default and equals only another unset category. Values: [12 declared values](#paymentlinkupdatedmerchanteventdatapreviousattributesline_items-variant-1-fields-1tax-line_item_tax_category-values). `line_item_tax_category`: [declared alternatives](../models/ExpandedSubscriptionPlanSummaryPreviousAttributes.md#expandedsubscriptionplansummarypreviousattributesline_items-variant-1-fields-1tax-variant-1line_item_tax_category). |
| `taxable` | Conditional | boolean or null | Whether the line is subject to tax. A bundle line takes the taxability shared by all component variants when added; they must also share their stored tax category. `taxable`: [declared alternatives](../models/ExpandedSubscriptionPlanSummaryPreviousAttributes.md#expandedsubscriptionplansummarypreviousattributesline_items-variant-1-fields-1tax-variant-1taxable). |

#### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.tax line_item_tax_category values

- `"general"`
- `"physical_goods"`
- `"digital_goods"`
- `"software"`
- `"saas"`
- `"services"`
- `"professional_services"`
- `"food"`
- `"prepared_food"`
- `"clothing"`
- `"medical_goods"`
- `"admission"`

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.tax variant 1

anyOf OrderLineItemTaxPreviousAttributes.

- Optional: `line_item_tax_category`, `taxable`.

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.tax variant 2

anyOf variant 2.

- Undeclared: `line_item_tax_category`, `taxable`.
- Value shape: null. Tax settings for an ad hoc line item. Catalog lines use the catalog's. 

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.tax variant 1.line_item_tax_category

Declared alternatives: [ExpandedSubscriptionPlanSummaryPreviousAttributes.line_items variant 1.[] fields 1.tax variant 1.line_item_tax_category](../models/ExpandedSubscriptionPlanSummaryPreviousAttributes.md#expandedsubscriptionplansummarypreviousattributesline_items-variant-1-fields-1tax-variant-1line_item_tax_category).

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.tax variant 1.taxable

Declared alternatives: [ExpandedSubscriptionPlanSummaryPreviousAttributes.line_items variant 1.[] fields 1.tax variant 1.taxable](../models/ExpandedSubscriptionPlanSummaryPreviousAttributes.md#expandedsubscriptionplansummarypreviousattributesline_items-variant-1-fields-1tax-variant-1taxable).

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1 variant 1.type

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1 variant 1.type variant 1

anyOf group 1 variant 1: How the line item is defined..

- Value shape: string. How the line item is defined. Values: `"variant"`, `"bundle"`, `"custom_fixed"`, `"custom_variable"`.

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1 variant 1.type variant 2, 4, 6

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2.

- Value shape: null. How the line item is defined. 

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1 variant 1.type variant 3

anyOf group 2 variant 1: How the line item is defined..

- Value shape: string. How the line item is defined. Values: `"variant"`.

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1 variant 1.type variant 5

anyOf group 3 variant 1.

- Value shape: string. How the line item is defined. Values: `"variant"`.

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.variant_id

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.variant_id variant 1

anyOf variant 1: ID of the catalog variant a `variant` line sells..

- Value shape: string. ID of the catalog variant a `variant` line sells. ID of the catalog variant a `variant` line sells. Example: `"var_01KEZF7C004GSH2KT8CNYVMHGX"`. 

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.variant_id variant 2

anyOf variant 2.

- Value shape: null. ID of the catalog variant a `variant` line sells. 

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.variant_ids

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.variant_ids variant 1

anyOf variant 1: Variant IDs buyers may choose from, in the order offered. Contains 1 to 100 unique, active, sellable variants of one product in one currency. Available only on standard payment links. Mutually exclusive with variant_id, bundle_id, and ad hoc line item fields..

- Value shape: Array of string. Variant IDs buyers may choose from, in the order offered. Contains 1 to 100 unique, active, sellable variants of one product in one currency. Available only on standard payment links. Mutually exclusive with variant_id, bundle_id, and ad hoc line item fields. Variant IDs buyers may choose from, in the order offered. Contains 1 to 100 unique, active, sellable variants of one product in one currency. Available only on standard payment links. Mutually exclusive with variant_id, bundle_id, and ad hoc line item fields. minItems: `1`. maxItems: `100`. uniqueItems: `true`. Items: pattern: `^var_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"var_01KEZF7C004GSH2KT8CNYVMHGX"`. 

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.variant_ids variant 2

anyOf variant 2.

- Value shape: null. Variant IDs buyers may choose from, in the order offered. Contains 1 to 100 unique, active, sellable variants of one product in one currency. Available only on standard payment links. Mutually exclusive with variant_id, bundle_id, and ad hoc line item fields. 

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1 variant 2.allow_unit_price_adjustment

Declared alternatives: [PaymentLinkUpdatedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1 variant 1.allow_unit_price_adjustment](../models/PaymentLinkUpdatedMerchantEventDataPreviousAttributes.md#paymentlinkupdatedmerchanteventdatapreviousattributesline_items-variant-1-fields-1-variant-1allow_unit_price_adjustment).

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1 variant 2.type

Declared alternatives: [PaymentLinkUpdatedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1 variant 1.type](../models/PaymentLinkUpdatedMerchantEventDataPreviousAttributes.md#paymentlinkupdatedmerchanteventdatapreviousattributesline_items-variant-1-fields-1-variant-1type).

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1 variant 3.allow_unit_price_adjustment

Declared alternatives: [PaymentLinkUpdatedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1 variant 1.allow_unit_price_adjustment](../models/PaymentLinkUpdatedMerchantEventDataPreviousAttributes.md#paymentlinkupdatedmerchanteventdatapreviousattributesline_items-variant-1-fields-1-variant-1allow_unit_price_adjustment).

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1 variant 3.type

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1 variant 3.type variant 1

anyOf group 1 variant 1: How the line item is defined..

- Value shape: string. How the line item is defined. Values: `"variant"`, `"bundle"`, `"custom_fixed"`, `"custom_variable"`.

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1 variant 3.type variant 2, 4, 6

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2.

- Value shape: null. How the line item is defined. 

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1 variant 3.type variant 3

anyOf group 2 variant 1: How the line item is defined..

- Value shape: string. How the line item is defined. Values: `"bundle"`.

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1 variant 3.type variant 5

anyOf group 3 variant 1.

- Value shape: string. How the line item is defined. Values: `"bundle"`.

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1 variant 4.allow_unit_price_adjustment

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1 variant 4.allow_unit_price_adjustment variant 1

anyOf group 1 variant 1: Whether the buyer sets the unit price. Only `custom_variable` lines allow it..

- Value shape: boolean. Whether the buyer sets the unit price. Only `custom_variable` lines allow it. 

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1 variant 4.allow_unit_price_adjustment variant 2, 4

anyOf group 1 variant 2; anyOf group 2 variant 2.

- Value shape: null. Whether the buyer sets the unit price. Only `custom_variable` lines allow it. 

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1 variant 4.allow_unit_price_adjustment variant 3

anyOf group 2 variant 1.

- Value shape: boolean. Whether the buyer sets the unit price. Only `custom_variable` lines allow it. Values: `false`.

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1 variant 4.type

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1 variant 4.type variant 1

anyOf group 1 variant 1: How the line item is defined..

- Value shape: string. How the line item is defined. Values: `"variant"`, `"bundle"`, `"custom_fixed"`, `"custom_variable"`.

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1 variant 4.type variant 2, 4, 6

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2.

- Value shape: null. How the line item is defined. 

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1 variant 4.type variant 3

anyOf group 2 variant 1: How the line item is defined..

- Value shape: string. How the line item is defined. Values: `"custom_fixed"`.

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1 variant 4.type variant 5

anyOf group 3 variant 1.

- Value shape: string. How the line item is defined. Values: `"custom_fixed"`.

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1 variant 5.allow_unit_price_adjustment

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1 variant 5.allow_unit_price_adjustment variant 1

anyOf group 1 variant 1: Whether the buyer sets the unit price. Only `custom_variable` lines allow it..

- Value shape: boolean. Whether the buyer sets the unit price. Only `custom_variable` lines allow it. 

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1 variant 5.allow_unit_price_adjustment variant 2, 4

anyOf group 1 variant 2; anyOf group 2 variant 2.

- Value shape: null. Whether the buyer sets the unit price. Only `custom_variable` lines allow it. 

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1 variant 5.allow_unit_price_adjustment variant 3

anyOf group 2 variant 1.

- Value shape: boolean. Whether the buyer sets the unit price. Only `custom_variable` lines allow it. Values: `true`.

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1 variant 5.type

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1 variant 5.type variant 1

anyOf group 1 variant 1: How the line item is defined..

- Value shape: string. How the line item is defined. Values: `"variant"`, `"bundle"`, `"custom_fixed"`, `"custom_variable"`.

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1 variant 5.type variant 2, 4, 6

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2.

- Value shape: null. How the line item is defined. 

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1 variant 5.type variant 3

anyOf group 2 variant 1: How the line item is defined..

- Value shape: string. How the line item is defined. Values: `"custom_variable"`.

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1 variant 5.type variant 5

anyOf group 3 variant 1.

- Value shape: string. How the line item is defined. Values: `"custom_variable"`.

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

Declared alternatives: [ExpandedPaymentLinkSummaryPreviousAttributes.name](../models/ExpandedPaymentLinkSummaryPreviousAttributes.md#expandedpaymentlinksummarypreviousattributesname).

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.payment_link_id

Declared alternatives: [ExpandedPaymentLinkSummaryPreviousAttributes.payment_link_id](../models/ExpandedPaymentLinkSummaryPreviousAttributes.md#expandedpaymentlinksummarypreviousattributespayment_link_id).

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.payment_link_type

Declared alternatives: [ExpandedPaymentLinkSummaryPreviousAttributes.payment_link_type](../models/ExpandedPaymentLinkSummaryPreviousAttributes.md#expandedpaymentlinksummarypreviousattributespayment_link_type).

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.redirects

Where checkout sessions started from this payment link send the buyer after payment, cancellation, or expiration.

Field definitions: [shared fields](CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesredirects).

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.redirects variant 1

anyOf CheckoutRedirectsPreviousAttributes.

- Optional: `cancel_url`, `expired_url`, `success_url`.

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.redirects variant 2

anyOf variant 2.

- Undeclared: `cancel_url`, `expired_url`, `success_url`.
- Value shape: null. Where checkout sessions started from this payment link send the buyer after payment, cancellation, or expiration. 

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.redirects variant 1.cancel_url

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.redirects variant 1.cancel_url](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesredirects-variant-1cancel_url).

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.redirects variant 1.expired_url

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.redirects variant 1.expired_url](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesredirects-variant-1expired_url).

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.redirects variant 1.success_url

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.redirects variant 1.success_url](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesredirects-variant-1success_url).

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.sales_end_at

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.sales_end_at variant 1

anyOf variant 1: RFC3339 timestamp after which the link stops starting checkouts and resolve fails with `ACTION_NOT_ALLOWED` and reason `not_offered`. Unset means sales do not end on their own, except that an event link without sales_end_at stops selling at event_config.event_at. A checkout opened before the end can still start payment for up to 15 minutes after it..

- Value shape: string. RFC3339 timestamp after which the link stops starting checkouts and resolve fails with `ACTION_NOT_ALLOWED` and reason `not_offered`. Unset means sales do not end on their own, except that an event link without sales_end_at stops selling at event_config.event_at. A checkout opened before the end can still start payment for up to 15 minutes after it. RFC3339 timestamp after which the link stops starting checkouts and resolve fails with `ACTION_NOT_ALLOWED` and reason `not_offered`. Unset means sales do not end on their own, except that an event link without sales_end_at stops selling at event_config.event_at. A checkout opened before the end can still start payment for up to 15 minutes after it. Format: `date-time`. 

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.sales_end_at variant 2

anyOf variant 2.

- Value shape: null. RFC3339 timestamp after which the link stops starting checkouts and resolve fails with `ACTION_NOT_ALLOWED` and reason `not_offered`. Unset means sales do not end on their own, except that an event link without sales_end_at stops selling at event_config.event_at. A checkout opened before the end can still start payment for up to 15 minutes after it. 

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.sales_summary

Present only with expand=sales_summary on GET /v1/payment-links or GET /v1/payment-links/{payment_link_id}. Available to merchant callers, including dashboard sessions and API keys with checkouts.payment_links.read. Uses the same paid-order definition as the merchant sales summary.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `attempted_payment_count` | Conditional | integer or null | All recorded card attempts from this link, including pending attempts and retries. `attempted_payment_count`: [declared alternatives](../models/PaymentLinkSalesSummaryPreviousAttributes.md#paymentlinksalessummarypreviousattributesattempted_payment_count). |
| `checked_in_ticket_count` | Conditional | integer or null | Tickets for this payment link that are checked in now, counted when the summary is read. Undoing a check-in or voiding a ticket lowers it. 0 for links that have issued no tickets. `checked_in_ticket_count`: [declared alternatives](../models/PaymentLinkSalesSummaryPreviousAttributes.md#paymentlinksalessummarypreviousattributeschecked_in_ticket_count). |
| `computed_at` | Conditional | string or null | UTC time at which the summary was computed, at second precision. `computed_at`: [declared alternatives](../models/PaymentLinkUpdatedMerchantEventDataPreviousAttributes.md#paymentlinkupdatedmerchanteventdatapreviousattributessales_summary-variant-1computed_at). |
| `failed_payment_count` | Conditional | integer or null | Recorded failed card attempts from this link. A successful retry does not erase previous failures. `failed_payment_count`: [declared alternatives](../models/PaymentLinkSalesSummaryPreviousAttributes.md#paymentlinksalessummarypreviousattributesfailed_payment_count). |
| `paid_order_count` | Conditional | integer or null | Number of orders whose collection has completed, across all currencies, including fully and partially refunded orders. `paid_order_count`: [declared alternatives](../models/PaymentLinkSalesSummaryPreviousAttributes.md#paymentlinksalessummarypreviousattributespaid_order_count). |
| `paid_totals` | Conditional | Array of [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Gross paid totals in integer minor units, one Money object per currency with paid orders, sorted by currency. Refunds are not subtracted. Empty array when there are no paid orders. `paid_totals`: [declared alternatives](../models/PaymentLinkSalesSummaryPreviousAttributes.md#paymentlinksalessummarypreviousattributespaid_totals). |
| `refunded_totals` | Conditional | Array of [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Refunded totals in integer minor units on the same paid orders as paid_totals. One Money object per currency with paid orders, sorted by currency, including zero when nothing was refunded. Empty array when there are no paid orders. `refunded_totals`: [declared alternatives](../models/PaymentLinkSalesSummaryPreviousAttributes.md#paymentlinksalessummarypreviousattributesrefunded_totals). |

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.sales_summary variant 1

anyOf PaymentLinkSalesSummaryPreviousAttributes.

- Optional: `attempted_payment_count`, `checked_in_ticket_count`, `computed_at`, `failed_payment_count`, `paid_order_count`, `paid_totals`, `refunded_totals`.

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.sales_summary variant 2

anyOf variant 2.

- Undeclared: `attempted_payment_count`, `checked_in_ticket_count`, `computed_at`, `failed_payment_count`, `paid_order_count`, `paid_totals`, `refunded_totals`.
- Value shape: null. Present only with expand=sales_summary on GET /v1/payment-links or GET /v1/payment-links/{payment_link_id}. Available to merchant callers, including dashboard sessions and API keys with checkouts.payment_links.read. Uses the same paid-order definition as the merchant sales summary. 

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.sales_summary variant 1.attempted_payment_count

Declared alternatives: [PaymentLinkSalesSummaryPreviousAttributes.attempted_payment_count](../models/PaymentLinkSalesSummaryPreviousAttributes.md#paymentlinksalessummarypreviousattributesattempted_payment_count).

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.sales_summary variant 1.checked_in_ticket_count

Declared alternatives: [PaymentLinkSalesSummaryPreviousAttributes.checked_in_ticket_count](../models/PaymentLinkSalesSummaryPreviousAttributes.md#paymentlinksalessummarypreviousattributeschecked_in_ticket_count).

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.sales_summary variant 1.computed_at

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.sales_summary variant 1.computed_at variant 1

anyOf variant 1: UTC time at which the summary was computed, at second precision..

- Value shape: string. UTC time at which the summary was computed, at second precision. UTC time at which the summary was computed, at second precision. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.sales_summary variant 1.computed_at variant 2

anyOf variant 2.

- Value shape: null. UTC time at which the summary was computed, at second precision. 

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.sales_summary variant 1.failed_payment_count

Declared alternatives: [PaymentLinkSalesSummaryPreviousAttributes.failed_payment_count](../models/PaymentLinkSalesSummaryPreviousAttributes.md#paymentlinksalessummarypreviousattributesfailed_payment_count).

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.sales_summary variant 1.paid_order_count

Declared alternatives: [PaymentLinkSalesSummaryPreviousAttributes.paid_order_count](../models/PaymentLinkSalesSummaryPreviousAttributes.md#paymentlinksalessummarypreviousattributespaid_order_count).

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.sales_summary variant 1.paid_totals

Declared alternatives: [PaymentLinkSalesSummaryPreviousAttributes.paid_totals](../models/PaymentLinkSalesSummaryPreviousAttributes.md#paymentlinksalessummarypreviousattributespaid_totals).

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.sales_summary variant 1.refunded_totals

Declared alternatives: [PaymentLinkSalesSummaryPreviousAttributes.refunded_totals](../models/PaymentLinkSalesSummaryPreviousAttributes.md#paymentlinksalessummarypreviousattributesrefunded_totals).

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.status

Declared alternatives: [ExpandedPaymentLinkSummaryPreviousAttributes.status](../models/ExpandedPaymentLinkSummaryPreviousAttributes.md#expandedpaymentlinksummarypreviousattributesstatus).

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.subscription_plan

Present only when `expand` includes `subscription_plan`; `null` when expanded and there is no related subscription plan.

Field definitions: [shared fields](OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributessubscription_plan).

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.subscription_plan variant 1

anyOf ExpandedSubscriptionPlanSummaryPreviousAttributes.

- Optional: `billing_interval`, `billing_interval_count`, `billing_interval_options`, `created_at`, `currency`, `description`, `line_items`, `name`, `setup_fee_money`, `status`, `subscription_plan_id`, `trial_period_days`, `updated_at`.

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.subscription_plan variant 2

anyOf variant 2.

- Undeclared: `billing_interval`, `billing_interval_count`, `billing_interval_options`, `created_at`, `currency`, `description`, `line_items`, `name`, `setup_fee_money`, `status`, `subscription_plan_id`, `trial_period_days`, `updated_at`.
- Value shape: null. Present only when `expand` includes `subscription_plan`; `null` when expanded and there is no related subscription plan. 

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.subscription_plan variant 1.billing_interval

Declared alternatives: [ExpandedSubscriptionPlanSummaryPreviousAttributes.billing_interval](../models/ExpandedSubscriptionPlanSummaryPreviousAttributes.md#expandedsubscriptionplansummarypreviousattributesbilling_interval).

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.subscription_plan variant 1.billing_interval_count

Declared alternatives: [ExpandedSubscriptionPlanSummaryPreviousAttributes.billing_interval_count](../models/ExpandedSubscriptionPlanSummaryPreviousAttributes.md#expandedsubscriptionplansummarypreviousattributesbilling_interval_count).

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.subscription_plan variant 1.billing_interval_options

Declared alternatives: [ExpandedSubscriptionPlanSummaryPreviousAttributes.billing_interval_options](../models/ExpandedSubscriptionPlanSummaryPreviousAttributes.md#expandedsubscriptionplansummarypreviousattributesbilling_interval_options).

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.subscription_plan variant 1.created_at

Declared alternatives: [PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.environment_grants variant 1.[] fields 1.created_at](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at).

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.subscription_plan variant 1.currency

Declared alternatives: [CustomerReceivablesPreviousAttributes.balances variant 1.[] fields 1.currency](../models/CustomerReceivablesPreviousAttributes.md#customerreceivablespreviousattributesbalances-variant-1-fields-1currency).

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.subscription_plan variant 1.description

Declared alternatives: [ExpandedSubscriptionPlanSummaryPreviousAttributes.description](../models/ExpandedSubscriptionPlanSummaryPreviousAttributes.md#expandedsubscriptionplansummarypreviousattributesdescription).

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.subscription_plan variant 1.line_items

Declared alternatives: [ExpandedSubscriptionPlanSummaryPreviousAttributes.line_items](../models/ExpandedSubscriptionPlanSummaryPreviousAttributes.md#expandedsubscriptionplansummarypreviousattributesline_items).

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.subscription_plan variant 1.name

Declared alternatives: [ExpandedSubscriptionPlanSummaryPreviousAttributes.name](../models/ExpandedSubscriptionPlanSummaryPreviousAttributes.md#expandedsubscriptionplansummarypreviousattributesname).

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.subscription_plan variant 1.status

Declared alternatives: [ExpandedSubscriptionPlanSummaryPreviousAttributes.status](../models/ExpandedSubscriptionPlanSummaryPreviousAttributes.md#expandedsubscriptionplansummarypreviousattributesstatus).

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.subscription_plan variant 1.subscription_plan_id

Declared alternatives: [OrderClosedMerchantEventDataPreviousAttributes.subscription_plan variant 1.subscription_plan_id](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributessubscription_plan-variant-1subscription_plan_id).

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.subscription_plan variant 1.trial_period_days

Declared alternatives: [ExpandedSubscriptionPlanSummaryPreviousAttributes.trial_period_days](../models/ExpandedSubscriptionPlanSummaryPreviousAttributes.md#expandedsubscriptionplansummarypreviousattributestrial_period_days).

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.subscription_plan variant 1.updated_at

Declared alternatives: [PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.environment_grants variant 1.[] fields 1.created_at](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at).

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.subscription_plan_id

Declared alternatives: [ExpandedPaymentLinkSummaryPreviousAttributes.subscription_plan_id](../models/ExpandedPaymentLinkSummaryPreviousAttributes.md#expandedpaymentlinksummarypreviousattributessubscription_plan_id).

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.total_quantity_sold

Declared alternatives: [BundleComponentPreviousAttributes.quantity](../models/BundleComponentPreviousAttributes.md#bundlecomponentpreviousattributesquantity).

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.updated_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.url

Declared alternatives: [ExpandedPaymentLinkSummaryPreviousAttributes.url](../models/ExpandedPaymentLinkSummaryPreviousAttributes.md#expandedpaymentlinksummarypreviousattributesurl).

### PaymentLinkUpdatedMerchantEventDataPreviousAttributes.version

Declared alternatives: [GiftCardUpdatedMerchantEventDataPreviousAttributes.version](../models/GiftCardUpdatedMerchantEventDataPreviousAttributes.md#giftcardupdatedmerchanteventdatapreviousattributesversion).

