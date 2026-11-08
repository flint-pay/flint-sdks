import { d5556 as c0 } from '../descriptors/data/241.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d7357 as c1, d7360 as c2, d7368 as c4, d7369 as c5, d7370 as c6, d7371 as c7, d7372 as c8, d7373 as c9 } from '../descriptors/data/344.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d1063 as c3 } from '../descriptors/data/49.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d7384 as c10, d7385 as c11, d7386 as c12 } from '../descriptors/data/345.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d1063 as d1063 } from '../descriptors/data/49.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1063;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderGiftCardAllocationAcceptance"]:c1(),["OrderPaymentIntentSelection"]:c2(),["PayOrderRequestConfirmPaymentIntents"]:c3(),["SharedCodec1008"]:c4(),["SharedCodec1009"]:c5(),["SharedCodec1022"]:c6(),["SharedCodec1023"]:c7(),["SharedCodec1024"]:c8(),["SharedCodec1025"]:c9(),["SharedCodec1164"]:c10(),["SharedCodec1165"]:c11(),["SharedCodec1166"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePayOrderRequestConfirmPaymentIntents(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
