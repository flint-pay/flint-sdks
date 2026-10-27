[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateCheckoutSessionRequest

The request body for: Create checkout session.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_fields` | Optional | [CheckoutBuyerFields](../models/CheckoutBuyerFields.md#checkoutbuyerfields) | What checkout asks the buyer for. Each field you leave out uses your checkout settings. `buyer_fields`: [field definitions](../models/CreateCheckoutSessionRequest.md#createcheckoutsessionrequest-variant-3buyer_fields). |
| `custom_text` | Optional | [CheckoutCustomTextConfig](../models/CheckoutCustomTextConfig.md#checkoutcustomtextconfig) | Custom checkout text you supply when creating a checkout session: an order summary message and a shipping address label. `custom_text`: [field definitions](../models/CreateCheckoutSessionRequest.md#createcheckoutsessionrequestcustom_text). |
| `customer_id` | Optional | string | Existing customer to link to the order Flint creates. Not allowed with type: order: the session uses the order's customer, so set customer_id on the order first. minLength: `1`. |
| `delivery_method_ids` | Optional | Array of string | Immutable delivery method assignment for this checkout, 1 to 25 unique IDs. Omit it to use settings.checkout.default_delivery_method_ids when the order has items to deliver; otherwise no methods are assigned. Empty arrays and null are rejected. minItems: `1`. maxItems: `25`. uniqueItems: `true`. Items: minLength: `1`. |
| `expires_in_seconds` | Optional | integer string | Seconds the session stays open, from 60 to 86,400. Omit it to use settings.checkout.default_expires_in_seconds, or 24 hours. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `60`. maximum: `86400`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `legal` | Optional | [LegalSettings](../models/LegalSettings.md#legalsettings) | Legal settings you supply when creating a checkout session: whether buyers must accept terms, and links to the terms, refund policy, shipping policy, and contract. `legal`: [field definitions](../models/CreateCheckoutSessionRequest.md#createcheckoutsessionrequestlegal). |
| `metadata` | Optional | Map of string | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Map values: minLength: `1`. |
| `order_id` | Conditional | string | The order to collect. It must be open and not collected by an invoice or a return resolution. minLength: `1`. |
| `page_origin` | Optional | string | Origin of the page where you render this embedded checkout, such as https://shop.example.com. Only this origin can show the checkout's gift card challenge and receive its result. It does not let the browser call the Flint API. Accepted only when surface is embedded. Use HTTPS and a lowercase DNS hostname. Do not include a path, query, fragment, or default port. In test mode, localhost, names ending in .localhost, and 127.0.0.1 also work over HTTP or HTTPS. minLength: `1`. maxLength: `255`. |
| `payment_return_url` | Optional | string | Embedded sessions only. Absolute HTTPS URL on your site where Flint sends the buyer after a redirect payment such as Affirm, whatever the outcome; read the session there to show the result. Required when the session offers affirm. It can't contain credentials, a query string, or a fragment. Test mode also accepts http loopback URLs. Up to 2,048 characters. Format: `uri`. minLength: `1`. maxLength: `2048`. |
| `payments` | Optional | [CheckoutPaymentConfig](../models/CheckoutPaymentConfig.md#checkoutpaymentconfig) | Payment settings you supply when creating a checkout session: the enabled payment options and a note shown with payment. `payments`: [field definitions](../models/CreateCheckoutSessionRequest.md#createcheckoutsessionrequestpayments). |
| `prefill` | Optional | [CheckoutPrefillRequest](../models/CheckoutPrefillRequest.md#checkoutprefillrequest) | Contact details and addresses to fill in for the buyer, who can change them. For a customer with saved addresses, Flint fills in any address you leave out, and reads include it. With quick_pay or subscription_plan and automatic tax on, a prefilled address sets the order's tax location. Not changed by what the buyer types; for that, read buyer_contact. customer_prefill is what the checkout credential reads from the customer record. |
| `promotion_config` | Optional | [CheckoutPromotionConfig](../models/CheckoutPromotionConfig.md#checkoutpromotionconfig) | Promotion settings for a checkout: whether automatic promotions apply and whether the buyer can apply promotion codes. |
| `quick_pay_item` | Conditional | [CheckoutQuickPayItemRequest](../models/CheckoutQuickPayItemRequest.md#checkoutquickpayitemrequest) | A single custom item to charge on a checkout session, supplied as `quick_pay_item`: a name, an amount, and optional tax settings. |
| `redirects` | Optional | [CheckoutRedirects](../models/CheckoutRedirects.md#checkoutredirects) | Where hosted checkout sends the buyer. Not allowed when surface is embedded; use payment_return_url. `redirects`: [field definitions](../models/CreateCheckoutSessionRequest.md#createcheckoutsessionrequestredirects). |
| `replace_checkout_session_id` | Optional | string | Expected checkout session for an atomic replacement. Allowed only with type: order. The named session must belong to the same merchant, environment, and order. Active payment work returns PAYMENT_IN_PROGRESS. minLength: `1`. |
| `subscription_plan_id` | Conditional | string | An active plan. minLength: `1`. |
| `subscription_terms` | Optional | [CheckoutSubscriptionTermsRequest](../models/CheckoutSubscriptionTermsRequest.md#checkoutsubscriptiontermsrequest) | Subscription terms you set on a checkout session: billing interval, interval count, and quantity. |
| `surface` | Optional | string | Defaults to hosted when omitted. Use embedded for a merchant-owned presentation. Default: `"hosted"`. Values: `"hosted"`, `"embedded"`. |
| `tax` | Optional | [CheckoutTaxConfig](../models/CheckoutTaxConfig.md#checkouttaxconfig) | Automatic tax settings for the order Flint creates from quick_pay_item or subscription_plan_id. With order_id, set tax on the order; sending tax returns INVALID_REQUEST with a NOT_ALLOWED detail. Read order.tax for the resulting tax settings and status. Whether tax is collected for a checkout session or payment link. `tax`: [field definitions](../models/CreateCheckoutSessionRequest.md#createcheckoutsessionrequesttax). |
| `theme` | Optional | [ThemeConfig](../models/ThemeConfig.md#themeconfig) | Colors and title to apply to a checkout session's page. `theme`: [field definitions](../models/CreateCheckoutSessionRequest.md#createcheckoutsessionrequesttheme). |
| `tip` | Optional | [CheckoutTipConfig](../models/CheckoutTipConfig.md#checkouttipconfig) | Tip settings for a checkout: whether tips are enabled, the percent or fixed amount options, the default tip, and custom tips. |
| `type` | Required | string | What the checkout collects payment for. order: an order you created; send order_id. quick_pay: one named amount; send quick_pay_item, and Flint creates the order. subscription_plan: a signup for an active plan; send subscription_plan_id, and Flint creates the order and, once the buyer pays, the subscription. Values: `"order"`, `"quick_pay"`, `"subscription_plan"`. |

### CreateCheckoutSessionRequest variant 1: `type` = `"order"`

oneOf variant 1.

- Condition: not (at least one(present(`quick_pay_item`); present(`subscription_plan_id`); present(`subscription_terms`); present(`customer_id`); present(`tax`))).
- Required: `order_id`.
- Optional: `quick_pay_item`, `subscription_plan_id`.
- Constraints for `type`: Values: `"order"`.

### CreateCheckoutSessionRequest variant 2: `type` = `"quick_pay"`

oneOf variant 2.

- Condition: not (at least one(present(`order_id`); present(`replace_checkout_session_id`); present(`subscription_plan_id`); present(`subscription_terms`))).
- Required: `quick_pay_item`.
- Optional: `order_id`, `subscription_plan_id`.
- Constraints for `type`: Values: `"quick_pay"`.

### CreateCheckoutSessionRequest variant 3: `type` = `"subscription_plan"`

oneOf variant 3.

- Condition: not (at least one(present(`order_id`); present(`replace_checkout_session_id`); present(`quick_pay_item`))).
- Required: `subscription_plan_id`.
- Optional: `order_id`, `quick_pay_item`.
- Constraints for `type`: Values: `"subscription_plan"`.

### CreateCheckoutSessionRequest.custom_text

Custom checkout text you supply when creating a checkout session: an order summary message and a shipping address label.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_summary_message` | Optional | string | minLength: `1`. |
| `shipping_address_label` | Optional | string | minLength: `1`. |

### CreateCheckoutSessionRequest.legal

Legal settings you supply when creating a checkout session: whether buyers must accept terms, and links to the terms, refund policy, shipping policy, and contract.

Field definitions: [shared fields](CheckoutLegalConfigRequestInput.md#checkoutlegalconfigrequestinput).

### CreateCheckoutSessionRequest.payments

Payment settings you supply when creating a checkout session: the enabled payment options and a note shown with payment.

Field definitions: [shared fields](CheckoutPaymentConfigRequestInput.md#checkoutpaymentconfigrequestinput).

### CreateCheckoutSessionRequest.redirects

Where hosted checkout sends the buyer. Not allowed when surface is embedded; use payment_return_url.

Field definitions: [shared fields](CheckoutRedirectsRequestInput.md#checkoutredirectsrequestinput).

### CreateCheckoutSessionRequest.tax

Automatic tax settings for the order Flint creates from quick_pay_item or subscription_plan_id. With order_id, set tax on the order; sending tax returns INVALID_REQUEST with a NOT_ALLOWED detail. Read order.tax for the resulting tax settings and status. Whether tax is collected for a checkout session or payment link.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `enabled` | Optional | boolean |  |

### CreateCheckoutSessionRequest.theme

Colors and title to apply to a checkout session's page.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `accent_color` | Optional | string | minLength: `1`. |
| `primary_color` | Optional | string | minLength: `1`. |
| `title` | Optional | string | minLength: `1`. |

### CreateCheckoutSessionRequest variant 3.buyer_fields

What checkout asks the buyer for. Each field you leave out uses your checkout settings.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address_autocomplete_enabled` | Optional | boolean | Whether checkout offers address suggestions while the buyer enters an address. |
| `require_billing_address` | Optional | boolean | Whether checkout requires the buyer's billing address. |
| `require_email` | Optional | boolean | Whether checkout requires the buyer's email address. Subscription plan sessions always require email, so only true is allowed with type: subscription_plan. Values: `true`. |
| `require_phone` | Optional | boolean | Whether checkout requires the buyer's phone number. |

