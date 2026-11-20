[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BalanceUpdatedInstalledMerchantsEventInput

The `balance.updated` webhook payload for the `installed_merchants` event source.

Fields shared by partner webhook payloads.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. Example: `"2026-08-02"`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `data` | Required | object | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/BalanceUpdatedInstalledMerchantsEventInput.md#balanceupdatedinstalledmerchantseventinputdata). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"installed_merchants"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"balance.updated"`. |
| `partner_app_id` | Required | string | ID of the partner app that owns the receiving endpoint. Example: `"papp_01KEZF7C00Y8VMXYZ1GNPP3WHV"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | [PartnerWebhookEnvelopeSourceInput](../models/PartnerWebhookEnvelopeSourceInput.md#partnerwebhookenvelopesourceinput) and object | The merchant and partner app install this event concerns, with environment details for installed-merchant events. The merchant and partner app install the event concerns. Environment fields are present for installed-merchant events. `source`: [field definitions](../models/BalanceTransactionCreatedInstalledMerchantsEventInput.md#balancetransactioncreatedinstalledmerchantseventinputsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. Example: `"whev_01KEZF7C00362MS3HV970TRZGS"`. |

### BalanceUpdatedInstalledMerchantsEventInput.data

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `actor` | Optional | [ReturnActorInput](../models/ReturnActorInput.md#returnactorinput) | Who caused this event, captured when the change commits. Omitted when the event predates actor attribution or attribution is unavailable. Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID. |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. `object`: [field definitions](../models/BalanceUpdatedInstalledMerchantsEventInput.md#balanceupdatedinstalledmerchantseventinputdataobject). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/BalanceUpdatedInstalledMerchantsEventInput.md#balanceupdatedinstalledmerchantseventinputdataprevious_attributes). |

### BalanceUpdatedInstalledMerchantsEventInput.data.object

The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.

Field definitions: [shared fields](BalanceInput.md#balanceinput).

### BalanceUpdatedInstalledMerchantsEventInput.data.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `available_by_source_type` | Optional | Map of [SignedMoneyPreviousAttributesInput](../models/SignedMoneyPreviousAttributesInput.md#signedmoneypreviousattributesinput) or null | Signed available amounts grouped by balance source type. Keys are an open set; US accounts use card and bank_account. When supplied as a complete breakdown, entries sum to available_money. Active payout holds reduce both available_money and one source entry by the same amount. A payout with no recorded source type uses card. A hold whose source is absent from the map uses the largest source amount, with ties broken by source name. `available_by_source_type`: [declared alternatives](../models/BalanceUpdatedInstalledMerchantsEventInput.md#balanceupdatedinstalledmerchantseventinputdataprevious_attributesavailable_by_source_type). |
| `available_money` | Optional | [SignedMoneyPreviousAttributesInput](../models/SignedMoneyPreviousAttributesInput.md#signedmoneypreviousattributesinput) or null | Signed amount available for payouts after active payout holds are deducted. Separate from pending_money, reserve_money, and held_money. |
| `balance_id` | Optional | string or null | Stable identifier of this currency's balance. `balance_id`: [declared alternatives](../models/BalanceUpdatedInstalledMerchantsEventInput.md#balanceupdatedinstalledmerchantseventinputdataprevious_attributesbalance_id). |
| `currency` | Optional | string or null | ISO 4217 currency code. `currency`: [declared alternatives](../models/BalanceTransactionUpdatedInstalledMerchantsEventInput.md#balancetransactionupdatedinstalledmerchantseventinputdataprevious_attributescurrency). |
| `held_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | Funds set aside for payouts you created that haven't been debited from your balance yet. They aren't payable and aren't included in `available_money`. |
| `merchant_id` | Optional | string or null | Merchant whose balance this is. `merchant_id`: [declared alternatives](../models/BalanceUpdatedInstalledMerchantsEventInput.md#balanceupdatedinstalledmerchantseventinputdataprevious_attributesmerchant_id). |
| `observed_at` | Optional | string or null | When Flint observed these amounts, as an RFC 3339 UTC instant at second precision. Stored balances retain their observation time; a fresh provider read uses the time of that read. `observed_at`: [declared alternatives](../models/BalanceUpdatedInstalledMerchantsEventInput.md#balanceupdatedinstalledmerchantseventinputdataprevious_attributesobserved_at). |
| `payouts_enabled` | Optional | boolean or null | Whether payouts are ready for this balance currency, including an active default payout destination and account readiness. While it is false, payments can still succeed, and their funds wait in your balance. `payouts_enabled`: [declared alternatives](../models/BalanceUpdatedInstalledMerchantsEventInput.md#balanceupdatedinstalledmerchantseventinputdataprevious_attributespayouts_enabled). |
| `pending_by_source_type` | Optional | Map of [SignedMoneyPreviousAttributesInput](../models/SignedMoneyPreviousAttributesInput.md#signedmoneypreviousattributesinput) or null | Signed pending amounts grouped by balance source type. Keys are an open set; US accounts use card and bank_account. When supplied as a complete breakdown, entries sum to pending_money. These amounts are separate from available_by_source_type. `pending_by_source_type`: [declared alternatives](../models/BalanceUpdatedInstalledMerchantsEventInput.md#balanceupdatedinstalledmerchantseventinputdataprevious_attributespending_by_source_type). |
| `pending_money` | Optional | [SignedMoneyPreviousAttributesInput](../models/SignedMoneyPreviousAttributesInput.md#signedmoneypreviousattributesinput) or null | Signed amount awaiting availability. Separate from available_money; pending_by_source_type breaks down this amount when source details are supplied. |
| `reserve_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | Amount held in reserve. It doesn't overlap available_money or held_money. |

### BalanceUpdatedInstalledMerchantsEventInput.data.previous_attributes.available_by_source_type

### BalanceUpdatedInstalledMerchantsEventInput.data.previous_attributes.available_by_source_type variant 1

anyOf variant 1.

- Value shape: Map of [SignedMoneyPreviousAttributesInput](../models/SignedMoneyPreviousAttributesInput.md#signedmoneypreviousattributesinput). Signed available amounts grouped by balance source type. Keys are an open set; US accounts use card and bank_account. When supplied as a complete breakdown, entries sum to available_money. Active payout holds reduce both available_money and one source entry by the same amount. A payout with no recorded source type uses card. A hold whose source is absent from the map uses the largest source amount, with ties broken by source name. 

### BalanceUpdatedInstalledMerchantsEventInput.data.previous_attributes.available_by_source_type variant 2

anyOf variant 2.

- Value shape: null. Signed available amounts grouped by balance source type. Keys are an open set; US accounts use card and bank_account. When supplied as a complete breakdown, entries sum to available_money. Active payout holds reduce both available_money and one source entry by the same amount. A payout with no recorded source type uses card. A hold whose source is absent from the map uses the largest source amount, with ties broken by source name. 

### BalanceUpdatedInstalledMerchantsEventInput.data.previous_attributes.balance_id

### BalanceUpdatedInstalledMerchantsEventInput.data.previous_attributes.balance_id variant 1

anyOf variant 1: Stable identifier of this currency's balance..

- Value shape: string. Stable identifier of this currency's balance. Stable identifier of this currency's balance. Example: `"bal_01KEZF7C00DE593X12REV5EFHZ"`. 

### BalanceUpdatedInstalledMerchantsEventInput.data.previous_attributes.balance_id variant 2

anyOf variant 2.

- Value shape: null. Stable identifier of this currency's balance. 

### BalanceUpdatedInstalledMerchantsEventInput.data.previous_attributes.currency

Declared alternatives: [BalanceTransactionUpdatedInstalledMerchantsEventInput.data.previous_attributes.currency](../models/BalanceTransactionUpdatedInstalledMerchantsEventInput.md#balancetransactionupdatedinstalledmerchantseventinputdataprevious_attributescurrency).

### BalanceUpdatedInstalledMerchantsEventInput.data.previous_attributes.merchant_id

### BalanceUpdatedInstalledMerchantsEventInput.data.previous_attributes.merchant_id variant 1

anyOf variant 1: Merchant whose balance this is..

- Value shape: string. Merchant whose balance this is. Merchant whose balance this is. Example: `"mer_01KEZF7C00KPYH1DDFPCCX3B6E"`. 

### BalanceUpdatedInstalledMerchantsEventInput.data.previous_attributes.merchant_id variant 2

anyOf variant 2.

- Value shape: null. Merchant whose balance this is. 

### BalanceUpdatedInstalledMerchantsEventInput.data.previous_attributes.observed_at

### BalanceUpdatedInstalledMerchantsEventInput.data.previous_attributes.observed_at variant 1

anyOf variant 1: When Flint observed these amounts, as an RFC 3339 UTC instant at second precision. Stored balances retain their observation time; a fresh provider read uses the time of that read..

- Value shape: string. When Flint observed these amounts, as an RFC 3339 UTC instant at second precision. Stored balances retain their observation time; a fresh provider read uses the time of that read. When Flint observed these amounts, as an RFC 3339 UTC instant at second precision. Stored balances retain their observation time; a fresh provider read uses the time of that read. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### BalanceUpdatedInstalledMerchantsEventInput.data.previous_attributes.observed_at variant 2

anyOf variant 2.

- Value shape: null. When Flint observed these amounts, as an RFC 3339 UTC instant at second precision. Stored balances retain their observation time; a fresh provider read uses the time of that read. 

### BalanceUpdatedInstalledMerchantsEventInput.data.previous_attributes.payouts_enabled

### BalanceUpdatedInstalledMerchantsEventInput.data.previous_attributes.payouts_enabled variant 1

anyOf variant 1: Whether payouts are ready for this balance currency, including an active default payout destination and account readiness. While it is false, payments can still succeed, and their funds wait in your balance..

- Value shape: boolean. Whether payouts are ready for this balance currency, including an active default payout destination and account readiness. While it is false, payments can still succeed, and their funds wait in your balance. 

### BalanceUpdatedInstalledMerchantsEventInput.data.previous_attributes.payouts_enabled variant 2

anyOf variant 2.

- Value shape: null. Whether payouts are ready for this balance currency, including an active default payout destination and account readiness. While it is false, payments can still succeed, and their funds wait in your balance. 

### BalanceUpdatedInstalledMerchantsEventInput.data.previous_attributes.pending_by_source_type

### BalanceUpdatedInstalledMerchantsEventInput.data.previous_attributes.pending_by_source_type variant 1

anyOf variant 1.

- Value shape: Map of [SignedMoneyPreviousAttributesInput](../models/SignedMoneyPreviousAttributesInput.md#signedmoneypreviousattributesinput). Signed pending amounts grouped by balance source type. Keys are an open set; US accounts use card and bank_account. When supplied as a complete breakdown, entries sum to pending_money. These amounts are separate from available_by_source_type. 

### BalanceUpdatedInstalledMerchantsEventInput.data.previous_attributes.pending_by_source_type variant 2

anyOf variant 2.

- Value shape: null. Signed pending amounts grouped by balance source type. Keys are an open set; US accounts use card and bank_account. When supplied as a complete breakdown, entries sum to pending_money. These amounts are separate from available_by_source_type. 

### BalanceUpdatedInstalledMerchantsEventInput.source

Field definitions: [BalanceTransactionCreatedInstalledMerchantsEventInput.source](../models/BalanceTransactionCreatedInstalledMerchantsEventInput.md#balancetransactioncreatedinstalledmerchantseventinputsource).

