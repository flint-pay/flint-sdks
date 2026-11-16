[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PendingPaymentActionSetupPaymentSourceSubjectPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `payment_method_id` | Optional | string or null | ID of the payment method being saved, which needs the buyer's authentication first. `payment_method_id`: [declared alternatives](../models/PendingPaymentActionSetupPaymentSourceSubjectPreviousAttributesInput.md#pendingpaymentactionsetuppaymentsourcesubjectpreviousattributesinputpayment_method_id). |

### PendingPaymentActionSetupPaymentSourceSubjectPreviousAttributesInput.payment_method_id

### PendingPaymentActionSetupPaymentSourceSubjectPreviousAttributesInput.payment_method_id variant 1

anyOf variant 1: ID of the payment method being saved, which needs the buyer's authentication first..

- Value shape: string. ID of the payment method being saved, which needs the buyer's authentication first. ID of the payment method being saved, which needs the buyer's authentication first. Example: `"pm_01KEZF7C0034B248TXXE4NXYFZ"`. 

### PendingPaymentActionSetupPaymentSourceSubjectPreviousAttributesInput.payment_method_id variant 2

anyOf variant 2.

- Value shape: null. ID of the payment method being saved, which needs the buyer's authentication first. 

