import { d9285 as c0 } from '../descriptors/data/421.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d8691 as c1, d8690 as c2, d8697 as c3, d8692 as c28 } from '../descriptors/data/388.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d8701 as c4, d8702 as c10, d8703 as c12, d8710 as c21, d8711 as c22, d8715 as c26 } from '../descriptors/data/389.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d8719 as c5, d8720 as c6, d8721 as c11, d8722 as c13, d8723 as c14, d8724 as c16, d8716 as c17, d8725 as c18, d8717 as c19, d8718 as c20, d8726 as c23, d8727 as c24, d8728 as c25 } from '../descriptors/data/390.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d7919 as c7, d7920 as c9 } from '../descriptors/data/343.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d8048 as c8 } from '../descriptors/data/352.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d8305 as c15 } from '../descriptors/data/367.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d7978 as c27 } from '../descriptors/data/347.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d9285 as d9285 } from '../descriptors/data/421.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9285;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateOrderLineItemCustomRequest"]:c0(),["DimensionsRequest"]:c1(),["GiftCardPurchaseRecipient"]:c2(),["GiftCardPurchaseRequest"]:c3(),["ImageReferenceRequest"]:c4(),["LineItemFulfillmentOriginRequestModel"]:c5(),["LineItemFulfillmentRequestModel"]:c6(),["MetadataMap"]:c7(),["MetadataRequest"]:c8(),["MoneyValue"]:c9(),["OrderDraftLineItemInventoryDemandRequest"]:c10(),["OrderDraftLineItemTaxCalculationRequestModel"]:c11(),["OrderDraftLineItemTaxRequestModel"]:c12(),["OrderDraftTaxComponentRequestModel"]:c13(),["OrderDraftTaxJurisdictionRequestModel"]:c14(),["SharedCodec129"]:c15(),["SharedCodec481"]:c16(),["SharedCodec482"]:c17(),["SharedCodec483"]:c18(),["SharedCodec484"]:c19(),["SharedCodec485"]:c20(),["SharedCodec495"]:c21(),["SharedCodec496"]:c22(),["SharedCodec497"]:c23(),["SharedCodec498"]:c24(),["SharedCodec499"]:c25(),["SubscribedLineRequestModel"]:c26(),["TextModifierRequest"]:c27(),["WeightRequest"]:c28()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateOrderLineItemCustomRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
