import { d4429 as c0 } from '../descriptors/data/188.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4312 as c1 } from '../descriptors/data/181.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4529 as c2 } from '../descriptors/data/193.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d944 as c3 } from '../descriptors/data/45.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5689 as c4, d5691 as c5 } from '../descriptors/data/256.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d6154 as c6, d6155 as c7 } from '../descriptors/data/284.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4536 as c8, d4537 as c9, d4538 as c10 } from '../descriptors/data/194.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d944 as d944 } from '../descriptors/data/45.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d944;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MetadataRequest"]:c0(),["MoneyValue"]:c1(),["OrderCalculatedChargeTax"]:c2(),["OrderChargeRequest"]:c3(),["SharedCodec275"]:c4(),["SharedCodec277"]:c5(),["SharedCodec901"]:c6(),["SharedCodec902"]:c7(),["TaxCalculationRequest"]:c8(),["TaxComponentRequest"]:c9(),["TaxJurisdiction"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderChargeRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
