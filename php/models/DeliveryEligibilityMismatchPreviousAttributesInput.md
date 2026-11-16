[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryEligibilityMismatchPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `condition` | Optional | string or null | The configured eligibility condition family that did not match. Values: [11 declared values](#deliveryeligibilitymismatchpreviousattributesinput-condition-values). `condition`: [declared alternatives](../models/DeliveryEligibilityMismatchPreviousAttributesInput.md#deliveryeligibilitymismatchpreviousattributesinputcondition). |
| `expression_path` | Optional | string or null | The condition's path in the configured eligibility expression, starting at $. `expression_path`: [declared alternatives](../models/DeliveryEligibilityMismatchPreviousAttributesInput.md#deliveryeligibilitymismatchpreviousattributesinputexpression_path). |
| `field` | Optional | string or null | The eligibility fact evaluated by the condition. Buyer fact values are not included. `field`: [declared alternatives](../models/DeliveryEligibilityMismatchPreviousAttributesInput.md#deliveryeligibilitymismatchpreviousattributesinputfield). |
| `negated` | Optional | boolean or null | Whether the condition matched inside a not expression and therefore rejected the method. `negated`: [declared alternatives](../models/DeliveryEligibilityMismatchPreviousAttributesInput.md#deliveryeligibilitymismatchpreviousattributesinputnegated). |

#### DeliveryEligibilityMismatchPreviousAttributesInput condition values

- `"zone"`
- `"country"`
- `"state"`
- `"postal_code"`
- `"radius"`
- `"window_time"`
- `"subscription_purchase"`
- `"customer_segment"`
- `"customer_merchant_verified"`
- `"customer_has_email"`
- `"customer_has_phone"`

### DeliveryEligibilityMismatchPreviousAttributesInput.condition

### DeliveryEligibilityMismatchPreviousAttributesInput.condition variant 1

anyOf variant 1: The configured eligibility condition family that did not match..

- Value shape: string. The configured eligibility condition family that did not match. Values: `"zone"`, `"country"`, `"state"`, `"postal_code"`, `"radius"`, `"window_time"`, `"subscription_purchase"`, `"customer_segment"`, `"customer_merchant_verified"`, `"customer_has_email"`, `"customer_has_phone"`.

### DeliveryEligibilityMismatchPreviousAttributesInput.condition variant 2

anyOf variant 2.

- Value shape: null. The configured eligibility condition family that did not match. 

### DeliveryEligibilityMismatchPreviousAttributesInput.expression_path

### DeliveryEligibilityMismatchPreviousAttributesInput.expression_path variant 1

anyOf variant 1: The condition's path in the configured eligibility expression, starting at $..

- Value shape: string. The condition's path in the configured eligibility expression, starting at $. 

### DeliveryEligibilityMismatchPreviousAttributesInput.expression_path variant 2

anyOf variant 2.

- Value shape: null. The condition's path in the configured eligibility expression, starting at $. 

### DeliveryEligibilityMismatchPreviousAttributesInput.field

### DeliveryEligibilityMismatchPreviousAttributesInput.field variant 1

anyOf variant 1: The eligibility fact evaluated by the condition. Buyer fact values are not included..

- Value shape: string. The eligibility fact evaluated by the condition. Buyer fact values are not included. 

### DeliveryEligibilityMismatchPreviousAttributesInput.field variant 2

anyOf variant 2.

- Value shape: null. The eligibility fact evaluated by the condition. Buyer fact values are not included. 

### DeliveryEligibilityMismatchPreviousAttributesInput.negated

### DeliveryEligibilityMismatchPreviousAttributesInput.negated variant 1

anyOf variant 1: Whether the condition matched inside a not expression and therefore rejected the method..

- Value shape: boolean. Whether the condition matched inside a not expression and therefore rejected the method. 

### DeliveryEligibilityMismatchPreviousAttributesInput.negated variant 2

anyOf variant 2.

- Value shape: null. Whether the condition matched inside a not expression and therefore rejected the method. 

