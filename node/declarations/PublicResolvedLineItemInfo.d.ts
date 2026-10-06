
import type { Image } from './Image.js';
import type { MoneyValue } from './MoneyValue.js';
import type { PublicResolvedBundleComponent } from './PublicResolvedBundleComponent.js';
import type { PublicResolvedModifierGroup } from './PublicResolvedModifierGroup.js';
import type { SelectedProductOption } from './SelectedProductOption.js';

export type PublicResolvedLineItemInfo = { "available_modifiers"?: Array<PublicResolvedModifierGroup>; "bundle_components"?: Array<PublicResolvedBundleComponent>; "bundle_id"?: string; "catalog_object_type"?: "variant" | "bundle" | (string & {}); "image"?: Image; "is_inventory_tracked"?: boolean; "key": string; "product_id"?: string; "resolved_description"?: string; "resolved_name"?: string; "resolved_unit_price_money"?: MoneyValue; "selected_options"?: Array<SelectedProductOption>; "variant_id"?: string; };
