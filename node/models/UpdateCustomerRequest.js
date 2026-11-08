import { d6140 as c0, d6141 as c6, d6142 as c7 } from '../descriptors/data/274.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d5791 as c1, d5792 as c2 } from '../descriptors/data/254.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d5687 as c3, d5688 as c4, d5686 as c5 } from '../descriptors/data/248.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d6104 as c8, d6105 as c9, d6106 as c10 } from '../descriptors/data/272.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d6130 as c11, d6131 as c12 } from '../descriptors/data/273.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d5424 as c13 } from '../descriptors/data/232.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d5424 as d5424 } from '../descriptors/data/232.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5424;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DocumentTaxIDRequest"]:c0(),["SharedCodec0"]:c1(),["SharedCodec1"]:c2(),["SharedCodec1561"]:c3(),["SharedCodec1562"]:c4(),["SharedCodec1563"]:c5(),["SharedCodec1568"]:c6(),["SharedCodec1569"]:c7(),["SharedCodec1570"]:c8(),["SharedCodec1571"]:c9(),["SharedCodec1572"]:c10(),["SharedCodec933"]:c11(),["SharedCodec934"]:c12(),["UpdateCustomerRequest"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateCustomerRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
