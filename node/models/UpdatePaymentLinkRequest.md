[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## UpdatePaymentLinkRequest

The request body for: Update payment link.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_fields` | Optional | [CheckoutBuyerFields](../models/CheckoutBuyerFields.md#checkoutbuyerfields) | What checkout asks the buyer for. Each field you leave out uses your checkout settings. |
| `checkout_session_expires_in_seconds` | Optional | integer string | Seconds each checkout session the link starts stays open, from 60 to 86,400. Omit it to use your checkout settings, or 24 hours. It doesn't end the link; use sales_end_at for that. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `60`. maximum: `86400`. |
| `custom_fields` | Optional | Array of [PaymentLinkCustomFieldPatchRequest](../models/PaymentLinkCustomFieldPatchRequest.md#paymentlinkcustomfieldpatchrequest) | Replaces all custom fields atomically. Include an existing payment_link_custom_field_id to retain that member, omit the ID to create a member, and omit a previous member to remove it. Send an empty array to clear all custom fields, omit custom_fields to leave it unchanged, and do not send null. maxItems: `20`. |
| `custom_text` | Optional | [PaymentLinkCustomTextPatchRequest](../models/PaymentLinkCustomTextPatchRequest.md#paymentlinkcustomtextpatchrequest) | Changes to a payment link's custom checkout text. Send null to clear a field. |
| `delivery_method_ids` | Optional | Array of string | Complete delivery method selection for the link. A link without delivery methods offers settings.checkout.default_delivery_method_ids when its order has items to deliver. Send an empty array to clear the selection. Omit it on PATCH to leave the selection unchanged. Null and duplicate IDs are not accepted. maxItems: `25`. uniqueItems: `true`. Items: minLength: `1`. |
| `description` | Optional | string or null | Send null to clear. minLength: `1`. maxLength: `2048`. |
| `donation_max_amount_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) or null | Maximum donation amount. Send null to clear the maximum. Send null to clear. `donation_max_amount_money`: [declared alternatives](../models/UpdatePaymentLinkRequest.md#updatepaymentlinkrequestdonation_max_amount_money). |
| `donation_min_amount_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) or null | Minimum donation amount. Send null to clear the minimum. Send null to clear. `donation_min_amount_money`: [declared alternatives](../models/UpdatePaymentLinkRequest.md#updatepaymentlinkrequestdonation_min_amount_money). |
| `donation_suggested_amount_money_options` | Optional | Array of [MoneyValue](../models/MoneyValue.md#moneyvalue) | Suggested donation amounts. Send an empty array to clear suggested amounts. `donation_suggested_amount_money_options[]`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money). |
| `event_config` | Optional | [PaymentLinkEventConfigPatchRequest](../models/PaymentLinkEventConfigPatchRequest.md#paymentlinkeventconfigpatchrequest) | Event configuration patch. Omit to leave unchanged. The whole configuration cannot be cleared; null is not accepted. Changes to an event payment link's settings. Send null on a nullable field to clear it. |
| `expected_version` | Optional | integer string | Payment link version last read by the caller. Required when line_items, custom_fields, or delivery_method_ids is present. Required when any of these fields is present: line_items, custom_fields, delivery_method_ids. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `1`. |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. Send null to clear. minLength: `1`. maxLength: `255`. |
| `image` | Optional | [ImageRequest](../models/ImageRequest.md#imagerequest) or null | Send null to clear. |
| `inactive_message` | Optional | string or null | Send null to clear. minLength: `1`. maxLength: `500`. |
| `inventory_routing_source` | Optional | [InventoryRoutingSourceRequest](../models/InventoryRoutingSourceRequest.md#inventoryroutingsourcerequest) | Where you want inventory routed from: a fixed Location, an inventory allocation policy, or one policy revision, selected by `type`. |
| `legal` | Optional | [LegalSettingsRequest](../models/LegalSettingsRequest.md#legalsettingsrequest) | Changes to a payment link's legal links and terms setting. Send null on a URL to clear it. `legal`: [field definitions](../models/UpdatePaymentLinkRequest.md#updatepaymentlinkrequestlegal). |
| `line_items` | Optional | Array of [PaymentLinkLineItemPatchRequest](../models/PaymentLinkLineItemPatchRequest.md#paymentlinklineitempatchrequest) | Replaces all line items atomically. Include an existing payment_link_line_item_id to retain that member, omit the ID to create a member, and omit a previous member to remove it. Omit line_items to leave it unchanged. Null is not accepted. minItems: `1`. |
| `max_completions` | Optional | integer or null | Send null to clear. Format: `int32`. |
| `metadata` | Optional | Map of (string or null) or null | Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Send null to clear. Metadata pairs plus custom fields must not exceed 44; 6 of the order's 50 pairs are reserved for Flint. Metadata keys and values, custom_field_ keys and largest possible answers, and Flint metadata must fit within 32768 UTF-8 bytes. Text and textarea answers are budgeted at four bytes per Unicode code point, including optional fields. Each checkbox answer is budgeted at five bytes (the length of false). If the combined budget is exceeded, lower max_length on some fields, use fewer custom fields, or reduce metadata. These limits apply to standard and plan links and are checked against the merged configuration on update. Map values: minLength: `1`. |
| `name` | Optional | string | minLength: `1`. maxLength: `255`. |
| `payments` | Optional | [PaymentLinkPaymentPatchRequest](../models/PaymentLinkPaymentPatchRequest.md#paymentlinkpaymentpatchrequest) | Changes to a payment link's payment settings. Send null on the payment note to clear it. |
| `promotion_config` | Optional | [CheckoutPromotionConfig](../models/CheckoutPromotionConfig.md#checkoutpromotionconfig) | Promotion settings for a checkout: whether automatic promotions apply and whether the buyer can apply promotion codes. |
| `redirects` | Optional | [PaymentLinkRedirectsPatchRequest](../models/PaymentLinkRedirectsPatchRequest.md#paymentlinkredirectspatchrequest) | Where checkout sessions started from this payment link send the buyer after payment, cancellation, or expiration. Changes to a payment link's hosted checkout destinations. Omit a URL to leave it unchanged, or send null to clear it. |
| `sales_end_at` | Optional | string or null | RFC3339 timestamp after which the link stops starting checkouts and resolve returns PAYMENT_LINK_SALES_ENDED. Unset means sales do not end on their own, except that an event link without sales_end_at stops selling at event_config.event_at. A checkout opened before the end can still start payment for up to 15 minutes after it. Send null to clear it. Format: `date-time`. minLength: `1`. |
| `status` | Optional | string | Values: `"active"`, `"inactive"`. |
| `tax` | Optional | [CheckoutTaxConfig](../models/CheckoutTaxConfig.md#checkouttaxconfig) | Whether tax is collected for a checkout session or payment link. `tax`: [field definitions](../models/CreatePaymentLinkRequest.md#createpaymentlinkrequesttax). |
| `theme` | Optional | [PaymentLinkThemePatchRequest](../models/PaymentLinkThemePatchRequest.md#paymentlinkthemepatchrequest) | Changes to a payment link's checkout theme. Send null on a field to clear it. |
| `tip` | Optional | [CheckoutTipConfig](../models/CheckoutTipConfig.md#checkouttipconfig) | Tip settings for a checkout: whether tips are enabled, the percent or fixed amount options, the default tip, and custom tips. |

### UpdatePaymentLinkRequest.donation_max_amount_money

Maximum donation amount. Send null to clear the maximum. Send null to clear.

Field definitions: [shared fields](PromotionRuleValue.md#promotionrulevalue).

### UpdatePaymentLinkRequest.donation_max_amount_money variant 1

anyOf variant 1: Monetary amount represented as integer minor units plus an ISO 4217 currency code..

- Required: `amount`, `currency`.

### UpdatePaymentLinkRequest.donation_max_amount_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Maximum donation amount. Send null to clear the maximum. Send null to clear. 

### UpdatePaymentLinkRequest.donation_min_amount_money

Minimum donation amount. Send null to clear the minimum. Send null to clear.

Field definitions: [shared fields](PromotionRuleValue.md#promotionrulevalue).

### UpdatePaymentLinkRequest.donation_min_amount_money variant 1

anyOf variant 1: Monetary amount represented as integer minor units plus an ISO 4217 currency code..

- Required: `amount`, `currency`.

### UpdatePaymentLinkRequest.donation_min_amount_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Minimum donation amount. Send null to clear the minimum. Send null to clear. 

### UpdatePaymentLinkRequest.donation_suggested_amount_money_options[]

Field definitions: [AddLineItemsRequest.line_items[] variant 1.tax.calculation.components[].flat_money](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money).

### UpdatePaymentLinkRequest.legal

Changes to a payment link's legal links and terms setting. Send null on a URL to clear it.

Field definitions: [shared fields](PaymentLinkLegalPatchRequestInput.md#paymentlinklegalpatchrequestinput).

### UpdatePaymentLinkRequest.tax

Field definitions: [CreatePaymentLinkRequest.tax](../models/CreatePaymentLinkRequest.md#createpaymentlinkrequesttax).

