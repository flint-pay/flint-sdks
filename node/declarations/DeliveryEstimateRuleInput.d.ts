
import type { DeliveryScheduleWindowRuleInput } from './DeliveryScheduleWindowRuleInput.js';
import type { DeliveryTransitTimeRuleInput } from './DeliveryTransitTimeRuleInput.js';

export type DeliveryEstimateRuleInput = { "schedule_window"?: DeliveryScheduleWindowRuleInput; "transit_time"?: DeliveryTransitTimeRuleInput; "type": "none" | "transit_time" | "schedule_window"; };
