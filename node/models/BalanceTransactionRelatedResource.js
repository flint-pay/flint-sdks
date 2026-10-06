import { d56 as c0, d47 as c1, d48 as c2, d49 as c3, d50 as c4, d51 as c5, d52 as c6 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d56 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d56;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BalanceTransactionRelatedResource"]:c0(),["SharedCodec10"]:c1(),["SharedCodec11"]:c2(),["SharedCodec12"]:c3(),["SharedCodec13"]:c4(),["SharedCodec14"]:c5(),["SharedCodec15"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeBalanceTransactionRelatedResource(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
