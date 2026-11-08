import { d4792 as c0, d4794 as c2, d4795 as c3, d4796 as c4, d4797 as c5 } from '../descriptors/data/209.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4312 as c1 } from '../descriptors/data/181.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4792 as d4792 } from '../descriptors/data/209.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4792;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreditNoteCorrectionRequest"]:c0(),["MoneyValue"]:c1(),["SharedCodec341"]:c2(),["SharedCodec342"]:c3(),["SharedCodec343"]:c4(),["SharedCodec344"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreditNoteCorrectionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
