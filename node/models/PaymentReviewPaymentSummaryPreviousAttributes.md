[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentReviewPaymentSummaryPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The payment's requested amount when it was confirmed. `amount_money`: [declared alternatives](../models/PaymentReviewPaymentSummaryPreviousAttributes.md#paymentreviewpaymentsummarypreviousattributesamount_money). |
| `authorization_expires_at` | Optional | string or null | Effective Flint capture deadline: the earlier of the provider capture deadline and any order resource guarantee. `null` when the payment has no authorization deadline. `authorization_expires_at`: [declared alternatives](../models/PaymentReviewPaymentSummaryPreviousAttributes.md#paymentreviewpaymentsummarypreviousattributesauthorization_expires_at). |
| `capture_method` | Optional | string or null | Whether the payment collects when confirmed or holds the funds for a later capture. Values: `"automatic"`, `"manual"`. `capture_method`: [declared alternatives](../models/PaymentReviewPaymentSummaryPreviousAttributes.md#paymentreviewpaymentsummarypreviousattributescapture_method). |
| `email` | Optional | string or null | The buyer's email address used for screening: the payment's receipt email, or else the email on the payment method, in lowercase. Empty when neither is known. `email`: [declared alternatives](../models/PaymentReviewPaymentSummaryPreviousAttributes.md#paymentreviewpaymentsummarypreviousattributesemail). |
| `last4` | Optional | string or null | Last four digits of the card number. Empty when the payment has no card details. `last4`: [declared alternatives](../models/PaymentReviewPaymentSummaryPreviousAttributes.md#paymentreviewpaymentsummarypreviousattributeslast4). |
| `payment_method_brand` | Optional | string or null | The card network, as recorded when the payment was confirmed. Values: `"amex"`, `"discover"`, `"diners"`, `"jcb"`, `"mastercard"`, `"unionpay"`, `"visa"`. `payment_method_brand`: [declared alternatives](../models/PaymentReviewPaymentSummaryPreviousAttributes.md#paymentreviewpaymentsummarypreviousattributespayment_method_brand). |

### PaymentReviewPaymentSummaryPreviousAttributes.amount_money

The payment's requested amount when it was confirmed.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### PaymentReviewPaymentSummaryPreviousAttributes.amount_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### PaymentReviewPaymentSummaryPreviousAttributes.amount_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. The payment's requested amount when it was confirmed. 

### PaymentReviewPaymentSummaryPreviousAttributes.amount_money variant 1.amount

Declared alternatives: [BalanceUpdatedInstalledMerchantsEvent.data.previous_attributes.held_money variant 1.amount](../models/BalanceUpdatedInstalledMerchantsEvent.md#balanceupdatedinstalledmerchantseventdataprevious_attributesheld_money-variant-1amount).

### PaymentReviewPaymentSummaryPreviousAttributes.amount_money variant 1.currency

Declared alternatives: [BalanceTransactionUpdatedInstalledMerchantsEvent.data.previous_attributes.amount_money variant 1.currency](../models/BalanceTransactionUpdatedInstalledMerchantsEvent.md#balancetransactionupdatedinstalledmerchantseventdataprevious_attributesamount_money-variant-1currency).

### PaymentReviewPaymentSummaryPreviousAttributes.authorization_expires_at

### PaymentReviewPaymentSummaryPreviousAttributes.authorization_expires_at variant 1

anyOf variant 1: Effective Flint capture deadline: the earlier of the provider capture deadline and any order resource guarantee. `null` when the payment has no authorization deadline..

- Value shape: string. Effective Flint capture deadline: the earlier of the provider capture deadline and any order resource guarantee. `null` when the payment has no authorization deadline. Effective Flint capture deadline: the earlier of the provider capture deadline and any order resource guarantee. `null` when the payment has no authorization deadline. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### PaymentReviewPaymentSummaryPreviousAttributes.authorization_expires_at variant 2

anyOf variant 2.

- Value shape: null. Effective Flint capture deadline: the earlier of the provider capture deadline and any order resource guarantee. `null` when the payment has no authorization deadline. 

### PaymentReviewPaymentSummaryPreviousAttributes.capture_method

### PaymentReviewPaymentSummaryPreviousAttributes.capture_method variant 1

anyOf variant 1: Whether the payment collects when confirmed or holds the funds for a later capture..

- Value shape: string. Whether the payment collects when confirmed or holds the funds for a later capture. Values: `"automatic"`, `"manual"`.

### PaymentReviewPaymentSummaryPreviousAttributes.capture_method variant 2

anyOf variant 2.

- Value shape: null. Whether the payment collects when confirmed or holds the funds for a later capture. 

### PaymentReviewPaymentSummaryPreviousAttributes.email

### PaymentReviewPaymentSummaryPreviousAttributes.email variant 1

anyOf variant 1: The buyer's email address used for screening: the payment's receipt email, or else the email on the payment method, in lowercase. Empty when neither is known..

- Value shape: string. The buyer's email address used for screening: the payment's receipt email, or else the email on the payment method, in lowercase. Empty when neither is known. 

### PaymentReviewPaymentSummaryPreviousAttributes.email variant 2

anyOf variant 2.

- Value shape: null. The buyer's email address used for screening: the payment's receipt email, or else the email on the payment method, in lowercase. Empty when neither is known. 

### PaymentReviewPaymentSummaryPreviousAttributes.last4

### PaymentReviewPaymentSummaryPreviousAttributes.last4 variant 1

anyOf variant 1: Last four digits of the card number. Empty when the payment has no card details..

- Value shape: string. Last four digits of the card number. Empty when the payment has no card details. 

### PaymentReviewPaymentSummaryPreviousAttributes.last4 variant 2

anyOf variant 2.

- Value shape: null. Last four digits of the card number. Empty when the payment has no card details. 

### PaymentReviewPaymentSummaryPreviousAttributes.payment_method_brand

### PaymentReviewPaymentSummaryPreviousAttributes.payment_method_brand variant 1

anyOf variant 1: The card network, as recorded when the payment was confirmed..

- Value shape: string. The card network, as recorded when the payment was confirmed. Values: `"amex"`, `"discover"`, `"diners"`, `"jcb"`, `"mastercard"`, `"unionpay"`, `"visa"`.

### PaymentReviewPaymentSummaryPreviousAttributes.payment_method_brand variant 2

anyOf variant 2.

- Value shape: null. The card network, as recorded when the payment was confirmed. 

