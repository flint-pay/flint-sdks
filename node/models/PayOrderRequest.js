import { d4312 as c0 } from '../descriptors/data/181.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d950 as c1, d968 as c2 } from '../descriptors/data/45.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d1025 as c3 } from '../descriptors/data/48.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d1097 as c4 } from '../descriptors/data/53.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d6075 as c5, d6077 as c6, d6078 as c7, d6079 as c8, d6080 as c10, d6081 as c11, d6082 as c12, d6083 as c14, d6084 as c15 } from '../descriptors/data/280.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d1332 as c9, d1333 as c13 } from '../descriptors/data/63.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d6156 as c16, d6157 as c17 } from '../descriptors/data/284.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d6158 as c18, d6159 as c19, d6160 as c20, d6161 as c21, d6162 as c22 } from '../descriptors/data/285.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d1025 as d1025 } from '../descriptors/data/48.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1025;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderGiftCardAllocationAcceptance"]:c1(),["OrderPaymentIntentSelection"]:c2(),["PayOrderRequest"]:c3(),["PaymentSourceCredential"]:c4(),["PaymentSourceCredentialToken"]:c5(),["SharedCodec1042"]:c6(),["SharedCodec1043"]:c7(),["SharedCodec1044"]:c8(),["SharedCodec1045"]:c9(),["SharedCodec1046"]:c10(),["SharedCodec1047"]:c11(),["SharedCodec1048"]:c12(),["SharedCodec1049"]:c13(),["SharedCodec1050"]:c14(),["SharedCodec1051"]:c15(),["SharedCodec907"]:c16(),["SharedCodec908"]:c17(),["SharedCodec909"]:c18(),["SharedCodec922"]:c19(),["SharedCodec923"]:c20(),["SharedCodec924"]:c21(),["SharedCodec925"]:c22()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePayOrderRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
