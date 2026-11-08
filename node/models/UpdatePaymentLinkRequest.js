import { d4697 as c0, d4698 as c1, d4699 as c2, d4700 as c3 } from '../descriptors/data/204.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4439 as c4, d4440 as c5, d4431 as c29, d4432 as c30, d4430 as c31, d4441 as c34 } from '../descriptors/data/188.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d6949 as c6 } from '../descriptors/data/330.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4312 as c7 } from '../descriptors/data/181.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4634 as c8 } from '../descriptors/data/199.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d1058 as c9 } from '../descriptors/data/49.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d6293 as c10, d6295 as c11 } from '../descriptors/data/291.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d6298 as c12, d6301 as c14, d6304 as c15, d6308 as c16 } from '../descriptors/data/292.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d1070 as c13 } from '../descriptors/data/51.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d6320 as c17 } from '../descriptors/data/293.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d6328 as c18, d6329 as c19, d6331 as c20, d6332 as c21, d6333 as c22, d6334 as c23, d6335 as c24, d6336 as c25 } from '../descriptors/data/294.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d6337 as c26, d6338 as c27, d6339 as c28 } from '../descriptors/data/295.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4808 as c32 } from '../descriptors/data/210.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5964 as c33 } from '../descriptors/data/273.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d6344 as c35, d6345 as c36 } from '../descriptors/data/296.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4586 as c37 } from '../descriptors/data/197.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5539 as c38, d5540 as c39, d5541 as c40 } from '../descriptors/data/248.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4214 as c41 } from '../descriptors/data/175.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4214 as d4214 } from '../descriptors/data/175.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4214;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutBuyerFieldsRequest"]:c0(),["CheckoutPromotionConfigRequest"]:c1(),["CheckoutTaxConfigRequest"]:c2(),["CheckoutTipConfigRequest"]:c3(),["ImageInputFile"]:c4(),["ImageInputSourceURL"]:c5(),["InventoryRoutingSourceRequest"]:c6(),["MoneyValue"]:c7(),["OrderLineItemTax"]:c8(),["PaymentLinkCustomFieldPatchRequest"]:c9(),["PaymentLinkCustomTextPatchRequest"]:c10(),["PaymentLinkEventConfigPatchRequest"]:c11(),["PaymentLinkLegalPatchRequest"]:c12(),["PaymentLinkLineItemPatchRequest"]:c13(),["PaymentLinkPaymentPatchRequest"]:c14(),["PaymentLinkRedirectsPatchRequest"]:c15(),["PaymentLinkThemePatchRequest"]:c16(),["SharedCodec1001"]:c17(),["SharedCodec1009"]:c18(),["SharedCodec1010"]:c19(),["SharedCodec1012"]:c20(),["SharedCodec1013"]:c21(),["SharedCodec1014"]:c22(),["SharedCodec1015"]:c23(),["SharedCodec1016"]:c24(),["SharedCodec1017"]:c25(),["SharedCodec1018"]:c26(),["SharedCodec1019"]:c27(),["SharedCodec1020"]:c28(),["SharedCodec1366"]:c29(),["SharedCodec1367"]:c30(),["SharedCodec1368"]:c31(),["SharedCodec1372"]:c32(),["SharedCodec1412"]:c33(),["SharedCodec1413"]:c34(),["SharedCodec1428"]:c35(),["SharedCodec1429"]:c36(),["SharedCodec62"]:c37(),["SharedCodec674"]:c38(),["SharedCodec675"]:c39(),["SharedCodec676"]:c40(),["UpdatePaymentLinkRequest"]:c41()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdatePaymentLinkRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
