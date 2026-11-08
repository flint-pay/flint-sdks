import { d6826 as c0 } from '../descriptors/data/311.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d6002 as c1, d6003 as c2, d6004 as c3, d6005 as c4 } from '../descriptors/data/266.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d6006 as c5, d6007 as c6, d6008 as c7, d6009 as c8, d6010 as c9, d6011 as c10, d6012 as c11 } from '../descriptors/data/267.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d6826 as d6826 } from '../descriptors/data/311.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6826;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoicePaymentTermCalculationRequest"]:c0(),["SharedCodec880"]:c1(),["SharedCodec881"]:c2(),["SharedCodec882"]:c3(),["SharedCodec883"]:c4(),["SharedCodec884"]:c5(),["SharedCodec885"]:c6(),["SharedCodec886"]:c7(),["SharedCodec887"]:c8(),["SharedCodec888"]:c9(),["SharedCodec889"]:c10(),["SharedCodec890"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoicePaymentTermCalculationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
