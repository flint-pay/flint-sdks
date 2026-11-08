import { d4312 as c0 } from '../descriptors/data/181.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d1167 as c1 } from '../descriptors/data/55.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d1246 as c2 } from '../descriptors/data/59.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d6607 as c3 } from '../descriptors/data/311.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d6608 as c4, d6609 as c5, d6610 as c6, d6613 as c7, d6614 as c8, d6615 as c9, d6616 as c10, d6617 as c11, d6618 as c12, d6619 as c13, d6620 as c14, d6621 as c15, d6622 as c16, d6623 as c17, d6624 as c18 } from '../descriptors/data/312.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d6625 as c19, d6626 as c20, d6627 as c21 } from '../descriptors/data/313.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d1167 as d1167 } from '../descriptors/data/55.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1167;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PublishReturnPolicyRevisionRequest"]:c1(),["ReturnPolicyRevisionRequest"]:c2(),["ReturnPolicyScope"]:c3(),["ReturnRestockingFeePolicy"]:c4(),["ReturnShippingPolicy"]:c5(),["ReturnWindow"]:c6(),["SharedCodec1193"]:c7(),["SharedCodec1194"]:c8(),["SharedCodec1195"]:c9(),["SharedCodec1196"]:c10(),["SharedCodec1197"]:c11(),["SharedCodec1198"]:c12(),["SharedCodec1199"]:c13(),["SharedCodec1200"]:c14(),["SharedCodec1201"]:c15(),["SharedCodec1202"]:c16(),["SharedCodec1203"]:c17(),["SharedCodec1204"]:c18(),["SharedCodec1205"]:c19(),["SharedCodec1206"]:c20(),["SharedCodec1207"]:c21()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePublishReturnPolicyRevisionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
