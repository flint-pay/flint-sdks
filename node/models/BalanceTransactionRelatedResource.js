import { d52 as c0, d50 as c1, d51 as c2, d46 as c3, d47 as c4, d48 as c5, d49 as c6 } from '../descriptors/data.js?sdk=f52d30b14a1c286c1efe9a110f4087e084c68c57774eb8c111836fdb26fbef01';
import { d52 } from '../descriptors/data.js?sdk=f52d30b14a1c286c1efe9a110f4087e084c68c57774eb8c111836fdb26fbef01';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d52;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BalanceTransactionRelatedResource"]:c0(),["SharedCodec10"]:c1(),["SharedCodec11"]:c2(),["SharedCodec6"]:c3(),["SharedCodec7"]:c4(),["SharedCodec8"]:c5(),["SharedCodec9"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeBalanceTransactionRelatedResource(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
