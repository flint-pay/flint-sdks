
import type { DeliveryAvailabilityInput } from './DeliveryAvailabilityInput.js';

export type DeliveryScheduleWindowRuleInput = { "availability": DeliveryAvailabilityInput; /** Legacy stored-revision field. New method writes derive window selection from estimate.type. */ "offer_windows": boolean; };
