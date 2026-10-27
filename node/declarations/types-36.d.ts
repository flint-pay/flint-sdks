import type { MoneyValue, MoneyValueInput, MoneyMovementListMeta } from './types-31.js';
import type { OrderLineItemTax, OrderLineItemTaxInput } from './types-32.js';
import type { PaymentLink } from './types-35.js';
import type { ResponseMeta, ResolvePaymentLinkRequestInput, ResourceReference } from './types-40.js';
import type { Image } from './types-19.js';
import type { SubscriptionIntervalOption } from './types-45.js';
import type { InputValue } from '../runtime.js';
import type { CreatePaymentLinkRequestInput, CreatePaymentMethodDomainRequestInput } from './types-8.js';
import type { UpdatePaymentLinkRequestInput, UpdatePaymentMethodDomainRequestInput } from './types-48.js';
import type { CardDetails } from './types-3.js';
import type {
    ExpandedCustomerSummary,
    ExpandedPaymentIntentSummary,
    ExpandedOrderSummary,
    ExpandedPayoutDestinationSummary,
    ExpandedPayoutSummary
} from './types-16.js';
import type { StripeClientSetup } from './types-44.js';
import type { MeRemovePaymentMethodInput } from './types-30.js';
import type { SavePaymentMethodRequestInput } from './types-43.js';
import type { PayoutTraceID } from './types-37.js';
/**
 * Shape $ (Value): {@link PaymentLinkEventConfigRequestInput}. Event settings you supply when
 * creating an event payment link.
 */
export type PaymentLinkEventConfigRequestInput = {
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "event_at"?: string | globalThis.Date;
    /**
     * Shape $ (Value): integer or null. Most tickets the event sells across all orders. Absent
     * means no limit. On update, send null to remove the limit; a value below the tickets already
     * sold or held by payments in progress returns MAX_TOTAL_QUANTITY_BELOW_SOLD. Whole-number
     * quantity; fractional quantities are not supported. Format: int32.
     */
    "max_total_quantity"?: number | null;
    /** Shape $ (Value): boolean. */
    "send_ticket_emails"?: boolean;
    /**
     * Shape $ (Value): string. Prefix for ticket numbers, up to 5 characters. It cannot change
     * after the event has issued tickets. minLength: 1. maxLength: 5.
     */
    "ticket_prefix"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "timezone"?: string;
    /** Shape $ (Value): string. minLength: 1. maxLength: 500. */
    "venue"?: string;
};
/**
 * Shape $ (Value): {@link PaymentLinkLegalConfigInput}. Legal links on a payment link: contract,
 * refund policy, shipping policy, and terms of service URLs, and whether buyers must accept the
 * terms.
 */
export type PaymentLinkLegalConfigInput = {
    /** Shape $ (Value): string. minLength: 1. maxLength: 2048. */
    "contract_url"?: string;
    /** Shape $ (Value): string. minLength: 1. maxLength: 2048. */
    "refund_policy_url"?: string;
    /** Shape $ (Value): boolean. */
    "require_terms_of_service"?: boolean;
    /** Shape $ (Value): string. minLength: 1. maxLength: 2048. */
    "shipping_policy_url"?: string;
    /** Shape $ (Value): string. minLength: 1. maxLength: 2048. */
    "terms_of_service_url"?: string;
};
/**
 * Shape $ (Value): {@link PaymentLinkLegalPatchRequestInput}. Changes to a payment link's legal
 * links and terms setting. Send null on a URL to clear it.
 */
export type PaymentLinkLegalPatchRequestInput = {
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. maxLength: 2048. */
    "contract_url"?: string | null;
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. maxLength: 2048. */
    "refund_policy_url"?: string | null;
    /** Shape $ (Value): boolean. */
    "require_terms_of_service"?: boolean;
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. maxLength: 2048. */
    "shipping_policy_url"?: string | null;
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. maxLength: 2048. */
    "terms_of_service_url"?: string | null;
};
/**
 * Shape $ (Value): {@link PaymentLinkLineItem}. A line item on a payment link, sold from a catalog
 * variant, a bundle, or an ad hoc name and price, with quantity and price rules.
 */
export type PaymentLinkLineItem = ({
    /** Shape $ (Value): boolean. */
    "allow_quantity_adjustment"?: boolean;
    /** Shape $ (Value): boolean. */
    "allow_unit_price_adjustment"?: boolean;
    /** Shape $ (Value): string. */
    "bundle_id"?: string;
    /** Shape $ (Value): string. */
    "description"?: string;
    /**
     * Shape $ (Value): boolean. True when this line item references a variant or bundle that is
     * missing, deleted, or inactive, so it cannot be sold right now. Always false on ad-hoc line
     * items.
     */
    "is_catalog_item_unavailable": boolean;
    /**
     * Shape $ (Value): string. Keys the resolve override maps. Stable line item key used in
     * checkout overrides. Must not have leading or trailing whitespace. Assigned as line_item_1,
     * line_item_2, and so on when omitted, skipping numbers already used by explicit keys;
     * retained for an existing line item when omitted on update.
     */
    "key"?: string;
    /**
     * Shape $ (Value): integer. Whole-number quantity; fractional quantities are not supported.
     * Format: int32.
     */
    "max_quantity"?: number;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "max_unit_price_money"?: MoneyValue;
    /**
     * Shape $ (Value): integer. Whole-number quantity; fractional quantities are not supported.
     * Format: int32.
     */
    "min_quantity"?: number;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "min_unit_price_money"?: MoneyValue;
    /** Shape $ (Value): string. */
    "name"?: string;
    /** Shape $ (Value): string. */
    "payment_link_line_item_id": string;
    /**
     * Shape $ (Value): integer. Whole-number quantity; fractional quantities are not supported.
     * Format: int32.
     */
    "quantity": number;
    /**
     * Shape $ (Value): string. Current catalog name of the referenced variant or bundle. A variant
     * reads as the product name, plus the variant name when the variant is a named option
     * combination. This is the catalog value at read time, not a stored snapshot: checkout
     * resolves it again when a buyer opens the link. Absent on ad-hoc line items and when the
     * catalog object no longer exists.
     */
    "resolved_name"?: string;
    /**
     * Shape $ (Value): {@link MoneyValue}. Current catalog unit price of the referenced variant or
     * bundle. This is the catalog value at read time, not a stored snapshot: checkout resolves the
     * price again when a buyer opens the link, so the amount a buyer pays can differ. Absent on
     * ad-hoc line items and when the catalog object no longer exists. Monetary amount represented
     * as integer minor units plus an ISO 4217 currency code.
     */
    "resolved_unit_price_money"?: MoneyValue;
    /**
     * Shape $ (Value): Array of {@link MoneyValue}. Shape $[] (Value): {@link MoneyValue}.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "suggested_unit_price_money_options"?: Array<MoneyValue>;
    /**
     * Shape $ (Value): {@link OrderLineItemTax}. A line item's tax category and whether it is
     * taxable.
     */
    "tax"?: OrderLineItemTax;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "unit_price_money"?: MoneyValue;
    /** Shape $ (Value): string. */
    "variant_id"?: string;
})
    & ((({
    /** Shape $ (Value): string. */
    "variant_id": string;
}))
    | (({
    /** Shape $ (Value): string. */
    "bundle_id": string;
}))
    | (({
    /** Shape $ (Value): string. */
    "name": string;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "unit_price_money": MoneyValue;
}))
    | (({
    /** Shape $ (Value): boolean.  Value enum: true. */
    "allow_unit_price_adjustment": boolean;
    /** Shape $ (Value): string. */
    "name": string;
}))
    | (Record<string, unknown>));
/**
 * Shape $ (Value): {@link PaymentLinkLineItemPatchRequest}. A line item in a payment link update.
 * Include its ID to change an existing line item, or omit the ID to add a new one.
 */
export type PaymentLinkLineItemPatchRequest = ({
    /** Shape $ (Value): boolean. */
    "allow_quantity_adjustment"?: boolean;
    /** Shape $ (Value): boolean. */
    "allow_unit_price_adjustment"?: boolean;
    /** Shape $ (Value): string. minLength: 1. */
    "bundle_id"?: string;
    /** Shape $ (Value): string. minLength: 1. maxLength: 2048. */
    "description"?: string;
    /**
     * Shape $ (Value): string. Keys the resolve override maps. Stable line item key used in
     * checkout overrides. Must not have leading or trailing whitespace. Assigned as line_item_1,
     * line_item_2, and so on when omitted, skipping numbers already used by explicit keys;
     * retained for an existing line item when omitted on update. minLength: 1. maxLength: 100.
     */
    "key"?: string;
    /**
     * Shape $ (Value): integer. Whole-number quantity; fractional quantities are not supported.
     * Format: int32.
     */
    "max_quantity"?: number;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "max_unit_price_money"?: MoneyValue;
    /**
     * Shape $ (Value): integer. Whole-number quantity; fractional quantities are not supported.
     * Format: int32.
     */
    "min_quantity"?: number;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "min_unit_price_money"?: MoneyValue;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "name"?: string;
    /**
     * Shape $ (Value): string. Stable ID of an existing line item. Omit it to create a new line
     * item. minLength: 1.
     */
    "payment_link_line_item_id"?: string;
    /**
     * Shape $ (Value): integer. Whole-number default quantity; fractional quantities are not
     * supported. Omission uses 1. Must be at least 1 for standard links; event tiers also accept
     * 0. Format: int32. Default: 1.
     */
    "quantity"?: number;
    /**
     * Shape $ (Value): Array of {@link MoneyValue}. Shape $[] (Value): {@link MoneyValue}.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "suggested_unit_price_money_options"?: Array<MoneyValue>;
    /**
     * Shape $ (Value): {@link OrderLineItemTax}. A line item's tax category and whether it is
     * taxable.
     */
    "tax"?: OrderLineItemTax;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "unit_price_money"?: MoneyValue;
    /** Shape $ (Value): string. minLength: 1. */
    "variant_id"?: string;
})
    & ((({
    /** Shape $ (Value): string. minLength: 1. */
    "variant_id": string;
}))
    | (({
    /** Shape $ (Value): string. minLength: 1. */
    "bundle_id": string;
}))
    | (({
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "name": string;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "unit_price_money": MoneyValue;
}))
    | (({
    /** Shape $ (Value): boolean.  Value enum: true. */
    "allow_unit_price_adjustment": boolean;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "name": string;
}))
    | (Record<string, unknown>));
