import { d4385 as c0 } from '../descriptors/data/185.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d7102 as c1 } from '../descriptors/data/339.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4364 as c2 } from '../descriptors/data/184.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4331 as c3 } from '../descriptors/data/182.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4257 as c4 } from '../descriptors/data/178.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d6256 as c5 } from '../descriptors/data/289.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4257 as d4257 } from '../descriptors/data/178.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4257;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec1363"]:c0(),["SharedCodec1482"]:c1(),["SharedCodec2"]:c2(),["SharedCodec3"]:c3(),["UpdateWorkloadIdentityRequest"]:c4(),["WorkloadIdentityClaimConditionRequest"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateWorkloadIdentityRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
