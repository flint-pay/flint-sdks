import type { MoneyValue, MoneyValueInput } from './types-33.js';
import type { OrderLineItemTax, OrderLineItemTaxInput } from './types-34.js';
import type { ProductPriceRange } from './types-39.js';
import type { PaymentLink } from './types-37.js';
import type { ResponseMeta, ResolvePaymentLinkRequestInput } from './types-42.js';
import type { Image } from './types-21.js';
import type { SubscriptionIntervalOption } from './types-48.js';
import type { InputValue } from '../runtime.js';
import type { CreatePaymentLinkRequestInput } from './types-8.js';
import type { UpdatePaymentLinkRequestInput, UpdatePaymentMethodDomainRequestInput } from './types-52.js';
import type { CardDetails } from './types-3.js';
import type { ExpandedCustomerSummary } from './types-18.js';
import type { CreatePaymentMethodDomainRequestInput } from './types-9.js';
import type { StripeClientSetup } from './types-47.js';
/**
 * Shape $ (Value): {@link PaymentLinkEventConfigPatchRequest}. Changes to an event payment link's
 * settings. Send null on a nullable field to clear it.
 */
export type PaymentLinkEventConfigPatchRequest = {
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "event_at"?: string;
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
     * Shape $ (Value): string or null. Prefix for ticket numbers, up to 5 characters. It cannot
     * change after the event has issued tickets. Send null to clear it. minLength: 1. maxLength:
     * 5.
     */
    "ticket_prefix"?: string | null;
    /** Shape $ (Value): string. minLength: 1. */
    "timezone"?: string;
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. maxLength: 500. */
    "venue"?: string | null;
};
/**
 * Shape $ (Value): {@link PaymentLinkEventConfigPatchRequestInput}. Changes to an event payment
 * link's settings. Send null on a nullable field to clear it.
 */
export type PaymentLinkEventConfigPatchRequestInput = {
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
     * Shape $ (Value): string or null. Prefix for ticket numbers, up to 5 characters. It cannot
     * change after the event has issued tickets. Send null to clear it. minLength: 1. maxLength:
     * 5.
     */
    "ticket_prefix"?: string | null;
    /** Shape $ (Value): string. minLength: 1. */
    "timezone"?: string;
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. maxLength: 500. */
    "venue"?: string | null;
};
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
    /**
     * Shape $ (Value): string. Variant selected when the page opens and used at resolve when the
     * buyer omits a selection. Must be in variant_ids. Omit it to require a buyer selection.
     * pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "default_variant_id"?: string;
    /** Shape $ (Value): string. */
    "description"?: string;
    /**
     * Shape $ (Value): boolean. True when the referenced variant or bundle cannot be sold, or no
     * listed variant in variant_ids can be sold in the line currency. Always false on ad hoc line
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
     * Shape $ (Value): string. Parent catalog context only. The product that the variants in
     * variant_ids belong to. Present only on buyer choice lines; refused on input.
     */
    "product_id"?: string;
    /**
     * Shape $ (Value): integer. Whole-number quantity; fractional quantities are not supported.
     * Format: int32.
     */
    "quantity": number;
    /**
     * Shape $ (Value): string. Current catalog name of the referenced variant or bundle, or the
     * product name for variant_ids lines. A variant reads as the product name, plus the variant
     * name when the variant is a named option combination. This is the catalog value at read time,
     * not a stored snapshot: checkout resolves it again when a buyer opens the link. Absent on
     * ad-hoc line items and when the catalog object no longer exists.
     */
    "resolved_name"?: string;
    /**
     * Shape $ (Value): {@link ProductPriceRange}. Current lowest and highest catalog unit prices
     * among listed variants that can be sold in the line currency. Computed at read time, not
     * stored. Omitted when no listed variant can be sold. The lowest and highest unit prices
     * across a product's variants.
     */
    "resolved_price_range"?: ProductPriceRange;
    /**
     * Shape $ (Value): {@link MoneyValue}. Current catalog unit price of the referenced variant or
     * bundle. This is the catalog value at read time, not a stored snapshot: checkout resolves the
     * price again when a buyer opens the link, so the amount a buyer pays can differ. Absent on
     * ad-hoc line items, variant_ids lines, and when the catalog object no longer exists. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
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
     * Shape $ (Value): string. Value enum: "variant", "bundle", "custom_fixed", "custom_variable".
     */
    "type": "variant" | "bundle" | "custom_fixed" | "custom_variable" | (string & {});
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "unit_price_money"?: MoneyValue;
    /** Shape $ (Value): string. */
    "variant_id"?: string;
    /**
     * Shape $ (Value): Array of string. Variant IDs buyers may choose from, in the order offered.
     * Contains 1 to 100 unique, active, sellable variants of one product in one currency.
     * Available only on standard payment links. Mutually exclusive with variant_id, bundle_id, and
     * ad hoc line item fields. minItems: 1. maxItems: 100. uniqueItems: true. Shape $[] (Value):
     * string. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "variant_ids"?: Array<string>;
})
    & ((Exclude<PaymentLinkLineItemVariant & object, readonly unknown[]>)
    | (Exclude<PaymentLinkLineItemBundle & object, readonly unknown[]>)
    | (Exclude<PaymentLinkLineItemCustomFixed & object, readonly unknown[]>)
    | (Exclude<PaymentLinkLineItemCustomVariable & object, readonly unknown[]>)
    | (Record<string, unknown>));
/**
 * Shape $ (Value): {@link PaymentLinkLineItemBundle}. The `bundle` variant of
 * `PaymentLinkLineItem`.
 */
export type PaymentLinkLineItemBundle = ({
    /** Shape $ (Value): boolean. */
    "allow_quantity_adjustment"?: boolean;
    /** Shape $ (Value): boolean. */
    "allow_unit_price_adjustment"?: boolean;
    /** Shape $ (Value): string. */
    "bundle_id": string;
    /**
     * Shape $ (Value): string. Variant selected when the page opens and used at resolve when the
     * buyer omits a selection. Must be in variant_ids. Omit it to require a buyer selection.
     * pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "default_variant_id"?: string;
    /** Shape $ (Value): string. */
    "description"?: string;
    /**
     * Shape $ (Value): boolean. True when the referenced variant or bundle cannot be sold, or no
     * listed variant in variant_ids can be sold in the line currency. Always false on ad hoc line
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
     * Shape $ (Value): string. Parent catalog context only. The product that the variants in
     * variant_ids belong to. Present only on buyer choice lines; refused on input.
     */
    "product_id"?: string;
    /**
     * Shape $ (Value): integer. Whole-number quantity; fractional quantities are not supported.
     * Format: int32.
     */
    "quantity": number;
    /**
     * Shape $ (Value): string. Current catalog name of the referenced variant or bundle, or the
     * product name for variant_ids lines. A variant reads as the product name, plus the variant
     * name when the variant is a named option combination. This is the catalog value at read time,
     * not a stored snapshot: checkout resolves it again when a buyer opens the link. Absent on
     * ad-hoc line items and when the catalog object no longer exists.
     */
    "resolved_name"?: string;
    /**
     * Shape $ (Value): {@link ProductPriceRange}. Current lowest and highest catalog unit prices
     * among listed variants that can be sold in the line currency. Computed at read time, not
     * stored. Omitted when no listed variant can be sold. The lowest and highest unit prices
     * across a product's variants.
     */
    "resolved_price_range"?: ProductPriceRange;
    /**
     * Shape $ (Value): {@link MoneyValue}. Current catalog unit price of the referenced variant or
     * bundle. This is the catalog value at read time, not a stored snapshot: checkout resolves the
     * price again when a buyer opens the link, so the amount a buyer pays can differ. Absent on
     * ad-hoc line items, variant_ids lines, and when the catalog object no longer exists. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
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
    /** Shape $ (Value): string.  Value enum: "bundle". */
    "type": "bundle" | (string & {});
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "unit_price_money"?: MoneyValue;
    /** Shape $ (Value): string. */
    "variant_id"?: string;
    /**
     * Shape $ (Value): Array of string. Variant IDs buyers may choose from, in the order offered.
     * Contains 1 to 100 unique, active, sellable variants of one product in one currency.
     * Available only on standard payment links. Mutually exclusive with variant_id, bundle_id, and
     * ad hoc line item fields. minItems: 1. maxItems: 100. uniqueItems: true. Shape $[] (Value):
     * string. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "variant_ids"?: Array<string>;
})
    & (({
    /** Shape $ (Value): string.  Value enum: "bundle". */
    "type": "bundle" | (string & {});
    /** Shape $ (Value): string. */
    "bundle_id": string;
}));
/**
 * Shape $ (Value): {@link PaymentLinkLineItemCustomFixed}. The `custom_fixed` variant of
 * `PaymentLinkLineItem`.
 */
