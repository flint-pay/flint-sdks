[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# returnPreviews

### returnPreviews.create

Preview return eligibility or resolution amounts without creating a Return or reserving quantity. Set mode to eligibility or resolution and send the matching input object.

`POST /v1/return-previews`

Signature: `create(array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `body` | Required | [CreateReturnPreviewRequestInput](../models/CreateReturnPreviewRequestInput.md#createreturnpreviewrequestinput) | The request body for: Create return preview. |

Body model: [CreateReturnPreviewRequestInput](../models/CreateReturnPreviewRequestInput.md#createreturnpreviewrequestinput).

#### returnPreviews.create body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `eligibility` | Optional | [CreateReturnEligibilityPreviewRequestInput](../models/CreateReturnEligibilityPreviewRequestInput.md#createreturneligibilitypreviewrequestinput) | The eligibility check. Present when `mode` is `eligibility`. A request to preview which items of an order can be returned, given an order and a selection. |
| `mode` | Required | string | Which preview to run. Values: `"eligibility"`, `"resolution"`. |
| `resolution` | Optional | [CreateReturnResolutionPreviewRequestInput](../models/CreateReturnResolutionPreviewRequestInput.md#createreturnresolutionpreviewrequestinput) | The priced resolution. Present when `mode` is `resolution`. A request to preview the amounts of a return resolution for a return, selected by `resolution_type`: refund, exchange, replacement, no monetary action, or correction. |

#### returnPreviews.create with `mode: "eligibility"`

The `eligibility` variant of `CreateReturnPreviewRequest`.

Body model: [CreateReturnPreviewRequestEligibilityInput](../models/CreateReturnPreviewRequestEligibilityInput.md#createreturnpreviewrequesteligibilityinput).

#### returnPreviews.create with `mode: "resolution"`

The `resolution` variant of `CreateReturnPreviewRequest`.

Body model: [CreateReturnPreviewRequestResolutionInput](../models/CreateReturnPreviewRequestResolutionInput.md#createreturnpreviewrequestresolutioninput).

#### Response

Returned payload: [CreateReturnPreviewResponseDataEligibility](../models/CreateReturnPreviewResponseDataEligibility.md#createreturnpreviewresponsedataeligibility)|[CreateReturnPreviewResponseDataResolution](../models/CreateReturnPreviewResponseDataResolution.md#createreturnpreviewresponsedataresolution)|Model.

##### Response variant 1

The `eligibility` variant of `CreateReturnPreviewData`.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `eligibility` | Required | object | The eligibility check. Present when `mode` is `eligibility`. The result of checking whether an order's items can be returned: overall status, per-line eligibility, and the policy evaluation. |
| `mode` | Required | string | Which preview to run. Values: `"eligibility"`. |
| `resolution` | Optional | object | The priced resolution. Present when `mode` is `resolution`. A preview of a return resolution before it is created: returned and replacement totals, adjustments, and amounts due to or from the buyer. |

##### Response variant 2

The `resolution` variant of `CreateReturnPreviewData`.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `eligibility` | Optional | object | The eligibility check. Present when `mode` is `eligibility`. The result of checking whether an order's items can be returned: overall status, per-line eligibility, and the policy evaluation. |
| `mode` | Required | string | Which preview to run. Values: `"resolution"`. |
| `resolution` | Required | object | The priced resolution. Present when `mode` is `resolution`. A preview of a return resolution before it is created: returned and replacement totals, adjustments, and amounts due to or from the buyer. |

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

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
$result = $client->returnPreviews->create([
  'mode' => 'eligibility',
  'eligibility' => (object) [
    'order_id' => 'ord_01KEZF7C0054GQKJ142A8X367A',
    'selection' => (object) [
      'selection_type' => 'all_remaining_fulfilled',
    ],
  ],
], new RequestOptions());
```

[Complete runnable example](../examples/returnPreviews-create.php)

