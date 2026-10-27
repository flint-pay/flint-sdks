import { d3162 as c0 } from '../descriptors/data/125.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d4523 as c1, d4524 as c2, d4525 as c4, d4526 as c5, d4527 as c7, d4528 as c8 } from '../descriptors/data/199.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d151 as c3 } from '../descriptors/data/7.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d2999 as c6 } from '../descriptors/data/114.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d3887 as c9, d3889 as c17 } from '../descriptors/data/164.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d4547 as c10, d4548 as c11, d4549 as c12 } from '../descriptors/data/200.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d4550 as c13, d4551 as c14, d4552 as c15, d4553 as c16 } from '../descriptors/data/201.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d4588 as c18 } from '../descriptors/data/203.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d3044 as c19 } from '../descriptors/data/118.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d151 as d151 } from '../descriptors/data/7.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d151;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["CreateDeliveryFulfillmentDetails"]:c1(),["CreateDigitalFulfillmentDetails"]:c2(),["CreateFulfillmentRequest"]:c3(),["CreatePickupFulfillmentDetails"]:c4(),["CreateServiceFulfillmentDetails"]:c5(),["Dimensions"]:c6(),["FulfillmentLineItemRequest"]:c7(),["FulfillmentPackagingRequest"]:c8(),["FulfillmentRecipientRequest"]:c9(),["SharedCodec114"]:c10(),["SharedCodec1140"]:c11(),["SharedCodec1141"]:c12(),["SharedCodec115"]:c13(),["SharedCodec116"]:c14(),["SharedCodec117"]:c15(),["SharedCodec118"]:c16(),["SharedCodec226"]:c17(),["SinglePackageCreateRequest"]:c18(),["Weight"]:c19()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateFulfillmentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
