import { d8710 as c0, d8704 as c1, d8705 as c35 } from '../descriptors/data/388.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d8711 as c2, d8712 as c3, d8713 as c4, d8714 as c9, d8715 as c11, d8716 as c19, d8717 as c20, d8718 as c21, d8719 as c22, d8720 as c23, d8721 as c24, d8722 as c25, d8723 as c26, d8724 as c30, d8725 as c31, d8726 as c32, d8727 as c33 } from '../descriptors/data/389.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d8731 as c5, d8732 as c6, d8733 as c10, d8734 as c12, d8735 as c13, d8736 as c14, d8728 as c15, d8737 as c16, d8729 as c17, d8730 as c18, d8738 as c27, d8739 as c28, d8740 as c29 } from '../descriptors/data/390.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d8056 as c7 } from '../descriptors/data/352.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d7928 as c8 } from '../descriptors/data/343.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d7986 as c34 } from '../descriptors/data/347.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d8710 as d8710 } from '../descriptors/data/388.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8710;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateOrderLineItemRequest"]:c0(),["DimensionsRequest"]:c1(),["GiftCardPurchaseDetailsRequest"]:c2(),["GiftCardPurchaseRecipientRequest"]:c3(),["ImageReferenceRequest"]:c4(),["LineItemFulfillmentOriginRequestModel"]:c5(),["LineItemFulfillmentRequestModel"]:c6(),["MetadataRequest"]:c7(),["MoneyValue"]:c8(),["OrderDraftLineItemInventoryDemandRequest"]:c9(),["OrderDraftLineItemTaxCalculationRequestModel"]:c10(),["OrderDraftLineItemTaxRequestModel"]:c11(),["OrderDraftTaxComponentRequestModel"]:c12(),["OrderDraftTaxJurisdictionRequestModel"]:c13(),["SharedCodec485"]:c14(),["SharedCodec486"]:c15(),["SharedCodec487"]:c16(),["SharedCodec488"]:c17(),["SharedCodec489"]:c18(),["SharedCodec491"]:c19(),["SharedCodec492"]:c20(),["SharedCodec493"]:c21(),["SharedCodec494"]:c22(),["SharedCodec496"]:c23(),["SharedCodec497"]:c24(),["SharedCodec499"]:c25(),["SharedCodec500"]:c26(),["SharedCodec501"]:c27(),["SharedCodec502"]:c28(),["SharedCodec503"]:c29(),["SharedCodec504"]:c30(),["SharedCodec505"]:c31(),["SharedCodec506"]:c32(),["SubscribedLineRequestModel"]:c33(),["TextModifierRequest"]:c34(),["WeightRequest"]:c35()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateOrderLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
