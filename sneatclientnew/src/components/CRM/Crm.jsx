import React from "react";
import "./crm.css";
import congrats from "../../Img/zhuhe.svg";
import box2 from "../../Img/box2.svg";
import ellipsis from "../../Img/ellipsis.svg";
import star from "../../Img/star.svg";
import greystar from "../../Img/greystar.svg";
import up from "../../Img/uparrow.svg";
import dollarSign from "../../Img/dollar-sign.svg";
import suitcase from "../../Img/suitcase.svg";
import payment from "../../Img/payment.svg";
import down from "../../Img/down.svg";
import phone from "../../Img/yidongduan.svg";
import us from "../../Img/us.svg";
import brazil from "../../Img/brazil.svg";
import de from "../../Img/de.svg";
import india from "../../Img/india.svg";
import china from "../../Img/china.svg";
import aus from "../../Img/aus.svg";
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
import icon13 from "../../Img/icon13.svg";
import icon15 from "../../Img/icon15.svg";
import icon14 from "../../Img/icon14.svg";
import icon16 from "../../Img/icon16.svg";
import icon17 from "../../Img/icon17.svg";
import icon18 from "../../Img/icon18.svg";
import icon19 from "../../Img/icon19.svg";
import icon20 from "../../Img/icon20.svg";
import icon21 from "../../Img/icon21.svg";
import master from "../../Img/master.svg";
import visa from "../../Img/visa.svg";
import paypal from "../../Img/paypal.svg";
import uparrowonly from "../../Img/uparrowonly.svg";
import TinyAreaChart2 from "../Apexcharts/TinyAreaChart2";

import AreaChart2 from "../Apexcharts/AreaChart2";
import StackedBarChart2 from "../Apexcharts/StackedBarChart2";
import StrokedGauge from "../Apexcharts/StrokedGauge";
import RevenueBarChart2 from "../Apexcharts/RevenueBarChart2";
import DashedLineChart from "../Apexcharts/DashedLineChart";
import LineShadowChart from "../Apexcharts/DashedLineChart";
import DonutChart2 from "../Apexcharts/DonutChart2";
import RadiaBar2 from "../Apexcharts/RadiaBar2";
import HeatMap from "../Apexcharts/HeatMap";
import RadiaBar3 from "../Apexcharts/RadiaBar3";
import RadiaBar4 from "../Apexcharts/RadiaBar4";
import RadiaBar5 from "../Apexcharts/RadiaBar5";
import RadiaBar6 from "../Apexcharts/RadiaBar6";
import RadiaBar7 from "../Apexcharts/RadiaBar7";
import RadiaBar8 from "../Apexcharts/RadiaBar8";

import { useSelector } from "react-redux";
import first from "../../data/1.jpg";
import second from "../../data/2.jpg";
import third from "../../data/3.jpg";
import fourth from "../../data/4.jpg";
import fifth from "../../data/5.png";

