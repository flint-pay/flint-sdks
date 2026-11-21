import { d343 as c0 } from '../descriptors/data/19.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d8704 as c1, d8705 as c28 } from '../descriptors/data/388.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d8711 as c2, d8712 as c3, d8713 as c4, d8714 as c9, d8715 as c11, d8717 as c19, d8718 as c20, d8720 as c21, d8721 as c22, d8727 as c26 } from '../descriptors/data/389.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d8731 as c5, d8732 as c6, d8733 as c10, d8734 as c12, d8735 as c13, d8736 as c14, d8728 as c15, d8737 as c16, d8729 as c17, d8730 as c18, d8738 as c23, d8739 as c24, d8740 as c25 } from '../descriptors/data/390.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d8056 as c7 } from '../descriptors/data/352.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d7928 as c8 } from '../descriptors/data/343.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d7986 as c27 } from '../descriptors/data/347.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d343 as d343 } from '../descriptors/data/19.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d343;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateOrderLineItemInputBundle"]:c0(),["DimensionsRequest"]:c1(),["GiftCardPurchaseDetailsRequest"]:c2(),["GiftCardPurchaseRecipientRequest"]:c3(),["ImageReferenceRequest"]:c4(),["LineItemFulfillmentOriginRequestModel"]:c5(),["LineItemFulfillmentRequestModel"]:c6(),["MetadataRequest"]:c7(),["MoneyValue"]:c8(),["OrderDraftLineItemInventoryDemandRequest"]:c9(),["OrderDraftLineItemTaxCalculationRequestModel"]:c10(),["OrderDraftLineItemTaxRequestModel"]:c11(),["OrderDraftTaxComponentRequestModel"]:c12(),["OrderDraftTaxJurisdictionRequestModel"]:c13(),["SharedCodec485"]:c14(),["SharedCodec486"]:c15(),["SharedCodec487"]:c16(),["SharedCodec488"]:c17(),["SharedCodec489"]:c18(),["SharedCodec492"]:c19(),["SharedCodec493"]:c20(),["SharedCodec496"]:c21(),["SharedCodec497"]:c22(),["SharedCodec501"]:c23(),["SharedCodec502"]:c24(),["SharedCodec503"]:c25(),["SubscribedLineRequestModel"]:c26(),["TextModifierRequest"]:c27(),["WeightRequest"]:c28()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateOrderLineItemInputBundle(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