/**
 * Shape $ (Value): {@link PaymentLinkLineItemPatchRequestInput}. A line item in a payment link
 * update. Include its ID to change an existing line item, or omit the ID to add a new one.
 */
export type PaymentLinkLineItemPatchRequestInput = ({
    /** Shape $ (Value): boolean. */
    "allow_quantity_adjustment"?: boolean;
    /** Shape $ (Value): boolean. */
    "allow_unit_price_adjustment"?: boolean;
    /** Shape $ (Value): string. minLength: 1. */
    "bundle_id"?: string;
    /** Shape $ (Value): string. minLength: 1. maxLength: 2048. */
    "description"?: string;
    /**
     * Shape $ (Value): string. Keys the resolve override maps. Stable line item key used in
     * checkout overrides. Must not have leading or trailing whitespace. Assigned as line_item_1,
     * line_item_2, and so on when omitted, skipping numbers already used by explicit keys;
     * retained for an existing line item when omitted on update. minLength: 1. maxLength: 100.
     */
    "key"?: string;
    /**
     * Shape $ (Value): integer. Whole-number quantity; fractional quantities are not supported.
     * Format: int32.
     */
    "max_quantity"?: number;
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "max_unit_price_money"?: MoneyValueInput;
    /**
     * Shape $ (Value): integer. Whole-number quantity; fractional quantities are not supported.
     * Format: int32.
     */
    "min_quantity"?: number;
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "min_unit_price_money"?: MoneyValueInput;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "name"?: string;
    /**
     * Shape $ (Value): string. Stable ID of an existing line item. Omit it to create a new line
     * item. minLength: 1.
     */
    "payment_link_line_item_id"?: string;
    /**
     * Shape $ (Value): integer. Whole-number default quantity; fractional quantities are not
     * supported. Omission uses 1. Must be at least 1 for standard links; event tiers also accept
     * 0. Format: int32. Default: 1.
     */
    "quantity"?: number;
    /**
     * Shape $ (Value): Array of {@link MoneyValueInput}. Shape $[] (Value): {@link
     * MoneyValueInput}. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "suggested_unit_price_money_options"?: Array<MoneyValueInput>;
    /**
     * Shape $ (Value): {@link OrderLineItemTaxInput}. A line item's tax category and whether it is
     * taxable.
     */
    "tax"?: OrderLineItemTaxInput;
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "unit_price_money"?: MoneyValueInput;
    /** Shape $ (Value): string. minLength: 1. */
    "variant_id"?: string;
})
    & ((({
    /** Shape $ (Value): string. minLength: 1. */
    "variant_id": string;
})
    & (({
    "bundle_id"?: never;
})
    & ({
    "name"?: never;
})
    & ({
    "unit_price_money"?: never;
})
    & ({
    "description"?: never;
})
    & ({
    "tax"?: never;
})
    & ({
    "allow_unit_price_adjustment"?: never;
})
    & ({
    "min_unit_price_money"?: never;
})
    & ({
    "max_unit_price_money"?: never;
})
    & ({
    "suggested_unit_price_money_options"?: never;
})))
    | (({
    /** Shape $ (Value): string. minLength: 1. */
    "bundle_id": string;
})
    & (({
    "variant_id"?: never;
})
    & ({
    "name"?: never;
})
    & ({
    "unit_price_money"?: never;
})
    & ({
    "description"?: never;
})
    & ({
    "tax"?: never;
})
    & ({
    "allow_unit_price_adjustment"?: never;
})
    & ({
    "min_unit_price_money"?: never;
})
    & ({
    "max_unit_price_money"?: never;
})
    & ({
    "suggested_unit_price_money_options"?: never;
})))
    | (({
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "name": string;
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "unit_price_money": MoneyValueInput;
})
    & (({
    "variant_id"?: never;
}) & ({
    "bundle_id"?: never;
})))
    | (({
    /** Shape $ (Value): boolean.  Value enum: true. */
    "allow_unit_price_adjustment": true;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "name": string;
})
    & (({
    "variant_id"?: never;
}) & ({
    "bundle_id"?: never;
}))));
/**
 * Shape $ (Value): {@link PaymentLinkLineItemRequest}. A line item you add to a payment link when
 * creating it, from a catalog variant, a bundle, or an ad hoc name and price.
 */
export type PaymentLinkLineItemRequest = ({
    /** Shape $ (Value): boolean. */
    "allow_quantity_adjustment"?: boolean;
    /** Shape $ (Value): boolean. */
    "allow_unit_price_adjustment"?: boolean;
    /** Shape $ (Value): string. minLength: 1. */
    "bundle_id"?: string;
    /** Shape $ (Value): string. minLength: 1. maxLength: 2048. */
    "description"?: string;
    /**
     * Shape $ (Value): string. Keys the resolve override maps. Stable line item key used in
     * checkout overrides. Must not have leading or trailing whitespace. Assigned as line_item_1,
     * line_item_2, and so on when omitted, skipping numbers already used by explicit keys;
     * retained for an existing line item when omitted on update. minLength: 1. maxLength: 100.
     */
    "key"?: string;
    /**
     * Shape $ (Value): integer. Whole-number quantity; fractional quantities are not supported.
     * Format: int32.
     */
    "max_quantity"?: number;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "max_unit_price_money"?: MoneyValue;
    /**
     * Shape $ (Value): integer. Whole-number quantity; fractional quantities are not supported.
     * Format: int32.
     */
    "min_quantity"?: number;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "min_unit_price_money"?: MoneyValue;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "name"?: string;
    /**
     * Shape $ (Value): integer. Whole-number default quantity; fractional quantities are not
     * supported. Omission uses 1. Must be at least 1 for standard links; event tiers also accept
     * 0. Format: int32. Default: 1.
     */
    "quantity"?: number;
    /**
     * Shape $ (Value): Array of {@link MoneyValue}. Shape $[] (Value): {@link MoneyValue}.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "suggested_unit_price_money_options"?: Array<MoneyValue>;
    /**
     * Shape $ (Value): {@link OrderLineItemTax}. A line item's tax category and whether it is
     * taxable.
     */
    "tax"?: OrderLineItemTax;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "unit_price_money"?: MoneyValue;
    /** Shape $ (Value): string. minLength: 1. */
    "variant_id"?: string;
})
    & ((({
    /** Shape $ (Value): string. minLength: 1. */
    "variant_id": string;
}))
    | (({
    /** Shape $ (Value): string. minLength: 1. */
    "bundle_id": string;
}))
    | (({
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "name": string;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "unit_price_money": MoneyValue;
}))
    | (({
    /** Shape $ (Value): boolean.  Value enum: true. */
    "allow_unit_price_adjustment": boolean;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "name": string;
}))
    | (Record<string, unknown>));
/**
 * Shape $ (Value): {@link PaymentLinkLineItemRequestInput}. A line item you add to a payment link
 * when creating it, from a catalog variant, a bundle, or an ad hoc name and price.
 */
