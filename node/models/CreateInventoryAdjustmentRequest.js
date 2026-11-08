import { d260 as c0 } from '../descriptors/data/13.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d6668 as c1, d6670 as c2, d6672 as c3, d6677 as c9, d6678 as c10, d6679 as c11, d6680 as c12, d6681 as c13 } from '../descriptors/data/303.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d6698 as c4, d6699 as c5, d6700 as c6, d6701 as c7, d6697 as c8, d6682 as c14, d6683 as c15, d6694 as c16, d6695 as c17, d6696 as c18, d6684 as c19, d6685 as c20, d6686 as c21, d6687 as c22, d6688 as c23 } from '../descriptors/data/304.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d260 as d260 } from '../descriptors/data/13.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d260;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateInventoryAdjustmentRequest"]:c0(),["InventoryAdjustmentConditionChangeLineRequest"]:c1(),["InventoryAdjustmentQuantityLineRequest"]:c2(),["InventoryAdjustmentSetLineRequest"]:c3(),["InventorySourceSystemRequest"]:c4(),["SharedCodec267"]:c5(),["SharedCodec268"]:c6(),["SharedCodec269"]:c7(),["SharedCodec270"]:c8(),["SharedCodec271"]:c9(),["SharedCodec272"]:c10(),["SharedCodec273"]:c11(),["SharedCodec274"]:c12(),["SharedCodec275"]:c13(),["SharedCodec276"]:c14(),["SharedCodec277"]:c15(),["SharedCodec732"]:c16(),["SharedCodec733"]:c17(),["SharedCodec734"]:c18(),["SharedCodec735"]:c19(),["SharedCodec736"]:c20(),["SharedCodec737"]:c21(),["SharedCodec738"]:c22(),["SharedCodec739"]:c23()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateInventoryAdjustmentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
