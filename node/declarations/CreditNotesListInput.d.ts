import type { InputValue } from '../runtime.js';


export type CreditNotesListInput = { /** minimum: 1. maximum: 100. */ "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "invoice_id"?: InputValue<string>; /** minLength: 1. maxLength: 255. */ "external_reference_id"?: InputValue<string>; "query"?: InputValue<string>; "status"?: InputValue<"draft" | "issued" | "void">; /** Format: date. */ "Flint-Version"?: InputValue<string>; };
