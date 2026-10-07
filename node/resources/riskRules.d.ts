export { SdkError, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
export type { Result, Metadata, ErrorKind, DiagnosticEvent, InputValue, ServerSentEvent } from '../runtime.js';
import type { InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/ClientOptions.js';
import type { MoneyValueInput } from '../declarations/MoneyValueInput.js';
import type { RequestOptions } from '../declarations/RequestOptions.js';
import type { RiskPredicateNodeInput } from '../declarations/RiskPredicateNodeInput.js';
import type { RiskRule } from '../declarations/RiskRule.js';
import type { RiskRuleAttributeRegistryResponse } from '../declarations/RiskRuleAttributeRegistryResponse.js';
import type { RiskRuleListResponse } from '../declarations/RiskRuleListResponse.js';
import type { RiskRuleResponse } from '../declarations/RiskRuleResponse.js';
import type { RiskRulesCreateInput } from '../declarations/RiskRulesCreateInput.js';
import type { RiskRulesCreateResponse } from '../declarations/RiskRulesCreateResponse.js';
import type { RiskRulesGetAttributeRegistryInput } from '../declarations/RiskRulesGetAttributeRegistryInput.js';
import type { RiskRulesGetAttributeRegistryResponse } from '../declarations/RiskRulesGetAttributeRegistryResponse.js';
import type { RiskRulesGetInput } from '../declarations/RiskRulesGetInput.js';
import type { RiskRulesGetResponse } from '../declarations/RiskRulesGetResponse.js';
import type { RiskRulesListInput } from '../declarations/RiskRulesListInput.js';
import type { RiskRulesListResponse } from '../declarations/RiskRulesListResponse.js';
import type { RiskRulesRemoveInput } from '../declarations/RiskRulesRemoveInput.js';
import type { RiskRulesRemoveResponse } from '../declarations/RiskRulesRemoveResponse.js';
import type { RiskRulesUpdateInput } from '../declarations/RiskRulesUpdateInput.js';
import type { RiskRulesUpdateResponse } from '../declarations/RiskRulesUpdateResponse.js';
import type { SdkResponse } from '../declarations/SdkResponse.js';
import type { _SdkPayloadAt } from '../declarations/_SdkPayloadAt.js';
import type { _SdkWithoutIdempotency } from '../declarations/_SdkWithoutIdempotency.js';
export interface RiskRulesResource {
    /**
 * Create a risk rule for the authenticated merchant environment.
 * POST /v1/risk-rules
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.riskRules.create({action: "review", description: "Synthetic SDK example", predicate: {attribute: "payment_method_type", operator: "eq", value: "card"}}, { idempotencyKey: idempotencyKey })
 */
    create(params: (InputValue<{ "action": "allow" | "block" | "review" | "require_3ds"; "description": string; "enabled"?: boolean; "predicate": (({ "all": Array<RiskPredicateNodeInput>; }) | ({ "any": Array<RiskPredicateNodeInput>; }) | ({ "not": RiskPredicateNodeInput; }) | ({ "attribute": string; "operator": "eq" | "neq" | "gt" | "gte" | "lt" | "lte"; "value": ((string) | (number) | (boolean)); }) | ({ "amount_money": MoneyValueInput; "attribute": "amount_money"; "operator": "eq" | "neq" | "gt" | "gte" | "lt" | "lte"; }) | ({ "attribute": string; "operator": "in"; "values": Array<((string) | (number) | (boolean))>; }) | ({ "attribute": string; "list_alias": string; "operator": "in_list"; }) | ({ "attribute": string; "operator": "is_missing"; })); }>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<RiskRuleResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    createWithResponse(params: (InputValue<{ "action": "allow" | "block" | "review" | "require_3ds"; "description": string; "enabled"?: boolean; "predicate": (({ "all": Array<RiskPredicateNodeInput>; }) | ({ "any": Array<RiskPredicateNodeInput>; }) | ({ "not": RiskPredicateNodeInput; }) | ({ "attribute": string; "operator": "eq" | "neq" | "gt" | "gte" | "lt" | "lte"; "value": ((string) | (number) | (boolean)); }) | ({ "amount_money": MoneyValueInput; "attribute": "amount_money"; "operator": "eq" | "neq" | "gt" | "gte" | "lt" | "lte"; }) | ({ "attribute": string; "operator": "in"; "values": Array<((string) | (number) | (boolean))>; }) | ({ "attribute": string; "list_alias": string; "operator": "in_list"; }) | ({ "attribute": string; "operator": "is_missing"; })); }>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<RiskRulesCreateResponse>>;
    /**
 * Retire a risk rule for the authenticated merchant environment.
 * DELETE /v1/risk-rules/{risk_rule_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.riskRules.remove("example", {}, { idempotencyKey: idempotencyKey })
 */
    remove(risk_rule_id: InputValue<string>, params?: { "expected_version"?: InputValue<string>; "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<RiskRuleResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    removeWithResponse(risk_rule_id: InputValue<string>, params?: { "expected_version"?: InputValue<string>; "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<RiskRulesRemoveResponse>>;
    /**
 * Get a risk rule for the authenticated merchant environment.
 * GET /v1/risk-rules/{risk_rule_id}
 * @example
 * client.riskRules.get("example")
 */
    get(risk_rule_id: InputValue<string>, params?: { "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<_SdkPayloadAt<RiskRuleResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    getWithResponse(risk_rule_id: InputValue<string>, params?: { "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<RiskRulesGetResponse>>;
    /**
 * Get the risk rule attribute registry for the authenticated merchant environment.
 * GET /v1/risk-rules/attributes
 * @example
 * client.riskRules.getAttributeRegistry()
 */
    getAttributeRegistry(params?: { "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<_SdkPayloadAt<RiskRuleAttributeRegistryResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    getAttributeRegistryWithResponse(params?: { "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<RiskRulesGetAttributeRegistryResponse>>;
    /**
 * List risk rules for the authenticated merchant environment.
 * GET /v1/risk-rules
 * @example
 * client.riskRules.list()
 */
    list(params?: { "include_archived"?: InputValue<boolean>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<RiskRuleListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    listWithResponse(params?: { "include_archived"?: InputValue<boolean>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<RiskRulesListResponse>>;
    listPages(params?: { "include_archived"?: InputValue<boolean>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<RiskRuleListResponse>;
    listPagesWithResponse(params?: { "include_archived"?: InputValue<boolean>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<SdkResponse<RiskRulesListResponse>>;
    listItems(params?: { "include_archived"?: InputValue<boolean>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<RiskRule>;
    /**
 * Update a risk rule for the authenticated merchant environment.
 * PATCH /v1/risk-rules/{risk_rule_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.riskRules.update("example", {action: "allow"}, { idempotencyKey: idempotencyKey })
 */
    update(risk_rule_id: InputValue<string>, params: (InputValue<({ "action"?: "allow" | "block" | "review" | "require_3ds"; "description"?: string; "enabled"?: boolean; "expected_version"?: string; "predicate"?: (({ "all": Array<RiskPredicateNodeInput>; }) | ({ "any": Array<RiskPredicateNodeInput>; }) | ({ "not": RiskPredicateNodeInput; }) | ({ "attribute": string; "operator": "eq" | "neq" | "gt" | "gte" | "lt" | "lte"; "value": ((string) | (number) | (boolean)); }) | ({ "amount_money": MoneyValueInput; "attribute": "amount_money"; "operator": "eq" | "neq" | "gt" | "gte" | "lt" | "lte"; }) | ({ "attribute": string; "operator": "in"; "values": Array<((string) | (number) | (boolean))>; }) | ({ "attribute": string; "list_alias": string; "operator": "in_list"; }) | ({ "attribute": string; "operator": "is_missing"; })); }) & (({ "action": unknown; }) | ({ "predicate": unknown; }) | ({ "description": unknown; }) | ({ "enabled": unknown; }))>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<RiskRuleResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    updateWithResponse(risk_rule_id: InputValue<string>, params: (InputValue<({ "action"?: "allow" | "block" | "review" | "require_3ds"; "description"?: string; "enabled"?: boolean; "expected_version"?: string; "predicate"?: (({ "all": Array<RiskPredicateNodeInput>; }) | ({ "any": Array<RiskPredicateNodeInput>; }) | ({ "not": RiskPredicateNodeInput; }) | ({ "attribute": string; "operator": "eq" | "neq" | "gt" | "gte" | "lt" | "lte"; "value": ((string) | (number) | (boolean)); }) | ({ "amount_money": MoneyValueInput; "attribute": "amount_money"; "operator": "eq" | "neq" | "gt" | "gte" | "lt" | "lte"; }) | ({ "attribute": string; "operator": "in"; "values": Array<((string) | (number) | (boolean))>; }) | ({ "attribute": string; "list_alias": string; "operator": "in_list"; }) | ({ "attribute": string; "operator": "is_missing"; })); }) & (({ "action": unknown; }) | ({ "predicate": unknown; }) | ({ "description": unknown; }) | ({ "enabled": unknown; }))>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<RiskRulesUpdateResponse>>;
  }
export declare class Client {

  constructor(options?: ClientOptions);

  close(): Promise<void>;
readonly riskRules: RiskRulesResource;
}
export type { RiskPredicateNodeInput } from '../declarations/RiskPredicateNodeInput.js';
export type { MoneyValueInput } from '../declarations/MoneyValueInput.js';
export type { RequestOptions } from '../declarations/RequestOptions.js';
export type { _SdkPayloadAt } from '../declarations/_SdkPayloadAt.js';
export type { RiskRuleResponse } from '../declarations/RiskRuleResponse.js';
export type { SdkResponse } from '../declarations/SdkResponse.js';
export type { RiskRulesCreateResponse } from '../declarations/RiskRulesCreateResponse.js';
export type { RiskRulesRemoveResponse } from '../declarations/RiskRulesRemoveResponse.js';
export type { _SdkWithoutIdempotency } from '../declarations/_SdkWithoutIdempotency.js';
export type { RiskRulesGetResponse } from '../declarations/RiskRulesGetResponse.js';
export type { RiskRuleAttributeRegistryResponse } from '../declarations/RiskRuleAttributeRegistryResponse.js';
export type { RiskRulesGetAttributeRegistryResponse } from '../declarations/RiskRulesGetAttributeRegistryResponse.js';
export type { RiskRuleListResponse } from '../declarations/RiskRuleListResponse.js';
export type { RiskRulesListResponse } from '../declarations/RiskRulesListResponse.js';
export type { RiskRule } from '../declarations/RiskRule.js';
export type { RiskRulesUpdateResponse } from '../declarations/RiskRulesUpdateResponse.js';
export type { RiskRulesCreateInput } from '../declarations/RiskRulesCreateInput.js';
export type { RiskRulesRemoveInput } from '../declarations/RiskRulesRemoveInput.js';
export type { RiskRulesGetInput } from '../declarations/RiskRulesGetInput.js';
export type { RiskRulesGetAttributeRegistryInput } from '../declarations/RiskRulesGetAttributeRegistryInput.js';
export type { RiskRulesListInput } from '../declarations/RiskRulesListInput.js';
export type { RiskRulesUpdateInput } from '../declarations/RiskRulesUpdateInput.js';
export type { ClientOptions } from '../declarations/ClientOptions.js';
export type { AuthMode } from '../declarations/AuthMode.js';
export type { Credentials } from '../declarations/Credentials.js';
export type { ResponseMeta } from '../declarations/ResponseMeta.js';
export type { ResponseWarning } from '../declarations/ResponseWarning.js';
export type { NextAction } from '../declarations/NextAction.js';
export type { NextActionMerchantAccountSession } from '../declarations/NextActionMerchantAccountSession.js';
export type { MoneyValue } from '../declarations/MoneyValue.js';
export type { PublicRiskAttributeRegistry } from '../declarations/PublicRiskAttributeRegistry.js';
export type { PublicRiskAttribute } from '../declarations/PublicRiskAttribute.js';
export type { RiskPredicateNode } from '../declarations/RiskPredicateNode.js';
export type { CreateRiskRuleRequestInput } from '../declarations/CreateRiskRuleRequestInput.js';
export type { UpdateRiskRuleRequestInput } from '../declarations/UpdateRiskRuleRequestInput.js';
export { makeRiskRuleResponse } from '../declarations/makeRiskRuleResponse.js';
export { makeRiskRuleAttributeRegistryResponse } from '../declarations/makeRiskRuleAttributeRegistryResponse.js';
export { makeRiskRuleListResponse } from '../declarations/makeRiskRuleListResponse.js';
export { makeRiskRule } from '../declarations/makeRiskRule.js';
export { makeResponseMeta } from '../declarations/makeResponseMeta.js';
export { makeResponseWarning } from '../declarations/makeResponseWarning.js';
export { makeNextAction } from '../declarations/makeNextAction.js';
export { makeNextActionMerchantAccountSession } from '../declarations/makeNextActionMerchantAccountSession.js';
export { makeMoneyValue } from '../declarations/makeMoneyValue.js';
export { makePublicRiskAttributeRegistry } from '../declarations/makePublicRiskAttributeRegistry.js';
export { makePublicRiskAttribute } from '../declarations/makePublicRiskAttribute.js';
export { makeRiskPredicateNode } from '../declarations/makeRiskPredicateNode.js';
