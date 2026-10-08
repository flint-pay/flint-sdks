import { d323 as c0, d2130 as c1, d336 as c2, d2128 as c3, d2127 as c4, d2129 as c5 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { d2130 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2130;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["RefundTenderAllocationRequest"]:c1(),["SharedCodec104"]:c2(),["SharedCodec516"]:c3(),["SharedCodec517"]:c4(),["SharedCodec518"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRefundTenderAllocationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
