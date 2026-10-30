import type { CreateInlineModifierGroupRequestInput, CreateModifierGroupRequest } from './types-8.js';
import type { MetadataMap, MetadataRequestInput } from './types-34.js';
import type { MoneyValue, MoneyValueInput, ModifierOverride, ModifierOverrideInput } from './types-35.js';
import type { ManualDiscountRequest, ManualDiscountRequestInput } from './types-33.js';
import type { PromotionRefRequest, PromotionRefRequestInput } from './types-45.js';
import type { Dimensions, DimensionsInput } from './types-20.js';
import type { GiftCardPurchaseRequest, GiftCardPurchaseDetailsRequestInput } from './types-24.js';
import type { ImageReferenceRequest, ImageReferenceRequestInput, ImageRequest, ImageRequestInput } from './types-25.js';
import type { LineItemFulfillmentRequest, LineItemFulfillmentRequestInput, LegalSettings } from './types-32.js';
import type {
    OrderCalculatedLineItemTax,
    OrderDraftLineItemInventoryDemandRequest,
    OrderDraftLineItemInventoryDemandRequestInput,
    OrderDraftLineItemTaxRequestInput,
    OrderDeliveryDestinationRequest,
    OrderDeliveryDestinationRequestInput,
    OrderInventoryRoutingSourceRequestInput
} from './types-36.js';
import type {
    OrderLineItemModifierRequest,
    OrderLineItemModifierRequestInput,
    OrderPaymentSourceSelection,
    OrderPaymentSourceSelectionInput
} from './types-37.js';
import type { SubscribedLineRequest, SubscribedLineRequestInput } from './types-53.js';
import type { Weight, WeightInput } from './types-61.js';
import type { InventoryRoutingSource, InventoryRoutingSourceRequest, InventoryRoutingSourceRequestInput } from './types-27.js';
import type { OrderTaxRequest, OrderTaxRequestInput } from './types-38.js';
import type {
    CheckoutGiftCardChallenge,
    CheckoutBuyerFields,
    CheckoutCustomTextConfig,
    CheckoutPaymentConfig,
    CheckoutPromotionConfig,
    CheckoutRedirects,
    CheckoutBuyerFieldsRequestInput,
    CheckoutPromotionConfigRequestInput,
    CheckoutRedirectsRequestInput
} from './types-4.js';
import type {
    PartnerAppCredentialJWKSURLRequestInput,
    PartnerAppCredentialPublicKeyRequest,
    PartnerAppCredentialPublicKeyRequestInput,
    PartnerAppCredentialWorkloadIdentityRequest,
    PartnerAppCredentialWorkloadIdentityRequestInput,
    PartnerAppPermissionManifestEntry,
    PartnerAppPermissionManifestEntryRequestInput
} from './types-39.js';
import type {
    CheckoutTaxConfig,
    CheckoutTipConfig,
    CheckoutTaxConfigRequestInput,
    CheckoutTipConfigRequestInput
} from './types-5.js';
import type {
    PaymentLinkCustomFieldRequest,
    PaymentLinkEventConfig,
    PaymentLinkCustomFieldRequestInput,
    PaymentLinkCustomTextConfigInput,
    PaymentLinkEventConfigRequestInput,
    PaymentLinkLegalConfigInput
} from './types-41.js';
import type {
    PaymentLinkLineItemRequest,
    PaymentLinkLineItemRequestInput,
    PaymentLinkPaymentConfigInput,
    PaymentLinkThemeConfigInput
} from './types-42.js';
import type { ThemeConfig } from './types-57.js';
import type { AddressRequest, AddressRequestInput } from './types-0.js';
import type { CreateProductRequestOptioned, CreateProductRequestSimple } from './types-10.js';
import type { ProductVariantRequest } from './types-44.js';
/** The request body for: Create modifier group. */
export type CreateModifierGroupRequestInput = CreateInlineModifierGroupRequestInput;
/**
 * A modifier to create in a modifier group, with its name, price change, tax category, and default
 * selection.
 */
