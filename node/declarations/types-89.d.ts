import type { InputValue, Model } from '../runtime.js';
import type {
    OAuthTokenRequestDeviceCodeInput,
    OAuthTokenRequestRefreshTokenInput,
    OAuthTokenRequestTokenExchangeInput,
    OnboardingAdvanceRequestInput,
    OnboardingProfileRequestInput
} from './types-44.js';
import type {
    OnboardingStartRequestInput,
    OnboardingVerifyEmailRequestInput,
    OrderCalculatedChargeTaxRequestInput,
    OrderCalculatedLineItemTaxRequestInput,
    OrderChargeInputAmountInput,
    OrderChargeInputPercentInput,
    OrderChargeRequestInput,
    OrderChargeTaxAssignmentInput,
    OrderDeliveryDestinationRecipientRequestInput,
    OrderDeliveryDestinationRequestInput,
    OrderDeliveryRequestInput,
    OrderDraftLineItemInventoryDemandRequestInput,
    OrderDraftLineItemTaxCalculationRequestModelInput,
    OrderDraftLineItemTaxRequestModelInput,
    OrderDraftTaxComponentRequestModelInput,
    OrderDraftTaxJurisdictionRequestModelInput
} from './types-45.js';
import type {
    OrderEditPreviewRequestInput,
    OrderEditRemovalRequestInput,
    OrderGiftCardAllocationAcceptanceInput,
    OrderHandoverRequestInput,
    OrderLineItemModifierInputCatalogRequestInput,
    OrderLineItemModifierInputTextRequestInput
} from './types-46.js';
import type {
    OrderLineItemModifierRequestModelInput,
    OrderLineItemTaxAssignmentInput,
    OrderLineItemTaxRequestInput,
    OrderPaymentIntentSelectionInput,
    OrderPaymentSourceCardSelectionInput,
    OrderPaymentSourceSelectionInput,
    OrderTaxCalculationInputAutomaticInput,
    OrderTaxCalculationInputExternalInput,
    OrderTaxCalculationRequestInput,
    OrderTaxComponentRequestInput,
    OrderTaxExemptionInputCustomerInput,
    OrderTaxExemptionInputNoneInput,
    OrderTaxExemptionInputOrderInput
} from './types-47.js';
import type {
    OrderTaxExemptionRequestInput,
    OrderTaxJurisdictionRequestInput,
    OrderTaxLocationFullAddressRequestInput,
    OrderTaxLocationInputFullAddressInput,
    OrderTaxLocationInputPostalCodeInput,
    OrderTaxLocationPostalAddressRequestInput,
    OrderTaxLocationRequestInput,
    OrderTaxRequestInput,
    OrderTaxUpdateRequestInput,
    PackageCreateInputCreatedInput,
    PackageCreateInputShippedInput,
    PackageCreateRequestInput
} from './types-48.js';
import type {
    PartnerAppCredentialJWKSURLRequestInput,
    PartnerAppCredentialPublicKeyRequestInput,
    PartnerAppCredentialWorkloadIdentityRequestInput,
    PartnerAppPaymentSplitsRequestInput
} from './types-49.js';
import type {
    PartnerAppPermissionManifestEntryRequestInput,
    PartnerAppPlatformProfileRequestInput,
    PauseSubscriptionRequestInput,
    PayOrderRequestInput,
    PayOrderRequestConfirmPaymentIntentsInput,
    PayOrderRequestPayInput,
    PayOrderRequestResumeInput,
    PayOrderRequestSetupInput
} from './types-50.js';
export declare function makeOAuthTokenRequestDeviceCode(value: InputValue<OAuthTokenRequestDeviceCodeInput>): Model<OAuthTokenRequestDeviceCodeInput>;
export declare function makeOAuthTokenRequestRefreshToken(value: InputValue<OAuthTokenRequestRefreshTokenInput>): Model<OAuthTokenRequestRefreshTokenInput>;
export declare function makeOAuthTokenRequestTokenExchange(value: InputValue<OAuthTokenRequestTokenExchangeInput>): Model<OAuthTokenRequestTokenExchangeInput>;
export declare function makeOnboardingAdvanceRequest(value: InputValue<OnboardingAdvanceRequestInput>): Model<OnboardingAdvanceRequestInput>;
export declare function makeOnboardingProfileRequest(value: InputValue<OnboardingProfileRequestInput>): Model<OnboardingProfileRequestInput>;
export declare function makeOnboardingStartRequest(value: InputValue<OnboardingStartRequestInput>): Model<OnboardingStartRequestInput>;
export declare function makeOnboardingVerifyEmailRequest(value: InputValue<OnboardingVerifyEmailRequestInput>): Model<OnboardingVerifyEmailRequestInput>;
export declare function makeOrderCalculatedChargeTaxRequest(value: InputValue<OrderCalculatedChargeTaxRequestInput>): Model<OrderCalculatedChargeTaxRequestInput>;
export declare function makeOrderCalculatedLineItemTaxRequest(value: InputValue<OrderCalculatedLineItemTaxRequestInput>): Model<OrderCalculatedLineItemTaxRequestInput>;
export declare function makeOrderChargeInputAmount(value: InputValue<OrderChargeInputAmountInput>): Model<OrderChargeInputAmountInput>;
export declare function makeOrderChargeInputPercent(value: InputValue<OrderChargeInputPercentInput>): Model<OrderChargeInputPercentInput>;
export declare function makeOrderChargeRequest(value: InputValue<OrderChargeRequestInput>): Model<OrderChargeRequestInput>;
export declare function makeOrderChargeTaxAssignment(value: InputValue<OrderChargeTaxAssignmentInput>): Model<OrderChargeTaxAssignmentInput>;
export declare function makeOrderDeliveryDestinationRecipientRequest(value: InputValue<OrderDeliveryDestinationRecipientRequestInput>): Model<OrderDeliveryDestinationRecipientRequestInput>;
export declare function makeOrderDeliveryDestinationRequest(value: InputValue<OrderDeliveryDestinationRequestInput>): Model<OrderDeliveryDestinationRequestInput>;
export declare function makeOrderDeliveryRequest(value: InputValue<OrderDeliveryRequestInput>): Model<OrderDeliveryRequestInput>;
export declare function makeOrderDraftLineItemInventoryDemandRequest(value: InputValue<OrderDraftLineItemInventoryDemandRequestInput>): Model<OrderDraftLineItemInventoryDemandRequestInput>;
export declare function makeOrderDraftLineItemTaxCalculationRequestModel(value: InputValue<OrderDraftLineItemTaxCalculationRequestModelInput>): Model<OrderDraftLineItemTaxCalculationRequestModelInput>;
export declare function makeOrderDraftLineItemTaxRequestModel(value: InputValue<OrderDraftLineItemTaxRequestModelInput>): Model<OrderDraftLineItemTaxRequestModelInput>;
export declare function makeOrderDraftTaxComponentRequestModel(value: InputValue<OrderDraftTaxComponentRequestModelInput>): Model<OrderDraftTaxComponentRequestModelInput>;
export declare function makeOrderDraftTaxJurisdictionRequestModel(value: InputValue<OrderDraftTaxJurisdictionRequestModelInput>): Model<OrderDraftTaxJurisdictionRequestModelInput>;
export declare function makeOrderEditPreviewRequest(value: InputValue<OrderEditPreviewRequestInput>): Model<OrderEditPreviewRequestInput>;
export declare function makeOrderEditRemovalRequest(value: InputValue<OrderEditRemovalRequestInput>): Model<OrderEditRemovalRequestInput>;
export declare function makeOrderGiftCardAllocationAcceptance(value: InputValue<OrderGiftCardAllocationAcceptanceInput>): Model<OrderGiftCardAllocationAcceptanceInput>;
export declare function makeOrderHandoverRequest(value: InputValue<OrderHandoverRequestInput>): Model<OrderHandoverRequestInput>;
export declare function makeOrderLineItemModifierInputCatalogRequest(value: InputValue<OrderLineItemModifierInputCatalogRequestInput>): Model<OrderLineItemModifierInputCatalogRequestInput>;
export declare function makeOrderLineItemModifierInputTextRequest(value: InputValue<OrderLineItemModifierInputTextRequestInput>): Model<OrderLineItemModifierInputTextRequestInput>;
export declare function makeOrderLineItemModifierRequestModel(value: InputValue<OrderLineItemModifierRequestModelInput>): Model<OrderLineItemModifierRequestModelInput>;
export declare function makeOrderLineItemTaxAssignment(value: InputValue<OrderLineItemTaxAssignmentInput>): Model<OrderLineItemTaxAssignmentInput>;
export declare function makeOrderLineItemTaxRequest(value: InputValue<OrderLineItemTaxRequestInput>): Model<OrderLineItemTaxRequestInput>;
export declare function makeOrderPaymentIntentSelection(value: InputValue<OrderPaymentIntentSelectionInput>): Model<OrderPaymentIntentSelectionInput>;
export declare function makeOrderPaymentSourceCardSelection(value: InputValue<OrderPaymentSourceCardSelectionInput>): Model<OrderPaymentSourceCardSelectionInput>;
export declare function makeOrderPaymentSourceSelection(value: InputValue<OrderPaymentSourceSelectionInput>): Model<OrderPaymentSourceSelectionInput>;
export declare function makeOrderTaxCalculationInputAutomatic(value: InputValue<OrderTaxCalculationInputAutomaticInput>): Model<OrderTaxCalculationInputAutomaticInput>;
export declare function makeOrderTaxCalculationInputExternal(value: InputValue<OrderTaxCalculationInputExternalInput>): Model<OrderTaxCalculationInputExternalInput>;
export declare function makeOrderTaxCalculationRequest(value: InputValue<OrderTaxCalculationRequestInput>): Model<OrderTaxCalculationRequestInput>;
export declare function makeOrderTaxComponentRequest(value: InputValue<OrderTaxComponentRequestInput>): Model<OrderTaxComponentRequestInput>;
export declare function makeOrderTaxExemptionInputCustomer(value: InputValue<OrderTaxExemptionInputCustomerInput>): Model<OrderTaxExemptionInputCustomerInput>;
export declare function makeOrderTaxExemptionInputNone(value: InputValue<OrderTaxExemptionInputNoneInput>): Model<OrderTaxExemptionInputNoneInput>;
export declare function makeOrderTaxExemptionInputOrder(value: InputValue<OrderTaxExemptionInputOrderInput>): Model<OrderTaxExemptionInputOrderInput>;
export declare function makeOrderTaxExemptionRequest(value: InputValue<OrderTaxExemptionRequestInput>): Model<OrderTaxExemptionRequestInput>;
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
