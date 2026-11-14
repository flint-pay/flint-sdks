import { d879 as c0 } from '../descriptors/data/44.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6221 as c1 } from '../descriptors/data/285.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d879 as d879 } from '../descriptors/data/44.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d879;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoicePaymentDueInputDate"]:c0(),["SharedCodec938"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoicePaymentDueInputDate(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
