import type { InputValue } from '../runtime.js';
import type { UpdateModifierGroupRequestInput, UpdateModifierSetRequestInput } from './types-51.js';
import type { MetadataMap, MetadataRequestInput, ModifierGroup, Merchant } from './types-32.js';
import type { InlineModifierGroupRequest, InlineModifierGroupRequestInput } from './types-25.js';
import type { ResponseMeta } from './types-42.js';
import type { CreateModifierSetRequestInput } from './types-8.js';
import type { ResponseWarning } from './types-43.js';
import type { DeveloperInitialAPIKeyRequestInput } from './types-17.js';
import type { ReadinessAction } from './types-41.js';
import type { User } from './types-53.js';
import type { BuyerAction } from './types-1.js';
import type { CheckoutBuyerContact } from './types-4.js';
import type {
    ExpandedCustomerSummary,
    ExpandedPaymentIntentSummary,
    ExpandedSubscriptionPlanSummary,
    ExpandedSubscriptionSummary
} from './types-18.js';
import type { Fulfillment } from './types-19.js';
import type { InventoryRoutingSource } from './types-27.js';
import type {
    OrderDeliveryDestination,
    OrderDiscount,
    OrderGiftCardEstimate,
    OrderGiftCardSelection,
    OrderGiftCardSettlement,
    OrderLineItem,
    OrderPaymentAttempt,
    OrderReturnCreditSettlement
} from './types-34.js';
import type { OrderTax } from './types-35.js';
import type { PaymentCollection } from './types-37.js';
import type { PricingAmounts } from './types-39.js';
import type { SettlementAmounts } from './types-47.js';
import type { TicketedEvent, Tip } from './types-50.js';
import type { TaxCalculationRequestInput, TaxCalculationRequest } from './types-49.js';
export type ModifierGroupsUpdateInput = {
    /** Shape $ (Value): string. */
    "modifier_group_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link UpdateModifierGroupRequestInput}. The request body for: Update
     * modifier group.
     */
    "body": InputValue<UpdateModifierGroupRequestInput>;
};
/**
 * Shape $ (Value): {@link ModifierOverride}. Settings for one modifier that apply only within a
 * modifier set group, overriding the modifier group's own values.
 */
export type ModifierOverride = {
    /**
     * Shape $ (Value): boolean. Whether this modifier can be offered in this set. Defaults to
     * true; the modifier must also have status active. Default: true.
     */
    "available"?: boolean;
    /**
     * Shape $ (Value): integer string. Overrides the modifier's default_quantity for this set.
     * Omit it to use the modifier's value. Ignored when the choice is unavailable. Quantities are
     * whole numbers; fractional quantities are not supported. Use an integer string (decimal
     * digits), not a floating-point number. Format: int64.
     */
    "default_quantity"?: `${bigint}`;
    /**
     * Shape $ (Value): string. Overrides the modifier's line_item_tax_category for this set. Omit
     * it to use the modifier's value. Value enum: "general", "physical_goods", "digital_goods",
     * "software", "saas", "services", "professional_services", "food", "prepared_food",
     * "clothing", "medical_goods", "admission".
     */
    "line_item_tax_category"?: "general"
        | "physical_goods"
        | "digital_goods"
        | "software"
        | "saas"
        | "services"
        | "professional_services"
        | "food"
        | "prepared_food"
        | "clothing"
        | "medical_goods"
        | "admission"
        | (string & {});
    /**
     * Shape $ (Value): string. Identifier of the list modifier these overrides apply to.
     * minLength: 1.
     */
    "modifier_id": string;
    /**
     * Shape $ (Value): boolean. Overrides the modifier's selected_by_default for this set. Omit it
     * to use the modifier's value. Ignored when the choice is unavailable.
     */
    "selected_by_default"?: boolean;
    /**
     * Shape $ (Value): boolean. Overrides the modifier's taxable for this set. Omit it to use the
     * modifier's value.
     */
    "taxable"?: boolean;
    /**
     * Shape $ (Value): {@link MoneyValue}. Overrides the modifier's unit_price_delta_money for
     * this set. Omit it to use the modifier's value. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code.
     */
    "unit_price_delta_money"?: MoneyValue;
};
/**
 * Shape $ (Value): {@link ModifierOverrideInput}. Settings for one modifier that apply only within
 * a modifier set group, overriding the modifier group's own values.
 */
export type ModifierOverrideInput = {
    /**
     * Shape $ (Value): boolean. Whether this modifier can be offered in this set. Defaults to
     * true; the modifier must also have status active. Default: true.
     */
    "available"?: boolean;
    /**
     * Shape $ (Value): integer string. Overrides the modifier's default_quantity for this set.
     * Omit it to use the modifier's value. Ignored when the choice is unavailable. Quantities are
     * whole numbers; fractional quantities are not supported. Use an integer string (decimal
     * digits), not a floating-point number. Format: int64.
     */
    "default_quantity"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): string. Overrides the modifier's line_item_tax_category for this set. Omit
     * it to use the modifier's value. Value enum: "general", "physical_goods", "digital_goods",
     * "software", "saas", "services", "professional_services", "food", "prepared_food",
     * "clothing", "medical_goods", "admission".
     */
    "line_item_tax_category"?: "general"
        | "physical_goods"
        | "digital_goods"
        | "software"
        | "saas"
        | "services"
        | "professional_services"
        | "food"
        | "prepared_food"
        | "clothing"
        | "medical_goods"
        | "admission";
    /**
     * Shape $ (Value): string. Identifier of the list modifier these overrides apply to.
     * minLength: 1.
     */
    "modifier_id": string;
    /**
     * Shape $ (Value): boolean. Overrides the modifier's selected_by_default for this set. Omit it
     * to use the modifier's value. Ignored when the choice is unavailable.
     */
    "selected_by_default"?: boolean;
    /**
     * Shape $ (Value): boolean. Overrides the modifier's taxable for this set. Omit it to use the
     * modifier's value.
     */
    "taxable"?: boolean;
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Overrides the modifier's unit_price_delta_money
     * for this set. Omit it to use the modifier's value. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "unit_price_delta_money"?: MoneyValueInput;
};
/**
 * Shape $ (Value): {@link ModifierRequest}. A modifier you supply when creating or updating a
 * modifier group, such as an add-on with a price change.
 */
export type ModifierRequest = {
    /**
     * Shape $ (Value): integer string. Whole-number quantity selected by default. Used only when
     * the choice is available and selected_by_default is true. A modifier set can override this
     * value; fractional quantities are not supported. Use an integer string (decimal digits), not
     * a floating-point number. Format: int64.
     */
    "default_quantity"?: `${bigint}`;
    /**
     * Shape $ (Value): string. Flint line-item tax category. Value enum: "general",
     * "physical_goods", "digital_goods", "software", "saas", "services", "professional_services",
     * "food", "prepared_food", "clothing", "medical_goods", "admission".
     */
    "line_item_tax_category"?: "general"
        | "physical_goods"
        | "digital_goods"
        | "software"
        | "saas"
        | "services"
        | "professional_services"
        | "food"
        | "prepared_food"
        | "clothing"
        | "medical_goods"
        | "admission"
        | (string & {});
    /**
     * Shape $ (Value): {@link MetadataMap}. Caller-owned metadata. Values can't be empty strings.
     * Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written
     * through the public API. Caller-owned key-value data for a new or replaced map. Omit it for
     * no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1
     * to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values
     * can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties:
     * 50.
     */
    "metadata"?: MetadataMap;
    /**
     * Shape $ (Value): string. Stable identifier of the modifier. In a replacement request,
     * include it to retain a modifier or omit it to create one. minLength: 1.
     */
    "modifier_id"?: string;
    /**
     * Shape $ (Value): string. Name of the choice shown to buyers. minLength: 1. maxLength: 255.
     */
    "name": string;
    /**
     * Shape $ (Value): integer. Display position of the choice within its group; lower values
     * appear first. Format: int32.
     */
    "position"?: number;
    /**
     * Shape $ (Value): boolean. Whether this choice is selected when the buyer has not supplied
     * selections for the group. A modifier set can override this value; unavailable choices are
     * never selected by default. Default: false.
     */
    "selected_by_default"?: boolean;
    /** Shape $ (Value): boolean. Whether this modifier appears in fulfillment details. */
    "show_on_fulfillment"?: boolean;
    /** Shape $ (Value): boolean. Whether this modifier appears on buyer receipts. */
    "show_on_receipt"?: boolean;
    /**
     * Shape $ (Value): string. Lifecycle status of the modifier. Only active modifiers can be
     * offered to buyers. Value enum: "active", "inactive".
     */
    "status"?: "active" | "inactive" | (string & {});
    /**
     * Shape $ (Value): boolean. Whether this modifier's price is taxable. A modifier set can
     * override this value.
     */
    "taxable"?: boolean;
    /**
     * Shape $ (Value): {@link MoneyValue}. Amount added to the item's unit price for each unit of
     * this modifier. A modifier set can override this value. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "unit_price_delta_money"?: MoneyValue;
};
/**
 * Shape $ (Value): {@link ModifierRequestInput}. A modifier you supply when creating or updating a
 * modifier group, such as an add-on with a price change.
 */
export type ModifierRequestInput = {
    /**
     * Shape $ (Value): integer string. Whole-number quantity selected by default. Used only when
     * the choice is available and selected_by_default is true. A modifier set can override this
     * value; fractional quantities are not supported. Use an integer string (decimal digits), not
     * a floating-point number. Format: int64.
     */
    "default_quantity"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): string. Flint line-item tax category. Value enum: "general",
     * "physical_goods", "digital_goods", "software", "saas", "services", "professional_services",
     * "food", "prepared_food", "clothing", "medical_goods", "admission".
     */
    "line_item_tax_category"?: "general"
        | "physical_goods"
        | "digital_goods"
        | "software"
        | "saas"
        | "services"
        | "professional_services"
        | "food"
        | "prepared_food"
        | "clothing"
        | "medical_goods"
        | "admission";
    /**
     * Shape $ (Value): {@link MetadataRequestInput}. Caller-owned metadata. Values can't be empty
     * strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be
     * written through the public API. Caller-owned key-value data for a new or replaced map. Omit
     * it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values
     * are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes.
     * Values can't be empty strings, and keys starting with flint_ are reserved for Flint.
     * maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /**
     * Shape $ (Value): string. Stable identifier of the modifier. In a replacement request,
     * include it to retain a modifier or omit it to create one. minLength: 1.
     */
    "modifier_id"?: string;
    /**
     * Shape $ (Value): string. Name of the choice shown to buyers. minLength: 1. maxLength: 255.
     */
    "name": string;
    /**
     * Shape $ (Value): integer. Display position of the choice within its group; lower values
     * appear first. Format: int32.
     */
    "position"?: number;
    /**
     * Shape $ (Value): boolean. Whether this choice is selected when the buyer has not supplied
     * selections for the group. A modifier set can override this value; unavailable choices are
     * never selected by default. Default: false.
     */
    "selected_by_default"?: boolean;
    /** Shape $ (Value): boolean. Whether this modifier appears in fulfillment details. */
    "show_on_fulfillment"?: boolean;
    /** Shape $ (Value): boolean. Whether this modifier appears on buyer receipts. */
    "show_on_receipt"?: boolean;
    /**
     * Shape $ (Value): string. Lifecycle status of the modifier. Only active modifiers can be
     * offered to buyers. Value enum: "active", "inactive".
     */
    "status"?: "active" | "inactive";
    /**
     * Shape $ (Value): boolean. Whether this modifier's price is taxable. A modifier set can
     * override this value.
     */
    "taxable"?: boolean;
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Amount added to the item's unit price for each
     * unit of this modifier. A modifier set can override this value. Monetary amount represented
     * as integer minor units plus an ISO 4217 currency code.
     */
    "unit_price_delta_money"?: MoneyValueInput;
};
/** Shape $ (Value): {@link ModifierSet}. A reusable collection of customization groups. */
export type ModifierSet = {
    /**
     * Shape $ (Value): string. When the modifier set was created, as an RFC3339 timestamp. Format:
     * date-time.
     */
    "created_at"?: string;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * maxLength: 255.
     */
    "external_reference_id"?: string;
    /** Shape $ (Value): string. Identifier of the merchant that owns this modifier set. */
    "merchant_id"?: string;
    /**
     * Shape $ (Value): {@link MetadataMap}. Caller-owned metadata. Values can't be empty strings.
     * Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written
     * through the public API. Caller-owned key-value data stored on a resource. Keys starting with
     * flint_ are reserved for Flint and are not returned. Writes follow the limits on
     * MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them.
     */
    "metadata"?: MetadataMap;
    /**
     * Shape $ (Value): Array of {@link ModifierSetGroup}. Ordered group entries in this set,
     * including references to reusable groups and groups owned by the set. Shape $[] (Value):
     * {@link ModifierSetGroup}. A modifier group as it appears in a modifier set, with its
     * selection limits, display options, and per-modifier overrides.
     */
    "modifier_groups": Array<ModifierSetGroup>;
    /** Shape $ (Value): string. Stable identifier of the modifier set assigned to catalog items. */
    "modifier_set_id": string;
    /** Shape $ (Value): string. Name used to identify this modifier set. */
    "name": string;
    /**
     * Shape $ (Value): string. Lifecycle status of the modifier set. Only active sets can be
     * offered to buyers; archived sets remain readable and cannot be edited. Value enum: "active",
     * "inactive", "archived".
     */
    "status": "active" | "inactive" | "archived" | (string & {});
    /**
     * Shape $ (Value): string. When the modifier set, its group entries, or its inline groups last
     * changed, as an RFC3339 timestamp. Format: date-time.
     */
    "updated_at"?: string;
    /**
     * Shape $ (Value): integer string. Version of the modifier set, its group entries, and its
     * inline groups. Send it as expected_version when replacing modifier_groups. Use an integer
     * string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     */
    "version": `${bigint}`;
};
/**
 * Shape $ (Value): {@link ModifierSetGroup}. A modifier group as it appears in a modifier set,
 * with its selection limits, display options, and per-modifier overrides.
 */
