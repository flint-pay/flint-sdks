
import type { CreateProductOptionValueRequestInput } from './CreateProductOptionValueRequestInput.js';

export type CreateProductOptionRequestInput = { /** maxLength: 100. */ "client_option_key"?: string; "metadata"?: Record<string, string>; /** minLength: 1. maxLength: 255. */ "name": string; /** Format: int32. minimum: 0. */ "position"?: number; "status"?: "active" | "inactive"; "values"?: Array<CreateProductOptionValueRequestInput>; };
