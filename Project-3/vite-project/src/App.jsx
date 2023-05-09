import "./App.css";

import AOS from "aos";
import "aos/dist/aos.css";

// images

import group190 from "./image/group 190.png";
import group13 from "./image/group 13.png";
import DisableElevation from "./components/Btm/Btn";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Switcher from "./components/Switcher/Switcher";
import trianglecopy6 from "./image/Triangle Copy 6.png";
import amico from "./image/amico.png";
import amico2 from "./image/amico2.png";
import amico3 from "./image/amico3.png";
import amico4 from "./image/amico4.png";
import menu from "./image/menu.png";
import ellipse2 from "./image/ellipse 2.png";

import icon from "./image/icon.png";
import screen from "./image/screen.png";
import avator from "./image/avator.png";
import avator1 from "./image/avator (1).png";
import avator2 from "./image/avator (2).png";
import avator3 from "./image/avator (3).png";
import imagebg from "./image/image bg.png";
import Card1 from "./components/Card-1/Card-1";
import Swiper1 from "./components/Swiper/Swiper";
import { linkClasses } from "@mui/material";

// images

// Material UI

import * as React from "react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import TemporaryDrawer from "./components/Drawer/Drawer";

// Material UI

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  const [t, i18n] = useTranslation("");

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <div className="dark:bg-[gray]">
      <header className="container1 dark:bg-[black] dark:text-white">
        <div className="container11">
          <nav
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
            className="flex items-center justify-between py-[19px] "
          >
            <div className="flex items-center gap-[16px]">
              <img src={group190} alt="" />
              <h1 className="font-[700] text-[30px]">{t("Product")}</h1>
            </div>

            <div className="flex items-center gap-[24px] lg:hidden">
              <ul className="flex gap-[24px]">
                <li>{t("Product")}</li>
                <li>{t("Customers")}</li>
                <li>{t("Pricing")}</li>
                <li>{t("Resources")}</li>
              </ul>

              <div className="flex items-center gap-[7.5px] p-[10px]">
                <button onClick={() => changeLanguage("en")}>En</button>
                <button onClick={() => changeLanguage("ru")}>Ru</button>
              </div>

              <DisableElevation
                className="p-[10px_23px] bg-[] border-[1px] border-solid border-[] rounded-[4px] font-[600]"
                text={t("Sign In")}
              />
              <DisableElevation
                className="p-[10px_23px] bg-[#02897A] border-[1px] border-solid border-[] rounded-[4px] font-[600] text-white"
                text={t("Sign Up")}
              />

              <Switcher />
            </div>

            <div className="hidden lg:block">
              <TemporaryDrawer img={menu} />
            </div>
          </nav>
          <div className="flex items-center justify-between py-[25px] lg:flex-wrap lg:justify-center lg:gap-[25px]">
            <div
              data-aos="fade-up"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              className="max-w-[458px] flex flex-col gap-[45px] lg:order-1"
            >
              <div className="flex flex-col gap-[16px]">
                <h1 className="font-[700] text-[40px] lg:text-center dark:text-white text-[#22343D] leading-[60px]">
                  {t("Work at the speed of thought")}
                </h1>
                <p className="font-[400] text-[18px] lg:text-center dark:text-white text-[#22343D] leading-[28px]">
                  {t(
                    "Tools, tutorials, design and innovation experts, all in one place! The most intuitive way to imagine your next user experience."
                  )}
                </p>
              </div>
              <div className="flex items-center lg:justify-center">
                <DisableElevation
                  className="p-[10px_23px] bg-[#02897A]  rounded-[4px] font-[600] text-white"
                  text={t("Get started")}
                />
                <DisableElevation
                  className="p-[10px_23px] bg-[none] rounded-[4px] font-[600] text-[#02897A ]"
                  img={trianglecopy6}
                  text={t("Watch the Video")}
                />
              </div>
            </div>
            <img
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              src={amico}
              alt=""
            />
          </div>
        </div>
      </header>

      <setion className="container1 dark:black">
        <div className="container11 flex flex-col gap-[66px] p-[114px_0_90px_0] ">
          <h1
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="dark:text-white font-[700] text-center mx-auto text-[32px] text-[#22343D] leading-[48px] max-w-[510px]"
          >
            {t("Product  was Built Specifically for You")}
          </h1>
          <div className="flex flex-col gap-[34px] lg:justify-center">
            <div className="flex justify-between lg:flex-col lg:gap-[50px]">
              <Card1
                img={icon}
                h1={t("First click tests")}
                p={t("While most people enjoy casino gambling,")}
              />
              <Card1
                img={icon}
                h1={t("Design surveys")}
                p={t("Sports betting, lottery and bingo playing for the fun")}
              />
              <Card1
                img={icon}
                h1={t("Preference tests")}
                p={t("The Myspace page defines the individual.")}
              />
              <Card1
                img={icon}
                h1={t("Five second tests")}
                p={t(
                  "Personal choices and the overall personality of the person. "
                )}
              />
            </div>
            <DisableElevation
              className="p-[10px_23px] w-max mx-auto bg-[#02897A] rounded-[4px] font-[600] text-white"
              text={t("SIGN UP NOW")}
            />
          </div>
        </div>
      </setion>

      <section className="container1 dark:bg-[black]">
        <div className="container11 flex flex-col gap-[150px] py-[150px]">
          <div className="flex items-center justify-between lg:flex-wrap lg:justify-center">
            <div
              data-aos="fade-up"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              className="flex flex-col gap-[30px] max-w-[486px] lg:order-1"
            >
              <div className="flex flex-col gap-[23px]">
                <div className="flex flex-col gap-[8px]">
                  <h3 className="font-[600] text-[16px] dark:text-white text-[#22343D]">
                    {t("Effortless Validation for")}
                  </h3>

                  <h1 className="font-[700] text-[32px] dark:text-white text-[#22343D]">
                    {t("Management")}
                  </h1>
                </div>
                <span className="font-[400] text-[16px] dark:text-white text-[#22343D] leading-[26px]">
                  {t(
                    "The Myspace page defines the individual, his or her characteristics, traits, personal choices and the overall personality of the person. "
                  )}
                </span>
              </div>
              <div className="flex flex-col gap-[25px]">
                <div className="flex flex-col gap-[12px]">
                  <p className="font-[600] text-[16px] dark:text-white text-[#22343D] leading-[26px]">
                    {t("Accessory makers")}
                  </p>
                  <span className="font-[400] text-[16px] dark:text-white text-[#22343D] leading-[26px]">
                    {t(
                      "While most people enjoy casino gambling, sports betting, lottery and bingo playing for the fun"
                    )}
                  </span>
                </div>

                <div className="flex flex-col gap-[12px]">
                  <p className="font-[600] text-[16px] dark:text-white text-[#22343D] leading-[26px]">
                    {t("Alterationists")}
                  </p>
                  <span className="font-[400] text-[16px] dark:text-white text-[#22343D] leading-[26px]">
                    {t(
                      "If you are looking for a new way to promote your business that won’t cost you more money, "
                    )}
                  </span>
                </div>
              </div>
            </div>
            <img
              data-aos="fade-righ"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              src={amico2}
              alt=""
            />
          </div>

          <div className="flex items-center justify-between lg:flex-wrap lg:justify-center">
            <img
              data-aos="fade-down"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              src={amico3}
              alt=""
            />
            <div
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              className="flex flex-col gap-[30px] max-w-[486px]"
            >
              <div className="flex flex-col gap-[23px]">
                <div className="flex flex-col gap-[8px]">
                  <h3 className="font-[600] text-[16px] dark:text-white text-[#22343D]">
                    {t("Easier decision making for")}
                  </h3>

                  <h1 className="font-[700] text-[32px] dark:text-white text-[#22343D]">
                    {t("Customer Support")}
                  </h1>
                </div>
                <span className="font-[400] text-[16px] dark:text-white text-[#22343D] leading-[26px]">
                  {t(
                    "The Myspace page defines the individual, his or her characteristics, traits, personal choices and the overall personality of the person. "
                  )}
                </span>
              </div>
              <div className="flex flex-col gap-[25px]">
                <div className="flex items-center gap-[30px]">
                  <img src={group13} alt="" />
                  <span className="font-[400] dark:text-white text-[16px] text-[#22343D] leading-[26px]">
                    {t(
                      "We will only switch you to energy companies that we trust and will treat you right "
                    )}
                  </span>
                </div>

                <div className="flex items-center gap-[30px]">
                  <img src={group13} alt="" />
                  <span className="font-[400] dark:text-white text-[16px] text-[#22343D] leading-[26px]">
                    {t(
                      "We will only switch you to energy companies that we trust and will treat you right "
                    )}
                  </span>
                </div>

                <div className="flex items-center gap-[30px]">
                  <img src={group13} alt="" />
                  <span className="font-[400] dark:text-white text-[16px] text-[#22343D] leading-[26px]">
                    {t(
                      "We will only switch you to energy companies that we trust and will treat you right "
                    )}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between lg:flex-wrap lg:justify-center">
            <div
              data-aos="fade-up"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              className="flex flex-col gap-[30px] max-w-[486px] lg:order-1"
            >
              <div className="flex flex-col gap-[23px]">
                <div className="flex flex-col gap-[8px]">
                  <h3 className="font-[600] text-[16px] dark:text-white text-[#22343D]">
                    {t("Optimisation for")}
                  </h3>

                  <h1 className="font-[700] text-[32px] dark:text-white text-[#22343D]">
                    {t("Collaborative")}
                  </h1>
                </div>
                <span className="font-[400] text-[16px] dark:text-white text-[#22343D] leading-[26px]">
                  {t(
                    "Few would argue that, despite the advancements of feminism over the past three decades, women still face a double standard when it comes to their behavior. "
                  )}
                </span>
              </div>
              <div className="flex flex-col gap-[25px]">
                <div className="flex flex-col gap-[12px]">
                  <p className="font-[600] text-[16px] dark:text-white text-[#22343D] leading-[26px]">
                    {t("Accessory makers")}
                  </p>
                  <span className="font-[400] dark:text-white text-[16px] text-[#22343D] leading-[26px]">
                    {t(
                      "While most people enjoy casino gambling, sports betting, lottery and bingo playing for the fun"
                    )}
                  </span>
                </div>

                <div className="flex flex-col gap-[12px]">
                  <p className="font-[600] text-[16px] dark:text-white text-[#22343D] leading-[26px]">
                    {t("Alterationists")}
                  </p>
                  <span className="font-[400] text-[16px] dark:text-white text-[#22343D] leading-[26px]">
                    {t(
                      "If you are looking for a new way to promote your business that won’t cost you more money, "
                    )}
                  </span>
                </div>
              </div>
            </div>
            <img
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              src={amico4}
              alt=""
            />
          </div>
        </div>
      </section>

      <section className="container1 bg-[#EDEDED] dark:bg-[gray]">
        <div className="container11 flex flex-col gap-[32px] py-[50px]">
          <div className="flex flex-col gap-[16px]">
            <h1 className="font-[700] dark:text-white text-center text-[32px] text-[#22343D] leading-[48px]">
              {t("Quick & Easy Process")}
            </h1>
            <p className="font-[500] dark:text-white text-center mx-auto max-w-[542px] text-[16px] text-[#22343D] leading-[26px]">
              {t(
                "Do you require some help for your project: Conception workshop,   prototyping, marketing strategy, landing page, Ux/UI?"
              )}
            </p>
          </div>

          <div className="flex flex-col gap-[48px]">
            <div className="flex justify-around lg:flex-wrap lg:gap-y-[50px]">
              <div className="flex flex-col gap-[24px]">
                <div
                  data-aos="fade-up"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine"
                  className="flex items-center gap-[16px] "
                >
                  <img src={avator} alt="" />
                  <p className="p-[15px_24px] dark:text-white font-[500] text-[16px] rounded-[26.5px] shadow-[0_2px_15px_0] shadow-[#173A561A]  border-[1px] dark:border-[black]">
                    {t("I can take care of your pitch")}
                  </p>
                </div>

                <div
                  data-aos="fade-up"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine"
                  className="flex items-center gap-[16px] "
                >
                  <p className="p-[15px_24px] dark:text-white font-[500] text-[16px] rounded-[26.5px] shadow-[0_2px_15px_0] shadow-[#173A561A]  border-[1px] dark:border-[black]">
                    {t("I can take care of your pitch")}
                  </p>
                  <img src={avator2} alt="" />
                </div>
              </div>

              <div
                  data-aos="fade-up"
                  data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                className="flex flex-col gap-[24px]"
              >
                <div className="flex items-center gap-[16px] ">
                  <p className="p-[15px_24px] dark:text-white font-[500] text-[16px] rounded-[26.5px] shadow-[0_2px_15px_0] shadow-[#173A561A]  border-[1px] dark:border-[black]">
                    {t("I can take care of your pitch")}
                  </p>
                  <img src={avator1} alt="" />
                </div>

                <div
                  data-aos="fade-up"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine"
                  className="flex items-center gap-[16px] "
                >
                  <img src={avator3} alt="" />
                  <p className="p-[15px_24px] dark:text-white font-[500] text-[16px] rounded-[26.5px] shadow-[0_2px_15px_0] shadow-[#173A561A]  border-[1px] dark:border-[black]">
                    {t("I can take care of your pitch")}
                  </p>
                </div>
              </div>
            </div>
            <DisableElevation
              className="w-max mx-auto p-[10px_23px] bg-[#02897A] rounded-[4px] font-[600] text-white"
              text={t("Contact our expert")}
            />
          </div>
        </div>
      </section>

      <section className="container1 dark:bg-[black]">
        <div className="container11 py-[100px] flex flex-col gap-[33px]">
          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className="flex flex-col gap-[8px]"
          >
            <h1 className="font-[700] dark:text-white text-[34px] text-[#22343D] leading-[51px]">
              {t("Contents Strategies")}
            </h1>
            <p className="font-[500] dark:text-white text-[16px] text-[#22343D] leading-[26px]">
              {t(
                "We focus on ergonomics and meeting you where you work. It's only a keystroke away."
              )}
            </p>
          </div>
          <div>
            <Swiper1
              img={imagebg}
              p={t("By Wahid Ari |  03 March 2019")}
              h1={t("Increasing Prosperity With Positive Thinking")}
            />
          </div>
        </div>
      </section>

      <section className="container1">
        <div className="container11 flex flex-col gap-[50px] py-[75px]">
          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className="flex flex-col gap-[8px]"
          >
            <h1 className="font-[700] text-center dark:text-white  text-[34px] text-[#22343D] leading-[51px]">
              {t("Price Table")}
            </h1>
            <p className="font-[500]  text-center dark:text-white text-[16px] text-[#22343D] leading-[26px]">
              {t("We offer competitive price")}
            </p>
          </div>
          <div className="flex justify-between items-center flex-wrap lg:justify-center gap-[75px]">
            <div
              data-aos="fade-down"
              data-aos-duration="3000"
              className="p-[32px_74px] flex flex-col items-start gap-[38px] rounded-[8px] shadow-[0_2px_8px] shadow-[#00000040]"
            >
              <div className="flex flex-col gap-[16px]">
                <div>
                  <h1 className="font-[700] text-center dark:text-white text-[24px] text-[#22343D]">
                    {t("Free")}
                  </h1>
                  <p className="font-[400] text-center dark:text-white text-[16px] text-[#22343D]">
                    {t("Brief price description")}
                  </p>
                </div>

                <div className="flex items-center gap-[8px]">
                  <h1 className="font-[700] text-[76px] text-[#02897A]">0</h1>
                  <div className="flex flex-col gap-[4px]">
                    <h1 className="font-[700] text-[24px] text-[#02897A]">$</h1>
                    <p className="font-[400] text-[16px] text-[#AFAFAF]">
                      {t("Per / month")}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-[16px]">
                  <p className="text-center dark:text-white font-[500] text-[16px]">
                    {t("Only 2 Operators")}
                  </p>
                  <p className="text-center dark:text-white font-[500] text-[16px]">
                    {t("Notifications")}
                  </p>
                  <p className="text-center dark:text-white font-[500] text-[16px]">
                    {t("Landing Pages")}
                  </p>
                </div>
              </div>
              <DisableElevation
                className="w-max mx-auto p-[10px_23px] bg-[#02897A] rounded-[4px] font-[600] text-white"
                text={t("Order Now")}
              />
            </div>

            <div
              data-aos="fade-down"
              data-aos-duration="3000"
              className="p-[32px_74px] flex flex-col items-start gap-[38px] rounded-[8px] shadow-[0_2px_8px] shadow-[#00000040] bg-[#02897A] text-white"
            >
              <div className="flex flex-col gap-[16px]">
                <div>
                  <h1 className="font-[700] text-center text-[24px] text-[white]">
                    {t("Standard")}
                  </h1>
                  <p className="font-[400] text-center text-[16px] text-[white]">
                    {t("Brief price description")}
                  </p>
                </div>

                <div className="flex items-center gap-[8px]">
                  <h1 className="font-[700] text-white text-[76px]">5</h1>
                  <div className="flex flex-col gap-[4px]">
                    <h1 className="font-[700] text-[24px]] text-white">$</h1>
                    <p className="font-[400] text-[16px] text-[#AFAFAF]">
                      {t("Per / month")}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-[16px]">
                  <p className="text-center font-[500] text-[16px]">
                    {t("5+ Operators")}
                  </p>
                  <p className="text-center font-[500] text-[16px]">
                    {t("Notifications")}
                  </p>
                  <p className="text-center font-[500] text-[16px]">
                    {t("Landing Pages")}
                  </p>
                </div>
              </div>
              <DisableElevation
                className="w-max mx-auto p-[10px_23px] bg-[white]  border-[1px] border-solid border-[] rounded-[4px] font-[600] text-black"
                text={t("Order Now")}
              />
            </div>

            <div
              data-aos="fade-right"
              data-aos-duration="3000"
              className="p-[32px_74px] flex flex-col items-start gap-[38px] rounded-[8px] shadow-[0_2px_8px] shadow-[#00000040]"
            >
              <div className="flex flex-col gap-[16px]">
                <div>
                  <h1 className="font-[700] dark:text-white text-center text-[24px] text-[#22343D]">
                    {t("Premium")}
                  </h1>
                  <p className="font-[400] dark:text-white text-center text-[16px] text-[#22343D]">
                    {t("Brief price description")}
                  </p>
                </div>

                <div className="flex items-center gap-[8px]">
                  <h1 className="font-[700] text-[76px] text-[#02897A]">10</h1>
                  <div className="flex flex-col gap-[4px]">
                    <h1 className="font-[700] text-[24px] text-[#02897A]">$</h1>
                    <p className="font-[400] text-[16px] text-[#AFAFAF]">
                      {t("Per / month")}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-[16px]">
                  <p className="text-center dark:text-white font-[500] text-[16px]">
                    {t("10+ Operators")}
                  </p>
                  <p className="text-center dark:text-white font-[500] text-[16px]">
                    {t("Notifications")}
                  </p>
                  <p className="text-center dark:text-white font-[500] text-[16px]">
                    {t("Landing Pages")}
                  </p>
                </div>
              </div>
              <DisableElevation
                className="w-max mx-auto p-[10px_23px] bg-[#02897A] border-[1px] border-solid border-[] rounded-[4px] font-[600] text-white"
                text={t("Order Now")}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="container1 dark:bg-black">
        <div className="container11 flex flex-col gap-[50px] py-[75px]">
          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className="flex flex-col gap-[8px]"
          >
            <h1 className="font-[700] dark:text-white text-center  text-[34px] text-[#22343D] leading-[51px]">
              {t("What Clients Say")}
            </h1>
            <p className="font-[500] dark:text-white  text-center text-[16px] text-[#22343D] leading-[26px] max-w-[537px] mx-auto">
              {t(
                "Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics"
              )}
            </p>
          </div>

          <div className="flex items-center justify-between flex-wrap lg:justify-center lg:gap-[75px]">
            <div
              data-aos="fade-up"
              data-aos-duration="3000"
              className="p-[28px_26px_24px_26px] flex flex-col gap-[16px] border-[1px] border-solid border-[#DEDEDE] rounded-[5px]"
            >
              <Stack spacing={1}>
                <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
              </Stack>
              <p className="max-w-[275px] dark:text-white font-[400] text-[16px] text-[#737373] leading-[28px]">
                {t(
                  "Product helps you see how many more days you need to work to reach your financial goal."
                )}
              </p>
              <div className="flex items-center gap-[14px]">
                <img src={ellipse2} alt="" />
                <div>
                  <h1 className=" font-[600] text-[16px] text-[#02897A] ">
                    Wahid Ari
                  </h1>
                  <p className=" font-[500] text-[14px] text-[#252B42] dark:text-white ">
                    {t("Designer")}
                  </p>
                </div>
              </div>
            </div>

            <div
              data-aos="fade-up"
              data-aos-duration="3000"
              className="p-[28px_26px_24px_26px] flex flex-col gap-[16px] border-[1px] border-solid border-[#DEDEDE] rounded-[5px]"
            >
              <Stack spacing={1}>
                <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
              </Stack>
              <p className="max-w-[275px] dark:text-white font-[400] text-[16px] text-[#737373] leading-[28px]">
                {t(
                  "Product helps you see how many more days you need to work to reach your financial goal."
                )}
              </p>
              <div className="flex items-center gap-[14px]">
                <img src={ellipse2} alt="" />
                <div>
                  <h1 className=" font-[600] text-[16px] text-[#02897A] ">
                    Wahid Ari
                  </h1>
                  <p className=" font-[500] dark:text-white text-[14px] text-[#252B42] ">
                    {t("Designer")}
                  </p>
                </div>
              </div>
            </div>

            <div
              data-aos="fade-right"
              data-aos-duration="3000"
              className="p-[28px_26px_24px_26px] flex flex-col gap-[16px] border-[1px] border-solid border-[#DEDEDE] rounded-[5px]"
            >
              <Stack spacing={1}>
                <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
              </Stack>
              <p className="max-w-[275px] dark:text-white font-[400] text-[16px] text-[#737373] leading-[28px]">
                {t(
                  "Product helps you see how many more days you need to work to reach your financial goal."
                )}
              </p>
              <div className="flex items-center gap-[14px]">
                <img src={ellipse2} alt="" />
                <div>
                  <h1 className=" font-[600] text-[16px] text-[#02897A] ">
                    Wahid Ari
                  </h1>
                  <p className=" font-[500] dark:text-white text-[14px] text-[#252B42] ">
                    {t("Designer")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container1">
        <div className="container11 flex justify-center py-[90px]">
          <div
            data-aos="flip-left"
            data-aos-duration="3000"
            className=" flex items-center  bg-[#02897A] text-white rounded-[32px] p-[14px_36px_0_51px] lg:gap-[25px] lg:flex-wrap lg:justify-center"
          >
            <div className="max-w-[500px] flex flex-col gap-[70px]">
              <h1 className="font-[600] text-[32px] lg:text-center">
                {t("Join 100 Compannies who boost their business with Product")}
              </h1>

              <DisableElevation
                className="bg-[white] p-[10px_23px] bg-[none] lg:mx-auto rounded-[4px] font-[600] text-[#02897A] w-max"
                text={t("Get This")}
              />
            </div>
            <img src={screen} alt="" />
          </div>
        </div>
      </section>

      <footer className="container1 dark:bg-black">
        <div className="container11 flex flex-col gap-[10px] py-[75px]">
          <div className="flex items-start justify-between lg:flex-wrap lg:justify-center lg:gap-[50px]">
            <div
              data-aos="fade-right"
              data-aos-duration="3000"
              className="flex flex-col gap-[25px] items-center"
            >
              <div className="flex items-center gap-[16px]">
                <img src={group190} alt="" />
                <h1 className="font-[700] dark:text-white text-[30px]">
                  {t("Product")}
                </h1>
              </div>
              <div className="flex items-center gap-[16px]">
                <InstagramIcon className="text-[#02897A]" />
                <FacebookIcon className="text-[#02897A]" />
                <TwitterIcon className="text-[#02897A]" />
              </div>
            </div>
            <div className="flex items-start gap-[82px] lg:flex-wrap lg:justify-center lg:gap-y-[50px]">
              <div
                data-aos="fade-right"
                data-aos-duration="3000"
                className="flex items-center gap-[129px]"
              >
                <ul className="flex flex-col gap-[8px]">
                  <h1 className="font-[500] text-[20px] dark:text-white text-[#22343D]">
                    {t("Resource")}
                  </h1>
                  <li className="font-[400] text-[16px] dark:text-white text-[#22343D]">
                    {t("About Us")}
                  </li>
                  <li className="font-[400] text-[16px] dark:text-white text-[#22343D]">
                    {t("Blog")}
                  </li>
                  <li className="font-[400] text-[16px] dark:text-white text-[#22343D]">
                    {t("Contact")}
                  </li>
                  <li className="font-[400] text-[16px] dark:text-white text-[#22343D]">
                    {t("FAQ")}
                  </li>
                </ul>

                <ul className="flex flex-col gap-[8px]">
                  <h1 className="font-[500] text-[20px] dark:text-white text-[#22343D]">
                    {t("Legal Stuff")}
                  </h1>
                  <li className="font-[400] text-[16px] dark:text-white text-[#22343D]">
                    {t("Disclaimer")}
                  </li>
                  <li className="font-[400] text-[16px] dark:text-white text-[#22343D]">
                    {t("Financing")}
                  </li>
                  <li className="font-[400] text-[16px] dark:text-white text-[#22343D]">
                    {t("Privacy Policy")}
                  </li>
                  <li className="font-[400] text-[16px] dark:text-white text-[#22343D]">
                    {t("Terms of Service")}
                  </li>
                </ul>
              </div>

              <div
                data-aos="fade-right"
                data-aos-duration="3000"
                className=" max-w-[325px] flex flex-col gap-[34px]"
              >
                <h1 className="font-[500] text-[20px] text-[#22343D] dark:text-white leading-[30px]">
                  {t("knowing you're always on the best energy deal. ")}
                </h1>
                <div className="flex flex-col gap-[21px]">
                  <input
                    className="w-[100%] h-[48px] border-[1px] border-solid border-[#BCD0E5]"
                    type="text"
                    name=""
                    id=""
                  />
                  <DisableElevation
                    className="w-max  p-[10px_23px] bg-[#02897A] text-white rounded-[4px] font-[600]"
                    text="Sign up Now"
                  />
                </div>
              </div>
            </div>
          </div>
          <p className="text-center">
            {t("Made With Love By Figmaland All Right Reserved")}
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
