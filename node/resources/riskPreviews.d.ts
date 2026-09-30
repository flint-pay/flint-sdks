export { SdkError, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
export type { Result, Metadata, ErrorKind, DiagnosticEvent, InputValue, ServerSentEvent } from '../runtime.js';
import type { InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/ClientOptions.js';
import type { MoneyValueInput } from '../declarations/MoneyValueInput.js';
import type { RequestOptions } from '../declarations/RequestOptions.js';
import type { RiskPredicateNodeInput } from '../declarations/RiskPredicateNodeInput.js';
import type { RiskPreviewsCreateInput } from '../declarations/RiskPreviewsCreateInput.js';
import type { RiskPreviewsCreateResponse } from '../declarations/RiskPreviewsCreateResponse.js';
import type { RiskRuleValidationResponse } from '../declarations/RiskRuleValidationResponse.js';
import type { SdkResponse } from '../declarations/SdkResponse.js';
import type { _SdkPayloadAt } from '../declarations/_SdkPayloadAt.js';
import type { _SdkWithoutIdempotency } from '../declarations/_SdkWithoutIdempotency.js';
export interface RiskPreviewsResource {
    /**
 * Create a risk preview for the authenticated merchant environment.
 * POST /v1/risk-previews
 * @example
 * client.riskPreviews.create({risk_rule_id: "rr_example"})
 */
    create(params: (InputValue<({ "action"?: "allow" | "block" | "review" | "require_3ds"; "predicate"?: (({ "all": Array<RiskPredicateNodeInput>; }) | ({ "any": Array<RiskPredicateNodeInput>; }) | ({ "not": RiskPredicateNodeInput; }) | ({ "attribute": string; "operator": "eq" | "neq" | "gt" | "gte" | "lt" | "lte"; "value": ((string) | (number) | (boolean)); }) | ({ "amount_money": MoneyValueInput; "attribute": "amount_money"; "operator": "eq" | "neq" | "gt" | "gte" | "lt" | "lte"; }) | ({ "attribute": string; "operator": "in"; "values": Array<((string) | (number) | (boolean))>; }) | ({ "attribute": string; "list_alias": string; "operator": "in_list"; }) | ({ "attribute": string; "operator": "is_missing"; })); "risk_rule_id"?: string; }) & ((({ "action": unknown; "predicate": unknown; }) & ({ "risk_rule_id"?: never })) | ({ "risk_rule_id": unknown; }))>) & { "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<_SdkPayloadAt<RiskRuleValidationResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    createWithResponse(params: (InputValue<({ "action"?: "allow" | "block" | "review" | "require_3ds"; "predicate"?: (({ "all": Array<RiskPredicateNodeInput>; }) | ({ "any": Array<RiskPredicateNodeInput>; }) | ({ "not": RiskPredicateNodeInput; }) | ({ "attribute": string; "operator": "eq" | "neq" | "gt" | "gte" | "lt" | "lte"; "value": ((string) | (number) | (boolean)); }) | ({ "amount_money": MoneyValueInput; "attribute": "amount_money"; "operator": "eq" | "neq" | "gt" | "gte" | "lt" | "lte"; }) | ({ "attribute": string; "operator": "in"; "values": Array<((string) | (number) | (boolean))>; }) | ({ "attribute": string; "list_alias": string; "operator": "in_list"; }) | ({ "attribute": string; "operator": "is_missing"; })); "risk_rule_id"?: string; }) & ((({ "action": unknown; "predicate": unknown; }) & ({ "risk_rule_id"?: never })) | ({ "risk_rule_id": unknown; }))>) & { "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<RiskPreviewsCreateResponse>>;
  }
export declare class Client {

  constructor(options?: ClientOptions);

  close(): Promise<void>;
readonly riskPreviews: RiskPreviewsResource;
}
export type { RiskPredicateNodeInput } from '../declarations/RiskPredicateNodeInput.js';
export type { MoneyValueInput } from '../declarations/MoneyValueInput.js';
export type { _SdkWithoutIdempotency } from '../declarations/_SdkWithoutIdempotency.js';
export type { RequestOptions } from '../declarations/RequestOptions.js';
export type { _SdkPayloadAt } from '../declarations/_SdkPayloadAt.js';
export type { RiskRuleValidationResponse } from '../declarations/RiskRuleValidationResponse.js';
export type { SdkResponse } from '../declarations/SdkResponse.js';
export type { RiskPreviewsCreateResponse } from '../declarations/RiskPreviewsCreateResponse.js';
export type { RiskPreviewsCreateInput } from '../declarations/RiskPreviewsCreateInput.js';
export type { ClientOptions } from '../declarations/ClientOptions.js';
export type { AuthMode } from '../declarations/AuthMode.js';
export type { Credentials } from '../declarations/Credentials.js';
export type { RuleValidation } from '../declarations/RuleValidation.js';
export type { Analysis } from '../declarations/Analysis.js';
export type { RuleWarning } from '../declarations/RuleWarning.js';
export type { ResponseMeta } from '../declarations/ResponseMeta.js';
export type { ResponseWarning } from '../declarations/ResponseWarning.js';
export type { NextAction } from '../declarations/NextAction.js';
export type { CreateRiskPreviewRequestInput } from '../declarations/CreateRiskPreviewRequestInput.js';
export { makeRiskRuleValidationResponse } from '../declarations/makeRiskRuleValidationResponse.js';
export { makeRuleValidation } from '../declarations/makeRuleValidation.js';
export { makeAnalysis } from '../declarations/makeAnalysis.js';
export { makeRuleWarning } from '../declarations/makeRuleWarning.js';
export { makeResponseMeta } from '../declarations/makeResponseMeta.js';
export { makeResponseWarning } from '../declarations/makeResponseWarning.js';
export { makeNextAction } from '../declarations/makeNextAction.js';
