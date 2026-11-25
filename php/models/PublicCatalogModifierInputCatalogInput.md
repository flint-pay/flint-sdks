[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PublicCatalogModifierInputCatalogInput

The `catalog` variant of `PublicCatalogModifierInput`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `modifier_id` | Required | string | ID of the modifier option the buyer chose. Required for `type: catalog`; omit for `type: text`. minLength: `1`. Example: `"mod_01KEZF7C00SAWDZBQJX5H0XW1S"`. |
| `quantity` | Optional | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `text` | Optional | [PublicCatalogTextModifierRequestInput](../models/PublicCatalogTextModifierRequestInput.md#publiccatalogtextmodifierrequestinput) | The text the buyer entered for a text modifier group. Required for `type: text`; omit for `type: catalog`. The text a buyer entered for a text modifier group. |
| `type` | Required | string | Selects a catalog modifier or a text modifier. Values: `"catalog"`. |

