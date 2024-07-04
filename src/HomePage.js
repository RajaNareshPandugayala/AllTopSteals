import React from "react";
import './HomePage.css';

import logo512 from './prodectpics/logo512.png';
import menu006 from './prodectpics/menu006.png';
import close from './prodectpics/close.png';





class Header extends React.Component {
    constructor(props) {
        super(props);
        this.showMenu = this.showMenu.bind(this);
        this.hideMenu = this.hideMenu.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    componentDidMount() {
        const menuIcon = document.querySelector('.page_headerLeft_divImageMenu');
        const closeIcon = document.querySelector('.page_headerLeft_divImageClose');
        const menu = document.querySelector('.page_headerRight_div');
        const mobileMenuList = document.querySelectorAll('.mobileMenuList00');

        menuIcon.addEventListener('click', this.showMenu);
        closeIcon.addEventListener('click', this.hideMenu);
        document.addEventListener('click', this.handleClickOutside);

        mobileMenuList.forEach(item => {
            item.addEventListener('click', this.hideMenu);
        });

        this.menuIcon = menuIcon;
        this.closeIcon = closeIcon;
        this.menu = menu;
    }

    componentWillUnmount() {
        this.menuIcon.removeEventListener('click', this.showMenu);
        this.closeIcon.removeEventListener('click', this.hideMenu);
        document.removeEventListener('click', this.handleClickOutside);
    }

    showMenu() {
        this.menu.style.display = 'flex';
        this.closeIcon.style.display = 'flex';
        this.menuIcon.style.display = 'none';
    }

    hideMenu() {
        if (window.innerWidth <= 600) {
            this.menu.style.display = 'none';
            this.closeIcon.style.display = 'none';
            this.menuIcon.style.display = 'flex';
        }
    }

    handleClickOutside(event) {
        if (!this.menu.contains(event.target) && !this.menuIcon.contains(event.target) && window.innerWidth <= 600) {
            this.hideMenu();
        }
        if (window.innerWidth > 600) {
            this.menu.style.display = 'flex';
        }

    }


    render() {
        return (
            <header className="page_header">
                <span className="page_headerLeft_div" href="#" target="_parent" onClick={() => window.location.reload()}>
                    <img src={logo512} alt="Logo" className="page_headerLeft_divLogo" />
                    <p className="page_headerLeft_divText">
                        <span className="page_headerLeft_divTextTop">All Top Steals</span>
                        <span className="page_headerLeft_divTextBottom">Handpicked Deals and Coupons</span>
                    </p>
                </span>
                <span className="mobileMenu">
                    <img src={menu006} alt="Menu" className="page_headerLeft_divLogo page_headerLeft_divImage page_headerLeft_divImageMenu" />
                    <img src={close} alt="Menu" className="page_headerLeft_divLogo page_headerLeft_divImage page_headerLeft_divImageClose" />
                </span>
                <div className="page_headerRight_div">
                    <div className="page_headerRight_divMenu">
                        <span className="page_headerRight_divMenuHome mobileMenuList mobileMenuList00" href="#" target="_parent" onClick={() => window.location.reload()}>Home</span>
                        <p className="page_headerRight_divMenuTopsteals mobileMenuList mobileMenuList00" id="topStealsFilter">Top Steals</p>
                        <div className="page_headerRight_divMenuCategoriesDiv mobileMenuList">
                            <p className="page_headerRight_divMenuCategoriesDivP ">Categories &#x025BF;</p>
                            <ul className="page_headerRight_divMenuCategoriesDivUl mobileMenuList00">
                                <li className="page_headerRight_divMenuCategoriesDivUlLI">Clothing & Accessories</li>
                                <li className="page_headerRight_divMenuCategoriesDivUlLI">Computers & Electronics</li>
                                <li className="page_headerRight_divMenuCategoriesDivUlLI">Home & Garden</li>
                                <li className="page_headerRight_divMenuCategoriesDivUlLI">Sports & Outdoors</li>
                                <li className="page_headerRight_divMenuCategoriesDivUlLI">Toys & Games</li>
                                <li className="page_headerRight_divMenuCategoriesDivUlLI">Kitchen & Dining</li>
                                <li className="page_headerRight_divMenuCategoriesDivUlLI">Other Categories</li>
                            </ul>
                        </div>
                        <div className="page_headerRight_divMenuStoresDiv mobileMenuList">
                            <p className="page_headerRight_divMenuStoresDivP">Stores &#x025BF;</p>
                            <ul className="page_headerRight_divMenuStoresDivUl mobileMenuList00">
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
        );
    }
}









// function Header() {
//     React.useEffect(() => {
//         const menuIcon = document.querySelector('.page_headerLeft_divImageMenu');
//         const closeIcon = document.querySelector('.page_headerLeft_divImageClose');
//         const menu = document.querySelector('.page_headerRight_div');

//         const showMenu = () => {
//             menu.style.display = 'flex';
//             closeIcon.style.display = 'flex';
//             menuIcon.style.display = 'none';
//         };

//         const hideMenu = () => {
//             menu.style.display = 'none';
//             closeIcon.style.display = 'none';
//             menuIcon.style.display = 'flex';
//         };

//         menuIcon.addEventListener('click', showMenu);
//         closeIcon.addEventListener('click', hideMenu);

//         return () => {
//             menuIcon.removeEventListener('click', showMenu);
//             closeIcon.removeEventListener('click', hideMenu);
//         };
//     }, []);

//     return (
//         <header className="page_header">
//             <span className="page_headerLeft_div" href="#" target="_parent" onClick={() => window.location.reload()}>
//                 <img src={logo512} alt="Logo" className="page_headerLeft_divLogo" />
//                 <p className="page_headerLeft_divText">
//                     <span className="page_headerLeft_divTextTop">All Top Steals</span>
//                     <span className="page_headerLeft_divTextBottom">Handpicked Deals and Coupons</span>
//                 </p>
//             </span>
//             <span className="mobileMenu">
//                 <img src={menu006} alt="Menu" className="page_headerLeft_divLogo page_headerLeft_divImage page_headerLeft_divImageMenu" />
//                 <img src={close} alt="Menu" className="page_headerLeft_divLogo page_headerLeft_divImage page_headerLeft_divImageClose" />
//             </span>
//             <div className="page_headerRight_div">
//                 <div className="page_headerRight_divMenu">
//                     <span className="page_headerRight_divMenuHome mobileMenuList" href="#" target="_parent" onClick={() => window.location.reload()}>Home</span>
//                     <p className="page_headerRight_divMenuTopsteals mobileMenuList" id="topStealsFilter">Top Steals</p>
//                     <div className="page_headerRight_divMenuCategoriesDiv mobileMenuList">
//                         <p className="page_headerRight_divMenuCategoriesDivP ">Categories &#x025BF;</p>
//                         <ul className="page_headerRight_divMenuCategoriesDivUl">
//                             <li className="page_headerRight_divMenuCategoriesDivUlLI">Clothing & Accessories</li>
//                             <li className="page_headerRight_divMenuCategoriesDivUlLI">Computers & Electronics</li>
//                             <li className="page_headerRight_divMenuCategoriesDivUlLI">Home & Garden</li>
//                             <li className="page_headerRight_divMenuCategoriesDivUlLI">Sports & Outdoors</li>
//                             <li className="page_headerRight_divMenuCategoriesDivUlLI">Toys & Games</li>
//                             <li className="page_headerRight_divMenuCategoriesDivUlLI">Kitchen & Dining</li>
//                             <li className="page_headerRight_divMenuCategoriesDivUlLI">Other Categories</li>
//                         </ul>
//                     </div>
//                     <div className="page_headerRight_divMenuStoresDiv mobileMenuList">
//                         <p className="page_headerRight_divMenuStoresDivP">Stores &#x025BF;</p>
//                         <ul className="page_headerRight_divMenuStoresDivUl">
//                             <li className="page_headerRight_divMenuStoresDivUlLI">Amazon</li>
//                             <li className="page_headerRight_divMenuStoresDivUlLI">Walmart</li>
//                             <li className="page_headerRight_divMenuStoresDivUlLI">Best Buy</li>
//                             <li className="page_headerRight_divMenuStoresDivUlLI">Woot</li>
//                             <li className="page_headerRight_divMenuStoresDivUlLI">eBay</li>
//                             <li className="page_headerRight_divMenuStoresDivUlLI">Macy's</li>
//                             <li className="page_headerRight_divMenuStoresDivUlLI">Other Stores</li>
//                         </ul>
//                     </div>
//                 </div>
//             </div>
//         </header>
//     );
// }




function Footer() {
    return (
        <footer className="page_footer">
            <div className="page_footerTop_Div">
                <span className="page_footerTop_DivTerms">
                    <a href="local:3000" target="_self">Terms & Conditions</a>
                </span> |
                <span className="page_footerTop_DivPrivacy">
                    <a href="local:3003" target="_parent">Privacy Policy</a>
                </span> |
                <span className="page_footerTop_DivDisclosure">
                    <a href="local:8000" target="_self">Disclosure</a>
                </span>
            </div>
            <div className="page_footerBottom_Div">Copyright © Shusank Tech 2024. All rights reserved.</div>
        </footer>
    );
}

function TitelAndSearchBar() {
    const handleSearch = (event) => {
        event.preventDefault();

        const searchTerm = document.querySelector('.page_titelSearchBarFormSearchBar').value.trim().toLowerCase();
        const allProdectListBoxChild = document.querySelectorAll('.page_ProdectListBoxChild');
        const pageNumberBoxParent = document.querySelector('.PageNumberBoxParent');


        allProdectListBoxChild.forEach(child => {
            const description = child.querySelector('.page_ProdectListBoxChildDetails').textContent.toLowerCase();
            if (description.includes(searchTerm)) {
                child.style.display = 'flex';
                pageNumberBoxParent.style.display = 'none';

            } else {
                child.style.display = 'none';
            }
        });
    };

    return (
        <div className="page_titelSearchBar">
            <h1 className="page_titelSearchBar_titel">Popular Steals</h1>
            <form className="page_titelSearchBarForm" onSubmit={handleSearch}>
                <input placeholder="Search deals" className="page_titelSearchBarFormSearchBar" />
                <span type="submit" onClick={handleSearch} className="page_titelSearchBarFormSearchButton">&#128269;</span>
            </form>
        </div>
    );
}


function PageNumber() {
    return (
        <div className="PageNumberBoxParent">
            <div className="PageNumberBoxchildParent">
                {[...Array(10).keys()].map(num => (
                    <span key={num} className={`PageNumberBoxchild PageNumberBoxchild0${num + 1}`}>{num + 1}</span>
                ))}
            </div>
        </div>
    );
}


export { Header, Footer, TitelAndSearchBar, PageNumber };
