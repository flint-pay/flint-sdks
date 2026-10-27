import type { ResponseMeta, ResourceReference, ResponseWarning } from './types-40.js';
import type { InputValue, Result } from '../runtime.js';
import type { AddRiskListItemsRequestInput } from './types-0.js';
import type { CreateRiskListRequestInput, CreateRiskPreviewRequestInput, CreateRiskRuleRequestInput } from './types-9.js';
import type { UpdateRiskListRequestInput, UpdateRiskRuleRequestInput } from './types-49.js';
import type { MoneyValue, MoneyValueInput } from './types-31.js';
import type { GiftCardPurchaseRecipient, GiftCardNotificationRecipientInput, GiftCardNotification } from './types-19.js';
import type { GiftCard } from './types-18.js';
import type { DeveloperSandbox } from './types-16.js';
import type { CreateDeveloperSandboxResult } from './types-6.js';
import type { PaymentMethodWithSetup } from './types-36.js';
import type { PaymentCollection, PaymentErrorSummary } from './types-35.js';
/**
 * Shape $ (Value): {@link RevokeDeliveryDependencyTargetLocationGeography}. A typed revocation
 * target. Each target_type accepts only its resource-specific fields.
 */
export type RevokeDeliveryDependencyTargetLocationGeography = ({
    /** Shape $ (Value): string. minLength: 1. */
    "delivery_method_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "delivery_method_revision_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "delivery_rate_callback_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "delivery_rate_callback_revision_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "delivery_rate_callback_signing_key_id"?: string;
    /**
     * Shape $ (Value): integer string. Exact version of the Location geography to revoke. Required
     * for location_geography targets. Use an integer string (decimal digits), not a floating-point
     * number. Format: int64. minimum: 1.
     */
    "location_geography_version": `${bigint}`;
    /** Shape $ (Value): string. minLength: 1. */
    "location_id": string;
    /** Shape $ (Value): string.  Value enum: "location_geography". */
    "target_type": "location_geography" | (string & {});
})
    & (({
    /** Shape $ (Value): any.  Value enum: "location_geography". */
    "target_type": unknown;
    /** Shape $ (Value): string. minLength: 1. */
    "location_id": string;
    /**
     * Shape $ (Value): integer string. Exact version of the Location geography to revoke. Required
     * for location_geography targets. Use an integer string (decimal digits), not a floating-point
     * number. Format: int64. minimum: 1.
     */
    "location_geography_version": `${bigint}`;
}));
/**
 * Shape $ (Value): {@link RevokeDeliveryDependencyTargetLocationGeographyInput}. A typed
 * revocation target. Each target_type accepts only its resource-specific fields.
 */
