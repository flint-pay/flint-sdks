


/** Checkout reminder email settings. On update, an omitted field keeps its value. */ export type CheckoutRecoveryEmailSettings = { /** Seconds to wait after the buyer last changed their email or phone before sending the reminder. Must be a multiple of 60. Defaults to 3600. Format: int32. minimum: 900. maximum: 86400. multipleOf: 60. */ "delay_seconds"?: number; /** Whether Flint sends checkout reminders. Turning them on requires a business address on the merchant, which the reminder prints; without one the update returns CHECKOUT_RECOVERY_EMAIL_ADDRESS_REQUIRED. */ "enabled"?: boolean; };
