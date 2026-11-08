import { d175 as c0 } from '../descriptors/data/7.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4475 as c1, d4476 as c2, d4477 as c3, d4478 as c4 } from '../descriptors/data/190.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d175 as d175 } from '../descriptors/data/7.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d175;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateCheckoutSessionCustomerVerificationRequest"]:c0(),["SharedCodec134"]:c1(),["SharedCodec135"]:c2(),["SharedCodec136"]:c3(),["SharedCodec137"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateCheckoutSessionCustomerVerificationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
