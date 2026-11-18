import { d9192 as c0 } from '../descriptors/data/412.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d9112 as c1, d9108 as c2, d9109 as c3, d9110 as c4, d9113 as c5, d9114 as c6, d9115 as c7, d9111 as c8 } from '../descriptors/data/408.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d9192 as d9192 } from '../descriptors/data/412.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9192;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryProvenanceRequest"]:c0(),["InventorySourceSystemRequest"]:c1(),["SharedCodec1384"]:c2(),["SharedCodec1385"]:c3(),["SharedCodec1386"]:c4(),["SharedCodec447"]:c5(),["SharedCodec448"]:c6(),["SharedCodec449"]:c7(),["SharedCodec450"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryProvenanceRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
