import React from "react";
import './HomePage.css'

import logo512 from './prodectpics/logo512.png';



function Header() {
    return (
        <>
            <header className="page_header">
                <span className="page_headerLeft_div" href="#" target="_parent" onClick={() => window.location.reload()}>
                    <img src={logo512} alt="Logo" className="page_headerLeft_divLogo" />
                    <p className="page_headerLeft_divText"><span className="page_headerLeft_divTextTop">All Top Steals</span><span className="page_headerLeft_divTextBottom">Handpicked Deals and Coupons</span></p>
                </span>

                <div className="page_headerRight_div">
                    <div className="page_headerRight_divMenu">
                        <span className="page_headerRight_divMenuHome" href="#" target="_parent" onClick={() => window.location.reload()}>Home</span>
                        <p className="page_headerRight_divMenuTopsteals" id="topStealsFilter">Top Steals</p>
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
