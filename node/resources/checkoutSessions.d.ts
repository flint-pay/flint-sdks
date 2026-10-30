import type { WithResponseInfo, InputValue } from '../runtime.js';
import type { CheckoutSession } from '../declarations/types-4.js';
import type {
    CheckoutSessionCustomerVerification,
    CheckoutSessionCustomerVerificationConfirmationResponse,
    CheckoutSessionCustomerVerificationResponse,
    CheckoutSessionLaunchResponse,
    CheckoutSessionListResponse,
    CheckoutSessionResponse,
    CheckoutSessionWithSecret,
    CheckoutSessionsCloseParams,
    CheckoutSessionsConfirmCustomerVerificationParams,
    CheckoutSessionsCreateCustomerVerificationParams,
    CheckoutSessionsCreateDeliveryQuoteParams,
    CheckoutSessionsCreateDeliverySelectionParams,
    CheckoutSessionsCreateParams,
    CheckoutSessionsDeleteCurrentDeliverySelectionParams,
    CheckoutSessionsGetCurrentDeliverySelectionParams,
    CheckoutSessionsGetDeliveryQuoteParams,
    CheckoutSessionsGetDeliverySelectionParams,
    CheckoutSessionsGetParams,
    CheckoutSessionsListDeliverySelectionsParams,
    CheckoutSessionsListParams,
    CheckoutSessionsUpdateParams,
    ClientOptions
} from '../declarations/types-5.js';
import type { DeliveryQuote, DeliveryQuoteResponse } from '../declarations/types-18.js';
import type {
    DeliverySelection,
    DeliverySelectionListResponse,
    DeliverySelectionResponse,
    DeliverySelectionResult,
    DeliverySelectionResultResponse
} from '../declarations/types-19.js';
import type { EffectiveDeliverySelectionResource, EffectiveDeliverySelectionResponse } from '../declarations/types-21.js';
import type { RequestOptions } from '../declarations/types-47.js';
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
    CheckoutSessionsCloseParams,
    CheckoutSessionResponse,
    CheckoutSessionsConfirmCustomerVerificationParams,
    CheckoutSessionWithSecret,
    CheckoutSessionCustomerVerificationConfirmationResponse,
    CheckoutSessionsCreateParams,
    CheckoutSessionLaunchResponse,
    CheckoutSessionsCreateCustomerVerificationParams,
    CheckoutSessionCustomerVerification,
    CheckoutSessionCustomerVerificationResponse,
    CheckoutSessionsCreateDeliveryQuoteParams,
    CheckoutSessionsCreateDeliverySelectionParams,
    CheckoutSessionsDeleteCurrentDeliverySelectionParams,
    CheckoutSessionsGetParams,
    CheckoutSessionsGetCurrentDeliverySelectionParams,
    CheckoutSessionsGetDeliveryQuoteParams,
    CheckoutSessionsGetDeliverySelectionParams,
    CheckoutSessionsListDeliverySelectionsParams,
    CheckoutSessionsListParams,
    CheckoutSessionListResponse,
    CheckoutSessionsUpdateParams,
    ClientOptions,
    CloseCheckoutSessionRequestInput,
    CheckoutSubscriptionTerms,
    CheckoutSubscriptionRecurringShipping,
    CheckoutSessionTax,
    CheckoutTheme,
    CheckoutTipConfig,
    CheckoutSubscriptionTermsRequestInput,
    CheckoutTaxConfigRequestInput,
    CheckoutTipConfigRequestInput,
    CloseCheckoutSessionRequest,
    CheckoutTaxConfig
} from '../declarations/types-5.js';
export type { RequestOptions, ResourceReference, ResolvePaymentLinkResponse } from '../declarations/types-47.js';
export type {
    CheckoutSession,
    CheckoutBuyerContact,
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
    CheckoutBuyerFieldsRequestInput,
    CheckoutCustomTextWriteConfigInput,
    CheckoutLegalConfigRequestInput,
    CheckoutPaymentConfigRequestInput,
    CheckoutPrefillRequestInput,
    CheckoutPromotionConfigRequestInput,
    CheckoutQuickPayItemRequestInput,
    CheckoutRedirectsRequestInput,
    CategoryReference,
    CheckoutBuyerContactRequestInput,
    CheckoutBuyerContactRequest
} from '../declarations/types-4.js';
export type {
    DeliveryQuote,
    DeliveryQuoteResponse,
    DeliveryQuoteChoiceGroupResource,
    DeliveryQuoteExecutionLegResource,
    DeliveryRecipientRequirement,
    DeliveryQuoteLineItemResource,
    DeliveryQuoteMethodResource,
    DeliveryRecipientResource
} from '../declarations/types-18.js';
export type {
    DeliverySelectionResult,
    DeliverySelectionResultResponse,
    DeliverySelection,
    DeliverySelectionResponse,
    DeliverySelectionListResponse,
    DeliveryWindowRequest,
    DeliveryShipmentDetails,
    DeliveryWindowRequestInput,
    DeliverySelectionInstructionsRequestInput,
    DeliverySelectionRecipientRequestInput,
    DeliverySelectionChoiceResource,
    DeliverySelectionInstructionsRequest,
    DeliverySelectionLifecycleEventResource,
    DeliverySelectionRecipientRequest
} from '../declarations/types-19.js';
export type { _SdkWithoutIdempotency, Weight } from '../declarations/types-61.js';
export type {
    EffectiveDeliverySelectionResource,
    EffectiveDeliverySelectionResponse,
    ErrorRemediation,
    ExpandedCustomerSummary,
    ExpandedInvoiceSummary,
    ExpandedOrderSummary,
    ExpandedPaymentIntentSummary,
    ExpandedPaymentLinkSummary,
    Fulfillment,
    FulfillmentChargeLink,
    ExpandedPackageSummary,
    ExpandedShipmentSummary,
    ExpandedSubscriptionSummary,
    ExpandedSubscriptionPlanSummary
} from '../declarations/types-21.js';
export type { AuthMode, Address, AddressRequestInput, AddressRequest } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-12.js';
export type {
    OrderPaymentAttempt,
    OrderPaymentAttemptPaymentMethodSave,
    OrderLineItemTaxInput,
    OrderLineItemModifier,
    OrderLineSubscriptionOfferSummary,
    OrderLineSubscriptionOfferDiscount,
    OrderReturnCreditSettlement,
    OrderLineItemTax,
    OrderTax,
    OrderTaxExemption,
    OrderTaxLocation
} from '../declarations/types-37.js';
export type { MoneyValue, NextAction, MoneyValueInput } from '../declarations/types-35.js';
export type {
    PaymentAttemptGiftCardRedemption,
    PaymentErrorSummary,
    PaymentAttemptPaymentIntent,
    PaymentClientAction,
    PaymentCollection,
    PaymentCollectionStripe,
    PaymentCollectionStripeElements
} from '../declarations/types-40.js';
export type { ReadinessMerchantAccountSession, PurchasedGiftCard } from '../declarations/types-46.js';
export type {
    PendingPaymentAction,
    PendingPaymentActionSubject,
    PendingPaymentActionPaymentIntentSubject,
    PendingPaymentActionSetupPaymentSourceSubject,
    PricingAmounts,
    PaymentSourceSummary,
    PaymentSourceAchDebitSummary,
    PaymentSourceCardSummary,
    PickupFulfillmentDetails
} from '../declarations/types-43.js';
export type {
    StripePaymentClientAction,
    StripeSetupIntentClientAction,
    SettlementAmounts,
    SelectableOrderPaymentIntent,
    ServiceFulfillmentDetails,
    ShipmentFulfillmentDetails,
    SelectedProductOption,
    SubscribedLine
} from '../declarations/types-53.js';
export type {
    DeliveryAddressAdvisoryResource,
    DeliveryCandidateOutcomeResource,
    DeliveryArrivalEstimate,
    DeliveryCandidateOutcomeResourceAvailable,
    DeliveryCandidateOutcomeResourceUnavailable,
    DeliveryCandidateOutcomeResourceInputRequired,
    DeliveryCandidateOutcomeResourceCannotCalculate,
    DeliveryCandidateOutcomeResourceRequiresCheckoutContext,
    DeliveryBuyerLocationRequestInput,
    DeliveryAddressRequestInput,
    DeliveryCoordinateRequestInput,
    DeliveryBuyerLocationInputAddressInput,
    DeliveryBuyerLocationInputCoordinateInput,
    DeliveryBuyerLocationResource,
    DeliveryBuyerLocationResourceAddress,
    DeliveryBuyerLocationResourceCoordinate,
    DeliveryAddressRequest
} from '../declarations/types-14.js';
export type {
    DeliveryInputRequirement,
    DeliveryInputConstraint,
    DeliveryLocationSummaryResource,
    DeliveryMerchantDiagnostic,
    DeliveryEligibilityMismatch,
    DeliveryInventoryAssignmentRequestInput,
    DeliveryInventoryReservationSummary,
    DeliveryFulfillmentDetails,
    DeliveryInventoryAssignmentRequest
} from '../declarations/types-15.js';
export type { DeliveryOptionProjection, DeliveryPlan, DeliveryPickupDetails, DeliveryPendingCallerRateRequest } from '../declarations/types-16.js';
export type { BuyerInstructionsConfig, BuyerPauseActionOptions, BuyerPayBalanceActionOptions } from '../declarations/types-2.js';
export type { ResourceType, ResponseMeta, ResponseWarning } from '../declarations/types-48.js';
export type { LegalSettings, LocationCoordinate, LineItemInventorySnapshot, LineItemInventoryDemand } from '../declarations/types-32.js';
export type { Image } from '../declarations/types-25.js';
export type { MetadataMap, MetadataRequestInput, MetadataPatchRequestInput, MetadataPatchRequest } from '../declarations/types-34.js';
export type { SubscriptionIntervalOption } from '../declarations/types-54.js';
export type {
    ConfirmCheckoutSessionCustomerVerificationRequestInput,
    CreateCheckoutSessionRequestInput,
    CreateCheckoutSessionOrderInput,
    CreateCheckoutSessionQuickPayInput,
    CreateCheckoutSessionSubscriptionPlanInput,
    CreateCheckoutSessionCustomerVerificationRequestInput,
    CreateCheckoutSessionGiftCardPurchaseVerificationRequestInput,
    CreateCheckoutSessionSavePaymentMethodVerificationRequestInput,
    CreateCheckoutSessionUseSavedPaymentMethodsVerificationRequestInput,
    CreateCheckoutSessionConfirmSavedPaymentMethodVerificationRequestInput,
    CreateCheckoutDeliveryQuoteRequestInput
} from '../declarations/types-6.js';
export type {
    ThemeConfigRequestInput,
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
    CallerSuppliedDeliveryMethodResultRequestInput,
    CallerSuppliedDeliveryOutcomeRequestInput,
    CallerSuppliedDeliveryOutcomeRequestAvailableInput,
    CallerSuppliedDeliveryOutcomeRequestUnavailableInput,
    CallerSuppliedDeliveryOutcomeRequestCannotCalculateInput
} from '../declarations/types-3.js';
export type { CreateDeliverySelectionRequestInput, CreateDeliverySelectionChoiceRequestInput } from '../declarations/types-7.js';
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
    BuyerAction,
    BuyerCancelActionOptions,
    BuyerCancelRetentionOffer,
    BundleComponent,
    BundleComponentVariantSummary
} from '../declarations/types-1.js';
export type { FulfillmentHold, FulfillmentLineItem, FulfillmentOutcome, FulfillmentRecipient } from '../declarations/types-22.js';
export type { DigitalFulfillmentDetails, Dimensions } from '../declarations/types-20.js';
export type { InventoryRoutingSource } from '../declarations/types-27.js';
export type { GiftCardPurchaseSnapshot, GiftCardProductConfiguration, GiftCardPurchaseRecipient } from '../declarations/types-24.js';
export type { GiftCardCustomAmountBounds } from '../declarations/types-23.js';
export type {
    SubscriptionPlanLineItem,
    SubscriptionPlanSwapVariant,
    SubscriptionPlanLineItemVariant,
    SubscriptionPlanLineItemBundle,
    SubscriptionPlanLineItemCustom
} from '../declarations/types-55.js';
export type { TaxBreakdown } from '../declarations/types-56.js';
export type { UpdateCheckoutSessionRequestInput } from '../declarations/types-58.js';
export { makeAddressRequest } from '../declarations/types-61.js';
export {
    makeCallerSuppliedDeliveryMethodResultRequest,
    makeCallerSuppliedDeliveryOutcomeRequest,
    makeCallerSuppliedDeliveryOutcomeRequestAvailable,
    makeCallerSuppliedDeliveryOutcomeRequestCannotCalculate,
    makeCallerSuppliedDeliveryOutcomeRequestUnavailable,
    makeCheckoutBuyerContactRequest,
    makeCheckoutBuyerFieldsRequest,
    makeCheckoutCustomTextWriteConfig,
    makeCheckoutLegalConfigRequest,
    makeCheckoutPaymentConfigRequest,
    makeCheckoutPrefillRequest,
    makeCheckoutPromotionConfigRequest,
    makeCheckoutQuickPayItemRequest,
    makeCheckoutRedirectsRequest,
    makeCheckoutSubscriptionTermsRequest,
    makeCheckoutTaxConfigRequest,
    makeCheckoutTipConfigRequest,
    makeCloseCheckoutSessionRequest,
    makeConfirmCheckoutSessionCustomerVerificationRequest
} from '../declarations/types-62.js';
export {
    makeCreateCheckoutDeliveryQuoteRequest,
    makeCreateCheckoutSessionConfirmSavedPaymentMethodVerificationRequest,
    makeCreateCheckoutSessionCustomerVerificationRequest,
    makeCreateCheckoutSessionGiftCardPurchaseVerificationRequest,
    makeCreateCheckoutSessionOrder,
    makeCreateCheckoutSessionQuickPay,
    makeCreateCheckoutSessionRequest,
    makeCreateCheckoutSessionSavePaymentMethodVerificationRequest,
    makeCreateCheckoutSessionSubscriptionPlan,
    makeCreateCheckoutSessionUseSavedPaymentMethodsVerificationRequest,
    makeCreateDeliverySelectionChoiceRequest,
    makeCreateDeliverySelectionRequest
} from '../declarations/types-63.js';
export { makeDeliveryAddressRequest } from '../declarations/types-65.js';
export {
    makeDeliveryBuyerLocationInputAddress,
    makeDeliveryBuyerLocationInputCoordinate,
    makeDeliveryBuyerLocationRequest,
    makeDeliveryCoordinateRequest,
    makeDeliveryInventoryAssignmentRequest
} from '../declarations/types-66.js';
export {
    makeDeliveryRecipientRequirement,
    makeDeliverySelectionInstructionsRequest,
    makeDeliverySelectionRecipientRequest,
    makeDeliveryWindowRequest,
    makeDimensions
} from '../declarations/types-67.js';
export {
    makeMetadataPatchRequest,
    makeMetadataRequest,
    makeMoneyValue,
    makeOrderCalculatedChargeTax,
    makeOrderCalculatedLineItemTax,
    makeOrderLineItemTax
} from '../declarations/types-69.js';
export {
    makeSubscriptionIntervalOption,
    makeTaxCalculationRequest,
    makeTaxComponentRequest,
    makeTaxJurisdiction,
    makeTextModifierRequest,
    makeThemeConfigRequest,
    makeUpdateCheckoutSessionRequest
} from '../declarations/types-73.js';
export { makeWeight } from '../declarations/types-75.js';
export interface CheckoutSessionsResource {
    /**
 * Closes an open checkout session before it naturally expires.
 *
 * `POST /v1/checkout-sessions/{checkout_session_id}/close`
 * @param checkout_session_id Flint checkout session ID.
 * @see https://developers.withflintpay.com/docs/api/checkout-sessions#closeCheckoutSession
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.checkoutSessions.close("cs_01ARZ3NDEKTSV4RRFFQ69G5FAV", undefined, { idempotencyKey:
 * idempotencyKey })
 */
    close(checkout_session_id: InputValue<string>, params?: CheckoutSessionsCloseParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<CheckoutSession, CheckoutSessionResponse>>;
    /**
 * Checks the code the buyer typed. A right code makes the checkout act for the customer with that
 * email, and creates the customer, with a customer.created event, when none exists. The checkout
 * can then save the buyer's card with save_payment_method on `client.orders.pay`, and list and pay
 * with that customer's saved cards. The order's customer does not change until the payment
 * succeeds. Only the checkout_auth_token in the response acts for that customer. Send it as
 * Authorization: Bearer <checkout_auth_token> from then on. Every other credential for the
 * session, including earlier checkout_auth_token values and hosted checkout links, keeps working
 * for the checkout and acts for no customer, so it lists no saved cards and pays with none. A
 * buyer who opens the link on another device confirms an email there to use them, and from then on
 * only that device's new credential acts for a customer. If the response is lost after the code
 * was accepted, the credential you sent still works. Send the same code again with it while the
 * code is valid, which counts as another try and returns a new credential for the same customer,
 * or request a new code. A wrong, expired, or replaced code returns
 * CUSTOMER_VERIFICATION_CODE_INVALID, and so does a used code once the checkout was confirmed
 * again, any code after its 5th try, any code for an email past its limit on wrong tries, or a
 * code whose email's customer changed its email or was deleted after the code was sent. If the
 * checkout stops offering saved payment details before the code is confirmed, such as when the
 * merchant turns them off, the request returns 409 ACTION_NOT_ALLOWED with reason not_offered. A
 * credential that already acts for a customer gets 409 ACTION_NOT_ALLOWED with reason
 * already_applied, and confirming never replaces a customer the merchant named. Once the customer
 * whose email the buyer confirmed changes that email or is deleted, the checkout acts for no
 * customer, and the buyer can confirm the customer's new email or another one. A checkout opened
 * from a checkout reminder link acts for no customer the buyer confirmed earlier, so its buyer
 * confirms an email again. A texted code for saved details binds the checkout the same way, but
 * the new credential opens only the cards saved with that number: it lists and pays with no card
 * saved by email, and reads no customer details. A texted code checks once, so after a lost answer
 * request a new code. A code for purpose confirm_saved_payment_method keeps the session's
 * credential, so the response omits checkout_auth_token and carries payment_method_save on the
 * checkout session. A texted code saves the card with the number when the number already opens the
 * customer's saved details or the customer has none yet; otherwise
 * payment_method_save.email_confirmation_required turns true, and an emailed code finishes the
 * save. An emailed code alone saves the card by email. After success, a retry with the same
 * Idempotency-Key and code returns the stored answer and credential to any credential of the
 * session. After failure, a retry checks the code again and counts as another try.
 *
 * `POST
 * /v1/checkout-sessions/{checkout_session_id}/customer-verifications/{checkout_session_customer_verification_id}/confirm`
 * @param checkout_session_id Flint checkout session ID.
 * @param checkout_session_customer_verification_id The checkout_session_customer_verification_id
 * the code request returned.
 * @see
 * https://developers.withflintpay.com/docs/api/checkout-sessions#confirmCheckoutSessionCustomerVerification
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.checkoutSessions.confirmCustomerVerification("cs_01ARZ3NDEKTSV4RRFFQ69G5FAV",
 * "cscv_01ARZ3NDEKTSV4RRFFQ69G5FAV", {code: "123456"}, { idempotencyKey: idempotencyKey })
 */
    confirmCustomerVerification(checkout_session_id: InputValue<string>, checkout_session_customer_verification_id: InputValue<string>, params: CheckoutSessionsConfirmCustomerVerificationParams, options?: RequestOptions<"checkout">): Promise<WithResponseInfo<CheckoutSessionWithSecret, CheckoutSessionCustomerVerificationConfirmationResponse>>;
    /**
 * Creates a hosted or embedded checkout session for an order, quick-pay charge, or subscription
 * plan signup. Creation never implicitly replaces an open order session. To replace one, send
 * order_id with replace_checkout_session_id set to the expected current session; the
 * compare-and-swap replacement and collection-lock transfer commit atomically.
 *
 * `POST /v1/checkout-sessions`
 * @see https://developers.withflintpay.com/docs/api/checkout-sessions#createCheckoutSession
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.checkoutSessions.create({type: "order", order_id: "ord_01ARZ3NDEKTSV4RRFFQ69G5FAV"}, {
 * idempotencyKey: idempotencyKey })
 */
    create(params: CheckoutSessionsCreateParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<CheckoutSessionWithSecret, CheckoutSessionLaunchResponse>>;
    /**
 * Sends a six-digit code to prove the buyer controls an email address or mobile phone number, so
 * this checkout can save a card, use saved details, or confirm a saved card. Only the session's
 * own checkout credential can call it. A retry with the same Idempotency-Key returns the same code
 * request without sending another email or text. See the [headless checkout
 * guide](https://developers.withflintpay.com/docs/guides/headless-checkout) for limits, sandbox
 * codes, SMS copy, and what each answer reveals. To link guest purchases, use
 * `client.customerVerifications.create`.
 *
 * `POST /v1/checkout-sessions/{checkout_session_id}/customer-verifications`
 * @param checkout_session_id Flint checkout session ID.
 * @see
 * https://developers.withflintpay.com/docs/api/checkout-sessions#createCheckoutSessionCustomerVerification
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.checkoutSessions.createCustomerVerification("cs_01ARZ3NDEKTSV4RRFFQ69G5FAV", {email:
 * "ada@example.com", purpose: "use_saved_payment_methods"}, { idempotencyKey: idempotencyKey })
 */
    createCustomerVerification(checkout_session_id: InputValue<string>, params: CheckoutSessionsCreateCustomerVerificationParams, options?: RequestOptions<"checkout">): Promise<WithResponseInfo<CheckoutSessionCustomerVerification, CheckoutSessionCustomerVerificationResponse>>;
    /**
 * Creates an exact checkout-bound delivery quote without holding inventory.
 *
 * `POST /v1/checkout-sessions/{checkout_session_id}/delivery-quotes`
 * @param checkout_session_id Flint checkout session ID.
 * @see
 * https://developers.withflintpay.com/docs/api/delivery-quotes#createCheckoutSessionDeliveryQuote
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.checkoutSessions.createDeliveryQuote("cs_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, {
 * idempotencyKey: idempotencyKey })
 */
    createDeliveryQuote(checkout_session_id: InputValue<string>, params: CheckoutSessionsCreateDeliveryQuoteParams, options?: RequestOptions<"checkout" | "merchant">): Promise<WithResponseInfo<DeliveryQuote, DeliveryQuoteResponse>>;
    /**
 * Atomically selects one option per choice group, replaces inventory holds, and recalculates
 * checkout economics.
 *
 * `POST /v1/checkout-sessions/{checkout_session_id}/delivery-selections`
 * @param checkout_session_id Flint checkout session ID.
 * @see
 * https://developers.withflintpay.com/docs/api/delivery-selections#createCheckoutSessionDeliverySelection
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.checkoutSessions.createDeliverySelection("cs_01ARZ3NDEKTSV4RRFFQ69G5FAV", {choices:
 * [{delivery_choice_group_id: "dcgrp_01K1P6G4M7H2N8Q9R3S5T6V7WX", delivery_option_id:
 * "dopt_01K1P6G4M7H2N8Q9R3S5T6V7WX"}], delivery_quote_id: "dqt_01K1P6G4M7H2N8Q9R3S5T6V7WX",
 * expected_delivery_selection_id: null}, { idempotencyKey: idempotencyKey })
 */
    createDeliverySelection(checkout_session_id: InputValue<string>, params: CheckoutSessionsCreateDeliverySelectionParams, options?: RequestOptions<"checkout" | "merchant">): Promise<WithResponseInfo<DeliverySelectionResult, DeliverySelectionResultResponse>>;
    /**
 * Atomically clears a provisional selection, releases inventory, removes its charges, and
 * recalculates order economics.
 *
 * `DELETE /v1/checkout-sessions/{checkout_session_id}/delivery-selections/current`
 * @param checkout_session_id Flint checkout session ID.
 * @see
 * https://developers.withflintpay.com/docs/api/delivery-selections#deleteCheckoutSessionCurrentDeliverySelection
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.checkoutSessions.deleteCurrentDeliverySelection("cs_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, {
 * idempotencyKey: idempotencyKey })
 */
    deleteCurrentDeliverySelection(checkout_session_id: InputValue<string>, params?: CheckoutSessionsDeleteCurrentDeliverySelectionParams, options?: RequestOptions<"checkout" | "merchant">): Promise<WithResponseInfo<DeliverySelectionResult, DeliverySelectionResultResponse>>;
    /**
 * Returns a single checkout session by ID.
 *
 * `GET /v1/checkout-sessions/{checkout_session_id}`
 * @param checkout_session_id Flint checkout session ID.
 * @see https://developers.withflintpay.com/docs/api/checkout-sessions#getCheckoutSession
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.checkoutSessions.get("cs_01ARZ3NDEKTSV4RRFFQ69G5FAV")
 */
    get(checkout_session_id: InputValue<string>, params?: CheckoutSessionsGetParams, options?: _SdkWithoutIdempotency<RequestOptions<"checkout" | "merchant">>): Promise<WithResponseInfo<CheckoutSession, CheckoutSessionResponse>>;
    /**
 * Returns the provisional selection or the order-level committed selection effective for this
 * checkout.
 *
 * `GET /v1/checkout-sessions/{checkout_session_id}/delivery-selections/current`
 * @param checkout_session_id Flint checkout session ID.
 * @see
 * https://developers.withflintpay.com/docs/api/delivery-selections#getCheckoutSessionCurrentDeliverySelection
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.checkoutSessions.getCurrentDeliverySelection("cs_01ARZ3NDEKTSV4RRFFQ69G5FAV")
 */
    getCurrentDeliverySelection(checkout_session_id: InputValue<string>, params?: CheckoutSessionsGetCurrentDeliverySelectionParams, options?: _SdkWithoutIdempotency<RequestOptions<"checkout" | "merchant">>): Promise<WithResponseInfo<EffectiveDeliverySelectionResource, EffectiveDeliverySelectionResponse>>;
    /**
 * Returns a delivery quote for this checkout session. Checkout credentials receive the buyer view.
 *
 * `GET /v1/checkout-sessions/{checkout_session_id}/delivery-quotes/{delivery_quote_id}`
 * @param checkout_session_id Flint checkout session ID.
 * @param delivery_quote_id Flint delivery quote ID.
 * @see https://developers.withflintpay.com/docs/api/delivery-quotes#getCheckoutSessionDeliveryQuote
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.checkoutSessions.getDeliveryQuote("cs_01ARZ3NDEKTSV4RRFFQ69G5FAV",
 * "dqt_01ARZ3NDEKTSV4RRFFQ69G5FAV")
 */
    getDeliveryQuote(checkout_session_id: InputValue<string>, delivery_quote_id: InputValue<string>, params?: CheckoutSessionsGetDeliveryQuoteParams, options?: _SdkWithoutIdempotency<RequestOptions<"checkout" | "merchant">>): Promise<WithResponseInfo<DeliveryQuote, DeliveryQuoteResponse>>;
    /**
 * Returns one checkout selection with its economics, lifecycle events, and retention-aware private
 * data. While the selection is selected, the tax on its delivery charges follows the order's tax.
 *
 * `GET /v1/checkout-sessions/{checkout_session_id}/delivery-selections/{delivery_selection_id}`
 * @param checkout_session_id Flint checkout session ID.
 * @param delivery_selection_id Flint delivery selection ID.
 * @see
 * https://developers.withflintpay.com/docs/api/delivery-selections#getCheckoutSessionDeliverySelection
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.checkoutSessions.getDeliverySelection("cs_01ARZ3NDEKTSV4RRFFQ69G5FAV",
 * "dsel_01ARZ3NDEKTSV4RRFFQ69G5FAV")
 */
    getDeliverySelection(checkout_session_id: InputValue<string>, delivery_selection_id: InputValue<string>, params?: CheckoutSessionsGetDeliverySelectionParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<DeliverySelection, DeliverySelectionResponse>>;
    /**
 * Returns a checkout session's selections, newest first by created_at and delivery_selection_id,
 * with economics, lifecycle events, and retention-aware private data. Default order: created_at
 * descending, then delivery_selection_id descending.
 *
 * `GET /v1/checkout-sessions/{checkout_session_id}/delivery-selections`
 * @param checkout_session_id Flint checkout session ID.
 * @see
 * https://developers.withflintpay.com/docs/api/delivery-selections#listCheckoutSessionDeliverySelections
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.checkoutSessions.listDeliverySelections("cs_01ARZ3NDEKTSV4RRFFQ69G5FAV")
 */
    listDeliverySelections(checkout_session_id: InputValue<string>, params?: CheckoutSessionsListDeliverySelectionsParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<DeliverySelectionListResponse, DeliverySelectionListResponse>>;
    /** Iterate pages lazily.
     * @see
     * https://developers.withflintpay.com/docs/api/delivery-selections#listCheckoutSessionDeliverySelections
     */
    listDeliverySelectionsPages(checkout_session_id: InputValue<string>, params?: CheckoutSessionsListDeliverySelectionsParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<WithResponseInfo<DeliverySelectionListResponse, DeliverySelectionListResponse>>;
    /** Iterate items lazily.
     * @see
     * https://developers.withflintpay.com/docs/api/delivery-selections#listCheckoutSessionDeliverySelections
     */
    listDeliverySelectionsItems(checkout_session_id: InputValue<string>, params?: CheckoutSessionsListDeliverySelectionsParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<DeliverySelection>;
    /**
 * Returns a paginated list of checkout sessions for the authenticated merchant. Default order:
 * created_at descending, then checkout_session_id descending.
 *
 * `GET /v1/checkout-sessions`
 * @see https://developers.withflintpay.com/docs/api/checkout-sessions#listCheckoutSessions
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.checkoutSessions.list()
 */
    list(params?: CheckoutSessionsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<CheckoutSessionListResponse, CheckoutSessionListResponse>>;
    /** Iterate pages lazily.
     * @see https://developers.withflintpay.com/docs/api/checkout-sessions#listCheckoutSessions
     */
    listPages(params?: CheckoutSessionsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<WithResponseInfo<CheckoutSessionListResponse, CheckoutSessionListResponse>>;
    /** Iterate items lazily.
     * @see https://developers.withflintpay.com/docs/api/checkout-sessions#listCheckoutSessions
     */
    listItems(params?: CheckoutSessionsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<CheckoutSession>;
    /**
 * Updates the mutable fields of a checkout session. A merchant credential can update metadata and
 * external_reference_id, including after the session ends. Send external_reference_id as null to
 * clear it, or metadata as null to clear all metadata. On a session with a subscription_plan_id,
 * either credential can send subscription_terms with the buyer's billing interval and quantity
 * while the session is open and no payment is in progress; a change reprices the signup order and
 * releases the delivery selection. The session's own checkout credential can also send
 * buyer_contact and timezone while the session is open. The buyer_contact field saves the email
 * and phone the buyer entered; send a contact field as null to clear it. The timezone field
 * records the buyer's IANA time zone, which Flint uses for times in the emails it sends the buyer.
 * Saving the same values again changes nothing.
 *
 * `PATCH /v1/checkout-sessions/{checkout_session_id}`
 * @param checkout_session_id Flint checkout session ID.
 * @see https://developers.withflintpay.com/docs/api/checkout-sessions#updateCheckoutSession
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.checkoutSessions.update("cs_01ARZ3NDEKTSV4RRFFQ69G5FAV", {metadata: {campaign:
 * "spring_launch"}}, { idempotencyKey: idempotencyKey })
 */
    update(checkout_session_id: InputValue<string>, params: CheckoutSessionsUpdateParams, options?: RequestOptions<"checkout" | "merchant">): Promise<WithResponseInfo<CheckoutSession, CheckoutSessionResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly checkoutSessions: CheckoutSessionsResource;
}
