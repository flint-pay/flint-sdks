import type { RiskPredicateNode, RiskPredicateNodeAllRequest, RiskPredicateNodeAllRequestInput } from './types-66.js';
import type { MoneyValue, MoneyValueInput } from './types-44.js';
import type { ResponseWarning, ResponseMeta, ResourceReference } from './types-62.js';
import type { InputValue } from '../runtime.js';
import type { CreateRiskPreviewRequestInput, CreateRiskRuleRequestInput, CreateSandboxRequestInput } from './types-14.js';
import type { DisputesAcceptParams } from './types-26.js';
import type { UpdateRiskRuleRequestInput } from './types-78.js';
import type { GiftCardNotificationRecipient, GiftCardNotificationRecipientInput, GiftCardNotification } from './types-29.js';
import type { GiftCard } from './types-28.js';
import type { PartnerAppWithRotatedSecret, PartnerAppsListParams } from './types-50.js';
import type { CreateDeveloperSandboxResult } from './types-9.js';
import type { PaymentMethodWithSetup } from './types-53.js';
import type { PaymentCollection, PaymentErrorSummary } from './types-51.js';
/** The `Any` variant of `RiskPredicateNode`. */
export type RiskPredicateNodeAny = {
    /**
     * Predicates of which at least one must match. minItems: 1. maxItems: 50. [] (Value): {@link
     * RiskPredicateNode}. A node in a risk rule condition: a comparison of an attribute, or an
     * `all`, `any`, or `not` group of other nodes.
     */
    "any": Array<RiskPredicateNode>;
};
/** The `Any` variant of `RiskPredicateNode`. */
export type RiskPredicateNodeAnyRequest = {
    /**
     * Predicates of which at least one must match. minItems: 1. maxItems: 50. [] (Value): {@link
     * RiskPredicateNodeRequest}. A node in a risk rule condition: a comparison of an attribute, or
     * an `all`, `any`, or `not` group of other nodes.
     */
    "any": Array<RiskPredicateNodeRequest>;
};
/** The `Any` variant of `RiskPredicateNode`. */
export type RiskPredicateNodeAnyRequestInput = {
    /**
     * Predicates of which at least one must match. minItems: 1. maxItems: 50. [] (Value): {@link
     * RiskPredicateNodeRequestInput}. A node in a risk rule condition: a comparison of an
     * attribute, or an `all`, `any`, or `not` group of other nodes.
     */
    "any": Array<RiskPredicateNodeRequestInput>;
};
/** The `Comparison` variant of `RiskPredicateNode`. */
export type RiskPredicateNodeComparison = {
    /**
     * The payment attribute to test. Read the attribute registry for the names a rule can use.
     * minLength: 1. maxLength: 280.
     */
    "attribute": string;
    /** How the attribute is compared. Value enum: "eq", "neq", "gt", "gte", "lt", "lte". */
    "operator": "eq" | "neq" | "gt" | "gte" | "lt" | "lte" | (string & {});
    /**
     * The value to compare with. oneOf[1] (Value): string. minLength: 1. oneOf[2] (Value):
     * integer. oneOf[3] (Value): boolean.
     */
    "value": ((string) | (number) | (boolean) | (unknown));
};
/** The `Comparison` variant of `RiskPredicateNode`. */
export type RiskPredicateNodeComparisonRequestInput = {
    /**
     * The payment attribute to test. Read the attribute registry for the names a rule can use.
     * minLength: 1. maxLength: 280.
     */
    "attribute": string;
    /** How the attribute is compared. Value enum: "eq", "neq", "gt", "gte", "lt", "lte". */
    "operator": "eq" | "neq" | "gt" | "gte" | "lt" | "lte";
    /**
     * The value to compare with. oneOf[1] (Value): string. minLength: 1. oneOf[2] (Value):
     * integer. oneOf[3] (Value): boolean.
     */
    "value": ((string) | (number) | (boolean));
};
/** The `In` variant of `RiskPredicateNode`. */
export type RiskPredicateNodeIn = {
    /**
     * The payment attribute to test. Read the attribute registry for the names a rule can use.
     * minLength: 1. maxLength: 280.
     */
    "attribute": string;
    /** How the attribute is compared. Value enum: "in". */
    "operator": "in" | (string & {});
    /**
     * The values to compare with. The predicate matches when the attribute equals any of them.
     * minItems: 1. maxItems: 100. [] (Value): string or integer or boolean. [].oneOf[1] (Value):
     * string. minLength: 1. [].oneOf[2] (Value): integer. [].oneOf[3] (Value): boolean.
     */
    "values": Array<((string) | (number) | (boolean) | (unknown))>;
};
/** The `In list` variant of `RiskPredicateNode`. */
export type RiskPredicateNodeInList = {
    /**
     * The payment attribute to test. Read the attribute registry for the names a rule can use.
     * minLength: 1. maxLength: 280.
     */
    "attribute": string;
    /**
     * Alias of the risk list to look the attribute's value up in. minLength: 1. pattern:
     * ^[a-z][a-z0-9_]{0,127}$.
     */
    "list_alias": string;
    /** How the attribute is compared. Value enum: "in_list". */
    "operator": "in_list" | (string & {});
};
/** The `In list` variant of `RiskPredicateNode`. */
export type RiskPredicateNodeInListRequestInput = {
    /**
     * The payment attribute to test. Read the attribute registry for the names a rule can use.
     * minLength: 1. maxLength: 280.
     */
    "attribute": string;
    /**
     * Alias of the risk list to look the attribute's value up in. minLength: 1. pattern:
     * ^[a-z][a-z0-9_]{0,127}$.
     */
    "list_alias": string;
    /** How the attribute is compared. Value enum: "in_list". */
    "operator": "in_list";
};
/** The `In` variant of `RiskPredicateNode`. */
export type RiskPredicateNodeInRequestInput = {
    /**
     * The payment attribute to test. Read the attribute registry for the names a rule can use.
     * minLength: 1. maxLength: 280.
     */
    "attribute": string;
    /** How the attribute is compared. Value enum: "in". */
    "operator": "in";
    /**
     * The values to compare with. The predicate matches when the attribute equals any of them.
     * minItems: 1. maxItems: 100. [] (Value): string or integer or boolean. [].oneOf[1] (Value):
     * string. minLength: 1. [].oneOf[2] (Value): integer. [].oneOf[3] (Value): boolean.
     */
    "values": Array<((string) | (number) | (boolean))>;
};
/** The `Is missing` variant of `RiskPredicateNode`. */
export type RiskPredicateNodeIsMissing = {
    /**
     * The payment attribute to test. Read the attribute registry for the names a rule can use.
     * minLength: 1. maxLength: 280.
     */
    "attribute": string;
    /** How the attribute is compared. Value enum: "is_missing". */
    "operator": "is_missing" | (string & {});
};
/** The `Is missing` variant of `RiskPredicateNode`. */
export type RiskPredicateNodeIsMissingRequestInput = {
    /**
     * The payment attribute to test. Read the attribute registry for the names a rule can use.
     * minLength: 1. maxLength: 280.
     */
    "attribute": string;
    /** How the attribute is compared. Value enum: "is_missing". */
    "operator": "is_missing";
};
/** The `Money comparison` variant of `RiskPredicateNode`. */
export type RiskPredicateNodeMoneyComparison = {
    /**
     * The amount to compare with. Monetary amount represented as integer minor units plus an ISO
     * 4217 currency code.
     */
    "amount_money": MoneyValue;
    /**
     * The payment attribute to test. Read the attribute registry for the names a rule can use.
     * Value enum: "amount_money".
     */
    "attribute": "amount_money" | (string & {});
    /** How the attribute is compared. Value enum: "eq", "neq", "gt", "gte", "lt", "lte". */
    "operator": "eq" | "neq" | "gt" | "gte" | "lt" | "lte" | (string & {});
};
/** The `Money comparison` variant of `RiskPredicateNode`. */
export type RiskPredicateNodeMoneyComparisonRequestInput = {
    /**
     * The amount to compare with. Monetary amount represented as integer minor units plus an ISO
     * 4217 currency code.
     */
    "amount_money": MoneyValueInput;
    /**
     * The payment attribute to test. Read the attribute registry for the names a rule can use.
     * Value enum: "amount_money".
     */
    "attribute": "amount_money";
    /** How the attribute is compared. Value enum: "eq", "neq", "gt", "gte", "lt", "lte". */
    "operator": "eq" | "neq" | "gt" | "gte" | "lt" | "lte";
};
/** The `Not` variant of `RiskPredicateNode`. */
export type RiskPredicateNodeNot = {
    /**
     * The predicate that must not match. A node in a risk rule condition: a comparison of an
     * attribute, or an `all`, `any`, or `not` group of other nodes.
     */
    "not": RiskPredicateNode;
};
/** The `Not` variant of `RiskPredicateNode`. */
export type RiskPredicateNodeNotRequest = {
    /**
     * The predicate that must not match. A node in a risk rule condition: a comparison of an
     * attribute, or an `all`, `any`, or `not` group of other nodes.
     */
    "not": RiskPredicateNodeRequest;
};
/** The `Not` variant of `RiskPredicateNode`. */
export type RiskPredicateNodeNotRequestInput = {
    /**
     * The predicate that must not match. A node in a risk rule condition: a comparison of an
     * attribute, or an `all`, `any`, or `not` group of other nodes.
     */
    "not": RiskPredicateNodeRequestInput;
};
/**
 * A node in a risk rule condition: a comparison of an attribute, or an `all`, `any`, or `not`
 * group of other nodes.
 */
