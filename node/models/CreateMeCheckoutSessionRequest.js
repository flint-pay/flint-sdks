import { d6148 as c0, d6145 as c2, d6146 as c3, d6147 as c4 } from '../descriptors/data/280.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d285 as c1 } from '../descriptors/data/15.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7458 as c5, d7459 as c6, d7460 as c7, d7461 as c8, d7462 as c9 } from '../descriptors/data/356.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d285 as d285 } from '../descriptors/data/15.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d285;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutRedirectsRequest"]:c0(),["CreateMeCheckoutSessionRequest"]:c1(),["SharedCodec194"]:c2(),["SharedCodec195"]:c3(),["SharedCodec196"]:c4(),["SharedCodec311"]:c5(),["SharedCodec312"]:c6(),["SharedCodec313"]:c7(),["SharedCodec314"]:c8(),["SharedCodec315"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateMeCheckoutSessionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
