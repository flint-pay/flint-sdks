import { d6920 as c0 } from '../descriptors/data/315.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d6920 as d6920 } from '../descriptors/data/315.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6920;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["OrderTaxJurisdictionRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderTaxJurisdictionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
