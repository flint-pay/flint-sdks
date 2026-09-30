
import type { SelectedProductOption } from './SelectedProductOption.js';

export type BundleComponentVariantSummary = { "available_for_sale": boolean; "name"?: string; /** Name of the product the variant belongs to. */ "product_name"?: string; "selected_options"?: Array<SelectedProductOption>; "sku"?: string; "variant_id": string; };