export type PaymentLinkLineItemRequestInput = ({
    /** Shape $ (Value): boolean. */
    "allow_quantity_adjustment"?: boolean;
    /** Shape $ (Value): boolean. */
    "allow_unit_price_adjustment"?: boolean;
    /** Shape $ (Value): string. minLength: 1. */
    "bundle_id"?: string;
    /** Shape $ (Value): string. minLength: 1. maxLength: 2048. */
    "description"?: string;
    /**
     * Shape $ (Value): string. Keys the resolve override maps. Stable line item key used in
     * checkout overrides. Must not have leading or trailing whitespace. Assigned as line_item_1,
     * line_item_2, and so on when omitted, skipping numbers already used by explicit keys;
     * retained for an existing line item when omitted on update. minLength: 1. maxLength: 100.
     */
    "key"?: string;
    /**
     * Shape $ (Value): integer. Whole-number quantity; fractional quantities are not supported.
     * Format: int32.
     */
    "max_quantity"?: number;
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "max_unit_price_money"?: MoneyValueInput;
    /**
     * Shape $ (Value): integer. Whole-number quantity; fractional quantities are not supported.
     * Format: int32.
     */
    "min_quantity"?: number;
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "min_unit_price_money"?: MoneyValueInput;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "name"?: string;
    /**
     * Shape $ (Value): integer. Whole-number default quantity; fractional quantities are not
     * supported. Omission uses 1. Must be at least 1 for standard links; event tiers also accept
     * 0. Format: int32. Default: 1.
     */
    "quantity"?: number;
    /**
     * Shape $ (Value): Array of {@link MoneyValueInput}. Shape $[] (Value): {@link
     * MoneyValueInput}. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "suggested_unit_price_money_options"?: Array<MoneyValueInput>;
    /**
     * Shape $ (Value): {@link OrderLineItemTaxInput}. A line item's tax category and whether it is
     * taxable.
     */
    "tax"?: OrderLineItemTaxInput;
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "unit_price_money"?: MoneyValueInput;
    /** Shape $ (Value): string. minLength: 1. */
    "variant_id"?: string;
})
    & ((({
    /** Shape $ (Value): string. minLength: 1. */
    "variant_id": string;
})
    & (({
    "bundle_id"?: never;
})
    & ({
    "name"?: never;
})
    & ({
    "unit_price_money"?: never;
})
    & ({
    "description"?: never;
})
    & ({
    "tax"?: never;
})
    & ({
    "allow_unit_price_adjustment"?: never;
})
    & ({
    "min_unit_price_money"?: never;
})
    & ({
    "max_unit_price_money"?: never;
})
    & ({
    "suggested_unit_price_money_options"?: never;
})))
    | (({
    /** Shape $ (Value): string. minLength: 1. */
    "bundle_id": string;
})
    & (({
    "variant_id"?: never;
})
    & ({
    "name"?: never;
})
    & ({
    "unit_price_money"?: never;
})
    & ({
    "description"?: never;
})
    & ({
    "tax"?: never;
})
    & ({
    "allow_unit_price_adjustment"?: never;
})
    & ({
    "min_unit_price_money"?: never;
})
    & ({
    "max_unit_price_money"?: never;
})
    & ({
    "suggested_unit_price_money_options"?: never;
})))
    | (({
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "name": string;
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "unit_price_money": MoneyValueInput;
})
    & (({
    "variant_id"?: never;
}) & ({
    "bundle_id"?: never;
})))
    | (({
    /** Shape $ (Value): boolean.  Value enum: true. */
    "allow_unit_price_adjustment": true;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "name": string;
})
    & (({
    "variant_id"?: never;
}) & ({
    "bundle_id"?: never;
}))));
/** Shape $ (Value): {@link PaymentLinkListResponse}. A page of `PaymentLink` objects. */
export type PaymentLinkListResponse = {
    /**
     * Shape $ (Value): Array of {@link PaymentLink}. Shape $[] (Value): {@link PaymentLink}. A
     * reusable link that opens checkout.
     */
    "data": Array<PaymentLink>;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Metadata returned with a response: the `api_version`,
     * `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /** Shape $ (Value): string. */
    "next_page_token"?: string;
    /**
     * Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id"?: string;
};
/**
 * Shape $ (Value): {@link PaymentLinkPaymentConfigInput}. Payment settings on a payment link: the
 * enabled payment options and a note shown with payment.
 */
export type PaymentLinkPaymentConfigInput = {
    /**
     * Shape $ (Value): Array of string. [] enum: "card", "apple_pay", "google_pay", "affirm",
     * "ach_debit". Shape $[] (Value): string. Value enum: "card", "apple_pay", "google_pay",
     * "affirm", "ach_debit".
     */
    "enabled_payment_options"?: Array<"card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit">;
    /** Shape $ (Value): string. minLength: 1. maxLength: 500. */
    "payment_note"?: string;
};
/**
 * Shape $ (Value): {@link PaymentLinkPaymentPatchRequest}. Changes to a payment link's payment
 * settings. Send null on the payment note to clear it.
 */
export type PaymentLinkPaymentPatchRequest = {
    /**
     * Shape $ (Value): Array of string. [] enum: "card", "apple_pay", "google_pay", "affirm",
     * "ach_debit". Shape $[] (Value): string. Value enum: "card", "apple_pay", "google_pay",
     * "affirm", "ach_debit".
     */
    "enabled_payment_options"?: Array<"card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit" | (string & {})>;
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. maxLength: 500. */
    "payment_note"?: string | null;
};
/**
 * Shape $ (Value): {@link PaymentLinkPaymentPatchRequestInput}. Changes to a payment link's
 * payment settings. Send null on the payment note to clear it.
 */
export type PaymentLinkPaymentPatchRequestInput = {
    /**
     * Shape $ (Value): Array of string. [] enum: "card", "apple_pay", "google_pay", "affirm",
     * "ach_debit". Shape $[] (Value): string. Value enum: "card", "apple_pay", "google_pay",
     * "affirm", "ach_debit".
     */
    "enabled_payment_options"?: Array<"card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit">;
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. maxLength: 500. */
    "payment_note"?: string | null;
};
/**
 * Shape $ (Value): {@link PaymentLinkRedirectsPatchRequest}. Changes to a payment link's hosted
 * checkout destinations. Omit a URL to leave it unchanged, or send null to clear it.
 */
export type PaymentLinkRedirectsPatchRequest = {
    /**
     * Shape $ (Value): string or null. Where the buyer goes when they leave checkout without
     * paying. The session stays open until it expires. Absolute HTTPS URL; test mode also accepts
     * HTTP loopback URLs. Up to 2,048 characters. Send null to clear it. Format: uri. minLength:
     * 1. maxLength: 2048.
     */
    "cancel_url"?: string | null;
    /**
     * Shape $ (Value): string or null. Where Flint sends a buyer who opens the session after it
     * expires. Without it, the buyer sees Flint's expired-checkout page. Absolute HTTPS URL; test
     * mode also accepts HTTP loopback URLs. Up to 2,048 characters. Send null to clear it. Format:
     * uri. minLength: 1. maxLength: 2048.
     */
    "expired_url"?: string | null;
    /**
     * Shape $ (Value): string or null. Where the buyer goes after paying. Flint adds
     * checkout_session_id and order_id query parameters, replacing any with those names. The
     * redirect doesn't prove payment: confirm with the order.paid webhook or by reading the
     * session. Absolute HTTPS URL; test mode also accepts HTTP loopback URLs. Up to 2,048
     * characters. Send null to clear it. Format: uri. minLength: 1. maxLength: 2048.
     */
    "success_url"?: string | null;
};
/**
 * Shape $ (Value): {@link PaymentLinkRedirectsPatchRequestInput}. Changes to a payment link's
 * hosted checkout destinations. Omit a URL to leave it unchanged, or send null to clear it.
 */
export type PaymentLinkRedirectsPatchRequestInput = PaymentLinkRedirectsPatchRequest;
/** Shape $ (Value): {@link PaymentLinkResponse}. A response containing `PaymentLink` data. */
export type PaymentLinkResponse = {
    /** Shape $ (Value): {@link PaymentLink}. A reusable link that opens checkout. */
    "data": PaymentLink;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Metadata returned with a response: the `api_version`,
     * `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id"?: string;
};
/**
 * Shape $ (Value): {@link PaymentLinkSalesSummary}. Paid-order sales totals for a payment link,
 * computed on request. Paid means the order's collection has completed. Fully and partially
 * refunded orders still count, and paid_totals reports the amount collected before refunds. Each
 * order counts once even if it has multiple checkout sessions.
 */
export type PaymentLinkSalesSummary = {
    /**
     * Shape $ (Value): string. UTC time at which the summary was computed, at second precision.
     * Format: date-time.
     */
    "computed_at": string;
    /**
     * Shape $ (Value): integer string. Number of orders whose collection has completed, across all
     * currencies, including fully and partially refunded orders. Use an integer string (decimal
     * digits), not a floating-point number. Format: int64.
     */
    "paid_order_count": `${bigint}`;
    /**
     * Shape $ (Value): Array of {@link MoneyValue}. Gross paid totals in integer minor units, one
     * Money object per currency with paid orders, sorted by currency. Refunds are not subtracted.
     * Empty array when there are no paid orders. Shape $[] (Value): {@link MoneyValue}. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "paid_totals": Array<MoneyValue>;
    /**
     * Shape $ (Value): Array of {@link MoneyValue}. Refunded totals in integer minor units on the
     * same paid orders as paid_totals. One Money object per currency with paid orders, sorted by
     * currency, including zero when nothing was refunded. Empty array when there are no paid
     * orders. Shape $[] (Value): {@link MoneyValue}. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code.
     */
    "refunded_totals": Array<MoneyValue>;
};
/**
 * Shape $ (Value): {@link PaymentLinkSubscriptionPreview}. Subscription terms shown before an
 * active plan-backed payment link creates a checkout session.
 */
