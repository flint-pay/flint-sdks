[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## WorkloadIdentityResponseInput

A response containing `WorkloadIdentity` data.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [WorkloadIdentityInput](../models/WorkloadIdentityInput.md#workloadidentityinput) | A policy that grants API access to a workload authenticated by an external identity provider. |
| `meta` | Optional | [ResponseMetaInput](../models/ResponseMetaInput.md#responsemetainput) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Optional | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"req_01KWM6WAHG3N9Q8T2V5XRZ7C4D"`. |

