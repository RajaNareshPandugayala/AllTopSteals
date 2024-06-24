import React from "react";

import image000001 from './prodectpics/image000001.png';
import image000002 from './prodectpics/image000002.png';
import image000003 from './prodectpics/image000003.png';

const products = [
    {
        name: 'Amazon - Cruise Power Strip',
        description: 'Amazon - Cruise Power Strip with Foldable Plug, Outlet Extender 2 USB A 2 USB C Ports, Cruise Ship Essentials No Surge Protector, Multi Plug Wall Outlet, 2 Prong to 3 Prong Outlet Adapter, Japan Plug Adapter',
        price: '$8.99',
        originalPrice: '$17.99',
        image: image000001,
        link: 'https://www.amazon.com/dp/B0CXXN79KP?&linkCode=ll1&tag=bslcouponsanddeals-20&linkId=f4a6de24f91231abcef295760ea0a71b&language=en_US&ref_=as_li_ss_tl',
        topSteals: 'Yes',
        stores: 'Amazon',
        categories: 'Clothing'
    },
    {
        name: 'Amazon - eufy Security eufyCam E330',
        description: 'Amazon - eufy Security eufyCam E330 (Professional) 4-Cam Kit, 4K Outdoor Security Camera System, 24/7 Recording, Plug-in, Wi-Fi NVR, 1TB Hard Drive Included, 10CH, Local Storage, No Monthly Fee',
        price: '$429.99',
        originalPrice: '$599.99',
        image: image000002,
        link: 'https://www.amazon.com/dp/B0CCDX6F44?th=1&linkCode=ll1&tag=bslcouponsanddeals-20&linkId=e0d1de50447d2a6d3aa6a1d1fc5864a9&language=en_US&ref_=as_li_ss_tl',
        topSteals: 'yes',
        stores: 'Amazon',
        categories: 'Accessories'
    },
    {
        name: 'Amazon -DWVO Mattress Topper',
        description: 'Amazon -DWVO Mattress Topper Full Size, 3 Inch Cooling Memory Foam Mattress Topper, Soft Vents Holes Bed Topper with Breathable Washable Ice-Touch Fabric Cover for Pressure Relief, CertiPUR-US Certified',
        price: '$44.86',
        originalPrice: '$64.09',
        image: image000003,
        link: 'https://www.amazon.com/gp/product/B0CLJ3J8ZD?th=1&linkCode=ll1&tag=bslcouponsanddeals-20&linkId=51c662fb6d232dcb4520ead07c25cd09&language=en_US&ref_=as_li_ss_tl',
        topSteals: 'NA',
        stores: 'Amazon',
        categories: 'Computers'
    },

    {
        name: 'Walmart - Cruise Power Strip',
        description: 'Walmart - Cruise Power Strip with Foldable Plug, Outlet Extender 2 USB A 2 USB C Ports, Cruise Ship Essentials No Surge Protector, Multi Plug Wall Outlet, 2 Prong to 3 Prong Outlet Adapter, Japan Plug Adapter',
        price: '$8.99',
        originalPrice: '$17.99',
        image: image000001,
        link: 'https://www.amazon.com/dp/B0CXXN79KP?&linkCode=ll1&tag=bslcouponsanddeals-20&linkId=f4a6de24f91231abcef295760ea0a71b&language=en_US&ref_=as_li_ss_tl',
        topSteals: 'Yes',
        stores: 'Walmart',
        categories: 'Electronics'
    },
    {
        name: 'Walmart - eufy Security eufyCam E330',
        description: 'Walmart - eufy Security eufyCam E330 (Professional) 4-Cam Kit, 4K Outdoor Security Camera System, 24/7 Recording, Plug-in, Wi-Fi NVR, 1TB Hard Drive Included, 10CH, Local Storage, No Monthly Fee',
        price: '$429.99',
        originalPrice: '$599.99',
        image: image000002,
        link: 'https://www.amazon.com/dp/B0CCDX6F44?th=1&linkCode=ll1&tag=bslcouponsanddeals-20&linkId=e0d1de50447d2a6d3aa6a1d1fc5864a9&language=en_US&ref_=as_li_ss_tl',
        topSteals: 'yes',
        stores: 'Walmart',
        categories: 'Home'
    },
    {
        name: 'Walmart -DWVO Mattress Topper',
        description: 'Walmart -DWVO Mattress Topper Full Size, 3 Inch Cooling Memory Foam Mattress Topper, Soft Vents Holes Bed Topper with Breathable Washable Ice-Touch Fabric Cover for Pressure Relief, CertiPUR-US Certified',
        price: '$44.86',
        originalPrice: '$64.09',
        image: image000003,
        link: 'https://www.amazon.com/gp/product/B0CLJ3J8ZD?th=1&linkCode=ll1&tag=bslcouponsanddeals-20&linkId=51c662fb6d232dcb4520ead07c25cd09&language=en_US&ref_=as_li_ss_tl',
        topSteals: 'yes',
        stores: 'Walmart',
        categories: 'Garden'
    },

    {
        name: 'Best Buy - Cruise Power Strip',
        description: 'Best Buy - Cruise Power Strip with Foldable Plug, Outlet Extender 2 USB A 2 USB C Ports, Cruise Ship Essentials No Surge Protector, Multi Plug Wall Outlet, 2 Prong to 3 Prong Outlet Adapter, Japan Plug Adapter',
        price: '$8.99',
        originalPrice: '$17.99',
        image: image000001,
        link: 'https://www.amazon.com/dp/B0CXXN79KP?&linkCode=ll1&tag=bslcouponsanddeals-20&linkId=f4a6de24f91231abcef295760ea0a71b&language=en_US&ref_=as_li_ss_tl',
        topSteals: 'Yes',
        stores: 'Best Buy',
        categories: 'Sports'
    },
    {
        name: 'Best Buy - eufy Security eufyCam E330',
        description: 'Best Buy - eufy Security eufyCam E330 (Professional) 4-Cam Kit, 4K Outdoor Security Camera System, 24/7 Recording, Plug-in, Wi-Fi NVR, 1TB Hard Drive Included, 10CH, Local Storage, No Monthly Fee',
        price: '$429.99',
        originalPrice: '$599.99',
        image: image000002,
        link: 'https://www.amazon.com/dp/B0CCDX6F44?th=1&linkCode=ll1&tag=bslcouponsanddeals-20&linkId=e0d1de50447d2a6d3aa6a1d1fc5864a9&language=en_US&ref_=as_li_ss_tl',
        topSteals: 'yes',
        stores: 'Best Buy',
        categories: 'Outdoors'
    },
    {
        name: 'Best Buy -DWVO Mattress Topper',
        description: 'Best Buy -DWVO Mattress Topper Full Size, 3 Inch Cooling Memory Foam Mattress Topper, Soft Vents Holes Bed Topper with Breathable Washable Ice-Touch Fabric Cover for Pressure Relief, CertiPUR-US Certified',
        price: '$44.86',
        originalPrice: '$64.09',
        image: image000003,
        link: 'https://www.amazon.com/gp/product/B0CLJ3J8ZD?th=1&linkCode=ll1&tag=bslcouponsanddeals-20&linkId=51c662fb6d232dcb4520ead07c25cd09&language=en_US&ref_=as_li_ss_tl',
        topSteals: 'NA',
        stores: 'Best Buy',
        categories: 'Toys'
    },

    {
        name: 'Woot - Cruise Power Strip',
        description: 'Woot - Cruise Power Strip with Foldable Plug, Outlet Extender 2 USB A 2 USB C Ports, Cruise Ship Essentials No Surge Protector, Multi Plug Wall Outlet, 2 Prong to 3 Prong Outlet Adapter, Japan Plug Adapter',
        price: '$8.99',
        originalPrice: '$17.99',
        image: image000001,
        link: 'https://www.amazon.com/dp/B0CXXN79KP?&linkCode=ll1&tag=bslcouponsanddeals-20&linkId=f4a6de24f91231abcef295760ea0a71b&language=en_US&ref_=as_li_ss_tl',
        topSteals: 'Yes',
        stores: 'Woot',
        categories: 'Games'
    },
    {
        name: 'Woot - eufy Security eufyCam E330',
        description: 'Woot - eufy Security eufyCam E330 (Professional) 4-Cam Kit, 4K Outdoor Security Camera System, 24/7 Recording, Plug-in, Wi-Fi NVR, 1TB Hard Drive Included, 10CH, Local Storage, No Monthly Fee',
        price: '$429.99',
        originalPrice: '$599.99',
        image: image000002,
        link: 'https://www.amazon.com/dp/B0CCDX6F44?th=1&linkCode=ll1&tag=bslcouponsanddeals-20&linkId=e0d1de50447d2a6d3aa6a1d1fc5864a9&language=en_US&ref_=as_li_ss_tl',
        topSteals: 'yes',
        stores: 'Woot',
        categories: 'Kitchen'
    },
    {
        name: 'Woot -DWVO Mattress Topper',
        description: 'Woot -DWVO Mattress Topper Full Size, 3 Inch Cooling Memory Foam Mattress Topper, Soft Vents Holes Bed Topper with Breathable Washable Ice-Touch Fabric Cover for Pressure Relief, CertiPUR-US Certified',
        price: '$44.86',
        originalPrice: '$64.09',
        image: image000003,
        link: 'https://www.amazon.com/gp/product/B0CLJ3J8ZD?th=1&linkCode=ll1&tag=bslcouponsanddeals-20&linkId=51c662fb6d232dcb4520ead07c25cd09&language=en_US&ref_=as_li_ss_tl',
        topSteals: 'yes',
        stores: 'Woot',
        categories: 'Dining'
    },


    {
        name: 'eBay - Cruise Power Strip',
        description: 'eBay - Cruise Power Strip with Foldable Plug, Outlet Extender 2 USB A 2 USB C Ports, Cruise Ship Essentials No Surge Protector, Multi Plug Wall Outlet, 2 Prong to 3 Prong Outlet Adapter, Japan Plug Adapter',
        price: '$8.99',
        originalPrice: '$17.99',
        image: image000001,
        link: 'https://www.amazon.com/dp/B0CXXN79KP?&linkCode=ll1&tag=bslcouponsanddeals-20&linkId=f4a6de24f91231abcef295760ea0a71b&language=en_US&ref_=as_li_ss_tl',
        topSteals: 'Yes',
        stores: 'eBay',
        categories: 'Gold'
    },
    {
        name: 'eBay - eufy Security eufyCam E330',
        description: 'eBay - eufy Security eufyCam E330 (Professional) 4-Cam Kit, 4K Outdoor Security Camera System, 24/7 Recording, Plug-in, Wi-Fi NVR, 1TB Hard Drive Included, 10CH, Local Storage, No Monthly Fee',
        price: '$429.99',
        originalPrice: '$599.99',
        image: image000002,
        link: 'https://www.amazon.com/dp/B0CCDX6F44?th=1&linkCode=ll1&tag=bslcouponsanddeals-20&linkId=e0d1de50447d2a6d3aa6a1d1fc5864a9&language=en_US&ref_=as_li_ss_tl',
        topSteals: 'yes',
        stores: 'eBay',
        categories: 'Biskets'
    },
    {
        name: 'eBay -DWVO Mattress Topper',
        description: 'eBay -DWVO Mattress Topper Full Size, 3 Inch Cooling Memory Foam Mattress Topper, Soft Vents Holes Bed Topper with Breathable Washable Ice-Touch Fabric Cover for Pressure Relief, CertiPUR-US Certified',
        price: '$44.86',
        originalPrice: '$64.09',
        image: image000003,
        link: 'https://www.amazon.com/gp/product/B0CLJ3J8ZD?th=1&linkCode=ll1&tag=bslcouponsanddeals-20&linkId=51c662fb6d232dcb4520ead07c25cd09&language=en_US&ref_=as_li_ss_tl',
        topSteals: 'NA',
        stores: 'eBay',
        categories: 'CoolDrink'
    },


    {
        name: 'Macys - Cruise Power Strip',
        description: 'Macys - Cruise Power Strip with Foldable Plug, Outlet Extender 2 USB A 2 USB C Ports, Cruise Ship Essentials No Surge Protector, Multi Plug Wall Outlet, 2 Prong to 3 Prong Outlet Adapter, Japan Plug Adapter',
        price: '$8.99',
        originalPrice: '$17.99',
        image: image000001,
        link: 'https://www.amazon.com/dp/B0CXXN79KP?&linkCode=ll1&tag=bslcouponsanddeals-20&linkId=f4a6de24f91231abcef295760ea0a71b&language=en_US&ref_=as_li_ss_tl',
        topSteals: 'Yes',
        stores: "Macy's",
        categories: 'Piza'
    },
    {
        name: 'Macys - eufy Security eufyCam E330',
        description: 'Macys - eufy Security eufyCam E330 (Professional) 4-Cam Kit, 4K Outdoor Security Camera System, 24/7 Recording, Plug-in, Wi-Fi NVR, 1TB Hard Drive Included, 10CH, Local Storage, No Monthly Fee',
        price: '$429.99',
        originalPrice: '$599.99',
        image: image000002,
        link: 'https://www.amazon.com/dp/B0CCDX6F44?th=1&linkCode=ll1&tag=bslcouponsanddeals-20&linkId=e0d1de50447d2a6d3aa6a1d1fc5864a9&language=en_US&ref_=as_li_ss_tl',
        topSteals: 'yes',
        stores: "Macy's",
        categories: 'Clothing'
    },
    {
        name: 'Macys -DWVO Mattress Topper',
        description: 'Macys -DWVO Mattress Topper Full Size, 3 Inch Cooling Memory Foam Mattress Topper, Soft Vents Holes Bed Topper with Breathable Washable Ice-Touch Fabric Cover for Pressure Relief, CertiPUR-US Certified',
        price: '$44.86',
        originalPrice: '$64.09',
        image: image000003,
        link: 'https://www.amazon.com/gp/product/B0CLJ3J8ZD?th=1&linkCode=ll1&tag=bslcouponsanddeals-20&linkId=51c662fb6d232dcb4520ead07c25cd09&language=en_US&ref_=as_li_ss_tl',
        topSteals: 'NA',
        stores: "Macy's",
        categories: 'Accessories'
    },


    {
        name: 'Gopal - Cruise Power Strip',
        description: 'Gopal - Cruise Power Strip with Foldable Plug, Outlet Extender 2 USB A 2 USB C Ports, Cruise Ship Essentials No Surge Protector, Multi Plug Wall Outlet, 2 Prong to 3 Prong Outlet Adapter, Japan Plug Adapter',
        price: '$8.99',
        originalPrice: '$17.99',
        image: image000001,
        link: 'https://www.amazon.com/dp/B0CXXN79KP?&linkCode=ll1&tag=bslcouponsanddeals-20&linkId=f4a6de24f91231abcef295760ea0a71b&language=en_US&ref_=as_li_ss_tl',
        topSteals: 'Yes',
        stores: 'Gopal',
        categories: 'Computers'
    },
    {
        name: 'RamRaj - eufy Security eufyCam E330',
        description: 'RamRaj - eufy Security eufyCam E330 (Professional) 4-Cam Kit, 4K Outdoor Security Camera System, 24/7 Recording, Plug-in, Wi-Fi NVR, 1TB Hard Drive Included, 10CH, Local Storage, No Monthly Fee',
        price: '$429.99',
        originalPrice: '$599.99',
        image: image000002,
        link: 'https://www.amazon.com/dp/B0CCDX6F44?th=1&linkCode=ll1&tag=bslcouponsanddeals-20&linkId=e0d1de50447d2a6d3aa6a1d1fc5864a9&language=en_US&ref_=as_li_ss_tl',
        topSteals: 'yes',
        stores: 'RamRaj',
        categories: 'Electronics'
    },
    {
        name: 'Krishna -DWVO Mattress Topper',
        description: 'Krishna -DWVO Mattress Topper Full Size, 3 Inch Cooling Memory Foam Mattress Topper, Soft Vents Holes Bed Topper with Breathable Washable Ice-Touch Fabric Cover for Pressure Relief, CertiPUR-US Certified',
        price: '$44.86',
        originalPrice: '$64.09',
        image: image000003,
        link: 'https://www.amazon.com/gp/product/B0CLJ3J8ZD?th=1&linkCode=ll1&tag=bslcouponsanddeals-20&linkId=51c662fb6d232dcb4520ead07c25cd09&language=en_US&ref_=as_li_ss_tl',
        topSteals: 'NA',
        stores: 'Krishna',
        categories: 'Home'
    },
    {
        name: 'chandu - Cruise Power Strip',
        description: 'chandu - Cruise Power Strip with Foldable Plug, Outlet Extender 2 USB A 2 USB C Ports, Cruise Ship Essentials No Surge Protector, Multi Plug Wall Outlet, 2 Prong to 3 Prong Outlet Adapter, Japan Plug Adapter',
        price: '$8.99',
        originalPrice: '$17.99',
        image: image000001,
        link: 'https://www.amazon.com/dp/B0CXXN79KP?&linkCode=ll1&tag=bslcouponsanddeals-20&linkId=f4a6de24f91231abcef295760ea0a71b&language=en_US&ref_=as_li_ss_tl',
        topSteals: 'yes',
        stores: 'chandu',
        categories: 'Garden'
    },
    {
        name: 'Balaji - eufy Security eufyCam E330',
        description: 'Balaji - eufy Security eufyCam E330 (Professional) 4-Cam Kit, 4K Outdoor Security Camera System, 24/7 Recording, Plug-in, Wi-Fi NVR, 1TB Hard Drive Included, 10CH, Local Storage, No Monthly Fee',
        price: '$429.99',
        originalPrice: '$599.99',
        image: image000002,
        link: 'https://www.amazon.com/dp/B0CCDX6F44?th=1&linkCode=ll1&tag=bslcouponsanddeals-20&linkId=e0d1de50447d2a6d3aa6a1d1fc5864a9&language=en_US&ref_=as_li_ss_tl',
        topSteals: 'Yes',
        stores: 'Balaji',
        categories: 'Sports'
    },
    {
        name: 'Rupa -DWVO Mattress Topper',
        description: 'Rupa -DWVO Mattress Topper Full Size, 3 Inch Cooling Memory Foam Mattress Topper, Soft Vents Holes Bed Topper with Breathable Washable Ice-Touch Fabric Cover for Pressure Relief, CertiPUR-US Certified',
        price: '$44.86',
        originalPrice: '$64.09',
        image: image000003,
        link: 'https://www.amazon.com/gp/product/B0CLJ3J8ZD?th=1&linkCode=ll1&tag=bslcouponsanddeals-20&linkId=51c662fb6d232dcb4520ead07c25cd09&language=en_US&ref_=as_li_ss_tl',
        topSteals: 'NA',
        stores: 'Rupa',
        categories: 'Outdoors'
    },
    {
        name: 'JACKY -DWVO Mattress Topper',
        description: 'JACKY -DWVO Mattress Topper Full Size, 3 Inch Cooling Memory Foam Mattress Topper, Soft Vents Holes Bed Topper with Breathable Washable Ice-Touch Fabric Cover for Pressure Relief, CertiPUR-US Certified',
        price: '$44.86',
        originalPrice: '$64.09',
        image: image000003,
        link: 'https://www.amazon.com/gp/product/B0CLJ3J8ZD?th=1&linkCode=ll1&tag=bslcouponsanddeals-20&linkId=51c662fb6d232dcb4520ead07c25cd09&language=en_US&ref_=as_li_ss_tl',
        topSteals: 'yes',
        stores: 'JACKY',
        categories: 'Kitchen'
    },
    {
        name: 'Walmart -DWVO Mattress Topper',
        description: 'Walmart -DWVO Mattress Topper Full Size, 3 Inch Cooling Memory Foam Mattress Topper, Soft Vents Holes Bed Topper with Breathable Washable Ice-Touch Fabric Cover for Pressure Relief, CertiPUR-US Certified',
        price: '$44.86',
        originalPrice: '$64.09',
        image: image000003,
        link: 'https://www.amazon.com/gp/product/B0CLJ3J8ZD?th=1&linkCode=ll1&tag=bslcouponsanddeals-20&linkId=51c662fb6d232dcb4520ead07c25cd09&language=en_US&ref_=as_li_ss_tl',
        topSteals: 'yes',
        stores: 'Walmart',
        categories: 'Garden'
    },

    {
        name: 'Best Buy - Cruise Power Strip',
        description: 'Best Buy - Cruise Power Strip with Foldable Plug, Outlet Extender 2 USB A 2 USB C Ports, Cruise Ship Essentials No Surge Protector, Multi Plug Wall Outlet, 2 Prong to 3 Prong Outlet Adapter, Japan Plug Adapter',
        price: '$8.99',
        originalPrice: '$17.99',
        image: image000001,
        link: 'https://www.amazon.com/dp/B0CXXN79KP?&linkCode=ll1&tag=bslcouponsanddeals-20&linkId=f4a6de24f91231abcef295760ea0a71b&language=en_US&ref_=as_li_ss_tl',
        topSteals: 'Yes',
        stores: 'Best Buy',
        categories: 'Sports'
    },
    {
        name: 'Best Buy - eufy Security eufyCam E330',
        description: 'Best Buy - eufy Security eufyCam E330 (Professional) 4-Cam Kit, 4K Outdoor Security Camera System, 24/7 Recording, Plug-in, Wi-Fi NVR, 1TB Hard Drive Included, 10CH, Local Storage, No Monthly Fee',
        price: '$429.99',
        originalPrice: '$599.99',
        image: image000002,
        link: 'https://www.amazon.com/dp/B0CCDX6F44?th=1&linkCode=ll1&tag=bslcouponsanddeals-20&linkId=e0d1de50447d2a6d3aa6a1d1fc5864a9&language=en_US&ref_=as_li_ss_tl',
        topSteals: 'yes',
        stores: 'Best Buy',
        categories: 'Outdoors'
    },
    {
        name: 'Best Buy -DWVO Mattress Topper',
        description: 'Best Buy -DWVO Mattress Topper Full Size, 3 Inch Cooling Memory Foam Mattress Topper, Soft Vents Holes Bed Topper with Breathable Washable Ice-Touch Fabric Cover for Pressure Relief, CertiPUR-US Certified',
        price: '$44.86',
        originalPrice: '$64.09',
        image: image000003,
        link: 'https://www.amazon.com/gp/product/B0CLJ3J8ZD?th=1&linkCode=ll1&tag=bslcouponsanddeals-20&linkId=51c662fb6d232dcb4520ead07c25cd09&language=en_US&ref_=as_li_ss_tl',
        topSteals: 'NA',
        stores: 'Best Buy',
        categories: 'Toys'
    },

    {
        name: 'Woot - Cruise Power Strip',
        description: 'Woot - Cruise Power Strip with Foldable Plug, Outlet Extender 2 USB A 2 USB C Ports, Cruise Ship Essentials No Surge Protector, Multi Plug Wall Outlet, 2 Prong to 3 Prong Outlet Adapter, Japan Plug Adapter',
        price: '$8.99',
        originalPrice: '$17.99',
        image: image000001,
        link: 'https://www.amazon.com/dp/B0CXXN79KP?&linkCode=ll1&tag=bslcouponsanddeals-20&linkId=f4a6de24f91231abcef295760ea0a71b&language=en_US&ref_=as_li_ss_tl',
        topSteals: 'Yes',
        stores: 'Woot',
        categories: 'Games'
    },
    {
        name: 'Woot - eufy Security eufyCam E330',
        description: 'Woot - eufy Security eufyCam E330 (Professional) 4-Cam Kit, 4K Outdoor Security Camera System, 24/7 Recording, Plug-in, Wi-Fi NVR, 1TB Hard Drive Included, 10CH, Local Storage, No Monthly Fee',
        price: '$429.99',
        originalPrice: '$599.99',
        image: image000002,
        link: 'https://www.amazon.com/dp/B0CCDX6F44?th=1&linkCode=ll1&tag=bslcouponsanddeals-20&linkId=e0d1de50447d2a6d3aa6a1d1fc5864a9&language=en_US&ref_=as_li_ss_tl',
        topSteals: 'yes',
        stores: 'Woot',
        categories: 'Kitchen'
    },
    {
        name: 'Woot -DWVO Mattress Topper',
        description: 'Woot -DWVO Mattress Topper Full Size, 3 Inch Cooling Memory Foam Mattress Topper, Soft Vents Holes Bed Topper with Breathable Washable Ice-Touch Fabric Cover for Pressure Relief, CertiPUR-US Certified',
        price: '$44.86',
        originalPrice: '$64.09',
        image: image000003,
        link: 'https://www.amazon.com/gp/product/B0CLJ3J8ZD?th=1&linkCode=ll1&tag=bslcouponsanddeals-20&linkId=51c662fb6d232dcb4520ead07c25cd09&language=en_US&ref_=as_li_ss_tl',
        topSteals: 'yes',
        stores: 'Woot',
        categories: 'Dining'
    },


    {
        name: 'eBay - Cruise Power Strip',
        description: 'eBay - Cruise Power Strip with Foldable Plug, Outlet Extender 2 USB A 2 USB C Ports, Cruise Ship Essentials No Surge Protector, Multi Plug Wall Outlet, 2 Prong to 3 Prong Outlet Adapter, Japan Plug Adapter',
        price: '$8.99',
        originalPrice: '$17.99',
        image: image000001,
        link: 'https://www.amazon.com/dp/B0CXXN79KP?&linkCode=ll1&tag=bslcouponsanddeals-20&linkId=f4a6de24f91231abcef295760ea0a71b&language=en_US&ref_=as_li_ss_tl',
        topSteals: 'Yes',
        stores: 'eBay',
        categories: 'Gold'
    },
    {
        name: 'eBay - eufy Security eufyCam E330',
        description: 'eBay - eufy Security eufyCam E330 (Professional) 4-Cam Kit, 4K Outdoor Security Camera System, 24/7 Recording, Plug-in, Wi-Fi NVR, 1TB Hard Drive Included, 10CH, Local Storage, No Monthly Fee',
        price: '$429.99',
        originalPrice: '$599.99',
        image: image000002,
        link: 'https://www.amazon.com/dp/B0CCDX6F44?th=1&linkCode=ll1&tag=bslcouponsanddeals-20&linkId=e0d1de50447d2a6d3aa6a1d1fc5864a9&language=en_US&ref_=as_li_ss_tl',
        topSteals: 'yes',
        stores: 'eBay',
        categories: 'Biskets'
    },
    {
        name: 'eBay -DWVO Mattress Topper',
        description: 'eBay -DWVO Mattress Topper Full Size, 3 Inch Cooling Memory Foam Mattress Topper, Soft Vents Holes Bed Topper with Breathable Washable Ice-Touch Fabric Cover for Pressure Relief, CertiPUR-US Certified',
        price: '$44.86',
        originalPrice: '$64.09',
        image: image000003,
        link: 'https://www.amazon.com/gp/product/B0CLJ3J8ZD?th=1&linkCode=ll1&tag=bslcouponsanddeals-20&linkId=51c662fb6d232dcb4520ead07c25cd09&language=en_US&ref_=as_li_ss_tl',
        topSteals: 'NA',
        stores: 'eBay',
        categories: 'CoolDrink'
    },


    {
        name: 'Macys - Cruise Power Strip',
        description: 'Macys - Cruise Power Strip with Foldable Plug, Outlet Extender 2 USB A 2 USB C Ports, Cruise Ship Essentials No Surge Protector, Multi Plug Wall Outlet, 2 Prong to 3 Prong Outlet Adapter, Japan Plug Adapter',
        price: '$8.99',
        originalPrice: '$17.99',
        image: image000001,
        link: 'https://www.amazon.com/dp/B0CXXN79KP?&linkCode=ll1&tag=bslcouponsanddeals-20&linkId=f4a6de24f91231abcef295760ea0a71b&language=en_US&ref_=as_li_ss_tl',
        topSteals: 'Yes',
        stores: "Macy's",
        categories: 'Piza'
    },
    {
        name: 'Macys - eufy Security eufyCam E330',
        description: 'Macys - eufy Security eufyCam E330 (Professional) 4-Cam Kit, 4K Outdoor Security Camera System, 24/7 Recording, Plug-in, Wi-Fi NVR, 1TB Hard Drive Included, 10CH, Local Storage, No Monthly Fee',
        price: '$429.99',
        originalPrice: '$599.99',
        image: image000002,
        link: 'https://www.amazon.com/dp/B0CCDX6F44?th=1&linkCode=ll1&tag=bslcouponsanddeals-20&linkId=e0d1de50447d2a6d3aa6a1d1fc5864a9&language=en_US&ref_=as_li_ss_tl',
        topSteals: 'yes',
        stores: "Macy's",
        categories: 'Clothing'
    },
    {
        name: 'Macys -DWVO Mattress Topper',
        description: 'Macys -DWVO Mattress Topper Full Size, 3 Inch Cooling Memory Foam Mattress Topper, Soft Vents Holes Bed Topper with Breathable Washable Ice-Touch Fabric Cover for Pressure Relief, CertiPUR-US Certified',
        price: '$44.86',
        originalPrice: '$64.09',
        image: image000003,
        link: 'https://www.amazon.com/gp/product/B0CLJ3J8ZD?th=1&linkCode=ll1&tag=bslcouponsanddeals-20&linkId=51c662fb6d232dcb4520ead07c25cd09&language=en_US&ref_=as_li_ss_tl',
        topSteals: 'NA',
        stores: "Macy's",
        categories: 'Accessories'
    },


    {
        name: 'Gopal - Cruise Power Strip',
        description: 'Gopal - Cruise Power Strip with Foldable Plug, Outlet Extender 2 USB A 2 USB C Ports, Cruise Ship Essentials No Surge Protector, Multi Plug Wall Outlet, 2 Prong to 3 Prong Outlet Adapter, Japan Plug Adapter',
        price: '$8.99',
        originalPrice: '$17.99',
        image: image000001,
        link: 'https://www.amazon.com/dp/B0CXXN79KP?&linkCode=ll1&tag=bslcouponsanddeals-20&linkId=f4a6de24f91231abcef295760ea0a71b&language=en_US&ref_=as_li_ss_tl',
        topSteals: 'Yes',
        stores: 'Gopal',
        categories: 'Computers'
    },
    {
        name: 'RamRaj - eufy Security eufyCam E330',
        description: 'RamRaj - eufy Security eufyCam E330 (Professional) 4-Cam Kit, 4K Outdoor Security Camera System, 24/7 Recording, Plug-in, Wi-Fi NVR, 1TB Hard Drive Included, 10CH, Local Storage, No Monthly Fee',
        price: '$429.99',
        originalPrice: '$599.99',
        image: image000002,
        link: 'https://www.amazon.com/dp/B0CCDX6F44?th=1&linkCode=ll1&tag=bslcouponsanddeals-20&linkId=e0d1de50447d2a6d3aa6a1d1fc5864a9&language=en_US&ref_=as_li_ss_tl',
        topSteals: 'yes',
        stores: 'RamRaj',
        categories: 'Electronics'
    },
    {
        name: 'Krishna -DWVO Mattress Topper',
        description: 'Krishna -DWVO Mattress Topper Full Size, 3 Inch Cooling Memory Foam Mattress Topper, Soft Vents Holes Bed Topper with Breathable Washable Ice-Touch Fabric Cover for Pressure Relief, CertiPUR-US Certified',
        price: '$44.86',
        originalPrice: '$64.09',
        image: image000003,
        link: 'https://www.amazon.com/gp/product/B0CLJ3J8ZD?th=1&linkCode=ll1&tag=bslcouponsanddeals-20&linkId=51c662fb6d232dcb4520ead07c25cd09&language=en_US&ref_=as_li_ss_tl',
        topSteals: 'NA',
        stores: 'Krishna',
        categories: 'Home'
    },
    {
        name: 'chandu - Cruise Power Strip',
        description: 'chandu - Cruise Power Strip with Foldable Plug, Outlet Extender 2 USB A 2 USB C Ports, Cruise Ship Essentials No Surge Protector, Multi Plug Wall Outlet, 2 Prong to 3 Prong Outlet Adapter, Japan Plug Adapter',
        price: '$8.99',
        originalPrice: '$17.99',
        image: image000001,
        link: 'https://www.amazon.com/dp/B0CXXN79KP?&linkCode=ll1&tag=bslcouponsanddeals-20&linkId=f4a6de24f91231abcef295760ea0a71b&language=en_US&ref_=as_li_ss_tl',
        topSteals: 'yes',
        stores: 'chandu',
        categories: 'Garden'
    },
    {
        name: 'Balaji - eufy Security eufyCam E330',
        description: 'Balaji - eufy Security eufyCam E330 (Professional) 4-Cam Kit, 4K Outdoor Security Camera System, 24/7 Recording, Plug-in, Wi-Fi NVR, 1TB Hard Drive Included, 10CH, Local Storage, No Monthly Fee',
        price: '$429.99',
        originalPrice: '$599.99',
        image: image000002,
        link: 'https://www.amazon.com/dp/B0CCDX6F44?th=1&linkCode=ll1&tag=bslcouponsanddeals-20&linkId=e0d1de50447d2a6d3aa6a1d1fc5864a9&language=en_US&ref_=as_li_ss_tl',
        topSteals: 'Yes',
        stores: 'Balaji',
        categories: 'Sports'
    },
    {
        name: 'Rupa -DWVO Mattress Topper',
        description: 'Rupa -DWVO Mattress Topper Full Size, 3 Inch Cooling Memory Foam Mattress Topper, Soft Vents Holes Bed Topper with Breathable Washable Ice-Touch Fabric Cover for Pressure Relief, CertiPUR-US Certified',
        price: '$44.86',
        originalPrice: '$64.09',
        image: image000003,
        link: 'https://www.amazon.com/gp/product/B0CLJ3J8ZD?th=1&linkCode=ll1&tag=bslcouponsanddeals-20&linkId=51c662fb6d232dcb4520ead07c25cd09&language=en_US&ref_=as_li_ss_tl',
        topSteals: 'NA',
        stores: 'Rupa',
        categories: 'Outdoors'
    },
    {
        name: 'JACKY -DWVO Mattress Topper',
        description: 'JACKY -DWVO Mattress Topper Full Size, 3 Inch Cooling Memory Foam Mattress Topper, Soft Vents Holes Bed Topper with Breathable Washable Ice-Touch Fabric Cover for Pressure Relief, CertiPUR-US Certified',
        price: '$44.86',
        originalPrice: '$64.09',
        image: image000003,
        link: 'https://www.amazon.com/gp/product/B0CLJ3J8ZD?th=1&linkCode=ll1&tag=bslcouponsanddeals-20&linkId=51c662fb6d232dcb4520ead07c25cd09&language=en_US&ref_=as_li_ss_tl',
        topSteals: 'yes',
        stores: 'JACKY',
        categories: 'Kitchen'
    },
    {
        name: 'Gopal - Cruise Power Strip',
        description: 'Gopal - Cruise Power Strip with Foldable Plug, Outlet Extender 2 USB A 2 USB C Ports, Cruise Ship Essentials No Surge Protector, Multi Plug Wall Outlet, 2 Prong to 3 Prong Outlet Adapter, Japan Plug Adapter',
        price: '$8.99',
        originalPrice: '$17.99',
        image: image000001,
        link: 'https://www.amazon.com/dp/B0CXXN79KP?&linkCode=ll1&tag=bslcouponsanddeals-20&linkId=f4a6de24f91231abcef295760ea0a71b&language=en_US&ref_=as_li_ss_tl',
        topSteals: 'Yes',
        stores: 'Gopal',
        categories: 'Computers'
    },
    {
        name: 'RamRaj - eufy Security eufyCam E330',
        description: 'RamRaj - eufy Security eufyCam E330 (Professional) 4-Cam Kit, 4K Outdoor Security Camera System, 24/7 Recording, Plug-in, Wi-Fi NVR, 1TB Hard Drive Included, 10CH, Local Storage, No Monthly Fee',
        price: '$429.99',
        originalPrice: '$599.99',
        image: image000002,
        link: 'https://www.amazon.com/dp/B0CCDX6F44?th=1&linkCode=ll1&tag=bslcouponsanddeals-20&linkId=e0d1de50447d2a6d3aa6a1d1fc5864a9&language=en_US&ref_=as_li_ss_tl',
        topSteals: 'yes',
        stores: 'RamRaj',
        categories: 'Electronics'
    },
    {
        name: 'Krishna -DWVO Mattress Topper',
        description: 'Krishna -DWVO Mattress Topper Full Size, 3 Inch Cooling Memory Foam Mattress Topper, Soft Vents Holes Bed Topper with Breathable Washable Ice-Touch Fabric Cover for Pressure Relief, CertiPUR-US Certified',
        price: '$44.86',
        originalPrice: '$64.09',
        image: image000003,
        link: 'https://www.amazon.com/gp/product/B0CLJ3J8ZD?th=1&linkCode=ll1&tag=bslcouponsanddeals-20&linkId=51c662fb6d232dcb4520ead07c25cd09&language=en_US&ref_=as_li_ss_tl',
        topSteals: 'NA',
        stores: 'Krishna',
        categories: 'Home'
    },
    {
        name: 'chandu - Cruise Power Strip',
        description: 'chandu - Cruise Power Strip with Foldable Plug, Outlet Extender 2 USB A 2 USB C Ports, Cruise Ship Essentials No Surge Protector, Multi Plug Wall Outlet, 2 Prong to 3 Prong Outlet Adapter, Japan Plug Adapter',
        price: '$8.99',
        originalPrice: '$17.99',
        image: image000001,
        link: 'https://www.amazon.com/dp/B0CXXN79KP?&linkCode=ll1&tag=bslcouponsanddeals-20&linkId=f4a6de24f91231abcef295760ea0a71b&language=en_US&ref_=as_li_ss_tl',
        topSteals: 'yes',
        stores: 'chandu',
        categories: 'Garden'
    },
    {
        name: 'Balaji - eufy Security eufyCam E330',
        description: 'Balaji - eufy Security eufyCam E330 (Professional) 4-Cam Kit, 4K Outdoor Security Camera System, 24/7 Recording, Plug-in, Wi-Fi NVR, 1TB Hard Drive Included, 10CH, Local Storage, No Monthly Fee',
        price: '$429.99',
        originalPrice: '$599.99',
        image: image000002,
        link: 'https://www.amazon.com/dp/B0CCDX6F44?th=1&linkCode=ll1&tag=bslcouponsanddeals-20&linkId=e0d1de50447d2a6d3aa6a1d1fc5864a9&language=en_US&ref_=as_li_ss_tl',
        topSteals: 'Yes',
        stores: 'Balaji',
        categories: 'Sports'
    },
];

