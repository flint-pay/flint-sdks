[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ExpandedPayoutDestinationSummaryPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `available_payout_methods` | Optional | Array of string or null | Payout methods available through Flint for this destination. Only standard is currently available. Items values: `"standard"`. `available_payout_methods`: [declared alternatives](../models/ExpandedPayoutDestinationSummaryPreviousAttributesInput.md#expandedpayoutdestinationsummarypreviousattributesinputavailable_payout_methods). |
| `bank_name` | Optional | string or null | Name of the bank, when your processor reports it. `bank_name`: [declared alternatives](../models/ExpandedPayoutDestinationSummaryPreviousAttributesInput.md#expandedpayoutdestinationsummarypreviousattributesinputbank_name). |
| `country` | Optional | string or null | ISO 3166-1 alpha-2 country code. `country`: [declared alternatives](../models/AddressPreviousAttributesInput.md#addresspreviousattributesinputcountry). |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at). |
| `currency` | Optional | string or null | ISO 4217 currency code. `currency`: [declared alternatives](../models/BalanceTransactionUpdatedInstalledMerchantsEventInput.md#balancetransactionupdatedinstalledmerchantseventinputdataprevious_attributescurrency). |
| `is_default_for_currency` | Optional | boolean or null | Whether this is the default destination for its currency. Scheduled payouts, and payouts created without payout_destination_id, go to the default, and only an active destination can be it. `is_default_for_currency`: [declared alternatives](../models/ExpandedPayoutDestinationSummaryPreviousAttributesInput.md#expandedpayoutdestinationsummarypreviousattributesinputis_default_for_currency). |
| `last4` | Optional | string or null | Last four digits of the account or card number. `last4`: [declared alternatives](../models/ExpandedPayoutDestinationSummaryPreviousAttributesInput.md#expandedpayoutdestinationsummarypreviousattributesinputlast4). |
| `payout_destination_id` | Optional | string or null | Unique identifier for this payout destination, prefixed `pdest_`. `payout_destination_id`: [declared alternatives](../models/ExpandedPayoutDestinationSummaryPreviousAttributesInput.md#expandedpayoutdestinationsummarypreviousattributesinputpayout_destination_id). |
| `status` | Optional | string or null | Current status. Archived: deleted, and still readable by ID. Values: `"pending"`, `"active"`, `"verification_required"`, `"disabled"`, `"archived"`, `"failed"`. `status`: [declared alternatives](../models/ExpandedPayoutDestinationSummaryPreviousAttributesInput.md#expandedpayoutdestinationsummarypreviousattributesinputstatus). |
| `type` | Optional | string or null | Destination type. Unmapped destination types are returned as other. Values: `"bank_account"`, `"debit_card"`, `"other"`. `type`: [declared alternatives](../models/ExpandedPayoutDestinationSummaryPreviousAttributesInput.md#expandedpayoutdestinationsummarypreviousattributesinputtype). |
| `updated_at` | Optional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at). |
| `version` | Optional | integer or null | Persisted version of this resource's owned state. Expanded resources and external observations can change independently. `version`: [declared alternatives](../models/BuyerExpandedPaymentIntentSummaryPreviousAttributesInput.md#buyerexpandedpaymentintentsummarypreviousattributesinputversion). |

### ExpandedPayoutDestinationSummaryPreviousAttributesInput.available_payout_methods

### ExpandedPayoutDestinationSummaryPreviousAttributesInput.available_payout_methods variant 1

anyOf variant 1: Payout methods available through Flint for this destination. Only standard is currently available..

- Value shape: Array of string. Payout methods available through Flint for this destination. Only standard is currently available. Items values: `"standard"`.

### ExpandedPayoutDestinationSummaryPreviousAttributesInput.available_payout_methods variant 2

anyOf variant 2.

- Value shape: null. Payout methods available through Flint for this destination. Only standard is currently available. 

### ExpandedPayoutDestinationSummaryPreviousAttributesInput.bank_name

### ExpandedPayoutDestinationSummaryPreviousAttributesInput.bank_name variant 1

anyOf variant 1: Name of the bank, when your processor reports it..

- Value shape: string. Name of the bank, when your processor reports it. 

### ExpandedPayoutDestinationSummaryPreviousAttributesInput.bank_name variant 2

anyOf variant 2.

- Value shape: null. Name of the bank, when your processor reports it. 

### ExpandedPayoutDestinationSummaryPreviousAttributesInput.country

Declared alternatives: [AddressPreviousAttributesInput.country](../models/AddressPreviousAttributesInput.md#addresspreviousattributesinputcountry).

### ExpandedPayoutDestinationSummaryPreviousAttributesInput.created_at

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.created_at](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at).

### ExpandedPayoutDestinationSummaryPreviousAttributesInput.currency

Declared alternatives: [BalanceTransactionUpdatedInstalledMerchantsEventInput.data.previous_attributes.currency](../models/BalanceTransactionUpdatedInstalledMerchantsEventInput.md#balancetransactionupdatedinstalledmerchantseventinputdataprevious_attributescurrency).

### ExpandedPayoutDestinationSummaryPreviousAttributesInput.is_default_for_currency

### ExpandedPayoutDestinationSummaryPreviousAttributesInput.is_default_for_currency variant 1

anyOf variant 1: Whether this is the default destination for its currency. Scheduled payouts, and payouts created without payout_destination_id, go to the default, and only an active destination can be it..

- Value shape: boolean. Whether this is the default destination for its currency. Scheduled payouts, and payouts created without payout_destination_id, go to the default, and only an active destination can be it. 

### ExpandedPayoutDestinationSummaryPreviousAttributesInput.is_default_for_currency variant 2

anyOf variant 2.

- Value shape: null. Whether this is the default destination for its currency. Scheduled payouts, and payouts created without payout_destination_id, go to the default, and only an active destination can be it. 

### ExpandedPayoutDestinationSummaryPreviousAttributesInput.last4

### ExpandedPayoutDestinationSummaryPreviousAttributesInput.last4 variant 1

anyOf variant 1: Last four digits of the account or card number..

- Value shape: string. Last four digits of the account or card number. 

### ExpandedPayoutDestinationSummaryPreviousAttributesInput.last4 variant 2

anyOf variant 2.

- Value shape: null. Last four digits of the account or card number. 

### ExpandedPayoutDestinationSummaryPreviousAttributesInput.payout_destination_id

### ExpandedPayoutDestinationSummaryPreviousAttributesInput.payout_destination_id variant 1

anyOf variant 1: Unique identifier for this payout destination, prefixed `pdest_`..

- Value shape: string. Unique identifier for this payout destination, prefixed `pdest_`. Unique identifier for this payout destination, prefixed `pdest_`. Example: `"pdest_01KEZF7C00M55HZDZXZP6YVE6B"`. 

### ExpandedPayoutDestinationSummaryPreviousAttributesInput.payout_destination_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this payout destination, prefixed `pdest_`. 

### ExpandedPayoutDestinationSummaryPreviousAttributesInput.status

### ExpandedPayoutDestinationSummaryPreviousAttributesInput.status variant 1

anyOf variant 1: Current status. Archived: deleted, and still readable by ID..

- Value shape: string. Current status. Archived: deleted, and still readable by ID. Values: `"pending"`, `"active"`, `"verification_required"`, `"disabled"`, `"archived"`, `"failed"`.

### ExpandedPayoutDestinationSummaryPreviousAttributesInput.status variant 2

anyOf variant 2.

- Value shape: null. Current status. Archived: deleted, and still readable by ID. 

### ExpandedPayoutDestinationSummaryPreviousAttributesInput.type

### ExpandedPayoutDestinationSummaryPreviousAttributesInput.type variant 1

anyOf variant 1: Destination type. Unmapped destination types are returned as other..

- Value shape: string. Destination type. Unmapped destination types are returned as other. Values: `"bank_account"`, `"debit_card"`, `"other"`.

### ExpandedPayoutDestinationSummaryPreviousAttributesInput.type variant 2

anyOf variant 2.

- Value shape: null. Destination type. Unmapped destination types are returned as other. 

### ExpandedPayoutDestinationSummaryPreviousAttributesInput.updated_at

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.created_at](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at).

### ExpandedPayoutDestinationSummaryPreviousAttributesInput.version

Declared alternatives: [BuyerExpandedPaymentIntentSummaryPreviousAttributesInput.version](../models/BuyerExpandedPaymentIntentSummaryPreviousAttributesInput.md#buyerexpandedpaymentintentsummarypreviousattributesinputversion).

