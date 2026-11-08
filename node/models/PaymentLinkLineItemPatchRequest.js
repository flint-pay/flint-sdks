import { d4312 as c0 } from '../descriptors/data/181.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4634 as c1 } from '../descriptors/data/199.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d1070 as c2 } from '../descriptors/data/51.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d6320 as c3 } from '../descriptors/data/293.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d6328 as c4, d6329 as c5, d6331 as c6, d6332 as c7, d6333 as c8, d6334 as c9, d6335 as c10, d6336 as c11 } from '../descriptors/data/294.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d6337 as c12, d6338 as c13, d6339 as c14 } from '../descriptors/data/295.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d1070 as d1070 } from '../descriptors/data/51.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1070;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderLineItemTax"]:c1(),["PaymentLinkLineItemPatchRequest"]:c2(),["SharedCodec1001"]:c3(),["SharedCodec1009"]:c4(),["SharedCodec1010"]:c5(),["SharedCodec1012"]:c6(),["SharedCodec1013"]:c7(),["SharedCodec1014"]:c8(),["SharedCodec1015"]:c9(),["SharedCodec1016"]:c10(),["SharedCodec1017"]:c11(),["SharedCodec1018"]:c12(),["SharedCodec1019"]:c13(),["SharedCodec1020"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePaymentLinkLineItemPatchRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