export type ModifierSetGroup = ({
    /**
     * Shape $ (Value): string. Overrides the group's name for this set. Omit it to use the group's
     * name.
     */
    "display_name"?: string;
    /**
     * Shape $ (Value): integer. Overrides the group's max_selected for this set. Omit it to use
     * the group's value. Accepted only for list groups; if neither value is set, there is no
     * limit. Format: int32.
     */
    "max_selected"?: number;
    /**
     * Shape $ (Value): integer. Overrides the group's min_selected for this set. Omit it to use
     * the group's value. Accepted only for list groups; if neither value is set, the minimum is 0.
     * Format: int32.
     */
    "min_selected"?: number;
    /**
     * Shape $ (Value): {@link ModifierGroup}. Modifier group owned by this set when source is
     * inline. Read this group through GET /v1/modifier-sets/{modifier_set_id}; /v1/modifier-groups
     * doesn't return it. A group of choices that customize an item.
     */
    "modifier_group"?: ModifierGroup;
    /**
     * Shape $ (Value): string. Identifier of the independent modifier group referenced when source
     * is existing.
     */
    "modifier_group_id"?: string;
    /** Shape $ (Value): string. Current name of the referenced modifier group. */
    "modifier_group_name"?: string;
    /**
     * Shape $ (Value): Array of {@link ModifierOverride}. Overrides for individual list modifiers
     * in this set. A choice is offered only when its status is active and its override's available
     * is not false. Shape $[] (Value): {@link ModifierOverride}. Settings for one modifier that
     * apply only within a modifier set group, overriding the modifier group's own values.
     */
    "modifier_overrides"?: Array<ModifierOverride>;
    /**
     * Shape $ (Value): string. Stable identifier of this group entry within the set. In a
     * replacement request, include it to retain an entry or omit it to create one.
     */
    "modifier_set_group_id": string;
    /**
     * Shape $ (Value): integer. Display position of this group within the set; lower values appear
     * first. Format: int32.
     */
    "position": number;
    /**
     * Shape $ (Value): boolean. Overrides the group's text.required for this set. Omit it to use
     * the group's value. Accepted only for text groups; list groups use min_selected.
     */
    "required"?: boolean;
    /**
     * Shape $ (Value): boolean. Overrides the group's show_on_fulfillment for this set. Omit it to
     * use the group's value.
     */
    "show_on_fulfillment"?: boolean;
    /**
     * Shape $ (Value): boolean. Overrides the group's show_on_receipt for this set. Omit it to use
     * the group's value.
     */
    "show_on_receipt"?: boolean;
    /**
     * Shape $ (Value): string. Inline groups are owned by this modifier set. Existing groups are
     * independent resources referenced by this set. Value enum: "existing", "inline".
     */
    "source": "existing" | "inline" | (string & {});
})
    & ((Exclude<ModifierSetGroupExisting & object, readonly unknown[]>)
    | (Exclude<ModifierSetGroupInline & object, readonly unknown[]>)
    | (Record<string, unknown>));
/**
 * Shape $ (Value): {@link ModifierSetGroupExisting}. The `existing` variant of `ModifierSetGroup`.
 */
export type ModifierSetGroupExisting = ({
    /**
     * Shape $ (Value): string. Overrides the group's name for this set. Omit it to use the group's
     * name.
     */
    "display_name"?: string;
    /**
     * Shape $ (Value): integer. Overrides the group's max_selected for this set. Omit it to use
     * the group's value. Accepted only for list groups; if neither value is set, there is no
     * limit. Format: int32.
     */
    "max_selected"?: number;
    /**
     * Shape $ (Value): integer. Overrides the group's min_selected for this set. Omit it to use
     * the group's value. Accepted only for list groups; if neither value is set, the minimum is 0.
     * Format: int32.
     */
    "min_selected"?: number;
    /**
     * Shape $ (Value): {@link ModifierGroup}. Modifier group owned by this set when source is
     * inline. Read this group through GET /v1/modifier-sets/{modifier_set_id}; /v1/modifier-groups
     * doesn't return it. A group of choices that customize an item.
     */
    "modifier_group"?: ModifierGroup;
    /**
     * Shape $ (Value): string. Identifier of the independent modifier group referenced when source
     * is existing.
     */
    "modifier_group_id": string;
    /** Shape $ (Value): string. Current name of the referenced modifier group. */
    "modifier_group_name": string;
    /**
     * Shape $ (Value): Array of {@link ModifierOverride}. Overrides for individual list modifiers
     * in this set. A choice is offered only when its status is active and its override's available
     * is not false. Shape $[] (Value): {@link ModifierOverride}. Settings for one modifier that
     * apply only within a modifier set group, overriding the modifier group's own values.
     */
    "modifier_overrides"?: Array<ModifierOverride>;
    /**
     * Shape $ (Value): string. Stable identifier of this group entry within the set. In a
     * replacement request, include it to retain an entry or omit it to create one.
     */
    "modifier_set_group_id": string;
    /**
     * Shape $ (Value): integer. Display position of this group within the set; lower values appear
     * first. Format: int32.
     */
    "position": number;
    /**
     * Shape $ (Value): boolean. Overrides the group's text.required for this set. Omit it to use
     * the group's value. Accepted only for text groups; list groups use min_selected.
     */
    "required"?: boolean;
    /**
     * Shape $ (Value): boolean. Overrides the group's show_on_fulfillment for this set. Omit it to
     * use the group's value.
     */
    "show_on_fulfillment"?: boolean;
    /**
     * Shape $ (Value): boolean. Overrides the group's show_on_receipt for this set. Omit it to use
     * the group's value.
     */
    "show_on_receipt"?: boolean;
    /**
     * Shape $ (Value): string. Inline groups are owned by this modifier set. Existing groups are
     * independent resources referenced by this set. Value enum: "existing".
     */
    "source": "existing" | (string & {});
})
    & (({
    /**
     * Shape $ (Value): string. References an independent modifier group. Value enum: "existing".
     */
    "source": "existing" | (string & {});
    /**
     * Shape $ (Value): string. Identifier of the independent modifier group referenced when source
     * is existing.
     */
    "modifier_group_id": string;
    /** Shape $ (Value): string. Current name of the referenced modifier group. */
    "modifier_group_name": string;
}));
/** Shape $ (Value): {@link ModifierSetGroupInline}. The `inline` variant of `ModifierSetGroup`. */
export type ModifierSetGroupInline = ({
    /**
     * Shape $ (Value): string. Overrides the group's name for this set. Omit it to use the group's
     * name.
     */
    "display_name"?: string;
    /**
     * Shape $ (Value): integer. Overrides the group's max_selected for this set. Omit it to use
     * the group's value. Accepted only for list groups; if neither value is set, there is no
     * limit. Format: int32.
     */
    "max_selected"?: number;
    /**
     * Shape $ (Value): integer. Overrides the group's min_selected for this set. Omit it to use
     * the group's value. Accepted only for list groups; if neither value is set, the minimum is 0.
     * Format: int32.
     */
    "min_selected"?: number;
    /**
     * Shape $ (Value): {@link ModifierGroup}. Modifier group owned by this set when source is
     * inline. Read this group through GET /v1/modifier-sets/{modifier_set_id}; /v1/modifier-groups
     * doesn't return it. A group of choices that customize an item.
     */
    "modifier_group": ModifierGroup;
    /**
     * Shape $ (Value): string. Identifier of the independent modifier group referenced when source
     * is existing.
     */
    "modifier_group_id"?: string;
    /** Shape $ (Value): string. Current name of the referenced modifier group. */
    "modifier_group_name"?: string;
    /**
     * Shape $ (Value): Array of {@link ModifierOverride}. Overrides for individual list modifiers
     * in this set. A choice is offered only when its status is active and its override's available
     * is not false. Shape $[] (Value): {@link ModifierOverride}. Settings for one modifier that
     * apply only within a modifier set group, overriding the modifier group's own values.
     */
    "modifier_overrides"?: Array<ModifierOverride>;
    /**
     * Shape $ (Value): string. Stable identifier of this group entry within the set. In a
     * replacement request, include it to retain an entry or omit it to create one.
     */
    "modifier_set_group_id": string;
    /**
     * Shape $ (Value): integer. Display position of this group within the set; lower values appear
     * first. Format: int32.
     */
    "position": number;
    /**
     * Shape $ (Value): boolean. Overrides the group's text.required for this set. Omit it to use
     * the group's value. Accepted only for text groups; list groups use min_selected.
     */
    "required"?: boolean;
    /**
     * Shape $ (Value): boolean. Overrides the group's show_on_fulfillment for this set. Omit it to
     * use the group's value.
     */
    "show_on_fulfillment"?: boolean;
    /**
     * Shape $ (Value): boolean. Overrides the group's show_on_receipt for this set. Omit it to use
     * the group's value.
     */
    "show_on_receipt"?: boolean;
    /**
     * Shape $ (Value): string. Inline groups are owned by this modifier set. Existing groups are
     * independent resources referenced by this set. Value enum: "inline".
     */
    "source": "inline" | (string & {});
})
    & (({
    /**
     * Shape $ (Value): string. Defines a modifier group owned by this modifier set. Value enum:
     * "inline".
     */
    "source": "inline" | (string & {});
    /**
     * Shape $ (Value): {@link ModifierGroup}. Modifier group owned by this set when source is
     * inline. Read this group through GET /v1/modifier-sets/{modifier_set_id}; /v1/modifier-groups
     * doesn't return it. A group of choices that customize an item.
     */
    "modifier_group": ModifierGroup;
}));
/**
 * Shape $ (Value): {@link ModifierSetGroupInputExisting}. The `existing` variant of
 * `ModifierSetGroupInput`.
 */
