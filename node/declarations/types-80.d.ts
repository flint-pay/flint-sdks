import type { InputValue, Model } from '../runtime.js';
import type {
    OrderTaxRequestInput,
    OrderTaxUpdateRequestInput,
    PackageCreateInputCreatedInput,
    PackageCreateInputShippedInput
} from './types-42.js';
import type {
    PackageCreateRequestInput,
    PartnerAppCredentialJWKSURLRequestInput,
    PartnerAppCredentialPublicKeyRequestInput,
    PartnerAppCredentialWorkloadIdentityRequestInput,
    PartnerAppPaymentSplitsRequestInput,
    PartnerAppPermissionManifestEntryRequestInput
} from './types-43.js';
import type {
    PartnerAppPlatformProfileRequestInput,
    PauseSubscriptionRequestInput,
    PayOrderRequestInput,
    PayOrderRequestConfirmPaymentIntentsInput,
    PayOrderRequestPayInput,
    PayOrderRequestResumeInput,
    PayOrderRequestSetupInput
} from './types-44.js';
import type {
    PaymentLimitSettingsPatchInput,
    PaymentLinkCustomFieldPatchRequestInput,
    PaymentLinkCustomFieldRequestInput
} from './types-45.js';
import type {
    PaymentLinkCustomTextConfigInput,
    PaymentLinkCustomTextPatchRequestInput,
    PaymentLinkEventConfigPatchRequestInput,
    PaymentLinkEventConfigRequestInput,
    PaymentLinkLegalConfigInput,
    PaymentLinkLegalPatchRequestInput,
    PaymentLinkLineItemInputBundleInput,
    PaymentLinkLineItemInputCustomFixedInput,
    PaymentLinkLineItemInputCustomVariableInput,
    PaymentLinkLineItemInputVariantInput,
    PaymentLinkLineItemPatchInputBundleInput,
    PaymentLinkLineItemPatchInputCustomFixedInput,
    PaymentLinkLineItemPatchInputCustomVariableInput,
    PaymentLinkLineItemPatchInputVariantInput,
    PaymentLinkLineItemPatchRequestInput,
    PaymentLinkLineItemRequestInput,
    PaymentLinkPaymentConfigInput,
    PaymentLinkPaymentPatchRequestInput,
    PaymentLinkRedirectsPatchRequestInput,
    PaymentLinkResolvePrefillRequestInput,
    PaymentLinkThemeConfigInput,
    PaymentLinkThemePatchRequestInput
} from './types-46.js';
import type {
    PaymentSettingsPatchInput,
    PaymentSourceCredentialInput,
    PaymentSourceCredentialPaymentMethodInput,
    PaymentSourceCredentialReaderInput,
    PaymentSourceCredentialStripeConfirmationTokenInput,
    PaymentSourceCredentialTokenInput
} from './types-47.js';
import type { PaymentSplitRequestInput } from './types-48.js';
import type { PlatformFeeCapRequestInput, PlatformFeeRequestInput, PriceListPriceRequestInput } from './types-49.js';
import type {
    ProcessExistingReturnLineItemRequestInput,
    ProcessExistingReturnRequestInput,
    ProductVariantRequestInput,
    ProductVariantSelectedOptionRequestInput,
    PromotionAmountOffMethodRequestInput,
    PromotionApplicationMethodPatchInput,
    PromotionApplicationMethodRequestInput
} from './types-50.js';
import type {
    PromotionBuyXGetYMethodRequestInput,
    PromotionCodeRequestInput,
    PromotionCombinesWithPatchInput,
    PromotionCombinesWithRequestInput,
    PromotionExclusivityPatchInput
} from './types-51.js';
export declare function makeOrderTaxRequest(value: InputValue<OrderTaxRequestInput>): Model<OrderTaxRequestInput>;
export declare function makeOrderTaxUpdateRequest(value: InputValue<OrderTaxUpdateRequestInput>): Model<OrderTaxUpdateRequestInput>;
export declare function makePackageCreateInputCreated(value: InputValue<PackageCreateInputCreatedInput>): Model<PackageCreateInputCreatedInput>;
export declare function makePackageCreateInputShipped(value: InputValue<PackageCreateInputShippedInput>): Model<PackageCreateInputShippedInput>;
export declare function makePackageCreateRequest(value: InputValue<PackageCreateRequestInput>): Model<PackageCreateRequestInput>;
export declare function makePartnerAppCredentialJWKSURLRequest(value: InputValue<PartnerAppCredentialJWKSURLRequestInput>): Model<PartnerAppCredentialJWKSURLRequestInput>;
export declare function makePartnerAppCredentialPublicKeyRequest(value: InputValue<PartnerAppCredentialPublicKeyRequestInput>): Model<PartnerAppCredentialPublicKeyRequestInput>;
export declare function makePartnerAppCredentialWorkloadIdentityRequest(value: InputValue<PartnerAppCredentialWorkloadIdentityRequestInput>): Model<PartnerAppCredentialWorkloadIdentityRequestInput>;
export declare function makePartnerAppPaymentSplitsRequest(value: InputValue<PartnerAppPaymentSplitsRequestInput>): Model<PartnerAppPaymentSplitsRequestInput>;
export declare function makePartnerAppPermissionManifestEntryRequest(value: InputValue<PartnerAppPermissionManifestEntryRequestInput>): Model<PartnerAppPermissionManifestEntryRequestInput>;
export declare function makePartnerAppPlatformProfileRequest(value: InputValue<PartnerAppPlatformProfileRequestInput>): Model<PartnerAppPlatformProfileRequestInput>;
export declare function makePauseSubscriptionRequest(value: InputValue<PauseSubscriptionRequestInput>): Model<PauseSubscriptionRequestInput>;
export declare function makePayOrderRequest(value: InputValue<Exclude<PayOrderRequestInput & object, readonly unknown[]>>): Model<Exclude<PayOrderRequestInput & object, readonly unknown[]>>;
export declare function makePayOrderRequest(value: InputValue<PayOrderRequestInput>): Model<PayOrderRequestInput>;
export declare function makePayOrderRequestConfirmPaymentIntents(value: InputValue<PayOrderRequestConfirmPaymentIntentsInput>): Model<PayOrderRequestConfirmPaymentIntentsInput>;
export declare function makePayOrderRequestPay(value: InputValue<PayOrderRequestPayInput>): Model<PayOrderRequestPayInput>;
export declare function makePayOrderRequestResume(value: InputValue<PayOrderRequestResumeInput>): Model<PayOrderRequestResumeInput>;
export declare function makePayOrderRequestSetup(value: InputValue<PayOrderRequestSetupInput>): Model<PayOrderRequestSetupInput>;
export declare function makePaymentLimitSettingsPatch(value: InputValue<PaymentLimitSettingsPatchInput>): Model<PaymentLimitSettingsPatchInput>;
export declare function makePaymentLinkCustomFieldPatchRequest(value: InputValue<PaymentLinkCustomFieldPatchRequestInput>): Model<PaymentLinkCustomFieldPatchRequestInput>;
export declare function makePaymentLinkCustomFieldRequest(value: InputValue<PaymentLinkCustomFieldRequestInput>): Model<PaymentLinkCustomFieldRequestInput>;
export declare function makePaymentLinkCustomTextConfig(value: InputValue<PaymentLinkCustomTextConfigInput>): Model<PaymentLinkCustomTextConfigInput>;
export declare function makePaymentLinkCustomTextPatchRequest(value: InputValue<PaymentLinkCustomTextPatchRequestInput>): Model<PaymentLinkCustomTextPatchRequestInput>;
export declare function makePaymentLinkEventConfigPatchRequest(value: InputValue<PaymentLinkEventConfigPatchRequestInput>): Model<PaymentLinkEventConfigPatchRequestInput>;
export declare function makePaymentLinkEventConfigRequest(value: InputValue<PaymentLinkEventConfigRequestInput>): Model<PaymentLinkEventConfigRequestInput>;
export declare function makePaymentLinkLegalConfig(value: InputValue<PaymentLinkLegalConfigInput>): Model<PaymentLinkLegalConfigInput>;
export declare function makePaymentLinkLegalPatchRequest(value: InputValue<PaymentLinkLegalPatchRequestInput>): Model<PaymentLinkLegalPatchRequestInput>;
export declare function makePaymentLinkLineItemInputBundle(value: InputValue<PaymentLinkLineItemInputBundleInput>): Model<PaymentLinkLineItemInputBundleInput>;
export declare function makePaymentLinkLineItemInputCustomFixed(value: InputValue<PaymentLinkLineItemInputCustomFixedInput>): Model<PaymentLinkLineItemInputCustomFixedInput>;
export declare function makePaymentLinkLineItemInputCustomVariable(value: InputValue<PaymentLinkLineItemInputCustomVariableInput>): Model<PaymentLinkLineItemInputCustomVariableInput>;
export declare function makePaymentLinkLineItemInputVariant(value: InputValue<PaymentLinkLineItemInputVariantInput>): Model<PaymentLinkLineItemInputVariantInput>;
export declare function makePaymentLinkLineItemPatchInputBundle(value: InputValue<PaymentLinkLineItemPatchInputBundleInput>): Model<PaymentLinkLineItemPatchInputBundleInput>;
export declare function makePaymentLinkLineItemPatchInputCustomFixed(value: InputValue<PaymentLinkLineItemPatchInputCustomFixedInput>): Model<PaymentLinkLineItemPatchInputCustomFixedInput>;
export declare function makePaymentLinkLineItemPatchInputCustomVariable(value: InputValue<PaymentLinkLineItemPatchInputCustomVariableInput>): Model<PaymentLinkLineItemPatchInputCustomVariableInput>;
export declare function makePaymentLinkLineItemPatchInputVariant(value: InputValue<PaymentLinkLineItemPatchInputVariantInput>): Model<PaymentLinkLineItemPatchInputVariantInput>;
export declare function makePaymentLinkLineItemPatchRequest(value: InputValue<PaymentLinkLineItemPatchRequestInput>): Model<PaymentLinkLineItemPatchRequestInput>;
export declare function makePaymentLinkLineItemRequest(value: InputValue<PaymentLinkLineItemRequestInput>): Model<PaymentLinkLineItemRequestInput>;
export declare function makePaymentLinkPaymentConfig(value: InputValue<PaymentLinkPaymentConfigInput>): Model<PaymentLinkPaymentConfigInput>;
export declare function makePaymentLinkPaymentPatchRequest(value: InputValue<PaymentLinkPaymentPatchRequestInput>): Model<PaymentLinkPaymentPatchRequestInput>;
export declare function makePaymentLinkRedirectsPatchRequest(value: InputValue<PaymentLinkRedirectsPatchRequestInput>): Model<PaymentLinkRedirectsPatchRequestInput>;
export declare function makePaymentLinkResolvePrefillRequest(value: InputValue<PaymentLinkResolvePrefillRequestInput>): Model<PaymentLinkResolvePrefillRequestInput>;
export declare function makePaymentLinkThemeConfig(value: InputValue<PaymentLinkThemeConfigInput>): Model<PaymentLinkThemeConfigInput>;
export declare function makePaymentLinkThemePatchRequest(value: InputValue<PaymentLinkThemePatchRequestInput>): Model<PaymentLinkThemePatchRequestInput>;
export declare function makePaymentSettingsPatch(value: InputValue<PaymentSettingsPatchInput>): Model<PaymentSettingsPatchInput>;
export declare function makePaymentSourceCredential(value: InputValue<Exclude<PaymentSourceCredentialInput & object, readonly unknown[]>>): Model<Exclude<PaymentSourceCredentialInput & object, readonly unknown[]>>;
export declare function makePaymentSourceCredential(value: InputValue<PaymentSourceCredentialInput>): Model<PaymentSourceCredentialInput>;
export declare function makePaymentSourceCredentialPaymentMethod(value: InputValue<PaymentSourceCredentialPaymentMethodInput>): Model<PaymentSourceCredentialPaymentMethodInput>;
export declare function makePaymentSourceCredentialReader(value: InputValue<PaymentSourceCredentialReaderInput>): Model<PaymentSourceCredentialReaderInput>;
export declare function makePaymentSourceCredentialStripeConfirmationToken(value: InputValue<PaymentSourceCredentialStripeConfirmationTokenInput>): Model<PaymentSourceCredentialStripeConfirmationTokenInput>;
export declare function makePaymentSourceCredentialToken(value: InputValue<PaymentSourceCredentialTokenInput>): Model<PaymentSourceCredentialTokenInput>;
export declare function makePaymentSplitRequest(value: InputValue<PaymentSplitRequestInput>): Model<PaymentSplitRequestInput>;
export declare function makePlatformFeeCapRequest(value: InputValue<PlatformFeeCapRequestInput>): Model<PlatformFeeCapRequestInput>;
export declare function makePlatformFeeRequest(value: InputValue<PlatformFeeRequestInput>): Model<PlatformFeeRequestInput>;
export declare function makePriceListPriceRequest(value: InputValue<PriceListPriceRequestInput>): Model<PriceListPriceRequestInput>;
export declare function makeProcessExistingReturnLineItemRequest(value: InputValue<ProcessExistingReturnLineItemRequestInput>): Model<ProcessExistingReturnLineItemRequestInput>;
export declare function makeProcessExistingReturnRequest(value: InputValue<ProcessExistingReturnRequestInput>): Model<ProcessExistingReturnRequestInput>;
export declare function makeProductVariantRequest(value: InputValue<ProductVariantRequestInput>): Model<ProductVariantRequestInput>;
export declare function makeProductVariantSelectedOptionRequest(value: InputValue<ProductVariantSelectedOptionRequestInput>): Model<ProductVariantSelectedOptionRequestInput>;
export declare function makePromotionAmountOffMethodRequest(value: InputValue<PromotionAmountOffMethodRequestInput>): Model<PromotionAmountOffMethodRequestInput>;
export declare function makePromotionApplicationMethodPatch(value: InputValue<PromotionApplicationMethodPatchInput>): Model<PromotionApplicationMethodPatchInput>;
export declare function makePromotionApplicationMethodRequest(value: InputValue<Exclude<PromotionApplicationMethodRequestInput & object, readonly unknown[]>>): Model<Exclude<PromotionApplicationMethodRequestInput & object, readonly unknown[]>>;
export declare function makePromotionApplicationMethodRequest(value: InputValue<PromotionApplicationMethodRequestInput>): Model<PromotionApplicationMethodRequestInput>;
export declare function makePromotionBuyXGetYMethodRequest(value: InputValue<PromotionBuyXGetYMethodRequestInput>): Model<PromotionBuyXGetYMethodRequestInput>;
export declare function makePromotionCodeRequest(value: InputValue<PromotionCodeRequestInput>): Model<PromotionCodeRequestInput>;
export declare function makePromotionCombinesWithPatch(value: InputValue<PromotionCombinesWithPatchInput>): Model<PromotionCombinesWithPatchInput>;
export declare function makePromotionCombinesWithRequest(value: InputValue<PromotionCombinesWithRequestInput>): Model<PromotionCombinesWithRequestInput>;
export declare function makePromotionExclusivityPatch(value: InputValue<PromotionExclusivityPatchInput>): Model<PromotionExclusivityPatchInput>;
