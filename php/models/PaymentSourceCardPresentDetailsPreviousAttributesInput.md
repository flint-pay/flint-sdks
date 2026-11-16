[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentSourceCardPresentDetailsPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `application_id` | Optional | string or null or null | EMV application identifier (AID). Null when absent or outside the supported shape. `application_id`: [declared alternatives](../models/PaymentSourceCardPresentDetailsPreviousAttributesInput.md#paymentsourcecardpresentdetailspreviousattributesinputapplication_id). |
| `application_name` | Optional | string or null or null | Card application's label, such as VISA CREDIT. Null when absent or outside the supported shape. `application_name`: [declared alternatives](../models/PaymentSourceCardPresentDetailsPreviousAttributesInput.md#paymentsourcecardpresentdetailspreviousattributesinputapplication_name). |
| `authorization_code` | Optional | string or null or null | Issuer's authorization code. Null when absent or outside the supported shape. `authorization_code`: [declared alternatives](../models/PaymentSourceCardPresentDetailsPreviousAttributesInput.md#paymentsourcecardpresentdetailspreviousattributesinputauthorization_code). |
| `cardholder_verification` | Optional | string or null | How the buyer was verified. consumer_device means the phone verified the buyer. Unrecognized methods are other. Values: `"pin"`, `"signature"`, `"consumer_device"`, `"none"`, `"other"`. `cardholder_verification`: [declared alternatives](../models/PaymentSourceCardPresentDetailsPreviousAttributesInput.md#paymentsourcecardpresentdetailspreviousattributesinputcardholder_verification). |
| `read_method` | Optional | string or null | How the card was read. swipe_fallback means a swipe after a failed chip read. Unrecognized methods are other. Values: `"contactless"`, `"chip"`, `"swipe"`, `"swipe_fallback"`, `"other"`. `read_method`: [declared alternatives](../models/PaymentSourceCardPresentDetailsPreviousAttributesInput.md#paymentsourcecardpresentdetailspreviousattributesinputread_method). |
| `wallet` | Optional | string or null | Wallet used on the reader. Absent when a card was used; unrecognized wallets are other. Values: `"apple_pay"`, `"google_pay"`, `"samsung_pay"`, `"other"`. `wallet`: [declared alternatives](../models/PaymentSourceCardPresentDetailsPreviousAttributesInput.md#paymentsourcecardpresentdetailspreviousattributesinputwallet). |

### PaymentSourceCardPresentDetailsPreviousAttributesInput.application_id

### PaymentSourceCardPresentDetailsPreviousAttributesInput.application_id variant 1

anyOf variant 1: EMV application identifier (AID). Null when absent or outside the supported shape..

- Value shape: (string or null). EMV application identifier (AID). Null when absent or outside the supported shape. EMV application identifier (AID). Null when absent or outside the supported shape. pattern: `^[0-9A-F]{10,32}$`. Example: `"A0000000031010"`. 

### PaymentSourceCardPresentDetailsPreviousAttributesInput.application_id variant 2

anyOf variant 2.

- Value shape: null. EMV application identifier (AID). Null when absent or outside the supported shape. 

### PaymentSourceCardPresentDetailsPreviousAttributesInput.application_name

### PaymentSourceCardPresentDetailsPreviousAttributesInput.application_name variant 1

anyOf variant 1: Card application's label, such as VISA CREDIT. Null when absent or outside the supported shape..

- Value shape: (string or null). Card application's label, such as VISA CREDIT. Null when absent or outside the supported shape. Card application's label, such as VISA CREDIT. Null when absent or outside the supported shape. pattern: `^[ -~]{1,16}$`. 

### PaymentSourceCardPresentDetailsPreviousAttributesInput.application_name variant 2

anyOf variant 2.

- Value shape: null. Card application's label, such as VISA CREDIT. Null when absent or outside the supported shape. 

### PaymentSourceCardPresentDetailsPreviousAttributesInput.authorization_code

### PaymentSourceCardPresentDetailsPreviousAttributesInput.authorization_code variant 1

anyOf variant 1: Issuer's authorization code. Null when absent or outside the supported shape..

- Value shape: (string or null). Issuer's authorization code. Null when absent or outside the supported shape. Issuer's authorization code. Null when absent or outside the supported shape. pattern: `^[0-9A-Za-z]{1,12}$`. 

### PaymentSourceCardPresentDetailsPreviousAttributesInput.authorization_code variant 2

anyOf variant 2.

- Value shape: null. Issuer's authorization code. Null when absent or outside the supported shape. 

### PaymentSourceCardPresentDetailsPreviousAttributesInput.cardholder_verification

### PaymentSourceCardPresentDetailsPreviousAttributesInput.cardholder_verification variant 1

anyOf variant 1: How the buyer was verified. consumer_device means the phone verified the buyer. Unrecognized methods are other..

- Value shape: string. How the buyer was verified. consumer_device means the phone verified the buyer. Unrecognized methods are other. Values: `"pin"`, `"signature"`, `"consumer_device"`, `"none"`, `"other"`.

### PaymentSourceCardPresentDetailsPreviousAttributesInput.cardholder_verification variant 2

anyOf variant 2.

- Value shape: null. How the buyer was verified. consumer_device means the phone verified the buyer. Unrecognized methods are other. 

### PaymentSourceCardPresentDetailsPreviousAttributesInput.read_method

### PaymentSourceCardPresentDetailsPreviousAttributesInput.read_method variant 1

anyOf variant 1: How the card was read. swipe_fallback means a swipe after a failed chip read. Unrecognized methods are other..

- Value shape: string. How the card was read. swipe_fallback means a swipe after a failed chip read. Unrecognized methods are other. Values: `"contactless"`, `"chip"`, `"swipe"`, `"swipe_fallback"`, `"other"`.

### PaymentSourceCardPresentDetailsPreviousAttributesInput.read_method variant 2

anyOf variant 2.

- Value shape: null. How the card was read. swipe_fallback means a swipe after a failed chip read. Unrecognized methods are other. 

### PaymentSourceCardPresentDetailsPreviousAttributesInput.wallet

### PaymentSourceCardPresentDetailsPreviousAttributesInput.wallet variant 1

anyOf variant 1: Wallet used on the reader. Absent when a card was used; unrecognized wallets are other..

- Value shape: string. Wallet used on the reader. Absent when a card was used; unrecognized wallets are other. Values: `"apple_pay"`, `"google_pay"`, `"samsung_pay"`, `"other"`.

### PaymentSourceCardPresentDetailsPreviousAttributesInput.wallet variant 2

anyOf variant 2.

- Value shape: null. Wallet used on the reader. Absent when a card was used; unrecognized wallets are other. 