export type PaymentLinkLineItemCustomFixed = ({
    /** Shape $ (Value): boolean. */
    "allow_quantity_adjustment"?: boolean;
    /** Shape $ (Value): boolean. */
    "allow_unit_price_adjustment"?: boolean;
    /** Shape $ (Value): string. */
    "bundle_id"?: string;
    /**
     * Shape $ (Value): string. Variant selected when the page opens and used at resolve when the
     * buyer omits a selection. Must be in variant_ids. Omit it to require a buyer selection.
     * pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "default_variant_id"?: string;
    /** Shape $ (Value): string. */
    "description"?: string;
    /**
     * Shape $ (Value): boolean. True when the referenced variant or bundle cannot be sold, or no
     * listed variant in variant_ids can be sold in the line currency. Always false on ad hoc line
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
    "name": string;
    /** Shape $ (Value): string. */
    "payment_link_line_item_id": string;
    /**
     * Shape $ (Value): string. Parent catalog context only. The product that the variants in
     * variant_ids belong to. Present only on buyer choice lines; refused on input.
     */
    "product_id"?: string;
    /**
     * Shape $ (Value): integer. Whole-number quantity; fractional quantities are not supported.
     * Format: int32.
     */
    "quantity": number;
    /**
     * Shape $ (Value): string. Current catalog name of the referenced variant or bundle, or the
     * product name for variant_ids lines. A variant reads as the product name, plus the variant
     * name when the variant is a named option combination. This is the catalog value at read time,
     * not a stored snapshot: checkout resolves it again when a buyer opens the link. Absent on
     * ad-hoc line items and when the catalog object no longer exists.
     */
    "resolved_name"?: string;
    /**
     * Shape $ (Value): {@link ProductPriceRange}. Current lowest and highest catalog unit prices
     * among listed variants that can be sold in the line currency. Computed at read time, not
     * stored. Omitted when no listed variant can be sold. The lowest and highest unit prices
     * across a product's variants.
     */
    "resolved_price_range"?: ProductPriceRange;
    /**
     * Shape $ (Value): {@link MoneyValue}. Current catalog unit price of the referenced variant or
     * bundle. This is the catalog value at read time, not a stored snapshot: checkout resolves the
     * price again when a buyer opens the link, so the amount a buyer pays can differ. Absent on
     * ad-hoc line items, variant_ids lines, and when the catalog object no longer exists. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
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
    /** Shape $ (Value): string.  Value enum: "custom_fixed". */
    "type": "custom_fixed" | (string & {});
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "unit_price_money": MoneyValue;
    /** Shape $ (Value): string. */
    "variant_id"?: string;
    /**
     * Shape $ (Value): Array of string. Variant IDs buyers may choose from, in the order offered.
     * Contains 1 to 100 unique, active, sellable variants of one product in one currency.
     * Available only on standard payment links. Mutually exclusive with variant_id, bundle_id, and
     * ad hoc line item fields. minItems: 1. maxItems: 100. uniqueItems: true. Shape $[] (Value):
     * string. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "variant_ids"?: Array<string>;
})
    & (({
    /** Shape $ (Value): boolean.  Value enum: false. */
    "allow_unit_price_adjustment"?: boolean;
    /** Shape $ (Value): string.  Value enum: "custom_fixed". */
    "type": "custom_fixed" | (string & {});
    /** Shape $ (Value): string. */
    "name": string;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "unit_price_money": MoneyValue;
}));
/**
 * Shape $ (Value): {@link PaymentLinkLineItemCustomVariable}. The `custom_variable` variant of
 * `PaymentLinkLineItem`.
 */
export type PaymentLinkLineItemCustomVariable = ({
    /** Shape $ (Value): boolean. */
    "allow_quantity_adjustment"?: boolean;
    /** Shape $ (Value): boolean. */
    "allow_unit_price_adjustment": boolean;
    /** Shape $ (Value): string. */
    "bundle_id"?: string;
    /**
     * Shape $ (Value): string. Variant selected when the page opens and used at resolve when the
     * buyer omits a selection. Must be in variant_ids. Omit it to require a buyer selection.
     * pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "default_variant_id"?: string;
    /** Shape $ (Value): string. */
    "description"?: string;
    /**
     * Shape $ (Value): boolean. True when the referenced variant or bundle cannot be sold, or no
     * listed variant in variant_ids can be sold in the line currency. Always false on ad hoc line
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
    "name": string;
    /** Shape $ (Value): string. */
    "payment_link_line_item_id": string;
    /**
     * Shape $ (Value): string. Parent catalog context only. The product that the variants in
     * variant_ids belong to. Present only on buyer choice lines; refused on input.
     */
    "product_id"?: string;
    /**
     * Shape $ (Value): integer. Whole-number quantity; fractional quantities are not supported.
     * Format: int32.
     */
    "quantity": number;
    /**
     * Shape $ (Value): string. Current catalog name of the referenced variant or bundle, or the
     * product name for variant_ids lines. A variant reads as the product name, plus the variant
     * name when the variant is a named option combination. This is the catalog value at read time,
     * not a stored snapshot: checkout resolves it again when a buyer opens the link. Absent on
     * ad-hoc line items and when the catalog object no longer exists.
     */
    "resolved_name"?: string;
    /**
     * Shape $ (Value): {@link ProductPriceRange}. Current lowest and highest catalog unit prices
     * among listed variants that can be sold in the line currency. Computed at read time, not
     * stored. Omitted when no listed variant can be sold. The lowest and highest unit prices
     * across a product's variants.
     */
    "resolved_price_range"?: ProductPriceRange;
    /**
     * Shape $ (Value): {@link MoneyValue}. Current catalog unit price of the referenced variant or
     * bundle. This is the catalog value at read time, not a stored snapshot: checkout resolves the
     * price again when a buyer opens the link, so the amount a buyer pays can differ. Absent on
     * ad-hoc line items, variant_ids lines, and when the catalog object no longer exists. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
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
    /** Shape $ (Value): string.  Value enum: "custom_variable". */
    "type": "custom_variable" | (string & {});
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "unit_price_money"?: MoneyValue;
    /** Shape $ (Value): string. */
    "variant_id"?: string;
    /**
     * Shape $ (Value): Array of string. Variant IDs buyers may choose from, in the order offered.
     * Contains 1 to 100 unique, active, sellable variants of one product in one currency.
     * Available only on standard payment links. Mutually exclusive with variant_id, bundle_id, and
     * ad hoc line item fields. minItems: 1. maxItems: 100. uniqueItems: true. Shape $[] (Value):
     * string. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "variant_ids"?: Array<string>;
})
    & (({
    /** Shape $ (Value): boolean.  Value enum: true. */
    "allow_unit_price_adjustment": boolean;
    /** Shape $ (Value): string.  Value enum: "custom_variable". */
    "type": "custom_variable" | (string & {});
    /** Shape $ (Value): string. */
    "name": string;
}));
/**
 * Shape $ (Value): {@link PaymentLinkLineItemInputBundle}. The `bundle` variant of
 * `PaymentLinkLineItemInput`.
 */
