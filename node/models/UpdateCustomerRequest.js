import { d8560 as c0, d8551 as c1, d8552 as c2, d8561 as c8, d8562 as c9 } from '../descriptors/data/380.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d8235 as c3, d8236 as c4 } from '../descriptors/data/363.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d8133 as c5, d8134 as c6, d8132 as c7 } from '../descriptors/data/356.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d8519 as c10, d8520 as c11, d8521 as c12 } from '../descriptors/data/378.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d7827 as c13 } from '../descriptors/data/329.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d7827 as d7827 } from '../descriptors/data/329.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7827;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DocumentTaxIDRequest"]:c0(),["SharedCodec1747"]:c1(),["SharedCodec1748"]:c2(),["SharedCodec2"]:c3(),["SharedCodec3"]:c4(),["SharedCodec3126"]:c5(),["SharedCodec3127"]:c6(),["SharedCodec3128"]:c7(),["SharedCodec3133"]:c8(),["SharedCodec3134"]:c9(),["SharedCodec3135"]:c10(),["SharedCodec3136"]:c11(),["SharedCodec3137"]:c12(),["UpdateCustomerRequest"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateCustomerRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
