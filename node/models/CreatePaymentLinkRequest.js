import { d4697 as c0, d4698 as c1, d4699 as c3, d4700 as c4 } from '../descriptors/data/204.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4615 as c2 } from '../descriptors/data/198.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d270 as c5 } from '../descriptors/data/15.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4439 as c6, d4440 as c7 } from '../descriptors/data/188.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d6423 as c8 } from '../descriptors/data/300.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d6949 as c9 } from '../descriptors/data/330.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4312 as c10 } from '../descriptors/data/181.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4634 as c11 } from '../descriptors/data/199.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d6291 as c12, d6292 as c13, d6296 as c14, d6297 as c15 } from '../descriptors/data/291.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d1071 as c16 } from '../descriptors/data/51.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d6300 as c17, d6307 as c18 } from '../descriptors/data/292.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d6320 as c19 } from '../descriptors/data/293.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d6328 as c20, d6329 as c21, d6331 as c22, d6332 as c23, d6333 as c24, d6334 as c25, d6335 as c26 } from '../descriptors/data/294.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d6340 as c27, d6341 as c28, d6342 as c29 } from '../descriptors/data/295.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d6343 as c30 } from '../descriptors/data/296.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d6361 as c31, d6362 as c32 } from '../descriptors/data/297.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5539 as c33, d5540 as c34, d5541 as c35 } from '../descriptors/data/248.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d270 as d270 } from '../descriptors/data/15.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d270;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutBuyerFieldsRequest"]:c0(),["CheckoutPromotionConfigRequest"]:c1(),["CheckoutRedirectsRequest"]:c2(),["CheckoutTaxConfigRequest"]:c3(),["CheckoutTipConfigRequest"]:c4(),["CreatePaymentLinkRequest"]:c5(),["ImageInputFile"]:c6(),["ImageInputSourceURL"]:c7(),["ImageRequest"]:c8(),["InventoryRoutingSourceRequest"]:c9(),["MoneyValue"]:c10(),["OrderLineItemTax"]:c11(),["PaymentLinkCustomFieldRequest"]:c12(),["PaymentLinkCustomTextConfig"]:c13(),["PaymentLinkEventConfigRequest"]:c14(),["PaymentLinkLegalConfig"]:c15(),["PaymentLinkLineItemRequest"]:c16(),["PaymentLinkPaymentConfig"]:c17(),["PaymentLinkThemeConfig"]:c18(),["SharedCodec1001"]:c19(),["SharedCodec1009"]:c20(),["SharedCodec1010"]:c21(),["SharedCodec1012"]:c22(),["SharedCodec1013"]:c23(),["SharedCodec1014"]:c24(),["SharedCodec1015"]:c25(),["SharedCodec1016"]:c26(),["SharedCodec1021"]:c27(),["SharedCodec1022"]:c28(),["SharedCodec1023"]:c29(),["SharedCodec1024"]:c30(),["SharedCodec287"]:c31(),["SharedCodec288"]:c32(),["SharedCodec674"]:c33(),["SharedCodec675"]:c34(),["SharedCodec676"]:c35()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreatePaymentLinkRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
