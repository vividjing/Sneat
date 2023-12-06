import React, { useState } from "react";
import "./analtytics.css";
import { GiPartyPopper } from "react-icons/gi";
import congrats from "../../Img/zhuhe.svg";
import box from "../../Img/box.svg";
import ellipsis from "../../Img/ellipsis.svg";
import up from "../../Img/uparrow.svg";
import dollarSign from "../../Img/dollar-sign.svg";
import suitcase from "../../Img/suitcase.svg";
import payment from "../../Img/payment.svg";
import down from "../../Img/down.svg";
import phone from "../../Img/yidongduan.svg";
import fashion from "../../Img/huiyuan.svg";
import house from "../../Img/liwu.svg";
import sport from "../../Img/yundong.svg";
import total from "../../Img/shangpinku.svg";
import pdf from "../../Img/pdf.svg";
import wangshang from "../../Img/wangshang.svg";
import chrome from "../../Img/chrome.svg";
import safari from "../../Img/safari.svg";
import firefox from "../../Img/firefox.svg";
import edge from "../../Img/edge.svg";
import opera from "../../Img/opera.svg";
import brave from "../../Img/brave.svg";
import icon11 from "../../Img/icon11.svg";
import icon10 from "../../Img/icon10.svg";
import icon12 from "../../Img/icon12.svg";
import TinyAreaChart from "../Apexcharts/TinyAreaChart";
import AreaChart2 from "../Apexcharts/AreaChart2";
import StackedBarChart from "../Apexcharts/StackedBarChart";
import StrokedGauge from "../Apexcharts/StrokedGauge";
import RevenueBarChart from "../Apexcharts/RevenueBarChart";
import LineShadowChart from "../Apexcharts/LineShadowChart";
import DonutChart from "../Apexcharts/DonutChart";
import RadiaBar2 from "../Apexcharts/RadiaBar2";
import { useSelector } from "react-redux/es/hooks/useSelector";
import first from "../../data/1.jpg";
import second from "../../data/2.jpg";
import third from "../../data/3.jpg";
import fourth from "../../data/4.jpg";
import fifth from "../../data/5.png";

