import { d8 as c0 } from '../descriptors/data/0.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d8698 as c1, d8691 as c2, d8692 as c36 } from '../descriptors/data/388.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d8699 as c3, d8700 as c4, d8701 as c5, d8702 as c10, d8703 as c12, d8704 as c20, d8705 as c21, d8706 as c22, d8707 as c23, d8708 as c24, d8709 as c25, d8710 as c26, d8711 as c27, d8712 as c31, d8713 as c32, d8714 as c33, d8715 as c34 } from '../descriptors/data/389.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d8719 as c6, d8720 as c7, d8721 as c11, d8722 as c13, d8723 as c14, d8724 as c15, d8716 as c16, d8725 as c17, d8717 as c18, d8718 as c19, d8726 as c28, d8727 as c29, d8728 as c30 } from '../descriptors/data/390.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d8048 as c8 } from '../descriptors/data/352.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d7920 as c9 } from '../descriptors/data/343.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d7978 as c35 } from '../descriptors/data/347.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d8 as d8 } from '../descriptors/data/0.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddLineItemsRequest"]:c0(),["CreateOrderLineItemRequest"]:c1(),["DimensionsRequest"]:c2(),["GiftCardPurchaseDetailsRequest"]:c3(),["GiftCardPurchaseRecipientRequest"]:c4(),["ImageReferenceRequest"]:c5(),["LineItemFulfillmentOriginRequestModel"]:c6(),["LineItemFulfillmentRequestModel"]:c7(),["MetadataRequest"]:c8(),["MoneyValue"]:c9(),["OrderDraftLineItemInventoryDemandRequest"]:c10(),["OrderDraftLineItemTaxCalculationRequestModel"]:c11(),["OrderDraftLineItemTaxRequestModel"]:c12(),["OrderDraftTaxComponentRequestModel"]:c13(),["OrderDraftTaxJurisdictionRequestModel"]:c14(),["SharedCodec481"]:c15(),["SharedCodec482"]:c16(),["SharedCodec483"]:c17(),["SharedCodec484"]:c18(),["SharedCodec485"]:c19(),["SharedCodec487"]:c20(),["SharedCodec488"]:c21(),["SharedCodec489"]:c22(),["SharedCodec490"]:c23(),["SharedCodec492"]:c24(),["SharedCodec493"]:c25(),["SharedCodec495"]:c26(),["SharedCodec496"]:c27(),["SharedCodec497"]:c28(),["SharedCodec498"]:c29(),["SharedCodec499"]:c30(),["SharedCodec500"]:c31(),["SharedCodec501"]:c32(),["SharedCodec502"]:c33(),["SubscribedLineRequestModel"]:c34(),["TextModifierRequest"]:c35(),["WeightRequest"]:c36()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeAddLineItemsRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
