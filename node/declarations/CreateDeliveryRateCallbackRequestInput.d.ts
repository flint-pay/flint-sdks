
import type { DeliveryRateCallbackConfigurationInput } from './DeliveryRateCallbackConfigurationInput.js';

export type CreateDeliveryRateCallbackRequestInput = { "configuration": DeliveryRateCallbackConfigurationInput; /** Caller-owned identifier for this resource in an external system. minLength: 1. maxLength: 255. */ "external_reference_id"?: string; "name": string; };