export type PaymentLinkLineItemInputBundle = ({
    /** Shape $ (Value): boolean. */
    "allow_quantity_adjustment"?: boolean;
    /** Shape $ (Value): boolean. */
    "allow_unit_price_adjustment"?: boolean;
    /** Shape $ (Value): string. minLength: 1. */
    "bundle_id": string;
    /**
     * Shape $ (Value): string. Variant selected when the page opens and used at resolve when the
     * buyer omits a selection. Must be in variant_ids. Omit it to require a buyer selection.
     * minLength: 1. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "default_variant_id"?: string;
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
    /** Shape $ (Value): string.  Value enum: "bundle". */
    "type": "bundle" | (string & {});
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "unit_price_money"?: MoneyValue;
    /** Shape $ (Value): string. minLength: 1. */
    "variant_id"?: string;
    /**
     * Shape $ (Value): Array of string. Variant IDs buyers may choose from, in the order offered.
     * Contains 1 to 100 unique, active, sellable variants of one product in one currency.
     * Available only on standard payment links. Mutually exclusive with variant_id, bundle_id, and
     * ad hoc line item fields. minItems: 1. maxItems: 100. uniqueItems: true. Shape $[] (Value):
     * string. minLength: 1. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "variant_ids"?: Array<string>;
})
    & (({
    /** Shape $ (Value): string.  Value enum: "bundle". */
    "type": "bundle" | (string & {});
    /** Shape $ (Value): string. minLength: 1. */
    "bundle_id": string;
}));
/**
 * Shape $ (Value): {@link PaymentLinkLineItemInputBundleInput}. The `bundle` variant of
 * `PaymentLinkLineItemInput`.
 */
export type PaymentLinkLineItemInputBundleInput = ({
    /** Shape $ (Value): boolean. */
    "allow_quantity_adjustment"?: boolean;
    /** Shape $ (Value): boolean. */
    "allow_unit_price_adjustment"?: boolean;
    /** Shape $ (Value): string. minLength: 1. */
    "bundle_id": string;
    /**
     * Shape $ (Value): string. Variant selected when the page opens and used at resolve when the
     * buyer omits a selection. Must be in variant_ids. Omit it to require a buyer selection.
     * minLength: 1. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "default_variant_id"?: string;
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
    /** Shape $ (Value): string.  Value enum: "bundle". */
    "type": "bundle";
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "unit_price_money"?: MoneyValueInput;
    /** Shape $ (Value): string. minLength: 1. */
    "variant_id"?: string;
    /**
     * Shape $ (Value): Array of string. Variant IDs buyers may choose from, in the order offered.
     * Contains 1 to 100 unique, active, sellable variants of one product in one currency.
     * Available only on standard payment links. Mutually exclusive with variant_id, bundle_id, and
     * ad hoc line item fields. minItems: 1. maxItems: 100. uniqueItems: true. Shape $[] (Value):
     * string. minLength: 1. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "variant_ids"?: Array<string>;
})
    & (({
    /** Shape $ (Value): string.  Value enum: "bundle". */
    "type": ("bundle") & ("bundle");
    /** Shape $ (Value): string. minLength: 1. */
    "bundle_id": string;
})
    & (({
    "variant_id"?: never;
})
    & ({
    "variant_ids"?: never;
})
    & ({
    "default_variant_id"?: never;
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
})));
/**
 * Shape $ (Value): {@link PaymentLinkLineItemInputCustomFixed}. The `custom_fixed` variant of
 * `PaymentLinkLineItemInput`.
 */
export type PaymentLinkLineItemInputCustomFixed = ({
    /** Shape $ (Value): boolean. */
    "allow_quantity_adjustment"?: boolean;
    /** Shape $ (Value): boolean. */
    "allow_unit_price_adjustment"?: boolean;
    /** Shape $ (Value): string. minLength: 1. */
    "bundle_id"?: string;
    /**
     * Shape $ (Value): string. Variant selected when the page opens and used at resolve when the
     * buyer omits a selection. Must be in variant_ids. Omit it to require a buyer selection.
     * minLength: 1. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "default_variant_id"?: string;
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
    "name": string;
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
    /** Shape $ (Value): string.  Value enum: "custom_fixed". */
    "type": "custom_fixed" | (string & {});
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "unit_price_money": MoneyValue;
    /** Shape $ (Value): string. minLength: 1. */
    "variant_id"?: string;
    /**
     * Shape $ (Value): Array of string. Variant IDs buyers may choose from, in the order offered.
     * Contains 1 to 100 unique, active, sellable variants of one product in one currency.
     * Available only on standard payment links. Mutually exclusive with variant_id, bundle_id, and
     * ad hoc line item fields. minItems: 1. maxItems: 100. uniqueItems: true. Shape $[] (Value):
     * string. minLength: 1. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "variant_ids"?: Array<string>;
})
    & (({
    /** Shape $ (Value): boolean.  Value enum: false. */
    "allow_unit_price_adjustment"?: boolean;
    /** Shape $ (Value): string.  Value enum: "custom_fixed". */
    "type": "custom_fixed" | (string & {});
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "name": string;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "unit_price_money": MoneyValue;
}));
/**
 * Shape $ (Value): {@link PaymentLinkLineItemInputCustomFixedInput}. The `custom_fixed` variant of
 * `PaymentLinkLineItemInput`.
 */
