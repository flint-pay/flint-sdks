
import type { MoneyValue } from './MoneyValue.js';

export type RefundTaxBreakdownRefund = { "order_charge_id"?: string; "tax_breakdown_id": string; /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */ "tax_money": MoneyValue; };
