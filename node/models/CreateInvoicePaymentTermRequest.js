import { d268 as c0 } from '../descriptors/data/13.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d6824 as c1, d6826 as c2 } from '../descriptors/data/311.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d5556 as c3 } from '../descriptors/data/241.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d5998 as c4, d5999 as c5, d6000 as c6, d6001 as c7, d6002 as c8, d6003 as c9, d6004 as c10, d6005 as c11 } from '../descriptors/data/266.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d6006 as c12, d6007 as c13, d6008 as c14, d6009 as c15, d6010 as c16, d6011 as c17, d6012 as c18 } from '../descriptors/data/267.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d268 as d268 } from '../descriptors/data/13.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d268;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateInvoicePaymentTermRequest"]:c0(),["InvoiceLateFeePolicyRequest"]:c1(),["InvoicePaymentTermCalculationRequest"]:c2(),["MoneyValue"]:c3(),["SharedCodec57"]:c4(),["SharedCodec58"]:c5(),["SharedCodec59"]:c6(),["SharedCodec60"]:c7(),["SharedCodec880"]:c8(),["SharedCodec881"]:c9(),["SharedCodec882"]:c10(),["SharedCodec883"]:c11(),["SharedCodec884"]:c12(),["SharedCodec885"]:c13(),["SharedCodec886"]:c14(),["SharedCodec887"]:c15(),["SharedCodec888"]:c16(),["SharedCodec889"]:c17(),["SharedCodec890"]:c18()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateInvoicePaymentTermRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
