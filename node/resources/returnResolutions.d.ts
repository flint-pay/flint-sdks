import type { WithResponseInfo, InputValue } from '../runtime.js';
import type { CancelReturnResolutionResponse } from '../declarations/types-4.js';
import type { CheckoutSessionWithSecret, ClientOptions } from '../declarations/types-5.js';
import type { ConfirmReturnResolutionResponse } from '../declarations/types-6.js';
import type { GetOrCreateReturnResolutionCheckoutSessionResponse, GetReturnResolutionResponse } from '../declarations/types-23.js';
import type { ListReturnResolutionsResponse } from '../declarations/types-32.js';
import type { ReleaseReturnResolutionResponse, RequestOptions } from '../declarations/types-47.js';
import type { RetryReturnResolutionResponse } from '../declarations/types-48.js';
import type {
    ReturnResolution,
    ReturnResolutionsCancelParams,
    ReturnResolutionsConfirmParams,
    ReturnResolutionsCreateCheckoutSessionParams,
    ReturnResolutionsGetParams,
    ReturnResolutionsListParams,
    ReturnResolutionsReleaseParams,
    ReturnResolutionsRetryParams,
    ReturnResolutionsUpdateParams
} from '../declarations/types-50.js';
import type { UpdateReturnResolutionResponse } from '../declarations/types-60.js';
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
    ReturnResolutionsCancelParams,
    ReturnResolution,
    ReturnResolutionsConfirmParams,
    ReturnResolutionsCreateCheckoutSessionParams,
    ReturnResolutionsGetParams,
    ReturnResolutionsListParams,
    ReturnResolutionsReleaseParams,
    ReturnResolutionsRetryParams,
    ReturnResolutionsUpdateParams,
    ReturnResolutionAdjustment,
    ReturnResolutionExecutionBlocker,
    ReturnResolutionLineItem,
    ReturnReplacementLineItem
} from '../declarations/types-50.js';
export type {
    RequestOptions,
    ReleaseReturnResolutionResponse,
    ResourceReference,
    RefundTaxBreakdownRefund,
    RefundTenderAllocation,
    RefundUnissuedGiftCardRecovery,
    ResolvePaymentLinkResponse,
    ReleaseReturnResolutionRequestInput
} from '../declarations/types-47.js';
export type {
    CancelReturnResolutionResponse,
    CancelReturnResolutionRequestInput,
    CategoryReference,
    CheckoutBuyerContact,
    CheckoutRedirectsRequestInput,
    CheckoutSession,
    CheckoutBuyerFields,
    CheckoutCustomTextConfig,
    CheckoutCustomerPrefill,
    CheckoutDerivedDeliveryResource,
    CheckoutDeliveryPinnedDependency,
    CheckoutGiftCardChallenge,
    CheckoutMerchantSupport,
    CheckoutPaymentMethodSave,
    CheckoutPaymentConfig,
    CheckoutPrefill,
    CheckoutProblemResource,
    CheckoutPromotionConfig,
    CheckoutRedirects,
    CancelReturnRequestInput
} from '../declarations/types-4.js';
export type { ConfirmReturnResolutionResponse, ConfirmReturnResolutionRequestInput } from '../declarations/types-6.js';
export type {
    CheckoutSessionWithSecret,
    ClientOptions,
    CheckoutSubscriptionTerms,
    CheckoutSubscriptionRecurringShipping,
    CheckoutSessionTax,
    CheckoutTheme,
    CheckoutTipConfig
} from '../declarations/types-5.js';
export type {
    GetOrCreateReturnResolutionCheckoutSessionResponse,
    GetReturnResolutionResponse,
    GetOrCreateReturnResolutionCheckoutSessionRequestInput
} from '../declarations/types-23.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-61.js';
export type { ListReturnResolutionsResponse, LegalSettings } from '../declarations/types-32.js';
export type {
    RetryReturnResolutionResponse,
    ReturnActor,
    ResourceType,
    ResponseMeta,
    ResponseWarning,
    RetryReturnResolutionRequestInput
} from '../declarations/types-48.js';
export type {
    UpdateReturnResolutionResponse,
    UpdateReturnResolutionRequestInput,
    UpdateReturnResolutionAdjustmentRequestInput,
    UpdateReturnResolutionLineItemRequestInput,
    UpdateReturnReplacementLineItemRequestInput,
    UpdateReturnReplacementLineItemInputVariantInput,
    UpdateReturnResolutionLineItemRequest
} from '../declarations/types-60.js';
export type { AuthMode, Address } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-12.js';
export type { MoneyValue, NextAction, MoneyValueInput } from '../declarations/types-35.js';
export type { MetadataMap, MetadataPatchRequestInput, MetadataPatchRequest } from '../declarations/types-34.js';
export type {
    ExpandedPaymentIntentSummary,
    ExpandedCustomerSummary,
    ExpandedOrderSummary,
    ErrorRemediation,
    ExpandedInvoiceSummary,
    ExpandedPaymentLinkSummary
} from '../declarations/types-21.js';
export type {
    PaymentSourceSummary,
    PaymentSourceAchDebitSummary,
    PaymentSourceCardSummary,
    PricingAmounts,
    PendingPaymentAction,
    PendingPaymentActionSubject,
    PendingPaymentActionPaymentIntentSubject,
    PendingPaymentActionSetupPaymentSourceSubject
} from '../declarations/types-43.js';
export type {
    Refund,
    RefundLineItemAllocation,
    RefundLineItemAdjustmentRefund,
    RefundLineItemAdjustment,
    RefundAdjustmentReason,
    RefundLineItemAutomaticRefund,
    RefundLineItemModifierAllocation,
    ReadinessMerchantAccountSession
} from '../declarations/types-46.js';
export type {
    SelectedProductOption,
    SettlementAmounts,
    StripePaymentClientAction,
    StripeSetupIntentClientAction,
    SelectableOrderPaymentIntent
} from '../declarations/types-53.js';
export type { PaymentRefund } from '../declarations/types-42.js';
export type { OrderGiftCardAllocation } from '../declarations/types-36.js';
export type { OrderPaymentAttempt, OrderPaymentAttemptPaymentMethodSave } from '../declarations/types-37.js';
export type {
    PaymentAttemptGiftCardRedemption,
    PaymentErrorSummary,
    PaymentAttemptPaymentIntent,
    PaymentClientAction,
    PaymentCollection,
    PaymentCollectionStripe,
    PaymentCollectionStripeElements
} from '../declarations/types-40.js';
export type {
    DeliveryQuoteChoiceGroupResource,
    DeliveryQuoteExecutionLegResource,
    DeliveryRecipientRequirement,
    DeliveryQuoteLineItemResource
} from '../declarations/types-18.js';
export type {
    DeliveryAddressAdvisoryResource,
    DeliveryCandidateOutcomeResource,
    DeliveryArrivalEstimate,
    DeliveryCandidateOutcomeResourceAvailable,
    DeliveryCandidateOutcomeResourceUnavailable,
    DeliveryCandidateOutcomeResourceInputRequired,
    DeliveryCandidateOutcomeResourceCannotCalculate,
    DeliveryCandidateOutcomeResourceRequiresCheckoutContext
} from '../declarations/types-14.js';
export type {
    DeliveryInputRequirement,
    DeliveryInputConstraint,
    DeliveryLocationSummaryResource,
    DeliveryMerchantDiagnostic,
    DeliveryEligibilityMismatch
} from '../declarations/types-15.js';
export type { DeliveryWindowRequest, DeliveryShipmentDetails } from '../declarations/types-19.js';
export type { DeliveryOptionProjection, DeliveryPlan, DeliveryPickupDetails } from '../declarations/types-16.js';
export type { BuyerInstructionsConfig } from '../declarations/types-2.js';
export type { Image } from '../declarations/types-25.js';
export type { SubscriptionIntervalOption } from '../declarations/types-54.js';
export type { UpdateReturnReplacementLineItemInputBundleInput, UpdateReturnReplacementLineItemInputCustomInput } from '../declarations/types-59.js';
export type { MeCreateReturnResolutionCheckoutSessionParams } from '../declarations/types-33.js';
export {
    makeCancelReturnRequest,
    makeCancelReturnResolutionRequest,
    makeCheckoutRedirectsRequest,
    makeConfirmReturnResolutionRequest
} from '../declarations/types-62.js';
export {
    makeDeliveryRecipientRequirement,
    makeDeliveryWindowRequest,
    makeGetOrCreateReturnResolutionCheckoutSessionRequest
} from '../declarations/types-67.js';
export { makeMetadataPatchRequest, makeMoneyValue } from '../declarations/types-69.js';
export { makeReleaseReturnResolutionRequest, makeRetryReturnResolutionRequest } from '../declarations/types-71.js';
export { makeSubscriptionIntervalOption } from '../declarations/types-73.js';
export {
    makeUpdateReturnReplacementLineItemInputBundle,
    makeUpdateReturnReplacementLineItemInputCustom,
    makeUpdateReturnReplacementLineItemInputVariant,
    makeUpdateReturnReplacementLineItemRequest,
    makeUpdateReturnResolutionAdjustmentRequest,
    makeUpdateReturnResolutionLineItemRequest,
    makeUpdateReturnResolutionRequest
} from '../declarations/types-74.js';
export interface ReturnResolutionsResource {
    /**
 * Cancel a resolution and release the line value it reserved. A failed resolution can be canceled
 * only when it never created a Refund, PaymentIntent, or Order, or when it is an unpaid exchange.
 * Effects that already succeeded are undone with a compensating correction instead.
 *
 * `POST /v1/return-resolutions/{return_resolution_id}/cancel`
 * @param return_resolution_id Flint return resolution id.
 * @see https://developers.withflintpay.com/docs/api/return-resolutions#cancelReturnResolution
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.returnResolutions.cancel("retres_01ARZ3NDEKTSV4RRFFQ69G5FAV", {reason: "buyer_request"},
 * { idempotencyKey: idempotencyKey })
 */
    cancel(return_resolution_id: InputValue<string>, params: ReturnResolutionsCancelParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<ReturnResolution, CancelReturnResolutionResponse>>;
    /**
 * Confirm a proposed resolution and freeze its economic facts. Execution can remain pending behind
 * line-qualified execution blockers.
 *
 * `POST /v1/return-resolutions/{return_resolution_id}/confirm`
 * @param return_resolution_id Flint return resolution id.
 * @see https://developers.withflintpay.com/docs/api/return-resolutions#confirmReturnResolution
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.returnResolutions.confirm("retres_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, { idempotencyKey:
 * idempotencyKey })
 */
    confirm(return_resolution_id: InputValue<string>, params: ReturnResolutionsConfirmParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<ReturnResolution, ConfirmReturnResolutionResponse>>;
    /**
 * Create or reuse a hosted or embedded checkout session for the buyer's balance on a replacement
 * order linked to this return resolution. Returns 200 when reusing an existing session and 201
 * when creating one. Omit surface to use hosted. The same surface reuses the open session;
 * changing surface replaces an idle session and is refused while a payment is in progress. Use
 * redirects to set where the buyer goes after paying or canceling. The return_url field is an
 * alias for redirects.success_url on hosted checkout or payment_return_url on embedded checkout
 * and must be an address of the merchant's customer account. A reused session takes a new success
 * destination only until a payment starts, then keeps its existing destination.
 *
 * `POST /v1/return-resolutions/{return_resolution_id}/checkout-sessions`
 * @param return_resolution_id Flint return resolution id.
 * @see
 * https://developers.withflintpay.com/docs/api/return-resolutions#createReturnResolutionCheckoutSession
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.returnResolutions.createCheckoutSession("retres_01ARZ3NDEKTSV4RRFFQ69G5FAV", undefined, {
 * idempotencyKey: idempotencyKey })
 */
    createCheckoutSession(return_resolution_id: InputValue<string>, params?: ReturnResolutionsCreateCheckoutSessionParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<CheckoutSessionWithSecret, GetOrCreateReturnResolutionCheckoutSessionResponse>>;
    /**
 * Retrieve one resolution with its amounts, adjustments, execution blockers, and linked refunds,
 * payments, and replacement order. Supports expand for those links.
 *
 * `GET /v1/return-resolutions/{return_resolution_id}`
 * @param return_resolution_id Flint return resolution id.
 * @see https://developers.withflintpay.com/docs/api/return-resolutions#getReturnResolution
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.returnResolutions.get("retres_01ARZ3NDEKTSV4RRFFQ69G5FAV")
 */
    get(return_resolution_id: InputValue<string>, params?: ReturnResolutionsGetParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<ReturnResolution, GetReturnResolutionResponse>>;
    /**
 * List resolutions. Filter by corrects_return_resolution_id to retrieve the correction history for
 * a resolution that already settled. Default order: created_at descending, then
 * return_resolution_id descending.
 *
 * `GET /v1/return-resolutions`
 * @see https://developers.withflintpay.com/docs/api/return-resolutions#listReturnResolutions
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.returnResolutions.list()
 */
    list(params?: ReturnResolutionsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<ListReturnResolutionsResponse, ListReturnResolutionsResponse>>;
    /** Iterate pages lazily.
     * @see https://developers.withflintpay.com/docs/api/return-resolutions#listReturnResolutions
     */
    listPages(params?: ReturnResolutionsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<WithResponseInfo<ListReturnResolutionsResponse, ListReturnResolutionsResponse>>;
    /** Iterate items lazily.
     * @see https://developers.withflintpay.com/docs/api/return-resolutions#listReturnResolutions
     */
    listItems(params?: ReturnResolutionsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<ReturnResolution>;
    /**
 * Release a confirmed resolution that is waiting on a manual release. Available only while
 * action_reason is manual_release.
 *
 * `POST /v1/return-resolutions/{return_resolution_id}/release`
 * @param return_resolution_id Flint return resolution id.
 * @see https://developers.withflintpay.com/docs/api/return-resolutions#releaseReturnResolution
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.returnResolutions.release("retres_01ARZ3NDEKTSV4RRFFQ69G5FAV", {reason:
 * "merchant_approved"}, { idempotencyKey: idempotencyKey })
 */
    release(return_resolution_id: InputValue<string>, params: ReturnResolutionsReleaseParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<ReturnResolution, ReleaseReturnResolutionResponse>>;
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
 *
 * `POST /v1/return-resolutions/{return_resolution_id}/retry`
 * @param return_resolution_id Flint return resolution id.
 * @see https://developers.withflintpay.com/docs/api/return-resolutions#retryReturnResolution
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.returnResolutions.retry("retres_01ARZ3NDEKTSV4RRFFQ69G5FAV", {reason:
 * "dependency_recovered"}, { idempotencyKey: idempotencyKey })
 */
    retry(return_resolution_id: InputValue<string>, params: ReturnResolutionsRetryParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<ReturnResolution, RetryReturnResolutionResponse>>;
    /**
 * Update a proposed resolution before confirmation. A present line_items, replacement_line_items,
 * or adjustments array replaces that collection and requires expected_version.
 *
 * `PATCH /v1/return-resolutions/{return_resolution_id}`
 * @param return_resolution_id Flint return resolution id.
 * @see https://developers.withflintpay.com/docs/api/return-resolutions#updateReturnResolution
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.returnResolutions.update("retres_01ARZ3NDEKTSV4RRFFQ69G5FAV", {external_reference_id:
 * "resolution-2026-001"}, { idempotencyKey: idempotencyKey })
 */
    update(return_resolution_id: InputValue<string>, params: ReturnResolutionsUpdateParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<ReturnResolution, UpdateReturnResolutionResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly returnResolutions: ReturnResolutionsResource;
}
