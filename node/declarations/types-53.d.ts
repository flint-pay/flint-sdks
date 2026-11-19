import type { MoneyValueInput, MoneyValuePreviousAttributes, MoneyValue } from './types-44.js';
import type { OrderLineItemTaxRequestInput, OrderLineItemTaxPreviousAttributes, OrderLineItemTax } from './types-47.js';
import type {
    PaymentLinkLineItemPatchInputBundleInput,
    PaymentLinkLineItemPatchInputCustomFixedInput,
    PaymentLinkLineItemPatchInputCustomVariableInput,
    PaymentLinkLineItemPatchInputVariantInput,
    PaymentLinkLineItemBundlePreviousAttributes,
    PaymentLinkLineItemCustomFixedPreviousAttributes,
    PaymentLinkLineItemCustomVariablePreviousAttributes,
    PaymentLinkLineItemInputBundle,
    PaymentLinkLineItemInputCustomFixed,
    PaymentLinkLineItemInputCustomVariable,
    PaymentLinkLineItemInputVariant,
    PaymentLinkLineItemInputBundleInput,
    PaymentLinkLineItemInputCustomFixedInput,
    PaymentLinkLineItemInputCustomVariableInput,
    PaymentLinkLineItemInputVariantInput,
    PaymentLink,
    PaymentLinkCustomField,
    PaymentLinkCustomFieldPreviousAttributes,
    PaymentLinkEventConfig,
    PaymentLinkEventConfigPreviousAttributes,
    PaymentLinkLineItem
} from './types-52.js';
import type { ProductPriceRangePreviousAttributes, ProductPriceRange } from './types-57.js';
import type {
    ResponseMeta,
    ResolvePaymentLinkRequestInput,
    ResourceReference,
    ResourceReferencePreviousAttributes
} from './types-62.js';
import type { Image, ImageAttachment, ImageAttachmentPreviousAttributes } from './types-31.js';
import type { SubscriptionIntervalOption } from './types-70.js';
import type {
    CheckoutBuyerFields,
    CheckoutBuyerFieldsPreviousAttributes,
    CheckoutCustomTextConfig,
    CheckoutCustomTextConfigPreviousAttributes,
    CheckoutLegalConfigPreviousAttributes,
    CheckoutPaymentConfig,
    CheckoutPaymentConfigPreviousAttributes,
    CheckoutPromotionConfig,
    CheckoutPromotionConfigPreviousAttributes,
    CheckoutRedirects,
    CheckoutRedirectsPreviousAttributes
} from './types-6.js';
import type { CheckoutTaxConfig, CheckoutTipConfig, CheckoutTipConfigPreviousAttributes } from './types-7.js';
import type { ExpandedSubscriptionPlanSummary, ExpandedSubscriptionPlanSummaryPreviousAttributes } from './types-27.js';
import type { InventoryRoutingSource, InventoryRoutingSourcePreviousAttributes } from './types-33.js';
import type { LegalSettings } from './types-39.js';
import type { MerchantWebhookEnvelope, MetadataMap } from './types-43.js';
import type { PartnerWebhookEnvelope } from './types-50.js';
import type { SubscriptionTaxPreviousAttributes } from './types-72.js';
import type { ThemeConfig, ThemeConfigPreviousAttributes } from './types-75.js';
import type { InputValue } from '../runtime.js';
import type { CreatePaymentLinkRequestInput, CreatePaymentMethodDomainRequestInput } from './types-12.js';
import type { UpdatePaymentLinkRequestInput, UpdatePaymentMethodDomainRequestInput } from './types-77.js';
import type { CardDetails, CardDetailsPreviousAttributes } from './types-5.js';
import type {
    ExpandedCustomerSummary,
    ExpandedCustomerSummaryPreviousAttributes,
    DisputesAcceptParams,
    ExpandedPaymentIntentSummary,
    ExpandedPaymentIntentSummaryPreviousAttributes,
    ExpandedOrderSummary,
    ExpandedOrderSummaryPreviousAttributes
} from './types-26.js';
import type { StripeClientSetup, SplitReversalReference, SplitReversalReferencePreviousAttributes } from './types-68.js';
import type { SavePaymentMethodRequestInput } from './types-67.js';
import type {
    PaymentReviewPaymentSummary,
    PaymentReviewResolutionFailure,
    PaymentReviewRisk,
    PaymentReviewPaymentSummaryPreviousAttributes,
    PaymentReviewResolutionFailurePreviousAttributes,
    PaymentReviewRiskPreviousAttributes
} from './types-54.js';
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
     * Optional whole-number admission capacity across all orders for an event tier; fractional
     * quantities are not supported. Must be at least 1 and cannot exceed
     * event_config.max_total_quantity when the event is capped. Omit for no tier cap; omitting it
     * in a line_items replacement removes an existing cap. Format: int32. minimum: 1.
     */
    "max_total_quantity"?: number;
    /**
     * Highest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Must be
     * greater than zero and greater than or equal to min_unit_price_money. Omit for no maximum.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
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
     * Name of an ad hoc line item. Catalog lines take the catalog name. Surrounding whitespace is
     * trimmed before length validation. A supplied value cannot be blank; use null where clearing
     * is supported. minLength: 1. maxLength: 255.
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
     * Unit prices offered as one-tap choices when the buyer sets the price. Use the same currency
     * for the price, bounds, and suggested prices. [] (Value): {@link MoneyValueInput}. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
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
     * Price of one unit of a `custom_fixed` line item. amount (Required): integer string. Positive
     * amount in the currency's minor unit, such as cents for USD. Use an integer string (decimal
     * digits), not a floating-point number. Format: int64. minimum: 1. currency (Required):
     * string. Three-letter uppercase ISO 4217 currency code for this amount, such as USD.
     * minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
     */
    "unit_price_money"?: {
        /**
         * Positive amount in the currency's minor unit, such as cents for USD. Use an integer
         * string (decimal digits), not a floating-point number. Format: int64. minimum: 1.
         */
        "amount": `${bigint}` | bigint;
        /**
         * Three-letter uppercase ISO 4217 currency code for this amount, such as USD. minLength:
         * 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
         */
        "currency": string;
    };
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
export type PaymentLinkLineItemPreviousAttributes = ({
    /**
     * Whether the buyer can change the quantity in checkout. anyOf[1] (Value): boolean. Whether
     * the buyer can change the quantity in checkout. anyOf[2] (Value): null.
     */
    "allow_quantity_adjustment"?: ((boolean) | (null));
    /**
     * Whether the buyer sets the unit price. Only `custom_variable` lines allow it. anyOf[1]
     * (Value): boolean. Whether the buyer sets the unit price. Only `custom_variable` lines allow
     * it. anyOf[2] (Value): null.
     */
    "allow_unit_price_adjustment"?: ((boolean) | (null));
    /**
     * ID of the catalog bundle a `bundle` line sells. anyOf[1] (Value): string. ID of the catalog
     * bundle a `bundle` line sells. Example: "bun_01KEZF7C00TQ6S76Z6CVQF5SVN". anyOf[2] (Value):
     * null.
     */
    "bundle_id"?: ((string) | (null));
    /**
     * Variant selected when the page opens and used at resolve when the buyer omits a selection.
     * Must be in variant_ids. Omit it to require a buyer selection. anyOf[1] (Value): string.
     * Variant selected when the page opens and used at resolve when the buyer omits a selection.
     * Must be in variant_ids. Omit it to require a buyer selection. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX". anyOf[2] (Value):
     * null.
     */
    "default_variant_id"?: ((string) | (null));
    /**
     * Description of an ad hoc line item. anyOf[1] (Value): string. Description of an ad hoc line
     * item. anyOf[2] (Value): null.
     */
    "description"?: ((string) | (null));
    /**
     * True when the referenced variant or bundle cannot be sold, or no listed variant in
     * variant_ids can be sold in the line currency. Always false on ad hoc line items. anyOf[1]
     * (Value): boolean. True when the referenced variant or bundle cannot be sold, or no listed
     * variant in variant_ids can be sold in the line currency. Always false on ad hoc line items.
     * anyOf[2] (Value): null.
     */
    "is_catalog_item_unavailable"?: ((boolean) | (null));
    /**
     * Public event read: true when the tier or event has no capacity left. anyOf[1] (Value):
     * boolean. Public event read: true when the tier or event has no capacity left. anyOf[2]
     * (Value): null.
     */
    "is_sold_out"?: ((boolean) | (null));
    /**
     * Keys the resolve override maps. Stable line item key used in checkout overrides. Must not
     * have leading or trailing whitespace. Assigned as line_item_1, line_item_2, and so on when
     * omitted, skipping numbers already used by explicit keys; retained for an existing line item
     * when omitted on update. anyOf[1] (Value): string. Keys the resolve override maps. Stable
     * line item key used in checkout overrides. Must not have leading or trailing whitespace.
     * Assigned as line_item_1, line_item_2, and so on when omitted, skipping numbers already used
     * by explicit keys; retained for an existing line item when omitted on update. anyOf[2]
     * (Value): null.
     */
    "key"?: ((string) | (null));
    /**
     * Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer.
     * Whole-number quantity; fractional quantities are not supported. Format: int32. anyOf[2]
     * (Value): null.
     */
    "max_quantity"?: ((number) | (null));
    /**
     * Optional whole-number admission capacity across all orders for an event tier; fractional
     * quantities are not supported. Must be at least 1 and cannot exceed
     * event_config.max_total_quantity when the event is capped. Omit for no tier cap; omitting it
     * in a line_items replacement removes an existing cap. anyOf[1] (Value): integer. Optional
     * whole-number admission capacity across all orders for an event tier; fractional quantities
     * are not supported. Must be at least 1 and cannot exceed event_config.max_total_quantity when
     * the event is capped. Omit for no tier cap; omitting it in a line_items replacement removes
     * an existing cap. Format: int32. minimum: 1. anyOf[2] (Value): null.
     */
    "max_total_quantity"?: ((number) | (null));
    /**
     * Highest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Must be
     * greater than zero and greater than or equal to min_unit_price_money. Omit for no maximum.
     * anyOf[1] (Value): {@link MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "max_unit_price_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer.
     * Whole-number quantity; fractional quantities are not supported. Format: int32. anyOf[2]
     * (Value): null.
     */
    "min_quantity"?: ((number) | (null));
    /**
     * Lowest unit price the buyer can enter when `allow_unit_price_adjustment` is true. anyOf[1]
     * (Value): {@link MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "min_unit_price_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * Name of an ad hoc line item. Catalog lines take the catalog name. anyOf[1] (Value): string.
     * Name of an ad hoc line item. Catalog lines take the catalog name. anyOf[2] (Value): null.
     */
    "name"?: ((string) | (null));
    /**
     * Unique identifier for this payment link line item, prefixed `plli_`. anyOf[1] (Value):
     * string. Unique identifier for this payment link line item, prefixed `plli_`. Example:
     * "plli_01KEZF7C004V7GVCCNMYYCBAJS". anyOf[2] (Value): null.
     */
    "payment_link_line_item_id"?: ((string) | (null));
    /**
     * Parent catalog context only. The product that the variants in variant_ids belong to. Present
     * only on buyer choice lines; refused on input. anyOf[1] (Value): string. Parent catalog
     * context only. The product that the variants in variant_ids belong to. Present only on buyer
     * choice lines; refused on input. Example: "prod_01KEZF7C00BVSHCNWVH528HB66". anyOf[2]
     * (Value): null.
     */
    "product_id"?: ((string) | (null));
    /**
     * Classification configured on a custom line for ACH debit. Null when unclassified or
     * catalog-backed; catalog lines get their product classification when checkout starts. Value
     * enum: "physical", "service", "fee", "digital", "gift_card", null. anyOf[1] (Value): string.
     * Classification configured on a custom line for ACH debit. Null when unclassified or
     * catalog-backed; catalog lines get their product classification when checkout starts. Value
     * enum: "physical", "service", "fee", "digital", "gift_card", null. anyOf[2] (Value): null.
     */
    "product_type"?: (("physical" | "service" | "fee" | "digital" | "gift_card" | null | (string & {})) | (null));
    /**
     * Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer.
     * Whole-number quantity; fractional quantities are not supported. Format: int32. anyOf[2]
     * (Value): null.
     */
    "quantity"?: ((number) | (null));
    /**
     * Public event read: whole-number admissions left after sales and payment holds; fractional
     * quantities are not supported. This quantity is bounded by both the tier and event caps.
     * Omitted when neither is capped. anyOf[1] (Value): integer. Public event read: whole-number
     * admissions left after sales and payment holds; fractional quantities are not supported. This
     * quantity is bounded by both the tier and event caps. Omitted when neither is capped. Format:
     * int32. anyOf[2] (Value): null.
     */
    "remaining_quantity"?: ((number) | (null));
    /**
     * Current catalog name of the referenced variant or bundle, or the product name for
     * variant_ids lines. A variant reads as the product name, plus the variant name when the
     * variant is a named option combination. This is the catalog value at read time, not a stored
     * snapshot: checkout resolves it again when a buyer opens the link. Absent on ad-hoc line
     * items and when the catalog object no longer exists. anyOf[1] (Value): string. Current
     * catalog name of the referenced variant or bundle, or the product name for variant_ids lines.
     * A variant reads as the product name, plus the variant name when the variant is a named
     * option combination. This is the catalog value at read time, not a stored snapshot: checkout
     * resolves it again when a buyer opens the link. Absent on ad-hoc line items and when the
     * catalog object no longer exists. anyOf[2] (Value): null.
     */
    "resolved_name"?: ((string) | (null));
    /**
     * Current lowest and highest catalog unit prices among listed variants that can be sold in the
     * line currency. Computed at read time, not stored. Omitted when no listed variant can be
     * sold. anyOf[1] (Value): {@link ProductPriceRangePreviousAttributes}. anyOf[2] (Value): null.
     */
    "resolved_price_range"?: ((ProductPriceRangePreviousAttributes) | (null));
    /**
     * Current catalog unit price of the referenced variant or bundle. For a fixed variant this is
     * the base price that applies below the first quantity price break. This is the catalog value
     * at read time, not a stored snapshot: checkout resolves the price again when a buyer opens
     * the link, so the amount a buyer pays can differ. Absent on ad-hoc line items, variant_ids
     * lines, and when the catalog object no longer exists. anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "resolved_unit_price_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * Unit prices offered as one-tap choices when the buyer sets the price. Use the same currency
     * for the price, bounds, and suggested prices. anyOf[1] (Value): Array of {@link
     * MoneyValuePreviousAttributes}. Unit prices offered as one-tap choices when the buyer sets
     * the price. Use the same currency for the price, bounds, and suggested prices. anyOf[1][]
     * (Value): {@link MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "suggested_unit_price_money_options"?: ((Array<MoneyValuePreviousAttributes>) | (null));
    /**
     * Tax settings for an ad hoc line item. Catalog lines use the catalog's. anyOf[1] (Value):
     * {@link OrderLineItemTaxPreviousAttributes}. anyOf[2] (Value): null.
     */
    "tax"?: ((OrderLineItemTaxPreviousAttributes) | (null));
    /**
     * How the line item is defined. Value enum: "variant", "bundle", "custom_fixed",
     * "custom_variable". anyOf[1] (Value): string. How the line item is defined. Value enum:
     * "variant", "bundle", "custom_fixed", "custom_variable". anyOf[2] (Value): null.
     */
    "type"?: (("variant" | "bundle" | "custom_fixed" | "custom_variable" | (string & {})) | (null));
    /**
     * Price of one unit of a `custom_fixed` line item. anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "unit_price_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * ID of the catalog variant a `variant` line sells. anyOf[1] (Value): string. ID of the
     * catalog variant a `variant` line sells. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX". anyOf[2]
     * (Value): null.
     */
    "variant_id"?: ((string) | (null));
    /**
     * Variant IDs buyers may choose from, in the order offered. Contains 1 to 100 unique, active,
     * sellable variants of one product in one currency. Available only on standard payment links.
     * Mutually exclusive with variant_id, bundle_id, and ad hoc line item fields. anyOf[1]
     * (Value): Array of string. Variant IDs buyers may choose from, in the order offered. Contains
     * 1 to 100 unique, active, sellable variants of one product in one currency. Available only on
     * standard payment links. Mutually exclusive with variant_id, bundle_id, and ad hoc line item
     * fields. minItems: 1. maxItems: 100. uniqueItems: true. anyOf[1][] (Value): string. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX". anyOf[2] (Value):
     * null.
     */
    "variant_ids"?: ((Array<string>) | (null));
})
    & (((Exclude<PaymentLinkLineItemVariantPreviousAttributes & object, readonly unknown[]>)
    | (Exclude<PaymentLinkLineItemBundlePreviousAttributes & object, readonly unknown[]>)
    | (Exclude<PaymentLinkLineItemCustomFixedPreviousAttributes & object, readonly unknown[]>)
    | (Exclude<PaymentLinkLineItemCustomVariablePreviousAttributes & object, readonly unknown[]>)
    | (Record<string, unknown>)));
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
     * Optional whole-number admission capacity across all orders for an event tier; fractional
     * quantities are not supported. Must be at least 1 and cannot exceed
     * event_config.max_total_quantity when the event is capped. Omit for no tier cap; omitting it
     * in a line_items replacement removes an existing cap. Format: int32. minimum: 1.
     */
    "max_total_quantity"?: number;
    /**
     * Highest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Must be
     * greater than zero and greater than or equal to min_unit_price_money. Omit for no maximum.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
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
     * Name of an ad hoc line item. Catalog lines take the catalog name. Surrounding whitespace is
     * trimmed before length validation. A supplied value cannot be blank; use null where clearing
     * is supported. minLength: 1. maxLength: 255.
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
     * Unit prices offered as one-tap choices when the buyer sets the price. Use the same currency
     * for the price, bounds, and suggested prices. [] (Value): {@link MoneyValue}. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
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
     * Price of one unit of a `custom_fixed` line item. amount (Required): integer string. Positive
     * amount in the currency's minor unit, such as cents for USD. Use an integer string (decimal
     * digits), not a floating-point number. Format: int64. minimum: 1. currency (Required):
     * string. Three-letter uppercase ISO 4217 currency code for this amount, such as USD.
     * minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
     */
    "unit_price_money"?: {
        /**
         * Positive amount in the currency's minor unit, such as cents for USD. Use an integer
         * string (decimal digits), not a floating-point number. Format: int64. minimum: 1.
         */
        "amount": `${bigint}`;
        /**
         * Three-letter uppercase ISO 4217 currency code for this amount, such as USD. minLength:
         * 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
         */
        "currency": string;
    };
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
     * Optional whole-number admission capacity across all orders for an event tier; fractional
     * quantities are not supported. Must be at least 1 and cannot exceed
     * event_config.max_total_quantity when the event is capped. Omit for no tier cap; omitting it
     * in a line_items replacement removes an existing cap. Format: int32. minimum: 1.
     */
    "max_total_quantity"?: number;
    /**
     * Highest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Must be
     * greater than zero and greater than or equal to min_unit_price_money. Omit for no maximum.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
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
     * Name of an ad hoc line item. Catalog lines take the catalog name. Surrounding whitespace is
     * trimmed before length validation. A supplied value cannot be blank; use null where clearing
     * is supported. minLength: 1. maxLength: 255.
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
     * Unit prices offered as one-tap choices when the buyer sets the price. Use the same currency
     * for the price, bounds, and suggested prices. [] (Value): {@link MoneyValueInput}. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
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
     * Price of one unit of a `custom_fixed` line item. amount (Required): integer string. Positive
     * amount in the currency's minor unit, such as cents for USD. Use an integer string (decimal
     * digits), not a floating-point number. Format: int64. minimum: 1. currency (Required):
     * string. Three-letter uppercase ISO 4217 currency code for this amount, such as USD.
     * minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
     */
    "unit_price_money"?: {
        /**
         * Positive amount in the currency's minor unit, such as cents for USD. Use an integer
         * string (decimal digits), not a floating-point number. Format: int64. minimum: 1.
         */
        "amount": `${bigint}` | bigint;
        /**
         * Three-letter uppercase ISO 4217 currency code for this amount, such as USD. minLength:
         * 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
         */
        "currency": string;
    };
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
    /** Public event read: true when the tier or event has no capacity left. */
    "is_sold_out"?: boolean;
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
     * Optional whole-number admission capacity across all orders for an event tier; fractional
     * quantities are not supported. Must be at least 1 and cannot exceed
     * event_config.max_total_quantity when the event is capped. Omit for no tier cap; omitting it
     * in a line_items replacement removes an existing cap. Format: int32. minimum: 1.
     */
    "max_total_quantity"?: number;
    /**
     * Highest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Must be
     * greater than zero and greater than or equal to min_unit_price_money. Omit for no maximum.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
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
     * Public event read: whole-number admissions left after sales and payment holds; fractional
     * quantities are not supported. This quantity is bounded by both the tier and event caps.
     * Omitted when neither is capped. Format: int32.
     */
    "remaining_quantity"?: number;
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
     * Unit prices offered as one-tap choices when the buyer sets the price. Use the same currency
     * for the price, bounds, and suggested prices. [] (Value): {@link MoneyValue}. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
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
export type PaymentLinkLineItemVariantPreviousAttributes = ({
    /**
     * Whether the buyer can change the quantity in checkout. anyOf[1] (Value): boolean. Whether
     * the buyer can change the quantity in checkout. anyOf[2] (Value): null.
     */
    "allow_quantity_adjustment"?: ((boolean) | (null));
    /**
     * Whether the buyer sets the unit price. Only `custom_variable` lines allow it. anyOf[1]
     * (Value): boolean. Whether the buyer sets the unit price. Only `custom_variable` lines allow
     * it. anyOf[2] (Value): null.
     */
    "allow_unit_price_adjustment"?: ((boolean) | (null));
    /**
     * ID of the catalog bundle a `bundle` line sells. anyOf[1] (Value): string. ID of the catalog
     * bundle a `bundle` line sells. Example: "bun_01KEZF7C00TQ6S76Z6CVQF5SVN". anyOf[2] (Value):
     * null.
     */
    "bundle_id"?: ((string) | (null));
    /**
     * Variant selected when the page opens and used at resolve when the buyer omits a selection.
     * Must be in variant_ids. Omit it to require a buyer selection. anyOf[1] (Value): string.
     * Variant selected when the page opens and used at resolve when the buyer omits a selection.
     * Must be in variant_ids. Omit it to require a buyer selection. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX". anyOf[2] (Value):
     * null.
     */
    "default_variant_id"?: ((string) | (null));
    /**
     * Description of an ad hoc line item. anyOf[1] (Value): string. Description of an ad hoc line
     * item. anyOf[2] (Value): null.
     */
    "description"?: ((string) | (null));
    /**
     * True when the referenced variant or bundle cannot be sold, or no listed variant in
     * variant_ids can be sold in the line currency. Always false on ad hoc line items. anyOf[1]
     * (Value): boolean. True when the referenced variant or bundle cannot be sold, or no listed
     * variant in variant_ids can be sold in the line currency. Always false on ad hoc line items.
     * anyOf[2] (Value): null.
     */
    "is_catalog_item_unavailable"?: ((boolean) | (null));
    /**
     * Public event read: true when the tier or event has no capacity left. anyOf[1] (Value):
     * boolean. Public event read: true when the tier or event has no capacity left. anyOf[2]
     * (Value): null.
     */
    "is_sold_out"?: ((boolean) | (null));
    /**
     * Keys the resolve override maps. Stable line item key used in checkout overrides. Must not
     * have leading or trailing whitespace. Assigned as line_item_1, line_item_2, and so on when
     * omitted, skipping numbers already used by explicit keys; retained for an existing line item
     * when omitted on update. anyOf[1] (Value): string. Keys the resolve override maps. Stable
     * line item key used in checkout overrides. Must not have leading or trailing whitespace.
     * Assigned as line_item_1, line_item_2, and so on when omitted, skipping numbers already used
     * by explicit keys; retained for an existing line item when omitted on update. anyOf[2]
     * (Value): null.
     */
    "key"?: ((string) | (null));
    /**
     * Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer.
     * Whole-number quantity; fractional quantities are not supported. Format: int32. anyOf[2]
     * (Value): null.
     */
    "max_quantity"?: ((number) | (null));
    /**
     * Optional whole-number admission capacity across all orders for an event tier; fractional
     * quantities are not supported. Must be at least 1 and cannot exceed
     * event_config.max_total_quantity when the event is capped. Omit for no tier cap; omitting it
     * in a line_items replacement removes an existing cap. anyOf[1] (Value): integer. Optional
     * whole-number admission capacity across all orders for an event tier; fractional quantities
     * are not supported. Must be at least 1 and cannot exceed event_config.max_total_quantity when
     * the event is capped. Omit for no tier cap; omitting it in a line_items replacement removes
     * an existing cap. Format: int32. minimum: 1. anyOf[2] (Value): null.
     */
    "max_total_quantity"?: ((number) | (null));
    /**
     * Highest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Must be
     * greater than zero and greater than or equal to min_unit_price_money. Omit for no maximum.
     * anyOf[1] (Value): {@link MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "max_unit_price_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer.
     * Whole-number quantity; fractional quantities are not supported. Format: int32. anyOf[2]
     * (Value): null.
     */
    "min_quantity"?: ((number) | (null));
    /**
     * Lowest unit price the buyer can enter when `allow_unit_price_adjustment` is true. anyOf[1]
     * (Value): {@link MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "min_unit_price_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * Name of an ad hoc line item. Catalog lines take the catalog name. anyOf[1] (Value): string.
     * Name of an ad hoc line item. Catalog lines take the catalog name. anyOf[2] (Value): null.
     */
    "name"?: ((string) | (null));
    /**
     * Unique identifier for this payment link line item, prefixed `plli_`. anyOf[1] (Value):
     * string. Unique identifier for this payment link line item, prefixed `plli_`. Example:
     * "plli_01KEZF7C004V7GVCCNMYYCBAJS". anyOf[2] (Value): null.
     */
    "payment_link_line_item_id"?: ((string) | (null));
    /**
     * Parent catalog context only. The product that the variants in variant_ids belong to. Present
     * only on buyer choice lines; refused on input. anyOf[1] (Value): string. Parent catalog
     * context only. The product that the variants in variant_ids belong to. Present only on buyer
     * choice lines; refused on input. Example: "prod_01KEZF7C00BVSHCNWVH528HB66". anyOf[2]
     * (Value): null.
     */
    "product_id"?: ((string) | (null));
    /**
     * Classification configured on a custom line for ACH debit. Null when unclassified or
     * catalog-backed; catalog lines get their product classification when checkout starts. Value
     * enum: "physical", "service", "fee", "digital", "gift_card", null. anyOf[1] (Value): string.
     * Classification configured on a custom line for ACH debit. Null when unclassified or
     * catalog-backed; catalog lines get their product classification when checkout starts. Value
     * enum: "physical", "service", "fee", "digital", "gift_card", null. anyOf[2] (Value): null.
     */
    "product_type"?: (("physical" | "service" | "fee" | "digital" | "gift_card" | null | (string & {})) | (null));
    /**
     * Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer.
     * Whole-number quantity; fractional quantities are not supported. Format: int32. anyOf[2]
     * (Value): null.
     */
    "quantity"?: ((number) | (null));
    /**
     * Public event read: whole-number admissions left after sales and payment holds; fractional
     * quantities are not supported. This quantity is bounded by both the tier and event caps.
     * Omitted when neither is capped. anyOf[1] (Value): integer. Public event read: whole-number
     * admissions left after sales and payment holds; fractional quantities are not supported. This
     * quantity is bounded by both the tier and event caps. Omitted when neither is capped. Format:
     * int32. anyOf[2] (Value): null.
     */
    "remaining_quantity"?: ((number) | (null));
    /**
     * Current catalog name of the referenced variant or bundle, or the product name for
     * variant_ids lines. A variant reads as the product name, plus the variant name when the
     * variant is a named option combination. This is the catalog value at read time, not a stored
     * snapshot: checkout resolves it again when a buyer opens the link. Absent on ad-hoc line
     * items and when the catalog object no longer exists. anyOf[1] (Value): string. Current
     * catalog name of the referenced variant or bundle, or the product name for variant_ids lines.
     * A variant reads as the product name, plus the variant name when the variant is a named
     * option combination. This is the catalog value at read time, not a stored snapshot: checkout
     * resolves it again when a buyer opens the link. Absent on ad-hoc line items and when the
     * catalog object no longer exists. anyOf[2] (Value): null.
     */
    "resolved_name"?: ((string) | (null));
    /**
     * Current lowest and highest catalog unit prices among listed variants that can be sold in the
     * line currency. Computed at read time, not stored. Omitted when no listed variant can be
     * sold. anyOf[1] (Value): {@link ProductPriceRangePreviousAttributes}. anyOf[2] (Value): null.
     */
    "resolved_price_range"?: ((ProductPriceRangePreviousAttributes) | (null));
    /**
     * Current catalog unit price of the referenced variant or bundle. For a fixed variant this is
     * the base price that applies below the first quantity price break. This is the catalog value
     * at read time, not a stored snapshot: checkout resolves the price again when a buyer opens
     * the link, so the amount a buyer pays can differ. Absent on ad-hoc line items, variant_ids
     * lines, and when the catalog object no longer exists. anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "resolved_unit_price_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * Unit prices offered as one-tap choices when the buyer sets the price. Use the same currency
     * for the price, bounds, and suggested prices. anyOf[1] (Value): Array of {@link
     * MoneyValuePreviousAttributes}. Unit prices offered as one-tap choices when the buyer sets
     * the price. Use the same currency for the price, bounds, and suggested prices. anyOf[1][]
     * (Value): {@link MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "suggested_unit_price_money_options"?: ((Array<MoneyValuePreviousAttributes>) | (null));
    /**
     * Tax settings for an ad hoc line item. Catalog lines use the catalog's. anyOf[1] (Value):
     * {@link OrderLineItemTaxPreviousAttributes}. anyOf[2] (Value): null.
     */
    "tax"?: ((OrderLineItemTaxPreviousAttributes) | (null));
    /**
     * How the line item is defined. Value enum: "variant". anyOf[1] (Value): string. How the line
     * item is defined. Value enum: "variant". anyOf[2] (Value): null.
     */
    "type"?: (("variant" | (string & {})) | (null));
    /**
     * Price of one unit of a `custom_fixed` line item. anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "unit_price_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * ID of the catalog variant a `variant` line sells. anyOf[1] (Value): string. ID of the
     * catalog variant a `variant` line sells. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX". anyOf[2]
     * (Value): null.
     */
    "variant_id"?: ((string) | (null));
    /**
     * Variant IDs buyers may choose from, in the order offered. Contains 1 to 100 unique, active,
     * sellable variants of one product in one currency. Available only on standard payment links.
     * Mutually exclusive with variant_id, bundle_id, and ad hoc line item fields. anyOf[1]
     * (Value): Array of string. Variant IDs buyers may choose from, in the order offered. Contains
     * 1 to 100 unique, active, sellable variants of one product in one currency. Available only on
     * standard payment links. Mutually exclusive with variant_id, bundle_id, and ad hoc line item
     * fields. minItems: 1. maxItems: 100. uniqueItems: true. anyOf[1][] (Value): string. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX". anyOf[2] (Value):
     * null.
     */
    "variant_ids"?: ((Array<string>) | (null));
})
    & (({
    /**
     * Value enum: "variant". anyOf[1] (Value): string. Value enum: "variant". anyOf[2] (Value):
     * null.
     */
    "type"?: (("variant" | (string & {})) | (null));
})
    & (((unknown) | (unknown) | (Record<string, unknown>))));
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
     * purchase to an existing customer. The local part before @ must be at most 64 octets (UTF-8
     * bytes). Format: email. minLength: 1. maxLength: 320. Example: "buyer@example.com".
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
     * All recorded card attempts from this link, including pending attempts and retries. Format:
     * int64.
     */
    "attempted_payment_count": number;
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
     * Recorded failed card attempts from this link. A successful retry does not erase previous
     * failures. Format: int64.
     */
    "failed_payment_count": number;
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
export type PaymentLinkSalesSummaryPreviousAttributes = {
    /**
     * All recorded card attempts from this link, including pending attempts and retries. anyOf[1]
     * (Value): integer. All recorded card attempts from this link, including pending attempts and
     * retries. Format: int64. anyOf[2] (Value): null.
     */
    "attempted_payment_count"?: ((number) | (null));
    /**
     * Tickets for this payment link that are checked in now, counted when the summary is read.
     * Undoing a check-in or voiding a ticket lowers it. 0 for links that have issued no tickets.
     * anyOf[1] (Value): integer. Tickets for this payment link that are checked in now, counted
     * when the summary is read. Undoing a check-in or voiding a ticket lowers it. 0 for links that
     * have issued no tickets. Format: int32. minimum: 0. anyOf[2] (Value): null.
     */
    "checked_in_ticket_count"?: ((number) | (null));
    /**
     * UTC time at which the summary was computed, at second precision. anyOf[1] (Value): string.
     * UTC time at which the summary was computed, at second precision. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     */
    "computed_at"?: ((string) | (null));
    /**
     * Recorded failed card attempts from this link. A successful retry does not erase previous
     * failures. anyOf[1] (Value): integer. Recorded failed card attempts from this link. A
     * successful retry does not erase previous failures. Format: int64. anyOf[2] (Value): null.
     */
    "failed_payment_count"?: ((number) | (null));
    /**
     * Number of orders whose collection has completed, across all currencies, including fully and
     * partially refunded orders. anyOf[1] (Value): integer. Number of orders whose collection has
     * completed, across all currencies, including fully and partially refunded orders. Format:
     * int64. anyOf[2] (Value): null.
     */
    "paid_order_count"?: ((number) | (null));
    /**
     * Gross paid totals in integer minor units, one Money object per currency with paid orders,
     * sorted by currency. Refunds are not subtracted. Empty array when there are no paid orders.
     * anyOf[1] (Value): Array of {@link MoneyValuePreviousAttributes}. Gross paid totals in
     * integer minor units, one Money object per currency with paid orders, sorted by currency.
     * Refunds are not subtracted. Empty array when there are no paid orders. anyOf[1][] (Value):
     * {@link MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "paid_totals"?: ((Array<MoneyValuePreviousAttributes>) | (null));
    /**
     * Refunded totals in integer minor units on the same paid orders as paid_totals. One Money
     * object per currency with paid orders, sorted by currency, including zero when nothing was
     * refunded. Empty array when there are no paid orders. anyOf[1] (Value): Array of {@link
     * MoneyValuePreviousAttributes}. Refunded totals in integer minor units on the same paid
     * orders as paid_totals. One Money object per currency with paid orders, sorted by currency,
     * including zero when nothing was refunded. Empty array when there are no paid orders.
     * anyOf[1][] (Value): {@link MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "refunded_totals"?: ((Array<MoneyValuePreviousAttributes>) | (null));
};
/**
 * Subscription terms shown before an active plan-backed payment link creates a checkout session.
 */
export type PaymentLinkSubscriptionPreview = {
    /**
     * Unit of the billing period the plan charges on by default. Read with
     * `billing_interval_count`. Value enum: "daily", "weekly", "monthly", "yearly".
     */
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
     * quantity is the seat count. Nothing multiplies it. Whole-number quantity; fractional
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
         * The line quantity is the seat count. Nothing multiplies it. Whole-number quantity;
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
            "sales_start_at"?: string;
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
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "buyer_fields"?: ((CheckoutBuyerFieldsPreviousAttributes) | (null));
            "checkout_session_expires_in_seconds"?: ((number) | (null));
            "completed_count"?: ((number) | (null));
            "created_at"?: ((string) | (null));
            "custom_fields"?: ((Array<PaymentLinkCustomFieldPreviousAttributes>) | (null));
            "custom_text"?: ((CheckoutCustomTextConfigPreviousAttributes) | (null));
            "delivery_method_ids"?: ((Array<string>) | (null));
            "description"?: ((string) | (null));
            "donation_max_amount_money"?: ((MoneyValuePreviousAttributes) | (null));
            "donation_min_amount_money"?: ((MoneyValuePreviousAttributes) | (null));
            "donation_suggested_amount_money_options"?: ((Array<MoneyValuePreviousAttributes>) | (null));
            "event_config"?: ((PaymentLinkEventConfigPreviousAttributes) | (null));
            "external_reference_id"?: ((string) | (null));
            "image"?: ((ImageAttachmentPreviousAttributes) | (null));
            "inactive_message"?: ((string) | (null));
            "inventory_routing_source"?: ((InventoryRoutingSourcePreviousAttributes) | (null));
            "legal"?: ((CheckoutLegalConfigPreviousAttributes) | (null));
            "line_items"?: ((Array<PaymentLinkLineItemPreviousAttributes>) | (null));
            "max_completions"?: ((number) | (null));
            "merchant_id"?: ((string) | (null));
            "metadata"?: ((MetadataMap) | (null));
            "name"?: ((string) | (null));
            "payment_link_id"?: ((string) | (null));
            "payment_link_type"?: (("standard" | "donation" | "event" | (string & {})) | (null));
            "payments"?: ((CheckoutPaymentConfigPreviousAttributes) | (null));
            "promotion_config"?: ((CheckoutPromotionConfigPreviousAttributes) | (null));
            "redirects"?: ((CheckoutRedirectsPreviousAttributes) | (null));
            "sales_end_at"?: ((string) | (null));
            "sales_start_at"?: ((string) | (null));
            "sales_summary"?: ((PaymentLinkSalesSummaryPreviousAttributes) | (null));
            "status"?: (("active" | "inactive" | (string & {})) | (null));
            "subscription_plan"?: ((ExpandedSubscriptionPlanSummaryPreviousAttributes) | (null));
            "subscription_plan_id"?: ((string) | (null));
            "tax"?: ((SubscriptionTaxPreviousAttributes) | (null));
            "theme"?: ((ThemeConfigPreviousAttributes) | (null));
            "tip"?: ((CheckoutTipConfigPreviousAttributes) | (null));
            "total_quantity_sold"?: ((number) | (null));
            "updated_at"?: ((string) | (null));
            "url"?: ((string) | (null));
            "version"?: ((number) | (null));
        });
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
            "sales_start_at"?: string;
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
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "buyer_fields"?: ((CheckoutBuyerFieldsPreviousAttributes) | (null));
            "checkout_session_expires_in_seconds"?: ((number) | (null));
            "completed_count"?: ((number) | (null));
            "created_at"?: ((string) | (null));
            "custom_fields"?: ((Array<PaymentLinkCustomFieldPreviousAttributes>) | (null));
            "custom_text"?: ((CheckoutCustomTextConfigPreviousAttributes) | (null));
            "delivery_method_ids"?: ((Array<string>) | (null));
            "description"?: ((string) | (null));
            "donation_max_amount_money"?: ((MoneyValuePreviousAttributes) | (null));
            "donation_min_amount_money"?: ((MoneyValuePreviousAttributes) | (null));
            "donation_suggested_amount_money_options"?: ((Array<MoneyValuePreviousAttributes>) | (null));
            "event_config"?: ((PaymentLinkEventConfigPreviousAttributes) | (null));
            "external_reference_id"?: ((string) | (null));
            "image"?: ((ImageAttachmentPreviousAttributes) | (null));
            "inactive_message"?: ((string) | (null));
            "inventory_routing_source"?: ((InventoryRoutingSourcePreviousAttributes) | (null));
            "legal"?: ((CheckoutLegalConfigPreviousAttributes) | (null));
            "line_items"?: ((Array<PaymentLinkLineItemPreviousAttributes>) | (null));
            "max_completions"?: ((number) | (null));
            "merchant_id"?: ((string) | (null));
            "metadata"?: ((MetadataMap) | (null));
            "name"?: ((string) | (null));
            "payment_link_id"?: ((string) | (null));
            "payment_link_type"?: (("standard" | "donation" | "event" | (string & {})) | (null));
            "payments"?: ((CheckoutPaymentConfigPreviousAttributes) | (null));
            "promotion_config"?: ((CheckoutPromotionConfigPreviousAttributes) | (null));
            "redirects"?: ((CheckoutRedirectsPreviousAttributes) | (null));
            "sales_end_at"?: ((string) | (null));
            "sales_start_at"?: ((string) | (null));
            "sales_summary"?: ((PaymentLinkSalesSummaryPreviousAttributes) | (null));
            "status"?: (("active" | "inactive" | (string & {})) | (null));
            "subscription_plan"?: ((ExpandedSubscriptionPlanSummaryPreviousAttributes) | (null));
            "subscription_plan_id"?: ((string) | (null));
            "tax"?: ((SubscriptionTaxPreviousAttributes) | (null));
            "theme"?: ((ThemeConfigPreviousAttributes) | (null));
            "tip"?: ((CheckoutTipConfigPreviousAttributes) | (null));
            "total_quantity_sold"?: ((number) | (null));
            "updated_at"?: ((string) | (null));
            "url"?: ((string) | (null));
            "version"?: ((number) | (null));
        });
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
     * amount a buyer can give on a donation link. Must be greater than zero and greater than or
     * equal to donation_min_amount_money. Omit on create for no maximum. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     * object.donation_min_amount_money (Optional): {@link MoneyValue}. Smallest amount a buyer can
     * give on a donation link. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code. object.donation_suggested_amount_money_options (Optional): Array of {@link
     * MoneyValue}. Amounts a donation link offers as one-tap choices. Use the same currency for
     * all suggested amounts and both bounds. object.donation_suggested_amount_money_options[]
     * (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus an ISO
     * 4217 currency code. object.event_config (Optional): {@link PaymentLinkEventConfig}. Event
     * details for an `event` link: when and where it takes place and how many tickets it sells.
     * Event settings on an event payment link, such as its date, venue, ticket limit, and ticket
     * emails. object.external_reference_id (Optional): string. Caller-owned identifier for this
     * resource in an external system. maxLength: 255. Example: "warehouse-1842". object.image
     * (Optional): {@link ImageAttachment}. Image shown to buyers with the link. An image attached
     * to a resource, with its display properties and attachment metadata. object.inactive_message
     * (Optional): string. Message to show the buyer when the link is inactive.
     * object.inventory_routing_source (Optional): {@link InventoryRoutingSource}. The inventory
     * location or routing policy that supplies stock for the link's catalog lines. Absent when
     * using the implicit single-Location fallback, which is evaluated again on use. Where an
     * order, payment link, or reservation routes inventory from: a fixed Location, an inventory
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
     * object.sales_start_at (Optional): string. RFC3339 timestamp when buyers can first start a
     * checkout from this link. Stored to nanosecond precision. Before it, resolve fails with
     * ACTION_NOT_ALLOWED and reason sales_not_started. Must be earlier than the link’s sales end,
     * including the event start when no explicit end is set. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.sales_summary (Optional): {@link PaymentLinkSalesSummary}.
     * Present only with expand=sales_summary on GET /v1/payment-links or GET
     * /v1/payment-links/{payment_link_id}. Available to merchant callers, including dashboard
     * sessions and API keys with checkouts.payment_links.read. Uses the same paid-order definition
     * as the merchant sales summary. Paid-order sales totals for a payment link, computed on
     * request. Paid means the order's collection has completed. Fully and partially refunded
     * orders still count, and paid_totals reports the amount collected before refunds. Each order
     * counts once even if it has multiple checkout sessions. object.status (Required): string.
     * Whether the link can start new checkouts. Value enum: "active", "inactive".
     * object.subscription_plan (Optional): {@link ExpandedSubscriptionPlanSummary} or null.
     * Present only when `expand` includes `subscription_plan`; `null` when expanded and there is
     * no related subscription plan. object.subscription_plan.anyOf[1] (Value): {@link
     * ExpandedSubscriptionPlanSummary}. A subscription plan's summary fields, including name,
     * billing interval, currency, and status, returned when the plan is expanded.
     * object.subscription_plan.anyOf[2] (Value): null. object.subscription_plan_id (Optional):
     * string. ID of the subscription plan the link sells. Absent for a link that doesn't sell a
     * subscription. Example: "plan_01KEZF7C004CY5ZR33XST2AASV". object.tax (Optional): {@link
     * CheckoutTaxConfig}. Tax settings for checkouts started from this link. Whether tax is
     * collected for a checkout session or payment link. object.theme (Optional): {@link
     * ThemeConfig}. The title and colors for checkouts started from this link, over your branding
     * settings. Colors and title applied to a payment link's checkout page. object.tip (Optional):
     * {@link CheckoutTipConfig}. Tip options for checkouts started from this link. Tip settings
     * for a checkout: whether tips are enabled, the percent or fixed amount options, the default
     * tip, and custom tips. object.total_quantity_sold (Required): integer. Whole-number quantity;
     * fractional quantities are not supported. Format: int32. object.updated_at (Required):
     * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.url
     * (Required): string. URL buyers open to use the link. object.version (Required): integer.
     * Current version of this resource's owned state. Send it as `expected_version` when changing
     * the resource to reject a stale write. Format: int64. previous_attributes (Optional): object.
     * Previous values of changed top-level fields in data.object, at this delivery's API version.
     * Nested changes include the whole previous top-level value. A value is null when the field
     * was absent before the change. Omitted when Flint did not record the previous state,
     * including synthetic test events. previous_attributes.buyer_fields (Optional): {@link
     * CheckoutBuyerFieldsPreviousAttributes} or null. What checkout asks the buyer for. Each field
     * you leave out uses your checkout settings. previous_attributes.buyer_fields.anyOf[1]
     * (Value): {@link CheckoutBuyerFieldsPreviousAttributes}.
     * previous_attributes.buyer_fields.anyOf[2] (Value): null.
     * previous_attributes.checkout_session_expires_in_seconds (Optional): integer or null. Seconds
     * each checkout session the link starts stays open, from 60 to 86,400. Omit it to use your
     * checkout settings, or 24 hours. It doesn't end the link; use sales_end_at for that.
     * previous_attributes.checkout_session_expires_in_seconds.anyOf[1] (Value): integer. Seconds
     * each checkout session the link starts stays open, from 60 to 86,400. Omit it to use your
     * checkout settings, or 24 hours. It doesn't end the link; use sales_end_at for that. Format:
     * int64. minimum: 60. maximum: 86400.
     * previous_attributes.checkout_session_expires_in_seconds.anyOf[2] (Value): null.
     * previous_attributes.completed_count (Optional): integer or null. Number of paid checkout
     * sessions started from this link. previous_attributes.completed_count.anyOf[1] (Value):
     * integer. Number of paid checkout sessions started from this link. Format: int32.
     * previous_attributes.completed_count.anyOf[2] (Value): null. previous_attributes.created_at
     * (Optional): string or null. RFC3339 timestamp. previous_attributes.created_at.anyOf[1]
     * (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.created_at.anyOf[2] (Value): null. previous_attributes.custom_fields
     * (Optional): Array of {@link PaymentLinkCustomFieldPreviousAttributes} or null. Questions
     * buyers answer before paying. Answers are recorded on the order and checkout session in
     * `custom_field_answers`. previous_attributes.custom_fields.anyOf[1] (Value): Array of {@link
     * PaymentLinkCustomFieldPreviousAttributes}. Questions buyers answer before paying. Answers
     * are recorded on the order and checkout session in `custom_field_answers`.
     * previous_attributes.custom_fields.anyOf[1][] (Value): {@link
     * PaymentLinkCustomFieldPreviousAttributes}. previous_attributes.custom_fields.anyOf[2]
     * (Value): null. previous_attributes.custom_text (Optional): {@link
     * CheckoutCustomTextConfigPreviousAttributes} or null. Custom text for checkouts started from
     * this link. previous_attributes.custom_text.anyOf[1] (Value): {@link
     * CheckoutCustomTextConfigPreviousAttributes}. previous_attributes.custom_text.anyOf[2]
     * (Value): null. previous_attributes.delivery_method_ids (Optional): Array of string or null.
     * Delivery methods the link offers. Empty when the link has none, and then its checkouts offer
     * settings.checkout.default_delivery_method_ids when the order has items to deliver.
     * previous_attributes.delivery_method_ids.anyOf[1] (Value): Array of string. Delivery methods
     * the link offers. Empty when the link has none, and then its checkouts offer
     * settings.checkout.default_delivery_method_ids when the order has items to deliver.
     * previous_attributes.delivery_method_ids.anyOf[1][] (Value): string. Example:
     * "dmet_01KEZF7C00YSG3X2D1TZJ36TM0". previous_attributes.delivery_method_ids.anyOf[2] (Value):
     * null. previous_attributes.description (Optional): string or null. Text about what the link
     * sells, returned to buyers when they open it. previous_attributes.description.anyOf[1]
     * (Value): string. Text about what the link sells, returned to buyers when they open it.
     * previous_attributes.description.anyOf[2] (Value): null.
     * previous_attributes.donation_max_amount_money (Optional): {@link
     * MoneyValuePreviousAttributes} or null. Largest amount a buyer can give on a donation link.
     * Must be greater than zero and greater than or equal to donation_min_amount_money. Omit on
     * create for no maximum. previous_attributes.donation_max_amount_money.anyOf[1] (Value):
     * {@link MoneyValuePreviousAttributes}. previous_attributes.donation_max_amount_money.anyOf[2]
     * (Value): null. previous_attributes.donation_min_amount_money (Optional): {@link
     * MoneyValuePreviousAttributes} or null. Smallest amount a buyer can give on a donation link.
     * previous_attributes.donation_min_amount_money.anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. previous_attributes.donation_min_amount_money.anyOf[2]
     * (Value): null. previous_attributes.donation_suggested_amount_money_options (Optional): Array
     * of {@link MoneyValuePreviousAttributes} or null. Amounts a donation link offers as one-tap
     * choices. Use the same currency for all suggested amounts and both bounds.
     * previous_attributes.donation_suggested_amount_money_options.anyOf[1] (Value): Array of
     * {@link MoneyValuePreviousAttributes}. Amounts a donation link offers as one-tap choices. Use
     * the same currency for all suggested amounts and both bounds.
     * previous_attributes.donation_suggested_amount_money_options.anyOf[1][] (Value): {@link
     * MoneyValuePreviousAttributes}.
     * previous_attributes.donation_suggested_amount_money_options.anyOf[2] (Value): null.
     * previous_attributes.event_config (Optional): {@link
     * PaymentLinkEventConfigPreviousAttributes} or null. Event details for an `event` link: when
     * and where it takes place and how many tickets it sells.
     * previous_attributes.event_config.anyOf[1] (Value): {@link
     * PaymentLinkEventConfigPreviousAttributes}. previous_attributes.event_config.anyOf[2]
     * (Value): null. previous_attributes.external_reference_id (Optional): string or null.
     * Caller-owned identifier for this resource in an external system.
     * previous_attributes.external_reference_id.anyOf[1] (Value): string. Caller-owned identifier
     * for this resource in an external system. maxLength: 255. Example: "warehouse-1842".
     * previous_attributes.external_reference_id.anyOf[2] (Value): null. previous_attributes.image
     * (Optional): {@link ImageAttachmentPreviousAttributes} or null. Image shown to buyers with
     * the link. previous_attributes.image.anyOf[1] (Value): {@link
     * ImageAttachmentPreviousAttributes}. previous_attributes.image.anyOf[2] (Value): null.
     * previous_attributes.inactive_message (Optional): string or null. Message to show the buyer
     * when the link is inactive. previous_attributes.inactive_message.anyOf[1] (Value): string.
     * Message to show the buyer when the link is inactive.
     * previous_attributes.inactive_message.anyOf[2] (Value): null.
     * previous_attributes.inventory_routing_source (Optional): {@link
     * InventoryRoutingSourcePreviousAttributes} or null. The inventory location or routing policy
     * that supplies stock for the link's catalog lines. Absent when using the implicit
     * single-Location fallback, which is evaluated again on use.
     * previous_attributes.inventory_routing_source.anyOf[1] (Value): {@link
     * InventoryRoutingSourcePreviousAttributes}.
     * previous_attributes.inventory_routing_source.anyOf[2] (Value): null.
     * previous_attributes.legal (Optional): {@link CheckoutLegalConfigPreviousAttributes} or null.
     * The terms and policy links checkouts started from this link show the buyer.
     * previous_attributes.legal.anyOf[1] (Value): {@link CheckoutLegalConfigPreviousAttributes}.
     * previous_attributes.legal.anyOf[2] (Value): null. previous_attributes.line_items (Optional):
     * Array of {@link PaymentLinkLineItemPreviousAttributes} or null. What the link sells.
     * previous_attributes.line_items.anyOf[1] (Value): Array of {@link
     * PaymentLinkLineItemPreviousAttributes}. What the link sells.
     * previous_attributes.line_items.anyOf[1][] (Value): {@link
     * PaymentLinkLineItemPreviousAttributes}. previous_attributes.line_items.anyOf[2] (Value):
     * null. previous_attributes.max_completions (Optional): integer or null. Most payments the
     * link accepts, counted by `completed_count`. Absent means no limit. Once the limit is
     * reached, resolving the link fails with a request error. It can't be set below
     * `completed_count`. previous_attributes.max_completions.anyOf[1] (Value): integer. Most
     * payments the link accepts, counted by `completed_count`. Absent means no limit. Once the
     * limit is reached, resolving the link fails with a request error. It can't be set below
     * `completed_count`. Format: int32. previous_attributes.max_completions.anyOf[2] (Value):
     * null. previous_attributes.merchant_id (Optional): string or null. ID of the merchant this
     * resource belongs to. previous_attributes.merchant_id.anyOf[1] (Value): string. ID of the
     * merchant this resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     * previous_attributes.merchant_id.anyOf[2] (Value): null. previous_attributes.metadata
     * (Optional): {@link MetadataMap} or null. Stored caller-owned key-value data. See
     * `MetadataInput` for key, value, and size rules. previous_attributes.metadata.anyOf[1]
     * (Value): {@link MetadataMap}. previous_attributes.metadata.anyOf[2] (Value): null.
     * previous_attributes.name (Optional): string or null. Name of the payment link.
     * previous_attributes.name.anyOf[1] (Value): string. Name of the payment link.
     * previous_attributes.name.anyOf[2] (Value): null. previous_attributes.payment_link_id
     * (Optional): string or null. Unique identifier for this payment link, prefixed `pl_`.
     * previous_attributes.payment_link_id.anyOf[1] (Value): string. Unique identifier for this
     * payment link, prefixed `pl_`. Example: "pl_01KEZF7C007WDMA5P9BPZ8J2AM".
     * previous_attributes.payment_link_id.anyOf[2] (Value): null.
     * previous_attributes.payment_link_type (Optional): string or null. What kind of link this is.
     * Value enum: "standard", "donation", "event". previous_attributes.payment_link_type.anyOf[1]
     * (Value): string. What kind of link this is. Value enum: "standard", "donation", "event".
     * previous_attributes.payment_link_type.anyOf[2] (Value): null. previous_attributes.payments
     * (Optional): {@link CheckoutPaymentConfigPreviousAttributes} or null. Payment options for
     * checkouts started from this link. previous_attributes.payments.anyOf[1] (Value): {@link
     * CheckoutPaymentConfigPreviousAttributes}. previous_attributes.payments.anyOf[2] (Value):
     * null. previous_attributes.promotion_config (Optional): {@link
     * CheckoutPromotionConfigPreviousAttributes} or null. Whether automatic promotions apply to
     * checkouts started from this link and whether buyers can enter promotion codes.
     * previous_attributes.promotion_config.anyOf[1] (Value): {@link
     * CheckoutPromotionConfigPreviousAttributes}. previous_attributes.promotion_config.anyOf[2]
     * (Value): null. previous_attributes.redirects (Optional): {@link
     * CheckoutRedirectsPreviousAttributes} or null. Where checkout sessions started from this
     * payment link send the buyer after payment, cancellation, or expiration.
     * previous_attributes.redirects.anyOf[1] (Value): {@link CheckoutRedirectsPreviousAttributes}.
     * previous_attributes.redirects.anyOf[2] (Value): null. previous_attributes.sales_end_at
     * (Optional): string or null. RFC3339 timestamp after which the link stops starting checkouts
     * and resolve fails with `ACTION_NOT_ALLOWED` and reason `not_offered`. Unset means sales do
     * not end on their own, except that an event link without sales_end_at stops selling at
     * event_config.event_at. A checkout opened before the end can still start payment for up to 15
     * minutes after it. previous_attributes.sales_end_at.anyOf[1] (Value): string. RFC3339
     * timestamp after which the link stops starting checkouts and resolve fails with
     * `ACTION_NOT_ALLOWED` and reason `not_offered`. Unset means sales do not end on their own,
     * except that an event link without sales_end_at stops selling at event_config.event_at. A
     * checkout opened before the end can still start payment for up to 15 minutes after it.
     * Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.sales_end_at.anyOf[2] (Value): null. previous_attributes.sales_start_at
     * (Optional): string or null. RFC3339 timestamp when buyers can first start a checkout from
     * this link. Stored to nanosecond precision. Before it, resolve fails with ACTION_NOT_ALLOWED
     * and reason sales_not_started. Must be earlier than the link’s sales end, including the event
     * start when no explicit end is set. previous_attributes.sales_start_at.anyOf[1] (Value):
     * string. RFC3339 timestamp when buyers can first start a checkout from this link. Stored to
     * nanosecond precision. Before it, resolve fails with ACTION_NOT_ALLOWED and reason
     * sales_not_started. Must be earlier than the link’s sales end, including the event start when
     * no explicit end is set. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.sales_start_at.anyOf[2] (Value): null. previous_attributes.sales_summary
     * (Optional): {@link PaymentLinkSalesSummaryPreviousAttributes} or null. Present only with
     * expand=sales_summary on GET /v1/payment-links or GET /v1/payment-links/{payment_link_id}.
     * Available to merchant callers, including dashboard sessions and API keys with
     * checkouts.payment_links.read. Uses the same paid-order definition as the merchant sales
     * summary. previous_attributes.sales_summary.anyOf[1] (Value): {@link
     * PaymentLinkSalesSummaryPreviousAttributes}. previous_attributes.sales_summary.anyOf[2]
     * (Value): null. previous_attributes.status (Optional): string or null. Whether the link can
     * start new checkouts. Value enum: "active", "inactive". previous_attributes.status.anyOf[1]
     * (Value): string. Whether the link can start new checkouts. Value enum: "active", "inactive".
     * previous_attributes.status.anyOf[2] (Value): null. previous_attributes.subscription_plan
     * (Optional): {@link ExpandedSubscriptionPlanSummaryPreviousAttributes} or null. Present only
     * when `expand` includes `subscription_plan`; `null` when expanded and there is no related
     * subscription plan. previous_attributes.subscription_plan.anyOf[1] (Value): {@link
     * ExpandedSubscriptionPlanSummaryPreviousAttributes}.
     * previous_attributes.subscription_plan.anyOf[2] (Value): null.
     * previous_attributes.subscription_plan_id (Optional): string or null. ID of the subscription
     * plan the link sells. Absent for a link that doesn't sell a subscription.
     * previous_attributes.subscription_plan_id.anyOf[1] (Value): string. ID of the subscription
     * plan the link sells. Absent for a link that doesn't sell a subscription. Example:
     * "plan_01KEZF7C004CY5ZR33XST2AASV". previous_attributes.subscription_plan_id.anyOf[2]
     * (Value): null. previous_attributes.tax (Optional): {@link SubscriptionTaxPreviousAttributes}
     * or null. Tax settings for checkouts started from this link. previous_attributes.tax.anyOf[1]
     * (Value): {@link SubscriptionTaxPreviousAttributes}. previous_attributes.tax.anyOf[2]
     * (Value): null. previous_attributes.theme (Optional): {@link ThemeConfigPreviousAttributes}
     * or null. The title and colors for checkouts started from this link, over your branding
     * settings. previous_attributes.theme.anyOf[1] (Value): {@link ThemeConfigPreviousAttributes}.
     * previous_attributes.theme.anyOf[2] (Value): null. previous_attributes.tip (Optional): {@link
     * CheckoutTipConfigPreviousAttributes} or null. Tip options for checkouts started from this
     * link. previous_attributes.tip.anyOf[1] (Value): {@link CheckoutTipConfigPreviousAttributes}.
     * previous_attributes.tip.anyOf[2] (Value): null. previous_attributes.total_quantity_sold
     * (Optional): integer or null. Whole-number quantity; fractional quantities are not supported.
     * previous_attributes.total_quantity_sold.anyOf[1] (Value): integer. Whole-number quantity;
     * fractional quantities are not supported. Format: int32.
     * previous_attributes.total_quantity_sold.anyOf[2] (Value): null.
     * previous_attributes.updated_at (Optional): string or null. RFC3339 timestamp.
     * previous_attributes.updated_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.updated_at.anyOf[2] (Value):
     * null. previous_attributes.url (Optional): string or null. URL buyers open to use the link.
     * previous_attributes.url.anyOf[1] (Value): string. URL buyers open to use the link.
     * previous_attributes.url.anyOf[2] (Value): null. previous_attributes.version (Optional):
     * integer or null. Current version of this resource's owned state. Send it as
     * `expected_version` when changing the resource to reject a stale write.
     * previous_attributes.version.anyOf[1] (Value): integer. Current version of this resource's
     * owned state. Send it as `expected_version` when changing the resource to reject a stale
     * write. Format: int64. previous_attributes.version.anyOf[2] (Value): null.
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
         * buyer can give on a donation link. Must be greater than zero and greater than or equal
         * to donation_min_amount_money. Omit on create for no maximum. Monetary amount represented
         * as integer minor units plus an ISO 4217 currency code. donation_min_amount_money
         * (Optional): {@link MoneyValue}. Smallest amount a buyer can give on a donation link.
         * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
         * donation_suggested_amount_money_options (Optional): Array of {@link MoneyValue}. Amounts
         * a donation link offers as one-tap choices. Use the same currency for all suggested
         * amounts and both bounds. donation_suggested_amount_money_options[] (Value): {@link
         * MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217
         * currency code. event_config (Optional): {@link PaymentLinkEventConfig}. Event details
         * for an `event` link: when and where it takes place and how many tickets it sells. Event
         * settings on an event payment link, such as its date, venue, ticket limit, and ticket
         * emails. external_reference_id (Optional): string. Caller-owned identifier for this
         * resource in an external system. maxLength: 255. Example: "warehouse-1842". image
         * (Optional): {@link ImageAttachment}. Image shown to buyers with the link. An image
         * attached to a resource, with its display properties and attachment metadata.
         * inactive_message (Optional): string. Message to show the buyer when the link is
         * inactive. inventory_routing_source (Optional): {@link InventoryRoutingSource}. The
         * inventory location or routing policy that supplies stock for the link's catalog lines.
         * Absent when using the implicit single-Location fallback, which is evaluated again on
         * use. Where an order, payment link, or reservation routes inventory from: a fixed
         * Location, an inventory allocation policy, or one policy revision. legal (Optional):
         * {@link LegalSettings}. The terms and policy links checkouts started from this link show
         * the buyer. Legal settings for a checkout: whether buyers must accept terms, and links to
         * the terms, refund policy, shipping policy, and contract. line_items (Optional): Array of
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
         * sales_start_at (Optional): string. RFC3339 timestamp when buyers can first start a
         * checkout from this link. Stored to nanosecond precision. Before it, resolve fails with
         * ACTION_NOT_ALLOWED and reason sales_not_started. Must be earlier than the link’s sales
         * end, including the event start when no explicit end is set. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". sales_summary (Optional): {@link PaymentLinkSalesSummary}.
         * Present only with expand=sales_summary on GET /v1/payment-links or GET
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
         * subscription_plan.anyOf[2] (Value): null. subscription_plan_id (Optional): string. ID of
         * the subscription plan the link sells. Absent for a link that doesn't sell a
         * subscription. Example: "plan_01KEZF7C004CY5ZR33XST2AASV". tax (Optional): {@link
         * CheckoutTaxConfig}. Tax settings for checkouts started from this link. Whether tax is
         * collected for a checkout session or payment link. theme (Optional): {@link ThemeConfig}.
         * The title and colors for checkouts started from this link, over your branding settings.
         * Colors and title applied to a payment link's checkout page. tip (Optional): {@link
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
             * Largest amount a buyer can give on a donation link. Must be greater than zero and
             * greater than or equal to donation_min_amount_money. Omit on create for no maximum.
             * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
             */
            "donation_max_amount_money"?: MoneyValue;
            /**
             * Smallest amount a buyer can give on a donation link. Monetary amount represented as
             * integer minor units plus an ISO 4217 currency code.
             */
            "donation_min_amount_money"?: MoneyValue;
            /**
             * Amounts a donation link offers as one-tap choices. Use the same currency for all
             * suggested amounts and both bounds. [] (Value): {@link MoneyValue}. Monetary amount
             * represented as integer minor units plus an ISO 4217 currency code.
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
             * lines. Absent when using the implicit single-Location fallback, which is evaluated
             * again on use. Where an order, payment link, or reservation routes inventory from: a
             * fixed Location, an inventory allocation policy, or one policy revision.
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
             * RFC3339 timestamp when buyers can first start a checkout from this link. Stored to
             * nanosecond precision. Before it, resolve fails with ACTION_NOT_ALLOWED and reason
             * sales_not_started. Must be earlier than the link’s sales end, including the event
             * start when no explicit end is set. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "sales_start_at"?: string;
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
            /**
             * ID of the subscription plan the link sells. Absent for a link that doesn't sell a
             * subscription. Example: "plan_01KEZF7C004CY5ZR33XST2AASV".
             */
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
         * state, including synthetic test events. buyer_fields (Optional): {@link
         * CheckoutBuyerFieldsPreviousAttributes} or null. What checkout asks the buyer for. Each
         * field you leave out uses your checkout settings. buyer_fields.anyOf[1] (Value): {@link
         * CheckoutBuyerFieldsPreviousAttributes}. buyer_fields.anyOf[2] (Value): null.
         * checkout_session_expires_in_seconds (Optional): integer or null. Seconds each checkout
         * session the link starts stays open, from 60 to 86,400. Omit it to use your checkout
         * settings, or 24 hours. It doesn't end the link; use sales_end_at for that.
         * checkout_session_expires_in_seconds.anyOf[1] (Value): integer. Seconds each checkout
         * session the link starts stays open, from 60 to 86,400. Omit it to use your checkout
         * settings, or 24 hours. It doesn't end the link; use sales_end_at for that. Format:
         * int64. minimum: 60. maximum: 86400. checkout_session_expires_in_seconds.anyOf[2]
         * (Value): null. completed_count (Optional): integer or null. Number of paid checkout
         * sessions started from this link. completed_count.anyOf[1] (Value): integer. Number of
         * paid checkout sessions started from this link. Format: int32. completed_count.anyOf[2]
         * (Value): null. created_at (Optional): string or null. RFC3339 timestamp.
         * created_at.anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". created_at.anyOf[2] (Value): null. custom_fields (Optional):
         * Array of {@link PaymentLinkCustomFieldPreviousAttributes} or null. Questions buyers
         * answer before paying. Answers are recorded on the order and checkout session in
         * `custom_field_answers`. custom_fields.anyOf[1] (Value): Array of {@link
         * PaymentLinkCustomFieldPreviousAttributes}. Questions buyers answer before paying.
         * Answers are recorded on the order and checkout session in `custom_field_answers`.
         * custom_fields.anyOf[1][] (Value): {@link PaymentLinkCustomFieldPreviousAttributes}.
         * custom_fields.anyOf[2] (Value): null. custom_text (Optional): {@link
         * CheckoutCustomTextConfigPreviousAttributes} or null. Custom text for checkouts started
         * from this link. custom_text.anyOf[1] (Value): {@link
         * CheckoutCustomTextConfigPreviousAttributes}. custom_text.anyOf[2] (Value): null.
         * delivery_method_ids (Optional): Array of string or null. Delivery methods the link
         * offers. Empty when the link has none, and then its checkouts offer
         * settings.checkout.default_delivery_method_ids when the order has items to deliver.
         * delivery_method_ids.anyOf[1] (Value): Array of string. Delivery methods the link offers.
         * Empty when the link has none, and then its checkouts offer
         * settings.checkout.default_delivery_method_ids when the order has items to deliver.
         * delivery_method_ids.anyOf[1][] (Value): string. Example:
         * "dmet_01KEZF7C00YSG3X2D1TZJ36TM0". delivery_method_ids.anyOf[2] (Value): null.
         * description (Optional): string or null. Text about what the link sells, returned to
         * buyers when they open it. description.anyOf[1] (Value): string. Text about what the link
         * sells, returned to buyers when they open it. description.anyOf[2] (Value): null.
         * donation_max_amount_money (Optional): {@link MoneyValuePreviousAttributes} or null.
         * Largest amount a buyer can give on a donation link. Must be greater than zero and
         * greater than or equal to donation_min_amount_money. Omit on create for no maximum.
         * donation_max_amount_money.anyOf[1] (Value): {@link MoneyValuePreviousAttributes}.
         * donation_max_amount_money.anyOf[2] (Value): null. donation_min_amount_money (Optional):
         * {@link MoneyValuePreviousAttributes} or null. Smallest amount a buyer can give on a
         * donation link. donation_min_amount_money.anyOf[1] (Value): {@link
         * MoneyValuePreviousAttributes}. donation_min_amount_money.anyOf[2] (Value): null.
         * donation_suggested_amount_money_options (Optional): Array of {@link
         * MoneyValuePreviousAttributes} or null. Amounts a donation link offers as one-tap
         * choices. Use the same currency for all suggested amounts and both bounds.
         * donation_suggested_amount_money_options.anyOf[1] (Value): Array of {@link
         * MoneyValuePreviousAttributes}. Amounts a donation link offers as one-tap choices. Use
         * the same currency for all suggested amounts and both bounds.
         * donation_suggested_amount_money_options.anyOf[1][] (Value): {@link
         * MoneyValuePreviousAttributes}. donation_suggested_amount_money_options.anyOf[2] (Value):
         * null. event_config (Optional): {@link PaymentLinkEventConfigPreviousAttributes} or null.
         * Event details for an `event` link: when and where it takes place and how many tickets it
         * sells. event_config.anyOf[1] (Value): {@link PaymentLinkEventConfigPreviousAttributes}.
         * event_config.anyOf[2] (Value): null. external_reference_id (Optional): string or null.
         * Caller-owned identifier for this resource in an external system.
         * external_reference_id.anyOf[1] (Value): string. Caller-owned identifier for this
         * resource in an external system. maxLength: 255. Example: "warehouse-1842".
         * external_reference_id.anyOf[2] (Value): null. image (Optional): {@link
         * ImageAttachmentPreviousAttributes} or null. Image shown to buyers with the link.
         * image.anyOf[1] (Value): {@link ImageAttachmentPreviousAttributes}. image.anyOf[2]
         * (Value): null. inactive_message (Optional): string or null. Message to show the buyer
         * when the link is inactive. inactive_message.anyOf[1] (Value): string. Message to show
         * the buyer when the link is inactive. inactive_message.anyOf[2] (Value): null.
         * inventory_routing_source (Optional): {@link InventoryRoutingSourcePreviousAttributes} or
         * null. The inventory location or routing policy that supplies stock for the link's
         * catalog lines. Absent when using the implicit single-Location fallback, which is
         * evaluated again on use. inventory_routing_source.anyOf[1] (Value): {@link
         * InventoryRoutingSourcePreviousAttributes}. inventory_routing_source.anyOf[2] (Value):
         * null. legal (Optional): {@link CheckoutLegalConfigPreviousAttributes} or null. The terms
         * and policy links checkouts started from this link show the buyer. legal.anyOf[1]
         * (Value): {@link CheckoutLegalConfigPreviousAttributes}. legal.anyOf[2] (Value): null.
         * line_items (Optional): Array of {@link PaymentLinkLineItemPreviousAttributes} or null.
         * What the link sells. line_items.anyOf[1] (Value): Array of {@link
         * PaymentLinkLineItemPreviousAttributes}. What the link sells. line_items.anyOf[1][]
         * (Value): {@link PaymentLinkLineItemPreviousAttributes}. line_items.anyOf[2] (Value):
         * null. max_completions (Optional): integer or null. Most payments the link accepts,
         * counted by `completed_count`. Absent means no limit. Once the limit is reached,
         * resolving the link fails with a request error. It can't be set below `completed_count`.
         * max_completions.anyOf[1] (Value): integer. Most payments the link accepts, counted by
         * `completed_count`. Absent means no limit. Once the limit is reached, resolving the link
         * fails with a request error. It can't be set below `completed_count`. Format: int32.
         * max_completions.anyOf[2] (Value): null. merchant_id (Optional): string or null. ID of
         * the merchant this resource belongs to. merchant_id.anyOf[1] (Value): string. ID of the
         * merchant this resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
         * merchant_id.anyOf[2] (Value): null. metadata (Optional): {@link MetadataMap} or null.
         * Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules.
         * metadata.anyOf[1] (Value): {@link MetadataMap}. metadata.anyOf[2] (Value): null. name
         * (Optional): string or null. Name of the payment link. name.anyOf[1] (Value): string.
         * Name of the payment link. name.anyOf[2] (Value): null. payment_link_id (Optional):
         * string or null. Unique identifier for this payment link, prefixed `pl_`.
         * payment_link_id.anyOf[1] (Value): string. Unique identifier for this payment link,
         * prefixed `pl_`. Example: "pl_01KEZF7C007WDMA5P9BPZ8J2AM". payment_link_id.anyOf[2]
         * (Value): null. payment_link_type (Optional): string or null. What kind of link this is.
         * Value enum: "standard", "donation", "event". payment_link_type.anyOf[1] (Value): string.
         * What kind of link this is. Value enum: "standard", "donation", "event".
         * payment_link_type.anyOf[2] (Value): null. payments (Optional): {@link
         * CheckoutPaymentConfigPreviousAttributes} or null. Payment options for checkouts started
         * from this link. payments.anyOf[1] (Value): {@link
         * CheckoutPaymentConfigPreviousAttributes}. payments.anyOf[2] (Value): null.
         * promotion_config (Optional): {@link CheckoutPromotionConfigPreviousAttributes} or null.
         * Whether automatic promotions apply to checkouts started from this link and whether
         * buyers can enter promotion codes. promotion_config.anyOf[1] (Value): {@link
         * CheckoutPromotionConfigPreviousAttributes}. promotion_config.anyOf[2] (Value): null.
         * redirects (Optional): {@link CheckoutRedirectsPreviousAttributes} or null. Where
         * checkout sessions started from this payment link send the buyer after payment,
         * cancellation, or expiration. redirects.anyOf[1] (Value): {@link
         * CheckoutRedirectsPreviousAttributes}. redirects.anyOf[2] (Value): null. sales_end_at
         * (Optional): string or null. RFC3339 timestamp after which the link stops starting
         * checkouts and resolve fails with `ACTION_NOT_ALLOWED` and reason `not_offered`. Unset
         * means sales do not end on their own, except that an event link without sales_end_at
         * stops selling at event_config.event_at. A checkout opened before the end can still start
         * payment for up to 15 minutes after it. sales_end_at.anyOf[1] (Value): string. RFC3339
         * timestamp after which the link stops starting checkouts and resolve fails with
         * `ACTION_NOT_ALLOWED` and reason `not_offered`. Unset means sales do not end on their
         * own, except that an event link without sales_end_at stops selling at
         * event_config.event_at. A checkout opened before the end can still start payment for up
         * to 15 minutes after it. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * sales_end_at.anyOf[2] (Value): null. sales_start_at (Optional): string or null. RFC3339
         * timestamp when buyers can first start a checkout from this link. Stored to nanosecond
         * precision. Before it, resolve fails with ACTION_NOT_ALLOWED and reason
         * sales_not_started. Must be earlier than the link’s sales end, including the event start
         * when no explicit end is set. sales_start_at.anyOf[1] (Value): string. RFC3339 timestamp
         * when buyers can first start a checkout from this link. Stored to nanosecond precision.
         * Before it, resolve fails with ACTION_NOT_ALLOWED and reason sales_not_started. Must be
         * earlier than the link’s sales end, including the event start when no explicit end is
         * set. Format: date-time. Example: "2026-08-02T16:00:00Z". sales_start_at.anyOf[2]
         * (Value): null. sales_summary (Optional): {@link
         * PaymentLinkSalesSummaryPreviousAttributes} or null. Present only with
         * expand=sales_summary on GET /v1/payment-links or GET
         * /v1/payment-links/{payment_link_id}. Available to merchant callers, including dashboard
         * sessions and API keys with checkouts.payment_links.read. Uses the same paid-order
         * definition as the merchant sales summary. sales_summary.anyOf[1] (Value): {@link
         * PaymentLinkSalesSummaryPreviousAttributes}. sales_summary.anyOf[2] (Value): null. status
         * (Optional): string or null. Whether the link can start new checkouts. Value enum:
         * "active", "inactive". status.anyOf[1] (Value): string. Whether the link can start new
         * checkouts. Value enum: "active", "inactive". status.anyOf[2] (Value): null.
         * subscription_plan (Optional): {@link ExpandedSubscriptionPlanSummaryPreviousAttributes}
         * or null. Present only when `expand` includes `subscription_plan`; `null` when expanded
         * and there is no related subscription plan. subscription_plan.anyOf[1] (Value): {@link
         * ExpandedSubscriptionPlanSummaryPreviousAttributes}. subscription_plan.anyOf[2] (Value):
         * null. subscription_plan_id (Optional): string or null. ID of the subscription plan the
         * link sells. Absent for a link that doesn't sell a subscription.
         * subscription_plan_id.anyOf[1] (Value): string. ID of the subscription plan the link
         * sells. Absent for a link that doesn't sell a subscription. Example:
         * "plan_01KEZF7C004CY5ZR33XST2AASV". subscription_plan_id.anyOf[2] (Value): null. tax
         * (Optional): {@link SubscriptionTaxPreviousAttributes} or null. Tax settings for
         * checkouts started from this link. tax.anyOf[1] (Value): {@link
         * SubscriptionTaxPreviousAttributes}. tax.anyOf[2] (Value): null. theme (Optional): {@link
         * ThemeConfigPreviousAttributes} or null. The title and colors for checkouts started from
         * this link, over your branding settings. theme.anyOf[1] (Value): {@link
         * ThemeConfigPreviousAttributes}. theme.anyOf[2] (Value): null. tip (Optional): {@link
         * CheckoutTipConfigPreviousAttributes} or null. Tip options for checkouts started from
         * this link. tip.anyOf[1] (Value): {@link CheckoutTipConfigPreviousAttributes}.
         * tip.anyOf[2] (Value): null. total_quantity_sold (Optional): integer or null.
         * Whole-number quantity; fractional quantities are not supported.
         * total_quantity_sold.anyOf[1] (Value): integer. Whole-number quantity; fractional
         * quantities are not supported. Format: int32. total_quantity_sold.anyOf[2] (Value): null.
         * updated_at (Optional): string or null. RFC3339 timestamp. updated_at.anyOf[1] (Value):
         * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * updated_at.anyOf[2] (Value): null. url (Optional): string or null. URL buyers open to
         * use the link. url.anyOf[1] (Value): string. URL buyers open to use the link.
         * url.anyOf[2] (Value): null. version (Optional): integer or null. Current version of this
         * resource's owned state. Send it as `expected_version` when changing the resource to
         * reject a stale write. version.anyOf[1] (Value): integer. Current version of this
         * resource's owned state. Send it as `expected_version` when changing the resource to
         * reject a stale write. Format: int64. version.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * What checkout asks the buyer for. Each field you leave out uses your checkout
             * settings. anyOf[1] (Value): {@link CheckoutBuyerFieldsPreviousAttributes}. anyOf[2]
             * (Value): null.
             */
            "buyer_fields"?: ((CheckoutBuyerFieldsPreviousAttributes) | (null));
            /**
             * Seconds each checkout session the link starts stays open, from 60 to 86,400. Omit it
             * to use your checkout settings, or 24 hours. It doesn't end the link; use
             * sales_end_at for that. anyOf[1] (Value): integer. Seconds each checkout session the
             * link starts stays open, from 60 to 86,400. Omit it to use your checkout settings, or
             * 24 hours. It doesn't end the link; use sales_end_at for that. Format: int64.
             * minimum: 60. maximum: 86400. anyOf[2] (Value): null.
             */
            "checkout_session_expires_in_seconds"?: ((number) | (null));
            /**
             * Number of paid checkout sessions started from this link. anyOf[1] (Value): integer.
             * Number of paid checkout sessions started from this link. Format: int32. anyOf[2]
             * (Value): null.
             */
            "completed_count"?: ((number) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * Questions buyers answer before paying. Answers are recorded on the order and
             * checkout session in `custom_field_answers`. anyOf[1] (Value): Array of {@link
             * PaymentLinkCustomFieldPreviousAttributes}. Questions buyers answer before paying.
             * Answers are recorded on the order and checkout session in `custom_field_answers`.
             * anyOf[1][] (Value): {@link PaymentLinkCustomFieldPreviousAttributes}. anyOf[2]
             * (Value): null.
             */
            "custom_fields"?: ((Array<PaymentLinkCustomFieldPreviousAttributes>) | (null));
            /**
             * Custom text for checkouts started from this link. anyOf[1] (Value): {@link
             * CheckoutCustomTextConfigPreviousAttributes}. anyOf[2] (Value): null.
             */
            "custom_text"?: ((CheckoutCustomTextConfigPreviousAttributes) | (null));
            /**
             * Delivery methods the link offers. Empty when the link has none, and then its
             * checkouts offer settings.checkout.default_delivery_method_ids when the order has
             * items to deliver. anyOf[1] (Value): Array of string. Delivery methods the link
             * offers. Empty when the link has none, and then its checkouts offer
             * settings.checkout.default_delivery_method_ids when the order has items to deliver.
             * anyOf[1][] (Value): string. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0". anyOf[2]
             * (Value): null.
             */
            "delivery_method_ids"?: ((Array<string>) | (null));
            /**
             * Text about what the link sells, returned to buyers when they open it. anyOf[1]
             * (Value): string. Text about what the link sells, returned to buyers when they open
             * it. anyOf[2] (Value): null.
             */
            "description"?: ((string) | (null));
            /**
             * Largest amount a buyer can give on a donation link. Must be greater than zero and
             * greater than or equal to donation_min_amount_money. Omit on create for no maximum.
             * anyOf[1] (Value): {@link MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
             */
            "donation_max_amount_money"?: ((MoneyValuePreviousAttributes) | (null));
            /**
             * Smallest amount a buyer can give on a donation link. anyOf[1] (Value): {@link
             * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
             */
            "donation_min_amount_money"?: ((MoneyValuePreviousAttributes) | (null));
            /**
             * Amounts a donation link offers as one-tap choices. Use the same currency for all
             * suggested amounts and both bounds. anyOf[1] (Value): Array of {@link
             * MoneyValuePreviousAttributes}. Amounts a donation link offers as one-tap choices.
             * Use the same currency for all suggested amounts and both bounds. anyOf[1][] (Value):
             * {@link MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
             */
            "donation_suggested_amount_money_options"?: ((Array<MoneyValuePreviousAttributes>) | (null));
            /**
             * Event details for an `event` link: when and where it takes place and how many
             * tickets it sells. anyOf[1] (Value): {@link
             * PaymentLinkEventConfigPreviousAttributes}. anyOf[2] (Value): null.
             */
            "event_config"?: ((PaymentLinkEventConfigPreviousAttributes) | (null));
            /**
             * Caller-owned identifier for this resource in an external system. anyOf[1] (Value):
             * string. Caller-owned identifier for this resource in an external system. maxLength:
             * 255. Example: "warehouse-1842". anyOf[2] (Value): null.
             */
            "external_reference_id"?: ((string) | (null));
            /**
             * Image shown to buyers with the link. anyOf[1] (Value): {@link
             * ImageAttachmentPreviousAttributes}. anyOf[2] (Value): null.
             */
            "image"?: ((ImageAttachmentPreviousAttributes) | (null));
            /**
             * Message to show the buyer when the link is inactive. anyOf[1] (Value): string.
             * Message to show the buyer when the link is inactive. anyOf[2] (Value): null.
             */
            "inactive_message"?: ((string) | (null));
            /**
             * The inventory location or routing policy that supplies stock for the link's catalog
             * lines. Absent when using the implicit single-Location fallback, which is evaluated
             * again on use. anyOf[1] (Value): {@link InventoryRoutingSourcePreviousAttributes}.
             * anyOf[2] (Value): null.
             */
            "inventory_routing_source"?: ((InventoryRoutingSourcePreviousAttributes) | (null));
            /**
             * The terms and policy links checkouts started from this link show the buyer. anyOf[1]
             * (Value): {@link CheckoutLegalConfigPreviousAttributes}. anyOf[2] (Value): null.
             */
            "legal"?: ((CheckoutLegalConfigPreviousAttributes) | (null));
            /**
             * What the link sells. anyOf[1] (Value): Array of {@link
             * PaymentLinkLineItemPreviousAttributes}. What the link sells. anyOf[1][] (Value):
             * {@link PaymentLinkLineItemPreviousAttributes}. anyOf[2] (Value): null.
             */
            "line_items"?: ((Array<PaymentLinkLineItemPreviousAttributes>) | (null));
            /**
             * Most payments the link accepts, counted by `completed_count`. Absent means no limit.
             * Once the limit is reached, resolving the link fails with a request error. It can't
             * be set below `completed_count`. anyOf[1] (Value): integer. Most payments the link
             * accepts, counted by `completed_count`. Absent means no limit. Once the limit is
             * reached, resolving the link fails with a request error. It can't be set below
             * `completed_count`. Format: int32. anyOf[2] (Value): null.
             */
            "max_completions"?: ((number) | (null));
            /**
             * ID of the merchant this resource belongs to. anyOf[1] (Value): string. ID of the
             * merchant this resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             * anyOf[2] (Value): null.
             */
            "merchant_id"?: ((string) | (null));
            /**
             * Stored caller-owned key-value data. See `MetadataInput` for key, value, and size
             * rules. anyOf[1] (Value): {@link MetadataMap}. anyOf[2] (Value): null.
             */
            "metadata"?: ((MetadataMap) | (null));
            /**
             * Name of the payment link. anyOf[1] (Value): string. Name of the payment link.
             * anyOf[2] (Value): null.
             */
            "name"?: ((string) | (null));
            /**
             * Unique identifier for this payment link, prefixed `pl_`. anyOf[1] (Value): string.
             * Unique identifier for this payment link, prefixed `pl_`. Example:
             * "pl_01KEZF7C007WDMA5P9BPZ8J2AM". anyOf[2] (Value): null.
             */
            "payment_link_id"?: ((string) | (null));
            /**
             * What kind of link this is. Value enum: "standard", "donation", "event". anyOf[1]
             * (Value): string. What kind of link this is. Value enum: "standard", "donation",
             * "event". anyOf[2] (Value): null.
             */
            "payment_link_type"?: (("standard" | "donation" | "event" | (string & {})) | (null));
            /**
             * Payment options for checkouts started from this link. anyOf[1] (Value): {@link
             * CheckoutPaymentConfigPreviousAttributes}. anyOf[2] (Value): null.
             */
            "payments"?: ((CheckoutPaymentConfigPreviousAttributes) | (null));
            /**
             * Whether automatic promotions apply to checkouts started from this link and whether
             * buyers can enter promotion codes. anyOf[1] (Value): {@link
             * CheckoutPromotionConfigPreviousAttributes}. anyOf[2] (Value): null.
             */
            "promotion_config"?: ((CheckoutPromotionConfigPreviousAttributes) | (null));
            /**
             * Where checkout sessions started from this payment link send the buyer after payment,
             * cancellation, or expiration. anyOf[1] (Value): {@link
             * CheckoutRedirectsPreviousAttributes}. anyOf[2] (Value): null.
             */
            "redirects"?: ((CheckoutRedirectsPreviousAttributes) | (null));
            /**
             * RFC3339 timestamp after which the link stops starting checkouts and resolve fails
             * with `ACTION_NOT_ALLOWED` and reason `not_offered`. Unset means sales do not end on
             * their own, except that an event link without sales_end_at stops selling at
             * event_config.event_at. A checkout opened before the end can still start payment for
             * up to 15 minutes after it. anyOf[1] (Value): string. RFC3339 timestamp after which
             * the link stops starting checkouts and resolve fails with `ACTION_NOT_ALLOWED` and
             * reason `not_offered`. Unset means sales do not end on their own, except that an
             * event link without sales_end_at stops selling at event_config.event_at. A checkout
             * opened before the end can still start payment for up to 15 minutes after it. Format:
             * date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "sales_end_at"?: ((string) | (null));
            /**
             * RFC3339 timestamp when buyers can first start a checkout from this link. Stored to
             * nanosecond precision. Before it, resolve fails with ACTION_NOT_ALLOWED and reason
             * sales_not_started. Must be earlier than the link’s sales end, including the event
             * start when no explicit end is set. anyOf[1] (Value): string. RFC3339 timestamp when
             * buyers can first start a checkout from this link. Stored to nanosecond precision.
             * Before it, resolve fails with ACTION_NOT_ALLOWED and reason sales_not_started. Must
             * be earlier than the link’s sales end, including the event start when no explicit end
             * is set. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "sales_start_at"?: ((string) | (null));
            /**
             * Present only with expand=sales_summary on GET /v1/payment-links or GET
             * /v1/payment-links/{payment_link_id}. Available to merchant callers, including
             * dashboard sessions and API keys with checkouts.payment_links.read. Uses the same
             * paid-order definition as the merchant sales summary. anyOf[1] (Value): {@link
             * PaymentLinkSalesSummaryPreviousAttributes}. anyOf[2] (Value): null.
             */
            "sales_summary"?: ((PaymentLinkSalesSummaryPreviousAttributes) | (null));
            /**
             * Whether the link can start new checkouts. Value enum: "active", "inactive". anyOf[1]
             * (Value): string. Whether the link can start new checkouts. Value enum: "active",
             * "inactive". anyOf[2] (Value): null.
             */
            "status"?: (("active" | "inactive" | (string & {})) | (null));
            /**
             * Present only when `expand` includes `subscription_plan`; `null` when expanded and
             * there is no related subscription plan. anyOf[1] (Value): {@link
             * ExpandedSubscriptionPlanSummaryPreviousAttributes}. anyOf[2] (Value): null.
             */
            "subscription_plan"?: ((ExpandedSubscriptionPlanSummaryPreviousAttributes) | (null));
            /**
             * ID of the subscription plan the link sells. Absent for a link that doesn't sell a
             * subscription. anyOf[1] (Value): string. ID of the subscription plan the link sells.
             * Absent for a link that doesn't sell a subscription. Example:
             * "plan_01KEZF7C004CY5ZR33XST2AASV". anyOf[2] (Value): null.
             */
            "subscription_plan_id"?: ((string) | (null));
            /**
             * Tax settings for checkouts started from this link. anyOf[1] (Value): {@link
             * SubscriptionTaxPreviousAttributes}. anyOf[2] (Value): null.
             */
            "tax"?: ((SubscriptionTaxPreviousAttributes) | (null));
            /**
             * The title and colors for checkouts started from this link, over your branding
             * settings. anyOf[1] (Value): {@link ThemeConfigPreviousAttributes}. anyOf[2] (Value):
             * null.
             */
            "theme"?: ((ThemeConfigPreviousAttributes) | (null));
            /**
             * Tip options for checkouts started from this link. anyOf[1] (Value): {@link
             * CheckoutTipConfigPreviousAttributes}. anyOf[2] (Value): null.
             */
            "tip"?: ((CheckoutTipConfigPreviousAttributes) | (null));
            /**
             * Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value):
             * integer. Whole-number quantity; fractional quantities are not supported. Format:
             * int32. anyOf[2] (Value): null.
             */
            "total_quantity_sold"?: ((number) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * URL buyers open to use the link. anyOf[1] (Value): string. URL buyers open to use
             * the link. anyOf[2] (Value): null.
             */
            "url"?: ((string) | (null));
            /**
             * Current version of this resource's owned state. Send it as `expected_version` when
             * changing the resource to reject a stale write. anyOf[1] (Value): integer. Current
             * version of this resource's owned state. Send it as `expected_version` when changing
             * the resource to reject a stale write. Format: int64. anyOf[2] (Value): null.
             */
            "version"?: ((number) | (null));
        });
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
     * amount a buyer can give on a donation link. Must be greater than zero and greater than or
     * equal to donation_min_amount_money. Omit on create for no maximum. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     * object.donation_min_amount_money (Optional): {@link MoneyValue}. Smallest amount a buyer can
     * give on a donation link. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code. object.donation_suggested_amount_money_options (Optional): Array of {@link
     * MoneyValue}. Amounts a donation link offers as one-tap choices. Use the same currency for
     * all suggested amounts and both bounds. object.donation_suggested_amount_money_options[]
     * (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus an ISO
     * 4217 currency code. object.event_config (Optional): {@link PaymentLinkEventConfig}. Event
     * details for an `event` link: when and where it takes place and how many tickets it sells.
     * Event settings on an event payment link, such as its date, venue, ticket limit, and ticket
     * emails. object.external_reference_id (Optional): string. Caller-owned identifier for this
     * resource in an external system. maxLength: 255. Example: "warehouse-1842". object.image
     * (Optional): {@link ImageAttachment}. Image shown to buyers with the link. An image attached
     * to a resource, with its display properties and attachment metadata. object.inactive_message
     * (Optional): string. Message to show the buyer when the link is inactive.
     * object.inventory_routing_source (Optional): {@link InventoryRoutingSource}. The inventory
     * location or routing policy that supplies stock for the link's catalog lines. Absent when
     * using the implicit single-Location fallback, which is evaluated again on use. Where an
     * order, payment link, or reservation routes inventory from: a fixed Location, an inventory
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
     * object.sales_start_at (Optional): string. RFC3339 timestamp when buyers can first start a
     * checkout from this link. Stored to nanosecond precision. Before it, resolve fails with
     * ACTION_NOT_ALLOWED and reason sales_not_started. Must be earlier than the link’s sales end,
     * including the event start when no explicit end is set. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.sales_summary (Optional): {@link PaymentLinkSalesSummary}.
     * Present only with expand=sales_summary on GET /v1/payment-links or GET
     * /v1/payment-links/{payment_link_id}. Available to merchant callers, including dashboard
     * sessions and API keys with checkouts.payment_links.read. Uses the same paid-order definition
     * as the merchant sales summary. Paid-order sales totals for a payment link, computed on
     * request. Paid means the order's collection has completed. Fully and partially refunded
     * orders still count, and paid_totals reports the amount collected before refunds. Each order
     * counts once even if it has multiple checkout sessions. object.status (Required): string.
     * Whether the link can start new checkouts. Value enum: "active", "inactive".
     * object.subscription_plan (Optional): {@link ExpandedSubscriptionPlanSummary} or null.
     * Present only when `expand` includes `subscription_plan`; `null` when expanded and there is
     * no related subscription plan. object.subscription_plan.anyOf[1] (Value): {@link
     * ExpandedSubscriptionPlanSummary}. A subscription plan's summary fields, including name,
     * billing interval, currency, and status, returned when the plan is expanded.
     * object.subscription_plan.anyOf[2] (Value): null. object.subscription_plan_id (Optional):
     * string. ID of the subscription plan the link sells. Absent for a link that doesn't sell a
     * subscription. Example: "plan_01KEZF7C004CY5ZR33XST2AASV". object.tax (Optional): {@link
     * CheckoutTaxConfig}. Tax settings for checkouts started from this link. Whether tax is
     * collected for a checkout session or payment link. object.theme (Optional): {@link
     * ThemeConfig}. The title and colors for checkouts started from this link, over your branding
     * settings. Colors and title applied to a payment link's checkout page. object.tip (Optional):
     * {@link CheckoutTipConfig}. Tip options for checkouts started from this link. Tip settings
     * for a checkout: whether tips are enabled, the percent or fixed amount options, the default
     * tip, and custom tips. object.total_quantity_sold (Required): integer. Whole-number quantity;
     * fractional quantities are not supported. Format: int32. object.updated_at (Required):
     * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.url
     * (Required): string. URL buyers open to use the link. object.version (Required): integer.
     * Current version of this resource's owned state. Send it as `expected_version` when changing
     * the resource to reject a stale write. Format: int64. previous_attributes (Optional): object.
     * Previous values of changed top-level fields in data.object, at this delivery's API version.
     * Nested changes include the whole previous top-level value. A value is null when the field
     * was absent before the change. Omitted when Flint did not record the previous state,
     * including synthetic test events. previous_attributes.buyer_fields (Optional): {@link
     * CheckoutBuyerFieldsPreviousAttributes} or null. What checkout asks the buyer for. Each field
     * you leave out uses your checkout settings. previous_attributes.buyer_fields.anyOf[1]
     * (Value): {@link CheckoutBuyerFieldsPreviousAttributes}.
     * previous_attributes.buyer_fields.anyOf[2] (Value): null.
     * previous_attributes.checkout_session_expires_in_seconds (Optional): integer or null. Seconds
     * each checkout session the link starts stays open, from 60 to 86,400. Omit it to use your
     * checkout settings, or 24 hours. It doesn't end the link; use sales_end_at for that.
     * previous_attributes.checkout_session_expires_in_seconds.anyOf[1] (Value): integer. Seconds
     * each checkout session the link starts stays open, from 60 to 86,400. Omit it to use your
     * checkout settings, or 24 hours. It doesn't end the link; use sales_end_at for that. Format:
     * int64. minimum: 60. maximum: 86400.
     * previous_attributes.checkout_session_expires_in_seconds.anyOf[2] (Value): null.
     * previous_attributes.completed_count (Optional): integer or null. Number of paid checkout
     * sessions started from this link. previous_attributes.completed_count.anyOf[1] (Value):
     * integer. Number of paid checkout sessions started from this link. Format: int32.
     * previous_attributes.completed_count.anyOf[2] (Value): null. previous_attributes.created_at
     * (Optional): string or null. RFC3339 timestamp. previous_attributes.created_at.anyOf[1]
     * (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.created_at.anyOf[2] (Value): null. previous_attributes.custom_fields
     * (Optional): Array of {@link PaymentLinkCustomFieldPreviousAttributes} or null. Questions
     * buyers answer before paying. Answers are recorded on the order and checkout session in
     * `custom_field_answers`. previous_attributes.custom_fields.anyOf[1] (Value): Array of {@link
     * PaymentLinkCustomFieldPreviousAttributes}. Questions buyers answer before paying. Answers
     * are recorded on the order and checkout session in `custom_field_answers`.
     * previous_attributes.custom_fields.anyOf[1][] (Value): {@link
     * PaymentLinkCustomFieldPreviousAttributes}. previous_attributes.custom_fields.anyOf[2]
     * (Value): null. previous_attributes.custom_text (Optional): {@link
     * CheckoutCustomTextConfigPreviousAttributes} or null. Custom text for checkouts started from
     * this link. previous_attributes.custom_text.anyOf[1] (Value): {@link
     * CheckoutCustomTextConfigPreviousAttributes}. previous_attributes.custom_text.anyOf[2]
     * (Value): null. previous_attributes.delivery_method_ids (Optional): Array of string or null.
     * Delivery methods the link offers. Empty when the link has none, and then its checkouts offer
     * settings.checkout.default_delivery_method_ids when the order has items to deliver.
     * previous_attributes.delivery_method_ids.anyOf[1] (Value): Array of string. Delivery methods
     * the link offers. Empty when the link has none, and then its checkouts offer
     * settings.checkout.default_delivery_method_ids when the order has items to deliver.
     * previous_attributes.delivery_method_ids.anyOf[1][] (Value): string. Example:
     * "dmet_01KEZF7C00YSG3X2D1TZJ36TM0". previous_attributes.delivery_method_ids.anyOf[2] (Value):
     * null. previous_attributes.description (Optional): string or null. Text about what the link
     * sells, returned to buyers when they open it. previous_attributes.description.anyOf[1]
     * (Value): string. Text about what the link sells, returned to buyers when they open it.
     * previous_attributes.description.anyOf[2] (Value): null.
     * previous_attributes.donation_max_amount_money (Optional): {@link
     * MoneyValuePreviousAttributes} or null. Largest amount a buyer can give on a donation link.
     * Must be greater than zero and greater than or equal to donation_min_amount_money. Omit on
     * create for no maximum. previous_attributes.donation_max_amount_money.anyOf[1] (Value):
     * {@link MoneyValuePreviousAttributes}. previous_attributes.donation_max_amount_money.anyOf[2]
     * (Value): null. previous_attributes.donation_min_amount_money (Optional): {@link
     * MoneyValuePreviousAttributes} or null. Smallest amount a buyer can give on a donation link.
     * previous_attributes.donation_min_amount_money.anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. previous_attributes.donation_min_amount_money.anyOf[2]
     * (Value): null. previous_attributes.donation_suggested_amount_money_options (Optional): Array
     * of {@link MoneyValuePreviousAttributes} or null. Amounts a donation link offers as one-tap
     * choices. Use the same currency for all suggested amounts and both bounds.
     * previous_attributes.donation_suggested_amount_money_options.anyOf[1] (Value): Array of
     * {@link MoneyValuePreviousAttributes}. Amounts a donation link offers as one-tap choices. Use
     * the same currency for all suggested amounts and both bounds.
     * previous_attributes.donation_suggested_amount_money_options.anyOf[1][] (Value): {@link
     * MoneyValuePreviousAttributes}.
     * previous_attributes.donation_suggested_amount_money_options.anyOf[2] (Value): null.
     * previous_attributes.event_config (Optional): {@link
     * PaymentLinkEventConfigPreviousAttributes} or null. Event details for an `event` link: when
     * and where it takes place and how many tickets it sells.
     * previous_attributes.event_config.anyOf[1] (Value): {@link
     * PaymentLinkEventConfigPreviousAttributes}. previous_attributes.event_config.anyOf[2]
     * (Value): null. previous_attributes.external_reference_id (Optional): string or null.
     * Caller-owned identifier for this resource in an external system.
     * previous_attributes.external_reference_id.anyOf[1] (Value): string. Caller-owned identifier
     * for this resource in an external system. maxLength: 255. Example: "warehouse-1842".
     * previous_attributes.external_reference_id.anyOf[2] (Value): null. previous_attributes.image
     * (Optional): {@link ImageAttachmentPreviousAttributes} or null. Image shown to buyers with
     * the link. previous_attributes.image.anyOf[1] (Value): {@link
     * ImageAttachmentPreviousAttributes}. previous_attributes.image.anyOf[2] (Value): null.
     * previous_attributes.inactive_message (Optional): string or null. Message to show the buyer
     * when the link is inactive. previous_attributes.inactive_message.anyOf[1] (Value): string.
     * Message to show the buyer when the link is inactive.
     * previous_attributes.inactive_message.anyOf[2] (Value): null.
     * previous_attributes.inventory_routing_source (Optional): {@link
     * InventoryRoutingSourcePreviousAttributes} or null. The inventory location or routing policy
     * that supplies stock for the link's catalog lines. Absent when using the implicit
     * single-Location fallback, which is evaluated again on use.
     * previous_attributes.inventory_routing_source.anyOf[1] (Value): {@link
     * InventoryRoutingSourcePreviousAttributes}.
     * previous_attributes.inventory_routing_source.anyOf[2] (Value): null.
     * previous_attributes.legal (Optional): {@link CheckoutLegalConfigPreviousAttributes} or null.
     * The terms and policy links checkouts started from this link show the buyer.
     * previous_attributes.legal.anyOf[1] (Value): {@link CheckoutLegalConfigPreviousAttributes}.
     * previous_attributes.legal.anyOf[2] (Value): null. previous_attributes.line_items (Optional):
     * Array of {@link PaymentLinkLineItemPreviousAttributes} or null. What the link sells.
     * previous_attributes.line_items.anyOf[1] (Value): Array of {@link
     * PaymentLinkLineItemPreviousAttributes}. What the link sells.
     * previous_attributes.line_items.anyOf[1][] (Value): {@link
     * PaymentLinkLineItemPreviousAttributes}. previous_attributes.line_items.anyOf[2] (Value):
     * null. previous_attributes.max_completions (Optional): integer or null. Most payments the
     * link accepts, counted by `completed_count`. Absent means no limit. Once the limit is
     * reached, resolving the link fails with a request error. It can't be set below
     * `completed_count`. previous_attributes.max_completions.anyOf[1] (Value): integer. Most
     * payments the link accepts, counted by `completed_count`. Absent means no limit. Once the
     * limit is reached, resolving the link fails with a request error. It can't be set below
     * `completed_count`. Format: int32. previous_attributes.max_completions.anyOf[2] (Value):
     * null. previous_attributes.merchant_id (Optional): string or null. ID of the merchant this
     * resource belongs to. previous_attributes.merchant_id.anyOf[1] (Value): string. ID of the
     * merchant this resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     * previous_attributes.merchant_id.anyOf[2] (Value): null. previous_attributes.metadata
     * (Optional): {@link MetadataMap} or null. Stored caller-owned key-value data. See
     * `MetadataInput` for key, value, and size rules. previous_attributes.metadata.anyOf[1]
     * (Value): {@link MetadataMap}. previous_attributes.metadata.anyOf[2] (Value): null.
     * previous_attributes.name (Optional): string or null. Name of the payment link.
     * previous_attributes.name.anyOf[1] (Value): string. Name of the payment link.
     * previous_attributes.name.anyOf[2] (Value): null. previous_attributes.payment_link_id
     * (Optional): string or null. Unique identifier for this payment link, prefixed `pl_`.
     * previous_attributes.payment_link_id.anyOf[1] (Value): string. Unique identifier for this
     * payment link, prefixed `pl_`. Example: "pl_01KEZF7C007WDMA5P9BPZ8J2AM".
     * previous_attributes.payment_link_id.anyOf[2] (Value): null.
     * previous_attributes.payment_link_type (Optional): string or null. What kind of link this is.
     * Value enum: "standard", "donation", "event". previous_attributes.payment_link_type.anyOf[1]
     * (Value): string. What kind of link this is. Value enum: "standard", "donation", "event".
     * previous_attributes.payment_link_type.anyOf[2] (Value): null. previous_attributes.payments
     * (Optional): {@link CheckoutPaymentConfigPreviousAttributes} or null. Payment options for
     * checkouts started from this link. previous_attributes.payments.anyOf[1] (Value): {@link
     * CheckoutPaymentConfigPreviousAttributes}. previous_attributes.payments.anyOf[2] (Value):
     * null. previous_attributes.promotion_config (Optional): {@link
     * CheckoutPromotionConfigPreviousAttributes} or null. Whether automatic promotions apply to
     * checkouts started from this link and whether buyers can enter promotion codes.
     * previous_attributes.promotion_config.anyOf[1] (Value): {@link
     * CheckoutPromotionConfigPreviousAttributes}. previous_attributes.promotion_config.anyOf[2]
     * (Value): null. previous_attributes.redirects (Optional): {@link
     * CheckoutRedirectsPreviousAttributes} or null. Where checkout sessions started from this
     * payment link send the buyer after payment, cancellation, or expiration.
     * previous_attributes.redirects.anyOf[1] (Value): {@link CheckoutRedirectsPreviousAttributes}.
     * previous_attributes.redirects.anyOf[2] (Value): null. previous_attributes.sales_end_at
     * (Optional): string or null. RFC3339 timestamp after which the link stops starting checkouts
     * and resolve fails with `ACTION_NOT_ALLOWED` and reason `not_offered`. Unset means sales do
     * not end on their own, except that an event link without sales_end_at stops selling at
     * event_config.event_at. A checkout opened before the end can still start payment for up to 15
     * minutes after it. previous_attributes.sales_end_at.anyOf[1] (Value): string. RFC3339
     * timestamp after which the link stops starting checkouts and resolve fails with
     * `ACTION_NOT_ALLOWED` and reason `not_offered`. Unset means sales do not end on their own,
     * except that an event link without sales_end_at stops selling at event_config.event_at. A
     * checkout opened before the end can still start payment for up to 15 minutes after it.
     * Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.sales_end_at.anyOf[2] (Value): null. previous_attributes.sales_start_at
     * (Optional): string or null. RFC3339 timestamp when buyers can first start a checkout from
     * this link. Stored to nanosecond precision. Before it, resolve fails with ACTION_NOT_ALLOWED
     * and reason sales_not_started. Must be earlier than the link’s sales end, including the event
     * start when no explicit end is set. previous_attributes.sales_start_at.anyOf[1] (Value):
     * string. RFC3339 timestamp when buyers can first start a checkout from this link. Stored to
     * nanosecond precision. Before it, resolve fails with ACTION_NOT_ALLOWED and reason
     * sales_not_started. Must be earlier than the link’s sales end, including the event start when
     * no explicit end is set. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.sales_start_at.anyOf[2] (Value): null. previous_attributes.sales_summary
     * (Optional): {@link PaymentLinkSalesSummaryPreviousAttributes} or null. Present only with
     * expand=sales_summary on GET /v1/payment-links or GET /v1/payment-links/{payment_link_id}.
     * Available to merchant callers, including dashboard sessions and API keys with
     * checkouts.payment_links.read. Uses the same paid-order definition as the merchant sales
     * summary. previous_attributes.sales_summary.anyOf[1] (Value): {@link
     * PaymentLinkSalesSummaryPreviousAttributes}. previous_attributes.sales_summary.anyOf[2]
     * (Value): null. previous_attributes.status (Optional): string or null. Whether the link can
     * start new checkouts. Value enum: "active", "inactive". previous_attributes.status.anyOf[1]
     * (Value): string. Whether the link can start new checkouts. Value enum: "active", "inactive".
     * previous_attributes.status.anyOf[2] (Value): null. previous_attributes.subscription_plan
     * (Optional): {@link ExpandedSubscriptionPlanSummaryPreviousAttributes} or null. Present only
     * when `expand` includes `subscription_plan`; `null` when expanded and there is no related
     * subscription plan. previous_attributes.subscription_plan.anyOf[1] (Value): {@link
     * ExpandedSubscriptionPlanSummaryPreviousAttributes}.
     * previous_attributes.subscription_plan.anyOf[2] (Value): null.
     * previous_attributes.subscription_plan_id (Optional): string or null. ID of the subscription
     * plan the link sells. Absent for a link that doesn't sell a subscription.
     * previous_attributes.subscription_plan_id.anyOf[1] (Value): string. ID of the subscription
     * plan the link sells. Absent for a link that doesn't sell a subscription. Example:
     * "plan_01KEZF7C004CY5ZR33XST2AASV". previous_attributes.subscription_plan_id.anyOf[2]
     * (Value): null. previous_attributes.tax (Optional): {@link SubscriptionTaxPreviousAttributes}
     * or null. Tax settings for checkouts started from this link. previous_attributes.tax.anyOf[1]
     * (Value): {@link SubscriptionTaxPreviousAttributes}. previous_attributes.tax.anyOf[2]
     * (Value): null. previous_attributes.theme (Optional): {@link ThemeConfigPreviousAttributes}
     * or null. The title and colors for checkouts started from this link, over your branding
     * settings. previous_attributes.theme.anyOf[1] (Value): {@link ThemeConfigPreviousAttributes}.
     * previous_attributes.theme.anyOf[2] (Value): null. previous_attributes.tip (Optional): {@link
     * CheckoutTipConfigPreviousAttributes} or null. Tip options for checkouts started from this
     * link. previous_attributes.tip.anyOf[1] (Value): {@link CheckoutTipConfigPreviousAttributes}.
     * previous_attributes.tip.anyOf[2] (Value): null. previous_attributes.total_quantity_sold
     * (Optional): integer or null. Whole-number quantity; fractional quantities are not supported.
     * previous_attributes.total_quantity_sold.anyOf[1] (Value): integer. Whole-number quantity;
     * fractional quantities are not supported. Format: int32.
     * previous_attributes.total_quantity_sold.anyOf[2] (Value): null.
     * previous_attributes.updated_at (Optional): string or null. RFC3339 timestamp.
     * previous_attributes.updated_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.updated_at.anyOf[2] (Value):
     * null. previous_attributes.url (Optional): string or null. URL buyers open to use the link.
     * previous_attributes.url.anyOf[1] (Value): string. URL buyers open to use the link.
     * previous_attributes.url.anyOf[2] (Value): null. previous_attributes.version (Optional):
     * integer or null. Current version of this resource's owned state. Send it as
     * `expected_version` when changing the resource to reject a stale write.
     * previous_attributes.version.anyOf[1] (Value): integer. Current version of this resource's
     * owned state. Send it as `expected_version` when changing the resource to reject a stale
     * write. Format: int64. previous_attributes.version.anyOf[2] (Value): null.
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
         * buyer can give on a donation link. Must be greater than zero and greater than or equal
         * to donation_min_amount_money. Omit on create for no maximum. Monetary amount represented
         * as integer minor units plus an ISO 4217 currency code. donation_min_amount_money
         * (Optional): {@link MoneyValue}. Smallest amount a buyer can give on a donation link.
         * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
         * donation_suggested_amount_money_options (Optional): Array of {@link MoneyValue}. Amounts
         * a donation link offers as one-tap choices. Use the same currency for all suggested
         * amounts and both bounds. donation_suggested_amount_money_options[] (Value): {@link
         * MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217
         * currency code. event_config (Optional): {@link PaymentLinkEventConfig}. Event details
         * for an `event` link: when and where it takes place and how many tickets it sells. Event
         * settings on an event payment link, such as its date, venue, ticket limit, and ticket
         * emails. external_reference_id (Optional): string. Caller-owned identifier for this
         * resource in an external system. maxLength: 255. Example: "warehouse-1842". image
         * (Optional): {@link ImageAttachment}. Image shown to buyers with the link. An image
         * attached to a resource, with its display properties and attachment metadata.
         * inactive_message (Optional): string. Message to show the buyer when the link is
         * inactive. inventory_routing_source (Optional): {@link InventoryRoutingSource}. The
         * inventory location or routing policy that supplies stock for the link's catalog lines.
         * Absent when using the implicit single-Location fallback, which is evaluated again on
         * use. Where an order, payment link, or reservation routes inventory from: a fixed
         * Location, an inventory allocation policy, or one policy revision. legal (Optional):
         * {@link LegalSettings}. The terms and policy links checkouts started from this link show
         * the buyer. Legal settings for a checkout: whether buyers must accept terms, and links to
         * the terms, refund policy, shipping policy, and contract. line_items (Optional): Array of
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
         * sales_start_at (Optional): string. RFC3339 timestamp when buyers can first start a
         * checkout from this link. Stored to nanosecond precision. Before it, resolve fails with
         * ACTION_NOT_ALLOWED and reason sales_not_started. Must be earlier than the link’s sales
         * end, including the event start when no explicit end is set. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". sales_summary (Optional): {@link PaymentLinkSalesSummary}.
         * Present only with expand=sales_summary on GET /v1/payment-links or GET
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
         * subscription_plan.anyOf[2] (Value): null. subscription_plan_id (Optional): string. ID of
         * the subscription plan the link sells. Absent for a link that doesn't sell a
         * subscription. Example: "plan_01KEZF7C004CY5ZR33XST2AASV". tax (Optional): {@link
         * CheckoutTaxConfig}. Tax settings for checkouts started from this link. Whether tax is
         * collected for a checkout session or payment link. theme (Optional): {@link ThemeConfig}.
         * The title and colors for checkouts started from this link, over your branding settings.
         * Colors and title applied to a payment link's checkout page. tip (Optional): {@link
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
             * Largest amount a buyer can give on a donation link. Must be greater than zero and
             * greater than or equal to donation_min_amount_money. Omit on create for no maximum.
             * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
             */
            "donation_max_amount_money"?: MoneyValue;
            /**
             * Smallest amount a buyer can give on a donation link. Monetary amount represented as
             * integer minor units plus an ISO 4217 currency code.
             */
            "donation_min_amount_money"?: MoneyValue;
            /**
             * Amounts a donation link offers as one-tap choices. Use the same currency for all
             * suggested amounts and both bounds. [] (Value): {@link MoneyValue}. Monetary amount
             * represented as integer minor units plus an ISO 4217 currency code.
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
             * lines. Absent when using the implicit single-Location fallback, which is evaluated
             * again on use. Where an order, payment link, or reservation routes inventory from: a
             * fixed Location, an inventory allocation policy, or one policy revision.
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
             * RFC3339 timestamp when buyers can first start a checkout from this link. Stored to
             * nanosecond precision. Before it, resolve fails with ACTION_NOT_ALLOWED and reason
             * sales_not_started. Must be earlier than the link’s sales end, including the event
             * start when no explicit end is set. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "sales_start_at"?: string;
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
            /**
             * ID of the subscription plan the link sells. Absent for a link that doesn't sell a
             * subscription. Example: "plan_01KEZF7C004CY5ZR33XST2AASV".
             */
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
         * state, including synthetic test events. buyer_fields (Optional): {@link
         * CheckoutBuyerFieldsPreviousAttributes} or null. What checkout asks the buyer for. Each
         * field you leave out uses your checkout settings. buyer_fields.anyOf[1] (Value): {@link
         * CheckoutBuyerFieldsPreviousAttributes}. buyer_fields.anyOf[2] (Value): null.
         * checkout_session_expires_in_seconds (Optional): integer or null. Seconds each checkout
         * session the link starts stays open, from 60 to 86,400. Omit it to use your checkout
         * settings, or 24 hours. It doesn't end the link; use sales_end_at for that.
         * checkout_session_expires_in_seconds.anyOf[1] (Value): integer. Seconds each checkout
         * session the link starts stays open, from 60 to 86,400. Omit it to use your checkout
         * settings, or 24 hours. It doesn't end the link; use sales_end_at for that. Format:
         * int64. minimum: 60. maximum: 86400. checkout_session_expires_in_seconds.anyOf[2]
         * (Value): null. completed_count (Optional): integer or null. Number of paid checkout
         * sessions started from this link. completed_count.anyOf[1] (Value): integer. Number of
         * paid checkout sessions started from this link. Format: int32. completed_count.anyOf[2]
         * (Value): null. created_at (Optional): string or null. RFC3339 timestamp.
         * created_at.anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". created_at.anyOf[2] (Value): null. custom_fields (Optional):
         * Array of {@link PaymentLinkCustomFieldPreviousAttributes} or null. Questions buyers
         * answer before paying. Answers are recorded on the order and checkout session in
         * `custom_field_answers`. custom_fields.anyOf[1] (Value): Array of {@link
         * PaymentLinkCustomFieldPreviousAttributes}. Questions buyers answer before paying.
         * Answers are recorded on the order and checkout session in `custom_field_answers`.
         * custom_fields.anyOf[1][] (Value): {@link PaymentLinkCustomFieldPreviousAttributes}.
         * custom_fields.anyOf[2] (Value): null. custom_text (Optional): {@link
         * CheckoutCustomTextConfigPreviousAttributes} or null. Custom text for checkouts started
         * from this link. custom_text.anyOf[1] (Value): {@link
         * CheckoutCustomTextConfigPreviousAttributes}. custom_text.anyOf[2] (Value): null.
         * delivery_method_ids (Optional): Array of string or null. Delivery methods the link
         * offers. Empty when the link has none, and then its checkouts offer
         * settings.checkout.default_delivery_method_ids when the order has items to deliver.
         * delivery_method_ids.anyOf[1] (Value): Array of string. Delivery methods the link offers.
         * Empty when the link has none, and then its checkouts offer
         * settings.checkout.default_delivery_method_ids when the order has items to deliver.
         * delivery_method_ids.anyOf[1][] (Value): string. Example:
         * "dmet_01KEZF7C00YSG3X2D1TZJ36TM0". delivery_method_ids.anyOf[2] (Value): null.
         * description (Optional): string or null. Text about what the link sells, returned to
         * buyers when they open it. description.anyOf[1] (Value): string. Text about what the link
         * sells, returned to buyers when they open it. description.anyOf[2] (Value): null.
         * donation_max_amount_money (Optional): {@link MoneyValuePreviousAttributes} or null.
         * Largest amount a buyer can give on a donation link. Must be greater than zero and
         * greater than or equal to donation_min_amount_money. Omit on create for no maximum.
         * donation_max_amount_money.anyOf[1] (Value): {@link MoneyValuePreviousAttributes}.
         * donation_max_amount_money.anyOf[2] (Value): null. donation_min_amount_money (Optional):
         * {@link MoneyValuePreviousAttributes} or null. Smallest amount a buyer can give on a
         * donation link. donation_min_amount_money.anyOf[1] (Value): {@link
         * MoneyValuePreviousAttributes}. donation_min_amount_money.anyOf[2] (Value): null.
         * donation_suggested_amount_money_options (Optional): Array of {@link
         * MoneyValuePreviousAttributes} or null. Amounts a donation link offers as one-tap
         * choices. Use the same currency for all suggested amounts and both bounds.
         * donation_suggested_amount_money_options.anyOf[1] (Value): Array of {@link
         * MoneyValuePreviousAttributes}. Amounts a donation link offers as one-tap choices. Use
         * the same currency for all suggested amounts and both bounds.
         * donation_suggested_amount_money_options.anyOf[1][] (Value): {@link
         * MoneyValuePreviousAttributes}. donation_suggested_amount_money_options.anyOf[2] (Value):
         * null. event_config (Optional): {@link PaymentLinkEventConfigPreviousAttributes} or null.
         * Event details for an `event` link: when and where it takes place and how many tickets it
         * sells. event_config.anyOf[1] (Value): {@link PaymentLinkEventConfigPreviousAttributes}.
         * event_config.anyOf[2] (Value): null. external_reference_id (Optional): string or null.
         * Caller-owned identifier for this resource in an external system.
         * external_reference_id.anyOf[1] (Value): string. Caller-owned identifier for this
         * resource in an external system. maxLength: 255. Example: "warehouse-1842".
         * external_reference_id.anyOf[2] (Value): null. image (Optional): {@link
         * ImageAttachmentPreviousAttributes} or null. Image shown to buyers with the link.
         * image.anyOf[1] (Value): {@link ImageAttachmentPreviousAttributes}. image.anyOf[2]
         * (Value): null. inactive_message (Optional): string or null. Message to show the buyer
         * when the link is inactive. inactive_message.anyOf[1] (Value): string. Message to show
         * the buyer when the link is inactive. inactive_message.anyOf[2] (Value): null.
         * inventory_routing_source (Optional): {@link InventoryRoutingSourcePreviousAttributes} or
         * null. The inventory location or routing policy that supplies stock for the link's
         * catalog lines. Absent when using the implicit single-Location fallback, which is
         * evaluated again on use. inventory_routing_source.anyOf[1] (Value): {@link
         * InventoryRoutingSourcePreviousAttributes}. inventory_routing_source.anyOf[2] (Value):
         * null. legal (Optional): {@link CheckoutLegalConfigPreviousAttributes} or null. The terms
         * and policy links checkouts started from this link show the buyer. legal.anyOf[1]
         * (Value): {@link CheckoutLegalConfigPreviousAttributes}. legal.anyOf[2] (Value): null.
         * line_items (Optional): Array of {@link PaymentLinkLineItemPreviousAttributes} or null.
         * What the link sells. line_items.anyOf[1] (Value): Array of {@link
         * PaymentLinkLineItemPreviousAttributes}. What the link sells. line_items.anyOf[1][]
         * (Value): {@link PaymentLinkLineItemPreviousAttributes}. line_items.anyOf[2] (Value):
         * null. max_completions (Optional): integer or null. Most payments the link accepts,
         * counted by `completed_count`. Absent means no limit. Once the limit is reached,
         * resolving the link fails with a request error. It can't be set below `completed_count`.
         * max_completions.anyOf[1] (Value): integer. Most payments the link accepts, counted by
         * `completed_count`. Absent means no limit. Once the limit is reached, resolving the link
         * fails with a request error. It can't be set below `completed_count`. Format: int32.
         * max_completions.anyOf[2] (Value): null. merchant_id (Optional): string or null. ID of
         * the merchant this resource belongs to. merchant_id.anyOf[1] (Value): string. ID of the
         * merchant this resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
         * merchant_id.anyOf[2] (Value): null. metadata (Optional): {@link MetadataMap} or null.
         * Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules.
         * metadata.anyOf[1] (Value): {@link MetadataMap}. metadata.anyOf[2] (Value): null. name
         * (Optional): string or null. Name of the payment link. name.anyOf[1] (Value): string.
         * Name of the payment link. name.anyOf[2] (Value): null. payment_link_id (Optional):
         * string or null. Unique identifier for this payment link, prefixed `pl_`.
         * payment_link_id.anyOf[1] (Value): string. Unique identifier for this payment link,
         * prefixed `pl_`. Example: "pl_01KEZF7C007WDMA5P9BPZ8J2AM". payment_link_id.anyOf[2]
         * (Value): null. payment_link_type (Optional): string or null. What kind of link this is.
         * Value enum: "standard", "donation", "event". payment_link_type.anyOf[1] (Value): string.
         * What kind of link this is. Value enum: "standard", "donation", "event".
         * payment_link_type.anyOf[2] (Value): null. payments (Optional): {@link
         * CheckoutPaymentConfigPreviousAttributes} or null. Payment options for checkouts started
         * from this link. payments.anyOf[1] (Value): {@link
         * CheckoutPaymentConfigPreviousAttributes}. payments.anyOf[2] (Value): null.
         * promotion_config (Optional): {@link CheckoutPromotionConfigPreviousAttributes} or null.
         * Whether automatic promotions apply to checkouts started from this link and whether
         * buyers can enter promotion codes. promotion_config.anyOf[1] (Value): {@link
         * CheckoutPromotionConfigPreviousAttributes}. promotion_config.anyOf[2] (Value): null.
         * redirects (Optional): {@link CheckoutRedirectsPreviousAttributes} or null. Where
         * checkout sessions started from this payment link send the buyer after payment,
         * cancellation, or expiration. redirects.anyOf[1] (Value): {@link
         * CheckoutRedirectsPreviousAttributes}. redirects.anyOf[2] (Value): null. sales_end_at
         * (Optional): string or null. RFC3339 timestamp after which the link stops starting
         * checkouts and resolve fails with `ACTION_NOT_ALLOWED` and reason `not_offered`. Unset
         * means sales do not end on their own, except that an event link without sales_end_at
         * stops selling at event_config.event_at. A checkout opened before the end can still start
         * payment for up to 15 minutes after it. sales_end_at.anyOf[1] (Value): string. RFC3339
         * timestamp after which the link stops starting checkouts and resolve fails with
         * `ACTION_NOT_ALLOWED` and reason `not_offered`. Unset means sales do not end on their
         * own, except that an event link without sales_end_at stops selling at
         * event_config.event_at. A checkout opened before the end can still start payment for up
         * to 15 minutes after it. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * sales_end_at.anyOf[2] (Value): null. sales_start_at (Optional): string or null. RFC3339
         * timestamp when buyers can first start a checkout from this link. Stored to nanosecond
         * precision. Before it, resolve fails with ACTION_NOT_ALLOWED and reason
         * sales_not_started. Must be earlier than the link’s sales end, including the event start
         * when no explicit end is set. sales_start_at.anyOf[1] (Value): string. RFC3339 timestamp
         * when buyers can first start a checkout from this link. Stored to nanosecond precision.
         * Before it, resolve fails with ACTION_NOT_ALLOWED and reason sales_not_started. Must be
         * earlier than the link’s sales end, including the event start when no explicit end is
         * set. Format: date-time. Example: "2026-08-02T16:00:00Z". sales_start_at.anyOf[2]
         * (Value): null. sales_summary (Optional): {@link
         * PaymentLinkSalesSummaryPreviousAttributes} or null. Present only with
         * expand=sales_summary on GET /v1/payment-links or GET
         * /v1/payment-links/{payment_link_id}. Available to merchant callers, including dashboard
         * sessions and API keys with checkouts.payment_links.read. Uses the same paid-order
         * definition as the merchant sales summary. sales_summary.anyOf[1] (Value): {@link
         * PaymentLinkSalesSummaryPreviousAttributes}. sales_summary.anyOf[2] (Value): null. status
         * (Optional): string or null. Whether the link can start new checkouts. Value enum:
         * "active", "inactive". status.anyOf[1] (Value): string. Whether the link can start new
         * checkouts. Value enum: "active", "inactive". status.anyOf[2] (Value): null.
         * subscription_plan (Optional): {@link ExpandedSubscriptionPlanSummaryPreviousAttributes}
         * or null. Present only when `expand` includes `subscription_plan`; `null` when expanded
         * and there is no related subscription plan. subscription_plan.anyOf[1] (Value): {@link
         * ExpandedSubscriptionPlanSummaryPreviousAttributes}. subscription_plan.anyOf[2] (Value):
         * null. subscription_plan_id (Optional): string or null. ID of the subscription plan the
         * link sells. Absent for a link that doesn't sell a subscription.
         * subscription_plan_id.anyOf[1] (Value): string. ID of the subscription plan the link
         * sells. Absent for a link that doesn't sell a subscription. Example:
         * "plan_01KEZF7C004CY5ZR33XST2AASV". subscription_plan_id.anyOf[2] (Value): null. tax
         * (Optional): {@link SubscriptionTaxPreviousAttributes} or null. Tax settings for
         * checkouts started from this link. tax.anyOf[1] (Value): {@link
         * SubscriptionTaxPreviousAttributes}. tax.anyOf[2] (Value): null. theme (Optional): {@link
         * ThemeConfigPreviousAttributes} or null. The title and colors for checkouts started from
         * this link, over your branding settings. theme.anyOf[1] (Value): {@link
         * ThemeConfigPreviousAttributes}. theme.anyOf[2] (Value): null. tip (Optional): {@link
         * CheckoutTipConfigPreviousAttributes} or null. Tip options for checkouts started from
         * this link. tip.anyOf[1] (Value): {@link CheckoutTipConfigPreviousAttributes}.
         * tip.anyOf[2] (Value): null. total_quantity_sold (Optional): integer or null.
         * Whole-number quantity; fractional quantities are not supported.
         * total_quantity_sold.anyOf[1] (Value): integer. Whole-number quantity; fractional
         * quantities are not supported. Format: int32. total_quantity_sold.anyOf[2] (Value): null.
         * updated_at (Optional): string or null. RFC3339 timestamp. updated_at.anyOf[1] (Value):
         * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * updated_at.anyOf[2] (Value): null. url (Optional): string or null. URL buyers open to
         * use the link. url.anyOf[1] (Value): string. URL buyers open to use the link.
         * url.anyOf[2] (Value): null. version (Optional): integer or null. Current version of this
         * resource's owned state. Send it as `expected_version` when changing the resource to
         * reject a stale write. version.anyOf[1] (Value): integer. Current version of this
         * resource's owned state. Send it as `expected_version` when changing the resource to
         * reject a stale write. Format: int64. version.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * What checkout asks the buyer for. Each field you leave out uses your checkout
             * settings. anyOf[1] (Value): {@link CheckoutBuyerFieldsPreviousAttributes}. anyOf[2]
             * (Value): null.
             */
            "buyer_fields"?: ((CheckoutBuyerFieldsPreviousAttributes) | (null));
            /**
             * Seconds each checkout session the link starts stays open, from 60 to 86,400. Omit it
             * to use your checkout settings, or 24 hours. It doesn't end the link; use
             * sales_end_at for that. anyOf[1] (Value): integer. Seconds each checkout session the
             * link starts stays open, from 60 to 86,400. Omit it to use your checkout settings, or
             * 24 hours. It doesn't end the link; use sales_end_at for that. Format: int64.
             * minimum: 60. maximum: 86400. anyOf[2] (Value): null.
             */
            "checkout_session_expires_in_seconds"?: ((number) | (null));
            /**
             * Number of paid checkout sessions started from this link. anyOf[1] (Value): integer.
             * Number of paid checkout sessions started from this link. Format: int32. anyOf[2]
             * (Value): null.
             */
            "completed_count"?: ((number) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * Questions buyers answer before paying. Answers are recorded on the order and
             * checkout session in `custom_field_answers`. anyOf[1] (Value): Array of {@link
             * PaymentLinkCustomFieldPreviousAttributes}. Questions buyers answer before paying.
             * Answers are recorded on the order and checkout session in `custom_field_answers`.
             * anyOf[1][] (Value): {@link PaymentLinkCustomFieldPreviousAttributes}. anyOf[2]
             * (Value): null.
             */
            "custom_fields"?: ((Array<PaymentLinkCustomFieldPreviousAttributes>) | (null));
            /**
             * Custom text for checkouts started from this link. anyOf[1] (Value): {@link
             * CheckoutCustomTextConfigPreviousAttributes}. anyOf[2] (Value): null.
             */
            "custom_text"?: ((CheckoutCustomTextConfigPreviousAttributes) | (null));
            /**
             * Delivery methods the link offers. Empty when the link has none, and then its
             * checkouts offer settings.checkout.default_delivery_method_ids when the order has
             * items to deliver. anyOf[1] (Value): Array of string. Delivery methods the link
             * offers. Empty when the link has none, and then its checkouts offer
             * settings.checkout.default_delivery_method_ids when the order has items to deliver.
             * anyOf[1][] (Value): string. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0". anyOf[2]
             * (Value): null.
             */
            "delivery_method_ids"?: ((Array<string>) | (null));
            /**
             * Text about what the link sells, returned to buyers when they open it. anyOf[1]
             * (Value): string. Text about what the link sells, returned to buyers when they open
             * it. anyOf[2] (Value): null.
             */
            "description"?: ((string) | (null));
            /**
             * Largest amount a buyer can give on a donation link. Must be greater than zero and
             * greater than or equal to donation_min_amount_money. Omit on create for no maximum.
             * anyOf[1] (Value): {@link MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
             */
            "donation_max_amount_money"?: ((MoneyValuePreviousAttributes) | (null));
            /**
             * Smallest amount a buyer can give on a donation link. anyOf[1] (Value): {@link
             * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
             */
            "donation_min_amount_money"?: ((MoneyValuePreviousAttributes) | (null));
            /**
             * Amounts a donation link offers as one-tap choices. Use the same currency for all
             * suggested amounts and both bounds. anyOf[1] (Value): Array of {@link
             * MoneyValuePreviousAttributes}. Amounts a donation link offers as one-tap choices.
             * Use the same currency for all suggested amounts and both bounds. anyOf[1][] (Value):
             * {@link MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
             */
            "donation_suggested_amount_money_options"?: ((Array<MoneyValuePreviousAttributes>) | (null));
            /**
             * Event details for an `event` link: when and where it takes place and how many
             * tickets it sells. anyOf[1] (Value): {@link
             * PaymentLinkEventConfigPreviousAttributes}. anyOf[2] (Value): null.
             */
            "event_config"?: ((PaymentLinkEventConfigPreviousAttributes) | (null));
            /**
             * Caller-owned identifier for this resource in an external system. anyOf[1] (Value):
             * string. Caller-owned identifier for this resource in an external system. maxLength:
             * 255. Example: "warehouse-1842". anyOf[2] (Value): null.
             */
            "external_reference_id"?: ((string) | (null));
            /**
             * Image shown to buyers with the link. anyOf[1] (Value): {@link
             * ImageAttachmentPreviousAttributes}. anyOf[2] (Value): null.
             */
            "image"?: ((ImageAttachmentPreviousAttributes) | (null));
            /**
             * Message to show the buyer when the link is inactive. anyOf[1] (Value): string.
             * Message to show the buyer when the link is inactive. anyOf[2] (Value): null.
             */
            "inactive_message"?: ((string) | (null));
            /**
             * The inventory location or routing policy that supplies stock for the link's catalog
             * lines. Absent when using the implicit single-Location fallback, which is evaluated
             * again on use. anyOf[1] (Value): {@link InventoryRoutingSourcePreviousAttributes}.
             * anyOf[2] (Value): null.
             */
            "inventory_routing_source"?: ((InventoryRoutingSourcePreviousAttributes) | (null));
            /**
             * The terms and policy links checkouts started from this link show the buyer. anyOf[1]
             * (Value): {@link CheckoutLegalConfigPreviousAttributes}. anyOf[2] (Value): null.
             */
            "legal"?: ((CheckoutLegalConfigPreviousAttributes) | (null));
            /**
             * What the link sells. anyOf[1] (Value): Array of {@link
             * PaymentLinkLineItemPreviousAttributes}. What the link sells. anyOf[1][] (Value):
             * {@link PaymentLinkLineItemPreviousAttributes}. anyOf[2] (Value): null.
             */
            "line_items"?: ((Array<PaymentLinkLineItemPreviousAttributes>) | (null));
            /**
             * Most payments the link accepts, counted by `completed_count`. Absent means no limit.
             * Once the limit is reached, resolving the link fails with a request error. It can't
             * be set below `completed_count`. anyOf[1] (Value): integer. Most payments the link
             * accepts, counted by `completed_count`. Absent means no limit. Once the limit is
             * reached, resolving the link fails with a request error. It can't be set below
             * `completed_count`. Format: int32. anyOf[2] (Value): null.
             */
            "max_completions"?: ((number) | (null));
            /**
             * ID of the merchant this resource belongs to. anyOf[1] (Value): string. ID of the
             * merchant this resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             * anyOf[2] (Value): null.
             */
            "merchant_id"?: ((string) | (null));
            /**
             * Stored caller-owned key-value data. See `MetadataInput` for key, value, and size
             * rules. anyOf[1] (Value): {@link MetadataMap}. anyOf[2] (Value): null.
             */
            "metadata"?: ((MetadataMap) | (null));
            /**
             * Name of the payment link. anyOf[1] (Value): string. Name of the payment link.
             * anyOf[2] (Value): null.
             */
            "name"?: ((string) | (null));
            /**
             * Unique identifier for this payment link, prefixed `pl_`. anyOf[1] (Value): string.
             * Unique identifier for this payment link, prefixed `pl_`. Example:
             * "pl_01KEZF7C007WDMA5P9BPZ8J2AM". anyOf[2] (Value): null.
             */
            "payment_link_id"?: ((string) | (null));
            /**
             * What kind of link this is. Value enum: "standard", "donation", "event". anyOf[1]
             * (Value): string. What kind of link this is. Value enum: "standard", "donation",
             * "event". anyOf[2] (Value): null.
             */
            "payment_link_type"?: (("standard" | "donation" | "event" | (string & {})) | (null));
            /**
             * Payment options for checkouts started from this link. anyOf[1] (Value): {@link
             * CheckoutPaymentConfigPreviousAttributes}. anyOf[2] (Value): null.
             */
            "payments"?: ((CheckoutPaymentConfigPreviousAttributes) | (null));
            /**
             * Whether automatic promotions apply to checkouts started from this link and whether
             * buyers can enter promotion codes. anyOf[1] (Value): {@link
             * CheckoutPromotionConfigPreviousAttributes}. anyOf[2] (Value): null.
             */
            "promotion_config"?: ((CheckoutPromotionConfigPreviousAttributes) | (null));
            /**
             * Where checkout sessions started from this payment link send the buyer after payment,
             * cancellation, or expiration. anyOf[1] (Value): {@link
             * CheckoutRedirectsPreviousAttributes}. anyOf[2] (Value): null.
             */
            "redirects"?: ((CheckoutRedirectsPreviousAttributes) | (null));
            /**
             * RFC3339 timestamp after which the link stops starting checkouts and resolve fails
             * with `ACTION_NOT_ALLOWED` and reason `not_offered`. Unset means sales do not end on
             * their own, except that an event link without sales_end_at stops selling at
             * event_config.event_at. A checkout opened before the end can still start payment for
             * up to 15 minutes after it. anyOf[1] (Value): string. RFC3339 timestamp after which
             * the link stops starting checkouts and resolve fails with `ACTION_NOT_ALLOWED` and
             * reason `not_offered`. Unset means sales do not end on their own, except that an
             * event link without sales_end_at stops selling at event_config.event_at. A checkout
             * opened before the end can still start payment for up to 15 minutes after it. Format:
             * date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "sales_end_at"?: ((string) | (null));
            /**
             * RFC3339 timestamp when buyers can first start a checkout from this link. Stored to
             * nanosecond precision. Before it, resolve fails with ACTION_NOT_ALLOWED and reason
             * sales_not_started. Must be earlier than the link’s sales end, including the event
             * start when no explicit end is set. anyOf[1] (Value): string. RFC3339 timestamp when
             * buyers can first start a checkout from this link. Stored to nanosecond precision.
             * Before it, resolve fails with ACTION_NOT_ALLOWED and reason sales_not_started. Must
             * be earlier than the link’s sales end, including the event start when no explicit end
             * is set. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "sales_start_at"?: ((string) | (null));
            /**
             * Present only with expand=sales_summary on GET /v1/payment-links or GET
             * /v1/payment-links/{payment_link_id}. Available to merchant callers, including
             * dashboard sessions and API keys with checkouts.payment_links.read. Uses the same
             * paid-order definition as the merchant sales summary. anyOf[1] (Value): {@link
             * PaymentLinkSalesSummaryPreviousAttributes}. anyOf[2] (Value): null.
             */
            "sales_summary"?: ((PaymentLinkSalesSummaryPreviousAttributes) | (null));
            /**
             * Whether the link can start new checkouts. Value enum: "active", "inactive". anyOf[1]
             * (Value): string. Whether the link can start new checkouts. Value enum: "active",
             * "inactive". anyOf[2] (Value): null.
             */
            "status"?: (("active" | "inactive" | (string & {})) | (null));
            /**
             * Present only when `expand` includes `subscription_plan`; `null` when expanded and
             * there is no related subscription plan. anyOf[1] (Value): {@link
             * ExpandedSubscriptionPlanSummaryPreviousAttributes}. anyOf[2] (Value): null.
             */
            "subscription_plan"?: ((ExpandedSubscriptionPlanSummaryPreviousAttributes) | (null));
            /**
             * ID of the subscription plan the link sells. Absent for a link that doesn't sell a
             * subscription. anyOf[1] (Value): string. ID of the subscription plan the link sells.
             * Absent for a link that doesn't sell a subscription. Example:
             * "plan_01KEZF7C004CY5ZR33XST2AASV". anyOf[2] (Value): null.
             */
            "subscription_plan_id"?: ((string) | (null));
            /**
             * Tax settings for checkouts started from this link. anyOf[1] (Value): {@link
             * SubscriptionTaxPreviousAttributes}. anyOf[2] (Value): null.
             */
            "tax"?: ((SubscriptionTaxPreviousAttributes) | (null));
            /**
             * The title and colors for checkouts started from this link, over your branding
             * settings. anyOf[1] (Value): {@link ThemeConfigPreviousAttributes}. anyOf[2] (Value):
             * null.
             */
            "theme"?: ((ThemeConfigPreviousAttributes) | (null));
            /**
             * Tip options for checkouts started from this link. anyOf[1] (Value): {@link
             * CheckoutTipConfigPreviousAttributes}. anyOf[2] (Value): null.
             */
            "tip"?: ((CheckoutTipConfigPreviousAttributes) | (null));
            /**
             * Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value):
             * integer. Whole-number quantity; fractional quantities are not supported. Format:
             * int32. anyOf[2] (Value): null.
             */
            "total_quantity_sold"?: ((number) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * URL buyers open to use the link. anyOf[1] (Value): string. URL buyers open to use
             * the link. anyOf[2] (Value): null.
             */
            "url"?: ((string) | (null));
            /**
             * Current version of this resource's owned state. Send it as `expected_version` when
             * changing the resource to reject a stale write. anyOf[1] (Value): integer. Current
             * version of this resource's owned state. Send it as `expected_version` when changing
             * the resource to reject a stale write. Format: int64. anyOf[2] (Value): null.
             */
            "version"?: ((number) | (null));
        });
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
export type PaymentLinksResolveParams = (InputValue<ResolvePaymentLinkRequestInput>)
    & {
    /**
     * Include the buyer checkout read fields when a new hosted session is created. Replays return
     * the launch fields.
     */
    "include_checkout"?: InputValue<boolean>;
};
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
    /** Customer this payment method belongs to. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". */
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
     * Existing subscriptions keep their payment_method_id.
     */
    "is_default": boolean;
    /**
     * Removal is in progress. Show this card as Removing and offer retry with DELETE
     * /v1/payment-methods/{payment_method_id}, or DELETE
     * /v1/me/payment-methods/{payment_method_id} for buyers. Do not offer it for a new payment,
     * subscription, or default. Flint retries abandoned removals automatically.
     */
    "is_removing": boolean;
    /** ID of the merchant this resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
    "merchant_id": string;
    /**
     * `imported` for a saved card that Flint migrated from another processor account. Omitted for
     * other cards. Value enum: "imported".
     */
    "origin"?: "imported" | (string & {});
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
     * The saved card lifecycle. Offer the card for a new payment only when status is active and
     * is_removing is false. Treat any other status as not chargeable, including values added
     * later. Value enum: "pending", "active", "expired", "archived", "failed".
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
            "is_removing": boolean;
            "merchant_id": string;
            "origin"?: "imported" | (string & {});
            "payment_method_id": string;
            "saved_with"?: "flint" | "store" | (string & {});
            "status": "pending" | "active" | "expired" | "archived" | "failed" | (string & {});
            "type": "card" | (string & {});
            "updated_at": string;
            "usage": "on_session" | "off_session" | (string & {});
        };
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "card"?: ((CardDetailsPreviousAttributes) | (null));
            "created_at"?: ((string) | (null));
            "customer"?: ((ExpandedCustomerSummaryPreviousAttributes) | (null));
            "customer_id"?: ((string) | (null));
            "fingerprint"?: ((string) | (null));
            "is_default"?: ((boolean) | (null));
            "is_removing"?: ((boolean) | (null));
            "merchant_id"?: ((string) | (null));
            "origin"?: (("imported" | (string & {})) | (null));
            "payment_method_id"?: ((string) | (null));
            "saved_with"?: (("flint" | "store" | (string & {})) | (null));
            "status"?: (("pending" | "active" | "expired" | "archived" | "failed" | (string & {})) | (null));
            "type"?: (("card" | (string & {})) | (null));
            "updated_at"?: ((string) | (null));
            "usage"?: (("on_session" | "off_session" | (string & {})) | (null));
        });
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
            "is_removing": boolean;
            "merchant_id": string;
            "origin"?: "imported" | (string & {});
            "payment_method_id": string;
            "saved_with"?: "flint" | "store" | (string & {});
            "status": "pending" | "active" | "expired" | "archived" | "failed" | (string & {});
            "type": "card" | (string & {});
            "updated_at": string;
            "usage": "on_session" | "off_session" | (string & {});
        };
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "card"?: ((CardDetailsPreviousAttributes) | (null));
            "created_at"?: ((string) | (null));
            "customer"?: ((ExpandedCustomerSummaryPreviousAttributes) | (null));
            "customer_id"?: ((string) | (null));
            "fingerprint"?: ((string) | (null));
            "is_default"?: ((boolean) | (null));
            "is_removing"?: ((boolean) | (null));
            "merchant_id"?: ((string) | (null));
            "origin"?: (("imported" | (string & {})) | (null));
            "payment_method_id"?: ((string) | (null));
            "saved_with"?: (("flint" | "store" | (string & {})) | (null));
            "status"?: (("pending" | "active" | "expired" | "archived" | "failed" | (string & {})) | (null));
            "type"?: (("card" | (string & {})) | (null));
            "updated_at"?: ((string) | (null));
            "usage"?: (("on_session" | "off_session" | (string & {})) | (null));
        });
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
/**
 * The `payment_method.activated` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type PaymentMethodActivatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.card (Optional): {@link CardDetails}. Brand, expiry and last four
     * digits. Present when `type` is `card`. Card details on a payment method: brand, expiration
     * month and year, last four digits, and the wallet when one was used. object.created_at
     * (Required): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.customer (Optional): {@link ExpandedCustomerSummary} or null. Present only when
     * `expand` includes `customer`; `null` when expanded and there is no related customer.
     * object.customer.anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's summary
     * fields, returned in place of a customer ID when the customer is expanded.
     * object.customer.anyOf[2] (Value): null. object.customer_id (Required): string. Customer this
     * payment method belongs to. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". object.fingerprint
     * (Optional): string. A value that is the same for every saved copy of one card number at this
     * merchant and environment, so you can spot duplicates. It doesn't identify the card anywhere
     * else. A card added through Apple Pay or Google Pay can have a different fingerprint from the
     * same card typed in. object.is_default (Required): boolean. Whether this is the customer's
     * default payment method, the one Customer.default_payment_method_id names. Change the default
     * with PATCH /v1/customers/{customer_id}; that sends customer.updated, not a payment method
     * event. Existing subscriptions keep their payment_method_id. object.is_removing (Required):
     * boolean. Removal is in progress. Show this card as Removing and offer retry with DELETE
     * /v1/payment-methods/{payment_method_id}, or DELETE
     * /v1/me/payment-methods/{payment_method_id} for buyers. Do not offer it for a new payment,
     * subscription, or default. Flint retries abandoned removals automatically. object.merchant_id
     * (Required): string. ID of the merchant this resource belongs to. Example:
     * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.origin (Optional): string. `imported` for a saved
     * card that Flint migrated from another processor account. Omitted for other cards. Value
     * enum: "imported". object.payment_method_id (Required): string. Unique identifier for this
     * payment method, prefixed `pm_`. Example: "pm_01KEZF7C0034B248TXXE4NXYFZ". object.saved_with
     * (Optional): string. Where the buyer saved this payment method. Returned on
     * /v1/me/payment-methods responses when Flint wallet support is enabled. Accept future values.
     * Value enum: "flint", "store". object.status (Required): string. The saved card lifecycle.
     * Offer the card for a new payment only when status is active and is_removing is false. Treat
     * any other status as not chargeable, including values added later. Value enum: "pending",
     * "active", "expired", "archived", "failed". object.type (Required): string. Kind of payment
     * method. Value enum: "card". object.updated_at (Required): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.usage (Required): string. When Flint may
     * charge the payment method. off_session payment methods can pay subscriptions, automatic
     * invoices, and other charges without the buyer, and can be a customer's default. on_session
     * payment methods were saved by the buyer in checkout for faster checkout at this merchant;
     * Flint charges them only in checkouts the buyer completes and refuses them for any charge
     * without the buyer and as a default. Payment methods saved before usage existed are
     * off_session. Value enum: "on_session", "off_session". previous_attributes (Optional):
     * object. Previous values of changed top-level fields in data.object, at this delivery's API
     * version. Nested changes include the whole previous top-level value. A value is null when the
     * field was absent before the change. Omitted when Flint did not record the previous state,
     * including synthetic test events. previous_attributes.card (Optional): {@link
     * CardDetailsPreviousAttributes} or null. Brand, expiry and last four digits. Present when
     * `type` is `card`. previous_attributes.card.anyOf[1] (Value): {@link
     * CardDetailsPreviousAttributes}. previous_attributes.card.anyOf[2] (Value): null.
     * previous_attributes.created_at (Optional): string or null. RFC3339 timestamp.
     * previous_attributes.created_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.created_at.anyOf[2] (Value):
     * null. previous_attributes.customer (Optional): {@link
     * ExpandedCustomerSummaryPreviousAttributes} or null. Present only when `expand` includes
     * `customer`; `null` when expanded and there is no related customer.
     * previous_attributes.customer.anyOf[1] (Value): {@link
     * ExpandedCustomerSummaryPreviousAttributes}. previous_attributes.customer.anyOf[2] (Value):
     * null. previous_attributes.customer_id (Optional): string or null. Customer this payment
     * method belongs to. previous_attributes.customer_id.anyOf[1] (Value): string. Customer this
     * payment method belongs to. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     * previous_attributes.customer_id.anyOf[2] (Value): null. previous_attributes.fingerprint
     * (Optional): string or null. A value that is the same for every saved copy of one card number
     * at this merchant and environment, so you can spot duplicates. It doesn't identify the card
     * anywhere else. A card added through Apple Pay or Google Pay can have a different fingerprint
     * from the same card typed in. previous_attributes.fingerprint.anyOf[1] (Value): string. A
     * value that is the same for every saved copy of one card number at this merchant and
     * environment, so you can spot duplicates. It doesn't identify the card anywhere else. A card
     * added through Apple Pay or Google Pay can have a different fingerprint from the same card
     * typed in. previous_attributes.fingerprint.anyOf[2] (Value): null.
     * previous_attributes.is_default (Optional): boolean or null. Whether this is the customer's
     * default payment method, the one Customer.default_payment_method_id names. Change the default
     * with PATCH /v1/customers/{customer_id}; that sends customer.updated, not a payment method
     * event. Existing subscriptions keep their payment_method_id.
     * previous_attributes.is_default.anyOf[1] (Value): boolean. Whether this is the customer's
     * default payment method, the one Customer.default_payment_method_id names. Change the default
     * with PATCH /v1/customers/{customer_id}; that sends customer.updated, not a payment method
     * event. Existing subscriptions keep their payment_method_id.
     * previous_attributes.is_default.anyOf[2] (Value): null. previous_attributes.is_removing
     * (Optional): boolean or null. Removal is in progress. Show this card as Removing and offer
     * retry with DELETE /v1/payment-methods/{payment_method_id}, or DELETE
     * /v1/me/payment-methods/{payment_method_id} for buyers. Do not offer it for a new payment,
     * subscription, or default. Flint retries abandoned removals automatically.
     * previous_attributes.is_removing.anyOf[1] (Value): boolean. Removal is in progress. Show this
     * card as Removing and offer retry with DELETE /v1/payment-methods/{payment_method_id}, or
     * DELETE /v1/me/payment-methods/{payment_method_id} for buyers. Do not offer it for a new
     * payment, subscription, or default. Flint retries abandoned removals automatically.
     * previous_attributes.is_removing.anyOf[2] (Value): null. previous_attributes.merchant_id
     * (Optional): string or null. ID of the merchant this resource belongs to.
     * previous_attributes.merchant_id.anyOf[1] (Value): string. ID of the merchant this resource
     * belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     * previous_attributes.merchant_id.anyOf[2] (Value): null. previous_attributes.origin
     * (Optional): string or null. `imported` for a saved card that Flint migrated from another
     * processor account. Omitted for other cards. Value enum: "imported".
     * previous_attributes.origin.anyOf[1] (Value): string. `imported` for a saved card that Flint
     * migrated from another processor account. Omitted for other cards. Value enum: "imported".
     * previous_attributes.origin.anyOf[2] (Value): null. previous_attributes.payment_method_id
     * (Optional): string or null. Unique identifier for this payment method, prefixed `pm_`.
     * previous_attributes.payment_method_id.anyOf[1] (Value): string. Unique identifier for this
     * payment method, prefixed `pm_`. Example: "pm_01KEZF7C0034B248TXXE4NXYFZ".
     * previous_attributes.payment_method_id.anyOf[2] (Value): null. previous_attributes.saved_with
     * (Optional): string or null. Where the buyer saved this payment method. Returned on
     * /v1/me/payment-methods responses when Flint wallet support is enabled. Accept future values.
     * Value enum: "flint", "store". previous_attributes.saved_with.anyOf[1] (Value): string. Where
     * the buyer saved this payment method. Returned on /v1/me/payment-methods responses when Flint
     * wallet support is enabled. Accept future values. Value enum: "flint", "store".
     * previous_attributes.saved_with.anyOf[2] (Value): null. previous_attributes.status
     * (Optional): string or null. The saved card lifecycle. Offer the card for a new payment only
     * when status is active and is_removing is false. Treat any other status as not chargeable,
     * including values added later. Value enum: "pending", "active", "expired", "archived",
     * "failed". previous_attributes.status.anyOf[1] (Value): string. The saved card lifecycle.
     * Offer the card for a new payment only when status is active and is_removing is false. Treat
     * any other status as not chargeable, including values added later. Value enum: "pending",
     * "active", "expired", "archived", "failed". previous_attributes.status.anyOf[2] (Value):
     * null. previous_attributes.type (Optional): string or null. Kind of payment method. Value
     * enum: "card". previous_attributes.type.anyOf[1] (Value): string. Kind of payment method.
     * Value enum: "card". previous_attributes.type.anyOf[2] (Value): null.
     * previous_attributes.updated_at (Optional): string or null. RFC3339 timestamp.
     * previous_attributes.updated_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.updated_at.anyOf[2] (Value):
     * null. previous_attributes.usage (Optional): string or null. When Flint may charge the
     * payment method. off_session payment methods can pay subscriptions, automatic invoices, and
     * other charges without the buyer, and can be a customer's default. on_session payment methods
     * were saved by the buyer in checkout for faster checkout at this merchant; Flint charges them
     * only in checkouts the buyer completes and refuses them for any charge without the buyer and
     * as a default. Payment methods saved before usage existed are off_session. Value enum:
     * "on_session", "off_session". previous_attributes.usage.anyOf[1] (Value): string. When Flint
     * may charge the payment method. off_session payment methods can pay subscriptions, automatic
     * invoices, and other charges without the buyer, and can be a customer's default. on_session
     * payment methods were saved by the buyer in checkout for faster checkout at this merchant;
     * Flint charges them only in checkouts the buyer completes and refuses them for any charge
     * without the buyer and as a default. Payment methods saved before usage existed are
     * off_session. Value enum: "on_session", "off_session". previous_attributes.usage.anyOf[2]
     * (Value): null.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields. card
         * (Optional): {@link CardDetails}. Brand, expiry and last four digits. Present when `type`
         * is `card`. Card details on a payment method: brand, expiration month and year, last four
         * digits, and the wallet when one was used. created_at (Required): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". customer (Optional):
         * {@link ExpandedCustomerSummary} or null. Present only when `expand` includes `customer`;
         * `null` when expanded and there is no related customer. customer.anyOf[1] (Value): {@link
         * ExpandedCustomerSummary}. A customer's summary fields, returned in place of a customer
         * ID when the customer is expanded. customer.anyOf[2] (Value): null. customer_id
         * (Required): string. Customer this payment method belongs to. Example:
         * "cus_01KEZF7C006X9JK6NZNA2SM9XD". fingerprint (Optional): string. A value that is the
         * same for every saved copy of one card number at this merchant and environment, so you
         * can spot duplicates. It doesn't identify the card anywhere else. A card added through
         * Apple Pay or Google Pay can have a different fingerprint from the same card typed in.
         * is_default (Required): boolean. Whether this is the customer's default payment method,
         * the one Customer.default_payment_method_id names. Change the default with PATCH
         * /v1/customers/{customer_id}; that sends customer.updated, not a payment method event.
         * Existing subscriptions keep their payment_method_id. is_removing (Required): boolean.
         * Removal is in progress. Show this card as Removing and offer retry with DELETE
         * /v1/payment-methods/{payment_method_id}, or DELETE
         * /v1/me/payment-methods/{payment_method_id} for buyers. Do not offer it for a new
         * payment, subscription, or default. Flint retries abandoned removals automatically.
         * merchant_id (Required): string. ID of the merchant this resource belongs to. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". origin (Optional): string. `imported` for a saved card
         * that Flint migrated from another processor account. Omitted for other cards. Value enum:
         * "imported". payment_method_id (Required): string. Unique identifier for this payment
         * method, prefixed `pm_`. Example: "pm_01KEZF7C0034B248TXXE4NXYFZ". saved_with (Optional):
         * string. Where the buyer saved this payment method. Returned on /v1/me/payment-methods
         * responses when Flint wallet support is enabled. Accept future values. Value enum:
         * "flint", "store". status (Required): string. The saved card lifecycle. Offer the card
         * for a new payment only when status is active and is_removing is false. Treat any other
         * status as not chargeable, including values added later. Value enum: "pending", "active",
         * "expired", "archived", "failed". type (Required): string. Kind of payment method. Value
         * enum: "card". updated_at (Required): string. RFC3339 timestamp. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". usage (Required): string. When Flint may charge the
         * payment method. off_session payment methods can pay subscriptions, automatic invoices,
         * and other charges without the buyer, and can be a customer's default. on_session payment
         * methods were saved by the buyer in checkout for faster checkout at this merchant; Flint
         * charges them only in checkouts the buyer completes and refuses them for any charge
         * without the buyer and as a default. Payment methods saved before usage existed are
         * off_session. Value enum: "on_session", "off_session".
         */
        "object": {
            /**
             * Brand, expiry and last four digits. Present when `type` is `card`. Card details on a
             * payment method: brand, expiration month and year, last four digits, and the wallet
             * when one was used.
             */
            "card"?: CardDetails;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Present only when `expand` includes `customer`; `null` when expanded and there is no
             * related customer. anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's
             * summary fields, returned in place of a customer ID when the customer is expanded.
             * anyOf[2] (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummary) | (null));
            /**
             * Customer this payment method belongs to. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
             */
            "customer_id": string;
            /**
             * A value that is the same for every saved copy of one card number at this merchant
             * and environment, so you can spot duplicates. It doesn't identify the card anywhere
             * else. A card added through Apple Pay or Google Pay can have a different fingerprint
             * from the same card typed in.
             */
            "fingerprint"?: string;
            /**
             * Whether this is the customer's default payment method, the one
             * Customer.default_payment_method_id names. Change the default with PATCH
             * /v1/customers/{customer_id}; that sends customer.updated, not a payment method
             * event. Existing subscriptions keep their payment_method_id.
             */
            "is_default": boolean;
            /**
             * Removal is in progress. Show this card as Removing and offer retry with DELETE
             * /v1/payment-methods/{payment_method_id}, or DELETE
             * /v1/me/payment-methods/{payment_method_id} for buyers. Do not offer it for a new
             * payment, subscription, or default. Flint retries abandoned removals automatically.
             */
            "is_removing": boolean;
            /**
             * ID of the merchant this resource belongs to. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id": string;
            /**
             * `imported` for a saved card that Flint migrated from another processor account.
             * Omitted for other cards. Value enum: "imported".
             */
            "origin"?: "imported" | (string & {});
            /**
             * Unique identifier for this payment method, prefixed `pm_`. Example:
             * "pm_01KEZF7C0034B248TXXE4NXYFZ".
             */
            "payment_method_id": string;
            /**
             * Where the buyer saved this payment method. Returned on /v1/me/payment-methods
             * responses when Flint wallet support is enabled. Accept future values. Value enum:
             * "flint", "store".
             */
            "saved_with"?: "flint" | "store" | (string & {});
            /**
             * The saved card lifecycle. Offer the card for a new payment only when status is
             * active and is_removing is false. Treat any other status as not chargeable, including
             * values added later. Value enum: "pending", "active", "expired", "archived",
             * "failed".
             */
            "status": "pending" | "active" | "expired" | "archived" | "failed" | (string & {});
            /** Kind of payment method. Value enum: "card". */
            "type": "card" | (string & {});
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * When Flint may charge the payment method. off_session payment methods can pay
             * subscriptions, automatic invoices, and other charges without the buyer, and can be a
             * customer's default. on_session payment methods were saved by the buyer in checkout
             * for faster checkout at this merchant; Flint charges them only in checkouts the buyer
             * completes and refuses them for any charge without the buyer and as a default.
             * Payment methods saved before usage existed are off_session. Value enum:
             * "on_session", "off_session".
             */
            "usage": "on_session" | "off_session" | (string & {});
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. card (Optional): {@link
         * CardDetailsPreviousAttributes} or null. Brand, expiry and last four digits. Present when
         * `type` is `card`. card.anyOf[1] (Value): {@link CardDetailsPreviousAttributes}.
         * card.anyOf[2] (Value): null. created_at (Optional): string or null. RFC3339 timestamp.
         * created_at.anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". created_at.anyOf[2] (Value): null. customer (Optional): {@link
         * ExpandedCustomerSummaryPreviousAttributes} or null. Present only when `expand` includes
         * `customer`; `null` when expanded and there is no related customer. customer.anyOf[1]
         * (Value): {@link ExpandedCustomerSummaryPreviousAttributes}. customer.anyOf[2] (Value):
         * null. customer_id (Optional): string or null. Customer this payment method belongs to.
         * customer_id.anyOf[1] (Value): string. Customer this payment method belongs to. Example:
         * "cus_01KEZF7C006X9JK6NZNA2SM9XD". customer_id.anyOf[2] (Value): null. fingerprint
         * (Optional): string or null. A value that is the same for every saved copy of one card
         * number at this merchant and environment, so you can spot duplicates. It doesn't identify
         * the card anywhere else. A card added through Apple Pay or Google Pay can have a
         * different fingerprint from the same card typed in. fingerprint.anyOf[1] (Value): string.
         * A value that is the same for every saved copy of one card number at this merchant and
         * environment, so you can spot duplicates. It doesn't identify the card anywhere else. A
         * card added through Apple Pay or Google Pay can have a different fingerprint from the
         * same card typed in. fingerprint.anyOf[2] (Value): null. is_default (Optional): boolean
         * or null. Whether this is the customer's default payment method, the one
         * Customer.default_payment_method_id names. Change the default with PATCH
         * /v1/customers/{customer_id}; that sends customer.updated, not a payment method event.
         * Existing subscriptions keep their payment_method_id. is_default.anyOf[1] (Value):
         * boolean. Whether this is the customer's default payment method, the one
         * Customer.default_payment_method_id names. Change the default with PATCH
         * /v1/customers/{customer_id}; that sends customer.updated, not a payment method event.
         * Existing subscriptions keep their payment_method_id. is_default.anyOf[2] (Value): null.
         * is_removing (Optional): boolean or null. Removal is in progress. Show this card as
         * Removing and offer retry with DELETE /v1/payment-methods/{payment_method_id}, or DELETE
         * /v1/me/payment-methods/{payment_method_id} for buyers. Do not offer it for a new
         * payment, subscription, or default. Flint retries abandoned removals automatically.
         * is_removing.anyOf[1] (Value): boolean. Removal is in progress. Show this card as
         * Removing and offer retry with DELETE /v1/payment-methods/{payment_method_id}, or DELETE
         * /v1/me/payment-methods/{payment_method_id} for buyers. Do not offer it for a new
         * payment, subscription, or default. Flint retries abandoned removals automatically.
         * is_removing.anyOf[2] (Value): null. merchant_id (Optional): string or null. ID of the
         * merchant this resource belongs to. merchant_id.anyOf[1] (Value): string. ID of the
         * merchant this resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
         * merchant_id.anyOf[2] (Value): null. origin (Optional): string or null. `imported` for a
         * saved card that Flint migrated from another processor account. Omitted for other cards.
         * Value enum: "imported". origin.anyOf[1] (Value): string. `imported` for a saved card
         * that Flint migrated from another processor account. Omitted for other cards. Value enum:
         * "imported". origin.anyOf[2] (Value): null. payment_method_id (Optional): string or null.
         * Unique identifier for this payment method, prefixed `pm_`. payment_method_id.anyOf[1]
         * (Value): string. Unique identifier for this payment method, prefixed `pm_`. Example:
         * "pm_01KEZF7C0034B248TXXE4NXYFZ". payment_method_id.anyOf[2] (Value): null. saved_with
         * (Optional): string or null. Where the buyer saved this payment method. Returned on
         * /v1/me/payment-methods responses when Flint wallet support is enabled. Accept future
         * values. Value enum: "flint", "store". saved_with.anyOf[1] (Value): string. Where the
         * buyer saved this payment method. Returned on /v1/me/payment-methods responses when Flint
         * wallet support is enabled. Accept future values. Value enum: "flint", "store".
         * saved_with.anyOf[2] (Value): null. status (Optional): string or null. The saved card
         * lifecycle. Offer the card for a new payment only when status is active and is_removing
         * is false. Treat any other status as not chargeable, including values added later. Value
         * enum: "pending", "active", "expired", "archived", "failed". status.anyOf[1] (Value):
         * string. The saved card lifecycle. Offer the card for a new payment only when status is
         * active and is_removing is false. Treat any other status as not chargeable, including
         * values added later. Value enum: "pending", "active", "expired", "archived", "failed".
         * status.anyOf[2] (Value): null. type (Optional): string or null. Kind of payment method.
         * Value enum: "card". type.anyOf[1] (Value): string. Kind of payment method. Value enum:
         * "card". type.anyOf[2] (Value): null. updated_at (Optional): string or null. RFC3339
         * timestamp. updated_at.anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". updated_at.anyOf[2] (Value): null. usage (Optional):
         * string or null. When Flint may charge the payment method. off_session payment methods
         * can pay subscriptions, automatic invoices, and other charges without the buyer, and can
         * be a customer's default. on_session payment methods were saved by the buyer in checkout
         * for faster checkout at this merchant; Flint charges them only in checkouts the buyer
         * completes and refuses them for any charge without the buyer and as a default. Payment
         * methods saved before usage existed are off_session. Value enum: "on_session",
         * "off_session". usage.anyOf[1] (Value): string. When Flint may charge the payment method.
         * off_session payment methods can pay subscriptions, automatic invoices, and other charges
         * without the buyer, and can be a customer's default. on_session payment methods were
         * saved by the buyer in checkout for faster checkout at this merchant; Flint charges them
         * only in checkouts the buyer completes and refuses them for any charge without the buyer
         * and as a default. Payment methods saved before usage existed are off_session. Value
         * enum: "on_session", "off_session". usage.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * Brand, expiry and last four digits. Present when `type` is `card`. anyOf[1] (Value):
             * {@link CardDetailsPreviousAttributes}. anyOf[2] (Value): null.
             */
            "card"?: ((CardDetailsPreviousAttributes) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * Present only when `expand` includes `customer`; `null` when expanded and there is no
             * related customer. anyOf[1] (Value): {@link
             * ExpandedCustomerSummaryPreviousAttributes}. anyOf[2] (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummaryPreviousAttributes) | (null));
            /**
             * Customer this payment method belongs to. anyOf[1] (Value): string. Customer this
             * payment method belongs to. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". anyOf[2]
             * (Value): null.
             */
            "customer_id"?: ((string) | (null));
            /**
             * A value that is the same for every saved copy of one card number at this merchant
             * and environment, so you can spot duplicates. It doesn't identify the card anywhere
             * else. A card added through Apple Pay or Google Pay can have a different fingerprint
             * from the same card typed in. anyOf[1] (Value): string. A value that is the same for
             * every saved copy of one card number at this merchant and environment, so you can
             * spot duplicates. It doesn't identify the card anywhere else. A card added through
             * Apple Pay or Google Pay can have a different fingerprint from the same card typed
             * in. anyOf[2] (Value): null.
             */
            "fingerprint"?: ((string) | (null));
            /**
             * Whether this is the customer's default payment method, the one
             * Customer.default_payment_method_id names. Change the default with PATCH
             * /v1/customers/{customer_id}; that sends customer.updated, not a payment method
             * event. Existing subscriptions keep their payment_method_id. anyOf[1] (Value):
             * boolean. Whether this is the customer's default payment method, the one
             * Customer.default_payment_method_id names. Change the default with PATCH
             * /v1/customers/{customer_id}; that sends customer.updated, not a payment method
             * event. Existing subscriptions keep their payment_method_id. anyOf[2] (Value): null.
             */
            "is_default"?: ((boolean) | (null));
            /**
             * Removal is in progress. Show this card as Removing and offer retry with DELETE
             * /v1/payment-methods/{payment_method_id}, or DELETE
             * /v1/me/payment-methods/{payment_method_id} for buyers. Do not offer it for a new
             * payment, subscription, or default. Flint retries abandoned removals automatically.
             * anyOf[1] (Value): boolean. Removal is in progress. Show this card as Removing and
             * offer retry with DELETE /v1/payment-methods/{payment_method_id}, or DELETE
             * /v1/me/payment-methods/{payment_method_id} for buyers. Do not offer it for a new
             * payment, subscription, or default. Flint retries abandoned removals automatically.
             * anyOf[2] (Value): null.
             */
            "is_removing"?: ((boolean) | (null));
            /**
             * ID of the merchant this resource belongs to. anyOf[1] (Value): string. ID of the
             * merchant this resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             * anyOf[2] (Value): null.
             */
            "merchant_id"?: ((string) | (null));
            /**
             * `imported` for a saved card that Flint migrated from another processor account.
             * Omitted for other cards. Value enum: "imported". anyOf[1] (Value): string.
             * `imported` for a saved card that Flint migrated from another processor account.
             * Omitted for other cards. Value enum: "imported". anyOf[2] (Value): null.
             */
            "origin"?: (("imported" | (string & {})) | (null));
            /**
             * Unique identifier for this payment method, prefixed `pm_`. anyOf[1] (Value): string.
             * Unique identifier for this payment method, prefixed `pm_`. Example:
             * "pm_01KEZF7C0034B248TXXE4NXYFZ". anyOf[2] (Value): null.
             */
            "payment_method_id"?: ((string) | (null));
            /**
             * Where the buyer saved this payment method. Returned on /v1/me/payment-methods
             * responses when Flint wallet support is enabled. Accept future values. Value enum:
             * "flint", "store". anyOf[1] (Value): string. Where the buyer saved this payment
             * method. Returned on /v1/me/payment-methods responses when Flint wallet support is
             * enabled. Accept future values. Value enum: "flint", "store". anyOf[2] (Value): null.
             */
            "saved_with"?: (("flint" | "store" | (string & {})) | (null));
            /**
             * The saved card lifecycle. Offer the card for a new payment only when status is
             * active and is_removing is false. Treat any other status as not chargeable, including
             * values added later. Value enum: "pending", "active", "expired", "archived",
             * "failed". anyOf[1] (Value): string. The saved card lifecycle. Offer the card for a
             * new payment only when status is active and is_removing is false. Treat any other
             * status as not chargeable, including values added later. Value enum: "pending",
             * "active", "expired", "archived", "failed". anyOf[2] (Value): null.
             */
            "status"?: (("pending" | "active" | "expired" | "archived" | "failed" | (string & {})) | (null));
            /**
             * Kind of payment method. Value enum: "card". anyOf[1] (Value): string. Kind of
             * payment method. Value enum: "card". anyOf[2] (Value): null.
             */
            "type"?: (("card" | (string & {})) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * When Flint may charge the payment method. off_session payment methods can pay
             * subscriptions, automatic invoices, and other charges without the buyer, and can be a
             * customer's default. on_session payment methods were saved by the buyer in checkout
             * for faster checkout at this merchant; Flint charges them only in checkouts the buyer
             * completes and refuses them for any charge without the buyer and as a default.
             * Payment methods saved before usage existed are off_session. Value enum:
             * "on_session", "off_session". anyOf[1] (Value): string. When Flint may charge the
             * payment method. off_session payment methods can pay subscriptions, automatic
             * invoices, and other charges without the buyer, and can be a customer's default.
             * on_session payment methods were saved by the buyer in checkout for faster checkout
             * at this merchant; Flint charges them only in checkouts the buyer completes and
             * refuses them for any charge without the buyer and as a default. Payment methods
             * saved before usage existed are off_session. Value enum: "on_session", "off_session".
             * anyOf[2] (Value): null.
             */
            "usage"?: (("on_session" | "off_session" | (string & {})) | (null));
        });
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "payment_method.activated". */
    "event_type"?: "payment_method.activated";
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
 * The `payment_method.activated` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type PaymentMethodActivatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.card (Optional): {@link CardDetails}. Brand, expiry and last four
     * digits. Present when `type` is `card`. Card details on a payment method: brand, expiration
     * month and year, last four digits, and the wallet when one was used. object.created_at
     * (Required): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.customer (Optional): {@link ExpandedCustomerSummary} or null. Present only when
     * `expand` includes `customer`; `null` when expanded and there is no related customer.
     * object.customer.anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's summary
     * fields, returned in place of a customer ID when the customer is expanded.
     * object.customer.anyOf[2] (Value): null. object.customer_id (Required): string. Customer this
     * payment method belongs to. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". object.fingerprint
     * (Optional): string. A value that is the same for every saved copy of one card number at this
     * merchant and environment, so you can spot duplicates. It doesn't identify the card anywhere
     * else. A card added through Apple Pay or Google Pay can have a different fingerprint from the
     * same card typed in. object.is_default (Required): boolean. Whether this is the customer's
     * default payment method, the one Customer.default_payment_method_id names. Change the default
     * with PATCH /v1/customers/{customer_id}; that sends customer.updated, not a payment method
     * event. Existing subscriptions keep their payment_method_id. object.is_removing (Required):
     * boolean. Removal is in progress. Show this card as Removing and offer retry with DELETE
     * /v1/payment-methods/{payment_method_id}, or DELETE
     * /v1/me/payment-methods/{payment_method_id} for buyers. Do not offer it for a new payment,
     * subscription, or default. Flint retries abandoned removals automatically. object.merchant_id
     * (Required): string. ID of the merchant this resource belongs to. Example:
     * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.origin (Optional): string. `imported` for a saved
     * card that Flint migrated from another processor account. Omitted for other cards. Value
     * enum: "imported". object.payment_method_id (Required): string. Unique identifier for this
     * payment method, prefixed `pm_`. Example: "pm_01KEZF7C0034B248TXXE4NXYFZ". object.saved_with
     * (Optional): string. Where the buyer saved this payment method. Returned on
     * /v1/me/payment-methods responses when Flint wallet support is enabled. Accept future values.
     * Value enum: "flint", "store". object.status (Required): string. The saved card lifecycle.
     * Offer the card for a new payment only when status is active and is_removing is false. Treat
     * any other status as not chargeable, including values added later. Value enum: "pending",
     * "active", "expired", "archived", "failed". object.type (Required): string. Kind of payment
     * method. Value enum: "card". object.updated_at (Required): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.usage (Required): string. When Flint may
     * charge the payment method. off_session payment methods can pay subscriptions, automatic
     * invoices, and other charges without the buyer, and can be a customer's default. on_session
     * payment methods were saved by the buyer in checkout for faster checkout at this merchant;
     * Flint charges them only in checkouts the buyer completes and refuses them for any charge
     * without the buyer and as a default. Payment methods saved before usage existed are
     * off_session. Value enum: "on_session", "off_session". previous_attributes (Optional):
     * object. Previous values of changed top-level fields in data.object, at this delivery's API
     * version. Nested changes include the whole previous top-level value. A value is null when the
     * field was absent before the change. Omitted when Flint did not record the previous state,
     * including synthetic test events. previous_attributes.card (Optional): {@link
     * CardDetailsPreviousAttributes} or null. Brand, expiry and last four digits. Present when
     * `type` is `card`. previous_attributes.card.anyOf[1] (Value): {@link
     * CardDetailsPreviousAttributes}. previous_attributes.card.anyOf[2] (Value): null.
     * previous_attributes.created_at (Optional): string or null. RFC3339 timestamp.
     * previous_attributes.created_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.created_at.anyOf[2] (Value):
     * null. previous_attributes.customer (Optional): {@link
     * ExpandedCustomerSummaryPreviousAttributes} or null. Present only when `expand` includes
     * `customer`; `null` when expanded and there is no related customer.
     * previous_attributes.customer.anyOf[1] (Value): {@link
     * ExpandedCustomerSummaryPreviousAttributes}. previous_attributes.customer.anyOf[2] (Value):
     * null. previous_attributes.customer_id (Optional): string or null. Customer this payment
     * method belongs to. previous_attributes.customer_id.anyOf[1] (Value): string. Customer this
     * payment method belongs to. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     * previous_attributes.customer_id.anyOf[2] (Value): null. previous_attributes.fingerprint
     * (Optional): string or null. A value that is the same for every saved copy of one card number
     * at this merchant and environment, so you can spot duplicates. It doesn't identify the card
     * anywhere else. A card added through Apple Pay or Google Pay can have a different fingerprint
     * from the same card typed in. previous_attributes.fingerprint.anyOf[1] (Value): string. A
     * value that is the same for every saved copy of one card number at this merchant and
     * environment, so you can spot duplicates. It doesn't identify the card anywhere else. A card
     * added through Apple Pay or Google Pay can have a different fingerprint from the same card
     * typed in. previous_attributes.fingerprint.anyOf[2] (Value): null.
     * previous_attributes.is_default (Optional): boolean or null. Whether this is the customer's
     * default payment method, the one Customer.default_payment_method_id names. Change the default
     * with PATCH /v1/customers/{customer_id}; that sends customer.updated, not a payment method
     * event. Existing subscriptions keep their payment_method_id.
     * previous_attributes.is_default.anyOf[1] (Value): boolean. Whether this is the customer's
     * default payment method, the one Customer.default_payment_method_id names. Change the default
     * with PATCH /v1/customers/{customer_id}; that sends customer.updated, not a payment method
     * event. Existing subscriptions keep their payment_method_id.
     * previous_attributes.is_default.anyOf[2] (Value): null. previous_attributes.is_removing
     * (Optional): boolean or null. Removal is in progress. Show this card as Removing and offer
     * retry with DELETE /v1/payment-methods/{payment_method_id}, or DELETE
     * /v1/me/payment-methods/{payment_method_id} for buyers. Do not offer it for a new payment,
     * subscription, or default. Flint retries abandoned removals automatically.
     * previous_attributes.is_removing.anyOf[1] (Value): boolean. Removal is in progress. Show this
     * card as Removing and offer retry with DELETE /v1/payment-methods/{payment_method_id}, or
     * DELETE /v1/me/payment-methods/{payment_method_id} for buyers. Do not offer it for a new
     * payment, subscription, or default. Flint retries abandoned removals automatically.
     * previous_attributes.is_removing.anyOf[2] (Value): null. previous_attributes.merchant_id
     * (Optional): string or null. ID of the merchant this resource belongs to.
     * previous_attributes.merchant_id.anyOf[1] (Value): string. ID of the merchant this resource
     * belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     * previous_attributes.merchant_id.anyOf[2] (Value): null. previous_attributes.origin
     * (Optional): string or null. `imported` for a saved card that Flint migrated from another
     * processor account. Omitted for other cards. Value enum: "imported".
     * previous_attributes.origin.anyOf[1] (Value): string. `imported` for a saved card that Flint
     * migrated from another processor account. Omitted for other cards. Value enum: "imported".
     * previous_attributes.origin.anyOf[2] (Value): null. previous_attributes.payment_method_id
     * (Optional): string or null. Unique identifier for this payment method, prefixed `pm_`.
     * previous_attributes.payment_method_id.anyOf[1] (Value): string. Unique identifier for this
     * payment method, prefixed `pm_`. Example: "pm_01KEZF7C0034B248TXXE4NXYFZ".
     * previous_attributes.payment_method_id.anyOf[2] (Value): null. previous_attributes.saved_with
     * (Optional): string or null. Where the buyer saved this payment method. Returned on
     * /v1/me/payment-methods responses when Flint wallet support is enabled. Accept future values.
     * Value enum: "flint", "store". previous_attributes.saved_with.anyOf[1] (Value): string. Where
     * the buyer saved this payment method. Returned on /v1/me/payment-methods responses when Flint
     * wallet support is enabled. Accept future values. Value enum: "flint", "store".
     * previous_attributes.saved_with.anyOf[2] (Value): null. previous_attributes.status
     * (Optional): string or null. The saved card lifecycle. Offer the card for a new payment only
     * when status is active and is_removing is false. Treat any other status as not chargeable,
     * including values added later. Value enum: "pending", "active", "expired", "archived",
     * "failed". previous_attributes.status.anyOf[1] (Value): string. The saved card lifecycle.
     * Offer the card for a new payment only when status is active and is_removing is false. Treat
     * any other status as not chargeable, including values added later. Value enum: "pending",
     * "active", "expired", "archived", "failed". previous_attributes.status.anyOf[2] (Value):
     * null. previous_attributes.type (Optional): string or null. Kind of payment method. Value
     * enum: "card". previous_attributes.type.anyOf[1] (Value): string. Kind of payment method.
     * Value enum: "card". previous_attributes.type.anyOf[2] (Value): null.
     * previous_attributes.updated_at (Optional): string or null. RFC3339 timestamp.
     * previous_attributes.updated_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.updated_at.anyOf[2] (Value):
     * null. previous_attributes.usage (Optional): string or null. When Flint may charge the
     * payment method. off_session payment methods can pay subscriptions, automatic invoices, and
     * other charges without the buyer, and can be a customer's default. on_session payment methods
     * were saved by the buyer in checkout for faster checkout at this merchant; Flint charges them
     * only in checkouts the buyer completes and refuses them for any charge without the buyer and
     * as a default. Payment methods saved before usage existed are off_session. Value enum:
     * "on_session", "off_session". previous_attributes.usage.anyOf[1] (Value): string. When Flint
     * may charge the payment method. off_session payment methods can pay subscriptions, automatic
     * invoices, and other charges without the buyer, and can be a customer's default. on_session
     * payment methods were saved by the buyer in checkout for faster checkout at this merchant;
     * Flint charges them only in checkouts the buyer completes and refuses them for any charge
     * without the buyer and as a default. Payment methods saved before usage existed are
     * off_session. Value enum: "on_session", "off_session". previous_attributes.usage.anyOf[2]
     * (Value): null.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields. card
         * (Optional): {@link CardDetails}. Brand, expiry and last four digits. Present when `type`
         * is `card`. Card details on a payment method: brand, expiration month and year, last four
         * digits, and the wallet when one was used. created_at (Required): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". customer (Optional):
         * {@link ExpandedCustomerSummary} or null. Present only when `expand` includes `customer`;
         * `null` when expanded and there is no related customer. customer.anyOf[1] (Value): {@link
         * ExpandedCustomerSummary}. A customer's summary fields, returned in place of a customer
         * ID when the customer is expanded. customer.anyOf[2] (Value): null. customer_id
         * (Required): string. Customer this payment method belongs to. Example:
         * "cus_01KEZF7C006X9JK6NZNA2SM9XD". fingerprint (Optional): string. A value that is the
         * same for every saved copy of one card number at this merchant and environment, so you
         * can spot duplicates. It doesn't identify the card anywhere else. A card added through
         * Apple Pay or Google Pay can have a different fingerprint from the same card typed in.
         * is_default (Required): boolean. Whether this is the customer's default payment method,
         * the one Customer.default_payment_method_id names. Change the default with PATCH
         * /v1/customers/{customer_id}; that sends customer.updated, not a payment method event.
         * Existing subscriptions keep their payment_method_id. is_removing (Required): boolean.
         * Removal is in progress. Show this card as Removing and offer retry with DELETE
         * /v1/payment-methods/{payment_method_id}, or DELETE
         * /v1/me/payment-methods/{payment_method_id} for buyers. Do not offer it for a new
         * payment, subscription, or default. Flint retries abandoned removals automatically.
         * merchant_id (Required): string. ID of the merchant this resource belongs to. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". origin (Optional): string. `imported` for a saved card
         * that Flint migrated from another processor account. Omitted for other cards. Value enum:
         * "imported". payment_method_id (Required): string. Unique identifier for this payment
         * method, prefixed `pm_`. Example: "pm_01KEZF7C0034B248TXXE4NXYFZ". saved_with (Optional):
         * string. Where the buyer saved this payment method. Returned on /v1/me/payment-methods
         * responses when Flint wallet support is enabled. Accept future values. Value enum:
         * "flint", "store". status (Required): string. The saved card lifecycle. Offer the card
         * for a new payment only when status is active and is_removing is false. Treat any other
         * status as not chargeable, including values added later. Value enum: "pending", "active",
         * "expired", "archived", "failed". type (Required): string. Kind of payment method. Value
         * enum: "card". updated_at (Required): string. RFC3339 timestamp. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". usage (Required): string. When Flint may charge the
         * payment method. off_session payment methods can pay subscriptions, automatic invoices,
         * and other charges without the buyer, and can be a customer's default. on_session payment
         * methods were saved by the buyer in checkout for faster checkout at this merchant; Flint
         * charges them only in checkouts the buyer completes and refuses them for any charge
         * without the buyer and as a default. Payment methods saved before usage existed are
         * off_session. Value enum: "on_session", "off_session".
         */
        "object": {
            /**
             * Brand, expiry and last four digits. Present when `type` is `card`. Card details on a
             * payment method: brand, expiration month and year, last four digits, and the wallet
             * when one was used.
             */
            "card"?: CardDetails;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Present only when `expand` includes `customer`; `null` when expanded and there is no
             * related customer. anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's
             * summary fields, returned in place of a customer ID when the customer is expanded.
             * anyOf[2] (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummary) | (null));
            /**
             * Customer this payment method belongs to. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
             */
            "customer_id": string;
            /**
             * A value that is the same for every saved copy of one card number at this merchant
             * and environment, so you can spot duplicates. It doesn't identify the card anywhere
             * else. A card added through Apple Pay or Google Pay can have a different fingerprint
             * from the same card typed in.
             */
            "fingerprint"?: string;
            /**
             * Whether this is the customer's default payment method, the one
             * Customer.default_payment_method_id names. Change the default with PATCH
             * /v1/customers/{customer_id}; that sends customer.updated, not a payment method
             * event. Existing subscriptions keep their payment_method_id.
             */
            "is_default": boolean;
            /**
             * Removal is in progress. Show this card as Removing and offer retry with DELETE
             * /v1/payment-methods/{payment_method_id}, or DELETE
             * /v1/me/payment-methods/{payment_method_id} for buyers. Do not offer it for a new
             * payment, subscription, or default. Flint retries abandoned removals automatically.
             */
            "is_removing": boolean;
            /**
             * ID of the merchant this resource belongs to. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id": string;
            /**
             * `imported` for a saved card that Flint migrated from another processor account.
             * Omitted for other cards. Value enum: "imported".
             */
            "origin"?: "imported" | (string & {});
            /**
             * Unique identifier for this payment method, prefixed `pm_`. Example:
             * "pm_01KEZF7C0034B248TXXE4NXYFZ".
             */
            "payment_method_id": string;
            /**
             * Where the buyer saved this payment method. Returned on /v1/me/payment-methods
             * responses when Flint wallet support is enabled. Accept future values. Value enum:
             * "flint", "store".
             */
            "saved_with"?: "flint" | "store" | (string & {});
            /**
             * The saved card lifecycle. Offer the card for a new payment only when status is
             * active and is_removing is false. Treat any other status as not chargeable, including
             * values added later. Value enum: "pending", "active", "expired", "archived",
             * "failed".
             */
            "status": "pending" | "active" | "expired" | "archived" | "failed" | (string & {});
            /** Kind of payment method. Value enum: "card". */
            "type": "card" | (string & {});
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * When Flint may charge the payment method. off_session payment methods can pay
             * subscriptions, automatic invoices, and other charges without the buyer, and can be a
             * customer's default. on_session payment methods were saved by the buyer in checkout
             * for faster checkout at this merchant; Flint charges them only in checkouts the buyer
             * completes and refuses them for any charge without the buyer and as a default.
             * Payment methods saved before usage existed are off_session. Value enum:
             * "on_session", "off_session".
             */
            "usage": "on_session" | "off_session" | (string & {});
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. card (Optional): {@link
         * CardDetailsPreviousAttributes} or null. Brand, expiry and last four digits. Present when
         * `type` is `card`. card.anyOf[1] (Value): {@link CardDetailsPreviousAttributes}.
         * card.anyOf[2] (Value): null. created_at (Optional): string or null. RFC3339 timestamp.
         * created_at.anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". created_at.anyOf[2] (Value): null. customer (Optional): {@link
         * ExpandedCustomerSummaryPreviousAttributes} or null. Present only when `expand` includes
         * `customer`; `null` when expanded and there is no related customer. customer.anyOf[1]
         * (Value): {@link ExpandedCustomerSummaryPreviousAttributes}. customer.anyOf[2] (Value):
         * null. customer_id (Optional): string or null. Customer this payment method belongs to.
         * customer_id.anyOf[1] (Value): string. Customer this payment method belongs to. Example:
         * "cus_01KEZF7C006X9JK6NZNA2SM9XD". customer_id.anyOf[2] (Value): null. fingerprint
         * (Optional): string or null. A value that is the same for every saved copy of one card
         * number at this merchant and environment, so you can spot duplicates. It doesn't identify
         * the card anywhere else. A card added through Apple Pay or Google Pay can have a
         * different fingerprint from the same card typed in. fingerprint.anyOf[1] (Value): string.
         * A value that is the same for every saved copy of one card number at this merchant and
         * environment, so you can spot duplicates. It doesn't identify the card anywhere else. A
         * card added through Apple Pay or Google Pay can have a different fingerprint from the
         * same card typed in. fingerprint.anyOf[2] (Value): null. is_default (Optional): boolean
         * or null. Whether this is the customer's default payment method, the one
         * Customer.default_payment_method_id names. Change the default with PATCH
         * /v1/customers/{customer_id}; that sends customer.updated, not a payment method event.
         * Existing subscriptions keep their payment_method_id. is_default.anyOf[1] (Value):
         * boolean. Whether this is the customer's default payment method, the one
         * Customer.default_payment_method_id names. Change the default with PATCH
         * /v1/customers/{customer_id}; that sends customer.updated, not a payment method event.
         * Existing subscriptions keep their payment_method_id. is_default.anyOf[2] (Value): null.
         * is_removing (Optional): boolean or null. Removal is in progress. Show this card as
         * Removing and offer retry with DELETE /v1/payment-methods/{payment_method_id}, or DELETE
         * /v1/me/payment-methods/{payment_method_id} for buyers. Do not offer it for a new
         * payment, subscription, or default. Flint retries abandoned removals automatically.
         * is_removing.anyOf[1] (Value): boolean. Removal is in progress. Show this card as
         * Removing and offer retry with DELETE /v1/payment-methods/{payment_method_id}, or DELETE
         * /v1/me/payment-methods/{payment_method_id} for buyers. Do not offer it for a new
         * payment, subscription, or default. Flint retries abandoned removals automatically.
         * is_removing.anyOf[2] (Value): null. merchant_id (Optional): string or null. ID of the
         * merchant this resource belongs to. merchant_id.anyOf[1] (Value): string. ID of the
         * merchant this resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
         * merchant_id.anyOf[2] (Value): null. origin (Optional): string or null. `imported` for a
         * saved card that Flint migrated from another processor account. Omitted for other cards.
         * Value enum: "imported". origin.anyOf[1] (Value): string. `imported` for a saved card
         * that Flint migrated from another processor account. Omitted for other cards. Value enum:
         * "imported". origin.anyOf[2] (Value): null. payment_method_id (Optional): string or null.
         * Unique identifier for this payment method, prefixed `pm_`. payment_method_id.anyOf[1]
         * (Value): string. Unique identifier for this payment method, prefixed `pm_`. Example:
         * "pm_01KEZF7C0034B248TXXE4NXYFZ". payment_method_id.anyOf[2] (Value): null. saved_with
         * (Optional): string or null. Where the buyer saved this payment method. Returned on
         * /v1/me/payment-methods responses when Flint wallet support is enabled. Accept future
         * values. Value enum: "flint", "store". saved_with.anyOf[1] (Value): string. Where the
         * buyer saved this payment method. Returned on /v1/me/payment-methods responses when Flint
         * wallet support is enabled. Accept future values. Value enum: "flint", "store".
         * saved_with.anyOf[2] (Value): null. status (Optional): string or null. The saved card
         * lifecycle. Offer the card for a new payment only when status is active and is_removing
         * is false. Treat any other status as not chargeable, including values added later. Value
         * enum: "pending", "active", "expired", "archived", "failed". status.anyOf[1] (Value):
         * string. The saved card lifecycle. Offer the card for a new payment only when status is
         * active and is_removing is false. Treat any other status as not chargeable, including
         * values added later. Value enum: "pending", "active", "expired", "archived", "failed".
         * status.anyOf[2] (Value): null. type (Optional): string or null. Kind of payment method.
         * Value enum: "card". type.anyOf[1] (Value): string. Kind of payment method. Value enum:
         * "card". type.anyOf[2] (Value): null. updated_at (Optional): string or null. RFC3339
         * timestamp. updated_at.anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". updated_at.anyOf[2] (Value): null. usage (Optional):
         * string or null. When Flint may charge the payment method. off_session payment methods
         * can pay subscriptions, automatic invoices, and other charges without the buyer, and can
         * be a customer's default. on_session payment methods were saved by the buyer in checkout
         * for faster checkout at this merchant; Flint charges them only in checkouts the buyer
         * completes and refuses them for any charge without the buyer and as a default. Payment
         * methods saved before usage existed are off_session. Value enum: "on_session",
         * "off_session". usage.anyOf[1] (Value): string. When Flint may charge the payment method.
         * off_session payment methods can pay subscriptions, automatic invoices, and other charges
         * without the buyer, and can be a customer's default. on_session payment methods were
         * saved by the buyer in checkout for faster checkout at this merchant; Flint charges them
         * only in checkouts the buyer completes and refuses them for any charge without the buyer
         * and as a default. Payment methods saved before usage existed are off_session. Value
         * enum: "on_session", "off_session". usage.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * Brand, expiry and last four digits. Present when `type` is `card`. anyOf[1] (Value):
             * {@link CardDetailsPreviousAttributes}. anyOf[2] (Value): null.
             */
            "card"?: ((CardDetailsPreviousAttributes) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * Present only when `expand` includes `customer`; `null` when expanded and there is no
             * related customer. anyOf[1] (Value): {@link
             * ExpandedCustomerSummaryPreviousAttributes}. anyOf[2] (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummaryPreviousAttributes) | (null));
            /**
             * Customer this payment method belongs to. anyOf[1] (Value): string. Customer this
             * payment method belongs to. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". anyOf[2]
             * (Value): null.
             */
            "customer_id"?: ((string) | (null));
            /**
             * A value that is the same for every saved copy of one card number at this merchant
             * and environment, so you can spot duplicates. It doesn't identify the card anywhere
             * else. A card added through Apple Pay or Google Pay can have a different fingerprint
             * from the same card typed in. anyOf[1] (Value): string. A value that is the same for
             * every saved copy of one card number at this merchant and environment, so you can
             * spot duplicates. It doesn't identify the card anywhere else. A card added through
             * Apple Pay or Google Pay can have a different fingerprint from the same card typed
             * in. anyOf[2] (Value): null.
             */
            "fingerprint"?: ((string) | (null));
            /**
             * Whether this is the customer's default payment method, the one
             * Customer.default_payment_method_id names. Change the default with PATCH
             * /v1/customers/{customer_id}; that sends customer.updated, not a payment method
             * event. Existing subscriptions keep their payment_method_id. anyOf[1] (Value):
             * boolean. Whether this is the customer's default payment method, the one
             * Customer.default_payment_method_id names. Change the default with PATCH
             * /v1/customers/{customer_id}; that sends customer.updated, not a payment method
             * event. Existing subscriptions keep their payment_method_id. anyOf[2] (Value): null.
             */
            "is_default"?: ((boolean) | (null));
            /**
             * Removal is in progress. Show this card as Removing and offer retry with DELETE
             * /v1/payment-methods/{payment_method_id}, or DELETE
             * /v1/me/payment-methods/{payment_method_id} for buyers. Do not offer it for a new
             * payment, subscription, or default. Flint retries abandoned removals automatically.
             * anyOf[1] (Value): boolean. Removal is in progress. Show this card as Removing and
             * offer retry with DELETE /v1/payment-methods/{payment_method_id}, or DELETE
             * /v1/me/payment-methods/{payment_method_id} for buyers. Do not offer it for a new
             * payment, subscription, or default. Flint retries abandoned removals automatically.
             * anyOf[2] (Value): null.
             */
            "is_removing"?: ((boolean) | (null));
            /**
             * ID of the merchant this resource belongs to. anyOf[1] (Value): string. ID of the
             * merchant this resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             * anyOf[2] (Value): null.
             */
            "merchant_id"?: ((string) | (null));
            /**
             * `imported` for a saved card that Flint migrated from another processor account.
             * Omitted for other cards. Value enum: "imported". anyOf[1] (Value): string.
             * `imported` for a saved card that Flint migrated from another processor account.
             * Omitted for other cards. Value enum: "imported". anyOf[2] (Value): null.
             */
            "origin"?: (("imported" | (string & {})) | (null));
            /**
             * Unique identifier for this payment method, prefixed `pm_`. anyOf[1] (Value): string.
             * Unique identifier for this payment method, prefixed `pm_`. Example:
             * "pm_01KEZF7C0034B248TXXE4NXYFZ". anyOf[2] (Value): null.
             */
            "payment_method_id"?: ((string) | (null));
            /**
             * Where the buyer saved this payment method. Returned on /v1/me/payment-methods
             * responses when Flint wallet support is enabled. Accept future values. Value enum:
             * "flint", "store". anyOf[1] (Value): string. Where the buyer saved this payment
             * method. Returned on /v1/me/payment-methods responses when Flint wallet support is
             * enabled. Accept future values. Value enum: "flint", "store". anyOf[2] (Value): null.
             */
            "saved_with"?: (("flint" | "store" | (string & {})) | (null));
            /**
             * The saved card lifecycle. Offer the card for a new payment only when status is
             * active and is_removing is false. Treat any other status as not chargeable, including
             * values added later. Value enum: "pending", "active", "expired", "archived",
             * "failed". anyOf[1] (Value): string. The saved card lifecycle. Offer the card for a
             * new payment only when status is active and is_removing is false. Treat any other
             * status as not chargeable, including values added later. Value enum: "pending",
             * "active", "expired", "archived", "failed". anyOf[2] (Value): null.
             */
            "status"?: (("pending" | "active" | "expired" | "archived" | "failed" | (string & {})) | (null));
            /**
             * Kind of payment method. Value enum: "card". anyOf[1] (Value): string. Kind of
             * payment method. Value enum: "card". anyOf[2] (Value): null.
             */
            "type"?: (("card" | (string & {})) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * When Flint may charge the payment method. off_session payment methods can pay
             * subscriptions, automatic invoices, and other charges without the buyer, and can be a
             * customer's default. on_session payment methods were saved by the buyer in checkout
             * for faster checkout at this merchant; Flint charges them only in checkouts the buyer
             * completes and refuses them for any charge without the buyer and as a default.
             * Payment methods saved before usage existed are off_session. Value enum:
             * "on_session", "off_session". anyOf[1] (Value): string. When Flint may charge the
             * payment method. off_session payment methods can pay subscriptions, automatic
             * invoices, and other charges without the buyer, and can be a customer's default.
             * on_session payment methods were saved by the buyer in checkout for faster checkout
             * at this merchant; Flint charges them only in checkouts the buyer completes and
             * refuses them for any charge without the buyer and as a default. Payment methods
             * saved before usage existed are off_session. Value enum: "on_session", "off_session".
             * anyOf[2] (Value): null.
             */
            "usage"?: (("on_session" | "off_session" | (string & {})) | (null));
        });
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "payment_method.activated". */
    "event_type"?: "payment_method.activated";
});
export type PaymentMethodArchivedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "card"?: CardDetails;
            "created_at": string;
            "customer"?: ((ExpandedCustomerSummary) | (null));
            "customer_id": string;
            "fingerprint"?: string;
            "is_default": boolean;
            "is_removing": boolean;
            "merchant_id": string;
            "origin"?: "imported" | (string & {});
            "payment_method_id": string;
            "saved_with"?: "flint" | "store" | (string & {});
            "status": "pending" | "active" | "expired" | "archived" | "failed" | (string & {});
            "type": "card" | (string & {});
            "updated_at": string;
            "usage": "on_session" | "off_session" | (string & {});
        };
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "card"?: ((CardDetailsPreviousAttributes) | (null));
            "created_at"?: ((string) | (null));
            "customer"?: ((ExpandedCustomerSummaryPreviousAttributes) | (null));
            "customer_id"?: ((string) | (null));
            "fingerprint"?: ((string) | (null));
            "is_default"?: ((boolean) | (null));
            "is_removing"?: ((boolean) | (null));
            "merchant_id"?: ((string) | (null));
            "origin"?: (("imported" | (string & {})) | (null));
            "payment_method_id"?: ((string) | (null));
            "saved_with"?: (("flint" | "store" | (string & {})) | (null));
            "status"?: (("pending" | "active" | "expired" | "archived" | "failed" | (string & {})) | (null));
            "type"?: (("card" | (string & {})) | (null));
            "updated_at"?: ((string) | (null));
            "usage"?: (("on_session" | "off_session" | (string & {})) | (null));
        });
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "payment_method.archived";
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
            "is_removing": boolean;
            "merchant_id": string;
            "origin"?: "imported" | (string & {});
            "payment_method_id": string;
            "saved_with"?: "flint" | "store" | (string & {});
            "status": "pending" | "active" | "expired" | "archived" | "failed" | (string & {});
            "type": "card" | (string & {});
            "updated_at": string;
            "usage": "on_session" | "off_session" | (string & {});
        };
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "card"?: ((CardDetailsPreviousAttributes) | (null));
            "created_at"?: ((string) | (null));
            "customer"?: ((ExpandedCustomerSummaryPreviousAttributes) | (null));
            "customer_id"?: ((string) | (null));
            "fingerprint"?: ((string) | (null));
            "is_default"?: ((boolean) | (null));
            "is_removing"?: ((boolean) | (null));
            "merchant_id"?: ((string) | (null));
            "origin"?: (("imported" | (string & {})) | (null));
            "payment_method_id"?: ((string) | (null));
            "saved_with"?: (("flint" | "store" | (string & {})) | (null));
            "status"?: (("pending" | "active" | "expired" | "archived" | "failed" | (string & {})) | (null));
            "type"?: (("card" | (string & {})) | (null));
            "updated_at"?: ((string) | (null));
            "usage"?: (("on_session" | "off_session" | (string & {})) | (null));
        });
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "payment_method.archived";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "payment_method.archived";
});
/**
 * The `payment_method.archived` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type PaymentMethodArchivedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.card (Optional): {@link CardDetails}. Brand, expiry and last four
     * digits. Present when `type` is `card`. Card details on a payment method: brand, expiration
     * month and year, last four digits, and the wallet when one was used. object.created_at
     * (Required): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.customer (Optional): {@link ExpandedCustomerSummary} or null. Present only when
     * `expand` includes `customer`; `null` when expanded and there is no related customer.
     * object.customer.anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's summary
     * fields, returned in place of a customer ID when the customer is expanded.
     * object.customer.anyOf[2] (Value): null. object.customer_id (Required): string. Customer this
     * payment method belongs to. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". object.fingerprint
     * (Optional): string. A value that is the same for every saved copy of one card number at this
     * merchant and environment, so you can spot duplicates. It doesn't identify the card anywhere
     * else. A card added through Apple Pay or Google Pay can have a different fingerprint from the
     * same card typed in. object.is_default (Required): boolean. Whether this is the customer's
     * default payment method, the one Customer.default_payment_method_id names. Change the default
     * with PATCH /v1/customers/{customer_id}; that sends customer.updated, not a payment method
     * event. Existing subscriptions keep their payment_method_id. object.is_removing (Required):
     * boolean. Removal is in progress. Show this card as Removing and offer retry with DELETE
     * /v1/payment-methods/{payment_method_id}, or DELETE
     * /v1/me/payment-methods/{payment_method_id} for buyers. Do not offer it for a new payment,
     * subscription, or default. Flint retries abandoned removals automatically. object.merchant_id
     * (Required): string. ID of the merchant this resource belongs to. Example:
     * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.origin (Optional): string. `imported` for a saved
     * card that Flint migrated from another processor account. Omitted for other cards. Value
     * enum: "imported". object.payment_method_id (Required): string. Unique identifier for this
     * payment method, prefixed `pm_`. Example: "pm_01KEZF7C0034B248TXXE4NXYFZ". object.saved_with
     * (Optional): string. Where the buyer saved this payment method. Returned on
     * /v1/me/payment-methods responses when Flint wallet support is enabled. Accept future values.
     * Value enum: "flint", "store". object.status (Required): string. The saved card lifecycle.
     * Offer the card for a new payment only when status is active and is_removing is false. Treat
     * any other status as not chargeable, including values added later. Value enum: "pending",
     * "active", "expired", "archived", "failed". object.type (Required): string. Kind of payment
     * method. Value enum: "card". object.updated_at (Required): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.usage (Required): string. When Flint may
     * charge the payment method. off_session payment methods can pay subscriptions, automatic
     * invoices, and other charges without the buyer, and can be a customer's default. on_session
     * payment methods were saved by the buyer in checkout for faster checkout at this merchant;
     * Flint charges them only in checkouts the buyer completes and refuses them for any charge
     * without the buyer and as a default. Payment methods saved before usage existed are
     * off_session. Value enum: "on_session", "off_session". previous_attributes (Optional):
     * object. Previous values of changed top-level fields in data.object, at this delivery's API
     * version. Nested changes include the whole previous top-level value. A value is null when the
     * field was absent before the change. Omitted when Flint did not record the previous state,
     * including synthetic test events. previous_attributes.card (Optional): {@link
     * CardDetailsPreviousAttributes} or null. Brand, expiry and last four digits. Present when
     * `type` is `card`. previous_attributes.card.anyOf[1] (Value): {@link
     * CardDetailsPreviousAttributes}. previous_attributes.card.anyOf[2] (Value): null.
     * previous_attributes.created_at (Optional): string or null. RFC3339 timestamp.
     * previous_attributes.created_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.created_at.anyOf[2] (Value):
     * null. previous_attributes.customer (Optional): {@link
     * ExpandedCustomerSummaryPreviousAttributes} or null. Present only when `expand` includes
     * `customer`; `null` when expanded and there is no related customer.
     * previous_attributes.customer.anyOf[1] (Value): {@link
     * ExpandedCustomerSummaryPreviousAttributes}. previous_attributes.customer.anyOf[2] (Value):
     * null. previous_attributes.customer_id (Optional): string or null. Customer this payment
     * method belongs to. previous_attributes.customer_id.anyOf[1] (Value): string. Customer this
     * payment method belongs to. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     * previous_attributes.customer_id.anyOf[2] (Value): null. previous_attributes.fingerprint
     * (Optional): string or null. A value that is the same for every saved copy of one card number
     * at this merchant and environment, so you can spot duplicates. It doesn't identify the card
     * anywhere else. A card added through Apple Pay or Google Pay can have a different fingerprint
     * from the same card typed in. previous_attributes.fingerprint.anyOf[1] (Value): string. A
     * value that is the same for every saved copy of one card number at this merchant and
     * environment, so you can spot duplicates. It doesn't identify the card anywhere else. A card
     * added through Apple Pay or Google Pay can have a different fingerprint from the same card
     * typed in. previous_attributes.fingerprint.anyOf[2] (Value): null.
     * previous_attributes.is_default (Optional): boolean or null. Whether this is the customer's
     * default payment method, the one Customer.default_payment_method_id names. Change the default
     * with PATCH /v1/customers/{customer_id}; that sends customer.updated, not a payment method
     * event. Existing subscriptions keep their payment_method_id.
     * previous_attributes.is_default.anyOf[1] (Value): boolean. Whether this is the customer's
     * default payment method, the one Customer.default_payment_method_id names. Change the default
     * with PATCH /v1/customers/{customer_id}; that sends customer.updated, not a payment method
     * event. Existing subscriptions keep their payment_method_id.
     * previous_attributes.is_default.anyOf[2] (Value): null. previous_attributes.is_removing
     * (Optional): boolean or null. Removal is in progress. Show this card as Removing and offer
     * retry with DELETE /v1/payment-methods/{payment_method_id}, or DELETE
     * /v1/me/payment-methods/{payment_method_id} for buyers. Do not offer it for a new payment,
     * subscription, or default. Flint retries abandoned removals automatically.
     * previous_attributes.is_removing.anyOf[1] (Value): boolean. Removal is in progress. Show this
     * card as Removing and offer retry with DELETE /v1/payment-methods/{payment_method_id}, or
     * DELETE /v1/me/payment-methods/{payment_method_id} for buyers. Do not offer it for a new
     * payment, subscription, or default. Flint retries abandoned removals automatically.
     * previous_attributes.is_removing.anyOf[2] (Value): null. previous_attributes.merchant_id
     * (Optional): string or null. ID of the merchant this resource belongs to.
     * previous_attributes.merchant_id.anyOf[1] (Value): string. ID of the merchant this resource
     * belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     * previous_attributes.merchant_id.anyOf[2] (Value): null. previous_attributes.origin
     * (Optional): string or null. `imported` for a saved card that Flint migrated from another
     * processor account. Omitted for other cards. Value enum: "imported".
     * previous_attributes.origin.anyOf[1] (Value): string. `imported` for a saved card that Flint
     * migrated from another processor account. Omitted for other cards. Value enum: "imported".
     * previous_attributes.origin.anyOf[2] (Value): null. previous_attributes.payment_method_id
     * (Optional): string or null. Unique identifier for this payment method, prefixed `pm_`.
     * previous_attributes.payment_method_id.anyOf[1] (Value): string. Unique identifier for this
     * payment method, prefixed `pm_`. Example: "pm_01KEZF7C0034B248TXXE4NXYFZ".
     * previous_attributes.payment_method_id.anyOf[2] (Value): null. previous_attributes.saved_with
     * (Optional): string or null. Where the buyer saved this payment method. Returned on
     * /v1/me/payment-methods responses when Flint wallet support is enabled. Accept future values.
     * Value enum: "flint", "store". previous_attributes.saved_with.anyOf[1] (Value): string. Where
     * the buyer saved this payment method. Returned on /v1/me/payment-methods responses when Flint
     * wallet support is enabled. Accept future values. Value enum: "flint", "store".
     * previous_attributes.saved_with.anyOf[2] (Value): null. previous_attributes.status
     * (Optional): string or null. The saved card lifecycle. Offer the card for a new payment only
     * when status is active and is_removing is false. Treat any other status as not chargeable,
     * including values added later. Value enum: "pending", "active", "expired", "archived",
     * "failed". previous_attributes.status.anyOf[1] (Value): string. The saved card lifecycle.
     * Offer the card for a new payment only when status is active and is_removing is false. Treat
     * any other status as not chargeable, including values added later. Value enum: "pending",
     * "active", "expired", "archived", "failed". previous_attributes.status.anyOf[2] (Value):
     * null. previous_attributes.type (Optional): string or null. Kind of payment method. Value
     * enum: "card". previous_attributes.type.anyOf[1] (Value): string. Kind of payment method.
     * Value enum: "card". previous_attributes.type.anyOf[2] (Value): null.
     * previous_attributes.updated_at (Optional): string or null. RFC3339 timestamp.
     * previous_attributes.updated_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.updated_at.anyOf[2] (Value):
     * null. previous_attributes.usage (Optional): string or null. When Flint may charge the
     * payment method. off_session payment methods can pay subscriptions, automatic invoices, and
     * other charges without the buyer, and can be a customer's default. on_session payment methods
     * were saved by the buyer in checkout for faster checkout at this merchant; Flint charges them
     * only in checkouts the buyer completes and refuses them for any charge without the buyer and
     * as a default. Payment methods saved before usage existed are off_session. Value enum:
     * "on_session", "off_session". previous_attributes.usage.anyOf[1] (Value): string. When Flint
     * may charge the payment method. off_session payment methods can pay subscriptions, automatic
     * invoices, and other charges without the buyer, and can be a customer's default. on_session
     * payment methods were saved by the buyer in checkout for faster checkout at this merchant;
     * Flint charges them only in checkouts the buyer completes and refuses them for any charge
     * without the buyer and as a default. Payment methods saved before usage existed are
     * off_session. Value enum: "on_session", "off_session". previous_attributes.usage.anyOf[2]
     * (Value): null.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields. card
         * (Optional): {@link CardDetails}. Brand, expiry and last four digits. Present when `type`
         * is `card`. Card details on a payment method: brand, expiration month and year, last four
         * digits, and the wallet when one was used. created_at (Required): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". customer (Optional):
         * {@link ExpandedCustomerSummary} or null. Present only when `expand` includes `customer`;
         * `null` when expanded and there is no related customer. customer.anyOf[1] (Value): {@link
         * ExpandedCustomerSummary}. A customer's summary fields, returned in place of a customer
         * ID when the customer is expanded. customer.anyOf[2] (Value): null. customer_id
         * (Required): string. Customer this payment method belongs to. Example:
         * "cus_01KEZF7C006X9JK6NZNA2SM9XD". fingerprint (Optional): string. A value that is the
         * same for every saved copy of one card number at this merchant and environment, so you
         * can spot duplicates. It doesn't identify the card anywhere else. A card added through
         * Apple Pay or Google Pay can have a different fingerprint from the same card typed in.
         * is_default (Required): boolean. Whether this is the customer's default payment method,
         * the one Customer.default_payment_method_id names. Change the default with PATCH
         * /v1/customers/{customer_id}; that sends customer.updated, not a payment method event.
         * Existing subscriptions keep their payment_method_id. is_removing (Required): boolean.
         * Removal is in progress. Show this card as Removing and offer retry with DELETE
         * /v1/payment-methods/{payment_method_id}, or DELETE
         * /v1/me/payment-methods/{payment_method_id} for buyers. Do not offer it for a new
         * payment, subscription, or default. Flint retries abandoned removals automatically.
         * merchant_id (Required): string. ID of the merchant this resource belongs to. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". origin (Optional): string. `imported` for a saved card
         * that Flint migrated from another processor account. Omitted for other cards. Value enum:
         * "imported". payment_method_id (Required): string. Unique identifier for this payment
         * method, prefixed `pm_`. Example: "pm_01KEZF7C0034B248TXXE4NXYFZ". saved_with (Optional):
         * string. Where the buyer saved this payment method. Returned on /v1/me/payment-methods
         * responses when Flint wallet support is enabled. Accept future values. Value enum:
         * "flint", "store". status (Required): string. The saved card lifecycle. Offer the card
         * for a new payment only when status is active and is_removing is false. Treat any other
         * status as not chargeable, including values added later. Value enum: "pending", "active",
         * "expired", "archived", "failed". type (Required): string. Kind of payment method. Value
         * enum: "card". updated_at (Required): string. RFC3339 timestamp. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". usage (Required): string. When Flint may charge the
         * payment method. off_session payment methods can pay subscriptions, automatic invoices,
         * and other charges without the buyer, and can be a customer's default. on_session payment
         * methods were saved by the buyer in checkout for faster checkout at this merchant; Flint
         * charges them only in checkouts the buyer completes and refuses them for any charge
         * without the buyer and as a default. Payment methods saved before usage existed are
         * off_session. Value enum: "on_session", "off_session".
         */
        "object": {
            /**
             * Brand, expiry and last four digits. Present when `type` is `card`. Card details on a
             * payment method: brand, expiration month and year, last four digits, and the wallet
             * when one was used.
             */
            "card"?: CardDetails;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Present only when `expand` includes `customer`; `null` when expanded and there is no
             * related customer. anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's
             * summary fields, returned in place of a customer ID when the customer is expanded.
             * anyOf[2] (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummary) | (null));
            /**
             * Customer this payment method belongs to. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
             */
            "customer_id": string;
            /**
             * A value that is the same for every saved copy of one card number at this merchant
             * and environment, so you can spot duplicates. It doesn't identify the card anywhere
             * else. A card added through Apple Pay or Google Pay can have a different fingerprint
             * from the same card typed in.
             */
            "fingerprint"?: string;
            /**
             * Whether this is the customer's default payment method, the one
             * Customer.default_payment_method_id names. Change the default with PATCH
             * /v1/customers/{customer_id}; that sends customer.updated, not a payment method
             * event. Existing subscriptions keep their payment_method_id.
             */
            "is_default": boolean;
            /**
             * Removal is in progress. Show this card as Removing and offer retry with DELETE
             * /v1/payment-methods/{payment_method_id}, or DELETE
             * /v1/me/payment-methods/{payment_method_id} for buyers. Do not offer it for a new
             * payment, subscription, or default. Flint retries abandoned removals automatically.
             */
            "is_removing": boolean;
            /**
             * ID of the merchant this resource belongs to. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id": string;
            /**
             * `imported` for a saved card that Flint migrated from another processor account.
             * Omitted for other cards. Value enum: "imported".
             */
            "origin"?: "imported" | (string & {});
            /**
             * Unique identifier for this payment method, prefixed `pm_`. Example:
             * "pm_01KEZF7C0034B248TXXE4NXYFZ".
             */
            "payment_method_id": string;
            /**
             * Where the buyer saved this payment method. Returned on /v1/me/payment-methods
             * responses when Flint wallet support is enabled. Accept future values. Value enum:
             * "flint", "store".
             */
            "saved_with"?: "flint" | "store" | (string & {});
            /**
             * The saved card lifecycle. Offer the card for a new payment only when status is
             * active and is_removing is false. Treat any other status as not chargeable, including
             * values added later. Value enum: "pending", "active", "expired", "archived",
             * "failed".
             */
            "status": "pending" | "active" | "expired" | "archived" | "failed" | (string & {});
            /** Kind of payment method. Value enum: "card". */
            "type": "card" | (string & {});
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * When Flint may charge the payment method. off_session payment methods can pay
             * subscriptions, automatic invoices, and other charges without the buyer, and can be a
             * customer's default. on_session payment methods were saved by the buyer in checkout
             * for faster checkout at this merchant; Flint charges them only in checkouts the buyer
             * completes and refuses them for any charge without the buyer and as a default.
             * Payment methods saved before usage existed are off_session. Value enum:
             * "on_session", "off_session".
             */
            "usage": "on_session" | "off_session" | (string & {});
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. card (Optional): {@link
         * CardDetailsPreviousAttributes} or null. Brand, expiry and last four digits. Present when
         * `type` is `card`. card.anyOf[1] (Value): {@link CardDetailsPreviousAttributes}.
         * card.anyOf[2] (Value): null. created_at (Optional): string or null. RFC3339 timestamp.
         * created_at.anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". created_at.anyOf[2] (Value): null. customer (Optional): {@link
         * ExpandedCustomerSummaryPreviousAttributes} or null. Present only when `expand` includes
         * `customer`; `null` when expanded and there is no related customer. customer.anyOf[1]
         * (Value): {@link ExpandedCustomerSummaryPreviousAttributes}. customer.anyOf[2] (Value):
         * null. customer_id (Optional): string or null. Customer this payment method belongs to.
         * customer_id.anyOf[1] (Value): string. Customer this payment method belongs to. Example:
         * "cus_01KEZF7C006X9JK6NZNA2SM9XD". customer_id.anyOf[2] (Value): null. fingerprint
         * (Optional): string or null. A value that is the same for every saved copy of one card
         * number at this merchant and environment, so you can spot duplicates. It doesn't identify
         * the card anywhere else. A card added through Apple Pay or Google Pay can have a
         * different fingerprint from the same card typed in. fingerprint.anyOf[1] (Value): string.
         * A value that is the same for every saved copy of one card number at this merchant and
         * environment, so you can spot duplicates. It doesn't identify the card anywhere else. A
         * card added through Apple Pay or Google Pay can have a different fingerprint from the
         * same card typed in. fingerprint.anyOf[2] (Value): null. is_default (Optional): boolean
         * or null. Whether this is the customer's default payment method, the one
         * Customer.default_payment_method_id names. Change the default with PATCH
         * /v1/customers/{customer_id}; that sends customer.updated, not a payment method event.
         * Existing subscriptions keep their payment_method_id. is_default.anyOf[1] (Value):
         * boolean. Whether this is the customer's default payment method, the one
         * Customer.default_payment_method_id names. Change the default with PATCH
         * /v1/customers/{customer_id}; that sends customer.updated, not a payment method event.
         * Existing subscriptions keep their payment_method_id. is_default.anyOf[2] (Value): null.
         * is_removing (Optional): boolean or null. Removal is in progress. Show this card as
         * Removing and offer retry with DELETE /v1/payment-methods/{payment_method_id}, or DELETE
         * /v1/me/payment-methods/{payment_method_id} for buyers. Do not offer it for a new
         * payment, subscription, or default. Flint retries abandoned removals automatically.
         * is_removing.anyOf[1] (Value): boolean. Removal is in progress. Show this card as
         * Removing and offer retry with DELETE /v1/payment-methods/{payment_method_id}, or DELETE
         * /v1/me/payment-methods/{payment_method_id} for buyers. Do not offer it for a new
         * payment, subscription, or default. Flint retries abandoned removals automatically.
         * is_removing.anyOf[2] (Value): null. merchant_id (Optional): string or null. ID of the
         * merchant this resource belongs to. merchant_id.anyOf[1] (Value): string. ID of the
         * merchant this resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
         * merchant_id.anyOf[2] (Value): null. origin (Optional): string or null. `imported` for a
         * saved card that Flint migrated from another processor account. Omitted for other cards.
         * Value enum: "imported". origin.anyOf[1] (Value): string. `imported` for a saved card
         * that Flint migrated from another processor account. Omitted for other cards. Value enum:
         * "imported". origin.anyOf[2] (Value): null. payment_method_id (Optional): string or null.
         * Unique identifier for this payment method, prefixed `pm_`. payment_method_id.anyOf[1]
         * (Value): string. Unique identifier for this payment method, prefixed `pm_`. Example:
         * "pm_01KEZF7C0034B248TXXE4NXYFZ". payment_method_id.anyOf[2] (Value): null. saved_with
         * (Optional): string or null. Where the buyer saved this payment method. Returned on
         * /v1/me/payment-methods responses when Flint wallet support is enabled. Accept future
         * values. Value enum: "flint", "store". saved_with.anyOf[1] (Value): string. Where the
         * buyer saved this payment method. Returned on /v1/me/payment-methods responses when Flint
         * wallet support is enabled. Accept future values. Value enum: "flint", "store".
         * saved_with.anyOf[2] (Value): null. status (Optional): string or null. The saved card
         * lifecycle. Offer the card for a new payment only when status is active and is_removing
         * is false. Treat any other status as not chargeable, including values added later. Value
         * enum: "pending", "active", "expired", "archived", "failed". status.anyOf[1] (Value):
         * string. The saved card lifecycle. Offer the card for a new payment only when status is
         * active and is_removing is false. Treat any other status as not chargeable, including
         * values added later. Value enum: "pending", "active", "expired", "archived", "failed".
         * status.anyOf[2] (Value): null. type (Optional): string or null. Kind of payment method.
         * Value enum: "card". type.anyOf[1] (Value): string. Kind of payment method. Value enum:
         * "card". type.anyOf[2] (Value): null. updated_at (Optional): string or null. RFC3339
         * timestamp. updated_at.anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". updated_at.anyOf[2] (Value): null. usage (Optional):
         * string or null. When Flint may charge the payment method. off_session payment methods
         * can pay subscriptions, automatic invoices, and other charges without the buyer, and can
         * be a customer's default. on_session payment methods were saved by the buyer in checkout
         * for faster checkout at this merchant; Flint charges them only in checkouts the buyer
         * completes and refuses them for any charge without the buyer and as a default. Payment
         * methods saved before usage existed are off_session. Value enum: "on_session",
         * "off_session". usage.anyOf[1] (Value): string. When Flint may charge the payment method.
         * off_session payment methods can pay subscriptions, automatic invoices, and other charges
         * without the buyer, and can be a customer's default. on_session payment methods were
         * saved by the buyer in checkout for faster checkout at this merchant; Flint charges them
         * only in checkouts the buyer completes and refuses them for any charge without the buyer
         * and as a default. Payment methods saved before usage existed are off_session. Value
         * enum: "on_session", "off_session". usage.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * Brand, expiry and last four digits. Present when `type` is `card`. anyOf[1] (Value):
             * {@link CardDetailsPreviousAttributes}. anyOf[2] (Value): null.
             */
            "card"?: ((CardDetailsPreviousAttributes) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * Present only when `expand` includes `customer`; `null` when expanded and there is no
             * related customer. anyOf[1] (Value): {@link
             * ExpandedCustomerSummaryPreviousAttributes}. anyOf[2] (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummaryPreviousAttributes) | (null));
            /**
             * Customer this payment method belongs to. anyOf[1] (Value): string. Customer this
             * payment method belongs to. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". anyOf[2]
             * (Value): null.
             */
            "customer_id"?: ((string) | (null));
            /**
             * A value that is the same for every saved copy of one card number at this merchant
             * and environment, so you can spot duplicates. It doesn't identify the card anywhere
             * else. A card added through Apple Pay or Google Pay can have a different fingerprint
             * from the same card typed in. anyOf[1] (Value): string. A value that is the same for
             * every saved copy of one card number at this merchant and environment, so you can
             * spot duplicates. It doesn't identify the card anywhere else. A card added through
             * Apple Pay or Google Pay can have a different fingerprint from the same card typed
             * in. anyOf[2] (Value): null.
             */
            "fingerprint"?: ((string) | (null));
            /**
             * Whether this is the customer's default payment method, the one
             * Customer.default_payment_method_id names. Change the default with PATCH
             * /v1/customers/{customer_id}; that sends customer.updated, not a payment method
             * event. Existing subscriptions keep their payment_method_id. anyOf[1] (Value):
             * boolean. Whether this is the customer's default payment method, the one
             * Customer.default_payment_method_id names. Change the default with PATCH
             * /v1/customers/{customer_id}; that sends customer.updated, not a payment method
             * event. Existing subscriptions keep their payment_method_id. anyOf[2] (Value): null.
             */
            "is_default"?: ((boolean) | (null));
            /**
             * Removal is in progress. Show this card as Removing and offer retry with DELETE
             * /v1/payment-methods/{payment_method_id}, or DELETE
             * /v1/me/payment-methods/{payment_method_id} for buyers. Do not offer it for a new
             * payment, subscription, or default. Flint retries abandoned removals automatically.
             * anyOf[1] (Value): boolean. Removal is in progress. Show this card as Removing and
             * offer retry with DELETE /v1/payment-methods/{payment_method_id}, or DELETE
             * /v1/me/payment-methods/{payment_method_id} for buyers. Do not offer it for a new
             * payment, subscription, or default. Flint retries abandoned removals automatically.
             * anyOf[2] (Value): null.
             */
            "is_removing"?: ((boolean) | (null));
            /**
             * ID of the merchant this resource belongs to. anyOf[1] (Value): string. ID of the
             * merchant this resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             * anyOf[2] (Value): null.
             */
            "merchant_id"?: ((string) | (null));
            /**
             * `imported` for a saved card that Flint migrated from another processor account.
             * Omitted for other cards. Value enum: "imported". anyOf[1] (Value): string.
             * `imported` for a saved card that Flint migrated from another processor account.
             * Omitted for other cards. Value enum: "imported". anyOf[2] (Value): null.
             */
            "origin"?: (("imported" | (string & {})) | (null));
            /**
             * Unique identifier for this payment method, prefixed `pm_`. anyOf[1] (Value): string.
             * Unique identifier for this payment method, prefixed `pm_`. Example:
             * "pm_01KEZF7C0034B248TXXE4NXYFZ". anyOf[2] (Value): null.
             */
            "payment_method_id"?: ((string) | (null));
            /**
             * Where the buyer saved this payment method. Returned on /v1/me/payment-methods
             * responses when Flint wallet support is enabled. Accept future values. Value enum:
             * "flint", "store". anyOf[1] (Value): string. Where the buyer saved this payment
             * method. Returned on /v1/me/payment-methods responses when Flint wallet support is
             * enabled. Accept future values. Value enum: "flint", "store". anyOf[2] (Value): null.
             */
            "saved_with"?: (("flint" | "store" | (string & {})) | (null));
            /**
             * The saved card lifecycle. Offer the card for a new payment only when status is
             * active and is_removing is false. Treat any other status as not chargeable, including
             * values added later. Value enum: "pending", "active", "expired", "archived",
             * "failed". anyOf[1] (Value): string. The saved card lifecycle. Offer the card for a
             * new payment only when status is active and is_removing is false. Treat any other
             * status as not chargeable, including values added later. Value enum: "pending",
             * "active", "expired", "archived", "failed". anyOf[2] (Value): null.
             */
            "status"?: (("pending" | "active" | "expired" | "archived" | "failed" | (string & {})) | (null));
            /**
             * Kind of payment method. Value enum: "card". anyOf[1] (Value): string. Kind of
             * payment method. Value enum: "card". anyOf[2] (Value): null.
             */
            "type"?: (("card" | (string & {})) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * When Flint may charge the payment method. off_session payment methods can pay
             * subscriptions, automatic invoices, and other charges without the buyer, and can be a
             * customer's default. on_session payment methods were saved by the buyer in checkout
             * for faster checkout at this merchant; Flint charges them only in checkouts the buyer
             * completes and refuses them for any charge without the buyer and as a default.
             * Payment methods saved before usage existed are off_session. Value enum:
             * "on_session", "off_session". anyOf[1] (Value): string. When Flint may charge the
             * payment method. off_session payment methods can pay subscriptions, automatic
             * invoices, and other charges without the buyer, and can be a customer's default.
             * on_session payment methods were saved by the buyer in checkout for faster checkout
             * at this merchant; Flint charges them only in checkouts the buyer completes and
             * refuses them for any charge without the buyer and as a default. Payment methods
             * saved before usage existed are off_session. Value enum: "on_session", "off_session".
             * anyOf[2] (Value): null.
             */
            "usage"?: (("on_session" | "off_session" | (string & {})) | (null));
        });
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "payment_method.archived". */
    "event_type"?: "payment_method.archived";
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
 * The `payment_method.archived` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type PaymentMethodArchivedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.card (Optional): {@link CardDetails}. Brand, expiry and last four
     * digits. Present when `type` is `card`. Card details on a payment method: brand, expiration
     * month and year, last four digits, and the wallet when one was used. object.created_at
     * (Required): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.customer (Optional): {@link ExpandedCustomerSummary} or null. Present only when
     * `expand` includes `customer`; `null` when expanded and there is no related customer.
     * object.customer.anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's summary
     * fields, returned in place of a customer ID when the customer is expanded.
     * object.customer.anyOf[2] (Value): null. object.customer_id (Required): string. Customer this
     * payment method belongs to. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". object.fingerprint
     * (Optional): string. A value that is the same for every saved copy of one card number at this
     * merchant and environment, so you can spot duplicates. It doesn't identify the card anywhere
     * else. A card added through Apple Pay or Google Pay can have a different fingerprint from the
     * same card typed in. object.is_default (Required): boolean. Whether this is the customer's
     * default payment method, the one Customer.default_payment_method_id names. Change the default
     * with PATCH /v1/customers/{customer_id}; that sends customer.updated, not a payment method
     * event. Existing subscriptions keep their payment_method_id. object.is_removing (Required):
     * boolean. Removal is in progress. Show this card as Removing and offer retry with DELETE
     * /v1/payment-methods/{payment_method_id}, or DELETE
     * /v1/me/payment-methods/{payment_method_id} for buyers. Do not offer it for a new payment,
     * subscription, or default. Flint retries abandoned removals automatically. object.merchant_id
     * (Required): string. ID of the merchant this resource belongs to. Example:
     * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.origin (Optional): string. `imported` for a saved
     * card that Flint migrated from another processor account. Omitted for other cards. Value
     * enum: "imported". object.payment_method_id (Required): string. Unique identifier for this
     * payment method, prefixed `pm_`. Example: "pm_01KEZF7C0034B248TXXE4NXYFZ". object.saved_with
     * (Optional): string. Where the buyer saved this payment method. Returned on
     * /v1/me/payment-methods responses when Flint wallet support is enabled. Accept future values.
     * Value enum: "flint", "store". object.status (Required): string. The saved card lifecycle.
     * Offer the card for a new payment only when status is active and is_removing is false. Treat
     * any other status as not chargeable, including values added later. Value enum: "pending",
     * "active", "expired", "archived", "failed". object.type (Required): string. Kind of payment
     * method. Value enum: "card". object.updated_at (Required): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.usage (Required): string. When Flint may
     * charge the payment method. off_session payment methods can pay subscriptions, automatic
     * invoices, and other charges without the buyer, and can be a customer's default. on_session
     * payment methods were saved by the buyer in checkout for faster checkout at this merchant;
     * Flint charges them only in checkouts the buyer completes and refuses them for any charge
     * without the buyer and as a default. Payment methods saved before usage existed are
     * off_session. Value enum: "on_session", "off_session". previous_attributes (Optional):
     * object. Previous values of changed top-level fields in data.object, at this delivery's API
     * version. Nested changes include the whole previous top-level value. A value is null when the
     * field was absent before the change. Omitted when Flint did not record the previous state,
     * including synthetic test events. previous_attributes.card (Optional): {@link
     * CardDetailsPreviousAttributes} or null. Brand, expiry and last four digits. Present when
     * `type` is `card`. previous_attributes.card.anyOf[1] (Value): {@link
     * CardDetailsPreviousAttributes}. previous_attributes.card.anyOf[2] (Value): null.
     * previous_attributes.created_at (Optional): string or null. RFC3339 timestamp.
     * previous_attributes.created_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.created_at.anyOf[2] (Value):
     * null. previous_attributes.customer (Optional): {@link
     * ExpandedCustomerSummaryPreviousAttributes} or null. Present only when `expand` includes
     * `customer`; `null` when expanded and there is no related customer.
     * previous_attributes.customer.anyOf[1] (Value): {@link
     * ExpandedCustomerSummaryPreviousAttributes}. previous_attributes.customer.anyOf[2] (Value):
     * null. previous_attributes.customer_id (Optional): string or null. Customer this payment
     * method belongs to. previous_attributes.customer_id.anyOf[1] (Value): string. Customer this
     * payment method belongs to. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     * previous_attributes.customer_id.anyOf[2] (Value): null. previous_attributes.fingerprint
     * (Optional): string or null. A value that is the same for every saved copy of one card number
     * at this merchant and environment, so you can spot duplicates. It doesn't identify the card
     * anywhere else. A card added through Apple Pay or Google Pay can have a different fingerprint
     * from the same card typed in. previous_attributes.fingerprint.anyOf[1] (Value): string. A
     * value that is the same for every saved copy of one card number at this merchant and
     * environment, so you can spot duplicates. It doesn't identify the card anywhere else. A card
     * added through Apple Pay or Google Pay can have a different fingerprint from the same card
     * typed in. previous_attributes.fingerprint.anyOf[2] (Value): null.
     * previous_attributes.is_default (Optional): boolean or null. Whether this is the customer's
     * default payment method, the one Customer.default_payment_method_id names. Change the default
     * with PATCH /v1/customers/{customer_id}; that sends customer.updated, not a payment method
     * event. Existing subscriptions keep their payment_method_id.
     * previous_attributes.is_default.anyOf[1] (Value): boolean. Whether this is the customer's
     * default payment method, the one Customer.default_payment_method_id names. Change the default
     * with PATCH /v1/customers/{customer_id}; that sends customer.updated, not a payment method
     * event. Existing subscriptions keep their payment_method_id.
     * previous_attributes.is_default.anyOf[2] (Value): null. previous_attributes.is_removing
     * (Optional): boolean or null. Removal is in progress. Show this card as Removing and offer
     * retry with DELETE /v1/payment-methods/{payment_method_id}, or DELETE
     * /v1/me/payment-methods/{payment_method_id} for buyers. Do not offer it for a new payment,
     * subscription, or default. Flint retries abandoned removals automatically.
     * previous_attributes.is_removing.anyOf[1] (Value): boolean. Removal is in progress. Show this
     * card as Removing and offer retry with DELETE /v1/payment-methods/{payment_method_id}, or
     * DELETE /v1/me/payment-methods/{payment_method_id} for buyers. Do not offer it for a new
     * payment, subscription, or default. Flint retries abandoned removals automatically.
     * previous_attributes.is_removing.anyOf[2] (Value): null. previous_attributes.merchant_id
     * (Optional): string or null. ID of the merchant this resource belongs to.
     * previous_attributes.merchant_id.anyOf[1] (Value): string. ID of the merchant this resource
     * belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     * previous_attributes.merchant_id.anyOf[2] (Value): null. previous_attributes.origin
     * (Optional): string or null. `imported` for a saved card that Flint migrated from another
     * processor account. Omitted for other cards. Value enum: "imported".
     * previous_attributes.origin.anyOf[1] (Value): string. `imported` for a saved card that Flint
     * migrated from another processor account. Omitted for other cards. Value enum: "imported".
     * previous_attributes.origin.anyOf[2] (Value): null. previous_attributes.payment_method_id
     * (Optional): string or null. Unique identifier for this payment method, prefixed `pm_`.
     * previous_attributes.payment_method_id.anyOf[1] (Value): string. Unique identifier for this
     * payment method, prefixed `pm_`. Example: "pm_01KEZF7C0034B248TXXE4NXYFZ".
     * previous_attributes.payment_method_id.anyOf[2] (Value): null. previous_attributes.saved_with
     * (Optional): string or null. Where the buyer saved this payment method. Returned on
     * /v1/me/payment-methods responses when Flint wallet support is enabled. Accept future values.
     * Value enum: "flint", "store". previous_attributes.saved_with.anyOf[1] (Value): string. Where
     * the buyer saved this payment method. Returned on /v1/me/payment-methods responses when Flint
     * wallet support is enabled. Accept future values. Value enum: "flint", "store".
     * previous_attributes.saved_with.anyOf[2] (Value): null. previous_attributes.status
     * (Optional): string or null. The saved card lifecycle. Offer the card for a new payment only
     * when status is active and is_removing is false. Treat any other status as not chargeable,
     * including values added later. Value enum: "pending", "active", "expired", "archived",
     * "failed". previous_attributes.status.anyOf[1] (Value): string. The saved card lifecycle.
     * Offer the card for a new payment only when status is active and is_removing is false. Treat
     * any other status as not chargeable, including values added later. Value enum: "pending",
     * "active", "expired", "archived", "failed". previous_attributes.status.anyOf[2] (Value):
     * null. previous_attributes.type (Optional): string or null. Kind of payment method. Value
     * enum: "card". previous_attributes.type.anyOf[1] (Value): string. Kind of payment method.
     * Value enum: "card". previous_attributes.type.anyOf[2] (Value): null.
     * previous_attributes.updated_at (Optional): string or null. RFC3339 timestamp.
     * previous_attributes.updated_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.updated_at.anyOf[2] (Value):
     * null. previous_attributes.usage (Optional): string or null. When Flint may charge the
     * payment method. off_session payment methods can pay subscriptions, automatic invoices, and
     * other charges without the buyer, and can be a customer's default. on_session payment methods
     * were saved by the buyer in checkout for faster checkout at this merchant; Flint charges them
     * only in checkouts the buyer completes and refuses them for any charge without the buyer and
     * as a default. Payment methods saved before usage existed are off_session. Value enum:
     * "on_session", "off_session". previous_attributes.usage.anyOf[1] (Value): string. When Flint
     * may charge the payment method. off_session payment methods can pay subscriptions, automatic
     * invoices, and other charges without the buyer, and can be a customer's default. on_session
     * payment methods were saved by the buyer in checkout for faster checkout at this merchant;
     * Flint charges them only in checkouts the buyer completes and refuses them for any charge
     * without the buyer and as a default. Payment methods saved before usage existed are
     * off_session. Value enum: "on_session", "off_session". previous_attributes.usage.anyOf[2]
     * (Value): null.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields. card
         * (Optional): {@link CardDetails}. Brand, expiry and last four digits. Present when `type`
         * is `card`. Card details on a payment method: brand, expiration month and year, last four
         * digits, and the wallet when one was used. created_at (Required): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". customer (Optional):
         * {@link ExpandedCustomerSummary} or null. Present only when `expand` includes `customer`;
         * `null` when expanded and there is no related customer. customer.anyOf[1] (Value): {@link
         * ExpandedCustomerSummary}. A customer's summary fields, returned in place of a customer
         * ID when the customer is expanded. customer.anyOf[2] (Value): null. customer_id
         * (Required): string. Customer this payment method belongs to. Example:
         * "cus_01KEZF7C006X9JK6NZNA2SM9XD". fingerprint (Optional): string. A value that is the
         * same for every saved copy of one card number at this merchant and environment, so you
         * can spot duplicates. It doesn't identify the card anywhere else. A card added through
         * Apple Pay or Google Pay can have a different fingerprint from the same card typed in.
         * is_default (Required): boolean. Whether this is the customer's default payment method,
         * the one Customer.default_payment_method_id names. Change the default with PATCH
         * /v1/customers/{customer_id}; that sends customer.updated, not a payment method event.
         * Existing subscriptions keep their payment_method_id. is_removing (Required): boolean.
         * Removal is in progress. Show this card as Removing and offer retry with DELETE
         * /v1/payment-methods/{payment_method_id}, or DELETE
         * /v1/me/payment-methods/{payment_method_id} for buyers. Do not offer it for a new
         * payment, subscription, or default. Flint retries abandoned removals automatically.
         * merchant_id (Required): string. ID of the merchant this resource belongs to. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". origin (Optional): string. `imported` for a saved card
         * that Flint migrated from another processor account. Omitted for other cards. Value enum:
         * "imported". payment_method_id (Required): string. Unique identifier for this payment
         * method, prefixed `pm_`. Example: "pm_01KEZF7C0034B248TXXE4NXYFZ". saved_with (Optional):
         * string. Where the buyer saved this payment method. Returned on /v1/me/payment-methods
         * responses when Flint wallet support is enabled. Accept future values. Value enum:
         * "flint", "store". status (Required): string. The saved card lifecycle. Offer the card
         * for a new payment only when status is active and is_removing is false. Treat any other
         * status as not chargeable, including values added later. Value enum: "pending", "active",
         * "expired", "archived", "failed". type (Required): string. Kind of payment method. Value
         * enum: "card". updated_at (Required): string. RFC3339 timestamp. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". usage (Required): string. When Flint may charge the
         * payment method. off_session payment methods can pay subscriptions, automatic invoices,
         * and other charges without the buyer, and can be a customer's default. on_session payment
         * methods were saved by the buyer in checkout for faster checkout at this merchant; Flint
         * charges them only in checkouts the buyer completes and refuses them for any charge
         * without the buyer and as a default. Payment methods saved before usage existed are
         * off_session. Value enum: "on_session", "off_session".
         */
        "object": {
            /**
             * Brand, expiry and last four digits. Present when `type` is `card`. Card details on a
             * payment method: brand, expiration month and year, last four digits, and the wallet
             * when one was used.
             */
            "card"?: CardDetails;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Present only when `expand` includes `customer`; `null` when expanded and there is no
             * related customer. anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's
             * summary fields, returned in place of a customer ID when the customer is expanded.
             * anyOf[2] (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummary) | (null));
            /**
             * Customer this payment method belongs to. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
             */
            "customer_id": string;
            /**
             * A value that is the same for every saved copy of one card number at this merchant
             * and environment, so you can spot duplicates. It doesn't identify the card anywhere
             * else. A card added through Apple Pay or Google Pay can have a different fingerprint
             * from the same card typed in.
             */
            "fingerprint"?: string;
            /**
             * Whether this is the customer's default payment method, the one
             * Customer.default_payment_method_id names. Change the default with PATCH
             * /v1/customers/{customer_id}; that sends customer.updated, not a payment method
             * event. Existing subscriptions keep their payment_method_id.
             */
            "is_default": boolean;
            /**
             * Removal is in progress. Show this card as Removing and offer retry with DELETE
             * /v1/payment-methods/{payment_method_id}, or DELETE
             * /v1/me/payment-methods/{payment_method_id} for buyers. Do not offer it for a new
             * payment, subscription, or default. Flint retries abandoned removals automatically.
             */
            "is_removing": boolean;
            /**
             * ID of the merchant this resource belongs to. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id": string;
            /**
             * `imported` for a saved card that Flint migrated from another processor account.
             * Omitted for other cards. Value enum: "imported".
             */
            "origin"?: "imported" | (string & {});
            /**
             * Unique identifier for this payment method, prefixed `pm_`. Example:
             * "pm_01KEZF7C0034B248TXXE4NXYFZ".
             */
            "payment_method_id": string;
            /**
             * Where the buyer saved this payment method. Returned on /v1/me/payment-methods
             * responses when Flint wallet support is enabled. Accept future values. Value enum:
             * "flint", "store".
             */
            "saved_with"?: "flint" | "store" | (string & {});
            /**
             * The saved card lifecycle. Offer the card for a new payment only when status is
             * active and is_removing is false. Treat any other status as not chargeable, including
             * values added later. Value enum: "pending", "active", "expired", "archived",
             * "failed".
             */
            "status": "pending" | "active" | "expired" | "archived" | "failed" | (string & {});
            /** Kind of payment method. Value enum: "card". */
            "type": "card" | (string & {});
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * When Flint may charge the payment method. off_session payment methods can pay
             * subscriptions, automatic invoices, and other charges without the buyer, and can be a
             * customer's default. on_session payment methods were saved by the buyer in checkout
             * for faster checkout at this merchant; Flint charges them only in checkouts the buyer
             * completes and refuses them for any charge without the buyer and as a default.
             * Payment methods saved before usage existed are off_session. Value enum:
             * "on_session", "off_session".
             */
            "usage": "on_session" | "off_session" | (string & {});
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. card (Optional): {@link
         * CardDetailsPreviousAttributes} or null. Brand, expiry and last four digits. Present when
         * `type` is `card`. card.anyOf[1] (Value): {@link CardDetailsPreviousAttributes}.
         * card.anyOf[2] (Value): null. created_at (Optional): string or null. RFC3339 timestamp.
         * created_at.anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". created_at.anyOf[2] (Value): null. customer (Optional): {@link
         * ExpandedCustomerSummaryPreviousAttributes} or null. Present only when `expand` includes
         * `customer`; `null` when expanded and there is no related customer. customer.anyOf[1]
         * (Value): {@link ExpandedCustomerSummaryPreviousAttributes}. customer.anyOf[2] (Value):
         * null. customer_id (Optional): string or null. Customer this payment method belongs to.
         * customer_id.anyOf[1] (Value): string. Customer this payment method belongs to. Example:
         * "cus_01KEZF7C006X9JK6NZNA2SM9XD". customer_id.anyOf[2] (Value): null. fingerprint
         * (Optional): string or null. A value that is the same for every saved copy of one card
         * number at this merchant and environment, so you can spot duplicates. It doesn't identify
         * the card anywhere else. A card added through Apple Pay or Google Pay can have a
         * different fingerprint from the same card typed in. fingerprint.anyOf[1] (Value): string.
         * A value that is the same for every saved copy of one card number at this merchant and
         * environment, so you can spot duplicates. It doesn't identify the card anywhere else. A
         * card added through Apple Pay or Google Pay can have a different fingerprint from the
         * same card typed in. fingerprint.anyOf[2] (Value): null. is_default (Optional): boolean
         * or null. Whether this is the customer's default payment method, the one
         * Customer.default_payment_method_id names. Change the default with PATCH
         * /v1/customers/{customer_id}; that sends customer.updated, not a payment method event.
         * Existing subscriptions keep their payment_method_id. is_default.anyOf[1] (Value):
         * boolean. Whether this is the customer's default payment method, the one
         * Customer.default_payment_method_id names. Change the default with PATCH
         * /v1/customers/{customer_id}; that sends customer.updated, not a payment method event.
         * Existing subscriptions keep their payment_method_id. is_default.anyOf[2] (Value): null.
         * is_removing (Optional): boolean or null. Removal is in progress. Show this card as
         * Removing and offer retry with DELETE /v1/payment-methods/{payment_method_id}, or DELETE
         * /v1/me/payment-methods/{payment_method_id} for buyers. Do not offer it for a new
         * payment, subscription, or default. Flint retries abandoned removals automatically.
         * is_removing.anyOf[1] (Value): boolean. Removal is in progress. Show this card as
         * Removing and offer retry with DELETE /v1/payment-methods/{payment_method_id}, or DELETE
         * /v1/me/payment-methods/{payment_method_id} for buyers. Do not offer it for a new
         * payment, subscription, or default. Flint retries abandoned removals automatically.
         * is_removing.anyOf[2] (Value): null. merchant_id (Optional): string or null. ID of the
         * merchant this resource belongs to. merchant_id.anyOf[1] (Value): string. ID of the
         * merchant this resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
         * merchant_id.anyOf[2] (Value): null. origin (Optional): string or null. `imported` for a
         * saved card that Flint migrated from another processor account. Omitted for other cards.
         * Value enum: "imported". origin.anyOf[1] (Value): string. `imported` for a saved card
         * that Flint migrated from another processor account. Omitted for other cards. Value enum:
         * "imported". origin.anyOf[2] (Value): null. payment_method_id (Optional): string or null.
         * Unique identifier for this payment method, prefixed `pm_`. payment_method_id.anyOf[1]
         * (Value): string. Unique identifier for this payment method, prefixed `pm_`. Example:
         * "pm_01KEZF7C0034B248TXXE4NXYFZ". payment_method_id.anyOf[2] (Value): null. saved_with
         * (Optional): string or null. Where the buyer saved this payment method. Returned on
         * /v1/me/payment-methods responses when Flint wallet support is enabled. Accept future
         * values. Value enum: "flint", "store". saved_with.anyOf[1] (Value): string. Where the
         * buyer saved this payment method. Returned on /v1/me/payment-methods responses when Flint
         * wallet support is enabled. Accept future values. Value enum: "flint", "store".
         * saved_with.anyOf[2] (Value): null. status (Optional): string or null. The saved card
         * lifecycle. Offer the card for a new payment only when status is active and is_removing
         * is false. Treat any other status as not chargeable, including values added later. Value
         * enum: "pending", "active", "expired", "archived", "failed". status.anyOf[1] (Value):
         * string. The saved card lifecycle. Offer the card for a new payment only when status is
         * active and is_removing is false. Treat any other status as not chargeable, including
         * values added later. Value enum: "pending", "active", "expired", "archived", "failed".
         * status.anyOf[2] (Value): null. type (Optional): string or null. Kind of payment method.
         * Value enum: "card". type.anyOf[1] (Value): string. Kind of payment method. Value enum:
         * "card". type.anyOf[2] (Value): null. updated_at (Optional): string or null. RFC3339
         * timestamp. updated_at.anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". updated_at.anyOf[2] (Value): null. usage (Optional):
         * string or null. When Flint may charge the payment method. off_session payment methods
         * can pay subscriptions, automatic invoices, and other charges without the buyer, and can
         * be a customer's default. on_session payment methods were saved by the buyer in checkout
         * for faster checkout at this merchant; Flint charges them only in checkouts the buyer
         * completes and refuses them for any charge without the buyer and as a default. Payment
         * methods saved before usage existed are off_session. Value enum: "on_session",
         * "off_session". usage.anyOf[1] (Value): string. When Flint may charge the payment method.
         * off_session payment methods can pay subscriptions, automatic invoices, and other charges
         * without the buyer, and can be a customer's default. on_session payment methods were
         * saved by the buyer in checkout for faster checkout at this merchant; Flint charges them
         * only in checkouts the buyer completes and refuses them for any charge without the buyer
         * and as a default. Payment methods saved before usage existed are off_session. Value
         * enum: "on_session", "off_session". usage.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * Brand, expiry and last four digits. Present when `type` is `card`. anyOf[1] (Value):
             * {@link CardDetailsPreviousAttributes}. anyOf[2] (Value): null.
             */
            "card"?: ((CardDetailsPreviousAttributes) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * Present only when `expand` includes `customer`; `null` when expanded and there is no
             * related customer. anyOf[1] (Value): {@link
             * ExpandedCustomerSummaryPreviousAttributes}. anyOf[2] (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummaryPreviousAttributes) | (null));
            /**
             * Customer this payment method belongs to. anyOf[1] (Value): string. Customer this
             * payment method belongs to. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". anyOf[2]
             * (Value): null.
             */
            "customer_id"?: ((string) | (null));
            /**
             * A value that is the same for every saved copy of one card number at this merchant
             * and environment, so you can spot duplicates. It doesn't identify the card anywhere
             * else. A card added through Apple Pay or Google Pay can have a different fingerprint
             * from the same card typed in. anyOf[1] (Value): string. A value that is the same for
             * every saved copy of one card number at this merchant and environment, so you can
             * spot duplicates. It doesn't identify the card anywhere else. A card added through
             * Apple Pay or Google Pay can have a different fingerprint from the same card typed
             * in. anyOf[2] (Value): null.
             */
            "fingerprint"?: ((string) | (null));
            /**
             * Whether this is the customer's default payment method, the one
             * Customer.default_payment_method_id names. Change the default with PATCH
             * /v1/customers/{customer_id}; that sends customer.updated, not a payment method
             * event. Existing subscriptions keep their payment_method_id. anyOf[1] (Value):
             * boolean. Whether this is the customer's default payment method, the one
             * Customer.default_payment_method_id names. Change the default with PATCH
             * /v1/customers/{customer_id}; that sends customer.updated, not a payment method
             * event. Existing subscriptions keep their payment_method_id. anyOf[2] (Value): null.
             */
            "is_default"?: ((boolean) | (null));
            /**
             * Removal is in progress. Show this card as Removing and offer retry with DELETE
             * /v1/payment-methods/{payment_method_id}, or DELETE
             * /v1/me/payment-methods/{payment_method_id} for buyers. Do not offer it for a new
             * payment, subscription, or default. Flint retries abandoned removals automatically.
             * anyOf[1] (Value): boolean. Removal is in progress. Show this card as Removing and
             * offer retry with DELETE /v1/payment-methods/{payment_method_id}, or DELETE
             * /v1/me/payment-methods/{payment_method_id} for buyers. Do not offer it for a new
             * payment, subscription, or default. Flint retries abandoned removals automatically.
             * anyOf[2] (Value): null.
             */
            "is_removing"?: ((boolean) | (null));
            /**
             * ID of the merchant this resource belongs to. anyOf[1] (Value): string. ID of the
             * merchant this resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             * anyOf[2] (Value): null.
             */
            "merchant_id"?: ((string) | (null));
            /**
             * `imported` for a saved card that Flint migrated from another processor account.
             * Omitted for other cards. Value enum: "imported". anyOf[1] (Value): string.
             * `imported` for a saved card that Flint migrated from another processor account.
             * Omitted for other cards. Value enum: "imported". anyOf[2] (Value): null.
             */
            "origin"?: (("imported" | (string & {})) | (null));
            /**
             * Unique identifier for this payment method, prefixed `pm_`. anyOf[1] (Value): string.
             * Unique identifier for this payment method, prefixed `pm_`. Example:
             * "pm_01KEZF7C0034B248TXXE4NXYFZ". anyOf[2] (Value): null.
             */
            "payment_method_id"?: ((string) | (null));
            /**
             * Where the buyer saved this payment method. Returned on /v1/me/payment-methods
             * responses when Flint wallet support is enabled. Accept future values. Value enum:
             * "flint", "store". anyOf[1] (Value): string. Where the buyer saved this payment
             * method. Returned on /v1/me/payment-methods responses when Flint wallet support is
             * enabled. Accept future values. Value enum: "flint", "store". anyOf[2] (Value): null.
             */
            "saved_with"?: (("flint" | "store" | (string & {})) | (null));
            /**
             * The saved card lifecycle. Offer the card for a new payment only when status is
             * active and is_removing is false. Treat any other status as not chargeable, including
             * values added later. Value enum: "pending", "active", "expired", "archived",
             * "failed". anyOf[1] (Value): string. The saved card lifecycle. Offer the card for a
             * new payment only when status is active and is_removing is false. Treat any other
             * status as not chargeable, including values added later. Value enum: "pending",
             * "active", "expired", "archived", "failed". anyOf[2] (Value): null.
             */
            "status"?: (("pending" | "active" | "expired" | "archived" | "failed" | (string & {})) | (null));
            /**
             * Kind of payment method. Value enum: "card". anyOf[1] (Value): string. Kind of
             * payment method. Value enum: "card". anyOf[2] (Value): null.
             */
            "type"?: (("card" | (string & {})) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * When Flint may charge the payment method. off_session payment methods can pay
             * subscriptions, automatic invoices, and other charges without the buyer, and can be a
             * customer's default. on_session payment methods were saved by the buyer in checkout
             * for faster checkout at this merchant; Flint charges them only in checkouts the buyer
             * completes and refuses them for any charge without the buyer and as a default.
             * Payment methods saved before usage existed are off_session. Value enum:
             * "on_session", "off_session". anyOf[1] (Value): string. When Flint may charge the
             * payment method. off_session payment methods can pay subscriptions, automatic
             * invoices, and other charges without the buyer, and can be a customer's default.
             * on_session payment methods were saved by the buyer in checkout for faster checkout
             * at this merchant; Flint charges them only in checkouts the buyer completes and
             * refuses them for any charge without the buyer and as a default. Payment methods
             * saved before usage existed are off_session. Value enum: "on_session", "off_session".
             * anyOf[2] (Value): null.
             */
            "usage"?: (("on_session" | "off_session" | (string & {})) | (null));
        });
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "payment_method.archived". */
    "event_type"?: "payment_method.archived";
});
/** A domain registered for browser payment methods. */
export type PaymentMethodDomain = {
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /**
     * The registered hostname, trimmed and lowercased. ASCII only, at least two labels, each up to
     * 63 characters, 253 characters in total; no scheme, path, port, IP address, or wildcard.
     */
    "domain_name": string;
    /**
     * Flint payment method domain ID, starting with pmdom_. Example:
     * "pmdom_01KEZF7C001WQCSRGH9GWR6628".
     */
    "payment_method_domain_id": string;
    /**
     * Availability and validation status of each payment option on this domain. [] (Value): {@link
     * PaymentMethodDomainPaymentOptionStatus}. Whether a wallet payment option, Apple Pay or
     * Google Pay, is active, inactive, or unavailable for a payment method domain.
     */
    "payment_option_statuses": Array<PaymentMethodDomainPaymentOptionStatus>;
    /**
     * Whether wallet buttons are on for the hostname. Change it with `PATCH`. Value enum:
     * "active", "inactive".
     */
    "status": "active" | "inactive" | (string & {});
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
    /**
     * Whether the hostname passed the checks wallets need, summarizing `payment_option_statuses`.
     * Value enum: "active", "action_required", "unavailable".
     */
    "validation_status": "active" | "action_required" | "unavailable" | (string & {});
    /**
     * Persisted version of this resource's owned state. Expanded resources and external
     * observations can change independently. Format: uint64. minimum: 1.
     */
    "version": number;
};
/** A page of `PaymentMethodDomain` objects. */
export type PaymentMethodDomainListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * PaymentMethodDomain}. A domain registered for browser payment methods.
     */
    "data": Array<PaymentMethodDomain>;
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
 * Whether a wallet payment option, Apple Pay or Google Pay, is active, inactive, or unavailable
 * for a payment method domain.
 */
export type PaymentMethodDomainPaymentOptionStatus = {
    /** The wallet this status is for. Value enum: "apple_pay", "google_pay". */
    "payment_option": "apple_pay" | "google_pay" | (string & {});
    /**
     * Whether this wallet's button can show on the hostname. Value enum: "active", "inactive",
     * "unavailable".
     */
    "status": "active" | "inactive" | "unavailable" | (string & {});
};
/** A response containing `PaymentMethodDomain` data. */
export type PaymentMethodDomainResponse = {
    /**
     * Resource, collection, or operation result returned by this request. A domain registered for
     * browser payment methods.
     */
    "data": PaymentMethodDomain;
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
export type PaymentMethodDomainsCreateParams = (InputValue<CreatePaymentMethodDomainRequestInput>);
export type PaymentMethodDomainsGetParams = {};
export type PaymentMethodDomainsListParams = {
    /**
     * Filter by status. Values are trimmed and deduplicated in first-seen order; empty or unknown
     * entries are rejected. Values within this filter are ORed; separate filters are ANDed. []
     * enum: "active", "inactive". Value enum: "active", "inactive". anyOf[1] (Value): Array of
     * string. minItems: 1. [] enum: "active", "inactive". anyOf[1][] (Value): string. Value enum:
     * "active", "inactive". anyOf[2] (Value): string. Value enum: "active", "inactive".
     */
    "status"?: InputValue<("active" | "inactive") | readonly ("active" | "inactive")[]>;
    /**
     * Exact hostname filter after trimming whitespace and converting to lowercase. Accepts an
     * ASCII fully-qualified hostname without a URL, port, wildcard, or IP address. Matches the
     * entire stored domain name. minLength: 1. maxLength: 253. pattern: ^[\t\n\v\f\r
     * ]*(?:[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?\.)+[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?[\t\n\v\f\r
     * ]*$.
     */
    "domain_name"?: InputValue<(string)>;
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
};
export type PaymentMethodDomainsUpdateParams = (InputValue<UpdatePaymentMethodDomainRequestInput>);
export type PaymentMethodFailedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "card"?: CardDetails;
            "created_at": string;
            "customer"?: ((ExpandedCustomerSummary) | (null));
            "customer_id": string;
            "fingerprint"?: string;
            "is_default": boolean;
            "is_removing": boolean;
            "merchant_id": string;
            "origin"?: "imported" | (string & {});
            "payment_method_id": string;
            "saved_with"?: "flint" | "store" | (string & {});
            "status": "pending" | "active" | "expired" | "archived" | "failed" | (string & {});
            "type": "card" | (string & {});
            "updated_at": string;
            "usage": "on_session" | "off_session" | (string & {});
        };
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "card"?: ((CardDetailsPreviousAttributes) | (null));
            "created_at"?: ((string) | (null));
            "customer"?: ((ExpandedCustomerSummaryPreviousAttributes) | (null));
            "customer_id"?: ((string) | (null));
            "fingerprint"?: ((string) | (null));
            "is_default"?: ((boolean) | (null));
            "is_removing"?: ((boolean) | (null));
            "merchant_id"?: ((string) | (null));
            "origin"?: (("imported" | (string & {})) | (null));
            "payment_method_id"?: ((string) | (null));
            "saved_with"?: (("flint" | "store" | (string & {})) | (null));
            "status"?: (("pending" | "active" | "expired" | "archived" | "failed" | (string & {})) | (null));
            "type"?: (("card" | (string & {})) | (null));
            "updated_at"?: ((string) | (null));
            "usage"?: (("on_session" | "off_session" | (string & {})) | (null));
        });
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "payment_method.failed";
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
            "is_removing": boolean;
            "merchant_id": string;
            "origin"?: "imported" | (string & {});
            "payment_method_id": string;
            "saved_with"?: "flint" | "store" | (string & {});
            "status": "pending" | "active" | "expired" | "archived" | "failed" | (string & {});
            "type": "card" | (string & {});
            "updated_at": string;
            "usage": "on_session" | "off_session" | (string & {});
        };
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "card"?: ((CardDetailsPreviousAttributes) | (null));
            "created_at"?: ((string) | (null));
            "customer"?: ((ExpandedCustomerSummaryPreviousAttributes) | (null));
            "customer_id"?: ((string) | (null));
            "fingerprint"?: ((string) | (null));
            "is_default"?: ((boolean) | (null));
            "is_removing"?: ((boolean) | (null));
            "merchant_id"?: ((string) | (null));
            "origin"?: (("imported" | (string & {})) | (null));
            "payment_method_id"?: ((string) | (null));
            "saved_with"?: (("flint" | "store" | (string & {})) | (null));
            "status"?: (("pending" | "active" | "expired" | "archived" | "failed" | (string & {})) | (null));
            "type"?: (("card" | (string & {})) | (null));
            "updated_at"?: ((string) | (null));
            "usage"?: (("on_session" | "off_session" | (string & {})) | (null));
        });
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "payment_method.failed";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "payment_method.failed";
});
/**
 * The `payment_method.failed` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type PaymentMethodFailedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.card (Optional): {@link CardDetails}. Brand, expiry and last four
     * digits. Present when `type` is `card`. Card details on a payment method: brand, expiration
     * month and year, last four digits, and the wallet when one was used. object.created_at
     * (Required): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.customer (Optional): {@link ExpandedCustomerSummary} or null. Present only when
     * `expand` includes `customer`; `null` when expanded and there is no related customer.
     * object.customer.anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's summary
     * fields, returned in place of a customer ID when the customer is expanded.
     * object.customer.anyOf[2] (Value): null. object.customer_id (Required): string. Customer this
     * payment method belongs to. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". object.fingerprint
     * (Optional): string. A value that is the same for every saved copy of one card number at this
     * merchant and environment, so you can spot duplicates. It doesn't identify the card anywhere
     * else. A card added through Apple Pay or Google Pay can have a different fingerprint from the
     * same card typed in. object.is_default (Required): boolean. Whether this is the customer's
     * default payment method, the one Customer.default_payment_method_id names. Change the default
     * with PATCH /v1/customers/{customer_id}; that sends customer.updated, not a payment method
     * event. Existing subscriptions keep their payment_method_id. object.is_removing (Required):
     * boolean. Removal is in progress. Show this card as Removing and offer retry with DELETE
     * /v1/payment-methods/{payment_method_id}, or DELETE
     * /v1/me/payment-methods/{payment_method_id} for buyers. Do not offer it for a new payment,
     * subscription, or default. Flint retries abandoned removals automatically. object.merchant_id
     * (Required): string. ID of the merchant this resource belongs to. Example:
     * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.origin (Optional): string. `imported` for a saved
     * card that Flint migrated from another processor account. Omitted for other cards. Value
     * enum: "imported". object.payment_method_id (Required): string. Unique identifier for this
     * payment method, prefixed `pm_`. Example: "pm_01KEZF7C0034B248TXXE4NXYFZ". object.saved_with
     * (Optional): string. Where the buyer saved this payment method. Returned on
     * /v1/me/payment-methods responses when Flint wallet support is enabled. Accept future values.
     * Value enum: "flint", "store". object.status (Required): string. The saved card lifecycle.
     * Offer the card for a new payment only when status is active and is_removing is false. Treat
     * any other status as not chargeable, including values added later. Value enum: "pending",
     * "active", "expired", "archived", "failed". object.type (Required): string. Kind of payment
     * method. Value enum: "card". object.updated_at (Required): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.usage (Required): string. When Flint may
     * charge the payment method. off_session payment methods can pay subscriptions, automatic
     * invoices, and other charges without the buyer, and can be a customer's default. on_session
     * payment methods were saved by the buyer in checkout for faster checkout at this merchant;
     * Flint charges them only in checkouts the buyer completes and refuses them for any charge
     * without the buyer and as a default. Payment methods saved before usage existed are
     * off_session. Value enum: "on_session", "off_session". previous_attributes (Optional):
     * object. Previous values of changed top-level fields in data.object, at this delivery's API
     * version. Nested changes include the whole previous top-level value. A value is null when the
     * field was absent before the change. Omitted when Flint did not record the previous state,
     * including synthetic test events. previous_attributes.card (Optional): {@link
     * CardDetailsPreviousAttributes} or null. Brand, expiry and last four digits. Present when
     * `type` is `card`. previous_attributes.card.anyOf[1] (Value): {@link
     * CardDetailsPreviousAttributes}. previous_attributes.card.anyOf[2] (Value): null.
     * previous_attributes.created_at (Optional): string or null. RFC3339 timestamp.
     * previous_attributes.created_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.created_at.anyOf[2] (Value):
     * null. previous_attributes.customer (Optional): {@link
     * ExpandedCustomerSummaryPreviousAttributes} or null. Present only when `expand` includes
     * `customer`; `null` when expanded and there is no related customer.
     * previous_attributes.customer.anyOf[1] (Value): {@link
     * ExpandedCustomerSummaryPreviousAttributes}. previous_attributes.customer.anyOf[2] (Value):
     * null. previous_attributes.customer_id (Optional): string or null. Customer this payment
     * method belongs to. previous_attributes.customer_id.anyOf[1] (Value): string. Customer this
     * payment method belongs to. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     * previous_attributes.customer_id.anyOf[2] (Value): null. previous_attributes.fingerprint
     * (Optional): string or null. A value that is the same for every saved copy of one card number
     * at this merchant and environment, so you can spot duplicates. It doesn't identify the card
     * anywhere else. A card added through Apple Pay or Google Pay can have a different fingerprint
     * from the same card typed in. previous_attributes.fingerprint.anyOf[1] (Value): string. A
     * value that is the same for every saved copy of one card number at this merchant and
     * environment, so you can spot duplicates. It doesn't identify the card anywhere else. A card
     * added through Apple Pay or Google Pay can have a different fingerprint from the same card
     * typed in. previous_attributes.fingerprint.anyOf[2] (Value): null.
     * previous_attributes.is_default (Optional): boolean or null. Whether this is the customer's
     * default payment method, the one Customer.default_payment_method_id names. Change the default
     * with PATCH /v1/customers/{customer_id}; that sends customer.updated, not a payment method
     * event. Existing subscriptions keep their payment_method_id.
     * previous_attributes.is_default.anyOf[1] (Value): boolean. Whether this is the customer's
     * default payment method, the one Customer.default_payment_method_id names. Change the default
     * with PATCH /v1/customers/{customer_id}; that sends customer.updated, not a payment method
     * event. Existing subscriptions keep their payment_method_id.
     * previous_attributes.is_default.anyOf[2] (Value): null. previous_attributes.is_removing
     * (Optional): boolean or null. Removal is in progress. Show this card as Removing and offer
     * retry with DELETE /v1/payment-methods/{payment_method_id}, or DELETE
     * /v1/me/payment-methods/{payment_method_id} for buyers. Do not offer it for a new payment,
     * subscription, or default. Flint retries abandoned removals automatically.
     * previous_attributes.is_removing.anyOf[1] (Value): boolean. Removal is in progress. Show this
     * card as Removing and offer retry with DELETE /v1/payment-methods/{payment_method_id}, or
     * DELETE /v1/me/payment-methods/{payment_method_id} for buyers. Do not offer it for a new
     * payment, subscription, or default. Flint retries abandoned removals automatically.
     * previous_attributes.is_removing.anyOf[2] (Value): null. previous_attributes.merchant_id
     * (Optional): string or null. ID of the merchant this resource belongs to.
     * previous_attributes.merchant_id.anyOf[1] (Value): string. ID of the merchant this resource
     * belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     * previous_attributes.merchant_id.anyOf[2] (Value): null. previous_attributes.origin
     * (Optional): string or null. `imported` for a saved card that Flint migrated from another
     * processor account. Omitted for other cards. Value enum: "imported".
     * previous_attributes.origin.anyOf[1] (Value): string. `imported` for a saved card that Flint
     * migrated from another processor account. Omitted for other cards. Value enum: "imported".
     * previous_attributes.origin.anyOf[2] (Value): null. previous_attributes.payment_method_id
     * (Optional): string or null. Unique identifier for this payment method, prefixed `pm_`.
     * previous_attributes.payment_method_id.anyOf[1] (Value): string. Unique identifier for this
     * payment method, prefixed `pm_`. Example: "pm_01KEZF7C0034B248TXXE4NXYFZ".
     * previous_attributes.payment_method_id.anyOf[2] (Value): null. previous_attributes.saved_with
     * (Optional): string or null. Where the buyer saved this payment method. Returned on
     * /v1/me/payment-methods responses when Flint wallet support is enabled. Accept future values.
     * Value enum: "flint", "store". previous_attributes.saved_with.anyOf[1] (Value): string. Where
     * the buyer saved this payment method. Returned on /v1/me/payment-methods responses when Flint
     * wallet support is enabled. Accept future values. Value enum: "flint", "store".
     * previous_attributes.saved_with.anyOf[2] (Value): null. previous_attributes.status
     * (Optional): string or null. The saved card lifecycle. Offer the card for a new payment only
     * when status is active and is_removing is false. Treat any other status as not chargeable,
     * including values added later. Value enum: "pending", "active", "expired", "archived",
     * "failed". previous_attributes.status.anyOf[1] (Value): string. The saved card lifecycle.
     * Offer the card for a new payment only when status is active and is_removing is false. Treat
     * any other status as not chargeable, including values added later. Value enum: "pending",
     * "active", "expired", "archived", "failed". previous_attributes.status.anyOf[2] (Value):
     * null. previous_attributes.type (Optional): string or null. Kind of payment method. Value
     * enum: "card". previous_attributes.type.anyOf[1] (Value): string. Kind of payment method.
     * Value enum: "card". previous_attributes.type.anyOf[2] (Value): null.
     * previous_attributes.updated_at (Optional): string or null. RFC3339 timestamp.
     * previous_attributes.updated_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.updated_at.anyOf[2] (Value):
     * null. previous_attributes.usage (Optional): string or null. When Flint may charge the
     * payment method. off_session payment methods can pay subscriptions, automatic invoices, and
     * other charges without the buyer, and can be a customer's default. on_session payment methods
     * were saved by the buyer in checkout for faster checkout at this merchant; Flint charges them
     * only in checkouts the buyer completes and refuses them for any charge without the buyer and
     * as a default. Payment methods saved before usage existed are off_session. Value enum:
     * "on_session", "off_session". previous_attributes.usage.anyOf[1] (Value): string. When Flint
     * may charge the payment method. off_session payment methods can pay subscriptions, automatic
     * invoices, and other charges without the buyer, and can be a customer's default. on_session
     * payment methods were saved by the buyer in checkout for faster checkout at this merchant;
     * Flint charges them only in checkouts the buyer completes and refuses them for any charge
     * without the buyer and as a default. Payment methods saved before usage existed are
     * off_session. Value enum: "on_session", "off_session". previous_attributes.usage.anyOf[2]
     * (Value): null.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields. card
         * (Optional): {@link CardDetails}. Brand, expiry and last four digits. Present when `type`
         * is `card`. Card details on a payment method: brand, expiration month and year, last four
         * digits, and the wallet when one was used. created_at (Required): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". customer (Optional):
         * {@link ExpandedCustomerSummary} or null. Present only when `expand` includes `customer`;
         * `null` when expanded and there is no related customer. customer.anyOf[1] (Value): {@link
         * ExpandedCustomerSummary}. A customer's summary fields, returned in place of a customer
         * ID when the customer is expanded. customer.anyOf[2] (Value): null. customer_id
         * (Required): string. Customer this payment method belongs to. Example:
         * "cus_01KEZF7C006X9JK6NZNA2SM9XD". fingerprint (Optional): string. A value that is the
         * same for every saved copy of one card number at this merchant and environment, so you
         * can spot duplicates. It doesn't identify the card anywhere else. A card added through
         * Apple Pay or Google Pay can have a different fingerprint from the same card typed in.
         * is_default (Required): boolean. Whether this is the customer's default payment method,
         * the one Customer.default_payment_method_id names. Change the default with PATCH
         * /v1/customers/{customer_id}; that sends customer.updated, not a payment method event.
         * Existing subscriptions keep their payment_method_id. is_removing (Required): boolean.
         * Removal is in progress. Show this card as Removing and offer retry with DELETE
         * /v1/payment-methods/{payment_method_id}, or DELETE
         * /v1/me/payment-methods/{payment_method_id} for buyers. Do not offer it for a new
         * payment, subscription, or default. Flint retries abandoned removals automatically.
         * merchant_id (Required): string. ID of the merchant this resource belongs to. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". origin (Optional): string. `imported` for a saved card
         * that Flint migrated from another processor account. Omitted for other cards. Value enum:
         * "imported". payment_method_id (Required): string. Unique identifier for this payment
         * method, prefixed `pm_`. Example: "pm_01KEZF7C0034B248TXXE4NXYFZ". saved_with (Optional):
         * string. Where the buyer saved this payment method. Returned on /v1/me/payment-methods
         * responses when Flint wallet support is enabled. Accept future values. Value enum:
         * "flint", "store". status (Required): string. The saved card lifecycle. Offer the card
         * for a new payment only when status is active and is_removing is false. Treat any other
         * status as not chargeable, including values added later. Value enum: "pending", "active",
         * "expired", "archived", "failed". type (Required): string. Kind of payment method. Value
         * enum: "card". updated_at (Required): string. RFC3339 timestamp. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". usage (Required): string. When Flint may charge the
         * payment method. off_session payment methods can pay subscriptions, automatic invoices,
         * and other charges without the buyer, and can be a customer's default. on_session payment
         * methods were saved by the buyer in checkout for faster checkout at this merchant; Flint
         * charges them only in checkouts the buyer completes and refuses them for any charge
         * without the buyer and as a default. Payment methods saved before usage existed are
         * off_session. Value enum: "on_session", "off_session".
         */
        "object": {
            /**
             * Brand, expiry and last four digits. Present when `type` is `card`. Card details on a
             * payment method: brand, expiration month and year, last four digits, and the wallet
             * when one was used.
             */
            "card"?: CardDetails;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Present only when `expand` includes `customer`; `null` when expanded and there is no
             * related customer. anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's
             * summary fields, returned in place of a customer ID when the customer is expanded.
             * anyOf[2] (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummary) | (null));
            /**
             * Customer this payment method belongs to. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
             */
            "customer_id": string;
            /**
             * A value that is the same for every saved copy of one card number at this merchant
             * and environment, so you can spot duplicates. It doesn't identify the card anywhere
             * else. A card added through Apple Pay or Google Pay can have a different fingerprint
             * from the same card typed in.
             */
            "fingerprint"?: string;
            /**
             * Whether this is the customer's default payment method, the one
             * Customer.default_payment_method_id names. Change the default with PATCH
             * /v1/customers/{customer_id}; that sends customer.updated, not a payment method
             * event. Existing subscriptions keep their payment_method_id.
             */
            "is_default": boolean;
            /**
             * Removal is in progress. Show this card as Removing and offer retry with DELETE
             * /v1/payment-methods/{payment_method_id}, or DELETE
             * /v1/me/payment-methods/{payment_method_id} for buyers. Do not offer it for a new
             * payment, subscription, or default. Flint retries abandoned removals automatically.
             */
            "is_removing": boolean;
            /**
             * ID of the merchant this resource belongs to. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id": string;
            /**
             * `imported` for a saved card that Flint migrated from another processor account.
             * Omitted for other cards. Value enum: "imported".
             */
            "origin"?: "imported" | (string & {});
            /**
             * Unique identifier for this payment method, prefixed `pm_`. Example:
             * "pm_01KEZF7C0034B248TXXE4NXYFZ".
             */
            "payment_method_id": string;
            /**
             * Where the buyer saved this payment method. Returned on /v1/me/payment-methods
             * responses when Flint wallet support is enabled. Accept future values. Value enum:
             * "flint", "store".
             */
            "saved_with"?: "flint" | "store" | (string & {});
            /**
             * The saved card lifecycle. Offer the card for a new payment only when status is
             * active and is_removing is false. Treat any other status as not chargeable, including
             * values added later. Value enum: "pending", "active", "expired", "archived",
             * "failed".
             */
            "status": "pending" | "active" | "expired" | "archived" | "failed" | (string & {});
            /** Kind of payment method. Value enum: "card". */
            "type": "card" | (string & {});
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * When Flint may charge the payment method. off_session payment methods can pay
             * subscriptions, automatic invoices, and other charges without the buyer, and can be a
             * customer's default. on_session payment methods were saved by the buyer in checkout
             * for faster checkout at this merchant; Flint charges them only in checkouts the buyer
             * completes and refuses them for any charge without the buyer and as a default.
             * Payment methods saved before usage existed are off_session. Value enum:
             * "on_session", "off_session".
             */
            "usage": "on_session" | "off_session" | (string & {});
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. card (Optional): {@link
         * CardDetailsPreviousAttributes} or null. Brand, expiry and last four digits. Present when
         * `type` is `card`. card.anyOf[1] (Value): {@link CardDetailsPreviousAttributes}.
         * card.anyOf[2] (Value): null. created_at (Optional): string or null. RFC3339 timestamp.
         * created_at.anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". created_at.anyOf[2] (Value): null. customer (Optional): {@link
         * ExpandedCustomerSummaryPreviousAttributes} or null. Present only when `expand` includes
         * `customer`; `null` when expanded and there is no related customer. customer.anyOf[1]
         * (Value): {@link ExpandedCustomerSummaryPreviousAttributes}. customer.anyOf[2] (Value):
         * null. customer_id (Optional): string or null. Customer this payment method belongs to.
         * customer_id.anyOf[1] (Value): string. Customer this payment method belongs to. Example:
         * "cus_01KEZF7C006X9JK6NZNA2SM9XD". customer_id.anyOf[2] (Value): null. fingerprint
         * (Optional): string or null. A value that is the same for every saved copy of one card
         * number at this merchant and environment, so you can spot duplicates. It doesn't identify
         * the card anywhere else. A card added through Apple Pay or Google Pay can have a
         * different fingerprint from the same card typed in. fingerprint.anyOf[1] (Value): string.
         * A value that is the same for every saved copy of one card number at this merchant and
         * environment, so you can spot duplicates. It doesn't identify the card anywhere else. A
         * card added through Apple Pay or Google Pay can have a different fingerprint from the
         * same card typed in. fingerprint.anyOf[2] (Value): null. is_default (Optional): boolean
         * or null. Whether this is the customer's default payment method, the one
         * Customer.default_payment_method_id names. Change the default with PATCH
         * /v1/customers/{customer_id}; that sends customer.updated, not a payment method event.
         * Existing subscriptions keep their payment_method_id. is_default.anyOf[1] (Value):
         * boolean. Whether this is the customer's default payment method, the one
         * Customer.default_payment_method_id names. Change the default with PATCH
         * /v1/customers/{customer_id}; that sends customer.updated, not a payment method event.
         * Existing subscriptions keep their payment_method_id. is_default.anyOf[2] (Value): null.
         * is_removing (Optional): boolean or null. Removal is in progress. Show this card as
         * Removing and offer retry with DELETE /v1/payment-methods/{payment_method_id}, or DELETE
         * /v1/me/payment-methods/{payment_method_id} for buyers. Do not offer it for a new
         * payment, subscription, or default. Flint retries abandoned removals automatically.
         * is_removing.anyOf[1] (Value): boolean. Removal is in progress. Show this card as
         * Removing and offer retry with DELETE /v1/payment-methods/{payment_method_id}, or DELETE
         * /v1/me/payment-methods/{payment_method_id} for buyers. Do not offer it for a new
         * payment, subscription, or default. Flint retries abandoned removals automatically.
         * is_removing.anyOf[2] (Value): null. merchant_id (Optional): string or null. ID of the
         * merchant this resource belongs to. merchant_id.anyOf[1] (Value): string. ID of the
         * merchant this resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
         * merchant_id.anyOf[2] (Value): null. origin (Optional): string or null. `imported` for a
         * saved card that Flint migrated from another processor account. Omitted for other cards.
         * Value enum: "imported". origin.anyOf[1] (Value): string. `imported` for a saved card
         * that Flint migrated from another processor account. Omitted for other cards. Value enum:
         * "imported". origin.anyOf[2] (Value): null. payment_method_id (Optional): string or null.
         * Unique identifier for this payment method, prefixed `pm_`. payment_method_id.anyOf[1]
         * (Value): string. Unique identifier for this payment method, prefixed `pm_`. Example:
         * "pm_01KEZF7C0034B248TXXE4NXYFZ". payment_method_id.anyOf[2] (Value): null. saved_with
         * (Optional): string or null. Where the buyer saved this payment method. Returned on
         * /v1/me/payment-methods responses when Flint wallet support is enabled. Accept future
         * values. Value enum: "flint", "store". saved_with.anyOf[1] (Value): string. Where the
         * buyer saved this payment method. Returned on /v1/me/payment-methods responses when Flint
         * wallet support is enabled. Accept future values. Value enum: "flint", "store".
         * saved_with.anyOf[2] (Value): null. status (Optional): string or null. The saved card
         * lifecycle. Offer the card for a new payment only when status is active and is_removing
         * is false. Treat any other status as not chargeable, including values added later. Value
         * enum: "pending", "active", "expired", "archived", "failed". status.anyOf[1] (Value):
         * string. The saved card lifecycle. Offer the card for a new payment only when status is
         * active and is_removing is false. Treat any other status as not chargeable, including
         * values added later. Value enum: "pending", "active", "expired", "archived", "failed".
         * status.anyOf[2] (Value): null. type (Optional): string or null. Kind of payment method.
         * Value enum: "card". type.anyOf[1] (Value): string. Kind of payment method. Value enum:
         * "card". type.anyOf[2] (Value): null. updated_at (Optional): string or null. RFC3339
         * timestamp. updated_at.anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". updated_at.anyOf[2] (Value): null. usage (Optional):
         * string or null. When Flint may charge the payment method. off_session payment methods
         * can pay subscriptions, automatic invoices, and other charges without the buyer, and can
         * be a customer's default. on_session payment methods were saved by the buyer in checkout
         * for faster checkout at this merchant; Flint charges them only in checkouts the buyer
         * completes and refuses them for any charge without the buyer and as a default. Payment
         * methods saved before usage existed are off_session. Value enum: "on_session",
         * "off_session". usage.anyOf[1] (Value): string. When Flint may charge the payment method.
         * off_session payment methods can pay subscriptions, automatic invoices, and other charges
         * without the buyer, and can be a customer's default. on_session payment methods were
         * saved by the buyer in checkout for faster checkout at this merchant; Flint charges them
         * only in checkouts the buyer completes and refuses them for any charge without the buyer
         * and as a default. Payment methods saved before usage existed are off_session. Value
         * enum: "on_session", "off_session". usage.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * Brand, expiry and last four digits. Present when `type` is `card`. anyOf[1] (Value):
             * {@link CardDetailsPreviousAttributes}. anyOf[2] (Value): null.
             */
            "card"?: ((CardDetailsPreviousAttributes) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * Present only when `expand` includes `customer`; `null` when expanded and there is no
             * related customer. anyOf[1] (Value): {@link
             * ExpandedCustomerSummaryPreviousAttributes}. anyOf[2] (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummaryPreviousAttributes) | (null));
            /**
             * Customer this payment method belongs to. anyOf[1] (Value): string. Customer this
             * payment method belongs to. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". anyOf[2]
             * (Value): null.
             */
            "customer_id"?: ((string) | (null));
            /**
             * A value that is the same for every saved copy of one card number at this merchant
             * and environment, so you can spot duplicates. It doesn't identify the card anywhere
             * else. A card added through Apple Pay or Google Pay can have a different fingerprint
             * from the same card typed in. anyOf[1] (Value): string. A value that is the same for
             * every saved copy of one card number at this merchant and environment, so you can
             * spot duplicates. It doesn't identify the card anywhere else. A card added through
             * Apple Pay or Google Pay can have a different fingerprint from the same card typed
             * in. anyOf[2] (Value): null.
             */
            "fingerprint"?: ((string) | (null));
            /**
             * Whether this is the customer's default payment method, the one
             * Customer.default_payment_method_id names. Change the default with PATCH
             * /v1/customers/{customer_id}; that sends customer.updated, not a payment method
             * event. Existing subscriptions keep their payment_method_id. anyOf[1] (Value):
             * boolean. Whether this is the customer's default payment method, the one
             * Customer.default_payment_method_id names. Change the default with PATCH
             * /v1/customers/{customer_id}; that sends customer.updated, not a payment method
             * event. Existing subscriptions keep their payment_method_id. anyOf[2] (Value): null.
             */
            "is_default"?: ((boolean) | (null));
            /**
             * Removal is in progress. Show this card as Removing and offer retry with DELETE
             * /v1/payment-methods/{payment_method_id}, or DELETE
             * /v1/me/payment-methods/{payment_method_id} for buyers. Do not offer it for a new
             * payment, subscription, or default. Flint retries abandoned removals automatically.
             * anyOf[1] (Value): boolean. Removal is in progress. Show this card as Removing and
             * offer retry with DELETE /v1/payment-methods/{payment_method_id}, or DELETE
             * /v1/me/payment-methods/{payment_method_id} for buyers. Do not offer it for a new
             * payment, subscription, or default. Flint retries abandoned removals automatically.
             * anyOf[2] (Value): null.
             */
            "is_removing"?: ((boolean) | (null));
            /**
             * ID of the merchant this resource belongs to. anyOf[1] (Value): string. ID of the
             * merchant this resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             * anyOf[2] (Value): null.
             */
            "merchant_id"?: ((string) | (null));
            /**
             * `imported` for a saved card that Flint migrated from another processor account.
             * Omitted for other cards. Value enum: "imported". anyOf[1] (Value): string.
             * `imported` for a saved card that Flint migrated from another processor account.
             * Omitted for other cards. Value enum: "imported". anyOf[2] (Value): null.
             */
            "origin"?: (("imported" | (string & {})) | (null));
            /**
             * Unique identifier for this payment method, prefixed `pm_`. anyOf[1] (Value): string.
             * Unique identifier for this payment method, prefixed `pm_`. Example:
             * "pm_01KEZF7C0034B248TXXE4NXYFZ". anyOf[2] (Value): null.
             */
            "payment_method_id"?: ((string) | (null));
            /**
             * Where the buyer saved this payment method. Returned on /v1/me/payment-methods
             * responses when Flint wallet support is enabled. Accept future values. Value enum:
             * "flint", "store". anyOf[1] (Value): string. Where the buyer saved this payment
             * method. Returned on /v1/me/payment-methods responses when Flint wallet support is
             * enabled. Accept future values. Value enum: "flint", "store". anyOf[2] (Value): null.
             */
            "saved_with"?: (("flint" | "store" | (string & {})) | (null));
            /**
             * The saved card lifecycle. Offer the card for a new payment only when status is
             * active and is_removing is false. Treat any other status as not chargeable, including
             * values added later. Value enum: "pending", "active", "expired", "archived",
             * "failed". anyOf[1] (Value): string. The saved card lifecycle. Offer the card for a
             * new payment only when status is active and is_removing is false. Treat any other
             * status as not chargeable, including values added later. Value enum: "pending",
             * "active", "expired", "archived", "failed". anyOf[2] (Value): null.
             */
            "status"?: (("pending" | "active" | "expired" | "archived" | "failed" | (string & {})) | (null));
            /**
             * Kind of payment method. Value enum: "card". anyOf[1] (Value): string. Kind of
             * payment method. Value enum: "card". anyOf[2] (Value): null.
             */
            "type"?: (("card" | (string & {})) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * When Flint may charge the payment method. off_session payment methods can pay
             * subscriptions, automatic invoices, and other charges without the buyer, and can be a
             * customer's default. on_session payment methods were saved by the buyer in checkout
             * for faster checkout at this merchant; Flint charges them only in checkouts the buyer
             * completes and refuses them for any charge without the buyer and as a default.
             * Payment methods saved before usage existed are off_session. Value enum:
             * "on_session", "off_session". anyOf[1] (Value): string. When Flint may charge the
             * payment method. off_session payment methods can pay subscriptions, automatic
             * invoices, and other charges without the buyer, and can be a customer's default.
             * on_session payment methods were saved by the buyer in checkout for faster checkout
             * at this merchant; Flint charges them only in checkouts the buyer completes and
             * refuses them for any charge without the buyer and as a default. Payment methods
             * saved before usage existed are off_session. Value enum: "on_session", "off_session".
             * anyOf[2] (Value): null.
             */
            "usage"?: (("on_session" | "off_session" | (string & {})) | (null));
        });
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "payment_method.failed". */
    "event_type"?: "payment_method.failed";
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
 * The `payment_method.failed` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type PaymentMethodFailedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.card (Optional): {@link CardDetails}. Brand, expiry and last four
     * digits. Present when `type` is `card`. Card details on a payment method: brand, expiration
     * month and year, last four digits, and the wallet when one was used. object.created_at
     * (Required): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.customer (Optional): {@link ExpandedCustomerSummary} or null. Present only when
     * `expand` includes `customer`; `null` when expanded and there is no related customer.
     * object.customer.anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's summary
     * fields, returned in place of a customer ID when the customer is expanded.
     * object.customer.anyOf[2] (Value): null. object.customer_id (Required): string. Customer this
     * payment method belongs to. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". object.fingerprint
     * (Optional): string. A value that is the same for every saved copy of one card number at this
     * merchant and environment, so you can spot duplicates. It doesn't identify the card anywhere
     * else. A card added through Apple Pay or Google Pay can have a different fingerprint from the
     * same card typed in. object.is_default (Required): boolean. Whether this is the customer's
     * default payment method, the one Customer.default_payment_method_id names. Change the default
     * with PATCH /v1/customers/{customer_id}; that sends customer.updated, not a payment method
     * event. Existing subscriptions keep their payment_method_id. object.is_removing (Required):
     * boolean. Removal is in progress. Show this card as Removing and offer retry with DELETE
     * /v1/payment-methods/{payment_method_id}, or DELETE
     * /v1/me/payment-methods/{payment_method_id} for buyers. Do not offer it for a new payment,
     * subscription, or default. Flint retries abandoned removals automatically. object.merchant_id
     * (Required): string. ID of the merchant this resource belongs to. Example:
     * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.origin (Optional): string. `imported` for a saved
     * card that Flint migrated from another processor account. Omitted for other cards. Value
     * enum: "imported". object.payment_method_id (Required): string. Unique identifier for this
     * payment method, prefixed `pm_`. Example: "pm_01KEZF7C0034B248TXXE4NXYFZ". object.saved_with
     * (Optional): string. Where the buyer saved this payment method. Returned on
     * /v1/me/payment-methods responses when Flint wallet support is enabled. Accept future values.
     * Value enum: "flint", "store". object.status (Required): string. The saved card lifecycle.
     * Offer the card for a new payment only when status is active and is_removing is false. Treat
     * any other status as not chargeable, including values added later. Value enum: "pending",
     * "active", "expired", "archived", "failed". object.type (Required): string. Kind of payment
     * method. Value enum: "card". object.updated_at (Required): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.usage (Required): string. When Flint may
     * charge the payment method. off_session payment methods can pay subscriptions, automatic
     * invoices, and other charges without the buyer, and can be a customer's default. on_session
     * payment methods were saved by the buyer in checkout for faster checkout at this merchant;
     * Flint charges them only in checkouts the buyer completes and refuses them for any charge
     * without the buyer and as a default. Payment methods saved before usage existed are
     * off_session. Value enum: "on_session", "off_session". previous_attributes (Optional):
     * object. Previous values of changed top-level fields in data.object, at this delivery's API
     * version. Nested changes include the whole previous top-level value. A value is null when the
     * field was absent before the change. Omitted when Flint did not record the previous state,
     * including synthetic test events. previous_attributes.card (Optional): {@link
     * CardDetailsPreviousAttributes} or null. Brand, expiry and last four digits. Present when
     * `type` is `card`. previous_attributes.card.anyOf[1] (Value): {@link
     * CardDetailsPreviousAttributes}. previous_attributes.card.anyOf[2] (Value): null.
     * previous_attributes.created_at (Optional): string or null. RFC3339 timestamp.
     * previous_attributes.created_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.created_at.anyOf[2] (Value):
     * null. previous_attributes.customer (Optional): {@link
     * ExpandedCustomerSummaryPreviousAttributes} or null. Present only when `expand` includes
     * `customer`; `null` when expanded and there is no related customer.
     * previous_attributes.customer.anyOf[1] (Value): {@link
     * ExpandedCustomerSummaryPreviousAttributes}. previous_attributes.customer.anyOf[2] (Value):
     * null. previous_attributes.customer_id (Optional): string or null. Customer this payment
     * method belongs to. previous_attributes.customer_id.anyOf[1] (Value): string. Customer this
     * payment method belongs to. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     * previous_attributes.customer_id.anyOf[2] (Value): null. previous_attributes.fingerprint
     * (Optional): string or null. A value that is the same for every saved copy of one card number
     * at this merchant and environment, so you can spot duplicates. It doesn't identify the card
     * anywhere else. A card added through Apple Pay or Google Pay can have a different fingerprint
     * from the same card typed in. previous_attributes.fingerprint.anyOf[1] (Value): string. A
     * value that is the same for every saved copy of one card number at this merchant and
     * environment, so you can spot duplicates. It doesn't identify the card anywhere else. A card
     * added through Apple Pay or Google Pay can have a different fingerprint from the same card
     * typed in. previous_attributes.fingerprint.anyOf[2] (Value): null.
     * previous_attributes.is_default (Optional): boolean or null. Whether this is the customer's
     * default payment method, the one Customer.default_payment_method_id names. Change the default
     * with PATCH /v1/customers/{customer_id}; that sends customer.updated, not a payment method
     * event. Existing subscriptions keep their payment_method_id.
     * previous_attributes.is_default.anyOf[1] (Value): boolean. Whether this is the customer's
     * default payment method, the one Customer.default_payment_method_id names. Change the default
     * with PATCH /v1/customers/{customer_id}; that sends customer.updated, not a payment method
     * event. Existing subscriptions keep their payment_method_id.
     * previous_attributes.is_default.anyOf[2] (Value): null. previous_attributes.is_removing
     * (Optional): boolean or null. Removal is in progress. Show this card as Removing and offer
     * retry with DELETE /v1/payment-methods/{payment_method_id}, or DELETE
     * /v1/me/payment-methods/{payment_method_id} for buyers. Do not offer it for a new payment,
     * subscription, or default. Flint retries abandoned removals automatically.
     * previous_attributes.is_removing.anyOf[1] (Value): boolean. Removal is in progress. Show this
     * card as Removing and offer retry with DELETE /v1/payment-methods/{payment_method_id}, or
     * DELETE /v1/me/payment-methods/{payment_method_id} for buyers. Do not offer it for a new
     * payment, subscription, or default. Flint retries abandoned removals automatically.
     * previous_attributes.is_removing.anyOf[2] (Value): null. previous_attributes.merchant_id
     * (Optional): string or null. ID of the merchant this resource belongs to.
     * previous_attributes.merchant_id.anyOf[1] (Value): string. ID of the merchant this resource
     * belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     * previous_attributes.merchant_id.anyOf[2] (Value): null. previous_attributes.origin
     * (Optional): string or null. `imported` for a saved card that Flint migrated from another
     * processor account. Omitted for other cards. Value enum: "imported".
     * previous_attributes.origin.anyOf[1] (Value): string. `imported` for a saved card that Flint
     * migrated from another processor account. Omitted for other cards. Value enum: "imported".
     * previous_attributes.origin.anyOf[2] (Value): null. previous_attributes.payment_method_id
     * (Optional): string or null. Unique identifier for this payment method, prefixed `pm_`.
     * previous_attributes.payment_method_id.anyOf[1] (Value): string. Unique identifier for this
     * payment method, prefixed `pm_`. Example: "pm_01KEZF7C0034B248TXXE4NXYFZ".
     * previous_attributes.payment_method_id.anyOf[2] (Value): null. previous_attributes.saved_with
     * (Optional): string or null. Where the buyer saved this payment method. Returned on
     * /v1/me/payment-methods responses when Flint wallet support is enabled. Accept future values.
     * Value enum: "flint", "store". previous_attributes.saved_with.anyOf[1] (Value): string. Where
     * the buyer saved this payment method. Returned on /v1/me/payment-methods responses when Flint
     * wallet support is enabled. Accept future values. Value enum: "flint", "store".
     * previous_attributes.saved_with.anyOf[2] (Value): null. previous_attributes.status
     * (Optional): string or null. The saved card lifecycle. Offer the card for a new payment only
     * when status is active and is_removing is false. Treat any other status as not chargeable,
     * including values added later. Value enum: "pending", "active", "expired", "archived",
     * "failed". previous_attributes.status.anyOf[1] (Value): string. The saved card lifecycle.
     * Offer the card for a new payment only when status is active and is_removing is false. Treat
     * any other status as not chargeable, including values added later. Value enum: "pending",
     * "active", "expired", "archived", "failed". previous_attributes.status.anyOf[2] (Value):
     * null. previous_attributes.type (Optional): string or null. Kind of payment method. Value
     * enum: "card". previous_attributes.type.anyOf[1] (Value): string. Kind of payment method.
     * Value enum: "card". previous_attributes.type.anyOf[2] (Value): null.
     * previous_attributes.updated_at (Optional): string or null. RFC3339 timestamp.
     * previous_attributes.updated_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.updated_at.anyOf[2] (Value):
     * null. previous_attributes.usage (Optional): string or null. When Flint may charge the
     * payment method. off_session payment methods can pay subscriptions, automatic invoices, and
     * other charges without the buyer, and can be a customer's default. on_session payment methods
     * were saved by the buyer in checkout for faster checkout at this merchant; Flint charges them
     * only in checkouts the buyer completes and refuses them for any charge without the buyer and
     * as a default. Payment methods saved before usage existed are off_session. Value enum:
     * "on_session", "off_session". previous_attributes.usage.anyOf[1] (Value): string. When Flint
     * may charge the payment method. off_session payment methods can pay subscriptions, automatic
     * invoices, and other charges without the buyer, and can be a customer's default. on_session
     * payment methods were saved by the buyer in checkout for faster checkout at this merchant;
     * Flint charges them only in checkouts the buyer completes and refuses them for any charge
     * without the buyer and as a default. Payment methods saved before usage existed are
     * off_session. Value enum: "on_session", "off_session". previous_attributes.usage.anyOf[2]
     * (Value): null.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields. card
         * (Optional): {@link CardDetails}. Brand, expiry and last four digits. Present when `type`
         * is `card`. Card details on a payment method: brand, expiration month and year, last four
         * digits, and the wallet when one was used. created_at (Required): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". customer (Optional):
         * {@link ExpandedCustomerSummary} or null. Present only when `expand` includes `customer`;
         * `null` when expanded and there is no related customer. customer.anyOf[1] (Value): {@link
         * ExpandedCustomerSummary}. A customer's summary fields, returned in place of a customer
         * ID when the customer is expanded. customer.anyOf[2] (Value): null. customer_id
         * (Required): string. Customer this payment method belongs to. Example:
         * "cus_01KEZF7C006X9JK6NZNA2SM9XD". fingerprint (Optional): string. A value that is the
         * same for every saved copy of one card number at this merchant and environment, so you
         * can spot duplicates. It doesn't identify the card anywhere else. A card added through
         * Apple Pay or Google Pay can have a different fingerprint from the same card typed in.
         * is_default (Required): boolean. Whether this is the customer's default payment method,
         * the one Customer.default_payment_method_id names. Change the default with PATCH
         * /v1/customers/{customer_id}; that sends customer.updated, not a payment method event.
         * Existing subscriptions keep their payment_method_id. is_removing (Required): boolean.
         * Removal is in progress. Show this card as Removing and offer retry with DELETE
         * /v1/payment-methods/{payment_method_id}, or DELETE
         * /v1/me/payment-methods/{payment_method_id} for buyers. Do not offer it for a new
         * payment, subscription, or default. Flint retries abandoned removals automatically.
         * merchant_id (Required): string. ID of the merchant this resource belongs to. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". origin (Optional): string. `imported` for a saved card
         * that Flint migrated from another processor account. Omitted for other cards. Value enum:
         * "imported". payment_method_id (Required): string. Unique identifier for this payment
         * method, prefixed `pm_`. Example: "pm_01KEZF7C0034B248TXXE4NXYFZ". saved_with (Optional):
         * string. Where the buyer saved this payment method. Returned on /v1/me/payment-methods
         * responses when Flint wallet support is enabled. Accept future values. Value enum:
         * "flint", "store". status (Required): string. The saved card lifecycle. Offer the card
         * for a new payment only when status is active and is_removing is false. Treat any other
         * status as not chargeable, including values added later. Value enum: "pending", "active",
         * "expired", "archived", "failed". type (Required): string. Kind of payment method. Value
         * enum: "card". updated_at (Required): string. RFC3339 timestamp. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". usage (Required): string. When Flint may charge the
         * payment method. off_session payment methods can pay subscriptions, automatic invoices,
         * and other charges without the buyer, and can be a customer's default. on_session payment
         * methods were saved by the buyer in checkout for faster checkout at this merchant; Flint
         * charges them only in checkouts the buyer completes and refuses them for any charge
         * without the buyer and as a default. Payment methods saved before usage existed are
         * off_session. Value enum: "on_session", "off_session".
         */
        "object": {
            /**
             * Brand, expiry and last four digits. Present when `type` is `card`. Card details on a
             * payment method: brand, expiration month and year, last four digits, and the wallet
             * when one was used.
             */
            "card"?: CardDetails;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Present only when `expand` includes `customer`; `null` when expanded and there is no
             * related customer. anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's
             * summary fields, returned in place of a customer ID when the customer is expanded.
             * anyOf[2] (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummary) | (null));
            /**
             * Customer this payment method belongs to. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
             */
            "customer_id": string;
            /**
             * A value that is the same for every saved copy of one card number at this merchant
             * and environment, so you can spot duplicates. It doesn't identify the card anywhere
             * else. A card added through Apple Pay or Google Pay can have a different fingerprint
             * from the same card typed in.
             */
            "fingerprint"?: string;
            /**
             * Whether this is the customer's default payment method, the one
             * Customer.default_payment_method_id names. Change the default with PATCH
             * /v1/customers/{customer_id}; that sends customer.updated, not a payment method
             * event. Existing subscriptions keep their payment_method_id.
             */
            "is_default": boolean;
            /**
             * Removal is in progress. Show this card as Removing and offer retry with DELETE
             * /v1/payment-methods/{payment_method_id}, or DELETE
             * /v1/me/payment-methods/{payment_method_id} for buyers. Do not offer it for a new
             * payment, subscription, or default. Flint retries abandoned removals automatically.
             */
            "is_removing": boolean;
            /**
             * ID of the merchant this resource belongs to. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id": string;
            /**
             * `imported` for a saved card that Flint migrated from another processor account.
             * Omitted for other cards. Value enum: "imported".
             */
            "origin"?: "imported" | (string & {});
            /**
             * Unique identifier for this payment method, prefixed `pm_`. Example:
             * "pm_01KEZF7C0034B248TXXE4NXYFZ".
             */
            "payment_method_id": string;
            /**
             * Where the buyer saved this payment method. Returned on /v1/me/payment-methods
             * responses when Flint wallet support is enabled. Accept future values. Value enum:
             * "flint", "store".
             */
            "saved_with"?: "flint" | "store" | (string & {});
            /**
             * The saved card lifecycle. Offer the card for a new payment only when status is
             * active and is_removing is false. Treat any other status as not chargeable, including
             * values added later. Value enum: "pending", "active", "expired", "archived",
             * "failed".
             */
            "status": "pending" | "active" | "expired" | "archived" | "failed" | (string & {});
            /** Kind of payment method. Value enum: "card". */
            "type": "card" | (string & {});
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * When Flint may charge the payment method. off_session payment methods can pay
             * subscriptions, automatic invoices, and other charges without the buyer, and can be a
             * customer's default. on_session payment methods were saved by the buyer in checkout
             * for faster checkout at this merchant; Flint charges them only in checkouts the buyer
             * completes and refuses them for any charge without the buyer and as a default.
             * Payment methods saved before usage existed are off_session. Value enum:
             * "on_session", "off_session".
             */
            "usage": "on_session" | "off_session" | (string & {});
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. card (Optional): {@link
         * CardDetailsPreviousAttributes} or null. Brand, expiry and last four digits. Present when
         * `type` is `card`. card.anyOf[1] (Value): {@link CardDetailsPreviousAttributes}.
         * card.anyOf[2] (Value): null. created_at (Optional): string or null. RFC3339 timestamp.
         * created_at.anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". created_at.anyOf[2] (Value): null. customer (Optional): {@link
         * ExpandedCustomerSummaryPreviousAttributes} or null. Present only when `expand` includes
         * `customer`; `null` when expanded and there is no related customer. customer.anyOf[1]
         * (Value): {@link ExpandedCustomerSummaryPreviousAttributes}. customer.anyOf[2] (Value):
         * null. customer_id (Optional): string or null. Customer this payment method belongs to.
         * customer_id.anyOf[1] (Value): string. Customer this payment method belongs to. Example:
         * "cus_01KEZF7C006X9JK6NZNA2SM9XD". customer_id.anyOf[2] (Value): null. fingerprint
         * (Optional): string or null. A value that is the same for every saved copy of one card
         * number at this merchant and environment, so you can spot duplicates. It doesn't identify
         * the card anywhere else. A card added through Apple Pay or Google Pay can have a
         * different fingerprint from the same card typed in. fingerprint.anyOf[1] (Value): string.
         * A value that is the same for every saved copy of one card number at this merchant and
         * environment, so you can spot duplicates. It doesn't identify the card anywhere else. A
         * card added through Apple Pay or Google Pay can have a different fingerprint from the
         * same card typed in. fingerprint.anyOf[2] (Value): null. is_default (Optional): boolean
         * or null. Whether this is the customer's default payment method, the one
         * Customer.default_payment_method_id names. Change the default with PATCH
         * /v1/customers/{customer_id}; that sends customer.updated, not a payment method event.
         * Existing subscriptions keep their payment_method_id. is_default.anyOf[1] (Value):
         * boolean. Whether this is the customer's default payment method, the one
         * Customer.default_payment_method_id names. Change the default with PATCH
         * /v1/customers/{customer_id}; that sends customer.updated, not a payment method event.
         * Existing subscriptions keep their payment_method_id. is_default.anyOf[2] (Value): null.
         * is_removing (Optional): boolean or null. Removal is in progress. Show this card as
         * Removing and offer retry with DELETE /v1/payment-methods/{payment_method_id}, or DELETE
         * /v1/me/payment-methods/{payment_method_id} for buyers. Do not offer it for a new
         * payment, subscription, or default. Flint retries abandoned removals automatically.
         * is_removing.anyOf[1] (Value): boolean. Removal is in progress. Show this card as
         * Removing and offer retry with DELETE /v1/payment-methods/{payment_method_id}, or DELETE
         * /v1/me/payment-methods/{payment_method_id} for buyers. Do not offer it for a new
         * payment, subscription, or default. Flint retries abandoned removals automatically.
         * is_removing.anyOf[2] (Value): null. merchant_id (Optional): string or null. ID of the
         * merchant this resource belongs to. merchant_id.anyOf[1] (Value): string. ID of the
         * merchant this resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
         * merchant_id.anyOf[2] (Value): null. origin (Optional): string or null. `imported` for a
         * saved card that Flint migrated from another processor account. Omitted for other cards.
         * Value enum: "imported". origin.anyOf[1] (Value): string. `imported` for a saved card
         * that Flint migrated from another processor account. Omitted for other cards. Value enum:
         * "imported". origin.anyOf[2] (Value): null. payment_method_id (Optional): string or null.
         * Unique identifier for this payment method, prefixed `pm_`. payment_method_id.anyOf[1]
         * (Value): string. Unique identifier for this payment method, prefixed `pm_`. Example:
         * "pm_01KEZF7C0034B248TXXE4NXYFZ". payment_method_id.anyOf[2] (Value): null. saved_with
         * (Optional): string or null. Where the buyer saved this payment method. Returned on
         * /v1/me/payment-methods responses when Flint wallet support is enabled. Accept future
         * values. Value enum: "flint", "store". saved_with.anyOf[1] (Value): string. Where the
         * buyer saved this payment method. Returned on /v1/me/payment-methods responses when Flint
         * wallet support is enabled. Accept future values. Value enum: "flint", "store".
         * saved_with.anyOf[2] (Value): null. status (Optional): string or null. The saved card
         * lifecycle. Offer the card for a new payment only when status is active and is_removing
         * is false. Treat any other status as not chargeable, including values added later. Value
         * enum: "pending", "active", "expired", "archived", "failed". status.anyOf[1] (Value):
         * string. The saved card lifecycle. Offer the card for a new payment only when status is
         * active and is_removing is false. Treat any other status as not chargeable, including
         * values added later. Value enum: "pending", "active", "expired", "archived", "failed".
         * status.anyOf[2] (Value): null. type (Optional): string or null. Kind of payment method.
         * Value enum: "card". type.anyOf[1] (Value): string. Kind of payment method. Value enum:
         * "card". type.anyOf[2] (Value): null. updated_at (Optional): string or null. RFC3339
         * timestamp. updated_at.anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". updated_at.anyOf[2] (Value): null. usage (Optional):
         * string or null. When Flint may charge the payment method. off_session payment methods
         * can pay subscriptions, automatic invoices, and other charges without the buyer, and can
         * be a customer's default. on_session payment methods were saved by the buyer in checkout
         * for faster checkout at this merchant; Flint charges them only in checkouts the buyer
         * completes and refuses them for any charge without the buyer and as a default. Payment
         * methods saved before usage existed are off_session. Value enum: "on_session",
         * "off_session". usage.anyOf[1] (Value): string. When Flint may charge the payment method.
         * off_session payment methods can pay subscriptions, automatic invoices, and other charges
         * without the buyer, and can be a customer's default. on_session payment methods were
         * saved by the buyer in checkout for faster checkout at this merchant; Flint charges them
         * only in checkouts the buyer completes and refuses them for any charge without the buyer
         * and as a default. Payment methods saved before usage existed are off_session. Value
         * enum: "on_session", "off_session". usage.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * Brand, expiry and last four digits. Present when `type` is `card`. anyOf[1] (Value):
             * {@link CardDetailsPreviousAttributes}. anyOf[2] (Value): null.
             */
            "card"?: ((CardDetailsPreviousAttributes) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * Present only when `expand` includes `customer`; `null` when expanded and there is no
             * related customer. anyOf[1] (Value): {@link
             * ExpandedCustomerSummaryPreviousAttributes}. anyOf[2] (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummaryPreviousAttributes) | (null));
            /**
             * Customer this payment method belongs to. anyOf[1] (Value): string. Customer this
             * payment method belongs to. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". anyOf[2]
             * (Value): null.
             */
            "customer_id"?: ((string) | (null));
            /**
             * A value that is the same for every saved copy of one card number at this merchant
             * and environment, so you can spot duplicates. It doesn't identify the card anywhere
             * else. A card added through Apple Pay or Google Pay can have a different fingerprint
             * from the same card typed in. anyOf[1] (Value): string. A value that is the same for
             * every saved copy of one card number at this merchant and environment, so you can
             * spot duplicates. It doesn't identify the card anywhere else. A card added through
             * Apple Pay or Google Pay can have a different fingerprint from the same card typed
             * in. anyOf[2] (Value): null.
             */
            "fingerprint"?: ((string) | (null));
            /**
             * Whether this is the customer's default payment method, the one
             * Customer.default_payment_method_id names. Change the default with PATCH
             * /v1/customers/{customer_id}; that sends customer.updated, not a payment method
             * event. Existing subscriptions keep their payment_method_id. anyOf[1] (Value):
             * boolean. Whether this is the customer's default payment method, the one
             * Customer.default_payment_method_id names. Change the default with PATCH
             * /v1/customers/{customer_id}; that sends customer.updated, not a payment method
             * event. Existing subscriptions keep their payment_method_id. anyOf[2] (Value): null.
             */
            "is_default"?: ((boolean) | (null));
            /**
             * Removal is in progress. Show this card as Removing and offer retry with DELETE
             * /v1/payment-methods/{payment_method_id}, or DELETE
             * /v1/me/payment-methods/{payment_method_id} for buyers. Do not offer it for a new
             * payment, subscription, or default. Flint retries abandoned removals automatically.
             * anyOf[1] (Value): boolean. Removal is in progress. Show this card as Removing and
             * offer retry with DELETE /v1/payment-methods/{payment_method_id}, or DELETE
             * /v1/me/payment-methods/{payment_method_id} for buyers. Do not offer it for a new
             * payment, subscription, or default. Flint retries abandoned removals automatically.
             * anyOf[2] (Value): null.
             */
            "is_removing"?: ((boolean) | (null));
            /**
             * ID of the merchant this resource belongs to. anyOf[1] (Value): string. ID of the
             * merchant this resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             * anyOf[2] (Value): null.
             */
            "merchant_id"?: ((string) | (null));
            /**
             * `imported` for a saved card that Flint migrated from another processor account.
             * Omitted for other cards. Value enum: "imported". anyOf[1] (Value): string.
             * `imported` for a saved card that Flint migrated from another processor account.
             * Omitted for other cards. Value enum: "imported". anyOf[2] (Value): null.
             */
            "origin"?: (("imported" | (string & {})) | (null));
            /**
             * Unique identifier for this payment method, prefixed `pm_`. anyOf[1] (Value): string.
             * Unique identifier for this payment method, prefixed `pm_`. Example:
             * "pm_01KEZF7C0034B248TXXE4NXYFZ". anyOf[2] (Value): null.
             */
            "payment_method_id"?: ((string) | (null));
            /**
             * Where the buyer saved this payment method. Returned on /v1/me/payment-methods
             * responses when Flint wallet support is enabled. Accept future values. Value enum:
             * "flint", "store". anyOf[1] (Value): string. Where the buyer saved this payment
             * method. Returned on /v1/me/payment-methods responses when Flint wallet support is
             * enabled. Accept future values. Value enum: "flint", "store". anyOf[2] (Value): null.
             */
            "saved_with"?: (("flint" | "store" | (string & {})) | (null));
            /**
             * The saved card lifecycle. Offer the card for a new payment only when status is
             * active and is_removing is false. Treat any other status as not chargeable, including
             * values added later. Value enum: "pending", "active", "expired", "archived",
             * "failed". anyOf[1] (Value): string. The saved card lifecycle. Offer the card for a
             * new payment only when status is active and is_removing is false. Treat any other
             * status as not chargeable, including values added later. Value enum: "pending",
             * "active", "expired", "archived", "failed". anyOf[2] (Value): null.
             */
            "status"?: (("pending" | "active" | "expired" | "archived" | "failed" | (string & {})) | (null));
            /**
             * Kind of payment method. Value enum: "card". anyOf[1] (Value): string. Kind of
             * payment method. Value enum: "card". anyOf[2] (Value): null.
             */
            "type"?: (("card" | (string & {})) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * When Flint may charge the payment method. off_session payment methods can pay
             * subscriptions, automatic invoices, and other charges without the buyer, and can be a
             * customer's default. on_session payment methods were saved by the buyer in checkout
             * for faster checkout at this merchant; Flint charges them only in checkouts the buyer
             * completes and refuses them for any charge without the buyer and as a default.
             * Payment methods saved before usage existed are off_session. Value enum:
             * "on_session", "off_session". anyOf[1] (Value): string. When Flint may charge the
             * payment method. off_session payment methods can pay subscriptions, automatic
             * invoices, and other charges without the buyer, and can be a customer's default.
             * on_session payment methods were saved by the buyer in checkout for faster checkout
             * at this merchant; Flint charges them only in checkouts the buyer completes and
             * refuses them for any charge without the buyer and as a default. Payment methods
             * saved before usage existed are off_session. Value enum: "on_session", "off_session".
             * anyOf[2] (Value): null.
             */
            "usage"?: (("on_session" | "off_session" | (string & {})) | (null));
        });
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "payment_method.failed". */
    "event_type"?: "payment_method.failed";
});
/** A page of `PaymentMethod` objects. */
export type PaymentMethodListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * PaymentMethod}. A customer's saved payment details.
     */
    "data": Array<PaymentMethod>;
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
/** A response containing `PaymentMethod` data. */
export type PaymentMethodResponse = {
    /**
     * Resource, collection, or operation result returned by this request. A customer's saved
     * payment details.
     */
    "data": PaymentMethod;
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
export type PaymentMethodUpdatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "card"?: CardDetails;
            "created_at": string;
            "customer"?: ((ExpandedCustomerSummary) | (null));
            "customer_id": string;
            "fingerprint"?: string;
            "is_default": boolean;
            "is_removing": boolean;
            "merchant_id": string;
            "origin"?: "imported" | (string & {});
            "payment_method_id": string;
            "saved_with"?: "flint" | "store" | (string & {});
            "status": "pending" | "active" | "expired" | "archived" | "failed" | (string & {});
            "type": "card" | (string & {});
            "updated_at": string;
            "usage": "on_session" | "off_session" | (string & {});
        };
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "card"?: ((CardDetailsPreviousAttributes) | (null));
            "created_at"?: ((string) | (null));
            "customer"?: ((ExpandedCustomerSummaryPreviousAttributes) | (null));
            "customer_id"?: ((string) | (null));
            "fingerprint"?: ((string) | (null));
            "is_default"?: ((boolean) | (null));
            "is_removing"?: ((boolean) | (null));
            "merchant_id"?: ((string) | (null));
            "origin"?: (("imported" | (string & {})) | (null));
            "payment_method_id"?: ((string) | (null));
            "saved_with"?: (("flint" | "store" | (string & {})) | (null));
            "status"?: (("pending" | "active" | "expired" | "archived" | "failed" | (string & {})) | (null));
            "type"?: (("card" | (string & {})) | (null));
            "updated_at"?: ((string) | (null));
            "usage"?: (("on_session" | "off_session" | (string & {})) | (null));
        });
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "payment_method.updated";
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
            "is_removing": boolean;
            "merchant_id": string;
            "origin"?: "imported" | (string & {});
            "payment_method_id": string;
            "saved_with"?: "flint" | "store" | (string & {});
            "status": "pending" | "active" | "expired" | "archived" | "failed" | (string & {});
            "type": "card" | (string & {});
            "updated_at": string;
            "usage": "on_session" | "off_session" | (string & {});
        };
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "card"?: ((CardDetailsPreviousAttributes) | (null));
            "created_at"?: ((string) | (null));
            "customer"?: ((ExpandedCustomerSummaryPreviousAttributes) | (null));
            "customer_id"?: ((string) | (null));
            "fingerprint"?: ((string) | (null));
            "is_default"?: ((boolean) | (null));
            "is_removing"?: ((boolean) | (null));
            "merchant_id"?: ((string) | (null));
            "origin"?: (("imported" | (string & {})) | (null));
            "payment_method_id"?: ((string) | (null));
            "saved_with"?: (("flint" | "store" | (string & {})) | (null));
            "status"?: (("pending" | "active" | "expired" | "archived" | "failed" | (string & {})) | (null));
            "type"?: (("card" | (string & {})) | (null));
            "updated_at"?: ((string) | (null));
            "usage"?: (("on_session" | "off_session" | (string & {})) | (null));
        });
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "payment_method.updated";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "payment_method.updated";
});
/**
 * The `payment_method.updated` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type PaymentMethodUpdatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.card (Optional): {@link CardDetails}. Brand, expiry and last four
     * digits. Present when `type` is `card`. Card details on a payment method: brand, expiration
     * month and year, last four digits, and the wallet when one was used. object.created_at
     * (Required): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.customer (Optional): {@link ExpandedCustomerSummary} or null. Present only when
     * `expand` includes `customer`; `null` when expanded and there is no related customer.
     * object.customer.anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's summary
     * fields, returned in place of a customer ID when the customer is expanded.
     * object.customer.anyOf[2] (Value): null. object.customer_id (Required): string. Customer this
     * payment method belongs to. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". object.fingerprint
     * (Optional): string. A value that is the same for every saved copy of one card number at this
     * merchant and environment, so you can spot duplicates. It doesn't identify the card anywhere
     * else. A card added through Apple Pay or Google Pay can have a different fingerprint from the
     * same card typed in. object.is_default (Required): boolean. Whether this is the customer's
     * default payment method, the one Customer.default_payment_method_id names. Change the default
     * with PATCH /v1/customers/{customer_id}; that sends customer.updated, not a payment method
     * event. Existing subscriptions keep their payment_method_id. object.is_removing (Required):
     * boolean. Removal is in progress. Show this card as Removing and offer retry with DELETE
     * /v1/payment-methods/{payment_method_id}, or DELETE
     * /v1/me/payment-methods/{payment_method_id} for buyers. Do not offer it for a new payment,
     * subscription, or default. Flint retries abandoned removals automatically. object.merchant_id
     * (Required): string. ID of the merchant this resource belongs to. Example:
     * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.origin (Optional): string. `imported` for a saved
     * card that Flint migrated from another processor account. Omitted for other cards. Value
     * enum: "imported". object.payment_method_id (Required): string. Unique identifier for this
     * payment method, prefixed `pm_`. Example: "pm_01KEZF7C0034B248TXXE4NXYFZ". object.saved_with
     * (Optional): string. Where the buyer saved this payment method. Returned on
     * /v1/me/payment-methods responses when Flint wallet support is enabled. Accept future values.
     * Value enum: "flint", "store". object.status (Required): string. The saved card lifecycle.
     * Offer the card for a new payment only when status is active and is_removing is false. Treat
     * any other status as not chargeable, including values added later. Value enum: "pending",
     * "active", "expired", "archived", "failed". object.type (Required): string. Kind of payment
     * method. Value enum: "card". object.updated_at (Required): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.usage (Required): string. When Flint may
     * charge the payment method. off_session payment methods can pay subscriptions, automatic
     * invoices, and other charges without the buyer, and can be a customer's default. on_session
     * payment methods were saved by the buyer in checkout for faster checkout at this merchant;
     * Flint charges them only in checkouts the buyer completes and refuses them for any charge
     * without the buyer and as a default. Payment methods saved before usage existed are
     * off_session. Value enum: "on_session", "off_session". previous_attributes (Optional):
     * object. Previous values of changed top-level fields in data.object, at this delivery's API
     * version. Nested changes include the whole previous top-level value. A value is null when the
     * field was absent before the change. Omitted when Flint did not record the previous state,
     * including synthetic test events. previous_attributes.card (Optional): {@link
     * CardDetailsPreviousAttributes} or null. Brand, expiry and last four digits. Present when
     * `type` is `card`. previous_attributes.card.anyOf[1] (Value): {@link
     * CardDetailsPreviousAttributes}. previous_attributes.card.anyOf[2] (Value): null.
     * previous_attributes.created_at (Optional): string or null. RFC3339 timestamp.
     * previous_attributes.created_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.created_at.anyOf[2] (Value):
     * null. previous_attributes.customer (Optional): {@link
     * ExpandedCustomerSummaryPreviousAttributes} or null. Present only when `expand` includes
     * `customer`; `null` when expanded and there is no related customer.
     * previous_attributes.customer.anyOf[1] (Value): {@link
     * ExpandedCustomerSummaryPreviousAttributes}. previous_attributes.customer.anyOf[2] (Value):
     * null. previous_attributes.customer_id (Optional): string or null. Customer this payment
     * method belongs to. previous_attributes.customer_id.anyOf[1] (Value): string. Customer this
     * payment method belongs to. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     * previous_attributes.customer_id.anyOf[2] (Value): null. previous_attributes.fingerprint
     * (Optional): string or null. A value that is the same for every saved copy of one card number
     * at this merchant and environment, so you can spot duplicates. It doesn't identify the card
     * anywhere else. A card added through Apple Pay or Google Pay can have a different fingerprint
     * from the same card typed in. previous_attributes.fingerprint.anyOf[1] (Value): string. A
     * value that is the same for every saved copy of one card number at this merchant and
     * environment, so you can spot duplicates. It doesn't identify the card anywhere else. A card
     * added through Apple Pay or Google Pay can have a different fingerprint from the same card
     * typed in. previous_attributes.fingerprint.anyOf[2] (Value): null.
     * previous_attributes.is_default (Optional): boolean or null. Whether this is the customer's
     * default payment method, the one Customer.default_payment_method_id names. Change the default
     * with PATCH /v1/customers/{customer_id}; that sends customer.updated, not a payment method
     * event. Existing subscriptions keep their payment_method_id.
     * previous_attributes.is_default.anyOf[1] (Value): boolean. Whether this is the customer's
     * default payment method, the one Customer.default_payment_method_id names. Change the default
     * with PATCH /v1/customers/{customer_id}; that sends customer.updated, not a payment method
     * event. Existing subscriptions keep their payment_method_id.
     * previous_attributes.is_default.anyOf[2] (Value): null. previous_attributes.is_removing
     * (Optional): boolean or null. Removal is in progress. Show this card as Removing and offer
     * retry with DELETE /v1/payment-methods/{payment_method_id}, or DELETE
     * /v1/me/payment-methods/{payment_method_id} for buyers. Do not offer it for a new payment,
     * subscription, or default. Flint retries abandoned removals automatically.
     * previous_attributes.is_removing.anyOf[1] (Value): boolean. Removal is in progress. Show this
     * card as Removing and offer retry with DELETE /v1/payment-methods/{payment_method_id}, or
     * DELETE /v1/me/payment-methods/{payment_method_id} for buyers. Do not offer it for a new
     * payment, subscription, or default. Flint retries abandoned removals automatically.
     * previous_attributes.is_removing.anyOf[2] (Value): null. previous_attributes.merchant_id
     * (Optional): string or null. ID of the merchant this resource belongs to.
     * previous_attributes.merchant_id.anyOf[1] (Value): string. ID of the merchant this resource
     * belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     * previous_attributes.merchant_id.anyOf[2] (Value): null. previous_attributes.origin
     * (Optional): string or null. `imported` for a saved card that Flint migrated from another
     * processor account. Omitted for other cards. Value enum: "imported".
     * previous_attributes.origin.anyOf[1] (Value): string. `imported` for a saved card that Flint
     * migrated from another processor account. Omitted for other cards. Value enum: "imported".
     * previous_attributes.origin.anyOf[2] (Value): null. previous_attributes.payment_method_id
     * (Optional): string or null. Unique identifier for this payment method, prefixed `pm_`.
     * previous_attributes.payment_method_id.anyOf[1] (Value): string. Unique identifier for this
     * payment method, prefixed `pm_`. Example: "pm_01KEZF7C0034B248TXXE4NXYFZ".
     * previous_attributes.payment_method_id.anyOf[2] (Value): null. previous_attributes.saved_with
     * (Optional): string or null. Where the buyer saved this payment method. Returned on
     * /v1/me/payment-methods responses when Flint wallet support is enabled. Accept future values.
     * Value enum: "flint", "store". previous_attributes.saved_with.anyOf[1] (Value): string. Where
     * the buyer saved this payment method. Returned on /v1/me/payment-methods responses when Flint
     * wallet support is enabled. Accept future values. Value enum: "flint", "store".
     * previous_attributes.saved_with.anyOf[2] (Value): null. previous_attributes.status
     * (Optional): string or null. The saved card lifecycle. Offer the card for a new payment only
     * when status is active and is_removing is false. Treat any other status as not chargeable,
     * including values added later. Value enum: "pending", "active", "expired", "archived",
     * "failed". previous_attributes.status.anyOf[1] (Value): string. The saved card lifecycle.
     * Offer the card for a new payment only when status is active and is_removing is false. Treat
     * any other status as not chargeable, including values added later. Value enum: "pending",
     * "active", "expired", "archived", "failed". previous_attributes.status.anyOf[2] (Value):
     * null. previous_attributes.type (Optional): string or null. Kind of payment method. Value
     * enum: "card". previous_attributes.type.anyOf[1] (Value): string. Kind of payment method.
     * Value enum: "card". previous_attributes.type.anyOf[2] (Value): null.
     * previous_attributes.updated_at (Optional): string or null. RFC3339 timestamp.
     * previous_attributes.updated_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.updated_at.anyOf[2] (Value):
     * null. previous_attributes.usage (Optional): string or null. When Flint may charge the
     * payment method. off_session payment methods can pay subscriptions, automatic invoices, and
     * other charges without the buyer, and can be a customer's default. on_session payment methods
     * were saved by the buyer in checkout for faster checkout at this merchant; Flint charges them
     * only in checkouts the buyer completes and refuses them for any charge without the buyer and
     * as a default. Payment methods saved before usage existed are off_session. Value enum:
     * "on_session", "off_session". previous_attributes.usage.anyOf[1] (Value): string. When Flint
     * may charge the payment method. off_session payment methods can pay subscriptions, automatic
     * invoices, and other charges without the buyer, and can be a customer's default. on_session
     * payment methods were saved by the buyer in checkout for faster checkout at this merchant;
     * Flint charges them only in checkouts the buyer completes and refuses them for any charge
     * without the buyer and as a default. Payment methods saved before usage existed are
     * off_session. Value enum: "on_session", "off_session". previous_attributes.usage.anyOf[2]
     * (Value): null.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields. card
         * (Optional): {@link CardDetails}. Brand, expiry and last four digits. Present when `type`
         * is `card`. Card details on a payment method: brand, expiration month and year, last four
         * digits, and the wallet when one was used. created_at (Required): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". customer (Optional):
         * {@link ExpandedCustomerSummary} or null. Present only when `expand` includes `customer`;
         * `null` when expanded and there is no related customer. customer.anyOf[1] (Value): {@link
         * ExpandedCustomerSummary}. A customer's summary fields, returned in place of a customer
         * ID when the customer is expanded. customer.anyOf[2] (Value): null. customer_id
         * (Required): string. Customer this payment method belongs to. Example:
         * "cus_01KEZF7C006X9JK6NZNA2SM9XD". fingerprint (Optional): string. A value that is the
         * same for every saved copy of one card number at this merchant and environment, so you
         * can spot duplicates. It doesn't identify the card anywhere else. A card added through
         * Apple Pay or Google Pay can have a different fingerprint from the same card typed in.
         * is_default (Required): boolean. Whether this is the customer's default payment method,
         * the one Customer.default_payment_method_id names. Change the default with PATCH
         * /v1/customers/{customer_id}; that sends customer.updated, not a payment method event.
         * Existing subscriptions keep their payment_method_id. is_removing (Required): boolean.
         * Removal is in progress. Show this card as Removing and offer retry with DELETE
         * /v1/payment-methods/{payment_method_id}, or DELETE
         * /v1/me/payment-methods/{payment_method_id} for buyers. Do not offer it for a new
         * payment, subscription, or default. Flint retries abandoned removals automatically.
         * merchant_id (Required): string. ID of the merchant this resource belongs to. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". origin (Optional): string. `imported` for a saved card
         * that Flint migrated from another processor account. Omitted for other cards. Value enum:
         * "imported". payment_method_id (Required): string. Unique identifier for this payment
         * method, prefixed `pm_`. Example: "pm_01KEZF7C0034B248TXXE4NXYFZ". saved_with (Optional):
         * string. Where the buyer saved this payment method. Returned on /v1/me/payment-methods
         * responses when Flint wallet support is enabled. Accept future values. Value enum:
         * "flint", "store". status (Required): string. The saved card lifecycle. Offer the card
         * for a new payment only when status is active and is_removing is false. Treat any other
         * status as not chargeable, including values added later. Value enum: "pending", "active",
         * "expired", "archived", "failed". type (Required): string. Kind of payment method. Value
         * enum: "card". updated_at (Required): string. RFC3339 timestamp. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". usage (Required): string. When Flint may charge the
         * payment method. off_session payment methods can pay subscriptions, automatic invoices,
         * and other charges without the buyer, and can be a customer's default. on_session payment
         * methods were saved by the buyer in checkout for faster checkout at this merchant; Flint
         * charges them only in checkouts the buyer completes and refuses them for any charge
         * without the buyer and as a default. Payment methods saved before usage existed are
         * off_session. Value enum: "on_session", "off_session".
         */
        "object": {
            /**
             * Brand, expiry and last four digits. Present when `type` is `card`. Card details on a
             * payment method: brand, expiration month and year, last four digits, and the wallet
             * when one was used.
             */
            "card"?: CardDetails;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Present only when `expand` includes `customer`; `null` when expanded and there is no
             * related customer. anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's
             * summary fields, returned in place of a customer ID when the customer is expanded.
             * anyOf[2] (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummary) | (null));
            /**
             * Customer this payment method belongs to. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
             */
            "customer_id": string;
            /**
             * A value that is the same for every saved copy of one card number at this merchant
             * and environment, so you can spot duplicates. It doesn't identify the card anywhere
             * else. A card added through Apple Pay or Google Pay can have a different fingerprint
             * from the same card typed in.
             */
            "fingerprint"?: string;
            /**
             * Whether this is the customer's default payment method, the one
             * Customer.default_payment_method_id names. Change the default with PATCH
             * /v1/customers/{customer_id}; that sends customer.updated, not a payment method
             * event. Existing subscriptions keep their payment_method_id.
             */
            "is_default": boolean;
            /**
             * Removal is in progress. Show this card as Removing and offer retry with DELETE
             * /v1/payment-methods/{payment_method_id}, or DELETE
             * /v1/me/payment-methods/{payment_method_id} for buyers. Do not offer it for a new
             * payment, subscription, or default. Flint retries abandoned removals automatically.
             */
            "is_removing": boolean;
            /**
             * ID of the merchant this resource belongs to. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id": string;
            /**
             * `imported` for a saved card that Flint migrated from another processor account.
             * Omitted for other cards. Value enum: "imported".
             */
            "origin"?: "imported" | (string & {});
            /**
             * Unique identifier for this payment method, prefixed `pm_`. Example:
             * "pm_01KEZF7C0034B248TXXE4NXYFZ".
             */
            "payment_method_id": string;
            /**
             * Where the buyer saved this payment method. Returned on /v1/me/payment-methods
             * responses when Flint wallet support is enabled. Accept future values. Value enum:
             * "flint", "store".
             */
            "saved_with"?: "flint" | "store" | (string & {});
            /**
             * The saved card lifecycle. Offer the card for a new payment only when status is
             * active and is_removing is false. Treat any other status as not chargeable, including
             * values added later. Value enum: "pending", "active", "expired", "archived",
             * "failed".
             */
            "status": "pending" | "active" | "expired" | "archived" | "failed" | (string & {});
            /** Kind of payment method. Value enum: "card". */
            "type": "card" | (string & {});
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * When Flint may charge the payment method. off_session payment methods can pay
             * subscriptions, automatic invoices, and other charges without the buyer, and can be a
             * customer's default. on_session payment methods were saved by the buyer in checkout
             * for faster checkout at this merchant; Flint charges them only in checkouts the buyer
             * completes and refuses them for any charge without the buyer and as a default.
             * Payment methods saved before usage existed are off_session. Value enum:
             * "on_session", "off_session".
             */
            "usage": "on_session" | "off_session" | (string & {});
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. card (Optional): {@link
         * CardDetailsPreviousAttributes} or null. Brand, expiry and last four digits. Present when
         * `type` is `card`. card.anyOf[1] (Value): {@link CardDetailsPreviousAttributes}.
         * card.anyOf[2] (Value): null. created_at (Optional): string or null. RFC3339 timestamp.
         * created_at.anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". created_at.anyOf[2] (Value): null. customer (Optional): {@link
         * ExpandedCustomerSummaryPreviousAttributes} or null. Present only when `expand` includes
         * `customer`; `null` when expanded and there is no related customer. customer.anyOf[1]
         * (Value): {@link ExpandedCustomerSummaryPreviousAttributes}. customer.anyOf[2] (Value):
         * null. customer_id (Optional): string or null. Customer this payment method belongs to.
         * customer_id.anyOf[1] (Value): string. Customer this payment method belongs to. Example:
         * "cus_01KEZF7C006X9JK6NZNA2SM9XD". customer_id.anyOf[2] (Value): null. fingerprint
         * (Optional): string or null. A value that is the same for every saved copy of one card
         * number at this merchant and environment, so you can spot duplicates. It doesn't identify
         * the card anywhere else. A card added through Apple Pay or Google Pay can have a
         * different fingerprint from the same card typed in. fingerprint.anyOf[1] (Value): string.
         * A value that is the same for every saved copy of one card number at this merchant and
         * environment, so you can spot duplicates. It doesn't identify the card anywhere else. A
         * card added through Apple Pay or Google Pay can have a different fingerprint from the
         * same card typed in. fingerprint.anyOf[2] (Value): null. is_default (Optional): boolean
         * or null. Whether this is the customer's default payment method, the one
         * Customer.default_payment_method_id names. Change the default with PATCH
         * /v1/customers/{customer_id}; that sends customer.updated, not a payment method event.
         * Existing subscriptions keep their payment_method_id. is_default.anyOf[1] (Value):
         * boolean. Whether this is the customer's default payment method, the one
         * Customer.default_payment_method_id names. Change the default with PATCH
         * /v1/customers/{customer_id}; that sends customer.updated, not a payment method event.
         * Existing subscriptions keep their payment_method_id. is_default.anyOf[2] (Value): null.
         * is_removing (Optional): boolean or null. Removal is in progress. Show this card as
         * Removing and offer retry with DELETE /v1/payment-methods/{payment_method_id}, or DELETE
         * /v1/me/payment-methods/{payment_method_id} for buyers. Do not offer it for a new
         * payment, subscription, or default. Flint retries abandoned removals automatically.
         * is_removing.anyOf[1] (Value): boolean. Removal is in progress. Show this card as
         * Removing and offer retry with DELETE /v1/payment-methods/{payment_method_id}, or DELETE
         * /v1/me/payment-methods/{payment_method_id} for buyers. Do not offer it for a new
         * payment, subscription, or default. Flint retries abandoned removals automatically.
         * is_removing.anyOf[2] (Value): null. merchant_id (Optional): string or null. ID of the
         * merchant this resource belongs to. merchant_id.anyOf[1] (Value): string. ID of the
         * merchant this resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
         * merchant_id.anyOf[2] (Value): null. origin (Optional): string or null. `imported` for a
         * saved card that Flint migrated from another processor account. Omitted for other cards.
         * Value enum: "imported". origin.anyOf[1] (Value): string. `imported` for a saved card
         * that Flint migrated from another processor account. Omitted for other cards. Value enum:
         * "imported". origin.anyOf[2] (Value): null. payment_method_id (Optional): string or null.
         * Unique identifier for this payment method, prefixed `pm_`. payment_method_id.anyOf[1]
         * (Value): string. Unique identifier for this payment method, prefixed `pm_`. Example:
         * "pm_01KEZF7C0034B248TXXE4NXYFZ". payment_method_id.anyOf[2] (Value): null. saved_with
         * (Optional): string or null. Where the buyer saved this payment method. Returned on
         * /v1/me/payment-methods responses when Flint wallet support is enabled. Accept future
         * values. Value enum: "flint", "store". saved_with.anyOf[1] (Value): string. Where the
         * buyer saved this payment method. Returned on /v1/me/payment-methods responses when Flint
         * wallet support is enabled. Accept future values. Value enum: "flint", "store".
         * saved_with.anyOf[2] (Value): null. status (Optional): string or null. The saved card
         * lifecycle. Offer the card for a new payment only when status is active and is_removing
         * is false. Treat any other status as not chargeable, including values added later. Value
         * enum: "pending", "active", "expired", "archived", "failed". status.anyOf[1] (Value):
         * string. The saved card lifecycle. Offer the card for a new payment only when status is
         * active and is_removing is false. Treat any other status as not chargeable, including
         * values added later. Value enum: "pending", "active", "expired", "archived", "failed".
         * status.anyOf[2] (Value): null. type (Optional): string or null. Kind of payment method.
         * Value enum: "card". type.anyOf[1] (Value): string. Kind of payment method. Value enum:
         * "card". type.anyOf[2] (Value): null. updated_at (Optional): string or null. RFC3339
         * timestamp. updated_at.anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". updated_at.anyOf[2] (Value): null. usage (Optional):
         * string or null. When Flint may charge the payment method. off_session payment methods
         * can pay subscriptions, automatic invoices, and other charges without the buyer, and can
         * be a customer's default. on_session payment methods were saved by the buyer in checkout
         * for faster checkout at this merchant; Flint charges them only in checkouts the buyer
         * completes and refuses them for any charge without the buyer and as a default. Payment
         * methods saved before usage existed are off_session. Value enum: "on_session",
         * "off_session". usage.anyOf[1] (Value): string. When Flint may charge the payment method.
         * off_session payment methods can pay subscriptions, automatic invoices, and other charges
         * without the buyer, and can be a customer's default. on_session payment methods were
         * saved by the buyer in checkout for faster checkout at this merchant; Flint charges them
         * only in checkouts the buyer completes and refuses them for any charge without the buyer
         * and as a default. Payment methods saved before usage existed are off_session. Value
         * enum: "on_session", "off_session". usage.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * Brand, expiry and last four digits. Present when `type` is `card`. anyOf[1] (Value):
             * {@link CardDetailsPreviousAttributes}. anyOf[2] (Value): null.
             */
            "card"?: ((CardDetailsPreviousAttributes) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * Present only when `expand` includes `customer`; `null` when expanded and there is no
             * related customer. anyOf[1] (Value): {@link
             * ExpandedCustomerSummaryPreviousAttributes}. anyOf[2] (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummaryPreviousAttributes) | (null));
            /**
             * Customer this payment method belongs to. anyOf[1] (Value): string. Customer this
             * payment method belongs to. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". anyOf[2]
             * (Value): null.
             */
            "customer_id"?: ((string) | (null));
            /**
             * A value that is the same for every saved copy of one card number at this merchant
             * and environment, so you can spot duplicates. It doesn't identify the card anywhere
             * else. A card added through Apple Pay or Google Pay can have a different fingerprint
             * from the same card typed in. anyOf[1] (Value): string. A value that is the same for
             * every saved copy of one card number at this merchant and environment, so you can
             * spot duplicates. It doesn't identify the card anywhere else. A card added through
             * Apple Pay or Google Pay can have a different fingerprint from the same card typed
             * in. anyOf[2] (Value): null.
             */
            "fingerprint"?: ((string) | (null));
            /**
             * Whether this is the customer's default payment method, the one
             * Customer.default_payment_method_id names. Change the default with PATCH
             * /v1/customers/{customer_id}; that sends customer.updated, not a payment method
             * event. Existing subscriptions keep their payment_method_id. anyOf[1] (Value):
             * boolean. Whether this is the customer's default payment method, the one
             * Customer.default_payment_method_id names. Change the default with PATCH
             * /v1/customers/{customer_id}; that sends customer.updated, not a payment method
             * event. Existing subscriptions keep their payment_method_id. anyOf[2] (Value): null.
             */
            "is_default"?: ((boolean) | (null));
            /**
             * Removal is in progress. Show this card as Removing and offer retry with DELETE
             * /v1/payment-methods/{payment_method_id}, or DELETE
             * /v1/me/payment-methods/{payment_method_id} for buyers. Do not offer it for a new
             * payment, subscription, or default. Flint retries abandoned removals automatically.
             * anyOf[1] (Value): boolean. Removal is in progress. Show this card as Removing and
             * offer retry with DELETE /v1/payment-methods/{payment_method_id}, or DELETE
             * /v1/me/payment-methods/{payment_method_id} for buyers. Do not offer it for a new
             * payment, subscription, or default. Flint retries abandoned removals automatically.
             * anyOf[2] (Value): null.
             */
            "is_removing"?: ((boolean) | (null));
            /**
             * ID of the merchant this resource belongs to. anyOf[1] (Value): string. ID of the
             * merchant this resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             * anyOf[2] (Value): null.
             */
            "merchant_id"?: ((string) | (null));
            /**
             * `imported` for a saved card that Flint migrated from another processor account.
             * Omitted for other cards. Value enum: "imported". anyOf[1] (Value): string.
             * `imported` for a saved card that Flint migrated from another processor account.
             * Omitted for other cards. Value enum: "imported". anyOf[2] (Value): null.
             */
            "origin"?: (("imported" | (string & {})) | (null));
            /**
             * Unique identifier for this payment method, prefixed `pm_`. anyOf[1] (Value): string.
             * Unique identifier for this payment method, prefixed `pm_`. Example:
             * "pm_01KEZF7C0034B248TXXE4NXYFZ". anyOf[2] (Value): null.
             */
            "payment_method_id"?: ((string) | (null));
            /**
             * Where the buyer saved this payment method. Returned on /v1/me/payment-methods
             * responses when Flint wallet support is enabled. Accept future values. Value enum:
             * "flint", "store". anyOf[1] (Value): string. Where the buyer saved this payment
             * method. Returned on /v1/me/payment-methods responses when Flint wallet support is
             * enabled. Accept future values. Value enum: "flint", "store". anyOf[2] (Value): null.
             */
            "saved_with"?: (("flint" | "store" | (string & {})) | (null));
            /**
             * The saved card lifecycle. Offer the card for a new payment only when status is
             * active and is_removing is false. Treat any other status as not chargeable, including
             * values added later. Value enum: "pending", "active", "expired", "archived",
             * "failed". anyOf[1] (Value): string. The saved card lifecycle. Offer the card for a
             * new payment only when status is active and is_removing is false. Treat any other
             * status as not chargeable, including values added later. Value enum: "pending",
             * "active", "expired", "archived", "failed". anyOf[2] (Value): null.
             */
            "status"?: (("pending" | "active" | "expired" | "archived" | "failed" | (string & {})) | (null));
            /**
             * Kind of payment method. Value enum: "card". anyOf[1] (Value): string. Kind of
             * payment method. Value enum: "card". anyOf[2] (Value): null.
             */
            "type"?: (("card" | (string & {})) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * When Flint may charge the payment method. off_session payment methods can pay
             * subscriptions, automatic invoices, and other charges without the buyer, and can be a
             * customer's default. on_session payment methods were saved by the buyer in checkout
             * for faster checkout at this merchant; Flint charges them only in checkouts the buyer
             * completes and refuses them for any charge without the buyer and as a default.
             * Payment methods saved before usage existed are off_session. Value enum:
             * "on_session", "off_session". anyOf[1] (Value): string. When Flint may charge the
             * payment method. off_session payment methods can pay subscriptions, automatic
             * invoices, and other charges without the buyer, and can be a customer's default.
             * on_session payment methods were saved by the buyer in checkout for faster checkout
             * at this merchant; Flint charges them only in checkouts the buyer completes and
             * refuses them for any charge without the buyer and as a default. Payment methods
             * saved before usage existed are off_session. Value enum: "on_session", "off_session".
             * anyOf[2] (Value): null.
             */
            "usage"?: (("on_session" | "off_session" | (string & {})) | (null));
        });
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "payment_method.updated". */
    "event_type"?: "payment_method.updated";
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
 * The `payment_method.updated` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type PaymentMethodUpdatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.card (Optional): {@link CardDetails}. Brand, expiry and last four
     * digits. Present when `type` is `card`. Card details on a payment method: brand, expiration
     * month and year, last four digits, and the wallet when one was used. object.created_at
     * (Required): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.customer (Optional): {@link ExpandedCustomerSummary} or null. Present only when
     * `expand` includes `customer`; `null` when expanded and there is no related customer.
     * object.customer.anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's summary
     * fields, returned in place of a customer ID when the customer is expanded.
     * object.customer.anyOf[2] (Value): null. object.customer_id (Required): string. Customer this
     * payment method belongs to. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". object.fingerprint
     * (Optional): string. A value that is the same for every saved copy of one card number at this
     * merchant and environment, so you can spot duplicates. It doesn't identify the card anywhere
     * else. A card added through Apple Pay or Google Pay can have a different fingerprint from the
     * same card typed in. object.is_default (Required): boolean. Whether this is the customer's
     * default payment method, the one Customer.default_payment_method_id names. Change the default
     * with PATCH /v1/customers/{customer_id}; that sends customer.updated, not a payment method
     * event. Existing subscriptions keep their payment_method_id. object.is_removing (Required):
     * boolean. Removal is in progress. Show this card as Removing and offer retry with DELETE
     * /v1/payment-methods/{payment_method_id}, or DELETE
     * /v1/me/payment-methods/{payment_method_id} for buyers. Do not offer it for a new payment,
     * subscription, or default. Flint retries abandoned removals automatically. object.merchant_id
     * (Required): string. ID of the merchant this resource belongs to. Example:
     * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.origin (Optional): string. `imported` for a saved
     * card that Flint migrated from another processor account. Omitted for other cards. Value
     * enum: "imported". object.payment_method_id (Required): string. Unique identifier for this
     * payment method, prefixed `pm_`. Example: "pm_01KEZF7C0034B248TXXE4NXYFZ". object.saved_with
     * (Optional): string. Where the buyer saved this payment method. Returned on
     * /v1/me/payment-methods responses when Flint wallet support is enabled. Accept future values.
     * Value enum: "flint", "store". object.status (Required): string. The saved card lifecycle.
     * Offer the card for a new payment only when status is active and is_removing is false. Treat
     * any other status as not chargeable, including values added later. Value enum: "pending",
     * "active", "expired", "archived", "failed". object.type (Required): string. Kind of payment
     * method. Value enum: "card". object.updated_at (Required): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.usage (Required): string. When Flint may
     * charge the payment method. off_session payment methods can pay subscriptions, automatic
     * invoices, and other charges without the buyer, and can be a customer's default. on_session
     * payment methods were saved by the buyer in checkout for faster checkout at this merchant;
     * Flint charges them only in checkouts the buyer completes and refuses them for any charge
     * without the buyer and as a default. Payment methods saved before usage existed are
     * off_session. Value enum: "on_session", "off_session". previous_attributes (Optional):
     * object. Previous values of changed top-level fields in data.object, at this delivery's API
     * version. Nested changes include the whole previous top-level value. A value is null when the
     * field was absent before the change. Omitted when Flint did not record the previous state,
     * including synthetic test events. previous_attributes.card (Optional): {@link
     * CardDetailsPreviousAttributes} or null. Brand, expiry and last four digits. Present when
     * `type` is `card`. previous_attributes.card.anyOf[1] (Value): {@link
     * CardDetailsPreviousAttributes}. previous_attributes.card.anyOf[2] (Value): null.
     * previous_attributes.created_at (Optional): string or null. RFC3339 timestamp.
     * previous_attributes.created_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.created_at.anyOf[2] (Value):
     * null. previous_attributes.customer (Optional): {@link
     * ExpandedCustomerSummaryPreviousAttributes} or null. Present only when `expand` includes
     * `customer`; `null` when expanded and there is no related customer.
     * previous_attributes.customer.anyOf[1] (Value): {@link
     * ExpandedCustomerSummaryPreviousAttributes}. previous_attributes.customer.anyOf[2] (Value):
     * null. previous_attributes.customer_id (Optional): string or null. Customer this payment
     * method belongs to. previous_attributes.customer_id.anyOf[1] (Value): string. Customer this
     * payment method belongs to. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     * previous_attributes.customer_id.anyOf[2] (Value): null. previous_attributes.fingerprint
     * (Optional): string or null. A value that is the same for every saved copy of one card number
     * at this merchant and environment, so you can spot duplicates. It doesn't identify the card
     * anywhere else. A card added through Apple Pay or Google Pay can have a different fingerprint
     * from the same card typed in. previous_attributes.fingerprint.anyOf[1] (Value): string. A
     * value that is the same for every saved copy of one card number at this merchant and
     * environment, so you can spot duplicates. It doesn't identify the card anywhere else. A card
     * added through Apple Pay or Google Pay can have a different fingerprint from the same card
     * typed in. previous_attributes.fingerprint.anyOf[2] (Value): null.
     * previous_attributes.is_default (Optional): boolean or null. Whether this is the customer's
     * default payment method, the one Customer.default_payment_method_id names. Change the default
     * with PATCH /v1/customers/{customer_id}; that sends customer.updated, not a payment method
     * event. Existing subscriptions keep their payment_method_id.
     * previous_attributes.is_default.anyOf[1] (Value): boolean. Whether this is the customer's
     * default payment method, the one Customer.default_payment_method_id names. Change the default
     * with PATCH /v1/customers/{customer_id}; that sends customer.updated, not a payment method
     * event. Existing subscriptions keep their payment_method_id.
     * previous_attributes.is_default.anyOf[2] (Value): null. previous_attributes.is_removing
     * (Optional): boolean or null. Removal is in progress. Show this card as Removing and offer
     * retry with DELETE /v1/payment-methods/{payment_method_id}, or DELETE
     * /v1/me/payment-methods/{payment_method_id} for buyers. Do not offer it for a new payment,
     * subscription, or default. Flint retries abandoned removals automatically.
     * previous_attributes.is_removing.anyOf[1] (Value): boolean. Removal is in progress. Show this
     * card as Removing and offer retry with DELETE /v1/payment-methods/{payment_method_id}, or
     * DELETE /v1/me/payment-methods/{payment_method_id} for buyers. Do not offer it for a new
     * payment, subscription, or default. Flint retries abandoned removals automatically.
     * previous_attributes.is_removing.anyOf[2] (Value): null. previous_attributes.merchant_id
     * (Optional): string or null. ID of the merchant this resource belongs to.
     * previous_attributes.merchant_id.anyOf[1] (Value): string. ID of the merchant this resource
     * belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     * previous_attributes.merchant_id.anyOf[2] (Value): null. previous_attributes.origin
     * (Optional): string or null. `imported` for a saved card that Flint migrated from another
     * processor account. Omitted for other cards. Value enum: "imported".
     * previous_attributes.origin.anyOf[1] (Value): string. `imported` for a saved card that Flint
     * migrated from another processor account. Omitted for other cards. Value enum: "imported".
     * previous_attributes.origin.anyOf[2] (Value): null. previous_attributes.payment_method_id
     * (Optional): string or null. Unique identifier for this payment method, prefixed `pm_`.
     * previous_attributes.payment_method_id.anyOf[1] (Value): string. Unique identifier for this
     * payment method, prefixed `pm_`. Example: "pm_01KEZF7C0034B248TXXE4NXYFZ".
     * previous_attributes.payment_method_id.anyOf[2] (Value): null. previous_attributes.saved_with
     * (Optional): string or null. Where the buyer saved this payment method. Returned on
     * /v1/me/payment-methods responses when Flint wallet support is enabled. Accept future values.
     * Value enum: "flint", "store". previous_attributes.saved_with.anyOf[1] (Value): string. Where
     * the buyer saved this payment method. Returned on /v1/me/payment-methods responses when Flint
     * wallet support is enabled. Accept future values. Value enum: "flint", "store".
     * previous_attributes.saved_with.anyOf[2] (Value): null. previous_attributes.status
     * (Optional): string or null. The saved card lifecycle. Offer the card for a new payment only
     * when status is active and is_removing is false. Treat any other status as not chargeable,
     * including values added later. Value enum: "pending", "active", "expired", "archived",
     * "failed". previous_attributes.status.anyOf[1] (Value): string. The saved card lifecycle.
     * Offer the card for a new payment only when status is active and is_removing is false. Treat
     * any other status as not chargeable, including values added later. Value enum: "pending",
     * "active", "expired", "archived", "failed". previous_attributes.status.anyOf[2] (Value):
     * null. previous_attributes.type (Optional): string or null. Kind of payment method. Value
     * enum: "card". previous_attributes.type.anyOf[1] (Value): string. Kind of payment method.
     * Value enum: "card". previous_attributes.type.anyOf[2] (Value): null.
     * previous_attributes.updated_at (Optional): string or null. RFC3339 timestamp.
     * previous_attributes.updated_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.updated_at.anyOf[2] (Value):
     * null. previous_attributes.usage (Optional): string or null. When Flint may charge the
     * payment method. off_session payment methods can pay subscriptions, automatic invoices, and
     * other charges without the buyer, and can be a customer's default. on_session payment methods
     * were saved by the buyer in checkout for faster checkout at this merchant; Flint charges them
     * only in checkouts the buyer completes and refuses them for any charge without the buyer and
     * as a default. Payment methods saved before usage existed are off_session. Value enum:
     * "on_session", "off_session". previous_attributes.usage.anyOf[1] (Value): string. When Flint
     * may charge the payment method. off_session payment methods can pay subscriptions, automatic
     * invoices, and other charges without the buyer, and can be a customer's default. on_session
     * payment methods were saved by the buyer in checkout for faster checkout at this merchant;
     * Flint charges them only in checkouts the buyer completes and refuses them for any charge
     * without the buyer and as a default. Payment methods saved before usage existed are
     * off_session. Value enum: "on_session", "off_session". previous_attributes.usage.anyOf[2]
     * (Value): null.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields. card
         * (Optional): {@link CardDetails}. Brand, expiry and last four digits. Present when `type`
         * is `card`. Card details on a payment method: brand, expiration month and year, last four
         * digits, and the wallet when one was used. created_at (Required): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". customer (Optional):
         * {@link ExpandedCustomerSummary} or null. Present only when `expand` includes `customer`;
         * `null` when expanded and there is no related customer. customer.anyOf[1] (Value): {@link
         * ExpandedCustomerSummary}. A customer's summary fields, returned in place of a customer
         * ID when the customer is expanded. customer.anyOf[2] (Value): null. customer_id
         * (Required): string. Customer this payment method belongs to. Example:
         * "cus_01KEZF7C006X9JK6NZNA2SM9XD". fingerprint (Optional): string. A value that is the
         * same for every saved copy of one card number at this merchant and environment, so you
         * can spot duplicates. It doesn't identify the card anywhere else. A card added through
         * Apple Pay or Google Pay can have a different fingerprint from the same card typed in.
         * is_default (Required): boolean. Whether this is the customer's default payment method,
         * the one Customer.default_payment_method_id names. Change the default with PATCH
         * /v1/customers/{customer_id}; that sends customer.updated, not a payment method event.
         * Existing subscriptions keep their payment_method_id. is_removing (Required): boolean.
         * Removal is in progress. Show this card as Removing and offer retry with DELETE
         * /v1/payment-methods/{payment_method_id}, or DELETE
         * /v1/me/payment-methods/{payment_method_id} for buyers. Do not offer it for a new
         * payment, subscription, or default. Flint retries abandoned removals automatically.
         * merchant_id (Required): string. ID of the merchant this resource belongs to. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". origin (Optional): string. `imported` for a saved card
         * that Flint migrated from another processor account. Omitted for other cards. Value enum:
         * "imported". payment_method_id (Required): string. Unique identifier for this payment
         * method, prefixed `pm_`. Example: "pm_01KEZF7C0034B248TXXE4NXYFZ". saved_with (Optional):
         * string. Where the buyer saved this payment method. Returned on /v1/me/payment-methods
         * responses when Flint wallet support is enabled. Accept future values. Value enum:
         * "flint", "store". status (Required): string. The saved card lifecycle. Offer the card
         * for a new payment only when status is active and is_removing is false. Treat any other
         * status as not chargeable, including values added later. Value enum: "pending", "active",
         * "expired", "archived", "failed". type (Required): string. Kind of payment method. Value
         * enum: "card". updated_at (Required): string. RFC3339 timestamp. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". usage (Required): string. When Flint may charge the
         * payment method. off_session payment methods can pay subscriptions, automatic invoices,
         * and other charges without the buyer, and can be a customer's default. on_session payment
         * methods were saved by the buyer in checkout for faster checkout at this merchant; Flint
         * charges them only in checkouts the buyer completes and refuses them for any charge
         * without the buyer and as a default. Payment methods saved before usage existed are
         * off_session. Value enum: "on_session", "off_session".
         */
        "object": {
            /**
             * Brand, expiry and last four digits. Present when `type` is `card`. Card details on a
             * payment method: brand, expiration month and year, last four digits, and the wallet
             * when one was used.
             */
            "card"?: CardDetails;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Present only when `expand` includes `customer`; `null` when expanded and there is no
             * related customer. anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's
             * summary fields, returned in place of a customer ID when the customer is expanded.
             * anyOf[2] (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummary) | (null));
            /**
             * Customer this payment method belongs to. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
             */
            "customer_id": string;
            /**
             * A value that is the same for every saved copy of one card number at this merchant
             * and environment, so you can spot duplicates. It doesn't identify the card anywhere
             * else. A card added through Apple Pay or Google Pay can have a different fingerprint
             * from the same card typed in.
             */
            "fingerprint"?: string;
            /**
             * Whether this is the customer's default payment method, the one
             * Customer.default_payment_method_id names. Change the default with PATCH
             * /v1/customers/{customer_id}; that sends customer.updated, not a payment method
             * event. Existing subscriptions keep their payment_method_id.
             */
            "is_default": boolean;
            /**
             * Removal is in progress. Show this card as Removing and offer retry with DELETE
             * /v1/payment-methods/{payment_method_id}, or DELETE
             * /v1/me/payment-methods/{payment_method_id} for buyers. Do not offer it for a new
             * payment, subscription, or default. Flint retries abandoned removals automatically.
             */
            "is_removing": boolean;
            /**
             * ID of the merchant this resource belongs to. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id": string;
            /**
             * `imported` for a saved card that Flint migrated from another processor account.
             * Omitted for other cards. Value enum: "imported".
             */
            "origin"?: "imported" | (string & {});
            /**
             * Unique identifier for this payment method, prefixed `pm_`. Example:
             * "pm_01KEZF7C0034B248TXXE4NXYFZ".
             */
            "payment_method_id": string;
            /**
             * Where the buyer saved this payment method. Returned on /v1/me/payment-methods
             * responses when Flint wallet support is enabled. Accept future values. Value enum:
             * "flint", "store".
             */
            "saved_with"?: "flint" | "store" | (string & {});
            /**
             * The saved card lifecycle. Offer the card for a new payment only when status is
             * active and is_removing is false. Treat any other status as not chargeable, including
             * values added later. Value enum: "pending", "active", "expired", "archived",
             * "failed".
             */
            "status": "pending" | "active" | "expired" | "archived" | "failed" | (string & {});
            /** Kind of payment method. Value enum: "card". */
            "type": "card" | (string & {});
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * When Flint may charge the payment method. off_session payment methods can pay
             * subscriptions, automatic invoices, and other charges without the buyer, and can be a
             * customer's default. on_session payment methods were saved by the buyer in checkout
             * for faster checkout at this merchant; Flint charges them only in checkouts the buyer
             * completes and refuses them for any charge without the buyer and as a default.
             * Payment methods saved before usage existed are off_session. Value enum:
             * "on_session", "off_session".
             */
            "usage": "on_session" | "off_session" | (string & {});
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. card (Optional): {@link
         * CardDetailsPreviousAttributes} or null. Brand, expiry and last four digits. Present when
         * `type` is `card`. card.anyOf[1] (Value): {@link CardDetailsPreviousAttributes}.
         * card.anyOf[2] (Value): null. created_at (Optional): string or null. RFC3339 timestamp.
         * created_at.anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". created_at.anyOf[2] (Value): null. customer (Optional): {@link
         * ExpandedCustomerSummaryPreviousAttributes} or null. Present only when `expand` includes
         * `customer`; `null` when expanded and there is no related customer. customer.anyOf[1]
         * (Value): {@link ExpandedCustomerSummaryPreviousAttributes}. customer.anyOf[2] (Value):
         * null. customer_id (Optional): string or null. Customer this payment method belongs to.
         * customer_id.anyOf[1] (Value): string. Customer this payment method belongs to. Example:
         * "cus_01KEZF7C006X9JK6NZNA2SM9XD". customer_id.anyOf[2] (Value): null. fingerprint
         * (Optional): string or null. A value that is the same for every saved copy of one card
         * number at this merchant and environment, so you can spot duplicates. It doesn't identify
         * the card anywhere else. A card added through Apple Pay or Google Pay can have a
         * different fingerprint from the same card typed in. fingerprint.anyOf[1] (Value): string.
         * A value that is the same for every saved copy of one card number at this merchant and
         * environment, so you can spot duplicates. It doesn't identify the card anywhere else. A
         * card added through Apple Pay or Google Pay can have a different fingerprint from the
         * same card typed in. fingerprint.anyOf[2] (Value): null. is_default (Optional): boolean
         * or null. Whether this is the customer's default payment method, the one
         * Customer.default_payment_method_id names. Change the default with PATCH
         * /v1/customers/{customer_id}; that sends customer.updated, not a payment method event.
         * Existing subscriptions keep their payment_method_id. is_default.anyOf[1] (Value):
         * boolean. Whether this is the customer's default payment method, the one
         * Customer.default_payment_method_id names. Change the default with PATCH
         * /v1/customers/{customer_id}; that sends customer.updated, not a payment method event.
         * Existing subscriptions keep their payment_method_id. is_default.anyOf[2] (Value): null.
         * is_removing (Optional): boolean or null. Removal is in progress. Show this card as
         * Removing and offer retry with DELETE /v1/payment-methods/{payment_method_id}, or DELETE
         * /v1/me/payment-methods/{payment_method_id} for buyers. Do not offer it for a new
         * payment, subscription, or default. Flint retries abandoned removals automatically.
         * is_removing.anyOf[1] (Value): boolean. Removal is in progress. Show this card as
         * Removing and offer retry with DELETE /v1/payment-methods/{payment_method_id}, or DELETE
         * /v1/me/payment-methods/{payment_method_id} for buyers. Do not offer it for a new
         * payment, subscription, or default. Flint retries abandoned removals automatically.
         * is_removing.anyOf[2] (Value): null. merchant_id (Optional): string or null. ID of the
         * merchant this resource belongs to. merchant_id.anyOf[1] (Value): string. ID of the
         * merchant this resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
         * merchant_id.anyOf[2] (Value): null. origin (Optional): string or null. `imported` for a
         * saved card that Flint migrated from another processor account. Omitted for other cards.
         * Value enum: "imported". origin.anyOf[1] (Value): string. `imported` for a saved card
         * that Flint migrated from another processor account. Omitted for other cards. Value enum:
         * "imported". origin.anyOf[2] (Value): null. payment_method_id (Optional): string or null.
         * Unique identifier for this payment method, prefixed `pm_`. payment_method_id.anyOf[1]
         * (Value): string. Unique identifier for this payment method, prefixed `pm_`. Example:
         * "pm_01KEZF7C0034B248TXXE4NXYFZ". payment_method_id.anyOf[2] (Value): null. saved_with
         * (Optional): string or null. Where the buyer saved this payment method. Returned on
         * /v1/me/payment-methods responses when Flint wallet support is enabled. Accept future
         * values. Value enum: "flint", "store". saved_with.anyOf[1] (Value): string. Where the
         * buyer saved this payment method. Returned on /v1/me/payment-methods responses when Flint
         * wallet support is enabled. Accept future values. Value enum: "flint", "store".
         * saved_with.anyOf[2] (Value): null. status (Optional): string or null. The saved card
         * lifecycle. Offer the card for a new payment only when status is active and is_removing
         * is false. Treat any other status as not chargeable, including values added later. Value
         * enum: "pending", "active", "expired", "archived", "failed". status.anyOf[1] (Value):
         * string. The saved card lifecycle. Offer the card for a new payment only when status is
         * active and is_removing is false. Treat any other status as not chargeable, including
         * values added later. Value enum: "pending", "active", "expired", "archived", "failed".
         * status.anyOf[2] (Value): null. type (Optional): string or null. Kind of payment method.
         * Value enum: "card". type.anyOf[1] (Value): string. Kind of payment method. Value enum:
         * "card". type.anyOf[2] (Value): null. updated_at (Optional): string or null. RFC3339
         * timestamp. updated_at.anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". updated_at.anyOf[2] (Value): null. usage (Optional):
         * string or null. When Flint may charge the payment method. off_session payment methods
         * can pay subscriptions, automatic invoices, and other charges without the buyer, and can
         * be a customer's default. on_session payment methods were saved by the buyer in checkout
         * for faster checkout at this merchant; Flint charges them only in checkouts the buyer
         * completes and refuses them for any charge without the buyer and as a default. Payment
         * methods saved before usage existed are off_session. Value enum: "on_session",
         * "off_session". usage.anyOf[1] (Value): string. When Flint may charge the payment method.
         * off_session payment methods can pay subscriptions, automatic invoices, and other charges
         * without the buyer, and can be a customer's default. on_session payment methods were
         * saved by the buyer in checkout for faster checkout at this merchant; Flint charges them
         * only in checkouts the buyer completes and refuses them for any charge without the buyer
         * and as a default. Payment methods saved before usage existed are off_session. Value
         * enum: "on_session", "off_session". usage.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * Brand, expiry and last four digits. Present when `type` is `card`. anyOf[1] (Value):
             * {@link CardDetailsPreviousAttributes}. anyOf[2] (Value): null.
             */
            "card"?: ((CardDetailsPreviousAttributes) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * Present only when `expand` includes `customer`; `null` when expanded and there is no
             * related customer. anyOf[1] (Value): {@link
             * ExpandedCustomerSummaryPreviousAttributes}. anyOf[2] (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummaryPreviousAttributes) | (null));
            /**
             * Customer this payment method belongs to. anyOf[1] (Value): string. Customer this
             * payment method belongs to. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". anyOf[2]
             * (Value): null.
             */
            "customer_id"?: ((string) | (null));
            /**
             * A value that is the same for every saved copy of one card number at this merchant
             * and environment, so you can spot duplicates. It doesn't identify the card anywhere
             * else. A card added through Apple Pay or Google Pay can have a different fingerprint
             * from the same card typed in. anyOf[1] (Value): string. A value that is the same for
             * every saved copy of one card number at this merchant and environment, so you can
             * spot duplicates. It doesn't identify the card anywhere else. A card added through
             * Apple Pay or Google Pay can have a different fingerprint from the same card typed
             * in. anyOf[2] (Value): null.
             */
            "fingerprint"?: ((string) | (null));
            /**
             * Whether this is the customer's default payment method, the one
             * Customer.default_payment_method_id names. Change the default with PATCH
             * /v1/customers/{customer_id}; that sends customer.updated, not a payment method
             * event. Existing subscriptions keep their payment_method_id. anyOf[1] (Value):
             * boolean. Whether this is the customer's default payment method, the one
             * Customer.default_payment_method_id names. Change the default with PATCH
             * /v1/customers/{customer_id}; that sends customer.updated, not a payment method
             * event. Existing subscriptions keep their payment_method_id. anyOf[2] (Value): null.
             */
            "is_default"?: ((boolean) | (null));
            /**
             * Removal is in progress. Show this card as Removing and offer retry with DELETE
             * /v1/payment-methods/{payment_method_id}, or DELETE
             * /v1/me/payment-methods/{payment_method_id} for buyers. Do not offer it for a new
             * payment, subscription, or default. Flint retries abandoned removals automatically.
             * anyOf[1] (Value): boolean. Removal is in progress. Show this card as Removing and
             * offer retry with DELETE /v1/payment-methods/{payment_method_id}, or DELETE
             * /v1/me/payment-methods/{payment_method_id} for buyers. Do not offer it for a new
             * payment, subscription, or default. Flint retries abandoned removals automatically.
             * anyOf[2] (Value): null.
             */
            "is_removing"?: ((boolean) | (null));
            /**
             * ID of the merchant this resource belongs to. anyOf[1] (Value): string. ID of the
             * merchant this resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             * anyOf[2] (Value): null.
             */
            "merchant_id"?: ((string) | (null));
            /**
             * `imported` for a saved card that Flint migrated from another processor account.
             * Omitted for other cards. Value enum: "imported". anyOf[1] (Value): string.
             * `imported` for a saved card that Flint migrated from another processor account.
             * Omitted for other cards. Value enum: "imported". anyOf[2] (Value): null.
             */
            "origin"?: (("imported" | (string & {})) | (null));
            /**
             * Unique identifier for this payment method, prefixed `pm_`. anyOf[1] (Value): string.
             * Unique identifier for this payment method, prefixed `pm_`. Example:
             * "pm_01KEZF7C0034B248TXXE4NXYFZ". anyOf[2] (Value): null.
             */
            "payment_method_id"?: ((string) | (null));
            /**
             * Where the buyer saved this payment method. Returned on /v1/me/payment-methods
             * responses when Flint wallet support is enabled. Accept future values. Value enum:
             * "flint", "store". anyOf[1] (Value): string. Where the buyer saved this payment
             * method. Returned on /v1/me/payment-methods responses when Flint wallet support is
             * enabled. Accept future values. Value enum: "flint", "store". anyOf[2] (Value): null.
             */
            "saved_with"?: (("flint" | "store" | (string & {})) | (null));
            /**
             * The saved card lifecycle. Offer the card for a new payment only when status is
             * active and is_removing is false. Treat any other status as not chargeable, including
             * values added later. Value enum: "pending", "active", "expired", "archived",
             * "failed". anyOf[1] (Value): string. The saved card lifecycle. Offer the card for a
             * new payment only when status is active and is_removing is false. Treat any other
             * status as not chargeable, including values added later. Value enum: "pending",
             * "active", "expired", "archived", "failed". anyOf[2] (Value): null.
             */
            "status"?: (("pending" | "active" | "expired" | "archived" | "failed" | (string & {})) | (null));
            /**
             * Kind of payment method. Value enum: "card". anyOf[1] (Value): string. Kind of
             * payment method. Value enum: "card". anyOf[2] (Value): null.
             */
            "type"?: (("card" | (string & {})) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * When Flint may charge the payment method. off_session payment methods can pay
             * subscriptions, automatic invoices, and other charges without the buyer, and can be a
             * customer's default. on_session payment methods were saved by the buyer in checkout
             * for faster checkout at this merchant; Flint charges them only in checkouts the buyer
             * completes and refuses them for any charge without the buyer and as a default.
             * Payment methods saved before usage existed are off_session. Value enum:
             * "on_session", "off_session". anyOf[1] (Value): string. When Flint may charge the
             * payment method. off_session payment methods can pay subscriptions, automatic
             * invoices, and other charges without the buyer, and can be a customer's default.
             * on_session payment methods were saved by the buyer in checkout for faster checkout
             * at this merchant; Flint charges them only in checkouts the buyer completes and
             * refuses them for any charge without the buyer and as a default. Payment methods
             * saved before usage existed are off_session. Value enum: "on_session", "off_session".
             * anyOf[2] (Value): null.
             */
            "usage"?: (("on_session" | "off_session" | (string & {})) | (null));
        });
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "payment_method.updated". */
    "event_type"?: "payment_method.updated";
});
/**
 * The saved payment method, with `client_setup` when the buyer must still complete processor setup
 * before the payment method can be used. A customer's saved payment details.
 */
export type PaymentMethodWithSetup = (Exclude<PaymentMethod & object, readonly unknown[]>)
    & ({
    /**
     * Present when the buyer must complete processor setup before using this payment method.
     * Stripe.js setup authority returned while saving a payment method. Follow its stripe_js_call
     * now. setup_collection is guidance instead and never carries a secret.
     */
    "client_setup"?: StripeClientSetup;
});
export type PaymentMethodsCreateParams = (InputValue<SavePaymentMethodRequestInput>)
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
export type PaymentMethodsDeleteParams = DisputesAcceptParams;
export type PaymentMethodsGetParams = {
    /**
     * Include related objects in the response. Supported expansions: customer. Expansion requires
     * payments.payment_methods.read plus customers.read. Limits: at most 10 unique expand paths
     * per request. Checkout session credentials cannot use expand on this route. [] enum:
     * "customer". Value enum: "customer". anyOf[1] (Value): Array of string. [] enum: "customer".
     * anyOf[1][] (Value): string. Value enum: "customer". anyOf[2] (Value): string. Value enum:
     * "customer".
     */
    "expand"?: InputValue<("customer") | readonly ("customer")[]>;
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
export type PaymentMethodsListParams = {
    /**
     * Optional Flint customer ID filter. pattern: ^cus_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     */
    "customer_id"?: InputValue<string>;
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
     * Filter by payment method type. Values are trimmed and deduplicated in first-seen order;
     * empty or unknown entries are rejected. Values within this filter are ORed; separate filters
     * are ANDed. [] enum: "card". Value enum: "card". anyOf[1] (Value): Array of string. minItems:
     * 1. [] enum: "card". anyOf[1][] (Value): string. Value enum: "card". anyOf[2] (Value):
     * string. Value enum: "card".
     */
    "type"?: InputValue<("card") | readonly ("card")[]>;
    /**
     * Filter by status. Omitted, the list leaves out archived rows; name archived to include them.
     * Values are trimmed and deduplicated in first-seen order; empty or unknown entries are
     * rejected. Values within this filter are ORed; separate filters are ANDed. [] enum: "active",
     * "pending", "expired", "archived", "failed". Value enum: "active", "pending", "expired",
     * "archived", "failed". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "active",
     * "pending", "expired", "archived", "failed". anyOf[1][] (Value): string. Value enum:
     * "active", "pending", "expired", "archived", "failed". anyOf[2] (Value): string. Value enum:
     * "active", "pending", "expired", "archived", "failed".
     */
    "status"?: InputValue<("active" | "pending" | "expired" | "archived" | "failed")
        | readonly ("active" | "pending" | "expired" | "archived" | "failed")[]>;
    /**
     * Filter by usage: off_session payment methods can be charged without the buyer; on_session
     * ones were saved by buyers for faster checkout. Values are trimmed and deduplicated in
     * first-seen order; empty or unknown entries are rejected. Values within this filter are ORed;
     * separate filters are ANDed. [] enum: "on_session", "off_session". Value enum: "on_session",
     * "off_session". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "on_session",
     * "off_session". anyOf[1][] (Value): string. Value enum: "on_session", "off_session". anyOf[2]
     * (Value): string. Value enum: "on_session", "off_session".
     */
    "usage"?: InputValue<("on_session" | "off_session") | readonly ("on_session" | "off_session")[]>;
    /** Inclusive lower bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
    /**
     * Include related objects in the response. Supported expansions: customer. Include the
     * requested related resources using scoped batch reads for this page. Each relationship
     * requires its existing target read scopes. Expansion changes the representation without
     * changing pagination tokens. Limits: at most 10 unique expand paths per request. Checkout
     * session credentials cannot use expand on this route. [] enum: "customer". Value enum:
     * "customer". anyOf[1] (Value): Array of string. [] enum: "customer". anyOf[1][] (Value):
     * string. Value enum: "customer". anyOf[2] (Value): string. Value enum: "customer".
     */
    "expand"?: InputValue<("customer") | readonly ("customer")[]>;
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
/** An applied component of the processing fee. Amounts sum exactly to processing_fee_money. */
export type PaymentProcessingFeeDetail = {
    /**
     * This component's amount, in the payment currency. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /**
     * Applied fee component: base percentage, international card, manual entry, currency
     * conversion, or fixed amount. Value enum: "base", "international_card", "manual_entry",
     * "currency_conversion", "fixed".
     */
    "type": "base" | "international_card" | "manual_entry" | "currency_conversion" | "fixed" | (string & {});
};
/**
 * The part of a refund returned through one payment, with the amount, tip, status, and any failure
 * reason.
 */
export type PaymentRefund = {
    /**
     * Amount refunded through this payment, including `refunded_tip_money`. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /**
     * Why a refund failed or a payment refund was canceled. Failed and canceled amounts become
     * refundable again, except a refund with reason payment_returned that failed with
     * payment_disputed: the buyer won a dispute on the charge, so nothing is left to refund. A
     * payment_returned refund that failed with refund_abandoned can't be retried through Flint
     * either: the money is in your balance. Flint hasn't repaid the buyer. Repay them another way
     * if you haven't already. Fix the cause, then create a new refund with a new idempotency key.
     * Unknown provider values are returned as refund_failed. Value enum:
     * "expired_or_canceled_card", "lost_or_stolen_card", "insufficient_funds",
     * "insufficient_available_balance", "declined", "merchant_request", "payment_disputed",
     * "refund_abandoned", "payment_refund_failed", "payment_refund_not_attempted",
     * "refund_failed".
     */
    "failure_reason"?: "expired_or_canceled_card"
        | "lost_or_stolen_card"
        | "insufficient_funds"
        | "insufficient_available_balance"
        | "declined"
        | "merchant_request"
        | "payment_disputed"
        | "refund_abandoned"
        | "payment_refund_failed"
        | "payment_refund_not_attempted"
        | "refund_failed"
        | (string & {});
    /**
     * Present only when `expand` includes `payment_refunds.payment_intent`; `null` when expanded
     * and there is no related payment intent. anyOf[1] (Value): {@link
     * ExpandedPaymentIntentSummary}. A payment intent's summary fields, including amount, status,
     * and capture method, returned when the payment intent is expanded. anyOf[2] (Value): null.
     */
    "payment_intent"?: ((ExpandedPaymentIntentSummary) | (null));
    /**
     * The payment this part of the refund returned money through. Example:
     * "pi_01KEZF7C00G8H9D509YEV22P7R".
     */
    "payment_intent_id"?: string;
    /**
     * The platform fee this payment refund returns to you, present when the payment carries a
     * collected platform fee: its share when the refund was created with refund_platform_fee true,
     * 0 when the partner app keeps the fee. Flint returns it once this payment refund succeeds. If
     * this payment refund then fails, Flint doesn't take the returned fee back. See [Platform
     * fees](/docs/guides/platform-fees). Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "refunded_platform_fee_money"?: MoneyValue;
    /**
     * Share of `amount_money` that refunds tips. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code.
     */
    "refunded_tip_money": MoneyValue;
    /**
     * Fixed seller allocations on the payment, each naming its payment split and reversal. Present
     * only when the payment has splits; an empty array means no seller share was allocated. Read
     * PaymentSplit.reversals for status, shortfall, and reinstated amounts. [] (Value): {@link
     * SplitReversalReference}. A fixed allocation referencing a read-only reversal nested in a
     * payment split. This reference has no independent lifecycle or write routes.
     */
    "split_reversals"?: Array<SplitReversalReference>;
    /**
     * Status of this payment refund or tender allocation. A succeeded refund can still fail after
     * a bank rejection. Parent status transitions send refund.succeeded,
     * refund.partially_succeeded, or refund.failed; other public changes send refund.updated.
     * Value enum: "pending", "requires_action", "succeeded", "failed", "canceled".
     */
    "status": "pending" | "requires_action" | "succeeded" | "failed" | "canceled" | (string & {});
    /**
     * When this payment refund's `status` first became `succeeded`, as Flint recorded the
     * processor's outcome. It keeps that time if the part fails and later succeeds again. The
     * refund's `tender_allocations` entry for the same payment has the same value. Present only
     * while `status` is `succeeded`. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "succeeded_at"?: string;
};
export type PaymentRefundPreviousAttributes = {
    /**
     * Amount refunded through this payment, including `refunded_tip_money`. anyOf[1] (Value):
     * {@link MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "amount_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * Why a refund failed or a payment refund was canceled. Failed and canceled amounts become
     * refundable again, except a refund with reason payment_returned that failed with
     * payment_disputed: the buyer won a dispute on the charge, so nothing is left to refund. A
     * payment_returned refund that failed with refund_abandoned can't be retried through Flint
     * either: the money is in your balance. Flint hasn't repaid the buyer. Repay them another way
     * if you haven't already. Fix the cause, then create a new refund with a new idempotency key.
     * Unknown provider values are returned as refund_failed. Value enum:
     * "expired_or_canceled_card", "lost_or_stolen_card", "insufficient_funds",
     * "insufficient_available_balance", "declined", "merchant_request", "payment_disputed",
     * "refund_abandoned", "payment_refund_failed", "payment_refund_not_attempted",
     * "refund_failed". anyOf[1] (Value): string. Why a refund failed or a payment refund was
     * canceled. Failed and canceled amounts become refundable again, except a refund with reason
     * payment_returned that failed with payment_disputed: the buyer won a dispute on the charge,
     * so nothing is left to refund. A payment_returned refund that failed with refund_abandoned
     * can't be retried through Flint either: the money is in your balance. Flint hasn't repaid the
     * buyer. Repay them another way if you haven't already. Fix the cause, then create a new
     * refund with a new idempotency key. Unknown provider values are returned as refund_failed.
     * Value enum: "expired_or_canceled_card", "lost_or_stolen_card", "insufficient_funds",
     * "insufficient_available_balance", "declined", "merchant_request", "payment_disputed",
     * "refund_abandoned", "payment_refund_failed", "payment_refund_not_attempted",
     * "refund_failed". anyOf[2] (Value): null.
     */
    "failure_reason"?: (("expired_or_canceled_card"
        | "lost_or_stolen_card"
        | "insufficient_funds"
        | "insufficient_available_balance"
        | "declined"
        | "merchant_request"
        | "payment_disputed"
        | "refund_abandoned"
        | "payment_refund_failed"
        | "payment_refund_not_attempted"
        | "refund_failed"
        | (string & {}))
        | (null));
    /**
     * Present only when `expand` includes `payment_refunds.payment_intent`; `null` when expanded
     * and there is no related payment intent. anyOf[1] (Value): {@link
     * ExpandedPaymentIntentSummaryPreviousAttributes}. anyOf[2] (Value): null.
     */
    "payment_intent"?: ((ExpandedPaymentIntentSummaryPreviousAttributes) | (null));
    /**
     * The payment this part of the refund returned money through. anyOf[1] (Value): string. The
     * payment this part of the refund returned money through. Example:
     * "pi_01KEZF7C00G8H9D509YEV22P7R". anyOf[2] (Value): null.
     */
    "payment_intent_id"?: ((string) | (null));
    /**
     * The platform fee this payment refund returns to you, present when the payment carries a
     * collected platform fee: its share when the refund was created with refund_platform_fee true,
     * 0 when the partner app keeps the fee. Flint returns it once this payment refund succeeds. If
     * this payment refund then fails, Flint doesn't take the returned fee back. See [Platform
     * fees](/docs/guides/platform-fees). anyOf[1] (Value): {@link MoneyValuePreviousAttributes}.
     * anyOf[2] (Value): null.
     */
    "refunded_platform_fee_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * Share of `amount_money` that refunds tips. anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "refunded_tip_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * Fixed seller allocations on the payment, each naming its payment split and reversal. Present
     * only when the payment has splits; an empty array means no seller share was allocated. Read
     * PaymentSplit.reversals for status, shortfall, and reinstated amounts. anyOf[1] (Value):
     * Array of {@link SplitReversalReferencePreviousAttributes}. Fixed seller allocations on the
     * payment, each naming its payment split and reversal. Present only when the payment has
     * splits; an empty array means no seller share was allocated. Read PaymentSplit.reversals for
     * status, shortfall, and reinstated amounts. anyOf[1][] (Value): {@link
     * SplitReversalReferencePreviousAttributes}. anyOf[2] (Value): null.
     */
    "split_reversals"?: ((Array<SplitReversalReferencePreviousAttributes>) | (null));
    /**
     * Status of this payment refund or tender allocation. A succeeded refund can still fail after
     * a bank rejection. Parent status transitions send refund.succeeded,
     * refund.partially_succeeded, or refund.failed; other public changes send refund.updated.
     * Value enum: "pending", "requires_action", "succeeded", "failed", "canceled". anyOf[1]
     * (Value): string. Status of this payment refund or tender allocation. A succeeded refund can
     * still fail after a bank rejection. Parent status transitions send refund.succeeded,
     * refund.partially_succeeded, or refund.failed; other public changes send refund.updated.
     * Value enum: "pending", "requires_action", "succeeded", "failed", "canceled". anyOf[2]
     * (Value): null.
     */
    "status"?: (("pending" | "requires_action" | "succeeded" | "failed" | "canceled" | (string & {})) | (null));
    /**
     * When this payment refund's `status` first became `succeeded`, as Flint recorded the
     * processor's outcome. It keeps that time if the part fails and later succeeds again. The
     * refund's `tender_allocations` entry for the same payment has the same value. Present only
     * while `status` is `succeeded`. anyOf[1] (Value): string. When this payment refund's `status`
     * first became `succeeded`, as Flint recorded the processor's outcome. It keeps that time if
     * the part fails and later succeeds again. The refund's `tender_allocations` entry for the
     * same payment has the same value. Present only while `status` is `succeeded`. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     */
    "succeeded_at"?: ((string) | (null));
};
/** A payment review requiring a merchant decision. */
export type PaymentReview = {
    /**
     * RFC3339 timestamp. `null` when the review isn't closed. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "closed_at": string | null;
    /**
     * The credential that closed this payment review. Null when Flint closed it. anyOf[1] (Value):
     * {@link ResourceReference}. A reference to another resource by `resource_type` and
     * `resource_id`. anyOf[2] (Value): null.
     */
    "closed_by": ((ResourceReference) | (null));
    /**
     * How the review was resolved. `null` when the review isn't closed. Value enum: "approved",
     * "declined", "refunded", "disputed", "payment_canceled", "expired", null.
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
     * Present only when `expand` includes `customer`; `null` when expanded and there is no related
     * customer. anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's summary fields,
     * returned in place of a customer ID when the customer is expanded. anyOf[2] (Value): null.
     */
    "customer"?: ((ExpandedCustomerSummary) | (null));
    /**
     * ID of the customer the payment was made for. `null` when the payment has no customer.
     * Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     */
    "customer_id": string | null;
    /**
     * The buyer's IP address recorded for the payment when it was confirmed. `null` when no buyer
     * IP address was supplied for the payment.
     */
    "ip_address": string | null;
    /**
     * The most recent resolution attempt that failed. Set when a decline's refund failed and the
     * review reopened. Null when no attempt has failed. anyOf[1] (Value): {@link
     * PaymentReviewResolutionFailure}. A failed attempt to resolve a review by refund, with the
     * `refund_id` and when it failed. anyOf[2] (Value): null.
     */
    "last_resolution_failure": ((PaymentReviewResolutionFailure) | (null));
    /**
     * ID of the risk rule with the review action that opened this review. Example:
     * "rule_01KEZF7C00FWGAQJXXA8CRA319".
     */
    "matched_risk_rule_id": string;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "opened_at": string;
    /** Why Flint opened the review. Value enum: "rule". */
    "opened_reason": "rule" | (string & {});
    /**
     * Present only when `expand` includes `order`; `null` when expanded and there is no related
     * order. anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields, including
     * status, payment and refund status, and pricing and settlement amounts, returned when the
     * order is expanded. anyOf[2] (Value): null.
     */
    "order"?: ((ExpandedOrderSummary) | (null));
    /**
     * ID of the order the payment belongs to. `null` when the payment doesn't belong to an order.
     * Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id": string | null;
    /**
     * How the reviewed payment was started. Value enum: "checkout", "payment_link", "invoice",
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
     * Present only when `expand` includes `payment_intent`; `null` when expanded and there is no
     * related payment intent. anyOf[1] (Value): {@link ExpandedPaymentIntentSummary}. A payment
     * intent's summary fields, including amount, status, and capture method, returned when the
     * payment intent is expanded. anyOf[2] (Value): null.
     */
    "payment_intent"?: ((ExpandedPaymentIntentSummary) | (null));
    /** ID of the payment intent under review. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". */
    "payment_intent_id": string;
    /**
     * Unique identifier for this payment review, prefixed `rev_`. Example:
     * "rev_01KEZF7C00BVBQ00XDFNKB1EF6".
     */
    "payment_review_id": string;
    /**
     * A snapshot of the payment as it was when the review opened. The payment details shown on a
     * review: amount, capture method, authorization expiry, card brand and last four digits, and
     * buyer email.
     */
    "payment_summary": PaymentReviewPaymentSummary;
    /**
     * The decision being carried out. `null` when status isn't resolving. Value enum: "approve",
     * "decline", "expire", null.
     */
    "pending_action": "approve" | "decline" | "expire" | null | (string & {}) | null;
    /**
     * The refund created when the payment was declined. It can be set while status is resolving,
     * before the refund finishes and the review closes. `null` when no refund exists for the
     * review, including after a decline that needed none or when the review is open. Example:
     * "ref_01KEZF7C003DTD59WKYHEXYQ1K".
     */
    "refund_id": string | null;
    /**
     * Refunded amount for this review. Null when no refund is recorded. anyOf[1] (Value): {@link
     * MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code. anyOf[2] (Value): null.
     */
    "refunded_money": ((MoneyValue) | (null));
    /**
     * RFC3339 timestamp. `null` when nobody has started approving or declining the review and
     * Flint hasn't started expiring it. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "resolution_started_at": string | null;
    /**
     * The credential that started resolving this payment review, retained after closure. Null when
     * no resolution has started or Flint started it. anyOf[1] (Value): {@link ResourceReference}.
     * A reference to another resource by `resource_type` and `resource_id`. anyOf[2] (Value):
     * null.
     */
    "resolution_started_by": ((ResourceReference) | (null));
    /**
     * The payment's risk level and score when the review opened. The risk assessment shown on a
     * review: a `level` and, when available, a numeric `score`.
     */
    "risk": PaymentReviewRisk;
    /** Where the review is in its lifecycle. Value enum: "open", "resolving", "closed". */
    "status": "open" | "resolving" | "closed" | (string & {});
    /**
     * Lifecycle actions accepted in the current stored review state. An action remains listed
     * while it is processing or can be repeated without changing the result. [] enum: "approve",
     * "decline". [] (Value): string. Value enum: "approve", "decline".
     */
    "supported_actions": Array<"approve" | "decline" | (string & {})>;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
};
export type PaymentReviewClosedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "closed_at": string | null;
            "closed_by": ((ResourceReference) | (null));
            "closed_reason": "approved"
                | "declined"
                | "refunded"
                | "disputed"
                | "payment_canceled"
                | "expired"
                | null
                | (string & {})
                | null;
            "customer"?: ((ExpandedCustomerSummary) | (null));
            "customer_id": string | null;
            "ip_address": string | null;
            "last_resolution_failure": ((PaymentReviewResolutionFailure) | (null));
            "matched_risk_rule_id": string;
            "opened_at": string;
            "opened_reason": "rule" | (string & {});
            "order"?: ((ExpandedOrderSummary) | (null));
            "order_id": string | null;
            "payment_flow": "checkout"
                | "payment_link"
                | "invoice"
                | "subscription_initial"
                | "subscription_renewal"
                | "virtual_terminal"
                | "api"
                | (string & {});
            "payment_intent"?: ((ExpandedPaymentIntentSummary) | (null));
            "payment_intent_id": string;
            "payment_review_id": string;
            "payment_summary": PaymentReviewPaymentSummary;
            "pending_action": "approve" | "decline" | "expire" | null | (string & {}) | null;
            "refund_id": string | null;
            "refunded_money": ((MoneyValue) | (null));
            "resolution_started_at": string | null;
            "resolution_started_by": ((ResourceReference) | (null));
            "risk": PaymentReviewRisk;
            "status": "open" | "resolving" | "closed" | (string & {});
            "supported_actions": Array<"approve" | "decline" | (string & {})>;
            "updated_at": string;
        };
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "closed_at"?: ((string) | (null));
            "closed_by"?: ((ResourceReferencePreviousAttributes) | (null));
            "closed_reason"?: (("approved"
                | "declined"
                | "refunded"
                | "disputed"
                | "payment_canceled"
                | "expired"
                | null
                | (string & {}))
                | (null));
            "customer"?: ((ExpandedCustomerSummaryPreviousAttributes) | (null));
            "customer_id"?: ((string) | (null));
            "ip_address"?: ((string) | (null));
            "last_resolution_failure"?: ((PaymentReviewResolutionFailurePreviousAttributes) | (null));
            "matched_risk_rule_id"?: ((string) | (null));
            "opened_at"?: ((string) | (null));
            "opened_reason"?: (("rule" | (string & {})) | (null));
            "order"?: ((ExpandedOrderSummaryPreviousAttributes) | (null));
            "order_id"?: ((string) | (null));
            "payment_flow"?: (("checkout"
                | "payment_link"
                | "invoice"
                | "subscription_initial"
                | "subscription_renewal"
                | "virtual_terminal"
                | "api"
                | (string & {}))
                | (null));
            "payment_intent"?: ((ExpandedPaymentIntentSummaryPreviousAttributes) | (null));
            "payment_intent_id"?: ((string) | (null));
            "payment_review_id"?: ((string) | (null));
            "payment_summary"?: ((PaymentReviewPaymentSummaryPreviousAttributes) | (null));
            "pending_action"?: (("approve" | "decline" | "expire" | null | (string & {})) | (null));
            "refund_id"?: ((string) | (null));
            "refunded_money"?: ((MoneyValuePreviousAttributes) | (null));
            "resolution_started_at"?: ((string) | (null));
            "resolution_started_by"?: ((ResourceReferencePreviousAttributes) | (null));
            "risk"?: ((PaymentReviewRiskPreviousAttributes) | (null));
            "status"?: (("open" | "resolving" | "closed" | (string & {})) | (null));
            "supported_actions"?: ((Array<"approve" | "decline" | (string & {})>) | (null));
            "updated_at"?: ((string) | (null));
        });
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "payment_review.closed";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "closed_at": string | null;
            "closed_by": ((ResourceReference) | (null));
            "closed_reason": "approved"
                | "declined"
                | "refunded"
                | "disputed"
                | "payment_canceled"
                | "expired"
                | null
                | (string & {})
                | null;
            "customer"?: ((ExpandedCustomerSummary) | (null));
            "customer_id": string | null;
            "ip_address": string | null;
            "last_resolution_failure": ((PaymentReviewResolutionFailure) | (null));
            "matched_risk_rule_id": string;
            "opened_at": string;
            "opened_reason": "rule" | (string & {});
            "order"?: ((ExpandedOrderSummary) | (null));
            "order_id": string | null;
            "payment_flow": "checkout"
                | "payment_link"
                | "invoice"
                | "subscription_initial"
                | "subscription_renewal"
                | "virtual_terminal"
                | "api"
                | (string & {});
            "payment_intent"?: ((ExpandedPaymentIntentSummary) | (null));
            "payment_intent_id": string;
            "payment_review_id": string;
            "payment_summary": PaymentReviewPaymentSummary;
            "pending_action": "approve" | "decline" | "expire" | null | (string & {}) | null;
            "refund_id": string | null;
            "refunded_money": ((MoneyValue) | (null));
            "resolution_started_at": string | null;
            "resolution_started_by": ((ResourceReference) | (null));
            "risk": PaymentReviewRisk;
            "status": "open" | "resolving" | "closed" | (string & {});
            "supported_actions": Array<"approve" | "decline" | (string & {})>;
            "updated_at": string;
        };
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "closed_at"?: ((string) | (null));
            "closed_by"?: ((ResourceReferencePreviousAttributes) | (null));
            "closed_reason"?: (("approved"
                | "declined"
                | "refunded"
                | "disputed"
                | "payment_canceled"
                | "expired"
                | null
                | (string & {}))
                | (null));
            "customer"?: ((ExpandedCustomerSummaryPreviousAttributes) | (null));
            "customer_id"?: ((string) | (null));
            "ip_address"?: ((string) | (null));
            "last_resolution_failure"?: ((PaymentReviewResolutionFailurePreviousAttributes) | (null));
            "matched_risk_rule_id"?: ((string) | (null));
            "opened_at"?: ((string) | (null));
            "opened_reason"?: (("rule" | (string & {})) | (null));
            "order"?: ((ExpandedOrderSummaryPreviousAttributes) | (null));
            "order_id"?: ((string) | (null));
            "payment_flow"?: (("checkout"
                | "payment_link"
                | "invoice"
                | "subscription_initial"
                | "subscription_renewal"
                | "virtual_terminal"
                | "api"
                | (string & {}))
                | (null));
            "payment_intent"?: ((ExpandedPaymentIntentSummaryPreviousAttributes) | (null));
            "payment_intent_id"?: ((string) | (null));
            "payment_review_id"?: ((string) | (null));
            "payment_summary"?: ((PaymentReviewPaymentSummaryPreviousAttributes) | (null));
            "pending_action"?: (("approve" | "decline" | "expire" | null | (string & {})) | (null));
            "refund_id"?: ((string) | (null));
            "refunded_money"?: ((MoneyValuePreviousAttributes) | (null));
            "resolution_started_at"?: ((string) | (null));
            "resolution_started_by"?: ((ResourceReferencePreviousAttributes) | (null));
            "risk"?: ((PaymentReviewRiskPreviousAttributes) | (null));
            "status"?: (("open" | "resolving" | "closed" | (string & {})) | (null));
            "supported_actions"?: ((Array<"approve" | "decline" | (string & {})>) | (null));
            "updated_at"?: ((string) | (null));
        });
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "payment_review.closed";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "payment_review.closed";
});
