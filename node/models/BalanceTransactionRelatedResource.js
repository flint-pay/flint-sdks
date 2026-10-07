import { d56 as c0, d47 as c1, d48 as c2, d49 as c3, d50 as c4, d51 as c5, d52 as c6 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d56 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d56;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BalanceTransactionRelatedResource"]:c0(),["SharedCodec10"]:c1(),["SharedCodec11"]:c2(),["SharedCodec12"]:c3(),["SharedCodec13"]:c4(),["SharedCodec14"]:c5(),["SharedCodec15"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeBalanceTransactionRelatedResource(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
