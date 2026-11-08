import { d312 as c0 } from '../descriptors/data/17.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d5685 as c1 } from '../descriptors/data/248.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d5556 as c2 } from '../descriptors/data/241.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d7829 as c3, d7830 as c4, d7832 as c7, d7833 as c8, d7834 as c9, d7835 as c10, d7836 as c11 } from '../descriptors/data/372.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d7338 as c5, d7339 as c6 } from '../descriptors/data/343.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d7838 as c12, d7839 as c13, d7840 as c14, d7841 as c15 } from '../descriptors/data/373.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d6581 as c16 } from '../descriptors/data/299.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d7852 as c17, d7853 as c18, d7854 as c19, d7855 as c20, d7856 as c21, d7857 as c22, d7858 as c23, d7859 as c24 } from '../descriptors/data/374.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d312 as d312 } from '../descriptors/data/17.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d312;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateRefundRequest"]:c0(),["MetadataRequest"]:c1(),["MoneyValue"]:c2(),["RefundAdjustmentAudit"]:c3(),["RefundAdjustmentReasonRequest"]:c4(),["RefundCharge"]:c5(),["RefundDestinations"]:c6(),["RefundLineItem"]:c7(),["RefundLineItemAdjustmentIn"]:c8(),["RefundLineItemAdjustmentRefundIn"]:c9(),["RefundTaxBreakdownRefundIn"]:c10(),["RefundTenderAllocationRequest"]:c11(),["SharedCodec1296"]:c12(),["SharedCodec1297"]:c13(),["SharedCodec1298"]:c14(),["SharedCodec1299"]:c15(),["SharedCodec258"]:c16(),["SharedCodec336"]:c17(),["SharedCodec337"]:c18(),["SharedCodec338"]:c19(),["SharedCodec339"]:c20(),["SharedCodec340"]:c21(),["SharedCodec341"]:c22(),["SharedCodec342"]:c23(),["SharedCodec343"]:c24()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateRefundRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
