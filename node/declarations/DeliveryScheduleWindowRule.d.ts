
import type { DeliveryAvailability } from './DeliveryAvailability.js';

export type DeliveryScheduleWindowRule = { "availability": DeliveryAvailability; /** Legacy stored-revision field. New method writes derive window selection from estimate.type. */ "offer_windows": boolean; };
