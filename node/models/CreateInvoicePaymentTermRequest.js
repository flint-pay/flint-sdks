import { d276 as c0 } from '../descriptors/data/14.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d7104 as c1, d7106 as c2 } from '../descriptors/data/331.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d5764 as c3 } from '../descriptors/data/255.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d6147 as c4, d6148 as c5, d6149 as c6, d6150 as c7, d6151 as c8, d6152 as c9, d6153 as c10, d6154 as c11, d6155 as c12, d6156 as c13, d6157 as c14, d6158 as c15, d6159 as c16, d6160 as c17, d6161 as c18 } from '../descriptors/data/278.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d276 as d276 } from '../descriptors/data/14.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d276;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateInvoicePaymentTermRequest"]:c0(),["InvoiceLateFeePolicyRequest"]:c1(),["InvoicePaymentTermCalculationRequest"]:c2(),["MoneyValue"]:c3(),["SharedCodec62"]:c4(),["SharedCodec63"]:c5(),["SharedCodec64"]:c6(),["SharedCodec65"]:c7(),["SharedCodec944"]:c8(),["SharedCodec945"]:c9(),["SharedCodec946"]:c10(),["SharedCodec947"]:c11(),["SharedCodec948"]:c12(),["SharedCodec949"]:c13(),["SharedCodec950"]:c14(),["SharedCodec951"]:c15(),["SharedCodec952"]:c16(),["SharedCodec953"]:c17(),["SharedCodec954"]:c18()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateInvoicePaymentTermRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
