# Flint Public API models

[API reference](REFERENCE.md) · [Runtime guide](RUNTIME.md)

Fields describe the API's declared shape. Inputs omit read-only fields; responses omit write-only fields and preserve unknown fields and enum values. Request enums are closed unions; response enums accept unknown strings. Input types use the Input suffix.

int64/uint64 values are integer strings (TypeScript `${bigint}`); inputs also accept bigint. Decimal fields use exact numeric strings. Use each field's declared units.

Schema defaults are metadata; clients do not apply them. Field definitions apply to all variants. Rules under each condition specify presence and additional constraints. Composed alternative groups apply together: satisfy a variant from each numbered group.

## Index

- [AccessLink – BuyerOrderPaymentAttempt](models/index-1.md)
- [BuyerOrderResponse – CapabilityReadiness](models/index-2.md)
- [CaptureOrderPaymentRequest – CreateCheckoutDeliveryQuoteRequest](models/index-3.md)
- [CreateCheckoutDeliveryQuoteRequestInput – CreateGiftCardRedemptionRequestInput](models/index-4.md)
- [CreateGiftCardRedemptionRequestAutomatic – CreateRefundRequestTargets](models/index-5.md)
- [CreateRefundRequestTargetsInput – CreditNoteLineItemRequest](models/index-6.md)
- [CreditNoteLineItemRequestInput – DeliveryLocationSetResponse](models/index-7.md)
- [DeliveryLocationSummaryResource – DeliveryProfileOriginPolicyInputMethodOriginInput](models/index-8.md)
- [DeliveryProfileOriginPolicyRequest – DiscountPreviewRequestInput](models/index-9.md)
- [DiscountPreviewResponse – FulfillmentTransitionRequestSchedule](models/index-10.md)
- [FulfillmentTransitionRequestScheduleInput – IncomingWebhook0d891c599afbPayload](models/index-11.md)
- [IncomingWebhook0ed7a866163aPayload – IncomingWebhook78590778ef68Payload](models/index-12.md)
- [IncomingWebhook78dd0ab94c35Payload – IncomingWebhookdb74c29bf1ffPayload](models/index-13.md)
- [IncomingWebhookdc1126d5a87dPayload – InventoryReservationLine](models/index-14.md)
- [InventoryReservationListResponse – InvoicePaymentAttemptListResponse](models/index-15.md)
- [InvoicePaymentAttemptResponse – ListReturnReceiptsResponse](models/index-16.md)
- [ListReturnResolutionsResponse – OrderChargeTaxAssignment](models/index-17.md)
- [OrderChargeTaxAssignmentInput – PackageItemResponse](models/index-18.md)
- [PackageListResponse – PaymentReviewPaymentSummary](models/index-19.md)
- [PaymentReviewResolutionFailure – PromotionRefRequest](models/index-20.md)
- [PromotionRefRequestInput – ResourceReference](models/index-21.md)
- [ResourceTimeline – ReverseInvoiceManualPaymentRequestInput](models/index-22.md)
- [RevokeDeliveryDependencyRequest – SubscriptionBillingScheduleRequest](models/index-23.md)
- [SubscriptionBillingScheduleRequestInput – TaxIdentityPatch](models/index-24.md)
- [TaxIdentityPatchInput – UpdateOrderChargeRequest](models/index-25.md)
- [UpdateOrderChargeRequestInput – Webhook_bundle_archived_merchant](models/index-26.md)
- [Webhook_bundle_created_installed_merchants – Webhook_delivery_zone_archived_merchant](models/index-27.md)
- [Webhook_delivery_zone_created_installed_merchants – Webhook_invoice_issued_installed_merchants](models/index-28.md)
- [Webhook_invoice_issued_merchant – Webhook_payment_intent_requires_action_merchant](models/index-29.md)
- [Webhook_payment_intent_requires_capture_installed_merchants – Webhook_return_resolution_updated_installed_merchants](models/index-30.md)
- [Webhook_return_resolution_updated_merchant – WorkloadIdentityResponse](models/index-31.md)

