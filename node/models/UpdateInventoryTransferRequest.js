import { d6801 as c0, d6802 as c1, d6803 as c2 } from '../descriptors/data/309.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d5440 as c3 } from '../descriptors/data/233.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d5440 as d5440 } from '../descriptors/data/233.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5440;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec1592"]:c0(),["SharedCodec1593"]:c1(),["SharedCodec1594"]:c2(),["UpdateInventoryTransferRequest"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateInventoryTransferRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