function Prodect({ product, onViewDetails }) {

    const getCurrentDate = () => {
        const currentDate = new Date();
        const day = currentDate.getDate().toString().padStart(2, '0'); // Get day with leading zero if necessary
        const month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // Get month with leading zero if necessary
        const year = (currentDate.getFullYear() % 100).toString().padStart(2, '0'); // Get last two digits of year with leading zero if necessary

        return `${day}-${month}-${year}`;
    };


    const truncateText = (text, maxLength) => {
        if (text.length <= maxLength) {
            return text;
        }
        return text.substring(0, maxLength) + '...';
    };


    return (
        <div className="page_ProdectListBoxChildParent">
            <div className="page_ProdectListBoxChild">
                <span className="page_ProdectListBoxChildTop">
                    <span className="page_ProdectListBoxChildTopLeft">{product.stores}</span>
                    <span className="page_ProdectListBoxChildTopRight">Last Edited: <span className="page_ProdectListBoxChildTopRightDate">{getCurrentDate()}</span></span>
                </span>
                <img src={product.image} alt="StealsImage" className="page_ProdectListBoxChildImage" />
                <span className="page_ProdectListBoxChildDetails">
                    <span className="page_ProdectListBoxChildPopupParent">
                        <span className="page_ProdectListBoxChildPopup">
                            <span className="page_ProdectListBoxChildPopupText">{product.description}</span><span>&#x025BE;</span>
                        </span>
                    </span>
                    <span className="page_ProdectListBoxChildTextDisplay">{truncateText(product.description, 99)}</span> :<span className="page_ProdectListBoxChildDetailsPrice">
                        <span className="page_ProdectListBoxChildDetailsPrice_DiscountPrice">{product.price}</span> (<span className="page_ProdectListBoxChildDetailsPrice_OrginalPrice">{product.originalPrice}</span>)
                    </span>
                </span>
                <span className="page_ProdectListBoxChild_ViewDetails" onClick={onViewDetails}>View Details</span>
                <span className="page_ProdectListBoxChild_topSteals hidden">{product.topSteals}</span>
                <span className="page_ProdectListBoxChild_stores hidden">{product.stores}</span>
                <span className="page_ProdectListBoxChild_categories">{product.categories}</span>

            </div>
            <div className="page_ProdectListBoxChildFullDetails">
                <div className="page_ProdectListBoxChildFullDetailsline1">
                    <span href="#" target="_parent" className="page_ProdectListBoxChildFullDetailsline1Back" onClick={() => window.location.reload()}>Home</span>
                    <div className="page_ProdectListBoxChildFullDetailsline1text">/ {product.description}</div>
                </div>
                <div className="page_ProdectListBoxChildFullDetailsline2">{product.description}</div>
                <div className="page_ProdectListBoxChildFullDetailsline3">
                    <span className="page_ProdectListBoxChildFullDetails3Top">
                        <span>Amazon</span>
                        <span>Last Edited: <span className="page_ProdectListBoxChildTopRightDate">{getCurrentDate()}</span></span>
                    </span>
                    <img src={product.image} alt="StealsImage" className="page_ProdectListBoxChildFullDetailsImage" />
                    <span className="page_ProdectListBoxChildFullDetails3details">
                        <a href={product.link} target="_black">{product.description}</a> :<span className="page_ProdectListBoxChildDetailsPrice">
                            <span className="page_ProdectListBoxChildDetailsPrice_DiscountPrice">{product.price}</span> (<span className="page_ProdectListBoxChildDetailsPrice_OrginalPrice">{product.originalPrice}</span>)
                        </span>
                    </span>
                    <span>join prime to save $3 + Apply <b>10%</b> coupon on the page to reduce the price to <b>{product.price}</b></span>
                    <span><b>Free shipping</b> with <b>Prime</b> or on orders of over $35.</span>
                    <a href={product.link} target="_black" className="page_ProdectListBoxChildFullDetails3_AccessDeal">Access Deal</a>
                </div>
                <div className="page_ProdectListBoxChildFullDetails4">Note: If you purchase any item through a post on our site, we may receive a small share of the sale. Price, Deals and Coupons are valid at the time of post and may change or expire any time. As affiliated with Amazon and other associate programs we earn commission from qualifying purchases.</div>
            </div>
        </div>
    );
}

