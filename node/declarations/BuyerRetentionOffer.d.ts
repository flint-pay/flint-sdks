


/** The offer a buyer sees before canceling. Send at least one field. */ export type BuyerRetentionOffer = { /** none: no offer. pause_instead: offer to pause for pause_cycles billing periods instead of canceling. pause_instead needs pausing turned on. */ "kind"?: "none" | "pause_instead" | (string & {}); /** Billing periods the offered pause lasts. Required when kind is pause_instead, and at most pause.max_cycles when that is set. Not allowed with kind none. Format: int32. minimum: 1. maximum: 12. */ "pause_cycles"?: number; };
