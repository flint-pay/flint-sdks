import { d4312 as c0 } from '../descriptors/data/181.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d1244 as c1 } from '../descriptors/data/58.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d6607 as c2 } from '../descriptors/data/311.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d6608 as c3, d6609 as c4, d6610 as c5, d6613 as c6, d6614 as c7, d6615 as c8, d6616 as c9, d6624 as c10 } from '../descriptors/data/312.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d6625 as c11, d6626 as c12, d6627 as c13 } from '../descriptors/data/313.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d1244 as d1244 } from '../descriptors/data/58.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1244;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["ReturnPolicyRevisionInputIneligible"]:c1(),["ReturnPolicyScope"]:c2(),["ReturnRestockingFeePolicy"]:c3(),["ReturnShippingPolicy"]:c4(),["ReturnWindow"]:c5(),["SharedCodec1193"]:c6(),["SharedCodec1194"]:c7(),["SharedCodec1195"]:c8(),["SharedCodec1196"]:c9(),["SharedCodec1204"]:c10(),["SharedCodec1205"]:c11(),["SharedCodec1206"]:c12(),["SharedCodec1207"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnPolicyRevisionInputIneligible(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
