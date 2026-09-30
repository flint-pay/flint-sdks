
import type { DeliveryScheduleWindowRuleRequestInput } from './DeliveryScheduleWindowRuleRequestInput.js';
import type { DeliveryTransitTimeRuleInput } from './DeliveryTransitTimeRuleInput.js';

export type DeliveryEstimateRuleRequestInput = { "schedule_window"?: DeliveryScheduleWindowRuleRequestInput; "transit_time"?: DeliveryTransitTimeRuleInput; "type": "none" | "transit_time" | "schedule_window"; };
