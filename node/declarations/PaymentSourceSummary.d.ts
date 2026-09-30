
import type { PaymentSourceAchDebitSummary } from './PaymentSourceAchDebitSummary.js';
import type { PaymentSourceCardSummary } from './PaymentSourceCardSummary.js';

export type PaymentSourceSummary = { "ach_debit"?: PaymentSourceAchDebitSummary; "card"?: PaymentSourceCardSummary; /** Funding-method family. Wallet payment options use card because their underlying funding source is a card. */ "type": "card" | "ach_debit" | "affirm" | (string & {}); };
