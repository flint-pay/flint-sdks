[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ExpandedPaymentIntentSummaryPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The amount requested from the buyer, including any tip_money. Capturing doesn't change it: after a partial capture it still shows the requested amount, and captured_money shows what was collected. On a standalone payment intent, PATCH can change it only before the first confirmation attempt. An amount_money or tip_money change that leaves too little for stored splits returns LIMIT_EXCEEDED at the changed field with minimum_money. |
| `capture_method` | Optional | string or null | When money is collected. Defaults to automatic. Values: `"automatic"`, `"manual"`. `capture_method`: [declared alternatives](../models/ExpandedPaymentIntentSummaryPreviousAttributes.md#expandedpaymentintentsummarypreviousattributescapture_method). |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `customer_id` | Optional | string or null | Customer linked to this payment intent. `customer_id`: [declared alternatives](../models/ExpandedPaymentIntentSummaryPreviousAttributes.md#expandedpaymentintentsummarypreviousattributescustomer_id). |
| `dispute_status` | Optional | string or null | Dispute state of this payment. none means no dispute or inquiry is open or recorded. The inquiry_ values track an issuer inquiry or early warning that isn't a chargeback. Read the dispute with GET /v1/disputes for its deadline and evidence. Values: [10 declared values](#expandedpaymentintentsummarypreviousattributes-dispute_status-values). `dispute_status`: [declared alternatives](../models/ExpandedPaymentIntentSummaryPreviousAttributes.md#expandedpaymentintentsummarypreviousattributesdispute_status). |
| `order_id` | Optional | string or null | Order this payment intent belongs to. Create it through the order and confirm it with POST /v1/orders/{order_id}/pay. Capture and cancel use POST /v1/payment-intents/{payment_intent_id}/capture or /cancel for every payment intent. Order-owned intents accept PATCH for metadata and external_reference_id. `order_id`: [declared alternatives](../models/ExpandedPaymentIntentSummaryPreviousAttributes.md#expandedpaymentintentsummarypreviousattributesorder_id). |
| `payment_intent_id` | Optional | string or null | Flint payment intent ID. `payment_intent_id`: [declared alternatives](../models/ExpandedPaymentIntentSummaryPreviousAttributes.md#expandedpaymentintentsummarypreviousattributespayment_intent_id). |
| `payment_source` | Optional | Alternative shapes (see declared variants) | Summary of the card or bank account used for the payment. Absent until a payment source is attached. `payment_source`: [declared alternatives](../models/ExpandedPaymentIntentSummaryPreviousAttributes.md#expandedpaymentintentsummarypreviousattributespayment_source). |
| `refund_status` | Optional | string or null | How much of captured_money has been refunded, including value issued as store credit, based on refunded_money. Values: `"none"`, `"partially_refunded"`, `"refunded"`. `refund_status`: [declared alternatives](../models/ExpandedPaymentIntentSummaryPreviousAttributes.md#expandedpaymentintentsummarypreviousattributesrefund_status). |
| `status` | Optional | string or null | Lifecycle status. requires_payment_method covers both a new payment intent and one whose last attempt failed, so read last_payment_error with it. succeeded, canceled, and expired are final. Refunds and disputes never change status. Values: `"requires_payment_method"`, `"requires_confirmation"`, `"requires_action"`, `"processing"`, `"requires_capture"`, `"canceled"`, `"succeeded"`, `"expired"`. `status`: [declared alternatives](../models/ExpandedPaymentIntentSummaryPreviousAttributes.md#expandedpaymentintentsummarypreviousattributesstatus). |
| `supported_actions` | Optional | Array of string or null | Verbs this payment intent accepts now, each a POST to /v1/payment-intents/{payment_intent_id}/{action}. The list includes stored order facts and can change without a payment intent version change. Order legs list confirm when a single leg can pay the order or an open attempt can continue it. Several unpaid legs, selected gift cards, or automatic tax with a leg below the balance require pay_order instead. Invoice payments list only cancel; subscription payments list none. Order edit payments list confirm while awaiting payment details or action. A listed action can still be refused due to an open risk review, an order payment attempt, a closed order, or the merchant account. A managed_by_owner refusal names the owner and its command in remediation.next_actions. The merchant list is credential-independent. Checkout credentials receive that list filtered to confirm and cancel on their own session's intents, never capture. Customer sessions omit this field. New actions may be added. Always present with merchant credentials. Items values: `"confirm"`, `"capture"`, `"cancel"`. `supported_actions`: [declared alternatives](../models/ExpandedPaymentIntentSummaryPreviousAttributes.md#expandedpaymentintentsummarypreviousattributessupported_actions). |
| `updated_at` | Optional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `version` | Optional | integer or null | Persisted version of this resource's owned state. Expanded resources and external observations can change independently. `version`: [declared alternatives](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdata-fields-1previous_attributesversion). |

#### ExpandedPaymentIntentSummaryPreviousAttributes dispute_status values

- `"none"`
- `"inquiry_needs_response"`
- `"inquiry_under_review"`
- `"inquiry_closed"`
- `"needs_response"`
- `"under_review"`
- `"won"`
- `"lost"`
- `"prevented"`
- `"other"`

### ExpandedPaymentIntentSummaryPreviousAttributes.capture_method

### ExpandedPaymentIntentSummaryPreviousAttributes.capture_method variant 1

anyOf variant 1: When money is collected. Defaults to automatic..

- Value shape: string. When money is collected. Defaults to automatic. Values: `"automatic"`, `"manual"`.

### ExpandedPaymentIntentSummaryPreviousAttributes.capture_method variant 2

anyOf variant 2.

- Value shape: null. When money is collected. Defaults to automatic. 

### ExpandedPaymentIntentSummaryPreviousAttributes.created_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### ExpandedPaymentIntentSummaryPreviousAttributes.customer_id

### ExpandedPaymentIntentSummaryPreviousAttributes.customer_id variant 1

anyOf variant 1: Customer linked to this payment intent..

- Value shape: string. Customer linked to this payment intent. 

### ExpandedPaymentIntentSummaryPreviousAttributes.customer_id variant 2

anyOf variant 2.

- Value shape: null. Customer linked to this payment intent. 

### ExpandedPaymentIntentSummaryPreviousAttributes.dispute_status

### ExpandedPaymentIntentSummaryPreviousAttributes.dispute_status variant 1

anyOf variant 1: Dispute state of this payment. none means no dispute or inquiry is open or recorded. The inquiry_ values track an issuer inquiry or early warning that isn't a chargeback. Read the dispute with GET /v1/disputes for its deadline and evidence..

- Value shape: string. Dispute state of this payment. none means no dispute or inquiry is open or recorded. The inquiry_ values track an issuer inquiry or early warning that isn't a chargeback. Read the dispute with GET /v1/disputes for its deadline and evidence. Values: `"none"`, `"inquiry_needs_response"`, `"inquiry_under_review"`, `"inquiry_closed"`, `"needs_response"`, `"under_review"`, `"won"`, `"lost"`, `"prevented"`, `"other"`.

### ExpandedPaymentIntentSummaryPreviousAttributes.dispute_status variant 2

anyOf variant 2.

- Value shape: null. Dispute state of this payment. none means no dispute or inquiry is open or recorded. The inquiry_ values track an issuer inquiry or early warning that isn't a chargeback. Read the dispute with GET /v1/disputes for its deadline and evidence. 

### ExpandedPaymentIntentSummaryPreviousAttributes.order_id

### ExpandedPaymentIntentSummaryPreviousAttributes.order_id variant 1

anyOf variant 1: Order this payment intent belongs to. Create it through the order and confirm it with POST /v1/orders/{order_id}/pay. Capture and cancel use POST /v1/payment-intents/{payment_intent_id}/capture or /cancel for every payment intent. Order-owned intents accept PATCH for metadata and external_reference_id..

- Value shape: string. Order this payment intent belongs to. Create it through the order and confirm it with POST /v1/orders/{order_id}/pay. Capture and cancel use POST /v1/payment-intents/{payment_intent_id}/capture or /cancel for every payment intent. Order-owned intents accept PATCH for metadata and external_reference_id. 

### ExpandedPaymentIntentSummaryPreviousAttributes.order_id variant 2

anyOf variant 2.

- Value shape: null. Order this payment intent belongs to. Create it through the order and confirm it with POST /v1/orders/{order_id}/pay. Capture and cancel use POST /v1/payment-intents/{payment_intent_id}/capture or /cancel for every payment intent. Order-owned intents accept PATCH for metadata and external_reference_id. 

### ExpandedPaymentIntentSummaryPreviousAttributes.payment_intent_id

### ExpandedPaymentIntentSummaryPreviousAttributes.payment_intent_id variant 1

anyOf variant 1: Flint payment intent ID..

- Value shape: string. Flint payment intent ID. 

### ExpandedPaymentIntentSummaryPreviousAttributes.payment_intent_id variant 2

anyOf variant 2.

- Value shape: null. Flint payment intent ID. 

### ExpandedPaymentIntentSummaryPreviousAttributes.payment_source

Summary of the card or bank account used for the payment. Absent until a payment source is attached.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `ach_debit` | Conditional | Alternative shapes (see declared variants) | Bank account details. Present when type is ach_debit. `ach_debit`: [declared alternatives](../models/ExpandedPaymentIntentSummaryPreviousAttributes.md#expandedpaymentintentsummarypreviousattributespayment_source-variant-1ach_debit). |
| `card` | Conditional | Alternative shapes (see declared variants) | Card details. Present when type is card. `card`: [declared alternatives](../models/ExpandedPaymentIntentSummaryPreviousAttributes.md#expandedpaymentintentsummarypreviousattributespayment_source-variant-1card). |
| `type` | Conditional | string or null | Funding-method family. Wallet payment options use card because their underlying funding source is a card. Values: `"card"`, `"ach_debit"`, `"affirm"`. `type`: [declared alternatives](../models/ExpandedPaymentIntentSummaryPreviousAttributes.md#expandedpaymentintentsummarypreviousattributespayment_source-variant-1type). |

### ExpandedPaymentIntentSummaryPreviousAttributes.payment_source variant 1

anyOf PaymentSourceSummaryPreviousAttributes.

- Optional: `ach_debit`, `card`, `type`.

### ExpandedPaymentIntentSummaryPreviousAttributes.payment_source variant 2

anyOf variant 2.

- Undeclared: `ach_debit`, `card`, `type`.
- Value shape: null. Summary of the card or bank account used for the payment. Absent until a payment source is attached. 

### ExpandedPaymentIntentSummaryPreviousAttributes.payment_source variant 1.ach_debit

Bank account details. Present when type is ach_debit.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `account_type` | Conditional | string or null | The kind of bank account. Values: `"checking"`, `"savings"`, `"other"`. `account_type`: [declared alternatives](../models/ExpandedPaymentIntentSummaryPreviousAttributes.md#expandedpaymentintentsummarypreviousattributespayment_source-variant-1ach_debit-variant-1account_type). |
| `bank_name` | Conditional | string or null | Name of the bank that holds the account. `bank_name`: [declared alternatives](../models/ExpandedPaymentIntentSummaryPreviousAttributes.md#expandedpaymentintentsummarypreviousattributespayment_source-variant-1ach_debit-variant-1bank_name). |
| `last4` | Conditional | string or null | Last four digits of the bank account number. `last4`: [declared alternatives](../models/ExpandedPaymentIntentSummaryPreviousAttributes.md#expandedpaymentintentsummarypreviousattributespayment_source-variant-1ach_debit-variant-1last4). |

### ExpandedPaymentIntentSummaryPreviousAttributes.payment_source variant 1.ach_debit variant 1

anyOf PaymentSourceAchDebitSummaryPreviousAttributes.

- Optional: `account_type`, `bank_name`, `last4`.

### ExpandedPaymentIntentSummaryPreviousAttributes.payment_source variant 1.ach_debit variant 2

anyOf variant 2.

- Undeclared: `account_type`, `bank_name`, `last4`.
- Value shape: null. Bank account details. Present when type is ach_debit. 

### ExpandedPaymentIntentSummaryPreviousAttributes.payment_source variant 1.ach_debit variant 1.account_type

### ExpandedPaymentIntentSummaryPreviousAttributes.payment_source variant 1.ach_debit variant 1.account_type variant 1

anyOf variant 1: The kind of bank account..

- Value shape: string. The kind of bank account. Values: `"checking"`, `"savings"`, `"other"`.

### ExpandedPaymentIntentSummaryPreviousAttributes.payment_source variant 1.ach_debit variant 1.account_type variant 2

anyOf variant 2.

- Value shape: null. The kind of bank account. 

### ExpandedPaymentIntentSummaryPreviousAttributes.payment_source variant 1.ach_debit variant 1.bank_name

### ExpandedPaymentIntentSummaryPreviousAttributes.payment_source variant 1.ach_debit variant 1.bank_name variant 1

anyOf variant 1: Name of the bank that holds the account..

- Value shape: string. Name of the bank that holds the account. 

### ExpandedPaymentIntentSummaryPreviousAttributes.payment_source variant 1.ach_debit variant 1.bank_name variant 2

anyOf variant 2.

- Value shape: null. Name of the bank that holds the account. 

### ExpandedPaymentIntentSummaryPreviousAttributes.payment_source variant 1.ach_debit variant 1.last4

### ExpandedPaymentIntentSummaryPreviousAttributes.payment_source variant 1.ach_debit variant 1.last4 variant 1

anyOf variant 1: Last four digits of the bank account number..

- Value shape: string. Last four digits of the bank account number. 

### ExpandedPaymentIntentSummaryPreviousAttributes.payment_source variant 1.ach_debit variant 1.last4 variant 2

anyOf variant 2.

- Value shape: null. Last four digits of the bank account number. 

### ExpandedPaymentIntentSummaryPreviousAttributes.payment_source variant 1.card

Card details. Present when type is card.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `brand` | Conditional | string or null | The card network. Values: `"visa"`, `"mastercard"`, `"amex"`, `"discover"`, `"diners"`, `"jcb"`, `"unionpay"`. `brand`: [declared alternatives](../models/ExpandedPaymentIntentSummaryPreviousAttributes.md#expandedpaymentintentsummarypreviousattributespayment_source-variant-1card-variant-1brand). |
| `card_present` | Conditional | Alternative shapes (see declared variants) | Details of a card read on a reader, present once the card was read. Card-present cards are not saved, so payment_method_id is absent. `card_present`: [declared alternatives](../models/ExpandedPaymentIntentSummaryPreviousAttributes.md#expandedpaymentintentsummarypreviousattributespayment_source-variant-1card-variant-1card_present). |
| `last4` | Conditional | string or null | Last four digits of the card number. `last4`: [declared alternatives](../models/ExpandedPaymentIntentSummaryPreviousAttributes.md#expandedpaymentintentsummarypreviousattributespayment_source-variant-1card-variant-1last4). |
| `payment_method_id` | Conditional | string or null | ID of the saved Flint payment method for this card. Absent when the card isn't saved, as with a card read on a reader. `payment_method_id`: [declared alternatives](../models/ExpandedPaymentIntentSummaryPreviousAttributes.md#expandedpaymentintentsummarypreviousattributespayment_source-variant-1card-variant-1payment_method_id). |

### ExpandedPaymentIntentSummaryPreviousAttributes.payment_source variant 1.card variant 1

anyOf PaymentSourceCardSummaryPreviousAttributes.

- Optional: `brand`, `card_present`, `last4`, `payment_method_id`.

### ExpandedPaymentIntentSummaryPreviousAttributes.payment_source variant 1.card variant 2

anyOf variant 2.

- Undeclared: `brand`, `card_present`, `last4`, `payment_method_id`.
- Value shape: null. Card details. Present when type is card. 

### ExpandedPaymentIntentSummaryPreviousAttributes.payment_source variant 1.card variant 1.brand

### ExpandedPaymentIntentSummaryPreviousAttributes.payment_source variant 1.card variant 1.brand variant 1

anyOf variant 1: The card network..

- Value shape: string. The card network. Values: `"visa"`, `"mastercard"`, `"amex"`, `"discover"`, `"diners"`, `"jcb"`, `"unionpay"`.

### ExpandedPaymentIntentSummaryPreviousAttributes.payment_source variant 1.card variant 1.brand variant 2

anyOf variant 2.

- Value shape: null. The card network. 

### ExpandedPaymentIntentSummaryPreviousAttributes.payment_source variant 1.card variant 1.card_present

Details of a card read on a reader, present once the card was read. Card-present cards are not saved, so payment_method_id is absent.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `application_id` | Conditional | string or null or null | EMV application identifier (AID). Null when absent or outside the supported shape. `application_id`: [declared alternatives](../models/ExpandedPaymentIntentSummaryPreviousAttributes.md#expandedpaymentintentsummarypreviousattributespayment_source-variant-1card-variant-1card_present-variant-1application_id). |
| `application_name` | Conditional | string or null or null | Card application's label, such as VISA CREDIT. Null when absent or outside the supported shape. `application_name`: [declared alternatives](../models/ExpandedPaymentIntentSummaryPreviousAttributes.md#expandedpaymentintentsummarypreviousattributespayment_source-variant-1card-variant-1card_present-variant-1application_name). |
| `authorization_code` | Conditional | string or null or null | Issuer's authorization code. Null when absent or outside the supported shape. `authorization_code`: [declared alternatives](../models/ExpandedPaymentIntentSummaryPreviousAttributes.md#expandedpaymentintentsummarypreviousattributespayment_source-variant-1card-variant-1card_present-variant-1authorization_code). |
| `cardholder_verification` | Conditional | string or null | How the buyer was verified. consumer_device means the phone verified the buyer. Unrecognized methods are other. Values: `"pin"`, `"signature"`, `"consumer_device"`, `"none"`, `"other"`. `cardholder_verification`: [declared alternatives](../models/ExpandedPaymentIntentSummaryPreviousAttributes.md#expandedpaymentintentsummarypreviousattributespayment_source-variant-1card-variant-1card_present-variant-1cardholder_verification). |
| `read_method` | Conditional | string or null | How the card was read. swipe_fallback means a swipe after a failed chip read. Unrecognized methods are other. Values: `"contactless"`, `"chip"`, `"swipe"`, `"swipe_fallback"`, `"other"`. `read_method`: [declared alternatives](../models/ExpandedPaymentIntentSummaryPreviousAttributes.md#expandedpaymentintentsummarypreviousattributespayment_source-variant-1card-variant-1card_present-variant-1read_method). |
| `wallet` | Conditional | string or null | Wallet used on the reader. Absent when a card was used; unrecognized wallets are other. Values: `"apple_pay"`, `"google_pay"`, `"samsung_pay"`, `"other"`. `wallet`: [declared alternatives](../models/ExpandedPaymentIntentSummaryPreviousAttributes.md#expandedpaymentintentsummarypreviousattributespayment_source-variant-1card-variant-1card_present-variant-1wallet). |

### ExpandedPaymentIntentSummaryPreviousAttributes.payment_source variant 1.card variant 1.card_present variant 1

anyOf PaymentSourceCardPresentDetailsPreviousAttributes.

- Optional: `application_id`, `application_name`, `authorization_code`, `cardholder_verification`, `read_method`, `wallet`.

### ExpandedPaymentIntentSummaryPreviousAttributes.payment_source variant 1.card variant 1.card_present variant 2

anyOf variant 2.

- Undeclared: `application_id`, `application_name`, `authorization_code`, `cardholder_verification`, `read_method`, `wallet`.
- Value shape: null. Details of a card read on a reader, present once the card was read. Card-present cards are not saved, so payment_method_id is absent. 

### ExpandedPaymentIntentSummaryPreviousAttributes.payment_source variant 1.card variant 1.card_present variant 1.application_id

### ExpandedPaymentIntentSummaryPreviousAttributes.payment_source variant 1.card variant 1.card_present variant 1.application_id variant 1

anyOf variant 1: EMV application identifier (AID). Null when absent or outside the supported shape..

- Value shape: (string or null). EMV application identifier (AID). Null when absent or outside the supported shape. EMV application identifier (AID). Null when absent or outside the supported shape. pattern: `^[0-9A-F]{10,32}$`. Example: `"A0000000031010"`. 

### ExpandedPaymentIntentSummaryPreviousAttributes.payment_source variant 1.card variant 1.card_present variant 1.application_id variant 2

anyOf variant 2.

- Value shape: null. EMV application identifier (AID). Null when absent or outside the supported shape. 

### ExpandedPaymentIntentSummaryPreviousAttributes.payment_source variant 1.card variant 1.card_present variant 1.application_name

### ExpandedPaymentIntentSummaryPreviousAttributes.payment_source variant 1.card variant 1.card_present variant 1.application_name variant 1

anyOf variant 1: Card application's label, such as VISA CREDIT. Null when absent or outside the supported shape..

- Value shape: (string or null). Card application's label, such as VISA CREDIT. Null when absent or outside the supported shape. Card application's label, such as VISA CREDIT. Null when absent or outside the supported shape. pattern: `^[ -~]{1,16}$`. 

### ExpandedPaymentIntentSummaryPreviousAttributes.payment_source variant 1.card variant 1.card_present variant 1.application_name variant 2

anyOf variant 2.

- Value shape: null. Card application's label, such as VISA CREDIT. Null when absent or outside the supported shape. 

### ExpandedPaymentIntentSummaryPreviousAttributes.payment_source variant 1.card variant 1.card_present variant 1.authorization_code

### ExpandedPaymentIntentSummaryPreviousAttributes.payment_source variant 1.card variant 1.card_present variant 1.authorization_code variant 1

anyOf variant 1: Issuer's authorization code. Null when absent or outside the supported shape..

- Value shape: (string or null). Issuer's authorization code. Null when absent or outside the supported shape. Issuer's authorization code. Null when absent or outside the supported shape. pattern: `^[0-9A-Za-z]{1,12}$`. 

### ExpandedPaymentIntentSummaryPreviousAttributes.payment_source variant 1.card variant 1.card_present variant 1.authorization_code variant 2

anyOf variant 2.

- Value shape: null. Issuer's authorization code. Null when absent or outside the supported shape. 

### ExpandedPaymentIntentSummaryPreviousAttributes.payment_source variant 1.card variant 1.card_present variant 1.cardholder_verification

### ExpandedPaymentIntentSummaryPreviousAttributes.payment_source variant 1.card variant 1.card_present variant 1.cardholder_verification variant 1

anyOf variant 1: How the buyer was verified. consumer_device means the phone verified the buyer. Unrecognized methods are other..

- Value shape: string. How the buyer was verified. consumer_device means the phone verified the buyer. Unrecognized methods are other. Values: `"pin"`, `"signature"`, `"consumer_device"`, `"none"`, `"other"`.

### ExpandedPaymentIntentSummaryPreviousAttributes.payment_source variant 1.card variant 1.card_present variant 1.cardholder_verification variant 2

anyOf variant 2.

- Value shape: null. How the buyer was verified. consumer_device means the phone verified the buyer. Unrecognized methods are other. 

### ExpandedPaymentIntentSummaryPreviousAttributes.payment_source variant 1.card variant 1.card_present variant 1.read_method

### ExpandedPaymentIntentSummaryPreviousAttributes.payment_source variant 1.card variant 1.card_present variant 1.read_method variant 1

anyOf variant 1: How the card was read. swipe_fallback means a swipe after a failed chip read. Unrecognized methods are other..

- Value shape: string. How the card was read. swipe_fallback means a swipe after a failed chip read. Unrecognized methods are other. Values: `"contactless"`, `"chip"`, `"swipe"`, `"swipe_fallback"`, `"other"`.

### ExpandedPaymentIntentSummaryPreviousAttributes.payment_source variant 1.card variant 1.card_present variant 1.read_method variant 2

anyOf variant 2.

- Value shape: null. How the card was read. swipe_fallback means a swipe after a failed chip read. Unrecognized methods are other. 

### ExpandedPaymentIntentSummaryPreviousAttributes.payment_source variant 1.card variant 1.card_present variant 1.wallet

### ExpandedPaymentIntentSummaryPreviousAttributes.payment_source variant 1.card variant 1.card_present variant 1.wallet variant 1

anyOf variant 1: Wallet used on the reader. Absent when a card was used; unrecognized wallets are other..

- Value shape: string. Wallet used on the reader. Absent when a card was used; unrecognized wallets are other. Values: `"apple_pay"`, `"google_pay"`, `"samsung_pay"`, `"other"`.

### ExpandedPaymentIntentSummaryPreviousAttributes.payment_source variant 1.card variant 1.card_present variant 1.wallet variant 2

anyOf variant 2.

- Value shape: null. Wallet used on the reader. Absent when a card was used; unrecognized wallets are other. 

### ExpandedPaymentIntentSummaryPreviousAttributes.payment_source variant 1.card variant 1.last4

### ExpandedPaymentIntentSummaryPreviousAttributes.payment_source variant 1.card variant 1.last4 variant 1

anyOf variant 1: Last four digits of the card number..

- Value shape: string. Last four digits of the card number. 

### ExpandedPaymentIntentSummaryPreviousAttributes.payment_source variant 1.card variant 1.last4 variant 2

anyOf variant 2.

- Value shape: null. Last four digits of the card number. 

### ExpandedPaymentIntentSummaryPreviousAttributes.payment_source variant 1.card variant 1.payment_method_id

### ExpandedPaymentIntentSummaryPreviousAttributes.payment_source variant 1.card variant 1.payment_method_id variant 1

anyOf variant 1: ID of the saved Flint payment method for this card. Absent when the card isn't saved, as with a card read on a reader..

- Value shape: string. ID of the saved Flint payment method for this card. Absent when the card isn't saved, as with a card read on a reader. ID of the saved Flint payment method for this card. Absent when the card isn't saved, as with a card read on a reader. Example: `"pm_01KEZF7C0034B248TXXE4NXYFZ"`. 

### ExpandedPaymentIntentSummaryPreviousAttributes.payment_source variant 1.card variant 1.payment_method_id variant 2

anyOf variant 2.

- Value shape: null. ID of the saved Flint payment method for this card. Absent when the card isn't saved, as with a card read on a reader. 

### ExpandedPaymentIntentSummaryPreviousAttributes.payment_source variant 1.type

### ExpandedPaymentIntentSummaryPreviousAttributes.payment_source variant 1.type variant 1

anyOf variant 1: Funding-method family. Wallet payment options use card because their underlying funding source is a card..

- Value shape: string. Funding-method family. Wallet payment options use card because their underlying funding source is a card. Values: `"card"`, `"ach_debit"`, `"affirm"`.

### ExpandedPaymentIntentSummaryPreviousAttributes.payment_source variant 1.type variant 2

anyOf variant 2.

- Value shape: null. Funding-method family. Wallet payment options use card because their underlying funding source is a card. 

### ExpandedPaymentIntentSummaryPreviousAttributes.refund_status

### ExpandedPaymentIntentSummaryPreviousAttributes.refund_status variant 1

anyOf variant 1: How much of captured_money has been refunded, including value issued as store credit, based on refunded_money..

- Value shape: string. How much of captured_money has been refunded, including value issued as store credit, based on refunded_money. Values: `"none"`, `"partially_refunded"`, `"refunded"`.

### ExpandedPaymentIntentSummaryPreviousAttributes.refund_status variant 2

anyOf variant 2.

- Value shape: null. How much of captured_money has been refunded, including value issued as store credit, based on refunded_money. 

### ExpandedPaymentIntentSummaryPreviousAttributes.status

### ExpandedPaymentIntentSummaryPreviousAttributes.status variant 1

anyOf variant 1: Lifecycle status. requires_payment_method covers both a new payment intent and one whose last attempt failed, so read last_payment_error with it. succeeded, canceled, and expired are final. Refunds and disputes never change status..

- Value shape: string. Lifecycle status. requires_payment_method covers both a new payment intent and one whose last attempt failed, so read last_payment_error with it. succeeded, canceled, and expired are final. Refunds and disputes never change status. Values: `"requires_payment_method"`, `"requires_confirmation"`, `"requires_action"`, `"processing"`, `"requires_capture"`, `"canceled"`, `"succeeded"`, `"expired"`.

### ExpandedPaymentIntentSummaryPreviousAttributes.status variant 2

anyOf variant 2.

- Value shape: null. Lifecycle status. requires_payment_method covers both a new payment intent and one whose last attempt failed, so read last_payment_error with it. succeeded, canceled, and expired are final. Refunds and disputes never change status. 

### ExpandedPaymentIntentSummaryPreviousAttributes.supported_actions

### ExpandedPaymentIntentSummaryPreviousAttributes.supported_actions variant 1

anyOf variant 1: Verbs this payment intent accepts now, each a POST to /v1/payment-intents/{payment_intent_id}/{action}. The list includes stored order facts and can change without a payment intent version change. Order legs list confirm when a single leg can pay the order or an open attempt can continue it. Several unpaid legs, selected gift cards, or automatic tax with a leg below the balance require pay_order instead. Invoice payments list only cancel; subscription payments list none. Order edit payments list confirm while awaiting payment details or action. A listed action can still be refused due to an open risk review, an order payment attempt, a closed order, or the merchant account. A managed_by_owner refusal names the owner and its command in remediation.next_actions. The merchant list is credential-independent. Checkout credentials receive that list filtered to confirm and cancel on their own session's intents, never capture. Customer sessions omit this field. New actions may be added. Always present with merchant credentials..

- Value shape: Array of string. Verbs this payment intent accepts now, each a POST to /v1/payment-intents/{payment_intent_id}/{action}. The list includes stored order facts and can change without a payment intent version change. Order legs list confirm when a single leg can pay the order or an open attempt can continue it. Several unpaid legs, selected gift cards, or automatic tax with a leg below the balance require pay_order instead. Invoice payments list only cancel; subscription payments list none. Order edit payments list confirm while awaiting payment details or action. A listed action can still be refused due to an open risk review, an order payment attempt, a closed order, or the merchant account. A managed_by_owner refusal names the owner and its command in remediation.next_actions. The merchant list is credential-independent. Checkout credentials receive that list filtered to confirm and cancel on their own session's intents, never capture. Customer sessions omit this field. New actions may be added. Always present with merchant credentials. Items values: `"confirm"`, `"capture"`, `"cancel"`.

### ExpandedPaymentIntentSummaryPreviousAttributes.supported_actions variant 2

anyOf variant 2.

- Value shape: null. Verbs this payment intent accepts now, each a POST to /v1/payment-intents/{payment_intent_id}/{action}. The list includes stored order facts and can change without a payment intent version change. Order legs list confirm when a single leg can pay the order or an open attempt can continue it. Several unpaid legs, selected gift cards, or automatic tax with a leg below the balance require pay_order instead. Invoice payments list only cancel; subscription payments list none. Order edit payments list confirm while awaiting payment details or action. A listed action can still be refused due to an open risk review, an order payment attempt, a closed order, or the merchant account. A managed_by_owner refusal names the owner and its command in remediation.next_actions. The merchant list is credential-independent. Checkout credentials receive that list filtered to confirm and cancel on their own session's intents, never capture. Customer sessions omit this field. New actions may be added. Always present with merchant credentials. 

### ExpandedPaymentIntentSummaryPreviousAttributes.updated_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### ExpandedPaymentIntentSummaryPreviousAttributes.version

Declared alternatives: [PaymentSplitCanceledEvent.data fields 1.previous_attributes.version](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdata-fields-1previous_attributesversion).

