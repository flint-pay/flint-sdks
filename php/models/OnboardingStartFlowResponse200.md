[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OnboardingStartFlowResponse200

A response containing `OnboardingStartResult` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [OnboardingStartResult](../models/OnboardingStartResult.md#onboardingstartresult) | The result of starting onboarding: whether email verification began, plus the verification token and its expiry. |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Optional | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

