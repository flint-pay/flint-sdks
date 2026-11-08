import { d4312 as c0 } from '../descriptors/data/181.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d950 as c1 } from '../descriptors/data/45.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d1027 as c2 } from '../descriptors/data/48.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d1097 as c3 } from '../descriptors/data/53.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d6077 as c4, d6078 as c5, d6079 as c6, d6080 as c7, d6081 as c8, d6082 as c9 } from '../descriptors/data/280.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d6156 as c10, d6157 as c11 } from '../descriptors/data/284.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d6158 as c12 } from '../descriptors/data/285.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d1027 as d1027 } from '../descriptors/data/48.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1027;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderGiftCardAllocationAcceptance"]:c1(),["PayOrderRequestPay"]:c2(),["PaymentSourceCredential"]:c3(),["SharedCodec1042"]:c4(),["SharedCodec1043"]:c5(),["SharedCodec1044"]:c6(),["SharedCodec1046"]:c7(),["SharedCodec1047"]:c8(),["SharedCodec1048"]:c9(),["SharedCodec907"]:c10(),["SharedCodec908"]:c11(),["SharedCodec909"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePayOrderRequestPay(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
