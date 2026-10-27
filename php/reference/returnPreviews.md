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

#### returnPreviews.create body oneOf variant 1

The `eligibility` variant of `CreateReturnPreviewRequest`.

Body model: [CreateReturnPreviewRequestEligibilityInput](../models/CreateReturnPreviewRequestEligibilityInput.md#createreturnpreviewrequesteligibilityinput).

#### returnPreviews.create body oneOf variant 1 fields

Field definitions: [shared fields](../models/CreateReturnPreviewRequestEligibilityInput.md#createreturnpreviewrequesteligibilityinput). Models: [CreateReturnEligibilityPreviewRequestInput](../models/CreateReturnEligibilityPreviewRequestInput.md#createreturneligibilitypreviewrequestinput), [CreateReturnResolutionPreviewRequestInput](../models/CreateReturnResolutionPreviewRequestInput.md#createreturnresolutionpreviewrequestinput).

#### returnPreviews.create body oneOf variant 2

The `resolution` variant of `CreateReturnPreviewRequest`.

Body model: [CreateReturnPreviewRequestResolutionInput](../models/CreateReturnPreviewRequestResolutionInput.md#createreturnpreviewrequestresolutioninput).

#### returnPreviews.create body oneOf variant 2 fields

Field definitions: [shared fields](../models/CreateReturnPreviewRequestResolutionInput.md#createreturnpreviewrequestresolutioninput). Models: [CreateReturnEligibilityPreviewRequestInput](../models/CreateReturnEligibilityPreviewRequestInput.md#createreturneligibilitypreviewrequestinput), [CreateReturnResolutionPreviewRequestInput](../models/CreateReturnResolutionPreviewRequestInput.md#createreturnresolutionpreviewrequestinput).

#### Response

Returned payload: [ReturnPreviewsCreateResponse200DataEligibility](../models/ReturnPreviewsCreateResponse200DataEligibility.md#returnpreviewscreateresponse200dataeligibility)|[ReturnPreviewsCreateResponse200DataResolution](../models/ReturnPreviewsCreateResponse200DataResolution.md#returnpreviewscreateresponse200dataresolution)|\stdClass.

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

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `createWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`, `merchantKey`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
$result = $client->returnPreviews->create([
  'mode' => 'eligibility',
  'eligibility' => (object) [
    'order_id' => 'example',
    'selection' => (object) [
      'selection_type' => 'all_remaining_fulfilled',
    ],
  ],
], new RequestOptions());
```

[Complete runnable example](../examples/returnPreviews-create.php)

