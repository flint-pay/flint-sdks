import type { InputValue, Model } from '../runtime.js';
import type {
    CreateInvoiceManualPaymentRequestInput,
    CreateInvoicePaymentTermRequestInput,
    CreateInvoiceQuickPayRequestInput,
    CreateInvoiceRequestInput
} from './types-10.js';
import type {
    CreateInvoiceRequestOrderInput,
    CreateInvoiceRequestQuickPayInput,
    CreateLicenseKeyActivationRequestInput,
    CreateLicenseKeyPoolKeysRequestInput,
    CreateLicenseKeyPoolRequestInput,
    CreateLocationRequestInput,
    CreateMeCheckoutSessionInvoiceInput,
    CreateMeCheckoutSessionRequestInput,
    CreateMeCheckoutSessionReturnResolutionInput,
    CreateMeSubscriptionPreviewRequestInput,
    CreateMeSubscriptionPreviewRequestDeliveryOptionsInput,
    CreateMeSubscriptionPreviewRequestNextRenewalInput,
    CreateMeSubscriptionPreviewRequestPlanChangeInput,
    CreateMeSubscriptionPreviewRequestQuantityChangeInput,
    CreateMerchantSignupRequestInput,
    CreateModifierGroupRequestInput,
    CreateModifierRequestInput,
    CreateModifierSetGroupInputExistingInput,
    CreateModifierSetGroupInputInlineInput,
    CreateModifierSetGroupRequestInput,
    CreateModifierSetRequestInput,
    CreateOnboardingAccessLinkRequestInput,
    CreateOrderDiscountInput,
    CreateOrderDiscountManualInput,
    CreateOrderDiscountPromotionInput,
    CreateOrderEditRequestInput,
    CreateOrderLineItemInputBundleInput,
    CreateOrderLineItemInputCustomInput,
    CreateOrderLineItemInputVariantInput,
    CreateOrderLineItemRequestInput
} from './types-11.js';
import type {
    CreateOrderRequestInput,
    CreateOrderTipInput,
    CreateOrderTipAmountInput,
    CreateOrderTipPercentInput,
    CreatePackageItemRequestInput,
    CreatePackageRequestInput,
    CreatePackageRequestCreatedInput,
    CreatePackageRequestShippedInput,
    CreatePartnerAppCredentialJWKSURLRequestInput,
    CreatePartnerAppCredentialPublicKeyRequestInput,
    CreatePartnerAppCredentialRequestInput,
    CreatePartnerAppCredentialWorkloadIdentityRequestInput,
    CreatePartnerAppRequestInput,
    CreatePaymentIntentRequestInput,
    CreatePaymentLinkRequestInput,
    CreatePaymentMethodDomainRequestInput,
    CreatePayoutRequestInput,
    CreatePickupFulfillmentDetailsInput,
    CreatePriceListPricesRequestInput,
    CreatePriceListRequestInput,
    CreateProductOptionRequestInput,
    CreateProductOptionValueRequestInput,
    CreateProductRequestInput,
    CreateProductRequestOptionedInput,
    CreateProductRequestSimpleInput,
    CreatePromotionCodeRequestInput,
    CreatePromotionRequestInput,
    CreateReaderRequestInput,
    CreateReceivablesAgingReportRequestInput
} from './types-12.js';
import type { CreateRefundRequestInput } from './types-13.js';
export declare function makeCreateInvoiceManualPaymentRequest(value: InputValue<CreateInvoiceManualPaymentRequestInput>): Model<CreateInvoiceManualPaymentRequestInput>;
export declare function makeCreateInvoicePaymentTermRequest(value: InputValue<CreateInvoicePaymentTermRequestInput>): Model<CreateInvoicePaymentTermRequestInput>;
export declare function makeCreateInvoiceQuickPayRequest(value: InputValue<CreateInvoiceQuickPayRequestInput>): Model<CreateInvoiceQuickPayRequestInput>;
export declare function makeCreateInvoiceRequest(value: InputValue<CreateInvoiceRequestInput>): Model<CreateInvoiceRequestInput>;
export declare function makeCreateInvoiceRequestOrder(value: InputValue<CreateInvoiceRequestOrderInput>): Model<CreateInvoiceRequestOrderInput>;
export declare function makeCreateInvoiceRequestQuickPay(value: InputValue<CreateInvoiceRequestQuickPayInput>): Model<CreateInvoiceRequestQuickPayInput>;
export declare function makeCreateLicenseKeyActivationRequest(value: InputValue<CreateLicenseKeyActivationRequestInput>): Model<CreateLicenseKeyActivationRequestInput>;
export declare function makeCreateLicenseKeyPoolKeysRequest(value: InputValue<CreateLicenseKeyPoolKeysRequestInput>): Model<CreateLicenseKeyPoolKeysRequestInput>;
export declare function makeCreateLicenseKeyPoolRequest(value: InputValue<CreateLicenseKeyPoolRequestInput>): Model<CreateLicenseKeyPoolRequestInput>;
export declare function makeCreateLocationRequest(value: InputValue<CreateLocationRequestInput>): Model<CreateLocationRequestInput>;
export declare function makeCreateMeCheckoutSessionInvoice(value: InputValue<CreateMeCheckoutSessionInvoiceInput>): Model<CreateMeCheckoutSessionInvoiceInput>;
export declare function makeCreateMeCheckoutSessionRequest(value: InputValue<CreateMeCheckoutSessionRequestInput>): Model<CreateMeCheckoutSessionRequestInput>;
export declare function makeCreateMeCheckoutSessionReturnResolution(value: InputValue<CreateMeCheckoutSessionReturnResolutionInput>): Model<CreateMeCheckoutSessionReturnResolutionInput>;
export declare function makeCreateMeSubscriptionPreviewRequest(value: InputValue<Exclude<CreateMeSubscriptionPreviewRequestInput & object, readonly unknown[]>>): Model<Exclude<CreateMeSubscriptionPreviewRequestInput & object, readonly unknown[]>>;
export declare function makeCreateMeSubscriptionPreviewRequest(value: InputValue<CreateMeSubscriptionPreviewRequestInput>): Model<CreateMeSubscriptionPreviewRequestInput>;
export declare function makeCreateMeSubscriptionPreviewRequestDeliveryOptions(value: InputValue<CreateMeSubscriptionPreviewRequestDeliveryOptionsInput>): Model<CreateMeSubscriptionPreviewRequestDeliveryOptionsInput>;
export declare function makeCreateMeSubscriptionPreviewRequestNextRenewal(value: InputValue<CreateMeSubscriptionPreviewRequestNextRenewalInput>): Model<CreateMeSubscriptionPreviewRequestNextRenewalInput>;
export declare function makeCreateMeSubscriptionPreviewRequestPlanChange(value: InputValue<CreateMeSubscriptionPreviewRequestPlanChangeInput>): Model<CreateMeSubscriptionPreviewRequestPlanChangeInput>;
export declare function makeCreateMeSubscriptionPreviewRequestQuantityChange(value: InputValue<CreateMeSubscriptionPreviewRequestQuantityChangeInput>): Model<CreateMeSubscriptionPreviewRequestQuantityChangeInput>;
export declare function makeCreateMerchantSignupRequest(value: InputValue<CreateMerchantSignupRequestInput>): Model<CreateMerchantSignupRequestInput>;
export declare function makeCreateModifierGroupRequest(value: InputValue<CreateModifierGroupRequestInput>): Model<CreateModifierGroupRequestInput>;
export declare function makeCreateModifierRequest(value: InputValue<CreateModifierRequestInput>): Model<CreateModifierRequestInput>;
export declare function makeCreateModifierSetGroupInputExisting(value: InputValue<CreateModifierSetGroupInputExistingInput>): Model<CreateModifierSetGroupInputExistingInput>;
export declare function makeCreateModifierSetGroupInputInline(value: InputValue<CreateModifierSetGroupInputInlineInput>): Model<CreateModifierSetGroupInputInlineInput>;
export declare function makeCreateModifierSetGroupRequest(value: InputValue<CreateModifierSetGroupRequestInput>): Model<CreateModifierSetGroupRequestInput>;
export declare function makeCreateModifierSetRequest(value: InputValue<CreateModifierSetRequestInput>): Model<CreateModifierSetRequestInput>;
export declare function makeCreateOnboardingAccessLinkRequest(value: InputValue<CreateOnboardingAccessLinkRequestInput>): Model<CreateOnboardingAccessLinkRequestInput>;
export declare function makeCreateOrderDiscount(value: InputValue<CreateOrderDiscountInput>): Model<CreateOrderDiscountInput>;
export declare function makeCreateOrderDiscountManual(value: InputValue<CreateOrderDiscountManualInput>): Model<CreateOrderDiscountManualInput>;
export declare function makeCreateOrderDiscountPromotion(value: InputValue<CreateOrderDiscountPromotionInput>): Model<CreateOrderDiscountPromotionInput>;
export declare function makeCreateOrderEditRequest(value: InputValue<CreateOrderEditRequestInput>): Model<CreateOrderEditRequestInput>;
export declare function makeCreateOrderLineItemInputBundle(value: InputValue<CreateOrderLineItemInputBundleInput>): Model<CreateOrderLineItemInputBundleInput>;
export declare function makeCreateOrderLineItemInputCustom(value: InputValue<CreateOrderLineItemInputCustomInput>): Model<CreateOrderLineItemInputCustomInput>;
export declare function makeCreateOrderLineItemInputVariant(value: InputValue<CreateOrderLineItemInputVariantInput>): Model<CreateOrderLineItemInputVariantInput>;
export declare function makeCreateOrderLineItemRequest(value: InputValue<CreateOrderLineItemRequestInput>): Model<CreateOrderLineItemRequestInput>;
export declare function makeCreateOrderRequest(value: InputValue<CreateOrderRequestInput>): Model<CreateOrderRequestInput>;
export declare function makeCreateOrderTip(value: InputValue<CreateOrderTipInput>): Model<CreateOrderTipInput>;
export declare function makeCreateOrderTipAmount(value: InputValue<CreateOrderTipAmountInput>): Model<CreateOrderTipAmountInput>;
export declare function makeCreateOrderTipPercent(value: InputValue<CreateOrderTipPercentInput>): Model<CreateOrderTipPercentInput>;
export declare function makeCreatePackageItemRequest(value: InputValue<CreatePackageItemRequestInput>): Model<CreatePackageItemRequestInput>;
export declare function makeCreatePackageRequest(value: InputValue<CreatePackageRequestInput>): Model<CreatePackageRequestInput>;
export declare function makeCreatePackageRequestCreated(value: InputValue<CreatePackageRequestCreatedInput>): Model<CreatePackageRequestCreatedInput>;
export declare function makeCreatePackageRequestShipped(value: InputValue<CreatePackageRequestShippedInput>): Model<CreatePackageRequestShippedInput>;
export declare function makeCreatePartnerAppCredentialJWKSURLRequest(value: InputValue<CreatePartnerAppCredentialJWKSURLRequestInput>): Model<CreatePartnerAppCredentialJWKSURLRequestInput>;
export declare function makeCreatePartnerAppCredentialPublicKeyRequest(value: InputValue<CreatePartnerAppCredentialPublicKeyRequestInput>): Model<CreatePartnerAppCredentialPublicKeyRequestInput>;
export declare function makeCreatePartnerAppCredentialRequest(value: InputValue<Exclude<CreatePartnerAppCredentialRequestInput & object, readonly unknown[]>>): Model<Exclude<CreatePartnerAppCredentialRequestInput & object, readonly unknown[]>>;
export declare function makeCreatePartnerAppCredentialRequest(value: InputValue<CreatePartnerAppCredentialRequestInput>): Model<CreatePartnerAppCredentialRequestInput>;
export declare function makeCreatePartnerAppCredentialWorkloadIdentityRequest(value: InputValue<CreatePartnerAppCredentialWorkloadIdentityRequestInput>): Model<CreatePartnerAppCredentialWorkloadIdentityRequestInput>;
export declare function makeCreatePartnerAppRequest(value: InputValue<CreatePartnerAppRequestInput>): Model<CreatePartnerAppRequestInput>;
export declare function makeCreatePaymentIntentRequest(value: InputValue<CreatePaymentIntentRequestInput>): Model<CreatePaymentIntentRequestInput>;
export declare function makeCreatePaymentLinkRequest(value: InputValue<CreatePaymentLinkRequestInput>): Model<CreatePaymentLinkRequestInput>;
export declare function makeCreatePaymentMethodDomainRequest(value: InputValue<CreatePaymentMethodDomainRequestInput>): Model<CreatePaymentMethodDomainRequestInput>;
export declare function makeCreatePayoutRequest(value: InputValue<CreatePayoutRequestInput>): Model<CreatePayoutRequestInput>;
export declare function makeCreatePickupFulfillmentDetails(value: InputValue<CreatePickupFulfillmentDetailsInput>): Model<CreatePickupFulfillmentDetailsInput>;
export declare function makeCreatePriceListPricesRequest(value: InputValue<CreatePriceListPricesRequestInput>): Model<CreatePriceListPricesRequestInput>;
export declare function makeCreatePriceListRequest(value: InputValue<CreatePriceListRequestInput>): Model<CreatePriceListRequestInput>;
export declare function makeCreateProductOptionRequest(value: InputValue<CreateProductOptionRequestInput>): Model<CreateProductOptionRequestInput>;
export declare function makeCreateProductOptionValueRequest(value: InputValue<CreateProductOptionValueRequestInput>): Model<CreateProductOptionValueRequestInput>;
export declare function makeCreateProductRequest(value: InputValue<CreateProductRequestInput>): Model<CreateProductRequestInput>;
export declare function makeCreateProductRequestOptioned(value: InputValue<CreateProductRequestOptionedInput>): Model<CreateProductRequestOptionedInput>;
export declare function makeCreateProductRequestSimple(value: InputValue<CreateProductRequestSimpleInput>): Model<CreateProductRequestSimpleInput>;
export declare function makeCreatePromotionCodeRequest(value: InputValue<CreatePromotionCodeRequestInput>): Model<CreatePromotionCodeRequestInput>;
export declare function makeCreatePromotionRequest(value: InputValue<CreatePromotionRequestInput>): Model<CreatePromotionRequestInput>;
export declare function makeCreateReaderRequest(value: InputValue<Exclude<CreateReaderRequestInput & object, readonly unknown[]>>): Model<Exclude<CreateReaderRequestInput & object, readonly unknown[]>>;
export declare function makeCreateReaderRequest(value: InputValue<CreateReaderRequestInput>): Model<CreateReaderRequestInput>;
export declare function makeCreateReceivablesAgingReportRequest(value: InputValue<CreateReceivablesAgingReportRequestInput>): Model<CreateReceivablesAgingReportRequestInput>;
export declare function makeCreateRefundRequest(value: InputValue<CreateRefundRequestInput>): Model<CreateRefundRequestInput>;
