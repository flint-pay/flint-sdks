
import type { MoneyValueInput } from './MoneyValueInput.js';

/** Current Flint merchant billing balance for one billing account and currency. */ export type MerchantBillingBalanceInput = { "available_credit_money": MoneyValueInput; /** Stable identifier for this billing account and currency balance projection. */ "merchant_billing_balance_id": string; /** RFC3339 timestamp for the balance snapshot. Format: date-time. */ "observed_at": string | globalThis.Date; "outstanding_money": MoneyValueInput; };
