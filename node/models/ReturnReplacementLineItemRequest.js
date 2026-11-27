import { d8811 as c0, d8812 as c1, d8813 as c3, d8814 as c4, d8815 as c5 } from '../descriptors/data/395.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d8003 as c2 } from '../descriptors/data/348.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d10744 as c6, d10745 as c7, d10747 as c9, d10748 as c10, d10749 as c11, d10750 as c12, d10751 as c13, d10752 as c14, d10753 as c15 } from '../descriptors/data/510.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d8923 as c8 } from '../descriptors/data/401.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d10754 as c16 } from '../descriptors/data/511.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d10744 as d10744 } from '../descriptors/data/510.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10744;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["LineItemFulfillmentOriginRequestModel"]:c0(),["LineItemFulfillmentRequestModel"]:c1(),["MoneyValue"]:c2(),["OrderDraftLineItemTaxCalculationRequestModel"]:c3(),["OrderDraftTaxComponentRequestModel"]:c4(),["OrderDraftTaxJurisdictionRequestModel"]:c5(),["ReturnReplacementLineItemRequest"]:c6(),["ReturnReplacementTaxRequest"]:c7(),["SharedCodec193"]:c8(),["SharedCodec2816"]:c9(),["SharedCodec2817"]:c10(),["SharedCodec2818"]:c11(),["SharedCodec2819"]:c12(),["SharedCodec2820"]:c13(),["SharedCodec2822"]:c14(),["SharedCodec2823"]:c15(),["SharedCodec2824"]:c16()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnReplacementLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
