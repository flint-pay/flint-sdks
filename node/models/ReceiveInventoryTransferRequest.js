import { d6778 as c0 } from '../descriptors/data/308.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d6698 as c1, d6699 as c9, d6700 as c10, d6701 as c11, d6697 as c12, d6694 as c13, d6695 as c14, d6696 as c15 } from '../descriptors/data/304.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d1229 as c2 } from '../descriptors/data/56.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d6791 as c3, d6792 as c4, d6793 as c5, d6794 as c6, d6795 as c7, d6796 as c8 } from '../descriptors/data/309.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d1229 as d1229 } from '../descriptors/data/56.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1229;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryProvenanceRequest"]:c0(),["InventorySourceSystemRequest"]:c1(),["ReceiveInventoryTransferRequest"]:c2(),["SharedCodec1280"]:c3(),["SharedCodec1281"]:c4(),["SharedCodec1282"]:c5(),["SharedCodec1283"]:c6(),["SharedCodec1284"]:c7(),["SharedCodec1285"]:c8(),["SharedCodec267"]:c9(),["SharedCodec268"]:c10(),["SharedCodec269"]:c11(),["SharedCodec270"]:c12(),["SharedCodec732"]:c13(),["SharedCodec733"]:c14(),["SharedCodec734"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReceiveInventoryTransferRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