export type PaymentLinkLineItemInputCustomFixedInput = ({
    /** Shape $ (Value): boolean. */
    "allow_quantity_adjustment"?: boolean;
    /** Shape $ (Value): boolean. */
    "allow_unit_price_adjustment"?: boolean;
    /** Shape $ (Value): string. minLength: 1. */
    "bundle_id"?: string;
    /**
     * Shape $ (Value): string. Variant selected when the page opens and used at resolve when the
     * buyer omits a selection. Must be in variant_ids. Omit it to require a buyer selection.
     * minLength: 1. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "default_variant_id"?: string;
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
    "name": string;
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
    /** Shape $ (Value): string.  Value enum: "custom_fixed". */
    "type": "custom_fixed";
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "unit_price_money": MoneyValueInput;
    /** Shape $ (Value): string. minLength: 1. */
    "variant_id"?: string;
    /**
     * Shape $ (Value): Array of string. Variant IDs buyers may choose from, in the order offered.
     * Contains 1 to 100 unique, active, sellable variants of one product in one currency.
     * Available only on standard payment links. Mutually exclusive with variant_id, bundle_id, and
     * ad hoc line item fields. minItems: 1. maxItems: 100. uniqueItems: true. Shape $[] (Value):
     * string. minLength: 1. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "variant_ids"?: Array<string>;
})
    & (({
    /** Shape $ (Value): boolean.  Value enum: false. */
    "allow_unit_price_adjustment"?: false;
    /** Shape $ (Value): string.  Value enum: "custom_fixed". */
    "type": ("custom_fixed") & ("custom_fixed");
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
})
    & ({
    "variant_ids"?: never;
})
    & ({
    "default_variant_id"?: never;
})
    & ({
    "bundle_id"?: never;
})));
/**
 * Shape $ (Value): {@link PaymentLinkLineItemInputCustomVariable}. The `custom_variable` variant
 * of `PaymentLinkLineItemInput`.
 */
export type PaymentLinkLineItemInputCustomVariable = ({
    /** Shape $ (Value): boolean. */
    "allow_quantity_adjustment"?: boolean;
    /** Shape $ (Value): boolean. */
    "allow_unit_price_adjustment": boolean;
    /** Shape $ (Value): string. minLength: 1. */
    "bundle_id"?: string;
    /**
     * Shape $ (Value): string. Variant selected when the page opens and used at resolve when the
     * buyer omits a selection. Must be in variant_ids. Omit it to require a buyer selection.
     * minLength: 1. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "default_variant_id"?: string;
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
    "name": string;
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
    /** Shape $ (Value): string.  Value enum: "custom_variable". */
    "type": "custom_variable" | (string & {});
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "unit_price_money"?: MoneyValue;
    /** Shape $ (Value): string. minLength: 1. */
    "variant_id"?: string;
    /**
     * Shape $ (Value): Array of string. Variant IDs buyers may choose from, in the order offered.
     * Contains 1 to 100 unique, active, sellable variants of one product in one currency.
     * Available only on standard payment links. Mutually exclusive with variant_id, bundle_id, and
     * ad hoc line item fields. minItems: 1. maxItems: 100. uniqueItems: true. Shape $[] (Value):
     * string. minLength: 1. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "variant_ids"?: Array<string>;
})
    & (({
    /** Shape $ (Value): boolean.  Value enum: true. */
    "allow_unit_price_adjustment": boolean;
    /** Shape $ (Value): string.  Value enum: "custom_variable". */
    "type": "custom_variable" | (string & {});
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "name": string;
}));
/**
 * Shape $ (Value): {@link PaymentLinkLineItemInputCustomVariableInput}. The `custom_variable`
 * variant of `PaymentLinkLineItemInput`.
 */
export type PaymentLinkLineItemInputCustomVariableInput = ({
    /** Shape $ (Value): boolean. */
    "allow_quantity_adjustment"?: boolean;
    /** Shape $ (Value): boolean. */
    "allow_unit_price_adjustment": boolean;
    /** Shape $ (Value): string. minLength: 1. */
    "bundle_id"?: string;
    /**
     * Shape $ (Value): string. Variant selected when the page opens and used at resolve when the
     * buyer omits a selection. Must be in variant_ids. Omit it to require a buyer selection.
     * minLength: 1. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "default_variant_id"?: string;
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
    "name": string;
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
    /** Shape $ (Value): string.  Value enum: "custom_variable". */
    "type": "custom_variable";
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "unit_price_money"?: MoneyValueInput;
    /** Shape $ (Value): string. minLength: 1. */
    "variant_id"?: string;
    /**
     * Shape $ (Value): Array of string. Variant IDs buyers may choose from, in the order offered.
     * Contains 1 to 100 unique, active, sellable variants of one product in one currency.
     * Available only on standard payment links. Mutually exclusive with variant_id, bundle_id, and
     * ad hoc line item fields. minItems: 1. maxItems: 100. uniqueItems: true. Shape $[] (Value):
     * string. minLength: 1. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "variant_ids"?: Array<string>;
})
    & (({
    /** Shape $ (Value): boolean.  Value enum: true. */
    "allow_unit_price_adjustment": true;
    /** Shape $ (Value): string.  Value enum: "custom_variable". */
    "type": ("custom_variable") & ("custom_variable");
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "name": string;
})
    & (({
    "variant_id"?: never;
})
    & ({
    "variant_ids"?: never;
})
    & ({
    "default_variant_id"?: never;
})
    & ({
    "bundle_id"?: never;
})));
/**
 * Shape $ (Value): {@link PaymentLinkLineItemInputVariant}. The `variant` variant of
 * `PaymentLinkLineItemInput`.
 */
