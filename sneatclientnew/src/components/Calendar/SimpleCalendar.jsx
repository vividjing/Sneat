import dayjs from "dayjs";
import React, { useState } from "react";
import { generateDate, months } from "../../data/date";
import cn from "../../data/cn";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import {
  setEventEndTime,
  setEventStartTime,
  setIsEventActive,
} from "../../state";
import moment from "moment";

export default function Calendar() {
  const days = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
  const currentDate = dayjs();
  const [today, setToday] = useState(currentDate);
  const dispatch = useDispatch();
  const [selectDate, setSelectDate] = useState(currentDate);
  const { currentColor, isEventActive, eventStartTime, eventEndTime } =
    useSelector((state) => state.global);
  const clickHandler = () => {
    dispatch(setIsEventActive(true));
    dispatch(
      setEventStartTime(
        selectDate ? moment(selectDate).toDate() : moment(currentDate).toDate()
      )
    );
    dispatch(
      setEventEndTime(
        selectDate ? moment(selectDate).toDate() : moment(currentDate).toDate()
      )
    );
  };

  return (
    <div className="flex justify-center mt-1 items-center sm:flex-row flex-col">
      <div>
        <button
          onClick={clickHandler}
          className="w-full p-3 rounded-md text-white font-bold mb-6"
          style={{ backgroundColor: currentColor }}
        >
          + ADD EVENT
        </button>
        <div className="flex justify-center items-center">
          <div className="flex gap-4 items-center ">
            <GrFormPrevious
              className="w-5 h-5 cursor-pointer hover:scale-105 transition-all"
              onClick={() => {
                setToday(today.month(today.month() - 1));
              }}
            />
            <h1
              className=" cursor-pointer hover:scale-105 transition-all"
              onClick={() => {
                setToday(currentDate);
              }}
            >
              {months[today.month()]}, {today.year()}
            </h1>
            <GrFormNext
              className="w-5 h-5 cursor-pointer hover:scale-105 transition-all"
              onClick={() => {
                setToday(today.month(today.month() + 1));
              }}
            />
          </div>
        </div>
        <div className="grid grid-cols-7 ">
          {days.map((day, index) => {
            return (
              <h1
                key={index}
                className="text-sm text-center mt-3 h-6 w-10 grid place-content-center text-gray-500 select-none"
              >
                {day}
              </h1>
            );
          })}
        </div>

        <div className=" grid grid-cols-7 ">
          {generateDate(today.month(), today.year()).map(
            ({ date, currentMonth, today }, index) => {
              return (
                <div
                  key={index}
                  className="p-2 text-center h-8 grid place-content-center text-sm border-t"
                >
                  <h1
                    className={cn(
                      currentMonth ? "" : "text-gray-400",
                      today ? "bg-gray-500 text-white" : "",
                      selectDate.toDate().toDateString() ===
                        date.toDate().toDateString()
                        ? "bg-black text-white"
                        : "",
                      "h-8 w-8 rounded-sm grid place-content-center hover:bg-gray-300 hover:text-white transition-all cursor-pointer select-none"
                    )}
                    onClick={() => {
                      setSelectDate(date);
                    }}
                  >
                    {date.date()}
                  </h1>
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
}
