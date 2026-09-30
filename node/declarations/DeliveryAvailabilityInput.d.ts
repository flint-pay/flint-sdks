
import type { DeliveryBlackoutIntervalInput } from './DeliveryBlackoutIntervalInput.js';
import type { DeliveryWeeklyIntervalInput } from './DeliveryWeeklyIntervalInput.js';

export type DeliveryAvailabilityInput = { "blackout_intervals"?: Array<DeliveryBlackoutIntervalInput>; "dst_disambiguation"?: "earlier" | "later"; "maximum_scheduling_horizon_days": number; /** Notice the merchant needs before a window starts, in seconds. A buyer can choose a window until this long before it starts. Quotes offer only windows that can still be chosen, so a window already under way is not offered. Use an exact numeric string, not a floating-point number. Format: int64. */ "preparation_lead_time_seconds": string; "same_day_cutoff_minute"?: number; "timezone": string; "weekly_intervals": Array<DeliveryWeeklyIntervalInput>; };
