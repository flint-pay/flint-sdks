import type { InputValue, Model } from '../runtime.js';
import type {
    ReturnPolicyRevisionRequestInput,
    ReturnPolicyScopeInput,
    ReturnPolicyScopeAllInput,
    ReturnPolicyScopeIncludeInput,
    ReturnProcessDecisionInput,
    ReturnProcessDispositionRequestInput,
    ReturnProcessInspectionRequestInput,
    ReturnProcessReceiptRequestInput,
    ReturnProcessResolutionRequestInput
} from './types-49.js';
import type {
    ReturnReceiptLineItemInputExcessInput,
    ReturnReceiptLineItemInputMatchedInput,
    ReturnReceiptLineItemInputUnverifiedInput,
    ReturnReceiptLineItemRequestInput,
    ReturnReplacementLineItemInputBundleInput,
    ReturnReplacementLineItemInputCustomInput,
    ReturnReplacementLineItemInputVariantInput,
    ReturnReplacementLineItemRequestInput,
    ReturnResolutionAdjustmentRequestInput,
    ReturnResolutionLineItemRequestInput,
    ReturnRestockingFeePolicyInput,
    ReturnShipmentLineItemAllocationRequestInput,
    ReturnShippingPolicyInput,
    ReturnSourceSystemRequestInput
} from './types-50.js';
import type {
    ReturnUnverifiedItemInput,
    ReturnWindowInput,
    ReverseInvoiceManualPaymentRequestInput,
    RevokeDeliveryDependencyRequestInput,
    RevokeDeliveryDependencyTargetInput,
    RevokeDeliveryDependencyTargetDeliveryMethodInput,
    RevokeDeliveryDependencyTargetDeliveryMethodRevisionInput,
    RevokeDeliveryDependencyTargetDeliveryRateCallbackInput,
    RevokeDeliveryDependencyTargetDeliveryRateCallbackRevisionInput,
    RevokeDeliveryDependencyTargetDeliveryRateCallbackSigningKeyInput,
    RevokeDeliveryDependencyTargetLocationGeographyInput
} from './types-51.js';
import type {
    RiskPredicateNodeInput,
    RiskPredicateNodeAllInput,
    RiskPredicateNodeAnyInput,
    RiskPredicateNodeComparisonInput,
    RiskPredicateNodeInInput,
    RiskPredicateNodeInListInput,
    RiskPredicateNodeIsMissingInput,
    RiskPredicateNodeMoneyComparisonInput,
    RiskPredicateNodeNotInput,
    RotateGiftCardCodeRequestInput,
    RotatePartnerAppSecretRequestInput,
    RotateWebhookSecretRequestInput,
    SaveMeGiftCardRequestInput,
    SaveMeGiftCardRequestCodeInput,
    SaveMeGiftCardRequestRecipientAccessInput,
    SaveMePaymentMethodRequestInput,
    SavePaymentMethodRequestInput
} from './types-52.js';
import type {
    SellerTaxAttestationRequestInput,
    SendOrderReceiptRequestInput,
    SendPaymentIntentReceiptRequestInput,
    SignedMoneyRequestInput,
    SimulateDisputeRequestInput,
    SinglePackageCreateInputCreatedInput,
    SinglePackageCreateInputShippedInput,
    SinglePackageCreateRequestInput,
    SkipMeSubscriptionCycleRequestInput,
    SkipSubscriptionCycleRequestInput,
    SubscribedLineRequestInput,
    SubscriptionBillingScheduleInputExternalInput,
    SubscriptionBillingScheduleInputFlintInput
} from './types-53.js';
export declare function makeReturnPolicyRevisionRequest(value: InputValue<ReturnPolicyRevisionRequestInput>): Model<ReturnPolicyRevisionRequestInput>;
export declare function makeReturnPolicyScope(value: InputValue<ReturnPolicyScopeInput>): Model<ReturnPolicyScopeInput>;
export declare function makeReturnPolicyScopeAll(value: InputValue<ReturnPolicyScopeAllInput>): Model<ReturnPolicyScopeAllInput>;
export declare function makeReturnPolicyScopeInclude(value: InputValue<ReturnPolicyScopeIncludeInput>): Model<ReturnPolicyScopeIncludeInput>;
export declare function makeReturnProcessDecision(value: InputValue<ReturnProcessDecisionInput>): Model<ReturnProcessDecisionInput>;
export declare function makeReturnProcessDispositionRequest(value: InputValue<ReturnProcessDispositionRequestInput>): Model<ReturnProcessDispositionRequestInput>;
export declare function makeReturnProcessInspectionRequest(value: InputValue<ReturnProcessInspectionRequestInput>): Model<ReturnProcessInspectionRequestInput>;
export declare function makeReturnProcessReceiptRequest(value: InputValue<ReturnProcessReceiptRequestInput>): Model<ReturnProcessReceiptRequestInput>;
export declare function makeReturnProcessResolutionRequest(value: InputValue<ReturnProcessResolutionRequestInput>): Model<ReturnProcessResolutionRequestInput>;
export declare function makeReturnReceiptLineItemInputExcess(value: InputValue<ReturnReceiptLineItemInputExcessInput>): Model<ReturnReceiptLineItemInputExcessInput>;
export declare function makeReturnReceiptLineItemInputMatched(value: InputValue<ReturnReceiptLineItemInputMatchedInput>): Model<ReturnReceiptLineItemInputMatchedInput>;
export declare function makeReturnReceiptLineItemInputUnverified(value: InputValue<ReturnReceiptLineItemInputUnverifiedInput>): Model<ReturnReceiptLineItemInputUnverifiedInput>;
export declare function makeReturnReceiptLineItemRequest(value: InputValue<ReturnReceiptLineItemRequestInput>): Model<ReturnReceiptLineItemRequestInput>;
export declare function makeReturnReplacementLineItemInputBundle(value: InputValue<ReturnReplacementLineItemInputBundleInput>): Model<ReturnReplacementLineItemInputBundleInput>;
export declare function makeReturnReplacementLineItemInputCustom(value: InputValue<ReturnReplacementLineItemInputCustomInput>): Model<ReturnReplacementLineItemInputCustomInput>;
export declare function makeReturnReplacementLineItemInputVariant(value: InputValue<ReturnReplacementLineItemInputVariantInput>): Model<ReturnReplacementLineItemInputVariantInput>;
export declare function makeReturnReplacementLineItemRequest(value: InputValue<ReturnReplacementLineItemRequestInput>): Model<ReturnReplacementLineItemRequestInput>;
export declare function makeReturnResolutionAdjustmentRequest(value: InputValue<ReturnResolutionAdjustmentRequestInput>): Model<ReturnResolutionAdjustmentRequestInput>;
export declare function makeReturnResolutionLineItemRequest(value: InputValue<ReturnResolutionLineItemRequestInput>): Model<ReturnResolutionLineItemRequestInput>;
export declare function makeReturnRestockingFeePolicy(value: InputValue<ReturnRestockingFeePolicyInput>): Model<ReturnRestockingFeePolicyInput>;
export declare function makeReturnShipmentLineItemAllocationRequest(value: InputValue<ReturnShipmentLineItemAllocationRequestInput>): Model<ReturnShipmentLineItemAllocationRequestInput>;
export declare function makeReturnShippingPolicy(value: InputValue<ReturnShippingPolicyInput>): Model<ReturnShippingPolicyInput>;
export declare function makeReturnSourceSystemRequest(value: InputValue<ReturnSourceSystemRequestInput>): Model<ReturnSourceSystemRequestInput>;
export declare function makeReturnUnverifiedItem(value: InputValue<ReturnUnverifiedItemInput>): Model<ReturnUnverifiedItemInput>;
export declare function makeReturnWindow(value: InputValue<ReturnWindowInput>): Model<ReturnWindowInput>;
export declare function makeReverseInvoiceManualPaymentRequest(value: InputValue<ReverseInvoiceManualPaymentRequestInput>): Model<ReverseInvoiceManualPaymentRequestInput>;
export declare function makeRevokeDeliveryDependencyRequest(value: InputValue<RevokeDeliveryDependencyRequestInput>): Model<RevokeDeliveryDependencyRequestInput>;
export declare function makeRevokeDeliveryDependencyTarget(value: InputValue<RevokeDeliveryDependencyTargetInput>): Model<RevokeDeliveryDependencyTargetInput>;
export declare function makeRevokeDeliveryDependencyTargetDeliveryMethod(value: InputValue<RevokeDeliveryDependencyTargetDeliveryMethodInput>): Model<RevokeDeliveryDependencyTargetDeliveryMethodInput>;
export declare function makeRevokeDeliveryDependencyTargetDeliveryMethodRevision(value: InputValue<RevokeDeliveryDependencyTargetDeliveryMethodRevisionInput>): Model<RevokeDeliveryDependencyTargetDeliveryMethodRevisionInput>;
export declare function makeRevokeDeliveryDependencyTargetDeliveryRateCallback(value: InputValue<RevokeDeliveryDependencyTargetDeliveryRateCallbackInput>): Model<RevokeDeliveryDependencyTargetDeliveryRateCallbackInput>;
export declare function makeRevokeDeliveryDependencyTargetDeliveryRateCallbackRevision(value: InputValue<RevokeDeliveryDependencyTargetDeliveryRateCallbackRevisionInput>): Model<RevokeDeliveryDependencyTargetDeliveryRateCallbackRevisionInput>;
export declare function makeRevokeDeliveryDependencyTargetDeliveryRateCallbackSigningKey(value: InputValue<RevokeDeliveryDependencyTargetDeliveryRateCallbackSigningKeyInput>): Model<RevokeDeliveryDependencyTargetDeliveryRateCallbackSigningKeyInput>;
export declare function makeRevokeDeliveryDependencyTargetLocationGeography(value: InputValue<RevokeDeliveryDependencyTargetLocationGeographyInput>): Model<RevokeDeliveryDependencyTargetLocationGeographyInput>;
export declare function makeRiskPredicateNode(value: InputValue<Exclude<RiskPredicateNodeInput & object, readonly unknown[]>>): Model<Exclude<RiskPredicateNodeInput & object, readonly unknown[]>>;
export declare function makeRiskPredicateNode(value: InputValue<RiskPredicateNodeInput>): Model<RiskPredicateNodeInput>;
export declare function makeRiskPredicateNodeAll(value: InputValue<RiskPredicateNodeAllInput>): Model<RiskPredicateNodeAllInput>;
export declare function makeRiskPredicateNodeAny(value: InputValue<RiskPredicateNodeAnyInput>): Model<RiskPredicateNodeAnyInput>;
export declare function makeRiskPredicateNodeComparison(value: InputValue<RiskPredicateNodeComparisonInput>): Model<RiskPredicateNodeComparisonInput>;
export declare function makeRiskPredicateNodeIn(value: InputValue<RiskPredicateNodeInInput>): Model<RiskPredicateNodeInInput>;
export declare function makeRiskPredicateNodeInList(value: InputValue<RiskPredicateNodeInListInput>): Model<RiskPredicateNodeInListInput>;
export declare function makeRiskPredicateNodeIsMissing(value: InputValue<RiskPredicateNodeIsMissingInput>): Model<RiskPredicateNodeIsMissingInput>;
export declare function makeRiskPredicateNodeMoneyComparison(value: InputValue<RiskPredicateNodeMoneyComparisonInput>): Model<RiskPredicateNodeMoneyComparisonInput>;
export declare function makeRiskPredicateNodeNot(value: InputValue<RiskPredicateNodeNotInput>): Model<RiskPredicateNodeNotInput>;
export declare function makeRotateGiftCardCodeRequest(value: InputValue<RotateGiftCardCodeRequestInput>): Model<RotateGiftCardCodeRequestInput>;
export declare function makeRotatePartnerAppSecretRequest(value: InputValue<RotatePartnerAppSecretRequestInput>): Model<RotatePartnerAppSecretRequestInput>;
export declare function makeRotateWebhookSecretRequest(value: InputValue<RotateWebhookSecretRequestInput>): Model<RotateWebhookSecretRequestInput>;
export declare function makeSaveMeGiftCardRequest(value: InputValue<SaveMeGiftCardRequestInput>): Model<SaveMeGiftCardRequestInput>;
export declare function makeSaveMeGiftCardRequestCode(value: InputValue<SaveMeGiftCardRequestCodeInput>): Model<SaveMeGiftCardRequestCodeInput>;
export declare function makeSaveMeGiftCardRequestRecipientAccess(value: InputValue<SaveMeGiftCardRequestRecipientAccessInput>): Model<SaveMeGiftCardRequestRecipientAccessInput>;
export declare function makeSaveMePaymentMethodRequest(value: InputValue<SaveMePaymentMethodRequestInput>): Model<SaveMePaymentMethodRequestInput>;
export declare function makeSavePaymentMethodRequest(value: InputValue<SavePaymentMethodRequestInput>): Model<SavePaymentMethodRequestInput>;
export declare function makeSellerTaxAttestationRequest(value: InputValue<SellerTaxAttestationRequestInput>): Model<SellerTaxAttestationRequestInput>;
export declare function makeSendOrderReceiptRequest(value: InputValue<SendOrderReceiptRequestInput>): Model<SendOrderReceiptRequestInput>;
export declare function makeSendPaymentIntentReceiptRequest(value: InputValue<SendPaymentIntentReceiptRequestInput>): Model<SendPaymentIntentReceiptRequestInput>;
export declare function makeSignedMoneyRequest(value: InputValue<SignedMoneyRequestInput>): Model<SignedMoneyRequestInput>;
export declare function makeSimulateDisputeRequest(value: InputValue<SimulateDisputeRequestInput>): Model<SimulateDisputeRequestInput>;
export declare function makeSinglePackageCreateInputCreated(value: InputValue<SinglePackageCreateInputCreatedInput>): Model<SinglePackageCreateInputCreatedInput>;
export declare function makeSinglePackageCreateInputShipped(value: InputValue<SinglePackageCreateInputShippedInput>): Model<SinglePackageCreateInputShippedInput>;
export declare function makeSinglePackageCreateRequest(value: InputValue<SinglePackageCreateRequestInput>): Model<SinglePackageCreateRequestInput>;
export declare function makeSkipMeSubscriptionCycleRequest(value: InputValue<SkipMeSubscriptionCycleRequestInput>): Model<SkipMeSubscriptionCycleRequestInput>;
export declare function makeSkipSubscriptionCycleRequest(value: InputValue<SkipSubscriptionCycleRequestInput>): Model<SkipSubscriptionCycleRequestInput>;
export declare function makeSubscribedLineRequest(value: InputValue<SubscribedLineRequestInput>): Model<SubscribedLineRequestInput>;
export declare function makeSubscriptionBillingScheduleInputExternal(value: InputValue<SubscriptionBillingScheduleInputExternalInput>): Model<SubscriptionBillingScheduleInputExternalInput>;
export declare function makeSubscriptionBillingScheduleInputFlint(value: InputValue<SubscriptionBillingScheduleInputFlintInput>): Model<SubscriptionBillingScheduleInputFlintInput>;
