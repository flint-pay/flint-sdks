[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PayoutDestinationResponse

A response containing `PayoutDestination` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [PayoutDestination](../models/PayoutDestination.md#payoutdestination) | The account that receives merchant payouts. `data`: [field definitions](../models/PayoutDestinationResponse.md#payoutdestinationresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Required | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### PayoutDestinationResponse.data

The account that receives merchant payouts.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `available_payout_methods` | Required | Array of string | Payout methods available through Flint for this destination. Only standard is currently available. Items values: `"standard"`. |
| `bank_name` | Optional | string | Name of the bank, when your processor reports it. |
| `country` | Optional | string | ISO 3166-1 alpha-2 country code. minLength: `2`. maxLength: `2`. pattern: `^[A-Z]{2}$`. Example: `"US"`. |
| `created_at` | Required | string | When the destination was added. Format: `date-time`. |
| `currency` | Required | string | ISO 4217 currency code. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. Example: `"USD"`. |
| `default_for_currency` | Required | boolean | Whether this is the default destination for its currency. Scheduled payouts, and payouts created without payout_destination_id, go to the default, and only an active destination can be it. |
| `disabled_at` | Optional | string | When the destination was last disabled or archived. Absent if it never was. Format: `date-time`. |
| `disabled_reason` | Optional | string | Flint-normalized reason the payout destination cannot currently be used. Unknown provider/backend values are returned as destination_unavailable. Values: [9 declared values](PayoutDestinationInput.md#payoutdestinationinput-disabled_reason-values). |
| `last4` | Optional | string | Last four digits of the account or card number. |
| `merchant_id` | Required | string | Merchant that owns the destination. |
| `metadata` | Optional | Map of string | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. `metadata`: [field definitions](../models/PayoutResponse.md#payoutresponsedatametadata). |
| `payout_destination_id` | Required | string | Stable identifier of the payout destination. |
| `status` | Required | string | Current status. Archived: deleted, and still readable by ID. Values: `"pending"`, `"active"`, `"verification_required"`, `"disabled"`, `"archived"`, `"failed"`. |
| `status_updated_at` | Optional | string | When Flint last recorded the destination's status. Format: `date-time`. |
| `type` | Required | string | Destination type. Unmapped destination types are returned as other. Values: `"bank_account"`, `"debit_card"`, `"other"`. |
| `updated_at` | Required | string | When the destination last changed. Format: `date-time`. |
| `version` | Required | integer | Persisted version of this resource's owned state. Expanded resources and external observations can change independently. Format: `uint64`. minimum: `1`. |

### PayoutDestinationResponse.data.metadata

Field definitions: [PayoutResponse.data.metadata](../models/PayoutResponse.md#payoutresponsedatametadata).

