import { Link } from "react-router-dom";
import { FlashChangeContainers, BtnList, Btn, List, Item } from './flash/ChangeContainers';
import { BiggerTitle4, SmallCursiveTitle } from "./elements/Titles";
import { PageItem } from "./elements/Items";

function OurMenu() {


    return (
        <section className='our-menu container-2 mt-6'>

            <BiggerTitle4 restClassName="our-menu-title text-orange text-center">
                OUR MENU
            </BiggerTitle4>

            <FlashChangeContainers id="myCon" restClassName="mt-5">

                <BtnList restClassName="border-bottom-light-blue flex-column flex-lg-row justify-content-center align-items-center align-content-center">
                    <Btn restClassName="btn-2 me-lg-5 mt-3 mt-lg-0">BRUNCH</Btn>
                    <Btn restClassName="btn-2 me-lg-5 mt-3 mt-lg-0">LUNCH MENU</Btn>
                    <Btn restClassName="btn-2 me-lg-5 mt-3 mt-lg-0">DINNER MENU</Btn>
                    <Btn restClassName="btn-2 me-lg-5 mt-3 mt-lg-0">KID'S MENU</Btn>
                    <Btn restClassName="btn-2 me-lg-5 mt-3 mt-lg-0">DESSERTS</Btn>
                </BtnList>

                <List restClassName="our-menu-list mt-5">

                    <Item restClassName="our-menu-item">

                        <div className="our-menu-inner-list row w-100 gx-0 mx-auto">

                            <div className="our-menu-inner-item col-12 col-lg mt-3 mt-lg-0 me-lg-2">
                                
                                <div className="our-menu-inner-box border-light-blue px-5 pt-3 pb-5">

                                    <SmallCursiveTitle restClassName="our-menu-inner-main-title">
                                        Entrees
                                    </SmallCursiveTitle>

                                    <PageItem itemTitle="Wood Oven Roasted Chicken" itemText="Refried beans, rice, grilled chicken, sour cream, salsa verde, cheese, pico." itemPrice="$15"/>
                                    <PageItem itemTitle="Wood Oven Roasted Chicken" itemText="Refried beans, rice, grilled chicken, sour cream, salsa verde, cheese, pico." itemPrice="$15"/>
                                    <PageItem itemTitle="Wood Oven Roasted Chicken" itemText="Refried beans, rice, grilled chicken, sour cream, salsa verde, cheese, pico." itemPrice="$15"/>

                                </div>

                                <div className="our-menu-inner-box bg-light-blue px-5 pt-3 pb-5 mt-4">
                                    
                                    <SmallCursiveTitle restClassName="our-menu-inner-main-title">
                                        Organic Pastas
                                    </SmallCursiveTitle>

                                    <PageItem itemTitle="Wood Oven Roasted Chicken" itemText="Refried beans, rice, grilled chicken, sour cream, salsa verde, cheese, pico." itemPrice="$15"/>
                                    <PageItem itemTitle="Wood Oven Roasted Chicken" itemText="Refried beans, rice, grilled chicken, sour cream, salsa verde, cheese, pico." itemPrice="$15"/>
                                    <PageItem itemTitle="Wood Oven Roasted Chicken" itemText="Refried beans, rice, grilled chicken, sour cream, salsa verde, cheese, pico." itemPrice="$15"/>
                                    <PageItem itemTitle="Wood Oven Roasted Chicken" itemText="Refried beans, rice, grilled chicken, sour cream, salsa verde, cheese, pico." itemPrice="$15"/>
                                    <PageItem itemTitle="Wood Oven Roasted Chicken" itemText="Refried beans, rice, grilled chicken, sour cream, salsa verde, cheese, pico." itemPrice="$15"/>
                                    <PageItem itemTitle="Wood Oven Roasted Chicken" itemText="Refried beans, rice, grilled chicken, sour cream, salsa verde, cheese, pico." itemPrice="$15"/>

                                </div>

                            </div>

                            <div className="our-menu-inner-item col-12 col-lg mt-3 mt-lg-0 ms-lg-2">

                                <div className="our-menu-inner-box bg-light-blue px-5 pt-3 pb-5">
                                    
                                    <SmallCursiveTitle restClassName="our-menu-inner-main-title">
                                        Pizza
                                    </SmallCursiveTitle>

                                    <PageItem itemTitle="Wood Oven Roasted Chicken" itemText="Refried beans, rice, grilled chicken, sour cream, salsa verde, cheese, pico." itemPrice="$15"/>
                                    <PageItem itemTitle="Wood Oven Roasted Chicken" itemText="Refried beans, rice, grilled chicken, sour cream, salsa verde, cheese, pico." itemPrice="$15"/>
                                    <PageItem itemTitle="Wood Oven Roasted Chicken" itemText="Refried beans, rice, grilled chicken, sour cream, salsa verde, cheese, pico." itemPrice="$15"/>
                                    <PageItem itemTitle="Wood Oven Roasted Chicken" itemText="Refried beans, rice, grilled chicken, sour cream, salsa verde, cheese, pico." itemPrice="$15"/>
                                    <PageItem itemTitle="Wood Oven Roasted Chicken" itemText="Refried beans, rice, grilled chicken, sour cream, salsa verde, cheese, pico." itemPrice="$15"/>

                                </div>

                                <div className="our-menu-inner-box border-light-blue px-5 pt-3 pb-5 mt-4">

                                    <SmallCursiveTitle restClassName="our-menu-inner-main-title">
                                        Vegetables
                                    </SmallCursiveTitle>

                                    <PageItem itemTitle="Wood Oven Roasted Chicken" itemText="Refried beans, rice, grilled chicken, sour cream, salsa verde, cheese, pico." itemPrice="$15"/>
                                    <PageItem itemTitle="Wood Oven Roasted Chicken" itemText="Refried beans, rice, grilled chicken, sour cream, salsa verde, cheese, pico." itemPrice="$15"/>
                                    <PageItem itemTitle="Wood Oven Roasted Chicken" itemText="Refried beans, rice, grilled chicken, sour cream, salsa verde, cheese, pico." itemPrice="$15"/>
                                    <PageItem itemTitle="Wood Oven Roasted Chicken" itemText="Refried beans, rice, grilled chicken, sour cream, salsa verde, cheese, pico." itemPrice="$15"/>

                                </div>

                            </div>

                        </div>

                    </Item>

                    <Item restClassName="our-menu-item">

                    <div className="our-menu-inner-list row w-100 gx-0 mx-auto">

                        <div className="our-menu-inner-item col-12 col-lg mt-3 mt-lg-0 me-lg-2">
                            
                            <div className="our-menu-inner-box border-light-blue px-5 pt-3 pb-5">

                                <SmallCursiveTitle restClassName="our-menu-inner-main-title">
                                    Drinks
                                </SmallCursiveTitle>

                                <PageItem itemTitle="Wood Oven Roasted Chicken" itemText="Refried beans, rice, grilled chicken, sour cream, salsa verde, cheese, pico." itemPrice="$15"/>
                                <PageItem itemTitle="Wood Oven Roasted Chicken" itemText="Refried beans, rice, grilled chicken, sour cream, salsa verde, cheese, pico." itemPrice="$15"/>
                                <PageItem itemTitle="Wood Oven Roasted Chicken" itemText="Refried beans, rice, grilled chicken, sour cream, salsa verde, cheese, pico." itemPrice="$15"/>

                            </div>

                            <div className="our-menu-inner-box bg-light-blue px-5 pt-3 pb-5 mt-4">
                                
                                <SmallCursiveTitle restClassName="our-menu-inner-main-title">
                                    Organic Pastas
                                </SmallCursiveTitle>

                                <PageItem itemTitle="Wood Oven Roasted Chicken" itemText="Refried beans, rice, grilled chicken, sour cream, salsa verde, cheese, pico." itemPrice="$15"/>
                                <PageItem itemTitle="Wood Oven Roasted Chicken" itemText="Refried beans, rice, grilled chicken, sour cream, salsa verde, cheese, pico." itemPrice="$15"/>
                                <PageItem itemTitle="Wood Oven Roasted Chicken" itemText="Refried beans, rice, grilled chicken, sour cream, salsa verde, cheese, pico." itemPrice="$15"/>
                                <PageItem itemTitle="Wood Oven Roasted Chicken" itemText="Refried beans, rice, grilled chicken, sour cream, salsa verde, cheese, pico." itemPrice="$15"/>
                                <PageItem itemTitle="Wood Oven Roasted Chicken" itemText="Refried beans, rice, grilled chicken, sour cream, salsa verde, cheese, pico." itemPrice="$15"/>
                                <PageItem itemTitle="Wood Oven Roasted Chicken" itemText="Refried beans, rice, grilled chicken, sour cream, salsa verde, cheese, pico." itemPrice="$15"/>

                            </div>

                        </div>

                        <div className="our-menu-inner-item col-12 col-lg mt-3 mt-lg-0 ms-lg-2">

                            <div className="our-menu-inner-box bg-light-blue px-5 pt-3 pb-5">
                                
                                <SmallCursiveTitle restClassName="our-menu-inner-main-title">
                                    Pizza
                                </SmallCursiveTitle>

                                <PageItem itemTitle="Wood Oven Roasted Chicken" itemText="Refried beans, rice, grilled chicken, sour cream, salsa verde, cheese, pico." itemPrice="$15"/>
                                <PageItem itemTitle="Wood Oven Roasted Chicken" itemText="Refried beans, rice, grilled chicken, sour cream, salsa verde, cheese, pico." itemPrice="$15"/>
                                <PageItem itemTitle="Wood Oven Roasted Chicken" itemText="Refried beans, rice, grilled chicken, sour cream, salsa verde, cheese, pico." itemPrice="$15"/>
                                <PageItem itemTitle="Wood Oven Roasted Chicken" itemText="Refried beans, rice, grilled chicken, sour cream, salsa verde, cheese, pico." itemPrice="$15"/>
                                <PageItem itemTitle="Wood Oven Roasted Chicken" itemText="Refried beans, rice, grilled chicken, sour cream, salsa verde, cheese, pico." itemPrice="$15"/>

                            </div>

                            <div className="our-menu-inner-box border-light-blue px-5 pt-3 pb-5 mt-4">

                                <SmallCursiveTitle restClassName="our-menu-inner-main-title">
                                    Vegetables
                                </SmallCursiveTitle>

                                <PageItem itemTitle="Wood Oven Roasted Chicken" itemText="Refried beans, rice, grilled chicken, sour cream, salsa verde, cheese, pico." itemPrice="$15"/>
                                <PageItem itemTitle="Wood Oven Roasted Chicken" itemText="Refried beans, rice, grilled chicken, sour cream, salsa verde, cheese, pico." itemPrice="$15"/>
                                <PageItem itemTitle="Wood Oven Roasted Chicken" itemText="Refried beans, rice, grilled chicken, sour cream, salsa verde, cheese, pico." itemPrice="$15"/>
                                <PageItem itemTitle="Wood Oven Roasted Chicken" itemText="Refried beans, rice, grilled chicken, sour cream, salsa verde, cheese, pico." itemPrice="$15"/>

                            </div>

                        </div>

                    </div>

                    </Item>

                    <Item restClassName="our-menu-item">

                        <div className="our-menu-inner-list row w-100 gx-0 mx-auto">

                            <div className="our-menu-inner-item col-12 col-lg mt-3 mt-lg-0 me-lg-2">
                                
                                <div className="our-menu-inner-box border-light-blue px-5 pt-3 pb-5">

                                    <SmallCursiveTitle restClassName="our-menu-inner-main-title">
                                        Salads
                                    </SmallCursiveTitle>

                                    <PageItem itemTitle="Wood Oven Roasted Chicken" itemText="Refried beans, rice, grilled chicken, sour cream, salsa verde, cheese, pico." itemPrice="$15"/>
                                    <PageItem itemTitle="Wood Oven Roasted Chicken" itemText="Refried beans, rice, grilled chicken, sour cream, salsa verde, cheese, pico." itemPrice="$15"/>
                                    <PageItem itemTitle="Wood Oven Roasted Chicken" itemText="Refried beans, rice, grilled chicken, sour cream, salsa verde, cheese, pico." itemPrice="$15"/>

                                </div>

                                <div className="our-menu-inner-box bg-light-blue px-5 pt-3 pb-5 mt-4">
                                    
                                    <SmallCursiveTitle restClassName="our-menu-inner-main-title">
                                        Organic Pastas
                                    </SmallCursiveTitle>

                                    <PageItem itemTitle="Wood Oven Roasted Chicken" itemText="Refried beans, rice, grilled chicken, sour cream, salsa verde, cheese, pico." itemPrice="$15"/>
                                    <PageItem itemTitle="Wood Oven Roasted Chicken" itemText="Refried beans, rice, grilled chicken, sour cream, salsa verde, cheese, pico." itemPrice="$15"/>
                                    <PageItem itemTitle="Wood Oven Roasted Chicken" itemText="Refried beans, rice, grilled chicken, sour cream, salsa verde, cheese, pico." itemPrice="$15"/>
                                    <PageItem itemTitle="Wood Oven Roasted Chicken" itemText="Refried beans, rice, grilled chicken, sour cream, salsa verde, cheese, pico." itemPrice="$15"/>
                                    <PageItem itemTitle="Wood Oven Roasted Chicken" itemText="Refried beans, rice, grilled chicken, sour cream, salsa verde, cheese, pico." itemPrice="$15"/>
                                    <PageItem itemTitle="Wood Oven Roasted Chicken" itemText="Refried beans, rice, grilled chicken, sour cream, salsa verde, cheese, pico." itemPrice="$15"/>

                                </div>

                            </div>

                            <div className="our-menu-inner-item col-12 col-lg mt-3 mt-lg-0 ms-lg-2">

                                <div className="our-menu-inner-box bg-light-blue px-5 pt-3 pb-5">
                                    
                                    <SmallCursiveTitle restClassName="our-menu-inner-main-title">
                                        Pizza
                                    </SmallCursiveTitle>

                                    <PageItem itemTitle="Wood Oven Roasted Chicken" itemText="Refried beans, rice, grilled chicken, sour cream, salsa verde, cheese, pico." itemPrice="$15"/>
                                    <PageItem itemTitle="Wood Oven Roasted Chicken" itemText="Refried beans, rice, grilled chicken, sour cream, salsa verde, cheese, pico." itemPrice="$15"/>
                                    <PageItem itemTitle="Wood Oven Roasted Chicken" itemText="Refried beans, rice, grilled chicken, sour cream, salsa verde, cheese, pico." itemPrice="$15"/>
                                    <PageItem itemTitle="Wood Oven Roasted Chicken" itemText="Refried beans, rice, grilled chicken, sour cream, salsa verde, cheese, pico." itemPrice="$15"/>
                                    <PageItem itemTitle="Wood Oven Roasted Chicken" itemText="Refried beans, rice, grilled chicken, sour cream, salsa verde, cheese, pico." itemPrice="$15"/>

                                </div>

                                <div className="our-menu-inner-box border-light-blue px-5 pt-3 pb-5 mt-4">

                                    <SmallCursiveTitle restClassName="our-menu-inner-main-title">
                                        Vegetables
                                    </SmallCursiveTitle>

                                    <PageItem itemTitle="Wood Oven Roasted Chicken" itemText="Refried beans, rice, grilled chicken, sour cream, salsa verde, cheese, pico." itemPrice="$15"/>
                                    <PageItem itemTitle="Wood Oven Roasted Chicken" itemText="Refried beans, rice, grilled chicken, sour cream, salsa verde, cheese, pico." itemPrice="$15"/>
                                    <PageItem itemTitle="Wood Oven Roasted Chicken" itemText="Refried beans, rice, grilled chicken, sour cream, salsa verde, cheese, pico." itemPrice="$15"/>
                                    <PageItem itemTitle="Wood Oven Roasted Chicken" itemText="Refried beans, rice, grilled chicken, sour cream, salsa verde, cheese, pico." itemPrice="$15"/>

                                </div>

                            </div>

                        </div>

                    </Item>

                    <Item restClassName="our-menu-item">

                        <div className="our-menu-inner-list row w-100 gx-0 mx-auto">

                            <div className="our-menu-inner-item col-12 col-lg mt-3 mt-lg-0 me-lg-2">
                                
                                <div className="our-menu-inner-box border-light-blue px-5 pt-3 pb-5">

                                    <SmallCursiveTitle restClassName="our-menu-inner-main-title">
                                        Dishes
                                    </SmallCursiveTitle>

                                    <PageItem itemTitle="Wood Oven Roasted Chicken" itemText="Refried beans, rice, grilled chicken, sour cream, salsa verde, cheese, pico." itemPrice="$15"/>
                                    <PageItem itemTitle="Wood Oven Roasted Chicken" itemText="Refried beans, rice, grilled chicken, sour cream, salsa verde, cheese, pico." itemPrice="$15"/>
                                    <PageItem itemTitle="Wood Oven Roasted Chicken" itemText="Refried beans, rice, grilled chicken, sour cream, salsa verde, cheese, pico." itemPrice="$15"/>

                                </div>

                                <div className="our-menu-inner-box bg-light-blue px-5 pt-3 pb-5 mt-4">
                                    
                                    <SmallCursiveTitle restClassName="our-menu-inner-main-title">
                                        Organic Pastas
                                    </SmallCursiveTitle>

                                    <PageItem itemTitle="Wood Oven Roasted Chicken" itemText="Refried beans, rice, grilled chicken, sour cream, salsa verde, cheese, pico." itemPrice="$15"/>
                                    <PageItem itemTitle="Wood Oven Roasted Chicken" itemText="Refried beans, rice, grilled chicken, sour cream, salsa verde, cheese, pico." itemPrice="$15"/>
                                    <PageItem itemTitle="Wood Oven Roasted Chicken" itemText="Refried beans, rice, grilled chicken, sour cream, salsa verde, cheese, pico." itemPrice="$15"/>
                                    <PageItem itemTitle="Wood Oven Roasted Chicken" itemText="Refried beans, rice, grilled chicken, sour cream, salsa verde, cheese, pico." itemPrice="$15"/>
                                    <PageItem itemTitle="Wood Oven Roasted Chicken" itemText="Refried beans, rice, grilled chicken, sour cream, salsa verde, cheese, pico." itemPrice="$15"/>
                                    <PageItem itemTitle="Wood Oven Roasted Chicken" itemText="Refried beans, rice, grilled chicken, sour cream, salsa verde, cheese, pico." itemPrice="$15"/>

                                </div>

                            </div>

                            <div className="our-menu-inner-item col-12 col-lg mt-3 mt-lg-0 ms-lg-2">

                                <div className="our-menu-inner-box bg-light-blue px-5 pt-3 pb-5">
                                    
                                    <SmallCursiveTitle restClassName="our-menu-inner-main-title">
                                        Pizza
                                    </SmallCursiveTitle>

                                    <PageItem itemTitle="Wood Oven Roasted Chicken" itemText="Refried beans, rice, grilled chicken, sour cream, salsa verde, cheese, pico." itemPrice="$15"/>
                                    <PageItem itemTitle="Wood Oven Roasted Chicken" itemText="Refried beans, rice, grilled chicken, sour cream, salsa verde, cheese, pico." itemPrice="$15"/>
                                    <PageItem itemTitle="Wood Oven Roasted Chicken" itemText="Refried beans, rice, grilled chicken, sour cream, salsa verde, cheese, pico." itemPrice="$15"/>
                                    <PageItem itemTitle="Wood Oven Roasted Chicken" itemText="Refried beans, rice, grilled chicken, sour cream, salsa verde, cheese, pico." itemPrice="$15"/>
                                    <PageItem itemTitle="Wood Oven Roasted Chicken" itemText="Refried beans, rice, grilled chicken, sour cream, salsa verde, cheese, pico." itemPrice="$15"/>

                                </div>

                                <div className="our-menu-inner-box border-light-blue px-5 pt-3 pb-5 mt-4">

                                    <SmallCursiveTitle restClassName="our-menu-inner-main-title">
                                        Vegetables
                                    </SmallCursiveTitle>

                                    <PageItem itemTitle="Wood Oven Roasted Chicken" itemText="Refried beans, rice, grilled chicken, sour cream, salsa verde, cheese, pico." itemPrice="$15"/>
                                    <PageItem itemTitle="Wood Oven Roasted Chicken" itemText="Refried beans, rice, grilled chicken, sour cream, salsa verde, cheese, pico." itemPrice="$15"/>
                                    <PageItem itemTitle="Wood Oven Roasted Chicken" itemText="Refried beans, rice, grilled chicken, sour cream, salsa verde, cheese, pico." itemPrice="$15"/>
                                    <PageItem itemTitle="Wood Oven Roasted Chicken" itemText="Refried beans, rice, grilled chicken, sour cream, salsa verde, cheese, pico." itemPrice="$15"/>

                                </div>

                            </div>

                        </div>

                    </Item>

                    <Item restClassName="our-menu-item">

                        <div className="our-menu-inner-list row w-100 gx-0 mx-auto">

                            <div className="our-menu-inner-item col-12 col-lg mt-3 mt-lg-0 me-lg-2">
                                
                                <div className="our-menu-inner-box border-light-blue px-5 pt-3 pb-5">

                                    <SmallCursiveTitle restClassName="our-menu-inner-main-title">
                                        Fruits
                                    </SmallCursiveTitle>

                                    <PageItem itemTitle="Wood Oven Roasted Chicken" itemText="Refried beans, rice, grilled chicken, sour cream, salsa verde, cheese, pico." itemPrice="$15"/>
                                    <PageItem itemTitle="Wood Oven Roasted Chicken" itemText="Refried beans, rice, grilled chicken, sour cream, salsa verde, cheese, pico." itemPrice="$15"/>
                                    <PageItem itemTitle="Wood Oven Roasted Chicken" itemText="Refried beans, rice, grilled chicken, sour cream, salsa verde, cheese, pico." itemPrice="$15"/>

                                </div>

                                <div className="our-menu-inner-box bg-light-blue px-5 pt-3 pb-5 mt-4">
                                    
                                    <SmallCursiveTitle restClassName="our-menu-inner-main-title">
                                        Organic Pastas
                                    </SmallCursiveTitle>

                                    <PageItem itemTitle="Wood Oven Roasted Chicken" itemText="Refried beans, rice, grilled chicken, sour cream, salsa verde, cheese, pico." itemPrice="$15"/>
                                    <PageItem itemTitle="Wood Oven Roasted Chicken" itemText="Refried beans, rice, grilled chicken, sour cream, salsa verde, cheese, pico." itemPrice="$15"/>
                                    <PageItem itemTitle="Wood Oven Roasted Chicken" itemText="Refried beans, rice, grilled chicken, sour cream, salsa verde, cheese, pico." itemPrice="$15"/>
                                    <PageItem itemTitle="Wood Oven Roasted Chicken" itemText="Refried beans, rice, grilled chicken, sour cream, salsa verde, cheese, pico." itemPrice="$15"/>
                                    <PageItem itemTitle="Wood Oven Roasted Chicken" itemText="Refried beans, rice, grilled chicken, sour cream, salsa verde, cheese, pico." itemPrice="$15"/>
                                    <PageItem itemTitle="Wood Oven Roasted Chicken" itemText="Refried beans, rice, grilled chicken, sour cream, salsa verde, cheese, pico." itemPrice="$15"/>

                                </div>

                            </div>

                            <div className="our-menu-inner-item col-12 col-lg mt-3 mt-lg-0 ms-lg-2">

                                <div className="our-menu-inner-box bg-light-blue px-5 pt-3 pb-5">
                                    
                                    <SmallCursiveTitle restClassName="our-menu-inner-main-title">
                                        Pizza
                                    </SmallCursiveTitle>

                                    <PageItem itemTitle="Wood Oven Roasted Chicken" itemText="Refried beans, rice, grilled chicken, sour cream, salsa verde, cheese, pico." itemPrice="$15"/>
                                    <PageItem itemTitle="Wood Oven Roasted Chicken" itemText="Refried beans, rice, grilled chicken, sour cream, salsa verde, cheese, pico." itemPrice="$15"/>
                                    <PageItem itemTitle="Wood Oven Roasted Chicken" itemText="Refried beans, rice, grilled chicken, sour cream, salsa verde, cheese, pico." itemPrice="$15"/>
                                    <PageItem itemTitle="Wood Oven Roasted Chicken" itemText="Refried beans, rice, grilled chicken, sour cream, salsa verde, cheese, pico." itemPrice="$15"/>
                                    <PageItem itemTitle="Wood Oven Roasted Chicken" itemText="Refried beans, rice, grilled chicken, sour cream, salsa verde, cheese, pico." itemPrice="$15"/>

                                </div>

                                <div className="our-menu-inner-box border-light-blue px-5 pt-3 pb-5 mt-4">

                                    <SmallCursiveTitle restClassName="our-menu-inner-main-title">
                                        Vegetables
                                    </SmallCursiveTitle>

                                    <PageItem itemTitle="Wood Oven Roasted Chicken" itemText="Refried beans, rice, grilled chicken, sour cream, salsa verde, cheese, pico." itemPrice="$15"/>
                                    <PageItem itemTitle="Wood Oven Roasted Chicken" itemText="Refried beans, rice, grilled chicken, sour cream, salsa verde, cheese, pico." itemPrice="$15"/>
                                    <PageItem itemTitle="Wood Oven Roasted Chicken" itemText="Refried beans, rice, grilled chicken, sour cream, salsa verde, cheese, pico." itemPrice="$15"/>
                                    <PageItem itemTitle="Wood Oven Roasted Chicken" itemText="Refried beans, rice, grilled chicken, sour cream, salsa verde, cheese, pico." itemPrice="$15"/>

                                </div>

                            </div>

                        </div>

                    </Item>
                    
                </List>

            </FlashChangeContainers>

        </section>
    );
}
  
export default OurMenu;