


/** Whether buyers may pause their own subscriptions. Send at least one field. */ export type BuyerPauseCapability = { /** Whether buyers may pause. When false, a buyer's pause returns PAUSE_NOT_ALLOWED. */ "enabled"?: boolean; /** The longest pause a buyer may choose, in billing periods. When set, a buyer's pause must send pause_duration_cycles from 1 to this value. Omit it for no limit, which also lets a buyer pause until they resume. Format: int32. minimum: 1. maximum: 12. */ "max_cycles"?: number; };
