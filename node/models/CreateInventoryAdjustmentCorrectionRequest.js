import { d303 as c0 } from '../descriptors/data/16.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d9086 as c1, d9096 as c10, d9097 as c11 } from '../descriptors/data/407.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d9112 as c2, d9108 as c3, d9109 as c4, d9110 as c5, d9113 as c6, d9114 as c7, d9115 as c8, d9111 as c9, d9098 as c12 } from '../descriptors/data/408.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d303 as d303 } from '../descriptors/data/16.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d303;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateInventoryAdjustmentCorrectionRequest"]:c0(),["InventoryAdjustmentSetLineRequest"]:c1(),["InventorySourceSystemRequest"]:c2(),["SharedCodec1384"]:c3(),["SharedCodec1385"]:c4(),["SharedCodec1386"]:c5(),["SharedCodec447"]:c6(),["SharedCodec448"]:c7(),["SharedCodec449"]:c8(),["SharedCodec450"]:c9(),["SharedCodec451"]:c10(),["SharedCodec452"]:c11(),["SharedCodec453"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateInventoryAdjustmentCorrectionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
