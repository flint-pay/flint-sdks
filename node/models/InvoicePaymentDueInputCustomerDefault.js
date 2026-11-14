import { d878 as c0 } from '../descriptors/data/44.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6219 as c1 } from '../descriptors/data/285.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d7204 as c2 } from '../descriptors/data/340.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d878 as d878 } from '../descriptors/data/44.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d878;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoicePaymentDueInputCustomerDefault"]:c0(),["SharedCodec936"]:c1(),["SharedCodec941"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoicePaymentDueInputCustomerDefault(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
