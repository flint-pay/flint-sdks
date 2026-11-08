import { d4735 as c0, d4742 as c1, d4743 as c2, d4744 as c3 } from '../descriptors/data/206.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4745 as c4, d4746 as c5, d4747 as c6, d4748 as c7, d4749 as c8, d4750 as c9, d4751 as c10, d4752 as c11 } from '../descriptors/data/207.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4735 as d4735 } from '../descriptors/data/206.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4735;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoicePaymentTermCalculation"]:c0(),["SharedCodec790"]:c1(),["SharedCodec791"]:c2(),["SharedCodec792"]:c3(),["SharedCodec793"]:c4(),["SharedCodec794"]:c5(),["SharedCodec795"]:c6(),["SharedCodec796"]:c7(),["SharedCodec797"]:c8(),["SharedCodec798"]:c9(),["SharedCodec799"]:c10(),["SharedCodec800"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoicePaymentTermCalculation(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
