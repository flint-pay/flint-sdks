
import type { SelectedProductOptionInput } from './SelectedProductOptionInput.js';

export type BundleComponentVariantSummaryInput = { "available_for_sale": boolean; "name"?: string; /** Name of the product the variant belongs to. */ "product_name"?: string; "selected_options"?: Array<SelectedProductOptionInput>; "sku"?: string; "variant_id": string; };
