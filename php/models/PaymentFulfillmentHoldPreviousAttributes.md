[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentFulfillmentHoldPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `reason` | Optional | string or null | Why the hold exists, which follows its status. Values: `"external_payment_hold"`, `"external_payment_hold_released"`. `reason`: [declared alternatives](../models/PaymentFulfillmentHoldPreviousAttributes.md#paymentfulfillmentholdpreviousattributesreason). |
| `released_at` | Optional | string or null | RFC3339 timestamp. `released_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `requested_at` | Optional | string or null | RFC3339 timestamp. `requested_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `required_action` | Optional | string or null | What to do with fulfillment for this payment now. It follows the hold's status. Values: `"pause_fulfillment"`, `"reevaluate_fulfillment"`. `required_action`: [declared alternatives](../models/PaymentFulfillmentHoldPreviousAttributes.md#paymentfulfillmentholdpreviousattributesrequired_action). |
| `status` | Optional | string or null | Whether the hold is in force. Values: `"active"`, `"released"`. `status`: [declared alternatives](../models/PaymentFulfillmentHoldPreviousAttributes.md#paymentfulfillmentholdpreviousattributesstatus). |
| `updated_at` | Optional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |

### PaymentFulfillmentHoldPreviousAttributes.reason

### PaymentFulfillmentHoldPreviousAttributes.reason variant 1

anyOf variant 1: Why the hold exists, which follows its status..

- Value shape: string. Why the hold exists, which follows its status. Values: `"external_payment_hold"`, `"external_payment_hold_released"`.

### PaymentFulfillmentHoldPreviousAttributes.reason variant 2

anyOf variant 2.

- Value shape: null. Why the hold exists, which follows its status. 

### PaymentFulfillmentHoldPreviousAttributes.released_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### PaymentFulfillmentHoldPreviousAttributes.requested_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### PaymentFulfillmentHoldPreviousAttributes.required_action

### PaymentFulfillmentHoldPreviousAttributes.required_action variant 1

anyOf variant 1: What to do with fulfillment for this payment now. It follows the hold's status..

- Value shape: string. What to do with fulfillment for this payment now. It follows the hold's status. Values: `"pause_fulfillment"`, `"reevaluate_fulfillment"`.

### PaymentFulfillmentHoldPreviousAttributes.required_action variant 2

anyOf variant 2.

- Value shape: null. What to do with fulfillment for this payment now. It follows the hold's status. 

### PaymentFulfillmentHoldPreviousAttributes.status

### PaymentFulfillmentHoldPreviousAttributes.status variant 1

anyOf variant 1: Whether the hold is in force..

- Value shape: string. Whether the hold is in force. Values: `"active"`, `"released"`.

### PaymentFulfillmentHoldPreviousAttributes.status variant 2

anyOf variant 2.

- Value shape: null. Whether the hold is in force. 

### PaymentFulfillmentHoldPreviousAttributes.updated_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

