import { d5603 as c0 } from '../descriptors/data/252.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4765 as c1, d4766 as c2, d4768 as c3, d4770 as c4 } from '../descriptors/data/208.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5651 as c5, d5652 as c6, d5653 as c7, d5654 as c8 } from '../descriptors/data/254.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5655 as c9, d5656 as c10, d5657 as c11 } from '../descriptors/data/255.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5603 as d5603 } from '../descriptors/data/252.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5603;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoicePaymentDueRequest"]:c0(),["SharedCodec777"]:c1(),["SharedCodec778"]:c2(),["SharedCodec780"]:c3(),["SharedCodec782"]:c4(),["SharedCodec783"]:c5(),["SharedCodec784"]:c6(),["SharedCodec785"]:c7(),["SharedCodec786"]:c8(),["SharedCodec787"]:c9(),["SharedCodec788"]:c10(),["SharedCodec789"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoicePaymentDueRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
