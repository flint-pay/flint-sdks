import type { InlineModifierGroupRequestInput, InlineModifierGroupRequest } from './types-31.js';
import type {
    ModifierOverrideRequestInput,
    ModifierOverride,
    ModifierGroupPreviousAttributes,
    ModifierOverridePreviousAttributes,
    ModifierSetGroupInputExisting,
    ModifierSet,
    MetadataMap,
    MerchantWebhookEnvelope,
    ModifierSetGroup
} from './types-43.js';
import type { ResponseMeta, ResponseWarning, ResourceReference, ResourceReferencePreviousAttributes } from './types-62.js';
import type { PartnerWebhookEnvelope } from './types-50.js';
import type { InputValue } from '../runtime.js';
import type { CreateModifierSetRequestInput, CreateOnboardingAccessLinkRequestInput } from './types-11.js';
import type { DisputesAcceptParams } from './types-26.js';
import type { UpdateModifierSetRequestInput } from './types-76.js';
import type { ReadinessMerchantAccountSession, ReadinessMerchantAccountSessionPreviousAttributes } from './types-60.js';
import type { CLIDeviceRequestInput, CLIContextsRequestInput, CLIReauthorizeRequestInput } from './types-4.js';
import type { ReadinessAction } from './types-59.js';
/** The `existing` variant of `ModifierSetGroupInput`. */
export type ModifierSetGroupInputExistingInput = ({
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
     * defined inline when setting up a modifier set, with its name, rules for how many options can
     * be selected, and its modifiers.
     */
    "modifier_group"?: InlineModifierGroupRequestInput;
    /**
     * Identifier of the independent modifier group referenced when source is existing. minLength:
     * 1. Example: "mg_01KEZF7C00XKJJATARG7KDBYM9".
     */
    "modifier_group_id": string;
    /**
     * Overrides for individual list modifiers in this set. A choice is offered only when its
     * status is active and its override's available is not false. [] (Value): {@link
     * ModifierOverrideRequestInput}. Settings for one modifier that apply only within a modifier
     * set group, overriding the modifier group's own values.
     */
    "modifier_overrides"?: Array<ModifierOverrideRequestInput>;
    /**
     * Stable identifier of this group entry within the set. In a replacement request, include it
     * to retain an entry or omit it to create one. minLength: 1. Example:
     * "msg_01KEZF7C008GXTVA2AQ1SRFGFC".
     */
    "modifier_set_group_id"?: string;
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
     * 1. Example: "mg_01KEZF7C00XKJJATARG7KDBYM9".
     */
    "modifier_group_id": string;
})
    & ({
    "modifier_group"?: never;
}));
/** The `inline` variant of `ModifierSetGroupInput`. */
export type ModifierSetGroupInputInline = ({
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
     * defined inline when setting up a modifier set, with its name, rules for how many options can
     * be selected, and its modifiers.
     */
    "modifier_group": InlineModifierGroupRequest;
    /**
     * Identifier of the independent modifier group referenced when source is existing. minLength:
     * 1. Example: "mg_01KEZF7C00XKJJATARG7KDBYM9".
     */
    "modifier_group_id"?: string;
    /**
     * Overrides for individual list modifiers in this set. A choice is offered only when its
     * status is active and its override's available is not false. [] (Value): {@link
     * ModifierOverride}. Settings for one modifier that apply only within a modifier set group,
     * overriding the modifier group's own values.
     */
    "modifier_overrides"?: Array<ModifierOverride>;
    /**
     * Stable identifier of this group entry within the set. In a replacement request, include it
     * to retain an entry or omit it to create one. minLength: 1. Example:
     * "msg_01KEZF7C008GXTVA2AQ1SRFGFC".
     */
    "modifier_set_group_id"?: string;
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
     * defined inline when setting up a modifier set, with its name, rules for how many options can
     * be selected, and its modifiers.
     */
    "modifier_group": InlineModifierGroupRequest;
}));
/** The `inline` variant of `ModifierSetGroupInput`. */
export type ModifierSetGroupInputInlineInput = ({
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
     * defined inline when setting up a modifier set, with its name, rules for how many options can
     * be selected, and its modifiers.
     */
    "modifier_group": InlineModifierGroupRequestInput;
    /**
     * Identifier of the independent modifier group referenced when source is existing. minLength:
     * 1. Example: "mg_01KEZF7C00XKJJATARG7KDBYM9".
     */
    "modifier_group_id"?: string;
    /**
     * Overrides for individual list modifiers in this set. A choice is offered only when its
     * status is active and its override's available is not false. [] (Value): {@link
     * ModifierOverrideRequestInput}. Settings for one modifier that apply only within a modifier
     * set group, overriding the modifier group's own values.
     */
    "modifier_overrides"?: Array<ModifierOverrideRequestInput>;
    /**
     * Stable identifier of this group entry within the set. In a replacement request, include it
     * to retain an entry or omit it to create one. minLength: 1. Example:
     * "msg_01KEZF7C008GXTVA2AQ1SRFGFC".
     */
    "modifier_set_group_id"?: string;
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
     * defined inline when setting up a modifier set, with its name, rules for how many options can
     * be selected, and its modifiers.
     */
    "modifier_group": InlineModifierGroupRequestInput;
})
    & ({
    "modifier_group_id"?: never;
}));
export type ModifierSetGroupPreviousAttributes = {
    /**
     * Overrides the group's name for this set. Omit it to use the group's name. anyOf[1] (Value):
     * string. Overrides the group's name for this set. Omit it to use the group's name. anyOf[2]
     * (Value): null.
     */
    "display_name"?: ((string) | (null));
    /**
     * Overrides the group's max_selected for this set. Omit it to use the group's value. Accepted
     * only for list groups; if neither value is set, there is no limit. anyOf[1] (Value): integer.
     * Overrides the group's max_selected for this set. Omit it to use the group's value. Accepted
     * only for list groups; if neither value is set, there is no limit. Format: int32. anyOf[2]
     * (Value): null.
     */
    "max_selected"?: ((number) | (null));
    /**
     * Overrides the group's min_selected for this set. Omit it to use the group's value. Accepted
     * only for list groups; set min_selected: 1 to require a selection. If neither value is set,
     * the minimum is 0. anyOf[1] (Value): integer. Overrides the group's min_selected for this
     * set. Omit it to use the group's value. Accepted only for list groups; set min_selected: 1 to
     * require a selection. If neither value is set, the minimum is 0. Format: int32. anyOf[2]
     * (Value): null.
     */
    "min_selected"?: ((number) | (null));
    /**
     * Full modifier group for this entry, with the same representation as GET
     * /v1/modifier-groups/{modifier_group_id}. Archived modifiers are excluded for either source,
     * including when the group is archived. anyOf[1] (Value): {@link
     * ModifierGroupPreviousAttributes}. anyOf[2] (Value): null.
     */
    "modifier_group"?: ((ModifierGroupPreviousAttributes) | (null));
    /**
     * Stable identifier of the group contained in this entry, for either source. anyOf[1] (Value):
     * string. Stable identifier of the group contained in this entry, for either source. Example:
     * "mg_01KEZF7C00XKJJATARG7KDBYM9". anyOf[2] (Value): null.
     */
    "modifier_group_id"?: ((string) | (null));
    /**
     * Overrides for individual list modifiers in this set. A choice is offered only when its
     * status is active and its override's available is not false. anyOf[1] (Value): Array of
     * {@link ModifierOverridePreviousAttributes}. Overrides for individual list modifiers in this
     * set. A choice is offered only when its status is active and its override's available is not
     * false. anyOf[1][] (Value): {@link ModifierOverridePreviousAttributes}. anyOf[2] (Value):
     * null.
     */
    "modifier_overrides"?: ((Array<ModifierOverridePreviousAttributes>) | (null));
    /**
     * Stable identifier of this group entry within the set. In a replacement request, include it
     * to retain an entry or omit it to create one. anyOf[1] (Value): string. Stable identifier of
     * this group entry within the set. In a replacement request, include it to retain an entry or
     * omit it to create one. Example: "msg_01KEZF7C008GXTVA2AQ1SRFGFC". anyOf[2] (Value): null.
     */
    "modifier_set_group_id"?: ((string) | (null));
    /**
     * Display position of this group within the set; lower values appear first. anyOf[1] (Value):
     * integer. Display position of this group within the set; lower values appear first. Format:
     * int32. anyOf[2] (Value): null.
     */
    "position"?: ((number) | (null));
    /**
     * Overrides the group's text.required for this set. Omit it to use the group's value. Accepted
     * only for text groups; for a list group, set min_selected: 1 to require a selection. anyOf[1]
     * (Value): boolean. Overrides the group's text.required for this set. Omit it to use the
     * group's value. Accepted only for text groups; for a list group, set min_selected: 1 to
     * require a selection. anyOf[2] (Value): null.
     */
    "required"?: ((boolean) | (null));
    /**
     * Overrides the group's show_on_fulfillment for this set. Omit it to use the group's value.
     * anyOf[1] (Value): boolean. Overrides the group's show_on_fulfillment for this set. Omit it
     * to use the group's value. anyOf[2] (Value): null.
     */
    "show_on_fulfillment"?: ((boolean) | (null));
    /**
     * Overrides the group's show_on_receipt for this set. Omit it to use the group's value.
     * anyOf[1] (Value): boolean. Overrides the group's show_on_receipt for this set. Omit it to
     * use the group's value. anyOf[2] (Value): null.
     */
    "show_on_receipt"?: ((boolean) | (null));
    /**
     * Inline groups are owned by this modifier set. Existing groups are independent resources
     * referenced by this set. Value enum: "existing", "inline". anyOf[1] (Value): string. Inline
     * groups are owned by this modifier set. Existing groups are independent resources referenced
     * by this set. Value enum: "existing", "inline". anyOf[2] (Value): null.
     */
    "source"?: (("existing" | "inline" | (string & {})) | (null));
};
/**
 * A modifier group you add to a modifier set, either an existing group by ID or a new inline
 * group, with selection limits and overrides.
 */
