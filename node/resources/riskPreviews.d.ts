import type { WithResponseInfo } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-6.js';
import type { RequestOptions } from '../declarations/types-53.js';
import type { RiskPreview, RiskPreviewResponse, RiskPreviewsCreateParams } from '../declarations/types-58.js';
import type { _SdkWithoutIdempotency } from '../declarations/types-69.js';
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
    RiskPreviewsCreateParams,
    RiskPreview,
    RiskPreviewResponse,
    RiskPredicateNodeRequestInput,
    RiskPredicateNodeAllRequestInput,
    RiskPredicateNodeAnyRequestInput,
    RiskPredicateNodeNotRequestInput,
    RiskPredicateNodeComparisonRequestInput,
    RiskPredicateNodeMoneyComparisonRequestInput,
    RiskPredicateNodeInRequestInput,
    RiskPredicateNodeInListRequestInput,
    RiskPredicateNodeIsMissingRequestInput,
    RiskRuleAnalysis,
    RiskRuleIssue
} from '../declarations/types-58.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-69.js';
export type { RequestOptions } from '../declarations/types-53.js';
export type { ClientOptions } from '../declarations/types-6.js';
export type {
    CreateRiskPreviewRequestInput,
    CreateRiskPreviewRequestInlineInput,
    CreateRiskPreviewRequestStoredRuleInput
} from '../declarations/types-13.js';
export type { MoneyValueInput, NextAction, MoneyValue } from '../declarations/types-38.js';
export type { AuthMode } from '../declarations/types-1.js';
export type { Credentials } from '../declarations/types-14.js';
export type { ResponseWarning, ResourceReference, ResponseMeta } from '../declarations/types-54.js';
export type { ReadinessMerchantAccountSession } from '../declarations/types-52.js';
export {
    makeCreateRiskPreviewRequest,
    makeCreateRiskPreviewRequestInline,
    makeCreateRiskPreviewRequestStoredRule
} from '../declarations/types-74.js';
export { makeMoneyValue } from '../declarations/types-78.js';
export {
    makeRiskPredicateNodeAllRequest,
    makeRiskPredicateNodeAnyRequest,
    makeRiskPredicateNodeComparisonRequest,
    makeRiskPredicateNodeInListRequest,
    makeRiskPredicateNodeInRequest,
    makeRiskPredicateNodeIsMissingRequest,
    makeRiskPredicateNodeMoneyComparisonRequest,
    makeRiskPredicateNodeNotRequest,
    makeRiskPredicateNodeRequest
} from '../declarations/types-81.js';
export interface RiskPreviewsResource {
    /**
 * Validates a rule without saving anything. Send mode inline with action and predicate to check a
 * draft; add risk_rule_id to check them as an edit to that rule. Send mode stored_rule with
 * risk_rule_id, to check the saved rule, optionally overriding action or predicate. An omitted or
 * null override keeps the saved value. Requires risk.read. Rule content issues produce a preview
 * with `is_valid: false`, every issue in order, `analysis` null, and empty `warnings`. A valid
 * rule returns analysis and any warnings about how the change would affect evaluation. List
 * reference issues are reported at the list_alias path. A new rule at the active-rule limit gets a
 * risk_rule_limit_reached warning. A malformed request fails with `INVALID_REQUEST`, and an
 * unknown `risk_rule_id` fails with `RESOURCE_NOT_FOUND`. Proposing a different action or
 * predicate for a Flint default rule fails with `ACTION_NOT_ALLOWED` and reason
 * `managed_externally`.
 *
 * `POST /v1/risk-previews`
 * @see https://developers.withflintpay.com/docs/api/risk-controls#createRiskPreview
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.riskPreviews.create({mode: "stored_rule", risk_rule_id:
 * "rule_01ARZ3NDEKTSV4RRFFQ69G5FAV"})
 */
    create(params: RiskPreviewsCreateParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<RiskPreview, RiskPreviewResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly riskPreviews: RiskPreviewsResource;
}
