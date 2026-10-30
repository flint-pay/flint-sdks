import { d192 as c0 } from '../descriptors/data/8.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d5565 as c1 } from '../descriptors/data/250.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4514 as c2, d4515 as c3, d4516 as c38, d4517 as c41, d4518 as c42 } from '../descriptors/data/193.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4542 as c4, d4543 as c39, d4544 as c40, d4547 as c43 } from '../descriptors/data/195.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d440 as c5 } from '../descriptors/data/24.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4268 as c6 } from '../descriptors/data/179.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d5033 as c7, d5034 as c8, d5035 as c9, d5036 as c10, d5037 as c11, d5038 as c15, d5039 as c16, d5040 as c17, d5041 as c18, d5051 as c23, d5052 as c25, d5053 as c26, d5042 as c27, d5043 as c28, d5044 as c29, d5045 as c30, d5046 as c31, d5047 as c32, d5048 as c33, d5049 as c34, d5050 as c44 } from '../descriptors/data/223.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4398 as c12 } from '../descriptors/data/187.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4281 as c13 } from '../descriptors/data/180.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d5027 as c14, d5028 as c19, d5029 as c20, d5030 as c21, d5031 as c22, d5032 as c24 } from '../descriptors/data/222.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d5607 as c35, d5608 as c36, d5609 as c37 } from '../descriptors/data/253.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4330 as c45, d4331 as c46 } from '../descriptors/data/183.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d192 as d192 } from '../descriptors/data/8.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d192;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateDeliveryOptionsPreviewRequest"]:c0(),["CreateOrderLineItemRequest"]:c1(),["DeliveryAddressRequest"]:c2(),["DeliveryBuyerLocationRequest"]:c3(),["DeliveryCoordinateRequest"]:c4(),["DeliveryPreviewRoutingSource"]:c5(),["Dimensions"]:c6(),["GiftCardPurchaseDetailsRequest"]:c7(),["GiftCardPurchaseRecipientRequest"]:c8(),["ImageReferenceRequest"]:c9(),["LineItemFulfillmentOriginRequest"]:c10(),["LineItemFulfillmentRequest"]:c11(),["MetadataRequest"]:c12(),["MoneyValue"]:c13(),["OrderDraftLineItemInventoryDemandRequest"]:c14(),["OrderDraftLineItemTaxCalculationRequest"]:c15(),["OrderDraftLineItemTaxRequest"]:c16(),["OrderDraftTaxComponentRequest"]:c17(),["OrderDraftTaxJurisdictionRequest"]:c18(),["SharedCodec250"]:c19(),["SharedCodec251"]:c20(),["SharedCodec252"]:c21(),["SharedCodec253"]:c22(),["SharedCodec254"]:c23(),["SharedCodec255"]:c24(),["SharedCodec256"]:c25(),["SharedCodec257"]:c26(),["SharedCodec259"]:c27(),["SharedCodec260"]:c28(),["SharedCodec261"]:c29(),["SharedCodec262"]:c30(),["SharedCodec264"]:c31(),["SharedCodec265"]:c32(),["SharedCodec267"]:c33(),["SharedCodec268"]:c34(),["SharedCodec269"]:c35(),["SharedCodec270"]:c36(),["SharedCodec271"]:c37(),["SharedCodec373"]:c38(),["SharedCodec374"]:c39(),["SharedCodec375"]:c40(),["SharedCodec376"]:c41(),["SharedCodec377"]:c42(),["SharedCodec602"]:c43(),["SubscribedLineRequest"]:c44(),["TextModifierRequest"]:c45(),["Weight"]:c46()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateDeliveryOptionsPreviewRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
