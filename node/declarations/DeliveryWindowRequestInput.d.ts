
import type { MoneyValueInput } from './MoneyValueInput.js';

export type DeliveryWindowRequestInput = { "amount_money": MoneyValueInput; "delivery_window_id": string; /** RFC3339 timestamp. Format: date-time. */ "end_at": string | globalThis.Date; /** RFC3339 timestamp. Format: date-time. */ "expires_at": string | globalThis.Date; /** RFC3339 timestamp. Format: date-time. */ "start_at": string | globalThis.Date; };