export type PaymentLinkLineItemInputVariant = ({
    /** Shape $ (Value): boolean. */
    "allow_quantity_adjustment"?: boolean;
    /** Shape $ (Value): boolean. */
    "allow_unit_price_adjustment"?: boolean;
    /** Shape $ (Value): string. minLength: 1. */
    "bundle_id"?: string;
    /**
     * Shape $ (Value): string. Variant selected when the page opens and used at resolve when the
     * buyer omits a selection. Must be in variant_ids. Omit it to require a buyer selection.
     * minLength: 1. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "default_variant_id"?: string;
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
    /** Shape $ (Value): string.  Value enum: "variant". */
    "type": "variant" | (string & {});
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "unit_price_money"?: MoneyValue;
    /** Shape $ (Value): string. minLength: 1. */
    "variant_id"?: string;
    /**
     * Shape $ (Value): Array of string. Variant IDs buyers may choose from, in the order offered.
     * Contains 1 to 100 unique, active, sellable variants of one product in one currency.
     * Available only on standard payment links. Mutually exclusive with variant_id, bundle_id, and
     * ad hoc line item fields. minItems: 1. maxItems: 100. uniqueItems: true. Shape $[] (Value):
     * string. minLength: 1. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "variant_ids"?: Array<string>;
})
    & (({
    /** Shape $ (Value): string.  Value enum: "variant". */
    "type": "variant" | (string & {});
})
    & (({
    /** Shape $ (Value): string. minLength: 1. */
    "variant_id": string;
})
    | ({
    /**
     * Shape $ (Value): Array of string. Variant IDs buyers may choose from, in the order offered.
     * Contains 1 to 100 unique, active, sellable variants of one product in one currency.
     * Available only on standard payment links. Mutually exclusive with variant_id, bundle_id, and
     * ad hoc line item fields. minItems: 1. maxItems: 100. uniqueItems: true. Shape $[] (Value):
     * string. minLength: 1. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "variant_ids": Array<string>;
})
    | (Record<string, unknown>)));
/**
 * Shape $ (Value): {@link PaymentLinkLineItemInputVariantInput}. The `variant` variant of
 * `PaymentLinkLineItemInput`.
 */
export type PaymentLinkLineItemInputVariantInput = ({
    /** Shape $ (Value): boolean. */
    "allow_quantity_adjustment"?: boolean;
    /** Shape $ (Value): boolean. */
    "allow_unit_price_adjustment"?: boolean;
    /** Shape $ (Value): string. minLength: 1. */
    "bundle_id"?: string;
    /**
     * Shape $ (Value): string. Variant selected when the page opens and used at resolve when the
     * buyer omits a selection. Must be in variant_ids. Omit it to require a buyer selection.
     * minLength: 1. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "default_variant_id"?: string;
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
    /** Shape $ (Value): string.  Value enum: "variant". */
    "type": "variant";
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "unit_price_money"?: MoneyValueInput;
    /** Shape $ (Value): string. minLength: 1. */
    "variant_id"?: string;
    /**
     * Shape $ (Value): Array of string. Variant IDs buyers may choose from, in the order offered.
     * Contains 1 to 100 unique, active, sellable variants of one product in one currency.
     * Available only on standard payment links. Mutually exclusive with variant_id, bundle_id, and
     * ad hoc line item fields. minItems: 1. maxItems: 100. uniqueItems: true. Shape $[] (Value):
     * string. minLength: 1. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "variant_ids"?: Array<string>;
})
    & (({
    /** Shape $ (Value): string.  Value enum: "variant". */
    "type": ("variant") & ("variant");
})
    & (({
    /** Shape $ (Value): string. minLength: 1. */
    "variant_id": string;
})
    | ({
    /**
     * Shape $ (Value): Array of string. Variant IDs buyers may choose from, in the order offered.
     * Contains 1 to 100 unique, active, sellable variants of one product in one currency.
     * Available only on standard payment links. Mutually exclusive with variant_id, bundle_id, and
     * ad hoc line item fields. minItems: 1. maxItems: 100. uniqueItems: true. Shape $[] (Value):
     * string. minLength: 1. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "variant_ids": Array<string>;
}))
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
})
    & ({
    "variant_id"?: never;
} | {
    "variant_ids"?: never;
})));
/**
 * Shape $ (Value): {@link PaymentLinkLineItemPatchInputBundle}. The `bundle` variant of
 * `PaymentLinkLineItemPatchInput`.
 */
export type PaymentLinkLineItemPatchInputBundle = ({
    /** Shape $ (Value): boolean. */
    "allow_quantity_adjustment"?: boolean;
    /** Shape $ (Value): boolean. */
    "allow_unit_price_adjustment"?: boolean;
    /** Shape $ (Value): string. minLength: 1. */
    "bundle_id": string;
    /**
     * Shape $ (Value): string or null. Variant selected when the page opens and used at resolve
     * when the buyer omits a selection. Must be in variant_ids. Omit it to require a buyer
     * selection. Send null to clear it. minLength: 1. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "default_variant_id"?: string | null;
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
    /** Shape $ (Value): string.  Value enum: "bundle". */
    "type": "bundle" | (string & {});
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "unit_price_money"?: MoneyValue;
    /** Shape $ (Value): string. minLength: 1. */
    "variant_id"?: string;
    /**
     * Shape $ (Value): Array of string. Variant IDs buyers may choose from, in the order offered.
     * Contains 1 to 100 unique, active, sellable variants of one product in one currency.
     * Available only on standard payment links. Mutually exclusive with variant_id, bundle_id, and
     * ad hoc line item fields. minItems: 1. maxItems: 100. uniqueItems: true. Shape $[] (Value):
     * string. minLength: 1. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "variant_ids"?: Array<string>;
})
    & (({
    /** Shape $ (Value): string.  Value enum: "bundle". */
    "type": "bundle" | (string & {});
    /** Shape $ (Value): string. minLength: 1. */
    "bundle_id": string;
}));
/**
 * Shape $ (Value): {@link PaymentLinkLineItemPatchInputBundleInput}. The `bundle` variant of
 * `PaymentLinkLineItemPatchInput`.
 */
export type PaymentLinkLineItemPatchInputBundleInput = ({
    /** Shape $ (Value): boolean. */
    "allow_quantity_adjustment"?: boolean;
    /** Shape $ (Value): boolean. */
    "allow_unit_price_adjustment"?: boolean;
    /** Shape $ (Value): string. minLength: 1. */
    "bundle_id": string;
    /**
     * Shape $ (Value): string or null. Variant selected when the page opens and used at resolve
     * when the buyer omits a selection. Must be in variant_ids. Omit it to require a buyer
     * selection. Send null to clear it. minLength: 1. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "default_variant_id"?: string | null;
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
    /** Shape $ (Value): string.  Value enum: "bundle". */
    "type": "bundle";
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "unit_price_money"?: MoneyValueInput;
    /** Shape $ (Value): string. minLength: 1. */
    "variant_id"?: string;
    /**
     * Shape $ (Value): Array of string. Variant IDs buyers may choose from, in the order offered.
     * Contains 1 to 100 unique, active, sellable variants of one product in one currency.
     * Available only on standard payment links. Mutually exclusive with variant_id, bundle_id, and
     * ad hoc line item fields. minItems: 1. maxItems: 100. uniqueItems: true. Shape $[] (Value):
     * string. minLength: 1. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "variant_ids"?: Array<string>;
})
    & (({
    /** Shape $ (Value): string.  Value enum: "bundle". */
    "type": ("bundle") & ("bundle");
    /** Shape $ (Value): string. minLength: 1. */
    "bundle_id": string;
})
    & (({
    "variant_id"?: never;
})
    & ({
    "variant_ids"?: never;
})
    & ({
    "default_variant_id"?: never;
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
})));
/**
 * Shape $ (Value): {@link PaymentLinkLineItemPatchInputCustomFixed}. The `custom_fixed` variant of
 * `PaymentLinkLineItemPatchInput`.
 */
export type PaymentLinkLineItemPatchInputCustomFixed = ({
    /** Shape $ (Value): boolean. */
    "allow_quantity_adjustment"?: boolean;
    /** Shape $ (Value): boolean. */
    "allow_unit_price_adjustment"?: boolean;
    /** Shape $ (Value): string. minLength: 1. */
    "bundle_id"?: string;
    /**
     * Shape $ (Value): string or null. Variant selected when the page opens and used at resolve
     * when the buyer omits a selection. Must be in variant_ids. Omit it to require a buyer
     * selection. Send null to clear it. minLength: 1. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "default_variant_id"?: string | null;
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
    "name": string;
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
    /** Shape $ (Value): string.  Value enum: "custom_fixed". */
    "type": "custom_fixed" | (string & {});
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "unit_price_money": MoneyValue;
    /** Shape $ (Value): string. minLength: 1. */
    "variant_id"?: string;
    /**
     * Shape $ (Value): Array of string. Variant IDs buyers may choose from, in the order offered.
     * Contains 1 to 100 unique, active, sellable variants of one product in one currency.
     * Available only on standard payment links. Mutually exclusive with variant_id, bundle_id, and
     * ad hoc line item fields. minItems: 1. maxItems: 100. uniqueItems: true. Shape $[] (Value):
     * string. minLength: 1. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "variant_ids"?: Array<string>;
})
    & (({
    /** Shape $ (Value): boolean.  Value enum: false. */
    "allow_unit_price_adjustment"?: boolean;
    /** Shape $ (Value): string.  Value enum: "custom_fixed". */
    "type": "custom_fixed" | (string & {});
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "name": string;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "unit_price_money": MoneyValue;
}));
/**
 * Shape $ (Value): {@link PaymentLinkLineItemPatchInputCustomFixedInput}. The `custom_fixed`
 * variant of `PaymentLinkLineItemPatchInput`.
 */
export type PaymentLinkLineItemPatchInputCustomFixedInput = ({
    /** Shape $ (Value): boolean. */
    "allow_quantity_adjustment"?: boolean;
    /** Shape $ (Value): boolean. */
    "allow_unit_price_adjustment"?: boolean;
    /** Shape $ (Value): string. minLength: 1. */
    "bundle_id"?: string;
    /**
     * Shape $ (Value): string or null. Variant selected when the page opens and used at resolve
     * when the buyer omits a selection. Must be in variant_ids. Omit it to require a buyer
     * selection. Send null to clear it. minLength: 1. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "default_variant_id"?: string | null;
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
    "name": string;
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
    /** Shape $ (Value): string.  Value enum: "custom_fixed". */
    "type": "custom_fixed";
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "unit_price_money": MoneyValueInput;
    /** Shape $ (Value): string. minLength: 1. */
    "variant_id"?: string;
    /**
     * Shape $ (Value): Array of string. Variant IDs buyers may choose from, in the order offered.
     * Contains 1 to 100 unique, active, sellable variants of one product in one currency.
     * Available only on standard payment links. Mutually exclusive with variant_id, bundle_id, and
     * ad hoc line item fields. minItems: 1. maxItems: 100. uniqueItems: true. Shape $[] (Value):
     * string. minLength: 1. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "variant_ids"?: Array<string>;
})
    & (({
    /** Shape $ (Value): boolean.  Value enum: false. */
    "allow_unit_price_adjustment"?: false;
    /** Shape $ (Value): string.  Value enum: "custom_fixed". */
    "type": ("custom_fixed") & ("custom_fixed");
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
})
    & ({
    "variant_ids"?: never;
})
    & ({
    "default_variant_id"?: never;
})
    & ({
    "bundle_id"?: never;
})));
/**
 * Shape $ (Value): {@link PaymentLinkLineItemPatchInputCustomVariable}. The `custom_variable`
 * variant of `PaymentLinkLineItemPatchInput`.
 */
export type PaymentLinkLineItemPatchInputCustomVariable = ({
    /** Shape $ (Value): boolean. */
    "allow_quantity_adjustment"?: boolean;
    /** Shape $ (Value): boolean. */
    "allow_unit_price_adjustment": boolean;
    /** Shape $ (Value): string. minLength: 1. */
    "bundle_id"?: string;
    /**
     * Shape $ (Value): string or null. Variant selected when the page opens and used at resolve
     * when the buyer omits a selection. Must be in variant_ids. Omit it to require a buyer
     * selection. Send null to clear it. minLength: 1. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "default_variant_id"?: string | null;
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
    "name": string;
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
    /** Shape $ (Value): string.  Value enum: "custom_variable". */
    "type": "custom_variable" | (string & {});
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "unit_price_money"?: MoneyValue;
    /** Shape $ (Value): string. minLength: 1. */
    "variant_id"?: string;
    /**
     * Shape $ (Value): Array of string. Variant IDs buyers may choose from, in the order offered.
     * Contains 1 to 100 unique, active, sellable variants of one product in one currency.
     * Available only on standard payment links. Mutually exclusive with variant_id, bundle_id, and
     * ad hoc line item fields. minItems: 1. maxItems: 100. uniqueItems: true. Shape $[] (Value):
     * string. minLength: 1. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "variant_ids"?: Array<string>;
})
    & (({
    /** Shape $ (Value): boolean.  Value enum: true. */
    "allow_unit_price_adjustment": boolean;
    /** Shape $ (Value): string.  Value enum: "custom_variable". */
    "type": "custom_variable" | (string & {});
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "name": string;
}));
/**
 * Shape $ (Value): {@link PaymentLinkLineItemPatchInputCustomVariableInput}. The `custom_variable`
 * variant of `PaymentLinkLineItemPatchInput`.
 */
