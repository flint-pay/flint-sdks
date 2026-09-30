
import type { DeliveryRateCallbackConfiguration } from './DeliveryRateCallbackConfiguration.js';

export type CreateDeliveryRateCallbackRequest = { "configuration": DeliveryRateCallbackConfiguration; /** Caller-owned identifier for this resource in an external system. minLength: 1. maxLength: 255. */ "external_reference_id"?: string; "name": string; };