export type PaymentLinkSubscriptionPreview = {
    /** Shape $ (Value): string.  Value enum: "daily", "weekly", "monthly", "yearly". */
    "billing_interval": "daily" | "weekly" | "monthly" | "yearly" | (string & {});
    /**
     * Shape $ (Value): integer. Number of billing intervals between recurring charges. Format:
     * int32.
     */
    "billing_interval_count": number;
    /**
     * Shape $ (Value): Array of {@link SubscriptionIntervalOption}. Billing intervals the plan
     * offers, which the buyer chooses among on the checkout this link opens. The same values as
     * the subscription plan's `billing_interval_options`. maxItems: 12. uniqueItems: true. Shape
     * $[] (Value): {@link SubscriptionIntervalOption}. A billing interval, such as every 2 months,
     * offered by a subscription plan.
     */
    "billing_interval_options": Array<SubscriptionIntervalOption>;
    /**
     * Shape $ (Value): integer. The term agreed with the buyer, in months, when configured. Flint
     * records it on the subscription and does not stop the buyer from canceling earlier. Format:
     * int32.
     */
    "contract_term_months"?: number;
    /**
     * Shape $ (Value): boolean. True when the plan has a line that ships or is delivered, so each
     * renewal adds a shipping or delivery charge chosen at checkout. The amount is not known until
     * the buyer enters an address and chooses a method.
     */
    "delivery_required": boolean;
    /**
     * Shape $ (Value): {@link MoneyValue}. The fee agreed for canceling before the recorded term
     * ends, when configured. Flint records it on the subscription but never charges it. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "early_termination_fee_money"?: MoneyValue;
    /**
     * Shape $ (Value): {@link Image}. Plan image shown to the buyer, when configured. An image
     * with its `url`, `width`, and `height`, and optional `alt` text.
     */
    "plan_image"?: Image;
    /** Shape $ (Value): string. Plan name shown to the buyer. */
    "plan_name": string;
    /**
     * Shape $ (Value): Array of integer. Quantities the plan offers, which the buyer chooses among
     * on the checkout this link opens. The same values as the subscription plan's
     * `quantity_options`. maxItems: 10. uniqueItems: true. Shape $[] (Value): integer. Format:
     * int32. minimum: 1. maximum: 100.
     */
    "quantity_options": Array<number>;
    /**
     * Shape $ (Value): {@link MoneyValue}. Recurring total for one billing interval, including
     * line quantities and resolved modifiers. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "recurring_total_money": MoneyValue;
    /**
     * Shape $ (Value): {@link MoneyValue}. Setup fee added to the first amount due, when
     * configured. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code.
     */
    "setup_fee_money"?: MoneyValue;
    /**
     * Shape $ (Value): integer. Number of trial days before the first recurring charge, when
     * configured. Format: int32.
     */
    "trial_period_days"?: number;
};
/**
 * Shape $ (Value): {@link PaymentLinkThemeConfigInput}. Theme settings for a payment link's
 * checkout: accent color, primary color, and title.
 */
export type PaymentLinkThemeConfigInput = {
    /** Shape $ (Value): string. minLength: 1. maxLength: 50. */
    "accent_color"?: string;
    /** Shape $ (Value): string. minLength: 1. maxLength: 50. */
    "primary_color"?: string;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "title"?: string;
};
/**
 * Shape $ (Value): {@link PaymentLinkThemePatchRequest}. Changes to a payment link's checkout
 * theme. Send null on a field to clear it.
 */
export type PaymentLinkThemePatchRequest = {
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. maxLength: 50. */
    "accent_color"?: string | null;
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. maxLength: 50. */
    "primary_color"?: string | null;
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. maxLength: 255. */
    "title"?: string | null;
};
/**
 * Shape $ (Value): {@link PaymentLinkThemePatchRequestInput}. Changes to a payment link's checkout
 * theme. Send null on a field to clear it.
 */
export type PaymentLinkThemePatchRequestInput = PaymentLinkThemePatchRequest;
export type PaymentLinksCreateInput = {
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link CreatePaymentLinkRequestInput}. The request body for: Create payment
     * link.
     */
    "body": InputValue<CreatePaymentLinkRequestInput>;
};
export type PaymentLinksGetInput = {
    /** Shape $ (Value): string. */
    "payment_link_id": InputValue<string>;
    /**
     * Shape $ (Value): Array of string. [] enum: "sales_summary", "subscription_plan". Shape $[]
     * (Value): string. Value enum: "sales_summary", "subscription_plan".
     */
    "expand"?: InputValue<Array<"sales_summary" | "subscription_plan">>;
};
export type PaymentLinksGetPublicInput = {
    /** Shape $ (Value): string. */
    "payment_link_id": InputValue<string>;
};
export type PaymentLinksListInput = {
    /** Shape $ (Value): integer. minimum: 1. maximum: 100. Default: 20. */
    "page_size"?: InputValue<number>;
    /** Shape $ (Value): string. */
    "page_token"?: InputValue<string>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "active", "inactive". Shape $[]
     * (Value): string. Value enum: "active", "inactive".
     */
    "status"?: InputValue<Array<"active" | "inactive">>;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "external_reference_id"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "query"?: InputValue<string>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "standard", "donation", "event".
     * Shape $[] (Value): string. Value enum: "standard", "donation", "event".
     */
    "payment_link_type"?: InputValue<Array<"standard" | "donation" | "event">>;
    /** Shape $ (Value): boolean. */
    "has_subscription_plan"?: InputValue<boolean>;
    /** Shape $ (Value): string. Default: "created_at". Value enum: "created_at", "updated_at". */
    "sort_by"?: InputValue<"created_at" | "updated_at">;
    /** Shape $ (Value): string. Default: "desc". Value enum: "asc", "desc". */
    "sort_direction"?: InputValue<"asc" | "desc">;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_after"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_before"?: InputValue<string | globalThis.Date>;
    /**
     * Shape $ (Value): Array of string. [] enum: "sales_summary", "subscription_plan". Shape $[]
     * (Value): string. Value enum: "sales_summary", "subscription_plan".
     */
    "expand"?: InputValue<Array<"sales_summary" | "subscription_plan">>;
};
export type PaymentLinksResolveInput = {
    /** Shape $ (Value): string. */
    "payment_link_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link ResolvePaymentLinkRequestInput}. The request body for: Resolve
     * payment link.
     */
    "body": InputValue<ResolvePaymentLinkRequestInput>;
};
export type PaymentLinksUpdateInput = {
    /** Shape $ (Value): string. */
    "payment_link_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link UpdatePaymentLinkRequestInput}. The request body for: Update payment
     * link.
     */
    "body": InputValue<UpdatePaymentLinkRequestInput>;
};
/** Shape $ (Value): {@link PaymentMethod}. A customer's saved payment details. */
export type PaymentMethod = {
    /**
     * Shape $ (Value): {@link CardDetails}. Card details on a payment method: brand, expiration
     * month and year, last four digits, and the wallet when one was used.
     */
    "card"?: CardDetails;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "created_at"?: string;
    /**
     * Shape $ (Value): {@link ExpandedCustomerSummary} or null. Shape $.anyOf[1] (Value): {@link
     * ExpandedCustomerSummary}. A customer's summary fields, returned in place of a customer ID
     * when the customer is expanded. Shape $.anyOf[2] (Value): null.
     */
    "customer"?: ((ExpandedCustomerSummary) | (null));
    /** Shape $ (Value): string. */
    "customer_id": string;
    /**
     * Shape $ (Value): string. A value that is the same for every saved copy of one card number at
     * this merchant and environment, so you can spot duplicates. It doesn't identify the card
     * anywhere else. A card added through Apple Pay or Google Pay can have a different fingerprint
     * from the same card typed in.
     */
    "fingerprint"?: string;
    /**
     * Shape $ (Value): boolean. Whether this is the customer's default payment method, the one
     * Customer.default_payment_method_id names. Change the default with PATCH
     * /v1/customers/{customer_id}; that sends customer.updated, not a payment method event.
     */
    "is_default": boolean;
    /** Shape $ (Value): string. */
    "merchant_id"?: string;
    /** Shape $ (Value): string. */
    "payment_method_id": string;
    /**
     * Shape $ (Value): string. Where the buyer saved this payment method. Returned on
     * /v1/me/payment-methods responses when Flint wallet support is enabled. Accept future values.
     * Value enum: "flint", "store".
     */
    "saved_with"?: "flint" | "store" | (string & {});
    /**
     * Shape $ (Value): string. Value enum: "pending", "active", "expired", "archived", "failed".
     */
    "status": "pending" | "active" | "expired" | "archived" | "failed" | (string & {});
    /** Shape $ (Value): string.  Value enum: "card". */
    "type": "card" | (string & {});
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "updated_at"?: string;
    /**
     * Shape $ (Value): string. When Flint may charge the payment method. off_session payment
     * methods can pay subscriptions, automatic invoices, and other charges without the buyer, and
     * can be a customer's default. on_session payment methods were saved by the buyer in checkout
     * for faster checkout at this merchant; Flint charges them only in checkouts the buyer
     * completes and refuses them for any charge without the buyer and as a default. Payment
     * methods saved before usage existed are off_session. Value enum: "on_session", "off_session".
     */
    "usage": "on_session" | "off_session" | (string & {});
};
/**
 * Shape $ (Value): {@link PaymentMethodDomain}. A domain registered for browser payment methods.
 */
export type PaymentMethodDomain = {
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "created_at": string;
    /** Shape $ (Value): string. */
    "domain_name": string;
    /** Shape $ (Value): string. */
    "payment_method_domain_id": string;
    /**
     * Shape $ (Value): Array of {@link PaymentMethodDomainPaymentOptionStatus}. Availability and
     * validation status of each payment option on this domain. Shape $[] (Value): {@link
     * PaymentMethodDomainPaymentOptionStatus}. Whether a wallet payment option, Apple Pay or
     * Google Pay, is active, inactive, or unavailable for a payment method domain.
     */
    "payment_option_statuses": Array<PaymentMethodDomainPaymentOptionStatus>;
    /** Shape $ (Value): string.  Value enum: "active", "inactive". */
    "status": "active" | "inactive" | (string & {});
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "updated_at": string;
    /** Shape $ (Value): string.  Value enum: "active", "action_required", "unavailable". */
    "validation_status": "active" | "action_required" | "unavailable" | (string & {});
};
/**
 * Shape $ (Value): {@link PaymentMethodDomainListResponse}. A page of `PaymentMethodDomain`
 * objects.
 */
