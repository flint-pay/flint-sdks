import type { InputValue, Model } from '../runtime.js';
import type {
    DeliveryProfileConfigurationInputNoneInput,
    DeliveryProfileConfigurationInputQuoteInput,
    DeliveryProfileConfigurationInputRequiredInput,
    DeliveryProfileConfigurationRequestInput
} from './types-21.js';
import type {
    DeliveryProfileOriginPolicyInputFixedLocationInput,
    DeliveryProfileOriginPolicyInputInventoryRoutingInput,
    DeliveryProfileOriginPolicyInputMethodOriginInput,
    DeliveryProfileOriginPolicyRequestInput,
    DeliveryRadiusConditionRequestInput,
    DeliveryRadiusOriginInput,
    DeliveryRateCallbackConfigurationPatchRequestInput,
    DeliveryRateCallbackConfigurationRequestInput
} from './types-22.js';
import type {
    DeliveryRateEvaluationMethodOutcomeInput,
    DeliveryRateEvaluationOutcomeInput,
    DeliveryRateEvaluationOutcomeAvailableInput,
    DeliveryRateEvaluationOutcomeCannotCalculateInput,
    DeliveryRateEvaluationOutcomeUnavailableInput,
    DeliveryRateEvaluationResponseInput,
    DeliveryRateEvaluationWindowInput,
    DeliveryRateTablePricingStrategyCreateRequestInput,
    DeliveryRateTablePricingStrategyRequestInput,
    DeliveryRecipientRequirementRequestInput
} from './types-23.js';
import type {
    DeliveryScheduleWindowRuleRequestInput,
    DeliverySelectionInstructionsRequestInput,
    DeliverySelectionRecipientRequestInput,
    DeliveryStateConditionRequestInput,
    DeliveryTieredPricingStrategyInputQuantityOrMoneyInput,
    DeliveryTieredPricingStrategyInputWeightInput,
    DeliveryTieredPricingStrategyRequestInput,
    DeliveryTransitTimeRuleRequestInput,
    DeliveryWeeklyIntervalRequestInput,
    DeliveryWeightUnitPriceRequestInput,
    DeliveryWindowRequestInput,
    DeliveryWindowTimeConditionInput,
    DeliveryZoneConditionRequestInput,
    DeliveryZoneConfigurationRequestInput
} from './types-24.js';
import type {
    DepartInventoryTransferRequestInput,
    DimensionsRequestInput,
    DisableLicenseKeyRequestInput,
    DisconnectTaxConnectionRequestInput,
    DiscountPreviewRequestInput,
    DispatchFulfillmentRequestInput
} from './types-25.js';
import type { DocumentTaxIDRequestInput, EmailPreferenceLinkRequestInput } from './types-26.js';
import type {
    FailFulfillmentRequestInput,
    FreezeGiftCardRequestInput,
    FulfillmentItemizedPackagesRequestInput,
    FulfillmentLineItemRequestInput
} from './types-27.js';
import type {
    FulfillmentPackagingRequestInput,
    FulfillmentRecipientRequestInput,
    FulfillmentSettingsRequestInput,
    FulfillmentSinglePackageRequestInput,
    GeneratedLicenseKeyConfigurationRequestInput,
    GiftCardCustomAmountBoundsRequestInput
} from './types-28.js';
import type {
    GiftCardFundingSourceAdjustmentRequestInput,
    GiftCardFundingSourceExternalPaymentRequestInput,
    GiftCardFundingSourceFlintManualPaymentRequestInput,
    GiftCardFundingSourceFlintPaymentRequestInput,
    GiftCardFundingSourceGiftCardPurchaseRefundRecoveryRequestInput,
    GiftCardFundingSourceGiftCardRefundRequestInput,
    GiftCardFundingSourceImportRequestInput,
    GiftCardFundingSourceRequestInput,
    GiftCardFundingSourceStoreCreditRequestInput,
    GiftCardNotificationRecipientInput
} from './types-29.js';
export declare function makeDeliveryProfileConfigurationInputNone(value: InputValue<DeliveryProfileConfigurationInputNoneInput>): Model<DeliveryProfileConfigurationInputNoneInput>;
export declare function makeDeliveryProfileConfigurationInputQuote(value: InputValue<DeliveryProfileConfigurationInputQuoteInput>): Model<DeliveryProfileConfigurationInputQuoteInput>;
export declare function makeDeliveryProfileConfigurationInputRequired(value: InputValue<DeliveryProfileConfigurationInputRequiredInput>): Model<DeliveryProfileConfigurationInputRequiredInput>;
export declare function makeDeliveryProfileConfigurationRequest(value: InputValue<DeliveryProfileConfigurationRequestInput>): Model<DeliveryProfileConfigurationRequestInput>;
export declare function makeDeliveryProfileOriginPolicyInputFixedLocation(value: InputValue<DeliveryProfileOriginPolicyInputFixedLocationInput>): Model<DeliveryProfileOriginPolicyInputFixedLocationInput>;
export declare function makeDeliveryProfileOriginPolicyInputInventoryRouting(value: InputValue<DeliveryProfileOriginPolicyInputInventoryRoutingInput>): Model<DeliveryProfileOriginPolicyInputInventoryRoutingInput>;
export declare function makeDeliveryProfileOriginPolicyInputMethodOrigin(value: InputValue<DeliveryProfileOriginPolicyInputMethodOriginInput>): Model<DeliveryProfileOriginPolicyInputMethodOriginInput>;
export declare function makeDeliveryProfileOriginPolicyRequest(value: InputValue<DeliveryProfileOriginPolicyRequestInput>): Model<DeliveryProfileOriginPolicyRequestInput>;
export declare function makeDeliveryRadiusConditionRequest(value: InputValue<DeliveryRadiusConditionRequestInput>): Model<DeliveryRadiusConditionRequestInput>;
export declare function makeDeliveryRadiusOrigin(value: InputValue<DeliveryRadiusOriginInput>): Model<DeliveryRadiusOriginInput>;
export declare function makeDeliveryRateCallbackConfigurationPatchRequest(value: InputValue<DeliveryRateCallbackConfigurationPatchRequestInput>): Model<DeliveryRateCallbackConfigurationPatchRequestInput>;
export declare function makeDeliveryRateCallbackConfigurationRequest(value: InputValue<DeliveryRateCallbackConfigurationRequestInput>): Model<DeliveryRateCallbackConfigurationRequestInput>;
export declare function makeDeliveryRateEvaluationMethodOutcome(value: InputValue<DeliveryRateEvaluationMethodOutcomeInput>): Model<DeliveryRateEvaluationMethodOutcomeInput>;
export declare function makeDeliveryRateEvaluationOutcome(value: InputValue<DeliveryRateEvaluationOutcomeInput>): Model<DeliveryRateEvaluationOutcomeInput>;
export declare function makeDeliveryRateEvaluationOutcomeAvailable(value: InputValue<DeliveryRateEvaluationOutcomeAvailableInput>): Model<DeliveryRateEvaluationOutcomeAvailableInput>;
export declare function makeDeliveryRateEvaluationOutcomeCannotCalculate(value: InputValue<DeliveryRateEvaluationOutcomeCannotCalculateInput>): Model<DeliveryRateEvaluationOutcomeCannotCalculateInput>;
export declare function makeDeliveryRateEvaluationOutcomeUnavailable(value: InputValue<DeliveryRateEvaluationOutcomeUnavailableInput>): Model<DeliveryRateEvaluationOutcomeUnavailableInput>;
export declare function makeDeliveryRateEvaluationResponse(value: InputValue<DeliveryRateEvaluationResponseInput>): Model<DeliveryRateEvaluationResponseInput>;
export declare function makeDeliveryRateEvaluationWindow(value: InputValue<DeliveryRateEvaluationWindowInput>): Model<DeliveryRateEvaluationWindowInput>;
export declare function makeDeliveryRateTablePricingStrategyCreateRequest(value: InputValue<DeliveryRateTablePricingStrategyCreateRequestInput>): Model<DeliveryRateTablePricingStrategyCreateRequestInput>;
export declare function makeDeliveryRateTablePricingStrategyRequest(value: InputValue<DeliveryRateTablePricingStrategyRequestInput>): Model<DeliveryRateTablePricingStrategyRequestInput>;
export declare function makeDeliveryRecipientRequirementRequest(value: InputValue<DeliveryRecipientRequirementRequestInput>): Model<DeliveryRecipientRequirementRequestInput>;
export declare function makeDeliveryScheduleWindowRuleRequest(value: InputValue<DeliveryScheduleWindowRuleRequestInput>): Model<DeliveryScheduleWindowRuleRequestInput>;
export declare function makeDeliverySelectionInstructionsRequest(value: InputValue<DeliverySelectionInstructionsRequestInput>): Model<DeliverySelectionInstructionsRequestInput>;
export declare function makeDeliverySelectionRecipientRequest(value: InputValue<DeliverySelectionRecipientRequestInput>): Model<DeliverySelectionRecipientRequestInput>;
export declare function makeDeliveryStateConditionRequest(value: InputValue<DeliveryStateConditionRequestInput>): Model<DeliveryStateConditionRequestInput>;
export declare function makeDeliveryTieredPricingStrategyInputQuantityOrMoney(value: InputValue<DeliveryTieredPricingStrategyInputQuantityOrMoneyInput>): Model<DeliveryTieredPricingStrategyInputQuantityOrMoneyInput>;
export declare function makeDeliveryTieredPricingStrategyInputWeight(value: InputValue<DeliveryTieredPricingStrategyInputWeightInput>): Model<DeliveryTieredPricingStrategyInputWeightInput>;
export declare function makeDeliveryTieredPricingStrategyRequest(value: InputValue<DeliveryTieredPricingStrategyRequestInput>): Model<DeliveryTieredPricingStrategyRequestInput>;
export declare function makeDeliveryTransitTimeRuleRequest(value: InputValue<DeliveryTransitTimeRuleRequestInput>): Model<DeliveryTransitTimeRuleRequestInput>;
export declare function makeDeliveryWeeklyIntervalRequest(value: InputValue<DeliveryWeeklyIntervalRequestInput>): Model<DeliveryWeeklyIntervalRequestInput>;
export declare function makeDeliveryWeightUnitPriceRequest(value: InputValue<DeliveryWeightUnitPriceRequestInput>): Model<DeliveryWeightUnitPriceRequestInput>;
export declare function makeDeliveryWindowRequest(value: InputValue<DeliveryWindowRequestInput>): Model<DeliveryWindowRequestInput>;
export declare function makeDeliveryWindowTimeCondition(value: InputValue<DeliveryWindowTimeConditionInput>): Model<DeliveryWindowTimeConditionInput>;
export declare function makeDeliveryZoneConditionRequest(value: InputValue<DeliveryZoneConditionRequestInput>): Model<DeliveryZoneConditionRequestInput>;
export declare function makeDeliveryZoneConfigurationRequest(value: InputValue<DeliveryZoneConfigurationRequestInput>): Model<DeliveryZoneConfigurationRequestInput>;
export declare function makeDepartInventoryTransferRequest(value: InputValue<DepartInventoryTransferRequestInput>): Model<DepartInventoryTransferRequestInput>;
export declare function makeDimensionsRequest(value: InputValue<DimensionsRequestInput>): Model<DimensionsRequestInput>;
export declare function makeDisableLicenseKeyRequest(value: InputValue<DisableLicenseKeyRequestInput>): Model<DisableLicenseKeyRequestInput>;
export declare function makeDisconnectTaxConnectionRequest(value: InputValue<DisconnectTaxConnectionRequestInput>): Model<DisconnectTaxConnectionRequestInput>;
export declare function makeDiscountPreviewRequest(value: InputValue<DiscountPreviewRequestInput>): Model<DiscountPreviewRequestInput>;
export declare function makeDispatchFulfillmentRequest(value: InputValue<DispatchFulfillmentRequestInput>): Model<DispatchFulfillmentRequestInput>;
export declare function makeDocumentTaxIDRequest(value: InputValue<DocumentTaxIDRequestInput>): Model<DocumentTaxIDRequestInput>;
export declare function makeEmailPreferenceLinkRequest(value: InputValue<EmailPreferenceLinkRequestInput>): Model<EmailPreferenceLinkRequestInput>;
export declare function makeFailFulfillmentRequest(value: InputValue<FailFulfillmentRequestInput>): Model<FailFulfillmentRequestInput>;
export declare function makeFreezeGiftCardRequest(value: InputValue<FreezeGiftCardRequestInput>): Model<FreezeGiftCardRequestInput>;
export declare function makeFulfillmentItemizedPackagesRequest(value: InputValue<FulfillmentItemizedPackagesRequestInput>): Model<FulfillmentItemizedPackagesRequestInput>;
export declare function makeFulfillmentLineItemRequest(value: InputValue<FulfillmentLineItemRequestInput>): Model<FulfillmentLineItemRequestInput>;
export declare function makeFulfillmentPackagingRequest(value: InputValue<FulfillmentPackagingRequestInput>): Model<FulfillmentPackagingRequestInput>;
export declare function makeFulfillmentRecipientRequest(value: InputValue<FulfillmentRecipientRequestInput>): Model<FulfillmentRecipientRequestInput>;
export declare function makeFulfillmentSettingsRequest(value: InputValue<FulfillmentSettingsRequestInput>): Model<FulfillmentSettingsRequestInput>;
export declare function makeFulfillmentSinglePackageRequest(value: InputValue<FulfillmentSinglePackageRequestInput>): Model<FulfillmentSinglePackageRequestInput>;
export declare function makeGeneratedLicenseKeyConfigurationRequest(value: InputValue<GeneratedLicenseKeyConfigurationRequestInput>): Model<GeneratedLicenseKeyConfigurationRequestInput>;
export declare function makeGiftCardCustomAmountBoundsRequest(value: InputValue<GiftCardCustomAmountBoundsRequestInput>): Model<GiftCardCustomAmountBoundsRequestInput>;
export declare function makeGiftCardFundingSourceAdjustmentRequest(value: InputValue<GiftCardFundingSourceAdjustmentRequestInput>): Model<GiftCardFundingSourceAdjustmentRequestInput>;
export declare function makeGiftCardFundingSourceExternalPaymentRequest(value: InputValue<GiftCardFundingSourceExternalPaymentRequestInput>): Model<GiftCardFundingSourceExternalPaymentRequestInput>;
export declare function makeGiftCardFundingSourceFlintManualPaymentRequest(value: InputValue<GiftCardFundingSourceFlintManualPaymentRequestInput>): Model<GiftCardFundingSourceFlintManualPaymentRequestInput>;
export declare function makeGiftCardFundingSourceFlintPaymentRequest(value: InputValue<GiftCardFundingSourceFlintPaymentRequestInput>): Model<GiftCardFundingSourceFlintPaymentRequestInput>;
export declare function makeGiftCardFundingSourceGiftCardPurchaseRefundRecoveryRequest(value: InputValue<GiftCardFundingSourceGiftCardPurchaseRefundRecoveryRequestInput>): Model<GiftCardFundingSourceGiftCardPurchaseRefundRecoveryRequestInput>;
export declare function makeGiftCardFundingSourceGiftCardRefundRequest(value: InputValue<GiftCardFundingSourceGiftCardRefundRequestInput>): Model<GiftCardFundingSourceGiftCardRefundRequestInput>;
export declare function makeGiftCardFundingSourceImportRequest(value: InputValue<GiftCardFundingSourceImportRequestInput>): Model<GiftCardFundingSourceImportRequestInput>;
export declare function makeGiftCardFundingSourceRequest(value: InputValue<GiftCardFundingSourceRequestInput>): Model<GiftCardFundingSourceRequestInput>;
export declare function makeGiftCardFundingSourceStoreCreditRequest(value: InputValue<GiftCardFundingSourceStoreCreditRequestInput>): Model<GiftCardFundingSourceStoreCreditRequestInput>;
export declare function makeGiftCardNotificationRecipient(value: InputValue<GiftCardNotificationRecipientInput>): Model<GiftCardNotificationRecipientInput>;
