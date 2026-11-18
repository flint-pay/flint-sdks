# Flint Public API models

[API reference](REFERENCE.md) · [Runtime guide](RUNTIME.md)

Fields describe the API's declared shape. Inputs omit read-only fields; responses omit write-only fields and preserve unknown fields and enum values. Request enums are closed unions; response enums accept unknown strings. Input types use the Input suffix.

Integer counters such as version use number with a safe range of ±(2^53 − 1); values outside that range fail without rounding. Integers inside exact components (Money) remain exact strings (TypeScript `${bigint}`; inputs also accept bigint). Money amounts stay exact strings when their component is listed. Sum money amounts with `BigInt(a.amount) + BigInt(b.amount)`. Decimal fields use exact numeric strings. Use each field's declared units.

Schema defaults are metadata; clients do not apply them. Field definitions apply to all variants. Rules under each condition specify presence and additional constraints. Composed alternative groups apply together: satisfy a variant from each numbered group.

## Index

- [AcceptFulfillmentRequestInput to BuyerCreateReturnPreviewRequestInput](models/index-1.md)
- [BuyerCreateReturnPreviewRequestEligibility to BuyerRememberedBuyerListResponse](models/index-2.md)
- [BuyerRememberedBuyerResponse to CancelReturnRequest](models/index-3.md)
- [CancelReturnRequestInput to CheckoutSessionTaxPreviousAttributes](models/index-4.md)
- [CheckoutSessionUpdatedInstalledMerchantsEvent to CreateCheckoutSessionSavePaymentMethodVerificationRequest](models/index-5.md)
- [CreateCheckoutSessionSavePaymentMethodVerificationRequestInput to CreateGiftCardRedemptionRequestAutomaticInput](models/index-6.md)
- [CreateGiftCardRedemptionRequestManual to CreateOrderLineItemInputBundleInput](models/index-7.md)
- [CreateOrderLineItemInputCustom to CreateReturnPreviewRequestResolution](models/index-8.md)
- [CreateReturnPreviewRequestResolutionInput to CreditNoteAllocationReversedMerchantEvent](models/index-9.md)
- [CreditNoteCorrectionRequest to CustomFieldAnswerCheckboxPreviousAttributes](models/index-10.md)
- [CustomFieldAnswerDropdown to DeliveryInventoryAssignmentRequestInput](models/index-11.md)
- [DeliveryInventoryReservationSummary to DeliveryPricingStrategyCreateInputCalculatedInput](models/index-12.md)
- [DeliveryPricingStrategyCreateInputCallback to DeliveryRateCallbackConnectionCheckResponse](models/index-13.md)
- [DeliveryRateCallbackCreatedInstalledMerchantsEvent to DeliveryWindowTimeConditionInput](models/index-14.md)
- [DeliveryWindowTimeConditionPreviousAttributes to ExpandedPaymentMethodSummaryPreviousAttributes](models/index-15.md)
- [ExpandedPayoutDestinationSummary to GiftCardFundingSourceAdjustment](models/index-16.md)
- [GiftCardFundingSourceAdjustmentPreviousAttributes to ImageInputFile](models/index-17.md)
- [ImageInputFileInput to InventoryReservationLinePreviousAttributes](models/index-18.md)
- [InventoryReservationListResponse to InvoiceIssuedInstalledMerchantsEvent](models/index-19.md)
- [InvoiceIssuedMerchantEvent to InvoicePaymentTermListResponse](models/index-20.md)
- [InvoicePaymentTermResponse to LicenseKeyPoolCreatedInstalledMerchantsEvent](models/index-21.md)
- [LicenseKeyPoolCreatedMerchantEvent to MerchantBillingInvoiceListResponse](models/index-22.md)
- [MerchantBillingInvoiceResponse to OnboardingVerifyEmailRequestInput](models/index-23.md)
- [OnboardingVerifyEmailResponse to OrderLineItemModifier](models/index-24.md)
- [OrderLineItemModifierInputCatalog to PackageItemListResponse](models/index-25.md)
- [PackageItemResponse to PaymentIntentAuthorizationExpiringInstalledMerchantsEvent](models/index-26.md)
- [PaymentIntentAuthorizationExpiringMerchantEvent to PaymentLinkUpdatedInstalledMerchantsEvent](models/index-27.md)
- [PaymentLinkUpdatedMerchantEvent to PayoutDestinationResponse](models/index-28.md)
- [PayoutDestinationUpdatedInstalledMerchantsEvent to ProductVariantCreatedMerchantEvent](models/index-29.md)
- [ProductVariantInventoryAvailability to PublicDownload](models/index-30.md)
- [PublicDownloadPreviousAttributes to RefundTenderAllocationPreviousAttributes](models/index-31.md)
- [RefundTenderAllocationRequest to ReturnDispositionCreatedMerchantEvent](models/index-32.md)
- [ReturnDispositionPreviousAttributes to ReturnRefundEstimate](models/index-33.md)
- [ReturnRefundTenderEstimate to RotateWebhookSecretRequest](models/index-34.md)
- [RotateWebhookSecretRequestInput to SubscriptionBillingScheduleRequestInput](models/index-35.md)
- [SubscriptionBillingScheduleUpdateInputExternal to SubscriptionPaymentRetry](models/index-36.md)
- [SubscriptionPaymentRetryCreatedInstalledMerchantsEvent to SubscriptionUpdatedMerchantEvent](models/index-37.md)
- [SubscriptionWindowMetrics to TicketVoidedMerchantEvent](models/index-38.md)
- [TicketWithAdmissionCode to UpdatePaymentIntentRequestInput](models/index-39.md)
- [UpdatePaymentLinkRequest to WaiveInvoiceLateFeeRequest](models/index-40.md)
- [WaiveInvoiceLateFeeRequestInput to WorkloadIdentityResponse](models/index-41.md)

