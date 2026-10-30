import type { InputValue, Model } from '../runtime.js';
import type {
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
    CreateCheckoutSessionUseSavedPaymentMethodsVerificationRequestInput,
    CreateCreditNoteAllocationRequestInput,
    CreateCreditNoteRefundRequestInput,
    CreateCreditNoteRequestInput,
    CreateCustomDomainRequestInput,
    CreateCustomerAddressRequestInput
} from './types-6.js';
import type {
    CreateCustomerDeletionRequestInput,
    CreateCustomerRequestInput,
    CreateCustomerSessionRequestInput,
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
    CreateDeliverySelectionChoiceRequestInput,
    CreateDeliverySelectionRequestInput,
    CreateDeliveryZoneRequestInput,
    CreateDemoSessionRequestInput,
    CreateDeviceRequestInput,
    CreateDigitalFulfillmentDetailsInput,
    CreateEmailChangeRequestInput,
    CreateFeedbackReportNarrativeInput,
    CreateFeedbackReportRatingInput,
    CreateFeedbackReportRequestInput,
    CreateFileRequestInput,
    CreateFulfillmentEventRequestInput,
    CreateFulfillmentRequestInput,
    CreateFulfillmentRequestDigitalInput,
    CreateFulfillmentRequestLocalDeliveryInput,
    CreateFulfillmentRequestPickupInput,
    CreateFulfillmentRequestServiceInput
} from './types-7.js';
import type {
    CreateFulfillmentRequestShipmentInput,
    CreateGiftCardFundingDispositionRequestInput,
    CreateGiftCardLoadRequestInput,
    CreateGiftCardNotificationRequestInput,
    CreateGiftCardRedemptionRequestInput,
    CreateGiftCardRedemptionRequestAutomaticInput,
    CreateGiftCardRedemptionRequestManualInput,
    CreateGiftCardRequestInput,
    CreateInlineModifierGroupRequestInput
} from './types-8.js';
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
export declare function makeCreateDeliveryMethodRequestPickup(value: InputValue<CreateDeliveryMethodRequestPickupInput>): Model<CreateDeliveryMethodRequestPickupInput>;
export declare function makeCreateDeliveryMethodRequestShipment(value: InputValue<CreateDeliveryMethodRequestShipmentInput>): Model<CreateDeliveryMethodRequestShipmentInput>;
export declare function makeCreateDeliveryOptionsPreviewRequest(value: InputValue<CreateDeliveryOptionsPreviewRequestInput>): Model<CreateDeliveryOptionsPreviewRequestInput>;
export declare function makeCreateDeliveryPickupLocationsPreviewRequest(value: InputValue<CreateDeliveryPickupLocationsPreviewRequestInput>): Model<CreateDeliveryPickupLocationsPreviewRequestInput>;
export declare function makeCreateDeliveryPreviewRequest(value: InputValue<Exclude<CreateDeliveryPreviewRequestInput & object, readonly unknown[]>>): Model<Exclude<CreateDeliveryPreviewRequestInput & object, readonly unknown[]>>;
export declare function makeCreateDeliveryPreviewRequest(value: InputValue<CreateDeliveryPreviewRequestInput>): Model<CreateDeliveryPreviewRequestInput>;
export declare function makeCreateDeliveryProfileRequest(value: InputValue<CreateDeliveryProfileRequestInput>): Model<CreateDeliveryProfileRequestInput>;
export declare function makeCreateDeliveryRateCallbackRequest(value: InputValue<CreateDeliveryRateCallbackRequestInput>): Model<CreateDeliveryRateCallbackRequestInput>;
export declare function makeCreateDeliverySelectionChoiceRequest(value: InputValue<CreateDeliverySelectionChoiceRequestInput>): Model<CreateDeliverySelectionChoiceRequestInput>;
export declare function makeCreateDeliverySelectionRequest(value: InputValue<CreateDeliverySelectionRequestInput>): Model<CreateDeliverySelectionRequestInput>;
export declare function makeCreateDeliveryZoneRequest(value: InputValue<CreateDeliveryZoneRequestInput>): Model<CreateDeliveryZoneRequestInput>;
export declare function makeCreateDemoSessionRequest(value: InputValue<CreateDemoSessionRequestInput>): Model<CreateDemoSessionRequestInput>;
export declare function makeCreateDeviceRequest(value: InputValue<CreateDeviceRequestInput>): Model<CreateDeviceRequestInput>;
export declare function makeCreateDigitalFulfillmentDetails(value: InputValue<CreateDigitalFulfillmentDetailsInput>): Model<CreateDigitalFulfillmentDetailsInput>;
export declare function makeCreateEmailChangeRequest(value: InputValue<CreateEmailChangeRequestInput>): Model<CreateEmailChangeRequestInput>;
export declare function makeCreateFeedbackReportNarrative(value: InputValue<CreateFeedbackReportNarrativeInput>): Model<CreateFeedbackReportNarrativeInput>;
export declare function makeCreateFeedbackReportRating(value: InputValue<CreateFeedbackReportRatingInput>): Model<CreateFeedbackReportRatingInput>;
export declare function makeCreateFeedbackReportRequest(value: InputValue<CreateFeedbackReportRequestInput>): Model<CreateFeedbackReportRequestInput>;
export declare function makeCreateFileRequest(value: InputValue<CreateFileRequestInput>): Model<CreateFileRequestInput>;
export declare function makeCreateFulfillmentEventRequest(value: InputValue<CreateFulfillmentEventRequestInput>): Model<CreateFulfillmentEventRequestInput>;
export declare function makeCreateFulfillmentRequest(value: InputValue<CreateFulfillmentRequestInput>): Model<CreateFulfillmentRequestInput>;
export declare function makeCreateFulfillmentRequestDigital(value: InputValue<CreateFulfillmentRequestDigitalInput>): Model<CreateFulfillmentRequestDigitalInput>;
export declare function makeCreateFulfillmentRequestLocalDelivery(value: InputValue<CreateFulfillmentRequestLocalDeliveryInput>): Model<CreateFulfillmentRequestLocalDeliveryInput>;
export declare function makeCreateFulfillmentRequestPickup(value: InputValue<CreateFulfillmentRequestPickupInput>): Model<CreateFulfillmentRequestPickupInput>;
export declare function makeCreateFulfillmentRequestService(value: InputValue<CreateFulfillmentRequestServiceInput>): Model<CreateFulfillmentRequestServiceInput>;
export declare function makeCreateFulfillmentRequestShipment(value: InputValue<CreateFulfillmentRequestShipmentInput>): Model<CreateFulfillmentRequestShipmentInput>;
export declare function makeCreateGiftCardFundingDispositionRequest(value: InputValue<CreateGiftCardFundingDispositionRequestInput>): Model<CreateGiftCardFundingDispositionRequestInput>;
export declare function makeCreateGiftCardLoadRequest(value: InputValue<CreateGiftCardLoadRequestInput>): Model<CreateGiftCardLoadRequestInput>;
export declare function makeCreateGiftCardNotificationRequest(value: InputValue<CreateGiftCardNotificationRequestInput>): Model<CreateGiftCardNotificationRequestInput>;
export declare function makeCreateGiftCardRedemptionRequest(value: InputValue<CreateGiftCardRedemptionRequestInput>): Model<CreateGiftCardRedemptionRequestInput>;
export declare function makeCreateGiftCardRedemptionRequestAutomatic(value: InputValue<CreateGiftCardRedemptionRequestAutomaticInput>): Model<CreateGiftCardRedemptionRequestAutomaticInput>;
export declare function makeCreateGiftCardRedemptionRequestManual(value: InputValue<CreateGiftCardRedemptionRequestManualInput>): Model<CreateGiftCardRedemptionRequestManualInput>;
export declare function makeCreateGiftCardRequest(value: InputValue<CreateGiftCardRequestInput>): Model<CreateGiftCardRequestInput>;
export declare function makeCreateInlineModifierGroupRequest(value: InputValue<CreateInlineModifierGroupRequestInput>): Model<CreateInlineModifierGroupRequestInput>;
