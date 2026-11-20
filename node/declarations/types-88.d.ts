import type { InputValue, Model } from '../runtime.js';
import type { InvoicePaymentDueRequestInput, InvoicePaymentOptionLimitRequestInput } from './types-36.js';
import type {
    InvoicePaymentPolicyRequestInput,
    InvoicePaymentTermCalculationDayOfMonthRequestInput,
    InvoicePaymentTermCalculationDayOfNextMonthRequestInput,
    InvoicePaymentTermCalculationDaysAfterMonthEndRequestInput,
    InvoicePaymentTermCalculationNetDaysRequestInput,
    InvoicePaymentTermCalculationOnReceiptRequestInput,
    InvoicePaymentTermCalculationRequestInput,
    InvoiceReminderPolicyInput,
    InvoiceReminderRuleInput,
    InvoiceScheduleAmountSpecificationFixedRequestInput,
    InvoiceScheduleAmountSpecificationPercentageRequestInput,
    InvoiceScheduleAmountSpecificationRemainingBalanceRequestInput,
    InvoiceScheduleAmountSpecificationRequestInput
} from './types-37.js';
import type {
    InvoiceScheduleDueWriteInput,
    InvoiceScheduleDueWriteAtIssueInput,
    InvoiceScheduleDueWriteDateInput,
    InvoiceScheduleDueWriteInvoiceDueDateInput,
    InvoiceScheduleEntryWriteInput,
    InvoiceScheduleEntryWriteBalanceInput,
    InvoiceScheduleEntryWriteDepositInput,
    InvoiceScheduleEntryWriteInstallmentInput,
    InvoiceSettingsPatchInput,
    IssueCreditNoteRequestInput,
    IssueInvoiceRequestInput
} from './types-38.js';
import type { LegalSettingsRequestInput, LicenseKeyConfigurationRequestInput } from './types-39.js';
import type {
    LicenseKeyVersionRequestInput,
    LineItemFulfillmentOriginRequestModelInput,
    LineItemFulfillmentRequestModelInput,
    LinkCustomerGuestPurchasesRequestInput,
    LocationCoordinateRequestInput,
    LookupEmailPreferencesRequestInput,
    LookupGiftCardRequestInput,
    LookupLicenseKeyRequestInput,
    LookupTicketRequestInput,
    ManualDiscountRequestInput
} from './types-40.js';
import type {
    MarkFulfillmentNoShowRequestInput,
    MarkFulfillmentPackedRequestInput,
    MarkFulfillmentPickedRequestInput,
    MarkFulfillmentPreparingRequestInput,
    MarkFulfillmentReadyRequestInput,
    MarkPackageDeliveredRequestInput,
    MarkPackageDeliveryAttemptedRequestInput,
    MarkPackageExceptionRequestInput,
    MarkPackageInTransitRequestInput,
    MarkPackageOutForDeliveryRequestInput,
    MarkPackagePackedRequestInput,
    MarkPackageReturnedRequestInput,
    MarkPackageShippedRequestInput
} from './types-41.js';
import type { MerchantAccountSessionCreateRequestInput, MerchantAccountSessionRefreshRequestInput } from './types-42.js';
import type {
    MerchantSignupOwnerRequestInput,
    MerchantSignupTermsAcceptanceRequestInput,
    MerchantSignupVersionRequestInput,
    MetadataMapInput,
    MetadataPatchRequestInput,
    MetadataRequestInput,
    ModifierOverrideRequestInput,
    ModifierRequestInput
} from './types-43.js';
import type {
    ModifierSetGroupInputExistingInput,
    ModifierSetGroupInputInlineInput,
    ModifierSetGroupRequestInput
} from './types-44.js';
export declare function makeInvoicePaymentDueRequest(value: InputValue<InvoicePaymentDueRequestInput>): Model<InvoicePaymentDueRequestInput>;
export declare function makeInvoicePaymentOptionLimitRequest(value: InputValue<InvoicePaymentOptionLimitRequestInput>): Model<InvoicePaymentOptionLimitRequestInput>;
export declare function makeInvoicePaymentPolicyRequest(value: InputValue<InvoicePaymentPolicyRequestInput>): Model<InvoicePaymentPolicyRequestInput>;
export declare function makeInvoicePaymentTermCalculationDayOfMonthRequest(value: InputValue<InvoicePaymentTermCalculationDayOfMonthRequestInput>): Model<InvoicePaymentTermCalculationDayOfMonthRequestInput>;
export declare function makeInvoicePaymentTermCalculationDayOfNextMonthRequest(value: InputValue<InvoicePaymentTermCalculationDayOfNextMonthRequestInput>): Model<InvoicePaymentTermCalculationDayOfNextMonthRequestInput>;
export declare function makeInvoicePaymentTermCalculationDaysAfterMonthEndRequest(value: InputValue<InvoicePaymentTermCalculationDaysAfterMonthEndRequestInput>): Model<InvoicePaymentTermCalculationDaysAfterMonthEndRequestInput>;
export declare function makeInvoicePaymentTermCalculationNetDaysRequest(value: InputValue<InvoicePaymentTermCalculationNetDaysRequestInput>): Model<InvoicePaymentTermCalculationNetDaysRequestInput>;
export declare function makeInvoicePaymentTermCalculationOnReceiptRequest(value: InputValue<InvoicePaymentTermCalculationOnReceiptRequestInput>): Model<InvoicePaymentTermCalculationOnReceiptRequestInput>;
export declare function makeInvoicePaymentTermCalculationRequest(value: InputValue<InvoicePaymentTermCalculationRequestInput>): Model<InvoicePaymentTermCalculationRequestInput>;
export declare function makeInvoiceReminderPolicy(value: InputValue<InvoiceReminderPolicyInput>): Model<InvoiceReminderPolicyInput>;
export declare function makeInvoiceReminderRule(value: InputValue<InvoiceReminderRuleInput>): Model<InvoiceReminderRuleInput>;
export declare function makeInvoiceScheduleAmountSpecificationFixedRequest(value: InputValue<InvoiceScheduleAmountSpecificationFixedRequestInput>): Model<InvoiceScheduleAmountSpecificationFixedRequestInput>;
export declare function makeInvoiceScheduleAmountSpecificationPercentageRequest(value: InputValue<InvoiceScheduleAmountSpecificationPercentageRequestInput>): Model<InvoiceScheduleAmountSpecificationPercentageRequestInput>;
export declare function makeInvoiceScheduleAmountSpecificationRemainingBalanceRequest(value: InputValue<InvoiceScheduleAmountSpecificationRemainingBalanceRequestInput>): Model<InvoiceScheduleAmountSpecificationRemainingBalanceRequestInput>;
export declare function makeInvoiceScheduleAmountSpecificationRequest(value: InputValue<InvoiceScheduleAmountSpecificationRequestInput>): Model<InvoiceScheduleAmountSpecificationRequestInput>;
export declare function makeInvoiceScheduleDueWrite(value: InputValue<InvoiceScheduleDueWriteInput>): Model<InvoiceScheduleDueWriteInput>;
export declare function makeInvoiceScheduleDueWriteAtIssue(value: InputValue<InvoiceScheduleDueWriteAtIssueInput>): Model<InvoiceScheduleDueWriteAtIssueInput>;
export declare function makeInvoiceScheduleDueWriteDate(value: InputValue<InvoiceScheduleDueWriteDateInput>): Model<InvoiceScheduleDueWriteDateInput>;
export declare function makeInvoiceScheduleDueWriteInvoiceDueDate(value: InputValue<InvoiceScheduleDueWriteInvoiceDueDateInput>): Model<InvoiceScheduleDueWriteInvoiceDueDateInput>;
export declare function makeInvoiceScheduleEntryWrite(value: InputValue<InvoiceScheduleEntryWriteInput>): Model<InvoiceScheduleEntryWriteInput>;
export declare function makeInvoiceScheduleEntryWriteBalance(value: InputValue<InvoiceScheduleEntryWriteBalanceInput>): Model<InvoiceScheduleEntryWriteBalanceInput>;
export declare function makeInvoiceScheduleEntryWriteDeposit(value: InputValue<InvoiceScheduleEntryWriteDepositInput>): Model<InvoiceScheduleEntryWriteDepositInput>;
export declare function makeInvoiceScheduleEntryWriteInstallment(value: InputValue<InvoiceScheduleEntryWriteInstallmentInput>): Model<InvoiceScheduleEntryWriteInstallmentInput>;
export declare function makeInvoiceSettingsPatch(value: InputValue<InvoiceSettingsPatchInput>): Model<InvoiceSettingsPatchInput>;
export declare function makeIssueCreditNoteRequest(value: InputValue<IssueCreditNoteRequestInput>): Model<IssueCreditNoteRequestInput>;
export declare function makeIssueInvoiceRequest(value: InputValue<IssueInvoiceRequestInput>): Model<IssueInvoiceRequestInput>;
export declare function makeLegalSettingsRequest(value: InputValue<LegalSettingsRequestInput>): Model<LegalSettingsRequestInput>;
export declare function makeLicenseKeyConfigurationRequest(value: InputValue<LicenseKeyConfigurationRequestInput>): Model<LicenseKeyConfigurationRequestInput>;
export declare function makeLicenseKeyVersionRequest(value: InputValue<LicenseKeyVersionRequestInput>): Model<LicenseKeyVersionRequestInput>;
export declare function makeLineItemFulfillmentOriginRequestModel(value: InputValue<LineItemFulfillmentOriginRequestModelInput>): Model<LineItemFulfillmentOriginRequestModelInput>;
export declare function makeLineItemFulfillmentRequestModel(value: InputValue<LineItemFulfillmentRequestModelInput>): Model<LineItemFulfillmentRequestModelInput>;
export declare function makeLinkCustomerGuestPurchasesRequest(value: InputValue<LinkCustomerGuestPurchasesRequestInput>): Model<LinkCustomerGuestPurchasesRequestInput>;
export declare function makeLocationCoordinateRequest(value: InputValue<LocationCoordinateRequestInput>): Model<LocationCoordinateRequestInput>;
export declare function makeLookupEmailPreferencesRequest(value: InputValue<LookupEmailPreferencesRequestInput>): Model<LookupEmailPreferencesRequestInput>;
export declare function makeLookupGiftCardRequest(value: InputValue<LookupGiftCardRequestInput>): Model<LookupGiftCardRequestInput>;
export declare function makeLookupLicenseKeyRequest(value: InputValue<LookupLicenseKeyRequestInput>): Model<LookupLicenseKeyRequestInput>;
export declare function makeLookupTicketRequest(value: InputValue<LookupTicketRequestInput>): Model<LookupTicketRequestInput>;
export declare function makeManualDiscountRequest(value: InputValue<ManualDiscountRequestInput>): Model<ManualDiscountRequestInput>;
export declare function makeMarkFulfillmentNoShowRequest(value: InputValue<MarkFulfillmentNoShowRequestInput>): Model<MarkFulfillmentNoShowRequestInput>;
export declare function makeMarkFulfillmentPackedRequest(value: InputValue<MarkFulfillmentPackedRequestInput>): Model<MarkFulfillmentPackedRequestInput>;
export declare function makeMarkFulfillmentPickedRequest(value: InputValue<MarkFulfillmentPickedRequestInput>): Model<MarkFulfillmentPickedRequestInput>;
export declare function makeMarkFulfillmentPreparingRequest(value: InputValue<MarkFulfillmentPreparingRequestInput>): Model<MarkFulfillmentPreparingRequestInput>;
export declare function makeMarkFulfillmentReadyRequest(value: InputValue<MarkFulfillmentReadyRequestInput>): Model<MarkFulfillmentReadyRequestInput>;
export declare function makeMarkPackageDeliveredRequest(value: InputValue<MarkPackageDeliveredRequestInput>): Model<MarkPackageDeliveredRequestInput>;
export declare function makeMarkPackageDeliveryAttemptedRequest(value: InputValue<MarkPackageDeliveryAttemptedRequestInput>): Model<MarkPackageDeliveryAttemptedRequestInput>;
export declare function makeMarkPackageExceptionRequest(value: InputValue<MarkPackageExceptionRequestInput>): Model<MarkPackageExceptionRequestInput>;
export declare function makeMarkPackageInTransitRequest(value: InputValue<MarkPackageInTransitRequestInput>): Model<MarkPackageInTransitRequestInput>;
export declare function makeMarkPackageOutForDeliveryRequest(value: InputValue<MarkPackageOutForDeliveryRequestInput>): Model<MarkPackageOutForDeliveryRequestInput>;
export declare function makeMarkPackagePackedRequest(value: InputValue<MarkPackagePackedRequestInput>): Model<MarkPackagePackedRequestInput>;
export declare function makeMarkPackageReturnedRequest(value: InputValue<MarkPackageReturnedRequestInput>): Model<MarkPackageReturnedRequestInput>;
export declare function makeMarkPackageShippedRequest(value: InputValue<MarkPackageShippedRequestInput>): Model<MarkPackageShippedRequestInput>;
export declare function makeMerchantAccountSessionCreateRequest(value: InputValue<MerchantAccountSessionCreateRequestInput>): Model<MerchantAccountSessionCreateRequestInput>;
export declare function makeMerchantAccountSessionRefreshRequest(value: InputValue<MerchantAccountSessionRefreshRequestInput>): Model<MerchantAccountSessionRefreshRequestInput>;
export declare function makeMerchantSignupOwnerRequest(value: InputValue<MerchantSignupOwnerRequestInput>): Model<MerchantSignupOwnerRequestInput>;
export declare function makeMerchantSignupTermsAcceptanceRequest(value: InputValue<MerchantSignupTermsAcceptanceRequestInput>): Model<MerchantSignupTermsAcceptanceRequestInput>;
export declare function makeMerchantSignupVersionRequest(value: InputValue<MerchantSignupVersionRequestInput>): Model<MerchantSignupVersionRequestInput>;
export declare function makeMetadataMap(value: InputValue<MetadataMapInput>): Model<MetadataMapInput>;
export declare function makeMetadataPatchRequest(value: InputValue<MetadataPatchRequestInput>): Model<MetadataPatchRequestInput>;
export declare function makeMetadataRequest(value: InputValue<MetadataRequestInput>): Model<MetadataRequestInput>;
export declare function makeModifierOverrideRequest(value: InputValue<ModifierOverrideRequestInput>): Model<ModifierOverrideRequestInput>;
export declare function makeModifierRequest(value: InputValue<ModifierRequestInput>): Model<ModifierRequestInput>;
export declare function makeModifierSetGroupInputExisting(value: InputValue<ModifierSetGroupInputExistingInput>): Model<ModifierSetGroupInputExistingInput>;
export declare function makeModifierSetGroupInputInline(value: InputValue<ModifierSetGroupInputInlineInput>): Model<ModifierSetGroupInputInlineInput>;
export declare function makeModifierSetGroupRequest(value: InputValue<ModifierSetGroupRequestInput>): Model<ModifierSetGroupRequestInput>;
