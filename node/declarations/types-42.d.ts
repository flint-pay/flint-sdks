import type { MoneyValueInput, MoneyValue } from './types-35.js';
import type { OrderLineItemTaxInput, OrderLineItemTax } from './types-37.js';
import type {
    PaymentLinkLineItemPatchInputBundle,
    PaymentLinkLineItemPatchInputCustomFixed,
    PaymentLinkLineItemPatchInputCustomVariable,
    PaymentLinkLineItemPatchInputBundleInput,
    PaymentLinkLineItemPatchInputCustomFixedInput,
    PaymentLinkLineItemInputBundle,
    PaymentLinkLineItemInputCustomFixed,
    PaymentLinkLineItemInputCustomVariable,
    PaymentLinkLineItemInputVariant,
    PaymentLinkLineItemInputBundleInput,
    PaymentLinkLineItemInputCustomFixedInput,
    PaymentLinkLineItemInputCustomVariableInput,
    PaymentLinkLineItemInputVariantInput,
    PaymentLink
} from './types-41.js';
import type { ProductPriceRange } from './types-44.js';
import type { ResponseMeta } from './types-48.js';
import type { Image } from './types-25.js';
import type { SubscriptionIntervalOption } from './types-54.js';
import type { MerchantWebhookEnvelope } from './types-34.js';
import type { PartnerWebhookEnvelope } from './types-40.js';
import type { InputValue } from '../runtime.js';
import type { CreatePaymentLinkRequestInput, CreatePaymentMethodDomainRequestInput } from './types-9.js';
import type { ResolvePaymentLinkRequestInput, ResourceReference } from './types-47.js';
import type { UpdatePaymentLinkRequestInput, UpdatePaymentMethodDomainRequestInput } from './types-59.js';
import type { CardDetails } from './types-4.js';
import type { ExpandedCustomerSummary, ExpandedPaymentIntentSummary, ExpandedOrderSummary } from './types-21.js';
import type { StripeClientSetup } from './types-53.js';
import type { SavePaymentMethodRequestInput } from './types-52.js';
import type { PaymentReviewPaymentSummary, PaymentReviewResolutionFailure, PaymentReviewRisk } from './types-43.js';
/** The `custom_variable` variant of `PaymentLinkLineItemPatchInput`. */
export type PaymentLinkLineItemPatchInputCustomVariableInput = ({
    "allow_quantity_adjustment"?: boolean;
    "allow_unit_price_adjustment": boolean;
    /** minLength: 1. */
    "bundle_id"?: string;
    /**
     * Variant selected when the page opens and used at resolve when the buyer omits a selection.
     * Must be in variant_ids. Omit it to require a buyer selection. Send null to clear it.
     * minLength: 1. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "default_variant_id"?: string | null;
    /** minLength: 1. maxLength: 2048. */
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
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "max_unit_price_money"?: MoneyValueInput;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "min_quantity"?: number;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "min_unit_price_money"?: MoneyValueInput;
    /** minLength: 1. maxLength: 255. */
    "name": string;
    /** Stable ID of an existing line item. Omit it to create a new line item. minLength: 1. */
    "payment_link_line_item_id"?: string;
    /**
     * Whole-number default quantity; fractional quantities are not supported. Omission uses 1.
     * Must be at least 1 for standard links; event tiers also accept 0. Format: int32. Default: 1.
     */
    "quantity"?: number;
    /**
     *  [] (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "suggested_unit_price_money_options"?: Array<MoneyValueInput>;
    /** A line item's tax category and whether it is taxable. */
    "tax"?: OrderLineItemTaxInput;
    /** Value enum: "custom_variable". */
    "type": "custom_variable";
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "unit_price_money"?: MoneyValueInput;
    /** minLength: 1. */
    "variant_id"?: string;
    /**
     * Variant IDs buyers may choose from, in the order offered. Contains 1 to 100 unique, active,
     * sellable variants of one product in one currency. Available only on standard payment links.
     * Mutually exclusive with variant_id, bundle_id, and ad hoc line item fields. minItems: 1.
     * maxItems: 100. uniqueItems: true. [] (Value): string. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "variant_ids"?: Array<string>;
})
    & (({
    /** Value enum: true. */
    "allow_unit_price_adjustment": true;
    /** Value enum: "custom_variable". */
    "type": ("custom_variable") & ("custom_variable");
    /** minLength: 1. maxLength: 255. */
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
    "allow_quantity_adjustment"?: boolean;
    "allow_unit_price_adjustment"?: boolean;
    /** minLength: 1. */
    "bundle_id"?: string;
    /**
     * Variant selected when the page opens and used at resolve when the buyer omits a selection.
     * Must be in variant_ids. Omit it to require a buyer selection. Send null to clear it.
     * minLength: 1. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "default_variant_id"?: string | null;
    /** minLength: 1. maxLength: 2048. */
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
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "max_unit_price_money"?: MoneyValue;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "min_quantity"?: number;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "min_unit_price_money"?: MoneyValue;
    /** minLength: 1. maxLength: 255. */
    "name"?: string;
    /** Stable ID of an existing line item. Omit it to create a new line item. minLength: 1. */
    "payment_link_line_item_id"?: string;
    /**
     * Whole-number default quantity; fractional quantities are not supported. Omission uses 1.
     * Must be at least 1 for standard links; event tiers also accept 0. Format: int32. Default: 1.
     */
    "quantity"?: number;
    /**
     *  [] (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus an
     * ISO 4217 currency code.
     */
    "suggested_unit_price_money_options"?: Array<MoneyValue>;
    /** A line item's tax category and whether it is taxable. */
    "tax"?: OrderLineItemTax;
    /** Value enum: "variant". */
    "type": "variant" | (string & {});
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "unit_price_money"?: MoneyValue;
    /** minLength: 1. */
    "variant_id"?: string;
    /**
     * Variant IDs buyers may choose from, in the order offered. Contains 1 to 100 unique, active,
     * sellable variants of one product in one currency. Available only on standard payment links.
     * Mutually exclusive with variant_id, bundle_id, and ad hoc line item fields. minItems: 1.
     * maxItems: 100. uniqueItems: true. [] (Value): string. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "variant_ids"?: Array<string>;
})
    & (({
    /** Value enum: "variant". */
    "type": "variant" | (string & {});
})
    & (({
    /** minLength: 1. */
    "variant_id": string;
})
    | ({
    /**
     * Variant IDs buyers may choose from, in the order offered. Contains 1 to 100 unique, active,
     * sellable variants of one product in one currency. Available only on standard payment links.
     * Mutually exclusive with variant_id, bundle_id, and ad hoc line item fields. minItems: 1.
     * maxItems: 100. uniqueItems: true. [] (Value): string. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "variant_ids": Array<string>;
})
    | (Record<string, unknown>)));
/** The `variant` variant of `PaymentLinkLineItemPatchInput`. */
export type PaymentLinkLineItemPatchInputVariantInput = ({
    "allow_quantity_adjustment"?: boolean;
    "allow_unit_price_adjustment"?: boolean;
    /** minLength: 1. */
    "bundle_id"?: string;
    /**
     * Variant selected when the page opens and used at resolve when the buyer omits a selection.
     * Must be in variant_ids. Omit it to require a buyer selection. Send null to clear it.
     * minLength: 1. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "default_variant_id"?: string | null;
    /** minLength: 1. maxLength: 2048. */
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
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "max_unit_price_money"?: MoneyValueInput;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "min_quantity"?: number;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "min_unit_price_money"?: MoneyValueInput;
    /** minLength: 1. maxLength: 255. */
    "name"?: string;
    /** Stable ID of an existing line item. Omit it to create a new line item. minLength: 1. */
    "payment_link_line_item_id"?: string;
    /**
     * Whole-number default quantity; fractional quantities are not supported. Omission uses 1.
     * Must be at least 1 for standard links; event tiers also accept 0. Format: int32. Default: 1.
     */
    "quantity"?: number;
    /**
     *  [] (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "suggested_unit_price_money_options"?: Array<MoneyValueInput>;
    /** A line item's tax category and whether it is taxable. */
    "tax"?: OrderLineItemTaxInput;
    /** Value enum: "variant". */
    "type": "variant";
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "unit_price_money"?: MoneyValueInput;
    /** minLength: 1. */
    "variant_id"?: string;
    /**
     * Variant IDs buyers may choose from, in the order offered. Contains 1 to 100 unique, active,
     * sellable variants of one product in one currency. Available only on standard payment links.
     * Mutually exclusive with variant_id, bundle_id, and ad hoc line item fields. minItems: 1.
     * maxItems: 100. uniqueItems: true. [] (Value): string. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "variant_ids"?: Array<string>;
})
    & (({
    /** Value enum: "variant". */
    "type": ("variant") & ("variant");
})
    & (({
    /** minLength: 1. */
    "variant_id": string;
})
    | ({
    /**
     * Variant IDs buyers may choose from, in the order offered. Contains 1 to 100 unique, active,
     * sellable variants of one product in one currency. Available only on standard payment links.
     * Mutually exclusive with variant_id, bundle_id, and ad hoc line item fields. minItems: 1.
     * maxItems: 100. uniqueItems: true. [] (Value): string. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$.
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
 * A line item in a payment link update. Include its ID to change an existing line item, or omit
 * the ID to add a new one.
 */
export type PaymentLinkLineItemPatchRequest = ({
    "allow_quantity_adjustment"?: boolean;
    "allow_unit_price_adjustment"?: boolean;
    /** minLength: 1. */
    "bundle_id"?: string;
    /**
     * Variant selected when the page opens and used at resolve when the buyer omits a selection.
     * Must be in variant_ids. Omit it to require a buyer selection. Send null to clear it.
     * minLength: 1. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "default_variant_id"?: string | null;
    /** minLength: 1. maxLength: 2048. */
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
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "max_unit_price_money"?: MoneyValue;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "min_quantity"?: number;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "min_unit_price_money"?: MoneyValue;
    /** minLength: 1. maxLength: 255. */
    "name"?: string;
    /** Stable ID of an existing line item. Omit it to create a new line item. minLength: 1. */
    "payment_link_line_item_id"?: string;
    /**
     * Whole-number default quantity; fractional quantities are not supported. Omission uses 1.
     * Must be at least 1 for standard links; event tiers also accept 0. Format: int32. Default: 1.
     */
    "quantity"?: number;
    /**
     *  [] (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus an
     * ISO 4217 currency code.
     */
    "suggested_unit_price_money_options"?: Array<MoneyValue>;
    /** A line item's tax category and whether it is taxable. */
    "tax"?: OrderLineItemTax;
    /** Value enum: "variant", "bundle", "custom_fixed", "custom_variable". */
    "type": "variant" | "bundle" | "custom_fixed" | "custom_variable" | (string & {});
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "unit_price_money"?: MoneyValue;
    /** minLength: 1. */
    "variant_id"?: string;
    /**
     * Variant IDs buyers may choose from, in the order offered. Contains 1 to 100 unique, active,
     * sellable variants of one product in one currency. Available only on standard payment links.
     * Mutually exclusive with variant_id, bundle_id, and ad hoc line item fields. minItems: 1.
     * maxItems: 100. uniqueItems: true. [] (Value): string. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$.
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
    "allow_quantity_adjustment"?: boolean;
    "allow_unit_price_adjustment"?: boolean;
    /** minLength: 1. */
    "bundle_id"?: string;
    /**
     * Variant selected when the page opens and used at resolve when the buyer omits a selection.
     * Must be in variant_ids. Omit it to require a buyer selection. Send null to clear it.
     * minLength: 1. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "default_variant_id"?: string | null;
    /** minLength: 1. maxLength: 2048. */
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
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "max_unit_price_money"?: MoneyValueInput;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "min_quantity"?: number;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "min_unit_price_money"?: MoneyValueInput;
    /** minLength: 1. maxLength: 255. */
    "name"?: string;
    /** Stable ID of an existing line item. Omit it to create a new line item. minLength: 1. */
    "payment_link_line_item_id"?: string;
    /**
     * Whole-number default quantity; fractional quantities are not supported. Omission uses 1.
     * Must be at least 1 for standard links; event tiers also accept 0. Format: int32. Default: 1.
     */
    "quantity"?: number;
    /**
     *  [] (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "suggested_unit_price_money_options"?: Array<MoneyValueInput>;
    /** A line item's tax category and whether it is taxable. */
    "tax"?: OrderLineItemTaxInput;
    /** Value enum: "variant", "bundle", "custom_fixed", "custom_variable". */
    "type": "variant" | "bundle" | "custom_fixed" | "custom_variable";
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "unit_price_money"?: MoneyValueInput;
    /** minLength: 1. */
    "variant_id"?: string;
    /**
     * Variant IDs buyers may choose from, in the order offered. Contains 1 to 100 unique, active,
     * sellable variants of one product in one currency. Available only on standard payment links.
     * Mutually exclusive with variant_id, bundle_id, and ad hoc line item fields. minItems: 1.
     * maxItems: 100. uniqueItems: true. [] (Value): string. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$.
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
    "allow_quantity_adjustment"?: boolean;
    "allow_unit_price_adjustment"?: boolean;
    /** minLength: 1. */
    "bundle_id"?: string;
    /**
     * Variant selected when the page opens and used at resolve when the buyer omits a selection.
     * Must be in variant_ids. Omit it to require a buyer selection. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "default_variant_id"?: string;
    /** minLength: 1. maxLength: 2048. */
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
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "max_unit_price_money"?: MoneyValue;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "min_quantity"?: number;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "min_unit_price_money"?: MoneyValue;
    /** minLength: 1. maxLength: 255. */
    "name"?: string;
    /**
     * Whole-number default quantity; fractional quantities are not supported. Omission uses 1.
     * Must be at least 1 for standard links; event tiers also accept 0. Format: int32. Default: 1.
     */
    "quantity"?: number;
    /**
     *  [] (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus an
     * ISO 4217 currency code.
     */
    "suggested_unit_price_money_options"?: Array<MoneyValue>;
    /** A line item's tax category and whether it is taxable. */
    "tax"?: OrderLineItemTax;
    /** Value enum: "variant", "bundle", "custom_fixed", "custom_variable". */
    "type": "variant" | "bundle" | "custom_fixed" | "custom_variable" | (string & {});
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "unit_price_money"?: MoneyValue;
    /** minLength: 1. */
    "variant_id"?: string;
    /**
     * Variant IDs buyers may choose from, in the order offered. Contains 1 to 100 unique, active,
     * sellable variants of one product in one currency. Available only on standard payment links.
     * Mutually exclusive with variant_id, bundle_id, and ad hoc line item fields. minItems: 1.
     * maxItems: 100. uniqueItems: true. [] (Value): string. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$.
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
    "allow_quantity_adjustment"?: boolean;
    "allow_unit_price_adjustment"?: boolean;
    /** minLength: 1. */
    "bundle_id"?: string;
    /**
     * Variant selected when the page opens and used at resolve when the buyer omits a selection.
     * Must be in variant_ids. Omit it to require a buyer selection. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "default_variant_id"?: string;
    /** minLength: 1. maxLength: 2048. */
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
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "max_unit_price_money"?: MoneyValueInput;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "min_quantity"?: number;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "min_unit_price_money"?: MoneyValueInput;
    /** minLength: 1. maxLength: 255. */
    "name"?: string;
    /**
     * Whole-number default quantity; fractional quantities are not supported. Omission uses 1.
     * Must be at least 1 for standard links; event tiers also accept 0. Format: int32. Default: 1.
     */
    "quantity"?: number;
    /**
     *  [] (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "suggested_unit_price_money_options"?: Array<MoneyValueInput>;
    /** A line item's tax category and whether it is taxable. */
    "tax"?: OrderLineItemTaxInput;
    /** Value enum: "variant", "bundle", "custom_fixed", "custom_variable". */
    "type": "variant" | "bundle" | "custom_fixed" | "custom_variable";
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "unit_price_money"?: MoneyValueInput;
    /** minLength: 1. */
    "variant_id"?: string;
    /**
     * Variant IDs buyers may choose from, in the order offered. Contains 1 to 100 unique, active,
     * sellable variants of one product in one currency. Available only on standard payment links.
     * Mutually exclusive with variant_id, bundle_id, and ad hoc line item fields. minItems: 1.
     * maxItems: 100. uniqueItems: true. [] (Value): string. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "variant_ids"?: Array<string>;
})
    & ((Exclude<PaymentLinkLineItemInputVariantInput & object, readonly unknown[]>)
    | (Exclude<PaymentLinkLineItemInputBundleInput & object, readonly unknown[]>)
    | (Exclude<PaymentLinkLineItemInputCustomFixedInput & object, readonly unknown[]>)
    | (Exclude<PaymentLinkLineItemInputCustomVariableInput & object, readonly unknown[]>));
/** The `variant` variant of `PaymentLinkLineItem`. */
export type PaymentLinkLineItemVariant = ({
    "allow_quantity_adjustment"?: boolean;
    "allow_unit_price_adjustment"?: boolean;
    "bundle_id"?: string;
    /**
     * Variant selected when the page opens and used at resolve when the buyer omits a selection.
     * Must be in variant_ids. Omit it to require a buyer selection. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "default_variant_id"?: string;
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
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "max_unit_price_money"?: MoneyValue;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "min_quantity"?: number;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "min_unit_price_money"?: MoneyValue;
    "name"?: string;
    "payment_link_line_item_id": string;
    /**
     * Parent catalog context only. The product that the variants in variant_ids belong to. Present
     * only on buyer choice lines; refused on input.
     */
    "product_id"?: string;
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
     * Current catalog unit price of the referenced variant or bundle. This is the catalog value at
     * read time, not a stored snapshot: checkout resolves the price again when a buyer opens the
     * link, so the amount a buyer pays can differ. Absent on ad-hoc line items, variant_ids lines,
     * and when the catalog object no longer exists. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code.
     */
    "resolved_unit_price_money"?: MoneyValue;
    /**
     *  [] (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus an
     * ISO 4217 currency code.
     */
    "suggested_unit_price_money_options"?: Array<MoneyValue>;
    /** A line item's tax category and whether it is taxable. */
    "tax"?: OrderLineItemTax;
    /** Value enum: "variant". */
    "type": "variant" | (string & {});
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "unit_price_money"?: MoneyValue;
    "variant_id"?: string;
    /**
     * Variant IDs buyers may choose from, in the order offered. Contains 1 to 100 unique, active,
     * sellable variants of one product in one currency. Available only on standard payment links.
     * Mutually exclusive with variant_id, bundle_id, and ad hoc line item fields. minItems: 1.
     * maxItems: 100. uniqueItems: true. [] (Value): string. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "variant_ids"?: Array<string>;
})
    & (({
    /** Value enum: "variant". */
    "type": "variant" | (string & {});
})
    & (({
    "variant_id": string;
})
    | ({
    /**
     * Variant IDs buyers may choose from, in the order offered. Contains 1 to 100 unique, active,
     * sellable variants of one product in one currency. Available only on standard payment links.
     * Mutually exclusive with variant_id, bundle_id, and ad hoc line item fields. minItems: 1.
     * maxItems: 100. uniqueItems: true. [] (Value): string. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "variant_ids": Array<string>;
})
    | (Record<string, unknown>)));
/** A page of `PaymentLink` objects. */
export type PaymentLinkListResponse = {
    /**  [] (Value): {@link PaymentLink}. A reusable link that opens checkout. */
    "data": Array<PaymentLink>;
    /**
     * Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent
     * request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    "next_page_token"?: string;
    /**
     * maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
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
    /** minLength: 1. maxLength: 500. */
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
    /** ID of the product option. */
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
    /** ID of the product option value. */
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
     * characters. Send null to clear it. Format: uri. minLength: 1. maxLength: 2048.
     */
    "cancel_url"?: string | null;
    /**
     * Where Flint sends a buyer who opens the session after it expires. Without it, the buyer sees
     * Flint's expired-checkout page. Absolute HTTPS URL; test mode also accepts HTTP loopback
     * URLs. Up to 2,048 characters. Send null to clear it. Format: uri. minLength: 1. maxLength:
     * 2048.
     */
    "expired_url"?: string | null;
    /**
     * Where the buyer goes after paying. Flint adds checkout_session_id and order_id query
     * parameters, replacing any with those names. The redirect doesn't prove payment: confirm with
     * the order.paid webhook or by reading the session. Absolute HTTPS URL; test mode also accepts
     * HTTP loopback URLs. Up to 2,048 characters. Send null to clear it. Format: uri. minLength:
     * 1. maxLength: 2048.
     */
    "success_url"?: string | null;
};
/**
 * Changes to a payment link's hosted checkout destinations. Omit a URL to leave it unchanged, or
 * send null to clear it.
 */
export type PaymentLinkRedirectsPatchRequestInput = PaymentLinkRedirectsPatchRequest;
/** A response containing `PaymentLink` data. */
export type PaymentLinkResponse = {
    /** A reusable link that opens checkout. */
    "data": PaymentLink;
    /**
     * Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent
     * request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
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
    /** UTC time at which the summary was computed, at second precision. Format: date-time. */
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
     * as every 2 months, offered by a subscription plan.
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
     * Plan image shown to the buyer, when configured. An image with its `url`, `width`, and
     * `height`, and optional `alt` text.
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
    /** minLength: 1. maxLength: 50. */
    "accent_color"?: string;
    /** minLength: 1. maxLength: 50. */
    "primary_color"?: string;
    /** minLength: 1. maxLength: 255. */
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
        "object": PaymentLink;
    };
    "event_type"?: "payment_link.updated";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": PaymentLink;
    };
    "event_type"?: "payment_link.updated";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
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
    /**  object (Required): {@link PaymentLink}. A reusable link that opens checkout. */
    "data"?: {
        /** A reusable link that opens checkout. */
        "object": PaymentLink;
    };
    /** Value enum: "payment_link.updated". */
    "event_type"?: "payment_link.updated";
    /**
     *  environment_grant_id (Required): string. merchant_id (Required): string. mode (Required):
     * string. Value enum: "test", "live". partner_app_install_id (Required): string. sandbox_id
     * (Optional): string. type (Required): string. Value enum: "installed_merchants".
     */
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        /** Value enum: "test", "live". */
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        /** Value enum: "installed_merchants". */
        "type": "installed_merchants" | (string & {});
    });
});
/**
 * The `payment_link.updated` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type PaymentLinkUpdatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link PaymentLink}. A reusable link that opens checkout. */
    "data"?: {
        /** A reusable link that opens checkout. */
        "object": PaymentLink;
    };
    /** Value enum: "payment_link.updated". */
    "event_type"?: "payment_link.updated";
});
export type PaymentLinksCreateParams = (InputValue<CreatePaymentLinkRequestInput>);
export type PaymentLinksGetParams = {
    /**
     * Supported expansions: sales_summary, subscription_plan. sales_summary requires
     * checkouts.payment_links.read and is also available to dashboard sessions. subscription_plan
     * additionally requires commerce.subscription_plans.read. sales_summary is supported only on
     * this get route. Limits: at most 10 unique expand paths per request. Repeat expand, for
     * example expand=sales_summary&expand=subscription_plan, or pass one comma-separated value. []
     * enum: "sales_summary", "subscription_plan". Value enum: "sales_summary",
     * "subscription_plan". anyOf[1] (Value): Array of string. [] enum: "sales_summary",
     * "subscription_plan". anyOf[1][] (Value): string. Value enum: "sales_summary",
     * "subscription_plan". anyOf[2] (Value): string. Value enum: "sales_summary",
     * "subscription_plan".
     */
    "expand"?: InputValue<("sales_summary" | "subscription_plan") | readonly ("sales_summary" | "subscription_plan")[]>;
};
export type PaymentLinksGetPublicParams = {};
export type PaymentLinksListParams = {
    /**
     * Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: 1. maximum:
     * 100. Default: 20.
     */
    "page_size"?: InputValue<number>;
    /**
     * Opaque next_page_token from the previous response. Omit on the first request. You may change
     * `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request
     * context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns
     * a validation error.
     */
    "page_token"?: InputValue<string>;
    /**
     * Filter by payment link status. Accepts repeated keys, comma-separated values, or mixtures.
     * Values are trimmed and deduplicated in first-seen order; empty or unknown entries are
     * rejected. Values within this filter are ORed; separate filters are ANDed. [] enum: "active",
     * "inactive". Value enum: "active", "inactive". anyOf[1] (Value): Array of string. minItems:
     * 1. [] enum: "active", "inactive". anyOf[1][] (Value): string. Value enum: "active",
     * "inactive". anyOf[2] (Value): string. Value enum: "active", "inactive".
     */
    "status"?: InputValue<("active" | "inactive") | readonly ("active" | "inactive")[]>;
    /**
     * Exact-match filter on the caller-owned external reference ID. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: InputValue<string>;
    /**
     * Search across payment link ID, external reference ID, name, and description. Text fields
     * match any part of the value, and %, _ and \ are ordinary characters, not wildcards. IDs
     * match from the start and need the type prefix, such as pl_01.
     */
    "query"?: InputValue<string>;
    /**
     * Filter by payment link type. Accepts repeated keys, comma-separated values, or mixtures.
     * Values are trimmed and deduplicated in first-seen order; empty or unknown entries are
     * rejected. Values within this filter are ORed; separate filters are ANDed. [] enum:
     * "standard", "donation", "event". Value enum: "standard", "donation", "event". anyOf[1]
     * (Value): Array of string. minItems: 1. [] enum: "standard", "donation", "event". anyOf[1][]
     * (Value): string. Value enum: "standard", "donation", "event". anyOf[2] (Value): string.
     * Value enum: "standard", "donation", "event".
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
     * Supported expansions: sales_summary, subscription_plan. Include the requested related
     * resources using scoped batch reads for this page. Each relationship requires its existing
     * target read scopes. Expansion changes the representation without changing pagination tokens.
     * Limits: at most 10 unique expand paths per request. Repeat expand, for example
     * expand=sales_summary&expand=subscription_plan, or pass one comma-separated value. [] enum:
     * "sales_summary", "subscription_plan". Value enum: "sales_summary", "subscription_plan".
     * anyOf[1] (Value): Array of string. [] enum: "sales_summary", "subscription_plan". anyOf[1][]
     * (Value): string. Value enum: "sales_summary", "subscription_plan". anyOf[2] (Value): string.
     * Value enum: "sales_summary", "subscription_plan".
     */
    "expand"?: InputValue<("sales_summary" | "subscription_plan") | readonly ("sales_summary" | "subscription_plan")[]>;
};
export type PaymentLinksResolveParams = (InputValue<ResolvePaymentLinkRequestInput>);
export type PaymentLinksUpdateParams = (InputValue<UpdatePaymentLinkRequestInput>);
/** A customer's saved payment details. */
export type PaymentMethod = {
    /**
     * Card details on a payment method: brand, expiration month and year, last four digits, and
     * the wallet when one was used.
     */
    "card"?: CardDetails;
    /** RFC3339 timestamp. Format: date-time. */
    "created_at"?: string;
    /**
     * Present only when `expand` includes `customer`; `null` when expanded and there is no related
     * customer. anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's summary fields,
     * returned in place of a customer ID when the customer is expanded. anyOf[2] (Value): null.
     */
    "customer"?: ((ExpandedCustomerSummary) | (null));
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
    "merchant_id"?: string;
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
    /** Value enum: "card". */
    "type": "card" | (string & {});
    /** RFC3339 timestamp. Format: date-time. */
    "updated_at"?: string;
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
        "object": PaymentMethod;
    };
    "event_type"?: "payment_method.activated";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": PaymentMethod;
    };
    "event_type"?: "payment_method.activated";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
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
    /**  object (Required): {@link PaymentMethod}. A customer's saved payment details. */
    "data"?: {
        /** A customer's saved payment details. */
        "object": PaymentMethod;
    };
    /** Value enum: "payment_method.activated". */
    "event_type"?: "payment_method.activated";
    /**
     *  environment_grant_id (Required): string. merchant_id (Required): string. mode (Required):
     * string. Value enum: "test", "live". partner_app_install_id (Required): string. sandbox_id
     * (Optional): string. type (Required): string. Value enum: "installed_merchants".
     */
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        /** Value enum: "test", "live". */
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        /** Value enum: "installed_merchants". */
        "type": "installed_merchants" | (string & {});
    });
});
/**
 * The `payment_method.activated` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type PaymentMethodActivatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link PaymentMethod}. A customer's saved payment details. */
    "data"?: {
        /** A customer's saved payment details. */
        "object": PaymentMethod;
    };
    /** Value enum: "payment_method.activated". */
    "event_type"?: "payment_method.activated";
});
export type PaymentMethodArchivedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": PaymentMethod;
    };
    "event_type"?: "payment_method.archived";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": PaymentMethod;
    };
    "event_type"?: "payment_method.archived";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
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
    /**  object (Required): {@link PaymentMethod}. A customer's saved payment details. */
    "data"?: {
        /** A customer's saved payment details. */
        "object": PaymentMethod;
    };
    /** Value enum: "payment_method.archived". */
    "event_type"?: "payment_method.archived";
    /**
     *  environment_grant_id (Required): string. merchant_id (Required): string. mode (Required):
     * string. Value enum: "test", "live". partner_app_install_id (Required): string. sandbox_id
     * (Optional): string. type (Required): string. Value enum: "installed_merchants".
     */
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        /** Value enum: "test", "live". */
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        /** Value enum: "installed_merchants". */
        "type": "installed_merchants" | (string & {});
    });
});
/**
 * The `payment_method.archived` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type PaymentMethodArchivedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link PaymentMethod}. A customer's saved payment details. */
    "data"?: {
        /** A customer's saved payment details. */
        "object": PaymentMethod;
    };
    /** Value enum: "payment_method.archived". */
    "event_type"?: "payment_method.archived";
});
/** A domain registered for browser payment methods. */
export type PaymentMethodDomain = {
    /** RFC3339 timestamp. Format: date-time. */
    "created_at": string;
    /**
     * The registered hostname, trimmed and lowercased. ASCII only, at least two labels, each up to
     * 63 characters, 253 characters in total; no scheme, path, port, IP address, or wildcard.
     */
    "domain_name": string;
    /** Flint payment method domain ID, starting with pmdom_. */
    "payment_method_domain_id": string;
    /**
     * Availability and validation status of each payment option on this domain. [] (Value): {@link
     * PaymentMethodDomainPaymentOptionStatus}. Whether a wallet payment option, Apple Pay or
     * Google Pay, is active, inactive, or unavailable for a payment method domain.
     */
    "payment_option_statuses": Array<PaymentMethodDomainPaymentOptionStatus>;
    /** Value enum: "active", "inactive". */
    "status": "active" | "inactive" | (string & {});
    /** RFC3339 timestamp. Format: date-time. */
    "updated_at": string;
    /** Value enum: "active", "action_required", "unavailable". */
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
     *  [] (Value): {@link PaymentMethodDomain}. A domain registered for browser payment methods.
     */
    "data": Array<PaymentMethodDomain>;
    /**
     * Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent
     * request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    "next_page_token"?: string;
    /**
     * maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/**
 * Whether a wallet payment option, Apple Pay or Google Pay, is active, inactive, or unavailable
 * for a payment method domain.
 */
export type PaymentMethodDomainPaymentOptionStatus = {
    /** Value enum: "apple_pay", "google_pay". */
    "payment_option": "apple_pay" | "google_pay" | (string & {});
    /** Value enum: "active", "inactive", "unavailable". */
    "status": "active" | "inactive" | "unavailable" | (string & {});
};
/** A response containing `PaymentMethodDomain` data. */
export type PaymentMethodDomainResponse = {
    /** A domain registered for browser payment methods. */
    "data": PaymentMethodDomain;
    /**
     * Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent
     * request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
export type PaymentMethodDomainsCreateParams = (InputValue<CreatePaymentMethodDomainRequestInput>);
export type PaymentMethodDomainsGetParams = {};
export type PaymentMethodDomainsListParams = {
    /**
     * Filter by status. Accepts repeated keys, comma-separated values, or mixtures. Values are
     * trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values
     * within this filter are ORed; separate filters are ANDed. [] enum: "active", "inactive".
     * Value enum: "active", "inactive". anyOf[1] (Value): Array of string. minItems: 1. [] enum:
     * "active", "inactive". anyOf[1][] (Value): string. Value enum: "active", "inactive". anyOf[2]
     * (Value): string. Value enum: "active", "inactive".
     */
    "status"?: InputValue<("active" | "inactive") | readonly ("active" | "inactive")[]>;
    /**
     * Exact hostname filter after trimming whitespace and converting to lowercase. Accepts an
     * ASCII fully-qualified hostname without a URL, port, wildcard, or IP address. Matches the
     * entire stored domain name. minLength: 1. maxLength: 253.
     */
    "domain_name"?: InputValue<string>;
    /**
     * Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: 1. maximum:
     * 100. Default: 20.
     */
    "page_size"?: InputValue<number>;
    /**
     * Opaque next_page_token from the previous response. Omit on the first request. You may change
     * `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request
     * context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns
     * a validation error.
     */
    "page_token"?: InputValue<string>;
};
export type PaymentMethodDomainsUpdateParams = (InputValue<UpdatePaymentMethodDomainRequestInput>);
export type PaymentMethodFailedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": PaymentMethod;
    };
    "event_type"?: "payment_method.failed";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": PaymentMethod;
    };
    "event_type"?: "payment_method.failed";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
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
    /**  object (Required): {@link PaymentMethod}. A customer's saved payment details. */
    "data"?: {
        /** A customer's saved payment details. */
        "object": PaymentMethod;
    };
    /** Value enum: "payment_method.failed". */
    "event_type"?: "payment_method.failed";
    /**
     *  environment_grant_id (Required): string. merchant_id (Required): string. mode (Required):
     * string. Value enum: "test", "live". partner_app_install_id (Required): string. sandbox_id
     * (Optional): string. type (Required): string. Value enum: "installed_merchants".
     */
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        /** Value enum: "test", "live". */
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        /** Value enum: "installed_merchants". */
        "type": "installed_merchants" | (string & {});
    });
});
/**
 * The `payment_method.failed` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type PaymentMethodFailedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link PaymentMethod}. A customer's saved payment details. */
    "data"?: {
        /** A customer's saved payment details. */
        "object": PaymentMethod;
    };
    /** Value enum: "payment_method.failed". */
    "event_type"?: "payment_method.failed";
});
/** A page of `PaymentMethod` objects. */
export type PaymentMethodListResponse = {
    /**  [] (Value): {@link PaymentMethod}. A customer's saved payment details. */
    "data": Array<PaymentMethod>;
    /**
     * Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent
     * request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    "next_page_token"?: string;
    /**
     * maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/** A response containing `PaymentMethod` data. */
export type PaymentMethodResponse = {
    /** A customer's saved payment details. */
    "data": PaymentMethod;
    /**
     * Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent
     * request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
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
export type PaymentMethodsCreateParams = (InputValue<SavePaymentMethodRequestInput>);
export type PaymentMethodsDeleteParams = {};
export type PaymentMethodsGetParams = {
    /**
     * Supported expansions: customer. Expansion requires payments.payment_methods.read plus
     * customers.read. Limits: at most 10 unique expand paths per request. Pass expand=customer. []
     * enum: "customer". Value enum: "customer". anyOf[1] (Value): Array of string. [] enum:
     * "customer". anyOf[1][] (Value): string. Value enum: "customer". anyOf[2] (Value): string.
     * Value enum: "customer".
     */
    "expand"?: InputValue<("customer") | readonly ("customer")[]>;
};
export type PaymentMethodsListParams = {
    /** Optional Flint customer ID filter. Example: "cus_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "customer_id"?: InputValue<string>;
    /**
     * Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: 1. maximum:
     * 100. Default: 20.
     */
    "page_size"?: InputValue<number>;
    /**
     * Opaque next_page_token from the previous response. Omit on the first request. You may change
     * `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request
     * context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns
     * a validation error.
     */
    "page_token"?: InputValue<string>;
    /**
     * Filter by payment method type. Accepts repeated keys, comma-separated values, or mixtures.
     * Values are trimmed and deduplicated in first-seen order; empty or unknown entries are
     * rejected. Values within this filter are ORed; separate filters are ANDed. [] enum: "card".
     * Value enum: "card". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "card".
     * anyOf[1][] (Value): string. Value enum: "card". anyOf[2] (Value): string. Value enum:
     * "card".
     */
    "type"?: InputValue<("card") | readonly ("card")[]>;
    /**
     * Filter by status. Repeat the parameter or send comma-separated values to match any of
     * several. Omitted, the list leaves out archived rows; name archived to include them. Accepts
     * repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in
     * first-seen order; empty or unknown entries are rejected. Values within this filter are ORed;
     * separate filters are ANDed. [] enum: "active", "pending", "expired", "archived", "failed".
     * Value enum: "active", "pending", "expired", "archived", "failed". anyOf[1] (Value): Array of
     * string. minItems: 1. [] enum: "active", "pending", "expired", "archived", "failed".
     * anyOf[1][] (Value): string. Value enum: "active", "pending", "expired", "archived",
     * "failed". anyOf[2] (Value): string. Value enum: "active", "pending", "expired", "archived",
     * "failed".
     */
    "status"?: InputValue<("active" | "pending" | "expired" | "archived" | "failed")
        | readonly ("active" | "pending" | "expired" | "archived" | "failed")[]>;
    /**
     * Filter by usage: off_session payment methods can be charged without the buyer; on_session
     * ones were saved by buyers for faster checkout. Accepts repeated keys, comma-separated
     * values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or
     * unknown entries are rejected. Values within this filter are ORed; separate filters are
     * ANDed. [] enum: "on_session", "off_session". Value enum: "on_session", "off_session".
     * anyOf[1] (Value): Array of string. minItems: 1. [] enum: "on_session", "off_session".
     * anyOf[1][] (Value): string. Value enum: "on_session", "off_session". anyOf[2] (Value):
     * string. Value enum: "on_session", "off_session".
     */
    "usage"?: InputValue<("on_session" | "off_session") | readonly ("on_session" | "off_session")[]>;
    /** Inclusive lower bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
    /**
     * Supported expansions: customer. Include the requested related resources using scoped batch
     * reads for this page. Each relationship requires its existing target read scopes. Expansion
     * changes the representation without changing pagination tokens. Limits: at most 10 unique
     * expand paths per request. Pass expand=customer. [] enum: "customer". Value enum: "customer".
     * anyOf[1] (Value): Array of string. [] enum: "customer". anyOf[1][] (Value): string. Value
     * enum: "customer". anyOf[2] (Value): string. Value enum: "customer".
     */
    "expand"?: InputValue<("customer") | readonly ("customer")[]>;
};
/**
 * The part of a refund returned through one payment, with the amount, tip, status, and any failure
 * reason.
 */
export type PaymentRefund = {
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "amount_money": MoneyValue;
    /**
     * Why a refund failed or a payment refund was canceled. Failed and canceled amounts become
     * refundable again. Fix the cause, then create a new refund with a new idempotency key.
     * Unknown provider values are returned as refund_failed. Value enum:
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
     * Present only when `expand` includes `payment_refunds.payment_intent`; `null` when expanded
     * and there is no related payment intent. anyOf[1] (Value): {@link
     * ExpandedPaymentIntentSummary}. A payment intent's summary fields, including amount, status,
     * and capture method, returned when the payment intent is expanded. anyOf[2] (Value): null.
     */
    "payment_intent"?: ((ExpandedPaymentIntentSummary) | (null));
    "payment_intent_id"?: string;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "refunded_tip_money": MoneyValue;
    /**
     * Status of this payment refund or tender allocation. A succeeded refund can still fail after
     * a bank rejection. Parent status transitions send refund.succeeded,
     * refund.partially_succeeded, or refund.failed; other public changes send refund.updated.
     * Value enum: "pending", "requires_action", "succeeded", "failed", "canceled".
     */
    "status": "pending" | "requires_action" | "succeeded" | "failed" | "canceled" | (string & {});
};
/** A payment review requiring a merchant decision. */
export type PaymentReview = {
    /** RFC3339 timestamp. Format: date-time. */
    "closed_at": string | null;
    /**
     * The credential that closed this payment review. Null when Flint closed it. anyOf[1] (Value):
     * {@link ResourceReference}. A reference to another resource by `resource_type` and
     * `resource_id`. anyOf[2] (Value): null.
     */
    "closed_by": ((ResourceReference) | (null));
    /**
     * Value enum: "approved", "declined", "refunded", "disputed", "payment_canceled", "expired",
     * null.
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
    "customer_id": string | null;
    "ip_address": string | null;
    /**
     * The most recent resolution attempt that failed. Set when a decline's refund failed and the
     * review reopened. Null when no attempt has failed. anyOf[1] (Value): {@link
     * PaymentReviewResolutionFailure}. A failed attempt to resolve a review by refund, with the
     * `refund_id` and when it failed. anyOf[2] (Value): null.
     */
    "last_resolution_failure": ((PaymentReviewResolutionFailure) | (null));
    "matched_risk_rule_id": string | null;
    /** RFC3339 timestamp. Format: date-time. */
    "opened_at": string;
    /** Value enum: "rule". */
    "opened_reason": "rule" | (string & {});
    /**
     * Present only when `expand` includes `order`; `null` when expanded and there is no related
     * order. anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields, including
     * status, payment and refund status, and pricing and settlement amounts, returned when the
     * order is expanded. anyOf[2] (Value): null.
     */
    "order"?: ((ExpandedOrderSummary) | (null));
    "order_id": string | null;
    /**
     * Value enum: "checkout", "payment_link", "invoice", "subscription_initial",
     * "subscription_renewal", "virtual_terminal", "api".
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
    "payment_intent_id": string;
    "payment_review_id": string;
    /**
     * The payment details shown on a review: amount, capture method, authorization expiry, card
     * brand and last four digits, and buyer email.
     */
    "payment_summary": PaymentReviewPaymentSummary;
    /**
     * The decision being carried out. `null` when status isn't resolving. Value enum: "approve",
     * "decline", "expire", null.
     */
    "pending_action": "approve" | "decline" | "expire" | null | (string & {}) | null;
    /** The refund that closed this review. Null otherwise. */
    "refund_id": string | null;
    /**
     * Refunded amount for this review. Null when no refund is recorded. anyOf[1] (Value): {@link
     * MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code. anyOf[2] (Value): null.
     */
    "refunded_money": ((MoneyValue) | (null));
    /** RFC3339 timestamp. Format: date-time. */
    "resolution_started_at": string | null;
    /**
     * The credential that started resolving this payment review. Null when Flint started it.
     * anyOf[1] (Value): {@link ResourceReference}. A reference to another resource by
     * `resource_type` and `resource_id`. anyOf[2] (Value): null.
     */
    "resolution_started_by": ((ResourceReference) | (null));
    /** The risk assessment shown on a review: a `level` and, when available, a numeric `score`. */
    "risk": PaymentReviewRisk;
    /** Value enum: "open", "resolving", "closed". */
    "status": "open" | "resolving" | "closed" | (string & {});
    /** RFC3339 timestamp. Format: date-time. */
    "updated_at": string;
};
export type PaymentReviewClosedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": PaymentReview;
    };
    "event_type"?: "payment_review.closed";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": PaymentReview;
    };
    "event_type"?: "payment_review.closed";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
    });
})))
    & {
    "event_type": "payment_review.closed";
});
/**
 * The `payment_review.closed` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type PaymentReviewClosedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link PaymentReview}. A payment review requiring a merchant decision.
     */
    "data"?: {
        /** A payment review requiring a merchant decision. */
        "object": PaymentReview;
    };
    /** Value enum: "payment_review.closed". */
    "event_type"?: "payment_review.closed";
    /**
     *  environment_grant_id (Required): string. merchant_id (Required): string. mode (Required):
     * string. Value enum: "test", "live". partner_app_install_id (Required): string. sandbox_id
     * (Optional): string. type (Required): string. Value enum: "installed_merchants".
     */
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        /** Value enum: "test", "live". */
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        /** Value enum: "installed_merchants". */
        "type": "installed_merchants" | (string & {});
    });
});
/**
 * The `payment_review.closed` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type PaymentReviewClosedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link PaymentReview}. A payment review requiring a merchant decision.
     */
    "data"?: {
        /** A payment review requiring a merchant decision. */
        "object": PaymentReview;
    };
    /** Value enum: "payment_review.closed". */
    "event_type"?: "payment_review.closed";
});
/** A page of `PaymentReview` objects. */
export type PaymentReviewListResponse = {
    /**  [] (Value): {@link PaymentReview}. A payment review requiring a merchant decision. */
    "data": Array<PaymentReview>;
    /**
     * Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent
     * request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    "next_page_token"?: string;
    /**
     * maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
export type PaymentReviewOpenedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": PaymentReview;
    };
    "event_type"?: "payment_review.opened";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": PaymentReview;
    };
    "event_type"?: "payment_review.opened";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
    });
})))
    & {
    "event_type": "payment_review.opened";
});
/**
 * The `payment_review.opened` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type PaymentReviewOpenedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link PaymentReview}. A payment review requiring a merchant decision.
     */
    "data"?: {
        /** A payment review requiring a merchant decision. */
        "object": PaymentReview;
    };
    /** Value enum: "payment_review.opened". */
    "event_type"?: "payment_review.opened";
    /**
     *  environment_grant_id (Required): string. merchant_id (Required): string. mode (Required):
     * string. Value enum: "test", "live". partner_app_install_id (Required): string. sandbox_id
     * (Optional): string. type (Required): string. Value enum: "installed_merchants".
     */
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        /** Value enum: "test", "live". */
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        /** Value enum: "installed_merchants". */
        "type": "installed_merchants" | (string & {});
    });
});
