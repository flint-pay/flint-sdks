import { d8 as c0 } from '../descriptors/data/0.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d8790 as c1, d8791 as c3, d8792 as c4, d8793 as c5, d8794 as c10, d8795 as c12, d8796 as c20, d8797 as c21, d8798 as c22, d8799 as c23, d8800 as c24, d8801 as c25, d8802 as c26, d8803 as c27, d8804 as c31, d8805 as c32 } from '../descriptors/data/394.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d8784 as c2, d8785 as c36 } from '../descriptors/data/393.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d8811 as c6, d8812 as c7, d8813 as c11, d8814 as c13, d8815 as c14, d8816 as c15, d8808 as c16, d8817 as c17, d8809 as c18, d8810 as c19, d8818 as c28, d8819 as c29, d8820 as c30, d8806 as c33, d8807 as c34 } from '../descriptors/data/395.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d8131 as c8 } from '../descriptors/data/357.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d8003 as c9 } from '../descriptors/data/348.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d8061 as c35 } from '../descriptors/data/352.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d8 as d8 } from '../descriptors/data/0.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddLineItemsRequest"]:c0(),["CreateOrderLineItemRequest"]:c1(),["DimensionsRequest"]:c2(),["GiftCardPurchaseDetailsRequest"]:c3(),["GiftCardPurchaseRecipientRequest"]:c4(),["ImageReferenceRequest"]:c5(),["LineItemFulfillmentOriginRequestModel"]:c6(),["LineItemFulfillmentRequestModel"]:c7(),["MetadataRequest"]:c8(),["MoneyValue"]:c9(),["OrderDraftLineItemInventoryDemandRequest"]:c10(),["OrderDraftLineItemTaxCalculationRequestModel"]:c11(),["OrderDraftLineItemTaxRequestModel"]:c12(),["OrderDraftTaxComponentRequestModel"]:c13(),["OrderDraftTaxJurisdictionRequestModel"]:c14(),["SharedCodec492"]:c15(),["SharedCodec493"]:c16(),["SharedCodec494"]:c17(),["SharedCodec495"]:c18(),["SharedCodec496"]:c19(),["SharedCodec498"]:c20(),["SharedCodec499"]:c21(),["SharedCodec500"]:c22(),["SharedCodec501"]:c23(),["SharedCodec503"]:c24(),["SharedCodec504"]:c25(),["SharedCodec506"]:c26(),["SharedCodec507"]:c27(),["SharedCodec508"]:c28(),["SharedCodec509"]:c29(),["SharedCodec510"]:c30(),["SharedCodec511"]:c31(),["SharedCodec512"]:c32(),["SharedCodec513"]:c33(),["SubscribedLineRequestModel"]:c34(),["TextModifierRequest"]:c35(),["WeightRequest"]:c36()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeAddLineItemsRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