function ProdectsList() {

    // //PageNumberBoxchild
    // const [currentPage, setCurrentPage] = React.useState(1);
    // const productsPerPage = 6;

    // const indexOfLastProduct = currentPage * productsPerPage;
    // const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    // const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    // const paginate = (pageNumber) => setCurrentPage(pageNumber);



    React.useEffect(() => {
        const viewDetailsButtons = document.querySelectorAll('.page_ProdectListBoxChild_ViewDetails');
        const allProdectListBoxChildFullDetails = document.querySelectorAll('.page_ProdectListBoxChildFullDetails');

        const storesFilterButton = document.querySelectorAll('.page_headerRight_divMenuStoresDivUlLI');
        const categoriesFilterButton = document.querySelectorAll('.page_headerRight_divMenuCategoriesDivUlLI');

        const allProdectListBoxChild = document.querySelectorAll('.page_ProdectListBoxChild');


        const pageNumberBoxParent = document.querySelector('.PageNumberBoxParent');
        const PageNumberBoxchild = document.querySelectorAll('.PageNumberBoxchild');


        const page_titelSearchBar = document.querySelector('.page_titelSearchBar');



        //PageNumberBoxchild
        let selectedElement = document.querySelector('.PageNumberBoxchild01');

        PageNumberBoxchild.forEach((element, index) => {
            element.addEventListener('click', () => {
                PageNumberBoxchild.forEach(el => {
                    el.style.backgroundColor = 'white';
                    el.style.color = 'black';
                });
                element.style.backgroundColor = 'blue';
                element.style.color = 'white';
                selectedElement = element;

                // Change current page based on clicked element index
                // paginate(index + 1);
            });

            element.addEventListener('mouseenter', () => {
                if (element !== selectedElement) {
                    element.style.backgroundColor = 'lightgray';
                }
            });

            element.addEventListener('mouseleave', () => {
                if (element !== selectedElement) {
                    element.style.backgroundColor = 'white';
                }
            });
        });


        viewDetailsButtons.forEach((button, index) => {
            button.addEventListener('click', () => {
                // Hide all .page_ProdectListBoxChildFullDetails
                allProdectListBoxChildFullDetails.forEach((detail) => {
                    detail.style.display = 'none';
                });

                // Hide all .page_ProdectListBoxChild
                allProdectListBoxChild.forEach((child) => {
                    child.style.display = 'none';
                });

                // Display the clicked details
                allProdectListBoxChildFullDetails[index].style.display = 'flex';


                pageNumberBoxParent.style.display = 'none';
                page_titelSearchBar.style.display = 'none';

            });
        });


        const topStealsFilterButton = document.getElementById('topStealsFilter');
        topStealsFilterButton.addEventListener('click', () => {
            allProdectListBoxChild.forEach((child) => {
                const topStealsElement = child.querySelector('.page_ProdectListBoxChild_topSteals');
                if (topStealsElement && (topStealsElement.textContent === 'Yes' || topStealsElement.textContent === 'yes')) {
                    child.style.display = 'flex'; // or 'flex' depending on your layout
                } else {
                    child.style.display = 'none';
                }
            });
        });



        const handleStoresFilter = (event) => {
            const clickedStore = event.target.textContent.trim();

            allProdectListBoxChild.forEach((child) => {
                const productStore = child.querySelector('.page_ProdectListBoxChild_stores').textContent.trim();
                if (clickedStore === 'Other Stores') {
                    // Show products not in Amazon, Walmart, Best Buy, Woot, eBay, Macy's
                    if (!['Amazon', 'Walmart', 'Best Buy', 'Woot', 'eBay', 'Macy\'s'].includes(productStore)) {
                        child.style.display = 'flex';
                    } else {
                        child.style.display = 'none';
                    }
                } else if (productStore === clickedStore) {
                    child.style.display = 'flex';
                } else {
                    child.style.display = 'none';
                }
            });
        };

        // Attach click event listeners to store filter buttons
        storesFilterButton.forEach(button => {
            button.addEventListener('click', handleStoresFilter);
        });





        const handleCategoriesFilter = (event) => {
            const clickedCategorie = event.target.textContent.trim();

            allProdectListBoxChild.forEach(child => {
                const description = child.querySelector('.page_ProdectListBoxChild_categories').textContent.trim();
                if (clickedCategorie === 'Other Categories') {
                    // Show products not in below line
                    if (!['Clothing', 'Accessories', 'Computers', 'Electronics', 'Home', 'Garden', 'Sports', 'Outdoors', 'Toys', 'Games', 'Kitchen', 'Dining'].includes(description)) {
                        child.style.display = 'flex';
                    } else {
                        child.style.display = 'none';
                    }
                }
                if (clickedCategorie === 'Clothing & Accessories') {
                    // Show products in below line
                    if (['Clothing', 'Accessories'].includes(description)) {
                        child.style.display = 'flex';
                    } else {
                        child.style.display = 'none';
                    }
                }
                if (clickedCategorie === 'Computers & Electronics') {
                    // Show products in below line
                    if (['Computers', 'Electronics'].includes(description)) {
                        child.style.display = 'flex';
                    } else {
                        child.style.display = 'none';
                    }
                }
                if (clickedCategorie === 'Home & Garden') {
                    // Show products in below line
                    if (['Home', 'Garden'].includes(description)) {
                        child.style.display = 'flex';
                    } else {
                        child.style.display = 'none';
                    }
                }
                if (clickedCategorie === 'Sports & Outdoors') {
                    // Show products in below line
                    if (['Sports', 'Outdoors'].includes(description)) {
                        child.style.display = 'flex';
                    } else {
                        child.style.display = 'none';
                    }
                }
                if (clickedCategorie === 'Toys & Games') {
                    // Show products in below line
                    if (['Toys', 'Games'].includes(description)) {
                        child.style.display = 'flex';
                    } else {
                        child.style.display = 'none';
                    }
                }
                if (clickedCategorie === 'Kitchen & Dining') {
                    // Show products in below line
                    if (['Kitchen', 'Dining'].includes(description)) {
                        child.style.display = 'flex';
                    } else {
                        child.style.display = 'none';
                    }
                }
            });
        };

        // Attach click event listeners to store filter buttons
        categoriesFilterButton.forEach(button => {
            button.addEventListener('click', handleCategoriesFilter);
        });




    }, []);




    const [activeIndex, setActiveIndex] = React.useState(null);

    const handleViewDetails = (index) => {
        setActiveIndex(index);
    };


    return (

        <div className="page_ProdectListBoxParent">
            {products.map((product, index) => (
                <Prodect
                    key={index}
                    product={product}
                    onViewDetails={() => handleViewDetails(index)}
                    isActive={activeIndex === index}

                //             onViewDetails={() => handleViewDetails(indexOfFirstProduct + index)}
                //             isActive={activeIndex === (indexOfFirstProduct + index)}
                />
            ))}
        </div>
    );

}

export default ProdectsList;
