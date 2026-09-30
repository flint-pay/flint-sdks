import type { InputValue } from '../runtime.js';


export type CapabilitiesListInput = { "domain"?: InputValue<"money_movement" | "payments">; "capability"?: InputValue<"accept_card_payments" | "save_payment_methods" | "accept_affirm_payments" | "receive_payouts" | "create_standard_payouts" | "manage_payout_destinations" | "manage_payout_settings">; "status"?: InputValue<"ready" | "blocked" | "pending" | "not_available">; /** minimum: 1. maximum: 100. */ "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; };
