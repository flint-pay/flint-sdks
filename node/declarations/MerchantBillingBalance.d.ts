
import type { MoneyValue } from './MoneyValue.js';

/** Current Flint merchant billing balance for one billing account and currency. */ export type MerchantBillingBalance = { "available_credit_money": MoneyValue; /** Stable identifier for this billing account and currency balance projection. */ "merchant_billing_balance_id": string; /** RFC3339 timestamp for the balance snapshot. Format: date-time. */ "observed_at": string; "outstanding_money": MoneyValue; };
