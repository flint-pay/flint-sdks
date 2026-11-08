[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OnboardingStartResponse

A response containing `OnboardingStartResult` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [OnboardingStartResult](../models/OnboardingStartResult.md#onboardingstartresult) | Resource, collection, or operation result returned by this request. The verification token and expiry returned after the verification email is accepted for asynchronous delivery. Success does not confirm email delivery. `data`: [field definitions](../models/OnboardingStartResponse.md#onboardingstartresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### OnboardingStartResponse.data

Resource, collection, or operation result returned by this request. The verification token and expiry returned after the verification email is accepted for asynchronous delivery. Success does not confirm email delivery.

Field definitions: [shared fields](OnboardingStartResultInput.md#onboardingstartresultinput).

### OnboardingStartResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

