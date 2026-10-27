import type { InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-4.js';
import type { CreateRiskPreviewRequestInput } from '../declarations/types-9.js';
import type { RequestOptions } from '../declarations/types-40.js';
import type { RiskPreview, RiskPreviewResponse, RiskPreviewsCreateInput } from '../declarations/types-43.js';
import type { SdkResponse } from '../declarations/types-44.js';
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
    SdkErrorDetails
} from '../runtime.js';
export type { CreateRiskPreviewRequestInput, Credentials } from '../declarations/types-9.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-62.js';
export type { RequestOptions, ResponseWarning, ResponseMeta } from '../declarations/types-40.js';
export type {
    RiskPreview,
    RiskPreviewResponse,
    RiskPreviewsCreateInput,
    RiskPredicateNodeInput,
    RiskRuleAnalysis,
    RiskRuleIssue
} from '../declarations/types-43.js';
export type { SdkResponse } from '../declarations/types-44.js';
export type { ClientOptions } from '../declarations/types-4.js';
export type { MoneyValueInput, NextAction, NextActionMerchantAccountSession, MoneyValue } from '../declarations/types-31.js';
export type { AuthMode } from '../declarations/types-0.js';
export { makeCreateRiskPreviewRequest } from '../declarations/types-65.js';
export { makeMoneyValue } from '../declarations/types-68.js';
export { makeRiskPredicateNode } from '../declarations/types-71.js';
export interface RiskPreviewsResource {
    /**
 * Validates a draft rule, or an existing rule by risk_rule_id, without saving anything. An invalid
 * rule has is_valid: false and its problems in issues. The warnings array says how the change
 * would affect evaluation. Requires risk.read. Rule content issues return 200 with is_valid false,
 * every issue in order, analysis null, and empty warnings. Valid rules return analysis and any
 * warnings. When risk_rule_id is omitted, action and predicate are required. Malformed requests
 * return 400; a missing risk_rule_id resource returns 404. Proposing action or predicate changes
 * to a system rule returns 409 RULE_RESERVED. List reference issues are included at the list_alias
 * path. A new rule at the active-rule limit receives a risk_rule_limit_reached warning.
 * @see reference/riskPreviews.md#riskpreviewscreate
 * POST /v1/risk-previews
 * @example
 * client.riskPreviews.create({risk_rule_id: "rr_example"})
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
