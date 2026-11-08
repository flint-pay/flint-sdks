import { d5556 as c0 } from '../descriptors/data/241.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d7357 as c1, d7360 as c2, d7365 as c4, d7366 as c5, d7368 as c6, d7369 as c7, d7370 as c8, d7371 as c9, d7372 as c10, d7373 as c11, d7380 as c12, d7381 as c13, d7382 as c14 } from '../descriptors/data/344.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d1062 as c3 } from '../descriptors/data/49.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d7383 as c15, d7384 as c16, d7385 as c17, d7386 as c18, d7387 as c19, d7388 as c20, d7389 as c21 } from '../descriptors/data/345.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d1062 as d1062 } from '../descriptors/data/49.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1062;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderGiftCardAllocationAcceptance"]:c1(),["OrderPaymentIntentSelection"]:c2(),["PayOrderRequest"]:c3(),["PaymentSourceCredential"]:c4(),["PaymentSourceCredentialToken"]:c5(),["SharedCodec1008"]:c6(),["SharedCodec1009"]:c7(),["SharedCodec1022"]:c8(),["SharedCodec1023"]:c9(),["SharedCodec1024"]:c10(),["SharedCodec1025"]:c11(),["SharedCodec1160"]:c12(),["SharedCodec1161"]:c13(),["SharedCodec1162"]:c14(),["SharedCodec1163"]:c15(),["SharedCodec1164"]:c16(),["SharedCodec1165"]:c17(),["SharedCodec1166"]:c18(),["SharedCodec1167"]:c19(),["SharedCodec1168"]:c20(),["SharedCodec1169"]:c21()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePayOrderRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
