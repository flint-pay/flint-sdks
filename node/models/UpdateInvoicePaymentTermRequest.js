import { d4735 as c0, d4736 as c2, d4737 as c3, d4738 as c4, d4739 as c5, d4740 as c6, d4741 as c7, d4742 as c8, d4743 as c9, d4744 as c10 } from '../descriptors/data/206.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4312 as c1 } from '../descriptors/data/181.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4745 as c11, d4746 as c12, d4747 as c13, d4748 as c14, d4749 as c15, d4750 as c16, d4751 as c17, d4752 as c18 } from '../descriptors/data/207.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4197 as c19 } from '../descriptors/data/173.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4197 as d4197 } from '../descriptors/data/173.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4197;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoicePaymentTermCalculation"]:c0(),["MoneyValue"]:c1(),["SharedCodec44"]:c2(),["SharedCodec45"]:c3(),["SharedCodec46"]:c4(),["SharedCodec47"]:c5(),["SharedCodec48"]:c6(),["SharedCodec49"]:c7(),["SharedCodec790"]:c8(),["SharedCodec791"]:c9(),["SharedCodec792"]:c10(),["SharedCodec793"]:c11(),["SharedCodec794"]:c12(),["SharedCodec795"]:c13(),["SharedCodec796"]:c14(),["SharedCodec797"]:c15(),["SharedCodec798"]:c16(),["SharedCodec799"]:c17(),["SharedCodec800"]:c18(),["UpdateInvoicePaymentTermRequest"]:c19()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateInvoicePaymentTermRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
