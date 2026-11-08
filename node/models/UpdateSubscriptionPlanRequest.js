import { d4439 as c0, d4440 as c1, d4429 as c4, d4431 as c11, d4432 as c12, d4430 as c13 } from '../descriptors/data/188.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d6423 as c2 } from '../descriptors/data/300.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d6949 as c3, d6950 as c7, d6951 as c8, d6952 as c9, d6953 as c10 } from '../descriptors/data/330.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4312 as c5 } from '../descriptors/data/181.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4634 as c6, d4633 as c31 } from '../descriptors/data/199.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4455 as c14 } from '../descriptors/data/189.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4808 as c15 } from '../descriptors/data/210.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d1487 as c16, d1488 as c17 } from '../descriptors/data/68.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d1489 as c18 } from '../descriptors/data/69.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5059 as c19, d5060 as c20, d5061 as c21, d5062 as c22, d5063 as c24 } from '../descriptors/data/223.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5082 as c23, d5083 as c25, d5084 as c26 } from '../descriptors/data/224.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5539 as c27, d5540 as c28, d5541 as c29 } from '../descriptors/data/248.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4637 as c30 } from '../descriptors/data/200.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4598 as c32 } from '../descriptors/data/198.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4361 as c33 } from '../descriptors/data/184.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4252 as c34, d4253 as c35 } from '../descriptors/data/178.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4253 as d4253 } from '../descriptors/data/178.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4253;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ImageInputFile"]:c0(),["ImageInputSourceURL"]:c1(),["ImageRequest"]:c2(),["InventoryRoutingSourceRequest"]:c3(),["MetadataRequest"]:c4(),["MoneyValue"]:c5(),["OrderLineItemTax"]:c6(),["SharedCodec1320"]:c7(),["SharedCodec1321"]:c8(),["SharedCodec1322"]:c9(),["SharedCodec1323"]:c10(),["SharedCodec1366"]:c11(),["SharedCodec1367"]:c12(),["SharedCodec1368"]:c13(),["SharedCodec1370"]:c14(),["SharedCodec1372"]:c15(),["SharedCodec1476"]:c16(),["SharedCodec1477"]:c17(),["SharedCodec1478"]:c18(),["SharedCodec252"]:c19(),["SharedCodec253"]:c20(),["SharedCodec254"]:c21(),["SharedCodec255"]:c22(),["SharedCodec256"]:c23(),["SharedCodec257"]:c24(),["SharedCodec258"]:c25(),["SharedCodec259"]:c26(),["SharedCodec674"]:c27(),["SharedCodec675"]:c28(),["SharedCodec676"]:c29(),["SharedCodec84"]:c30(),["SharedCodec85"]:c31(),["SubscriptionIntervalOption"]:c32(),["TextModifierRequest"]:c33(),["UpdateSubscriptionPlanLineItemRequest"]:c34(),["UpdateSubscriptionPlanRequest"]:c35()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateSubscriptionPlanRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