export type ModifierSetGroupInputExisting = ({
    /**
     * Shape $ (Value): string. Overrides the group's name for this set. Omit it to use the group's
     * name. minLength: 1. maxLength: 255.
     */
    "display_name"?: string;
    /**
     * Shape $ (Value): integer. Overrides the group's max_selected for this set. Omit it to use
     * the group's value. Accepted only for list groups; if neither value is set, there is no
     * limit. Format: int32.
     */
    "max_selected"?: number;
    /**
     * Shape $ (Value): integer. Overrides the group's min_selected for this set. Omit it to use
     * the group's value. Accepted only for list groups; if neither value is set, the minimum is 0.
     * Format: int32.
     */
    "min_selected"?: number;
    /**
     * Shape $ (Value): {@link InlineModifierGroupRequest}. Modifier group owned by this set when
     * source is inline. Read this group through GET /v1/modifier-sets/{modifier_set_id};
     * /v1/modifier-groups doesn't return it. A modifier group defined inline when setting up a
     * modifier set, with its name, rules for how many options can be selected, and its modifiers.
     */
    "modifier_group"?: InlineModifierGroupRequest;
    /**
     * Shape $ (Value): string. Identifier of the independent modifier group referenced when source
     * is existing. minLength: 1.
     */
    "modifier_group_id": string;
    /**
     * Shape $ (Value): Array of {@link ModifierOverride}. Overrides for individual list modifiers
     * in this set. A choice is offered only when its status is active and its override's available
     * is not false. Shape $[] (Value): {@link ModifierOverride}. Settings for one modifier that
     * apply only within a modifier set group, overriding the modifier group's own values.
     */
    "modifier_overrides"?: Array<ModifierOverride>;
    /**
     * Shape $ (Value): string. Stable identifier of this group entry within the set. In a
     * replacement request, include it to retain an entry or omit it to create one. minLength: 1.
     */
    "modifier_set_group_id"?: string;
    /**
     * Shape $ (Value): integer. Display position of this group within the set; lower values appear
     * first. Format: int32.
     */
    "position"?: number;
    /**
     * Shape $ (Value): boolean. Overrides the group's text.required for this set. Omit it to use
     * the group's value. Accepted only for text groups; list groups use min_selected.
     */
    "required"?: boolean;
    /**
     * Shape $ (Value): boolean. Overrides the group's show_on_fulfillment for this set. Omit it to
     * use the group's value.
     */
    "show_on_fulfillment"?: boolean;
    /**
     * Shape $ (Value): boolean. Overrides the group's show_on_receipt for this set. Omit it to use
     * the group's value.
     */
    "show_on_receipt"?: boolean;
    /**
     * Shape $ (Value): string. Use inline for a modifier group owned by this modifier set, or
     * existing to reference an independent modifier group. Value enum: "existing".
     */
    "source": "existing" | (string & {});
})
    & (({
    /**
     * Shape $ (Value): string. References an independent modifier group. Value enum: "existing".
     */
    "source": "existing" | (string & {});
    /**
     * Shape $ (Value): string. Identifier of the independent modifier group referenced when source
     * is existing. minLength: 1.
     */
    "modifier_group_id": string;
}));
/**
 * Shape $ (Value): {@link ModifierSetGroupInputExistingInput}. The `existing` variant of
 * `ModifierSetGroupInput`.
 */
export type ModifierSetGroupInputExistingInput = ({
    /**
     * Shape $ (Value): string. Overrides the group's name for this set. Omit it to use the group's
     * name. minLength: 1. maxLength: 255.
     */
    "display_name"?: string;
    /**
     * Shape $ (Value): integer. Overrides the group's max_selected for this set. Omit it to use
     * the group's value. Accepted only for list groups; if neither value is set, there is no
     * limit. Format: int32.
     */
    "max_selected"?: number;
    /**
     * Shape $ (Value): integer. Overrides the group's min_selected for this set. Omit it to use
     * the group's value. Accepted only for list groups; if neither value is set, the minimum is 0.
     * Format: int32.
     */
    "min_selected"?: number;
    /**
     * Shape $ (Value): {@link InlineModifierGroupRequestInput}. Modifier group owned by this set
     * when source is inline. Read this group through GET /v1/modifier-sets/{modifier_set_id};
     * /v1/modifier-groups doesn't return it. A modifier group defined inline when setting up a
     * modifier set, with its name, rules for how many options can be selected, and its modifiers.
     */
    "modifier_group"?: InlineModifierGroupRequestInput;
    /**
     * Shape $ (Value): string. Identifier of the independent modifier group referenced when source
     * is existing. minLength: 1.
     */
    "modifier_group_id": string;
    /**
     * Shape $ (Value): Array of {@link ModifierOverrideInput}. Overrides for individual list
     * modifiers in this set. A choice is offered only when its status is active and its override's
     * available is not false. Shape $[] (Value): {@link ModifierOverrideInput}. Settings for one
     * modifier that apply only within a modifier set group, overriding the modifier group's own
     * values.
     */
    "modifier_overrides"?: Array<ModifierOverrideInput>;
    /**
     * Shape $ (Value): string. Stable identifier of this group entry within the set. In a
     * replacement request, include it to retain an entry or omit it to create one. minLength: 1.
     */
    "modifier_set_group_id"?: string;
    /**
     * Shape $ (Value): integer. Display position of this group within the set; lower values appear
     * first. Format: int32.
     */
    "position"?: number;
    /**
     * Shape $ (Value): boolean. Overrides the group's text.required for this set. Omit it to use
     * the group's value. Accepted only for text groups; list groups use min_selected.
     */
    "required"?: boolean;
    /**
     * Shape $ (Value): boolean. Overrides the group's show_on_fulfillment for this set. Omit it to
     * use the group's value.
     */
    "show_on_fulfillment"?: boolean;
    /**
     * Shape $ (Value): boolean. Overrides the group's show_on_receipt for this set. Omit it to use
     * the group's value.
     */
    "show_on_receipt"?: boolean;
    /**
     * Shape $ (Value): string. Use inline for a modifier group owned by this modifier set, or
     * existing to reference an independent modifier group. Value enum: "existing".
     */
    "source": "existing";
})
    & (({
    /**
     * Shape $ (Value): string. References an independent modifier group. Value enum: "existing".
     */
    "source": "existing";
    /**
     * Shape $ (Value): string. Identifier of the independent modifier group referenced when source
     * is existing. minLength: 1.
     */
    "modifier_group_id": string;
})
    & ({
    "modifier_group"?: never;
}));
/**
 * Shape $ (Value): {@link ModifierSetGroupInputInline}. The `inline` variant of
 * `ModifierSetGroupInput`.
 */
export type ModifierSetGroupInputInline = ({
    /**
     * Shape $ (Value): string. Overrides the group's name for this set. Omit it to use the group's
     * name. minLength: 1. maxLength: 255.
     */
    "display_name"?: string;
    /**
     * Shape $ (Value): integer. Overrides the group's max_selected for this set. Omit it to use
     * the group's value. Accepted only for list groups; if neither value is set, there is no
     * limit. Format: int32.
     */
    "max_selected"?: number;
    /**
     * Shape $ (Value): integer. Overrides the group's min_selected for this set. Omit it to use
     * the group's value. Accepted only for list groups; if neither value is set, the minimum is 0.
     * Format: int32.
     */
    "min_selected"?: number;
    /**
     * Shape $ (Value): {@link InlineModifierGroupRequest}. Modifier group owned by this set when
     * source is inline. Read this group through GET /v1/modifier-sets/{modifier_set_id};
     * /v1/modifier-groups doesn't return it. A modifier group defined inline when setting up a
     * modifier set, with its name, rules for how many options can be selected, and its modifiers.
     */
    "modifier_group": InlineModifierGroupRequest;
    /**
     * Shape $ (Value): string. Identifier of the independent modifier group referenced when source
     * is existing. minLength: 1.
     */
    "modifier_group_id"?: string;
    /**
     * Shape $ (Value): Array of {@link ModifierOverride}. Overrides for individual list modifiers
     * in this set. A choice is offered only when its status is active and its override's available
     * is not false. Shape $[] (Value): {@link ModifierOverride}. Settings for one modifier that
     * apply only within a modifier set group, overriding the modifier group's own values.
     */
    "modifier_overrides"?: Array<ModifierOverride>;
    /**
     * Shape $ (Value): string. Stable identifier of this group entry within the set. In a
     * replacement request, include it to retain an entry or omit it to create one. minLength: 1.
     */
    "modifier_set_group_id"?: string;
    /**
     * Shape $ (Value): integer. Display position of this group within the set; lower values appear
     * first. Format: int32.
     */
    "position"?: number;
    /**
     * Shape $ (Value): boolean. Overrides the group's text.required for this set. Omit it to use
     * the group's value. Accepted only for text groups; list groups use min_selected.
     */
    "required"?: boolean;
    /**
     * Shape $ (Value): boolean. Overrides the group's show_on_fulfillment for this set. Omit it to
     * use the group's value.
     */
    "show_on_fulfillment"?: boolean;
    /**
     * Shape $ (Value): boolean. Overrides the group's show_on_receipt for this set. Omit it to use
     * the group's value.
     */
    "show_on_receipt"?: boolean;
    /**
     * Shape $ (Value): string. Use inline for a modifier group owned by this modifier set, or
     * existing to reference an independent modifier group. Value enum: "inline".
     */
    "source": "inline" | (string & {});
})
    & (({
    /**
     * Shape $ (Value): string. Defines a modifier group owned by this modifier set. Value enum:
     * "inline".
     */
    "source": "inline" | (string & {});
    /**
     * Shape $ (Value): {@link InlineModifierGroupRequest}. Modifier group owned by this set when
     * source is inline. Read this group through GET /v1/modifier-sets/{modifier_set_id};
     * /v1/modifier-groups doesn't return it. A modifier group defined inline when setting up a
     * modifier set, with its name, rules for how many options can be selected, and its modifiers.
     */
    "modifier_group": InlineModifierGroupRequest;
}));
/**
 * Shape $ (Value): {@link ModifierSetGroupInputInlineInput}. The `inline` variant of
 * `ModifierSetGroupInput`.
 */
export type ModifierSetGroupInputInlineInput = ({
    /**
     * Shape $ (Value): string. Overrides the group's name for this set. Omit it to use the group's
     * name. minLength: 1. maxLength: 255.
     */
    "display_name"?: string;
    /**
     * Shape $ (Value): integer. Overrides the group's max_selected for this set. Omit it to use
     * the group's value. Accepted only for list groups; if neither value is set, there is no
     * limit. Format: int32.
     */
    "max_selected"?: number;
    /**
     * Shape $ (Value): integer. Overrides the group's min_selected for this set. Omit it to use
     * the group's value. Accepted only for list groups; if neither value is set, the minimum is 0.
     * Format: int32.
     */
    "min_selected"?: number;
    /**
     * Shape $ (Value): {@link InlineModifierGroupRequestInput}. Modifier group owned by this set
     * when source is inline. Read this group through GET /v1/modifier-sets/{modifier_set_id};
     * /v1/modifier-groups doesn't return it. A modifier group defined inline when setting up a
     * modifier set, with its name, rules for how many options can be selected, and its modifiers.
     */
    "modifier_group": InlineModifierGroupRequestInput;
    /**
     * Shape $ (Value): string. Identifier of the independent modifier group referenced when source
     * is existing. minLength: 1.
     */
    "modifier_group_id"?: string;
    /**
     * Shape $ (Value): Array of {@link ModifierOverrideInput}. Overrides for individual list
     * modifiers in this set. A choice is offered only when its status is active and its override's
     * available is not false. Shape $[] (Value): {@link ModifierOverrideInput}. Settings for one
     * modifier that apply only within a modifier set group, overriding the modifier group's own
     * values.
     */
    "modifier_overrides"?: Array<ModifierOverrideInput>;
    /**
     * Shape $ (Value): string. Stable identifier of this group entry within the set. In a
     * replacement request, include it to retain an entry or omit it to create one. minLength: 1.
     */
    "modifier_set_group_id"?: string;
    /**
     * Shape $ (Value): integer. Display position of this group within the set; lower values appear
     * first. Format: int32.
     */
    "position"?: number;
    /**
     * Shape $ (Value): boolean. Overrides the group's text.required for this set. Omit it to use
     * the group's value. Accepted only for text groups; list groups use min_selected.
     */
    "required"?: boolean;
    /**
     * Shape $ (Value): boolean. Overrides the group's show_on_fulfillment for this set. Omit it to
     * use the group's value.
     */
    "show_on_fulfillment"?: boolean;
    /**
     * Shape $ (Value): boolean. Overrides the group's show_on_receipt for this set. Omit it to use
     * the group's value.
     */
    "show_on_receipt"?: boolean;
    /**
     * Shape $ (Value): string. Use inline for a modifier group owned by this modifier set, or
     * existing to reference an independent modifier group. Value enum: "inline".
     */
    "source": "inline";
})
    & (({
    /**
     * Shape $ (Value): string. Defines a modifier group owned by this modifier set. Value enum:
     * "inline".
     */
    "source": "inline";
    /**
     * Shape $ (Value): {@link InlineModifierGroupRequestInput}. Modifier group owned by this set
     * when source is inline. Read this group through GET /v1/modifier-sets/{modifier_set_id};
     * /v1/modifier-groups doesn't return it. A modifier group defined inline when setting up a
     * modifier set, with its name, rules for how many options can be selected, and its modifiers.
     */
    "modifier_group": InlineModifierGroupRequestInput;
})
    & ({
    "modifier_group_id"?: never;
}));
/**
 * Shape $ (Value): {@link ModifierSetGroupRequest}. A modifier group you add to a modifier set,
 * either an existing group by ID or a new inline group, with selection limits and overrides.
 */
