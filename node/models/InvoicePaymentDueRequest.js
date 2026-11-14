import { d7159 as c0 } from '../descriptors/data/338.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6218 as c1, d6219 as c2, d6221 as c3, d6223 as c4 } from '../descriptors/data/285.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d7204 as c5, d7205 as c6, d7206 as c7, d7207 as c8, d7208 as c9, d7209 as c10, d7210 as c11 } from '../descriptors/data/340.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d7159 as d7159 } from '../descriptors/data/338.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7159;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoicePaymentDueRequest"]:c0(),["SharedCodec935"]:c1(),["SharedCodec936"]:c2(),["SharedCodec938"]:c3(),["SharedCodec940"]:c4(),["SharedCodec941"]:c5(),["SharedCodec942"]:c6(),["SharedCodec943"]:c7(),["SharedCodec944"]:c8(),["SharedCodec945"]:c9(),["SharedCodec946"]:c10(),["SharedCodec947"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoicePaymentDueRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
