import type { InputValue } from '../runtime.js';
import type { CancelReturnResolutionRequestInput } from '../declarations/types-3.js';
import type { CheckoutSessionWithSecret, ClientOptions } from '../declarations/types-4.js';
import type { ConfirmReturnResolutionRequestInput } from '../declarations/types-5.js';
import type { GetOrCreateReturnResolutionCheckoutSessionRequestInput, GetReturnResolutionResponse } from '../declarations/types-18.js';
import type { ListReturnResolutionsResponse } from '../declarations/types-29.js';
import type { ReleaseReturnResolutionRequestInput } from '../declarations/types-39.js';
import type { RequestOptions, ResolvePaymentLinkResponse, RetryReturnResolutionRequestInput } from '../declarations/types-40.js';
import type {
    ReturnResolution,
    ReturnResolutionsCancelInput,
    ReturnResolutionsConfirmInput,
    ReturnResolutionsGetInput,
    ReturnResolutionsGetOrCreateCheckoutSessionInput,
    ReturnResolutionsListInput,
    ReturnResolutionsReleaseInput,
    ReturnResolutionsRetryInput,
    ReturnResolutionsUpdateInput
} from '../declarations/types-42.js';
import type { SdkResponse } from '../declarations/types-44.js';
import type { UpdateReturnResolutionRequestInput } from '../declarations/types-49.js';
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
export type {
    CancelReturnResolutionRequestInput,
    CategoryReference,
    CheckoutBuyerContact,
    CheckoutBuyerFields,
    CheckoutCustomTextConfig,
    CheckoutCustomerPrefill,
    CancelReturnRequestInput
} from '../declarations/types-3.js';
export type {
    RequestOptions,
    ResolvePaymentLinkResponse,
    RetryReturnResolutionRequestInput,
    ReturnActor,
    ResourceReference,
    ResourceType,
    ResponseMeta,
    ResponseWarning
} from '../declarations/types-40.js';
export type {
    ReturnResolution,
    ReturnResolutionsCancelInput,
    ReturnResolutionsConfirmInput,
    ReturnResolutionsGetOrCreateCheckoutSessionInput,
    ReturnResolutionsGetInput,
    ReturnResolutionsListInput,
    ReturnResolutionsReleaseInput,
    ReturnResolutionsRetryInput,
    ReturnResolutionsUpdateInput,
    ReturnResolutionAdjustment,
    ReturnResolutionExecutionBlocker,
    ReturnResolutionLineItem,
    ReturnReplacementLineItem
} from '../declarations/types-42.js';
export type {
    SdkResponse,
    SelectedProductOption,
    SettlementAmounts,
    StripePaymentClientAction,
    StripeSetupIntentClientAction,
    SelectableOrderPaymentIntent
} from '../declarations/types-44.js';
export type { GetReturnResolutionResponse, GetOrCreateReturnResolutionCheckoutSessionRequestInput } from '../declarations/types-18.js';
export type { ConfirmReturnResolutionRequestInput } from '../declarations/types-5.js';
export type {
    CheckoutSessionWithSecret,
    ClientOptions,
    CheckoutRedirectsRequestInput,
    CheckoutSession,
    CheckoutDeliveryPinnedDependency,
    CheckoutDerivedDeliveryResource,
    CheckoutGiftCardChallenge,
    CheckoutMerchantSupport,
    CheckoutPaymentMethodSave,
    CheckoutPaymentConfig,
    CheckoutPrefill,
    CheckoutProblemResource,
    CheckoutPromotionConfig,
    CheckoutRedirects,
    CheckoutSubscriptionTerms,
    CheckoutSubscriptionRecurringShipping,
    CheckoutSessionTax,
    CheckoutTaxLocation,
    CheckoutTheme,
    CheckoutTipConfig
} from '../declarations/types-4.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-62.js';
export type { ListReturnResolutionsResponse, MeCreateReturnResolutionCheckoutSessionInput } from '../declarations/types-29.js';
export type {
    ReleaseReturnResolutionRequestInput,
    Refund,
    RefundLineItemAllocation,
    RefundLineItemAdjustmentRefund,
    RefundLineItemAdjustment,
    RefundAdjustmentReason,
    RefundLineItemAutomaticRefund,
    RefundLineItemModifierAllocation,
    RefundTaxBreakdownRefund,
    RefundTenderAllocation,
    RefundUnissuedGiftCardRecovery
} from '../declarations/types-39.js';
export type {
    UpdateReturnResolutionRequestInput,
    UpdateReturnResolutionAdjustmentRequestInput,
    UpdateReturnResolutionLineItemRequestInput,
    UpdateReturnReplacementLineItemRequestInput,
    UpdateReturnReplacementLineItemInputVariantInput,
    UpdateReturnReplacementLineItemInputBundleInput,
    UpdateReturnReplacementLineItemInputCustomInput
} from '../declarations/types-49.js';
export type { AuthMode, Address } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-9.js';
export type { MoneyValue, NextAction, NextActionMerchantAccountSession, MoneyValueInput } from '../declarations/types-31.js';
export type {
    ExpandedPaymentIntentSummary,
    ExpandedCustomerSummary,
    ExpandedOrderSummary,
    ErrorRemediation,
    ExpandedInvoiceSummary,
    ExpandedPaymentLinkSummary
} from '../declarations/types-16.js';
export type { PaymentSourceSummary, PaymentSourceAchDebitSummary, PaymentSourceCardSummary, PaymentRefund } from '../declarations/types-36.js';
export type {
    PricingAmounts,
    PendingPaymentAction,
    PendingPaymentActionSubject,
    PendingPaymentActionPaymentIntentSubject,
    PendingPaymentActionSetupPaymentSourceSubject
} from '../declarations/types-37.js';
export type { OrderGiftCardAllocation, OrderPaymentAttempt, OrderPaymentAttemptPaymentMethodSave } from '../declarations/types-32.js';
export type {
    PaymentAttemptGiftCardRedemption,
    PaymentErrorSummary,
    PaymentAttemptPaymentIntent,
    PaymentClientAction,
    PaymentCollection,
    PaymentCollectionStripe,
    PaymentCollectionStripeElements
} from '../declarations/types-35.js';
export type {
    DeliveryQuoteChoiceGroupResource,
    DeliveryQuoteExecutionLegResource,
    DeliveryRecipientRequirement,
    DeliveryQuoteLineItemResource
} from '../declarations/types-14.js';
export type {
    DeliveryAddressAdvisoryResource,
    DeliveryAddressRequest,
    DeliveryCandidateOutcomeResource,
    DeliveryArrivalEstimate,
    DeliveryCandidateOutcomeResourceAvailable,
    DeliveryCandidateOutcomeResourceUnavailable,
    DeliveryCandidateOutcomeResourceInputRequired,
    DeliveryCandidateOutcomeResourceCannotCalculate,
    DeliveryCandidateOutcomeResourceRequiresCheckoutContext
} from '../declarations/types-11.js';
export type {
    DeliveryInputRequirement,
    DeliveryInputConstraint,
    DeliveryOptionProjection,
    DeliveryPlan,
    DeliveryPickupDetails,
    DeliveryLocationSummaryResource,
    DeliveryMerchantDiagnostic,
    DeliveryEligibilityMismatch
} from '../declarations/types-12.js';
export type { DeliveryWindowRequest, DeliveryShipmentDetails } from '../declarations/types-15.js';
export type { BuyerInstructionsConfig } from '../declarations/types-1.js';
export type { LegalSettings } from '../declarations/types-28.js';
export type { Image } from '../declarations/types-19.js';
export type { SubscriptionIntervalOption } from '../declarations/types-45.js';
export {
    makeBuyerInstructionsConfig,
    makeCancelReturnRequest,
    makeCancelReturnResolutionRequest,
    makeCheckoutBuyerFields,
    makeCheckoutPromotionConfig,
    makeCheckoutRedirectsRequest
} from '../declarations/types-62.js';
export { makeCheckoutTipConfig, makeConfirmReturnResolutionRequest } from '../declarations/types-63.js';
export { makeDeliveryAddressRequest } from '../declarations/types-65.js';
export { makeDeliveryRecipientRequirement, makeDeliveryWindowRequest } from '../declarations/types-66.js';
export { makeGetOrCreateReturnResolutionCheckoutSessionRequest } from '../declarations/types-67.js';
export { makeMoneyValue } from '../declarations/types-68.js';
export { makeReleaseReturnResolutionRequest, makeRetryReturnResolutionRequest } from '../declarations/types-70.js';
export { makeSubscriptionIntervalOption } from '../declarations/types-72.js';
export {
    makeUpdateReturnReplacementLineItemInputBundle,
    makeUpdateReturnReplacementLineItemInputCustom,
    makeUpdateReturnReplacementLineItemInputVariant,
    makeUpdateReturnReplacementLineItemRequest,
    makeUpdateReturnResolutionAdjustmentRequest,
    makeUpdateReturnResolutionLineItemRequest,
    makeUpdateReturnResolutionRequest
} from '../declarations/types-73.js';
export interface ReturnResolutionsResource {
    /**
 * Cancel a resolution and release the line value it reserved. A failed resolution can be canceled
 * only when it never created a Refund, PaymentIntent, or Order, or when it is an unpaid exchange.
 * Effects that already succeeded are undone with a compensating correction instead.
 * @see reference/returnResolutions.md#returnresolutionscancel
 * POST /v1/return-resolutions/{return_resolution_id}/cancel
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.returnResolutions.cancel("example", {reason: "buyer_request"}, { idempotencyKey:
 * idempotencyKey })
 */
    cancel(return_resolution_id: InputValue<string>, params: (InputValue<CancelReturnResolutionRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<ReturnResolution>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/returnResolutions.md#returnresolutionscancel
     */
    cancelWithResponse(return_resolution_id: InputValue<string>, params: (InputValue<CancelReturnResolutionRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<GetReturnResolutionResponse>>;
    /**
 * Confirm a proposed resolution and freeze its economic facts. Execution can remain pending behind
 * line-qualified execution blockers.
 * @see reference/returnResolutions.md#returnresolutionsconfirm
 * POST /v1/return-resolutions/{return_resolution_id}/confirm
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.returnResolutions.confirm("example", {}, { idempotencyKey: idempotencyKey })
 */
    confirm(return_resolution_id: InputValue<string>, params: (InputValue<ConfirmReturnResolutionRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<ReturnResolution>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/returnResolutions.md#returnresolutionsconfirm
     */
    confirmWithResponse(return_resolution_id: InputValue<string>, params: (InputValue<ConfirmReturnResolutionRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<GetReturnResolutionResponse>>;
    /**
 * Create or reuse a hosted or embedded checkout session for the buyer's balance on a replacement
 * order linked to this return resolution. Returns 200 when reusing an existing session and 201
 * when creating one. Omit surface to use hosted. The same surface reuses the open session;
 * changing surface replaces an idle session and is refused while a payment is in progress. Use
 * redirects to set where the buyer goes after paying or canceling. The return_url field is an
 * alias for redirects.success_url on hosted checkout or payment_return_url on embedded checkout
 * and must be an address of the merchant's customer account. A reused session takes a new success
 * destination only until a payment starts, then keeps its existing destination.
 * @see reference/returnResolutions.md#returnresolutionsgetorcreatecheckoutsession
 * POST /v1/return-resolutions/{return_resolution_id}/checkout-session
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.returnResolutions.getOrCreateCheckoutSession("example", undefined, { idempotencyKey:
 * idempotencyKey })
 */
    getOrCreateCheckoutSession(return_resolution_id: InputValue<string>, params?: (InputValue<GetOrCreateReturnResolutionCheckoutSessionRequestInput>
        | {
        "page_origin"?: never;
        "payment_return_url"?: never;
        "redirects"?: never;
        "return_url"?: never;
        "surface"?: never;
    })
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<CheckoutSessionWithSecret>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/returnResolutions.md#returnresolutionsgetorcreatecheckoutsession
     */
    getOrCreateCheckoutSessionWithResponse(return_resolution_id: InputValue<string>, params?: (InputValue<GetOrCreateReturnResolutionCheckoutSessionRequestInput>
        | {
        "page_origin"?: never;
        "payment_return_url"?: never;
        "redirects"?: never;
        "return_url"?: never;
        "surface"?: never;
    })
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<ResolvePaymentLinkResponse>>;
    /**
 * Retrieve one resolution with its amounts, adjustments, execution blockers, and linked refunds,
 * payments, and replacement order. Supports expand for those links.
 * @see reference/returnResolutions.md#returnresolutionsget
 * GET /v1/return-resolutions/{return_resolution_id}
 * @example
 * client.returnResolutions.get("example")
 */
    get(return_resolution_id: InputValue<string>, params?: {
        "expand"?: InputValue<Array<"payment_intents" | "refunds" | "replacement_order">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<ReturnResolution>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/returnResolutions.md#returnresolutionsget
     */
    getWithResponse(return_resolution_id: InputValue<string>, params?: {
        "expand"?: InputValue<Array<"payment_intents" | "refunds" | "replacement_order">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<GetReturnResolutionResponse>>;
    /**
 * List resolutions. Filter by corrects_return_resolution_id to retrieve the correction history for
 * a resolution that already settled. Newest first: created_at descending, with
 * return_resolution_id descending as the tiebreak.
 * @see reference/returnResolutions.md#returnresolutionslist
 * GET /v1/return-resolutions
 * @example
 * client.returnResolutions.list()
 */
    list(params?: {
        "action_required_by"?: InputValue<Array<"buyer" | "merchant" | "integration">>;
        "corrects_return_resolution_id"?: InputValue<string>;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "external_reference_id"?: InputValue<string>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "query"?: InputValue<string>;
        "resolution_type"?: InputValue<Array<"refund" | "exchange" | "replacement" | "store_credit" | "no_monetary_action" | "correction">>;
        "return_id"?: InputValue<string>;
        "return_line_item_id"?: InputValue<string>;
        "return_policy_revision_id"?: InputValue<string>;
        "status"?: InputValue<Array<"proposed" | "pending" | "requires_action" | "fulfilled" | "failed" | "canceled">>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
        "expand"?: InputValue<Array<"replacement_order">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<ListReturnResolutionsResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/returnResolutions.md#returnresolutionslist
     */
    listWithResponse(params?: {
        "action_required_by"?: InputValue<Array<"buyer" | "merchant" | "integration">>;
        "corrects_return_resolution_id"?: InputValue<string>;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "external_reference_id"?: InputValue<string>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "query"?: InputValue<string>;
        "resolution_type"?: InputValue<Array<"refund" | "exchange" | "replacement" | "store_credit" | "no_monetary_action" | "correction">>;
        "return_id"?: InputValue<string>;
        "return_line_item_id"?: InputValue<string>;
        "return_policy_revision_id"?: InputValue<string>;
        "status"?: InputValue<Array<"proposed" | "pending" | "requires_action" | "fulfilled" | "failed" | "canceled">>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
        "expand"?: InputValue<Array<"replacement_order">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<ListReturnResolutionsResponse>>;
    /** Iterate pages lazily.
     * @see reference/returnResolutions.md#returnresolutionslist
     */
    listPages(params?: {
        "action_required_by"?: InputValue<Array<"buyer" | "merchant" | "integration">>;
        "corrects_return_resolution_id"?: InputValue<string>;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "external_reference_id"?: InputValue<string>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "query"?: InputValue<string>;
        "resolution_type"?: InputValue<Array<"refund" | "exchange" | "replacement" | "store_credit" | "no_monetary_action" | "correction">>;
        "return_id"?: InputValue<string>;
        "return_line_item_id"?: InputValue<string>;
        "return_policy_revision_id"?: InputValue<string>;
        "status"?: InputValue<Array<"proposed" | "pending" | "requires_action" | "fulfilled" | "failed" | "canceled">>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
        "expand"?: InputValue<Array<"replacement_order">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<ListReturnResolutionsResponse>;
    /** Iterate complete page bodies with HTTP metadata.
     * @see reference/returnResolutions.md#returnresolutionslist
     */
    listPagesWithResponse(params?: {
        "action_required_by"?: InputValue<Array<"buyer" | "merchant" | "integration">>;
        "corrects_return_resolution_id"?: InputValue<string>;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "external_reference_id"?: InputValue<string>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "query"?: InputValue<string>;
        "resolution_type"?: InputValue<Array<"refund" | "exchange" | "replacement" | "store_credit" | "no_monetary_action" | "correction">>;
        "return_id"?: InputValue<string>;
        "return_line_item_id"?: InputValue<string>;
        "return_policy_revision_id"?: InputValue<string>;
        "status"?: InputValue<Array<"proposed" | "pending" | "requires_action" | "fulfilled" | "failed" | "canceled">>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
        "expand"?: InputValue<Array<"replacement_order">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<SdkResponse<ListReturnResolutionsResponse>>;
    /** Iterate items lazily.
     * @see reference/returnResolutions.md#returnresolutionslist
     */
    listItems(params?: {
        "action_required_by"?: InputValue<Array<"buyer" | "merchant" | "integration">>;
        "corrects_return_resolution_id"?: InputValue<string>;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "external_reference_id"?: InputValue<string>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "query"?: InputValue<string>;
        "resolution_type"?: InputValue<Array<"refund" | "exchange" | "replacement" | "store_credit" | "no_monetary_action" | "correction">>;
        "return_id"?: InputValue<string>;
        "return_line_item_id"?: InputValue<string>;
        "return_policy_revision_id"?: InputValue<string>;
        "status"?: InputValue<Array<"proposed" | "pending" | "requires_action" | "fulfilled" | "failed" | "canceled">>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
        "expand"?: InputValue<Array<"replacement_order">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<ReturnResolution>;
    /**
 * Release a confirmed resolution that is waiting on a manual release. Available only while
 * action_reason is manual_release.
 * @see reference/returnResolutions.md#returnresolutionsrelease
 * POST /v1/return-resolutions/{return_resolution_id}/release
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.returnResolutions.release("example", {reason: "merchant_approved"}, { idempotencyKey:
 * idempotencyKey })
 */
    release(return_resolution_id: InputValue<string>, params: (InputValue<ReleaseReturnResolutionRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<ReturnResolution>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/returnResolutions.md#returnresolutionsrelease
     */
    releaseWithResponse(return_resolution_id: InputValue<string>, params: (InputValue<ReleaseReturnResolutionRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<GetReturnResolutionResponse>>;
    /**
 * Retry a failed resolution. For gift_card_refund_destination_required, send
 * gift_card_refund_destination: new_gift_card to persist the destination before starting the new
 * attempt. The override is accepted for refund, exchange, and corrections of resolutions other
 * than store_credit. A new attempt starts, historical payment and refund IDs stay on the
 * resolution, and a late event from an earlier attempt cannot settle the new attempt. Fails with
 * ACTION_NOT_ALLOWED, with the line's current_status, when a Return line the resolution covers is
 * no longer approved, such as after it was canceled, and with RETURN_VALUE_EXCEEDED when an
 * approved line no longer has the quantity the resolution covers. Retry is available only when
 * failure_code allows it, and supported_actions includes retry in that case. A failure that retry
 * cannot fix returns 409 ACTION_NOT_ALLOWED; cancel the resolution instead.
 * @see reference/returnResolutions.md#returnresolutionsretry
 * POST /v1/return-resolutions/{return_resolution_id}/retry
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.returnResolutions.retry("example", {reason: "dependency_recovered"}, { idempotencyKey:
 * idempotencyKey })
 */
    retry(return_resolution_id: InputValue<string>, params: (InputValue<RetryReturnResolutionRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<ReturnResolution>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/returnResolutions.md#returnresolutionsretry
     */
    retryWithResponse(return_resolution_id: InputValue<string>, params: (InputValue<RetryReturnResolutionRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<GetReturnResolutionResponse>>;
    /**
 * Update a proposed resolution before confirmation. A present line_items, replacement_line_items,
 * or adjustments array replaces that collection and requires expected_version.
 * @see reference/returnResolutions.md#returnresolutionsupdate
 * PATCH /v1/return-resolutions/{return_resolution_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.returnResolutions.update("example", {}, { idempotencyKey: idempotencyKey })
 */
    update(return_resolution_id: InputValue<string>, params: (InputValue<UpdateReturnResolutionRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<ReturnResolution>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/returnResolutions.md#returnresolutionsupdate
     */
    updateWithResponse(return_resolution_id: InputValue<string>, params: (InputValue<UpdateReturnResolutionRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<GetReturnResolutionResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly returnResolutions: ReturnResolutionsResource;
}