export type ModifierSetGroupRequest = ({
    /**
     * Shape $ (Value): string. Overrides the group's name for this set. Omit it to use the group's
     * name. minLength: 1. maxLength: 255.
     */
    "display_name"?: string;
    /**
     * Shape $ (Value): integer. Overrides the group's max_selected for this set. Omit it to use
     * the group's value. Accepted only for list groups; if neither value is set, there is no
     * limit. Format: int32.
     */
    "max_selected"?: number;
    /**
     * Shape $ (Value): integer. Overrides the group's min_selected for this set. Omit it to use
     * the group's value. Accepted only for list groups; if neither value is set, the minimum is 0.
     * Format: int32.
     */
    "min_selected"?: number;
    /**
     * Shape $ (Value): {@link InlineModifierGroupRequest}. Modifier group owned by this set when
     * source is inline. Read this group through GET /v1/modifier-sets/{modifier_set_id};
     * /v1/modifier-groups doesn't return it. A modifier group defined inline when setting up a
     * modifier set, with its name, rules for how many options can be selected, and its modifiers.
     */
    "modifier_group"?: InlineModifierGroupRequest;
    /**
     * Shape $ (Value): string. Identifier of the independent modifier group referenced when source
     * is existing. minLength: 1.
     */
    "modifier_group_id"?: string;
    /**
     * Shape $ (Value): Array of {@link ModifierOverride}. Overrides for individual list modifiers
     * in this set. A choice is offered only when its status is active and its override's available
     * is not false. Shape $[] (Value): {@link ModifierOverride}. Settings for one modifier that
     * apply only within a modifier set group, overriding the modifier group's own values.
     */
    "modifier_overrides"?: Array<ModifierOverride>;
    /**
     * Shape $ (Value): string. Stable identifier of this group entry within the set. In a
     * replacement request, include it to retain an entry or omit it to create one. minLength: 1.
     */
    "modifier_set_group_id"?: string;
    /**
     * Shape $ (Value): integer. Display position of this group within the set; lower values appear
     * first. Format: int32.
     */
    "position"?: number;
    /**
     * Shape $ (Value): boolean. Overrides the group's text.required for this set. Omit it to use
     * the group's value. Accepted only for text groups; list groups use min_selected.
     */
    "required"?: boolean;
    /**
     * Shape $ (Value): boolean. Overrides the group's show_on_fulfillment for this set. Omit it to
     * use the group's value.
     */
    "show_on_fulfillment"?: boolean;
    /**
     * Shape $ (Value): boolean. Overrides the group's show_on_receipt for this set. Omit it to use
     * the group's value.
     */
    "show_on_receipt"?: boolean;
    /**
     * Shape $ (Value): string. Use inline for a modifier group owned by this modifier set, or
     * existing to reference an independent modifier group. Value enum: "existing", "inline".
     */
    "source": "existing" | "inline" | (string & {});
})
    & ((Exclude<ModifierSetGroupInputExisting & object, readonly unknown[]>)
    | (Exclude<ModifierSetGroupInputInline & object, readonly unknown[]>)
    | (Record<string, unknown>));
/**
 * Shape $ (Value): {@link ModifierSetGroupRequestInput}. A modifier group you add to a modifier
 * set, either an existing group by ID or a new inline group, with selection limits and overrides.
 */
export type ModifierSetGroupRequestInput = ({
    /**
     * Shape $ (Value): string. Overrides the group's name for this set. Omit it to use the group's
     * name. minLength: 1. maxLength: 255.
     */
    "display_name"?: string;
    /**
     * Shape $ (Value): integer. Overrides the group's max_selected for this set. Omit it to use
     * the group's value. Accepted only for list groups; if neither value is set, there is no
     * limit. Format: int32.
     */
    "max_selected"?: number;
    /**
     * Shape $ (Value): integer. Overrides the group's min_selected for this set. Omit it to use
     * the group's value. Accepted only for list groups; if neither value is set, the minimum is 0.
     * Format: int32.
     */
    "min_selected"?: number;
    /**
     * Shape $ (Value): {@link InlineModifierGroupRequestInput}. Modifier group owned by this set
     * when source is inline. Read this group through GET /v1/modifier-sets/{modifier_set_id};
     * /v1/modifier-groups doesn't return it. A modifier group defined inline when setting up a
     * modifier set, with its name, rules for how many options can be selected, and its modifiers.
     */
    "modifier_group"?: InlineModifierGroupRequestInput;
    /**
     * Shape $ (Value): string. Identifier of the independent modifier group referenced when source
     * is existing. minLength: 1.
     */
    "modifier_group_id"?: string;
    /**
     * Shape $ (Value): Array of {@link ModifierOverrideInput}. Overrides for individual list
     * modifiers in this set. A choice is offered only when its status is active and its override's
     * available is not false. Shape $[] (Value): {@link ModifierOverrideInput}. Settings for one
     * modifier that apply only within a modifier set group, overriding the modifier group's own
     * values.
     */
    "modifier_overrides"?: Array<ModifierOverrideInput>;
    /**
     * Shape $ (Value): string. Stable identifier of this group entry within the set. In a
     * replacement request, include it to retain an entry or omit it to create one. minLength: 1.
     */
    "modifier_set_group_id"?: string;
    /**
     * Shape $ (Value): integer. Display position of this group within the set; lower values appear
     * first. Format: int32.
     */
    "position"?: number;
    /**
     * Shape $ (Value): boolean. Overrides the group's text.required for this set. Omit it to use
     * the group's value. Accepted only for text groups; list groups use min_selected.
     */
    "required"?: boolean;
    /**
     * Shape $ (Value): boolean. Overrides the group's show_on_fulfillment for this set. Omit it to
     * use the group's value.
     */
    "show_on_fulfillment"?: boolean;
    /**
     * Shape $ (Value): boolean. Overrides the group's show_on_receipt for this set. Omit it to use
     * the group's value.
     */
    "show_on_receipt"?: boolean;
    /**
     * Shape $ (Value): string. Use inline for a modifier group owned by this modifier set, or
     * existing to reference an independent modifier group. Value enum: "existing", "inline".
     */
    "source": "existing" | "inline";
})
    & ((Exclude<ModifierSetGroupInputExistingInput & object, readonly unknown[]>)
    | (Exclude<ModifierSetGroupInputInlineInput & object, readonly unknown[]>));
/** Shape $ (Value): {@link ModifierSetListResponse}. A page of `ModifierSet` objects. */
export type ModifierSetListResponse = {
    /**
     * Shape $ (Value): Array of {@link ModifierSet}. Modifier sets matching the request filters
     * for this page. Shape $[] (Value): {@link ModifierSet}. A reusable collection of
     * customization groups.
     */
    "data": Array<ModifierSet>;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Response metadata, including API version, trace
     * identifier, and warnings when present. Metadata returned with a response: the `api_version`,
     * `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Shape $ (Value): string. Pass this token as page_token to read the next page with the same
     * filters. Absent when there are no more results.
     */
    "next_page_token"?: string;
    /**
     * Shape $ (Value): string. Identifier of this API request, useful when contacting Flint
     * support. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/** Shape $ (Value): {@link ModifierSetResponse}. A response containing `ModifierSet` data. */
export type ModifierSetResponse = {
    /**
     * Shape $ (Value): {@link ModifierSet}. The modifier set returned by this operation. A
     * reusable collection of customization groups.
     */
    "data": ModifierSet;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Response metadata, including API version, trace
     * identifier, and warnings when present. Metadata returned with a response: the `api_version`,
     * `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Shape $ (Value): string. Identifier of this API request, useful when contacting Flint
     * support. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
export type ModifierSetsCreateInput = {
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link CreateModifierSetRequestInput}. The request body for: Create
     * modifier set.
     */
    "body": InputValue<CreateModifierSetRequestInput>;
};
export type ModifierSetsGetInput = {
    /** Shape $ (Value): string. */
    "modifier_set_id": InputValue<string>;
};
export type ModifierSetsListInput = {
    /** Shape $ (Value): integer. minimum: 1. maximum: 100. Default: 20. */
    "page_size"?: InputValue<number>;
    /** Shape $ (Value): string. */
    "page_token"?: InputValue<string>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "active", "inactive", "archived".
     * Shape $[] (Value): string. Value enum: "active", "inactive", "archived".
     */
    "status"?: InputValue<Array<"active" | "inactive" | "archived">>;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "external_reference_id"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "query"?: InputValue<string>;
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
};
export type ModifierSetsRemoveInput = {
    /** Shape $ (Value): string. */
    "modifier_set_id": InputValue<string>;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: InputValue<`${bigint}` | bigint>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
};
export type ModifierSetsUpdateInput = {
    /** Shape $ (Value): string. */
    "modifier_set_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link UpdateModifierSetRequestInput}. The request body for: Update
     * modifier set.
     */
    "body": InputValue<UpdateModifierSetRequestInput>;
};
/**
 * Shape $ (Value): {@link MoneyMovementBlockedReason}. Why a money movement action is blocked,
 * with an error code, a message, next steps, and who can resolve it.
 */
export type MoneyMovementBlockedReason = {
    /** Shape $ (Value): string. */
    "code": string;
    /** Shape $ (Value): string. */
    "message"?: string;
    /** Shape $ (Value): string. */
    "next_steps"?: string;
    /** Shape $ (Value): string. */
    "param"?: string;
    /** Shape $ (Value): string.  Value enum: "merchant", "flint", "integrator", "buyer". */
    "resolution_owner"?: "merchant" | "flint" | "integrator" | "buyer" | (string & {});
    /** Shape $ (Value): boolean. */
    "retryable"?: boolean;
};
/**
 * Shape $ (Value): {@link MoneyMovementHistoryMeta}. How complete the history in a money movement
 * list is and when it was last reconciled.
 */
export type MoneyMovementHistoryMeta = {
    /**
     * Shape $ (Value): string. When Flint last finished reconciling this list's history with your
     * processor. Absent until a reconciliation finishes. Format: date-time.
     */
    "latest_reconciled_at"?: string;
    /**
     * Shape $ (Value): string. Why the history may be incomplete: backfilling while Flint is still
     * importing older history from your processor, partial when Flint has records from your
     * processor but hasn't imported its full history, and unavailable when Flint can't say, such
     * as before any import or after one fails. The list still returns every record Flint has.
     * Value enum: "backfilling", "partial", "unavailable".
     */
    "status": "backfilling" | "partial" | "unavailable" | (string & {});
};
/**
 * Shape $ (Value): {@link MoneyMovementListMeta}. Response metadata for money movement lists,
 * including request and trace IDs, warnings, and the state of the available history.
 */
export type MoneyMovementListMeta = {
    /** Shape $ (Value): string. API version used to produce this response. */
    "api_version"?: string;
    /**
     * Shape $ (Value): {@link MoneyMovementHistoryMeta}. How complete Flint's history for this
     * list is. history is omitted when Flint's history for this list is complete. How complete the
     * history in a money movement list is and when it was last reconciled.
     */
    "history"?: MoneyMovementHistoryMeta;
    /**
     * Shape $ (Value): boolean. Whether this response replays a stored result for the supplied
     * Idempotency-Key.
     */
    "idempotency_replayed"?: boolean;
    /**
     * Shape $ (Value): string. Trace identifier to include when contacting Flint about this
     * request.
     */
    "trace_id"?: string;
    /**
     * Shape $ (Value): Array of {@link ResponseWarning}. Conditions that need attention even
     * though the request succeeded. Shape $[] (Value): {@link ResponseWarning}. A non-blocking
     * condition reported with a response. The `code` identifies the condition and `severity` says
     * how urgent it is.
     */
    "warnings"?: Array<ResponseWarning>;
};
/**
 * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus an
 * ISO 4217 currency code.
 */
export type MoneyValue = {
    /**
     * Shape $ (Value): integer string. Amount in the currency's minor unit, such as cents for USD.
     * Use an integer string (decimal digits), not a floating-point number. Format: int64. minimum:
     * 0.
     */
    "amount": `${bigint}`;
    /**
     * Shape $ (Value): string. ISO 4217 currency code for this amount. minLength: 3. maxLength: 3.
     * pattern: ^[A-Z]{3}$.
     */
    "currency": string;
};
/**
 * Shape $ (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units
 * plus an ISO 4217 currency code.
 */
export type MoneyValueInput = {
    /**
     * Shape $ (Value): integer string. Amount in the currency's minor unit, such as cents for USD.
     * Use an integer string (decimal digits), not a floating-point number. Format: int64. minimum:
     * 0.
     */
    "amount": `${bigint}` | bigint;
    /**
     * Shape $ (Value): string. ISO 4217 currency code for this amount. minLength: 3. maxLength: 3.
     * pattern: ^[A-Z]{3}$.
     */
    "currency": string;
};
/**
 * Shape $ (Value): {@link NextAction}. A suggested next step for resolving an error, warning, or
 * blocked state, such as the API operation to call or the scope it needs.
 */
