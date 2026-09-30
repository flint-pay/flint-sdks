
import type { CreateProductOptionValueRequest } from './CreateProductOptionValueRequest.js';

export type CreateProductOptionRequest = { /** maxLength: 100. */ "client_option_key"?: string; "metadata"?: Record<string, string>; /** minLength: 1. maxLength: 255. */ "name": string; /** Format: int32. minimum: 0. */ "position"?: number; "status"?: "active" | "inactive" | (string & {}); "values"?: Array<CreateProductOptionValueRequest>; };
