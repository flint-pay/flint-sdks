import type { MoneyValue, MoneyValueInput } from './types-39.js';
import type { OrderLineItemTax, OrderLineItemTaxRequestInput } from './types-41.js';
import type { ProductPriceRange } from './types-50.js';
import type { PaymentLink, PaymentLinkCustomField } from './types-45.js';
import type { ResponseMeta, ResolvePaymentLinkRequestInput } from './types-54.js';
import type { Image, ImageAttachment } from './types-28.js';
import type { SubscriptionIntervalOption } from './types-62.js';
import type {
    CheckoutBuyerFields,
    CheckoutCustomTextConfig,
    CheckoutPaymentConfig,
    CheckoutPromotionConfig,
    CardDetails
} from './types-5.js';
import type { CheckoutRedirects, CheckoutTaxConfig, CheckoutTipConfig } from './types-6.js';
import type { ExpandedSubscriptionPlanSummary, ExpandedCustomerSummary } from './types-24.js';
import type { InventoryRoutingSource } from './types-30.js';
import type { LegalSettings } from './types-35.js';
import type { MerchantWebhookEnvelope, MetadataMap } from './types-38.js';
import type { PartnerWebhookEnvelope } from './types-44.js';
import type { ThemeConfig } from './types-65.js';
import type { InputValue } from '../runtime.js';
import type { CreatePaymentLinkRequestInput } from './types-11.js';
import type { UpdatePaymentLinkRequestInput } from './types-67.js';
/**
 * A custom field in a payment link update. Include its ID to change an existing field, or omit the
 * ID to add a new one.
 */
export type PaymentLinkCustomFieldPatchRequest = {
    /**
     * What kind of answer the field collects. Value enum: "text", "dropdown", "checkbox",
     * "textarea".
     */
    "custom_field_type": "text" | "dropdown" | "checkbox" | "textarea" | (string & {});
    /**
     * Unique custom field key, without leading or trailing whitespace. Each answer records it as
     * `custom_field_answers[].key`. minLength: 1. maxLength: 243.
     */
    "key": string;
    /** Question shown to the buyer. minLength: 1. maxLength: 255. */
    "label": string;
    /**
     * Maximum answer length for text and textarea fields, counted in Unicode code points. Defaults
     * to 255 for text and 1000 for textarea when omitted. Format: int32. minimum: 1. maximum:
     * 4096.
     */
    "max_length"?: number;
    /**
     * Dropdown choices. Dropdown fields require at least one option. Options must not have leading
     * or trailing whitespace. [] (Value): string. minLength: 1. maxLength: 4096.
     */
    "options"?: Array<string>;
    /**
     * Stable ID of an existing custom field. Omit it to create a new custom field. minLength: 1.
     * Example: "plcf_01KEZF7C00JBQMP98WBXZA3RHS".
     */
    "payment_link_custom_field_id"?: string;
    /** Hint text shown inside the empty field. minLength: 1. maxLength: 500. */
    "placeholder"?: string;
    /** Display order among the link's custom fields. Lower numbers come first. Format: int32. */
    "position"?: number;
    /** Whether the buyer must answer before paying. */
    "required"?: boolean;
};
/**
 * A custom field in a payment link update. Include its ID to change an existing field, or omit the
 * ID to add a new one.
 */
export type PaymentLinkCustomFieldPatchRequestInput = {
    /**
     * What kind of answer the field collects. Value enum: "text", "dropdown", "checkbox",
     * "textarea".
     */
    "custom_field_type": "text" | "dropdown" | "checkbox" | "textarea";
    /**
     * Unique custom field key, without leading or trailing whitespace. Each answer records it as
     * `custom_field_answers[].key`. minLength: 1. maxLength: 243.
     */
    "key": string;
    /** Question shown to the buyer. minLength: 1. maxLength: 255. */
    "label": string;
    /**
     * Maximum answer length for text and textarea fields, counted in Unicode code points. Defaults
     * to 255 for text and 1000 for textarea when omitted. Format: int32. minimum: 1. maximum:
     * 4096.
     */
    "max_length"?: number;
    /**
     * Dropdown choices. Dropdown fields require at least one option. Options must not have leading
     * or trailing whitespace. [] (Value): string. minLength: 1. maxLength: 4096.
     */
    "options"?: Array<string>;
    /**
     * Stable ID of an existing custom field. Omit it to create a new custom field. minLength: 1.
     * Example: "plcf_01KEZF7C00JBQMP98WBXZA3RHS".
     */
    "payment_link_custom_field_id"?: string;
    /** Hint text shown inside the empty field. minLength: 1. maxLength: 500. */
    "placeholder"?: string;
    /** Display order among the link's custom fields. Lower numbers come first. Format: int32. */
    "position"?: number;
    /** Whether the buyer must answer before paying. */
    "required"?: boolean;
};
/** A custom field you add to a payment link when creating it. */
export type PaymentLinkCustomFieldRequest = {
    /**
     * What kind of answer the field collects. Value enum: "text", "dropdown", "checkbox",
     * "textarea".
     */
    "custom_field_type": "text" | "dropdown" | "checkbox" | "textarea" | (string & {});
    /**
     * Unique custom field key, without leading or trailing whitespace. Each answer records it as
     * `custom_field_answers[].key`. minLength: 1. maxLength: 243.
     */
    "key": string;
    /** Question shown to the buyer. minLength: 1. maxLength: 255. */
    "label": string;
    /**
     * Maximum answer length for text and textarea fields, counted in Unicode code points. Defaults
     * to 255 for text and 1000 for textarea when omitted. Format: int32. minimum: 1. maximum:
     * 4096.
     */
    "max_length"?: number;
    /**
     * Dropdown choices. Dropdown fields require at least one option. Options must not have leading
     * or trailing whitespace. [] (Value): string. minLength: 1. maxLength: 4096.
     */
    "options"?: Array<string>;
    /** Hint text shown inside the empty field. minLength: 1. maxLength: 500. */
    "placeholder"?: string;
    /** Display order among the link's custom fields. Lower numbers come first. Format: int32. */
    "position"?: number;
    /** Whether the buyer must answer before paying. */
    "required"?: boolean;
};
/** A custom field you add to a payment link when creating it. */
export type PaymentLinkCustomFieldRequestInput = {
    /**
     * What kind of answer the field collects. Value enum: "text", "dropdown", "checkbox",
     * "textarea".
     */
    "custom_field_type": "text" | "dropdown" | "checkbox" | "textarea";
    /**
     * Unique custom field key, without leading or trailing whitespace. Each answer records it as
     * `custom_field_answers[].key`. minLength: 1. maxLength: 243.
     */
    "key": string;
    /** Question shown to the buyer. minLength: 1. maxLength: 255. */
    "label": string;
    /**
     * Maximum answer length for text and textarea fields, counted in Unicode code points. Defaults
     * to 255 for text and 1000 for textarea when omitted. Format: int32. minimum: 1. maximum:
     * 4096.
     */
    "max_length"?: number;
    /**
     * Dropdown choices. Dropdown fields require at least one option. Options must not have leading
     * or trailing whitespace. [] (Value): string. minLength: 1. maxLength: 4096.
     */
    "options"?: Array<string>;
    /** Hint text shown inside the empty field. minLength: 1. maxLength: 500. */
    "placeholder"?: string;
    /** Display order among the link's custom fields. Lower numbers come first. Format: int32. */
    "position"?: number;
    /** Whether the buyer must answer before paying. */
    "required"?: boolean;
};
/**
 * Custom text shown on a payment link's checkout, such as the order summary message and shipping
 * address label.
 */
export type PaymentLinkCustomTextConfigInput = {
    /** Message shown near the order summary in checkout. minLength: 1. maxLength: 2048. */
    "order_summary_message"?: string;
    /** Label shown for the shipping address in checkout. minLength: 1. maxLength: 255. */
    "shipping_address_label"?: string;
};
/** Changes to a payment link's custom checkout text. Send null to clear a field. */
export type PaymentLinkCustomTextPatchRequest = {
    /** Send null to clear it. minLength: 1. maxLength: 2048. */
    "order_summary_message"?: string | null;
    /** Send null to clear it. minLength: 1. maxLength: 255. */
    "shipping_address_label"?: string | null;
};
/** Changes to a payment link's custom checkout text. Send null to clear a field. */
export type PaymentLinkCustomTextPatchRequestInput = PaymentLinkCustomTextPatchRequest;
/**
 * Event settings on an event payment link, such as its date, venue, ticket limit, and ticket
 * emails.
 */
export type PaymentLinkEventConfig = {
    /**
     * Whether resolving the link requires `attendee_names`, one name per ticket. Flint copies the
     * names onto the tickets when the order is paid. Defaults to false.
     */
    "collect_attendee_names"?: boolean;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "event_at"?: string;
    /**
     * Most tickets the event sells across all orders. `null` when the event has no ticket limit.
     * On update, send null to remove the limit; a value below the tickets already sold or held by
     * payments in progress fails with `LIMIT_EXCEEDED`. Whole-number quantity; fractional
     * quantities are not supported. Format: int32.
     */
    "max_total_quantity"?: number | null;
    /** Whether Flint emails tickets to buyers after they pay. */
    "send_ticket_emails"?: boolean;
    /**
     * Prefix for ticket numbers, up to 5 characters. It cannot change after the event has issued
     * tickets. maxLength: 5.
     */
    "ticket_prefix"?: string;
    /** IANA time zone of the event venue, used to show `event_at` as venue time. */
    "timezone"?: string;
    /** Where the event takes place. maxLength: 500. */
    "venue"?: string;
};
/** Changes to an event payment link's settings. Send null on a nullable field to clear it. */
export type PaymentLinkEventConfigPatchRequest = {
    /**
     * Whether resolving the link requires `attendee_names`, one name per ticket. Flint copies the
     * names onto the tickets when the order is paid. Defaults to false.
     */
    "collect_attendee_names"?: boolean;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z". */
    "event_at"?: string;
    /**
     * Most tickets the event sells across all orders. `null` when the event has no ticket limit.
     * On update, send null to remove the limit; a value below the tickets already sold or held by
     * payments in progress fails with `LIMIT_EXCEEDED`. Whole-number quantity; fractional
     * quantities are not supported. Format: int32.
     */
    "max_total_quantity"?: number | null;
    /** Whether Flint emails tickets to buyers after they pay. */
    "send_ticket_emails"?: boolean;
    /**
     * Prefix for ticket numbers, up to 5 characters. It cannot change after the event has issued
     * tickets. Send null to clear it. minLength: 1. maxLength: 5.
     */
    "ticket_prefix"?: string | null;
    /** IANA time zone of the event venue, used to show `event_at` as venue time. minLength: 1. */
    "timezone"?: string;
    /** Send null to clear it. minLength: 1. maxLength: 500. */
    "venue"?: string | null;
};
/** Changes to an event payment link's settings. Send null on a nullable field to clear it. */
export type PaymentLinkEventConfigPatchRequestInput = {
    /**
     * Whether resolving the link requires `attendee_names`, one name per ticket. Flint copies the
     * names onto the tickets when the order is paid. Defaults to false.
     */
    "collect_attendee_names"?: boolean;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z". */
    "event_at"?: string | globalThis.Date;
    /**
     * Most tickets the event sells across all orders. `null` when the event has no ticket limit.
     * On update, send null to remove the limit; a value below the tickets already sold or held by
     * payments in progress fails with `LIMIT_EXCEEDED`. Whole-number quantity; fractional
     * quantities are not supported. Format: int32.
     */
    "max_total_quantity"?: number | null;
    /** Whether Flint emails tickets to buyers after they pay. */
    "send_ticket_emails"?: boolean;
    /**
     * Prefix for ticket numbers, up to 5 characters. It cannot change after the event has issued
     * tickets. Send null to clear it. minLength: 1. maxLength: 5.
     */
    "ticket_prefix"?: string | null;
    /** IANA time zone of the event venue, used to show `event_at` as venue time. minLength: 1. */
    "timezone"?: string;
    /** Send null to clear it. minLength: 1. maxLength: 500. */
    "venue"?: string | null;
};
/** Event settings you supply when creating an event payment link. */
export type PaymentLinkEventConfigRequestInput = {
    /**
     * Whether resolving the link requires `attendee_names`, one name per ticket. Flint copies the
     * names onto the tickets when the order is paid. Defaults to false.
     */
    "collect_attendee_names"?: boolean;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z". */
    "event_at"?: string | globalThis.Date;
    /**
     * Most tickets the event sells across all orders. `null` when the event has no ticket limit.
     * On update, send null to remove the limit; a value below the tickets already sold or held by
     * payments in progress fails with `LIMIT_EXCEEDED`. Whole-number quantity; fractional
     * quantities are not supported. Format: int32.
     */
    "max_total_quantity"?: number | null;
    /** Whether Flint emails tickets to buyers after they pay. */
    "send_ticket_emails"?: boolean;
    /**
     * Prefix for ticket numbers, up to 5 characters. It cannot change after the event has issued
     * tickets. minLength: 1. maxLength: 5.
     */
    "ticket_prefix"?: string;
    /** IANA time zone of the event venue, used to show `event_at` as venue time. minLength: 1. */
    "timezone"?: string;
    /** Where the event takes place. minLength: 1. maxLength: 500. */
    "venue"?: string;
};
/**
 * Legal links on a payment link: contract, refund policy, shipping policy, and terms of service
 * URLs, and whether buyers must accept the terms.
 */