export type CreateModifierRequest = {
    /**
     * Whole-number quantity selected by default. Used only when the choice is available and
     * selected_by_default is true. A modifier set can override this value; fractional quantities
     * are not supported. Format: int64.
     */
    "default_quantity"?: number;
    /**
     * Flint line-item tax category. Value enum: "general", "physical_goods", "digital_goods",
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
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataMap;
    /** Name of the choice shown to buyers. minLength: 1. maxLength: 255. */
    "name": string;
    /**
     * Display position of the choice within its group; lower values appear first. Format: int32.
     */
    "position"?: number;
    /**
     * Whether this choice is selected when the buyer has not supplied selections for the group. A
     * modifier set can override this value; unavailable choices are never selected by default.
     * Default: false.
     */
    "selected_by_default"?: boolean;
    /** Whether this modifier appears in fulfillment details. */
    "show_on_fulfillment"?: boolean;
    /** Whether this modifier appears on buyer receipts. */
    "show_on_receipt"?: boolean;
    /**
     * Lifecycle status of the modifier. Only active modifiers can be offered to buyers. Default:
     * "active". Value enum: "active", "inactive".
     */
    "status"?: "active" | "inactive" | (string & {});
    /** Whether this modifier's price is taxable. A modifier set can override this value. */
    "taxable"?: boolean;
    /**
     * Amount added to the item's unit price for each unit of this modifier. A modifier set can
     * override this value. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "unit_price_delta_money"?: MoneyValue;
};
/**
 * A modifier to create in a modifier group, with its name, price change, tax category, and default
 * selection.
 */
export type CreateModifierRequestInput = {
    /**
     * Whole-number quantity selected by default. Used only when the choice is available and
     * selected_by_default is true. A modifier set can override this value; fractional quantities
     * are not supported. Format: int64.
     */
    "default_quantity"?: number;
    /**
     * Flint line-item tax category. Value enum: "general", "physical_goods", "digital_goods",
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
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /** Name of the choice shown to buyers. minLength: 1. maxLength: 255. */
    "name": string;
    /**
     * Display position of the choice within its group; lower values appear first. Format: int32.
     */
    "position"?: number;
    /**
     * Whether this choice is selected when the buyer has not supplied selections for the group. A
     * modifier set can override this value; unavailable choices are never selected by default.
     * Default: false.
     */
    "selected_by_default"?: boolean;
    /** Whether this modifier appears in fulfillment details. */
    "show_on_fulfillment"?: boolean;
    /** Whether this modifier appears on buyer receipts. */
    "show_on_receipt"?: boolean;
    /**
     * Lifecycle status of the modifier. Only active modifiers can be offered to buyers. Default:
     * "active". Value enum: "active", "inactive".
     */
    "status"?: "active" | "inactive";
    /** Whether this modifier's price is taxable. A modifier set can override this value. */
    "taxable"?: boolean;
    /**
     * Amount added to the item's unit price for each unit of this modifier. A modifier set can
     * override this value. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "unit_price_delta_money"?: MoneyValueInput;
};
/** The `existing` variant of `CreateModifierSetGroupInput`. */
export type CreateModifierSetGroupInputExisting = ({
    /**
     * Overrides the group's name for this set. Omit it to use the group's name. minLength: 1.
     * maxLength: 255.
     */
    "display_name"?: string;
    /**
     * Overrides the group's max_selected for this set. Omit it to use the group's value. Accepted
     * only for list groups; if neither value is set, there is no limit. Format: int32.
     */
    "max_selected"?: number;
    /**
     * Overrides the group's min_selected for this set. Omit it to use the group's value. Accepted
     * only for list groups; set min_selected: 1 to require a selection. If neither value is set,
     * the minimum is 0. Format: int32.
     */
    "min_selected"?: number;
    /**
     * Modifier group owned by this set when source is inline. Read this group through GET
     * /v1/modifier-sets/{modifier_set_id}; /v1/modifier-groups doesn't return it. A modifier group
     * defined inline when creating a modifier set, with its selection limits, modifiers or text
     * rules, and display flags.
     */
    "modifier_group"?: CreateModifierGroupRequest;
    /**
     * Identifier of the independent modifier group referenced when source is existing. minLength:
     * 1.
     */
    "modifier_group_id": string;
    /**
     * Overrides for individual list modifiers in this set. A choice is offered only when its
     * status is active and its override's available is not false. [] (Value): {@link
     * ModifierOverride}. Settings for one modifier that apply only within a modifier set group,
     * overriding the modifier group's own values.
     */
    "modifier_overrides"?: Array<ModifierOverride>;
    /** Display position of this group within the set; lower values appear first. Format: int32. */
    "position"?: number;
    /**
     * Overrides the group's text.required for this set. Omit it to use the group's value. Accepted
     * only for text groups; for a list group, set min_selected: 1 to require a selection.
     */
    "required"?: boolean;
    /** Overrides the group's show_on_fulfillment for this set. Omit it to use the group's value. */
    "show_on_fulfillment"?: boolean;
    /** Overrides the group's show_on_receipt for this set. Omit it to use the group's value. */
    "show_on_receipt"?: boolean;
    /**
     * Use inline for a modifier group owned by this modifier set, or existing to reference an
     * independent modifier group. Value enum: "existing".
     */
    "source": "existing" | (string & {});
})
    & (({
    /** References an independent modifier group. Value enum: "existing". */
    "source": "existing" | (string & {});
    /**
     * Identifier of the independent modifier group referenced when source is existing. minLength:
     * 1.
     */
    "modifier_group_id": string;
}));
/** The `existing` variant of `CreateModifierSetGroupInput`. */
export type CreateModifierSetGroupInputExistingInput = ({
    /**
     * Overrides the group's name for this set. Omit it to use the group's name. minLength: 1.
     * maxLength: 255.
     */
    "display_name"?: string;
    /**
     * Overrides the group's max_selected for this set. Omit it to use the group's value. Accepted
     * only for list groups; if neither value is set, there is no limit. Format: int32.
     */
    "max_selected"?: number;
    /**
     * Overrides the group's min_selected for this set. Omit it to use the group's value. Accepted
     * only for list groups; set min_selected: 1 to require a selection. If neither value is set,
     * the minimum is 0. Format: int32.
     */
    "min_selected"?: number;
    /**
     * Modifier group owned by this set when source is inline. Read this group through GET
     * /v1/modifier-sets/{modifier_set_id}; /v1/modifier-groups doesn't return it. A modifier group
     * defined inline when creating a modifier set, with its selection limits, modifiers or text
     * rules, and display flags.
     */
    "modifier_group"?: CreateInlineModifierGroupRequestInput;
    /**
     * Identifier of the independent modifier group referenced when source is existing. minLength:
     * 1.
     */
    "modifier_group_id": string;
    /**
     * Overrides for individual list modifiers in this set. A choice is offered only when its
     * status is active and its override's available is not false. [] (Value): {@link
     * ModifierOverrideInput}. Settings for one modifier that apply only within a modifier set
     * group, overriding the modifier group's own values.
     */
    "modifier_overrides"?: Array<ModifierOverrideInput>;
    /** Display position of this group within the set; lower values appear first. Format: int32. */
    "position"?: number;
    /**
     * Overrides the group's text.required for this set. Omit it to use the group's value. Accepted
     * only for text groups; for a list group, set min_selected: 1 to require a selection.
     */
    "required"?: boolean;
    /** Overrides the group's show_on_fulfillment for this set. Omit it to use the group's value. */
    "show_on_fulfillment"?: boolean;
    /** Overrides the group's show_on_receipt for this set. Omit it to use the group's value. */
    "show_on_receipt"?: boolean;
    /**
     * Use inline for a modifier group owned by this modifier set, or existing to reference an
     * independent modifier group. Value enum: "existing".
     */
    "source": "existing";
})
    & (({
    /** References an independent modifier group. Value enum: "existing". */
    "source": "existing";
    /**
     * Identifier of the independent modifier group referenced when source is existing. minLength:
     * 1.
     */
    "modifier_group_id": string;
})
    & ({
    "modifier_group"?: never;
}));
/** The `inline` variant of `CreateModifierSetGroupInput`. */
export type CreateModifierSetGroupInputInline = ({
    /**
     * Overrides the group's name for this set. Omit it to use the group's name. minLength: 1.
     * maxLength: 255.
     */
    "display_name"?: string;
    /**
     * Overrides the group's max_selected for this set. Omit it to use the group's value. Accepted
     * only for list groups; if neither value is set, there is no limit. Format: int32.
     */
    "max_selected"?: number;
    /**
     * Overrides the group's min_selected for this set. Omit it to use the group's value. Accepted
     * only for list groups; set min_selected: 1 to require a selection. If neither value is set,
     * the minimum is 0. Format: int32.
     */
    "min_selected"?: number;
    /**
     * Modifier group owned by this set when source is inline. Read this group through GET
     * /v1/modifier-sets/{modifier_set_id}; /v1/modifier-groups doesn't return it. A modifier group
     * defined inline when creating a modifier set, with its selection limits, modifiers or text
     * rules, and display flags.
     */
    "modifier_group": CreateModifierGroupRequest;
    /**
     * Identifier of the independent modifier group referenced when source is existing. minLength:
     * 1.
     */
    "modifier_group_id"?: string;
    /**
     * Overrides for individual list modifiers in this set. A choice is offered only when its
     * status is active and its override's available is not false. [] (Value): {@link
     * ModifierOverride}. Settings for one modifier that apply only within a modifier set group,
     * overriding the modifier group's own values.
     */
    "modifier_overrides"?: Array<ModifierOverride>;
    /** Display position of this group within the set; lower values appear first. Format: int32. */
    "position"?: number;
    /**
     * Overrides the group's text.required for this set. Omit it to use the group's value. Accepted
     * only for text groups; for a list group, set min_selected: 1 to require a selection.
     */
    "required"?: boolean;
    /** Overrides the group's show_on_fulfillment for this set. Omit it to use the group's value. */
    "show_on_fulfillment"?: boolean;
    /** Overrides the group's show_on_receipt for this set. Omit it to use the group's value. */
    "show_on_receipt"?: boolean;
    /**
     * Use inline for a modifier group owned by this modifier set, or existing to reference an
     * independent modifier group. Value enum: "inline".
     */
    "source": "inline" | (string & {});
})
    & (({
    /** Defines a modifier group owned by this modifier set. Value enum: "inline". */
    "source": "inline" | (string & {});
    /**
     * Modifier group owned by this set when source is inline. Read this group through GET
     * /v1/modifier-sets/{modifier_set_id}; /v1/modifier-groups doesn't return it. A modifier group
     * defined inline when creating a modifier set, with its selection limits, modifiers or text
     * rules, and display flags.
     */
    "modifier_group": CreateModifierGroupRequest;
}));
/** The `inline` variant of `CreateModifierSetGroupInput`. */
export type CreateModifierSetGroupInputInlineInput = ({
    /**
     * Overrides the group's name for this set. Omit it to use the group's name. minLength: 1.
     * maxLength: 255.
     */
    "display_name"?: string;
    /**
     * Overrides the group's max_selected for this set. Omit it to use the group's value. Accepted
     * only for list groups; if neither value is set, there is no limit. Format: int32.
     */
    "max_selected"?: number;
    /**
     * Overrides the group's min_selected for this set. Omit it to use the group's value. Accepted
     * only for list groups; set min_selected: 1 to require a selection. If neither value is set,
     * the minimum is 0. Format: int32.
     */
    "min_selected"?: number;
    /**
     * Modifier group owned by this set when source is inline. Read this group through GET
     * /v1/modifier-sets/{modifier_set_id}; /v1/modifier-groups doesn't return it. A modifier group
     * defined inline when creating a modifier set, with its selection limits, modifiers or text
     * rules, and display flags.
     */
    "modifier_group": CreateInlineModifierGroupRequestInput;
    /**
     * Identifier of the independent modifier group referenced when source is existing. minLength:
     * 1.
     */
    "modifier_group_id"?: string;
    /**
     * Overrides for individual list modifiers in this set. A choice is offered only when its
     * status is active and its override's available is not false. [] (Value): {@link
     * ModifierOverrideInput}. Settings for one modifier that apply only within a modifier set
     * group, overriding the modifier group's own values.
     */
    "modifier_overrides"?: Array<ModifierOverrideInput>;
    /** Display position of this group within the set; lower values appear first. Format: int32. */
    "position"?: number;
    /**
     * Overrides the group's text.required for this set. Omit it to use the group's value. Accepted
     * only for text groups; for a list group, set min_selected: 1 to require a selection.
     */
    "required"?: boolean;
    /** Overrides the group's show_on_fulfillment for this set. Omit it to use the group's value. */
    "show_on_fulfillment"?: boolean;
    /** Overrides the group's show_on_receipt for this set. Omit it to use the group's value. */
    "show_on_receipt"?: boolean;
    /**
     * Use inline for a modifier group owned by this modifier set, or existing to reference an
     * independent modifier group. Value enum: "inline".
     */
    "source": "inline";
})
    & (({
    /** Defines a modifier group owned by this modifier set. Value enum: "inline". */
    "source": "inline";
    /**
     * Modifier group owned by this set when source is inline. Read this group through GET
     * /v1/modifier-sets/{modifier_set_id}; /v1/modifier-groups doesn't return it. A modifier group
     * defined inline when creating a modifier set, with its selection limits, modifiers or text
     * rules, and display flags.
     */
    "modifier_group": CreateInlineModifierGroupRequestInput;
})
    & ({
    "modifier_group_id"?: never;
}));
/**
 * A modifier group to add to a modifier set, either an existing group by ID or one defined inline,
 * chosen by `source`.
 */
export type CreateModifierSetGroupRequest = ({
    /**
     * Overrides the group's name for this set. Omit it to use the group's name. minLength: 1.
     * maxLength: 255.
     */
    "display_name"?: string;
    /**
     * Overrides the group's max_selected for this set. Omit it to use the group's value. Accepted
     * only for list groups; if neither value is set, there is no limit. Format: int32.
     */
    "max_selected"?: number;
    /**
     * Overrides the group's min_selected for this set. Omit it to use the group's value. Accepted
     * only for list groups; set min_selected: 1 to require a selection. If neither value is set,
     * the minimum is 0. Format: int32.
     */
    "min_selected"?: number;
    /**
     * Modifier group owned by this set when source is inline. Read this group through GET
     * /v1/modifier-sets/{modifier_set_id}; /v1/modifier-groups doesn't return it. A modifier group
     * defined inline when creating a modifier set, with its selection limits, modifiers or text
     * rules, and display flags.
     */
    "modifier_group"?: CreateModifierGroupRequest;
    /**
     * Identifier of the independent modifier group referenced when source is existing. minLength:
     * 1.
     */
    "modifier_group_id"?: string;
    /**
     * Overrides for individual list modifiers in this set. A choice is offered only when its
     * status is active and its override's available is not false. [] (Value): {@link
     * ModifierOverride}. Settings for one modifier that apply only within a modifier set group,
     * overriding the modifier group's own values.
     */
    "modifier_overrides"?: Array<ModifierOverride>;
    /** Display position of this group within the set; lower values appear first. Format: int32. */
    "position"?: number;
    /**
     * Overrides the group's text.required for this set. Omit it to use the group's value. Accepted
     * only for text groups; for a list group, set min_selected: 1 to require a selection.
     */
    "required"?: boolean;
    /** Overrides the group's show_on_fulfillment for this set. Omit it to use the group's value. */
    "show_on_fulfillment"?: boolean;
    /** Overrides the group's show_on_receipt for this set. Omit it to use the group's value. */
    "show_on_receipt"?: boolean;
    /**
     * Use inline for a modifier group owned by this modifier set, or existing to reference an
     * independent modifier group. Value enum: "existing", "inline".
     */
    "source": "existing" | "inline" | (string & {});
})
    & ((Exclude<CreateModifierSetGroupInputExisting & object, readonly unknown[]>)
    | (Exclude<CreateModifierSetGroupInputInline & object, readonly unknown[]>)
    | (Record<string, unknown>));
/**
 * A modifier group to add to a modifier set, either an existing group by ID or one defined inline,
 * chosen by `source`.
 */
export type CreateModifierSetGroupRequestInput = ({
    /**
     * Overrides the group's name for this set. Omit it to use the group's name. minLength: 1.
     * maxLength: 255.
     */
    "display_name"?: string;
    /**
     * Overrides the group's max_selected for this set. Omit it to use the group's value. Accepted
     * only for list groups; if neither value is set, there is no limit. Format: int32.
     */
    "max_selected"?: number;
    /**
     * Overrides the group's min_selected for this set. Omit it to use the group's value. Accepted
     * only for list groups; set min_selected: 1 to require a selection. If neither value is set,
     * the minimum is 0. Format: int32.
     */
    "min_selected"?: number;
    /**
     * Modifier group owned by this set when source is inline. Read this group through GET
     * /v1/modifier-sets/{modifier_set_id}; /v1/modifier-groups doesn't return it. A modifier group
     * defined inline when creating a modifier set, with its selection limits, modifiers or text
     * rules, and display flags.
     */
    "modifier_group"?: CreateInlineModifierGroupRequestInput;
    /**
     * Identifier of the independent modifier group referenced when source is existing. minLength:
     * 1.
     */
    "modifier_group_id"?: string;
    /**
     * Overrides for individual list modifiers in this set. A choice is offered only when its
     * status is active and its override's available is not false. [] (Value): {@link
     * ModifierOverrideInput}. Settings for one modifier that apply only within a modifier set
     * group, overriding the modifier group's own values.
     */
    "modifier_overrides"?: Array<ModifierOverrideInput>;
    /** Display position of this group within the set; lower values appear first. Format: int32. */
    "position"?: number;
    /**
     * Overrides the group's text.required for this set. Omit it to use the group's value. Accepted
     * only for text groups; for a list group, set min_selected: 1 to require a selection.
     */
    "required"?: boolean;
    /** Overrides the group's show_on_fulfillment for this set. Omit it to use the group's value. */
    "show_on_fulfillment"?: boolean;
    /** Overrides the group's show_on_receipt for this set. Omit it to use the group's value. */
    "show_on_receipt"?: boolean;
    /**
     * Use inline for a modifier group owned by this modifier set, or existing to reference an
     * independent modifier group. Value enum: "existing", "inline".
     */
    "source": "existing" | "inline";
})
    & ((Exclude<CreateModifierSetGroupInputExistingInput & object, readonly unknown[]>)
    | (Exclude<CreateModifierSetGroupInputInlineInput & object, readonly unknown[]>));
/** The request body for: Create modifier set. */
export type CreateModifierSetRequest = {
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255.
     */
    "external_reference_id"?: string;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataMap;
    /**
     * Ordered group entries in this set, including references to reusable groups and groups owned
     * by the set. [] (Value): {@link CreateModifierSetGroupRequest}. A modifier group to add to a
     * modifier set, either an existing group by ID or one defined inline, chosen by `source`.
     */
    "modifier_groups"?: Array<CreateModifierSetGroupRequest>;
    /** Name used to identify this modifier set. minLength: 1. maxLength: 255. */
    "name": string;
    /**
     * Lifecycle status of the modifier set. Only active sets can be offered to buyers; archived
     * sets remain readable and cannot be edited. Default: "active". Value enum: "active",
     * "inactive".
     */
    "status"?: "active" | "inactive" | (string & {});
};
/** The request body for: Create modifier set. */
export type CreateModifierSetRequestInput = {
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255.
     */
    "external_reference_id"?: string;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /**
     * Ordered group entries in this set, including references to reusable groups and groups owned
     * by the set. [] (Value): {@link CreateModifierSetGroupRequestInput}. A modifier group to add
     * to a modifier set, either an existing group by ID or one defined inline, chosen by `source`.
     */
    "modifier_groups"?: Array<CreateModifierSetGroupRequestInput>;
    /** Name used to identify this modifier set. minLength: 1. maxLength: 255. */
    "name": string;
    /**
     * Lifecycle status of the modifier set. Only active sets can be offered to buyers; archived
     * sets remain readable and cannot be edited. Default: "active". Value enum: "active",
     * "inactive".
     */
    "status"?: "active" | "inactive";
};
/**
 * A discount to apply when creating an order: either a manual discount or a reference to a
 * promotion.
 */
export type CreateOrderDiscount = ({
    /**
     * A discount you apply by hand to an order, with a name, an amount, and the order, line items,
     * or charges it applies to.
     */
    "manual"?: ManualDiscountRequest;
    /** Identifies the promotion to apply, by promotion code or by promotion ID. */
    "promotion"?: PromotionRefRequest;
})
    & ((Exclude<CreateOrderDiscountPromotion & object, readonly unknown[]>)
    | (Exclude<CreateOrderDiscountManual & object, readonly unknown[]>)
    | (Record<string, unknown>));
/**
 * A discount to apply when creating an order: either a manual discount or a reference to a
 * promotion.
 */
export type CreateOrderDiscountInput = ({
    /**
     * A discount you apply by hand to an order, with a name, an amount, and the order, line items,
     * or charges it applies to.
     */
    "manual"?: ManualDiscountRequestInput;
    /** Identifies the promotion to apply, by promotion code or by promotion ID. */
    "promotion"?: PromotionRefRequestInput;
})
    & ((Exclude<CreateOrderDiscountPromotionInput & object, readonly unknown[]>)
    | (Exclude<CreateOrderDiscountManualInput & object, readonly unknown[]>));
/** The `Manual` variant of `CreateOrderDiscount`. */
export type CreateOrderDiscountManual = ({
    /**
     * A discount you apply by hand to an order, with a name, an amount, and the order, line items,
     * or charges it applies to.
     */
    "manual": ManualDiscountRequest;
    /** Identifies the promotion to apply, by promotion code or by promotion ID. */
    "promotion"?: PromotionRefRequest;
});
/** The `Manual` variant of `CreateOrderDiscount`. */
export type CreateOrderDiscountManualInput = ({
    /**
     * A discount you apply by hand to an order, with a name, an amount, and the order, line items,
     * or charges it applies to.
     */
    "manual": ManualDiscountRequestInput;
    /** Identifies the promotion to apply, by promotion code or by promotion ID. */
    "promotion"?: PromotionRefRequestInput;
})
    & (({
    "promotion"?: never;
}));
/** The `Promotion` variant of `CreateOrderDiscount`. */
export type CreateOrderDiscountPromotion = ({
    /**
     * A discount you apply by hand to an order, with a name, an amount, and the order, line items,
     * or charges it applies to.
     */
    "manual"?: ManualDiscountRequest;
    /** Identifies the promotion to apply, by promotion code or by promotion ID. */
    "promotion": PromotionRefRequest;
});
/** The `Promotion` variant of `CreateOrderDiscount`. */
export type CreateOrderDiscountPromotionInput = ({
    /**
     * A discount you apply by hand to an order, with a name, an amount, and the order, line items,
     * or charges it applies to.
     */
    "manual"?: ManualDiscountRequestInput;
    /** Identifies the promotion to apply, by promotion code or by promotion ID. */
    "promotion": PromotionRefRequestInput;
})
    & (({
    "manual"?: never;
}));
/**
 * A line item in a delivery preview: a catalog variant, a bundle, or a custom item with a name and
 * unit price.
 */
export type CreateOrderLineItem = ({
    "bundle_id"?: string;
    "description"?: string;
    /**
     * Required on line items without variant_id or bundle_id, and rejected on catalog lines, which
     * use the catalog's delivery settings. Send {"requirement": "none"} for services, digital
     * goods, and items handed over at the point of sale. Fulfillment requirements you supply for
     * an order line item, such as allowed fulfillment types, package size and weight, and origin.
     */
    "fulfillment"?: LineItemFulfillmentRequest;
    /**
     * Buyer-selected face value and recipient for a gift_card variant. The server freezes the
     * offer and resolves consideration per unit. Omit to purchase the reference denomination
     * without a recipient. Gift card details for an order line item: the `face_value_money` and
     * the `recipient` who receives the card.
     */
    "gift_card_purchase"?: GiftCardPurchaseRequest;
    /** A reference to an image by `url`, with optional `alt` text, used on an order line item. */
    "image"?: ImageReferenceRequest;
    /**
     *  [] (Value): {@link OrderDraftLineItemInventoryDemandRequest}. The quantity of one inventory
     * item that each unit of a draft order line item uses, supplied when creating the line item.
     */
    "inventory_demands"?: Array<OrderDraftLineItemInventoryDemandRequest>;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and
     * are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps
     * written before those limits may not satisfy them.
     */
    "metadata"?: MetadataMap;
    /**
     *  [] (Value): {@link OrderLineItemModifierRequest}. A modifier selection you supply on a line
     * item: a catalog modifier by ID or a text modifier, with a quantity. [].metadata (Optional):
     * {@link MetadataMap}. Caller-owned key-value data for a new or replaced map. Omit it for no
     * metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to
     * 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't
     * be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: 50.
     * [].modifier_id (Optional): string. ID of the existing modifier. Treated as an opaque
     * resource reference; accepted spellings follow resource ID validation. Its resolved price and
     * the resulting line subtotal must satisfy the order money ceiling. The amount and every
     * computed order amount must not exceed 99999999 minor units ($999,999.99 USD). Flint rejects
     * an input or calculation above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at
     * the responsible input field. Lower payment option limits can apply. minLength: 1.
     * [].order_line_item_modifier_id (Optional): string. Existing selection ID to retain during
     * replacement. minLength: 1. pattern: ^olim_[0-9A-HJKMNP-TV-Z]{26}$. [].quantity (Optional):
     * integer. Whole-number quantity; fractional quantities are not supported. Format: int64.
     * [].text (Optional): {@link TextModifierRequest}. Text a buyer entered for a text modifier
     * group on an order line item. [].type (Required): string. Selects the type branch. Value
     * enum: "catalog", "text". [].oneOf[1] (Value): {@link OrderLineItemModifierInputCatalog}. The
     * `catalog` variant of `OrderLineItemModifierInput`. [].oneOf[2] (Value): {@link
     * OrderLineItemModifierInputText}. The `text` variant of `OrderLineItemModifierInput`.
     */
    "modifiers"?: Array<(Exclude<OrderLineItemModifierRequest & object, readonly unknown[]>)>;
    "name"?: string;
    /**
     * Number of units, from 1 through 9999. The extended line subtotal, including modifiers, must
     * satisfy the order money ceiling. Format: int64. minimum: 1. maximum: 9999. Default: 1.
     */
    "quantity"?: number;
    /**
     * Selected recurring terms for this variant. Lines with the same cadence start one
     * subscription after payment. Makes an order line a subscription purchase, with the
     * subscription offer and billing interval.
     */
    "subscription"?: SubscribedLineRequest;
    /**
     * Tax settings you supply for a draft order line item: its tax category, whether it is
     * taxable, and an optional tax calculation.
     */
    "tax"?: OrderCalculatedLineItemTax;
    /** Selects the type branch. Value enum: "variant", "bundle", "custom". */
    "type": "variant" | "bundle" | "custom" | (string & {});
    /**
     * Dimensions of one unit. Accepted only for custom lines without variant_id or bundle_id.
     * Package or item dimensions as `length`, `width`, and `height` in the given `unit`.
     */
    "unit_dimensions"?: Dimensions;
    /**
     * Price of one unit. The amount and every computed order amount must not exceed 99999999 minor
     * units ($999,999.99 USD). Flint rejects an input or calculation above this ceiling with
     * INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower payment
     * option limits can apply. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "unit_price_money"?: MoneyValue;
    /**
     * Weight of one unit. Accepted only for custom lines without variant_id or bundle_id. A weight
     * value in grams, kilograms, ounces, or pounds, used in delivery profile configuration.
     */
    "unit_weight"?: Weight;
    "variant_id"?: string;
})
    & ((Exclude<CreateOrderLineItemVariant & object, readonly unknown[]>)
    | (Exclude<CreateOrderLineItemBundle & object, readonly unknown[]>)
    | (Exclude<CreateOrderLineItemCustom & object, readonly unknown[]>)
    | (Record<string, unknown>));
/** The `bundle` variant of `CreateOrderLineItem`. */
export type CreateOrderLineItemBundle = ({
    "bundle_id": string;
    "description"?: string;
    /**
     * Required on line items without variant_id or bundle_id, and rejected on catalog lines, which
     * use the catalog's delivery settings. Send {"requirement": "none"} for services, digital
     * goods, and items handed over at the point of sale. Fulfillment requirements you supply for
     * an order line item, such as allowed fulfillment types, package size and weight, and origin.
     */
    "fulfillment"?: LineItemFulfillmentRequest;
    /**
     * Buyer-selected face value and recipient for a gift_card variant. The server freezes the
     * offer and resolves consideration per unit. Omit to purchase the reference denomination
     * without a recipient. Gift card details for an order line item: the `face_value_money` and
     * the `recipient` who receives the card.
     */
    "gift_card_purchase"?: GiftCardPurchaseRequest;
    /** A reference to an image by `url`, with optional `alt` text, used on an order line item. */
    "image"?: ImageReferenceRequest;
    /**
     *  [] (Value): {@link OrderDraftLineItemInventoryDemandRequest}. The quantity of one inventory
     * item that each unit of a draft order line item uses, supplied when creating the line item.
     */
    "inventory_demands"?: Array<OrderDraftLineItemInventoryDemandRequest>;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and
     * are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps
     * written before those limits may not satisfy them.
     */
    "metadata"?: MetadataMap;
    /**
     *  [] (Value): {@link OrderLineItemModifierRequest}. A modifier selection you supply on a line
     * item: a catalog modifier by ID or a text modifier, with a quantity. [].metadata (Optional):
     * {@link MetadataMap}. Caller-owned key-value data for a new or replaced map. Omit it for no
     * metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to
     * 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't
     * be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: 50.
     * [].modifier_id (Optional): string. ID of the existing modifier. Treated as an opaque
     * resource reference; accepted spellings follow resource ID validation. Its resolved price and
     * the resulting line subtotal must satisfy the order money ceiling. The amount and every
     * computed order amount must not exceed 99999999 minor units ($999,999.99 USD). Flint rejects
     * an input or calculation above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at
     * the responsible input field. Lower payment option limits can apply. minLength: 1.
     * [].order_line_item_modifier_id (Optional): string. Existing selection ID to retain during
     * replacement. minLength: 1. pattern: ^olim_[0-9A-HJKMNP-TV-Z]{26}$. [].quantity (Optional):
     * integer. Whole-number quantity; fractional quantities are not supported. Format: int64.
     * [].text (Optional): {@link TextModifierRequest}. Text a buyer entered for a text modifier
     * group on an order line item. [].type (Required): string. Selects the type branch. Value
     * enum: "catalog", "text". [].oneOf[1] (Value): {@link OrderLineItemModifierInputCatalog}. The
     * `catalog` variant of `OrderLineItemModifierInput`. [].oneOf[2] (Value): {@link
     * OrderLineItemModifierInputText}. The `text` variant of `OrderLineItemModifierInput`.
     */
    "modifiers"?: Array<(Exclude<OrderLineItemModifierRequest & object, readonly unknown[]>)>;
    "name"?: string;
    /**
     * Number of units, from 1 through 9999. The extended line subtotal, including modifiers, must
     * satisfy the order money ceiling. Format: int64. minimum: 1. maximum: 9999. Default: 1.
     */
    "quantity"?: number;
    /**
     * Selected recurring terms for this variant. Lines with the same cadence start one
     * subscription after payment. Makes an order line a subscription purchase, with the
     * subscription offer and billing interval.
     */
    "subscription"?: SubscribedLineRequest;
    /**
     * Tax settings you supply for a draft order line item: its tax category, whether it is
     * taxable, and an optional tax calculation.
     */
    "tax"?: OrderCalculatedLineItemTax;
    /** Selects the type branch. Value enum: "bundle". */
    "type": "bundle" | (string & {});
    /**
     * Dimensions of one unit. Accepted only for custom lines without variant_id or bundle_id.
     * Package or item dimensions as `length`, `width`, and `height` in the given `unit`.
     */
    "unit_dimensions"?: Dimensions;
    /**
     * Price of one unit. The amount and every computed order amount must not exceed 99999999 minor
     * units ($999,999.99 USD). Flint rejects an input or calculation above this ceiling with
     * INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower payment
     * option limits can apply. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "unit_price_money"?: MoneyValue;
    /**
     * Weight of one unit. Accepted only for custom lines without variant_id or bundle_id. A weight
     * value in grams, kilograms, ounces, or pounds, used in delivery profile configuration.
     */
    "unit_weight"?: Weight;
    "variant_id"?: string;
})
    & (({
    "tax"?: unknown;
    /** Value enum: "bundle". */
    "type": "bundle" | (string & {});
    "bundle_id": string;
}));
/** The `custom` variant of `CreateOrderLineItem`. */
export type CreateOrderLineItemCustom = ({
    "bundle_id"?: string;
    "description"?: string;
    /**
     * Required on line items without variant_id or bundle_id, and rejected on catalog lines, which
     * use the catalog's delivery settings. Send {"requirement": "none"} for services, digital
     * goods, and items handed over at the point of sale. Fulfillment requirements you supply for
     * an order line item, such as allowed fulfillment types, package size and weight, and origin.
     */
    "fulfillment": LineItemFulfillmentRequest;
    /**
     * Buyer-selected face value and recipient for a gift_card variant. The server freezes the
     * offer and resolves consideration per unit. Omit to purchase the reference denomination
     * without a recipient. Gift card details for an order line item: the `face_value_money` and
     * the `recipient` who receives the card.
     */
    "gift_card_purchase"?: GiftCardPurchaseRequest;
    /** A reference to an image by `url`, with optional `alt` text, used on an order line item. */
    "image"?: ImageReferenceRequest;
    /**
     *  [] (Value): {@link OrderDraftLineItemInventoryDemandRequest}. The quantity of one inventory
     * item that each unit of a draft order line item uses, supplied when creating the line item.
     */
    "inventory_demands"?: Array<OrderDraftLineItemInventoryDemandRequest>;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and
     * are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps
     * written before those limits may not satisfy them.
     */
    "metadata"?: MetadataMap;
    /**
     *  [] (Value): {@link OrderLineItemModifierRequest}. A modifier selection you supply on a line
     * item: a catalog modifier by ID or a text modifier, with a quantity. [].metadata (Optional):
     * {@link MetadataMap}. Caller-owned key-value data for a new or replaced map. Omit it for no
     * metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to
     * 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't
     * be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: 50.
     * [].modifier_id (Optional): string. ID of the existing modifier. Treated as an opaque
     * resource reference; accepted spellings follow resource ID validation. Its resolved price and
     * the resulting line subtotal must satisfy the order money ceiling. The amount and every
     * computed order amount must not exceed 99999999 minor units ($999,999.99 USD). Flint rejects
     * an input or calculation above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at
     * the responsible input field. Lower payment option limits can apply. minLength: 1.
     * [].order_line_item_modifier_id (Optional): string. Existing selection ID to retain during
     * replacement. minLength: 1. pattern: ^olim_[0-9A-HJKMNP-TV-Z]{26}$. [].quantity (Optional):
     * integer. Whole-number quantity; fractional quantities are not supported. Format: int64.
     * [].text (Optional): {@link TextModifierRequest}. Text a buyer entered for a text modifier
     * group on an order line item. [].type (Required): string. Selects the type branch. Value
     * enum: "catalog", "text". [].oneOf[1] (Value): {@link OrderLineItemModifierInputCatalog}. The
     * `catalog` variant of `OrderLineItemModifierInput`. [].oneOf[2] (Value): {@link
     * OrderLineItemModifierInputText}. The `text` variant of `OrderLineItemModifierInput`.
     */
    "modifiers"?: Array<(Exclude<OrderLineItemModifierRequest & object, readonly unknown[]>)>;
    "name": string;
    /**
     * Number of units, from 1 through 9999. The extended line subtotal, including modifiers, must
     * satisfy the order money ceiling. Format: int64. minimum: 1. maximum: 9999. Default: 1.
     */
    "quantity"?: number;
    /**
     * Selected recurring terms for this variant. Lines with the same cadence start one
     * subscription after payment. Makes an order line a subscription purchase, with the
     * subscription offer and billing interval.
     */
    "subscription"?: SubscribedLineRequest;
    /**
     * Tax settings you supply for a draft order line item: its tax category, whether it is
     * taxable, and an optional tax calculation.
     */
    "tax"?: OrderCalculatedLineItemTax;
    /** Selects the type branch. Value enum: "custom". */
    "type": "custom" | (string & {});
    /**
     * Dimensions of one unit. Accepted only for custom lines without variant_id or bundle_id.
     * Package or item dimensions as `length`, `width`, and `height` in the given `unit`.
     */
    "unit_dimensions"?: Dimensions;
    /**
     * Price of one unit. The amount and every computed order amount must not exceed 99999999 minor
     * units ($999,999.99 USD). Flint rejects an input or calculation above this ceiling with
     * INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower payment
     * option limits can apply. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "unit_price_money": MoneyValue;
    /**
     * Weight of one unit. Accepted only for custom lines without variant_id or bundle_id. A weight
     * value in grams, kilograms, ounces, or pounds, used in delivery profile configuration.
     */
    "unit_weight"?: Weight;
    "variant_id"?: string;
})
    & (({
    /** Value enum: "custom". */
    "type": "custom" | (string & {});
    "name": string;
    /**
     * Price of one unit. The amount and every computed order amount must not exceed 99999999 minor
     * units ($999,999.99 USD). Flint rejects an input or calculation above this ceiling with
     * INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower payment
     * option limits can apply. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "unit_price_money": MoneyValue;
    /**
     * Required on line items without variant_id or bundle_id, and rejected on catalog lines, which
     * use the catalog's delivery settings. Send {"requirement": "none"} for services, digital
     * goods, and items handed over at the point of sale. Fulfillment requirements you supply for
     * an order line item, such as allowed fulfillment types, package size and weight, and origin.
     */
    "fulfillment": LineItemFulfillmentRequest;
}));
/** The `bundle` variant of `CreateOrderLineItemInput`. */
export type CreateOrderLineItemInputBundleInput = ({
    /** minLength: 1. */
    "bundle_id": string;
    /** minLength: 1. */
    "description"?: string;
    /**
     * Required on line items without variant_id or bundle_id, and rejected on catalog lines, which
     * use the catalog's delivery settings. Send {"requirement": "none"} for services, digital
     * goods, and items handed over at the point of sale. Fulfillment requirements you supply for
     * an order line item, such as allowed fulfillment types, package size and weight, and origin.
     */
    "fulfillment"?: LineItemFulfillmentRequestInput;
    /**
     * Buyer-selected face value and recipient for a gift_card variant. The server freezes the
     * offer and resolves consideration per unit. Omit to purchase the reference denomination
     * without a recipient. Gift card details you supply for an order line item: the
     * `face_value_money` and the `recipient` who receives the card.
     */
    "gift_card_purchase"?: GiftCardPurchaseDetailsRequestInput;
    /** A reference to an image by `url`, with optional `alt` text, used on an order line item. */
    "image"?: ImageReferenceRequestInput;
    /**
     *  [] (Value): {@link OrderDraftLineItemInventoryDemandRequestInput}. The quantity of one
     * inventory item that each unit of a draft order line item uses, supplied when creating the
     * line item.
     */
    "inventory_demands"?: Array<OrderDraftLineItemInventoryDemandRequestInput>;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /**
     *  [] (Value): {@link OrderLineItemModifierRequestInput}. A modifier selection you supply on a
     * line item: a catalog modifier by ID or a text modifier, with a quantity. [].metadata
     * (Optional): {@link MetadataRequestInput}. Caller-owned key-value data for a new or replaced
     * map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code
     * points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768
     * UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for
     * Flint. maxProperties: 50. [].modifier_id (Optional): string. ID of the existing modifier.
     * Treated as an opaque resource reference; accepted spellings follow resource ID validation.
     * Its resolved price and the resulting line subtotal must satisfy the order money ceiling. The
     * amount and every computed order amount must not exceed 99999999 minor units ($999,999.99
     * USD). Flint rejects an input or calculation above this ceiling with INVALID_REQUEST and
     * detail INVALID_VALUE at the responsible input field. Lower payment option limits can apply.
     * minLength: 1. [].order_line_item_modifier_id (Optional): string. Existing selection ID to
     * retain during replacement. minLength: 1. pattern: ^olim_[0-9A-HJKMNP-TV-Z]{26}$. [].quantity
     * (Optional): integer. Whole-number quantity; fractional quantities are not supported. Format:
     * int64. [].text (Optional): {@link TextModifierRequestInput}. Text a buyer entered for a text
     * modifier group on an order line item. [].type (Required): string. Selects the type branch.
     * Value enum: "catalog", "text". [].oneOf[1] (Value): {@link
     * OrderLineItemModifierInputCatalogInput}. The `catalog` variant of
     * `OrderLineItemModifierInput`. [].oneOf[2] (Value): {@link
     * OrderLineItemModifierInputTextInput}. The `text` variant of `OrderLineItemModifierInput`.
     */
    "modifiers"?: Array<(Exclude<OrderLineItemModifierRequestInput & object, readonly unknown[]>)
        & (({
        "order_line_item_modifier_id"?: never;
    }))>;
    /** minLength: 1. */
    "name"?: string;
    /**
     * Number of units, from 1 through 9999. The extended line subtotal, including modifiers, must
     * satisfy the order money ceiling. Format: int64. minimum: 1. maximum: 9999. Default: 1.
     */
    "quantity"?: number;
    /**
     * Selected recurring terms for this variant. Lines with the same cadence start one
     * subscription after payment. Makes an order line a subscription purchase, with the
     * subscription offer and billing interval.
     */
    "subscription"?: SubscribedLineRequestInput;
    /**
     * Tax settings you supply for a draft order line item: its tax category, whether it is
     * taxable, and an optional tax calculation.
     */
    "tax"?: OrderDraftLineItemTaxRequestInput;
    /** Selects the type branch. Value enum: "bundle". */
    "type": "bundle";
    /**
     * Dimensions of one unit. Accepted only for custom lines without variant_id or bundle_id.
     * Package or item dimensions as `length`, `width`, and `height` in the given `unit`.
     */
    "unit_dimensions"?: DimensionsInput;
    /**
     * Price of one unit. The amount and every computed order amount must not exceed 99999999 minor
     * units ($999,999.99 USD). Flint rejects an input or calculation above this ceiling with
     * INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower payment
     * option limits can apply. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "unit_price_money"?: MoneyValueInput;
    /**
     * Weight of one unit. Accepted only for custom lines without variant_id or bundle_id. A weight
     * value in grams, kilograms, ounces, or pounds, used in delivery profile configuration.
     */
    "unit_weight"?: WeightInput;
    /** minLength: 1. */
    "variant_id"?: string;
})
    & (({
    "tax"?: (({
        "taxable"?: never;
    }) & ({
        "line_item_tax_category"?: never;
    }));
    /** Value enum: "bundle". */
    "type": ("bundle") & ("bundle");
    /** minLength: 1. */
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
    "unit_weight"?: never;
})
    & ({
    "unit_dimensions"?: never;
})
    & ({
    "description"?: never;
})
    & ({
    "image"?: never;
})
    & ({
    "inventory_demands"?: never;
})
    & ({
    "fulfillment"?: never;
})
    & ({
    "gift_card_purchase"?: never;
})));
/** The `custom` variant of `CreateOrderLineItemInput`. */
export type CreateOrderLineItemInputCustomInput = ({
    /** minLength: 1. */
    "bundle_id"?: string;
    /** minLength: 1. */
    "description"?: string;
    /**
     * Required on line items without variant_id or bundle_id, and rejected on catalog lines, which
     * use the catalog's delivery settings. Send {"requirement": "none"} for services, digital
     * goods, and items handed over at the point of sale. Fulfillment requirements you supply for
     * an order line item, such as allowed fulfillment types, package size and weight, and origin.
     */
    "fulfillment": LineItemFulfillmentRequestInput;
    /**
     * Buyer-selected face value and recipient for a gift_card variant. The server freezes the
     * offer and resolves consideration per unit. Omit to purchase the reference denomination
     * without a recipient. Gift card details you supply for an order line item: the
     * `face_value_money` and the `recipient` who receives the card.
     */
    "gift_card_purchase"?: GiftCardPurchaseDetailsRequestInput;
    /** A reference to an image by `url`, with optional `alt` text, used on an order line item. */
    "image"?: ImageReferenceRequestInput;
    /**
     *  [] (Value): {@link OrderDraftLineItemInventoryDemandRequestInput}. The quantity of one
     * inventory item that each unit of a draft order line item uses, supplied when creating the
     * line item.
     */
    "inventory_demands"?: Array<OrderDraftLineItemInventoryDemandRequestInput>;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /**
     *  [] (Value): {@link OrderLineItemModifierRequestInput}. A modifier selection you supply on a
     * line item: a catalog modifier by ID or a text modifier, with a quantity. [].metadata
     * (Optional): {@link MetadataRequestInput}. Caller-owned key-value data for a new or replaced
     * map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code
     * points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768
     * UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for
     * Flint. maxProperties: 50. [].modifier_id (Optional): string. ID of the existing modifier.
     * Treated as an opaque resource reference; accepted spellings follow resource ID validation.
     * Its resolved price and the resulting line subtotal must satisfy the order money ceiling. The
     * amount and every computed order amount must not exceed 99999999 minor units ($999,999.99
     * USD). Flint rejects an input or calculation above this ceiling with INVALID_REQUEST and
     * detail INVALID_VALUE at the responsible input field. Lower payment option limits can apply.
     * minLength: 1. [].order_line_item_modifier_id (Optional): string. Existing selection ID to
     * retain during replacement. minLength: 1. pattern: ^olim_[0-9A-HJKMNP-TV-Z]{26}$. [].quantity
     * (Optional): integer. Whole-number quantity; fractional quantities are not supported. Format:
     * int64. [].text (Optional): {@link TextModifierRequestInput}. Text a buyer entered for a text
     * modifier group on an order line item. [].type (Required): string. Selects the type branch.
     * Value enum: "catalog", "text". [].oneOf[1] (Value): {@link
     * OrderLineItemModifierInputCatalogInput}. The `catalog` variant of
     * `OrderLineItemModifierInput`. [].oneOf[2] (Value): {@link
     * OrderLineItemModifierInputTextInput}. The `text` variant of `OrderLineItemModifierInput`.
     */
    "modifiers"?: Array<(Exclude<OrderLineItemModifierRequestInput & object, readonly unknown[]>)
        & (({
        "order_line_item_modifier_id"?: never;
    }))>;
    /** minLength: 1. */
    "name": string;
    /**
     * Number of units, from 1 through 9999. The extended line subtotal, including modifiers, must
     * satisfy the order money ceiling. Format: int64. minimum: 1. maximum: 9999. Default: 1.
     */
    "quantity"?: number;
    /**
     * Selected recurring terms for this variant. Lines with the same cadence start one
     * subscription after payment. Makes an order line a subscription purchase, with the
     * subscription offer and billing interval.
     */
    "subscription"?: SubscribedLineRequestInput;
    /**
     * Tax settings you supply for a draft order line item: its tax category, whether it is
     * taxable, and an optional tax calculation.
     */
    "tax"?: OrderDraftLineItemTaxRequestInput;
    /** Selects the type branch. Value enum: "custom". */
    "type": "custom";
    /**
     * Dimensions of one unit. Accepted only for custom lines without variant_id or bundle_id.
     * Package or item dimensions as `length`, `width`, and `height` in the given `unit`.
     */
    "unit_dimensions"?: DimensionsInput;
    /**
     * Price of one unit. The amount and every computed order amount must not exceed 99999999 minor
     * units ($999,999.99 USD). Flint rejects an input or calculation above this ceiling with
     * INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower payment
     * option limits can apply. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "unit_price_money": MoneyValueInput;
    /**
     * Weight of one unit. Accepted only for custom lines without variant_id or bundle_id. A weight
     * value in grams, kilograms, ounces, or pounds, used in delivery profile configuration.
     */
    "unit_weight"?: WeightInput;
    /** minLength: 1. */
    "variant_id"?: string;
})
    & (({
    /** Value enum: "custom". */
    "type": ("custom") & ("custom");
    /** minLength: 1. */
    "name": string;
    /**
     * Price of one unit. The amount and every computed order amount must not exceed 99999999 minor
     * units ($999,999.99 USD). Flint rejects an input or calculation above this ceiling with
     * INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower payment
     * option limits can apply. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "unit_price_money": MoneyValueInput;
    /**
     * Required on line items without variant_id or bundle_id, and rejected on catalog lines, which
     * use the catalog's delivery settings. Send {"requirement": "none"} for services, digital
     * goods, and items handed over at the point of sale. Fulfillment requirements you supply for
     * an order line item, such as allowed fulfillment types, package size and weight, and origin.
     */
    "fulfillment": LineItemFulfillmentRequestInput;
})
    & (({
    "variant_id"?: never;
})
    & ({
    "bundle_id"?: never;
})
    & ({
    "gift_card_purchase"?: never;
})));
/** The `variant` variant of `CreateOrderLineItemInput`. */
export type CreateOrderLineItemInputVariantInput = ({
    /** minLength: 1. */
    "bundle_id"?: string;
    /** minLength: 1. */
    "description"?: string;
    /**
     * Required on line items without variant_id or bundle_id, and rejected on catalog lines, which
     * use the catalog's delivery settings. Send {"requirement": "none"} for services, digital
     * goods, and items handed over at the point of sale. Fulfillment requirements you supply for
     * an order line item, such as allowed fulfillment types, package size and weight, and origin.
     */
    "fulfillment"?: LineItemFulfillmentRequestInput;
    /**
     * Buyer-selected face value and recipient for a gift_card variant. The server freezes the
     * offer and resolves consideration per unit. Omit to purchase the reference denomination
     * without a recipient. Gift card details you supply for an order line item: the
     * `face_value_money` and the `recipient` who receives the card.
     */
    "gift_card_purchase"?: GiftCardPurchaseDetailsRequestInput;
    /** A reference to an image by `url`, with optional `alt` text, used on an order line item. */
    "image"?: ImageReferenceRequestInput;
    /**
     *  [] (Value): {@link OrderDraftLineItemInventoryDemandRequestInput}. The quantity of one
     * inventory item that each unit of a draft order line item uses, supplied when creating the
     * line item.
     */
    "inventory_demands"?: Array<OrderDraftLineItemInventoryDemandRequestInput>;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /**
     *  [] (Value): {@link OrderLineItemModifierRequestInput}. A modifier selection you supply on a
     * line item: a catalog modifier by ID or a text modifier, with a quantity. [].metadata
     * (Optional): {@link MetadataRequestInput}. Caller-owned key-value data for a new or replaced
     * map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code
     * points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768
     * UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for
     * Flint. maxProperties: 50. [].modifier_id (Optional): string. ID of the existing modifier.
     * Treated as an opaque resource reference; accepted spellings follow resource ID validation.
     * Its resolved price and the resulting line subtotal must satisfy the order money ceiling. The
     * amount and every computed order amount must not exceed 99999999 minor units ($999,999.99
     * USD). Flint rejects an input or calculation above this ceiling with INVALID_REQUEST and
     * detail INVALID_VALUE at the responsible input field. Lower payment option limits can apply.
     * minLength: 1. [].order_line_item_modifier_id (Optional): string. Existing selection ID to
     * retain during replacement. minLength: 1. pattern: ^olim_[0-9A-HJKMNP-TV-Z]{26}$. [].quantity
     * (Optional): integer. Whole-number quantity; fractional quantities are not supported. Format:
     * int64. [].text (Optional): {@link TextModifierRequestInput}. Text a buyer entered for a text
     * modifier group on an order line item. [].type (Required): string. Selects the type branch.
     * Value enum: "catalog", "text". [].oneOf[1] (Value): {@link
     * OrderLineItemModifierInputCatalogInput}. The `catalog` variant of
     * `OrderLineItemModifierInput`. [].oneOf[2] (Value): {@link
     * OrderLineItemModifierInputTextInput}. The `text` variant of `OrderLineItemModifierInput`.
     */
    "modifiers"?: Array<(Exclude<OrderLineItemModifierRequestInput & object, readonly unknown[]>)
        & (({
        "order_line_item_modifier_id"?: never;
    }))>;
    /** minLength: 1. */
    "name"?: string;
    /**
     * Number of units, from 1 through 9999. The extended line subtotal, including modifiers, must
     * satisfy the order money ceiling. Format: int64. minimum: 1. maximum: 9999. Default: 1.
     */
    "quantity"?: number;
    /**
     * Selected recurring terms for this variant. Lines with the same cadence start one
     * subscription after payment. Makes an order line a subscription purchase, with the
     * subscription offer and billing interval.
     */
    "subscription"?: SubscribedLineRequestInput;
    /**
     * Tax settings you supply for a draft order line item: its tax category, whether it is
     * taxable, and an optional tax calculation.
     */
    "tax"?: OrderDraftLineItemTaxRequestInput;
    /** Selects the type branch. Value enum: "variant". */
    "type": "variant";
    /**
     * Dimensions of one unit. Accepted only for custom lines without variant_id or bundle_id.
     * Package or item dimensions as `length`, `width`, and `height` in the given `unit`.
     */
    "unit_dimensions"?: DimensionsInput;
    /**
     * Price of one unit. The amount and every computed order amount must not exceed 99999999 minor
     * units ($999,999.99 USD). Flint rejects an input or calculation above this ceiling with
     * INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower payment
     * option limits can apply. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "unit_price_money"?: MoneyValueInput;
    /**
     * Weight of one unit. Accepted only for custom lines without variant_id or bundle_id. A weight
     * value in grams, kilograms, ounces, or pounds, used in delivery profile configuration.
     */
    "unit_weight"?: WeightInput;
    /** minLength: 1. */
    "variant_id": string;
})
    & (({
    "tax"?: (({
        "taxable"?: never;
    }) & ({
        "line_item_tax_category"?: never;
    }));
    /** Value enum: "variant". */
    "type": ("variant") & ("variant");
    /** minLength: 1. */
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
    "unit_weight"?: never;
})
    & ({
    "unit_dimensions"?: never;
})
    & ({
    "description"?: never;
})
    & ({
    "image"?: never;
})
    & ({
    "inventory_demands"?: never;
})
    & ({
    "fulfillment"?: never;
})));
/**
 * A line item to add to an order: a catalog variant, a bundle, or a custom item with a name and
 * unit price.
 */
