import {
  Calendar as BigCalendar,
  CalendarProps,
  momentLocalizer,
} from "react-big-calendar";
import { BsCheck } from "react-icons/bs";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useDispatch, useSelector } from "react-redux";
import SimpleCalendar from "./SimpleCalendar";
import {
  setCalendarFilter,
  setCheckAll,
  setEventCategory,
  setEventEndTime,
  setEventStartTime,
  setEventTitle,
  setEventUpdate,
  setIsEventActive,
  setEventId,
} from "../../state";
import { useGetEventQuery } from "../../state/eventApi";
import EventForm from "../EventForm";
import { useEffect, useState } from "react";

const localizer = momentLocalizer(moment);

export default function Schedule() {
  const { currentColor, calendarfilter, checkall, eventUpdate } = useSelector(
    (state) => state.global
  );
  const dispatch = useDispatch();

  // const [events, setEvents] = useState();

  const { data, isSuccess } = useGetEventQuery();

  const getData = () => {
    if (isSuccess) {
      const newData = data.filter((item) => {
        return calendarfilter.includes(item.category.toLowerCase());
      });
      console.log(newData);
      const result1 = newData.map((item) => {
        const start = moment(item.start).toDate();
        const end = moment(item.end).toDate();
        const title = item.title;
        const id = item._id;
        const category = item.category;
        return { start, end, title, id, category };
      });
      return result1;
    }
  };

  const events = getData();

  return (
    <div className="flex p-3 pr-6 dark:bg-main-dark-bg dark:text-white/60">
      <div className="w-1/4 p-6">
        <div>
          <SimpleCalendar />
        </div>
        <div className="p-3 pr-6 dark:bg-main-dark-bg dark:text-white/60">
          <div className="text-sm text-gray-600 mb-6 mt-6">FILTER</div>
          <div className=" flex items-center gap-3 text-[#97a2ac]">
            <button
              type="button"
              className="h-5 w-5 rounded-md cursor-pointer bg-slate-500"
              onClick={() => {
                dispatch(setCheckAll());
              }}
            >
              <BsCheck
                className={`text-xl text-white ${
                  checkall === true ? "block" : "hidden"
                }`}
              />
            </button>
            <span className="text-sm ">View All</span>
          </div>
          <div className=" flex items-center mt-3 gap-3 text-[#97a2ac]">
            <button
              type="button"
              className="h-5 w-5 rounded-md cursor-pointer bg-slate-500"
              onClick={() => {
                dispatch(setCalendarFilter("personal"));
              }}
            >
              <BsCheck
                className={`text-xl text-white ${
                  calendarfilter.includes("personal") ? "block" : "hidden"
                }`}
              />
            </button>
            <span className="text-sm ">Personal</span>
          </div>
          <div className=" flex items-center mt-3 gap-3 text-[#97a2ac]">
            <button
              type="button"
              className="h-5 w-5 rounded-md cursor-pointer bg-slate-500"
              onClick={() => {
                dispatch(setCalendarFilter("business"));
              }}
            >
              <BsCheck
                className={`text-xl text-white ${
                  calendarfilter.includes("business") ? "block" : "hidden"
                }`}
              />
            </button>
            <span className="text-sm ">Business</span>
          </div>
          <div className=" flex items-center mt-3 gap-3 text-[#97a2ac]">
            <button
              type="button"
              className="h-5 w-5 rounded-md cursor-pointer bg-slate-500"
              onClick={() => {
                dispatch(setCalendarFilter("family"));
              }}
            >
              <BsCheck
                className={`text-xl text-white ${
                  calendarfilter.includes("family") ? "block" : "hidden"
                }`}
              />
            </button>
            <span className="text-sm ">Family</span>
          </div>
          <div className=" flex items-center mt-3 gap-3 text-[#97a2ac]">
            <button
              type="button"
              className="h-5 w-5 rounded-md cursor-pointer bg-slate-500"
              onClick={() => {
                dispatch(setCalendarFilter("holiday"));
              }}
            >
              <BsCheck
                className={`text-xl text-white ${
                  calendarfilter.includes("holiday") ? "block" : "hidden"
                }`}
              />
            </button>
            <span className="text-sm ">Holiday</span>
          </div>
          <div className=" flex items-center mt-3 gap-3 text-[#97a2ac]">
            <button
              type="button"
              className="h-5 w-5 rounded-md cursor-pointer bg-slate-500"
              onClick={() => {
                dispatch(setCalendarFilter("etc"));
              }}
            >
              <BsCheck
                className={`text-xl text-white ${
                  calendarfilter.includes("etc") ? "block" : "hidden"
                }`}
              />
            </button>
            <span className="text-sm ">ETC</span>
          </div>
        </div>
      </div>
      <div className="w-3/4 text-gray-500">
        <BigCalendar
          onSelectSlot={({ start, end }) => {
            dispatch(setEventStartTime(new Date(start).valueOf()));
            dispatch(setEventEndTime(new Date(end).valueOf()));
            dispatch(setIsEventActive(true));
          }}
          onDoubleClickEvent={({ start, end, title, category, id }) => {
            if (title) {
              dispatch(setIsEventActive(true));
              dispatch(setEventUpdate(true));
              dispatch(setEventStartTime(new Date(start).valueOf()));
              dispatch(setEventEndTime(new Date(end).valueOf()));
              dispatch(setEventTitle(title));
              dispatch(setEventCategory(category));
              dispatch(setEventId(id));
            }
          }}
          localizer={localizer}
          events={events}
          selectable
        />
      </div>
      <div>
        <EventForm />
      </div>
    </div>
  );
}
