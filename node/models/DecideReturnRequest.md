[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DecideReturnRequest

The request body for: Decide return.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `completion_mode` | Optional | string | Omit to use the mode shared by all pinned policies that set completion_mode, or automatic when no pinned policy sets one. Conflicting pinned policy modes return 400 naming completion_mode only when completion_mode is omitted. An explicit manual or automatic value is used as sent. Values: `"manual"`, `"automatic"`. |
| `expected_version` | Optional | integer | Format: `int64`. minimum: `1`. |
| `line_items` | Required | Array of [ReturnLineDecision](../models/ReturnLineDecision.md#returnlinedecision) | minItems: `1`. |

