import { d8666 as c0 } from '../descriptors/data/383.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d8666 as d8666 } from '../descriptors/data/383.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8666;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ImageReferenceRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeImageReferenceRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
