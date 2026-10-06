import { d77 as c0, d2294 as c1, d223 as c2 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d2294 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2294;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["SettlementAmounts"]:c1(),["SignedMoney"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSettlementAmounts(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
