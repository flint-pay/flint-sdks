import { d841 as c0 } from '../descriptors/data/43.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5790 as c1 } from '../descriptors/data/259.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6191 as c2 } from '../descriptors/data/284.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d841 as d841 } from '../descriptors/data/43.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d841;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceLateFeePolicyFixedRequest"]:c0(),["MoneyValue"]:c1(),["SharedCodec63"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceLateFeePolicyFixedRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