export type PaymentMethodDomainListResponse = {
    /**
     * Shape $ (Value): Array of {@link PaymentMethodDomain}. Shape $[] (Value): {@link
     * PaymentMethodDomain}. A domain registered for browser payment methods.
     */
    "data": Array<PaymentMethodDomain>;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Metadata returned with a response: the `api_version`,
     * `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /** Shape $ (Value): string. */
    "next_page_token"?: string;
    /**
     * Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id"?: string;
};
/**
 * Shape $ (Value): {@link PaymentMethodDomainPaymentOptionStatus}. Whether a wallet payment
 * option, Apple Pay or Google Pay, is active, inactive, or unavailable for a payment method
 * domain.
 */
export type PaymentMethodDomainPaymentOptionStatus = {
    /** Shape $ (Value): string.  Value enum: "apple_pay", "google_pay". */
    "payment_option": "apple_pay" | "google_pay" | (string & {});
    /** Shape $ (Value): string.  Value enum: "active", "inactive", "unavailable". */
    "status": "active" | "inactive" | "unavailable" | (string & {});
};
/**
 * Shape $ (Value): {@link PaymentMethodDomainResponse}. A response containing
 * `PaymentMethodDomain` data.
 */
export type PaymentMethodDomainResponse = {
    /**
     * Shape $ (Value): {@link PaymentMethodDomain}. A domain registered for browser payment
     * methods.
     */
    "data": PaymentMethodDomain;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Metadata returned with a response: the `api_version`,
     * `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id"?: string;
};
export type PaymentMethodDomainsCreateInput = {
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link CreatePaymentMethodDomainRequestInput}. The request body for:
     * Register payment method domain.
     */
    "body": InputValue<CreatePaymentMethodDomainRequestInput>;
};
export type PaymentMethodDomainsGetInput = {
    /** Shape $ (Value): string. */
    "payment_method_domain_id": InputValue<string>;
};
export type PaymentMethodDomainsListInput = {
    /** Shape $ (Value): string. minLength: 1. maxLength: 253. */
    "domain_name"?: InputValue<string>;
    /** Shape $ (Value): integer. minimum: 1. maximum: 100. Default: 20. */
    "page_size"?: InputValue<number>;
    /** Shape $ (Value): string. */
    "page_token"?: InputValue<string>;
};
export type PaymentMethodDomainsUpdateInput = {
    /** Shape $ (Value): string. */
    "payment_method_domain_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link UpdatePaymentMethodDomainRequestInput}. The request body for: Update
     * payment method domain.
     */
    "body": InputValue<UpdatePaymentMethodDomainRequestInput>;
};
/** Shape $ (Value): {@link PaymentMethodListResponse}. A page of `PaymentMethod` objects. */
export type PaymentMethodListResponse = {
    /**
     * Shape $ (Value): Array of {@link PaymentMethod}. Shape $[] (Value): {@link PaymentMethod}. A
     * customer's saved payment details.
     */
    "data": Array<PaymentMethod>;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Metadata returned with a response: the `api_version`,
     * `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /** Shape $ (Value): string. */
    "next_page_token"?: string;
    /**
     * Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id"?: string;
};
/** Shape $ (Value): {@link PaymentMethodResponse}. A response containing `PaymentMethod` data. */
export type PaymentMethodResponse = {
    /** Shape $ (Value): {@link PaymentMethod}. A customer's saved payment details. */
    "data": PaymentMethod;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Metadata returned with a response: the `api_version`,
     * `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id"?: string;
};
/**
 * Shape $ (Value): {@link PaymentMethodWithSetup}. The saved payment method, with `client_setup`
 * when the buyer must still complete processor setup before the payment method can be used. A
 * customer's saved payment details.
 */
export type PaymentMethodWithSetup = (Exclude<PaymentMethod & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): {@link StripeClientSetup}. Present when the buyer must complete processor
     * setup before using this payment method. Stripe.js setup authority returned while saving a
     * payment method. Follow its stripe_js_call now. setup_collection is guidance instead and
     * never carries a secret.
     */
    "client_setup"?: StripeClientSetup;
});
export type PaymentMethodsGetInput = {
    /** Shape $ (Value): string. */
    "payment_method_id": InputValue<string>;
    /**
     * Shape $ (Value): Array of string. [] enum: "customer". Shape $[] (Value): string. Value
     * enum: "customer".
     */
    "expand"?: InputValue<Array<"customer">>;
};
export type PaymentMethodsListInput = {
    /** Shape $ (Value): string. */
    "customer_id"?: InputValue<string>;
    /** Shape $ (Value): integer. minimum: 1. maximum: 100. Default: 20. */
    "page_size"?: InputValue<number>;
    /** Shape $ (Value): string. */
    "page_token"?: InputValue<string>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "card". Shape $[] (Value): string.
     * Value enum: "card".
     */
    "type"?: InputValue<Array<"card">>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "active", "pending", "expired",
     * "archived", "failed". Shape $[] (Value): string. Value enum: "active", "pending", "expired",
     * "archived", "failed".
     */
    "status"?: InputValue<Array<"active" | "pending" | "expired" | "archived" | "failed">>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "on_session", "off_session". Shape
     * $[] (Value): string. Value enum: "on_session", "off_session".
     */
    "usage"?: InputValue<Array<"on_session" | "off_session">>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
    /**
     * Shape $ (Value): Array of string. [] enum: "customer". Shape $[] (Value): string. Value
     * enum: "customer".
     */
    "expand"?: InputValue<Array<"customer">>;
};
export type PaymentMethodsRemoveInput = MeRemovePaymentMethodInput;
export type PaymentMethodsSaveInput = {
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link SavePaymentMethodRequestInput}. The request body for: Create a
     * payment method.
     */
    "body": InputValue<SavePaymentMethodRequestInput>;
};
/**
 * Shape $ (Value): {@link PaymentRefund}. The part of a refund returned through one payment, with
 * the amount, tip, status, and any failure reason.
 */
