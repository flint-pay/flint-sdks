[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateCheckoutSessionRequest

The request body for: Create checkout session.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_fields` | Optional | [CheckoutBuyerFields](../models/CheckoutBuyerFields.md#checkoutbuyerfields) | What checkout asks the buyer for. Each field you leave out uses your checkout settings. `buyer_fields`: [field definitions](../models/CreateCheckoutSessionOrder.md#createcheckoutsessionorderbuyer_fields), [field definitions](../models/CreateCheckoutSessionRequest.md#createcheckoutsessionrequest-variant-3buyer_fields). |
| `custom_text` | Optional | [CheckoutCustomTextConfig](../models/CheckoutCustomTextConfig.md#checkoutcustomtextconfig) | Custom text for this session's checkout: an order summary message and a shipping address label. Custom checkout text you supply when creating a checkout session: an order summary message and a shipping address label. `custom_text`: [field definitions](../models/CreateCheckoutSessionOrder.md#createcheckoutsessionordercustom_text). |
| `customer_id` | Optional | string | Existing customer to link to the order Flint creates. Not allowed with type: order: the session uses the order's customer, so set customer_id on the order first. minLength: `1`. Example: `"cus_01KEZF7C006X9JK6NZNA2SM9XD"`. |
| `delivery_method_ids` | Optional | Array of string | Immutable delivery method assignment for this checkout, 1 to 25 unique IDs. Omit it to use settings.checkout.default_delivery_method_ids when the order has items to deliver; otherwise no methods are assigned. Empty arrays and null are rejected. minItems: `1`. maxItems: `25`. uniqueItems: `true`. Items: minLength: `1`. Example: `"dmet_01KEZF7C00YSG3X2D1TZJ36TM0"`. |
| `discounts` | Optional | Array of [CreateCheckoutSessionDiscount](../models/CreateCheckoutSessionDiscount.md#createcheckoutsessiondiscount) | Promotions to apply to the order Flint creates, using your account promotion settings. Only for quick_pay and subscription_plan. A ranking loss returns a promotion_declined warning; an unredeemable promotion fails the request. Read the result on order.discounts, or order.deferred_promotions for a trial. minItems: `1`. maxItems: `10`. |
| `expires_in_seconds` | Optional | integer | Seconds the session stays open, from 60 to 86,400. Omit it to use settings.checkout.default_expires_in_seconds, or 24 hours. Format: `int64`. minimum: `60`. maximum: `86400`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. Example: `"warehouse-1842"`. |
| `inventory_reservation_ids` | Optional | Array of string | Merchant-created cart holds this session may adopt during delivery selection. Only with type: order and a merchant credential. At most 100 unique IDs; exceeding the cap returns INVALID_REQUEST with param inventory_reservation_ids. Immutable after creation. Buyer quotes credit still-eligible bound holds and buyer selections adopt matching units without supplying IDs. Merchant delivery requests that omit IDs also use this binding; explicit IDs, including an empty array, replace it for that request. First adopter wins when sessions share a hold. Unused units remain held until released or expired. Unknown or ineligible IDs at creation return 404. Invalidated or otherwise ended sessions cannot use the binding, and replacement sessions never inherit it. maxItems: `100`. uniqueItems: `true`. Items: minLength: `1`. Example: `"invr_01KEZF7C0041ENRR0C2NF3AP12"`. |
| `invoice_id` | Conditional | string | The open invoice whose balance due now this checkout collects. An open session for the invoice's current collection is reused and returned with 200. Required when type is invoice, and not allowed otherwise. minLength: `1`. Example: `"inv_01KEZF7C00A5GEBMWHEAJFSAR4"`. |
| `invoice_schedule_entry_id` | Optional | string | Optional. The schedule entry to collect. Only the earliest entry that is due and still has an outstanding balance can be collected; omit it to collect that entry. Not allowed on an invoice without a schedule. Only with type invoice. minLength: `1`. Example: `"invse_01KEZF7C006JCPQBD8VZ0RNT6R"`. |
| `legal` | Optional | [LegalSettings](../models/LegalSettings.md#legalsettings) | The terms and policy links this session shows the buyer, and whether the buyer must accept the terms. Legal settings you supply when creating a checkout session: whether buyers must accept terms, and links to the terms, refund policy, shipping policy, and contract. `legal`: [field definitions](../models/CreateCheckoutSessionOrder.md#createcheckoutsessionorderlegal). |
| `metadata` | Optional | [MetadataMap](../models/MetadataMap.md#metadatamap) | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: `50`. Map values: minLength: `1`. maxLength: `4096`. `metadata`: [field definitions](../models/CreateBundleRequest.md#createbundlerequestmetadata). |
| `order_id` | Conditional | string | The order to collect. It must be open and not collected by an invoice or a return resolution. minLength: `1`. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. |
| `page_origin` | Optional | string | Origin of the page where you render this headless checkout, such as https://shop.example.com. Only this origin can show the checkout's gift card challenge and receive its result. It does not let the browser call the Flint API. Accepted only when surface is headless. Use HTTPS and a lowercase DNS hostname. Do not include a path, query, fragment, or default port. In test mode, localhost, names ending in .localhost, and 127.0.0.1 also work over HTTP or HTTPS. minLength: `1`. maxLength: `255`. |
| `payment_return_url` | Optional | string | Headless sessions only. Absolute HTTPS URL on your site where Flint sends the buyer after a redirect payment such as Affirm, whatever the outcome; read the session there to show the result. Required when the session offers affirm. It can't contain credentials, a query string, or a fragment. Test mode also accepts http loopback URLs. Up to 2,048 characters. Format: `uri`. minLength: `1`. maxLength: `2048`. Example: `"https://example.com/receipt"`. |
| `payments` | Optional | [CheckoutPaymentConfig](../models/CheckoutPaymentConfig.md#checkoutpaymentconfig) | Payment settings you supply when creating a checkout session: the enabled payment options and a note shown with payment. `payments`: [field definitions](../models/CreateCheckoutSessionOrder.md#createcheckoutsessionorderpayments). |
| `platform_fee` | Optional | [PlatformFeeRequest](../models/PlatformFeeRequest.md#platformfeerequest) | A platform fee your partner app charges on the payment the session collects, checked once against the order total when the session is created. Each payment the session creates carries its own fee, lowered to the cap for its amount. Only a partner app install token can send it; from any other credential it is INVALID_REQUEST with NOT_ALLOWED on platform_fee. A subscription_plan checkout session, or an order whose payment starts or renews a subscription, refuses it with INVALID_REQUEST and NOT_ALLOWED on platform_fee, because Flint's billing creates the renewals. amount_money must be above zero, in the payment's currency, at most the platform fee cap the merchant approved for this amount, and below the amount; otherwise INVALID_REQUEST with INVALID_VALUE on platform_fee.amount_money, with maximum_money when the cap or the amount bounds it. Without an approved cap in this currency it is ACTION_NOT_ALLOWED with reason platform_fee_consent_required. In live mode the partner app's platform_fees capability must be active; otherwise ACTION_NOT_ALLOWED with capability platform_fees and the reason the app's platform status gives. Test mode never checks the capability. Flint lowers the fee, or cancels it, when the cap or Flint's own fees leave less at confirm or capture, so the payment never fails because of it. Part of the request fingerprint. See Platform fees. A platform fee the partner app charges on the payment, beside Flint's fees. The installed merchant pays it, and Flint takes no share of it. |
| `prefill` | Optional | [CheckoutPrefillRequest](../models/CheckoutPrefillRequest.md#checkoutprefillrequest) | Contact details and addresses to fill in for the buyer, who can change them. For a customer with saved addresses, Flint fills in any address you leave out, and reads include it. With quick_pay or subscription_plan and automatic tax on, a prefilled address sets the order's tax location. Not changed by what the buyer types; for that, read buyer_contact. customer_prefill is what the checkout credential reads from the customer record. |
| `promotion_config` | Optional | [CheckoutPromotionConfig](../models/CheckoutPromotionConfig.md#checkoutpromotionconfig) | Whether automatic promotions apply to this session and whether the buyer can enter promotion codes. Promotion settings for a checkout: whether automatic promotions apply and whether the buyer can apply promotion codes. `promotion_config`: [field definitions](../models/CreateCheckoutSessionOrder.md#createcheckoutsessionorderpromotion_config). |
| `quick_pay_item` | Conditional | [CheckoutQuickPayItemRequest](../models/CheckoutQuickPayItemRequest.md#checkoutquickpayitemrequest) | The one named amount to collect. Flint creates the order from it. Required when `type` is `quick_pay`. A single custom item to charge on a checkout session, supplied as `quick_pay_item`: a name, an amount, and optional tax settings. |
| `redirects` | Optional | [CheckoutRedirects](../models/CheckoutRedirects.md#checkoutredirects) | Where hosted checkout sends the buyer. Not allowed when surface is headless; use payment_return_url. `redirects`: [field definitions](../models/CreateCheckoutSessionInvoice.md#createcheckoutsessioninvoiceredirects). |
| `replace_checkout_session_id` | Optional | string | Expected checkout session for an atomic replacement. Allowed only with type: order. The named session must belong to the same merchant, environment, and order. Active payment work fails with `OPERATION_IN_PROGRESS`. minLength: `1`. Example: `"cs_01KEZF7C004JRWFW43H037MQRN"`. |
| `return_resolution_id` | Conditional | string | The return resolution whose buyer balance this checkout collects. Required when type is return_resolution, and not allowed otherwise. The resolution must have a buyer payment pending on its replacement order. An open session with the same surface is reused and returned with 200. minLength: `1`. Example: `"retres_01KEZF7C00C7RZJN31W9SGMEQ3"`. |
| `return_url` | Optional | string | Where the checkout sends the buyer after paying, such as the invoice's or Return's page in the customer account. Limited to 2048 characters (Unicode code points) before trimming surrounding whitespace. It must be an HTTPS address of the merchant's customer account: /{merchant_id} on Flint's account host, the merchant's active custom account domain, or the host of customer_account.merchant_account_url when the merchant hosts the account. In test mode, any URL on localhost or a loopback IP address (such as 127.0.0.1 or [::1]) is also accepted, over HTTP or HTTPS and on any port. Anything else returns 400 INVALID_REQUEST with an INVALID_VALUE detail on return_url. An alias for redirects.success_url on hosted checkout or payment_return_url on headless checkout; keep them consistent when sending both. Only with type return_resolution or invoice. Format: `uri`. minLength: `1`. maxLength: `2048`. Example: `"https://example.com/receipt"`. |
| `subscription_plan_id` | Conditional | string | An active plan. minLength: `1`. Example: `"plan_01KEZF7C004CY5ZR33XST2AASV"`. |
| `subscription_terms` | Optional | [CheckoutSubscriptionTermsRequest](../models/CheckoutSubscriptionTermsRequest.md#checkoutsubscriptiontermsrequest) | Subscription terms you set on a checkout session: billing interval, interval count, and quantity. |
| `surface` | Optional | string | Defaults to hosted when omitted. Use headless for a merchant-owned presentation. Default: `"hosted"`. Values: `"hosted"`, `"headless"`. |
| `tax` | Optional | [CheckoutTaxConfig](../models/CheckoutTaxConfig.md#checkouttaxconfig) | Automatic tax settings for the order Flint creates from quick_pay_item or subscription_plan_id. With order_id, set tax on the order; sending tax returns INVALID_REQUEST with a NOT_ALLOWED detail. Read order.tax for the resulting tax settings and status. Whether tax is collected for a checkout session or payment link. `tax`: [field definitions](../models/CreateCheckoutSessionQuickPay.md#createcheckoutsessionquickpaytax). |
| `theme` | Optional | [ThemeConfig](../models/ThemeConfig.md#themeconfig) | The title and colors for this session's checkout. Fields you omit come from your branding settings. Colors and title to apply to a checkout session's page. `theme`: [field definitions](../models/CreateCheckoutSessionOrder.md#createcheckoutsessionordertheme). |
| `tip` | Optional | [CheckoutTipConfig](../models/CheckoutTipConfig.md#checkouttipconfig) | Tip options for this session. Fields you omit follow your tipping settings. Tip settings for a checkout: whether tips are enabled, the percent or fixed amount options, the default tip, and custom tips. `tip`: [field definitions](../models/CreateCheckoutSessionOrder.md#createcheckoutsessionordertip). |
| `type` | Required | string | What the checkout collects payment for. order: an order you created; send order_id. quick_pay: one named amount; send quick_pay_item, and Flint creates the order. subscription_plan: a signup for an active plan; send subscription_plan_id, and Flint creates the order and, once the buyer pays, the subscription. return_resolution: the buyer's balance on a return resolution; send return_resolution_id. invoice: what is due now on an open invoice; send invoice_id. The order, quick_pay and subscription_plan types need checkouts.checkout_sessions.write; return_resolution needs commerce.returns.resolutions.write; invoice needs commerce.invoices.write. Values: `"order"`, `"quick_pay"`, `"subscription_plan"`, `"return_resolution"`, `"invoice"`. |

### CreateCheckoutSessionRequest variant 1: `type` = `"order"`

oneOf with type: "order": The `order` variant of `CreateCheckoutSessionRequest`..

- Condition: not (at least one(present(`quick_pay_item`); present(`subscription_plan_id`); present(`subscription_terms`); present(`customer_id`); present(`tax`); present(`discounts`); present(`return_resolution_id`); present(`invoice_id`); present(`invoice_schedule_entry_id`); present(`return_url`))).
- Required: `order_id`.
- Optional: `invoice_id`, `quick_pay_item`, `return_resolution_id`, `subscription_plan_id`.
- Constraints for `type`: Values: `"order"`.

### CreateCheckoutSessionRequest variant 2: `type` = `"quick_pay"`

oneOf with type: "quick_pay": The `quick_pay` variant of `CreateCheckoutSessionRequest`..

- Condition: not (at least one(present(`order_id`); present(`replace_checkout_session_id`); present(`subscription_plan_id`); present(`subscription_terms`); present(`inventory_reservation_ids`); present(`return_resolution_id`); present(`invoice_id`); present(`invoice_schedule_entry_id`); present(`return_url`))).
- Required: `quick_pay_item`.
- Optional: `invoice_id`, `order_id`, `return_resolution_id`, `subscription_plan_id`.
- Constraints for `type`: Values: `"quick_pay"`.

### CreateCheckoutSessionRequest variant 3: `type` = `"subscription_plan"`

oneOf with type: "subscription_plan": The `subscription_plan` variant of `CreateCheckoutSessionRequest`..

- Condition: not (at least one(present(`order_id`); present(`replace_checkout_session_id`); present(`quick_pay_item`); present(`inventory_reservation_ids`); present(`return_resolution_id`); present(`invoice_id`); present(`invoice_schedule_entry_id`); present(`return_url`))).
- Required: `subscription_plan_id`.
- Optional: `invoice_id`, `order_id`, `quick_pay_item`, `return_resolution_id`.
- Constraints for `type`: Values: `"subscription_plan"`.

### CreateCheckoutSessionRequest variant 4: `type` = `"return_resolution"`

oneOf with type: "return_resolution": The `return_resolution` variant of `CreateCheckoutSessionRequest`..

- Condition: not (at least one(present(`order_id`); present(`replace_checkout_session_id`); present(`quick_pay_item`); present(`subscription_plan_id`); present(`subscription_terms`); present(`customer_id`); present(`tax`); present(`discounts`); present(`theme`); present(`payments`); present(`tip`); present(`buyer_fields`); present(`prefill`); present(`metadata`); present(`external_reference_id`); present(`legal`); present(`expires_in_seconds`); present(`custom_text`); present(`promotion_config`); present(`delivery_method_ids`); present(`platform_fee`); present(`inventory_reservation_ids`); present(`invoice_id`); present(`invoice_schedule_entry_id`))).
- Required: `return_resolution_id`.
- Optional: `invoice_id`, `order_id`, `quick_pay_item`, `subscription_plan_id`.
- Constraints for `type`: Values: `"return_resolution"`.

### CreateCheckoutSessionRequest variant 5: `type` = `"invoice"`

oneOf with type: "invoice": The `invoice` variant of `CreateCheckoutSessionRequest`..

- Condition: not (at least one(present(`order_id`); present(`replace_checkout_session_id`); present(`quick_pay_item`); present(`subscription_plan_id`); present(`subscription_terms`); present(`customer_id`); present(`tax`); present(`discounts`); present(`theme`); present(`payments`); present(`tip`); present(`buyer_fields`); present(`prefill`); present(`metadata`); present(`external_reference_id`); present(`legal`); present(`expires_in_seconds`); present(`custom_text`); present(`promotion_config`); present(`delivery_method_ids`); present(`platform_fee`); present(`inventory_reservation_ids`); present(`return_resolution_id`))).
- Required: `invoice_id`.
- Optional: `order_id`, `quick_pay_item`, `return_resolution_id`, `subscription_plan_id`.
- Constraints for `type`: Values: `"invoice"`.

### CreateCheckoutSessionRequest variant 1.buyer_fields

Field definitions: [CreateCheckoutSessionOrder.buyer_fields](../models/CreateCheckoutSessionOrder.md#createcheckoutsessionorderbuyer_fields).

### CreateCheckoutSessionRequest.custom_text

Field definitions: [CreateCheckoutSessionOrder.custom_text](../models/CreateCheckoutSessionOrder.md#createcheckoutsessionordercustom_text).

### CreateCheckoutSessionRequest.legal

Field definitions: [CreateCheckoutSessionOrder.legal](../models/CreateCheckoutSessionOrder.md#createcheckoutsessionorderlegal).

### CreateCheckoutSessionRequest.metadata

Field definitions: [CreateBundleRequest.metadata](../models/CreateBundleRequest.md#createbundlerequestmetadata).

### CreateCheckoutSessionRequest.payments

Field definitions: [CreateCheckoutSessionOrder.payments](../models/CreateCheckoutSessionOrder.md#createcheckoutsessionorderpayments).

### CreateCheckoutSessionRequest.promotion_config

Field definitions: [CreateCheckoutSessionOrder.promotion_config](../models/CreateCheckoutSessionOrder.md#createcheckoutsessionorderpromotion_config).

### CreateCheckoutSessionRequest.redirects

Field definitions: [CreateCheckoutSessionInvoice.redirects](../models/CreateCheckoutSessionInvoice.md#createcheckoutsessioninvoiceredirects).

### CreateCheckoutSessionRequest.tax

Field definitions: [CreateCheckoutSessionQuickPay.tax](../models/CreateCheckoutSessionQuickPay.md#createcheckoutsessionquickpaytax).

### CreateCheckoutSessionRequest.theme

Field definitions: [CreateCheckoutSessionOrder.theme](../models/CreateCheckoutSessionOrder.md#createcheckoutsessionordertheme).

### CreateCheckoutSessionRequest.tip

Field definitions: [CreateCheckoutSessionOrder.tip](../models/CreateCheckoutSessionOrder.md#createcheckoutsessionordertip).

### CreateCheckoutSessionRequest variant 2.buyer_fields

Field definitions: [CreateCheckoutSessionOrder.buyer_fields](../models/CreateCheckoutSessionOrder.md#createcheckoutsessionorderbuyer_fields).

### CreateCheckoutSessionRequest variant 3.buyer_fields

What checkout asks the buyer for. Each field you leave out uses your checkout settings.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address_autocomplete_enabled` | Optional | boolean | Whether checkout offers address suggestions while the buyer enters an address. |
| `require_billing_address` | Optional | boolean | Whether checkout requires the buyer's billing address. |
| `require_email` | Optional | boolean | Whether checkout requires the buyer's email address. Subscription plan sessions always require email, so only true is allowed with type: subscription_plan. Values: `true`. |
| `require_phone` | Optional | boolean | Whether checkout requires the buyer's phone number. |

### CreateCheckoutSessionRequest variant 4.buyer_fields

Field definitions: [CreateCheckoutSessionOrder.buyer_fields](../models/CreateCheckoutSessionOrder.md#createcheckoutsessionorderbuyer_fields).

### CreateCheckoutSessionRequest variant 5.buyer_fields

Field definitions: [CreateCheckoutSessionOrder.buyer_fields](../models/CreateCheckoutSessionOrder.md#createcheckoutsessionorderbuyer_fields).

