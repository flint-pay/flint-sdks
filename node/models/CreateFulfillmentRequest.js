import { d5981 as c0, d5979 as c13, d5980 as c14 } from '../descriptors/data/269.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d6790 as c1, d6791 as c2, d6792 as c5, d6793 as c6, d6794 as c8, d6795 as c9 } from '../descriptors/data/314.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d248 as c3 } from '../descriptors/data/12.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d6842 as c4, d6843 as c12, d6844 as c22, d6845 as c26, d6846 as c27, d6838 as c28, d6839 as c29, d6840 as c30 } from '../descriptors/data/318.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d6510 as c7, d6511 as c31 } from '../descriptors/data/297.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d6796 as c10, d6797 as c15, d6798 as c16 } from '../descriptors/data/315.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d5893 as c11 } from '../descriptors/data/264.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d6830 as c17, d6831 as c18, d6832 as c19, d6833 as c20, d6834 as c21, d6835 as c23, d6836 as c24, d6837 as c25 } from '../descriptors/data/317.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d248 as d248 } from '../descriptors/data/12.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d248;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["CreateDeliveryFulfillmentDetails"]:c1(),["CreateDigitalFulfillmentDetails"]:c2(),["CreateFulfillmentRequest"]:c3(),["CreatePackageItemRequest"]:c4(),["CreatePickupFulfillmentDetails"]:c5(),["CreateServiceFulfillmentDetails"]:c6(),["DimensionsRequest"]:c7(),["FulfillmentLineItemRequest"]:c8(),["FulfillmentPackagingRequest"]:c9(),["FulfillmentRecipientRequest"]:c10(),["MetadataRequest"]:c11(),["ReturnShipmentLineItemAllocationRequest"]:c12(),["SharedCodec0"]:c13(),["SharedCodec1"]:c14(),["SharedCodec1554"]:c15(),["SharedCodec1555"]:c16(),["SharedCodec267"]:c17(),["SharedCodec268"]:c18(),["SharedCodec269"]:c19(),["SharedCodec270"]:c20(),["SharedCodec271"]:c21(),["SharedCodec363"]:c22(),["SharedCodec741"]:c23(),["SharedCodec742"]:c24(),["SharedCodec743"]:c25(),["SharedCodec744"]:c26(),["SharedCodec745"]:c27(),["SharedCodec746"]:c28(),["SharedCodec747"]:c29(),["SinglePackageCreateRequest"]:c30(),["WeightRequest"]:c31()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateFulfillmentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
