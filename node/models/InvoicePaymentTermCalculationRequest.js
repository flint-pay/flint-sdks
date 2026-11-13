import { d7106 as c0 } from '../descriptors/data/331.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d6151 as c1, d6152 as c2, d6153 as c3, d6154 as c4, d6155 as c5, d6156 as c6, d6157 as c7, d6158 as c8, d6159 as c9, d6160 as c10, d6161 as c11 } from '../descriptors/data/278.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d7106 as d7106 } from '../descriptors/data/331.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7106;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoicePaymentTermCalculationRequest"]:c0(),["SharedCodec944"]:c1(),["SharedCodec945"]:c2(),["SharedCodec946"]:c3(),["SharedCodec947"]:c4(),["SharedCodec948"]:c5(),["SharedCodec949"]:c6(),["SharedCodec950"]:c7(),["SharedCodec951"]:c8(),["SharedCodec952"]:c9(),["SharedCodec953"]:c10(),["SharedCodec954"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoicePaymentTermCalculationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
