
import type { SubscriptionDeliveryRequestInput } from './SubscriptionDeliveryRequestInput.js';

export type ChangeMeSubscriptionDeliveryRequestInput = { "delivery": SubscriptionDeliveryRequestInput; /** Use an exact numeric string, not a floating-point number. Format: uint64. minimum: 1. */ "expected_version"?: string; };
