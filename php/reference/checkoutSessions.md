[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# checkoutSessions

### checkoutSessions.closeSession

Closes an open checkout session before it naturally expires.

`POST /v1/checkout-sessions/{checkout_session_id}/close`

Signature: `closeSession(string|Model $checkout_session_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `checkout_session_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Optional | [CloseCheckoutSessionRequestInput](../models/CloseCheckoutSessionRequestInput.md#closecheckoutsessionrequestinput) | The request body for: Close checkout session. |

Body model: [CloseCheckoutSessionRequestInput](../models/CloseCheckoutSessionRequestInput.md#closecheckoutsessionrequestinput).

#### checkoutSessions.closeSession body fields

Field definitions: [shared fields](../models/CloseCheckoutSessionRequestInput.md#closecheckoutsessionrequestinput).

#### Response

Returned payload: [CheckoutSession](../models/CheckoutSession.md#checkoutsession).

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
| 403 | AuthenticationError | authentication |
| 404 | NotFoundError | not_found |
| 409 | ConflictError | conflict |
| 410 | ApiError | api |
| 413 | ApiError | api |
| 415 | ApiError | api |
| 429 | RateLimitError | rate_limit |
| 500 | ServerError | server |
| 503 | ServerError | server |
| 504 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `closeSessionWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic — [policy 2](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->checkoutSessions->closeSession('example', null, new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/checkoutSessions-closeSession.php)

### checkoutSessions.confirmCustomerVerification

Checks the code the buyer typed. A right code makes the checkout act for the customer with that email, and creates the customer, with a customer.created event, when none exists. The checkout can then save the buyer's card with save_payment_method on POST /v1/orders/{order_id}/pay, and list and pay with that customer's saved cards. The order's customer does not change until the payment succeeds. Only the checkout_auth_token in the response acts for that customer. Send it as Authorization: Bearer <checkout_auth_token> from then on. Every other credential for the session, including earlier checkout_auth_token values and hosted checkout links, keeps working for the checkout and acts for no customer, so it lists no saved cards and pays with none. A buyer who opens the link on another device confirms an email there to use them, and from then on only that device's new credential acts for a customer. If the response is lost after the code was accepted, the credential you sent still works. Send the same code again with it while the code is valid, which counts as another try and returns a new credential for the same customer, or request a new code. A wrong, expired, or replaced code returns CUSTOMER_VERIFICATION_CODE_INVALID, and so does a used code once the checkout was confirmed again, any code after its 5th try, any code for an email past its limit on wrong tries, or a code whose email's customer changed its email or was deleted after the code was sent. If the checkout stops offering saved payment details before the code is confirmed, such as when the merchant turns them off, the request returns CUSTOMER_VERIFICATION_NOT_OFFERED. A credential that already acts for a customer gets CHECKOUT_CUSTOMER_ALREADY_AUTHORIZED, and confirming never replaces a customer the merchant named. Once the customer whose email the buyer confirmed changes that email or is deleted, the checkout acts for no customer, and the buyer can confirm the customer's new email or another one. A checkout opened from a checkout reminder link acts for no customer the buyer confirmed earlier, so its buyer confirms an email again. A texted code for saved details binds the checkout the same way, but the new credential opens only the cards saved with that number: it lists and pays with no card saved by email, and reads no customer details. A texted code checks once, so after a lost answer request a new code. A code for purpose confirm_saved_payment_method keeps the session's credential, so the response omits checkout_auth_token and carries payment_method_save on the checkout session. A texted code saves the card with the number when the number already opens the customer's saved details or the customer has none yet; otherwise payment_method_save.email_confirmation_required turns true, and an emailed code finishes the save. An emailed code alone saves the card by email. After success, a retry with the same Idempotency-Key and code returns the stored answer and credential to any credential of the session. After failure, a retry checks the code again and counts as another try.

`POST /v1/checkout-sessions/{checkout_session_id}/customer-verifications/{checkout_session_customer_verification_id}/confirm`

Signature:

```text
confirmCustomerVerification(string|
  Model $checkout_session_id,
 string|
  Model $checkout_session_customer_verification_id,
 array|
  Model $params,
 ?RequestOptions $options = null)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `checkout_session_id` | Required | string |  |
| `checkout_session_customer_verification_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [ConfirmCheckoutSessionCustomerVerificationRequestInput](../models/ConfirmCheckoutSessionCustomerVerificationRequestInput.md#confirmcheckoutsessioncustomerverificationrequestinput) | The code the buyer typed. |

Body model: [ConfirmCheckoutSessionCustomerVerificationRequestInput](../models/ConfirmCheckoutSessionCustomerVerificationRequestInput.md#confirmcheckoutsessioncustomerverificationrequestinput).

#### checkoutSessions.confirmCustomerVerification body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `code` | Required | string | The six-digit code from the email or the text. minLength: `6`. maxLength: `6`. pattern: `^[0-9]{6}$`. |

#### Response

Returned payload: [CheckoutSessionWithSecret](../models/CheckoutSessionWithSecret.md#checkoutsessionwithsecret).

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
| 403 | AuthenticationError | authentication |
| 404 | NotFoundError | not_found |
| 409 | ConflictError | conflict |
| 410 | ApiError | api |
| 413 | ApiError | api |
| 415 | ApiError | api |
| 429 | RateLimitError | rate_limit |
| 500 | ServerError | server |
| 503 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `confirmCustomerVerificationWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic — [policy 2](../RUNTIME.md#idempotency).

Authentication modes: `checkout`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->checkoutSessions->confirmCustomerVerification('cs_example', 'cver_example', [
  'code' => '123456',
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/checkoutSessions-confirmCustomerVerification.php)

### checkoutSessions.create

Creates a hosted or embedded checkout session for an order, quick-pay charge, or subscription plan signup. Creation never implicitly replaces an open order session. To replace one, send order_id with replace_checkout_session_id set to the expected current session; the compare-and-swap replacement and collection-lock transfer commit atomically.

`POST /v1/checkout-sessions`

Signature: `create(array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [CreateCheckoutSessionRequestInput](../models/CreateCheckoutSessionRequestInput.md#createcheckoutsessionrequestinput) | The request body for: Create checkout session. |

Body model: [CreateCheckoutSessionRequestInput](../models/CreateCheckoutSessionRequestInput.md#createcheckoutsessionrequestinput).

#### checkoutSessions.create body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_fields` | Optional | [CheckoutBuyerFieldsInput](../models/CheckoutBuyerFieldsInput.md#checkoutbuyerfieldsinput) | What checkout asks the buyer for. Each field you leave out uses your checkout settings. |
| `custom_text` | Optional | [CheckoutCustomTextWriteConfigInput](../models/CheckoutCustomTextWriteConfigInput.md#checkoutcustomtextwriteconfiginput) | Custom checkout text you supply when creating a checkout session: an order summary message and a shipping address label. |
| `customer_id` | Optional | string | Existing customer to link to the order Flint creates. Not allowed with type: order: the session uses the order's customer, so set customer_id on the order first. minLength: `1`. |
| `delivery_method_ids` | Optional | Array of string | Immutable delivery method assignment for this checkout, 1 to 25 unique IDs. Omit it to use settings.checkout.default_delivery_method_ids when the order has items to deliver; otherwise no methods are assigned. Empty arrays and null are rejected. minItems: `1`. maxItems: `25`. uniqueItems: `true`. Items: minLength: `1`. |
| `expires_in_seconds` | Optional | integer string | Seconds the session stays open, from 60 to 86,400. Omit it to use settings.checkout.default_expires_in_seconds, or 24 hours. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `60`. maximum: `86400`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `legal` | Optional | [CheckoutLegalConfigRequestInput](../models/CheckoutLegalConfigRequestInput.md#checkoutlegalconfigrequestinput) | Legal settings you supply when creating a checkout session: whether buyers must accept terms, and links to the terms, refund policy, shipping policy, and contract. |
| `metadata` | Optional | Map of string | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Map values: minLength: `1`. |
| `order_id` | Optional | string | The order to collect. It must be open and not collected by an invoice or a return resolution. minLength: `1`. |
| `page_origin` | Optional | string | Origin of the page where you render this embedded checkout, such as https://shop.example.com. Only this origin can show the checkout's gift card challenge and receive its result. It does not let the browser call the Flint API. Accepted only when surface is embedded. Use HTTPS and a lowercase DNS hostname. Do not include a path, query, fragment, or default port. In test mode, localhost, names ending in .localhost, and 127.0.0.1 also work over HTTP or HTTPS. minLength: `1`. maxLength: `255`. |
| `payment_return_url` | Optional | string | Embedded sessions only. Absolute HTTPS URL on your site where Flint sends the buyer after a redirect payment such as Affirm, whatever the outcome; read the session there to show the result. Required when the session offers affirm. It can't contain credentials, a query string, or a fragment. Test mode also accepts http loopback URLs. Up to 2,048 characters. Format: `uri`. minLength: `1`. maxLength: `2048`. |
| `payments` | Optional | [CheckoutPaymentConfigRequestInput](../models/CheckoutPaymentConfigRequestInput.md#checkoutpaymentconfigrequestinput) | Payment settings you supply when creating a checkout session: the enabled payment options and a note shown with payment. |
| `prefill` | Optional | [CheckoutPrefillRequestInput](../models/CheckoutPrefillRequestInput.md#checkoutprefillrequestinput) | Contact details and addresses to fill in for the buyer, who can change them. For a customer with saved addresses, Flint fills in any address you leave out, and reads include it. With quick_pay or subscription_plan and automatic tax on, a prefilled address sets the order's tax location. Not changed by what the buyer types; for that, read buyer_contact. customer_prefill is what the checkout credential reads from the customer record. |
| `promotion_config` | Optional | [CheckoutPromotionConfigInput](../models/CheckoutPromotionConfigInput.md#checkoutpromotionconfiginput) | Promotion settings for a checkout: whether automatic promotions apply and whether the buyer can apply promotion codes. |
| `quick_pay_item` | Optional | [CheckoutQuickPayItemRequestInput](../models/CheckoutQuickPayItemRequestInput.md#checkoutquickpayitemrequestinput) | A single custom item to charge on a checkout session, supplied as `quick_pay_item`: a name, an amount, and optional tax settings. |
| `redirects` | Optional | [CheckoutRedirectsRequestInput](../models/CheckoutRedirectsRequestInput.md#checkoutredirectsrequestinput) | Where hosted checkout sends the buyer. Not allowed when surface is embedded; use payment_return_url. |
| `replace_checkout_session_id` | Optional | string | Expected checkout session for an atomic replacement. Allowed only with type: order. The named session must belong to the same merchant, environment, and order. Active payment work returns PAYMENT_IN_PROGRESS. minLength: `1`. |
| `subscription_plan_id` | Optional | string | An active plan. minLength: `1`. |
| `subscription_terms` | Optional | [CheckoutSubscriptionTermsRequestInput](../models/CheckoutSubscriptionTermsRequestInput.md#checkoutsubscriptiontermsrequestinput) | Subscription terms you set on a checkout session: billing interval, interval count, and quantity. |
| `surface` | Optional | string | Defaults to hosted when omitted. Use embedded for a merchant-owned presentation. Default: `"hosted"`. Values: `"hosted"`, `"embedded"`. |
| `tax` | Optional | [CheckoutTaxConfigInput](../models/CheckoutTaxConfigInput.md#checkouttaxconfiginput) | Automatic tax settings for the order Flint creates from quick_pay_item or subscription_plan_id. With order_id, set tax on the order; sending tax returns INVALID_REQUEST with a NOT_ALLOWED detail. Read order.tax for the resulting tax settings and status. Whether tax is collected for a checkout session or payment link. |
| `theme` | Optional | [ThemeConfigRequestInput](../models/ThemeConfigRequestInput.md#themeconfigrequestinput) | Colors and title to apply to a checkout session's page. |
| `tip` | Optional | [CheckoutTipConfigInput](../models/CheckoutTipConfigInput.md#checkouttipconfiginput) | Tip settings for a checkout: whether tips are enabled, the percent or fixed amount options, the default tip, and custom tips. |
| `type` | Required | string | What the checkout collects payment for. order: an order you created; send order_id. quick_pay: one named amount; send quick_pay_item, and Flint creates the order. subscription_plan: a signup for an active plan; send subscription_plan_id, and Flint creates the order and, once the buyer pays, the subscription. Values: `"order"`, `"quick_pay"`, `"subscription_plan"`. |

#### checkoutSessions.create body oneOf variant 1



#### checkoutSessions.create body oneOf variant 1 fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_fields` | Optional | [CheckoutBuyerFieldsInput](../models/CheckoutBuyerFieldsInput.md#checkoutbuyerfieldsinput) | What checkout asks the buyer for. Each field you leave out uses your checkout settings. |
| `custom_text` | Optional | [CheckoutCustomTextWriteConfigInput](../models/CheckoutCustomTextWriteConfigInput.md#checkoutcustomtextwriteconfiginput) | Custom checkout text you supply when creating a checkout session: an order summary message and a shipping address label. |
| `customer_id` | Optional | string | Existing customer to link to the order Flint creates. Not allowed with type: order: the session uses the order's customer, so set customer_id on the order first. minLength: `1`. |
| `delivery_method_ids` | Optional | Array of string | Immutable delivery method assignment for this checkout, 1 to 25 unique IDs. Omit it to use settings.checkout.default_delivery_method_ids when the order has items to deliver; otherwise no methods are assigned. Empty arrays and null are rejected. minItems: `1`. maxItems: `25`. uniqueItems: `true`. Items: minLength: `1`. |
| `expires_in_seconds` | Optional | integer string | Seconds the session stays open, from 60 to 86,400. Omit it to use settings.checkout.default_expires_in_seconds, or 24 hours. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `60`. maximum: `86400`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `legal` | Optional | [CheckoutLegalConfigRequestInput](../models/CheckoutLegalConfigRequestInput.md#checkoutlegalconfigrequestinput) | Legal settings you supply when creating a checkout session: whether buyers must accept terms, and links to the terms, refund policy, shipping policy, and contract. |
| `metadata` | Optional | Map of string | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Map values: minLength: `1`. |
| `order_id` | Required | string | The order to collect. It must be open and not collected by an invoice or a return resolution. minLength: `1`. |
| `page_origin` | Optional | string | Origin of the page where you render this embedded checkout, such as https://shop.example.com. Only this origin can show the checkout's gift card challenge and receive its result. It does not let the browser call the Flint API. Accepted only when surface is embedded. Use HTTPS and a lowercase DNS hostname. Do not include a path, query, fragment, or default port. In test mode, localhost, names ending in .localhost, and 127.0.0.1 also work over HTTP or HTTPS. minLength: `1`. maxLength: `255`. |
| `payment_return_url` | Optional | string | Embedded sessions only. Absolute HTTPS URL on your site where Flint sends the buyer after a redirect payment such as Affirm, whatever the outcome; read the session there to show the result. Required when the session offers affirm. It can't contain credentials, a query string, or a fragment. Test mode also accepts http loopback URLs. Up to 2,048 characters. Format: `uri`. minLength: `1`. maxLength: `2048`. |
| `payments` | Optional | [CheckoutPaymentConfigRequestInput](../models/CheckoutPaymentConfigRequestInput.md#checkoutpaymentconfigrequestinput) | Payment settings you supply when creating a checkout session: the enabled payment options and a note shown with payment. |
| `prefill` | Optional | [CheckoutPrefillRequestInput](../models/CheckoutPrefillRequestInput.md#checkoutprefillrequestinput) | Contact details and addresses to fill in for the buyer, who can change them. For a customer with saved addresses, Flint fills in any address you leave out, and reads include it. With quick_pay or subscription_plan and automatic tax on, a prefilled address sets the order's tax location. Not changed by what the buyer types; for that, read buyer_contact. customer_prefill is what the checkout credential reads from the customer record. |
| `promotion_config` | Optional | [CheckoutPromotionConfigInput](../models/CheckoutPromotionConfigInput.md#checkoutpromotionconfiginput) | Promotion settings for a checkout: whether automatic promotions apply and whether the buyer can apply promotion codes. |
| `quick_pay_item` | Optional | [CheckoutQuickPayItemRequestInput](../models/CheckoutQuickPayItemRequestInput.md#checkoutquickpayitemrequestinput) | A single custom item to charge on a checkout session, supplied as `quick_pay_item`: a name, an amount, and optional tax settings. |
| `redirects` | Optional | [CheckoutRedirectsRequestInput](../models/CheckoutRedirectsRequestInput.md#checkoutredirectsrequestinput) | Where hosted checkout sends the buyer. Not allowed when surface is embedded; use payment_return_url. |
| `replace_checkout_session_id` | Optional | string | Expected checkout session for an atomic replacement. Allowed only with type: order. The named session must belong to the same merchant, environment, and order. Active payment work returns PAYMENT_IN_PROGRESS. minLength: `1`. |
| `subscription_plan_id` | Optional | string | An active plan. minLength: `1`. |
| `subscription_terms` | Optional | [CheckoutSubscriptionTermsRequestInput](../models/CheckoutSubscriptionTermsRequestInput.md#checkoutsubscriptiontermsrequestinput) | Subscription terms you set on a checkout session: billing interval, interval count, and quantity. |
| `surface` | Optional | string | Defaults to hosted when omitted. Use embedded for a merchant-owned presentation. Default: `"hosted"`. Values: `"hosted"`, `"embedded"`. |
| `tax` | Optional | [CheckoutTaxConfigInput](../models/CheckoutTaxConfigInput.md#checkouttaxconfiginput) | Automatic tax settings for the order Flint creates from quick_pay_item or subscription_plan_id. With order_id, set tax on the order; sending tax returns INVALID_REQUEST with a NOT_ALLOWED detail. Read order.tax for the resulting tax settings and status. Whether tax is collected for a checkout session or payment link. |
| `theme` | Optional | [ThemeConfigRequestInput](../models/ThemeConfigRequestInput.md#themeconfigrequestinput) | Colors and title to apply to a checkout session's page. |
| `tip` | Optional | [CheckoutTipConfigInput](../models/CheckoutTipConfigInput.md#checkouttipconfiginput) | Tip settings for a checkout: whether tips are enabled, the percent or fixed amount options, the default tip, and custom tips. |
| `type` | Required | string | What the checkout collects payment for. order: an order you created; send order_id. quick_pay: one named amount; send quick_pay_item, and Flint creates the order. subscription_plan: a signup for an active plan; send subscription_plan_id, and Flint creates the order and, once the buyer pays, the subscription. Values: `"order"`. |

#### checkoutSessions.create body oneOf variant 2



#### checkoutSessions.create body oneOf variant 2 fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_fields` | Optional | [CheckoutBuyerFieldsInput](../models/CheckoutBuyerFieldsInput.md#checkoutbuyerfieldsinput) | What checkout asks the buyer for. Each field you leave out uses your checkout settings. |
| `custom_text` | Optional | [CheckoutCustomTextWriteConfigInput](../models/CheckoutCustomTextWriteConfigInput.md#checkoutcustomtextwriteconfiginput) | Custom checkout text you supply when creating a checkout session: an order summary message and a shipping address label. |
| `customer_id` | Optional | string | Existing customer to link to the order Flint creates. Not allowed with type: order: the session uses the order's customer, so set customer_id on the order first. minLength: `1`. |
| `delivery_method_ids` | Optional | Array of string | Immutable delivery method assignment for this checkout, 1 to 25 unique IDs. Omit it to use settings.checkout.default_delivery_method_ids when the order has items to deliver; otherwise no methods are assigned. Empty arrays and null are rejected. minItems: `1`. maxItems: `25`. uniqueItems: `true`. Items: minLength: `1`. |
| `expires_in_seconds` | Optional | integer string | Seconds the session stays open, from 60 to 86,400. Omit it to use settings.checkout.default_expires_in_seconds, or 24 hours. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `60`. maximum: `86400`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `legal` | Optional | [CheckoutLegalConfigRequestInput](../models/CheckoutLegalConfigRequestInput.md#checkoutlegalconfigrequestinput) | Legal settings you supply when creating a checkout session: whether buyers must accept terms, and links to the terms, refund policy, shipping policy, and contract. |
| `metadata` | Optional | Map of string | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Map values: minLength: `1`. |
| `order_id` | Optional | string | The order to collect. It must be open and not collected by an invoice or a return resolution. minLength: `1`. |
| `page_origin` | Optional | string | Origin of the page where you render this embedded checkout, such as https://shop.example.com. Only this origin can show the checkout's gift card challenge and receive its result. It does not let the browser call the Flint API. Accepted only when surface is embedded. Use HTTPS and a lowercase DNS hostname. Do not include a path, query, fragment, or default port. In test mode, localhost, names ending in .localhost, and 127.0.0.1 also work over HTTP or HTTPS. minLength: `1`. maxLength: `255`. |
| `payment_return_url` | Optional | string | Embedded sessions only. Absolute HTTPS URL on your site where Flint sends the buyer after a redirect payment such as Affirm, whatever the outcome; read the session there to show the result. Required when the session offers affirm. It can't contain credentials, a query string, or a fragment. Test mode also accepts http loopback URLs. Up to 2,048 characters. Format: `uri`. minLength: `1`. maxLength: `2048`. |
| `payments` | Optional | [CheckoutPaymentConfigRequestInput](../models/CheckoutPaymentConfigRequestInput.md#checkoutpaymentconfigrequestinput) | Payment settings you supply when creating a checkout session: the enabled payment options and a note shown with payment. |
| `prefill` | Optional | [CheckoutPrefillRequestInput](../models/CheckoutPrefillRequestInput.md#checkoutprefillrequestinput) | Contact details and addresses to fill in for the buyer, who can change them. For a customer with saved addresses, Flint fills in any address you leave out, and reads include it. With quick_pay or subscription_plan and automatic tax on, a prefilled address sets the order's tax location. Not changed by what the buyer types; for that, read buyer_contact. customer_prefill is what the checkout credential reads from the customer record. |
| `promotion_config` | Optional | [CheckoutPromotionConfigInput](../models/CheckoutPromotionConfigInput.md#checkoutpromotionconfiginput) | Promotion settings for a checkout: whether automatic promotions apply and whether the buyer can apply promotion codes. |
| `quick_pay_item` | Required | [CheckoutQuickPayItemRequestInput](../models/CheckoutQuickPayItemRequestInput.md#checkoutquickpayitemrequestinput) | A single custom item to charge on a checkout session, supplied as `quick_pay_item`: a name, an amount, and optional tax settings. |
| `redirects` | Optional | [CheckoutRedirectsRequestInput](../models/CheckoutRedirectsRequestInput.md#checkoutredirectsrequestinput) | Where hosted checkout sends the buyer. Not allowed when surface is embedded; use payment_return_url. |
| `replace_checkout_session_id` | Optional | string | Expected checkout session for an atomic replacement. Allowed only with type: order. The named session must belong to the same merchant, environment, and order. Active payment work returns PAYMENT_IN_PROGRESS. minLength: `1`. |
| `subscription_plan_id` | Optional | string | An active plan. minLength: `1`. |
| `subscription_terms` | Optional | [CheckoutSubscriptionTermsRequestInput](../models/CheckoutSubscriptionTermsRequestInput.md#checkoutsubscriptiontermsrequestinput) | Subscription terms you set on a checkout session: billing interval, interval count, and quantity. |
| `surface` | Optional | string | Defaults to hosted when omitted. Use embedded for a merchant-owned presentation. Default: `"hosted"`. Values: `"hosted"`, `"embedded"`. |
| `tax` | Optional | [CheckoutTaxConfigInput](../models/CheckoutTaxConfigInput.md#checkouttaxconfiginput) | Automatic tax settings for the order Flint creates from quick_pay_item or subscription_plan_id. With order_id, set tax on the order; sending tax returns INVALID_REQUEST with a NOT_ALLOWED detail. Read order.tax for the resulting tax settings and status. Whether tax is collected for a checkout session or payment link. |
| `theme` | Optional | [ThemeConfigRequestInput](../models/ThemeConfigRequestInput.md#themeconfigrequestinput) | Colors and title to apply to a checkout session's page. |
| `tip` | Optional | [CheckoutTipConfigInput](../models/CheckoutTipConfigInput.md#checkouttipconfiginput) | Tip settings for a checkout: whether tips are enabled, the percent or fixed amount options, the default tip, and custom tips. |
| `type` | Required | string | What the checkout collects payment for. order: an order you created; send order_id. quick_pay: one named amount; send quick_pay_item, and Flint creates the order. subscription_plan: a signup for an active plan; send subscription_plan_id, and Flint creates the order and, once the buyer pays, the subscription. Values: `"quick_pay"`. |

#### checkoutSessions.create body oneOf variant 3



#### checkoutSessions.create body oneOf variant 3 fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_fields` | Optional | [CheckoutBuyerFieldsInput](../models/CheckoutBuyerFieldsInput.md#checkoutbuyerfieldsinput) | What checkout asks the buyer for. Each field you leave out uses your checkout settings. |
| `custom_text` | Optional | [CheckoutCustomTextWriteConfigInput](../models/CheckoutCustomTextWriteConfigInput.md#checkoutcustomtextwriteconfiginput) | Custom checkout text you supply when creating a checkout session: an order summary message and a shipping address label. |
| `customer_id` | Optional | string | Existing customer to link to the order Flint creates. Not allowed with type: order: the session uses the order's customer, so set customer_id on the order first. minLength: `1`. |
| `delivery_method_ids` | Optional | Array of string | Immutable delivery method assignment for this checkout, 1 to 25 unique IDs. Omit it to use settings.checkout.default_delivery_method_ids when the order has items to deliver; otherwise no methods are assigned. Empty arrays and null are rejected. minItems: `1`. maxItems: `25`. uniqueItems: `true`. Items: minLength: `1`. |
| `expires_in_seconds` | Optional | integer string | Seconds the session stays open, from 60 to 86,400. Omit it to use settings.checkout.default_expires_in_seconds, or 24 hours. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `60`. maximum: `86400`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `legal` | Optional | [CheckoutLegalConfigRequestInput](../models/CheckoutLegalConfigRequestInput.md#checkoutlegalconfigrequestinput) | Legal settings you supply when creating a checkout session: whether buyers must accept terms, and links to the terms, refund policy, shipping policy, and contract. |
| `metadata` | Optional | Map of string | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Map values: minLength: `1`. |
| `order_id` | Optional | string | The order to collect. It must be open and not collected by an invoice or a return resolution. minLength: `1`. |
| `page_origin` | Optional | string | Origin of the page where you render this embedded checkout, such as https://shop.example.com. Only this origin can show the checkout's gift card challenge and receive its result. It does not let the browser call the Flint API. Accepted only when surface is embedded. Use HTTPS and a lowercase DNS hostname. Do not include a path, query, fragment, or default port. In test mode, localhost, names ending in .localhost, and 127.0.0.1 also work over HTTP or HTTPS. minLength: `1`. maxLength: `255`. |
| `payment_return_url` | Optional | string | Embedded sessions only. Absolute HTTPS URL on your site where Flint sends the buyer after a redirect payment such as Affirm, whatever the outcome; read the session there to show the result. Required when the session offers affirm. It can't contain credentials, a query string, or a fragment. Test mode also accepts http loopback URLs. Up to 2,048 characters. Format: `uri`. minLength: `1`. maxLength: `2048`. |
| `payments` | Optional | [CheckoutPaymentConfigRequestInput](../models/CheckoutPaymentConfigRequestInput.md#checkoutpaymentconfigrequestinput) | Payment settings you supply when creating a checkout session: the enabled payment options and a note shown with payment. |
| `prefill` | Optional | [CheckoutPrefillRequestInput](../models/CheckoutPrefillRequestInput.md#checkoutprefillrequestinput) | Contact details and addresses to fill in for the buyer, who can change them. For a customer with saved addresses, Flint fills in any address you leave out, and reads include it. With quick_pay or subscription_plan and automatic tax on, a prefilled address sets the order's tax location. Not changed by what the buyer types; for that, read buyer_contact. customer_prefill is what the checkout credential reads from the customer record. |
| `promotion_config` | Optional | [CheckoutPromotionConfigInput](../models/CheckoutPromotionConfigInput.md#checkoutpromotionconfiginput) | Promotion settings for a checkout: whether automatic promotions apply and whether the buyer can apply promotion codes. |
| `quick_pay_item` | Optional | [CheckoutQuickPayItemRequestInput](../models/CheckoutQuickPayItemRequestInput.md#checkoutquickpayitemrequestinput) | A single custom item to charge on a checkout session, supplied as `quick_pay_item`: a name, an amount, and optional tax settings. |
| `redirects` | Optional | [CheckoutRedirectsRequestInput](../models/CheckoutRedirectsRequestInput.md#checkoutredirectsrequestinput) | Where hosted checkout sends the buyer. Not allowed when surface is embedded; use payment_return_url. |
| `replace_checkout_session_id` | Optional | string | Expected checkout session for an atomic replacement. Allowed only with type: order. The named session must belong to the same merchant, environment, and order. Active payment work returns PAYMENT_IN_PROGRESS. minLength: `1`. |
| `subscription_plan_id` | Required | string | An active plan. minLength: `1`. |
| `subscription_terms` | Optional | [CheckoutSubscriptionTermsRequestInput](../models/CheckoutSubscriptionTermsRequestInput.md#checkoutsubscriptiontermsrequestinput) | Subscription terms you set on a checkout session: billing interval, interval count, and quantity. |
| `surface` | Optional | string | Defaults to hosted when omitted. Use embedded for a merchant-owned presentation. Default: `"hosted"`. Values: `"hosted"`, `"embedded"`. |
| `tax` | Optional | [CheckoutTaxConfigInput](../models/CheckoutTaxConfigInput.md#checkouttaxconfiginput) | Automatic tax settings for the order Flint creates from quick_pay_item or subscription_plan_id. With order_id, set tax on the order; sending tax returns INVALID_REQUEST with a NOT_ALLOWED detail. Read order.tax for the resulting tax settings and status. Whether tax is collected for a checkout session or payment link. |
| `theme` | Optional | [ThemeConfigRequestInput](../models/ThemeConfigRequestInput.md#themeconfigrequestinput) | Colors and title to apply to a checkout session's page. |
| `tip` | Optional | [CheckoutTipConfigInput](../models/CheckoutTipConfigInput.md#checkouttipconfiginput) | Tip settings for a checkout: whether tips are enabled, the percent or fixed amount options, the default tip, and custom tips. |
| `type` | Required | string | What the checkout collects payment for. order: an order you created; send order_id. quick_pay: one named amount; send quick_pay_item, and Flint creates the order. subscription_plan: a signup for an active plan; send subscription_plan_id, and Flint creates the order and, once the buyer pays, the subscription. Values: `"subscription_plan"`. |

#### Response

Returned payload: [CheckoutSessionWithSecret](../models/CheckoutSessionWithSecret.md#checkoutsessionwithsecret).

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
| 403 | AuthenticationError | authentication |
| 404 | NotFoundError | not_found |
| 409 | ConflictError | conflict |
| 410 | ApiError | api |
| 413 | ApiError | api |
| 415 | ApiError | api |
| 429 | RateLimitError | rate_limit |
| 500 | ServerError | server |
| 502 | ServerError | server |
| 503 | ServerError | server |
| 504 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `createWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic — [policy 2](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->checkoutSessions->create([
  'type' => 'order',
  'order_id' => 'example',
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/checkoutSessions-create.php)

### checkoutSessions.createCustomerVerification

Sends a six-digit code to prove the buyer controls an email address or mobile phone number, so this checkout can save a card, use saved details, or confirm a saved card. Only the session's own checkout credential can call it. A retry with the same Idempotency-Key returns the same code request without sending another email or text. See the [headless checkout guide](https://developers.withflintpay.com/docs/guides/headless-checkout) for limits, sandbox codes, SMS copy, and what each answer reveals. To link guest purchases, use POST /v1/customer-verifications.

`POST /v1/checkout-sessions/{checkout_session_id}/customer-verifications`

Signature: `createCustomerVerification(CheckoutSessionsCreateCustomerVerificationInput|array $input, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `checkout_session_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [CreateCheckoutSessionCustomerVerificationRequestInput](../models/CreateCheckoutSessionCustomerVerificationRequestInput.md#createcheckoutsessioncustomerverificationrequestinput) | A checkout verification request selected by purpose. |

Body model: [CreateCheckoutSessionCustomerVerificationRequestInput](../models/CreateCheckoutSessionCustomerVerificationRequestInput.md#createcheckoutsessioncustomerverificationrequestinput).

#### checkoutSessions.createCustomerVerification body oneOf variant 1

The buyer confirms their email before funding a gift card purchase. Flint emails a code without saving a payment method.

Body model: [CreateCheckoutSessionGiftCardPurchaseVerificationRequestInput](../models/CreateCheckoutSessionGiftCardPurchaseVerificationRequestInput.md#createcheckoutsessiongiftcardpurchaseverificationrequestinput).

#### checkoutSessions.createCustomerVerification body oneOf variant 1 fields

Field definitions: [shared fields](../models/CreateCheckoutSessionGiftCardPurchaseVerificationRequestInput.md#createcheckoutsessiongiftcardpurchaseverificationrequestinput).

#### checkoutSessions.createCustomerVerification body oneOf variant 2

The buyer asked to save the card they are paying with. Flint emails a code to any valid address while the session is open and save_payment_method_requires_verification is true.

Body model: [CreateCheckoutSessionSavePaymentMethodVerificationRequestInput](../models/CreateCheckoutSessionSavePaymentMethodVerificationRequestInput.md#createcheckoutsessionsavepaymentmethodverificationrequestinput).

#### checkoutSessions.createCustomerVerification body oneOf variant 2 fields

Field definitions: [shared fields](../models/CreateCheckoutSessionSavePaymentMethodVerificationRequestInput.md#createcheckoutsessionsavepaymentmethodverificationrequestinput).

#### checkoutSessions.createCustomerVerification body oneOf variant 3

The buyer asked to use details saved at this merchant. By auto, the default, Flint texts the number saved with the email's details, or emails a code when they have cards saved by email and no number; otherwise it sends nothing and returns CUSTOMER_VERIFICATION_NOT_SENT. The response's channel says which. By email, Flint sends a code only when the email has saved details and an active card saved by email or with a number; the response is the same either way. By sms, Flint texts the saved number or returns CUSTOMER_VERIFICATION_TEXT_UNAVAILABLE. Auto and sms reveal whether the email has saved details; sms also reveals the number's last two digits. Always offer email alongside sms. A texted code opens only cards saved with that number; an emailed code opens only cards saved by email.

Body model: [CreateCheckoutSessionUseSavedPaymentMethodsVerificationRequestInput](../models/CreateCheckoutSessionUseSavedPaymentMethodsVerificationRequestInput.md#createcheckoutsessionusesavedpaymentmethodsverificationrequestinput).

#### checkoutSessions.createCustomerVerification body oneOf variant 3 fields

Field definitions: [shared fields](../models/CreateCheckoutSessionUseSavedPaymentMethodsVerificationRequestInput.md#createcheckoutsessionusesavedpaymentmethodsverificationrequestinput).

#### checkoutSessions.createCustomerVerification body oneOf variant 4

After a payment that sent save_payment_method_phone, the buyer confirms the card it saved. Channel sms texts the number given with the payment; channel email emails the customer's email only when it matches the payment's email, otherwise returning 409. The response masks the email. Send no email. Available on the paid session, or an open session whose payment is approved for later capture, while payment_method_save.status is pending. A texted code saves the card with the number when the payment created the customer, the buyer confirmed their email in this checkout, or the number already opens their saved details; otherwise payment_method_save.email_confirmation_required becomes true and an emailed code finishes the save. An emailed code alone saves the card by email.

Body model: [CreateCheckoutSessionConfirmSavedPaymentMethodVerificationRequestInput](../models/CreateCheckoutSessionConfirmSavedPaymentMethodVerificationRequestInput.md#createcheckoutsessionconfirmsavedpaymentmethodverificationrequestinput).

#### checkoutSessions.createCustomerVerification body oneOf variant 4 fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `channel` | Required | string | Values: `"email"`, `"sms"`. |
| `purpose` | Required | string | Values: `"confirm_saved_payment_method"`. |

#### Response

Returned payload: [CheckoutSessionCustomerVerification](../models/CheckoutSessionCustomerVerificationInput.md#checkoutsessioncustomerverificationinput).

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
| 403 | AuthenticationError | authentication |
| 404 | NotFoundError | not_found |
| 409 | ConflictError | conflict |
| 410 | ApiError | api |
| 413 | ApiError | api |
| 415 | ApiError | api |
| 429 | RateLimitError | rate_limit |
| 500 | ServerError | server |
| 503 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `createCustomerVerificationWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic — [policy 2](../RUNTIME.md#idempotency).

Authentication modes: `checkout`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->checkoutSessions->createCustomerVerification([
  'checkout_session_id' => 'example',
  'body' => (object) [
    'purpose' => 'gift_card_purchase',
    'email' => 'example@example.invalid',
  ],
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/checkoutSessions-createCustomerVerification.php)

### checkoutSessions.createDeliveryQuote

Creates an exact checkout-bound delivery quote without holding inventory.

`POST /v1/checkout-sessions/{checkout_session_id}/delivery-quotes`

Signature: `createDeliveryQuote(string|Model $checkout_session_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `checkout_session_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [CreateCheckoutDeliveryQuoteRequestInput](../models/CreateCheckoutDeliveryQuoteRequestInput.md#createcheckoutdeliveryquoterequestinput) | The request body for: Create delivery quote. |

Body model: [CreateCheckoutDeliveryQuoteRequestInput](../models/CreateCheckoutDeliveryQuoteRequestInput.md#createcheckoutdeliveryquoterequestinput).

#### checkoutSessions.createDeliveryQuote body fields

Field definitions: [shared fields](../models/CreateCheckoutDeliveryQuoteRequestInput.md#createcheckoutdeliveryquoterequestinput). Models: [DeliveryBuyerLocationRequestInput](../models/DeliveryBuyerLocationRequestInput.md#deliverybuyerlocationrequestinput), [DeliveryAddressRequestInput](../models/DeliveryAddressRequestInput.md#deliveryaddressrequestinput), [DeliveryInventoryAssignmentRequestInput](../models/DeliveryInventoryAssignmentRequestInput.md#deliveryinventoryassignmentrequestinput), [CallerSuppliedDeliveryMethodResultRequestInput](../models/CallerSuppliedDeliveryMethodResultRequestInput.md#callersupplieddeliverymethodresultrequestinput).

#### Response

Returned payload: [DeliveryQuote](../models/DeliveryQuote.md#deliveryquote).

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
| 403 | AuthenticationError | authentication |
| 404 | NotFoundError | not_found |
| 409 | ConflictError | conflict |
| 410 | ApiError | api |
| 413 | ApiError | api |
| 415 | ApiError | api |
| 429 | RateLimitError | rate_limit |
| 500 | ServerError | server |
| 503 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `createDeliveryQuoteWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic — [policy 2](../RUNTIME.md#idempotency).

Authentication modes: `merchant`, `checkout`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->checkoutSessions->createDeliveryQuote('example', [
  'expected_delivery_selection_id' => 'example',
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/checkoutSessions-createDeliveryQuote.php)

### checkoutSessions.createDeliverySelection

Atomically selects one option per choice group, replaces inventory holds, and recalculates checkout economics.

`POST /v1/checkout-sessions/{checkout_session_id}/delivery-selections`

Signature: `createDeliverySelection(string|Model $checkout_session_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `checkout_session_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [CreateDeliverySelectionRequestInput](../models/CreateDeliverySelectionRequestInput.md#createdeliveryselectionrequestinput) | The request body for: Create delivery selection. |

Body model: [CreateDeliverySelectionRequestInput](../models/CreateDeliverySelectionRequestInput.md#createdeliveryselectionrequestinput).

#### checkoutSessions.createDeliverySelection body fields

Field definitions: [shared fields](../models/CreateDeliverySelectionRequestInput.md#createdeliveryselectionrequestinput). Models: [CreateDeliverySelectionChoiceRequestInput](../models/CreateDeliverySelectionChoiceRequestInput.md#createdeliveryselectionchoicerequestinput), [AddressRequestInput](../models/AddressRequestInput.md#addressrequestinput), [DeliverySelectionRecipientRequestInput](../models/DeliverySelectionRecipientRequestInput.md#deliveryselectionrecipientrequestinput).

#### Response

Returned payload: [DeliverySelectionResult](../models/DeliverySelectionResult.md#deliveryselectionresult).

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
| 403 | AuthenticationError | authentication |
| 404 | NotFoundError | not_found |
| 409 | ConflictError | conflict |
| 410 | ApiError | api |
| 413 | ApiError | api |
| 415 | ApiError | api |
| 429 | RateLimitError | rate_limit |
| 500 | ServerError | server |
| 502 | ServerError | server |
| 503 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `createDeliverySelectionWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic — [policy 2](../RUNTIME.md#idempotency).

Authentication modes: `merchant`, `checkout`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->checkoutSessions->createDeliverySelection('example', [
  'choices' => [],
  'delivery_quote_id' => 'example',
  'expected_delivery_selection_id' => 'example',
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/checkoutSessions-createDeliverySelection.php)

### checkoutSessions.deleteCurrentDeliverySelection

Atomically clears a provisional selection, releases inventory, removes its charges, and recalculates order economics.

`DELETE /v1/checkout-sessions/{checkout_session_id}/delivery-selections/current`

Signature: `deleteCurrentDeliverySelection(string|Model $checkout_session_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `checkout_session_id` | Required | string |  |
| `expected_delivery_selection_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |

#### Response

Returned payload: [DeliverySelectionResult](../models/DeliverySelectionResult.md#deliveryselectionresult).

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
| 403 | AuthenticationError | authentication |
| 404 | NotFoundError | not_found |
| 409 | ConflictError | conflict |
| 410 | ApiError | api |
| 429 | RateLimitError | rate_limit |
| 500 | ServerError | server |
| 503 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `deleteCurrentDeliverySelectionWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic — [policy 2](../RUNTIME.md#idempotency).

Authentication modes: `merchant`, `checkout`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->checkoutSessions->deleteCurrentDeliverySelection('example', [
  'expected_delivery_selection_id' => 'example',
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/checkoutSessions-deleteCurrentDeliverySelection.php)

### checkoutSessions.get

Returns a single checkout session by ID.

`GET /v1/checkout-sessions/{checkout_session_id}`

Signature: `get(string|Model $checkout_session_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `checkout_session_id` | Required | string |  |
| `expand` | Optional | Array of string | Items values: `"customer"`, `"invoice"`, `"order"`, `"payment_intents"`, `"payment_link"`. |

#### Response

Returned payload: [CheckoutSession](../models/CheckoutSession.md#checkoutsession).

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
| 403 | AuthenticationError | authentication |
| 404 | NotFoundError | not_found |
| 409 | ConflictError | conflict |
| 410 | ApiError | api |
| 429 | RateLimitError | rate_limit |
| 500 | ServerError | server |
| 503 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `getWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`, `checkout`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
$result = $client->checkoutSessions->get('example', [], new RequestOptions());
```

[Complete runnable example](../examples/checkoutSessions-get.php)

### checkoutSessions.getCurrentDeliverySelection

Returns the provisional selection or the order-level committed selection effective for this checkout.

`GET /v1/checkout-sessions/{checkout_session_id}/delivery-selections/current`

Signature: `getCurrentDeliverySelection(string|Model $checkout_session_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `checkout_session_id` | Required | string |  |

#### Response

Returned payload: [EffectiveDeliverySelectionResource](../models/EffectiveDeliverySelectionResource.md#effectivedeliveryselectionresource).

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
| 403 | AuthenticationError | authentication |
| 404 | NotFoundError | not_found |
| 409 | ConflictError | conflict |
| 410 | ApiError | api |
| 429 | RateLimitError | rate_limit |
| 500 | ServerError | server |
| 503 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `getCurrentDeliverySelectionWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`, `checkout`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
$result = $client->checkoutSessions->getCurrentDeliverySelection('example', [], new RequestOptions());
```

[Complete runnable example](../examples/checkoutSessions-getCurrentDeliverySelection.php)

### checkoutSessions.getDeliveryQuote

Returns a delivery quote for this checkout session. Checkout credentials receive the buyer view.

`GET /v1/checkout-sessions/{checkout_session_id}/delivery-quotes/{delivery_quote_id}`

Signature:

```text
getDeliveryQuote(string|
  Model $checkout_session_id,
 string|
  Model $delivery_quote_id,
 array|
  Model|
  null $params = null,
 ?RequestOptions $options = null)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `checkout_session_id` | Required | string |  |
| `delivery_quote_id` | Required | string |  |

#### Response

Returned payload: [DeliveryQuote](../models/DeliveryQuote.md#deliveryquote).

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
| 403 | AuthenticationError | authentication |
| 404 | NotFoundError | not_found |
| 409 | ConflictError | conflict |
| 410 | ApiError | api |
| 429 | RateLimitError | rate_limit |
| 500 | ServerError | server |
| 503 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `getDeliveryQuoteWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`, `checkout`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
$result = $client->checkoutSessions->getDeliveryQuote('example', 'example', [], new RequestOptions());
```

[Complete runnable example](../examples/checkoutSessions-getDeliveryQuote.php)

### checkoutSessions.getDeliverySelectionHistory

Returns one checkout selection with its economics, lifecycle events, and retention-aware private data. While the selection is selected, the tax on its delivery charges follows the order's tax.

`GET /v1/checkout-sessions/{checkout_session_id}/delivery-selections/{delivery_selection_id}`

Signature:

```text
getDeliverySelectionHistory(string|
  Model $checkout_session_id,
 string|
  Model $delivery_selection_id,
 array|
  Model|
  null $params = null,
 ?RequestOptions $options = null)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `checkout_session_id` | Required | string |  |
| `delivery_selection_id` | Required | string |  |

#### Response

Returned payload: [DeliverySelection](../models/DeliverySelection.md#deliveryselection).

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
| 403 | AuthenticationError | authentication |
| 404 | NotFoundError | not_found |
| 409 | ConflictError | conflict |
| 410 | ApiError | api |
| 429 | RateLimitError | rate_limit |
| 500 | ServerError | server |
| 503 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `getDeliverySelectionHistoryWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
$result = $client->checkoutSessions->getDeliverySelectionHistory('example', 'example', [], new RequestOptions());
```

[Complete runnable example](../examples/checkoutSessions-getDeliverySelectionHistory.php)

### checkoutSessions.list

Returns a paginated list of checkout sessions for the authenticated merchant.

`GET /v1/checkout-sessions`

Signature: `list(array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string |  |
| `status` | Optional | Array of string | minItems: `1`. Items values: `"open"`, `"paid"`, `"partially_paid"`, `"expired"`, `"closed"`, `"invalidated"`. |
| `order_id` | Optional | string |  |
| `payment_link_id` | Optional | string |  |
| `customer_id` | Optional | string |  |
| `subscription_plan_id` | Optional | string | minLength: `1`. pattern: `^plan_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `invoice_id` | Optional | string | minLength: `1`. pattern: `^inv_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `surface` | Optional | Array of string | minItems: `1`. Items values: `"hosted"`, `"embedded"`. |
| `type` | Optional | Array of string | minItems: `1`. Items values: `"order"`, `"quick_pay"`, `"subscription_plan"`, `"invoice"`, `"payment_link"`. |
| `external_reference_id` | Optional | string | minLength: `1`. maxLength: `255`. |
| `query` | Optional | string |  |
| `sort_by` | Optional | string | Default: `"created_at"`. Values: `"created_at"`, `"updated_at"`. |
| `sort_direction` | Optional | string | Default: `"desc"`. Values: `"asc"`, `"desc"`. |
| `created_after` | Optional | string | Format: `date-time`. |
| `created_before` | Optional | string | Format: `date-time`. |
| `updated_after` | Optional | string | Format: `date-time`. |
| `updated_before` | Optional | string | Format: `date-time`. |
| `expires_after` | Optional | string | Format: `date-time`. |
| `expires_before` | Optional | string | Format: `date-time`. |
| `expand` | Optional | Array of string | Items values: `"customer"`, `"invoice"`, `"order"`, `"payment_link"`. |

#### Response

Returned payload: [CheckoutSessionsListResponse200](../models/CheckoutSessionsListResponse200.md#checkoutsessionslistresponse200).

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
| 403 | AuthenticationError | authentication |
| 410 | ApiError | api |
| 429 | RateLimitError | rate_limit |
| 500 | ServerError | server |
| 503 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `listWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

Pagination: `listItems`, `listPages`, `listPagesWithResponse`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```php
$result = $client->checkoutSessions->list([], new RequestOptions());
```

[Complete runnable example](../examples/checkoutSessions-list.php)

### checkoutSessions.update

Updates the mutable fields of a checkout session. A merchant credential can update metadata and external_reference_id, including after the session ends. Send external_reference_id as null to clear it, or metadata as null to clear all metadata. On a session with a subscription_plan_id, either credential can send subscription_terms with the buyer's billing interval and quantity while the session is open and no payment is in progress; a change reprices the signup order and releases the delivery selection. The session's own checkout credential can also send buyer_contact and timezone while the session is open. The buyer_contact field saves the email and phone the buyer entered; send a contact field as null to clear it. The timezone field records the buyer's IANA time zone, which Flint uses for times in the emails it sends the buyer. Saving the same values again changes nothing.

`PATCH /v1/checkout-sessions/{checkout_session_id}`

Signature: `update(string|Model $checkout_session_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `checkout_session_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [UpdateCheckoutSessionRequestInput](../models/UpdateCheckoutSessionRequestInput.md#updatecheckoutsessionrequestinput) | The request body for: Update checkout session. |

Body model: [UpdateCheckoutSessionRequestInput](../models/UpdateCheckoutSessionRequestInput.md#updatecheckoutsessionrequestinput).

#### checkoutSessions.update body fields

Field definitions: [shared fields](../models/UpdateCheckoutSessionRequestInput.md#updatecheckoutsessionrequestinput). Models: [CheckoutBuyerContactRequestInput](../models/CheckoutBuyerContactRequestInput.md#checkoutbuyercontactrequestinput), [CheckoutSubscriptionTermsRequestInput](../models/CheckoutSubscriptionTermsRequestInput.md#checkoutsubscriptiontermsrequestinput).

#### Response

Returned payload: [CheckoutSession](../models/CheckoutSession.md#checkoutsession).

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
| 403 | AuthenticationError | authentication |
| 404 | NotFoundError | not_found |
| 409 | ConflictError | conflict |
| 410 | ApiError | api |
| 413 | ApiError | api |
| 415 | ApiError | api |
| 429 | RateLimitError | rate_limit |
| 500 | ServerError | server |
| 502 | ServerError | server |
| 503 | ServerError | server |
| 504 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `updateWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic — [policy 2](../RUNTIME.md#idempotency).

Authentication modes: `merchant`, `checkout`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->checkoutSessions->update('example', [], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/checkoutSessions-update.php)