export type RiskPredicateNodeRequest = ((RiskPredicateNodeAllRequest)
    | (RiskPredicateNodeAnyRequest)
    | (RiskPredicateNodeNotRequest)
    | (RiskPredicateNodeComparison)
    | (RiskPredicateNodeMoneyComparison)
    | (RiskPredicateNodeIn)
    | (RiskPredicateNodeInList)
    | (RiskPredicateNodeIsMissing)
    | (Record<string, unknown>));
/**
 * A node in a risk rule condition: a comparison of an attribute, or an `all`, `any`, or `not`
 * group of other nodes.
 */
export type RiskPredicateNodeRequestInput = ((RiskPredicateNodeAllRequestInput)
    | (RiskPredicateNodeAnyRequestInput)
    | (RiskPredicateNodeNotRequestInput)
    | (RiskPredicateNodeComparisonRequestInput)
    | (RiskPredicateNodeMoneyComparisonRequestInput)
    | (RiskPredicateNodeInRequestInput)
    | (RiskPredicateNodeInListRequestInput)
    | (RiskPredicateNodeIsMissingRequestInput));
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
     * Resource, collection, or operation result returned by this request. The result of validating
     * a proposed risk rule: whether it is valid, any issues found, warnings, and an analysis of
     * the rule.
     */
    "data": RiskPreview;
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
export type RiskPreviewsCreateParams = (CreateRiskPreviewRequestInput)
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
/** A rule for assessing and handling payment risk. */
export type RiskRule = {
    /**
     * What Flint does with a payment the rule matches. Value enum: "allow", "block", "review",
     * "require_3ds".
     */
    "action": "allow" | "block" | "review" | "require_3ds" | (string & {});
    /** Which payments the rule applies to. Value enum: "all_payments", "on_session_only". */
    "applicability": "all_payments" | "on_session_only" | (string & {});
    /**
     * RFC3339 timestamp. `null` when the resource isn't archived. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "archived_at": string | null;
    /** Names of the payment attributes the rule reads. [] (Value): string. */
    "attributes_used": Array<string>;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
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
    /**
     * Whether Flint manages the rule or you created it. Value enum: "system_default", "merchant".
     */
    "origin": "system_default" | "merchant" | (string & {});
    /**
     * The condition a payment must meet for the rule to match. A node in a risk rule condition: a
     * comparison of an attribute, or an `all`, `any`, or `not` group of other nodes.
     */
    "predicate": RiskPredicateNode;
    /** ID of the saved rule to check. Example: "rule_01KEZF7C00FWGAQJXXA8CRA319". */
    "risk_rule_id": string;
    /**
     * When Flint evaluates the rule for a payment. Value enum: "pre_authorization",
     * "post_authorization".
     */
    "stage": "pre_authorization" | "post_authorization" | (string & {});
    /** Whether the rule runs. Value enum: "active", "inactive", "archived". */
    "status": "active" | "inactive" | "archived" | (string & {});
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
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
    /** Which payments the rule applies to. Value enum: "all_payments", "on_session_only". */
    "applicability": "all_payments" | "on_session_only" | (string & {});
    /** Names of the payment attributes the rule reads. [] (Value): string. */
    "attributes_used": Array<string>;
    /** Aliases of the risk lists the rule references. [] (Value): string. */
    "list_aliases_used": Array<string>;
    /**
     * When Flint evaluates the rule for a payment. Value enum: "pre_authorization",
     * "post_authorization".
     */
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
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * RiskRule}. A rule for assessing and handling payment risk.
     */
    "data": Array<RiskRule>;
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
/** A response containing `RiskRule` data. */
export type RiskRuleResponse = {
    /**
     * Resource, collection, or operation result returned by this request. A rule for assessing and
     * handling payment risk.
     */
    "data": RiskRule;
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
export type RiskRulesCreateParams = (InputValue<CreateRiskRuleRequestInput>)
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
export type RiskRulesDeleteParams = {
    /**
     * Optional risk rule version last read by the caller. Format: int64. minimum: 1. maximum:
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
export type RiskRulesGetAttributesParams = DisputesAcceptParams;
export type RiskRulesGetParams = DisputesAcceptParams;
export type RiskRulesListParams = {
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
export type RiskRulesUpdateParams = (UpdateRiskRuleRequestInput)
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
    "notification"?: GiftCardNotificationRecipient;
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
/**
 * The gift card after its code was rotated, with the new `code` while it can be recovered and the
 * notification sent.
 */
export type RotateGiftCardCodeResult = {
    /**
     * The full current code. Omitted after the 24-hour recovery window or when this code has been
     * replaced.
     */
    "code"?: string;
    /**
     * When recovery of this code expires. Omitted when the code cannot be recovered. Format:
     * date-time. Example: "2026-08-02T16:00:00Z".
     */
    "code_recovery_expires_at"?: string;
    /**
     * The gift card after the command. Merchant-issued purchased gift card. Posted balance
     * includes reserved value; available value is balance minus reservations. Frozen value remains
     * part of outstanding liability. Gift cards are independent resources and cannot be
     * transferred across merchants or currencies.
     */
    "gift_card": GiftCard;
    /**
     * The notification the command created because the request included `notification`. Omitted
     * otherwise. A message sent to a gift card recipient.
     */
    "gift_card_notification"?: GiftCardNotification;
};
/** A response containing `RotateGiftCardCodeResult` data. */
export type RotateGiftCardCodeResultResponse = {
    /**
     * Resource, collection, or operation result returned by this request. The gift card after its
     * code was rotated, with the new `code` while it can be recovered and the notification sent.
     */
    "data": RotateGiftCardCodeResult;
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
/** The request body for: Rotate partner app secret. */
export type RotatePartnerAppSecretRequestInput = {
    /**
     * Rotate only if this matches the app's current version. A mismatch returns HTTP 409
     * VERSION_CONFLICT. Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z". */
    "expire_previous_secret_at"?: string | globalThis.Date;
};
/** A response containing `PartnerAppWithRotatedSecret` data. */
export type RotatePartnerAppSecretResponse = {
    /**
     * Resource, collection, or operation result returned by this request. A partner app returned
     * with its newly issued client secret after rotation. An application that merchants can
     * authorize to access their accounts.
     */
    "data": PartnerAppWithRotatedSecret;
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
/** The request body for: Rotate webhook secret. */
export type RotateWebhookSecretRequest = {
    /**
     * Version last read from the resource returned in `data` (the primary resource for a result
     * object). The write fails with `VERSION_CONFLICT` if it has changed. Requiredness depends on
     * the operation and fields being changed. Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * When the replaced secret stops signing. Omit for a 24-hour overlap; send a time at or before
     * now to stop it immediately. Must be no later than 7 days from now. Null is not accepted.
     * Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "expire_previous_secret_at"?: string;
};
/** The request body for: Rotate webhook secret. */
export type RotateWebhookSecretRequestInput = {
    /**
     * Version last read from the resource returned in `data` (the primary resource for a result
     * object). The write fails with `VERSION_CONFLICT` if it has changed. Requiredness depends on
     * the operation and fields being changed. Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * When the replaced secret stops signing. Omit for a 24-hour overlap; send a time at or before
     * now to stop it immediately. Must be no later than 7 days from now. Null is not accepted.
     * Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "expire_previous_secret_at"?: string | globalThis.Date;
};
/** An isolated environment for testing an integration. */
export type Sandbox = {
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /**
     * The onboarding state the sandbox starts in, and returns to when you reset it. `complete`
     * prefills a verified test identity; `not_started` leaves requirements due so you can rehearse
     * onboarding. Value enum: "complete", "not_started".
     */
    "initial_onboarding": "complete" | "not_started" | (string & {});
    /**
     * Whether this is the merchant's one default sandbox. It can be reset but cannot be archived.
     */
    "is_default": boolean;
    /** Sandbox name. Archiving appends (Archived XXXXXXXX) to free the original name for reuse. */
    "name": string;
    /**
     * When the last reset stopped after repeated failures. Before data deletion starts, the
     * sandbox keeps its previous data and remains usable. Once deletion starts, requests are
     * blocked until you retry the reset or archive a non-default sandbox. Null when no reset has
     * failed or a later reset succeeded. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "reset_failed_at": string | null;
    /**
     * Unique identifier for this sandbox, prefixed `test_`. Example:
     * "test_01KEZF7C00JC77HTMTB2XHNPE0".
     */
    "sandbox_id": string;
    /**
     * Sandbox availability. Active sandboxes accept test requests. Archived sandboxes are retired,
     * with their API keys revoked; reset preserves an active sandbox and its credentials. Value
     * enum: "active", "archived".
     */
    "status": "active" | "archived" | (string & {});
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
};
/** A page of `Sandbox` objects. */
export type SandboxListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * Sandbox}. An isolated environment for testing an integration.
     */
    "data": Array<Sandbox>;
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
/** A response containing `Sandbox` data. */
export type SandboxResponse = {
    /**
     * Resource, collection, or operation result returned by this request. An isolated environment
     * for testing an integration.
     */
    "data": Sandbox;
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
/** A response containing `CreateDeveloperSandboxResult` data. */
export type SandboxWithAPIKeyResponse = {
    /**
     * Resource, collection, or operation result returned by this request. The created sandbox is
     * the primary resource, with the API key and one-time secret_key when issue_test_key is true.
     */
    "data": CreateDeveloperSandboxResult;
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
export type SandboxesCreateParams = (CreateSandboxRequestInput);
export type SandboxesDeleteParams = {};
export type SandboxesGetParams = {};
export type SandboxesListParams = PartnerAppsListParams;
export type SandboxesResetParams = {};
/** The request body for: Save a gift card to your account. */
export type SaveMeGiftCardRequest = ({
    /** The gift card's code. Spaces and hyphens are ignored. minLength: 1. */
    "code"?: string;
    /**
     * The proof that the buyer can use the card: its code, or the private recipient link they
     * received. Value enum: "code", "recipient_access".
     */
    "credential_type": "code" | "recipient_access" | (string & {});
    /**
     * ID of the recipient access grant, from the path of the private recipient link. minLength: 1.
     * Example: "gcg_01KEZF7C00BTDW4CJQTB38Q828".
     */
    "grant_id"?: string;
    /** Token from the fragment of the private recipient link. minLength: 1. */
    "recipient_access_token"?: string;
})
    & ((Exclude<SaveMeGiftCardRequestCode & object, readonly unknown[]>)
    | (Exclude<SaveMeGiftCardRequestRecipientAccess & object, readonly unknown[]>)
    | (Record<string, unknown>));
/** The `code` variant of `SaveMeGiftCardRequest`. */
export type SaveMeGiftCardRequestCode = ({
    /** The gift card's code. Spaces and hyphens are ignored. minLength: 1. */
    "code": string;
    /**
     * The proof that the buyer can use the card: its code, or the private recipient link they
     * received. Value enum: "code".
     */
    "credential_type": "code" | (string & {});
    /**
     * ID of the recipient access grant, from the path of the private recipient link. minLength: 1.
     * Example: "gcg_01KEZF7C00BTDW4CJQTB38Q828".
     */
    "grant_id"?: string;
    /** Token from the fragment of the private recipient link. minLength: 1. */
    "recipient_access_token"?: string;
})
    & (({
    /**
     * The proof that the buyer can use the card: its code, or the private recipient link they
     * received. Value enum: "code".
     */
    "credential_type": unknown;
    /** The gift card's code. Spaces and hyphens are ignored. minLength: 1. */
    "code": string;
}));
/** The `code` variant of `SaveMeGiftCardRequest`. */
export type SaveMeGiftCardRequestCodeInput = ({
    /** The gift card's code. Spaces and hyphens are ignored. minLength: 1. */
    "code": string;
    /**
     * The proof that the buyer can use the card: its code, or the private recipient link they
     * received. Value enum: "code".
     */
    "credential_type": "code";
    /**
     * ID of the recipient access grant, from the path of the private recipient link. minLength: 1.
     * Example: "gcg_01KEZF7C00BTDW4CJQTB38Q828".
     */
    "grant_id"?: string;
    /** Token from the fragment of the private recipient link. minLength: 1. */
    "recipient_access_token"?: string;
})
    & (({
    /**
     * The proof that the buyer can use the card: its code, or the private recipient link they
     * received. Value enum: "code".
     */
    "credential_type": ("code") & ("code");
    /** The gift card's code. Spaces and hyphens are ignored. minLength: 1. */
    "code": string;
})
    & (({
    "grant_id"?: never;
}) & ({
    "recipient_access_token"?: never;
})));
/** The request body for: Save a gift card to your account. */
export type SaveMeGiftCardRequestInput = ({
    /** The gift card's code. Spaces and hyphens are ignored. minLength: 1. */
    "code"?: string;
    /**
     * The proof that the buyer can use the card: its code, or the private recipient link they
     * received. Value enum: "code", "recipient_access".
     */
    "credential_type": "code" | "recipient_access";
    /**
     * ID of the recipient access grant, from the path of the private recipient link. minLength: 1.
     * Example: "gcg_01KEZF7C00BTDW4CJQTB38Q828".
     */
    "grant_id"?: string;
    /** Token from the fragment of the private recipient link. minLength: 1. */
    "recipient_access_token"?: string;
})
    & ((Exclude<SaveMeGiftCardRequestCodeInput & object, readonly unknown[]>)
    | (Exclude<SaveMeGiftCardRequestRecipientAccessInput & object, readonly unknown[]>));
/** The `recipient_access` variant of `SaveMeGiftCardRequest`. */
export type SaveMeGiftCardRequestRecipientAccess = ({
    /** The gift card's code. Spaces and hyphens are ignored. minLength: 1. */
    "code"?: string;
    /**
     * The proof that the buyer can use the card: its code, or the private recipient link they
     * received. Value enum: "recipient_access".
     */
    "credential_type": "recipient_access" | (string & {});
    /**
     * ID of the recipient access grant, from the path of the private recipient link. minLength: 1.
     * Example: "gcg_01KEZF7C00BTDW4CJQTB38Q828".
     */
    "grant_id": string;
    /** Token from the fragment of the private recipient link. minLength: 1. */
    "recipient_access_token": string;
})
    & (({
    /**
     * The proof that the buyer can use the card: its code, or the private recipient link they
     * received. Value enum: "recipient_access".
     */
    "credential_type": unknown;
    /**
     * ID of the recipient access grant, from the path of the private recipient link. minLength: 1.
     * Example: "gcg_01KEZF7C00BTDW4CJQTB38Q828".
     */
    "grant_id": string;
    /** Token from the fragment of the private recipient link. minLength: 1. */
    "recipient_access_token": string;
}));
/** The `recipient_access` variant of `SaveMeGiftCardRequest`. */
export type SaveMeGiftCardRequestRecipientAccessInput = ({
    /** The gift card's code. Spaces and hyphens are ignored. minLength: 1. */
    "code"?: string;
    /**
     * The proof that the buyer can use the card: its code, or the private recipient link they
     * received. Value enum: "recipient_access".
     */
    "credential_type": "recipient_access";
    /**
     * ID of the recipient access grant, from the path of the private recipient link. minLength: 1.
     * Example: "gcg_01KEZF7C00BTDW4CJQTB38Q828".
     */
    "grant_id": string;
    /** Token from the fragment of the private recipient link. minLength: 1. */
    "recipient_access_token": string;
})
    & (({
    /**
     * The proof that the buyer can use the card: its code, or the private recipient link they
     * received. Value enum: "recipient_access".
     */
    "credential_type": ("recipient_access") & ("recipient_access");
    /**
     * ID of the recipient access grant, from the path of the private recipient link. minLength: 1.
     * Example: "gcg_01KEZF7C00BTDW4CJQTB38Q828".
     */
    "grant_id": string;
    /** Token from the fragment of the private recipient link. minLength: 1. */
    "recipient_access_token": string;
})
    & ({
    "code"?: never;
}));
/** The request body for: Create a payment method for the current buyer. */
export type SaveMePaymentMethodRequest = {
    /**
     * Kind of payment method to save. card is the only value and the default. Value enum: "card".
     */
    "type"?: "card" | (string & {});
};
/** The request body for: Create a payment method for the current buyer. */
export type SaveMePaymentMethodRequestInput = {
    /**
     * Kind of payment method to save. card is the only value and the default. Value enum: "card".
     */
    "type"?: "card";
};
/** The request body for: Create a payment method. */
export type SavePaymentMethodRequest = {
    /**
     * The customer to save the payment method for. minLength: 1. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     */
    "customer_id": string;
    /**
     * Kind of payment method to save. card is the only value and the default. Value enum: "card".
     */
    "type"?: "card" | (string & {});
};
/** The request body for: Create a payment method. */
export type SavePaymentMethodRequestInput = {
    /**
     * The customer to save the payment method for. minLength: 1. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     */
    "customer_id": string;
    /**
     * Kind of payment method to save. card is the only value and the default. Value enum: "card".
     */
    "type"?: "card";
};
/** A response containing `PaymentMethodWithSetup` data. */
export type SavePaymentMethodResponse = {
    /**
     * Resource, collection, or operation result returned by this request. The saved payment
     * method, with `client_setup` when the buyer must still complete processor setup before the
     * payment method can be used. A customer's saved payment details.
     */
    "data": PaymentMethodWithSetup;
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
/** Sets the start and end of a service fulfillment's appointment window. */
export type ScheduleFulfillmentRequest = {
    /**
     * Whether to send or suppress the buyer notification for this action. Value enum: "send",
     * "suppress".
     */
    "buyer_notification_behavior"?: "send" | "suppress" | (string & {});
    /** Resource version the caller last read. Format: uint64. minimum: 1. */
    "expected_version"?: number;
    /**
     * When the action occurred, as an RFC 3339 timestamp. On complete, also records completion
     * evidence. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "occurred_at"?: string;
    /**
     * Your internal note explaining this transition. Not included in buyer emails. minLength: 1.
     * maxLength: 500.
     */
    "reason_message"?: string;
    /**
     * End of the service appointment window, after scheduled_start_at, as an RFC 3339 timestamp.
     * Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "scheduled_end_at": string;
    /**
     * Start of the service appointment window, as an RFC 3339 timestamp. Format: date-time.
     * minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "scheduled_start_at": string;
    /** IANA timezone of the service appointment. minLength: 1. */
    "timezone"?: string;
};
/** Sets the start and end of a service fulfillment's appointment window. */
export type ScheduleFulfillmentRequestInput = {
    /**
     * Whether to send or suppress the buyer notification for this action. Value enum: "send",
     * "suppress".
     */
    "buyer_notification_behavior"?: "send" | "suppress";
    /** Resource version the caller last read. Format: uint64. minimum: 1. */
    "expected_version"?: number;
    /**
     * When the action occurred, as an RFC 3339 timestamp. On complete, also records completion
     * evidence. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "occurred_at"?: string | globalThis.Date;
    /**
     * Your internal note explaining this transition. Not included in buyer emails. minLength: 1.
     * maxLength: 500.
     */
    "reason_message"?: string;
    /**
     * End of the service appointment window, after scheduled_start_at, as an RFC 3339 timestamp.
     * Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "scheduled_end_at": string | globalThis.Date;
    /**
     * Start of the service appointment window, as an RFC 3339 timestamp. Format: date-time.
     * minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "scheduled_start_at": string | globalThis.Date;
    /** IANA timezone of the service appointment. minLength: 1. */
    "timezone"?: string;
};
/**
 * The scopes an authorization decision required and whether `all` or `any` of them were needed,
 * returned in error details.
 */
export type ScopeRequirement = {
    /**
     * How the required scopes are evaluated. all requires every listed scope; any requires at
     * least one listed scope. Example: "all". Value enum: "all", "any".
     */
    "mode": "all" | "any" | (string & {});
    /**
     * Canonical public scope names evaluated for this authorization decision. Example:
     * ["developer.sandboxes.write","accounts.api_keys.write"]. [] (Value): string.
     */
    "scopes": Array<string>;
};
/** A resource the caller can select for a request field. */
export type SelectableErrorResource = {
    /**
     * Amount for this choice when available. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValue;
    /** Resource display name when available. */
    "display_name"?: string;
    /**
     * Most recent payment failure when available. A summary of why a payment attempt failed, with
     * a normalized error code, a message, the failure time, and remediation.
     */
    "last_payment_error"?: PaymentErrorSummary;
    /**
     * Payment collection details when available. Client-side details for collecting payment from
     * the buyer, such as the Stripe settings to initialize Stripe.js.
     */
    "payment_collection"?: PaymentCollection;
    /**
     * Public Flint ID to submit in the refused request field. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "resource_id": string;
    /**
     * Stable public resource name for this choice. Example: "order". Value enum: "api_key",
     * "api_request_log", "balance", "balance_transaction", "bundle", "bundle_component",
     * "category", "checkout_session", "checkout_session_customer_verification", "credit_note",
     * "credit_note_allocation", "custom_domain", "customer", "customer_address",
     * "customer_deletion_request", "customer_email_preferences", "customer_session",
     * "customer_tax_exemption", "customer_verification", "delivery_choice_group",
     * "delivery_location_set", "delivery_method", "delivery_profile", "delivery_quote",
     * "delivery_rate", "delivery_rate_callback", "delivery_revocation", "delivery_selection",
     * "delivery_zone", "demo_session", "device", "discount", "dispute", "email_change_request",
     * "environment_grant", "file", "flint_wallet", "flint_wallet_card", "fraud_warning",
     * "fulfillment", "fulfillment_event", "fulfillment_notification", "gift_card",
     * "gift_card_funding_disposition", "gift_card_load", "gift_card_notification",
     * "gift_card_redemption", "gift_card_transaction", "image", "inventory_adjustment",
     * "inventory_allocation_policy", "inventory_allocation_policy_revision", "inventory_count",
     * "inventory_item", "inventory_level", "inventory_movement", "inventory_receipt",
     * "inventory_reservation", "inventory_reservation_line", "inventory_transfer",
     * "inventory_transfer_line", "invoice", "invoice_delivery_attempt", "invoice_late_fee",
     * "invoice_line_item", "invoice_manual_payment", "invoice_payment_attempt",
     * "invoice_payment_term", "license_key", "license_key_activation", "license_key_pool",
     * "license_key_pool_key", "location", "merchant", "merchant_billing_balance",
     * "merchant_billing_entry", "merchant_billing_invoice", "merchant_signup", "modifier",
     * "modifier_group", "modifier_set", "order", "order_charge", "order_edit", "order_line_item",
     * "order_line_item_modifier", "order_payment_attempt", "package", "package_item",
     * "partner_app", "partner_app_credential", "partner_app_install", "payment_attempt",
     * "payment_intent", "payment_link", "payment_link_custom_field", "payment_link_line_item",
     * "payment_method", "payment_method_domain", "payment_review", "payment_split", "payout",
     * "payout_destination", "payout_settings", "platform_fee", "platform_fee_balance_transaction",
     * "platform_fee_payout", "price_list", "price_list_price", "product", "product_option",
     * "product_option_value", "product_variant", "promotion", "promotion_code",
     * "purchase_refund_allocation", "reader", "refund", "refund_allocation",
     * "refund_line_item_adjustment", "remembered_buyer", "report", "report_download", "return",
     * "return_activity", "return_disposition", "return_inspection", "return_inspection_line_item",
     * "return_line_item", "return_policy", "return_policy_revision", "return_reason",
     * "return_receipt", "return_receipt_line_item", "return_resolution", "risk_list",
     * "risk_list_item", "risk_rule", "sandbox", "settings", "shipment", "subscription",
     * "subscription_delivery_migration", "subscription_line_item", "subscription_offer",
     * "subscription_payment_retry", "subscription_plan", "subscription_plan_line_item",
     * "tax_calculation_callback", "tax_connection", "tax_registration", "test_clock", "ticket",
     * "user", "webhook_delivery", "webhook_endpoint", "webhook_event", "workload_identity".
     */
    "resource_type": "api_key"
        | "api_request_log"
        | "balance"
        | "balance_transaction"
        | "bundle"
        | "bundle_component"
        | "category"
        | "checkout_session"
        | "checkout_session_customer_verification"
        | "credit_note"
        | "credit_note_allocation"
        | "custom_domain"
        | "customer"
        | "customer_address"
        | "customer_deletion_request"
        | "customer_email_preferences"
        | "customer_session"
        | "customer_tax_exemption"
        | "customer_verification"
        | "delivery_choice_group"
        | "delivery_location_set"
        | "delivery_method"
        | "delivery_profile"
        | "delivery_quote"
        | "delivery_rate"
        | "delivery_rate_callback"
        | "delivery_revocation"
        | "delivery_selection"
        | "delivery_zone"
        | "demo_session"
        | "device"
        | "discount"
        | "dispute"
        | "email_change_request"
        | "environment_grant"
        | "file"
        | "flint_wallet"
        | "flint_wallet_card"
        | "fraud_warning"
        | "fulfillment"
        | "fulfillment_event"
        | "fulfillment_notification"
        | "gift_card"
        | "gift_card_funding_disposition"
        | "gift_card_load"
        | "gift_card_notification"
        | "gift_card_redemption"
        | "gift_card_transaction"
        | "image"
        | "inventory_adjustment"
        | "inventory_allocation_policy"
        | "inventory_allocation_policy_revision"
        | "inventory_count"
        | "inventory_item"
        | "inventory_level"
        | "inventory_movement"
        | "inventory_receipt"
        | "inventory_reservation"
        | "inventory_reservation_line"
        | "inventory_transfer"
        | "inventory_transfer_line"
        | "invoice"
        | "invoice_delivery_attempt"
        | "invoice_late_fee"
        | "invoice_line_item"
        | "invoice_manual_payment"
        | "invoice_payment_attempt"
        | "invoice_payment_term"
        | "license_key"
        | "license_key_activation"
        | "license_key_pool"
        | "license_key_pool_key"
        | "location"
        | "merchant"
        | "merchant_billing_balance"
        | "merchant_billing_entry"
        | "merchant_billing_invoice"
        | "merchant_signup"
        | "modifier"
        | "modifier_group"
        | "modifier_set"
        | "order"
        | "order_charge"
        | "order_edit"
        | "order_line_item"
        | "order_line_item_modifier"
        | "order_payment_attempt"
        | "package"
        | "package_item"
        | "partner_app"
        | "partner_app_credential"
        | "partner_app_install"
        | "payment_attempt"
        | "payment_intent"
        | "payment_link"
        | "payment_link_custom_field"
        | "payment_link_line_item"
        | "payment_method"
        | "payment_method_domain"
        | "payment_review"
        | "payment_split"
        | "payout"
        | "payout_destination"
        | "payout_settings"
        | "platform_fee"
        | "platform_fee_balance_transaction"
        | "platform_fee_payout"
        | "price_list"
        | "price_list_price"
        | "product"
        | "product_option"
        | "product_option_value"
        | "product_variant"
        | "promotion"
        | "promotion_code"
        | "purchase_refund_allocation"
        | "reader"
        | "refund"
        | "refund_allocation"
        | "refund_line_item_adjustment"
        | "remembered_buyer"
        | "report"
        | "report_download"
        | "return"
        | "return_activity"
        | "return_disposition"
        | "return_inspection"
        | "return_inspection_line_item"
        | "return_line_item"
        | "return_policy"
        | "return_policy_revision"
        | "return_reason"
        | "return_receipt"
        | "return_receipt_line_item"
        | "return_resolution"
        | "risk_list"
        | "risk_list_item"
        | "risk_rule"
        | "sandbox"
        | "settings"
        | "shipment"
        | "subscription"
        | "subscription_delivery_migration"
        | "subscription_line_item"
        | "subscription_offer"
        | "subscription_payment_retry"
        | "subscription_plan"
        | "subscription_plan_line_item"
        | "tax_calculation_callback"
        | "tax_connection"
        | "tax_registration"
        | "test_clock"
        | "ticket"
        | "user"
        | "webhook_delivery"
        | "webhook_endpoint"
        | "webhook_event"
        | "workload_identity"
        | (string & {});
    /** Current public status when available. */
    "status"?: string;
    /**
     * Actions offered for this resource when the request was refused. An empty array means no
     * action is offered; an omitted field means actions were not reported. [] (Value): string.
     */
    "supported_actions"?: Array<string>;
    /**
     * Tip for this choice when available. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "tip_money"?: MoneyValue;
};
