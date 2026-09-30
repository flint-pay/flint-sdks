


export type CreateBundleComponentRequest = { "delivery_profile_id"?: string; /** Format: int32. minimum: 0. */ "position"?: number; /** Whole-number quantity; fractional quantities are not supported. Format: int32. minimum: 1. maximum: 9999. */ "quantity"?: number; /** pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$. */ "variant_id": string; };
