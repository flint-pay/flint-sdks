[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## MerchantAccountSession

A merchant account session: the browser initialization data, allowed components, effective policy, and launch token for embedded account management.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `client_session` | Required | [MerchantAccountSessionClientSession](../models/MerchantAccountSessionClientSession.md#merchantaccountsessionclientsession) | Browser initialization data required to mount embedded account-management components. These instructions are not merchant account resource state. Short-lived browser initialization data for an embedded merchant account session. |
| `components` | Required | Array of string | minItems: `1`. Items values: `"account_onboarding"`, `"account_management"`, `"payouts"`, `"balances"`, `"tax_documents"`, `"notification_banner"`. |
| `effective_policy` | Required | [MerchantAccountSessionEffectivePolicy](../models/MerchantAccountSessionEffectivePolicy.md#merchantaccountsessioneffectivepolicy) | The collection policy applied to a merchant account session: which requirements it targets, how they are collected, and whether future requirements are included. |
| `launch_token` | Required | string | Signed Flint token to exchange at POST /v1/merchant-account-sessions/refresh. Each successful refresh rotates this token. The caller must still authenticate and authorize the human using the session. |
| `launch_token_expires_at` | Required | string | Expiry of launch_token in UTC. After expiry, create a new merchant account session. Format: `date-time`. |