export type CreateOrderLineItemRequestInput = ({
    /** minLength: 1. */
    "bundle_id"?: string;
    /** minLength: 1. */
    "description"?: string;
    /**
     * Required on line items without variant_id or bundle_id, and rejected on catalog lines, which
     * use the catalog's delivery settings. Send {"requirement": "none"} for services, digital
     * goods, and items handed over at the point of sale. Fulfillment requirements you supply for
     * an order line item, such as allowed fulfillment types, package size and weight, and origin.
     */
    "fulfillment"?: LineItemFulfillmentRequestInput;
    /**
     * Buyer-selected face value and recipient for a gift_card variant. The server freezes the
     * offer and resolves consideration per unit. Omit to purchase the reference denomination
     * without a recipient. Gift card details you supply for an order line item: the
     * `face_value_money` and the `recipient` who receives the card.
     */
    "gift_card_purchase"?: GiftCardPurchaseDetailsRequestInput;
    /** A reference to an image by `url`, with optional `alt` text, used on an order line item. */
    "image"?: ImageReferenceRequestInput;
    /**
     *  [] (Value): {@link OrderDraftLineItemInventoryDemandRequestInput}. The quantity of one
     * inventory item that each unit of a draft order line item uses, supplied when creating the
     * line item.
     */
    "inventory_demands"?: Array<OrderDraftLineItemInventoryDemandRequestInput>;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /**
     *  [] (Value): {@link OrderLineItemModifierRequestInput}. A modifier selection you supply on a
     * line item: a catalog modifier by ID or a text modifier, with a quantity. [].metadata
     * (Optional): {@link MetadataRequestInput}. Caller-owned key-value data for a new or replaced
     * map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code
     * points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768
     * UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for
     * Flint. maxProperties: 50. [].modifier_id (Optional): string. ID of the existing modifier.
     * Treated as an opaque resource reference; accepted spellings follow resource ID validation.
     * Its resolved price and the resulting line subtotal must satisfy the order money ceiling. The
     * amount and every computed order amount must not exceed 99999999 minor units ($999,999.99
     * USD). Flint rejects an input or calculation above this ceiling with INVALID_REQUEST and
     * detail INVALID_VALUE at the responsible input field. Lower payment option limits can apply.
     * minLength: 1. [].order_line_item_modifier_id (Optional): string. Existing selection ID to
     * retain during replacement. minLength: 1. pattern: ^olim_[0-9A-HJKMNP-TV-Z]{26}$. [].quantity
     * (Optional): integer. Whole-number quantity; fractional quantities are not supported. Format:
     * int64. [].text (Optional): {@link TextModifierRequestInput}. Text a buyer entered for a text
     * modifier group on an order line item. [].type (Required): string. Selects the type branch.
     * Value enum: "catalog", "text". [].oneOf[1] (Value): {@link
     * OrderLineItemModifierInputCatalogInput}. The `catalog` variant of
     * `OrderLineItemModifierInput`. [].oneOf[2] (Value): {@link
     * OrderLineItemModifierInputTextInput}. The `text` variant of `OrderLineItemModifierInput`.
     */
    "modifiers"?: Array<(Exclude<OrderLineItemModifierRequestInput & object, readonly unknown[]>)
        & (({
        "order_line_item_modifier_id"?: never;
    }))>;
    /** minLength: 1. */
    "name"?: string;
    /**
     * Number of units, from 1 through 9999. The extended line subtotal, including modifiers, must
     * satisfy the order money ceiling. Format: int64. minimum: 1. maximum: 9999. Default: 1.
     */
    "quantity"?: number;
    /**
     * Selected recurring terms for this variant. Lines with the same cadence start one
     * subscription after payment. Makes an order line a subscription purchase, with the
     * subscription offer and billing interval.
     */
    "subscription"?: SubscribedLineRequestInput;
    /**
     * Tax settings you supply for a draft order line item: its tax category, whether it is
     * taxable, and an optional tax calculation.
     */
    "tax"?: OrderDraftLineItemTaxRequestInput;
    /** Selects the type branch. Value enum: "variant", "bundle", "custom". */
    "type": "variant" | "bundle" | "custom";
    /**
     * Dimensions of one unit. Accepted only for custom lines without variant_id or bundle_id.
     * Package or item dimensions as `length`, `width`, and `height` in the given `unit`.
     */
    "unit_dimensions"?: DimensionsInput;
    /**
     * Price of one unit. The amount and every computed order amount must not exceed 99999999 minor
     * units ($999,999.99 USD). Flint rejects an input or calculation above this ceiling with
     * INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower payment
     * option limits can apply. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "unit_price_money"?: MoneyValueInput;
    /**
     * Weight of one unit. Accepted only for custom lines without variant_id or bundle_id. A weight
     * value in grams, kilograms, ounces, or pounds, used in delivery profile configuration.
     */
    "unit_weight"?: WeightInput;
    /** minLength: 1. */
    "variant_id"?: string;
})
    & ((Exclude<CreateOrderLineItemInputVariantInput & object, readonly unknown[]>)
    | (Exclude<CreateOrderLineItemInputBundleInput & object, readonly unknown[]>)
    | (Exclude<CreateOrderLineItemInputCustomInput & object, readonly unknown[]>));
