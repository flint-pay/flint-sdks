


export type DeliverySelectionInstructionsRequest = { "delivery_window_id"?: string; /** Buyer instructions for the selected option, without leading or trailing whitespace. Send this field only when buyer_instructions.enabled is true. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. maxLength: 2000. */ "instructions"?: string; };
