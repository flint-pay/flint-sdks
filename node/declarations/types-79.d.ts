import type { InputValue, Model } from '../runtime.js';
import type {
    SubscriptionPromotionRequestInput,
    SubscriptionQuantityChangeLineItemRequestInput,
    SubscriptionServiceLocationInputAddressInput,
    SubscriptionServiceLocationInputCustomerAddressInput,
    SubscriptionServiceLocationRequestInput,
    SubscriptionSettingsRequestInput,
    SubscriptionTermsRequestInput
} from './types-60.js';
import type {
    TaxCalculationCallbackConfigurationPatchRequestInput,
    TaxCalculationCallbackConfigurationRequestInput,
    TaxCalculationRequestModelInput,
    TaxCalculationRequestRequestInput,
    TaxComponentRequestModelInput,
    TaxComponentRequestRequestInput,
    TaxIdentityPatchInput,
    TaxIdentityRequestInput,
    TaxJurisdictionRequestInput,
    TaxJurisdictionRequestModelInput
} from './types-61.js';
import type {
    TaxSettingsRequestInput,
    TextModifierConfigPatchRequestInput,
    TextModifierConfigRequestInput,
    TextModifierRequestInput,
    ThemeConfigRequestInput,
    TicketVersionRequestInput,
    TippingSettingsPatchInput,
    UnfreezeGiftCardRequestInput,
    UpdateAPIKeyRequestInput
} from './types-62.js';
import type {
    UpdateBundleComponentRequestInput,
    UpdateBundleRequestInput,
    UpdateCategoryRequestInput,
    UpdateCheckoutSessionRequestInput,
    UpdateCreditNoteRequestInput,
    UpdateCustomerAddressRequestInput,
    UpdateCustomerEmailPreferencesRequestInput,
    UpdateCustomerRequestInput,
    UpdateCustomerTaxExemptionRequestInput,
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
    UpdateInventoryCountRequestInput,
    UpdateInventoryItemRequestInput,
    UpdateInventoryLevelRequestInput,
    UpdateInventoryReservationRequestInput,
    UpdateInventoryTransferRequestInput,
    UpdateInvoicePaymentTermRequestInput,
    UpdateInvoiceRequestInput,
    UpdateLineItemRequestInput,
    UpdateLocationRequestInput,
    UpdateMeRequestInput,
    UpdateMeSubscriptionLineItemRequestInput,
    UpdateMeSubscriptionRequestInput
} from './types-63.js';
import type {
    UpdateMerchantRequestInput,
    UpdateModifierGroupRequestInput,
    UpdateModifierSetRequestInput,
    UpdateOrderChargeRequestInput,
    UpdateOrderRequestInput,
    UpdatePackageItemRequestInput
} from './types-64.js';
export declare function makeSubscriptionPromotionRequest(value: InputValue<SubscriptionPromotionRequestInput>): Model<SubscriptionPromotionRequestInput>;
export declare function makeSubscriptionQuantityChangeLineItemRequest(value: InputValue<SubscriptionQuantityChangeLineItemRequestInput>): Model<SubscriptionQuantityChangeLineItemRequestInput>;
export declare function makeSubscriptionServiceLocationInputAddress(value: InputValue<SubscriptionServiceLocationInputAddressInput>): Model<SubscriptionServiceLocationInputAddressInput>;
export declare function makeSubscriptionServiceLocationInputCustomerAddress(value: InputValue<SubscriptionServiceLocationInputCustomerAddressInput>): Model<SubscriptionServiceLocationInputCustomerAddressInput>;
export declare function makeSubscriptionServiceLocationRequest(value: InputValue<Exclude<SubscriptionServiceLocationRequestInput & object, readonly unknown[]>>): Model<Exclude<SubscriptionServiceLocationRequestInput & object, readonly unknown[]>>;
export declare function makeSubscriptionServiceLocationRequest(value: InputValue<SubscriptionServiceLocationRequestInput>): Model<SubscriptionServiceLocationRequestInput>;
export declare function makeSubscriptionSettingsRequest(value: InputValue<SubscriptionSettingsRequestInput>): Model<SubscriptionSettingsRequestInput>;
export declare function makeSubscriptionTermsRequest(value: InputValue<Exclude<SubscriptionTermsRequestInput & object, readonly unknown[]>>): Model<Exclude<SubscriptionTermsRequestInput & object, readonly unknown[]>>;
export declare function makeSubscriptionTermsRequest(value: InputValue<SubscriptionTermsRequestInput>): Model<SubscriptionTermsRequestInput>;
export declare function makeTaxCalculationCallbackConfigurationPatchRequest(value: InputValue<TaxCalculationCallbackConfigurationPatchRequestInput>): Model<TaxCalculationCallbackConfigurationPatchRequestInput>;
export declare function makeTaxCalculationCallbackConfigurationRequest(value: InputValue<TaxCalculationCallbackConfigurationRequestInput>): Model<TaxCalculationCallbackConfigurationRequestInput>;
export declare function makeTaxCalculationRequestModel(value: InputValue<TaxCalculationRequestModelInput>): Model<TaxCalculationRequestModelInput>;
export declare function makeTaxCalculationRequestRequest(value: InputValue<TaxCalculationRequestRequestInput>): Model<TaxCalculationRequestRequestInput>;
export declare function makeTaxComponentRequestModel(value: InputValue<TaxComponentRequestModelInput>): Model<TaxComponentRequestModelInput>;
export declare function makeTaxComponentRequestRequest(value: InputValue<TaxComponentRequestRequestInput>): Model<TaxComponentRequestRequestInput>;
export declare function makeTaxIdentityPatch(value: InputValue<TaxIdentityPatchInput>): Model<TaxIdentityPatchInput>;
export declare function makeTaxIdentityRequest(value: InputValue<TaxIdentityRequestInput>): Model<TaxIdentityRequestInput>;
export declare function makeTaxJurisdictionRequest(value: InputValue<TaxJurisdictionRequestInput>): Model<TaxJurisdictionRequestInput>;
export declare function makeTaxJurisdictionRequestModel(value: InputValue<TaxJurisdictionRequestModelInput>): Model<TaxJurisdictionRequestModelInput>;
export declare function makeTaxSettingsRequest(value: InputValue<TaxSettingsRequestInput>): Model<TaxSettingsRequestInput>;
export declare function makeTextModifierConfigPatchRequest(value: InputValue<TextModifierConfigPatchRequestInput>): Model<TextModifierConfigPatchRequestInput>;
export declare function makeTextModifierConfigRequest(value: InputValue<TextModifierConfigRequestInput>): Model<TextModifierConfigRequestInput>;
export declare function makeTextModifierRequest(value: InputValue<TextModifierRequestInput>): Model<TextModifierRequestInput>;
export declare function makeThemeConfigRequest(value: InputValue<ThemeConfigRequestInput>): Model<ThemeConfigRequestInput>;
export declare function makeTicketVersionRequest(value: InputValue<TicketVersionRequestInput>): Model<TicketVersionRequestInput>;
export declare function makeTippingSettingsPatch(value: InputValue<TippingSettingsPatchInput>): Model<TippingSettingsPatchInput>;
export declare function makeUnfreezeGiftCardRequest(value: InputValue<UnfreezeGiftCardRequestInput>): Model<UnfreezeGiftCardRequestInput>;
export declare function makeUpdateAPIKeyRequest(value: InputValue<UpdateAPIKeyRequestInput>): Model<UpdateAPIKeyRequestInput>;
export declare function makeUpdateBundleComponentRequest(value: InputValue<UpdateBundleComponentRequestInput>): Model<UpdateBundleComponentRequestInput>;
export declare function makeUpdateBundleRequest(value: InputValue<UpdateBundleRequestInput>): Model<UpdateBundleRequestInput>;
export declare function makeUpdateCategoryRequest(value: InputValue<UpdateCategoryRequestInput>): Model<UpdateCategoryRequestInput>;
export declare function makeUpdateCheckoutSessionRequest(value: InputValue<UpdateCheckoutSessionRequestInput>): Model<UpdateCheckoutSessionRequestInput>;
export declare function makeUpdateCreditNoteRequest(value: InputValue<UpdateCreditNoteRequestInput>): Model<UpdateCreditNoteRequestInput>;
export declare function makeUpdateCustomerAddressRequest(value: InputValue<UpdateCustomerAddressRequestInput>): Model<UpdateCustomerAddressRequestInput>;
export declare function makeUpdateCustomerEmailPreferencesRequest(value: InputValue<UpdateCustomerEmailPreferencesRequestInput>): Model<UpdateCustomerEmailPreferencesRequestInput>;
export declare function makeUpdateCustomerRequest(value: InputValue<UpdateCustomerRequestInput>): Model<UpdateCustomerRequestInput>;
export declare function makeUpdateCustomerTaxExemptionRequest(value: InputValue<UpdateCustomerTaxExemptionRequestInput>): Model<UpdateCustomerTaxExemptionRequestInput>;
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
export declare function makeUpdateInventoryItemRequest(value: InputValue<UpdateInventoryItemRequestInput>): Model<UpdateInventoryItemRequestInput>;
export declare function makeUpdateInventoryLevelRequest(value: InputValue<UpdateInventoryLevelRequestInput>): Model<UpdateInventoryLevelRequestInput>;
export declare function makeUpdateInventoryReservationRequest(value: InputValue<UpdateInventoryReservationRequestInput>): Model<UpdateInventoryReservationRequestInput>;
export declare function makeUpdateInventoryTransferRequest(value: InputValue<UpdateInventoryTransferRequestInput>): Model<UpdateInventoryTransferRequestInput>;
export declare function makeUpdateInvoicePaymentTermRequest(value: InputValue<UpdateInvoicePaymentTermRequestInput>): Model<UpdateInvoicePaymentTermRequestInput>;
export declare function makeUpdateInvoiceRequest(value: InputValue<UpdateInvoiceRequestInput>): Model<UpdateInvoiceRequestInput>;
export declare function makeUpdateLineItemRequest(value: InputValue<UpdateLineItemRequestInput>): Model<UpdateLineItemRequestInput>;
export declare function makeUpdateLocationRequest(value: InputValue<UpdateLocationRequestInput>): Model<UpdateLocationRequestInput>;
export declare function makeUpdateMeRequest(value: InputValue<UpdateMeRequestInput>): Model<UpdateMeRequestInput>;
export declare function makeUpdateMeSubscriptionLineItemRequest(value: InputValue<UpdateMeSubscriptionLineItemRequestInput>): Model<UpdateMeSubscriptionLineItemRequestInput>;
export declare function makeUpdateMeSubscriptionRequest(value: InputValue<UpdateMeSubscriptionRequestInput>): Model<UpdateMeSubscriptionRequestInput>;
export declare function makeUpdateMerchantRequest(value: InputValue<UpdateMerchantRequestInput>): Model<UpdateMerchantRequestInput>;
export declare function makeUpdateModifierGroupRequest(value: InputValue<UpdateModifierGroupRequestInput>): Model<UpdateModifierGroupRequestInput>;
export declare function makeUpdateModifierSetRequest(value: InputValue<UpdateModifierSetRequestInput>): Model<UpdateModifierSetRequestInput>;
export declare function makeUpdateOrderChargeRequest(value: InputValue<UpdateOrderChargeRequestInput>): Model<UpdateOrderChargeRequestInput>;
export declare function makeUpdateOrderRequest(value: InputValue<UpdateOrderRequestInput>): Model<UpdateOrderRequestInput>;
export declare function makeUpdatePackageItemRequest(value: InputValue<UpdatePackageItemRequestInput>): Model<UpdatePackageItemRequestInput>;
