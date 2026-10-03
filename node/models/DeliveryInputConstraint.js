import { d598 as c0, d725 as c1, d74 as c2 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { d598 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d598;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryInputConstraint"]:c0(),["DeliveryWindowResource"]:c1(),["MoneyValue"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryInputConstraint(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
