import { responsePayload as _sdkPayload, sdkResponse as _sdkResponse, payloadPages as _sdkPayloadPages, sdkResponsePages as _sdkResponsePages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { runtimeFromPlan, modelFromCodec, isKnownCodec } from '../runtime.js';
export { SdkError, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/paymentLinks.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';

const _sdkDescriptors = new DescriptorSource(settings, {["createPaymentLink"]:r0,["getPaymentLink"]:r0,["getPaymentLinkPublic"]:r0,["listPaymentLinks"]:r0,["resolvePaymentLink"]:r0,["updatePaymentLink"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.paymentLinks = Object.freeze({
      create: async (params, options) => this.#runtime.request("createPaymentLink", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      createWithResponse: async (params, options) => this.#runtime.request("createPaymentLink", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      get: async (payment_link_id, params, options) => this.#runtime.request("getPaymentLink", _sdkRequestInput([
  "payment_link_id"
], [payment_link_id], [
  "expand",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getWithResponse: async (payment_link_id, params, options) => this.#runtime.request("getPaymentLink", _sdkRequestInput([
  "payment_link_id"
], [payment_link_id], [
  "expand",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      getPublic: async (payment_link_id, params, options) => this.#runtime.request("getPaymentLinkPublic", _sdkRequestInput([
  "payment_link_id"
], [payment_link_id], [
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getPublicWithResponse: async (payment_link_id, params, options) => this.#runtime.request("getPaymentLinkPublic", _sdkRequestInput([
  "payment_link_id"
], [payment_link_id], [
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      list: async (params, options) => this.#runtime.request("listPaymentLinks", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "external_reference_id",
  "query",
  "payment_link_type",
  "has_plan",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listWithResponse: async (params, options) => this.#runtime.request("listPaymentLinks", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "external_reference_id",
  "query",
  "payment_link_type",
  "has_plan",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listPaymentLinks", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "external_reference_id",
  "query",
  "payment_link_type",
  "has_plan",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "Flint-Version"
], false, false, params), options), []),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listPaymentLinks", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "external_reference_id",
  "query",
  "payment_link_type",
  "has_plan",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "Flint-Version"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listPaymentLinks", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "external_reference_id",
  "query",
  "payment_link_type",
  "has_plan",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "Flint-Version"
], false, false, params), options),
      resolve: async (payment_link_id, params, options) => this.#runtime.request("resolvePaymentLink", _sdkRequestInput([
  "payment_link_id"
], [payment_link_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      resolveWithResponse: async (payment_link_id, params, options) => this.#runtime.request("resolvePaymentLink", _sdkRequestInput([
  "payment_link_id"
], [payment_link_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      update: async (payment_link_id, params, options) => this.#runtime.request("updatePaymentLink", _sdkRequestInput([
  "payment_link_id"
], [payment_link_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      updateWithResponse: async (payment_link_id, params, options) => this.#runtime.request("updatePaymentLink", _sdkRequestInput([
  "payment_link_id"
], [payment_link_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
    });
}
close() { return this.#runtime.close(); }
}
export { makePaymentLinkResponse } from '../models/PaymentLinkResponse.js';
export { makePublicPaymentLinkResponse } from '../models/PublicPaymentLinkResponse.js';
export { makePaymentLinkListResponse } from '../models/PaymentLinkListResponse.js';
export { makePaymentLink } from '../models/PaymentLink.js';
export { makeCheckoutSessionLaunchResponse } from '../models/CheckoutSessionLaunchResponse.js';
export { makeResponseMeta } from '../models/ResponseMeta.js';
export { makeResponseWarning } from '../models/ResponseWarning.js';
export { makeNextAction } from '../models/NextAction.js';
export { makeNextActionMerchantAccountSession } from '../models/NextActionMerchantAccountSession.js';
export { makeMoneyValue } from '../models/MoneyValue.js';
export { makePublicPaymentLinkResult } from '../models/PublicPaymentLinkResult.js';
export { makeThemeConfig } from '../models/ThemeConfig.js';
export { makeImage } from '../models/Image.js';
export { makePublicPaymentLink } from '../models/PublicPaymentLink.js';
export { makePaymentLinkCustomField } from '../models/PaymentLinkCustomField.js';
export { makeCheckoutCustomTextWriteConfig } from '../models/CheckoutCustomTextWriteConfig.js';
export { makePaymentLinkEventConfig } from '../models/PaymentLinkEventConfig.js';
export { makeLegalSettings } from '../models/LegalSettings.js';
export { makePaymentLinkLineItem } from '../models/PaymentLinkLineItem.js';
export { makeOrderLineItemTax } from '../models/OrderLineItemTax.js';
export { makeCheckoutPaymentConfig } from '../models/CheckoutPaymentConfig.js';
export { makePublicResolvedLineItemInfo } from '../models/PublicResolvedLineItemInfo.js';
export { makePublicResolvedModifierGroup } from '../models/PublicResolvedModifierGroup.js';
export { makePublicResolvedModifierOption } from '../models/PublicResolvedModifierOption.js';
export { makePublicResolvedTextModifier } from '../models/PublicResolvedTextModifier.js';
export { makePublicResolvedBundleComponent } from '../models/PublicResolvedBundleComponent.js';
export { makePublicResolvedBundleVariantSummary } from '../models/PublicResolvedBundleVariantSummary.js';
export { makeSelectedProductOption } from '../models/SelectedProductOption.js';
export { makePaymentLinkSubscriptionPreview } from '../models/PaymentLinkSubscriptionPreview.js';
export { makePaymentLinkCustomerConfig } from '../models/PaymentLinkCustomerConfig.js';
export { makeCheckoutExpirationConfig } from '../models/CheckoutExpirationConfig.js';
export { makeInventoryRoutingSourceRequest } from '../models/InventoryRoutingSourceRequest.js';
export { makeCheckoutPromotionConfig } from '../models/CheckoutPromotionConfig.js';
export { makeCheckoutRedirectsConfig } from '../models/CheckoutRedirectsConfig.js';
export { makeSubscriptionIntervalOption } from '../models/SubscriptionIntervalOption.js';
export { makeSubscriptionPlanLineItem } from '../models/SubscriptionPlanLineItem.js';
export { makeBundleComponent } from '../models/BundleComponent.js';
export { makeBundleComponentVariantSummary } from '../models/BundleComponentVariantSummary.js';
export { makeCategoryReference } from '../models/CategoryReference.js';
export { makeOrderLineItemModifier } from '../models/OrderLineItemModifier.js';
export { makeTextModifierRequest } from '../models/TextModifierRequest.js';
export { makeSubscriptionPlanSwapVariant } from '../models/SubscriptionPlanSwapVariant.js';
export { makeCheckoutTaxConfig } from '../models/CheckoutTaxConfig.js';
export { makeCheckoutTipConfig } from '../models/CheckoutTipConfig.js';
export { makeCheckoutSessionLaunchResult } from '../models/CheckoutSessionLaunchResult.js';
export { makeCheckoutAccess } from '../models/CheckoutAccess.js';
export { makeCheckoutSession } from '../models/CheckoutSession.js';
export { makeOrderPaymentAttempt } from '../models/OrderPaymentAttempt.js';
export { makePaymentAttemptGiftCardRedemption } from '../models/PaymentAttemptGiftCardRedemption.js';
export { makePaymentAttemptPaymentIntent } from '../models/PaymentAttemptPaymentIntent.js';
export { makePaymentErrorSummary } from '../models/PaymentErrorSummary.js';
export { makeErrorRemediation } from '../models/ErrorRemediation.js';
export { makePendingPaymentAction } from '../models/PendingPaymentAction.js';
export { makePaymentClientAction } from '../models/PaymentClientAction.js';
export { makeStripePaymentClientAction } from '../models/StripePaymentClientAction.js';
export { makeStripePaymentIntentClientAction } from '../models/StripePaymentIntentClientAction.js';
export { makeStripeSetupIntentClientAction } from '../models/StripeSetupIntentClientAction.js';
export { makePendingPaymentActionSubject } from '../models/PendingPaymentActionSubject.js';
export { makePendingPaymentActionPaymentIntentSubject } from '../models/PendingPaymentActionPaymentIntentSubject.js';
export { makePendingPaymentActionSetupPaymentSourceSubject } from '../models/PendingPaymentActionSetupPaymentSourceSubject.js';
export { makeCheckoutBuyerContact } from '../models/CheckoutBuyerContact.js';
export { makeCheckoutCustomerConfig } from '../models/CheckoutCustomerConfig.js';
export { makePrefilledCustomerInfo } from '../models/PrefilledCustomerInfo.js';
export { makePostalAddress } from '../models/PostalAddress.js';
export { makeCheckoutCustomerPrefill } from '../models/CheckoutCustomerPrefill.js';
export { makeCheckoutDeliveryPinnedDependency } from '../models/CheckoutDeliveryPinnedDependency.js';
export { makeDeliveryQuoteChoiceGroupResource } from '../models/DeliveryQuoteChoiceGroupResource.js';
export { makeDeliveryCandidateOutcomeResource } from '../models/DeliveryCandidateOutcomeResource.js';
export { makeDeliveryAddressAdvisoryResource } from '../models/DeliveryAddressAdvisoryResource.js';
export { makeDeliveryAddressRequest } from '../models/DeliveryAddressRequest.js';
export { makeDeliveryInputRequirement } from '../models/DeliveryInputRequirement.js';
export { makeDeliveryInputConstraint } from '../models/DeliveryInputConstraint.js';
export { makeDeliveryWindowResource } from '../models/DeliveryWindowResource.js';
export { makeDeliveryOptionProjection } from '../models/DeliveryOptionProjection.js';
export { makeDeliveryArrivalEstimate } from '../models/DeliveryArrivalEstimate.js';
export { makeBuyerInstructionsConfig } from '../models/BuyerInstructionsConfig.js';
export { makeDeliveryPlan } from '../models/DeliveryPlan.js';
export { makeDeliveryQuoteExecutionLegResource } from '../models/DeliveryQuoteExecutionLegResource.js';
export { makeDeliveryShipmentDetails } from '../models/DeliveryShipmentDetails.js';
export { makeDeliveryPickupDetails } from '../models/DeliveryPickupDetails.js';
export { makeDeliveryLocationSummaryResource } from '../models/DeliveryLocationSummaryResource.js';
export { makeDeliveryAddressResource } from '../models/DeliveryAddressResource.js';
export { makeDeliveryRecipientRequirement } from '../models/DeliveryRecipientRequirement.js';
export { makeDeliveryQuoteLineItemResource } from '../models/DeliveryQuoteLineItemResource.js';
export { makeDeliveryMerchantDiagnostic } from '../models/DeliveryMerchantDiagnostic.js';
export { makeDeliveryEligibilityMismatch } from '../models/DeliveryEligibilityMismatch.js';
export { makeBuyerDeliveryQuoteChoiceGroupResource } from '../models/BuyerDeliveryQuoteChoiceGroupResource.js';
export { makeBuyerDeliveryInputRequirementResource } from '../models/BuyerDeliveryInputRequirementResource.js';
export { makeBuyerDeliveryOptionResource } from '../models/BuyerDeliveryOptionResource.js';
export { makeCheckoutGiftCardChallenge } from '../models/CheckoutGiftCardChallenge.js';
export { makeCheckoutMerchantSupport } from '../models/CheckoutMerchantSupport.js';
export { makePricingAmounts } from '../models/PricingAmounts.js';
export { makeSettlementAmounts } from '../models/SettlementAmounts.js';
export { makeSignedMoney } from '../models/SignedMoney.js';
export { makePaymentCollection } from '../models/PaymentCollection.js';
export { makePaymentCollectionStripe } from '../models/PaymentCollectionStripe.js';
export { makeSelectableOrderPaymentIntent } from '../models/SelectableOrderPaymentIntent.js';
export { makeExpandedPaymentIntentSummary } from '../models/ExpandedPaymentIntentSummary.js';
export { makePaymentSourceSummary } from '../models/PaymentSourceSummary.js';
export { makePaymentSourceAchDebitSummary } from '../models/PaymentSourceAchDebitSummary.js';
export { makePaymentSourceCardSummary } from '../models/PaymentSourceCardSummary.js';
export { makeCheckoutPaymentMethodSave } from '../models/CheckoutPaymentMethodSave.js';
export { makeCheckoutProblemResource } from '../models/CheckoutProblemResource.js';
export { makeCheckoutSubscriptionTerms } from '../models/CheckoutSubscriptionTerms.js';
export { makeCheckoutSubscriptionRecurringShipping } from '../models/CheckoutSubscriptionRecurringShipping.js';