export type RevokeDeliveryDependencyTargetLocationGeographyInput = ({
    /** Shape $ (Value): string. minLength: 1. */
    "delivery_method_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "delivery_method_revision_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "delivery_rate_callback_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "delivery_rate_callback_revision_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "delivery_rate_callback_signing_key_id"?: string;
    /**
     * Shape $ (Value): integer string. Exact version of the Location geography to revoke. Required
     * for location_geography targets. Use an integer string (decimal digits), not a floating-point
     * number. Format: int64. minimum: 1.
     */
    "location_geography_version": `${bigint}` | bigint;
    /** Shape $ (Value): string. minLength: 1. */
    "location_id": string;
    /** Shape $ (Value): string.  Value enum: "location_geography". */
    "target_type": "location_geography";
})
    & (({
    /** Shape $ (Value): any.  Value enum: "location_geography". */
    "target_type": "location_geography";
    /** Shape $ (Value): string. minLength: 1. */
    "location_id": string;
    /**
     * Shape $ (Value): integer string. Exact version of the Location geography to revoke. Required
     * for location_geography targets. Use an integer string (decimal digits), not a floating-point
     * number. Format: int64. minimum: 1.
     */
    "location_geography_version": `${bigint}` | bigint;
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
 * Shape $ (Value): {@link RiskAttribute}. One attribute a risk rule can test, with its value type,
 * allowed operators, and whether it is currently available.
 */
export type RiskAttribute = {
    /** Shape $ (Value): string.  Value enum: "pre_authorization", "post_authorization". */
    "available_from": "pre_authorization" | "post_authorization" | (string & {});
    /** Shape $ (Value): Array of string. Shape $[] (Value): string. */
    "enum_values"?: Array<string>;
    /** Shape $ (Value): boolean. Whether the attribute can be used in rules in this environment. */
    "is_available": boolean;
    /** Shape $ (Value): boolean. Whether the attribute can be missing from a payment. */
    "is_nullable": boolean;
    /** Shape $ (Value): string.  Value enum: "not_applicable_except_is_missing". */
    "missing_value_behavior": "not_applicable_except_is_missing" | (string & {});
    /** Shape $ (Value): string. */
    "name": string;
    /**
     * Shape $ (Value): Array of string. Operators accepted by this attribute. [] enum: "eq",
     * "neq", "gt", "gte", "lt", "lte", "in", "in_list", "is_missing". Shape $[] (Value): string.
     * Value enum: "eq", "neq", "gt", "gte", "lt", "lte", "in", "in_list", "is_missing".
     */
    "operators": Array<"eq" | "neq" | "gt" | "gte" | "lt" | "lte" | "in" | "in_list" | "is_missing" | (string & {})>;
    /**
     * Shape $ (Value): string. Value enum: "risk_scoring_not_enabled",
     * "ip_geolocation_not_enabled".
     */
    "unavailable_reason"?: "risk_scoring_not_enabled" | "ip_geolocation_not_enabled" | (string & {});
    /**
     * Shape $ (Value): string. Value enum: "money", "currency", "string", "enum", "country",
     * "email", "ip_address", "boolean", "integer".
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
/**
 * Shape $ (Value): {@link RiskAttributeRegistry}. The attributes available to risk rules, in the
 * current environment.
 */
export type RiskAttributeRegistry = {
    /**
     * Shape $ (Value): Array of {@link RiskAttribute}. Shape $[] (Value): {@link RiskAttribute}.
     * One attribute a risk rule can test, with its value type, allowed operators, and whether it
     * is currently available.
     */
    "attributes": Array<RiskAttribute>;
};
/**
 * Shape $ (Value): {@link RiskAttributeRegistryResponse}. A response containing
 * `RiskAttributeRegistry` data.
 */
export type RiskAttributeRegistryResponse = {
    /**
     * Shape $ (Value): {@link RiskAttributeRegistry}. The attributes available to risk rules, in
     * the current environment.
     */
    "data": RiskAttributeRegistry;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Metadata returned with a response: the `api_version`,
     * `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id"?: string;
};
/** Shape $ (Value): {@link RiskList}. A collection of values used in payment risk rules. */
export type RiskList = {
    /** Shape $ (Value): string. */
    "alias": string;
    /** Shape $ (Value): string or null. RFC3339 timestamp. Format: date-time. */
    "archived_at": string | null;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "created_at": string;
    /**
     * Shape $ (Value): {@link ResourceReference} or null. The credential that created this list.
     * Null when Flint created it, as for Flint's default lists. The reference may name an API key
     * in the other mode. Shape $.anyOf[1] (Value): {@link ResourceReference}. A reference to
     * another resource by `resource_type` and `resource_id`. Shape $.anyOf[2] (Value): null.
     */
    "created_by": ((ResourceReference) | (null));
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64.
     */
    "item_count": `${bigint}`;
    /**
     * Shape $ (Value): string. Values are trimmed and compared exactly after item-type
     * normalization for deduplication and membership. card_fingerprint is the 32-character
     * hexadecimal value from PaymentMethod.fingerprint and is lowercased; case_sensitive_string
     * preserves case and Unicode composition. string and email are lowercased, with accents
     * preserved. email requires a bare address. email_domain is lowercased, has one final dot
     * removed, and converts internationalized domains to ASCII. ip_address uses canonical IP form,
     * including IPv4-mapped IPv6 conversion to IPv4. country uses uppercase ISO codes. card_bin
     * preserves 6 through 8 digits, including leading zeros, and matches the full value.
     * customer_id preserves the validated ID. Value enum: "card_fingerprint", "card_bin", "email",
     * "email_domain", "ip_address", "country", "customer_id", "string", "case_sensitive_string".
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
    /** Shape $ (Value): string. */
    "name": string;
    /**
     * Shape $ (Value): string. Whether Flint manages the list or the merchant created it. Value
     * enum: "system_default", "merchant".
     */
    "origin": "system_default" | "merchant" | (string & {});
    /** Shape $ (Value): string. */
    "risk_list_id": string;
    /** Shape $ (Value): string.  Value enum: "active", "archived". */
    "status": "active" | "archived" | (string & {});
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "updated_at": string;
    /**
     * Shape $ (Value): integer string. Version of persisted list configuration and item-count
     * changes. External observations do not advance this counter. Use an integer string (decimal
     * digits), not a floating-point number. Format: uint64. minimum: 1.
     */
    "version": `${bigint}`;
};
/** Shape $ (Value): {@link RiskListItem}. One value in a payment risk list. */
export type RiskListItem = {
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "created_at": string;
    /**
     * Shape $ (Value): {@link ResourceReference} or null. The credential that created this list
     * item. Null when Flint created it. The reference may name an API key in the other mode. Shape
     * $.anyOf[1] (Value): {@link ResourceReference}. A reference to another resource by
     * `resource_type` and `resource_id`. Shape $.anyOf[2] (Value): null.
     */
    "created_by": ((ResourceReference) | (null));
    /** Shape $ (Value): string. */
    "risk_list_id": string;
    /** Shape $ (Value): string. */
    "risk_list_item_id": string;
    /** Shape $ (Value): string. */
    "value": string;
};
/**
 * Shape $ (Value): {@link RiskListItemAddition}. The risk list item matched or created for one
 * requested value, and its creation outcome.
 */
export type RiskListItemAddition = {
    /** Shape $ (Value): string.  Value enum: "created", "existing". */
    "outcome": "created" | "existing" | (string & {});
    /** Shape $ (Value): {@link RiskListItem}. One value in a payment risk list. */
    "risk_list_item": RiskListItem;
};
/** Shape $ (Value): {@link RiskListItemListResponse}. A page of `RiskListItem` objects. */
export type RiskListItemListResponse = {
    /**
     * Shape $ (Value): Array of {@link RiskListItem}. Shape $[] (Value): {@link RiskListItem}. One
     * value in a payment risk list.
     */
    "data": Array<RiskListItem>;
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
    "request_id"?: string;
};
/** Shape $ (Value): {@link RiskListItemResponse}. A response containing `RiskListItem` data. */
export type RiskListItemResponse = {
    /** Shape $ (Value): {@link RiskListItem}. One value in a payment risk list. */
    "data": RiskListItem;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Metadata returned with a response: the `api_version`,
     * `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id"?: string;
};
/** Shape $ (Value): {@link RiskListListResponse}. A page of `RiskList` objects. */
export type RiskListListResponse = {
    /**
     * Shape $ (Value): Array of {@link RiskList}. Shape $[] (Value): {@link RiskList}. A
     * collection of values used in payment risk rules.
     */
    "data": Array<RiskList>;
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
    "request_id"?: string;
};
/** Shape $ (Value): {@link RiskListResourceResponse}. A response containing `RiskList` data. */
export type RiskListResourceResponse = {
    /** Shape $ (Value): {@link RiskList}. A collection of values used in payment risk rules. */
    "data": RiskList;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Metadata returned with a response: the `api_version`,
     * `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id"?: string;
};
export type RiskListsAddItemsInput = {
    /** Shape $ (Value): string. */
    "risk_list_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link AddRiskListItemsRequestInput}. Values to add to the risk list.
     * Values are trimmed and compared exactly after item-type normalization for deduplication and
     * membership. card_fingerprint is the 32-character hexadecimal value from
     * PaymentMethod.fingerprint and is lowercased; case_sensitive_string preserves case and
     * Unicode composition. string and email are lowercased, with accents preserved. email requires
     * a bare address. email_domain is lowercased, has one final dot removed, and converts
     * internationalized domains to ASCII. ip_address uses canonical IP form, including IPv4-mapped
     * IPv6 conversion to IPv4. country uses uppercase ISO codes. card_bin preserves 6 through 8
     * digits, including leading zeros, and matches the full value. customer_id preserves the
     * validated ID.
     */
    "body": InputValue<AddRiskListItemsRequestInput>;
};
export type RiskListsCreateInput = {
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link CreateRiskListRequestInput}. The request body for: Create a risk
     * list.
     */
    "body": InputValue<CreateRiskListRequestInput>;
};
export type RiskListsDeleteItemInput = {
    /** Shape $ (Value): string. */
    "risk_list_id": InputValue<string>;
    /** Shape $ (Value): string. */
    "risk_list_item_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
};
export type RiskListsGetInput = {
    /** Shape $ (Value): string. */
    "risk_list_id": InputValue<string>;
};
export type RiskListsGetItemInput = {
    /** Shape $ (Value): string. */
    "risk_list_id": InputValue<string>;
    /** Shape $ (Value): string. */
    "risk_list_item_id": InputValue<string>;
};
export type RiskListsListInput = {
    /** Shape $ (Value): string. minLength: 1. maxLength: 128. pattern: ^[a-z][a-z0-9_]{0,127}$. */
    "alias"?: InputValue<string>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "active", "archived". Shape $[]
     * (Value): string. Value enum: "active", "archived".
     */
    "status"?: InputValue<Array<"active" | "archived">>;
    /** Shape $ (Value): integer. minimum: 1. maximum: 100. Default: 20. */
    "page_size"?: InputValue<number>;
    /** Shape $ (Value): string. */
    "page_token"?: InputValue<string>;
};
export type RiskListsListRiskListItemsInput = {
    /** Shape $ (Value): string. minLength: 1. maxLength: 512. */
    "value"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "risk_list_id": InputValue<string>;
    /** Shape $ (Value): integer. minimum: 1. maximum: 100. Default: 20. */
    "page_size"?: InputValue<number>;
    /** Shape $ (Value): string. */
    "page_token"?: InputValue<string>;
};
export type RiskListsRemoveInput = {
    /** Shape $ (Value): string. */
    "risk_list_id": InputValue<string>;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: InputValue<`${bigint}` | bigint>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
};
export type RiskListsUpdateInput = {
    /** Shape $ (Value): string. */
    "risk_list_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link UpdateRiskListRequestInput}. The request body for: Update a risk
     * list.
     */
    "body": InputValue<UpdateRiskListRequestInput>;
};
/**
 * Shape $ (Value): {@link RiskPredicateNode}. A node in a risk rule condition: a comparison of an
 * attribute, or an `all`, `any`, or `not` group of other nodes.
 */
export type RiskPredicateNode = (({
    /**
     * Shape $ (Value): Array of {@link RiskPredicateNode}. minItems: 1. maxItems: 50. Shape $[]
     * (Value): {@link RiskPredicateNode}. A node in a risk rule condition: a comparison of an
     * attribute, or an `all`, `any`, or `not` group of other nodes.
     */
    "all": Array<RiskPredicateNode>;
})
    | ({
    /**
     * Shape $ (Value): Array of {@link RiskPredicateNode}. minItems: 1. maxItems: 50. Shape $[]
     * (Value): {@link RiskPredicateNode}. A node in a risk rule condition: a comparison of an
     * attribute, or an `all`, `any`, or `not` group of other nodes.
     */
    "any": Array<RiskPredicateNode>;
})
    | ({
    /**
     * Shape $ (Value): {@link RiskPredicateNode}. A node in a risk rule condition: a comparison of
     * an attribute, or an `all`, `any`, or `not` group of other nodes.
     */
    "not": RiskPredicateNode;
})
    | ({
    /** Shape $ (Value): string. minLength: 1. maxLength: 280. */
    "attribute": string;
    /** Shape $ (Value): string.  Value enum: "eq", "neq", "gt", "gte", "lt", "lte". */
    "operator": "eq" | "neq" | "gt" | "gte" | "lt" | "lte" | (string & {});
    /**
     * Shape $ (Value): string or integer or boolean. Shape $.oneOf[1] (Value): string. minLength:
     * 1. Shape $.oneOf[2] (Value): integer. Shape $.oneOf[3] (Value): boolean.
     */
    "value": ((string) | (number) | (boolean) | (unknown));
})
    | ({
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /** Shape $ (Value): string.  Value enum: "amount_money". */
    "attribute": "amount_money" | (string & {});
    /** Shape $ (Value): string.  Value enum: "eq", "neq", "gt", "gte", "lt", "lte". */
    "operator": "eq" | "neq" | "gt" | "gte" | "lt" | "lte" | (string & {});
})
    | ({
    /** Shape $ (Value): string. minLength: 1. maxLength: 280. */
    "attribute": string;
    /** Shape $ (Value): string.  Value enum: "in". */
    "operator": "in" | (string & {});
    /**
     * Shape $ (Value): Array of (string or integer or boolean). minItems: 1. maxItems: 100. Shape
     * $[] (Value): string or integer or boolean. Shape $[].oneOf[1] (Value): string. minLength: 1.
     * Shape $[].oneOf[2] (Value): integer. Shape $[].oneOf[3] (Value): boolean.
     */
    "values": Array<((string) | (number) | (boolean) | (unknown))>;
})
    | ({
    /** Shape $ (Value): string. minLength: 1. maxLength: 280. */
    "attribute": string;
    /** Shape $ (Value): string. minLength: 1. pattern: ^[a-z][a-z0-9_]{0,127}$. */
    "list_alias": string;
    /** Shape $ (Value): string.  Value enum: "in_list". */
    "operator": "in_list" | (string & {});
})
    | ({
    /** Shape $ (Value): string. minLength: 1. maxLength: 280. */
    "attribute": string;
    /** Shape $ (Value): string.  Value enum: "is_missing". */
    "operator": "is_missing" | (string & {});
})
    | (Record<string, unknown>));
/**
 * Shape $ (Value): {@link RiskPredicateNodeInput}. A node in a risk rule condition: a comparison
 * of an attribute, or an `all`, `any`, or `not` group of other nodes.
 */
export type RiskPredicateNodeInput = (({
    /**
     * Shape $ (Value): Array of {@link RiskPredicateNodeInput}. minItems: 1. maxItems: 50. Shape
     * $[] (Value): {@link RiskPredicateNodeInput}. A node in a risk rule condition: a comparison
     * of an attribute, or an `all`, `any`, or `not` group of other nodes.
     */
    "all": Array<RiskPredicateNodeInput>;
})
    | ({
    /**
     * Shape $ (Value): Array of {@link RiskPredicateNodeInput}. minItems: 1. maxItems: 50. Shape
     * $[] (Value): {@link RiskPredicateNodeInput}. A node in a risk rule condition: a comparison
     * of an attribute, or an `all`, `any`, or `not` group of other nodes.
     */
    "any": Array<RiskPredicateNodeInput>;
})
    | ({
    /**
     * Shape $ (Value): {@link RiskPredicateNodeInput}. A node in a risk rule condition: a
     * comparison of an attribute, or an `all`, `any`, or `not` group of other nodes.
     */
    "not": RiskPredicateNodeInput;
})
    | ({
    /** Shape $ (Value): string. minLength: 1. maxLength: 280. */
    "attribute": string;
    /** Shape $ (Value): string.  Value enum: "eq", "neq", "gt", "gte", "lt", "lte". */
    "operator": "eq" | "neq" | "gt" | "gte" | "lt" | "lte";
    /**
     * Shape $ (Value): string or integer or boolean. Shape $.oneOf[1] (Value): string. minLength:
     * 1. Shape $.oneOf[2] (Value): integer. Shape $.oneOf[3] (Value): boolean.
     */
    "value": ((string) | (number) | (boolean));
})
    | ({
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValueInput;
    /** Shape $ (Value): string.  Value enum: "amount_money". */
    "attribute": "amount_money";
    /** Shape $ (Value): string.  Value enum: "eq", "neq", "gt", "gte", "lt", "lte". */
    "operator": "eq" | "neq" | "gt" | "gte" | "lt" | "lte";
})
    | ({
    /** Shape $ (Value): string. minLength: 1. maxLength: 280. */
    "attribute": string;
    /** Shape $ (Value): string.  Value enum: "in". */
    "operator": "in";
    /**
     * Shape $ (Value): Array of (string or integer or boolean). minItems: 1. maxItems: 100. Shape
     * $[] (Value): string or integer or boolean. Shape $[].oneOf[1] (Value): string. minLength: 1.
     * Shape $[].oneOf[2] (Value): integer. Shape $[].oneOf[3] (Value): boolean.
     */
    "values": Array<((string) | (number) | (boolean))>;
})
    | ({
    /** Shape $ (Value): string. minLength: 1. maxLength: 280. */
    "attribute": string;
    /** Shape $ (Value): string. minLength: 1. pattern: ^[a-z][a-z0-9_]{0,127}$. */
    "list_alias": string;
    /** Shape $ (Value): string.  Value enum: "in_list". */
    "operator": "in_list";
})
    | ({
    /** Shape $ (Value): string. minLength: 1. maxLength: 280. */
    "attribute": string;
    /** Shape $ (Value): string.  Value enum: "is_missing". */
    "operator": "is_missing";
}));
/**
 * Shape $ (Value): {@link RiskPreview}. The result of validating a proposed risk rule: whether it
 * is valid, any issues found, warnings, and an analysis of the rule.
 */
export type RiskPreview = {
    /**
     * Shape $ (Value): {@link RiskRuleAnalysis} or null. Rule analysis. Null when the proposed
     * rule is invalid. Shape $.anyOf[1] (Value): {@link RiskRuleAnalysis}. What a valid risk rule
     * uses: its evaluation stage, the attributes and list aliases it references, and which
     * payments it applies to. Shape $.anyOf[2] (Value): null.
     */
    "analysis": ((RiskRuleAnalysis) | (null));
    /** Shape $ (Value): boolean. Whether the proposed rule is valid. */
    "is_valid": boolean;
    /**
     * Shape $ (Value): Array of {@link RiskRuleIssue}. Every rule validation issue in validation
     * order. Empty when the rule is valid. Shape $[] (Value): {@link RiskRuleIssue}. A problem
     * that stops a saved or proposed risk rule from running, with a `code`, a message, and the
     * `path` to the part of the rule at fault.
     */
    "issues": Array<RiskRuleIssue>;
    /**
     * Shape $ (Value): Array of {@link ResponseWarning}. Advisory warnings. Empty when the
     * proposed rule is invalid. Shape $[] (Value): {@link ResponseWarning}. A non-blocking
     * condition reported with a response. The `code` identifies the condition and `severity` says
     * how urgent it is.
     */
    "warnings": Array<ResponseWarning>;
};
/** Shape $ (Value): {@link RiskPreviewResponse}. A response containing `RiskPreview` data. */
export type RiskPreviewResponse = {
    /**
     * Shape $ (Value): {@link RiskPreview}. The result of validating a proposed risk rule: whether
     * it is valid, any issues found, warnings, and an analysis of the rule.
     */
    "data": RiskPreview;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Metadata returned with a response: the `api_version`,
     * `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id"?: string;
};
export type RiskPreviewsCreateInput = {
    /**
     * Shape $ (Value): {@link CreateRiskPreviewRequestInput}. The request body for: Create a risk
     * preview.
     */
    "body": InputValue<CreateRiskPreviewRequestInput>;
};
/** Shape $ (Value): {@link RiskRule}. A rule for assessing and handling payment risk. */
export type RiskRule = {
    /** Shape $ (Value): string.  Value enum: "allow", "block", "review", "require_3ds". */
    "action": "allow" | "block" | "review" | "require_3ds" | (string & {});
    /** Shape $ (Value): string.  Value enum: "all_payments", "on_session_only". */
    "applicability": "all_payments" | "on_session_only" | (string & {});
    /** Shape $ (Value): string or null. RFC3339 timestamp. Format: date-time. */
    "archived_at": string | null;
    /** Shape $ (Value): Array of string. Shape $[] (Value): string. */
    "attributes_used": Array<string>;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "created_at": string;
    /**
     * Shape $ (Value): {@link ResourceReference} or null. The credential that created this rule.
     * Null when Flint created it, as for Flint's default rules. The reference may name an API key
     * in the other mode. Shape $.anyOf[1] (Value): {@link ResourceReference}. A reference to
     * another resource by `resource_type` and `resource_id`. Shape $.anyOf[2] (Value): null.
     */
    "created_by": ((ResourceReference) | (null));
    /** Shape $ (Value): string. */
    "description": string;
    /**
     * Shape $ (Value): Array of {@link RiskRuleIssue}. Problems that stop Flint from evaluating
     * this rule. Empty when the rule can run. An active rule with issues is skipped on every
     * payment and protects nothing until you fix it. An inactive rule with issues can't be
     * activated until you fix it. Shape $[] (Value): {@link RiskRuleIssue}. A problem that stops a
     * saved or proposed risk rule from running, with a `code`, a message, and the `path` to the
     * part of the rule at fault.
     */
    "issues": Array<RiskRuleIssue>;
    /** Shape $ (Value): string.  Value enum: "system_default", "merchant". */
    "origin": "system_default" | "merchant" | (string & {});
    /**
     * Shape $ (Value): {@link RiskPredicateNode}. A node in a risk rule condition: a comparison of
     * an attribute, or an `all`, `any`, or `not` group of other nodes.
     */
    "predicate": RiskPredicateNode;
    /** Shape $ (Value): string. */
    "risk_rule_id": string;
    /** Shape $ (Value): string.  Value enum: "pre_authorization", "post_authorization". */
    "stage": "pre_authorization" | "post_authorization" | (string & {});
    /** Shape $ (Value): string.  Value enum: "active", "inactive", "archived". */
    "status": "active" | "inactive" | "archived" | (string & {});
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "updated_at": string;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64.
     */
    "version": `${bigint}`;
};
/**
 * Shape $ (Value): {@link RiskRuleAnalysis}. What a valid risk rule uses: its evaluation stage,
 * the attributes and list aliases it references, and which payments it applies to.
 */
export type RiskRuleAnalysis = {
    /** Shape $ (Value): string.  Value enum: "all_payments", "on_session_only". */
    "applicability": "all_payments" | "on_session_only" | (string & {});
    /** Shape $ (Value): Array of string. Shape $[] (Value): string. */
    "attributes_used": Array<string>;
    /** Shape $ (Value): Array of string. Shape $[] (Value): string. */
    "list_aliases_used": Array<string>;
    /** Shape $ (Value): string.  Value enum: "pre_authorization", "post_authorization". */
    "stage": "pre_authorization" | "post_authorization" | (string & {});
};
/**
 * Shape $ (Value): {@link RiskRuleIssue}. A problem that stops a saved or proposed risk rule from
 * running, with a `code`, a message, and the `path` to the part of the rule at fault.
 */
export type RiskRuleIssue = {
    /**
     * Shape $ (Value): string. Extensible rule issue code. Accept new codes as they are added.
     * Risk rules and previews share these issue codes; invalid rule writes use the standard error
     * codes. Value enum: "invalid_predicate", "invalid_predicate_node", "invalid_predicate_group",
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
    /** Shape $ (Value): string. Description of the rule issue and how to correct it. */
    "message": string;
    /**
     * Shape $ (Value): string. Public request field path, as used by error param: predicate for
     * the root, predicate.all[0].attribute for a nested field, or action.
     */
    "path": string;
    /**
     * Shape $ (Value): string. Why an attribute is unavailable. Present only for
     * attribute_unavailable issues. Value enum: "risk_scoring_not_enabled",
     * "ip_geolocation_not_enabled".
     */
    "unavailable_reason"?: "risk_scoring_not_enabled" | "ip_geolocation_not_enabled" | (string & {});
};
/** Shape $ (Value): {@link RiskRuleListResponse}. A page of `RiskRule` objects. */
export type RiskRuleListResponse = {
    /**
     * Shape $ (Value): Array of {@link RiskRule}. Shape $[] (Value): {@link RiskRule}. A rule for
     * assessing and handling payment risk.
     */
    "data": Array<RiskRule>;
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
    "request_id"?: string;
};
/** Shape $ (Value): {@link RiskRuleResponse}. A response containing `RiskRule` data. */
export type RiskRuleResponse = {
    /** Shape $ (Value): {@link RiskRule}. A rule for assessing and handling payment risk. */
    "data": RiskRule;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Metadata returned with a response: the `api_version`,
     * `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id"?: string;
};
export type RiskRulesCreateInput = {
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link CreateRiskRuleRequestInput}. The request body for: Create a risk
     * rule.
     */
    "body": InputValue<CreateRiskRuleRequestInput>;
};
export type RiskRulesGetAttributeRegistryInput = {};
export type RiskRulesGetInput = {
    /** Shape $ (Value): string. */
    "risk_rule_id": InputValue<string>;
};
export type RiskRulesListInput = {
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "active", "inactive", "archived".
     * Shape $[] (Value): string. Value enum: "active", "inactive", "archived".
     */
    "status"?: InputValue<Array<"active" | "inactive" | "archived">>;
    /** Shape $ (Value): integer. minimum: 1. maximum: 100. Default: 20. */
    "page_size"?: InputValue<number>;
    /** Shape $ (Value): string. */
    "page_token"?: InputValue<string>;
};
export type RiskRulesRemoveInput = {
    /** Shape $ (Value): string. */
    "risk_rule_id": InputValue<string>;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1.
     */
    "expected_version"?: InputValue<`${bigint}` | bigint>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
};
export type RiskRulesUpdateInput = {
    /** Shape $ (Value): string. */
    "risk_rule_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link UpdateRiskRuleRequestInput}. The request body for: Update a risk
     * rule.
     */
    "body": InputValue<UpdateRiskRuleRequestInput>;
};
/**
 * Shape $ (Value): {@link RotateGiftCardCodeRequest}. The request body for: Replace a gift card
 * code.
 */
export type RotateGiftCardCodeRequest = {
    /**
     * Shape $ (Value): integer string. The gift card version last read. The command changes this
     * card only when its current version matches. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /**
     * Shape $ (Value): {@link GiftCardPurchaseRecipient}. Explicitly send or schedule the
     * replacement code through private recipient access. Requires
     * commerce.gift_cards.secrets.write. Who receives a gift card notification: their `email`,
     * optional `name` and `message`, and an optional `send_at` time.
     */
    "notification"?: GiftCardPurchaseRecipient;
};
/**
 * Shape $ (Value): {@link RotateGiftCardCodeRequestInput}. The request body for: Replace a gift
 * card code.
 */
export type RotateGiftCardCodeRequestInput = {
    /**
     * Shape $ (Value): integer string. The gift card version last read. The command changes this
     * card only when its current version matches. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): {@link GiftCardNotificationRecipientInput}. Explicitly send or schedule the
     * replacement code through private recipient access. Requires
     * commerce.gift_cards.secrets.write. Who receives a gift card notification: their `email`,
     * optional `name` and `message`, and an optional `send_at` time.
     */
    "notification"?: GiftCardNotificationRecipientInput;
};
/**
 * Shape $ (Value): {@link RotateGiftCardCodeResult}. The gift card after its code was rotated,
 * with the new `code` while it can be recovered and the notification sent.
 */
export type RotateGiftCardCodeResult = {
    /**
     * Shape $ (Value): string. The full current code. Omitted after the 24-hour recovery window or
     * when this code has been replaced.
     */
    "code"?: string;
    /**
     * Shape $ (Value): string. When recovery of this code expires. Omitted when the code cannot be
     * recovered. Format: date-time.
     */
    "code_recovery_expires_at"?: string;
    /**
     * Shape $ (Value): {@link GiftCard}. Merchant-issued purchased gift card. Posted balance
     * includes reserved value; available value is balance minus reservations. Frozen value remains
     * part of outstanding liability. Gift cards are independent resources and cannot be
     * transferred across merchants or currencies.
     */
    "gift_card": GiftCard;
    /** Shape $ (Value): {@link GiftCardNotification}. A message sent to a gift card recipient. */
    "gift_card_notification"?: GiftCardNotification;
};
/**
 * Shape $ (Value): {@link RotateGiftCardCodeResultResponse}. A response containing
 * `RotateGiftCardCodeResult` data.
 */
export type RotateGiftCardCodeResultResponse = {
    /**
     * Shape $ (Value): {@link RotateGiftCardCodeResult}. The gift card after its code was rotated,
     * with the new `code` while it can be recovered and the notification sent.
     */
    "data": RotateGiftCardCodeResult;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Metadata returned with a response: the `api_version`,
     * `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id"?: string;
};
/**
 * Shape $ (Value): {@link RotatePartnerAppSecretRequestInput}. The request body for: Rotate
 * partner app secret.
 */
export type RotatePartnerAppSecretRequestInput = {
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "expire_previous_secret_at"?: string | globalThis.Date;
};
/**
 * Shape $ (Value): {@link RotateWebhookSecretRequest}. The request body for: Rotate webhook
 * secret.
 */
export type RotateWebhookSecretRequest = {
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /**
     * Shape $ (Value): string. When the replaced secret stops signing. Omit for a 24-hour overlap;
     * send a time at or before now to stop it immediately. Must be no later than 7 days from now.
     * Null is not accepted. Format: date-time. minLength: 1.
     */
    "expire_previous_secret_at"?: string;
};
/**
 * Shape $ (Value): {@link RotateWebhookSecretRequestInput}. The request body for: Rotate webhook
 * secret.
 */
export type RotateWebhookSecretRequestInput = {
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): string. When the replaced secret stops signing. Omit for a 24-hour overlap;
     * send a time at or before now to stop it immediately. Must be no later than 7 days from now.
     * Null is not accepted. Format: date-time. minLength: 1.
     */
    "expire_previous_secret_at"?: string | globalThis.Date;
};
/** Shape $ (Value): {@link SandboxListResponse}. A page of `DeveloperSandbox` objects. */
export type SandboxListResponse = {
    /**
     * Shape $ (Value): Array of {@link DeveloperSandbox}. Shape $[] (Value): {@link
     * DeveloperSandbox}. An isolated environment for testing an integration.
     */
    "data": Array<DeveloperSandbox>;
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
    "request_id"?: string;
};
/** Shape $ (Value): {@link SandboxResponse}. A response containing `DeveloperSandbox` data. */
export type SandboxResponse = {
    /**
     * Shape $ (Value): {@link DeveloperSandbox}. An isolated environment for testing an
     * integration.
     */
    "data": DeveloperSandbox;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Metadata returned with a response: the `api_version`,
     * `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id"?: string;
};
/**
 * Shape $ (Value): {@link SandboxWithAPIKeyResponse}. A response containing
 * `CreateDeveloperSandboxResult` data.
 */
export type SandboxWithAPIKeyResponse = {
    /**
     * Shape $ (Value): {@link CreateDeveloperSandboxResult}. The created sandbox is the primary
     * resource, with the API key and one-time secret_key when issue_test_key is true.
     */
    "data": CreateDeveloperSandboxResult;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Metadata returned with a response: the `api_version`,
     * `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id"?: string;
};
/**
 * Shape $ (Value): {@link SaveMeGiftCardRequest}. The request body for: Save a gift card to your
 * account.
 */
export type SaveMeGiftCardRequest = ({
    /** Shape $ (Value): string. minLength: 1. */
    "code"?: string;
    /** Shape $ (Value): string.  Value enum: "code", "recipient_access". */
    "credential_type": "code" | "recipient_access" | (string & {});
    /** Shape $ (Value): string. minLength: 1. */
    "grant_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "recipient_access_token"?: string;
})
    & ((Exclude<SaveMeGiftCardRequestCode & object, readonly unknown[]>)
    | (Exclude<SaveMeGiftCardRequestRecipientAccess & object, readonly unknown[]>)
    | (Record<string, unknown>));
/**
 * Shape $ (Value): {@link SaveMeGiftCardRequestCode}. The `code` variant of
 * `SaveMeGiftCardRequest`.
 */
export type SaveMeGiftCardRequestCode = ({
    /** Shape $ (Value): string. minLength: 1. */
    "code": string;
    /** Shape $ (Value): string.  Value enum: "code". */
    "credential_type": "code" | (string & {});
    /** Shape $ (Value): string. minLength: 1. */
    "grant_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "recipient_access_token"?: string;
})
    & (({
    /** Shape $ (Value): any.  Value enum: "code". */
    "credential_type": unknown;
    /** Shape $ (Value): string. minLength: 1. */
    "code": string;
}));
/**
 * Shape $ (Value): {@link SaveMeGiftCardRequestCodeInput}. The `code` variant of
 * `SaveMeGiftCardRequest`.
 */
export type SaveMeGiftCardRequestCodeInput = ({
    /** Shape $ (Value): string. minLength: 1. */
    "code": string;
    /** Shape $ (Value): string.  Value enum: "code". */
    "credential_type": "code";
    /** Shape $ (Value): string. minLength: 1. */
    "grant_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "recipient_access_token"?: string;
})
    & (({
    /** Shape $ (Value): any.  Value enum: "code". */
    "credential_type": ("code") & ("code");
    /** Shape $ (Value): string. minLength: 1. */
    "code": string;
})
    & (({
    "grant_id"?: never;
}) & ({
    "recipient_access_token"?: never;
})));
/**
 * Shape $ (Value): {@link SaveMeGiftCardRequestInput}. The request body for: Save a gift card to
 * your account.
 */
export type SaveMeGiftCardRequestInput = ({
    /** Shape $ (Value): string. minLength: 1. */
    "code"?: string;
    /** Shape $ (Value): string.  Value enum: "code", "recipient_access". */
    "credential_type": "code" | "recipient_access";
    /** Shape $ (Value): string. minLength: 1. */
    "grant_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "recipient_access_token"?: string;
})
    & ((Exclude<SaveMeGiftCardRequestCodeInput & object, readonly unknown[]>)
    | (Exclude<SaveMeGiftCardRequestRecipientAccessInput & object, readonly unknown[]>));
/**
 * Shape $ (Value): {@link SaveMeGiftCardRequestRecipientAccess}. The `recipient_access` variant of
 * `SaveMeGiftCardRequest`.
 */
export type SaveMeGiftCardRequestRecipientAccess = ({
    /** Shape $ (Value): string. minLength: 1. */
    "code"?: string;
    /** Shape $ (Value): string.  Value enum: "recipient_access". */
    "credential_type": "recipient_access" | (string & {});
    /** Shape $ (Value): string. minLength: 1. */
    "grant_id": string;
    /** Shape $ (Value): string. minLength: 1. */
    "recipient_access_token": string;
})
    & (({
    /** Shape $ (Value): any.  Value enum: "recipient_access". */
    "credential_type": unknown;
    /** Shape $ (Value): string. minLength: 1. */
    "grant_id": string;
    /** Shape $ (Value): string. minLength: 1. */
    "recipient_access_token": string;
}));
/**
 * Shape $ (Value): {@link SaveMeGiftCardRequestRecipientAccessInput}. The `recipient_access`
 * variant of `SaveMeGiftCardRequest`.
 */
export type SaveMeGiftCardRequestRecipientAccessInput = ({
    /** Shape $ (Value): string. minLength: 1. */
    "code"?: string;
    /** Shape $ (Value): string.  Value enum: "recipient_access". */
    "credential_type": "recipient_access";
    /** Shape $ (Value): string. minLength: 1. */
    "grant_id": string;
    /** Shape $ (Value): string. minLength: 1. */
    "recipient_access_token": string;
})
    & (({
    /** Shape $ (Value): any.  Value enum: "recipient_access". */
    "credential_type": ("recipient_access") & ("recipient_access");
    /** Shape $ (Value): string. minLength: 1. */
    "grant_id": string;
    /** Shape $ (Value): string. minLength: 1. */
    "recipient_access_token": string;
})
    & ({
    "code"?: never;
}));
/**
 * Shape $ (Value): {@link SaveMePaymentMethodRequest}. The request body for: Create a payment
 * method for the current buyer.
 */
export type SaveMePaymentMethodRequest = {
    /** Shape $ (Value): string.  Value enum: "card". */
    "type"?: "card" | (string & {});
};
/**
 * Shape $ (Value): {@link SaveMePaymentMethodRequestInput}. The request body for: Create a payment
 * method for the current buyer.
 */
export type SaveMePaymentMethodRequestInput = {
    /** Shape $ (Value): string.  Value enum: "card". */
    "type"?: "card";
};
/**
 * Shape $ (Value): {@link SavePaymentMethodRequest}. The request body for: Create a payment
 * method.
 */
export type SavePaymentMethodRequest = {
    /** Shape $ (Value): string. minLength: 1. */
    "customer_id": string;
    /** Shape $ (Value): string.  Value enum: "card". */
    "type"?: "card" | (string & {});
};
/**
 * Shape $ (Value): {@link SavePaymentMethodRequestInput}. The request body for: Create a payment
 * method.
 */
export type SavePaymentMethodRequestInput = {
    /** Shape $ (Value): string. minLength: 1. */
    "customer_id": string;
    /** Shape $ (Value): string.  Value enum: "card". */
    "type"?: "card";
};
/**
 * Shape $ (Value): {@link SavePaymentMethodResponse}. A response containing
 * `PaymentMethodWithSetup` data.
 */
export type SavePaymentMethodResponse = {
    /**
     * Shape $ (Value): {@link PaymentMethodWithSetup}. The saved payment method, with
     * `client_setup` when the buyer must still complete processor setup before the payment method
     * can be used. A customer's saved payment details.
     */
    "data": PaymentMethodWithSetup;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Metadata returned with a response: the `api_version`,
     * `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id"?: string;
};
/**
 * Shape $ (Value): {@link ScopeRequirement}. The scopes an authorization decision required and
 * whether `all` or `any` of them were needed, returned in error details.
 */
export type ScopeRequirement = {
    /**
     * Shape $ (Value): string. How the required scopes are evaluated. all requires every listed
     * scope; any requires at least one listed scope. Example: "all". Value enum: "all", "any".
     */
    "mode": "all" | "any" | (string & {});
    /**
     * Shape $ (Value): Array of string. Canonical public scope names evaluated for this
     * authorization decision. Example: ["developer.sandboxes.write","accounts.api_keys.write"].
     * Shape $[] (Value): string.
     */
    "scopes": Array<string>;
};
export interface SdkResponse<T> {
    body: T;
    meta: Result<T>['meta'];
    raw: Result<T>['raw'];
}
/**
 * Shape $ (Value): {@link SelectableMerchant}. A merchant the caller can pick from, with its ID
 * and business name, returned in error details when a merchant must be chosen.
 */
export type SelectableMerchant = {
    /**
     * Shape $ (Value): string. Merchant business name. Empty when no business name is available.
     */
    "business_name": string;
    /** Shape $ (Value): string. Flint merchant ID available for selection. */
    "merchant_id": string;
};
/**
 * Shape $ (Value): {@link SelectableOrderPaymentIntent}. A payment intent on an order the caller
 * can pick, with its amount, status, and last payment error.
 */
export type SelectableOrderPaymentIntent = {
    /**
     * Shape $ (Value): {@link MoneyValue}. The amount requested from the buyer, including any
     * tip_money. Capturing doesn't change it: after a partial capture it still shows the requested
     * amount, and captured_money shows what was collected. On a standalone payment intent, PATCH
     * can change it only before the first confirmation attempt. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /**
     * Shape $ (Value): {@link PaymentErrorSummary}. Most recent payment failure, when one is
     * recorded. A summary of why a payment attempt failed, with a normalized error code, a
     * message, the failure time, and remediation.
     */
    "last_payment_error"?: PaymentErrorSummary;
    /**
     * Shape $ (Value): {@link PaymentCollection}. Client setup details for collecting this
     * payment. Client-side details for collecting payment from the buyer, such as the Stripe
     * settings to initialize Stripe.js.
     */
    "payment_collection"?: PaymentCollection;
    /** Shape $ (Value): string. Flint payment intent ID. */
    "payment_intent_id": string;
    /**
     * Shape $ (Value): string. Lifecycle status. requires_payment_method covers both a new payment
     * intent and one whose last attempt failed, so read last_payment_error with it. succeeded,
     * canceled, and expired are final. Refunds and disputes never change status. Value enum:
     * "requires_payment_method", "requires_confirmation", "requires_action", "processing",
     * "requires_capture", "canceled", "succeeded", "expired".
     */
    "status": "requires_payment_method"
        | "requires_confirmation"
        | "requires_action"
        | "processing"
        | "requires_capture"
        | "canceled"
        | "succeeded"
        | "expired"
        | (string & {});
    /**
     * Shape $ (Value): {@link MoneyValue}. Portion of this payment's amount allocated to a tip.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "tip_money": MoneyValue;
};
/**
 * Shape $ (Value): {@link SelectedProductOption}. An option and value chosen for a product
 * variant, such as size Large.
 */
export type SelectedProductOption = {
    /** Shape $ (Value): string. Identifier of the selected product option. */
    "option_id": string;
    /** Shape $ (Value): string. Name of the selected product option. */
    "option_name": string;
    /** Shape $ (Value): string. Identifier of the selected option value. */
    "option_value_id": string;
    /** Shape $ (Value): string. Selected value of the product option. */
    "value": string;
};
/**
 * Shape $ (Value): {@link SendOrderReceiptRequest}. The request body for: Send an order receipt.
 */
export type SendOrderReceiptRequest = {
    /**
     * Shape $ (Value): string. Receipt email, limited to 254 characters (Unicode code points)
     * after trimming surrounding whitespace. Format: email. minLength: 1. maxLength: 254.
     */
    "email"?: string;
};
