import { d253 as c0 } from '../descriptors/data/12.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d6628 as c1 } from '../descriptors/data/301.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d5556 as c2 } from '../descriptors/data/241.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d6592 as c3, d6593 as c4, d6594 as c5, d6595 as c6, d6581 as c24 } from '../descriptors/data/299.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d6596 as c7, d6597 as c8, d6598 as c9, d6599 as c10, d6600 as c11, d6601 as c12, d6602 as c13, d6603 as c14, d6604 as c15, d6605 as c16, d6606 as c17, d6607 as c18, d6608 as c19, d6609 as c20, d6610 as c21, d6611 as c22, d6612 as c23, d6613 as c25, d6614 as c26, d6615 as c27 } from '../descriptors/data/300.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d6664 as c28, d6665 as c29 } from '../descriptors/data/303.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d253 as d253 } from '../descriptors/data/12.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d253;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateGiftCardRequest"]:c0(),["GiftCardNotificationRecipient"]:c1(),["MoneyValue"]:c2(),["SharedCodec237"]:c3(),["SharedCodec238"]:c4(),["SharedCodec239"]:c5(),["SharedCodec240"]:c6(),["SharedCodec241"]:c7(),["SharedCodec242"]:c8(),["SharedCodec243"]:c9(),["SharedCodec244"]:c10(),["SharedCodec245"]:c11(),["SharedCodec246"]:c12(),["SharedCodec247"]:c13(),["SharedCodec248"]:c14(),["SharedCodec249"]:c15(),["SharedCodec250"]:c16(),["SharedCodec251"]:c17(),["SharedCodec252"]:c18(),["SharedCodec253"]:c19(),["SharedCodec254"]:c20(),["SharedCodec255"]:c21(),["SharedCodec256"]:c22(),["SharedCodec257"]:c23(),["SharedCodec258"]:c24(),["SharedCodec259"]:c25(),["SharedCodec260"]:c26(),["SharedCodec261"]:c27(),["SharedCodec265"]:c28(),["SharedCodec266"]:c29()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateGiftCardRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
