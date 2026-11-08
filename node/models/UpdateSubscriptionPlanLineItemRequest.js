import { d4429 as c0 } from '../descriptors/data/188.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4312 as c1 } from '../descriptors/data/181.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4634 as c2, d4633 as c19 } from '../descriptors/data/199.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d6950 as c3, d6951 as c4, d6952 as c5, d6953 as c6 } from '../descriptors/data/330.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d1487 as c7, d1488 as c8 } from '../descriptors/data/68.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d1489 as c9 } from '../descriptors/data/69.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5059 as c10, d5060 as c11, d5061 as c12, d5062 as c13, d5063 as c15 } from '../descriptors/data/223.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5082 as c14, d5083 as c16, d5084 as c17 } from '../descriptors/data/224.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4637 as c18 } from '../descriptors/data/200.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4361 as c20 } from '../descriptors/data/184.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4252 as c21 } from '../descriptors/data/178.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4252 as d4252 } from '../descriptors/data/178.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4252;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MetadataRequest"]:c0(),["MoneyValue"]:c1(),["OrderLineItemTax"]:c2(),["SharedCodec1320"]:c3(),["SharedCodec1321"]:c4(),["SharedCodec1322"]:c5(),["SharedCodec1323"]:c6(),["SharedCodec1476"]:c7(),["SharedCodec1477"]:c8(),["SharedCodec1478"]:c9(),["SharedCodec252"]:c10(),["SharedCodec253"]:c11(),["SharedCodec254"]:c12(),["SharedCodec255"]:c13(),["SharedCodec256"]:c14(),["SharedCodec257"]:c15(),["SharedCodec258"]:c16(),["SharedCodec259"]:c17(),["SharedCodec84"]:c18(),["SharedCodec85"]:c19(),["TextModifierRequest"]:c20(),["UpdateSubscriptionPlanLineItemRequest"]:c21()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateSubscriptionPlanLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
