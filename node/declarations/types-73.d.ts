import type { InputValue, Model } from '../runtime.js';
import type { SubscriptionBillingScheduleRequestInput, SubscriptionBillingScheduleUpdateInputExternalInput } from './types-53.js';
import type {
    SubscriptionBillingScheduleUpdateInputFlintInput,
    SubscriptionBillingScheduleUpdateRequestInput,
    SubscriptionBillingStartInputImmediateInput,
    SubscriptionBillingStartInputImportedInput,
    SubscriptionBillingStartInputScheduledInput,
    SubscriptionBillingStartRequestInput,
    SubscriptionDeliveryDestinationInputAddressInput,
    SubscriptionDeliveryDestinationInputCustomerAddressInput,
    SubscriptionDeliveryDestinationRequestInput,
    SubscriptionDeliveryRequestInput
} from './types-54.js';
import type {
    SubscriptionIntervalOptionInput,
    SubscriptionOfferLineItemRequestInput,
    SubscriptionOfferTermsRequestInput,
    SubscriptionPlanChangeLineItemRequestInput,
    SubscriptionPlanLineItemInputBundleInput,
    SubscriptionPlanLineItemInputCustomInput,
    SubscriptionPlanLineItemInputVariantInput,
    SubscriptionPlanLineItemRequestInput,
    SubscriptionPlanTermsRequestInput
} from './types-55.js';
import type {
    SubscriptionServiceLocationInputAddressInput,
    SubscriptionServiceLocationInputCustomerAddressInput,
    SubscriptionServiceLocationRequestInput,
    SubscriptionSettingsRequestInput,
    SubscriptionTermsRequestInput
} from './types-56.js';
import type {
    TaxCalculationRequestInput,
    TaxCalculationRequestModelInput,
    TaxComponentRequestInput,
    TaxComponentRequestModelInput,
    TaxIdentityPatchInput,
    TaxIdentityRequestInput,
    TaxJurisdictionInput,
    TaxJurisdictionRequestInput,
    TaxSettingsRequestInput,
    TextModifierConfigPatchRequestInput,
    TextModifierConfigRequestInput,
    TextModifierRequestInput,
    ThemeConfigRequestInput,
    TippingSettingsPatchInput
} from './types-57.js';
import type {
    TransitionGiftCardRequestInput,
    TransitionGiftCardRequestFreezeInput,
    TransitionGiftCardRequestWithoutReasonInput,
    UpdateAPIKeyRequestInput,
    UpdateBundleComponentRequestInput,
    UpdateBundleRequestInput,
    UpdateCategoryRequestInput,
    UpdateCheckoutSessionRequestInput,
    UpdateCreditNoteRequestInput,
    UpdateCustomerAddressRequestInput,
    UpdateCustomerEmailPreferencesRequestInput,
    UpdateCustomerRequestInput,
    UpdateDeliveryFulfillmentDetailsInput,
    UpdateDeliveryLocationSetRequestInput,
    UpdateDeliveryMethodRequestInput,
    UpdateDeliveryProfileRequestInput,
    UpdateDeliveryRateCallbackRequestInput,
    UpdateDeliveryZoneRequestInput,
    UpdateDeviceRequestInput,
    UpdateDigitalFulfillmentDetailsInput,
    UpdateFulfillmentRequestInput,
    UpdateGiftCardRequestInput,
    UpdateInventoryAllocationPolicyRequestInput,
    UpdateInventoryCountRequestInput
} from './types-58.js';
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
export declare function makeSubscriptionIntervalOption(value: InputValue<SubscriptionIntervalOptionInput>): Model<SubscriptionIntervalOptionInput>;
export declare function makeSubscriptionOfferLineItemRequest(value: InputValue<SubscriptionOfferLineItemRequestInput>): Model<SubscriptionOfferLineItemRequestInput>;
export declare function makeSubscriptionOfferTermsRequest(value: InputValue<SubscriptionOfferTermsRequestInput>): Model<SubscriptionOfferTermsRequestInput>;
export declare function makeSubscriptionPlanChangeLineItemRequest(value: InputValue<SubscriptionPlanChangeLineItemRequestInput>): Model<SubscriptionPlanChangeLineItemRequestInput>;
export declare function makeSubscriptionPlanLineItemInputBundle(value: InputValue<SubscriptionPlanLineItemInputBundleInput>): Model<SubscriptionPlanLineItemInputBundleInput>;
export declare function makeSubscriptionPlanLineItemInputCustom(value: InputValue<SubscriptionPlanLineItemInputCustomInput>): Model<SubscriptionPlanLineItemInputCustomInput>;
export declare function makeSubscriptionPlanLineItemInputVariant(value: InputValue<SubscriptionPlanLineItemInputVariantInput>): Model<SubscriptionPlanLineItemInputVariantInput>;
export declare function makeSubscriptionPlanLineItemRequest(value: InputValue<SubscriptionPlanLineItemRequestInput>): Model<SubscriptionPlanLineItemRequestInput>;
export declare function makeSubscriptionPlanTermsRequest(value: InputValue<SubscriptionPlanTermsRequestInput>): Model<SubscriptionPlanTermsRequestInput>;
export declare function makeSubscriptionServiceLocationInputAddress(value: InputValue<SubscriptionServiceLocationInputAddressInput>): Model<SubscriptionServiceLocationInputAddressInput>;
export declare function makeSubscriptionServiceLocationInputCustomerAddress(value: InputValue<SubscriptionServiceLocationInputCustomerAddressInput>): Model<SubscriptionServiceLocationInputCustomerAddressInput>;
export declare function makeSubscriptionServiceLocationRequest(value: InputValue<Exclude<SubscriptionServiceLocationRequestInput & object, readonly unknown[]>>): Model<Exclude<SubscriptionServiceLocationRequestInput & object, readonly unknown[]>>;
export declare function makeSubscriptionServiceLocationRequest(value: InputValue<SubscriptionServiceLocationRequestInput>): Model<SubscriptionServiceLocationRequestInput>;
export declare function makeSubscriptionSettingsRequest(value: InputValue<SubscriptionSettingsRequestInput>): Model<SubscriptionSettingsRequestInput>;
export declare function makeSubscriptionTermsRequest(value: InputValue<Exclude<SubscriptionTermsRequestInput & object, readonly unknown[]>>): Model<Exclude<SubscriptionTermsRequestInput & object, readonly unknown[]>>;
export declare function makeSubscriptionTermsRequest(value: InputValue<SubscriptionTermsRequestInput>): Model<SubscriptionTermsRequestInput>;
export declare function makeTaxCalculationRequest(value: InputValue<TaxCalculationRequestInput>): Model<TaxCalculationRequestInput>;
export declare function makeTaxCalculationRequestModel(value: InputValue<TaxCalculationRequestModelInput>): Model<TaxCalculationRequestModelInput>;
export declare function makeTaxComponentRequest(value: InputValue<TaxComponentRequestInput>): Model<TaxComponentRequestInput>;
export declare function makeTaxComponentRequestModel(value: InputValue<TaxComponentRequestModelInput>): Model<TaxComponentRequestModelInput>;
export declare function makeTaxIdentityPatch(value: InputValue<TaxIdentityPatchInput>): Model<TaxIdentityPatchInput>;
export declare function makeTaxIdentityRequest(value: InputValue<TaxIdentityRequestInput>): Model<TaxIdentityRequestInput>;
export declare function makeTaxJurisdiction(value: InputValue<TaxJurisdictionInput>): Model<TaxJurisdictionInput>;
export declare function makeTaxJurisdictionRequest(value: InputValue<TaxJurisdictionRequestInput>): Model<TaxJurisdictionRequestInput>;
export declare function makeTaxSettingsRequest(value: InputValue<TaxSettingsRequestInput>): Model<TaxSettingsRequestInput>;
export declare function makeTextModifierConfigPatchRequest(value: InputValue<TextModifierConfigPatchRequestInput>): Model<TextModifierConfigPatchRequestInput>;
export declare function makeTextModifierConfigRequest(value: InputValue<TextModifierConfigRequestInput>): Model<TextModifierConfigRequestInput>;
export declare function makeTextModifierRequest(value: InputValue<TextModifierRequestInput>): Model<TextModifierRequestInput>;
export declare function makeThemeConfigRequest(value: InputValue<ThemeConfigRequestInput>): Model<ThemeConfigRequestInput>;
export declare function makeTippingSettingsPatch(value: InputValue<TippingSettingsPatchInput>): Model<TippingSettingsPatchInput>;
export declare function makeTransitionGiftCardRequest(value: InputValue<TransitionGiftCardRequestInput>): Model<TransitionGiftCardRequestInput>;
export declare function makeTransitionGiftCardRequestFreeze(value: InputValue<TransitionGiftCardRequestFreezeInput>): Model<TransitionGiftCardRequestFreezeInput>;
export declare function makeTransitionGiftCardRequestWithoutReason(value: InputValue<TransitionGiftCardRequestWithoutReasonInput>): Model<TransitionGiftCardRequestWithoutReasonInput>;
export declare function makeUpdateAPIKeyRequest(value: InputValue<UpdateAPIKeyRequestInput>): Model<UpdateAPIKeyRequestInput>;
export declare function makeUpdateBundleComponentRequest(value: InputValue<UpdateBundleComponentRequestInput>): Model<UpdateBundleComponentRequestInput>;
export declare function makeUpdateBundleRequest(value: InputValue<UpdateBundleRequestInput>): Model<UpdateBundleRequestInput>;
export declare function makeUpdateCategoryRequest(value: InputValue<UpdateCategoryRequestInput>): Model<UpdateCategoryRequestInput>;
export declare function makeUpdateCheckoutSessionRequest(value: InputValue<UpdateCheckoutSessionRequestInput>): Model<UpdateCheckoutSessionRequestInput>;
export declare function makeUpdateCreditNoteRequest(value: InputValue<UpdateCreditNoteRequestInput>): Model<UpdateCreditNoteRequestInput>;
export declare function makeUpdateCustomerAddressRequest(value: InputValue<UpdateCustomerAddressRequestInput>): Model<UpdateCustomerAddressRequestInput>;
export declare function makeUpdateCustomerEmailPreferencesRequest(value: InputValue<UpdateCustomerEmailPreferencesRequestInput>): Model<UpdateCustomerEmailPreferencesRequestInput>;
export declare function makeUpdateCustomerRequest(value: InputValue<UpdateCustomerRequestInput>): Model<UpdateCustomerRequestInput>;
export declare function makeUpdateDeliveryFulfillmentDetails(value: InputValue<UpdateDeliveryFulfillmentDetailsInput>): Model<UpdateDeliveryFulfillmentDetailsInput>;
export declare function makeUpdateDeliveryLocationSetRequest(value: InputValue<UpdateDeliveryLocationSetRequestInput>): Model<UpdateDeliveryLocationSetRequestInput>;
export declare function makeUpdateDeliveryMethodRequest(value: InputValue<UpdateDeliveryMethodRequestInput>): Model<UpdateDeliveryMethodRequestInput>;
export declare function makeUpdateDeliveryProfileRequest(value: InputValue<UpdateDeliveryProfileRequestInput>): Model<UpdateDeliveryProfileRequestInput>;
export declare function makeUpdateDeliveryRateCallbackRequest(value: InputValue<UpdateDeliveryRateCallbackRequestInput>): Model<UpdateDeliveryRateCallbackRequestInput>;
export declare function makeUpdateDeliveryZoneRequest(value: InputValue<UpdateDeliveryZoneRequestInput>): Model<UpdateDeliveryZoneRequestInput>;
export declare function makeUpdateDeviceRequest(value: InputValue<UpdateDeviceRequestInput>): Model<UpdateDeviceRequestInput>;
export declare function makeUpdateDigitalFulfillmentDetails(value: InputValue<UpdateDigitalFulfillmentDetailsInput>): Model<UpdateDigitalFulfillmentDetailsInput>;
export declare function makeUpdateFulfillmentRequest(value: InputValue<UpdateFulfillmentRequestInput>): Model<UpdateFulfillmentRequestInput>;
export declare function makeUpdateGiftCardRequest(value: InputValue<UpdateGiftCardRequestInput>): Model<UpdateGiftCardRequestInput>;
export declare function makeUpdateInventoryAllocationPolicyRequest(value: InputValue<UpdateInventoryAllocationPolicyRequestInput>): Model<UpdateInventoryAllocationPolicyRequestInput>;
export declare function makeUpdateInventoryCountRequest(value: InputValue<UpdateInventoryCountRequestInput>): Model<UpdateInventoryCountRequestInput>;
