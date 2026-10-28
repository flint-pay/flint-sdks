import type { InputValue, Model } from '../runtime.js';
import type {
    DeliveryPreviewRoutingSourceInput,
    DeliveryPricingRateCreateRequestInput,
    DeliveryPricingRateRequestInput,
    DeliveryPricingStrategyCreateInputCalculatedInput,
    DeliveryPricingStrategyCreateInputCallbackInput,
    DeliveryPricingStrategyCreateInputCallerSuppliedInput,
    DeliveryPricingStrategyCreateInputFixedInput,
    DeliveryPricingStrategyCreateInputRateTableInput,
    DeliveryPricingStrategyCreateInputTieredInput,
    DeliveryPricingStrategyCreateRequestInput,
    DeliveryPricingStrategyInputCalculatedInput,
    DeliveryPricingStrategyInputCallbackInput,
    DeliveryPricingStrategyInputCallerSuppliedInput,
    DeliveryPricingStrategyInputFixedInput,
    DeliveryPricingStrategyInputRateTableInput
} from './types-14.js';
import type {
    DeliveryPricingStrategyInputTieredInput,
    DeliveryPricingStrategyRequestInput,
    DeliveryPricingTierBandRequestInput,
    DeliveryProfileConfigurationInputManualInput,
    DeliveryProfileConfigurationInputNoneInput,
    DeliveryProfileConfigurationInputQuoteInput,
    DeliveryProfileConfigurationInputRequiredInput,
    DeliveryProfileConfigurationRequestInput,
    DeliveryProfileOriginPolicyInputFixedLocationInput,
    DeliveryProfileOriginPolicyInputInventoryRoutingInput,
    DeliveryProfileOriginPolicyInputMethodOriginInput,
    DeliveryProfileOriginPolicyRequestInput,
    DeliveryRadiusConditionInput,
    DeliveryRadiusOriginInput,
    DeliveryRateCallbackConfigurationInput,
    DeliveryRateCallbackConfigurationPatchRequestInput
} from './types-15.js';
import type {
    DeliveryRateTablePricingStrategyCreateRequestInput,
    DeliveryRateTablePricingStrategyRequestInput,
    DeliveryRecipientRequirementInput,
    DeliveryScheduleWindowRuleRequestInput,
    DeliverySelectionInstructionsRequestInput,
    DeliverySelectionRecipientRequestInput,
    DeliveryStateConditionInput,
    DeliveryTieredPricingStrategyInputQuantityOrMoneyInput,
    DeliveryTieredPricingStrategyInputWeightInput,
    DeliveryTieredPricingStrategyRequestInput,
    DeliveryTransitTimeRuleRequestRequestInput,
    DeliveryWeeklyIntervalRequestRequestInput,
    DeliveryWeightUnitPriceRequestInput,
    DeliveryWindowRequestInput,
    DeliveryWindowTimeConditionInput
} from './types-16.js';
import type {
    DeliveryZoneConditionInput,
    DeliveryZoneConfigurationInput,
    DeveloperInitialAPIKeyRequestInput,
    DimensionsInput,
    DisconnectTaxConnectionRequestInput,
    DiscountPreviewRequestInput
} from './types-17.js';
import type { DocumentTaxIDRequestRequestInput, EmailPreferenceLinkRequestInput, FeedbackReportingClientInput } from './types-18.js';
import type {
    FulfillmentItemizedPackagesRequestInput,
    FulfillmentLineItemRequestInput,
    FulfillmentPackagingRequestInput,
    FulfillmentRecipientRequestInput,
    FulfillmentSettingsRequestRequestInput,
    FulfillmentSinglePackageRequestInput,
    FulfillmentTransitionRequestInput,
    FulfillmentTransitionRequestAcceptInput,
    FulfillmentTransitionRequestCancelInput
} from './types-19.js';
export declare function makeDeliveryPreviewRoutingSource(value: InputValue<DeliveryPreviewRoutingSourceInput>): Model<DeliveryPreviewRoutingSourceInput>;
export declare function makeDeliveryPricingRateCreateRequest(value: InputValue<DeliveryPricingRateCreateRequestInput>): Model<DeliveryPricingRateCreateRequestInput>;
export declare function makeDeliveryPricingRateRequest(value: InputValue<DeliveryPricingRateRequestInput>): Model<DeliveryPricingRateRequestInput>;
export declare function makeDeliveryPricingStrategyCreateInputCalculated(value: InputValue<DeliveryPricingStrategyCreateInputCalculatedInput>): Model<DeliveryPricingStrategyCreateInputCalculatedInput>;
export declare function makeDeliveryPricingStrategyCreateInputCallback(value: InputValue<DeliveryPricingStrategyCreateInputCallbackInput>): Model<DeliveryPricingStrategyCreateInputCallbackInput>;
export declare function makeDeliveryPricingStrategyCreateInputCallerSupplied(value: InputValue<DeliveryPricingStrategyCreateInputCallerSuppliedInput>): Model<DeliveryPricingStrategyCreateInputCallerSuppliedInput>;
export declare function makeDeliveryPricingStrategyCreateInputFixed(value: InputValue<DeliveryPricingStrategyCreateInputFixedInput>): Model<DeliveryPricingStrategyCreateInputFixedInput>;
export declare function makeDeliveryPricingStrategyCreateInputRateTable(value: InputValue<DeliveryPricingStrategyCreateInputRateTableInput>): Model<DeliveryPricingStrategyCreateInputRateTableInput>;
export declare function makeDeliveryPricingStrategyCreateInputTiered(value: InputValue<DeliveryPricingStrategyCreateInputTieredInput>): Model<DeliveryPricingStrategyCreateInputTieredInput>;
export declare function makeDeliveryPricingStrategyCreateRequest(value: InputValue<DeliveryPricingStrategyCreateRequestInput>): Model<DeliveryPricingStrategyCreateRequestInput>;
export declare function makeDeliveryPricingStrategyInputCalculated(value: InputValue<DeliveryPricingStrategyInputCalculatedInput>): Model<DeliveryPricingStrategyInputCalculatedInput>;
export declare function makeDeliveryPricingStrategyInputCallback(value: InputValue<DeliveryPricingStrategyInputCallbackInput>): Model<DeliveryPricingStrategyInputCallbackInput>;
export declare function makeDeliveryPricingStrategyInputCallerSupplied(value: InputValue<DeliveryPricingStrategyInputCallerSuppliedInput>): Model<DeliveryPricingStrategyInputCallerSuppliedInput>;
export declare function makeDeliveryPricingStrategyInputFixed(value: InputValue<DeliveryPricingStrategyInputFixedInput>): Model<DeliveryPricingStrategyInputFixedInput>;
export declare function makeDeliveryPricingStrategyInputRateTable(value: InputValue<DeliveryPricingStrategyInputRateTableInput>): Model<DeliveryPricingStrategyInputRateTableInput>;
export declare function makeDeliveryPricingStrategyInputTiered(value: InputValue<DeliveryPricingStrategyInputTieredInput>): Model<DeliveryPricingStrategyInputTieredInput>;
export declare function makeDeliveryPricingStrategyRequest(value: InputValue<DeliveryPricingStrategyRequestInput>): Model<DeliveryPricingStrategyRequestInput>;
export declare function makeDeliveryPricingTierBandRequest(value: InputValue<DeliveryPricingTierBandRequestInput>): Model<DeliveryPricingTierBandRequestInput>;
export declare function makeDeliveryProfileConfigurationInputManual(value: InputValue<DeliveryProfileConfigurationInputManualInput>): Model<DeliveryProfileConfigurationInputManualInput>;
export declare function makeDeliveryProfileConfigurationInputNone(value: InputValue<DeliveryProfileConfigurationInputNoneInput>): Model<DeliveryProfileConfigurationInputNoneInput>;
export declare function makeDeliveryProfileConfigurationInputQuote(value: InputValue<DeliveryProfileConfigurationInputQuoteInput>): Model<DeliveryProfileConfigurationInputQuoteInput>;
export declare function makeDeliveryProfileConfigurationInputRequired(value: InputValue<DeliveryProfileConfigurationInputRequiredInput>): Model<DeliveryProfileConfigurationInputRequiredInput>;
export declare function makeDeliveryProfileConfigurationRequest(value: InputValue<DeliveryProfileConfigurationRequestInput>): Model<DeliveryProfileConfigurationRequestInput>;
export declare function makeDeliveryProfileOriginPolicyInputFixedLocation(value: InputValue<DeliveryProfileOriginPolicyInputFixedLocationInput>): Model<DeliveryProfileOriginPolicyInputFixedLocationInput>;
export declare function makeDeliveryProfileOriginPolicyInputInventoryRouting(value: InputValue<DeliveryProfileOriginPolicyInputInventoryRoutingInput>): Model<DeliveryProfileOriginPolicyInputInventoryRoutingInput>;
export declare function makeDeliveryProfileOriginPolicyInputMethodOrigin(value: InputValue<DeliveryProfileOriginPolicyInputMethodOriginInput>): Model<DeliveryProfileOriginPolicyInputMethodOriginInput>;
export declare function makeDeliveryProfileOriginPolicyRequest(value: InputValue<DeliveryProfileOriginPolicyRequestInput>): Model<DeliveryProfileOriginPolicyRequestInput>;
export declare function makeDeliveryRadiusCondition(value: InputValue<DeliveryRadiusConditionInput>): Model<DeliveryRadiusConditionInput>;
export declare function makeDeliveryRadiusOrigin(value: InputValue<DeliveryRadiusOriginInput>): Model<DeliveryRadiusOriginInput>;
export declare function makeDeliveryRateCallbackConfiguration(value: InputValue<DeliveryRateCallbackConfigurationInput>): Model<DeliveryRateCallbackConfigurationInput>;
export declare function makeDeliveryRateCallbackConfigurationPatchRequest(value: InputValue<DeliveryRateCallbackConfigurationPatchRequestInput>): Model<DeliveryRateCallbackConfigurationPatchRequestInput>;
export declare function makeDeliveryRateTablePricingStrategyCreateRequest(value: InputValue<DeliveryRateTablePricingStrategyCreateRequestInput>): Model<DeliveryRateTablePricingStrategyCreateRequestInput>;
export declare function makeDeliveryRateTablePricingStrategyRequest(value: InputValue<DeliveryRateTablePricingStrategyRequestInput>): Model<DeliveryRateTablePricingStrategyRequestInput>;
export declare function makeDeliveryRecipientRequirement(value: InputValue<DeliveryRecipientRequirementInput>): Model<DeliveryRecipientRequirementInput>;
export declare function makeDeliveryScheduleWindowRuleRequest(value: InputValue<DeliveryScheduleWindowRuleRequestInput>): Model<DeliveryScheduleWindowRuleRequestInput>;
export declare function makeDeliverySelectionInstructionsRequest(value: InputValue<DeliverySelectionInstructionsRequestInput>): Model<DeliverySelectionInstructionsRequestInput>;
export declare function makeDeliverySelectionRecipientRequest(value: InputValue<DeliverySelectionRecipientRequestInput>): Model<DeliverySelectionRecipientRequestInput>;
export declare function makeDeliveryStateCondition(value: InputValue<DeliveryStateConditionInput>): Model<DeliveryStateConditionInput>;
export declare function makeDeliveryTieredPricingStrategyInputQuantityOrMoney(value: InputValue<DeliveryTieredPricingStrategyInputQuantityOrMoneyInput>): Model<DeliveryTieredPricingStrategyInputQuantityOrMoneyInput>;
export declare function makeDeliveryTieredPricingStrategyInputWeight(value: InputValue<DeliveryTieredPricingStrategyInputWeightInput>): Model<DeliveryTieredPricingStrategyInputWeightInput>;
export declare function makeDeliveryTieredPricingStrategyRequest(value: InputValue<DeliveryTieredPricingStrategyRequestInput>): Model<DeliveryTieredPricingStrategyRequestInput>;
export declare function makeDeliveryTransitTimeRuleRequestRequest(value: InputValue<DeliveryTransitTimeRuleRequestRequestInput>): Model<DeliveryTransitTimeRuleRequestRequestInput>;
export declare function makeDeliveryWeeklyIntervalRequestRequest(value: InputValue<DeliveryWeeklyIntervalRequestRequestInput>): Model<DeliveryWeeklyIntervalRequestRequestInput>;
export declare function makeDeliveryWeightUnitPriceRequest(value: InputValue<DeliveryWeightUnitPriceRequestInput>): Model<DeliveryWeightUnitPriceRequestInput>;
export declare function makeDeliveryWindowRequest(value: InputValue<DeliveryWindowRequestInput>): Model<DeliveryWindowRequestInput>;
export declare function makeDeliveryWindowTimeCondition(value: InputValue<DeliveryWindowTimeConditionInput>): Model<DeliveryWindowTimeConditionInput>;
export declare function makeDeliveryZoneCondition(value: InputValue<DeliveryZoneConditionInput>): Model<DeliveryZoneConditionInput>;
export declare function makeDeliveryZoneConfiguration(value: InputValue<DeliveryZoneConfigurationInput>): Model<DeliveryZoneConfigurationInput>;
export declare function makeDeveloperInitialAPIKeyRequest(value: InputValue<DeveloperInitialAPIKeyRequestInput>): Model<DeveloperInitialAPIKeyRequestInput>;
export declare function makeDimensions(value: InputValue<DimensionsInput>): Model<DimensionsInput>;
export declare function makeDisconnectTaxConnectionRequest(value: InputValue<DisconnectTaxConnectionRequestInput>): Model<DisconnectTaxConnectionRequestInput>;
export declare function makeDiscountPreviewRequest(value: InputValue<DiscountPreviewRequestInput>): Model<DiscountPreviewRequestInput>;
export declare function makeDocumentTaxIDRequestRequest(value: InputValue<DocumentTaxIDRequestRequestInput>): Model<DocumentTaxIDRequestRequestInput>;
export declare function makeEmailPreferenceLinkRequest(value: InputValue<EmailPreferenceLinkRequestInput>): Model<EmailPreferenceLinkRequestInput>;
export declare function makeFeedbackReportingClient(value: InputValue<FeedbackReportingClientInput>): Model<FeedbackReportingClientInput>;
export declare function makeFulfillmentItemizedPackagesRequest(value: InputValue<FulfillmentItemizedPackagesRequestInput>): Model<FulfillmentItemizedPackagesRequestInput>;
export declare function makeFulfillmentLineItemRequest(value: InputValue<FulfillmentLineItemRequestInput>): Model<FulfillmentLineItemRequestInput>;
export declare function makeFulfillmentPackagingRequest(value: InputValue<FulfillmentPackagingRequestInput>): Model<FulfillmentPackagingRequestInput>;
export declare function makeFulfillmentRecipientRequest(value: InputValue<FulfillmentRecipientRequestInput>): Model<FulfillmentRecipientRequestInput>;
export declare function makeFulfillmentSettingsRequestRequest(value: InputValue<FulfillmentSettingsRequestRequestInput>): Model<FulfillmentSettingsRequestRequestInput>;
export declare function makeFulfillmentSinglePackageRequest(value: InputValue<FulfillmentSinglePackageRequestInput>): Model<FulfillmentSinglePackageRequestInput>;
export declare function makeFulfillmentTransitionRequest(value: InputValue<Exclude<FulfillmentTransitionRequestInput & object, readonly unknown[]>>): Model<Exclude<FulfillmentTransitionRequestInput & object, readonly unknown[]>>;
export declare function makeFulfillmentTransitionRequest(value: InputValue<FulfillmentTransitionRequestInput>): Model<FulfillmentTransitionRequestInput>;
export declare function makeFulfillmentTransitionRequestAccept(value: InputValue<FulfillmentTransitionRequestAcceptInput>): Model<FulfillmentTransitionRequestAcceptInput>;
export declare function makeFulfillmentTransitionRequestCancel(value: InputValue<FulfillmentTransitionRequestCancelInput>): Model<FulfillmentTransitionRequestCancelInput>;
