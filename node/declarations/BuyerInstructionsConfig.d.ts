


/** Controls buyer instructions for a delivery option. Omit it from a method configuration to disable instruction collection. */ export type BuyerInstructionsConfig = { /** Whether checkout collects buyer instructions. */ "enabled": boolean; /** Checkout field label, without leading or trailing whitespace. Clients use a delivery-type default when omitted. maxLength: 255. */ "label"?: string; /** Checkout field placeholder, without leading or trailing whitespace. Clients use a delivery-type default when omitted. maxLength: 500. */ "placeholder"?: string; /** Whether the buyer must enter instructions before selecting the option. Requires enabled=true. */ "required": boolean; };
