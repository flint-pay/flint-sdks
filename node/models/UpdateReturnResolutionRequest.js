import { d8811 as c0, d8812 as c1, d8813 as c3, d8814 as c4, d8815 as c5 } from '../descriptors/data/394.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d8003 as c2 } from '../descriptors/data/347.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d10745 as c6, d10747 as c8, d10748 as c9, d10749 as c10, d10750 as c11, d10751 as c12 } from '../descriptors/data/509.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d8923 as c7 } from '../descriptors/data/400.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d8132 as c13 } from '../descriptors/data/356.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d8234 as c14 } from '../descriptors/data/363.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d8483 as c15 } from '../descriptors/data/376.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d10788 as c16, d10789 as c17, d10790 as c18, d10791 as c19, d10792 as c20 } from '../descriptors/data/512.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d10813 as c21, d10814 as c22, d10815 as c23 } from '../descriptors/data/513.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d7885 as c24 } from '../descriptors/data/334.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d7885 as d7885 } from '../descriptors/data/334.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7885;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["LineItemFulfillmentOriginRequestModel"]:c0(),["LineItemFulfillmentRequestModel"]:c1(),["MoneyValue"]:c2(),["OrderDraftLineItemTaxCalculationRequestModel"]:c3(),["OrderDraftTaxComponentRequestModel"]:c4(),["OrderDraftTaxJurisdictionRequestModel"]:c5(),["ReturnReplacementTaxRequest"]:c6(),["SharedCodec193"]:c7(),["SharedCodec2816"]:c8(),["SharedCodec2817"]:c9(),["SharedCodec2818"]:c10(),["SharedCodec2819"]:c11(),["SharedCodec2820"]:c12(),["SharedCodec3128"]:c13(),["SharedCodec3131"]:c14(),["SharedCodec3132"]:c15(),["SharedCodec3234"]:c16(),["SharedCodec3235"]:c17(),["SharedCodec3236"]:c18(),["SharedCodec3237"]:c19(),["SharedCodec3238"]:c20(),["UpdateReturnReplacementLineItemRequest"]:c21(),["UpdateReturnResolutionAdjustmentRequest"]:c22(),["UpdateReturnResolutionLineItemRequest"]:c23(),["UpdateReturnResolutionRequest"]:c24()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateReturnResolutionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
