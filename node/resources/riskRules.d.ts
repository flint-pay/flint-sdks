import type { WithResponseInfo, InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-5.js';
import type { RequestOptions } from '../declarations/types-47.js';
import type { RiskAttributeRegistry, RiskAttributeRegistryResponse } from '../declarations/types-51.js';
import type {
    RiskRule,
    RiskRuleListResponse,
    RiskRuleResponse,
    RiskRulesCreateParams,
    RiskRulesDeleteParams,
    RiskRulesGetAttributesParams,
    RiskRulesGetParams,
    RiskRulesListParams,
    RiskRulesUpdateParams
} from '../declarations/types-52.js';
import type { _SdkWithoutIdempotency } from '../declarations/types-61.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
export type {
    Result,
    ResponseInfo,
    WithResponseInfo,
    DiagnosticEvent,
    InputValue,
    CredentialProvider,
    ServerSentEvent,
    SdkErrorCode,
    SdkErrorDetails,
    WorkloadIdentityOptions,
    WorkloadIdentitySource
} from '../runtime.js';
export type {
    RiskRulesCreateParams,
    RiskRule,
    RiskRuleResponse,
    RiskRulesDeleteParams,
    RiskRulesGetParams,
    RiskRulesGetAttributesParams,
    RiskRulesListParams,
    RiskRuleListResponse,
    RiskRulesUpdateParams,
    RiskPredicateNodeInput,
    RiskPredicateNodeAllInput,
    RiskPredicateNodeAnyInput,
    RiskPredicateNodeNotInput,
    RiskPredicateNodeComparisonInput,
    RiskPredicateNodeMoneyComparisonInput,
    RiskPredicateNodeInInput,
    RiskPredicateNodeInListInput,
    RiskPredicateNodeIsMissingInput,
    RiskRuleIssue,
    RiskPredicateNode,
    RiskPredicateNodeAll,
    RiskPredicateNodeAny,
    RiskPredicateNodeNot,
    RiskPredicateNodeComparison,
    RiskPredicateNodeMoneyComparison,
    RiskPredicateNodeIn,
    RiskPredicateNodeInList,
    RiskPredicateNodeIsMissing
} from '../declarations/types-52.js';
export type { RequestOptions, ResourceReference } from '../declarations/types-47.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-61.js';
export type { RiskAttributeRegistry, RiskAttributeRegistryResponse, RiskAttribute } from '../declarations/types-51.js';
export type { ClientOptions } from '../declarations/types-5.js';
export type { CreateRiskRuleRequestInput } from '../declarations/types-11.js';
export type { MoneyValueInput, MoneyValue, NextAction } from '../declarations/types-35.js';
export type { AuthMode } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-12.js';
export type { ResourceType, ResponseMeta, ResponseWarning } from '../declarations/types-48.js';
export type { ReadinessMerchantAccountSession } from '../declarations/types-46.js';
export type { UpdateRiskRuleRequestInput } from '../declarations/types-60.js';
export { makeCreateRiskRuleRequest } from '../declarations/types-65.js';
export { makeMoneyValue } from '../declarations/types-69.js';
export {
    makeRiskPredicateNode,
    makeRiskPredicateNodeAll,
    makeRiskPredicateNodeAny,
    makeRiskPredicateNodeComparison,
    makeRiskPredicateNodeIn,
    makeRiskPredicateNodeInList,
    makeRiskPredicateNodeIsMissing,
    makeRiskPredicateNodeMoneyComparison,
    makeRiskPredicateNodeNot
} from '../declarations/types-72.js';
export { makeUpdateRiskRuleRequest } from '../declarations/types-74.js';
export interface RiskRulesResource {
    /**
 * Creates a rule that applies from the next payment attempt. Flint validates the predicate and
 * checks every list before activating the rule. The rule is active unless you send status:
 * inactive. An environment can have 100 active rules, counting Flint's defaults. To check a draft
 * without saving it, use `client.riskPreviews.create`.
 *
 * `POST /v1/risk-rules`
 * @see https://developers.withflintpay.com/docs/api/risk-controls#createRiskRule
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.riskRules.create({action: "review", description: "Synthetic SDK example", predicate:
 * {attribute: "payment_method_type", operator: "eq", value: "card"}}, { idempotencyKey:
 * idempotencyKey })
 */
    create(params: RiskRulesCreateParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<RiskRule, RiskRuleResponse>>;
    /**
 * Archives a rule. It stops running at once and can't be changed or restored. Flint's default
 * rules can't be archived; set them inactive instead.
 *
 * `DELETE /v1/risk-rules/{risk_rule_id}`
 * @param risk_rule_id Flint risk rule ID.
 * @see https://developers.withflintpay.com/docs/api/risk-controls#deleteRiskRule
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.riskRules.delete("rule_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, { idempotencyKey: idempotencyKey
 * })
 */
    delete(risk_rule_id: InputValue<string>, params?: RiskRulesDeleteParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<RiskRule, RiskRuleResponse>>;
    /**
 * Retrieves a risk rule. The issues array lists anything that stops Flint from evaluating it.
 *
 * `GET /v1/risk-rules/{risk_rule_id}`
 * @param risk_rule_id Flint risk rule ID.
 * @see https://developers.withflintpay.com/docs/api/risk-controls#getRiskRule
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.riskRules.get("rule_01ARZ3NDEKTSV4RRFFQ69G5FAV")
 */
    get(risk_rule_id: InputValue<string>, params?: RiskRulesGetParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<RiskRule, RiskRuleResponse>>;
    /**
 * Lists the attributes a predicate can read in this environment, with each one's value type,
 * operators, and the stage it becomes available. An attribute with is_available: false can't be
 * used yet. Payment intent metadata is also readable as payment_intent_metadata.{key}, which isn't
 * listed.
 *
 * `GET /v1/risk-rules/attributes`
 * @see https://developers.withflintpay.com/docs/api/risk-controls#getRiskRuleAttributes
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.riskRules.getAttributes()
 */
    getAttributes(params?: RiskRulesGetAttributesParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<RiskAttributeRegistry, RiskAttributeRegistryResponse>>;
    /**
 * Lists risk rules, newest first, including Flint's default rules. By default, includes active and
 * inactive rules. Archived rules appear only when status includes archived. This isn't the order
 * Flint evaluates them in. Default order: created_at descending, then risk_rule_id descending.
 *
 * `GET /v1/risk-rules`
 * @see https://developers.withflintpay.com/docs/api/risk-controls#listRiskRules
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.riskRules.list()
 */
    list(params?: RiskRulesListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<RiskRuleListResponse, RiskRuleListResponse>>;
    /** Iterate pages lazily.
     * @see https://developers.withflintpay.com/docs/api/risk-controls#listRiskRules
     */
    listPages(params?: RiskRulesListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<WithResponseInfo<RiskRuleListResponse, RiskRuleListResponse>>;
    /** Iterate items lazily.
     * @see https://developers.withflintpay.com/docs/api/risk-controls#listRiskRules
     */
    listItems(params?: RiskRulesListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<RiskRule>;
    /**
 * Changes a rule's action, predicate, description, or status, and increases its version. Send
 * expected_version to avoid overwriting another edit. Flint's default rules accept only status.
 * Activating a rule validates it again.
 *
 * `PATCH /v1/risk-rules/{risk_rule_id}`
 * @param risk_rule_id Flint risk rule ID.
 * @see https://developers.withflintpay.com/docs/api/risk-controls#updateRiskRule
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.riskRules.update("rule_01ARZ3NDEKTSV4RRFFQ69G5FAV", {description: "Review higher-risk
 * card payments"}, { idempotencyKey: idempotencyKey })
 */
    update(risk_rule_id: InputValue<string>, params: RiskRulesUpdateParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<RiskRule, RiskRuleResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly riskRules: RiskRulesResource;
}
