[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateCheckoutSessionSubscriptionPlan

The `subscription_plan` variant of `CreateCheckoutSessionRequest`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_fields` | Optional | [CheckoutBuyerFields](../models/CheckoutBuyerFields.md#checkoutbuyerfields) | What checkout asks the buyer for. Each field you leave out uses your checkout settings. `buyer_fields`: [field definitions](../models/CreateCheckoutSessionRequest.md#createcheckoutsessionrequest-variant-3buyer_fields). |
| `custom_text` | Optional | [CheckoutCustomTextConfig](../models/CheckoutCustomTextConfig.md#checkoutcustomtextconfig) | Custom text for this session's checkout: an order summary message and a shipping address label. Custom checkout text you supply when creating a checkout session: an order summary message and a shipping address label. `custom_text`: [field definitions](../models/CreateCheckoutSessionOrder.md#createcheckoutsessionordercustom_text). |
| `customer_id` | Optional | string | Existing customer to link to the order Flint creates. Not allowed with type: order: the session uses the order's customer, so set customer_id on the order first. minLength: `1`. Example: `"cus_01KEZF7C006X9JK6NZNA2SM9XD"`. |
| `delivery_method_ids` | Optional | Array of string | Immutable delivery method assignment for this checkout, 1 to 25 unique IDs. Omit it to use settings.checkout.default_delivery_method_ids when the order has items to deliver; otherwise no methods are assigned. Empty arrays and null are rejected. minItems: `1`. maxItems: `25`. uniqueItems: `true`. Items: minLength: `1`. Example: `"dmet_01KEZF7C00YSG3X2D1TZJ36TM0"`. |
| `discounts` | Optional | Array of [CreateCheckoutSessionDiscount](../models/CreateCheckoutSessionDiscount.md#createcheckoutsessiondiscount) | Promotions to apply to the order Flint creates, using your account promotion settings. Only for quick_pay and subscription_plan. A ranking loss returns a promotion_declined warning; an unredeemable promotion fails the request. Read the result on order.discounts, or order.deferred_promotions for a trial. minItems: `1`. maxItems: `10`. |
| `expires_in_seconds` | Optional | integer | Seconds the session stays open, from 60 to 86,400. Omit it to use settings.checkout.default_expires_in_seconds, or 24 hours. Format: `int64`. minimum: `60`. maximum: `86400`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. Example: `"warehouse-1842"`. |
| `legal` | Optional | [LegalSettings](../models/LegalSettings.md#legalsettings) | The terms and policy links this session shows the buyer, and whether the buyer must accept the terms. Legal settings you supply when creating a checkout session: whether buyers must accept terms, and links to the terms, refund policy, shipping policy, and contract. `legal`: [field definitions](../models/CreateCheckoutSessionOrder.md#createcheckoutsessionorderlegal). |
| `metadata` | Optional | [MetadataMap](../models/MetadataMap.md#metadatamap) | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: `50`. Map values: minLength: `1`. maxLength: `4096`. `metadata`: [field definitions](../models/CreateBundleRequest.md#createbundlerequestmetadata). |
| `page_origin` | Optional | string | Origin of the page where you render this headless checkout, such as https://shop.example.com. Only this origin can show the checkout's gift card challenge and receive its result. It does not let the browser call the Flint API. Accepted only when surface is headless. Use HTTPS and a lowercase DNS hostname. Do not include a path, query, fragment, or default port. In test mode, localhost, names ending in .localhost, and 127.0.0.1 also work over HTTP or HTTPS. minLength: `1`. maxLength: `255`. |
| `payment_return_url` | Optional | string | Headless sessions only. Absolute HTTPS URL on your site where Flint sends the buyer after a redirect payment such as Affirm, whatever the outcome; read the session there to show the result. Required when the session offers affirm. It can't contain credentials, a query string, or a fragment. Test mode also accepts http loopback URLs. Up to 2,048 characters. Format: `uri`. minLength: `1`. maxLength: `2048`. Example: `"https://example.com/receipt"`. |
| `payments` | Optional | [CheckoutPaymentConfig](../models/CheckoutPaymentConfig.md#checkoutpaymentconfig) | Payment settings you supply when creating a checkout session: the enabled payment options and a note shown with payment. `payments`: [field definitions](../models/CreateCheckoutSessionOrder.md#createcheckoutsessionorderpayments). |
| `platform_fee` | Optional | [PlatformFeeRequest](../models/PlatformFeeRequest.md#platformfeerequest) | A platform fee your partner app charges on the payment the session collects, checked once against the order total when the session is created. Each payment the session creates carries its own fee, lowered to the cap for its amount. Only a partner app install token can send it; from any other credential it is INVALID_REQUEST with NOT_ALLOWED on platform_fee. A subscription_plan checkout session, or an order whose payment starts or renews a subscription, refuses it with INVALID_REQUEST and NOT_ALLOWED on platform_fee, because Flint's billing creates the renewals. amount_money must be above zero, in the payment's currency, at most the platform fee cap the merchant approved for this amount, and below the amount; otherwise INVALID_REQUEST with INVALID_VALUE on platform_fee.amount_money, with maximum_money when the cap or the amount bounds it. Without an approved cap in this currency it is ACTION_NOT_ALLOWED with reason platform_fee_consent_required. In live mode the partner app's platform_fees capability must be active; otherwise ACTION_NOT_ALLOWED with capability platform_fees and the reason the app's platform status gives. Test mode never checks the capability. Flint lowers the fee, or cancels it, when the cap or Flint's own fees leave less at confirm or capture, so the payment never fails because of it. Part of the request fingerprint. See Platform fees. A platform fee the partner app charges on the payment, beside Flint's fees. The installed merchant pays it, and Flint takes no share of it. |
| `prefill` | Optional | [CheckoutPrefillRequest](../models/CheckoutPrefillRequest.md#checkoutprefillrequest) | Contact details and addresses to fill in for the buyer, who can change them. For a customer with saved addresses, Flint fills in any address you leave out, and reads include it. With quick_pay or subscription_plan and automatic tax on, a prefilled address sets the order's tax location. Not changed by what the buyer types; for that, read buyer_contact. customer_prefill is what the checkout credential reads from the customer record. |
| `promotion_config` | Optional | [CheckoutPromotionConfig](../models/CheckoutPromotionConfig.md#checkoutpromotionconfig) | Whether automatic promotions apply to this session and whether the buyer can enter promotion codes. Promotion settings for a checkout: whether automatic promotions apply and whether the buyer can apply promotion codes. `promotion_config`: [field definitions](../models/CreateCheckoutSessionOrder.md#createcheckoutsessionorderpromotion_config). |
| `redirects` | Optional | [CheckoutRedirects](../models/CheckoutRedirects.md#checkoutredirects) | Where hosted checkout sends the buyer. Not allowed when surface is headless; use payment_return_url. `redirects`: [field definitions](../models/CreateCheckoutSessionInvoice.md#createcheckoutsessioninvoiceredirects). |
| `subscription_plan_id` | Required | string | An active plan. minLength: `1`. Example: `"plan_01KEZF7C004CY5ZR33XST2AASV"`. |
| `subscription_terms` | Optional | [CheckoutSubscriptionTermsRequest](../models/CheckoutSubscriptionTermsRequest.md#checkoutsubscriptiontermsrequest) | Subscription terms you set on a checkout session: billing interval, interval count, and quantity. |
| `surface` | Optional | string | Defaults to hosted when omitted. Use headless for a merchant-owned presentation. Default: `"hosted"`. Values: `"hosted"`, `"headless"`. |
| `tax` | Optional | [CheckoutTaxConfig](../models/CheckoutTaxConfig.md#checkouttaxconfig) | Automatic tax settings for the order Flint creates from quick_pay_item or subscription_plan_id. With order_id, set tax on the order; sending tax returns INVALID_REQUEST with a NOT_ALLOWED detail. Read order.tax for the resulting tax settings and status. Whether tax is collected for a checkout session or payment link. `tax`: [field definitions](../models/CreateCheckoutSessionQuickPay.md#createcheckoutsessionquickpaytax). |
| `theme` | Optional | [ThemeConfig](../models/ThemeConfig.md#themeconfig) | The title and colors for this session's checkout. Fields you omit come from your branding settings. Colors and title to apply to a checkout session's page. `theme`: [field definitions](../models/CreateCheckoutSessionOrder.md#createcheckoutsessionordertheme). |
| `tip` | Optional | [CheckoutTipConfig](../models/CheckoutTipConfig.md#checkouttipconfig) | Tip options for this session. Fields you omit follow your tipping settings. Tip settings for a checkout: whether tips are enabled, the percent or fixed amount options, the default tip, and custom tips. `tip`: [field definitions](../models/CreateCheckoutSessionOrder.md#createcheckoutsessionordertip). |
| `type` | Required | string | What the checkout collects payment for. order: an order you created; send order_id. quick_pay: one named amount; send quick_pay_item, and Flint creates the order. subscription_plan: a signup for an active plan; send subscription_plan_id, and Flint creates the order and, once the buyer pays, the subscription. return_resolution: the buyer's balance on a return resolution; send return_resolution_id. invoice: what is due now on an open invoice; send invoice_id. The order, quick_pay and subscription_plan types need checkouts.checkout_sessions.write; return_resolution needs commerce.returns.resolutions.write; invoice needs commerce.invoices.write. Values: `"subscription_plan"`. |

### CreateCheckoutSessionSubscriptionPlan.buyer_fields

Field definitions: [CreateCheckoutSessionRequest variant 3.buyer_fields](../models/CreateCheckoutSessionRequest.md#createcheckoutsessionrequest-variant-3buyer_fields).

### CreateCheckoutSessionSubscriptionPlan.custom_text

Field definitions: [CreateCheckoutSessionOrder.custom_text](../models/CreateCheckoutSessionOrder.md#createcheckoutsessionordercustom_text).

### CreateCheckoutSessionSubscriptionPlan.legal

Field definitions: [CreateCheckoutSessionOrder.legal](../models/CreateCheckoutSessionOrder.md#createcheckoutsessionorderlegal).

### CreateCheckoutSessionSubscriptionPlan.metadata

Field definitions: [CreateBundleRequest.metadata](../models/CreateBundleRequest.md#createbundlerequestmetadata).

### CreateCheckoutSessionSubscriptionPlan.payments

Field definitions: [CreateCheckoutSessionOrder.payments](../models/CreateCheckoutSessionOrder.md#createcheckoutsessionorderpayments).

### CreateCheckoutSessionSubscriptionPlan.promotion_config

Field definitions: [CreateCheckoutSessionOrder.promotion_config](../models/CreateCheckoutSessionOrder.md#createcheckoutsessionorderpromotion_config).

### CreateCheckoutSessionSubscriptionPlan.redirects

Field definitions: [CreateCheckoutSessionInvoice.redirects](../models/CreateCheckoutSessionInvoice.md#createcheckoutsessioninvoiceredirects).

### CreateCheckoutSessionSubscriptionPlan.tax

Field definitions: [CreateCheckoutSessionQuickPay.tax](../models/CreateCheckoutSessionQuickPay.md#createcheckoutsessionquickpaytax).

### CreateCheckoutSessionSubscriptionPlan.theme

Field definitions: [CreateCheckoutSessionOrder.theme](../models/CreateCheckoutSessionOrder.md#createcheckoutsessionordertheme).

### CreateCheckoutSessionSubscriptionPlan.tip

Field definitions: [CreateCheckoutSessionOrder.tip](../models/CreateCheckoutSessionOrder.md#createcheckoutsessionordertip).

