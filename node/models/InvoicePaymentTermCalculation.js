import { d4704 as c0, d4711 as c1, d4712 as c2, d4713 as c3 } from '../descriptors/data/205.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d4714 as c4, d4715 as c5, d4716 as c6, d4717 as c7, d4718 as c8, d4719 as c9, d4720 as c10, d4721 as c11 } from '../descriptors/data/206.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d4704 as d4704 } from '../descriptors/data/205.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4704;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoicePaymentTermCalculation"]:c0(),["SharedCodec788"]:c1(),["SharedCodec789"]:c2(),["SharedCodec790"]:c3(),["SharedCodec791"]:c4(),["SharedCodec792"]:c5(),["SharedCodec793"]:c6(),["SharedCodec794"]:c7(),["SharedCodec795"]:c8(),["SharedCodec796"]:c9(),["SharedCodec797"]:c10(),["SharedCodec798"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoicePaymentTermCalculation(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
