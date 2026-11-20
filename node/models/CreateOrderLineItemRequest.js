import { d8698 as c0, d8691 as c1, d8692 as c35 } from '../descriptors/data/388.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d8699 as c2, d8700 as c3, d8701 as c4, d8702 as c9, d8703 as c11, d8704 as c19, d8705 as c20, d8706 as c21, d8707 as c22, d8708 as c23, d8709 as c24, d8710 as c25, d8711 as c26, d8712 as c30, d8713 as c31, d8714 as c32, d8715 as c33 } from '../descriptors/data/389.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d8719 as c5, d8720 as c6, d8721 as c10, d8722 as c12, d8723 as c13, d8724 as c14, d8716 as c15, d8725 as c16, d8717 as c17, d8718 as c18, d8726 as c27, d8727 as c28, d8728 as c29 } from '../descriptors/data/390.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d8048 as c7 } from '../descriptors/data/352.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d7920 as c8 } from '../descriptors/data/343.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d7978 as c34 } from '../descriptors/data/347.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d8698 as d8698 } from '../descriptors/data/388.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8698;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateOrderLineItemRequest"]:c0(),["DimensionsRequest"]:c1(),["GiftCardPurchaseDetailsRequest"]:c2(),["GiftCardPurchaseRecipientRequest"]:c3(),["ImageReferenceRequest"]:c4(),["LineItemFulfillmentOriginRequestModel"]:c5(),["LineItemFulfillmentRequestModel"]:c6(),["MetadataRequest"]:c7(),["MoneyValue"]:c8(),["OrderDraftLineItemInventoryDemandRequest"]:c9(),["OrderDraftLineItemTaxCalculationRequestModel"]:c10(),["OrderDraftLineItemTaxRequestModel"]:c11(),["OrderDraftTaxComponentRequestModel"]:c12(),["OrderDraftTaxJurisdictionRequestModel"]:c13(),["SharedCodec481"]:c14(),["SharedCodec482"]:c15(),["SharedCodec483"]:c16(),["SharedCodec484"]:c17(),["SharedCodec485"]:c18(),["SharedCodec487"]:c19(),["SharedCodec488"]:c20(),["SharedCodec489"]:c21(),["SharedCodec490"]:c22(),["SharedCodec492"]:c23(),["SharedCodec493"]:c24(),["SharedCodec495"]:c25(),["SharedCodec496"]:c26(),["SharedCodec497"]:c27(),["SharedCodec498"]:c28(),["SharedCodec499"]:c29(),["SharedCodec500"]:c30(),["SharedCodec501"]:c31(),["SharedCodec502"]:c32(),["SubscribedLineRequestModel"]:c33(),["TextModifierRequest"]:c34(),["WeightRequest"]:c35()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateOrderLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
