
import type { GiftCardNotificationRecipient } from './GiftCardNotificationRecipient.js';

export type RotateGiftCardCodeRequest = { /** Use an exact numeric string, not a floating-point number. Format: int64. minimum: 1. */ "expected_version"?: string; /** Explicitly send or schedule the replacement code through private recipient access. Requires commerce.gift_cards.secrets.write. */ "notification"?: GiftCardNotificationRecipient; };
