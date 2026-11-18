import { d1237 as c0 } from '../descriptors/data/61.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d1237 as d1237 } from '../descriptors/data/61.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1237;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MarkPackageShippedRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeMarkPackageShippedRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
