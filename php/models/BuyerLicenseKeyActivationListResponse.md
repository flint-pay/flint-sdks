[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerLicenseKeyActivationListResponse

A page of `BuyerLicenseKeyActivation` objects.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | Array of [BuyerLicenseKeyActivation](../models/BuyerLicenseKeyActivation.md#buyerlicensekeyactivation) | Resource, collection, or operation result returned by this request. `data[]`: [field definitions](../models/BuyerLicenseKeyActivationListResponse.md#buyerlicensekeyactivationlistresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `next_page_token` | Optional | string | Opaque token to send as `page_token` to retrieve the next page. Omitted when there is no next page. |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### BuyerLicenseKeyActivationListResponse.data[]

A top-level child of a license key representing one of the buyer's installations.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_actions` | Required | Array of [BuyerAction](../models/BuyerAction.md#buyeraction) | Whether the buyer can release this activation. `buyer_actions[]`: [field definitions](../models/OrderResponse.md#orderresponsedatabuyer_actions). |
| `created_at` | Required | string | When the activation was created. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `last_validated_at` | Required | string or null | When the activation was last checked, updated at most once an hour. Null when the activation has never been checked. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `license_key_activation_id` | Required | string | The activation ID. Example: `"lka_01KEZF7C00NZEZVCZW3SRDMHTZ"`. |
| `license_key_id` | Required | string | The activated license key ID. Example: `"lk_01KEZF7C000QD7VJ83G43V0NSN"`. |
| `name` | Required | string or null | The name supplied by the app. Null when erased. |
| `product_id` | Required | string | The product this installation can use. Example: `"prod_01KEZF7C00BVSHCNWVH528HB66"`. |
| `released_at` | Required | string or null | When the activation was released. Null when it is active. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `status` | Required | string | The activation state. Values: `"active"`, `"released"`. |
| `variant_id` | Required | string | The variant this installation can use. Example: `"var_01KEZF7C004GSH2KT8CNYVMHGX"`. |

### BuyerLicenseKeyActivationListResponse.data[].buyer_actions[]

Field definitions: [OrderResponse.data.buyer_actions[]](../models/OrderResponse.md#orderresponsedatabuyer_actions).

### BuyerLicenseKeyActivationListResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

