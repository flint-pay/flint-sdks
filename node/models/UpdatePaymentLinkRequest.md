[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## UpdatePaymentLinkRequest

The request body for: Update payment link.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_fields` | Optional | [CheckoutBuyerFields](../models/CheckoutBuyerFields.md#checkoutbuyerfields) | What checkout asks the buyer for. Each field you leave out uses your checkout settings. `buyer_fields`: [field definitions](../models/CreateCheckoutSessionOrder.md#createcheckoutsessionorderbuyer_fields). |
| `checkout_session_expires_in_seconds` | Optional | integer | Seconds each checkout session the link starts stays open, from 60 to 86,400. Omit it to use your checkout settings, or 24 hours. It doesn't end the link; use sales_end_at for that. Format: `int64`. minimum: `60`. maximum: `86400`. |
| `custom_fields` | Optional | Array of [PaymentLinkCustomFieldPatchRequest](../models/PaymentLinkCustomFieldPatchRequest.md#paymentlinkcustomfieldpatchrequest) | Replaces all custom fields atomically. Include an existing payment_link_custom_field_id to retain that member, omit the ID to create a member, and omit a previous member to remove it. Send an empty array to clear all custom fields, omit custom_fields to leave it unchanged, and do not send null. maxItems: `20`. |
| `custom_text` | Optional | [PaymentLinkCustomTextPatchRequest](../models/PaymentLinkCustomTextPatchRequest.md#paymentlinkcustomtextpatchrequest) | Custom text for checkouts started from this link. Changes to a payment link's custom checkout text. Send null to clear a field. |
| `delivery_method_ids` | Optional | Array of string | Complete delivery method selection for the link. A link without delivery methods offers settings.checkout.default_delivery_method_ids when its order has items to deliver. Send an empty array to clear the selection. Omit it on PATCH to leave the selection unchanged. Null and duplicate IDs are not accepted. Create, activation, and edits to items, delivery methods, or inventory routing require explicit methods or checkout defaults to cover the items' delivery profiles; otherwise ACTION_NOT_ALLOWED with reason configuration_required is returned. maxItems: `25`. uniqueItems: `true`. Items: minLength: `1`. Example: `"dmet_01KEZF7C00YSG3X2D1TZJ36TM0"`. |
| `description` | Optional | string or null | Text about what the link sells, returned to buyers when they open it. Send null to clear. minLength: `1`. maxLength: `2048`. |
| `donation_max_amount_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) or null | Maximum donation amount. Send null to clear the maximum. Send null to clear. `donation_max_amount_money`: [declared alternatives](../models/UpdatePaymentLinkRequest.md#updatepaymentlinkrequestdonation_max_amount_money). |
| `donation_min_amount_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) or null | Minimum donation amount. Send null to clear the minimum. Send null to clear. `donation_min_amount_money`: [declared alternatives](../models/UpdatePaymentLinkRequest.md#updatepaymentlinkrequestdonation_min_amount_money). |
| `donation_suggested_amount_money_options` | Optional | Array of [MoneyValue](../models/MoneyValue.md#moneyvalue) | Suggested donation amounts. Send an empty array to clear suggested amounts. `donation_suggested_amount_money_options[]`: [field definitions](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options). |
| `event_config` | Optional | [PaymentLinkEventConfigPatchRequest](../models/PaymentLinkEventConfigPatchRequest.md#paymentlinkeventconfigpatchrequest) | Event configuration patch. Omit to leave unchanged. The whole configuration cannot be cleared; null is not accepted. Changes to an event payment link's settings. Send null on a nullable field to clear it. |
| `expected_version` | Optional | integer | Payment link version last read by the caller. Required when line_items, custom_fields, or delivery_method_ids is present. Required when any of these fields is present: line_items, custom_fields, delivery_method_ids. Format: `int64`. minimum: `1`. |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. Send null to clear. minLength: `1`. maxLength: `255`. Example: `"warehouse-1842"`. |
| `image` | Optional | [ImageRequest](../models/ImageRequest.md#imagerequest) or null | Image shown to buyers with the link. Send null to clear. |
| `inactive_message` | Optional | string or null | Message to show the buyer when the link is inactive. Send null to clear. minLength: `1`. maxLength: `500`. |
| `inventory_routing_source` | Optional | [InventoryRoutingSourceRequest](../models/InventoryRoutingSourceRequest.md#inventoryroutingsourcerequest) | Routing source for tracked demand. Create, activation, and sellability edits require at least one active routing location with inventory_allocation_enabled; temporary stock shortages do not prevent these writes. Where you want inventory routed from: a fixed Location, an inventory allocation policy, or one policy revision, selected by `type`. |
| `legal` | Optional | [LegalSettingsRequest](../models/LegalSettingsRequest.md#legalsettingsrequest) | The terms and policy links checkouts started from this link show the buyer. Changes to a payment link's legal links and terms setting. Send null on a URL to clear it. `legal`: [field definitions](../models/UpdatePaymentLinkRequest.md#updatepaymentlinkrequestlegal). |
| `line_items` | Optional | Array of [PaymentLinkLineItemPatchRequest](../models/PaymentLinkLineItemPatchRequest.md#paymentlinklineitempatchrequest) | Replaces all line items atomically. Include an existing payment_link_line_item_id to retain that member, omit the ID to create a member, and omit a previous member to remove it. Omit line_items to leave it unchanged. Null is not accepted. minItems: `1`. |
| `max_completions` | Optional | integer or null | Most payments the link accepts, counted by `completed_count`. Absent means no limit. Once the limit is reached, resolving the link fails with a request error. It can't be set below `completed_count`. Send null to clear. Format: `int32`. |
| `metadata` | Optional | [MetadataPatchRequest](../models/MetadataPatchRequest.md#metadatapatchrequest) or null | Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Send null to clear. At most 44 pairs, because Flint reserves 6 of the order's 50 metadata pairs. Metadata keys and values plus Flint's metadata must fit within 32768 UTF-8 bytes. Custom fields don't count toward either limit. These limits apply to standard and plan links and are checked against the merged configuration on update. This operation also limits the metadata object you send, before merging: at most 50 keys, counting null deletions, each key 1 to 256 Unicode code points, and at most 32768 UTF-8 bytes of keys plus values. |
| `name` | Optional | string | Name of the payment link. minLength: `1`. maxLength: `255`. |
| `payments` | Optional | [PaymentLinkPaymentPatchRequest](../models/PaymentLinkPaymentPatchRequest.md#paymentlinkpaymentpatchrequest) | Payment options for checkouts started from this link. Changes to a payment link's payment settings. Send null on the payment note to clear it. |
| `promotion_config` | Optional | [CheckoutPromotionConfig](../models/CheckoutPromotionConfig.md#checkoutpromotionconfig) | Whether automatic promotions apply to checkouts started from this link and whether buyers can enter promotion codes. Promotion settings for a checkout: whether automatic promotions apply and whether the buyer can apply promotion codes. `promotion_config`: [field definitions](../models/CreatePaymentLinkRequest.md#createpaymentlinkrequestpromotion_config). |
| `redirects` | Optional | [PaymentLinkRedirectsPatchRequest](../models/PaymentLinkRedirectsPatchRequest.md#paymentlinkredirectspatchrequest) | Where checkout sessions started from this payment link send the buyer after payment, cancellation, or expiration. Changes to a payment link's hosted checkout destinations. Omit a URL to leave it unchanged, or send null to clear it. |
| `sales_end_at` | Optional | string or null | RFC3339 timestamp after which the link stops starting checkouts and resolve fails with `ACTION_NOT_ALLOWED` and reason `not_offered`. Unset means sales do not end on their own, except that an event link without sales_end_at stops selling at event_config.event_at. A checkout opened before the end can still start payment for up to 15 minutes after it. Send null to clear it. Format: `date-time`. minLength: `1`. Example: `"2026-08-02T16:00:00Z"`. |
| `status` | Optional | string | Whether the link can start new checkouts. Values: `"active"`, `"inactive"`. |
| `tax` | Optional | [CheckoutTaxConfig](../models/CheckoutTaxConfig.md#checkouttaxconfig) | Tax settings for checkouts started from this link. Whether tax is collected for a checkout session or payment link. `tax`: [field definitions](../models/CreatePaymentLinkRequest.md#createpaymentlinkrequesttax). |
| `theme` | Optional | [PaymentLinkThemePatchRequest](../models/PaymentLinkThemePatchRequest.md#paymentlinkthemepatchrequest) | The title and colors for checkouts started from this link, over your branding settings. Changes to a payment link's checkout theme. Send null on a field to clear it. |
| `tip` | Optional | [CheckoutTipConfig](../models/CheckoutTipConfig.md#checkouttipconfig) | Tip options for checkouts started from this link. Tip settings for a checkout: whether tips are enabled, the percent or fixed amount options, the default tip, and custom tips. `tip`: [field definitions](../models/CreatePaymentLinkRequest.md#createpaymentlinkrequesttip). |

### UpdatePaymentLinkRequest.buyer_fields

Field definitions: [CreateCheckoutSessionOrder.buyer_fields](../models/CreateCheckoutSessionOrder.md#createcheckoutsessionorderbuyer_fields).

### UpdatePaymentLinkRequest.donation_max_amount_money

Maximum donation amount. Send null to clear the maximum. Send null to clear.

Field definitions: [shared fields](PromotionRuleValue.md#promotionrulevalue).

### UpdatePaymentLinkRequest.donation_max_amount_money variant 1

anyOf MoneyValue: Monetary amount represented as integer minor units plus an ISO 4217 currency code..

- Required: `amount`, `currency`.

### UpdatePaymentLinkRequest.donation_max_amount_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Maximum donation amount. Send null to clear the maximum. Send null to clear. 

### UpdatePaymentLinkRequest.donation_min_amount_money

Minimum donation amount. Send null to clear the minimum. Send null to clear.

Field definitions: [shared fields](PromotionRuleValue.md#promotionrulevalue).

### UpdatePaymentLinkRequest.donation_min_amount_money variant 1

anyOf MoneyValue: Monetary amount represented as integer minor units plus an ISO 4217 currency code..

- Required: `amount`, `currency`.

### UpdatePaymentLinkRequest.donation_min_amount_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Minimum donation amount. Send null to clear the minimum. Send null to clear. 

### UpdatePaymentLinkRequest.donation_suggested_amount_money_options[]

Field definitions: [BuyerCheckoutSession.tip.smart_tip_money_options[]](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options).

### UpdatePaymentLinkRequest.legal

The terms and policy links checkouts started from this link show the buyer. Changes to a payment link's legal links and terms setting. Send null on a URL to clear it.

Field definitions: [shared fields](PaymentLinkLegalPatchRequestInput.md#paymentlinklegalpatchrequestinput).

### UpdatePaymentLinkRequest.promotion_config

Field definitions: [CreatePaymentLinkRequest.promotion_config](../models/CreatePaymentLinkRequest.md#createpaymentlinkrequestpromotion_config).

### UpdatePaymentLinkRequest.tax

Field definitions: [CreatePaymentLinkRequest.tax](../models/CreatePaymentLinkRequest.md#createpaymentlinkrequesttax).

### UpdatePaymentLinkRequest.tip

Field definitions: [CreatePaymentLinkRequest.tip](../models/CreatePaymentLinkRequest.md#createpaymentlinkrequesttip).

