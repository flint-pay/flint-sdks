import { d8811 as c0, d8812 as c1, d8813 as c3, d8814 as c4, d8815 as c5 } from '../descriptors/data/394.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d8003 as c2 } from '../descriptors/data/347.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d1857 as c6 } from '../descriptors/data/93.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d10745 as c7, d10747 as c8, d10748 as c9 } from '../descriptors/data/509.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d1857 as d1857 } from '../descriptors/data/93.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1857;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["LineItemFulfillmentOriginRequestModel"]:c0(),["LineItemFulfillmentRequestModel"]:c1(),["MoneyValue"]:c2(),["OrderDraftLineItemTaxCalculationRequestModel"]:c3(),["OrderDraftTaxComponentRequestModel"]:c4(),["OrderDraftTaxJurisdictionRequestModel"]:c5(),["ReturnReplacementLineItemInputBundle"]:c6(),["ReturnReplacementTaxRequest"]:c7(),["SharedCodec2816"]:c8(),["SharedCodec2817"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnReplacementLineItemInputBundle(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
