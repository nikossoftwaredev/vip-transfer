import {
  add,
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  isSameDay,
  isSameMonth,
  isToday,
  parse,
  parseISO,
  startOfMonth,
  startOfToday,
} from "date-fns";
import { useState } from "react";
import { MdArrowLeft, MdArrowRight } from "react-icons/md";

function classNames(...classes: (string | boolean)[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Calendar() {
  const today = startOfToday();
  const [selectedDay, setSelectedDay] = useState(today);
  const [currentMonth, setCurrentMonth] = useState(format(today, "MMM-yyyy"));
  const firstDayCurrentMonth = startOfMonth(currentMonth);
  const firstDayIndex = getDay(firstDayCurrentMonth);
  const lastDayIndex = getDay(endOfMonth(firstDayCurrentMonth));

  const days = eachDayOfInterval({
    start: add(startOfMonth(currentMonth), { days: -firstDayIndex + 1 }),
    end: add(endOfMonth(currentMonth), { days: 7 - lastDayIndex }),
  });

  function onClickPrevious() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 });
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
  }

  function onClickNext() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 });
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
  }

  return (
    <div className="w-full text-base-content ">
      <div className="flex w-full justify-between items-center">
        <button
          type="button"
          onClick={onClickPrevious}
          className="btn btn-neutral mt-4"
        >
          <span className="sr-only">Previous month</span>
          <MdArrowLeft aria-hidden="true" />
        </button>
        <h2 className="text-2xl">
          {format(firstDayCurrentMonth, "MMMM yyyy")}
        </h2>
        <button
          onClick={onClickNext}
          type="button"
          className="btn btn-neutral mt-4"
        >
          <span className="sr-only">Next month</span>
          <MdArrowRight aria-hidden="true" />
        </button>
      </div>
      <div className="grid grid-cols-7 mt-10 leading-6 text-center text-primary">
        <div>Mo</div>
        <div>Tu</div>
        <div>We</div>
        <div>Th</div>
        <div>Fr</div>
        <div>Sa</div>
        <div>Su</div>
      </div>
      <div className="grid grid-cols-7 mt-2 text-sm">
        {days.map((day, dayIdx) => {
          return (
            <div key={day.toString()}>
              <button
                type="button"
                onClick={() => setSelectedDay(day)}
                className={classNames(
                  "text-base-content",
                  !isSameDay(day, selectedDay) &&
                    isToday(day) &&
                    "text-secondary",
                  !isSameDay(day, selectedDay) &&
                    !isToday(day) &&
                    !isSameMonth(day, firstDayCurrentMonth) &&
                    "text-gray-600",
                  isSameDay(day, selectedDay) &&
                    isToday(day) &&
                    "bg-base-content text-secondary",
                  isSameDay(day, selectedDay) &&
                    !isToday(day) &&
                    "bg-base-content text-base-300",
                  !isSameDay(day, selectedDay) &&
                    "hover:bg-base-content hover:text-base-300",
                  (isSameDay(day, selectedDay) || isToday(day)) &&
                    "font-semibold",
                  "mx-auto flex h-8 w-8 items-center justify-center rounded-full"
                )}
              >
                <time dateTime={format(day, "yyyy-MM-dd")}>
                  {format(day, "d")}
                </time>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

let colStartClasses = [
  "",
  "col-start-2",
  "col-start-3",
  "col-start-4",
  "col-start-5",
  "col-start-6",
  "col-start-7",
];
