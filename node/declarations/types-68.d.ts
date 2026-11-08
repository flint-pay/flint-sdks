import type { InputValue, Model } from '../runtime.js';
import type {
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
    ConfirmCustomerVerificationRequestInput,
    ConfirmEmailChangeRequestInput
} from './types-6.js';
import type {
    ConfirmPaymentIntentRequestInput,
    ConfirmPaymentIntentRequestAttachedInput,
    ConfirmPaymentIntentRequestPaymentMethodInput,
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
    CreateCheckoutSessionOrderInput,
    CreateCheckoutSessionQuickPayInput,
    CreateCheckoutSessionRequestInput,
    CreateCheckoutSessionSavePaymentMethodVerificationRequestInput,
    CreateCheckoutSessionSubscriptionPlanInput,
    CreateCheckoutSessionUseSavedPaymentMethodsVerificationRequestInput,
    CreateCreditNoteAllocationRequestInput,
    CreateCreditNoteRequestInput,
    CreateCustomDomainRequestInput,
    CreateCustomerAccessLinkRequestInput
} from './types-7.js';
import type {
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
    CreateDeliveryMethodRequestShipmentInput,
    CreateDeliveryOptionsPreviewRequestInput,
    CreateDeliveryPickupLocationsPreviewRequestInput,
    CreateDeliveryPreviewRequestInput,
    CreateDeliveryProfileRequestInput,
    CreateDeliveryRateCallbackRequestInput,
    CreateDeliveryRevocationRequestInput,
    CreateDeliveryRevocationTargetInput,
    CreateDeliveryRevocationTargetDeliveryMethodRevisionInput,
    CreateDeliveryRevocationTargetDeliveryRateCallbackRevisionInput,
    CreateDeliveryRevocationTargetDeliveryRateCallbackSigningKeyInput
} from './types-8.js';
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
export declare function makeCreateCheckoutSessionOrder(value: InputValue<CreateCheckoutSessionOrderInput>): Model<CreateCheckoutSessionOrderInput>;
export declare function makeCreateCheckoutSessionQuickPay(value: InputValue<CreateCheckoutSessionQuickPayInput>): Model<CreateCheckoutSessionQuickPayInput>;
export declare function makeCreateCheckoutSessionRequest(value: InputValue<CreateCheckoutSessionRequestInput>): Model<CreateCheckoutSessionRequestInput>;
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
export declare function makeCreateDeliveryOptionsPreviewRequest(value: InputValue<CreateDeliveryOptionsPreviewRequestInput>): Model<CreateDeliveryOptionsPreviewRequestInput>;
export declare function makeCreateDeliveryPickupLocationsPreviewRequest(value: InputValue<CreateDeliveryPickupLocationsPreviewRequestInput>): Model<CreateDeliveryPickupLocationsPreviewRequestInput>;
export declare function makeCreateDeliveryPreviewRequest(value: InputValue<Exclude<CreateDeliveryPreviewRequestInput & object, readonly unknown[]>>): Model<Exclude<CreateDeliveryPreviewRequestInput & object, readonly unknown[]>>;
export declare function makeCreateDeliveryPreviewRequest(value: InputValue<CreateDeliveryPreviewRequestInput>): Model<CreateDeliveryPreviewRequestInput>;
export declare function makeCreateDeliveryProfileRequest(value: InputValue<CreateDeliveryProfileRequestInput>): Model<CreateDeliveryProfileRequestInput>;
export declare function makeCreateDeliveryRateCallbackRequest(value: InputValue<CreateDeliveryRateCallbackRequestInput>): Model<CreateDeliveryRateCallbackRequestInput>;
export declare function makeCreateDeliveryRevocationRequest(value: InputValue<CreateDeliveryRevocationRequestInput>): Model<CreateDeliveryRevocationRequestInput>;
export declare function makeCreateDeliveryRevocationTarget(value: InputValue<CreateDeliveryRevocationTargetInput>): Model<CreateDeliveryRevocationTargetInput>;
export declare function makeCreateDeliveryRevocationTargetDeliveryMethodRevision(value: InputValue<CreateDeliveryRevocationTargetDeliveryMethodRevisionInput>): Model<CreateDeliveryRevocationTargetDeliveryMethodRevisionInput>;
export declare function makeCreateDeliveryRevocationTargetDeliveryRateCallbackRevision(value: InputValue<CreateDeliveryRevocationTargetDeliveryRateCallbackRevisionInput>): Model<CreateDeliveryRevocationTargetDeliveryRateCallbackRevisionInput>;
export declare function makeCreateDeliveryRevocationTargetDeliveryRateCallbackSigningKey(value: InputValue<CreateDeliveryRevocationTargetDeliveryRateCallbackSigningKeyInput>): Model<CreateDeliveryRevocationTargetDeliveryRateCallbackSigningKeyInput>;
