import { d4429 as c0 } from '../descriptors/data/188.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4312 as c1 } from '../descriptors/data/181.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4634 as c2, d4633 as c12 } from '../descriptors/data/199.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5059 as c3, d5060 as c4, d5061 as c5, d5062 as c6, d5063 as c8 } from '../descriptors/data/223.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5082 as c7, d5083 as c9, d5084 as c10 } from '../descriptors/data/224.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4637 as c11 } from '../descriptors/data/200.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4361 as c13 } from '../descriptors/data/184.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4250 as c14 } from '../descriptors/data/177.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4250 as d4250 } from '../descriptors/data/177.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4250;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MetadataRequest"]:c0(),["MoneyValue"]:c1(),["OrderLineItemTax"]:c2(),["SharedCodec252"]:c3(),["SharedCodec253"]:c4(),["SharedCodec254"]:c5(),["SharedCodec255"]:c6(),["SharedCodec256"]:c7(),["SharedCodec257"]:c8(),["SharedCodec258"]:c9(),["SharedCodec259"]:c10(),["SharedCodec84"]:c11(),["SharedCodec85"]:c12(),["TextModifierRequest"]:c13(),["UpdateSubscriptionPlanLineItemInputCustom"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateSubscriptionPlanLineItemInputCustom(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
