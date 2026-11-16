import { d6148 as c0, d6145 as c2, d6146 as c3, d6147 as c4 } from '../descriptors/data/280.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d208 as c1 } from '../descriptors/data/9.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5994 as c5, d5995 as c6, d5996 as c7, d5997 as c8, d5998 as c9 } from '../descriptors/data/271.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d208 as d208 } from '../descriptors/data/9.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d208;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutRedirectsRequest"]:c0(),["CreateCheckoutSessionInvoice"]:c1(),["SharedCodec194"]:c2(),["SharedCodec195"]:c3(),["SharedCodec196"]:c4(),["SharedCodec197"]:c5(),["SharedCodec198"]:c6(),["SharedCodec199"]:c7(),["SharedCodec200"]:c8(),["SharedCodec201"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateCheckoutSessionInvoice(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
