import { d8158 as c0, d8156 as c20, d8157 as c23 } from '../descriptors/data/359.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d8970 as c1 } from '../descriptors/data/403.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d8971 as c2, d8972 as c5, d8973 as c6, d8974 as c8, d8975 as c9, d8976 as c10, d8977 as c13, d8978 as c14, d8979 as c15, d8980 as c18, d8981 as c19, d8982 as c21, d8983 as c22 } from '../descriptors/data/404.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d292 as c3 } from '../descriptors/data/14.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d9022 as c4, d9023 as c12, d9025 as c16, d9024 as c24, d9020 as c25 } from '../descriptors/data/407.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d8704 as c7, d8705 as c26 } from '../descriptors/data/388.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d8056 as c11 } from '../descriptors/data/352.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d9026 as c17 } from '../descriptors/data/408.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d292 as d292 } from '../descriptors/data/14.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d292;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["CreateDeliveryFulfillmentDetails"]:c1(),["CreateDigitalFulfillmentDetails"]:c2(),["CreateFulfillmentRequestPickup"]:c3(),["CreatePackageItemRequest"]:c4(),["CreatePickupFulfillmentDetails"]:c5(),["CreateServiceFulfillmentDetails"]:c6(),["DimensionsRequest"]:c7(),["FulfillmentLineItemRequest"]:c8(),["FulfillmentPackagingRequest"]:c9(),["FulfillmentRecipientRequest"]:c10(),["MetadataRequest"]:c11(),["ReturnShipmentLineItemAllocationRequest"]:c12(),["SharedCodec1258"]:c13(),["SharedCodec1259"]:c14(),["SharedCodec1260"]:c15(),["SharedCodec1261"]:c16(),["SharedCodec1262"]:c17(),["SharedCodec1266"]:c18(),["SharedCodec1267"]:c19(),["SharedCodec2"]:c20(),["SharedCodec2840"]:c21(),["SharedCodec2841"]:c22(),["SharedCodec3"]:c23(),["SharedCodec512"]:c24(),["SinglePackageCreateRequest"]:c25(),["WeightRequest"]:c26()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateFulfillmentRequestPickup(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
