import type { InputValue } from '../runtime.js';
import type { AccessLink, AccessLinkResponse } from '../declarations/types-0.js';
import type {
    CancelSubscriptionRequestInput,
    ChangeSubscriptionPaymentMethodRequestInput,
    ChangeSubscriptionPlanRequestInput
} from '../declarations/types-3.js';
import type { ClientOptions } from '../declarations/types-4.js';
import type {
    CreateSubscriptionAccessLinkRequestInput,
    CreateSubscriptionLineItemRequestInput,
    CreateSubscriptionRequestInput
} from '../declarations/types-9.js';
import type { PauseSubscriptionRequestInput } from '../declarations/types-35.js';
import type { RenewSubscriptionRequestInput } from '../declarations/types-39.js';
import type { RequestOptions, ResourceVersionRequestInput } from '../declarations/types-40.js';
import type { SdkResponse, SkipSubscriptionCycleRequestInput, Subscription } from '../declarations/types-44.js';
import type { SubscriptionListResponse, SubscriptionPaymentRetry } from '../declarations/types-45.js';
import type {
    SubscriptionPaymentRetryListResponse,
    SubscriptionPaymentRetryResponse,
    SubscriptionPlanChangeResult,
    SubscriptionPlanChangeResultResponse,
    SubscriptionRenewalResult,
    SubscriptionRenewalResultResponse,
    SubscriptionResponse,
    SubscriptionsCancelInput,
    SubscriptionsChangePaymentMethodInput,
    SubscriptionsChangePlanInput,
    SubscriptionsCreateAccessLinkInput,
    SubscriptionsCreateInput,
    SubscriptionsCreateLineItemInput,
    SubscriptionsCreatePaymentRetryInput,
    SubscriptionsDeleteLineItemInput,
    SubscriptionsGetInput,
    SubscriptionsGetPaymentRetryInput,
    SubscriptionsListInput,
    SubscriptionsListPaymentRetriesInput,
    SubscriptionsPauseInput,
    SubscriptionsReactivateInput,
    SubscriptionsRenewInput,
    SubscriptionsResumeInput,
    SubscriptionsSkipCycleInput,
    SubscriptionsUpdateBillingScheduleInput
} from '../declarations/types-46.js';
import type { SubscriptionsUpdateInput, SubscriptionsUpdateLineItemInput } from '../declarations/types-47.js';
import type { UpdateSubscriptionLineItemRequestInput } from '../declarations/types-49.js';
import type { UpdateSubscriptionRequestInput } from '../declarations/types-50.js';
import type { _SdkRequiredIdempotency, _SdkWithoutIdempotency } from '../declarations/types-62.js';
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
    CancelSubscriptionRequestInput,
    ChangeSubscriptionPaymentMethodRequestInput,
    ChangeSubscriptionPlanRequestInput,
    CategoryReference,
    CardDetails,
    CheckoutBuyerContact
} from '../declarations/types-3.js';
export type { RequestOptions, ResourceVersionRequestInput, ResponseMeta, ResponseWarning } from '../declarations/types-40.js';
export type {
    Subscription,
    SdkResponse,
    SkipSubscriptionCycleRequestInput,
    SubscriptionAddressVerification,
    SelectedProductOption,
    StripePaymentClientAction,
    StripeSetupIntentClientAction,
    SettlementAmounts,
    ServiceFulfillmentDetails,
    ShipmentFulfillmentDetails,
    SubscribedLine,
    SelectableOrderPaymentIntent
} from '../declarations/types-44.js';
export type {
    SubscriptionResponse,
    SubscriptionPlanChangeResult,
    SubscriptionPlanChangeResultResponse,
    SubscriptionPaymentRetryResponse,
    SubscriptionPaymentRetryListResponse,
    SubscriptionRenewalResult,
    SubscriptionRenewalResultResponse,
    SubscriptionsUpdateBillingScheduleInput,
    SubscriptionsCancelInput,
    SubscriptionsChangePaymentMethodInput,
    SubscriptionsChangePlanInput,
    SubscriptionsCreateInput,
    SubscriptionsCreateAccessLinkInput,
    SubscriptionsCreateLineItemInput,
    SubscriptionsCreatePaymentRetryInput,
    SubscriptionsDeleteLineItemInput,
    SubscriptionsGetInput,
    SubscriptionsGetPaymentRetryInput,
    SubscriptionsListPaymentRetriesInput,
    SubscriptionsListInput,
    SubscriptionsPauseInput,
    SubscriptionsReactivateInput,
    SubscriptionsRenewInput,
    SubscriptionsResumeInput,
    SubscriptionsSkipCycleInput,
    SubscriptionPromotion,
    SubscriptionServiceLocation,
    SubscriptionPlanLineItem,
    SubscriptionPlanSwapVariant,
    SubscriptionUpcomingDeliveryHold,
    SubscriptionServiceLocationRequestInput,
    SubscriptionServiceLocationInputCustomerAddressInput,
    SubscriptionServiceLocationInputAddressInput,
    SubscriptionTermsRequestInput,
    SubscriptionPlanTermsRequestInput
} from '../declarations/types-46.js';
export type { _SdkRequiredIdempotency, _SdkWithoutIdempotency } from '../declarations/types-62.js';
export type {
    CreateSubscriptionRequestInput,
    CreateSubscriptionAccessLinkRequestInput,
    CreateSubscriptionLineItemRequestInput,
    Credentials,
    CreateSubscriptionLineItemRequestVariantInput,
    CreateSubscriptionLineItemRequestBundleInput
} from '../declarations/types-9.js';
export type {
    AccessLink,
    AccessLinkResponse,
    AuthMode,
    Address,
    BundleComponent,
    BundleComponentVariantSummary,
    AddressRequestInput,
    AddressRequest
} from '../declarations/types-0.js';
export type {
    SubscriptionPaymentRetry,
    SubscriptionListResponse,
    SubscriptionIntervalOption,
    SubscriptionCancellationDetails,
    SubscriptionDelivery,
    SubscriptionDeliveryMethodSummary,
    SubscriptionDeliveryDestination,
    SubscriptionDeliveryHold,
    SubscriptionInventoryWait,
    SubscriptionLineItem,
    SubscriptionBillingScheduleRequestInput,
    SubscriptionBillingScheduleInputFlintInput,
    SubscriptionBillingScheduleInputExternalInput,
    SubscriptionBillingStartRequestInput,
    SubscriptionBillingStartInputImmediateInput,
    SubscriptionBillingStartInputScheduledInput,
    SubscriptionBillingStartInputImportedInput,
    SubscriptionDeliveryRequestInput,
    SubscriptionDeliveryDestinationRequestInput,
    SubscriptionDeliveryDestinationInputCustomerAddressInput,
    SubscriptionDeliveryDestinationInputAddressInput,
    SubscriptionOfferTermsRequestInput,
    SubscriptionOfferLineItemRequestInput,
    SubscriptionBillingScheduleUpdateRequestInput,
    SubscriptionBillingScheduleUpdateInputFlintInput,
    SubscriptionBillingScheduleUpdateInputExternalInput,
    SubscriptionOfferLineItemRequest
} from '../declarations/types-45.js';
export type {
    PauseSubscriptionRequestInput,
    PaymentErrorSummary,
    PaymentAttemptGiftCardRedemption,
    PaymentAttemptPaymentIntent,
    PaymentClientAction,
    PaymentCollection,
    PaymentCollectionStripe,
    PaymentCollectionStripeElements
} from '../declarations/types-35.js';
export type { RenewSubscriptionRequestInput, PurchasedGiftCard } from '../declarations/types-39.js';
export type { UpdateSubscriptionRequestInput } from '../declarations/types-50.js';
export type {
    UpdateSubscriptionLineItemRequestInput,
    UpdateSubscriptionBillingScheduleRequestInput,
    UpdateSubscriptionBillingScheduleRequestFlintInput,
    UpdateSubscriptionBillingScheduleRequestExternalInput
} from '../declarations/types-49.js';
export type {
    SubscriptionsUpdateInput,
    SubscriptionsUpdateLineItemInput,
    TextModifierRequest,
    TaxCalculationRequest,
    TaxComponentRequest,
    TaxJurisdiction,
    TaxBreakdown,
    TaxBreakdownPercentage,
    TaxBreakdownFlatAmount,
    TicketedEvent,
    Tip,
    TipPaymentIntentAllocation,
    TipValueSettlementAllocation
} from '../declarations/types-47.js';
export type { ClientOptions } from '../declarations/types-4.js';
export type {
    BuyerAction,
    BuyerCancelActionOptions,
    BuyerCancelRetentionOffer,
    BuyerPauseActionOptions,
    BuyerPayBalanceActionOptions
} from '../declarations/types-1.js';
export type {
    ExpandedCustomerSummary,
    ErrorRemediation,
    ExpandedPaymentMethodSummary,
    DigitalFulfillmentDetails,
    ExpandedOrderSummary,
    ExpandedPackageSummary,
    Dimensions,
    ExpandedPaymentIntentSummary
} from '../declarations/types-16.js';
export type { DeliveryRecipientResource } from '../declarations/types-14.js';
export type { MoneyValue, NextAction, NextActionMerchantAccountSession } from '../declarations/types-31.js';
export type { Image, GiftCardPurchaseSnapshot, GiftCardProductConfiguration, GiftCardPurchaseRecipient } from '../declarations/types-19.js';
export type {
    OrderLineItemModifier,
    OrderLineItemTax,
    Order,
    OrderPaymentAttempt,
    OrderPaymentAttemptPaymentMethodSave,
    OrderAuthorizationAmounts,
    OrderCharge,
    OrderCalculatedChargeTax,
    OrderDeliveryDestination,
    OrderDeliveryDestinationAddress,
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
    OrderLineSubscriptionOfferSummary,
    OrderLineSubscriptionOfferDiscount,
    OrderCalculatedLineItemTax,
    OrderDeliveryDestinationAddressRequestInput,
    OrderDeliveryDestinationAddressRequest
} from '../declarations/types-32.js';
export type {
    PromotionRecurrence,
    PromotionRecurrenceOnce,
    PromotionRecurrenceRepeating,
    PromotionRecurrenceForever
} from '../declarations/types-38.js';
export type {
    ExpandedSubscriptionPlanSummary,
    Fulfillment,
    FulfillmentHold,
    FulfillmentChargeLink,
    FulfillmentLineItem,
    FulfillmentOutcome,
    FulfillmentRecipient,
    ExpandedShipmentSummary,
    ExpandedSubscriptionSummary
} from '../declarations/types-17.js';
export type {
    PendingPaymentAction,
    PendingPaymentActionSubject,
    PendingPaymentActionPaymentIntentSubject,
    PendingPaymentActionSetupPaymentSourceSubject,
    PricingAmounts,
    PickupFulfillmentDetails
} from '../declarations/types-37.js';
export type { DeliveryFulfillmentDetails } from '../declarations/types-12.js';
export type { InventoryRoutingSource } from '../declarations/types-25.js';
export type { GiftCardCustomAmountBounds } from '../declarations/types-18.js';
export type { LineItemInventorySnapshot, LineItemInventoryDemand } from '../declarations/types-28.js';
export type { Weight } from '../declarations/types-61.js';
export type { PaymentSourceSummary, PaymentSourceAchDebitSummary, PaymentSourceCardSummary } from '../declarations/types-36.js';
export type { OrderReturnCreditSettlement, OrderTax, OrderTaxExemption, OrderTaxLocation } from '../declarations/types-33.js';
export type { DeliverySelectionRecipientRequestInput, DeliverySelectionRecipientRequest } from '../declarations/types-15.js';
export type { ConfirmReturnResolutionRequestInput, ConfigurationVersionRequestInput } from '../declarations/types-5.js';
export type {
    MeCancelSubscriptionInput,
    MeChangeSubscriptionPaymentMethodInput,
    MeCreateSubscriptionPaymentRetryInput
} from '../declarations/types-29.js';
export type {
    MeGetSubscriptionPaymentRetryInput,
    MeListSubscriptionPaymentRetriesInput,
    MePauseSubscriptionInput,
    MeReactivateSubscriptionInput,
    MeRenewSubscriptionInput
} from '../declarations/types-30.js';
export {
    makeAddressRequest,
    makeCancelSubscriptionRequest,
    makeChangeSubscriptionPaymentMethodRequest,
    makeChangeSubscriptionPlanRequest
} from '../declarations/types-62.js';
export { makeConfigurationVersionRequest, makeConfirmReturnResolutionRequest } from '../declarations/types-63.js';
export {
    makeCreateSubscriptionAccessLinkRequest,
    makeCreateSubscriptionLineItemRequest,
    makeCreateSubscriptionLineItemRequestBundle,
    makeCreateSubscriptionLineItemRequestVariant,
    makeCreateSubscriptionRequest
} from '../declarations/types-65.js';
export { makeDeliverySelectionRecipientRequest, makeDimensions } from '../declarations/types-66.js';
export { makeGiftCardCustomAmountBounds, makeGiftCardProductConfiguration } from '../declarations/types-67.js';
export { makeMoneyValue } from '../declarations/types-68.js';
export {
    makeOrderCalculatedChargeTax,
    makeOrderCalculatedLineItemTax,
    makeOrderDeliveryDestinationAddressRequest,
    makeOrderLineItemTax,
    makePauseSubscriptionRequest
} from '../declarations/types-69.js';
export {
    makePromotionRecurrence,
    makePromotionRecurrenceForever,
    makePromotionRecurrenceOnce,
    makePromotionRecurrenceRepeating,
    makeRenewSubscriptionRequest,
    makeResourceVersionRequest
} from '../declarations/types-70.js';
export {
    makeSkipSubscriptionCycleRequest,
    makeSubscriptionBillingScheduleInputExternal,
    makeSubscriptionBillingScheduleInputFlint,
    makeSubscriptionBillingScheduleRequest,
    makeSubscriptionBillingScheduleUpdateInputExternal
} from '../declarations/types-71.js';
export {
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
    makeSubscriptionPlanTermsRequest,
    makeSubscriptionServiceLocationInputAddress,
    makeSubscriptionServiceLocationInputCustomerAddress,
    makeSubscriptionServiceLocationRequest,
    makeSubscriptionTermsRequest,
    makeTaxCalculationRequest,
    makeTaxComponentRequest,
    makeTaxJurisdiction,
    makeTextModifierRequest
} from '../declarations/types-72.js';
export {
    makeUpdateSubscriptionBillingScheduleRequest,
    makeUpdateSubscriptionBillingScheduleRequestExternal,
    makeUpdateSubscriptionBillingScheduleRequestFlint,
    makeUpdateSubscriptionLineItemRequest,
    makeUpdateSubscriptionRequest,
    makeWeight
} from '../declarations/types-73.js';
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
 * @see reference/subscriptions.md#subscriptionscancel
 * POST /v1/subscriptions/{subscription_id}/cancel
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.subscriptions.cancel("example", {}, { idempotencyKey: idempotencyKey })
 */
    cancel(subscription_id: InputValue<string>, params: (InputValue<CancelSubscriptionRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<Subscription>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/subscriptions.md#subscriptionscancel
     */
    cancelWithResponse(subscription_id: InputValue<string>, params: (InputValue<CancelSubscriptionRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<SubscriptionResponse>>;
    /**
 * Changes the subscription to an active payment method owned by the same customer. The payment
 * method's usage must be off_session. Send expected_version to reject a concurrent change. A card
 * whose setup hasn't finished returns 409 PAYMENT_METHOD_NOT_READY. Retry the same request with
 * the same Idempotency-Key once setup finishes.
 * @see reference/subscriptions.md#subscriptionschangepaymentmethod
 * POST /v1/subscriptions/{subscription_id}/payment-method
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.subscriptions.changePaymentMethod("example", {payment_method_id: "example"}, {
 * idempotencyKey: idempotencyKey })
 */
    changePaymentMethod(subscription_id: InputValue<string>, params: (InputValue<ChangeSubscriptionPaymentMethodRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<Subscription>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/subscriptions.md#subscriptionschangepaymentmethod
     */
    changePaymentMethodWithResponse(subscription_id: InputValue<string>, params: (InputValue<ChangeSubscriptionPaymentMethodRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<SubscriptionResponse>>;
    /**
 * Replaces the subscription's lines and recurring options with the active target plan's current
 * terms. With billing_starts next_renewal, changes terms now without charging and keeps the
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
 * @see reference/subscriptions.md#subscriptionschangeplan
 * POST /v1/subscriptions/{subscription_id}/change-plan
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.subscriptions.changePlan("example", {billing_starts: "now", subscription_plan_id:
 * "plan_00000000000000000000000000"}, { idempotencyKey: idempotencyKey })
 */
    changePlan(subscription_id: InputValue<string>, params: (InputValue<ChangeSubscriptionPlanRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options: _SdkRequiredIdempotency<RequestOptions<"merchant">>): Promise<SubscriptionPlanChangeResult>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/subscriptions.md#subscriptionschangeplan
     */
    changePlanWithResponse(subscription_id: InputValue<string>, params: (InputValue<ChangeSubscriptionPlanRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options: _SdkRequiredIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<SubscriptionPlanChangeResultResponse>>;
    /**
 * Creates a subscription for the authenticated merchant.
 * @see reference/subscriptions.md#subscriptionscreate
 * POST /v1/subscriptions
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.subscriptions.create({billing_start: {type: "immediate"}, customer_id: "example", terms:
 * {subscription_plan_id: "example", type: "subscription_plan"}}, { idempotencyKey: idempotencyKey
 * })
 */
    create(params: (InputValue<CreateSubscriptionRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options: _SdkRequiredIdempotency<RequestOptions<"merchant">>): Promise<Subscription>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/subscriptions.md#subscriptionscreate
     */
    createWithResponse(params: (InputValue<CreateSubscriptionRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options: _SdkRequiredIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<SubscriptionResponse>>;
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
 * customer_account.mode is merchant_hosted it returns ACCESS_LINK_MERCHANT_HOSTED. Send no request
 * body, an empty object ({}), or an optional purpose. Idempotency is scoped to the merchant,
 * credential, environment, and this resource's route. A replay returns the original link without
 * extending its lifetime or replenishing its opens. Without an Idempotency-Key, each call creates
 * a new link and has no replay result. If Flint cannot retain a result after minting, contact
 * support with X-Request-Id before sending a new request.
 * @see reference/subscriptions.md#subscriptionscreateaccesslink
 * POST /v1/subscriptions/{subscription_id}/access-links
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.subscriptions.createAccessLink("example", undefined, { idempotencyKey: idempotencyKey })
 */
    createAccessLink(subscription_id: InputValue<string>, params?: (InputValue<CreateSubscriptionAccessLinkRequestInput> | {
        "purpose"?: never;
    })
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<AccessLink>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/subscriptions.md#subscriptionscreateaccesslink
     */
    createAccessLinkWithResponse(subscription_id: InputValue<string>, params?: (InputValue<CreateSubscriptionAccessLinkRequestInput> | {
        "purpose"?: never;
    })
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<AccessLinkResponse>>;
    /**
 * Adds a catalog variant or bundle to future subscription renewals. Current prices and delivery
 * eligibility are checked before the line is saved. Already-created orders keep their lines.
 * @see reference/subscriptions.md#subscriptionscreatelineitem
 * POST /v1/subscriptions/{subscription_id}/line-items
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.subscriptions.createLineItem("example", {quantity: 1, type: "variant", variant_id:
 * "var_00000000000000000000000000"}, { idempotencyKey: idempotencyKey })
 */
    createLineItem(subscription_id: InputValue<string>, params: (InputValue<CreateSubscriptionLineItemRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<Subscription>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/subscriptions.md#subscriptionscreatelineitem
     */
    createLineItemWithResponse(subscription_id: InputValue<string>, params: (InputValue<CreateSubscriptionLineItemRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<SubscriptionResponse>>;
    /**
 * Starts one manual collection attempt on a past-due subscription. Send no body, or an empty
 * object. Poll the returned retry for the outcome.
 * @see reference/subscriptions.md#subscriptionscreatepaymentretry
 * POST /v1/subscriptions/{subscription_id}/payment-retries
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.subscriptions.createPaymentRetry("example", undefined, { idempotencyKey: idempotencyKey })
 */
    createPaymentRetry(subscription_id: InputValue<string>, params: (InputValue<{}> | {}) & {
        "Idempotency-Key"?: InputValue<string>;
    } | undefined, options: _SdkRequiredIdempotency<RequestOptions<"merchant">>): Promise<SubscriptionPaymentRetry>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/subscriptions.md#subscriptionscreatepaymentretry
     */
    createPaymentRetryWithResponse(subscription_id: InputValue<string>, params: (InputValue<{}> | {}) & {
        "Idempotency-Key"?: InputValue<string>;
    } | undefined, options: _SdkRequiredIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<SubscriptionPaymentRetryResponse>>;
    /**
 * Removes a line from future subscription renewals. The final line cannot be removed. Send
 * expected_version as a query parameter to reject a concurrent change.
 * @see reference/subscriptions.md#subscriptionsdeletelineitem
 * DELETE /v1/subscriptions/{subscription_id}/line-items/{subscription_line_item_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.subscriptions.deleteLineItem("example", "example", {}, { idempotencyKey: idempotencyKey })
 */
    deleteLineItem(subscription_id: InputValue<string>, subscription_line_item_id: InputValue<string>, params?: {
        "expected_version"?: InputValue<`${bigint}` | bigint>;
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<Subscription>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/subscriptions.md#subscriptionsdeletelineitem
     */
    deleteLineItemWithResponse(subscription_id: InputValue<string>, subscription_line_item_id: InputValue<string>, params?: {
        "expected_version"?: InputValue<`${bigint}` | bigint>;
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<SubscriptionResponse>>;
    /**
 * Returns a single subscription by ID. A paid checkout session's credential can retrieve only the
 * subscription created by its source order. Checkout credentials cannot expand related resources.
 * @see reference/subscriptions.md#subscriptionsget
 * GET /v1/subscriptions/{subscription_id}
 * @example
 * client.subscriptions.get("example")
 */
    get(subscription_id: InputValue<string>, params?: {
        "expand"?: InputValue<Array<"customer" | "payment_method" | "subscription_plan">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"checkout" | "merchant">>): Promise<Subscription>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/subscriptions.md#subscriptionsget
     */
    getWithResponse(subscription_id: InputValue<string>, params?: {
        "expand"?: InputValue<Array<"customer" | "payment_method" | "subscription_plan">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"checkout" | "merchant">>): Promise<SdkResponse<SubscriptionResponse>>;
    /**
 * Returns one durable manual subscription payment retry.
 * @see reference/subscriptions.md#subscriptionsgetpaymentretry
 * GET /v1/subscriptions/{subscription_id}/payment-retries/{subscription_payment_retry_id}
 * @example
 * client.subscriptions.getPaymentRetry("example", "example")
 */
    getPaymentRetry(subscription_id: InputValue<string>, subscription_payment_retry_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<SubscriptionPaymentRetry>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/subscriptions.md#subscriptionsgetpaymentretry
     */
    getPaymentRetryWithResponse(subscription_id: InputValue<string>, subscription_payment_retry_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<SubscriptionPaymentRetryResponse>>;
    /**
 * Returns a subscription's manual payment retries, newest first.
 * @see reference/subscriptions.md#subscriptionslistpaymentretries
 * GET /v1/subscriptions/{subscription_id}/payment-retries
 * @example
 * client.subscriptions.listPaymentRetries("example")
 */
    listPaymentRetries(subscription_id: InputValue<string>, params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "idempotency_key"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<SubscriptionPaymentRetryListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/subscriptions.md#subscriptionslistpaymentretries
     */
    listPaymentRetriesWithResponse(subscription_id: InputValue<string>, params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "idempotency_key"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<SubscriptionPaymentRetryListResponse>>;
    /** Iterate pages lazily.
     * @see reference/subscriptions.md#subscriptionslistpaymentretries
     */
    listPaymentRetriesPages(subscription_id: InputValue<string>, params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "idempotency_key"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<SubscriptionPaymentRetryListResponse>;
    /** Iterate complete page bodies with HTTP metadata.
     * @see reference/subscriptions.md#subscriptionslistpaymentretries
     */
    listPaymentRetriesPagesWithResponse(subscription_id: InputValue<string>, params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "idempotency_key"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<SdkResponse<SubscriptionPaymentRetryListResponse>>;
    /** Iterate items lazily.
     * @see reference/subscriptions.md#subscriptionslistpaymentretries
     */
    listPaymentRetriesItems(subscription_id: InputValue<string>, params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "idempotency_key"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<SubscriptionPaymentRetry>;
    /**
 * Returns a paginated list of subscriptions for the authenticated merchant. Subscriptions without
 * a next_billing_at never match next_billing_after or next_billing_before, and sort last with
 * sort_by=next_billing_at in either direction.
 * @see reference/subscriptions.md#subscriptionslist
 * GET /v1/subscriptions
 * @example
 * client.subscriptions.list()
 */
    list(params?: {
        "idempotency_key"?: InputValue<string>;
        "terms_type"?: InputValue<Array<"subscription_plan" | "subscription_offer">>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "status"?: InputValue<Array<"trialing" | "active" | "paused" | "past_due" | "canceled" | "incomplete" | "scheduled">>;
        "billing_schedule_owner"?: InputValue<Array<"flint" | "external">>;
        "awaiting_billing_schedule"?: InputValue<boolean>;
        "cancel_at_period_end"?: InputValue<boolean>;
        "customer_id"?: InputValue<string>;
        "delivery_method_id"?: InputValue<string>;
        "hold_reason"?: InputValue<Array<"method_unavailable" | "destination_not_served" | "rate_unavailable">>;
        "subscription_offer_id"?: InputValue<string>;
        "subscription_plan_id"?: InputValue<string>;
        "external_reference_id"?: InputValue<string>;
        "query"?: InputValue<string>;
        "sort_by"?: InputValue<"created_at" | "updated_at" | "next_billing_at">;
        "sort_direction"?: InputValue<"asc" | "desc">;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
        "next_billing_after"?: InputValue<string | globalThis.Date>;
        "next_billing_before"?: InputValue<string | globalThis.Date>;
        "needs_attention"?: InputValue<boolean>;
        "expand"?: InputValue<Array<"customer" | "payment_method" | "subscription_plan">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<SubscriptionListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/subscriptions.md#subscriptionslist
     */
    listWithResponse(params?: {
        "idempotency_key"?: InputValue<string>;
        "terms_type"?: InputValue<Array<"subscription_plan" | "subscription_offer">>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "status"?: InputValue<Array<"trialing" | "active" | "paused" | "past_due" | "canceled" | "incomplete" | "scheduled">>;
        "billing_schedule_owner"?: InputValue<Array<"flint" | "external">>;
        "awaiting_billing_schedule"?: InputValue<boolean>;
        "cancel_at_period_end"?: InputValue<boolean>;
        "customer_id"?: InputValue<string>;
        "delivery_method_id"?: InputValue<string>;
        "hold_reason"?: InputValue<Array<"method_unavailable" | "destination_not_served" | "rate_unavailable">>;
        "subscription_offer_id"?: InputValue<string>;
        "subscription_plan_id"?: InputValue<string>;
        "external_reference_id"?: InputValue<string>;
        "query"?: InputValue<string>;
        "sort_by"?: InputValue<"created_at" | "updated_at" | "next_billing_at">;
        "sort_direction"?: InputValue<"asc" | "desc">;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
        "next_billing_after"?: InputValue<string | globalThis.Date>;
        "next_billing_before"?: InputValue<string | globalThis.Date>;
        "needs_attention"?: InputValue<boolean>;
        "expand"?: InputValue<Array<"customer" | "payment_method" | "subscription_plan">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<SubscriptionListResponse>>;
    /** Iterate pages lazily.
     * @see reference/subscriptions.md#subscriptionslist
     */
    listPages(params?: {
        "idempotency_key"?: InputValue<string>;
        "terms_type"?: InputValue<Array<"subscription_plan" | "subscription_offer">>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "status"?: InputValue<Array<"trialing" | "active" | "paused" | "past_due" | "canceled" | "incomplete" | "scheduled">>;
        "billing_schedule_owner"?: InputValue<Array<"flint" | "external">>;
        "awaiting_billing_schedule"?: InputValue<boolean>;
        "cancel_at_period_end"?: InputValue<boolean>;
        "customer_id"?: InputValue<string>;
        "delivery_method_id"?: InputValue<string>;
        "hold_reason"?: InputValue<Array<"method_unavailable" | "destination_not_served" | "rate_unavailable">>;
        "subscription_offer_id"?: InputValue<string>;
        "subscription_plan_id"?: InputValue<string>;
        "external_reference_id"?: InputValue<string>;
        "query"?: InputValue<string>;
        "sort_by"?: InputValue<"created_at" | "updated_at" | "next_billing_at">;
        "sort_direction"?: InputValue<"asc" | "desc">;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
        "next_billing_after"?: InputValue<string | globalThis.Date>;
        "next_billing_before"?: InputValue<string | globalThis.Date>;
        "needs_attention"?: InputValue<boolean>;
        "expand"?: InputValue<Array<"customer" | "payment_method" | "subscription_plan">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<SubscriptionListResponse>;
    /** Iterate complete page bodies with HTTP metadata.
     * @see reference/subscriptions.md#subscriptionslist
     */
    listPagesWithResponse(params?: {
        "idempotency_key"?: InputValue<string>;
        "terms_type"?: InputValue<Array<"subscription_plan" | "subscription_offer">>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "status"?: InputValue<Array<"trialing" | "active" | "paused" | "past_due" | "canceled" | "incomplete" | "scheduled">>;
        "billing_schedule_owner"?: InputValue<Array<"flint" | "external">>;
        "awaiting_billing_schedule"?: InputValue<boolean>;
        "cancel_at_period_end"?: InputValue<boolean>;
        "customer_id"?: InputValue<string>;
        "delivery_method_id"?: InputValue<string>;
        "hold_reason"?: InputValue<Array<"method_unavailable" | "destination_not_served" | "rate_unavailable">>;
        "subscription_offer_id"?: InputValue<string>;
        "subscription_plan_id"?: InputValue<string>;
        "external_reference_id"?: InputValue<string>;
        "query"?: InputValue<string>;
        "sort_by"?: InputValue<"created_at" | "updated_at" | "next_billing_at">;
        "sort_direction"?: InputValue<"asc" | "desc">;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
        "next_billing_after"?: InputValue<string | globalThis.Date>;
        "next_billing_before"?: InputValue<string | globalThis.Date>;
        "needs_attention"?: InputValue<boolean>;
        "expand"?: InputValue<Array<"customer" | "payment_method" | "subscription_plan">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<SdkResponse<SubscriptionListResponse>>;
    /** Iterate items lazily.
     * @see reference/subscriptions.md#subscriptionslist
     */
    listItems(params?: {
        "idempotency_key"?: InputValue<string>;
        "terms_type"?: InputValue<Array<"subscription_plan" | "subscription_offer">>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "status"?: InputValue<Array<"trialing" | "active" | "paused" | "past_due" | "canceled" | "incomplete" | "scheduled">>;
        "billing_schedule_owner"?: InputValue<Array<"flint" | "external">>;
        "awaiting_billing_schedule"?: InputValue<boolean>;
        "cancel_at_period_end"?: InputValue<boolean>;
        "customer_id"?: InputValue<string>;
        "delivery_method_id"?: InputValue<string>;
        "hold_reason"?: InputValue<Array<"method_unavailable" | "destination_not_served" | "rate_unavailable">>;
        "subscription_offer_id"?: InputValue<string>;
        "subscription_plan_id"?: InputValue<string>;
        "external_reference_id"?: InputValue<string>;
        "query"?: InputValue<string>;
        "sort_by"?: InputValue<"created_at" | "updated_at" | "next_billing_at">;
        "sort_direction"?: InputValue<"asc" | "desc">;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
        "next_billing_after"?: InputValue<string | globalThis.Date>;
        "next_billing_before"?: InputValue<string | globalThis.Date>;
        "needs_attention"?: InputValue<boolean>;
        "expand"?: InputValue<Array<"customer" | "payment_method" | "subscription_plan">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<Subscription>;
    /**
 * Pauses a subscription immediately, optionally for at least one billing cycle. A pause with a
 * duration resumes automatically at scheduled_resume_at. Repeating the stored pause length returns
 * the paused subscription; a different length returns ACTION_NOT_ALLOWED with reason field_locked
 * and param pause_duration_cycles and requires resuming first. A buyer's pause follows the store's
 * customer_account.buyer_capabilities. Send expected_version to reject a concurrent change.
 * @see reference/subscriptions.md#subscriptionspause
 * POST /v1/subscriptions/{subscription_id}/pause
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.subscriptions.pause("example", {}, { idempotencyKey: idempotencyKey })
 */
    pause(subscription_id: InputValue<string>, params: (InputValue<PauseSubscriptionRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<Subscription>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/subscriptions.md#subscriptionspause
     */
    pauseWithResponse(subscription_id: InputValue<string>, params: (InputValue<PauseSubscriptionRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<SubscriptionResponse>>;
    /**
 * Clears a pending cancellation without changing the current billing period. Alternatively, PATCH
 * the subscription with cancel_at_period_end set to false. Send expected_version to reject a
 * concurrent change.
 * @see reference/subscriptions.md#subscriptionsreactivate
 * POST /v1/subscriptions/{subscription_id}/reactivate
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.subscriptions.reactivate("example", undefined, { idempotencyKey: idempotencyKey })
 */
    reactivate(subscription_id: InputValue<string>, params?: (InputValue<ResourceVersionRequestInput> | {
        "expected_version"?: never;
    })
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<Subscription>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/subscriptions.md#subscriptionsreactivate
     */
    reactivateWithResponse(subscription_id: InputValue<string>, params?: (InputValue<ResourceVersionRequestInput> | {
        "expected_version"?: never;
    })
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<SubscriptionResponse>>;
    /**
 * Charges the next renewal now, ships it when the subscription has delivery, and moves the next
 * billing date forward by one interval. Available while the subscription is active on a
 * Flint-owned billing schedule (billing_schedule_owner is flint), is not set to cancel at the end
 * of its period, is not in a trial, and has no delivery hold or renewal in progress. The
 * subscription's payment method must be active and allow off-session charges. Requires
 * Idempotency-Key; retry with the same key to recover the same attempt. Returns the subscription,
 * renewal order, and payment attempt with status 200, including when the payment is declined.
 * Inspect order_payment_attempt.last_payment_error for a failed payment.
 * @see reference/subscriptions.md#subscriptionsrenew
 * POST /v1/subscriptions/{subscription_id}/renew
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.subscriptions.renew("example", {}, { idempotencyKey: idempotencyKey })
 */
    renew(subscription_id: InputValue<string>, params: (InputValue<RenewSubscriptionRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options: _SdkRequiredIdempotency<RequestOptions<"merchant">>): Promise<SubscriptionRenewalResult>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/subscriptions.md#subscriptionsrenew
     */
    renewWithResponse(subscription_id: InputValue<string>, params: (InputValue<RenewSubscriptionRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options: _SdkRequiredIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<SubscriptionRenewalResultResponse>>;
    /**
 * Asks Flint to resume a paused subscription. Returns 202 while the subscription is still paused,
 * with resume_requested_at set. Flint then makes it active, or past_due while an overdue period is
 * collected, and sends subscription.resumed. If Flint can't resume it, it stays paused,
 * resume_requested_at clears, and Flint sends subscription.updated. Any other status fails with
 * 409 ACTION_NOT_ALLOWED. To undo a scheduled cancellation, use reactivate.
 * @see reference/subscriptions.md#subscriptionsresume
 * POST /v1/subscriptions/{subscription_id}/resume
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.subscriptions.resume("example", undefined, { idempotencyKey: idempotencyKey })
 */
    resume(subscription_id: InputValue<string>, params?: (InputValue<ResourceVersionRequestInput> | {
        "expected_version"?: never;
    })
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<Subscription>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/subscriptions.md#subscriptionsresume
     */
    resumeWithResponse(subscription_id: InputValue<string>, params?: (InputValue<ResourceVersionRequestInput> | {
        "expected_version"?: never;
    })
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<SubscriptionResponse>>;
    /**
 * Skips the next renewal: nothing is charged or shipped for it, and the next billing date moves
 * forward by one of the subscription's billing intervals. A Flint-owned schedule keeps its
 * billing_anchor_day, including when the skipped date falls in a shorter month. Available while
 * the subscription is active, is not set to cancel at the end of its period, and has a next
 * billing date.
 * @see reference/subscriptions.md#subscriptionsskipcycle
 * POST /v1/subscriptions/{subscription_id}/skip-cycle
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.subscriptions.skipCycle("example", {}, { idempotencyKey: idempotencyKey })
 */
    skipCycle(subscription_id: InputValue<string>, params: (InputValue<SkipSubscriptionCycleRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<Subscription>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/subscriptions.md#subscriptionsskipcycle
     */
    skipCycleWithResponse(subscription_id: InputValue<string>, params: (InputValue<SkipSubscriptionCycleRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<SubscriptionResponse>>;
    /**
 * Updates metadata, external_reference_id, payment_method_id, delivery, billing interval,
 * quantity, or cancel_at_period_end: false to undo a scheduled cancellation. Send billing_interval
 * and billing_interval_count together. A billing_schedule update must be the only mutable field.
 * Delivery, cadence and quantity changes apply to future unpaid renewals. Send expected_version to
 * reject concurrent changes. Schedule a cancellation with POST
 * /v1/subscriptions/{subscription_id}/cancel, change the plan with /change-plan, and manage lines
 * through the line-items collection.
 * @see reference/subscriptions.md#subscriptionsupdate
 * PATCH /v1/subscriptions/{subscription_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.subscriptions.update("example", {}, { idempotencyKey: idempotencyKey })
 */
    update(subscription_id: InputValue<string>, params: (InputValue<UpdateSubscriptionRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<Subscription>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/subscriptions.md#subscriptionsupdate
     */
    updateWithResponse(subscription_id: InputValue<string>, params: (InputValue<UpdateSubscriptionRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<SubscriptionResponse>>;
    /**
 * Sets the next billing date, clears an external schedule while it awaits a date, or transfers
 * schedule ownership. Moving a Flint-owned next_billing_at sets billing_anchor_day to its UTC day
 * unless you send an explicit anchor. Transferring an external schedule to Flint with a next
 * billing date follows the same rule. An unchanged date and owner preserve the anchor. The
 * response carries the updated subscription. Send expected_version to reject a concurrent change.
 * @see reference/subscriptions.md#subscriptionsupdatebillingschedule
 * PATCH /v1/subscriptions/{subscription_id}/billing-schedule
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.subscriptions.updateBillingSchedule({subscription_id: "example", body: {owner: "flint",
 * next_billing_at: "2026-01-01T00:00:00Z"}}, { idempotencyKey: idempotencyKey })
 */
    updateBillingSchedule(input: SubscriptionsUpdateBillingScheduleInput, options?: RequestOptions<"merchant">): Promise<Subscription>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/subscriptions.md#subscriptionsupdatebillingschedule
     */
    updateBillingScheduleWithResponse(input: SubscriptionsUpdateBillingScheduleInput, options?: RequestOptions<"merchant">): Promise<SdkResponse<SubscriptionResponse>>;
    /**
 * Updates a subscription line for future renewals. Send expected_version to reject a concurrent
 * change. Already-created orders keep their lines.
 * @see reference/subscriptions.md#subscriptionsupdatelineitem
 * PATCH /v1/subscriptions/{subscription_id}/line-items/{subscription_line_item_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.subscriptions.updateLineItem("example", "example", {}, { idempotencyKey: idempotencyKey })
 */
    updateLineItem(subscription_id: InputValue<string>, subscription_line_item_id: InputValue<string>, params: (InputValue<UpdateSubscriptionLineItemRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<Subscription>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/subscriptions.md#subscriptionsupdatelineitem
     */
    updateLineItemWithResponse(subscription_id: InputValue<string>, subscription_line_item_id: InputValue<string>, params: (InputValue<UpdateSubscriptionLineItemRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<SubscriptionResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly subscriptions: SubscriptionsResource;
}
