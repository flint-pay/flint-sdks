import type { InputValue, Model } from '../runtime.js';
import type { CancelSubscriptionRequestInput, CapturePaymentIntentRequestInput, CashOutGiftCardRequestInput } from './types-3.js';
import type {
    ChangeSubscriptionPlanRequestInput,
    CheckoutBuyerContactRequestInput,
    CheckoutBuyerFieldsRequestRequestInput,
    CheckoutCustomTextWriteConfigInput,
    CheckoutLegalConfigRequestInput,
    CheckoutPaymentConfigRequestInput,
    CheckoutPrefillRequestInput,
    CheckoutPromotionConfigRequestRequestInput,
    CheckoutQuickPayItemRequestInput,
    CheckoutRecoveryEmailSettingsRequestRequestInput,
    CheckoutRedirectsRequestInput,
    CheckoutSavedPaymentDetailsSettingsRequestRequestInput,
    CheckoutSettingsRequestRequestInput,
    CheckoutSubscriptionTermsRequestInput,
    CheckoutTaxConfigRequestRequestInput,
    CheckoutTipConfigRequestRequestInput
} from './types-4.js';
import type {
    CloseCheckoutSessionRequestInput,
    CloseOrderRequestInput,
    CollectInvoiceRequestInput,
    CompleteReturnRequestInput,
    ConfigurationVersionRequestInput,
    ConfirmCheckoutSessionCustomerVerificationRequestInput,
    ConfirmCustomerVerificationRequestInput,
    ConfirmEmailChangeRequestInput,
    ConfirmPaymentIntentRequestInput,
    ConfirmPaymentIntentRequestAttachedInput,
    ConfirmPaymentIntentRequestPaymentMethodInput,
    ConfirmPaymentIntentRequestStripeConfirmationTokenInput,
    ConfirmPaymentIntentRequestTokenInput,
    ConfirmReturnResolutionRequestInput,
    ConnectTaxConnectionRequestInput,
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
    CreateCheckoutSessionGiftCardPurchaseVerificationRequestInput,
    CreateCheckoutSessionOrderInput,
    CreateCheckoutSessionQuickPayInput,
    CreateCheckoutSessionRequestInput,
    CreateCheckoutSessionSavePaymentMethodVerificationRequestInput,
    CreateCheckoutSessionSubscriptionPlanInput,
    CreateCheckoutSessionUseSavedPaymentMethodsVerificationRequestInput
} from './types-5.js';
import type {
    CreateCreditNoteAllocationRequestInput,
    CreateCreditNoteRefundRequestInput,
    CreateCreditNoteRequestInput,
    CreateCustomDomainRequestInput,
    CreateCustomerAddressRequestInput,
    CreateCustomerDeletionRequestInput,
    CreateCustomerRequestInput,
    CreateCustomerSessionRequestInput,
    CreateCustomerVerificationRequestInput,
    CreateDeliveryFulfillmentDetailsInput,
    CreateDeliveryLocationSetRequestInput,
    CreateDeliveryMethodRequestInput,
    CreateDeliveryMethodRequestLocalDeliveryInput
} from './types-6.js';
export declare function makeCancelSubscriptionRequest(value: InputValue<CancelSubscriptionRequestInput>): Model<CancelSubscriptionRequestInput>;
export declare function makeCapturePaymentIntentRequest(value: InputValue<CapturePaymentIntentRequestInput>): Model<CapturePaymentIntentRequestInput>;
export declare function makeCashOutGiftCardRequest(value: InputValue<CashOutGiftCardRequestInput>): Model<CashOutGiftCardRequestInput>;
export declare function makeChangeSubscriptionPlanRequest(value: InputValue<ChangeSubscriptionPlanRequestInput>): Model<ChangeSubscriptionPlanRequestInput>;
export declare function makeCheckoutBuyerContactRequest(value: InputValue<CheckoutBuyerContactRequestInput>): Model<CheckoutBuyerContactRequestInput>;
export declare function makeCheckoutBuyerFieldsRequestRequest(value: InputValue<CheckoutBuyerFieldsRequestRequestInput>): Model<CheckoutBuyerFieldsRequestRequestInput>;
export declare function makeCheckoutCustomTextWriteConfig(value: InputValue<CheckoutCustomTextWriteConfigInput>): Model<CheckoutCustomTextWriteConfigInput>;
export declare function makeCheckoutLegalConfigRequest(value: InputValue<CheckoutLegalConfigRequestInput>): Model<CheckoutLegalConfigRequestInput>;
export declare function makeCheckoutPaymentConfigRequest(value: InputValue<CheckoutPaymentConfigRequestInput>): Model<CheckoutPaymentConfigRequestInput>;
export declare function makeCheckoutPrefillRequest(value: InputValue<CheckoutPrefillRequestInput>): Model<CheckoutPrefillRequestInput>;
export declare function makeCheckoutPromotionConfigRequestRequest(value: InputValue<CheckoutPromotionConfigRequestRequestInput>): Model<CheckoutPromotionConfigRequestRequestInput>;
export declare function makeCheckoutQuickPayItemRequest(value: InputValue<CheckoutQuickPayItemRequestInput>): Model<CheckoutQuickPayItemRequestInput>;
export declare function makeCheckoutRecoveryEmailSettingsRequestRequest(value: InputValue<CheckoutRecoveryEmailSettingsRequestRequestInput>): Model<CheckoutRecoveryEmailSettingsRequestRequestInput>;
export declare function makeCheckoutRedirectsRequest(value: InputValue<CheckoutRedirectsRequestInput>): Model<CheckoutRedirectsRequestInput>;
export declare function makeCheckoutSavedPaymentDetailsSettingsRequestRequest(value: InputValue<CheckoutSavedPaymentDetailsSettingsRequestRequestInput>): Model<CheckoutSavedPaymentDetailsSettingsRequestRequestInput>;
export declare function makeCheckoutSettingsRequestRequest(value: InputValue<CheckoutSettingsRequestRequestInput>): Model<CheckoutSettingsRequestRequestInput>;
export declare function makeCheckoutSubscriptionTermsRequest(value: InputValue<CheckoutSubscriptionTermsRequestInput>): Model<CheckoutSubscriptionTermsRequestInput>;
export declare function makeCheckoutTaxConfigRequestRequest(value: InputValue<CheckoutTaxConfigRequestRequestInput>): Model<CheckoutTaxConfigRequestRequestInput>;
export declare function makeCheckoutTipConfigRequestRequest(value: InputValue<CheckoutTipConfigRequestRequestInput>): Model<CheckoutTipConfigRequestRequestInput>;
export declare function makeCloseCheckoutSessionRequest(value: InputValue<CloseCheckoutSessionRequestInput>): Model<CloseCheckoutSessionRequestInput>;
export declare function makeCloseOrderRequest(value: InputValue<CloseOrderRequestInput>): Model<CloseOrderRequestInput>;
export declare function makeCollectInvoiceRequest(value: InputValue<CollectInvoiceRequestInput>): Model<CollectInvoiceRequestInput>;
export declare function makeCompleteReturnRequest(value: InputValue<CompleteReturnRequestInput>): Model<CompleteReturnRequestInput>;
export declare function makeConfigurationVersionRequest(value: InputValue<ConfigurationVersionRequestInput>): Model<ConfigurationVersionRequestInput>;
export declare function makeConfirmCheckoutSessionCustomerVerificationRequest(value: InputValue<ConfirmCheckoutSessionCustomerVerificationRequestInput>): Model<ConfirmCheckoutSessionCustomerVerificationRequestInput>;
export declare function makeConfirmCustomerVerificationRequest(value: InputValue<ConfirmCustomerVerificationRequestInput>): Model<ConfirmCustomerVerificationRequestInput>;
export declare function makeConfirmEmailChangeRequest(value: InputValue<ConfirmEmailChangeRequestInput>): Model<ConfirmEmailChangeRequestInput>;
export declare function makeConfirmPaymentIntentRequest(value: InputValue<Exclude<ConfirmPaymentIntentRequestInput & object, readonly unknown[]>>): Model<Exclude<ConfirmPaymentIntentRequestInput & object, readonly unknown[]>>;
export declare function makeConfirmPaymentIntentRequest(value: InputValue<ConfirmPaymentIntentRequestInput>): Model<ConfirmPaymentIntentRequestInput>;
export declare function makeConfirmPaymentIntentRequestAttached(value: InputValue<ConfirmPaymentIntentRequestAttachedInput>): Model<ConfirmPaymentIntentRequestAttachedInput>;
export declare function makeConfirmPaymentIntentRequestPaymentMethod(value: InputValue<ConfirmPaymentIntentRequestPaymentMethodInput>): Model<ConfirmPaymentIntentRequestPaymentMethodInput>;
export declare function makeConfirmPaymentIntentRequestStripeConfirmationToken(value: InputValue<ConfirmPaymentIntentRequestStripeConfirmationTokenInput>): Model<ConfirmPaymentIntentRequestStripeConfirmationTokenInput>;
export declare function makeConfirmPaymentIntentRequestToken(value: InputValue<ConfirmPaymentIntentRequestTokenInput>): Model<ConfirmPaymentIntentRequestTokenInput>;
export declare function makeConfirmReturnResolutionRequest(value: InputValue<ConfirmReturnResolutionRequestInput>): Model<ConfirmReturnResolutionRequestInput>;
export declare function makeConnectTaxConnectionRequest(value: InputValue<ConnectTaxConnectionRequestInput>): Model<ConnectTaxConnectionRequestInput>;
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
export declare function makeCreateCheckoutSessionGiftCardPurchaseVerificationRequest(value: InputValue<CreateCheckoutSessionGiftCardPurchaseVerificationRequestInput>): Model<CreateCheckoutSessionGiftCardPurchaseVerificationRequestInput>;
export declare function makeCreateCheckoutSessionOrder(value: InputValue<CreateCheckoutSessionOrderInput>): Model<CreateCheckoutSessionOrderInput>;
export declare function makeCreateCheckoutSessionQuickPay(value: InputValue<CreateCheckoutSessionQuickPayInput>): Model<CreateCheckoutSessionQuickPayInput>;
export declare function makeCreateCheckoutSessionRequest(value: InputValue<CreateCheckoutSessionRequestInput>): Model<CreateCheckoutSessionRequestInput>;
export declare function makeCreateCheckoutSessionSavePaymentMethodVerificationRequest(value: InputValue<CreateCheckoutSessionSavePaymentMethodVerificationRequestInput>): Model<CreateCheckoutSessionSavePaymentMethodVerificationRequestInput>;
export declare function makeCreateCheckoutSessionSubscriptionPlan(value: InputValue<CreateCheckoutSessionSubscriptionPlanInput>): Model<CreateCheckoutSessionSubscriptionPlanInput>;
export declare function makeCreateCheckoutSessionUseSavedPaymentMethodsVerificationRequest(value: InputValue<CreateCheckoutSessionUseSavedPaymentMethodsVerificationRequestInput>): Model<CreateCheckoutSessionUseSavedPaymentMethodsVerificationRequestInput>;
export declare function makeCreateCreditNoteAllocationRequest(value: InputValue<CreateCreditNoteAllocationRequestInput>): Model<CreateCreditNoteAllocationRequestInput>;
export declare function makeCreateCreditNoteRefundRequest(value: InputValue<CreateCreditNoteRefundRequestInput>): Model<CreateCreditNoteRefundRequestInput>;
export declare function makeCreateCreditNoteRequest(value: InputValue<CreateCreditNoteRequestInput>): Model<CreateCreditNoteRequestInput>;
export declare function makeCreateCustomDomainRequest(value: InputValue<CreateCustomDomainRequestInput>): Model<CreateCustomDomainRequestInput>;
export declare function makeCreateCustomerAddressRequest(value: InputValue<CreateCustomerAddressRequestInput>): Model<CreateCustomerAddressRequestInput>;
export declare function makeCreateCustomerDeletionRequest(value: InputValue<CreateCustomerDeletionRequestInput>): Model<CreateCustomerDeletionRequestInput>;
export declare function makeCreateCustomerRequest(value: InputValue<CreateCustomerRequestInput>): Model<CreateCustomerRequestInput>;
export declare function makeCreateCustomerSessionRequest(value: InputValue<CreateCustomerSessionRequestInput>): Model<CreateCustomerSessionRequestInput>;
export declare function makeCreateCustomerVerificationRequest(value: InputValue<CreateCustomerVerificationRequestInput>): Model<CreateCustomerVerificationRequestInput>;
export declare function makeCreateDeliveryFulfillmentDetails(value: InputValue<CreateDeliveryFulfillmentDetailsInput>): Model<CreateDeliveryFulfillmentDetailsInput>;
export declare function makeCreateDeliveryLocationSetRequest(value: InputValue<CreateDeliveryLocationSetRequestInput>): Model<CreateDeliveryLocationSetRequestInput>;
export declare function makeCreateDeliveryMethodRequest(value: InputValue<CreateDeliveryMethodRequestInput>): Model<CreateDeliveryMethodRequestInput>;
export declare function makeCreateDeliveryMethodRequestLocalDelivery(value: InputValue<CreateDeliveryMethodRequestLocalDeliveryInput>): Model<CreateDeliveryMethodRequestLocalDeliveryInput>;
