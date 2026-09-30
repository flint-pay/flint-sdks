import type { InputValue } from '../runtime.js';


export type PayoutsGetInput = { "payout_id": InputValue<string>; "expand"?: InputValue<Array<"original_payout" | "payout_destination" | "reversed_by_payout">>; "X-Request-Id"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; };
