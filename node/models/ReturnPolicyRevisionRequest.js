import { d4312 as c0 } from '../descriptors/data/181.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d1246 as c1 } from '../descriptors/data/59.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d6607 as c2 } from '../descriptors/data/311.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d6608 as c3, d6609 as c4, d6610 as c5, d6613 as c6, d6614 as c7, d6615 as c8, d6616 as c9, d6617 as c10, d6618 as c11, d6619 as c12, d6620 as c13, d6621 as c14, d6622 as c15, d6623 as c16, d6624 as c17 } from '../descriptors/data/312.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d6625 as c18, d6626 as c19, d6627 as c20 } from '../descriptors/data/313.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d1246 as d1246 } from '../descriptors/data/59.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1246;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["ReturnPolicyRevisionRequest"]:c1(),["ReturnPolicyScope"]:c2(),["ReturnRestockingFeePolicy"]:c3(),["ReturnShippingPolicy"]:c4(),["ReturnWindow"]:c5(),["SharedCodec1193"]:c6(),["SharedCodec1194"]:c7(),["SharedCodec1195"]:c8(),["SharedCodec1196"]:c9(),["SharedCodec1197"]:c10(),["SharedCodec1198"]:c11(),["SharedCodec1199"]:c12(),["SharedCodec1200"]:c13(),["SharedCodec1201"]:c14(),["SharedCodec1202"]:c15(),["SharedCodec1203"]:c16(),["SharedCodec1204"]:c17(),["SharedCodec1205"]:c18(),["SharedCodec1206"]:c19(),["SharedCodec1207"]:c20()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnPolicyRevisionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
