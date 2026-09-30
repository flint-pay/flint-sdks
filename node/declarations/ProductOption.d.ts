
import type { ProductOptionValue } from './ProductOptionValue.js';

export type ProductOption = { /** RFC3339 timestamp. Format: date-time. */ "created_at"?: string; "metadata"?: Record<string, string>; "name": string; "option_id": string; /** Format: int32. */ "position": number; "product_id": string; "status": "active" | "inactive" | "archived" | (string & {}); /** RFC3339 timestamp. Format: date-time. */ "updated_at"?: string; "values"?: Array<ProductOptionValue>; };
