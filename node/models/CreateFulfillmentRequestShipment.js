import { d6013 as c0, d6011 as c13, d6012 as c14 } from '../descriptors/data/273.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d6828 as c1, d6829 as c2, d6830 as c5, d6831 as c6, d6832 as c8, d6833 as c9 } from '../descriptors/data/319.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d254 as c3 } from '../descriptors/data/13.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d6880 as c4, d6881 as c12, d6882 as c17, d6883 as c21, d6884 as c22, d6876 as c23, d6877 as c24, d6878 as c25 } from '../descriptors/data/323.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d6552 as c7, d6553 as c26 } from '../descriptors/data/302.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d6834 as c10, d6835 as c15, d6836 as c16 } from '../descriptors/data/320.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d5913 as c11 } from '../descriptors/data/267.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d6873 as c18, d6874 as c19, d6875 as c20 } from '../descriptors/data/322.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d254 as d254 } from '../descriptors/data/13.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d254;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["CreateDeliveryFulfillmentDetails"]:c1(),["CreateDigitalFulfillmentDetails"]:c2(),["CreateFulfillmentRequestShipment"]:c3(),["CreatePackageItemRequest"]:c4(),["CreatePickupFulfillmentDetails"]:c5(),["CreateServiceFulfillmentDetails"]:c6(),["DimensionsRequest"]:c7(),["FulfillmentLineItemRequest"]:c8(),["FulfillmentPackagingRequest"]:c9(),["FulfillmentRecipientRequest"]:c10(),["MetadataRequest"]:c11(),["ReturnShipmentLineItemAllocationRequest"]:c12(),["SharedCodec0"]:c13(),["SharedCodec1"]:c14(),["SharedCodec1539"]:c15(),["SharedCodec1540"]:c16(),["SharedCodec354"]:c17(),["SharedCodec746"]:c18(),["SharedCodec747"]:c19(),["SharedCodec748"]:c20(),["SharedCodec749"]:c21(),["SharedCodec750"]:c22(),["SharedCodec751"]:c23(),["SharedCodec752"]:c24(),["SinglePackageCreateRequest"]:c25(),["WeightRequest"]:c26()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateFulfillmentRequestShipment(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
