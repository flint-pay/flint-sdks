import type { InputValue, Model } from '../runtime.js';
import type {
    InventoryTransferTransitionRequestReceiveInput,
    InventoryTransferTransitionRequestReportLossInput,
    InventoryTransferTransitionRequestReturnToOriginInput,
    InvoiceAutopayRetryPolicyInput,
    InvoiceCheckoutSessionRequestInput,
    InvoiceCollectionInputAutomaticInput,
    InvoiceCollectionInputBuyerInitiatedInput,
    InvoiceCollectionInputExternalInput,
    InvoiceCollectionInputMerchantDefaultInput,
    InvoiceCollectionRequestInput,
    InvoiceLateFeePolicyInput,
    InvoiceLateFeePolicyFixedInput,
    InvoiceLateFeePolicyPercentageInput
} from './types-26.js';
import type {
    InvoicePaymentDueInputCustomerDefaultInput,
    InvoicePaymentDueInputDateInput,
    InvoicePaymentDueInputMerchantDefaultInput,
    InvoicePaymentDueInputNoneInput,
    InvoicePaymentDueInputPaymentTermsInput,
    InvoicePaymentDueRequestInput,
    InvoicePaymentOptionLimitInput,
    InvoicePaymentPolicyInput,
    InvoicePaymentTermCalculationInput,
    InvoicePaymentTermCalculationDayOfMonthInput,
    InvoicePaymentTermCalculationDayOfNextMonthInput,
    InvoicePaymentTermCalculationDaysAfterMonthEndInput,
    InvoicePaymentTermCalculationNetDaysInput,
    InvoicePaymentTermCalculationOnReceiptInput,
    InvoiceReminderPolicyInput,
    InvoiceReminderRuleInput,
    InvoiceScheduleAmountSpecificationInput,
    InvoiceScheduleAmountSpecificationFixedInput,
    InvoiceScheduleAmountSpecificationPercentageInput,
    InvoiceScheduleAmountSpecificationRemainingBalanceInput
} from './types-27.js';
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
    IssueSandboxAPIKeyRequestInput,
    LegalSettingsRequestInput,
    LineItemFulfillmentOriginRequestInput,
    LineItemFulfillmentRequestInput,
    LinkCustomerGuestPurchasesRequestInput
} from './types-28.js';
import type {
    LocationAddressRequestInput,
    LocationCoordinateInput,
    LookupGiftCardRequestInput,
    ManualDiscountRequestInput
} from './types-29.js';
import type { MerchantAccountSessionCreateRequestInput, MerchantAccountSessionRefreshRequestInput } from './types-30.js';
import type {
    ModifierOverrideInput,
    ModifierRequestInput,
    ModifierSetGroupInputExistingInput,
    ModifierSetGroupInputInlineInput,
    ModifierSetGroupRequestInput,
    MoneyValueInput,
    OnboardingAdvanceRequestInput,
    OnboardingProfileRequestInput,
    OnboardingStartRequestInput
} from './types-31.js';
export declare function makeInventoryTransferTransitionRequestReceive(value: InputValue<InventoryTransferTransitionRequestReceiveInput>): Model<InventoryTransferTransitionRequestReceiveInput>;
export declare function makeInventoryTransferTransitionRequestReportLoss(value: InputValue<InventoryTransferTransitionRequestReportLossInput>): Model<InventoryTransferTransitionRequestReportLossInput>;
export declare function makeInventoryTransferTransitionRequestReturnToOrigin(value: InputValue<InventoryTransferTransitionRequestReturnToOriginInput>): Model<InventoryTransferTransitionRequestReturnToOriginInput>;
export declare function makeInvoiceAutopayRetryPolicy(value: InputValue<InvoiceAutopayRetryPolicyInput>): Model<InvoiceAutopayRetryPolicyInput>;
export declare function makeInvoiceCheckoutSessionRequest(value: InputValue<InvoiceCheckoutSessionRequestInput>): Model<InvoiceCheckoutSessionRequestInput>;
export declare function makeInvoiceCollectionInputAutomatic(value: InputValue<InvoiceCollectionInputAutomaticInput>): Model<InvoiceCollectionInputAutomaticInput>;
export declare function makeInvoiceCollectionInputBuyerInitiated(value: InputValue<InvoiceCollectionInputBuyerInitiatedInput>): Model<InvoiceCollectionInputBuyerInitiatedInput>;
export declare function makeInvoiceCollectionInputExternal(value: InputValue<InvoiceCollectionInputExternalInput>): Model<InvoiceCollectionInputExternalInput>;
export declare function makeInvoiceCollectionInputMerchantDefault(value: InputValue<InvoiceCollectionInputMerchantDefaultInput>): Model<InvoiceCollectionInputMerchantDefaultInput>;
export declare function makeInvoiceCollectionRequest(value: InputValue<InvoiceCollectionRequestInput>): Model<InvoiceCollectionRequestInput>;
export declare function makeInvoiceLateFeePolicy(value: InputValue<InvoiceLateFeePolicyInput>): Model<InvoiceLateFeePolicyInput>;
export declare function makeInvoiceLateFeePolicyFixed(value: InputValue<InvoiceLateFeePolicyFixedInput>): Model<InvoiceLateFeePolicyFixedInput>;
export declare function makeInvoiceLateFeePolicyPercentage(value: InputValue<InvoiceLateFeePolicyPercentageInput>): Model<InvoiceLateFeePolicyPercentageInput>;
export declare function makeInvoicePaymentDueInputCustomerDefault(value: InputValue<InvoicePaymentDueInputCustomerDefaultInput>): Model<InvoicePaymentDueInputCustomerDefaultInput>;
export declare function makeInvoicePaymentDueInputDate(value: InputValue<InvoicePaymentDueInputDateInput>): Model<InvoicePaymentDueInputDateInput>;
export declare function makeInvoicePaymentDueInputMerchantDefault(value: InputValue<InvoicePaymentDueInputMerchantDefaultInput>): Model<InvoicePaymentDueInputMerchantDefaultInput>;
export declare function makeInvoicePaymentDueInputNone(value: InputValue<InvoicePaymentDueInputNoneInput>): Model<InvoicePaymentDueInputNoneInput>;
export declare function makeInvoicePaymentDueInputPaymentTerms(value: InputValue<InvoicePaymentDueInputPaymentTermsInput>): Model<InvoicePaymentDueInputPaymentTermsInput>;
export declare function makeInvoicePaymentDueRequest(value: InputValue<InvoicePaymentDueRequestInput>): Model<InvoicePaymentDueRequestInput>;
export declare function makeInvoicePaymentOptionLimit(value: InputValue<InvoicePaymentOptionLimitInput>): Model<InvoicePaymentOptionLimitInput>;
export declare function makeInvoicePaymentPolicy(value: InputValue<InvoicePaymentPolicyInput>): Model<InvoicePaymentPolicyInput>;
export declare function makeInvoicePaymentTermCalculation(value: InputValue<InvoicePaymentTermCalculationInput>): Model<InvoicePaymentTermCalculationInput>;
export declare function makeInvoicePaymentTermCalculationDayOfMonth(value: InputValue<InvoicePaymentTermCalculationDayOfMonthInput>): Model<InvoicePaymentTermCalculationDayOfMonthInput>;
export declare function makeInvoicePaymentTermCalculationDayOfNextMonth(value: InputValue<InvoicePaymentTermCalculationDayOfNextMonthInput>): Model<InvoicePaymentTermCalculationDayOfNextMonthInput>;
export declare function makeInvoicePaymentTermCalculationDaysAfterMonthEnd(value: InputValue<InvoicePaymentTermCalculationDaysAfterMonthEndInput>): Model<InvoicePaymentTermCalculationDaysAfterMonthEndInput>;
export declare function makeInvoicePaymentTermCalculationNetDays(value: InputValue<InvoicePaymentTermCalculationNetDaysInput>): Model<InvoicePaymentTermCalculationNetDaysInput>;
export declare function makeInvoicePaymentTermCalculationOnReceipt(value: InputValue<InvoicePaymentTermCalculationOnReceiptInput>): Model<InvoicePaymentTermCalculationOnReceiptInput>;
export declare function makeInvoiceReminderPolicy(value: InputValue<InvoiceReminderPolicyInput>): Model<InvoiceReminderPolicyInput>;
export declare function makeInvoiceReminderRule(value: InputValue<InvoiceReminderRuleInput>): Model<InvoiceReminderRuleInput>;
export declare function makeInvoiceScheduleAmountSpecification(value: InputValue<InvoiceScheduleAmountSpecificationInput>): Model<InvoiceScheduleAmountSpecificationInput>;
export declare function makeInvoiceScheduleAmountSpecificationFixed(value: InputValue<InvoiceScheduleAmountSpecificationFixedInput>): Model<InvoiceScheduleAmountSpecificationFixedInput>;
export declare function makeInvoiceScheduleAmountSpecificationPercentage(value: InputValue<InvoiceScheduleAmountSpecificationPercentageInput>): Model<InvoiceScheduleAmountSpecificationPercentageInput>;
export declare function makeInvoiceScheduleAmountSpecificationRemainingBalance(value: InputValue<InvoiceScheduleAmountSpecificationRemainingBalanceInput>): Model<InvoiceScheduleAmountSpecificationRemainingBalanceInput>;
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
export declare function makeIssueSandboxAPIKeyRequest(value: InputValue<IssueSandboxAPIKeyRequestInput>): Model<IssueSandboxAPIKeyRequestInput>;
export declare function makeLegalSettingsRequest(value: InputValue<LegalSettingsRequestInput>): Model<LegalSettingsRequestInput>;
export declare function makeLineItemFulfillmentOriginRequest(value: InputValue<LineItemFulfillmentOriginRequestInput>): Model<LineItemFulfillmentOriginRequestInput>;
export declare function makeLineItemFulfillmentRequest(value: InputValue<LineItemFulfillmentRequestInput>): Model<LineItemFulfillmentRequestInput>;
export declare function makeLinkCustomerGuestPurchasesRequest(value: InputValue<LinkCustomerGuestPurchasesRequestInput>): Model<LinkCustomerGuestPurchasesRequestInput>;
export declare function makeLocationAddressRequest(value: InputValue<LocationAddressRequestInput>): Model<LocationAddressRequestInput>;
export declare function makeLocationCoordinate(value: InputValue<LocationCoordinateInput>): Model<LocationCoordinateInput>;
export declare function makeLookupGiftCardRequest(value: InputValue<LookupGiftCardRequestInput>): Model<LookupGiftCardRequestInput>;
export declare function makeManualDiscountRequest(value: InputValue<ManualDiscountRequestInput>): Model<ManualDiscountRequestInput>;
export declare function makeMerchantAccountSessionCreateRequest(value: InputValue<MerchantAccountSessionCreateRequestInput>): Model<MerchantAccountSessionCreateRequestInput>;
export declare function makeMerchantAccountSessionRefreshRequest(value: InputValue<MerchantAccountSessionRefreshRequestInput>): Model<MerchantAccountSessionRefreshRequestInput>;
export declare function makeModifierOverride(value: InputValue<ModifierOverrideInput>): Model<ModifierOverrideInput>;
export declare function makeModifierRequest(value: InputValue<ModifierRequestInput>): Model<ModifierRequestInput>;
export declare function makeModifierSetGroupInputExisting(value: InputValue<ModifierSetGroupInputExistingInput>): Model<ModifierSetGroupInputExistingInput>;
export declare function makeModifierSetGroupInputInline(value: InputValue<ModifierSetGroupInputInlineInput>): Model<ModifierSetGroupInputInlineInput>;
export declare function makeModifierSetGroupRequest(value: InputValue<ModifierSetGroupRequestInput>): Model<ModifierSetGroupRequestInput>;
export declare function makeMoneyValue(value: InputValue<MoneyValueInput>): Model<MoneyValueInput>;
export declare function makeOnboardingAdvanceRequest(value: InputValue<OnboardingAdvanceRequestInput>): Model<OnboardingAdvanceRequestInput>;
export declare function makeOnboardingProfileRequest(value: InputValue<OnboardingProfileRequestInput>): Model<OnboardingProfileRequestInput>;
export declare function makeOnboardingStartRequest(value: InputValue<OnboardingStartRequestInput>): Model<OnboardingStartRequestInput>;
