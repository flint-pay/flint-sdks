import { d4734 as c0, d4738 as c2, d4739 as c3, d4740 as c4, d4741 as c5 } from '../descriptors/data/206.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4312 as c1 } from '../descriptors/data/181.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4734 as d4734 } from '../descriptors/data/206.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4734;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceLateFeePolicy"]:c0(),["MoneyValue"]:c1(),["SharedCodec46"]:c2(),["SharedCodec47"]:c3(),["SharedCodec48"]:c4(),["SharedCodec49"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceLateFeePolicy(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
