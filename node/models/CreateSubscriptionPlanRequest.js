import { d324 as c0 } from '../descriptors/data/19.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4439 as c1, d4440 as c2, d4429 as c5 } from '../descriptors/data/188.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d6423 as c3 } from '../descriptors/data/300.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d6949 as c4, d6950 as c8, d6951 as c9, d6952 as c10, d6953 as c11 } from '../descriptors/data/330.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4312 as c6 } from '../descriptors/data/181.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4634 as c7, d4633 as c27 } from '../descriptors/data/199.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d1466 as c12, d1467 as c13 } from '../descriptors/data/67.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d1468 as c14 } from '../descriptors/data/68.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5059 as c15, d5060 as c16, d5061 as c17, d5062 as c18, d5063 as c20 } from '../descriptors/data/223.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5082 as c19, d5083 as c21, d5084 as c22 } from '../descriptors/data/224.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5539 as c23, d5540 as c24, d5541 as c25 } from '../descriptors/data/248.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4637 as c26 } from '../descriptors/data/200.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4598 as c28 } from '../descriptors/data/198.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4125 as c29 } from '../descriptors/data/169.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4361 as c30 } from '../descriptors/data/184.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d324 as d324 } from '../descriptors/data/19.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d324;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateSubscriptionPlanRequest"]:c0(),["ImageInputFile"]:c1(),["ImageInputSourceURL"]:c2(),["ImageRequest"]:c3(),["InventoryRoutingSourceRequest"]:c4(),["MetadataRequest"]:c5(),["MoneyValue"]:c6(),["OrderLineItemTax"]:c7(),["SharedCodec1320"]:c8(),["SharedCodec1321"]:c9(),["SharedCodec1322"]:c10(),["SharedCodec1323"]:c11(),["SharedCodec1324"]:c12(),["SharedCodec1325"]:c13(),["SharedCodec1326"]:c14(),["SharedCodec252"]:c15(),["SharedCodec253"]:c16(),["SharedCodec254"]:c17(),["SharedCodec255"]:c18(),["SharedCodec256"]:c19(),["SharedCodec257"]:c20(),["SharedCodec258"]:c21(),["SharedCodec259"]:c22(),["SharedCodec674"]:c23(),["SharedCodec675"]:c24(),["SharedCodec676"]:c25(),["SharedCodec84"]:c26(),["SharedCodec85"]:c27(),["SubscriptionIntervalOption"]:c28(),["SubscriptionPlanLineItemRequest"]:c29(),["TextModifierRequest"]:c30()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateSubscriptionPlanRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
