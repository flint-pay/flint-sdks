import type { InputValue, Model } from '../runtime.js';
import type {
    SignWebhookEndpointDeliveryRequestInput,
    SignedMoneyRequestInput,
    SimulateDisputeRequestInput,
    SimulateReaderRequestInput,
    SinglePackageCreateInputCreatedInput,
    SinglePackageCreateInputShippedInput,
    SinglePackageCreateRequestInput,
    SkipMeSubscriptionCycleRequestInput,
    SkipSubscriptionCycleRequestInput
} from './types-59.js';
import type {
    SplitReversalRequestInput,
    StartFulfillmentRequestInput,
    SubscribedLineRequestModelInput,
    SubscriptionBillingScheduleInputExternalInput,
    SubscriptionBillingScheduleInputFlintInput,
    SubscriptionBillingScheduleRequestInput,
    SubscriptionBillingScheduleUpdateInputExternalInput,
    SubscriptionBillingScheduleUpdateInputFlintInput,
    SubscriptionBillingScheduleUpdateRequestInput,
    SubscriptionBillingStartInputImmediateInput,
    SubscriptionBillingStartInputImportedInput,
    SubscriptionBillingStartInputScheduledInput,
    SubscriptionBillingStartRequestInput,
    SubscriptionDeliveryDestinationInputAddressInput,
    SubscriptionDeliveryDestinationInputCustomerAddressInput,
    SubscriptionDeliveryDestinationRequestInput
} from './types-60.js';
import type {
    SubscriptionDeliveryRequestInput,
    SubscriptionEndAfterCyclesRequestInput,
    SubscriptionEndAfterDateRequestInput,
    SubscriptionEndAfterRequestInput,
    SubscriptionGiftRecipientRequestInput,
    SubscriptionIntervalOptionRequestInput,
    SubscriptionOfferLineItemRequestInput,
    SubscriptionOfferTermsRequestInput
} from './types-61.js';
import type {
    SubscriptionPlanChangeLineItemRequestInput,
    SubscriptionPlanChangeOptionRequestInput,
    SubscriptionPlanLineItemInputBundleInput,
    SubscriptionPlanLineItemInputCustomInput,
    SubscriptionPlanLineItemInputVariantInput,
    SubscriptionPlanLineItemRequestInput,
    SubscriptionPlanTermsRequestInput,
    SubscriptionPromotionRequestInput
} from './types-62.js';
import type {
    SubscriptionQuantityChangeLineItemRequestInput,
    SubscriptionServiceLocationInputAddressInput,
    SubscriptionServiceLocationInputCustomerAddressInput,
    SubscriptionServiceLocationRequestInput,
    SubscriptionSettingsRequestInput,
    SubscriptionTaxCalculationRequestInput,
    SubscriptionTaxRequestInput,
    SubscriptionTermsRequestInput
} from './types-63.js';
import type {
    TaxCalculationCallbackConfigurationPatchRequestInput,
    TaxCalculationCallbackConfigurationRequestInput,
    TaxCalculationRequestModelInput,
    TaxCalculationRequestRequestInput,
    TaxComponentRequestModelInput,
    TaxComponentRequestRequestInput,
    TaxDefaultCalculationRequestInput,
    TaxIdentityPatchInput,
    TaxIdentityRequestInput,
    TaxJurisdictionRequestInput,
    TaxJurisdictionRequestModelInput
} from './types-64.js';
import type {
    TaxSettingsRequestInput,
    TextModifierConfigPatchRequestInput,
    TextModifierConfigRequestInput,
    TextModifierRequestInput
} from './types-65.js';
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
export declare function makeSubscriptionEndAfterCyclesRequest(value: InputValue<SubscriptionEndAfterCyclesRequestInput>): Model<SubscriptionEndAfterCyclesRequestInput>;
export declare function makeSubscriptionEndAfterDateRequest(value: InputValue<SubscriptionEndAfterDateRequestInput>): Model<SubscriptionEndAfterDateRequestInput>;
export declare function makeSubscriptionEndAfterRequest(value: InputValue<Exclude<SubscriptionEndAfterRequestInput & object, readonly unknown[]>>): Model<Exclude<SubscriptionEndAfterRequestInput & object, readonly unknown[]>>;
export declare function makeSubscriptionEndAfterRequest(value: InputValue<SubscriptionEndAfterRequestInput>): Model<SubscriptionEndAfterRequestInput>;
export declare function makeSubscriptionGiftRecipientRequest(value: InputValue<SubscriptionGiftRecipientRequestInput>): Model<SubscriptionGiftRecipientRequestInput>;
export declare function makeSubscriptionIntervalOptionRequest(value: InputValue<SubscriptionIntervalOptionRequestInput>): Model<SubscriptionIntervalOptionRequestInput>;
export declare function makeSubscriptionOfferLineItemRequest(value: InputValue<SubscriptionOfferLineItemRequestInput>): Model<SubscriptionOfferLineItemRequestInput>;
export declare function makeSubscriptionOfferTermsRequest(value: InputValue<SubscriptionOfferTermsRequestInput>): Model<SubscriptionOfferTermsRequestInput>;
export declare function makeSubscriptionPlanChangeLineItemRequest(value: InputValue<SubscriptionPlanChangeLineItemRequestInput>): Model<SubscriptionPlanChangeLineItemRequestInput>;
export declare function makeSubscriptionPlanChangeOptionRequest(value: InputValue<SubscriptionPlanChangeOptionRequestInput>): Model<SubscriptionPlanChangeOptionRequestInput>;
export declare function makeSubscriptionPlanLineItemInputBundle(value: InputValue<SubscriptionPlanLineItemInputBundleInput>): Model<SubscriptionPlanLineItemInputBundleInput>;
export declare function makeSubscriptionPlanLineItemInputCustom(value: InputValue<SubscriptionPlanLineItemInputCustomInput>): Model<SubscriptionPlanLineItemInputCustomInput>;
export declare function makeSubscriptionPlanLineItemInputVariant(value: InputValue<SubscriptionPlanLineItemInputVariantInput>): Model<SubscriptionPlanLineItemInputVariantInput>;
export declare function makeSubscriptionPlanLineItemRequest(value: InputValue<SubscriptionPlanLineItemRequestInput>): Model<SubscriptionPlanLineItemRequestInput>;
export declare function makeSubscriptionPlanTermsRequest(value: InputValue<SubscriptionPlanTermsRequestInput>): Model<SubscriptionPlanTermsRequestInput>;
export declare function makeSubscriptionPromotionRequest(value: InputValue<SubscriptionPromotionRequestInput>): Model<SubscriptionPromotionRequestInput>;
export declare function makeSubscriptionQuantityChangeLineItemRequest(value: InputValue<SubscriptionQuantityChangeLineItemRequestInput>): Model<SubscriptionQuantityChangeLineItemRequestInput>;
export declare function makeSubscriptionServiceLocationInputAddress(value: InputValue<SubscriptionServiceLocationInputAddressInput>): Model<SubscriptionServiceLocationInputAddressInput>;
export declare function makeSubscriptionServiceLocationInputCustomerAddress(value: InputValue<SubscriptionServiceLocationInputCustomerAddressInput>): Model<SubscriptionServiceLocationInputCustomerAddressInput>;
export declare function makeSubscriptionServiceLocationRequest(value: InputValue<Exclude<SubscriptionServiceLocationRequestInput & object, readonly unknown[]>>): Model<Exclude<SubscriptionServiceLocationRequestInput & object, readonly unknown[]>>;
export declare function makeSubscriptionServiceLocationRequest(value: InputValue<SubscriptionServiceLocationRequestInput>): Model<SubscriptionServiceLocationRequestInput>;
export declare function makeSubscriptionSettingsRequest(value: InputValue<SubscriptionSettingsRequestInput>): Model<SubscriptionSettingsRequestInput>;
export declare function makeSubscriptionTaxCalculationRequest(value: InputValue<SubscriptionTaxCalculationRequestInput>): Model<SubscriptionTaxCalculationRequestInput>;
export declare function makeSubscriptionTaxRequest(value: InputValue<SubscriptionTaxRequestInput>): Model<SubscriptionTaxRequestInput>;
export declare function makeSubscriptionTermsRequest(value: InputValue<Exclude<SubscriptionTermsRequestInput & object, readonly unknown[]>>): Model<Exclude<SubscriptionTermsRequestInput & object, readonly unknown[]>>;
export declare function makeSubscriptionTermsRequest(value: InputValue<SubscriptionTermsRequestInput>): Model<SubscriptionTermsRequestInput>;
export declare function makeTaxCalculationCallbackConfigurationPatchRequest(value: InputValue<TaxCalculationCallbackConfigurationPatchRequestInput>): Model<TaxCalculationCallbackConfigurationPatchRequestInput>;
export declare function makeTaxCalculationCallbackConfigurationRequest(value: InputValue<TaxCalculationCallbackConfigurationRequestInput>): Model<TaxCalculationCallbackConfigurationRequestInput>;
export declare function makeTaxCalculationRequestModel(value: InputValue<TaxCalculationRequestModelInput>): Model<TaxCalculationRequestModelInput>;
export declare function makeTaxCalculationRequestRequest(value: InputValue<TaxCalculationRequestRequestInput>): Model<TaxCalculationRequestRequestInput>;
export declare function makeTaxComponentRequestModel(value: InputValue<TaxComponentRequestModelInput>): Model<TaxComponentRequestModelInput>;
export declare function makeTaxComponentRequestRequest(value: InputValue<TaxComponentRequestRequestInput>): Model<TaxComponentRequestRequestInput>;
export declare function makeTaxDefaultCalculationRequest(value: InputValue<TaxDefaultCalculationRequestInput>): Model<TaxDefaultCalculationRequestInput>;
export declare function makeTaxIdentityPatch(value: InputValue<TaxIdentityPatchInput>): Model<TaxIdentityPatchInput>;
export declare function makeTaxIdentityRequest(value: InputValue<TaxIdentityRequestInput>): Model<TaxIdentityRequestInput>;
export declare function makeTaxJurisdictionRequest(value: InputValue<TaxJurisdictionRequestInput>): Model<TaxJurisdictionRequestInput>;
export declare function makeTaxJurisdictionRequestModel(value: InputValue<TaxJurisdictionRequestModelInput>): Model<TaxJurisdictionRequestModelInput>;
export declare function makeTaxSettingsRequest(value: InputValue<TaxSettingsRequestInput>): Model<TaxSettingsRequestInput>;
export declare function makeTextModifierConfigPatchRequest(value: InputValue<TextModifierConfigPatchRequestInput>): Model<TextModifierConfigPatchRequestInput>;
export declare function makeTextModifierConfigRequest(value: InputValue<TextModifierConfigRequestInput>): Model<TextModifierConfigRequestInput>;
export declare function makeTextModifierRequest(value: InputValue<TextModifierRequestInput>): Model<TextModifierRequestInput>;
