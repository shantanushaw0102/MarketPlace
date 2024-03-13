import { AiFillStar } from "react-icons/ai";

const data = [
  {
    id: 1,
    most: true,
    fresh: false,
    category: "bike",
    name: "ola electric",
    brand: "ola",
    model: "s1 Pro",
    type: "electric",
    seller: "nikil desuxa",
    price: 1000,
    year: 2022,
    reviews: "(123 reviews)",
    star: <AiFillStar className="rating-star" />,
    desc: "The Ola S1 Pro is powered by 11 kW watt Mid Drive IPM Motor.It takes 6.5 Hr to get fully charged .It is available in one variants, Gen 2.color Silver , total kilometer driven 4000 km , mileage 181 Km/Full Charge ",
    imgUrl1:
      "https://assets.gqindia.com/photos/6193a04af515fdeb856edc15/3:2/w_5472,h_3648,c_limit/TIM_4257.jpeg",
    imgUrl2:
      "https://www.100kmph.com/cdn/shop/articles/ola-electric-scooter-launch-date-announced_1534x.jpg?v=1629094675",
  },
  {
    id: 2,
    most: false,
    fresh: false,
    category: "bike",
    name: "passion pro",
    brand: "Hero",
    model: "passion pro bs6",
    type: "petrol",
    seller: "Narula Carss",
    price: 700,
    year: 2019,
    reviews: "(123 reviews)",
    star: <AiFillStar className="rating-star" />,
    desc: "The Hero Passion Pro is a motorcycle that's comfortable for both city and highway roads.Engine Capacity	109.15 cc , Mileage	58 kmpl , Transmission	4 Speed Manual , Kerb Weight	117 kg",
    imgUrl1:
      "https://img.indianautosblog.com/resize/750x-/2020/09/18/2020-hero-passion-pro-bs6-first-ride-review-front-b03c.jpg",
    imgUrl2:
      "https://delhibreakings.com/wp-content/uploads/2023/11/Electric-Hero-Passion-Pro-Unleashing-120Km-Range-at-Unbeatable-Price-jpg.webp",
  },
  {
    id: 3,
    most: false,
    fresh: true,
    category: "bike",
    name: "Royal Enfield",
    brand: "Enfield",
    model: "Royal Enfield Classic 350",
    type: "petrol",
    seller: "Arun Bhati",
    price: 1000,
    year: 2023,
    reviews: "(123 reviews)",
    star: <AiFillStar className="rating-star" />,
    desc: "The Royal Enfield Classic 350 is powered by a 349.34 cc , air-cooled engine which produces 20.21 PS @ 6100 rpm of power. It has a fuel tank of 13 L and a mileage of 41.55 kmpl.",
    imgUrl1:
      "https://media.cdnws.com/_i/292826/283/1650/85/royal-enfield-classic-350-vue-de-face.jpeg",
    imgUrl2:
      "https://cargarge.in/wp-content/uploads/2023/10/royal-enfield-classic-350-1024x585.jpg",
  },
  {
    id: 4,
    most: true,
    fresh: false,
    category: "Car",
    name: "Swift Desire",
    brand: "Maruti Suzuki ",
    model: "vxi",
    type: "petrol",
    seller: "Shailesh Jain",
    price: 2000,
    year: 2023,
    reviews: "(123 reviews)",
    star: <AiFillStar className="rating-star" />,
    desc: "The Maruti Swift has 1 Petrol Engine and 1 CNG Engine on offer. The Petrol engine is 1197 cc while the CNG engine is 1197 cc . It is available with Manual & Automatic transmission.Depending upon the variant and fuel type the Swift has a mileage of 22.38 kmpl to 30.9 km/kg . ",
    imgUrl1:
      "https://imgd.aeplcdn.com/664x374/cw/ec/22718/Maruti-Suzuki-Swift-Dzire-Right-Front-Three-Quarter-69779.jpg?v=201711021421&wm=1&q=80",
    imgUrl2:
      "https://img.indianautosblog.com/2017/05/2017-Maruti-Dzire-featured-image-First-Drive-Review.jpg",
  },
  {
    id: 5,
    most: true,
    fresh: false,
    category: "Car",
    name: "Wagnor",
    brand: "Maruti Suzuki",
    model: "zxi",
    type: "cng",
    seller: "Satishsing Rajput",
    price: 3000,
    year: 2024,
    reviews: "(123 reviews)",
    star: <AiFillStar className="rating-star" />,
    desc: "The Maruti Suzuki Wagon R CNG is a 5-seater car that uses CNG fuel. It has a 998 cc, 3-cylinder engine with 4 valves per cylinder and a DOHC. The Wagon R CNG has a mileage of 34.05 kilometers per kilogram and a 60-liter fuel tank.",
    imgUrl1:
      "https://imgd-ct.aeplcdn.com/1056x660/n/cw/ec/112947/wagon-r-exterior-left-front-three-quarter-14.jpeg?isig=0&q=80",
    imgUrl2:
      "https://www.team-bhp.com/sites/default/files/styles/check_high_res/public/maruti-wagonr.jpg",
  },
  {
    id: 6,
    most: false,
    fresh: true,
    category: "Car",
    name: "tata punch ev",
    brand: "TATA",
    model: "Adventure S",
    type: "electric",
    seller: "Shashwat Singh",
    price: 3000,
    year: 2023,
    reviews: "(123 reviews)",
    star: <AiFillStar className="rating-star" />,
    desc: "Introducing the Electric EV : sleek, safe, and eco-friendly. With a driving range of 250 to 315 km on a single charge, automatic transmission, and seating for five, it offers both convenience and comfort. Safety is top-notch with a 4-star rating from Global NCAP. Plus, its 19.2 to 24 kWh battery capacity ensures a greener ride. ",
    imgUrl1:
      "https://stimg.cardekho.com/images/carexteriorimages/930x620/Tata/Punch-EV/9484/1704446706447/front-left-side-47.jpg",
    imgUrl2: "https://st1.latestly.com/wp-content/uploads/2024/01/124-1.jpg",
  },
  {
    id: 7,
    most: false,
    fresh: false,
    category: "Car",
    name: "Toyota Innova",
    brand: "toyota",
    model: "crysta",
    type: "CNG",
    seller: "Tushar Shah",
    price: 2000,
    year: 2021,
    reviews: "(123 reviews)",
    star: <AiFillStar className="rating-star" />,
    desc: "The Toyota Innova has 1 Diesel Engine. The Diesel engine is 2494 cc , Mileage 9 kmpl , No. of Cylinders 4 , Seating Capacity 7 , Transmission Type Manual , Fuel Tank Capacity 55 Litres , Body Type MUV , Ground Clearance 176mm ",
    imgUrl1:
      "https://www.cartoq.com/wp-content/uploads/2022/03/innova-crysta-featured.jpg",
    imgUrl2:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.autofun.ph%2Fnews-images%2Fmaintenance-cost-of-2022-toyota-innova-how-much-does-it-50406-282d931ade5c466fbeb18bd47ec7c2e5&psig=AOvVaw1URc5XpD6EOFWAWCN2XAil&ust=1710096100636000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCJD9nMbq54QDFQAAAAAdAAAAABAf",
  },
  {
    id: 8,
    most: true,
    fresh: false,
    category: "farming",
    name: "tractor",
    brand: "Mahindra ",
    model: "Swaraj 855 FE",
    type: "tractor",
    seller: "Nitin Jaiswal",
    price: 1400,
    year: 2016,
    reviews: "(123 reviews)",
    star: <AiFillStar className="rating-star" />,
    desc: "The tractor is equipped with all the advanced technological features for the effective work.No. Of Cylinder 3 , 55 HP , PTO 42.9 HP , Gear Box 8 Forward + 2 Reverse",
    imgUrl1:
      "https://www.livemint.com/lm-img/img/2023/04/02/1600x900/3-0-82259980--DSC0298-0_1679795206799_1680459209965_1680459209965.JPG",
    imgUrl2:
      "https://static.vecteezy.com/system/resources/previews/034/056/487/non_2x/the-tractor-is-plowing-a-muddy-field-with-sunlight-and-blue-sky-photo.jpg",
  },
  {
    id: 9,
    most: true,
    fresh: false,
    category: "farming",
    name: "backhoe",
    brand: "jcb",
    model: "Caterpillar 432E",
    type: "backhoe",
    seller: "Md. Kaif",
    price: 3000,
    year: 2019,
    reviews: "(123 reviews)",
    star: <AiFillStar className="rating-star" />,
    desc: "JCB 2DX backhoe loader is the compact backhoe loader for narrow spaces, soft soil and other restricted space applications.Engine Power 36 kW , Loader Shovel Capacity 0.6 cu.m , Max Dig Depth 3.02 m ",
    imgUrl1:
      "https://meconstructionnews.com/wp-content/uploads/2020/04/New-Cat-428-BHL_1000x600.jpg",
    imgUrl2:
      "https://toolspot.in/wp-content/uploads/2023/05/WhatsApp-Image-2023-05-24-at-18.32.46.jpg",
  },
  {
    id: 10,
    most: false,
    fresh: true,
    category: "farming",
    name: "Harvester ",
    brand: "mahindra",
    model: "Deere X9 - 1450",
    type: "Harvester",
    seller: "Naman Srivastav",
    price: 6000,
    year: 2018,
    reviews: "(123 reviews)",
    star: <AiFillStar className="rating-star" />,
    desc: " Harvester is an efficient machine for farming in India.Power 101 HP , Cutter Bar Width 14 Feet , No Of Cylinder 6 , Power Source Self Propelled , Crop Multicrop",
    imgUrl1:
      "https://www.deere.co.uk/assets/images/region-2/products/combines/John-Deere-combine-harvester-X-Series.jpg",
    imgUrl2: "https://i.ytimg.com/vi/SNKWRB1-5pA/maxresdefault.jpg",
  },

  {
    id: 11,
    most: false,
    fresh: true,
    category: "furniture",
    name: "Seoul Office Chair",
    brand: "Green Soul",
    model: "Desire C104 Mesh Mid-Back",
    type: "chair",
    seller: "Md. Samrani",
    price: 1000,
    year: 2017,
    reviews: "(123 reviews)",
    star: <AiFillStar className="rating-star" />,
    desc: "It has a high back and features premium mesh backrest , Ergonomic, Adjustable Lumbar, Adjustable Height, Arm Rest, Swivel, Adjustable Backrest, Rolling, Seat Lock, Cushion AvailabilityErgonomic, Adjustable Lumbar, Adjustable Height, Arm Rest, Swivel, Adjustable Backrest, Rolling, Seat Lock, Cushion Availability , 50D x 65W x 115H Centimeter , color Black , Item Weight 18 Kilograms",
    imgUrl1: "https://m.media-amazon.com/images/I/81Iq2OmkgVL.SX679.jpg",
    imgUrl2: "https://m.media-amazon.com/images/I/710iJPX0JCL.SX679.jpg",
  },
  {
    id: 12,
    most: false,
    fresh: false,
    category: "furniture",
    name: "Wakefit Study Table",
    brand: "Green Soul",
    model: "Alex surface 1.0",
    type: "table",
    seller: "Deepak Mishra",
    price: 1000,
    year: 2019,
    reviews: "(123 reviews)",
    star: <AiFillStar className="rating-star" />,
    desc: "Generous rectangular work surface. Material: Compressed wood / Particle Wood. Ideal for both home or office. Table Width - 122 cm , Table Depth - 45 cm , Table Height - 75 cm ",
    imgUrl1:
      "https://www.godrejhub.com/pub/media/catalog/product/5/6/56101597sd00030_08_803x602.jpg",
    imgUrl2:
      "https://www.godrejhub.com/pub/media/catalog/product/5/6/56101597sd00030_a2_803x602.jpg",
  },
  {
    id: 13,
    most: true,
    fresh: false,
    category: "furniture",
    name: "Facet Seater Sofa",
    brand: "godrej",
    model: "Godrej HUB",
    type: "sofa",
    seller: "Shivam Yadav",
    price: 400,
    year: 2019,
    reviews: "(123 reviews)",
    star: <AiFillStar className="rating-star" />,
    desc: "The sofa displays sharp edges, fillets and angles that give the sofa an elegant touch.Weight 26 kgs , Material	Fabric with PVC Legs , 86.4 height x 101.1 width x 83.1 length",
    imgUrl1:
      "https://www.godrejhub.com/pub/media/catalog/product/5/6/56101502sd00619_a2_803x602.jpg",
    imgUrl2:
      "https://www.godrejhub.com/pub/media/catalog/product/5/6/56101502sd00619_a1_803x602.jpg",
  },
  {
    id: 14,
    most: true,
    fresh: false,
    category: "electronics",
    name: "rc drone",
    brand: "Amazm",
    model: "E88 & E88 PRO DRONE",
    type: "drone",
    seller: "Vivek Srivastav",
    price: 700,
    year: 2023,
    reviews: "(123 reviews)",
    star: <AiFillStar className="rating-star" />,
    desc: "Foldable Design, Wifi App Control, HD Camera, Headless Mode, Altitude Hold, Hover, 360 Flip Stunt, 1 Key Take-Off/Landing, Gesture Selfies , color black ,  capture 120°Wide-angle 1080P HD photo and video at the location you want.",
    imgUrl1:
      "https://5.imimg.com/data5/SELLER/Default/2021/6/WD/BO/UC/131036992/dji-phantom-4-pro-v2-0-drone-camera.png",
    imgUrl2:
      "https://media.bazarafrique.com/upload/post/62310dacdeb20211562914.jpg",
  },
  {
    id: 15,
    most: false,
    fresh: false,
    category: "electronics",
    name: "Ozone Desert ",
    brand: "Symphony",
    model: "Hicool i 31",
    type: "cooler",
    seller: "Anjali Singh",
    price: 1300,
    year: 2017,
    reviews: "(123 reviews)",
    star: <AiFillStar className="rating-star" />,
    desc: "high performance portable desert air cooler with separate ice chambers. Capacity 55 L, Air delivery 4250 CMH, Air throw 50 ft., Power 190 W, Operating voltage 230 V, Package dimensions : 114.2 x 68.3 x 46.3 cm, Suitable for upto 550 sq. ft. area",
    imgUrl1:
      "https://images-cdn.ubuy.co.in/6350fad1476ca1256b24c916-portable-evaporative-air-cooler-outdoor.jpg",
    imgUrl2: "https://m.media-amazon.com/images/I/61rsOCrhPbL.SX679.jpg",
  },
  {
    id: 16,
    most: false,
    fresh: true,
    category: "electronics",
    name: "CCTV Bullet Camera",
    brand: "HIKVISION",
    model: "Hikvision DS 2CE5AC0T",
    type: "camera",
    seller: "Abhishek Rastogyi",
    price: 800,
    year: 2021,
    reviews: "(123 reviews)",
    star: <AiFillStar className="rating-star" />,
    desc: "Hikvision DS-2CE56C0T-IRPF 1MP (720P) Indoor Night Vision Dome Camera 1Pcs, High Quality Branded Product, 1.0 Megapixel high-performance CMOS, Effective Pixels - 1296 (H) x 732 (V), Can Be Watched Online Using Cloud P2P. 2MP CMOS image sensor, signal system - PAL/NTSC, effective pixels - 1920(H)x1080(V).",
    imgUrl1:
      "https://www.secureworld.com.my/image/secureworld/image/cache/data/all_product_images/product-270/5ThsZpJH1586345390-700x700.png",
    imgUrl2:
      "https://cctvdirect.co.uk/cdn/shop/articles/Hikvision_camera.jpg?v=1659428559",
  },
  {
    id: 17,
    most: false,
    fresh: false,
    category: "electronics",
    name: "Outdoor LED Display",
    brand: "Unilumin",
    model: " LED Video Wall P3.9 P4.8",
    type: "ledscreen",
    seller: "Ankit Upadhaya",
    price: 2000,
    year: 2019,
    reviews: "(123 reviews)",
    star: <AiFillStar className="rating-star" />,
    desc: "Ultra-high resolution and wide viewing angel,perfect uniformity and no mosaic. High refresh rate 1920Hz, best scan method for energy saving, perfect grey level.",
    imgUrl1:
      "https://www.hitiled.com/wp-content/uploads/2021/04/ip67-led-display.jpg",
    imgUrl2:
      "https://www.hitiled.com/wp-content/uploads/2021/04/waterproof-led-display-4.jpg",
  },
  {
    id: 18,
    most: true,
    fresh: false,
    category: "electronics",
    name: "LED Projector",
    brand: "Everycom",
    model: "WANBO X5",
    type: "projector",
    seller: "Abhishek Tiwari",
    price: 600,
    year: 2015,
    reviews: "(123 reviews)",
    star: <AiFillStar className="rating-star" />,
    desc: "Resolution 1080P with 4K HDR Support, Ultra Bright 1100 ANSI lumens, 4000:1, Static Contrast Ratio, LTPS Display, High Transmission Pure Glass Lens , Zoom Function 100 - 60% , 30000 Hours , 180” Screen , Fully Automatic, Auto Focus + Auto Keystone + Side Projection, (Ceiling Mountable), Built in Android 9.0 Operating System with Quad Core CPU 64 bit + MALI GPU + 1GB RAM + 16 GB ROM .",
    imgUrl1:
      "https://m.media-amazon.com/images/I/61aMqynp2NL.AC_UF1000,1000_QL80.jpg",
    imgUrl2:
      "https://tekknikk.com/wp-content/uploads/2019/09/s-1-e1568110278354.png",
  },

  {
    id: 19,
    most: false,
    fresh: true,
    category: "Property",
    name: "Absolute House",
    brand: "Asyana Twin City",
    model: "Banglow",
    type: "Banglow",
    seller: "Mr. Joseph",
    price: 5000,
    year: 2022,
    reviews: "(123 reviews)",
    star: <AiFillStar className="rating-star" />,
    desc: "Uniquely positioned 3bhk bungalow , prime location, North Facing, Full Furnished, 3 Open Car Parking, Address: 5, ansari road, darya ganj, new delhi- 110002., Jama Masjid, New Delhi - Central, Delhi NCR, LandMark: Ansari road opposite HDFC bank  ",
    imgUrl1:
      "https://img.staticmb.com/mbphoto/property/cropped_images/2019/Jul/04/Photo_h600_w900/42497807_9_PropertyImage1562125127519_600_900.jpg",
    imgUrl2:
      "https://img.staticmb.com/mbphoto/property/cropped_images/2019/Jul/04/Photo_h300_w450/42497807_10_PropertyImage1562125171288_300_450.jpg",
  },

  {
    id: 20,
    most: false,
    fresh: false,
    category: "Property",
    name: "Vigya Garden",
    brand: "OMAX",
    model: "Appartment",
    type: "Appartment Room",
    seller: "Suraj Jaiswal",
    price: 5000,
    year: 2023,
    reviews: "(123 reviews)",
    star: <AiFillStar className="rating-star" />,
    desc: "Rohini Sector 24, New Delhi has an attractive 3 BHK apartment. It is an semi-furnished apartment with all basic amenities. North Facinng, Landmark: prince public school, Flooring = Marble, Normal Tiles/Kotah Stone",
    imgUrl1:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/01/e4/77/6e/delhi-luxury-apartments.jpg?w=700&h=-1&s=1",
    imgUrl2:
      "https://media-cdn.tripadvisor.com/media/vr-splice-j/00/35/ef/17.jpg",
  },
  {
    id: 21,
    most: false,
    fresh: false,
    category: "Property",
    name: "Sweet Home",
    brand: "AKOTO",
    model: "house",
    type: "house",
    seller: "Manoj Tiwari",
    price: 7000,
    year: 2024,
    reviews: "(123 reviews)",
    star: <AiFillStar className="rating-star" />,
    desc: "Addrress: Uday Park, New Delhi - South, Delhi NCR, Fully Furnished, Garden/Park, Flooring: Granite, East Facing",
    imgUrl1:
      "https://www.nobroker.in/prophub/wp-content/uploads/DSC_2526_7_8-scaled.jpg",
    imgUrl2: "https://www.nobroker.in/prophub/wp-content/uploads/1.jpg",
  },
  {
    id: 22,
    most: false,
    fresh: true,
    category: "Gym instruments",
    name: "Chest Press",
    brand: "Mbh Fitness",
    model: "MEL-002A PEC FLY / REAR DELT",
    type: "Training Equipment",
    seller: "Pulkit",
    price: 4000,
    year: 2024,
    reviews: "(123 reviews)",
    star: <AiFillStar className="rating-star" />,
    desc: "Unisex, National Traditional Sports, Gymnastics, Athletics, Outward Bound, Physical Training, Strength Training, Fitness, Training, Education, Entertainment, Racing, Outdoor, Indoor",
    imgUrl1:
      "https://image.made-in-china.com/44f3j00mnOIkpgrfLVc/Good-Service-Sports-Equipment-Aluminium-Alloy-Chest-Free-Weight-Gym-Machine.webp",
    imgUrl2:
      "https://image.made-in-china.com/202f0j00HpLoltOnbGcM/Mbh-Fitness-Mel-002A-Pec-Fly-Rear-Delt.webp",
  },
  {
    id: 23,
    most: true,
    fresh: false,
    category: "Gym instruments",
    name: "Doumbles",
    brand: "Rookie Road",
    model: "3D Low Poly VR AR Model",
    type: "Biceps Training Equipment",
    seller: "Rahul",
    price: 2000,
    year: 2023,
    reviews: "(123 reviews)",
    star: <AiFillStar className="rating-star" />,
    desc: "Unisex, Gymnastics, Athletics, Outward Bound, Physical Training, Strength Training, Fitness, Training, Education, Entertainment, Racing, Outdoor, Indoor",
    imgUrl1:
      "https://media.istockphoto.com/id/1391410249/photo/sports-and-gym-activities.jpg?s=612x612&w=0&k=20&c=1S-hAmT-CkRtdYV_hcKi1lZdQkXAN_mCy3ebIXlUEnE=",
    imgUrl2:
      "https://images.squarespace-cdn.com/content/v1/644927389a1ab06f2f12a9fe/d2cef23b-98a3-4e23-9835-e24209de58f5/IMG_4073.jpg",
  },
  {
    id: 24,
    most: false,
    fresh: false,
    category: "Gym instruments",
    name: "Double Standing Twister",
    brand: "Modcon Industries",
    model: "OD-MC-05",
    type: "Waist Training Equipment",
    seller: "Jay",
    price: 2000,
    year: 2023,
    reviews: "(123 reviews)",
    star: <AiFillStar className="rating-star" />,
    desc: "Unisex, The double waist twister can be used by 2 people at a time. The user holds that handles and rotates the lower bode and middle body.Slims and tones the thighs, waist, hips and buttocks, outdoor",
    imgUrl1:
      "https://5.imimg.com/data5/SELLER/Default/2023/5/310256477/HI/YG/DP/2481498/double-standing-twister-1000x1000.jpg",
    imgUrl2:
      "https://5.imimg.com/data5/SELLER/Default/2022/12/GD/OY/UT/136625549/outdoor-fitnesss-equipment-gym-fitness-double-twister-for-park.jpg",
  },
  {
    id: 25,
    most: false,
    fresh: false,
    category: "musical instruments",
    name: "Guitar",
    brand: "YAMAHA",
    model: "F310P Acoustic",
    type: "Acoustic Guitar",
    seller: "Mr Lucky",
    price: 2500,
    year: 2024,
    reviews: "(123 reviews)",
    star: <AiFillStar className="rating-star" />,
    desc: "Rosewood fingerboard, Gloss Top, String Material: Stainless Steel, ide/Back: Matt, Fingerboard Radius - R400mm, 40.5-inch guitarCoutry of Origin: Indiaguitar_bridge_system: adjustable",
    imgUrl1:
      "https://i.redd.it/76p869sqgos41.jpg",
    imgUrl2:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE3RFoiCqAIqq2xsLnwelf3aFWmyqyNrLykdo5YINypKQvrO5JCyoaI6j3Z89IOpH6VaE&usqp=CAU",
  },
  {
    id: 26,
    most: false,
    fresh: false,
    category: "musical instruments",
    name: "Keyboard",
    brand: "Casio",
    model: "Casio CT-X9000IN 61-Key Portable Keyboard (Black)",
    type: "Portable",
    seller: "Tarini Chitralaya",
    price: 4500,
    year: 2024,
    reviews: "(123 reviews)",
    star: <AiFillStar className="rating-star" />,
    desc: "61 Piano Style Keys with the new and powerful AiX Sound Source offering multiple DSP’s and System Effects, 800 Tones (43 Indian) & 250 Rhythms (39 Indian) with Dedicated Examination Tones & Rhythm Banks, Equipped with 15W+15W speakers, CT-X9000IN offers powerful sound suitable for all performers alike",
    imgUrl1:
      "https://usa.yamaha.com/files/keyboardsindex_6aecfb3aa62a2ecfca1204dea45918da.jpg?impolicy=resize&imwid=4648&imhei=2848",
    imgUrl2:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmVz-ocWp_7d7fBPHRhaHy5plR4KXIXrk37zwoiG_CdrvLzeF3KAj8w3nZWsounhpZ6S4&usqp=CAU",
  },
  {
    id: 27,
    most: false,
    fresh: false,
    category: "musical instruments",
    name: "Saxophone ",
    brand: "KADENCE",
    model: "KAD-SAX-KXC",
    type: "Alto",
    seller: "Marik",
    price: 7500,
    year: 2024,
    reviews: "(123 reviews)",
    star: <AiFillStar className="rating-star" />,
    desc: "All-in-one set includes saxophone, case , reed, strap, gloves, cleaning cloth and rod, cork grease, mouthpiece, Strap, High quality materials and perfect design provide excellent sound quality without noise, Transparent Black Metal with gold Keys, faux mother of pearl inlaid keys, durable and barely to fade color.",
    imgUrl1:
      "https://www.californiakeyboards.com/wp-content/uploads/2017/07/tenor-sax.jpg",
    imgUrl2:
      "https://rukminim2.flixcart.com/image/850/1000/kqfj1jk0/saxophone/f/q/f/brass-alto-saxophone-nickel-polish-with-hard-001-spehub-original-imag4ftzgbaufpzv.jpeg?q=90&crop=false",
  },
  {
    id: 28,
    most: true,
    fresh: false,
    category: "bike",
    name: "hero electric",
    brand: "hero",
    model: "Optima CX 2.0",
    type: "electric",
    seller: "Veer shah",
    price: 1000,
    year: 2022,
    reviews: "(123 reviews)",
    star: <AiFillStar className="rating-star" />,
    desc: "The Ola S1 Pro is powered by 11 kW watt Mid Drive IPM Motor.It takes 6.5 Hr to get fully charged .It is available in one variants, Gen 2.color Silver , total kilometer driven 4000 km , mileage 181 Km/Full Charge ",
    imgUrl1:
      "https://5.imimg.com/data5/SELLER/Default/2022/8/NC/FT/ZB/82511126/hero-electric-optima-1-.jpeg",
    imgUrl2:
      "https://5.imimg.com/data5/SELLER/Default/2022/8/NC/FT/ZB/82511126/hero-electric-optima-1-.jpeg",
  },
];
export default data;