export type NextAction = {
    /**
     * Shape $ (Value): string. Action to take next. Use its target resource and required_fields to
     * prepare the request. Value enum: "get_operation", "get_checkout_session",
     * "get_payment_intent", "confirm_payment_intent", "capture_payment_intent",
     * "cancel_payment_intent", "get_order", "pay_order", "close_order", "add_line_items",
     * "update_checkout_session", "close_checkout_session", "create_refund", "get_refund",
     * "get_dispute", "review_onboarding_state", "create_dispute_response_session",
     * "review_merchant_readiness", "recreate_delivery_quote", "create_merchant_account_session",
     * "issue_developer_sandbox_test_key", "start_new_image_ingestion", "get_payout_settings",
     * "payment_authentication", "complete_gift_card_challenge".
     */
    "action_type": "get_operation"
        | "get_checkout_session"
        | "get_payment_intent"
        | "confirm_payment_intent"
        | "capture_payment_intent"
        | "cancel_payment_intent"
        | "get_order"
        | "pay_order"
        | "close_order"
        | "add_line_items"
        | "update_checkout_session"
        | "close_checkout_session"
        | "create_refund"
        | "get_refund"
        | "get_dispute"
        | "review_onboarding_state"
        | "create_dispute_response_session"
        | "review_merchant_readiness"
        | "recreate_delivery_quote"
        | "create_merchant_account_session"
        | "issue_developer_sandbox_test_key"
        | "start_new_image_ingestion"
        | "get_payout_settings"
        | "payment_authentication"
        | "complete_gift_card_challenge"
        | (string & {});
    /**
     * Shape $ (Value): string. When this suggested action expires, in RFC3339 format. Format:
     * date-time.
     */
    "expires_at"?: string;
    /**
     * Shape $ (Value): {@link NextActionMerchantAccountSession}. Request body fields to send to
     * POST /v1/merchant-account-sessions when action_type is create_merchant_account_session.
     * Recommended request body fields for creating a merchant account session when a next action
     * is `create_merchant_account_session`.
     */
    "merchant_account_session"?: NextActionMerchantAccountSession;
    /** Shape $ (Value): string. Machine-readable reason this action is suggested. */
    "reason_code"?: string;
    /** Shape $ (Value): string. Explanation of why this action is suggested. */
    "reason_message"?: string;
    /**
     * Shape $ (Value): Array of string. Field names that must be supplied to perform this action.
     * Shape $[] (Value): string.
     */
    "required_fields"?: Array<string>;
    /**
     * Shape $ (Value): string. API key scope required to call the public endpoint in url, when the
     * action points at another Flint API endpoint. Value enum: "accounts.api_keys.read",
     * "accounts.api_keys.write", "accounts.devices.read", "accounts.devices.write",
     * "accounts.organizations.read", "accounts.organizations.write",
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
     * "commerce.invoices.write", "commerce.orders.read", "commerce.orders.write",
     * "commerce.products.read", "commerce.products.write", "commerce.promotions.read",
     * "commerce.promotions.write", "commerce.refunds.read",
     * "commerce.refunds.tax_overrides.write", "commerce.refunds.write",
     * "commerce.returns.operations.write", "commerce.returns.policies.write",
     * "commerce.returns.read", "commerce.returns.reasons.write",
     * "commerce.returns.resolutions.write", "commerce.returns.write",
     * "commerce.subscription_plans.read", "commerce.subscription_plans.write",
     * "commerce.subscriptions.read", "commerce.subscriptions.write", "customers.read",
     * "customers.sessions.write", "customers.write", "developer.feedback_reports.read",
     * "developer.feedback_reports.write", "developer.partner_apps.read",
     * "developer.partner_apps.write", "developer.request_logs.read",
     * "developer.request_logs.self.read", "developer.resource_timelines.read",
     * "developer.sandboxes.read", "developer.sandboxes.write", "developer.test_clocks.read",
     * "developer.test_clocks.write", "merchant_billing.read", "merchants.account_sessions.write",
     * "merchants.locations.read", "merchants.locations.write", "merchants.onboarding.read",
     * "merchants.onboarding.write", "merchants.profile.read", "merchants.profile.write",
     * "money_movement.balance_transactions.read", "money_movement.balances.read",
     * "money_movement.payout_settings.read", "money_movement.payout_settings.write",
     * "money_movement.payouts.read", "money_movement.payouts.write", "payments.disputes.read",
     * "payments.disputes.write", "payments.payment_intents.read",
     * "payments.payment_intents.write", "payments.payment_method_domains.read",
     * "payments.payment_method_domains.write", "payments.payment_methods.read",
     * "payments.payment_methods.write", "reports.read", "reports.write", "risk.controls.write",
     * "risk.read", "risk.reviews.write", "settings.read", "settings.write", "webhooks.read",
     * "webhooks.write".
     */
    "required_scope"?: "accounts.api_keys.read"
        | "accounts.api_keys.write"
        | "accounts.devices.read"
        | "accounts.devices.write"
        | "accounts.organizations.read"
        | "accounts.organizations.write"
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
        | "customers.read"
        | "customers.sessions.write"
        | "customers.write"
        | "developer.feedback_reports.read"
        | "developer.feedback_reports.write"
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
        | "money_movement.payout_settings.read"
        | "money_movement.payout_settings.write"
        | "money_movement.payouts.read"
        | "money_movement.payouts.write"
        | "payments.disputes.read"
        | "payments.disputes.write"
        | "payments.payment_intents.read"
        | "payments.payment_intents.write"
        | "payments.payment_method_domains.read"
        | "payments.payment_method_domains.write"
        | "payments.payment_methods.read"
        | "payments.payment_methods.write"
        | "reports.read"
        | "reports.write"
        | "risk.controls.write"
        | "risk.read"
        | "risk.reviews.write"
        | "settings.read"
        | "settings.write"
        | "webhooks.read"
        | "webhooks.write"
        | (string & {});
    /**
     * Shape $ (Value): boolean. Whether a person must approve the action before it is performed.
     */
    "requires_human_confirmation"?: boolean;
    /**
     * Shape $ (Value): integer. Suggested wait before performing the action, in milliseconds.
     * Format: int32.
     */
    "suggested_delay_milliseconds"?: number;
    /**
     * Shape $ (Value): string. Public endpoint or launch URL for this remediation action, when
     * applicable.
     */
    "url"?: string;
};
/**
 * Shape $ (Value): {@link NextActionMerchantAccountSession}. Recommended request body fields for
 * creating a merchant account session when a next action is `create_merchant_account_session`.
 */
export type NextActionMerchantAccountSession = {
    /**
     * Shape $ (Value): string. Recommended verification collection breadth. Value enum: "upfront",
     * "incremental".
     */
    "collection_strategy"?: "upfront" | "incremental" | (string & {});
    /**
     * Shape $ (Value): string. Resolver-recommended component to send to POST
     * /v1/merchant-account-sessions. Value enum: "account_onboarding", "account_management",
     * "payouts", "balances", "tax_documents", "notification_banner".
     */
    "component": "account_onboarding"
        | "account_management"
        | "payouts"
        | "balances"
        | "tax_documents"
        | "notification_banner"
        | (string & {});
    /**
     * Shape $ (Value): string. Recommended future-requirement collection behavior. Value enum:
     * "omit", "include".
     */
    "future_requirements"?: "omit" | "include" | (string & {});
};
export type OauthAuthorizePartnerInstallInput = {
    /** Shape $ (Value): string.  Value enum: "code". */
    "response_type": InputValue<"code">;
    /** Shape $ (Value): string. */
    "client_id": InputValue<string>;
    /** Shape $ (Value): string. */
    "redirect_uri": InputValue<string>;
    /** Shape $ (Value): string.  Value enum: "test", "live". */
    "mode": InputValue<"test" | "live">;
    /** Shape $ (Value): string. */
    "code_challenge": InputValue<string>;
    /** Shape $ (Value): string.  Value enum: "S256". */
    "code_challenge_method": InputValue<"S256">;
    /** Shape $ (Value): string. */
    "scope"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "sandbox_id"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "merchant_id"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "state": InputValue<string>;
};
export type OauthAuthorizePartnerInstallResponse = {
    location?: string;
};
export type OauthPreviewPartnerInstallAuthorizationInput = {
    /** Shape $ (Value): string.  Value enum: "code". */
    "response_type"?: InputValue<"code">;
    /** Shape $ (Value): string. */
    "client_id": InputValue<string>;
    /** Shape $ (Value): string. */
    "redirect_uri": InputValue<string>;
    /** Shape $ (Value): string.  Value enum: "test", "live". */
    "mode": InputValue<"test" | "live">;
    /** Shape $ (Value): string. */
    "code_challenge"?: InputValue<string>;
    /** Shape $ (Value): string.  Value enum: "S256". */
    "code_challenge_method"?: InputValue<"S256">;
    /** Shape $ (Value): string. */
    "scope"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "sandbox_id"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "state"?: InputValue<string>;
};
export type OnboardingAdvanceInput = {
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link OnboardingAdvanceRequestInput}. The request body for: Advance
     * onboarding flow.
     */
    "body": InputValue<OnboardingAdvanceRequestInput>;
};
/**
 * Shape $ (Value): {@link OnboardingAdvanceRequest}. The request body for: Advance onboarding
 * flow.
 */
export type OnboardingAdvanceRequest = {
    /**
     * Shape $ (Value): string. ISO 3166-1 alpha-2 country code. minLength: 2. maxLength: 2.
     * pattern: ^[A-Z]{2}$. Example: "US". Value enum: "US".
     */
    "country"?: "US" | (string & {});
    /**
     * Shape $ (Value): {@link OnboardingProfileRequest}. Contact and website details you submit
     * for a merchant during onboarding. Send null to clear a field.
     */
    "profile"?: OnboardingProfileRequest;
    /**
     * Shape $ (Value): Array of string. Exact initial Flint capability set. Include
     * accept_card_payments and receive_payouts together. Optionally include
     * accept_ach_debit_payments, or omit the field to use the card and payout default set.
     * minItems: 2. maxItems: 3. uniqueItems: true. [] enum: "accept_card_payments",
     * "receive_payouts", "accept_ach_debit_payments". Shape $[] (Value): string. Value enum:
     * "accept_card_payments", "receive_payouts", "accept_ach_debit_payments".
     */
    "requested_capabilities"?: (Array<"accept_card_payments" | "receive_payouts" | "accept_ach_debit_payments" | (string & {})>);
};
/**
 * Shape $ (Value): {@link OnboardingAdvanceRequestInput}. The request body for: Advance onboarding
 * flow.
 */
export type OnboardingAdvanceRequestInput = {
    /**
     * Shape $ (Value): string. ISO 3166-1 alpha-2 country code. minLength: 2. maxLength: 2.
     * pattern: ^[A-Z]{2}$. Example: "US". Value enum: "US".
     */
    "country"?: "US";
    /**
     * Shape $ (Value): {@link OnboardingProfileRequestInput}. Contact and website details you
     * submit for a merchant during onboarding. Send null to clear a field.
     */
    "profile"?: OnboardingProfileRequestInput;
    /**
     * Shape $ (Value): Array of string. Exact initial Flint capability set. Include
     * accept_card_payments and receive_payouts together. Optionally include
     * accept_ach_debit_payments, or omit the field to use the card and payout default set.
     * minItems: 2. maxItems: 3. uniqueItems: true. [] enum: "accept_card_payments",
     * "receive_payouts", "accept_ach_debit_payments". Shape $[] (Value): string. Value enum:
     * "accept_card_payments", "receive_payouts", "accept_ach_debit_payments".
     */
    "requested_capabilities"?: (Array<"accept_card_payments" | "receive_payouts" | "accept_ach_debit_payments">);
};
export type OnboardingCreateAPIKeyInput = {
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link DeveloperInitialAPIKeyRequestInput}. The request body for: Create
     * onboarding API key.
     */
    "body": InputValue<DeveloperInitialAPIKeyRequestInput>;
};
export type OnboardingGetStateInput = {};
/**
 * Shape $ (Value): {@link OnboardingProfile}. Contact and website details recorded for a merchant
 * during onboarding.
 */
export type OnboardingProfile = {
    /** Shape $ (Value): string or null. */
    "email": string | null;
    /** Shape $ (Value): string. */
    "support_email"?: string;
    /** Shape $ (Value): string. */
    "support_phone"?: string;
    /** Shape $ (Value): string. */
    "support_url"?: string;
    /** Shape $ (Value): string. */
    "website_url"?: string;
};
/**
 * Shape $ (Value): {@link OnboardingProfileRequest}. Contact and website details you submit for a
 * merchant during onboarding. Send null to clear a field.
 */
export type OnboardingProfileRequest = {
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. */
    "email"?: string | null;
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. */
    "support_email"?: string | null;
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. */
    "support_phone"?: string | null;
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. */
    "support_url"?: string | null;
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. */
    "website_url"?: string | null;
};
/**
 * Shape $ (Value): {@link OnboardingProfileRequestInput}. Contact and website details you submit
 * for a merchant during onboarding. Send null to clear a field.
 */
