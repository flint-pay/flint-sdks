[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ExpandedPayoutDestinationSummaryPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `available_payout_methods` | Optional | Array of string or null | Payout methods available through Flint for this destination. Only standard is currently available. Items values: `"standard"`. `available_payout_methods`: [declared alternatives](../models/ExpandedPayoutDestinationSummaryPreviousAttributes.md#expandedpayoutdestinationsummarypreviousattributesavailable_payout_methods). |
| `bank_name` | Optional | string or null | Name of the bank, when your processor reports it. `bank_name`: [declared alternatives](../models/ExpandedPayoutDestinationSummaryPreviousAttributes.md#expandedpayoutdestinationsummarypreviousattributesbank_name). |
| `country` | Optional | string or null | ISO 3166-1 alpha-2 country code. `country`: [declared alternatives](../models/AddressPreviousAttributes.md#addresspreviousattributescountry). |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at). |
| `currency` | Optional | string or null | ISO 4217 currency code. `currency`: [declared alternatives](../models/BalanceTransactionUpdatedInstalledMerchantsEvent.md#balancetransactionupdatedinstalledmerchantseventdataprevious_attributescurrency). |
| `is_default_for_currency` | Optional | boolean or null | Whether this is the default destination for its currency. Scheduled payouts, and payouts created without payout_destination_id, go to the default, and only an active destination can be it. `is_default_for_currency`: [declared alternatives](../models/ExpandedPayoutDestinationSummaryPreviousAttributes.md#expandedpayoutdestinationsummarypreviousattributesis_default_for_currency). |
| `last4` | Optional | string or null | Last four digits of the account or card number. `last4`: [declared alternatives](../models/ExpandedPayoutDestinationSummaryPreviousAttributes.md#expandedpayoutdestinationsummarypreviousattributeslast4). |
| `payout_destination_id` | Optional | string or null | Unique identifier for this payout destination, prefixed `pdest_`. `payout_destination_id`: [declared alternatives](../models/ExpandedPayoutDestinationSummaryPreviousAttributes.md#expandedpayoutdestinationsummarypreviousattributespayout_destination_id). |
| `status` | Optional | string or null | Current status. Archived: deleted, and still readable by ID. Values: `"pending"`, `"active"`, `"verification_required"`, `"disabled"`, `"archived"`, `"failed"`. `status`: [declared alternatives](../models/ExpandedPayoutDestinationSummaryPreviousAttributes.md#expandedpayoutdestinationsummarypreviousattributesstatus). |
| `type` | Optional | string or null | Destination type. Unmapped destination types are returned as other. Values: `"bank_account"`, `"debit_card"`, `"other"`. `type`: [declared alternatives](../models/ExpandedPayoutDestinationSummaryPreviousAttributes.md#expandedpayoutdestinationsummarypreviousattributestype). |
| `updated_at` | Optional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at). |
| `version` | Optional | integer or null | Persisted version of this resource's owned state. Expanded resources and external observations can change independently. `version`: [declared alternatives](../models/BuyerExpandedPaymentIntentSummaryPreviousAttributes.md#buyerexpandedpaymentintentsummarypreviousattributesversion). |

### ExpandedPayoutDestinationSummaryPreviousAttributes.available_payout_methods

### ExpandedPayoutDestinationSummaryPreviousAttributes.available_payout_methods variant 1

anyOf variant 1: Payout methods available through Flint for this destination. Only standard is currently available..

- Value shape: Array of string. Payout methods available through Flint for this destination. Only standard is currently available. Items values: `"standard"`.

### ExpandedPayoutDestinationSummaryPreviousAttributes.available_payout_methods variant 2

anyOf variant 2.

- Value shape: null. Payout methods available through Flint for this destination. Only standard is currently available. 

### ExpandedPayoutDestinationSummaryPreviousAttributes.bank_name

### ExpandedPayoutDestinationSummaryPreviousAttributes.bank_name variant 1

anyOf variant 1: Name of the bank, when your processor reports it..

- Value shape: string. Name of the bank, when your processor reports it. 

### ExpandedPayoutDestinationSummaryPreviousAttributes.bank_name variant 2

anyOf variant 2.

- Value shape: null. Name of the bank, when your processor reports it. 

### ExpandedPayoutDestinationSummaryPreviousAttributes.country

Declared alternatives: [AddressPreviousAttributes.country](../models/AddressPreviousAttributes.md#addresspreviousattributescountry).

### ExpandedPayoutDestinationSummaryPreviousAttributes.created_at

Declared alternatives: [ApiKeyRevokedEvent.data.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at).

### ExpandedPayoutDestinationSummaryPreviousAttributes.currency

Declared alternatives: [BalanceTransactionUpdatedInstalledMerchantsEvent.data.previous_attributes.currency](../models/BalanceTransactionUpdatedInstalledMerchantsEvent.md#balancetransactionupdatedinstalledmerchantseventdataprevious_attributescurrency).

### ExpandedPayoutDestinationSummaryPreviousAttributes.is_default_for_currency

### ExpandedPayoutDestinationSummaryPreviousAttributes.is_default_for_currency variant 1

anyOf variant 1: Whether this is the default destination for its currency. Scheduled payouts, and payouts created without payout_destination_id, go to the default, and only an active destination can be it..

- Value shape: boolean. Whether this is the default destination for its currency. Scheduled payouts, and payouts created without payout_destination_id, go to the default, and only an active destination can be it. 

### ExpandedPayoutDestinationSummaryPreviousAttributes.is_default_for_currency variant 2

anyOf variant 2.

- Value shape: null. Whether this is the default destination for its currency. Scheduled payouts, and payouts created without payout_destination_id, go to the default, and only an active destination can be it. 

### ExpandedPayoutDestinationSummaryPreviousAttributes.last4

### ExpandedPayoutDestinationSummaryPreviousAttributes.last4 variant 1

anyOf variant 1: Last four digits of the account or card number..

- Value shape: string. Last four digits of the account or card number. 

### ExpandedPayoutDestinationSummaryPreviousAttributes.last4 variant 2

anyOf variant 2.

- Value shape: null. Last four digits of the account or card number. 

### ExpandedPayoutDestinationSummaryPreviousAttributes.payout_destination_id

### ExpandedPayoutDestinationSummaryPreviousAttributes.payout_destination_id variant 1

anyOf variant 1: Unique identifier for this payout destination, prefixed `pdest_`..

- Value shape: string. Unique identifier for this payout destination, prefixed `pdest_`. Unique identifier for this payout destination, prefixed `pdest_`. Example: `"pdest_01KEZF7C00M55HZDZXZP6YVE6B"`. 

### ExpandedPayoutDestinationSummaryPreviousAttributes.payout_destination_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this payout destination, prefixed `pdest_`. 

### ExpandedPayoutDestinationSummaryPreviousAttributes.status

### ExpandedPayoutDestinationSummaryPreviousAttributes.status variant 1

anyOf variant 1: Current status. Archived: deleted, and still readable by ID..

- Value shape: string. Current status. Archived: deleted, and still readable by ID. Values: `"pending"`, `"active"`, `"verification_required"`, `"disabled"`, `"archived"`, `"failed"`.

### ExpandedPayoutDestinationSummaryPreviousAttributes.status variant 2

anyOf variant 2.

- Value shape: null. Current status. Archived: deleted, and still readable by ID. 

### ExpandedPayoutDestinationSummaryPreviousAttributes.type

### ExpandedPayoutDestinationSummaryPreviousAttributes.type variant 1

anyOf variant 1: Destination type. Unmapped destination types are returned as other..

- Value shape: string. Destination type. Unmapped destination types are returned as other. Values: `"bank_account"`, `"debit_card"`, `"other"`.

### ExpandedPayoutDestinationSummaryPreviousAttributes.type variant 2

anyOf variant 2.

- Value shape: null. Destination type. Unmapped destination types are returned as other. 

### ExpandedPayoutDestinationSummaryPreviousAttributes.updated_at

Declared alternatives: [ApiKeyRevokedEvent.data.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at).

### ExpandedPayoutDestinationSummaryPreviousAttributes.version

Declared alternatives: [BuyerExpandedPaymentIntentSummaryPreviousAttributes.version](../models/BuyerExpandedPaymentIntentSummaryPreviousAttributes.md#buyerexpandedpaymentintentsummarypreviousattributesversion).

