
import type { PaymentSourceAchDebitSummaryInput } from './PaymentSourceAchDebitSummaryInput.js';
import type { PaymentSourceCardSummaryInput } from './PaymentSourceCardSummaryInput.js';

export type PaymentSourceSummaryInput = { "ach_debit"?: PaymentSourceAchDebitSummaryInput; "card"?: PaymentSourceCardSummaryInput; /** Funding-method family. Wallet payment options use card because their underlying funding source is a card. */ "type": "card" | "ach_debit" | "affirm"; };
