import { d306 as c0 } from '../descriptors/data/16.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d9082 as c1, d9084 as c2, d9086 as c3, d9087 as c8, d9088 as c9, d9089 as c10, d9090 as c11, d9091 as c12, d9096 as c17, d9097 as c18 } from '../descriptors/data/407.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d9112 as c4, d9108 as c5, d9109 as c6, d9110 as c7, d9113 as c13, d9114 as c14, d9115 as c15, d9111 as c16, d9098 as c19, d9099 as c20, d9100 as c21, d9101 as c22, d9102 as c23 } from '../descriptors/data/408.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d306 as d306 } from '../descriptors/data/16.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d306;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateInventoryAdjustmentRequest"]:c0(),["InventoryAdjustmentConditionChangeLineRequest"]:c1(),["InventoryAdjustmentQuantityLineRequest"]:c2(),["InventoryAdjustmentSetLineRequest"]:c3(),["InventorySourceSystemRequest"]:c4(),["SharedCodec1384"]:c5(),["SharedCodec1385"]:c6(),["SharedCodec1386"]:c7(),["SharedCodec1387"]:c8(),["SharedCodec1388"]:c9(),["SharedCodec1389"]:c10(),["SharedCodec1390"]:c11(),["SharedCodec1391"]:c12(),["SharedCodec447"]:c13(),["SharedCodec448"]:c14(),["SharedCodec449"]:c15(),["SharedCodec450"]:c16(),["SharedCodec451"]:c17(),["SharedCodec452"]:c18(),["SharedCodec453"]:c19(),["SharedCodec454"]:c20(),["SharedCodec455"]:c21(),["SharedCodec456"]:c22(),["SharedCodec457"]:c23()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateInventoryAdjustmentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
