import { d9192 as c0 } from '../descriptors/data/412.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d9112 as c1, d9108 as c3, d9109 as c4, d9110 as c5, d9113 as c8, d9114 as c9, d9115 as c10, d9111 as c11 } from '../descriptors/data/408.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d1818 as c2 } from '../descriptors/data/90.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d9219 as c6, d9220 as c7 } from '../descriptors/data/414.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d1818 as d1818 } from '../descriptors/data/90.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1818;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryProvenanceRequest"]:c0(),["InventorySourceSystemRequest"]:c1(),["ReturnInventoryTransferToOriginRequest"]:c2(),["SharedCodec1384"]:c3(),["SharedCodec1385"]:c4(),["SharedCodec1386"]:c5(),["SharedCodec2700"]:c6(),["SharedCodec2701"]:c7(),["SharedCodec447"]:c8(),["SharedCodec448"]:c9(),["SharedCodec449"]:c10(),["SharedCodec450"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnInventoryTransferToOriginRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
