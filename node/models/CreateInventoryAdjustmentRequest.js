import { d309 as c0 } from '../descriptors/data/16.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d9130 as c1, d9132 as c2, d9134 as c3, d9135 as c8, d9136 as c9, d9137 as c10, d9138 as c11, d9139 as c12, d9144 as c17, d9145 as c18 } from '../descriptors/data/413.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d9160 as c4, d9156 as c5, d9157 as c6, d9158 as c7, d9161 as c13, d9162 as c14, d9163 as c15, d9159 as c16, d9146 as c19, d9147 as c20, d9148 as c21, d9149 as c22, d9150 as c23 } from '../descriptors/data/414.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d309 as d309 } from '../descriptors/data/16.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d309;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateInventoryAdjustmentRequest"]:c0(),["InventoryAdjustmentConditionChangeLineRequest"]:c1(),["InventoryAdjustmentQuantityLineRequest"]:c2(),["InventoryAdjustmentSetLineRequest"]:c3(),["InventorySourceSystemRequest"]:c4(),["SharedCodec1391"]:c5(),["SharedCodec1392"]:c6(),["SharedCodec1393"]:c7(),["SharedCodec1394"]:c8(),["SharedCodec1395"]:c9(),["SharedCodec1396"]:c10(),["SharedCodec1397"]:c11(),["SharedCodec1398"]:c12(),["SharedCodec452"]:c13(),["SharedCodec453"]:c14(),["SharedCodec454"]:c15(),["SharedCodec455"]:c16(),["SharedCodec456"]:c17(),["SharedCodec457"]:c18(),["SharedCodec458"]:c19(),["SharedCodec459"]:c20(),["SharedCodec460"]:c21(),["SharedCodec461"]:c22(),["SharedCodec462"]:c23()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateInventoryAdjustmentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
