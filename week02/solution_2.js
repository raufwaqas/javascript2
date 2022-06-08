"use strict";

const monday = [
  {
    name: "Write a summary HTML/CSS",
    duration: 180,
  },
  {
    name: "Some web development",
    duration: 120,
  },
  {
    name: "Fix homework for class10",
    duration: 20,
  },
  {
    name: "Talk to a lot of people",
    duration: 1.0,
  },
];

const tuesday = [
  {
    name: "Keep writing summary",
    duration: 1.0,
  },
  {
    name: "Some more web development",
    duration: 180,
  },
  {
    name: "Staring out the window",
    duration: 10,
  },
  {
    name: "Talk to a lot of people",
    duration: 1.0,
  },
  {
    name: "Look at application assignments new students",
    duration: 40,
  },
];

/**
 * ! converts minutes to hours
 */

let convert_minute_to_hours = (data) => {
  return data.map((x) => {
    return {
      taskName: x.name,
      duration:
        x.duration % 2 !== 0 ? x.duration : +(x.duration / 60).toFixed(2),
    };
  });
};

/**
 * ! removing tasks which are below than 2 hours
 */

let remove_smaller_tasks = (data) => {
  let mapped_data = convert_minute_to_hours(data);
  let filtered_time = mapped_data.filter((x) => (x.duration >= 2 ? x : null));
  return filtered_time;
};

/**
 * ! calculate wage by a per-hour basis and summing all numbers
 */

let calculate_wages = (data) => {
  let mapped_data = remove_smaller_tasks(data);
  let count_wage = mapped_data
    .map((x) => +(x.duration * 20).toFixed(2))
    .reduce((x, y) => x + y, 0);
  return count_wage;
};

let sum = () => {
  let day_1 = calculate_wages(monday);
  let day_2 = calculate_wages(tuesday);
  let count_wage = day_1 + day_2;
  return `€${count_wage}`;
};

console.log(sum());


module.exports = {
  convert_minute_to_hours,
  remove_smaller_tasks,
  calculate_wages,
  sum,
};
