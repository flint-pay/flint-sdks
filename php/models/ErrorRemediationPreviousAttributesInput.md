[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ErrorRemediationPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `next_actions` | Optional | Array of [NextActionPreviousAttributesInput](../models/NextActionPreviousAttributesInput.md#nextactionpreviousattributesinput) or null | Suggested actions for resolving the error, including the target resource and any required input. `next_actions`: [declared alternatives](../models/ErrorRemediationPreviousAttributesInput.md#errorremediationpreviousattributesinputnext_actions). |
| `next_steps` | Optional | string or null | What to change or check before attempting the operation again. `next_steps`: [declared alternatives](../models/ErrorRemediationPreviousAttributesInput.md#errorremediationpreviousattributesinputnext_steps). |
| `retry` | Optional | string or null | Whether sending this request again can succeed, and how. It depends only on code and details[0].reason; the errors reference lists the value for each. Values: `"same_request"`, `"after_refresh"`, `"none"`. `retry`: [declared alternatives](../models/ErrorRemediationPreviousAttributesInput.md#errorremediationpreviousattributesinputretry). |

### ErrorRemediationPreviousAttributesInput.next_actions

### ErrorRemediationPreviousAttributesInput.next_actions variant 1

anyOf variant 1: Suggested actions for resolving the error, including the target resource and any required input..

- Value shape: Array of [NextActionPreviousAttributesInput](../models/NextActionPreviousAttributesInput.md#nextactionpreviousattributesinput). Suggested actions for resolving the error, including the target resource and any required input. 

### ErrorRemediationPreviousAttributesInput.next_actions variant 2

anyOf variant 2.

- Value shape: null. Suggested actions for resolving the error, including the target resource and any required input. 

### ErrorRemediationPreviousAttributesInput.next_steps

### ErrorRemediationPreviousAttributesInput.next_steps variant 1

anyOf variant 1: What to change or check before attempting the operation again..

- Value shape: string. What to change or check before attempting the operation again. 

### ErrorRemediationPreviousAttributesInput.next_steps variant 2

anyOf variant 2.

- Value shape: null. What to change or check before attempting the operation again. 

### ErrorRemediationPreviousAttributesInput.retry

### ErrorRemediationPreviousAttributesInput.retry variant 1

anyOf variant 1: Whether sending this request again can succeed, and how. It depends only on code and details[0].reason; the errors reference lists the value for each..

- Value shape: string. Whether sending this request again can succeed, and how. It depends only on code and details[0].reason; the errors reference lists the value for each. Values: `"same_request"`, `"after_refresh"`, `"none"`.

### ErrorRemediationPreviousAttributesInput.retry variant 2

anyOf variant 2.

- Value shape: null. Whether sending this request again can succeed, and how. It depends only on code and details[0].reason; the errors reference lists the value for each. 

