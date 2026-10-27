import type { InputValue } from '../runtime.js';
import type {
    CheckoutSession,
    CheckoutSessionCustomerVerification,
    CheckoutSessionCustomerVerificationResponse,
    CheckoutSessionListResponse,
    CheckoutSessionResponse,
    CheckoutSessionWithSecret,
    CheckoutSessionsCloseSessionInput,
    CheckoutSessionsConfirmCustomerVerificationInput,
    CheckoutSessionsCreateCustomerVerificationInput,
    CheckoutSessionsCreateDeliveryQuoteInput,
    CheckoutSessionsCreateDeliverySelectionInput,
    CheckoutSessionsCreateInput,
    CheckoutSessionsDeleteCurrentDeliverySelectionInput,
    CheckoutSessionsGetCurrentDeliverySelectionInput,
    CheckoutSessionsGetDeliveryQuoteInput,
    CheckoutSessionsGetDeliverySelectionHistoryInput,
    CheckoutSessionsGetInput,
    CheckoutSessionsListInput,
    CheckoutSessionsUpdateInput,
    ClientOptions,
    CloseCheckoutSessionRequestInput
} from '../declarations/types-4.js';
import type {
    ConfirmCheckoutSessionCustomerVerificationRequestInput,
    CreateCheckoutDeliveryQuoteRequestInput,
    CreateCheckoutSessionRequestInput
} from '../declarations/types-5.js';
import type { CreateDeliverySelectionRequestInput } from '../declarations/types-6.js';
import type { DeliveryQuote, DeliveryQuoteResponse } from '../declarations/types-14.js';
import type {
    DeliverySelection,
    DeliverySelectionResponse,
    DeliverySelectionResult,
    DeliverySelectionResultResponse
} from '../declarations/types-15.js';
import type { EffectiveDeliverySelectionResource, EffectiveDeliverySelectionResponse } from '../declarations/types-16.js';
import type { RequestOptions, ResolvePaymentLinkResponse } from '../declarations/types-40.js';
import type { SdkResponse } from '../declarations/types-44.js';
import type { UpdateCheckoutSessionRequestInput } from '../declarations/types-47.js';
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
export type {
    CloseCheckoutSessionRequestInput,
    CheckoutSession,
    CheckoutSessionResponse,
    CheckoutSessionWithSecret,
    CheckoutSessionsCreateCustomerVerificationInput,
    CheckoutSessionCustomerVerification,
    CheckoutSessionCustomerVerificationResponse,
    CheckoutSessionListResponse,
    CheckoutSessionsCloseSessionInput,
    CheckoutSessionsConfirmCustomerVerificationInput,
    CheckoutSessionsCreateInput,
    CheckoutSessionsCreateDeliveryQuoteInput,
    CheckoutSessionsCreateDeliverySelectionInput,
    CheckoutSessionsDeleteCurrentDeliverySelectionInput,
    CheckoutSessionsGetInput,
    CheckoutSessionsGetCurrentDeliverySelectionInput,
    CheckoutSessionsGetDeliveryQuoteInput,
    CheckoutSessionsGetDeliverySelectionHistoryInput,
    CheckoutSessionsListInput,
    CheckoutSessionsUpdateInput,
    ClientOptions,
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
    CheckoutTipConfig,
    CheckoutLegalConfigRequestInput,
    CheckoutPaymentConfigRequestInput,
    CheckoutPrefillRequestInput,
    CheckoutPromotionConfigInput,
    CheckoutQuickPayItemRequestInput,
    CheckoutRedirectsRequestInput,
    CheckoutSubscriptionTermsRequestInput,
    CheckoutTaxConfigInput,
    CheckoutTipConfigInput,
    CheckoutTaxConfig
} from '../declarations/types-4.js';
export type {
    RequestOptions,
    ResolvePaymentLinkResponse,
    ResourceReference,
    ResourceType,
    ResponseMeta,
    ResponseWarning
} from '../declarations/types-40.js';
export type {
    SdkResponse,
    StripePaymentClientAction,
    StripeSetupIntentClientAction,
    SettlementAmounts,
    SelectableOrderPaymentIntent,
    ServiceFulfillmentDetails,
    ShipmentFulfillmentDetails,
    SelectedProductOption,
    SubscribedLine
} from '../declarations/types-44.js';
export type {
    ConfirmCheckoutSessionCustomerVerificationRequestInput,
    CreateCheckoutSessionRequestInput,
    CreateCheckoutDeliveryQuoteRequestInput,
    CreateCheckoutSessionCustomerVerificationRequestInput,
    CreateCheckoutSessionGiftCardPurchaseVerificationRequestInput,
    CreateCheckoutSessionSavePaymentMethodVerificationRequestInput,
    CreateCheckoutSessionUseSavedPaymentMethodsVerificationRequestInput,
    CreateCheckoutSessionConfirmSavedPaymentMethodVerificationRequestInput
} from '../declarations/types-5.js';
export type {
    DeliveryQuote,
    DeliveryQuoteResponse,
    DeliveryQuoteChoiceGroupResource,
    DeliveryQuoteExecutionLegResource,
    DeliveryRecipientRequirement,
    DeliveryQuoteLineItemResource,
    DeliveryQuoteMethodResource,
    DeliveryRecipientResource
} from '../declarations/types-14.js';
export type { CreateDeliverySelectionRequestInput, CreateDeliverySelectionChoiceRequestInput } from '../declarations/types-6.js';
export type {
    DeliverySelectionResult,
    DeliverySelectionResultResponse,
    DeliverySelection,
    DeliverySelectionResponse,
    DeliveryWindowRequest,
    DeliveryShipmentDetails,
    DeliveryWindowRequestInput,
    DeliverySelectionInstructionsRequestInput,
    DeliverySelectionRecipientRequestInput,
    DeliverySelectionChoiceResource,
    DeliverySelectionInstructionsRequest,
    DeliverySelectionLifecycleEventResource,
    DeliverySelectionRecipientRequest
} from '../declarations/types-15.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-62.js';
export type {
    EffectiveDeliverySelectionResource,
    EffectiveDeliverySelectionResponse,
    ErrorRemediation,
    ExpandedCustomerSummary,
    ExpandedInvoiceSummary,
    ExpandedOrderSummary,
    ExpandedPaymentIntentSummary,
    ExpandedPaymentLinkSummary,
    DigitalFulfillmentDetails,
    ExpandedPackageSummary,
    Dimensions
} from '../declarations/types-16.js';
export type {
    UpdateCheckoutSessionRequestInput,
    ThemeConfigRequestInput,
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
export type {
    AuthMode,
    Address,
    AddressRequestInput,
    BundleComponent,
    BundleComponentVariantSummary,
    AddressRequest
} from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-9.js';
export type {
    OrderPaymentAttempt,
    OrderPaymentAttemptPaymentMethodSave,
    OrderLineItemTaxInput,
    Order,
    OrderAuthorizationAmounts,
    OrderCharge,
    OrderCalculatedChargeTax,
    OrderDeliveryDestination,
    OrderDeliveryDestinationAddress,
    OrderDeliveryDestinationRecipient,
    OrderDiscount,
    OrderLineItemModifier,
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
    OrderLineItemTax
} from '../declarations/types-32.js';
export type { MoneyValue, NextAction, NextActionMerchantAccountSession, MoneyValueInput } from '../declarations/types-31.js';
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
    PendingPaymentAction,
    PendingPaymentActionSubject,
    PendingPaymentActionPaymentIntentSubject,
    PendingPaymentActionSetupPaymentSourceSubject,
    PricingAmounts,
    PickupFulfillmentDetails
} from '../declarations/types-37.js';
export type {
    CheckoutBuyerContact,
    CheckoutBuyerFields,
    CheckoutCustomTextConfig,
    CheckoutCustomerPrefill,
    CheckoutBuyerFieldsInput,
    CheckoutCustomTextWriteConfigInput,
    CallerSuppliedDeliveryMethodResultRequestInput,
    CallerSuppliedDeliveryOutcomeRequestInput,
    CallerSuppliedDeliveryOutcomeRequestAvailableInput,
    CallerSuppliedDeliveryOutcomeRequestUnavailableInput,
    CallerSuppliedDeliveryOutcomeRequestCannotCalculateInput,
    CategoryReference,
    CheckoutBuyerContactRequestInput,
    CheckoutBuyerContactRequest
} from '../declarations/types-3.js';
export type {
    DeliveryAddressAdvisoryResource,
    DeliveryAddressRequest,
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
    DeliveryBuyerLocationRequest,
    DeliveryBuyerLocationInputAddress,
    DeliveryBuyerLocationInputCoordinate
} from '../declarations/types-11.js';
export type {
    DeliveryInputRequirement,
    DeliveryInputConstraint,
    DeliveryOptionProjection,
    DeliveryPlan,
    DeliveryPickupDetails,
    DeliveryLocationSummaryResource,
    DeliveryMerchantDiagnostic,
    DeliveryEligibilityMismatch,
    DeliveryInventoryAssignmentRequestInput,
    DeliveryPendingCallerRateRequest,
    DeliveryInventoryReservationSummary,
    DeliveryFulfillmentDetails
} from '../declarations/types-12.js';
export type {
    BuyerInstructionsConfig,
    BuyerAction,
    BuyerCancelActionOptions,
    BuyerCancelRetentionOffer,
    BuyerPauseActionOptions,
    BuyerPayBalanceActionOptions
} from '../declarations/types-1.js';
export type { LegalSettings, LineItemInventorySnapshot, LineItemInventoryDemand } from '../declarations/types-28.js';
export type { Image, GiftCardPurchaseSnapshot, GiftCardProductConfiguration, GiftCardPurchaseRecipient } from '../declarations/types-19.js';
export type { PaymentSourceSummary, PaymentSourceAchDebitSummary, PaymentSourceCardSummary } from '../declarations/types-36.js';
export type { SubscriptionIntervalOption } from '../declarations/types-45.js';
export type { LocationCoordinate } from '../declarations/types-29.js';
export type {
    Fulfillment,
    FulfillmentHold,
    FulfillmentChargeLink,
    FulfillmentLineItem,
    FulfillmentOutcome,
    FulfillmentRecipient,
    ExpandedShipmentSummary,
    ExpandedSubscriptionSummary,
    ExpandedSubscriptionPlanSummary
} from '../declarations/types-17.js';
export type { InventoryRoutingSource } from '../declarations/types-25.js';
export type { GiftCardCustomAmountBounds } from '../declarations/types-18.js';
export type { PurchasedGiftCard } from '../declarations/types-39.js';
export type { Weight } from '../declarations/types-61.js';
export type { OrderReturnCreditSettlement, OrderTax, OrderTaxExemption, OrderTaxLocation } from '../declarations/types-33.js';
export type { SubscriptionPlanLineItem, SubscriptionPlanSwapVariant } from '../declarations/types-46.js';
export {
    makeAddressRequest,
    makeBuyerInstructionsConfig,
    makeCallerSuppliedDeliveryMethodResultRequest,
    makeCallerSuppliedDeliveryOutcomeRequest,
    makeCallerSuppliedDeliveryOutcomeRequestAvailable,
    makeCallerSuppliedDeliveryOutcomeRequestCannotCalculate,
    makeCallerSuppliedDeliveryOutcomeRequestUnavailable,
    makeCheckoutBuyerContactRequest,
    makeCheckoutBuyerFields,
    makeCheckoutCustomTextWriteConfig,
    makeCheckoutLegalConfigRequest,
    makeCheckoutPaymentConfigRequest,
    makeCheckoutPrefillRequest,
    makeCheckoutPromotionConfig,
    makeCheckoutQuickPayItemRequest,
    makeCheckoutRedirectsRequest,
    makeCheckoutSubscriptionTermsRequest,
    makeCheckoutTaxConfig,
    makeCheckoutTipConfig
} from '../declarations/types-62.js';
export {
    makeCloseCheckoutSessionRequest,
    makeConfirmCheckoutSessionCustomerVerificationRequest,
    makeCreateCheckoutDeliveryQuoteRequest,
    makeCreateCheckoutSessionConfirmSavedPaymentMethodVerificationRequest,
    makeCreateCheckoutSessionCustomerVerificationRequest,
    makeCreateCheckoutSessionGiftCardPurchaseVerificationRequest,
    makeCreateCheckoutSessionRequest,
    makeCreateCheckoutSessionSavePaymentMethodVerificationRequest,
    makeCreateCheckoutSessionUseSavedPaymentMethodsVerificationRequest,
    makeCreateDeliverySelectionChoiceRequest,
    makeCreateDeliverySelectionRequest
} from '../declarations/types-63.js';
export {
    makeDeliveryAddressRequest,
    makeDeliveryBuyerLocationInputAddress,
    makeDeliveryBuyerLocationInputCoordinate,
    makeDeliveryBuyerLocationRequest,
    makeDeliveryCoordinateRequest,
    makeDeliveryInventoryAssignmentRequest
} from '../declarations/types-65.js';
export {
    makeDeliveryRecipientRequirement,
    makeDeliverySelectionInstructionsRequest,
    makeDeliverySelectionRecipientRequest,
    makeDeliveryWindowRequest,
    makeDimensions
} from '../declarations/types-66.js';
export { makeGiftCardCustomAmountBounds, makeGiftCardProductConfiguration } from '../declarations/types-67.js';
export { makeLocationCoordinate, makeMoneyValue, makeOrderCalculatedChargeTax } from '../declarations/types-68.js';
export { makeOrderCalculatedLineItemTax, makeOrderLineItemTax } from '../declarations/types-69.js';
export {
    makeSubscriptionIntervalOption,
    makeTaxCalculationRequest,
    makeTaxComponentRequest,
    makeTaxJurisdiction,
    makeTextModifierRequest,
    makeThemeConfigRequest,
    makeUpdateCheckoutSessionRequest
} from '../declarations/types-72.js';
export { makeWeight } from '../declarations/types-73.js';
export interface CheckoutSessionsResource {
    /**
 * Closes an open checkout session before it naturally expires.
 * @see reference/checkoutSessions.md#checkoutsessionsclosesession
 * POST /v1/checkout-sessions/{checkout_session_id}/close
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.checkoutSessions.closeSession("example", undefined, { idempotencyKey: idempotencyKey })
 */
    closeSession(checkout_session_id: InputValue<string>, params?: (InputValue<CloseCheckoutSessionRequestInput>
        | {
        "expected_version"?: never;
        "reason_message"?: never;
    })
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<CheckoutSession>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/checkoutSessions.md#checkoutsessionsclosesession
     */
    closeSessionWithResponse(checkout_session_id: InputValue<string>, params?: (InputValue<CloseCheckoutSessionRequestInput>
        | {
        "expected_version"?: never;
        "reason_message"?: never;
    })
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<CheckoutSessionResponse>>;
    /**
 * Checks the code the buyer typed. A right code makes the checkout act for the customer with that
 * email, and creates the customer, with a customer.created event, when none exists. The checkout
 * can then save the buyer's card with save_payment_method on POST /v1/orders/{order_id}/pay, and
 * list and pay with that customer's saved cards. The order's customer does not change until the
 * payment succeeds. Only the checkout_auth_token in the response acts for that customer. Send it
 * as Authorization: Bearer <checkout_auth_token> from then on. Every other credential for the
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
 * merchant turns them off, the request returns CUSTOMER_VERIFICATION_NOT_OFFERED. A credential
 * that already acts for a customer gets CHECKOUT_CUSTOMER_ALREADY_AUTHORIZED, and confirming never
 * replaces a customer the merchant named. Once the customer whose email the buyer confirmed
 * changes that email or is deleted, the checkout acts for no customer, and the buyer can confirm
 * the customer's new email or another one. A checkout opened from a checkout reminder link acts
 * for no customer the buyer confirmed earlier, so its buyer confirms an email again. A texted code
 * for saved details binds the checkout the same way, but the new credential opens only the cards
 * saved with that number: it lists and pays with no card saved by email, and reads no customer
 * details. A texted code checks once, so after a lost answer request a new code. A code for
 * purpose confirm_saved_payment_method keeps the session's credential, so the response omits
 * checkout_auth_token and carries payment_method_save on the checkout session. A texted code saves
 * the card with the number when the number already opens the customer's saved details or the
 * customer has none yet; otherwise payment_method_save.email_confirmation_required turns true, and
 * an emailed code finishes the save. An emailed code alone saves the card by email. After success,
 * a retry with the same Idempotency-Key and code returns the stored answer and credential to any
 * credential of the session. After failure, a retry checks the code again and counts as another
 * try.
 * @see reference/checkoutSessions.md#checkoutsessionsconfirmcustomerverification
 * POST
 * /v1/checkout-sessions/{checkout_session_id}/customer-verifications/{checkout_session_customer_verification_id}/confirm
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.checkoutSessions.confirmCustomerVerification("cs_example", "cver_example", {code:
 * "123456"}, { idempotencyKey: idempotencyKey })
 */
    confirmCustomerVerification(checkout_session_id: InputValue<string>, checkout_session_customer_verification_id: InputValue<string>, params: (InputValue<ConfirmCheckoutSessionCustomerVerificationRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"checkout">): Promise<CheckoutSessionWithSecret>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/checkoutSessions.md#checkoutsessionsconfirmcustomerverification
     */
    confirmCustomerVerificationWithResponse(checkout_session_id: InputValue<string>, checkout_session_customer_verification_id: InputValue<string>, params: (InputValue<ConfirmCheckoutSessionCustomerVerificationRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"checkout">): Promise<SdkResponse<ResolvePaymentLinkResponse>>;
    /**
 * Creates a hosted or embedded checkout session for an order, quick-pay charge, or subscription
 * plan signup. Creation never implicitly replaces an open order session. To replace one, send
 * order_id with replace_checkout_session_id set to the expected current session; the
 * compare-and-swap replacement and collection-lock transfer commit atomically.
 * @see reference/checkoutSessions.md#checkoutsessionscreate
 * POST /v1/checkout-sessions
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.checkoutSessions.create({type: "order", order_id: "example"}, { idempotencyKey:
 * idempotencyKey })
 */
    create(params: (InputValue<CreateCheckoutSessionRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<CheckoutSessionWithSecret>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/checkoutSessions.md#checkoutsessionscreate
     */
    createWithResponse(params: (InputValue<CreateCheckoutSessionRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<ResolvePaymentLinkResponse>>;
    /**
 * Sends a six-digit code to prove the buyer controls an email address or mobile phone number, so
 * this checkout can save a card, use saved details, or confirm a saved card. Only the session's
 * own checkout credential can call it. A retry with the same Idempotency-Key returns the same code
 * request without sending another email or text. See the [headless checkout
 * guide](https://developers.withflintpay.com/docs/guides/headless-checkout) for limits, sandbox
 * codes, SMS copy, and what each answer reveals. To link guest purchases, use POST
 * /v1/customer-verifications.
 * @see reference/checkoutSessions.md#checkoutsessionscreatecustomerverification
 * POST /v1/checkout-sessions/{checkout_session_id}/customer-verifications
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.checkoutSessions.createCustomerVerification({checkout_session_id: "example", body:
 * {purpose: "gift_card_purchase", email: "example@example.invalid"}}, { idempotencyKey:
 * idempotencyKey })
 */
    createCustomerVerification(input: CheckoutSessionsCreateCustomerVerificationInput, options?: RequestOptions<"checkout">): Promise<CheckoutSessionCustomerVerification>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/checkoutSessions.md#checkoutsessionscreatecustomerverification
     */
    createCustomerVerificationWithResponse(input: CheckoutSessionsCreateCustomerVerificationInput, options?: RequestOptions<"checkout">): Promise<SdkResponse<CheckoutSessionCustomerVerificationResponse>>;
    /**
 * Creates an exact checkout-bound delivery quote without holding inventory.
 * @see reference/checkoutSessions.md#checkoutsessionscreatedeliveryquote
 * POST /v1/checkout-sessions/{checkout_session_id}/delivery-quotes
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.checkoutSessions.createDeliveryQuote("example", {expected_delivery_selection_id:
 * "example"}, { idempotencyKey: idempotencyKey })
 */
    createDeliveryQuote(checkout_session_id: InputValue<string>, params: (InputValue<CreateCheckoutDeliveryQuoteRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"checkout" | "merchant">): Promise<DeliveryQuote>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/checkoutSessions.md#checkoutsessionscreatedeliveryquote
     */
    createDeliveryQuoteWithResponse(checkout_session_id: InputValue<string>, params: (InputValue<CreateCheckoutDeliveryQuoteRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"checkout" | "merchant">): Promise<SdkResponse<DeliveryQuoteResponse>>;
    /**
 * Atomically selects one option per choice group, replaces inventory holds, and recalculates
 * checkout economics.
 * @see reference/checkoutSessions.md#checkoutsessionscreatedeliveryselection
 * POST /v1/checkout-sessions/{checkout_session_id}/delivery-selections
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.checkoutSessions.createDeliverySelection("example", {choices: [], delivery_quote_id:
 * "example", expected_delivery_selection_id: "example"}, { idempotencyKey: idempotencyKey })
 */
    createDeliverySelection(checkout_session_id: InputValue<string>, params: (InputValue<CreateDeliverySelectionRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"checkout" | "merchant">): Promise<DeliverySelectionResult>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/checkoutSessions.md#checkoutsessionscreatedeliveryselection
     */
    createDeliverySelectionWithResponse(checkout_session_id: InputValue<string>, params: (InputValue<CreateDeliverySelectionRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"checkout" | "merchant">): Promise<SdkResponse<DeliverySelectionResultResponse>>;
    /**
 * Atomically clears a provisional selection, releases inventory, removes its charges, and
 * recalculates order economics.
 * @see reference/checkoutSessions.md#checkoutsessionsdeletecurrentdeliveryselection
 * DELETE /v1/checkout-sessions/{checkout_session_id}/delivery-selections/current
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.checkoutSessions.deleteCurrentDeliverySelection("example",
 * {expected_delivery_selection_id: "example"}, { idempotencyKey: idempotencyKey })
 */
    deleteCurrentDeliverySelection(checkout_session_id: InputValue<string>, params: {
        "expected_delivery_selection_id": InputValue<string>;
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"checkout" | "merchant">): Promise<DeliverySelectionResult>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/checkoutSessions.md#checkoutsessionsdeletecurrentdeliveryselection
     */
    deleteCurrentDeliverySelectionWithResponse(checkout_session_id: InputValue<string>, params: {
        "expected_delivery_selection_id": InputValue<string>;
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"checkout" | "merchant">): Promise<SdkResponse<DeliverySelectionResultResponse>>;
    /**
 * Returns a single checkout session by ID.
 * @see reference/checkoutSessions.md#checkoutsessionsget
 * GET /v1/checkout-sessions/{checkout_session_id}
 * @example
 * client.checkoutSessions.get("example")
 */
    get(checkout_session_id: InputValue<string>, params?: {
        "expand"?: InputValue<Array<"customer" | "invoice" | "order" | "payment_intents" | "payment_link">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"checkout" | "merchant">>): Promise<CheckoutSession>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/checkoutSessions.md#checkoutsessionsget
     */
    getWithResponse(checkout_session_id: InputValue<string>, params?: {
        "expand"?: InputValue<Array<"customer" | "invoice" | "order" | "payment_intents" | "payment_link">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"checkout" | "merchant">>): Promise<SdkResponse<CheckoutSessionResponse>>;
    /**
 * Returns the provisional selection or the order-level committed selection effective for this
 * checkout.
 * @see reference/checkoutSessions.md#checkoutsessionsgetcurrentdeliveryselection
 * GET /v1/checkout-sessions/{checkout_session_id}/delivery-selections/current
 * @example
 * client.checkoutSessions.getCurrentDeliverySelection("example")
 */
    getCurrentDeliverySelection(checkout_session_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"checkout" | "merchant">>): Promise<EffectiveDeliverySelectionResource>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/checkoutSessions.md#checkoutsessionsgetcurrentdeliveryselection
     */
    getCurrentDeliverySelectionWithResponse(checkout_session_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"checkout" | "merchant">>): Promise<SdkResponse<EffectiveDeliverySelectionResponse>>;
    /**
 * Returns a delivery quote for this checkout session. Checkout credentials receive the buyer view.
 * @see reference/checkoutSessions.md#checkoutsessionsgetdeliveryquote
 * GET /v1/checkout-sessions/{checkout_session_id}/delivery-quotes/{delivery_quote_id}
 * @example
 * client.checkoutSessions.getDeliveryQuote("example", "example")
 */
    getDeliveryQuote(checkout_session_id: InputValue<string>, delivery_quote_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"checkout" | "merchant">>): Promise<DeliveryQuote>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/checkoutSessions.md#checkoutsessionsgetdeliveryquote
     */
    getDeliveryQuoteWithResponse(checkout_session_id: InputValue<string>, delivery_quote_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"checkout" | "merchant">>): Promise<SdkResponse<DeliveryQuoteResponse>>;
    /**
 * Returns one checkout selection with its economics, lifecycle events, and retention-aware private
 * data. While the selection is selected, the tax on its delivery charges follows the order's tax.
 * @see reference/checkoutSessions.md#checkoutsessionsgetdeliveryselectionhistory
 * GET /v1/checkout-sessions/{checkout_session_id}/delivery-selections/{delivery_selection_id}
 * @example
 * client.checkoutSessions.getDeliverySelectionHistory("example", "example")
 */
    getDeliverySelectionHistory(checkout_session_id: InputValue<string>, delivery_selection_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<DeliverySelection>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/checkoutSessions.md#checkoutsessionsgetdeliveryselectionhistory
     */
    getDeliverySelectionHistoryWithResponse(checkout_session_id: InputValue<string>, delivery_selection_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<DeliverySelectionResponse>>;
    /**
 * Returns a paginated list of checkout sessions for the authenticated merchant.
 * @see reference/checkoutSessions.md#checkoutsessionslist
 * GET /v1/checkout-sessions
 * @example
 * client.checkoutSessions.list()
 */
    list(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "status"?: InputValue<Array<"open" | "paid" | "partially_paid" | "expired" | "closed" | "invalidated">>;
        "order_id"?: InputValue<string>;
        "payment_link_id"?: InputValue<string>;
        "customer_id"?: InputValue<string>;
        "subscription_plan_id"?: InputValue<string>;
        "invoice_id"?: InputValue<string>;
        "surface"?: InputValue<Array<"hosted" | "embedded">>;
        "type"?: InputValue<Array<"order" | "quick_pay" | "subscription_plan" | "invoice" | "payment_link">>;
        "external_reference_id"?: InputValue<string>;
        "query"?: InputValue<string>;
        "sort_by"?: InputValue<"created_at" | "updated_at">;
        "sort_direction"?: InputValue<"asc" | "desc">;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
        "expires_after"?: InputValue<string | globalThis.Date>;
        "expires_before"?: InputValue<string | globalThis.Date>;
        "expand"?: InputValue<Array<"customer" | "invoice" | "order" | "payment_link">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<CheckoutSessionListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/checkoutSessions.md#checkoutsessionslist
     */
    listWithResponse(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "status"?: InputValue<Array<"open" | "paid" | "partially_paid" | "expired" | "closed" | "invalidated">>;
        "order_id"?: InputValue<string>;
        "payment_link_id"?: InputValue<string>;
        "customer_id"?: InputValue<string>;
        "subscription_plan_id"?: InputValue<string>;
        "invoice_id"?: InputValue<string>;
        "surface"?: InputValue<Array<"hosted" | "embedded">>;
        "type"?: InputValue<Array<"order" | "quick_pay" | "subscription_plan" | "invoice" | "payment_link">>;
        "external_reference_id"?: InputValue<string>;
        "query"?: InputValue<string>;
        "sort_by"?: InputValue<"created_at" | "updated_at">;
        "sort_direction"?: InputValue<"asc" | "desc">;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
        "expires_after"?: InputValue<string | globalThis.Date>;
        "expires_before"?: InputValue<string | globalThis.Date>;
        "expand"?: InputValue<Array<"customer" | "invoice" | "order" | "payment_link">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<CheckoutSessionListResponse>>;
    /** Iterate pages lazily.
     * @see reference/checkoutSessions.md#checkoutsessionslist
     */
    listPages(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "status"?: InputValue<Array<"open" | "paid" | "partially_paid" | "expired" | "closed" | "invalidated">>;
        "order_id"?: InputValue<string>;
        "payment_link_id"?: InputValue<string>;
        "customer_id"?: InputValue<string>;
        "subscription_plan_id"?: InputValue<string>;
        "invoice_id"?: InputValue<string>;
        "surface"?: InputValue<Array<"hosted" | "embedded">>;
        "type"?: InputValue<Array<"order" | "quick_pay" | "subscription_plan" | "invoice" | "payment_link">>;
        "external_reference_id"?: InputValue<string>;
        "query"?: InputValue<string>;
        "sort_by"?: InputValue<"created_at" | "updated_at">;
        "sort_direction"?: InputValue<"asc" | "desc">;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
        "expires_after"?: InputValue<string | globalThis.Date>;
        "expires_before"?: InputValue<string | globalThis.Date>;
        "expand"?: InputValue<Array<"customer" | "invoice" | "order" | "payment_link">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<CheckoutSessionListResponse>;
    /** Iterate complete page bodies with HTTP metadata.
     * @see reference/checkoutSessions.md#checkoutsessionslist
     */
    listPagesWithResponse(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "status"?: InputValue<Array<"open" | "paid" | "partially_paid" | "expired" | "closed" | "invalidated">>;
        "order_id"?: InputValue<string>;
        "payment_link_id"?: InputValue<string>;
        "customer_id"?: InputValue<string>;
        "subscription_plan_id"?: InputValue<string>;
        "invoice_id"?: InputValue<string>;
        "surface"?: InputValue<Array<"hosted" | "embedded">>;
        "type"?: InputValue<Array<"order" | "quick_pay" | "subscription_plan" | "invoice" | "payment_link">>;
        "external_reference_id"?: InputValue<string>;
        "query"?: InputValue<string>;
        "sort_by"?: InputValue<"created_at" | "updated_at">;
        "sort_direction"?: InputValue<"asc" | "desc">;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
        "expires_after"?: InputValue<string | globalThis.Date>;
        "expires_before"?: InputValue<string | globalThis.Date>;
        "expand"?: InputValue<Array<"customer" | "invoice" | "order" | "payment_link">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<SdkResponse<CheckoutSessionListResponse>>;
    /** Iterate items lazily.
     * @see reference/checkoutSessions.md#checkoutsessionslist
     */
    listItems(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "status"?: InputValue<Array<"open" | "paid" | "partially_paid" | "expired" | "closed" | "invalidated">>;
        "order_id"?: InputValue<string>;
        "payment_link_id"?: InputValue<string>;
        "customer_id"?: InputValue<string>;
        "subscription_plan_id"?: InputValue<string>;
        "invoice_id"?: InputValue<string>;
        "surface"?: InputValue<Array<"hosted" | "embedded">>;
        "type"?: InputValue<Array<"order" | "quick_pay" | "subscription_plan" | "invoice" | "payment_link">>;
        "external_reference_id"?: InputValue<string>;
        "query"?: InputValue<string>;
        "sort_by"?: InputValue<"created_at" | "updated_at">;
        "sort_direction"?: InputValue<"asc" | "desc">;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
        "expires_after"?: InputValue<string | globalThis.Date>;
        "expires_before"?: InputValue<string | globalThis.Date>;
        "expand"?: InputValue<Array<"customer" | "invoice" | "order" | "payment_link">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<CheckoutSession>;
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
 * @see reference/checkoutSessions.md#checkoutsessionsupdate
 * PATCH /v1/checkout-sessions/{checkout_session_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.checkoutSessions.update("example", {}, { idempotencyKey: idempotencyKey })
 */
    update(checkout_session_id: InputValue<string>, params: (InputValue<UpdateCheckoutSessionRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"checkout" | "merchant">): Promise<CheckoutSession>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/checkoutSessions.md#checkoutsessionsupdate
     */
    updateWithResponse(checkout_session_id: InputValue<string>, params: (InputValue<UpdateCheckoutSessionRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"checkout" | "merchant">): Promise<SdkResponse<CheckoutSessionResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly checkoutSessions: CheckoutSessionsResource;
}
