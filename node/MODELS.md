# Flint Public API models

[API reference](REFERENCE.md) · [Runtime guide](RUNTIME.md)

Fields describe the API's declared shape. Inputs omit read-only fields; responses omit write-only fields and preserve unknown fields and enum values. Request enums are closed unions; response enums accept unknown strings. Input types use the Input suffix.

Integer counters such as version use number with a safe range of ±(2^53 − 1); values outside that range fail without rounding. Integers inside exact components (Money) remain exact strings (TypeScript `${bigint}`; inputs also accept bigint). Money amounts stay exact strings when their component is listed. Sum money amounts with `BigInt(a.amount) + BigInt(b.amount)`. Decimal fields use exact numeric strings. Use each field's declared units.

Schema defaults are metadata; clients do not apply them. Field definitions apply to all variants. Rules under each condition specify presence and additional constraints. Composed alternative groups apply together: satisfy a variant from each numbered group.

## Index

- [AcceptFulfillmentRequestInput to BuyerCreateReturnPreviewRequestInput](models/index-1.md)
- [BuyerCreateReturnPreviewRequestEligibility to BuyerRememberedBuyerListResponse](models/index-2.md)
- [BuyerRememberedBuyerResponse to CancelReturnRequest](models/index-3.md)
- [CancelReturnRequestInput to CheckoutSessionTax](models/index-4.md)
- [CheckoutSessionTaxPreviousAttributes to CreateCheckoutSessionReturnResolutionInput](models/index-5.md)
- [CreateCheckoutSessionSavePaymentMethodVerificationRequest to CreateGiftCardRedemptionRequestAutomatic](models/index-6.md)
- [CreateGiftCardRedemptionRequestAutomaticInput to CreateOrderLineItemInputBundle](models/index-7.md)
- [CreateOrderLineItemInputBundleInput to CreateReturnPreviewRequestEligibilityInput](models/index-8.md)
- [CreateReturnPreviewRequestResolution to CreditNoteAllocationReversedInstalledMerchantsEvent](models/index-9.md)
- [CreditNoteAllocationReversedMerchantEvent to CustomFieldAnswerCheckbox](models/index-10.md)
- [CustomFieldAnswerCheckboxPreviousAttributes to DeliveryInventoryAssignmentRequest](models/index-11.md)
- [DeliveryInventoryAssignmentRequestInput to DeliveryPricingStrategyCreateInputCalculated](models/index-12.md)
- [DeliveryPricingStrategyCreateInputCalculatedInput to DeliveryRateCallbackConnectionCheckRequest](models/index-13.md)
- [DeliveryRateCallbackConnectionCheckResponse to DeliveryWindowTimeCondition](models/index-14.md)
- [DeliveryWindowTimeConditionInput to ExpandedPaymentMethodSummary](models/index-15.md)
- [ExpandedPaymentMethodSummaryPreviousAttributes to GiftCardFundingSource](models/index-16.md)
- [GiftCardFundingSourceAdjustment to ImageAttachmentPreviousAttributes](models/index-17.md)
- [ImageInputFile to InventoryReservationLine](models/index-18.md)
- [InventoryReservationLinePreviousAttributes to InvoiceDocumentRow](models/index-19.md)
- [InvoiceIssuedInstalledMerchantsEvent to InvoicePaymentTermCalculationRequestInput](models/index-20.md)
- [InvoicePaymentTermListResponse to LicenseKeyPoolArchivedMerchantEvent](models/index-21.md)
- [LicenseKeyPoolCreatedInstalledMerchantsEvent to MerchantBillingInvoiceLineItemPreviousAttributes](models/index-22.md)
- [MerchantBillingInvoiceListResponse to OnboardingVerifyEmailRequest](models/index-23.md)
- [OnboardingVerifyEmailRequestInput to OrderLineItemFulfillmentRequirementsPreviousAttributes](models/index-24.md)
- [OrderLineItemModifier to PackageItem](models/index-25.md)
- [PackageItemListResponse to PaymentIntentActivityListResponse](models/index-26.md)
- [PaymentIntentAuthorizationExpiringInstalledMerchantsEvent to PaymentLinkThemePatchRequestInput](models/index-27.md)
- [PaymentLinkUpdatedInstalledMerchantsEvent to PayoutDestinationListResponse](models/index-28.md)
- [PayoutDestinationResponse to ProductVariantCreatedInstalledMerchantsEvent](models/index-29.md)
- [ProductVariantCreatedMerchantEvent to PromotionUpdatedMerchantEvent](models/index-30.md)
- [PublicDownload to RefundTenderAllocationInputPaymentIntentInput](models/index-31.md)
- [RefundTenderAllocationPreviousAttributes to ReturnDispositionCreatedInstalledMerchantsEvent](models/index-32.md)
- [ReturnDispositionCreatedMerchantEvent to ReturnReceiptVerifiedMerchantEvent](models/index-33.md)
- [ReturnRefundEstimate to RotatePartnerAppSecretResponse](models/index-34.md)
- [RotateWebhookSecretRequest to SubscriptionBillingScheduleRequest](models/index-35.md)
- [SubscriptionBillingScheduleRequestInput to SubscriptionPausedMerchantEvent](models/index-36.md)
- [SubscriptionPaymentRetry to SubscriptionUpdatedInstalledMerchantsEvent](models/index-37.md)
- [SubscriptionUpdatedMerchantEvent to TicketVoidedInstalledMerchantsEvent](models/index-38.md)
- [TicketVoidedMerchantEvent to UpdatePaymentIntentRequest](models/index-39.md)
- [UpdatePaymentIntentRequestInput to VoidShipmentResult](models/index-40.md)
- [WaiveInvoiceLateFeeRequest to WorkloadIdentityResponse](models/index-41.md)

