import type { InputValue, Model } from '../runtime.js';
import type {
    CancelReturnResolutionRequestInput,
    CancelSubscriptionRequestInput,
    CapturePaymentIntentRequestInput,
    CapturePaymentSplitRequestInput,
    CashOutGiftCardRequestInput,
    ChangeMeSubscriptionPlanRequestInput,
    ChangeMeSubscriptionQuantityRequestInput
} from './types-5.js';
import type {
    ChangeSubscriptionPlanRequestInput,
    ChangeSubscriptionQuantityRequestInput,
    CheckInTicketRequestInput,
    CheckoutBuyerContactRequestInput,
    CheckoutBuyerFieldsRequestInput,
    CheckoutCustomTextWriteConfigInput,
    CheckoutLegalConfigRequestInput,
    CheckoutPaymentConfigRequestInput,
    CheckoutPrefillRequestInput,
    CheckoutPromotionConfigRequestInput,
    CheckoutQuickPayItemRequestInput,
    CheckoutRecoveryEmailSettingsRequestInput,
    CheckoutRedirectsRequestInput,
    CheckoutSavedPaymentDetailsSettingsRequestInput
} from './types-6.js';
import type {
    CheckoutSettingsRequestInput,
    CheckoutSubscriptionTermsRequestInput,
    CheckoutTaxCalculationRequestInput,
    CheckoutTaxConfigRequestInput,
    CheckoutTipConfigRequestInput,
    CloseCheckoutSessionRequestInput,
    CloseGiftCardRequestInput,
    CloseOrderRequestInput,
    CollectInvoiceRequestInput,
    CommitInventoryReservationRequestInput,
    CompleteFulfillmentRequestInput,
    CompleteReturnRequestInput,
    ConfigurationVersionRequestInput,
    ConfirmCheckoutSessionCustomerVerificationRequestInput,
    ConfirmCustomerVerificationRequestInput
} from './types-7.js';
import type {
    ConfirmEmailChangeRequestInput,
    ConfirmPaymentIntentRequestInput,
    ConfirmReturnResolutionRequestInput,
    ConnectTaxConnectionRequestInput,
    ConsumeInventoryReservationRequestInput,
    CreateAPIKeyRequestInput,
    CreateAPIKeyRequestFullInput,
    CreateAPIKeyRequestReadOnlyInput,
    CreateAPIKeyRequestRestrictedInput,
    CreateBundleComponentRequestInput,
    CreateBundleRequestInput,
    CreateCategoryRequestInput,
    CreateCheckoutDeliveryQuoteRequestInput,
    CreateCheckoutSessionConfirmSavedPaymentMethodVerificationRequestInput,
    CreateCheckoutSessionCustomerVerificationRequestInput,
    CreateCheckoutSessionDiscountInput,
    CreateCheckoutSessionGiftCardPurchaseVerificationRequestInput,
    CreateCheckoutSessionInvoiceInput,
    CreateCheckoutSessionOrderInput,
    CreateCheckoutSessionPayToNewAddressVerificationRequestInput,
    CreateCheckoutSessionQuickPayInput,
    CreateCheckoutSessionRequestInput,
    CreateCheckoutSessionReturnResolutionInput,
    CreateCheckoutSessionSavePaymentMethodVerificationRequestInput,
    CreateCheckoutSessionSubscriptionPlanInput,
    CreateCheckoutSessionUseSavedPaymentMethodsByEmailRequestInput,
    CreateCheckoutSessionUseSavedPaymentMethodsByRememberedBuyerRequestInput,
    CreateCheckoutSessionUseSavedPaymentMethodsVerificationRequestInput
} from './types-8.js';
export declare function makeCancelReturnResolutionRequest(value: InputValue<CancelReturnResolutionRequestInput>): Model<CancelReturnResolutionRequestInput>;
export declare function makeCancelSubscriptionRequest(value: InputValue<CancelSubscriptionRequestInput>): Model<CancelSubscriptionRequestInput>;
export declare function makeCapturePaymentIntentRequest(value: InputValue<CapturePaymentIntentRequestInput>): Model<CapturePaymentIntentRequestInput>;
export declare function makeCapturePaymentSplitRequest(value: InputValue<CapturePaymentSplitRequestInput>): Model<CapturePaymentSplitRequestInput>;
export declare function makeCashOutGiftCardRequest(value: InputValue<CashOutGiftCardRequestInput>): Model<CashOutGiftCardRequestInput>;
export declare function makeChangeMeSubscriptionPlanRequest(value: InputValue<ChangeMeSubscriptionPlanRequestInput>): Model<ChangeMeSubscriptionPlanRequestInput>;
export declare function makeChangeMeSubscriptionQuantityRequest(value: InputValue<ChangeMeSubscriptionQuantityRequestInput>): Model<ChangeMeSubscriptionQuantityRequestInput>;
export declare function makeChangeSubscriptionPlanRequest(value: InputValue<ChangeSubscriptionPlanRequestInput>): Model<ChangeSubscriptionPlanRequestInput>;
export declare function makeChangeSubscriptionQuantityRequest(value: InputValue<ChangeSubscriptionQuantityRequestInput>): Model<ChangeSubscriptionQuantityRequestInput>;
export declare function makeCheckInTicketRequest(value: InputValue<CheckInTicketRequestInput>): Model<CheckInTicketRequestInput>;
export declare function makeCheckoutBuyerContactRequest(value: InputValue<CheckoutBuyerContactRequestInput>): Model<CheckoutBuyerContactRequestInput>;
export declare function makeCheckoutBuyerFieldsRequest(value: InputValue<CheckoutBuyerFieldsRequestInput>): Model<CheckoutBuyerFieldsRequestInput>;
export declare function makeCheckoutCustomTextWriteConfig(value: InputValue<CheckoutCustomTextWriteConfigInput>): Model<CheckoutCustomTextWriteConfigInput>;
export declare function makeCheckoutLegalConfigRequest(value: InputValue<CheckoutLegalConfigRequestInput>): Model<CheckoutLegalConfigRequestInput>;
export declare function makeCheckoutPaymentConfigRequest(value: InputValue<CheckoutPaymentConfigRequestInput>): Model<CheckoutPaymentConfigRequestInput>;
export declare function makeCheckoutPrefillRequest(value: InputValue<CheckoutPrefillRequestInput>): Model<CheckoutPrefillRequestInput>;
export declare function makeCheckoutPromotionConfigRequest(value: InputValue<CheckoutPromotionConfigRequestInput>): Model<CheckoutPromotionConfigRequestInput>;
export declare function makeCheckoutQuickPayItemRequest(value: InputValue<CheckoutQuickPayItemRequestInput>): Model<CheckoutQuickPayItemRequestInput>;
export declare function makeCheckoutRecoveryEmailSettingsRequest(value: InputValue<CheckoutRecoveryEmailSettingsRequestInput>): Model<CheckoutRecoveryEmailSettingsRequestInput>;
export declare function makeCheckoutRedirectsRequest(value: InputValue<CheckoutRedirectsRequestInput>): Model<CheckoutRedirectsRequestInput>;
export declare function makeCheckoutSavedPaymentDetailsSettingsRequest(value: InputValue<CheckoutSavedPaymentDetailsSettingsRequestInput>): Model<CheckoutSavedPaymentDetailsSettingsRequestInput>;
export declare function makeCheckoutSettingsRequest(value: InputValue<CheckoutSettingsRequestInput>): Model<CheckoutSettingsRequestInput>;
export declare function makeCheckoutSubscriptionTermsRequest(value: InputValue<CheckoutSubscriptionTermsRequestInput>): Model<CheckoutSubscriptionTermsRequestInput>;
export declare function makeCheckoutTaxCalculationRequest(value: InputValue<CheckoutTaxCalculationRequestInput>): Model<CheckoutTaxCalculationRequestInput>;
export declare function makeCheckoutTaxConfigRequest(value: InputValue<CheckoutTaxConfigRequestInput>): Model<CheckoutTaxConfigRequestInput>;
export declare function makeCheckoutTipConfigRequest(value: InputValue<CheckoutTipConfigRequestInput>): Model<CheckoutTipConfigRequestInput>;
export declare function makeCloseCheckoutSessionRequest(value: InputValue<CloseCheckoutSessionRequestInput>): Model<CloseCheckoutSessionRequestInput>;
export declare function makeCloseGiftCardRequest(value: InputValue<CloseGiftCardRequestInput>): Model<CloseGiftCardRequestInput>;
export declare function makeCloseOrderRequest(value: InputValue<CloseOrderRequestInput>): Model<CloseOrderRequestInput>;
export declare function makeCollectInvoiceRequest(value: InputValue<CollectInvoiceRequestInput>): Model<CollectInvoiceRequestInput>;
export declare function makeCommitInventoryReservationRequest(value: InputValue<CommitInventoryReservationRequestInput>): Model<CommitInventoryReservationRequestInput>;
export declare function makeCompleteFulfillmentRequest(value: InputValue<CompleteFulfillmentRequestInput>): Model<CompleteFulfillmentRequestInput>;
export declare function makeCompleteReturnRequest(value: InputValue<CompleteReturnRequestInput>): Model<CompleteReturnRequestInput>;
export declare function makeConfigurationVersionRequest(value: InputValue<ConfigurationVersionRequestInput>): Model<ConfigurationVersionRequestInput>;
export declare function makeConfirmCheckoutSessionCustomerVerificationRequest(value: InputValue<ConfirmCheckoutSessionCustomerVerificationRequestInput>): Model<ConfirmCheckoutSessionCustomerVerificationRequestInput>;
export declare function makeConfirmCustomerVerificationRequest(value: InputValue<ConfirmCustomerVerificationRequestInput>): Model<ConfirmCustomerVerificationRequestInput>;
export declare function makeConfirmEmailChangeRequest(value: InputValue<ConfirmEmailChangeRequestInput>): Model<ConfirmEmailChangeRequestInput>;
export declare function makeConfirmPaymentIntentRequest(value: InputValue<ConfirmPaymentIntentRequestInput>): Model<ConfirmPaymentIntentRequestInput>;
export declare function makeConfirmReturnResolutionRequest(value: InputValue<ConfirmReturnResolutionRequestInput>): Model<ConfirmReturnResolutionRequestInput>;
export declare function makeConnectTaxConnectionRequest(value: InputValue<ConnectTaxConnectionRequestInput>): Model<ConnectTaxConnectionRequestInput>;
export declare function makeConsumeInventoryReservationRequest(value: InputValue<ConsumeInventoryReservationRequestInput>): Model<ConsumeInventoryReservationRequestInput>;
export declare function makeCreateAPIKeyRequest(value: InputValue<CreateAPIKeyRequestInput>): Model<CreateAPIKeyRequestInput>;
export declare function makeCreateAPIKeyRequestFull(value: InputValue<CreateAPIKeyRequestFullInput>): Model<CreateAPIKeyRequestFullInput>;
export declare function makeCreateAPIKeyRequestReadOnly(value: InputValue<CreateAPIKeyRequestReadOnlyInput>): Model<CreateAPIKeyRequestReadOnlyInput>;
export declare function makeCreateAPIKeyRequestRestricted(value: InputValue<CreateAPIKeyRequestRestrictedInput>): Model<CreateAPIKeyRequestRestrictedInput>;
export declare function makeCreateBundleComponentRequest(value: InputValue<CreateBundleComponentRequestInput>): Model<CreateBundleComponentRequestInput>;
export declare function makeCreateBundleRequest(value: InputValue<CreateBundleRequestInput>): Model<CreateBundleRequestInput>;
export declare function makeCreateCategoryRequest(value: InputValue<CreateCategoryRequestInput>): Model<CreateCategoryRequestInput>;
export declare function makeCreateCheckoutDeliveryQuoteRequest(value: InputValue<CreateCheckoutDeliveryQuoteRequestInput>): Model<CreateCheckoutDeliveryQuoteRequestInput>;
export declare function makeCreateCheckoutSessionConfirmSavedPaymentMethodVerificationRequest(value: InputValue<CreateCheckoutSessionConfirmSavedPaymentMethodVerificationRequestInput>): Model<CreateCheckoutSessionConfirmSavedPaymentMethodVerificationRequestInput>;
export declare function makeCreateCheckoutSessionCustomerVerificationRequest(value: InputValue<Exclude<CreateCheckoutSessionCustomerVerificationRequestInput & object, readonly unknown[]>>): Model<Exclude<CreateCheckoutSessionCustomerVerificationRequestInput & object, readonly unknown[]>>;
export declare function makeCreateCheckoutSessionCustomerVerificationRequest(value: InputValue<CreateCheckoutSessionCustomerVerificationRequestInput>): Model<CreateCheckoutSessionCustomerVerificationRequestInput>;
export declare function makeCreateCheckoutSessionDiscount(value: InputValue<CreateCheckoutSessionDiscountInput>): Model<CreateCheckoutSessionDiscountInput>;
export declare function makeCreateCheckoutSessionGiftCardPurchaseVerificationRequest(value: InputValue<CreateCheckoutSessionGiftCardPurchaseVerificationRequestInput>): Model<CreateCheckoutSessionGiftCardPurchaseVerificationRequestInput>;
export declare function makeCreateCheckoutSessionInvoice(value: InputValue<CreateCheckoutSessionInvoiceInput>): Model<CreateCheckoutSessionInvoiceInput>;
export declare function makeCreateCheckoutSessionOrder(value: InputValue<CreateCheckoutSessionOrderInput>): Model<CreateCheckoutSessionOrderInput>;
export declare function makeCreateCheckoutSessionPayToNewAddressVerificationRequest(value: InputValue<CreateCheckoutSessionPayToNewAddressVerificationRequestInput>): Model<CreateCheckoutSessionPayToNewAddressVerificationRequestInput>;
export declare function makeCreateCheckoutSessionQuickPay(value: InputValue<CreateCheckoutSessionQuickPayInput>): Model<CreateCheckoutSessionQuickPayInput>;
export declare function makeCreateCheckoutSessionRequest(value: InputValue<CreateCheckoutSessionRequestInput>): Model<CreateCheckoutSessionRequestInput>;
export declare function makeCreateCheckoutSessionReturnResolution(value: InputValue<CreateCheckoutSessionReturnResolutionInput>): Model<CreateCheckoutSessionReturnResolutionInput>;
export declare function makeCreateCheckoutSessionSavePaymentMethodVerificationRequest(value: InputValue<CreateCheckoutSessionSavePaymentMethodVerificationRequestInput>): Model<CreateCheckoutSessionSavePaymentMethodVerificationRequestInput>;
export declare function makeCreateCheckoutSessionSubscriptionPlan(value: InputValue<CreateCheckoutSessionSubscriptionPlanInput>): Model<CreateCheckoutSessionSubscriptionPlanInput>;
export declare function makeCreateCheckoutSessionUseSavedPaymentMethodsByEmailRequest(value: InputValue<CreateCheckoutSessionUseSavedPaymentMethodsByEmailRequestInput>): Model<CreateCheckoutSessionUseSavedPaymentMethodsByEmailRequestInput>;
export declare function makeCreateCheckoutSessionUseSavedPaymentMethodsByRememberedBuyerRequest(value: InputValue<CreateCheckoutSessionUseSavedPaymentMethodsByRememberedBuyerRequestInput>): Model<CreateCheckoutSessionUseSavedPaymentMethodsByRememberedBuyerRequestInput>;
export declare function makeCreateCheckoutSessionUseSavedPaymentMethodsVerificationRequest(value: InputValue<CreateCheckoutSessionUseSavedPaymentMethodsVerificationRequestInput>): Model<CreateCheckoutSessionUseSavedPaymentMethodsVerificationRequestInput>;
