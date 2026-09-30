


export type CreateProductOptionValueRequest = { /** maxLength: 100. */ "client_value_key"?: string; "metadata"?: Record<string, string>; /** Format: int32. minimum: 0. */ "position"?: number; "status"?: "active" | "inactive" | (string & {}); /** minLength: 1. maxLength: 255. */ "value": string; };
