import type { InputValue, Model } from '../runtime.js';
import type {
    ModifierSetGroupRequestInput,
    MoneyValueInput,
    OnboardingAdvanceRequestInput,
    OnboardingProfileRequestInput,
    OnboardingStartRequestInput,
    OnboardingVerifyEmailRequestInput,
    OrderCalculatedChargeTaxInput,
    OrderCalculatedLineItemTaxInput,
    OrderChargeInputAmountInput
} from './types-33.js';
import type {
    OrderChargeInputPercentInput,
    OrderChargeRequestInput,
    OrderChargeTaxAssignmentInput,
    OrderDeliveryDestinationRecipientRequestInput,
    OrderDeliveryDestinationRequestInput,
    OrderDraftLineItemInventoryDemandRequestInput,
    OrderDraftLineItemTaxCalculationRequestInput,
    OrderDraftLineItemTaxRequestInput,
    OrderDraftTaxComponentRequestInput,
    OrderDraftTaxJurisdictionRequestInput,
    OrderGiftCardAllocationAcceptanceInput,
    OrderInventoryRoutingSourceRequestInput,
    OrderLineItemModifierInputCatalogInput,
    OrderLineItemModifierInputTextInput,
    OrderLineItemModifierRequestInput,
    OrderLineItemTaxInput,
    OrderLineItemTaxAssignmentInput,
    OrderPaymentIntentSelectionInput,
    OrderPaymentIntentSelectionAttachedInput,
    OrderPaymentIntentSelectionPaymentMethodInput,
    OrderPaymentIntentSelectionStripeConfirmationTokenInput,
    OrderPaymentIntentSelectionTokenInput,
    OrderPaymentSourceCardSelectionInput,
    OrderPaymentSourceSelectionInput
} from './types-34.js';
import type {
    OrderTaxCalculationInputAutomaticInput,
    OrderTaxCalculationInputExternalInput,
    OrderTaxCalculationRequestInput,
    OrderTaxComponentRequestInput,
    OrderTaxJurisdictionRequestInput,
    OrderTaxLocationFullAddressRequestInput,
    OrderTaxLocationInputFullAddressInput,
    OrderTaxLocationInputPostalCodeInput,
    OrderTaxLocationPostalAddressRequestInput,
    OrderTaxLocationRequestInput,
    OrderTaxRequestInput,
    OrderTaxUpdateRequestInput
} from './types-35.js';
import type {
    PackageCreateInputCreatedInput,
    PackageCreateInputShippedInput,
    PackageCreateRequestInput,
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
    PartnerAppCredentialWorkloadIdentityRequestInput
} from './types-36.js';
import type {
    PartnerAppPermissionManifestEntryRequestRequestInput,
    PauseSubscriptionRequestInput,
    PayOrderRequestInput,
    PayOrderRequestConfirmPaymentIntentsInput
} from './types-37.js';
export declare function makeModifierSetGroupRequest(value: InputValue<ModifierSetGroupRequestInput>): Model<ModifierSetGroupRequestInput>;
export declare function makeMoneyValue(value: InputValue<MoneyValueInput>): Model<MoneyValueInput>;
export declare function makeOnboardingAdvanceRequest(value: InputValue<OnboardingAdvanceRequestInput>): Model<OnboardingAdvanceRequestInput>;
export declare function makeOnboardingProfileRequest(value: InputValue<OnboardingProfileRequestInput>): Model<OnboardingProfileRequestInput>;
export declare function makeOnboardingStartRequest(value: InputValue<OnboardingStartRequestInput>): Model<OnboardingStartRequestInput>;
export declare function makeOnboardingVerifyEmailRequest(value: InputValue<OnboardingVerifyEmailRequestInput>): Model<OnboardingVerifyEmailRequestInput>;
export declare function makeOrderCalculatedChargeTax(value: InputValue<OrderCalculatedChargeTaxInput>): Model<OrderCalculatedChargeTaxInput>;
export declare function makeOrderCalculatedLineItemTax(value: InputValue<OrderCalculatedLineItemTaxInput>): Model<OrderCalculatedLineItemTaxInput>;
export declare function makeOrderChargeInputAmount(value: InputValue<OrderChargeInputAmountInput>): Model<OrderChargeInputAmountInput>;
export declare function makeOrderChargeInputPercent(value: InputValue<OrderChargeInputPercentInput>): Model<OrderChargeInputPercentInput>;
export declare function makeOrderChargeRequest(value: InputValue<OrderChargeRequestInput>): Model<OrderChargeRequestInput>;
export declare function makeOrderChargeTaxAssignment(value: InputValue<OrderChargeTaxAssignmentInput>): Model<OrderChargeTaxAssignmentInput>;
export declare function makeOrderDeliveryDestinationRecipientRequest(value: InputValue<OrderDeliveryDestinationRecipientRequestInput>): Model<OrderDeliveryDestinationRecipientRequestInput>;
export declare function makeOrderDeliveryDestinationRequest(value: InputValue<OrderDeliveryDestinationRequestInput>): Model<OrderDeliveryDestinationRequestInput>;
export declare function makeOrderDraftLineItemInventoryDemandRequest(value: InputValue<OrderDraftLineItemInventoryDemandRequestInput>): Model<OrderDraftLineItemInventoryDemandRequestInput>;
export declare function makeOrderDraftLineItemTaxCalculationRequest(value: InputValue<OrderDraftLineItemTaxCalculationRequestInput>): Model<OrderDraftLineItemTaxCalculationRequestInput>;
export declare function makeOrderDraftLineItemTaxRequest(value: InputValue<OrderDraftLineItemTaxRequestInput>): Model<OrderDraftLineItemTaxRequestInput>;
export declare function makeOrderDraftTaxComponentRequest(value: InputValue<OrderDraftTaxComponentRequestInput>): Model<OrderDraftTaxComponentRequestInput>;
export declare function makeOrderDraftTaxJurisdictionRequest(value: InputValue<OrderDraftTaxJurisdictionRequestInput>): Model<OrderDraftTaxJurisdictionRequestInput>;
export declare function makeOrderGiftCardAllocationAcceptance(value: InputValue<OrderGiftCardAllocationAcceptanceInput>): Model<OrderGiftCardAllocationAcceptanceInput>;
export declare function makeOrderInventoryRoutingSourceRequest(value: InputValue<OrderInventoryRoutingSourceRequestInput>): Model<OrderInventoryRoutingSourceRequestInput>;
export declare function makeOrderLineItemModifierInputCatalog(value: InputValue<OrderLineItemModifierInputCatalogInput>): Model<OrderLineItemModifierInputCatalogInput>;
export declare function makeOrderLineItemModifierInputText(value: InputValue<OrderLineItemModifierInputTextInput>): Model<OrderLineItemModifierInputTextInput>;
export declare function makeOrderLineItemModifierRequest(value: InputValue<OrderLineItemModifierRequestInput>): Model<OrderLineItemModifierRequestInput>;
export declare function makeOrderLineItemTax(value: InputValue<OrderLineItemTaxInput>): Model<OrderLineItemTaxInput>;
export declare function makeOrderLineItemTaxAssignment(value: InputValue<OrderLineItemTaxAssignmentInput>): Model<OrderLineItemTaxAssignmentInput>;
export declare function makeOrderPaymentIntentSelection(value: InputValue<Exclude<OrderPaymentIntentSelectionInput & object, readonly unknown[]>>): Model<Exclude<OrderPaymentIntentSelectionInput & object, readonly unknown[]>>;
export declare function makeOrderPaymentIntentSelection(value: InputValue<OrderPaymentIntentSelectionInput>): Model<OrderPaymentIntentSelectionInput>;
export declare function makeOrderPaymentIntentSelectionAttached(value: InputValue<OrderPaymentIntentSelectionAttachedInput>): Model<OrderPaymentIntentSelectionAttachedInput>;
export declare function makeOrderPaymentIntentSelectionPaymentMethod(value: InputValue<OrderPaymentIntentSelectionPaymentMethodInput>): Model<OrderPaymentIntentSelectionPaymentMethodInput>;
export declare function makeOrderPaymentIntentSelectionStripeConfirmationToken(value: InputValue<OrderPaymentIntentSelectionStripeConfirmationTokenInput>): Model<OrderPaymentIntentSelectionStripeConfirmationTokenInput>;
export declare function makeOrderPaymentIntentSelectionToken(value: InputValue<OrderPaymentIntentSelectionTokenInput>): Model<OrderPaymentIntentSelectionTokenInput>;
export declare function makeOrderPaymentSourceCardSelection(value: InputValue<OrderPaymentSourceCardSelectionInput>): Model<OrderPaymentSourceCardSelectionInput>;
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
export declare function makePartnerAppPermissionManifestEntryRequestRequest(value: InputValue<PartnerAppPermissionManifestEntryRequestRequestInput>): Model<PartnerAppPermissionManifestEntryRequestRequestInput>;
export declare function makePauseSubscriptionRequest(value: InputValue<PauseSubscriptionRequestInput>): Model<PauseSubscriptionRequestInput>;
export declare function makePayOrderRequest(value: InputValue<Exclude<PayOrderRequestInput & object, readonly unknown[]>>): Model<Exclude<PayOrderRequestInput & object, readonly unknown[]>>;
export declare function makePayOrderRequest(value: InputValue<PayOrderRequestInput>): Model<PayOrderRequestInput>;
export declare function makePayOrderRequestConfirmPaymentIntents(value: InputValue<PayOrderRequestConfirmPaymentIntentsInput>): Model<PayOrderRequestConfirmPaymentIntentsInput>;
