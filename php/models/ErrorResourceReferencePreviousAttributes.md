[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ErrorResourceReferencePreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `resource_id` | Optional | string or null | Public Flint ID of the referenced resource. `resource_id`: [declared alternatives](../models/ErrorResourceReferencePreviousAttributes.md#errorresourcereferencepreviousattributesresource_id). |
| `resource_type` | Optional | string or null | Stable public resource name for the referenced resource: a ResourceType value, or resource when the resource has no public type. `resource_type`: [declared alternatives](../models/ErrorResourceReferencePreviousAttributes.md#errorresourcereferencepreviousattributesresource_type). |
| `status` | Optional | string or null | Current public status of the referenced resource when available. `status`: [declared alternatives](../models/CustomerDeletionRequestCompletedEvent.md#customerdeletionrequestcompletedeventdata-fields-1previous_attributesblocking_resources-variant-1-fields-1status). |

### ErrorResourceReferencePreviousAttributes.resource_id

### ErrorResourceReferencePreviousAttributes.resource_id variant 1

anyOf variant 1: Public Flint ID of the referenced resource..

- Value shape: string. Public Flint ID of the referenced resource. 

### ErrorResourceReferencePreviousAttributes.resource_id variant 2

anyOf variant 2.

- Value shape: null. Public Flint ID of the referenced resource. 

### ErrorResourceReferencePreviousAttributes.resource_type

### ErrorResourceReferencePreviousAttributes.resource_type variant 1

anyOf variant 1: Stable public resource name for the referenced resource: a ResourceType value, or resource when the resource has no public type..

- Value shape: string. Stable public resource name for the referenced resource: a ResourceType value, or resource when the resource has no public type. 

### ErrorResourceReferencePreviousAttributes.resource_type variant 2

anyOf variant 2.

- Value shape: null. Stable public resource name for the referenced resource: a ResourceType value, or resource when the resource has no public type. 

### ErrorResourceReferencePreviousAttributes.status

Declared alternatives: [CustomerDeletionRequestCompletedEvent.data fields 1.previous_attributes.blocking_resources variant 1.[] fields 1.status](../models/CustomerDeletionRequestCompletedEvent.md#customerdeletionrequestcompletedeventdata-fields-1previous_attributesblocking_resources-variant-1-fields-1status).

