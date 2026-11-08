import { d5793 as c0, d5791 as c1, d5792 as c2, d5790 as c4 } from '../descriptors/data/254.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d5686 as c3 } from '../descriptors/data/248.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d6524 as c5, d6525 as c6, d6526 as c7, d6527 as c8, d6528 as c9, d6529 as c10, d6530 as c11, d6531 as c12 } from '../descriptors/data/295.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d6532 as c13, d6533 as c14 } from '../descriptors/data/296.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d6130 as c15, d6131 as c16 } from '../descriptors/data/273.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d5433 as c17 } from '../descriptors/data/233.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d5433 as d5433 } from '../descriptors/data/233.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5433;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["SharedCodec0"]:c1(),["SharedCodec1"]:c2(),["SharedCodec1563"]:c3(),["SharedCodec1566"]:c4(),["SharedCodec1582"]:c5(),["SharedCodec1583"]:c6(),["SharedCodec1584"]:c7(),["SharedCodec1585"]:c8(),["SharedCodec1586"]:c9(),["SharedCodec1587"]:c10(),["SharedCodec1588"]:c11(),["SharedCodec1589"]:c12(),["SharedCodec1590"]:c13(),["SharedCodec1591"]:c14(),["SharedCodec933"]:c15(),["SharedCodec934"]:c16(),["UpdateFulfillmentRequest"]:c17()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateFulfillmentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
