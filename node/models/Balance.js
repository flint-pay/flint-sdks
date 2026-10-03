import { d39 as c0, d74 as c1, d37 as c2, d38 as c3, d1804 as c4 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { d39 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d39;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Balance"]:c0(),["MoneyValue"]:c1(),["SharedCodec4"]:c2(),["SharedCodec5"]:c3(),["SignedMoney"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeBalance(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
