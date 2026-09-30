
import type { MoneyValue } from './MoneyValue.js';

export type PaymentAddOnFee = { "amount_money": MoneyValue; "fee_type": "invoice_collection" | "subscription_collection" | "automatic_tax" | (string & {}); };
