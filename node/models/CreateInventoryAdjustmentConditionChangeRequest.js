import { d256 as c0 } from '../descriptors/data/12.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d6668 as c1 } from '../descriptors/data/303.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d6698 as c2, d6699 as c3, d6700 as c4, d6701 as c5, d6697 as c6, d6694 as c7, d6695 as c8, d6696 as c9, d6684 as c10, d6685 as c11, d6686 as c12, d6687 as c13, d6688 as c14 } from '../descriptors/data/304.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d256 as d256 } from '../descriptors/data/12.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d256;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateInventoryAdjustmentConditionChangeRequest"]:c0(),["InventoryAdjustmentConditionChangeLineRequest"]:c1(),["InventorySourceSystemRequest"]:c2(),["SharedCodec267"]:c3(),["SharedCodec268"]:c4(),["SharedCodec269"]:c5(),["SharedCodec270"]:c6(),["SharedCodec732"]:c7(),["SharedCodec733"]:c8(),["SharedCodec734"]:c9(),["SharedCodec735"]:c10(),["SharedCodec736"]:c11(),["SharedCodec737"]:c12(),["SharedCodec738"]:c13(),["SharedCodec739"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateInventoryAdjustmentConditionChangeRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
