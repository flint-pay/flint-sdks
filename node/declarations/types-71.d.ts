import type { InputValue, Model } from '../runtime.js';
import type {
    CheckoutRecoveryEmailSettingsRequestInput,
    CheckoutRedirectsRequestInput,
    CheckoutSavedPaymentDetailsSettingsRequestInput
} from './types-5.js';
import type {
    CheckoutSettingsRequestInput,
    CheckoutSubscriptionTermsRequestInput,
    CheckoutTaxCalculationRequestInput,
    CheckoutTaxConfigRequestInput,
    CheckoutTipConfigRequestInput,
    CloseCheckoutSessionRequestInput,
    CloseGiftCardRequestInput,
    CloseOrderRequestInput,
    CollectInvoiceRequestInput
} from './types-6.js';
import type {
    CommitInventoryReservationRequestInput,
    CompleteFulfillmentRequestInput,
    CompleteReturnRequestInput,
    ConfigurationVersionRequestInput,
    ConfirmCheckoutSessionCustomerVerificationRequestInput,
    ConfirmCustomerVerificationRequestInput,
    ConfirmEmailChangeRequestInput,
    ConfirmPaymentIntentRequestInput,
    ConfirmPaymentIntentRequestAttachedInput,
    ConfirmPaymentIntentRequestPaymentMethodInput,
    ConfirmPaymentIntentRequestReaderInput,
    ConfirmPaymentIntentRequestStripeConfirmationTokenInput,
    ConfirmPaymentIntentRequestTokenInput,
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
    CreateCheckoutSessionQuickPayInput
} from './types-7.js';
import type {
    CreateCheckoutSessionRequestInput,
    CreateCheckoutSessionReturnResolutionInput,
    CreateCheckoutSessionSavePaymentMethodVerificationRequestInput,
    CreateCheckoutSessionSubscriptionPlanInput,
    CreateCheckoutSessionUseSavedPaymentMethodsVerificationRequestInput,
    CreateCreditNoteAllocationRequestInput,
    CreateCreditNoteRequestInput,
    CreateCustomDomainRequestInput,
    CreateCustomerAccessLinkRequestInput,
    CreateCustomerAddressRequestInput,
    CreateCustomerDeletionRequestInput,
    CreateCustomerRequestInput,
    CreateCustomerSessionRequestInput,
    CreateCustomerTaxExemptionRequestInput,
    CreateCustomerVerificationRequestInput,
    CreateDeliveryFulfillmentDetailsInput,
    CreateDeliveryLocationSetRequestInput,
    CreateDeliveryMethodRequestInput,
    CreateDeliveryMethodRequestLocalDeliveryInput,
    CreateDeliveryMethodRequestPickupInput,
    CreateDeliveryMethodRequestShipmentInput
} from './types-8.js';
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
export declare function makeConfirmPaymentIntentRequest(value: InputValue<Exclude<ConfirmPaymentIntentRequestInput & object, readonly unknown[]>>): Model<Exclude<ConfirmPaymentIntentRequestInput & object, readonly unknown[]>>;
export declare function makeConfirmPaymentIntentRequest(value: InputValue<ConfirmPaymentIntentRequestInput>): Model<ConfirmPaymentIntentRequestInput>;
export declare function makeConfirmPaymentIntentRequestAttached(value: InputValue<ConfirmPaymentIntentRequestAttachedInput>): Model<ConfirmPaymentIntentRequestAttachedInput>;
export declare function makeConfirmPaymentIntentRequestPaymentMethod(value: InputValue<ConfirmPaymentIntentRequestPaymentMethodInput>): Model<ConfirmPaymentIntentRequestPaymentMethodInput>;
export declare function makeConfirmPaymentIntentRequestReader(value: InputValue<ConfirmPaymentIntentRequestReaderInput>): Model<ConfirmPaymentIntentRequestReaderInput>;
export declare function makeConfirmPaymentIntentRequestStripeConfirmationToken(value: InputValue<ConfirmPaymentIntentRequestStripeConfirmationTokenInput>): Model<ConfirmPaymentIntentRequestStripeConfirmationTokenInput>;
export declare function makeConfirmPaymentIntentRequestToken(value: InputValue<ConfirmPaymentIntentRequestTokenInput>): Model<ConfirmPaymentIntentRequestTokenInput>;
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
export declare function makeCreateCheckoutSessionQuickPay(value: InputValue<CreateCheckoutSessionQuickPayInput>): Model<CreateCheckoutSessionQuickPayInput>;
export declare function makeCreateCheckoutSessionRequest(value: InputValue<CreateCheckoutSessionRequestInput>): Model<CreateCheckoutSessionRequestInput>;
export declare function makeCreateCheckoutSessionReturnResolution(value: InputValue<CreateCheckoutSessionReturnResolutionInput>): Model<CreateCheckoutSessionReturnResolutionInput>;
export declare function makeCreateCheckoutSessionSavePaymentMethodVerificationRequest(value: InputValue<CreateCheckoutSessionSavePaymentMethodVerificationRequestInput>): Model<CreateCheckoutSessionSavePaymentMethodVerificationRequestInput>;
export declare function makeCreateCheckoutSessionSubscriptionPlan(value: InputValue<CreateCheckoutSessionSubscriptionPlanInput>): Model<CreateCheckoutSessionSubscriptionPlanInput>;
export declare function makeCreateCheckoutSessionUseSavedPaymentMethodsVerificationRequest(value: InputValue<CreateCheckoutSessionUseSavedPaymentMethodsVerificationRequestInput>): Model<CreateCheckoutSessionUseSavedPaymentMethodsVerificationRequestInput>;
export declare function makeCreateCreditNoteAllocationRequest(value: InputValue<CreateCreditNoteAllocationRequestInput>): Model<CreateCreditNoteAllocationRequestInput>;
export declare function makeCreateCreditNoteRequest(value: InputValue<CreateCreditNoteRequestInput>): Model<CreateCreditNoteRequestInput>;
export declare function makeCreateCustomDomainRequest(value: InputValue<CreateCustomDomainRequestInput>): Model<CreateCustomDomainRequestInput>;
export declare function makeCreateCustomerAccessLinkRequest(value: InputValue<CreateCustomerAccessLinkRequestInput>): Model<CreateCustomerAccessLinkRequestInput>;
export declare function makeCreateCustomerAddressRequest(value: InputValue<CreateCustomerAddressRequestInput>): Model<CreateCustomerAddressRequestInput>;
export declare function makeCreateCustomerDeletionRequest(value: InputValue<CreateCustomerDeletionRequestInput>): Model<CreateCustomerDeletionRequestInput>;
export declare function makeCreateCustomerRequest(value: InputValue<CreateCustomerRequestInput>): Model<CreateCustomerRequestInput>;
export declare function makeCreateCustomerSessionRequest(value: InputValue<CreateCustomerSessionRequestInput>): Model<CreateCustomerSessionRequestInput>;
export declare function makeCreateCustomerTaxExemptionRequest(value: InputValue<CreateCustomerTaxExemptionRequestInput>): Model<CreateCustomerTaxExemptionRequestInput>;
export declare function makeCreateCustomerVerificationRequest(value: InputValue<CreateCustomerVerificationRequestInput>): Model<CreateCustomerVerificationRequestInput>;
export declare function makeCreateDeliveryFulfillmentDetails(value: InputValue<CreateDeliveryFulfillmentDetailsInput>): Model<CreateDeliveryFulfillmentDetailsInput>;
export declare function makeCreateDeliveryLocationSetRequest(value: InputValue<CreateDeliveryLocationSetRequestInput>): Model<CreateDeliveryLocationSetRequestInput>;
export declare function makeCreateDeliveryMethodRequest(value: InputValue<CreateDeliveryMethodRequestInput>): Model<CreateDeliveryMethodRequestInput>;
export declare function makeCreateDeliveryMethodRequestLocalDelivery(value: InputValue<CreateDeliveryMethodRequestLocalDeliveryInput>): Model<CreateDeliveryMethodRequestLocalDeliveryInput>;
export declare function makeCreateDeliveryMethodRequestPickup(value: InputValue<CreateDeliveryMethodRequestPickupInput>): Model<CreateDeliveryMethodRequestPickupInput>;
export declare function makeCreateDeliveryMethodRequestShipment(value: InputValue<CreateDeliveryMethodRequestShipmentInput>): Model<CreateDeliveryMethodRequestShipmentInput>;
