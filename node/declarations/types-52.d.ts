import type { RevokeDeliveryDependencyTargetDeliveryMethodInput } from './types-51.js';
import type { ResponseMeta, ResourceReference, ResponseWarning } from './types-48.js';
import type { InputValue } from '../runtime.js';
import type { AddRiskListItemsRequestInput } from './types-0.js';
import type { CreateRiskListRequestInput, CreateRiskPreviewRequestInput, CreateRiskRuleRequestInput } from './types-11.js';
import type { UpdateRiskListRequestInput, UpdateRiskRuleRequestInput } from './types-60.js';
import type { MoneyValue, MoneyValueInput } from './types-35.js';
import type { GiftCardPurchaseRecipient, GiftCardNotificationRecipientInput } from './types-24.js';
/** A typed revocation target. Each target_type accepts only its resource-specific fields. */
export type RevokeDeliveryDependencyTargetDeliveryMethodRevision = ({
    /** minLength: 1. */
    "delivery_method_id": string;
    /** minLength: 1. */
    "delivery_method_revision_id": string;
    /** minLength: 1. */
    "delivery_rate_callback_id"?: string;
    /** minLength: 1. */
    "delivery_rate_callback_revision_id"?: string;
    /** minLength: 1. */
    "delivery_rate_callback_signing_key_id"?: string;
    /**
     * Exact version of the Location geography to revoke. Required for location_geography targets.
     * Format: int64. minimum: 1.
     */
    "location_geography_version"?: number;
    /** minLength: 1. */
    "location_id"?: string;
    /** Value enum: "delivery_method_revision". */
    "target_type": "delivery_method_revision" | (string & {});
})
    & (({
    /** Value enum: "delivery_method_revision". */
    "target_type": unknown;
    /** minLength: 1. */
    "delivery_method_id": string;
    /** minLength: 1. */
    "delivery_method_revision_id": string;
}));
/** A typed revocation target. Each target_type accepts only its resource-specific fields. */
export type RevokeDeliveryDependencyTargetDeliveryMethodRevisionInput = ({
    /** minLength: 1. */
    "delivery_method_id": string;
    /** minLength: 1. */
    "delivery_method_revision_id": string;
    /** minLength: 1. */
    "delivery_rate_callback_id"?: string;
    /** minLength: 1. */
    "delivery_rate_callback_revision_id"?: string;
    /** minLength: 1. */
    "delivery_rate_callback_signing_key_id"?: string;
    /**
     * Exact version of the Location geography to revoke. Required for location_geography targets.
     * Format: int64. minimum: 1.
     */
    "location_geography_version"?: number;
    /** minLength: 1. */
    "location_id"?: string;
    /** Value enum: "delivery_method_revision". */
    "target_type": "delivery_method_revision";
})
    & (({
    /** Value enum: "delivery_method_revision". */
    "target_type": "delivery_method_revision";
    /** minLength: 1. */
    "delivery_method_id": string;
    /** minLength: 1. */
    "delivery_method_revision_id": string;
})
    & (({
    "location_id"?: never;
})
    & ({
    "location_geography_version"?: never;
})
    & ({
    "delivery_rate_callback_id"?: never;
})
    & ({
    "delivery_rate_callback_revision_id"?: never;
})
    & ({
    "delivery_rate_callback_signing_key_id"?: never;
})));
/** A typed revocation target. Each target_type accepts only its resource-specific fields. */
export type RevokeDeliveryDependencyTargetDeliveryRateCallback = ({
    /** minLength: 1. */
    "delivery_method_id"?: string;
    /** minLength: 1. */
    "delivery_method_revision_id"?: string;
    /** minLength: 1. */
    "delivery_rate_callback_id": string;
    /** minLength: 1. */
    "delivery_rate_callback_revision_id"?: string;
    /** minLength: 1. */
    "delivery_rate_callback_signing_key_id"?: string;
    /**
     * Exact version of the Location geography to revoke. Required for location_geography targets.
     * Format: int64. minimum: 1.
     */
    "location_geography_version"?: number;
    /** minLength: 1. */
    "location_id"?: string;
    /** Value enum: "delivery_rate_callback". */
    "target_type": "delivery_rate_callback" | (string & {});
})
    & (({
    /** Value enum: "delivery_rate_callback". */
    "target_type": unknown;
    /** minLength: 1. */
    "delivery_rate_callback_id": string;
}));
/** A typed revocation target. Each target_type accepts only its resource-specific fields. */
export type RevokeDeliveryDependencyTargetDeliveryRateCallbackInput = ({
    /** minLength: 1. */
    "delivery_method_id"?: string;
    /** minLength: 1. */
    "delivery_method_revision_id"?: string;
    /** minLength: 1. */
    "delivery_rate_callback_id": string;
    /** minLength: 1. */
    "delivery_rate_callback_revision_id"?: string;
    /** minLength: 1. */
    "delivery_rate_callback_signing_key_id"?: string;
    /**
     * Exact version of the Location geography to revoke. Required for location_geography targets.
     * Format: int64. minimum: 1.
     */
    "location_geography_version"?: number;
    /** minLength: 1. */
    "location_id"?: string;
    /** Value enum: "delivery_rate_callback". */
    "target_type": "delivery_rate_callback";
})
    & (({
    /** Value enum: "delivery_rate_callback". */
    "target_type": "delivery_rate_callback";
    /** minLength: 1. */
    "delivery_rate_callback_id": string;
})
    & (({
    "location_id"?: never;
})
    & ({
    "location_geography_version"?: never;
})
    & ({
    "delivery_rate_callback_revision_id"?: never;
})
    & ({
    "delivery_rate_callback_signing_key_id"?: never;
})
    & ({
    "delivery_method_id"?: never;
})
    & ({
    "delivery_method_revision_id"?: never;
})));
/** A typed revocation target. Each target_type accepts only its resource-specific fields. */
export type RevokeDeliveryDependencyTargetDeliveryRateCallbackRevision = ({
    /** minLength: 1. */
    "delivery_method_id"?: string;
    /** minLength: 1. */
    "delivery_method_revision_id"?: string;
    /** minLength: 1. */
    "delivery_rate_callback_id": string;
    /** minLength: 1. */
    "delivery_rate_callback_revision_id": string;
    /** minLength: 1. */
    "delivery_rate_callback_signing_key_id"?: string;
    /**
     * Exact version of the Location geography to revoke. Required for location_geography targets.
     * Format: int64. minimum: 1.
     */
    "location_geography_version"?: number;
    /** minLength: 1. */
    "location_id"?: string;
    /** Value enum: "delivery_rate_callback_revision". */
    "target_type": "delivery_rate_callback_revision" | (string & {});
})
    & (({
    /** Value enum: "delivery_rate_callback_revision". */
    "target_type": unknown;
    /** minLength: 1. */
    "delivery_rate_callback_id": string;
    /** minLength: 1. */
    "delivery_rate_callback_revision_id": string;
}));
/** A typed revocation target. Each target_type accepts only its resource-specific fields. */
export type RevokeDeliveryDependencyTargetDeliveryRateCallbackRevisionInput = ({
    /** minLength: 1. */
    "delivery_method_id"?: string;
    /** minLength: 1. */
    "delivery_method_revision_id"?: string;
    /** minLength: 1. */
    "delivery_rate_callback_id": string;
    /** minLength: 1. */
    "delivery_rate_callback_revision_id": string;
    /** minLength: 1. */
    "delivery_rate_callback_signing_key_id"?: string;
    /**
     * Exact version of the Location geography to revoke. Required for location_geography targets.
     * Format: int64. minimum: 1.
     */
    "location_geography_version"?: number;
    /** minLength: 1. */
    "location_id"?: string;
    /** Value enum: "delivery_rate_callback_revision". */
    "target_type": "delivery_rate_callback_revision";
})
    & (({
    /** Value enum: "delivery_rate_callback_revision". */
    "target_type": "delivery_rate_callback_revision";
    /** minLength: 1. */
    "delivery_rate_callback_id": string;
    /** minLength: 1. */
    "delivery_rate_callback_revision_id": string;
})
    & (({
    "location_id"?: never;
})
    & ({
    "location_geography_version"?: never;
})
    & ({
    "delivery_rate_callback_signing_key_id"?: never;
})
    & ({
    "delivery_method_id"?: never;
})
    & ({
    "delivery_method_revision_id"?: never;
})));
/** A typed revocation target. Each target_type accepts only its resource-specific fields. */
export type RevokeDeliveryDependencyTargetDeliveryRateCallbackSigningKey = ({
    /** minLength: 1. */
    "delivery_method_id"?: string;
    /** minLength: 1. */
    "delivery_method_revision_id"?: string;
    /** minLength: 1. */
    "delivery_rate_callback_id"?: string;
    /** minLength: 1. */
    "delivery_rate_callback_revision_id"?: string;
    /** minLength: 1. */
    "delivery_rate_callback_signing_key_id": string;
    /**
     * Exact version of the Location geography to revoke. Required for location_geography targets.
     * Format: int64. minimum: 1.
     */
    "location_geography_version"?: number;
    /** minLength: 1. */
    "location_id"?: string;
    /** Value enum: "delivery_rate_callback_signing_key". */
    "target_type": "delivery_rate_callback_signing_key" | (string & {});
})
    & (({
    /** Value enum: "delivery_rate_callback_signing_key". */
    "target_type": unknown;
    /** minLength: 1. */
    "delivery_rate_callback_signing_key_id": string;
}));
/** A typed revocation target. Each target_type accepts only its resource-specific fields. */
export type RevokeDeliveryDependencyTargetDeliveryRateCallbackSigningKeyInput = ({
    /** minLength: 1. */
    "delivery_method_id"?: string;
    /** minLength: 1. */
    "delivery_method_revision_id"?: string;
    /** minLength: 1. */
    "delivery_rate_callback_id"?: string;
    /** minLength: 1. */
    "delivery_rate_callback_revision_id"?: string;
    /** minLength: 1. */
    "delivery_rate_callback_signing_key_id": string;
    /**
     * Exact version of the Location geography to revoke. Required for location_geography targets.
     * Format: int64. minimum: 1.
     */
    "location_geography_version"?: number;
    /** minLength: 1. */
    "location_id"?: string;
    /** Value enum: "delivery_rate_callback_signing_key". */
    "target_type": "delivery_rate_callback_signing_key";
})
    & (({
    /** Value enum: "delivery_rate_callback_signing_key". */
    "target_type": "delivery_rate_callback_signing_key";
    /** minLength: 1. */
    "delivery_rate_callback_signing_key_id": string;
})
    & (({
    "location_id"?: never;
})
    & ({
    "location_geography_version"?: never;
})
    & ({
    "delivery_rate_callback_id"?: never;
})
    & ({
    "delivery_rate_callback_revision_id"?: never;
})
    & ({
    "delivery_method_id"?: never;
})
    & ({
    "delivery_method_revision_id"?: never;
})));
/** A typed revocation target. Each target_type accepts only its resource-specific fields. */
export type RevokeDeliveryDependencyTargetInput = ({
    /** minLength: 1. */
    "delivery_method_id"?: string;
    /** minLength: 1. */
    "delivery_method_revision_id"?: string;
    /** minLength: 1. */
    "delivery_rate_callback_id"?: string;
    /** minLength: 1. */
    "delivery_rate_callback_revision_id"?: string;
    /** minLength: 1. */
    "delivery_rate_callback_signing_key_id"?: string;
    /**
     * Exact version of the Location geography to revoke. Required for location_geography targets.
     * Format: int64. minimum: 1.
     */
    "location_geography_version"?: number;
    /** minLength: 1. */
    "location_id"?: string;
    /**
     * Value enum: "location_geography", "delivery_rate_callback_signing_key",
     * "delivery_rate_callback", "delivery_rate_callback_revision", "delivery_method",
     * "delivery_method_revision".
     */
    "target_type": "location_geography"
        | "delivery_rate_callback_signing_key"
        | "delivery_rate_callback"
        | "delivery_rate_callback_revision"
        | "delivery_method"
        | "delivery_method_revision";
})
    & ((Exclude<RevokeDeliveryDependencyTargetLocationGeographyInput & object, readonly unknown[]>)
    | (Exclude<RevokeDeliveryDependencyTargetDeliveryRateCallbackSigningKeyInput & object, readonly unknown[]>)
    | (Exclude<RevokeDeliveryDependencyTargetDeliveryRateCallbackInput & object, readonly unknown[]>)
    | (Exclude<RevokeDeliveryDependencyTargetDeliveryRateCallbackRevisionInput & object, readonly unknown[]>)
    | (Exclude<RevokeDeliveryDependencyTargetDeliveryMethodInput & object, readonly unknown[]>)
    | (Exclude<RevokeDeliveryDependencyTargetDeliveryMethodRevisionInput & object, readonly unknown[]>));
