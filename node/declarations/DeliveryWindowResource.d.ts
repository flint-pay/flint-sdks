
import type { MoneyValue } from './MoneyValue.js';

export type DeliveryWindowResource = { "amount_money": MoneyValue; "delivery_window_id": string; /** RFC3339 timestamp. Format: date-time. */ "end_at": string; /** Last moment the buyer can choose this window. For a schedule_window method it is the preparation lead time before the window starts, or the same-day cutoff when that is earlier. Format: date-time. */ "expires_at": string; /** RFC3339 timestamp. Format: date-time. */ "start_at": string; };