export default function Analtytics() {
  const { currentColor, userName } = useSelector((state) => state.global);
  const [isActive, setIsActive] = useState("income");
  const [isActive2, setIsActive2] = useState("browser");
  const activeLink =
    "flex items-center justify-center py-5 px-3 font-medium rounded-lg text-md text-white cursor-pointer";
  const normalLink =
    "flex items-center justify-center gap-1 px-3 py-5 rounded-lg cursor-pointer text-gray-500 dark:text-gray-200 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray";
  return (
    <div className="outContainer w-full">
      <div className="top">
        <div className="item1">
          <div className="item1Left">
            <h4
              className="flex items-center gap-3"
              style={{ color: currentColor }}
            >
              {`Congratulations ${userName}!`}
              <GiPartyPopper className="text-red-600" />
            </h4>
            <p>You have done 72% more sales today.</p>
            <p>Check your new badge in your profile.</p>
            <div style={{ color: currentColor, borderColor: currentColor }}>
              VIEW BADGES
            </div>
          </div>
          <div className="item1Right">
            <img
              src="https://greakproject.vercel.app/images/cards/illustration-john-light.png"
              alt=""
            />
          </div>
        </div>
        <div className="item2">
          <div className="linechart">
            <TinyAreaChart />
          </div>
        </div>
        <div className="item3">
          <div>
            <img src={box} />
            <p>Sales</p>
            <p className="number">$4,679</p>
            <p className="flex items-center">
              <img src={up} alt="" /> 28.14%
            </p>
          </div>
          <div className="item3Right">
            <img src={ellipsis} alt="" />
          </div>
        </div>
        <div className="item4">
          <div>
            <img src={payment} />
            <p>Payments</p>
            <p className="number">$2,468</p>
            <p className="flex items-center">
              <img src={down} alt="" /> <span id="downNumber">14.82%</span>
            </p>
          </div>
          <div className="item4Right">
            <img src={ellipsis} alt="" />
          </div>
        </div>
        <div className="item5">
          <div>
            <RevenueBarChart />
          </div>
        </div>
        <div className="item6">
          <div>
            <p>Profit Report</p>
            <p className="year23">YEAR 2023</p>
            <p className="flex items-center">
              <img src={up} alt="" /> <span id="downNumber">68.2%</span>
            </p>
            <p className="number">$84,686</p>
          </div>
          <div className="item3Right">
            <LineShadowChart />
          </div>
        </div>
        <div className="item7 pt-4">
          <div className="stackedBarChart">
            <StackedBarChart />
          </div>
          <div className="item7Right">
            <select>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
              <option value="2020">2020</option>
            </select>
            <div>
              <StrokedGauge />
            </div>
            <div className="chartTitle">62% Company Growth</div>
            <div>
              <div className="item7Bottom">
                <div className="bottomLeft">
                  <div className="flex items-center justify-center">
                    <img src={dollarSign} />
                  </div>
                  <ul>
                    <li>2023</li>
                    <li className="revenueBold">$32.5k</li>
                  </ul>
                </div>
                <div className="bottomRight">
                  <div
                    id="suitcase"
                    className="flex items-center justify-center"
                  >
                    <img src={suitcase} />
                  </div>
                  <ul>
                    <li>2022</li>
                    <li className="revenueBold">$41.2k</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="middle">
        <div className="middleLeft">
          <div className="item8">
            <div className="item8Top">
              <div>
                <p>Order Statistics</p>
                <p>42.82k Total Sales</p>
                <p>8,258</p>
                <p>Total Orders</p>
              </div>
              <div className="item8Right">
                <img src={ellipsis} alt="" />
                <div className="donutChart">
                  <DonutChart />
                  <div className="donutData">
                    <p>38%</p>
                    <p>Weekly</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="item8Bottom">
              <div className="rowlist">
                <div className="rowListTop">
                  <img src={phone} alt="" />
                  <div>
                    <h4>Electronic</h4>
                    <p>Mobile, Earbuds, TV</p>
                  </div>
                </div>
                <div>82.5k</div>
              </div>
              <div className="rowlist">
                <div className="rowListTop">
                  <img src={fashion} alt="" />
                  <div>
                    <h4>Fashion</h4>
                    <p>Tshirt, Jeans, Shoes</p>
                  </div>
                </div>
                <div>23.8k</div>
              </div>
              <div className="rowlist">
                <div className="rowListTop">
                  <img src={house} alt="" />
                  <div>
                    <h4>Decor</h4>
                    <p>Fine Art, Dining</p>
                  </div>
                </div>
                <div>849k</div>
              </div>
              <div className="rowlist">
                <div className="rowListTop">
                  <img src={sport} alt="" />
                  <div>
                    <h4>Sports</h4>
                    <p>Football, Cricket Kit</p>
                  </div>
                </div>
                <div>82.5k</div>
              </div>
            </div>
          </div>
          <div className="item9">
            <ul>
              <li
                onClick={() => {
                  setIsActive("income");
                }}
                className={isActive === "income" ? activeLink : normalLink}
                style={{
                  backgroundColor: isActive === "income" ? currentColor : "",
                }}
              >
                INCOME
              </li>
              <li
                onClick={() => {
                  setIsActive("expense");
                }}
                className={isActive === "expense" ? activeLink : normalLink}
                style={{
                  backgroundColor: isActive === "expense" ? currentColor : "",
                }}
              >
                EXPENSES
              </li>
              <li
                onClick={() => {
                  setIsActive("profit");
                }}
                className={isActive === "profit" ? activeLink : normalLink}
                style={{
                  backgroundColor: isActive === "profit" ? currentColor : "",
                }}
              >
                PROFIT
              </li>
            </ul>
            <div className="item9Middle">
              <div>
                <img src={total} />
              </div>
              <div className="middleMiddle">
                <p>Total Income</p>
                <p className="middleBottom flex items-center pt-1">
                  <span id="income">$459.1k</span> <img src={wangshang} />
                  <span id="percent"> 42.9%</span>
                </p>
              </div>
            </div>
            <div>
              <AreaChart2 />
            </div>
            <div className="item9Bottom">
              <div className="chart">
                <RadiaBar2 />
              </div>

              <div className="bottomRight">
                <p>Income this week</p>
                <p>$39k less than last week</p>
              </div>
            </div>
          </div>
        </div>

        <div className="item10">
          <div className="item8Top">
            <div>
              <p>Transaction</p>
            </div>
            <div className="item8Right">
              <img src={ellipsis} alt="" />
            </div>
          </div>
          <div className="item8Bottom item10Bottom">
            <div className="rowlist">
              <div className="rowListTop">
                <img src={phone} alt="" />
                <div>
                  <p>Paypal</p>
                  <h4>Send money</h4>
                </div>
              </div>
              <div className="item10ListRight">
                <h4>+82.5</h4> <p>USD</p>
              </div>
            </div>
            <div className="rowlist">
              <div className="rowListTop">
                <img src={fashion} alt="" />
                <div>
                  <p>Wallet</p>
                  <h4>Mac'D</h4>
                </div>
              </div>
              <div className="item10ListRight">
                <h4>+270.69</h4> <p>USD</p>
              </div>
            </div>
            <div className="rowlist">
              <div className="rowListTop">
                <img src={house} alt="" />
                <div>
                  <p>Transfer</p>
                  <h4>Refund</h4>
                </div>
              </div>
              <div className="item10ListRight">
                <h4>+637.91</h4>
                <p>USD</p>
              </div>
            </div>
            <div className="rowlist">
              <div className="rowListTop">
                <img src={icon10} alt="" />
                <div>
                  <p>Credit Card</p>
                  <h4>Ordered Food</h4>
                </div>
              </div>
              <div className="item10ListRight">
                <h4>-838.71</h4>
                <p>USD</p>
              </div>
            </div>
            <div className="rowlist">
              <div className="rowListTop">
                <img src={icon11} alt="" />
                <div>
                  <p>Wallet</p>
                  <h4>Starbucks</h4>
                </div>
              </div>
              <div className="item10ListRight">
                <h4>+203.33</h4>
                <p>USD</p>
              </div>
            </div>
            <div className="rowlist">
              <div className="rowListTop">
                <img src={icon12} alt="" />
                <div>
                  <p>Mastercard</p>
                  <h4>Ordered Food</h4>
                </div>
              </div>
              <div className="item10ListRight">
                <h4>-92.45</h4>
                <p>USD</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="item11">
          <div className="item11Top">
            <div>
              <h4>Activity Timeline</h4>
            </div>
            <div className="item11Right">
              <img src={ellipsis} alt="" />
            </div>
          </div>
          <div className="rowlist">
            <div className="rowListLeft">
              <h4>12 Invoices have been paid</h4>
              <div className="discription">
                <p>Invoices have been paid to the company</p>
                <div className="flex rowListBottom">
                  <img src={pdf} alt="" />
                  <span>Invoices.pdf</span>
                </div>
              </div>
            </div>
            <div className="item11ListRight">12 min ago</div>
          </div>
          <div className="rowlist">
            <div className="rowListLeft">
              <h4 id="secondH4">Client Meeting</h4>
              <div className="discription">
                <p>Project meeting with john @10:15am</p>
                <div className="flex rowListBottom">
                  <img src={pdf} alt="" />
                  <span>Invoices.pdf</span>
                </div>
              </div>
            </div>
            <div className="item11ListRight">45 min ago</div>
          </div>
          <div className="rowlist">
            <div className="rowListLeft">
              <h4 id="thirdH4">Create a new project for client</h4>
              <div className="discription" id="noBorderLine">
                <p>5 team members in a project</p>

                <div className="flex relative h-10">
                  <div className="flex items-center justify-center rounded-full w-9 h-9 bg-white absolute z-50 ">
                    <img
                      className="rounded-full w-8 h-8"
                      src={first}
                      alt="user-profile"
                    />
                  </div>
                  <div className="flex items-center justify-center rounded-full w-9 h-9 ml-7 bg-white absolute z-40 ">
                    <img
                      className="rounded-full w-8 h-8"
                      src={third}
                      alt="user-profile"
                    />
                  </div>
                  <div className="flex items-center justify-center rounded-full w-9 h-9 ml-14 bg-white absolute z-30 ">
                    <img
                      className="rounded-full w-8 h-8"
                      src={fourth}
                      alt="user-profile"
                    />
                  </div>
                  <div className="flex items-center justify-center rounded-full w-9 h-9 ml-[86px] bg-white absolute z-20 ">
                    <img
                      className="rounded-full w-8 h-8"
                      src={fifth}
                      alt="user-profile"
                    />
                  </div>
                  <div className="flex items-center justify-center rounded-full w-9 h-9 ml-[113px] bg-white absolute z-10 ">
                    <img
                      className="rounded-full w-8 h-8"
                      src={second}
                      alt="user-profile"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="item11ListRight">2 days ago</div>
          </div>
        </div>
        <div className="item12">
          <ul className="pl-3 pb-5 items-center">
            <li
              onClick={() => {
                setIsActive2("browser");
              }}
              className={isActive2 === "browser" ? activeLink : normalLink}
              style={{
                backgroundColor: isActive2 === "browser" ? currentColor : "",
              }}
            >
              BROWSER
            </li>
            <li
              onClick={() => {
                setIsActive2("system");
              }}
              className={isActive2 === "system" ? activeLink : normalLink}
              style={{
                backgroundColor: isActive2 === "system" ? currentColor : "",
              }}
            >
              OPERATING SYSTEM
            </li>
            <li
              onClick={() => {
                setIsActive2("country");
              }}
              className={isActive2 === "country" ? activeLink : normalLink}
              style={{
                backgroundColor: isActive2 === "country" ? currentColor : "",
              }}
            >
              COUNTRY
            </li>
          </ul>
          <div className="browserList ml-3 mt-5">
            <table>
              <thead>
                <tr>
                  <th>NO.</th>
                  <th>BROWSER</th>
                  <th>VISITS</th>
                  <th>DATA IN PERCENTAGE</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td className="flex pt-3 items-center">
                    <img src={chrome} />
                    {"\u00A0"}
                    {"\u00A0"}
                    Chrome
                  </td>
                  <td>8.92k</td>
                  <td className="progress">
                    <div className="g-container">
                      <div className="g-progress progress1"></div>
                    </div>
                    <div>64.91%</div>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td className="flex pt-3 items-center">
                    <img src={safari} />
                    {"\u00A0"}
                    {"\u00A0"}
                    Safari
                  </td>
                  <td>1.29k</td>
                  <td className="progress">
                    <div className="g-container">
                      <div className="g-progress progress2"></div>
                    </div>
                    <div>19.03%</div>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td className="flex pt-3 items-center">
                    <img src={firefox} />
                    {"\u00A0"}
                    {"\u00A0"}
                    Firefox
                  </td>
                  <td>328</td>
                  <td className="progress">
                    <div className="g-container">
                      <div className="g-progress progress3"></div>
                    </div>
                    <div>3.26%</div>
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td className="flex pt-3 items-center">
                    <img src={edge} />
                    {"\u00A0"}
                    {"\u00A0"}
                    Edge
                  </td>
                  <td>142</td>
                  <td className="progress">
                    <div className="g-container">
                      <div className="g-progress progress4"></div>
                    </div>
                    <div>3.99%</div>
                  </td>
                </tr>
                <tr>
                  <td>5</td>
                  <td className="flex pt-3 items-center">
                    <img src={opera} />
                    {"\u00A0"}
                    {"\u00A0"}
                    Opera
                  </td>
                  <td>85</td>
                  <td className="progress">
                    <div className="g-container">
                      <div className="g-progress progress5"></div>
                    </div>
                    <div>2.12%</div>
                  </td>
                </tr>
                <tr>
                  <td>6</td>
                  <td className="flex pt-3 items-center">
                    <img src={brave} />
                    {"\u00A0"}
                    {"\u00A0"}
                    Brave
                  </td>
                  <td>36</td>
                  <td className="progress">
                    <div className="g-container">
                      <div className="g-progress progress6"></div>
                    </div>
                    <div>1.06%</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
