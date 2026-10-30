import type { InputValue } from '../runtime.js';
import type { UpdateRiskListRequestInput, UpdateRiskRuleRequestInput } from './types-60.js';
import type { MoneyValue, MoneyValueInput } from './types-35.js';
import type { ResponseWarning, ResponseMeta } from './types-48.js';
import type { CreateRiskPreviewRequestInput, CreateRiskRuleRequestInput, CreateSandboxRequestInput } from './types-11.js';
import type { ResourceReference } from './types-47.js';
import type { GiftCardPurchaseRecipient, GiftCardNotificationRecipientInput, GiftCardNotification } from './types-24.js';
import type { GiftCard } from './types-23.js';
import type { PartnerAppWithRotatedSecret } from './types-39.js';
import type { CreateDeveloperSandboxResult } from './types-7.js';
import type { IssueSandboxAPIKeyRequestInput } from './types-32.js';
import type { PartnerAppsListParams, PaymentCollection, PaymentErrorSummary } from './types-40.js';
import type { PaymentMethodWithSetup } from './types-42.js';
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
     * date-time.
     */
    "code_recovery_expires_at"?: string;
    /**
     * Merchant-issued purchased gift card. Posted balance includes reserved value; available value
     * is balance minus reservations. Frozen value remains part of outstanding liability. Gift
     * cards are independent resources and cannot be transferred across merchants or currencies.
     */
    "gift_card": GiftCard;
    /** A message sent to a gift card recipient. */
    "gift_card_notification"?: GiftCardNotification;
};
/** A response containing `RotateGiftCardCodeResult` data. */
export type RotateGiftCardCodeResultResponse = {
    /**
     * The gift card after its code was rotated, with the new `code` while it can be recovered and
     * the notification sent.
     */
    "data": RotateGiftCardCodeResult;
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
/** The request body for: Rotate partner app secret. */
export type RotatePartnerAppSecretRequestInput = {
    /**
     * Rotate only if this matches the app's current version. A mismatch returns HTTP 409
     * VERSION_CONFLICT. Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. */
    "expire_previous_secret_at"?: string | globalThis.Date;
};
/** A response containing `PartnerAppWithRotatedSecret` data. */
export type RotatePartnerAppSecretResponse = {
    /**
     * A partner app returned with its newly issued client secret after rotation. An application
     * that merchants can authorize to access their accounts.
     */
    "data": PartnerAppWithRotatedSecret;
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
/** The request body for: Rotate webhook secret. */
export type RotateWebhookSecretRequest = {
    /** Format: uint64. minimum: 1. */
    "expected_version"?: number;
    /**
     * When the replaced secret stops signing. Omit for a 24-hour overlap; send a time at or before
     * now to stop it immediately. Must be no later than 7 days from now. Null is not accepted.
     * Format: date-time. minLength: 1.
     */
    "expire_previous_secret_at"?: string;
};
/** The request body for: Rotate webhook secret. */
export type RotateWebhookSecretRequestInput = {
    /** Format: uint64. minimum: 1. */
    "expected_version"?: number;
    /**
     * When the replaced secret stops signing. Omit for a 24-hour overlap; send a time at or before
     * now to stop it immediately. Must be no later than 7 days from now. Null is not accepted.
     * Format: date-time. minLength: 1.
     */
    "expire_previous_secret_at"?: string | globalThis.Date;
};
/** An isolated environment for testing an integration. */
export type Sandbox = {
    /** RFC3339 timestamp. Format: date-time. */
    "created_at"?: string;
    "is_default": boolean;
    "name": string;
    /**
     * ID of the replacement created when this sandbox was reset and archived. Omitted when this
     * sandbox has not been replaced by a reset.
     */
    "replaced_by_sandbox_id"?: string;
    /**
     * ID of the sandbox this sandbox replaced during a reset. Omitted when this sandbox was not
     * created by a reset.
     */
    "replaces_sandbox_id"?: string;
    "sandbox_id": string;
    /** Value enum: "active", "archived". */
    "status": "active" | "archived" | (string & {});
    /** RFC3339 timestamp. Format: date-time. */
    "updated_at"?: string;
};
/** A page of `Sandbox` objects. */
export type SandboxListResponse = {
    /**  [] (Value): {@link Sandbox}. An isolated environment for testing an integration. */
    "data": Array<Sandbox>;
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
/** A response containing `Sandbox` data. */
export type SandboxResponse = {
    /** An isolated environment for testing an integration. */
    "data": Sandbox;
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
/** A response containing `CreateDeveloperSandboxResult` data. */
export type SandboxWithAPIKeyResponse = {
    /**
     * The created sandbox is the primary resource, with the API key and one-time secret_key when
     * issue_test_key is true.
     */
    "data": CreateDeveloperSandboxResult;
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
export type SandboxesCreateAPIKeyParams = (IssueSandboxAPIKeyRequestInput);
export type SandboxesCreateParams = (CreateSandboxRequestInput);
export type SandboxesDeleteParams = {};
export type SandboxesGetParams = {};
export type SandboxesListParams = PartnerAppsListParams;
export type SandboxesResetParams = {};
/** The request body for: Save a gift card to your account. */
export type SaveMeGiftCardRequest = ({
    /** minLength: 1. */
    "code"?: string;
    /** Value enum: "code", "recipient_access". */
    "credential_type": "code" | "recipient_access" | (string & {});
    /** minLength: 1. */
    "grant_id"?: string;
    /** minLength: 1. */
    "recipient_access_token"?: string;
})
    & ((Exclude<SaveMeGiftCardRequestCode & object, readonly unknown[]>)
    | (Exclude<SaveMeGiftCardRequestRecipientAccess & object, readonly unknown[]>)
    | (Record<string, unknown>));
/** The `code` variant of `SaveMeGiftCardRequest`. */
export type SaveMeGiftCardRequestCode = ({
    /** minLength: 1. */
    "code": string;
    /** Value enum: "code". */
    "credential_type": "code" | (string & {});
    /** minLength: 1. */
    "grant_id"?: string;
    /** minLength: 1. */
    "recipient_access_token"?: string;
})
    & (({
    /** Value enum: "code". */
    "credential_type": unknown;
    /** minLength: 1. */
    "code": string;
}));
/** The `code` variant of `SaveMeGiftCardRequest`. */
export type SaveMeGiftCardRequestCodeInput = ({
    /** minLength: 1. */
    "code": string;
    /** Value enum: "code". */
    "credential_type": "code";
    /** minLength: 1. */
    "grant_id"?: string;
    /** minLength: 1. */
    "recipient_access_token"?: string;
})
    & (({
    /** Value enum: "code". */
    "credential_type": ("code") & ("code");
    /** minLength: 1. */
    "code": string;
})
    & (({
    "grant_id"?: never;
}) & ({
    "recipient_access_token"?: never;
})));
/** The request body for: Save a gift card to your account. */
export type SaveMeGiftCardRequestInput = ({
    /** minLength: 1. */
    "code"?: string;
    /** Value enum: "code", "recipient_access". */
    "credential_type": "code" | "recipient_access";
    /** minLength: 1. */
    "grant_id"?: string;
    /** minLength: 1. */
    "recipient_access_token"?: string;
})
    & ((Exclude<SaveMeGiftCardRequestCodeInput & object, readonly unknown[]>)
    | (Exclude<SaveMeGiftCardRequestRecipientAccessInput & object, readonly unknown[]>));
/** The `recipient_access` variant of `SaveMeGiftCardRequest`. */
export type SaveMeGiftCardRequestRecipientAccess = ({
    /** minLength: 1. */
    "code"?: string;
    /** Value enum: "recipient_access". */
    "credential_type": "recipient_access" | (string & {});
    /** minLength: 1. */
    "grant_id": string;
    /** minLength: 1. */
    "recipient_access_token": string;
})
    & (({
    /** Value enum: "recipient_access". */
    "credential_type": unknown;
    /** minLength: 1. */
    "grant_id": string;
    /** minLength: 1. */
    "recipient_access_token": string;
}));
/** The `recipient_access` variant of `SaveMeGiftCardRequest`. */
export type SaveMeGiftCardRequestRecipientAccessInput = ({
    /** minLength: 1. */
    "code"?: string;
    /** Value enum: "recipient_access". */
    "credential_type": "recipient_access";
    /** minLength: 1. */
    "grant_id": string;
    /** minLength: 1. */
    "recipient_access_token": string;
})
    & (({
    /** Value enum: "recipient_access". */
    "credential_type": ("recipient_access") & ("recipient_access");
    /** minLength: 1. */
    "grant_id": string;
    /** minLength: 1. */
    "recipient_access_token": string;
})
    & ({
    "code"?: never;
}));
/** The request body for: Create a payment method for the current buyer. */
export type SaveMePaymentMethodRequest = {
    /** Value enum: "card". */
    "type"?: "card" | (string & {});
};
/** The request body for: Create a payment method for the current buyer. */
export type SaveMePaymentMethodRequestInput = {
    /** Value enum: "card". */
    "type"?: "card";
};
/** The request body for: Create a payment method. */
export type SavePaymentMethodRequest = {
    /** The customer to save the payment method for. minLength: 1. */
    "customer_id": string;
    /**
     * Kind of payment method to save. card is the only value and the default. Value enum: "card".
     */
    "type"?: "card" | (string & {});
};
/** The request body for: Create a payment method. */
export type SavePaymentMethodRequestInput = {
    /** The customer to save the payment method for. minLength: 1. */
    "customer_id": string;
    /**
     * Kind of payment method to save. card is the only value and the default. Value enum: "card".
     */
    "type"?: "card";
};
/** A response containing `PaymentMethodWithSetup` data. */
export type SavePaymentMethodResponse = {
    /**
     * The saved payment method, with `client_setup` when the buyer must still complete processor
     * setup before the payment method can be used. A customer's saved payment details.
     */
    "data": PaymentMethodWithSetup;
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
    /** Public Flint ID to submit in the refused request field. */
    "resource_id": string;
    /**
     * Stable public resource name for this choice. Value enum: "api_key", "api_request_log",
     * "balance", "balance_transaction", "bundle", "bundle_component", "category",
     * "checkout_session", "checkout_session_customer_verification", "credit_note",
     * "credit_note_allocation", "custom_domain", "customer", "customer_address",
     * "customer_deletion_request", "customer_email_preferences", "customer_session",
     * "customer_verification", "delivery_location_set", "delivery_method", "delivery_profile",
     * "delivery_quote", "delivery_rate", "delivery_rate_callback", "delivery_revocation",
     * "delivery_selection", "delivery_zone", "demo_session", "device", "discount", "dispute",
     * "email_change_request", "environment_grant", "feedback_report", "file", "flint_wallet",
     * "flint_wallet_card", "fraud_warning", "fulfillment", "fulfillment_event",
     * "fulfillment_notification", "gift_card", "gift_card_funding_disposition", "gift_card_load",
     * "gift_card_notification", "gift_card_redemption", "gift_card_transaction", "image",
     * "inventory_adjustment", "inventory_allocation_policy",
     * "inventory_allocation_policy_revision", "inventory_count", "inventory_item",
     * "inventory_level", "inventory_movement", "inventory_receipt", "inventory_reservation",
     * "inventory_reservation_line", "inventory_transfer", "inventory_transfer_line", "invoice",
     * "invoice_delivery_attempt", "invoice_late_fee", "invoice_line_item",
     * "invoice_manual_payment", "invoice_payment_attempt", "invoice_payment_term", "location",
     * "merchant", "merchant_billing_balance", "merchant_billing_entry",
     * "merchant_billing_invoice", "modifier", "modifier_group", "modifier_set", "order",
     * "order_charge", "order_line_item", "order_line_item_modifier", "order_payment_attempt",
     * "organization", "package", "package_item", "partner_app", "partner_app_credential",
     * "partner_app_install", "payment_intent", "payment_link", "payment_link_custom_field",
     * "payment_link_line_item", "payment_method", "payment_method_domain", "payment_review",
     * "payout", "payout_destination", "payout_settings", "product", "product_option",
     * "product_option_value", "product_variant", "promotion", "promotion_code",
     * "purchase_refund_allocation", "refund", "refund_allocation", "refund_line_item_adjustment",
     * "report", "report_download", "return", "return_activity", "return_disposition",
     * "return_inspection", "return_inspection_line_item", "return_line_item", "return_policy",
     * "return_policy_revision", "return_reason", "return_receipt", "return_receipt_line_item",
     * "return_resolution", "risk_list", "risk_list_item", "risk_rule", "sandbox", "settings",
     * "shipment", "subscription", "subscription_delivery_migration", "subscription_line_item",
     * "subscription_offer", "subscription_payment_retry", "subscription_plan",
     * "subscription_plan_line_item", "tax_connection", "tax_registration", "test_clock", "user",
     * "webhook_delivery", "webhook_endpoint", "webhook_event", "workload_identity".
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
        | "customer_verification"
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
        | "feedback_report"
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
        | "location"
        | "merchant"
        | "merchant_billing_balance"
        | "merchant_billing_entry"
        | "merchant_billing_invoice"
        | "modifier"
        | "modifier_group"
        | "modifier_set"
        | "order"
        | "order_charge"
        | "order_line_item"
        | "order_line_item_modifier"
        | "order_payment_attempt"
        | "organization"
        | "package"
        | "package_item"
        | "partner_app"
        | "partner_app_credential"
        | "partner_app_install"
        | "payment_intent"
        | "payment_link"
        | "payment_link_custom_field"
        | "payment_link_line_item"
        | "payment_method"
        | "payment_method_domain"
        | "payment_review"
        | "payout"
        | "payout_destination"
        | "payout_settings"
        | "product"
        | "product_option"
        | "product_option_value"
        | "product_variant"
        | "promotion"
        | "promotion_code"
        | "purchase_refund_allocation"
        | "refund"
        | "refund_allocation"
        | "refund_line_item_adjustment"
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
        | "tax_connection"
        | "tax_registration"
        | "test_clock"
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
