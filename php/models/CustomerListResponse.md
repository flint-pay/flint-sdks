[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CustomerListResponse

A page of `Customer` objects.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | Array of [Customer](../models/Customer.md#customer) | Resource, collection, or operation result returned by this request. `data[]`: [field definitions](../models/CustomerListResponse.md#customerlistresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `next_page_token` | Optional | string | Opaque token to send as `page_token` to retrieve the next page. Omitted when there is no next page. |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### CustomerListResponse.data[]

A merchant's customer profile.

Field definitions: [shared fields](CustomerResponse.md#customerresponsedata).

### CustomerListResponse.data[].billing_address

Declared alternatives: [CustomerResponse.data.billing_address](../models/CustomerResponse.md#customerresponsedatabilling_address).

### CustomerListResponse.data[].default_payment_method

Declared alternatives: [CustomerResponse.data.default_payment_method](../models/CustomerResponse.md#customerresponsedatadefault_payment_method).

### CustomerListResponse.data[].metadata

Field definitions: [OrderResponse.data.charges[].metadata](../models/OrderResponse.md#orderresponsedatachargesmetadata).

### CustomerListResponse.data[].receivables

Field definitions: [CustomerResponse.data.receivables](../models/CustomerResponse.md#customerresponsedatareceivables).

### CustomerListResponse.data[].shipping_address

Declared alternatives: [CustomerResponse.data.shipping_address](../models/CustomerResponse.md#customerresponsedatashipping_address).

### CustomerListResponse.data[].tax_identity

Declared alternatives: [CustomerResponse.data.tax_identity](../models/CustomerResponse.md#customerresponsedatatax_identity).

### CustomerListResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

