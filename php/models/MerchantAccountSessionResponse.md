[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## MerchantAccountSessionResponse

A response containing `MerchantAccountSession` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [MerchantAccountSession](../models/MerchantAccountSession.md#merchantaccountsession) | Resource, collection, or operation result returned by this request. A merchant account session: the browser initialization data, allowed components, effective policy, and launch token for embedded account management. `data`: [field definitions](../models/MerchantAccountSessionResponse.md#merchantaccountsessionresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### MerchantAccountSessionResponse.data

Resource, collection, or operation result returned by this request. A merchant account session: the browser initialization data, allowed components, effective policy, and launch token for embedded account management.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `client_session` | Required | [MerchantAccountSessionClientSession](../models/MerchantAccountSessionClientSession.md#merchantaccountsessionclientsession) | Browser initialization data required to mount embedded account-management components. These instructions are not merchant account resource state. Short-lived browser initialization data for an embedded merchant account session. `client_session`: [field definitions](../models/MerchantAccountSessionResponse.md#merchantaccountsessionresponsedataclient_session). |
| `components` | Required | Array of string | The components the session authorizes, in catalog order. minItems: `1`. Items values: `"account_onboarding"`, `"account_management"`, `"payouts"`, `"balances"`, `"tax_documents"`, `"notification_banner"`, `"payments"`. |
| `effective_policy` | Required | [MerchantAccountSessionEffectivePolicy](../models/MerchantAccountSessionEffectivePolicy.md#merchantaccountsessioneffectivepolicy) | The collection policy Flint applied to the session. The collection policy applied to a merchant account session: which requirements it targets, how they are collected, and whether future requirements are included. |
| `launch_token` | Required | string | Signed Flint token to exchange at POST /v1/merchant-account-session-refreshes. Each new refresh operation rotates this token; a same-key retry replays the original token. The caller must still authenticate and authorize the human using the session. |
| `launch_token_expires_at` | Required | string | Expiry of launch_token in UTC. After expiry, create a new merchant account session. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |

### MerchantAccountSessionResponse.data.client_session

Browser initialization data required to mount embedded account-management components. These instructions are not merchant account resource state. Short-lived browser initialization data for an embedded merchant account session.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expires_at` | Required | string | Expiry of the embedded account session client secret in UTC. Connect.js calls fetchClientSecret to obtain a new secret when needed. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `stripe` | Required | [MerchantAccountSessionStripe](../models/MerchantAccountSessionStripe.md#merchantaccountsessionstripe) | Stripe Connect initialization credentials and authorized component collection options. Connect initializes from the account session client secret and does not take a connected account ID. Stripe Connect initialization data for a merchant account session: the account session, publishable key, and authorized components. |

### MerchantAccountSessionResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

