[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentFulfillmentHoldPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `reason` | Optional | string or null | Why the hold exists, which follows its status. Values: `"external_payment_hold"`, `"external_payment_hold_released"`. `reason`: [declared alternatives](../models/PaymentFulfillmentHoldPreviousAttributesInput.md#paymentfulfillmentholdpreviousattributesinputreason). |
| `released_at` | Optional | string or null | RFC3339 timestamp. `released_at`: [declared alternatives](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at). |
| `requested_at` | Optional | string or null | RFC3339 timestamp. `requested_at`: [declared alternatives](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at). |
| `required_action` | Optional | string or null | What to do with fulfillment for this payment now. It follows the hold's status. Values: `"pause_fulfillment"`, `"reevaluate_fulfillment"`. `required_action`: [declared alternatives](../models/PaymentFulfillmentHoldPreviousAttributesInput.md#paymentfulfillmentholdpreviousattributesinputrequired_action). |
| `status` | Optional | string or null | Whether the hold is in force. Values: `"active"`, `"released"`. `status`: [declared alternatives](../models/PaymentFulfillmentHoldPreviousAttributesInput.md#paymentfulfillmentholdpreviousattributesinputstatus). |
| `updated_at` | Optional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at). |

### PaymentFulfillmentHoldPreviousAttributesInput.reason

### PaymentFulfillmentHoldPreviousAttributesInput.reason variant 1

anyOf variant 1: Why the hold exists, which follows its status..

- Value shape: string. Why the hold exists, which follows its status. Values: `"external_payment_hold"`, `"external_payment_hold_released"`.

### PaymentFulfillmentHoldPreviousAttributesInput.reason variant 2

anyOf variant 2.

- Value shape: null. Why the hold exists, which follows its status. 

### PaymentFulfillmentHoldPreviousAttributesInput.released_at

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.created_at](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at).

### PaymentFulfillmentHoldPreviousAttributesInput.requested_at

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.created_at](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at).

### PaymentFulfillmentHoldPreviousAttributesInput.required_action

### PaymentFulfillmentHoldPreviousAttributesInput.required_action variant 1

anyOf variant 1: What to do with fulfillment for this payment now. It follows the hold's status..

- Value shape: string. What to do with fulfillment for this payment now. It follows the hold's status. Values: `"pause_fulfillment"`, `"reevaluate_fulfillment"`.

### PaymentFulfillmentHoldPreviousAttributesInput.required_action variant 2

anyOf variant 2.

- Value shape: null. What to do with fulfillment for this payment now. It follows the hold's status. 

### PaymentFulfillmentHoldPreviousAttributesInput.status

### PaymentFulfillmentHoldPreviousAttributesInput.status variant 1

anyOf variant 1: Whether the hold is in force..

- Value shape: string. Whether the hold is in force. Values: `"active"`, `"released"`.

### PaymentFulfillmentHoldPreviousAttributesInput.status variant 2

anyOf variant 2.

- Value shape: null. Whether the hold is in force. 

### PaymentFulfillmentHoldPreviousAttributesInput.updated_at

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.created_at](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at).

