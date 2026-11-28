import { d8237 as c0, d8235 as c20, d8236 as c23 } from '../descriptors/data/364.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d9050 as c1 } from '../descriptors/data/408.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d9051 as c2, d9052 as c5, d9053 as c6, d9054 as c8, d9055 as c9, d9056 as c10, d9057 as c13, d9058 as c14, d9059 as c15, d9060 as c18, d9061 as c19, d9062 as c21, d9063 as c22 } from '../descriptors/data/409.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d289 as c3 } from '../descriptors/data/14.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d9102 as c4, d9103 as c12, d9105 as c16, d9097 as c26, d9098 as c27, d9099 as c28, d9104 as c29, d9100 as c30 } from '../descriptors/data/412.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d8784 as c7, d8785 as c31 } from '../descriptors/data/393.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d8131 as c11 } from '../descriptors/data/357.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d9106 as c17 } from '../descriptors/data/413.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d9095 as c24, d9096 as c25 } from '../descriptors/data/411.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d289 as d289 } from '../descriptors/data/14.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d289;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["CreateDeliveryFulfillmentDetails"]:c1(),["CreateDigitalFulfillmentDetails"]:c2(),["CreateFulfillmentRequest"]:c3(),["CreatePackageItemRequest"]:c4(),["CreatePickupFulfillmentDetails"]:c5(),["CreateServiceFulfillmentDetails"]:c6(),["DimensionsRequest"]:c7(),["FulfillmentLineItemRequest"]:c8(),["FulfillmentPackagingRequest"]:c9(),["FulfillmentRecipientRequest"]:c10(),["MetadataRequest"]:c11(),["ReturnShipmentLineItemAllocationRequest"]:c12(),["SharedCodec1288"]:c13(),["SharedCodec1289"]:c14(),["SharedCodec1290"]:c15(),["SharedCodec1291"]:c16(),["SharedCodec1292"]:c17(),["SharedCodec1296"]:c18(),["SharedCodec1297"]:c19(),["SharedCodec2"]:c20(),["SharedCodec2887"]:c21(),["SharedCodec2888"]:c22(),["SharedCodec3"]:c23(),["SharedCodec425"]:c24(),["SharedCodec426"]:c25(),["SharedCodec427"]:c26(),["SharedCodec428"]:c27(),["SharedCodec429"]:c28(),["SharedCodec519"]:c29(),["SinglePackageCreateRequest"]:c30(),["WeightRequest"]:c31()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateFulfillmentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
