
import type { MoneyValue } from './MoneyValue.js';

export type RefundLineItemAutomaticRefund = { /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */ "discount_money": MoneyValue; /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */ "subtotal_money": MoneyValue; /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */ "tax_money": MoneyValue; /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */ "total_money": MoneyValue; };
