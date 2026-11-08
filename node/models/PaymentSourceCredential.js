import { d1097 as c0 } from '../descriptors/data/53.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d6077 as c1, d6078 as c2, d6079 as c3 } from '../descriptors/data/280.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d1097 as d1097 } from '../descriptors/data/53.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1097;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PaymentSourceCredential"]:c0(),["SharedCodec1042"]:c1(),["SharedCodec1043"]:c2(),["SharedCodec1044"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePaymentSourceCredential(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
