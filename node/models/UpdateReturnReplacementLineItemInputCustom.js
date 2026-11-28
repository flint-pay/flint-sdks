import { d8811 as c0, d8812 as c1, d8813 as c3, d8814 as c4, d8815 as c5 } from '../descriptors/data/395.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d8003 as c2 } from '../descriptors/data/348.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d10745 as c6, d10749 as c8 } from '../descriptors/data/510.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d8923 as c7 } from '../descriptors/data/401.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d7882 as c9 } from '../descriptors/data/335.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d7882 as d7882 } from '../descriptors/data/335.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7882;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["LineItemFulfillmentOriginRequestModel"]:c0(),["LineItemFulfillmentRequestModel"]:c1(),["MoneyValue"]:c2(),["OrderDraftLineItemTaxCalculationRequestModel"]:c3(),["OrderDraftTaxComponentRequestModel"]:c4(),["OrderDraftTaxJurisdictionRequestModel"]:c5(),["ReturnReplacementTaxRequest"]:c6(),["SharedCodec193"]:c7(),["SharedCodec2818"]:c8(),["UpdateReturnReplacementLineItemInputCustom"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateReturnReplacementLineItemInputCustom(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
