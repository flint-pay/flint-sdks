


/** Whether buyers may skip renewals. Send at least one field. */ export type BuyerSkipCapability = { /** Whether buyers may skip a renewal. Merchant credentials may always skip an eligible cycle. */ "enabled"?: boolean; /** Maximum consecutive cycles a buyer may skip. Omit it for no limit. The count resets after a paid renewal. Format: int32. minimum: 1. maximum: 12. */ "max_consecutive_skips"?: number; };