/** The `variant` variant of `CreateOrderLineItem`. */
export type CreateOrderLineItemVariant = ({
    "bundle_id"?: string;
    "description"?: string;
    /**
     * Required on line items without variant_id or bundle_id, and rejected on catalog lines, which
     * use the catalog's delivery settings. Send {"requirement": "none"} for services, digital
     * goods, and items handed over at the point of sale. Fulfillment requirements you supply for
     * an order line item, such as allowed fulfillment types, package size and weight, and origin.
     */
    "fulfillment"?: LineItemFulfillmentRequest;
    /**
     * Buyer-selected face value and recipient for a gift_card variant. The server freezes the
     * offer and resolves consideration per unit. Omit to purchase the reference denomination
     * without a recipient. Gift card details for an order line item: the `face_value_money` and
     * the `recipient` who receives the card.
     */
    "gift_card_purchase"?: GiftCardPurchaseRequest;
    /** A reference to an image by `url`, with optional `alt` text, used on an order line item. */
    "image"?: ImageReferenceRequest;
    /**
     *  [] (Value): {@link OrderDraftLineItemInventoryDemandRequest}. The quantity of one inventory
     * item that each unit of a draft order line item uses, supplied when creating the line item.
     */
    "inventory_demands"?: Array<OrderDraftLineItemInventoryDemandRequest>;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and
     * are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps
     * written before those limits may not satisfy them.
     */
    "metadata"?: MetadataMap;
    /**
     *  [] (Value): {@link OrderLineItemModifierRequest}. A modifier selection you supply on a line
     * item: a catalog modifier by ID or a text modifier, with a quantity. [].metadata (Optional):
     * {@link MetadataMap}. Caller-owned key-value data for a new or replaced map. Omit it for no
     * metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to
     * 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't
     * be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: 50.
     * [].modifier_id (Optional): string. ID of the existing modifier. Treated as an opaque
     * resource reference; accepted spellings follow resource ID validation. Its resolved price and
     * the resulting line subtotal must satisfy the order money ceiling. The amount and every
     * computed order amount must not exceed 99999999 minor units ($999,999.99 USD). Flint rejects
     * an input or calculation above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at
     * the responsible input field. Lower payment option limits can apply. minLength: 1.
     * [].order_line_item_modifier_id (Optional): string. Existing selection ID to retain during
     * replacement. minLength: 1. pattern: ^olim_[0-9A-HJKMNP-TV-Z]{26}$. [].quantity (Optional):
     * integer. Whole-number quantity; fractional quantities are not supported. Format: int64.
     * [].text (Optional): {@link TextModifierRequest}. Text a buyer entered for a text modifier
     * group on an order line item. [].type (Required): string. Selects the type branch. Value
     * enum: "catalog", "text". [].oneOf[1] (Value): {@link OrderLineItemModifierInputCatalog}. The
     * `catalog` variant of `OrderLineItemModifierInput`. [].oneOf[2] (Value): {@link
     * OrderLineItemModifierInputText}. The `text` variant of `OrderLineItemModifierInput`.
     */
    "modifiers"?: Array<(Exclude<OrderLineItemModifierRequest & object, readonly unknown[]>)>;
    "name"?: string;
    /**
     * Number of units, from 1 through 9999. The extended line subtotal, including modifiers, must
     * satisfy the order money ceiling. Format: int64. minimum: 1. maximum: 9999. Default: 1.
     */
    "quantity"?: number;
    /**
     * Selected recurring terms for this variant. Lines with the same cadence start one
     * subscription after payment. Makes an order line a subscription purchase, with the
     * subscription offer and billing interval.
     */
    "subscription"?: SubscribedLineRequest;
    /**
     * Tax settings you supply for a draft order line item: its tax category, whether it is
     * taxable, and an optional tax calculation.
     */
    "tax"?: OrderCalculatedLineItemTax;
    /** Selects the type branch. Value enum: "variant". */
    "type": "variant" | (string & {});
    /**
     * Dimensions of one unit. Accepted only for custom lines without variant_id or bundle_id.
     * Package or item dimensions as `length`, `width`, and `height` in the given `unit`.
     */
    "unit_dimensions"?: Dimensions;
    /**
     * Price of one unit. The amount and every computed order amount must not exceed 99999999 minor
     * units ($999,999.99 USD). Flint rejects an input or calculation above this ceiling with
     * INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower payment
     * option limits can apply. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "unit_price_money"?: MoneyValue;
    /**
     * Weight of one unit. Accepted only for custom lines without variant_id or bundle_id. A weight
     * value in grams, kilograms, ounces, or pounds, used in delivery profile configuration.
     */
    "unit_weight"?: Weight;
    "variant_id": string;
})
    & (({
    "tax"?: unknown;
    /** Value enum: "variant". */
    "type": "variant" | (string & {});
    "variant_id": string;
}));
/** The request body for: Create order payment intent. */
export type CreateOrderPaymentIntentRequest = {
    /**
     * Amount to collect toward the order, in the order currency. The amount and every computed
     * order amount must not exceed 99999999 minor units ($999,999.99 USD). Flint rejects an input
     * or calculation above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at the
     * responsible input field. Lower payment option limits can apply. Monetary amount represented
     * as integer minor units plus an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValue;
    /**
     * automatic collects the payment when it is confirmed. manual places a hold at confirmation
     * that you capture or cancel later. Defaults to automatic. Value enum: "automatic", "manual".
     */
    "capture_method"?: "automatic" | "manual" | (string & {});
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255.
     */
    "external_reference_id"?: string;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataMap;
    /**
     * [] enum: "card", "apple_pay", "google_pay", "affirm", "ach_debit". [] (Value): string. Value
     * enum: "card", "apple_pay", "google_pay", "affirm", "ach_debit".
     */
    "payment_options"?: Array<"card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit" | (string & {})>;
    /**
     * Absolute HTTPS URL on your site where Flint sends the buyer after a redirect payment such as
     * Affirm. Required when payment_options includes affirm. It can't contain credentials, a query
     * string, or a fragment. Test mode also accepts http loopback URLs. minLength: 1. pattern: \S.
     */
    "payment_return_url"?: string;
    /** The payment source options you choose when creating an order payment intent. */
    "payment_source_selection"?: OrderPaymentSourceSelection;
};
/** The request body for: Create order payment intent. */
export type CreateOrderPaymentIntentRequestInput = {
    /**
     * Amount to collect toward the order, in the order currency. The amount and every computed
     * order amount must not exceed 99999999 minor units ($999,999.99 USD). Flint rejects an input
     * or calculation above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at the
     * responsible input field. Lower payment option limits can apply. Monetary amount represented
     * as integer minor units plus an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValueInput;
    /**
     * automatic collects the payment when it is confirmed. manual places a hold at confirmation
     * that you capture or cancel later. Defaults to automatic. Value enum: "automatic", "manual".
     */
    "capture_method"?: "automatic" | "manual";
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255.
     */
    "external_reference_id"?: string;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /**
     * [] enum: "card", "apple_pay", "google_pay", "affirm", "ach_debit". [] (Value): string. Value
     * enum: "card", "apple_pay", "google_pay", "affirm", "ach_debit".
     */
    "payment_options"?: Array<"card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit">;
    /**
     * Absolute HTTPS URL on your site where Flint sends the buyer after a redirect payment such as
     * Affirm. Required when payment_options includes affirm. It can't contain credentials, a query
     * string, or a fragment. Test mode also accepts http loopback URLs. minLength: 1. pattern: \S.
     */
    "payment_return_url"?: string;
    /** The payment source options you choose when creating an order payment intent. */
    "payment_source_selection"?: OrderPaymentSourceSelectionInput;
};
/** The request body for: Create order. */
export type CreateOrderRequest = {
    /** minLength: 1. maxLength: 1000. */
    "buyer_note"?: string;
    /** minLength: 1. */
    "customer_id"?: string;
    /**
     * Shipment or local-delivery destination for an order created without a delivery selection.
     * The delivery destination you set when creating or updating an order, with an address and an
     * optional recipient.
     */
    "delivery_destination"?: OrderDeliveryDestinationRequest;
    /**
     *  [] (Value): {@link CreateOrderDiscount}. A discount to apply when creating an order: either
     * a manual discount or a reference to a promotion.
     */
    "discounts"?: Array<CreateOrderDiscount>;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255.
     */
    "external_reference_id"?: string;
    /** minLength: 1. maxLength: 1000. */
    "internal_note"?: string;
    /**
     * Where inventory for an order is allocated from: a fixed location, an allocation policy, or a
     * specific policy revision.
     */
    "inventory_routing_source"?: InventoryRoutingSource;
    /**
     * minItems: 1. [] (Value): {@link CreateOrderLineItem}. A line item to add to an order: a
     * catalog variant, a bundle, or a custom item with a name and unit price.
     */
    "line_items": Array<CreateOrderLineItem>;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataMap;
    /**
     * Optional requested tip. Its effective amount must satisfy the CreateOrderTip limit.
     * Requested tip expressed as either a flat amount or a percentage. Send exactly one of
     * amount_money or percent.
     */
    "requested_tip"?: CreateOrderTip;
    /**
     * Tax settings you supply when creating an order: whether tax is enabled, how it is
     * calculated, and the tax location.
     */
    "tax"?: OrderTaxRequest;
};
/** The request body for: Create order. */
export type CreateOrderRequestInput = {
    /** minLength: 1. maxLength: 1000. */
    "buyer_note"?: string;
    /** minLength: 1. */
    "customer_id"?: string;
    /**
     * Shipment or local-delivery destination for an order created without a delivery selection.
     * The delivery destination you set when creating or updating an order, with an address and an
     * optional recipient.
     */
    "delivery_destination"?: OrderDeliveryDestinationRequestInput;
    /**
     *  [] (Value): {@link CreateOrderDiscountInput}. A discount to apply when creating an order:
     * either a manual discount or a reference to a promotion.
     */
    "discounts"?: Array<CreateOrderDiscountInput>;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255.
     */
    "external_reference_id"?: string;
    /** minLength: 1. maxLength: 1000. */
    "internal_note"?: string;
    /**
     * Where inventory for an order is allocated from: a fixed location, an allocation policy, or a
     * specific policy revision.
     */
    "inventory_routing_source"?: OrderInventoryRoutingSourceRequestInput;
    /**
     * minItems: 1. [] (Value): {@link CreateOrderLineItemRequestInput}. A line item to add to an
     * order: a catalog variant, a bundle, or a custom item with a name and unit price.
     */
    "line_items": Array<CreateOrderLineItemRequestInput>;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /**
     * Optional requested tip. Its effective amount must satisfy the CreateOrderTip limit.
     * Requested tip expressed as either a flat amount or a percentage. Send exactly one of
     * amount_money or percent.
     */
    "requested_tip"?: CreateOrderTipInput;
    /**
     * Tax settings you supply when creating an order: whether tax is enabled, how it is
     * calculated, and the tax location.
     */
    "tax"?: OrderTaxRequestInput;
};
/**
 * Requested tip expressed as either a flat amount or a percentage. Send exactly one of
 * amount_money or percent.
 */
