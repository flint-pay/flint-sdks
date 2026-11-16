[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CheckoutProblemResourcePreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `blocks_completion` | Optional | boolean or null | Whether the checkout cannot complete until the problem is resolved. `blocks_completion`: [declared alternatives](../models/CheckoutProblemResourcePreviousAttributes.md#checkoutproblemresourcepreviousattributesblocks_completion). |
| `code` | Optional | string or null | Which condition affects the checkout. Values: `"delivery_selection_stale"`, `"delivery_selection_invalid"`, `"delivery_unreadable"`, `"payment_in_progress"`. `code`: [declared alternatives](../models/CheckoutProblemResourcePreviousAttributes.md#checkoutproblemresourcepreviousattributescode). |
| `remediation` | Optional | [ErrorRemediationPreviousAttributes](../models/ErrorRemediationPreviousAttributes.md#errorremediationpreviousattributes) or null | What the caller can do about the problem, and whether retrying the same request can help. |
| `severity` | Optional | string or null | How serious the problem is. Values: `"error"`. `severity`: [declared alternatives](../models/CheckoutProblemResourcePreviousAttributes.md#checkoutproblemresourcepreviousattributesseverity). |

### CheckoutProblemResourcePreviousAttributes.blocks_completion

### CheckoutProblemResourcePreviousAttributes.blocks_completion variant 1

anyOf variant 1: Whether the checkout cannot complete until the problem is resolved..

- Value shape: boolean. Whether the checkout cannot complete until the problem is resolved. 

### CheckoutProblemResourcePreviousAttributes.blocks_completion variant 2

anyOf variant 2.

- Value shape: null. Whether the checkout cannot complete until the problem is resolved. 

### CheckoutProblemResourcePreviousAttributes.code

### CheckoutProblemResourcePreviousAttributes.code variant 1

anyOf variant 1: Which condition affects the checkout..

- Value shape: string. Which condition affects the checkout. Values: `"delivery_selection_stale"`, `"delivery_selection_invalid"`, `"delivery_unreadable"`, `"payment_in_progress"`.

### CheckoutProblemResourcePreviousAttributes.code variant 2

anyOf variant 2.

- Value shape: null. Which condition affects the checkout. 

### CheckoutProblemResourcePreviousAttributes.severity

### CheckoutProblemResourcePreviousAttributes.severity variant 1

anyOf variant 1: How serious the problem is..

- Value shape: string. How serious the problem is. Values: `"error"`.

### CheckoutProblemResourcePreviousAttributes.severity variant 2

anyOf variant 2.

- Value shape: null. How serious the problem is. 