export type PaymentRefund = {
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /**
     * Shape $ (Value): string. Why a refund failed or a payment refund was canceled. Failed and
     * canceled amounts become refundable again. Fix the cause, then create a new refund with a new
     * idempotency key. Unknown provider values are returned as refund_failed. Value enum:
     * "expired_or_canceled_card", "lost_or_stolen_card", "insufficient_funds",
     * "insufficient_available_balance", "declined", "merchant_request", "payment_disputed",
     * "payment_refund_failed", "payment_refund_not_attempted", "refund_failed".
     */
    "failure_reason"?: "expired_or_canceled_card"
        | "lost_or_stolen_card"
        | "insufficient_funds"
        | "insufficient_available_balance"
        | "declined"
        | "merchant_request"
        | "payment_disputed"
        | "payment_refund_failed"
        | "payment_refund_not_attempted"
        | "refund_failed"
        | (string & {});
    /**
     * Shape $ (Value): {@link ExpandedPaymentIntentSummary} or null. Shape $.anyOf[1] (Value):
     * {@link ExpandedPaymentIntentSummary}. A payment intent's summary fields, including amount,
     * status, and capture method, returned when the payment intent is expanded. Shape $.anyOf[2]
     * (Value): null.
     */
    "payment_intent"?: ((ExpandedPaymentIntentSummary) | (null));
    /** Shape $ (Value): string. */
    "payment_intent_id"?: string;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "refunded_tip_money": MoneyValue;
    /**
     * Shape $ (Value): string. Status of this payment refund or tender allocation. A succeeded
     * refund can still fail after a bank rejection. Parent status transitions send
     * refund.succeeded, refund.partially_succeeded, or refund.failed; other public changes send
     * refund.updated. Value enum: "pending", "requires_action", "succeeded", "failed", "canceled".
     */
    "status": "pending" | "requires_action" | "succeeded" | "failed" | "canceled" | (string & {});
};
/** Shape $ (Value): {@link PaymentReview}. A payment review requiring a merchant decision. */
export type PaymentReview = {
    /** Shape $ (Value): string or null. RFC3339 timestamp. Format: date-time. */
    "closed_at": string | null;
    /**
     * Shape $ (Value): {@link ResourceReference} or null. The credential that closed this payment
     * review. Null when Flint closed it. Shape $.anyOf[1] (Value): {@link ResourceReference}. A
     * reference to another resource by `resource_type` and `resource_id`. Shape $.anyOf[2]
     * (Value): null.
     */
    "closed_by": ((ResourceReference) | (null));
    /**
     * Shape $ (Value): string or null. Value enum: "approved", "declined", "refunded", "disputed",
     * "payment_canceled", "expired", null.
     */
    "closed_reason": "approved"
        | "declined"
        | "refunded"
        | "disputed"
        | "payment_canceled"
        | "expired"
        | null
        | (string & {})
        | null;
    /**
     * Shape $ (Value): {@link ExpandedCustomerSummary} or null. Shape $.anyOf[1] (Value): {@link
     * ExpandedCustomerSummary}. A customer's summary fields, returned in place of a customer ID
     * when the customer is expanded. Shape $.anyOf[2] (Value): null.
     */
    "customer"?: ((ExpandedCustomerSummary) | (null));
    /** Shape $ (Value): string or null. */
    "customer_id": string | null;
    /** Shape $ (Value): string or null. */
    "ip_address": string | null;
    /**
     * Shape $ (Value): {@link PaymentReviewResolutionFailure} or null. The most recent resolution
     * attempt that failed. Set when a decline's refund failed and the review reopened. Null when
     * no attempt has failed. Shape $.anyOf[1] (Value): {@link PaymentReviewResolutionFailure}. A
     * failed attempt to resolve a review by refund, with the `refund_id` and when it failed. Shape
     * $.anyOf[2] (Value): null.
     */
    "last_resolution_failure": ((PaymentReviewResolutionFailure) | (null));
    /** Shape $ (Value): string or null. */
    "matched_risk_rule_id": string | null;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "opened_at": string;
    /** Shape $ (Value): string.  Value enum: "rule". */
    "opened_reason": "rule" | (string & {});
    /**
     * Shape $ (Value): {@link ExpandedOrderSummary} or null. Shape $.anyOf[1] (Value): {@link
     * ExpandedOrderSummary}. An order's summary fields, including status, payment and refund
     * status, and pricing and settlement amounts, returned when the order is expanded. Shape
     * $.anyOf[2] (Value): null.
     */
    "order"?: ((ExpandedOrderSummary) | (null));
    /** Shape $ (Value): string or null. */
    "order_id": string | null;
    /**
     * Shape $ (Value): string. Value enum: "checkout", "payment_link", "invoice",
     * "subscription_initial", "subscription_renewal", "virtual_terminal", "api".
     */
    "payment_flow": "checkout"
        | "payment_link"
        | "invoice"
        | "subscription_initial"
        | "subscription_renewal"
        | "virtual_terminal"
        | "api"
        | (string & {});
    /**
     * Shape $ (Value): {@link ExpandedPaymentIntentSummary} or null. Shape $.anyOf[1] (Value):
     * {@link ExpandedPaymentIntentSummary}. A payment intent's summary fields, including amount,
     * status, and capture method, returned when the payment intent is expanded. Shape $.anyOf[2]
     * (Value): null.
     */
    "payment_intent"?: ((ExpandedPaymentIntentSummary) | (null));
    /** Shape $ (Value): string. */
    "payment_intent_id": string;
    /** Shape $ (Value): string. */
    "payment_review_id": string;
    /**
     * Shape $ (Value): {@link PaymentReviewPaymentSummary}. The payment details shown on a review:
     * amount, capture method, authorization expiry, card brand and last four digits, and buyer
     * email.
     */
    "payment_summary": PaymentReviewPaymentSummary;
    /** Shape $ (Value): string or null.  Value enum: "approve", "decline", "expire", null. */
    "pending_action": "approve" | "decline" | "expire" | null | (string & {}) | null;
    /** Shape $ (Value): string or null. The refund that closed this review. Null otherwise. */
    "refund_id": string | null;
    /**
     * Shape $ (Value): {@link MoneyValue} or null. Refunded amount for this review. Null when no
     * refund is recorded. Shape $.anyOf[1] (Value): {@link MoneyValue}. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code. Shape $.anyOf[2] (Value):
     * null.
     */
    "refunded_money": ((MoneyValue) | (null));
    /** Shape $ (Value): string or null. RFC3339 timestamp. Format: date-time. */
    "resolution_started_at": string | null;
    /**
     * Shape $ (Value): {@link ResourceReference} or null. The credential that started resolving
     * this payment review. Null when Flint started it. Shape $.anyOf[1] (Value): {@link
     * ResourceReference}. A reference to another resource by `resource_type` and `resource_id`.
     * Shape $.anyOf[2] (Value): null.
     */
    "resolution_started_by": ((ResourceReference) | (null));
    /**
     * Shape $ (Value): {@link PaymentReviewRisk}. The risk assessment shown on a review: a `level`
     * and, when available, a numeric `score`.
     */
    "risk": PaymentReviewRisk;
    /** Shape $ (Value): string.  Value enum: "open", "resolving", "closed". */
    "status": "open" | "resolving" | "closed" | (string & {});
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "updated_at": string;
};
/** Shape $ (Value): {@link PaymentReviewListResponse}. A page of `PaymentReview` objects. */
export type PaymentReviewListResponse = {
    /**
     * Shape $ (Value): Array of {@link PaymentReview}. Shape $[] (Value): {@link PaymentReview}. A
     * payment review requiring a merchant decision.
     */
    "data": Array<PaymentReview>;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Metadata returned with a response: the `api_version`,
     * `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /** Shape $ (Value): string. */
    "next_page_token"?: string;
    /**
     * Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id"?: string;
};
/**
 * Shape $ (Value): {@link PaymentReviewPaymentSummary}. The payment details shown on a review:
 * amount, capture method, authorization expiry, card brand and last four digits, and buyer email.
 */
export type PaymentReviewPaymentSummary = {
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /** Shape $ (Value): string or null. RFC3339 timestamp. Format: date-time. */
    "authorization_expires_at": string | null;
    /** Shape $ (Value): string.  Value enum: "automatic", "manual". */
    "capture_method": "automatic" | "manual" | (string & {});
    /** Shape $ (Value): string. */
    "email": string;
    /** Shape $ (Value): string. */
    "last4": string;
    /**
     * Shape $ (Value): string. Value enum: "amex", "discover", "diners", "jcb", "mastercard",
     * "unionpay", "visa", "unknown".
     */
    "payment_method_brand": "amex"
        | "discover"
        | "diners"
        | "jcb"
        | "mastercard"
        | "unionpay"
        | "visa"
        | "unknown"
        | (string & {});
};
/**
 * Shape $ (Value): {@link PaymentReviewResolutionFailure}. A failed attempt to resolve a review by
 * refund, with the `refund_id` and when it failed.
 */
export type PaymentReviewResolutionFailure = {
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "failed_at": string;
    /** Shape $ (Value): string. */
    "refund_id": string;
};
/** Shape $ (Value): {@link PaymentReviewResponse}. A response containing `PaymentReview` data. */
export type PaymentReviewResponse = {
    /** Shape $ (Value): {@link PaymentReview}. A payment review requiring a merchant decision. */
    "data": PaymentReview;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Metadata returned with a response: the `api_version`,
     * `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id"?: string;
};
/**
 * Shape $ (Value): {@link PaymentReviewRisk}. The risk assessment shown on a review: a `level`
 * and, when available, a numeric `score`.
 */
export type PaymentReviewRisk = {
    /** Shape $ (Value): string.  Value enum: "normal", "elevated", "highest", "not_assessed". */
    "level": "normal" | "elevated" | "highest" | "not_assessed" | (string & {});
    /**
     * Shape $ (Value): integer. Fraud score from the card processor's screening, from 0 to 99.
     * Higher means riskier. Absent when no score is available, which isn't a score of 0. Format:
     * int32. minimum: 0. maximum: 99.
     */
    "score"?: number;
};
/**
 * Shape $ (Value): {@link PaymentRisk}. The risk assessment for a payment intent, with its risk
 * level, score, outcome, and any matched rule or review.
 */
export type PaymentRisk = {
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "evaluated_at": string;
    /** Shape $ (Value): string.  Value enum: "normal", "elevated", "highest", "not_assessed". */
    "level": "normal" | "elevated" | "highest" | "not_assessed" | (string & {});
    /** Shape $ (Value): string. */
    "matched_risk_rule_id"?: string;
    /**
     * Shape $ (Value): string or null. Value enum: "authorized", "manual_review", "blocked",
     * "issuer_declined", "invalid", null.
     */
    "outcome"?: "authorized"
        | "manual_review"
        | "blocked"
        | "issuer_declined"
        | "invalid"
        | null
        | (string & {})
        | null;
    /**
     * Shape $ (Value): string or null. Value enum: "highest_risk", "elevated_risk",
     * "low_authorization_probability", "risk_rule", "risk_policy", null.
     */
    "outcome_reason"?: "highest_risk"
        | "elevated_risk"
        | "low_authorization_probability"
        | "risk_rule"
        | "risk_policy"
        | null
        | (string & {})
        | null;
    /** Shape $ (Value): string. */
    "payment_review_id"?: string;
    /**
     * Shape $ (Value): integer. Fraud score from the card processor's screening, from 0 to 99.
     * Higher means riskier. Absent when no score is available, which isn't a score of 0. Format:
     * int32. minimum: 0. maximum: 99.
     */
    "score"?: number;
    /** Shape $ (Value): string. */
    "statement": string;
};
/**
 * Shape $ (Value): {@link PaymentSourceAchDebitSummary}. Display details for a bank account
 * payment source: account type, bank name, and last four digits.
 */
export type PaymentSourceAchDebitSummary = {
    /** Shape $ (Value): string.  Value enum: "checking", "savings", "other". */
    "account_type"?: "checking" | "savings" | "other" | (string & {});
    /** Shape $ (Value): string. */
    "bank_name"?: string;
    /** Shape $ (Value): string. */
    "last4"?: string;
};
/**
 * Shape $ (Value): {@link PaymentSourceCardSummary}. Display details for a card payment source:
 * brand, last four digits, and payment method ID.
 */
