# Flint Public API models

[API reference](REFERENCE.md) · [Runtime guide](RUNTIME.md)

Fields describe the API's declared shape. Inputs omit read-only fields; responses omit write-only fields and preserve unknown fields and enum values. Request enums are closed unions; response enums accept unknown strings. Input types use the Input suffix.

int64/uint64 values are integer strings (TypeScript `${bigint}`); inputs also accept bigint. Decimal fields use exact numeric strings. Use each field's declared units.

Schema defaults are metadata; clients do not apply them. Field definitions apply to all variants. Rules under each condition specify presence and additional constraints. Composed alternative groups apply together: satisfy a variant from each numbered group.

## Index

- [AccessLink – BuyerGiftCardTransactionListResponse](models/index-1.md)
- [BuyerInstructionsConfig – CallerSuppliedDeliveryOutcomeRequestAvailable](models/index-2.md)
- [CallerSuppliedDeliveryOutcomeRequestAvailableInput – ConfirmPaymentIntentRequestAttached](models/index-3.md)
- [ConfirmPaymentIntentRequestAttachedInput – CreateEmailChangeRequestInput](models/index-4.md)
- [CreateFeedbackReportNarrative – CreateOrderDiscountPromotion](models/index-5.md)
- [CreateOrderDiscountPromotionInput – CreateReturnResolutionPreviewRequestCorrection](models/index-6.md)
- [CreateReturnResolutionPreviewRequestCorrectionInput – CustomerAddress](models/index-7.md)
- [CustomerAddressListResponse – DeliveryMethodOriginSelectorFixedLocation](models/index-8.md)
- [DeliveryMethodOriginSelectorInputAllocatedOriginGroup – DeliveryProfileOriginPolicyInputInventoryRoutingInput](models/index-9.md)
- [DeliveryProfileOriginPolicyInputMethodOrigin – DisconnectTaxConnectionRequestInput](models/index-10.md)
- [DisconnectTaxConnectionResponse – FulfillmentTransitionRequestMarkPackedInput](models/index-11.md)
- [FulfillmentTransitionRequestMarkPicked – ImageRequest](models/index-12.md)
- [ImageRequestInput – IncomingWebhook6e888acafb4bPayload](models/index-13.md)
- [IncomingWebhook6ec2eb9e3a41Payload – IncomingWebhookd299182c6639Payload](models/index-14.md)
- [IncomingWebhookd386b30cf8bcPayload – InventoryMovementResponse](models/index-15.md)
- [InventoryOriginPolicy – InvoiceLateFeePolicyFixed](models/index-16.md)
- [InvoiceLateFeePolicyFixedInput – LegalSettings](models/index-17.md)
- [LegalSettingsRequest – OnboardingVerifyEmailResult](models/index-18.md)
- [Order – OrderTaxRequest](models/index-19.md)
- [OrderTaxRequestInput – PaymentLinkEventConfigPatchRequestInput](models/index-20.md)
- [PaymentLinkEventConfigRequestInput – ProcessExistingReturnLineItemRequest](models/index-21.md)
- [ProcessExistingReturnLineItemRequestInput – RefreshCustomerSessionRequestInput](models/index-22.md)
- [Refund – ReturnInspectionLineItemRequestInput](models/index-23.md)
- [ReturnLineDecision – RiskList](models/index-24.md)
- [RiskListItem – SubscriptionBillingScheduleUpdateInputExternal](models/index-25.md)
- [SubscriptionBillingScheduleUpdateInputExternalInput – TaxCalculationRequestInput](models/index-26.md)
- [TaxCalculationRequestRequestInput – UpdateLineItemRequestInput](models/index-27.md)
- [UpdateLocationRequest – UpdateTaxRegistrationRequest](models/index-28.md)
- [UpdateTaxRegistrationRequestInput – Webhook_delivery_profile_created_merchant](models/index-29.md)
- [Webhook_delivery_profile_deactivated_installed_merchants – Webhook_inventory_transfer_lost_installed_merchants](models/index-30.md)
- [Webhook_inventory_transfer_lost_merchant – Webhook_order_updated_merchant](models/index-31.md)
- [Webhook_package_created_installed_merchants – Webhook_return_decision_recorded_installed_merchants](models/index-32.md)
- [Webhook_return_decision_recorded_merchant – WebhookStreamWithheld](models/index-33.md)
- [Weight – WorkloadIdentityResponse](models/index-34.md)

