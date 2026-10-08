
import type { MoneyValue } from './MoneyValue.js';

export type SubscribedLine = { "billing_interval": "daily" | "weekly" | "monthly" | "yearly" | (string & {}); /** Format: int32. */ "billing_interval_count": number; /** Line amount for the first renewal, including modifiers and recurring discounts, before shipping and tax. Signup-only discounts are excluded. */ "recurring_amount_money"?: MoneyValue; "subscription_offer_id": string; };
