import { d4541 as c0, d4539 as c12, d4540 as c13 } from '../descriptors/data/194.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4697 as c1, d4698 as c6, d4700 as c8 } from '../descriptors/data/204.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4464 as c2, d4465 as c3, d4466 as c4, d4467 as c5, d4479 as c17, d4480 as c18, d4481 as c19, d4482 as c20, d4483 as c21 } from '../descriptors/data/190.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4615 as c7 } from '../descriptors/data/198.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d177 as c9 } from '../descriptors/data/7.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4429 as c10 } from '../descriptors/data/188.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4312 as c11 } from '../descriptors/data/181.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4621 as c14, d4622 as c15, d4623 as c16 } from '../descriptors/data/199.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4522 as c22 } from '../descriptors/data/193.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d177 as d177 } from '../descriptors/data/7.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d177;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["CheckoutBuyerFieldsRequest"]:c1(),["CheckoutCustomTextWriteConfig"]:c2(),["CheckoutLegalConfigRequest"]:c3(),["CheckoutPaymentConfigRequest"]:c4(),["CheckoutPrefillRequest"]:c5(),["CheckoutPromotionConfigRequest"]:c6(),["CheckoutRedirectsRequest"]:c7(),["CheckoutTipConfigRequest"]:c8(),["CreateCheckoutSessionOrder"]:c9(),["MetadataRequest"]:c10(),["MoneyValue"]:c11(),["SharedCodec0"]:c12(),["SharedCodec1"]:c13(),["SharedCodec138"]:c14(),["SharedCodec139"]:c15(),["SharedCodec140"]:c16(),["SharedCodec141"]:c17(),["SharedCodec142"]:c18(),["SharedCodec143"]:c19(),["SharedCodec144"]:c20(),["SharedCodec145"]:c21(),["ThemeConfigRequest"]:c22()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateCheckoutSessionOrder(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
