[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PayoutDestinationArchivedMerchantEventDataPreviousAttributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `available_payout_methods` | Optional | Array of string or null | Payout methods available through Flint for this destination. Only standard is currently available. Items values: `"standard"`. `available_payout_methods`: [declared alternatives](../models/PayoutCanceledMerchantEventDataPreviousAttributes.md#payoutcanceledmerchanteventdatapreviousattributespayout_destination-variant-1available_payout_methods). |
| `bank_name` | Optional | string or null | Name of the bank, when your processor reports it. `bank_name`: [declared alternatives](../models/PayoutCanceledMerchantEventDataPreviousAttributes.md#payoutcanceledmerchanteventdatapreviousattributespayout_destination-variant-1bank_name). |
| `country` | Optional | string or null | ISO 3166-1 alpha-2 country code. `country`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessnapshot-variant-1charges-variant-1-fields-1tax-variant-1calculation-variant-1components-variant-1-fields-1jurisdiction-variant-1country). |
| `created_at` | Optional | string or null | When the destination was added. `created_at`: [declared alternatives](../models/PayoutDestinationArchivedMerchantEventDataPreviousAttributes.md#payoutdestinationarchivedmerchanteventdatapreviousattributescreated_at). |
| `currency` | Optional | string or null | ISO 4217 currency code. `currency`: [declared alternatives](../models/MerchantBillingBalanceUpdatedEvent.md#merchantbillingbalanceupdatedeventdata-fields-1previous_attributescurrency). |
| `disabled_at` | Optional | string or null | When the destination was last disabled or archived. Absent if it never was. `disabled_at`: [declared alternatives](../models/PayoutDestinationArchivedMerchantEventDataPreviousAttributes.md#payoutdestinationarchivedmerchanteventdatapreviousattributesdisabled_at). |
| `disabled_reason` | Optional | string or null | Flint-normalized reason the payout destination cannot currently be used. Unknown provider/backend values are returned as destination_unavailable. Values: [7 declared values](#payoutdestinationarchivedmerchanteventdatapreviousattributes-disabled_reason-values). `disabled_reason`: [declared alternatives](../models/PayoutDestinationArchivedMerchantEventDataPreviousAttributes.md#payoutdestinationarchivedmerchanteventdatapreviousattributesdisabled_reason). |
| `is_default_for_currency` | Optional | boolean or null | Whether this is the default destination for its currency. Scheduled payouts, and payouts created without payout_destination_id, go to the default, and only an active destination can be it. `is_default_for_currency`: [declared alternatives](../models/PayoutCanceledMerchantEventDataPreviousAttributes.md#payoutcanceledmerchanteventdatapreviousattributespayout_destination-variant-1is_default_for_currency). |
| `last4` | Optional | string or null | Last four digits of the account or card number. `last4`: [declared alternatives](../models/PayoutCanceledMerchantEventDataPreviousAttributes.md#payoutcanceledmerchanteventdatapreviousattributespayout_destination-variant-1last4). |
| `merchant_id` | Optional | string or null | Merchant that owns the destination. `merchant_id`: [declared alternatives](../models/PayoutDestinationArchivedMerchantEventDataPreviousAttributes.md#payoutdestinationarchivedmerchanteventdatapreviousattributesmerchant_id). |
| `metadata` | Optional | Map of string or null | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. `metadata`: [declared alternatives](../models/OrderLineItemModifierPreviousAttributes.md#orderlineitemmodifierpreviousattributesmetadata). |
| `payout_destination_id` | Optional | string or null | Stable identifier of the payout destination. `payout_destination_id`: [declared alternatives](../models/PayoutDestinationArchivedMerchantEventDataPreviousAttributes.md#payoutdestinationarchivedmerchanteventdatapreviousattributespayout_destination_id). |
| `status` | Optional | string or null | Current status. Archived: deleted, and still readable by ID. Values: `"pending"`, `"active"`, `"verification_required"`, `"disabled"`, `"archived"`, `"failed"`. `status`: [declared alternatives](../models/PayoutCanceledMerchantEventDataPreviousAttributes.md#payoutcanceledmerchanteventdatapreviousattributespayout_destination-variant-1status). |
| `status_updated_at` | Optional | string or null | When Flint last recorded the destination's status. `status_updated_at`: [declared alternatives](../models/PayoutDestinationArchivedMerchantEventDataPreviousAttributes.md#payoutdestinationarchivedmerchanteventdatapreviousattributesstatus_updated_at). |
| `type` | Optional | string or null | Destination type. Unmapped destination types are returned as other. Values: `"bank_account"`, `"debit_card"`, `"other"`. `type`: [declared alternatives](../models/PayoutCanceledMerchantEventDataPreviousAttributes.md#payoutcanceledmerchanteventdatapreviousattributespayout_destination-variant-1type). |
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

Declared alternatives: [PayoutCanceledMerchantEventDataPreviousAttributes.payout_destination variant 1.available_payout_methods](../models/PayoutCanceledMerchantEventDataPreviousAttributes.md#payoutcanceledmerchanteventdatapreviousattributespayout_destination-variant-1available_payout_methods).

### PayoutDestinationArchivedMerchantEventDataPreviousAttributes.bank_name

Declared alternatives: [PayoutCanceledMerchantEventDataPreviousAttributes.payout_destination variant 1.bank_name](../models/PayoutCanceledMerchantEventDataPreviousAttributes.md#payoutcanceledmerchanteventdatapreviousattributespayout_destination-variant-1bank_name).

### PayoutDestinationArchivedMerchantEventDataPreviousAttributes.country

Declared alternatives: [InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.charges variant 1.[] fields 1.tax variant 1.calculation variant 1.components variant 1.[] fields 1.jurisdiction variant 1.country](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessnapshot-variant-1charges-variant-1-fields-1tax-variant-1calculation-variant-1components-variant-1-fields-1jurisdiction-variant-1country).

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

Declared alternatives: [PayoutCanceledMerchantEventDataPreviousAttributes.payout_destination variant 1.is_default_for_currency](../models/PayoutCanceledMerchantEventDataPreviousAttributes.md#payoutcanceledmerchanteventdatapreviousattributespayout_destination-variant-1is_default_for_currency).

### PayoutDestinationArchivedMerchantEventDataPreviousAttributes.last4

Declared alternatives: [PayoutCanceledMerchantEventDataPreviousAttributes.payout_destination variant 1.last4](../models/PayoutCanceledMerchantEventDataPreviousAttributes.md#payoutcanceledmerchanteventdatapreviousattributespayout_destination-variant-1last4).

### PayoutDestinationArchivedMerchantEventDataPreviousAttributes.merchant_id

### PayoutDestinationArchivedMerchantEventDataPreviousAttributes.merchant_id variant 1

anyOf variant 1: Merchant that owns the destination..

- Value shape: string. Merchant that owns the destination. 

### PayoutDestinationArchivedMerchantEventDataPreviousAttributes.merchant_id variant 2

anyOf variant 2.

- Value shape: null. Merchant that owns the destination. 

### PayoutDestinationArchivedMerchantEventDataPreviousAttributes.metadata

Declared alternatives: [OrderLineItemModifierPreviousAttributes.metadata](../models/OrderLineItemModifierPreviousAttributes.md#orderlineitemmodifierpreviousattributesmetadata).

### PayoutDestinationArchivedMerchantEventDataPreviousAttributes.payout_destination_id

### PayoutDestinationArchivedMerchantEventDataPreviousAttributes.payout_destination_id variant 1

anyOf variant 1: Stable identifier of the payout destination..

- Value shape: string. Stable identifier of the payout destination. 

### PayoutDestinationArchivedMerchantEventDataPreviousAttributes.payout_destination_id variant 2

anyOf variant 2.

- Value shape: null. Stable identifier of the payout destination. 

### PayoutDestinationArchivedMerchantEventDataPreviousAttributes.status

Declared alternatives: [PayoutCanceledMerchantEventDataPreviousAttributes.payout_destination variant 1.status](../models/PayoutCanceledMerchantEventDataPreviousAttributes.md#payoutcanceledmerchanteventdatapreviousattributespayout_destination-variant-1status).

### PayoutDestinationArchivedMerchantEventDataPreviousAttributes.status_updated_at

### PayoutDestinationArchivedMerchantEventDataPreviousAttributes.status_updated_at variant 1

anyOf variant 1: When Flint last recorded the destination's status..

- Value shape: string. When Flint last recorded the destination's status. When Flint last recorded the destination's status. Format: `date-time`. 

### PayoutDestinationArchivedMerchantEventDataPreviousAttributes.status_updated_at variant 2

anyOf variant 2.

- Value shape: null. When Flint last recorded the destination's status. 

### PayoutDestinationArchivedMerchantEventDataPreviousAttributes.type

Declared alternatives: [PayoutCanceledMerchantEventDataPreviousAttributes.payout_destination variant 1.type](../models/PayoutCanceledMerchantEventDataPreviousAttributes.md#payoutcanceledmerchanteventdatapreviousattributespayout_destination-variant-1type).

### PayoutDestinationArchivedMerchantEventDataPreviousAttributes.updated_at

### PayoutDestinationArchivedMerchantEventDataPreviousAttributes.updated_at variant 1

anyOf variant 1: When the destination last changed..

- Value shape: string. When the destination last changed. When the destination last changed. Format: `date-time`. 

### PayoutDestinationArchivedMerchantEventDataPreviousAttributes.updated_at variant 2

anyOf variant 2.

- Value shape: null. When the destination last changed. 

### PayoutDestinationArchivedMerchantEventDataPreviousAttributes.version

Declared alternatives: [PaymentSplitCanceledEvent.data fields 1.previous_attributes.version](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdata-fields-1previous_attributesversion).