export default function Crm() {
  const { currentColor } = useSelector((state) => state.global);
  return (
    <div className="crmContainer">
      <div className="crmTop">
        <div className="item item1">
          <div className="item1Top">
            <div>
              <p>Customer Ratings</p>
              <p className="flex">
                <span className="mr-4">4.0</span> <img src={star} />
                <img src={star} />
                <img src={star} />
                <img src={star} />
                <img src={greystar} />
              </p>

              <p>
                <span>+5.0</span> <span>Points from last month</span>
              </p>
            </div>
            <div className="item1Right">
              <img src={ellipsis} alt="" />
            </div>
          </div>
          <div className="item1Bottom">
            <DashedLineChart />
          </div>
        </div>
        <div className="item item2">
          <div>
            <p>Overview & Sales Activity</p>
            <p>
              <span>Check out each column for more details</span>
            </p>
          </div>
          <div className="item2Bottom">
            <StackedBarChart2 />
          </div>
        </div>
        <div className="item item3">
          <div>
            <TinyAreaChart2 />
          </div>
        </div>
        <div className="item item4">
          <div>
            <img src={box2} />
            <p>Order</p>
            <p className="number">$1,286</p>
            <p className="flex items-center">
              <img src={down} alt="" />
              <span id="downNumer">13.24%</span>
            </p>
          </div>
          <div className="item4Right">
            <img src={ellipsis} alt="" />
          </div>
        </div>
        <div className="item item5">
          <div>
            <p>Generated Leads</p>
            <p className="report">Monthly Report</p>
            <p className="number">4,234</p>
            <p className="flex items-center">
              <img src={up} alt="" /> <span id="upNumber">12.8%</span>
            </p>
          </div>
          <div className="item5Right">
            <div>
              <DonutChart2 />
            </div>
            <div className="centerContent">
              <h4>25%</h4>
              <p>Average</p>
            </div>
          </div>
        </div>
      </div>
      <div className="crmMiddle1">
        <div className="item item6">
          <div className="item6LeftContainer">
            <div className="item6Top">
              <div>
                <p>
                  Top Products by{" "}
                  <span style={{ color: currentColor }}>Sales</span>
                </p>
              </div>
              <div className="item6Right">
                <img src={ellipsis} alt="" />
              </div>
            </div>
            <div className="item6Bottom">
              <div className="rowlist">
                <div className="rowListTop">
                  <img src={phone} alt="" />
                  <div>
                    <h4>Oneplus Nord</h4>
                    <p>Oneplus</p>
                  </div>
                </div>
                <div className="item6ListRight">
                  <h4>$98,348</h4>
                </div>
              </div>
              <div className="rowlist">
                <div className="rowListTop">
                  <img src={icon10} alt="" />
                  <div>
                    <h4>Smart Band 4</h4>
                    <p>Xiaomi</p>
                  </div>
                </div>
                <div className="item6ListRight">
                  <h4>$15,459</h4>
                </div>
              </div>
              <div className="rowlist">
                <div className="rowListTop">
                  <img src={icon11} alt="" />
                  <div>
                    <h4>Surface Pro X</h4>
                    <p>Microsoft</p>
                  </div>
                </div>
                <div className="item6ListRight">
                  <h4>$4,589</h4>
                </div>
              </div>
              <div className="rowlist">
                <div className="rowListTop">
                  <img src={icon12} alt="" />
                  <div>
                    <h4>iPhone 13</h4>
                    <p>Apple</p>
                  </div>
                </div>
                <div className="item6ListRight">
                  <h4>$84,345</h4>
                </div>
              </div>
              <div className="rowlist">
                <div className="rowListTop">
                  <img src={icon13} alt="" />
                  <div>
                    <h4>Bluetooth Earphone</h4>
                    <p>Beats</p>
                  </div>
                </div>
                <div className="item6ListRight">
                  <h4>$10,3748</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="item6RightContainer">
            <div className="item6Left">
              <div className="item6Top">
                <div>
                  <p>
                    Top Products by{" "}
                    <span style={{ color: currentColor }}>Volume</span>
                  </p>
                </div>
                <div className="item6Right">
                  <img src={ellipsis} alt="" />
                </div>
              </div>
              <div className="item6Bottom">
                <div className="rowlist">
                  <div className="rowListTop">
                    <img src={icon14} alt="" />
                    <div>
                      <h4>ENVY Laptop</h4>
                      <p>HP</p>
                    </div>
                  </div>
                  <div className="item6ListRight">
                    <h4>12.4k</h4>
                    <div>+12.4%</div>
                  </div>
                </div>
                <div className="rowlist">
                  <div className="rowListTop">
                    <img src={icon15} alt="" />
                    <div>
                      <h4>Apple</h4>
                      <p>iMac Pro</p>
                    </div>
                  </div>
                  <div className="item6ListRight">
                    <h4>74.9k</h4>
                    <div>-8.5%</div>
                  </div>
                </div>
                <div className="rowlist">
                  <div className="rowListTop">
                    <img src={icon16} alt="" />
                    <div>
                      <h4>Smart Watch</h4>
                      <p>Fitbit</p>
                    </div>
                  </div>
                  <div className="item6ListRight">
                    <h4>4.4k</h4>
                    <div>+17.6%</div>
                  </div>
                </div>
                <div className="rowlist">
                  <div className="rowListTop">
                    <img src={icon17} alt="" />
                    <div>
                      <h4>Oneplus Nord</h4>
                      <p>Oneplus</p>
                    </div>
                  </div>
                  <div className="item6ListRight">
                    <h4>12.34k</h4>
                    <div>+13.9%</div>
                  </div>
                </div>
                <div className="rowlist">
                  <div className="rowListTop">
                    <img src={icon18} alt="" />
                    <div>
                      <h4>Pixel 4a</h4>
                      <p>Google</p>
                    </div>
                  </div>
                  <div className="item6ListRight">
                    <h4>8.65k</h4>
                    <div>-11.8%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="item item7">
          <div className="item7Top">
            <div>
              <h3>Earning Report</h3>
              <p>Weekly Earnings Overview</p>
            </div>
            <div className="item6Right">
              <img src={ellipsis} alt="" />
            </div>
          </div>
          <div className="item7Bottom">
            <div className="rowlist">
              <div className="rowListTop">
                <img src={icon19} alt="" />
                <div>
                  <h4>Net Profit</h4>
                  <p>12.4k Sales</p>
                </div>
              </div>
              <div className="item7ListRight">
                <h6>$1,619</h6>
                <img src={uparrowonly} />
                <p>18.6%</p>
              </div>
            </div>
            <div className="rowlist">
              <div className="rowListTop">
                <img src={icon20} alt="" />
                <div>
                  <h4>Total Income</h4>
                  <p>Sales, Affiliation</p>
                </div>
              </div>
              <div className="item7ListRight">
                <h6>$3,571</h6>
                <img src={uparrowonly} />
                <p>39.6%</p>
              </div>
            </div>
            <div className="rowlist">
              <div className="rowListTop">
                <img src={icon21} alt="" />
                <div>
                  <h4>Total Expenses</h4>
                  <p>ADVT, Marketing</p>
                </div>
              </div>
              <div className="item7ListRight">
                <h6>$430</h6>
                <img src={uparrowonly} />
                <p>52.8%</p>
              </div>
            </div>

            <div className="crmBarChart">
              <RevenueBarChart2 />
            </div>
          </div>
        </div>
      </div>
      <div className="crmMiddle2">
        <div className="item item8">
          <div className="item8Top">
            <div className="item8TopRight">
              <h3>Sales Analytics</h3>
              <div className="bottom">
                <div>+42.6%</div>
                <div> Than last year</div>
              </div>
            </div>
            <select
              style={{ color: currentColor, borderColor: currentColor }}
              name=""
              id=""
            >
              <option value="2023">2023</option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
              <option value="2020">2020</option>
            </select>
          </div>
          <div className="heatMap">
            <HeatMap />
          </div>
        </div>
        <div className="item item9">
          <div className="item9Top">
            <div>
              <h3>Sales by Countries</h3>
              <p>Monthly Sales Overview</p>
            </div>
            <div className="item6Right">
              <img src={ellipsis} alt="" />
            </div>
          </div>
          <div className="item9Bottom">
            <div className="rowList">
              <div className="rowList9Left">
                <div className="imgContainer">
                  <img src={us} />
                </div>
                <div>
                  <div className="listRight flex">
                    <span className="bold">$8,656k</span>
                    <img src={uparrowonly} />
                    <span className="number">25.8%</span>
                  </div>
                  <div className="country">United states of america</div>
                </div>
              </div>
              <div className="bold">894k</div>
            </div>
            <div className="rowList">
              <div className="rowList9Left">
                <div className="imgContainer">
                  <img
                    className="rounded-full w-7 h-7 bg-slate-400"
                    src={brazil}
                  />
                </div>
                <div>
                  <div className="listRight flex">
                    <span className="bold">$2,415k</span>
                    <img src={uparrowonly} />
                    <span className="number">-6.2%</span>
                  </div>
                  <div className="country">Brazil</div>
                </div>
              </div>
              <div className="bold">645k</div>
            </div>
            <div className="rowList">
              <div className="rowList9Left">
                <div className="imgContainer">
                  <img
                    className="rounded-full w-7 h-7 bg-slate-400"
                    src={india}
                  />
                </div>
                <div>
                  <div className="listRight flex">
                    <span className="bold">$865k</span>
                    <img src={uparrowonly} />
                    <span className="number">12.4%</span>
                  </div>
                  <div className="country">India</div>
                </div>
              </div>
              <div className="bold">894k</div>
            </div>
            <div className="rowList">
              <div className="rowList9Left">
                <div className="imgContainer">
                  <img src={us} />
                </div>
                <div>
                  <div className="listRight flex">
                    <span className="bold">$8,656k</span>
                    <img src={uparrowonly} />
                    <span className="number">25.8%</span>
                  </div>
                  <div className="country">United states of america</div>
                </div>
              </div>
              <div className="bold">894k</div>
            </div>
            <div className="rowList">
              <div className="rowList9Left">
                <div className="imgContainer">
                  <img src={us} />
                </div>
                <div>
                  <div className="listRight flex">
                    <span className="bold">$8,656k</span>
                    <img src={uparrowonly} />
                    <span className="number">25.8%</span>
                  </div>
                  <div className="country">United states of america</div>
                </div>
              </div>
              <div className="bold">894k</div>
            </div>
            <div className="rowList">
              <div className="rowList9Left">
                <div className="imgContainer">
                  <img src={us} />
                </div>
                <div>
                  <div className="listRight flex">
                    <span className="bold">$8,656k</span>
                    <img src={uparrowonly} />
                    <span className="number">25.8%</span>
                  </div>
                  <div className="country">United states of america</div>
                </div>
              </div>
              <div className="bold">894k</div>
            </div>
          </div>
        </div>
        <div className="item item10">
          <div className="item10Top">
            <div>
              <h3>Sales Stats</h3>
            </div>

            <div className="item10Right">
              <img src={ellipsis} alt="" />
            </div>
          </div>
          <div className="item10Bottom">
            <div>
              <RadiaBar3 />
              <div className="extraLegend">
                <div id="ratio">Conversion Ratio</div>
                <div id="total">Total requirements</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="crmBottom">
        <div className="item item11">
          <div className="item11Top">
            <div>
              <h3>Team Members</h3>
            </div>
            <div className="item6Right">
              <img src={ellipsis} alt="" />
            </div>
          </div>
          <div className="browserList pl-5">
            <table>
              <thead>
                <tr>
                  <th className="w-1/6">NAME</th>
                  <th>PROJECT</th>
                  <th>TASKS</th>
                  <th>PROGRESS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="profile">
                      <div>
                        <img className="rounded-full" src={first} />
                      </div>
                      <div className="nameJob">
                        <h4>Nathan Wagner</h4>
                        <div>iOS Developer</div>
                      </div>
                    </div>
                  </td>
                  <td className="projectContainer">
                    <div className="project project1">ZIPCAR</div>
                  </td>
                  <td className="taskWidth">87/135</td>
                  <td className="BarChartWidth">
                    <RadiaBar4 />
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="profile">
                      <div>
                        <img className="rounded-full" src={second} />
                      </div>
                      <div className="nameJob">
                        <h4>Travis Collins</h4>
                        <div>VueJs developer</div>
                      </div>
                    </div>
                  </td>
                  <td className="projectContainer">
                    <div className="project project2">AVIATO</div>
                  </td>
                  <td>340/420</td>
                  <td className="w-1/3">
                    <RadiaBar5 />
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="profile">
                      <div>
                        <img className="rounded-full" src={third} />
                      </div>
                      <div className="nameJob">
                        <h4>Emma Bowen</h4>
                        <div>UI/UX Designer</div>
                      </div>
                    </div>
                  </td>
                  <td className="projectContainer">
                    <div className="project project3">BITBANK</div>
                  </td>
                  <td>50/82</td>
                  <td className="chart">
                    <RadiaBar6 />
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="profile">
                      <div>
                        <img className="rounded-full" src={fourth} />
                      </div>
                      <div className="nameJob">
                        <h4>Adrian McGuire</h4>
                        <div>React developer</div>
                      </div>
                    </div>
                  </td>
                  <td className="projectContainer">
                    <div className="project project4">PAYERS </div>
                  </td>
                  <td>98/260</td>
                  <td className="chart">
                    <RadiaBar7 />
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="profile">
                      <div>
                        <img className="rounded-full" src={fifth} />
                      </div>
                      <div className="nameJob">
                        <h4>Alma Gonzalez</h4>
                        <div>Product Manager</div>
                      </div>
                    </div>
                  </td>
                  <td className="projectContainer">
                    <div className="project project5">BRANDI</div>
                  </td>
                  <td>12/25</td>
                  <td className="chart">
                    <RadiaBar8 />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="item item12">
          <div className="browserList pl-5">
            <table>
              <thead>
                <tr>
                  <th>CUSTOMER</th>
                  <th>AMOUNT</th>
                  <th>STATUS</th>
                  <th className="action">PAID BY</th>
                  <th className="action">ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="profile">
                      <div>
                        <img className="rounded-full" src={first} />
                      </div>
                      <div className="nameJob">
                        <h4>Henry Barnes</h4>
                        <div>jok@puc.co.uk</div>
                      </div>
                    </div>
                  </td>
                  <td>$459.65</td>
                  <td className="statusContainer">
                    <div className="status status1 p-1">PAID</div>
                  </td>
                  <td className="chart">
                    <img className="m-auto" src={master} alt="" />
                  </td>
                  <td className="action">
                    <img className="m-auto" src={ellipsis} />
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="profile">
                      <div>
                        <img className="rounded-full" src={second} />
                      </div>
                      <div className="nameJob">
                        <h4>Herman Holland</h4>
                        <div>sami@lelo.com</div>
                      </div>
                    </div>
                  </td>
                  <td>$93.81</td>
                  <td className="statusContainer">
                    <div className="status bg-[#fff1d6] text-[#ffab00] p-1">
                      Pending
                    </div>
                  </td>
                  <td className="chart">
                    <img className="m-auto" src={visa} alt="" />
                  </td>
                  <td className="action">
                    <img className="m-auto" src={ellipsis} />
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="profile">
                      <div>
                        <img className="rounded-full" src={third} />
                      </div>
                      <div className="nameJob">
                        <h4>Hallie Warner</h4>
                        <div>initus@odemi.com</div>
                      </div>
                    </div>
                  </td>
                  <td>$934.34</td>
                  <td className="statusContainer">
                    <div className="status bg-[#fff1d6] text-[#ffab00] p-1">
                      Pending
                    </div>
                  </td>
                  <td className="chart">
                    <img className="m-auto" src={visa} alt="" />
                  </td>
                  <td className="action">
                    <img className="m-auto" src={ellipsis} />
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="profile">
                      <div>
                        <img className="rounded-full" src={fourth} />
                      </div>
                      <div className="nameJob">
                        <h4>John Davidson</h4>
                        <div>tum@upkesja.gov</div>
                      </div>
                    </div>
                  </td>
                  <td>$794.97</td>
                  <td className="statusContainer">
                    <div className="status status1 p-1">PAID</div>
                  </td>
                  <td className="paypal">
                    <img className="m-auto" src={paypal} alt="" />
                  </td>
                  <td className="action">
                    <img className="m-auto" src={ellipsis} />
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="profile">
                      <div>
                        <img className="rounded-full" src={fifth} />
                      </div>
                      <div className="nameJob">
                        <h4>Cora Schmidt</h4>
                        <div>wipare@tin.com</div>
                      </div>
                    </div>
                  </td>
                  <td>$19.49</td>
                  <td className="statusContainer">
                    <div className="status status1 p-1">PAID</div>
                  </td>
                  <td className="chart">
                    <img className="m-auto" src={master} alt="" />
                  </td>
                  <td className="action">
                    <img className="m-auto" src={ellipsis} />
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="profile">
                      <div>
                        <img className="rounded-full" src={first} />
                      </div>
                      <div className="nameJob">
                        <h4>Betty Ross</h4>
                        <div>nur@kaomor.edu</div>
                      </div>
                    </div>
                  </td>
                  <td>$636.27</td>
                  <td className="statusContainer">
                    <div className="status bg-[#ffe0db] text-[#ff573b] p-1">
                      Failed
                    </div>
                  </td>
                  <td className="paypal">
                    <img className="m-auto" src={paypal} alt="" />
                  </td>
                  <td className="action">
                    <img className="m-auto" src={ellipsis} />
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