export type CreateOrderTip = ({
    /**
     * Flat requested tip in the order currency. The amount must be at least 1 minor unit;
     * otherwise, Flint returns INVALID_REQUEST with param requested_tip.amount_money.amount. For
     * USD orders, the tip also cannot exceed the larger of $1,000 or the post-discount merchandise
     * subtotal. The amount and every computed order amount must not exceed 99999999 minor units
     * ($999,999.99 USD). Flint rejects an input or calculation above this ceiling with
     * INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower payment
     * option limits can apply. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code. amount (Required): integer string. Use an integer string (decimal digits),
     * not a floating-point number. Format: int64. minimum: 1. Amount in the currency's minor unit,
     * such as cents for USD. Use an integer string (decimal digits), not a floating-point number.
     * Format: int64. minimum: 0. currency (Required): string. ISO 4217 currency code for this
     * amount. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     */
    "amount_money"?: ({
        /**
         * Use an integer string (decimal digits), not a floating-point number. Format: int64.
         * minimum: 1.
         */
        "amount"?: `${bigint}`;
    })
        & (Exclude<MoneyValue & object, readonly unknown[]>);
    /** Selects the calculation type branch. Value enum: "amount", "percent". */
    "calculation_type": "amount" | "percent" | (string & {});
    /** minLength: 1. maxLength: 255. */
    "description"?: string;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataMap;
    /** minLength: 1. maxLength: 255. */
    "name"?: string;
    /**
     * Requested tip percentage from 1 through 100, calculated from the post-discount merchandise
     * subtotal. minimum: 1. maximum: 100. multipleOf: 0.0001.
     */
    "percent"?: number;
})
    & ((Exclude<CreateOrderTipAmount & object, readonly unknown[]>)
    | (Exclude<CreateOrderTipPercent & object, readonly unknown[]>)
    | (Record<string, unknown>));
/**
 * Requested tip expressed as either a flat amount or a percentage. Send exactly one of
 * amount_money or percent.
 */
