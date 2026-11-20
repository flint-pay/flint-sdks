import { d8698 as c0, d8691 as c1, d8692 as c39 } from '../descriptors/data/388.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d8699 as c2, d8700 as c3, d8701 as c4, d8702 as c9, d8703 as c11, d8704 as c23, d8705 as c24, d8706 as c25, d8707 as c26, d8708 as c27, d8709 as c28, d8710 as c29, d8711 as c30, d8712 as c34, d8713 as c35, d8714 as c36, d8715 as c37 } from '../descriptors/data/389.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d8719 as c5, d8720 as c6, d8721 as c10, d8722 as c12, d8723 as c13, d8724 as c18, d8716 as c19, d8725 as c20, d8717 as c21, d8718 as c22, d8726 as c31, d8727 as c32, d8728 as c33 } from '../descriptors/data/390.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d8048 as c7 } from '../descriptors/data/352.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d7920 as c8 } from '../descriptors/data/343.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d1331 as c14 } from '../descriptors/data/66.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d9896 as c15, d9897 as c16, d9898 as c17 } from '../descriptors/data/460.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d7978 as c38 } from '../descriptors/data/347.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d1331 as d1331 } from '../descriptors/data/66.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1331;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateOrderLineItemRequest"]:c0(),["DimensionsRequest"]:c1(),["GiftCardPurchaseDetailsRequest"]:c2(),["GiftCardPurchaseRecipientRequest"]:c3(),["ImageReferenceRequest"]:c4(),["LineItemFulfillmentOriginRequestModel"]:c5(),["LineItemFulfillmentRequestModel"]:c6(),["MetadataRequest"]:c7(),["MoneyValue"]:c8(),["OrderDraftLineItemInventoryDemandRequest"]:c9(),["OrderDraftLineItemTaxCalculationRequestModel"]:c10(),["OrderDraftLineItemTaxRequestModel"]:c11(),["OrderDraftTaxComponentRequestModel"]:c12(),["OrderDraftTaxJurisdictionRequestModel"]:c13(),["OrderEditPreviewRequest"]:c14(),["OrderEditRemovalRequest"]:c15(),["RefundCharge"]:c16(),["RefundDestinations"]:c17(),["SharedCodec481"]:c18(),["SharedCodec482"]:c19(),["SharedCodec483"]:c20(),["SharedCodec484"]:c21(),["SharedCodec485"]:c22(),["SharedCodec487"]:c23(),["SharedCodec488"]:c24(),["SharedCodec489"]:c25(),["SharedCodec490"]:c26(),["SharedCodec492"]:c27(),["SharedCodec493"]:c28(),["SharedCodec495"]:c29(),["SharedCodec496"]:c30(),["SharedCodec497"]:c31(),["SharedCodec498"]:c32(),["SharedCodec499"]:c33(),["SharedCodec500"]:c34(),["SharedCodec501"]:c35(),["SharedCodec502"]:c36(),["SubscribedLineRequestModel"]:c37(),["TextModifierRequest"]:c38(),["WeightRequest"]:c39()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderEditPreviewRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
