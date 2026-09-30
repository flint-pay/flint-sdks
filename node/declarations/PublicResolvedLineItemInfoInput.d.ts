
import type { ImageInput } from './ImageInput.js';
import type { MoneyValueInput } from './MoneyValueInput.js';
import type { PublicResolvedBundleComponentInput } from './PublicResolvedBundleComponentInput.js';
import type { PublicResolvedModifierGroupInput } from './PublicResolvedModifierGroupInput.js';
import type { SelectedProductOptionInput } from './SelectedProductOptionInput.js';

export type PublicResolvedLineItemInfoInput = { "available_modifiers"?: Array<PublicResolvedModifierGroupInput>; "bundle_components"?: Array<PublicResolvedBundleComponentInput>; "bundle_id"?: string; "catalog_object_type"?: "unknown" | "variant" | "bundle"; "image"?: ImageInput; "is_inventory_tracked"?: boolean; "key": string; "product_id"?: string; "resolved_description"?: string; "resolved_name"?: string; "resolved_unit_price_money"?: MoneyValueInput; "selected_options"?: Array<SelectedProductOptionInput>; "variant_id"?: string; };