export type PaymentSourceCardSummary = {
    /**
     * Shape $ (Value): string. Value enum: "visa", "mastercard", "amex", "discover", "diners",
     * "jcb", "unionpay".
     */
    "brand"?: "visa" | "mastercard" | "amex" | "discover" | "diners" | "jcb" | "unionpay" | (string & {});
    /** Shape $ (Value): string. */
    "last4"?: string;
    /** Shape $ (Value): string. */
    "payment_method_id"?: string;
};
/**
 * Shape $ (Value): {@link PaymentSourceCredential}. The credential you provide to pay an order: a
 * payment source token, a saved payment method ID, or a Stripe confirmation token.
 */
export type PaymentSourceCredential = (({
    /** Shape $ (Value): string. Opaque processor or browser payment source token. minLength: 1. */
    "token": string;
})
    | ({
    /**
     * Shape $ (Value): string. Saved Flint payment method ID belonging to the customer making this
     * payment. minLength: 1.
     */
    "payment_method_id": string;
})
    | ({
    /**
     * Shape $ (Value): object. Stripe credential collected for this payment. Shape
     * $.confirmation_token (Required): string. Stripe confirmation token you created with
     * Stripe.js from `payment_collection.stripe`. minLength: 1.
     */
    "stripe": {
        /**
         * Shape $ (Value): string. Stripe confirmation token you created with Stripe.js from
         * `payment_collection.stripe`. minLength: 1.
         */
        "confirmation_token": string;
    };
})
    | (Record<string, unknown>));
/**
 * Shape $ (Value): {@link PaymentSourceCredentialInput}. The credential you provide to pay an
 * order: a payment source token, a saved payment method ID, or a Stripe confirmation token.
 */
export type PaymentSourceCredentialInput = (({
    /** Shape $ (Value): string. Opaque processor or browser payment source token. minLength: 1. */
    "token": string;
})
    | ({
    /**
     * Shape $ (Value): string. Saved Flint payment method ID belonging to the customer making this
     * payment. minLength: 1.
     */
    "payment_method_id": string;
})
    | ({
    /**
     * Shape $ (Value): object. Stripe credential collected for this payment. Shape
     * $.confirmation_token (Required): string. Stripe confirmation token you created with
     * Stripe.js from `payment_collection.stripe`. minLength: 1.
     */
    "stripe": {
        /**
         * Shape $ (Value): string. Stripe confirmation token you created with Stripe.js from
         * `payment_collection.stripe`. minLength: 1.
         */
        "confirmation_token": string;
    };
}));
/**
 * Shape $ (Value): {@link PaymentSourceSummary}. A summary of the payment source used for a
 * payment, by funding-method family, with card or bank account display details.
 */
export type PaymentSourceSummary = {
    /**
     * Shape $ (Value): {@link PaymentSourceAchDebitSummary}. Display details for a bank account
     * payment source: account type, bank name, and last four digits.
     */
    "ach_debit"?: PaymentSourceAchDebitSummary;
    /**
     * Shape $ (Value): {@link PaymentSourceCardSummary}. Display details for a card payment
     * source: brand, last four digits, and payment method ID.
     */
    "card"?: PaymentSourceCardSummary;
    /**
     * Shape $ (Value): string. Funding-method family. Wallet payment options use card because
     * their underlying funding source is a card. Value enum: "card", "ach_debit", "affirm".
     */
    "type": "card" | "ach_debit" | "affirm" | (string & {});
};
/**
 * Shape $ (Value): {@link PaymentVolumeBucket}. The half-open period [period_start_at,
 * period_end_at) includes its start and excludes its end. Amounts and payments_count use currency;
 * customer and subscription counts span currencies.
 */
