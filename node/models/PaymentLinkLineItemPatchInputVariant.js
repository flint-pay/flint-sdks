import { d4312 as c0 } from '../descriptors/data/181.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4634 as c1 } from '../descriptors/data/199.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d1069 as c2 } from '../descriptors/data/51.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d6320 as c3 } from '../descriptors/data/293.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d6334 as c4, d6335 as c5 } from '../descriptors/data/294.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d1069 as d1069 } from '../descriptors/data/51.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1069;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderLineItemTax"]:c1(),["PaymentLinkLineItemPatchInputVariant"]:c2(),["SharedCodec1001"]:c3(),["SharedCodec1015"]:c4(),["SharedCodec1016"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePaymentLinkLineItemPatchInputVariant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
