import { d323 as c0, d2129 as c1, d2142 as c2 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d2142 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2142;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["RefundGiftCardDestination"]:c1(),["RefundTenderAllocation"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRefundTenderAllocation(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
