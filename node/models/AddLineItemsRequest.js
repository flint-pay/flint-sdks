import { d8 as c0 } from '../descriptors/data/0.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d8710 as c1, d8704 as c2, d8705 as c36 } from '../descriptors/data/388.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d8711 as c3, d8712 as c4, d8713 as c5, d8714 as c10, d8715 as c12, d8716 as c20, d8717 as c21, d8718 as c22, d8719 as c23, d8720 as c24, d8721 as c25, d8722 as c26, d8723 as c27, d8724 as c31, d8725 as c32, d8726 as c33, d8727 as c34 } from '../descriptors/data/389.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d8731 as c6, d8732 as c7, d8733 as c11, d8734 as c13, d8735 as c14, d8736 as c15, d8728 as c16, d8737 as c17, d8729 as c18, d8730 as c19, d8738 as c28, d8739 as c29, d8740 as c30 } from '../descriptors/data/390.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d8056 as c8 } from '../descriptors/data/352.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d7928 as c9 } from '../descriptors/data/343.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d7986 as c35 } from '../descriptors/data/347.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d8 as d8 } from '../descriptors/data/0.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddLineItemsRequest"]:c0(),["CreateOrderLineItemRequest"]:c1(),["DimensionsRequest"]:c2(),["GiftCardPurchaseDetailsRequest"]:c3(),["GiftCardPurchaseRecipientRequest"]:c4(),["ImageReferenceRequest"]:c5(),["LineItemFulfillmentOriginRequestModel"]:c6(),["LineItemFulfillmentRequestModel"]:c7(),["MetadataRequest"]:c8(),["MoneyValue"]:c9(),["OrderDraftLineItemInventoryDemandRequest"]:c10(),["OrderDraftLineItemTaxCalculationRequestModel"]:c11(),["OrderDraftLineItemTaxRequestModel"]:c12(),["OrderDraftTaxComponentRequestModel"]:c13(),["OrderDraftTaxJurisdictionRequestModel"]:c14(),["SharedCodec485"]:c15(),["SharedCodec486"]:c16(),["SharedCodec487"]:c17(),["SharedCodec488"]:c18(),["SharedCodec489"]:c19(),["SharedCodec491"]:c20(),["SharedCodec492"]:c21(),["SharedCodec493"]:c22(),["SharedCodec494"]:c23(),["SharedCodec496"]:c24(),["SharedCodec497"]:c25(),["SharedCodec499"]:c26(),["SharedCodec500"]:c27(),["SharedCodec501"]:c28(),["SharedCodec502"]:c29(),["SharedCodec503"]:c30(),["SharedCodec504"]:c31(),["SharedCodec505"]:c32(),["SharedCodec506"]:c33(),["SubscribedLineRequestModel"]:c34(),["TextModifierRequest"]:c35(),["WeightRequest"]:c36()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeAddLineItemsRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