export type ModifierSetGroupRequest = ({
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
     * defined inline when setting up a modifier set, with its name, rules for how many options can
     * be selected, and its modifiers.
     */
    "modifier_group"?: InlineModifierGroupRequest;
    /**
     * Identifier of the independent modifier group referenced when source is existing. minLength:
     * 1. Example: "mg_01KEZF7C00XKJJATARG7KDBYM9".
     */
    "modifier_group_id"?: string;
    /**
     * Overrides for individual list modifiers in this set. A choice is offered only when its
     * status is active and its override's available is not false. [] (Value): {@link
     * ModifierOverride}. Settings for one modifier that apply only within a modifier set group,
     * overriding the modifier group's own values.
     */
    "modifier_overrides"?: Array<ModifierOverride>;
    /**
     * Stable identifier of this group entry within the set. In a replacement request, include it
     * to retain an entry or omit it to create one. minLength: 1. Example:
     * "msg_01KEZF7C008GXTVA2AQ1SRFGFC".
     */
    "modifier_set_group_id"?: string;
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
    & ((Exclude<ModifierSetGroupInputExisting & object, readonly unknown[]>)
    | (Exclude<ModifierSetGroupInputInline & object, readonly unknown[]>)
    | (Record<string, unknown>));
/**
 * A modifier group you add to a modifier set, either an existing group by ID or a new inline
 * group, with selection limits and overrides.
 */
export type ModifierSetGroupRequestInput = ({
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
     * defined inline when setting up a modifier set, with its name, rules for how many options can
     * be selected, and its modifiers.
     */
    "modifier_group"?: InlineModifierGroupRequestInput;
    /**
     * Identifier of the independent modifier group referenced when source is existing. minLength:
     * 1. Example: "mg_01KEZF7C00XKJJATARG7KDBYM9".
     */
    "modifier_group_id"?: string;
    /**
     * Overrides for individual list modifiers in this set. A choice is offered only when its
     * status is active and its override's available is not false. [] (Value): {@link
     * ModifierOverrideRequestInput}. Settings for one modifier that apply only within a modifier
     * set group, overriding the modifier group's own values.
     */
    "modifier_overrides"?: Array<ModifierOverrideRequestInput>;
    /**
     * Stable identifier of this group entry within the set. In a replacement request, include it
     * to retain an entry or omit it to create one. minLength: 1. Example:
     * "msg_01KEZF7C008GXTVA2AQ1SRFGFC".
     */
    "modifier_set_group_id"?: string;
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
    & ((Exclude<ModifierSetGroupInputExistingInput & object, readonly unknown[]>)
    | (Exclude<ModifierSetGroupInputInlineInput & object, readonly unknown[]>));
/** A page of `ModifierSet` objects. */
export type ModifierSetListResponse = {
    /**
     * Modifier sets matching the request filters for this page. [] (Value): {@link ModifierSet}. A
     * reusable collection of customization groups.
     */
    "data": Array<ModifierSet>;
    /**
     * Response metadata, including API version, trace identifier, and warnings when present.
     * Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent
     * request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Pass this token as page_token to read the next page with the same filters. Absent when there
     * are no more results.
     */
    "next_page_token"?: string;
    /**
     * Identifier of this API request, useful when contacting Flint support. maxLength: 128.
     * pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
export type ModifierSetPreviousAttributes = {
    /**
     * When the modifier set was created, as an RFC3339 timestamp. anyOf[1] (Value): string. When
     * the modifier set was created, as an RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     */
    "created_at"?: ((string) | (null));
    /**
     * Caller-owned identifier for this resource in an external system. anyOf[1] (Value): string.
     * Caller-owned identifier for this resource in an external system. maxLength: 255. Example:
     * "warehouse-1842". anyOf[2] (Value): null.
     */
    "external_reference_id"?: ((string) | (null));
    /**
     * Identifier of the merchant that owns this modifier set. anyOf[1] (Value): string. Identifier
     * of the merchant that owns this modifier set. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     * anyOf[2] (Value): null.
     */
    "merchant_id"?: ((string) | (null));
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. anyOf[1] (Value):
     * {@link MetadataMap}. anyOf[2] (Value): null.
     */
    "metadata"?: ((MetadataMap) | (null));
    /**
     * Ordered group entries in this set, including the full content of reusable groups and groups
     * owned by the set. anyOf[1] (Value): Array of {@link ModifierSetGroupPreviousAttributes}.
     * Ordered group entries in this set, including the full content of reusable groups and groups
     * owned by the set. anyOf[1][] (Value): {@link ModifierSetGroupPreviousAttributes}. anyOf[2]
     * (Value): null.
     */
    "modifier_groups"?: ((Array<ModifierSetGroupPreviousAttributes>) | (null));
    /**
     * Stable identifier of the modifier set assigned to catalog items. anyOf[1] (Value): string.
     * Stable identifier of the modifier set assigned to catalog items. Example:
     * "ms_01KEZF7C007EWZVVFAWVJJM8NR". anyOf[2] (Value): null.
     */
    "modifier_set_id"?: ((string) | (null));
    /**
     * Name used to identify this modifier set. anyOf[1] (Value): string. Name used to identify
     * this modifier set. anyOf[2] (Value): null.
     */
    "name"?: ((string) | (null));
    /**
     * Lifecycle status of the modifier set. Only active sets can be offered to buyers; archived
     * sets remain readable and cannot be edited. Value enum: "active", "inactive", "archived".
     * anyOf[1] (Value): string. Lifecycle status of the modifier set. Only active sets can be
     * offered to buyers; archived sets remain readable and cannot be edited. Value enum: "active",
     * "inactive", "archived". anyOf[2] (Value): null.
     */
    "status"?: (("active" | "inactive" | "archived" | (string & {})) | (null));
    /**
     * When the modifier set or any group it contains last changed, as an RFC3339 timestamp.
     * anyOf[1] (Value): string. When the modifier set or any group it contains last changed, as an
     * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value):
     * null.
     */
    "updated_at"?: ((string) | (null));
    /**
     * Version of the modifier set, including the groups it contains. anyOf[1] (Value): integer.
     * Version of the modifier set, including the groups it contains. Format: uint64. minimum: 1.
     * anyOf[2] (Value): null.
     */
    "version"?: ((number) | (null));
};
/** A response containing `ModifierSet` data. */
export type ModifierSetResponse = {
    /**
     * The modifier set returned by this operation. A reusable collection of customization groups.
     */
    "data": ModifierSet;
    /**
     * Response metadata, including API version, trace identifier, and warnings when present.
     * Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent
     * request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Identifier of this API request, useful when contacting Flint support. maxLength: 128.
     * pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
export type ModifierSetUpdatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "created_at"?: string;
            "external_reference_id"?: string;
            "merchant_id"?: string;
            "metadata"?: MetadataMap;
            "modifier_groups": Array<ModifierSetGroup>;
            "modifier_set_id": string;
            "name": string;
            "status": "active" | "inactive" | "archived" | (string & {});
            "updated_at"?: string;
            "version": number;
        };
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "created_at"?: ((string) | (null));
            "external_reference_id"?: ((string) | (null));
            "merchant_id"?: ((string) | (null));
            "metadata"?: ((MetadataMap) | (null));
            "modifier_groups"?: ((Array<ModifierSetGroupPreviousAttributes>) | (null));
            "modifier_set_id"?: ((string) | (null));
            "name"?: ((string) | (null));
            "status"?: (("active" | "inactive" | "archived" | (string & {})) | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
        });
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "modifier_set.updated";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "created_at"?: string;
            "external_reference_id"?: string;
            "merchant_id"?: string;
            "metadata"?: MetadataMap;
            "modifier_groups": Array<ModifierSetGroup>;
            "modifier_set_id": string;
            "name": string;
            "status": "active" | "inactive" | "archived" | (string & {});
            "updated_at"?: string;
            "version": number;
        };
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "created_at"?: ((string) | (null));
            "external_reference_id"?: ((string) | (null));
            "merchant_id"?: ((string) | (null));
            "metadata"?: ((MetadataMap) | (null));
            "modifier_groups"?: ((Array<ModifierSetGroupPreviousAttributes>) | (null));
            "modifier_set_id"?: ((string) | (null));
            "name"?: ((string) | (null));
            "status"?: (("active" | "inactive" | "archived" | (string & {})) | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
        });
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "modifier_set.updated";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "modifier_set.updated";
});
/**
 * The `modifier_set.updated` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type ModifierSetUpdatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.created_at (Optional): string. When the modifier set was created,
     * as an RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.external_reference_id (Optional): string. Caller-owned identifier for this resource
     * in an external system. maxLength: 255. Example: "warehouse-1842". object.merchant_id
     * (Optional): string. Identifier of the merchant that owns this modifier set. Example:
     * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata (Optional): {@link MetadataMap}.
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and
     * are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps
     * written before those limits may not satisfy them. object.modifier_groups (Required): Array
     * of {@link ModifierSetGroup}. Ordered group entries in this set, including the full content
     * of reusable groups and groups owned by the set. object.modifier_groups[] (Value): {@link
     * ModifierSetGroup}. A modifier group as it appears in a modifier set, with its selection
     * limits, display options, and per-modifier overrides. object.modifier_set_id (Required):
     * string. Stable identifier of the modifier set assigned to catalog items. Example:
     * "ms_01KEZF7C007EWZVVFAWVJJM8NR". object.name (Required): string. Name used to identify this
     * modifier set. object.status (Required): string. Lifecycle status of the modifier set. Only
     * active sets can be offered to buyers; archived sets remain readable and cannot be edited.
     * Value enum: "active", "inactive", "archived". object.updated_at (Optional): string. When the
     * modifier set or any group it contains last changed, as an RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.version (Required): integer. Version of
     * the modifier set, including the groups it contains. Format: uint64. minimum: 1.
     * previous_attributes (Optional): object and {@link ModifierSetPreviousAttributes}. Previous
     * values of changed top-level fields in data.object, at this delivery's API version. Nested
     * changes include the whole previous top-level value. A value is null when the field was
     * absent before the change. Omitted when Flint did not record the previous state, including
     * synthetic test events. previous_attributes.created_at (Optional): string or null. When the
     * modifier set was created, as an RFC3339 timestamp. previous_attributes.created_at.anyOf[1]
     * (Value): string. When the modifier set was created, as an RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.created_at.anyOf[2] (Value):
     * null. previous_attributes.external_reference_id (Optional): string or null. Caller-owned
     * identifier for this resource in an external system.
     * previous_attributes.external_reference_id.anyOf[1] (Value): string. Caller-owned identifier
     * for this resource in an external system. maxLength: 255. Example: "warehouse-1842".
     * previous_attributes.external_reference_id.anyOf[2] (Value): null.
     * previous_attributes.merchant_id (Optional): string or null. Identifier of the merchant that
     * owns this modifier set. previous_attributes.merchant_id.anyOf[1] (Value): string. Identifier
     * of the merchant that owns this modifier set. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     * previous_attributes.merchant_id.anyOf[2] (Value): null. previous_attributes.metadata
     * (Optional): {@link MetadataMap} or null. Caller-owned metadata. Values can't be empty
     * strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be
     * written through the public API. previous_attributes.metadata.anyOf[1] (Value): {@link
     * MetadataMap}. previous_attributes.metadata.anyOf[2] (Value): null.
     * previous_attributes.modifier_groups (Optional): Array of {@link
     * ModifierSetGroupPreviousAttributes} or null. Ordered group entries in this set, including
     * the full content of reusable groups and groups owned by the set.
     * previous_attributes.modifier_groups.anyOf[1] (Value): Array of {@link
     * ModifierSetGroupPreviousAttributes}. Ordered group entries in this set, including the full
     * content of reusable groups and groups owned by the set.
     * previous_attributes.modifier_groups.anyOf[1][] (Value): {@link
     * ModifierSetGroupPreviousAttributes}. previous_attributes.modifier_groups.anyOf[2] (Value):
     * null. previous_attributes.modifier_set_id (Optional): string or null. Stable identifier of
     * the modifier set assigned to catalog items. previous_attributes.modifier_set_id.anyOf[1]
     * (Value): string. Stable identifier of the modifier set assigned to catalog items. Example:
     * "ms_01KEZF7C007EWZVVFAWVJJM8NR". previous_attributes.modifier_set_id.anyOf[2] (Value): null.
     * previous_attributes.name (Optional): string or null. Name used to identify this modifier
     * set. previous_attributes.name.anyOf[1] (Value): string. Name used to identify this modifier
     * set. previous_attributes.name.anyOf[2] (Value): null. previous_attributes.status (Optional):
     * string or null. Lifecycle status of the modifier set. Only active sets can be offered to
     * buyers; archived sets remain readable and cannot be edited. Value enum: "active",
     * "inactive", "archived". previous_attributes.status.anyOf[1] (Value): string. Lifecycle
     * status of the modifier set. Only active sets can be offered to buyers; archived sets remain
     * readable and cannot be edited. Value enum: "active", "inactive", "archived".
     * previous_attributes.status.anyOf[2] (Value): null. previous_attributes.updated_at
     * (Optional): string or null. When the modifier set or any group it contains last changed, as
     * an RFC3339 timestamp. previous_attributes.updated_at.anyOf[1] (Value): string. When the
     * modifier set or any group it contains last changed, as an RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.updated_at.anyOf[2] (Value):
     * null. previous_attributes.version (Optional): integer or null. Version of the modifier set,
     * including the groups it contains. previous_attributes.version.anyOf[1] (Value): integer.
     * Version of the modifier set, including the groups it contains. Format: uint64. minimum: 1.
     * previous_attributes.version.anyOf[2] (Value): null.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * created_at (Optional): string. When the modifier set was created, as an RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". external_reference_id
         * (Optional): string. Caller-owned identifier for this resource in an external system.
         * maxLength: 255. Example: "warehouse-1842". merchant_id (Optional): string. Identifier of
         * the merchant that owns this modifier set. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
         * metadata (Optional): {@link MetadataMap}. Caller-owned metadata. Values can't be empty
         * strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot
         * be written through the public API. Caller-owned key-value data stored on a resource.
         * Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the
         * limits on MetadataInput and MetadataPatchInput; maps written before those limits may not
         * satisfy them. modifier_groups (Required): Array of {@link ModifierSetGroup}. Ordered
         * group entries in this set, including the full content of reusable groups and groups
         * owned by the set. modifier_groups[] (Value): {@link ModifierSetGroup}. A modifier group
         * as it appears in a modifier set, with its selection limits, display options, and
         * per-modifier overrides. modifier_set_id (Required): string. Stable identifier of the
         * modifier set assigned to catalog items. Example: "ms_01KEZF7C007EWZVVFAWVJJM8NR". name
         * (Required): string. Name used to identify this modifier set. status (Required): string.
         * Lifecycle status of the modifier set. Only active sets can be offered to buyers;
         * archived sets remain readable and cannot be edited. Value enum: "active", "inactive",
         * "archived". updated_at (Optional): string. When the modifier set or any group it
         * contains last changed, as an RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". version (Required): integer. Version of the modifier set,
         * including the groups it contains. Format: uint64. minimum: 1.
         */
        "object": {
            /**
             * When the modifier set was created, as an RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z".
             */
            "created_at"?: string;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Identifier of the merchant that owns this modifier set. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id"?: string;
            /**
             * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are
             * reserved for Flint, are not returned, and cannot be written through the public API.
             * Caller-owned key-value data stored on a resource. Keys starting with flint_ are
             * reserved for Flint and are not returned. Writes follow the limits on MetadataInput
             * and MetadataPatchInput; maps written before those limits may not satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * Ordered group entries in this set, including the full content of reusable groups and
             * groups owned by the set. [] (Value): {@link ModifierSetGroup}. A modifier group as
             * it appears in a modifier set, with its selection limits, display options, and
             * per-modifier overrides.
             */
            "modifier_groups": Array<ModifierSetGroup>;
            /**
             * Stable identifier of the modifier set assigned to catalog items. Example:
             * "ms_01KEZF7C007EWZVVFAWVJJM8NR".
             */
            "modifier_set_id": string;
            /** Name used to identify this modifier set. */
            "name": string;
            /**
             * Lifecycle status of the modifier set. Only active sets can be offered to buyers;
             * archived sets remain readable and cannot be edited. Value enum: "active",
             * "inactive", "archived".
             */
            "status": "active" | "inactive" | "archived" | (string & {});
            /**
             * When the modifier set or any group it contains last changed, as an RFC3339
             * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "updated_at"?: string;
            /**
             * Version of the modifier set, including the groups it contains. Format: uint64.
             * minimum: 1.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. created_at (Optional): string or null. When the
         * modifier set was created, as an RFC3339 timestamp. created_at.anyOf[1] (Value): string.
         * When the modifier set was created, as an RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". created_at.anyOf[2] (Value): null. external_reference_id
         * (Optional): string or null. Caller-owned identifier for this resource in an external
         * system. external_reference_id.anyOf[1] (Value): string. Caller-owned identifier for this
         * resource in an external system. maxLength: 255. Example: "warehouse-1842".
         * external_reference_id.anyOf[2] (Value): null. merchant_id (Optional): string or null.
         * Identifier of the merchant that owns this modifier set. merchant_id.anyOf[1] (Value):
         * string. Identifier of the merchant that owns this modifier set. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". merchant_id.anyOf[2] (Value): null. metadata
         * (Optional): {@link MetadataMap} or null. Caller-owned metadata. Values can't be empty
         * strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot
         * be written through the public API. metadata.anyOf[1] (Value): {@link MetadataMap}.
         * metadata.anyOf[2] (Value): null. modifier_groups (Optional): Array of {@link
         * ModifierSetGroupPreviousAttributes} or null. Ordered group entries in this set,
         * including the full content of reusable groups and groups owned by the set.
         * modifier_groups.anyOf[1] (Value): Array of {@link ModifierSetGroupPreviousAttributes}.
         * Ordered group entries in this set, including the full content of reusable groups and
         * groups owned by the set. modifier_groups.anyOf[1][] (Value): {@link
         * ModifierSetGroupPreviousAttributes}. modifier_groups.anyOf[2] (Value): null.
         * modifier_set_id (Optional): string or null. Stable identifier of the modifier set
         * assigned to catalog items. modifier_set_id.anyOf[1] (Value): string. Stable identifier
         * of the modifier set assigned to catalog items. Example: "ms_01KEZF7C007EWZVVFAWVJJM8NR".
         * modifier_set_id.anyOf[2] (Value): null. name (Optional): string or null. Name used to
         * identify this modifier set. name.anyOf[1] (Value): string. Name used to identify this
         * modifier set. name.anyOf[2] (Value): null. status (Optional): string or null. Lifecycle
         * status of the modifier set. Only active sets can be offered to buyers; archived sets
         * remain readable and cannot be edited. Value enum: "active", "inactive", "archived".
         * status.anyOf[1] (Value): string. Lifecycle status of the modifier set. Only active sets
         * can be offered to buyers; archived sets remain readable and cannot be edited. Value
         * enum: "active", "inactive", "archived". status.anyOf[2] (Value): null. updated_at
         * (Optional): string or null. When the modifier set or any group it contains last changed,
         * as an RFC3339 timestamp. updated_at.anyOf[1] (Value): string. When the modifier set or
         * any group it contains last changed, as an RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". updated_at.anyOf[2] (Value): null. version (Optional): integer
         * or null. Version of the modifier set, including the groups it contains. version.anyOf[1]
         * (Value): integer. Version of the modifier set, including the groups it contains. Format:
         * uint64. minimum: 1. version.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * When the modifier set was created, as an RFC3339 timestamp. anyOf[1] (Value):
             * string. When the modifier set was created, as an RFC3339 timestamp. Format:
             * date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * Caller-owned identifier for this resource in an external system. anyOf[1] (Value):
             * string. Caller-owned identifier for this resource in an external system. maxLength:
             * 255. Example: "warehouse-1842". anyOf[2] (Value): null.
             */
            "external_reference_id"?: ((string) | (null));
            /**
             * Identifier of the merchant that owns this modifier set. anyOf[1] (Value): string.
             * Identifier of the merchant that owns this modifier set. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". anyOf[2] (Value): null.
             */
            "merchant_id"?: ((string) | (null));
            /**
             * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are
             * reserved for Flint, are not returned, and cannot be written through the public API.
             * anyOf[1] (Value): {@link MetadataMap}. anyOf[2] (Value): null.
             */
            "metadata"?: ((MetadataMap) | (null));
            /**
             * Ordered group entries in this set, including the full content of reusable groups and
             * groups owned by the set. anyOf[1] (Value): Array of {@link
             * ModifierSetGroupPreviousAttributes}. Ordered group entries in this set, including
             * the full content of reusable groups and groups owned by the set. anyOf[1][] (Value):
             * {@link ModifierSetGroupPreviousAttributes}. anyOf[2] (Value): null.
             */
            "modifier_groups"?: ((Array<ModifierSetGroupPreviousAttributes>) | (null));
            /**
             * Stable identifier of the modifier set assigned to catalog items. anyOf[1] (Value):
             * string. Stable identifier of the modifier set assigned to catalog items. Example:
             * "ms_01KEZF7C007EWZVVFAWVJJM8NR". anyOf[2] (Value): null.
             */
            "modifier_set_id"?: ((string) | (null));
            /**
             * Name used to identify this modifier set. anyOf[1] (Value): string. Name used to
             * identify this modifier set. anyOf[2] (Value): null.
             */
            "name"?: ((string) | (null));
            /**
             * Lifecycle status of the modifier set. Only active sets can be offered to buyers;
             * archived sets remain readable and cannot be edited. Value enum: "active",
             * "inactive", "archived". anyOf[1] (Value): string. Lifecycle status of the modifier
             * set. Only active sets can be offered to buyers; archived sets remain readable and
             * cannot be edited. Value enum: "active", "inactive", "archived". anyOf[2] (Value):
             * null.
             */
            "status"?: (("active" | "inactive" | "archived" | (string & {})) | (null));
            /**
             * When the modifier set or any group it contains last changed, as an RFC3339
             * timestamp. anyOf[1] (Value): string. When the modifier set or any group it contains
             * last changed, as an RFC3339 timestamp. Format: date-time. Example:
             * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * Version of the modifier set, including the groups it contains. anyOf[1] (Value):
             * integer. Version of the modifier set, including the groups it contains. Format:
             * uint64. minimum: 1. anyOf[2] (Value): null.
             */
            "version"?: ((number) | (null));
        });
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "modifier_set.updated". */
    "event_type"?: "modifier_set.updated";
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
 * The `modifier_set.updated` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type ModifierSetUpdatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.created_at (Optional): string. When the modifier set was created,
     * as an RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.external_reference_id (Optional): string. Caller-owned identifier for this resource
     * in an external system. maxLength: 255. Example: "warehouse-1842". object.merchant_id
     * (Optional): string. Identifier of the merchant that owns this modifier set. Example:
     * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata (Optional): {@link MetadataMap}.
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and
     * are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps
     * written before those limits may not satisfy them. object.modifier_groups (Required): Array
     * of {@link ModifierSetGroup}. Ordered group entries in this set, including the full content
     * of reusable groups and groups owned by the set. object.modifier_groups[] (Value): {@link
     * ModifierSetGroup}. A modifier group as it appears in a modifier set, with its selection
     * limits, display options, and per-modifier overrides. object.modifier_set_id (Required):
     * string. Stable identifier of the modifier set assigned to catalog items. Example:
     * "ms_01KEZF7C007EWZVVFAWVJJM8NR". object.name (Required): string. Name used to identify this
     * modifier set. object.status (Required): string. Lifecycle status of the modifier set. Only
     * active sets can be offered to buyers; archived sets remain readable and cannot be edited.
     * Value enum: "active", "inactive", "archived". object.updated_at (Optional): string. When the
     * modifier set or any group it contains last changed, as an RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.version (Required): integer. Version of
     * the modifier set, including the groups it contains. Format: uint64. minimum: 1.
     * previous_attributes (Optional): object and {@link ModifierSetPreviousAttributes}. Previous
     * values of changed top-level fields in data.object, at this delivery's API version. Nested
     * changes include the whole previous top-level value. A value is null when the field was
     * absent before the change. Omitted when Flint did not record the previous state, including
     * synthetic test events. previous_attributes.created_at (Optional): string or null. When the
     * modifier set was created, as an RFC3339 timestamp. previous_attributes.created_at.anyOf[1]
     * (Value): string. When the modifier set was created, as an RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.created_at.anyOf[2] (Value):
     * null. previous_attributes.external_reference_id (Optional): string or null. Caller-owned
     * identifier for this resource in an external system.
     * previous_attributes.external_reference_id.anyOf[1] (Value): string. Caller-owned identifier
     * for this resource in an external system. maxLength: 255. Example: "warehouse-1842".
     * previous_attributes.external_reference_id.anyOf[2] (Value): null.
     * previous_attributes.merchant_id (Optional): string or null. Identifier of the merchant that
     * owns this modifier set. previous_attributes.merchant_id.anyOf[1] (Value): string. Identifier
     * of the merchant that owns this modifier set. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     * previous_attributes.merchant_id.anyOf[2] (Value): null. previous_attributes.metadata
     * (Optional): {@link MetadataMap} or null. Caller-owned metadata. Values can't be empty
     * strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be
     * written through the public API. previous_attributes.metadata.anyOf[1] (Value): {@link
     * MetadataMap}. previous_attributes.metadata.anyOf[2] (Value): null.
     * previous_attributes.modifier_groups (Optional): Array of {@link
     * ModifierSetGroupPreviousAttributes} or null. Ordered group entries in this set, including
     * the full content of reusable groups and groups owned by the set.
     * previous_attributes.modifier_groups.anyOf[1] (Value): Array of {@link
     * ModifierSetGroupPreviousAttributes}. Ordered group entries in this set, including the full
     * content of reusable groups and groups owned by the set.
     * previous_attributes.modifier_groups.anyOf[1][] (Value): {@link
     * ModifierSetGroupPreviousAttributes}. previous_attributes.modifier_groups.anyOf[2] (Value):
     * null. previous_attributes.modifier_set_id (Optional): string or null. Stable identifier of
     * the modifier set assigned to catalog items. previous_attributes.modifier_set_id.anyOf[1]
     * (Value): string. Stable identifier of the modifier set assigned to catalog items. Example:
     * "ms_01KEZF7C007EWZVVFAWVJJM8NR". previous_attributes.modifier_set_id.anyOf[2] (Value): null.
     * previous_attributes.name (Optional): string or null. Name used to identify this modifier
     * set. previous_attributes.name.anyOf[1] (Value): string. Name used to identify this modifier
     * set. previous_attributes.name.anyOf[2] (Value): null. previous_attributes.status (Optional):
     * string or null. Lifecycle status of the modifier set. Only active sets can be offered to
     * buyers; archived sets remain readable and cannot be edited. Value enum: "active",
     * "inactive", "archived". previous_attributes.status.anyOf[1] (Value): string. Lifecycle
     * status of the modifier set. Only active sets can be offered to buyers; archived sets remain
     * readable and cannot be edited. Value enum: "active", "inactive", "archived".
     * previous_attributes.status.anyOf[2] (Value): null. previous_attributes.updated_at
     * (Optional): string or null. When the modifier set or any group it contains last changed, as
     * an RFC3339 timestamp. previous_attributes.updated_at.anyOf[1] (Value): string. When the
     * modifier set or any group it contains last changed, as an RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.updated_at.anyOf[2] (Value):
     * null. previous_attributes.version (Optional): integer or null. Version of the modifier set,
     * including the groups it contains. previous_attributes.version.anyOf[1] (Value): integer.
     * Version of the modifier set, including the groups it contains. Format: uint64. minimum: 1.
     * previous_attributes.version.anyOf[2] (Value): null.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * created_at (Optional): string. When the modifier set was created, as an RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". external_reference_id
         * (Optional): string. Caller-owned identifier for this resource in an external system.
         * maxLength: 255. Example: "warehouse-1842". merchant_id (Optional): string. Identifier of
         * the merchant that owns this modifier set. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
         * metadata (Optional): {@link MetadataMap}. Caller-owned metadata. Values can't be empty
         * strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot
         * be written through the public API. Caller-owned key-value data stored on a resource.
         * Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the
         * limits on MetadataInput and MetadataPatchInput; maps written before those limits may not
         * satisfy them. modifier_groups (Required): Array of {@link ModifierSetGroup}. Ordered
         * group entries in this set, including the full content of reusable groups and groups
         * owned by the set. modifier_groups[] (Value): {@link ModifierSetGroup}. A modifier group
         * as it appears in a modifier set, with its selection limits, display options, and
         * per-modifier overrides. modifier_set_id (Required): string. Stable identifier of the
         * modifier set assigned to catalog items. Example: "ms_01KEZF7C007EWZVVFAWVJJM8NR". name
         * (Required): string. Name used to identify this modifier set. status (Required): string.
         * Lifecycle status of the modifier set. Only active sets can be offered to buyers;
         * archived sets remain readable and cannot be edited. Value enum: "active", "inactive",
         * "archived". updated_at (Optional): string. When the modifier set or any group it
         * contains last changed, as an RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". version (Required): integer. Version of the modifier set,
         * including the groups it contains. Format: uint64. minimum: 1.
         */
        "object": {
            /**
             * When the modifier set was created, as an RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z".
             */
            "created_at"?: string;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Identifier of the merchant that owns this modifier set. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id"?: string;
            /**
             * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are
             * reserved for Flint, are not returned, and cannot be written through the public API.
             * Caller-owned key-value data stored on a resource. Keys starting with flint_ are
             * reserved for Flint and are not returned. Writes follow the limits on MetadataInput
             * and MetadataPatchInput; maps written before those limits may not satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * Ordered group entries in this set, including the full content of reusable groups and
             * groups owned by the set. [] (Value): {@link ModifierSetGroup}. A modifier group as
             * it appears in a modifier set, with its selection limits, display options, and
             * per-modifier overrides.
             */
            "modifier_groups": Array<ModifierSetGroup>;
            /**
             * Stable identifier of the modifier set assigned to catalog items. Example:
             * "ms_01KEZF7C007EWZVVFAWVJJM8NR".
             */
            "modifier_set_id": string;
            /** Name used to identify this modifier set. */
            "name": string;
            /**
             * Lifecycle status of the modifier set. Only active sets can be offered to buyers;
             * archived sets remain readable and cannot be edited. Value enum: "active",
             * "inactive", "archived".
             */
            "status": "active" | "inactive" | "archived" | (string & {});
            /**
             * When the modifier set or any group it contains last changed, as an RFC3339
             * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "updated_at"?: string;
            /**
             * Version of the modifier set, including the groups it contains. Format: uint64.
             * minimum: 1.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. created_at (Optional): string or null. When the
         * modifier set was created, as an RFC3339 timestamp. created_at.anyOf[1] (Value): string.
         * When the modifier set was created, as an RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". created_at.anyOf[2] (Value): null. external_reference_id
         * (Optional): string or null. Caller-owned identifier for this resource in an external
         * system. external_reference_id.anyOf[1] (Value): string. Caller-owned identifier for this
         * resource in an external system. maxLength: 255. Example: "warehouse-1842".
         * external_reference_id.anyOf[2] (Value): null. merchant_id (Optional): string or null.
         * Identifier of the merchant that owns this modifier set. merchant_id.anyOf[1] (Value):
         * string. Identifier of the merchant that owns this modifier set. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". merchant_id.anyOf[2] (Value): null. metadata
         * (Optional): {@link MetadataMap} or null. Caller-owned metadata. Values can't be empty
         * strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot
         * be written through the public API. metadata.anyOf[1] (Value): {@link MetadataMap}.
         * metadata.anyOf[2] (Value): null. modifier_groups (Optional): Array of {@link
         * ModifierSetGroupPreviousAttributes} or null. Ordered group entries in this set,
         * including the full content of reusable groups and groups owned by the set.
         * modifier_groups.anyOf[1] (Value): Array of {@link ModifierSetGroupPreviousAttributes}.
         * Ordered group entries in this set, including the full content of reusable groups and
         * groups owned by the set. modifier_groups.anyOf[1][] (Value): {@link
         * ModifierSetGroupPreviousAttributes}. modifier_groups.anyOf[2] (Value): null.
         * modifier_set_id (Optional): string or null. Stable identifier of the modifier set
         * assigned to catalog items. modifier_set_id.anyOf[1] (Value): string. Stable identifier
         * of the modifier set assigned to catalog items. Example: "ms_01KEZF7C007EWZVVFAWVJJM8NR".
         * modifier_set_id.anyOf[2] (Value): null. name (Optional): string or null. Name used to
         * identify this modifier set. name.anyOf[1] (Value): string. Name used to identify this
         * modifier set. name.anyOf[2] (Value): null. status (Optional): string or null. Lifecycle
         * status of the modifier set. Only active sets can be offered to buyers; archived sets
         * remain readable and cannot be edited. Value enum: "active", "inactive", "archived".
         * status.anyOf[1] (Value): string. Lifecycle status of the modifier set. Only active sets
         * can be offered to buyers; archived sets remain readable and cannot be edited. Value
         * enum: "active", "inactive", "archived". status.anyOf[2] (Value): null. updated_at
         * (Optional): string or null. When the modifier set or any group it contains last changed,
         * as an RFC3339 timestamp. updated_at.anyOf[1] (Value): string. When the modifier set or
         * any group it contains last changed, as an RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". updated_at.anyOf[2] (Value): null. version (Optional): integer
         * or null. Version of the modifier set, including the groups it contains. version.anyOf[1]
         * (Value): integer. Version of the modifier set, including the groups it contains. Format:
         * uint64. minimum: 1. version.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * When the modifier set was created, as an RFC3339 timestamp. anyOf[1] (Value):
             * string. When the modifier set was created, as an RFC3339 timestamp. Format:
             * date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * Caller-owned identifier for this resource in an external system. anyOf[1] (Value):
             * string. Caller-owned identifier for this resource in an external system. maxLength:
             * 255. Example: "warehouse-1842". anyOf[2] (Value): null.
             */
            "external_reference_id"?: ((string) | (null));
            /**
             * Identifier of the merchant that owns this modifier set. anyOf[1] (Value): string.
             * Identifier of the merchant that owns this modifier set. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". anyOf[2] (Value): null.
             */
            "merchant_id"?: ((string) | (null));
            /**
             * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are
             * reserved for Flint, are not returned, and cannot be written through the public API.
             * anyOf[1] (Value): {@link MetadataMap}. anyOf[2] (Value): null.
             */
            "metadata"?: ((MetadataMap) | (null));
            /**
             * Ordered group entries in this set, including the full content of reusable groups and
             * groups owned by the set. anyOf[1] (Value): Array of {@link
             * ModifierSetGroupPreviousAttributes}. Ordered group entries in this set, including
             * the full content of reusable groups and groups owned by the set. anyOf[1][] (Value):
             * {@link ModifierSetGroupPreviousAttributes}. anyOf[2] (Value): null.
             */
            "modifier_groups"?: ((Array<ModifierSetGroupPreviousAttributes>) | (null));
            /**
             * Stable identifier of the modifier set assigned to catalog items. anyOf[1] (Value):
             * string. Stable identifier of the modifier set assigned to catalog items. Example:
             * "ms_01KEZF7C007EWZVVFAWVJJM8NR". anyOf[2] (Value): null.
             */
            "modifier_set_id"?: ((string) | (null));
            /**
             * Name used to identify this modifier set. anyOf[1] (Value): string. Name used to
             * identify this modifier set. anyOf[2] (Value): null.
             */
            "name"?: ((string) | (null));
            /**
             * Lifecycle status of the modifier set. Only active sets can be offered to buyers;
             * archived sets remain readable and cannot be edited. Value enum: "active",
             * "inactive", "archived". anyOf[1] (Value): string. Lifecycle status of the modifier
             * set. Only active sets can be offered to buyers; archived sets remain readable and
             * cannot be edited. Value enum: "active", "inactive", "archived". anyOf[2] (Value):
             * null.
             */
            "status"?: (("active" | "inactive" | "archived" | (string & {})) | (null));
            /**
             * When the modifier set or any group it contains last changed, as an RFC3339
             * timestamp. anyOf[1] (Value): string. When the modifier set or any group it contains
             * last changed, as an RFC3339 timestamp. Format: date-time. Example:
             * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * Version of the modifier set, including the groups it contains. anyOf[1] (Value):
             * integer. Version of the modifier set, including the groups it contains. Format:
             * uint64. minimum: 1. anyOf[2] (Value): null.
             */
            "version"?: ((number) | (null));
        });
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "modifier_set.updated". */
    "event_type"?: "modifier_set.updated";
});
export type ModifierSetsCreateParams = (InputValue<CreateModifierSetRequestInput>)
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
export type ModifierSetsDeleteParams = {
    /**
     * Optional modifier set version last read by the caller. Format: uint64. minimum: 1. maximum:
     * 9007199254740991.
     */
    "expected_version"?: InputValue<number>;
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
export type ModifierSetsGetParams = DisputesAcceptParams;
export type ModifierSetsListParams = {
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
     * Filter by status. Omitted, the list leaves out archived rows; name archived to include them.
     * Values are trimmed and deduplicated in first-seen order; empty or unknown entries are
     * rejected. Values within this filter are ORed; separate filters are ANDed. [] enum: "active",
     * "inactive", "archived". Value enum: "active", "inactive", "archived". anyOf[1] (Value):
     * Array of string. minItems: 1. [] enum: "active", "inactive", "archived". anyOf[1][] (Value):
     * string. Value enum: "active", "inactive", "archived". anyOf[2] (Value): string. Value enum:
     * "active", "inactive", "archived".
     */
    "status"?: InputValue<("active" | "inactive" | "archived") | readonly ("active" | "inactive" | "archived")[]>;
    /**
     * Exact-match filter on the caller-owned external reference ID. minLength: 1. maxLength: 255.
     * Example: "warehouse-1842".
     */
    "external_reference_id"?: InputValue<string>;
    /**
     * Search across modifier set ID, external reference ID, and name. Text fields match any part
     * of the value, and %, _ and \ are ordinary characters, not wildcards. IDs match from the
     * start and need the type prefix, such as ms_01.
     */
    "query"?: InputValue<string>;
    /**
     * Field to sort by. Defaults to created_at; ties are broken by modifier_set_id. Default:
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
export type ModifierSetsUpdateParams = (InputValue<UpdateModifierSetRequestInput>)
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
/**
 * Why a money movement action is blocked, with an error code, a message, next steps, and who can
 * resolve it.
 */
export type MoneyMovementBlockedReason = {
    /** Code of the error the blocked action would return. */
    "code": string;
    /** Why the action is blocked. */
    "message"?: string;
    /** What to do to unblock the action. */
    "next_steps"?: string;
    /** The request field the block concerns. */
    "param"?: string;
    /** Who can resolve the block. Value enum: "merchant", "flint", "integrator", "buyer". */
    "resolution_owner"?: "merchant" | "flint" | "integrator" | "buyer" | (string & {});
    /** Whether trying the action again after the block clears can succeed. */
    "retryable"?: boolean;
};
export type MoneyMovementBlockedReasonPreviousAttributes = {
    /**
     * Code of the error the blocked action would return. anyOf[1] (Value): string. Code of the
     * error the blocked action would return. anyOf[2] (Value): null.
     */
    "code"?: ((string) | (null));
    /**
     * Why the action is blocked. anyOf[1] (Value): string. Why the action is blocked. anyOf[2]
     * (Value): null.
     */
    "message"?: ((string) | (null));
    /**
     * What to do to unblock the action. anyOf[1] (Value): string. What to do to unblock the
     * action. anyOf[2] (Value): null.
     */
    "next_steps"?: ((string) | (null));
    /**
     * The request field the block concerns. anyOf[1] (Value): string. The request field the block
     * concerns. anyOf[2] (Value): null.
     */
    "param"?: ((string) | (null));
    /**
     * Who can resolve the block. Value enum: "merchant", "flint", "integrator", "buyer". anyOf[1]
     * (Value): string. Who can resolve the block. Value enum: "merchant", "flint", "integrator",
     * "buyer". anyOf[2] (Value): null.
     */
    "resolution_owner"?: (("merchant" | "flint" | "integrator" | "buyer" | (string & {})) | (null));
    /**
     * Whether trying the action again after the block clears can succeed. anyOf[1] (Value):
     * boolean. Whether trying the action again after the block clears can succeed. anyOf[2]
     * (Value): null.
     */
    "retryable"?: ((boolean) | (null));
};
/** How complete the history in a money movement list is and when it was last reconciled. */
export type MoneyMovementHistoryMeta = {
    /**
     * When Flint last finished reconciling this list's history with your processor. Absent until a
     * reconciliation finishes. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "latest_reconciled_at"?: string;
    /**
     * Why the history may be incomplete: backfilling while Flint is still importing older history
     * from your processor, partial when Flint has records from your processor but hasn't imported
     * its full history, and unavailable when Flint can't say, such as before any import or after
     * one fails. The list still returns every record Flint has. Value enum: "backfilling",
     * "partial", "unavailable".
     */
    "status": "backfilling" | "partial" | "unavailable" | (string & {});
};
/**
 * Response metadata for money movement lists, including request and trace IDs, warnings, and the
 * state of the available history.
 */
export type MoneyMovementListMeta = {
    /** API version used to produce this response. */
    "api_version"?: string;
    /**
     * How complete Flint's history for this list is. history is omitted when Flint's history for
     * this list is complete. How complete the history in a money movement list is and when it was
     * last reconciled.
     */
    "history"?: MoneyMovementHistoryMeta;
    /** Whether this response replays a stored result for the supplied Idempotency-Key. */
    "idempotency_replayed"?: boolean;
    /**
     * Trace identifier to include when contacting Flint about this request. Example:
     * "0123456789abcdef0123456789abcdef".
     */
    "trace_id"?: string;
    /**
     * Conditions that need attention even though the request succeeded. [] (Value): {@link
     * ResponseWarning}. A non-blocking condition reported with a response. The `code` identifies
     * the condition and `severity` says how urgent it is.
     */
    "warnings"?: Array<ResponseWarning>;
};
/** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
export type MoneyValue = {
    /**
     * Amount in the currency's minor unit, such as cents for USD. Use an integer string (decimal
     * digits), not a floating-point number. Format: int64. minimum: 0.
     */
    "amount": `${bigint}`;
    /** ISO 4217 currency code for this amount. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. */
    "currency": string;
};
/** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
export type MoneyValueInput = {
    /**
     * Amount in the currency's minor unit, such as cents for USD. Use an integer string (decimal
     * digits), not a floating-point number. Format: int64. minimum: 0.
     */
    "amount": `${bigint}` | bigint;
    /** ISO 4217 currency code for this amount. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. */
    "currency": string;
};
export type MoneyValuePreviousAttributes = {
    /**
     * Amount in the currency's minor unit, such as cents for USD. anyOf[1] (Value): integer
     * string. Amount in the currency's minor unit, such as cents for USD. Use an integer string
     * (decimal digits), not a floating-point number. Format: int64. minimum: 0. anyOf[2] (Value):
     * null.
     */
    "amount"?: ((`${bigint}`) | (null));
    /**
     * ISO 4217 currency code for this amount. anyOf[1] (Value): string. ISO 4217 currency code for
     * this amount. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. anyOf[2] (Value): null.
     */
    "currency"?: ((string) | (null));
};
/**
 * A follow-up action. When target_resource is present, send its resource_id in the target request
 * field named {resource_type}_id.
 */
export type NextAction = {
    /**
     * Action to take next. Use its target resource and required_fields to prepare the request.
     * Value enum: "add_line_items", "cancel_order_edit", "cancel_payment_intent",
     * "capture_payment_intent", "close_checkout_session", "close_order", "collect_invoice",
     * "complete_gift_card_challenge", "confirm_payment_intent",
     * "create_checkout_session_customer_verification", "create_delivery_selection",
     * "create_dispute_response_session", "create_merchant_account_session", "create_refund",
     * "create_subscription_payment_retry", "get_api_key", "get_bundle", "get_category",
     * "get_checkout_session", "get_credit_note", "get_custom_domain", "get_customer",
     * "get_customer_address", "get_customer_deletion_request",
     * "get_customer_email_change_request", "get_customer_tax_exemption",
     * "get_customer_verification", "get_delivery_location_set", "get_delivery_method",
     * "get_delivery_profile", "get_delivery_rate_callback", "get_delivery_selection",
     * "get_delivery_zone", "get_device", "get_dispute", "get_file", "get_gift_card",
     * "get_gift_card_notification", "get_gift_card_redemption", "get_inventory_count",
     * "get_inventory_item", "get_inventory_level", "get_inventory_reservation",
     * "get_inventory_transfer", "get_invoice", "get_invoice_manual_payment",
     * "get_invoice_payment_term", "get_license_key", "get_license_key_pool", "get_location",
     * "get_me", "get_me_address", "get_me_email_preferences", "get_me_gift_card",
     * "get_me_payment_method", "get_me_return", "get_me_subscription", "get_merchant",
     * "get_merchant_signup", "get_modifier_group", "get_modifier_set", "get_onboarding_state",
     * "get_operation", "get_order", "get_order_edit", "get_order_payment_attempt",
     * "get_partner_app", "get_partner_app_credential", "get_partner_app_install",
     * "get_payment_intent", "get_payment_link", "get_payment_link_public", "get_payment_method",
     * "get_payment_method_domain", "get_payment_review", "get_payout", "get_payout_destination",
     * "get_payout_settings", "get_price_list", "get_price_list_price", "get_product",
     * "get_product_variant", "get_promotion", "get_promotion_code", "get_reader", "get_refund",
     * "get_return", "get_return_line_item", "get_return_policy", "get_return_resolution",
     * "get_risk_list", "get_risk_list_item", "get_risk_rule", "get_sandbox", "get_settings",
     * "get_shipment", "get_subscription", "get_subscription_offer", "get_subscription_plan",
     * "get_tax_calculation_callback", "get_tax_connection", "get_tax_registration",
     * "get_test_clock", "get_ticket", "get_webhook_delivery", "get_webhook_endpoint",
     * "get_workload_identity", "issue_developer_sandbox_test_key", "list_credit_note_allocations",
     * "list_credit_notes", "list_fulfillments", "list_gift_card_funding_dispositions",
     * "list_gift_card_loads", "list_gift_card_redemptions", "list_gift_card_transactions",
     * "list_gift_cards", "list_inventory_counts", "list_inventory_movements",
     * "list_inventory_receipts", "list_inventory_reservations", "list_inventory_transfers",
     * "list_invoice_activities", "list_invoice_late_fees", "list_invoice_manual_payments",
     * "list_invoice_payment_attempts", "list_invoices", "list_license_key_pool_keys",
     * "list_me_gift_cards", "list_me_remembered_buyers", "list_me_returns",
     * "list_me_subscription_payment_retries", "list_merchant_partner_app_installs",
     * "list_order_charges", "list_order_edits", "list_order_line_items",
     * "list_order_payment_attempts", "list_orders", "list_package_items", "list_packages",
     * "list_payment_intent_activities", "list_payouts", "list_product_variants", "list_refunds",
     * "list_return_dispositions", "list_return_inspections", "list_return_reasons",
     * "list_return_receipts", "list_return_resolutions", "list_returns", "list_shipments",
     * "list_subscription_line_items", "list_subscription_payment_retries", "list_subscriptions",
     * "pay_order", "payment_authentication", "recreate_delivery_quote",
     * "review_merchant_readiness", "review_onboarding_state", "start_new_image_ingestion",
     * "update_checkout_session", "update_delivery_profile", "update_inventory_allocation_policy",
     * "update_invoice", "update_location", "update_order", "update_payment_link",
     * "update_settings".
     */
    "action_type": "add_line_items"
        | "cancel_order_edit"
        | "cancel_payment_intent"
        | "capture_payment_intent"
        | "close_checkout_session"
        | "close_order"
        | "collect_invoice"
        | "complete_gift_card_challenge"
        | "confirm_payment_intent"
        | "create_checkout_session_customer_verification"
        | "create_delivery_selection"
        | "create_dispute_response_session"
        | "create_merchant_account_session"
        | "create_refund"
        | "create_subscription_payment_retry"
        | "get_api_key"
        | "get_bundle"
        | "get_category"
        | "get_checkout_session"
        | "get_credit_note"
        | "get_custom_domain"
        | "get_customer"
        | "get_customer_address"
        | "get_customer_deletion_request"
        | "get_customer_email_change_request"
        | "get_customer_tax_exemption"
        | "get_customer_verification"
        | "get_delivery_location_set"
        | "get_delivery_method"
        | "get_delivery_profile"
        | "get_delivery_rate_callback"
        | "get_delivery_selection"
        | "get_delivery_zone"
        | "get_device"
        | "get_dispute"
        | "get_file"
        | "get_gift_card"
        | "get_gift_card_notification"
        | "get_gift_card_redemption"
        | "get_inventory_count"
        | "get_inventory_item"
        | "get_inventory_level"
        | "get_inventory_reservation"
        | "get_inventory_transfer"
        | "get_invoice"
        | "get_invoice_manual_payment"
        | "get_invoice_payment_term"
        | "get_license_key"
        | "get_license_key_pool"
        | "get_location"
        | "get_me"
        | "get_me_address"
        | "get_me_email_preferences"
        | "get_me_gift_card"
        | "get_me_payment_method"
        | "get_me_return"
        | "get_me_subscription"
        | "get_merchant"
        | "get_merchant_signup"
        | "get_modifier_group"
        | "get_modifier_set"
        | "get_onboarding_state"
        | "get_operation"
        | "get_order"
        | "get_order_edit"
        | "get_order_payment_attempt"
        | "get_partner_app"
        | "get_partner_app_credential"
        | "get_partner_app_install"
        | "get_payment_intent"
        | "get_payment_link"
        | "get_payment_link_public"
        | "get_payment_method"
        | "get_payment_method_domain"
        | "get_payment_review"
        | "get_payout"
        | "get_payout_destination"
        | "get_payout_settings"
        | "get_price_list"
        | "get_price_list_price"
        | "get_product"
        | "get_product_variant"
        | "get_promotion"
        | "get_promotion_code"
        | "get_reader"
        | "get_refund"
        | "get_return"
        | "get_return_line_item"
        | "get_return_policy"
        | "get_return_resolution"
        | "get_risk_list"
        | "get_risk_list_item"
        | "get_risk_rule"
        | "get_sandbox"
        | "get_settings"
        | "get_shipment"
        | "get_subscription"
        | "get_subscription_offer"
        | "get_subscription_plan"
        | "get_tax_calculation_callback"
        | "get_tax_connection"
        | "get_tax_registration"
        | "get_test_clock"
        | "get_ticket"
        | "get_webhook_delivery"
        | "get_webhook_endpoint"
        | "get_workload_identity"
        | "issue_developer_sandbox_test_key"
        | "list_credit_note_allocations"
        | "list_credit_notes"
        | "list_fulfillments"
        | "list_gift_card_funding_dispositions"
        | "list_gift_card_loads"
        | "list_gift_card_redemptions"
        | "list_gift_card_transactions"
        | "list_gift_cards"
        | "list_inventory_counts"
        | "list_inventory_movements"
        | "list_inventory_receipts"
        | "list_inventory_reservations"
        | "list_inventory_transfers"
        | "list_invoice_activities"
        | "list_invoice_late_fees"
        | "list_invoice_manual_payments"
        | "list_invoice_payment_attempts"
        | "list_invoices"
        | "list_license_key_pool_keys"
        | "list_me_gift_cards"
        | "list_me_remembered_buyers"
        | "list_me_returns"
        | "list_me_subscription_payment_retries"
        | "list_merchant_partner_app_installs"
        | "list_order_charges"
        | "list_order_edits"
        | "list_order_line_items"
        | "list_order_payment_attempts"
        | "list_orders"
        | "list_package_items"
        | "list_packages"
        | "list_payment_intent_activities"
        | "list_payouts"
        | "list_product_variants"
        | "list_refunds"
        | "list_return_dispositions"
        | "list_return_inspections"
        | "list_return_reasons"
        | "list_return_receipts"
        | "list_return_resolutions"
        | "list_returns"
        | "list_shipments"
        | "list_subscription_line_items"
        | "list_subscription_payment_retries"
        | "list_subscriptions"
        | "pay_order"
        | "payment_authentication"
        | "recreate_delivery_quote"
        | "review_merchant_readiness"
        | "review_onboarding_state"
        | "start_new_image_ingestion"
        | "update_checkout_session"
        | "update_delivery_profile"
        | "update_inventory_allocation_policy"
        | "update_invoice"
        | "update_location"
        | "update_order"
        | "update_payment_link"
        | "update_settings"
        | (string & {});
    /**
     * When this suggested action expires, in RFC3339 format. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "expires_at"?: string;
    /**
     * Request body to send unchanged to POST /v1/merchant-account-sessions when action_type is
     * create_merchant_account_session. When absent, GET merchant readiness and use its recommended
     * session body. Shared request body for `create_merchant_account_session` next actions in
     * readiness, onboarding, errors, and warnings. Send unchanged to POST
     * /v1/merchant-account-sessions; components and collection policy describe which requirements
     * to collect.
     */
    "merchant_account_session"?: ReadinessMerchantAccountSession;
    /** HTTP method for the recovery read. Value enum: "GET". */
    "method"?: "GET" | (string & {});
    /** Machine-readable reason this action is suggested. */
    "reason_code"?: string;
    /** Explanation of why this action is suggested. */
    "reason_message"?: string;
    /** Field names that must be supplied to perform this action. [] (Value): string. */
    "required_fields"?: Array<string>;
    /**
     * API key scope required to call the public endpoint in url, when the action points at another
     * Flint API endpoint. Value enum: "accounts.api_keys.read", "accounts.api_keys.write",
     * "accounts.devices.read", "accounts.devices.write", "accounts.workload_identities.read",
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
    "required_scope"?: "accounts.api_keys.read"
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
        | (string & {});
    /** Whether a person must approve the action before it is performed. */
    "requires_human_confirmation"?: boolean;
    /** Suggested wait before performing the action, in milliseconds. Format: int32. */
    "suggested_delay_milliseconds"?: number;
    /**
     * Resource whose ID to send in the target request field named {resource_type}_id when url
     * cannot carry the target. A reference to another resource by `resource_type` and
     * `resource_id`.
     */
    "target_resource"?: ResourceReference;
    /** Public endpoint or launch URL for this remediation action, when applicable. */
    "url"?: string;
};
export type NextActionPreviousAttributes = {
    /**
     * Action to take next. Use its target resource and required_fields to prepare the request.
     * Value enum: "add_line_items", "cancel_order_edit", "cancel_payment_intent",
     * "capture_payment_intent", "close_checkout_session", "close_order", "collect_invoice",
     * "complete_gift_card_challenge", "confirm_payment_intent",
     * "create_checkout_session_customer_verification", "create_delivery_selection",
     * "create_dispute_response_session", "create_merchant_account_session", "create_refund",
     * "create_subscription_payment_retry", "get_api_key", "get_bundle", "get_category",
     * "get_checkout_session", "get_credit_note", "get_custom_domain", "get_customer",
     * "get_customer_address", "get_customer_deletion_request",
     * "get_customer_email_change_request", "get_customer_tax_exemption",
     * "get_customer_verification", "get_delivery_location_set", "get_delivery_method",
     * "get_delivery_profile", "get_delivery_rate_callback", "get_delivery_selection",
     * "get_delivery_zone", "get_device", "get_dispute", "get_file", "get_gift_card",
     * "get_gift_card_notification", "get_gift_card_redemption", "get_inventory_count",
     * "get_inventory_item", "get_inventory_level", "get_inventory_reservation",
     * "get_inventory_transfer", "get_invoice", "get_invoice_manual_payment",
     * "get_invoice_payment_term", "get_license_key", "get_license_key_pool", "get_location",
     * "get_me", "get_me_address", "get_me_email_preferences", "get_me_gift_card",
     * "get_me_payment_method", "get_me_return", "get_me_subscription", "get_merchant",
     * "get_merchant_signup", "get_modifier_group", "get_modifier_set", "get_onboarding_state",
     * "get_operation", "get_order", "get_order_edit", "get_order_payment_attempt",
     * "get_partner_app", "get_partner_app_credential", "get_partner_app_install",
     * "get_payment_intent", "get_payment_link", "get_payment_link_public", "get_payment_method",
     * "get_payment_method_domain", "get_payment_review", "get_payout", "get_payout_destination",
     * "get_payout_settings", "get_price_list", "get_price_list_price", "get_product",
     * "get_product_variant", "get_promotion", "get_promotion_code", "get_reader", "get_refund",
     * "get_return", "get_return_line_item", "get_return_policy", "get_return_resolution",
     * "get_risk_list", "get_risk_list_item", "get_risk_rule", "get_sandbox", "get_settings",
     * "get_shipment", "get_subscription", "get_subscription_offer", "get_subscription_plan",
     * "get_tax_calculation_callback", "get_tax_connection", "get_tax_registration",
     * "get_test_clock", "get_ticket", "get_webhook_delivery", "get_webhook_endpoint",
     * "get_workload_identity", "issue_developer_sandbox_test_key", "list_credit_note_allocations",
     * "list_credit_notes", "list_fulfillments", "list_gift_card_funding_dispositions",
     * "list_gift_card_loads", "list_gift_card_redemptions", "list_gift_card_transactions",
     * "list_gift_cards", "list_inventory_counts", "list_inventory_movements",
     * "list_inventory_receipts", "list_inventory_reservations", "list_inventory_transfers",
     * "list_invoice_activities", "list_invoice_late_fees", "list_invoice_manual_payments",
     * "list_invoice_payment_attempts", "list_invoices", "list_license_key_pool_keys",
     * "list_me_gift_cards", "list_me_remembered_buyers", "list_me_returns",
     * "list_me_subscription_payment_retries", "list_merchant_partner_app_installs",
     * "list_order_charges", "list_order_edits", "list_order_line_items",
     * "list_order_payment_attempts", "list_orders", "list_package_items", "list_packages",
     * "list_payment_intent_activities", "list_payouts", "list_product_variants", "list_refunds",
     * "list_return_dispositions", "list_return_inspections", "list_return_reasons",
     * "list_return_receipts", "list_return_resolutions", "list_returns", "list_shipments",
     * "list_subscription_line_items", "list_subscription_payment_retries", "list_subscriptions",
     * "pay_order", "payment_authentication", "recreate_delivery_quote",
     * "review_merchant_readiness", "review_onboarding_state", "start_new_image_ingestion",
     * "update_checkout_session", "update_delivery_profile", "update_inventory_allocation_policy",
     * "update_invoice", "update_location", "update_order", "update_payment_link",
     * "update_settings". anyOf[1] (Value): string. Action to take next. Use its target resource
     * and required_fields to prepare the request. Value enum: "add_line_items",
     * "cancel_order_edit", "cancel_payment_intent", "capture_payment_intent",
     * "close_checkout_session", "close_order", "collect_invoice", "complete_gift_card_challenge",
     * "confirm_payment_intent", "create_checkout_session_customer_verification",
     * "create_delivery_selection", "create_dispute_response_session",
     * "create_merchant_account_session", "create_refund", "create_subscription_payment_retry",
     * "get_api_key", "get_bundle", "get_category", "get_checkout_session", "get_credit_note",
     * "get_custom_domain", "get_customer", "get_customer_address",
     * "get_customer_deletion_request", "get_customer_email_change_request",
     * "get_customer_tax_exemption", "get_customer_verification", "get_delivery_location_set",
     * "get_delivery_method", "get_delivery_profile", "get_delivery_rate_callback",
     * "get_delivery_selection", "get_delivery_zone", "get_device", "get_dispute", "get_file",
     * "get_gift_card", "get_gift_card_notification", "get_gift_card_redemption",
     * "get_inventory_count", "get_inventory_item", "get_inventory_level",
     * "get_inventory_reservation", "get_inventory_transfer", "get_invoice",
     * "get_invoice_manual_payment", "get_invoice_payment_term", "get_license_key",
     * "get_license_key_pool", "get_location", "get_me", "get_me_address",
     * "get_me_email_preferences", "get_me_gift_card", "get_me_payment_method", "get_me_return",
     * "get_me_subscription", "get_merchant", "get_merchant_signup", "get_modifier_group",
     * "get_modifier_set", "get_onboarding_state", "get_operation", "get_order", "get_order_edit",
     * "get_order_payment_attempt", "get_partner_app", "get_partner_app_credential",
     * "get_partner_app_install", "get_payment_intent", "get_payment_link",
     * "get_payment_link_public", "get_payment_method", "get_payment_method_domain",
     * "get_payment_review", "get_payout", "get_payout_destination", "get_payout_settings",
     * "get_price_list", "get_price_list_price", "get_product", "get_product_variant",
     * "get_promotion", "get_promotion_code", "get_reader", "get_refund", "get_return",
     * "get_return_line_item", "get_return_policy", "get_return_resolution", "get_risk_list",
     * "get_risk_list_item", "get_risk_rule", "get_sandbox", "get_settings", "get_shipment",
     * "get_subscription", "get_subscription_offer", "get_subscription_plan",
     * "get_tax_calculation_callback", "get_tax_connection", "get_tax_registration",
     * "get_test_clock", "get_ticket", "get_webhook_delivery", "get_webhook_endpoint",
     * "get_workload_identity", "issue_developer_sandbox_test_key", "list_credit_note_allocations",
     * "list_credit_notes", "list_fulfillments", "list_gift_card_funding_dispositions",
     * "list_gift_card_loads", "list_gift_card_redemptions", "list_gift_card_transactions",
     * "list_gift_cards", "list_inventory_counts", "list_inventory_movements",
     * "list_inventory_receipts", "list_inventory_reservations", "list_inventory_transfers",
     * "list_invoice_activities", "list_invoice_late_fees", "list_invoice_manual_payments",
     * "list_invoice_payment_attempts", "list_invoices", "list_license_key_pool_keys",
     * "list_me_gift_cards", "list_me_remembered_buyers", "list_me_returns",
     * "list_me_subscription_payment_retries", "list_merchant_partner_app_installs",
     * "list_order_charges", "list_order_edits", "list_order_line_items",
     * "list_order_payment_attempts", "list_orders", "list_package_items", "list_packages",
     * "list_payment_intent_activities", "list_payouts", "list_product_variants", "list_refunds",
     * "list_return_dispositions", "list_return_inspections", "list_return_reasons",
     * "list_return_receipts", "list_return_resolutions", "list_returns", "list_shipments",
     * "list_subscription_line_items", "list_subscription_payment_retries", "list_subscriptions",
     * "pay_order", "payment_authentication", "recreate_delivery_quote",
     * "review_merchant_readiness", "review_onboarding_state", "start_new_image_ingestion",
     * "update_checkout_session", "update_delivery_profile", "update_inventory_allocation_policy",
     * "update_invoice", "update_location", "update_order", "update_payment_link",
     * "update_settings". anyOf[2] (Value): null.
     */
    "action_type"?: (("add_line_items"
        | "cancel_order_edit"
        | "cancel_payment_intent"
        | "capture_payment_intent"
        | "close_checkout_session"
        | "close_order"
        | "collect_invoice"
        | "complete_gift_card_challenge"
        | "confirm_payment_intent"
        | "create_checkout_session_customer_verification"
        | "create_delivery_selection"
        | "create_dispute_response_session"
        | "create_merchant_account_session"
        | "create_refund"
        | "create_subscription_payment_retry"
        | "get_api_key"
        | "get_bundle"
        | "get_category"
        | "get_checkout_session"
        | "get_credit_note"
        | "get_custom_domain"
        | "get_customer"
        | "get_customer_address"
        | "get_customer_deletion_request"
        | "get_customer_email_change_request"
        | "get_customer_tax_exemption"
        | "get_customer_verification"
        | "get_delivery_location_set"
        | "get_delivery_method"
        | "get_delivery_profile"
        | "get_delivery_rate_callback"
        | "get_delivery_selection"
        | "get_delivery_zone"
        | "get_device"
        | "get_dispute"
        | "get_file"
        | "get_gift_card"
        | "get_gift_card_notification"
        | "get_gift_card_redemption"
        | "get_inventory_count"
        | "get_inventory_item"
        | "get_inventory_level"
        | "get_inventory_reservation"
        | "get_inventory_transfer"
        | "get_invoice"
        | "get_invoice_manual_payment"
        | "get_invoice_payment_term"
        | "get_license_key"
        | "get_license_key_pool"
        | "get_location"
        | "get_me"
        | "get_me_address"
        | "get_me_email_preferences"
        | "get_me_gift_card"
        | "get_me_payment_method"
        | "get_me_return"
        | "get_me_subscription"
        | "get_merchant"
        | "get_merchant_signup"
        | "get_modifier_group"
        | "get_modifier_set"
        | "get_onboarding_state"
        | "get_operation"
        | "get_order"
        | "get_order_edit"
        | "get_order_payment_attempt"
        | "get_partner_app"
        | "get_partner_app_credential"
        | "get_partner_app_install"
        | "get_payment_intent"
        | "get_payment_link"
        | "get_payment_link_public"
        | "get_payment_method"
        | "get_payment_method_domain"
        | "get_payment_review"
        | "get_payout"
        | "get_payout_destination"
        | "get_payout_settings"
        | "get_price_list"
        | "get_price_list_price"
        | "get_product"
        | "get_product_variant"
        | "get_promotion"
        | "get_promotion_code"
        | "get_reader"
        | "get_refund"
        | "get_return"
        | "get_return_line_item"
        | "get_return_policy"
        | "get_return_resolution"
        | "get_risk_list"
        | "get_risk_list_item"
        | "get_risk_rule"
        | "get_sandbox"
        | "get_settings"
        | "get_shipment"
        | "get_subscription"
        | "get_subscription_offer"
        | "get_subscription_plan"
        | "get_tax_calculation_callback"
        | "get_tax_connection"
        | "get_tax_registration"
        | "get_test_clock"
        | "get_ticket"
        | "get_webhook_delivery"
        | "get_webhook_endpoint"
        | "get_workload_identity"
        | "issue_developer_sandbox_test_key"
        | "list_credit_note_allocations"
        | "list_credit_notes"
        | "list_fulfillments"
        | "list_gift_card_funding_dispositions"
        | "list_gift_card_loads"
        | "list_gift_card_redemptions"
        | "list_gift_card_transactions"
        | "list_gift_cards"
        | "list_inventory_counts"
        | "list_inventory_movements"
        | "list_inventory_receipts"
        | "list_inventory_reservations"
        | "list_inventory_transfers"
        | "list_invoice_activities"
        | "list_invoice_late_fees"
        | "list_invoice_manual_payments"
        | "list_invoice_payment_attempts"
        | "list_invoices"
        | "list_license_key_pool_keys"
        | "list_me_gift_cards"
        | "list_me_remembered_buyers"
        | "list_me_returns"
        | "list_me_subscription_payment_retries"
        | "list_merchant_partner_app_installs"
        | "list_order_charges"
        | "list_order_edits"
        | "list_order_line_items"
        | "list_order_payment_attempts"
        | "list_orders"
        | "list_package_items"
        | "list_packages"
        | "list_payment_intent_activities"
        | "list_payouts"
        | "list_product_variants"
        | "list_refunds"
        | "list_return_dispositions"
        | "list_return_inspections"
        | "list_return_reasons"
        | "list_return_receipts"
        | "list_return_resolutions"
        | "list_returns"
        | "list_shipments"
        | "list_subscription_line_items"
        | "list_subscription_payment_retries"
        | "list_subscriptions"
        | "pay_order"
        | "payment_authentication"
        | "recreate_delivery_quote"
        | "review_merchant_readiness"
        | "review_onboarding_state"
        | "start_new_image_ingestion"
        | "update_checkout_session"
        | "update_delivery_profile"
        | "update_inventory_allocation_policy"
        | "update_invoice"
        | "update_location"
        | "update_order"
        | "update_payment_link"
        | "update_settings"
        | (string & {}))
        | (null));
    /**
     * When this suggested action expires, in RFC3339 format. anyOf[1] (Value): string. When this
     * suggested action expires, in RFC3339 format. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     */
    "expires_at"?: ((string) | (null));
    /**
     * Request body to send unchanged to POST /v1/merchant-account-sessions when action_type is
     * create_merchant_account_session. When absent, GET merchant readiness and use its recommended
     * session body. anyOf[1] (Value): {@link ReadinessMerchantAccountSessionPreviousAttributes}.
     * anyOf[2] (Value): null.
     */
    "merchant_account_session"?: ((ReadinessMerchantAccountSessionPreviousAttributes) | (null));
    /**
     * HTTP method for the recovery read. Value enum: "GET". anyOf[1] (Value): string. HTTP method
     * for the recovery read. Value enum: "GET". anyOf[2] (Value): null.
     */
    "method"?: (("GET" | (string & {})) | (null));
    /**
     * Machine-readable reason this action is suggested. anyOf[1] (Value): string. Machine-readable
     * reason this action is suggested. anyOf[2] (Value): null.
     */
    "reason_code"?: ((string) | (null));
    /**
     * Explanation of why this action is suggested. anyOf[1] (Value): string. Explanation of why
     * this action is suggested. anyOf[2] (Value): null.
     */
    "reason_message"?: ((string) | (null));
    /**
     * Field names that must be supplied to perform this action. anyOf[1] (Value): Array of string.
     * Field names that must be supplied to perform this action. anyOf[1][] (Value): string.
     * anyOf[2] (Value): null.
     */
    "required_fields"?: ((Array<string>) | (null));
    /**
     * API key scope required to call the public endpoint in url, when the action points at another
     * Flint API endpoint. Value enum: "accounts.api_keys.read", "accounts.api_keys.write",
     * "accounts.devices.read", "accounts.devices.write", "accounts.workload_identities.read",
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
     * "settings.read", "settings.write", "webhooks.read", "webhooks.write". anyOf[1] (Value):
     * string. API key scope required to call the public endpoint in url, when the action points at
     * another Flint API endpoint. Value enum: "accounts.api_keys.read", "accounts.api_keys.write",
     * "accounts.devices.read", "accounts.devices.write", "accounts.workload_identities.read",
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
     * "settings.read", "settings.write", "webhooks.read", "webhooks.write". anyOf[2] (Value):
     * null.
     */
    "required_scope"?: (("accounts.api_keys.read"
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
        | (string & {}))
        | (null));
    /**
     * Whether a person must approve the action before it is performed. anyOf[1] (Value): boolean.
     * Whether a person must approve the action before it is performed. anyOf[2] (Value): null.
     */
    "requires_human_confirmation"?: ((boolean) | (null));
    /**
     * Suggested wait before performing the action, in milliseconds. anyOf[1] (Value): integer.
     * Suggested wait before performing the action, in milliseconds. Format: int32. anyOf[2]
     * (Value): null.
     */
    "suggested_delay_milliseconds"?: ((number) | (null));
    /**
     * Resource whose ID to send in the target request field named {resource_type}_id when url
     * cannot carry the target. anyOf[1] (Value): {@link ResourceReferencePreviousAttributes}.
     * anyOf[2] (Value): null.
     */
    "target_resource"?: ((ResourceReferencePreviousAttributes) | (null));
    /**
     * Public endpoint or launch URL for this remediation action, when applicable. anyOf[1]
     * (Value): string. Public endpoint or launch URL for this remediation action, when applicable.
     * anyOf[2] (Value): null.
     */
    "url"?: ((string) | (null));
};
/** The request body for: Revoke an OAuth token. */
export type OAuthRevokeRequest = ({
    /**
     * Signed RFC 7523 JWT for partner client authentication. Send client_id and
     * client_assertion_type, without HTTP Basic or client_secret. minLength: 1. maxLength: 8192.
     */
    "client_assertion"?: string;
    /**
     * Required with client_assertion for partner private_key_jwt authentication. Value enum:
     * "urn:ietf:params:oauth:client-assertion-type:jwt-bearer".
     */
    "client_assertion_type"?: "urn:ietf:params:oauth:client-assertion-type:jwt-bearer" | (string & {});
    /**
     * Partner client ID for client_secret_post, or flint-cli for the public CLI client. Example:
     * "fpc_00112233445566778899aabbccddeeff".
     */
    "client_id"?: string;
    /**
     * Partner client secret for client_secret_post. Omit when using HTTP Basic; flint-cli never
     * sends a secret.
     */
    "client_secret"?: string;
    /** Partner app token, or flint-cli access or refresh token, to revoke. */
    "token": string;
    /** Optional token lookup hint. Value enum: "refresh_token", "access_token". */
    "token_type_hint"?: "refresh_token" | "access_token" | (string & {});
});
/** The request body for: Revoke an OAuth token. */
export type OAuthRevokeRequestInput = ({
    /**
     * Signed RFC 7523 JWT for partner client authentication. Send client_id and
     * client_assertion_type, without HTTP Basic or client_secret. minLength: 1. maxLength: 8192.
     */
    "client_assertion"?: string;
    /**
     * Required with client_assertion for partner private_key_jwt authentication. Value enum:
     * "urn:ietf:params:oauth:client-assertion-type:jwt-bearer".
     */
    "client_assertion_type"?: "urn:ietf:params:oauth:client-assertion-type:jwt-bearer";
    /**
     * Partner client ID for client_secret_post, or flint-cli for the public CLI client. Example:
     * "fpc_00112233445566778899aabbccddeeff".
     */
    "client_id"?: string;
    /**
     * Partner client secret for client_secret_post. Omit when using HTTP Basic; flint-cli never
     * sends a secret.
     */
    "client_secret"?: string;
    /** Partner app token, or flint-cli access or refresh token, to revoke. */
    "token": string;
    /** Optional token lookup hint. Value enum: "refresh_token", "access_token". */
    "token_type_hint"?: "refresh_token" | "access_token";
});
/** The request body for: Exchange an OAuth token. */
export type OAuthTokenRequest = ({
    /**
     * Signed RFC 7523 JWT for partner client authentication. Send client_id and
     * client_assertion_type, without HTTP Basic or client_secret. minLength: 1. maxLength: 8192.
     */
    "client_assertion"?: string;
    /**
     * Required with client_assertion for partner private_key_jwt authentication. Value enum:
     * "urn:ietf:params:oauth:client-assertion-type:jwt-bearer".
     */
    "client_assertion_type"?: "urn:ietf:params:oauth:client-assertion-type:jwt-bearer" | (string & {});
    /**
     * Partner app client ID when using client_secret_post; flint-cli sends flint-cli. Omit when
     * HTTP Basic supplies the partner client ID. Forbidden for workload identity token exchange.
     * Example: "flint-cli".
     */
    "client_id"?: string;
    /**
     * Partner app secret for client_secret_post. Omit when using HTTP Basic. flint-cli never sends
     * a secret. Forbidden for workload identity token exchange.
     */
    "client_secret"?: string;
    /** Partner authorization code, required for authorization_code. */
    "code"?: string;
    /**
     * Partner PKCE verifier for the S256 challenge, required for authorization_code. minLength:
     * 43. maxLength: 128. pattern: ^[A-Za-z0-9\-._~]+$.
     */
    "code_verifier"?: string;
    /**
     * flint-cli only. Example:
     * "ctx_bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb".
     */
    "context_id"?: string;
    /** flint-cli device code, required for the device_code grant. */
    "device_code"?: string;
    /**
     * OAuth grant to exchange. Partner apps use client_credentials or authorization_code;
     * flint-cli uses device_code or refresh_token; workload identities use token-exchange. Value
     * enum: "authorization_code", "client_credentials", "refresh_token",
     * "urn:ietf:params:oauth:grant-type:device_code",
     * "urn:ietf:params:oauth:grant-type:token-exchange".
     */
    "grant_type": "authorization_code"
        | "client_credentials"
        | "refresh_token"
        | "urn:ietf:params:oauth:grant-type:device_code"
        | "urn:ietf:params:oauth:grant-type:token-exchange"
        | (string & {});
    /**
     * Binds the minted partner app token to this merchant, for client_credentials. Omit for an
     * app-level token that names the merchant in Flint-Merchant-Id on each request. Flint checks
     * only the ID's format here. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     */
    "merchant_id"?: string;
    /**
     * Mode of the partner app token to mint, test or live. Required for client_credentials. Each
     * token is for one mode. Value enum: "test", "live".
     */
    "mode"?: "test" | "live" | (string & {});
    /**
     * The redirect URI the authorization request used, character for character. Required for a
     * code from the consent screen. Omit it for a code from a merchant signup, which had no
     * authorization request: a signup code sent with one, or a consent-screen code sent without
     * one, returns invalid_grant.
     */
    "redirect_uri"?: string;
    /**
     * flint-cli refresh token, required for refresh_token. Partner apps don't receive refresh
     * tokens; a partner client that sends this grant gets unauthorized_client.
     */
    "refresh_token"?: string;
    /**
     * Optional requested credential type for token exchange. Only access tokens are supported.
     * Value enum: "urn:ietf:params:oauth:token-type:access_token".
     */
    "requested_token_type"?: "urn:ietf:params:oauth:token-type:access_token" | (string & {});
    /**
     * flint-cli and workload identities: optional subset of API scope names for this access token.
     * Partner apps: omit. Partner app tokens carry each install's granted permissions, and
     * client_credentials refuses scope with invalid_scope.
     */
    "scope"?: string;
    /**
     * JWT from the workload identity's external issuer. Required for token exchange. minLength: 1.
     * maxLength: 8192.
     */
    "subject_token"?: string;
    /**
     * Format of subject_token. Required for token exchange. Value enum:
     * "urn:ietf:params:oauth:token-type:jwt", "urn:ietf:params:oauth:token-type:id_token".
     */
    "subject_token_type"?: "urn:ietf:params:oauth:token-type:jwt" | "urn:ietf:params:oauth:token-type:id_token" | (string & {});
    /**
     * Configured workload identity to match against the verified subject token. Required for token
     * exchange. Example: "wid_01KEZF7C00GKCN7Y1482VY8TWP".
     */
    "workload_identity_id"?: string;
})
    & ((Exclude<OAuthTokenRequestAuthorizationCode & object, readonly unknown[]>)
    | (Exclude<OAuthTokenRequestClientCredentials & object, readonly unknown[]>)
    | (Exclude<OAuthTokenRequestRefreshToken & object, readonly unknown[]>)
    | (Exclude<OAuthTokenRequestDeviceCode & object, readonly unknown[]>)
    | (Exclude<OAuthTokenRequestTokenExchange & object, readonly unknown[]>)
    | (Record<string, unknown>));
/** The `authorization_code` variant of `OAuthTokenRequest`. */
export type OAuthTokenRequestAuthorizationCode = ({
    /**
     * Signed RFC 7523 JWT for partner client authentication. Send client_id and
     * client_assertion_type, without HTTP Basic or client_secret. minLength: 1. maxLength: 8192.
     */
    "client_assertion"?: string;
    /**
     * Required with client_assertion for partner private_key_jwt authentication. Value enum:
     * "urn:ietf:params:oauth:client-assertion-type:jwt-bearer".
     */
    "client_assertion_type"?: "urn:ietf:params:oauth:client-assertion-type:jwt-bearer" | (string & {});
    /**
     * Partner app client ID when using client_secret_post; flint-cli sends flint-cli. Omit when
     * HTTP Basic supplies the partner client ID. Forbidden for workload identity token exchange.
     * Example: "fpc_00112233445566778899aabbccddeeff".
     */
    "client_id"?: string;
    /**
     * Partner app secret for client_secret_post. Omit when using HTTP Basic. flint-cli never sends
     * a secret. Forbidden for workload identity token exchange.
     */
    "client_secret"?: string;
    /** Partner authorization code, required for authorization_code. */
    "code": string;
    /**
     * Partner PKCE verifier for the S256 challenge, required for authorization_code. minLength:
     * 43. maxLength: 128. pattern: ^[A-Za-z0-9\-._~]+$.
     */
    "code_verifier": string;
    /**
     * flint-cli only. Example:
     * "ctx_bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb".
     */
    "context_id"?: string;
    /** flint-cli device code, required for the device_code grant. */
    "device_code"?: string;
    /**
     * OAuth grant to exchange. Partner apps use client_credentials or authorization_code;
     * flint-cli uses device_code or refresh_token; workload identities use token-exchange. Value
     * enum: "authorization_code".
     */
    "grant_type": "authorization_code" | (string & {});
    /**
     * Binds the minted partner app token to this merchant, for client_credentials. Omit for an
     * app-level token that names the merchant in Flint-Merchant-Id on each request. Flint checks
     * only the ID's format here. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     */
    "merchant_id"?: string;
    /**
     * Mode of the partner app token to mint, test or live. Required for client_credentials. Each
     * token is for one mode. Value enum: "test", "live".
     */
    "mode"?: "test" | "live" | (string & {});
    /**
     * The redirect URI the authorization request used, character for character. Required for a
     * code from the consent screen. Omit it for a code from a merchant signup, which had no
     * authorization request: a signup code sent with one, or a consent-screen code sent without
     * one, returns invalid_grant.
     */
    "redirect_uri"?: string;
    /**
     * flint-cli refresh token, required for refresh_token. Partner apps don't receive refresh
     * tokens; a partner client that sends this grant gets unauthorized_client.
     */
    "refresh_token"?: string;
    /**
     * Optional requested credential type for token exchange. Only access tokens are supported.
     * Value enum: "urn:ietf:params:oauth:token-type:access_token".
     */
    "requested_token_type"?: "urn:ietf:params:oauth:token-type:access_token" | (string & {});
    /**
     * flint-cli and workload identities: optional subset of API scope names for this access token.
     * Partner apps: omit. Partner app tokens carry each install's granted permissions, and
     * client_credentials refuses scope with invalid_scope.
     */
    "scope"?: string;
    /**
     * JWT from the workload identity's external issuer. Required for token exchange. minLength: 1.
     * maxLength: 8192.
     */
    "subject_token"?: string;
    /**
     * Format of subject_token. Required for token exchange. Value enum:
     * "urn:ietf:params:oauth:token-type:jwt", "urn:ietf:params:oauth:token-type:id_token".
     */
    "subject_token_type"?: "urn:ietf:params:oauth:token-type:jwt" | "urn:ietf:params:oauth:token-type:id_token" | (string & {});
    /**
     * Configured workload identity to match against the verified subject token. Required for token
     * exchange. Example: "wid_01KEZF7C00GKCN7Y1482VY8TWP".
     */
    "workload_identity_id"?: string;
})
    & ({
    /** Value enum: "authorization_code". */
    "grant_type"?: unknown;
    /** Partner authorization code, required for authorization_code. */
    "code": string;
    /**
     * Partner PKCE verifier for the S256 challenge, required for authorization_code. minLength:
     * 43. maxLength: 128. pattern: ^[A-Za-z0-9\-._~]+$.
     */
    "code_verifier": string;
});
/** The `authorization_code` variant of `OAuthTokenRequest`. */
export type OAuthTokenRequestAuthorizationCodeInput = ({
    /**
     * Signed RFC 7523 JWT for partner client authentication. Send client_id and
     * client_assertion_type, without HTTP Basic or client_secret. minLength: 1. maxLength: 8192.
     */
    "client_assertion"?: string;
    /**
     * Required with client_assertion for partner private_key_jwt authentication. Value enum:
     * "urn:ietf:params:oauth:client-assertion-type:jwt-bearer".
     */
    "client_assertion_type"?: "urn:ietf:params:oauth:client-assertion-type:jwt-bearer";
    /**
     * Partner app client ID when using client_secret_post; flint-cli sends flint-cli. Omit when
     * HTTP Basic supplies the partner client ID. Forbidden for workload identity token exchange.
     * Example: "fpc_00112233445566778899aabbccddeeff".
     */
    "client_id"?: string;
    /**
     * Partner app secret for client_secret_post. Omit when using HTTP Basic. flint-cli never sends
     * a secret. Forbidden for workload identity token exchange.
     */
    "client_secret"?: string;
    /** Partner authorization code, required for authorization_code. */
    "code": string;
    /**
     * Partner PKCE verifier for the S256 challenge, required for authorization_code. minLength:
     * 43. maxLength: 128. pattern: ^[A-Za-z0-9\-._~]+$.
     */
    "code_verifier": string;
    /**
     * flint-cli only. Example:
     * "ctx_bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb".
     */
    "context_id"?: string;
    /** flint-cli device code, required for the device_code grant. */
    "device_code"?: string;
    /**
     * OAuth grant to exchange. Partner apps use client_credentials or authorization_code;
     * flint-cli uses device_code or refresh_token; workload identities use token-exchange. Value
     * enum: "authorization_code".
     */
    "grant_type": "authorization_code";
    /**
     * Binds the minted partner app token to this merchant, for client_credentials. Omit for an
     * app-level token that names the merchant in Flint-Merchant-Id on each request. Flint checks
     * only the ID's format here. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     */
    "merchant_id"?: string;
    /**
     * Mode of the partner app token to mint, test or live. Required for client_credentials. Each
     * token is for one mode. Value enum: "test", "live".
     */
    "mode"?: "test" | "live";
    /**
     * The redirect URI the authorization request used, character for character. Required for a
     * code from the consent screen. Omit it for a code from a merchant signup, which had no
     * authorization request: a signup code sent with one, or a consent-screen code sent without
     * one, returns invalid_grant.
     */
    "redirect_uri"?: string;
    /**
     * flint-cli refresh token, required for refresh_token. Partner apps don't receive refresh
     * tokens; a partner client that sends this grant gets unauthorized_client.
     */
    "refresh_token"?: string;
    /**
     * Optional requested credential type for token exchange. Only access tokens are supported.
     * Value enum: "urn:ietf:params:oauth:token-type:access_token".
     */
    "requested_token_type"?: "urn:ietf:params:oauth:token-type:access_token";
    /**
     * flint-cli and workload identities: optional subset of API scope names for this access token.
     * Partner apps: omit. Partner app tokens carry each install's granted permissions, and
     * client_credentials refuses scope with invalid_scope.
     */
    "scope"?: string;
    /**
     * JWT from the workload identity's external issuer. Required for token exchange. minLength: 1.
     * maxLength: 8192.
     */
    "subject_token"?: string;
    /**
     * Format of subject_token. Required for token exchange. Value enum:
     * "urn:ietf:params:oauth:token-type:jwt", "urn:ietf:params:oauth:token-type:id_token".
     */
    "subject_token_type"?: "urn:ietf:params:oauth:token-type:jwt" | "urn:ietf:params:oauth:token-type:id_token";
    /**
     * Configured workload identity to match against the verified subject token. Required for token
     * exchange. Example: "wid_01KEZF7C00GKCN7Y1482VY8TWP".
     */
    "workload_identity_id"?: string;
})
    & ({
    /** Value enum: "authorization_code". */
    "grant_type"?: ("authorization_code") & ("authorization_code");
    /** Partner authorization code, required for authorization_code. */
    "code": string;
    /**
     * Partner PKCE verifier for the S256 challenge, required for authorization_code. minLength:
     * 43. maxLength: 128. pattern: ^[A-Za-z0-9\-._~]+$.
     */
    "code_verifier": string;
});
/** The `client_credentials` variant of `OAuthTokenRequest`. */
export type OAuthTokenRequestClientCredentials = ({
    /**
     * Signed RFC 7523 JWT for partner client authentication. Send client_id and
     * client_assertion_type, without HTTP Basic or client_secret. minLength: 1. maxLength: 8192.
     */
    "client_assertion"?: string;
    /**
     * Required with client_assertion for partner private_key_jwt authentication. Value enum:
     * "urn:ietf:params:oauth:client-assertion-type:jwt-bearer".
     */
    "client_assertion_type"?: "urn:ietf:params:oauth:client-assertion-type:jwt-bearer" | (string & {});
    /**
     * Partner app client ID when using client_secret_post; flint-cli sends flint-cli. Omit when
     * HTTP Basic supplies the partner client ID. Forbidden for workload identity token exchange.
     * Example: "fpc_00112233445566778899aabbccddeeff".
     */
    "client_id"?: string;
    /**
     * Partner app secret for client_secret_post. Omit when using HTTP Basic. flint-cli never sends
     * a secret. Forbidden for workload identity token exchange.
     */
    "client_secret"?: string;
    /** Partner authorization code, required for authorization_code. */
    "code"?: string;
    /**
     * Partner PKCE verifier for the S256 challenge, required for authorization_code. minLength:
     * 43. maxLength: 128. pattern: ^[A-Za-z0-9\-._~]+$.
     */
    "code_verifier"?: string;
    /**
     * flint-cli only. Example:
     * "ctx_bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb".
     */
    "context_id"?: string;
    /** flint-cli device code, required for the device_code grant. */
    "device_code"?: string;
    /**
     * OAuth grant to exchange. Partner apps use client_credentials or authorization_code;
     * flint-cli uses device_code or refresh_token; workload identities use token-exchange. Value
     * enum: "client_credentials".
     */
    "grant_type": "client_credentials" | (string & {});
    /**
     * Binds the minted partner app token to this merchant, for client_credentials. Omit for an
     * app-level token that names the merchant in Flint-Merchant-Id on each request. Flint checks
     * only the ID's format here. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     */
    "merchant_id"?: string;
    /**
     * Mode of the partner app token to mint, test or live. Required for client_credentials. Each
     * token is for one mode. Value enum: "test", "live".
     */
    "mode": "test" | "live" | (string & {});
    /**
     * The redirect URI the authorization request used, character for character. Required for a
     * code from the consent screen. Omit it for a code from a merchant signup, which had no
     * authorization request: a signup code sent with one, or a consent-screen code sent without
     * one, returns invalid_grant.
     */
    "redirect_uri"?: string;
    /**
     * flint-cli refresh token, required for refresh_token. Partner apps don't receive refresh
     * tokens; a partner client that sends this grant gets unauthorized_client.
     */
    "refresh_token"?: string;
    /**
     * Optional requested credential type for token exchange. Only access tokens are supported.
     * Value enum: "urn:ietf:params:oauth:token-type:access_token".
     */
    "requested_token_type"?: "urn:ietf:params:oauth:token-type:access_token" | (string & {});
    /**
     * flint-cli and workload identities: optional subset of API scope names for this access token.
     * Partner apps: omit. Partner app tokens carry each install's granted permissions, and
     * client_credentials refuses scope with invalid_scope.
     */
    "scope"?: string;
    /**
     * JWT from the workload identity's external issuer. Required for token exchange. minLength: 1.
     * maxLength: 8192.
     */
    "subject_token"?: string;
    /**
     * Format of subject_token. Required for token exchange. Value enum:
     * "urn:ietf:params:oauth:token-type:jwt", "urn:ietf:params:oauth:token-type:id_token".
     */
    "subject_token_type"?: "urn:ietf:params:oauth:token-type:jwt" | "urn:ietf:params:oauth:token-type:id_token" | (string & {});
    /**
     * Configured workload identity to match against the verified subject token. Required for token
     * exchange. Example: "wid_01KEZF7C00GKCN7Y1482VY8TWP".
     */
    "workload_identity_id"?: string;
})
    & ({
    /** Value enum: "client_credentials". */
    "grant_type"?: unknown;
    /**
     * Mode of the partner app token to mint, test or live. Required for client_credentials. Each
     * token is for one mode. Value enum: "test", "live".
     */
    "mode": "test" | "live" | (string & {});
});
/** The `client_credentials` variant of `OAuthTokenRequest`. */
export type OAuthTokenRequestClientCredentialsInput = ({
    /**
     * Signed RFC 7523 JWT for partner client authentication. Send client_id and
     * client_assertion_type, without HTTP Basic or client_secret. minLength: 1. maxLength: 8192.
     */
    "client_assertion"?: string;
    /**
     * Required with client_assertion for partner private_key_jwt authentication. Value enum:
     * "urn:ietf:params:oauth:client-assertion-type:jwt-bearer".
     */
    "client_assertion_type"?: "urn:ietf:params:oauth:client-assertion-type:jwt-bearer";
    /**
     * Partner app client ID when using client_secret_post; flint-cli sends flint-cli. Omit when
     * HTTP Basic supplies the partner client ID. Forbidden for workload identity token exchange.
     * Example: "fpc_00112233445566778899aabbccddeeff".
     */
    "client_id"?: string;
    /**
     * Partner app secret for client_secret_post. Omit when using HTTP Basic. flint-cli never sends
     * a secret. Forbidden for workload identity token exchange.
     */
    "client_secret"?: string;
    /** Partner authorization code, required for authorization_code. */
    "code"?: string;
    /**
     * Partner PKCE verifier for the S256 challenge, required for authorization_code. minLength:
     * 43. maxLength: 128. pattern: ^[A-Za-z0-9\-._~]+$.
     */
    "code_verifier"?: string;
    /**
     * flint-cli only. Example:
     * "ctx_bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb".
     */
    "context_id"?: string;
    /** flint-cli device code, required for the device_code grant. */
    "device_code"?: string;
    /**
     * OAuth grant to exchange. Partner apps use client_credentials or authorization_code;
     * flint-cli uses device_code or refresh_token; workload identities use token-exchange. Value
     * enum: "client_credentials".
     */
    "grant_type": "client_credentials";
    /**
     * Binds the minted partner app token to this merchant, for client_credentials. Omit for an
     * app-level token that names the merchant in Flint-Merchant-Id on each request. Flint checks
     * only the ID's format here. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     */
    "merchant_id"?: string;
    /**
     * Mode of the partner app token to mint, test or live. Required for client_credentials. Each
     * token is for one mode. Value enum: "test", "live".
     */
    "mode": "test" | "live";
    /**
     * The redirect URI the authorization request used, character for character. Required for a
     * code from the consent screen. Omit it for a code from a merchant signup, which had no
     * authorization request: a signup code sent with one, or a consent-screen code sent without
     * one, returns invalid_grant.
     */
    "redirect_uri"?: string;
    /**
     * flint-cli refresh token, required for refresh_token. Partner apps don't receive refresh
     * tokens; a partner client that sends this grant gets unauthorized_client.
     */
    "refresh_token"?: string;
    /**
     * Optional requested credential type for token exchange. Only access tokens are supported.
     * Value enum: "urn:ietf:params:oauth:token-type:access_token".
     */
    "requested_token_type"?: "urn:ietf:params:oauth:token-type:access_token";
    /**
     * flint-cli and workload identities: optional subset of API scope names for this access token.
     * Partner apps: omit. Partner app tokens carry each install's granted permissions, and
     * client_credentials refuses scope with invalid_scope.
     */
    "scope"?: string;
    /**
     * JWT from the workload identity's external issuer. Required for token exchange. minLength: 1.
     * maxLength: 8192.
     */
    "subject_token"?: string;
    /**
     * Format of subject_token. Required for token exchange. Value enum:
     * "urn:ietf:params:oauth:token-type:jwt", "urn:ietf:params:oauth:token-type:id_token".
     */
    "subject_token_type"?: "urn:ietf:params:oauth:token-type:jwt" | "urn:ietf:params:oauth:token-type:id_token";
    /**
     * Configured workload identity to match against the verified subject token. Required for token
     * exchange. Example: "wid_01KEZF7C00GKCN7Y1482VY8TWP".
     */
    "workload_identity_id"?: string;
})
    & ({
    /** Value enum: "client_credentials". */
    "grant_type"?: ("client_credentials") & ("client_credentials");
    /**
     * Mode of the partner app token to mint, test or live. Required for client_credentials. Each
     * token is for one mode. Value enum: "test", "live".
     */
    "mode": "test" | "live";
});
/** The `urn:ietf:params:oauth:grant-type:device_code` variant of `OAuthTokenRequest`. */
export type OAuthTokenRequestDeviceCode = ({
    /**
     * Signed RFC 7523 JWT for partner client authentication. Send client_id and
     * client_assertion_type, without HTTP Basic or client_secret. minLength: 1. maxLength: 8192.
     */
    "client_assertion"?: string;
    /**
     * Required with client_assertion for partner private_key_jwt authentication. Value enum:
     * "urn:ietf:params:oauth:client-assertion-type:jwt-bearer".
     */
    "client_assertion_type"?: "urn:ietf:params:oauth:client-assertion-type:jwt-bearer" | (string & {});
    /**
     * Partner app client ID when using client_secret_post; flint-cli sends flint-cli. Omit when
     * HTTP Basic supplies the partner client ID. Forbidden for workload identity token exchange.
     * Example: "flint-cli".
     */
    "client_id"?: string;
    /**
     * Partner app secret for client_secret_post. Omit when using HTTP Basic. flint-cli never sends
     * a secret. Forbidden for workload identity token exchange.
     */
    "client_secret"?: string;
    /** Partner authorization code, required for authorization_code. */
    "code"?: string;
    /**
     * Partner PKCE verifier for the S256 challenge, required for authorization_code. minLength:
     * 43. maxLength: 128. pattern: ^[A-Za-z0-9\-._~]+$.
     */
    "code_verifier"?: string;
    /**
     * flint-cli only. Example:
     * "ctx_bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb".
     */
    "context_id"?: string;
    /** flint-cli device code, required for the device_code grant. */
    "device_code": string;
    /**
     * OAuth grant to exchange. Partner apps use client_credentials or authorization_code;
     * flint-cli uses device_code or refresh_token; workload identities use token-exchange. Value
     * enum: "urn:ietf:params:oauth:grant-type:device_code".
     */
    "grant_type": "urn:ietf:params:oauth:grant-type:device_code" | (string & {});
    /**
     * Binds the minted partner app token to this merchant, for client_credentials. Omit for an
     * app-level token that names the merchant in Flint-Merchant-Id on each request. Flint checks
     * only the ID's format here. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     */
    "merchant_id"?: string;
    /**
     * Mode of the partner app token to mint, test or live. Required for client_credentials. Each
     * token is for one mode. Value enum: "test", "live".
     */
    "mode"?: "test" | "live" | (string & {});
    /**
     * The redirect URI the authorization request used, character for character. Required for a
     * code from the consent screen. Omit it for a code from a merchant signup, which had no
     * authorization request: a signup code sent with one, or a consent-screen code sent without
     * one, returns invalid_grant.
     */
    "redirect_uri"?: string;
    /**
     * flint-cli refresh token, required for refresh_token. Partner apps don't receive refresh
     * tokens; a partner client that sends this grant gets unauthorized_client.
     */
    "refresh_token"?: string;
    /**
     * Optional requested credential type for token exchange. Only access tokens are supported.
     * Value enum: "urn:ietf:params:oauth:token-type:access_token".
     */
    "requested_token_type"?: "urn:ietf:params:oauth:token-type:access_token" | (string & {});
    /**
     * flint-cli and workload identities: optional subset of API scope names for this access token.
     * Partner apps: omit. Partner app tokens carry each install's granted permissions, and
     * client_credentials refuses scope with invalid_scope.
     */
    "scope"?: string;
    /**
     * JWT from the workload identity's external issuer. Required for token exchange. minLength: 1.
     * maxLength: 8192.
     */
    "subject_token"?: string;
    /**
     * Format of subject_token. Required for token exchange. Value enum:
     * "urn:ietf:params:oauth:token-type:jwt", "urn:ietf:params:oauth:token-type:id_token".
     */
    "subject_token_type"?: "urn:ietf:params:oauth:token-type:jwt" | "urn:ietf:params:oauth:token-type:id_token" | (string & {});
    /**
     * Configured workload identity to match against the verified subject token. Required for token
     * exchange. Example: "wid_01KEZF7C00GKCN7Y1482VY8TWP".
     */
    "workload_identity_id"?: string;
})
    & ({
    /** Value enum: "urn:ietf:params:oauth:grant-type:device_code". */
    "grant_type"?: unknown;
    /** flint-cli device code, required for the device_code grant. */
    "device_code": string;
});
/** The `urn:ietf:params:oauth:grant-type:device_code` variant of `OAuthTokenRequest`. */
export type OAuthTokenRequestDeviceCodeInput = ({
    /**
     * Signed RFC 7523 JWT for partner client authentication. Send client_id and
     * client_assertion_type, without HTTP Basic or client_secret. minLength: 1. maxLength: 8192.
     */
    "client_assertion"?: string;
    /**
     * Required with client_assertion for partner private_key_jwt authentication. Value enum:
     * "urn:ietf:params:oauth:client-assertion-type:jwt-bearer".
     */
    "client_assertion_type"?: "urn:ietf:params:oauth:client-assertion-type:jwt-bearer";
    /**
     * Partner app client ID when using client_secret_post; flint-cli sends flint-cli. Omit when
     * HTTP Basic supplies the partner client ID. Forbidden for workload identity token exchange.
     * Example: "flint-cli".
     */
    "client_id"?: string;
    /**
     * Partner app secret for client_secret_post. Omit when using HTTP Basic. flint-cli never sends
     * a secret. Forbidden for workload identity token exchange.
     */
    "client_secret"?: string;
    /** Partner authorization code, required for authorization_code. */
    "code"?: string;
    /**
     * Partner PKCE verifier for the S256 challenge, required for authorization_code. minLength:
     * 43. maxLength: 128. pattern: ^[A-Za-z0-9\-._~]+$.
     */
    "code_verifier"?: string;
    /**
     * flint-cli only. Example:
     * "ctx_bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb".
     */
    "context_id"?: string;
    /** flint-cli device code, required for the device_code grant. */
    "device_code": string;
    /**
     * OAuth grant to exchange. Partner apps use client_credentials or authorization_code;
     * flint-cli uses device_code or refresh_token; workload identities use token-exchange. Value
     * enum: "urn:ietf:params:oauth:grant-type:device_code".
     */
    "grant_type": "urn:ietf:params:oauth:grant-type:device_code";
    /**
     * Binds the minted partner app token to this merchant, for client_credentials. Omit for an
     * app-level token that names the merchant in Flint-Merchant-Id on each request. Flint checks
     * only the ID's format here. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     */
    "merchant_id"?: string;
    /**
     * Mode of the partner app token to mint, test or live. Required for client_credentials. Each
     * token is for one mode. Value enum: "test", "live".
     */
    "mode"?: "test" | "live";
    /**
     * The redirect URI the authorization request used, character for character. Required for a
     * code from the consent screen. Omit it for a code from a merchant signup, which had no
     * authorization request: a signup code sent with one, or a consent-screen code sent without
     * one, returns invalid_grant.
     */
    "redirect_uri"?: string;
    /**
     * flint-cli refresh token, required for refresh_token. Partner apps don't receive refresh
     * tokens; a partner client that sends this grant gets unauthorized_client.
     */
    "refresh_token"?: string;
    /**
     * Optional requested credential type for token exchange. Only access tokens are supported.
     * Value enum: "urn:ietf:params:oauth:token-type:access_token".
     */
    "requested_token_type"?: "urn:ietf:params:oauth:token-type:access_token";
    /**
     * flint-cli and workload identities: optional subset of API scope names for this access token.
     * Partner apps: omit. Partner app tokens carry each install's granted permissions, and
     * client_credentials refuses scope with invalid_scope.
     */
    "scope"?: string;
    /**
     * JWT from the workload identity's external issuer. Required for token exchange. minLength: 1.
     * maxLength: 8192.
     */
    "subject_token"?: string;
    /**
     * Format of subject_token. Required for token exchange. Value enum:
     * "urn:ietf:params:oauth:token-type:jwt", "urn:ietf:params:oauth:token-type:id_token".
     */
    "subject_token_type"?: "urn:ietf:params:oauth:token-type:jwt" | "urn:ietf:params:oauth:token-type:id_token";
    /**
     * Configured workload identity to match against the verified subject token. Required for token
     * exchange. Example: "wid_01KEZF7C00GKCN7Y1482VY8TWP".
     */
    "workload_identity_id"?: string;
})
    & ({
    /** Value enum: "urn:ietf:params:oauth:grant-type:device_code". */
    "grant_type"?: ("urn:ietf:params:oauth:grant-type:device_code") & ("urn:ietf:params:oauth:grant-type:device_code");
    /** flint-cli device code, required for the device_code grant. */
    "device_code": string;
});
/** The request body for: Exchange an OAuth token. */
export type OAuthTokenRequestInput = ({
    /**
     * Signed RFC 7523 JWT for partner client authentication. Send client_id and
     * client_assertion_type, without HTTP Basic or client_secret. minLength: 1. maxLength: 8192.
     */
    "client_assertion"?: string;
    /**
     * Required with client_assertion for partner private_key_jwt authentication. Value enum:
     * "urn:ietf:params:oauth:client-assertion-type:jwt-bearer".
     */
    "client_assertion_type"?: "urn:ietf:params:oauth:client-assertion-type:jwt-bearer";
    /**
     * Partner app client ID when using client_secret_post; flint-cli sends flint-cli. Omit when
     * HTTP Basic supplies the partner client ID. Forbidden for workload identity token exchange.
     * Example: "flint-cli".
     */
    "client_id"?: string;
    /**
     * Partner app secret for client_secret_post. Omit when using HTTP Basic. flint-cli never sends
     * a secret. Forbidden for workload identity token exchange.
     */
    "client_secret"?: string;
    /** Partner authorization code, required for authorization_code. */
    "code"?: string;
    /**
     * Partner PKCE verifier for the S256 challenge, required for authorization_code. minLength:
     * 43. maxLength: 128. pattern: ^[A-Za-z0-9\-._~]+$.
     */
    "code_verifier"?: string;
    /**
     * flint-cli only. Example:
     * "ctx_bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb".
     */
    "context_id"?: string;
    /** flint-cli device code, required for the device_code grant. */
    "device_code"?: string;
    /**
     * OAuth grant to exchange. Partner apps use client_credentials or authorization_code;
     * flint-cli uses device_code or refresh_token; workload identities use token-exchange. Value
     * enum: "authorization_code", "client_credentials", "refresh_token",
     * "urn:ietf:params:oauth:grant-type:device_code",
     * "urn:ietf:params:oauth:grant-type:token-exchange".
     */
    "grant_type": "authorization_code"
        | "client_credentials"
        | "refresh_token"
        | "urn:ietf:params:oauth:grant-type:device_code"
        | "urn:ietf:params:oauth:grant-type:token-exchange";
    /**
     * Binds the minted partner app token to this merchant, for client_credentials. Omit for an
     * app-level token that names the merchant in Flint-Merchant-Id on each request. Flint checks
     * only the ID's format here. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     */
    "merchant_id"?: string;
    /**
     * Mode of the partner app token to mint, test or live. Required for client_credentials. Each
     * token is for one mode. Value enum: "test", "live".
     */
    "mode"?: "test" | "live";
    /**
     * The redirect URI the authorization request used, character for character. Required for a
     * code from the consent screen. Omit it for a code from a merchant signup, which had no
     * authorization request: a signup code sent with one, or a consent-screen code sent without
     * one, returns invalid_grant.
     */
    "redirect_uri"?: string;
    /**
     * flint-cli refresh token, required for refresh_token. Partner apps don't receive refresh
     * tokens; a partner client that sends this grant gets unauthorized_client.
     */
    "refresh_token"?: string;
    /**
     * Optional requested credential type for token exchange. Only access tokens are supported.
     * Value enum: "urn:ietf:params:oauth:token-type:access_token".
     */
    "requested_token_type"?: "urn:ietf:params:oauth:token-type:access_token";
    /**
     * flint-cli and workload identities: optional subset of API scope names for this access token.
     * Partner apps: omit. Partner app tokens carry each install's granted permissions, and
     * client_credentials refuses scope with invalid_scope.
     */
    "scope"?: string;
    /**
     * JWT from the workload identity's external issuer. Required for token exchange. minLength: 1.
     * maxLength: 8192.
     */
    "subject_token"?: string;
    /**
     * Format of subject_token. Required for token exchange. Value enum:
     * "urn:ietf:params:oauth:token-type:jwt", "urn:ietf:params:oauth:token-type:id_token".
     */
    "subject_token_type"?: "urn:ietf:params:oauth:token-type:jwt" | "urn:ietf:params:oauth:token-type:id_token";
    /**
     * Configured workload identity to match against the verified subject token. Required for token
     * exchange. Example: "wid_01KEZF7C00GKCN7Y1482VY8TWP".
     */
    "workload_identity_id"?: string;
})
    & ((Exclude<OAuthTokenRequestAuthorizationCodeInput & object, readonly unknown[]>)
    | (Exclude<OAuthTokenRequestClientCredentialsInput & object, readonly unknown[]>)
    | (Exclude<OAuthTokenRequestRefreshTokenInput & object, readonly unknown[]>)
    | (Exclude<OAuthTokenRequestDeviceCodeInput & object, readonly unknown[]>)
    | (Exclude<OAuthTokenRequestTokenExchangeInput & object, readonly unknown[]>));
/** The `refresh_token` variant of `OAuthTokenRequest`. */
export type OAuthTokenRequestRefreshToken = ({
    /**
     * Signed RFC 7523 JWT for partner client authentication. Send client_id and
     * client_assertion_type, without HTTP Basic or client_secret. minLength: 1. maxLength: 8192.
     */
    "client_assertion"?: string;
    /**
     * Required with client_assertion for partner private_key_jwt authentication. Value enum:
     * "urn:ietf:params:oauth:client-assertion-type:jwt-bearer".
     */
    "client_assertion_type"?: "urn:ietf:params:oauth:client-assertion-type:jwt-bearer" | (string & {});
    /**
     * Partner app client ID when using client_secret_post; flint-cli sends flint-cli. Omit when
     * HTTP Basic supplies the partner client ID. Forbidden for workload identity token exchange.
     * Example: "flint-cli".
     */
    "client_id"?: string;
    /**
     * Partner app secret for client_secret_post. Omit when using HTTP Basic. flint-cli never sends
     * a secret. Forbidden for workload identity token exchange.
     */
    "client_secret"?: string;
    /** Partner authorization code, required for authorization_code. */
    "code"?: string;
    /**
     * Partner PKCE verifier for the S256 challenge, required for authorization_code. minLength:
     * 43. maxLength: 128. pattern: ^[A-Za-z0-9\-._~]+$.
     */
    "code_verifier"?: string;
    /**
     * flint-cli only. Example:
     * "ctx_bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb".
     */
    "context_id"?: string;
    /** flint-cli device code, required for the device_code grant. */
    "device_code"?: string;
    /**
     * OAuth grant to exchange. Partner apps use client_credentials or authorization_code;
     * flint-cli uses device_code or refresh_token; workload identities use token-exchange. Value
     * enum: "refresh_token".
     */
    "grant_type": "refresh_token" | (string & {});
    /**
     * Binds the minted partner app token to this merchant, for client_credentials. Omit for an
     * app-level token that names the merchant in Flint-Merchant-Id on each request. Flint checks
     * only the ID's format here. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     */
    "merchant_id"?: string;
    /**
     * Mode of the partner app token to mint, test or live. Required for client_credentials. Each
     * token is for one mode. Value enum: "test", "live".
     */
    "mode"?: "test" | "live" | (string & {});
    /**
     * The redirect URI the authorization request used, character for character. Required for a
     * code from the consent screen. Omit it for a code from a merchant signup, which had no
     * authorization request: a signup code sent with one, or a consent-screen code sent without
     * one, returns invalid_grant.
     */
    "redirect_uri"?: string;
    /**
     * flint-cli refresh token, required for refresh_token. Partner apps don't receive refresh
     * tokens; a partner client that sends this grant gets unauthorized_client.
     */
    "refresh_token": string;
    /**
     * Optional requested credential type for token exchange. Only access tokens are supported.
     * Value enum: "urn:ietf:params:oauth:token-type:access_token".
     */
    "requested_token_type"?: "urn:ietf:params:oauth:token-type:access_token" | (string & {});
    /**
     * flint-cli and workload identities: optional subset of API scope names for this access token.
     * Partner apps: omit. Partner app tokens carry each install's granted permissions, and
     * client_credentials refuses scope with invalid_scope.
     */
    "scope"?: string;
    /**
     * JWT from the workload identity's external issuer. Required for token exchange. minLength: 1.
     * maxLength: 8192.
     */
    "subject_token"?: string;
    /**
     * Format of subject_token. Required for token exchange. Value enum:
     * "urn:ietf:params:oauth:token-type:jwt", "urn:ietf:params:oauth:token-type:id_token".
     */
    "subject_token_type"?: "urn:ietf:params:oauth:token-type:jwt" | "urn:ietf:params:oauth:token-type:id_token" | (string & {});
    /**
     * Configured workload identity to match against the verified subject token. Required for token
     * exchange. Example: "wid_01KEZF7C00GKCN7Y1482VY8TWP".
     */
    "workload_identity_id"?: string;
})
    & ({
    /** Value enum: "refresh_token". */
    "grant_type"?: unknown;
    /**
     * flint-cli refresh token, required for refresh_token. Partner apps don't receive refresh
     * tokens; a partner client that sends this grant gets unauthorized_client.
     */
    "refresh_token": string;
});
/** The `refresh_token` variant of `OAuthTokenRequest`. */
export type OAuthTokenRequestRefreshTokenInput = ({
    /**
     * Signed RFC 7523 JWT for partner client authentication. Send client_id and
     * client_assertion_type, without HTTP Basic or client_secret. minLength: 1. maxLength: 8192.
     */
    "client_assertion"?: string;
    /**
     * Required with client_assertion for partner private_key_jwt authentication. Value enum:
     * "urn:ietf:params:oauth:client-assertion-type:jwt-bearer".
     */
    "client_assertion_type"?: "urn:ietf:params:oauth:client-assertion-type:jwt-bearer";
    /**
     * Partner app client ID when using client_secret_post; flint-cli sends flint-cli. Omit when
     * HTTP Basic supplies the partner client ID. Forbidden for workload identity token exchange.
     * Example: "flint-cli".
     */
    "client_id"?: string;
    /**
     * Partner app secret for client_secret_post. Omit when using HTTP Basic. flint-cli never sends
     * a secret. Forbidden for workload identity token exchange.
     */
    "client_secret"?: string;
    /** Partner authorization code, required for authorization_code. */
    "code"?: string;
    /**
     * Partner PKCE verifier for the S256 challenge, required for authorization_code. minLength:
     * 43. maxLength: 128. pattern: ^[A-Za-z0-9\-._~]+$.
     */
    "code_verifier"?: string;
    /**
     * flint-cli only. Example:
     * "ctx_bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb".
     */
    "context_id"?: string;
    /** flint-cli device code, required for the device_code grant. */
    "device_code"?: string;
    /**
     * OAuth grant to exchange. Partner apps use client_credentials or authorization_code;
     * flint-cli uses device_code or refresh_token; workload identities use token-exchange. Value
     * enum: "refresh_token".
     */
    "grant_type": "refresh_token";
    /**
     * Binds the minted partner app token to this merchant, for client_credentials. Omit for an
     * app-level token that names the merchant in Flint-Merchant-Id on each request. Flint checks
     * only the ID's format here. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     */
    "merchant_id"?: string;
    /**
     * Mode of the partner app token to mint, test or live. Required for client_credentials. Each
     * token is for one mode. Value enum: "test", "live".
     */
    "mode"?: "test" | "live";
    /**
     * The redirect URI the authorization request used, character for character. Required for a
     * code from the consent screen. Omit it for a code from a merchant signup, which had no
     * authorization request: a signup code sent with one, or a consent-screen code sent without
     * one, returns invalid_grant.
     */
    "redirect_uri"?: string;
    /**
     * flint-cli refresh token, required for refresh_token. Partner apps don't receive refresh
     * tokens; a partner client that sends this grant gets unauthorized_client.
     */
    "refresh_token": string;
    /**
     * Optional requested credential type for token exchange. Only access tokens are supported.
     * Value enum: "urn:ietf:params:oauth:token-type:access_token".
     */
    "requested_token_type"?: "urn:ietf:params:oauth:token-type:access_token";
    /**
     * flint-cli and workload identities: optional subset of API scope names for this access token.
     * Partner apps: omit. Partner app tokens carry each install's granted permissions, and
     * client_credentials refuses scope with invalid_scope.
     */
    "scope"?: string;
    /**
     * JWT from the workload identity's external issuer. Required for token exchange. minLength: 1.
     * maxLength: 8192.
     */
    "subject_token"?: string;
    /**
     * Format of subject_token. Required for token exchange. Value enum:
     * "urn:ietf:params:oauth:token-type:jwt", "urn:ietf:params:oauth:token-type:id_token".
     */
    "subject_token_type"?: "urn:ietf:params:oauth:token-type:jwt" | "urn:ietf:params:oauth:token-type:id_token";
    /**
     * Configured workload identity to match against the verified subject token. Required for token
     * exchange. Example: "wid_01KEZF7C00GKCN7Y1482VY8TWP".
     */
    "workload_identity_id"?: string;
})
    & ({
    /** Value enum: "refresh_token". */
    "grant_type"?: ("refresh_token") & ("refresh_token");
    /**
     * flint-cli refresh token, required for refresh_token. Partner apps don't receive refresh
     * tokens; a partner client that sends this grant gets unauthorized_client.
     */
    "refresh_token": string;
});
/** The `urn:ietf:params:oauth:grant-type:token-exchange` variant of `OAuthTokenRequest`. */
export type OAuthTokenRequestTokenExchange = ({
    /**
     * Signed RFC 7523 JWT for partner client authentication. Send client_id and
     * client_assertion_type, without HTTP Basic or client_secret. minLength: 1. maxLength: 8192.
     */
    "client_assertion"?: string;
    /**
     * Required with client_assertion for partner private_key_jwt authentication. Value enum:
     * "urn:ietf:params:oauth:client-assertion-type:jwt-bearer".
     */
    "client_assertion_type"?: "urn:ietf:params:oauth:client-assertion-type:jwt-bearer" | (string & {});
    /**
     * Partner app client ID when using client_secret_post; flint-cli sends flint-cli. Omit when
     * HTTP Basic supplies the partner client ID. Forbidden for workload identity token exchange.
     * Example: "flint-cli".
     */
    "client_id"?: string;
    /**
     * Partner app secret for client_secret_post. Omit when using HTTP Basic. flint-cli never sends
     * a secret. Forbidden for workload identity token exchange.
     */
    "client_secret"?: string;
    /** Partner authorization code, required for authorization_code. */
    "code"?: string;
    /**
     * Partner PKCE verifier for the S256 challenge, required for authorization_code. minLength:
     * 43. maxLength: 128. pattern: ^[A-Za-z0-9\-._~]+$.
     */
    "code_verifier"?: string;
    /**
     * flint-cli only. Example:
     * "ctx_bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb".
     */
    "context_id"?: string;
    /** flint-cli device code, required for the device_code grant. */
    "device_code"?: string;
    /**
     * OAuth grant to exchange. Partner apps use client_credentials or authorization_code;
     * flint-cli uses device_code or refresh_token; workload identities use token-exchange. Value
     * enum: "urn:ietf:params:oauth:grant-type:token-exchange".
     */
    "grant_type": "urn:ietf:params:oauth:grant-type:token-exchange" | (string & {});
    /**
     * Binds the minted partner app token to this merchant, for client_credentials. Omit for an
     * app-level token that names the merchant in Flint-Merchant-Id on each request. Flint checks
     * only the ID's format here. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     */
    "merchant_id"?: string;
    /**
     * Mode of the partner app token to mint, test or live. Required for client_credentials. Each
     * token is for one mode. Value enum: "test", "live".
     */
    "mode"?: "test" | "live" | (string & {});
    /**
     * The redirect URI the authorization request used, character for character. Required for a
     * code from the consent screen. Omit it for a code from a merchant signup, which had no
     * authorization request: a signup code sent with one, or a consent-screen code sent without
     * one, returns invalid_grant.
     */
    "redirect_uri"?: string;
    /**
     * flint-cli refresh token, required for refresh_token. Partner apps don't receive refresh
     * tokens; a partner client that sends this grant gets unauthorized_client.
     */
    "refresh_token"?: string;
    /**
     * Optional requested credential type for token exchange. Only access tokens are supported.
     * Value enum: "urn:ietf:params:oauth:token-type:access_token".
     */
    "requested_token_type"?: "urn:ietf:params:oauth:token-type:access_token" | (string & {});
    /**
     * flint-cli and workload identities: optional subset of API scope names for this access token.
     * Partner apps: omit. Partner app tokens carry each install's granted permissions, and
     * client_credentials refuses scope with invalid_scope.
     */
    "scope"?: string;
    /**
     * JWT from the workload identity's external issuer. Required for token exchange. minLength: 1.
     * maxLength: 8192.
     */
    "subject_token": string;
    /**
     * Format of subject_token. Required for token exchange. Value enum:
     * "urn:ietf:params:oauth:token-type:jwt", "urn:ietf:params:oauth:token-type:id_token".
     */
    "subject_token_type": "urn:ietf:params:oauth:token-type:jwt" | "urn:ietf:params:oauth:token-type:id_token" | (string & {});
    /**
     * Configured workload identity to match against the verified subject token. Required for token
     * exchange. Example: "wid_01KEZF7C00GKCN7Y1482VY8TWP".
     */
    "workload_identity_id": string;
})
    & ({
    /** Value enum: "urn:ietf:params:oauth:grant-type:token-exchange". */
    "grant_type"?: unknown;
    "requested_token_type"?: unknown;
    "scope"?: unknown;
    "subject_token": unknown;
    "subject_token_type": unknown;
    "workload_identity_id": unknown;
});
/** The `urn:ietf:params:oauth:grant-type:token-exchange` variant of `OAuthTokenRequest`. */
export type OAuthTokenRequestTokenExchangeInput = ({
    /**
     * Signed RFC 7523 JWT for partner client authentication. Send client_id and
     * client_assertion_type, without HTTP Basic or client_secret. minLength: 1. maxLength: 8192.
     */
    "client_assertion"?: string;
    /**
     * Required with client_assertion for partner private_key_jwt authentication. Value enum:
     * "urn:ietf:params:oauth:client-assertion-type:jwt-bearer".
     */
    "client_assertion_type"?: "urn:ietf:params:oauth:client-assertion-type:jwt-bearer";
    /**
     * Partner app client ID when using client_secret_post; flint-cli sends flint-cli. Omit when
     * HTTP Basic supplies the partner client ID. Forbidden for workload identity token exchange.
     * Example: "flint-cli".
     */
    "client_id"?: string;
    /**
     * Partner app secret for client_secret_post. Omit when using HTTP Basic. flint-cli never sends
     * a secret. Forbidden for workload identity token exchange.
     */
    "client_secret"?: string;
    /** Partner authorization code, required for authorization_code. */
    "code"?: string;
    /**
     * Partner PKCE verifier for the S256 challenge, required for authorization_code. minLength:
     * 43. maxLength: 128. pattern: ^[A-Za-z0-9\-._~]+$.
     */
    "code_verifier"?: string;
    /**
     * flint-cli only. Example:
     * "ctx_bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb".
     */
    "context_id"?: string;
    /** flint-cli device code, required for the device_code grant. */
    "device_code"?: string;
    /**
     * OAuth grant to exchange. Partner apps use client_credentials or authorization_code;
     * flint-cli uses device_code or refresh_token; workload identities use token-exchange. Value
     * enum: "urn:ietf:params:oauth:grant-type:token-exchange".
     */
    "grant_type": "urn:ietf:params:oauth:grant-type:token-exchange";
    /**
     * Binds the minted partner app token to this merchant, for client_credentials. Omit for an
     * app-level token that names the merchant in Flint-Merchant-Id on each request. Flint checks
     * only the ID's format here. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     */
    "merchant_id"?: string;
    /**
     * Mode of the partner app token to mint, test or live. Required for client_credentials. Each
     * token is for one mode. Value enum: "test", "live".
     */
    "mode"?: "test" | "live";
    /**
     * The redirect URI the authorization request used, character for character. Required for a
     * code from the consent screen. Omit it for a code from a merchant signup, which had no
     * authorization request: a signup code sent with one, or a consent-screen code sent without
     * one, returns invalid_grant.
     */
    "redirect_uri"?: string;
    /**
     * flint-cli refresh token, required for refresh_token. Partner apps don't receive refresh
     * tokens; a partner client that sends this grant gets unauthorized_client.
     */
    "refresh_token"?: string;
    /**
     * Optional requested credential type for token exchange. Only access tokens are supported.
     * Value enum: "urn:ietf:params:oauth:token-type:access_token".
     */
    "requested_token_type"?: "urn:ietf:params:oauth:token-type:access_token";
    /**
     * flint-cli and workload identities: optional subset of API scope names for this access token.
     * Partner apps: omit. Partner app tokens carry each install's granted permissions, and
     * client_credentials refuses scope with invalid_scope.
     */
    "scope"?: string;
    /**
     * JWT from the workload identity's external issuer. Required for token exchange. minLength: 1.
     * maxLength: 8192.
     */
    "subject_token": string;
    /**
     * Format of subject_token. Required for token exchange. Value enum:
     * "urn:ietf:params:oauth:token-type:jwt", "urn:ietf:params:oauth:token-type:id_token".
     */
    "subject_token_type": "urn:ietf:params:oauth:token-type:jwt" | "urn:ietf:params:oauth:token-type:id_token";
    /**
     * Configured workload identity to match against the verified subject token. Required for token
     * exchange. Example: "wid_01KEZF7C00GKCN7Y1482VY8TWP".
     */
    "workload_identity_id": string;
})
    & ({
    /** Value enum: "urn:ietf:params:oauth:grant-type:token-exchange". */
    "grant_type"?: ("urn:ietf:params:oauth:grant-type:token-exchange")
        & ("urn:ietf:params:oauth:grant-type:token-exchange");
    "requested_token_type"?: unknown;
    "scope"?: unknown;
    "subject_token": unknown;
    "subject_token_type": unknown;
    "workload_identity_id": unknown;
});
/** The response for: Exchange an OAuth token. */
export type OAuthTokenResponse = ({
    /**
     * The access token. Send it as a bearer token. Partner app tokens start with `fpat_` and
     * workload identity tokens with `fwat_`. minLength: 1.
     */
    "access_token": string;
    /**
     * ID of the CLI context the access token is for. minLength: 1. Example:
     * "ctx_bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb".
     */
    "context_id"?: string;
    /**
     * ID of the grant that authorizes the partner app in this environment, from a code exchange.
     * Each mode has its own grant. Example: "egrt_01KEZF7C00MQQDDB7YWGXV3MXY".
     */
    "environment_grant_id"?: string;
    /**
     * Seconds until the access token expires, from 1 to 86400. Partner app tokens last 900 and
     * workload identity tokens at most 3600. minimum: 1. maximum: 86400.
     */
    "expires_in": number;
    /**
     * Present for workload identity token exchange. Identifies the issued credential as an access
     * token. Value enum: "urn:ietf:params:oauth:token-type:access_token".
     */
    "issued_token_type"?: "urn:ietf:params:oauth:token-type:access_token" | (string & {});
    /**
     * Merchant the token acts for: the installing merchant for a code exchange, the bound merchant
     * for a merchant-bound partner app token, or the workload identity's merchant. Absent from an
     * app-level partner app token, which names the merchant per request. Example:
     * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     */
    "merchant_id"?: string;
    /**
     * The token's mode, live or test. Present for partner app tokens and workload access tokens.
     * Value enum: "test", "live".
     */
    "mode"?: "test" | "live" | (string & {});
    /**
     * ID of the CLI OAuth session. It stays the same through every refresh. minLength: 1. Example:
     * "session_aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa".
     */
    "oauth_session_id"?: string;
    /**
     * ID of the partner app the token was issued to. Example: "papp_01KEZF7C00Y8VMXYZ1GNPP3WHV".
     */
    "partner_app_id"?: string;
    /**
     * ID of the partner app's install on this merchant, from a code exchange. Example:
     * "pinst_01KEZF7C003HVKZR3GZAW6AFAZ".
     */
    "partner_app_install_id"?: string;
    /**
     * Rotating flint-cli refresh token. Absent for partner app tokens and workload access tokens.
     * minLength: 1.
     */
    "refresh_token"?: string;
    /**
     * Present exactly when mode is test, except for partner app tokens from client_credentials,
     * which use each merchant's test grant. Example: "test_01KEZF7C00JC77HTMTB2XHNPE0".
     */
    "sandbox_id"?: string;
    /**
     * Space-separated granted scope, in the vocabulary the client requested: permission IDs for a
     * partner code exchange, API scope names for flint-cli and workload identities. Empty when a
     * workload identity has no scopes. Absent from client_credentials responses, because a partner
     * app token's scopes are each install's grant.
     */
    "scope"?: string;
    /** The token type, as RFC 6749 defines it. Value enum: "Bearer". */
    "token_type": "Bearer" | (string & {});
    /**
     * Workload identity that authorized the token exchange. Present only for workload access
     * tokens. Example: "wid_01KEZF7C00GKCN7Y1482VY8TWP".
     */
    "workload_identity_id"?: string;
});
export type OauthAuthorizeCLIDeviceParams = (InputValue<CLIDeviceRequestInput>);
export type OauthExchangeTokenParams = (OAuthTokenRequestInput);
export type OauthListCLIContextsParams = (InputValue<CLIContextsRequestInput>);
export type OauthPreviewPartnerInstallAuthorizationParams = {
    /** OAuth response type. Must be code. Value enum: "code". */
    "response_type"?: InputValue<"code">;
    /** Partner app client ID. Example: "fpc_00112233445566778899aabbccddeeff". */
    "client_id": InputValue<string>;
    /** Registered redirect URI for the partner app. */
    "redirect_uri": InputValue<string>;
    /** Install mode. Value enum: "test", "live". */
    "mode": InputValue<"test" | "live">;
    /** Base64url-encoded SHA-256 hash of your code_verifier, without padding (RFC 7636). */
    "code_challenge"?: InputValue<string>;
    /** PKCE challenge method. Value enum: "S256". */
    "code_challenge_method"?: InputValue<"S256">;
    /**
     * Space-separated permission IDs from your app's permission manifest. Omit to request
     * default_requested_permissions. Required permissions are always granted.
     */
    "scope"?: InputValue<string>;
    /**
     * Optional active merchant sandbox ID, accepted only with mode=test. When omitted in test
     * mode, Flint uses the merchant's default sandbox. Example: "test_01KEZF7C00JC77HTMTB2XHNPE0".
     */
    "sandbox_id"?: InputValue<string>;
    /** Opaque state value returned to the partner callback. */
    "state"?: InputValue<string>;
};
export type OauthReauthorizeCLIDeviceParams = (InputValue<CLIReauthorizeRequestInput>);
export type OauthRevokeTokenParams = (InputValue<OAuthRevokeRequestInput>);
export type OauthRevokeTokenResponse = undefined;
export type OnboardingAdvanceParams = (InputValue<OnboardingAdvanceRequestInput>
    | {
    "country"?: never;
    "profile"?: never;
    "requested_capabilities"?: never;
})
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
/** The request body for: Advance onboarding flow. */
export type OnboardingAdvanceRequest = {
    /**
     * ISO 3166-1 alpha-2 country code. minLength: 2. maxLength: 2. pattern: ^[A-Z]{2}$. Example:
     * "US". Value enum: "US".
     */
    "country"?: "US" | (string & {});
    /**
     * Contact and website details to record for onboarding. Send only the fields to change.
     * Profile changes return `409 ACTION_NOT_ALLOWED` with reason `managed_externally` while the
     * account is being set up. Once the account is active, support contact and website details can
     * change; changing the email address still returns this error. Contact and website details you
     * submit for a merchant during onboarding. Send null to clear a field.
     */
    "profile"?: OnboardingProfileRequest;
    /**
     * Exact initial Flint capability set. Include accept_card_payments and receive_payouts
     * together. Optionally include accept_ach_debit_payments, or omit the field to use the card
     * and payout default set. minItems: 2. maxItems: 3. uniqueItems: true. [] enum:
     * "accept_card_payments", "receive_payouts", "accept_ach_debit_payments". [] (Value): string.
     * Value enum: "accept_card_payments", "receive_payouts", "accept_ach_debit_payments".
     */
    "requested_capabilities"?: (Array<"accept_card_payments" | "receive_payouts" | "accept_ach_debit_payments" | (string & {})>);
};
/** The request body for: Advance onboarding flow. */
export type OnboardingAdvanceRequestInput = {
    /**
     * ISO 3166-1 alpha-2 country code. minLength: 2. maxLength: 2. pattern: ^[A-Z]{2}$. Example:
     * "US". Value enum: "US".
     */
    "country"?: "US";
    /**
     * Contact and website details to record for onboarding. Send only the fields to change.
     * Profile changes return `409 ACTION_NOT_ALLOWED` with reason `managed_externally` while the
     * account is being set up. Once the account is active, support contact and website details can
     * change; changing the email address still returns this error. Contact and website details you
     * submit for a merchant during onboarding. Send null to clear a field.
     */
    "profile"?: OnboardingProfileRequestInput;
    /**
     * Exact initial Flint capability set. Include accept_card_payments and receive_payouts
     * together. Optionally include accept_ach_debit_payments, or omit the field to use the card
     * and payout default set. minItems: 2. maxItems: 3. uniqueItems: true. [] enum:
     * "accept_card_payments", "receive_payouts", "accept_ach_debit_payments". [] (Value): string.
     * Value enum: "accept_card_payments", "receive_payouts", "accept_ach_debit_payments".
     */
    "requested_capabilities"?: (Array<"accept_card_payments" | "receive_payouts" | "accept_ach_debit_payments">);
};
export type OnboardingCreateAccessLinkParams = (InputValue<CreateOnboardingAccessLinkRequestInput>)
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
export type OnboardingGetStateParams = DisputesAcceptParams;
/** Contact and website details recorded for a merchant during onboarding. */
export type OnboardingProfile = {
    /**
     * The merchant's contact email address. `null` when no email address is on file for the
     * merchant.
     */
    "email": string | null;
    /** Support email address recorded for onboarding. Omitted when none is recorded. */
    "support_email"?: string;
    /** Support phone number recorded for onboarding. Omitted when none is recorded. */
    "support_phone"?: string;
    /** Support page recorded for onboarding. Omitted when none is recorded. */
    "support_url"?: string;
    /** The business's website recorded for onboarding. Omitted when none is recorded. */
    "website_url"?: string;
};
/**
 * Contact and website details you submit for a merchant during onboarding. Send null to clear a
 * field.
 */
export type OnboardingProfileRequest = {
    /** Send null to clear it. minLength: 1. */
    "email"?: string | null;
    /**
     * Buyers see this address on receipts and in their account. A support email is required before
     * initial live activation. Existing live merchants may clear it and receive a nonblocking
     * prompt to add one. Send null to clear it. minLength: 1.
     */
    "support_email"?: string | null;
    /** Send null to clear it. minLength: 1. */
    "support_phone"?: string | null;
    /** Send null to clear it. minLength: 1. */
    "support_url"?: string | null;
    /** Send null to clear it. minLength: 1. */
    "website_url"?: string | null;
};
/**
 * Contact and website details you submit for a merchant during onboarding. Send null to clear a
 * field.
 */
export type OnboardingProfileRequestInput = OnboardingProfileRequest;
/** Non-secret metadata for the calling credential, selected by auth_type. */
export type OnboardingSessionAuthContext = ({
    /** Credential type that selects this object's fields. Value enum: "onboarding_session". */
    "auth_type": "onboarding_session" | (string & {});
    /** Whether the onboarding user's role permits managing API keys. */
    "can_manage_api_keys": boolean;
    /**
     * Time the credential expires; absent for keys without an expiry. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "expires_at": string;
    /**
     * Time fresh identity verification expires; it may be in the past. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "fresh_verification_expires_at": string;
    /**
     * Merchant the credential acts for. Null when an onboarding session has no merchant yet.
     * Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     */
    "merchant_id": string | null;
    /** Whether the credential acts in test or live mode. Value enum: "test", "live". */
    "mode": "test" | "live" | (string & {});
    /**
     * Public sandbox ID in test mode. Null when an onboarding session has no sandbox yet. Omitted
     * when mode is live. Example: "test_01KEZF7C00JC77HTMTB2XHNPE0".
     */
    "sandbox_id": string | null;
    /** User the session acts for. Example: "usr_01KEZF7C00YC8757ZYP9727JM0". */
    "user_id": string;
})
    & ({
    /** Value enum: "test". */
    "mode"?: unknown;
});
export type OnboardingStartParams = (InputValue<OnboardingStartRequestInput>);
/** The request body for: Start onboarding flow. */
export type OnboardingStartRequest = {
    /**
     * Business name buyers see. Applied only when verification creates a merchant; existing
     * merchants keep their profile. Surrounding whitespace is trimmed. minLength: 1. maxLength:
     * 120.
     */
    "business_name"?: string;
    /** Email address to verify. Flint emails a verification code to it. minLength: 1. */
    "email": string;
    /** First name of the person signing up. minLength: 1. */
    "first_name": string;
    /** Last name of the person signing up. minLength: 1. */
    "last_name": string;
    /** Support email shown to buyers. Applied only to a newly created merchant. minLength: 1. */
    "support_email"?: string;
    /**
     * Support phone shown to buyers, in E.164 format. Applied only to a newly created merchant.
     * minLength: 1. maxLength: 16. pattern: ^\+[1-9][0-9]{6,14}$.
     */
    "support_phone"?: string;
    /** Support URL shown to buyers. Applied only to a newly created merchant. minLength: 1. */
    "support_url"?: string;
    /**
     * IANA business time zone for a newly created merchant, such as America/Chicago. Used for
     * reports and business dates. Omit to leave it unset. Existing merchants keep their time zone.
     * minLength: 1.
     */
    "timezone"?: string;
    /** Public business website URL. Applied only to a newly created merchant. minLength: 1. */
    "website_url"?: string;
};
/** The request body for: Start onboarding flow. */
export type OnboardingStartRequestInput = OnboardingStartRequest;
/** A response containing `OnboardingStartResult` data. */
export type OnboardingStartResponse = {
    /**
     * Resource, collection, or operation result returned by this request. The verification token
     * and expiry returned after the verification email is accepted for asynchronous delivery.
     * Success does not confirm email delivery.
     */
    "data": OnboardingStartResult;
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
 * The verification token and expiry returned after the verification email is accepted for
 * asynchronous delivery. Success does not confirm email delivery.
 */
export type OnboardingStartResult = {
    /**
     * Time the email verification expires. Start onboarding again to request a new code after this
     * time. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "expires_at": string;
    /**
     * Token identifying the email verification. Send it with the emailed code to POST
     * /v1/onboarding/verify-email.
     */
    "verification_token": string;
};
/**
 * A merchant's onboarding status, profile, next step, requested capabilities, and whether an API
 * key can be issued.
 */
export type OnboardingState = {
    /**
     * Business country Flint uses in the selected environment. Before account setup, this is the
     * selected country or the country Flint would use if advance omits it. Omitted when Flint
     * cannot determine a country. Once account setup selects a country, it cannot change. Uses ISO
     * 3166-1 alpha-2 country codes. minLength: 2. maxLength: 2. pattern: ^[A-Z]{2}$. Example:
     * "US". Value enum: "US".
     */
    "country"?: "US" | (string & {});
    /**
     * ID of the merchant's default sandbox. Omitted when the merchant has no default sandbox.
     * Example: "test_01KEZF7C00JC77HTMTB2XHNPE0".
     */
    "default_sandbox_id"?: string;
    /** ID of the merchant this resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
    "merchant_id": string;
    /**
     * The step to take next. Omitted when no step is pending, such as while Flint prepares the
     * sandbox. A step that moves a merchant capability or readiness axis forward, with the party
     * that must do it (`owner`) and any required fields.
     */
    "next_step"?: ReadinessAction;
    /**
     * Contact and website details recorded for onboarding. Contact and website details recorded
     * for a merchant during onboarding.
     */
    "profile": OnboardingProfile;
    /**
     * Canonical Flint capability intent persisted on the selected stable provider-account target.
     * The initial merchant-account configuration always includes accept_card_payments and
     * receive_payouts and may also include accept_ach_debit_payments. minItems: 2. maxItems: 3.
     * uniqueItems: true. [] enum: "accept_card_payments", "receive_payouts",
     * "accept_ach_debit_payments". [] (Value): string. Value enum: "accept_card_payments",
     * "receive_payouts", "accept_ach_debit_payments".
     */
    "requested_capabilities"?: (Array<"accept_card_payments" | "receive_payouts" | "accept_ach_debit_payments" | (string & {})>);
    /**
     * Onboarding workflow status for activation and remediation, not a durable account-readiness
     * boolean. Value enum: "complete", "waiting_for_review", "needs_external_action",
     * "needs_input".
     */
    "status": "complete" | "waiting_for_review" | "needs_external_action" | "needs_input" | (string & {});
};
/** A response containing `OnboardingState` data. */
export type OnboardingStateResponse = {
    /**
     * Resource, collection, or operation result returned by this request. A merchant's onboarding
     * status, profile, next step, requested capabilities, and whether an API key can be issued.
     */
    "data": OnboardingState;
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
