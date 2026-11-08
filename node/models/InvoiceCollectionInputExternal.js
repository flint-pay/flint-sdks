import { d772 as c0 } from '../descriptors/data/37.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4790 as c1, d4791 as c2 } from '../descriptors/data/209.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4312 as c3 } from '../descriptors/data/181.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4762 as c4, d4763 as c5 } from '../descriptors/data/208.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d772 as d772 } from '../descriptors/data/37.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d772;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceCollectionInputExternal"]:c0(),["InvoicePaymentOptionLimit"]:c1(),["InvoicePaymentPolicy"]:c2(),["MoneyValue"]:c3(),["SharedCodec717"]:c4(),["SharedCodec718"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceCollectionInputExternal(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
