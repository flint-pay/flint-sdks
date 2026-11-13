[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateCheckoutSessionOrder

The `order` variant of `CreateCheckoutSessionRequest`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_fields` | Optional | [CheckoutBuyerFields](../models/CheckoutBuyerFields.md#checkoutbuyerfields) | What checkout asks the buyer for. Each field you leave out uses your checkout settings. `buyer_fields`: [field definitions](../models/CreateCheckoutSessionOrder.md#createcheckoutsessionorderbuyer_fields). |
| `custom_text` | Optional | [CheckoutCustomTextConfig](../models/CheckoutCustomTextConfig.md#checkoutcustomtextconfig) | Custom text for this session's checkout: an order summary message and a shipping address label. Custom checkout text you supply when creating a checkout session: an order summary message and a shipping address label. `custom_text`: [field definitions](../models/CreateCheckoutSessionOrder.md#createcheckoutsessionordercustom_text). |
| `delivery_method_ids` | Optional | Array of string | Immutable delivery method assignment for this checkout, 1 to 25 unique IDs. Omit it to use settings.checkout.default_delivery_method_ids when the order has items to deliver; otherwise no methods are assigned. Empty arrays and null are rejected. minItems: `1`. maxItems: `25`. uniqueItems: `true`. Items: minLength: `1`. Example: `"dmet_01KEZF7C00YSG3X2D1TZJ36TM0"`. |
| `expires_in_seconds` | Optional | integer | Seconds the session stays open, from 60 to 86,400. Omit it to use settings.checkout.default_expires_in_seconds, or 24 hours. Format: `int64`. minimum: `60`. maximum: `86400`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. Example: `"warehouse-1842"`. |
| `inventory_reservation_ids` | Optional | Array of string | Merchant-created cart holds this session may adopt during delivery selection. Only with type: order and a merchant credential. At most 100 unique IDs; exceeding the cap returns INVALID_REQUEST with param inventory_reservation_ids. Immutable after creation. Buyer quotes credit still-eligible bound holds and buyer selections adopt matching units without supplying IDs. Merchant delivery requests that omit IDs also use this binding; explicit IDs, including an empty array, replace it for that request. First adopter wins when sessions share a hold. Unused units remain held until released or expired. Unknown or ineligible IDs at creation return 404. Invalidated or otherwise ended sessions cannot use the binding, and replacement sessions never inherit it. maxItems: `100`. uniqueItems: `true`. Items: minLength: `1`. Example: `"invr_01KEZF7C0041ENRR0C2NF3AP12"`. |
| `legal` | Optional | [LegalSettings](../models/LegalSettings.md#legalsettings) | The terms and policy links this session shows the buyer, and whether the buyer must accept the terms. Legal settings you supply when creating a checkout session: whether buyers must accept terms, and links to the terms, refund policy, shipping policy, and contract. `legal`: [field definitions](../models/CreateCheckoutSessionOrder.md#createcheckoutsessionorderlegal). |
| `metadata` | Optional | [MetadataMap](../models/MetadataMap.md#metadatamap) | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: `50`. Map values: minLength: `1`. maxLength: `4096`. `metadata`: [field definitions](../models/CreateBundleRequest.md#createbundlerequestmetadata). |
| `order_id` | Required | string | The order to collect. It must be open and not collected by an invoice or a return resolution. minLength: `1`. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. |
| `page_origin` | Optional | string | Origin of the page where you render this headless checkout, such as https://shop.example.com. Only this origin can show the checkout's gift card challenge and receive its result. It does not let the browser call the Flint API. Accepted only when surface is headless. Use HTTPS and a lowercase DNS hostname. Do not include a path, query, fragment, or default port. In test mode, localhost, names ending in .localhost, and 127.0.0.1 also work over HTTP or HTTPS. minLength: `1`. maxLength: `255`. |
| `payment_return_url` | Optional | string | Headless sessions only. Absolute HTTPS URL on your site where Flint sends the buyer after a redirect payment such as Affirm, whatever the outcome; read the session there to show the result. Required when the session offers affirm. It can't contain credentials, a query string, or a fragment. Test mode also accepts http loopback URLs. Up to 2,048 characters. Format: `uri`. minLength: `1`. maxLength: `2048`. Example: `"https://example.com/receipt"`. |
| `payments` | Optional | [CheckoutPaymentConfig](../models/CheckoutPaymentConfig.md#checkoutpaymentconfig) | Payment settings you supply when creating a checkout session: the enabled payment options and a note shown with payment. `payments`: [field definitions](../models/CreateCheckoutSessionOrder.md#createcheckoutsessionorderpayments). |
| `platform_fee` | Optional | [PlatformFeeRequest](../models/PlatformFeeRequest.md#platformfeerequest) | A platform fee your partner app charges on the payment the session collects, checked once against the order total when the session is created. Each payment the session creates carries its own fee, lowered to the cap for its amount. Only a partner app install token can send it; from any other credential it is INVALID_REQUEST with NOT_ALLOWED on platform_fee. A subscription_plan checkout session, or an order whose payment starts or renews a subscription, refuses it with INVALID_REQUEST and NOT_ALLOWED on platform_fee, because Flint's billing creates the renewals. amount_money must be above zero, in the payment's currency, at most the platform fee cap the merchant approved for this amount, and below the amount; otherwise INVALID_REQUEST with INVALID_VALUE on platform_fee.amount_money, with maximum_money when the cap or the amount bounds it. Without an approved cap in this currency it is ACTION_NOT_ALLOWED with reason platform_fee_consent_required. In live mode the partner app's platform_fees capability must be active; otherwise ACTION_NOT_ALLOWED with capability platform_fees and the reason the app's platform status gives. Test mode never checks the capability. Flint lowers the fee, or cancels it, when the cap or Flint's own fees leave less at confirm or capture, so the payment never fails because of it. Part of the request fingerprint. See Platform fees. A platform fee the partner app charges on the payment, beside Flint's fees. The installed merchant pays it, and Flint takes no share of it. |
| `prefill` | Optional | [CheckoutPrefillRequest](../models/CheckoutPrefillRequest.md#checkoutprefillrequest) | Contact details and addresses to fill in for the buyer, who can change them. For a customer with saved addresses, Flint fills in any address you leave out, and reads include it. With quick_pay or subscription_plan and automatic tax on, a prefilled address sets the order's tax location. Not changed by what the buyer types; for that, read buyer_contact. customer_prefill is what the checkout credential reads from the customer record. |
| `promotion_config` | Optional | [CheckoutPromotionConfig](../models/CheckoutPromotionConfig.md#checkoutpromotionconfig) | Whether automatic promotions apply to this session and whether the buyer can enter promotion codes. Promotion settings for a checkout: whether automatic promotions apply and whether the buyer can apply promotion codes. `promotion_config`: [field definitions](../models/CreateCheckoutSessionOrder.md#createcheckoutsessionorderpromotion_config). |
| `redirects` | Optional | [CheckoutRedirects](../models/CheckoutRedirects.md#checkoutredirects) | Where hosted checkout sends the buyer. Not allowed when surface is headless; use payment_return_url. `redirects`: [field definitions](../models/CreateCheckoutSessionInvoice.md#createcheckoutsessioninvoiceredirects). |
| `replace_checkout_session_id` | Optional | string | Expected checkout session for an atomic replacement. Allowed only with type: order. The named session must belong to the same merchant, environment, and order. Active payment work fails with `OPERATION_IN_PROGRESS`. minLength: `1`. Example: `"cs_01KEZF7C004JRWFW43H037MQRN"`. |
| `surface` | Optional | string | Defaults to hosted when omitted. Use headless for a merchant-owned presentation. Default: `"hosted"`. Values: `"hosted"`, `"headless"`. |
| `theme` | Optional | [ThemeConfig](../models/ThemeConfig.md#themeconfig) | The title and colors for this session's checkout. Fields you omit come from your branding settings. Colors and title to apply to a checkout session's page. `theme`: [field definitions](../models/CreateCheckoutSessionOrder.md#createcheckoutsessionordertheme). |
| `tip` | Optional | [CheckoutTipConfig](../models/CheckoutTipConfig.md#checkouttipconfig) | Tip options for this session. Fields you omit follow your tipping settings. Tip settings for a checkout: whether tips are enabled, the percent or fixed amount options, the default tip, and custom tips. `tip`: [field definitions](../models/CreateCheckoutSessionOrder.md#createcheckoutsessionordertip). |
| `type` | Required | string | What the checkout collects payment for. order: an order you created; send order_id. quick_pay: one named amount; send quick_pay_item, and Flint creates the order. subscription_plan: a signup for an active plan; send subscription_plan_id, and Flint creates the order and, once the buyer pays, the subscription. return_resolution: the buyer's balance on a return resolution; send return_resolution_id. invoice: what is due now on an open invoice; send invoice_id. The order, quick_pay and subscription_plan types need checkouts.checkout_sessions.write; return_resolution needs commerce.returns.resolutions.write; invoice needs commerce.invoices.write. Values: `"order"`. |

### CreateCheckoutSessionOrder.buyer_fields

What checkout asks the buyer for. Each field you leave out uses your checkout settings.

Field definitions: [shared fields](CheckoutBuyerFields.md#checkoutbuyerfields).

### CreateCheckoutSessionOrder.custom_text

Custom text for this session's checkout: an order summary message and a shipping address label. Custom checkout text you supply when creating a checkout session: an order summary message and a shipping address label.

Field definitions: [shared fields](CheckoutCustomTextWriteConfigInput.md#checkoutcustomtextwriteconfiginput).

### CreateCheckoutSessionOrder.legal

The terms and policy links this session shows the buyer, and whether the buyer must accept the terms. Legal settings you supply when creating a checkout session: whether buyers must accept terms, and links to the terms, refund policy, shipping policy, and contract.

Field definitions: [shared fields](CheckoutLegalConfigRequestInput.md#checkoutlegalconfigrequestinput).

### CreateCheckoutSessionOrder.metadata

Field definitions: [CreateBundleRequest.metadata](../models/CreateBundleRequest.md#createbundlerequestmetadata).

### CreateCheckoutSessionOrder.payments

Payment settings you supply when creating a checkout session: the enabled payment options and a note shown with payment.

Field definitions: [shared fields](CheckoutPaymentConfigRequestInput.md#checkoutpaymentconfigrequestinput).

### CreateCheckoutSessionOrder.promotion_config

Whether automatic promotions apply to this session and whether the buyer can enter promotion codes. Promotion settings for a checkout: whether automatic promotions apply and whether the buyer can apply promotion codes.

Field definitions: [shared fields](CheckoutPromotionConfig.md#checkoutpromotionconfig).

### CreateCheckoutSessionOrder.redirects

Field definitions: [CreateCheckoutSessionInvoice.redirects](../models/CreateCheckoutSessionInvoice.md#createcheckoutsessioninvoiceredirects).

### CreateCheckoutSessionOrder.theme

The title and colors for this session's checkout. Fields you omit come from your branding settings. Colors and title to apply to a checkout session's page.

Field definitions: [shared fields](ThemeConfigRequestInput.md#themeconfigrequestinput).

### CreateCheckoutSessionOrder.tip

Tip options for this session. Fields you omit follow your tipping settings. Tip settings for a checkout: whether tips are enabled, the percent or fixed amount options, the default tip, and custom tips.

Field definitions: [shared fields](CheckoutTipConfig.md#checkouttipconfig).

### CreateCheckoutSessionOrder.tip.default_smart_tip_money

Field definitions: [BuyerCheckoutSession.tip.default_smart_tip_money](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipdefault_smart_tip_money).

### CreateCheckoutSessionOrder.tip.smart_tip_money_options[]

Field definitions: [BuyerCheckoutSession.tip.smart_tip_money_options[]](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options).

