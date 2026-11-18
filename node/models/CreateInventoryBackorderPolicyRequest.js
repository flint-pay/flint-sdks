import { d9141 as c0, d9142 as c1 } from '../descriptors/data/410.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d9141 as d9141 } from '../descriptors/data/410.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9141;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateInventoryBackorderPolicyRequest"]:c0(),["InventoryBackorderPolicyRequest"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateInventoryBackorderPolicyRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
