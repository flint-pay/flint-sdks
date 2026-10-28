import type { InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-4.js';
import type { CreateRiskPreviewRequestInput } from '../declarations/types-10.js';
import type { RequestOptions } from '../declarations/types-42.js';
import type { RiskPreview, RiskPreviewResponse, RiskPreviewsCreateInput, SdkResponse } from '../declarations/types-46.js';
import type { _SdkWithoutIdempotency } from '../declarations/types-65.js';
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
export type {
    CreateRiskPreviewRequestInput,
    CreateRiskPreviewRequestInlineInput,
    CreateRiskPreviewRequestStoredRuleInput
} from '../declarations/types-10.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-65.js';
export type { RequestOptions, ResponseMeta } from '../declarations/types-42.js';
export type {
    RiskPreview,
    SdkResponse,
    RiskPreviewResponse,
    RiskPreviewsCreateInput,
    RiskPredicateNodeInput,
    RiskPredicateNodeAllInput,
    RiskPredicateNodeAnyInput,
    RiskPredicateNodeNotInput,
    RiskPredicateNodeComparisonInput,
    RiskPredicateNodeMoneyComparisonInput,
    RiskPredicateNodeInInput,
    RiskPredicateNodeInListInput,
    RiskPredicateNodeIsMissingInput,
    RiskRuleAnalysis,
    RiskRuleIssue
} from '../declarations/types-46.js';
export type { ClientOptions } from '../declarations/types-4.js';
export type { MoneyValueInput, NextAction, NextActionMerchantAccountSession, MoneyValue } from '../declarations/types-33.js';
export type { AuthMode } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-11.js';
export type { ResponseWarning } from '../declarations/types-43.js';
export {
    makeCreateRiskPreviewRequest,
    makeCreateRiskPreviewRequestInline,
    makeCreateRiskPreviewRequestStoredRule
} from '../declarations/types-68.js';
export { makeMoneyValue } from '../declarations/types-73.js';
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
} from '../declarations/types-76.js';
export interface RiskPreviewsResource {
    /**
 * Validates a draft rule, or an existing rule by risk_rule_id, without saving anything. An invalid
 * rule has is_valid: false and its problems in issues. The warnings array says how the change
 * would affect evaluation. Requires risk.read. Rule content issues return 200 with is_valid false,
 * every issue in order, analysis null, and empty warnings. Valid rules return analysis and any
 * warnings. When risk_rule_id is omitted, action and predicate are required. Malformed requests
 * return 400; a missing risk_rule_id resource returns 404. Proposing action or predicate changes
 * to a system rule returns 409 ACTION_NOT_ALLOWED with reason managed_externally. List reference
 * issues are included at the list_alias path. A new rule at the active-rule limit receives a
 * risk_rule_limit_reached warning.
 * @see reference/riskPreviews.md#riskpreviewscreate
 * POST /v1/risk-previews
 * @example
 * client.riskPreviews.create({mode: "stored_rule", risk_rule_id: "rr_example"})
 */
    create(params: (InputValue<CreateRiskPreviewRequestInput>), options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<RiskPreview>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/riskPreviews.md#riskpreviewscreate
     */
    createWithResponse(params: (InputValue<CreateRiskPreviewRequestInput>), options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<RiskPreviewResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly riskPreviews: RiskPreviewsResource;
}
