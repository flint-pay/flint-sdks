import { d5981 as c0, d5979 as c13, d5980 as c14 } from '../descriptors/data/269.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d6790 as c1, d6791 as c2, d6792 as c5, d6793 as c6, d6794 as c8, d6795 as c9 } from '../descriptors/data/314.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d249 as c3 } from '../descriptors/data/12.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d6842 as c4, d6843 as c12, d6844 as c17, d6845 as c21, d6846 as c22, d6838 as c23, d6839 as c24, d6840 as c25 } from '../descriptors/data/318.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d6510 as c7, d6511 as c26 } from '../descriptors/data/297.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d6796 as c10, d6797 as c15, d6798 as c16 } from '../descriptors/data/315.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d5893 as c11 } from '../descriptors/data/264.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d6835 as c18, d6836 as c19, d6837 as c20 } from '../descriptors/data/317.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d249 as d249 } from '../descriptors/data/12.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d249;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["CreateDeliveryFulfillmentDetails"]:c1(),["CreateDigitalFulfillmentDetails"]:c2(),["CreateFulfillmentRequestDigital"]:c3(),["CreatePackageItemRequest"]:c4(),["CreatePickupFulfillmentDetails"]:c5(),["CreateServiceFulfillmentDetails"]:c6(),["DimensionsRequest"]:c7(),["FulfillmentLineItemRequest"]:c8(),["FulfillmentPackagingRequest"]:c9(),["FulfillmentRecipientRequest"]:c10(),["MetadataRequest"]:c11(),["ReturnShipmentLineItemAllocationRequest"]:c12(),["SharedCodec0"]:c13(),["SharedCodec1"]:c14(),["SharedCodec1554"]:c15(),["SharedCodec1555"]:c16(),["SharedCodec363"]:c17(),["SharedCodec741"]:c18(),["SharedCodec742"]:c19(),["SharedCodec743"]:c20(),["SharedCodec744"]:c21(),["SharedCodec745"]:c22(),["SharedCodec746"]:c23(),["SharedCodec747"]:c24(),["SinglePackageCreateRequest"]:c25(),["WeightRequest"]:c26()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateFulfillmentRequestDigital(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
