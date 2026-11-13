import { d7124 as c0 } from '../descriptors/data/332.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d7172 as c1, d7173 as c2, d7174 as c3, d7175 as c4, d7176 as c5 } from '../descriptors/data/334.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d7124 as d7124 } from '../descriptors/data/332.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7124;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceScheduleDueWrite"]:c0(),["SharedCodec971"]:c1(),["SharedCodec972"]:c2(),["SharedCodec973"]:c3(),["SharedCodec974"]:c4(),["SharedCodec975"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceScheduleDueWrite(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
