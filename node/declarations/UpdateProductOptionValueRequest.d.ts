


export type UpdateProductOptionValueRequest = { /** Complete caller-owned metadata for this option value. Retained option values are replaced as members of the options array, so omitting metadata, sending null, or sending {} clears it. A null-valued key is omitted from the replacement. Empty strings are stored. Keys starting with flint_ are reserved and cannot be written through the public API. */ "metadata"?: Record<string, string | null> | null; /** pattern: ^optv_[0-9A-HJKMNP-TV-Z]{26}$. */ "option_value_id"?: string; /** Format: int32. minimum: 0. */ "position"?: number; "status"?: "active" | "inactive" | (string & {}); /** minLength: 1. maxLength: 255. */ "value": string; };
