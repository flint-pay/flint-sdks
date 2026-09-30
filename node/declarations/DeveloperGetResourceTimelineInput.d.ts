import type { InputValue } from '../runtime.js';


export type DeveloperGetResourceTimelineInput = { "resource_id": InputValue<string>; "resource_type"?: InputValue<string>; "include"?: InputValue<Array<"requests" | "webhooks" | "attempts">>; /** minimum: 1. maximum: 100. */ "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; /** Format: date-time. Example: "2026-03-17T14:30:00Z". */ "occurred_after"?: InputValue<string | globalThis.Date>; /** Format: date-time. Example: "2026-03-17T14:30:00Z". */ "occurred_before"?: InputValue<string | globalThis.Date>; /** Format: date. */ "Flint-Version"?: InputValue<string>; };
