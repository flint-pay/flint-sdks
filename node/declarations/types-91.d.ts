import type { InputValue, Model } from '../runtime.js';
import type {
    RefundTenderAllocationInputGiftCardRedemptionInput,
    RefundTenderAllocationInputPaymentIntentInput,
    RefundTenderAllocationRequestInput,
    ReleaseFulfillmentHoldRequestInput,
    ReleaseInventoryReservationRequestInput,
    ReleaseLicenseKeyActivationRequestInput,
    ReleaseReturnResolutionRequestInput,
    RememberedBuyerTokenRequestInput,
    RemoveDiscountsRequestInput,
    RemoveLicenseKeyPoolKeysRequestInput,
    RemoveSubscriptionPromotionsRequestInput,
    RenewSubscriptionRequestInput,
    ReopenReturnRequestInput,
    ReportInventoryTransferLossRequestInput,
    RepriceDiscountsRequestInput
} from './types-61.js';
import type {
    ResendLicenseKeyRequestInput,
    ResendWebhookDeliveryRequestInput,
    ResetDemoSessionRequestInput,
    ResolveCustomerDeletionRequestInput,
    ResolveOrderInventoryExceptionRequestInput,
    ResolvePaymentLinkLineItemModifierInputCatalogInput,
    ResolvePaymentLinkLineItemModifierInputTextInput,
    ResolvePaymentLinkLineItemModifierRequestInput,
    ResolvePaymentLinkLineItemModifiersInput,
    ResolvePaymentLinkRequestInput,
    ResolvePaymentLinkTextModifierRequestInput,
    ResourceVersionRequestInput,
    RetryOrderEditRefundRequestInput,
    RetryReturnDispositionRequestInput,
    RetryReturnResolutionRequestInput
} from './types-62.js';
import type {
    ReturnEligibilityLineItemRequestModelInput,
    ReturnEligibilitySelectionAllRemainingFulfilledRequestInput,
    ReturnEligibilitySelectionLineItemsRequestInput,
    ReturnEligibilitySelectionRequestInput,
    ReturnInspectionLineItemRequestInput,
    ReturnInventoryTransferToOriginRequestInput,
    ReturnLineDecisionInput,
    ReturnLineItemRequestInput
} from './types-63.js';
import type {
    ReturnPolicyRevisionInputIneligibleInput,
    ReturnPolicyRevisionInputReturnableInput,
    ReturnPolicyRevisionRequestInput,
    ReturnPolicyScopeAllRequestInput,
    ReturnPolicyScopeIncludeRequestInput,
    ReturnPolicyScopeRequestInput,
    ReturnProcessDecisionInput,
    ReturnProcessDispositionRequestInput,
    ReturnProcessInspectionRequestInput,
    ReturnProcessReceiptRequestInput,
    ReturnProcessResolutionRequestInput,
    ReturnReceiptLineItemInputExcessInput,
    ReturnReceiptLineItemInputMatchedInput,
    ReturnReceiptLineItemInputUnverifiedInput,
    ReturnReceiptLineItemRequestInput
} from './types-64.js';
import type {
    ReturnReplacementLineItemInputBundleInput,
    ReturnReplacementLineItemInputCustomInput,
    ReturnReplacementLineItemInputVariantInput,
    ReturnReplacementLineItemRequestInput,
    ReturnReplacementTaxRequestInput,
    ReturnResolutionAdjustmentRequestInput,
    ReturnResolutionLineItemRequestInput,
    ReturnRestockingFeePolicyRequestInput,
    ReturnShipmentLineItemAllocationRequestInput,
    ReturnShippingPolicyRequestInput
} from './types-65.js';
import type { ReturnSourceSystemRequestInput } from './types-66.js';
export declare function makeRefundTenderAllocationInputGiftCardRedemption(value: InputValue<RefundTenderAllocationInputGiftCardRedemptionInput>): Model<RefundTenderAllocationInputGiftCardRedemptionInput>;
export declare function makeRefundTenderAllocationInputPaymentIntent(value: InputValue<RefundTenderAllocationInputPaymentIntentInput>): Model<RefundTenderAllocationInputPaymentIntentInput>;
export declare function makeRefundTenderAllocationRequest(value: InputValue<RefundTenderAllocationRequestInput>): Model<RefundTenderAllocationRequestInput>;
export declare function makeReleaseFulfillmentHoldRequest(value: InputValue<ReleaseFulfillmentHoldRequestInput>): Model<ReleaseFulfillmentHoldRequestInput>;
export declare function makeReleaseInventoryReservationRequest(value: InputValue<ReleaseInventoryReservationRequestInput>): Model<ReleaseInventoryReservationRequestInput>;
export declare function makeReleaseLicenseKeyActivationRequest(value: InputValue<ReleaseLicenseKeyActivationRequestInput>): Model<ReleaseLicenseKeyActivationRequestInput>;
export declare function makeReleaseReturnResolutionRequest(value: InputValue<ReleaseReturnResolutionRequestInput>): Model<ReleaseReturnResolutionRequestInput>;
export declare function makeRememberedBuyerTokenRequest(value: InputValue<RememberedBuyerTokenRequestInput>): Model<RememberedBuyerTokenRequestInput>;
export declare function makeRemoveDiscountsRequest(value: InputValue<RemoveDiscountsRequestInput>): Model<RemoveDiscountsRequestInput>;
export declare function makeRemoveLicenseKeyPoolKeysRequest(value: InputValue<Exclude<RemoveLicenseKeyPoolKeysRequestInput & object, readonly unknown[]>>): Model<Exclude<RemoveLicenseKeyPoolKeysRequestInput & object, readonly unknown[]>>;
export declare function makeRemoveLicenseKeyPoolKeysRequest(value: InputValue<RemoveLicenseKeyPoolKeysRequestInput>): Model<RemoveLicenseKeyPoolKeysRequestInput>;
export declare function makeRemoveSubscriptionPromotionsRequest(value: InputValue<RemoveSubscriptionPromotionsRequestInput>): Model<RemoveSubscriptionPromotionsRequestInput>;
export declare function makeRenewSubscriptionRequest(value: InputValue<RenewSubscriptionRequestInput>): Model<RenewSubscriptionRequestInput>;
export declare function makeReopenReturnRequest(value: InputValue<ReopenReturnRequestInput>): Model<ReopenReturnRequestInput>;
export declare function makeReportInventoryTransferLossRequest(value: InputValue<ReportInventoryTransferLossRequestInput>): Model<ReportInventoryTransferLossRequestInput>;
export declare function makeRepriceDiscountsRequest(value: InputValue<RepriceDiscountsRequestInput>): Model<RepriceDiscountsRequestInput>;
export declare function makeResendLicenseKeyRequest(value: InputValue<ResendLicenseKeyRequestInput>): Model<ResendLicenseKeyRequestInput>;
export declare function makeResendWebhookDeliveryRequest(value: InputValue<ResendWebhookDeliveryRequestInput>): Model<ResendWebhookDeliveryRequestInput>;
export declare function makeResetDemoSessionRequest(value: InputValue<ResetDemoSessionRequestInput>): Model<ResetDemoSessionRequestInput>;
export declare function makeResolveCustomerDeletionRequest(value: InputValue<ResolveCustomerDeletionRequestInput>): Model<ResolveCustomerDeletionRequestInput>;
export declare function makeResolveOrderInventoryExceptionRequest(value: InputValue<ResolveOrderInventoryExceptionRequestInput>): Model<ResolveOrderInventoryExceptionRequestInput>;
export declare function makeResolvePaymentLinkLineItemModifierInputCatalog(value: InputValue<ResolvePaymentLinkLineItemModifierInputCatalogInput>): Model<ResolvePaymentLinkLineItemModifierInputCatalogInput>;
export declare function makeResolvePaymentLinkLineItemModifierInputText(value: InputValue<ResolvePaymentLinkLineItemModifierInputTextInput>): Model<ResolvePaymentLinkLineItemModifierInputTextInput>;
export declare function makeResolvePaymentLinkLineItemModifierRequest(value: InputValue<ResolvePaymentLinkLineItemModifierRequestInput>): Model<ResolvePaymentLinkLineItemModifierRequestInput>;
export declare function makeResolvePaymentLinkLineItemModifiers(value: InputValue<ResolvePaymentLinkLineItemModifiersInput>): Model<ResolvePaymentLinkLineItemModifiersInput>;
export declare function makeResolvePaymentLinkRequest(value: InputValue<ResolvePaymentLinkRequestInput>): Model<ResolvePaymentLinkRequestInput>;
export declare function makeResolvePaymentLinkTextModifierRequest(value: InputValue<ResolvePaymentLinkTextModifierRequestInput>): Model<ResolvePaymentLinkTextModifierRequestInput>;
export declare function makeResourceVersionRequest(value: InputValue<ResourceVersionRequestInput>): Model<ResourceVersionRequestInput>;
export declare function makeRetryOrderEditRefundRequest(value: InputValue<RetryOrderEditRefundRequestInput>): Model<RetryOrderEditRefundRequestInput>;
export declare function makeRetryReturnDispositionRequest(value: InputValue<RetryReturnDispositionRequestInput>): Model<RetryReturnDispositionRequestInput>;
export declare function makeRetryReturnResolutionRequest(value: InputValue<RetryReturnResolutionRequestInput>): Model<RetryReturnResolutionRequestInput>;
export declare function makeReturnEligibilityLineItemRequestModel(value: InputValue<ReturnEligibilityLineItemRequestModelInput>): Model<ReturnEligibilityLineItemRequestModelInput>;
export declare function makeReturnEligibilitySelectionAllRemainingFulfilledRequest(value: InputValue<ReturnEligibilitySelectionAllRemainingFulfilledRequestInput>): Model<ReturnEligibilitySelectionAllRemainingFulfilledRequestInput>;
export declare function makeReturnEligibilitySelectionLineItemsRequest(value: InputValue<ReturnEligibilitySelectionLineItemsRequestInput>): Model<ReturnEligibilitySelectionLineItemsRequestInput>;
export declare function makeReturnEligibilitySelectionRequest(value: InputValue<ReturnEligibilitySelectionRequestInput>): Model<ReturnEligibilitySelectionRequestInput>;
export declare function makeReturnInspectionLineItemRequest(value: InputValue<ReturnInspectionLineItemRequestInput>): Model<ReturnInspectionLineItemRequestInput>;
export declare function makeReturnInventoryTransferToOriginRequest(value: InputValue<ReturnInventoryTransferToOriginRequestInput>): Model<ReturnInventoryTransferToOriginRequestInput>;
export declare function makeReturnLineDecision(value: InputValue<ReturnLineDecisionInput>): Model<ReturnLineDecisionInput>;
export declare function makeReturnLineItemRequest(value: InputValue<ReturnLineItemRequestInput>): Model<ReturnLineItemRequestInput>;
export declare function makeReturnPolicyRevisionInputIneligible(value: InputValue<ReturnPolicyRevisionInputIneligibleInput>): Model<ReturnPolicyRevisionInputIneligibleInput>;
export declare function makeReturnPolicyRevisionInputReturnable(value: InputValue<ReturnPolicyRevisionInputReturnableInput>): Model<ReturnPolicyRevisionInputReturnableInput>;
export declare function makeReturnPolicyRevisionRequest(value: InputValue<ReturnPolicyRevisionRequestInput>): Model<ReturnPolicyRevisionRequestInput>;
export declare function makeReturnPolicyScopeAllRequest(value: InputValue<ReturnPolicyScopeAllRequestInput>): Model<ReturnPolicyScopeAllRequestInput>;
export declare function makeReturnPolicyScopeIncludeRequest(value: InputValue<ReturnPolicyScopeIncludeRequestInput>): Model<ReturnPolicyScopeIncludeRequestInput>;
export declare function makeReturnPolicyScopeRequest(value: InputValue<ReturnPolicyScopeRequestInput>): Model<ReturnPolicyScopeRequestInput>;
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
export declare function makeReturnReplacementTaxRequest(value: InputValue<ReturnReplacementTaxRequestInput>): Model<ReturnReplacementTaxRequestInput>;
export declare function makeReturnResolutionAdjustmentRequest(value: InputValue<ReturnResolutionAdjustmentRequestInput>): Model<ReturnResolutionAdjustmentRequestInput>;
export declare function makeReturnResolutionLineItemRequest(value: InputValue<ReturnResolutionLineItemRequestInput>): Model<ReturnResolutionLineItemRequestInput>;
export declare function makeReturnRestockingFeePolicyRequest(value: InputValue<ReturnRestockingFeePolicyRequestInput>): Model<ReturnRestockingFeePolicyRequestInput>;
export declare function makeReturnShipmentLineItemAllocationRequest(value: InputValue<ReturnShipmentLineItemAllocationRequestInput>): Model<ReturnShipmentLineItemAllocationRequestInput>;
export declare function makeReturnShippingPolicyRequest(value: InputValue<ReturnShippingPolicyRequestInput>): Model<ReturnShippingPolicyRequestInput>;
export declare function makeReturnSourceSystemRequest(value: InputValue<ReturnSourceSystemRequestInput>): Model<ReturnSourceSystemRequestInput>;
