import { d9192 as c0 } from '../descriptors/data/412.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d9112 as c1, d9108 as c3, d9109 as c4, d9110 as c5, d9113 as c12, d9114 as c13, d9115 as c14, d9111 as c15 } from '../descriptors/data/408.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d1712 as c2 } from '../descriptors/data/85.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d9211 as c6, d9212 as c7, d9213 as c8, d9214 as c9, d9215 as c10, d9216 as c11 } from '../descriptors/data/414.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d1712 as d1712 } from '../descriptors/data/85.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1712;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryProvenanceRequest"]:c0(),["InventorySourceSystemRequest"]:c1(),["ReceiveInventoryTransferRequest"]:c2(),["SharedCodec1384"]:c3(),["SharedCodec1385"]:c4(),["SharedCodec1386"]:c5(),["SharedCodec2537"]:c6(),["SharedCodec2538"]:c7(),["SharedCodec2539"]:c8(),["SharedCodec2540"]:c9(),["SharedCodec2541"]:c10(),["SharedCodec2542"]:c11(),["SharedCodec447"]:c12(),["SharedCodec448"]:c13(),["SharedCodec449"]:c14(),["SharedCodec450"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReceiveInventoryTransferRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
