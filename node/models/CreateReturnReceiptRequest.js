import { d333 as c0 } from '../descriptors/data/19.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d8044 as c1 } from '../descriptors/data/386.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d8046 as c2, d8054 as c7, d8055 as c8, d8056 as c9, d8057 as c10, d8058 as c11, d8059 as c12 } from '../descriptors/data/387.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d7999 as c3 } from '../descriptors/data/383.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d7905 as c4, d7906 as c5, d7907 as c6 } from '../descriptors/data/377.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d6697 as c13 } from '../descriptors/data/304.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d333 as d333 } from '../descriptors/data/19.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d333;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnReceiptRequest"]:c0(),["ReturnReceiptLineItemRequest"]:c1(),["ReturnSourceSystemRequest"]:c2(),["ReturnUnverifiedItem"]:c3(),["SharedCodec1348"]:c4(),["SharedCodec1349"]:c5(),["SharedCodec1350"]:c6(),["SharedCodec1386"]:c7(),["SharedCodec1387"]:c8(),["SharedCodec1388"]:c9(),["SharedCodec1389"]:c10(),["SharedCodec1390"]:c11(),["SharedCodec1391"]:c12(),["SharedCodec270"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnReceiptRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
