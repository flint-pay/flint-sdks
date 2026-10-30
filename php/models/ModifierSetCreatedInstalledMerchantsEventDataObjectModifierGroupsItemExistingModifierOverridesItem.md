[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ModifierSetCreatedInstalledMerchantsEventDataObjectModifierGroupsItemExistingModifierOverridesItem

Settings for one modifier that apply only within a modifier set group, overriding the modifier group's own values.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `available` | Optional | boolean | Whether this modifier can be offered in this set. Defaults to true; the modifier must also have status active. Default: `true`. |
| `default_quantity` | Optional | integer | Overrides the modifier's default_quantity for this set. Omit it to use the modifier's value. Ignored when the choice is unavailable. Quantities are whole numbers; fractional quantities are not supported. Format: `int64`. |
| `line_item_tax_category` | Optional | string | Overrides the modifier's line_item_tax_category for this set. Omit it to use the modifier's value. Values: [12 declared values](#modifiersetcreatedinstalledmerchantseventdataobjectmodifiergroupsitemexistingmodifieroverridesitem-line_item_tax_category-values). |
| `modifier_id` | Required | string | Identifier of the list modifier these overrides apply to. minLength: `1`. |
| `selected_by_default` | Optional | boolean | Overrides the modifier's selected_by_default for this set. Omit it to use the modifier's value. Ignored when the choice is unavailable. |
| `taxable` | Optional | boolean | Overrides the modifier's taxable for this set. Omit it to use the modifier's value. |
| `unit_price_delta_money` | Optional | [ModifierSetCreatedInstalledMerchantsEventDataObjectModifierGroupsItemExistingModifierOverridesItemUnitPriceDeltaMoney](../models/ModifierSetCreatedInstalledMerchantsEventDataObjectModifierGroupsItemExistingModifierOverridesItemUnitPriceDeltaMoney.md#modifiersetcreatedinstalledmerchantseventdataobjectmodifiergroupsitemexistingmodifieroverridesitemunitpricedeltamoney) | Overrides the modifier's unit_price_delta_money for this set. Omit it to use the modifier's value. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

#### ModifierSetCreatedInstalledMerchantsEventDataObjectModifierGroupsItemExistingModifierOverridesItem line_item_tax_category values

- `"general"`
- `"physical_goods"`
- `"digital_goods"`
- `"software"`
- `"saas"`
- `"services"`
- `"professional_services"`
- `"food"`
- `"prepared_food"`
- `"clothing"`
- `"medical_goods"`
- `"admission"`

