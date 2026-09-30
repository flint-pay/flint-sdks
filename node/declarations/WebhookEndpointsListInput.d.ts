import type { InputValue } from '../runtime.js';


export type WebhookEndpointsListInput = { /** minimum: 1. maximum: 100. */ "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "event_sources"?: InputValue<Array<"merchant" | "partner_app" | "installed_merchants">>; "partner_app_id"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; };
