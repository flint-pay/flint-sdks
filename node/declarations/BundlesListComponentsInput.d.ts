import type { InputValue } from '../runtime.js';


export type BundlesListComponentsInput = { "bundle_id": InputValue<string>; /** minimum: 1. maximum: 100. */ "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "delivery_profile_id"?: InputValue<string>; "delivery_configuration_status"?: InputValue<"configured" | "action_required" | "not_applicable">; /** Format: date. */ "Flint-Version"?: InputValue<string>; };
