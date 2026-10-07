import { d42 as c0, d77 as c1, d40 as c2, d41 as c3, d226 as c4 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { d42 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d42;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Balance"]:c0(),["MoneyValue"]:c1(),["SharedCodec5"]:c2(),["SharedCodec6"]:c3(),["SignedMoney"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeBalance(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
