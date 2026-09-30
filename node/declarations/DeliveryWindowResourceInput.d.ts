
import type { MoneyValueInput } from './MoneyValueInput.js';

export type DeliveryWindowResourceInput = { "amount_money": MoneyValueInput; "delivery_window_id": string; /** RFC3339 timestamp. Format: date-time. */ "end_at": string | globalThis.Date; /** Last moment the buyer can choose this window. For a schedule_window method it is the preparation lead time before the window starts, or the same-day cutoff when that is earlier. Format: date-time. */ "expires_at": string | globalThis.Date; /** RFC3339 timestamp. Format: date-time. */ "start_at": string | globalThis.Date; };