export type CreateOrderTipAmount = ({
    /**
     * Flat requested tip in the order currency. The amount must be at least 1 minor unit;
     * otherwise, Flint returns INVALID_REQUEST with param requested_tip.amount_money.amount. For
     * USD orders, the tip also cannot exceed the larger of $1,000 or the post-discount merchandise
     * subtotal. The amount and every computed order amount must not exceed 99999999 minor units
     * ($999,999.99 USD). Flint rejects an input or calculation above this ceiling with
     * INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower payment
     * option limits can apply. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code. amount (Required): integer string. Use an integer string (decimal digits),
     * not a floating-point number. Format: int64. minimum: 1. Amount in the currency's minor unit,
     * such as cents for USD. Use an integer string (decimal digits), not a floating-point number.
     * Format: int64. minimum: 0. currency (Required): string. ISO 4217 currency code for this
     * amount. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     */
    "amount_money": ({
        /**
         * Use an integer string (decimal digits), not a floating-point number. Format: int64.
         * minimum: 1.
         */
        "amount"?: `${bigint}`;
    })
        & (Exclude<MoneyValue & object, readonly unknown[]>);
    /** Selects the calculation type branch. Value enum: "amount". */
    "calculation_type": "amount" | (string & {});
    /** minLength: 1. maxLength: 255. */
    "description"?: string;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataMap;
    /** minLength: 1. maxLength: 255. */
    "name"?: string;
    /**
     * Requested tip percentage from 1 through 100, calculated from the post-discount merchandise
     * subtotal. minimum: 1. maximum: 100. multipleOf: 0.0001.
     */
    "percent"?: number;
})
    & (({
    /** Value enum: "amount". */
    "calculation_type": "amount" | (string & {});
    /**
     * Flat requested tip in the order currency. The amount must be at least 1 minor unit;
     * otherwise, Flint returns INVALID_REQUEST with param requested_tip.amount_money.amount. For
     * USD orders, the tip also cannot exceed the larger of $1,000 or the post-discount merchandise
     * subtotal. The amount and every computed order amount must not exceed 99999999 minor units
     * ($999,999.99 USD). Flint rejects an input or calculation above this ceiling with
     * INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower payment
     * option limits can apply. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code. amount (Required): integer string. Use an integer string (decimal digits),
     * not a floating-point number. Format: int64. minimum: 1. Amount in the currency's minor unit,
     * such as cents for USD. Use an integer string (decimal digits), not a floating-point number.
     * Format: int64. minimum: 0. currency (Required): string. ISO 4217 currency code for this
     * amount. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     */
    "amount_money": ({
        /**
         * Use an integer string (decimal digits), not a floating-point number. Format: int64.
         * minimum: 1.
         */
        "amount"?: `${bigint}`;
    })
        & (Exclude<MoneyValue & object, readonly unknown[]>);
}));
/**
 * Requested tip expressed as either a flat amount or a percentage. Send exactly one of
 * amount_money or percent.
 */
export type CreateOrderTipAmountInput = ({
    /**
     * Flat requested tip in the order currency. The amount must be at least 1 minor unit;
     * otherwise, Flint returns INVALID_REQUEST with param requested_tip.amount_money.amount. For
     * USD orders, the tip also cannot exceed the larger of $1,000 or the post-discount merchandise
     * subtotal. The amount and every computed order amount must not exceed 99999999 minor units
     * ($999,999.99 USD). Flint rejects an input or calculation above this ceiling with
     * INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower payment
     * option limits can apply. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code. amount (Required): integer string. Use an integer string (decimal digits),
     * not a floating-point number. Format: int64. minimum: 1. Amount in the currency's minor unit,
     * such as cents for USD. Use an integer string (decimal digits), not a floating-point number.
     * Format: int64. minimum: 0. currency (Required): string. ISO 4217 currency code for this
     * amount. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     */
    "amount_money": ({
        /**
         * Use an integer string (decimal digits), not a floating-point number. Format: int64.
         * minimum: 1.
         */
        "amount"?: `${bigint}` | bigint;
    })
        & (Exclude<MoneyValueInput & object, readonly unknown[]>);
    /** Selects the calculation type branch. Value enum: "amount". */
    "calculation_type": "amount";
    /** minLength: 1. maxLength: 255. */
    "description"?: string;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /** minLength: 1. maxLength: 255. */
    "name"?: string;
    /**
     * Requested tip percentage from 1 through 100, calculated from the post-discount merchandise
     * subtotal. minimum: 1. maximum: 100. multipleOf: 0.0001.
     */
    "percent"?: number;
})
    & (({
    /** Value enum: "amount". */
    "calculation_type": ("amount") & ("amount");
    /**
     * Flat requested tip in the order currency. The amount must be at least 1 minor unit;
     * otherwise, Flint returns INVALID_REQUEST with param requested_tip.amount_money.amount. For
     * USD orders, the tip also cannot exceed the larger of $1,000 or the post-discount merchandise
     * subtotal. The amount and every computed order amount must not exceed 99999999 minor units
     * ($999,999.99 USD). Flint rejects an input or calculation above this ceiling with
     * INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower payment
     * option limits can apply. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code. amount (Required): integer string. Use an integer string (decimal digits),
     * not a floating-point number. Format: int64. minimum: 1. Amount in the currency's minor unit,
     * such as cents for USD. Use an integer string (decimal digits), not a floating-point number.
     * Format: int64. minimum: 0. currency (Required): string. ISO 4217 currency code for this
     * amount. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     */
    "amount_money": ({
        /**
         * Use an integer string (decimal digits), not a floating-point number. Format: int64.
         * minimum: 1.
         */
        "amount"?: `${bigint}` | bigint;
    })
        & (Exclude<MoneyValueInput & object, readonly unknown[]>);
})
    & (({
    "percent"?: never;
})));
/**
 * Requested tip expressed as either a flat amount or a percentage. Send exactly one of
 * amount_money or percent.
 */
export type CreateOrderTipInput = ({
    /**
     * Flat requested tip in the order currency. The amount must be at least 1 minor unit;
     * otherwise, Flint returns INVALID_REQUEST with param requested_tip.amount_money.amount. For
     * USD orders, the tip also cannot exceed the larger of $1,000 or the post-discount merchandise
     * subtotal. The amount and every computed order amount must not exceed 99999999 minor units
     * ($999,999.99 USD). Flint rejects an input or calculation above this ceiling with
     * INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower payment
     * option limits can apply. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code. amount (Required): integer string. Use an integer string (decimal digits),
     * not a floating-point number. Format: int64. minimum: 1. Amount in the currency's minor unit,
     * such as cents for USD. Use an integer string (decimal digits), not a floating-point number.
     * Format: int64. minimum: 0. currency (Required): string. ISO 4217 currency code for this
     * amount. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     */
    "amount_money"?: ({
        /**
         * Use an integer string (decimal digits), not a floating-point number. Format: int64.
         * minimum: 1.
         */
        "amount"?: `${bigint}` | bigint;
    })
        & (Exclude<MoneyValueInput & object, readonly unknown[]>);
    /** Selects the calculation type branch. Value enum: "amount", "percent". */
    "calculation_type": "amount" | "percent";
    /** minLength: 1. maxLength: 255. */
    "description"?: string;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /** minLength: 1. maxLength: 255. */
    "name"?: string;
    /**
     * Requested tip percentage from 1 through 100, calculated from the post-discount merchandise
     * subtotal. minimum: 1. maximum: 100. multipleOf: 0.0001.
     */
    "percent"?: number;
})
    & ((Exclude<CreateOrderTipAmountInput & object, readonly unknown[]>)
    | (Exclude<CreateOrderTipPercentInput & object, readonly unknown[]>));
/**
 * Requested tip expressed as either a flat amount or a percentage. Send exactly one of
 * amount_money or percent.
 */
export type CreateOrderTipPercent = ({
    /**
     * Flat requested tip in the order currency. The amount must be at least 1 minor unit;
     * otherwise, Flint returns INVALID_REQUEST with param requested_tip.amount_money.amount. For
     * USD orders, the tip also cannot exceed the larger of $1,000 or the post-discount merchandise
     * subtotal. The amount and every computed order amount must not exceed 99999999 minor units
     * ($999,999.99 USD). Flint rejects an input or calculation above this ceiling with
     * INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower payment
     * option limits can apply. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code. amount (Required): integer string. Use an integer string (decimal digits),
     * not a floating-point number. Format: int64. minimum: 1. Amount in the currency's minor unit,
     * such as cents for USD. Use an integer string (decimal digits), not a floating-point number.
     * Format: int64. minimum: 0. currency (Required): string. ISO 4217 currency code for this
     * amount. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     */
    "amount_money"?: ({
        /**
         * Use an integer string (decimal digits), not a floating-point number. Format: int64.
         * minimum: 1.
         */
        "amount"?: `${bigint}`;
    })
        & (Exclude<MoneyValue & object, readonly unknown[]>);
    /** Selects the calculation type branch. Value enum: "percent". */
    "calculation_type": "percent" | (string & {});
    /** minLength: 1. maxLength: 255. */
    "description"?: string;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataMap;
    /** minLength: 1. maxLength: 255. */
    "name"?: string;
    /**
     * Requested tip percentage from 1 through 100, calculated from the post-discount merchandise
     * subtotal. minimum: 1. maximum: 100. multipleOf: 0.0001.
     */
    "percent": number;
})
    & (({
    /** Value enum: "percent". */
    "calculation_type": "percent" | (string & {});
    /**
     * Requested tip percentage from 1 through 100, calculated from the post-discount merchandise
     * subtotal. minimum: 1. maximum: 100. multipleOf: 0.0001.
     */
    "percent": number;
}));
/**
 * Requested tip expressed as either a flat amount or a percentage. Send exactly one of
 * amount_money or percent.
 */
export type CreateOrderTipPercentInput = ({
    /**
     * Flat requested tip in the order currency. The amount must be at least 1 minor unit;
     * otherwise, Flint returns INVALID_REQUEST with param requested_tip.amount_money.amount. For
     * USD orders, the tip also cannot exceed the larger of $1,000 or the post-discount merchandise
     * subtotal. The amount and every computed order amount must not exceed 99999999 minor units
     * ($999,999.99 USD). Flint rejects an input or calculation above this ceiling with
     * INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower payment
     * option limits can apply. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code. amount (Required): integer string. Use an integer string (decimal digits),
     * not a floating-point number. Format: int64. minimum: 1. Amount in the currency's minor unit,
     * such as cents for USD. Use an integer string (decimal digits), not a floating-point number.
     * Format: int64. minimum: 0. currency (Required): string. ISO 4217 currency code for this
     * amount. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     */
    "amount_money"?: ({
        /**
         * Use an integer string (decimal digits), not a floating-point number. Format: int64.
         * minimum: 1.
         */
        "amount"?: `${bigint}` | bigint;
    })
        & (Exclude<MoneyValueInput & object, readonly unknown[]>);
    /** Selects the calculation type branch. Value enum: "percent". */
    "calculation_type": "percent";
    /** minLength: 1. maxLength: 255. */
    "description"?: string;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /** minLength: 1. maxLength: 255. */
    "name"?: string;
    /**
     * Requested tip percentage from 1 through 100, calculated from the post-discount merchandise
     * subtotal. minimum: 1. maximum: 100. multipleOf: 0.0001.
     */
    "percent": number;
})
    & (({
    /** Value enum: "percent". */
    "calculation_type": ("percent") & ("percent");
    /**
     * Requested tip percentage from 1 through 100, calculated from the post-discount merchandise
     * subtotal. minimum: 1. maximum: 100. multipleOf: 0.0001.
     */
    "percent": number;
})
    & (({
    "amount_money"?: never;
})));
/** The request body for: Create organization. */
export type CreateOrganizationRequest = {
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataMap;
    /** minLength: 1. */
    "name": string;
    /**
     * The organization to create this one under. It must be an active organization you can manage.
     * minLength: 1.
     */
    "parent_organization_id": string;
};
/** The request body for: Create organization. */
export type CreateOrganizationRequestInput = {
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /** minLength: 1. */
    "name": string;
    /**
     * The organization to create this one under. It must be an active organization you can manage.
     * minLength: 1.
     */
    "parent_organization_id": string;
};
/** The request body for: Create package item. */
export type CreatePackageItemRequest = {
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataMap;
    /** minLength: 1. */
    "order_line_item_id": string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
};
/** The request body for: Create package item. */
export type CreatePackageItemRequestInput = {
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /** minLength: 1. */
    "order_line_item_id": string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
};
/** The `jwks_url` variant of `CreatePartnerAppCredentialRequest`. */
export type CreatePartnerAppCredentialJWKSURLRequest = {
    /**
     * A public HTTPS JSON Web Key Set URL. Flint validates and fetches it before registering the
     * credential.
     */
    "jwks_url": CheckoutGiftCardChallenge;
    /** Optional name to identify this credential. minLength: 1. maxLength: 100. */
    "name"?: string;
    /** Credential type. Value enum: "jwks_url". */
    "type": "jwks_url" | (string & {});
};
/** The `jwks_url` variant of `CreatePartnerAppCredentialRequest`. */
export type CreatePartnerAppCredentialJWKSURLRequestInput = {
    /**
     * A public HTTPS JSON Web Key Set URL. Flint validates and fetches it before registering the
     * credential.
     */
    "jwks_url": PartnerAppCredentialJWKSURLRequestInput;
    /** Optional name to identify this credential. minLength: 1. maxLength: 100. */
    "name"?: string;
    /** Credential type. Value enum: "jwks_url". */
    "type": "jwks_url";
};
/** The `public_key` variant of `CreatePartnerAppCredentialRequest`. */
export type CreatePartnerAppCredentialPublicKeyRequest = {
    /** Optional name to identify this credential. minLength: 1. maxLength: 100. */
    "name"?: string;
    /** The public JSON Web Key to register for client authentication. */
    "public_key": PartnerAppCredentialPublicKeyRequest;
    /** Credential type. Value enum: "public_key". */
    "type": "public_key" | (string & {});
};
/** The `public_key` variant of `CreatePartnerAppCredentialRequest`. */
export type CreatePartnerAppCredentialPublicKeyRequestInput = {
    /** Optional name to identify this credential. minLength: 1. maxLength: 100. */
    "name"?: string;
    /** The public JSON Web Key to register for client authentication. */
    "public_key": PartnerAppCredentialPublicKeyRequestInput;
    /** Credential type. Value enum: "public_key". */
    "type": "public_key";
};
/**
 * An immutable public key, JWKS URL, or workload identity credential for partner app client
 * authentication.
 */
export type CreatePartnerAppCredentialRequest = ((CreatePartnerAppCredentialPublicKeyRequest)
    | (CreatePartnerAppCredentialJWKSURLRequest)
    | (CreatePartnerAppCredentialWorkloadIdentityRequest)
    | (Record<string, unknown>));
/**
 * An immutable public key, JWKS URL, or workload identity credential for partner app client
 * authentication.
 */
export type CreatePartnerAppCredentialRequestInput = ((CreatePartnerAppCredentialPublicKeyRequestInput)
    | (CreatePartnerAppCredentialJWKSURLRequestInput)
    | (CreatePartnerAppCredentialWorkloadIdentityRequestInput));
