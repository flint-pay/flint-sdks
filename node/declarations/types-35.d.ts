import type { ModifierGroup, MerchantWebhookEnvelope, MetadataMap, MetadataRequestInput } from './types-34.js';
import type { PartnerWebhookEnvelope } from './types-40.js';
import type { ResponseMeta, ResponseWarning } from './types-48.js';
import type { InputValue } from '../runtime.js';
import type { CreateModifierGroupRequestInput, CreateModifierSetRequestInput } from './types-9.js';
import type { UpdateModifierGroupRequestInput, UpdateModifierSetRequestInput } from './types-59.js';
import type { InlineModifierGroupRequest, InlineModifierGroupRequestInput } from './types-25.js';
import type { ReadinessMerchantAccountSession } from './types-46.js';
import type { DeveloperInitialAPIKeyRequestInput } from './types-20.js';
import type { OnboardingStartResult } from './types-36.js';
/**
 * The `modifier_group.archived` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type ModifierGroupArchivedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link ModifierGroup}. A group of choices that customize an item. */
    "data"?: {
        /** A group of choices that customize an item. */
        "object": ModifierGroup;
    };
    /** Value enum: "modifier_group.archived". */
    "event_type"?: "modifier_group.archived";
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
 * The `modifier_group.archived` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type ModifierGroupArchivedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link ModifierGroup}. A group of choices that customize an item. */
    "data"?: {
        /** A group of choices that customize an item. */
        "object": ModifierGroup;
    };
    /** Value enum: "modifier_group.archived". */
    "event_type"?: "modifier_group.archived";
});
export type ModifierGroupCreatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": ModifierGroup;
    };
    "event_type"?: "modifier_group.created";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": ModifierGroup;
    };
    "event_type"?: "modifier_group.created";
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
    "event_type": "modifier_group.created";
});
/**
 * The `modifier_group.created` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type ModifierGroupCreatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link ModifierGroup}. A group of choices that customize an item. */
    "data"?: {
        /** A group of choices that customize an item. */
        "object": ModifierGroup;
    };
    /** Value enum: "modifier_group.created". */
    "event_type"?: "modifier_group.created";
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
 * The `modifier_group.created` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type ModifierGroupCreatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link ModifierGroup}. A group of choices that customize an item. */
    "data"?: {
        /** A group of choices that customize an item. */
        "object": ModifierGroup;
    };
    /** Value enum: "modifier_group.created". */
    "event_type"?: "modifier_group.created";
});
/** A page of `ModifierGroup` objects. */
export type ModifierGroupListResponse = {
    /**
     * Modifier groups matching the request filters for this page. [] (Value): {@link
     * ModifierGroup}. A group of choices that customize an item.
     */
    "data": Array<ModifierGroup>;
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
/** A response containing `ModifierGroup` data. */
export type ModifierGroupResponse = {
    /** The modifier group returned by this operation. A group of choices that customize an item. */
    "data": ModifierGroup;
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
export type ModifierGroupUpdatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": ModifierGroup;
    };
    "event_type"?: "modifier_group.updated";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": ModifierGroup;
    };
    "event_type"?: "modifier_group.updated";
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
    "event_type": "modifier_group.updated";
});
/**
 * The `modifier_group.updated` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type ModifierGroupUpdatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link ModifierGroup}. A group of choices that customize an item. */
    "data"?: {
        /** A group of choices that customize an item. */
        "object": ModifierGroup;
    };
    /** Value enum: "modifier_group.updated". */
    "event_type"?: "modifier_group.updated";
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
 * The `modifier_group.updated` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type ModifierGroupUpdatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link ModifierGroup}. A group of choices that customize an item. */
    "data"?: {
        /** A group of choices that customize an item. */
        "object": ModifierGroup;
    };
    /** Value enum: "modifier_group.updated". */
    "event_type"?: "modifier_group.updated";
});
export type ModifierGroupsCreateParams = (InputValue<CreateModifierGroupRequestInput>);
export type ModifierGroupsDeleteParams = {
    /** Optional modifier group version last read by the caller. Format: uint64. minimum: 1. */
    "expected_version"?: InputValue<number>;
};
export type ModifierGroupsGetParams = {};
export type ModifierGroupsListParams = {
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
     * Filter by status. Repeat the parameter or send comma-separated values to match any of
     * several. Omitted, the list leaves out archived rows; name archived to include them. Accepts
     * repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in
     * first-seen order; empty or unknown entries are rejected. Values within this filter are ORed;
     * separate filters are ANDed. [] enum: "active", "inactive", "archived". Value enum: "active",
     * "inactive", "archived". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "active",
     * "inactive", "archived". anyOf[1][] (Value): string. Value enum: "active", "inactive",
     * "archived". anyOf[2] (Value): string. Value enum: "active", "inactive", "archived".
     */
    "status"?: InputValue<("active" | "inactive" | "archived") | readonly ("active" | "inactive" | "archived")[]>;
    /**
     * Filter by modifier group type. Accepts repeated keys, comma-separated values, or mixtures.
     * Values are trimmed and deduplicated in first-seen order; empty or unknown entries are
     * rejected. Values within this filter are ORed; separate filters are ANDed. [] enum: "list",
     * "text". Value enum: "list", "text". anyOf[1] (Value): Array of string. minItems: 1. [] enum:
     * "list", "text". anyOf[1][] (Value): string. Value enum: "list", "text". anyOf[2] (Value):
     * string. Value enum: "list", "text".
     */
    "modifier_group_type"?: InputValue<("list" | "text") | readonly ("list" | "text")[]>;
    /**
     * Exact-match filter on the caller-owned external reference ID. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: InputValue<string>;
    /**
     * Search across modifier group ID, external reference ID, name, and description. Text fields
     * match any part of the value, and %, _ and \ are ordinary characters, not wildcards. IDs
     * match from the start and need the type prefix, such as mg_01.
     */
    "query"?: InputValue<string>;
    /**
     * Field to sort by. Defaults to created_at; ties are broken by modifier_group_id. Default:
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
};
export type ModifierGroupsUpdateParams = (InputValue<UpdateModifierGroupRequestInput>);
/**
 * Settings for one modifier that apply only within a modifier set group, overriding the modifier
 * group's own values.
 */
export type ModifierOverride = {
    /**
     * Whether this modifier can be offered in this set. Defaults to true; the modifier must also
     * have status active. Default: true.
     */
    "available"?: boolean;
    /**
     * Overrides the modifier's default_quantity for this set. Omit it to use the modifier's value.
     * Ignored when the choice is unavailable. Quantities are whole numbers; fractional quantities
     * are not supported. Format: int64.
     */
    "default_quantity"?: number;
    /**
     * Overrides the modifier's line_item_tax_category for this set. Omit it to use the modifier's
     * value. Value enum: "general", "physical_goods", "digital_goods", "software", "saas",
     * "services", "professional_services", "food", "prepared_food", "clothing", "medical_goods",
     * "admission".
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
    /** Identifier of the list modifier these overrides apply to. minLength: 1. */
    "modifier_id": string;
    /**
     * Overrides the modifier's selected_by_default for this set. Omit it to use the modifier's
     * value. Ignored when the choice is unavailable.
     */
    "selected_by_default"?: boolean;
    /** Overrides the modifier's taxable for this set. Omit it to use the modifier's value. */
    "taxable"?: boolean;
    /**
     * Overrides the modifier's unit_price_delta_money for this set. Omit it to use the modifier's
     * value. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "unit_price_delta_money"?: MoneyValue;
};
/**
 * Settings for one modifier that apply only within a modifier set group, overriding the modifier
 * group's own values.
 */
export type ModifierOverrideInput = {
    /**
     * Whether this modifier can be offered in this set. Defaults to true; the modifier must also
     * have status active. Default: true.
     */
    "available"?: boolean;
    /**
     * Overrides the modifier's default_quantity for this set. Omit it to use the modifier's value.
     * Ignored when the choice is unavailable. Quantities are whole numbers; fractional quantities
     * are not supported. Format: int64.
     */
    "default_quantity"?: number;
    /**
     * Overrides the modifier's line_item_tax_category for this set. Omit it to use the modifier's
     * value. Value enum: "general", "physical_goods", "digital_goods", "software", "saas",
     * "services", "professional_services", "food", "prepared_food", "clothing", "medical_goods",
     * "admission".
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
    /** Identifier of the list modifier these overrides apply to. minLength: 1. */
    "modifier_id": string;
    /**
     * Overrides the modifier's selected_by_default for this set. Omit it to use the modifier's
     * value. Ignored when the choice is unavailable.
     */
    "selected_by_default"?: boolean;
    /** Overrides the modifier's taxable for this set. Omit it to use the modifier's value. */
    "taxable"?: boolean;
    /**
     * Overrides the modifier's unit_price_delta_money for this set. Omit it to use the modifier's
     * value. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "unit_price_delta_money"?: MoneyValueInput;
};
/**
 * A modifier you supply when creating or updating a modifier group, such as an add-on with a price
 * change.
 */
export type ModifierRequest = {
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
    /**
     * Stable identifier of the modifier. In a replacement request, include it to retain a modifier
     * or omit it to create one. minLength: 1.
     */
    "modifier_id"?: string;
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
     * Lifecycle status of the modifier. Only active modifiers can be offered to buyers. Value
     * enum: "active", "inactive".
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
 * A modifier you supply when creating or updating a modifier group, such as an add-on with a price
 * change.
 */
export type ModifierRequestInput = {
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
    /**
     * Stable identifier of the modifier. In a replacement request, include it to retain a modifier
     * or omit it to create one. minLength: 1.
     */
    "modifier_id"?: string;
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
     * Lifecycle status of the modifier. Only active modifiers can be offered to buyers. Value
     * enum: "active", "inactive".
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
/** A reusable collection of customization groups. */
export type ModifierSet = {
    /** When the modifier set was created, as an RFC3339 timestamp. Format: date-time. */
    "created_at"?: string;
    /** Caller-owned identifier for this resource in an external system. maxLength: 255. */
    "external_reference_id"?: string;
    /** Identifier of the merchant that owns this modifier set. */
    "merchant_id"?: string;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and
     * are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps
     * written before those limits may not satisfy them.
     */
    "metadata"?: MetadataMap;
    /**
     * Ordered group entries in this set, including references to reusable groups and groups owned
     * by the set. [] (Value): {@link ModifierSetGroup}. A modifier group as it appears in a
     * modifier set, with its selection limits, display options, and per-modifier overrides.
     */
    "modifier_groups": Array<ModifierSetGroup>;
    /** Stable identifier of the modifier set assigned to catalog items. */
    "modifier_set_id": string;
    /** Name used to identify this modifier set. */
    "name": string;
    /**
     * Lifecycle status of the modifier set. Only active sets can be offered to buyers; archived
     * sets remain readable and cannot be edited. Value enum: "active", "inactive", "archived".
     */
    "status": "active" | "inactive" | "archived" | (string & {});
    /**
     * When the modifier set, its group entries, or its inline groups last changed, as an RFC3339
     * timestamp. Format: date-time.
     */
    "updated_at"?: string;
    /**
     * Version of the modifier set, its group entries, and its inline groups. Send it as
     * expected_version when replacing modifier_groups. Format: uint64. minimum: 1.
     */
    "version": number;
};
export type ModifierSetArchivedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": ModifierSet;
    };
    "event_type"?: "modifier_set.archived";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": ModifierSet;
    };
    "event_type"?: "modifier_set.archived";
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
    "event_type": "modifier_set.archived";
});
/**
 * The `modifier_set.archived` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type ModifierSetArchivedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link ModifierSet}. A reusable collection of customization groups. */
    "data"?: {
        /** A reusable collection of customization groups. */
        "object": ModifierSet;
    };
    /** Value enum: "modifier_set.archived". */
    "event_type"?: "modifier_set.archived";
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
 * The `modifier_set.archived` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type ModifierSetArchivedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link ModifierSet}. A reusable collection of customization groups. */
    "data"?: {
        /** A reusable collection of customization groups. */
        "object": ModifierSet;
    };
    /** Value enum: "modifier_set.archived". */
    "event_type"?: "modifier_set.archived";
});
export type ModifierSetCreatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": ModifierSet;
    };
    "event_type"?: "modifier_set.created";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": ModifierSet;
    };
    "event_type"?: "modifier_set.created";
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
    "event_type": "modifier_set.created";
});
/**
 * The `modifier_set.created` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type ModifierSetCreatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link ModifierSet}. A reusable collection of customization groups. */
    "data"?: {
        /** A reusable collection of customization groups. */
        "object": ModifierSet;
    };
    /** Value enum: "modifier_set.created". */
    "event_type"?: "modifier_set.created";
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
 * The `modifier_set.created` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type ModifierSetCreatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link ModifierSet}. A reusable collection of customization groups. */
    "data"?: {
        /** A reusable collection of customization groups. */
        "object": ModifierSet;
    };
    /** Value enum: "modifier_set.created". */
    "event_type"?: "modifier_set.created";
});
/**
 * A modifier group as it appears in a modifier set, with its selection limits, display options,
 * and per-modifier overrides.
 */
