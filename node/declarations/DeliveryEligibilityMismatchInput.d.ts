


export type DeliveryEligibilityMismatchInput = { /** The configured eligibility condition family that did not match. */ "condition": "zone" | "country" | "state" | "postal_code" | "radius" | "window_time" | "subscription_purchase" | "customer_group" | "customer_verified" | "customer_has_email" | "customer_has_phone"; /** The condition's path in the configured eligibility expression, starting at $. */ "expression_path": string; /** The eligibility fact evaluated by the condition. Buyer fact values are not included. */ "field"?: string; /** Whether the condition matched inside a not expression and therefore rejected the method. */ "negated"?: boolean; };
