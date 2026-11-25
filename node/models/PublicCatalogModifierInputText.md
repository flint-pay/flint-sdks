[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PublicCatalogModifierInputText

The `text` variant of `PublicCatalogModifierInput`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `modifier_id` | Optional | string | ID of the modifier option the buyer chose. Required for `type: catalog`; omit for `type: text`. minLength: `1`. Example: `"mod_01KEZF7C00SAWDZBQJX5H0XW1S"`. |
| `quantity` | Optional | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `text` | Required | [TextModifierRequest](../models/TextModifierRequest.md#textmodifierrequest) | The text the buyer entered for a text modifier group. Required for `type: text`; omit for `type: catalog`. The text a buyer entered for a text modifier group. `text`: [field definitions](../models/PublicCatalogModifierInputCatalog.md#publiccatalogmodifierinputcatalogtext). |
| `type` | Required | string | Selects a catalog modifier or a text modifier. Values: `"text"`. |

### PublicCatalogModifierInputText.text

Field definitions: [PublicCatalogModifierInputCatalog.text](../models/PublicCatalogModifierInputCatalog.md#publiccatalogmodifierinputcatalogtext).

