import { d288 as c0 } from '../descriptors/data/17.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4429 as c1 } from '../descriptors/data/188.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4312 as c2 } from '../descriptors/data/181.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d1246 as c3 } from '../descriptors/data/59.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d6607 as c4 } from '../descriptors/data/311.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d6608 as c5, d6609 as c6, d6610 as c7, d6613 as c8, d6614 as c9, d6615 as c10, d6616 as c11, d6617 as c12, d6618 as c13, d6619 as c14, d6620 as c15, d6621 as c16, d6622 as c17, d6623 as c18, d6624 as c19 } from '../descriptors/data/312.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d6625 as c20, d6626 as c21, d6627 as c22 } from '../descriptors/data/313.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d288 as d288 } from '../descriptors/data/17.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d288;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnPolicyRequest"]:c0(),["MetadataRequest"]:c1(),["MoneyValue"]:c2(),["ReturnPolicyRevisionRequest"]:c3(),["ReturnPolicyScope"]:c4(),["ReturnRestockingFeePolicy"]:c5(),["ReturnShippingPolicy"]:c6(),["ReturnWindow"]:c7(),["SharedCodec1193"]:c8(),["SharedCodec1194"]:c9(),["SharedCodec1195"]:c10(),["SharedCodec1196"]:c11(),["SharedCodec1197"]:c12(),["SharedCodec1198"]:c13(),["SharedCodec1199"]:c14(),["SharedCodec1200"]:c15(),["SharedCodec1201"]:c16(),["SharedCodec1202"]:c17(),["SharedCodec1203"]:c18(),["SharedCodec1204"]:c19(),["SharedCodec1205"]:c20(),["SharedCodec1206"]:c21(),["SharedCodec1207"]:c22()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnPolicyRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