/** A typed revocation target. Each target_type accepts only its resource-specific fields. */
export type RevokeDeliveryDependencyTargetLocationGeography = ({
    /** minLength: 1. */
    "delivery_method_id"?: string;
    /** minLength: 1. */
    "delivery_method_revision_id"?: string;
    /** minLength: 1. */
    "delivery_rate_callback_id"?: string;
    /** minLength: 1. */
    "delivery_rate_callback_revision_id"?: string;
    /** minLength: 1. */
    "delivery_rate_callback_signing_key_id"?: string;
    /**
     * Exact version of the Location geography to revoke. Required for location_geography targets.
     * Format: int64. minimum: 1.
     */
    "location_geography_version": number;
    /** minLength: 1. */
    "location_id": string;
    /** Value enum: "location_geography". */
    "target_type": "location_geography" | (string & {});
})
    & (({
    /** Value enum: "location_geography". */
    "target_type": unknown;
    /** minLength: 1. */
    "location_id": string;
    /**
     * Exact version of the Location geography to revoke. Required for location_geography targets.
     * Format: int64. minimum: 1.
     */
    "location_geography_version": number;
}));
/** A typed revocation target. Each target_type accepts only its resource-specific fields. */
export type RevokeDeliveryDependencyTargetLocationGeographyInput = ({
    /** minLength: 1. */
    "delivery_method_id"?: string;
    /** minLength: 1. */
    "delivery_method_revision_id"?: string;
    /** minLength: 1. */
    "delivery_rate_callback_id"?: string;
    /** minLength: 1. */
    "delivery_rate_callback_revision_id"?: string;
    /** minLength: 1. */
    "delivery_rate_callback_signing_key_id"?: string;
    /**
     * Exact version of the Location geography to revoke. Required for location_geography targets.
     * Format: int64. minimum: 1.
     */
    "location_geography_version": number;
    /** minLength: 1. */
    "location_id": string;
    /** Value enum: "location_geography". */
    "target_type": "location_geography";
})
    & (({
    /** Value enum: "location_geography". */
    "target_type": "location_geography";
    /** minLength: 1. */
    "location_id": string;
    /**
     * Exact version of the Location geography to revoke. Required for location_geography targets.
     * Format: int64. minimum: 1.
     */
    "location_geography_version": number;
})
    & (({
    "delivery_rate_callback_id"?: never;
})
    & ({
    "delivery_rate_callback_revision_id"?: never;
})
    & ({
    "delivery_rate_callback_signing_key_id"?: never;
})
    & ({
    "delivery_method_id"?: never;
})
    & ({
    "delivery_method_revision_id"?: never;
})));
/**
 * One attribute a risk rule can test, with its value type, allowed operators, and whether it is
 * currently available.
 */