export type PaymentLinkLineItemPatchInputCustomVariableInput = ({
    /** Shape $ (Value): boolean. */
    "allow_quantity_adjustment"?: boolean;
    /** Shape $ (Value): boolean. */
    "allow_unit_price_adjustment": boolean;
    /** Shape $ (Value): string. minLength: 1. */
    "bundle_id"?: string;
    /**
     * Shape $ (Value): string or null. Variant selected when the page opens and used at resolve
     * when the buyer omits a selection. Must be in variant_ids. Omit it to require a buyer
     * selection. Send null to clear it. minLength: 1. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "default_variant_id"?: string | null;
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
    "name": string;
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
    /** Shape $ (Value): string.  Value enum: "custom_variable". */
    "type": "custom_variable";
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "unit_price_money"?: MoneyValueInput;
    /** Shape $ (Value): string. minLength: 1. */
    "variant_id"?: string;
    /**
     * Shape $ (Value): Array of string. Variant IDs buyers may choose from, in the order offered.
     * Contains 1 to 100 unique, active, sellable variants of one product in one currency.
     * Available only on standard payment links. Mutually exclusive with variant_id, bundle_id, and
     * ad hoc line item fields. minItems: 1. maxItems: 100. uniqueItems: true. Shape $[] (Value):
     * string. minLength: 1. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "variant_ids"?: Array<string>;
})
    & (({
    /** Shape $ (Value): boolean.  Value enum: true. */
    "allow_unit_price_adjustment": true;
    /** Shape $ (Value): string.  Value enum: "custom_variable". */
    "type": ("custom_variable") & ("custom_variable");
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "name": string;
})
    & (({
    "variant_id"?: never;
})
    & ({
    "variant_ids"?: never;
})
    & ({
    "default_variant_id"?: never;
})
    & ({
    "bundle_id"?: never;
})));
/**
 * Shape $ (Value): {@link PaymentLinkLineItemPatchInputVariant}. The `variant` variant of
 * `PaymentLinkLineItemPatchInput`.
 */
