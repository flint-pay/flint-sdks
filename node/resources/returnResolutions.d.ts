export { SdkError, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
export type { Result, Metadata, ErrorKind, DiagnosticEvent, InputValue, ServerSentEvent } from '../runtime.js';
import type { InputValue } from '../runtime.js';
import type { CancelReturnResolutionResponse } from '../declarations/CancelReturnResolutionResponse.js';
import type { CheckoutSessionLaunchResponse } from '../declarations/CheckoutSessionLaunchResponse.js';
import type { ClientOptions } from '../declarations/ClientOptions.js';
import type { ListReturnResolutionsResponse } from '../declarations/ListReturnResolutionsResponse.js';
import type { RequestOptions } from '../declarations/RequestOptions.js';
import type { ReturnReplacementLineItemReplacementRequestInput } from '../declarations/ReturnReplacementLineItemReplacementRequestInput.js';
import type { ReturnResolution } from '../declarations/ReturnResolution.js';
import type { ReturnResolutionAdjustmentSetInput } from '../declarations/ReturnResolutionAdjustmentSetInput.js';
import type { ReturnResolutionLineItemReplacementRequestInput } from '../declarations/ReturnResolutionLineItemReplacementRequestInput.js';
import type { ReturnResolutionsCancelInput } from '../declarations/ReturnResolutionsCancelInput.js';
import type { ReturnResolutionsCancelResponse } from '../declarations/ReturnResolutionsCancelResponse.js';
import type { ReturnResolutionsConfirmInput } from '../declarations/ReturnResolutionsConfirmInput.js';
import type { ReturnResolutionsConfirmResponse } from '../declarations/ReturnResolutionsConfirmResponse.js';
import type { ReturnResolutionsGetInput } from '../declarations/ReturnResolutionsGetInput.js';
import type { ReturnResolutionsGetOrCreateCheckoutSessionInput } from '../declarations/ReturnResolutionsGetOrCreateCheckoutSessionInput.js';
import type { ReturnResolutionsGetOrCreateCheckoutSessionResponse } from '../declarations/ReturnResolutionsGetOrCreateCheckoutSessionResponse.js';
import type { ReturnResolutionsGetResponse } from '../declarations/ReturnResolutionsGetResponse.js';
import type { ReturnResolutionsListInput } from '../declarations/ReturnResolutionsListInput.js';
import type { ReturnResolutionsListResponse } from '../declarations/ReturnResolutionsListResponse.js';
import type { ReturnResolutionsReleaseInput } from '../declarations/ReturnResolutionsReleaseInput.js';
import type { ReturnResolutionsReleaseResponse } from '../declarations/ReturnResolutionsReleaseResponse.js';
import type { ReturnResolutionsRetryInput } from '../declarations/ReturnResolutionsRetryInput.js';
import type { ReturnResolutionsRetryResponse } from '../declarations/ReturnResolutionsRetryResponse.js';
import type { ReturnResolutionsUpdateInput } from '../declarations/ReturnResolutionsUpdateInput.js';
import type { ReturnResolutionsUpdateResponse } from '../declarations/ReturnResolutionsUpdateResponse.js';
import type { SdkResponse } from '../declarations/SdkResponse.js';
import type { _SdkPayloadAt } from '../declarations/_SdkPayloadAt.js';
import type { _SdkWithoutIdempotency } from '../declarations/_SdkWithoutIdempotency.js';
export interface ReturnResolutionsResource {
    /**
 * Cancel a resolution and release the line value it reserved. Effects that already succeeded are undone with a compensating correction instead.
 * POST /v1/return-resolutions/{return_resolution_id}/cancel
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.returnResolutions.cancel("example", {reason: "buyer_request"}, { idempotencyKey: idempotencyKey })
 */
    cancel(return_resolution_id: InputValue<string>, params: (InputValue<{ "expected_version"?: string; "reason": "buyer_request" | "merchant_request" | "duplicate" | "expired" | "created_in_error" | "other"; "reason_message"?: string; }>) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<CancelReturnResolutionResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    cancelWithResponse(return_resolution_id: InputValue<string>, params: (InputValue<{ "expected_version"?: string; "reason": "buyer_request" | "merchant_request" | "duplicate" | "expired" | "created_in_error" | "other"; "reason_message"?: string; }>) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<ReturnResolutionsCancelResponse>>;
    /**
 * Confirm a proposed resolution and freeze its economic facts. Execution can remain pending behind line-qualified execution blockers.
 * POST /v1/return-resolutions/{return_resolution_id}/confirm
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.returnResolutions.confirm("example", {}, { idempotencyKey: idempotencyKey })
 */
    confirm(return_resolution_id: InputValue<string>, params: (InputValue<{ "expected_version"?: string; }>) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<CancelReturnResolutionResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    confirmWithResponse(return_resolution_id: InputValue<string>, params: (InputValue<{ "expected_version"?: string; }>) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<ReturnResolutionsConfirmResponse>>;
    /**
 * Create or reuse the standard hosted checkout session for a buyer-owed replacement Order linked to this Return resolution. return_url sets where the checkout sends the buyer after paying. A reused session takes a new return_url only until a payment starts on it, and keeps the one it has after that.
 * POST /v1/return-resolutions/{return_resolution_id}/checkout-session
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.returnResolutions.getOrCreateCheckoutSession("example", undefined, { idempotencyKey: idempotencyKey })
 */
    getOrCreateCheckoutSession(return_resolution_id: InputValue<string>, params?: (InputValue<{ "return_url"?: string; }> | { "return_url"?: never }) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<CheckoutSessionLaunchResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    getOrCreateCheckoutSessionWithResponse(return_resolution_id: InputValue<string>, params?: (InputValue<{ "return_url"?: string; }> | { "return_url"?: never }) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<ReturnResolutionsGetOrCreateCheckoutSessionResponse>>;
    /**
 * Retrieve one resolution with its amounts, adjustments, execution blockers, and linked refunds, payments, and replacement order. Supports expand for those links.
 * GET /v1/return-resolutions/{return_resolution_id}
 * @example
 * client.returnResolutions.get("example")
 */
    get(return_resolution_id: InputValue<string>, params?: { "expand"?: InputValue<Array<"payment_intents" | "refunds" | "replacement_order">>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<_SdkPayloadAt<CancelReturnResolutionResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    getWithResponse(return_resolution_id: InputValue<string>, params?: { "expand"?: InputValue<Array<"payment_intents" | "refunds" | "replacement_order">>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<ReturnResolutionsGetResponse>>;
    /**
 * List resolutions. Filter by corrects_return_resolution_id to retrieve the correction history for a resolution that already settled.
 * GET /v1/return-resolutions
 * @example
 * client.returnResolutions.list()
 */
    list(params?: { "action_required_by"?: InputValue<"buyer" | "merchant" | "integration">; "corrects_return_resolution_id"?: InputValue<string>; "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "external_reference_id"?: InputValue<string>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "query"?: InputValue<string>; "resolution_type"?: InputValue<Array<"refund" | "exchange" | "replacement" | "no_monetary_action" | "correction">>; "return_id"?: InputValue<string>; "return_line_item_id"?: InputValue<string>; "return_policy_revision_id"?: InputValue<string>; "status"?: InputValue<Array<"proposed" | "pending" | "requires_action" | "partially_fulfilled" | "fulfilled" | "failed" | "canceled">>; "updated_after"?: InputValue<string | globalThis.Date>; "updated_before"?: InputValue<string | globalThis.Date>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<ListReturnResolutionsResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    listWithResponse(params?: { "action_required_by"?: InputValue<"buyer" | "merchant" | "integration">; "corrects_return_resolution_id"?: InputValue<string>; "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "external_reference_id"?: InputValue<string>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "query"?: InputValue<string>; "resolution_type"?: InputValue<Array<"refund" | "exchange" | "replacement" | "no_monetary_action" | "correction">>; "return_id"?: InputValue<string>; "return_line_item_id"?: InputValue<string>; "return_policy_revision_id"?: InputValue<string>; "status"?: InputValue<Array<"proposed" | "pending" | "requires_action" | "partially_fulfilled" | "fulfilled" | "failed" | "canceled">>; "updated_after"?: InputValue<string | globalThis.Date>; "updated_before"?: InputValue<string | globalThis.Date>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<ReturnResolutionsListResponse>>;
    listPages(params?: { "action_required_by"?: InputValue<"buyer" | "merchant" | "integration">; "corrects_return_resolution_id"?: InputValue<string>; "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "external_reference_id"?: InputValue<string>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "query"?: InputValue<string>; "resolution_type"?: InputValue<Array<"refund" | "exchange" | "replacement" | "no_monetary_action" | "correction">>; "return_id"?: InputValue<string>; "return_line_item_id"?: InputValue<string>; "return_policy_revision_id"?: InputValue<string>; "status"?: InputValue<Array<"proposed" | "pending" | "requires_action" | "partially_fulfilled" | "fulfilled" | "failed" | "canceled">>; "updated_after"?: InputValue<string | globalThis.Date>; "updated_before"?: InputValue<string | globalThis.Date>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<ListReturnResolutionsResponse>;
    listPagesWithResponse(params?: { "action_required_by"?: InputValue<"buyer" | "merchant" | "integration">; "corrects_return_resolution_id"?: InputValue<string>; "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "external_reference_id"?: InputValue<string>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "query"?: InputValue<string>; "resolution_type"?: InputValue<Array<"refund" | "exchange" | "replacement" | "no_monetary_action" | "correction">>; "return_id"?: InputValue<string>; "return_line_item_id"?: InputValue<string>; "return_policy_revision_id"?: InputValue<string>; "status"?: InputValue<Array<"proposed" | "pending" | "requires_action" | "partially_fulfilled" | "fulfilled" | "failed" | "canceled">>; "updated_after"?: InputValue<string | globalThis.Date>; "updated_before"?: InputValue<string | globalThis.Date>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<SdkResponse<ReturnResolutionsListResponse>>;
    listItems(params?: { "action_required_by"?: InputValue<"buyer" | "merchant" | "integration">; "corrects_return_resolution_id"?: InputValue<string>; "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "external_reference_id"?: InputValue<string>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "query"?: InputValue<string>; "resolution_type"?: InputValue<Array<"refund" | "exchange" | "replacement" | "no_monetary_action" | "correction">>; "return_id"?: InputValue<string>; "return_line_item_id"?: InputValue<string>; "return_policy_revision_id"?: InputValue<string>; "status"?: InputValue<Array<"proposed" | "pending" | "requires_action" | "partially_fulfilled" | "fulfilled" | "failed" | "canceled">>; "updated_after"?: InputValue<string | globalThis.Date>; "updated_before"?: InputValue<string | globalThis.Date>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<ReturnResolution>;
    /**
 * Release a confirmed resolution that is waiting on a manual release. Available only while action_reason is manual_release.
 * POST /v1/return-resolutions/{return_resolution_id}/release
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.returnResolutions.release("example", {reason: "merchant_approved"}, { idempotencyKey: idempotencyKey })
 */
    release(return_resolution_id: InputValue<string>, params: (InputValue<{ "expected_version"?: string; "reason": "merchant_approved" | "exception_resolved" | "other"; "reason_message"?: string; }>) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<CancelReturnResolutionResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    releaseWithResponse(return_resolution_id: InputValue<string>, params: (InputValue<{ "expected_version"?: string; "reason": "merchant_approved" | "exception_resolved" | "other"; "reason_message"?: string; }>) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<ReturnResolutionsReleaseResponse>>;
    /**
 * Retry a failed resolution. A new attempt starts, historical payment and refund IDs stay on the resolution, and a late event from an earlier attempt cannot settle the new attempt.
 * POST /v1/return-resolutions/{return_resolution_id}/retry
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.returnResolutions.retry("example", {reason: "dependency_recovered"}, { idempotencyKey: idempotencyKey })
 */
    retry(return_resolution_id: InputValue<string>, params: (InputValue<{ "expected_version"?: string; "reason": "dependency_recovered" | "payment_method_updated" | "operator_retry" | "other"; "reason_message"?: string; }>) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<CancelReturnResolutionResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    retryWithResponse(return_resolution_id: InputValue<string>, params: (InputValue<{ "expected_version"?: string; "reason": "dependency_recovered" | "payment_method_updated" | "operator_retry" | "other"; "reason_message"?: string; }>) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<ReturnResolutionsRetryResponse>>;
    /**
 * Update a proposed resolution before confirmation. A present line_items or replacement_line_items array replaces that collection and requires expected_version.
 * PATCH /v1/return-resolutions/{return_resolution_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.returnResolutions.update("example", {}, { idempotencyKey: idempotencyKey })
 */
    update(return_resolution_id: InputValue<string>, params: (InputValue<({ "adjustment_set"?: ReturnResolutionAdjustmentSetInput; "expected_version"?: string; "external_reference_id"?: string | null; "line_items"?: Array<ReturnResolutionLineItemReplacementRequestInput>; "metadata"?: Record<string, string | null> | null; "pricing_basis"?: "original_price" | "current_price" | "merchant_agreed_price"; "replacement_line_items"?: Array<ReturnReplacementLineItemReplacementRequestInput>; }) & (((({ "line_items"?: never })) | ({ "expected_version": unknown; }))) & (((({ "replacement_line_items"?: never })) | ({ "expected_version": unknown; }))) & (((({ "adjustment_set"?: never })) | ({ "expected_version": unknown; })))>) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<CancelReturnResolutionResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    updateWithResponse(return_resolution_id: InputValue<string>, params: (InputValue<({ "adjustment_set"?: ReturnResolutionAdjustmentSetInput; "expected_version"?: string; "external_reference_id"?: string | null; "line_items"?: Array<ReturnResolutionLineItemReplacementRequestInput>; "metadata"?: Record<string, string | null> | null; "pricing_basis"?: "original_price" | "current_price" | "merchant_agreed_price"; "replacement_line_items"?: Array<ReturnReplacementLineItemReplacementRequestInput>; }) & (((({ "line_items"?: never })) | ({ "expected_version": unknown; }))) & (((({ "replacement_line_items"?: never })) | ({ "expected_version": unknown; }))) & (((({ "adjustment_set"?: never })) | ({ "expected_version": unknown; })))>) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<ReturnResolutionsUpdateResponse>>;
  }
export declare class Client {

  constructor(options?: ClientOptions);

  close(): Promise<void>;
readonly returnResolutions: ReturnResolutionsResource;
}
export type { RequestOptions } from '../declarations/RequestOptions.js';
export type { _SdkPayloadAt } from '../declarations/_SdkPayloadAt.js';
export type { CancelReturnResolutionResponse } from '../declarations/CancelReturnResolutionResponse.js';
export type { SdkResponse } from '../declarations/SdkResponse.js';
export type { ReturnResolutionsCancelResponse } from '../declarations/ReturnResolutionsCancelResponse.js';
export type { ReturnResolutionsConfirmResponse } from '../declarations/ReturnResolutionsConfirmResponse.js';
export type { CheckoutSessionLaunchResponse } from '../declarations/CheckoutSessionLaunchResponse.js';
export type { ReturnResolutionsGetOrCreateCheckoutSessionResponse } from '../declarations/ReturnResolutionsGetOrCreateCheckoutSessionResponse.js';
export type { _SdkWithoutIdempotency } from '../declarations/_SdkWithoutIdempotency.js';
export type { ReturnResolutionsGetResponse } from '../declarations/ReturnResolutionsGetResponse.js';
export type { ListReturnResolutionsResponse } from '../declarations/ListReturnResolutionsResponse.js';
export type { ReturnResolutionsListResponse } from '../declarations/ReturnResolutionsListResponse.js';
export type { ReturnResolution } from '../declarations/ReturnResolution.js';
export type { ReturnResolutionsReleaseResponse } from '../declarations/ReturnResolutionsReleaseResponse.js';
export type { ReturnResolutionsRetryResponse } from '../declarations/ReturnResolutionsRetryResponse.js';
export type { ReturnResolutionAdjustmentSetInput } from '../declarations/ReturnResolutionAdjustmentSetInput.js';
export type { ReturnResolutionLineItemReplacementRequestInput } from '../declarations/ReturnResolutionLineItemReplacementRequestInput.js';
export type { ReturnReplacementLineItemReplacementRequestInput } from '../declarations/ReturnReplacementLineItemReplacementRequestInput.js';
export type { ReturnResolutionsUpdateResponse } from '../declarations/ReturnResolutionsUpdateResponse.js';
export type { ReturnResolutionsCancelInput } from '../declarations/ReturnResolutionsCancelInput.js';
export type { ReturnResolutionsConfirmInput } from '../declarations/ReturnResolutionsConfirmInput.js';
export type { ReturnResolutionsGetOrCreateCheckoutSessionInput } from '../declarations/ReturnResolutionsGetOrCreateCheckoutSessionInput.js';
export type { ReturnResolutionsGetInput } from '../declarations/ReturnResolutionsGetInput.js';
export type { ReturnResolutionsListInput } from '../declarations/ReturnResolutionsListInput.js';
export type { ReturnResolutionsReleaseInput } from '../declarations/ReturnResolutionsReleaseInput.js';
export type { ReturnResolutionsRetryInput } from '../declarations/ReturnResolutionsRetryInput.js';
export type { ReturnResolutionsUpdateInput } from '../declarations/ReturnResolutionsUpdateInput.js';
export type { ClientOptions } from '../declarations/ClientOptions.js';
export type { AuthMode } from '../declarations/AuthMode.js';
export type { Credentials } from '../declarations/Credentials.js';
export type { ResponseMeta } from '../declarations/ResponseMeta.js';
export type { ResponseWarning } from '../declarations/ResponseWarning.js';
export type { NextAction } from '../declarations/NextAction.js';
export type { CheckoutSessionLaunchResult } from '../declarations/CheckoutSessionLaunchResult.js';
export type { CheckoutAccess } from '../declarations/CheckoutAccess.js';
export type { CheckoutSession } from '../declarations/CheckoutSession.js';
export type { MoneyValue } from '../declarations/MoneyValue.js';
export type { PaymentAttemptGiftCardRedemption } from '../declarations/PaymentAttemptGiftCardRedemption.js';
export type { PaymentAttemptPaymentIntent } from '../declarations/PaymentAttemptPaymentIntent.js';
export type { PaymentErrorSummary } from '../declarations/PaymentErrorSummary.js';
export type { ErrorRemediation } from '../declarations/ErrorRemediation.js';
export type { PendingPaymentAction } from '../declarations/PendingPaymentAction.js';
export type { StripePaymentClientAction } from '../declarations/StripePaymentClientAction.js';
export type { CheckoutCustomTextWriteConfig } from '../declarations/CheckoutCustomTextWriteConfig.js';
export type { CheckoutCustomerConfig } from '../declarations/CheckoutCustomerConfig.js';
export type { PrefilledCustomerInfo } from '../declarations/PrefilledCustomerInfo.js';
export type { PostalAddress } from '../declarations/PostalAddress.js';
export type { CheckoutDeliveryPinnedDependency } from '../declarations/CheckoutDeliveryPinnedDependency.js';
export type { CheckoutExpirationConfig } from '../declarations/CheckoutExpirationConfig.js';
export type { DeliveryQuoteChoiceGroupResource } from '../declarations/DeliveryQuoteChoiceGroupResource.js';
export type { DeliveryCandidateOutcomeResource } from '../declarations/DeliveryCandidateOutcomeResource.js';
export type { DeliveryAddressAdvisoryResource } from '../declarations/DeliveryAddressAdvisoryResource.js';
export type { DeliveryAddressRequest } from '../declarations/DeliveryAddressRequest.js';
export type { DeliveryInputRequirement } from '../declarations/DeliveryInputRequirement.js';
export type { DeliveryInputConstraint } from '../declarations/DeliveryInputConstraint.js';
export type { DeliveryWindowResource } from '../declarations/DeliveryWindowResource.js';
export type { DeliveryOptionProjection } from '../declarations/DeliveryOptionProjection.js';
export type { DeliveryArrivalEstimate } from '../declarations/DeliveryArrivalEstimate.js';
export type { BuyerInstructionsConfig } from '../declarations/BuyerInstructionsConfig.js';
export type { DeliveryPlan } from '../declarations/DeliveryPlan.js';
export type { DeliveryQuoteExecutionLegResource } from '../declarations/DeliveryQuoteExecutionLegResource.js';
export type { DeliveryShipmentDetails } from '../declarations/DeliveryShipmentDetails.js';
export type { DeliveryPickupDetails } from '../declarations/DeliveryPickupDetails.js';
export type { DeliveryLocationSummaryResource } from '../declarations/DeliveryLocationSummaryResource.js';
export type { DeliveryAddressResource } from '../declarations/DeliveryAddressResource.js';
export type { DeliveryRecipientRequirement } from '../declarations/DeliveryRecipientRequirement.js';
export type { DeliveryQuoteLineItemResource } from '../declarations/DeliveryQuoteLineItemResource.js';
export type { DeliveryMerchantDiagnostic } from '../declarations/DeliveryMerchantDiagnostic.js';
export type { DeliveryEligibilityMismatch } from '../declarations/DeliveryEligibilityMismatch.js';
export type { BuyerDeliveryQuoteChoiceGroupResource } from '../declarations/BuyerDeliveryQuoteChoiceGroupResource.js';
export type { BuyerDeliveryInputRequirementResource } from '../declarations/BuyerDeliveryInputRequirementResource.js';
export type { BuyerDeliveryOptionResource } from '../declarations/BuyerDeliveryOptionResource.js';
export type { LegalSettings } from '../declarations/LegalSettings.js';
export type { PricingAmounts } from '../declarations/PricingAmounts.js';
export type { SettlementAmounts } from '../declarations/SettlementAmounts.js';
export type { SignedMoney } from '../declarations/SignedMoney.js';
export type { PaymentCollectionStripe } from '../declarations/PaymentCollectionStripe.js';
export type { SelectableOrderPaymentIntent } from '../declarations/SelectableOrderPaymentIntent.js';
export type { PaymentCollection } from '../declarations/PaymentCollection.js';
export type { ExpandedPaymentIntentSummary } from '../declarations/ExpandedPaymentIntentSummary.js';
export type { PaymentSourceSummary } from '../declarations/PaymentSourceSummary.js';
export type { PaymentSourceAchDebitSummary } from '../declarations/PaymentSourceAchDebitSummary.js';
export type { PaymentSourceCardSummary } from '../declarations/PaymentSourceCardSummary.js';
export type { CheckoutPaymentConfig } from '../declarations/CheckoutPaymentConfig.js';
export type { CheckoutProblemResource } from '../declarations/CheckoutProblemResource.js';
export type { CheckoutPromotionConfig } from '../declarations/CheckoutPromotionConfig.js';
export type { CheckoutRedirectsConfig } from '../declarations/CheckoutRedirectsConfig.js';
export type { CheckoutTaxConfig } from '../declarations/CheckoutTaxConfig.js';
export type { ThemeConfig } from '../declarations/ThemeConfig.js';
export type { CheckoutTipConfig } from '../declarations/CheckoutTipConfig.js';
export type { HostedCheckout } from '../declarations/HostedCheckout.js';
export type { ReturnResolutionAdjustment } from '../declarations/ReturnResolutionAdjustment.js';
export type { ReturnActor } from '../declarations/ReturnActor.js';
export type { ReturnResolutionExecutionBlocker } from '../declarations/ReturnResolutionExecutionBlocker.js';
export type { ReturnResolutionLineItem } from '../declarations/ReturnResolutionLineItem.js';
export type { Refund } from '../declarations/Refund.js';
export type { RefundLineItemAllocation } from '../declarations/RefundLineItemAllocation.js';
export type { RefundLineItemAdjustmentRefund } from '../declarations/RefundLineItemAdjustmentRefund.js';
export type { RefundLineItemAdjustment } from '../declarations/RefundLineItemAdjustment.js';
export type { RefundAdjustmentReason } from '../declarations/RefundAdjustmentReason.js';
export type { CategoryReference } from '../declarations/CategoryReference.js';
export type { RefundLineItemModifierAllocation } from '../declarations/RefundLineItemModifierAllocation.js';
export type { SelectedProductOption } from '../declarations/SelectedProductOption.js';
export type { RefundTaxBreakdownRefund } from '../declarations/RefundTaxBreakdownRefund.js';
export type { PaymentRefund } from '../declarations/PaymentRefund.js';
export type { RefundTenderAllocation } from '../declarations/RefundTenderAllocation.js';
export type { RefundGiftCardDestination } from '../declarations/RefundGiftCardDestination.js';
export type { RefundUnissuedGiftCardRecovery } from '../declarations/RefundUnissuedGiftCardRecovery.js';
export type { ReturnReplacementLineItem } from '../declarations/ReturnReplacementLineItem.js';
export type { ReturnResolutionAdjustmentRequestInput } from '../declarations/ReturnResolutionAdjustmentRequestInput.js';
export type { MoneyValueInput } from '../declarations/MoneyValueInput.js';
export type { CancelReturnRequestInput } from '../declarations/CancelReturnRequestInput.js';
export type { ConfirmReturnResolutionRequestInput } from '../declarations/ConfirmReturnResolutionRequestInput.js';
export type { GetOrCreateReturnResolutionCheckoutSessionRequestInput } from '../declarations/GetOrCreateReturnResolutionCheckoutSessionRequestInput.js';
export type { ReleaseReturnResolutionRequestInput } from '../declarations/ReleaseReturnResolutionRequestInput.js';
export type { RetryReturnResolutionRequestInput } from '../declarations/RetryReturnResolutionRequestInput.js';
export type { UpdateReturnResolutionRequestInput } from '../declarations/UpdateReturnResolutionRequestInput.js';
export { makeCancelReturnResolutionResponse } from '../declarations/makeCancelReturnResolutionResponse.js';
export { makeCheckoutSessionLaunchResponse } from '../declarations/makeCheckoutSessionLaunchResponse.js';
export { makeListReturnResolutionsResponse } from '../declarations/makeListReturnResolutionsResponse.js';
export { makeReturnResolution } from '../declarations/makeReturnResolution.js';
export { makeResponseMeta } from '../declarations/makeResponseMeta.js';
export { makeResponseWarning } from '../declarations/makeResponseWarning.js';
export { makeNextAction } from '../declarations/makeNextAction.js';
export { makeCheckoutSessionLaunchResult } from '../declarations/makeCheckoutSessionLaunchResult.js';
export { makeCheckoutAccess } from '../declarations/makeCheckoutAccess.js';
export { makeCheckoutSession } from '../declarations/makeCheckoutSession.js';
export { makeMoneyValue } from '../declarations/makeMoneyValue.js';
export { makePaymentAttemptGiftCardRedemption } from '../declarations/makePaymentAttemptGiftCardRedemption.js';
export { makePaymentAttemptPaymentIntent } from '../declarations/makePaymentAttemptPaymentIntent.js';
export { makePaymentErrorSummary } from '../declarations/makePaymentErrorSummary.js';
export { makeErrorRemediation } from '../declarations/makeErrorRemediation.js';
export { makePendingPaymentAction } from '../declarations/makePendingPaymentAction.js';
export { makeStripePaymentClientAction } from '../declarations/makeStripePaymentClientAction.js';
export { makeCheckoutCustomTextWriteConfig } from '../declarations/makeCheckoutCustomTextWriteConfig.js';
export { makeCheckoutCustomerConfig } from '../declarations/makeCheckoutCustomerConfig.js';
export { makePrefilledCustomerInfo } from '../declarations/makePrefilledCustomerInfo.js';
export { makePostalAddress } from '../declarations/makePostalAddress.js';
export { makeCheckoutDeliveryPinnedDependency } from '../declarations/makeCheckoutDeliveryPinnedDependency.js';
export { makeCheckoutExpirationConfig } from '../declarations/makeCheckoutExpirationConfig.js';
export { makeDeliveryQuoteChoiceGroupResource } from '../declarations/makeDeliveryQuoteChoiceGroupResource.js';
export { makeDeliveryCandidateOutcomeResource } from '../declarations/makeDeliveryCandidateOutcomeResource.js';
export { makeDeliveryAddressAdvisoryResource } from '../declarations/makeDeliveryAddressAdvisoryResource.js';
export { makeDeliveryAddressRequest } from '../declarations/makeDeliveryAddressRequest.js';
export { makeDeliveryInputRequirement } from '../declarations/makeDeliveryInputRequirement.js';
export { makeDeliveryInputConstraint } from '../declarations/makeDeliveryInputConstraint.js';
export { makeDeliveryWindowResource } from '../declarations/makeDeliveryWindowResource.js';
export { makeDeliveryOptionProjection } from '../declarations/makeDeliveryOptionProjection.js';
export { makeDeliveryArrivalEstimate } from '../declarations/makeDeliveryArrivalEstimate.js';
export { makeBuyerInstructionsConfig } from '../declarations/makeBuyerInstructionsConfig.js';
export { makeDeliveryPlan } from '../declarations/makeDeliveryPlan.js';
export { makeDeliveryQuoteExecutionLegResource } from '../declarations/makeDeliveryQuoteExecutionLegResource.js';
export { makeDeliveryShipmentDetails } from '../declarations/makeDeliveryShipmentDetails.js';
export { makeDeliveryPickupDetails } from '../declarations/makeDeliveryPickupDetails.js';
export { makeDeliveryLocationSummaryResource } from '../declarations/makeDeliveryLocationSummaryResource.js';
export { makeDeliveryAddressResource } from '../declarations/makeDeliveryAddressResource.js';
export { makeDeliveryRecipientRequirement } from '../declarations/makeDeliveryRecipientRequirement.js';
export { makeDeliveryQuoteLineItemResource } from '../declarations/makeDeliveryQuoteLineItemResource.js';
export { makeDeliveryMerchantDiagnostic } from '../declarations/makeDeliveryMerchantDiagnostic.js';
export { makeDeliveryEligibilityMismatch } from '../declarations/makeDeliveryEligibilityMismatch.js';
export { makeBuyerDeliveryQuoteChoiceGroupResource } from '../declarations/makeBuyerDeliveryQuoteChoiceGroupResource.js';
export { makeBuyerDeliveryInputRequirementResource } from '../declarations/makeBuyerDeliveryInputRequirementResource.js';
export { makeBuyerDeliveryOptionResource } from '../declarations/makeBuyerDeliveryOptionResource.js';
export { makeLegalSettings } from '../declarations/makeLegalSettings.js';
export { makePricingAmounts } from '../declarations/makePricingAmounts.js';
export { makeSettlementAmounts } from '../declarations/makeSettlementAmounts.js';
export { makeSignedMoney } from '../declarations/makeSignedMoney.js';
export { makePaymentCollectionStripe } from '../declarations/makePaymentCollectionStripe.js';
export { makeSelectableOrderPaymentIntent } from '../declarations/makeSelectableOrderPaymentIntent.js';
export { makePaymentCollection } from '../declarations/makePaymentCollection.js';
export { makeExpandedPaymentIntentSummary } from '../declarations/makeExpandedPaymentIntentSummary.js';
export { makePaymentSourceSummary } from '../declarations/makePaymentSourceSummary.js';
export { makePaymentSourceAchDebitSummary } from '../declarations/makePaymentSourceAchDebitSummary.js';
export { makePaymentSourceCardSummary } from '../declarations/makePaymentSourceCardSummary.js';
export { makeCheckoutPaymentConfig } from '../declarations/makeCheckoutPaymentConfig.js';
export { makeCheckoutProblemResource } from '../declarations/makeCheckoutProblemResource.js';
export { makeCheckoutPromotionConfig } from '../declarations/makeCheckoutPromotionConfig.js';
export { makeCheckoutRedirectsConfig } from '../declarations/makeCheckoutRedirectsConfig.js';
export { makeCheckoutTaxConfig } from '../declarations/makeCheckoutTaxConfig.js';
export { makeThemeConfig } from '../declarations/makeThemeConfig.js';
export { makeCheckoutTipConfig } from '../declarations/makeCheckoutTipConfig.js';
export { makeHostedCheckout } from '../declarations/makeHostedCheckout.js';
export { makeReturnResolutionAdjustment } from '../declarations/makeReturnResolutionAdjustment.js';
export { makeReturnActor } from '../declarations/makeReturnActor.js';
export { makeReturnResolutionExecutionBlocker } from '../declarations/makeReturnResolutionExecutionBlocker.js';
export { makeReturnResolutionLineItem } from '../declarations/makeReturnResolutionLineItem.js';
export { makeRefund } from '../declarations/makeRefund.js';
export { makeRefundLineItemAllocation } from '../declarations/makeRefundLineItemAllocation.js';
export { makeRefundLineItemAdjustmentRefund } from '../declarations/makeRefundLineItemAdjustmentRefund.js';
export { makeRefundLineItemAdjustment } from '../declarations/makeRefundLineItemAdjustment.js';
export { makeRefundAdjustmentReason } from '../declarations/makeRefundAdjustmentReason.js';
export { makeCategoryReference } from '../declarations/makeCategoryReference.js';
export { makeRefundLineItemModifierAllocation } from '../declarations/makeRefundLineItemModifierAllocation.js';
export { makeSelectedProductOption } from '../declarations/makeSelectedProductOption.js';
export { makeRefundTaxBreakdownRefund } from '../declarations/makeRefundTaxBreakdownRefund.js';
export { makePaymentRefund } from '../declarations/makePaymentRefund.js';
export { makeRefundTenderAllocation } from '../declarations/makeRefundTenderAllocation.js';
export { makeRefundGiftCardDestination } from '../declarations/makeRefundGiftCardDestination.js';
export { makeRefundUnissuedGiftCardRecovery } from '../declarations/makeRefundUnissuedGiftCardRecovery.js';
export { makeReturnReplacementLineItem } from '../declarations/makeReturnReplacementLineItem.js';
