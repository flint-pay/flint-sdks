
import type { SubscriptionDeliveryRequest } from './SubscriptionDeliveryRequest.js';

export type ChangeMeSubscriptionDeliveryRequest = { "delivery": SubscriptionDeliveryRequest; /** Use an exact numeric string, not a floating-point number. Format: uint64. minimum: 1. */ "expected_version"?: string; };
