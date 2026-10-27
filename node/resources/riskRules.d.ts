import type { InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-4.js';
import type { CreateRiskRuleRequestInput } from '../declarations/types-9.js';
import type { RequestOptions } from '../declarations/types-40.js';
import type {
    RiskAttributeRegistry,
    RiskAttributeRegistryResponse,
    RiskRule,
    RiskRuleListResponse,
    RiskRuleResponse,
    RiskRulesCreateInput,
    RiskRulesGetAttributeRegistryInput,
    RiskRulesGetInput,
    RiskRulesListInput,
    RiskRulesRemoveInput,
    RiskRulesUpdateInput
} from '../declarations/types-43.js';
import type { SdkResponse } from '../declarations/types-44.js';
import type { UpdateRiskRuleRequestInput } from '../declarations/types-49.js';
import type { _SdkWithoutIdempotency } from '../declarations/types-62.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
export type {
    Result,
    Metadata,
    ErrorKind,
    DiagnosticEvent,
    InputValue,
    CredentialProvider,
    ServerSentEvent,
    SdkErrorCode,
    SdkErrorDetails,
    WorkloadIdentityOptions,
    WorkloadIdentitySource
} from '../runtime.js';
export type { CreateRiskRuleRequestInput, Credentials } from '../declarations/types-9.js';
export type { RequestOptions, ResourceReference, ResourceType, ResponseMeta, ResponseWarning } from '../declarations/types-40.js';
export type {
    RiskRule,
    RiskRuleResponse,
    RiskAttributeRegistry,
    RiskAttributeRegistryResponse,
    RiskRuleListResponse,
    RiskRulesCreateInput,
    RiskRulesRemoveInput,
    RiskRulesGetInput,
    RiskRulesGetAttributeRegistryInput,
    RiskRulesListInput,
    RiskRulesUpdateInput,
    RiskPredicateNodeInput,
    RiskRuleIssue,
    RiskPredicateNode,
    RiskAttribute
} from '../declarations/types-43.js';
export type { SdkResponse } from '../declarations/types-44.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-62.js';
export type { UpdateRiskRuleRequestInput } from '../declarations/types-49.js';
export type { ClientOptions } from '../declarations/types-4.js';
export type { MoneyValueInput, MoneyValue, NextAction, NextActionMerchantAccountSession } from '../declarations/types-31.js';
export type { AuthMode } from '../declarations/types-0.js';
export { makeCreateRiskRuleRequest } from '../declarations/types-65.js';
export { makeMoneyValue } from '../declarations/types-68.js';
export { makeRiskPredicateNode } from '../declarations/types-71.js';
export { makeUpdateRiskRuleRequest } from '../declarations/types-73.js';
export interface RiskRulesResource {
    /**
 * Creates a rule that applies from the next payment attempt. Flint validates the predicate and
 * checks every list before activating the rule. The rule is active unless you send status:
 * inactive. An environment can have 100 active rules, counting Flint's defaults. To check a draft
 * without saving it, use POST /v1/risk-previews.
 * @see reference/riskRules.md#riskrulescreate
 * POST /v1/risk-rules
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.riskRules.create({action: "review", description: "Synthetic SDK example", predicate:
 * {attribute: "payment_method_type", operator: "eq", value: "card"}}, { idempotencyKey:
 * idempotencyKey })
 */
    create(params: (InputValue<CreateRiskRuleRequestInput>) & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<RiskRule>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/riskRules.md#riskrulescreate
     */
    createWithResponse(params: (InputValue<CreateRiskRuleRequestInput>) & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<RiskRuleResponse>>;
    /**
 * Archives a rule. It stops running at once and can't be changed or restored. Flint's default
 * rules can't be archived; set them inactive instead.
 * @see reference/riskRules.md#riskrulesremove
 * DELETE /v1/risk-rules/{risk_rule_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.riskRules.remove("example", {}, { idempotencyKey: idempotencyKey })
 */
    remove(risk_rule_id: InputValue<string>, params?: {
        "expected_version"?: InputValue<`${bigint}` | bigint>;
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<RiskRule>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/riskRules.md#riskrulesremove
     */
    removeWithResponse(risk_rule_id: InputValue<string>, params?: {
        "expected_version"?: InputValue<`${bigint}` | bigint>;
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<RiskRuleResponse>>;
    /**
 * Retrieves a risk rule. The issues array lists anything that stops Flint from evaluating it.
 * @see reference/riskRules.md#riskrulesget
 * GET /v1/risk-rules/{risk_rule_id}
 * @example
 * client.riskRules.get("example")
 */
    get(risk_rule_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<RiskRule>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/riskRules.md#riskrulesget
     */
    getWithResponse(risk_rule_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<RiskRuleResponse>>;
    /**
 * Lists the attributes a predicate can read in this environment, with each one's value type,
 * operators, and the stage it becomes available. An attribute with is_available: false can't be
 * used yet. Payment intent metadata is also readable as payment_intent_metadata.{key}, which isn't
 * listed.
 * @see reference/riskRules.md#riskrulesgetattributeregistry
 * GET /v1/risk-rules/attributes
 * @example
 * client.riskRules.getAttributeRegistry()
 */
    getAttributeRegistry(params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<RiskAttributeRegistry>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/riskRules.md#riskrulesgetattributeregistry
     */
    getAttributeRegistryWithResponse(params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<RiskAttributeRegistryResponse>>;
    /**
 * Lists risk rules, newest first, including Flint's default rules. By default, includes active and
 * inactive rules. Archived rules appear only when status includes archived. This isn't the order
 * Flint evaluates them in.
 * @see reference/riskRules.md#riskruleslist
 * GET /v1/risk-rules
 * @example
 * client.riskRules.list()
 */
    list(params?: {
        "status"?: InputValue<Array<"active" | "inactive" | "archived">>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<RiskRuleListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/riskRules.md#riskruleslist
     */
    listWithResponse(params?: {
        "status"?: InputValue<Array<"active" | "inactive" | "archived">>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<RiskRuleListResponse>>;
    /** Iterate pages lazily.
     * @see reference/riskRules.md#riskruleslist
     */
    listPages(params?: {
        "status"?: InputValue<Array<"active" | "inactive" | "archived">>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<RiskRuleListResponse>;
    /** Iterate complete page bodies with HTTP metadata.
     * @see reference/riskRules.md#riskruleslist
     */
    listPagesWithResponse(params?: {
        "status"?: InputValue<Array<"active" | "inactive" | "archived">>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<SdkResponse<RiskRuleListResponse>>;
    /** Iterate items lazily.
     * @see reference/riskRules.md#riskruleslist
     */
    listItems(params?: {
        "status"?: InputValue<Array<"active" | "inactive" | "archived">>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<RiskRule>;
    /**
 * Changes a rule's action, predicate, description, or status, and increases its version. Send
 * expected_version to avoid overwriting another edit. Flint's default rules accept only status.
 * Activating a rule validates it again.
 * @see reference/riskRules.md#riskrulesupdate
 * PATCH /v1/risk-rules/{risk_rule_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.riskRules.update("example", {action: "allow"}, { idempotencyKey: idempotencyKey })
 */
    update(risk_rule_id: InputValue<string>, params: (InputValue<UpdateRiskRuleRequestInput>) & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<RiskRule>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/riskRules.md#riskrulesupdate
     */
    updateWithResponse(risk_rule_id: InputValue<string>, params: (InputValue<UpdateRiskRuleRequestInput>) & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<RiskRuleResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly riskRules: RiskRulesResource;
}
