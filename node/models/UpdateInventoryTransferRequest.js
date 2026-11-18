import { d9221 as c0, d9222 as c1, d9223 as c2 } from '../descriptors/data/414.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d7748 as c3 } from '../descriptors/data/326.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d7748 as d7748 } from '../descriptors/data/326.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7748;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec3100"]:c0(),["SharedCodec3101"]:c1(),["SharedCodec3102"]:c2(),["UpdateInventoryTransferRequest"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateInventoryTransferRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
