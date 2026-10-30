import type { WithResponseInfo, InputValue } from '../runtime.js';
import type { AccessLink, AccessLinkResponse } from '../declarations/types-0.js';
import type { ClientOptions } from '../declarations/types-5.js';
import type { RequestOptions } from '../declarations/types-47.js';
import type { Subscription } from '../declarations/types-53.js';
import type {
    SubscriptionListResponse,
    SubscriptionPaymentRetry,
    SubscriptionPaymentRetryListResponse,
    SubscriptionPaymentRetryResponse,
    SubscriptionPlanChangeResult,
    SubscriptionPlanChangeResultResponse
} from '../declarations/types-55.js';
import type {
    SubscriptionRenewalResult,
    SubscriptionRenewalResultResponse,
    SubscriptionResponse,
    SubscriptionsCancelParams,
    SubscriptionsChangePlanParams,
    SubscriptionsCreateAccessLinkParams,
    SubscriptionsCreateLineItemParams,
    SubscriptionsCreateParams,
    SubscriptionsCreatePaymentRetryParams,
    SubscriptionsDeleteLineItemParams,
    SubscriptionsGetParams,
    SubscriptionsGetPaymentRetryParams,
    SubscriptionsListParams,
    SubscriptionsListPaymentRetriesParams,
    SubscriptionsPauseParams,
    SubscriptionsRenewParams,
    SubscriptionsResumeParams,
    SubscriptionsSkipCycleParams,
    SubscriptionsUpdateLineItemParams,
    SubscriptionsUpdateParams
} from '../declarations/types-56.js';
import type { _SdkRequiredIdempotency, _SdkWithoutIdempotency } from '../declarations/types-61.js';
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
    SubscriptionsCancelParams,
    SubscriptionResponse,
    SubscriptionsChangePlanParams,
    SubscriptionsCreateParams,
    SubscriptionsCreateAccessLinkParams,
    SubscriptionsCreateLineItemParams,
    SubscriptionsCreatePaymentRetryParams,
    SubscriptionsDeleteLineItemParams,
    SubscriptionsGetParams,
    SubscriptionsGetPaymentRetryParams,
    SubscriptionsListPaymentRetriesParams,
    SubscriptionsListParams,
    SubscriptionsPauseParams,
    SubscriptionsRenewParams,
    SubscriptionRenewalResult,
    SubscriptionRenewalResultResponse,
    SubscriptionsResumeParams,
    SubscriptionsSkipCycleParams,
    SubscriptionsUpdateParams,
    SubscriptionsUpdateLineItemParams,
    SubscriptionPromotion,
    SubscriptionServiceLocation,
    SubscriptionUpcomingDeliveryHold,
    TaxBreakdown,
    SubscriptionServiceLocationRequestInput,
    SubscriptionServiceLocationInputCustomerAddressInput,
    SubscriptionServiceLocationInputAddressInput,
    SubscriptionTermsRequestInput
} from '../declarations/types-56.js';
export type { RequestOptions, RenewSubscriptionRequestInput } from '../declarations/types-47.js';
export type {
    Subscription,
    SubscriptionAddressVerification,
    SelectedProductOption,
    StripePaymentClientAction,
    StripeSetupIntentClientAction,
    SettlementAmounts,
    ServiceFulfillmentDetails,
    ShipmentFulfillmentDetails,
    SubscribedLine,
    SelectableOrderPaymentIntent,
    SubscriptionBillingScheduleRequestInput,
    SubscriptionBillingScheduleInputFlintInput,
    SubscriptionBillingScheduleInputExternalInput,
    SkipSubscriptionCycleRequestInput,
    SubscriptionBillingScheduleUpdateInputExternalInput
} from '../declarations/types-53.js';
export type { _SdkRequiredIdempotency, _SdkWithoutIdempotency, Weight } from '../declarations/types-61.js';
export type {
    SubscriptionPlanChangeResult,
    SubscriptionPlanChangeResultResponse,
    SubscriptionPaymentRetry,
    SubscriptionPaymentRetryResponse,
    SubscriptionPaymentRetryListResponse,
    SubscriptionListResponse,
    SubscriptionInventoryWait,
    SubscriptionLineItem,
    SubscriptionPlanLineItem,
    SubscriptionPlanSwapVariant,
    SubscriptionPlanLineItemVariant,
    SubscriptionPlanLineItemBundle,
    SubscriptionPlanLineItemCustom,
    SubscriptionPlanChangeLineItemRequestInput,
    SubscriptionPlanTermsRequestInput,
    SubscriptionOfferTermsRequestInput,
    SubscriptionOfferLineItemRequestInput,
    SubscriptionPlanChangeLineItemRequest,
    SubscriptionOfferLineItemRequest
} from '../declarations/types-55.js';
export type { AccessLink, AccessLinkResponse, AuthMode, Address, AddressRequestInput, AddressRequest } from '../declarations/types-0.js';
export type { ClientOptions, ConfigurationVersionRequestInput } from '../declarations/types-5.js';
export type {
    CancelSubscriptionRequestInput,
    CategoryReference,
    CardDetails,
    ChangeSubscriptionPlanRequestInput,
    CheckoutBuyerContact
} from '../declarations/types-4.js';
export type { Credentials, CreditNotesListAllocationsParams } from '../declarations/types-12.js';
export type {
    SubscriptionIntervalOption,
    SubscriptionCancellationDetails,
    SubscriptionDelivery,
    SubscriptionDeliveryMethodSummary,
    SubscriptionDeliveryDestination,
    SubscriptionDeliveryHold,
    SubscriptionBillingStartRequestInput,
    SubscriptionBillingStartInputImmediateInput,
    SubscriptionBillingStartInputScheduledInput,
    SubscriptionBillingStartInputImportedInput,
    SubscriptionDeliveryRequestInput,
    SubscriptionDeliveryDestinationRequestInput,
    SubscriptionDeliveryDestinationInputCustomerAddressInput,
    SubscriptionDeliveryDestinationInputAddressInput,
    SubscriptionBillingScheduleUpdateRequestInput,
    SubscriptionBillingScheduleUpdateInputFlintInput
} from '../declarations/types-54.js';
export type {
    BuyerAction,
    BuyerCancelActionOptions,
    BuyerCancelRetentionOffer,
    BundleComponent,
    BundleComponentVariantSummary
} from '../declarations/types-1.js';
export type { BuyerPauseActionOptions, BuyerPayBalanceActionOptions } from '../declarations/types-2.js';
export type {
    ExpandedCustomerSummary,
    ErrorRemediation,
    ExpandedPaymentMethodSummary,
    ExpandedSubscriptionPlanSummary,
    Fulfillment,
    FulfillmentChargeLink,
    ExpandedOrderSummary,
    ExpandedPackageSummary,
    ExpandedShipmentSummary,
    ExpandedPaymentIntentSummary,
    ExpandedSubscriptionSummary
} from '../declarations/types-21.js';
export type { DeliveryRecipientResource } from '../declarations/types-18.js';
export type { MoneyValue, NextAction } from '../declarations/types-35.js';
export type {
    PaymentErrorSummary,
    PaymentAttemptGiftCardRedemption,
    PaymentAttemptPaymentIntent,
    PaymentClientAction,
    PaymentCollection,
    PaymentCollectionStripe,
    PaymentCollectionStripeElements,
    PauseSubscriptionRequestInput,
    PauseSubscriptionRequest
} from '../declarations/types-40.js';
export type { ReadinessMerchantAccountSession, PurchasedGiftCard } from '../declarations/types-46.js';
export type { Image } from '../declarations/types-25.js';
export type {
    OrderLineItemModifier,
    OrderLineItemTax,
    OrderPaymentAttempt,
    OrderPaymentAttemptPaymentMethodSave,
    OrderLineSubscriptionOfferSummary,
    OrderLineSubscriptionOfferDiscount,
    OrderReturnCreditSettlement,
    OrderTax,
    OrderTaxExemption,
    OrderTaxLocation
} from '../declarations/types-37.js';
export type {
    MetadataMap,
    MetadataRequestInput,
    MetadataPatchRequestInput,
    MePauseSubscriptionParams,
    MeRenewSubscriptionParams,
    MetadataPatchRequest
} from '../declarations/types-34.js';
export type {
    TextModifierRequest,
    TaxCalculationRequest,
    TaxComponentRequest,
    TaxJurisdiction,
    TaxBreakdownPercentage,
    TaxBreakdownFlatAmount,
    TicketedEvent,
    Tip,
    TipPaymentIntentAllocation,
    TipValueSettlementAllocation
} from '../declarations/types-57.js';
export type {
    PromotionRecurrence,
    PromotionRecurrenceOnce,
    PromotionRecurrenceRepeating,
    PromotionRecurrenceForever
} from '../declarations/types-45.js';
export type { ResponseMeta, ResponseWarning, ResourceVersionRequestInput } from '../declarations/types-48.js';
export type {
    Order,
    OrderAuthorizationAmounts,
    OrderCharge,
    OrderCalculatedChargeTax,
    OrderDeliveryDestination,
    OrderDeliveryDestinationRecipient,
    OrderDiscount,
    OrderGiftCardEstimate,
    OrderGiftCardAllocation,
    OrderGiftCardSettlement,
    OrderGiftCardSelection,
    OrderLineItem,
    OrderLineItemFulfillmentQuantities,
    OrderLineItemFulfillmentRequirements,
    OrderLineItemFulfillmentComponent,
    OrderLineItemFulfillmentProfile,
    OrderCalculatedLineItemTax
} from '../declarations/types-36.js';
export type {
    PendingPaymentAction,
    PendingPaymentActionSubject,
    PendingPaymentActionPaymentIntentSubject,
    PendingPaymentActionSetupPaymentSourceSubject,
    PricingAmounts,
    PickupFulfillmentDetails,
    PaymentSourceSummary,
    PaymentSourceAchDebitSummary,
    PaymentSourceCardSummary
} from '../declarations/types-43.js';
export type { FulfillmentHold, FulfillmentLineItem, FulfillmentOutcome, FulfillmentRecipient } from '../declarations/types-22.js';
export type { DigitalFulfillmentDetails, Dimensions } from '../declarations/types-20.js';
export type { DeliveryFulfillmentDetails } from '../declarations/types-15.js';
export type { InventoryRoutingSource } from '../declarations/types-27.js';
export type { GiftCardPurchaseSnapshot, GiftCardProductConfiguration, GiftCardPurchaseRecipient } from '../declarations/types-24.js';
export type { GiftCardCustomAmountBounds } from '../declarations/types-23.js';
export type { LineItemInventorySnapshot, LineItemInventoryDemand, InvoicesMarkUncollectibleParams } from '../declarations/types-32.js';
export type {
    CreateSubscriptionRequestInput,
    CreateSubscriptionAccessLinkRequestInput,
    CreateSubscriptionLineItemRequestInput,
    CreateSubscriptionLineItemRequestVariantInput,
    CreateSubscriptionLineItemRequestBundleInput
} from '../declarations/types-11.js';
export type { DeliverySelectionRecipientRequestInput, DeliverySelectionRecipientRequest } from '../declarations/types-19.js';
export type {
    UpdateSubscriptionRequestInput,
    UpdateSubscriptionLineItemRequestInput,
    UpdateSubscriptionLineItemRequest
} from '../declarations/types-60.js';
export type { MeCancelSubscriptionParams } from '../declarations/types-33.js';
export type { ConfirmReturnResolutionRequestInput } from '../declarations/types-6.js';
export { makeAddressRequest } from '../declarations/types-61.js';
export {
    makeCancelSubscriptionRequest,
    makeChangeSubscriptionPlanRequest,
    makeConfigurationVersionRequest,
    makeConfirmReturnResolutionRequest
} from '../declarations/types-62.js';
export {
    makeCreateSubscriptionAccessLinkRequest,
    makeCreateSubscriptionLineItemRequest,
    makeCreateSubscriptionLineItemRequestBundle,
    makeCreateSubscriptionLineItemRequestVariant,
    makeCreateSubscriptionRequest
} from '../declarations/types-65.js';
export { makeDeliverySelectionRecipientRequest, makeDimensions } from '../declarations/types-67.js';
export {
    makeMetadataPatchRequest,
    makeMetadataRequest,
    makeMoneyValue,
    makeOrderCalculatedChargeTax,
    makeOrderCalculatedLineItemTax,
    makeOrderLineItemTax
} from '../declarations/types-69.js';
export { makePauseSubscriptionRequest } from '../declarations/types-70.js';
export {
    makePromotionRecurrence,
    makePromotionRecurrenceForever,
    makePromotionRecurrenceOnce,
    makePromotionRecurrenceRepeating,
    makeRenewSubscriptionRequest,
    makeResourceVersionRequest
} from '../declarations/types-71.js';
export {
    makeSkipSubscriptionCycleRequest,
    makeSubscriptionBillingScheduleInputExternal,
    makeSubscriptionBillingScheduleInputFlint
} from '../declarations/types-72.js';
export {
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
    makeSubscriptionDeliveryDestinationRequest,
    makeSubscriptionDeliveryRequest,
    makeSubscriptionIntervalOption,
    makeSubscriptionOfferLineItemRequest,
    makeSubscriptionOfferTermsRequest,
    makeSubscriptionPlanChangeLineItemRequest,
    makeSubscriptionPlanTermsRequest,
    makeSubscriptionServiceLocationInputAddress,
    makeSubscriptionServiceLocationInputCustomerAddress,
    makeSubscriptionServiceLocationRequest,
    makeSubscriptionTermsRequest,
    makeTaxCalculationRequest,
    makeTaxComponentRequest,
    makeTaxJurisdiction,
    makeTextModifierRequest
} from '../declarations/types-73.js';
export { makeUpdateSubscriptionLineItemRequest, makeUpdateSubscriptionRequest } from '../declarations/types-74.js';
export { makeWeight } from '../declarations/types-75.js';
export interface SubscriptionsResource {
    /**
 * Cancels a subscription and records who asked, why, and when in cancellation_details. With
 * cancel_immediately: true it ends now. Otherwise, trialing ends at trial_end_at, active at
 * current_period_end_at (or now when a renewal delivery hold has expired), and past_due at
 * next_retry_at instead of that retry. Scheduled, incomplete, paused, and past_due without
 * next_retry_at require cancel_immediately: true or return 409 ACTION_NOT_ALLOWED with reason
 * period_end_unavailable. Read scheduled_cancel_at for the scheduled end time. A buyer's
 * cancellation follows the store's customer_account.buyer_capabilities. Send expected_version to
 * reject a concurrent change.
 *
 * `POST /v1/subscriptions/{subscription_id}/cancel`
 * @param subscription_id Flint subscription ID.
 * @see https://developers.withflintpay.com/docs/api/subscriptions#cancelSubscription
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.subscriptions.cancel("sub_01ARZ3NDEKTSV4RRFFQ69G5FAV", {cancel_immediately: false,
 * cancellation_reason_code: "too_expensive"}, { idempotencyKey: idempotencyKey })
 */
    cancel(subscription_id: InputValue<string>, params: SubscriptionsCancelParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<Subscription, SubscriptionResponse>>;
    /**
 * Replaces the subscription's lines and recurring options with the active target plan's current
 * terms. Paired lines keep their quantities unless line_items overrides them. Pair by the same
 * plan line on the same plan, then variant or bundle, then the only line on each side. Unpaired
 * target lines use their plan quantity. If an adjusted current line cannot be paired, send
 * quantities for every target line; otherwise the request fails with quantity_not_carried before
 * any change. With billing_starts next_renewal, changes terms now without charging and keeps the
 * current period and next billing date. With billing_starts now, charges a new period and credits
 * unused paid item time after promotions; the plan changes only when payment succeeds. If the
 * credit exceeds the new item charge, choose next_renewal. Omit interval and quantity to keep
 * their current values; the target plan must offer them. Contract terms and existing recurring
 * promotions are preserved. Requires Idempotency-Key; retry with the same key to recover the same
 * result. Returns status 200 for a decline, with a closed unpaid order, failed
 * order_payment_attempt, and unchanged subscription. Inspect
 * order_payment_attempt.last_payment_error and update the subscription payment method before
 * trying again. Send expected_version to reject a concurrent change. After a confirmed
 * CONCURRENT_MODIFICATION with billing_starts now, refresh the subscription and send a new
 * Idempotency-Key. The buyer account cannot change plans.
 *
 * `POST /v1/subscriptions/{subscription_id}/change-plan`
 * @param subscription_id Subscription ID.
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
 * Creates a subscription for the authenticated merchant.
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
 * retry with the same Idempotency-Key, so send it only to the buyer and keep it out of logs. A
 * call with a new key creates another link; earlier links keep working until they expire. When
 * customer_account.mode is merchant_hosted it returns 409 ACTION_NOT_ALLOWED with reason
 * merchant_hosted_customer_accounts. Send no request body, an empty object ({}), or an optional
 * purpose. Idempotency is scoped to the merchant, credential, environment, and this resource's
 * route. A replay returns the original link without extending its lifetime or replenishing its
 * opens. Without an Idempotency-Key, each call creates a new link and has no replay result. If
 * Flint cannot retain a result after minting, contact support with X-Request-Id before sending a
 * new request.
 *
 * `POST /v1/subscriptions/{subscription_id}/access-links`
 * @param subscription_id Flint subscription ID.
 * @see https://developers.withflintpay.com/docs/api/subscriptions#createSubscriptionAccessLink
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.subscriptions.createAccessLink("sub_01ARZ3NDEKTSV4RRFFQ69G5FAV", undefined, {
 * idempotencyKey: idempotencyKey })
 */
    createAccessLink(subscription_id: InputValue<string>, params?: SubscriptionsCreateAccessLinkParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<AccessLink, AccessLinkResponse>>;
    /**
 * Adds a catalog variant or bundle to future subscription renewals. Current prices and delivery
 * eligibility are checked before the line is saved. Already-created orders keep their lines.
 *
 * `POST /v1/subscriptions/{subscription_id}/line-items`
 * @param subscription_id Subscription ID.
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
 * @param subscription_id Flint subscription ID.
 * @see https://developers.withflintpay.com/docs/api/subscriptions#createSubscriptionPaymentRetry
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.subscriptions.createPaymentRetry("sub_01ARZ3NDEKTSV4RRFFQ69G5FAV", undefined, {
 * idempotencyKey: idempotencyKey })
 */
    createPaymentRetry(subscription_id: InputValue<string>, params: SubscriptionsCreatePaymentRetryParams | undefined, options: _SdkRequiredIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<SubscriptionPaymentRetry, SubscriptionPaymentRetryResponse>>;
    /**
 * Removes a line from future subscription renewals. The final line cannot be removed. Send
 * expected_version as a query parameter to reject a concurrent change.
 *
 * `DELETE /v1/subscriptions/{subscription_id}/line-items/{subscription_line_item_id}`
 * @param subscription_id Subscription ID.
 * @param subscription_line_item_id Subscription line item ID.
 * @see https://developers.withflintpay.com/docs/api/subscriptions#deleteSubscriptionLineItem
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.subscriptions.deleteLineItem("sub_01ARZ3NDEKTSV4RRFFQ69G5FAV",
 * "sli_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, { idempotencyKey: idempotencyKey })
 */
    deleteLineItem(subscription_id: InputValue<string>, subscription_line_item_id: InputValue<string>, params?: SubscriptionsDeleteLineItemParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<Subscription, SubscriptionResponse>>;
    /**
 * Returns a single subscription by ID. A paid checkout session's credential can retrieve only the
 * subscription created by its source order. Checkout credentials cannot expand related resources.
 *
 * `GET /v1/subscriptions/{subscription_id}`
 * @param subscription_id Flint subscription ID.
 * @see https://developers.withflintpay.com/docs/api/subscriptions#getSubscription
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.subscriptions.get("sub_01ARZ3NDEKTSV4RRFFQ69G5FAV")
 */
    get(subscription_id: InputValue<string>, params?: SubscriptionsGetParams, options?: _SdkWithoutIdempotency<RequestOptions<"checkout" | "merchant">>): Promise<WithResponseInfo<Subscription, SubscriptionResponse>>;
    /**
 * Returns one durable manual subscription payment retry.
 *
 * `GET /v1/subscriptions/{subscription_id}/payment-retries/{subscription_payment_retry_id}`
 * @param subscription_id Flint subscription ID.
 * @param subscription_payment_retry_id Flint subscription payment retry ID.
 * @see https://developers.withflintpay.com/docs/api/subscriptions#getSubscriptionPaymentRetry
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.subscriptions.getPaymentRetry("sub_01ARZ3NDEKTSV4RRFFQ69G5FAV",
 * "spr_01ARZ3NDEKTSV4RRFFQ69G5FAV")
 */
    getPaymentRetry(subscription_id: InputValue<string>, subscription_payment_retry_id: InputValue<string>, params?: SubscriptionsGetPaymentRetryParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<SubscriptionPaymentRetry, SubscriptionPaymentRetryResponse>>;
    /**
 * Returns a subscription's manual payment retries, newest first. Default order: created_at
 * descending, then subscription_payment_retry_id descending.
 *
 * `GET /v1/subscriptions/{subscription_id}/payment-retries`
 * @param subscription_id Flint subscription ID.
 * @see https://developers.withflintpay.com/docs/api/subscriptions#listSubscriptionPaymentRetries
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.subscriptions.listPaymentRetries("sub_01ARZ3NDEKTSV4RRFFQ69G5FAV")
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
 * Pauses a subscription immediately, optionally for at least one billing cycle. A pause with a
 * duration resumes automatically at scheduled_resume_at. Repeating the stored pause length returns
 * the paused subscription; a different length returns ACTION_NOT_ALLOWED with reason field_locked
 * and param pause_duration_cycles and requires resuming first. A buyer's pause follows the store's
 * customer_account.buyer_capabilities. Send expected_version to reject a concurrent change.
 *
 * `POST /v1/subscriptions/{subscription_id}/pause`
 * @param subscription_id Flint subscription ID.
 * @see https://developers.withflintpay.com/docs/api/subscriptions#pauseSubscription
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.subscriptions.pause("sub_01ARZ3NDEKTSV4RRFFQ69G5FAV", {pause_duration_cycles: 2}, {
 * idempotencyKey: idempotencyKey })
 */
    pause(subscription_id: InputValue<string>, params: SubscriptionsPauseParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<Subscription, SubscriptionResponse>>;
    /**
 * Charges the next renewal now, ships it when the subscription has delivery, and moves the next
 * billing date forward by one interval. Available while the subscription is active on a
 * Flint-owned billing schedule (billing_schedule_owner is flint), is not set to cancel at the end
 * of its period, is not in a trial, and has no delivery hold or renewal in progress. The
 * subscription's payment method must be active and allow off-session charges. Requires
 * Idempotency-Key; retry with the same key to recover the same attempt. Returns the subscription,
 * renewal order, and payment attempt with status 200, including when the payment is declined.
 * Inspect order_payment_attempt.last_payment_error for a failed payment.
 *
 * `POST /v1/subscriptions/{subscription_id}/renew`
 * @param subscription_id Subscription ID.
 * @see https://developers.withflintpay.com/docs/api/subscriptions#renewSubscription
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.subscriptions.renew("sub_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, { idempotencyKey:
 * idempotencyKey })
 */
    renew(subscription_id: InputValue<string>, params: SubscriptionsRenewParams, options: _SdkRequiredIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<SubscriptionRenewalResult, SubscriptionRenewalResultResponse>>;
    /**
 * Asks Flint to resume a paused subscription. Returns 202 while the subscription is still paused,
 * with resume_requested_at set. Flint then makes it active, or past_due while an overdue period is
 * collected, and sends subscription.resumed. If Flint can't resume it, it stays paused,
 * resume_requested_at clears, and Flint sends subscription.updated. Any other status fails with
 * 409 ACTION_NOT_ALLOWED. To undo a scheduled cancellation, PATCH the subscription with
 * cancel_at_period_end set to false.
 *
 * `POST /v1/subscriptions/{subscription_id}/resume`
 * @param subscription_id Flint subscription ID.
 * @see https://developers.withflintpay.com/docs/api/subscriptions#resumeSubscription
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.subscriptions.resume("sub_01ARZ3NDEKTSV4RRFFQ69G5FAV", undefined, { idempotencyKey:
 * idempotencyKey })
 */
    resume(subscription_id: InputValue<string>, params?: SubscriptionsResumeParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<Subscription, SubscriptionResponse>>;
    /**
 * Skips the next renewal: nothing is charged or shipped for it, and the next billing date moves
 * forward by one of the subscription's billing intervals. A Flint-owned schedule keeps its
 * billing_anchor_day, including when the skipped date falls in a shorter month. Available while
 * the subscription is active, is not set to cancel at the end of its period, and has a next
 * billing date.
 *
 * `POST /v1/subscriptions/{subscription_id}/skip-cycle`
 * @param subscription_id Flint subscription ID.
 * @see https://developers.withflintpay.com/docs/api/subscriptions#skipSubscriptionCycle
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.subscriptions.skipCycle("sub_01ARZ3NDEKTSV4RRFFQ69G5FAV", {initiated_by: "merchant"}, {
 * idempotencyKey: idempotencyKey })
 */
    skipCycle(subscription_id: InputValue<string>, params: SubscriptionsSkipCycleParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<Subscription, SubscriptionResponse>>;
    /**
 * Updates metadata, external_reference_id, payment_method_id, delivery, billing interval,
 * quantity, or cancel_at_period_end: false to undo a scheduled cancellation. Send billing_interval
 * and billing_interval_count together. A billing_schedule update must be the only mutable field.
 * Delivery, cadence and quantity changes apply to future unpaid renewals. Send expected_version to
 * reject concurrent changes. Schedule a cancellation with `client.subscriptions.cancel`, change
 * the plan with /change-plan, and manage lines through the line-items collection. A card whose
 * setup hasn't finished returns 409 ACTION_NOT_ALLOWED with reason status_not_reached. Once setup
 * finishes, send a new request with a new Idempotency-Key.
 *
 * `PATCH /v1/subscriptions/{subscription_id}`
 * @param subscription_id Flint subscription ID.
 * @see https://developers.withflintpay.com/docs/api/subscriptions#updateSubscription
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.subscriptions.update("sub_01ARZ3NDEKTSV4RRFFQ69G5FAV", {quantity: 2}, { idempotencyKey:
 * idempotencyKey })
 */
    update(subscription_id: InputValue<string>, params: SubscriptionsUpdateParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<Subscription, SubscriptionResponse>>;
    /**
 * Updates a subscription line for future renewals. Send expected_version to reject a concurrent
 * change. Already-created orders keep their lines.
 *
 * `PATCH /v1/subscriptions/{subscription_id}/line-items/{subscription_line_item_id}`
 * @param subscription_id Subscription ID.
 * @param subscription_line_item_id Subscription line item ID.
 * @see https://developers.withflintpay.com/docs/api/subscriptions#updateSubscriptionLineItem
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.subscriptions.updateLineItem("sub_01ARZ3NDEKTSV4RRFFQ69G5FAV",
 * "sli_01ARZ3NDEKTSV4RRFFQ69G5FAV", {quantity: 2}, { idempotencyKey: idempotencyKey })
 */
    updateLineItem(subscription_id: InputValue<string>, subscription_line_item_id: InputValue<string>, params: SubscriptionsUpdateLineItemParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<Subscription, SubscriptionResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly subscriptions: SubscriptionsResource;
}
