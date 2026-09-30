
import type { DeliveryLocationSetConfiguration } from './DeliveryLocationSetConfiguration.js';

export type CreateDeliveryLocationSetRequest = { "configuration": DeliveryLocationSetConfiguration; /** Caller-owned identifier for this resource in an external system. minLength: 1. maxLength: 255. */ "external_reference_id"?: string; "metadata"?: Record<string, string>; "name": string; };
