
import type { ProductOptionValueInput } from './ProductOptionValueInput.js';

export type ProductOptionInput = { /** RFC3339 timestamp. Format: date-time. */ "created_at"?: never; "metadata"?: Record<string, string>; "name": string; "option_id"?: never; /** Format: int32. */ "position": number; "product_id"?: never; "status": "active" | "inactive" | "archived"; /** RFC3339 timestamp. Format: date-time. */ "updated_at"?: never; "values"?: Array<ProductOptionValueInput>; };
