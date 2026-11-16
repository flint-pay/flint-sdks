[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PayoutTraceIDPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `status` | Optional | string or null | Whether a bank trace ID is available. Unmapped trace states are returned as unsupported. Values: `"pending"`, `"available"`, `"unsupported"`. `status`: [declared alternatives](../models/PayoutTraceIDPreviousAttributesInput.md#payouttraceidpreviousattributesinputstatus). |
| `value` | Optional | string or null | The bank's trace number for the deposit, when Flint has it. `value`: [declared alternatives](../models/PayoutTraceIDPreviousAttributesInput.md#payouttraceidpreviousattributesinputvalue). |

### PayoutTraceIDPreviousAttributesInput.status

### PayoutTraceIDPreviousAttributesInput.status variant 1

anyOf variant 1: Whether a bank trace ID is available. Unmapped trace states are returned as unsupported..

- Value shape: string. Whether a bank trace ID is available. Unmapped trace states are returned as unsupported. Values: `"pending"`, `"available"`, `"unsupported"`.

### PayoutTraceIDPreviousAttributesInput.status variant 2

anyOf variant 2.

- Value shape: null. Whether a bank trace ID is available. Unmapped trace states are returned as unsupported. 

### PayoutTraceIDPreviousAttributesInput.value

### PayoutTraceIDPreviousAttributesInput.value variant 1

anyOf variant 1: The bank's trace number for the deposit, when Flint has it..

- Value shape: string. The bank's trace number for the deposit, when Flint has it. 

### PayoutTraceIDPreviousAttributesInput.value variant 2

anyOf variant 2.

- Value shape: null. The bank's trace number for the deposit, when Flint has it. 

