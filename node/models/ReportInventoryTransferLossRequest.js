import { d6778 as c0 } from '../descriptors/data/308.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d6698 as c1, d6699 as c5, d6700 as c6, d6701 as c7, d6697 as c8, d6694 as c9, d6695 as c10, d6696 as c11 } from '../descriptors/data/304.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d1256 as c2 } from '../descriptors/data/57.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d6797 as c3, d6798 as c4 } from '../descriptors/data/309.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d1256 as d1256 } from '../descriptors/data/57.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1256;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryProvenanceRequest"]:c0(),["InventorySourceSystemRequest"]:c1(),["ReportInventoryTransferLossRequest"]:c2(),["SharedCodec1315"]:c3(),["SharedCodec1316"]:c4(),["SharedCodec267"]:c5(),["SharedCodec268"]:c6(),["SharedCodec269"]:c7(),["SharedCodec270"]:c8(),["SharedCodec732"]:c9(),["SharedCodec733"]:c10(),["SharedCodec734"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReportInventoryTransferLossRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
