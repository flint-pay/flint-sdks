
import type { MoneyValue } from './MoneyValue.js';

export type OrderAuthorizationAmounts = { "authorized_money": MoneyValue; "capturable_money": MoneyValue; /** RFC3339 timestamp. Format: date-time. */ "expires_at"?: string; };
