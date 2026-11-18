import type { MoneyValueInput, MoneyValue } from './types-44.js';
import type { OrderLineItemModifierRequestModelInput, OrderLineItemModifierRequest, OrderLineItemTax } from './types-46.js';
import type { OrderLineItemTaxRequestInput, OrderPaymentAttempt } from './types-47.js';
import type { UpdateSubscriptionPlanLineItemInputBundle } from './types-77.js';
import type { ImageRequest, ImageRequestInput, ImageAttachment } from './types-31.js';
import type { InventoryRoutingSourceRequest, InventoryRoutingSourceRequestInput } from './types-33.js';
import type {
    MetadataPatchRequest,
    MetadataPatchRequestInput,
    MerchantSignupTermsAcceptanceRequest,
    MerchantSignupTermsAcceptanceRequestInput,
    MetadataMap
} from './types-43.js';
import type {
    SubscriptionEndAfterCycles,
    SubscriptionIntervalOption,
    SubscriptionEndAfterCyclesRequestInput,
    SubscriptionIntervalOptionRequestInput,
    SubscriptionDeliveryRequest,
    SubscriptionEndAfterRequest,
    SubscriptionGiftRecipientRequest,
    SubscriptionDeliveryRequestInput,
    SubscriptionEndAfterRequestInput,
    SubscriptionGiftRecipientRequestInput
} from './types-70.js';
import type { SubscriptionPlanChangeOption, SubscriptionPlanChangeOptionRequestInput } from './types-71.js';
import type { SubscriptionBillingScheduleUpdateRequest, SubscriptionBillingScheduleUpdateRequestInput } from './types-69.js';
import type { SubscriptionTaxRequest, SubscriptionTaxRequestInput } from './types-72.js';
import type {
    TaxCalculationCallbackConfigurationPatchRequest,
    TaxCalculationCallbackConfigurationPatchRequestInput
} from './types-73.js';
import type {
    WebhookSigningMethod,
    WebhookSigningMethodInput,
    WorkloadIdentityClaimConditionRequest,
    WorkloadIdentityClaimConditionRequestInput
} from './types-79.js';
import type { KnownWebhookEvent, LegalSettings } from './types-38.js';
import type { GetReturnReceiptResponse, GetReturnResponse } from './types-28.js';
import type { ResponseMeta, ResendWebhookDeliveryRequestInput, ResourceReference } from './types-62.js';
import type { Package } from './types-48.js';
import type { Shipment, SetupCollection } from './types-68.js';
import type { BundleComponent } from './types-1.js';
import type { CategoryReference } from './types-5.js';
import type { BuyerRefund } from './types-3.js';
import type {
    CheckoutBuyerContact,
    CheckoutBuyerFields,
    CheckoutCustomTextConfig,
    CheckoutDerivedDeliveryResource,
    CheckoutGiftCardChallenge,
    CheckoutPaymentConfig,
    CheckoutPrefill,
    CheckoutProblemResource,
    CheckoutPromotionConfig,
    CheckoutRedirects
} from './types-6.js';
import type { CheckoutSessionTax, CheckoutSubscriptionTerms, CheckoutTheme, CheckoutTipConfig } from './types-7.js';
import type { CustomFieldAnswer } from './types-16.js';
import type {
    ExpandedCustomerSummary,
    ExpandedInvoiceSummary,
    ExpandedOrderSummary,
    ExpandedPaymentIntentSummary,
    ExpandedPaymentLinkSummary,
    DisputesAcceptParams
} from './types-26.js';
import type { PaymentCollection } from './types-51.js';
import type { InputValue } from '../runtime.js';
import type {
    CreateWebhookDeliveryRequestInput,
    CreateWebhookEndpointRequestInput,
    CreateWebhookTestEventRequestInput
} from './types-14.js';
import type { CustomersListAddressesParams } from './types-17.js';
import type { DeliveryProfileConfiguration } from './types-21.js';
/** The `bundle` variant of `UpdateSubscriptionPlanLineItemInput`. */
export type UpdateSubscriptionPlanLineItemInputBundleInput = ({
    /**
     * Whether buyers may adjust this line quantity. Defaults to false. At most one line per plan
     * may allow adjustment. Default: false.
     */
    "allow_quantity_adjustment"?: boolean;
    /**
     * ID of the catalog bundle to sell on this line. Send it with `type` bundle and without
     * `variant_id`, `name`, `unit_price_money`, `description`, or `tax`: Flint takes those from
     * the bundle. Changing it on a retained line needs `modifiers`. minLength: 1. Example:
     * "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
    "bundle_id": string;
    /**
     * Description of the line. Optional on a custom line, and not allowed on a variant or bundle
     * line, which take the catalog description. minLength: 1.
     */
    "description"?: string;
    /**
     * Maximum buyer quantity. Defaults to 9999. Merchants may set any line quantity from 1 to
     * 9999. Whole-number quantity; fractional quantities are not supported. Format: int32.
     * minimum: 1. maximum: 9999. Default: 9999.
     */
    "max_quantity"?: number;
    /**
     * Minimum buyer quantity. Defaults to 1. The bounds must enclose the plan line quantity.
     * Whole-number quantity; fractional quantities are not supported. Format: int32. minimum: 1.
     * maximum: 9999. Default: 1.
     */
    "min_quantity"?: number;
    /**
     * Modifiers for a variant or bundle line. On a new line, omit to apply the catalog item's
     * default modifiers. On a retained line with the same variant or bundle, omit to keep its
     * recorded choices. Changing `variant_id` or `bundle_id` requires `modifiers`. Not allowed on
     * a custom line, and `null` is rejected. [] (Value): {@link
     * OrderLineItemModifierRequestModelInput}. A modifier selection you supply on a line item: a
     * catalog modifier by ID or a text modifier, with a quantity. [].metadata (Optional): {@link
     * MetadataRequestInput}. Caller-owned metadata for this selection, returned on the order line
     * item's modifier. Values can't be empty strings. Keys starting with flint_ are reserved for
     * Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50. [].modifier_id (Optional):
     * string. ID of the existing modifier. Treated as an opaque resource reference; accepted
     * spellings follow resource ID validation. Its resolved price and the resulting line subtotal
     * must satisfy the order money ceiling. The amount and every computed order amount must not
     * exceed 99999999 minor units ($999,999.99 USD). Flint rejects an input or calculation above
     * this ceiling with INVALID_REQUEST and detail INVALID_VALUE at the responsible input field.
     * Lower payment option limits can apply. minLength: 1. Example:
     * "mod_01KEZF7C00SAWDZBQJX5H0XW1S". [].order_line_item_modifier_id (Optional): string.
     * Existing selection ID to retain during replacement. minLength: 1. pattern:
     * ^olim_[0-9A-HJKMNP-TV-Z]{26}$. Example: "olim_01KEZF7C00YP0WSZGRAD25EB1Z". [].quantity
     * (Optional): integer. Whole-number quantity; fractional quantities are not supported. Format:
     * int64. [].text (Optional): {@link TextModifierRequestInput}. The text to use. Send it with a
     * `text` modifier. Text a buyer entered for a text modifier group on an order line item.
     * [].type (Required): string. Selects the type branch. Value enum: "catalog", "text".
     * [].oneOf[1] (Value): {@link OrderLineItemModifierInputCatalogRequestInput}. The `catalog`
     * variant of `OrderLineItemModifierInput`. [].oneOf[2] (Value): {@link
     * OrderLineItemModifierInputTextRequestInput}. The `text` variant of
     * `OrderLineItemModifierInput`.
     */
    "modifiers"?: Array<(Exclude<OrderLineItemModifierRequestModelInput & object, readonly unknown[]>)
        & (({
        "order_line_item_modifier_id"?: never;
    }))>;
    /**
     * Name of the line. Required for a custom line, and not allowed on a variant or bundle line,
     * which take the catalog name. Surrounding whitespace is trimmed before length validation. A
     * supplied value cannot be blank; use null where clearing is supported. minLength: 1.
     */
    "name"?: string;
    /**
     * Whole-number quantity; fractional quantities are not supported. Omission uses 1. Format:
     * int32. minimum: 1. maximum: 9999. Default: 1.
     */
    "quantity"?: number;
    /**
     * ID of an existing item on this plan to retain. Omit for a new item. Duplicate IDs and IDs
     * from other plans are rejected. minLength: 1. Example: "spli_01KEZF7C00H9FGC2KBRF82H87N".
     */
    "subscription_plan_line_item_id"?: string;
    /**
     * Variants a subscriber can swap this line to. Only for a variant line. At most 25, with no
     * repeats, none equal to the line's own variant, and all from the same product. On a retained
     * line with the same variant, omit to keep its current choices. maxItems: 25. uniqueItems:
     * true. [] (Value): string. minLength: 1. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "swap_variant_ids"?: Array<string>;
    /**
     * Whether the line is taxable and its tax category. A custom line needs `taxable` when it
     * sends `tax`. Not allowed on a variant or bundle line, which take the catalog tax settings. A
     * line item's tax category and whether it is taxable.
     */
    "tax"?: OrderLineItemTaxRequestInput;
    /**
     * The kind of line to keep or add. It must match the other fields: `variant` needs
     * `variant_id`, `bundle` needs `bundle_id`, and `custom` needs `name` and `unit_price_money`.
     * Value enum: "bundle".
     */
    "type": "bundle";
    /**
     * Price of one unit, in the plan's currency. Required for a custom line, with an amount above
     * zero, and not allowed on a variant or bundle line, which take the catalog price. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "unit_price_money"?: MoneyValueInput;
    /**
     * ID of the catalog variant to sell on this line. Send it with `type` variant and without
     * `bundle_id`, `name`, `unit_price_money`, `description`, or `tax`: Flint takes those from the
     * variant. Changing it on a retained line needs `modifiers`. minLength: 1. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id"?: string;
})
    & (({
    /**
     * The kind of line to keep or add. It must match the other fields: `variant` needs
     * `variant_id`, `bundle` needs `bundle_id`, and `custom` needs `name` and `unit_price_money`.
     * Value enum: "bundle".
     */
    "type": ("bundle") & ("bundle");
    /**
     * ID of the catalog bundle to sell on this line. Send it with `type` bundle and without
     * `variant_id`, `name`, `unit_price_money`, `description`, or `tax`: Flint takes those from
     * the bundle. Changing it on a retained line needs `modifiers`. minLength: 1. Example:
     * "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
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
})));
/** The `custom` variant of `UpdateSubscriptionPlanLineItemInput`. */
export type UpdateSubscriptionPlanLineItemInputCustom = ({
    /**
     * Whether buyers may adjust this line quantity. Defaults to false. At most one line per plan
     * may allow adjustment. Default: false.
     */
    "allow_quantity_adjustment"?: boolean;
    /**
     * ID of the catalog bundle to sell on this line. Send it with `type` bundle and without
     * `variant_id`, `name`, `unit_price_money`, `description`, or `tax`: Flint takes those from
     * the bundle. Changing it on a retained line needs `modifiers`. minLength: 1. Example:
     * "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
    "bundle_id"?: string;
    /**
     * Description of the line. Optional on a custom line, and not allowed on a variant or bundle
     * line, which take the catalog description. minLength: 1.
     */
    "description"?: string;
    /**
     * Maximum buyer quantity. Defaults to 9999. Merchants may set any line quantity from 1 to
     * 9999. Whole-number quantity; fractional quantities are not supported. Format: int32.
     * minimum: 1. maximum: 9999. Default: 9999.
     */
    "max_quantity"?: number;
    /**
     * Minimum buyer quantity. Defaults to 1. The bounds must enclose the plan line quantity.
     * Whole-number quantity; fractional quantities are not supported. Format: int32. minimum: 1.
     * maximum: 9999. Default: 1.
     */
    "min_quantity"?: number;
    /**
     * Modifiers for a variant or bundle line. On a new line, omit to apply the catalog item's
     * default modifiers. On a retained line with the same variant or bundle, omit to keep its
     * recorded choices. Changing `variant_id` or `bundle_id` requires `modifiers`. Not allowed on
     * a custom line, and `null` is rejected. [] (Value): {@link OrderLineItemModifierRequest}. A
     * modifier selection you supply on a line item: a catalog modifier by ID or a text modifier,
     * with a quantity. [].metadata (Optional): {@link MetadataMap}. Caller-owned metadata for this
     * selection, returned on the order line item's modifier. Values can't be empty strings. Keys
     * starting with flint_ are reserved for Flint, are not returned, and cannot be written through
     * the public API. Caller-owned key-value data for a new or replaced map. Omit it for no
     * metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to
     * 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't
     * be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: 50.
     * [].modifier_id (Optional): string. ID of the existing modifier. Treated as an opaque
     * resource reference; accepted spellings follow resource ID validation. Its resolved price and
     * the resulting line subtotal must satisfy the order money ceiling. The amount and every
     * computed order amount must not exceed 99999999 minor units ($999,999.99 USD). Flint rejects
     * an input or calculation above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at
     * the responsible input field. Lower payment option limits can apply. minLength: 1. Example:
     * "mod_01KEZF7C00SAWDZBQJX5H0XW1S". [].order_line_item_modifier_id (Optional): string.
     * Existing selection ID to retain during replacement. minLength: 1. pattern:
     * ^olim_[0-9A-HJKMNP-TV-Z]{26}$. Example: "olim_01KEZF7C00YP0WSZGRAD25EB1Z". [].quantity
     * (Optional): integer. Whole-number quantity; fractional quantities are not supported. Format:
     * int64. [].text (Optional): {@link TextModifierRequest}. The text to use. Send it with a
     * `text` modifier. Text a buyer entered for a text modifier group on an order line item.
     * [].type (Required): string. Selects the type branch. Value enum: "catalog", "text".
     * [].oneOf[1] (Value): {@link OrderLineItemModifierInputCatalog}. The `catalog` variant of
     * `OrderLineItemModifierInput`. [].oneOf[2] (Value): {@link OrderLineItemModifierInputText}.
     * The `text` variant of `OrderLineItemModifierInput`.
     */
    "modifiers"?: Array<(Exclude<OrderLineItemModifierRequest & object, readonly unknown[]>)>;
    /**
     * Name of the line. Required for a custom line, and not allowed on a variant or bundle line,
     * which take the catalog name. Surrounding whitespace is trimmed before length validation. A
     * supplied value cannot be blank; use null where clearing is supported. minLength: 1.
     */
    "name": string;
    /**
     * Whole-number quantity; fractional quantities are not supported. Omission uses 1. Format:
     * int32. minimum: 1. maximum: 9999. Default: 1.
     */
    "quantity"?: number;
    /**
     * ID of an existing item on this plan to retain. Omit for a new item. Duplicate IDs and IDs
     * from other plans are rejected. minLength: 1. Example: "spli_01KEZF7C00H9FGC2KBRF82H87N".
     */
    "subscription_plan_line_item_id"?: string;
    /**
     * Variants a subscriber can swap this line to. Only for a variant line. At most 25, with no
     * repeats, none equal to the line's own variant, and all from the same product. On a retained
     * line with the same variant, omit to keep its current choices. maxItems: 25. uniqueItems:
     * true. [] (Value): string. minLength: 1. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "swap_variant_ids"?: Array<string>;
    /**
     * Whether the line is taxable and its tax category. A custom line needs `taxable` when it
     * sends `tax`. Not allowed on a variant or bundle line, which take the catalog tax settings. A
     * line item's tax category and whether it is taxable.
     */
    "tax"?: OrderLineItemTax;
    /**
     * The kind of line to keep or add. It must match the other fields: `variant` needs
     * `variant_id`, `bundle` needs `bundle_id`, and `custom` needs `name` and `unit_price_money`.
     * Value enum: "custom".
     */
    "type": "custom" | (string & {});
    /**
     * Price of one unit, in the plan's currency. Required for a custom line, with an amount above
     * zero, and not allowed on a variant or bundle line, which take the catalog price. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "unit_price_money": MoneyValue;
    /**
     * ID of the catalog variant to sell on this line. Send it with `type` variant and without
     * `bundle_id`, `name`, `unit_price_money`, `description`, or `tax`: Flint takes those from the
     * variant. Changing it on a retained line needs `modifiers`. minLength: 1. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id"?: string;
})
    & (({
    /**
     * The kind of line to keep or add. It must match the other fields: `variant` needs
     * `variant_id`, `bundle` needs `bundle_id`, and `custom` needs `name` and `unit_price_money`.
     * Value enum: "custom".
     */
    "type": "custom" | (string & {});
    /**
     * Name of the line. Required for a custom line, and not allowed on a variant or bundle line,
     * which take the catalog name. Surrounding whitespace is trimmed before length validation. A
     * supplied value cannot be blank; use null where clearing is supported. minLength: 1.
     */
    "name": string;
    /**
     * Price of one unit, in the plan's currency. Required for a custom line, with an amount above
     * zero, and not allowed on a variant or bundle line, which take the catalog price. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "unit_price_money": MoneyValue;
}));
/** The `custom` variant of `UpdateSubscriptionPlanLineItemInput`. */
export type UpdateSubscriptionPlanLineItemInputCustomInput = ({
    /**
     * Whether buyers may adjust this line quantity. Defaults to false. At most one line per plan
     * may allow adjustment. Default: false.
     */
    "allow_quantity_adjustment"?: boolean;
    /**
     * ID of the catalog bundle to sell on this line. Send it with `type` bundle and without
     * `variant_id`, `name`, `unit_price_money`, `description`, or `tax`: Flint takes those from
     * the bundle. Changing it on a retained line needs `modifiers`. minLength: 1. Example:
     * "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
    "bundle_id"?: string;
    /**
     * Description of the line. Optional on a custom line, and not allowed on a variant or bundle
     * line, which take the catalog description. minLength: 1.
     */
    "description"?: string;
    /**
     * Maximum buyer quantity. Defaults to 9999. Merchants may set any line quantity from 1 to
     * 9999. Whole-number quantity; fractional quantities are not supported. Format: int32.
     * minimum: 1. maximum: 9999. Default: 9999.
     */
    "max_quantity"?: number;
    /**
     * Minimum buyer quantity. Defaults to 1. The bounds must enclose the plan line quantity.
     * Whole-number quantity; fractional quantities are not supported. Format: int32. minimum: 1.
     * maximum: 9999. Default: 1.
     */
    "min_quantity"?: number;
    /**
     * Modifiers for a variant or bundle line. On a new line, omit to apply the catalog item's
     * default modifiers. On a retained line with the same variant or bundle, omit to keep its
     * recorded choices. Changing `variant_id` or `bundle_id` requires `modifiers`. Not allowed on
     * a custom line, and `null` is rejected. [] (Value): {@link
     * OrderLineItemModifierRequestModelInput}. A modifier selection you supply on a line item: a
     * catalog modifier by ID or a text modifier, with a quantity. [].metadata (Optional): {@link
     * MetadataRequestInput}. Caller-owned metadata for this selection, returned on the order line
     * item's modifier. Values can't be empty strings. Keys starting with flint_ are reserved for
     * Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50. [].modifier_id (Optional):
     * string. ID of the existing modifier. Treated as an opaque resource reference; accepted
     * spellings follow resource ID validation. Its resolved price and the resulting line subtotal
     * must satisfy the order money ceiling. The amount and every computed order amount must not
     * exceed 99999999 minor units ($999,999.99 USD). Flint rejects an input or calculation above
     * this ceiling with INVALID_REQUEST and detail INVALID_VALUE at the responsible input field.
     * Lower payment option limits can apply. minLength: 1. Example:
     * "mod_01KEZF7C00SAWDZBQJX5H0XW1S". [].order_line_item_modifier_id (Optional): string.
     * Existing selection ID to retain during replacement. minLength: 1. pattern:
     * ^olim_[0-9A-HJKMNP-TV-Z]{26}$. Example: "olim_01KEZF7C00YP0WSZGRAD25EB1Z". [].quantity
     * (Optional): integer. Whole-number quantity; fractional quantities are not supported. Format:
     * int64. [].text (Optional): {@link TextModifierRequestInput}. The text to use. Send it with a
     * `text` modifier. Text a buyer entered for a text modifier group on an order line item.
     * [].type (Required): string. Selects the type branch. Value enum: "catalog", "text".
     * [].oneOf[1] (Value): {@link OrderLineItemModifierInputCatalogRequestInput}. The `catalog`
     * variant of `OrderLineItemModifierInput`. [].oneOf[2] (Value): {@link
     * OrderLineItemModifierInputTextRequestInput}. The `text` variant of
     * `OrderLineItemModifierInput`.
     */
    "modifiers"?: Array<(Exclude<OrderLineItemModifierRequestModelInput & object, readonly unknown[]>)
        & (({
        "order_line_item_modifier_id"?: never;
    }))>;
    /**
     * Name of the line. Required for a custom line, and not allowed on a variant or bundle line,
     * which take the catalog name. Surrounding whitespace is trimmed before length validation. A
     * supplied value cannot be blank; use null where clearing is supported. minLength: 1.
     */
    "name": string;
    /**
     * Whole-number quantity; fractional quantities are not supported. Omission uses 1. Format:
     * int32. minimum: 1. maximum: 9999. Default: 1.
     */
    "quantity"?: number;
    /**
     * ID of an existing item on this plan to retain. Omit for a new item. Duplicate IDs and IDs
     * from other plans are rejected. minLength: 1. Example: "spli_01KEZF7C00H9FGC2KBRF82H87N".
     */
    "subscription_plan_line_item_id"?: string;
    /**
     * Variants a subscriber can swap this line to. Only for a variant line. At most 25, with no
     * repeats, none equal to the line's own variant, and all from the same product. On a retained
     * line with the same variant, omit to keep its current choices. maxItems: 25. uniqueItems:
     * true. [] (Value): string. minLength: 1. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "swap_variant_ids"?: Array<string>;
    /**
     * Whether the line is taxable and its tax category. A custom line needs `taxable` when it
     * sends `tax`. Not allowed on a variant or bundle line, which take the catalog tax settings. A
     * line item's tax category and whether it is taxable.
     */
    "tax"?: OrderLineItemTaxRequestInput;
    /**
     * The kind of line to keep or add. It must match the other fields: `variant` needs
     * `variant_id`, `bundle` needs `bundle_id`, and `custom` needs `name` and `unit_price_money`.
     * Value enum: "custom".
     */
    "type": "custom";
    /**
     * Price of one unit, in the plan's currency. Required for a custom line, with an amount above
     * zero, and not allowed on a variant or bundle line, which take the catalog price. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "unit_price_money": MoneyValueInput;
    /**
     * ID of the catalog variant to sell on this line. Send it with `type` variant and without
     * `bundle_id`, `name`, `unit_price_money`, `description`, or `tax`: Flint takes those from the
     * variant. Changing it on a retained line needs `modifiers`. minLength: 1. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id"?: string;
})
    & (({
    /**
     * The kind of line to keep or add. It must match the other fields: `variant` needs
     * `variant_id`, `bundle` needs `bundle_id`, and `custom` needs `name` and `unit_price_money`.
     * Value enum: "custom".
     */
    "type": ("custom") & ("custom");
    /**
     * Name of the line. Required for a custom line, and not allowed on a variant or bundle line,
     * which take the catalog name. Surrounding whitespace is trimmed before length validation. A
     * supplied value cannot be blank; use null where clearing is supported. minLength: 1.
     */
    "name": string;
    /**
     * Price of one unit, in the plan's currency. Required for a custom line, with an amount above
     * zero, and not allowed on a variant or bundle line, which take the catalog price. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "unit_price_money": MoneyValueInput;
})
    & (({
    "variant_id"?: never;
}) & ({
    "bundle_id"?: never;
})));
/** The `variant` variant of `UpdateSubscriptionPlanLineItemInput`. */
export type UpdateSubscriptionPlanLineItemInputVariant = ({
    /**
     * Whether buyers may adjust this line quantity. Defaults to false. At most one line per plan
     * may allow adjustment. Default: false.
     */
    "allow_quantity_adjustment"?: boolean;
    /**
     * ID of the catalog bundle to sell on this line. Send it with `type` bundle and without
     * `variant_id`, `name`, `unit_price_money`, `description`, or `tax`: Flint takes those from
     * the bundle. Changing it on a retained line needs `modifiers`. minLength: 1. Example:
     * "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
    "bundle_id"?: string;
    /**
     * Description of the line. Optional on a custom line, and not allowed on a variant or bundle
     * line, which take the catalog description. minLength: 1.
     */
    "description"?: string;
    /**
     * Maximum buyer quantity. Defaults to 9999. Merchants may set any line quantity from 1 to
     * 9999. Whole-number quantity; fractional quantities are not supported. Format: int32.
     * minimum: 1. maximum: 9999. Default: 9999.
     */
    "max_quantity"?: number;
    /**
     * Minimum buyer quantity. Defaults to 1. The bounds must enclose the plan line quantity.
     * Whole-number quantity; fractional quantities are not supported. Format: int32. minimum: 1.
     * maximum: 9999. Default: 1.
     */
    "min_quantity"?: number;
    /**
     * Modifiers for a variant or bundle line. On a new line, omit to apply the catalog item's
     * default modifiers. On a retained line with the same variant or bundle, omit to keep its
     * recorded choices. Changing `variant_id` or `bundle_id` requires `modifiers`. Not allowed on
     * a custom line, and `null` is rejected. [] (Value): {@link OrderLineItemModifierRequest}. A
     * modifier selection you supply on a line item: a catalog modifier by ID or a text modifier,
     * with a quantity. [].metadata (Optional): {@link MetadataMap}. Caller-owned metadata for this
     * selection, returned on the order line item's modifier. Values can't be empty strings. Keys
     * starting with flint_ are reserved for Flint, are not returned, and cannot be written through
     * the public API. Caller-owned key-value data for a new or replaced map. Omit it for no
     * metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to
     * 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't
     * be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: 50.
     * [].modifier_id (Optional): string. ID of the existing modifier. Treated as an opaque
     * resource reference; accepted spellings follow resource ID validation. Its resolved price and
     * the resulting line subtotal must satisfy the order money ceiling. The amount and every
     * computed order amount must not exceed 99999999 minor units ($999,999.99 USD). Flint rejects
     * an input or calculation above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at
     * the responsible input field. Lower payment option limits can apply. minLength: 1. Example:
     * "mod_01KEZF7C00SAWDZBQJX5H0XW1S". [].order_line_item_modifier_id (Optional): string.
     * Existing selection ID to retain during replacement. minLength: 1. pattern:
     * ^olim_[0-9A-HJKMNP-TV-Z]{26}$. Example: "olim_01KEZF7C00YP0WSZGRAD25EB1Z". [].quantity
     * (Optional): integer. Whole-number quantity; fractional quantities are not supported. Format:
     * int64. [].text (Optional): {@link TextModifierRequest}. The text to use. Send it with a
     * `text` modifier. Text a buyer entered for a text modifier group on an order line item.
     * [].type (Required): string. Selects the type branch. Value enum: "catalog", "text".
     * [].oneOf[1] (Value): {@link OrderLineItemModifierInputCatalog}. The `catalog` variant of
     * `OrderLineItemModifierInput`. [].oneOf[2] (Value): {@link OrderLineItemModifierInputText}.
     * The `text` variant of `OrderLineItemModifierInput`.
     */
    "modifiers"?: Array<(Exclude<OrderLineItemModifierRequest & object, readonly unknown[]>)>;
    /**
     * Name of the line. Required for a custom line, and not allowed on a variant or bundle line,
     * which take the catalog name. Surrounding whitespace is trimmed before length validation. A
     * supplied value cannot be blank; use null where clearing is supported. minLength: 1.
     */
    "name"?: string;
    /**
     * Whole-number quantity; fractional quantities are not supported. Omission uses 1. Format:
     * int32. minimum: 1. maximum: 9999. Default: 1.
     */
    "quantity"?: number;
    /**
     * ID of an existing item on this plan to retain. Omit for a new item. Duplicate IDs and IDs
     * from other plans are rejected. minLength: 1. Example: "spli_01KEZF7C00H9FGC2KBRF82H87N".
     */
    "subscription_plan_line_item_id"?: string;
    /**
     * Variants a subscriber can swap this line to. Only for a variant line. At most 25, with no
     * repeats, none equal to the line's own variant, and all from the same product. On a retained
     * line with the same variant, omit to keep its current choices. maxItems: 25. uniqueItems:
     * true. [] (Value): string. minLength: 1. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "swap_variant_ids"?: Array<string>;
    /**
     * Whether the line is taxable and its tax category. A custom line needs `taxable` when it
     * sends `tax`. Not allowed on a variant or bundle line, which take the catalog tax settings. A
     * line item's tax category and whether it is taxable.
     */
    "tax"?: OrderLineItemTax;
    /**
     * The kind of line to keep or add. It must match the other fields: `variant` needs
     * `variant_id`, `bundle` needs `bundle_id`, and `custom` needs `name` and `unit_price_money`.
     * Value enum: "variant".
     */
    "type": "variant" | (string & {});
    /**
     * Price of one unit, in the plan's currency. Required for a custom line, with an amount above
     * zero, and not allowed on a variant or bundle line, which take the catalog price. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "unit_price_money"?: MoneyValue;
    /**
     * ID of the catalog variant to sell on this line. Send it with `type` variant and without
     * `bundle_id`, `name`, `unit_price_money`, `description`, or `tax`: Flint takes those from the
     * variant. Changing it on a retained line needs `modifiers`. minLength: 1. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id": string;
})
    & (({
    /**
     * The kind of line to keep or add. It must match the other fields: `variant` needs
     * `variant_id`, `bundle` needs `bundle_id`, and `custom` needs `name` and `unit_price_money`.
     * Value enum: "variant".
     */
    "type": "variant" | (string & {});
    /**
     * ID of the catalog variant to sell on this line. Send it with `type` variant and without
     * `bundle_id`, `name`, `unit_price_money`, `description`, or `tax`: Flint takes those from the
     * variant. Changing it on a retained line needs `modifiers`. minLength: 1. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id": string;
}));
/** The `variant` variant of `UpdateSubscriptionPlanLineItemInput`. */
export type UpdateSubscriptionPlanLineItemInputVariantInput = ({
    /**
     * Whether buyers may adjust this line quantity. Defaults to false. At most one line per plan
     * may allow adjustment. Default: false.
     */
    "allow_quantity_adjustment"?: boolean;
    /**
     * ID of the catalog bundle to sell on this line. Send it with `type` bundle and without
     * `variant_id`, `name`, `unit_price_money`, `description`, or `tax`: Flint takes those from
     * the bundle. Changing it on a retained line needs `modifiers`. minLength: 1. Example:
     * "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
    "bundle_id"?: string;
    /**
     * Description of the line. Optional on a custom line, and not allowed on a variant or bundle
     * line, which take the catalog description. minLength: 1.
     */
    "description"?: string;
    /**
     * Maximum buyer quantity. Defaults to 9999. Merchants may set any line quantity from 1 to
     * 9999. Whole-number quantity; fractional quantities are not supported. Format: int32.
     * minimum: 1. maximum: 9999. Default: 9999.
     */
    "max_quantity"?: number;
    /**
     * Minimum buyer quantity. Defaults to 1. The bounds must enclose the plan line quantity.
     * Whole-number quantity; fractional quantities are not supported. Format: int32. minimum: 1.
     * maximum: 9999. Default: 1.
     */
    "min_quantity"?: number;
    /**
     * Modifiers for a variant or bundle line. On a new line, omit to apply the catalog item's
     * default modifiers. On a retained line with the same variant or bundle, omit to keep its
     * recorded choices. Changing `variant_id` or `bundle_id` requires `modifiers`. Not allowed on
     * a custom line, and `null` is rejected. [] (Value): {@link
     * OrderLineItemModifierRequestModelInput}. A modifier selection you supply on a line item: a
     * catalog modifier by ID or a text modifier, with a quantity. [].metadata (Optional): {@link
     * MetadataRequestInput}. Caller-owned metadata for this selection, returned on the order line
     * item's modifier. Values can't be empty strings. Keys starting with flint_ are reserved for
     * Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50. [].modifier_id (Optional):
     * string. ID of the existing modifier. Treated as an opaque resource reference; accepted
     * spellings follow resource ID validation. Its resolved price and the resulting line subtotal
     * must satisfy the order money ceiling. The amount and every computed order amount must not
     * exceed 99999999 minor units ($999,999.99 USD). Flint rejects an input or calculation above
     * this ceiling with INVALID_REQUEST and detail INVALID_VALUE at the responsible input field.
     * Lower payment option limits can apply. minLength: 1. Example:
     * "mod_01KEZF7C00SAWDZBQJX5H0XW1S". [].order_line_item_modifier_id (Optional): string.
     * Existing selection ID to retain during replacement. minLength: 1. pattern:
     * ^olim_[0-9A-HJKMNP-TV-Z]{26}$. Example: "olim_01KEZF7C00YP0WSZGRAD25EB1Z". [].quantity
     * (Optional): integer. Whole-number quantity; fractional quantities are not supported. Format:
     * int64. [].text (Optional): {@link TextModifierRequestInput}. The text to use. Send it with a
     * `text` modifier. Text a buyer entered for a text modifier group on an order line item.
     * [].type (Required): string. Selects the type branch. Value enum: "catalog", "text".
     * [].oneOf[1] (Value): {@link OrderLineItemModifierInputCatalogRequestInput}. The `catalog`
     * variant of `OrderLineItemModifierInput`. [].oneOf[2] (Value): {@link
     * OrderLineItemModifierInputTextRequestInput}. The `text` variant of
     * `OrderLineItemModifierInput`.
     */
    "modifiers"?: Array<(Exclude<OrderLineItemModifierRequestModelInput & object, readonly unknown[]>)
        & (({
        "order_line_item_modifier_id"?: never;
    }))>;
    /**
     * Name of the line. Required for a custom line, and not allowed on a variant or bundle line,
     * which take the catalog name. Surrounding whitespace is trimmed before length validation. A
     * supplied value cannot be blank; use null where clearing is supported. minLength: 1.
     */
    "name"?: string;
    /**
     * Whole-number quantity; fractional quantities are not supported. Omission uses 1. Format:
     * int32. minimum: 1. maximum: 9999. Default: 1.
     */
    "quantity"?: number;
    /**
     * ID of an existing item on this plan to retain. Omit for a new item. Duplicate IDs and IDs
     * from other plans are rejected. minLength: 1. Example: "spli_01KEZF7C00H9FGC2KBRF82H87N".
     */
    "subscription_plan_line_item_id"?: string;
    /**
     * Variants a subscriber can swap this line to. Only for a variant line. At most 25, with no
     * repeats, none equal to the line's own variant, and all from the same product. On a retained
     * line with the same variant, omit to keep its current choices. maxItems: 25. uniqueItems:
     * true. [] (Value): string. minLength: 1. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "swap_variant_ids"?: Array<string>;
    /**
     * Whether the line is taxable and its tax category. A custom line needs `taxable` when it
     * sends `tax`. Not allowed on a variant or bundle line, which take the catalog tax settings. A
     * line item's tax category and whether it is taxable.
     */
    "tax"?: OrderLineItemTaxRequestInput;
    /**
     * The kind of line to keep or add. It must match the other fields: `variant` needs
     * `variant_id`, `bundle` needs `bundle_id`, and `custom` needs `name` and `unit_price_money`.
     * Value enum: "variant".
     */
    "type": "variant";
    /**
     * Price of one unit, in the plan's currency. Required for a custom line, with an amount above
     * zero, and not allowed on a variant or bundle line, which take the catalog price. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "unit_price_money"?: MoneyValueInput;
    /**
     * ID of the catalog variant to sell on this line. Send it with `type` variant and without
     * `bundle_id`, `name`, `unit_price_money`, `description`, or `tax`: Flint takes those from the
     * variant. Changing it on a retained line needs `modifiers`. minLength: 1. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id": string;
})
    & (({
    /**
     * The kind of line to keep or add. It must match the other fields: `variant` needs
     * `variant_id`, `bundle` needs `bundle_id`, and `custom` needs `name` and `unit_price_money`.
     * Value enum: "variant".
     */
    "type": ("variant") & ("variant");
    /**
     * ID of the catalog variant to sell on this line. Send it with `type` variant and without
     * `bundle_id`, `name`, `unit_price_money`, `description`, or `tax`: Flint takes those from the
     * variant. Changing it on a retained line needs `modifiers`. minLength: 1. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
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
})));
/**
 * A line item to keep or add when updating a subscription plan. Include
 * `subscription_plan_line_item_id` to keep an existing one.
 */
export type UpdateSubscriptionPlanLineItemRequest = ({
    /**
     * Whether buyers may adjust this line quantity. Defaults to false. At most one line per plan
     * may allow adjustment. Default: false.
     */
    "allow_quantity_adjustment"?: boolean;
    /**
     * ID of the catalog bundle to sell on this line. Send it with `type` bundle and without
     * `variant_id`, `name`, `unit_price_money`, `description`, or `tax`: Flint takes those from
     * the bundle. Changing it on a retained line needs `modifiers`. minLength: 1. Example:
     * "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
    "bundle_id"?: string;
    /**
     * Description of the line. Optional on a custom line, and not allowed on a variant or bundle
     * line, which take the catalog description. minLength: 1.
     */
    "description"?: string;
    /**
     * Maximum buyer quantity. Defaults to 9999. Merchants may set any line quantity from 1 to
     * 9999. Whole-number quantity; fractional quantities are not supported. Format: int32.
     * minimum: 1. maximum: 9999. Default: 9999.
     */
    "max_quantity"?: number;
    /**
     * Minimum buyer quantity. Defaults to 1. The bounds must enclose the plan line quantity.
     * Whole-number quantity; fractional quantities are not supported. Format: int32. minimum: 1.
     * maximum: 9999. Default: 1.
     */
    "min_quantity"?: number;
    /**
     * Modifiers for a variant or bundle line. On a new line, omit to apply the catalog item's
     * default modifiers. On a retained line with the same variant or bundle, omit to keep its
     * recorded choices. Changing `variant_id` or `bundle_id` requires `modifiers`. Not allowed on
     * a custom line, and `null` is rejected. [] (Value): {@link OrderLineItemModifierRequest}. A
     * modifier selection you supply on a line item: a catalog modifier by ID or a text modifier,
     * with a quantity. [].metadata (Optional): {@link MetadataMap}. Caller-owned metadata for this
     * selection, returned on the order line item's modifier. Values can't be empty strings. Keys
     * starting with flint_ are reserved for Flint, are not returned, and cannot be written through
     * the public API. Caller-owned key-value data for a new or replaced map. Omit it for no
     * metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to
     * 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't
     * be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: 50.
     * [].modifier_id (Optional): string. ID of the existing modifier. Treated as an opaque
     * resource reference; accepted spellings follow resource ID validation. Its resolved price and
     * the resulting line subtotal must satisfy the order money ceiling. The amount and every
     * computed order amount must not exceed 99999999 minor units ($999,999.99 USD). Flint rejects
     * an input or calculation above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at
     * the responsible input field. Lower payment option limits can apply. minLength: 1. Example:
     * "mod_01KEZF7C00SAWDZBQJX5H0XW1S". [].order_line_item_modifier_id (Optional): string.
     * Existing selection ID to retain during replacement. minLength: 1. pattern:
     * ^olim_[0-9A-HJKMNP-TV-Z]{26}$. Example: "olim_01KEZF7C00YP0WSZGRAD25EB1Z". [].quantity
     * (Optional): integer. Whole-number quantity; fractional quantities are not supported. Format:
     * int64. [].text (Optional): {@link TextModifierRequest}. The text to use. Send it with a
     * `text` modifier. Text a buyer entered for a text modifier group on an order line item.
     * [].type (Required): string. Selects the type branch. Value enum: "catalog", "text".
     * [].oneOf[1] (Value): {@link OrderLineItemModifierInputCatalog}. The `catalog` variant of
     * `OrderLineItemModifierInput`. [].oneOf[2] (Value): {@link OrderLineItemModifierInputText}.
     * The `text` variant of `OrderLineItemModifierInput`.
     */
    "modifiers"?: Array<(Exclude<OrderLineItemModifierRequest & object, readonly unknown[]>)>;
    /**
     * Name of the line. Required for a custom line, and not allowed on a variant or bundle line,
     * which take the catalog name. Surrounding whitespace is trimmed before length validation. A
     * supplied value cannot be blank; use null where clearing is supported. minLength: 1.
     */
    "name"?: string;
    /**
     * Whole-number quantity; fractional quantities are not supported. Omission uses 1. Format:
     * int32. minimum: 1. maximum: 9999. Default: 1.
     */
    "quantity"?: number;
    /**
     * ID of an existing item on this plan to retain. Omit for a new item. Duplicate IDs and IDs
     * from other plans are rejected. minLength: 1. Example: "spli_01KEZF7C00H9FGC2KBRF82H87N".
     */
    "subscription_plan_line_item_id"?: string;
    /**
     * Variants a subscriber can swap this line to. Only for a variant line. At most 25, with no
     * repeats, none equal to the line's own variant, and all from the same product. On a retained
     * line with the same variant, omit to keep its current choices. maxItems: 25. uniqueItems:
     * true. [] (Value): string. minLength: 1. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "swap_variant_ids"?: Array<string>;
    /**
     * Whether the line is taxable and its tax category. A custom line needs `taxable` when it
     * sends `tax`. Not allowed on a variant or bundle line, which take the catalog tax settings. A
     * line item's tax category and whether it is taxable.
     */
    "tax"?: OrderLineItemTax;
    /**
     * The kind of line to keep or add. It must match the other fields: `variant` needs
     * `variant_id`, `bundle` needs `bundle_id`, and `custom` needs `name` and `unit_price_money`.
     * Value enum: "variant", "bundle", "custom".
     */
    "type": "variant" | "bundle" | "custom" | (string & {});
    /**
     * Price of one unit, in the plan's currency. Required for a custom line, with an amount above
     * zero, and not allowed on a variant or bundle line, which take the catalog price. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "unit_price_money"?: MoneyValue;
    /**
     * ID of the catalog variant to sell on this line. Send it with `type` variant and without
     * `bundle_id`, `name`, `unit_price_money`, `description`, or `tax`: Flint takes those from the
     * variant. Changing it on a retained line needs `modifiers`. minLength: 1. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id"?: string;
})
    & ((Exclude<UpdateSubscriptionPlanLineItemInputVariant & object, readonly unknown[]>)
    | (Exclude<UpdateSubscriptionPlanLineItemInputBundle & object, readonly unknown[]>)
    | (Exclude<UpdateSubscriptionPlanLineItemInputCustom & object, readonly unknown[]>)
    | (Record<string, unknown>));
/**
 * A line item to keep or add when updating a subscription plan. Include
 * `subscription_plan_line_item_id` to keep an existing one.
 */
export type UpdateSubscriptionPlanLineItemRequestInput = ({
    /**
     * Whether buyers may adjust this line quantity. Defaults to false. At most one line per plan
     * may allow adjustment. Default: false.
     */
    "allow_quantity_adjustment"?: boolean;
    /**
     * ID of the catalog bundle to sell on this line. Send it with `type` bundle and without
     * `variant_id`, `name`, `unit_price_money`, `description`, or `tax`: Flint takes those from
     * the bundle. Changing it on a retained line needs `modifiers`. minLength: 1. Example:
     * "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
    "bundle_id"?: string;
    /**
     * Description of the line. Optional on a custom line, and not allowed on a variant or bundle
     * line, which take the catalog description. minLength: 1.
     */
    "description"?: string;
    /**
     * Maximum buyer quantity. Defaults to 9999. Merchants may set any line quantity from 1 to
     * 9999. Whole-number quantity; fractional quantities are not supported. Format: int32.
     * minimum: 1. maximum: 9999. Default: 9999.
     */
    "max_quantity"?: number;
    /**
     * Minimum buyer quantity. Defaults to 1. The bounds must enclose the plan line quantity.
     * Whole-number quantity; fractional quantities are not supported. Format: int32. minimum: 1.
     * maximum: 9999. Default: 1.
     */
    "min_quantity"?: number;
    /**
     * Modifiers for a variant or bundle line. On a new line, omit to apply the catalog item's
     * default modifiers. On a retained line with the same variant or bundle, omit to keep its
     * recorded choices. Changing `variant_id` or `bundle_id` requires `modifiers`. Not allowed on
     * a custom line, and `null` is rejected. [] (Value): {@link
     * OrderLineItemModifierRequestModelInput}. A modifier selection you supply on a line item: a
     * catalog modifier by ID or a text modifier, with a quantity. [].metadata (Optional): {@link
     * MetadataRequestInput}. Caller-owned metadata for this selection, returned on the order line
     * item's modifier. Values can't be empty strings. Keys starting with flint_ are reserved for
     * Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50. [].modifier_id (Optional):
     * string. ID of the existing modifier. Treated as an opaque resource reference; accepted
     * spellings follow resource ID validation. Its resolved price and the resulting line subtotal
     * must satisfy the order money ceiling. The amount and every computed order amount must not
     * exceed 99999999 minor units ($999,999.99 USD). Flint rejects an input or calculation above
     * this ceiling with INVALID_REQUEST and detail INVALID_VALUE at the responsible input field.
     * Lower payment option limits can apply. minLength: 1. Example:
     * "mod_01KEZF7C00SAWDZBQJX5H0XW1S". [].order_line_item_modifier_id (Optional): string.
     * Existing selection ID to retain during replacement. minLength: 1. pattern:
     * ^olim_[0-9A-HJKMNP-TV-Z]{26}$. Example: "olim_01KEZF7C00YP0WSZGRAD25EB1Z". [].quantity
     * (Optional): integer. Whole-number quantity; fractional quantities are not supported. Format:
     * int64. [].text (Optional): {@link TextModifierRequestInput}. The text to use. Send it with a
     * `text` modifier. Text a buyer entered for a text modifier group on an order line item.
     * [].type (Required): string. Selects the type branch. Value enum: "catalog", "text".
     * [].oneOf[1] (Value): {@link OrderLineItemModifierInputCatalogRequestInput}. The `catalog`
     * variant of `OrderLineItemModifierInput`. [].oneOf[2] (Value): {@link
     * OrderLineItemModifierInputTextRequestInput}. The `text` variant of
     * `OrderLineItemModifierInput`.
     */
    "modifiers"?: Array<(Exclude<OrderLineItemModifierRequestModelInput & object, readonly unknown[]>)
        & (({
        "order_line_item_modifier_id"?: never;
    }))>;
    /**
     * Name of the line. Required for a custom line, and not allowed on a variant or bundle line,
     * which take the catalog name. Surrounding whitespace is trimmed before length validation. A
     * supplied value cannot be blank; use null where clearing is supported. minLength: 1.
     */
    "name"?: string;
    /**
     * Whole-number quantity; fractional quantities are not supported. Omission uses 1. Format:
     * int32. minimum: 1. maximum: 9999. Default: 1.
     */
    "quantity"?: number;
    /**
     * ID of an existing item on this plan to retain. Omit for a new item. Duplicate IDs and IDs
     * from other plans are rejected. minLength: 1. Example: "spli_01KEZF7C00H9FGC2KBRF82H87N".
     */
    "subscription_plan_line_item_id"?: string;
    /**
     * Variants a subscriber can swap this line to. Only for a variant line. At most 25, with no
     * repeats, none equal to the line's own variant, and all from the same product. On a retained
     * line with the same variant, omit to keep its current choices. maxItems: 25. uniqueItems:
     * true. [] (Value): string. minLength: 1. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "swap_variant_ids"?: Array<string>;
    /**
     * Whether the line is taxable and its tax category. A custom line needs `taxable` when it
     * sends `tax`. Not allowed on a variant or bundle line, which take the catalog tax settings. A
     * line item's tax category and whether it is taxable.
     */
    "tax"?: OrderLineItemTaxRequestInput;
    /**
     * The kind of line to keep or add. It must match the other fields: `variant` needs
     * `variant_id`, `bundle` needs `bundle_id`, and `custom` needs `name` and `unit_price_money`.
     * Value enum: "variant", "bundle", "custom".
     */
    "type": "variant" | "bundle" | "custom";
    /**
     * Price of one unit, in the plan's currency. Required for a custom line, with an amount above
     * zero, and not allowed on a variant or bundle line, which take the catalog price. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "unit_price_money"?: MoneyValueInput;
    /**
     * ID of the catalog variant to sell on this line. Send it with `type` variant and without
     * `bundle_id`, `name`, `unit_price_money`, `description`, or `tax`: Flint takes those from the
     * variant. Changing it on a retained line needs `modifiers`. minLength: 1. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id"?: string;
})
    & ((Exclude<UpdateSubscriptionPlanLineItemInputVariantInput & object, readonly unknown[]>)
    | (Exclude<UpdateSubscriptionPlanLineItemInputBundleInput & object, readonly unknown[]>)
    | (Exclude<UpdateSubscriptionPlanLineItemInputCustomInput & object, readonly unknown[]>));
/** The request body for: Update subscription plan. minProperties: 1. */
export type UpdateSubscriptionPlanRequest = ({
    /**
     * New unit of the plan's default billing period. Omit to keep it. A plan with its own
     * `billing_interval_options` must list the new default pair among them, so send options that
     * include it unless they already do. Existing subscriptions keep the interval they already
     * bill on. Value enum: "daily", "weekly", "monthly", "yearly".
     */
    "billing_interval"?: "daily" | "weekly" | "monthly" | "yearly" | (string & {});
    /**
     * New number of `billing_interval` units between charges on the plan's default pair, up to
     * 365. Omit to keep it. The same rule about `billing_interval_options` applies. Format: int32.
     */
    "billing_interval_count"?: number;
    /**
     * Omission leaves the choices unchanged. Send [] to reset to the plan's default billing
     * interval and count. Null is invalid. Prices of lines that ship are per delivery. Each option
     * charges for all deliveries in its period. Use separate plans or promotions for different
     * prices per interval. maxItems: 12. uniqueItems: true. [] (Value): {@link
     * SubscriptionIntervalOption}. A billing interval, such as every 2 months, that a plan, offer,
     * or subscription lets buyers choose. Prices of lines that ship are per delivery, and each
     * option charges for all deliveries in its period. Without a delivery cadence there is one
     * delivery per period, so every option bills the same line prices once per period. With a
     * delivery cadence, a longer period bills more deliveries of the lines that ship; other lines
     * bill once per period. For a different price per interval with no delivery cadence, create
     * separate plans.
     */
    "billing_interval_options"?: Array<SubscriptionIntervalOption>;
    /**
     * A commitment period you agree with the buyer, 1 to 120 months. Flint shows it at checkout
     * and records it on each new subscription (contract_start_at, contract_end_at). Flint does not
     * stop the buyer from canceling earlier. Format: int32. minimum: 1. maximum: 120.
     */
    "contract_term_months"?: number;
    /**
     * Delivery cadence, set together with delivery_interval_count. Null when no separate delivery
     * cadence is set; one delivery is made per billing period. Each billing option must be a whole
     * multiple in the same unit family (days/weeks or months/years), with 1 to 24 deliveries per
     * period. Existing subscriptions keep their frozen cadence. Omit both fields on PATCH to keep
     * the cadence; send both as null to clear it. Value enum: "daily", "weekly", "monthly",
     * "yearly", null.
     */
    "delivery_interval"?: "daily" | "weekly" | "monthly" | "yearly" | null | (string & {}) | null;
    /**
     * Positive number of delivery intervals between deliveries. Set or clear together with
     * delivery_interval. Null when no separate delivery cadence is set; one delivery is made per
     * billing period. Format: int32. minimum: 1.
     */
    "delivery_interval_count"?: number | null;
    /** Omission leaves this field unchanged. Null clears it. minLength: 1. */
    "description"?: string | null;
    /**
     * A fee you agree the buyer owes for canceling before the contract term ends. Flint shows it
     * at checkout and records it on each new subscription, but never charges it. To collect it,
     * charge the buyer yourself, for example with an order on their saved payment method. Requires
     * contract_term_months. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "early_termination_fee_money"?: MoneyValue;
    /**
     * Default automatic end for new subscriptions. Counts charged billing cycles, from 1 to 1200.
     * Send null for no automatic end. Existing subscriptions keep their recorded condition. Null
     * when no default automatic end is set. anyOf[1] (Value): {@link SubscriptionEndAfterCycles}.
     * A subscription automatic end measured by the total number of charged billing cycles.
     * anyOf[2] (Value): null.
     */
    "end_after"?: ((SubscriptionEndAfterCycles) | (null));
    /**
     * Resource version last read by the caller. Required when replacing an owned collection.
     * Required when any of these fields is present: images, line_items, plan_change_options.
     * Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. Omission leaves this field
     * unchanged. Null clears it. minLength: 1. maxLength: 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string | null;
    /**
     * Whether checkout buyers can name a gift recipient. Checkout sessions that are already open
     * keep the setting they were created with.
     */
    "gifts_enabled"?: boolean;
    /**
     * The complete desired gallery in display order. The first image is primary. Send [] to clear
     * the gallery. minItems: 0. maxItems: 8. [] (Value): {@link ImageRequest}. An image you supply
     * by `source_url`, with optional `alt` text and external reference.
     */
    "images"?: Array<ImageRequest>;
    /**
     * Replaces the plan's routing source. Subscriptions and payment links that already exist keep
     * the source they copied. It can't be cleared. Where you want inventory routed from: a fixed
     * Location, an inventory allocation policy, or one policy revision, selected by `type`.
     */
    "inventory_routing_source"?: InventoryRoutingSourceRequest;
    /**
     * Replaces all owned plan line items atomically. Requires expected_version. Omission leaves
     * items unchanged; an empty array or null is invalid. Include subscription_plan_line_item_id
     * to retain an item; omit it for a new server-generated ID. Omitted members are removed.
     * Existing subscriptions keep their snapshots. Retained catalog items with the same source
     * keep their catalog snapshot; omitted modifiers keep their recorded choices. minItems: 1. []
     * (Value): {@link UpdateSubscriptionPlanLineItemRequest}. A line item to keep or add when
     * updating a subscription plan. Include `subscription_plan_line_item_id` to keep an existing
     * one.
     */
    "line_items"?: Array<UpdateSubscriptionPlanLineItemRequest>;
    /**
     * Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge
     * by key, set a key to null to remove it, or set metadata to null to clear all caller-owned
     * metadata. An empty object makes no change. Values can't be empty strings. Keys starting with
     * flint_ are reserved for Flint, are not returned, and cannot be written through the public
     * API. This operation also limits the metadata object you send, before merging: at most 50
     * keys, counting null deletions, each key 1 to 256 Unicode code points, and at most 32768
     * UTF-8 bytes of keys plus values. anyOf[1] (Value): {@link MetadataPatchRequest}. Changes to
     * a caller-owned metadata map. Omit the field to leave metadata unchanged. Each key sets a
     * value, a null value deletes the key, and an empty object makes no change; send null for the
     * whole field to clear all caller-owned metadata. The resulting map is limited the same way as
     * MetadataInput: Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1
     * to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Deleting
     * a key that does not exist is allowed, so the number of operations is not itself the
     * stored-map limit. Values can't be empty strings, and keys starting with flint_ are reserved
     * for Flint. maxProperties: 50. Changes to a caller-owned metadata map. Omit the field to
     * leave metadata unchanged. Each key sets a value, a null value deletes the key, and an empty
     * object makes no change; send null for the whole field to clear all caller-owned metadata.
     * The resulting map is limited the same way as MetadataInput: Up to 50 key-value pairs. Keys
     * are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus
     * values total at most 32768 UTF-8 bytes. Deleting a key that does not exist is allowed, so
     * the number of operations is not itself the stored-map limit. Values can't be empty strings,
     * and keys starting with flint_ are reserved for Flint. anyOf[1].* (Value): string or null.
     * minLength: 1. maxLength: 4096. anyOf[2] (Value): null.
     */
    "metadata"?: (((Exclude<MetadataPatchRequest & object, readonly unknown[]>)) | (null) | (unknown));
    /**
     * New name of the plan. Omit to keep it. Can't be empty. Surrounding whitespace is trimmed
     * before length validation. A supplied value cannot be blank; use null where clearing is
     * supported. minLength: 1.
     */
    "name"?: string;
    /**
     * Plans subscribers may switch to, in display order, with the billing timing for each target.
     * Empty means plan changes are off. Omission on PATCH keeps the options; an array replaces
     * them and requires expected_version. Send [] to clear. Null is invalid. maxItems: 25. []
     * (Value): {@link SubscriptionPlanChangeOption}. A target plan subscribers may switch to and
     * the billing timing for that change.
     */
    "plan_change_options"?: Array<SubscriptionPlanChangeOption>;
    /**
     * New one-time fee charged with the first payment of a new subscription, except one that
     * continues an imported paid period. Must be above zero and in the plan's currency. Omit to
     * keep it; send `null` to remove it. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "setup_fee_money"?: MoneyValue;
    /**
     * Active plans accept new signups. Inactive plans refuse new signups with ACTION_NOT_ALLOWED
     * while existing subscriptions keep renewing. Archived plans are read-only and their status is
     * set only by DELETE /v1/subscription-plans/{subscription_plan_id}. Value enum: "active",
     * "inactive".
     */
    "status"?: "active" | "inactive" | (string & {});
    /**
     * Omission leaves the delivery methods unchanged. Send [] to remove all delivery methods. Null
     * is invalid. [] (Value): string. minLength: 1. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
     */
    "subscription_delivery_method_ids"?: Array<string>;
    /**
     * Days of free trial before the first charge, from 0 to 365; 0 means no trial. Send 0 to
     * remove the trial. Not allowed on plans with lines that ship. Format: int32. minimum: 0.
     * maximum: 365.
     */
    "trial_period_days"?: number;
});
/** The request body for: Update subscription plan. minProperties: 1. */
export type UpdateSubscriptionPlanRequestInput = ({
    /**
     * New unit of the plan's default billing period. Omit to keep it. A plan with its own
     * `billing_interval_options` must list the new default pair among them, so send options that
     * include it unless they already do. Existing subscriptions keep the interval they already
     * bill on. Value enum: "daily", "weekly", "monthly", "yearly".
     */
    "billing_interval"?: "daily" | "weekly" | "monthly" | "yearly";
    /**
     * New number of `billing_interval` units between charges on the plan's default pair, up to
     * 365. Omit to keep it. The same rule about `billing_interval_options` applies. Format: int32.
     */
    "billing_interval_count"?: number;
    /**
     * Omission leaves the choices unchanged. Send [] to reset to the plan's default billing
     * interval and count. Null is invalid. Prices of lines that ship are per delivery. Each option
     * charges for all deliveries in its period. Use separate plans or promotions for different
     * prices per interval. maxItems: 12. uniqueItems: true. [] (Value): {@link
     * SubscriptionIntervalOptionRequestInput}. A billing interval, such as every 2 months, that a
     * plan, offer, or subscription lets buyers choose. Prices of lines that ship are per delivery,
     * and each option charges for all deliveries in its period. Without a delivery cadence there
     * is one delivery per period, so every option bills the same line prices once per period. With
     * a delivery cadence, a longer period bills more deliveries of the lines that ship; other
     * lines bill once per period. For a different price per interval with no delivery cadence,
     * create separate plans.
     */
    "billing_interval_options"?: Array<SubscriptionIntervalOptionRequestInput>;
    /**
     * A commitment period you agree with the buyer, 1 to 120 months. Flint shows it at checkout
     * and records it on each new subscription (contract_start_at, contract_end_at). Flint does not
     * stop the buyer from canceling earlier. Format: int32. minimum: 1. maximum: 120.
     */
    "contract_term_months"?: number;
    /**
     * Delivery cadence, set together with delivery_interval_count. Null when no separate delivery
     * cadence is set; one delivery is made per billing period. Each billing option must be a whole
     * multiple in the same unit family (days/weeks or months/years), with 1 to 24 deliveries per
     * period. Existing subscriptions keep their frozen cadence. Omit both fields on PATCH to keep
     * the cadence; send both as null to clear it. Value enum: "daily", "weekly", "monthly",
     * "yearly", null.
     */
    "delivery_interval"?: "daily" | "weekly" | "monthly" | "yearly" | null;
    /**
     * Positive number of delivery intervals between deliveries. Set or clear together with
     * delivery_interval. Null when no separate delivery cadence is set; one delivery is made per
     * billing period. Format: int32. minimum: 1.
     */
    "delivery_interval_count"?: number | null;
    /** Omission leaves this field unchanged. Null clears it. minLength: 1. */
    "description"?: string | null;
    /**
     * A fee you agree the buyer owes for canceling before the contract term ends. Flint shows it
     * at checkout and records it on each new subscription, but never charges it. To collect it,
     * charge the buyer yourself, for example with an order on their saved payment method. Requires
     * contract_term_months. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "early_termination_fee_money"?: MoneyValueInput;
    /**
     * Default automatic end for new subscriptions. Counts charged billing cycles, from 1 to 1200.
     * Send null for no automatic end. Existing subscriptions keep their recorded condition. Null
     * when no default automatic end is set. anyOf[1] (Value): {@link
     * SubscriptionEndAfterCyclesRequestInput}. A subscription automatic end measured by the total
     * number of charged billing cycles. anyOf[2] (Value): null.
     */
    "end_after"?: ((SubscriptionEndAfterCyclesRequestInput) | (null));
    /**
     * Resource version last read by the caller. Required when replacing an owned collection.
     * Required when any of these fields is present: images, line_items, plan_change_options.
     * Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. Omission leaves this field
     * unchanged. Null clears it. minLength: 1. maxLength: 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string | null;
    /**
     * Whether checkout buyers can name a gift recipient. Checkout sessions that are already open
     * keep the setting they were created with.
     */
    "gifts_enabled"?: boolean;
    /**
     * The complete desired gallery in display order. The first image is primary. Send [] to clear
     * the gallery. minItems: 0. maxItems: 8. [] (Value): {@link ImageRequestInput}. An image you
     * supply by `source_url`, with optional `alt` text and external reference.
     */
    "images"?: Array<ImageRequestInput>;
    /**
     * Replaces the plan's routing source. Subscriptions and payment links that already exist keep
     * the source they copied. It can't be cleared. Where you want inventory routed from: a fixed
     * Location, an inventory allocation policy, or one policy revision, selected by `type`.
     */
    "inventory_routing_source"?: InventoryRoutingSourceRequestInput;
    /**
     * Replaces all owned plan line items atomically. Requires expected_version. Omission leaves
     * items unchanged; an empty array or null is invalid. Include subscription_plan_line_item_id
     * to retain an item; omit it for a new server-generated ID. Omitted members are removed.
     * Existing subscriptions keep their snapshots. Retained catalog items with the same source
     * keep their catalog snapshot; omitted modifiers keep their recorded choices. minItems: 1. []
     * (Value): {@link UpdateSubscriptionPlanLineItemRequestInput}. A line item to keep or add when
     * updating a subscription plan. Include `subscription_plan_line_item_id` to keep an existing
     * one.
     */
    "line_items"?: Array<UpdateSubscriptionPlanLineItemRequestInput>;
    /**
     * Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge
     * by key, set a key to null to remove it, or set metadata to null to clear all caller-owned
     * metadata. An empty object makes no change. Values can't be empty strings. Keys starting with
     * flint_ are reserved for Flint, are not returned, and cannot be written through the public
     * API. This operation also limits the metadata object you send, before merging: at most 50
     * keys, counting null deletions, each key 1 to 256 Unicode code points, and at most 32768
     * UTF-8 bytes of keys plus values. anyOf[1] (Value): {@link MetadataPatchRequestInput}.
     * Changes to a caller-owned metadata map. Omit the field to leave metadata unchanged. Each key
     * sets a value, a null value deletes the key, and an empty object makes no change; send null
     * for the whole field to clear all caller-owned metadata. The resulting map is limited the
     * same way as MetadataInput: Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points,
     * values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8
     * bytes. Deleting a key that does not exist is allowed, so the number of operations is not
     * itself the stored-map limit. Values can't be empty strings, and keys starting with flint_
     * are reserved for Flint. maxProperties: 50. Changes to a caller-owned metadata map. Omit the
     * field to leave metadata unchanged. Each key sets a value, a null value deletes the key, and
     * an empty object makes no change; send null for the whole field to clear all caller-owned
     * metadata. The resulting map is limited the same way as MetadataInput: Up to 50 key-value
     * pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and
     * keys plus values total at most 32768 UTF-8 bytes. Deleting a key that does not exist is
     * allowed, so the number of operations is not itself the stored-map limit. Values can't be
     * empty strings, and keys starting with flint_ are reserved for Flint. anyOf[1].* (Value):
     * string or null. minLength: 1. maxLength: 4096. anyOf[2] (Value): null.
     */
    "metadata"?: (((Exclude<MetadataPatchRequestInput & object, readonly unknown[]>)) | (null));
    /**
     * New name of the plan. Omit to keep it. Can't be empty. Surrounding whitespace is trimmed
     * before length validation. A supplied value cannot be blank; use null where clearing is
     * supported. minLength: 1.
     */
    "name"?: string;
    /**
     * Plans subscribers may switch to, in display order, with the billing timing for each target.
     * Empty means plan changes are off. Omission on PATCH keeps the options; an array replaces
     * them and requires expected_version. Send [] to clear. Null is invalid. maxItems: 25. []
     * (Value): {@link SubscriptionPlanChangeOptionRequestInput}. A target plan subscribers may
     * switch to and the billing timing for that change.
     */
    "plan_change_options"?: Array<SubscriptionPlanChangeOptionRequestInput>;
    /**
     * New one-time fee charged with the first payment of a new subscription, except one that
     * continues an imported paid period. Must be above zero and in the plan's currency. Omit to
     * keep it; send `null` to remove it. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "setup_fee_money"?: MoneyValueInput;
    /**
     * Active plans accept new signups. Inactive plans refuse new signups with ACTION_NOT_ALLOWED
     * while existing subscriptions keep renewing. Archived plans are read-only and their status is
     * set only by DELETE /v1/subscription-plans/{subscription_plan_id}. Value enum: "active",
     * "inactive".
     */
    "status"?: "active" | "inactive";
    /**
     * Omission leaves the delivery methods unchanged. Send [] to remove all delivery methods. Null
     * is invalid. [] (Value): string. minLength: 1. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
     */
    "subscription_delivery_method_ids"?: Array<string>;
    /**
     * Days of free trial before the first charge, from 0 to 365; 0 means no trial. Send 0 to
     * remove the trial. Not allowed on plans with lines that ship. Format: int32. minimum: 0.
     * maximum: 365.
     */
    "trial_period_days"?: number;
});
/** The request body for: Update subscription. minProperties: 1. */
export type UpdateSubscriptionRequest = ({
    /**
     * New billing interval unit. Send it with `billing_interval_count`; the pair must be one the
     * subscription's `billing_interval_options` offer. It applies from the next renewal that has
     * not been paid, and it is refused while a plan change is scheduled. Not accepted as null.
     * Value enum: "daily", "weekly", "monthly", "yearly".
     */
    "billing_interval"?: "daily" | "weekly" | "monthly" | "yearly" | (string & {});
    /**
     * Number of `billing_interval` units between charges, from 1 to 365. Send it with
     * `billing_interval`. Not accepted as null. minimum: 1. maximum: 365.
     */
    "billing_interval_count"?: number;
    /**
     * Changes who supplies billing dates and, for a Flint-owned schedule, the next billing date.
     * Send it alone: combining it with other subscription fields is refused. A closed
     * owner-specific billing schedule update.
     */
    "billing_schedule"?: SubscriptionBillingScheduleUpdateRequest;
    /**
     * Send `false` to undo a scheduled cancellation. `true` isn't accepted: schedule a
     * cancellation with POST /v1/subscriptions/{subscription_id}/cancel. Not accepted as null.
     * Value enum: false.
     */
    "cancel_at_period_end"?: boolean;
    /**
     * Replaces the whole saved delivery preference. The delivery method must be one the
     * subscription's plan offers. Not accepted as null. The delivery preference to set on a
     * subscription: delivery method, type, destination, and recipient.
     */
    "delivery"?: SubscriptionDeliveryRequest;
    /**
     * Replace the complete automatic end condition, or send null to clear it. Requires
     * expected_version. Buyers cannot change this field. anyOf[1] (Value): {@link
     * SubscriptionEndAfterRequest}. An automatic end condition to assign to a subscription,
     * measured by charged billing cycles or a local calendar date. anyOf[2] (Value): null.
     */
    "end_after"?: ((SubscriptionEndAfterRequest) | (null) | (unknown));
    /**
     * The current subscription version. Required when end_after is present. Format: uint64.
     * minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. Send null to clear it.
     * minLength: 1. maxLength: 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string | null;
    /**
     * Replace the whole gift recipient, or send null to clear it. There are no partial changes.
     * Send expected_version to guard against concurrent changes. Buyers cannot change this field.
     * anyOf[1] (Value): {@link SubscriptionGiftRecipientRequest}. Who receives a gift
     * subscription. Sending it replaces the whole recipient. anyOf[2] (Value): null.
     */
    "gift_recipient"?: ((SubscriptionGiftRecipientRequest) | (null));
    /**
     * Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge
     * by key, set a key to null to remove it, or set metadata to null to clear all caller-owned
     * metadata. An empty object makes no change. Values can't be empty strings. Keys starting with
     * flint_ are reserved for Flint, are not returned, and cannot be written through the public
     * API. This operation also limits the metadata object you send, before merging: at most 50
     * keys, counting null deletions, each key 1 to 256 Unicode code points, and at most 32768
     * UTF-8 bytes of keys plus values. anyOf[1] (Value): {@link MetadataPatchRequest}. Changes to
     * a caller-owned metadata map. Omit the field to leave metadata unchanged. Each key sets a
     * value, a null value deletes the key, and an empty object makes no change; send null for the
     * whole field to clear all caller-owned metadata. The resulting map is limited the same way as
     * MetadataInput: Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1
     * to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Deleting
     * a key that does not exist is allowed, so the number of operations is not itself the
     * stored-map limit. Values can't be empty strings, and keys starting with flint_ are reserved
     * for Flint. maxProperties: 50. Changes to a caller-owned metadata map. Omit the field to
     * leave metadata unchanged. Each key sets a value, a null value deletes the key, and an empty
     * object makes no change; send null for the whole field to clear all caller-owned metadata.
     * The resulting map is limited the same way as MetadataInput: Up to 50 key-value pairs. Keys
     * are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus
     * values total at most 32768 UTF-8 bytes. Deleting a key that does not exist is allowed, so
     * the number of operations is not itself the stored-map limit. Values can't be empty strings,
     * and keys starting with flint_ are reserved for Flint. anyOf[1].* (Value): string or null.
     * minLength: 1. maxLength: 4096. anyOf[2] (Value): null.
     */
    "metadata"?: (((Exclude<MetadataPatchRequest & object, readonly unknown[]>)) | (null) | (unknown));
    /**
     * ID of the saved payment method to charge for renewals. It must belong to the subscription's
     * customer, be active, and allow charges without the buyer present. Not accepted as null.
     * minLength: 1. Example: "pm_01KEZF7C0034B248TXXE4NXYFZ".
     */
    "payment_method_id"?: string;
    /**
     * Send null to cancel a scheduled plan change and keep the current plan. Omit to leave it
     * unchanged. Schedule or replace through change-plan.
     */
    "scheduled_plan_change"?: null;
    /**
     * Replace the subscription's tax as a whole, or send null to clear it, so its orders follow
     * your settings again. Orders Flint creates after the change use it; an open renewal order
     * keeps the tax it was created with. Buyers cannot change this field. anyOf[1] (Value): {@link
     * SubscriptionTaxRequest}. Replaced as a whole: send every field you want to keep. anyOf[2]
     * (Value): null.
     */
    "tax"?: ((SubscriptionTaxRequest) | (null));
});
/** The request body for: Update subscription. minProperties: 1. */
export type UpdateSubscriptionRequestInput = ({
    /**
     * New billing interval unit. Send it with `billing_interval_count`; the pair must be one the
     * subscription's `billing_interval_options` offer. It applies from the next renewal that has
     * not been paid, and it is refused while a plan change is scheduled. Not accepted as null.
     * Value enum: "daily", "weekly", "monthly", "yearly".
     */
    "billing_interval"?: "daily" | "weekly" | "monthly" | "yearly";
    /**
     * Number of `billing_interval` units between charges, from 1 to 365. Send it with
     * `billing_interval`. Not accepted as null. minimum: 1. maximum: 365.
     */
    "billing_interval_count"?: number;
    /**
     * Changes who supplies billing dates and, for a Flint-owned schedule, the next billing date.
     * Send it alone: combining it with other subscription fields is refused. A closed
     * owner-specific billing schedule update.
     */
    "billing_schedule"?: SubscriptionBillingScheduleUpdateRequestInput;
    /**
     * Send `false` to undo a scheduled cancellation. `true` isn't accepted: schedule a
     * cancellation with POST /v1/subscriptions/{subscription_id}/cancel. Not accepted as null.
     * Value enum: false.
     */
    "cancel_at_period_end"?: false;
    /**
     * Replaces the whole saved delivery preference. The delivery method must be one the
     * subscription's plan offers. Not accepted as null. The delivery preference to set on a
     * subscription: delivery method, type, destination, and recipient.
     */
    "delivery"?: SubscriptionDeliveryRequestInput;
    /**
     * Replace the complete automatic end condition, or send null to clear it. Requires
     * expected_version. Buyers cannot change this field. anyOf[1] (Value): {@link
     * SubscriptionEndAfterRequestInput}. An automatic end condition to assign to a subscription,
     * measured by charged billing cycles or a local calendar date. anyOf[2] (Value): null.
     */
    "end_after"?: ((SubscriptionEndAfterRequestInput) | (null));
    /**
     * The current subscription version. Required when end_after is present. Format: uint64.
     * minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. Send null to clear it.
     * minLength: 1. maxLength: 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string | null;
    /**
     * Replace the whole gift recipient, or send null to clear it. There are no partial changes.
     * Send expected_version to guard against concurrent changes. Buyers cannot change this field.
     * anyOf[1] (Value): {@link SubscriptionGiftRecipientRequestInput}. Who receives a gift
     * subscription. Sending it replaces the whole recipient. anyOf[2] (Value): null.
     */
    "gift_recipient"?: ((SubscriptionGiftRecipientRequestInput) | (null));
    /**
     * Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge
     * by key, set a key to null to remove it, or set metadata to null to clear all caller-owned
     * metadata. An empty object makes no change. Values can't be empty strings. Keys starting with
     * flint_ are reserved for Flint, are not returned, and cannot be written through the public
     * API. This operation also limits the metadata object you send, before merging: at most 50
     * keys, counting null deletions, each key 1 to 256 Unicode code points, and at most 32768
     * UTF-8 bytes of keys plus values. anyOf[1] (Value): {@link MetadataPatchRequestInput}.
     * Changes to a caller-owned metadata map. Omit the field to leave metadata unchanged. Each key
     * sets a value, a null value deletes the key, and an empty object makes no change; send null
     * for the whole field to clear all caller-owned metadata. The resulting map is limited the
     * same way as MetadataInput: Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points,
     * values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8
     * bytes. Deleting a key that does not exist is allowed, so the number of operations is not
     * itself the stored-map limit. Values can't be empty strings, and keys starting with flint_
     * are reserved for Flint. maxProperties: 50. Changes to a caller-owned metadata map. Omit the
     * field to leave metadata unchanged. Each key sets a value, a null value deletes the key, and
     * an empty object makes no change; send null for the whole field to clear all caller-owned
     * metadata. The resulting map is limited the same way as MetadataInput: Up to 50 key-value
     * pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and
     * keys plus values total at most 32768 UTF-8 bytes. Deleting a key that does not exist is
     * allowed, so the number of operations is not itself the stored-map limit. Values can't be
     * empty strings, and keys starting with flint_ are reserved for Flint. anyOf[1].* (Value):
     * string or null. minLength: 1. maxLength: 4096. anyOf[2] (Value): null.
     */
    "metadata"?: (((Exclude<MetadataPatchRequestInput & object, readonly unknown[]>)) | (null));
    /**
     * ID of the saved payment method to charge for renewals. It must belong to the subscription's
     * customer, be active, and allow charges without the buyer present. Not accepted as null.
     * minLength: 1. Example: "pm_01KEZF7C0034B248TXXE4NXYFZ".
     */
    "payment_method_id"?: string;
    /**
     * Send null to cancel a scheduled plan change and keep the current plan. Omit to leave it
     * unchanged. Schedule or replace through change-plan.
     */
    "scheduled_plan_change"?: null;
    /**
     * Replace the subscription's tax as a whole, or send null to clear it, so its orders follow
     * your settings again. Orders Flint creates after the change use it; an open renewal order
     * keeps the tax it was created with. Buyers cannot change this field. anyOf[1] (Value): {@link
     * SubscriptionTaxRequestInput}. Replaced as a whole: send every field you want to keep.
     * anyOf[2] (Value): null.
     */
    "tax"?: ((SubscriptionTaxRequestInput) | (null));
});
/** The request body for: Update a tax calculation callback. minProperties: 1. */
export type UpdateTaxCalculationCallbackRequest = ({
    /**
     * Changes to the callback's configuration. Requires expected_version. Changes to a tax
     * calculation callback's configuration. Only the keys you send change; keys you leave out keep
     * their current values. Null restores an optional key's default. Requires expected_version.
     * minProperties: 1.
     */
    "configuration"?: TaxCalculationCallbackConfigurationPatchRequest;
    /**
     * The `version` you last read. A stale value is refused with a version conflict. Required with
     * `configuration` and `signing_methods`. Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. Send null to clear it.
     * minLength: 1. maxLength: 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string | null;
    /**
     * New label for the callback. Surrounding whitespace is trimmed before length validation. A
     * supplied value cannot be blank; use null where clearing is supported. minLength: 1.
     */
    "name"?: string;
    /**
     * How Flint signs requests to your endpoint: `jwt` for a bearer JWT you verify with Flint's
     * public keys, `hmac` for a shared secret, or both. Replaces the whole set. Requires
     * expected_version. Removing hmac deletes the current and previous secrets. minItems: 1.
     * uniqueItems: true. [] enum: "jwt", "hmac". [] (Value): {@link WebhookSigningMethod}. How
     * Flint signs requests to this endpoint. Value enum: "jwt", "hmac".
     */
    "signing_methods"?: Array<WebhookSigningMethod>;
    /**
     * Activates or deactivates the callback. Send it alone, with at most `expected_version`. -
     * `active`: Makes the callback selectable in `tax.calculation_callback_id`. - `inactive`:
     * Stops the callback from being selected. Refused while your settings select it. Value enum:
     * "active", "inactive".
     */
    "status"?: "active" | "inactive" | (string & {});
})
    & (({
    /**
     * New label for the callback. Surrounding whitespace is trimmed before length validation. A
     * supplied value cannot be blank; use null where clearing is supported. minLength: 1.
     */
    "name": string;
})
    | ({
    /**
     * Caller-owned identifier for this resource in an external system. Send null to clear it.
     * minLength: 1. maxLength: 255. Example: "warehouse-1842".
     */
    "external_reference_id": string | null;
})
    | ({
    /**
     * Changes to the callback's configuration. Requires expected_version. Changes to a tax
     * calculation callback's configuration. Only the keys you send change; keys you leave out keep
     * their current values. Null restores an optional key's default. Requires expected_version.
     * minProperties: 1.
     */
    "configuration": TaxCalculationCallbackConfigurationPatchRequest;
})
    | ({
    /**
     * How Flint signs requests to your endpoint: `jwt` for a bearer JWT you verify with Flint's
     * public keys, `hmac` for a shared secret, or both. Replaces the whole set. Requires
     * expected_version. Removing hmac deletes the current and previous secrets. minItems: 1.
     * uniqueItems: true. [] enum: "jwt", "hmac". [] (Value): {@link WebhookSigningMethod}. How
     * Flint signs requests to this endpoint. Value enum: "jwt", "hmac".
     */
    "signing_methods": Array<WebhookSigningMethod>;
})
    | ({
    /**
     * Activates or deactivates the callback. Send it alone, with at most `expected_version`. -
     * `active`: Makes the callback selectable in `tax.calculation_callback_id`. - `inactive`:
     * Stops the callback from being selected. Refused while your settings select it. Value enum:
     * "active", "inactive".
     */
    "status": "active" | "inactive" | (string & {});
})
    | (Record<string, unknown>));
/** The request body for: Update a tax calculation callback. minProperties: 1. */
export type UpdateTaxCalculationCallbackRequestInput = ({
    /**
     * Changes to the callback's configuration. Requires expected_version. Changes to a tax
     * calculation callback's configuration. Only the keys you send change; keys you leave out keep
     * their current values. Null restores an optional key's default. Requires expected_version.
     * minProperties: 1.
     */
    "configuration"?: TaxCalculationCallbackConfigurationPatchRequestInput;
    /**
     * The `version` you last read. A stale value is refused with a version conflict. Required with
     * `configuration` and `signing_methods`. Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. Send null to clear it.
     * minLength: 1. maxLength: 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string | null;
    /**
     * New label for the callback. Surrounding whitespace is trimmed before length validation. A
     * supplied value cannot be blank; use null where clearing is supported. minLength: 1.
     */
    "name"?: string;
    /**
     * How Flint signs requests to your endpoint: `jwt` for a bearer JWT you verify with Flint's
     * public keys, `hmac` for a shared secret, or both. Replaces the whole set. Requires
     * expected_version. Removing hmac deletes the current and previous secrets. minItems: 1.
     * uniqueItems: true. [] enum: "jwt", "hmac". [] (Value): {@link WebhookSigningMethodInput}.
     * How Flint signs requests to this endpoint. Value enum: "jwt", "hmac".
     */
    "signing_methods"?: Array<WebhookSigningMethodInput>;
    /**
     * Activates or deactivates the callback. Send it alone, with at most `expected_version`. -
     * `active`: Makes the callback selectable in `tax.calculation_callback_id`. - `inactive`:
     * Stops the callback from being selected. Refused while your settings select it. Value enum:
     * "active", "inactive".
     */
    "status"?: "active" | "inactive";
})
    & (({
    /**
     * New label for the callback. Surrounding whitespace is trimmed before length validation. A
     * supplied value cannot be blank; use null where clearing is supported. minLength: 1.
     */
    "name": string;
})
    | ({
    /**
     * Caller-owned identifier for this resource in an external system. Send null to clear it.
     * minLength: 1. maxLength: 255. Example: "warehouse-1842".
     */
    "external_reference_id": string | null;
})
    | ({
    /**
     * Changes to the callback's configuration. Requires expected_version. Changes to a tax
     * calculation callback's configuration. Only the keys you send change; keys you leave out keep
     * their current values. Null restores an optional key's default. Requires expected_version.
     * minProperties: 1.
     */
    "configuration": TaxCalculationCallbackConfigurationPatchRequestInput;
})
    | ({
    /**
     * How Flint signs requests to your endpoint: `jwt` for a bearer JWT you verify with Flint's
     * public keys, `hmac` for a shared secret, or both. Replaces the whole set. Requires
     * expected_version. Removing hmac deletes the current and previous secrets. minItems: 1.
     * uniqueItems: true. [] enum: "jwt", "hmac". [] (Value): {@link WebhookSigningMethodInput}.
     * How Flint signs requests to this endpoint. Value enum: "jwt", "hmac".
     */
    "signing_methods": Array<WebhookSigningMethodInput>;
})
    | ({
    /**
     * Activates or deactivates the callback. Send it alone, with at most `expected_version`. -
     * `active`: Makes the callback selectable in `tax.calculation_callback_id`. - `inactive`:
     * Stops the callback from being selected. Refused while your settings select it. Value enum:
     * "active", "inactive".
     */
    "status": "active" | "inactive";
}));
/**
 * Update at least one of registration_number, start_date or end_date. Pending and rejected
 * registrations allow all three fields; registration_number and start_date require a connection
 * that is not active. Scheduled and active registrations allow only end_date. A pending or
 * rejected registration whose tax-account copy exists or may have been created cannot change
 * start_date; delete it and create it again. Ended registrations cannot be changed. A version
 * fence by itself is not a change. minProperties: 1.
 */
export type UpdateTaxRegistrationRequest = ({
    /**
     * Last day the registration applies, inclusive. Must be on or after start_date and today
     * (UTC). Send null to clear the end date before the registration has ended. Format: date.
     * minLength: 1. Example: "2026-08-02".
     */
    "end_date"?: string | null;
    /**
     * Resource version last read by the caller. Omit to apply the change to the current resource.
     * Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * First day the registration applies, inclusive. Flint checks it against each sale's local
     * date. Status and validation use the UTC date. May be up to 365 days in the future. Format:
     * date. minLength: 1. Example: "2026-08-02".
     */
    "start_date"?: string;
})
    & ((unknown)
    | ({
    /**
     * First day the registration applies, inclusive. Flint checks it against each sale's local
     * date. Status and validation use the UTC date. May be up to 365 days in the future. Format:
     * date. minLength: 1. Example: "2026-08-02".
     */
    "start_date": string;
})
    | ({
    /**
     * Last day the registration applies, inclusive. Must be on or after start_date and today
     * (UTC). Send null to clear the end date before the registration has ended. Format: date.
     * minLength: 1. Example: "2026-08-02".
     */
    "end_date": string | null;
})
    | (Record<string, unknown>));
/**
 * Update at least one of registration_number, start_date or end_date. Pending and rejected
 * registrations allow all three fields; registration_number and start_date require a connection
 * that is not active. Scheduled and active registrations allow only end_date. A pending or
 * rejected registration whose tax-account copy exists or may have been created cannot change
 * start_date; delete it and create it again. Ended registrations cannot be changed. A version
 * fence by itself is not a change. minProperties: 1.
 */
export type UpdateTaxRegistrationRequestInput = ({
    /**
     * Last day the registration applies, inclusive. Must be on or after start_date and today
     * (UTC). Send null to clear the end date before the registration has ended. Format: date.
     * minLength: 1. Example: "2026-08-02".
     */
    "end_date"?: string | null;
    /**
     * Resource version last read by the caller. Omit to apply the change to the current resource.
     * Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Seller's tax registration number as issued: letters and digits with optional spaces,
     * hyphens, periods or slashes. The original format is stored; separators are omitted when
     * confirming with the tax account. For EU, the non-Union OSS number: EU followed by nine
     * digits. Write-only; responses return only its last four characters. minLength: 1. maxLength:
     * 255.
     */
    "registration_number"?: string;
    /**
     * First day the registration applies, inclusive. Flint checks it against each sale's local
     * date. Status and validation use the UTC date. May be up to 365 days in the future. Format:
     * date. minLength: 1. Example: "2026-08-02".
     */
    "start_date"?: string;
})
    & (({
    /**
     * Seller's tax registration number as issued: letters and digits with optional spaces,
     * hyphens, periods or slashes. The original format is stored; separators are omitted when
     * confirming with the tax account. For EU, the non-Union OSS number: EU followed by nine
     * digits. Write-only; responses return only its last four characters. minLength: 1. maxLength:
     * 255.
     */
    "registration_number": string;
})
    | ({
    /**
     * First day the registration applies, inclusive. Flint checks it against each sale's local
     * date. Status and validation use the UTC date. May be up to 365 days in the future. Format:
     * date. minLength: 1. Example: "2026-08-02".
     */
    "start_date": string;
})
    | ({
    /**
     * Last day the registration applies, inclusive. Must be on or after start_date and today
     * (UTC). Send null to clear the end date before the registration has ended. Format: date.
     * minLength: 1. Example: "2026-08-02".
     */
    "end_date": string | null;
}));
/** The attendee name to set or clear. minProperties: 1. */
export type UpdateTicketRequest = {
    /**
     * The attendee name, 1 to 200 characters after surrounding whitespace is trimmed. Send null to
     * clear it. minLength: 1. maxLength: 200.
     */
    "attendee_name": string | null;
    /**
     * The ticket version last read. The change applies only while the ticket is at this version; a
     * stale value returns 409 VERSION_CONFLICT, even when the ticket's status would also refuse
     * the change. Door scanners usually omit it. Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
};
/** The attendee name to set or clear. minProperties: 1. */
export type UpdateTicketRequestInput = UpdateTicketRequest;
/** The request body for: Update webhook endpoint. minProperties: 1. */
export type UpdateWebhookEndpointRequest = ({
    /**
     * Set default to follow the merchant default, or a supported YYYY-MM-DD version to pin this
     * endpoint. Omit to leave unchanged. Null is not accepted. Switching between a pin and default
     * clears the rollback offer. minLength: 1.
     */
    "api_version"?: string;
    /**
     * Endpoint description. Omit to leave unchanged; null clears it. Send null to clear it.
     * minLength: 1. maxLength: 500.
     */
    "description"?: string | null;
    /**
     * Event types to deliver. Send ["*"] for every type the endpoint's event_sources deliver,
     * including types added later; * must be the only entry and is not available with
     * installed_merchants. At least one entry is required. Use only current event type names;
     * previous and removed names are rejected. Stored subscriptions map previous names permanently
     * and drop removed names on read. See the [changelog](/docs/changelog). minItems: 1. []
     * (Value): string. minLength: 1.
     */
    "enabled_events"?: Array<string>;
    /**
     * Event sources this endpoint receives. Defaults to merchant. Use partner_app for app
     * lifecycle events and installed_merchants for events from merchants that installed the
     * partner app. [] enum: "merchant", "partner_app", "installed_merchants". [] (Value): string.
     * Value enum: "merchant", "partner_app", "installed_merchants".
     */
    "event_sources"?: Array<"merchant" | "partner_app" | "installed_merchants" | (string & {})>;
    /**
     * Apply api_version only if this matches the resource's current api_version. A mismatch
     * returns HTTP 409. Requires api_version; null is not accepted. minLength: 1.
     */
    "expected_api_version"?: string;
    /**
     * Resource version last read by the caller. Required when enabled_events, event_sources,
     * installed_merchant_modes, or signing_methods is present, including an empty array. Optional
     * for scalar updates. Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Modes of installed-merchant events this endpoint receives. Required when event_sources
     * includes installed_merchants and omitted otherwise. Partner app lifecycle events are
     * delivered regardless of these modes. minItems: 1. maxItems: 2. uniqueItems: true. [] enum:
     * "test", "live". [] (Value): string. Value enum: "test", "live".
     */
    "installed_merchant_modes"?: Array<"test" | "live" | (string & {})>;
    /**
     * Partner app that owns partner_app or installed_merchants event sources. minLength: 1.
     * Example: "papp_01KEZF7C00Y8VMXYZ1GNPP3WHV".
     */
    "partner_app_id"?: string;
    /**
     * Replaces the signing methods. Removing hmac deletes all shared secrets. Adding hmac when no
     * secret exists issues the first secret and returns it once in this response. Omit to leave
     * unchanged. minItems: 1. uniqueItems: true. [] enum: "jwt", "hmac". [] (Value): {@link
     * WebhookSigningMethod}. How Flint signs requests to this endpoint. Value enum: "jwt", "hmac".
     */
    "signing_methods"?: Array<WebhookSigningMethod>;
    /**
     * Whether this endpoint receives events. Setting inactive suppresses pending deliveries. Omit
     * to leave unchanged. Value enum: "active", "inactive".
     */
    "status"?: "active" | "inactive" | (string & {});
    /**
     * Public HTTPS URL to receive webhook deliveries. Omit to leave unchanged. minLength: 1.
     * maxLength: 2048.
     */
    "url"?: string;
});
/** The request body for: Update webhook endpoint. minProperties: 1. */
export type UpdateWebhookEndpointRequestInput = ({
    /**
     * Set default to follow the merchant default, or a supported YYYY-MM-DD version to pin this
     * endpoint. Omit to leave unchanged. Null is not accepted. Switching between a pin and default
     * clears the rollback offer. minLength: 1.
     */
    "api_version"?: string;
    /**
     * Endpoint description. Omit to leave unchanged; null clears it. Send null to clear it.
     * minLength: 1. maxLength: 500.
     */
    "description"?: string | null;
    /**
     * Event types to deliver. Send ["*"] for every type the endpoint's event_sources deliver,
     * including types added later; * must be the only entry and is not available with
     * installed_merchants. At least one entry is required. Use only current event type names;
     * previous and removed names are rejected. Stored subscriptions map previous names permanently
     * and drop removed names on read. See the [changelog](/docs/changelog). minItems: 1. []
     * (Value): string. minLength: 1.
     */
    "enabled_events"?: Array<string>;
    /**
     * Event sources this endpoint receives. Defaults to merchant. Use partner_app for app
     * lifecycle events and installed_merchants for events from merchants that installed the
     * partner app. [] enum: "merchant", "partner_app", "installed_merchants". [] (Value): string.
     * Value enum: "merchant", "partner_app", "installed_merchants".
     */
    "event_sources"?: Array<"merchant" | "partner_app" | "installed_merchants">;
    /**
     * Apply api_version only if this matches the resource's current api_version. A mismatch
     * returns HTTP 409. Requires api_version; null is not accepted. minLength: 1.
     */
    "expected_api_version"?: string;
    /**
     * Resource version last read by the caller. Required when enabled_events, event_sources,
     * installed_merchant_modes, or signing_methods is present, including an empty array. Optional
     * for scalar updates. Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Modes of installed-merchant events this endpoint receives. Required when event_sources
     * includes installed_merchants and omitted otherwise. Partner app lifecycle events are
     * delivered regardless of these modes. minItems: 1. maxItems: 2. uniqueItems: true. [] enum:
     * "test", "live". [] (Value): string. Value enum: "test", "live".
     */
    "installed_merchant_modes"?: Array<"test" | "live">;
    /**
     * Partner app that owns partner_app or installed_merchants event sources. minLength: 1.
     * Example: "papp_01KEZF7C00Y8VMXYZ1GNPP3WHV".
     */
    "partner_app_id"?: string;
    /**
     * Replaces the signing methods. Removing hmac deletes all shared secrets. Adding hmac when no
     * secret exists issues the first secret and returns it once in this response. Omit to leave
     * unchanged. minItems: 1. uniqueItems: true. [] enum: "jwt", "hmac". [] (Value): {@link
     * WebhookSigningMethodInput}. How Flint signs requests to this endpoint. Value enum: "jwt",
     * "hmac".
     */
    "signing_methods"?: Array<WebhookSigningMethodInput>;
    /**
     * Whether this endpoint receives events. Setting inactive suppresses pending deliveries. Omit
     * to leave unchanged. Value enum: "active", "inactive".
     */
    "status"?: "active" | "inactive";
    /**
     * Public HTTPS URL to receive webhook deliveries. Omit to leave unchanged. minLength: 1.
     * maxLength: 2048.
     */
    "url"?: string;
});
/** The request body for: Update a workload identity. minProperties: 1. */
export type UpdateWorkloadIdentityRequest = ({
    /**
     * Bounded value array, at most 10. Defaults to []. Any glob requires an exact claim condition;
     * shared issuers require tenant pinning. maxItems: 10. uniqueItems: true. [] (Value): {@link
     * WorkloadIdentityClaimConditionRequest}. A condition to match one top-level scalar claim in
     * the workload's identity token. Omitted match defaults to exact.
     */
    "claim_conditions"?: Array<WorkloadIdentityClaimConditionRequest>;
    /**
     * Version most recently read. Required when claim_conditions or scopes is supplied; optional
     * for scalar updates. Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * A label that helps you tell workload identities apart, 1 to 100 characters. Omit to keep the
     * current name. Surrounding whitespace is trimmed before length validation. A supplied value
     * cannot be blank; use null where clearing is supported. minLength: 1. maxLength: 100.
     */
    "name"?: string;
    /**
     * Complete scope set to grant. API keys, CLI login tokens and workload tokens may grant only
     * scopes they hold in the same environment. Only a full-access key or a freshly verified user
     * session can grant accounts.api_keys.write, accounts.workload_identities.write or
     * commerce.gift_cards.secrets.write, in every mode. [] enum: "accounts.api_keys.read",
     * "accounts.api_keys.write", "accounts.devices.read", "accounts.devices.write",
     * "accounts.workload_identities.read", "accounts.workload_identities.write", "analytics.read",
     * "checkouts.checkout_sessions.read", "checkouts.checkout_sessions.write",
     * "checkouts.payment_links.read", "checkouts.payment_links.write", "commerce.bundles.read",
     * "commerce.bundles.write", "commerce.catalog.read", "commerce.catalog.write",
     * "commerce.credit_notes.read", "commerce.credit_notes.write", "commerce.delivery.read",
     * "commerce.delivery.write", "commerce.gift_cards.adjustments.write",
     * "commerce.gift_cards.read", "commerce.gift_cards.redemptions.write",
     * "commerce.gift_cards.secrets.write", "commerce.gift_cards.write",
     * "commerce.inventory.allocation.write", "commerce.inventory.policies.write",
     * "commerce.inventory.read", "commerce.inventory.write", "commerce.invoices.read",
     * "commerce.invoices.write", "commerce.license_keys.read",
     * "commerce.license_keys.secrets.write", "commerce.license_keys.write",
     * "commerce.orders.read", "commerce.orders.write", "commerce.products.read",
     * "commerce.products.write", "commerce.promotions.read", "commerce.promotions.write",
     * "commerce.refunds.read", "commerce.refunds.tax_overrides.write", "commerce.refunds.write",
     * "commerce.returns.operations.write", "commerce.returns.policies.write",
     * "commerce.returns.read", "commerce.returns.reasons.write",
     * "commerce.returns.resolutions.write", "commerce.returns.write",
     * "commerce.subscription_plans.read", "commerce.subscription_plans.write",
     * "commerce.subscriptions.read", "commerce.subscriptions.write", "commerce.tickets.read",
     * "commerce.tickets.write", "customers.read", "customers.sessions.write", "customers.write",
     * "developer.merchant_signups.read", "developer.merchant_signups.write",
     * "developer.partner_apps.read", "developer.partner_apps.write",
     * "developer.request_logs.read", "developer.request_logs.self.read",
     * "developer.resource_timelines.read", "developer.sandboxes.read",
     * "developer.sandboxes.write", "developer.test_clocks.read", "developer.test_clocks.write",
     * "merchant_billing.read", "merchants.account_sessions.write", "merchants.locations.read",
     * "merchants.locations.write", "merchants.onboarding.read", "merchants.onboarding.write",
     * "merchants.profile.read", "merchants.profile.write",
     * "money_movement.balance_transactions.read", "money_movement.balances.read",
     * "money_movement.payment_splits.read", "money_movement.payout_settings.read",
     * "money_movement.payout_settings.write", "money_movement.payouts.read",
     * "money_movement.payouts.write", "money_movement.platform_fees.read",
     * "payments.disputes.read", "payments.disputes.write", "payments.payment_intents.read",
     * "payments.payment_intents.write", "payments.payment_method_domains.read",
     * "payments.payment_method_domains.write", "payments.payment_methods.read",
     * "payments.payment_methods.write", "payments.readers.read", "payments.readers.write",
     * "reports.read", "reports.write", "risk.controls.write", "risk.read", "risk.reviews.write",
     * "settings.read", "settings.write", "webhooks.read", "webhooks.write". [] (Value): string.
     * Value enum: "accounts.api_keys.read", "accounts.api_keys.write", "accounts.devices.read",
     * "accounts.devices.write", "accounts.workload_identities.read",
     * "accounts.workload_identities.write", "analytics.read", "checkouts.checkout_sessions.read",
     * "checkouts.checkout_sessions.write", "checkouts.payment_links.read",
     * "checkouts.payment_links.write", "commerce.bundles.read", "commerce.bundles.write",
     * "commerce.catalog.read", "commerce.catalog.write", "commerce.credit_notes.read",
     * "commerce.credit_notes.write", "commerce.delivery.read", "commerce.delivery.write",
     * "commerce.gift_cards.adjustments.write", "commerce.gift_cards.read",
     * "commerce.gift_cards.redemptions.write", "commerce.gift_cards.secrets.write",
     * "commerce.gift_cards.write", "commerce.inventory.allocation.write",
     * "commerce.inventory.policies.write", "commerce.inventory.read", "commerce.inventory.write",
     * "commerce.invoices.read", "commerce.invoices.write", "commerce.license_keys.read",
     * "commerce.license_keys.secrets.write", "commerce.license_keys.write",
     * "commerce.orders.read", "commerce.orders.write", "commerce.products.read",
     * "commerce.products.write", "commerce.promotions.read", "commerce.promotions.write",
     * "commerce.refunds.read", "commerce.refunds.tax_overrides.write", "commerce.refunds.write",
     * "commerce.returns.operations.write", "commerce.returns.policies.write",
     * "commerce.returns.read", "commerce.returns.reasons.write",
     * "commerce.returns.resolutions.write", "commerce.returns.write",
     * "commerce.subscription_plans.read", "commerce.subscription_plans.write",
     * "commerce.subscriptions.read", "commerce.subscriptions.write", "commerce.tickets.read",
     * "commerce.tickets.write", "customers.read", "customers.sessions.write", "customers.write",
     * "developer.merchant_signups.read", "developer.merchant_signups.write",
     * "developer.partner_apps.read", "developer.partner_apps.write",
     * "developer.request_logs.read", "developer.request_logs.self.read",
     * "developer.resource_timelines.read", "developer.sandboxes.read",
     * "developer.sandboxes.write", "developer.test_clocks.read", "developer.test_clocks.write",
     * "merchant_billing.read", "merchants.account_sessions.write", "merchants.locations.read",
     * "merchants.locations.write", "merchants.onboarding.read", "merchants.onboarding.write",
     * "merchants.profile.read", "merchants.profile.write",
     * "money_movement.balance_transactions.read", "money_movement.balances.read",
     * "money_movement.payment_splits.read", "money_movement.payout_settings.read",
     * "money_movement.payout_settings.write", "money_movement.payouts.read",
     * "money_movement.payouts.write", "money_movement.platform_fees.read",
     * "payments.disputes.read", "payments.disputes.write", "payments.payment_intents.read",
     * "payments.payment_intents.write", "payments.payment_method_domains.read",
     * "payments.payment_method_domains.write", "payments.payment_methods.read",
     * "payments.payment_methods.write", "payments.readers.read", "payments.readers.write",
     * "reports.read", "reports.write", "risk.controls.write", "risk.read", "risk.reviews.write",
     * "settings.read", "settings.write", "webhooks.read", "webhooks.write".
     */
    "scopes"?: Array<"accounts.api_keys.read"
        | "accounts.api_keys.write"
        | "accounts.devices.read"
        | "accounts.devices.write"
        | "accounts.workload_identities.read"
        | "accounts.workload_identities.write"
        | "analytics.read"
        | "checkouts.checkout_sessions.read"
        | "checkouts.checkout_sessions.write"
        | "checkouts.payment_links.read"
        | "checkouts.payment_links.write"
        | "commerce.bundles.read"
        | "commerce.bundles.write"
        | "commerce.catalog.read"
        | "commerce.catalog.write"
        | "commerce.credit_notes.read"
        | "commerce.credit_notes.write"
        | "commerce.delivery.read"
        | "commerce.delivery.write"
        | "commerce.gift_cards.adjustments.write"
        | "commerce.gift_cards.read"
        | "commerce.gift_cards.redemptions.write"
        | "commerce.gift_cards.secrets.write"
        | "commerce.gift_cards.write"
        | "commerce.inventory.allocation.write"
        | "commerce.inventory.policies.write"
        | "commerce.inventory.read"
        | "commerce.inventory.write"
        | "commerce.invoices.read"
        | "commerce.invoices.write"
        | "commerce.license_keys.read"
        | "commerce.license_keys.secrets.write"
        | "commerce.license_keys.write"
        | "commerce.orders.read"
        | "commerce.orders.write"
        | "commerce.products.read"
        | "commerce.products.write"
        | "commerce.promotions.read"
        | "commerce.promotions.write"
        | "commerce.refunds.read"
        | "commerce.refunds.tax_overrides.write"
        | "commerce.refunds.write"
        | "commerce.returns.operations.write"
        | "commerce.returns.policies.write"
        | "commerce.returns.read"
        | "commerce.returns.reasons.write"
        | "commerce.returns.resolutions.write"
        | "commerce.returns.write"
        | "commerce.subscription_plans.read"
        | "commerce.subscription_plans.write"
        | "commerce.subscriptions.read"
        | "commerce.subscriptions.write"
        | "commerce.tickets.read"
        | "commerce.tickets.write"
        | "customers.read"
        | "customers.sessions.write"
        | "customers.write"
        | "developer.merchant_signups.read"
        | "developer.merchant_signups.write"
        | "developer.partner_apps.read"
        | "developer.partner_apps.write"
        | "developer.request_logs.read"
        | "developer.request_logs.self.read"
        | "developer.resource_timelines.read"
        | "developer.sandboxes.read"
        | "developer.sandboxes.write"
        | "developer.test_clocks.read"
        | "developer.test_clocks.write"
        | "merchant_billing.read"
        | "merchants.account_sessions.write"
        | "merchants.locations.read"
        | "merchants.locations.write"
        | "merchants.onboarding.read"
        | "merchants.onboarding.write"
        | "merchants.profile.read"
        | "merchants.profile.write"
        | "money_movement.balance_transactions.read"
        | "money_movement.balances.read"
        | "money_movement.payment_splits.read"
        | "money_movement.payout_settings.read"
        | "money_movement.payout_settings.write"
        | "money_movement.payouts.read"
        | "money_movement.payouts.write"
        | "money_movement.platform_fees.read"
        | "payments.disputes.read"
        | "payments.disputes.write"
        | "payments.payment_intents.read"
        | "payments.payment_intents.write"
        | "payments.payment_method_domains.read"
        | "payments.payment_method_domains.write"
        | "payments.payment_methods.read"
        | "payments.payment_methods.write"
        | "payments.readers.read"
        | "payments.readers.write"
        | "reports.read"
        | "reports.write"
        | "risk.controls.write"
        | "risk.read"
        | "risk.reviews.write"
        | "settings.read"
        | "settings.write"
        | "webhooks.read"
        | "webhooks.write"
        | (string & {})>;
    /**
     * Turns the identity on or off. Archiving is a separate DELETE. Omit to keep the current
     * status. Value enum: "active", "inactive".
     */
    "status"?: "active" | "inactive" | (string & {});
    /**
     * The subject (`sub`) a token must carry, 1 to 1,024 characters, compared as subject_match
     * says. Omit to keep the current subject. minLength: 1. maxLength: 1024.
     */
    "subject"?: string;
    /**
     * How `subject` is compared with a token's `sub` claim. Omit to keep the current setting.
     * Default: "exact". Value enum: "exact", "glob".
     */
    "subject_match"?: "exact" | "glob" | (string & {});
});
/** The request body for: Update a workload identity. minProperties: 1. */
export type UpdateWorkloadIdentityRequestInput = ({
    /**
     * Bounded value array, at most 10. Defaults to []. Any glob requires an exact claim condition;
     * shared issuers require tenant pinning. maxItems: 10. uniqueItems: true. [] (Value): {@link
     * WorkloadIdentityClaimConditionRequestInput}. A condition to match one top-level scalar claim
     * in the workload's identity token. Omitted match defaults to exact.
     */
    "claim_conditions"?: Array<WorkloadIdentityClaimConditionRequestInput>;
    /**
     * Version most recently read. Required when claim_conditions or scopes is supplied; optional
     * for scalar updates. Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * A label that helps you tell workload identities apart, 1 to 100 characters. Omit to keep the
     * current name. Surrounding whitespace is trimmed before length validation. A supplied value
     * cannot be blank; use null where clearing is supported. minLength: 1. maxLength: 100.
     */
    "name"?: string;
    /**
     * Complete scope set to grant. API keys, CLI login tokens and workload tokens may grant only
     * scopes they hold in the same environment. Only a full-access key or a freshly verified user
     * session can grant accounts.api_keys.write, accounts.workload_identities.write or
     * commerce.gift_cards.secrets.write, in every mode. [] enum: "accounts.api_keys.read",
     * "accounts.api_keys.write", "accounts.devices.read", "accounts.devices.write",
     * "accounts.workload_identities.read", "accounts.workload_identities.write", "analytics.read",
     * "checkouts.checkout_sessions.read", "checkouts.checkout_sessions.write",
     * "checkouts.payment_links.read", "checkouts.payment_links.write", "commerce.bundles.read",
     * "commerce.bundles.write", "commerce.catalog.read", "commerce.catalog.write",
     * "commerce.credit_notes.read", "commerce.credit_notes.write", "commerce.delivery.read",
     * "commerce.delivery.write", "commerce.gift_cards.adjustments.write",
     * "commerce.gift_cards.read", "commerce.gift_cards.redemptions.write",
     * "commerce.gift_cards.secrets.write", "commerce.gift_cards.write",
     * "commerce.inventory.allocation.write", "commerce.inventory.policies.write",
     * "commerce.inventory.read", "commerce.inventory.write", "commerce.invoices.read",
     * "commerce.invoices.write", "commerce.license_keys.read",
     * "commerce.license_keys.secrets.write", "commerce.license_keys.write",
     * "commerce.orders.read", "commerce.orders.write", "commerce.products.read",
     * "commerce.products.write", "commerce.promotions.read", "commerce.promotions.write",
     * "commerce.refunds.read", "commerce.refunds.tax_overrides.write", "commerce.refunds.write",
     * "commerce.returns.operations.write", "commerce.returns.policies.write",
     * "commerce.returns.read", "commerce.returns.reasons.write",
     * "commerce.returns.resolutions.write", "commerce.returns.write",
     * "commerce.subscription_plans.read", "commerce.subscription_plans.write",
     * "commerce.subscriptions.read", "commerce.subscriptions.write", "commerce.tickets.read",
     * "commerce.tickets.write", "customers.read", "customers.sessions.write", "customers.write",
     * "developer.merchant_signups.read", "developer.merchant_signups.write",
     * "developer.partner_apps.read", "developer.partner_apps.write",
     * "developer.request_logs.read", "developer.request_logs.self.read",
     * "developer.resource_timelines.read", "developer.sandboxes.read",
     * "developer.sandboxes.write", "developer.test_clocks.read", "developer.test_clocks.write",
     * "merchant_billing.read", "merchants.account_sessions.write", "merchants.locations.read",
     * "merchants.locations.write", "merchants.onboarding.read", "merchants.onboarding.write",
     * "merchants.profile.read", "merchants.profile.write",
     * "money_movement.balance_transactions.read", "money_movement.balances.read",
     * "money_movement.payment_splits.read", "money_movement.payout_settings.read",
     * "money_movement.payout_settings.write", "money_movement.payouts.read",
     * "money_movement.payouts.write", "money_movement.platform_fees.read",
     * "payments.disputes.read", "payments.disputes.write", "payments.payment_intents.read",
     * "payments.payment_intents.write", "payments.payment_method_domains.read",
     * "payments.payment_method_domains.write", "payments.payment_methods.read",
     * "payments.payment_methods.write", "payments.readers.read", "payments.readers.write",
     * "reports.read", "reports.write", "risk.controls.write", "risk.read", "risk.reviews.write",
     * "settings.read", "settings.write", "webhooks.read", "webhooks.write". [] (Value): string.
     * Value enum: "accounts.api_keys.read", "accounts.api_keys.write", "accounts.devices.read",
     * "accounts.devices.write", "accounts.workload_identities.read",
     * "accounts.workload_identities.write", "analytics.read", "checkouts.checkout_sessions.read",
     * "checkouts.checkout_sessions.write", "checkouts.payment_links.read",
     * "checkouts.payment_links.write", "commerce.bundles.read", "commerce.bundles.write",
     * "commerce.catalog.read", "commerce.catalog.write", "commerce.credit_notes.read",
     * "commerce.credit_notes.write", "commerce.delivery.read", "commerce.delivery.write",
     * "commerce.gift_cards.adjustments.write", "commerce.gift_cards.read",
     * "commerce.gift_cards.redemptions.write", "commerce.gift_cards.secrets.write",
     * "commerce.gift_cards.write", "commerce.inventory.allocation.write",
     * "commerce.inventory.policies.write", "commerce.inventory.read", "commerce.inventory.write",
     * "commerce.invoices.read", "commerce.invoices.write", "commerce.license_keys.read",
     * "commerce.license_keys.secrets.write", "commerce.license_keys.write",
     * "commerce.orders.read", "commerce.orders.write", "commerce.products.read",
     * "commerce.products.write", "commerce.promotions.read", "commerce.promotions.write",
     * "commerce.refunds.read", "commerce.refunds.tax_overrides.write", "commerce.refunds.write",
     * "commerce.returns.operations.write", "commerce.returns.policies.write",
     * "commerce.returns.read", "commerce.returns.reasons.write",
     * "commerce.returns.resolutions.write", "commerce.returns.write",
     * "commerce.subscription_plans.read", "commerce.subscription_plans.write",
     * "commerce.subscriptions.read", "commerce.subscriptions.write", "commerce.tickets.read",
     * "commerce.tickets.write", "customers.read", "customers.sessions.write", "customers.write",
     * "developer.merchant_signups.read", "developer.merchant_signups.write",
     * "developer.partner_apps.read", "developer.partner_apps.write",
     * "developer.request_logs.read", "developer.request_logs.self.read",
     * "developer.resource_timelines.read", "developer.sandboxes.read",
     * "developer.sandboxes.write", "developer.test_clocks.read", "developer.test_clocks.write",
     * "merchant_billing.read", "merchants.account_sessions.write", "merchants.locations.read",
     * "merchants.locations.write", "merchants.onboarding.read", "merchants.onboarding.write",
     * "merchants.profile.read", "merchants.profile.write",
     * "money_movement.balance_transactions.read", "money_movement.balances.read",
     * "money_movement.payment_splits.read", "money_movement.payout_settings.read",
     * "money_movement.payout_settings.write", "money_movement.payouts.read",
     * "money_movement.payouts.write", "money_movement.platform_fees.read",
     * "payments.disputes.read", "payments.disputes.write", "payments.payment_intents.read",
     * "payments.payment_intents.write", "payments.payment_method_domains.read",
     * "payments.payment_method_domains.write", "payments.payment_methods.read",
     * "payments.payment_methods.write", "payments.readers.read", "payments.readers.write",
     * "reports.read", "reports.write", "risk.controls.write", "risk.read", "risk.reviews.write",
     * "settings.read", "settings.write", "webhooks.read", "webhooks.write".
     */
    "scopes"?: Array<"accounts.api_keys.read"
        | "accounts.api_keys.write"
        | "accounts.devices.read"
        | "accounts.devices.write"
        | "accounts.workload_identities.read"
        | "accounts.workload_identities.write"
        | "analytics.read"
        | "checkouts.checkout_sessions.read"
        | "checkouts.checkout_sessions.write"
        | "checkouts.payment_links.read"
        | "checkouts.payment_links.write"
        | "commerce.bundles.read"
        | "commerce.bundles.write"
        | "commerce.catalog.read"
        | "commerce.catalog.write"
        | "commerce.credit_notes.read"
        | "commerce.credit_notes.write"
        | "commerce.delivery.read"
        | "commerce.delivery.write"
        | "commerce.gift_cards.adjustments.write"
        | "commerce.gift_cards.read"
        | "commerce.gift_cards.redemptions.write"
        | "commerce.gift_cards.secrets.write"
        | "commerce.gift_cards.write"
        | "commerce.inventory.allocation.write"
        | "commerce.inventory.policies.write"
        | "commerce.inventory.read"
        | "commerce.inventory.write"
        | "commerce.invoices.read"
        | "commerce.invoices.write"
        | "commerce.license_keys.read"
        | "commerce.license_keys.secrets.write"
        | "commerce.license_keys.write"
        | "commerce.orders.read"
        | "commerce.orders.write"
        | "commerce.products.read"
        | "commerce.products.write"
        | "commerce.promotions.read"
        | "commerce.promotions.write"
        | "commerce.refunds.read"
        | "commerce.refunds.tax_overrides.write"
        | "commerce.refunds.write"
        | "commerce.returns.operations.write"
        | "commerce.returns.policies.write"
        | "commerce.returns.read"
        | "commerce.returns.reasons.write"
        | "commerce.returns.resolutions.write"
        | "commerce.returns.write"
        | "commerce.subscription_plans.read"
        | "commerce.subscription_plans.write"
        | "commerce.subscriptions.read"
        | "commerce.subscriptions.write"
        | "commerce.tickets.read"
        | "commerce.tickets.write"
        | "customers.read"
        | "customers.sessions.write"
        | "customers.write"
        | "developer.merchant_signups.read"
        | "developer.merchant_signups.write"
        | "developer.partner_apps.read"
        | "developer.partner_apps.write"
        | "developer.request_logs.read"
        | "developer.request_logs.self.read"
        | "developer.resource_timelines.read"
        | "developer.sandboxes.read"
        | "developer.sandboxes.write"
        | "developer.test_clocks.read"
        | "developer.test_clocks.write"
        | "merchant_billing.read"
        | "merchants.account_sessions.write"
        | "merchants.locations.read"
        | "merchants.locations.write"
        | "merchants.onboarding.read"
        | "merchants.onboarding.write"
        | "merchants.profile.read"
        | "merchants.profile.write"
        | "money_movement.balance_transactions.read"
        | "money_movement.balances.read"
        | "money_movement.payment_splits.read"
        | "money_movement.payout_settings.read"
        | "money_movement.payout_settings.write"
        | "money_movement.payouts.read"
        | "money_movement.payouts.write"
        | "money_movement.platform_fees.read"
        | "payments.disputes.read"
        | "payments.disputes.write"
        | "payments.payment_intents.read"
        | "payments.payment_intents.write"
        | "payments.payment_method_domains.read"
        | "payments.payment_method_domains.write"
        | "payments.payment_methods.read"
        | "payments.payment_methods.write"
        | "payments.readers.read"
        | "payments.readers.write"
        | "reports.read"
        | "reports.write"
        | "risk.controls.write"
        | "risk.read"
        | "risk.reviews.write"
        | "settings.read"
        | "settings.write"
        | "webhooks.read"
        | "webhooks.write">;
    /**
     * Turns the identity on or off. Archiving is a separate DELETE. Omit to keep the current
     * status. Value enum: "active", "inactive".
     */
    "status"?: "active" | "inactive";
    /**
     * The subject (`sub`) a token must carry, 1 to 1,024 characters, compared as subject_match
     * says. Omit to keep the current subject. minLength: 1. maxLength: 1024.
     */
    "subject"?: string;
    /**
     * How `subject` is compared with a token's `sub` claim. Omit to keep the current setting.
     * Default: "exact". Value enum: "exact", "glob".
     */
    "subject_match"?: "exact" | "glob";
});
/** A user with access to merchant accounts. */
export type User = {
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /**
     * ID of the merchant Flint treats as the user's default, which it sets when it provisions the
     * user's merchant. Omitted when no default is set. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     */
    "default_merchant_id"?: string;
    /** Email address the user signs in with. */
    "email": string;
    /** The user's first name. */
    "first_name": string;
    /** The user's last name. */
    "last_name": string;
    /**
     * Whether the user's account can sign in and access Flint. Value enum: "active",
     * "deactivated".
     */
    "status": "active" | "deactivated" | (string & {});
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
    /**
     * Unique identifier for this user, prefixed `usr_`. Example: "usr_01KEZF7C00YC8757ZYP9727JM0".
     */
    "user_id": string;
};
/** The full license key and the products the caller accepts. */
export type ValidateLicenseKeyRequest = {
    /**
     * The full license key. Generated keys match on the last 25 normalized characters. Pool keys
     * match exactly after surrounding whitespace is trimmed. minLength: 1.
     */
    "key": string;
    /**
     * An activation to check on this key, when the app has one. minLength: 1. pattern:
     * ^lka_[0-7][0-9A-HJKMNP-TV-Z]{25}$. Example: "lka_01KEZF7C00NZEZVCZW3SRDMHTZ".
     */
    "license_key_activation_id"?: string;
    /**
     * The products this app accepts. Every ID must belong to the same merchant and environment.
     * Without an API key, the first product sets the merchant and environment. minItems: 1.
     * maxItems: 20. uniqueItems: true. [] (Value): string. minLength: 1. pattern:
     * ^prod_[0-7][0-9A-HJKMNP-TV-Z]{25}$. Example: "prod_01KEZF7C00BVSHCNWVH528HB66".
     */
    "product_ids": Array<string>;
};
/** The full license key and the products the caller accepts. */
export type ValidateLicenseKeyRequestInput = ValidateLicenseKeyRequest;
export type VerifiedWebhook = {
    known: true;
    event: KnownWebhookEvent;
}
    | {
    known: false;
    event: unknown;
    reason: "unknown_event" | "unmatched_envelope";
};
/** The request body for: Verify a merchant signup. */
export type VerifyMerchantSignupRequest = {
    /**
     * Optional expected version of this resource. A stale value returns 409 VERSION_CONFLICT with
     * the current version. Retrieve the resource and rebuild the request before retrying. Format:
     * uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * The owner's acceptance of Flint's merchant terms. Your statement that the owner ticked
     * Flint's terms checkbox in your form, with Flint's wording. The platform terms oblige you to
     * show it and to report real values.
     */
    "terms_acceptance": MerchantSignupTermsAcceptanceRequest;
    /**
     * The 8-character code Flint emailed the owner, such as `K7QM-4TXD`, with or without the
     * hyphen, in either case. Request logs redact it. minLength: 8. maxLength: 9.
     */
    "verification_code": string;
};
/** The request body for: Verify a merchant signup. */
export type VerifyMerchantSignupRequestInput = {
    /**
     * Optional expected version of this resource. A stale value returns 409 VERSION_CONFLICT with
     * the current version. Retrieve the resource and rebuild the request before retrying. Format:
     * uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * The owner's acceptance of Flint's merchant terms. Your statement that the owner ticked
     * Flint's terms checkbox in your form, with Flint's wording. The platform terms oblige you to
     * show it and to report real values.
     */
    "terms_acceptance": MerchantSignupTermsAcceptanceRequestInput;
    /**
     * The 8-character code Flint emailed the owner, such as `K7QM-4TXD`, with or without the
     * hyphen, in either case. Request logs redact it. minLength: 8. maxLength: 9.
     */
    "verification_code": string;
};
/** The request body for: Verify return receipt line item. */
export type VerifyReturnReceiptLineItemRequest = {
    /**
     * Optional version of the return receipt. A stale value returns VERSION_CONFLICT with the
     * receipt ID and its current version. Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * ID of the Return line the units were matched to. Absent for unverified units. minLength: 1.
     * Example: "retli_01KEZF7C00R813VR7ECXS062QG".
     */
    "return_line_item_id": string;
    /**
     * Why the units were verified against the line. Value enum: "order_match_confirmed",
     * "sku_match_confirmed", "inspection_confirmed", "merchant_review", "other".
     */
    "verification_reason": "order_match_confirmed"
        | "sku_match_confirmed"
        | "inspection_confirmed"
        | "merchant_review"
        | "other"
        | (string & {});
    /** Detail about `verification_reason`. minLength: 1. */
    "verification_reason_message"?: string;
};
/** The request body for: Verify return receipt line item. */
export type VerifyReturnReceiptLineItemRequestInput = {
    /**
     * Optional version of the return receipt. A stale value returns VERSION_CONFLICT with the
     * receipt ID and its current version. Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * ID of the Return line the units were matched to. Absent for unverified units. minLength: 1.
     * Example: "retli_01KEZF7C00R813VR7ECXS062QG".
     */
    "return_line_item_id": string;
    /**
     * Why the units were verified against the line. Value enum: "order_match_confirmed",
     * "sku_match_confirmed", "inspection_confirmed", "merchant_review", "other".
     */
    "verification_reason": "order_match_confirmed"
        | "sku_match_confirmed"
        | "inspection_confirmed"
        | "merchant_review"
        | "other";
    /** Detail about `verification_reason`. minLength: 1. */
    "verification_reason_message"?: string;
};
export type VerifyReturnReceiptLineItemResponse = GetReturnReceiptResponse;
/** The request body for: Void package. */
export type VoidPackageRequest = {
    /**
     * Controls buyer email handling. Omit or use send to send when recipient, template, and
     * deduplication rules allow it. Use suppress when another system owns buyer messaging. Value
     * enum: "send", "suppress".
     */
    "buyer_notification_behavior"?: "send" | "suppress" | (string & {});
    /** Optional resource version last read by the caller. Format: uint64. minimum: 1. */
    "expected_version"?: number;
    /** Void event timestamp. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z". */
    "occurred_at"?: string;
    /** Your internal note explaining this action. Not included in buyer emails. minLength: 1. */
    "reason_message"?: string;
};
/** The request body for: Void package. */
export type VoidPackageRequestInput = {
    /**
     * Controls buyer email handling. Omit or use send to send when recipient, template, and
     * deduplication rules allow it. Use suppress when another system owns buyer messaging. Value
     * enum: "send", "suppress".
     */
    "buyer_notification_behavior"?: "send" | "suppress";
    /** Optional resource version last read by the caller. Format: uint64. minimum: 1. */
    "expected_version"?: number;
    /** Void event timestamp. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z". */
    "occurred_at"?: string | globalThis.Date;
    /** Your internal note explaining this action. Not included in buyer emails. minLength: 1. */
    "reason_message"?: string;
};
/** The request body for: Void shipment. */
export type VoidShipmentRequestInput = VoidPackageRequestInput;
/** A response containing `VoidShipmentResult` data. */
export type VoidShipmentResponse = {
    /**
     * Resource, collection, or operation result returned by this request. The voided shipment and
     * its affected packages. The shipment is the primary resource and expected_version target.
     */
    "data": VoidShipmentResult;
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
 * The voided shipment and its affected packages. The shipment is the primary resource and
 * expected_version target.
 */
export type VoidShipmentResult = {
    /**
     * The shipment's packages after the void, each with status `voided`. Packages that were
     * already voided are included. [] (Value): {@link Package}. A package within a shipment.
     */
    "packages": Array<Package>;
    /**
     * The shipment after the void, with status `voided`. A shipment carrying fulfilled order
     * items.
     */
    "shipment": Shipment;
};
/** The request body for: Waive an unpaid invoice late fee. */
export type WaiveInvoiceLateFeeRequest = {
    /** Your note explaining this action. minLength: 1. maxLength: 4096. */
    "reason_message": string;
};
/** The request body for: Waive an unpaid invoice late fee. */
export type WaiveInvoiceLateFeeRequestInput = WaiveInvoiceLateFeeRequest;
/** The request body for: Waive return line inspection. */
export type WaiveReturnLineInspectionRequest = {
    /**
     * Optional. The Return's current version, not the line's; a stale value returns 409
     * VERSION_CONFLICT. Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Why inspection is being waived. Value enum: "policy_override", "trusted_in_store_handoff",
     * "merchant_review", "other".
     */
    "reason": "policy_override" | "trusted_in_store_handoff" | "merchant_review" | "other" | (string & {});
    /** Optional detail about `reason`, kept with the record. minLength: 1. */
    "reason_message"?: string;
};
/** The request body for: Waive return line inspection. */
export type WaiveReturnLineInspectionRequestInput = {
    /**
     * Optional. The Return's current version, not the line's; a stale value returns 409
     * VERSION_CONFLICT. Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Why inspection is being waived. Value enum: "policy_override", "trusted_in_store_handoff",
     * "merchant_review", "other".
     */
    "reason": "policy_override" | "trusted_in_store_handoff" | "merchant_review" | "other";
    /** Optional detail about `reason`, kept with the record. minLength: 1. */
    "reason_message"?: string;
};
export type WaiveReturnLineInspectionResponse = GetReturnResponse;
/** The resource snapshot, without expansions. Webhooks omit these fields: `modifier_set`. */
export type WebhookBundle = ({
    /** Barcode assigned to this sellable item. */
    "barcode"?: string;
    /** Stable identifier of the bundle. Example: "bun_01KEZF7C00TQ6S76Z6CVQF5SVN". */
    "bundle_id": string;
    /**
     * Always present. Empty collections are returned as []. [] (Value): {@link CategoryReference}.
     * A reference to a product category by ID, handle, and name.
     */
    "categories": Array<CategoryReference>;
    /** Number of components in the bundle. Format: int32. */
    "component_count": number;
    /**
     * The bundle's components in position order, on every bundle response including list rows. []
     * only when the bundle has no components. [] (Value): {@link BundleComponent}. An item
     * included in a bundle.
     */
    "components": Array<BundleComponent>;
    /**
     * When this resource was created, as an RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "created_at"?: string;
    /**
     * Delivery readiness aggregated across the bundle's components. A bundle with no components
     * reports `not_applicable`. Value enum: "configured", "action_required", "not_applicable".
     */
    "delivery_configuration_status": "configured" | "action_required" | "not_applicable" | (string & {});
    /** Description of the bundle shown to buyers. */
    "description"?: string;
    /**
     * Caller-owned identifier for this resource in an external system. maxLength: 255. Example:
     * "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Images attached to this resource, in display order. The first image is primary. [] (Value):
     * {@link ImageAttachment}. An image attached to a resource, with its display properties and
     * attachment metadata.
     */
    "images": Array<ImageAttachment>;
    /**
     * Whether the bundle can be sold now: it is `active`, has at least one component, every
     * component's variant and product are `active`, and `delivery_configuration_status` isn't
     * `action_required`. Stock isn't considered.
     */
    "is_available_for_sale": boolean;
    /**
     * Identifier of the merchant that owns this resource. Example:
     * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     */
    "merchant_id"?: string;
    /**
     * Caller-owned metadata stored on this resource. Caller-owned key-value data stored on a
     * resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them.
     */
    "metadata"?: MetadataMap;
    /**
     * ID of the modifier set attached to the bundle. `null` when no modifier set is attached.
     * Example: "ms_01KEZF7C007EWZVVFAWVJJM8NR".
     */
    "modifier_set_id": string | null;
    /** Bundle name shown to buyers. */
    "name": string;
    /** Stock keeping unit assigned to this sellable item. */
    "sku"?: string;
    /**
     * Bundle lifecycle status. Archived bundles remain readable and cannot be edited. Value enum:
     * "active", "inactive", "archived".
     */
    "status": "active" | "inactive" | "archived" | (string & {});
    /**
     * Price charged for one unit, in the currency's smallest unit. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "unit_price_money": MoneyValue;
    /**
     * When this resource last changed, as an RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "updated_at"?: string;
    /**
     * Current resource version. Send it as expected_version to reject a write if the resource has
     * changed. Format: uint64. minimum: 0.
     */
    "version": number;
});
/**
 * The resource snapshot, without expansions. Webhooks omit these fields: `url`,
 * `recovery_payment_attempt_id`, `recovery_expires_at`, `can_save_payment_method`,
 * `save_payment_method_types`, `save_payment_method_requires_verification`,
 * `pay_to_new_address_requires_verification`, `can_save_payment_method_with_phone`,
 * `payment_method_save`, `customer_prefill`, `merchant_support`, `merchant_name`,
 * `show_flint_mark`, `merchant_logo`, `merchant_icon`, `payment_link_image`, `platform_fee`,
 * `customer_account_url`.
 */
export type WebhookCheckoutSession = ({
    /**
     * The payment attempt now collecting this checkout's order, the same attempt as the order's
     * active_payment_attempt. Read it to recover after losing a pay response, and resume it only
     * when is_resumable is true. Omitted when no attempt is active. Pending actions that open a
     * URL are left out; the pay response carries them. An attempt to pay an order.
     */
    "active_payment_attempt"?: OrderPaymentAttempt;
    /**
     * Contact the buyer entered in checkout before paying, saved with the session's checkout
     * credential. Separate from merchant-supplied prefill and customer_prefill from the customer
     * record. Omitted until the buyer saves or clears a field. When a checkout session payment
     * omits buyer_contact.email or buyer_contact.phone, Flint uses these values. Flint clears the
     * contact 30 days after the session ends, and when a customer linked to the session is
     * deleted. Buyer contact supplied with payment or saved during checkout.
     */
    "buyer_contact"?: CheckoutBuyerContact;
    /** What checkout asks the buyer for. Each field you leave out uses your checkout settings. */
    "buyer_fields"?: CheckoutBuyerFields;
    /**
     * Whether to offer promotion-code entry now. True only while the session is open, is not in
     * recovery, and merchant promotion policy allows codes. An explicit
     * promotion_config.codes_enabled wins; null offers entry only when this merchant has an active
     * code promotion whose schedule includes now, in the session's environment. Recomputed on each
     * read. This hint does not change code admission: checkout lifecycle, promotion_config, and
     * merchant policy still apply.
     */
    "can_apply_promotion_code": boolean;
    /**
     * Unique identifier for this checkout session, prefixed `cs_`. Example:
     * "cs_01KEZF7C004JRWFW43H037MQRN".
     */
    "checkout_session_id": string;
    /**
     * The reference the payment link URL or resolve request carried, such as your user ID. `null`
     * when none was sent or checkout did not start from a payment link. Returned only to merchant
     * credentials; omitted for buyer credentials. Set by the buyer's browser, so treat it as a
     * claim, not proof of identity. Always present with merchant credentials. minLength: 1.
     * maxLength: 255.
     */
    "client_reference"?: string | null;
    /** The note supplied when the checkout session was closed. */
    "closed_reason_message"?: string;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /**
     * The buyer's answers to the payment link's custom fields, the same as the
     * `custom_field_answers` of the session's order. Read-only. Empty when the session didn't
     * start from a payment link, the buyer answered no custom fields, or the order was created
     * before Flint recorded answers here. Returned only to merchant credentials; omitted for buyer
     * credentials. Always present with merchant credentials. maxItems: 20. [] (Value): {@link
     * CustomFieldAnswer}. One answer to a payment link custom field, with the field as it was when
     * checkout started. `custom_field_type` determines the type of `value`.
     */
    "custom_field_answers"?: Array<CustomFieldAnswer>;
    /**
     * The custom text this session shows in checkout. Custom text shown in checkout: an order
     * summary message and a shipping address label.
     */
    "custom_text"?: CheckoutCustomTextConfig;
    /**
     * Present only when `expand` includes `customer`; `null` when expanded and there is no related
     * customer. anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's summary fields,
     * returned in place of a customer ID when the customer is expanded. anyOf[2] (Value): null.
     */
    "customer"?: ((ExpandedCustomerSummary) | (null));
    /**
     * The customer of the session's order. Omitted when the order has none. A checkout credential
     * issued for this session acts for this customer. Add expand=customer to include the customer.
     * Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     */
    "customer_id"?: string;
    /**
     * Current delivery choices for Flint-owned pricing. External pricing reports
     * requires_explicit_quote; reading this field does not request a delivery quote. Omitted when
     * the session is not open, has no order, or Flint cannot read its delivery. The delivery
     * options Flint derived for a checkout as a buyer sees them: choice groups, input
     * requirements, and evaluation status.
     */
    "delivery"?: CheckoutDerivedDeliveryResource;
    /**
     * Immutable delivery method assignment captured when the checkout was created. [] (Value):
     * string. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
     */
    "delivery_method_ids": Array<string>;
    /**
     * Whether the order has at least one remaining quote-resolved fulfillment choice that must be
     * selected before payment.
     */
    "delivery_selection_required": boolean;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "expires_at"?: string;
    /**
     * The lifetime the session got. expires_at is its deadline. Omitted for invoice sessions,
     * which take their deadline from the invoice. Format: int64.
     */
    "expires_in_seconds"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. maxLength: 255. Example:
     * "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Where the buyer completes a gift card challenge for this checkout. Returned on
     * single-session reads, session create and update responses, checkout launch results, and
     * customer verification confirmation results while the session is open and can show the
     * challenge. Omitted from lists, webhooks, expanded resources, and delivery selection results.
     * A URL to load in an iframe when applying a gift card returns `GIFT_CARD_CHALLENGE_REQUIRED`.
     */
    "gift_card_challenge"?: CheckoutGiftCardChallenge;
    /**
     * Immutable cart hold IDs authorized by the merchant at session creation. Omitted when empty
     * and from checkout-credential responses. Buyer and merchant delivery requests that omit IDs
     * use eligible bound holds; explicit merchant IDs replace the binding for that request. First
     * adopter wins when sessions share a hold. Invalidated or otherwise ended sessions cannot
     * adopt stock, and replacements never inherit the binding. Unused cart units retain their own
     * release and expiration lifecycle. [] (Value): string. Example:
     * "invr_01KEZF7C0041ENRR0C2NF3AP12".
     */
    "inventory_reservation_ids"?: Array<string>;
    /**
     * Present only when `expand` includes `invoice`; `null` when expanded and there is no related
     * invoice. anyOf[1] (Value): {@link ExpandedInvoiceSummary}. An invoice's summary fields,
     * including status, due date, and paid, outstanding, and refunded amounts, returned when the
     * invoice is expanded. anyOf[2] (Value): null.
     */
    "invoice"?: ((ExpandedInvoiceSummary) | (null));
    /**
     * ID of the invoice a session of type `invoice` collects payment for. Absent for other types.
     * Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
     */
    "invoice_id"?: string;
    /**
     * Whether this terminal session credential is temporarily restricted to recovering its owning
     * payment attempt.
     */
    "is_in_recovery": boolean;
    /**
     * The terms and policy links this session shows the buyer, and whether the buyer must accept
     * the terms. Legal settings for a checkout: whether buyers must accept terms, and links to the
     * terms, refund policy, shipping policy, and contract.
     */
    "legal"?: LegalSettings;
    /** ID of the merchant this resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
    "merchant_id": string;
    /**
     * Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules.
     * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for
     * Flint and are not returned. Writes follow the limits on MetadataInput and
     * MetadataPatchInput; maps written before those limits may not satisfy them.
     */
    "metadata"?: MetadataMap;
    /**
     * Present only when `expand` includes `order`; `null` when expanded and there is no related
     * order. anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields, including
     * status, payment and refund status, and pricing and settlement amounts, returned when the
     * order is expanded. anyOf[2] (Value): null.
     */
    "order"?: ((ExpandedOrderSummary) | (null));
    /**
     * ID of the order the session collects payment for, fixed at creation. Absent when the session
     * has no order. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id"?: string;
    /** Origin of the page that renders this headless checkout. Omitted when not set. */
    "page_origin"?: string;
    /**
     * Guidance for collecting a payment source. Checkout-credential reads include it only while
     * the session is open. Returned only to the checkout credential; never in webhook payloads.
     * Client-side details for collecting payment from the buyer, such as the Stripe settings to
     * initialize Stripe.js.
     */
    "payment_collection"?: PaymentCollection;
    /**
     * IDs of the payment intents for the session's order. Absent when the order has none. []
     * (Value): string. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
     */
    "payment_intent_ids"?: Array<string>;
    /**
     * Present only when `expand` includes `payment_intents`: summaries of the payment intents in
     * `payment_intent_ids`. [] (Value): {@link ExpandedPaymentIntentSummary}. A payment intent's
     * summary fields, including amount, status, and capture method, returned when the payment
     * intent is expanded.
     */
    "payment_intents"?: Array<ExpandedPaymentIntentSummary>;
    /**
     * Present only when `expand` includes `payment_link`; `null` when expanded and there is no
     * related payment link. anyOf[1] (Value): {@link ExpandedPaymentLinkSummary}. A payment link's
     * summary fields, including name, type, status, and URL, returned when the payment link is
     * expanded. anyOf[2] (Value): null.
     */
    "payment_link"?: ((ExpandedPaymentLinkSummary) | (null));
    /**
     * ID of the payment link the session was started from. Absent when it was not started from a
     * payment link. Example: "pl_01KEZF7C007WDMA5P9BPZ8J2AM".
     */
    "payment_link_id"?: string;
    /**
     * Headless sessions only. Absolute HTTPS URL on your site where Flint sends the buyer after a
     * redirect payment such as Affirm, whatever the outcome; read the session there to show the
     * result. Required when the session offers affirm. It can't contain credentials, a query
     * string, or a fragment. Query strings are deliberately excluded so credentials and provider
     * state cannot cross Flint's payment relay. Put merchant identifiers in the URL path, such as
     * https://shop.example/return/sub_123. Test mode also accepts http loopback URLs. Up to 2,048
     * characters. Format: uri. maxLength: 2048. Example: "https://example.com/receipt".
     */
    "payment_return_url"?: string;
    /**
     * Configured payment options for merchant credentials; currently available payment options for
     * the checkout credential. Payment settings for a checkout: the enabled payment options and a
     * note shown with payment.
     */
    "payments"?: CheckoutPaymentConfig;
    /**
     * Contact details and addresses to fill in for the buyer, who can change them. For a customer
     * with saved addresses, Flint fills in any address you leave out, and reads include it. With
     * quick_pay or subscription_plan and automatic tax on, a prefilled address sets the order's
     * tax location. Not changed by what the buyer types; for that, read buyer_contact.
     * customer_prefill is what the checkout credential reads from the customer record.
     */
    "prefill"?: CheckoutPrefill;
    /**
     * Named conditions that affect checkout completion. Follow each problem's remediation action
     * instead of reconstructing delivery lifecycle rules in the client. payment_in_progress means
     * another payment for the order must finish before this checkout can complete. When Flint
     * cannot read the checkout's delivery, the read still succeeds and reports
     * delivery_unreadable; its remediation says whether reading the session again can succeed, and
     * its next action's reason_code names the error. [] (Value): {@link CheckoutProblemResource}.
     * A problem with a checkout session, such as a stale delivery selection, with its `code`,
     * whether it blocks completion, and remediation.
     */
    "problems": Array<CheckoutProblemResource>;
    /**
     * Whether automatic promotions apply to this session and whether the buyer can enter promotion
     * codes. Promotion settings for a checkout: whether automatic promotions apply and whether the
     * buyer can apply promotion codes.
     */
    "promotion_config"?: CheckoutPromotionConfig;
    /**
     * Where hosted checkout sends the buyer. Not allowed when surface is headless; use
     * payment_return_url.
     */
    "redirects"?: CheckoutRedirects;
    /**
     * All buyer-visible refunds on this session’s order, including refunds made by the store. Uses
     * the same buyer projection as /v1/me/refunds. Included on GET single-session reads as an
     * array, with [] when there are none, and omitted from other responses and webhooks. A failed
     * refund with failure_reason refund_abandoned could not be completed: tell the buyer to
     * contact the store to get their money back. [] (Value): {@link BuyerRefund}. Money returned
     * against a collected payment.
     */
    "refunds"?: Array<BuyerRefund>;
    /**
     * Guidance for collecting a payment method to save. Checkout-credential reads include it only
     * while the session is open. Returned only to the checkout credential; never in webhook
     * payloads. Client guidance for saving a payment method on the merchant's connected account.
     */
    "setup_collection"?: SetupCollection;
    /**
     * Where the session is in its lifecycle. Only an `open` session accepts payment.
     * `terminal_reason` says why a session that is not open ended. Value enum: "open", "paid",
     * "partially_paid", "expired", "closed", "invalidated".
     */
    "status": "open" | "paid" | "partially_paid" | "expired" | "closed" | "invalidated" | (string & {});
    /**
     * ID of the subscription plan a session of type `subscription_plan` signs the buyer up for.
     * Absent for other types. Example: "plan_01KEZF7C004CY5ZR33XST2AASV".
     */
    "subscription_plan_id"?: string;
    /**
     * Renewal terms a subscription checkout commits the buyer to. Frozen when the session's order
     * was created, so later plan changes do not alter them. Absent when the checkout starts no
     * subscription. Renewal terms a subscription checkout commits the buyer to. Frozen when the
     * session's order was created, so later plan changes do not alter them.
     */
    "subscription_terms"?: CheckoutSubscriptionTerms;
    /**
     * ID of the session that replaced this one. Present when `terminal_reason` is `superseded`.
     * Example: "cs_01KEZF7C004JRWFW43H037MQRN".
     */
    "superseding_checkout_session_id"?: string;
    /**
     * Lifecycle actions Flint accepts now, computed from stored checkout state without checking
     * the caller's permissions. Contains close while open; empty after payment, closure, or
     * expiry. Always present with merchant credentials. [] enum: "close". [] (Value): string.
     * Value enum: "close".
     */
    "supported_actions"?: Array<"close" | (string & {})>;
    /**
     * How the session is presented to the buyer. A hosted session has a `url` on Flint's checkout
     * page; a headless one is rendered on your own page. Value enum: "hosted", "headless".
     */
    "surface": "hosted" | "headless" | (string & {});
    /**
     * The session's tax settings. Omitted when the session sets none. Tax settings of a checkout
     * session: whether it collects tax and any tax location the merchant fixed.
     */
    "tax"?: CheckoutSessionTax;
    /**
     * Why the session ended. The checkout credential can still read its own closed or expired
     * session; every other call is refused because the session is not open. order_paid_elsewhere
     * applies only to invalidated sessions when payment succeeds or partially succeeds outside the
     * session. order_mutated applies when an edit closes or completes its order, or ends an
     * invoice, return-resolution, or subscription-plan session. Other merchant edits keep hosted
     * and headless sessions open. A session already past expires_at ends with expired before the
     * edit is applied. Value enum: "payment_succeeded", "payment_partially_succeeded", "expired",
     * "closed_by_merchant", "order_mutated", "superseded", "order_paid_elsewhere",
     * "invoice_paid_elsewhere", "invoice_voided", "invoice_uncollectible",
     * "invoice_balance_changed".
     */
    "terminal_reason"?: "payment_succeeded"
        | "payment_partially_succeeded"
        | "expired"
        | "closed_by_merchant"
        | "order_mutated"
        | "superseded"
        | "order_paid_elsewhere"
        | "invoice_paid_elsewhere"
        | "invoice_voided"
        | "invoice_uncollectible"
        | "invoice_balance_changed"
        | (string & {});
    /**
     * The theme checkout renders with: your branding settings, with the session's `title`,
     * `primary_color`, and `accent_color` over them. A session sets only those three; the other
     * fields come from branding settings. Omitted when neither sets a value. Colors, corner
     * radius, font family, and title that style a checkout, taken from the session or link theme
     * or the merchant's branding settings.
     */
    "theme"?: CheckoutTheme;
    /**
     * The tip options this session offers the buyer. Tip settings for a checkout: whether tips are
     * enabled, the percent or fixed amount options, the default tip, and custom tips.
     */
    "tip"?: CheckoutTipConfig;
    /**
     * What the session collects payment for, fixed at creation. Value enum: "order", "quick_pay",
     * "subscription_plan", "invoice", "payment_link".
     */
    "type": "order" | "quick_pay" | "subscription_plan" | "invoice" | "payment_link" | (string & {});
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
    /**
     * Persisted version of this resource's owned state. Expanded resources and external
     * observations can change independently. Format: uint64. minimum: 1.
     */
    "version": number;
});
export type WebhookDeliveriesCreateParams = (InputValue<CreateWebhookDeliveryRequestInput>);
export type WebhookDeliveriesGetParams = DisputesAcceptParams;
export type WebhookDeliveriesListAttemptsParams = CustomersListAddressesParams;
export type WebhookDeliveriesListParams = {
    /**
     * Filter by an exact webhook event ID. Returns an empty page when no visible deliveries match.
     * pattern: ^whev_[0-9A-HJKMNP-TV-Z]{26}$. Example: "whev_01KEZF7C00362MS3HV970TRZGS".
     */
    "webhook_event_id"?: InputValue<string>;
    /**
     * Filter by an exact webhook endpoint ID, including deleted endpoints. Returns an empty page
     * when no visible deliveries match. pattern: ^whep_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "whep_01KEZF7C006FXYTAJRZCGCBJTN".
     */
    "webhook_endpoint_id"?: InputValue<string>;
    /**
     * Filter by delivery status. Values are trimmed and deduplicated in first-seen order; empty or
     * unknown entries are rejected. Values within this filter are ORed; separate filters are
     * ANDed. [] enum: "pending", "delivered", "failed", "suppressed". Value enum: "pending",
     * "delivered", "failed", "suppressed". anyOf[1] (Value): Array of string. minItems: 1. []
     * enum: "pending", "delivered", "failed", "suppressed". anyOf[1][] (Value): string. Value
     * enum: "pending", "delivered", "failed", "suppressed". anyOf[2] (Value): string. Value enum:
     * "pending", "delivered", "failed", "suppressed".
     */
    "status"?: InputValue<("pending" | "delivered" | "failed" | "suppressed")
        | readonly ("pending" | "delivered" | "failed" | "suppressed")[]>;
    /** Inclusive lower bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
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
export type WebhookDeliveriesResendParams = (InputValue<ResendWebhookDeliveryRequestInput>);
/** An attempt to deliver an event to a webhook endpoint. */
export type WebhookDelivery = {
    /**
     * Attempts made by Flint's automatic schedule. Manual resends and the first attempt of a
     * delivery you create don't count. Format: int32.
     */
    "automatic_attempt_count": number;
    /**
     * When the delivery was created: when Flint prepared the event, or when you created it.
     * Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "created_at": string;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "delivered_at"?: string;
    /**
     * The kind of failure on the most recent failed attempt. Absent before any attempt, and when
     * delivered or suppressed. Value enum: "webhook_timeout", "webhook_dns", "webhook_tls",
     * "webhook_connection", "webhook_blocked_target", "webhook_request", "webhook_redirect",
     * "webhook_http_4xx", "webhook_http_5xx", "webhook_payload_render", "webhook_delivery".
     */
    "error_category"?: "webhook_timeout"
        | "webhook_dns"
        | "webhook_tls"
        | "webhook_connection"
        | "webhook_blocked_target"
        | "webhook_request"
        | "webhook_redirect"
        | "webhook_http_4xx"
        | "webhook_http_5xx"
        | "webhook_payload_render"
        | "webhook_delivery"
        | (string & {});
    /**
     * A concise explanation of the failed attempt. Absent before any attempt, and when delivered
     * or suppressed.
     */
    "error_summary"?: string;
    /**
     * HTTP status returned by the receiver on the latest recorded attempt. Omitted when no HTTP
     * response was received. Format: int32.
     */
    "last_response_code"?: number;
    /** Maximum automatic attempts. Format: int32. */
    "max_attempts": number;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "next_retry_at"?: string;
    /** The next step to resolve the failed delivery attempt. */
    "recommended_action"?: string;
    /**
     * Whether sending this delivery again without changing your endpoint is likely to succeed.
     * While the delivery is pending, Flint retries automatically either way.
     */
    "retryable"?: boolean;
    /**
     * Current state of this endpoint delivery and its automatic retry schedule. Value enum:
     * "pending", "delivered", "failed", "suppressed".
     */
    "status": "pending" | "delivered" | "failed" | "suppressed" | (string & {});
    /**
     * Why this delivery was suppressed. Present exactly when status is suppressed. Suppressed
     * deliveries have no failure explanation. Value enum: "endpoint_inactive", "endpoint_deleted",
     * "authorization_revoked", "scope_missing", "event_not_allowed",
     * "partner_app_install_revoked", "sandbox_reset".
     */
    "suppression_reason"?: "endpoint_inactive"
        | "endpoint_deleted"
        | "authorization_revoked"
        | "scope_missing"
        | "event_not_allowed"
        | "partner_app_install_revoked"
        | "sandbox_reset"
        | (string & {});
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
    /**
     * Unique identifier for this webhook delivery, prefixed `wdel_`. Example:
     * "wdel_01KEZF7C001DWSNDCDZHCTBN0A".
     */
    "webhook_delivery_id": string;
    /**
     * ID of the receiving endpoint, retained even after the endpoint is deleted. Example:
     * "whep_01KEZF7C006FXYTAJRZCGCBJTN".
     */
    "webhook_endpoint_id": string;
    /** ID of the event this delivery sends. Example: "whev_01KEZF7C00362MS3HV970TRZGS". */
    "webhook_event_id": string;
};
/**
 * The result of a webhook delivery action, such as a resend: the delivery, attempt, status, and
 * any error details.
 */
export type WebhookDeliveryAction = {
    /**
     * Sequence number of this attempt within the delivery, including automatic and manual
     * attempts. Format: int32.
     */
    "attempt_number": number;
    /**
     * Outcome of the individual attempt made by this action. Value enum: "pending", "delivered",
     * "failed".
     */
    "attempt_status": "pending" | "delivered" | "failed" | (string & {});
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "completed_at"?: string;
    /**
     * Current state of the delivery after this action. Value enum: "pending", "delivered",
     * "failed", "suppressed".
     */
    "delivery_status": "pending" | "delivered" | "failed" | "suppressed" | (string & {});
    /**
     * What caused Flint to make this delivery attempt. Value enum: "automatic_delivery",
     * "automatic_retry", "manual_resend", "manual_delivery", "test_event".
     */
    "delivery_trigger": "automatic_delivery"
        | "automatic_retry"
        | "manual_resend"
        | "manual_delivery"
        | "test_event"
        | (string & {});
    /** Duration of this delivery attempt in milliseconds. Format: int64. */
    "duration_milliseconds"?: number;
    /**
     * The kind of failure for this attempt. Present only when this attempt's `attempt_status` is
     * `failed`. Value enum: "webhook_timeout", "webhook_dns", "webhook_tls", "webhook_connection",
     * "webhook_blocked_target", "webhook_request", "webhook_redirect", "webhook_http_4xx",
     * "webhook_http_5xx", "webhook_payload_render", "webhook_delivery".
     */
    "error_category"?: "webhook_timeout"
        | "webhook_dns"
        | "webhook_tls"
        | "webhook_connection"
        | "webhook_blocked_target"
        | "webhook_request"
        | "webhook_redirect"
        | "webhook_http_4xx"
        | "webhook_http_5xx"
        | "webhook_payload_render"
        | "webhook_delivery"
        | (string & {});
    /**
     * A concise explanation of the failure for this attempt. Present only when this attempt's
     * `attempt_status` is `failed`.
     */
    "error_summary"?: string;
    /** The note supplied when this action was requested. */
    "reason_message"?: string;
    /** The next step to resolve the failed delivery attempt. */
    "recommended_action"?: string;
    /** Receiver response body excerpt. Omitted unless the caller can read the event's resource. */
    "response_body_excerpt"?: string;
    /** Receiver response content type. Omitted unless the caller can read the event's resource. */
    "response_content_type"?: string;
    /**
     * Receiver response headers, keyed by lowercase header name. Repeated values are joined with
     * ", ". Sensitive values read [REDACTED]. Absent when no response was received, after the
     * 14-day response-detail retention, or unless the caller can read the event's resource. *
     * (Value): string.
     */
    "response_headers"?: Record<string, string>;
    /**
     * Whether sending this delivery again without changing your endpoint is likely to succeed.
     * While the delivery is pending, Flint retries automatically either way.
     */
    "retryable"?: boolean;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "started_at"?: string;
    /**
     * HTTP status returned by the receiver. Omitted when no HTTP response was received. Format:
     * int32.
     */
    "status_code"?: number;
    /**
     * ID of this individual attempt to send the event. Example: "watt_01KEZF7C00RG6XMCAFJB8HH55R".
     */
    "webhook_delivery_attempt_id": string;
    /**
     * ID of the endpoint delivery this attempt belongs to. Example:
     * "wdel_01KEZF7C001DWSNDCDZHCTBN0A".
     */
    "webhook_delivery_id": string;
    /** ID of the event sent by this attempt. Example: "whev_01KEZF7C00362MS3HV970TRZGS". */
    "webhook_event_id": string;
};
/** A response containing `WebhookDeliveryAction` data. */
export type WebhookDeliveryActionResponse = {
    /**
     * Resource, collection, or operation result returned by this request. The result of a webhook
     * delivery action, such as a resend: the delivery, attempt, status, and any error details.
     */
    "data": WebhookDeliveryAction;
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
 * One attempt to deliver a webhook event to an endpoint, with its status, timing, response code,
 * and error details.
 */
export type WebhookDeliveryAttempt = {
    /**
     * API version used for this delivery attempt. Omitted when the version was not recorded or
     * payload rendering failed. Format: date. Example: "2026-08-02".
     */
    "api_version"?: string;
    /**
     * Sequence number of this attempt within the delivery, including automatic and manual
     * attempts. Format: int32.
     */
    "attempt_number": number;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "completed_at"?: string;
    /**
     * What caused Flint to make this delivery attempt. Value enum: "automatic_delivery",
     * "automatic_retry", "manual_resend", "manual_delivery", "test_event".
     */
    "delivery_trigger": "automatic_delivery"
        | "automatic_retry"
        | "manual_resend"
        | "manual_delivery"
        | "test_event"
        | (string & {});
    /** Duration of this delivery attempt in milliseconds. Format: int64. */
    "duration_milliseconds"?: number;
    /**
     * The kind of failure for this attempt. Present only when this attempt's `status` is `failed`.
     * Value enum: "webhook_timeout", "webhook_dns", "webhook_tls", "webhook_connection",
     * "webhook_blocked_target", "webhook_request", "webhook_redirect", "webhook_http_4xx",
     * "webhook_http_5xx", "webhook_payload_render", "webhook_delivery".
     */
    "error_category"?: "webhook_timeout"
        | "webhook_dns"
        | "webhook_tls"
        | "webhook_connection"
        | "webhook_blocked_target"
        | "webhook_request"
        | "webhook_redirect"
        | "webhook_http_4xx"
        | "webhook_http_5xx"
        | "webhook_payload_render"
        | "webhook_delivery"
        | (string & {});
    /**
     * A concise explanation of the failure for this attempt. Present only when this attempt's
     * `status` is `failed`.
     */
    "error_summary"?: string;
    /** The note supplied when this action was requested. */
    "reason_message"?: string;
    /** The next step to resolve the failed delivery attempt. */
    "recommended_action"?: string;
    /** Receiver response body excerpt. Omitted unless the caller can read the event's resource. */
    "response_body_excerpt"?: string;
    /** Receiver response content type. Omitted unless the caller can read the event's resource. */
    "response_content_type"?: string;
    /**
     * Receiver response headers, keyed by lowercase header name. Repeated values are joined with
     * ", ". Sensitive values read [REDACTED]. Absent when no response was received, after the
     * 14-day response-detail retention, or unless the caller can read the event's resource. *
     * (Value): string.
     */
    "response_headers"?: Record<string, string>;
    /**
     * Whether sending this delivery again without changing your endpoint is likely to succeed.
     * While the delivery is pending, Flint retries automatically either way.
     */
    "retryable"?: boolean;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "started_at"?: string;
    /**
     * Outcome of this individual delivery attempt. Value enum: "pending", "delivered", "failed".
     */
    "status": "pending" | "delivered" | "failed" | (string & {});
    /**
     * HTTP status returned by the receiver. Omitted when no HTTP response was received. Format:
     * int32.
     */
    "status_code"?: number;
    /**
     * ID of this individual attempt to send the event. Example: "watt_01KEZF7C00RG6XMCAFJB8HH55R".
     */
    "webhook_delivery_attempt_id": string;
    /**
     * ID of the endpoint delivery this attempt belongs to. Example:
     * "wdel_01KEZF7C001DWSNDCDZHCTBN0A".
     */
    "webhook_delivery_id": string;
    /** ID of the event sent by this attempt. Example: "whev_01KEZF7C00362MS3HV970TRZGS". */
    "webhook_event_id": string;
};
/** A page of `WebhookDeliveryAttempt` objects. */
export type WebhookDeliveryAttemptListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * WebhookDeliveryAttempt}. One attempt to deliver a webhook event to an endpoint, with its
     * status, timing, response code, and error details.
     */
    "data": Array<WebhookDeliveryAttempt>;
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
/** A page of `WebhookDelivery` objects. */
export type WebhookDeliveryListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * WebhookDelivery}. An attempt to deliver an event to a webhook endpoint.
     */
    "data": Array<WebhookDelivery>;
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
 * The resource snapshot, without expansions. Webhooks omit these fields: `diagnostics`,
 * `unconfigured_assignment`.
 */
export type WebhookDeliveryProfile = ({
    /**
     * Current delivery requirement and grouping policy. Whether delivery planning applies to items
     * under a delivery profile, and if so the allowed delivery types, resolution mode, origin
     * policy, and grouping and splitting rules.
     */
    "configuration": DeliveryProfileConfiguration;
    /** Time the profile was created. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /**
     * Immutable revision used for new line-item snapshots. Example:
     * "dprofr_01KEZF7C00K1P3FXGHCF46YQ1F".
     */
    "current_delivery_profile_revision_id": string;
    /** Stable delivery profile ID. Example: "dprof_01KEZF7C0020J13FQYNY9854R0". */
    "delivery_profile_id": string;
    /**
     * Caller-owned identifier for this resource in an external system. maxLength: 255. Example:
     * "warehouse-1842".
     */
    "external_reference_id"?: string;
    /** True only when this profile is the current physical catalog default. */
    "is_default": boolean;
    /**
     * Caller-owned metadata. Caller-owned key-value data stored on a resource. Keys starting with
     * flint_ are reserved for Flint and are not returned. Writes follow the limits on
     * MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them.
     */
    "metadata"?: MetadataMap;
    /** Merchant-facing profile name. */
    "name": string;
    /** Current profile lifecycle status. Value enum: "active", "archived". */
    "status": "active" | "archived" | (string & {});
    /** Time the profile last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
    /** Optimistic-concurrency version for profile writes. Format: uint64. minimum: 1. */
    "version": number;
});
/** A response containing `WebhookDelivery` data. */
export type WebhookDeliveryResponse = {
    /**
     * Resource, collection, or operation result returned by this request. An attempt to deliver an
     * event to a webhook endpoint.
     */
    "data": WebhookDelivery;
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
 * A merchant webhook endpoint belongs to the live mode or sandbox of the credential that created
 * it and receives only that environment's events. Partner endpoints select sources with
 * event_sources and installed_merchant_modes.
 */
export type WebhookEndpoint = ({
    /**
     * A dated API version pins this endpoint. The value default follows the endpoint owner's
     * merchant default at delivery time, including retries. Deliveries never use a newer version
     * than the event's recorded version.
     */
    "api_version": string;
    /** When api_version last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "api_version_changed_at"?: string;
    /**
     * Version this endpoint used before its last upgrade. Present while a rollback is available.
     * To roll back, send it as api_version.
     */
    "api_version_previous"?: string;
    /**
     * When the rollback offer for api_version_previous ends. You can still set any supported
     * version afterward. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "api_version_rollback_expires_at"?: string;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /**
     * The API key, user, partner app, or workload identity that created this endpoint. An API key
     * creator can belong to another mode, such as a live key that creates a sandbox endpoint.
     * Absent when the creator is unavailable, including endpoints created before attribution was
     * recorded. A reference to another resource by `resource_type` and `resource_id`.
     */
    "created_by"?: ResourceReference;
    /** Your description of this endpoint. Omitted when none is set. */
    "description"?: string;
    /**
     * Subscribed event types. ["*"] includes every type the endpoint's event_sources deliver,
     * including types added later; * is not available with installed_merchants. Stored
     * subscriptions map previous names permanently and drop removed names on read. Empty when no
     * current subscriptions remain. See the [changelog](/docs/changelog). [] (Value): string.
     * minLength: 1.
     */
    "enabled_events": Array<string>;
    /**
     * Event sources this endpoint receives. Defaults to merchant. Use partner_app for app
     * lifecycle events and installed_merchants for events from merchants that installed the
     * partner app. [] enum: "merchant", "partner_app", "installed_merchants". [] (Value): string.
     * Value enum: "merchant", "partner_app", "installed_merchants".
     */
    "event_sources"?: Array<"merchant" | "partner_app" | "installed_merchants" | (string & {})>;
    /**
     * Modes of installed-merchant events this endpoint receives. Required when event_sources
     * includes installed_merchants and omitted otherwise. Partner app lifecycle events are
     * delivered regardless of these modes. minItems: 1. maxItems: 2. uniqueItems: true. [] enum:
     * "test", "live". [] (Value): string. Value enum: "test", "live".
     */
    "installed_merchant_modes"?: Array<"test" | "live" | (string & {})>;
    /**
     * Partner app that owns partner_app or installed_merchants event sources. Example:
     * "papp_01KEZF7C00Y8VMXYZ1GNPP3WHV".
     */
    "partner_app_id"?: string;
    /**
     * The connected app install this endpoint is linked to. The endpoint is deleted when that
     * install is revoked or loses its grant for this endpoint's environment. Null when the
     * endpoint is not linked to a connected app. Never changes. pattern:
     * ^pinst_[0-9A-HJKMNP-TV-Z]{26}$. Example: "pinst_01KEZF7C003HVKZR3GZAW6AFAZ".
     */
    "partner_app_install_id": string | null;
    /**
     * When the replaced signing secret stops signing deliveries. Present only during a rotation
     * overlap. Until then each delivery carries a signature from both secrets. Format: date-time.
     * Example: "2026-08-02T16:00:00Z".
     */
    "previous_secret_expires_at"?: string;
    /**
     * Methods Flint uses to sign deliveries to this endpoint. minItems: 1. uniqueItems: true. []
     * enum: "jwt", "hmac". [] (Value): string. How Flint signs requests to this endpoint. Value
     * enum: "jwt", "hmac".
     */
    "signing_methods": Array<"jwt" | "hmac" | (string & {})>;
    /**
     * Availability of this endpoint. Deleted is returned only by DELETE. Value enum: "active",
     * "inactive", "deleted".
     */
    "status": "active" | "inactive" | "deleted" | (string & {});
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
    /** Public HTTPS URL that receives webhook deliveries. */
    "url": string;
    /**
     * Current version of this resource's owned state. Send it as `expected_version` when changing
     * the resource to reject a stale write. Format: uint64. minimum: 1.
     */
    "version": number;
    /**
     * Unique identifier for this webhook endpoint, prefixed `whep_`. Example:
     * "whep_01KEZF7C006FXYTAJRZCGCBJTN".
     */
    "webhook_endpoint_id": string;
});
/** A page of `WebhookEndpoint` objects. */
export type WebhookEndpointListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * WebhookEndpoint}. A merchant webhook endpoint belongs to the live mode or sandbox of the
     * credential that created it and receives only that environment's events. Partner endpoints
     * select sources with event_sources and installed_merchant_modes.
     */
    "data": Array<WebhookEndpoint>;
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
/** A response containing `WebhookEndpoint` data. */
export type WebhookEndpointResponse = {
    /**
     * Resource, collection, or operation result returned by this request. A merchant webhook
     * endpoint belongs to the live mode or sandbox of the credential that created it and receives
     * only that environment's events. Partner endpoints select sources with event_sources and
     * installed_merchant_modes.
     */
    "data": WebhookEndpoint;
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
 * A webhook endpoint with its one-time signing secret, returned on create with hmac, when PATCH
 * first enables hmac, or when its secret is rotated. A merchant webhook endpoint belongs to the
 * live mode or sandbox of the credential that created it and receives only that environment's
 * events. Partner endpoints select sources with event_sources and installed_merchant_modes.
 */
export type WebhookEndpointWithSecret = (Exclude<WebhookEndpoint & object, readonly unknown[]>)
    & ({
    /**
     * One-time signing secret. Present on create when hmac is enabled, on PATCH when hmac is first
     * enabled, and on rotation; omitted on an idempotent replay after the secret retention period.
     */
    "secret"?: string;
});
/** A response containing `WebhookEndpointWithSecret` data. */
export type WebhookEndpointWithSecretResponse = {
    /**
     * Resource, collection, or operation result returned by this request. A webhook endpoint with
     * its one-time signing secret, returned on create with hmac, when PATCH first enables hmac, or
     * when its secret is rotated. A merchant webhook endpoint belongs to the live mode or sandbox
     * of the credential that created it and receives only that environment's events. Partner
     * endpoints select sources with event_sources and installed_merchant_modes.
     */
    "data": WebhookEndpointWithSecret;
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
export type WebhookEndpointsCreateParams = (InputValue<CreateWebhookEndpointRequestInput>);
export type WebhookEndpointsCreateTestEventParams = (InputValue<CreateWebhookTestEventRequestInput>);
export type WebhookEndpointsDeleteParams = {
    /**
     * Optional configuration version last read by the caller. Format: uint64. minimum: 1. maximum:
     * 9007199254740991.
     */
    "expected_version"?: InputValue<number>;
};
export type WebhookEndpointsGetParams = DisputesAcceptParams;
