# Flint Public API models

[API reference](REFERENCE.md) · [Runtime guide](RUNTIME.md)

Fields describe the API's declared shape. Inputs omit read-only fields; responses omit write-only fields and preserve unknown fields and enum values. Request enums are closed unions; response enums accept unknown strings. Input types use the Input suffix.

Integer counters such as version use number with a safe range of ±(2^53 − 1); values outside that range fail without rounding. Integers inside exact components (Money) remain exact strings (TypeScript `${bigint}`; inputs also accept bigint). Money amounts stay exact strings when their component is listed. Sum money amounts with `BigInt(a.amount) + BigInt(b.amount)`. Decimal fields use exact numeric strings. Use each field's declared units.

Schema defaults are metadata; clients do not apply them. Field definitions apply to all variants. Rules under each condition specify presence and additional constraints. Composed alternative groups apply together: satisfy a variant from each numbered group.

## Index

- [AccessLink to BuyerFulfillment](models/index-1.md)
- [BuyerFulfillmentEvent to BuyerSubscriptionPreview](models/index-2.md)
- [BuyerSubscriptionPreviewResponse to CheckoutSessionWithSecret](models/index-3.md)
- [CheckoutSettings to CreateDeliveryMethodRequestLocalDelivery](models/index-4.md)
- [CreateDeliveryMethodRequestLocalDeliveryInput to CreateInvoiceQuickPayRequestInput](models/index-5.md)
- [CreateInvoiceRequest to CreateReturnDispositionRequestInput](models/index-6.md)
- [CreateReturnDispositionRequestInspectionLine to CreditNoteAllocation](models/index-7.md)
- [CreditNoteAllocationCreatedInstalledMerchantsEvent to DeliveryBuyerLocationInputAddressInput](models/index-8.md)
- [DeliveryBuyerLocationInputCoordinate to DeliveryOptionProjection](models/index-9.md)
- [DeliveryPendingCallerRateRequest to DeliveryQuoteLineItemResource](models/index-10.md)
- [DeliveryQuoteListResponse to DeliveryZoneResponse](models/index-11.md)
- [DeliveryZoneUpdatedInstalledMerchantsEvent to FulfillmentFailedMerchantEvent](models/index-12.md)
- [FulfillmentHold to GiftCardNotification](models/index-13.md)
- [GiftCardNotificationCreatedInstalledMerchantsEvent to InventoryCountTransitionRequestApply](models/index-14.md)
- [InventoryCountTransitionRequestApplyInput to InventoryTransferResponse](models/index-15.md)
- [InventoryTransferResult to InvoicePaymentAttemptFailedInstalledMerchantsEvent](models/index-16.md)
- [InvoicePaymentAttemptFailedMerchantEvent to IssueSandboxAPIKeyRequestFull](models/index-17.md)
- [IssueSandboxAPIKeyRequestFullInput to ModifierSetUpdatedInstalledMerchantsEvent](models/index-18.md)
- [ModifierSetUpdatedMerchantEvent to OrderPaymentIntentSelectionAttachedInput](models/index-19.md)
- [OrderPaymentIntentSelectionPaymentMethod to PartnerAppInstallResponse](models/index-20.md)
- [PartnerAppInstallRevokedEvent to PaymentLinkPaymentConfigInput](models/index-21.md)
- [PaymentLinkPaymentPatchRequest to Product](models/index-22.md)
- [ProductArchivedInstalledMerchantsEvent to PublicPaymentLinkResponse](models/index-23.md)
- [PublicPaymentLinkResult to ResourceTimelineEntry](models/index-24.md)
- [ResourceTimelineImageMutationEntry to ReturnReceiptLineItemRequest](models/index-25.md)
- [ReturnReceiptLineItemRequestInput to RotateGiftCardCodeResult](models/index-26.md)
- [RotateGiftCardCodeResultResponse to SubscriptionDeliveryActionRequiredMerchantEvent](models/index-27.md)
- [SubscriptionDeliveryDestination to SubscriptionServiceLocationRequest](models/index-28.md)
- [SubscriptionServiceLocationRequestInput to UpdateDeliveryZoneRequest](models/index-29.md)
- [UpdateDeliveryZoneRequestInput to UpdateReturnResolutionRequestInput](models/index-30.md)
- [UpdateRiskListRequest to WorkloadIdentityResponse](models/index-31.md)

