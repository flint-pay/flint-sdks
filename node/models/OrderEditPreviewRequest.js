import { d8790 as c0, d8791 as c2, d8792 as c3, d8793 as c4, d8794 as c9, d8795 as c11, d8796 as c23, d8797 as c24, d8798 as c25, d8799 as c26, d8800 as c27, d8801 as c28, d8802 as c29, d8803 as c30, d8804 as c34, d8805 as c35 } from '../descriptors/data/394.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d8784 as c1, d8785 as c39 } from '../descriptors/data/393.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d8811 as c5, d8812 as c6, d8813 as c10, d8814 as c12, d8815 as c13, d8816 as c18, d8808 as c19, d8817 as c20, d8809 as c21, d8810 as c22, d8818 as c31, d8819 as c32, d8820 as c33, d8806 as c36, d8807 as c37 } from '../descriptors/data/395.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d8131 as c7 } from '../descriptors/data/357.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d8003 as c8 } from '../descriptors/data/348.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d1333 as c14 } from '../descriptors/data/67.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d9993 as c15, d9994 as c16, d9995 as c17 } from '../descriptors/data/464.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d8061 as c38 } from '../descriptors/data/352.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d1333 as d1333 } from '../descriptors/data/67.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1333;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateOrderLineItemRequest"]:c0(),["DimensionsRequest"]:c1(),["GiftCardPurchaseDetailsRequest"]:c2(),["GiftCardPurchaseRecipientRequest"]:c3(),["ImageReferenceRequest"]:c4(),["LineItemFulfillmentOriginRequestModel"]:c5(),["LineItemFulfillmentRequestModel"]:c6(),["MetadataRequest"]:c7(),["MoneyValue"]:c8(),["OrderDraftLineItemInventoryDemandRequest"]:c9(),["OrderDraftLineItemTaxCalculationRequestModel"]:c10(),["OrderDraftLineItemTaxRequestModel"]:c11(),["OrderDraftTaxComponentRequestModel"]:c12(),["OrderDraftTaxJurisdictionRequestModel"]:c13(),["OrderEditPreviewRequest"]:c14(),["OrderEditRemovalRequest"]:c15(),["RefundCharge"]:c16(),["RefundDestinations"]:c17(),["SharedCodec492"]:c18(),["SharedCodec493"]:c19(),["SharedCodec494"]:c20(),["SharedCodec495"]:c21(),["SharedCodec496"]:c22(),["SharedCodec498"]:c23(),["SharedCodec499"]:c24(),["SharedCodec500"]:c25(),["SharedCodec501"]:c26(),["SharedCodec503"]:c27(),["SharedCodec504"]:c28(),["SharedCodec506"]:c29(),["SharedCodec507"]:c30(),["SharedCodec508"]:c31(),["SharedCodec509"]:c32(),["SharedCodec510"]:c33(),["SharedCodec511"]:c34(),["SharedCodec512"]:c35(),["SharedCodec513"]:c36(),["SubscribedLineRequestModel"]:c37(),["TextModifierRequest"]:c38(),["WeightRequest"]:c39()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderEditPreviewRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
