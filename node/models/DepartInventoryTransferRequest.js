import { d572 as c0 } from '../descriptors/data/30.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d6778 as c1 } from '../descriptors/data/308.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d6698 as c2, d6699 as c3, d6700 as c4, d6701 as c5, d6697 as c6, d6694 as c9, d6695 as c10, d6696 as c11 } from '../descriptors/data/304.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d6817 as c7, d6818 as c8 } from '../descriptors/data/310.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d572 as d572 } from '../descriptors/data/30.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d572;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DepartInventoryTransferRequest"]:c0(),["InventoryProvenanceRequest"]:c1(),["InventorySourceSystemRequest"]:c2(),["SharedCodec267"]:c3(),["SharedCodec268"]:c4(),["SharedCodec269"]:c5(),["SharedCodec270"]:c6(),["SharedCodec613"]:c7(),["SharedCodec614"]:c8(),["SharedCodec732"]:c9(),["SharedCodec733"]:c10(),["SharedCodec734"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDepartInventoryTransferRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
