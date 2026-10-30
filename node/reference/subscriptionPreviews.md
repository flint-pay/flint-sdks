[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# subscriptionPreviews

### subscriptionPreviews.create

Estimates the next renewal or a plan change, or evaluates a proposed subscription, delivery destination, or delivery method update without saving changes. next_renewal returns current recurring promotions, shipping, and tax for the next charged cycle. plan_change uses the same checks and pricing as change-plan, including unused paid item credit for billing_starts now. Tax is null when no tax address is available; a tax service failure returns 502 EXTERNAL_SERVICE_ERROR. Malformed JSON, unknown fields and request-level problems (a missing or unsupported mode, fields that belong to another mode) return 400. In create mode, every problem with the proposed subscription is returned in errors with is_valid false, not only the first. A preview does not reserve inventory or guarantee a future shipping rate.

`POST /v1/subscription-previews`

Signature: `create(params: SubscriptionPreviewsCreateParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `body` | Required | [CreateSubscriptionPreviewRequestInput](../models/CreateSubscriptionPreviewRequest.md#createsubscriptionpreviewrequest) | The request body for: Preview subscription. |

Body model: [CreateSubscriptionPreviewRequestInput](../models/CreateSubscriptionPreviewRequest.md#createsubscriptionpreviewrequest).

#### subscriptionPreviews.create with `mode: "delivery_options"`

The `delivery_options` variant of `CreateSubscriptionPreviewRequest`.

Body model: [CreateSubscriptionPreviewRequestDeliveryOptionsInput](../models/CreateMeSubscriptionPreviewRequestDeliveryOptionsInput.md#createmesubscriptionpreviewrequestdeliveryoptionsinput).

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

#### Response

Returned payload: (([SubscriptionPreview](../models/SubscriptionPreview.md#subscriptionpreview)) | ([SubscriptionDeliveryMethodImpact](../models/SubscriptionDeliveryMethodImpact.md#subscriptiondeliverymethodimpact)) | ([SubscriptionRenewalPreview](../models/SubscriptionRenewalPreview.md#subscriptionrenewalpreview)) | ([SubscriptionPlanChangePreview](../models/SubscriptionPlanChangePreview.md#subscriptionplanchangepreview)) | (Record&lt;string, unknown&gt;)).

##### Response variant 1

A preview of a subscription. In `create` mode it reports validity and errors; in `delivery_options` mode it lists delivery methods.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address_verification` | Optional | [SubscriptionAddressVerification](../models/SubscriptionAddressVerification.md#subscriptionaddressverification) | The verification state of a subscription's delivery address: `verified`, `unverified`, `needs_review`, or `unverifiable`. |
| `currency` | Optional | string | ISO 4217 currency code. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. |
| `delivery_methods` | Optional | Array of [SubscriptionDeliveryOption](../models/SubscriptionDeliveryOption.md#subscriptiondeliveryoption) | Present in delivery_options mode ([] when no method applies); absent in create mode. |
| `destination_address` | Optional | [Address](../models/Address.md#address) | A postal address. Every address has country. Addresses Flint checked as complete (customer and saved addresses, merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and city, and US ones always have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold only what was provided, such as postal_code and country. |
| `errors` | Optional | Array of [SubscriptionPreviewError](../models/SubscriptionPreviewError.md#subscriptionpreviewerror) | Present in create mode ([] when the subscription is valid); absent in delivery_options mode. |
| `is_valid` | Optional | boolean | Present in create mode; absent in delivery_options mode. |
| `mode` | Required | string | Values: `"create"`, `"delivery_options"`. |
| `subscription_id` | Optional | string |  |

##### Response variant 2

How a delivery method change affects subscriptions: current counts and how many would no longer be eligible.

Field definitions: [shared fields](../models/SubscriptionDeliveryMethodImpact.md#subscriptiondeliverymethodimpact). Models: [SubscriptionCounts](../models/SubscriptionCounts.md#subscriptioncounts).

##### Response variant 3

A preview of a subscription's next renewal and its estimated pricing.

Field definitions: [shared fields](../models/SubscriptionRenewalPreview.md#subscriptionrenewalpreview). Models: [SubscriptionRenewalEstimate](../models/SubscriptionRenewalEstimate.md#subscriptionrenewalestimate).

##### Response variant 4

Estimated pricing for a subscription plan change, including the recurring item subtotal and renewal amounts.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_interval` | Required | string | Values: `"daily"`, `"weekly"`, `"monthly"`, `"yearly"`. |
| `billing_interval_count` | Required | integer | Format: `int32`. |
| `billing_starts` | Required | string | Values: `"now"`, `"next_renewal"`. |
| `credit_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) or null | Unused paid item time credited when billing_starts is now; null for next_renewal. |
| `mode` | Required | string | Values: `"plan_change"`. |
| `quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int32`. |
| `recurring_subtotal_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `renewal` | Required | [SubscriptionRenewalEstimate](../models/SubscriptionRenewalEstimate.md#subscriptionrenewalestimate) | Estimated pricing and billing time for a subscription's next renewal, including items, discounts, shipping, and tax. |
| `subscription_id` | Required | string |  |
| `subscription_plan_id` | Required | string |  |

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

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
const result = await client.subscriptionPreviews.create({mode: "next_renewal", subscription_id: "sub_00000000000000000000000000"}, {  });
```

[Complete runnable example](../examples/subscriptionPreviews-create.mjs)

