import { d23 as c0 } from '../descriptors/data/1.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d23 as d23 } from '../descriptors/data/1.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d23;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ApplyInventoryCountRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeApplyInventoryCountRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
