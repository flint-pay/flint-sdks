import type { InputValue, Model } from '../runtime.js';
import type {
    OrderCalculatedLineItemTaxInput,
    OrderChargeRequestInput,
    OrderChargeTaxAssignmentInput,
    OrderDeliveryDestinationAddressRequestInput,
    OrderDeliveryDestinationRecipientRequestInput,
    OrderDeliveryDestinationRequestInput,
    OrderDraftLineItemInventoryDemandRequestInput,
    OrderDraftLineItemTaxCalculationRequestInput,
    OrderDraftLineItemTaxRequestInput,
    OrderDraftTaxComponentRequestInput,
    OrderDraftTaxJurisdictionRequestInput,
    OrderGiftCardAllocationAcceptanceInput,
    OrderInventoryRoutingSourceRequestInput,
    OrderLineItemModifierRequestInput,
    OrderLineItemTaxInput,
    OrderLineItemTaxAssignmentInput
} from './types-32.js';
import type {
    OrderPaymentIntentSelectionInput,
    OrderPaymentSourceCardSelectionInput,
    OrderPaymentSourceSelectionInput,
    OrderTaxCalculationInputAutomaticInput,
    OrderTaxCalculationInputExternalInput,
    OrderTaxCalculationRequestInput,
    OrderTaxComponentRequestInput,
    OrderTaxJurisdictionRequestInput,
    OrderTaxLocationFullAddressRequestInput,
    OrderTaxLocationInputFullAddressInput,
    OrderTaxLocationInputInferredFullAddressInput,
    OrderTaxLocationInputInferredPostalCodeInput,
    OrderTaxLocationInputPostalCodeInput,
    OrderTaxLocationPostalAddressRequestInput,
    OrderTaxLocationRequestInput,
    OrderTaxRequestInput,
    OrderTaxUpdateRequestInput
} from './types-33.js';
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
    PackageTransitionRequestMarkShippedInput
} from './types-34.js';
import type {
    PartnerAppPermissionManifestEntryInput,
    PauseSubscriptionRequestInput,
    PayOrderRequestInput,
    PayOrderRequestConfirmPaymentIntentsInput,
    PayOrderRequestPayInput,
    PayOrderRequestResumeInput,
    PayOrderRequestSetupInput,
    PaymentLimitSettingsPatchInput,
    PaymentLinkCustomFieldPatchRequestInput,
    PaymentLinkCustomFieldRequestInput,
    PaymentLinkCustomTextConfigInput,
    PaymentLinkCustomTextPatchRequestInput
} from './types-35.js';
import type {
    PaymentLinkEventConfigPatchRequestInput,
    PaymentLinkEventConfigRequestInput,
    PaymentLinkLegalConfigInput,
    PaymentLinkLegalPatchRequestInput,
    PaymentLinkLineItemPatchRequestInput,
    PaymentLinkLineItemRequestInput,
    PaymentLinkPaymentConfigInput
} from './types-36.js';
export declare function makeOrderCalculatedLineItemTax(value: InputValue<OrderCalculatedLineItemTaxInput>): Model<OrderCalculatedLineItemTaxInput>;
export declare function makeOrderChargeRequest(value: InputValue<OrderChargeRequestInput>): Model<OrderChargeRequestInput>;
export declare function makeOrderChargeTaxAssignment(value: InputValue<OrderChargeTaxAssignmentInput>): Model<OrderChargeTaxAssignmentInput>;
export declare function makeOrderDeliveryDestinationAddressRequest(value: InputValue<OrderDeliveryDestinationAddressRequestInput>): Model<OrderDeliveryDestinationAddressRequestInput>;
export declare function makeOrderDeliveryDestinationRecipientRequest(value: InputValue<OrderDeliveryDestinationRecipientRequestInput>): Model<OrderDeliveryDestinationRecipientRequestInput>;
export declare function makeOrderDeliveryDestinationRequest(value: InputValue<OrderDeliveryDestinationRequestInput>): Model<OrderDeliveryDestinationRequestInput>;
export declare function makeOrderDraftLineItemInventoryDemandRequest(value: InputValue<OrderDraftLineItemInventoryDemandRequestInput>): Model<OrderDraftLineItemInventoryDemandRequestInput>;
export declare function makeOrderDraftLineItemTaxCalculationRequest(value: InputValue<OrderDraftLineItemTaxCalculationRequestInput>): Model<OrderDraftLineItemTaxCalculationRequestInput>;
export declare function makeOrderDraftLineItemTaxRequest(value: InputValue<OrderDraftLineItemTaxRequestInput>): Model<OrderDraftLineItemTaxRequestInput>;
export declare function makeOrderDraftTaxComponentRequest(value: InputValue<OrderDraftTaxComponentRequestInput>): Model<OrderDraftTaxComponentRequestInput>;
export declare function makeOrderDraftTaxJurisdictionRequest(value: InputValue<OrderDraftTaxJurisdictionRequestInput>): Model<OrderDraftTaxJurisdictionRequestInput>;
export declare function makeOrderGiftCardAllocationAcceptance(value: InputValue<OrderGiftCardAllocationAcceptanceInput>): Model<OrderGiftCardAllocationAcceptanceInput>;
export declare function makeOrderInventoryRoutingSourceRequest(value: InputValue<OrderInventoryRoutingSourceRequestInput>): Model<OrderInventoryRoutingSourceRequestInput>;
export declare function makeOrderLineItemModifierRequest(value: InputValue<OrderLineItemModifierRequestInput>): Model<OrderLineItemModifierRequestInput>;
export declare function makeOrderLineItemTax(value: InputValue<OrderLineItemTaxInput>): Model<OrderLineItemTaxInput>;
export declare function makeOrderLineItemTaxAssignment(value: InputValue<OrderLineItemTaxAssignmentInput>): Model<OrderLineItemTaxAssignmentInput>;
export declare function makeOrderPaymentIntentSelection(value: InputValue<Exclude<OrderPaymentIntentSelectionInput & object, readonly unknown[]>>): Model<Exclude<OrderPaymentIntentSelectionInput & object, readonly unknown[]>>;
export declare function makeOrderPaymentIntentSelection(value: InputValue<OrderPaymentIntentSelectionInput>): Model<OrderPaymentIntentSelectionInput>;
export declare function makeOrderPaymentSourceCardSelection(value: InputValue<OrderPaymentSourceCardSelectionInput>): Model<OrderPaymentSourceCardSelectionInput>;
export declare function makeOrderPaymentSourceSelection(value: InputValue<OrderPaymentSourceSelectionInput>): Model<OrderPaymentSourceSelectionInput>;
export declare function makeOrderTaxCalculationInputAutomatic(value: InputValue<OrderTaxCalculationInputAutomaticInput>): Model<OrderTaxCalculationInputAutomaticInput>;
export declare function makeOrderTaxCalculationInputExternal(value: InputValue<OrderTaxCalculationInputExternalInput>): Model<OrderTaxCalculationInputExternalInput>;
export declare function makeOrderTaxCalculationRequest(value: InputValue<OrderTaxCalculationRequestInput>): Model<OrderTaxCalculationRequestInput>;
export declare function makeOrderTaxComponentRequest(value: InputValue<OrderTaxComponentRequestInput>): Model<OrderTaxComponentRequestInput>;
export declare function makeOrderTaxJurisdictionRequest(value: InputValue<OrderTaxJurisdictionRequestInput>): Model<OrderTaxJurisdictionRequestInput>;
export declare function makeOrderTaxLocationFullAddressRequest(value: InputValue<OrderTaxLocationFullAddressRequestInput>): Model<OrderTaxLocationFullAddressRequestInput>;
export declare function makeOrderTaxLocationInputFullAddress(value: InputValue<OrderTaxLocationInputFullAddressInput>): Model<OrderTaxLocationInputFullAddressInput>;
export declare function makeOrderTaxLocationInputInferredFullAddress(value: InputValue<OrderTaxLocationInputInferredFullAddressInput>): Model<OrderTaxLocationInputInferredFullAddressInput>;
export declare function makeOrderTaxLocationInputInferredPostalCode(value: InputValue<OrderTaxLocationInputInferredPostalCodeInput>): Model<OrderTaxLocationInputInferredPostalCodeInput>;
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
export declare function makePartnerAppPermissionManifestEntry(value: InputValue<PartnerAppPermissionManifestEntryInput>): Model<PartnerAppPermissionManifestEntryInput>;
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
export declare function makePaymentLinkLineItemPatchRequest(value: InputValue<PaymentLinkLineItemPatchRequestInput>): Model<PaymentLinkLineItemPatchRequestInput>;
export declare function makePaymentLinkLineItemRequest(value: InputValue<PaymentLinkLineItemRequestInput>): Model<PaymentLinkLineItemRequestInput>;
export declare function makePaymentLinkPaymentConfig(value: InputValue<PaymentLinkPaymentConfigInput>): Model<PaymentLinkPaymentConfigInput>;
