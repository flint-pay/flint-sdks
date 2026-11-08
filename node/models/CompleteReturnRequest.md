[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CompleteReturnRequest

The request body for: Complete return.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expected_version` | Optional | integer | Version last read from the resource returned in `data` (the primary resource for a result object). The write fails with `VERSION_CONFLICT` if it has changed. Requiredness depends on the operation and fields being changed. Format: `int64`. minimum: `1`. |
| `reason` | Optional | string | Why you are completing the Return by hand. Values: `"manual_completion"`, `"exception_waived"`, `"other"`. |
| `reason_message` | Optional | string | Optional detail about `reason`, kept with the record. minLength: `1`. |

