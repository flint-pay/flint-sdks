import { d6148 as c0, d6145 as c2, d6146 as c3, d6147 as c4 } from '../descriptors/data/280.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d286 as c1 } from '../descriptors/data/15.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7460 as c5, d7461 as c6 } from '../descriptors/data/356.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d286 as d286 } from '../descriptors/data/15.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d286;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutRedirectsRequest"]:c0(),["CreateMeCheckoutSessionReturnResolution"]:c1(),["SharedCodec194"]:c2(),["SharedCodec195"]:c3(),["SharedCodec196"]:c4(),["SharedCodec313"]:c5(),["SharedCodec314"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateMeCheckoutSessionReturnResolution(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
