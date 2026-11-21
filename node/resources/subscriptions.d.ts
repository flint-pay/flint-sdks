import type { WithResponseInfo, InputValue } from '../runtime.js';
import type { AccessLink, AccessLinkResponse } from '../declarations/types-0.js';
import type { ClientOptions } from '../declarations/types-7.js';
import type { RequestOptions } from '../declarations/types-62.js';
import type { Subscription } from '../declarations/types-69.js';
import type { SubscriptionLineItem, SubscriptionLineItemsListResponse, SubscriptionListResponse } from '../declarations/types-70.js';
import type {
    SubscriptionPaymentRetry,
    SubscriptionPaymentRetryListResponse,
    SubscriptionPaymentRetryResponse,
    SubscriptionPlanChangeResult,
    SubscriptionPlanChangeResultResponse
} from '../declarations/types-71.js';
import type {
    SubscriptionQuantityChangeResult,
    SubscriptionQuantityChangeResultResponse,
    SubscriptionRenewalResult,
    SubscriptionRenewalResultResponse,
    SubscriptionResponse
} from '../declarations/types-72.js';
import type {
    SubscriptionsApplyPromotionParams,
    SubscriptionsCancelParams,
    SubscriptionsChangePlanParams,
    SubscriptionsChangeQuantityParams,
    SubscriptionsCreateAccessLinkParams,
    SubscriptionsCreateLineItemParams,
    SubscriptionsCreateParams,
    SubscriptionsCreatePaymentRetryParams,
    SubscriptionsDeleteLineItemParams,
    SubscriptionsGetParams,
    SubscriptionsGetPaymentRetryParams,
    SubscriptionsListLineItemsParams,
    SubscriptionsListParams,
    SubscriptionsListPaymentRetriesParams,
    SubscriptionsPauseParams,
    SubscriptionsRemovePromotionsParams,
    SubscriptionsRenewParams,
    SubscriptionsResumeParams,
    SubscriptionsSkipCycleParams,
    SubscriptionsUpdateLineItemParams,
    SubscriptionsUpdateParams
} from '../declarations/types-73.js';
import type { _SdkRequiredIdempotency, _SdkWithoutIdempotency } from '../declarations/types-80.js';
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
    SubscriptionsApplyPromotionParams,
    SubscriptionsCancelParams,
    SubscriptionsChangePlanParams,
    SubscriptionsChangeQuantityParams,
    SubscriptionsCreateParams,
    SubscriptionsCreateAccessLinkParams,
    SubscriptionsCreateLineItemParams,
    SubscriptionsCreatePaymentRetryParams,
    SubscriptionsDeleteLineItemParams,
    SubscriptionsGetParams,
    SubscriptionsGetPaymentRetryParams,
    SubscriptionsListLineItemsParams,
    SubscriptionsListPaymentRetriesParams,
    SubscriptionsListParams,
    SubscriptionsPauseParams,
    SubscriptionsRemovePromotionsParams,
    SubscriptionsRenewParams,
    SubscriptionsResumeParams,
    SubscriptionsSkipCycleParams,
    SubscriptionsUpdateParams,
    SubscriptionsUpdateLineItemParams,
    SubscriptionUpcomingDeliveryHold,
    TaxBreakdown,
    TaxBreakdownPercentage,
    TaxBreakdownFlatAmount,
    SubscriptionTermsRequestInput
} from '../declarations/types-73.js';
export type { RequestOptions, ResourceReference, ResponseMeta, ResponseWarning, ResourceVersionRequestInput } from '../declarations/types-62.js';
export type {
    Subscription,
    SubscriptionBillingHold,
    SubscriptionCancellationDetails,
    SubscriptionDelivery,
    SubscriptionAddressVerification,
    SubscriptionDeliveryDestination,
    StripePaymentClientAction,
    StripeSetupIntentClientAction,
    StripeTerminalPaymentIntentClientAction,
    SubscribedLine,
    SubscriptionBillingScheduleRequestInput,
    SubscriptionBillingScheduleInputFlintInput,
    SubscriptionBillingScheduleInputExternalInput,
    SubscriptionBillingStartRequestInput,
    SubscriptionBillingStartInputImmediateInput,
    SubscriptionBillingStartInputScheduledInput,
    SubscriptionBillingStartInputImportedInput,
    SubscriptionBillingScheduleUpdateRequestInput,
    SubscriptionBillingScheduleUpdateInputFlintInput,
    SubscriptionBillingScheduleUpdateInputExternalInput
} from '../declarations/types-69.js';
export type {
    SubscriptionResponse,
    SubscriptionQuantityChangeResult,
    SubscriptionQuantityChangeResultResponse,
    SubscriptionRenewalResult,
    SubscriptionRenewalResultResponse,
    SubscriptionPromotion,
    SubscriptionScheduledPlanChange,
    SubscriptionServiceLocation,
    SubscriptionPlanSwapVariant,
    SubscriptionPlanLineItemVariant,
    SubscriptionTax,
    SubscriptionQuantityChangeLineItemRequestInput,
    SubscriptionPromotionRequestInput,
    SubscriptionServiceLocationRequestInput,
    SubscriptionServiceLocationInputCustomerAddressInput,
    SubscriptionServiceLocationInputAddressInput,
    SubscriptionTaxRequestInput,
    SubscriptionTaxCalculationRequestInput,
    SubscriptionPlanTermsRequestInput,
    SubscriptionQuantityChangeLineItemRequest
} from '../declarations/types-72.js';
export type { _SdkRequiredIdempotency, _SdkWithoutIdempotency, Weight } from '../declarations/types-80.js';
export type {
    SubscriptionPlanChangeResult,
    SubscriptionPlanChangeResultResponse,
    SubscriptionPaymentRetry,
    SubscriptionPaymentRetryResponse,
    SubscriptionPaymentRetryListResponse,
    SubscriptionPausedDeliveryHold,
    SubscriptionPlanLineItem,
    SubscriptionPlanLineItemBundle,
    SubscriptionPlanLineItemCustom,
    SubscriptionPlanChangeLineItemRequestInput,
    SubscriptionOfferTermsRequestInput,
    SubscriptionOfferLineItemRequestInput,
    SubscriptionPlanChangeLineItemRequest,
    SubscriptionOfferLineItemRequest
} from '../declarations/types-71.js';
export type {
    AccessLink,
    AccessLinkResponse,
    ApplySubscriptionPromotionRequestInput,
    Address,
    AddressRequestInput,
    AddressRequest
} from '../declarations/types-0.js';
export type {
    SubscriptionLineItemsListResponse,
    SubscriptionLineItem,
    SubscriptionListResponse,
    SubscriptionIntervalOption,
    SubscriptionDeliveryMethodSummary,
    SubscriptionDeliveryHold,
    SubscriptionEndAfter,
    SubscriptionEndAfterCycles,
    SubscriptionEndAfterDate,
    SubscriptionGiftRecipient,
    SubscriptionInventoryWait,
    SubscriptionDeliveryRequestInput,
    SubscriptionDeliveryDestinationRequestInput,
    SubscriptionDeliveryDestinationInputCustomerAddressInput,
    SubscriptionDeliveryDestinationInputAddressInput,
    SubscriptionEndAfterRequestInput,
    SubscriptionEndAfterCyclesRequestInput,
    SubscriptionEndAfterDateRequestInput,
    SubscriptionGiftRecipientRequestInput,
    SubscriptionGiftRecipientRequest
} from '../declarations/types-70.js';
export type { ClientOptions, CheckoutTaxCalculation } from '../declarations/types-7.js';
export type { PromotionRefRequestInput, PurchasedGiftCard } from '../declarations/types-59.js';
export type {
    PromotionRefInputPromotionIDInput,
    PromotionRefInputPromotionCodeInput,
    PromotionRecurrence,
    PromotionRecurrenceOnce,
    PromotionRecurrenceRepeating,
    PromotionRecurrenceForever
} from '../declarations/types-58.js';
export type {
    AuthMode,
    BundleComponent,
    BundleComponentVariantSummary,
    BuyerAction,
    BuyerCancelActionOptions,
    BuyerCancelRetentionOffer
} from '../declarations/types-1.js';
export type { Credentials, CreditNotesListAllocationsParams } from '../declarations/types-15.js';
export type {
    ExpandedCustomerSummary,
    ErrorRemediation,
    ExpandedPaymentMethodSummary,
    ExpandedOrderSummary,
    ExpandedPackageSummary,
    ExpandedPaymentIntentSummary,
    DisputesAcceptParams
} from '../declarations/types-26.js';
export type { DeliveryRecipientResource } from '../declarations/types-23.js';
export type { MoneyValue, NextAction } from '../declarations/types-44.js';
export type {
    PaymentErrorSummary,
    PaymentAttemptGiftCardRedemption,
    PaymentAttemptPaymentIntent,
    PaymentClientAction,
    PaymentClientActionURL,
    PaymentClientActionStripe,
    PaymentCollection,
    PaymentCollectionStripe,
    PaymentCollectionStripeElements
} from '../declarations/types-51.js';
export type { ReadinessMerchantAccountSession } from '../declarations/types-60.js';
export type { MetadataMap, MetadataRequestInput, MetadataPatchRequestInput, MetadataPatchRequest } from '../declarations/types-43.js';
export type { CardDetails, CategoryReference, CancelSubscriptionRequestInput, CatalogPricing } from '../declarations/types-5.js';
export type {
    ExpandedSubscriptionPlanSummary,
    Fulfillment,
    FulfillmentHold,
    FulfillmentChargeLink,
    FulfillmentLineItem,
    ExpandedShipmentSummary,
    ExpandedSubscriptionSummary,
    FilesCompleteParams
} from '../declarations/types-27.js';
export type {
    SelectedProductOption,
    SettlementAmounts,
    ServiceFulfillmentDetails,
    ShipmentFulfillmentDetails,
    SelectableOrderPaymentIntent,
    SetupCollection,
    SetupCollectionStripe,
    SkipSubscriptionCycleRequestInput
} from '../declarations/types-68.js';
export type { Image } from '../declarations/types-31.js';
export type {
    OrderLineItemModifier,
    OrderGiftCardEstimate,
    OrderGiftCardAllocation,
    OrderGiftCardSettlement,
    OrderGiftCardSelection,
    OrderHandover,
    OrderLineItem,
    OrderLineItemFulfillmentQuantities,
    OrderLineItemFulfillmentRequirements,
    OrderLineItemFulfillmentComponent,
    OrderLineItemFulfillmentProfile
} from '../declarations/types-46.js';
export type {
    TextModifierRequest,
    TicketedEvent,
    Tip,
    TipPaymentIntentAllocation,
    TipValueSettlementAllocation
} from '../declarations/types-75.js';
export type {
    OrderLineItemTax,
    OrderPaymentAttempt,
    OrderPaymentAttemptPaymentMethodSave,
    OrderSettlementAmounts,
    OrderLineItemRefundable,
    OrderLineSubscriptionOfferSummary,
    OrderLineSubscriptionOfferDiscount,
    OrderReturnCreditSettlement,
    OrderTax,
    OrderTaxAttention,
    OrderTaxCallbackEvaluation,
    OrderTaxExemption
} from '../declarations/types-47.js';
export type {
    ChangeSubscriptionPlanRequestInput,
    CheckoutBuyerContact,
    CheckoutBillingContact,
    ChangeSubscriptionQuantityRequestInput
} from '../declarations/types-6.js';
export type {
    Order,
    OrderAuthorizationAmounts,
    OrderCharge,
    OrderCalculatedChargeTax,
    OrderDeliverySummary,
    OrderDeliveryDestination,
    OrderDeliveryDestinationRecipient,
    OrderDiscount,
    OrderCalculatedLineItemTax
} from '../declarations/types-45.js';
export type {
    PendingPaymentAction,
    PendingPaymentActionSubject,
    PendingPaymentActionPaymentIntentSubject,
    PendingPaymentActionSetupPaymentSourceSubject,
    PickupFulfillmentDetails
} from '../declarations/types-55.js';
export type { BuyerPauseActionOptions, BuyerPayBalanceActionOptions, BuyerRetryPaymentActionOptions } from '../declarations/types-3.js';
export type {
    CustomFieldAnswer,
    CustomFieldAnswerText,
    CustomFieldAnswerTextarea,
    CustomFieldAnswerDropdown,
    CustomFieldAnswerCheckbox
} from '../declarations/types-16.js';
export type { DeferredPromotion, DeliveryChargeTaxCalculationRequest } from '../declarations/types-18.js';
export type { DigitalFulfillmentDetails, Dimensions } from '../declarations/types-25.js';
export type { DeliveryFulfillmentDetails } from '../declarations/types-19.js';
export type { PricingAmounts } from '../declarations/types-56.js';
export type { FulfillmentOutcome, FulfillmentRecipient, GiftCardCustomAmountBounds } from '../declarations/types-28.js';
export type { InventoryRoutingSource } from '../declarations/types-33.js';
export type { GiftCardPurchaseSnapshot, GiftCardProductConfiguration, GiftCardPurchaseRecipient } from '../declarations/types-30.js';
export type { LineItemInventorySnapshot, LineItemInventoryDemand } from '../declarations/types-40.js';
export type { TaxCalculationRequest, TaxComponentRequest, TaxJurisdiction, TaxReverseCharge } from '../declarations/types-74.js';
export type {
    PaymentSourceSummary,
    PaymentSourceAchDebitSummary,
    PaymentSourceCardSummary,
    PaymentSourceCardPresentDetails
} from '../declarations/types-54.js';
export type {
    CustomerTaxExemptionCoverage,
    CustomerTaxExemptionCoverageAllStates,
    CustomerTaxExemptionCoverageStates,
    CustomerTaxID,
    CustomersListAddressesParams
} from '../declarations/types-17.js';
export type { OrderTaxLocation } from '../declarations/types-48.js';
export type {
    CreateSubscriptionRequestInput,
    CreateSubscriptionAccessLinkRequestInput,
    CreateSubscriptionLineItemRequestInput,
    CreateSubscriptionLineItemRequestVariantInput,
    CreateSubscriptionLineItemRequestBundleInput
} from '../declarations/types-14.js';
export type { DeliverySelectionRecipientRequestInput, DeliverySelectionRecipientRequest } from '../declarations/types-24.js';
export type { BuyerSubscriptionPaymentRetry } from '../declarations/types-4.js';
export type { PauseSubscriptionRequestInput, PauseSubscriptionRequest } from '../declarations/types-50.js';
export type {
    RemoveSubscriptionPromotionsRequestInput,
    RenewSubscriptionRequestInput,
    RemoveSubscriptionPromotionsRequest
} from '../declarations/types-61.js';
export type {
    UpdateSubscriptionRequestInput,
    UpdateSubscriptionLineItemRequestInput,
    UpdateSubscriptionLineItemRequest
} from '../declarations/types-78.js';
export type { InvoicesMarkUncollectibleParams } from '../declarations/types-38.js';
export type { ConfigurationVersionRequestInput, ConfirmReturnResolutionRequestInput } from '../declarations/types-8.js';
export { makeAddressRequest, makeApplySubscriptionPromotionRequest } from '../declarations/types-80.js';
export {
    makeCancelSubscriptionRequest,
    makeChangeSubscriptionPlanRequest,
    makeChangeSubscriptionQuantityRequest,
    makeConfigurationVersionRequest,
    makeConfirmReturnResolutionRequest
} from '../declarations/types-81.js';
export {
    makeCreateSubscriptionAccessLinkRequest,
    makeCreateSubscriptionLineItemRequest,
    makeCreateSubscriptionLineItemRequestBundle,
    makeCreateSubscriptionLineItemRequestVariant,
    makeCreateSubscriptionRequest
} from '../declarations/types-84.js';
export { makeDeliverySelectionRecipientRequest } from '../declarations/types-86.js';
export { makeMetadataPatchRequest, makeMetadataRequest, makeMoneyValue } from '../declarations/types-88.js';
export { makePauseSubscriptionRequest } from '../declarations/types-89.js';
export { makePromotionRefInputPromotionCode, makePromotionRefInputPromotionID, makePromotionRefRequest } from '../declarations/types-90.js';
export {
    makeRemoveSubscriptionPromotionsRequest,
    makeRenewSubscriptionRequest,
    makeResourceVersionRequest
} from '../declarations/types-91.js';
export {
    makeSkipSubscriptionCycleRequest,
    makeSubscriptionBillingScheduleInputExternal,
    makeSubscriptionBillingScheduleInputFlint,
    makeSubscriptionBillingScheduleRequest,
    makeSubscriptionBillingScheduleUpdateInputExternal,
    makeSubscriptionBillingScheduleUpdateInputFlint,
    makeSubscriptionBillingScheduleUpdateRequest,
    makeSubscriptionBillingStartInputImmediate,
    makeSubscriptionBillingStartInputImported,
    makeSubscriptionBillingStartInputScheduled,
    makeSubscriptionBillingStartRequest,
    makeSubscriptionDeliveryDestinationInputAddress,
    makeSubscriptionDeliveryDestinationInputCustomerAddress,
    makeSubscriptionDeliveryDestinationRequest
} from '../declarations/types-92.js';
export {
    makeSubscriptionDeliveryRequest,
    makeSubscriptionEndAfterCyclesRequest,
    makeSubscriptionEndAfterDateRequest,
    makeSubscriptionEndAfterRequest,
    makeSubscriptionGiftRecipientRequest,
    makeSubscriptionOfferLineItemRequest,
    makeSubscriptionOfferTermsRequest,
    makeSubscriptionPlanChangeLineItemRequest,
    makeSubscriptionPlanTermsRequest,
    makeSubscriptionPromotionRequest,
    makeSubscriptionQuantityChangeLineItemRequest,
    makeSubscriptionServiceLocationInputAddress,
    makeSubscriptionServiceLocationInputCustomerAddress,
    makeSubscriptionServiceLocationRequest,
    makeSubscriptionTaxCalculationRequest,
    makeSubscriptionTaxRequest,
    makeSubscriptionTermsRequest,
    makeTextModifierRequest
} from '../declarations/types-93.js';
export { makeUpdateSubscriptionLineItemRequest, makeUpdateSubscriptionRequest } from '../declarations/types-94.js';
export interface SubscriptionsResource {
    /**
 * Attaches a promotion to a subscription for future charged cycles. Send exactly one of
 * promotion.promotion_id or promotion.promotion_code. first_cycle defaults to completed_cycles +
 * 1, or completed_cycles + 2 while past_due, and cannot exceed completed_cycles + 120. Use
 * replace_promotion_id to replace an active or scheduled promotion from first_cycle forward. The
 * unpaid past_due order keeps its price. Promotion terms are frozen when attached; reattachment
 * keeps consumed cycles. Offer promotions cannot be replaced. Requires
 * commerce.subscriptions.write.
 *
 * `POST /v1/subscriptions/{subscription_id}/promotions`
 * @param subscription_id Flint subscription ID. Must be a valid ID with prefix sub_. Malformed IDs
 * return 400 INVALID_REQUEST with detail INVALID_VALUE; well-formed IDs that do not exist return
 * 404 RESOURCE_NOT_FOUND.
 * @see https://developers.withflintpay.com/docs/api/subscriptions#applySubscriptionPromotion
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.subscriptions.applyPromotion("sub_01KEZF7C00BVRE8YDBXQB74BBM", {promotion:
 * {promotion_code: "RETENTION20"}}, { idempotencyKey: idempotencyKey })
 */
    applyPromotion(subscription_id: InputValue<string>, params: SubscriptionsApplyPromotionParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<Subscription, SubscriptionResponse>>;
    /**
 * Cancels a subscription and records who asked, why, and when in cancellation_details. With
 * cancel_immediately: true it ends now. Otherwise, trialing ends at trial_end_at, active at
 * current_period_end_at (or now when a renewal delivery hold has expired), and past_due at
 * next_retry_at instead of that retry. Scheduled, incomplete, paused, and past_due without
 * next_retry_at require cancel_immediately: true or fail with `ACTION_NOT_ALLOWED` and reason
 * `period_end_unavailable`. Paid deliveries extend a scheduled cancellation to the last paid
 * delivery when it is later. A merchant can cancel immediately without an automatic refund. A
 * buyer cannot cancel immediately while prepaid deliveries remain and period-end cancellation is
 * available; the refusal reason is `prepaid_deliveries_remaining`. Read scheduled_cancel_at for
 * the scheduled end time. A buyer's cancellation follows the store's
 * customer_account.buyer_capabilities. Send expected_version to reject a concurrent change.
 *
 * `POST /v1/subscriptions/{subscription_id}/cancel`
 * @param subscription_id Flint subscription ID. Must be a valid ID with prefix sub_. Malformed IDs
 * return 400 INVALID_REQUEST with detail INVALID_VALUE; well-formed IDs that do not exist return
 * 404 RESOURCE_NOT_FOUND.
 * @see https://developers.withflintpay.com/docs/api/subscriptions#cancelSubscription
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.subscriptions.cancel("sub_01KEZF7C00BVRE8YDBXQB74BBM", undefined, { idempotencyKey:
 * idempotencyKey })
 */
    cancel(subscription_id: InputValue<string>, params?: SubscriptionsCancelParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<Subscription, SubscriptionResponse>>;
    /**
 * Replaces the subscription's lines and recurring options with the active target plan's current
 * terms. Paired lines keep their quantities unless line_items overrides them. Pair by the same
 * line on the same plan. When switching between plans with adjustable lines, pair those lines and
 * use the target quantities for fixed lines. Send a quantity for the target adjustable line if the
 * carried quantity is outside its bounds. Other changes pair by variant or bundle, then the only
 * line on each side. Unpaired target lines use their plan quantity. If an adjusted current line
 * cannot be paired, send quantities for every target line; otherwise the request fails with
 * quantity_not_carried before any change. With billing_starts next_renewal, changes terms now
 * without charging and keeps the current period and next billing date. With billing_starts
 * prorated_now, charges the new terms for the rest of the current period, less unused paid item
 * credit, while keeping the billing period and anchor; the resulting interval must stay unchanged.
 * With billing_starts now, charges a new period and credits unused paid item time after
 * promotions; the plan changes only when payment succeeds. If the credit exceeds the new item
 * charge, choose next_renewal. Omit the interval pair to keep the current interval when the target
 * plan offers it, otherwise use the target default. Contract terms and existing recurring
 * promotions are preserved. Requires Idempotency-Key; retry with the same key to recover the same
 * result. Returns status 200 for a decline, with a closed unpaid order, failed
 * order_payment_attempt, and unchanged subscription. Inspect
 * order_payment_attempt.last_payment_error and update the subscription payment method before
 * trying again. Send expected_version to reject a concurrent change. A competing paid change
 * returns 409. The same key replays that conflict. Read the subscription and use a new key if you
 * still want to make the change.
 *
 * `POST /v1/subscriptions/{subscription_id}/change-plan`
 * @param subscription_id Subscription ID. Must be a valid ID with prefix sub_. Malformed IDs
 * return 400 INVALID_REQUEST with detail INVALID_VALUE; well-formed IDs that do not exist return
 * 404 RESOURCE_NOT_FOUND.
 * @see https://developers.withflintpay.com/docs/api/subscriptions#changeSubscriptionPlan
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.subscriptions.changePlan("sub_01ARZ3NDEKTSV4RRFFQ69G5FAV", {billing_starts: "now",
 * subscription_plan_id: "plan_00000000000000000000000000"}, { idempotencyKey: idempotencyKey })
 */
    changePlan(subscription_id: InputValue<string>, params: SubscriptionsChangePlanParams, options: _SdkRequiredIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<SubscriptionPlanChangeResult, SubscriptionPlanChangeResultResponse>>;
    /**
 * Changes existing subscription line quantities with the chosen billing timing. billing_starts is
 * required: prorated_now charges now, next_renewal changes quantities immediately without
 * charging, and period_end schedules them for the next billing boundary in scheduled_plan_change.
 * Cancel pending quantities with PATCH scheduled_plan_change: null. A pending change locks
 * quantity edits with plan_change_scheduled. Keeps the current billing period, next billing date,
 * anchor and completed cycles. Omitted quantities stay unchanged. Send 1 to 50 distinct
 * line_items, each with an existing subscription_line_item_id and its new quantity. With
 * prorated_now, a shipping line cannot be changed. Physical quantities can use next_renewal or
 * period_end. Digital line quantities can be changed on a subscription with other lines that ship;
 * its shipping lines stay unchanged and this charge creates no shipment or shipping charge. Use
 * next_renewal to change quantities without charging now. Requires Idempotency-Key; retry with the
 * same key to recover the original outcome. Returns 200 on decline with a closed unpaid order,
 * failed order_payment_attempt, and unchanged subscription. Inspect
 * order_payment_attempt.last_payment_error before trying again. The order and
 * order_payment_attempt are null when the net charge is zero. Send expected_version to reject a
 * concurrent change. A competing prorated_now request returns 409. The same key replays that
 * conflict. Read the subscription and use a new key if you still want to change the quantity. If
 * the outcome remains uncertain, retrieve the subscription and its orders; contact Flint support
 * with the original key and request ID when those reads cannot establish the result.
 *
 * `POST /v1/subscriptions/{subscription_id}/change-quantity`
 * @param subscription_id Subscription ID. Must be a valid ID with prefix sub_. Malformed IDs
 * return 400 INVALID_REQUEST with detail INVALID_VALUE; well-formed IDs that do not exist return
 * 404 RESOURCE_NOT_FOUND.
 * @see https://developers.withflintpay.com/docs/api/subscriptions#changeSubscriptionQuantity
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.subscriptions.changeQuantity("sub_01KEZF7C00BVRE8YDBXQB74BBM", {billing_starts:
 * "prorated_now", expected_version: 1, line_items: [{quantity: 2, subscription_line_item_id:
 * "sli_01KEZF7C00VQ081BX7W2T96R71"}]}, { idempotencyKey: idempotencyKey })
 */
    changeQuantity(subscription_id: InputValue<string>, params: SubscriptionsChangeQuantityParams, options: _SdkRequiredIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<SubscriptionQuantityChangeResult, SubscriptionQuantityChangeResultResponse>>;
    /**
 * Creates a subscription for a customer outside checkout. For `billing_start.type: imported`, an
 * `external_reference_id` already used by a subscription that has not ended in this merchant
 * environment returns `409 ALREADY_EXISTS`, even with a new idempotency key.
 * `details[0].current_resource` identifies the existing subscription; retrieve it and continue
 * with its ID. A scheduled cancellation still blocks reimport until the subscription ends. Send
 * `customer_id`, the `terms` (a subscription plan or subscription offers), and `billing_start`,
 * which says whether billing begins now, on a later date, or continues a period the buyer already
 * paid elsewhere. Renewals charge `payment_method_id`, or the customer's default payment method
 * when you omit it. Free trials without an upfront charge and `imported` starts can begin without
 * a card when the customer has no default payment method; other starts fail with `INVALID_REQUEST`
 * naming `payment_method_id`. A setup fee or other creation-time charge requires a card; scheduled
 * starts also require one. Bind a card before `payment_method_due_at`: a trial without one cancels
 * at that boundary without an attempted charge, while an imported subscription follows its normal
 * dunning schedule. Flint requests the card three days before the boundary, or when a shorter
 * trial begins. A default payment method that can't be used fails the request on every start. The
 * payment method must belong to the customer, be active, and allow charges without the buyer
 * present. A plan that is not active fails with `ACTION_NOT_ALLOWED`. Subscriptions require a
 * customer with an email address in both customer account modes; otherwise creation returns 409
 * CUSTOMER_EMAIL_REQUIRED. Optional promotions (up to five) freeze current terms and qualify
 * against the projected order for first_cycle. Imports alone accept consumed_cycles to carry over
 * the buyer's used allowance. Attaching counts one promotion use and, when sent by code, one code
 * use.
 *
 * `POST /v1/subscriptions`
 * @see https://developers.withflintpay.com/docs/api/subscriptions#createSubscription
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.subscriptions.create({billing_anchor_day: 15, billing_schedule: {owner: "flint"},
 * billing_start: {type: "immediate"}, customer_id: "cus_01KEZF7C003ACYXT6Q5EQZ78EE", metadata:
 * {source: "api"}, payment_method_id: "pm_01KEZF7C00WX8CKEVFDMRMYMBM", terms:
 * {subscription_plan_id: "plan_01KEZF7C00S177Q3KK6BKXGXV7", type: "subscription_plan"}}, {
 * idempotencyKey: idempotencyKey })
 */
    create(params: SubscriptionsCreateParams, options: _SdkRequiredIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<Subscription, SubscriptionResponse>>;
    /**
 * Creates a link to one subscription in your Flint-hosted customer account, to put in buyer email
 * or messages you send yourself. Omit purpose or send subscription_view for read-only access
 * without a sign-in. Send subscription_manage to also let the buyer cancel, pause, or undo a
 * scheduled cancellation, subject to your store's policy and the subscription's state.
 * subscription_manage requires commerce.subscriptions.write; subscription_view requires
 * commerce.subscriptions.read. Neither purpose permits other subscription changes or access to
 * another subscription. Both work for 14 days or 5 opens, whichever comes first; after that the
 * buyer signs in. The url is a bearer credential. Flint returns it only in this response and in a
 * retry with the same idempotency key, so send it only to the buyer and keep it out of logs. A
 * call with a new key creates another link; earlier links keep working until they expire.
 * Dashboard sessions may create view links when the staff member can view subscriptions;
 * subscription_manage requires permission to manage subscriptions. When customer_account.mode is
 * merchant_hosted it fails with `ACTION_NOT_ALLOWED` and reason
 * `merchant_hosted_customer_accounts`. Send no request body, an empty object ({}), or an optional
 * purpose and return_url. Idempotency is scoped to the merchant, credential, environment, and this
 * resource's route. A replay returns the original link without extending its lifetime or
 * replenishing its opens. Without an idempotency key, each call creates a new link and has no
 * replay result. If Flint cannot retain a result after minting, contact support with the request
 * ID before sending a new request.
 *
 * `POST /v1/subscriptions/{subscription_id}/access-links`
 * @param subscription_id Flint subscription ID. Must be a valid ID with prefix sub_. Malformed IDs
 * return 400 INVALID_REQUEST with detail INVALID_VALUE; well-formed IDs that do not exist return
 * 404 RESOURCE_NOT_FOUND.
 * @see https://developers.withflintpay.com/docs/api/subscriptions#createSubscriptionAccessLink
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.subscriptions.createAccessLink("sub_01KEZF7C00BVRE8YDBXQB74BBM", undefined, {
 * idempotencyKey: idempotencyKey })
 */
    createAccessLink(subscription_id: InputValue<string>, params?: SubscriptionsCreateAccessLinkParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<AccessLink, AccessLinkResponse>>;
    /**
 * Adds a catalog variant or bundle to future subscription renewals. Current prices and delivery
 * eligibility are checked before the line is saved. Already-created orders keep their lines.
 *
 * `POST /v1/subscriptions/{subscription_id}/line-items`
 * @param subscription_id Subscription ID. Must be a valid ID with prefix sub_. Malformed IDs
 * return 400 INVALID_REQUEST with detail INVALID_VALUE; well-formed IDs that do not exist return
 * 404 RESOURCE_NOT_FOUND.
 * @see https://developers.withflintpay.com/docs/api/subscriptions#createSubscriptionLineItem
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.subscriptions.createLineItem("sub_01ARZ3NDEKTSV4RRFFQ69G5FAV", {quantity: 1, type:
 * "variant", variant_id: "var_00000000000000000000000000"}, { idempotencyKey: idempotencyKey })
 */
    createLineItem(subscription_id: InputValue<string>, params: SubscriptionsCreateLineItemParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<Subscription, SubscriptionResponse>>;
    /**
 * Starts one manual collection attempt on a past-due subscription. Send no body, or an empty
 * object. Poll the returned retry for the outcome.
 *
 * `POST /v1/subscriptions/{subscription_id}/payment-retries`
 * @param subscription_id Flint subscription ID. Must be a valid ID with prefix sub_. Malformed IDs
 * return 400 INVALID_REQUEST with detail INVALID_VALUE; well-formed IDs that do not exist return
 * 404 RESOURCE_NOT_FOUND.
 * @see https://developers.withflintpay.com/docs/api/subscriptions#createSubscriptionPaymentRetry
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.subscriptions.createPaymentRetry("sub_01KEZF7C00BVRE8YDBXQB74BBM", undefined, {
 * idempotencyKey: idempotencyKey })
 */
    createPaymentRetry(subscription_id: InputValue<string>, params: SubscriptionsCreatePaymentRetryParams | undefined, options: _SdkRequiredIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<SubscriptionPaymentRetry, SubscriptionPaymentRetryResponse>>;
    /**
 * Removes a line from future subscription renewals. The final line cannot be removed. Send
 * expected_version as a query parameter to reject a concurrent change.
 *
 * `DELETE /v1/subscriptions/{subscription_id}/line-items/{subscription_line_item_id}`
 * @param subscription_id Subscription ID. Must be a valid ID with prefix sub_. Malformed IDs
 * return 400 INVALID_REQUEST with detail INVALID_VALUE; well-formed IDs that do not exist return
 * 404 RESOURCE_NOT_FOUND.
 * @param subscription_line_item_id Subscription line item ID. Must be a valid ID with prefix sli_.
 * Malformed IDs return 400 INVALID_REQUEST with detail INVALID_VALUE; well-formed IDs that do not
 * exist return 404 RESOURCE_NOT_FOUND.
 * @see https://developers.withflintpay.com/docs/api/subscriptions#deleteSubscriptionLineItem
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.subscriptions.deleteLineItem("sub_01KEZF7C00BVRE8YDBXQB74BBM",
 * "sli_01KEZF7C00PPWVJ2N321V84ASA", {}, { idempotencyKey: idempotencyKey })
 */
    deleteLineItem(subscription_id: InputValue<string>, subscription_line_item_id: InputValue<string>, params?: SubscriptionsDeleteLineItemParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<Subscription, SubscriptionResponse>>;
    /**
 * Returns a single subscription by ID. A paid checkout session's credential can retrieve only the
 * subscription created by its source order. Checkout credentials cannot expand related resources.
 *
 * `GET /v1/subscriptions/{subscription_id}`
 * @param subscription_id Flint subscription ID. Must be a valid ID with prefix sub_. Malformed IDs
 * return 400 INVALID_REQUEST with detail INVALID_VALUE; well-formed IDs that do not exist return
 * 404 RESOURCE_NOT_FOUND.
 * @see https://developers.withflintpay.com/docs/api/subscriptions#getSubscription
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.subscriptions.get("sub_01KEZF7C00BVRE8YDBXQB74BBM")
 */
    get(subscription_id: InputValue<string>, params?: SubscriptionsGetParams, options?: _SdkWithoutIdempotency<RequestOptions<"checkout" | "merchant">>): Promise<WithResponseInfo<Subscription, SubscriptionResponse>>;
    /**
 * Returns one durable manual subscription payment retry.
 *
 * `GET /v1/subscriptions/{subscription_id}/payment-retries/{subscription_payment_retry_id}`
 * @param subscription_id Flint subscription ID. Must be a valid ID with prefix sub_. Malformed IDs
 * return 400 INVALID_REQUEST with detail INVALID_VALUE; well-formed IDs that do not exist return
 * 404 RESOURCE_NOT_FOUND.
 * @param subscription_payment_retry_id Flint subscription payment retry ID. Must be a valid ID
 * with prefix spr_. Malformed IDs return 400 INVALID_REQUEST with detail INVALID_VALUE;
 * well-formed IDs that do not exist return 404 RESOURCE_NOT_FOUND.
 * @see https://developers.withflintpay.com/docs/api/subscriptions#getSubscriptionPaymentRetry
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.subscriptions.getPaymentRetry("sub_01KEZF7C00BVRE8YDBXQB74BBM",
 * "spr_01KEZF7C00YXMSBXGYEMYDD0AA")
 */
    getPaymentRetry(subscription_id: InputValue<string>, subscription_payment_retry_id: InputValue<string>, params?: SubscriptionsGetPaymentRetryParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<SubscriptionPaymentRetry, SubscriptionPaymentRetryResponse>>;
    /**
 * Returns the subscription's line items sorted by ID in ascending order. Default order:
 * subscription_line_item_id ascending.
 *
 * `GET /v1/subscriptions/{subscription_id}/line-items`
 * @param subscription_id Flint subscription ID. Must be a valid ID with prefix sub_. Malformed IDs
 * return 400 INVALID_REQUEST with detail INVALID_VALUE; well-formed IDs that do not exist return
 * 404 RESOURCE_NOT_FOUND.
 * @see https://developers.withflintpay.com/docs/api/subscriptions#listSubscriptionLineItems
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.subscriptions.listLineItems("sub_01KEZF7C00BVRE8YDBXQB74BBM")
 */
    listLineItems(subscription_id: InputValue<string>, params?: SubscriptionsListLineItemsParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<SubscriptionLineItemsListResponse, SubscriptionLineItemsListResponse>>;
    /** Iterate pages lazily.
     * @see https://developers.withflintpay.com/docs/api/subscriptions#listSubscriptionLineItems
     */
    listLineItemsPages(subscription_id: InputValue<string>, params?: SubscriptionsListLineItemsParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<WithResponseInfo<SubscriptionLineItemsListResponse, SubscriptionLineItemsListResponse>>;
    /** Iterate items lazily.
     * @see https://developers.withflintpay.com/docs/api/subscriptions#listSubscriptionLineItems
     */
    listLineItemsItems(subscription_id: InputValue<string>, params?: SubscriptionsListLineItemsParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<SubscriptionLineItem>;
    /**
 * Returns a subscription's manual payment retries, newest first. Default order: created_at
 * descending, then subscription_payment_retry_id descending.
 *
 * `GET /v1/subscriptions/{subscription_id}/payment-retries`
 * @param subscription_id Flint subscription ID. Must be a valid ID with prefix sub_. Malformed IDs
 * return 400 INVALID_REQUEST with detail INVALID_VALUE; well-formed IDs that do not exist return
 * 404 RESOURCE_NOT_FOUND.
 * @see https://developers.withflintpay.com/docs/api/subscriptions#listSubscriptionPaymentRetries
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.subscriptions.listPaymentRetries("sub_01KEZF7C00BVRE8YDBXQB74BBM")
 */
    listPaymentRetries(subscription_id: InputValue<string>, params?: SubscriptionsListPaymentRetriesParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<SubscriptionPaymentRetryListResponse, SubscriptionPaymentRetryListResponse>>;
    /** Iterate pages lazily.
     * @see
     * https://developers.withflintpay.com/docs/api/subscriptions#listSubscriptionPaymentRetries
     */
    listPaymentRetriesPages(subscription_id: InputValue<string>, params?: SubscriptionsListPaymentRetriesParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<WithResponseInfo<SubscriptionPaymentRetryListResponse, SubscriptionPaymentRetryListResponse>>;
    /** Iterate items lazily.
     * @see
     * https://developers.withflintpay.com/docs/api/subscriptions#listSubscriptionPaymentRetries
     */
    listPaymentRetriesItems(subscription_id: InputValue<string>, params?: SubscriptionsListPaymentRetriesParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<SubscriptionPaymentRetry>;
    /**
 * Returns a paginated list of subscriptions for the authenticated merchant. Subscriptions without
 * a next_billing_at never match next_billing_after or next_billing_before, and sort last with
 * sort_by=next_billing_at in either direction. Default order: created_at descending, then
 * subscription_id descending.
 *
 * `GET /v1/subscriptions`
 * @see https://developers.withflintpay.com/docs/api/subscriptions#listSubscriptions
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.subscriptions.list()
 */
    list(params?: SubscriptionsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<SubscriptionListResponse, SubscriptionListResponse>>;
    /** Iterate pages lazily.
     * @see https://developers.withflintpay.com/docs/api/subscriptions#listSubscriptions
     */
    listPages(params?: SubscriptionsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<WithResponseInfo<SubscriptionListResponse, SubscriptionListResponse>>;
    /** Iterate items lazily.
     * @see https://developers.withflintpay.com/docs/api/subscriptions#listSubscriptions
     */
    listItems(params?: SubscriptionsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<Subscription>;
    /**
 * Pauses a subscription immediately. pause_duration_cycles counts delivery intervals on prepaid
 * subscriptions and billing intervals otherwise; omit it for an indefinite pause. A pause with a
 * duration resumes automatically at scheduled_resume_at. Repeating the stored pause length returns
 * the paused subscription; a different length returns ACTION_NOT_ALLOWED with reason field_locked
 * and param pause_duration_cycles and requires resuming first. A buyer's pause follows the store's
 * customer_account.buyer_capabilities. Send expected_version to reject a concurrent change.
 *
 * `POST /v1/subscriptions/{subscription_id}/pause`
 * @param subscription_id Flint subscription ID. Must be a valid ID with prefix sub_. Malformed IDs
 * return 400 INVALID_REQUEST with detail INVALID_VALUE; well-formed IDs that do not exist return
 * 404 RESOURCE_NOT_FOUND.
 * @see https://developers.withflintpay.com/docs/api/subscriptions#pauseSubscription
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.subscriptions.pause("sub_01KEZF7C00BVRE8YDBXQB74BBM", undefined, { idempotencyKey:
 * idempotencyKey })
 */
    pause(subscription_id: InputValue<string>, params?: SubscriptionsPauseParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<Subscription, SubscriptionResponse>>;
    /**
 * Removes 1 to 5 unique active or scheduled promotions from a subscription. Future renewal orders
 * omit them; paid orders and the unpaid past_due order keep their discounts. Removal keeps
 * consumed cycles for reattachment and does not return a promotion use. Offer promotions cannot be
 * removed. Requires commerce.subscriptions.write.
 *
 * `POST /v1/subscriptions/{subscription_id}/promotions/remove`
 * @param subscription_id Flint subscription ID. Must be a valid ID with prefix sub_. Malformed IDs
 * return 400 INVALID_REQUEST with detail INVALID_VALUE; well-formed IDs that do not exist return
 * 404 RESOURCE_NOT_FOUND.
 * @see https://developers.withflintpay.com/docs/api/subscriptions#removeSubscriptionPromotions
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.subscriptions.removePromotions("sub_01KEZF7C00BVRE8YDBXQB74BBM", {promotion_ids:
 * ["promo_01ARZ3NDEKTSV4RRFFQ69G5FAV"]}, { idempotencyKey: idempotencyKey })
 */
    removePromotions(subscription_id: InputValue<string>, params: SubscriptionsRemovePromotionsParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<Subscription, SubscriptionResponse>>;
    /**
 * Starts a new billing period now and schedules the next charge one billing interval later. Ships
 * the renewal when the subscription has delivery. For subscriptions without delivery, Flint
 * credits unused paid item time against the charge. Available while the subscription is active on
 * a Flint-owned billing schedule (billing_schedule_owner is flint), is not set to cancel at the
 * end of its period, is not in a trial, and has no delivery hold or renewal in progress. The
 * subscription's payment method must be active and allow off-session charges. Requires an
 * idempotency key; retry with the same key to recover the same attempt. Returns the subscription,
 * renewal order, and payment attempt, including when the payment is declined. Inspect
 * order_payment_attempt.last_payment_error for a failed payment.
 *
 * `POST /v1/subscriptions/{subscription_id}/renew`
 * @param subscription_id Subscription ID. Must be a valid ID with prefix sub_. Malformed IDs
 * return 400 INVALID_REQUEST with detail INVALID_VALUE; well-formed IDs that do not exist return
 * 404 RESOURCE_NOT_FOUND.
 * @see https://developers.withflintpay.com/docs/api/subscriptions#renewSubscription
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.subscriptions.renew("sub_01KEZF7C00BVRE8YDBXQB74BBM", undefined, { idempotencyKey:
 * idempotencyKey })
 */
    renew(subscription_id: InputValue<string>, params: SubscriptionsRenewParams | undefined, options: _SdkRequiredIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<SubscriptionRenewalResult, SubscriptionRenewalResultResponse>>;
    /**
 * Asks Flint to resume a paused subscription. The request is accepted while the subscription is
 * still paused, with `resume_requested_at` set. Flint then makes it active, or past_due while an
 * overdue period is collected, and sends subscription.resumed. While prepaid deliveries remain,
 * resuming makes no charge and shifts later deliveries and the next charge by the length of the
 * pause. If Flint can't resume it, it stays paused, resume_requested_at clears, and Flint sends
 * subscription.updated. Any other status fails with `ACTION_NOT_ALLOWED`. To undo a scheduled
 * cancellation, PATCH the subscription with cancel_at_period_end set to false.
 *
 * `POST /v1/subscriptions/{subscription_id}/resume`
 * @param subscription_id Flint subscription ID. Must be a valid ID with prefix sub_. Malformed IDs
 * return 400 INVALID_REQUEST with detail INVALID_VALUE; well-formed IDs that do not exist return
 * 404 RESOURCE_NOT_FOUND.
 * @see https://developers.withflintpay.com/docs/api/subscriptions#resumeSubscription
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.subscriptions.resume("sub_01KEZF7C00BVRE8YDBXQB74BBM", undefined, { idempotencyKey:
 * idempotencyKey })
 */
    resume(subscription_id: InputValue<string>, params?: SubscriptionsResumeParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<Subscription, SubscriptionResponse>>;
    /**
 * While prepaid deliveries remain, defers the next delivery and next charge by one delivery
 * interval without consuming a delivery. Otherwise skips the next renewal without charging or
 * shipping and moves the next billing date forward by one billing interval. A Flint-owned schedule
 * keeps its billing_anchor_day, including when the skipped date falls in a shorter month.
 * Available while the subscription is active, is not set to cancel at the end of its period, and
 * has a next billing date.
 *
 * `POST /v1/subscriptions/{subscription_id}/skip-cycle`
 * @param subscription_id Flint subscription ID. Must be a valid ID with prefix sub_. Malformed IDs
 * return 400 INVALID_REQUEST with detail INVALID_VALUE; well-formed IDs that do not exist return
 * 404 RESOURCE_NOT_FOUND.
 * @see https://developers.withflintpay.com/docs/api/subscriptions#skipSubscriptionCycle
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.subscriptions.skipCycle("sub_01KEZF7C00BVRE8YDBXQB74BBM", undefined, { idempotencyKey:
 * idempotencyKey })
 */
    skipCycle(subscription_id: InputValue<string>, params?: SubscriptionsSkipCycleParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<Subscription, SubscriptionResponse>>;
    /**
 * Updates metadata, external_reference_id, payment_method_id, delivery, billing interval,
 * cancel_at_period_end: false to undo a scheduled cancellation, or scheduled_plan_change: null to
 * keep the current plan. If a retained card is unusable, undoing cancellation requires a usable
 * replacement in payment_method_id; otherwise ACTION_NOT_ALLOWED has reason
 * payment_method_required. Send billing_interval and billing_interval_count together. A
 * billing_schedule update must be the only mutable field. Delivery and cadence changes apply to
 * future unpaid renewals. Send expected_version to reject concurrent changes. Schedule a
 * cancellation with `client.subscriptions.cancel`, change the plan with /change-plan, and manage
 * lines through the line-items collection. A card whose setup hasn't finished fails with
 * `ACTION_NOT_ALLOWED` and reason `status_not_reached`. Once setup finishes, send a new request
 * with a new idempotency key.
 *
 * `PATCH /v1/subscriptions/{subscription_id}`
 * @param subscription_id Flint subscription ID. Must be a valid ID with prefix sub_. Malformed IDs
 * return 400 INVALID_REQUEST with detail INVALID_VALUE; well-formed IDs that do not exist return
 * 404 RESOURCE_NOT_FOUND.
 * @see https://developers.withflintpay.com/docs/api/subscriptions#updateSubscription
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.subscriptions.update("sub_01ARZ3NDEKTSV4RRFFQ69G5FAV", {metadata: {source:
 * "sdk-example"}}, { idempotencyKey: idempotencyKey })
 */
    update(subscription_id: InputValue<string>, params: SubscriptionsUpdateParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<Subscription, SubscriptionResponse>>;
    /**
 * Swaps a subscription line variant for future renewals while keeping its quantity. Use
 * change-quantity to change line quantities. Send expected_version to reject a concurrent change.
 * Already-created orders keep their lines.
 *
 * `PATCH /v1/subscriptions/{subscription_id}/line-items/{subscription_line_item_id}`
 * @param subscription_id Subscription ID. Must be a valid ID with prefix sub_. Malformed IDs
 * return 400 INVALID_REQUEST with detail INVALID_VALUE; well-formed IDs that do not exist return
 * 404 RESOURCE_NOT_FOUND.
 * @param subscription_line_item_id Subscription line item ID. Must be a valid ID with prefix sli_.
 * Malformed IDs return 400 INVALID_REQUEST with detail INVALID_VALUE; well-formed IDs that do not
 * exist return 404 RESOURCE_NOT_FOUND.
 * @see https://developers.withflintpay.com/docs/api/subscriptions#updateSubscriptionLineItem
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.subscriptions.updateLineItem("sub_01ARZ3NDEKTSV4RRFFQ69G5FAV",
 * "sli_01ARZ3NDEKTSV4RRFFQ69G5FAV", {expected_version: 1, variant_id:
 * "var_01ARZ3NDEKTSV4RRFFQ69G5FAV"}, { idempotencyKey: idempotencyKey })
 */
    updateLineItem(subscription_id: InputValue<string>, subscription_line_item_id: InputValue<string>, params: SubscriptionsUpdateLineItemParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<Subscription, SubscriptionResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly subscriptions: SubscriptionsResource;
}
