[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ErrorRemediationPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `next_actions` | Optional | Array of [NextActionPreviousAttributes](../models/NextActionPreviousAttributes.md#nextactionpreviousattributes) or null | Suggested actions for resolving the error, including the target resource and any required input. `next_actions`: [declared alternatives](../models/ErrorRemediationPreviousAttributes.md#errorremediationpreviousattributesnext_actions). |
| `next_steps` | Optional | string or null | What to change or check before attempting the operation again. `next_steps`: [declared alternatives](../models/ErrorRemediationPreviousAttributes.md#errorremediationpreviousattributesnext_steps). |
| `retry` | Optional | string or null | Whether sending this request again can succeed, and how. It depends only on code and details[0].reason; the errors reference lists the value for each. Values: `"same_request"`, `"after_refresh"`, `"none"`. `retry`: [declared alternatives](../models/ErrorRemediationPreviousAttributes.md#errorremediationpreviousattributesretry). |

### ErrorRemediationPreviousAttributes.next_actions

### ErrorRemediationPreviousAttributes.next_actions variant 1

anyOf variant 1: Suggested actions for resolving the error, including the target resource and any required input..

- Value shape: Array of [NextActionPreviousAttributes](../models/NextActionPreviousAttributes.md#nextactionpreviousattributes). Suggested actions for resolving the error, including the target resource and any required input. 

### ErrorRemediationPreviousAttributes.next_actions variant 2

anyOf variant 2.

- Value shape: null. Suggested actions for resolving the error, including the target resource and any required input. 

### ErrorRemediationPreviousAttributes.next_steps

### ErrorRemediationPreviousAttributes.next_steps variant 1

anyOf variant 1: What to change or check before attempting the operation again..

- Value shape: string. What to change or check before attempting the operation again. 

### ErrorRemediationPreviousAttributes.next_steps variant 2

anyOf variant 2.

- Value shape: null. What to change or check before attempting the operation again. 

### ErrorRemediationPreviousAttributes.retry

### ErrorRemediationPreviousAttributes.retry variant 1

anyOf variant 1: Whether sending this request again can succeed, and how. It depends only on code and details[0].reason; the errors reference lists the value for each..

- Value shape: string. Whether sending this request again can succeed, and how. It depends only on code and details[0].reason; the errors reference lists the value for each. Values: `"same_request"`, `"after_refresh"`, `"none"`.

### ErrorRemediationPreviousAttributes.retry variant 2

anyOf variant 2.

- Value shape: null. Whether sending this request again can succeed, and how. It depends only on code and details[0].reason; the errors reference lists the value for each. 

