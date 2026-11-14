import type { WithResponseInfo, InputValue } from '../runtime.js';
import type {
    CheckoutSession,
    CheckoutSessionCustomerVerification,
    CheckoutSessionCustomerVerificationConfirmationResponse,
    CheckoutSessionCustomerVerificationListResponse,
    CheckoutSessionCustomerVerificationResponse,
    CheckoutSessionLaunchResponse,
    CheckoutSessionListResponse,
    CheckoutSessionResponse,
    CheckoutSessionWithSecret,
    CheckoutSessionsCloseParams,
    CheckoutSessionsConfirmCustomerVerificationParams,
    CheckoutSessionsCreateCustomerVerificationParams,
    CheckoutSessionsCreateParams,
    CheckoutSessionsGetCustomerVerificationParams,
    CheckoutSessionsGetParams,
    CheckoutSessionsListCustomerVerificationsParams,
    CheckoutSessionsListParams,
    CheckoutSessionsUpdateParams,
    ClientOptions
} from '../declarations/types-6.js';
import type { RequestOptions } from '../declarations/types-54.js';
import type { _SdkWithoutIdempotency } from '../declarations/types-70.js';
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
    CheckoutSession,
    CheckoutSessionResponse,
    CheckoutSessionsConfirmCustomerVerificationParams,
    CheckoutSessionWithSecret,
    CheckoutSessionCustomerVerificationConfirmationResponse,
    CheckoutSessionsCreateParams,
    CheckoutSessionLaunchResponse,
    CheckoutSessionsCreateCustomerVerificationParams,
    CheckoutSessionCustomerVerification,
    CheckoutSessionCustomerVerificationResponse,
    CheckoutSessionsGetParams,
    CheckoutSessionsGetCustomerVerificationParams,
    CheckoutSessionsListCustomerVerificationsParams,
    CheckoutSessionCustomerVerificationListResponse,
    CheckoutSessionsListParams,
    CheckoutSessionListResponse,
    CheckoutSessionsUpdateParams,
    ClientOptions,
    CloseCheckoutSessionRequestInput,
    CheckoutSessionPlatformFee,
    CheckoutRedirects,
    CheckoutSubscriptionTerms,
    CheckoutSubscriptionRecurringShipping,
    CheckoutSessionTax,
    CheckoutTaxCalculation,
    CheckoutTheme,
    CheckoutTipConfig,
    CheckoutRedirectsRequestInput,
    CheckoutSubscriptionTermsRequestInput,
    CheckoutTaxConfigRequestInput,
    CheckoutTaxCalculationRequestInput,
    CheckoutTipConfigRequestInput,
    CloseCheckoutSessionRequest
} from '../declarations/types-6.js';
export type { RequestOptions, ResourceReference, ResponseMeta, ResponseWarning } from '../declarations/types-54.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-70.js';
export type { AuthMode } from '../declarations/types-1.js';
export type { Credentials } from '../declarations/types-14.js';
export type {
    OrderPaymentAttempt,
    OrderPaymentAttemptPaymentMethodSave,
    OrderSettlementAmounts,
    OrderLineItemTaxRequestInput
} from '../declarations/types-41.js';
export type { MoneyValue, NextAction, MoneyValueInput } from '../declarations/types-39.js';
export type {
    PaymentAttemptGiftCardRedemption,
    PaymentErrorSummary,
    PaymentAttemptPaymentIntent,
    PaymentClientAction,
    PaymentClientActionURL,
    PaymentClientActionStripe,
    PaymentCollection,
    PaymentCollectionStripe,
    PaymentCollectionStripeElements
} from '../declarations/types-44.js';
export type {
    ErrorRemediation,
    ExpandedCustomerSummary,
    ExpandedInvoiceSummary,
    ExpandedOrderSummary,
    ExpandedPaymentIntentSummary,
    ExpandedPaymentLinkSummary
} from '../declarations/types-24.js';
export type { ReadinessMerchantAccountSession } from '../declarations/types-52.js';
export type {
    PendingPaymentAction,
    PendingPaymentActionSubject,
    PendingPaymentActionPaymentIntentSubject,
    PendingPaymentActionSetupPaymentSourceSubject,
    PricingAmounts,
    PlatformFeeRequestInput
} from '../declarations/types-49.js';
export type {
    StripePaymentClientAction,
    StripeSetupIntentClientAction,
    StripeTerminalPaymentIntentClientAction
} from '../declarations/types-60.js';
export type {
    CheckoutBuyerContact,
    CheckoutBuyerFields,
    CheckoutCustomTextConfig,
    CheckoutCustomerPrefill,
    CheckoutDerivedDeliveryResource,
    CheckoutGiftCardChallenge,
    CheckoutMerchantSupport,
    CheckoutPaymentMethodSave,
    CheckoutPaymentConfig,
    CheckoutPrefill,
    CheckoutProblemResource,
    CheckoutPromotionConfig,
    CategoryReference,
    CheckoutBuyerFieldsRequestInput,
    CheckoutCustomTextWriteConfigInput,
    CheckoutLegalConfigRequestInput,
    CheckoutPaymentConfigRequestInput,
    CheckoutPrefillRequestInput,
    CheckoutPromotionConfigRequestInput,
    CheckoutQuickPayItemRequestInput,
    CheckoutBuyerContactRequestInput,
    CheckoutBuyerContactRequest
} from '../declarations/types-5.js';
export type {
    CustomFieldAnswer,
    CustomFieldAnswerText,
    CustomFieldAnswerTextarea,
    CustomFieldAnswerDropdown,
    CustomFieldAnswerCheckbox
} from '../declarations/types-15.js';
export type { Address, AddressRequestInput, AddressRequest } from '../declarations/types-0.js';
export type {
    DeliveryQuoteChoiceGroupResource,
    DeliveryQuoteExecutionLegResource,
    DeliveryQuoteLineItemResource
} from '../declarations/types-20.js';
export type {
    DeliveryAddressAdvisoryResource,
    DeliveryCandidateOutcomeResource,
    DeliveryInputRequirement,
    DeliveryInputConstraint,
    DeliveryArrivalEstimate,
    DeliveryCandidateOutcomeResourceAvailable,
    DeliveryCandidateOutcomeResourceUnavailable,
    DeliveryCandidateOutcomeResourceInputRequired,
    DeliveryCandidateOutcomeResourceCannotCalculate,
    DeliveryCandidateOutcomeResourceRequiresCheckoutContext,
    DeliveryEligibilityMismatch,
    DeferredPromotion
} from '../declarations/types-17.js';
export type { DeliveryWindowRequest, DeliveryShipmentDetails } from '../declarations/types-22.js';
export type { DeliveryOptionProjection, DeliveryPlan, DeliveryPickupDetails } from '../declarations/types-19.js';
export type { BuyerInstructionsConfig, BuyerExpandedOrderSummary } from '../declarations/types-2.js';
export type { DeliveryLocationSummaryResource, DeliveryMerchantDiagnostic } from '../declarations/types-18.js';
export type { DeliveryRecipientRequirement } from '../declarations/types-21.js';
export type { LegalSettings } from '../declarations/types-35.js';
export type { Image } from '../declarations/types-28.js';
export type { MetadataMap, MetadataRequestInput, MetadataPatchRequestInput, MetadataPatchRequest } from '../declarations/types-38.js';
export type {
    SettlementAmounts,
    SelectableOrderPaymentIntent,
    SelectedProductOption,
    SetupCollection,
    SetupCollectionStripe
} from '../declarations/types-59.js';
export type {
    PaymentSourceSummary,
    PaymentSourceAchDebitSummary,
    PaymentSourceCardSummary,
    PaymentSourceCardPresentDetails
} from '../declarations/types-47.js';
export type { BuyerRefund, BuyerPaymentRefund } from '../declarations/types-3.js';
export type {
    RefundLineItemAllocation,
    RefundLineItemAdjustmentRefund,
    RefundLineItemAdjustment,
    RefundAdjustmentReason,
    RefundLineItemAutomaticRefund,
    RefundLineItemModifierAllocation,
    RefundTaxBreakdownRefund,
    RefundTenderAllocation
} from '../declarations/types-53.js';
export type { OrderGiftCardAllocation } from '../declarations/types-40.js';
export type {
    SubscriptionIntervalOption,
    SubscriptionGiftRecipient,
    SubscriptionGiftRecipientRequestInput,
    SubscriptionGiftRecipientRequest
} from '../declarations/types-62.js';
export type {
    ConfirmCheckoutSessionCustomerVerificationRequestInput,
    CreateCheckoutSessionDiscountInput,
    CreateCheckoutSessionCustomerVerificationRequestInput,
    CreateCheckoutSessionGiftCardPurchaseVerificationRequestInput,
    CreateCheckoutSessionConfirmSavedPaymentMethodVerificationRequestInput,
    ConfirmCheckoutSessionCustomerVerificationRequest
} from '../declarations/types-7.js';
export type {
    CreateCheckoutSessionRequestInput,
    CreateCheckoutSessionOrderInput,
    CreateCheckoutSessionQuickPayInput,
    CreateCheckoutSessionSubscriptionPlanInput,
    CreateCheckoutSessionReturnResolutionInput,
    CreateCheckoutSessionInvoiceInput,
    CreateCheckoutSessionSavePaymentMethodVerificationRequestInput,
    CreateCheckoutSessionUseSavedPaymentMethodsVerificationRequestInput,
    CreateCheckoutSessionUseSavedPaymentMethodsByEmailRequestInput,
    CreateCheckoutSessionUseSavedPaymentMethodsByRememberedBuyerRequestInput,
    CreateCheckoutSessionPayToNewAddressVerificationRequestInput
} from '../declarations/types-8.js';
export type { PromotionRefRequestInput, PromotionRefInputPromotionIDInput, PromotionRefInputPromotionCodeInput } from '../declarations/types-51.js';
export type { ThemeConfigRequestInput } from '../declarations/types-65.js';
export type { UpdateCheckoutSessionRequestInput } from '../declarations/types-66.js';
export { makeAddressRequest } from '../declarations/types-70.js';
export {
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
    makeCheckoutTaxCalculationRequest,
    makeCheckoutTaxConfigRequest,
    makeCheckoutTipConfigRequest,
    makeCloseCheckoutSessionRequest,
    makeConfirmCheckoutSessionCustomerVerificationRequest
} from '../declarations/types-71.js';
export {
    makeCreateCheckoutSessionConfirmSavedPaymentMethodVerificationRequest,
    makeCreateCheckoutSessionCustomerVerificationRequest,
    makeCreateCheckoutSessionDiscount,
    makeCreateCheckoutSessionGiftCardPurchaseVerificationRequest,
    makeCreateCheckoutSessionInvoice,
    makeCreateCheckoutSessionOrder,
    makeCreateCheckoutSessionPayToNewAddressVerificationRequest,
    makeCreateCheckoutSessionQuickPay,
    makeCreateCheckoutSessionRequest,
    makeCreateCheckoutSessionReturnResolution,
    makeCreateCheckoutSessionSavePaymentMethodVerificationRequest,
    makeCreateCheckoutSessionSubscriptionPlan,
    makeCreateCheckoutSessionUseSavedPaymentMethodsByEmailRequest,
    makeCreateCheckoutSessionUseSavedPaymentMethodsByRememberedBuyerRequest,
    makeCreateCheckoutSessionUseSavedPaymentMethodsVerificationRequest
} from '../declarations/types-72.js';
export { makeDeliveryWindowRequest } from '../declarations/types-76.js';
export { makeMetadataPatchRequest, makeMetadataRequest, makeMoneyValue, makeOrderLineItemTaxRequest } from '../declarations/types-79.js';
export { makePlatformFeeRequest } from '../declarations/types-80.js';
export { makePromotionRefInputPromotionCode, makePromotionRefInputPromotionID, makePromotionRefRequest } from '../declarations/types-81.js';
export { makeSubscriptionGiftRecipientRequest, makeThemeConfigRequest, makeUpdateCheckoutSessionRequest } from '../declarations/types-83.js';
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
 * client.checkoutSessions.close("cs_01KEZF7C004JRWFW43H037MQRN", undefined, { idempotencyKey:
 * idempotencyKey })
 */
    close(checkout_session_id: InputValue<string>, params?: CheckoutSessionsCloseParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<CheckoutSession, CheckoutSessionResponse>>;
    /**
 * Checks the code the buyer typed. A right code makes the checkout act for the customer with that
 * email, and creates the customer, with a customer.created event, when none exists. The checkout
 * can then save the buyer's card with save_payment_method on `client.orders.pay`, and list and pay
 * with that customer's saved cards. The order's customer does not change until the payment
 * succeeds. Only the checkout_auth_token in the response acts for that customer. Send it as the
 * Bearer credential from then on. Every other credential for the session, including earlier
 * checkout_auth_token values and hosted checkout links, keeps working for the checkout and acts
 * for no customer, so it lists no saved cards and pays with none. A buyer who opens the link on
 * another device confirms an email there to use them, and from then on only that device's new
 * credential acts for a customer. If the response is lost after the code was accepted, the
 * credential you sent still works. Send the same code again with it while the code is valid, which
 * counts as another try and returns a new credential for the same customer, or request a new code.
 * A wrong, expired, or replaced code fails with `INVALID_REQUEST` and an `INVALID_VALUE` detail on
 * `code`, and so does a used code once the checkout was confirmed again, any code after its 5th
 * try, any code for an email past its limit on wrong tries, or a code whose email's customer
 * changed its email or was deleted after the code was sent. If the checkout stops offering saved
 * payment details before the code is confirmed, such as when the merchant turns them off, the
 * request fails with `ACTION_NOT_ALLOWED` and reason `not_offered`. A credential that already acts
 * for a customer fails with `ACTION_NOT_ALLOWED` and reason `already_applied`, and confirming
 * never replaces a customer the merchant named. Once the customer whose email the buyer confirmed
 * changes that email or is deleted, the checkout acts for no customer, and the buyer can confirm
 * the customer's new email or another one. A checkout opened from a checkout reminder link acts
 * for no customer the buyer confirmed earlier, so its buyer confirms an email again. A texted code
 * for saved details binds the checkout the same way, but the new credential opens only the cards
 * saved with that number: it lists and pays with no card saved by email, and reads no customer
 * details. A texted code checks once, so after a lost answer request a new code. A code for
 * purpose pay_to_new_address keeps the credential and its proof, omits checkout_auth_token, and
 * refreshes the last confirmed code for 15 minutes. A code for purpose
 * confirm_saved_payment_method keeps the session's credential, so the response omits
 * checkout_auth_token and carries payment_method_save on the checkout session. A texted code saves
 * the card with the number when the number already opens the customer's saved details or the
 * customer has none yet; otherwise payment_method_save.email_confirmation_required turns true, and
 * an emailed code finishes the save. An emailed code alone saves the card by email. After success,
 * a retry with the same idempotency key and code returns the stored answer and credential to any
 * credential of the session. After failure, a retry checks the code again and counts as another
 * try.
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
 * Creates a hosted or headless checkout session for an order, quick-pay charge, subscription plan
 * signup, a return resolution's buyer balance, or what is due now on an invoice. Subscription
 * signup requires a buyer email before payment. Creation never implicitly replaces an open order
 * session. To replace one, send order_id with replace_checkout_session_id set to the expected
 * current session; the compare-and-swap replacement and collection-lock transfer commit
 * atomically. Scopes depend on type: order, quick_pay and subscription_plan need
 * checkouts.checkout_sessions.write, return_resolution needs commerce.returns.resolutions.write,
 * and invoice needs commerce.invoices.write. A credential without the type's scope gets 403
 * INSUFFICIENT_SCOPE. A return_resolution or invoice session reuses the open session with the same
 * surface and returns 200; a different surface replaces an idle session and is refused while a
 * payment is in progress. Read the resolution or invoice with its own GET.
 *
 * `POST /v1/checkout-sessions`
 * @see https://developers.withflintpay.com/docs/api/checkout-sessions#createCheckoutSession
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.checkoutSessions.create({type: "order", order_id: "ord_01KEZF7C0054GQKJ142A8X367A"}, {
 * idempotencyKey: idempotencyKey })
 */
    create(params: CheckoutSessionsCreateParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<CheckoutSessionWithSecret, CheckoutSessionLaunchResponse>>;
    /**
 * Sends a six-digit code to prove the buyer controls an email address or mobile phone number, so
 * this checkout can save a card, use saved details, or confirm a saved card. Only the session's
 * own checkout credential can call it. A retry with the same idempotency key returns the same code
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
 * client.checkoutSessions.createCustomerVerification("cs_01KEZF7C004JRWFW43H037MQRN", {email:
 * "ada@example.com", purpose: "use_saved_payment_methods"}, { idempotencyKey: idempotencyKey })
 */
    createCustomerVerification(checkout_session_id: InputValue<string>, params: CheckoutSessionsCreateCustomerVerificationParams, options?: RequestOptions<"checkout">): Promise<WithResponseInfo<CheckoutSessionCustomerVerification, CheckoutSessionCustomerVerificationResponse>>;
    /**
 * Returns a single checkout session by ID.
 *
 * `GET /v1/checkout-sessions/{checkout_session_id}`
 * @param checkout_session_id Flint checkout session ID.
 * @see https://developers.withflintpay.com/docs/api/checkout-sessions#getCheckoutSession
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.checkoutSessions.get("cs_01KEZF7C004JRWFW43H037MQRN")
 */
    get(checkout_session_id: InputValue<string>, params?: CheckoutSessionsGetParams, options?: _SdkWithoutIdempotency<RequestOptions<"checkout" | "merchant">>): Promise<WithResponseInfo<CheckoutSession, CheckoutSessionResponse>>;
    /**
 * Only the session's own checkout credential can read its verification code requests. Only
 * requests whose code hasn't expired are readable until expires_at; an expired, unknown,
 * malformed, deleted, or other session's request returns 404 RESOURCE_NOT_FOUND. Emails are masked
 * on every read. A request reads the same whether or not a code was sent, confirmed, or replaced.
 * Reads send nothing and change no code or attempt counters.
 *
 * `GET
 * /v1/checkout-sessions/{checkout_session_id}/customer-verifications/{checkout_session_customer_verification_id}`
 * @param checkout_session_id Flint checkout session ID.
 * @param checkout_session_customer_verification_id Flint checkout verification code request ID.
 * @see
 * https://developers.withflintpay.com/docs/api/checkout-sessions#getCheckoutSessionCustomerVerification
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.checkoutSessions.getCustomerVerification("cs_01KEZF7C004JRWFW43H037MQRN",
 * "cscv_01KEZF7C00XW14W2FCVD5PH3Z9")
 */
    getCustomerVerification(checkout_session_id: InputValue<string>, checkout_session_customer_verification_id: InputValue<string>, params?: CheckoutSessionsGetCustomerVerificationParams, options?: _SdkWithoutIdempotency<RequestOptions<"checkout">>): Promise<WithResponseInfo<CheckoutSessionCustomerVerification, CheckoutSessionCustomerVerificationResponse>>;
    /**
 * Only the session's own checkout credential can read its verification code requests. Only
 * requests whose code hasn't expired are readable until expires_at; an expired, unknown,
 * malformed, deleted, or other session's request returns 404 RESOURCE_NOT_FOUND. Emails are masked
 * on every read. A request reads the same whether or not a code was sent, confirmed, or replaced.
 * Reads send nothing and change no code or attempt counters. Returns requests newest first by
 * created_at descending, then checkout_session_customer_verification_id descending. Default order:
 * created_at descending, then checkout_session_customer_verification_id descending.
 *
 * `GET /v1/checkout-sessions/{checkout_session_id}/customer-verifications`
 * @param checkout_session_id Flint checkout session ID.
 * @see
 * https://developers.withflintpay.com/docs/api/checkout-sessions#listCheckoutSessionCustomerVerifications
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.checkoutSessions.listCustomerVerifications("cs_01KEZF7C004JRWFW43H037MQRN")
 */
    listCustomerVerifications(checkout_session_id: InputValue<string>, params?: CheckoutSessionsListCustomerVerificationsParams, options?: _SdkWithoutIdempotency<RequestOptions<"checkout">>): Promise<WithResponseInfo<CheckoutSessionCustomerVerificationListResponse, CheckoutSessionCustomerVerificationListResponse>>;
    /** Iterate pages lazily.
     * @see
     * https://developers.withflintpay.com/docs/api/checkout-sessions#listCheckoutSessionCustomerVerifications
     */
    listCustomerVerificationsPages(checkout_session_id: InputValue<string>, params?: CheckoutSessionsListCustomerVerificationsParams, options?: _SdkWithoutIdempotency<RequestOptions<"checkout">>): AsyncGenerator<WithResponseInfo<CheckoutSessionCustomerVerificationListResponse, CheckoutSessionCustomerVerificationListResponse>>;
    /** Iterate items lazily.
     * @see
     * https://developers.withflintpay.com/docs/api/checkout-sessions#listCheckoutSessionCustomerVerifications
     */
    listCustomerVerificationsItems(checkout_session_id: InputValue<string>, params?: CheckoutSessionsListCustomerVerificationsParams, options?: _SdkWithoutIdempotency<RequestOptions<"checkout">>): AsyncGenerator<CheckoutSessionCustomerVerification>;
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
