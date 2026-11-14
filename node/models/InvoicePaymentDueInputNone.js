import { d881 as c0 } from '../descriptors/data/44.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6218 as c1, d6219 as c2 } from '../descriptors/data/285.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d881 as d881 } from '../descriptors/data/44.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d881;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoicePaymentDueInputNone"]:c0(),["SharedCodec935"]:c1(),["SharedCodec936"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoicePaymentDueInputNone(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
