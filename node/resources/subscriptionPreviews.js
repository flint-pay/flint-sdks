import { responsePayload as _sdkPayload, sdkResponse as _sdkResponse, payloadPages as _sdkPayloadPages, sdkResponsePages as _sdkResponsePages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { runtimeFromPlan, modelFromCodec, isKnownCodec } from '../runtime.js';
export { SdkError, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/subscriptionPreviews.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';

const _sdkDescriptors = new DescriptorSource(settings, {["createSubscriptionPreview"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.subscriptionPreviews = Object.freeze({
      create: (input = {}, options) => this.#runtime.request("createSubscriptionPreview", input, options).then(result => _sdkPayload(result, ["data"])),
      createWithResponse: (input = {}, options) => this.#runtime.request("createSubscriptionPreview", input, options).then(_sdkResponse),
    });
}
close() { return this.#runtime.close(); }
}
export { makeSubscriptionPreviewResponse } from '../models/SubscriptionPreviewResponse.js';
export { makeSubscriptionAddressVerification } from '../models/SubscriptionAddressVerification.js';
export { makeSubscriptionDeliveryOption } from '../models/SubscriptionDeliveryOption.js';
export { makeMoneyValue } from '../models/MoneyValue.js';
export { makePostalAddress } from '../models/PostalAddress.js';
export { makeSubscriptionPreviewError } from '../models/SubscriptionPreviewError.js';
export { makeErrorDetail } from '../models/ErrorDetail.js';
export { makeErrorResourceReference } from '../models/ErrorResourceReference.js';
export { makeFulfillmentHold } from '../models/FulfillmentHold.js';
export { makeFulfillmentChargeLink } from '../models/FulfillmentChargeLink.js';
export { makeDigitalFulfillmentDetails } from '../models/DigitalFulfillmentDetails.js';
export { makeFulfillmentLineItem } from '../models/FulfillmentLineItem.js';
export { makeOrderLineItemModifier } from '../models/OrderLineItemModifier.js';
export { makeTextModifierRequest } from '../models/TextModifierRequest.js';
export { makeDeliveryFulfillmentDetails } from '../models/DeliveryFulfillmentDetails.js';
export { makePricingAmounts } from '../models/PricingAmounts.js';
export { makeSettlementAmounts } from '../models/SettlementAmounts.js';
export { makeSignedMoney } from '../models/SignedMoney.js';
export { makeFulfillmentOutcome } from '../models/FulfillmentOutcome.js';
export { makeExpandedPackageSummary } from '../models/ExpandedPackageSummary.js';
export { makePickupFulfillmentDetails } from '../models/PickupFulfillmentDetails.js';
export { makeFulfillmentRecipient } from '../models/FulfillmentRecipient.js';
export { makeServiceFulfillmentDetails } from '../models/ServiceFulfillmentDetails.js';
export { makeExpandedShipmentSummary } from '../models/ExpandedShipmentSummary.js';
export { makeReturnShipmentLineItemAllocation } from '../models/ReturnShipmentLineItemAllocation.js';
export { makeShippingDimensions } from '../models/ShippingDimensions.js';
export { makeShippingWeight } from '../models/ShippingWeight.js';
export { makeQuotaDetails } from '../models/QuotaDetails.js';
export { makeErrorRemediation } from '../models/ErrorRemediation.js';
export { makeNextAction } from '../models/NextAction.js';
export { makeNextActionMerchantAccountSession } from '../models/NextActionMerchantAccountSession.js';
export { makeSelectableOrderPaymentIntent } from '../models/SelectableOrderPaymentIntent.js';
export { makePaymentErrorSummary } from '../models/PaymentErrorSummary.js';
export { makePaymentCollection } from '../models/PaymentCollection.js';
export { makePaymentCollectionStripe } from '../models/PaymentCollectionStripe.js';
export { makeSubscriptionCounts } from '../models/SubscriptionCounts.js';
export { makeResponseMeta } from '../models/ResponseMeta.js';
export { makeResponseWarning } from '../models/ResponseWarning.js';