/** The `workload_identity` variant of `CreatePartnerAppCredentialRequest`. */
export type CreatePartnerAppCredentialWorkloadIdentityRequest = {
    /** Optional name to identify this credential. minLength: 1. maxLength: 100. */
    "name"?: string;
    /** Credential type. Value enum: "workload_identity". */
    "type": "workload_identity" | (string & {});
    /**
     * An external OIDC identity whose subject and claim conditions must match exactly the
     * registered policy.
     */
    "workload_identity": PartnerAppCredentialWorkloadIdentityRequest;
};
/** The `workload_identity` variant of `CreatePartnerAppCredentialRequest`. */
export type CreatePartnerAppCredentialWorkloadIdentityRequestInput = {
    /** Optional name to identify this credential. minLength: 1. maxLength: 100. */
    "name"?: string;
    /** Credential type. Value enum: "workload_identity". */
    "type": "workload_identity";
    /**
     * An external OIDC identity whose subject and claim conditions must match exactly the
     * registered policy.
     */
    "workload_identity": PartnerAppCredentialWorkloadIdentityRequestInput;
};
/** The request body for: Create partner app. */
export type CreatePartnerAppRequest = {
    /**
     * API version for requests the app makes with its install tokens that send no Flint-Version
     * header. Defaults to the version of this request and can't be newer than it. minLength: 1.
     */
    "api_version"?: string;
    /**
     * Defaults to false: no client secret is generated. Register a public key, JWKS URL, or
     * workload identity to authenticate with a client assertion. Set true explicitly to issue a
     * client secret at creation. Default: false.
     */
    "client_secret_enabled"?: boolean;
    /**
     * IDs of the permissions requested when an authorization request sends no scope. Each must be
     * in permission_manifest. Defaults to every permission that isn't optional. [] (Value):
     * string. minLength: 1.
     */
    "default_requested_permissions"?: Array<string>;
    /** The app's name, shown to merchants on the consent screen. minLength: 1. */
    "name": string;
    /**
     * Permissions the app can request from merchants. At least one is required. Each lists the
     * Flint scopes it grants. [] (Value): {@link PartnerAppPermissionManifestEntry}. One
     * permission a partner app can request, with a title, a description, and the Flint scopes it
     * grants.
     */
    "permission_manifest": Array<PartnerAppPermissionManifestEntry>;
    /**
     * Redirect URIs the app can use after authorization. Each must be an absolute HTTPS URL, or
     * HTTP on localhost or a loopback address, with no fragment. At least one is required. []
     * (Value): string. minLength: 1.
     */
    "redirect_uris": Array<string>;
};
/** The request body for: Create partner app. */
export type CreatePartnerAppRequestInput = {
    /**
     * API version for requests the app makes with its install tokens that send no Flint-Version
     * header. Defaults to the version of this request and can't be newer than it. minLength: 1.
     */
    "api_version"?: string;
    /**
     * Defaults to false: no client secret is generated. Register a public key, JWKS URL, or
     * workload identity to authenticate with a client assertion. Set true explicitly to issue a
     * client secret at creation. Default: false.
     */
    "client_secret_enabled"?: boolean;
    /**
     * IDs of the permissions requested when an authorization request sends no scope. Each must be
     * in permission_manifest. Defaults to every permission that isn't optional. [] (Value):
     * string. minLength: 1.
     */
    "default_requested_permissions"?: Array<string>;
    /** The app's name, shown to merchants on the consent screen. minLength: 1. */
    "name": string;
    /**
     * Permissions the app can request from merchants. At least one is required. Each lists the
     * Flint scopes it grants. [] (Value): {@link PartnerAppPermissionManifestEntryRequestInput}.
     * One permission a partner app can request, with a title, a description, and the Flint scopes
     * it grants.
     */
    "permission_manifest": Array<PartnerAppPermissionManifestEntryRequestInput>;
    /**
     * Redirect URIs the app can use after authorization. Each must be an absolute HTTPS URL, or
     * HTTP on localhost or a loopback address, with no fragment. At least one is required. []
     * (Value): string. minLength: 1.
     */
    "redirect_uris": Array<string>;
};
/** The request body for: Create standalone payment intent. */
export type CreatePaymentIntentRequest = ({
    /**
     * Amount to request from the buyer, including any tip_money. With capture_method manual, this
     * is the hold amount, and you can capture less of it later. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /**
     * automatic collects the payment when it is confirmed. manual places a hold at confirmation
     * that you capture or cancel later. Defaults to automatic. Default: "automatic". Value enum:
     * "automatic", "manual".
     */
    "capture_method"?: "automatic" | "manual" | (string & {});
    /** Customer to link to this payment intent. minLength: 1. */
    "customer_id"?: string;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255.
     */
    "external_reference_id"?: string;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataMap;
    /**
     * Payment options the buyer can use. Name at least one. minItems: 1. [] enum: "card",
     * "apple_pay", "google_pay", "affirm", "ach_debit". [] (Value): string. Value enum: "card",
     * "apple_pay", "google_pay", "affirm", "ach_debit".
     */
    "payment_options": Array<"card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit" | (string & {})>;
    /**
     * Absolute HTTPS URL on your site where Flint sends the buyer after a redirect payment such as
     * Affirm. Required when payment_options includes affirm. It can't contain credentials, a query
     * string, or a fragment. Test mode also accepts http loopback URLs. minLength: 1. pattern: \S.
     */
    "payment_return_url"?: string;
    /**
     * Email address for this payment's receipt. When omitted, Flint uses the customer's email.
     * Format: email. minLength: 1. maxLength: 255.
     */
    "receipt_email"?: string;
    /**
     * Portion of amount_money that is a tip. Uses amount_money's currency and is at most
     * amount_money. Not accepted on order-linked payment intents. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "tip_money"?: MoneyValue;
    /**
     * Why the bank debit is taken. Required when payment_options includes ach_debit, and rejected
     * with INVALID_REQUEST and NOT_ALLOWED on transaction_purpose otherwise. Value enum: "goods",
     * "services", "other".
     */
    "transaction_purpose"?: "goods" | "services" | "other" | (string & {});
});
/** The request body for: Create standalone payment intent. */
export type CreatePaymentIntentRequestInput = ({
    /**
     * Amount to request from the buyer, including any tip_money. With capture_method manual, this
     * is the hold amount, and you can capture less of it later. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValueInput;
    /**
     * automatic collects the payment when it is confirmed. manual places a hold at confirmation
     * that you capture or cancel later. Defaults to automatic. Default: "automatic". Value enum:
     * "automatic", "manual".
     */
    "capture_method"?: "automatic" | "manual";
    /** Customer to link to this payment intent. minLength: 1. */
    "customer_id"?: string;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255.
     */
    "external_reference_id"?: string;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /**
     * Payment options the buyer can use. Name at least one. minItems: 1. [] enum: "card",
     * "apple_pay", "google_pay", "affirm", "ach_debit". [] (Value): string. Value enum: "card",
     * "apple_pay", "google_pay", "affirm", "ach_debit".
     */
    "payment_options": Array<"card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit">;
    /**
     * Absolute HTTPS URL on your site where Flint sends the buyer after a redirect payment such as
     * Affirm. Required when payment_options includes affirm. It can't contain credentials, a query
     * string, or a fragment. Test mode also accepts http loopback URLs. minLength: 1. pattern: \S.
     */
    "payment_return_url"?: string;
    /**
     * Email address for this payment's receipt. When omitted, Flint uses the customer's email.
     * Format: email. minLength: 1. maxLength: 255.
     */
    "receipt_email"?: string;
    /**
     * Portion of amount_money that is a tip. Uses amount_money's currency and is at most
     * amount_money. Not accepted on order-linked payment intents. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "tip_money"?: MoneyValueInput;
    /**
     * Why the bank debit is taken. Required when payment_options includes ach_debit, and rejected
     * with INVALID_REQUEST and NOT_ALLOWED on transaction_purpose otherwise. Value enum: "goods",
     * "services", "other".
     */
    "transaction_purpose"?: "goods" | "services" | "other";
});
/** The request body for: Create payment link. */
export type CreatePaymentLinkRequest = {
    /** What checkout asks the buyer for. Each field you leave out uses your checkout settings. */
    "buyer_fields"?: CheckoutBuyerFields;
    /**
     * Seconds each checkout session the link starts stays open, from 60 to 86,400. Omit it to use
     * your checkout settings, or 24 hours. It doesn't end the link; use sales_end_at for that.
     * Format: int64. minimum: 60. maximum: 86400.
     */
    "checkout_session_expires_in_seconds"?: number;
    /**
     * maxItems: 20. [] (Value): {@link PaymentLinkCustomFieldRequest}. A custom field you add to a
     * payment link when creating it.
     */
    "custom_fields"?: Array<PaymentLinkCustomFieldRequest>;
    /**
     * Custom text shown on a payment link's checkout, such as the order summary message and
     * shipping address label.
     */
    "custom_text"?: CheckoutCustomTextConfig;
    /**
     * Complete delivery method selection for the link. A link without delivery methods offers
     * settings.checkout.default_delivery_method_ids when its order has items to deliver. Send an
     * empty array to clear the selection. Omit it on PATCH to leave the selection unchanged. Null
     * and duplicate IDs are not accepted. maxItems: 25. uniqueItems: true. [] (Value): string.
     * minLength: 1.
     */
    "delivery_method_ids"?: Array<string>;
    /** minLength: 1. maxLength: 2048. */
    "description"?: string;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "donation_max_amount_money"?: MoneyValue;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "donation_min_amount_money"?: MoneyValue;
    /**
     *  [] (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus an
     * ISO 4217 currency code.
     */
    "donation_suggested_amount_money_options"?: Array<MoneyValue>;
    /** Event settings you supply when creating an event payment link. */
    "event_config"?: PaymentLinkEventConfig;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255.
     */
    "external_reference_id"?: string;
    /** An image you supply by `source_url`, with optional `alt` text and external reference. */
    "image"?: ImageRequest;
    /** minLength: 1. maxLength: 500. */
    "inactive_message"?: string;
    /**
     * Where you want inventory routed from: a fixed Location, an inventory allocation policy, or
     * one policy revision, selected by `type`.
     */
    "inventory_routing_source"?: InventoryRoutingSourceRequest;
    /**
     * Legal links on a payment link: contract, refund policy, shipping policy, and terms of
     * service URLs, and whether buyers must accept the terms.
     */
    "legal"?: LegalSettings;
    /**
     *  [] (Value): {@link PaymentLinkLineItemRequest}. A line item you add to a payment link when
     * creating it, from a catalog variant, a bundle, or an ad hoc name and price.
     */
    "line_items"?: Array<PaymentLinkLineItemRequest>;
    /** Format: int32. */
    "max_completions"?: number;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Metadata pairs
     * plus custom fields must not exceed 44; 6 of the order's 50 pairs are reserved for Flint.
     * Metadata keys and values, custom_field_ keys and largest possible answers, and Flint
     * metadata must fit within 32768 UTF-8 bytes. Text and textarea answers are budgeted at four
     * bytes per Unicode code point, including optional fields. Each checkbox answer is budgeted at
     * five bytes (the length of false). If the combined budget is exceeded, lower max_length on
     * some fields, use fewer custom fields, or reduce metadata. These limits apply to standard and
     * plan links and are checked against the merged configuration on update. maxProperties: 44.
     * Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50
     * key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code
     * points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings,
     * and keys starting with flint_ are reserved for Flint. maxProperties: 50. * (Value): string.
     * minLength: 1. maxLength: 4096.
     */
    "metadata"?: (Exclude<MetadataMap & object, readonly unknown[]>);
    /** minLength: 1. maxLength: 255. */
    "name": string;
    /**
     * Payment link type. Omit to use standard. Explicit values must be standard, donation, or
     * event; empty or padded values are invalid. Default: "standard". Value enum: "standard",
     * "donation", "event".
     */
    "payment_link_type"?: "standard" | "donation" | "event" | (string & {});
    /**
     * Payment settings on a payment link: the enabled payment options and a note shown with
     * payment.
     */
    "payments"?: CheckoutPaymentConfig;
    /**
     * Promotion settings for a checkout: whether automatic promotions apply and whether the buyer
     * can apply promotion codes.
     */
    "promotion_config"?: CheckoutPromotionConfig;
    /**
     * Where checkout sessions started from this payment link send the buyer after payment,
     * cancellation, or expiration. Where hosted checkout sends the buyer. Not allowed when surface
     * is embedded; use payment_return_url.
     */
    "redirects"?: CheckoutRedirects;
    /**
     * RFC3339 timestamp after which the link stops starting checkouts and resolve returns
     * PAYMENT_LINK_SALES_ENDED. Unset means sales do not end on their own, except that an event
     * link without sales_end_at stops selling at event_config.event_at. A checkout opened before
     * the end can still start payment for up to 15 minutes after it. Format: date-time. minLength:
     * 1.
     */
    "sales_end_at"?: string;
    /** minLength: 1. */
    "subscription_plan_id"?: string;
    /** Whether tax is collected for a checkout session or payment link. */
    "tax"?: CheckoutTaxConfig;
    /** Theme settings for a payment link's checkout: accent color, primary color, and title. */
    "theme"?: ThemeConfig;
    /**
     * Tip settings for a checkout: whether tips are enabled, the percent or fixed amount options,
     * the default tip, and custom tips.
     */
    "tip"?: CheckoutTipConfig;
};
/** The request body for: Create payment link. */
export type CreatePaymentLinkRequestInput = {
    /** What checkout asks the buyer for. Each field you leave out uses your checkout settings. */
    "buyer_fields"?: CheckoutBuyerFieldsRequestInput;
    /**
     * Seconds each checkout session the link starts stays open, from 60 to 86,400. Omit it to use
     * your checkout settings, or 24 hours. It doesn't end the link; use sales_end_at for that.
     * Format: int64. minimum: 60. maximum: 86400.
     */
    "checkout_session_expires_in_seconds"?: number;
    /**
     * maxItems: 20. [] (Value): {@link PaymentLinkCustomFieldRequestInput}. A custom field you add
     * to a payment link when creating it.
     */
    "custom_fields"?: Array<PaymentLinkCustomFieldRequestInput>;
    /**
     * Custom text shown on a payment link's checkout, such as the order summary message and
     * shipping address label.
     */
    "custom_text"?: PaymentLinkCustomTextConfigInput;
    /**
     * Complete delivery method selection for the link. A link without delivery methods offers
     * settings.checkout.default_delivery_method_ids when its order has items to deliver. Send an
     * empty array to clear the selection. Omit it on PATCH to leave the selection unchanged. Null
     * and duplicate IDs are not accepted. maxItems: 25. uniqueItems: true. [] (Value): string.
     * minLength: 1.
     */
    "delivery_method_ids"?: Array<string>;
    /** minLength: 1. maxLength: 2048. */
    "description"?: string;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "donation_max_amount_money"?: MoneyValueInput;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "donation_min_amount_money"?: MoneyValueInput;
    /**
     *  [] (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "donation_suggested_amount_money_options"?: Array<MoneyValueInput>;
    /** Event settings you supply when creating an event payment link. */
    "event_config"?: PaymentLinkEventConfigRequestInput;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255.
     */
    "external_reference_id"?: string;
    /** An image you supply by `source_url`, with optional `alt` text and external reference. */
    "image"?: ImageRequestInput;
    /** minLength: 1. maxLength: 500. */
    "inactive_message"?: string;
    /**
     * Where you want inventory routed from: a fixed Location, an inventory allocation policy, or
     * one policy revision, selected by `type`.
     */
    "inventory_routing_source"?: InventoryRoutingSourceRequestInput;
    /**
     * Legal links on a payment link: contract, refund policy, shipping policy, and terms of
     * service URLs, and whether buyers must accept the terms.
     */
    "legal"?: PaymentLinkLegalConfigInput;
    /**
     *  [] (Value): {@link PaymentLinkLineItemRequestInput}. A line item you add to a payment link
     * when creating it, from a catalog variant, a bundle, or an ad hoc name and price.
     */
    "line_items"?: Array<PaymentLinkLineItemRequestInput>;
    /** Format: int32. */
    "max_completions"?: number;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Metadata pairs
     * plus custom fields must not exceed 44; 6 of the order's 50 pairs are reserved for Flint.
     * Metadata keys and values, custom_field_ keys and largest possible answers, and Flint
     * metadata must fit within 32768 UTF-8 bytes. Text and textarea answers are budgeted at four
     * bytes per Unicode code point, including optional fields. Each checkbox answer is budgeted at
     * five bytes (the length of false). If the combined budget is exceeded, lower max_length on
     * some fields, use fewer custom fields, or reduce metadata. These limits apply to standard and
     * plan links and are checked against the merged configuration on update. maxProperties: 44.
     * Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50
     * key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code
     * points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings,
     * and keys starting with flint_ are reserved for Flint. maxProperties: 50. * (Value): string.
     * minLength: 1. maxLength: 4096.
     */
    "metadata"?: (Exclude<MetadataRequestInput & object, readonly unknown[]>);
    /** minLength: 1. maxLength: 255. */
    "name": string;
    /**
     * Payment link type. Omit to use standard. Explicit values must be standard, donation, or
     * event; empty or padded values are invalid. Default: "standard". Value enum: "standard",
     * "donation", "event".
     */
    "payment_link_type"?: "standard" | "donation" | "event";
    /**
     * Payment settings on a payment link: the enabled payment options and a note shown with
     * payment.
     */
    "payments"?: PaymentLinkPaymentConfigInput;
    /**
     * Promotion settings for a checkout: whether automatic promotions apply and whether the buyer
     * can apply promotion codes.
     */
    "promotion_config"?: CheckoutPromotionConfigRequestInput;
    /**
     * Where checkout sessions started from this payment link send the buyer after payment,
     * cancellation, or expiration. Where hosted checkout sends the buyer. Not allowed when surface
     * is embedded; use payment_return_url.
     */
    "redirects"?: CheckoutRedirectsRequestInput;
    /**
     * RFC3339 timestamp after which the link stops starting checkouts and resolve returns
     * PAYMENT_LINK_SALES_ENDED. Unset means sales do not end on their own, except that an event
     * link without sales_end_at stops selling at event_config.event_at. A checkout opened before
     * the end can still start payment for up to 15 minutes after it. Format: date-time. minLength:
     * 1.
     */
    "sales_end_at"?: string | globalThis.Date;
    /** minLength: 1. */
    "subscription_plan_id"?: string;
    /** Whether tax is collected for a checkout session or payment link. */
    "tax"?: CheckoutTaxConfigRequestInput;
    /** Theme settings for a payment link's checkout: accent color, primary color, and title. */
    "theme"?: PaymentLinkThemeConfigInput;
    /**
     * Tip settings for a checkout: whether tips are enabled, the percent or fixed amount options,
     * the default tip, and custom tips.
     */
    "tip"?: CheckoutTipConfigRequestInput;
};
/** The request body for: Register payment method domain. */
export type CreatePaymentMethodDomainRequest = {
    /**
     * Exact fully-qualified hostname to register. Limited to 253 characters (Unicode code points)
     * before trimming whitespace and lowercasing. The resulting hostname uses ASCII characters
     * only. Do not include a scheme, path, port, IP address, or wildcard. minLength: 1. maxLength:
     * 253.
     */
    "domain_name": (string);
};
/** The request body for: Register payment method domain. */
export type CreatePaymentMethodDomainRequestInput = CreatePaymentMethodDomainRequest;
/** The request body for: Create a payout. */
export type CreatePayoutRequest = {
    /**
     * Amount to send, above zero. It can't exceed what one balance source has in
     * available_by_source_type. Monetary amount represented as integer minor units plus an ISO
     * 4217 currency code.
     */
    "amount_money": MoneyValue;
    /**
     * Balance source this payout draws from. Flint chooses the source when omitted. Value enum:
     * "card", "bank_account".
     */
    "balance_source_type"?: "card" | "bank_account" | (string & {});
    /** Your description of the payout, returned on the payout. minLength: 1. */
    "description"?: string;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255.
     */
    "external_reference_id"?: string;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataMap;
    /**
     * Payout method. Only standard is accepted; omitted defaults to standard. Value enum:
     * "standard".
     */
    "method"?: "standard" | (string & {});
    /**
     * Destination to pay. It must be active and in the payout's currency. Omit it to pay the
     * currency's default destination. minLength: 1.
     */
    "payout_destination_id"?: string;
    /** Text shown on your bank statement for this deposit, 22 characters or fewer. minLength: 1. */
    "statement_descriptor"?: string;
};
/** The request body for: Create a payout. */
export type CreatePayoutRequestInput = {
    /**
     * Amount to send, above zero. It can't exceed what one balance source has in
     * available_by_source_type. Monetary amount represented as integer minor units plus an ISO
     * 4217 currency code.
     */
    "amount_money": MoneyValueInput;
    /**
     * Balance source this payout draws from. Flint chooses the source when omitted. Value enum:
     * "card", "bank_account".
     */
    "balance_source_type"?: "card" | "bank_account";
    /** Your description of the payout, returned on the payout. minLength: 1. */
    "description"?: string;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255.
     */
    "external_reference_id"?: string;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /**
     * Payout method. Only standard is accepted; omitted defaults to standard. Value enum:
     * "standard".
     */
    "method"?: "standard";
    /**
     * Destination to pay. It must be active and in the payout's currency. Omit it to pay the
     * currency's default destination. minLength: 1.
     */
    "payout_destination_id"?: string;
    /** Text shown on your bank statement for this deposit, 22 characters or fewer. minLength: 1. */
    "statement_descriptor"?: string;
};
/**
 * Pickup details you supply when creating a fulfillment: the pickup address, location, window,
 * instructions, and curbside details.
 */
