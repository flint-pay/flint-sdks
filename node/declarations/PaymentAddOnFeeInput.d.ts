
import type { MoneyValueInput } from './MoneyValueInput.js';

export type PaymentAddOnFeeInput = { "amount_money": MoneyValueInput; "fee_type": "invoice_collection" | "subscription_collection" | "automatic_tax"; };
