import type { InputValue, Model } from '../runtime.js';
import type {
    InventoryAllocationPolicyLocationInput,
    InventoryBackorderPolicyRequestInput,
    InventoryCountObservationRequestInput
} from './types-28.js';
import type {
    InventoryItemCreateRequestInput,
    InventoryOriginPolicyRequestInput,
    InventoryProvenanceRequestInput,
    InventoryReceiptLineRequestInput
} from './types-29.js';
import type {
    InventoryReservationOwnerRequestInput,
    InventoryRoutingDemandInput,
    InventoryRoutingSourceInputFixedLocationInput,
    InventoryRoutingSourceInputPolicyInput,
    InventoryRoutingSourceInputPolicyRevisionInput,
    InventoryRoutingSourceRequestInput,
    InventorySettingsRequestInput,
    InventorySourceSystemRequestInput,
    InventoryTransferLineRequestInput
} from './types-30.js';
import type {
    InvoiceAutopayRetryPolicyInput,
    InvoiceCollectionInputAutomaticInput,
    InvoiceCollectionInputBuyerInitiatedInput,
    InvoiceCollectionInputExternalInput,
    InvoiceCollectionInputMerchantDefaultInput,
    InvoiceCollectionRequestInput
} from './types-31.js';
import type {
    InvoiceLateFeePolicyFixedRequestInput,
    InvoiceLateFeePolicyPercentageRequestInput,
    InvoiceLateFeePolicyRequestInput
} from './types-32.js';
import type {
    InvoicePaymentDueInputCustomerDefaultInput,
    InvoicePaymentDueInputDateInput,
    InvoicePaymentDueInputMerchantDefaultInput,
    InvoicePaymentDueInputNoneInput,
    InvoicePaymentDueInputPaymentTermsInput,
    InvoicePaymentDueRequestInput,
    InvoicePaymentOptionLimitRequestInput,
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
} from './types-33.js';
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
    IssueInvoiceRequestInput,
    LegalSettingsRequestInput
} from './types-34.js';
import type {
    LineItemFulfillmentOriginRequestModelInput,
    LineItemFulfillmentRequestModelInput,
    LinkCustomerGuestPurchasesRequestInput,
    LocationCoordinateRequestInput,
    LookupEmailPreferencesRequestInput,
    LookupGiftCardRequestInput,
    LookupTicketRequestInput
} from './types-35.js';
export declare function makeInventoryAllocationPolicyLocation(value: InputValue<InventoryAllocationPolicyLocationInput>): Model<InventoryAllocationPolicyLocationInput>;
export declare function makeInventoryBackorderPolicyRequest(value: InputValue<InventoryBackorderPolicyRequestInput>): Model<InventoryBackorderPolicyRequestInput>;
export declare function makeInventoryCountObservationRequest(value: InputValue<InventoryCountObservationRequestInput>): Model<InventoryCountObservationRequestInput>;
export declare function makeInventoryItemCreateRequest(value: InputValue<InventoryItemCreateRequestInput>): Model<InventoryItemCreateRequestInput>;
export declare function makeInventoryOriginPolicyRequest(value: InputValue<InventoryOriginPolicyRequestInput>): Model<InventoryOriginPolicyRequestInput>;
export declare function makeInventoryProvenanceRequest(value: InputValue<InventoryProvenanceRequestInput>): Model<InventoryProvenanceRequestInput>;
export declare function makeInventoryReceiptLineRequest(value: InputValue<InventoryReceiptLineRequestInput>): Model<InventoryReceiptLineRequestInput>;
export declare function makeInventoryReservationOwnerRequest(value: InputValue<InventoryReservationOwnerRequestInput>): Model<InventoryReservationOwnerRequestInput>;
export declare function makeInventoryRoutingDemand(value: InputValue<InventoryRoutingDemandInput>): Model<InventoryRoutingDemandInput>;
export declare function makeInventoryRoutingSourceInputFixedLocation(value: InputValue<InventoryRoutingSourceInputFixedLocationInput>): Model<InventoryRoutingSourceInputFixedLocationInput>;
export declare function makeInventoryRoutingSourceInputPolicy(value: InputValue<InventoryRoutingSourceInputPolicyInput>): Model<InventoryRoutingSourceInputPolicyInput>;
export declare function makeInventoryRoutingSourceInputPolicyRevision(value: InputValue<InventoryRoutingSourceInputPolicyRevisionInput>): Model<InventoryRoutingSourceInputPolicyRevisionInput>;
export declare function makeInventoryRoutingSourceRequest(value: InputValue<Exclude<InventoryRoutingSourceRequestInput & object, readonly unknown[]>>): Model<Exclude<InventoryRoutingSourceRequestInput & object, readonly unknown[]>>;
export declare function makeInventoryRoutingSourceRequest(value: InputValue<InventoryRoutingSourceRequestInput>): Model<InventoryRoutingSourceRequestInput>;
export declare function makeInventorySettingsRequest(value: InputValue<InventorySettingsRequestInput>): Model<InventorySettingsRequestInput>;
export declare function makeInventorySourceSystemRequest(value: InputValue<InventorySourceSystemRequestInput>): Model<InventorySourceSystemRequestInput>;
export declare function makeInventoryTransferLineRequest(value: InputValue<InventoryTransferLineRequestInput>): Model<InventoryTransferLineRequestInput>;
export declare function makeInvoiceAutopayRetryPolicy(value: InputValue<InvoiceAutopayRetryPolicyInput>): Model<InvoiceAutopayRetryPolicyInput>;
export declare function makeInvoiceCollectionInputAutomatic(value: InputValue<InvoiceCollectionInputAutomaticInput>): Model<InvoiceCollectionInputAutomaticInput>;
export declare function makeInvoiceCollectionInputBuyerInitiated(value: InputValue<InvoiceCollectionInputBuyerInitiatedInput>): Model<InvoiceCollectionInputBuyerInitiatedInput>;
export declare function makeInvoiceCollectionInputExternal(value: InputValue<InvoiceCollectionInputExternalInput>): Model<InvoiceCollectionInputExternalInput>;
export declare function makeInvoiceCollectionInputMerchantDefault(value: InputValue<InvoiceCollectionInputMerchantDefaultInput>): Model<InvoiceCollectionInputMerchantDefaultInput>;
export declare function makeInvoiceCollectionRequest(value: InputValue<InvoiceCollectionRequestInput>): Model<InvoiceCollectionRequestInput>;
export declare function makeInvoiceLateFeePolicyFixedRequest(value: InputValue<InvoiceLateFeePolicyFixedRequestInput>): Model<InvoiceLateFeePolicyFixedRequestInput>;
export declare function makeInvoiceLateFeePolicyPercentageRequest(value: InputValue<InvoiceLateFeePolicyPercentageRequestInput>): Model<InvoiceLateFeePolicyPercentageRequestInput>;
export declare function makeInvoiceLateFeePolicyRequest(value: InputValue<InvoiceLateFeePolicyRequestInput>): Model<InvoiceLateFeePolicyRequestInput>;
export declare function makeInvoicePaymentDueInputCustomerDefault(value: InputValue<InvoicePaymentDueInputCustomerDefaultInput>): Model<InvoicePaymentDueInputCustomerDefaultInput>;
export declare function makeInvoicePaymentDueInputDate(value: InputValue<InvoicePaymentDueInputDateInput>): Model<InvoicePaymentDueInputDateInput>;
export declare function makeInvoicePaymentDueInputMerchantDefault(value: InputValue<InvoicePaymentDueInputMerchantDefaultInput>): Model<InvoicePaymentDueInputMerchantDefaultInput>;
export declare function makeInvoicePaymentDueInputNone(value: InputValue<InvoicePaymentDueInputNoneInput>): Model<InvoicePaymentDueInputNoneInput>;
export declare function makeInvoicePaymentDueInputPaymentTerms(value: InputValue<InvoicePaymentDueInputPaymentTermsInput>): Model<InvoicePaymentDueInputPaymentTermsInput>;
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
export declare function makeLineItemFulfillmentOriginRequestModel(value: InputValue<LineItemFulfillmentOriginRequestModelInput>): Model<LineItemFulfillmentOriginRequestModelInput>;
export declare function makeLineItemFulfillmentRequestModel(value: InputValue<LineItemFulfillmentRequestModelInput>): Model<LineItemFulfillmentRequestModelInput>;
export declare function makeLinkCustomerGuestPurchasesRequest(value: InputValue<LinkCustomerGuestPurchasesRequestInput>): Model<LinkCustomerGuestPurchasesRequestInput>;
export declare function makeLocationCoordinateRequest(value: InputValue<LocationCoordinateRequestInput>): Model<LocationCoordinateRequestInput>;
export declare function makeLookupEmailPreferencesRequest(value: InputValue<LookupEmailPreferencesRequestInput>): Model<LookupEmailPreferencesRequestInput>;
export declare function makeLookupGiftCardRequest(value: InputValue<LookupGiftCardRequestInput>): Model<LookupGiftCardRequestInput>;
export declare function makeLookupTicketRequest(value: InputValue<LookupTicketRequestInput>): Model<LookupTicketRequestInput>;
