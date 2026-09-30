
import type { DeliveryScheduleWindowRuleRequest } from './DeliveryScheduleWindowRuleRequest.js';
import type { DeliveryTransitTimeRule } from './DeliveryTransitTimeRule.js';

export type DeliveryEstimateRuleRequest = { "schedule_window"?: DeliveryScheduleWindowRuleRequest; "transit_time"?: DeliveryTransitTimeRule; "type": "none" | "transit_time" | "schedule_window" | (string & {}); };
