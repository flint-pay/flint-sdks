


/** Checkout reminder email settings. On update, an omitted field keeps its value. */ export type CheckoutRecoveryEmailSettings = { /** Minutes to wait after the buyer last changed their email or phone before sending the reminder. Defaults to 60. Format: int32. minimum: 15. maximum: 1440. */ "delay_minutes"?: number; /** Whether Flint sends checkout reminders. Turning them on requires a business address on the merchant, which the reminder prints; without one the update returns CHECKOUT_RECOVERY_EMAIL_ADDRESS_REQUIRED. */ "enabled"?: boolean; };
