import { d8223 as c0, d8220 as c2, d8221 as c3, d8222 as c4 } from '../descriptors/data/359.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d323 as c1 } from '../descriptors/data/17.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d9571 as c5, d9572 as c6, d9573 as c7, d9574 as c8, d9575 as c9 } from '../descriptors/data/436.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d323 as d323 } from '../descriptors/data/17.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d323;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutRedirectsRequest"]:c0(),["CreateMeCheckoutSessionRequest"]:c1(),["SharedCodec348"]:c2(),["SharedCodec349"]:c3(),["SharedCodec350"]:c4(),["SharedCodec464"]:c5(),["SharedCodec465"]:c6(),["SharedCodec466"]:c7(),["SharedCodec467"]:c8(),["SharedCodec468"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateMeCheckoutSessionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
