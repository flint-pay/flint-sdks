import { d9082 as c0, d9087 as c1, d9088 as c2, d9089 as c3, d9090 as c4, d9091 as c5 } from '../descriptors/data/406.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d9082 as d9082 } from '../descriptors/data/406.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9082;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryAdjustmentConditionChangeLineRequest"]:c0(),["SharedCodec1387"]:c1(),["SharedCodec1388"]:c2(),["SharedCodec1389"]:c3(),["SharedCodec1390"]:c4(),["SharedCodec1391"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryAdjustmentConditionChangeLineRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
