import { d5556 as c0 } from '../descriptors/data/241.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d5964 as c1 } from '../descriptors/data/264.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d7590 as c2 } from '../descriptors/data/357.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d7613 as c3 } from '../descriptors/data/359.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d7621 as c4, d7622 as c5, d7624 as c6, d7625 as c7, d7626 as c8, d7627 as c9, d7628 as c10, d7629 as c11, d7630 as c12, d7631 as c13 } from '../descriptors/data/360.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d7632 as c14 } from '../descriptors/data/361.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d7590 as d7590 } from '../descriptors/data/357.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7590;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderLineItemTaxRequest"]:c1(),["PaymentLinkLineItemPatchRequest"]:c2(),["SharedCodec1114"]:c3(),["SharedCodec1122"]:c4(),["SharedCodec1123"]:c5(),["SharedCodec1125"]:c6(),["SharedCodec1126"]:c7(),["SharedCodec1127"]:c8(),["SharedCodec1128"]:c9(),["SharedCodec1129"]:c10(),["SharedCodec1130"]:c11(),["SharedCodec1131"]:c12(),["SharedCodec1132"]:c13(),["SharedCodec1133"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePaymentLinkLineItemPatchRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
