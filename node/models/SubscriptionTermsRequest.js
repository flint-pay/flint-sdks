import { d4677 as c0, d4678 as c1 } from '../descriptors/data/201.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d6988 as c2 } from '../descriptors/data/333.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d1475 as c3 } from '../descriptors/data/68.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4097 as c4 } from '../descriptors/data/168.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4145 as c5 } from '../descriptors/data/170.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4145 as d4145 } from '../descriptors/data/170.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4145;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec101"]:c0(),["SharedCodec102"]:c1(),["SharedCodec1339"]:c2(),["SharedCodec1340"]:c3(),["SubscriptionOfferLineItemRequest"]:c4(),["SubscriptionTermsRequest"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionTermsRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
