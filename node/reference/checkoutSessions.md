[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# checkoutSessions

### checkoutSessions.close

Closes an open checkout session before it naturally expires.

`POST /v1/checkout-sessions/{checkout_session_id}/close`

Signature: `close(checkout_session_id: InputValue<string>, params?: CheckoutSessionsCloseParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `checkout_session_id` | Required | string | Flint checkout session ID. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `body` | Optional | [CloseCheckoutSessionRequestInput](../models/CloseCheckoutSessionRequest.md#closecheckoutsessionrequest) | The request body for: Close checkout session. |

Body model: [CloseCheckoutSessionRequestInput](../models/CloseCheckoutSessionRequest.md#closecheckoutsessionrequest).

#### checkoutSessions.close body fields

Field definitions: [shared fields](../models/CloseCheckoutSessionRequest.md#closecheckoutsessionrequest).

#### Response

Returned payload: [CheckoutSession](../models/CheckoutSession.md#checkoutsession).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 409 | ConflictError |
| 413 | ApiError |
| 415 | ApiError |
| 429 | RateLimitError |
| 500 | ServerError |
| 503 | ServerError |
| 504 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic, [At least 24 hours. A retry with the same key and request within that window returns the original result instead of repeating it; afterwards the key may run as a new request retention](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.checkoutSessions.close("cs_01KEZF7C004JRWFW43H037MQRN", undefined, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/checkoutSessions-close.mjs)

### checkoutSessions.confirmCustomerVerification

Checks the code the buyer typed. A right code makes the checkout act for the customer with that email, and creates the customer, with a customer.created event, when none exists. The checkout can then save the buyer's card with save_payment_method on POST /v1/orders/{order_id}/pay, and list and pay with that customer's saved cards. The order's customer does not change until the payment succeeds. Only the checkout_auth_token in the response acts for that customer. Send it as the Bearer credential from then on. Every other credential for the session, including earlier checkout_auth_token values and hosted checkout links, keeps working for the checkout and acts for no customer, so it lists no saved cards and pays with none. A buyer who opens the link on another device confirms an email there to use them, and from then on only that device's new credential acts for a customer. If the response is lost after the code was accepted, the credential you sent still works. Send the same code again with it while the code is valid, which counts as another try and returns a new credential for the same customer, or request a new code. A wrong, expired, or replaced code fails with `INVALID_REQUEST` and an `INVALID_VALUE` detail on `code`, and so does a used code once the checkout was confirmed again, any code after its 5th try, any code for an email past its limit on wrong tries, or a code whose email's customer changed its email or was deleted after the code was sent. If the checkout stops offering saved payment details before the code is confirmed, such as when the merchant turns them off, the request fails with `ACTION_NOT_ALLOWED` and reason `not_offered`. A credential that already acts for a customer fails with `ACTION_NOT_ALLOWED` and reason `already_applied`, and confirming never replaces a customer the merchant named. Once the customer whose email the buyer confirmed changes that email or is deleted, the checkout acts for no customer, and the buyer can confirm the customer's new email or another one. A checkout opened from a checkout reminder link acts for no customer the buyer confirmed earlier, so its buyer confirms an email again. A texted code for saved details binds the checkout the same way, but the new credential opens only the cards saved with that number: it lists and pays with no card saved by email, and reads no customer details. A texted code checks once, so after a lost answer request a new code. A code for purpose pay_to_new_address keeps the credential and its proof, omits checkout_auth_token, and refreshes the last confirmed code for 15 minutes. A code for purpose confirm_saved_payment_method keeps the session's credential, so the response omits checkout_auth_token and carries payment_method_save on the checkout session. A texted code saves the card with the number when the number already opens the customer's saved details or the customer has none yet; otherwise payment_method_save.email_confirmation_required turns true, and an emailed code finishes the save. An emailed code alone saves the card by email. After success, a retry with the same idempotency key and code returns the stored answer and credential to any credential of the session. After failure, a retry checks the code again and counts as another try.

`POST /v1/checkout-sessions/{checkout_session_id}/customer-verifications/{checkout_session_customer_verification_id}/confirm`

Signature:

```typescript
confirmCustomerVerification(checkout_session_id: InputValue<string>,
 checkout_session_customer_verification_id: InputValue<string>,
 params: CheckoutSessionsConfirmCustomerVerificationParams,
 options?: RequestOptions<"checkout">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `checkout_session_id` | Required | string | Flint checkout session ID. |
| `checkout_session_customer_verification_id` | Required | string | The checkout_session_customer_verification_id the code request returned. |
| `body` | Required | [ConfirmCheckoutSessionCustomerVerificationRequestInput](../models/ConfirmCheckoutSessionCustomerVerificationRequest.md#confirmcheckoutsessioncustomerverificationrequest) | The code the buyer typed. |

Body model: [ConfirmCheckoutSessionCustomerVerificationRequestInput](../models/ConfirmCheckoutSessionCustomerVerificationRequest.md#confirmcheckoutsessioncustomerverificationrequest).

#### checkoutSessions.confirmCustomerVerification body fields

Field definitions: [shared fields](../models/ConfirmCheckoutSessionCustomerVerificationRequest.md#confirmcheckoutsessioncustomerverificationrequest).

#### Response

Returned payload: [CheckoutSessionWithSecret](../models/CheckoutSessionWithSecret.md#checkoutsessionwithsecret).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 409 | ConflictError |
| 413 | ApiError |
| 415 | ApiError |
| 429 | RateLimitError |
| 500 | ServerError |
| 503 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic, [At least 24 hours. A retry with the same key and request within that window returns the original result instead of repeating it; afterwards the key may run as a new request retention](../RUNTIME.md#idempotency).

Authentication modes: `checkout`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.checkoutSessions.confirmCustomerVerification("cs_01ARZ3NDEKTSV4RRFFQ69G5FAV", "cscv_01ARZ3NDEKTSV4RRFFQ69G5FAV", {code: "123456"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/checkoutSessions-confirmCustomerVerification.mjs)

### checkoutSessions.create

Creates a hosted or headless checkout session for an order, quick-pay charge, subscription plan signup, a return resolution's buyer balance, or what is due now on an invoice. Subscription signup requires a buyer email before payment. Creation never implicitly replaces an open order session. To replace one, send order_id with replace_checkout_session_id set to the expected current session; the compare-and-swap replacement and collection-lock transfer commit atomically. Scopes depend on type: order, quick_pay and subscription_plan need checkouts.checkout_sessions.write, return_resolution needs commerce.returns.resolutions.write, and invoice needs commerce.invoices.write. A credential without the type's scope gets 403 INSUFFICIENT_SCOPE. A return_resolution or invoice session reuses the open session with the same surface and returns 200; a different surface replaces an idle session and is refused while a payment is in progress. Read the resolution or invoice with its own GET.

`POST /v1/checkout-sessions`

Signature: `create(params: CheckoutSessionsCreateParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `body` | Required | [CreateCheckoutSessionRequestInput](../models/CreateCheckoutSessionRequest.md#createcheckoutsessionrequest) | The request body for: Create checkout session. |

Body model: [CreateCheckoutSessionRequestInput](../models/CreateCheckoutSessionRequest.md#createcheckoutsessionrequest).

#### checkoutSessions.create body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_fields` | Optional | [CheckoutBuyerFieldsRequestInput](../models/CheckoutBuyerFields.md#checkoutbuyerfields) | What checkout asks the buyer for. Each field you leave out uses your checkout settings. |
| `custom_text` | Optional | [CheckoutCustomTextWriteConfigInput](../models/CheckoutCustomTextWriteConfigInput.md#checkoutcustomtextwriteconfiginput) | Custom text for this session's checkout: an order summary message and a shipping address label. Custom checkout text you supply when creating a checkout session: an order summary message and a shipping address label. |
| `customer_id` | Optional | string | Existing customer to link to the order Flint creates. Not allowed with type: order: the session uses the order's customer, so set customer_id on the order first. minLength: `1`. |
| `delivery_method_ids` | Optional | Array of string | Immutable delivery method assignment for this checkout, 1 to 25 unique IDs. Omit it to use settings.checkout.default_delivery_method_ids when the order has items to deliver; otherwise no methods are assigned. Empty arrays and null are rejected. minItems: `1`. maxItems: `25`. uniqueItems: `true`. Items: minLength: `1`. |
| `discounts` | Optional | Array of [CreateCheckoutSessionDiscountInput](../models/CreateCheckoutSessionDiscount.md#createcheckoutsessiondiscount) | Promotions to apply to the order Flint creates, using your account promotion settings. Only for quick_pay and subscription_plan. A ranking loss returns a promotion_declined warning; an unredeemable promotion fails the request. Read the result on order.discounts, or order.deferred_promotions for a trial. minItems: `1`. maxItems: `10`. |
| `expires_in_seconds` | Optional | integer | Seconds the session stays open, from 60 to 86,400. Omit it to use settings.checkout.default_expires_in_seconds, or 24 hours. Format: `int64`. minimum: `60`. maximum: `86400`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `inventory_reservation_ids` | Optional | Array of string | Merchant-created cart holds this session may adopt during delivery selection. Only with type: order and a merchant credential. At most 100 unique IDs; exceeding the cap returns INVALID_REQUEST with param inventory_reservation_ids. Immutable after creation. Buyer quotes credit still-eligible bound holds and buyer selections adopt matching units without supplying IDs. Merchant delivery requests that omit IDs also use this binding; explicit IDs, including an empty array, replace it for that request. First adopter wins when sessions share a hold. Unused units remain held until released or expired. Unknown or ineligible IDs at creation return 404. Invalidated or otherwise ended sessions cannot use the binding, and replacement sessions never inherit it. maxItems: `100`. uniqueItems: `true`. Items: minLength: `1`. |
| `invoice_id` | Optional | string | The open invoice whose balance due now this checkout collects. An open session for the invoice's current collection is reused and returned with 200. Required when type is invoice, and not allowed otherwise. minLength: `1`. |
| `invoice_schedule_entry_id` | Optional | string | Optional. The schedule entry to collect. Only the earliest entry that is due and still has an outstanding balance can be collected; omit it to collect that entry. Not allowed on an invoice without a schedule. Only with type invoice. minLength: `1`. |
| `legal` | Optional | [CheckoutLegalConfigRequestInput](../models/CheckoutLegalConfigRequestInput.md#checkoutlegalconfigrequestinput) | The terms and policy links this session shows the buyer, and whether the buyer must accept the terms. Legal settings you supply when creating a checkout session: whether buyers must accept terms, and links to the terms, refund policy, shipping policy, and contract. |
| `metadata` | Optional | [MetadataRequestInput](../models/MetadataRequestInput.md#metadatarequestinput) | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: `50`. Map values: minLength: `1`. maxLength: `4096`. |
| `order_id` | Optional | string | The order to collect. It must be open and not collected by an invoice or a return resolution. minLength: `1`. |
| `page_origin` | Optional | string | Origin of the page where you render this headless checkout, such as https://shop.example.com. Only this origin can show the checkout's gift card challenge and receive its result. It does not let the browser call the Flint API. Accepted only when surface is headless. Use HTTPS and a lowercase DNS hostname. Do not include a path, query, fragment, or default port. In test mode, localhost, names ending in .localhost, and 127.0.0.1 also work over HTTP or HTTPS. minLength: `1`. maxLength: `255`. |
| `payment_return_url` | Optional | string | Headless sessions only. Absolute HTTPS URL on your site where Flint sends the buyer after a redirect payment such as Affirm, whatever the outcome; read the session there to show the result. Required when the session offers affirm. It can't contain credentials, a query string, or a fragment. Test mode also accepts http loopback URLs. Up to 2,048 characters. Format: `uri`. minLength: `1`. maxLength: `2048`. |
| `payments` | Optional | [CheckoutPaymentConfigRequestInput](../models/CheckoutPaymentConfigRequestInput.md#checkoutpaymentconfigrequestinput) | Payment settings you supply when creating a checkout session: the enabled payment options and a note shown with payment. |
| `platform_fee` | Optional | [PlatformFeeRequestInput](../models/PlatformFeeRequest.md#platformfeerequest) | A platform fee your partner app charges on the payment the session collects, checked once against the order total when the session is created. Each payment the session creates carries its own fee, lowered to the cap for its amount. Only a partner app install token can send it; from any other credential it is INVALID_REQUEST with NOT_ALLOWED on platform_fee. A subscription_plan checkout session, or an order whose payment starts or renews a subscription, refuses it with INVALID_REQUEST and NOT_ALLOWED on platform_fee, because Flint's billing creates the renewals. amount_money must be above zero, in the payment's currency, at most the platform fee cap the merchant approved for this amount, and below the amount; otherwise INVALID_REQUEST with INVALID_VALUE on platform_fee.amount_money, with maximum_money when the cap or the amount bounds it. Without an approved cap in this currency it is ACTION_NOT_ALLOWED with reason platform_fee_consent_required. In live mode the partner app's platform_fees capability must be active; otherwise ACTION_NOT_ALLOWED with capability platform_fees and the reason the app's platform status gives. Test mode never checks the capability. Flint lowers the fee, or cancels it, when the cap or Flint's own fees leave less at confirm or capture, so the payment never fails because of it. Part of the request fingerprint. See Platform fees. A platform fee the partner app charges on the payment, beside Flint's fees. The installed merchant pays it, and Flint takes no share of it. |
| `prefill` | Optional | [CheckoutPrefillRequestInput](../models/CheckoutPrefillRequest.md#checkoutprefillrequest) | Contact details and addresses to fill in for the buyer, who can change them. For a customer with saved addresses, Flint fills in any address you leave out, and reads include it. With quick_pay or subscription_plan and automatic tax on, a prefilled address sets the order's tax location. Not changed by what the buyer types; for that, read buyer_contact. customer_prefill is what the checkout credential reads from the customer record. |
| `promotion_config` | Optional | [CheckoutPromotionConfigRequestInput](../models/CheckoutPromotionConfig.md#checkoutpromotionconfig) | Whether automatic promotions apply to this session and whether the buyer can enter promotion codes. Promotion settings for a checkout: whether automatic promotions apply and whether the buyer can apply promotion codes. |
| `quick_pay_item` | Optional | [CheckoutQuickPayItemRequestInput](../models/CheckoutQuickPayItemRequest.md#checkoutquickpayitemrequest) | The one named amount to collect. Flint creates the order from it. Required when `type` is `quick_pay`. A single custom item to charge on a checkout session, supplied as `quick_pay_item`: a name, an amount, and optional tax settings. |
| `redirects` | Optional | [CheckoutRedirectsRequestInput](../models/CheckoutRedirectsRequestInput.md#checkoutredirectsrequestinput) | Where hosted checkout sends the buyer. Not allowed when surface is headless; use payment_return_url. |
| `replace_checkout_session_id` | Optional | string | Expected checkout session for an atomic replacement. Allowed only with type: order. The named session must belong to the same merchant, environment, and order. Active payment work fails with `OPERATION_IN_PROGRESS`. minLength: `1`. |
| `return_resolution_id` | Optional | string | The return resolution whose buyer balance this checkout collects. Required when type is return_resolution, and not allowed otherwise. The resolution must have a buyer payment pending on its replacement order. An open session with the same surface is reused and returned with 200. minLength: `1`. |
| `return_url` | Optional | string | Where the checkout sends the buyer after paying, such as the invoice's or Return's page in the customer account. Limited to 2048 characters (Unicode code points) before trimming surrounding whitespace. It must be an HTTPS address of the merchant's customer account: /{merchant_id} on Flint's account host, the merchant's active custom account domain, or the host of customer_account.merchant_account_url when the merchant hosts the account. In test mode, any URL on localhost or a loopback IP address (such as 127.0.0.1 or [::1]) is also accepted, over HTTP or HTTPS and on any port. Anything else returns 400 INVALID_REQUEST with an INVALID_VALUE detail on return_url. An alias for redirects.success_url on hosted checkout or payment_return_url on headless checkout; keep them consistent when sending both. Only with type return_resolution or invoice. Format: `uri`. minLength: `1`. maxLength: `2048`. |
| `subscription_plan_id` | Optional | string | An active plan. minLength: `1`. |
| `subscription_terms` | Optional | [CheckoutSubscriptionTermsRequestInput](../models/CheckoutSubscriptionTermsRequest.md#checkoutsubscriptiontermsrequest) | Subscription terms you set on a checkout session: billing interval, interval count, and quantity. |
| `surface` | Optional | string | Defaults to hosted when omitted. Use headless for a merchant-owned presentation. Default: `"hosted"`. Values: `"hosted"`, `"headless"`. |
| `tax` | Optional | [CheckoutTaxConfigRequestInput](../models/CheckoutTaxConfigRequestInput.md#checkouttaxconfigrequestinput) | Automatic tax settings for the order Flint creates from quick_pay_item or subscription_plan_id. With order_id, set tax on the order; sending tax returns INVALID_REQUEST with a NOT_ALLOWED detail. Read order.tax for the resulting tax settings and status. Whether tax is collected for a checkout session or payment link. |
| `theme` | Optional | [ThemeConfigRequestInput](../models/ThemeConfigRequestInput.md#themeconfigrequestinput) | The title and colors for this session's checkout. Fields you omit come from your branding settings. Colors and title to apply to a checkout session's page. |
| `tip` | Optional | [CheckoutTipConfigRequestInput](../models/CheckoutTipConfigRequestInput.md#checkouttipconfigrequestinput) | Tip options for this session. Fields you omit follow your tipping settings. Tip settings for a checkout: whether tips are enabled, the percent or fixed amount options, the default tip, and custom tips. |
| `type` | Required | string | What the checkout collects payment for. order: an order you created; send order_id. quick_pay: one named amount; send quick_pay_item, and Flint creates the order. subscription_plan: a signup for an active plan; send subscription_plan_id, and Flint creates the order and, once the buyer pays, the subscription. return_resolution: the buyer's balance on a return resolution; send return_resolution_id. invoice: what is due now on an open invoice; send invoice_id. The order, quick_pay and subscription_plan types need checkouts.checkout_sessions.write; return_resolution needs commerce.returns.resolutions.write; invoice needs commerce.invoices.write. Values: `"order"`, `"quick_pay"`, `"subscription_plan"`, `"return_resolution"`, `"invoice"`. |

#### checkoutSessions.create with `type: "order"`

The `order` variant of `CreateCheckoutSessionRequest`.

Body model: [CreateCheckoutSessionOrderInput](../models/CreateCheckoutSessionOrder.md#createcheckoutsessionorder).

#### checkoutSessions.create with `type: "quick_pay"`

The `quick_pay` variant of `CreateCheckoutSessionRequest`.

Body model: [CreateCheckoutSessionQuickPayInput](../models/CreateCheckoutSessionQuickPay.md#createcheckoutsessionquickpay).

#### checkoutSessions.create with `type: "subscription_plan"`

The `subscription_plan` variant of `CreateCheckoutSessionRequest`.

Body model: [CreateCheckoutSessionSubscriptionPlanInput](../models/CreateCheckoutSessionSubscriptionPlan.md#createcheckoutsessionsubscriptionplan).

#### checkoutSessions.create with `type: "return_resolution"`

The `return_resolution` variant of `CreateCheckoutSessionRequest`.

Body model: [CreateCheckoutSessionReturnResolutionInput](../models/CreateCheckoutSessionReturnResolution.md#createcheckoutsessionreturnresolution).

#### checkoutSessions.create with `type: "invoice"`

The `invoice` variant of `CreateCheckoutSessionRequest`.

Body model: [CreateCheckoutSessionInvoiceInput](../models/CreateCheckoutSessionInvoice.md#createcheckoutsessioninvoice).

#### Response

Returned payload: [CheckoutSessionWithSecret](../models/CheckoutSessionWithSecret.md#checkoutsessionwithsecret) | [CheckoutSessionWithSecret](../models/CheckoutSessionWithSecret.md#checkoutsessionwithsecret).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 409 | ConflictError |
| 413 | ApiError |
| 415 | ApiError |
| 429 | RateLimitError |
| 500 | ServerError |
| 502 | ServerError |
| 503 | ServerError |
| 504 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic, [At least 24 hours. A retry with the same key and request within that window returns the original result instead of repeating it; afterwards the key may run as a new request retention](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.checkoutSessions.create({type: "order", order_id: "ord_01KEZF7C0054GQKJ142A8X367A"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/checkoutSessions-create.mjs)

### checkoutSessions.createCustomerVerification

Sends a six-digit code to prove the buyer controls an email address or mobile phone number, so this checkout can save a card, use saved details, or confirm a saved card. Only the session's own checkout credential can call it. A retry with the same idempotency key returns the same code request without sending another email or text. See the [headless checkout guide](https://developers.withflintpay.com/docs/guides/headless-checkout) for limits, sandbox codes, SMS copy, and what each answer reveals. To link guest purchases, use POST /v1/customer-verifications.

`POST /v1/checkout-sessions/{checkout_session_id}/customer-verifications`

Signature:

```typescript
createCustomerVerification(checkout_session_id: InputValue<string>,
 params: CheckoutSessionsCreateCustomerVerificationParams,
 options?: RequestOptions<"checkout">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `checkout_session_id` | Required | string | Flint checkout session ID. |
| `body` | Required | [CreateCheckoutSessionCustomerVerificationRequestInput](../models/CreateCheckoutSessionCustomerVerificationRequest.md#createcheckoutsessioncustomerverificationrequest) | A checkout verification request selected by purpose. |

Body model: [CreateCheckoutSessionCustomerVerificationRequestInput](../models/CreateCheckoutSessionCustomerVerificationRequest.md#createcheckoutsessioncustomerverificationrequest).

#### checkoutSessions.createCustomerVerification with `purpose: "gift_card_purchase"`

The buyer confirms their email before funding a gift card purchase. Flint emails a code without saving a payment method.

Body model: [CreateCheckoutSessionGiftCardPurchaseVerificationRequestInput](../models/CreateCheckoutSessionGiftCardPurchaseVerificationRequest.md#createcheckoutsessiongiftcardpurchaseverificationrequest).

#### checkoutSessions.createCustomerVerification with `purpose: "save_payment_method"`

By email, the default, Flint emails a code to any valid address while the session is open and save_payment_method_requires_verification is true. By auto, accepted only on a checkout whose order starts a subscription, Flint emails a code only when saving the renewal card would require email verification at payment. Otherwise, or past a recognition limit or when no code can be sent, it returns 409 ACTION_NOT_ALLOWED with reason not_offered. Auto reveals whether the email belongs to an existing customer of this merchant, as the payment refusal does. Requests count against the same limits as saved-details recognition; while a code for this purpose still works, a repeat returns it without sending another email. Confirming opens the same access as an explicit email request.

Body model: [CreateCheckoutSessionSavePaymentMethodVerificationRequestInput](../models/CreateCheckoutSessionSavePaymentMethodVerificationRequest.md#createcheckoutsessionsavepaymentmethodverificationrequest).

#### checkoutSessions.createCustomerVerification with `purpose: "use_saved_payment_methods"`

The buyer asked to use details saved at this merchant. By auto, the default, Flint texts the number saved with the email's details, or emails a code when they have cards saved by email and no number; otherwise it sends nothing and returns 409 ACTION_NOT_ALLOWED with reason not_offered. The response's channel says which. By email, Flint sends a code only when the email has saved details and an active card saved by email or with a number; the response is the same either way. By sms, Flint texts the saved number or returns 409 ACTION_NOT_ALLOWED with reason not_offered and param channel. Auto and sms reveal whether the email has saved details; sms also reveals the number's last two digits. Always offer email alongside sms. A texted code opens only cards saved with that number; an emailed code opens only cards saved by email. Send exactly one of email or remembered_buyer_token. A token request always uses recognition's caps and masks the email, and returns not_offered when nothing is sent. With explicit email, the token has the same send eligibility and email caps as a typed email, forces a resend, and also uses recognition's network caps. With auto it keeps recognition's routing and reuse.

Body model: [CreateCheckoutSessionUseSavedPaymentMethodsVerificationRequestInput](../models/CreateCheckoutSessionUseSavedPaymentMethodsVerificationRequest.md#createcheckoutsessionusesavedpaymentmethodsverificationrequest).

#### checkoutSessions.createCustomerVerification with `purpose: "pay_to_new_address"`

Request a fresh code when pay_to_new_address_requires_verification is true. Send no email, channel, or remembered_buyer_token. The code follows the paying credential's proof, except that a wallet opened by text steps up by email. Returns 409 ACTION_NOT_ALLOWED with reason not_offered when no saved card needs step-up. Confirmation keeps the credential and its proof and refreshes it for 15 minutes.

Body model: [CreateCheckoutSessionPayToNewAddressVerificationRequestInput](../models/CreateCheckoutSessionPayToNewAddressVerificationRequest.md#createcheckoutsessionpaytonewaddressverificationrequest).

#### checkoutSessions.createCustomerVerification with `purpose: "confirm_saved_payment_method"`

After a payment that saved a card pending, the buyer confirms it. Without a number, only channel email can finish the save. Channel sms texts the number given with the payment; channel email emails the customer's email only when it matches the payment's email, otherwise returning 409. The response masks the email. Send no email. Available on the paid session, or an open session whose payment is approved for later capture, while payment_method_save.status is pending. A texted code saves the card with the number when the payment created the customer, the buyer confirmed their email in this checkout, or the number already opens their saved details; otherwise payment_method_save.email_confirmation_required becomes true and an emailed code finishes the save. An emailed code alone saves the card by email.

Body model: [CreateCheckoutSessionConfirmSavedPaymentMethodVerificationRequestInput](../models/CreateCheckoutSessionConfirmSavedPaymentMethodVerificationRequest.md#createcheckoutsessionconfirmsavedpaymentmethodverificationrequest).

#### Response

Returned payload: [CheckoutSessionCustomerVerification](../models/CheckoutSessionCustomerVerification.md#checkoutsessioncustomerverification).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 409 | ConflictError |
| 413 | ApiError |
| 415 | ApiError |
| 429 | RateLimitError |
| 500 | ServerError |
| 503 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic, [At least 24 hours. A retry with the same key and request within that window returns the original result instead of repeating it; afterwards the key may run as a new request retention](../RUNTIME.md#idempotency).

Authentication modes: `checkout`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.checkoutSessions.createCustomerVerification("cs_01KEZF7C004JRWFW43H037MQRN", {email: "ada@example.com", purpose: "use_saved_payment_methods"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/checkoutSessions-createCustomerVerification.mjs)

### checkoutSessions.get

Returns a single checkout session by ID.

`GET /v1/checkout-sessions/{checkout_session_id}`

Signature:

```typescript
get(checkout_session_id: InputValue<string>,
 params?: CheckoutSessionsGetParams,
 options?: _SdkWithoutIdempotency<RequestOptions<"checkout" |
  "merchant">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `checkout_session_id` | Required | string | Flint checkout session ID. |
| `expand` | Optional | Array of string or string | Include related objects in the response. Supported expansions: customer, invoice, order, payment_intents, payment_link. Expansion requires checkouts.checkout_sessions.read plus the read scope for each expanded resource. Limits: at most 10 unique expand paths per request. To-many expansions are capped at 20 related objects per path. Items values: `"customer"`, `"invoice"`, `"order"`, `"payment_intents"`, `"payment_link"`. Values: `"customer"`, `"invoice"`, `"order"`, `"payment_intents"`, `"payment_link"`. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |

#### Response

Returned payload: [CheckoutSession](../models/CheckoutSession.md#checkoutsession).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 409 | ConflictError |
| 429 | RateLimitError |
| 500 | ServerError |
| 503 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`, `checkout`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
const result = await client.checkoutSessions.get("cs_01KEZF7C004JRWFW43H037MQRN", {}, {  });
```

[Complete runnable example](../examples/checkoutSessions-get.mjs)

### checkoutSessions.getCustomerVerification

Only the session's own checkout credential can read its verification code requests. Only requests whose code hasn't expired are readable until expires_at; an expired, unknown, malformed, deleted, or other session's request returns 404 RESOURCE_NOT_FOUND. Emails are masked on every read. A request reads the same whether or not a code was sent, confirmed, or replaced. Reads send nothing and change no code or attempt counters.

`GET /v1/checkout-sessions/{checkout_session_id}/customer-verifications/{checkout_session_customer_verification_id}`

Signature:

```typescript
getCustomerVerification(checkout_session_id: InputValue<string>,
 checkout_session_customer_verification_id: InputValue<string>,
 params?: CheckoutSessionsGetCustomerVerificationParams,
 options?: _SdkWithoutIdempotency<RequestOptions<"checkout">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `checkout_session_id` | Required | string | Flint checkout session ID. |
| `checkout_session_customer_verification_id` | Required | string | Flint checkout verification code request ID. |

#### Response

Returned payload: [CheckoutSessionCustomerVerification](../models/CheckoutSessionCustomerVerification.md#checkoutsessioncustomerverification).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 409 | ConflictError |
| 429 | RateLimitError |
| 500 | ServerError |
| 503 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `checkout`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
const result = await client.checkoutSessions.getCustomerVerification("cs_01KEZF7C004JRWFW43H037MQRN", "cscv_01KEZF7C00XW14W2FCVD5PH3Z9", {}, {  });
```

[Complete runnable example](../examples/checkoutSessions-getCustomerVerification.mjs)

### checkoutSessions.list

Returns a paginated list of checkout sessions for the authenticated merchant. Default order: created_at descending, then checkout_session_id descending.

`GET /v1/checkout-sessions`

Signature: `list(params?: CheckoutSessionsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque, signed next_page_token from the previous response, bound to the list and caller. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An altered, invalid, expired, or mismatched token returns a validation error. |
| `status` | Optional | Array of string or string | Filter by the status each session has when read. A session past expires_at lists as expired even before its stored status is updated, unless payment work keeps it open, in which case it lists as open. A page can hold fewer sessions than page_size. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"open"`, `"paid"`, `"partially_paid"`, `"expired"`, `"closed"`, `"invalidated"`. Values: `"open"`, `"paid"`, `"partially_paid"`, `"expired"`, `"closed"`, `"invalidated"`. |
| `order_id` | Optional | string | Filter by Flint order ID. pattern: `^ord_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `payment_link_id` | Optional | string | Filter by Flint payment link ID. pattern: `^pl_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `customer_id` | Optional | string | Filter by Flint customer ID. pattern: `^cus_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `subscription_plan_id` | Optional | string | Exact match on the Flint subscription plan ID. minLength: `1`. pattern: `^plan_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `invoice_id` | Optional | string | Exact match on the Flint invoice ID. minLength: `1`. pattern: `^inv_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `surface` | Optional | Array of string or string | Filter by checkout surface. Sessions created before surfaces existed are hosted. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"hosted"`, `"headless"`. Values: `"hosted"`, `"headless"`. |
| `type` | Optional | Array of string or string | Filter by checkout session type. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"order"`, `"quick_pay"`, `"subscription_plan"`, `"invoice"`, `"payment_link"`. Values: `"order"`, `"quick_pay"`, `"subscription_plan"`, `"invoice"`, `"payment_link"`. |
| `external_reference_id` | Optional | string | Exact-match filter on the caller-owned external reference ID. minLength: `1`. maxLength: `255`. |
| `query` | Optional | string | Search across checkout session ID, external reference ID, metadata, and payment notes. Text fields match any part of the value, and %, _ and \ are ordinary characters, not wildcards. IDs match from the start and need the type prefix, such as cs_01. |
| `sort_by` | Optional | string | Field to sort by. Defaults to created_at; ties are broken by checkout_session_id. Default: `"created_at"`. Values: `"created_at"`, `"updated_at"`. |
| `sort_direction` | Optional | string | Sort direction. Defaults to desc. Default: `"desc"`. Values: `"asc"`, `"desc"`. |
| `created_after` | Optional | string | Inclusive lower bound on created_at. Format: `date-time`. |
| `created_before` | Optional | string | Exclusive upper bound on created_at. Format: `date-time`. |
| `updated_after` | Optional | string | Inclusive lower bound on updated_at. Format: `date-time`. |
| `updated_before` | Optional | string | Exclusive upper bound on updated_at. Format: `date-time`. |
| `expires_after` | Optional | string | Inclusive lower bound on expires_at. Format: `date-time`. |
| `expires_before` | Optional | string | Exclusive upper bound on expires_at. Format: `date-time`. |
| `expand` | Optional | Array of string or string | Include related objects in the response. Supported expansions: customer, invoice, order, payment_link. Include the requested related resources using scoped batch reads for this page. Each relationship requires its existing target read scopes. Expansion changes the representation without changing pagination tokens. Limits: at most 10 unique expand paths per request. Items values: `"customer"`, `"invoice"`, `"order"`, `"payment_link"`. Values: `"customer"`, `"invoice"`, `"order"`, `"payment_link"`. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |

#### Response

Returned payload: [CheckoutSessionListResponse](../models/CheckoutSessionListResponse.md#checkoutsessionlistresponse).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 409 | ConflictError |
| 429 | RateLimitError |
| 500 | ServerError |
| 503 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

Pagination: `listItems`, `listPages`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```typescript
const result = await client.checkoutSessions.list({}, {  });
```

[Complete runnable example](../examples/checkoutSessions-list.mjs)

### checkoutSessions.listCustomerVerifications

Only the session's own checkout credential can read its verification code requests. Only requests whose code hasn't expired are readable until expires_at; an expired, unknown, malformed, deleted, or other session's request returns 404 RESOURCE_NOT_FOUND. Emails are masked on every read. A request reads the same whether or not a code was sent, confirmed, or replaced. Reads send nothing and change no code or attempt counters. Returns requests newest first by created_at descending, then checkout_session_customer_verification_id descending. Default order: created_at descending, then checkout_session_customer_verification_id descending.

`GET /v1/checkout-sessions/{checkout_session_id}/customer-verifications`

Signature:

```typescript
listCustomerVerifications(checkout_session_id: InputValue<string>,
 params?: CheckoutSessionsListCustomerVerificationsParams,
 options?: _SdkWithoutIdempotency<RequestOptions<"checkout">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `checkout_session_id` | Required | string | Flint checkout session ID. |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque, signed next_page_token from the previous response, bound to the list and caller. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An altered, invalid, expired, or mismatched token returns a validation error. |

#### Response

Returned payload: [CheckoutSessionCustomerVerificationListResponse](../models/CheckoutSessionCustomerVerificationListResponse.md#checkoutsessioncustomerverificationlistresponse).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 409 | ConflictError |
| 429 | RateLimitError |
| 500 | ServerError |
| 503 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `checkout`. [Credential setup](../RUNTIME.md#authentication).

Pagination: `listCustomerVerificationsItems`, `listCustomerVerificationsPages`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```typescript
const result = await client.checkoutSessions.listCustomerVerifications("cs_01KEZF7C004JRWFW43H037MQRN", {}, {  });
```

[Complete runnable example](../examples/checkoutSessions-listCustomerVerifications.mjs)

### checkoutSessions.update

Updates the mutable fields of a checkout session. A merchant credential can update metadata and external_reference_id, including after the session ends. Send external_reference_id as null to clear it, or metadata as null to clear all metadata. On a session with a subscription_plan_id, either credential can send subscription_terms with the buyer's billing interval and quantity while the session is open and no payment is in progress; a change reprices the signup order and releases the delivery selection. The session's own checkout credential can also send buyer_contact and timezone while the session is open. The buyer_contact field saves the email and phone the buyer entered; send a contact field as null to clear it. The timezone field records the buyer's IANA time zone, which Flint uses for times in the emails it sends the buyer. Saving the same values again changes nothing.

`PATCH /v1/checkout-sessions/{checkout_session_id}`

Signature: `update(checkout_session_id: InputValue<string>, params: CheckoutSessionsUpdateParams, options?: RequestOptions<"checkout" | "merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `checkout_session_id` | Required | string | Flint checkout session ID. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `body` | Required | [UpdateCheckoutSessionRequestInput](../models/UpdateCheckoutSessionRequest.md#updatecheckoutsessionrequest) | The request body for: Update checkout session. minProperties: `1`. |

Body model: [UpdateCheckoutSessionRequestInput](../models/UpdateCheckoutSessionRequest.md#updatecheckoutsessionrequest).

#### checkoutSessions.update body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_contact` | Optional | [CheckoutBuyerContactRequestInput](../models/CheckoutBuyerContactRequest.md#checkoutbuyercontactrequest) | Checkout session credentials only. Saves the contact the buyer entered while the session is open. A patch object: omitted fields are unchanged, and null clears a field. A merchant credential that sends buyer_contact fails with `INVALID_REQUEST` and a `NOT_ALLOWED` detail on `buyer_contact`. Buyer contact to supply with payment or save during checkout. Send at least one field. Values are stored exactly as sent, so an email with surrounding spaces is rejected. Checkout session updates keep omitted fields and accept null to clear a field. Payment requests do not accept null. minProperties: `1`. |
| `expected_version` | Optional | integer | Optional expected version of this resource. A stale value returns 409 VERSION_CONFLICT with the current version. Retrieve the resource and rebuild the request before retrying. Format: `uint64`. minimum: `1`. |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. Omit to leave unchanged; send null to clear. minLength: `1`. maxLength: `255`. |
| `metadata` | Optional | [MetadataPatchRequestInput](../models/MetadataPatchRequest.md#metadatapatchrequest) or null | Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. |
| `subscription_terms` | Optional | [CheckoutSubscriptionTermsRequestInput](../models/CheckoutSubscriptionTermsRequest.md#checkoutsubscriptiontermsrequest) | Subscription plan sessions only. The billing interval and quantity the buyer chose from subscription_terms.billing_interval_options and quantity_options, and the gift recipient when subscription_terms.gifts_enabled is true. Send billing_interval and billing_interval_count together. Accepted from your API key or the checkout credential. Subscription terms you set on a checkout session: billing interval, interval count, and quantity. |
| `timezone` | Optional | string | Checkout credentials only. A valid IANA timezone, such as America/Toronto, used for Flint-sent receipts. Omission keeps the previous observation; null is invalid. minLength: `1`. maxLength: `64`. |

#### Response

Returned payload: [CheckoutSession](../models/CheckoutSession.md#checkoutsession).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 409 | ConflictError |
| 413 | ApiError |
| 415 | ApiError |
| 429 | RateLimitError |
| 500 | ServerError |
| 502 | ServerError |
| 503 | ServerError |
| 504 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic, [At least 24 hours. A retry with the same key and request within that window returns the original result instead of repeating it; afterwards the key may run as a new request retention](../RUNTIME.md#idempotency).

Authentication modes: `merchant`, `checkout`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.checkoutSessions.update("cs_01ARZ3NDEKTSV4RRFFQ69G5FAV", {metadata: {campaign: "spring_launch"}}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/checkoutSessions-update.mjs)