export type PaymentVolumeBucket = {
    /**
     * Shape $ (Value): integer string. Succeeded payments selected by payment created_at within
     * this bucket, restricted to the response currency. The half-open period [period_start_at,
     * period_end_at) includes its start and excludes its end. Amounts and payments_count use
     * currency; customer and subscription counts span currencies. Use an integer string (decimal
     * digits), not a floating-point number. Format: int64.
     */
    "payments_count": `${bigint}`;
    /**
     * Shape $ (Value): string. Exclusive bucket end instant, clipped to the resolved period. The
     * half-open period [period_start_at, period_end_at) includes its start and excludes its end.
     * Amounts and payments_count use currency; customer and subscription counts span currencies.
     * Format: date-time.
     */
    "period_end_at": string;
    /**
     * Shape $ (Value): string. Inclusive start instant. The half-open period [period_start_at,
     * period_end_at) includes its start and excludes its end. Amounts and payments_count use
     * currency; customer and subscription counts span currencies. Format: date-time.
     */
    "period_start_at": string;
    /**
     * Shape $ (Value): {@link MoneyValue}. Succeeded payment amounts selected by payment
     * created_at within this bucket, in the response currency. The half-open period
     * [period_start_at, period_end_at) includes its start and excludes its end. Amounts and
     * payments_count use currency; customer and subscription counts span currencies. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "volume_money": MoneyValue;
};
/**
 * Shape $ (Value): {@link PaymentVolumeTimeseries}. The half-open period [period_start_at,
 * period_end_at) includes its start and excludes its end. Amounts and payments_count use currency;
 * customer and subscription counts span currencies.
 */
export type PaymentVolumeTimeseries = {
    /**
     * Shape $ (Value): Array of {@link PaymentVolumeBucket}. Payment created_at buckets clipped to
     * the period, including empty buckets. Repeated local hours produce two buckets; skipped hours
     * and days produce none. The half-open period [period_start_at, period_end_at) includes its
     * start and excludes its end. Amounts and payments_count use currency; customer and
     * subscription counts span currencies. Shape $[] (Value): {@link PaymentVolumeBucket}. The
     * half-open period [period_start_at, period_end_at) includes its start and excludes its end.
     * Amounts and payments_count use currency; customer and subscription counts span currencies.
     */
    "buckets": Array<PaymentVolumeBucket>;
    /**
     * Shape $ (Value): Array of string. Currencies of succeeded payments selected by payment
     * created_at or counted refunds selected by refund created_at in the period, regardless of the
     * currency filter. Empty when neither has rows. The half-open period [period_start_at,
     * period_end_at) includes its start and excludes its end. Amounts and payments_count use
     * currency; customer and subscription counts span currencies. Shape $[] (Value): string.
     */
    "currencies": Array<string>;
    /**
     * Shape $ (Value): string. ISO 4217 currency for amounts and payment counts. Defaults to the
     * merchant's default currency. The half-open period [period_start_at, period_end_at) includes
     * its start and excludes its end. Amounts and payments_count use currency; customer and
     * subscription counts span currencies. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     * Example: "USD".
     */
    "currency": string;
    /**
     * Shape $ (Value): string. Local bucket size: hour, day, week starting Monday, or month.
     * Defaults to day. The half-open period [period_start_at, period_end_at) includes its start
     * and excludes its end. Amounts and payments_count use currency; customer and subscription
     * counts span currencies. Value enum: "hour", "day", "week", "month".
     */
    "granularity": "hour" | "day" | "week" | "month" | (string & {});
    /**
     * Shape $ (Value): string. Exclusive resolved end instant. Omitted or future request ends
     * resolve to the request time truncated to the second. The half-open period [period_start_at,
     * period_end_at) includes its start and excludes its end. Amounts and payments_count use
     * currency; customer and subscription counts span currencies. Format: date-time.
     */
    "period_end_at": string;
    /**
     * Shape $ (Value): string. Inclusive start instant. The half-open period [period_start_at,
     * period_end_at) includes its start and excludes its end. Amounts and payments_count use
     * currency; customer and subscription counts span currencies. Format: date-time.
     */
    "period_start_at": string;
    /**
     * Shape $ (Value): string. IANA timezone used only for local bucket boundaries. Defaults to
     * UTC. The half-open period [period_start_at, period_end_at) includes its start and excludes
     * its end. Amounts and payments_count use currency; customer and subscription counts span
     * currencies.
     */
    "timezone": string;
};
/**
 * Shape $ (Value): {@link PaymentVolumeTimeseriesResponse}. A response containing
 * `PaymentVolumeTimeseries` data.
 */
export type PaymentVolumeTimeseriesResponse = {
    /**
     * Shape $ (Value): {@link PaymentVolumeTimeseries}. The half-open period [period_start_at,
     * period_end_at) includes its start and excludes its end. Amounts and payments_count use
     * currency; customer and subscription counts span currencies.
     */
    "data": PaymentVolumeTimeseries;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Metadata returned with a response: the `api_version`,
     * `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id"?: string;
};
/** Shape $ (Value): {@link Payout}. Funds sent from a merchant balance to a payout destination. */
export type Payout = {
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /**
     * Shape $ (Value): string. Calendar date the bank is expected to receive the funds, in
     * YYYY-MM-DD format using the UTC date of the expected arrival. Format: date.
     */
    "arrival_date"?: string;
    /**
     * Shape $ (Value): string. Balance source this payout draws from. Flint chooses the source
     * when balance_source_type is omitted at create. Clients must accept source types added in
     * future releases. Value enum: "card", "bank_account".
     */
    "balance_source_type": "card" | "bank_account" | (string & {});
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "created_at": string;
    /**
     * Shape $ (Value): string. ISO 4217 currency code. minLength: 3. maxLength: 3. pattern:
     * ^[A-Z]{3}$. Example: "USD".
     */
    "currency": string;
    /** Shape $ (Value): string. */
    "description"?: string;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): string. Flint-normalized payout failure code. Unknown provider values are
     * returned as payout_failed. Value enum: "account_closed", "account_frozen",
     * "bank_account_restricted", "bank_ownership_changed", "could_not_process",
     * "debit_not_authorized", "declined", "insufficient_funds", "invalid_account_number",
     * "incorrect_account_holder_name", "incorrect_account_holder_address",
     * "incorrect_account_holder_tax_id", "invalid_currency", "no_account", "unsupported_card",
     * "payout_failed".
     */
    "failure_code"?: "account_closed"
        | "account_frozen"
        | "bank_account_restricted"
        | "bank_ownership_changed"
        | "could_not_process"
        | "debit_not_authorized"
        | "declined"
        | "insufficient_funds"
        | "invalid_account_number"
        | "incorrect_account_holder_name"
        | "incorrect_account_holder_address"
        | "incorrect_account_holder_tax_id"
        | "invalid_currency"
        | "no_account"
        | "unsupported_card"
        | "payout_failed"
        | (string & {});
    /**
     * Shape $ (Value): string. Flint-authored payout failure message. This is stable explanatory
     * text, not a raw provider message.
     */
    "failure_message"?: string;
    /**
     * Shape $ (Value): string. Whether the payout fee is estimated or final. not_applicable means
     * no applicable fee status is known, including unmapped fee states. Value enum: "estimated",
     * "final", "not_applicable".
     */
    "fee_amount_status": "estimated" | "final" | "not_applicable" | (string & {});
    /**
     * Shape $ (Value): {@link MoneyValue} or null. Shape $.anyOf[1] (Value): {@link MoneyValue}.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code. Shape
     * $.anyOf[2] (Value): null.
     */
    "fee_money": ((MoneyValue) | (null));
    /**
     * Shape $ (Value): string. What started the payout. Unmapped sources are returned as other.
     * Value enum: "manual", "scheduled", "platform", "other".
     */
    "initiated_by": "manual" | "scheduled" | "platform" | "other" | (string & {});
    /** Shape $ (Value): string. */
    "merchant_id": string;
    /** Shape $ (Value): Map of string. Shape $.* (Value): string. */
    "metadata"?: Record<string, string>;
    /**
     * Shape $ (Value): string. Payout method. instant can appear on imported payouts; unmapped
     * methods are returned as other. Value enum: "standard", "instant", "other".
     */
    "method": "standard" | "instant" | "other" | (string & {});
    /**
     * Shape $ (Value): {@link MoneyValue} or null. Shape $.anyOf[1] (Value): {@link MoneyValue}.
     * Signed monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * Shape $.anyOf[2] (Value): null.
     */
    "net_money": ((MoneyValue) | (null));
    /**
     * Shape $ (Value): {@link ExpandedPayoutSummary} or null. Shape $.anyOf[1] (Value): {@link
     * ExpandedPayoutSummary}. A payout's summary fields, including amount, method, status, and
     * arrival date, returned when the payout is expanded. Shape $.anyOf[2] (Value): null.
     */
    "original_payout"?: ((ExpandedPayoutSummary) | (null));
    /** Shape $ (Value): string. */
    "original_payout_id"?: string;
    /**
     * Shape $ (Value): {@link ExpandedPayoutDestinationSummary} or null. Shape $.anyOf[1] (Value):
     * {@link ExpandedPayoutDestinationSummary}. A payout destination's summary fields, such as
     * type, bank name, last four digits, and status, returned when the destination is expanded.
     * Shape $.anyOf[2] (Value): null.
     */
    "payout_destination"?: ((ExpandedPayoutDestinationSummary) | (null));
    /** Shape $ (Value): string. */
    "payout_destination_id"?: string;
    /** Shape $ (Value): string. */
    "payout_id": string;
    /** Shape $ (Value): string.  Value enum: "none", "reversing", "reversed". */
    "reversal_status": "none" | "reversing" | "reversed" | (string & {});
    /**
     * Shape $ (Value): {@link ExpandedPayoutSummary} or null. Shape $.anyOf[1] (Value): {@link
     * ExpandedPayoutSummary}. A payout's summary fields, including amount, method, status, and
     * arrival date, returned when the payout is expanded. Shape $.anyOf[2] (Value): null.
     */
    "reversed_by_payout"?: ((ExpandedPayoutSummary) | (null));
    /** Shape $ (Value): string. */
    "reversed_by_payout_id"?: string;
    /** Shape $ (Value): string. */
    "statement_descriptor"?: string;
    /**
     * Shape $ (Value): string. Value enum: "pending", "in_transit", "paid", "failed", "canceled".
     */
    "status": "pending" | "in_transit" | "paid" | "failed" | "canceled" | (string & {});
    /**
     * Shape $ (Value): {@link PayoutTraceID}. A payout's bank trace ID, with whether it is
     * pending, available, or unsupported.
     */
    "trace_id"?: PayoutTraceID;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "updated_at": string;
};
/** Shape $ (Value): {@link PayoutDestination}. The account that receives merchant payouts. */
export type PayoutDestination = {
    /**
     * Shape $ (Value): Array of string. Payout methods available through Flint for this
     * destination. Only standard is currently available. [] enum: "standard". Shape $[] (Value):
     * string. Value enum: "standard".
     */
    "available_payout_methods": Array<"standard" | (string & {})>;
    /** Shape $ (Value): string. */
    "bank_name"?: string;
    /**
     * Shape $ (Value): string. ISO 3166-1 alpha-2 country code. minLength: 2. maxLength: 2.
     * pattern: ^[A-Z]{2}$. Example: "US".
     */
    "country"?: string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "created_at": string;
    /**
     * Shape $ (Value): string. ISO 4217 currency code. minLength: 3. maxLength: 3. pattern:
     * ^[A-Z]{3}$. Example: "USD".
     */
    "currency": string;
    /** Shape $ (Value): boolean. */
    "default_for_currency": boolean;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "disabled_at"?: string;
    /**
     * Shape $ (Value): string. Flint-normalized reason the payout destination cannot currently be
     * used. Unknown provider/backend values are returned as destination_unavailable. Value enum:
     * "destination_disabled", "destination_removed", "destination_unavailable",
     * "destination_rejected", "destination_under_review", "disabled_by_merchant_request",
     * "requirements_past_due", "requirements_pending_verification",
     * "superseded_destination_session_completed".
     */
    "disabled_reason"?: "destination_disabled"
        | "destination_removed"
        | "destination_unavailable"
        | "destination_rejected"
        | "destination_under_review"
        | "disabled_by_merchant_request"
        | "requirements_past_due"
        | "requirements_pending_verification"
        | "superseded_destination_session_completed"
        | (string & {});
    /** Shape $ (Value): string. */
    "last4"?: string;
    /** Shape $ (Value): string. */
    "merchant_id": string;
    /** Shape $ (Value): Map of string. Shape $.* (Value): string. */
    "metadata"?: Record<string, string>;
    /** Shape $ (Value): string. */
    "payout_destination_id": string;
    /**
     * Shape $ (Value): string. Current status. Archived: deleted, and still readable by ID. Value
     * enum: "pending", "active", "verification_required", "disabled", "archived", "failed".
     */
    "status": "pending" | "active" | "verification_required" | "disabled" | "archived" | "failed" | (string & {});
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "status_updated_at"?: string;
    /**
     * Shape $ (Value): string. Destination type. Unmapped destination types are returned as other.
     * Value enum: "bank_account", "debit_card", "other".
     */
    "type": "bank_account" | "debit_card" | "other" | (string & {});
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "updated_at": string;
};
/**
 * Shape $ (Value): {@link PayoutDestinationListResponse}. A page of `PayoutDestination` objects.
 */
export type PayoutDestinationListResponse = {
    /**
     * Shape $ (Value): Array of {@link PayoutDestination}. Shape $[] (Value): {@link
     * PayoutDestination}. The account that receives merchant payouts.
     */
    "data": Array<PayoutDestination>;
    /**
     * Shape $ (Value): {@link MoneyMovementListMeta}. Response metadata for money movement lists,
     * including request and trace IDs, warnings, and the state of the available history.
     */
    "meta"?: MoneyMovementListMeta;
    /** Shape $ (Value): string. */
    "next_page_token"?: string;
    /**
     * Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id"?: string;
};
/**
 * Shape $ (Value): {@link PayoutDestinationResponse}. A response containing `PayoutDestination`
 * data.
 */
export type PayoutDestinationResponse = {
    /** Shape $ (Value): {@link PayoutDestination}. The account that receives merchant payouts. */
    "data": PayoutDestination;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Metadata returned with a response: the `api_version`,
     * `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id"?: string;
};
/** Shape $ (Value): {@link PayoutListResponse}. A page of `Payout` objects. */
export type PayoutListResponse = {
    /**
     * Shape $ (Value): Array of {@link Payout}. Shape $[] (Value): {@link Payout}. Funds sent from
     * a merchant balance to a payout destination.
     */
    "data": Array<Payout>;
    /**
     * Shape $ (Value): {@link MoneyMovementListMeta}. Response metadata for money movement lists,
     * including request and trace IDs, warnings, and the state of the available history.
     */
    "meta"?: MoneyMovementListMeta;
    /** Shape $ (Value): string. */
    "next_page_token"?: string;
    /**
     * Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id"?: string;
};
/** Shape $ (Value): {@link PayoutResponse}. A response containing `Payout` data. */
export type PayoutResponse = {
    /**
     * Shape $ (Value): {@link Payout}. Funds sent from a merchant balance to a payout destination.
     */
    "data": Payout;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Metadata returned with a response: the `api_version`,
     * `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id"?: string;
};