export type PaymentLinkLegalConfigInput = {
    /**
     * An `https://` URL of the contract the buyer agrees to, linked in checkout. minLength: 1.
     * maxLength: 2048.
     */
    "contract_url"?: string;
    /**
     * An `https://` URL of your refund policy, linked in checkout. minLength: 1. maxLength: 2048.
     */
    "refund_policy_url"?: string;
    /** Whether the buyer must accept the terms of service before paying. */
    "require_terms_of_service"?: boolean;
    /**
     * An `https://` URL of your shipping policy, linked in checkout. minLength: 1. maxLength:
     * 2048.
     */
    "shipping_policy_url"?: string;
    /**
     * An `https://` URL of your terms of service, linked in checkout. minLength: 1. maxLength:
     * 2048.
     */
    "terms_of_service_url"?: string;
};
/** Changes to a payment link's legal links and terms setting. Send null on a URL to clear it. */
export type PaymentLinkLegalPatchRequestInput = {
    /** Send null to clear it. minLength: 1. maxLength: 2048. */
    "contract_url"?: string | null;
    /** Send null to clear it. minLength: 1. maxLength: 2048. */
    "refund_policy_url"?: string | null;
    /** Whether the buyer must accept the terms of service before paying. */
    "require_terms_of_service"?: boolean;
    /** Send null to clear it. minLength: 1. maxLength: 2048. */
    "shipping_policy_url"?: string | null;
    /** Send null to clear it. minLength: 1. maxLength: 2048. */
    "terms_of_service_url"?: string | null;
};
/** A line item on a payment link. */
export type PaymentLinkLineItem = ({
    /** Whether the buyer can change the quantity in checkout. */
    "allow_quantity_adjustment"?: boolean;
    /** Whether the buyer sets the unit price. Only `custom_variable` lines allow it. */
    "allow_unit_price_adjustment"?: boolean;
    /**
     * ID of the catalog bundle a `bundle` line sells. Example: "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
    "bundle_id"?: string;
    /**
     * Variant selected when the page opens and used at resolve when the buyer omits a selection.
     * Must be in variant_ids. Omit it to require a buyer selection. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "default_variant_id"?: string;
    /** Description of an ad hoc line item. */
    "description"?: string;
    /**
     * True when the referenced variant or bundle cannot be sold, or no listed variant in
     * variant_ids can be sold in the line currency. Always false on ad hoc line items.
     */
    "is_catalog_item_unavailable": boolean;
    /**
     * Keys the resolve override maps. Stable line item key used in checkout overrides. Must not
     * have leading or trailing whitespace. Assigned as line_item_1, line_item_2, and so on when
     * omitted, skipping numbers already used by explicit keys; retained for an existing line item
     * when omitted on update.
     */
    "key"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "max_quantity"?: number;
    /**
     * Highest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "max_unit_price_money"?: MoneyValue;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "min_quantity"?: number;
    /**
     * Lowest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "min_unit_price_money"?: MoneyValue;
    /** Name of an ad hoc line item. Catalog lines take the catalog name. */
    "name"?: string;
    /**
     * Unique identifier for this payment link line item, prefixed `plli_`. Example:
     * "plli_01KEZF7C004V7GVCCNMYYCBAJS".
     */
    "payment_link_line_item_id": string;
    /**
     * Parent catalog context only. The product that the variants in variant_ids belong to. Present
     * only on buyer choice lines; refused on input. Example: "prod_01KEZF7C00BVSHCNWVH528HB66".
     */
    "product_id"?: string;
    /**
     * Classification configured on a custom line for ACH debit. Null when unclassified or
     * catalog-backed; catalog lines get their product classification when checkout starts. Value
     * enum: "physical", "service", "fee", "digital", "gift_card", null.
     */
    "product_type": "physical" | "service" | "fee" | "digital" | "gift_card" | null | (string & {}) | null;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "quantity": number;
    /**
     * Current catalog name of the referenced variant or bundle, or the product name for
     * variant_ids lines. A variant reads as the product name, plus the variant name when the
     * variant is a named option combination. This is the catalog value at read time, not a stored
     * snapshot: checkout resolves it again when a buyer opens the link. Absent on ad-hoc line
     * items and when the catalog object no longer exists.
     */
    "resolved_name"?: string;
    /**
     * Current lowest and highest catalog unit prices among listed variants that can be sold in the
     * line currency. Computed at read time, not stored. Omitted when no listed variant can be
     * sold. The lowest and highest unit prices across a product's variants.
     */
    "resolved_price_range"?: ProductPriceRange;
    /**
     * Current catalog unit price of the referenced variant or bundle. For a fixed variant this is
     * the base price that applies below the first quantity price break. This is the catalog value
     * at read time, not a stored snapshot: checkout resolves the price again when a buyer opens
     * the link, so the amount a buyer pays can differ. Absent on ad-hoc line items, variant_ids
     * lines, and when the catalog object no longer exists. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "resolved_unit_price_money"?: MoneyValue;
    /**
     * Unit prices offered as one-tap choices when the buyer sets the price. [] (Value): {@link
     * MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code.
     */
    "suggested_unit_price_money_options"?: Array<MoneyValue>;
    /**
     * Tax settings for an ad hoc line item. Catalog lines use the catalog's. A line item's tax
     * category and whether it is taxable.
     */
    "tax"?: OrderLineItemTax;
    /**
     * How the line item is defined. Value enum: "variant", "bundle", "custom_fixed",
     * "custom_variable".
     */
    "type": "variant" | "bundle" | "custom_fixed" | "custom_variable" | (string & {});
    /**
     * Price of one unit of a `custom_fixed` line item. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "unit_price_money"?: MoneyValue;
    /**
     * ID of the catalog variant a `variant` line sells. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id"?: string;
    /**
     * Variant IDs buyers may choose from, in the order offered. Contains 1 to 100 unique, active,
     * sellable variants of one product in one currency. Available only on standard payment links.
     * Mutually exclusive with variant_id, bundle_id, and ad hoc line item fields. minItems: 1.
     * maxItems: 100. uniqueItems: true. [] (Value): string. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     * Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_ids"?: Array<string>;
})
    & ((Exclude<PaymentLinkLineItemVariant & object, readonly unknown[]>)
    | (Exclude<PaymentLinkLineItemBundle & object, readonly unknown[]>)
    | (Exclude<PaymentLinkLineItemCustomFixed & object, readonly unknown[]>)
    | (Exclude<PaymentLinkLineItemCustomVariable & object, readonly unknown[]>)
    | (Record<string, unknown>));
/** A line item on a payment link. */
export type PaymentLinkLineItemBundle = ({
    /** Whether the buyer can change the quantity in checkout. */
    "allow_quantity_adjustment"?: boolean;
    /** Whether the buyer sets the unit price. Only `custom_variable` lines allow it. */
    "allow_unit_price_adjustment"?: boolean;
    /**
     * ID of the catalog bundle a `bundle` line sells. Example: "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
    "bundle_id": string;
    /**
     * Variant selected when the page opens and used at resolve when the buyer omits a selection.
     * Must be in variant_ids. Omit it to require a buyer selection. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "default_variant_id"?: string;
    /** Description of an ad hoc line item. */
    "description"?: string;
    /**
     * True when the referenced variant or bundle cannot be sold, or no listed variant in
     * variant_ids can be sold in the line currency. Always false on ad hoc line items.
     */
    "is_catalog_item_unavailable": boolean;
    /**
     * Keys the resolve override maps. Stable line item key used in checkout overrides. Must not
     * have leading or trailing whitespace. Assigned as line_item_1, line_item_2, and so on when
     * omitted, skipping numbers already used by explicit keys; retained for an existing line item
     * when omitted on update.
     */
    "key"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "max_quantity"?: number;
    /**
     * Highest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "max_unit_price_money"?: MoneyValue;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "min_quantity"?: number;
    /**
     * Lowest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "min_unit_price_money"?: MoneyValue;
    /** Name of an ad hoc line item. Catalog lines take the catalog name. */
    "name"?: string;
    /**
     * Unique identifier for this payment link line item, prefixed `plli_`. Example:
     * "plli_01KEZF7C004V7GVCCNMYYCBAJS".
     */
    "payment_link_line_item_id": string;
    /**
     * Parent catalog context only. The product that the variants in variant_ids belong to. Present
     * only on buyer choice lines; refused on input. Example: "prod_01KEZF7C00BVSHCNWVH528HB66".
     */
    "product_id"?: string;
    /**
     * Classification configured on a custom line for ACH debit. Null when unclassified or
     * catalog-backed; catalog lines get their product classification when checkout starts. Value
     * enum: "physical", "service", "fee", "digital", "gift_card", null.
     */
    "product_type": "physical" | "service" | "fee" | "digital" | "gift_card" | null | (string & {}) | null;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "quantity": number;
    /**
     * Current catalog name of the referenced variant or bundle, or the product name for
     * variant_ids lines. A variant reads as the product name, plus the variant name when the
     * variant is a named option combination. This is the catalog value at read time, not a stored
     * snapshot: checkout resolves it again when a buyer opens the link. Absent on ad-hoc line
     * items and when the catalog object no longer exists.
     */
    "resolved_name"?: string;
    /**
     * Current lowest and highest catalog unit prices among listed variants that can be sold in the
     * line currency. Computed at read time, not stored. Omitted when no listed variant can be
     * sold. The lowest and highest unit prices across a product's variants.
     */
    "resolved_price_range"?: ProductPriceRange;
    /**
     * Current catalog unit price of the referenced variant or bundle. For a fixed variant this is
     * the base price that applies below the first quantity price break. This is the catalog value
     * at read time, not a stored snapshot: checkout resolves the price again when a buyer opens
     * the link, so the amount a buyer pays can differ. Absent on ad-hoc line items, variant_ids
     * lines, and when the catalog object no longer exists. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "resolved_unit_price_money"?: MoneyValue;
    /**
     * Unit prices offered as one-tap choices when the buyer sets the price. [] (Value): {@link
     * MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code.
     */
    "suggested_unit_price_money_options"?: Array<MoneyValue>;
    /**
     * Tax settings for an ad hoc line item. Catalog lines use the catalog's. A line item's tax
     * category and whether it is taxable.
     */
    "tax"?: OrderLineItemTax;
    /** How the line item is defined. Value enum: "bundle". */
    "type": "bundle" | (string & {});
    /**
     * Price of one unit of a `custom_fixed` line item. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "unit_price_money"?: MoneyValue;
    /**
     * ID of the catalog variant a `variant` line sells. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id"?: string;
    /**
     * Variant IDs buyers may choose from, in the order offered. Contains 1 to 100 unique, active,
     * sellable variants of one product in one currency. Available only on standard payment links.
     * Mutually exclusive with variant_id, bundle_id, and ad hoc line item fields. minItems: 1.
     * maxItems: 100. uniqueItems: true. [] (Value): string. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     * Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_ids"?: Array<string>;
})
    & (({
    /** Value enum: "bundle". */
    "type": "bundle" | (string & {});
    /**
     * ID of the catalog bundle a `bundle` line sells. Example: "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
    "bundle_id": string;
}));
/** A line item on a payment link. */
export type PaymentLinkLineItemCustomFixed = ({
    /** Whether the buyer can change the quantity in checkout. */
    "allow_quantity_adjustment"?: boolean;
    /** Whether the buyer sets the unit price. Only `custom_variable` lines allow it. */
    "allow_unit_price_adjustment"?: boolean;
    /**
     * ID of the catalog bundle a `bundle` line sells. Example: "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
    "bundle_id"?: string;
    /**
     * Variant selected when the page opens and used at resolve when the buyer omits a selection.
     * Must be in variant_ids. Omit it to require a buyer selection. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "default_variant_id"?: string;
    /** Description of an ad hoc line item. */
    "description"?: string;
    /**
     * True when the referenced variant or bundle cannot be sold, or no listed variant in
     * variant_ids can be sold in the line currency. Always false on ad hoc line items.
     */
    "is_catalog_item_unavailable": boolean;
    /**
     * Keys the resolve override maps. Stable line item key used in checkout overrides. Must not
     * have leading or trailing whitespace. Assigned as line_item_1, line_item_2, and so on when
     * omitted, skipping numbers already used by explicit keys; retained for an existing line item
     * when omitted on update.
     */
    "key"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "max_quantity"?: number;
    /**
     * Highest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "max_unit_price_money"?: MoneyValue;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "min_quantity"?: number;
    /**
     * Lowest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "min_unit_price_money"?: MoneyValue;
    /** Name of an ad hoc line item. Catalog lines take the catalog name. */
    "name": string;
    /**
     * Unique identifier for this payment link line item, prefixed `plli_`. Example:
     * "plli_01KEZF7C004V7GVCCNMYYCBAJS".
     */
    "payment_link_line_item_id": string;
    /**
     * Parent catalog context only. The product that the variants in variant_ids belong to. Present
     * only on buyer choice lines; refused on input. Example: "prod_01KEZF7C00BVSHCNWVH528HB66".
     */
    "product_id"?: string;
    /**
     * Classification configured on a custom line for ACH debit. Null when unclassified or
     * catalog-backed; catalog lines get their product classification when checkout starts. Value
     * enum: "physical", "service", "fee", "digital", "gift_card", null.
     */
    "product_type": "physical" | "service" | "fee" | "digital" | "gift_card" | null | (string & {}) | null;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "quantity": number;
    /**
     * Current catalog name of the referenced variant or bundle, or the product name for
     * variant_ids lines. A variant reads as the product name, plus the variant name when the
     * variant is a named option combination. This is the catalog value at read time, not a stored
     * snapshot: checkout resolves it again when a buyer opens the link. Absent on ad-hoc line
     * items and when the catalog object no longer exists.
     */
    "resolved_name"?: string;
    /**
     * Current lowest and highest catalog unit prices among listed variants that can be sold in the
     * line currency. Computed at read time, not stored. Omitted when no listed variant can be
     * sold. The lowest and highest unit prices across a product's variants.
     */
    "resolved_price_range"?: ProductPriceRange;
    /**
     * Current catalog unit price of the referenced variant or bundle. For a fixed variant this is
     * the base price that applies below the first quantity price break. This is the catalog value
     * at read time, not a stored snapshot: checkout resolves the price again when a buyer opens
     * the link, so the amount a buyer pays can differ. Absent on ad-hoc line items, variant_ids
     * lines, and when the catalog object no longer exists. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "resolved_unit_price_money"?: MoneyValue;
    /**
     * Unit prices offered as one-tap choices when the buyer sets the price. [] (Value): {@link
     * MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code.
     */
    "suggested_unit_price_money_options"?: Array<MoneyValue>;
    /**
     * Tax settings for an ad hoc line item. Catalog lines use the catalog's. A line item's tax
     * category and whether it is taxable.
     */
    "tax"?: OrderLineItemTax;
    /** How the line item is defined. Value enum: "custom_fixed". */
    "type": "custom_fixed" | (string & {});
    /**
     * Price of one unit of a `custom_fixed` line item. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "unit_price_money": MoneyValue;
    /**
     * ID of the catalog variant a `variant` line sells. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id"?: string;
    /**
     * Variant IDs buyers may choose from, in the order offered. Contains 1 to 100 unique, active,
     * sellable variants of one product in one currency. Available only on standard payment links.
     * Mutually exclusive with variant_id, bundle_id, and ad hoc line item fields. minItems: 1.
     * maxItems: 100. uniqueItems: true. [] (Value): string. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     * Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_ids"?: Array<string>;
})
    & (({
    /** Value enum: false. */
    "allow_unit_price_adjustment"?: boolean;
    /** Value enum: "custom_fixed". */
    "type": "custom_fixed" | (string & {});
    /** Name of an ad hoc line item. Catalog lines take the catalog name. */
    "name": string;
    /**
     * Price of one unit of a `custom_fixed` line item. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "unit_price_money": MoneyValue;
}));
/** A line item on a payment link. */
export type PaymentLinkLineItemCustomVariable = ({
    /** Whether the buyer can change the quantity in checkout. */
    "allow_quantity_adjustment"?: boolean;
    /** Whether the buyer sets the unit price. Only `custom_variable` lines allow it. */
    "allow_unit_price_adjustment": boolean;
    /**
     * ID of the catalog bundle a `bundle` line sells. Example: "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
    "bundle_id"?: string;
    /**
     * Variant selected when the page opens and used at resolve when the buyer omits a selection.
     * Must be in variant_ids. Omit it to require a buyer selection. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "default_variant_id"?: string;
    /** Description of an ad hoc line item. */
    "description"?: string;
    /**
     * True when the referenced variant or bundle cannot be sold, or no listed variant in
     * variant_ids can be sold in the line currency. Always false on ad hoc line items.
     */
    "is_catalog_item_unavailable": boolean;
    /**
     * Keys the resolve override maps. Stable line item key used in checkout overrides. Must not
     * have leading or trailing whitespace. Assigned as line_item_1, line_item_2, and so on when
     * omitted, skipping numbers already used by explicit keys; retained for an existing line item
     * when omitted on update.
     */
    "key"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "max_quantity"?: number;
    /**
     * Highest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "max_unit_price_money"?: MoneyValue;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "min_quantity"?: number;
    /**
     * Lowest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "min_unit_price_money"?: MoneyValue;
    /** Name of an ad hoc line item. Catalog lines take the catalog name. */
    "name": string;
    /**
     * Unique identifier for this payment link line item, prefixed `plli_`. Example:
     * "plli_01KEZF7C004V7GVCCNMYYCBAJS".
     */
    "payment_link_line_item_id": string;
    /**
     * Parent catalog context only. The product that the variants in variant_ids belong to. Present
     * only on buyer choice lines; refused on input. Example: "prod_01KEZF7C00BVSHCNWVH528HB66".
     */
    "product_id"?: string;
    /**
     * Classification configured on a custom line for ACH debit. Null when unclassified or
     * catalog-backed; catalog lines get their product classification when checkout starts. Value
     * enum: "physical", "service", "fee", "digital", "gift_card", null.
     */
    "product_type": "physical" | "service" | "fee" | "digital" | "gift_card" | null | (string & {}) | null;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "quantity": number;
    /**
     * Current catalog name of the referenced variant or bundle, or the product name for
     * variant_ids lines. A variant reads as the product name, plus the variant name when the
     * variant is a named option combination. This is the catalog value at read time, not a stored
     * snapshot: checkout resolves it again when a buyer opens the link. Absent on ad-hoc line
     * items and when the catalog object no longer exists.
     */
    "resolved_name"?: string;
    /**
     * Current lowest and highest catalog unit prices among listed variants that can be sold in the
     * line currency. Computed at read time, not stored. Omitted when no listed variant can be
     * sold. The lowest and highest unit prices across a product's variants.
     */
    "resolved_price_range"?: ProductPriceRange;
    /**
     * Current catalog unit price of the referenced variant or bundle. For a fixed variant this is
     * the base price that applies below the first quantity price break. This is the catalog value
     * at read time, not a stored snapshot: checkout resolves the price again when a buyer opens
     * the link, so the amount a buyer pays can differ. Absent on ad-hoc line items, variant_ids
     * lines, and when the catalog object no longer exists. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "resolved_unit_price_money"?: MoneyValue;
    /**
     * Unit prices offered as one-tap choices when the buyer sets the price. [] (Value): {@link
     * MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code.
     */
    "suggested_unit_price_money_options"?: Array<MoneyValue>;
    /**
     * Tax settings for an ad hoc line item. Catalog lines use the catalog's. A line item's tax
     * category and whether it is taxable.
     */
    "tax"?: OrderLineItemTax;
    /** How the line item is defined. Value enum: "custom_variable". */
    "type": "custom_variable" | (string & {});
    /**
     * Price of one unit of a `custom_fixed` line item. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "unit_price_money"?: MoneyValue;
    /**
     * ID of the catalog variant a `variant` line sells. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id"?: string;
    /**
     * Variant IDs buyers may choose from, in the order offered. Contains 1 to 100 unique, active,
     * sellable variants of one product in one currency. Available only on standard payment links.
     * Mutually exclusive with variant_id, bundle_id, and ad hoc line item fields. minItems: 1.
     * maxItems: 100. uniqueItems: true. [] (Value): string. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     * Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_ids"?: Array<string>;
})
    & (({
    /** Value enum: true. */
    "allow_unit_price_adjustment": boolean;
    /** Value enum: "custom_variable". */
    "type": "custom_variable" | (string & {});
    /** Name of an ad hoc line item. Catalog lines take the catalog name. */
    "name": string;
}));
/** The `bundle` variant of `PaymentLinkLineItemInput`. */
export type PaymentLinkLineItemInputBundle = ({
    /** Whether the buyer can change the quantity in checkout. */
    "allow_quantity_adjustment"?: boolean;
    /** Whether the buyer sets the unit price. Only `custom_variable` lines allow it. */
    "allow_unit_price_adjustment"?: boolean;
    /**
     * ID of the catalog bundle a `bundle` line sells. minLength: 1. Example:
     * "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
    "bundle_id": string;
    /**
     * Variant selected when the page opens and used at resolve when the buyer omits a selection.
     * Must be in variant_ids. Omit it to require a buyer selection. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "default_variant_id"?: string;
    /** Description of an ad hoc line item. minLength: 1. maxLength: 2048. */
    "description"?: string;
    /**
     * Keys the resolve override maps. Stable line item key used in checkout overrides. Must not
     * have leading or trailing whitespace. Assigned as line_item_1, line_item_2, and so on when
     * omitted, skipping numbers already used by explicit keys; retained for an existing line item
     * when omitted on update. minLength: 1. maxLength: 100.
     */
    "key"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "max_quantity"?: number;
    /**
     * Highest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "max_unit_price_money"?: MoneyValue;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "min_quantity"?: number;
    /**
     * Lowest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "min_unit_price_money"?: MoneyValue;
    /**
     * Name of an ad hoc line item. Catalog lines take the catalog name. minLength: 1. maxLength:
     * 255.
     */
    "name"?: string;
    /**
     * Classification of a custom line for ACH debit: physical, digital, service, or fee. Omit to
     * leave it unclassified; no default is inferred from fulfillment. Null is not accepted. Does
     * not change tax, delivery, or inventory. On an order line PATCH, omission preserves the
     * classification. Catalog lines use their product's type and reject this input. Value enum:
     * "physical", "service", "fee", "digital".
     */
    "product_type"?: "physical" | "service" | "fee" | "digital" | (string & {});
    /**
     * Whole-number default quantity; fractional quantities are not supported. Omission uses 1.
     * Must be at least 1 for standard links; event tiers also accept 0. Format: int32. Default: 1.
     */
    "quantity"?: number;
    /**
     * Unit prices offered as one-tap choices when the buyer sets the price. [] (Value): {@link
     * MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code.
     */
    "suggested_unit_price_money_options"?: Array<MoneyValue>;
    /**
     * Tax settings for an ad hoc line item. Catalog lines use the catalog's. A line item's tax
     * category and whether it is taxable.
     */
    "tax"?: OrderLineItemTax;
    /** How the line item is defined. Value enum: "bundle". */
    "type": "bundle" | (string & {});
    /**
     * Price of one unit of a `custom_fixed` line item. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "unit_price_money"?: MoneyValue;
    /**
     * ID of the catalog variant a `variant` line sells. minLength: 1. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id"?: string;
    /**
     * Variant IDs buyers may choose from, in the order offered. Contains 1 to 100 unique, active,
     * sellable variants of one product in one currency. Available only on standard payment links.
     * Mutually exclusive with variant_id, bundle_id, and ad hoc line item fields. minItems: 1.
     * maxItems: 100. uniqueItems: true. [] (Value): string. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_ids"?: Array<string>;
})
    & (({
    /** Value enum: "bundle". */
    "type": "bundle" | (string & {});
    /**
     * ID of the catalog bundle a `bundle` line sells. minLength: 1. Example:
     * "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
    "bundle_id": string;
}));
/** The `bundle` variant of `PaymentLinkLineItemInput`. */
export type PaymentLinkLineItemInputBundleInput = ({
    /** Whether the buyer can change the quantity in checkout. */
    "allow_quantity_adjustment"?: boolean;
    /** Whether the buyer sets the unit price. Only `custom_variable` lines allow it. */
    "allow_unit_price_adjustment"?: boolean;
    /**
     * ID of the catalog bundle a `bundle` line sells. minLength: 1. Example:
     * "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
    "bundle_id": string;
    /**
     * Variant selected when the page opens and used at resolve when the buyer omits a selection.
     * Must be in variant_ids. Omit it to require a buyer selection. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "default_variant_id"?: string;
    /** Description of an ad hoc line item. minLength: 1. maxLength: 2048. */
    "description"?: string;
    /**
     * Keys the resolve override maps. Stable line item key used in checkout overrides. Must not
     * have leading or trailing whitespace. Assigned as line_item_1, line_item_2, and so on when
     * omitted, skipping numbers already used by explicit keys; retained for an existing line item
     * when omitted on update. minLength: 1. maxLength: 100.
     */
    "key"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "max_quantity"?: number;
    /**
     * Highest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "max_unit_price_money"?: MoneyValueInput;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "min_quantity"?: number;
    /**
     * Lowest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "min_unit_price_money"?: MoneyValueInput;
    /**
     * Name of an ad hoc line item. Catalog lines take the catalog name. minLength: 1. maxLength:
     * 255.
     */
    "name"?: string;
    /**
     * Classification of a custom line for ACH debit: physical, digital, service, or fee. Omit to
     * leave it unclassified; no default is inferred from fulfillment. Null is not accepted. Does
     * not change tax, delivery, or inventory. On an order line PATCH, omission preserves the
     * classification. Catalog lines use their product's type and reject this input. Value enum:
     * "physical", "service", "fee", "digital".
     */
    "product_type"?: "physical" | "service" | "fee" | "digital";
    /**
     * Whole-number default quantity; fractional quantities are not supported. Omission uses 1.
     * Must be at least 1 for standard links; event tiers also accept 0. Format: int32. Default: 1.
     */
    "quantity"?: number;
    /**
     * Unit prices offered as one-tap choices when the buyer sets the price. [] (Value): {@link
     * MoneyValueInput}. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "suggested_unit_price_money_options"?: Array<MoneyValueInput>;
    /**
     * Tax settings for an ad hoc line item. Catalog lines use the catalog's. A line item's tax
     * category and whether it is taxable.
     */
    "tax"?: OrderLineItemTaxRequestInput;
    /** How the line item is defined. Value enum: "bundle". */
    "type": "bundle";
    /**
     * Price of one unit of a `custom_fixed` line item. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "unit_price_money"?: MoneyValueInput;
    /**
     * ID of the catalog variant a `variant` line sells. minLength: 1. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id"?: string;
    /**
     * Variant IDs buyers may choose from, in the order offered. Contains 1 to 100 unique, active,
     * sellable variants of one product in one currency. Available only on standard payment links.
     * Mutually exclusive with variant_id, bundle_id, and ad hoc line item fields. minItems: 1.
     * maxItems: 100. uniqueItems: true. [] (Value): string. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_ids"?: Array<string>;
})
    & (({
    /** Value enum: "bundle". */
    "type": ("bundle") & ("bundle");
    /**
     * ID of the catalog bundle a `bundle` line sells. minLength: 1. Example:
     * "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
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
})
    & ({
    "product_type"?: never;
})));
/** The `custom_fixed` variant of `PaymentLinkLineItemInput`. */
export type PaymentLinkLineItemInputCustomFixed = ({
    /** Whether the buyer can change the quantity in checkout. */
    "allow_quantity_adjustment"?: boolean;
    /** Whether the buyer sets the unit price. Only `custom_variable` lines allow it. */
    "allow_unit_price_adjustment"?: boolean;
    /**
     * ID of the catalog bundle a `bundle` line sells. minLength: 1. Example:
     * "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
    "bundle_id"?: string;
    /**
     * Variant selected when the page opens and used at resolve when the buyer omits a selection.
     * Must be in variant_ids. Omit it to require a buyer selection. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "default_variant_id"?: string;
    /** Description of an ad hoc line item. minLength: 1. maxLength: 2048. */
    "description"?: string;
    /**
     * Keys the resolve override maps. Stable line item key used in checkout overrides. Must not
     * have leading or trailing whitespace. Assigned as line_item_1, line_item_2, and so on when
     * omitted, skipping numbers already used by explicit keys; retained for an existing line item
     * when omitted on update. minLength: 1. maxLength: 100.
     */
    "key"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "max_quantity"?: number;
    /**
     * Highest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "max_unit_price_money"?: MoneyValue;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "min_quantity"?: number;
    /**
     * Lowest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "min_unit_price_money"?: MoneyValue;
    /**
     * Name of an ad hoc line item. Catalog lines take the catalog name. minLength: 1. maxLength:
     * 255.
     */
    "name": string;
    /**
     * Classification of a custom line for ACH debit: physical, digital, service, or fee. Omit to
     * leave it unclassified; no default is inferred from fulfillment. Null is not accepted. Does
     * not change tax, delivery, or inventory. On an order line PATCH, omission preserves the
     * classification. Catalog lines use their product's type and reject this input. Value enum:
     * "physical", "service", "fee", "digital".
     */
    "product_type"?: "physical" | "service" | "fee" | "digital" | (string & {});
    /**
     * Whole-number default quantity; fractional quantities are not supported. Omission uses 1.
     * Must be at least 1 for standard links; event tiers also accept 0. Format: int32. Default: 1.
     */
    "quantity"?: number;
    /**
     * Unit prices offered as one-tap choices when the buyer sets the price. [] (Value): {@link
     * MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code.
     */
    "suggested_unit_price_money_options"?: Array<MoneyValue>;
    /**
     * Tax settings for an ad hoc line item. Catalog lines use the catalog's. A line item's tax
     * category and whether it is taxable.
     */
    "tax"?: OrderLineItemTax;
    /** How the line item is defined. Value enum: "custom_fixed". */
    "type": "custom_fixed" | (string & {});
    /**
     * Price of one unit of a `custom_fixed` line item. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "unit_price_money": MoneyValue;
    /**
     * ID of the catalog variant a `variant` line sells. minLength: 1. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id"?: string;
    /**
     * Variant IDs buyers may choose from, in the order offered. Contains 1 to 100 unique, active,
     * sellable variants of one product in one currency. Available only on standard payment links.
     * Mutually exclusive with variant_id, bundle_id, and ad hoc line item fields. minItems: 1.
     * maxItems: 100. uniqueItems: true. [] (Value): string. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_ids"?: Array<string>;
})
    & (({
    /** Value enum: false. */
    "allow_unit_price_adjustment"?: boolean;
    /** Value enum: "custom_fixed". */
    "type": "custom_fixed" | (string & {});
    /**
     * Name of an ad hoc line item. Catalog lines take the catalog name. minLength: 1. maxLength:
     * 255.
     */
    "name": string;
    /**
     * Price of one unit of a `custom_fixed` line item. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "unit_price_money": MoneyValue;
}));
/** The `custom_fixed` variant of `PaymentLinkLineItemInput`. */
export type PaymentLinkLineItemInputCustomFixedInput = ({
    /** Whether the buyer can change the quantity in checkout. */
    "allow_quantity_adjustment"?: boolean;
    /** Whether the buyer sets the unit price. Only `custom_variable` lines allow it. */
    "allow_unit_price_adjustment"?: boolean;
    /**
     * ID of the catalog bundle a `bundle` line sells. minLength: 1. Example:
     * "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
    "bundle_id"?: string;
    /**
     * Variant selected when the page opens and used at resolve when the buyer omits a selection.
     * Must be in variant_ids. Omit it to require a buyer selection. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "default_variant_id"?: string;
    /** Description of an ad hoc line item. minLength: 1. maxLength: 2048. */
    "description"?: string;
    /**
     * Keys the resolve override maps. Stable line item key used in checkout overrides. Must not
     * have leading or trailing whitespace. Assigned as line_item_1, line_item_2, and so on when
     * omitted, skipping numbers already used by explicit keys; retained for an existing line item
     * when omitted on update. minLength: 1. maxLength: 100.
     */
    "key"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "max_quantity"?: number;
    /**
     * Highest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "max_unit_price_money"?: MoneyValueInput;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "min_quantity"?: number;
    /**
     * Lowest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "min_unit_price_money"?: MoneyValueInput;
    /**
     * Name of an ad hoc line item. Catalog lines take the catalog name. minLength: 1. maxLength:
     * 255.
     */
    "name": string;
    /**
     * Classification of a custom line for ACH debit: physical, digital, service, or fee. Omit to
     * leave it unclassified; no default is inferred from fulfillment. Null is not accepted. Does
     * not change tax, delivery, or inventory. On an order line PATCH, omission preserves the
     * classification. Catalog lines use their product's type and reject this input. Value enum:
     * "physical", "service", "fee", "digital".
     */
    "product_type"?: "physical" | "service" | "fee" | "digital";
    /**
     * Whole-number default quantity; fractional quantities are not supported. Omission uses 1.
     * Must be at least 1 for standard links; event tiers also accept 0. Format: int32. Default: 1.
     */
    "quantity"?: number;
    /**
     * Unit prices offered as one-tap choices when the buyer sets the price. [] (Value): {@link
     * MoneyValueInput}. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "suggested_unit_price_money_options"?: Array<MoneyValueInput>;
    /**
     * Tax settings for an ad hoc line item. Catalog lines use the catalog's. A line item's tax
     * category and whether it is taxable.
     */
    "tax"?: OrderLineItemTaxRequestInput;
    /** How the line item is defined. Value enum: "custom_fixed". */
    "type": "custom_fixed";
    /**
     * Price of one unit of a `custom_fixed` line item. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "unit_price_money": MoneyValueInput;
    /**
     * ID of the catalog variant a `variant` line sells. minLength: 1. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id"?: string;
    /**
     * Variant IDs buyers may choose from, in the order offered. Contains 1 to 100 unique, active,
     * sellable variants of one product in one currency. Available only on standard payment links.
     * Mutually exclusive with variant_id, bundle_id, and ad hoc line item fields. minItems: 1.
     * maxItems: 100. uniqueItems: true. [] (Value): string. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_ids"?: Array<string>;
})
    & (({
    /** Value enum: false. */
    "allow_unit_price_adjustment"?: false;
    /** Value enum: "custom_fixed". */
    "type": ("custom_fixed") & ("custom_fixed");
    /**
     * Name of an ad hoc line item. Catalog lines take the catalog name. minLength: 1. maxLength:
     * 255.
     */
    "name": string;
    /**
     * Price of one unit of a `custom_fixed` line item. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
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
/** The `custom_variable` variant of `PaymentLinkLineItemInput`. */
export type PaymentLinkLineItemInputCustomVariable = ({
    /** Whether the buyer can change the quantity in checkout. */
    "allow_quantity_adjustment"?: boolean;
    /** Whether the buyer sets the unit price. Only `custom_variable` lines allow it. */
    "allow_unit_price_adjustment": boolean;
    /**
     * ID of the catalog bundle a `bundle` line sells. minLength: 1. Example:
     * "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
    "bundle_id"?: string;
    /**
     * Variant selected when the page opens and used at resolve when the buyer omits a selection.
     * Must be in variant_ids. Omit it to require a buyer selection. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "default_variant_id"?: string;
    /** Description of an ad hoc line item. minLength: 1. maxLength: 2048. */
    "description"?: string;
    /**
     * Keys the resolve override maps. Stable line item key used in checkout overrides. Must not
     * have leading or trailing whitespace. Assigned as line_item_1, line_item_2, and so on when
     * omitted, skipping numbers already used by explicit keys; retained for an existing line item
     * when omitted on update. minLength: 1. maxLength: 100.
     */
    "key"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "max_quantity"?: number;
    /**
     * Highest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "max_unit_price_money"?: MoneyValue;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "min_quantity"?: number;
    /**
     * Lowest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "min_unit_price_money"?: MoneyValue;
    /**
     * Name of an ad hoc line item. Catalog lines take the catalog name. minLength: 1. maxLength:
     * 255.
     */
    "name": string;
    /**
     * Classification of a custom line for ACH debit: physical, digital, service, or fee. Omit to
     * leave it unclassified; no default is inferred from fulfillment. Null is not accepted. Does
     * not change tax, delivery, or inventory. On an order line PATCH, omission preserves the
     * classification. Catalog lines use their product's type and reject this input. Value enum:
     * "physical", "service", "fee", "digital".
     */
    "product_type"?: "physical" | "service" | "fee" | "digital" | (string & {});
    /**
     * Whole-number default quantity; fractional quantities are not supported. Omission uses 1.
     * Must be at least 1 for standard links; event tiers also accept 0. Format: int32. Default: 1.
     */
    "quantity"?: number;
    /**
     * Unit prices offered as one-tap choices when the buyer sets the price. [] (Value): {@link
     * MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code.
     */
    "suggested_unit_price_money_options"?: Array<MoneyValue>;
    /**
     * Tax settings for an ad hoc line item. Catalog lines use the catalog's. A line item's tax
     * category and whether it is taxable.
     */
    "tax"?: OrderLineItemTax;
    /** How the line item is defined. Value enum: "custom_variable". */
    "type": "custom_variable" | (string & {});
    /**
     * Price of one unit of a `custom_fixed` line item. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "unit_price_money"?: MoneyValue;
    /**
     * ID of the catalog variant a `variant` line sells. minLength: 1. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id"?: string;
    /**
     * Variant IDs buyers may choose from, in the order offered. Contains 1 to 100 unique, active,
     * sellable variants of one product in one currency. Available only on standard payment links.
     * Mutually exclusive with variant_id, bundle_id, and ad hoc line item fields. minItems: 1.
     * maxItems: 100. uniqueItems: true. [] (Value): string. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_ids"?: Array<string>;
})
    & (({
    /** Value enum: true. */
    "allow_unit_price_adjustment": boolean;
    /** Value enum: "custom_variable". */
    "type": "custom_variable" | (string & {});
    /**
     * Name of an ad hoc line item. Catalog lines take the catalog name. minLength: 1. maxLength:
     * 255.
     */
    "name": string;
}));
/** The `custom_variable` variant of `PaymentLinkLineItemInput`. */
export type PaymentLinkLineItemInputCustomVariableInput = ({
    /** Whether the buyer can change the quantity in checkout. */
    "allow_quantity_adjustment"?: boolean;
    /** Whether the buyer sets the unit price. Only `custom_variable` lines allow it. */
    "allow_unit_price_adjustment": boolean;
    /**
     * ID of the catalog bundle a `bundle` line sells. minLength: 1. Example:
     * "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
    "bundle_id"?: string;
    /**
     * Variant selected when the page opens and used at resolve when the buyer omits a selection.
     * Must be in variant_ids. Omit it to require a buyer selection. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "default_variant_id"?: string;
    /** Description of an ad hoc line item. minLength: 1. maxLength: 2048. */
    "description"?: string;
    /**
     * Keys the resolve override maps. Stable line item key used in checkout overrides. Must not
     * have leading or trailing whitespace. Assigned as line_item_1, line_item_2, and so on when
     * omitted, skipping numbers already used by explicit keys; retained for an existing line item
     * when omitted on update. minLength: 1. maxLength: 100.
     */
    "key"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "max_quantity"?: number;
    /**
     * Highest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "max_unit_price_money"?: MoneyValueInput;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "min_quantity"?: number;
    /**
     * Lowest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "min_unit_price_money"?: MoneyValueInput;
    /**
     * Name of an ad hoc line item. Catalog lines take the catalog name. minLength: 1. maxLength:
     * 255.
     */
    "name": string;
    /**
     * Classification of a custom line for ACH debit: physical, digital, service, or fee. Omit to
     * leave it unclassified; no default is inferred from fulfillment. Null is not accepted. Does
     * not change tax, delivery, or inventory. On an order line PATCH, omission preserves the
     * classification. Catalog lines use their product's type and reject this input. Value enum:
     * "physical", "service", "fee", "digital".
     */
    "product_type"?: "physical" | "service" | "fee" | "digital";
    /**
     * Whole-number default quantity; fractional quantities are not supported. Omission uses 1.
     * Must be at least 1 for standard links; event tiers also accept 0. Format: int32. Default: 1.
     */
    "quantity"?: number;
    /**
     * Unit prices offered as one-tap choices when the buyer sets the price. [] (Value): {@link
     * MoneyValueInput}. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "suggested_unit_price_money_options"?: Array<MoneyValueInput>;
    /**
     * Tax settings for an ad hoc line item. Catalog lines use the catalog's. A line item's tax
     * category and whether it is taxable.
     */
    "tax"?: OrderLineItemTaxRequestInput;
    /** How the line item is defined. Value enum: "custom_variable". */
    "type": "custom_variable";
    /**
     * Price of one unit of a `custom_fixed` line item. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "unit_price_money"?: MoneyValueInput;
    /**
     * ID of the catalog variant a `variant` line sells. minLength: 1. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id"?: string;
    /**
     * Variant IDs buyers may choose from, in the order offered. Contains 1 to 100 unique, active,
     * sellable variants of one product in one currency. Available only on standard payment links.
     * Mutually exclusive with variant_id, bundle_id, and ad hoc line item fields. minItems: 1.
     * maxItems: 100. uniqueItems: true. [] (Value): string. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_ids"?: Array<string>;
})
    & (({
    /** Value enum: true. */
    "allow_unit_price_adjustment": true;
    /** Value enum: "custom_variable". */
    "type": ("custom_variable") & ("custom_variable");
    /**
     * Name of an ad hoc line item. Catalog lines take the catalog name. minLength: 1. maxLength:
     * 255.
     */
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
/** The `variant` variant of `PaymentLinkLineItemInput`. */
export type PaymentLinkLineItemInputVariant = ({
    /** Whether the buyer can change the quantity in checkout. */
    "allow_quantity_adjustment"?: boolean;
    /** Whether the buyer sets the unit price. Only `custom_variable` lines allow it. */
    "allow_unit_price_adjustment"?: boolean;
    /**
     * ID of the catalog bundle a `bundle` line sells. minLength: 1. Example:
     * "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
    "bundle_id"?: string;
    /**
     * Variant selected when the page opens and used at resolve when the buyer omits a selection.
     * Must be in variant_ids. Omit it to require a buyer selection. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "default_variant_id"?: string;
    /** Description of an ad hoc line item. minLength: 1. maxLength: 2048. */
    "description"?: string;
    /**
     * Keys the resolve override maps. Stable line item key used in checkout overrides. Must not
     * have leading or trailing whitespace. Assigned as line_item_1, line_item_2, and so on when
     * omitted, skipping numbers already used by explicit keys; retained for an existing line item
     * when omitted on update. minLength: 1. maxLength: 100.
     */
    "key"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "max_quantity"?: number;
    /**
     * Highest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "max_unit_price_money"?: MoneyValue;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "min_quantity"?: number;
    /**
     * Lowest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "min_unit_price_money"?: MoneyValue;
    /**
     * Name of an ad hoc line item. Catalog lines take the catalog name. minLength: 1. maxLength:
     * 255.
     */
    "name"?: string;
    /**
     * Classification of a custom line for ACH debit: physical, digital, service, or fee. Omit to
     * leave it unclassified; no default is inferred from fulfillment. Null is not accepted. Does
     * not change tax, delivery, or inventory. On an order line PATCH, omission preserves the
     * classification. Catalog lines use their product's type and reject this input. Value enum:
     * "physical", "service", "fee", "digital".
     */
    "product_type"?: "physical" | "service" | "fee" | "digital" | (string & {});
    /**
     * Whole-number default quantity; fractional quantities are not supported. Omission uses 1.
     * Must be at least 1 for standard links; event tiers also accept 0. Format: int32. Default: 1.
     */
    "quantity"?: number;
    /**
     * Unit prices offered as one-tap choices when the buyer sets the price. [] (Value): {@link
     * MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code.
     */
    "suggested_unit_price_money_options"?: Array<MoneyValue>;
    /**
     * Tax settings for an ad hoc line item. Catalog lines use the catalog's. A line item's tax
     * category and whether it is taxable.
     */
    "tax"?: OrderLineItemTax;
    /** How the line item is defined. Value enum: "variant". */
    "type": "variant" | (string & {});
    /**
     * Price of one unit of a `custom_fixed` line item. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "unit_price_money"?: MoneyValue;
    /**
     * ID of the catalog variant a `variant` line sells. minLength: 1. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id"?: string;
    /**
     * Variant IDs buyers may choose from, in the order offered. Contains 1 to 100 unique, active,
     * sellable variants of one product in one currency. Available only on standard payment links.
     * Mutually exclusive with variant_id, bundle_id, and ad hoc line item fields. minItems: 1.
     * maxItems: 100. uniqueItems: true. [] (Value): string. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_ids"?: Array<string>;
})
    & (({
    /** Value enum: "variant". */
    "type": "variant" | (string & {});
})
    & (({
    /**
     * ID of the catalog variant a `variant` line sells. minLength: 1. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id": string;
})
    | ({
    /**
     * Variant IDs buyers may choose from, in the order offered. Contains 1 to 100 unique, active,
     * sellable variants of one product in one currency. Available only on standard payment links.
     * Mutually exclusive with variant_id, bundle_id, and ad hoc line item fields. minItems: 1.
     * maxItems: 100. uniqueItems: true. [] (Value): string. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_ids": Array<string>;
})
    | (Record<string, unknown>)));
/** The `variant` variant of `PaymentLinkLineItemInput`. */
export type PaymentLinkLineItemInputVariantInput = ({
    /** Whether the buyer can change the quantity in checkout. */
    "allow_quantity_adjustment"?: boolean;
    /** Whether the buyer sets the unit price. Only `custom_variable` lines allow it. */
    "allow_unit_price_adjustment"?: boolean;
    /**
     * ID of the catalog bundle a `bundle` line sells. minLength: 1. Example:
     * "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
    "bundle_id"?: string;
    /**
     * Variant selected when the page opens and used at resolve when the buyer omits a selection.
     * Must be in variant_ids. Omit it to require a buyer selection. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "default_variant_id"?: string;
    /** Description of an ad hoc line item. minLength: 1. maxLength: 2048. */
    "description"?: string;
    /**
     * Keys the resolve override maps. Stable line item key used in checkout overrides. Must not
     * have leading or trailing whitespace. Assigned as line_item_1, line_item_2, and so on when
     * omitted, skipping numbers already used by explicit keys; retained for an existing line item
     * when omitted on update. minLength: 1. maxLength: 100.
     */
    "key"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "max_quantity"?: number;
    /**
     * Highest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "max_unit_price_money"?: MoneyValueInput;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "min_quantity"?: number;
    /**
     * Lowest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "min_unit_price_money"?: MoneyValueInput;
    /**
     * Name of an ad hoc line item. Catalog lines take the catalog name. minLength: 1. maxLength:
     * 255.
     */
    "name"?: string;
    /**
     * Classification of a custom line for ACH debit: physical, digital, service, or fee. Omit to
     * leave it unclassified; no default is inferred from fulfillment. Null is not accepted. Does
     * not change tax, delivery, or inventory. On an order line PATCH, omission preserves the
     * classification. Catalog lines use their product's type and reject this input. Value enum:
     * "physical", "service", "fee", "digital".
     */
    "product_type"?: "physical" | "service" | "fee" | "digital";
    /**
     * Whole-number default quantity; fractional quantities are not supported. Omission uses 1.
     * Must be at least 1 for standard links; event tiers also accept 0. Format: int32. Default: 1.
     */
    "quantity"?: number;
    /**
     * Unit prices offered as one-tap choices when the buyer sets the price. [] (Value): {@link
     * MoneyValueInput}. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "suggested_unit_price_money_options"?: Array<MoneyValueInput>;
    /**
     * Tax settings for an ad hoc line item. Catalog lines use the catalog's. A line item's tax
     * category and whether it is taxable.
     */
    "tax"?: OrderLineItemTaxRequestInput;
    /** How the line item is defined. Value enum: "variant". */
    "type": "variant";
    /**
     * Price of one unit of a `custom_fixed` line item. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "unit_price_money"?: MoneyValueInput;
    /**
     * ID of the catalog variant a `variant` line sells. minLength: 1. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id"?: string;
    /**
     * Variant IDs buyers may choose from, in the order offered. Contains 1 to 100 unique, active,
     * sellable variants of one product in one currency. Available only on standard payment links.
     * Mutually exclusive with variant_id, bundle_id, and ad hoc line item fields. minItems: 1.
     * maxItems: 100. uniqueItems: true. [] (Value): string. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_ids"?: Array<string>;
})
    & (({
    /** Value enum: "variant". */
    "type": ("variant") & ("variant");
})
    & (({
    /**
     * ID of the catalog variant a `variant` line sells. minLength: 1. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id": string;
})
    | ({
    /**
     * Variant IDs buyers may choose from, in the order offered. Contains 1 to 100 unique, active,
     * sellable variants of one product in one currency. Available only on standard payment links.
     * Mutually exclusive with variant_id, bundle_id, and ad hoc line item fields. minItems: 1.
     * maxItems: 100. uniqueItems: true. [] (Value): string. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
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
    "product_type"?: never;
})
    & ({
    "variant_id"?: never;
} | {
    "variant_ids"?: never;
})));
/** The `bundle` variant of `PaymentLinkLineItemPatchInput`. */
export type PaymentLinkLineItemPatchInputBundle = ({
    /** Whether the buyer can change the quantity in checkout. */
    "allow_quantity_adjustment"?: boolean;
    /** Whether the buyer sets the unit price. Only `custom_variable` lines allow it. */
    "allow_unit_price_adjustment"?: boolean;
    /**
     * ID of the catalog bundle a `bundle` line sells. minLength: 1. Example:
     * "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
    "bundle_id": string;
    /**
     * Variant selected when the page opens and used at resolve when the buyer omits a selection.
     * Must be in variant_ids. Omit it to require a buyer selection. Send null to clear it.
     * minLength: 1. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "default_variant_id"?: string | null;
    /** Description of an ad hoc line item. minLength: 1. maxLength: 2048. */
    "description"?: string;
    /**
     * Keys the resolve override maps. Stable line item key used in checkout overrides. Must not
     * have leading or trailing whitespace. Assigned as line_item_1, line_item_2, and so on when
     * omitted, skipping numbers already used by explicit keys; retained for an existing line item
     * when omitted on update. minLength: 1. maxLength: 100.
     */
    "key"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "max_quantity"?: number;
    /**
     * Highest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "max_unit_price_money"?: MoneyValue;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "min_quantity"?: number;
    /**
     * Lowest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "min_unit_price_money"?: MoneyValue;
    /**
     * Name of an ad hoc line item. Catalog lines take the catalog name. minLength: 1. maxLength:
     * 255.
     */
    "name"?: string;
    /**
     * Stable ID of an existing line item. Omit it to create a new line item. minLength: 1.
     * Example: "plli_01KEZF7C004V7GVCCNMYYCBAJS".
     */
    "payment_link_line_item_id"?: string;
    /**
     * Classification of a custom line for ACH debit: physical, digital, service, or fee. Omit to
     * leave it unclassified; no default is inferred from fulfillment. Null is not accepted. Does
     * not change tax, delivery, or inventory. On an order line PATCH, omission preserves the
     * classification. Catalog lines use their product's type and reject this input. Value enum:
     * "physical", "service", "fee", "digital".
     */
    "product_type"?: "physical" | "service" | "fee" | "digital" | (string & {});
    /**
     * Whole-number default quantity; fractional quantities are not supported. Omission uses 1.
     * Must be at least 1 for standard links; event tiers also accept 0. Format: int32. Default: 1.
     */
    "quantity"?: number;
    /**
     * Unit prices offered as one-tap choices when the buyer sets the price. [] (Value): {@link
     * MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code.
     */
    "suggested_unit_price_money_options"?: Array<MoneyValue>;
    /**
     * Tax settings for an ad hoc line item. Catalog lines use the catalog's. A line item's tax
     * category and whether it is taxable.
     */
    "tax"?: OrderLineItemTax;
    /** How the line item is defined. Value enum: "bundle". */
    "type": "bundle" | (string & {});
    /**
     * Price of one unit of a `custom_fixed` line item. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "unit_price_money"?: MoneyValue;
    /**
     * ID of the catalog variant a `variant` line sells. minLength: 1. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id"?: string;
    /**
     * Variant IDs buyers may choose from, in the order offered. Contains 1 to 100 unique, active,
     * sellable variants of one product in one currency. Available only on standard payment links.
     * Mutually exclusive with variant_id, bundle_id, and ad hoc line item fields. minItems: 1.
     * maxItems: 100. uniqueItems: true. [] (Value): string. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_ids"?: Array<string>;
})
    & (({
    /** Value enum: "bundle". */
    "type": "bundle" | (string & {});
    /**
     * ID of the catalog bundle a `bundle` line sells. minLength: 1. Example:
     * "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
    "bundle_id": string;
}));
/** The `bundle` variant of `PaymentLinkLineItemPatchInput`. */
export type PaymentLinkLineItemPatchInputBundleInput = ({
    /** Whether the buyer can change the quantity in checkout. */
    "allow_quantity_adjustment"?: boolean;
    /** Whether the buyer sets the unit price. Only `custom_variable` lines allow it. */
    "allow_unit_price_adjustment"?: boolean;
    /**
     * ID of the catalog bundle a `bundle` line sells. minLength: 1. Example:
     * "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
    "bundle_id": string;
    /**
     * Variant selected when the page opens and used at resolve when the buyer omits a selection.
     * Must be in variant_ids. Omit it to require a buyer selection. Send null to clear it.
     * minLength: 1. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "default_variant_id"?: string | null;
    /** Description of an ad hoc line item. minLength: 1. maxLength: 2048. */
    "description"?: string;
    /**
     * Keys the resolve override maps. Stable line item key used in checkout overrides. Must not
     * have leading or trailing whitespace. Assigned as line_item_1, line_item_2, and so on when
     * omitted, skipping numbers already used by explicit keys; retained for an existing line item
     * when omitted on update. minLength: 1. maxLength: 100.
     */
    "key"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "max_quantity"?: number;
    /**
     * Highest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "max_unit_price_money"?: MoneyValueInput;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "min_quantity"?: number;
    /**
     * Lowest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "min_unit_price_money"?: MoneyValueInput;
    /**
     * Name of an ad hoc line item. Catalog lines take the catalog name. minLength: 1. maxLength:
     * 255.
     */
    "name"?: string;
    /**
     * Stable ID of an existing line item. Omit it to create a new line item. minLength: 1.
     * Example: "plli_01KEZF7C004V7GVCCNMYYCBAJS".
     */
    "payment_link_line_item_id"?: string;
    /**
     * Classification of a custom line for ACH debit: physical, digital, service, or fee. Omit to
     * leave it unclassified; no default is inferred from fulfillment. Null is not accepted. Does
     * not change tax, delivery, or inventory. On an order line PATCH, omission preserves the
     * classification. Catalog lines use their product's type and reject this input. Value enum:
     * "physical", "service", "fee", "digital".
     */
    "product_type"?: "physical" | "service" | "fee" | "digital";
    /**
     * Whole-number default quantity; fractional quantities are not supported. Omission uses 1.
     * Must be at least 1 for standard links; event tiers also accept 0. Format: int32. Default: 1.
     */
    "quantity"?: number;
    /**
     * Unit prices offered as one-tap choices when the buyer sets the price. [] (Value): {@link
     * MoneyValueInput}. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "suggested_unit_price_money_options"?: Array<MoneyValueInput>;
    /**
     * Tax settings for an ad hoc line item. Catalog lines use the catalog's. A line item's tax
     * category and whether it is taxable.
     */
    "tax"?: OrderLineItemTaxRequestInput;
    /** How the line item is defined. Value enum: "bundle". */
    "type": "bundle";
    /**
     * Price of one unit of a `custom_fixed` line item. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "unit_price_money"?: MoneyValueInput;
    /**
     * ID of the catalog variant a `variant` line sells. minLength: 1. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id"?: string;
    /**
     * Variant IDs buyers may choose from, in the order offered. Contains 1 to 100 unique, active,
     * sellable variants of one product in one currency. Available only on standard payment links.
     * Mutually exclusive with variant_id, bundle_id, and ad hoc line item fields. minItems: 1.
     * maxItems: 100. uniqueItems: true. [] (Value): string. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_ids"?: Array<string>;
})
    & (({
    /** Value enum: "bundle". */
    "type": ("bundle") & ("bundle");
    /**
     * ID of the catalog bundle a `bundle` line sells. minLength: 1. Example:
     * "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
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
})
    & ({
    "product_type"?: never;
})));
/** The `custom_fixed` variant of `PaymentLinkLineItemPatchInput`. */
export type PaymentLinkLineItemPatchInputCustomFixed = ({
    /** Whether the buyer can change the quantity in checkout. */
    "allow_quantity_adjustment"?: boolean;
    /** Whether the buyer sets the unit price. Only `custom_variable` lines allow it. */
    "allow_unit_price_adjustment"?: boolean;
    /**
     * ID of the catalog bundle a `bundle` line sells. minLength: 1. Example:
     * "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
    "bundle_id"?: string;
    /**
     * Variant selected when the page opens and used at resolve when the buyer omits a selection.
     * Must be in variant_ids. Omit it to require a buyer selection. Send null to clear it.
     * minLength: 1. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "default_variant_id"?: string | null;
    /** Description of an ad hoc line item. minLength: 1. maxLength: 2048. */
    "description"?: string;
    /**
     * Keys the resolve override maps. Stable line item key used in checkout overrides. Must not
     * have leading or trailing whitespace. Assigned as line_item_1, line_item_2, and so on when
     * omitted, skipping numbers already used by explicit keys; retained for an existing line item
     * when omitted on update. minLength: 1. maxLength: 100.
     */
    "key"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "max_quantity"?: number;
    /**
     * Highest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "max_unit_price_money"?: MoneyValue;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "min_quantity"?: number;
    /**
     * Lowest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "min_unit_price_money"?: MoneyValue;
    /**
     * Name of an ad hoc line item. Catalog lines take the catalog name. minLength: 1. maxLength:
     * 255.
     */
    "name": string;
    /**
     * Stable ID of an existing line item. Omit it to create a new line item. minLength: 1.
     * Example: "plli_01KEZF7C004V7GVCCNMYYCBAJS".
     */
    "payment_link_line_item_id"?: string;
    /**
     * Classification of a custom line for ACH debit: physical, digital, service, or fee. Omit to
     * leave it unclassified; no default is inferred from fulfillment. Null is not accepted. Does
     * not change tax, delivery, or inventory. On an order line PATCH, omission preserves the
     * classification. Catalog lines use their product's type and reject this input. Value enum:
     * "physical", "service", "fee", "digital".
     */
    "product_type"?: "physical" | "service" | "fee" | "digital" | (string & {});
    /**
     * Whole-number default quantity; fractional quantities are not supported. Omission uses 1.
     * Must be at least 1 for standard links; event tiers also accept 0. Format: int32. Default: 1.
     */
    "quantity"?: number;
    /**
     * Unit prices offered as one-tap choices when the buyer sets the price. [] (Value): {@link
     * MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code.
     */
    "suggested_unit_price_money_options"?: Array<MoneyValue>;
    /**
     * Tax settings for an ad hoc line item. Catalog lines use the catalog's. A line item's tax
     * category and whether it is taxable.
     */
    "tax"?: OrderLineItemTax;
    /** How the line item is defined. Value enum: "custom_fixed". */
    "type": "custom_fixed" | (string & {});
    /**
     * Price of one unit of a `custom_fixed` line item. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "unit_price_money": MoneyValue;
    /**
     * ID of the catalog variant a `variant` line sells. minLength: 1. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id"?: string;
    /**
     * Variant IDs buyers may choose from, in the order offered. Contains 1 to 100 unique, active,
     * sellable variants of one product in one currency. Available only on standard payment links.
     * Mutually exclusive with variant_id, bundle_id, and ad hoc line item fields. minItems: 1.
     * maxItems: 100. uniqueItems: true. [] (Value): string. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_ids"?: Array<string>;
})
    & (({
    /** Value enum: false. */
    "allow_unit_price_adjustment"?: boolean;
    /** Value enum: "custom_fixed". */
    "type": "custom_fixed" | (string & {});
    /**
     * Name of an ad hoc line item. Catalog lines take the catalog name. minLength: 1. maxLength:
     * 255.
     */
    "name": string;
    /**
     * Price of one unit of a `custom_fixed` line item. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "unit_price_money": MoneyValue;
}));
/** The `custom_fixed` variant of `PaymentLinkLineItemPatchInput`. */
export type PaymentLinkLineItemPatchInputCustomFixedInput = ({
    /** Whether the buyer can change the quantity in checkout. */
    "allow_quantity_adjustment"?: boolean;
    /** Whether the buyer sets the unit price. Only `custom_variable` lines allow it. */
    "allow_unit_price_adjustment"?: boolean;
    /**
     * ID of the catalog bundle a `bundle` line sells. minLength: 1. Example:
     * "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
    "bundle_id"?: string;
    /**
     * Variant selected when the page opens and used at resolve when the buyer omits a selection.
     * Must be in variant_ids. Omit it to require a buyer selection. Send null to clear it.
     * minLength: 1. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "default_variant_id"?: string | null;
    /** Description of an ad hoc line item. minLength: 1. maxLength: 2048. */
    "description"?: string;
    /**
     * Keys the resolve override maps. Stable line item key used in checkout overrides. Must not
     * have leading or trailing whitespace. Assigned as line_item_1, line_item_2, and so on when
     * omitted, skipping numbers already used by explicit keys; retained for an existing line item
     * when omitted on update. minLength: 1. maxLength: 100.
     */
    "key"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "max_quantity"?: number;
    /**
     * Highest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "max_unit_price_money"?: MoneyValueInput;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "min_quantity"?: number;
    /**
     * Lowest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "min_unit_price_money"?: MoneyValueInput;
    /**
     * Name of an ad hoc line item. Catalog lines take the catalog name. minLength: 1. maxLength:
     * 255.
     */
    "name": string;
    /**
     * Stable ID of an existing line item. Omit it to create a new line item. minLength: 1.
     * Example: "plli_01KEZF7C004V7GVCCNMYYCBAJS".
     */
    "payment_link_line_item_id"?: string;
    /**
     * Classification of a custom line for ACH debit: physical, digital, service, or fee. Omit to
     * leave it unclassified; no default is inferred from fulfillment. Null is not accepted. Does
     * not change tax, delivery, or inventory. On an order line PATCH, omission preserves the
     * classification. Catalog lines use their product's type and reject this input. Value enum:
     * "physical", "service", "fee", "digital".
     */
    "product_type"?: "physical" | "service" | "fee" | "digital";
    /**
     * Whole-number default quantity; fractional quantities are not supported. Omission uses 1.
     * Must be at least 1 for standard links; event tiers also accept 0. Format: int32. Default: 1.
     */
    "quantity"?: number;
    /**
     * Unit prices offered as one-tap choices when the buyer sets the price. [] (Value): {@link
     * MoneyValueInput}. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "suggested_unit_price_money_options"?: Array<MoneyValueInput>;
    /**
     * Tax settings for an ad hoc line item. Catalog lines use the catalog's. A line item's tax
     * category and whether it is taxable.
     */
    "tax"?: OrderLineItemTaxRequestInput;
    /** How the line item is defined. Value enum: "custom_fixed". */
    "type": "custom_fixed";
    /**
     * Price of one unit of a `custom_fixed` line item. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "unit_price_money": MoneyValueInput;
    /**
     * ID of the catalog variant a `variant` line sells. minLength: 1. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id"?: string;
    /**
     * Variant IDs buyers may choose from, in the order offered. Contains 1 to 100 unique, active,
     * sellable variants of one product in one currency. Available only on standard payment links.
     * Mutually exclusive with variant_id, bundle_id, and ad hoc line item fields. minItems: 1.
     * maxItems: 100. uniqueItems: true. [] (Value): string. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_ids"?: Array<string>;
})
    & (({
    /** Value enum: false. */
    "allow_unit_price_adjustment"?: false;
    /** Value enum: "custom_fixed". */
    "type": ("custom_fixed") & ("custom_fixed");
    /**
     * Name of an ad hoc line item. Catalog lines take the catalog name. minLength: 1. maxLength:
     * 255.
     */
    "name": string;
    /**
     * Price of one unit of a `custom_fixed` line item. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
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
/** The `custom_variable` variant of `PaymentLinkLineItemPatchInput`. */
export type PaymentLinkLineItemPatchInputCustomVariable = ({
    /** Whether the buyer can change the quantity in checkout. */
    "allow_quantity_adjustment"?: boolean;
    /** Whether the buyer sets the unit price. Only `custom_variable` lines allow it. */
    "allow_unit_price_adjustment": boolean;
    /**
     * ID of the catalog bundle a `bundle` line sells. minLength: 1. Example:
     * "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
    "bundle_id"?: string;
    /**
     * Variant selected when the page opens and used at resolve when the buyer omits a selection.
     * Must be in variant_ids. Omit it to require a buyer selection. Send null to clear it.
     * minLength: 1. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "default_variant_id"?: string | null;
    /** Description of an ad hoc line item. minLength: 1. maxLength: 2048. */
    "description"?: string;
    /**
     * Keys the resolve override maps. Stable line item key used in checkout overrides. Must not
     * have leading or trailing whitespace. Assigned as line_item_1, line_item_2, and so on when
     * omitted, skipping numbers already used by explicit keys; retained for an existing line item
     * when omitted on update. minLength: 1. maxLength: 100.
     */
    "key"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "max_quantity"?: number;
    /**
     * Highest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "max_unit_price_money"?: MoneyValue;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "min_quantity"?: number;
    /**
     * Lowest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "min_unit_price_money"?: MoneyValue;
    /**
     * Name of an ad hoc line item. Catalog lines take the catalog name. minLength: 1. maxLength:
     * 255.
     */
    "name": string;
    /**
     * Stable ID of an existing line item. Omit it to create a new line item. minLength: 1.
     * Example: "plli_01KEZF7C004V7GVCCNMYYCBAJS".
     */
    "payment_link_line_item_id"?: string;
    /**
     * Classification of a custom line for ACH debit: physical, digital, service, or fee. Omit to
     * leave it unclassified; no default is inferred from fulfillment. Null is not accepted. Does
     * not change tax, delivery, or inventory. On an order line PATCH, omission preserves the
     * classification. Catalog lines use their product's type and reject this input. Value enum:
     * "physical", "service", "fee", "digital".
     */
    "product_type"?: "physical" | "service" | "fee" | "digital" | (string & {});
    /**
     * Whole-number default quantity; fractional quantities are not supported. Omission uses 1.
     * Must be at least 1 for standard links; event tiers also accept 0. Format: int32. Default: 1.
     */
    "quantity"?: number;
    /**
     * Unit prices offered as one-tap choices when the buyer sets the price. [] (Value): {@link
     * MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code.
     */
    "suggested_unit_price_money_options"?: Array<MoneyValue>;
    /**
     * Tax settings for an ad hoc line item. Catalog lines use the catalog's. A line item's tax
     * category and whether it is taxable.
     */
    "tax"?: OrderLineItemTax;
    /** How the line item is defined. Value enum: "custom_variable". */
    "type": "custom_variable" | (string & {});
    /**
     * Price of one unit of a `custom_fixed` line item. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "unit_price_money"?: MoneyValue;
    /**
     * ID of the catalog variant a `variant` line sells. minLength: 1. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id"?: string;
    /**
     * Variant IDs buyers may choose from, in the order offered. Contains 1 to 100 unique, active,
     * sellable variants of one product in one currency. Available only on standard payment links.
     * Mutually exclusive with variant_id, bundle_id, and ad hoc line item fields. minItems: 1.
     * maxItems: 100. uniqueItems: true. [] (Value): string. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_ids"?: Array<string>;
})
    & (({
    /** Value enum: true. */
    "allow_unit_price_adjustment": boolean;
    /** Value enum: "custom_variable". */
    "type": "custom_variable" | (string & {});
    /**
     * Name of an ad hoc line item. Catalog lines take the catalog name. minLength: 1. maxLength:
     * 255.
     */
    "name": string;
}));
/** The `custom_variable` variant of `PaymentLinkLineItemPatchInput`. */
export type PaymentLinkLineItemPatchInputCustomVariableInput = ({
    /** Whether the buyer can change the quantity in checkout. */
    "allow_quantity_adjustment"?: boolean;
    /** Whether the buyer sets the unit price. Only `custom_variable` lines allow it. */
    "allow_unit_price_adjustment": boolean;
    /**
     * ID of the catalog bundle a `bundle` line sells. minLength: 1. Example:
     * "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
    "bundle_id"?: string;
    /**
     * Variant selected when the page opens and used at resolve when the buyer omits a selection.
     * Must be in variant_ids. Omit it to require a buyer selection. Send null to clear it.
     * minLength: 1. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "default_variant_id"?: string | null;
    /** Description of an ad hoc line item. minLength: 1. maxLength: 2048. */
    "description"?: string;
    /**
     * Keys the resolve override maps. Stable line item key used in checkout overrides. Must not
     * have leading or trailing whitespace. Assigned as line_item_1, line_item_2, and so on when
     * omitted, skipping numbers already used by explicit keys; retained for an existing line item
     * when omitted on update. minLength: 1. maxLength: 100.
     */
    "key"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "max_quantity"?: number;
    /**
     * Highest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "max_unit_price_money"?: MoneyValueInput;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "min_quantity"?: number;
    /**
     * Lowest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "min_unit_price_money"?: MoneyValueInput;
    /**
     * Name of an ad hoc line item. Catalog lines take the catalog name. minLength: 1. maxLength:
     * 255.
     */
    "name": string;
    /**
     * Stable ID of an existing line item. Omit it to create a new line item. minLength: 1.
     * Example: "plli_01KEZF7C004V7GVCCNMYYCBAJS".
     */
    "payment_link_line_item_id"?: string;
    /**
     * Classification of a custom line for ACH debit: physical, digital, service, or fee. Omit to
     * leave it unclassified; no default is inferred from fulfillment. Null is not accepted. Does
     * not change tax, delivery, or inventory. On an order line PATCH, omission preserves the
     * classification. Catalog lines use their product's type and reject this input. Value enum:
     * "physical", "service", "fee", "digital".
     */
    "product_type"?: "physical" | "service" | "fee" | "digital";
    /**
     * Whole-number default quantity; fractional quantities are not supported. Omission uses 1.
     * Must be at least 1 for standard links; event tiers also accept 0. Format: int32. Default: 1.
     */
    "quantity"?: number;
    /**
     * Unit prices offered as one-tap choices when the buyer sets the price. [] (Value): {@link
     * MoneyValueInput}. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "suggested_unit_price_money_options"?: Array<MoneyValueInput>;
    /**
     * Tax settings for an ad hoc line item. Catalog lines use the catalog's. A line item's tax
     * category and whether it is taxable.
     */
    "tax"?: OrderLineItemTaxRequestInput;
    /** How the line item is defined. Value enum: "custom_variable". */
    "type": "custom_variable";
    /**
     * Price of one unit of a `custom_fixed` line item. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "unit_price_money"?: MoneyValueInput;
    /**
     * ID of the catalog variant a `variant` line sells. minLength: 1. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id"?: string;
    /**
     * Variant IDs buyers may choose from, in the order offered. Contains 1 to 100 unique, active,
     * sellable variants of one product in one currency. Available only on standard payment links.
     * Mutually exclusive with variant_id, bundle_id, and ad hoc line item fields. minItems: 1.
     * maxItems: 100. uniqueItems: true. [] (Value): string. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_ids"?: Array<string>;
})
    & (({
    /** Value enum: true. */
    "allow_unit_price_adjustment": true;
    /** Value enum: "custom_variable". */
    "type": ("custom_variable") & ("custom_variable");
    /**
     * Name of an ad hoc line item. Catalog lines take the catalog name. minLength: 1. maxLength:
     * 255.
     */
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
/** The `variant` variant of `PaymentLinkLineItemPatchInput`. */
export type PaymentLinkLineItemPatchInputVariant = ({
    /** Whether the buyer can change the quantity in checkout. */
    "allow_quantity_adjustment"?: boolean;
    /** Whether the buyer sets the unit price. Only `custom_variable` lines allow it. */
    "allow_unit_price_adjustment"?: boolean;
    /**
     * ID of the catalog bundle a `bundle` line sells. minLength: 1. Example:
     * "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
    "bundle_id"?: string;
    /**
     * Variant selected when the page opens and used at resolve when the buyer omits a selection.
     * Must be in variant_ids. Omit it to require a buyer selection. Send null to clear it.
     * minLength: 1. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "default_variant_id"?: string | null;
    /** Description of an ad hoc line item. minLength: 1. maxLength: 2048. */
    "description"?: string;
    /**
     * Keys the resolve override maps. Stable line item key used in checkout overrides. Must not
     * have leading or trailing whitespace. Assigned as line_item_1, line_item_2, and so on when
     * omitted, skipping numbers already used by explicit keys; retained for an existing line item
     * when omitted on update. minLength: 1. maxLength: 100.
     */
    "key"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "max_quantity"?: number;
    /**
     * Highest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "max_unit_price_money"?: MoneyValue;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "min_quantity"?: number;
    /**
     * Lowest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "min_unit_price_money"?: MoneyValue;
    /**
     * Name of an ad hoc line item. Catalog lines take the catalog name. minLength: 1. maxLength:
     * 255.
     */
    "name"?: string;
    /**
     * Stable ID of an existing line item. Omit it to create a new line item. minLength: 1.
     * Example: "plli_01KEZF7C004V7GVCCNMYYCBAJS".
     */
    "payment_link_line_item_id"?: string;
    /**
     * Classification of a custom line for ACH debit: physical, digital, service, or fee. Omit to
     * leave it unclassified; no default is inferred from fulfillment. Null is not accepted. Does
     * not change tax, delivery, or inventory. On an order line PATCH, omission preserves the
     * classification. Catalog lines use their product's type and reject this input. Value enum:
     * "physical", "service", "fee", "digital".
     */
    "product_type"?: "physical" | "service" | "fee" | "digital" | (string & {});
    /**
     * Whole-number default quantity; fractional quantities are not supported. Omission uses 1.
     * Must be at least 1 for standard links; event tiers also accept 0. Format: int32. Default: 1.
     */
    "quantity"?: number;
    /**
     * Unit prices offered as one-tap choices when the buyer sets the price. [] (Value): {@link
     * MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code.
     */
    "suggested_unit_price_money_options"?: Array<MoneyValue>;
    /**
     * Tax settings for an ad hoc line item. Catalog lines use the catalog's. A line item's tax
     * category and whether it is taxable.
     */
    "tax"?: OrderLineItemTax;
    /** How the line item is defined. Value enum: "variant". */
    "type": "variant" | (string & {});
    /**
     * Price of one unit of a `custom_fixed` line item. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "unit_price_money"?: MoneyValue;
    /**
     * ID of the catalog variant a `variant` line sells. minLength: 1. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id"?: string;
    /**
     * Variant IDs buyers may choose from, in the order offered. Contains 1 to 100 unique, active,
     * sellable variants of one product in one currency. Available only on standard payment links.
     * Mutually exclusive with variant_id, bundle_id, and ad hoc line item fields. minItems: 1.
     * maxItems: 100. uniqueItems: true. [] (Value): string. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_ids"?: Array<string>;
})
    & (({
    /** Value enum: "variant". */
    "type": "variant" | (string & {});
})
    & (({
    /**
     * ID of the catalog variant a `variant` line sells. minLength: 1. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id": string;
})
    | ({
    /**
     * Variant IDs buyers may choose from, in the order offered. Contains 1 to 100 unique, active,
     * sellable variants of one product in one currency. Available only on standard payment links.
     * Mutually exclusive with variant_id, bundle_id, and ad hoc line item fields. minItems: 1.
     * maxItems: 100. uniqueItems: true. [] (Value): string. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_ids": Array<string>;
})
    | (Record<string, unknown>)));
/** The `variant` variant of `PaymentLinkLineItemPatchInput`. */
export type PaymentLinkLineItemPatchInputVariantInput = ({
    /** Whether the buyer can change the quantity in checkout. */
    "allow_quantity_adjustment"?: boolean;
    /** Whether the buyer sets the unit price. Only `custom_variable` lines allow it. */
    "allow_unit_price_adjustment"?: boolean;
    /**
     * ID of the catalog bundle a `bundle` line sells. minLength: 1. Example:
     * "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
    "bundle_id"?: string;
    /**
     * Variant selected when the page opens and used at resolve when the buyer omits a selection.
     * Must be in variant_ids. Omit it to require a buyer selection. Send null to clear it.
     * minLength: 1. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "default_variant_id"?: string | null;
    /** Description of an ad hoc line item. minLength: 1. maxLength: 2048. */
    "description"?: string;
    /**
     * Keys the resolve override maps. Stable line item key used in checkout overrides. Must not
     * have leading or trailing whitespace. Assigned as line_item_1, line_item_2, and so on when
     * omitted, skipping numbers already used by explicit keys; retained for an existing line item
     * when omitted on update. minLength: 1. maxLength: 100.
     */
    "key"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "max_quantity"?: number;
    /**
     * Highest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "max_unit_price_money"?: MoneyValueInput;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "min_quantity"?: number;
    /**
     * Lowest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "min_unit_price_money"?: MoneyValueInput;
    /**
     * Name of an ad hoc line item. Catalog lines take the catalog name. minLength: 1. maxLength:
     * 255.
     */
    "name"?: string;
    /**
     * Stable ID of an existing line item. Omit it to create a new line item. minLength: 1.
     * Example: "plli_01KEZF7C004V7GVCCNMYYCBAJS".
     */
    "payment_link_line_item_id"?: string;
    /**
     * Classification of a custom line for ACH debit: physical, digital, service, or fee. Omit to
     * leave it unclassified; no default is inferred from fulfillment. Null is not accepted. Does
     * not change tax, delivery, or inventory. On an order line PATCH, omission preserves the
     * classification. Catalog lines use their product's type and reject this input. Value enum:
     * "physical", "service", "fee", "digital".
     */
    "product_type"?: "physical" | "service" | "fee" | "digital";
    /**
     * Whole-number default quantity; fractional quantities are not supported. Omission uses 1.
     * Must be at least 1 for standard links; event tiers also accept 0. Format: int32. Default: 1.
     */
    "quantity"?: number;
    /**
     * Unit prices offered as one-tap choices when the buyer sets the price. [] (Value): {@link
     * MoneyValueInput}. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "suggested_unit_price_money_options"?: Array<MoneyValueInput>;
    /**
     * Tax settings for an ad hoc line item. Catalog lines use the catalog's. A line item's tax
     * category and whether it is taxable.
     */
    "tax"?: OrderLineItemTaxRequestInput;
    /** How the line item is defined. Value enum: "variant". */
    "type": "variant";
    /**
     * Price of one unit of a `custom_fixed` line item. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "unit_price_money"?: MoneyValueInput;
    /**
     * ID of the catalog variant a `variant` line sells. minLength: 1. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id"?: string;
    /**
     * Variant IDs buyers may choose from, in the order offered. Contains 1 to 100 unique, active,
     * sellable variants of one product in one currency. Available only on standard payment links.
     * Mutually exclusive with variant_id, bundle_id, and ad hoc line item fields. minItems: 1.
     * maxItems: 100. uniqueItems: true. [] (Value): string. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_ids"?: Array<string>;
})
    & (({
    /** Value enum: "variant". */
    "type": ("variant") & ("variant");
})
    & (({
    /**
     * ID of the catalog variant a `variant` line sells. minLength: 1. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id": string;
})
    | ({
    /**
     * Variant IDs buyers may choose from, in the order offered. Contains 1 to 100 unique, active,
     * sellable variants of one product in one currency. Available only on standard payment links.
     * Mutually exclusive with variant_id, bundle_id, and ad hoc line item fields. minItems: 1.
     * maxItems: 100. uniqueItems: true. [] (Value): string. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
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
    "product_type"?: never;
})
    & ({
    "variant_id"?: never;
} | {
    "variant_ids"?: never;
})));
/**
 * A line item in a payment link update. Include its ID to change an existing line item, or omit
 * the ID to add a new one.
 */
export type PaymentLinkLineItemPatchRequest = ({
    /** Whether the buyer can change the quantity in checkout. */
    "allow_quantity_adjustment"?: boolean;
    /** Whether the buyer sets the unit price. Only `custom_variable` lines allow it. */
    "allow_unit_price_adjustment"?: boolean;
    /**
     * ID of the catalog bundle a `bundle` line sells. minLength: 1. Example:
     * "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
    "bundle_id"?: string;
    /**
     * Variant selected when the page opens and used at resolve when the buyer omits a selection.
     * Must be in variant_ids. Omit it to require a buyer selection. Send null to clear it.
     * minLength: 1. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "default_variant_id"?: string | null;
    /** Description of an ad hoc line item. minLength: 1. maxLength: 2048. */
    "description"?: string;
    /**
     * Keys the resolve override maps. Stable line item key used in checkout overrides. Must not
     * have leading or trailing whitespace. Assigned as line_item_1, line_item_2, and so on when
     * omitted, skipping numbers already used by explicit keys; retained for an existing line item
     * when omitted on update. minLength: 1. maxLength: 100.
     */
    "key"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "max_quantity"?: number;
    /**
     * Highest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "max_unit_price_money"?: MoneyValue;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "min_quantity"?: number;
    /**
     * Lowest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "min_unit_price_money"?: MoneyValue;
    /**
     * Name of an ad hoc line item. Catalog lines take the catalog name. minLength: 1. maxLength:
     * 255.
     */
    "name"?: string;
    /**
     * Stable ID of an existing line item. Omit it to create a new line item. minLength: 1.
     * Example: "plli_01KEZF7C004V7GVCCNMYYCBAJS".
     */
    "payment_link_line_item_id"?: string;
    /**
     * Classification of a custom line for ACH debit: physical, digital, service, or fee. Omit to
     * leave it unclassified; no default is inferred from fulfillment. Null is not accepted. Does
     * not change tax, delivery, or inventory. On an order line PATCH, omission preserves the
     * classification. Catalog lines use their product's type and reject this input. Value enum:
     * "physical", "service", "fee", "digital".
     */
    "product_type"?: "physical" | "service" | "fee" | "digital" | (string & {});
    /**
     * Whole-number default quantity; fractional quantities are not supported. Omission uses 1.
     * Must be at least 1 for standard links; event tiers also accept 0. Format: int32. Default: 1.
     */
    "quantity"?: number;
    /**
     * Unit prices offered as one-tap choices when the buyer sets the price. [] (Value): {@link
     * MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code.
     */
    "suggested_unit_price_money_options"?: Array<MoneyValue>;
    /**
     * Tax settings for an ad hoc line item. Catalog lines use the catalog's. A line item's tax
     * category and whether it is taxable.
     */
    "tax"?: OrderLineItemTax;
    /**
     * How the line item is defined. Value enum: "variant", "bundle", "custom_fixed",
     * "custom_variable".
     */
    "type": "variant" | "bundle" | "custom_fixed" | "custom_variable" | (string & {});
    /**
     * Price of one unit of a `custom_fixed` line item. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "unit_price_money"?: MoneyValue;
    /**
     * ID of the catalog variant a `variant` line sells. minLength: 1. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id"?: string;
    /**
     * Variant IDs buyers may choose from, in the order offered. Contains 1 to 100 unique, active,
     * sellable variants of one product in one currency. Available only on standard payment links.
     * Mutually exclusive with variant_id, bundle_id, and ad hoc line item fields. minItems: 1.
     * maxItems: 100. uniqueItems: true. [] (Value): string. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_ids"?: Array<string>;
})
    & ((Exclude<PaymentLinkLineItemPatchInputVariant & object, readonly unknown[]>)
    | (Exclude<PaymentLinkLineItemPatchInputBundle & object, readonly unknown[]>)
    | (Exclude<PaymentLinkLineItemPatchInputCustomFixed & object, readonly unknown[]>)
    | (Exclude<PaymentLinkLineItemPatchInputCustomVariable & object, readonly unknown[]>)
    | (Record<string, unknown>));
/**
 * A line item in a payment link update. Include its ID to change an existing line item, or omit
 * the ID to add a new one.
 */
export type PaymentLinkLineItemPatchRequestInput = ({
    /** Whether the buyer can change the quantity in checkout. */
    "allow_quantity_adjustment"?: boolean;
    /** Whether the buyer sets the unit price. Only `custom_variable` lines allow it. */
    "allow_unit_price_adjustment"?: boolean;
    /**
     * ID of the catalog bundle a `bundle` line sells. minLength: 1. Example:
     * "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
    "bundle_id"?: string;
    /**
     * Variant selected when the page opens and used at resolve when the buyer omits a selection.
     * Must be in variant_ids. Omit it to require a buyer selection. Send null to clear it.
     * minLength: 1. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "default_variant_id"?: string | null;
    /** Description of an ad hoc line item. minLength: 1. maxLength: 2048. */
    "description"?: string;
    /**
     * Keys the resolve override maps. Stable line item key used in checkout overrides. Must not
     * have leading or trailing whitespace. Assigned as line_item_1, line_item_2, and so on when
     * omitted, skipping numbers already used by explicit keys; retained for an existing line item
     * when omitted on update. minLength: 1. maxLength: 100.
     */
    "key"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "max_quantity"?: number;
    /**
     * Highest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "max_unit_price_money"?: MoneyValueInput;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "min_quantity"?: number;
    /**
     * Lowest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "min_unit_price_money"?: MoneyValueInput;
    /**
     * Name of an ad hoc line item. Catalog lines take the catalog name. minLength: 1. maxLength:
     * 255.
     */
    "name"?: string;
    /**
     * Stable ID of an existing line item. Omit it to create a new line item. minLength: 1.
     * Example: "plli_01KEZF7C004V7GVCCNMYYCBAJS".
     */
    "payment_link_line_item_id"?: string;
    /**
     * Classification of a custom line for ACH debit: physical, digital, service, or fee. Omit to
     * leave it unclassified; no default is inferred from fulfillment. Null is not accepted. Does
     * not change tax, delivery, or inventory. On an order line PATCH, omission preserves the
     * classification. Catalog lines use their product's type and reject this input. Value enum:
     * "physical", "service", "fee", "digital".
     */
    "product_type"?: "physical" | "service" | "fee" | "digital";
    /**
     * Whole-number default quantity; fractional quantities are not supported. Omission uses 1.
     * Must be at least 1 for standard links; event tiers also accept 0. Format: int32. Default: 1.
     */
    "quantity"?: number;
    /**
     * Unit prices offered as one-tap choices when the buyer sets the price. [] (Value): {@link
     * MoneyValueInput}. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "suggested_unit_price_money_options"?: Array<MoneyValueInput>;
    /**
     * Tax settings for an ad hoc line item. Catalog lines use the catalog's. A line item's tax
     * category and whether it is taxable.
     */
    "tax"?: OrderLineItemTaxRequestInput;
    /**
     * How the line item is defined. Value enum: "variant", "bundle", "custom_fixed",
     * "custom_variable".
     */
    "type": "variant" | "bundle" | "custom_fixed" | "custom_variable";
    /**
     * Price of one unit of a `custom_fixed` line item. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "unit_price_money"?: MoneyValueInput;
    /**
     * ID of the catalog variant a `variant` line sells. minLength: 1. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id"?: string;
    /**
     * Variant IDs buyers may choose from, in the order offered. Contains 1 to 100 unique, active,
     * sellable variants of one product in one currency. Available only on standard payment links.
     * Mutually exclusive with variant_id, bundle_id, and ad hoc line item fields. minItems: 1.
     * maxItems: 100. uniqueItems: true. [] (Value): string. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_ids"?: Array<string>;
})
    & ((Exclude<PaymentLinkLineItemPatchInputVariantInput & object, readonly unknown[]>)
    | (Exclude<PaymentLinkLineItemPatchInputBundleInput & object, readonly unknown[]>)
    | (Exclude<PaymentLinkLineItemPatchInputCustomFixedInput & object, readonly unknown[]>)
    | (Exclude<PaymentLinkLineItemPatchInputCustomVariableInput & object, readonly unknown[]>));
/**
 * A line item you add to a payment link when creating it, from a catalog variant, a bundle, or an
 * ad hoc name and price.
 */
export type PaymentLinkLineItemRequest = ({
    /** Whether the buyer can change the quantity in checkout. */
    "allow_quantity_adjustment"?: boolean;
    /** Whether the buyer sets the unit price. Only `custom_variable` lines allow it. */
    "allow_unit_price_adjustment"?: boolean;
    /**
     * ID of the catalog bundle a `bundle` line sells. minLength: 1. Example:
     * "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
    "bundle_id"?: string;
    /**
     * Variant selected when the page opens and used at resolve when the buyer omits a selection.
     * Must be in variant_ids. Omit it to require a buyer selection. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "default_variant_id"?: string;
    /** Description of an ad hoc line item. minLength: 1. maxLength: 2048. */
    "description"?: string;
    /**
     * Keys the resolve override maps. Stable line item key used in checkout overrides. Must not
     * have leading or trailing whitespace. Assigned as line_item_1, line_item_2, and so on when
     * omitted, skipping numbers already used by explicit keys; retained for an existing line item
     * when omitted on update. minLength: 1. maxLength: 100.
     */
    "key"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "max_quantity"?: number;
    /**
     * Highest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "max_unit_price_money"?: MoneyValue;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "min_quantity"?: number;
    /**
     * Lowest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "min_unit_price_money"?: MoneyValue;
    /**
     * Name of an ad hoc line item. Catalog lines take the catalog name. minLength: 1. maxLength:
     * 255.
     */
    "name"?: string;
    /**
     * Classification of a custom line for ACH debit: physical, digital, service, or fee. Omit to
     * leave it unclassified; no default is inferred from fulfillment. Null is not accepted. Does
     * not change tax, delivery, or inventory. On an order line PATCH, omission preserves the
     * classification. Catalog lines use their product's type and reject this input. Value enum:
     * "physical", "service", "fee", "digital".
     */
    "product_type"?: "physical" | "service" | "fee" | "digital" | (string & {});
    /**
     * Whole-number default quantity; fractional quantities are not supported. Omission uses 1.
     * Must be at least 1 for standard links; event tiers also accept 0. Format: int32. Default: 1.
     */
    "quantity"?: number;
    /**
     * Unit prices offered as one-tap choices when the buyer sets the price. [] (Value): {@link
     * MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code.
     */
    "suggested_unit_price_money_options"?: Array<MoneyValue>;
    /**
     * Tax settings for an ad hoc line item. Catalog lines use the catalog's. A line item's tax
     * category and whether it is taxable.
     */
    "tax"?: OrderLineItemTax;
    /**
     * How the line item is defined. Value enum: "variant", "bundle", "custom_fixed",
     * "custom_variable".
     */
    "type": "variant" | "bundle" | "custom_fixed" | "custom_variable" | (string & {});
    /**
     * Price of one unit of a `custom_fixed` line item. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "unit_price_money"?: MoneyValue;
    /**
     * ID of the catalog variant a `variant` line sells. minLength: 1. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id"?: string;
    /**
     * Variant IDs buyers may choose from, in the order offered. Contains 1 to 100 unique, active,
     * sellable variants of one product in one currency. Available only on standard payment links.
     * Mutually exclusive with variant_id, bundle_id, and ad hoc line item fields. minItems: 1.
     * maxItems: 100. uniqueItems: true. [] (Value): string. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_ids"?: Array<string>;
})
    & ((Exclude<PaymentLinkLineItemInputVariant & object, readonly unknown[]>)
    | (Exclude<PaymentLinkLineItemInputBundle & object, readonly unknown[]>)
    | (Exclude<PaymentLinkLineItemInputCustomFixed & object, readonly unknown[]>)
    | (Exclude<PaymentLinkLineItemInputCustomVariable & object, readonly unknown[]>)
    | (Record<string, unknown>));
/**
 * A line item you add to a payment link when creating it, from a catalog variant, a bundle, or an
 * ad hoc name and price.
 */
export type PaymentLinkLineItemRequestInput = ({
    /** Whether the buyer can change the quantity in checkout. */
    "allow_quantity_adjustment"?: boolean;
    /** Whether the buyer sets the unit price. Only `custom_variable` lines allow it. */
    "allow_unit_price_adjustment"?: boolean;
    /**
     * ID of the catalog bundle a `bundle` line sells. minLength: 1. Example:
     * "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
    "bundle_id"?: string;
    /**
     * Variant selected when the page opens and used at resolve when the buyer omits a selection.
     * Must be in variant_ids. Omit it to require a buyer selection. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "default_variant_id"?: string;
    /** Description of an ad hoc line item. minLength: 1. maxLength: 2048. */
    "description"?: string;
    /**
     * Keys the resolve override maps. Stable line item key used in checkout overrides. Must not
     * have leading or trailing whitespace. Assigned as line_item_1, line_item_2, and so on when
     * omitted, skipping numbers already used by explicit keys; retained for an existing line item
     * when omitted on update. minLength: 1. maxLength: 100.
     */
    "key"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "max_quantity"?: number;
    /**
     * Highest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "max_unit_price_money"?: MoneyValueInput;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "min_quantity"?: number;
    /**
     * Lowest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "min_unit_price_money"?: MoneyValueInput;
    /**
     * Name of an ad hoc line item. Catalog lines take the catalog name. minLength: 1. maxLength:
     * 255.
     */
    "name"?: string;
    /**
     * Classification of a custom line for ACH debit: physical, digital, service, or fee. Omit to
     * leave it unclassified; no default is inferred from fulfillment. Null is not accepted. Does
     * not change tax, delivery, or inventory. On an order line PATCH, omission preserves the
     * classification. Catalog lines use their product's type and reject this input. Value enum:
     * "physical", "service", "fee", "digital".
     */
    "product_type"?: "physical" | "service" | "fee" | "digital";
    /**
     * Whole-number default quantity; fractional quantities are not supported. Omission uses 1.
     * Must be at least 1 for standard links; event tiers also accept 0. Format: int32. Default: 1.
     */
    "quantity"?: number;
    /**
     * Unit prices offered as one-tap choices when the buyer sets the price. [] (Value): {@link
     * MoneyValueInput}. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "suggested_unit_price_money_options"?: Array<MoneyValueInput>;
    /**
     * Tax settings for an ad hoc line item. Catalog lines use the catalog's. A line item's tax
     * category and whether it is taxable.
     */
    "tax"?: OrderLineItemTaxRequestInput;
    /**
     * How the line item is defined. Value enum: "variant", "bundle", "custom_fixed",
     * "custom_variable".
     */
    "type": "variant" | "bundle" | "custom_fixed" | "custom_variable";
    /**
     * Price of one unit of a `custom_fixed` line item. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "unit_price_money"?: MoneyValueInput;
    /**
     * ID of the catalog variant a `variant` line sells. minLength: 1. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id"?: string;
    /**
     * Variant IDs buyers may choose from, in the order offered. Contains 1 to 100 unique, active,
     * sellable variants of one product in one currency. Available only on standard payment links.
     * Mutually exclusive with variant_id, bundle_id, and ad hoc line item fields. minItems: 1.
     * maxItems: 100. uniqueItems: true. [] (Value): string. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_ids"?: Array<string>;
})
    & ((Exclude<PaymentLinkLineItemInputVariantInput & object, readonly unknown[]>)
    | (Exclude<PaymentLinkLineItemInputBundleInput & object, readonly unknown[]>)
    | (Exclude<PaymentLinkLineItemInputCustomFixedInput & object, readonly unknown[]>)
    | (Exclude<PaymentLinkLineItemInputCustomVariableInput & object, readonly unknown[]>));
/** A line item on a payment link. */
export type PaymentLinkLineItemVariant = ({
    /** Whether the buyer can change the quantity in checkout. */
    "allow_quantity_adjustment"?: boolean;
    /** Whether the buyer sets the unit price. Only `custom_variable` lines allow it. */
    "allow_unit_price_adjustment"?: boolean;
    /**
     * ID of the catalog bundle a `bundle` line sells. Example: "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
    "bundle_id"?: string;
    /**
     * Variant selected when the page opens and used at resolve when the buyer omits a selection.
     * Must be in variant_ids. Omit it to require a buyer selection. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "default_variant_id"?: string;
    /** Description of an ad hoc line item. */
    "description"?: string;
    /**
     * True when the referenced variant or bundle cannot be sold, or no listed variant in
     * variant_ids can be sold in the line currency. Always false on ad hoc line items.
     */
    "is_catalog_item_unavailable": boolean;
    /**
     * Keys the resolve override maps. Stable line item key used in checkout overrides. Must not
     * have leading or trailing whitespace. Assigned as line_item_1, line_item_2, and so on when
     * omitted, skipping numbers already used by explicit keys; retained for an existing line item
     * when omitted on update.
     */
    "key"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "max_quantity"?: number;
    /**
     * Highest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "max_unit_price_money"?: MoneyValue;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "min_quantity"?: number;
    /**
     * Lowest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "min_unit_price_money"?: MoneyValue;
    /** Name of an ad hoc line item. Catalog lines take the catalog name. */
    "name"?: string;
    /**
     * Unique identifier for this payment link line item, prefixed `plli_`. Example:
     * "plli_01KEZF7C004V7GVCCNMYYCBAJS".
     */
    "payment_link_line_item_id": string;
    /**
     * Parent catalog context only. The product that the variants in variant_ids belong to. Present
     * only on buyer choice lines; refused on input. Example: "prod_01KEZF7C00BVSHCNWVH528HB66".
     */
    "product_id"?: string;
    /**
     * Classification configured on a custom line for ACH debit. Null when unclassified or
     * catalog-backed; catalog lines get their product classification when checkout starts. Value
     * enum: "physical", "service", "fee", "digital", "gift_card", null.
     */
    "product_type": "physical" | "service" | "fee" | "digital" | "gift_card" | null | (string & {}) | null;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "quantity": number;
    /**
     * Current catalog name of the referenced variant or bundle, or the product name for
     * variant_ids lines. A variant reads as the product name, plus the variant name when the
     * variant is a named option combination. This is the catalog value at read time, not a stored
     * snapshot: checkout resolves it again when a buyer opens the link. Absent on ad-hoc line
     * items and when the catalog object no longer exists.
     */
    "resolved_name"?: string;
    /**
     * Current lowest and highest catalog unit prices among listed variants that can be sold in the
     * line currency. Computed at read time, not stored. Omitted when no listed variant can be
     * sold. The lowest and highest unit prices across a product's variants.
     */
    "resolved_price_range"?: ProductPriceRange;
    /**
     * Current catalog unit price of the referenced variant or bundle. For a fixed variant this is
     * the base price that applies below the first quantity price break. This is the catalog value
     * at read time, not a stored snapshot: checkout resolves the price again when a buyer opens
     * the link, so the amount a buyer pays can differ. Absent on ad-hoc line items, variant_ids
     * lines, and when the catalog object no longer exists. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "resolved_unit_price_money"?: MoneyValue;
    /**
     * Unit prices offered as one-tap choices when the buyer sets the price. [] (Value): {@link
     * MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code.
     */
    "suggested_unit_price_money_options"?: Array<MoneyValue>;
    /**
     * Tax settings for an ad hoc line item. Catalog lines use the catalog's. A line item's tax
     * category and whether it is taxable.
     */
    "tax"?: OrderLineItemTax;
    /** How the line item is defined. Value enum: "variant". */
    "type": "variant" | (string & {});
    /**
     * Price of one unit of a `custom_fixed` line item. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "unit_price_money"?: MoneyValue;
    /**
     * ID of the catalog variant a `variant` line sells. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id"?: string;
    /**
     * Variant IDs buyers may choose from, in the order offered. Contains 1 to 100 unique, active,
     * sellable variants of one product in one currency. Available only on standard payment links.
     * Mutually exclusive with variant_id, bundle_id, and ad hoc line item fields. minItems: 1.
     * maxItems: 100. uniqueItems: true. [] (Value): string. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     * Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_ids"?: Array<string>;
})
    & (({
    /** Value enum: "variant". */
    "type": "variant" | (string & {});
})
    & (({
    /**
     * ID of the catalog variant a `variant` line sells. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id": string;
})
    | ({
    /**
     * Variant IDs buyers may choose from, in the order offered. Contains 1 to 100 unique, active,
     * sellable variants of one product in one currency. Available only on standard payment links.
     * Mutually exclusive with variant_id, bundle_id, and ad hoc line item fields. minItems: 1.
     * maxItems: 100. uniqueItems: true. [] (Value): string. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     * Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_ids": Array<string>;
})
    | (Record<string, unknown>)));
/** A page of `PaymentLink` objects. */
export type PaymentLinkListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * PaymentLink}. A reusable link that opens checkout.
     */
    "data": Array<PaymentLink>;
    /**
     * Additional information about this response. Metadata returned with a response: the
     * `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Opaque token to send as `page_token` to retrieve the next page. Omitted when there is no
     * next page.
     */
    "next_page_token"?: string;
    /**
     * Identifier of this API request, used to correlate logs and support requests. maxLength: 128.
     * pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/**
 * Payment settings on a payment link: the enabled payment options and a note shown with payment.
 */
export type PaymentLinkPaymentConfigInput = {
    /**
     * Payment options for this payment link. Checkout offers only the options that are also
     * enabled in settings.checkout.enabled_payment_options; omit the list to use that setting. []
     * enum: "card", "apple_pay", "google_pay", "affirm", "ach_debit". [] (Value): string. Value
     * enum: "card", "apple_pay", "google_pay", "affirm", "ach_debit".
     */
    "enabled_payment_options"?: Array<"card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit">;
    /** A note shown to the buyer with the payment options. minLength: 1. maxLength: 500. */
    "payment_note"?: string;
};
/** Changes to a payment link's payment settings. Send null on the payment note to clear it. */
export type PaymentLinkPaymentPatchRequest = {
    /**
     * Payment options for this payment link. Checkout offers only the options that are also
     * enabled in settings.checkout.enabled_payment_options; omit the list to use that setting. []
     * enum: "card", "apple_pay", "google_pay", "affirm", "ach_debit". [] (Value): string. Value
     * enum: "card", "apple_pay", "google_pay", "affirm", "ach_debit".
     */
    "enabled_payment_options"?: Array<"card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit" | (string & {})>;
    /** Send null to clear it. minLength: 1. maxLength: 500. */
    "payment_note"?: string | null;
};
/** Changes to a payment link's payment settings. Send null on the payment note to clear it. */
export type PaymentLinkPaymentPatchRequestInput = {
    /**
     * Payment options for this payment link. Checkout offers only the options that are also
     * enabled in settings.checkout.enabled_payment_options; omit the list to use that setting. []
     * enum: "card", "apple_pay", "google_pay", "affirm", "ach_debit". [] (Value): string. Value
     * enum: "card", "apple_pay", "google_pay", "affirm", "ach_debit".
     */
    "enabled_payment_options"?: Array<"card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit">;
    /** Send null to clear it. minLength: 1. maxLength: 500. */
    "payment_note"?: string | null;
};
/**
 * An active product option offered on a payment link, with values used by its available variants.
 */
export type PaymentLinkProductOption = {
    /** Product option name, such as Size or Color. */
    "name": string;
    /** ID of the product option. Example: "opt_01KEZF7C008R5Q9BG9B4B4KQH8". */
    "option_id": string;
    /**
     * Values used by at least one available variant, in product option value position order. []
     * (Value): {@link PaymentLinkProductOptionValue}. A product option value used by an available
     * payment link variant.
     */
    "values": Array<PaymentLinkProductOptionValue>;
};
/** A product option value used by an available payment link variant. */
export type PaymentLinkProductOptionValue = {
    /** ID of the product option value. Example: "optv_01KEZF7C0078SVZ1T7PVRXQK7F". */
    "option_value_id": string;
    /** Product option value shown to the buyer, such as M or Blue. */
    "value": string;
};
/**
 * Changes to a payment link's hosted checkout destinations. Omit a URL to leave it unchanged, or
 * send null to clear it.
 */
export type PaymentLinkRedirectsPatchRequest = {
    /**
     * Where the buyer goes when they leave checkout without paying. The session stays open until
     * it expires. Absolute HTTPS URL; test mode also accepts HTTP loopback URLs. Up to 2,048
     * characters. Send null to clear it. Format: uri. minLength: 1. maxLength: 2048. Example:
     * "https://example.com/receipt".
     */
    "cancel_url"?: string | null;
    /**
     * Where Flint sends a buyer who opens the session after it expires. Without it, the buyer sees
     * Flint's expired-checkout page. Absolute HTTPS URL; test mode also accepts HTTP loopback
     * URLs. Up to 2,048 characters. Send null to clear it. Format: uri. minLength: 1. maxLength:
     * 2048. Example: "https://example.com/receipt".
     */
    "expired_url"?: string | null;
    /**
     * Where the buyer goes after paying. Flint adds checkout_session_id and order_id query
     * parameters, replacing any with those names. The redirect doesn't prove payment: confirm with
     * the order.paid webhook or by reading the session. Absolute HTTPS URL; test mode also accepts
     * HTTP loopback URLs. Up to 2,048 characters. Send null to clear it. Format: uri. minLength:
     * 1. maxLength: 2048. Example: "https://example.com/receipt".
     */
    "success_url"?: string | null;
};
/**
 * Changes to a payment link's hosted checkout destinations. Omit a URL to leave it unchanged, or
 * send null to clear it.
 */
export type PaymentLinkRedirectsPatchRequestInput = PaymentLinkRedirectsPatchRequest;
/** Buyer-editable email prefill for payment-link checkout. It never identifies a customer. */
export type PaymentLinkResolvePrefillRequestInput = {
    /**
     * Email to fill in for the buyer, who can change it. It is not verified, so it never links the
     * purchase to an existing customer. Format: email. minLength: 1. maxLength: 320. Example:
     * "buyer@example.com".
     */
    "email"?: string;
};
/** A response containing `PaymentLink` data. */
export type PaymentLinkResponse = {
    /**
     * Resource, collection, or operation result returned by this request. A reusable link that
     * opens checkout.
     */
    "data": PaymentLink;
    /**
     * Additional information about this response. Metadata returned with a response: the
     * `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Identifier of this API request, used to correlate logs and support requests. maxLength: 128.
     * pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/**
 * Paid-order sales totals for a payment link, computed on request. Paid means the order's
 * collection has completed. Fully and partially refunded orders still count, and paid_totals
 * reports the amount collected before refunds. Each order counts once even if it has multiple
 * checkout sessions.
 */
export type PaymentLinkSalesSummary = {
    /**
     * Tickets for this payment link that are checked in now, counted when the summary is read.
     * Undoing a check-in or voiding a ticket lowers it. 0 for links that have issued no tickets.
     * Format: int32. minimum: 0.
     */
    "checked_in_ticket_count": number;
    /**
     * UTC time at which the summary was computed, at second precision. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "computed_at": string;
    /**
     * Number of orders whose collection has completed, across all currencies, including fully and
     * partially refunded orders. Format: int64.
     */
    "paid_order_count": number;
    /**
     * Gross paid totals in integer minor units, one Money object per currency with paid orders,
     * sorted by currency. Refunds are not subtracted. Empty array when there are no paid orders.
     * [] (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus an
     * ISO 4217 currency code.
     */
    "paid_totals": Array<MoneyValue>;
    /**
     * Refunded totals in integer minor units on the same paid orders as paid_totals. One Money
     * object per currency with paid orders, sorted by currency, including zero when nothing was
     * refunded. Empty array when there are no paid orders. [] (Value): {@link MoneyValue}.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "refunded_totals": Array<MoneyValue>;
};
/**
 * Subscription terms shown before an active plan-backed payment link creates a checkout session.
 */
export type PaymentLinkSubscriptionPreview = {
    /** Value enum: "daily", "weekly", "monthly", "yearly". */
    "billing_interval": "daily" | "weekly" | "monthly" | "yearly" | (string & {});
    /** Number of billing intervals between recurring charges. Format: int32. */
    "billing_interval_count": number;
    /**
     * Billing intervals the plan offers, which the buyer chooses among on the checkout this link
     * opens. The same values as the subscription plan's `billing_interval_options`. maxItems: 12.
     * uniqueItems: true. [] (Value): {@link SubscriptionIntervalOption}. A billing interval, such
     * as every 2 months, that a plan, offer, or subscription lets buyers choose. Prices of lines
     * that ship are per delivery, and each option charges for all deliveries in its period.
     * Without a delivery cadence there is one delivery per period, so every option bills the same
     * line prices once per period. With a delivery cadence, a longer period bills more deliveries
     * of the lines that ship; other lines bill once per period. For a different price per interval
     * with no delivery cadence, create separate plans.
     */
    "billing_interval_options": Array<SubscriptionIntervalOption>;
    /**
     * The term agreed with the buyer, in months, when configured. Flint records it on the
     * subscription and does not stop the buyer from canceling earlier. Format: int32.
     */
    "contract_term_months"?: number;
    /**
     * True when the plan has a line that ships or is delivered, so each renewal adds a shipping or
     * delivery charge chosen at checkout. The amount is not known until the buyer enters an
     * address and chooses a method.
     */
    "delivery_required": boolean;
    /**
     * The fee agreed for canceling before the recorded term ends, when configured. Flint records
     * it on the subscription but never charges it. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code.
     */
    "early_termination_fee_money"?: MoneyValue;
    /**
     * Identified plan lines with buyer quantity permissions and bounds. The checkout freezes the
     * terms when it is created. [] (Value): object. [].allow_quantity_adjustment (Required):
     * boolean. Whether the buyer may adjust this line quantity. [].max_quantity (Required):
     * integer. Maximum buyer quantity, defaulting to 9999. Whole-number quantity; fractional
     * quantities are not supported. Format: int32. minimum: 1. maximum: 9999. [].min_quantity
     * (Required): integer. Minimum buyer quantity, defaulting to 1. Whole-number quantity;
     * fractional quantities are not supported. Format: int32. minimum: 1. maximum: 9999. [].name
     * (Required): string. The captured line name. [].quantity (Required): integer. The line
     * quantity, before the subscription quantity multiplier. Whole-number quantity; fractional
     * quantities are not supported. Format: int32. minimum: 1. maximum: 9999.
     * [].subscription_plan_line_item_id (Optional): string. The plan line whose terms were
     * captured. Absent when an older snapshot did not record its plan line ID. pattern:
     * ^spli_[0-9A-HJKMNP-TV-Z]{26}$. Example: "spli_01KEZF7C00H9FGC2KBRF82H87N".
     * [].unit_price_money (Required): {@link MoneyValue}. The captured unit price. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "line_items": Array<{
        /** Whether the buyer may adjust this line quantity. */
        "allow_quantity_adjustment": boolean;
        /**
         * Maximum buyer quantity, defaulting to 9999. Whole-number quantity; fractional quantities
         * are not supported. Format: int32. minimum: 1. maximum: 9999.
         */
        "max_quantity": number;
        /**
         * Minimum buyer quantity, defaulting to 1. Whole-number quantity; fractional quantities
         * are not supported. Format: int32. minimum: 1. maximum: 9999.
         */
        "min_quantity": number;
        /** The captured line name. */
        "name": string;
        /**
         * The line quantity, before the subscription quantity multiplier. Whole-number quantity;
         * fractional quantities are not supported. Format: int32. minimum: 1. maximum: 9999.
         */
        "quantity": number;
        /**
         * The plan line whose terms were captured. Absent when an older snapshot did not record
         * its plan line ID. pattern: ^spli_[0-9A-HJKMNP-TV-Z]{26}$. Example:
         * "spli_01KEZF7C00H9FGC2KBRF82H87N".
         */
        "subscription_plan_line_item_id"?: string;
        /**
         * The captured unit price. Monetary amount represented as integer minor units plus an ISO
         * 4217 currency code.
         */
        "unit_price_money": MoneyValue;
    }>;
    /**
     * Plan image shown to the buyer, when configured. An image with its URL, size, and alt text.
     */
    "plan_image"?: Image;
    /** Plan name shown to the buyer. */
    "plan_name": string;
    /**
     * Quantities the plan offers, which the buyer chooses among on the checkout this link opens.
     * The same values as the subscription plan's `quantity_options`. maxItems: 10. uniqueItems:
     * true. [] (Value): integer. Format: int32. minimum: 1. maximum: 100.
     */
    "quantity_options": Array<number>;
    /**
     * Recurring total for one billing interval, including line quantities and resolved modifiers.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "recurring_total_money": MoneyValue;
    /**
     * Setup fee added to the first amount due, when configured. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "setup_fee_money"?: MoneyValue;
    /** Number of trial days before the first recurring charge, when configured. Format: int32. */
    "trial_period_days"?: number;
};
/** Theme settings for a payment link's checkout: accent color, primary color, and title. */
export type PaymentLinkThemeConfigInput = {
    /** Accent color of the checkout, such as #1A73E8. minLength: 1. maxLength: 50. */
    "accent_color"?: string;
    /** Primary color of the checkout, such as #1A73E8. minLength: 1. maxLength: 50. */
    "primary_color"?: string;
    /** Title shown in place of the merchant's business name. minLength: 1. maxLength: 255. */
    "title"?: string;
};
/** Changes to a payment link's checkout theme. Send null on a field to clear it. */
export type PaymentLinkThemePatchRequest = {
    /** Send null to clear it. minLength: 1. maxLength: 50. */
    "accent_color"?: string | null;
    /** Send null to clear it. minLength: 1. maxLength: 50. */
    "primary_color"?: string | null;
    /** Send null to clear it. minLength: 1. maxLength: 255. */
    "title"?: string | null;
};
/** Changes to a payment link's checkout theme. Send null on a field to clear it. */
export type PaymentLinkThemePatchRequestInput = PaymentLinkThemePatchRequest;
export type PaymentLinkUpdatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "buyer_fields"?: CheckoutBuyerFields;
            "checkout_session_expires_in_seconds"?: number;
            "completed_count": number;
            "created_at": string;
            "custom_fields"?: Array<PaymentLinkCustomField>;
            "custom_text"?: CheckoutCustomTextConfig;
            "delivery_method_ids": Array<string>;
            "description"?: string;
            "donation_max_amount_money"?: MoneyValue;
            "donation_min_amount_money"?: MoneyValue;
            "donation_suggested_amount_money_options"?: Array<MoneyValue>;
            "event_config"?: PaymentLinkEventConfig;
            "external_reference_id"?: string;
            "image"?: ImageAttachment;
            "inactive_message"?: string;
            "inventory_routing_source"?: InventoryRoutingSource;
            "legal"?: LegalSettings;
            "line_items"?: Array<PaymentLinkLineItem>;
            "max_completions"?: number;
            "merchant_id": string;
            "metadata"?: MetadataMap;
            "name": string;
            "payment_link_id": string;
            "payment_link_type"?: "standard" | "donation" | "event" | (string & {});
            "payments"?: CheckoutPaymentConfig;
            "promotion_config"?: CheckoutPromotionConfig;
            "redirects"?: CheckoutRedirects;
            "sales_end_at"?: string;
            "sales_summary"?: PaymentLinkSalesSummary;
            "status": "active" | "inactive" | (string & {});
            "subscription_plan"?: ((ExpandedSubscriptionPlanSummary) | (null));
            "subscription_plan_id"?: string;
            "tax"?: CheckoutTaxConfig;
            "theme"?: ThemeConfig;
            "tip"?: CheckoutTipConfig;
            "total_quantity_sold": number;
            "updated_at": string;
            "url": string;
            "version": number;
        };
        "previous_attributes"?: Partial<PaymentLink>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "payment_link.updated";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "buyer_fields"?: CheckoutBuyerFields;
            "checkout_session_expires_in_seconds"?: number;
            "completed_count": number;
            "created_at": string;
            "custom_fields"?: Array<PaymentLinkCustomField>;
            "custom_text"?: CheckoutCustomTextConfig;
            "delivery_method_ids": Array<string>;
            "description"?: string;
            "donation_max_amount_money"?: MoneyValue;
            "donation_min_amount_money"?: MoneyValue;
            "donation_suggested_amount_money_options"?: Array<MoneyValue>;
            "event_config"?: PaymentLinkEventConfig;
            "external_reference_id"?: string;
            "image"?: ImageAttachment;
            "inactive_message"?: string;
            "inventory_routing_source"?: InventoryRoutingSource;
            "legal"?: LegalSettings;
            "line_items"?: Array<PaymentLinkLineItem>;
            "max_completions"?: number;
            "merchant_id": string;
            "metadata"?: MetadataMap;
            "name": string;
            "payment_link_id": string;
            "payment_link_type"?: "standard" | "donation" | "event" | (string & {});
            "payments"?: CheckoutPaymentConfig;
            "promotion_config"?: CheckoutPromotionConfig;
            "redirects"?: CheckoutRedirects;
            "sales_end_at"?: string;
            "sales_summary"?: PaymentLinkSalesSummary;
            "status": "active" | "inactive" | (string & {});
            "subscription_plan"?: ((ExpandedSubscriptionPlanSummary) | (null));
            "subscription_plan_id"?: string;
            "tax"?: CheckoutTaxConfig;
            "theme"?: ThemeConfig;
            "tip"?: CheckoutTipConfig;
            "total_quantity_sold": number;
            "updated_at": string;
            "url": string;
            "version": number;
        };
        "previous_attributes"?: Partial<PaymentLink>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "payment_link.updated";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "payment_link.updated";
});
/**
 * The `payment_link.updated` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type PaymentLinkUpdatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.buyer_fields (Optional): {@link CheckoutBuyerFields}. What
     * checkout asks the buyer for. Each field you leave out uses your checkout settings.
     * object.checkout_session_expires_in_seconds (Optional): integer. Seconds each checkout
     * session the link starts stays open, from 60 to 86,400. Omit it to use your checkout
     * settings, or 24 hours. It doesn't end the link; use sales_end_at for that. Format: int64.
     * minimum: 60. maximum: 86400. object.completed_count (Required): integer. Number of paid
     * checkout sessions started from this link. Format: int32. object.created_at (Required):
     * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.custom_fields (Optional): Array of {@link PaymentLinkCustomField}. Questions buyers
     * answer before paying. Answers are recorded on the order and checkout session in
     * `custom_field_answers`. object.custom_fields[] (Value): {@link PaymentLinkCustomField}. A
     * custom field on a payment link that collects an answer from the buyer. object.custom_text
     * (Optional): {@link CheckoutCustomTextConfig}. Custom text for checkouts started from this
     * link. Custom text shown in checkout: an order summary message and a shipping address label.
     * object.delivery_method_ids (Required): Array of string. Delivery methods the link offers.
     * Empty when the link has none, and then its checkouts offer
     * settings.checkout.default_delivery_method_ids when the order has items to deliver.
     * object.delivery_method_ids[] (Value): string. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
     * object.description (Optional): string. Text about what the link sells, returned to buyers
     * when they open it. object.donation_max_amount_money (Optional): {@link MoneyValue}. Largest
     * amount a buyer can give on a donation link. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code. object.donation_min_amount_money (Optional): {@link
     * MoneyValue}. Smallest amount a buyer can give on a donation link. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     * object.donation_suggested_amount_money_options (Optional): Array of {@link MoneyValue}.
     * Amounts a donation link offers as one-tap choices.
     * object.donation_suggested_amount_money_options[] (Value): {@link MoneyValue}. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     * object.event_config (Optional): {@link PaymentLinkEventConfig}. Event details for an `event`
     * link: when and where it takes place and how many tickets it sells. Event settings on an
     * event payment link, such as its date, venue, ticket limit, and ticket emails.
     * object.external_reference_id (Optional): string. Caller-owned identifier for this resource
     * in an external system. maxLength: 255. Example: "warehouse-1842". object.image (Optional):
     * {@link ImageAttachment}. Image shown to buyers with the link. An image attached to a
     * resource, with its display properties and attachment metadata. object.inactive_message
     * (Optional): string. Message to show the buyer when the link is inactive.
     * object.inventory_routing_source (Optional): {@link InventoryRoutingSource}. The inventory
     * location or routing policy that supplies stock for the link's catalog lines. Where an order,
     * payment link, or reservation routes inventory from: a fixed Location, an inventory
     * allocation policy, or one policy revision. object.legal (Optional): {@link LegalSettings}.
     * The terms and policy links checkouts started from this link show the buyer. Legal settings
     * for a checkout: whether buyers must accept terms, and links to the terms, refund policy,
     * shipping policy, and contract. object.line_items (Optional): Array of {@link
     * PaymentLinkLineItem}. What the link sells. object.line_items[] (Value): {@link
     * PaymentLinkLineItem}. A line item on a payment link. object.max_completions (Optional):
     * integer. Most payments the link accepts, counted by `completed_count`. Absent means no
     * limit. Once the limit is reached, resolving the link fails with a request error. It can't be
     * set below `completed_count`. Format: int32. object.merchant_id (Required): string. ID of the
     * merchant this resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     * object.metadata (Optional): {@link MetadataMap}. Stored caller-owned key-value data. See
     * `MetadataInput` for key, value, and size rules. Caller-owned key-value data stored on a
     * resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them. object.name (Required): string. Name of the payment link.
     * object.payment_link_id (Required): string. Unique identifier for this payment link, prefixed
     * `pl_`. Example: "pl_01KEZF7C007WDMA5P9BPZ8J2AM". object.payment_link_type (Optional):
     * string. What kind of link this is. Value enum: "standard", "donation", "event".
     * object.payments (Optional): {@link CheckoutPaymentConfig}. Payment options for checkouts
     * started from this link. Payment settings for a checkout: the enabled payment options and a
     * note shown with payment. object.promotion_config (Optional): {@link
     * CheckoutPromotionConfig}. Whether automatic promotions apply to checkouts started from this
     * link and whether buyers can enter promotion codes. Promotion settings for a checkout:
     * whether automatic promotions apply and whether the buyer can apply promotion codes.
     * object.redirects (Optional): {@link CheckoutRedirects}. Where checkout sessions started from
     * this payment link send the buyer after payment, cancellation, or expiration. Where hosted
     * checkout sends the buyer. Not allowed when surface is headless; use payment_return_url.
     * object.sales_end_at (Optional): string. RFC3339 timestamp after which the link stops
     * starting checkouts and resolve fails with `ACTION_NOT_ALLOWED` and reason `not_offered`.
     * Unset means sales do not end on their own, except that an event link without sales_end_at
     * stops selling at event_config.event_at. A checkout opened before the end can still start
     * payment for up to 15 minutes after it. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.sales_summary (Optional): {@link PaymentLinkSalesSummary}. Present only with
     * expand=sales_summary on GET /v1/payment-links or GET /v1/payment-links/{payment_link_id}.
     * Available to merchant callers, including dashboard sessions and API keys with
     * checkouts.payment_links.read. Uses the same paid-order definition as the merchant sales
     * summary. Paid-order sales totals for a payment link, computed on request. Paid means the
     * order's collection has completed. Fully and partially refunded orders still count, and
     * paid_totals reports the amount collected before refunds. Each order counts once even if it
     * has multiple checkout sessions. object.status (Required): string. Whether the link can start
     * new checkouts. Value enum: "active", "inactive". object.subscription_plan (Optional): {@link
     * ExpandedSubscriptionPlanSummary} or null. Present only when `expand` includes
     * `subscription_plan`; `null` when expanded and there is no related subscription plan.
     * object.subscription_plan.anyOf[1] (Value): {@link ExpandedSubscriptionPlanSummary}. A
     * subscription plan's summary fields, including name, billing interval, currency, and status,
     * returned when the plan is expanded. object.subscription_plan.anyOf[2] (Value): null.
     * object.subscription_plan_id (Optional): string. Example: "plan_01KEZF7C004CY5ZR33XST2AASV".
     * object.tax (Optional): {@link CheckoutTaxConfig}. Tax settings for checkouts started from
     * this link. Whether tax is collected for a checkout session or payment link. object.theme
     * (Optional): {@link ThemeConfig}. The title and colors for checkouts started from this link,
     * over your branding settings. Colors and title applied to a payment link's checkout page.
     * object.tip (Optional): {@link CheckoutTipConfig}. Tip options for checkouts started from
     * this link. Tip settings for a checkout: whether tips are enabled, the percent or fixed
     * amount options, the default tip, and custom tips. object.total_quantity_sold (Required):
     * integer. Whole-number quantity; fractional quantities are not supported. Format: int32.
     * object.updated_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.url (Required): string. URL buyers open to use the link.
     * object.version (Required): integer. Current version of this resource's owned state. Send it
     * as `expected_version` when changing the resource to reject a stale write. Format: int64.
     * previous_attributes (Optional): object. Previous values of changed top-level fields in
     * data.object, at this delivery's API version. Nested changes include the whole previous
     * top-level value. A value is null when the field was absent before the change. Omitted when
     * Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * buyer_fields (Optional): {@link CheckoutBuyerFields}. What checkout asks the buyer for.
         * Each field you leave out uses your checkout settings.
         * checkout_session_expires_in_seconds (Optional): integer. Seconds each checkout session
         * the link starts stays open, from 60 to 86,400. Omit it to use your checkout settings, or
         * 24 hours. It doesn't end the link; use sales_end_at for that. Format: int64. minimum:
         * 60. maximum: 86400. completed_count (Required): integer. Number of paid checkout
         * sessions started from this link. Format: int32. created_at (Required): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". custom_fields (Optional):
         * Array of {@link PaymentLinkCustomField}. Questions buyers answer before paying. Answers
         * are recorded on the order and checkout session in `custom_field_answers`.
         * custom_fields[] (Value): {@link PaymentLinkCustomField}. A custom field on a payment
         * link that collects an answer from the buyer. custom_text (Optional): {@link
         * CheckoutCustomTextConfig}. Custom text for checkouts started from this link. Custom text
         * shown in checkout: an order summary message and a shipping address label.
         * delivery_method_ids (Required): Array of string. Delivery methods the link offers. Empty
         * when the link has none, and then its checkouts offer
         * settings.checkout.default_delivery_method_ids when the order has items to deliver.
         * delivery_method_ids[] (Value): string. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
         * description (Optional): string. Text about what the link sells, returned to buyers when
         * they open it. donation_max_amount_money (Optional): {@link MoneyValue}. Largest amount a
         * buyer can give on a donation link. Monetary amount represented as integer minor units
         * plus an ISO 4217 currency code. donation_min_amount_money (Optional): {@link
         * MoneyValue}. Smallest amount a buyer can give on a donation link. Monetary amount
         * represented as integer minor units plus an ISO 4217 currency code.
         * donation_suggested_amount_money_options (Optional): Array of {@link MoneyValue}. Amounts
         * a donation link offers as one-tap choices. donation_suggested_amount_money_options[]
         * (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus an
         * ISO 4217 currency code. event_config (Optional): {@link PaymentLinkEventConfig}. Event
         * details for an `event` link: when and where it takes place and how many tickets it
         * sells. Event settings on an event payment link, such as its date, venue, ticket limit,
         * and ticket emails. external_reference_id (Optional): string. Caller-owned identifier for
         * this resource in an external system. maxLength: 255. Example: "warehouse-1842". image
         * (Optional): {@link ImageAttachment}. Image shown to buyers with the link. An image
         * attached to a resource, with its display properties and attachment metadata.
         * inactive_message (Optional): string. Message to show the buyer when the link is
         * inactive. inventory_routing_source (Optional): {@link InventoryRoutingSource}. The
         * inventory location or routing policy that supplies stock for the link's catalog lines.
         * Where an order, payment link, or reservation routes inventory from: a fixed Location, an
         * inventory allocation policy, or one policy revision. legal (Optional): {@link
         * LegalSettings}. The terms and policy links checkouts started from this link show the
         * buyer. Legal settings for a checkout: whether buyers must accept terms, and links to the
         * terms, refund policy, shipping policy, and contract. line_items (Optional): Array of
         * {@link PaymentLinkLineItem}. What the link sells. line_items[] (Value): {@link
         * PaymentLinkLineItem}. A line item on a payment link. max_completions (Optional):
         * integer. Most payments the link accepts, counted by `completed_count`. Absent means no
         * limit. Once the limit is reached, resolving the link fails with a request error. It
         * can't be set below `completed_count`. Format: int32. merchant_id (Required): string. ID
         * of the merchant this resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
         * metadata (Optional): {@link MetadataMap}. Stored caller-owned key-value data. See
         * `MetadataInput` for key, value, and size rules. Caller-owned key-value data stored on a
         * resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
         * follow the limits on MetadataInput and MetadataPatchInput; maps written before those
         * limits may not satisfy them. name (Required): string. Name of the payment link.
         * payment_link_id (Required): string. Unique identifier for this payment link, prefixed
         * `pl_`. Example: "pl_01KEZF7C007WDMA5P9BPZ8J2AM". payment_link_type (Optional): string.
         * What kind of link this is. Value enum: "standard", "donation", "event". payments
         * (Optional): {@link CheckoutPaymentConfig}. Payment options for checkouts started from
         * this link. Payment settings for a checkout: the enabled payment options and a note shown
         * with payment. promotion_config (Optional): {@link CheckoutPromotionConfig}. Whether
         * automatic promotions apply to checkouts started from this link and whether buyers can
         * enter promotion codes. Promotion settings for a checkout: whether automatic promotions
         * apply and whether the buyer can apply promotion codes. redirects (Optional): {@link
         * CheckoutRedirects}. Where checkout sessions started from this payment link send the
         * buyer after payment, cancellation, or expiration. Where hosted checkout sends the buyer.
         * Not allowed when surface is headless; use payment_return_url. sales_end_at (Optional):
         * string. RFC3339 timestamp after which the link stops starting checkouts and resolve
         * fails with `ACTION_NOT_ALLOWED` and reason `not_offered`. Unset means sales do not end
         * on their own, except that an event link without sales_end_at stops selling at
         * event_config.event_at. A checkout opened before the end can still start payment for up
         * to 15 minutes after it. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * sales_summary (Optional): {@link PaymentLinkSalesSummary}. Present only with
         * expand=sales_summary on GET /v1/payment-links or GET
         * /v1/payment-links/{payment_link_id}. Available to merchant callers, including dashboard
         * sessions and API keys with checkouts.payment_links.read. Uses the same paid-order
         * definition as the merchant sales summary. Paid-order sales totals for a payment link,
         * computed on request. Paid means the order's collection has completed. Fully and
         * partially refunded orders still count, and paid_totals reports the amount collected
         * before refunds. Each order counts once even if it has multiple checkout sessions. status
         * (Required): string. Whether the link can start new checkouts. Value enum: "active",
         * "inactive". subscription_plan (Optional): {@link ExpandedSubscriptionPlanSummary} or
         * null. Present only when `expand` includes `subscription_plan`; `null` when expanded and
         * there is no related subscription plan. subscription_plan.anyOf[1] (Value): {@link
         * ExpandedSubscriptionPlanSummary}. A subscription plan's summary fields, including name,
         * billing interval, currency, and status, returned when the plan is expanded.
         * subscription_plan.anyOf[2] (Value): null. subscription_plan_id (Optional): string.
         * Example: "plan_01KEZF7C004CY5ZR33XST2AASV". tax (Optional): {@link CheckoutTaxConfig}.
         * Tax settings for checkouts started from this link. Whether tax is collected for a
         * checkout session or payment link. theme (Optional): {@link ThemeConfig}. The title and
         * colors for checkouts started from this link, over your branding settings. Colors and
         * title applied to a payment link's checkout page. tip (Optional): {@link
         * CheckoutTipConfig}. Tip options for checkouts started from this link. Tip settings for a
         * checkout: whether tips are enabled, the percent or fixed amount options, the default
         * tip, and custom tips. total_quantity_sold (Required): integer. Whole-number quantity;
         * fractional quantities are not supported. Format: int32. updated_at (Required): string.
         * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". url (Required):
         * string. URL buyers open to use the link. version (Required): integer. Current version of
         * this resource's owned state. Send it as `expected_version` when changing the resource to
         * reject a stale write. Format: int64.
         */
        "object": {
            /**
             * What checkout asks the buyer for. Each field you leave out uses your checkout
             * settings.
             */
            "buyer_fields"?: CheckoutBuyerFields;
            /**
             * Seconds each checkout session the link starts stays open, from 60 to 86,400. Omit it
             * to use your checkout settings, or 24 hours. It doesn't end the link; use
             * sales_end_at for that. Format: int64. minimum: 60. maximum: 86400.
             */
            "checkout_session_expires_in_seconds"?: number;
            /** Number of paid checkout sessions started from this link. Format: int32. */
            "completed_count": number;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Questions buyers answer before paying. Answers are recorded on the order and
             * checkout session in `custom_field_answers`. [] (Value): {@link
             * PaymentLinkCustomField}. A custom field on a payment link that collects an answer
             * from the buyer.
             */
            "custom_fields"?: Array<PaymentLinkCustomField>;
            /**
             * Custom text for checkouts started from this link. Custom text shown in checkout: an
             * order summary message and a shipping address label.
             */
            "custom_text"?: CheckoutCustomTextConfig;
            /**
             * Delivery methods the link offers. Empty when the link has none, and then its
             * checkouts offer settings.checkout.default_delivery_method_ids when the order has
             * items to deliver. [] (Value): string. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
             */
            "delivery_method_ids": Array<string>;
            /** Text about what the link sells, returned to buyers when they open it. */
            "description"?: string;
            /**
             * Largest amount a buyer can give on a donation link. Monetary amount represented as
             * integer minor units plus an ISO 4217 currency code.
             */
            "donation_max_amount_money"?: MoneyValue;
            /**
             * Smallest amount a buyer can give on a donation link. Monetary amount represented as
             * integer minor units plus an ISO 4217 currency code.
             */
            "donation_min_amount_money"?: MoneyValue;
            /**
             * Amounts a donation link offers as one-tap choices. [] (Value): {@link MoneyValue}.
             * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
             */
            "donation_suggested_amount_money_options"?: Array<MoneyValue>;
            /**
             * Event details for an `event` link: when and where it takes place and how many
             * tickets it sells. Event settings on an event payment link, such as its date, venue,
             * ticket limit, and ticket emails.
             */
            "event_config"?: PaymentLinkEventConfig;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Image shown to buyers with the link. An image attached to a resource, with its
             * display properties and attachment metadata.
             */
            "image"?: ImageAttachment;
            /** Message to show the buyer when the link is inactive. */
            "inactive_message"?: string;
            /**
             * The inventory location or routing policy that supplies stock for the link's catalog
             * lines. Where an order, payment link, or reservation routes inventory from: a fixed
             * Location, an inventory allocation policy, or one policy revision.
             */
            "inventory_routing_source"?: InventoryRoutingSource;
            /**
             * The terms and policy links checkouts started from this link show the buyer. Legal
             * settings for a checkout: whether buyers must accept terms, and links to the terms,
             * refund policy, shipping policy, and contract.
             */
            "legal"?: LegalSettings;
            /**
             * What the link sells. [] (Value): {@link PaymentLinkLineItem}. A line item on a
             * payment link.
             */
            "line_items"?: Array<PaymentLinkLineItem>;
            /**
             * Most payments the link accepts, counted by `completed_count`. Absent means no limit.
             * Once the limit is reached, resolving the link fails with a request error. It can't
             * be set below `completed_count`. Format: int32.
             */
            "max_completions"?: number;
            /**
             * ID of the merchant this resource belongs to. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id": string;
            /**
             * Stored caller-owned key-value data. See `MetadataInput` for key, value, and size
             * rules. Caller-owned key-value data stored on a resource. Keys starting with flint_
             * are reserved for Flint and are not returned. Writes follow the limits on
             * MetadataInput and MetadataPatchInput; maps written before those limits may not
             * satisfy them.
             */
            "metadata"?: MetadataMap;
            /** Name of the payment link. */
            "name": string;
            /**
             * Unique identifier for this payment link, prefixed `pl_`. Example:
             * "pl_01KEZF7C007WDMA5P9BPZ8J2AM".
             */
            "payment_link_id": string;
            /** What kind of link this is. Value enum: "standard", "donation", "event". */
            "payment_link_type"?: "standard" | "donation" | "event" | (string & {});
            /**
             * Payment options for checkouts started from this link. Payment settings for a
             * checkout: the enabled payment options and a note shown with payment.
             */
            "payments"?: CheckoutPaymentConfig;
            /**
             * Whether automatic promotions apply to checkouts started from this link and whether
             * buyers can enter promotion codes. Promotion settings for a checkout: whether
             * automatic promotions apply and whether the buyer can apply promotion codes.
             */
            "promotion_config"?: CheckoutPromotionConfig;
            /**
             * Where checkout sessions started from this payment link send the buyer after payment,
             * cancellation, or expiration. Where hosted checkout sends the buyer. Not allowed when
             * surface is headless; use payment_return_url.
             */
            "redirects"?: CheckoutRedirects;
            /**
             * RFC3339 timestamp after which the link stops starting checkouts and resolve fails
             * with `ACTION_NOT_ALLOWED` and reason `not_offered`. Unset means sales do not end on
             * their own, except that an event link without sales_end_at stops selling at
             * event_config.event_at. A checkout opened before the end can still start payment for
             * up to 15 minutes after it. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "sales_end_at"?: string;
            /**
             * Present only with expand=sales_summary on GET /v1/payment-links or GET
             * /v1/payment-links/{payment_link_id}. Available to merchant callers, including
             * dashboard sessions and API keys with checkouts.payment_links.read. Uses the same
             * paid-order definition as the merchant sales summary. Paid-order sales totals for a
             * payment link, computed on request. Paid means the order's collection has completed.
             * Fully and partially refunded orders still count, and paid_totals reports the amount
             * collected before refunds. Each order counts once even if it has multiple checkout
             * sessions.
             */
            "sales_summary"?: PaymentLinkSalesSummary;
            /** Whether the link can start new checkouts. Value enum: "active", "inactive". */
            "status": "active" | "inactive" | (string & {});
            /**
             * Present only when `expand` includes `subscription_plan`; `null` when expanded and
             * there is no related subscription plan. anyOf[1] (Value): {@link
             * ExpandedSubscriptionPlanSummary}. A subscription plan's summary fields, including
             * name, billing interval, currency, and status, returned when the plan is expanded.
             * anyOf[2] (Value): null.
             */
            "subscription_plan"?: ((ExpandedSubscriptionPlanSummary) | (null));
            /** Example: "plan_01KEZF7C004CY5ZR33XST2AASV". */
            "subscription_plan_id"?: string;
            /**
             * Tax settings for checkouts started from this link. Whether tax is collected for a
             * checkout session or payment link.
             */
            "tax"?: CheckoutTaxConfig;
            /**
             * The title and colors for checkouts started from this link, over your branding
             * settings. Colors and title applied to a payment link's checkout page.
             */
            "theme"?: ThemeConfig;
            /**
             * Tip options for checkouts started from this link. Tip settings for a checkout:
             * whether tips are enabled, the percent or fixed amount options, the default tip, and
             * custom tips.
             */
            "tip"?: CheckoutTipConfig;
            /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
            "total_quantity_sold": number;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /** URL buyers open to use the link. */
            "url": string;
            /**
             * Current version of this resource's owned state. Send it as `expected_version` when
             * changing the resource to reject a stale write. Format: int64.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<PaymentLink>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "payment_link.updated". */
    "event_type"?: "payment_link.updated";
    /**
     *  environment_grant_id (Required): string. The grant authorizing delivery from this merchant
     * environment. Example: "egrt_01KEZF7C00MQQDDB7YWGXV3MXY". merchant_id (Required): string. The
     * merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". mode (Required):
     * string. Whether the installed merchant event came from live mode or a sandbox. Value enum:
     * "test", "live". partner_app_install_id (Required): string. The install connecting the
     * merchant to the partner app. Example: "pinst_01KEZF7C003HVKZR3GZAW6AFAZ". sandbox_id
     * (Optional): string. The sandbox the event came from, present only in test mode. Example:
     * "test_01KEZF7C00JC77HTMTB2XHNPE0".
     */
    "source"?: ({
        /**
         * The grant authorizing delivery from this merchant environment. Example:
         * "egrt_01KEZF7C00MQQDDB7YWGXV3MXY".
         */
        "environment_grant_id": string;
        /** The merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
        "merchant_id": string;
        /**
         * Whether the installed merchant event came from live mode or a sandbox. Value enum:
         * "test", "live".
         */
        "mode": "test" | "live" | (string & {});
        /**
         * The install connecting the merchant to the partner app. Example:
         * "pinst_01KEZF7C003HVKZR3GZAW6AFAZ".
         */
        "partner_app_install_id": string;
        /**
         * The sandbox the event came from, present only in test mode. Example:
         * "test_01KEZF7C00JC77HTMTB2XHNPE0".
         */
        "sandbox_id"?: string;
    });
});
/**
 * The `payment_link.updated` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type PaymentLinkUpdatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.buyer_fields (Optional): {@link CheckoutBuyerFields}. What
     * checkout asks the buyer for. Each field you leave out uses your checkout settings.
     * object.checkout_session_expires_in_seconds (Optional): integer. Seconds each checkout
     * session the link starts stays open, from 60 to 86,400. Omit it to use your checkout
     * settings, or 24 hours. It doesn't end the link; use sales_end_at for that. Format: int64.
     * minimum: 60. maximum: 86400. object.completed_count (Required): integer. Number of paid
     * checkout sessions started from this link. Format: int32. object.created_at (Required):
     * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.custom_fields (Optional): Array of {@link PaymentLinkCustomField}. Questions buyers
     * answer before paying. Answers are recorded on the order and checkout session in
     * `custom_field_answers`. object.custom_fields[] (Value): {@link PaymentLinkCustomField}. A
     * custom field on a payment link that collects an answer from the buyer. object.custom_text
     * (Optional): {@link CheckoutCustomTextConfig}. Custom text for checkouts started from this
     * link. Custom text shown in checkout: an order summary message and a shipping address label.
     * object.delivery_method_ids (Required): Array of string. Delivery methods the link offers.
     * Empty when the link has none, and then its checkouts offer
     * settings.checkout.default_delivery_method_ids when the order has items to deliver.
     * object.delivery_method_ids[] (Value): string. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
     * object.description (Optional): string. Text about what the link sells, returned to buyers
     * when they open it. object.donation_max_amount_money (Optional): {@link MoneyValue}. Largest
     * amount a buyer can give on a donation link. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code. object.donation_min_amount_money (Optional): {@link
     * MoneyValue}. Smallest amount a buyer can give on a donation link. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     * object.donation_suggested_amount_money_options (Optional): Array of {@link MoneyValue}.
     * Amounts a donation link offers as one-tap choices.
     * object.donation_suggested_amount_money_options[] (Value): {@link MoneyValue}. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     * object.event_config (Optional): {@link PaymentLinkEventConfig}. Event details for an `event`
     * link: when and where it takes place and how many tickets it sells. Event settings on an
     * event payment link, such as its date, venue, ticket limit, and ticket emails.
     * object.external_reference_id (Optional): string. Caller-owned identifier for this resource
     * in an external system. maxLength: 255. Example: "warehouse-1842". object.image (Optional):
     * {@link ImageAttachment}. Image shown to buyers with the link. An image attached to a
     * resource, with its display properties and attachment metadata. object.inactive_message
     * (Optional): string. Message to show the buyer when the link is inactive.
     * object.inventory_routing_source (Optional): {@link InventoryRoutingSource}. The inventory
     * location or routing policy that supplies stock for the link's catalog lines. Where an order,
     * payment link, or reservation routes inventory from: a fixed Location, an inventory
     * allocation policy, or one policy revision. object.legal (Optional): {@link LegalSettings}.
     * The terms and policy links checkouts started from this link show the buyer. Legal settings
     * for a checkout: whether buyers must accept terms, and links to the terms, refund policy,
     * shipping policy, and contract. object.line_items (Optional): Array of {@link
     * PaymentLinkLineItem}. What the link sells. object.line_items[] (Value): {@link
     * PaymentLinkLineItem}. A line item on a payment link. object.max_completions (Optional):
     * integer. Most payments the link accepts, counted by `completed_count`. Absent means no
     * limit. Once the limit is reached, resolving the link fails with a request error. It can't be
     * set below `completed_count`. Format: int32. object.merchant_id (Required): string. ID of the
     * merchant this resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     * object.metadata (Optional): {@link MetadataMap}. Stored caller-owned key-value data. See
     * `MetadataInput` for key, value, and size rules. Caller-owned key-value data stored on a
     * resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them. object.name (Required): string. Name of the payment link.
     * object.payment_link_id (Required): string. Unique identifier for this payment link, prefixed
     * `pl_`. Example: "pl_01KEZF7C007WDMA5P9BPZ8J2AM". object.payment_link_type (Optional):
     * string. What kind of link this is. Value enum: "standard", "donation", "event".
     * object.payments (Optional): {@link CheckoutPaymentConfig}. Payment options for checkouts
     * started from this link. Payment settings for a checkout: the enabled payment options and a
     * note shown with payment. object.promotion_config (Optional): {@link
     * CheckoutPromotionConfig}. Whether automatic promotions apply to checkouts started from this
     * link and whether buyers can enter promotion codes. Promotion settings for a checkout:
     * whether automatic promotions apply and whether the buyer can apply promotion codes.
     * object.redirects (Optional): {@link CheckoutRedirects}. Where checkout sessions started from
     * this payment link send the buyer after payment, cancellation, or expiration. Where hosted
     * checkout sends the buyer. Not allowed when surface is headless; use payment_return_url.
     * object.sales_end_at (Optional): string. RFC3339 timestamp after which the link stops
     * starting checkouts and resolve fails with `ACTION_NOT_ALLOWED` and reason `not_offered`.
     * Unset means sales do not end on their own, except that an event link without sales_end_at
     * stops selling at event_config.event_at. A checkout opened before the end can still start
     * payment for up to 15 minutes after it. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.sales_summary (Optional): {@link PaymentLinkSalesSummary}. Present only with
     * expand=sales_summary on GET /v1/payment-links or GET /v1/payment-links/{payment_link_id}.
     * Available to merchant callers, including dashboard sessions and API keys with
     * checkouts.payment_links.read. Uses the same paid-order definition as the merchant sales
     * summary. Paid-order sales totals for a payment link, computed on request. Paid means the
     * order's collection has completed. Fully and partially refunded orders still count, and
     * paid_totals reports the amount collected before refunds. Each order counts once even if it
     * has multiple checkout sessions. object.status (Required): string. Whether the link can start
     * new checkouts. Value enum: "active", "inactive". object.subscription_plan (Optional): {@link
     * ExpandedSubscriptionPlanSummary} or null. Present only when `expand` includes
     * `subscription_plan`; `null` when expanded and there is no related subscription plan.
     * object.subscription_plan.anyOf[1] (Value): {@link ExpandedSubscriptionPlanSummary}. A
     * subscription plan's summary fields, including name, billing interval, currency, and status,
     * returned when the plan is expanded. object.subscription_plan.anyOf[2] (Value): null.
     * object.subscription_plan_id (Optional): string. Example: "plan_01KEZF7C004CY5ZR33XST2AASV".
     * object.tax (Optional): {@link CheckoutTaxConfig}. Tax settings for checkouts started from
     * this link. Whether tax is collected for a checkout session or payment link. object.theme
     * (Optional): {@link ThemeConfig}. The title and colors for checkouts started from this link,
     * over your branding settings. Colors and title applied to a payment link's checkout page.
     * object.tip (Optional): {@link CheckoutTipConfig}. Tip options for checkouts started from
     * this link. Tip settings for a checkout: whether tips are enabled, the percent or fixed
     * amount options, the default tip, and custom tips. object.total_quantity_sold (Required):
     * integer. Whole-number quantity; fractional quantities are not supported. Format: int32.
     * object.updated_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.url (Required): string. URL buyers open to use the link.
     * object.version (Required): integer. Current version of this resource's owned state. Send it
     * as `expected_version` when changing the resource to reject a stale write. Format: int64.
     * previous_attributes (Optional): object. Previous values of changed top-level fields in
     * data.object, at this delivery's API version. Nested changes include the whole previous
     * top-level value. A value is null when the field was absent before the change. Omitted when
     * Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * buyer_fields (Optional): {@link CheckoutBuyerFields}. What checkout asks the buyer for.
         * Each field you leave out uses your checkout settings.
         * checkout_session_expires_in_seconds (Optional): integer. Seconds each checkout session
         * the link starts stays open, from 60 to 86,400. Omit it to use your checkout settings, or
         * 24 hours. It doesn't end the link; use sales_end_at for that. Format: int64. minimum:
         * 60. maximum: 86400. completed_count (Required): integer. Number of paid checkout
         * sessions started from this link. Format: int32. created_at (Required): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". custom_fields (Optional):
         * Array of {@link PaymentLinkCustomField}. Questions buyers answer before paying. Answers
         * are recorded on the order and checkout session in `custom_field_answers`.
         * custom_fields[] (Value): {@link PaymentLinkCustomField}. A custom field on a payment
         * link that collects an answer from the buyer. custom_text (Optional): {@link
         * CheckoutCustomTextConfig}. Custom text for checkouts started from this link. Custom text
         * shown in checkout: an order summary message and a shipping address label.
         * delivery_method_ids (Required): Array of string. Delivery methods the link offers. Empty
         * when the link has none, and then its checkouts offer
         * settings.checkout.default_delivery_method_ids when the order has items to deliver.
         * delivery_method_ids[] (Value): string. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
         * description (Optional): string. Text about what the link sells, returned to buyers when
         * they open it. donation_max_amount_money (Optional): {@link MoneyValue}. Largest amount a
         * buyer can give on a donation link. Monetary amount represented as integer minor units
         * plus an ISO 4217 currency code. donation_min_amount_money (Optional): {@link
         * MoneyValue}. Smallest amount a buyer can give on a donation link. Monetary amount
         * represented as integer minor units plus an ISO 4217 currency code.
         * donation_suggested_amount_money_options (Optional): Array of {@link MoneyValue}. Amounts
         * a donation link offers as one-tap choices. donation_suggested_amount_money_options[]
         * (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus an
         * ISO 4217 currency code. event_config (Optional): {@link PaymentLinkEventConfig}. Event
         * details for an `event` link: when and where it takes place and how many tickets it
         * sells. Event settings on an event payment link, such as its date, venue, ticket limit,
         * and ticket emails. external_reference_id (Optional): string. Caller-owned identifier for
         * this resource in an external system. maxLength: 255. Example: "warehouse-1842". image
         * (Optional): {@link ImageAttachment}. Image shown to buyers with the link. An image
         * attached to a resource, with its display properties and attachment metadata.
         * inactive_message (Optional): string. Message to show the buyer when the link is
         * inactive. inventory_routing_source (Optional): {@link InventoryRoutingSource}. The
         * inventory location or routing policy that supplies stock for the link's catalog lines.
         * Where an order, payment link, or reservation routes inventory from: a fixed Location, an
         * inventory allocation policy, or one policy revision. legal (Optional): {@link
         * LegalSettings}. The terms and policy links checkouts started from this link show the
         * buyer. Legal settings for a checkout: whether buyers must accept terms, and links to the
         * terms, refund policy, shipping policy, and contract. line_items (Optional): Array of
         * {@link PaymentLinkLineItem}. What the link sells. line_items[] (Value): {@link
         * PaymentLinkLineItem}. A line item on a payment link. max_completions (Optional):
         * integer. Most payments the link accepts, counted by `completed_count`. Absent means no
         * limit. Once the limit is reached, resolving the link fails with a request error. It
         * can't be set below `completed_count`. Format: int32. merchant_id (Required): string. ID
         * of the merchant this resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
         * metadata (Optional): {@link MetadataMap}. Stored caller-owned key-value data. See
         * `MetadataInput` for key, value, and size rules. Caller-owned key-value data stored on a
         * resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
         * follow the limits on MetadataInput and MetadataPatchInput; maps written before those
         * limits may not satisfy them. name (Required): string. Name of the payment link.
         * payment_link_id (Required): string. Unique identifier for this payment link, prefixed
         * `pl_`. Example: "pl_01KEZF7C007WDMA5P9BPZ8J2AM". payment_link_type (Optional): string.
         * What kind of link this is. Value enum: "standard", "donation", "event". payments
         * (Optional): {@link CheckoutPaymentConfig}. Payment options for checkouts started from
         * this link. Payment settings for a checkout: the enabled payment options and a note shown
         * with payment. promotion_config (Optional): {@link CheckoutPromotionConfig}. Whether
         * automatic promotions apply to checkouts started from this link and whether buyers can
         * enter promotion codes. Promotion settings for a checkout: whether automatic promotions
         * apply and whether the buyer can apply promotion codes. redirects (Optional): {@link
         * CheckoutRedirects}. Where checkout sessions started from this payment link send the
         * buyer after payment, cancellation, or expiration. Where hosted checkout sends the buyer.
         * Not allowed when surface is headless; use payment_return_url. sales_end_at (Optional):
         * string. RFC3339 timestamp after which the link stops starting checkouts and resolve
         * fails with `ACTION_NOT_ALLOWED` and reason `not_offered`. Unset means sales do not end
         * on their own, except that an event link without sales_end_at stops selling at
         * event_config.event_at. A checkout opened before the end can still start payment for up
         * to 15 minutes after it. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * sales_summary (Optional): {@link PaymentLinkSalesSummary}. Present only with
         * expand=sales_summary on GET /v1/payment-links or GET
         * /v1/payment-links/{payment_link_id}. Available to merchant callers, including dashboard
         * sessions and API keys with checkouts.payment_links.read. Uses the same paid-order
         * definition as the merchant sales summary. Paid-order sales totals for a payment link,
         * computed on request. Paid means the order's collection has completed. Fully and
         * partially refunded orders still count, and paid_totals reports the amount collected
         * before refunds. Each order counts once even if it has multiple checkout sessions. status
         * (Required): string. Whether the link can start new checkouts. Value enum: "active",
         * "inactive". subscription_plan (Optional): {@link ExpandedSubscriptionPlanSummary} or
         * null. Present only when `expand` includes `subscription_plan`; `null` when expanded and
         * there is no related subscription plan. subscription_plan.anyOf[1] (Value): {@link
         * ExpandedSubscriptionPlanSummary}. A subscription plan's summary fields, including name,
         * billing interval, currency, and status, returned when the plan is expanded.
         * subscription_plan.anyOf[2] (Value): null. subscription_plan_id (Optional): string.
         * Example: "plan_01KEZF7C004CY5ZR33XST2AASV". tax (Optional): {@link CheckoutTaxConfig}.
         * Tax settings for checkouts started from this link. Whether tax is collected for a
         * checkout session or payment link. theme (Optional): {@link ThemeConfig}. The title and
         * colors for checkouts started from this link, over your branding settings. Colors and
         * title applied to a payment link's checkout page. tip (Optional): {@link
         * CheckoutTipConfig}. Tip options for checkouts started from this link. Tip settings for a
         * checkout: whether tips are enabled, the percent or fixed amount options, the default
         * tip, and custom tips. total_quantity_sold (Required): integer. Whole-number quantity;
         * fractional quantities are not supported. Format: int32. updated_at (Required): string.
         * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". url (Required):
         * string. URL buyers open to use the link. version (Required): integer. Current version of
         * this resource's owned state. Send it as `expected_version` when changing the resource to
         * reject a stale write. Format: int64.
         */
        "object": {
            /**
             * What checkout asks the buyer for. Each field you leave out uses your checkout
             * settings.
             */
            "buyer_fields"?: CheckoutBuyerFields;
            /**
             * Seconds each checkout session the link starts stays open, from 60 to 86,400. Omit it
             * to use your checkout settings, or 24 hours. It doesn't end the link; use
             * sales_end_at for that. Format: int64. minimum: 60. maximum: 86400.
             */
            "checkout_session_expires_in_seconds"?: number;
            /** Number of paid checkout sessions started from this link. Format: int32. */
            "completed_count": number;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Questions buyers answer before paying. Answers are recorded on the order and
             * checkout session in `custom_field_answers`. [] (Value): {@link
             * PaymentLinkCustomField}. A custom field on a payment link that collects an answer
             * from the buyer.
             */
            "custom_fields"?: Array<PaymentLinkCustomField>;
            /**
             * Custom text for checkouts started from this link. Custom text shown in checkout: an
             * order summary message and a shipping address label.
             */
            "custom_text"?: CheckoutCustomTextConfig;
            /**
             * Delivery methods the link offers. Empty when the link has none, and then its
             * checkouts offer settings.checkout.default_delivery_method_ids when the order has
             * items to deliver. [] (Value): string. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
             */
            "delivery_method_ids": Array<string>;
            /** Text about what the link sells, returned to buyers when they open it. */
            "description"?: string;
            /**
             * Largest amount a buyer can give on a donation link. Monetary amount represented as
             * integer minor units plus an ISO 4217 currency code.
             */
            "donation_max_amount_money"?: MoneyValue;
            /**
             * Smallest amount a buyer can give on a donation link. Monetary amount represented as
             * integer minor units plus an ISO 4217 currency code.
             */
            "donation_min_amount_money"?: MoneyValue;
            /**
             * Amounts a donation link offers as one-tap choices. [] (Value): {@link MoneyValue}.
             * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
             */
            "donation_suggested_amount_money_options"?: Array<MoneyValue>;
            /**
             * Event details for an `event` link: when and where it takes place and how many
             * tickets it sells. Event settings on an event payment link, such as its date, venue,
             * ticket limit, and ticket emails.
             */
            "event_config"?: PaymentLinkEventConfig;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Image shown to buyers with the link. An image attached to a resource, with its
             * display properties and attachment metadata.
             */
            "image"?: ImageAttachment;
            /** Message to show the buyer when the link is inactive. */
            "inactive_message"?: string;
            /**
             * The inventory location or routing policy that supplies stock for the link's catalog
             * lines. Where an order, payment link, or reservation routes inventory from: a fixed
             * Location, an inventory allocation policy, or one policy revision.
             */
            "inventory_routing_source"?: InventoryRoutingSource;
            /**
             * The terms and policy links checkouts started from this link show the buyer. Legal
             * settings for a checkout: whether buyers must accept terms, and links to the terms,
             * refund policy, shipping policy, and contract.
             */
            "legal"?: LegalSettings;
            /**
             * What the link sells. [] (Value): {@link PaymentLinkLineItem}. A line item on a
             * payment link.
             */
            "line_items"?: Array<PaymentLinkLineItem>;
            /**
             * Most payments the link accepts, counted by `completed_count`. Absent means no limit.
             * Once the limit is reached, resolving the link fails with a request error. It can't
             * be set below `completed_count`. Format: int32.
             */
            "max_completions"?: number;
            /**
             * ID of the merchant this resource belongs to. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id": string;
            /**
             * Stored caller-owned key-value data. See `MetadataInput` for key, value, and size
             * rules. Caller-owned key-value data stored on a resource. Keys starting with flint_
             * are reserved for Flint and are not returned. Writes follow the limits on
             * MetadataInput and MetadataPatchInput; maps written before those limits may not
             * satisfy them.
             */
            "metadata"?: MetadataMap;
            /** Name of the payment link. */
            "name": string;
            /**
             * Unique identifier for this payment link, prefixed `pl_`. Example:
             * "pl_01KEZF7C007WDMA5P9BPZ8J2AM".
             */
            "payment_link_id": string;
            /** What kind of link this is. Value enum: "standard", "donation", "event". */
            "payment_link_type"?: "standard" | "donation" | "event" | (string & {});
            /**
             * Payment options for checkouts started from this link. Payment settings for a
             * checkout: the enabled payment options and a note shown with payment.
             */
            "payments"?: CheckoutPaymentConfig;
            /**
             * Whether automatic promotions apply to checkouts started from this link and whether
             * buyers can enter promotion codes. Promotion settings for a checkout: whether
             * automatic promotions apply and whether the buyer can apply promotion codes.
             */
            "promotion_config"?: CheckoutPromotionConfig;
            /**
             * Where checkout sessions started from this payment link send the buyer after payment,
             * cancellation, or expiration. Where hosted checkout sends the buyer. Not allowed when
             * surface is headless; use payment_return_url.
             */
            "redirects"?: CheckoutRedirects;
            /**
             * RFC3339 timestamp after which the link stops starting checkouts and resolve fails
             * with `ACTION_NOT_ALLOWED` and reason `not_offered`. Unset means sales do not end on
             * their own, except that an event link without sales_end_at stops selling at
             * event_config.event_at. A checkout opened before the end can still start payment for
             * up to 15 minutes after it. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "sales_end_at"?: string;
            /**
             * Present only with expand=sales_summary on GET /v1/payment-links or GET
             * /v1/payment-links/{payment_link_id}. Available to merchant callers, including
             * dashboard sessions and API keys with checkouts.payment_links.read. Uses the same
             * paid-order definition as the merchant sales summary. Paid-order sales totals for a
             * payment link, computed on request. Paid means the order's collection has completed.
             * Fully and partially refunded orders still count, and paid_totals reports the amount
             * collected before refunds. Each order counts once even if it has multiple checkout
             * sessions.
             */
            "sales_summary"?: PaymentLinkSalesSummary;
            /** Whether the link can start new checkouts. Value enum: "active", "inactive". */
            "status": "active" | "inactive" | (string & {});
            /**
             * Present only when `expand` includes `subscription_plan`; `null` when expanded and
             * there is no related subscription plan. anyOf[1] (Value): {@link
             * ExpandedSubscriptionPlanSummary}. A subscription plan's summary fields, including
             * name, billing interval, currency, and status, returned when the plan is expanded.
             * anyOf[2] (Value): null.
             */
            "subscription_plan"?: ((ExpandedSubscriptionPlanSummary) | (null));
            /** Example: "plan_01KEZF7C004CY5ZR33XST2AASV". */
            "subscription_plan_id"?: string;
            /**
             * Tax settings for checkouts started from this link. Whether tax is collected for a
             * checkout session or payment link.
             */
            "tax"?: CheckoutTaxConfig;
            /**
             * The title and colors for checkouts started from this link, over your branding
             * settings. Colors and title applied to a payment link's checkout page.
             */
            "theme"?: ThemeConfig;
            /**
             * Tip options for checkouts started from this link. Tip settings for a checkout:
             * whether tips are enabled, the percent or fixed amount options, the default tip, and
             * custom tips.
             */
            "tip"?: CheckoutTipConfig;
            /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
            "total_quantity_sold": number;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /** URL buyers open to use the link. */
            "url": string;
            /**
             * Current version of this resource's owned state. Send it as `expected_version` when
             * changing the resource to reject a stale write. Format: int64.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<PaymentLink>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "payment_link.updated". */
    "event_type"?: "payment_link.updated";
});
export type PaymentLinksCreateParams = (InputValue<CreatePaymentLinkRequestInput>)
    & {
    /**
     * Merchant this request acts for. Required with an app-level partner app token; optional with
     * a merchant-bound one, which it must match. Other credentials may send it only with their own
     * merchant. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Merchant-Id"?: InputValue<string>;
    /**
     * Mode of the request context, live or test. Optional; it must match the credential's mode.
     * Value enum: "test", "live".
     */
    "Flint-Mode"?: InputValue<"test" | "live">;
    /**
     * Sandbox of the request context in test mode. Optional; with a partner app token it must name
     * the sandbox the merchant granted the app, and a live token can't send it. Send it in test
     * mode so a grant moved to another sandbox can't silently change where you write. pattern:
     * ^test_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Sandbox-Id"?: InputValue<string>;
};
export type PaymentLinksGetParams = {
    /**
     * Include related objects in the response. Supported expansions: sales_summary,
     * subscription_plan. sales_summary requires checkouts.payment_links.read and is also available
     * to dashboard sessions. subscription_plan additionally requires
     * commerce.subscription_plans.read. sales_summary is supported only on this get route. Limits:
     * at most 10 unique expand paths per request. [] enum: "sales_summary", "subscription_plan".
     * Value enum: "sales_summary", "subscription_plan". anyOf[1] (Value): Array of string. []
     * enum: "sales_summary", "subscription_plan". anyOf[1][] (Value): string. Value enum:
     * "sales_summary", "subscription_plan". anyOf[2] (Value): string. Value enum: "sales_summary",
     * "subscription_plan".
     */
    "expand"?: InputValue<("sales_summary" | "subscription_plan") | readonly ("sales_summary" | "subscription_plan")[]>;
    /**
     * Merchant this request acts for. Required with an app-level partner app token; optional with
     * a merchant-bound one, which it must match. Other credentials may send it only with their own
     * merchant. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Merchant-Id"?: InputValue<string>;
    /**
     * Mode of the request context, live or test. Optional; it must match the credential's mode.
     * Value enum: "test", "live".
     */
    "Flint-Mode"?: InputValue<"test" | "live">;
    /**
     * Sandbox of the request context in test mode. Optional; with a partner app token it must name
     * the sandbox the merchant granted the app, and a live token can't send it. Send it in test
     * mode so a grant moved to another sandbox can't silently change where you write. pattern:
     * ^test_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Sandbox-Id"?: InputValue<string>;
};
export type PaymentLinksGetPublicParams = {};
export type PaymentLinksListParams = {
    /**
     * Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: 1. maximum:
     * 100. Default: 20.
     */
    "page_size"?: InputValue<number>;
    /**
     * Opaque, signed next_page_token from the previous response, bound to the list and caller.
     * Omit on the first request. You may change `page_size` between pages. Reuse it with the same
     * endpoint, filters, sort, and request context. Do not parse or construct tokens. An altered,
     * invalid, expired, or mismatched token returns a validation error.
     */
    "page_token"?: InputValue<string>;
    /**
     * Filter by payment link status. Values are trimmed and deduplicated in first-seen order;
     * empty or unknown entries are rejected. Values within this filter are ORed; separate filters
     * are ANDed. [] enum: "active", "inactive". Value enum: "active", "inactive". anyOf[1]
     * (Value): Array of string. minItems: 1. [] enum: "active", "inactive". anyOf[1][] (Value):
     * string. Value enum: "active", "inactive". anyOf[2] (Value): string. Value enum: "active",
     * "inactive".
     */
    "status"?: InputValue<("active" | "inactive") | readonly ("active" | "inactive")[]>;
    /**
     * Exact-match filter on the caller-owned external reference ID. minLength: 1. maxLength: 255.
     * Example: "warehouse-1842".
     */
    "external_reference_id"?: InputValue<string>;
    /**
     * Search across payment link ID, external reference ID, name, and description. Text fields
     * match any part of the value, and %, _ and \ are ordinary characters, not wildcards. IDs
     * match from the start and need the type prefix, such as pl_01.
     */
    "query"?: InputValue<string>;
    /**
     * Filter by payment link type. Values are trimmed and deduplicated in first-seen order; empty
     * or unknown entries are rejected. Values within this filter are ORed; separate filters are
     * ANDed. [] enum: "standard", "donation", "event". Value enum: "standard", "donation",
     * "event". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "standard", "donation",
     * "event". anyOf[1][] (Value): string. Value enum: "standard", "donation", "event". anyOf[2]
     * (Value): string. Value enum: "standard", "donation", "event".
     */
    "payment_link_type"?: InputValue<("standard" | "donation" | "event") | readonly ("standard" | "donation" | "event")[]>;
    /** Filter by whether the payment link references a subscription plan. */
    "has_subscription_plan"?: InputValue<boolean>;
    /**
     * Field to sort by. Defaults to created_at; ties are broken by payment_link_id. Default:
     * "created_at". Value enum: "created_at", "updated_at".
     */
    "sort_by"?: InputValue<"created_at" | "updated_at">;
    /** Sort direction. Defaults to desc. Default: "desc". Value enum: "asc", "desc". */
    "sort_direction"?: InputValue<"asc" | "desc">;
    /** Inclusive lower bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
    /** Inclusive lower bound on updated_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on updated_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_before"?: InputValue<string | globalThis.Date>;
    /**
     * Include related objects in the response. Supported expansions: sales_summary,
     * subscription_plan. Include the requested related resources using scoped batch reads for this
     * page. Each relationship requires its existing target read scopes. Expansion changes the
     * representation without changing pagination tokens. Limits: at most 10 unique expand paths
     * per request. [] enum: "sales_summary", "subscription_plan". Value enum: "sales_summary",
     * "subscription_plan". anyOf[1] (Value): Array of string. [] enum: "sales_summary",
     * "subscription_plan". anyOf[1][] (Value): string. Value enum: "sales_summary",
     * "subscription_plan". anyOf[2] (Value): string. Value enum: "sales_summary",
     * "subscription_plan".
     */
    "expand"?: InputValue<("sales_summary" | "subscription_plan") | readonly ("sales_summary" | "subscription_plan")[]>;
    /**
     * Merchant this request acts for. Required with an app-level partner app token; optional with
     * a merchant-bound one, which it must match. Other credentials may send it only with their own
     * merchant. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Merchant-Id"?: InputValue<string>;
    /**
     * Mode of the request context, live or test. Optional; it must match the credential's mode.
     * Value enum: "test", "live".
     */
    "Flint-Mode"?: InputValue<"test" | "live">;
    /**
     * Sandbox of the request context in test mode. Optional; with a partner app token it must name
     * the sandbox the merchant granted the app, and a live token can't send it. Send it in test
     * mode so a grant moved to another sandbox can't silently change where you write. pattern:
     * ^test_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Sandbox-Id"?: InputValue<string>;
};
export type PaymentLinksResolveParams = (InputValue<ResolvePaymentLinkRequestInput>);
export type PaymentLinksUpdateParams = (InputValue<UpdatePaymentLinkRequestInput>)
    & {
    /**
     * Merchant this request acts for. Required with an app-level partner app token; optional with
     * a merchant-bound one, which it must match. Other credentials may send it only with their own
     * merchant. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Merchant-Id"?: InputValue<string>;
    /**
     * Mode of the request context, live or test. Optional; it must match the credential's mode.
     * Value enum: "test", "live".
     */
    "Flint-Mode"?: InputValue<"test" | "live">;
    /**
     * Sandbox of the request context in test mode. Optional; with a partner app token it must name
     * the sandbox the merchant granted the app, and a live token can't send it. Send it in test
     * mode so a grant moved to another sandbox can't silently change where you write. pattern:
     * ^test_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Sandbox-Id"?: InputValue<string>;
};
/** A customer's saved payment details. */
export type PaymentMethod = {
    /**
     * Brand, expiry and last four digits. Present when `type` is `card`. Card details on a payment
     * method: brand, expiration month and year, last four digits, and the wallet when one was
     * used.
     */
    "card"?: CardDetails;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /**
     * Present only when `expand` includes `customer`; `null` when expanded and there is no related
     * customer. anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's summary fields,
     * returned in place of a customer ID when the customer is expanded. anyOf[2] (Value): null.
     */
    "customer"?: ((ExpandedCustomerSummary) | (null));
    /** Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". */
    "customer_id": string;
    /**
     * A value that is the same for every saved copy of one card number at this merchant and
     * environment, so you can spot duplicates. It doesn't identify the card anywhere else. A card
     * added through Apple Pay or Google Pay can have a different fingerprint from the same card
     * typed in.
     */
    "fingerprint"?: string;
    /**
     * Whether this is the customer's default payment method, the one
     * Customer.default_payment_method_id names. Change the default with PATCH
     * /v1/customers/{customer_id}; that sends customer.updated, not a payment method event.
     */
    "is_default": boolean;
    /** ID of the merchant this resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
    "merchant_id": string;
    /**
     * Unique identifier for this payment method, prefixed `pm_`. Example:
     * "pm_01KEZF7C0034B248TXXE4NXYFZ".
     */
    "payment_method_id": string;
    /**
     * Where the buyer saved this payment method. Returned on /v1/me/payment-methods responses when
     * Flint wallet support is enabled. Accept future values. Value enum: "flint", "store".
     */
    "saved_with"?: "flint" | "store" | (string & {});
    /**
     * Whether the payment method can be charged. Treat any value other than active as not
     * chargeable, including values added later. Value enum: "pending", "active", "expired",
     * "archived", "failed".
     */
    "status": "pending" | "active" | "expired" | "archived" | "failed" | (string & {});
    /** Kind of payment method. Value enum: "card". */
    "type": "card" | (string & {});
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
    /**
     * When Flint may charge the payment method. off_session payment methods can pay subscriptions,
     * automatic invoices, and other charges without the buyer, and can be a customer's default.
     * on_session payment methods were saved by the buyer in checkout for faster checkout at this
     * merchant; Flint charges them only in checkouts the buyer completes and refuses them for any
     * charge without the buyer and as a default. Payment methods saved before usage existed are
     * off_session. Value enum: "on_session", "off_session".
     */
    "usage": "on_session" | "off_session" | (string & {});
};
export type PaymentMethodActivatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "card"?: CardDetails;
            "created_at": string;
            "customer"?: ((ExpandedCustomerSummary) | (null));
            "customer_id": string;
            "fingerprint"?: string;
            "is_default": boolean;
            "merchant_id": string;
            "payment_method_id": string;
            "saved_with"?: "flint" | "store" | (string & {});
            "status": "pending" | "active" | "expired" | "archived" | "failed" | (string & {});
            "type": "card" | (string & {});
            "updated_at": string;
            "usage": "on_session" | "off_session" | (string & {});
        };
        "previous_attributes"?: Partial<PaymentMethod>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "payment_method.activated";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "card"?: CardDetails;
            "created_at": string;
            "customer"?: ((ExpandedCustomerSummary) | (null));
            "customer_id": string;
            "fingerprint"?: string;
            "is_default": boolean;
            "merchant_id": string;
            "payment_method_id": string;
            "saved_with"?: "flint" | "store" | (string & {});
            "status": "pending" | "active" | "expired" | "archived" | "failed" | (string & {});
            "type": "card" | (string & {});
            "updated_at": string;
            "usage": "on_session" | "off_session" | (string & {});
        };
        "previous_attributes"?: Partial<PaymentMethod>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "payment_method.activated";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "payment_method.activated";
});
