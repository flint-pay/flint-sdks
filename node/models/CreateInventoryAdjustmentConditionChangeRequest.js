import { d302 as c0 } from '../descriptors/data/15.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d9082 as c1, d9087 as c6, d9088 as c7, d9089 as c8, d9090 as c9, d9091 as c10 } from '../descriptors/data/407.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d9112 as c2, d9108 as c3, d9109 as c4, d9110 as c5, d9113 as c11, d9114 as c12, d9115 as c13, d9111 as c14 } from '../descriptors/data/408.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d302 as d302 } from '../descriptors/data/15.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d302;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateInventoryAdjustmentConditionChangeRequest"]:c0(),["InventoryAdjustmentConditionChangeLineRequest"]:c1(),["InventorySourceSystemRequest"]:c2(),["SharedCodec1384"]:c3(),["SharedCodec1385"]:c4(),["SharedCodec1386"]:c5(),["SharedCodec1387"]:c6(),["SharedCodec1388"]:c7(),["SharedCodec1389"]:c8(),["SharedCodec1390"]:c9(),["SharedCodec1391"]:c10(),["SharedCodec447"]:c11(),["SharedCodec448"]:c12(),["SharedCodec449"]:c13(),["SharedCodec450"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateInventoryAdjustmentConditionChangeRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
