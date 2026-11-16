[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PayoutDestinationArchivedMerchantEventDataPreviousAttributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `available_payout_methods` | Optional | Array of string or null | Payout methods available through Flint for this destination. Only standard is currently available. Items values: `"standard"`. `available_payout_methods`: [declared alternatives](../models/PayoutDestinationArchivedMerchantEventDataPreviousAttributes.md#payoutdestinationarchivedmerchanteventdatapreviousattributesavailable_payout_methods). |
| `bank_name` | Optional | string or null | Name of the bank, when your processor reports it. `bank_name`: [declared alternatives](../models/PayoutDestinationArchivedMerchantEventDataPreviousAttributes.md#payoutdestinationarchivedmerchanteventdatapreviousattributesbank_name). |
| `country` | Optional | string or null | ISO 3166-1 alpha-2 country code. `country`: [declared alternatives](../models/PayoutDestinationArchivedMerchantEventDataPreviousAttributes.md#payoutdestinationarchivedmerchanteventdatapreviousattributescountry). |
| `created_at` | Optional | string or null | When the destination was added. `created_at`: [declared alternatives](../models/PayoutDestinationArchivedMerchantEventDataPreviousAttributes.md#payoutdestinationarchivedmerchanteventdatapreviousattributescreated_at). |
| `currency` | Optional | string or null | ISO 4217 currency code. `currency`: [declared alternatives](../models/MerchantBillingBalanceUpdatedEvent.md#merchantbillingbalanceupdatedeventdata-fields-1previous_attributescurrency). |
| `disabled_at` | Optional | string or null | When the destination was last disabled or archived. Absent if it never was. `disabled_at`: [declared alternatives](../models/PayoutDestinationArchivedMerchantEventDataPreviousAttributes.md#payoutdestinationarchivedmerchanteventdatapreviousattributesdisabled_at). |
| `disabled_reason` | Optional | string or null | Flint-normalized reason the payout destination cannot currently be used. Unknown provider/backend values are returned as destination_unavailable. Values: [7 declared values](#payoutdestinationarchivedmerchanteventdatapreviousattributes-disabled_reason-values). `disabled_reason`: [declared alternatives](../models/PayoutDestinationArchivedMerchantEventDataPreviousAttributes.md#payoutdestinationarchivedmerchanteventdatapreviousattributesdisabled_reason). |
| `is_default_for_currency` | Optional | boolean or null | Whether this is the default destination for its currency. Scheduled payouts, and payouts created without payout_destination_id, go to the default, and only an active destination can be it. `is_default_for_currency`: [declared alternatives](../models/PayoutDestinationArchivedMerchantEventDataPreviousAttributes.md#payoutdestinationarchivedmerchanteventdatapreviousattributesis_default_for_currency). |
| `last4` | Optional | string or null | Last four digits of the account or card number. `last4`: [declared alternatives](../models/PayoutDestinationArchivedMerchantEventDataPreviousAttributes.md#payoutdestinationarchivedmerchanteventdatapreviousattributeslast4). |
| `merchant_id` | Optional | string or null | Merchant that owns the destination. `merchant_id`: [declared alternatives](../models/PayoutDestinationArchivedMerchantEventDataPreviousAttributes.md#payoutdestinationarchivedmerchanteventdatapreviousattributesmerchant_id). |
| `metadata` | Optional | Map of string or null | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. `metadata`: [declared alternatives](../models/ModifierGroupArchivedMerchantEventDataPreviousAttributes.md#modifiergrouparchivedmerchanteventdatapreviousattributesmetadata). |
| `payout_destination_id` | Optional | string or null | Stable identifier of the payout destination. `payout_destination_id`: [declared alternatives](../models/PayoutDestinationArchivedMerchantEventDataPreviousAttributes.md#payoutdestinationarchivedmerchanteventdatapreviousattributespayout_destination_id). |
| `status` | Optional | string or null | Current status. Archived: deleted, and still readable by ID. Values: `"pending"`, `"active"`, `"verification_required"`, `"disabled"`, `"archived"`, `"failed"`. `status`: [declared alternatives](../models/PayoutDestinationArchivedMerchantEventDataPreviousAttributes.md#payoutdestinationarchivedmerchanteventdatapreviousattributesstatus). |
| `status_updated_at` | Optional | string or null | When Flint last recorded the destination's status. `status_updated_at`: [declared alternatives](../models/PayoutDestinationArchivedMerchantEventDataPreviousAttributes.md#payoutdestinationarchivedmerchanteventdatapreviousattributesstatus_updated_at). |
| `type` | Optional | string or null | Destination type. Unmapped destination types are returned as other. Values: `"bank_account"`, `"debit_card"`, `"other"`. `type`: [declared alternatives](../models/PayoutDestinationArchivedMerchantEventDataPreviousAttributes.md#payoutdestinationarchivedmerchanteventdatapreviousattributestype). |
| `updated_at` | Optional | string or null | When the destination last changed. `updated_at`: [declared alternatives](../models/PayoutDestinationArchivedMerchantEventDataPreviousAttributes.md#payoutdestinationarchivedmerchanteventdatapreviousattributesupdated_at). |
| `version` | Optional | integer or null | Persisted version of this resource's owned state. Expanded resources and external observations can change independently. `version`: [declared alternatives](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdata-fields-1previous_attributesversion). |

#### PayoutDestinationArchivedMerchantEventDataPreviousAttributes disabled_reason values

- `"destination_disabled"`
- `"destination_removed"`
- `"destination_unavailable"`
- `"destination_rejected"`
- `"destination_under_review"`
- `"requirements_past_due"`
- `"requirements_pending_verification"`

### PayoutDestinationArchivedMerchantEventDataPreviousAttributes.available_payout_methods

### PayoutDestinationArchivedMerchantEventDataPreviousAttributes.available_payout_methods variant 1

anyOf variant 1: Payout methods available through Flint for this destination. Only standard is currently available..

- Value shape: Array of string. Payout methods available through Flint for this destination. Only standard is currently available. Items values: `"standard"`.

### PayoutDestinationArchivedMerchantEventDataPreviousAttributes.available_payout_methods variant 2

anyOf variant 2.

- Value shape: null. Payout methods available through Flint for this destination. Only standard is currently available. 

### PayoutDestinationArchivedMerchantEventDataPreviousAttributes.bank_name

### PayoutDestinationArchivedMerchantEventDataPreviousAttributes.bank_name variant 1

anyOf variant 1: Name of the bank, when your processor reports it..

- Value shape: string. Name of the bank, when your processor reports it. 

### PayoutDestinationArchivedMerchantEventDataPreviousAttributes.bank_name variant 2

anyOf variant 2.

- Value shape: null. Name of the bank, when your processor reports it. 

### PayoutDestinationArchivedMerchantEventDataPreviousAttributes.country

### PayoutDestinationArchivedMerchantEventDataPreviousAttributes.country variant 1

anyOf variant 1: ISO 3166-1 alpha-2 country code..

- Value shape: string. ISO 3166-1 alpha-2 country code. ISO 3166-1 alpha-2 country code. minLength: `2`. maxLength: `2`. pattern: `^[A-Z]{2}$`. 

### PayoutDestinationArchivedMerchantEventDataPreviousAttributes.country variant 2

anyOf variant 2.

- Value shape: null. ISO 3166-1 alpha-2 country code. 

### PayoutDestinationArchivedMerchantEventDataPreviousAttributes.created_at

### PayoutDestinationArchivedMerchantEventDataPreviousAttributes.created_at variant 1

anyOf variant 1: When the destination was added..

- Value shape: string. When the destination was added. When the destination was added. Format: `date-time`. 

### PayoutDestinationArchivedMerchantEventDataPreviousAttributes.created_at variant 2

anyOf variant 2.

- Value shape: null. When the destination was added. 

### PayoutDestinationArchivedMerchantEventDataPreviousAttributes.currency

Declared alternatives: [MerchantBillingBalanceUpdatedEvent.data fields 1.previous_attributes.currency](../models/MerchantBillingBalanceUpdatedEvent.md#merchantbillingbalanceupdatedeventdata-fields-1previous_attributescurrency).

### PayoutDestinationArchivedMerchantEventDataPreviousAttributes.disabled_at

### PayoutDestinationArchivedMerchantEventDataPreviousAttributes.disabled_at variant 1

anyOf variant 1: When the destination was last disabled or archived. Absent if it never was..

- Value shape: string. When the destination was last disabled or archived. Absent if it never was. When the destination was last disabled or archived. Absent if it never was. Format: `date-time`. 

### PayoutDestinationArchivedMerchantEventDataPreviousAttributes.disabled_at variant 2

anyOf variant 2.

- Value shape: null. When the destination was last disabled or archived. Absent if it never was. 

### PayoutDestinationArchivedMerchantEventDataPreviousAttributes.disabled_reason

### PayoutDestinationArchivedMerchantEventDataPreviousAttributes.disabled_reason variant 1

anyOf variant 1: Flint-normalized reason the payout destination cannot currently be used. Unknown provider/backend values are returned as destination_unavailable..

- Value shape: string. Flint-normalized reason the payout destination cannot currently be used. Unknown provider/backend values are returned as destination_unavailable. Values: `"destination_disabled"`, `"destination_removed"`, `"destination_unavailable"`, `"destination_rejected"`, `"destination_under_review"`, `"requirements_past_due"`, `"requirements_pending_verification"`.

### PayoutDestinationArchivedMerchantEventDataPreviousAttributes.disabled_reason variant 2

anyOf variant 2.

- Value shape: null. Flint-normalized reason the payout destination cannot currently be used. Unknown provider/backend values are returned as destination_unavailable. 

### PayoutDestinationArchivedMerchantEventDataPreviousAttributes.is_default_for_currency

### PayoutDestinationArchivedMerchantEventDataPreviousAttributes.is_default_for_currency variant 1

anyOf variant 1: Whether this is the default destination for its currency. Scheduled payouts, and payouts created without payout_destination_id, go to the default, and only an active destination can be it..

- Value shape: boolean. Whether this is the default destination for its currency. Scheduled payouts, and payouts created without payout_destination_id, go to the default, and only an active destination can be it. 

### PayoutDestinationArchivedMerchantEventDataPreviousAttributes.is_default_for_currency variant 2

anyOf variant 2.

- Value shape: null. Whether this is the default destination for its currency. Scheduled payouts, and payouts created without payout_destination_id, go to the default, and only an active destination can be it. 

### PayoutDestinationArchivedMerchantEventDataPreviousAttributes.last4

### PayoutDestinationArchivedMerchantEventDataPreviousAttributes.last4 variant 1

anyOf variant 1: Last four digits of the account or card number..

- Value shape: string. Last four digits of the account or card number. 

### PayoutDestinationArchivedMerchantEventDataPreviousAttributes.last4 variant 2

anyOf variant 2.

- Value shape: null. Last four digits of the account or card number. 

### PayoutDestinationArchivedMerchantEventDataPreviousAttributes.merchant_id

### PayoutDestinationArchivedMerchantEventDataPreviousAttributes.merchant_id variant 1

anyOf variant 1: Merchant that owns the destination..

- Value shape: string. Merchant that owns the destination. 

### PayoutDestinationArchivedMerchantEventDataPreviousAttributes.merchant_id variant 2

anyOf variant 2.

- Value shape: null. Merchant that owns the destination. 

### PayoutDestinationArchivedMerchantEventDataPreviousAttributes.metadata

Declared alternatives: [ModifierGroupArchivedMerchantEventDataPreviousAttributes.metadata](../models/ModifierGroupArchivedMerchantEventDataPreviousAttributes.md#modifiergrouparchivedmerchanteventdatapreviousattributesmetadata).

### PayoutDestinationArchivedMerchantEventDataPreviousAttributes.payout_destination_id

### PayoutDestinationArchivedMerchantEventDataPreviousAttributes.payout_destination_id variant 1

anyOf variant 1: Stable identifier of the payout destination..

- Value shape: string. Stable identifier of the payout destination. 

### PayoutDestinationArchivedMerchantEventDataPreviousAttributes.payout_destination_id variant 2

anyOf variant 2.

- Value shape: null. Stable identifier of the payout destination. 

### PayoutDestinationArchivedMerchantEventDataPreviousAttributes.status

### PayoutDestinationArchivedMerchantEventDataPreviousAttributes.status variant 1

anyOf variant 1: Current status. Archived: deleted, and still readable by ID..

- Value shape: string. Current status. Archived: deleted, and still readable by ID. Values: `"pending"`, `"active"`, `"verification_required"`, `"disabled"`, `"archived"`, `"failed"`.

### PayoutDestinationArchivedMerchantEventDataPreviousAttributes.status variant 2

anyOf variant 2.

- Value shape: null. Current status. Archived: deleted, and still readable by ID. 

### PayoutDestinationArchivedMerchantEventDataPreviousAttributes.status_updated_at

### PayoutDestinationArchivedMerchantEventDataPreviousAttributes.status_updated_at variant 1

anyOf variant 1: When Flint last recorded the destination's status..

- Value shape: string. When Flint last recorded the destination's status. When Flint last recorded the destination's status. Format: `date-time`. 

### PayoutDestinationArchivedMerchantEventDataPreviousAttributes.status_updated_at variant 2

anyOf variant 2.

- Value shape: null. When Flint last recorded the destination's status. 

### PayoutDestinationArchivedMerchantEventDataPreviousAttributes.type

### PayoutDestinationArchivedMerchantEventDataPreviousAttributes.type variant 1

anyOf variant 1: Destination type. Unmapped destination types are returned as other..

- Value shape: string. Destination type. Unmapped destination types are returned as other. Values: `"bank_account"`, `"debit_card"`, `"other"`.

### PayoutDestinationArchivedMerchantEventDataPreviousAttributes.type variant 2

anyOf variant 2.

- Value shape: null. Destination type. Unmapped destination types are returned as other. 

### PayoutDestinationArchivedMerchantEventDataPreviousAttributes.updated_at

### PayoutDestinationArchivedMerchantEventDataPreviousAttributes.updated_at variant 1

anyOf variant 1: When the destination last changed..

- Value shape: string. When the destination last changed. When the destination last changed. Format: `date-time`. 

### PayoutDestinationArchivedMerchantEventDataPreviousAttributes.updated_at variant 2

anyOf variant 2.

- Value shape: null. When the destination last changed. 

### PayoutDestinationArchivedMerchantEventDataPreviousAttributes.version

Declared alternatives: [PaymentSplitCanceledEvent.data fields 1.previous_attributes.version](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdata-fields-1previous_attributesversion).

