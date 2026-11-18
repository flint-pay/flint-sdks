import { d9112 as c0, d9108 as c1, d9109 as c2, d9110 as c3, d9111 as c4 } from '../descriptors/data/408.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d9112 as d9112 } from '../descriptors/data/408.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9112;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventorySourceSystemRequest"]:c0(),["SharedCodec1384"]:c1(),["SharedCodec1385"]:c2(),["SharedCodec1386"]:c3(),["SharedCodec450"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventorySourceSystemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
