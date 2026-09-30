
import type { OnboardingProfileRequest } from './OnboardingProfileRequest.js';

export type OnboardingAdvanceRequest = { /** ISO 3166-1 alpha-2 country code. minLength: 2. maxLength: 2. pattern: ^[A-Z]{2}$. Example: "US". */ "country"?: "US" | (string & {}); "profile"?: OnboardingProfileRequest; /** Exact initial Flint capability set. Include accept_card_payments and receive_payouts together. Optionally include accept_ach_debit_payments, or omit the field to use the card and payout default set. */ "requested_capabilities"?: ((Array<"accept_card_payments" | "receive_payouts" | (string & {})>) | (Array<"accept_ach_debit_payments" | "accept_card_payments" | "receive_payouts" | (string & {})>) | (unknown)); "sandbox_id"?: string; };
