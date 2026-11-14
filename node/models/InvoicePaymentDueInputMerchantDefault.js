import { d880 as c0 } from '../descriptors/data/44.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6219 as c1 } from '../descriptors/data/285.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d7205 as c2 } from '../descriptors/data/340.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d880 as d880 } from '../descriptors/data/44.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d880;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoicePaymentDueInputMerchantDefault"]:c0(),["SharedCodec936"]:c1(),["SharedCodec942"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoicePaymentDueInputMerchantDefault(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
