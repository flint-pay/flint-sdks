import type { InputValue } from '../runtime.js';


export type DeliveryProfilesListInput = { /** minimum: 1. maximum: 100. */ "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; /** maxLength: 255. */ "query"?: InputValue<string>; /** minLength: 1. maxLength: 255. */ "external_reference_id"?: InputValue<string>; "status"?: InputValue<"inactive" | "active" | "archived" | "revoked">; "resolution_mode"?: InputValue<"quote" | "manual">; "include_diagnostics"?: InputValue<boolean>; /** Format: date. */ "Flint-Version"?: InputValue<string>; };
