[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# subscriptionPreviews

### subscriptionPreviews.create

Estimates the next renewal, a plan change, or a promotion attachment, or evaluates a proposed subscription, delivery destination, or delivery method update without saving changes. next_renewal returns current recurring promotions, shipping, and tax for the next charged cycle. plan_change uses the same checks and pricing as change-plan, including unused paid item credit for billing_starts now or prorated_now. quantity_change accepts the change-quantity inputs and previews the same prorated charge without changing the subscription. promotion_apply uses the same checks as applying a promotion and returns the proposed attachment and the renewal estimate for its first_cycle; its refusals return HTTP errors. Tax is null when tax can't be calculated yet; a tax service failure returns 502 EXTERNAL_SERVICE_ERROR. Malformed JSON, unknown fields and request-level problems (a missing or unsupported mode, fields that belong to another mode) return 400. Create mode returns SubscriptionCreatePreview with first_charge, first_period_charge, and recurring estimates, all null when validation prevents pricing. first_charge is the first Flint collection, including any separate setup fee; recurring is the first normal full-period collection without setup fees. With prorate_first_period, the prorated first period is first_charge, or first_period_charge when a setup fee is collected first, and recurring is cycle 2 at the end of that period. is_valid means valid and priceable inputs, not payment readiness. Card validation matches creation, including cardless imports. In create mode, every problem with the proposed subscription is returned in errors with is_valid false, including CUSTOMER_EMAIL_REQUIRED when the customer has no email and promotion refusals under subscription.promotions. A create preview attaches no promotions and counts no uses. In delivery_options, shipping_countries lists countries potentially served by the subscription shipping and local delivery methods; omit destination on the buyer preview to read coverage before entering an address. Other address, cart, customer and rate checks still apply. A preview does not reserve inventory or guarantee a future shipping rate.

`POST /v1/subscription-previews`

Signature: `create(params: SubscriptionPreviewsCreateParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `body` | Required | [CreateSubscriptionPreviewRequestInput](../models/CreateSubscriptionPreviewRequest.md#createsubscriptionpreviewrequest) | The request body for: Preview subscription. |

Body model: [CreateSubscriptionPreviewRequestInput](../models/CreateSubscriptionPreviewRequest.md#createsubscriptionpreviewrequest).

#### subscriptionPreviews.create with `mode: "delivery_options"`

The `delivery_options` variant of `CreateSubscriptionPreviewRequest`.

Body model: [CreateSubscriptionPreviewRequestDeliveryOptionsInput](../models/CreateSubscriptionPreviewRequestDeliveryOptions.md#createsubscriptionpreviewrequestdeliveryoptions).

#### subscriptionPreviews.create with `mode: "create"`

The `create` variant of `CreateSubscriptionPreviewRequest`.

Body model: [CreateSubscriptionPreviewRequestCreateInput](../models/CreateSubscriptionPreviewRequestCreate.md#createsubscriptionpreviewrequestcreate).

#### subscriptionPreviews.create with `mode: "delivery_method_update"`

The `delivery_method_update` variant of `CreateSubscriptionPreviewRequest`.

Body model: [CreateSubscriptionPreviewRequestDeliveryMethodUpdateInput](../models/CreateSubscriptionPreviewRequestDeliveryMethodUpdate.md#createsubscriptionpreviewrequestdeliverymethodupdate).

#### subscriptionPreviews.create with `mode: "next_renewal"`

The `next_renewal` variant of `CreateSubscriptionPreviewRequest`.

Body model: [CreateSubscriptionPreviewRequestNextRenewalInput](../models/CreateSubscriptionPreviewRequestNextRenewal.md#createsubscriptionpreviewrequestnextrenewal).

#### subscriptionPreviews.create with `mode: "plan_change"`

The `plan_change` variant of `CreateSubscriptionPreviewRequest`.

Body model: [CreateSubscriptionPreviewRequestPlanChangeInput](../models/CreateSubscriptionPreviewRequestPlanChange.md#createsubscriptionpreviewrequestplanchange).

#### subscriptionPreviews.create with `mode: "quantity_change"`

The `quantity_change` variant of `CreateSubscriptionPreviewRequest`.

Body model: [CreateSubscriptionPreviewRequestQuantityChangeInput](../models/CreateSubscriptionPreviewRequestQuantityChange.md#createsubscriptionpreviewrequestquantitychange).

#### subscriptionPreviews.create with `mode: "promotion_apply"`

The `promotion_apply` variant of `CreateSubscriptionPreviewRequest`.

Body model: [CreateSubscriptionPreviewRequestPromotionApplyInput](../models/CreateSubscriptionPreviewRequestPromotionApply.md#createsubscriptionpreviewrequestpromotionapply).

#### Response

Returned payload: (([SubscriptionCreatePreview](../models/SubscriptionCreatePreview.md#subscriptioncreatepreview)) | ([SubscriptionPreview](../models/SubscriptionPreview.md#subscriptionpreview)) | ([SubscriptionDeliveryMethodImpact](../models/SubscriptionDeliveryMethodImpact.md#subscriptiondeliverymethodimpact)) | ([SubscriptionRenewalPreview](../models/SubscriptionRenewalPreview.md#subscriptionrenewalpreview)) | ([SubscriptionPlanChangePreview](../models/SubscriptionPlanChangePreview.md#subscriptionplanchangepreview)) | ([SubscriptionQuantityChangePreview](../models/SubscriptionQuantityChangePreview.md#subscriptionquantitychangepreview)) | ([SubscriptionPromotionApplyPreview](../models/SubscriptionPromotionApplyPreview.md#subscriptionpromotionapplypreview)) | (Record&lt;string, unknown&gt;)).

##### Response variant 1

Validation and estimates for the first and recurring collections of a proposed subscription.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `errors` | Required | Array of [SubscriptionPreviewError](../models/SubscriptionPreviewError.md#subscriptionpreviewerror) | Validation failures for the proposed subscription; [] when the inputs are valid and priceable. |
| `first_charge` | Required | [SubscriptionChargeEstimate](../models/SubscriptionChargeEstimate.md#subscriptionchargeestimate) or null | The first Flint collection, priced as billing collects it: trial end without a setup fee, now for a setup fee (or the scheduled start), or imported-period end. With `prorate_first_period` and no setup fee, it's the prorated first period. `null` when validation prevents pricing. |
| `first_period_charge` | Required | [SubscriptionChargeEstimate](../models/SubscriptionChargeEstimate.md#subscriptionchargeestimate) or null | The prorated first period, when billing collects it as its own order after a setup fee in `first_charge`. `null` when no proration was requested, when the prorated period is already included in `first_charge`, when the first paid start is on the anchor day so there is no prorated period, or when validation prevents pricing. |
| `is_valid` | Required | boolean | Whether the inputs are valid and priceable. This does not mean the subscription is ready to pay. |
| `mode` | Required | string | The kind of subscription preview. Values: `"create"`. |
| `recurring` | Required | [SubscriptionChargeEstimate](../models/SubscriptionChargeEstimate.md#subscriptionchargeestimate) or null | The first normal full-period collection, without setup fees. With `prorate_first_period`, it's cycle 2, billed at the end of the prorated period. `null` when validation prevents pricing. |

##### Response variant 2

Delivery methods available for a proposed subscription destination.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address_verification` | Optional | [SubscriptionAddressVerification](../models/SubscriptionAddressVerification.md#subscriptionaddressverification) | The verification state of a subscription's delivery address: `verified`, `unverified`, `needs_review`, or `unverifiable`. |
| `currency` | Optional | string | ISO 4217 currency code. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. |
| `delivery_methods` | Required | Array of [SubscriptionDeliveryOption](../models/SubscriptionDeliveryOption.md#subscriptiondeliveryoption) | Delivery methods available for the proposed destination. |
| `destination_address` | Optional | [Address](../models/Address.md#address) | A postal address. Every address has country. Addresses Flint checked as complete (customer and saved addresses, merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and city, and US ones always have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold only what was provided, such as postal_code and country. |
| `mode` | Required | string | Values: `"delivery_options"`. |
| `shipping_countries` | Required | Array of string | Sorted ISO 3166-1 alpha-2 countries potentially served by this subscription's shipping methods, based on their delivery configuration and shipping zones. Restrict a country selector with this list only when shipping_countries_complete is true. Empty when no shipping coverage is available. Other address, cart, customer and rate checks still apply. |
| `shipping_countries_complete` | Required | boolean | Whether shipping_countries is safe to use as a country restriction. False when a radius without an explicit country boundary may serve addresses across a border; clients must not restrict the country selector in that case. Other address, cart, customer and rate checks still apply when true. |
| `subscription_id` | Optional | string |  |

##### Response variant 3

How a delivery method change affects subscriptions: current counts and how many would no longer be eligible.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_method_id` | Required | string | ID of the delivery method whose edit was previewed. |
| `mode` | Required | string | Selects the delivery method update preview. Values: `"delivery_method_update"`. |
| `no_longer_eligible_counts` | Required | [SubscriptionCounts](../models/SubscriptionCounts.md#subscriptioncounts) | Of those, the subscriptions the edit would leave unable to use the method, by status. Counts of subscriptions by status: active, past due, and paused. |
| `no_longer_eligible_reasons` | Optional | Array of string | Distinct delivery eligibility reasons for the subscriptions in no_longer_eligible_counts. Includes method_type_not_allowed when stored items do not allow the method's type. Omitted when no reasons apply. Items values: `"eligibility_no_match"`, `"method_type_not_allowed"`. |
| `subscription_counts` | Required | [SubscriptionCounts](../models/SubscriptionCounts.md#subscriptioncounts) | Live subscriptions that use the method now, by status. Counts of subscriptions by status: active, past due, and paused. |

##### Response variant 4

A preview of a subscription's next renewal and its estimated pricing.

Field definitions: [shared fields](me.md#response-variant-2). Models: [SubscriptionChargeEstimate](../models/SubscriptionChargeEstimate.md#subscriptionchargeestimate).

##### Response variant 5

Estimated pricing for a subscription plan change, including the recurring item subtotal and renewal amounts.

Field definitions: [shared fields](me.md#response-variant-3). Models: [MoneyValue](../models/MoneyValue.md#moneyvalue), [SubscriptionChargeEstimate](../models/SubscriptionChargeEstimate.md#subscriptionchargeestimate).

##### Response variant 6

Estimated pricing for a quantity change that keeps the billing period and anchor.

Field definitions: [shared fields](me.md#response-variant-4). Models: [MoneyValue](../models/MoneyValue.md#moneyvalue), [SubscriptionChargeEstimate](../models/SubscriptionChargeEstimate.md#subscriptionchargeestimate).

##### Response variant 7

A proposed subscription promotion attachment and estimated renewal for its first eligible charged cycle.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `mode` | Required | string | The kind of subscription pricing estimate. Values: `"promotion_apply"`. |
| `promotion` | Required | [SubscriptionPromotion](../models/SubscriptionPromotion.md#subscriptionpromotion) | The promotion as it would attach to this subscription. A recurring promotion applied to a subscription, including its recurrence and remaining discounted cycles. |
| `renewal` | Required | [SubscriptionChargeEstimate](../models/SubscriptionChargeEstimate.md#subscriptionchargeestimate) | Estimated renewal for the promotion's first_cycle. Estimated pricing and billing time for a subscription renewal, including items, discounts, shipping, and tax. |
| `subscription_id` | Required | string | ID of the subscription being previewed. pattern: `^sub_[0-9A-HJKMNP-TV-Z]{26}$`. |

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

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
const result = await client.subscriptionPreviews.create({mode: "next_renewal", subscription_id: "sub_00000000000000000000000000"}, {  });
```

[Complete runnable example](../examples/subscriptionPreviews-create.mjs)

