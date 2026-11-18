[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentSourceCardSummaryPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `brand` | Optional | string or null | The card network. Values: `"visa"`, `"mastercard"`, `"amex"`, `"discover"`, `"diners"`, `"jcb"`, `"unionpay"`. `brand`: [declared alternatives](../models/PaymentSourceCardSummaryPreviousAttributes.md#paymentsourcecardsummarypreviousattributesbrand). |
| `card_present` | Optional | [PaymentSourceCardPresentDetailsPreviousAttributes](../models/PaymentSourceCardPresentDetailsPreviousAttributes.md#paymentsourcecardpresentdetailspreviousattributes) or null | Details of a card read on a reader, present once the card was read. Card-present cards are not saved, so payment_method_id is absent. `card_present`: [declared alternatives](../models/PaymentSourceCardSummaryPreviousAttributes.md#paymentsourcecardsummarypreviousattributescard_present). |
| `country` | Optional | string or null | ISO 3166-1 alpha-2 issuing country. `null` when the issuing country was not recorded, including older payments. `country`: [declared alternatives](../models/PaymentSourceCardSummaryPreviousAttributes.md#paymentsourcecardsummarypreviousattributescountry). |
| `funding` | Optional | string or null | How the card is funded. `null` when no recognized funding type was recorded. Values: `"credit"`, `"debit"`, `"prepaid"`, `null`. `funding`: [declared alternatives](../models/PaymentSourceCardSummaryPreviousAttributes.md#paymentsourcecardsummarypreviousattributesfunding). |
| `last4` | Optional | string or null | Last four digits of the card number. `last4`: [declared alternatives](../models/PaymentSourceCardSummaryPreviousAttributes.md#paymentsourcecardsummarypreviousattributeslast4). |
| `payment_method_id` | Optional | string or null | ID of the saved Flint payment method for this card. Absent when the card isn't saved, as with a card read on a reader. `payment_method_id`: [declared alternatives](../models/PaymentSourceCardSummaryPreviousAttributes.md#paymentsourcecardsummarypreviousattributespayment_method_id). |

### PaymentSourceCardSummaryPreviousAttributes.brand

### PaymentSourceCardSummaryPreviousAttributes.brand variant 1

anyOf variant 1: The card network..

- Value shape: string. The card network. Values: `"visa"`, `"mastercard"`, `"amex"`, `"discover"`, `"diners"`, `"jcb"`, `"unionpay"`.

### PaymentSourceCardSummaryPreviousAttributes.brand variant 2

anyOf variant 2.

- Value shape: null. The card network. 

### PaymentSourceCardSummaryPreviousAttributes.card_present

Details of a card read on a reader, present once the card was read. Card-present cards are not saved, so payment_method_id is absent.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `application_id` | Conditional | string or null | EMV application identifier (AID). Null when absent or outside the supported shape. `application_id`: [declared alternatives](../models/PaymentSourceCardSummaryPreviousAttributes.md#paymentsourcecardsummarypreviousattributescard_present-variant-1application_id). |
| `application_name` | Conditional | string or null | Card application's label, such as VISA CREDIT. Null when absent or outside the supported shape. `application_name`: [declared alternatives](../models/PaymentSourceCardPresentDetailsPreviousAttributes.md#paymentsourcecardpresentdetailspreviousattributesapplication_name). |
| `authorization_code` | Conditional | string or null | Issuer's authorization code. Null when absent or outside the supported shape. `authorization_code`: [declared alternatives](../models/PaymentSourceCardPresentDetailsPreviousAttributes.md#paymentsourcecardpresentdetailspreviousattributesauthorization_code). |
| `cardholder_verification` | Conditional | string or null | How the buyer was verified. consumer_device means the phone verified the buyer. Unrecognized methods are other. Values: `"pin"`, `"signature"`, `"consumer_device"`, `"none"`, `"other"`. `cardholder_verification`: [declared alternatives](../models/PaymentSourceCardPresentDetailsPreviousAttributes.md#paymentsourcecardpresentdetailspreviousattributescardholder_verification). |
| `read_method` | Conditional | string or null | How the card was read. swipe_fallback means a swipe after a failed chip read. Unrecognized methods are other. Values: `"contactless"`, `"chip"`, `"swipe"`, `"swipe_fallback"`, `"other"`. `read_method`: [declared alternatives](../models/PaymentSourceCardPresentDetailsPreviousAttributes.md#paymentsourcecardpresentdetailspreviousattributesread_method). |
| `wallet` | Conditional | string or null | Wallet used on the reader. Absent when a card was used; unrecognized wallets are other. Values: `"apple_pay"`, `"google_pay"`, `"samsung_pay"`, `"other"`. `wallet`: [declared alternatives](../models/PaymentSourceCardPresentDetailsPreviousAttributes.md#paymentsourcecardpresentdetailspreviousattributeswallet). |

### PaymentSourceCardSummaryPreviousAttributes.card_present variant 1

anyOf PaymentSourceCardPresentDetailsPreviousAttributes.

- Optional: `application_id`, `application_name`, `authorization_code`, `cardholder_verification`, `read_method`, `wallet`.

### PaymentSourceCardSummaryPreviousAttributes.card_present variant 2

anyOf variant 2.

- Undeclared: `application_id`, `application_name`, `authorization_code`, `cardholder_verification`, `read_method`, `wallet`.
- Value shape: null. Details of a card read on a reader, present once the card was read. Card-present cards are not saved, so payment_method_id is absent. 

### PaymentSourceCardSummaryPreviousAttributes.card_present variant 1.application_id

### PaymentSourceCardSummaryPreviousAttributes.card_present variant 1.application_id variant 1

anyOf variant 1: EMV application identifier (AID). Null when absent or outside the supported shape..

- Value shape: string. EMV application identifier (AID). Null when absent or outside the supported shape. EMV application identifier (AID). Null when absent or outside the supported shape. pattern: `^[0-9A-F]{10,32}$`. Example: `"A0000000031010"`. 

### PaymentSourceCardSummaryPreviousAttributes.card_present variant 1.application_id variant 2

anyOf variant 2.

- Value shape: null. EMV application identifier (AID). Null when absent or outside the supported shape. 

### PaymentSourceCardSummaryPreviousAttributes.card_present variant 1.application_name

Declared alternatives: [PaymentSourceCardPresentDetailsPreviousAttributes.application_name](../models/PaymentSourceCardPresentDetailsPreviousAttributes.md#paymentsourcecardpresentdetailspreviousattributesapplication_name).

### PaymentSourceCardSummaryPreviousAttributes.card_present variant 1.authorization_code

Declared alternatives: [PaymentSourceCardPresentDetailsPreviousAttributes.authorization_code](../models/PaymentSourceCardPresentDetailsPreviousAttributes.md#paymentsourcecardpresentdetailspreviousattributesauthorization_code).

### PaymentSourceCardSummaryPreviousAttributes.card_present variant 1.cardholder_verification

Declared alternatives: [PaymentSourceCardPresentDetailsPreviousAttributes.cardholder_verification](../models/PaymentSourceCardPresentDetailsPreviousAttributes.md#paymentsourcecardpresentdetailspreviousattributescardholder_verification).

### PaymentSourceCardSummaryPreviousAttributes.card_present variant 1.read_method

Declared alternatives: [PaymentSourceCardPresentDetailsPreviousAttributes.read_method](../models/PaymentSourceCardPresentDetailsPreviousAttributes.md#paymentsourcecardpresentdetailspreviousattributesread_method).

### PaymentSourceCardSummaryPreviousAttributes.card_present variant 1.wallet

Declared alternatives: [PaymentSourceCardPresentDetailsPreviousAttributes.wallet](../models/PaymentSourceCardPresentDetailsPreviousAttributes.md#paymentsourcecardpresentdetailspreviousattributeswallet).

### PaymentSourceCardSummaryPreviousAttributes.country

### PaymentSourceCardSummaryPreviousAttributes.country variant 1

anyOf variant 1: ISO 3166-1 alpha-2 issuing country. `null` when the issuing country was not recorded, including older payments..

- Value shape: string. ISO 3166-1 alpha-2 issuing country. `null` when the issuing country was not recorded, including older payments. ISO 3166-1 alpha-2 issuing country. `null` when the issuing country was not recorded, including older payments. minLength: `2`. maxLength: `2`. pattern: `^[A-Z]{2}$`. 

### PaymentSourceCardSummaryPreviousAttributes.country variant 2

anyOf variant 2.

- Value shape: null. ISO 3166-1 alpha-2 issuing country. `null` when the issuing country was not recorded, including older payments. 

### PaymentSourceCardSummaryPreviousAttributes.funding

### PaymentSourceCardSummaryPreviousAttributes.funding variant 1

anyOf variant 1: How the card is funded. `null` when no recognized funding type was recorded..

- Value shape: string. How the card is funded. `null` when no recognized funding type was recorded. Values: `"credit"`, `"debit"`, `"prepaid"`, `null`.

### PaymentSourceCardSummaryPreviousAttributes.funding variant 2

anyOf variant 2.

- Value shape: null. How the card is funded. `null` when no recognized funding type was recorded. 

### PaymentSourceCardSummaryPreviousAttributes.last4

### PaymentSourceCardSummaryPreviousAttributes.last4 variant 1

anyOf variant 1: Last four digits of the card number..

- Value shape: string. Last four digits of the card number. 

### PaymentSourceCardSummaryPreviousAttributes.last4 variant 2

anyOf variant 2.

- Value shape: null. Last four digits of the card number. 

### PaymentSourceCardSummaryPreviousAttributes.payment_method_id

### PaymentSourceCardSummaryPreviousAttributes.payment_method_id variant 1

anyOf variant 1: ID of the saved Flint payment method for this card. Absent when the card isn't saved, as with a card read on a reader..

- Value shape: string. ID of the saved Flint payment method for this card. Absent when the card isn't saved, as with a card read on a reader. 

### PaymentSourceCardSummaryPreviousAttributes.payment_method_id variant 2

anyOf variant 2.

- Value shape: null. ID of the saved Flint payment method for this card. Absent when the card isn't saved, as with a card read on a reader. 

