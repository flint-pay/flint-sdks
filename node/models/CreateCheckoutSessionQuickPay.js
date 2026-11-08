import { d4541 as c0, d4539 as c15, d4540 as c16 } from '../descriptors/data/194.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4697 as c1, d4698 as c6, d4699 as c9, d4700 as c10 } from '../descriptors/data/204.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4464 as c2, d4465 as c3, d4466 as c4, d4467 as c5, d4468 as c7, d4479 as c20, d4480 as c21, d4481 as c22, d4484 as c23 } from '../descriptors/data/190.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4615 as c8 } from '../descriptors/data/198.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d178 as c11 } from '../descriptors/data/7.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4429 as c12 } from '../descriptors/data/188.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4312 as c13 } from '../descriptors/data/181.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4634 as c14, d4621 as c17, d4622 as c18, d4623 as c19 } from '../descriptors/data/199.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4485 as c24 } from '../descriptors/data/191.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4522 as c25 } from '../descriptors/data/193.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d178 as d178 } from '../descriptors/data/7.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d178;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["CheckoutBuyerFieldsRequest"]:c1(),["CheckoutCustomTextWriteConfig"]:c2(),["CheckoutLegalConfigRequest"]:c3(),["CheckoutPaymentConfigRequest"]:c4(),["CheckoutPrefillRequest"]:c5(),["CheckoutPromotionConfigRequest"]:c6(),["CheckoutQuickPayItemRequest"]:c7(),["CheckoutRedirectsRequest"]:c8(),["CheckoutTaxConfigRequest"]:c9(),["CheckoutTipConfigRequest"]:c10(),["CreateCheckoutSessionQuickPay"]:c11(),["MetadataRequest"]:c12(),["MoneyValue"]:c13(),["OrderLineItemTax"]:c14(),["SharedCodec0"]:c15(),["SharedCodec1"]:c16(),["SharedCodec138"]:c17(),["SharedCodec139"]:c18(),["SharedCodec140"]:c19(),["SharedCodec141"]:c20(),["SharedCodec142"]:c21(),["SharedCodec143"]:c22(),["SharedCodec146"]:c23(),["SharedCodec147"]:c24(),["ThemeConfigRequest"]:c25()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateCheckoutSessionQuickPay(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
