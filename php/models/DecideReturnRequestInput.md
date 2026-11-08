[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DecideReturnRequestInput

The request body for: Decide return.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `completion_mode` | Optional | string | Omit to use the mode shared by all pinned policies that set completion_mode, or automatic when no pinned policy sets one. Conflicting pinned policy modes return 400 naming completion_mode only when completion_mode is omitted. An explicit manual or automatic value is used as sent. Values: `"manual"`, `"automatic"`. |
| `expected_version` | Optional | integer | Version last read from the resource returned in `data` (the primary resource for a result object). The write fails with `VERSION_CONFLICT` if it has changed. Requiredness depends on the operation and fields being changed. Format: `int64`. minimum: `1`. |
| `line_items` | Required | Array of [ReturnLineDecisionInput](../models/ReturnLineDecisionInput.md#returnlinedecisioninput) | One decision for each line. minItems: `1`. |

