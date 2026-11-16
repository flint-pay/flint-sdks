[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PayoutTraceIDPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `status` | Optional | string or null | Whether a bank trace ID is available. Unmapped trace states are returned as unsupported. Values: `"pending"`, `"available"`, `"unsupported"`. `status`: [declared alternatives](../models/PayoutTraceIDPreviousAttributes.md#payouttraceidpreviousattributesstatus). |
| `value` | Optional | string or null | The bank's trace number for the deposit, when Flint has it. `value`: [declared alternatives](../models/PayoutTraceIDPreviousAttributes.md#payouttraceidpreviousattributesvalue). |

### PayoutTraceIDPreviousAttributes.status

### PayoutTraceIDPreviousAttributes.status variant 1

anyOf variant 1: Whether a bank trace ID is available. Unmapped trace states are returned as unsupported..

- Value shape: string. Whether a bank trace ID is available. Unmapped trace states are returned as unsupported. Values: `"pending"`, `"available"`, `"unsupported"`.

### PayoutTraceIDPreviousAttributes.status variant 2

anyOf variant 2.

- Value shape: null. Whether a bank trace ID is available. Unmapped trace states are returned as unsupported. 

### PayoutTraceIDPreviousAttributes.value

### PayoutTraceIDPreviousAttributes.value variant 1

anyOf variant 1: The bank's trace number for the deposit, when Flint has it..

- Value shape: string. The bank's trace number for the deposit, when Flint has it. 

### PayoutTraceIDPreviousAttributes.value variant 2

anyOf variant 2.

- Value shape: null. The bank's trace number for the deposit, when Flint has it. 

