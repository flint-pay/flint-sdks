[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ProductOptionResponse

A response containing `ProductOption` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [ProductOption](../models/ProductOption.md#productoption) | The requested product option data. A choice that defines a product's variants. `data`: [field definitions](../models/ProductOptionResponse.md#productoptionresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `request_id` | Required | string | Identifier of this API request, useful when contacting support. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### ProductOptionResponse.data

The requested product option data. A choice that defines a product's variants.

Field definitions: [shared fields](ProductResponse.md#productresponsedataoptions).

### ProductOptionResponse.data.metadata

Field definitions: [BundleResponse.data.metadata](../models/BundleResponse.md#bundleresponsedatametadata).

### ProductOptionResponse.data.values[]

Field definitions: [ProductResponse.data.options[].values[]](../models/ProductResponse.md#productresponsedataoptionsvalues).

### ProductOptionResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

