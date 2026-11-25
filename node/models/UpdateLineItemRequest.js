import { d8131 as c0, d8132 as c4 } from '../descriptors/data/356.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d8003 as c1 } from '../descriptors/data/347.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d10002 as c2 } from '../descriptors/data/463.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d10011 as c3 } from '../descriptors/data/464.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d8234 as c5 } from '../descriptors/data/363.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d10049 as c6, d10050 as c7, d10051 as c8, d10052 as c9, d10053 as c10, d10054 as c11, d10055 as c12, d10056 as c13, d10057 as c14, d10058 as c16 } from '../descriptors/data/466.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d9911 as c15 } from '../descriptors/data/458.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d8816 as c17, d8808 as c18, d8817 as c19, d8809 as c20, d8810 as c21 } from '../descriptors/data/394.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d10099 as c22, d10100 as c23, d10101 as c24 } from '../descriptors/data/468.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d8061 as c25 } from '../descriptors/data/351.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d7848 as c26 } from '../descriptors/data/331.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d7848 as d7848 } from '../descriptors/data/331.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7848;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MetadataRequest"]:c0(),["MoneyValue"]:c1(),["OrderCalculatedLineItemTaxRequest"]:c2(),["OrderLineItemModifierRequestModel"]:c3(),["SharedCodec3128"]:c4(),["SharedCodec3131"]:c5(),["SharedCodec3172"]:c6(),["SharedCodec3173"]:c7(),["SharedCodec3174"]:c8(),["SharedCodec3175"]:c9(),["SharedCodec3176"]:c10(),["SharedCodec3177"]:c11(),["SharedCodec3178"]:c12(),["SharedCodec3179"]:c13(),["SharedCodec3180"]:c14(),["SharedCodec3181"]:c15(),["SharedCodec3182"]:c16(),["SharedCodec492"]:c17(),["SharedCodec493"]:c18(),["SharedCodec494"]:c19(),["SharedCodec495"]:c20(),["SharedCodec496"]:c21(),["TaxCalculationRequestRequest"]:c22(),["TaxComponentRequestRequest"]:c23(),["TaxJurisdictionRequest"]:c24(),["TextModifierRequest"]:c25(),["UpdateLineItemRequest"]:c26()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
