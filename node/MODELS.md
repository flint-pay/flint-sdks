# Flint Public API models

[API reference](REFERENCE.md) · [Runtime guide](RUNTIME.md)

Fields describe the API's declared shape. Inputs omit read-only fields; responses omit write-only fields and preserve unknown fields and enum values. Request enums are closed unions; response enums accept unknown strings. Input types use the Input suffix.

int64/uint64 values are integer strings (TypeScript `${bigint}`); inputs also accept bigint. Decimal fields use exact numeric strings. Use each field's declared units.

Schema defaults are metadata; clients do not apply them. Field definitions apply to all variants. Rules under each condition specify presence and additional constraints. Composed alternative groups apply together: satisfy a variant from each numbered group.

## Index

- [AccessLink – BuyerOrderPaymentAttempt](models/index-1.md)
- [BuyerOrderResponse – CancelReturnRequestInput](models/index-2.md)
- [CancelReturnResolutionRequestInput – CreateCategoryRequest](models/index-3.md)
- [CreateCategoryRequestInput – CreateGiftCardNotificationRequestInput](models/index-4.md)
- [CreateGiftCardRedemptionRequest – CreateRefundRequestFull](models/index-5.md)
- [CreateRefundRequestFullInput – CreditNoteCorrectionRequestAmount](models/index-6.md)
- [CreditNoteCorrectionRequestAmountInput – DeliveryInventoryAssignmentRequest](models/index-7.md)
- [DeliveryInventoryAssignmentRequestInput – DeliveryProfileListResponse](models/index-8.md)
- [DeliveryProfileOriginPolicy – DeviceListResponse](models/index-9.md)
- [DeviceResponse – FulfillmentTransitionRequestMarkPickedInput](models/index-10.md)
- [FulfillmentTransitionRequestMarkPreparing – IncomingWebhook05f1b45d6cf6Payload](models/index-11.md)
- [IncomingWebhook062843b7e875Payload – IncomingWebhook7253fff5f748Payload](models/index-12.md)
- [IncomingWebhook72eec85cad89Payload – IncomingWebhookd5c9a344b9b1Payload](models/index-13.md)
- [IncomingWebhookd61edf29f9d2Payload – InventoryReceiptLineRequest](models/index-14.md)
- [InventoryReceiptLineRequestInput – InvoiceListResponse](models/index-15.md)
- [InvoiceManualPayment – ListReturnActivitiesResponse](models/index-16.md)
- [ListReturnDispositionsResponse – OrderCalculatedLineItemTaxInput](models/index-17.md)
- [OrderCharge – PackageItem](models/index-18.md)
- [PackageItemListResponse – PaymentReview](models/index-19.md)
- [PaymentReviewListResponse – PromotionRecurrenceRepeating](models/index-20.md)
- [PromotionRecurrenceRepeatingInput – ResolvePaymentLinkRequestInput](models/index-21.md)
- [ResolvePaymentLinkResponse – ReturnResolutionAdjustmentRequestInput](models/index-22.md)
- [ReturnResolutionExecutionBlocker – SkipMeSubscriptionCycleRequestInput](models/index-23.md)
- [SkipSubscriptionCycleRequest – SubscriptionServiceLocationInputCustomerAddressInput](models/index-24.md)
- [SubscriptionServiceLocationRequest – UpdateInvoicePaymentTermRequestInput](models/index-25.md)
- [UpdateInvoiceRequest – UpdateSubscriptionPlanRequest](models/index-26.md)
- [UpdateSubscriptionPlanRequestInput – Webhook_delivery_profile_archived_merchant](models/index-27.md)
- [Webhook_delivery_profile_created_installed_merchants – Webhook_inventory_transfer_departed_installed_merchants](models/index-28.md)
- [Webhook_inventory_transfer_departed_merchant – Webhook_order_refunded_merchant](models/index-29.md)
- [Webhook_order_updated_installed_merchants – Webhook_return_created_installed_merchants](models/index-30.md)
- [Webhook_return_created_merchant – WorkloadIdentityClaimCondition](models/index-31.md)
- [WorkloadIdentityClaimConditionRequest – WorkloadIdentityResponse](models/index-32.md)

