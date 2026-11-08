import { d247 as c0 } from '../descriptors/data/12.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d5556 as c1 } from '../descriptors/data/241.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d6592 as c2, d6593 as c3, d6594 as c4, d6595 as c5, d6581 as c23 } from '../descriptors/data/299.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d6596 as c6, d6597 as c7, d6598 as c8, d6599 as c9, d6600 as c10, d6601 as c11, d6602 as c12, d6603 as c13, d6604 as c14, d6605 as c15, d6606 as c16, d6607 as c17, d6608 as c18, d6609 as c19, d6610 as c20, d6611 as c21, d6612 as c22, d6613 as c24, d6614 as c25, d6615 as c26 } from '../descriptors/data/300.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d247 as d247 } from '../descriptors/data/12.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d247;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateGiftCardLoadRequest"]:c0(),["MoneyValue"]:c1(),["SharedCodec237"]:c2(),["SharedCodec238"]:c3(),["SharedCodec239"]:c4(),["SharedCodec240"]:c5(),["SharedCodec241"]:c6(),["SharedCodec242"]:c7(),["SharedCodec243"]:c8(),["SharedCodec244"]:c9(),["SharedCodec245"]:c10(),["SharedCodec246"]:c11(),["SharedCodec247"]:c12(),["SharedCodec248"]:c13(),["SharedCodec249"]:c14(),["SharedCodec250"]:c15(),["SharedCodec251"]:c16(),["SharedCodec252"]:c17(),["SharedCodec253"]:c18(),["SharedCodec254"]:c19(),["SharedCodec255"]:c20(),["SharedCodec256"]:c21(),["SharedCodec257"]:c22(),["SharedCodec258"]:c23(),["SharedCodec259"]:c24(),["SharedCodec260"]:c25(),["SharedCodec261"]:c26()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateGiftCardLoadRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
