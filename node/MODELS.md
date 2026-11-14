# Flint Public API models

[API reference](REFERENCE.md) · [Runtime guide](RUNTIME.md)

Fields describe the API's declared shape. Inputs omit read-only fields; responses omit write-only fields and preserve unknown fields and enum values. Request enums are closed unions; response enums accept unknown strings. Input types use the Input suffix.

Integer counters such as version use number with a safe range of ±(2^53 − 1); values outside that range fail without rounding. Integers inside exact components (Money) remain exact strings (TypeScript `${bigint}`; inputs also accept bigint). Money amounts stay exact strings when their component is listed. Sum money amounts with `BigInt(a.amount) + BigInt(b.amount)`. Decimal fields use exact numeric strings. Use each field's declared units.

Schema defaults are metadata; clients do not apply them. Field definitions apply to all variants. Rules under each condition specify presence and additional constraints. Composed alternative groups apply together: satisfy a variant from each numbered group.

## Index

- [AcceptFulfillmentRequestInput to BuyerCreateReturnRequestInput](models/index-1.md)
- [BuyerCreateReturnResolutionPreviewRequest to BuyerReturnPreviewResolution](models/index-2.md)
- [BuyerReturnPreviewResponse to CategoryUpdatedInstalledMerchantsEvent](models/index-3.md)
- [CategoryUpdatedMerchantEvent to CompleteReturnRequest](models/index-4.md)
- [CompleteReturnRequestInput to CreateDeliveryPreviewRequest](models/index-5.md)
- [CreateDeliveryPreviewRequestInput to CreateInvoiceQuickPayRequestInput](models/index-6.md)
- [CreateInvoiceRequest to CreatePriceListPricesRequestInput](models/index-7.md)
- [CreatePriceListPricesResponse to CreateSubscriptionDeliveryMigrationRequest](models/index-8.md)
- [CreateSubscriptionDeliveryMigrationRequestInput to CustomerCreatedMerchantEvent](models/index-9.md)
- [CustomerDeletedInstalledMerchantsEvent to DeliveryEstimateRule](models/index-10.md)
- [DeliveryEstimateRuleRequestInput to DeliveryPricingStrategyCreateInputRateTableInput](models/index-11.md)
- [DeliveryPricingStrategyCreateInputTiered to DeliveryRateEvaluationOutcomeAvailableInput](models/index-12.md)
- [DeliveryRateEvaluationOutcomeCannotCalculate to DisputeCreatedInstalledMerchantsEvent](models/index-13.md)
- [DisputeCreatedMerchantEvent to FulfillmentPackagingRequest](models/index-14.md)
- [FulfillmentPackagingRequestInput to GiftCardUpdatedMerchantEvent](models/index-15.md)
- [GiftCardVersionRequestInput to InventoryReservationHoldExpiredInstalledMerchantsEvent](models/index-16.md)
- [InventoryReservationHoldExpiredMerchantEvent to InvoiceLateFeeDueMerchantEvent](models/index-17.md)
- [InvoiceLateFeePolicy to InvoiceScheduleDueInvoiceDueDate](models/index-18.md)
- [InvoiceScheduleDueWrite to MerchantBillingBalanceResponse](models/index-19.md)
- [MerchantBillingBalanceUpdatedEvent to Order](models/index-20.md)
- [OrderActivity to OrderPaymentSourceSelection](models/index-21.md)
- [OrderPaymentSourceSelectionInput to PartnerAppPlatformTermsAcceptance](models/index-22.md)
- [PartnerAppPlatformUsage to PaymentLinkLineItemPatchRequestInput](models/index-23.md)
- [PaymentLinkLineItemRequest to PayoutDestinationArchivedInstalledMerchantsEvent](models/index-24.md)
- [PayoutDestinationArchivedMerchantEvent to ProductVariantUpdatedInstalledMerchantsEvent](models/index-25.md)
- [ProductVariantUpdatedMerchantEvent to ReaderPaymentSourceTip](models/index-26.md)
- [ReaderPaymentSourceTipInput to ResolvePaymentLinkTextModifierRequestInput](models/index-27.md)
- [ResourceReference to ReturnReasonSummary](models/index-28.md)
- [ReturnReceipt to RiskRuleResponse](models/index-29.md)
- [RotateGiftCardCodeRequest to SubscriptionBillingStartInputImported](models/index-30.md)
- [SubscriptionBillingStartInputImportedInput to SubscriptionPlanChangeScheduledMerchantEvent](models/index-31.md)
- [SubscriptionPlanLineItem to TaxCountryCoverage](models/index-32.md)
- [TaxCurrencyConversion to UpdateInventoryCountRequest](models/index-33.md)
- [UpdateInventoryCountRequestInput to UpdateSettingsRequestInput](models/index-34.md)
- [UpdateShipmentRequest to WorkloadIdentityResponse](models/index-35.md)

