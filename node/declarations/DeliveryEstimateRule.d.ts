
import type { DeliveryScheduleWindowRule } from './DeliveryScheduleWindowRule.js';
import type { DeliveryTransitTimeRule } from './DeliveryTransitTimeRule.js';

export type DeliveryEstimateRule = { "schedule_window"?: DeliveryScheduleWindowRule; "transit_time"?: DeliveryTransitTimeRule; "type": "none" | "transit_time" | "schedule_window" | (string & {}); };