export type CreatePickupFulfillmentDetails = {
    /**
     * Address where the buyer collects the order. A complete postal address. State and postal_code
     * are required for US addresses and optional for other countries. Send null or omit line2,
     * state, and postal_code when the address has none.
     */
    "address"?: AddressRequest;
    /** Instructions specific to curbside handoff. minLength: 1. maxLength: 2048. */
    "curbside_instructions"?: string;
    /**
     * Buyer-reported arrival time for curbside or counter pickup. Format: date-time. minLength: 1.
     */
    "customer_arrived_at"?: string;
    /**
     * Deadline after which an uncollected pickup should enter merchant review. Format: date-time.
     * minLength: 1.
     */
    "expires_at"?: string;
    /** Pickup instructions for the buyer, such as where to go on arrival. minLength: 1. */
    "instructions"?: string;
    /** Name of the store or place where the buyer collects the order. minLength: 1. */
    "location_name"?: string;
    /**
     * Width of the promised pickup window, from 0 to 86400 seconds. Format: int64. minimum: 0.
     * maximum: 86400.
     */
    "pickup_window_duration_seconds"?: number;
    /**
     * Expected preparation time for restaurant and made-to-order pickup, from 0 to 86400 seconds.
     * Format: int64. minimum: 0. maximum: 86400.
     */
    "prep_time_duration_seconds"?: number;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. */
    "ready_at"?: string;
    /** minLength: 1. */
    "timezone"?: string;
    /** Buyer vehicle description used for curbside handoff. minLength: 1. maxLength: 500. */
    "vehicle_description"?: string;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. */
    "window_end_at"?: string;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. */
    "window_start_at"?: string;
};
/**
 * Pickup details you supply when creating a fulfillment: the pickup address, location, window,
 * instructions, and curbside details.
 */
export type CreatePickupFulfillmentDetailsInput = {
    /**
     * Address where the buyer collects the order. A complete postal address. State and postal_code
     * are required for US addresses and optional for other countries. Send null or omit line2,
     * state, and postal_code when the address has none.
     */
    "address"?: AddressRequestInput;
    /** Instructions specific to curbside handoff. minLength: 1. maxLength: 2048. */
    "curbside_instructions"?: string;
    /**
     * Buyer-reported arrival time for curbside or counter pickup. Format: date-time. minLength: 1.
     */
    "customer_arrived_at"?: string | globalThis.Date;
    /**
     * Deadline after which an uncollected pickup should enter merchant review. Format: date-time.
     * minLength: 1.
     */
    "expires_at"?: string | globalThis.Date;
    /** Pickup instructions for the buyer, such as where to go on arrival. minLength: 1. */
    "instructions"?: string;
    /** Name of the store or place where the buyer collects the order. minLength: 1. */
    "location_name"?: string;
    /**
     * Width of the promised pickup window, from 0 to 86400 seconds. Format: int64. minimum: 0.
     * maximum: 86400.
     */
    "pickup_window_duration_seconds"?: number;
    /**
     * Expected preparation time for restaurant and made-to-order pickup, from 0 to 86400 seconds.
     * Format: int64. minimum: 0. maximum: 86400.
     */
    "prep_time_duration_seconds"?: number;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. */
    "ready_at"?: string | globalThis.Date;
    /** minLength: 1. */
    "timezone"?: string;
    /** Buyer vehicle description used for curbside handoff. minLength: 1. maxLength: 500. */
    "vehicle_description"?: string;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. */
    "window_end_at"?: string | globalThis.Date;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. */
    "window_start_at"?: string | globalThis.Date;
};
/**
 * A product option to create with a product, such as size, with its values, position, and status.
 */
export type CreateProductOptionRequest = {
    /**
     * Value of this option given to every active variant that has no active value for it after
     * this request, such as when you add an option to a product that already has active variants.
     * It must match one of this option's active `values`, ignoring case and surrounding
     * whitespace. Not stored; the variants keep the value. minLength: 1. maxLength: 255.
     */
    "existing_variant_value"?: string;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataMap;
    /** Option name, such as Size or Color. minLength: 1. maxLength: 255. */
    "name": string;
    /**
     * Display order among the product's options, starting at zero. Defaults to the option's array
     * index when omitted. Format: int32. minimum: 0.
     */
    "position"?: number;
    /**
     * Whether the option is active or inactive. Active variants must select an active value for
     * every active option. Default: "active". Value enum: "active", "inactive".
     */
    "status"?: "active" | "inactive" | (string & {});
    /**
     * Values offered for this option, such as Small, Medium, and Large for Size. [] (Value):
     * {@link CreateProductOptionValueRequest}. One value of a product option to create, such as a
     * specific size, with its position and status.
     */
    "values"?: Array<CreateProductOptionValueRequest>;
};
/**
 * A product option to create with a product, such as size, with its values, position, and status.
 */
export type CreateProductOptionRequestInput = {
    /**
     * Value of this option given to every active variant that has no active value for it after
     * this request, such as when you add an option to a product that already has active variants.
     * It must match one of this option's active `values`, ignoring case and surrounding
     * whitespace. Not stored; the variants keep the value. minLength: 1. maxLength: 255.
     */
    "existing_variant_value"?: string;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /** Option name, such as Size or Color. minLength: 1. maxLength: 255. */
    "name": string;
    /**
     * Display order among the product's options, starting at zero. Defaults to the option's array
     * index when omitted. Format: int32. minimum: 0.
     */
    "position"?: number;
    /**
     * Whether the option is active or inactive. Active variants must select an active value for
     * every active option. Default: "active". Value enum: "active", "inactive".
     */
    "status"?: "active" | "inactive";
    /**
     * Values offered for this option, such as Small, Medium, and Large for Size. [] (Value):
     * {@link CreateProductOptionValueRequestInput}. One value of a product option to create, such
     * as a specific size, with its position and status.
     */
    "values"?: Array<CreateProductOptionValueRequestInput>;
};
/**
 * One value of a product option to create, such as a specific size, with its position and status.
 */
export type CreateProductOptionValueRequest = {
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataMap;
    /**
     * Display order among the option's values, starting at zero. Defaults to the value's array
     * index when omitted. Format: int32. minimum: 0.
     */
    "position"?: number;
    /**
     * Whether the value is active or inactive. Active variants cannot newly select an inactive
     * value. Default: "active". Value enum: "active", "inactive".
     */
    "status"?: "active" | "inactive" | (string & {});
    /** Option value shown to buyers, such as Medium. minLength: 1. maxLength: 255. */
    "value": string;
};
/**
 * One value of a product option to create, such as a specific size, with its position and status.
 */
export type CreateProductOptionValueRequestInput = {
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /**
     * Display order among the option's values, starting at zero. Defaults to the value's array
     * index when omitted. Format: int32. minimum: 0.
     */
    "position"?: number;
    /**
     * Whether the value is active or inactive. Active variants cannot newly select an inactive
     * value. Default: "active". Value enum: "active", "inactive".
     */
    "status"?: "active" | "inactive";
    /** Option value shown to buyers, such as Medium. minLength: 1. maxLength: 255. */
    "value": string;
};
/** The request body for: Create product. */
export type CreateProductRequest = ({
    /**
     * Relationship set of category handles that must already exist. Each handle has 1 to 100
     * characters (Unicode code points). Unknown handles return RESOURCE_NOT_FOUND. Replaces the
     * whole set when present; send [] to clear it. On PATCH, omission leaves it unchanged. Does
     * not require expected_version. maxItems: 100. uniqueItems: true. [] (Value): string.
     * minLength: 1. maxLength: 100. pattern: ^[a-z0-9]+(-[a-z0-9]+)*$.
     */
    "category_handles"?: Array<string>;
    /**
     * The single variant to create as the product's default. Send either default_variant or both
     * options and variants. The request body for: Create product variant.
     */
    "default_variant"?: ProductVariantRequest;
    /** Description of the product shown to buyers. minLength: 1. maxLength: 2048. */
    "description"?: string;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255.
     */
    "external_reference_id"?: string;
    /**
     * The complete desired gallery in display order. The first image is primary. Send [] to clear
     * the gallery. minItems: 0. maxItems: 8. [] (Value): {@link ImageRequest}. An image you supply
     * by `source_url`, with optional `alt` text and external reference.
     */
    "images"?: Array<ImageRequest>;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataMap;
    /** Attached modifier set. Send null on update to remove it. minLength: 1. */
    "modifier_set_id"?: string | null;
    /** Product name shown to buyers. minLength: 1. maxLength: 255. */
    "name": string;
    /**
     * Options and values that distinguish this product's variants. Send with variants instead of
     * default_variant. minItems: 1. [] (Value): {@link CreateProductOptionRequest}. A product
     * option to create with a product, such as size, with its values, position, and status.
     */
    "options"?: Array<CreateProductOptionRequest>;
    /**
     * Kind of goods or service this product represents. New variants of digital products store
     * digital_goods when line_item_tax_category is omitted; explicit categories are preserved.
     * Value enum: "physical", "service", "fee", "digital", "gift_card".
     */
    "product_type": "physical" | "service" | "fee" | "digital" | "gift_card" | (string & {});
    /**
     * Whether the product is active or inactive. An inactive product's variants cannot be sold.
     * Default: "active". Value enum: "active", "inactive".
     */
    "status"?: "active" | "inactive" | (string & {});
    /** Selects the variant mode branch. Value enum: "simple", "optioned". */
    "variant_mode": "simple" | "optioned" | (string & {});
    /**
     * Independent variants to create with this product, at most 100. Add more with `POST
     * /v1/products/{product_id}/variants`. minItems: 1. maxItems: 100. [] (Value): {@link
     * ProductVariantRequest}. The request body for: Create product variant.
     */
    "variants"?: Array<ProductVariantRequest>;
})
    & ((Exclude<CreateProductRequestSimple & object, readonly unknown[]>)
    | (Exclude<CreateProductRequestOptioned & object, readonly unknown[]>)
    | (Record<string, unknown>));
