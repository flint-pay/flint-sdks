import { d42 as c0, d77 as c1, d40 as c2, d41 as c3, d227 as c4 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d42 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d42;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Balance"]:c0(),["MoneyValue"]:c1(),["SharedCodec5"]:c2(),["SharedCodec6"]:c3(),["SignedMoney"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeBalance(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