export type ModifierSetGroup = ({
    /** Overrides the group's name for this set. Omit it to use the group's name. */
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
     * /v1/modifier-sets/{modifier_set_id}; /v1/modifier-groups doesn't return it. A group of
     * choices that customize an item.
     */
    "modifier_group"?: ModifierGroup;
    /** Identifier of the independent modifier group referenced when source is existing. */
    "modifier_group_id"?: string;
    /** Current name of the referenced modifier group. */
    "modifier_group_name"?: string;
    /**
     * Overrides for individual list modifiers in this set. A choice is offered only when its
     * status is active and its override's available is not false. [] (Value): {@link
     * ModifierOverride}. Settings for one modifier that apply only within a modifier set group,
     * overriding the modifier group's own values.
     */
    "modifier_overrides"?: Array<ModifierOverride>;
    /**
     * Stable identifier of this group entry within the set. In a replacement request, include it
     * to retain an entry or omit it to create one.
     */
    "modifier_set_group_id": string;
    /** Display position of this group within the set; lower values appear first. Format: int32. */
    "position": number;
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
     * Inline groups are owned by this modifier set. Existing groups are independent resources
     * referenced by this set. Value enum: "existing", "inline".
     */
    "source": "existing" | "inline" | (string & {});
})
    & ((Exclude<ModifierSetGroupExisting & object, readonly unknown[]>)
    | (Exclude<ModifierSetGroupInline & object, readonly unknown[]>)
    | (Record<string, unknown>));
