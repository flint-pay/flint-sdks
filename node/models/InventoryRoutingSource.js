import { d1625 as c0 } from '../descriptors/data.js?sdk=f52d30b14a1c286c1efe9a110f4087e084c68c57774eb8c111836fdb26fbef01';
import { d1625 } from '../descriptors/data.js?sdk=f52d30b14a1c286c1efe9a110f4087e084c68c57774eb8c111836fdb26fbef01';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1625;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryRoutingSource"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryRoutingSource(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
