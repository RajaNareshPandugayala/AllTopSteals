import React from "react";
import './HomePage.css'

function Header() {
    return (
        <>
            <header className="page_header">
                <div className="page_headerLeft_div">
                    <img src="logo512.png" alt="Logo" className="page_headerLeft_divLogo" />
                    <p className="page_headerLeft_divText"><span className="page_headerLeft_divTextTop">All Top Steals</span><span className="page_headerLeft_divTextBottom">Handpicked Deals and Coupons</span></p>
                </div>

                <div className="page_headerRight_div">
                    <div className="page_headerRight_divMenu">
                        <p className="page_headerRight_divMenuHome">Home</p>
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
    return (
        <>
            <div className="page_titelSearchBar">
                <h1 className="page_titelSearchBar_titel">Popular Steals</h1>
                <form className="page_titelSearchBarForm">
                    <input placeholder="Search deals" className="page_titelSearchBarFormSearchBar" />
                    <span className="page_titelSearchBarFormSearchButton">&#128269;</span>
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


function ProdectsList() {
    return (
        <>
            <div className="page_ProdectListBoxParent">

                <div className="page_ProdectListBoxChild">
                    <span className="page_ProdectListBoxChildTop">
                        <span className="page_ProdectListBoxChildTopLeft">Amazon</span>
                        <span className="page_ProdectListBoxChildTopRight">Last Edited: <span className="page_ProdectListBoxChildTopRightDate">06-15-24</span></span>
                    </span>
                    <img src="logo512.png" alt="StealsImage" className="page_ProdectListBoxChildImage" />
                    <span className="page_ProdectListBoxChildDetails">
                        <span className="page_ProdectListBoxChildPopupParent">
                            <span className="page_ProdectListBoxChildPopup">
                                <span className="page_ProdectListBoxChildPopupText">Amazon - Cruise Power Strip with Foldable Plug, Outlet Extender 2 USB A 2 USB C Ports, Cruise Ship Essentials No Surge Protector, Multi Plug Wall Outlet, 2 Prong to 3 Prong Outlet Adapter, Japan Plug Adapter</span><span>&#x025BE;</span>
                            </span>
                        </span>
                        Amazon - Cruise Power Strip with Foldable Plug, Outlet Extender 2 USB A 2 USB C Ports,... :<span className="page_ProdectListBoxChildDetailsPrice"><span className="page_ProdectListBoxChildDetailsPrice_DiscountPrice">$8.99</span> (<span className="page_ProdectListBoxChildDetailsPrice_OrginalPrice">$17.99</span>)</span></span>
                    <span className="page_ProdectListBoxChild_ViewDetails">View Details</span>
                </div>

                <div className="page_ProdectListBoxChild">
                    <span className="page_ProdectListBoxChildTop">
                        <span className="page_ProdectListBoxChildTopLeft">Amazon</span>
                        <span className="page_ProdectListBoxChildTopRight">Last Edited: <span className="page_ProdectListBoxChildTopRightDate">06-15-24</span></span>
                    </span>
                    <img src="image000002.png" alt="StealsImage" className="page_ProdectListBoxChildImage" />
                    <span className="page_ProdectListBoxChildDetails">
                        <span className="page_ProdectListBoxChildPopupParent">
                            <span className="page_ProdectListBoxChildPopup">
                                <span className="page_ProdectListBoxChildPopupText">Amazon - eufy Security eufyCam E330 (Professional) 4-Cam Kit, 4K Outdoor Security Camera System, 24/7 Recording, Plug-in, Wi-Fi NVR, 1TB Hard Drive Included, 10CH, Local Storage, No Monthly Fee</span><span>&#x025BE;</span>
                            </span>
                        </span>
                        Amazon - eufy Security eufyCam E330 (Professional) 4-Cam Kit, 4K Outdoor Security Camera... :<span className="page_ProdectListBoxChildDetailsPrice"><span className="page_ProdectListBoxChildDetailsPrice_DiscountPrice">$429.99</span> (<span className="page_ProdectListBoxChildDetailsPrice_OrginalPrice">$599.99</span>)</span></span>
                    <span className="page_ProdectListBoxChild_ViewDetails">View Details</span>
                </div>

                <div className="page_ProdectListBoxChild">
                    <span className="page_ProdectListBoxChildTop">
                        <span className="page_ProdectListBoxChildTopLeft">Amazon</span>
                        <span className="page_ProdectListBoxChildTopRight">Last Edited: <span className="page_ProdectListBoxChildTopRightDate">06-15-24</span></span>
                    </span>
                    <img src="image000003.png" alt="StealsImage" className="page_ProdectListBoxChildImage" />
                    <span className="page_ProdectListBoxChildDetails">
                        <span className="page_ProdectListBoxChildPopupParent">
                            <span className="page_ProdectListBoxChildPopup">
                                <span className="page_ProdectListBoxChildPopupText">Amazon -DWVO Mattress Topper Full Size, 3 Inch Cooling Memory Foam Mattress Topper, Soft Vents Holes Bed Topper with Breathable Washable Ice-Touch Fabric Cover for Pressure Relief, CertiPUR-US Certified</span><span>&#x025BE;</span>
                            </span>
                        </span>
                        Amazon -DWVO Mattress Topper Full Size, 3 Inch Cooling Memory Foam Mattress Topper, Soft... :<span className="page_ProdectListBoxChildDetailsPrice"><span className="page_ProdectListBoxChildDetailsPrice_DiscountPrice">$44.86</span> (<span className="page_ProdectListBoxChildDetailsPrice_OrginalPrice">$64.09</span>)</span></span>
                    <span className="page_ProdectListBoxChild_ViewDetails">View Details</span>
                </div>

                <div className="page_ProdectListBoxChild">
                    <span className="page_ProdectListBoxChildTop">
                        <span className="page_ProdectListBoxChildTopLeft">Amazon</span>
                        <span className="page_ProdectListBoxChildTopRight">Last Edited: <span className="page_ProdectListBoxChildTopRightDate">06-15-24</span></span>
                    </span>
                    <img src="logo512.png" alt="StealsImage" className="page_ProdectListBoxChildImage" />
                    <span className="page_ProdectListBoxChildDetails">
                        <span className="page_ProdectListBoxChildPopupParent">
                            <span className="page_ProdectListBoxChildPopup">
                                <span className="page_ProdectListBoxChildPopupText">Amazon - Cruise Power Strip with Foldable Plug, Outlet Extender 2 USB A 2 USB C Ports, Cruise Ship Essentials No Surge Protector, Multi Plug Wall Outlet, 2 Prong to 3 Prong Outlet Adapter, Japan Plug Adapter</span><span>&#x025BE;</span>
                            </span>
                        </span>
                        Amazon - Cruise Power Strip with Foldable Plug, Outlet Extender 2 USB A 2 USB C Ports,... :<span className="page_ProdectListBoxChildDetailsPrice"><span className="page_ProdectListBoxChildDetailsPrice_DiscountPrice">$8.99</span> (<span className="page_ProdectListBoxChildDetailsPrice_OrginalPrice">$17.99</span>)</span></span>
                    <span className="page_ProdectListBoxChild_ViewDetails">View Details</span>
                </div>

                <div className="page_ProdectListBoxChild">
                    <span className="page_ProdectListBoxChildTop">
                        <span className="page_ProdectListBoxChildTopLeft">Amazon</span>
                        <span className="page_ProdectListBoxChildTopRight">Last Edited: <span className="page_ProdectListBoxChildTopRightDate">06-15-24</span></span>
                    </span>
                    <img src="image000002.png" alt="StealsImage" className="page_ProdectListBoxChildImage" />
                    <span className="page_ProdectListBoxChildDetails">
                        <span className="page_ProdectListBoxChildPopupParent">
                            <span className="page_ProdectListBoxChildPopup">
                                <span className="page_ProdectListBoxChildPopupText">Amazon - eufy Security eufyCam E330 (Professional) 4-Cam Kit, 4K Outdoor Security Camera System, 24/7 Recording, Plug-in, Wi-Fi NVR, 1TB Hard Drive Included, 10CH, Local Storage, No Monthly Fee</span><span>&#x025BE;</span>
                            </span>
                        </span>
                        Amazon - eufy Security eufyCam E330 (Professional) 4-Cam Kit, 4K Outdoor Security Camera... :<span className="page_ProdectListBoxChildDetailsPrice"><span className="page_ProdectListBoxChildDetailsPrice_DiscountPrice">$429.99</span> (<span className="page_ProdectListBoxChildDetailsPrice_OrginalPrice">$599.99</span>)</span></span>
                    <span className="page_ProdectListBoxChild_ViewDetails">View Details</span>
                </div>

                <div className="page_ProdectListBoxChild">
                    <span className="page_ProdectListBoxChildTop">
                        <span className="page_ProdectListBoxChildTopLeft">Amazon</span>
                        <span className="page_ProdectListBoxChildTopRight">Last Edited: <span className="page_ProdectListBoxChildTopRightDate">06-15-24</span></span>
                    </span>
                    <img src="image000003.png" alt="StealsImage" className="page_ProdectListBoxChildImage" />
                    <span className="page_ProdectListBoxChildDetails">
                        <span className="page_ProdectListBoxChildPopupParent">
                            <span className="page_ProdectListBoxChildPopup">
                                <span className="page_ProdectListBoxChildPopupText">Amazon -DWVO Mattress Topper Full Size, 3 Inch Cooling Memory Foam Mattress Topper, Soft Vents Holes Bed Topper with Breathable Washable Ice-Touch Fabric Cover for Pressure Relief, CertiPUR-US Certified</span><span>&#x025BE;</span>
                            </span>
                        </span>
                        Amazon -DWVO Mattress Topper Full Size, 3 Inch Cooling Memory Foam Mattress Topper, Soft... :<span className="page_ProdectListBoxChildDetailsPrice"><span className="page_ProdectListBoxChildDetailsPrice_DiscountPrice">$44.86</span> (<span className="page_ProdectListBoxChildDetailsPrice_OrginalPrice">$64.09</span>)</span></span>
                    <span className="page_ProdectListBoxChild_ViewDetails">View Details</span>
                </div>

                <div className="page_ProdectListBoxChild">
                    <span className="page_ProdectListBoxChildTop">
                        <span className="page_ProdectListBoxChildTopLeft">Amazon</span>
                        <span className="page_ProdectListBoxChildTopRight">Last Edited: <span className="page_ProdectListBoxChildTopRightDate">06-15-24</span></span>
                    </span>
                    <img src="logo512.png" alt="StealsImage" className="page_ProdectListBoxChildImage" />
                    <span className="page_ProdectListBoxChildDetails">
                        <span className="page_ProdectListBoxChildPopupParent">
                            <span className="page_ProdectListBoxChildPopup">
                                <span className="page_ProdectListBoxChildPopupText">Amazon - Cruise Power Strip with Foldable Plug, Outlet Extender 2 USB A 2 USB C Ports, Cruise Ship Essentials No Surge Protector, Multi Plug Wall Outlet, 2 Prong to 3 Prong Outlet Adapter, Japan Plug Adapter</span><span>&#x025BE;</span>
                            </span>
                        </span>
                        Amazon - Cruise Power Strip with Foldable Plug, Outlet Extender 2 USB A 2 USB C Ports,... :<span className="page_ProdectListBoxChildDetailsPrice"><span className="page_ProdectListBoxChildDetailsPrice_DiscountPrice">$8.99</span> (<span className="page_ProdectListBoxChildDetailsPrice_OrginalPrice">$17.99</span>)</span></span>
                    <span className="page_ProdectListBoxChild_ViewDetails">View Details</span>
                </div>

                <div className="page_ProdectListBoxChild">
                    <span className="page_ProdectListBoxChildTop">
                        <span className="page_ProdectListBoxChildTopLeft">Amazon</span>
                        <span className="page_ProdectListBoxChildTopRight">Last Edited: <span className="page_ProdectListBoxChildTopRightDate">06-15-24</span></span>
                    </span>
                    <img src="image000002.png" alt="StealsImage" className="page_ProdectListBoxChildImage" />
                    <span className="page_ProdectListBoxChildDetails">
                        <span className="page_ProdectListBoxChildPopupParent">
                            <span className="page_ProdectListBoxChildPopup">
                                <span className="page_ProdectListBoxChildPopupText">Amazon - eufy Security eufyCam E330 (Professional) 4-Cam Kit, 4K Outdoor Security Camera System, 24/7 Recording, Plug-in, Wi-Fi NVR, 1TB Hard Drive Included, 10CH, Local Storage, No Monthly Fee</span><span>&#x025BE;</span>
                            </span>
                        </span>
                        Amazon - eufy Security eufyCam E330 (Professional) 4-Cam Kit, 4K Outdoor Security Camera... :<span className="page_ProdectListBoxChildDetailsPrice"><span className="page_ProdectListBoxChildDetailsPrice_DiscountPrice">$429.99</span> (<span className="page_ProdectListBoxChildDetailsPrice_OrginalPrice">$599.99</span>)</span></span>
                    <span className="page_ProdectListBoxChild_ViewDetails">View Details</span>
                </div>

                <div className="page_ProdectListBoxChild">
                    <span className="page_ProdectListBoxChildTop">
                        <span className="page_ProdectListBoxChildTopLeft">Amazon</span>
                        <span className="page_ProdectListBoxChildTopRight">Last Edited: <span className="page_ProdectListBoxChildTopRightDate">06-15-24</span></span>
                    </span>
                    <img src="image000003.png" alt="StealsImage" className="page_ProdectListBoxChildImage" />
                    <span className="page_ProdectListBoxChildDetails">
                        <span className="page_ProdectListBoxChildPopupParent">
                            <span className="page_ProdectListBoxChildPopup">
                                <span className="page_ProdectListBoxChildPopupText">Amazon -DWVO Mattress Topper Full Size, 3 Inch Cooling Memory Foam Mattress Topper, Soft Vents Holes Bed Topper with Breathable Washable Ice-Touch Fabric Cover for Pressure Relief, CertiPUR-US Certified</span><span>&#x025BE;</span>
                            </span>
                        </span>
                        Amazon -DWVO Mattress Topper Full Size, 3 Inch Cooling Memory Foam Mattress Topper, Soft... :<span className="page_ProdectListBoxChildDetailsPrice"><span className="page_ProdectListBoxChildDetailsPrice_DiscountPrice">$44.86</span> (<span className="page_ProdectListBoxChildDetailsPrice_OrginalPrice">$64.09</span>)</span></span>
                    <span className="page_ProdectListBoxChild_ViewDetails">View Details</span>
                </div>

                <div className="page_ProdectListBoxChild">
                    <span className="page_ProdectListBoxChildTop">
                        <span className="page_ProdectListBoxChildTopLeft">Amazon</span>
                        <span className="page_ProdectListBoxChildTopRight">Last Edited: <span className="page_ProdectListBoxChildTopRightDate">06-15-24</span></span>
                    </span>
                    <img src="logo512.png" alt="StealsImage" className="page_ProdectListBoxChildImage" />
                    <span className="page_ProdectListBoxChildDetails">
                        <span className="page_ProdectListBoxChildPopupParent">
                            <span className="page_ProdectListBoxChildPopup">
                                <span className="page_ProdectListBoxChildPopupText">Amazon - Cruise Power Strip with Foldable Plug, Outlet Extender 2 USB A 2 USB C Ports, Cruise Ship Essentials No Surge Protector, Multi Plug Wall Outlet, 2 Prong to 3 Prong Outlet Adapter, Japan Plug Adapter</span><span>&#x025BE;</span>
                            </span>
                        </span>
                        Amazon - Cruise Power Strip with Foldable Plug, Outlet Extender 2 USB A 2 USB C Ports,... :<span className="page_ProdectListBoxChildDetailsPrice"><span className="page_ProdectListBoxChildDetailsPrice_DiscountPrice">$8.99</span> (<span className="page_ProdectListBoxChildDetailsPrice_OrginalPrice">$17.99</span>)</span></span>
                    <span className="page_ProdectListBoxChild_ViewDetails">View Details</span>
                </div>

                <div className="page_ProdectListBoxChild">
                    <span className="page_ProdectListBoxChildTop">
                        <span className="page_ProdectListBoxChildTopLeft">Amazon</span>
                        <span className="page_ProdectListBoxChildTopRight">Last Edited: <span className="page_ProdectListBoxChildTopRightDate">06-15-24</span></span>
                    </span>
                    <img src="image000002.png" alt="StealsImage" className="page_ProdectListBoxChildImage" />
                    <span className="page_ProdectListBoxChildDetails">
                        <span className="page_ProdectListBoxChildPopupParent">
                            <span className="page_ProdectListBoxChildPopup">
                                <span className="page_ProdectListBoxChildPopupText">Amazon - eufy Security eufyCam E330 (Professional) 4-Cam Kit, 4K Outdoor Security Camera System, 24/7 Recording, Plug-in, Wi-Fi NVR, 1TB Hard Drive Included, 10CH, Local Storage, No Monthly Fee</span><span>&#x025BE;</span>
                            </span>
                        </span>
                        Amazon - eufy Security eufyCam E330 (Professional) 4-Cam Kit, 4K Outdoor Security Camera... :<span className="page_ProdectListBoxChildDetailsPrice"><span className="page_ProdectListBoxChildDetailsPrice_DiscountPrice">$429.99</span> (<span className="page_ProdectListBoxChildDetailsPrice_OrginalPrice">$599.99</span>)</span></span>
                    <span className="page_ProdectListBoxChild_ViewDetails">View Details</span>
                </div>

                <div className="page_ProdectListBoxChild">
                    <span className="page_ProdectListBoxChildTop">
                        <span className="page_ProdectListBoxChildTopLeft">Amazon</span>
                        <span className="page_ProdectListBoxChildTopRight">Last Edited: <span className="page_ProdectListBoxChildTopRightDate">06-15-24</span></span>
                    </span>
                    <img src="image000003.png" alt="StealsImage" className="page_ProdectListBoxChildImage" />
                    <span className="page_ProdectListBoxChildDetails">
                        <span className="page_ProdectListBoxChildPopupParent">
                            <span className="page_ProdectListBoxChildPopup">
                                <span className="page_ProdectListBoxChildPopupText">Amazon -DWVO Mattress Topper Full Size, 3 Inch Cooling Memory Foam Mattress Topper, Soft Vents Holes Bed Topper with Breathable Washable Ice-Touch Fabric Cover for Pressure Relief, CertiPUR-US Certified</span><span>&#x025BE;</span>
                            </span>
                        </span>
                        Amazon -DWVO Mattress Topper Full Size, 3 Inch Cooling Memory Foam Mattress Topper, Soft... :<span className="page_ProdectListBoxChildDetailsPrice"><span className="page_ProdectListBoxChildDetailsPrice_DiscountPrice">$44.86</span> (<span className="page_ProdectListBoxChildDetailsPrice_OrginalPrice">$64.09</span>)</span></span>
                    <span className="page_ProdectListBoxChild_ViewDetails">View Details</span>
                </div>

                <div className="page_ProdectListBoxChild">
                    <span className="page_ProdectListBoxChildTop">
                        <span className="page_ProdectListBoxChildTopLeft">Amazon</span>
                        <span className="page_ProdectListBoxChildTopRight">Last Edited: <span className="page_ProdectListBoxChildTopRightDate">06-15-24</span></span>
                    </span>
                    <img src="logo512.png" alt="StealsImage" className="page_ProdectListBoxChildImage" />
                    <span className="page_ProdectListBoxChildDetails">
                        <span className="page_ProdectListBoxChildPopupParent">
                            <span className="page_ProdectListBoxChildPopup">
                                <span className="page_ProdectListBoxChildPopupText">Amazon - Cruise Power Strip with Foldable Plug, Outlet Extender 2 USB A 2 USB C Ports, Cruise Ship Essentials No Surge Protector, Multi Plug Wall Outlet, 2 Prong to 3 Prong Outlet Adapter, Japan Plug Adapter</span><span>&#x025BE;</span>
                            </span>
                        </span>
                        Amazon - Cruise Power Strip with Foldable Plug, Outlet Extender 2 USB A 2 USB C Ports,... :<span className="page_ProdectListBoxChildDetailsPrice"><span className="page_ProdectListBoxChildDetailsPrice_DiscountPrice">$8.99</span> (<span className="page_ProdectListBoxChildDetailsPrice_OrginalPrice">$17.99</span>)</span></span>
                    <span className="page_ProdectListBoxChild_ViewDetails">View Details</span>
                </div>

                <div className="page_ProdectListBoxChild">
                    <span className="page_ProdectListBoxChildTop">
                        <span className="page_ProdectListBoxChildTopLeft">Amazon</span>
                        <span className="page_ProdectListBoxChildTopRight">Last Edited: <span className="page_ProdectListBoxChildTopRightDate">06-15-24</span></span>
                    </span>
                    <img src="image000002.png" alt="StealsImage" className="page_ProdectListBoxChildImage" />
                    <span className="page_ProdectListBoxChildDetails">
                        <span className="page_ProdectListBoxChildPopupParent">
                            <span className="page_ProdectListBoxChildPopup">
                                <span className="page_ProdectListBoxChildPopupText">Amazon - eufy Security eufyCam E330 (Professional) 4-Cam Kit, 4K Outdoor Security Camera System, 24/7 Recording, Plug-in, Wi-Fi NVR, 1TB Hard Drive Included, 10CH, Local Storage, No Monthly Fee</span><span>&#x025BE;</span>
                            </span>
                        </span>
                        Amazon - eufy Security eufyCam E330 (Professional) 4-Cam Kit, 4K Outdoor Security Camera... :<span className="page_ProdectListBoxChildDetailsPrice"><span className="page_ProdectListBoxChildDetailsPrice_DiscountPrice">$429.99</span> (<span className="page_ProdectListBoxChildDetailsPrice_OrginalPrice">$599.99</span>)</span></span>
                    <span className="page_ProdectListBoxChild_ViewDetails">View Details</span>
                </div>

                <div className="page_ProdectListBoxChild">
                    <span className="page_ProdectListBoxChildTop">
                        <span className="page_ProdectListBoxChildTopLeft">Amazon</span>
                        <span className="page_ProdectListBoxChildTopRight">Last Edited: <span className="page_ProdectListBoxChildTopRightDate">06-15-24</span></span>
                    </span>
                    <img src="image000003.png" alt="StealsImage" className="page_ProdectListBoxChildImage" />
                    <span className="page_ProdectListBoxChildDetails">
                        <span className="page_ProdectListBoxChildPopupParent">
                            <span className="page_ProdectListBoxChildPopup">
                                <span className="page_ProdectListBoxChildPopupText">Amazon -DWVO Mattress Topper Full Size, 3 Inch Cooling Memory Foam Mattress Topper, Soft Vents Holes Bed Topper with Breathable Washable Ice-Touch Fabric Cover for Pressure Relief, CertiPUR-US Certified</span><span>&#x025BE;</span>
                            </span>
                        </span>
                        Amazon -DWVO Mattress Topper Full Size, 3 Inch Cooling Memory Foam Mattress Topper, Soft... :<span className="page_ProdectListBoxChildDetailsPrice"><span className="page_ProdectListBoxChildDetailsPrice_DiscountPrice">$44.86</span> (<span className="page_ProdectListBoxChildDetailsPrice_OrginalPrice">$64.09</span>)</span></span>
                    <span className="page_ProdectListBoxChild_ViewDetails">View Details</span>
                </div>

                <div className="page_ProdectListBoxChild">
                    <span className="page_ProdectListBoxChildTop">
                        <span className="page_ProdectListBoxChildTopLeft">Amazon</span>
                        <span className="page_ProdectListBoxChildTopRight">Last Edited: <span className="page_ProdectListBoxChildTopRightDate">06-15-24</span></span>
                    </span>
                    <img src="logo512.png" alt="StealsImage" className="page_ProdectListBoxChildImage" />
                    <span className="page_ProdectListBoxChildDetails">
                        <span className="page_ProdectListBoxChildPopupParent">
                            <span className="page_ProdectListBoxChildPopup">
                                <span className="page_ProdectListBoxChildPopupText">Amazon - Cruise Power Strip with Foldable Plug, Outlet Extender 2 USB A 2 USB C Ports, Cruise Ship Essentials No Surge Protector, Multi Plug Wall Outlet, 2 Prong to 3 Prong Outlet Adapter, Japan Plug Adapter</span><span>&#x025BE;</span>
                            </span>
                        </span>
                        Amazon - Cruise Power Strip with Foldable Plug, Outlet Extender 2 USB A 2 USB C Ports,... :<span className="page_ProdectListBoxChildDetailsPrice"><span className="page_ProdectListBoxChildDetailsPrice_DiscountPrice">$8.99</span> (<span className="page_ProdectListBoxChildDetailsPrice_OrginalPrice">$17.99</span>)</span></span>
                    <span className="page_ProdectListBoxChild_ViewDetails">View Details</span>
                </div>

                <div className="page_ProdectListBoxChild">
                    <span className="page_ProdectListBoxChildTop">
                        <span className="page_ProdectListBoxChildTopLeft">Amazon</span>
                        <span className="page_ProdectListBoxChildTopRight">Last Edited: <span className="page_ProdectListBoxChildTopRightDate">06-15-24</span></span>
                    </span>
                    <img src="image000002.png" alt="StealsImage" className="page_ProdectListBoxChildImage" />
                    <span className="page_ProdectListBoxChildDetails">
                        <span className="page_ProdectListBoxChildPopupParent">
                            <span className="page_ProdectListBoxChildPopup">
                                <span className="page_ProdectListBoxChildPopupText">Amazon - eufy Security eufyCam E330 (Professional) 4-Cam Kit, 4K Outdoor Security Camera System, 24/7 Recording, Plug-in, Wi-Fi NVR, 1TB Hard Drive Included, 10CH, Local Storage, No Monthly Fee</span><span>&#x025BE;</span>
                            </span>
                        </span>
                        Amazon - eufy Security eufyCam E330 (Professional) 4-Cam Kit, 4K Outdoor Security Camera... :<span className="page_ProdectListBoxChildDetailsPrice"><span className="page_ProdectListBoxChildDetailsPrice_DiscountPrice">$429.99</span> (<span className="page_ProdectListBoxChildDetailsPrice_OrginalPrice">$599.99</span>)</span></span>
                    <span className="page_ProdectListBoxChild_ViewDetails">View Details</span>
                </div>

                <div className="page_ProdectListBoxChild">
                    <span className="page_ProdectListBoxChildTop">
                        <span className="page_ProdectListBoxChildTopLeft">Amazon</span>
                        <span className="page_ProdectListBoxChildTopRight">Last Edited: <span className="page_ProdectListBoxChildTopRightDate">06-15-24</span></span>
                    </span>
                    <img src="image000003.png" alt="StealsImage" className="page_ProdectListBoxChildImage" />
                    <span className="page_ProdectListBoxChildDetails">
                        <span className="page_ProdectListBoxChildPopupParent">
                            <span className="page_ProdectListBoxChildPopup">
                                <span className="page_ProdectListBoxChildPopupText">Amazon -DWVO Mattress Topper Full Size, 3 Inch Cooling Memory Foam Mattress Topper, Soft Vents Holes Bed Topper with Breathable Washable Ice-Touch Fabric Cover for Pressure Relief, CertiPUR-US Certified</span><span>&#x025BE;</span>
                            </span>
                        </span>
                        Amazon -DWVO Mattress Topper Full Size, 3 Inch Cooling Memory Foam Mattress Topper, Soft... :<span className="page_ProdectListBoxChildDetailsPrice"><span className="page_ProdectListBoxChildDetailsPrice_DiscountPrice">$44.86</span> (<span className="page_ProdectListBoxChildDetailsPrice_OrginalPrice">$64.09</span>)</span></span>
                    <span className="page_ProdectListBoxChild_ViewDetails">View Details</span>
                </div>


                <div className="page_ProdectListBoxChild">
                    <span className="page_ProdectListBoxChildTop">
                        <span className="page_ProdectListBoxChildTopLeft">Amazon</span>
                        <span className="page_ProdectListBoxChildTopRight">Last Edited: <span className="page_ProdectListBoxChildTopRightDate">06-15-24</span></span>
                    </span>
                    <img src="logo512.png" alt="StealsImage" className="page_ProdectListBoxChildImage" />
                    <span className="page_ProdectListBoxChildDetails">
                        <span className="page_ProdectListBoxChildPopupParent">
                            <span className="page_ProdectListBoxChildPopup">
                                <span className="page_ProdectListBoxChildPopupText">Amazon - Cruise Power Strip with Foldable Plug, Outlet Extender 2 USB A 2 USB C Ports, Cruise Ship Essentials No Surge Protector, Multi Plug Wall Outlet, 2 Prong to 3 Prong Outlet Adapter, Japan Plug Adapter</span><span>&#x025BE;</span>
                            </span>
                        </span>
                        Amazon - Cruise Power Strip with Foldable Plug, Outlet Extender 2 USB A 2 USB C Ports,... :<span className="page_ProdectListBoxChildDetailsPrice"><span className="page_ProdectListBoxChildDetailsPrice_DiscountPrice">$8.99</span> (<span className="page_ProdectListBoxChildDetailsPrice_OrginalPrice">$17.99</span>)</span></span>
                    <span className="page_ProdectListBoxChild_ViewDetails">View Details</span>
                </div>

                <div className="page_ProdectListBoxChild">
                    <span className="page_ProdectListBoxChildTop">
                        <span className="page_ProdectListBoxChildTopLeft">Amazon</span>
                        <span className="page_ProdectListBoxChildTopRight">Last Edited: <span className="page_ProdectListBoxChildTopRightDate">06-15-24</span></span>
                    </span>
                    <img src="image000002.png" alt="StealsImage" className="page_ProdectListBoxChildImage" />
                    <span className="page_ProdectListBoxChildDetails">
                        <span className="page_ProdectListBoxChildPopupParent">
                            <span className="page_ProdectListBoxChildPopup">
                                <span className="page_ProdectListBoxChildPopupText">Amazon - eufy Security eufyCam E330 (Professional) 4-Cam Kit, 4K Outdoor Security Camera System, 24/7 Recording, Plug-in, Wi-Fi NVR, 1TB Hard Drive Included, 10CH, Local Storage, No Monthly Fee</span><span>&#x025BE;</span>
                            </span>
                        </span>
                        Amazon - eufy Security eufyCam E330 (Professional) 4-Cam Kit, 4K Outdoor Security Camera... :<span className="page_ProdectListBoxChildDetailsPrice"><span className="page_ProdectListBoxChildDetailsPrice_DiscountPrice">$429.99</span> (<span className="page_ProdectListBoxChildDetailsPrice_OrginalPrice">$599.99</span>)</span></span>
                    <span className="page_ProdectListBoxChild_ViewDetails">View Details</span>
                </div>

                <div className="page_ProdectListBoxChild">
                    <span className="page_ProdectListBoxChildTop">
                        <span className="page_ProdectListBoxChildTopLeft">Amazon</span>
                        <span className="page_ProdectListBoxChildTopRight">Last Edited: <span className="page_ProdectListBoxChildTopRightDate">06-15-24</span></span>
                    </span>
                    <img src="image000003.png" alt="StealsImage" className="page_ProdectListBoxChildImage" />
                    <span className="page_ProdectListBoxChildDetails">
                        <span className="page_ProdectListBoxChildPopupParent">
                            <span className="page_ProdectListBoxChildPopup">
                                <span className="page_ProdectListBoxChildPopupText">Amazon -DWVO Mattress Topper Full Size, 3 Inch Cooling Memory Foam Mattress Topper, Soft Vents Holes Bed Topper with Breathable Washable Ice-Touch Fabric Cover for Pressure Relief, CertiPUR-US Certified</span><span>&#x025BE;</span>
                            </span>
                        </span>
                        Amazon -DWVO Mattress Topper Full Size, 3 Inch Cooling Memory Foam Mattress Topper, Soft... :<span className="page_ProdectListBoxChildDetailsPrice"><span className="page_ProdectListBoxChildDetailsPrice_DiscountPrice">$44.86</span> (<span className="page_ProdectListBoxChildDetailsPrice_OrginalPrice">$64.09</span>)</span></span>
                    <span className="page_ProdectListBoxChild_ViewDetails">View Details</span>
                </div>

                <div className="page_ProdectListBoxChild">
                    <span className="page_ProdectListBoxChildTop">
                        <span className="page_ProdectListBoxChildTopLeft">Amazon</span>
                        <span className="page_ProdectListBoxChildTopRight">Last Edited: <span className="page_ProdectListBoxChildTopRightDate">06-15-24</span></span>
                    </span>
                    <img src="logo512.png" alt="StealsImage" className="page_ProdectListBoxChildImage" />
                    <span className="page_ProdectListBoxChildDetails">
                        <span className="page_ProdectListBoxChildPopupParent">
                            <span className="page_ProdectListBoxChildPopup">
                                <span className="page_ProdectListBoxChildPopupText">Amazon - Cruise Power Strip with Foldable Plug, Outlet Extender 2 USB A 2 USB C Ports, Cruise Ship Essentials No Surge Protector, Multi Plug Wall Outlet, 2 Prong to 3 Prong Outlet Adapter, Japan Plug Adapter</span><span>&#x025BE;</span>
                            </span>
                        </span>
                        Amazon - Cruise Power Strip with Foldable Plug, Outlet Extender 2 USB A 2 USB C Ports,... :<span className="page_ProdectListBoxChildDetailsPrice"><span className="page_ProdectListBoxChildDetailsPrice_DiscountPrice">$8.99</span> (<span className="page_ProdectListBoxChildDetailsPrice_OrginalPrice">$17.99</span>)</span></span>
                    <span className="page_ProdectListBoxChild_ViewDetails">View Details</span>
                </div>

                <div className="page_ProdectListBoxChild">
                    <span className="page_ProdectListBoxChildTop">
                        <span className="page_ProdectListBoxChildTopLeft">Amazon</span>
                        <span className="page_ProdectListBoxChildTopRight">Last Edited: <span className="page_ProdectListBoxChildTopRightDate">06-15-24</span></span>
                    </span>
                    <img src="image000002.png" alt="StealsImage" className="page_ProdectListBoxChildImage" />
                    <span className="page_ProdectListBoxChildDetails">
                        <span className="page_ProdectListBoxChildPopupParent">
                            <span className="page_ProdectListBoxChildPopup">
                                <span className="page_ProdectListBoxChildPopupText">Amazon - eufy Security eufyCam E330 (Professional) 4-Cam Kit, 4K Outdoor Security Camera System, 24/7 Recording, Plug-in, Wi-Fi NVR, 1TB Hard Drive Included, 10CH, Local Storage, No Monthly Fee</span><span>&#x025BE;</span>
                            </span>
                        </span>
                        Amazon - eufy Security eufyCam E330 (Professional) 4-Cam Kit, 4K Outdoor Security Camera... :<span className="page_ProdectListBoxChildDetailsPrice"><span className="page_ProdectListBoxChildDetailsPrice_DiscountPrice">$429.99</span> (<span className="page_ProdectListBoxChildDetailsPrice_OrginalPrice">$599.99</span>)</span></span>
                    <span className="page_ProdectListBoxChild_ViewDetails">View Details</span>
                </div>

                <div className="page_ProdectListBoxChild">
                    <span className="page_ProdectListBoxChildTop">
                        <span className="page_ProdectListBoxChildTopLeft">Amazon</span>
                        <span className="page_ProdectListBoxChildTopRight">Last Edited: <span className="page_ProdectListBoxChildTopRightDate">06-15-24</span></span>
                    </span>
                    <img src="image000003.png" alt="StealsImage" className="page_ProdectListBoxChildImage" />
                    <span className="page_ProdectListBoxChildDetails">
                        <span className="page_ProdectListBoxChildPopupParent">
                            <span className="page_ProdectListBoxChildPopup">
                                <span className="page_ProdectListBoxChildPopupText">Amazon -DWVO Mattress Topper Full Size, 3 Inch Cooling Memory Foam Mattress Topper, Soft Vents Holes Bed Topper with Breathable Washable Ice-Touch Fabric Cover for Pressure Relief, CertiPUR-US Certified</span><span>&#x025BE;</span>
                            </span>
                        </span>
                        Amazon -DWVO Mattress Topper Full Size, 3 Inch Cooling Memory Foam Mattress Topper, Soft... :<span className="page_ProdectListBoxChildDetailsPrice"><span className="page_ProdectListBoxChildDetailsPrice_DiscountPrice">$44.86</span> (<span className="page_ProdectListBoxChildDetailsPrice_OrginalPrice">$64.09</span>)</span></span>
                    <span className="page_ProdectListBoxChild_ViewDetails">View Details</span>
                </div>

            </div>
        </>
    )
}
export { ProdectsList };
