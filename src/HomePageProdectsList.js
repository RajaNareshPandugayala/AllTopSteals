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
    },
    {
        name: 'Amazon - eufy Security eufyCam E330',
        description: 'Amazon - eufy Security eufyCam E330 (Professional) 4-Cam Kit, 4K Outdoor Security Camera System, 24/7 Recording, Plug-in, Wi-Fi NVR, 1TB Hard Drive Included, 10CH, Local Storage, No Monthly Fee',
        price: '$429.99',
        originalPrice: '$599.99',
        image: image000002,
        link: 'https://www.amazon.com/dp/B0CCDX6F44?th=1&linkCode=ll1&tag=bslcouponsanddeals-20&linkId=e0d1de50447d2a6d3aa6a1d1fc5864a9&language=en_US&ref_=as_li_ss_tl',
    },
    {
        name: 'Amazon -DWVO Mattress Topper',
        description: 'Amazon -DWVO Mattress Topper Full Size, 3 Inch Cooling Memory Foam Mattress Topper, Soft Vents Holes Bed Topper with Breathable Washable Ice-Touch Fabric Cover for Pressure Relief, CertiPUR-US Certified',
        price: '$44.86',
        originalPrice: '$64.09',
        image: image000003,
        link: 'https://www.amazon.com/gp/product/B0CLJ3J8ZD?th=1&linkCode=ll1&tag=bslcouponsanddeals-20&linkId=51c662fb6d232dcb4520ead07c25cd09&language=en_US&ref_=as_li_ss_tl',
    },
    {
        name: 'Amazon - Cruise Power Strip',
        description: 'Amazon - Cruise Power Strip with Foldable Plug, Outlet Extender 2 USB A 2 USB C Ports, Cruise Ship Essentials No Surge Protector, Multi Plug Wall Outlet, 2 Prong to 3 Prong Outlet Adapter, Japan Plug Adapter',
        price: '$8.99',
        originalPrice: '$17.99',
        image: image000001,
        link: 'https://www.amazon.com/dp/B0CXXN79KP?&linkCode=ll1&tag=bslcouponsanddeals-20&linkId=f4a6de24f91231abcef295760ea0a71b&language=en_US&ref_=as_li_ss_tl',
    },
    {
        name: 'Amazon - eufy Security eufyCam E330',
        description: 'Amazon - eufy Security eufyCam E330 (Professional) 4-Cam Kit, 4K Outdoor Security Camera System, 24/7 Recording, Plug-in, Wi-Fi NVR, 1TB Hard Drive Included, 10CH, Local Storage, No Monthly Fee',
        price: '$429.99',
        originalPrice: '$599.99',
        image: image000002,
        link: 'https://www.amazon.com/dp/B0CCDX6F44?th=1&linkCode=ll1&tag=bslcouponsanddeals-20&linkId=e0d1de50447d2a6d3aa6a1d1fc5864a9&language=en_US&ref_=as_li_ss_tl',
    },
    {
        name: 'Amazon -DWVO Mattress Topper',
        description: 'Amazon -DWVO Mattress Topper Full Size, 3 Inch Cooling Memory Foam Mattress Topper, Soft Vents Holes Bed Topper with Breathable Washable Ice-Touch Fabric Cover for Pressure Relief, CertiPUR-US Certified',
        price: '$44.86',
        originalPrice: '$64.09',
        image: image000003,
        link: 'https://www.amazon.com/gp/product/B0CLJ3J8ZD?th=1&linkCode=ll1&tag=bslcouponsanddeals-20&linkId=51c662fb6d232dcb4520ead07c25cd09&language=en_US&ref_=as_li_ss_tl',
    },
    {
        name: 'Amazon - Cruise Power Strip',
        description: 'Amazon - Cruise Power Strip with Foldable Plug, Outlet Extender 2 USB A 2 USB C Ports, Cruise Ship Essentials No Surge Protector, Multi Plug Wall Outlet, 2 Prong to 3 Prong Outlet Adapter, Japan Plug Adapter',
        price: '$8.99',
        originalPrice: '$17.99',
        image: image000001,
        link: 'https://www.amazon.com/dp/B0CXXN79KP?&linkCode=ll1&tag=bslcouponsanddeals-20&linkId=f4a6de24f91231abcef295760ea0a71b&language=en_US&ref_=as_li_ss_tl',
    },
    {
        name: 'Amazon - eufy Security eufyCam E330',
        description: 'Amazon - eufy Security eufyCam E330 (Professional) 4-Cam Kit, 4K Outdoor Security Camera System, 24/7 Recording, Plug-in, Wi-Fi NVR, 1TB Hard Drive Included, 10CH, Local Storage, No Monthly Fee',
        price: '$429.99',
        originalPrice: '$599.99',
        image: image000002,
        link: 'https://www.amazon.com/dp/B0CCDX6F44?th=1&linkCode=ll1&tag=bslcouponsanddeals-20&linkId=e0d1de50447d2a6d3aa6a1d1fc5864a9&language=en_US&ref_=as_li_ss_tl',
    },
    {
        name: 'Amazon -DWVO Mattress Topper',
        description: 'Amazon -DWVO Mattress Topper Full Size, 3 Inch Cooling Memory Foam Mattress Topper, Soft Vents Holes Bed Topper with Breathable Washable Ice-Touch Fabric Cover for Pressure Relief, CertiPUR-US Certified',
        price: '$44.86',
        originalPrice: '$64.09',
        image: image000003,
        link: 'https://www.amazon.com/gp/product/B0CLJ3J8ZD?th=1&linkCode=ll1&tag=bslcouponsanddeals-20&linkId=51c662fb6d232dcb4520ead07c25cd09&language=en_US&ref_=as_li_ss_tl',
    },
    {
        name: 'Amazon - Cruise Power Strip',
        description: 'Amazon - Cruise Power Strip with Foldable Plug, Outlet Extender 2 USB A 2 USB C Ports, Cruise Ship Essentials No Surge Protector, Multi Plug Wall Outlet, 2 Prong to 3 Prong Outlet Adapter, Japan Plug Adapter',
        price: '$8.99',
        originalPrice: '$17.99',
        image: image000001,
        link: 'https://www.amazon.com/dp/B0CXXN79KP?&linkCode=ll1&tag=bslcouponsanddeals-20&linkId=f4a6de24f91231abcef295760ea0a71b&language=en_US&ref_=as_li_ss_tl',
    },
    {
        name: 'Amazon - eufy Security eufyCam E330',
        description: 'Amazon - eufy Security eufyCam E330 (Professional) 4-Cam Kit, 4K Outdoor Security Camera System, 24/7 Recording, Plug-in, Wi-Fi NVR, 1TB Hard Drive Included, 10CH, Local Storage, No Monthly Fee',
        price: '$429.99',
        originalPrice: '$599.99',
        image: image000002,
        link: 'https://www.amazon.com/dp/B0CCDX6F44?th=1&linkCode=ll1&tag=bslcouponsanddeals-20&linkId=e0d1de50447d2a6d3aa6a1d1fc5864a9&language=en_US&ref_=as_li_ss_tl',
    },
    {
        name: 'Amazon -DWVO Mattress Topper',
        description: 'Amazon -DWVO Mattress Topper Full Size, 3 Inch Cooling Memory Foam Mattress Topper, Soft Vents Holes Bed Topper with Breathable Washable Ice-Touch Fabric Cover for Pressure Relief, CertiPUR-US Certified',
        price: '$44.86',
        originalPrice: '$64.09',
        image: image000003,
        link: 'https://www.amazon.com/gp/product/B0CLJ3J8ZD?th=1&linkCode=ll1&tag=bslcouponsanddeals-20&linkId=51c662fb6d232dcb4520ead07c25cd09&language=en_US&ref_=as_li_ss_tl',
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
                    <span className="page_ProdectListBoxChildTopLeft">Amazon</span>
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
            </div>
            <div className="page_ProdectListBoxChildFullDetails">
                <div className="page_ProdectListBoxChildFullDetailsline1">
                    <a href="https://rajanareshpandugayala.github.io/AllTopSteals/" target="_parent">Home</a>
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

    React.useEffect(() => {
        const viewDetailsButtons = document.querySelectorAll('.page_ProdectListBoxChild_ViewDetails');
        const allProdectListBoxChildFullDetails = document.querySelectorAll('.page_ProdectListBoxChildFullDetails');
        const allProdectListBoxChild = document.querySelectorAll('.page_ProdectListBoxChild');

        const pageNumberBoxParent = document.querySelector('.PageNumberBoxParent');
        const page_titelSearchBar = document.querySelector('.page_titelSearchBar');


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
                />
            ))}
        </div>
    );
}

export default ProdectsList;
