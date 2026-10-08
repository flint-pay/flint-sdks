import { d441 as c0, d2252 as c1, d2180 as c2, d2275 as c3, d2248 as c4, d2247 as c5, d2250 as c6, d2249 as c7, d2251 as c8 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { d441 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d441;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnReceiptRequest"]:c0(),["ReturnReceiptLineItemRequest"]:c1(),["ReturnSourceSystem"]:c2(),["ReturnUnverifiedItem"]:c3(),["SharedCodec564"]:c4(),["SharedCodec565"]:c5(),["SharedCodec566"]:c6(),["SharedCodec567"]:c7(),["SharedCodec568"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnReceiptRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
