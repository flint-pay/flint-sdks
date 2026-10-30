[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# returnPreviews

### returnPreviews.create

Preview return eligibility or resolution amounts without creating a Return or reserving quantity. Set mode to eligibility or resolution and send the matching input object.

`POST /v1/return-previews`

Signature: `create(array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `body` | Required | [CreateReturnPreviewRequestInput](../models/CreateReturnPreviewRequestInput.md#createreturnpreviewrequestinput) | The request body for: Create return preview. |

Body model: [CreateReturnPreviewRequestInput](../models/CreateReturnPreviewRequestInput.md#createreturnpreviewrequestinput).

#### returnPreviews.create body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `eligibility` | Optional | [CreateReturnEligibilityPreviewRequestInput](../models/CreateReturnEligibilityPreviewRequestInput.md#createreturneligibilitypreviewrequestinput) | A request to preview which items of an order can be returned, given an order and a selection. |
| `mode` | Required | string | Values: `"eligibility"`, `"resolution"`. |
| `resolution` | Optional | [CreateReturnResolutionPreviewRequestInput](../models/CreateReturnResolutionPreviewRequestInput.md#createreturnresolutionpreviewrequestinput) | A request to preview the amounts of a return resolution for a return, selected by `resolution_type`: refund, exchange, replacement, no monetary action, or correction. |

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
| `eligibility` | Required | object | The result of checking whether an order's items can be returned: overall status, per-line eligibility, and the policy evaluation. |
| `mode` | Required | string | Values: `"eligibility"`. |
| `resolution` | Optional | object | A preview of a return resolution before it is created: returned and replacement totals, adjustments, and amounts due to or from the buyer. |

##### Response variant 2

The `resolution` variant of `CreateReturnPreviewData`.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `eligibility` | Optional | object | The result of checking whether an order's items can be returned: overall status, per-line eligibility, and the policy evaluation. |
| `mode` | Required | string | Values: `"resolution"`. |
| `resolution` | Required | object | A preview of a return resolution before it is created: returned and replacement totals, adjustments, and amounts due to or from the buyer. |

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

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
$result = $client->returnPreviews->create([
  'mode' => 'eligibility',
  'eligibility' => (object) [
    'order_id' => 'ord_01ARZ3NDEKTSV4RRFFQ69G5FAV',
    'selection' => (object) [
      'selection_type' => 'all_remaining_fulfilled',
    ],
  ],
], new RequestOptions());
```

[Complete runnable example](../examples/returnPreviews-create.php)

