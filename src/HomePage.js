import React from "react";
import './HomePage.css'

import logo512 from './prodectpics/logo512.png';



function Header() {
    return (
        <>
            <header className="page_header">
                <a className="page_headerLeft_div" href="https://rajanareshpandugayala.github.io/AllTopSteals/" target="_parent">
                    <img src={logo512} alt="Logo" className="page_headerLeft_divLogo" />
                    <p className="page_headerLeft_divText"><span className="page_headerLeft_divTextTop">All Top Steals</span><span className="page_headerLeft_divTextBottom">Handpicked Deals and Coupons</span></p>
                </a>

                <div className="page_headerRight_div">
                    <div className="page_headerRight_divMenu">
                        <a className="page_headerRight_divMenuHome" href="https://rajanareshpandugayala.github.io/AllTopSteals/" target="_parent">Home</a>
                        <p className="page_headerRight_divMenuTopsteals">Top Steals</p>
                        <div className="page_headerRight_divMenuCategoriesDiv">
                            <p className="page_headerRight_divMenuCategoriesDivP">Categories &#x025BF;</p>
                            <ul className="page_headerRight_divMenuCategoriesDivUl">
                                <li className="page_headerRight_divMenuCategoriesDivUlLI">Clothing & Accessories</li>
                                <li className="page_headerRight_divMenuCategoriesDivUlLI">Computers & Electronics</li>
                                <li className="page_headerRight_divMenuCategoriesDivUlLI">Home & Garden</li>
                                <li className="page_headerRight_divMenuCategoriesDivUlLI">Sports & Outdoors</li>
                                <li className="page_headerRight_divMenuCategoriesDivUlLI">Toys & Games</li>
                                <li className="page_headerRight_divMenuCategoriesDivUlLI">Kitchen & Dining</li>
                                <li className="page_headerRight_divMenuCategoriesDivUlLI">Other Categories</li>
                            </ul>
                        </div>
                        <div className="page_headerRight_divMenuStoresDiv">
                            <p className="page_headerRight_divMenuStoresDivP">Stores &#x025BF;</p>
                            <ul className="page_headerRight_divMenuStoresDivUl">
                                <li className="page_headerRight_divMenuStoresDivUlLI">Amazon</li>
                                <li className="page_headerRight_divMenuStoresDivUlLI">Walmart</li>
                                <li className="page_headerRight_divMenuStoresDivUlLI">Best Buy</li>
                                <li className="page_headerRight_divMenuStoresDivUlLI">Woot</li>
                                <li className="page_headerRight_divMenuStoresDivUlLI">eBay</li>
                                <li className="page_headerRight_divMenuStoresDivUlLI">Macy's</li>
                                <li className="page_headerRight_divMenuStoresDivUlLI">Other Stores</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}
export default Header;


function Footer() {
    return (
        <>
            <footer className="page_footer">
                <div className="page_footerTop_Div">
                    <span className="page_footerTop_DivTerms"><a href="local:3000" target="_self">Terms & Conditions</a></span> |
                    <span className="page_footerTop_DivPrivacy"> <a href="local:3003" target="_parent">Privacy Policy</a></span> |
                    <span className="page_footerTop_DivDisclosure"> <a href="local:8000" target="_self">Disclosure</a></span>
                </div>

                <div className="page_footerBottom_Div">Copyright © Shusank Tech 2024. All rights reserved.</div>
            </footer>

        </>
    )
}
export { Footer };



function TitelAndSearchBar() {
    const handleSearch = (event) => {
        event.preventDefault(); // Prevent form submission causing a page reload

        const searchTerm = document.querySelector('.page_titelSearchBarFormSearchBar').value.trim().toLowerCase();
        const allProdectListBoxChild = document.querySelectorAll('.page_ProdectListBoxChild');

        allProdectListBoxChild.forEach(child => {
            const description = child.querySelector('.page_ProdectListBoxChildDetails').textContent.toLowerCase();
            if (description.includes(searchTerm)) {
                child.style.display = 'flex';
            } else {
                child.style.display = 'none';
            }
        });
    };

    return (
        <>
            <div className="page_titelSearchBar">
                <h1 className="page_titelSearchBar_titel">Popular Steals</h1>
                <form className="page_titelSearchBarForm" onSubmit={handleSearch}>
                    <input placeholder="Search deals" className="page_titelSearchBarFormSearchBar" />
                    <span type="submit" onClick={handleSearch} className="page_titelSearchBarFormSearchButton">&#128269;</span>
                </form>
            </div>
        </>
    )
}

export { TitelAndSearchBar };


function PageNumber() {
    return (
        <>
            <div className="PageNumberBoxParent">
                <span className="PageNumberBoxchildPaarent">
                    <span className="PageNumberBoxchild PageNumberBoxchild01">1</span>
                    <span className="PageNumberBoxchild PageNumberBoxchild02">2</span>
                    <span className="PageNumberBoxchild PageNumberBoxchild03">3</span>
                    <span className="PageNumberBoxchild PageNumberBoxchild04">4</span>
                    <span className="PageNumberBoxchild PageNumberBoxchild05">5</span>
                    <span className="PageNumberBoxchild PageNumberBoxchild06">6</span>
                    <span className="PageNumberBoxchild PageNumberBoxchild07">7</span>
                    <span className="PageNumberBoxchild PageNumberBoxchild08">8</span>
                    <span className="PageNumberBoxchild PageNumberBoxchild09">9</span>
                    <span className="PageNumberBoxchild PageNumberBoxchild10">10</span>
                </span>
            </div>
        </>
    )
}
export { PageNumber };


// function ProdectsList() {

//     React.useEffect(() => {
//         const viewDetailsButtons = document.querySelectorAll('.page_ProdectListBoxChild_ViewDetails');
//         const allProdectListBoxChildFullDetails = document.querySelectorAll('.page_ProdectListBoxChildFullDetails');
//         const allProdectListBoxChild = document.querySelectorAll('.page_ProdectListBoxChild');

//         const pageNumberBoxParent = document.querySelector('.PageNumberBoxParent');
//         const page_titelSearchBar = document.querySelector('.page_titelSearchBar');


//         viewDetailsButtons.forEach((button, index) => {
//             button.addEventListener('click', () => {
//                 // Hide all .page_ProdectListBoxChildFullDetails
//                 allProdectListBoxChildFullDetails.forEach((detail) => {
//                     detail.style.display = 'none';
//                 });

//                 // Hide all .page_ProdectListBoxChild
//                 allProdectListBoxChild.forEach((child) => {
//                     child.style.display = 'none';
//                 });

//                 // Display the clicked details
//                 allProdectListBoxChildFullDetails[index].style.display = 'flex';

//                 pageNumberBoxParent.style.display = 'none';
//                 page_titelSearchBar.style.display = 'none';

//             });
//         });
//     }, []);

//     return (
//         <>
//             <div className="page_ProdectListBoxParent">
//                 <div className="page_ProdectListBoxChildParent">
//                     <div className="page_ProdectListBoxChild">
//                         <span className="page_ProdectListBoxChildTop">
//                             <span className="page_ProdectListBoxChildTopLeft">Amazon</span>
//                             <span className="page_ProdectListBoxChildTopRight">Last Edited: <span className="page_ProdectListBoxChildTopRightDate">06-15-24</span></span>
//                         </span>
//                         <img src={image000001} alt="StealsImage" className="page_ProdectListBoxChildImage" />
//                         <span className="page_ProdectListBoxChildDetails">
//                             <span className="page_ProdectListBoxChildPopupParent">
//                                 <span className="page_ProdectListBoxChildPopup">
//                                     <span className="page_ProdectListBoxChildPopupText">Amazon - Cruise Power Strip with Foldable Plug, Outlet Extender 2 USB A 2 USB C Ports, Cruise Ship Essentials No Surge Protector, Multi Plug Wall Outlet, 2 Prong to 3 Prong Outlet Adapter, Japan Plug Adapter</span><span>&#x025BE;</span>
//                                 </span>
//                             </span>
//                             Amazon - Cruise Power Strip with Foldable Plug, Outlet Extender 2 USB A 2 USB C Ports,... :<span className="page_ProdectListBoxChildDetailsPrice"><span className="page_ProdectListBoxChildDetailsPrice_DiscountPrice">$8.99</span> (<span className="page_ProdectListBoxChildDetailsPrice_OrginalPrice">$17.99</span>)</span>
//                         </span>
//                         <span className="page_ProdectListBoxChild_ViewDetails">View Details</span>
//                     </div>
//                     <div className="page_ProdectListBoxChildFullDetails">
//                         <div className="page_ProdectListBoxChildFullDetailsline1">
//                             <a href="https://rajanareshpandugayala.github.io/AllTopSteals/" target="_parent">Home</a>
//                             <div className="page_ProdectListBoxChildFullDetailsline1text">/ Amazon - Cruise Power Strip with Foldable Plug, Outlet Extender 2 USB A 2 USB C Ports, Cruise Ship Essentials No Surge Protector, Multi Plug Wall Outlet, 2 Prong to 3 Prong Outlet Adapter, Japan Plug Adapter</div>
//                         </div>
//                         <div className="page_ProdectListBoxChildFullDetailsline2">Amazon - Cruise Power Strip with Foldable Plug, Outlet Extender 2 USB A 2 USB C Ports, Cruise Ship Essentials No Surge Protector, Multi Plug Wall Outlet, 2 Prong to 3 Prong Outlet Adapter, Japan Plug Adapter</div>
//                         <div className="page_ProdectListBoxChildFullDetailsline3">
//                             <span className="page_ProdectListBoxChildFullDetails3Top">
//                                 <span>Amazon</span>
//                                 <span>Last Edited: <span className="page_ProdectListBoxChildTopRightDate">06-15-24</span></span>
//                             </span>
//                             <img src={image000001} alt="StealsImage" className="page_ProdectListBoxChildFullDetailsImage" />

//                             <span className="page_ProdectListBoxChildFullDetails3details">
//                                 <a href="https://www.amazon.com/dp/B0CXXN79KP?&linkCode=ll1&tag=bslcouponsanddeals-20&linkId=f4a6de24f91231abcef295760ea0a71b&language=en_US&ref_=as_li_ss_tl" target="_black">Amazon - Cruise Power Strip with Foldable Plug, Outlet Extender 2 USB A 2 USB C Ports, Cruise Ship Essentials No Surge Protector, Multi Plug Wall Outlet, 2 Prong to 3 Prong Outlet Adapter, Japan Plug Adapter</a> :<span className="page_ProdectListBoxChildDetailsPrice"><span className="page_ProdectListBoxChildDetailsPrice_DiscountPrice">$8.99</span> (<span className="page_ProdectListBoxChildDetailsPrice_OrginalPrice">$17.99</span>)</span>
//                             </span>
//                             <span>join prime to save $3 + Apply <b>10%</b> coupon on the page to reduce the price to <b>$8.99</b></span>
//                             <span><b>Free shipping</b> with <b>Prime</b> or on orders of over $35.</span>
//                             <a href="https://www.amazon.com/dp/B0CXXN79KP?&linkCode=ll1&tag=bslcouponsanddeals-20&linkId=f4a6de24f91231abcef295760ea0a71b&language=en_US&ref_=as_li_ss_tl" target="_black" className="page_ProdectListBoxChildFullDetails3_AccessDeal">Access Deal</a>
//                         </div>
//                         <div className="page_ProdectListBoxChildFullDetails4">Note:If you purchase any item through a post on our site, we may receive a small share of the sale. Price, Deals and Coupons are valid at the time of post and may change or expire any time. As affiliated with Amazon and other assiciate programs we earn commission from qualifying purchases.</div>
//                     </div>
//                 </div>

//                 <div className="page_ProdectListBoxChildParent">
//                     <div className="page_ProdectListBoxChild">
//                         <span className="page_ProdectListBoxChildTop">
//                             <span className="page_ProdectListBoxChildTopLeft">Amazon</span>
//                             <span className="page_ProdectListBoxChildTopRight">Last Edited: <span className="page_ProdectListBoxChildTopRightDate">06-15-24</span></span>
//                         </span>
//                         <img src={image000002} alt="StealsImage" className="page_ProdectListBoxChildImage" />
//                         <span className="page_ProdectListBoxChildDetails">
//                             <span className="page_ProdectListBoxChildPopupParent">
//                                 <span className="page_ProdectListBoxChildPopup">
//                                     <span className="page_ProdectListBoxChildPopupText">Amazon - eufy Security eufyCam E330 (Professional) 4-Cam Kit, 4K Outdoor Security Camera System, 24/7 Recording, Plug-in, Wi-Fi NVR, 1TB Hard Drive Included, 10CH, Local Storage, No Monthly Fee</span><span>&#x025BE;</span>
//                                 </span>
//                             </span>
//                             Amazon - eufy Security eufyCam E330 (Professional) 4-Cam Kit, 4K Outdoor Security Camera... :<span className="page_ProdectListBoxChildDetailsPrice"><span className="page_ProdectListBoxChildDetailsPrice_DiscountPrice">$429.99</span> (<span className="page_ProdectListBoxChildDetailsPrice_OrginalPrice">$599.99</span>)</span></span>
//                         <span className="page_ProdectListBoxChild_ViewDetails">View Details</span>
//                     </div>
//                     <div className="page_ProdectListBoxChildFullDetails">
//                         <div className="page_ProdectListBoxChildFullDetailsline1">
//                             <a href="https://rajanareshpandugayala.github.io/AllTopSteals/" target="_parent">Home</a>
//                             <div className="page_ProdectListBoxChildFullDetailsline1text">/ Amazon - eufy Security eufyCam E330 (Professional) 4-Cam Kit, 4K Outdoor Security Camera System, 24/7 Recording, Plug-in, Wi-Fi NVR, 1TB Hard Drive Included, 10CH, Local Storage, No Monthly Fee</div>
//                         </div>
//                         <div className="page_ProdectListBoxChildFullDetailsline2">Amazon - eufy Security eufyCam E330 (Professional) 4-Cam Kit, 4K Outdoor Security Camera System, 24/7 Recording, Plug-in, Wi-Fi NVR, 1TB Hard Drive Included, 10CH, Local Storage, No Monthly Fee</div>
//                         <div className="page_ProdectListBoxChildFullDetailsline3">
//                             <span className="page_ProdectListBoxChildFullDetails3Top">
//                                 <span>Amazon</span>
//                                 <span>Last Edited: <span className="page_ProdectListBoxChildTopRightDate">06-15-24</span></span>
//                             </span>
//                             <img src={image000002} alt="StealsImage" className="page_ProdectListBoxChildFullDetailsImage" />

//                             <span className="page_ProdectListBoxChildFullDetails3details">
//                                 <a href="https://www.amazon.com/dp/B0CCDX6F44?th=1&linkCode=ll1&tag=bslcouponsanddeals-20&linkId=e0d1de50447d2a6d3aa6a1d1fc5864a9&language=en_US&ref_=as_li_ss_tl" target="_black">Amazon - eufy Security eufyCam E330 (Professional) 4-Cam Kit, 4K Outdoor Security Camera System, 24/7 Recording, Plug-in, Wi-Fi NVR, 1TB Hard Drive Included, 10CH, Local Storage, No Monthly Fee</a> :<span className="page_ProdectListBoxChildDetailsPrice"><span className="page_ProdectListBoxChildDetailsPrice_DiscountPrice">$429.99</span> (<span className="page_ProdectListBoxChildDetailsPrice_OrginalPrice">$599.99</span>)</span>
//                             </span>
//                             <span><b>Shipping is free.</b></span>
//                             <a href="https://www.amazon.com/dp/B0CCDX6F44?th=1&linkCode=ll1&tag=bslcouponsanddeals-20&linkId=e0d1de50447d2a6d3aa6a1d1fc5864a9&language=en_US&ref_=as_li_ss_tl" target="_black" className="page_ProdectListBoxChildFullDetails3_AccessDeal">Access Deal</a>
//                         </div>
//                         <div className="page_ProdectListBoxChildFullDetails4">Note:If you purchase any item through a post on our site, we may receive a small share of the sale. Price, Deals and Coupons are valid at the time of post and may change or expire any time. As affiliated with Amazon and other assiciate programs we earn commission from qualifying purchases.</div>
//                     </div>
//                 </div>

//                 <div className="page_ProdectListBoxChildParent">
//                     <div className="page_ProdectListBoxChild">
//                         <span className="page_ProdectListBoxChildTop">
//                             <span className="page_ProdectListBoxChildTopLeft">Amazon</span>
//                             <span className="page_ProdectListBoxChildTopRight">Last Edited: <span className="page_ProdectListBoxChildTopRightDate">06-15-24</span></span>
//                         </span>
//                         <img src={image000003} alt="StealsImage" className="page_ProdectListBoxChildImage" />
//                         <span className="page_ProdectListBoxChildDetails">
//                             <span className="page_ProdectListBoxChildPopupParent">
//                                 <span className="page_ProdectListBoxChildPopup">
//                                     <span className="page_ProdectListBoxChildPopupText">Amazon -DWVO Mattress Topper Full Size, 3 Inch Cooling Memory Foam Mattress Topper, Soft Vents Holes Bed Topper with Breathable Washable Ice-Touch Fabric Cover for Pressure Relief, CertiPUR-US Certified</span><span>&#x025BE;</span>
//                                 </span>
//                             </span>
//                             Amazon -DWVO Mattress Topper Full Size, 3 Inch Cooling Memory Foam Mattress Topper, Soft... :<span className="page_ProdectListBoxChildDetailsPrice"><span className="page_ProdectListBoxChildDetailsPrice_DiscountPrice">$44.86</span> (<span className="page_ProdectListBoxChildDetailsPrice_OrginalPrice">$64.09</span>)</span></span>
//                         <span className="page_ProdectListBoxChild_ViewDetails">View Details</span>
//                     </div>
//                     <div className="page_ProdectListBoxChildFullDetails">
//                         <div className="page_ProdectListBoxChildFullDetailsline1">
//                             <a href="https://rajanareshpandugayala.github.io/AllTopSteals/" target="_parent">Home</a>
//                             <div className="page_ProdectListBoxChildFullDetailsline1text">/ Amazon -DWVO Mattress Topper Full Size, 3 Inch Cooling Memory Foam Mattress Topper, Soft Vents Holes Bed Topper with Breathable Washable Ice-Touch Fabric Cover for Pressure Relief, CertiPUR-US Certified</div>
//                         </div>
//                         <div className="page_ProdectListBoxChildFullDetailsline2">Amazon -DWVO Mattress Topper Full Size, 3 Inch Cooling Memory Foam Mattress Topper, Soft Vents Holes Bed Topper with Breathable Washable Ice-Touch Fabric Cover for Pressure Relief, CertiPUR-US Certified</div>
//                         <div className="page_ProdectListBoxChildFullDetailsline3">
//                             <span className="page_ProdectListBoxChildFullDetails3Top">
//                                 <span>Amazon</span>
//                                 <span>Last Edited: <span className="page_ProdectListBoxChildTopRightDate">06-15-24</span></span>
//                             </span>
//                             <img src={image000003} alt="StealsImage" className="page_ProdectListBoxChildFullDetailsImage" />

//                             <span className="page_ProdectListBoxChildFullDetails3details">
//                                 <a href="https://www.amazon.com/gp/product/B0CLJ3J8ZD?th=1&linkCode=ll1&tag=bslcouponsanddeals-20&linkId=51c662fb6d232dcb4520ead07c25cd09&language=en_US&ref_=as_li_ss_tl" target="_black">Amazon -DWVO Mattress Topper Full Size, 3 Inch Cooling Memory Foam Mattress Topper, Soft Vents Holes Bed Topper with Breathable Washable Ice-Touch Fabric Cover for Pressure Relief, CertiPUR-US Certified</a> :<span className="page_ProdectListBoxChildDetailsPrice"><span className="page_ProdectListBoxChildDetailsPrice_DiscountPrice">$44.86</span> (<span className="page_ProdectListBoxChildDetailsPrice_OrginalPrice">$64.09</span>)</span>
//                             </span>
//                             <span>Apply a <b>30% discount</b> promo code <b>30EHX6R5</b> to reduce the price to <b>$44.86.</b></span>
//                             <span><b>Shipping is free.</b></span>
//                             <a href="https://www.amazon.com/gp/product/B0CLJ3J8ZD?th=1&linkCode=ll1&tag=bslcouponsanddeals-20&linkId=51c662fb6d232dcb4520ead07c25cd09&language=en_US&ref_=as_li_ss_tl" target="_black" className="page_ProdectListBoxChildFullDetails3_AccessDeal">Access Deal</a>
//                         </div>
//                         <div className="page_ProdectListBoxChildFullDetails4">Note:If you purchase any item through a post on our site, we may receive a small share of the sale. Price, Deals and Coupons are valid at the time of post and may change or expire any time. As affiliated with Amazon and other assiciate programs we earn commission from qualifying purchases.</div>
//                     </div>
//                 </div>
//             </div>


//         </>
//     )
// }
// export { ProdectsList };
