


export type PauseSubscriptionRequest = { /** Billing cycles to pause for. Omit it to pause until the subscription is resumed. When the store's customer_account.buyer_capabilities.pause.max_cycles is set, a buyer must send a value from 1 to that limit. Format: int32. */ "pause_duration_cycles"?: number; };
