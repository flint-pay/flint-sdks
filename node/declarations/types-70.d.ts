import type { InputValue, Model } from '../runtime.js';
import type {
    OrderPaymentSourceSelectionInput,
    OrderTaxCalculationInputAutomaticInput,
    OrderTaxCalculationInputExternalInput,
    OrderTaxCalculationRequestInput,
    OrderTaxComponentRequestInput,
    OrderTaxJurisdictionRequestInput,
    OrderTaxLocationFullAddressRequestInput,
    OrderTaxLocationInputFullAddressInput
} from './types-37.js';
import type {
    OrderTaxLocationInputPostalCodeInput,
    OrderTaxLocationPostalAddressRequestInput,
    OrderTaxLocationRequestInput,
    OrderTaxRequestInput,
    OrderTaxUpdateRequestInput,
    PackageCreateInputCreatedInput,
    PackageCreateInputShippedInput,
    PackageCreateRequestInput
} from './types-38.js';
import type {
    PackageTransitionRequestInput,
    PackageTransitionRequestMarkDeliveredInput,
    PackageTransitionRequestMarkDeliveryAttemptedInput,
    PackageTransitionRequestMarkExceptionInput,
    PackageTransitionRequestMarkInTransitInput,
    PackageTransitionRequestMarkOutForDeliveryInput,
    PackageTransitionRequestMarkPackedInput,
    PackageTransitionRequestMarkReturnedInput,
    PackageTransitionRequestMarkShippedInput,
    PartnerAppCredentialJWKSURLRequestInput,
    PartnerAppCredentialPublicKeyRequestInput,
    PartnerAppCredentialWorkloadIdentityRequestInput,
    PartnerAppPermissionManifestEntryRequestInput
} from './types-39.js';
import type {
    PauseSubscriptionRequestInput,
    PayOrderRequestInput,
    PayOrderRequestConfirmPaymentIntentsInput,
    PayOrderRequestPayInput,
    PayOrderRequestResumeInput,
    PayOrderRequestSetupInput
} from './types-40.js';
import type {
    PaymentLimitSettingsPatchInput,
    PaymentLinkCustomFieldPatchRequestInput,
    PaymentLinkCustomFieldRequestInput,
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
    PaymentLinkLineItemPatchInputCustomFixedInput
} from './types-41.js';
import type {
    PaymentLinkLineItemPatchInputCustomVariableInput,
    PaymentLinkLineItemPatchInputVariantInput,
    PaymentLinkLineItemPatchRequestInput,
    PaymentLinkLineItemRequestInput,
    PaymentLinkPaymentConfigInput,
    PaymentLinkPaymentPatchRequestInput,
    PaymentLinkRedirectsPatchRequestInput,
    PaymentLinkThemeConfigInput,
    PaymentLinkThemePatchRequestInput
} from './types-42.js';
import type {
    PaymentSourceCredentialInput,
    PaymentSourceCredentialPaymentMethodInput,
    PaymentSourceCredentialStripeConfirmationTokenInput,
    PaymentSourceCredentialTokenInput
} from './types-43.js';
import type { ProcessExistingReturnLineItemRequestInput } from './types-44.js';
export declare function makeOrderPaymentSourceSelection(value: InputValue<OrderPaymentSourceSelectionInput>): Model<OrderPaymentSourceSelectionInput>;
export declare function makeOrderTaxCalculationInputAutomatic(value: InputValue<OrderTaxCalculationInputAutomaticInput>): Model<OrderTaxCalculationInputAutomaticInput>;
export declare function makeOrderTaxCalculationInputExternal(value: InputValue<OrderTaxCalculationInputExternalInput>): Model<OrderTaxCalculationInputExternalInput>;
export declare function makeOrderTaxCalculationRequest(value: InputValue<OrderTaxCalculationRequestInput>): Model<OrderTaxCalculationRequestInput>;
export declare function makeOrderTaxComponentRequest(value: InputValue<OrderTaxComponentRequestInput>): Model<OrderTaxComponentRequestInput>;
export declare function makeOrderTaxJurisdictionRequest(value: InputValue<OrderTaxJurisdictionRequestInput>): Model<OrderTaxJurisdictionRequestInput>;
export declare function makeOrderTaxLocationFullAddressRequest(value: InputValue<OrderTaxLocationFullAddressRequestInput>): Model<OrderTaxLocationFullAddressRequestInput>;
export declare function makeOrderTaxLocationInputFullAddress(value: InputValue<OrderTaxLocationInputFullAddressInput>): Model<OrderTaxLocationInputFullAddressInput>;
export declare function makeOrderTaxLocationInputPostalCode(value: InputValue<OrderTaxLocationInputPostalCodeInput>): Model<OrderTaxLocationInputPostalCodeInput>;
export declare function makeOrderTaxLocationPostalAddressRequest(value: InputValue<OrderTaxLocationPostalAddressRequestInput>): Model<OrderTaxLocationPostalAddressRequestInput>;
export declare function makeOrderTaxLocationRequest(value: InputValue<Exclude<OrderTaxLocationRequestInput & object, readonly unknown[]>>): Model<Exclude<OrderTaxLocationRequestInput & object, readonly unknown[]>>;
export declare function makeOrderTaxLocationRequest(value: InputValue<OrderTaxLocationRequestInput>): Model<OrderTaxLocationRequestInput>;
export declare function makeOrderTaxRequest(value: InputValue<OrderTaxRequestInput>): Model<OrderTaxRequestInput>;
export declare function makeOrderTaxUpdateRequest(value: InputValue<OrderTaxUpdateRequestInput>): Model<OrderTaxUpdateRequestInput>;
export declare function makePackageCreateInputCreated(value: InputValue<PackageCreateInputCreatedInput>): Model<PackageCreateInputCreatedInput>;
export declare function makePackageCreateInputShipped(value: InputValue<PackageCreateInputShippedInput>): Model<PackageCreateInputShippedInput>;
export declare function makePackageCreateRequest(value: InputValue<PackageCreateRequestInput>): Model<PackageCreateRequestInput>;
export declare function makePackageTransitionRequest(value: InputValue<Exclude<PackageTransitionRequestInput & object, readonly unknown[]>>): Model<Exclude<PackageTransitionRequestInput & object, readonly unknown[]>>;
export declare function makePackageTransitionRequest(value: InputValue<PackageTransitionRequestInput>): Model<PackageTransitionRequestInput>;
export declare function makePackageTransitionRequestMarkDelivered(value: InputValue<PackageTransitionRequestMarkDeliveredInput>): Model<PackageTransitionRequestMarkDeliveredInput>;
export declare function makePackageTransitionRequestMarkDeliveryAttempted(value: InputValue<PackageTransitionRequestMarkDeliveryAttemptedInput>): Model<PackageTransitionRequestMarkDeliveryAttemptedInput>;
export declare function makePackageTransitionRequestMarkException(value: InputValue<PackageTransitionRequestMarkExceptionInput>): Model<PackageTransitionRequestMarkExceptionInput>;
export declare function makePackageTransitionRequestMarkInTransit(value: InputValue<PackageTransitionRequestMarkInTransitInput>): Model<PackageTransitionRequestMarkInTransitInput>;
export declare function makePackageTransitionRequestMarkOutForDelivery(value: InputValue<PackageTransitionRequestMarkOutForDeliveryInput>): Model<PackageTransitionRequestMarkOutForDeliveryInput>;
export declare function makePackageTransitionRequestMarkPacked(value: InputValue<PackageTransitionRequestMarkPackedInput>): Model<PackageTransitionRequestMarkPackedInput>;
export declare function makePackageTransitionRequestMarkReturned(value: InputValue<PackageTransitionRequestMarkReturnedInput>): Model<PackageTransitionRequestMarkReturnedInput>;
export declare function makePackageTransitionRequestMarkShipped(value: InputValue<PackageTransitionRequestMarkShippedInput>): Model<PackageTransitionRequestMarkShippedInput>;
export declare function makePartnerAppCredentialJWKSURLRequest(value: InputValue<PartnerAppCredentialJWKSURLRequestInput>): Model<PartnerAppCredentialJWKSURLRequestInput>;
export declare function makePartnerAppCredentialPublicKeyRequest(value: InputValue<PartnerAppCredentialPublicKeyRequestInput>): Model<PartnerAppCredentialPublicKeyRequestInput>;
export declare function makePartnerAppCredentialWorkloadIdentityRequest(value: InputValue<PartnerAppCredentialWorkloadIdentityRequestInput>): Model<PartnerAppCredentialWorkloadIdentityRequestInput>;
export declare function makePartnerAppPermissionManifestEntryRequest(value: InputValue<PartnerAppPermissionManifestEntryRequestInput>): Model<PartnerAppPermissionManifestEntryRequestInput>;
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
export declare function makePaymentLinkThemeConfig(value: InputValue<PaymentLinkThemeConfigInput>): Model<PaymentLinkThemeConfigInput>;
export declare function makePaymentLinkThemePatchRequest(value: InputValue<PaymentLinkThemePatchRequestInput>): Model<PaymentLinkThemePatchRequestInput>;
export declare function makePaymentSourceCredential(value: InputValue<Exclude<PaymentSourceCredentialInput & object, readonly unknown[]>>): Model<Exclude<PaymentSourceCredentialInput & object, readonly unknown[]>>;
export declare function makePaymentSourceCredential(value: InputValue<PaymentSourceCredentialInput>): Model<PaymentSourceCredentialInput>;
export declare function makePaymentSourceCredentialPaymentMethod(value: InputValue<PaymentSourceCredentialPaymentMethodInput>): Model<PaymentSourceCredentialPaymentMethodInput>;
export declare function makePaymentSourceCredentialStripeConfirmationToken(value: InputValue<PaymentSourceCredentialStripeConfirmationTokenInput>): Model<PaymentSourceCredentialStripeConfirmationTokenInput>;
export declare function makePaymentSourceCredentialToken(value: InputValue<PaymentSourceCredentialTokenInput>): Model<PaymentSourceCredentialTokenInput>;
export declare function makeProcessExistingReturnLineItemRequest(value: InputValue<ProcessExistingReturnLineItemRequestInput>): Model<ProcessExistingReturnLineItemRequestInput>;
