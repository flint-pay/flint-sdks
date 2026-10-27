[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## MerchantAccountSessionInput

A merchant account session: the browser initialization data, allowed components, effective policy, and launch token for embedded account management.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `client_session` | Required | [MerchantAccountSessionClientSessionInput](../models/MerchantAccountSessionClientSessionInput.md#merchantaccountsessionclientsessioninput) | Browser initialization data required to mount embedded account-management components. These instructions are not merchant account resource state. Short-lived browser initialization data for an embedded merchant account session. |
| `components` | Required | Array of string | minItems: `1`. Items values: `"account_onboarding"`, `"account_management"`, `"payouts"`, `"balances"`, `"tax_documents"`, `"notification_banner"`. |
| `effective_policy` | Required | [MerchantAccountSessionEffectivePolicyInput](../models/MerchantAccountSessionEffectivePolicyInput.md#merchantaccountsessioneffectivepolicyinput) | The collection policy applied to a merchant account session: which requirements it targets, how they are collected, and whether future requirements are included. |
| `launch_token` | Required | string | Signed Flint token to exchange at POST /v1/merchant-account-session-refreshes. Each new refresh operation rotates this token; a same-key retry replays the original token. The caller must still authenticate and authorize the human using the session. |
| `launch_token_expires_at` | Required | string | Expiry of launch_token in UTC. After expiry, create a new merchant account session. Format: `date-time`. |

