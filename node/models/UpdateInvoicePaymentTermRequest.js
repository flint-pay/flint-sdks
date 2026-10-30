import { d4704 as c0, d4705 as c2, d4706 as c3, d4707 as c4, d4708 as c5, d4709 as c6, d4710 as c7, d4711 as c8, d4712 as c9, d4713 as c10 } from '../descriptors/data/205.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4281 as c1 } from '../descriptors/data/180.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4714 as c11, d4715 as c12, d4716 as c13, d4717 as c14, d4718 as c15, d4719 as c16, d4720 as c17, d4721 as c18 } from '../descriptors/data/206.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4166 as c19 } from '../descriptors/data/172.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4166 as d4166 } from '../descriptors/data/172.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4166;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoicePaymentTermCalculation"]:c0(),["MoneyValue"]:c1(),["SharedCodec44"]:c2(),["SharedCodec45"]:c3(),["SharedCodec46"]:c4(),["SharedCodec47"]:c5(),["SharedCodec48"]:c6(),["SharedCodec49"]:c7(),["SharedCodec788"]:c8(),["SharedCodec789"]:c9(),["SharedCodec790"]:c10(),["SharedCodec791"]:c11(),["SharedCodec792"]:c12(),["SharedCodec793"]:c13(),["SharedCodec794"]:c14(),["SharedCodec795"]:c15(),["SharedCodec796"]:c16(),["SharedCodec797"]:c17(),["SharedCodec798"]:c18(),["UpdateInvoicePaymentTermRequest"]:c19()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateInvoicePaymentTermRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
