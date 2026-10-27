[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# subscriptionPreviews

### subscriptionPreviews.create

Estimates the next renewal or a plan change, or evaluates a proposed subscription, delivery destination, or delivery method update without saving changes. next_renewal returns current recurring promotions, shipping, and tax for the next charged cycle. plan_change uses the same checks and pricing as change-plan, including unused paid item credit for billing_starts now. Tax is null when no tax address is available; a tax service failure returns 502 EXTERNAL_SERVICE_ERROR. Malformed JSON, unknown fields and request-level problems (a missing or unsupported mode, fields that belong to another mode) return 400. In create mode, every problem with the proposed subscription is returned in errors with is_valid false, not only the first. A preview does not reserve inventory or guarantee a future shipping rate.

`POST /v1/subscription-previews`

Signature: `create(SubscriptionPreviewsCreateInput|array $input, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `body` | Required | [CreateSubscriptionPreviewRequestInput](../models/CreateSubscriptionPreviewRequestInput.md#createsubscriptionpreviewrequestinput) | The request body for: Preview subscription. |

Body model: [CreateSubscriptionPreviewRequestInput](../models/CreateSubscriptionPreviewRequestInput.md#createsubscriptionpreviewrequestinput).

#### subscriptionPreviews.create body oneOf variant 1

The `delivery_options` variant of `CreateSubscriptionPreviewRequest`.

Body model: [CreateSubscriptionPreviewRequestDeliveryOptionsInput](../models/CreateSubscriptionPreviewRequestDeliveryOptionsInput.md#createsubscriptionpreviewrequestdeliveryoptionsinput).

#### subscriptionPreviews.create body oneOf variant 1 fields

Field definitions: [shared fields](../models/CreateSubscriptionPreviewRequestDeliveryOptionsInput.md#createsubscriptionpreviewrequestdeliveryoptionsinput). Models: [SubscriptionDeliveryDestinationRequestInput](../models/SubscriptionDeliveryDestinationRequestInput.md#subscriptiondeliverydestinationrequestinput).

#### subscriptionPreviews.create body oneOf variant 2

The `create` variant of `CreateSubscriptionPreviewRequest`.

Body model: [CreateSubscriptionPreviewRequestCreateInput](../models/CreateSubscriptionPreviewRequestCreateInput.md#createsubscriptionpreviewrequestcreateinput).

#### subscriptionPreviews.create body oneOf variant 2 fields

Field definitions: [shared fields](../models/CreateSubscriptionPreviewRequestCreateInput.md#createsubscriptionpreviewrequestcreateinput). Models: [CreateSubscriptionRequestInput](../models/CreateSubscriptionRequestInput.md#createsubscriptionrequestinput).

#### subscriptionPreviews.create body oneOf variant 3

The `delivery_method_update` variant of `CreateSubscriptionPreviewRequest`.

Body model: [CreateSubscriptionPreviewRequestDeliveryMethodUpdateInput](../models/CreateSubscriptionPreviewRequestDeliveryMethodUpdateInput.md#createsubscriptionpreviewrequestdeliverymethodupdateinput).

#### subscriptionPreviews.create body oneOf variant 3 fields

Field definitions: [shared fields](../models/CreateSubscriptionPreviewRequestDeliveryMethodUpdateInput.md#createsubscriptionpreviewrequestdeliverymethodupdateinput). Models: [UpdateDeliveryMethodRequestInput](../models/UpdateDeliveryMethodRequestInput.md#updatedeliverymethodrequestinput).

#### subscriptionPreviews.create body oneOf variant 4

The `next_renewal` variant of `CreateSubscriptionPreviewRequest`.

Body model: [CreateSubscriptionPreviewRequestNextRenewalInput](../models/CreateSubscriptionPreviewRequestNextRenewalInput.md#createsubscriptionpreviewrequestnextrenewalinput).

#### subscriptionPreviews.create body oneOf variant 4 fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `mode` | Required | string | Values: `"next_renewal"`. |
| `subscription_id` | Required | string | minLength: `1`. pattern: `^sub_[0-9A-HJKMNP-TV-Z]{26}$`. |

#### subscriptionPreviews.create body oneOf variant 5

The `plan_change` variant of `CreateSubscriptionPreviewRequest`.

Body model: [CreateSubscriptionPreviewRequestPlanChangeInput](../models/CreateSubscriptionPreviewRequestPlanChangeInput.md#createsubscriptionpreviewrequestplanchangeinput).

#### subscriptionPreviews.create body oneOf variant 5 fields

Field definitions: [shared fields](../models/CreateSubscriptionPreviewRequestPlanChangeInput.md#createsubscriptionpreviewrequestplanchangeinput).

#### Response

Returned payload: [SubscriptionPreviewsCreateResponse200DataCreate](../models/SubscriptionPreviewsCreateResponse200DataCreate.md#subscriptionpreviewscreateresponse200datacreate)|[SubscriptionPreviewsCreateResponse200DataDeliveryOptions](../models/SubscriptionPreviewsCreateResponse200DataCreate.md#subscriptionpreviewscreateresponse200datacreate)|[SubscriptionPreviewsCreateResponse200DataDeliveryMethodUpdate](../models/SubscriptionPreviewsCreateResponse200DataDeliveryMethodUpdate.md#subscriptionpreviewscreateresponse200datadeliverymethodupdate)|[SubscriptionPreviewsCreateResponse200DataNextRenewal](../models/MeCreateSubscriptionPreviewResponse200DataNextRenewal.md#mecreatesubscriptionpreviewresponse200datanextrenewal)|[SubscriptionPreviewsCreateResponse200DataPlanChange](../models/SubscriptionPreviewsCreateResponse200DataPlanChange.md#subscriptionpreviewscreateresponse200dataplanchange)|\stdClass.

##### Response variant 1

A preview of a subscription. In `create` mode it reports validity and errors; in `delivery_options` mode it lists delivery methods.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address_verification` | Optional | [SubscriptionAddressVerification](../models/SubscriptionAddressVerificationInput.md#subscriptionaddressverificationinput) | The verification state of a subscription's delivery address: `verified`, `unverified`, `needs_review`, or `unverifiable`. |
| `currency` | Optional | string | ISO 4217 currency code. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. |
| `delivery_methods` | Optional | Array of [SubscriptionDeliveryOption](../models/SubscriptionDeliveryOption.md#subscriptiondeliveryoption) | Present in delivery_options mode ([] when no method applies); absent in create mode. |
| `destination_address` | Optional | [Address](../models/Address.md#address) | A postal address, as returned on customers, invoices, tax locations, and fulfillment recipients. |
| `errors` | Optional | Array of [SubscriptionPreviewError](../models/SubscriptionPreviewError.md#subscriptionpreviewerror) | Present in create mode ([] when the subscription is valid); absent in delivery_options mode. |
| `is_valid` | Optional | boolean | Present in create mode; absent in delivery_options mode. |
| `mode` | Required | string | Values: `"create"`, `"delivery_options"`. |
| `subscription_id` | Optional | string |  |

##### Response variant 2

How a delivery method change affects subscriptions: current counts and how many would no longer be eligible.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_method_id` | Required | string |  |
| `mode` | Required | string | Values: `"delivery_method_update"`. |
| `no_longer_eligible_counts` | Required | [SubscriptionCounts](../models/SubscriptionCountsInput.md#subscriptioncountsinput) | Counts of subscriptions by status: active, past due, and paused. |
| `subscription_counts` | Required | [SubscriptionCounts](../models/SubscriptionCountsInput.md#subscriptioncountsinput) | Counts of subscriptions by status: active, past due, and paused. |

##### Response variant 3

A preview of a subscription's next renewal and its estimated pricing.

Field definitions: [shared fields](me.md#response-variant-2-1). Models: [SubscriptionRenewalEstimate](../models/SubscriptionRenewalEstimate.md#subscriptionrenewalestimate).

##### Response variant 4

Estimated pricing for a subscription plan change, including the recurring item subtotal and renewal amounts.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_interval` | Required | string | Values: `"daily"`, `"weekly"`, `"monthly"`, `"yearly"`. |
| `billing_interval_count` | Required | integer | Format: `int32`. |
| `billing_starts` | Required | string | Values: `"now"`, `"next_renewal"`. |
| `credit_money` | Required | [MoneyValue](../models/CreditNoteLineItemCorrectionQuantityAmountMoney.md#creditnotelineitemcorrectionquantityamountmoney) or null | Unused paid item time credited when billing_starts is now; null for next_renewal. |
| `mode` | Required | string | Values: `"plan_change"`. |
| `quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int32`. |
| `recurring_subtotal_money` | Required | [MoneyValue](../models/CreditNoteLineItemCorrectionQuantityAmountMoney.md#creditnotelineitemcorrectionquantityamountmoney) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `renewal` | Required | [SubscriptionRenewalEstimate](../models/SubscriptionRenewalEstimate.md#subscriptionrenewalestimate) | Estimated pricing and billing time for a subscription's next renewal, including items, discounts, shipping, and tax. |
| `subscription_id` | Required | string |  |
| `subscription_plan_id` | Required | string |  |

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

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `createWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
$result = $client->subscriptionPreviews->create([
  'body' => (object) [
    'mode' => 'next_renewal',
    'subscription_id' => 'sub_00000000000000000000000000',
  ],
], new RequestOptions());
```

[Complete runnable example](../examples/subscriptionPreviews-create.php)

