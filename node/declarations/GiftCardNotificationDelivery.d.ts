
import type { GiftCardNotificationDeliveryAttempt } from './GiftCardNotificationDeliveryAttempt.js';
import type { GiftCardNotificationProviderOutcome } from './GiftCardNotificationProviderOutcome.js';

export type GiftCardNotificationDelivery = { /** maxItems: 20. */ "attempts": Array<GiftCardNotificationDeliveryAttempt>; "has_more_attempts": boolean; "has_more_provider_outcomes": boolean; /** maxItems: 50. */ "provider_outcomes": Array<GiftCardNotificationProviderOutcome>; };