export type PaymentLinkLineItemPatchInputVariant = ({
    /** Shape $ (Value): boolean. */
    "allow_quantity_adjustment"?: boolean;
    /** Shape $ (Value): boolean. */
    "allow_unit_price_adjustment"?: boolean;
    /** Shape $ (Value): string. minLength: 1. */
    "bundle_id"?: string;
    /**
     * Shape $ (Value): string or null. Variant selected when the page opens and used at resolve
     * when the buyer omits a selection. Must be in variant_ids. Omit it to require a buyer
     * selection. Send null to clear it. minLength: 1. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "default_variant_id"?: string | null;
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
    /** Shape $ (Value): string.  Value enum: "variant". */
    "type": "variant" | (string & {});
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "unit_price_money"?: MoneyValue;
    /** Shape $ (Value): string. minLength: 1. */
    "variant_id"?: string;
    /**
     * Shape $ (Value): Array of string. Variant IDs buyers may choose from, in the order offered.
     * Contains 1 to 100 unique, active, sellable variants of one product in one currency.
     * Available only on standard payment links. Mutually exclusive with variant_id, bundle_id, and
     * ad hoc line item fields. minItems: 1. maxItems: 100. uniqueItems: true. Shape $[] (Value):
     * string. minLength: 1. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "variant_ids"?: Array<string>;
})
    & (({
    /** Shape $ (Value): string.  Value enum: "variant". */
    "type": "variant" | (string & {});
})
    & (({
    /** Shape $ (Value): string. minLength: 1. */
    "variant_id": string;
})
    | ({
    /**
     * Shape $ (Value): Array of string. Variant IDs buyers may choose from, in the order offered.
     * Contains 1 to 100 unique, active, sellable variants of one product in one currency.
     * Available only on standard payment links. Mutually exclusive with variant_id, bundle_id, and
     * ad hoc line item fields. minItems: 1. maxItems: 100. uniqueItems: true. Shape $[] (Value):
     * string. minLength: 1. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "variant_ids": Array<string>;
})
    | (Record<string, unknown>)));
/**
 * Shape $ (Value): {@link PaymentLinkLineItemPatchInputVariantInput}. The `variant` variant of
 * `PaymentLinkLineItemPatchInput`.
 */
export type PaymentLinkLineItemPatchInputVariantInput = ({
    /** Shape $ (Value): boolean. */
    "allow_quantity_adjustment"?: boolean;
    /** Shape $ (Value): boolean. */
    "allow_unit_price_adjustment"?: boolean;
    /** Shape $ (Value): string. minLength: 1. */
    "bundle_id"?: string;
    /**
     * Shape $ (Value): string or null. Variant selected when the page opens and used at resolve
     * when the buyer omits a selection. Must be in variant_ids. Omit it to require a buyer
     * selection. Send null to clear it. minLength: 1. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "default_variant_id"?: string | null;
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
    /** Shape $ (Value): string.  Value enum: "variant". */
    "type": "variant";
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "unit_price_money"?: MoneyValueInput;
    /** Shape $ (Value): string. minLength: 1. */
    "variant_id"?: string;
    /**
     * Shape $ (Value): Array of string. Variant IDs buyers may choose from, in the order offered.
     * Contains 1 to 100 unique, active, sellable variants of one product in one currency.
     * Available only on standard payment links. Mutually exclusive with variant_id, bundle_id, and
     * ad hoc line item fields. minItems: 1. maxItems: 100. uniqueItems: true. Shape $[] (Value):
     * string. minLength: 1. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "variant_ids"?: Array<string>;
})
    & (({
    /** Shape $ (Value): string.  Value enum: "variant". */
    "type": ("variant") & ("variant");
})
    & (({
    /** Shape $ (Value): string. minLength: 1. */
    "variant_id": string;
})
    | ({
    /**
     * Shape $ (Value): Array of string. Variant IDs buyers may choose from, in the order offered.
     * Contains 1 to 100 unique, active, sellable variants of one product in one currency.
     * Available only on standard payment links. Mutually exclusive with variant_id, bundle_id, and
     * ad hoc line item fields. minItems: 1. maxItems: 100. uniqueItems: true. Shape $[] (Value):
     * string. minLength: 1. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "variant_ids": Array<string>;
}))
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
})
    & ({
    "variant_id"?: never;
} | {
    "variant_ids"?: never;
})));
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
    /**
     * Shape $ (Value): string or null. Variant selected when the page opens and used at resolve
     * when the buyer omits a selection. Must be in variant_ids. Omit it to require a buyer
     * selection. Send null to clear it. minLength: 1. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "default_variant_id"?: string | null;
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
     * Shape $ (Value): string. Value enum: "variant", "bundle", "custom_fixed", "custom_variable".
     */
    "type": "variant" | "bundle" | "custom_fixed" | "custom_variable" | (string & {});
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "unit_price_money"?: MoneyValue;
    /** Shape $ (Value): string. minLength: 1. */
    "variant_id"?: string;
    /**
     * Shape $ (Value): Array of string. Variant IDs buyers may choose from, in the order offered.
     * Contains 1 to 100 unique, active, sellable variants of one product in one currency.
     * Available only on standard payment links. Mutually exclusive with variant_id, bundle_id, and
     * ad hoc line item fields. minItems: 1. maxItems: 100. uniqueItems: true. Shape $[] (Value):
     * string. minLength: 1. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "variant_ids"?: Array<string>;
})
    & ((Exclude<PaymentLinkLineItemPatchInputVariant & object, readonly unknown[]>)
    | (Exclude<PaymentLinkLineItemPatchInputBundle & object, readonly unknown[]>)
    | (Exclude<PaymentLinkLineItemPatchInputCustomFixed & object, readonly unknown[]>)
    | (Exclude<PaymentLinkLineItemPatchInputCustomVariable & object, readonly unknown[]>)
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
    /**
     * Shape $ (Value): string or null. Variant selected when the page opens and used at resolve
     * when the buyer omits a selection. Must be in variant_ids. Omit it to require a buyer
     * selection. Send null to clear it. minLength: 1. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "default_variant_id"?: string | null;
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
     * Shape $ (Value): string. Value enum: "variant", "bundle", "custom_fixed", "custom_variable".
     */
    "type": "variant" | "bundle" | "custom_fixed" | "custom_variable";
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "unit_price_money"?: MoneyValueInput;
    /** Shape $ (Value): string. minLength: 1. */
    "variant_id"?: string;
    /**
     * Shape $ (Value): Array of string. Variant IDs buyers may choose from, in the order offered.
     * Contains 1 to 100 unique, active, sellable variants of one product in one currency.
     * Available only on standard payment links. Mutually exclusive with variant_id, bundle_id, and
     * ad hoc line item fields. minItems: 1. maxItems: 100. uniqueItems: true. Shape $[] (Value):
     * string. minLength: 1. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "variant_ids"?: Array<string>;
})
    & ((Exclude<PaymentLinkLineItemPatchInputVariantInput & object, readonly unknown[]>)
    | (Exclude<PaymentLinkLineItemPatchInputBundleInput & object, readonly unknown[]>)
    | (Exclude<PaymentLinkLineItemPatchInputCustomFixedInput & object, readonly unknown[]>)
    | (Exclude<PaymentLinkLineItemPatchInputCustomVariableInput & object, readonly unknown[]>));
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
    /**
     * Shape $ (Value): string. Variant selected when the page opens and used at resolve when the
     * buyer omits a selection. Must be in variant_ids. Omit it to require a buyer selection.
     * minLength: 1. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "default_variant_id"?: string;
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
     * Shape $ (Value): string. Value enum: "variant", "bundle", "custom_fixed", "custom_variable".
     */
    "type": "variant" | "bundle" | "custom_fixed" | "custom_variable" | (string & {});
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "unit_price_money"?: MoneyValue;
    /** Shape $ (Value): string. minLength: 1. */
    "variant_id"?: string;
    /**
     * Shape $ (Value): Array of string. Variant IDs buyers may choose from, in the order offered.
     * Contains 1 to 100 unique, active, sellable variants of one product in one currency.
     * Available only on standard payment links. Mutually exclusive with variant_id, bundle_id, and
     * ad hoc line item fields. minItems: 1. maxItems: 100. uniqueItems: true. Shape $[] (Value):
     * string. minLength: 1. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "variant_ids"?: Array<string>;
})
    & ((Exclude<PaymentLinkLineItemInputVariant & object, readonly unknown[]>)
    | (Exclude<PaymentLinkLineItemInputBundle & object, readonly unknown[]>)
    | (Exclude<PaymentLinkLineItemInputCustomFixed & object, readonly unknown[]>)
    | (Exclude<PaymentLinkLineItemInputCustomVariable & object, readonly unknown[]>)
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
    /**
     * Shape $ (Value): string. Variant selected when the page opens and used at resolve when the
     * buyer omits a selection. Must be in variant_ids. Omit it to require a buyer selection.
     * minLength: 1. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "default_variant_id"?: string;
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
     * Shape $ (Value): string. Value enum: "variant", "bundle", "custom_fixed", "custom_variable".
     */
    "type": "variant" | "bundle" | "custom_fixed" | "custom_variable";
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "unit_price_money"?: MoneyValueInput;
    /** Shape $ (Value): string. minLength: 1. */
    "variant_id"?: string;
    /**
     * Shape $ (Value): Array of string. Variant IDs buyers may choose from, in the order offered.
     * Contains 1 to 100 unique, active, sellable variants of one product in one currency.
     * Available only on standard payment links. Mutually exclusive with variant_id, bundle_id, and
     * ad hoc line item fields. minItems: 1. maxItems: 100. uniqueItems: true. Shape $[] (Value):
     * string. minLength: 1. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "variant_ids"?: Array<string>;
})
    & ((Exclude<PaymentLinkLineItemInputVariantInput & object, readonly unknown[]>)
    | (Exclude<PaymentLinkLineItemInputBundleInput & object, readonly unknown[]>)
    | (Exclude<PaymentLinkLineItemInputCustomFixedInput & object, readonly unknown[]>)
    | (Exclude<PaymentLinkLineItemInputCustomVariableInput & object, readonly unknown[]>));
/**
 * Shape $ (Value): {@link PaymentLinkLineItemVariant}. The `variant` variant of
 * `PaymentLinkLineItem`.
 */
export type PaymentLinkLineItemVariant = ({
    /** Shape $ (Value): boolean. */
    "allow_quantity_adjustment"?: boolean;
    /** Shape $ (Value): boolean. */
    "allow_unit_price_adjustment"?: boolean;
    /** Shape $ (Value): string. */
    "bundle_id"?: string;
    /**
     * Shape $ (Value): string. Variant selected when the page opens and used at resolve when the
     * buyer omits a selection. Must be in variant_ids. Omit it to require a buyer selection.
     * pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "default_variant_id"?: string;
    /** Shape $ (Value): string. */
    "description"?: string;
    /**
     * Shape $ (Value): boolean. True when the referenced variant or bundle cannot be sold, or no
     * listed variant in variant_ids can be sold in the line currency. Always false on ad hoc line
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
     * Shape $ (Value): string. Parent catalog context only. The product that the variants in
     * variant_ids belong to. Present only on buyer choice lines; refused on input.
     */
    "product_id"?: string;
    /**
     * Shape $ (Value): integer. Whole-number quantity; fractional quantities are not supported.
     * Format: int32.
     */
    "quantity": number;
    /**
     * Shape $ (Value): string. Current catalog name of the referenced variant or bundle, or the
     * product name for variant_ids lines. A variant reads as the product name, plus the variant
     * name when the variant is a named option combination. This is the catalog value at read time,
     * not a stored snapshot: checkout resolves it again when a buyer opens the link. Absent on
     * ad-hoc line items and when the catalog object no longer exists.
     */
    "resolved_name"?: string;
    /**
     * Shape $ (Value): {@link ProductPriceRange}. Current lowest and highest catalog unit prices
     * among listed variants that can be sold in the line currency. Computed at read time, not
     * stored. Omitted when no listed variant can be sold. The lowest and highest unit prices
     * across a product's variants.
     */
    "resolved_price_range"?: ProductPriceRange;
    /**
     * Shape $ (Value): {@link MoneyValue}. Current catalog unit price of the referenced variant or
     * bundle. This is the catalog value at read time, not a stored snapshot: checkout resolves the
     * price again when a buyer opens the link, so the amount a buyer pays can differ. Absent on
     * ad-hoc line items, variant_ids lines, and when the catalog object no longer exists. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
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
    /** Shape $ (Value): string.  Value enum: "variant". */
    "type": "variant" | (string & {});
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "unit_price_money"?: MoneyValue;
    /** Shape $ (Value): string. */
    "variant_id"?: string;
    /**
     * Shape $ (Value): Array of string. Variant IDs buyers may choose from, in the order offered.
     * Contains 1 to 100 unique, active, sellable variants of one product in one currency.
     * Available only on standard payment links. Mutually exclusive with variant_id, bundle_id, and
     * ad hoc line item fields. minItems: 1. maxItems: 100. uniqueItems: true. Shape $[] (Value):
     * string. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "variant_ids"?: Array<string>;
})
    & (({
    /** Shape $ (Value): string.  Value enum: "variant". */
    "type": "variant" | (string & {});
})
    & (({
    /** Shape $ (Value): string. */
    "variant_id": string;
})
    | ({
    /**
     * Shape $ (Value): Array of string. Variant IDs buyers may choose from, in the order offered.
     * Contains 1 to 100 unique, active, sellable variants of one product in one currency.
     * Available only on standard payment links. Mutually exclusive with variant_id, bundle_id, and
     * ad hoc line item fields. minItems: 1. maxItems: 100. uniqueItems: true. Shape $[] (Value):
     * string. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "variant_ids": Array<string>;
})
    | (Record<string, unknown>)));
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
    "request_id": string;
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
 * Shape $ (Value): {@link PaymentLinkProductOption}. An active product option offered on a payment
 * link, with values used by its available variants.
 */
export type PaymentLinkProductOption = {
    /** Shape $ (Value): string. Product option name, such as Size or Color. */
    "name": string;
    /** Shape $ (Value): string. ID of the product option. */
    "option_id": string;
    /**
     * Shape $ (Value): Array of {@link PaymentLinkProductOptionValue}. Values used by at least one
     * available variant, in product option value position order. Shape $[] (Value): {@link
     * PaymentLinkProductOptionValue}. A product option value used by an available payment link
     * variant.
     */
    "values": Array<PaymentLinkProductOptionValue>;
};
/**
 * Shape $ (Value): {@link PaymentLinkProductOptionValue}. A product option value used by an
 * available payment link variant.
 */
export type PaymentLinkProductOptionValue = {
    /** Shape $ (Value): string. ID of the product option value. */
    "option_value_id": string;
    /** Shape $ (Value): string. Product option value shown to the buyer, such as M or Blue. */
    "value": string;
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
    "request_id": string;
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
    /**
     * Shape $ (Value): integer string. Persisted version of this resource's owned state. Expanded
     * resources and external observations can change independently. Use an integer string (decimal
     * digits), not a floating-point number. Format: uint64. minimum: 1.
     */
    "version": `${bigint}`;
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
    "request_id": string;
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
    "request_id": string;
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
    "request_id": string;
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
    "request_id": string;
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
