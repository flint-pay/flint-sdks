# Flint Public API models

[API reference](REFERENCE.md) · [Runtime guide](RUNTIME.md)

Fields describe the API's declared shape. Inputs omit read-only fields; responses omit write-only fields and preserve unknown fields and enum values. Request enums are closed unions; response enums accept unknown strings. Input types use the Input suffix.

Integer counters such as version use number with a safe range of ±(2^53 − 1); values outside that range fail without rounding. Integers inside exact components (Money) remain exact strings (TypeScript `${bigint}`; inputs also accept bigint). Money amounts stay exact strings when their component is listed. Sum money amounts with `BigInt(a.amount) + BigInt(b.amount)`. Decimal fields use exact numeric strings. Use each field's declared units.

Schema defaults are metadata; clients do not apply them. Field definitions apply to all variants. Rules under each condition specify presence and additional constraints. Composed alternative groups apply together: satisfy a variant from each numbered group.

## Index

- [AcceptFulfillmentRequestInput to BuyerCheckoutSessionLaunch](models/index-1.md)
- [BuyerCheckoutSessionLaunchResponse to BuyerRefundListResponse](models/index-2.md)
- [BuyerRefundPreviousAttributes to CancelReturnDispositionRequest](models/index-3.md)
- [CancelReturnDispositionRequestInput to CheckoutSessionLaunchResponse](models/index-4.md)
- [CheckoutSessionListResponse to CreateCheckoutSessionOrderInput](models/index-5.md)
- [CreateCheckoutSessionPayToNewAddressVerificationRequest to CreateGiftCardLoadRequest](models/index-6.md)
- [CreateGiftCardLoadRequestInput to CreateOrderDiscountPromotionInput](models/index-7.md)
- [CreateOrderEditRequest to CreateReturnPolicyRequest](models/index-8.md)
- [CreateReturnPolicyRequestInput to CreditNote](models/index-9.md)
- [CreditNoteAllocation to CustomerTaxID](models/index-10.md)
- [CustomerTaxIDPreviousAttributes to DeliveryFixedPricingStrategyPreviousAttributes](models/index-11.md)
- [DeliveryFixedPricingStrategyRequestInput to DeliveryPricingRateRequestInput](models/index-12.md)
- [DeliveryPricingStrategy to DeliveryRateCallbackArchivedInstalledMerchantsEvent](models/index-13.md)
- [DeliveryRateCallbackArchivedMerchantEvent to DeliveryWeeklyIntervalPreviousAttributes](models/index-14.md)
- [DeliveryWeeklyIntervalRequestInput to ExpandedOrderSummary](models/index-15.md)
- [ExpandedOrderSummaryPreviousAttributes to GiftCardCustomAmountBoundsRequestInput](models/index-16.md)
- [GiftCardFundingDisposition to GiftCardTransactionListResponse](models/index-17.md)
- [GiftCardUpdatedInstalledMerchantsEvent to InventoryReservationClosedInstalledMerchantsEvent](models/index-18.md)
- [InventoryReservationClosedMerchantEvent to InvoiceDeliveryAttempt](models/index-19.md)
- [InvoiceDeliveryAttemptFailedInstalledMerchantsEvent to InvoicePaymentTermCalculationDaysAfterMonthEnd](models/index-20.md)
- [InvoicePaymentTermCalculationDaysAfterMonthEndPreviousAttributes to LicenseKeyCreatedMerchantEvent](models/index-21.md)
- [LicenseKeyDisabledInstalledMerchantsEvent to MerchantAccountSessionStripeRequirements](models/index-22.md)
- [MerchantBillingBalance to OnboardingProfile](models/index-23.md)
- [OnboardingProfileRequest to OrderInventoryExceptionResolvedInstalledMerchantsEvent](models/index-24.md)
- [OrderInventoryExceptionResolvedMerchantEvent to Package](models/index-25.md)
- [PackageCreatedInstalledMerchantsEvent to PaymentCollectionPreviousAttributes](models/index-26.md)
- [PaymentCollectionStripe to PaymentLinkPaymentPatchRequestInput](models/index-27.md)
- [PaymentLinkProductOption to Payout](models/index-28.md)
- [PayoutCanceledInstalledMerchantsEvent to ProductOptionPreviousAttributes](models/index-29.md)
- [ProductOptionResponse to PromotionRuleRequestInput](models/index-30.md)
- [PromotionRuleValue to RefundPreviousAttributes](models/index-31.md)
- [RefundResponse to RetryReturnResolutionRequestInput](models/index-32.md)
- [ReturnActivity to ReturnReceiptCreatedInstalledMerchantsEvent](models/index-33.md)
- [ReturnReceiptCreatedMerchantEvent to RiskPredicateNodeNotRequest](models/index-34.md)
- [RiskPredicateNodeNotRequestInput to SubscribedLinePreviousAttributes](models/index-35.md)
- [SubscribedLineRequest to SubscriptionLineItem](models/index-36.md)
- [SubscriptionLineItemPreviousAttributes to SubscriptionSettingsRequestInput](models/index-37.md)
- [SubscriptionSnapshotMetrics to TextModifierRequestPreviousAttributes](models/index-38.md)
- [ThemeConfig to UpdateMeSubscriptionLineItemRequest](models/index-39.md)
- [UpdateMeSubscriptionLineItemRequestInput to UpdateTaxRegistrationRequestInput](models/index-40.md)
- [UpdateTicketRequest to WorkloadIdentityResponse](models/index-41.md)

