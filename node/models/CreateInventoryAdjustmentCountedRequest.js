import { d258 as c0 } from '../descriptors/data/12.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d6672 as c1, d6677 as c7, d6678 as c8, d6679 as c9 } from '../descriptors/data/303.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d6698 as c2, d6699 as c3, d6700 as c4, d6701 as c5, d6697 as c6, d6694 as c10, d6695 as c11, d6696 as c12 } from '../descriptors/data/304.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d258 as d258 } from '../descriptors/data/12.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d258;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateInventoryAdjustmentCountedRequest"]:c0(),["InventoryAdjustmentSetLineRequest"]:c1(),["InventorySourceSystemRequest"]:c2(),["SharedCodec267"]:c3(),["SharedCodec268"]:c4(),["SharedCodec269"]:c5(),["SharedCodec270"]:c6(),["SharedCodec271"]:c7(),["SharedCodec272"]:c8(),["SharedCodec273"]:c9(),["SharedCodec732"]:c10(),["SharedCodec733"]:c11(),["SharedCodec734"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateInventoryAdjustmentCountedRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