export type RiskAttribute = {
    /** Value enum: "pre_authorization", "post_authorization". */
    "available_from": "pre_authorization" | "post_authorization" | (string & {});
    /**  [] (Value): string. */
    "enum_values"?: Array<string>;
    /** Whether the attribute can be used in rules in this environment. */
    "is_available": boolean;
    /** Whether the attribute can be missing from a payment. */
    "is_nullable": boolean;
    /** Value enum: "not_applicable_except_is_missing". */
    "missing_value_behavior": "not_applicable_except_is_missing" | (string & {});
    "name": string;
    /**
     * Operators accepted by this attribute. [] enum: "eq", "neq", "gt", "gte", "lt", "lte", "in",
     * "in_list", "is_missing". [] (Value): string. Value enum: "eq", "neq", "gt", "gte", "lt",
     * "lte", "in", "in_list", "is_missing".
     */
    "operators": Array<"eq" | "neq" | "gt" | "gte" | "lt" | "lte" | "in" | "in_list" | "is_missing" | (string & {})>;
    /** Value enum: "risk_scoring_not_enabled", "ip_geolocation_not_enabled". */
    "unavailable_reason"?: "risk_scoring_not_enabled" | "ip_geolocation_not_enabled" | (string & {});
    /**
     * Value enum: "money", "currency", "string", "enum", "country", "email", "ip_address",
     * "boolean", "integer".
     */
    "value_type": "money"
        | "currency"
        | "string"
        | "enum"
        | "country"
        | "email"
        | "ip_address"
        | "boolean"
        | "integer"
        | (string & {});
};
/** The attributes available to risk rules, in the current environment. */
export type RiskAttributeRegistry = {
    /**
     *  [] (Value): {@link RiskAttribute}. One attribute a risk rule can test, with its value type,
     * allowed operators, and whether it is currently available.
     */
    "attributes": Array<RiskAttribute>;
};
/** A response containing `RiskAttributeRegistry` data. */
export type RiskAttributeRegistryResponse = {
    /** The attributes available to risk rules, in the current environment. */
    "data": RiskAttributeRegistry;
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
/** A collection of values used in payment risk rules. */
export type RiskList = {
    /**
     * Name rules use to refer to this list, such as flagged_emails: a lowercase letter, then up to
     * 127 lowercase letters, digits, or underscores. Set at creation and never changed.
     */
    "alias": string;
    /** RFC3339 timestamp. Format: date-time. */
    "archived_at": string | null;
    /** RFC3339 timestamp. Format: date-time. */
    "created_at": string;
    /**
     * The credential that created this list. Null when Flint created it, as for Flint's default
     * lists. The reference may name an API key in the other mode. anyOf[1] (Value): {@link
     * ResourceReference}. A reference to another resource by `resource_type` and `resource_id`.
     * anyOf[2] (Value): null.
     */
    "created_by": ((ResourceReference) | (null));
    /** Number of values on the list now. Format: int64. */
    "item_count": number;
    /**
     * Values are trimmed and compared exactly after item-type normalization for deduplication and
     * membership. card_fingerprint is the 32-character hexadecimal value from
     * PaymentMethod.fingerprint and is lowercased; case_sensitive_string preserves case and
     * Unicode composition. string and email are lowercased, with accents preserved. email requires
     * a bare address. email_domain is lowercased, has one final dot removed, and converts
     * internationalized domains to ASCII. ip_address uses canonical IP form, including IPv4-mapped
     * IPv6 conversion to IPv4. country uses uppercase ISO codes. card_bin preserves 6 through 8
     * digits, including leading zeros, and matches the full value. customer_id preserves the
     * validated ID. Value enum: "card_fingerprint", "card_bin", "email", "email_domain",
     * "ip_address", "country", "customer_id", "string", "case_sensitive_string".
     */
    "item_type": "card_fingerprint"
        | "card_bin"
        | "email"
        | "email_domain"
        | "ip_address"
        | "country"
        | "customer_id"
        | "string"
        | "case_sensitive_string"
        | (string & {});
    "name": string;
    /**
     * Whether Flint manages the list or the merchant created it. Value enum: "system_default",
     * "merchant".
     */
    "origin": "system_default" | "merchant" | (string & {});
    "risk_list_id": string;
    /** Value enum: "active", "archived". */
    "status": "active" | "archived" | (string & {});
    /** RFC3339 timestamp. Format: date-time. */
    "updated_at": string;
    /**
     * Version of persisted list configuration and item-count changes. External observations do not
     * advance this counter. Format: uint64. minimum: 1.
     */
    "version": number;
};
/** One value in a payment risk list. */
export type RiskListItem = {
    /** RFC3339 timestamp. Format: date-time. */
    "created_at": string;
    /**
     * The credential that created this list item. Null when Flint created it. The reference may
     * name an API key in the other mode. anyOf[1] (Value): {@link ResourceReference}. A reference
     * to another resource by `resource_type` and `resource_id`. anyOf[2] (Value): null.
     */
    "created_by": ((ResourceReference) | (null));
    "risk_list_id": string;
    "risk_list_item_id": string;
    /**
     * The value as stored after item_type normalization, which is what payments are matched
     * against.
     */
    "value": string;
};
/** The risk list item matched or created for one requested value, and its creation outcome. */
export type RiskListItemAddition = {
    /** Value enum: "created", "existing". */
    "outcome": "created" | "existing" | (string & {});
    /** One value in a payment risk list. */
    "risk_list_item": RiskListItem;
};
/** A page of `RiskListItem` objects. */
export type RiskListItemListResponse = {
    /**  [] (Value): {@link RiskListItem}. One value in a payment risk list. */
    "data": Array<RiskListItem>;
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
/** A response containing `RiskListItem` data. */
export type RiskListItemResponse = {
    /** One value in a payment risk list. */
    "data": RiskListItem;
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
/** A page of `RiskList` objects. */
export type RiskListListResponse = {
    /**  [] (Value): {@link RiskList}. A collection of values used in payment risk rules. */
    "data": Array<RiskList>;
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
/** A response containing `RiskList` data. */
export type RiskListResourceResponse = {
    /** A collection of values used in payment risk rules. */
    "data": RiskList;
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
export type RiskListsCreateItemsParams = (InputValue<AddRiskListItemsRequestInput>);
export type RiskListsCreateParams = (InputValue<CreateRiskListRequestInput>);
export type RiskListsDeleteItemParams = {};
export type RiskListsDeleteParams = {
    /** Optional risk list version last read by the caller. Format: uint64. minimum: 1. */
    "expected_version"?: InputValue<number>;
};
export type RiskListsGetItemParams = {};
export type RiskListsGetParams = {};
export type RiskListsListParams = {
    /**
     * Exact-match filter on the lowercase list alias. No whitespace or case normalization is
     * applied. minLength: 1. maxLength: 128. pattern: ^[a-z][a-z0-9_]{0,127}$.
     */
    "alias"?: InputValue<string>;
    /**
     * Filter by status. Repeat the parameter or send comma-separated values to match any of
     * several. Omitted, the list leaves out archived rows; name archived to include them. Accepts
     * repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in
     * first-seen order; empty or unknown entries are rejected. Values within this filter are ORed;
     * separate filters are ANDed. [] enum: "active", "archived". Value enum: "active", "archived".
     * anyOf[1] (Value): Array of string. minItems: 1. [] enum: "active", "archived". anyOf[1][]
     * (Value): string. Value enum: "active", "archived". anyOf[2] (Value): string. Value enum:
     * "active", "archived".
     */
    "status"?: InputValue<("active" | "archived") | readonly ("active" | "archived")[]>;
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
export type RiskListsListRiskListItemsParams = {
    /**
     * Exact-match filter after normalization for the parent list's item_type. Accepts 1 through
     * 512 Unicode characters, following the same normalization as item creation. Commas are
     * literal. Values are trimmed and compared exactly after item-type normalization for
     * deduplication and membership. card_fingerprint is the 32-character hexadecimal value from
     * PaymentMethod.fingerprint and is lowercased; case_sensitive_string preserves case and
     * Unicode composition. string and email are lowercased, with accents preserved. email requires
     * a bare address. email_domain is lowercased, has one final dot removed, and converts
     * internationalized domains to ASCII. ip_address uses canonical IP form, including IPv4-mapped
     * IPv6 conversion to IPv4. country uses uppercase ISO codes. card_bin preserves 6 through 8
     * digits, including leading zeros, and matches the full value. customer_id preserves the
     * validated ID. minLength: 1. maxLength: 512.
     */
    "value"?: InputValue<string>;
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
export type RiskListsUpdateParams = (InputValue<UpdateRiskListRequestInput>);
/**
 * A node in a risk rule condition: a comparison of an attribute, or an `all`, `any`, or `not`
 * group of other nodes.
 */
export type RiskPredicateNode = ((RiskPredicateNodeAll)
    | (RiskPredicateNodeAny)
    | (RiskPredicateNodeNot)
    | (RiskPredicateNodeComparison)
    | (RiskPredicateNodeMoneyComparison)
    | (RiskPredicateNodeIn)
    | (RiskPredicateNodeInList)
    | (RiskPredicateNodeIsMissing)
    | (Record<string, unknown>));
/** The `All` variant of `RiskPredicateNode`. */
export type RiskPredicateNodeAll = {
    /**
     * minItems: 1. maxItems: 50. [] (Value): {@link RiskPredicateNode}. A node in a risk rule
     * condition: a comparison of an attribute, or an `all`, `any`, or `not` group of other nodes.
     */
    "all": Array<RiskPredicateNode>;
};
/** The `All` variant of `RiskPredicateNode`. */
export type RiskPredicateNodeAllInput = {
    /**
     * minItems: 1. maxItems: 50. [] (Value): {@link RiskPredicateNodeInput}. A node in a risk rule
     * condition: a comparison of an attribute, or an `all`, `any`, or `not` group of other nodes.
     */
    "all": Array<RiskPredicateNodeInput>;
};
/** The `Any` variant of `RiskPredicateNode`. */
export type RiskPredicateNodeAny = {
    /**
     * minItems: 1. maxItems: 50. [] (Value): {@link RiskPredicateNode}. A node in a risk rule
     * condition: a comparison of an attribute, or an `all`, `any`, or `not` group of other nodes.
     */
    "any": Array<RiskPredicateNode>;
};
/** The `Any` variant of `RiskPredicateNode`. */
export type RiskPredicateNodeAnyInput = {
    /**
     * minItems: 1. maxItems: 50. [] (Value): {@link RiskPredicateNodeInput}. A node in a risk rule
     * condition: a comparison of an attribute, or an `all`, `any`, or `not` group of other nodes.
     */
    "any": Array<RiskPredicateNodeInput>;
};
/** The `Comparison` variant of `RiskPredicateNode`. */
export type RiskPredicateNodeComparison = {
    /** minLength: 1. maxLength: 280. */
    "attribute": string;
    /** Value enum: "eq", "neq", "gt", "gte", "lt", "lte". */
    "operator": "eq" | "neq" | "gt" | "gte" | "lt" | "lte" | (string & {});
    /**
     *  oneOf[1] (Value): string. minLength: 1. oneOf[2] (Value): integer. oneOf[3] (Value):
     * boolean.
     */
    "value": ((string) | (number) | (boolean) | (unknown));
};
/** The `Comparison` variant of `RiskPredicateNode`. */
export type RiskPredicateNodeComparisonInput = {
    /** minLength: 1. maxLength: 280. */
    "attribute": string;
    /** Value enum: "eq", "neq", "gt", "gte", "lt", "lte". */
    "operator": "eq" | "neq" | "gt" | "gte" | "lt" | "lte";
    /**
     *  oneOf[1] (Value): string. minLength: 1. oneOf[2] (Value): integer. oneOf[3] (Value):
     * boolean.
     */
    "value": ((string) | (number) | (boolean));
};
/** The `In` variant of `RiskPredicateNode`. */
export type RiskPredicateNodeIn = {
    /** minLength: 1. maxLength: 280. */
    "attribute": string;
    /** Value enum: "in". */
    "operator": "in" | (string & {});
    /**
     * minItems: 1. maxItems: 100. [] (Value): string or integer or boolean. [].oneOf[1] (Value):
     * string. minLength: 1. [].oneOf[2] (Value): integer. [].oneOf[3] (Value): boolean.
     */
    "values": Array<((string) | (number) | (boolean) | (unknown))>;
};
/** The `In` variant of `RiskPredicateNode`. */
export type RiskPredicateNodeInInput = {
    /** minLength: 1. maxLength: 280. */
    "attribute": string;
    /** Value enum: "in". */
    "operator": "in";
    /**
     * minItems: 1. maxItems: 100. [] (Value): string or integer or boolean. [].oneOf[1] (Value):
     * string. minLength: 1. [].oneOf[2] (Value): integer. [].oneOf[3] (Value): boolean.
     */
    "values": Array<((string) | (number) | (boolean))>;
};
/** The `In list` variant of `RiskPredicateNode`. */
export type RiskPredicateNodeInList = {
    /** minLength: 1. maxLength: 280. */
    "attribute": string;
    /** minLength: 1. pattern: ^[a-z][a-z0-9_]{0,127}$. */
    "list_alias": string;
    /** Value enum: "in_list". */
    "operator": "in_list" | (string & {});
};
/** The `In list` variant of `RiskPredicateNode`. */
export type RiskPredicateNodeInListInput = {
    /** minLength: 1. maxLength: 280. */
    "attribute": string;
    /** minLength: 1. pattern: ^[a-z][a-z0-9_]{0,127}$. */
    "list_alias": string;
    /** Value enum: "in_list". */
    "operator": "in_list";
};
/**
 * A node in a risk rule condition: a comparison of an attribute, or an `all`, `any`, or `not`
 * group of other nodes.
 */
export type RiskPredicateNodeInput = ((RiskPredicateNodeAllInput)
    | (RiskPredicateNodeAnyInput)
    | (RiskPredicateNodeNotInput)
    | (RiskPredicateNodeComparisonInput)
    | (RiskPredicateNodeMoneyComparisonInput)
    | (RiskPredicateNodeInInput)
    | (RiskPredicateNodeInListInput)
    | (RiskPredicateNodeIsMissingInput));
/** The `Is missing` variant of `RiskPredicateNode`. */
export type RiskPredicateNodeIsMissing = {
    /** minLength: 1. maxLength: 280. */
    "attribute": string;
    /** Value enum: "is_missing". */
    "operator": "is_missing" | (string & {});
};
/** The `Is missing` variant of `RiskPredicateNode`. */
export type RiskPredicateNodeIsMissingInput = {
    /** minLength: 1. maxLength: 280. */
    "attribute": string;
    /** Value enum: "is_missing". */
    "operator": "is_missing";
};
/** The `Money comparison` variant of `RiskPredicateNode`. */
export type RiskPredicateNodeMoneyComparison = {
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "amount_money": MoneyValue;
    /** Value enum: "amount_money". */
    "attribute": "amount_money" | (string & {});
    /** Value enum: "eq", "neq", "gt", "gte", "lt", "lte". */
    "operator": "eq" | "neq" | "gt" | "gte" | "lt" | "lte" | (string & {});
};
/** The `Money comparison` variant of `RiskPredicateNode`. */
export type RiskPredicateNodeMoneyComparisonInput = {
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "amount_money": MoneyValueInput;
    /** Value enum: "amount_money". */
    "attribute": "amount_money";
    /** Value enum: "eq", "neq", "gt", "gte", "lt", "lte". */
    "operator": "eq" | "neq" | "gt" | "gte" | "lt" | "lte";
};
/** The `Not` variant of `RiskPredicateNode`. */
export type RiskPredicateNodeNot = {
    /**
     * A node in a risk rule condition: a comparison of an attribute, or an `all`, `any`, or `not`
     * group of other nodes.
     */
    "not": RiskPredicateNode;
};
/** The `Not` variant of `RiskPredicateNode`. */
export type RiskPredicateNodeNotInput = {
    /**
     * A node in a risk rule condition: a comparison of an attribute, or an `all`, `any`, or `not`
     * group of other nodes.
     */
    "not": RiskPredicateNodeInput;
};
/**
 * The result of validating a proposed risk rule: whether it is valid, any issues found, warnings,
 * and an analysis of the rule.
 */
export type RiskPreview = {
    /**
     * Rule analysis. Null when the proposed rule is invalid. anyOf[1] (Value): {@link
     * RiskRuleAnalysis}. What a valid risk rule uses: its evaluation stage, the attributes and
     * list aliases it references, and which payments it applies to. anyOf[2] (Value): null.
     */
    "analysis": ((RiskRuleAnalysis) | (null));
    /** Whether the proposed rule is valid. */
    "is_valid": boolean;
    /**
     * Every rule validation issue in validation order. Empty when the rule is valid. [] (Value):
     * {@link RiskRuleIssue}. A problem that stops a saved or proposed risk rule from running, with
     * a `code`, a message, and the `path` to the part of the rule at fault.
     */
    "issues": Array<RiskRuleIssue>;
    /**
     * Advisory warnings. Empty when the proposed rule is invalid. [] (Value): {@link
     * ResponseWarning}. A non-blocking condition reported with a response. The `code` identifies
     * the condition and `severity` says how urgent it is.
     */
    "warnings": Array<ResponseWarning>;
};
/** A response containing `RiskPreview` data. */
export type RiskPreviewResponse = {
    /**
     * The result of validating a proposed risk rule: whether it is valid, any issues found,
     * warnings, and an analysis of the rule.
     */
    "data": RiskPreview;
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
export type RiskPreviewsCreateParams = (CreateRiskPreviewRequestInput);
/** A rule for assessing and handling payment risk. */
export type RiskRule = {
    /** Value enum: "allow", "block", "review", "require_3ds". */
    "action": "allow" | "block" | "review" | "require_3ds" | (string & {});
    /** Value enum: "all_payments", "on_session_only". */
    "applicability": "all_payments" | "on_session_only" | (string & {});
    /** RFC3339 timestamp. Format: date-time. */
    "archived_at": string | null;
    /**  [] (Value): string. */
    "attributes_used": Array<string>;
    /** RFC3339 timestamp. Format: date-time. */
    "created_at": string;
    /**
     * The credential that created this rule. Null when Flint created it, as for Flint's default
     * rules. The reference may name an API key in the other mode. anyOf[1] (Value): {@link
     * ResourceReference}. A reference to another resource by `resource_type` and `resource_id`.
     * anyOf[2] (Value): null.
     */
    "created_by": ((ResourceReference) | (null));
    /** Your note on what the rule is for. Leading and trailing whitespace is trimmed. */
    "description": string;
    /**
     * Problems that stop Flint from evaluating this rule. Empty when the rule can run. An active
     * rule with issues is skipped on every payment and protects nothing until you fix it. An
     * inactive rule with issues can't be activated until you fix it. [] (Value): {@link
     * RiskRuleIssue}. A problem that stops a saved or proposed risk rule from running, with a
     * `code`, a message, and the `path` to the part of the rule at fault.
     */
    "issues": Array<RiskRuleIssue>;
    /** Value enum: "system_default", "merchant". */
    "origin": "system_default" | "merchant" | (string & {});
    /**
     * A node in a risk rule condition: a comparison of an attribute, or an `all`, `any`, or `not`
     * group of other nodes.
     */
    "predicate": RiskPredicateNode;
    "risk_rule_id": string;
    /** Value enum: "pre_authorization", "post_authorization". */
    "stage": "pre_authorization" | "post_authorization" | (string & {});
    /** Value enum: "active", "inactive", "archived". */
    "status": "active" | "inactive" | "archived" | (string & {});
    /** RFC3339 timestamp. Format: date-time. */
    "updated_at": string;
    /**
     * Increases on every change to the rule. Send it as expected_version to avoid overwriting
     * someone else's change. Format: int64.
     */
    "version": number;
};
/**
 * What a valid risk rule uses: its evaluation stage, the attributes and list aliases it
 * references, and which payments it applies to.
 */
export type RiskRuleAnalysis = {
    /** Value enum: "all_payments", "on_session_only". */
    "applicability": "all_payments" | "on_session_only" | (string & {});
    /**  [] (Value): string. */
    "attributes_used": Array<string>;
    /**  [] (Value): string. */
    "list_aliases_used": Array<string>;
    /** Value enum: "pre_authorization", "post_authorization". */
    "stage": "pre_authorization" | "post_authorization" | (string & {});
};
/**
 * A problem that stops a saved or proposed risk rule from running, with a `code`, a message, and
 * the `path` to the part of the rule at fault.
 */
export type RiskRuleIssue = {
    /**
     * Extensible rule issue code. Accept new codes as they are added. Risk rules and previews
     * share these issue codes; invalid rule writes use the standard error codes. Value enum:
     * "invalid_predicate", "invalid_predicate_node", "invalid_predicate_group",
     * "unknown_predicate_field", "unknown_attribute", "attribute_unavailable", "invalid_operator",
     * "invalid_operand", "invalid_list_alias", "invalid_money", "invalid_rule_action",
     * "rule_action_unavailable_at_stage", "list_not_found", "list_archived", "list_type_mismatch".
     */
    "code": "invalid_predicate"
        | "invalid_predicate_node"
        | "invalid_predicate_group"
        | "unknown_predicate_field"
        | "unknown_attribute"
        | "attribute_unavailable"
        | "invalid_operator"
        | "invalid_operand"
        | "invalid_list_alias"
        | "invalid_money"
        | "invalid_rule_action"
        | "rule_action_unavailable_at_stage"
        | "list_not_found"
        | "list_archived"
        | "list_type_mismatch"
        | (string & {});
    /** Description of the rule issue and how to correct it. */
    "message": string;
    /**
     * Public request field path, as used by error param: predicate for the root,
     * predicate.all[0].attribute for a nested field, or action.
     */
    "path": string;
    /**
     * Why an attribute is unavailable. Present only for attribute_unavailable issues. Value enum:
     * "risk_scoring_not_enabled", "ip_geolocation_not_enabled".
     */
    "unavailable_reason"?: "risk_scoring_not_enabled" | "ip_geolocation_not_enabled" | (string & {});
};
/** A page of `RiskRule` objects. */
export type RiskRuleListResponse = {
    /**  [] (Value): {@link RiskRule}. A rule for assessing and handling payment risk. */
    "data": Array<RiskRule>;
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
/** A response containing `RiskRule` data. */
export type RiskRuleResponse = {
    /** A rule for assessing and handling payment risk. */
    "data": RiskRule;
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
export type RiskRulesCreateParams = (InputValue<CreateRiskRuleRequestInput>);
export type RiskRulesDeleteParams = {
    /** Optional risk rule version last read by the caller. Format: int64. minimum: 1. */
    "expected_version"?: InputValue<number>;
};
export type RiskRulesGetAttributesParams = {};
export type RiskRulesGetParams = {};
export type RiskRulesListParams = {
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
export type RiskRulesUpdateParams = (UpdateRiskRuleRequestInput);
/** The request body for: Replace a gift card code. */
export type RotateGiftCardCodeRequest = {
    /**
     * The gift card version last read. The command changes this card only when its current version
     * matches. Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Explicitly send or schedule the replacement code through private recipient access. Requires
     * commerce.gift_cards.secrets.write. Who receives a gift card notification: their `email`,
     * optional `name` and `message`, and an optional `send_at` time.
     */
    "notification"?: GiftCardPurchaseRecipient;
};
/** The request body for: Replace a gift card code. */
export type RotateGiftCardCodeRequestInput = {
    /**
     * The gift card version last read. The command changes this card only when its current version
     * matches. Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Explicitly send or schedule the replacement code through private recipient access. Requires
     * commerce.gift_cards.secrets.write. Who receives a gift card notification: their `email`,
     * optional `name` and `message`, and an optional `send_at` time.
     */
    "notification"?: GiftCardNotificationRecipientInput;
};
