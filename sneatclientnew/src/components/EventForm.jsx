import React, { useEffect, useState } from "react";
import { MdOutlineCancel } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
  setEventCategory,
  setEventTitle,
  setEventUpdate,
  setIsEventActive,
} from "../state";
import {
  useCreateEventMutation,
  useDeleteEventMutation,
  useUpdateEventMutation,
} from "../state/eventApi";
import { RiDeleteBin6Line } from "react-icons/ri";

export default function EventForm() {
  const {
    currentColor,
    isEventActive,
    eventStartTime,
    eventEndTime,
    eventUpdate,
    eventCategory,
    eventTitle,
    eventId,
  } = useSelector((state) => state.global);

  const dispatch = useDispatch();
  const [addEventFn, { error }] = useCreateEventMutation();
  const [updateEventFn, { error: updateError }] = useUpdateEventMutation();
  const [deleteEventFn, { error: deleteError }] = useDeleteEventMutation();
  const startTime = () => {
    if (eventStartTime) {
      const date = new Date(eventStartTime);
      const yy = date.getFullYear();
      const mm = date.getMonth() + 1;
      const dd = date.getDate();
      return `${yy}-${mm}-${dd}`;
    } else {
      return "";
    }
  };
  const endTime = () => {
    if (eventEndTime) {
      const date2 = new Date(eventEndTime);
      const yy2 = date2.getFullYear();
      const mm2 = date2.getMonth() + 1;
      const dd2 = date2.getDate();
      return `${yy2}-${mm2}-${dd2}`;
    } else {
      return "";
    }
  };

  const initStart = startTime();
  const initEnd = endTime();

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("personal");
  const [start, setStart] = useState(initStart);
  const [end, setEnd] = useState(initEnd);
  const [description, setDescription] = useState("");


  useEffect(() => {
    setStart(initStart);
    setEnd(initEnd);
    setTitle(eventTitle);
    if (eventTitle) {
      setCategory(eventCategory);
    }
  }, [initEnd, initStart, eventCategory, eventTitle]);


  const submitHandler = (e) => {
    e.preventDefault();
    if (eventUpdate) {
      updateEventFn({ title, category, start, end, description, eventId }).then(
        (res) => {
          if (!res.error) {
            console.log("succeed");
            dispatch(setIsEventActive(false));
            dispatch(setEventUpdate(false));
            dispatch(setEventTitle(""));
            dispatch(setEventCategory(""));
          }
        }
      );
    } else {
      addEventFn({ title, category, start, end, description }).then((res) => {
        if (!res.error) {
          console.log("succeed");
          dispatch(setIsEventActive(false));
        }
      });
    }
  };
  const resetHandler = () => {
    setStart(initStart);
    setEnd(initEnd);
    setCategory(eventCategory);
    setTitle(eventTitle);
  };
  const deleteHandler = () => {
    deleteEventFn({ eventId }).then((res) => {
      if (!res.error) {
        dispatch(setIsEventActive(false));
        dispatch(setEventUpdate(false));
        dispatch(setEventTitle(""));
        dispatch(setEventCategory(""));
      }
    });
  };
  return (
    <div>
      {isEventActive && (
        <form onSubmit={submitHandler}>
          <div className="bg-half-transparent w-screen fixed nav-item top-0 right-0">
            <div className="float-right h-screen dark:text-gray-200  bg-white dark:bg-[#484B52] w-400">
              <div className="flex justify-between items-center p-4 ml-4 ">
                <p className=" text-lg">
                  {eventUpdate ? "Update Event" : "Add Event"}
                </p>
                <div className="flex gap-2">
                  <button
                    type="button"
                    style={{ color: "rgb(153, 171, 180)", borderRadius: "50%" }}
                    className="text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray"
                    onClick={deleteHandler}
                  >
                    <RiDeleteBin6Line />
                  </button>
                  <button
                    type="button"
                    style={{ color: "rgb(153, 171, 180)", borderRadius: "50%" }}
                    className="text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray"
                    onClick={() => {
                      dispatch(setIsEventActive(false));
                    }}
                  >
                    <MdOutlineCancel />
                  </button>
                </div>
              </div>
              <div className="flex px-4 mt-6 gap-4">
                <div className="relative border-1 h-16 pl-4 pr-2 rounded-md border-gray-300 grow">
                  <input
                    className="w-full h-full border-0 outline-0"
                    type="text"
                    onChange={(e) => {
                      setTitle(e.target.value);
                    }}
                    value={title}
                  />
                  <p className="absolute -top-2 left-3 text-gray-400 bg-[#fafbfb] pl-2 pr-2 text-xs">
                    Title
                  </p>
                </div>
              </div>
              <div className="flex px-4 mt-6">
                <div className="relative border-1 h-16 pl-4 pr-2 rounded-md border-gray-300 grow">
                  <select
                    className="w-full h-full  text-gray-400 outline-0"
                    onChange={(e) => {
                      setCategory(e.target.value);
                    }}
                    value={category}
                  >
                    <option value="ETC">ETC</option>
                    <option value="Personal">Personal</option>
                    <option value="Business">Business</option>
                    <option value="Family">Family</option>
                    <option value="Holiday">Holiday</option>
                  </select>

                  <p className="absolute -top-2 left-3 text-gray-400 bg-[#fafbfb] pl-2 pr-2 text-xs">
                    Category
                  </p>
                </div>
              </div>
              <div className="flex px-4 mt-6 gap-4">
                <div className="relative border-1 h-16 pl-4 pr-2 text-gray-400 rounded-md border-gray-300 grow">
                  <input
                    className="w-full h-full border-0 outline-0"
                    type="text"
                    onChange={(e) => {
                      setStart(e.target.value);
                    }}
                    value={start}
                  />
                  <p className="absolute -top-2 left-3 text-gray-400 bg-[#fafbfb] pl-2 pr-2 text-xs">
                    Start Date
                  </p>
                </div>
              </div>
              <div className="flex px-4 mt-6 gap-4">
                <div className="relative border-1 h-16 pl-4 pr-2  text-gray-400 rounded-md border-gray-300 grow">
                  <input
                    className="w-full h-full border-0 outline-0"
                    type="text"
                    onChange={(e) => {
                      setEnd(e.target.value);
                    }}
                    value={end}
                  />
                  <p className="absolute -top-2 left-3 text-gray-400 bg-[#fafbfb] pl-2 pr-2 text-xs">
                    End Date
                  </p>
                </div>
              </div>
              <div className="flex px-4 mt-6 gap-4">
                <div className="relative border-1 py-6 h-24 pl-4 pr-2 rounded-md border-gray-300 grow">
                  <input
                    className="w-full h-full border-0 outline-0"
                    type="text"
                    onChange={(e) => {
                      setDescription(e.target.value);
                    }}
                    value={description}
                  />
                  <p className="absolute -top-2 left-3 text-gray-400 bg-[#fafbfb] pl-2 pr-2 text-xs">
                    Description
                  </p>
                </div>
              </div>
              <div className="flex gap-2 justify-center px-6 mt-10 grow">
                <button
                  className="rounded-md text-white px-4 py-1"
                  style={{ backgroundColor: currentColor }}
                  type="submit"
                >
                  {eventUpdate ? "UPDATE" : "ADD"}
                </button>
                <button
                  onClick={resetHandler}
                  type="reset"
                  className="border-1 rounded-md px-4 py-1"
                >
                  RESET
                </button>
              </div>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
