import type { InputValue, Model } from '../runtime.js';
import type {
    ReturnReceiptLineItemInputExcessInput,
    ReturnReceiptLineItemInputMatchedInput,
    ReturnReceiptLineItemInputUnverifiedInput,
    ReturnReceiptLineItemRequestInput
} from './types-56.js';
import type {
    ReturnReplacementLineItemInputBundleInput,
    ReturnReplacementLineItemInputCustomInput,
    ReturnReplacementLineItemInputVariantInput,
    ReturnReplacementLineItemRequestInput,
    ReturnResolutionAdjustmentRequestInput,
    ReturnResolutionLineItemRequestInput,
    ReturnRestockingFeePolicyRequestInput,
    ReturnShipmentLineItemAllocationRequestInput,
    ReturnShippingPolicyRequestInput,
    ReturnSourceSystemRequestInput,
    ReturnUnverifiedItemInput,
    ReturnWindowRequestInput
} from './types-57.js';
import type {
    ReverseInvoiceManualPaymentRequestInput,
    RiskPredicateNodeAllRequestInput,
    RiskPredicateNodeAnyRequestInput,
    RiskPredicateNodeComparisonRequestInput,
    RiskPredicateNodeInListRequestInput,
    RiskPredicateNodeInRequestInput,
    RiskPredicateNodeIsMissingRequestInput,
    RiskPredicateNodeMoneyComparisonRequestInput,
    RiskPredicateNodeNotRequestInput,
    RiskPredicateNodeRequestInput
} from './types-58.js';
import type {
    RotateGiftCardCodeRequestInput,
    RotatePartnerAppSecretRequestInput,
    RotateWebhookSecretRequestInput,
    SaveMeGiftCardRequestInput,
    SaveMeGiftCardRequestCodeInput,
    SaveMeGiftCardRequestRecipientAccessInput,
    SaveMePaymentMethodRequestInput,
    SavePaymentMethodRequestInput,
    ScheduleFulfillmentRequestInput,
    SellerTaxAttestationRequestInput,
    SendOrderReceiptRequestInput,
    SendPaymentIntentReceiptRequestInput
} from './types-59.js';
import type {
    SignWebhookEndpointDeliveryRequestInput,
    SignedMoneyRequestInput,
    SimulateDisputeRequestInput,
    SimulateReaderRequestInput,
    SinglePackageCreateInputCreatedInput,
    SinglePackageCreateInputShippedInput,
    SinglePackageCreateRequestInput,
    SkipMeSubscriptionCycleRequestInput,
    SkipSubscriptionCycleRequestInput,
    SplitReversalRequestInput,
    StartFulfillmentRequestInput,
    SubscribedLineRequestModelInput,
    SubscriptionBillingScheduleInputExternalInput,
    SubscriptionBillingScheduleInputFlintInput,
    SubscriptionBillingScheduleRequestInput,
    SubscriptionBillingScheduleUpdateInputExternalInput,
    SubscriptionBillingScheduleUpdateInputFlintInput,
    SubscriptionBillingScheduleUpdateRequestInput,
    SubscriptionBillingStartInputImmediateInput
} from './types-60.js';
import type {
    SubscriptionBillingStartInputImportedInput,
    SubscriptionBillingStartInputScheduledInput,
    SubscriptionBillingStartRequestInput,
    SubscriptionDeliveryDestinationInputAddressInput,
    SubscriptionDeliveryDestinationInputCustomerAddressInput,
    SubscriptionDeliveryDestinationRequestInput,
    SubscriptionDeliveryRequestInput
} from './types-61.js';
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
export declare function makeReturnRestockingFeePolicyRequest(value: InputValue<ReturnRestockingFeePolicyRequestInput>): Model<ReturnRestockingFeePolicyRequestInput>;
export declare function makeReturnShipmentLineItemAllocationRequest(value: InputValue<ReturnShipmentLineItemAllocationRequestInput>): Model<ReturnShipmentLineItemAllocationRequestInput>;
export declare function makeReturnShippingPolicyRequest(value: InputValue<ReturnShippingPolicyRequestInput>): Model<ReturnShippingPolicyRequestInput>;
export declare function makeReturnSourceSystemRequest(value: InputValue<ReturnSourceSystemRequestInput>): Model<ReturnSourceSystemRequestInput>;
export declare function makeReturnUnverifiedItem(value: InputValue<ReturnUnverifiedItemInput>): Model<ReturnUnverifiedItemInput>;
export declare function makeReturnWindowRequest(value: InputValue<ReturnWindowRequestInput>): Model<ReturnWindowRequestInput>;
export declare function makeReverseInvoiceManualPaymentRequest(value: InputValue<ReverseInvoiceManualPaymentRequestInput>): Model<ReverseInvoiceManualPaymentRequestInput>;
export declare function makeRiskPredicateNodeAllRequest(value: InputValue<RiskPredicateNodeAllRequestInput>): Model<RiskPredicateNodeAllRequestInput>;
export declare function makeRiskPredicateNodeAnyRequest(value: InputValue<RiskPredicateNodeAnyRequestInput>): Model<RiskPredicateNodeAnyRequestInput>;
export declare function makeRiskPredicateNodeComparisonRequest(value: InputValue<RiskPredicateNodeComparisonRequestInput>): Model<RiskPredicateNodeComparisonRequestInput>;
export declare function makeRiskPredicateNodeInListRequest(value: InputValue<RiskPredicateNodeInListRequestInput>): Model<RiskPredicateNodeInListRequestInput>;
export declare function makeRiskPredicateNodeInRequest(value: InputValue<RiskPredicateNodeInRequestInput>): Model<RiskPredicateNodeInRequestInput>;
export declare function makeRiskPredicateNodeIsMissingRequest(value: InputValue<RiskPredicateNodeIsMissingRequestInput>): Model<RiskPredicateNodeIsMissingRequestInput>;
export declare function makeRiskPredicateNodeMoneyComparisonRequest(value: InputValue<RiskPredicateNodeMoneyComparisonRequestInput>): Model<RiskPredicateNodeMoneyComparisonRequestInput>;
export declare function makeRiskPredicateNodeNotRequest(value: InputValue<RiskPredicateNodeNotRequestInput>): Model<RiskPredicateNodeNotRequestInput>;
export declare function makeRiskPredicateNodeRequest(value: InputValue<Exclude<RiskPredicateNodeRequestInput & object, readonly unknown[]>>): Model<Exclude<RiskPredicateNodeRequestInput & object, readonly unknown[]>>;
export declare function makeRiskPredicateNodeRequest(value: InputValue<RiskPredicateNodeRequestInput>): Model<RiskPredicateNodeRequestInput>;
export declare function makeRotateGiftCardCodeRequest(value: InputValue<RotateGiftCardCodeRequestInput>): Model<RotateGiftCardCodeRequestInput>;
export declare function makeRotatePartnerAppSecretRequest(value: InputValue<RotatePartnerAppSecretRequestInput>): Model<RotatePartnerAppSecretRequestInput>;
export declare function makeRotateWebhookSecretRequest(value: InputValue<RotateWebhookSecretRequestInput>): Model<RotateWebhookSecretRequestInput>;
export declare function makeSaveMeGiftCardRequest(value: InputValue<SaveMeGiftCardRequestInput>): Model<SaveMeGiftCardRequestInput>;
export declare function makeSaveMeGiftCardRequestCode(value: InputValue<SaveMeGiftCardRequestCodeInput>): Model<SaveMeGiftCardRequestCodeInput>;
export declare function makeSaveMeGiftCardRequestRecipientAccess(value: InputValue<SaveMeGiftCardRequestRecipientAccessInput>): Model<SaveMeGiftCardRequestRecipientAccessInput>;
export declare function makeSaveMePaymentMethodRequest(value: InputValue<SaveMePaymentMethodRequestInput>): Model<SaveMePaymentMethodRequestInput>;
export declare function makeSavePaymentMethodRequest(value: InputValue<SavePaymentMethodRequestInput>): Model<SavePaymentMethodRequestInput>;
export declare function makeScheduleFulfillmentRequest(value: InputValue<ScheduleFulfillmentRequestInput>): Model<ScheduleFulfillmentRequestInput>;
export declare function makeSellerTaxAttestationRequest(value: InputValue<SellerTaxAttestationRequestInput>): Model<SellerTaxAttestationRequestInput>;
export declare function makeSendOrderReceiptRequest(value: InputValue<SendOrderReceiptRequestInput>): Model<SendOrderReceiptRequestInput>;
export declare function makeSendPaymentIntentReceiptRequest(value: InputValue<SendPaymentIntentReceiptRequestInput>): Model<SendPaymentIntentReceiptRequestInput>;
export declare function makeSignWebhookEndpointDeliveryRequest(value: InputValue<SignWebhookEndpointDeliveryRequestInput>): Model<SignWebhookEndpointDeliveryRequestInput>;
export declare function makeSignedMoneyRequest(value: InputValue<SignedMoneyRequestInput>): Model<SignedMoneyRequestInput>;
export declare function makeSimulateDisputeRequest(value: InputValue<SimulateDisputeRequestInput>): Model<SimulateDisputeRequestInput>;
export declare function makeSimulateReaderRequest(value: InputValue<SimulateReaderRequestInput>): Model<SimulateReaderRequestInput>;
export declare function makeSinglePackageCreateInputCreated(value: InputValue<SinglePackageCreateInputCreatedInput>): Model<SinglePackageCreateInputCreatedInput>;
export declare function makeSinglePackageCreateInputShipped(value: InputValue<SinglePackageCreateInputShippedInput>): Model<SinglePackageCreateInputShippedInput>;
export declare function makeSinglePackageCreateRequest(value: InputValue<SinglePackageCreateRequestInput>): Model<SinglePackageCreateRequestInput>;
export declare function makeSkipMeSubscriptionCycleRequest(value: InputValue<SkipMeSubscriptionCycleRequestInput>): Model<SkipMeSubscriptionCycleRequestInput>;
export declare function makeSkipSubscriptionCycleRequest(value: InputValue<SkipSubscriptionCycleRequestInput>): Model<SkipSubscriptionCycleRequestInput>;
export declare function makeSplitReversalRequest(value: InputValue<SplitReversalRequestInput>): Model<SplitReversalRequestInput>;
export declare function makeStartFulfillmentRequest(value: InputValue<StartFulfillmentRequestInput>): Model<StartFulfillmentRequestInput>;
export declare function makeSubscribedLineRequestModel(value: InputValue<SubscribedLineRequestModelInput>): Model<SubscribedLineRequestModelInput>;
export declare function makeSubscriptionBillingScheduleInputExternal(value: InputValue<SubscriptionBillingScheduleInputExternalInput>): Model<SubscriptionBillingScheduleInputExternalInput>;
export declare function makeSubscriptionBillingScheduleInputFlint(value: InputValue<SubscriptionBillingScheduleInputFlintInput>): Model<SubscriptionBillingScheduleInputFlintInput>;
export declare function makeSubscriptionBillingScheduleRequest(value: InputValue<SubscriptionBillingScheduleRequestInput>): Model<SubscriptionBillingScheduleRequestInput>;
export declare function makeSubscriptionBillingScheduleUpdateInputExternal(value: InputValue<SubscriptionBillingScheduleUpdateInputExternalInput>): Model<SubscriptionBillingScheduleUpdateInputExternalInput>;
export declare function makeSubscriptionBillingScheduleUpdateInputFlint(value: InputValue<SubscriptionBillingScheduleUpdateInputFlintInput>): Model<SubscriptionBillingScheduleUpdateInputFlintInput>;
export declare function makeSubscriptionBillingScheduleUpdateRequest(value: InputValue<Exclude<SubscriptionBillingScheduleUpdateRequestInput & object, readonly unknown[]>>): Model<Exclude<SubscriptionBillingScheduleUpdateRequestInput & object, readonly unknown[]>>;
export declare function makeSubscriptionBillingScheduleUpdateRequest(value: InputValue<SubscriptionBillingScheduleUpdateRequestInput>): Model<SubscriptionBillingScheduleUpdateRequestInput>;
export declare function makeSubscriptionBillingStartInputImmediate(value: InputValue<SubscriptionBillingStartInputImmediateInput>): Model<SubscriptionBillingStartInputImmediateInput>;
export declare function makeSubscriptionBillingStartInputImported(value: InputValue<SubscriptionBillingStartInputImportedInput>): Model<SubscriptionBillingStartInputImportedInput>;
export declare function makeSubscriptionBillingStartInputScheduled(value: InputValue<SubscriptionBillingStartInputScheduledInput>): Model<SubscriptionBillingStartInputScheduledInput>;
export declare function makeSubscriptionBillingStartRequest(value: InputValue<Exclude<SubscriptionBillingStartRequestInput & object, readonly unknown[]>>): Model<Exclude<SubscriptionBillingStartRequestInput & object, readonly unknown[]>>;
export declare function makeSubscriptionBillingStartRequest(value: InputValue<SubscriptionBillingStartRequestInput>): Model<SubscriptionBillingStartRequestInput>;
export declare function makeSubscriptionDeliveryDestinationInputAddress(value: InputValue<SubscriptionDeliveryDestinationInputAddressInput>): Model<SubscriptionDeliveryDestinationInputAddressInput>;
export declare function makeSubscriptionDeliveryDestinationInputCustomerAddress(value: InputValue<SubscriptionDeliveryDestinationInputCustomerAddressInput>): Model<SubscriptionDeliveryDestinationInputCustomerAddressInput>;
export declare function makeSubscriptionDeliveryDestinationRequest(value: InputValue<Exclude<SubscriptionDeliveryDestinationRequestInput & object, readonly unknown[]>>): Model<Exclude<SubscriptionDeliveryDestinationRequestInput & object, readonly unknown[]>>;
export declare function makeSubscriptionDeliveryDestinationRequest(value: InputValue<SubscriptionDeliveryDestinationRequestInput>): Model<SubscriptionDeliveryDestinationRequestInput>;
export declare function makeSubscriptionDeliveryRequest(value: InputValue<SubscriptionDeliveryRequestInput>): Model<SubscriptionDeliveryRequestInput>;