/** The `existing` variant of `ModifierSetGroup`. */
export type ModifierSetGroupExisting = ({
    /** Overrides the group's name for this set. Omit it to use the group's name. */
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
     * /v1/modifier-sets/{modifier_set_id}; /v1/modifier-groups doesn't return it. A group of
     * choices that customize an item.
     */
    "modifier_group"?: ModifierGroup;
    /** Identifier of the independent modifier group referenced when source is existing. */
    "modifier_group_id": string;
    /** Current name of the referenced modifier group. */
    "modifier_group_name": string;
    /**
     * Overrides for individual list modifiers in this set. A choice is offered only when its
     * status is active and its override's available is not false. [] (Value): {@link
     * ModifierOverride}. Settings for one modifier that apply only within a modifier set group,
     * overriding the modifier group's own values.
     */
    "modifier_overrides"?: Array<ModifierOverride>;
    /**
     * Stable identifier of this group entry within the set. In a replacement request, include it
     * to retain an entry or omit it to create one.
     */
    "modifier_set_group_id": string;
    /** Display position of this group within the set; lower values appear first. Format: int32. */
    "position": number;
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
     * Inline groups are owned by this modifier set. Existing groups are independent resources
     * referenced by this set. Value enum: "existing".
     */
    "source": "existing" | (string & {});
})
    & (({
    /** References an independent modifier group. Value enum: "existing". */
    "source": "existing" | (string & {});
    /** Identifier of the independent modifier group referenced when source is existing. */
    "modifier_group_id": string;
    /** Current name of the referenced modifier group. */
    "modifier_group_name": string;
}));
/** The `inline` variant of `ModifierSetGroup`. */
export type ModifierSetGroupInline = ({
    /** Overrides the group's name for this set. Omit it to use the group's name. */
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
     * /v1/modifier-sets/{modifier_set_id}; /v1/modifier-groups doesn't return it. A group of
     * choices that customize an item.
     */
    "modifier_group": ModifierGroup;
    /** Identifier of the independent modifier group referenced when source is existing. */
    "modifier_group_id"?: string;
    /** Current name of the referenced modifier group. */
    "modifier_group_name"?: string;
    /**
     * Overrides for individual list modifiers in this set. A choice is offered only when its
     * status is active and its override's available is not false. [] (Value): {@link
     * ModifierOverride}. Settings for one modifier that apply only within a modifier set group,
     * overriding the modifier group's own values.
     */
    "modifier_overrides"?: Array<ModifierOverride>;
    /**
     * Stable identifier of this group entry within the set. In a replacement request, include it
     * to retain an entry or omit it to create one.
     */
    "modifier_set_group_id": string;
    /** Display position of this group within the set; lower values appear first. Format: int32. */
    "position": number;
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
     * Inline groups are owned by this modifier set. Existing groups are independent resources
     * referenced by this set. Value enum: "inline".
     */
    "source": "inline" | (string & {});
})
    & (({
    /** Defines a modifier group owned by this modifier set. Value enum: "inline". */
    "source": "inline" | (string & {});
    /**
     * Modifier group owned by this set when source is inline. Read this group through GET
     * /v1/modifier-sets/{modifier_set_id}; /v1/modifier-groups doesn't return it. A group of
     * choices that customize an item.
     */
    "modifier_group": ModifierGroup;
}));
/** The `existing` variant of `ModifierSetGroupInput`. */
export type ModifierSetGroupInputExisting = ({
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
    /**
     * Stable identifier of this group entry within the set. In a replacement request, include it
     * to retain an entry or omit it to create one. minLength: 1.
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
    /**
     * Stable identifier of this group entry within the set. In a replacement request, include it
     * to retain an entry or omit it to create one. minLength: 1.
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
     * 1.
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
    /**
     * Stable identifier of this group entry within the set. In a replacement request, include it
     * to retain an entry or omit it to create one. minLength: 1.
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
    /**
     * Stable identifier of this group entry within the set. In a replacement request, include it
     * to retain an entry or omit it to create one. minLength: 1.
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
    /**
     * Stable identifier of this group entry within the set. In a replacement request, include it
     * to retain an entry or omit it to create one. minLength: 1.
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
    /**
     * Stable identifier of this group entry within the set. In a replacement request, include it
     * to retain an entry or omit it to create one. minLength: 1.
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
        "object": ModifierSet;
    };
    "event_type"?: "modifier_set.updated";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": ModifierSet;
    };
    "event_type"?: "modifier_set.updated";
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
    "event_type": "modifier_set.updated";
});
/**
 * The `modifier_set.updated` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type ModifierSetUpdatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link ModifierSet}. A reusable collection of customization groups. */
    "data"?: {
        /** A reusable collection of customization groups. */
        "object": ModifierSet;
    };
    /** Value enum: "modifier_set.updated". */
    "event_type"?: "modifier_set.updated";
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
 * The `modifier_set.updated` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type ModifierSetUpdatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link ModifierSet}. A reusable collection of customization groups. */
    "data"?: {
        /** A reusable collection of customization groups. */
        "object": ModifierSet;
    };
    /** Value enum: "modifier_set.updated". */
    "event_type"?: "modifier_set.updated";
});
export type ModifierSetsCreateParams = (InputValue<CreateModifierSetRequestInput>);
export type ModifierSetsDeleteParams = {
    /** Optional modifier set version last read by the caller. Format: uint64. minimum: 1. */
    "expected_version"?: InputValue<number>;
};
export type ModifierSetsGetParams = {};
export type ModifierSetsListParams = {
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
     * Filter by status. Repeat the parameter or send comma-separated values to match any of
     * several. Omitted, the list leaves out archived rows; name archived to include them. Accepts
     * repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in
     * first-seen order; empty or unknown entries are rejected. Values within this filter are ORed;
     * separate filters are ANDed. [] enum: "active", "inactive", "archived". Value enum: "active",
     * "inactive", "archived". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "active",
     * "inactive", "archived". anyOf[1][] (Value): string. Value enum: "active", "inactive",
     * "archived". anyOf[2] (Value): string. Value enum: "active", "inactive", "archived".
     */
    "status"?: InputValue<("active" | "inactive" | "archived") | readonly ("active" | "inactive" | "archived")[]>;
    /**
     * Exact-match filter on the caller-owned external reference ID. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: InputValue<string>;
    /**
     * Search across modifier set ID, external reference ID, name, and description. Text fields
     * match any part of the value, and %, _ and \ are ordinary characters, not wildcards. IDs
     * match from the start and need the type prefix, such as ms_01.
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
};
export type ModifierSetsUpdateParams = (InputValue<UpdateModifierSetRequestInput>);
/**
 * Why a money movement action is blocked, with an error code, a message, next steps, and who can
 * resolve it.
 */
export type MoneyMovementBlockedReason = {
    "code": string;
    "message"?: string;
    "next_steps"?: string;
    "param"?: string;
    /** Value enum: "merchant", "flint", "integrator", "buyer". */
    "resolution_owner"?: "merchant" | "flint" | "integrator" | "buyer" | (string & {});
    "retryable"?: boolean;
};
/** How complete the history in a money movement list is and when it was last reconciled. */
export type MoneyMovementHistoryMeta = {
    /**
     * When Flint last finished reconciling this list's history with your processor. Absent until a
     * reconciliation finishes. Format: date-time.
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
    /** Trace identifier to include when contacting Flint about this request. */
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
/**
 * A suggested next step for resolving an error, warning, or blocked state, such as the API
 * operation to call or the scope it needs.
 */
export type NextAction = {
    /**
     * Action to take next. Use its target resource and required_fields to prepare the request.
     * Value enum: "get_operation", "get_checkout_session", "get_payment_intent",
     * "confirm_payment_intent", "capture_payment_intent", "cancel_payment_intent", "get_order",
     * "pay_order", "close_order", "add_line_items", "update_checkout_session",
     * "close_checkout_session", "create_refund", "get_refund", "get_dispute",
     * "review_onboarding_state", "create_dispute_response_session", "review_merchant_readiness",
     * "recreate_delivery_quote", "create_merchant_account_session",
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
    /** When this suggested action expires, in RFC3339 format. Format: date-time. */
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
    /** Machine-readable reason this action is suggested. */
    "reason_code"?: string;
    /** Explanation of why this action is suggested. */
    "reason_message"?: string;
    /** Field names that must be supplied to perform this action. [] (Value): string. */
    "required_fields"?: Array<string>;
    /**
     * API key scope required to call the public endpoint in url, when the action points at another
     * Flint API endpoint. Value enum: "accounts.api_keys.read", "accounts.api_keys.write",
     * "accounts.devices.read", "accounts.devices.write", "accounts.organizations.read",
     * "accounts.organizations.write", "accounts.workload_identities.read",
     * "accounts.workload_identities.write", "analytics.read", "checkouts.checkout_sessions.read",
     * "checkouts.checkout_sessions.write", "checkouts.payment_links.read",
     * "checkouts.payment_links.write", "commerce.bundles.read", "commerce.bundles.write",
     * "commerce.catalog.read", "commerce.catalog.write", "commerce.credit_notes.read",
     * "commerce.credit_notes.write", "commerce.delivery.read", "commerce.delivery.write",
     * "commerce.gift_cards.adjustments.write", "commerce.gift_cards.read",
     * "commerce.gift_cards.redemptions.write", "commerce.gift_cards.secrets.write",
     * "commerce.gift_cards.write", "commerce.inventory.allocation.write",
     * "commerce.inventory.policies.write", "commerce.inventory.read", "commerce.inventory.write",
     * "commerce.invoices.read", "commerce.invoices.write", "commerce.orders.read",
     * "commerce.orders.write", "commerce.products.read", "commerce.products.write",
     * "commerce.promotions.read", "commerce.promotions.write", "commerce.refunds.read",
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
    /** Whether a person must approve the action before it is performed. */
    "requires_human_confirmation"?: boolean;
    /** Suggested wait before performing the action, in milliseconds. Format: int32. */
    "suggested_delay_milliseconds"?: number;
    /** Public endpoint or launch URL for this remediation action, when applicable. */
    "url"?: string;
};
export type OauthPreviewPartnerInstallAuthorizationParams = {
    /** OAuth response type. Must be code. Value enum: "code". */
    "response_type"?: InputValue<"code">;
    /** Partner app client ID. */
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
     * mode, Flint uses the merchant's default sandbox. Example: "test_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     */
    "sandbox_id"?: InputValue<string>;
    /** Opaque state value returned to the partner callback. */
    "state"?: InputValue<string>;
};
export type OnboardingAdvanceParams = (InputValue<OnboardingAdvanceRequestInput>);
/** The request body for: Advance onboarding flow. */
export type OnboardingAdvanceRequest = {
    /**
     * ISO 3166-1 alpha-2 country code. minLength: 2. maxLength: 2. pattern: ^[A-Z]{2}$. Example:
     * "US". Value enum: "US".
     */
    "country"?: "US" | (string & {});
    /**
     * Contact and website details you submit for a merchant during onboarding. Send null to clear
     * a field.
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
     * Contact and website details you submit for a merchant during onboarding. Send null to clear
     * a field.
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
export type OnboardingCreateAPIKeyParams = (InputValue<DeveloperInitialAPIKeyRequestInput>);
export type OnboardingGetStateParams = {};
/** Contact and website details recorded for a merchant during onboarding. */
export type OnboardingProfile = {
    "email": string | null;
    "support_email"?: string;
    "support_phone"?: string;
    "support_url"?: string;
    "website_url"?: string;
};
/**
 * Contact and website details you submit for a merchant during onboarding. Send null to clear a
 * field.
 */
export type OnboardingProfileRequest = {
    /** Send null to clear it. minLength: 1. */
    "email"?: string | null;
    /** Send null to clear it. minLength: 1. */
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
export type OnboardingStartParams = (InputValue<OnboardingStartRequestInput>);
/** The request body for: Start onboarding flow. */
export type OnboardingStartRequest = {
    /** minLength: 1. */
    "email": string;
    /** minLength: 1. */
    "first_name": string;
    /** minLength: 1. */
    "last_name": string;
};
/** The request body for: Start onboarding flow. */
export type OnboardingStartRequestInput = OnboardingStartRequest;
/** A response containing `OnboardingStartResult` data. */
export type OnboardingStartResponse = {
    /**
     * The result of starting onboarding: whether email verification began, plus the verification
     * token and its expiry.
     */
    "data": OnboardingStartResult;
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
