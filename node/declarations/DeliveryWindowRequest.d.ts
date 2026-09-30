
import type { MoneyValue } from './MoneyValue.js';

export type DeliveryWindowRequest = { "amount_money": MoneyValue; "delivery_window_id": string; /** RFC3339 timestamp. Format: date-time. */ "end_at": string; /** RFC3339 timestamp. Format: date-time. */ "expires_at": string; /** RFC3339 timestamp. Format: date-time. */ "start_at": string; };
