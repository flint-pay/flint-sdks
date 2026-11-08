import { d320 as c0 } from '../descriptors/data/18.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d7019 as c1 } from '../descriptors/data/334.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d7020 as c2 } from '../descriptors/data/335.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d320 as d320 } from '../descriptors/data/18.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d320;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateSubscriptionLineItemRequest"]:c0(),["SharedCodec327"]:c1(),["SharedCodec328"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateSubscriptionLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
