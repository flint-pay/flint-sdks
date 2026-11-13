# Flint Public API models

[API reference](REFERENCE.md) · [Runtime guide](RUNTIME.md)

Fields describe the API's declared shape. Inputs omit read-only fields; responses omit write-only fields and preserve unknown fields and enum values. Request enums are closed unions; response enums accept unknown strings. Input types use the Input suffix.

Integer counters such as version use number with a safe range of ±(2^53 − 1); values outside that range fail without rounding. Integers inside exact components (Money) remain exact strings (TypeScript `${bigint}`; inputs also accept bigint). Money amounts stay exact strings when their component is listed. Sum money amounts with `BigInt(a.amount) + BigInt(b.amount)`. Decimal fields use exact numeric strings. Use each field's declared units.

Schema defaults are metadata; clients do not apply them. Field definitions apply to all variants. Rules under each condition specify presence and additional constraints. Composed alternative groups apply together: satisfy a variant from each numbered group.

## Index

- [AcceptFulfillmentRequestInput to BuyerCreateReturnRequestInput](models/index-1.md)
- [BuyerCreateReturnResolutionPreviewRequest to BuyerReturnReplacementLineItemRequestInput](models/index-2.md)
- [BuyerReturnResolution to ChangeSubscriptionPlanRequestInput](models/index-3.md)
- [ChangeSubscriptionQuantityRequest to ConfirmPaymentIntentRequest](models/index-4.md)
- [ConfirmPaymentIntentRequestInput to CreateDeliveryRateCallbackRequest](models/index-5.md)
- [CreateDeliveryRateCallbackRequestInput to CreateInvoiceRequestOrderInput](models/index-6.md)
- [CreateInvoiceRequestQuickPay to CreatePriceListRequestInput](models/index-7.md)
- [CreateProductOptionRequest to CreateSubscriptionLineItemRequestBundle](models/index-8.md)
- [CreateSubscriptionLineItemRequestBundleInput to CustomerDeletionRequestProcessingEvent](models/index-9.md)
- [CustomerDeletionRequestRejectedEvent to DeliveryInventoryAssignmentRequest](models/index-10.md)
- [DeliveryInventoryAssignmentRequestInput to DeliveryPricingStrategyInputCallback](models/index-11.md)
- [DeliveryPricingStrategyInputCallbackInput to DeliveryRateEvaluationResponseInput](models/index-12.md)
- [DeliveryRateEvaluationWindow to DisputeNeedsResponseMerchantEvent](models/index-13.md)
- [DisputePreventedInstalledMerchantsEvent to FulfillmentSinglePackageRequestInput](models/index-14.md)
- [FulfillmentUpdatedInstalledMerchantsEvent to ImageInputFileInput](models/index-15.md)
- [ImageInputSourceURL to InventoryReservationReleasedInstalledMerchantsEvent](models/index-16.md)
- [InventoryReservationReleasedMerchantEvent to InvoiceLineItem](models/index-17.md)
- [InvoiceListResponse to InvoiceScheduleEntryWriteInput](models/index-18.md)
- [InvoiceScheduleEntryWriteBalance to MerchantReadinessUpdatedInstalledMerchantsEvent](models/index-19.md)
- [MerchantReadinessUpdatedMerchantEvent to OrderChargeInputPercent](models/index-20.md)
- [OrderChargeInputPercentInput to OrderPaymentSourceSelectionInput](models/index-21.md)
- [OrderRefundedInstalledMerchantsEvent to PartnerAppPlatformUsage](models/index-22.md)
- [PartnerAppResponse to PaymentLinkLineItemRequest](models/index-23.md)
- [PaymentLinkLineItemRequestInput to PayoutDestinationArchivedMerchantEvent](models/index-24.md)
- [PayoutDestinationCreatedInstalledMerchantsEvent to ProductVariantUpdatedMerchantEvent](models/index-25.md)
- [Promotion to ReaderPaymentSourceTipInput](models/index-26.md)
- [ReaderResponse to ResourceTimelineImageMutationEntry](models/index-27.md)
- [ResourceTimelineResponse to ReturnReceiptLineItemInputExcessInput](models/index-28.md)
- [ReturnReceiptLineItemInputMatched to RotatePartnerAppSecretResponse](models/index-29.md)
- [RotateWebhookSecretRequest to SubscriptionCanceledInstalledMerchantsEvent](models/index-30.md)
- [SubscriptionCanceledMerchantEvent to SubscriptionPlanLineItemInputCustomInput](models/index-31.md)
- [SubscriptionPlanLineItemInputVariant to TaxJurisdiction](models/index-32.md)
- [TaxJurisdictionRequestInput to UpdateInventoryTransferRequestInput](models/index-33.md)
- [UpdateInvoicePaymentTermRequest to UpdateSubscriptionPlanLineItemInputCustom](models/index-34.md)
- [UpdateSubscriptionPlanLineItemInputCustomInput to WorkloadIdentityResponse](models/index-35.md)

