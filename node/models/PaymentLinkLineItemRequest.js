import { d4312 as c0 } from '../descriptors/data/181.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4634 as c1 } from '../descriptors/data/199.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d1071 as c2 } from '../descriptors/data/51.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d6320 as c3 } from '../descriptors/data/293.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d6328 as c4, d6329 as c5, d6331 as c6, d6332 as c7, d6333 as c8, d6334 as c9, d6335 as c10 } from '../descriptors/data/294.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d6340 as c11, d6341 as c12, d6342 as c13 } from '../descriptors/data/295.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d6343 as c14 } from '../descriptors/data/296.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d1071 as d1071 } from '../descriptors/data/51.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1071;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderLineItemTax"]:c1(),["PaymentLinkLineItemRequest"]:c2(),["SharedCodec1001"]:c3(),["SharedCodec1009"]:c4(),["SharedCodec1010"]:c5(),["SharedCodec1012"]:c6(),["SharedCodec1013"]:c7(),["SharedCodec1014"]:c8(),["SharedCodec1015"]:c9(),["SharedCodec1016"]:c10(),["SharedCodec1021"]:c11(),["SharedCodec1022"]:c12(),["SharedCodec1023"]:c13(),["SharedCodec1024"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePaymentLinkLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
