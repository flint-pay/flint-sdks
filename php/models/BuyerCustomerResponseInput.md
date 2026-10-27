[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerCustomerResponseInput

A response containing `BuyerCustomer` data.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [BuyerCustomerInput](../models/BuyerCustomerInput.md#buyercustomerinput) | A merchant's customer profile. |
| `meta` | Optional | [ResponseMetaInput](../models/ResponseMetaInput.md#responsemetainput) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Optional | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"req_01KWM6WAHG3N9Q8T2V5XRZ7C4D"`. |

