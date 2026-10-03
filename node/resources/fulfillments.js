import { responsePayload as _sdkPayload, sdkResponse as _sdkResponse, payloadPages as _sdkPayloadPages, sdkResponsePages as _sdkResponsePages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { runtimeFromPlan, modelFromCodec, isKnownCodec } from '../runtime.js';
export { SdkError, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/fulfillments.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';

const _sdkDescriptors = new DescriptorSource(settings, {["createFulfillmentEvent"]:r0,["createShipment"]:r0,["getFulfillment"]:r0,["listFulfillments"]:r0,["transitionFulfillment"]:r0,["updateFulfillment"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.fulfillments = Object.freeze({
      createEvent: async (fulfillment_id, params, options) => this.#runtime.request("createFulfillmentEvent", _sdkRequestInput([
  "fulfillment_id"
], [fulfillment_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      createEventWithResponse: async (fulfillment_id, params, options) => this.#runtime.request("createFulfillmentEvent", _sdkRequestInput([
  "fulfillment_id"
], [fulfillment_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      createShipment: async (fulfillment_id, params, options) => this.#runtime.request("createShipment", _sdkRequestInput([
  "fulfillment_id"
], [fulfillment_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      createShipmentWithResponse: async (fulfillment_id, params, options) => this.#runtime.request("createShipment", _sdkRequestInput([
  "fulfillment_id"
], [fulfillment_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      get: async (fulfillment_id, params, options) => this.#runtime.request("getFulfillment", _sdkRequestInput([
  "fulfillment_id"
], [fulfillment_id], [
  "expand",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getWithResponse: async (fulfillment_id, params, options) => this.#runtime.request("getFulfillment", _sdkRequestInput([
  "fulfillment_id"
], [fulfillment_id], [
  "expand",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      list: async (params, options) => this.#runtime.request("listFulfillments", _sdkRequestInput([], [], [
  "expand",
  "order_id",
  "page_size",
  "page_token",
  "external_reference_id",
  "query",
  "status",
  "type",
  "location_id",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "sort_direction",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listWithResponse: async (params, options) => this.#runtime.request("listFulfillments", _sdkRequestInput([], [], [
  "expand",
  "order_id",
  "page_size",
  "page_token",
  "external_reference_id",
  "query",
  "status",
  "type",
  "location_id",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "sort_direction",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listFulfillments", _sdkRequestInput([], [], [
  "expand",
  "order_id",
  "page_size",
  "page_token",
  "external_reference_id",
  "query",
  "status",
  "type",
  "location_id",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "sort_direction",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options), []),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listFulfillments", _sdkRequestInput([], [], [
  "expand",
  "order_id",
  "page_size",
  "page_token",
  "external_reference_id",
  "query",
  "status",
  "type",
  "location_id",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "sort_direction",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listFulfillments", _sdkRequestInput([], [], [
  "expand",
  "order_id",
  "page_size",
  "page_token",
  "external_reference_id",
  "query",
  "status",
  "type",
  "location_id",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "sort_direction",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options),
      transition: (input = {}, options) => this.#runtime.request("transitionFulfillment", input, options).then(result => _sdkPayload(result, ["data"])),
      transitionWithResponse: (input = {}, options) => this.#runtime.request("transitionFulfillment", input, options).then(_sdkResponse),
      update: async (fulfillment_id, params, options) => this.#runtime.request("updateFulfillment", _sdkRequestInput([
  "fulfillment_id"
], [fulfillment_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      updateWithResponse: async (fulfillment_id, params, options) => this.#runtime.request("updateFulfillment", _sdkRequestInput([
  "fulfillment_id"
], [fulfillment_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
    });
}
close() { return this.#runtime.close(); }
}
export { makeFulfillmentEventResponse } from '../models/FulfillmentEventResponse.js';
export { makeCreateShipmentResponse } from '../models/CreateShipmentResponse.js';
export { makeFulfillmentResponse } from '../models/FulfillmentResponse.js';
export { makeFulfillmentListResponse } from '../models/FulfillmentListResponse.js';
export { makeFulfillment } from '../models/Fulfillment.js';
export { makeFulfillmentCommandResponse } from '../models/FulfillmentCommandResponse.js';
export { makeOrderResponse } from '../models/OrderResponse.js';
export { makeFulfillmentEventResult } from '../models/FulfillmentEventResult.js';
export { makeFulfillmentEvent } from '../models/FulfillmentEvent.js';
export { makePricingAmounts } from '../models/PricingAmounts.js';
export { makeMoneyValue } from '../models/MoneyValue.js';
export { makeSettlementAmounts } from '../models/SettlementAmounts.js';
export { makeSignedMoney } from '../models/SignedMoney.js';
export { makeFulfillmentNotification } from '../models/FulfillmentNotification.js';
export { makePackage } from '../models/Package.js';
export { makeShippingDimensions } from '../models/ShippingDimensions.js';
export { makeReturnShipmentLineItemAllocation } from '../models/ReturnShipmentLineItemAllocation.js';
export { makeShippingWeight } from '../models/ShippingWeight.js';
export { makeShipment } from '../models/Shipment.js';
export { makeResponseMeta } from '../models/ResponseMeta.js';
export { makeResponseWarning } from '../models/ResponseWarning.js';
export { makeNextAction } from '../models/NextAction.js';
export { makeCreateShipmentResult } from '../models/CreateShipmentResult.js';
export { makeFulfillmentChargeLink } from '../models/FulfillmentChargeLink.js';
export { makeDigitalFulfillmentDetails } from '../models/DigitalFulfillmentDetails.js';
export { makeFulfillmentLineItem } from '../models/FulfillmentLineItem.js';
export { makeOrderLineItemModifier } from '../models/OrderLineItemModifier.js';
export { makeTextModifierRequest } from '../models/TextModifierRequest.js';
export { makeDeliveryFulfillmentDetails } from '../models/DeliveryFulfillmentDetails.js';
export { makeExpandedPackageSummary } from '../models/ExpandedPackageSummary.js';
export { makePickupFulfillmentDetails } from '../models/PickupFulfillmentDetails.js';
export { makeFulfillmentRecipient } from '../models/FulfillmentRecipient.js';
export { makePostalAddress } from '../models/PostalAddress.js';
export { makeServiceFulfillmentDetails } from '../models/ServiceFulfillmentDetails.js';
export { makeExpandedShipmentSummary } from '../models/ExpandedShipmentSummary.js';
export { makeFulfillmentCommandResult } from '../models/FulfillmentCommandResult.js';
export { makeOrder } from '../models/Order.js';
export { makePaymentAttemptGiftCardRedemption } from '../models/PaymentAttemptGiftCardRedemption.js';
export { makePaymentAttemptPaymentIntent } from '../models/PaymentAttemptPaymentIntent.js';
export { makePaymentErrorSummary } from '../models/PaymentErrorSummary.js';
export { makeErrorRemediation } from '../models/ErrorRemediation.js';
export { makePendingPaymentAction } from '../models/PendingPaymentAction.js';
export { makeStripePaymentClientAction } from '../models/StripePaymentClientAction.js';
export { makeAppliedDiscount } from '../models/AppliedDiscount.js';
export { makeBuyerAction } from '../models/BuyerAction.js';
export { makeOrderCharge } from '../models/OrderCharge.js';
export { makeOrderCalculatedChargeTax } from '../models/OrderCalculatedChargeTax.js';
export { makeTaxCalculationRequest } from '../models/TaxCalculationRequest.js';
export { makeTaxComponentRequest } from '../models/TaxComponentRequest.js';
export { makeTaxJurisdiction } from '../models/TaxJurisdiction.js';
export { makeOrderDeliveryDestinationAddress } from '../models/OrderDeliveryDestinationAddress.js';
export { makeOrderDeliveryDestinationRecipient } from '../models/OrderDeliveryDestinationRecipient.js';
export { makeGiftCardMoney } from '../models/GiftCardMoney.js';
export { makeOrderGiftCardAllocation } from '../models/OrderGiftCardAllocation.js';
export { makeOrderGiftCardSettlement } from '../models/OrderGiftCardSettlement.js';
export { makeOrderGiftCardSelection } from '../models/OrderGiftCardSelection.js';
export { makeOrderLineItem } from '../models/OrderLineItem.js';
export { makeBundleComponent } from '../models/BundleComponent.js';
export { makeSelectedProductOption } from '../models/SelectedProductOption.js';
export { makeCategoryReference } from '../models/CategoryReference.js';
export { makeGiftCardProductConfiguration } from '../models/GiftCardProductConfiguration.js';
export { makeGiftCardCustomAmountBounds } from '../models/GiftCardCustomAmountBounds.js';
export { makeGiftCardPurchaseRecipient } from '../models/GiftCardPurchaseRecipient.js';
export { makeImage } from '../models/Image.js';
export { makeLineItemInventorySnapshot } from '../models/LineItemInventorySnapshot.js';
export { makeLineItemInventoryDemand } from '../models/LineItemInventoryDemand.js';
export { makePurchasedGiftCard } from '../models/PurchasedGiftCard.js';
export { makeOrderCalculatedLineItemTax } from '../models/OrderCalculatedLineItemTax.js';
export { makePaymentCollectionStripe } from '../models/PaymentCollectionStripe.js';
export { makeSelectableOrderPaymentIntent } from '../models/SelectableOrderPaymentIntent.js';
export { makePaymentCollection } from '../models/PaymentCollection.js';
export { makeExpandedPaymentIntentSummary } from '../models/ExpandedPaymentIntentSummary.js';
export { makePaymentSourceSummary } from '../models/PaymentSourceSummary.js';
export { makePaymentSourceAchDebitSummary } from '../models/PaymentSourceAchDebitSummary.js';
export { makePaymentSourceCardSummary } from '../models/PaymentSourceCardSummary.js';
export { makeRequestedTip } from '../models/RequestedTip.js';
export { makeOrderReturnCreditSettlement } from '../models/OrderReturnCreditSettlement.js';
export { makeSubscriptionPlanLineItem } from '../models/SubscriptionPlanLineItem.js';
export { makeOrderLineItemTax } from '../models/OrderLineItemTax.js';
export { makeOrderTaxExemption } from '../models/OrderTaxExemption.js';
export { makeOrderTaxLocation } from '../models/OrderTaxLocation.js';
export { makeTaxBreakdown } from '../models/TaxBreakdown.js';
export { makeTip } from '../models/Tip.js';
export { makeTipPaymentIntentAllocation } from '../models/TipPaymentIntentAllocation.js';
export { makeTipValueSettlementAllocation } from '../models/TipValueSettlementAllocation.js';
