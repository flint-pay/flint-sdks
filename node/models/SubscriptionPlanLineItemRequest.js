import { d8131 as c0 } from '../descriptors/data/356.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d8003 as c1 } from '../descriptors/data/347.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d8359 as c2 } from '../descriptors/data/370.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d8927 as c3, d8923 as c4 } from '../descriptors/data/400.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d11077 as c5, d11078 as c6, d11079 as c7, d11080 as c8, d11081 as c9, d11082 as c10, d11083 as c11 } from '../descriptors/data/527.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d8816 as c12, d8808 as c13, d8817 as c14, d8809 as c15, d8810 as c16, d8818 as c17, d8819 as c18, d8820 as c19 } from '../descriptors/data/394.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d11101 as c20 } from '../descriptors/data/529.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d8061 as c21 } from '../descriptors/data/351.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d11101 as d11101 } from '../descriptors/data/529.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d11101;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MetadataRequest"]:c0(),["MoneyValue"]:c1(),["OrderLineItemTaxRequest"]:c2(),["SharedCodec192"]:c3(),["SharedCodec193"]:c4(),["SharedCodec3011"]:c5(),["SharedCodec3012"]:c6(),["SharedCodec3013"]:c7(),["SharedCodec3014"]:c8(),["SharedCodec3016"]:c9(),["SharedCodec3017"]:c10(),["SharedCodec3018"]:c11(),["SharedCodec492"]:c12(),["SharedCodec493"]:c13(),["SharedCodec494"]:c14(),["SharedCodec495"]:c15(),["SharedCodec496"]:c16(),["SharedCodec508"]:c17(),["SharedCodec509"]:c18(),["SharedCodec510"]:c19(),["SubscriptionPlanLineItemRequest"]:c20(),["TextModifierRequest"]:c21()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionPlanLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