export type OnboardingProfileRequestInput = OnboardingProfileRequest;
export type OnboardingStartFlowInput = {
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link OnboardingStartRequestInput}. The request body for: Start onboarding
     * flow.
     */
    "body": InputValue<OnboardingStartRequestInput>;
};
/** Shape $ (Value): {@link OnboardingStartRequest}. The request body for: Start onboarding flow. */
export type OnboardingStartRequest = {
    /** Shape $ (Value): string. minLength: 1. */
    "email": string;
    /** Shape $ (Value): string. minLength: 1. */
    "first_name": string;
    /** Shape $ (Value): string. minLength: 1. */
    "last_name": string;
};
/**
 * Shape $ (Value): {@link OnboardingStartRequestInput}. The request body for: Start onboarding
 * flow.
 */
export type OnboardingStartRequestInput = OnboardingStartRequest;
/**
 * Shape $ (Value): {@link OnboardingStartResponse}. A response containing `OnboardingStartResult`
 * data.
 */
export type OnboardingStartResponse = {
    /**
     * Shape $ (Value): {@link OnboardingStartResult}. The result of starting onboarding: whether
     * email verification began, plus the verification token and its expiry.
     */
    "data": OnboardingStartResult;
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
 * Shape $ (Value): {@link OnboardingStartResult}. The result of starting onboarding: whether email
 * verification began, plus the verification token and its expiry.
 */
export type OnboardingStartResult = {
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "expires_at": string;
    /** Shape $ (Value): boolean. */
    "verification_started": boolean;
    /** Shape $ (Value): string. */
    "verification_token": string;
};
/**
 * Shape $ (Value): {@link OnboardingState}. A merchant's onboarding status, profile, next step,
 * requested capabilities, and whether an API key can be issued.
 */
export type OnboardingState = {
    /** Shape $ (Value): boolean. */
    "can_issue_api_key": boolean;
    /**
     * Shape $ (Value): string. Immutable business country for the selected stable provider-account
     * target. Omitted until the target has selected an effective country. minLength: 2. maxLength:
     * 2. pattern: ^[A-Z]{2}$. Example: "US". Value enum: "US".
     */
    "country"?: "US" | (string & {});
    /** Shape $ (Value): string. */
    "default_sandbox_id"?: string;
    /** Shape $ (Value): string. */
    "merchant_id": string;
    /**
     * Shape $ (Value): {@link ReadinessAction}. A step that moves a merchant capability or
     * readiness axis forward, with the party that must do it (`owner`) and any required fields.
     */
    "next_step"?: ReadinessAction;
    /**
     * Shape $ (Value): {@link OnboardingProfile}. Contact and website details recorded for a
     * merchant during onboarding.
     */
    "profile": OnboardingProfile;
    /**
     * Shape $ (Value): Array of string. Canonical Flint capability intent persisted on the
     * selected stable provider-account target. The initial merchant-account configuration always
     * includes accept_card_payments and receive_payouts and may also include
     * accept_ach_debit_payments. minItems: 2. maxItems: 3. uniqueItems: true. [] enum:
     * "accept_card_payments", "receive_payouts", "accept_ach_debit_payments". Shape $[] (Value):
     * string. Value enum: "accept_card_payments", "receive_payouts", "accept_ach_debit_payments".
     */
    "requested_capabilities"?: (Array<"accept_card_payments" | "receive_payouts" | "accept_ach_debit_payments" | (string & {})>);
    /**
     * Shape $ (Value): string. Onboarding workflow status for activation and remediation, not a
     * durable account-readiness boolean. Value enum: "complete", "waiting_for_review",
     * "needs_external_action", "needs_input".
     */
    "status": "complete" | "waiting_for_review" | "needs_external_action" | "needs_input" | (string & {});
};
/**
 * Shape $ (Value): {@link OnboardingStateResponse}. A response containing `OnboardingState` data.
 */
export type OnboardingStateResponse = {
    /**
     * Shape $ (Value): {@link OnboardingState}. A merchant's onboarding status, profile, next
     * step, requested capabilities, and whether an API key can be issued.
     */
    "data": OnboardingState;
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
export type OnboardingVerifyEmailCodeInput = {
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link OnboardingVerifyEmailRequestInput}. The request body for: Verify
     * onboarding email.
     */
    "body": InputValue<OnboardingVerifyEmailRequestInput>;
};
/**
 * Shape $ (Value): {@link OnboardingVerifyEmailRequest}. The request body for: Verify onboarding
 * email.
 */
export type OnboardingVerifyEmailRequest = {
    /** Shape $ (Value): string. minLength: 1. */
    "merchant_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "verification_code": string;
    /** Shape $ (Value): string. minLength: 1. */
    "verification_token": string;
};
/**
 * Shape $ (Value): {@link OnboardingVerifyEmailRequestInput}. The request body for: Verify
 * onboarding email.
 */
export type OnboardingVerifyEmailRequestInput = OnboardingVerifyEmailRequest;
/**
 * Shape $ (Value): {@link OnboardingVerifyEmailResponse}. A response containing
 * `OnboardingVerifyEmailResult` data.
 */
export type OnboardingVerifyEmailResponse = {
    /**
     * Shape $ (Value): {@link OnboardingVerifyEmailResult}. The result of verifying an onboarding
     * email: the merchant and user, an onboarding session token, and the next step.
     */
    "data": OnboardingVerifyEmailResult;
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
 * Shape $ (Value): {@link OnboardingVerifyEmailResult}. The result of verifying an onboarding
 * email: the merchant and user, an onboarding session token, and the next step.
 */
export type OnboardingVerifyEmailResult = {
    /**
     * Shape $ (Value): boolean. Whether the merchant has no external API key and a default sandbox
     * exists.
     */
    "can_issue_api_key": boolean;
    /** Shape $ (Value): string. */
    "default_sandbox_id"?: string;
    /** Shape $ (Value): {@link Merchant}. The business accepting payments. */
    "merchant": Merchant;
    /** Shape $ (Value): boolean. */
    "merchant_created": boolean;
    /**
     * Shape $ (Value): string. Expiry of onboarding_session_token. The token cannot be refreshed;
     * verify the email again to get a new one. Format: date-time.
     */
    "onboarding_session_expires_at": string;
    /** Shape $ (Value): string. */
    "onboarding_session_token": string;
    /** Shape $ (Value): {@link User}. A user with access to merchant accounts. */
    "user": User;
};
/**
 * Shape $ (Value): {@link Order}. A customer's purchase and its payment and fulfillment progress.
 */
export type Order = {
    /** Shape $ (Value): {@link OrderPaymentAttempt}. An attempt to pay an order. */
    "active_payment_attempt"?: OrderPaymentAttempt;
    /**
     * Shape $ (Value): {@link OrderAuthorizationAmounts}. The amounts authorized and still
     * capturable on an order's payments, with the authorization expiry.
     */
    "authorization_amounts"?: OrderAuthorizationAmounts;
    /**
     * Shape $ (Value): Array of {@link BuyerAction}. What the buyer can do with the order, in this
     * order: start_return, then resend_receipt. A buyer's read through a customer session on
     * /v1/me, or in Flint's buyer account, lists both every time; a merchant read gets an empty
     * list. A list of orders leaves start_return out, since only a read of one order checks return
     * eligibility. start_return is due when the last open return window ends. Example: []. Shape
     * $[] (Value): {@link BuyerAction}. One thing a buyer can do with an order, subscription,
     * invoice or return they read through /v1/me. Show the actions with is_required as what needs
     * the buyer's attention, and the first available action as the primary action on the
     * resource's page in your account.
     */
    "buyer_actions": Array<BuyerAction>;
    /**
     * Shape $ (Value): {@link CheckoutBuyerContact}. Email and phone saved when payment started,
     * from the pay request's buyer_contact or the paying checkout session's saved contact. It does
     * not change the linked customer. Buyer contact supplied with payment or saved during
     * checkout.
     */
    "buyer_contact"?: CheckoutBuyerContact;
    /** Shape $ (Value): string. */
    "buyer_note"?: string;
    /**
     * Shape $ (Value): Array of {@link OrderCharge}. Shape $[] (Value): {@link OrderCharge}. An
     * additional charge applied to an order.
     */
    "charges": Array<OrderCharge>;
    /** Shape $ (Value): Array of string. Shape $[] (Value): string. */
    "checkout_session_ids": Array<string>;
    /**
     * Shape $ (Value): string. When the order closed. Present exactly when status is closed. Set
     * once at the transition and never changed. Format: date-time.
     */
    "closed_at"?: string;
    /**
     * Shape $ (Value): string. Why the order closed. Present exactly when status is closed. Set
     * once at closure. Unrecognized reasons are returned as other; new values may be added. Value
     * enum: "paid", "closed_by_merchant", "checkout_expired", "written_off", "superseded",
     * "return_resolution_canceled", "other".
     */
    "closed_reason"?: "paid"
        | "closed_by_merchant"
        | "checkout_expired"
        | "written_off"
        | "superseded"
        | "return_resolution_canceled"
        | "other"
        | (string & {});
    /**
     * Shape $ (Value): string. The caller note supplied when closing the order. System closures
     * leave it absent. It is not shown to the buyer.
     */
    "closed_reason_message"?: string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "created_at"?: string;
    /**
     * Shape $ (Value): {@link ExpandedCustomerSummary} or null. Shape $.anyOf[1] (Value): {@link
     * ExpandedCustomerSummary}. A customer's summary fields, returned in place of a customer ID
     * when the customer is expanded. Shape $.anyOf[2] (Value): null.
     */
    "customer"?: ((ExpandedCustomerSummary) | (null));
    /** Shape $ (Value): string. */
    "customer_id"?: string;
    /**
     * Shape $ (Value): {@link OrderDeliveryDestination}. The shipment or local-delivery
     * destination committed for this order. Payment freezes this value; fulfillment recipient
     * changes do not replace it. Omitted for a checkout session credential that doesn't act for
     * the customer the buyer verified. Where an order is delivered: the address, the recipient,
     * and where the destination came from.
     */
    "delivery_destination"?: OrderDeliveryDestination;
    /**
     * Shape $ (Value): Array of {@link OrderDiscount}. Shape $[] (Value): {@link OrderDiscount}. A
     * discount applied to an order, with its amount, status, and the line items and charges it
     * covers. It comes from a manual discount or a promotion.
     */
    "discounts": Array<OrderDiscount>;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): string. Aggregate progress across the order's fulfillment quantities. Value
     * enum: "not_fulfilled", "partially_fulfilled", "fulfilled", "canceled", "not_applicable",
     * "closed".
     */
    "fulfillment_status"?: "not_fulfilled"
        | "partially_fulfilled"
        | "fulfilled"
        | "canceled"
        | "not_applicable"
        | "closed"
        | (string & {});
    /**
     * Shape $ (Value): Array of {@link Fulfillment}. Shape $[] (Value): {@link Fulfillment}. Work
     * required to deliver an order's items.
     */
    "fulfillments": Array<Fulfillment>;
    /**
     * Shape $ (Value): {@link OrderGiftCardEstimate}. An estimate of how an order total splits
     * between gift cards and the payment processor, and whether gift cards can pay it.
     */
    "gift_card_estimate"?: OrderGiftCardEstimate;
    /**
     * Shape $ (Value): Array of {@link OrderGiftCardSettlement}. Shape $[] (Value): {@link
     * OrderGiftCardSettlement}. A gift card redemption applied to an order payment, with the
     * amount, tip, and gift card.
     */
    "gift_card_settlements": Array<OrderGiftCardSettlement>;
    /** Shape $ (Value): boolean. */
    "gift_card_tender_enabled": boolean;
    /**
     * Shape $ (Value): Array of {@link OrderGiftCardSelection}. Shape $[] (Value): {@link
     * OrderGiftCardSelection}. A gift card available to pay an order, with its available balance
     * and the last four characters of its code.
     */
    "gift_cards": Array<OrderGiftCardSelection>;
    /**
     * Shape $ (Value): string or null. ID of the delivery selection that governs this order,
     * including pickup choices without a delivery destination. Null when no selection governs the
     * order. While set, change the destination through the delivery selection.
     */
    "governing_delivery_selection_id": string | null;
    /** Shape $ (Value): string. */
    "internal_note"?: string;
    /**
     * Shape $ (Value): string. Why inventory could not be committed after payment. The cause
     * remains after resolution. Omitted when no reason was recorded. Unrecognized reasons are
     * returned as other; new values may be added. Value enum: "inventory_deduction_failed",
     * "inventory_handoff_failed", "auto_refund_required", "auto_refund_failed",
     * "policy_resolution_failed", "other".
     */
    "inventory_exception_reason"?: "inventory_deduction_failed"
        | "inventory_handoff_failed"
        | "auto_refund_required"
        | "auto_refund_failed"
        | "policy_resolution_failed"
        | "other"
        | (string & {});
    /**
     * Shape $ (Value): string. The merchant note supplied when resolving the inventory exception.
     * It is not shown to the buyer.
     */
    "inventory_exception_resolution_message"?: string;
    /**
     * Shape $ (Value): string. Whether an inventory problem after payment needs attention. Value
     * enum: "paid_inventory_failed", "resolved".
     */
    "inventory_exception_status"?: "paid_inventory_failed" | "resolved" | (string & {});
    /** Shape $ (Value): string. The reservation holding stock for this order, when one exists. */
    "inventory_reservation_id"?: string;
    /**
     * Shape $ (Value): {@link InventoryRoutingSource}. Where this order's tracked demand is
     * routed. Required before an order containing tracked variants can hold stock. Where an order,
     * payment link, or reservation routes inventory from: a fixed Location, an inventory
     * allocation policy, or one policy revision.
     */
    "inventory_routing_source"?: InventoryRoutingSource;
    /**
     * Shape $ (Value): Array of {@link OrderLineItem}. Shape $[] (Value): {@link OrderLineItem}.
     * An item purchased in an order.
     */
    "line_items": Array<OrderLineItem>;
    /** Shape $ (Value): string. */
    "merchant_id"?: string;
    /**
     * Shape $ (Value): {@link MetadataMap}. Caller-owned key-value data stored on a resource. Keys
     * starting with flint_ are reserved for Flint and are not returned. Writes follow the limits
     * on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy
     * them.
     */
    "metadata"?: MetadataMap;
    /** Shape $ (Value): string. */
    "order_id": string;
    /** Shape $ (Value): string. */
    "order_number"?: string;
    /**
     * Shape $ (Value): string. Value enum: "virtual_terminal", "payment_link", "checkout", "api",
     * "subscription".
     */
    "origin"?: "virtual_terminal" | "payment_link" | "checkout" | "api" | "subscription" | (string & {});
    /**
     * Shape $ (Value): {@link PaymentCollection}. Client-side details for collecting payment from
     * the buyer, such as the Stripe settings to initialize Stripe.js.
     */
    "payment_collection"?: PaymentCollection;
    /** Shape $ (Value): Array of string. Shape $[] (Value): string. */
    "payment_intent_ids": Array<string>;
    /**
     * Shape $ (Value): Array of {@link ExpandedPaymentIntentSummary}. Shape $[] (Value): {@link
     * ExpandedPaymentIntentSummary}. A payment intent's summary fields, including amount, status,
     * and capture method, returned when the payment intent is expanded.
     */
    "payment_intents"?: Array<ExpandedPaymentIntentSummary>;
    /**
     * Shape $ (Value): string. Payment link whose checkout created this order. Absent for orders
     * that did not come from a payment link. Filter GET /v1/orders by payment_link_id to list a
     * link's orders.
     */
    "payment_link_id"?: string;
    /**
     * Shape $ (Value): string. Collection progress. An invoice write-off also completes collection
     * without receiving the written-off amount. Value enum: "unpaid", "partially_paid", "paid".
     */
    "payment_status": "unpaid" | "partially_paid" | "paid" | (string & {});
    /**
     * Shape $ (Value): {@link PricingAmounts}. The money totals for an order or invoice: subtotal,
     * discounts, charges, tax, requested tip, and total.
     */
    "pricing_amounts": PricingAmounts;
    /** Shape $ (Value): Array of string. Shape $[] (Value): string. */
    "refund_ids": Array<string>;
    /**
     * Shape $ (Value): string. Refund progress for collected money. Value enum: "none",
     * "partially_refunded", "refunded".
     */
    "refund_status": "none" | "partially_refunded" | "refunded" | (string & {});
    /**
     * Shape $ (Value): Array of {@link OrderReturnCreditSettlement}. Value applied to this order
     * from items the buyer returned, such as an exchange's replacement order. Included in
     * settlement_amounts.paid_money. Shape $[] (Value): {@link OrderReturnCreditSettlement}. A
     * return credit applied to an order payment, with the amount and the return and resolution it
     * came from.
     */
    "return_credit_settlements": Array<OrderReturnCreditSettlement>;
    /**
     * Shape $ (Value): string. ID of the return resolution that created this order as a
     * replacement. Omitted for orders a return did not create.
     */
    "return_resolution_id"?: string;
    /**
     * Shape $ (Value): {@link SettlementAmounts}. How much of an order has been paid, refunded,
     * credited, written off, and settled as tips, and what balance and outstanding amount remain.
     */
    "settlement_amounts": SettlementAmounts;
    /**
     * Shape $ (Value): {@link PaymentCollection}. Client-side details for collecting payment from
     * the buyer, such as the Stripe settings to initialize Stripe.js.
     */
    "setup_collection"?: PaymentCollection;
    /**
     * Shape $ (Value): string. Whether the order still accepts changes and new payments. Refunds,
     * fulfillment, disputes, returns, and metadata or note edits continue on a closed order. Value
     * enum: "open", "closed".
     */
    "status": "open" | "closed" | (string & {});
    /**
     * Shape $ (Value): {@link ExpandedSubscriptionSummary} or null. Shape $.anyOf[1] (Value):
     * {@link ExpandedSubscriptionSummary}. A subscription's summary fields, including status,
     * billing period, and next billing time, returned when the subscription is expanded. Shape
     * $.anyOf[2] (Value): null.
     */
    "subscription"?: ((ExpandedSubscriptionSummary) | (null));
    /**
     * Shape $ (Value): integer string. Charged subscription cycle associated with this order.
     * Signup is cycle 1; unpaid retries and skipped renewals do not advance the cycle. Use an
     * integer string (decimal digits), not a floating-point number. Format: uint64. minimum: 0.
     */
    "subscription_cycle"?: `${bigint}`;
    /**
     * Shape $ (Value): string. Time the subscriber changed delivery after this paid renewal was
     * prepared. The order keeps its committed destination until you correct it or refund and
     * replace it. Format: date-time.
     */
    "subscription_delivery_changed_at"?: string;
    /** Shape $ (Value): string. */
    "subscription_id"?: string;
    /**
     * Shape $ (Value): {@link ExpandedSubscriptionPlanSummary} or null. Shape $.anyOf[1] (Value):
     * {@link ExpandedSubscriptionPlanSummary}. A subscription plan's summary fields, including
     * name, billing interval, currency, and status, returned when the plan is expanded. Shape
     * $.anyOf[2] (Value): null.
     */
    "subscription_plan"?: ((ExpandedSubscriptionPlanSummary) | (null));
    /** Shape $ (Value): string. */
    "subscription_plan_id"?: string;
    /**
     * Shape $ (Value): {@link OrderTax}. An order's tax state, including its mode, price mode,
     * status, location, exemption, and tax breakdowns.
     */
    "tax": OrderTax;
    /**
     * Shape $ (Value): {@link TicketedEvent}. Event and tickets this order sold through an event
     * payment link. Absent on other orders. Event details for a ticketed order: name, location,
     * start time, time zone, and the tickets issued.
     */
    "ticketed_event"?: TicketedEvent;
    /**
     * Shape $ (Value): Array of {@link Tip}. Shape $[] (Value): {@link Tip}. A tip on an order,
     * with its requested, settled, and refunded amounts, status, and how it was paid.
     */
    "tips": Array<Tip>;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "updated_at"?: string;
    /**
     * Shape $ (Value): integer string. Order version for optimistic concurrency. Send this value
     * as the expected version when changing the order. Use an integer string (decimal digits), not
     * a floating-point number. Format: int64.
     */
    "version": `${bigint}`;
};
/**
 * Shape $ (Value): {@link OrderActivity}. Read-only order history row for merchant timeline
 * rendering and debugging. The owning resource remains authoritative for state and money movement.
 */
export type OrderActivity = {
    /**
     * Shape $ (Value): string. The action recorded on the order. Omitted when the activity type
     * cannot be identified. Clients must accept values added in future releases. Value enum:
     * "created", "line_item_added", "line_item_updated", "line_item_removed", "discount_applied",
     * "discount_removed", "tax_updated", "requested_tip_added", "requested_tip_updated",
     * "requested_tip_removed", "charge_added", "charge_updated", "charge_removed",
     * "charge_fulfillment_updated", "order_updated", "adjustment", "closed", "payment",
     * "payment_failed", "refund", "refund_failed", "checkout_session_created",
     * "checkout_session_expired", "checkout_session_invalidated", "fulfillment_created",
     * "fulfillment_updated", "fulfillment_state_changed".
     */
    "activity_type"?: "created"
        | "line_item_added"
        | "line_item_updated"
        | "line_item_removed"
        | "discount_applied"
        | "discount_removed"
        | "tax_updated"
        | "requested_tip_added"
        | "requested_tip_updated"
        | "requested_tip_removed"
        | "charge_added"
        | "charge_updated"
        | "charge_removed"
        | "charge_fulfillment_updated"
        | "order_updated"
        | "adjustment"
        | "closed"
        | "payment"
        | "payment_failed"
        | "refund"
        | "refund_failed"
        | "checkout_session_created"
        | "checkout_session_expired"
        | "checkout_session_invalidated"
        | "fulfillment_created"
        | "fulfillment_updated"
        | "fulfillment_state_changed"
        | (string & {});
    /**
     * Shape $ (Value): {@link MoneyValue}. Change to the order balance narrated by this row.
     * Informational rows have amount 0. Do not sum activity deltas to compute the order balance.
     * Signed monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "balance_delta_money": MoneyValue;
    /**
     * Shape $ (Value): string. Related checkout session when activity_type points at checkout
     * session lifecycle.
     */
    "checkout_session_id"?: string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "created_at"?: string;
    /**
     * Shape $ (Value): string. Human-readable Flint description. Provider-specific raw statuses
     * and failure values are not exposed here.
     */
    "description": string;
    /** Shape $ (Value): string. */
    "fulfillment_id"?: string;
    /** Shape $ (Value): string. */
    "order_activity_id": string;
    /** Shape $ (Value): string. */
    "order_charge_id"?: string;
    /** Shape $ (Value): string. */
    "order_discount_id"?: string;
    /** Shape $ (Value): string. */
    "order_line_item_id"?: string;
    /** Shape $ (Value): string. */
    "order_tip_id"?: string;
    /**
     * Shape $ (Value): string. Related payment intent when activity_type points at a payment
     * attempt or payment outcome.
     */
    "payment_intent_id"?: string;
    /**
     * Shape $ (Value): string. Related refund when activity_type points at a refund outcome. Read
     * the refund for the authoritative outcome.
     */
    "refund_id"?: string;
    /**
     * Shape $ (Value): {@link MoneyValue}. Order balance after this activity in chronological
     * time. This is context for reading the log, not a reconciliation ledger. Signed monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "running_balance_money": MoneyValue;
};
/** Shape $ (Value): {@link OrderActivityListResponse}. A page of `OrderActivity` objects. */
export type OrderActivityListResponse = {
    /**
     * Shape $ (Value): Array of {@link OrderActivity}. Shape $[] (Value): {@link OrderActivity}.
     * Read-only order history row for merchant timeline rendering and debugging. The owning
     * resource remains authoritative for state and money movement.
     */
    "data": Array<OrderActivity>;
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
 * Shape $ (Value): {@link OrderAuthorizationAmounts}. The amounts authorized and still capturable
 * on an order's payments, with the authorization expiry.
 */
export type OrderAuthorizationAmounts = {
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "authorized_money": MoneyValue;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "capturable_money": MoneyValue;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "expires_at"?: string;
};
/**
 * Shape $ (Value): {@link OrderCalculatedChargeTax}. Tax settings for an order charge calculated
 * by Flint or supplied by you, including the charge's tax category and whether it is taxable.
 */
export type OrderCalculatedChargeTax = {
    /**
     * Shape $ (Value): string. Tax category of the charge, which decides its automatic tax:
     * shipping and delivery are taxed at the general rate, and a taxable charge in another
     * category fails with AUTOMATIC_TAX_CHARGE_UNSUPPORTED. Omitted, the charge takes delivery
     * from delivery_fee, shipping from shipping_fee, service_fee from service_fee, and handling
     * from handling_fee; other types take none. The default follows type and is not returned.
     * Value enum: "service_fee", "shipping", "delivery", "handling", "surcharge".
     */
    "charge_tax_category"?: "service_fee" | "shipping" | "delivery" | "handling" | "surcharge" | (string & {});
    /** Shape $ (Value): boolean. */
    "taxable"?: boolean;
};
/**
 * Shape $ (Value): {@link OrderCalculatedChargeTaxInput}. Tax settings for an order charge
 * calculated by Flint or supplied by you, including the charge's tax category and whether it is
 * taxable.
 */
export type OrderCalculatedChargeTaxInput = {
    /**
     * Shape $ (Value): {@link TaxCalculationRequestInput}. Tax you calculated yourself for a line
     * or charge: whether prices include tax, and the tax components.
     */
    "calculation"?: TaxCalculationRequestInput;
    /**
     * Shape $ (Value): string. Tax category of the charge, which decides its automatic tax:
     * shipping and delivery are taxed at the general rate, and a taxable charge in another
     * category fails with AUTOMATIC_TAX_CHARGE_UNSUPPORTED. Omitted, the charge takes delivery
     * from delivery_fee, shipping from shipping_fee, service_fee from service_fee, and handling
     * from handling_fee; other types take none. The default follows type and is not returned.
     * Value enum: "service_fee", "shipping", "delivery", "handling", "surcharge".
     */
    "charge_tax_category"?: "service_fee" | "shipping" | "delivery" | "handling" | "surcharge";
    /** Shape $ (Value): boolean. */
    "taxable"?: boolean;
};
/**
 * Shape $ (Value): {@link OrderCalculatedLineItemTax}. Tax settings for an order line item
 * calculated by Flint or supplied by you, including the line item tax category and whether it is
 * taxable.
 */
export type OrderCalculatedLineItemTax = {
    /**
     * Shape $ (Value): {@link TaxCalculationRequest}. Tax you calculated yourself for a line or
     * charge: whether prices include tax, and the tax components.
     */
    "calculation"?: TaxCalculationRequest;
    /**
     * Shape $ (Value): string. Flint line-item tax category. Value enum: "general",
     * "physical_goods", "digital_goods", "software", "saas", "services", "professional_services",
     * "food", "prepared_food", "clothing", "medical_goods", "admission".
     */
    "line_item_tax_category"?: "general"
        | "physical_goods"
        | "digital_goods"
        | "software"
        | "saas"
        | "services"
        | "professional_services"
        | "food"
        | "prepared_food"
        | "clothing"
        | "medical_goods"
        | "admission"
        | (string & {});
    /** Shape $ (Value): boolean. */
    "taxable"?: boolean;
};
/**
 * Shape $ (Value): {@link OrderCalculatedLineItemTaxInput}. Tax settings for an order line item
 * calculated by Flint or supplied by you, including the line item tax category and whether it is
 * taxable.
 */
export type OrderCalculatedLineItemTaxInput = {
    /**
     * Shape $ (Value): {@link TaxCalculationRequestInput}. Tax you calculated yourself for a line
     * or charge: whether prices include tax, and the tax components.
     */
    "calculation"?: TaxCalculationRequestInput;
    /**
     * Shape $ (Value): string. Flint line-item tax category. Value enum: "general",
     * "physical_goods", "digital_goods", "software", "saas", "services", "professional_services",
     * "food", "prepared_food", "clothing", "medical_goods", "admission".
     */
    "line_item_tax_category"?: "general"
        | "physical_goods"
        | "digital_goods"
        | "software"
        | "saas"
        | "services"
        | "professional_services"
        | "food"
        | "prepared_food"
        | "clothing"
        | "medical_goods"
        | "admission";
    /** Shape $ (Value): boolean. */
    "taxable"?: boolean;
};
/** Shape $ (Value): {@link OrderCharge}. An additional charge applied to an order. */
export type OrderCharge = {
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValue;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "applied_money": MoneyValue;
    /** Shape $ (Value): string.  Value enum: "subtotal_pre_discount", "subtotal_post_discount". */
    "calculation_basis"?: "subtotal_pre_discount" | "subtotal_post_discount" | (string & {});
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "created_at"?: string;
    /** Shape $ (Value): string. */
    "description"?: string;
    /** Shape $ (Value): string. */
    "fulfillment_id"?: string;
    /**
     * Shape $ (Value): {@link MetadataMap}. Caller-owned key-value data stored on a resource. Keys
     * starting with flint_ are reserved for Flint and are not returned. Writes follow the limits
     * on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy
     * them.
     */
    "metadata"?: MetadataMap;
    /** Shape $ (Value): string. */
    "name": string;
    /** Shape $ (Value): string. */
    "order_charge_id": string;
    /** Shape $ (Value): number. multipleOf: 0.0001. */
    "percent"?: number;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "refunded_money": MoneyValue;
    /**
     * Shape $ (Value): {@link OrderCalculatedChargeTax}. Tax settings for an order charge
     * calculated by Flint or supplied by you, including the charge's tax category and whether it
     * is taxable.
     */
    "tax"?: OrderCalculatedChargeTax;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "tax_money": MoneyValue;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "total_money": MoneyValue;
    /**
     * Shape $ (Value): string. Value enum: "service_fee", "delivery_fee", "shipping_fee",
     * "handling_fee", "packaging_fee", "small_order_fee", "service_area_fee", "setup_fee",
     * "installation_fee", "cleaning_fee", "booking_fee", "reservation_fee", "ticket_fee",
     * "fulfillment_fee", "restocking_fee", "rush_fee", "other".
     */
    "type": "service_fee"
        | "delivery_fee"
        | "shipping_fee"
        | "handling_fee"
        | "packaging_fee"
        | "small_order_fee"
        | "service_area_fee"
        | "setup_fee"
        | "installation_fee"
        | "cleaning_fee"
        | "booking_fee"
        | "reservation_fee"
        | "ticket_fee"
        | "fulfillment_fee"
        | "restocking_fee"
        | "rush_fee"
        | "other"
        | (string & {});
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "updated_at"?: string;
};
/** Shape $ (Value): {@link OrderChargeInputAmount}. The `amount` variant of `OrderChargeInput`. */
export type OrderChargeInputAmount = ({
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /** Shape $ (Value): string.  Value enum: "subtotal_pre_discount", "subtotal_post_discount". */
    "calculation_basis"?: "subtotal_pre_discount" | "subtotal_post_discount" | (string & {});
    /**
     * Shape $ (Value): string. Selects a fixed amount or percentage calculation. Value enum:
     * "amount".
     */
    "calculation_type": "amount" | (string & {});
    /** Shape $ (Value): string. minLength: 1. maxLength: 2048. */
    "description"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "fulfillment_id"?: string;
    /**
     * Shape $ (Value): {@link MetadataMap}. Caller-owned key-value data for a new or replaced map.
     * Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points,
     * values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8
     * bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint.
     * maxProperties: 50.
     */
    "metadata"?: MetadataMap;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "name": string;
    /** Shape $ (Value): number. multipleOf: 0.0001. */
    "percent"?: number;
    /**
     * Shape $ (Value): {@link OrderCalculatedChargeTax}. Tax settings for an order charge
     * calculated by Flint or supplied by you, including the charge's tax category and whether it
     * is taxable.
     */
    "tax"?: OrderCalculatedChargeTax;
    /**
     * Shape $ (Value): string. Value enum: "service_fee", "delivery_fee", "shipping_fee",
     * "handling_fee", "packaging_fee", "small_order_fee", "service_area_fee", "setup_fee",
     * "installation_fee", "cleaning_fee", "booking_fee", "reservation_fee", "ticket_fee",
     * "fulfillment_fee", "restocking_fee", "rush_fee", "other".
     */
    "type": "service_fee"
        | "delivery_fee"
        | "shipping_fee"
        | "handling_fee"
        | "packaging_fee"
        | "small_order_fee"
        | "service_area_fee"
        | "setup_fee"
        | "installation_fee"
        | "cleaning_fee"
        | "booking_fee"
        | "reservation_fee"
        | "ticket_fee"
        | "fulfillment_fee"
        | "restocking_fee"
        | "rush_fee"
        | "other"
        | (string & {});
})
    & (({
    /** Shape $ (Value): string.  Value enum: "amount". */
    "calculation_type": "amount" | (string & {});
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
}));
/**
 * Shape $ (Value): {@link OrderChargeInputAmountInput}. The `amount` variant of
 * `OrderChargeInput`.
 */
export type OrderChargeInputAmountInput = ({
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValueInput;
    /** Shape $ (Value): string.  Value enum: "subtotal_pre_discount", "subtotal_post_discount". */
    "calculation_basis"?: "subtotal_pre_discount" | "subtotal_post_discount";
    /**
     * Shape $ (Value): string. Selects a fixed amount or percentage calculation. Value enum:
     * "amount".
     */
    "calculation_type": "amount";
    /** Shape $ (Value): string. minLength: 1. maxLength: 2048. */
    "description"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "fulfillment_id"?: string;
    /**
     * Shape $ (Value): {@link MetadataRequestInput}. Caller-owned key-value data for a new or
     * replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode
     * code points, values are 1 to 4096 Unicode code points, and keys plus values total at most
     * 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved
     * for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "name": string;
    /** Shape $ (Value): number. multipleOf: 0.0001. */
    "percent"?: number;
    /**
     * Shape $ (Value): {@link OrderCalculatedChargeTaxInput}. Tax settings for an order charge
     * calculated by Flint or supplied by you, including the charge's tax category and whether it
     * is taxable.
     */
    "tax"?: OrderCalculatedChargeTaxInput;
    /**
     * Shape $ (Value): string. Value enum: "service_fee", "delivery_fee", "shipping_fee",
     * "handling_fee", "packaging_fee", "small_order_fee", "service_area_fee", "setup_fee",
     * "installation_fee", "cleaning_fee", "booking_fee", "reservation_fee", "ticket_fee",
     * "fulfillment_fee", "restocking_fee", "rush_fee", "other".
     */
    "type": "service_fee"
        | "delivery_fee"
        | "shipping_fee"
        | "handling_fee"
        | "packaging_fee"
        | "small_order_fee"
        | "service_area_fee"
        | "setup_fee"
        | "installation_fee"
        | "cleaning_fee"
        | "booking_fee"
        | "reservation_fee"
        | "ticket_fee"
        | "fulfillment_fee"
        | "restocking_fee"
        | "rush_fee"
        | "other";
})
    & (({
    /** Shape $ (Value): string.  Value enum: "amount". */
    "calculation_type": ("amount") & ("amount");
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValueInput;
})
    & (({
    "percent"?: never;
})));
/**
 * Shape $ (Value): {@link OrderChargeInputPercent}. The `percent` variant of `OrderChargeInput`.
 */
export type OrderChargeInputPercent = ({
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValue;
    /** Shape $ (Value): string.  Value enum: "subtotal_pre_discount", "subtotal_post_discount". */
    "calculation_basis"?: "subtotal_pre_discount" | "subtotal_post_discount" | (string & {});
    /**
     * Shape $ (Value): string. Selects a fixed amount or percentage calculation. Value enum:
     * "percent".
     */
    "calculation_type": "percent" | (string & {});
    /** Shape $ (Value): string. minLength: 1. maxLength: 2048. */
    "description"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "fulfillment_id"?: string;
    /**
     * Shape $ (Value): {@link MetadataMap}. Caller-owned key-value data for a new or replaced map.
     * Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points,
     * values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8
     * bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint.
     * maxProperties: 50.
     */
    "metadata"?: MetadataMap;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "name": string;
    /** Shape $ (Value): number. multipleOf: 0.0001. */
    "percent": number;
    /**
     * Shape $ (Value): {@link OrderCalculatedChargeTax}. Tax settings for an order charge
     * calculated by Flint or supplied by you, including the charge's tax category and whether it
     * is taxable.
     */
    "tax"?: OrderCalculatedChargeTax;
    /**
     * Shape $ (Value): string. Value enum: "service_fee", "delivery_fee", "shipping_fee",
     * "handling_fee", "packaging_fee", "small_order_fee", "service_area_fee", "setup_fee",
     * "installation_fee", "cleaning_fee", "booking_fee", "reservation_fee", "ticket_fee",
     * "fulfillment_fee", "restocking_fee", "rush_fee", "other".
     */
    "type": "service_fee"
        | "delivery_fee"
        | "shipping_fee"
        | "handling_fee"
        | "packaging_fee"
        | "small_order_fee"
        | "service_area_fee"
        | "setup_fee"
        | "installation_fee"
        | "cleaning_fee"
        | "booking_fee"
        | "reservation_fee"
        | "ticket_fee"
        | "fulfillment_fee"
        | "restocking_fee"
        | "rush_fee"
        | "other"
        | (string & {});
})
    & (({
    /** Shape $ (Value): string.  Value enum: "percent". */
    "calculation_type": "percent" | (string & {});
    /** Shape $ (Value): number. multipleOf: 0.0001. */
    "percent": number;
}));
