import { d2168 as c0, d2170 as c1, d2245 as c2, d2246 as c3, d2180 as c4, d2275 as c5, d2181 as c6 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { d2245 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2245;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ReturnActor"]:c0(),["ReturnDisposition"]:c1(),["ReturnReceipt"]:c2(),["ReturnReceiptLineItem"]:c3(),["ReturnSourceSystem"]:c4(),["ReturnUnverifiedItem"]:c5(),["SharedCodec524"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnReceipt(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
