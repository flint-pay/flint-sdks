[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PublicCatalogModifierRequest

A buyer's modifier choice for one line of a checkout started without an API key.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `modifier_id` | Conditional | string | ID of the modifier option the buyer chose. Required for `type: catalog`; omit for `type: text`. minLength: `1`. Example: `"mod_01KEZF7C00SAWDZBQJX5H0XW1S"`. |
| `quantity` | Optional | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `text` | Conditional | [TextModifierRequest](../models/TextModifierRequest.md#textmodifierrequest) | The text the buyer entered for a text modifier group. Required for `type: text`; omit for `type: catalog`. The text a buyer entered for a text modifier group. `text`: [field definitions](../models/PublicCatalogModifierInputCatalog.md#publiccatalogmodifierinputcatalogtext). |
| `type` | Required | string | Selects a catalog modifier or a text modifier. Values: `"catalog"`, `"text"`. |

### PublicCatalogModifierRequest variant 1: `type` = `"catalog"`

oneOf with type: "catalog": The `catalog` variant of `PublicCatalogModifierInput`..

- Condition: not (present(`text`)).
- Required: `modifier_id`.
- Optional: `text`.
- Constraints for `type`: Values: `"catalog"`.

### PublicCatalogModifierRequest variant 2: `type` = `"text"`

oneOf with type: "text": The `text` variant of `PublicCatalogModifierInput`..

- Condition: not (at least one(present(`modifier_id`); present(`quantity`))).
- Required: `text`.
- Optional: `modifier_id`.
- Constraints for `type`: Values: `"text"`.

### PublicCatalogModifierRequest.text

Field definitions: [PublicCatalogModifierInputCatalog.text](../models/PublicCatalogModifierInputCatalog.md#publiccatalogmodifierinputcatalogtext).

