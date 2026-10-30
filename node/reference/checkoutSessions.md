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
| 410 | ApiError |
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

const result = await client.checkoutSessions.close("cs_01ARZ3NDEKTSV4RRFFQ69G5FAV", undefined, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/checkoutSessions-close.mjs)

### checkoutSessions.confirmCustomerVerification

Checks the code the buyer typed. A right code makes the checkout act for the customer with that email, and creates the customer, with a customer.created event, when none exists. The checkout can then save the buyer's card with save_payment_method on POST /v1/orders/{order_id}/pay, and list and pay with that customer's saved cards. The order's customer does not change until the payment succeeds. Only the checkout_auth_token in the response acts for that customer. Send it as Authorization: Bearer <checkout_auth_token> from then on. Every other credential for the session, including earlier checkout_auth_token values and hosted checkout links, keeps working for the checkout and acts for no customer, so it lists no saved cards and pays with none. A buyer who opens the link on another device confirms an email there to use them, and from then on only that device's new credential acts for a customer. If the response is lost after the code was accepted, the credential you sent still works. Send the same code again with it while the code is valid, which counts as another try and returns a new credential for the same customer, or request a new code. A wrong, expired, or replaced code returns CUSTOMER_VERIFICATION_CODE_INVALID, and so does a used code once the checkout was confirmed again, any code after its 5th try, any code for an email past its limit on wrong tries, or a code whose email's customer changed its email or was deleted after the code was sent. If the checkout stops offering saved payment details before the code is confirmed, such as when the merchant turns them off, the request returns 409 ACTION_NOT_ALLOWED with reason not_offered. A credential that already acts for a customer gets 409 ACTION_NOT_ALLOWED with reason already_applied, and confirming never replaces a customer the merchant named. Once the customer whose email the buyer confirmed changes that email or is deleted, the checkout acts for no customer, and the buyer can confirm the customer's new email or another one. A checkout opened from a checkout reminder link acts for no customer the buyer confirmed earlier, so its buyer confirms an email again. A texted code for saved details binds the checkout the same way, but the new credential opens only the cards saved with that number: it lists and pays with no card saved by email, and reads no customer details. A texted code checks once, so after a lost answer request a new code. A code for purpose confirm_saved_payment_method keeps the session's credential, so the response omits checkout_auth_token and carries payment_method_save on the checkout session. A texted code saves the card with the number when the number already opens the customer's saved details or the customer has none yet; otherwise payment_method_save.email_confirmation_required turns true, and an emailed code finishes the save. An emailed code alone saves the card by email. After success, a retry with the same Idempotency-Key and code returns the stored answer and credential to any credential of the session. After failure, a retry checks the code again and counts as another try.

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
| `body` | Required | [ConfirmCheckoutSessionCustomerVerificationRequestInput](../models/ConfirmCheckoutSessionCustomerVerificationRequestInput.md#confirmcheckoutsessioncustomerverificationrequestinput) | The code the buyer typed. |

Body model: [ConfirmCheckoutSessionCustomerVerificationRequestInput](../models/ConfirmCheckoutSessionCustomerVerificationRequestInput.md#confirmcheckoutsessioncustomerverificationrequestinput).

#### checkoutSessions.confirmCustomerVerification body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `code` | Required | string | The six-digit code from the email or the text. minLength: `6`. maxLength: `6`. pattern: `^[0-9]{6}$`. |

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
| 410 | ApiError |
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

Creates a hosted or embedded checkout session for an order, quick-pay charge, or subscription plan signup. Creation never implicitly replaces an open order session. To replace one, send order_id with replace_checkout_session_id set to the expected current session; the compare-and-swap replacement and collection-lock transfer commit atomically.

`POST /v1/checkout-sessions`

Signature: `create(params: CheckoutSessionsCreateParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `body` | Required | [CreateCheckoutSessionRequestInput](../models/CreateCheckoutSessionRequest.md#createcheckoutsessionrequest) | The request body for: Create checkout session. |

Body model: [CreateCheckoutSessionRequestInput](../models/CreateCheckoutSessionRequest.md#createcheckoutsessionrequest).

#### checkoutSessions.create body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_fields` | Optional | [CheckoutBuyerFieldsRequestInput](../models/CheckoutBuyerFields.md#checkoutbuyerfields) | What checkout asks the buyer for. Each field you leave out uses your checkout settings. |
| `custom_text` | Optional | [CheckoutCustomTextWriteConfigInput](../models/CheckoutCustomTextWriteConfigInput.md#checkoutcustomtextwriteconfiginput) | Custom checkout text you supply when creating a checkout session: an order summary message and a shipping address label. |
| `customer_id` | Optional | string | Existing customer to link to the order Flint creates. Not allowed with type: order: the session uses the order's customer, so set customer_id on the order first. minLength: `1`. |
| `delivery_method_ids` | Optional | Array of string | Immutable delivery method assignment for this checkout, 1 to 25 unique IDs. Omit it to use settings.checkout.default_delivery_method_ids when the order has items to deliver; otherwise no methods are assigned. Empty arrays and null are rejected. minItems: `1`. maxItems: `25`. uniqueItems: `true`. Items: minLength: `1`. |
| `expires_in_seconds` | Optional | integer | Seconds the session stays open, from 60 to 86,400. Omit it to use settings.checkout.default_expires_in_seconds, or 24 hours. Format: `int64`. minimum: `60`. maximum: `86400`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `legal` | Optional | [CheckoutLegalConfigRequestInput](../models/CheckoutLegalConfigRequestInput.md#checkoutlegalconfigrequestinput) | Legal settings you supply when creating a checkout session: whether buyers must accept terms, and links to the terms, refund policy, shipping policy, and contract. |
| `metadata` | Optional | [MetadataRequestInput](../models/MetadataRequestInput.md#metadatarequestinput) | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: `50`. Map values: minLength: `1`. maxLength: `4096`. |
| `order_id` | Optional | string | The order to collect. It must be open and not collected by an invoice or a return resolution. minLength: `1`. |
| `page_origin` | Optional | string | Origin of the page where you render this embedded checkout, such as https://shop.example.com. Only this origin can show the checkout's gift card challenge and receive its result. It does not let the browser call the Flint API. Accepted only when surface is embedded. Use HTTPS and a lowercase DNS hostname. Do not include a path, query, fragment, or default port. In test mode, localhost, names ending in .localhost, and 127.0.0.1 also work over HTTP or HTTPS. minLength: `1`. maxLength: `255`. |
| `payment_return_url` | Optional | string | Embedded sessions only. Absolute HTTPS URL on your site where Flint sends the buyer after a redirect payment such as Affirm, whatever the outcome; read the session there to show the result. Required when the session offers affirm. It can't contain credentials, a query string, or a fragment. Test mode also accepts http loopback URLs. Up to 2,048 characters. Format: `uri`. minLength: `1`. maxLength: `2048`. |
| `payments` | Optional | [CheckoutPaymentConfigRequestInput](../models/CheckoutPaymentConfigRequestInput.md#checkoutpaymentconfigrequestinput) | Payment settings you supply when creating a checkout session: the enabled payment options and a note shown with payment. |
| `prefill` | Optional | [CheckoutPrefillRequestInput](../models/CheckoutPrefillRequest.md#checkoutprefillrequest) | Contact details and addresses to fill in for the buyer, who can change them. For a customer with saved addresses, Flint fills in any address you leave out, and reads include it. With quick_pay or subscription_plan and automatic tax on, a prefilled address sets the order's tax location. Not changed by what the buyer types; for that, read buyer_contact. customer_prefill is what the checkout credential reads from the customer record. |
| `promotion_config` | Optional | [CheckoutPromotionConfigRequestInput](../models/CheckoutPromotionConfig.md#checkoutpromotionconfig) | Promotion settings for a checkout: whether automatic promotions apply and whether the buyer can apply promotion codes. |
| `quick_pay_item` | Optional | [CheckoutQuickPayItemRequestInput](../models/CheckoutQuickPayItemRequest.md#checkoutquickpayitemrequest) | A single custom item to charge on a checkout session, supplied as `quick_pay_item`: a name, an amount, and optional tax settings. |
| `redirects` | Optional | [CheckoutRedirectsRequestInput](../models/CheckoutRedirectsRequestInput.md#checkoutredirectsrequestinput) | Where hosted checkout sends the buyer. Not allowed when surface is embedded; use payment_return_url. |
| `replace_checkout_session_id` | Optional | string | Expected checkout session for an atomic replacement. Allowed only with type: order. The named session must belong to the same merchant, environment, and order. Active payment work returns PAYMENT_IN_PROGRESS. minLength: `1`. |
| `subscription_plan_id` | Optional | string | An active plan. minLength: `1`. |
| `subscription_terms` | Optional | [CheckoutSubscriptionTermsRequestInput](../models/CheckoutSubscriptionTermsRequest.md#checkoutsubscriptiontermsrequest) | Subscription terms you set on a checkout session: billing interval, interval count, and quantity. |
| `surface` | Optional | string | Defaults to hosted when omitted. Use embedded for a merchant-owned presentation. Default: `"hosted"`. Values: `"hosted"`, `"embedded"`. |
| `tax` | Optional | [CheckoutTaxConfigRequestInput](../models/CheckoutTaxConfig.md#checkouttaxconfig) | Automatic tax settings for the order Flint creates from quick_pay_item or subscription_plan_id. With order_id, set tax on the order; sending tax returns INVALID_REQUEST with a NOT_ALLOWED detail. Read order.tax for the resulting tax settings and status. Whether tax is collected for a checkout session or payment link. |
| `theme` | Optional | [ThemeConfigRequestInput](../models/ThemeConfigRequestInput.md#themeconfigrequestinput) | Colors and title to apply to a checkout session's page. |
| `tip` | Optional | [CheckoutTipConfigRequestInput](../models/CheckoutTipConfigRequestInput.md#checkouttipconfigrequestinput) | Tip settings for a checkout: whether tips are enabled, the percent or fixed amount options, the default tip, and custom tips. |
| `type` | Required | string | What the checkout collects payment for. order: an order you created; send order_id. quick_pay: one named amount; send quick_pay_item, and Flint creates the order. subscription_plan: a signup for an active plan; send subscription_plan_id, and Flint creates the order and, once the buyer pays, the subscription. Values: `"order"`, `"quick_pay"`, `"subscription_plan"`. |

#### checkoutSessions.create with `type: "order"`

The `order` variant of `CreateCheckoutSessionRequest`.

Body model: [CreateCheckoutSessionOrderInput](../models/CreateCheckoutSessionOrder.md#createcheckoutsessionorder).

#### checkoutSessions.create with `type: "quick_pay"`

The `quick_pay` variant of `CreateCheckoutSessionRequest`.

Body model: [CreateCheckoutSessionQuickPayInput](../models/CreateCheckoutSessionQuickPay.md#createcheckoutsessionquickpay).

#### checkoutSessions.create with `type: "subscription_plan"`

The `subscription_plan` variant of `CreateCheckoutSessionRequest`.

Body model: [CreateCheckoutSessionSubscriptionPlanInput](../models/CreateCheckoutSessionSubscriptionPlan.md#createcheckoutsessionsubscriptionplan).

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
| 410 | ApiError |
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

const result = await client.checkoutSessions.create({type: "order", order_id: "ord_01ARZ3NDEKTSV4RRFFQ69G5FAV"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/checkoutSessions-create.mjs)

### checkoutSessions.createCustomerVerification

Sends a six-digit code to prove the buyer controls an email address or mobile phone number, so this checkout can save a card, use saved details, or confirm a saved card. Only the session's own checkout credential can call it. A retry with the same Idempotency-Key returns the same code request without sending another email or text. See the [headless checkout guide](https://developers.withflintpay.com/docs/guides/headless-checkout) for limits, sandbox codes, SMS copy, and what each answer reveals. To link guest purchases, use POST /v1/customer-verifications.

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

The buyer asked to save the card they are paying with. Flint emails a code to any valid address while the session is open and save_payment_method_requires_verification is true.

Body model: [CreateCheckoutSessionSavePaymentMethodVerificationRequestInput](../models/CreateCheckoutSessionSavePaymentMethodVerificationRequest.md#createcheckoutsessionsavepaymentmethodverificationrequest).

#### checkoutSessions.createCustomerVerification with `purpose: "use_saved_payment_methods"`

The buyer asked to use details saved at this merchant. By auto, the default, Flint texts the number saved with the email's details, or emails a code when they have cards saved by email and no number; otherwise it sends nothing and returns 409 ACTION_NOT_ALLOWED with reason not_offered. The response's channel says which. By email, Flint sends a code only when the email has saved details and an active card saved by email or with a number; the response is the same either way. By sms, Flint texts the saved number or returns 409 ACTION_NOT_ALLOWED with reason not_offered and param channel. Auto and sms reveal whether the email has saved details; sms also reveals the number's last two digits. Always offer email alongside sms. A texted code opens only cards saved with that number; an emailed code opens only cards saved by email.

Body model: [CreateCheckoutSessionUseSavedPaymentMethodsVerificationRequestInput](../models/CreateCheckoutSessionUseSavedPaymentMethodsVerificationRequest.md#createcheckoutsessionusesavedpaymentmethodsverificationrequest).

#### checkoutSessions.createCustomerVerification with `purpose: "confirm_saved_payment_method"`

After a payment that sent save_payment_method_phone, the buyer confirms the card it saved. Channel sms texts the number given with the payment; channel email emails the customer's email only when it matches the payment's email, otherwise returning 409. The response masks the email. Send no email. Available on the paid session, or an open session whose payment is approved for later capture, while payment_method_save.status is pending. A texted code saves the card with the number when the payment created the customer, the buyer confirmed their email in this checkout, or the number already opens their saved details; otherwise payment_method_save.email_confirmation_required becomes true and an emailed code finishes the save. An emailed code alone saves the card by email.

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
| 410 | ApiError |
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

const result = await client.checkoutSessions.createCustomerVerification("cs_01ARZ3NDEKTSV4RRFFQ69G5FAV", {email: "ada@example.com", purpose: "use_saved_payment_methods"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/checkoutSessions-createCustomerVerification.mjs)

### checkoutSessions.createDeliveryQuote

Creates an exact checkout-bound delivery quote without holding inventory.

`POST /v1/checkout-sessions/{checkout_session_id}/delivery-quotes`

Signature:

```typescript
createDeliveryQuote(checkout_session_id: InputValue<string>,
 params: CheckoutSessionsCreateDeliveryQuoteParams,
 options?: RequestOptions<"checkout" |
  "merchant">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `checkout_session_id` | Required | string | Flint checkout session ID. |
| `body` | Required | [CreateCheckoutDeliveryQuoteRequestInput](../models/CreateCheckoutDeliveryQuoteRequest.md#createcheckoutdeliveryquoterequest) | The request body for: Create delivery quote. |

Body model: [CreateCheckoutDeliveryQuoteRequestInput](../models/CreateCheckoutDeliveryQuoteRequest.md#createcheckoutdeliveryquoterequest).

#### checkoutSessions.createDeliveryQuote body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `basis_delivery_quote_id` | Optional | string | minLength: `1`. |
| `buyer_location` | Optional | [DeliveryBuyerLocationRequestInput](../models/DeliveryBuyerLocationRequest.md#deliverybuyerlocationrequest) | The buyer's location for pickup or local delivery, supplied as an address or a coordinate, chosen by `type`. |
| `destination_address` | Optional | [DeliveryAddressRequestInput](../models/DeliveryAddressRequest.md#deliveryaddressrequest) | Partial is fine when quoting: send what the buyer has entered, at least country. A destination_address sent with a selection must be complete; a selection that omits it uses the quote's destination, which may be partial. A partial address for delivery quotes, previews, and buyer locations. Country is required when any member is present. |
| `expected_delivery_selection_id` | Optional | string or null | Optional assertion on CheckoutSession.delivery.delivery_selection_id. Omit to make no assertion, send null to assert that no selection exists, or send an ID to assert that it is current. minLength: `1`. |
| `inventory_assignments` | Optional | Array of [DeliveryInventoryAssignmentRequestInput](../models/DeliveryInventoryAssignmentRequest.md#deliveryinventoryassignmentrequest) | maxItems: `1000`. Items: Assigns a quantity of an inventory item at a location to a demand when creating a delivery quote. |
| `method_results` | Optional | Array of [CallerSuppliedDeliveryMethodResultRequestInput](../models/CallerSuppliedDeliveryMethodResultRequest.md#callersupplieddeliverymethodresultrequest) | Items: The rate result you supply for one delivery method and choice group when creating a delivery quote with caller-supplied pricing. |
| `pickup_location_id` | Optional | string | minLength: `1`. |
| `tier_key` | Optional | integer | Caller-defined nonnegative lookup key used by methods whose tiered pricing basis is caller.tier_key. Merchant authentication is required. Format: `int64`. minimum: `0`. |

#### Response

Returned payload: [DeliveryQuote](../models/DeliveryQuote.md#deliveryquote).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 409 | ConflictError |
| 410 | ApiError |
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

Authentication modes: `merchant`, `checkout`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.checkoutSessions.createDeliveryQuote("cs_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/checkoutSessions-createDeliveryQuote.mjs)

### checkoutSessions.createDeliverySelection

Atomically selects one option per choice group, replaces inventory holds, and recalculates checkout economics.

`POST /v1/checkout-sessions/{checkout_session_id}/delivery-selections`

Signature:

```typescript
createDeliverySelection(checkout_session_id: InputValue<string>,
 params: CheckoutSessionsCreateDeliverySelectionParams,
 options?: RequestOptions<"checkout" |
  "merchant">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `checkout_session_id` | Required | string | Flint checkout session ID. |
| `body` | Required | [CreateDeliverySelectionRequestInput](../models/CreateDeliverySelectionRequest.md#createdeliveryselectionrequest) | The request body for: Create delivery selection. |

Body model: [CreateDeliverySelectionRequestInput](../models/CreateDeliverySelectionRequest.md#createdeliveryselectionrequest).

#### checkoutSessions.createDeliverySelection body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `choices` | Required | Array of [CreateDeliverySelectionChoiceRequestInput](../models/CreateDeliverySelectionChoiceRequest.md#createdeliveryselectionchoicerequest) | Items: The delivery option to select for one choice group when creating a delivery selection, with optional delivery instructions. |
| `delivery_quote_id` | Required | string | minLength: `1`. |
| `destination_address` | Optional | [AddressRequestInput](../models/AddressRequest.md#addressrequest) | Partial is fine when quoting: send what the buyer has entered, at least country. A destination_address sent with a selection must be complete; a selection that omits it uses the quote's destination, which may be partial. A complete postal address. State and postal_code are required for US addresses and optional for other countries. Send null or omit line2, state, and postal_code when the address has none. |
| `expected_delivery_selection_id` | Optional | string or null | Optional assertion on CheckoutSession.delivery.delivery_selection_id. Omit to make no assertion, send null to assert that no selection exists, or send an ID to assert that it is current. minLength: `1`. |
| `recipient` | Optional | [DeliverySelectionRecipientRequestInput](../models/DeliverySelectionRecipientRequest.md#deliveryselectionrecipientrequest) | Recipient details you supply with a delivery selection or subscription delivery: optional `name`, `email`, and `phone`. |

#### Response

Returned payload: [DeliverySelectionResult](../models/DeliverySelectionResult.md#deliveryselectionresult).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 409 | ConflictError |
| 410 | ApiError |
| 413 | ApiError |
| 415 | ApiError |
| 429 | RateLimitError |
| 500 | ServerError |
| 502 | ServerError |
| 503 | ServerError |

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

const result = await client.checkoutSessions.createDeliverySelection("cs_01ARZ3NDEKTSV4RRFFQ69G5FAV", {choices: [{delivery_choice_group_id: "dcgrp_01K1P6G4M7H2N8Q9R3S5T6V7WX", delivery_option_id: "dopt_01K1P6G4M7H2N8Q9R3S5T6V7WX"}], delivery_quote_id: "dqt_01K1P6G4M7H2N8Q9R3S5T6V7WX", expected_delivery_selection_id: null}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/checkoutSessions-createDeliverySelection.mjs)

### checkoutSessions.deleteCurrentDeliverySelection

Atomically clears a provisional selection, releases inventory, removes its charges, and recalculates order economics.

`DELETE /v1/checkout-sessions/{checkout_session_id}/delivery-selections/current`

Signature:

```typescript
deleteCurrentDeliverySelection(checkout_session_id: InputValue<string>,
 params?: CheckoutSessionsDeleteCurrentDeliverySelectionParams,
 options?: RequestOptions<"checkout" |
  "merchant">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `checkout_session_id` | Required | string | Flint checkout session ID. |
| `expected_delivery_selection_id` | Optional | string | Optional assertion on CheckoutSession.delivery.delivery_selection_id. Omit to clear whichever selection is current. |

#### Response

Returned payload: [DeliverySelectionResult](../models/DeliverySelectionResult.md#deliveryselectionresult).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 409 | ConflictError |
| 410 | ApiError |
| 429 | RateLimitError |
| 500 | ServerError |
| 503 | ServerError |

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

const result = await client.checkoutSessions.deleteCurrentDeliverySelection("cs_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/checkoutSessions-deleteCurrentDeliverySelection.mjs)

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
| `expand` | Optional | Array of string or string | Supported expansions: customer, invoice, order, payment_intents, payment_link. Expansion requires checkouts.checkout_sessions.read plus the read scope for each expanded resource. Limits: at most 10 unique expand paths per request. To-many expansions are capped at 20 related objects per path. Repeat expand, for example expand=customer&expand=invoice, or pass one comma-separated value. Items values: `"customer"`, `"invoice"`, `"order"`, `"payment_intents"`, `"payment_link"`. Values: `"customer"`, `"invoice"`, `"order"`, `"payment_intents"`, `"payment_link"`. |

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
| 410 | ApiError |
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
const result = await client.checkoutSessions.get("cs_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, {  });
```

[Complete runnable example](../examples/checkoutSessions-get.mjs)

### checkoutSessions.getCurrentDeliverySelection

Returns the provisional selection or the order-level committed selection effective for this checkout.

`GET /v1/checkout-sessions/{checkout_session_id}/delivery-selections/current`

Signature:

```typescript
getCurrentDeliverySelection(checkout_session_id: InputValue<string>,
 params?: CheckoutSessionsGetCurrentDeliverySelectionParams,
 options?: _SdkWithoutIdempotency<RequestOptions<"checkout" |
  "merchant">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `checkout_session_id` | Required | string | Flint checkout session ID. |

#### Response

Returned payload: [EffectiveDeliverySelectionResource](../models/EffectiveDeliverySelectionResource.md#effectivedeliveryselectionresource).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 409 | ConflictError |
| 410 | ApiError |
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
const result = await client.checkoutSessions.getCurrentDeliverySelection("cs_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, {  });
```

[Complete runnable example](../examples/checkoutSessions-getCurrentDeliverySelection.mjs)

### checkoutSessions.getDeliveryQuote

Returns a delivery quote for this checkout session. Checkout credentials receive the buyer view.

`GET /v1/checkout-sessions/{checkout_session_id}/delivery-quotes/{delivery_quote_id}`

Signature:

```typescript
getDeliveryQuote(checkout_session_id: InputValue<string>,
 delivery_quote_id: InputValue<string>,
 params?: CheckoutSessionsGetDeliveryQuoteParams,
 options?: _SdkWithoutIdempotency<RequestOptions<"checkout" |
  "merchant">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `checkout_session_id` | Required | string | Flint checkout session ID. |
| `delivery_quote_id` | Required | string | Flint delivery quote ID. |

#### Response

Returned payload: [DeliveryQuote](../models/DeliveryQuote.md#deliveryquote).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 409 | ConflictError |
| 410 | ApiError |
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
const result = await client.checkoutSessions.getDeliveryQuote("cs_01ARZ3NDEKTSV4RRFFQ69G5FAV", "dqt_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, {  });
```

[Complete runnable example](../examples/checkoutSessions-getDeliveryQuote.mjs)

### checkoutSessions.getDeliverySelection

Returns one checkout selection with its economics, lifecycle events, and retention-aware private data. While the selection is selected, the tax on its delivery charges follows the order's tax.

`GET /v1/checkout-sessions/{checkout_session_id}/delivery-selections/{delivery_selection_id}`

Signature:

```typescript
getDeliverySelection(checkout_session_id: InputValue<string>,
 delivery_selection_id: InputValue<string>,
 params?: CheckoutSessionsGetDeliverySelectionParams,
 options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `checkout_session_id` | Required | string | Flint checkout session ID. |
| `delivery_selection_id` | Required | string | Flint delivery selection ID. |

#### Response

Returned payload: [DeliverySelection](../models/DeliverySelection.md#deliveryselection).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 409 | ConflictError |
| 410 | ApiError |
| 429 | RateLimitError |
| 500 | ServerError |
| 503 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
const result = await client.checkoutSessions.getDeliverySelection("cs_01ARZ3NDEKTSV4RRFFQ69G5FAV", "dsel_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, {  });
```

[Complete runnable example](../examples/checkoutSessions-getDeliverySelection.mjs)

### checkoutSessions.list

Returns a paginated list of checkout sessions for the authenticated merchant. Default order: created_at descending, then checkout_session_id descending.

`GET /v1/checkout-sessions`

Signature: `list(params?: CheckoutSessionsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque next_page_token from the previous response. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns a validation error. |
| `status` | Optional | Array of string or string | Filter by the status each session has when read. A session past expires_at lists as expired even before its stored status is updated, unless payment work keeps it open, in which case it lists as open. A page can hold fewer sessions than page_size. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"open"`, `"paid"`, `"partially_paid"`, `"expired"`, `"closed"`, `"invalidated"`. Values: `"open"`, `"paid"`, `"partially_paid"`, `"expired"`, `"closed"`, `"invalidated"`. |
| `order_id` | Optional | string | Filter by Flint order ID. |
| `payment_link_id` | Optional | string | Filter by Flint payment link ID. |
| `customer_id` | Optional | string | Filter by Flint customer ID. |
| `subscription_plan_id` | Optional | string | Exact match on the Flint subscription plan ID. minLength: `1`. pattern: `^plan_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `invoice_id` | Optional | string | Exact match on the Flint invoice ID. minLength: `1`. pattern: `^inv_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `surface` | Optional | Array of string or string | Filter by checkout surface. Sessions created before surfaces existed are hosted. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"hosted"`, `"embedded"`. Values: `"hosted"`, `"embedded"`. |
| `type` | Optional | Array of string or string | Filter by checkout session type. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"order"`, `"quick_pay"`, `"subscription_plan"`, `"invoice"`, `"payment_link"`. Values: `"order"`, `"quick_pay"`, `"subscription_plan"`, `"invoice"`, `"payment_link"`. |
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
| `expand` | Optional | Array of string or string | Supported expansions: customer, invoice, order, payment_link. Include the requested related resources using scoped batch reads for this page. Each relationship requires its existing target read scopes. Expansion changes the representation without changing pagination tokens. Limits: at most 10 unique expand paths per request. Repeat expand, for example expand=customer&expand=invoice, or pass one comma-separated value. Items values: `"customer"`, `"invoice"`, `"order"`, `"payment_link"`. Values: `"customer"`, `"invoice"`, `"order"`, `"payment_link"`. |

#### Response

Returned payload: [CheckoutSessionListResponse](../models/CheckoutSessionListResponse.md#checkoutsessionlistresponse).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 410 | ApiError |
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

### checkoutSessions.listDeliverySelections

Returns a checkout session's selections, newest first by created_at and delivery_selection_id, with economics, lifecycle events, and retention-aware private data. Default order: created_at descending, then delivery_selection_id descending.

`GET /v1/checkout-sessions/{checkout_session_id}/delivery-selections`

Signature:

```typescript
listDeliverySelections(checkout_session_id: InputValue<string>,
 params?: CheckoutSessionsListDeliverySelectionsParams,
 options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `checkout_session_id` | Required | string | Flint checkout session ID. |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque next_page_token from the previous response. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns a validation error. |

#### Response

Returned payload: [DeliverySelectionListResponse](../models/DeliverySelectionListResponse.md#deliveryselectionlistresponse).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 410 | ApiError |
| 429 | RateLimitError |
| 500 | ServerError |
| 503 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

Pagination: `listDeliverySelectionsItems`, `listDeliverySelectionsPages`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```typescript
const result = await client.checkoutSessions.listDeliverySelections("cs_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, {  });
```

[Complete runnable example](../examples/checkoutSessions-listDeliverySelections.mjs)

### checkoutSessions.update

Updates the mutable fields of a checkout session. A merchant credential can update metadata and external_reference_id, including after the session ends. Send external_reference_id as null to clear it, or metadata as null to clear all metadata. On a session with a subscription_plan_id, either credential can send subscription_terms with the buyer's billing interval and quantity while the session is open and no payment is in progress; a change reprices the signup order and releases the delivery selection. The session's own checkout credential can also send buyer_contact and timezone while the session is open. The buyer_contact field saves the email and phone the buyer entered; send a contact field as null to clear it. The timezone field records the buyer's IANA time zone, which Flint uses for times in the emails it sends the buyer. Saving the same values again changes nothing.

`PATCH /v1/checkout-sessions/{checkout_session_id}`

Signature: `update(checkout_session_id: InputValue<string>, params: CheckoutSessionsUpdateParams, options?: RequestOptions<"checkout" | "merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `checkout_session_id` | Required | string | Flint checkout session ID. |
| `body` | Required | [UpdateCheckoutSessionRequestInput](../models/UpdateCheckoutSessionRequest.md#updatecheckoutsessionrequest) | The request body for: Update checkout session. |

Body model: [UpdateCheckoutSessionRequestInput](../models/UpdateCheckoutSessionRequest.md#updatecheckoutsessionrequest).

#### checkoutSessions.update body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_contact` | Optional | [CheckoutBuyerContactRequestInput](../models/CheckoutBuyerContactRequest.md#checkoutbuyercontactrequest) | Checkout session credentials only. Saves the contact the buyer entered while the session is open. A patch object: omitted fields are unchanged, and null clears a field. A merchant credential that sends buyer_contact receives CHECKOUT_SESSION_UPDATE_FIELD_NOT_ALLOWED. Buyer contact to supply with payment or save during checkout. Send at least one field. Values are stored exactly as sent, so an email with surrounding spaces is rejected. Checkout session updates keep omitted fields and accept null to clear a field. Payment requests do not accept null. minProperties: `1`. |
| `expected_version` | Optional | integer | Optional expected version of this resource. A stale value returns 409 VERSION_CONFLICT with the current version. Retrieve the resource and rebuild the request before retrying. Format: `uint64`. minimum: `1`. |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. Omit to leave unchanged; send null to clear. minLength: `1`. maxLength: `255`. |
| `metadata` | Optional | [MetadataPatchRequestInput](../models/MetadataPatchRequest.md#metadatapatchrequest) or null | Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. |
| `subscription_terms` | Optional | [CheckoutSubscriptionTermsRequestInput](../models/CheckoutSubscriptionTermsRequest.md#checkoutsubscriptiontermsrequest) | Subscription plan sessions only. The billing interval and quantity the buyer chose from subscription_terms.billing_interval_options and quantity_options. Send billing_interval and billing_interval_count together. Accepted from your API key or the checkout credential. Subscription terms you set on a checkout session: billing interval, interval count, and quantity. |
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
| 410 | ApiError |
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

